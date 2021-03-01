import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser:{name:''},
    isLogin: false,
  },
  mutations: {
    
    checkLogin(state,user){
      let myToken = sessionStorage.getItem('mytoken');
      if(myToken){
        state.isLogin = true;
        state.currentUser.name = user;
      }
    }
  },
  actions: {
    
  },
  modules: {

  }
})


