import axios from "axios";

axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
  console.log(res);
});

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.error("请求发送错误！");
    return err;
  }
);

axios.interceptors.response.use(
  (res) => {
    console.log("响应成功的拦截");
    return res;
  },
  (err) => {
    console.error("服务器响应失败！");
    return err;
  }
);
console.log(process.env.VUE_APP_BASE_URL);
