import { createStore, Store, useStore as useVuexStore } from "vuex";
import { IRootState, IStoreType } from "@/store/types";
import login from "@/store/login/login";

const store = createStore<IRootState>({
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
store.dispatch("login/loadLocalLogin");

export function useStore(): Store<IStoreType> {
  return useVuexStore();
}

export default store;
