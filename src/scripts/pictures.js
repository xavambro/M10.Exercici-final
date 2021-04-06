import GoBack from '@/components/GoBack'
import {mapGetters,mapMutations} from 'vuex'
export default {
    methods:{
        ...mapMutations(['INCREMENT'])
    },
    computed:{
        ...mapGetters(['pictures'])
    },  
    components:{
        GoBack
    }
    
}