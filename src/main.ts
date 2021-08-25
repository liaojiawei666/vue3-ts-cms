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
});
createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
