export default defineEventHandler(async (event) => {
  let data = await readBody(event)
  return { data }
})