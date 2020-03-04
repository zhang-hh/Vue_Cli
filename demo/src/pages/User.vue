<template>
    <div>
      <Search></Search>
      <List></List>
    </div>
</template>

<script>
	import Search from "../component/Search";
	import List from "../component/List";
  export default {
		name: "user",
    components: {List, Search}
  }
</script>

<style scoped>

</style>
