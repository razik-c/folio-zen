// server/api/products.post.ts
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    sku: string
    product_name: string
    expiry_date?: string | null
    count?: number
    raw?: string | null
  }>(event)

  if (!body?.sku || !body?.product_name) {
    event.node.res.statusCode = 400
    return { error: 'sku and product_name are required' }
  }

  try {
    const res = await fetch('http://localhost:8000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sku: body.sku,
        product_name: body.product_name,
        expiry_date: body.expiry_date ?? null,
        count: body.count ?? 0,
        raw: body.raw ?? null,
      }),
    })

    if (!res.ok) {
      const errText = await res.text()
      event.node.res.statusCode = res.status
      return { error: errText || 'FastAPI error' }
    }

    const data = await res.json()
    return data
  } catch (err: any) {
    event.node.res.statusCode = 500
    return { error: err?.message || 'Network error' }
  }
})
