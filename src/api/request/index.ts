import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { CMSRequestConfig, CMSRequestInterceptors } from "@/api/request/type";

class CMSRequest {
  instance: AxiosInstance;
  interceptors?: CMSRequestInterceptors;

  constructor(config: CMSRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.instance.interceptors.request.use((config) => {
      console.log("所有实例请求成功的拦截");
      return config;
    });

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res);
    });
  }
}

export default CMSRequest;
