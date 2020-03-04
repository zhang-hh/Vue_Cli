<template>
    <div>
      <h2 v-if="isFirst">请输入用户名进行查询</h2>
      <h2 v-else-if="isLoading">正在搜索loading.....</h2>
      <h2>{{errorMsg}}</h2>
      <div class="row" >
        <Item  v-for="(item,index) in users" :key="index" :item="item"></Item>
      </div>
    </div>
</template>

<script>
	import Item from "./Item";
	import {mapState} from 'vuex';
  export default {
		name: "List",
    components: {Item},
    computed:{
		  ...mapState(['isFirst','isLoading','errorMsg','users'])
    }
  }
</script>

<style scoped>

</style>
