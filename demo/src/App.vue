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
  export default {
		name: "App",
    data(){
		  return{
		    todos:[
          {id:1,title:'吃饭',checked:false},
          {id:2,title:'睡觉',checked:false},
          {id:3,title:'打豆豆',checked:false},
        ]
      }
    },
    mounted() {
		  //根据id,删除对应任务
		  this.bus.$on('deleteItem',(id) =>{
		      this.todos = this.todos.filter((todo) =>{
		          return todo.id !== id
		      })
		  });
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
