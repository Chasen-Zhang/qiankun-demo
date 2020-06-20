import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
// 主应用渲染函数
let app = null;
export default function render ({ appContent, loading } = {}) {
  if (!app) {
    app = new Vue({
      el: '#container',
      router,
      store,
      data () {
        return {
          content: appContent,
          loading
        };
      },
      render (h) {
        return h(App, {
          props: {
            content: this.content,
            loading: this.loading
          }
        });
      }
    });
  } else {
    app.content = appContent;
    app.loading = loading;
  }
}