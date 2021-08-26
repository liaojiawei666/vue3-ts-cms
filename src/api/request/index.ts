import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { CMSRequestConfig, CMSRequestInterceptors } from "@/api/request/type";
import { ElLoading } from "element-plus";
import { ILoadingInstance } from "element-plus/es";

const DEFAULT_LOADING = false;

class CMSRequest {
  instance: AxiosInstance;
  interceptors?: CMSRequestInterceptors;
  showLoading: boolean; //是否显示加载
  loading?: ILoadingInstance;

  constructor(config: CMSRequestConfig) {
    this.instance = axios.create(config);
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;
    this.interceptors = config.interceptors;
    //所有实例的拦截器
    this.instance.interceptors.request.use((config) => {
      const token = "tdsazwsef23r1";
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      if (this.showLoading) {
        this.loading = ElLoading.service({
          lock: true,
          text: "正在加载数据",
          background: "rgba(0,0,0,0.1)",
        });
      }
      console.log("所有实例请求成功的拦截");
      return config;
    });
    this.instance.interceptors.response.use(
      (res) => {
        console.log("所有实例都有的拦截器：响应成功拦截！");
        setTimeout(() => {
          this.loading?.close();
        }, 1000);
        const data = res.data;
        console.log(data);
        //这里处理业务自定义状态码
        if (data.returnCode === "-1001") {
          console.error("请求失败，错误信息！");
        } else {
          return data;
        }
      },
      (error) => {
        this.loading?.close();
        //这里处理http状态码
        console.log("所有实例都有的拦截器：响应失败拦截！");
        if (error.response.status === 404) {
          console.error("404错误");
        }
        return error;
      }
    );
    //单个实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
  }

  request(config: CMSRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config);
    }
    if (config.showLoading !== undefined) {
      //注意对比单个实例和单次请求对showLoading的处理
      this.showLoading = config.showLoading ?? DEFAULT_LOADING;
    }

    this.instance
      .request(config)
      .then((res) => {
        this.showLoading = DEFAULT_LOADING;
        return res;
        // console.log(res);
      })
      .catch((err) => {
        this.showLoading = DEFAULT_LOADING;
        return err;
      });
  }
}

export default CMSRequest;
