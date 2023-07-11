//axios二次封装
import axios from "axios";
// 进度条引入
//进度条样式
import "nprogress/nprogress.css";
import store from "@/store";
import { MessageBox, Message } from 'element-ui'
//第一步，利用axios对象的方法，创建一个axios的实例
const requests = axios.create({
    //接口中都带有的，在请求路径中都带上
    //让http://xxxxxx变成http://xxxxxx/api
    baseURL: "/hilihili",
    //超时时间
    timeout: 5000,
});
//请求拦截器，在发请求之前，请求拦截器可以检测到
requests.interceptors.request.use((config) => {

    return config;
})
//响应拦截器
requests.interceptors.response.use(response => {

    const res = response.data
    console.log(res)
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
        Message({
            message: res.message || 'Error',
            type: 'error',
            duration: 5 * 1000
        })

        // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
        // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        //     // to re-login
        //     MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
        //         confirmButtonText: 'Re-Login',
        //         cancelButtonText: 'Cancel',
        //         type: 'warning'
        //     }).then(() => {
        //         store.dispatch('user/resetToken').then(() => {
        //             location.reload()
        //         })
        //     })
        // }
        return Promise.reject(new Error(res.message || 'Error'))
    } else {
        return res
    }


    //服务器成功的回调
    //return res.data;
}, error => {

    console.log('err' + error) // for debug
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error)
    // //响应失败的回调函数
    // console.log(error)
    // return Promise.reject(error);

})
export default requests;


