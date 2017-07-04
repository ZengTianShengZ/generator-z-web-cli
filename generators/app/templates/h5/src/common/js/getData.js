/**
 * Created by ZengTianSheng on 2017/6/7.
 */
import fetch from './lib/fetch';


export const postDataTest = (postData) => fetch('/postDataTest','POST',postData);