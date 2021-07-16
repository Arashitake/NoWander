import Vue from 'vue'
import VueRouter from 'vue-router'

const homepage = () => import("../views/homepage/homepage.vue");
const learningWorld = () => import("../views/learningWorld/learningWorld.vue");
const professionalIntroduction = () => import("../views/professionalIntroduction/professionalIntroduction.vue");
const universityLife = () => import("../views/universityLife/universityLife.vue");
const sign = () => import("../views/sign/sign.vue");
const wall = () => import("../views/wall/wall.vue")
const searchPage = () => import("../views/searchPage/searchPage.vue");

// 1、安装插件
Vue.use(VueRouter);

//解决路由跳转原路由或者刷新出错
// replace：跳转后无法返回
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

// push：跳转后可以返回
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

// 2、创建路由
const routes = [
  { // 初始化重定向首页，最开始加载后停留的页面
    path: '/',
    redirect: '/homepage'
  },
  { // 首页
    path: '/homepage',
    component: homepage
  },
  { // 学习天地
    path: '/learningWorld',
    component: learningWorld
  },
  { // 专业介绍
    path: '/professionalIntroduction',
    component: professionalIntroduction
  },
  { // 大学生活
    path: '/universityLife',
    component: universityLife
  },
  { // 搜索结果页面
    path: '/searchPage',
    component: searchPage
  },
  { // 目标墙
    path: '/wall',
    component: wall
  },
  { // 登录/注册
    path: '/sign',
    component: sign
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL，应用的基路径，默认值为'/'
  base: '/nowander/',
  routes
})


// 3、导出
export default router
