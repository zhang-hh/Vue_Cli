/*路由器对象模块*/
 import Vue from "vue";
 import VueRouter from "vue-router";
 import routes from '@/routes';
//1.将VueRouter注册为Vue的插件
Vue.use(VueRouter);

//应用中所有的路由
/*路由器的配置
*   routes:注册路由
*   mode:路由的类型(hash,history) 默认是hash
*     hash 与 history的区别
*       hash:基本上所有的浏览器都是支持的,可是他有一个致命的问题
*         hash的变化后台的感觉不到的,在微信支付的时候不支持hash模式
*       history:兼容性没有hash高,后台能感觉到,但是history本身还是坑的
*         在与后台连调的时候*/

/*
* */
export default new VueRouter({
  routes,
  //所有组件能通过$router属性看到$router对象 ,
  // 所有组件都有了一个代表当前路由的data数据:$route
  mode:'history',
  linkActiveClass:'active', //模糊匹配
  // linkExactActiveClass:'qf' //精准匹配
})
