import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import BlogDetail from '../views/BlogDetail.vue'
import PostBlog from '../views/PostBlog.vue'
import HomeCate from '../views/HomeCate.vue'



Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog/cate/:cateId',
    name: 'HomeCate',
    component: HomeCate
  },
  {
    path: '/user/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/blog/detail/:blogId',
    name: 'BlogDetail',
    component: BlogDetail,
  },
  
  {
    path: '/blog/post',
    name: 'PostBlog',
    component: PostBlog,
    //前端路由守卫
    beforeEnter: (to, from, next) => {
       let myToken = localStorage.getItem('mytoken');
      if(myToken){
        next();
      }else{
        alert('请先登录！');
        next({name:"Login"});
      }
    }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
