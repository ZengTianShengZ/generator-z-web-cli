/**
 * Created by ZengTianSheng on 2017/6/21.
 */
import BaseIndex from '../../common/js/baseIndex'
import {postPay} from '../../common/js/getData'
import tplSelect from './tpl/select.tpl.html'
import './index.scss'

class Index extends BaseIndex {
    constructor() {
        super(null);
        this.ar_select = [
            {
                time: 10,
                money: 5
            }, {
                time: 20,
                money: 10
            }, {
                time: 40,
                money: 15
            }
        ];
        this.o_select_type = this.ar_select[0];

        this.treadmill = '1号跑步机';

        this.initData();
        this.initClick();

    }
    initData(){
        this.box_select_result = $('#box_select_result');
        this.box_select_result.html(tplSelect({
            data: {
                treadmill: this.treadmill,
                select_type:this.ar_select[0]
            }
        }));
    }
    initClick(){
        let _this = this;
        $('#ul_time_select').on('click','li',function () {
            let index = $(this).index();
            $('.activity').removeClass('activity');
            $(this).addClass('activity');
            _this.o_select_type = _this.ar_select[index]
            _this.box_select_result.html(tplSelect({
                data: {
                    treadmill: _this.treadmill,
                    select_type:_this.o_select_type
                }
            }));
        });
        $('#btn_pay').on('click',function () {
            postPay({
                treadmill: _this.treadmill,
                select_type:_this.o_select_type
            }).then(result => {
                console.log(result);
            })
        })
    }
}
new Index();