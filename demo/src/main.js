import Vue from 'vue';
import App from "./App";
import './base.css';
Vue.config.productionTip = false
//定义总线
Vue.prototype.bus = new Vue();
new Vue({
  el:'#app',
  components:{App},
  template:'<App/>'
})
