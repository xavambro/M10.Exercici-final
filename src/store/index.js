import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[],
    pictures:[]
  },
  getters:{
    users(state){
      return state.users;
    },
    pictures(state){
      return state.pictures;

    },
    user(state,id){
      return state.users.find(user => user.id == id);
    }
  },
  mutations: {
    INCREMENT(state,userSelected){
      console.log()
      
      userSelected.counter++;
      /* let user = state.users.find(user => user.id == userSelected.id)
      user.counter++;
      console.log(state); */
      console.log(userSelected.counter)
    },
    SET_USERS(state, users){
      if(state.users.length === 0){
        state.users = users;
        state.users.counter = 0;
      } 
    },
    SET_PICTURES(state,pictures){
      state.pictures = pictures;
    }
  },
  actions: {
    getUsers({ commit }) {
      axios.get('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log(response.data);
        console.log(response);
        //Añadimos la propiedad counter a cada uno de los usuarios
        response.data.forEach(item=>item.counter = 0);
      commit('SET_USERS', response.data);
      })
      },
      getPictures({ commit }) {
        axios.get('http://jsonplaceholder.typicode.com/photos')
        .then(response => {
          console.log(response.data);
          response.data.forEach(item=>item.counter = 0);
        commit('SET_PICTURES', response.data);
        })
        },
  },
  modules: {
  }
})
