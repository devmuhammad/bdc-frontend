import api from "../../api/auth"
import Vue from 'vue'


let state = {
    user:[],
    loggedinUser:{},
    logindetails:{},
    errmsg:"",
    usertoken:"",
    users: [], 
    isloggedIn : false,
    newLogin_status:{},
    login_error:{}
  }

let getters = {
    isloggedIn : state => state.isloggedIn,
    errmsg : state => state.errmsg,
    loggedinUser: state => state.loggedinUser,
    usertoken: state => state.usertoken,
    users:  state => state.users,
    logindetails: state => state.logindetails,
    newLogin_status: state => state.newLogin_status,
    login_error: state => state.login_error,
}


let mutations = {
    Login: (state, loggedinUser) =>{
        state.loggedinUser = loggedinUser
       
    },
    logoutUser:(state) => {
        state.isloggedIn = false
    }

}

let actions = {
    Login: async ({commit, state}, logindetails) => {
       
        try {
        const fetchlogindet = () => {
          return new Promise((resolve, reject) => {
            api.LOGIN(logindetails)
            .then((res) => { resolve(res)})
            .catch((err) => {  reject(err), state.errmsg = err.message })
          })  
          .then((res) => {
          
            if (res.auth === true){
                state.isloggedIn = true
                Vue.prototype.$token = res.token
            }
            commit('Login', res.data)        
          })
          .catch((err) => { console.log({'error':err.message}); state.login_error.error = err.message})
        }  
    
        return await fetchlogindet()
        } catch (error) {
          console.log({'error':error.message}); state.fetch_error.error = error.message
        }
    },
    logoutUser: ({ commit }) => commit('logoutUser'),
}

export default {
    state,
    getters,
    actions,
    mutations,
  }