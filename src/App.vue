<template>
    <div id="app">
        <h1>欢迎来到快乐的世界!! </h1>
        <h2><router-link to="/index">留言板</router-link>
        &nbsp;&nbsp;&nbsp;
        <router-link to="/user">用户管理</router-link></h2>


        <router-view></router-view>
    </div>
</template>


<script>
export default {
    name: 'App',
}

</script>


<style>

</style>
