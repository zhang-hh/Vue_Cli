<template>
  <div class="todo-footer">
    <label>
<!--      计算属性-->
      <input type="checkbox" v-model="isAllChecked"/>
    </label>
    <span>
          <span>已完成{{checkSize}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" @click="deleteAll">清除已完成任务</button>
  </div>
</template>

<script>
	export default {
		name: "TodoFooter",
    props:{
		  todos:Array,
      selectAll:Function,
      deleteAll:Function,
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
	}
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
