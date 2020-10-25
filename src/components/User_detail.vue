<template>
    <div>
        <h3>用户详情界面</h3>
        <table>
            <tr>
                <td>用户ID</td>
                <td >{{id}}</td>
            </tr>
            <tr>
                <td>用户名</td>
                <td >{{name}}</td>
            </tr>
            <tr>
                <td>生日</td>
                <td>{{birthday}}</td>
            </tr>
            <tr>
                <td>性别</td>
                <td>{{gender}}</td>
            </tr>
            <tr>
                <td>个性签名</td>
                <td>{{note}}</td>
            </tr>
        </table>
        <hr>
        <button @click="go_back">返回用户界面</button>
    </div>
</template>

<script>
export default {
    name: "User_detail",
    data(){
      return{
          id:this.$route.params.id,
          name:'',
          birthday:'',
          gender:'',
          note:'',
      }
    },
    methods:{
        go_back(){
            this.$router.push('/user')
        }
    },
    created() {
        let id = this.$route.params.id
        let user_list = JSON.parse(localStorage.getItem('users'))
        for (let i=0;i<user_list.length;i++){
            if(user_list[i].id==id){
                this.name=user_list[i].name
                this.birthday = user_list[i].birthday
                this.gender = user_list[i].gender
                this.note = user_list[i].note
            }
        }
    }
}
</script>

<style scoped>
    tr{
        background-color: blueviolet;
        color: white;
    }
</style>
