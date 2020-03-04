<template>
  <div>
    <h2 v-if="isFirst">请输入关键字进行搜索</h2>
    <h2 v-else-if="isLoading">正在请求loading...</h2>
    <h2 v-else-if="errorMeassage">{{errorMeassage}}</h2>
    <div class="row" v-else>
      <div class="card" v-for="(user,index) in users" :key="index">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url"alt="头像" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
	export default {
		name: "List",
    data(){
		  return{
        isFirst:true, //是否是第一次加载  虽然我们是两个都写的是true但是if,else if有一个符合就会显示
        isLoading:true, //是否在加载中
        users:[], //所有匹配的用户
        errorMeassage:'', //需要显示的错误信息
      }
    },
    mounted() {
		  this.bus.$on('search',(q) =>{
		    //更新状态数据(请求中)
        this.isFirst = false;
       // this.isLoading = true;
		    //发送ajax请求,获取用户数据
        axios.get('/search/users',
          {params:{q},
            baseURL:'https://api.github.com'
          })
          //  如果成功,更新状态成功
          .then(response => {
            const result = response.data;
            //当我们写前端的时候,很可能的是后台接口没有写好,他返回的数据和我们前台的界面不一样
            // 但是并且返回的数据太多,所有我们可以通过数据的map方法的到我们想要的
            this.users = result.items.map(item =>({
                  html_url:item.html_url,
                  avatar_url:item.avatar_url,
                  login:item.login
            }));
            this.isLoading = false;
          })
          //  如果失败,更新状态失败
          .catch((error) => {
            this.isLoading = false;
            this.errorMeassage = error.message;
          })
      })
    },
    // beforeDestroy() {
		//   this.bus.$off('search')
    // }
  }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
