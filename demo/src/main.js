import Vue from 'vue';
import App from "./App";
import store from '@/store';
import router from '@/router'
Vue.config.productionTip = false;
new Vue({
  el:'#app',
  store, //每个组件对象都能有一个指定的store属性:$store
  router,
  components:{App},
  template:'<App/>',
});
