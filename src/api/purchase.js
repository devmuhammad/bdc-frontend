import {HTTP} from './http'


export default {
NEW_PURCHASE : async (newpurchase) => {
  
    const res = () => {
      return new Promise ((resolve, reject) => {
        HTTP.post('purchase/add', newpurchase).then(response => {
          resolve(response.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  
    return await res()
  },

NEW_BIDPURCHASE : async (newbid) => {
  
    const res = () => {
      return new Promise ((resolve, reject) => {
        HTTP.post('bidpurchase/add', newbid).then(response => {
          resolve(response.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  
    return await res()
  },
  
   UPDATE_PURCHASE: async (updtpurchase) => {
  
    const res = () => {
      return new Promise ((resolve, reject) => {
        HTTP.put("purchase/update", updtpurchase).then(response => {
          resolve(response.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  
    return await res()
  },
  
  
   DELETE_PURCHASE: async (id) => {
    const res = () => {
      return new Promise ((resolve, reject) => {
        HTTP.delete("purchase/delete/".concat(id)).then(response => {
          resolve(response.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  
    return await res()
  },


  GET_PURCHASE: async (id) => {
 
    const res = () => {
        return new Promise ((resolve, reject) => {
          HTTP.get('purchase/get/'.concat(id)).then(response => {
            resolve(response.data)
          }).catch(err => {
            reject(err)
          })
        })
      }
    
      return await res()
    },

  GET_PURCHASEDETAILS: async (id) => {
 
    const res = () => {
        return new Promise ((resolve, reject) => {
          HTTP.get('purchase/getpurchasedetail/'.concat(id)).then(response => {
            resolve(response.data)
          }).catch(err => {
            reject(err)
          })
        })
      }
    
      return await res()
    },

FETCH_PURCHASES: async () => {
  
    const res = () => {
      return new Promise ((resolve, reject) => {
        HTTP.get("purchase/getpurchases").then(response => {
          resolve(response.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  
    return await res()
  }
}