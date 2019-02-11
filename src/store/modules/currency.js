import api from "../../api/currency"


let state = {
  
  //Currency
  currencyDetails: {},
  currencyList:[],
  getCurrency_error:{},
  currencyLength:0,
  currencyLoading:false
}

const getters = {
  
  //Currency
  currencyDetails: state => state.currencyDetails,
  currencyList : state => state.currencyList,
  getCurrency_error : state => state.getCurrency_error,
  currencyLength : state => state.currencyLength,
  currencyLoading: state => state.currencyLoading
}

const mutations = {
  
  // Currencies - Get

  getCurrencies: (state, currencyList) => {
        state.currencyList = currencyList
        state.currencyLength = currencyList.length
  },

  getCurrencyById: (state,currencyDetails) => { 
    state.currencyDetails = currencyDetails
},

    clearStatusLog: (state) => {
        state.newCurrency_status = undefined
    },
}

const actions = {
  getCurrencies: async ({commit, state}, currencyList) => {
      try {
      const fetchCurrencies = () => {
        return new Promise((resolve, reject) => {
          api.GETCURRENCIES(currencyList)
          .then((res) => { resolve(res)})
          .catch((err) => {  reject(err) })
        })  
        .then((res) => {
          commit('getCurrencies', res.data)        
        })
        .catch((err) => { console.log({'error':err.message}); state.getCurrency_error.error = err.message})
      }  
  
      return await fetchCurrencies()
      } catch (error) {
        console.log({'error':error.message}); state.fetch_error.error = error.message
      }
  },

  getCurrencyById: async ({commit}, id) => {
    try {
      
    const fetchCurrencyDetails = () => {
      return new Promise((resolve, reject) => {
        state.currencyLoading = true
        api.GET_CURRENCY(id)
        .then((res) => { resolve(res)})
        .catch((err) => {  reject(err) })
      })
      .then((res) => {
        commit('getCurrencyById', res.data)
        state.currencyLoading = false
      })
      .catch((err) => { console.log({'error':err.message}); 
      state.getCurrency_error.error = err.message})
    }  
    return await fetchCurrencyDetails()

    } catch (error) {
      console.log({'error':error.message}); state.fetchCurrency_error.error = error.message
    }
  },

}


export default {
    state,
    getters,
    actions,
    mutations,
  }
  