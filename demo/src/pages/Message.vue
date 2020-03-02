<template>
    <div>
      <ul v-for="message in messages">
        <li >
          <router-link :to="`/home/message/${message.id}`">
            {{message.title}}
            <input type="button" value="push" @click="pushShow(message.id)">
            <input type="button" value="replace" @click="replaceShow(message.id)">
          </router-link>
        </li>
      </ul>
      <input type="button" value="back" @click="$router.back()">
      <router-view></router-view>
    </div>
</template>

<script>
  const messages = [
    {id:1,title:'message01'},
    {id:2,title:'message02'},
    {id:3,title:'message03'},
    {id:4,title:'message04'},
    {id:5,title:'message05'},
  ]
	export default {
		name: "Message",
    data(){
		  return{
		    messages:[]
      }
    },
    methods:{
      pushShow(id){
        this.$router.push(`/home/message/${id}`)
      },
      replaceShow(id){
        this.$router.replace(`/home/message/${id}`)
      }
    },
    mounted() {
		// 模拟ajax的行为
      setTimeout(()=>{
      	this.messages = messages;
      },1000)
    }
  }
</script>

<style scoped>

</style>
