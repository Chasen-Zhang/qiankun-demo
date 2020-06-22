import axios from 'axios';
// 获取token
function getToken() {
  const token = sessionStorage.getItem('token') || '';
  return token;
}
// 创建实例
const service = axios.create({
  baseURL: '/',
  timeout: 6000,
});

// http request请求拦截
service.interceptors.request.use(
  (config) => {
    // 具体看项目的实际情况
    if (getToken()) {
      config.headers.token = getToken();
      config.headers['Content-Type'] = 'application/json;charset=utf-8';
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// http response拦截器
service.interceptors.response.use(
  (response) => {
    if (response.status && response.status === 200) {
      const code = response.data.code;
      const msg = response.data.message;
      switch (code) {
        case 20000:
          return response.data;
        default:
          return response.data;
      }
    }
    return Promise.reject();
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default service;
