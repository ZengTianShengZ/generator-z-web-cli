/**
 * Created by ZengTianSheng on 2017/6/26.
 */

exports.url2obj = function (url) {
    let obj = {};
    let arr = url.substr(url.indexOf('?') + 1).split('&');
    arr.forEach(function (item) {
        let tmp = item.split('=');
        //  boj.xx = cc , 不过只能用 obj[xx] = cc 来赋值
        obj[tmp[0]] = tmp[1];
    });
    return obj;
};

