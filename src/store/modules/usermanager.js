// import api from "../../api/currency"



let state = {
  user:[],
  // loggedinUser:{},
  users: [], 
  isAuth : false
}

let getters = {
  getusers: (state) => {
    return state.users
  },

  // loggedinUser: state => state.loggedinUser,

  authenticated: (state) => {
    return state.isAuth
  },
  
  getactiveUser: (state) => {
    return state.user
  },
 

}
let mutations = {


  ADDUSER(state, data) { //adds  an active user
    // only mutators can mutate the state
    state.user = data;
  },
  
  AUTHENTICATE(state,data){
    state.isAuth = data.isAuth;
  },

  ADDROLES(state, data) { 
    let token = window.localStorage.getItem("token");
    let x = Api.roles(token);
    x.then(results => {
        state.roles = [];
        results.forEach(element => {
          state.roles.push({
            id: element.id,
            rolename: element.rolename,
            description: element.description
          });
        });
      })
      .catch(function(error) {
        console.log("error fetching roles");

        console.log(error);
      });
  },


  ADDUSERS(state, data) { 
    let x = Api.users();
    state.users = [];
    x.then(results => {
      results.forEach(element => {
        let da = new Date(element.dateCreated);
        let date = da.getUTCDate() + "/" + da.getUTCMonth() + "/" + da.getUTCFullYear();
        // console.log("pushing users");
        // console.log(results)
        state.users.push({
          fullname : element.fullname,
          contactEmail : element.contactEmail,
          contactMobile : element.contactMobile,
          dateCreated :date,
          lastLogin : element.lastLogin,
          id : element.id,
          userRoles : element.userroles  
        }) 
      });
    })
    .catch(function(error) {
      console.log("error fetching users");

      console.log(error);
    });
  },

  registerUser(state, data) { 
    let uRoles = [{}];
    //state.user = data;
    var x = Api.signUp(
      data.active,
      data.contactEmail,
      data.contactMobile,
      data.fullname,
      data.password,
      data.usertype,
      data.locationid.id,
      data.userroles,
      window.localStorage.getItem("id")
    );
     x.then(response => {
      })
      .catch(function(error) {
        console.log("error adding user");

        console.log(error);
      });
   
  },
  addBusSector(sate,data){
    var x = Api.getBus();
    x.then(result =>{
      state.businessSector = result;
    }).catch(error => {
      console.log("Unable to get business sectors");
    })
  }
}
let actions = {

  AUTHENTICATE: ({ commit},data) => commit("AUTHENTICATE", data),

  ADDUSER: ({
    commit
  }, data) => commit("ADDUSER", data),
  ADDROLES: ({
    commit
  }, data) => commit("ADDROLES", data),

  ADDGROUPROLES: ({ commit }, data) => commit("ADDGROUPROLES", data),

  ADDGROUPS: ({ commit}, data) => commit("ADDGROUPS", data),
   ADDUSERS: ({
    commit 
  }, data) => commit("ADDUSERS", data),  
  registerUser: ({
    commit
  }, data) => commit("registerUser", data),
  addBusSector: ({
    commit
  }, data) => commit("addBusSector", data),
}

export default {
  state,
  mutations,
  actions,
  getters
}
