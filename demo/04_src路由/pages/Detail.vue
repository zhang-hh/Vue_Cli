<!--如果使用默认的传参和接受参数的方式
  会导致我们与Vue-router高度耦合
  -我们需要将组件和Vue-router解耦-->
<template>
    <div>
      <ul>
        <li v-show="content.id">ID:{{content.id}}</li>
        <li>Title:{{content.title}}</li>
        <li>Content:{{content.content}}</li>
      </ul>
    </div>
</template>

<script>
  let contents = [
    {id:'1',title:'一个好消息1',content:'加油武汉！'},
    {id:'2',title:'一个好消息2',content:'加油中国！'},
    {id:'3',title:'一个好消息3',content:'加油尚硅谷！'},
    {id:'4',title:'一个好消息4',content:'加油最好的自己！'},
    {id:'5',title:'一个好消息5',content:'加油最好的我们！'}
  ]
	export default {
		name: "Detail",
    props:['id'],
    data(){
		  return {
        content:{}
      }
    },
    /*路由组件对象是在第一次请求对应路径的时候才会创建
    * 从一个路由组件离开,路由组件死亡,在进入需要重新创建
    * 当同一个路由组件上做切换(只是改参数),当前路由组件对象被直接复用
    * 同一个组件对象mounted()只执行一次*/
    methods:{
      showDetail(){
        this.content = contents.find((content) =>{
          return this.id  === content.id
        })
      }
    },
    mounted() {
      //多个动态路由匹配到同一个组件的时候该组件的生命周期钩子只会被调用一次
      this.showDetail()
    },
    watch: {
      '$route' () {
        this.showDetail()
      }
    }
  }
</script>

<style scoped>

</style>
