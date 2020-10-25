<template>
    <div>
        <h4>用户管理</h4>
        <table border="1px">
            <tr>
                <td>ID</td>
                <td>用户名</td>
                <td>生日</td>
                <td>性别</td>
                <td>个性签名</td>
                <td>操作</td>
            </tr>

            <tr v-for="(user,index) in user_list" :key="index">
                <td>{{user.id}}</td>
                <td>{{ user.name }}</td>
                <td>{{user.birthday}}</td>
                <td>{{ user.gender }}</td>
                <td>{{user.note}}</td>
                <td>
                    <a href="javascript:void (0)" @click="del_one(index)">删除</a>
                    |
                    <router-link :to="`/user_detail/${user.id}/${user.name}/${user.birthday}/${user.gender}/${user.note}`"><span></span>查看用户详情</router-link>
                </td>
            </tr>
        </table>
        <hr>
        <h3>用户信息的添加</h3>
        用户ID: <input type="number" v-model="id"><br>
        用户名: <input type="text" v-model="name"><br>
        生日: <input type="date" v-model="birthday"><br>
        性别: <input type="text" v-model="gender"><br>
        个性签名: <input type="text" v-model="note"><br>
        <button @click="add_user">添加用户</button>
    </div>
</template>

<script>
export default {
    name: "User",
    data(){
        return{
            user_list:localStorage.users ?JSON.parse(localStorage.users) :[],
            // user_list:[
            //     {id:1,name:"jj",birthday:'2020-1-1',gender:'男'}
            // ],
            name:'',
            id:'',
            gender:'',
            birthday: '',
            note:'',
        }
    },
    methods:{
        add_user(){
            if(this.id){
                let user = {
                    id:this.id,
                    name:this.name,
                    gender:this.gender,
                    birthday:this.birthday,
                    note: this.note,
                };
                this.user_list.push(user)
                // 将对象序列化存储
                localStorage.users = JSON.stringify(this.user_list)
                this.id=''
                this.name=''
                this.birthday=''
                this.gender=''
                this.note=''
            }
        },

        // 删除
        del_one(index){
            this.user_list.splice(index,1)
            localStorage.users =  JSON.stringify(this.user_list)
        }
    }
}
</script>

<style scoped>
    table{
        background-color: forestgreen;
        color: white;
    }
    a{
        color: white;
    }
</style>
