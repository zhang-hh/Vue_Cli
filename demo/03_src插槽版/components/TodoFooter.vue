<template>
  <div class="todo-footer">
    <label>
<!--      计算属性-->
<!--      <input type="checkbox" v-model="isAllChecked"/>-->
      <slot name="left"></slot> <!--默认值-->
    </label>
<!--    <span>-->
<!--          <span>已完成{{checkSize}}</span> / 全部{{todos.length}}-->
<!--    </span>-->
    <slot name="middle"></slot>
<!--    <button class="btn btn-danger" @click="deleteAll">清除已完成任务</button>-->
    <slot name="right"></slot>
  </div>
</template>

<script>
	export default {
		name: "TodoFooter",
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
