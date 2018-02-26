/**
 * Created by CJ on 17/05/03.
 * http配置
 */

import axios from 'axios'

import router from '../../routes'
import Lockr from 'lockr'

//数据交互 axios基本设置
axios.defaults.baseURL = HOST
// console.log("当前的host地址是"+HOST)
axios.defaults.timeout = 1000 * 10
axios.defaults.headers['Content-Type'] = 'application/json'


//添加请求 http request 拦截器
// var loadinginstace
axios.interceptors.request.use(
    //在发送请求之前做些什么
    config => {
        
	    return config;
    },
    //请求错误做些什么
    err => {
	    // loadinginstace.close()
        return Promise.reject(err)
        
    });

//添加响应 http response 拦截器
axios.interceptors.response.use(
    //对响应数据做点什么
    response => {
	    // loadinginstace.close()
        return response;
    },
    error => {
        if (error.response) {
	        console.log(error)
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error)
    });

export default axios;
