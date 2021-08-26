import CMSRequest from "@/api/request";
import { BASE_URL, TIME_OUT } from "@/api/request/config";

const cmsRequest = new CMSRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  showLoading: false,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("cms请求成功的拦截");
      return config;
    },
    requestInterceptorCatch: (error) => {
      console.log("cms请求失败的拦截");
      console.log(error);
    },
    responseInterceptor: (res) => {
      console.log("cms响应成功的拦截");
      return res;
    },
    responseInterceptorCatch: (err) => {
      console.log("cms响应失败的拦截");
      return err;
    },
  },
});
export default cmsRequest;
