<template>
<div class="container">
    <h1>Users</h1>
    <GoBack></GoBack>

    <div class="users row d-flex justify-content-center">
        <div class="user m-2 p-2 col-md-3 border border-success rounded" v-for="user in users" :key="user.id">
            <p>{{user.name | UpperCase}}</p>
                <router-link v-if='users' :to="{name: 'User', params: {id:user.id, user:user}}">
                <button class="btn btn-info" @click="$store.commit('INCREMENT',user)">Pàgina del client</button>
            </router-link>
        </div>
    </div>
</div>

</template>

<script src="../scripts/users.js">

</script>

<style scoped>

</style>