/**
 * Created by ZengTianSheng on 2017/6/7.
 */
import fetch from 'isomorphic-fetch'
import {baseUrl} from '../../../config/env';

export default async (url='',type='GET',data={}) => {
    type = type.toUpperCase();
    url = baseUrl + url;
    let fInit;
    let headers = new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json'
    });

    if (type == 'GET') {
        let dataStr = '';
        //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        });

        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
        fInit = {
            method:'GET',
            mode:'cors',
            // headers: headers // 加头部将影响到跨域，
            // 因为浏览器会首先发送一个预检请求，
            // 不支持预检请求的浏览器就会请求失败
        }
    }else{
        fInit = {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
            // headers: headers
        }
    }
    try{
        const response = await fetch(url,fInit);
        const responseJson = await response.json();
        return responseJson;
    } catch(err){
        throw new Error(err);
    }
}