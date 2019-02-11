import {HTTP} from './http'


export default {

GETCURRENCIES: async () => {
    const res = () => {
        return new Promise ((resolve, reject) => {
          HTTP.get('currency/getcurrencies', ).then(response => {
            resolve(response.data)
          }).catch(err => {
            reject(err)
          })
        })
      }
    
      return await res()
    },

GET_CURRENCY: async (id) => {
 
    const res = () => {
        return new Promise ((resolve, reject) => {
          HTTP.get('currency/'.concat(id)).then(response => {
            resolve(response.data)
          }).catch(err => {
            reject(err)
          })
        })
      }
    
      return await res()
    },

}