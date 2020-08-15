import Vue from "vue";
import Vuex from "vuex";

import local from "./module/local";
import user from "./module/user";
import app from "./module/app";
import permission from "./module/permission";
import information_collection from "./module/information_collection";

// vuex 数据持久化
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
  // 需要持久化的模块
  modules: ["local"]
});

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    local,
    user,
    app,
    permission,
    information_collection
  },
  plugins: [vuexLocal.plugin]
});
export default store;
