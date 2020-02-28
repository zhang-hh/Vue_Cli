<template>
      <div class="todo-container">
        <div class="todo-wrap">
          <TodoHeader :todos="todos" :addTodo="addTodo"></TodoHeader>
          <TodoList :todos="todos"></TodoList>
          <TodoFooter :todos="todos" :deleteAll="deleteAll" :selectAll="selectAll"></TodoFooter>
        </div>
      </div>
</template>

<script>
	import TodoHeader from "./components/TodoHeader";
  import TodoList from "./components/TodoList";
  import TodoFooter from "./components/TodoFooter";
  import {readTool, saveTool} from "./utils/stroageUtils";
  export default {
		name: "App",
    data(){
		  return{
		    //loacalStroage中的数据如果是读取的不到的话就为null
		    todos:[],
      }
    },
    mounted() {
		  //根据id,删除对应任务
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

    },
    //监视数据的变化
    watch:{
		  todos:{
        deep:true,
        // handler(value){
        //   //  将数据保存到localStroage中 以json格式
        //   localStorage.setItem('todos_key',JSON.stringify(value));
        //   saveTool(value)
        // }
        /*这个函数是数据只要发生就会去调用*/
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
