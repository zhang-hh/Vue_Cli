<!--本来我们自己建组件是这样的
    const a = {
      template:'<div>{{msg}}</div>',
      name:'App',
      data(){
        return{
          msg:'哈哈哈',
        }
      }
    }
-->

<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
<!--    3.使用组件-->
      <Add :addComment="addComment"/>
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
  //1.先引入子组件
  import Add from "./components/Add";
  import List from "./components/List";
export default {
  name: 'App',
  data(){
    return {
      comments:[ //数据在那个组件,更新数据的方法就应该定义在那个组件
      {
        name:'BOB',
        content:'so easy'
      },
      {
        name:'Juny',
        content:'so hard'
      },
      {
        name:'Danny',
        content:'what???'
      }
      ]
    }
  },
  methods:{
    //添加评论
    addComment(comment){
      this.comments.unshift(comment);
    },
    //根据指定的下标删除评论
    deleteComment(index){
      this.comments.splice(index,1)
    }
  },
  //  2.映射成标签
  components: {List, Add},
}
</script>

<style>
</style>
