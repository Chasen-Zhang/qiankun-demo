import Vue from 'vue';
import { Message } from 'element-ui';
import {
  registerMicroApps,
  start,
  setDefaultMountApp,
  runAfterFirstMounted,
  addGlobalUncaughtErrorHandler
} from 'qiankun';
// 导入应用入口
import entries from './app-entry';
import render from './render';
// 导入路由监听函数
import { genActiveRule } from '@/util';
// 导入主应用ui库
import LibraryUi from "@/library/ui";
// 导入主应用工具类库
import LibraryJs from "@/library/js";
import pager from '@/util/pager';
const appBus = new Vue();
const msg = {
  components: LibraryUi, // 从主应用读出的组件库
  utils: LibraryJs, // 从主应用读出的工具类库
  pager, // 从主应用下发应用间通信呼机
  appBus: appBus
};
Vue.prototype.$appBus = appBus;
Vue.prototype.$appBus.$on('transitionComponent', (msg) => {
  alert('物流子应用，我收到你的消息——' + msg)
})
export default function register() {
  // 开始注册应用
  if (entries.length === 0) {
    Message({
      type: 'error',
      message: '没有可以注册的子应用数据'
    });
    return;
  }
  // 处理子应用注册数据
  const isDev = process.env.NODE_ENV === 'development';
  const apps = [];
  let defaultApp = null;
  entries.forEach(i => {
    apps.push({
      name: i.module,
      entry: isDev ? i.devEntry : i.depEntry,
      render,
      activeRule: genActiveRule(i.routerBase),
      props: { ...msg, routerBase: i.routerBase }
    });
    if (i.defaultRegister) defaultApp = i.routerBase;
  });
  // 注册子应用

  registerMicroApps(apps, {
    beforeLoad: [
      app => {
        console.log('before load', app);
      }
    ],
    beforeMount: [
      app => {
        console.log('before mount', app);
      }
    ],
    afterUnmount: [
      app => {
        console.log('after unload', app);
      }
    ]
  });
  // 设置默认子应用
  if (!defaultApp) defaultApp = entries[0].routerBase;
  setDefaultMountApp(defaultApp);
  // 第一个子应用加载完毕回调
  runAfterFirstMounted((app) => {
    console.log(app);
  });
  // 启动微服务
  start({ prefetch: true });
  // 设置全局未捕获一场处理器
  addGlobalUncaughtErrorHandler(event => console.log(event));
}