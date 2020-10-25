import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index";
import User from "../components/User";
import User_detail from "../components/User_detail";

Vue.use(Router)

export default new Router({
  routes: [
      {path:'/index',component:Index},
      {path:'/user',component:User},
      {path:'/user_detail/:id/:name/:birthday/:gender/:note',component: User_detail},
      {path:'/',redirect:'/index'}
  ]
})
