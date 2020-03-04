import Vuex from  'vuex';
import Vue from "vue";
import {INCREMENT,DECREMENT,INCREMENTODD,INCREMENTASYNC} from './mutation-types'

Vue.use(Vuex);
//父组件的数据一般都通过父组件的方法进行修改

//当前的配置对象中所有属性都会转绑给store仓库

/*相当于data的对象,包含n个可变的属性数据*/
const state = {
  count:0,//初始化状态数据
};
/*一个包含n个用于直接更新状态的数据方法对象
* mutation方法不要包含异步和逻辑代码*/
const  mutations = {
  //增加的mutation
  [INCREMENT]:function(state){ //要操作的是当前的数据
    //这是es6函数的简写形式,也就是前边的是一个属性名,而属性名想要使用一个变量的值,就要使用中括号语法
    console.log(state.count);
    state.count++
  },
  //减少的mutation
  [DECREMENT](state){
    state.count--
  }
};
/*一个包含n个用于间接更新状态的数据方法对象
* action的方法中可以包含异步操作和逻辑处理代码*/
const actions = {
  [INCREMENTODD]({commit,state}){
    if (state.count %2 ===1) commit(INCREMENT)

  },
  [INCREMENTASYNC]({commit}){
    setTimeout(()=>{
      commit(INCREMENT)
    },1000)
  }
};
/*一个包含n个基于state数据的getters计算属性的方法的对象*/
const getters = {
  eventOrOdd(state){
    return state.count%2===0? '偶' : '奇';
  }
};
export default new Vuex.Store(
  {
  strict: true, //使用严格模式
  state,
//  操作数据的方法
  mutations,
  actions,
  getters,
})

