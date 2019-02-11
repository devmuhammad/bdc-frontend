import api from "../../api/xchangerate"

let state = {
  
    //XchangeRate
    newXchangerate: {},
    newXchangerate_status:undefined,
    newXchangerate_error:{},
    xchangeList:[],
    xchangeadded:false,
    getXchange_error:{},
    xchangeLength:0
  }
  
  const getters = {
    
    //Xchange
    xchangeList : state => state.xchangeList,
    getXchange_error : state => state.getXchange_error,
    xchangeLength : state => state.xchangeLength,
    newXchangerate: state => state.newXchangerate,
    newXchangerate_status: state => state.newXchangerate_status,
    newXchangerate_error: state => state.newXchangerate_error,
    xchangeadded: state => state.xchangeadded
  }
  
  const mutations = {
    
    // Xchangerates - Get & Add New
  
    getXchangerate: (state, xchangeList) => {
          state.xchangeList = xchangeList
          state.xchangeLength = xchangeList.length
    },

    addNewXchangerate: (state, newXchangerate) => {
        state.newXchangerate_status = newXchangerate.status;
        api.FETCH_XCHANGERATES([0])
      },
  
      clearStatusLog: (state) => {
          state.newXchange_status = undefined
      },
  }
  
  const actions = {
    getXchangerate: async ({commit, state}, xchangeList) => {
        try {
        const fetchXchangerate = () => {
          return new Promise((resolve, reject) => {
            api.FETCH_XCHANGERATES(xchangeList)
            .then((res) => { resolve(res)})
            .catch((err) => {  reject(err) })
          })  
          .then((res) => {
            commit('getXchangerate', res.data)        
          })
          .catch((err) => { console.log({'error':err.message}); state.getXchange_error.error = err.message})
        }  
    
        return await fetchXchangerate()
        } catch (error) {
          console.log({'error':error.message}); state.fetch_error.error = error.message
        }
    },

    addNewXchangerate: async ({commit, state}, newXchangerate) => {
        const create = () => {
          return new Promise ((resolve, reject) => {
          state.newXchangerate_status = 0
        //   state.XchangerateLoading = true
          api.NEW_XCHANGERATE(newXchangerate)
          .then((res) => { resolve(res), state.xchangeadded = true})
          .catch((err) => { reject(err) })
        })
        .then((res) => { 
          commit('addNewXchangerate', res)    
        //   state.itemLoading = false
      })
        .catch((err) => {state.newXchangerate_error.error = err.message})
      }

      return await create()
    },
  
  }
  
  
  export default {
      state,
      getters,
      actions,
      mutations,
    }
    