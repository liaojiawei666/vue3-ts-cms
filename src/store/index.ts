import { createStore } from "vuex";
import { IRootState } from "@/store/types";
import login from "@/store/login/login";

export default createStore<IRootState>({
  state() {
    return {
      name: "yasuo",
      age: 123,
    };
  },
  mutations: {},
  actions: {},
  modules: { login },
});
