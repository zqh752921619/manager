// 插件模块
import axios from 'axios'
const MyHttpServer={}
MyHttpServer.install =(Vue) =>{
    // 1. 添加全局方法或属性
    axios.defaults.baseURL='http://localhost:8888/api/private/v1/'
  
    // 4. 添加实例方法
    Vue.prototype.$http = axios
  }
  export default MyHttpServer
 