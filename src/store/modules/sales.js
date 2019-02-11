import api from "../../api/sales"

let state = {

    saleDetails:{},
    addsalesview:false,
    // purchdeetList: [],
    newSale: {},
    newSale_error:{},
    salesList:[],
    saleadded:false,
    getSale_error:{},
    SaleLength:0,
    deleteSale_error:{},
    updateSale_status:{},


    sellingList:[]
}

let getters = {
    sellingList: state => state.sellingList,


    // purchdeetList : state => state.purchdeetList,
    addsalesview: state => state.addsalesview,
    salesList : state => state.salesList,
    saleDetails : state => state.saleDetails,
    getSale_error : state => state.getSale_error,
    saleLength : state => state.saleLength,
    newSale: state => state.newSale,
    newSale_status: state => state.newSale_status,
    newSale_error: state => state.newSale_error,
    saleadded: state => state.saleadded,
    deleteSale_error: state => state.deleteSale_error,
    updateSale_status: state => state.updateSale_status,
}

const mutations = {

    getSales: (state, salesList) => {

      for( let i = 0; i < salesList.length; i++){
        let year = new Date(salesList[i].transaction_date).getYear() + 1900
        let month = new Date(salesList[i].transaction_date).getMonth() + 1
        let day = new Date(salesList[i].transaction_date).getDate()
        month = month < 10 ? '0'+ month : month;
        day = day < 10 ? '0'+ day : day;
        salesList[i].transaction_date = year + '-' + month + '-' +  day 
      }

        state.salesList = salesList
        state.salesLength = salesList.length
  },

    addNewSale: (state, newSale) => {
      state.newSale_status = newSale.status;
      api.FETCH_SALES([0])
    },


    getSale: (state,saleDetails) => { 
        state.saleDetails = saleDetails
    },

    updateSale: (state, newSale) => {
        state.updateSale_status = newSale.status; 
        api.FETCH_SALES([0])
      },
    
      deleteSale: (state, id) => {
        api.DELETE_SALE(id)
        api.FETCH_SALES([0])
      },

    emptySales: (state) => {
        state.sellingList = []
    },
    changesalestatus: (state) => {
        state.saleadded = false
    },
    changesaleView: (state) => {
        state.addsalesview = !state.addsalesview
    },
    saletrue:(state) => {
        state.addsalesview = false
    }
}

const actions = {

    getSales: async ({commit, state}, saleList) => {
        try {
        const fetchSales = () => {
          return new Promise((resolve, reject) => {
            api.FETCH_SALES(saleList)
            .then((res) => { resolve(res)})
            .catch((err) => {  reject(err) })
          })  
          .then((res) => {
            commit('getSales', res.data)        
          })
          .catch((err) => { console.log({'error':err.message}); state.getSale_error.error = err.message})
        }  
    
        return await fetchSales()
        } catch (error) {
          console.log({'error':error.message}); state.fetch_error.error = error.message
        }
    },

    getSale: async ({commit}, id) => {
        try {
          
        const fetchSaleDetails = () => {
          return new Promise((resolve, reject) => {
            // state.currencyLoading = true
            api.GET_SALE(id)
            .then((res) => { resolve(res)})
            .catch((err) => {  reject(err) })
          })
          .then((res) => {
            commit('getSale', res.data)
            state.currencyLoading = false
          })
          .catch((err) => { console.log({'error':err.message}); 
          state.getSale_error.error = err.message})
        }  
        return await fetchSaleDetails()
    
        } catch (error) {
          console.log({'error':error.message}); state.fetchSale_error.error = error.message
        }
      },

    addNewSale: async ({commit, state}, newSale) => {
        const create = () => {
            // console.log(newSale)
          return new Promise ((resolve, reject) => {
          state.newSale_status = 0
        //   state.XchangerateLoading = true
          api.NEW_SALE(newSale)
          .then((res) => { resolve(res), state.saleadded = true})
          .catch((err) => { reject(err) })
        })
        .then((res) => { 
          commit('addNewSale', res.data)    
        //   state.itemLoading = false
      })
        .catch((err) => {state.newSale_error.error = err.message})
      }

      return await create()
    },

    updateSale: async ({commit, state}, newSale) => {
        const update = () => {
          return new Promise((resolve, reject) => {
            state.updateSale_status = 0
            // state.SaleLoading = true
            api.UPDATE_SALE(newSale)
              .then((res) => { resolve(res) })
              .catch((err) => { reject(err) })
            })
            .then((res) => { 
              commit('updateSale', res.data)
            //   state.SaleLoading = false
            })
            .catch((err) => { state.newSale_error.error = err.message })
          }
  
        return await update()
      },
  
      deleteSale: ({commit}, saleid) => commit('deleteSale', saleid),

      changesalestatus: ({ commit }) => commit('changesalestatus'),
      emptySales: ({ commit }) => commit('emptySales'),
      changesaleView: ({ commit }) => commit('changesaleView'),
      saletrue: ({ commit }) => commit('saletrue'),
      
}

export default {
    state,
    getters,
    actions,
    mutations,
  }