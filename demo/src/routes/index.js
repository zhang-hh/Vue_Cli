/*路由*/

import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

export default [
  {path:'/about',component: About},
  {
    path:'/home',
    component:Home,
    //这两个home的子路由是在home中渲染
    children:[
      {path:'news',component:News},
      {
        path:'message',
        component:Message,
        children:[
          {
            path:':id',
            component:Detail,
            //代表当前的占位符id会以props的方式进行数据传递
            props:(route)=>({
              id:route.params.id,
              name:route.query.name
            }),
          }
        ]
      },
    ]
  },
  //自动重定向
  {path:'/',redirect:'/about'}
]
