/*vuex 的最核心的管理对象store*/
import Vuex from 'vuex';
import Vue from "vue";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
Vue.use(Vuex);
//父组件的数据一般都通过父组件的方法进行修改

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})








