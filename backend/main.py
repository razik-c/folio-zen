from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from openai import OpenAI
from dotenv import load_dotenv
import os
from datetime import datetime
from typing import List
import re

from db import engine, Base, SessionLocal, Product

load_dotenv()

api_key = os.getenv("OPEN_AI_API")
if not api_key:
    raise RuntimeError("OPEN_AI_API not set for FastAPI")

client = OpenAI(api_key=api_key)
app = FastAPI()


class ProductItem(BaseModel):
    sku: str
    product_name: str
    expiry_date: str
    count: int


class ParseRequest(BaseModel):
    text: str


@app.on_event("startup")
def on_startup():
    Base.metadata.create_all(bind=engine)


@app.post("/parse", response_model=ProductItem)
def parse_product(payload: ParseRequest):
    try:
        resp = client.responses.parse(
            model="gpt-4o-2024-08-06",
            input=[
                {
                    "role": "system",
                    "content": (
                        "You are a structured data extractor. "
                        "Extract sku, product_name, expiry_date and count. "
                        "SKU means a short alphanumeric product code like A123, 101B, or SKU-45. "
                        "Ignore normal words as SKU. "
                        "If no SKU is present, return an empty string for sku. "
                        "Always include expiry_date in ISO YYYY-MM-DD. "
                        "If the year is missing, infer the next future date from today (today is 2025-11-03). "
                        "If no expiry is found, set expiry_date to ''. "
                        "Count must be an integer quantity if given, otherwise 0. "
                        'Respond only with this exact JSON schema: '
                        '{"sku": "...", "product_name": "...", "expiry_date": "...", "count": 0}'
                    ),
                },
                {"role": "user", "content": payload.text},
            ],
            text_format=ProductItem,
        )
        item: ProductItem = resp.output_parsed
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    # fallback count from raw text if model gave 0
    if item.count == 0:
        m = re.search(r"\b(\d{1,5})\b", payload.text)
        if m:
            item.count = int(m.group(1))

    # derive status
    status = "Unknown"
    expiry_date_db = None
    if item.expiry_date:
        try:
            expiry_date_db = datetime.strptime(item.expiry_date, "%Y-%m-%d").date()
            today = datetime.utcnow().date()
            if expiry_date_db < today:
                status = "Expired"
            elif (expiry_date_db - today).days <= 7:
                status = "Expiring Soon"
            else:
                status = "Fresh"
        except ValueError:
            status = "Invalid Date"

    db = SessionLocal()
    try:
        db_obj = Product(
            sku=item.sku,
            product_name=item.product_name,
            expiry_date=expiry_date_db,
            count=item.count,
            status=status,
            last_checked=datetime.utcnow(),
            updated_at=datetime.utcnow(),
        )
        print(">> inserting", item.sku, item.product_name, item.count)
        db.add(db_obj)
        db.commit()
    finally:
        db.close()

    return item


class ProductOut(BaseModel):
    id: int
    sku: str
    product_name: str
    expiry_date: str | None
    count: int
    status: str
    last_checked: str | None

    class Config:
        from_attributes = True


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/products", response_model=List[ProductOut])
def list_products(db=Depends(get_db)):
    rows = db.query(Product).order_by(Product.id.desc()).all()
    out: list[ProductOut] = []
    for r in rows:
        out.append(
            ProductOut(
                id=r.id,
                sku=r.sku,
                product_name=r.product_name,
                expiry_date=r.expiry_date.isoformat() if r.expiry_date else None,
                count=r.count,
                status=r.status,
                last_checked=r.last_checked.isoformat() if r.last_checked else None,
            )
        )
    return out
