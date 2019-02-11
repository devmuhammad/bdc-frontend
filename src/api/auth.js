import {userHTTP} from './http'

export default {

LOGIN: async (logindet) => {
    const res = () => {
        return new Promise ((resolve, reject) => {
          userHTTP.post('auth/login',logindet).then(response => {
            resolve(response.data)
          }).catch(err => {
            reject(err)
          })
        })
      }
    
      return await res()
    },

}