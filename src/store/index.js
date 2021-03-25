import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[],
    pictures:[],
    input:'',
    error:false,
    show:true
  },
  getters:{
    users(state){
      return state.users;
    },
    pictures(state){
      return state.pictures;

    },
    show(state){
      return state.show;
    },
    getUser(state){
      return state.users.filter(user => user.name.toLowerCase().includes(state.input.toLowerCase()))
    },
    usersConsulted(state){
      return state.users.filter(user => user.counter > 0)
    },

    albumsConsulted(state){
      return state.pictures.filter(album => album.counter >0)
    },
    getInput(state){
      return state.input
    }
  },
  mutations: {
    changeShow(state){
      state.show = !state.show
    },
    addInput (state, inp){
      state.input = inp;
    },
    INCREMENT(state,selection){
      console.log()
      
      selection.counter++;
      /* let user = state.users.find(user => user.id == userSelected.id)
      user.counter++;
      console.log(state); */
      console.log(selection.counter)
    },
    SET_USERS(state, users){
      if(state.users.length === 0){
        state.users = users;
        state.users.counter = 0;
      } 
    },
    SET_PICTURES(state,pictures){
      if(state.pictures.length === 0){
        state.pictures = pictures;
        state.pictures.counter = 0;
      } 
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
