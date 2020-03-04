
/*一个包含n个用于间接更新状态的数据方法对象
* action的方法中可以包含异步操作和逻辑处理代码*/
import {REQUESTING,REQ_SUCEESS,REQ_ERROR} from './mutation-types'
import axios from 'axios';
export default{
  /*搜索的异步action*/
  async search({commit},searchName) {
    //  在发请求之前,提交请求中的木mutation
    commit(REQUESTING)
  //  发送异步ajax请求
    try {
      const response = await axios.get('/search/users',{
        params:{q:searchName},
        baseURL:"https://api.github.com",
      });
      const result = response.data;
      const users = result.items.map(item =>({
        html_url:item.html_url,
        avatar_url:item.avatar_url,
        login:item.login
      }));
      //  如果成功了,更新数据 提交(users数组) 提交一个请求成功的mutation
      commit(REQ_SUCEESS,users);
    }catch (e) {
      //  如果失败了,提交一个失败的mutation
      commit(REQ_ERROR,e.message)
    }


  }
}
