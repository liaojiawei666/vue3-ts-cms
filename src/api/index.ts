import CMSRequest from "@/api/request";
import { BASE_URL, TIME_OUT } from "@/api/request/config";

const cmsRequest = new CMSRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("cms请求成功的拦截");
      return config;
    },
    requestInterceptorCatch: (error) => {
      console.log("cms请求失败的拦截");
      console.log(error);
    },
  },
});
export default cmsRequest;
