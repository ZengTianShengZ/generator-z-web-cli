/**
 * Created by ZengTianSheng on 2017/6/21.
 */
import BaseIndex from '../../common/js/baseIndex'
import {postPay} from '../../common/js/getData'
import tplTimeLine from  './tpl/timeLine.tpl.html'
import tplEmpty from  './tpl/empty.tpl.html'

import './index.scss'

import mainTpl from './tpl/timeLine.tpl.html'
class Index extends BaseIndex {
    constructor(){
        super(null);
        this.box_content = $('#box_content');
        this.box_content.html(tplTimeLine({
            data: {

            }
        }));
    }
}
new Index();