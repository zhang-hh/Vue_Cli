import Vue from 'vue';
import App from "./App";
import './base.css';
Vue.config.productionTip = false;
//定义总线
/*创建一个全局的用于绑定事件监听和分发事件的对象:
GOLBEL EVENT BUS(全局事件总线)
事件总线对象就是一个vm
将其挂载到vue的原型对象 所有的组件对象就都可看到这个事件的总线对象*/
//Vue.prototype.bus = new Vue();
new Vue({
  beforeCreate(){ //尽量早的执行挂载全局事件总线对象的操作
    Vue.prototype.bus = this;
  },
  el:'#app',
  components:{App},
  template:'<App/>'
});
