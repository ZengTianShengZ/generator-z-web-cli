/**
 * Created by ZengTianSheng on 2017/6/7.
 */
import fetch from './lib/fetch';


export const postPay = (postData) => fetch('/pay','POST',postData);