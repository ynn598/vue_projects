<template>
    <div>
        <h4>有什么想说的吗? </h4>
        <input type="text" v-model="msg">
        <button @click="add_msg">添加留言</button>
        <ul>
            <li v-for="(msg,index) in records" :key="index">{{msg}}
                <a href="javascript:void(0);" @click="del_record(index,records.length)">删除</a>
            </li>
        </ul>
        <hr>
        <span>留言总数量：{{records.length}}条</span>&nbsp;&nbsp;
        <input type="button" id="delete" value="删除所有" @click="del_all(records.length)" v-show="is_show">

    </div>
</template>

<script>

export default {
    name: "Index",
    data(){
        return{
            msg:'',
            records:localStorage.new ? JSON.parse(localStorage.new) :[],
            is_show:true,
        }
    },
    methods:{
        add_msg(){
            let msg = this.msg;
            if (msg){
                this.records.push(this.msg);
                this.msg = '';
                // 存储在local中
                localStorage.new =  JSON.stringify(this.records)
            }
        },

        // 删除留言
        del_record(index, sum){
            if(sum==1){
                this.is_show=!this.is_show
                this.records.splice(index,1)
                localStorage.new =  JSON.stringify(this.records)
            }
            else {
                this.records.splice(index,1)
                localStorage.new =  JSON.stringify(this.records)
            }
        },
        del_all(sum){
            if(sum !=0){
                this.records.splice(0,sum)
                localStorage.clear()
                this.is_show = !this.is_show
            }
        }
    },



}

</script>

<style scoped>

</style>
