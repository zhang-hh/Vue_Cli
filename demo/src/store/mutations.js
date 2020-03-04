/*一个包含n个用于直接更新状态的数据方法对象
* mutation方法不要包含异步和逻辑代码*/

import {REQUESTING,REQ_SUCEESS,REQ_ERROR} from './mutation-types'
export default{
  //请求中
  [REQUESTING](state){
    state.isFirst = false;
    state.isLoading = true;
  },
// 请求成功
  [REQ_SUCEESS](state,users){
    state.isLoading = false;
    state.users = users;
  },
//  请求失败
  [REQ_ERROR](state,errorMsg){
    state.isLoading = false;
    state.errorMsg = errorMsg;
  }
}
