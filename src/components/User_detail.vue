<template>
    <div>
        <h3>用户详情界面</h3>
        <table>
            <tr>
                <td>用户ID</td>
                <td >{{$route.params.id}}</td>
            </tr>
            <tr>
                <td>用户名</td>
                <td >{{$route.params.name}}</td>
            </tr>
            <tr>
                <td>生日</td>
                <td>{{$route.params.birthday}}</td>
            </tr>
            <tr>
                <td>性别</td>
                <td>{{$route.params.gender}}</td>
            </tr>
            <tr>
                <td>个性签名</td>
                <td>{{$route.params.note}}</td>
            </tr>
        </table>
        <hr>
        <button @click="go_back">返回用户界面</button>
    </div>
</template>

<script>
export default {
    name: "User_detail",
    methods:{
        go_back(){
            this.$router.push('/user')
        }
    },

}
</script>

<style scoped>
    tr{
        background-color: blueviolet;
        color: white;
    }
</style>
