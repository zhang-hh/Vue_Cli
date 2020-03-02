<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Basic - 01</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
<!--          <a href="/about" class="list-group-item">About</a>-->
<!--          <a href="/home" class="list-group-item">Home</a>-->
<!--        路由链接,最终会变成a标签-->
          <router-link class="list-group-item" to="/about">About</router-link>
          <router-link class="list-group-item" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
<!--              在这显示当前的路由组件-->
<!--              当前:与请求的路径匹配的路由-->
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
		name: "App",
  }
</script>

<style scoped>

</style>
