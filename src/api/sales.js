import {HTTP} from './http'


export default {
NEW_SALE : async (newsale) => {
  
    const res = () => {
      return new Promise ((resolve, reject) => {
        HTTP.post('sale/add', newsale).then(response => {
          resolve(response.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  
    return await res()
  },

  GET_SALE: async (id) => {
 
    const res = () => {
        return new Promise ((resolve, reject) => {
          HTTP.get('sale/get/'.concat(id)).then(response => {
            resolve(response.data)
          }).catch(err => {
            reject(err)
          })
        })
      }
    
      return await res()
    },

  FETCH_SALES: async () => {
  
    const res = () => {
      return new Promise ((resolve, reject) => {
        HTTP.get("sale/getsales").then(response => {
          resolve(response.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  
    return await res()
  },


UPDATE_SALE: async (updtsale) => {
  
    const res = () => {
      return new Promise ((resolve, reject) => {
        HTTP.put("sale/update", updtsale).then(response => {
          resolve(response.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  
    return await res()
  },
  
  
   DELETE_SALE: async (id) => {
    const res = () => {
      return new Promise ((resolve, reject) => {
        HTTP.delete("sale/delete/".concat(id)).then(response => {
          resolve(response.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  
    return await res()
  }
}