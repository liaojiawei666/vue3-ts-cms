import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import cache from "@/utils/cache";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/login",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/main",
    component: () => import("@/views/main/main.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = cache.getCache("token");
    if (!token) {
      return "/login";
    }
  }
});
export default router;
