
import Taro from '@tarojs/taro'
import '@tarojs/async-await'

export function request(params) {
    console.log("request",params)
    const data = JSON.stringify(params)
    const method = 'post'
    const url = 'https://alpha.yunhutech.cn/comm_route'  // 预发布
    const opt={
        data:data,
        method:method,
        url:url
    }
    return Taro.request(opt).then((res) => {
        console.log("res",res)
        let {statusCode, data} = res;
        if (statusCode >= 200 && statusCode < 300) {
            return data;
        } else {
            throw new Error(`网络请求错误，状态码${statusCode}`);
        }
    })
}









/*

import axios from 'axios'

export  function axiosPro(method, url, data ) {
    console.log("axiosPro",method)
    return new Promise(function (resolve, reject) {
        axios({
            method: method,
            url: url,
            data: data,
        }).then(function (ret) {
            resolve(ret)
        }).catch(function (err) {
            reject(err)
        })
    })
}

export async function request (params) {
    console.log("request",params)
    const data = JSON.stringify(params)
    const method = 'post'
    const url = 'https://alpha.yunhutech.cn/comm_route'  // 预发布
    const resp = await axiosPro(method,url, data)
    console.log("resp",resp)
    return resp
}
*/



