import axios from 'axios';


const devUrl = 'http://localhost:3000/cabsolbdc/api/v1/'


export const HTTP = axios.create({  
      baseURL: devUrl,
      withCredentials:true,
      mode:'no-cors',
      credentials:'same-origin',
//   headers: {   
      headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type':'application/json',
       'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDE4NzQyNzEsInVzZXJuYW1lIjoibW9oYSIsImVtYWlsIjoibW9oYS5mb3IuYWxsQGdtYWlsLmNvbSIsImV4cCI6MTU1NDIxNjczOS42OCwiaWF0IjoxNTQ5MDMyNzM5fQ.t2jfbocktiHwPP1zfx1QXqitFlS_h2osYn38dzOkmg8'
       },
    })

export const userHTTP = axios.create({     
      baseURL: devUrl,
      withCredentials:true,
      mode:'no-cors',
      credentials:'same-origin',
//   headers: {   
      headers: {
      'Access-Control-Allow-Origin':'*',
       'Content-Type':'application/json',
       },
    })