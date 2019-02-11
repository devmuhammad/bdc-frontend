import api from "../../api/purchase"

let state = {
  
    //
    purchaseDetails:{},
    purchdeetList: [],
    bidDetails:{},
    newPurchase: {},
    newBid: {},
    newPurchase_status:undefined,
    newBid_status:undefined,
    newPurchase_error:{},
    purchaseList:[],
    purchaseadded:false,
    bidadded:false,
    getPurchase_error:{},
    purchaseLength:0,
    deletePurchase_error:{},
    updatePurchase_status:{},

    singlepurchase:{},
    bid_purchase:{},
    newPurchaseList:[],
}

let getters = {
    purchdeetList : state => state.purchdeetList,
    purchaseList : state => state.purchaseList,
    purchaseDetails : state => state.purchaseDetails,
    bidDetails : state => state.bidDetails,
    getPurchase_error : state => state.getPurchase_error,
    purchaseLength : state => state.purchaseLength,
    newPurchase: state => state.newPurchase,
    newBid: state => state.newBid,
    newPurchase_status: state => state.newPurchase_status,
    newBid_status: state => state.newBid_status,
    newPurchase_error: state => state.newPurchase_error,
    purchaseadded: state => state.purchaseadded,
    bidadded: state => state.bidadded,
    deletePurchase_error: state => state.deletePurchase_error,
    updatePurchase_status: state => state.updatePurchase_status,

    newPurchaseList : state => state.newPurchaseList,
    bid_purchase : state => state.bid_purchase,
    singlepurchase : state => state.singlepurchase,
}

const mutations = {
  
    // Purchases - Get
    getPurchases: (state, purchaseList) => {

      for( let i = 0; i < purchaseList.length; i++){
        let year = new Date(purchaseList[i].transaction_date).getYear() + 1900
        let month = new Date(purchaseList[i].transaction_date).getMonth() + 1
        let day = new Date(purchaseList[i].transaction_date).getDate()
        month = month < 10 ? '0'+ month : month;
        day = day < 10 ? '0'+ day : day;
        purchaseList[i].transaction_date = year + '-' + month + '-' +  day 
      }

        state.purchaseList = purchaseList
        state.purchaseLength = purchaseList.length
  },

    getPurchaseDetailList: (state, purchdeetList) => {
        state.purchdeetList = purchdeetList
        // state.purchaseLength = purchaseList.length
  },

    addNewPurchase: (state, newPurchase) => {
      state.newPurchase_status = newPurchase.status;
      api.FETCH_PURCHASES([0])
    },

    addNewBid: (state, newBid) => {
      state.newBid_status = newBid.status;
      // api.FETCH_PURCHASES([0])
    },

    getPurchase: (state,purchaseDetails) => { 
        state.purchaseDetails = purchaseDetails
    },

    updatePurchase: (state, newPurchase) => {
        state.updatePurchase_status = newPurchase.status; 
        api.FETCH_PURCHASES([0])
      },
    
      deletePurchase: (state, id) => {
        api.DELETE_PURCHASE(id)
        api.FETCH_PURCHASES([0])
      },

    changepurchasestatus: (state) => {
        state.purchaseadded = false
    },

    emptypurchaseList: (state) => {
        state.newPurchaseList = []
    },
}  

const actions = {
    getPurchases: async ({commit, state}, purchaseList) => {
        try {
        const fetchPurchases = () => {
          return new Promise((resolve, reject) => {
            api.FETCH_PURCHASES(purchaseList)
            .then((res) => { resolve(res)})
            .catch((err) => {  reject(err) })
          })  
          .then((res) => {
            commit('getPurchases', res.data)        
          })
          .catch((err) => { console.log({'error':err.message}); state.getPurchase_error.error = err.message})
        }  
    
        return await fetchPurchases()
        } catch (error) {
          console.log({'error':error.message}); state.fetch_error.error = error.message
        }
    },

    getPurchaseDetailList: async ({commit, state}, currencyid) => {
        try {
        const fetchPurchases = () => {
          return new Promise((resolve, reject) => {
            api.GET_PURCHASEDETAILS(currencyid)
            .then((res) => { resolve(res)})
            .catch((err) => {  reject(err) })
          })  
          .then((res) => {
            commit('getPurchaseDetailList', res.data)        
          })
          .catch((err) => { console.log({'error':err.message}); state.getPurchase_error.error = err.message})
        }  
    
        return await fetchPurchases()
        } catch (error) {
          console.log({'error':error.message}); state.fetch_error.error = error.message
        }
    },

    getPurchase: async ({commit}, id) => {
        try {
          
        const fetchPurchaseDetails = () => {
          return new Promise((resolve, reject) => {
            // state.currencyLoading = true
            api.GET_PURCHASE(id)
            .then((res) => { resolve(res)})
            .catch((err) => {  reject(err) })
          })
          .then((res) => {
            commit('getPurchase', res.data)
            state.currencyLoading = false
          })
          .catch((err) => { console.log({'error':err.message}); 
          state.getPurchase_error.error = err.message})
        }  
        return await fetchPurchaseDetails()
    
        } catch (error) {
          console.log({'error':error.message}); state.fetchPurchase_error.error = error.message
        }
      },

    addNewPurchase: async ({commit, state}, newPurchase) => {
        const create = () => {
            // console.log(newPurchase)
          return new Promise ((resolve, reject) => {
          state.newPurchase_status = 0
        //   state.XchangerateLoading = true
          api.NEW_PURCHASE(newPurchase)
          .then((res) => { resolve(res), state.purchaseadded = true})
          .catch((err) => { reject(err) })
        })
        .then((res) => { 
          commit('addNewPurchase', res.data)    
        //   state.itemLoading = false
      })
        .catch((err) => {state.newPurchase_error.error = err.message})
      }

      return await create()
    },

    addNewBid: async ({commit, state}, newBid) => {
        const create = () => {
            
          return new Promise ((resolve, reject) => {
          state.newPurchase_status = 0
        //   state.XchangerateLoading = true
          api.NEW_BIDPURCHASE(newBid)
          .then((res) => { resolve(res),state.bidDetails = res.data, state.bidadded = true})
          .catch((err) => { reject(err) })
        })
        .then((res) => { 
          commit('addNewBid', res.data)    
        //   state.itemLoading = false
      })
        .catch((err) => {state.newPurchase_error.error = err.message})
      }

      return await create()
    },

    updatePurchase: async ({commit, state}, newPurchase) => {
        const update = () => {
          return new Promise((resolve, reject) => {
            state.updatePurchase_status = 0
            // state.PurchaseLoading = true
            api.UPDATE_PURCHASE(newPurchase)
              .then((res) => { resolve(res) })
              .catch((err) => { reject(err) })
            })
            .then((res) => { 
              commit('updatePurchase', res.data)
            //   state.PurchaseLoading = false
            })
            .catch((err) => { state.newPurchase_error.error = err.message })
          }
  
        return await update()
      },
  
      deletePurchase: ({commit}, purchaseid) => commit('deletePurchase', purchaseid),

      emptypurchaseList: ({ commit }) => commit('emptypurchaseList'),
      changepurchasestatus: ({ commit }) => commit('changepurchasestatus'),
}

export default {
    state,
    getters,
    actions,
    mutations,
  }