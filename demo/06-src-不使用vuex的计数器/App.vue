<template>
  <div>
<!--    模板上的数据来源:1.data 2.computed 3.props-->
    <p>点击了{{count}}次,数字是{{eventOrOdd}}数</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数时增加</button>
    <button @click="incrementAsync">异步增加</button>
  </div>
</template>

<script>
  export default {
		name: "App",
    data(){
		  return{
        count:0
      }
    },
    computed:{
      eventOrOdd(){
        return this.count%2===0 ? '偶':'奇'
      }
    },
    methods:{
      increment(){
        this.count++;
      },
      decrement(){
        this.count--;
      },
      incrementOdd(){
        if (this.count%2=== 1) this.count++;
      },
      incrementAsync(){
        setTimeout(()=>{
          this.count++
        },2000)
      }
    }
  }
</script>

<style scoped>

</style>
