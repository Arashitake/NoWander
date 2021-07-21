import Vue from 'vue'
import VueRouter from 'vue-router'

import {
  homepage,
  learningWorld,
  professionalIntroduction,
  universityLife,
  sign,
  wall,
  searchPage,
  highSchool,
  university
} from './constUrl.js';


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
    name: 'homepage',
    component: homepage
  },
  { // 学习天地
    path: '/learningWorld',
    name: 'learningWorld',
    component: learningWorld,
    children: [
      {
        path: 'highSchool',
        name: 'highSchool',
        component: highSchool
      },
      {
        path: 'university',
        name: 'university',
        component: university
      }
    ]
  },
  { // 专业介绍
    path: '/professionalIntroduction',
    name: 'professionalIntroduction',
    component: professionalIntroduction
  },
  { // 大学生活
    path: '/universityLife',
    name: 'universityLife',
    component: universityLife
  },
  { // 搜索结果页面
    path: '/searchPage',
    name: 'searchPage',
    component: searchPage
  },
  { // 目标墙
    path: '/wall',
    name: 'wall',
    component: wall
  },
  { // 登录/注册
    path: '/sign',
    name: 'sign',
    component: sign
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL, //应用的基路径，默认值为'/'
  // base: '/',
  routes
})


// 3、导出
export default router
