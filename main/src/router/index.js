import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '@/views/index.vue';
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter);
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/common-finance',
    name: 'subappCommon',
    component: () => import(/* webpackChunkName: "about" */ '@/views/common.vue'),
    meta: {
      isCommon: true
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
