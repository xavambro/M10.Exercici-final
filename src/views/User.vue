<template>
<div>
    <h1>{{$route.params.user.name}}</h1>
    <button class="btn btn-info" @click='previous'>Torna enrere</button>
</div>
</template>

<script>
export default {
    
    name:'User',
    methods:{
        previous(){
            this.$router.go(-1)
        }
    }

}
</script>