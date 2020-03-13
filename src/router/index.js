import Vue from 'vue';
import VueRouter from "vue-router";

import index from "@/views/index/index.vue";
import code from "@/views/code/code.vue";
import photo from "@/views/photo/photo.vue";


//解决控制台报错的问题，即使不影响使用
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);


const routes = [
  { path: '/', redirect:"/index" },
  { path: '/index', component: index },
  { path: '/code', component: code },
  { path: '/photo', component: photo },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})


export default router;