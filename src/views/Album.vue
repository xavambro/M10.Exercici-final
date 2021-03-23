<template>
<div class="border m-2 p-2 col-md-3 border-success rounded mx-auto">
    <h3>{{$route.params.picture.title}}</h3>
    <p>{{$route.params.picture.url}}</p>
    <img :src="$route.params.picture.thumbnailUrl">

    <button class="btn btn-info" @click='previous'>Torna enrere</button>
</div>
</template>

<script>
export default {
    
    name:'Album',
    methods:{
        previous(){
            this.$router.go(-1)
        }
    }

}
</script>