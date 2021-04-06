import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';

export default {
    name:'Header',
    methods:{
      ...mapMutations(['addInput','removeInput'])
    },
    computed:{
      ...mapGetters(['getUser'])
      ,
      input: {
            get(){
                return this.$store.state.input
            },
            set( value ){
                this.$store.commit('addInput',value)
            }
        },
    },
    components:{
      VueTypeaheadBootstrap
    }
}