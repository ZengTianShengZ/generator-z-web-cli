/**
 * Created by ZengTianSheng on 2017/4/7.
 */
import jsSHA from './sha';
import wx from 'weixin-js-sdk'

class WxShare {
    constructor(appId,imgUrl,ticket,url,link,tTitle, tContent){
        console.log(link);
        console.log(tTitle);
        console.log(tContent);
        this.appId = appId;
        this.imgUrl = imgUrl;
        var signData = this.sign(ticket,url);

        console.log('.........signData.......');
        console.log(signData);
        this.wchatShare(signData.timestamp, signData.nonceStr, signData.signature,tTitle, tContent,link);
    }
    createNonceStr(){
        return Math.random().toString(36).substr(2, 15);
    }
    createTimestamp(){
        return parseInt(new Date().getTime() / 1000) + '';
    }
    raw(args){
        var keys = Object.keys(args);
        keys = keys.sort();
        var newArgs = {};
        keys.forEach(function (key) {
            newArgs[key.toLowerCase()] = args[key];
        });
        var string = '';
        for (var k in newArgs) {
            string += '&' + k + '=' + newArgs[k];
        }
        string = string.substr(1);
        return string;
    }
    /**
     * 传入Ticket和Url，Url应该是在配置的域名之下
     *
     * @returns
     */
    sign(jsapi_ticket, url){
        var ret = {
            jsapi_ticket: jsapi_ticket,
            nonceStr: this.createNonceStr(),
            timestamp: this.createTimestamp(),
            url: url
        };
        var string = this.raw(ret);
        //jsSHA = require('jssha');
        var shaObj = new jsSHA(string, 'TEXT');
        ret.signature = shaObj.getHash('SHA-1', 'HEX');
        return ret;
    }
    wchatShare(timestamp, nonceStr, signature, tTitle, tContent, link){
        let _this = this;
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: _this.appId, // 必填，公众号的唯一标识
            timestamp: timestamp, // 必填，生成签名的时间戳
            nonceStr: nonceStr, // 必填，生成签名的随机串
            signature: signature,// 必填，签名，见附录1
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });

        // 分享信息自定义
        window.shareData = {
            "imgUrl": _this.imgUrl,
            "timeLineLink": link,
            "tTitle": tTitle,
            "tContent": tContent
        };

        wx.ready(function () {
            wx.onMenuShareAppMessage({
                title: shareData.tTitle,
                desc: shareData.tContent,
                link: shareData.timeLineLink,
                imgUrl: shareData.imgUrl,
                success: function () {

                },
                cancel: function () {

                }
            });
            // 分享到朋友圈
            wx.onMenuShareTimeline({
                title: shareData.tTitle,
                link: shareData.timeLineLink,
                imgUrl: shareData.imgUrl,
                success: function () {

                },
                cancel: function () {

                }
            });
            // 分享到SQ
            wx.onMenuShareQQ({
                title: shareData.tTitle,
                desc: shareData.tContent,
                link: shareData.timeLineLink,
                imgUrl: shareData.imgUrl,
                success: function () {
                },
                cancel: function () {
                }
            });
        });
    }
}
export default WxShare;


//function url2obj(url) {
//    var obj = {};
//    var arr = url.substr(url.indexOf('?') + 1).split('&');
//    arr.forEach(function (item) {
//        var tmp = item.split('=');
//        //  boj.xx = cc , 不过只能用 obj[xx] = cc 来赋值
//        obj[tmp[0]] = tmp[1];
//    });
//    return obj;
//}
//
//var href = decodeURIComponent(location.href);
//var localUrl2obj = url2obj(href);
//var link = 'http://wechat.bong.cn/login?openid=' + localUrl2obj.openid;
//var signData = sign(localUrl2obj.ticket, location.href);
//wchatShare(signData.timestamp, signData.nonceStr, signData.signature,
//    '亲密度大考验 帮我赢机票吧', '2017我最想去的地方是这里,看看你有多了解我？', link);


