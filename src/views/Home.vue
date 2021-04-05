<template>
  <div class="home d-flex justify-content-center">
    <div class="usersConsulted border col-md-4 m-2 p-2">
      <h2>Usuaris consultats</h2>
      <hr>
      <div v-for="user in usersConsulted" :key="user.id">
        <p class="text-left">{{user.name}} - {{user.counter}}</p>
      </div>
    </div>
    <div class="picturesConsulted border col-md-4 m-2 p-2">
      <h2>Albums consultats</h2>
      <hr>
        <p class="text-left" v-for="picture in albumsConsulted" :key="picture.id">{{picture.title}} - {{picture.counter}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  computed:{
    ...mapGetters(['usersConsulted','albumsConsulted'])
  },
}
</script>
