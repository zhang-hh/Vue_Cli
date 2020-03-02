<template>
    <div>
        about
    </div>
</template>

<script>
	export default {
		name: "About",
    mounted() {
		  //普通的路由被访问的时候其对应的组件是不会被复用的,每次该组件的生命周期钩子都会被执行
      console.log('----')
    }
  }
</script>

<style scoped>

</style>
