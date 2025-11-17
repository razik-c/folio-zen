import calendar
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from openai import OpenAI
from dotenv import load_dotenv
import os
from datetime import datetime, date
import dateparser
from typing import List, Optional

from db import engine, Base, SessionLocal, Product

load_dotenv()

api_key = os.getenv("OPEN_AI_API")
if not api_key:
    raise RuntimeError("OPEN_AI_API not set for FastAPI")

client = OpenAI(api_key=api_key)
app = FastAPI()


# ---------- STARTUP ----------
@app.on_event("startup")
def on_startup():
    Base.metadata.create_all(bind=engine)


# ---------- DB DEP ----------
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ---------- Pydantic MODELS ----------
class DateParseRequest(BaseModel):
    text: str


class DateParseResponse(BaseModel):
    date: str | None
    raw: str


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


class ProductCreate(BaseModel):
    sku: str
    product_name: str
    # can be ISO "2025-10-20", or natural text like "20 oct 2025", or null
    expiry_date: Optional[str] = None
    count: int = 0
    raw: Optional[str] = None  # accepted but not stored because model has no such column


# ---------- DATE PARSE ----------
@app.post("/date-parse", response_model=DateParseResponse)
def date_parse(payload: DateParseRequest):
    raw = payload.text.strip()
    if not raw:
        return DateParseResponse(date=None, raw=raw)

    dt = dateparser.parse(
        raw,
        settings={
            "PREFER_DAY_OF_MONTH": "first",
            "PREFER_DATES_FROM": "future",
            "DATE_ORDER": "DMY",
        },
    )

    if not dt:
      # second try MDY
      dt = dateparser.parse(
          raw,
          settings={
              "PREFER_DAY_OF_MONTH": "first",
              "PREFER_DATES_FROM": "future",
              "DATE_ORDER": "MDY",
          },
      )

    if not dt:
        return DateParseResponse(date=None, raw=raw)

    # return ISO
    return DateParseResponse(date=dt.date().isoformat(), raw=raw)


def _normalize_expiry(raw_val: Optional[str]) -> Optional[date]:
    if not raw_val:
        return None

    # try pure date first
    try:
        return date.fromisoformat(raw_val)
    except ValueError:
        pass

    # try datetime ISO
    try:
        return datetime.fromisoformat(raw_val).date()
    except ValueError:
        pass

    # try human text via dateparser
    dt = dateparser.parse(
        raw_val,
        settings={
            "PREFER_DAY_OF_MONTH": "first",
            "PREFER_DATES_FROM": "future",
            "DATE_ORDER": "DMY",
        },
    )
    if not dt:
        return None

    parsed = dt.date()

    # ensure future-ish: if parsed < today, bump year by 1
    today = date.today()
    if parsed < today:
        try:
            parsed = parsed.replace(year=today.year + 1)
        except ValueError:
            # e.g. 29 Feb
            pass

    return parsed


# ---------- LIST PRODUCTS ----------
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


# ---------- CREATE PRODUCT ----------
@app.post("/products", response_model=ProductOut)
def create_product(payload: ProductCreate, db=Depends(get_db)):
    expiry_d = _normalize_expiry(payload.expiry_date)

    obj = Product(
        sku=payload.sku,
        product_name=payload.product_name,
        expiry_date=expiry_d,
        count=payload.count,
        status="Fresh",  # instead of "Pending"
        # do NOT pass last_checked, created_at, updated_at -> DB will fill
    )

    db.add(obj)
    db.commit()
    db.refresh(obj)

    return ProductOut(
        id=obj.id,
        sku=obj.sku,
        product_name=obj.product_name,
        expiry_date=obj.expiry_date.isoformat() if obj.expiry_date else None,
        count=obj.count,
        status=obj.status,
        last_checked=obj.last_checked.isoformat() if obj.last_checked else None,
    )
