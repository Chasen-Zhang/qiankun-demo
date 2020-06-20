// 导入应用间通信介质：呼机
import pager from '@/util/pager';
// 在主应用注册呼机
export default function appPager () {
  pager.subscribe(message => {
    console.log('监听到子应用发来消息：', message);
  });
}