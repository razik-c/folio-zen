export default defineEventHandler(async () => {
  const backend = process.env.FASTAPI_URL || 'http://localhost:8000'
  return await $fetch(`${backend}/products`)
})
