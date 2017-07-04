/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = 'http://localhost:8088';
let routerMode = 'history';
let imgBaseUrl = 'http://images.cangdu.org/';

if (process.env.NODE_ENV == 'dev') {
    baseUrl = 'http://localhost:8088';
}else if(process.env.NODE_ENV == 'production') {
    baseUrl = '';
}

export {
    baseUrl
}