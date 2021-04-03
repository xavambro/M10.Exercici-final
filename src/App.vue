<template>
  <div id="app">
    <Header></Header>
    <div class="content">   
 <div v-if="getInput.length > 0">
   <div v-for="user in getUser" :key="user.id" class="border m-2 p-2 col-md-3 border-success rounded mx-auto">
    <h3>{{user.name}}</h3>
    <p>{{user.username}}</p>
        <p>{{user.email}}</p>
            <p>{{user.phone}}</p>
   </div>
   </div>
   <div v-if ="getUser.length==0 && getInput.length >0" class="alert alert-danger">
     <p>No s'ha trobat l'usuari</p>
   </div>
 
 <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutRight" mode='out-in'>
      <router-view v-if="getInput.length == 0"/>
    </transition>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
import {mapGetters} from 'vuex'
export default {
    computed:{
      ...mapGetters(['getInput','getUser'])
    },
    mounted(){
        this.$store.dispatch('getUsers')
        this.$store.dispatch('getPictures')
    }, 
    components:{
      Header,
      Footer
    }
}
</script>
<style>
.content {
  flex:1
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
