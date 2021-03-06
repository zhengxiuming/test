import React, {
    Component,
    PropTypes
} from 'react';
import {
    Router,
    Route,
    hashHistory,
    Link
} from 'react-router';
import {
    Table,
    Modal,
    FormControl,
    Form,
    Message,
    Datepicker,
    FormItem,
    Button,
    Icon
} from '../../libs/rctui/index';
import {
    bindActionCreators
} from 'redux'

import {
    fetchEmployeeList
} from "../../actions/employee";

import {
    connect
} from 'react-redux'
import {
    DUID
} from '../../globals'
import $ from 'jquery'
import Loading from '../../libs/react-loading'
import {
    EMPLOYEEDUID
} from '../../globals';


class Checktransfer extends Component {
    componentWillMount() {
        //this.props.actions.fetchEmployeeList(EMPLOYEEDUID,0,"")
    }
    handleClick() {
        hashHistory.push("/transferettle");
        //console.log(this.props)
    }
    render() {
        console.log(this.props);
        let table_config = {
            bordered: false,
            striped: true
        }
        return (
            <div>
                <div className="matte"></div>
                <div className="applySheet">
                    <div className="z_applyHd">
                        <div className="z_nav">
                            <span className="title">查看调拨单</span>
                        </div>
                        <div className="backHistory">
                            <a href="javascript:;" onClick={this.handleClick.bind(this)}>返回调拨结算</a>
                        </div>
                        <div className="z_nav_hd clearfix">
                            <div className="hd_left">
                                <span className="title">创建于</span>
                                <span className="title titleTime">{this.props.title.create_time}</span>
                            </div>
                            <div className="hd_right">
                                <span className="title titleSheet">结算单号:</span>
                                <span className="title titleSheet">{this.props.title.card}</span>
                            </div>
                        </div>
                    </div>
                    <div className="applySheetContent">
                        <h2>调拨结请单</h2>
                        <div>
                            <ul className="apply_hospital gap clearfix">
                                <li className="first">
                                    <span>付款医院：</span>
                                    <span>{this.props.title.pay_hospital}</span>
                                </li>
                                <li>
                                    <span>收款医院：</span>
                                    <span>{this.props.title.pay_hospital}</span>
                                </li>
                                <li>
                                    <span>结算日期：</span>
                                    <span>{this.props.title.create_time}</span>
                                </li>
                            </ul>
                            <ul className="apply_hospital deal_money clearfix">
                                <li>
                                    <span>应付总额：</span>
                                    ￥<span>{this.props.title.account_payable}</span>
                                </li>
                                <li>
                                    <span>结算总额：</span>
                                    ￥<span>{this.props.title.clear_payable}</span>
                                </li>
                            </ul>
                            <ul className="apply_hospital operator clearfix">
                                <li>
                                    <span>操作人员：</span>
                                    <span>李冰</span>
                                </li>
                                <li>
                                    <span>备注：</span>
                                    <span>...</span>
                                </li>
                            </ul>
                        </div>
                        <div className="tableContent">
                            <h3>待付款采购清单</h3>
                            <Table ref="table"
                                   bordered={table_config.bordered}
                                   striped={table_config.striped}
                                   data={this.props.list}
                                   height={346}
                                   headers={[
                                       { name: 'aid',header: '采购单号'},
                                       { name: 'time', header: '日期'},
                                       { name: 'purchase_people', header: '采购人员' },
                                       { name:'purchase_money',header:"采购金额"},
                                       { name:'last_clear',header:"历时已结算"},
                                       { name:'remain_clear',header:"剩余待结算"},
                                       { name:'now_clear',header:"本次结算"},
                                       { name:'remarks',header:"备注"}
                                   ]} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state, ownProps) {
    var list = [{
        aid: "P10000101",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."

    }, {
        aid: "P10000102",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
    }, {
        aid: "P10000103",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
    }, {
        aid: "P10000104",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
    }, {
        aid: "P10000105",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
    }, {
        aid: "P10000106",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
    }, {
        aid: "P10000107",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
    }, {
        aid: "P10000108",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
    }, {
        aid: "P10000109",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
    }, {
        aid: "P10000110",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
    }, {
        aid: "P10000111",
        time: '2016.06.07',
        purchase_people: "海岩",
        purchase_money: "￥100.00",
        last_clear: "￥100.00",
        remain_clear: "￥100.00",
        now_clear: "￥100.00",
        remarks: "...."
    }]
    let hospital_data = {
        all: '所有医院',
        lianchong: '联宠国际动物检测中心',
        meilian: '美联众合',
        chongfuxin: '宠福鑫',
    }
    let time = [
        "2016.07.08", "2016.07.09", "2016.07.10", "2016.07.11"
    ]
    let title = {
        pay_hospital: "联宠国际动物检测中心望京分院",
        create_time: "2016.09.07",
        card: "CHW123910",
        account_payable: "30000.00",
        clear_payable: "30000.00"
    }
    return {
        employees: state.employee,
        list: list,
        hospital_data: hospital_data,
        time: time,
        title: title,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            fetchEmployeeList: fetchEmployeeList
        }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checktransfer)