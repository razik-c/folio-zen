import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody<{ text: string }>(event)
  if (!body?.text?.trim()) {
    return { date: null, raw: '', error: 'No text provided' }
  }

  try {
    const res = await fetch('http://localhost:8000/date-parse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: body.text }),
    })

    if (!res.ok) {
      const err = await res.text()
      return { date: null, raw: body.text, error: err || 'FastAPI error' }
    }

    const data = await res.json()
    return data
  } catch (err: any) {
    return { date: null, raw: body.text, error: err.message || 'Network error' }
  }
})
