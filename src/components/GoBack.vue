<template>
    <button class="btn btn-info" @click="previous">Torna enrere</button>  
</template>

<script>
export default {
    name: 'GoBack',
    methods:{
        previous(){
            this.$router.go(-1)
        }
    }
}
</script>