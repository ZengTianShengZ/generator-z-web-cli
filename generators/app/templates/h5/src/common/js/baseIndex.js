/**
 * Created by ZengTianSheng on 2017/6/26.
 */
import flexible from './lib/flexible.min';
import WxShare from './lib/wxShare';
import {url2obj} from './utils'
/**
 * 父类
 */
class BaseIndex{
    constructor(){
        // 是否开启微信公众号h5页面开发
        // let uo = url2obj(location.href);
        // console.log(uo);
        // new WxShare(
        //     'wx7b9373e121f88e0c',
        //     'https://avatars3.githubusercontent.com/u/15622519?v=3&u=48049875e3e38cfc9499bda745ec77b1c000066d&s=400',
        //     uo.ticket,
        //     'http://example.com',
        //     'http://example.com',
        //     '标题',
        //     '内容');
    }
}
export default BaseIndex;