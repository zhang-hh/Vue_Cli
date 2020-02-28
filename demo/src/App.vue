<template>
      <div class="todo-container">
        <div class="todo-wrap">
<!--          <TodoHeader :todos="todos" @addTodo="addTodo"/>&lt;!&ndash;给当前header对象绑定自定义事件监听&ndash;&gt;-->
<!--          <TodoHeader ref="header" :todos="todos"/>&lt;!&ndash;给当前header对象绑定自定义事件监听&ndash;&gt;-->
          <TodoHeader @addTodo="addTodo" :todos="todos"/><!--给当前header对象绑定自定义事件监听-->
          <TodoList :todos="todos" :updateTodo="updateTodo">
            <!--这个index是list在遍历item的时候传给item的,然后item想要把没有选择框的下边传给APP的时候
            必须先传给list,在传给APP,当APP拿到数据的时候,他要进行更改的数据,和谁要更改都是在一个组件的
            那么这个时候就可以通过数组的下标找到对应得数据,然后修改他的值-->
            <template slot="input" slot-scope="{index}">
              (>^ω^<)喵 <input type="checkbox" v-model="todos[index].checked">
            </template>
            <!--最终这个显示是在item组件的,但是要进行逐层传递,
            先是从APP将list的插槽覆盖,然后list将item的插槽覆盖-->
            <template slot-scope='{content}' slot="span">
              <span style="color:skyblue;">{{content}}</span>
            </template>
          </TodoList>
          <!--新版插槽-->
          <TodoList :todos="todos" :updateTodo="updateTodo">
            <template #input="{index}">
<!--          <input type="checkbox" v-model="ischeck" @click="updateTodo"/>-->
              (>^ω^<)汪 <input type="checkbox" v-model="todos[index].checked">
            </template>
            <template #span="{content}">
<!--          <span>{{todo.title}}</span>-->
              <span style="color:palevioletred;">{{content}}</span>
            </template>
          </TodoList>
          <TodoFooter>
<!--            模板在是在父组件解析好了传过去的-->
            <input type="checkbox" v-model="isAllChecked" slot="left"/>
            <span slot="middle">
                <span>已完成{{checkSize}}</span> / 全部{{todos.length}}
            </span>
            <button slot="right" class="btn btn-danger" @click="deleteAll">清除已完成任务</button>
          </TodoFooter>
        </div>
      </div>
</template>

<script>
	import TodoHeader from "./components/TodoHeader";
  import TodoList from "./components/TodoList";
  import TodoFooter from "./components/TodoFooter";
  import {readTool, saveTool} from "@/utils/stroageUtils"; //@代表src目录
  export default {
		name: "App",
    data(){
		  return{
		    //loacalStroage中的数据如果是读取的不到的话就为null
		    todos:[],
      }
    },
    computed:{
      checkSize(){
        return this.todos.reduce((preTotal, todo) =>
          preTotal + (todo.checked?1:0) ,0)
      },
      isAllChecked:{
        get(){
          return this.checkSize === this.todos.length
            && this.checkSize >0 ;
        },
        set(value){ //当前checkbox的最新的值,通知父组件去修改数据
          this.selectAll(value)
        }
      }
    },
    mounted() {
		  //通过bus绑定事件监听,根据id,删除对应任务
		  this.bus.$on('deleteItem',(id) =>{
		      this.todos = this.todos.filter((todo) =>{
		          return todo.id !== id
		      })
		  });
		// 模拟异步任务向服务器发送请求,获取数据
      setTimeout(()=>{
        //this.todos = JSON.parse(localStorage.getItem('todos_key') || '[]')
        this.todos = readTool()
      },1000)
    //  给header绑定事件监听
      //this.$refs.header.$on('addTodo',this.addTodo)
    },
    //监视数据的变化
    watch:{
		  todos:{
        deep:true,
        handler:saveTool//上面的可以写为这样
      }
    },
    methods:{
		  //数据在哪里就更新数据的行为就应该定义在哪里
		  addTodo(todo){
        this.todos.unshift(todo)
      },
      //  删除所有完成的任务
      deleteAll(){
        this.todos = this.todos.filter((item)=>!item.checked)
      },
      //全选和全不选
      selectAll(checked){
        this.todos.forEach((todo) =>{
           return  todo.checked = checked;
        })
      },
    //  更新数组 是否选中
      updateTodo(todo,isCheck){
        todo.checked = isCheck;
      }
    },
    components: {TodoFooter, TodoList, TodoHeader}
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
