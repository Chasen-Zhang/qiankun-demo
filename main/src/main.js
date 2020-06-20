import Vue from 'vue';
import appPager from '@/micro-init/app-pager';
import render from '@/micro-init/render';
import startMicroFront from '@/micro-init/start-micro-front';
import '@/assets/css/reset.less';
Vue.config.productionTip = false;
// 应用间通信
appPager();
// 主应用渲染函数
render({ loading: true });
// 启动微服务
startMicroFront();




