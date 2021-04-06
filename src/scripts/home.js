// @ is an alias to /src
import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  computed:{
    ...mapGetters(['usersConsulted','albumsConsulted'])
  },
}