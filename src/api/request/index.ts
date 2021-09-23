import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import cache from "@/utils/cache";

class CMSRequest {
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.instance.interceptors.request.use((config) => {
      const token = cache.getCache("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data;
        if (data.returnCode === "-1001") {
          console.error("请求失败，错误信息！");
        } else {
          return data;
        }
      },
      (err) => err
    );
  }

  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  post<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ method: "post", ...config });
  }

  get<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ method: "get", ...config });
  }

  put<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ method: "put", ...config });
  }

  delete<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ method: "delete", ...config });
  }
}

export default CMSRequest;
