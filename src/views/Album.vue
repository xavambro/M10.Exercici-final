<template>
    <div class="border m-2 p-2 col-md-3 border-success rounded mx-auto">
        <h3>{{$route.params.picture.title}}</h3>
        <p>{{$route.params.picture.url}}</p>
        <img :src="$route.params.picture.thumbnailUrl">
        <br>
        <br>
        <GoBack></GoBack>
    </div>
</template>

<script src="../scripts/album.js">

</script>