<template>
<div class="pictures">
    <h1>Pictures</h1>
    <div class="row d-flex justify-content-center">
    <div class="picture m-2 p-2 col-md-3 border border-success rounded" v-for="picture in pictures" :key="picture.id">
        <p>{{picture.title}}</p>
            <router-link v-if='pictures' :to="{name: 'Album', params: {id:picture.id, picture:picture}}">
            <button class="btn btn-info" @click="$store.commit('INCREMENT',picture)">Accedir a l'album</button>
        </router-link>
    </div>
</div>
</div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'

export default {
    methods:{
        ...mapMutations(['INCREMENT'])
    },
    computed:{
        ...mapGetters(['pictures'])
    },  
    mounted(){
        this.$store.dispatch('getPictures')
    } 
}
</script>