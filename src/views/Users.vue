<template>
<div class="users">
    <div class="user" v-for="user in users" :key="user.id">
        <p>{{user.id}}</p>
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {

    computed:{
        ...mapGetters(['users'])
    },  
    mounted(){
        this.$store.dispatch('getUsers')
    } 
}
</script>