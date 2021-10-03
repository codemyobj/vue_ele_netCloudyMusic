import axios from "axios";

// 该项目所有请求均为 get请求
export function request(url, params) {
  const instance = axios.create({
    baseURL: "/api",
    timeout: 30000,
    withCredentials: true,
  });

  // 请求拦截
  instance.interceptors.request.use(
    (config) => config,
    (err) => console.log(err)
  );

  instance.defaults.withCredentials = true;

  if (params) {
    params = {
      params,
    };
    return instance.get(url, params);
  } else {
    return instance.get(url);
  }
}
