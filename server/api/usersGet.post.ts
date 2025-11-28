import mysql from 'mysql2/promise';

export default defineEventHandler(async (event) => {
  
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'anonviewer',
  });
  
  interface dataI {
    response: {
      id: number, 
      first_name: string, 
      last_name: string 
    }[]
  }
  
  let data: dataI
  
  let user = await readBody(event)

  data = await $fetch(`https://api.vk.ru/method/users.get?user_ids=${user.id}&fields=bdate&access_token=9cb1a2819cb1a2819cb1a2810a9f8c897799cb19cb1a281f5970fba703464b3566c6031&v=5.199&lang=ru`)

  console.log(data)

  if (data.response.length != 0) {
    // Записываем данные в БД
    try {
      const [results, fields] = await connection.query(
        `INSERT INTO users (id, vk_id, first_name, last_name) VALUES (NULL, "96585686", "${data.response[0].first_name}", "ghdfhhfdh")`
      )
    } catch (err) {
      console.log(err);
      return false
    }

    return true
  } else {
    return false
  }

  // let info = Object.values(data.response)

  // for (let userInfo in info) {
  //   return info[userInfo]
  // }
  
})