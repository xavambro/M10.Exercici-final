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
      <vue-typeahead-bootstrap v-model="input" :data="getUser" placeholder="Busca un usuari" :serializer="user => user.name">
      </vue-typeahead-bootstrap>
    </form>
  </div>
</nav>
</template>
<script>
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';

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
    },
    components:{
      VueTypeaheadBootstrap
    }
}
</script>