<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">IT Academy</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to='/'>Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/users">Users</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/pictures">Pictures</router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" aria-label="Search" v-model="input">
      <ul class="dropdown-menu">
        <li class="dropdown-item" v-for="suggestion in getUser" :key="suggestion.id">
            <a href="#">{{ suggestion }}</a>
        </li>
      </ul>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</template>
<script>
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
export default {
    name:'Header',
    methods:{
      ...mapMutations(['addInput'])
    },
    computed:{
      ...mapGetters(['getUser'])
      ,
      input: {
            get(){
                return this.$store.state.input
            },
            set( value ){
                this.$store.commit('addInput',value)
            }
        },
    }
}
</script>