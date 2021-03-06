import Vue from 'vue';
import App from './App.vue';
import './public-path';
import routes from './router';
import store from './store';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.config.productionTip = false;
let instance = null;
let router = null;
const __qiankun__ = window.__POWERED_BY_QIANKUN__;
export async function bootstrap({ components, utils, pager, appBus }) {
  // 注册主应用下发的组件
  Vue.use(components);
  // 把工具函数挂载在vue $mainUtils对象
  Vue.prototype.$mainUtils = utils;
  // 在子应用注册呼机
  pager.subscribe(v => {
    console.log(`监听到子应用${v.from}发来消息：`, v);
  });
  Vue.prototype.$pager = pager;
  Vue.prototype.$appBus = appBus;
}
export async function mount({ data = {} } = {}) {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/subapp-marketing' : '/',
    mode: 'history',
    routes
  });
  instance = new Vue({
    router,
    store,
    render: h => h(App, {
      props: { ...data }
    })
  }).$mount('#app');
}
export async function unmount() {
  instance.$destroy();
  instance = null;
}

// 单独开发环境
__qiankun__ || mount();
