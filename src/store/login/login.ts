import { Module } from "vuex";
import { IRootState } from "@/store/types";
import { ILoginState } from "@/store/login/types";
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId,
} from "@/api/login/login";
import { IAccount, IUserInfo, IUserMenus } from "@/api/login/type";
import cache from "@/utils/cache";
import router from "@/router";

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: undefined,
      userInfo: undefined,
      userMenus: undefined,
    };
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: IUserInfo) {
      state.userInfo = userInfo;
    },
    changeUserMenus(state, userMenus: IUserMenus[]) {
      state.userMenus = userMenus;
    },
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload);
      const { id, token } = loginResult.data;
      commit("changeToken", token);
      cache.setCache("token", token);
      const userInfoResult = await requestUserInfoById(id);
      const userInfo = userInfoResult.data;
      cache.setCache("userInfo", userInfo);
      commit("changeUserInfo", userInfo);
      const userMenusRsp = await requestUserMenusByRoleId(userInfo.role.id);
      commit("changeUserMenus", userMenusRsp.data);
      cache.setCache("userMenus", userMenusRsp.data);
      router.push("/main");
    },
    loadLocalLogin({ commit }) {
      const token = cache.getCache("token");
      commit("changeToken", token);
      const userInfo = cache.getCache("userInfo");
      commit("changeUserInfo", userInfo);
      const userMenus = cache.getCache("userMenus");
      commit("changeUserMenus", userMenus);
    },
  },
};
export default loginModule;
