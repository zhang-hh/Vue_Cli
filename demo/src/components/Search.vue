<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="请输入搜索关键字" v-model.trim="keyword"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
	export default {
		name: "Search",
    data(){
		  return{
		    keyword:'',
      }
    },
    methods: {
      search() {
        //分发自定义事件
        this.bus.$emit('search', this.keyword);
        this.keyword = '';
      }
    }
	}
</script>

<style scoped>

</style>
