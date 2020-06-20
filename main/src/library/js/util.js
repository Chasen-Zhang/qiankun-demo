/**
 * auth: weilan
 * time: 2017/01/17
 * des: 公共工具类
 */

/**
 * 跨应用路由跳转
 * @param {String} href url地址
 * @param {Object} stateObj 状态参数 可以通过history.state读取
 * @param {String} title 标题 暂时没有用
 */
import { componentsMap } from './componentMap'
function routerGo(href = '/', title = null, stateObj = {}) {
  window.history.pushState(stateObj, title, href);
}
function getDynamicComponet(c) { // 动态import 无法使用变量，暂时这样子解决
  return componentsMap[c];
}
export {
  routerGo, // 跨应用路由跳转
  getDynamicComponet // 获取动态组件
};
