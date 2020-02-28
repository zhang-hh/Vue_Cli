<template>
  <li
    @mouseenter="handle(true)"
    @mouseleave="handle(false)"
    :style="{background: bgColor}"
    :class="{line:todo.checked}"
  >
    <label>
      <!--这里的这个v-model="todo.checked"的是双向绑定的,会修改APP的数据
        1.我的值是由todo.checked确定的
        2.我改了了数据的是时候,todo里面的数据也要改变
            既要监视,也要动态的产生 -- get,set -->
      <input type="checkbox" v-model="ischeck" @click="updateTodo"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger"  @click="deleteItem">删除</button>
  </li>
</template>

<script>
	export default {
		name: "TodoItem",
    props:{
		  todo:Object,
      updateTodo:Function,
    },
    data(){
		  return{
        bgColor:'White',
      }
    },
    computed:{
		  ischeck:{
        get(){
          return this.todo.checked;
        },
        set(value){
          this.updateTodo(this.todo,value)
        }
      }
    },
    methods:{
      //根据id删除数据
      deleteItem(){
		    const {title} = this.todo;
         if (window.confirm(`确定删除${title}`)){
           //把id传给app进行删除
           this.bus.$emit('deleteItem',this.todo.id)
         }
      },
      handle(flag){
        if (flag){
          this.bgColor = 'pink';
        }else {
          this.bgColor = 'white';
        }
      }
    }
	}
</script>

<style scoped>
  .line{
    position: relative;
  }
  .line:after{
    display: block;
    content: "";
    height: 1px;
    width: 90%;
    background: gray;
    position: absolute;
    left: 5%;
    top:50%;
  }
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li:hover button{
    display: block;
  }
  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
    position: relative;
    z-index: 99;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
