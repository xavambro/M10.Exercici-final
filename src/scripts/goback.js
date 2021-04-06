export default {
    name: 'GoBack',
    methods:{
        previous(){
            this.$router.go(-1)
        }
    }
}