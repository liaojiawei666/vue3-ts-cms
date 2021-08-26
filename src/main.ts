import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import cmsRequest from "@/api";

cmsRequest.request({
  url: "/home/multidata",
  method: "GET",
  showLoading: true,
  interceptors: {
    requestInterceptor(config) {
      console.log("单次请求成功的拦截");
      return config;
    },
    requestInterceptorCatch: (error) => {
      console.log("单次请求失败的拦截");
      console.log(error);
    },
    responseInterceptor: (res) => {
      console.log("单次响应成功的拦截");
      return res;
    },
    responseInterceptorCatch: (err) => {
      console.log("单次响应失败的拦截");
      return err;
    },
  },
});
createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
