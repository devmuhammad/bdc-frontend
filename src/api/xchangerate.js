import {HTTP} from './http'


export default {
NEW_XCHANGERATE : async (newrate) => {
  
    const res = () => {
      return new Promise ((resolve, reject) => {
        HTTP.post('xchangerate/add', newrate).then(response => {
          resolve(response.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  
    return await res()
  },
  
//    UPDATE_SUBACCOUNT = async (supplier) => {
//     let endpoint = encodeURI("/v1/cerp/account/update/subaccount")
  
//     const res = () => {
//       return new Promise ((resolve, reject) => {
//         HTTP.post(endpoint, supplier).then(response => {
//           resolve(response.data)
//         }).catch(err => {
//           reject(err)
//         })
//       })
//     }
  
//     return await res()
//   },
  
  
//    DELETE_ = async (id) => {
//     let endpoint = encodeURI("/v1/cerp/account/subaccount/".concat(id))
  
//     const res = () => {
//       return new Promise ((resolve, reject) => {
//         HTTP.post(endpoint).then(response => {
//           resolve(response.data)
//         }).catch(err => {
//           reject(err)
//         })
//       })
//     }
  
//     return await res()
//   },
  
FETCH_XCHANGERATES: async () => {
  
    const res = () => {
      return new Promise ((resolve, reject) => {
        HTTP.get("xchangerate/getrates").then(response => {
          resolve(response.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  
    return await res()
  }
}