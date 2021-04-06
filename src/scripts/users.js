import {mapGetters, mapMutations} from 'vuex'
import GoBack from "../components/GoBack"

export default {
    methods:{
        ...mapMutations(['INCREMENT'])
    },
    computed:{
        ...mapGetters(['users'])
    }, 
    filters:{
        UpperCase(value){
            return value.toUpperCase();

        }
    },
    components:{
        GoBack
    }
    
}