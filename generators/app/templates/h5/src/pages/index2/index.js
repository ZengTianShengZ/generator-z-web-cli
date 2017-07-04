/**
 * Created by ZengTianSheng on 2017/6/21.
 */
import BaseIndex from '../../common/js/baseIndex'
import {postDataTest} from '../../common/js/getData'
import tplIndex from './tpl/index.tpl.html'
import './index.scss'

class Index extends BaseIndex {
    constructor() {
        super(null);
        this.initData();
    }
    initData(){
        this.box_main = $('#main');

        postDataTest().then(data => {
            this.box_main.html(tplIndex({
                data: {
                    str:data
                }
            }));
        });
    }
}
new Index();