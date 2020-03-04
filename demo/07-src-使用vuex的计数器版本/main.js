import Vue from 'vue';
import App from "./App";
import store from '@/store'
Vue.config.productionTip = false;
new Vue({
  el:'#app',
  store, //每个组件对象都能有一个指定的store属性:$store
  components:{App},
  template:'<App/>',
});
