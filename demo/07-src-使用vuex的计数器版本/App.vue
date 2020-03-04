<template>
  <div>
<!--    模板上的数据来源:1.data 2.computed 3.props-->
    <p>点击了{{count}}次,数字是{{$store.getters.eventOrOdd}}数</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数时增加</button>
    <button @click="incrementAsync">异步增加</button>
  </div>
</template>

<script>
  /*store对象:(两个属性,两个方法)
  * 1.state :包含所有state的数据(对象)
  * 2.getter:对象(存数据)
  * 3.dispatch(actionName,数据)
  * 4.commit(mutationName,数据)*/
  import {DECREMENT, INCREMENT, INCREMENTASYNC, INCREMENTODD} from "./store/mutation-types";
  import {mapState,mapActions,mapGetters,mapMutations} from 'vuex';
  export default {
		name: "App",
    mounted() {
      console.log(this.$store)
    },
    computed:{
		  // count(){
		  //   return this.$store.state.count
      // },
      // eventOrOdd(){
		  //   return this.$store.getters.eventOrOdd
      // }

      /*三点运算符:[...a]此时a是个数组,{...a}此时a是个对象*/
      //mapState是一个函数,函数的返回值是一个对象
      ...mapState(['count']), //count(){return this.$store.state[count]}
      ...mapGetters(['eventOrOdd'])
		},
    methods:{
      // increment(){
      //   this.$store.commit(INCREMENT)
      // },
      // decrement(){
      //   this.$store.commit(DECREMENT)
      // },
      ...mapMutations({
        [INCREMENT]:INCREMENT,
        [DECREMENT]:DECREMENT
      }),
      incrementOdd(){
        this.$store.dispatch(INCREMENTODD);
      },
      incrementAsync(){
        this.$store.dispatch(INCREMENTASYNC)
      }
    }
  }
</script>

<style scoped>
  div{
    margin: 0 200px;
  }
</style>
