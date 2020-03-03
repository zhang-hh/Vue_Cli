import Vue from 'vue';
import App from "./App";
Vue.config.productionTip = false;
new Vue({
  beforeCreate(){
    Vue.prototype.bus = this;
  },
  el:'#app',
  components:{App},
  template:'<App/>',
});
