import axios from 'axios';

const instance = axios.create({
  baseURL:'https://api.github.com'
});
// 添加请求拦截器
// instance.interceptors.request.use((config)=>{
//   // 在发送请求之前做些什么
//   console.log(config);
//   return config;
// });
// instance.interceptors.response.use(
//   (response) => {
//     return response.data
//   },
//   (error) => {
//     console.log(error)
//     //中断promise链
//     return new Promise(() => {})
//   }
// );
export default instance;

