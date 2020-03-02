import Vue from 'vue';
import App from "./App";
import router from '@/router';
Vue.config.productionTip = false;
//5.将路由器交给vue管理
new Vue({
  el:'#app',
  router,
  components:{App},
  template:'<App/>',
})
