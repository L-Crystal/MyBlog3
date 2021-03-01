import axios from 'axios'
import app from '../main'

//创建实例时设置默认设置
const instance = axios.create({
    baseURL: 'http://localhost:3000',
});




//添加请求拦截器
instance.interceptors.request.use(function (config) {
    //在请求之前，为请求加上token
    const AUTH_TOKEN = localStorage.getItem('mytoken');
    config.headers['Authorization'] = AUTH_TOKEN;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

//添加响应拦截器
instance.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    let {status} = error.response;
    if(status == 401){
        app.$router.push('/user/login')
    }
    // Do something with response error
    return Promise.reject(error);
});

export default instance;