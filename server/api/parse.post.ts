export default defineEventHandler(async (event) => {
  const body = await readBody<{ text: string }>(event)

  const backendUrl = 'http://localhost:8000/parse'

  try {
    const result = await $fetch(backendUrl, {
      method: 'POST',
      body,
    })
    return result
  } catch (err: any) {
    return { error: true, detail: err?.data || err?.message }
  }
})
