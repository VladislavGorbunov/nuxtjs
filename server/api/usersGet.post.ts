export default defineEventHandler(async (event) => {
  
  let data: any
  
  let user = await readBody(event)

  data = await $fetch(`https://api.vk.ru/method/users.get?user_ids=${user.id}&fields=bdate&access_token=9cb1a2819cb1a2819cb1a2810a9f8c897799cb19cb1a281f5970fba703464b3566c6031&v=5.199&lang=ru`)

  if (data.response.length != 0) {
    // Записываем данные в БД
    return true
  } else {
    return false
  }

  // let info = Object.values(data.response)

  // for (let userInfo in info) {
  //   return info[userInfo]
  // }
  
})