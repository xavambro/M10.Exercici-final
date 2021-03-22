<template>
<div class="pictures">
    <h1>Pictures</h1>
    <div class="pictures" v-for="picture in pictures" :key="picture.id">
        <p>{{picture.id}}</p>
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {

    computed:{
        ...mapGetters(['pictures'])
    },  
    mounted(){
        this.$store.dispatch('getPictures')
    } 
}
</script>