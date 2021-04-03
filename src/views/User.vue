<template>
<div class="border m-2 p-2 col-md-3 border-success rounded mx-auto">
    <h3>{{$route.params.user.name}}</h3>
    <p>{{$route.params.user.username}}</p>
        <p>{{$route.params.user.email}}</p>
            <p>{{$route.params.user.phone}}</p>
                <p>{{$route.params.user.address.city}}</p>
                    <p>{{$route.params.user.company.name}}</p>



    <GoBack></GoBack>
</div>
</template>

<script>
import GoBack from '@/components/GoBack'
export default {
    
    name:'User',
    components:{
        GoBack
    }

}
</script>