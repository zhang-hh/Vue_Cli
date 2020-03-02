<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo,index) in todos"
              :index = 'index'
              :key="todo.id"
              :todo="todo"
              :updateTodo="updateTodo"
    >
      <template slot="input" slot-scope="{index}">
        <slot :index="index" name="input"></slot>
      </template>
      <template #span="{content}">
        <slot name="span" :content="content"></slot>
      </template>
    </TodoItem>
  </ul>
</template>

<script>
	import TodoItem from "./TodoItem";
  export default {
		name: "TodoList",
    components: {TodoItem},
    props:{
      todos:Array,
      updateTodo:Function
    }
	}
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }
  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
