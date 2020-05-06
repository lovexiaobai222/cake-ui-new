import React from "react";
import { MyRecharts } from "cake-ui";
import CodeStatus from "../../../components/codeStatus.jsx";
import CodeLight from "../../../components/codeLight.jsx";
import Doc from "../../../components/doc.jsx";

var codeString = `

const barOption = {
    // width: 700, //宽
    // height: 500, //高
    // margin: { left: 30, top: 30, right: 30, bottom: 30 }, //margin
    // x: {
    //     //x轴
    //     tick:{
    //         fill:"red"
    //     },
    //     padding: { left: 30, right: 30 },
    //     lineColor: "blue", //x轴颜色
    //     color: "blue", //x轴刻度颜色
    //     fontSize: 16 //x轴刻度字体大小
    // },
    // y: {
    //     //y轴
    //     tick: true, //刻度
    //     tickLine: true //刻度线
    // },
    bars: [
        //线形图的线
        {
            name: "金额",
            value: "uv",
            //closeAnimation: true //关闭动画
        },
        // {
        //     name: "阿重拍",
        //     value: "pv",
        //     bar: {
        //         barColor: "blue" //线的颜色
        //     },
        //     onClick: e => {
        //         console.log(e);
        //     },
        //     label: {
        //         color: "blue" //数据颜色
        //     },
        //     animationDuration: 1000 //动画持续时间
        // }
    ],
    data: [
        //传入数据
        {
            name: "18年08月",
            uv: 3500,
            pv: 2400,
            amt: 2400
        },
        {
            name: "18年09月",
            uv: 4200,
            pv: 1398,
            amt: 2210
        },
        {
            name: "18年10月",
            uv: 3800,
            pv: 9800,
            amt: 2290
        },
        {
            name: "18年11月",
            uv: 3800,
            pv: 3908,
            amt: 2000
        },
        {
            name: "18年12月",
            uv: 5000,
            pv: 4800,
            amt: 2181
        },
        {
            name: "19年01月",
            uv: 5000,
            pv: 3800,
            amt: 2500
        }
    ]
};

export default class MyRechartsDemo extends React.Component {
    render() {
        return (
            <div>
                <MyRecharts option={barOption} type="bar" />
            </div>
        );
    }
}

`;

const barOption = {
    // width: 700, //宽
    // height: 500, //高
    // margin: { left: 30, top: 30, right: 30, bottom: 30 }, //margin
    // x: {
    //     //x轴
    //     tick:{
    //         fill:"red"
    //     },
    //     padding: { left: 30, right: 30 },
    //     lineColor: "blue", //x轴颜色
    //     color: "blue", //x轴刻度颜色
    //     fontSize: 16 //x轴刻度字体大小
    // },
    // y: {
    //     //y轴
    //     tick: true, //刻度
    //     tickLine: true //刻度线
    // },
    bars: [
        //线形图的线
        {
            name: "金额",
            value: "uv"
            //closeAnimation: true //关闭动画
        }
        // {
        //     name: "阿重拍",
        //     value: "pv",
        //     bar: {
        //         barColor: "blue" //线的颜色
        //     },
        //     onClick: e => {
        //         console.log(e);
        //     },
        //     label: {
        //         color: "blue" //数据颜色
        //     },
        //     animationDuration: 1000 //动画持续时间
        // }
    ],
    data: [
        //传入数据
        {
            name: "18年08月",
            uv: 3500,
            pv: 2400,
            amt: 2400
        },
        {
            name: "18年09月",
            uv: 4200,
            pv: 1398,
            amt: 2210
        },
        {
            name: "18年10月",
            uv: 3800,
            pv: 9800,
            amt: 2290
        },
        {
            name: "18年11月",
            uv: 3800,
            pv: 3908,
            amt: 2000
        },
        {
            name: "18年12月",
            uv: 5000,
            pv: 4800,
            amt: 2181
        },
        {
            name: "19年01月",
            uv: 5000,
            pv: 3800,
            amt: 2500
        }
    ]
};
/* 文档配置 */
const columns = [
    {
        title: "参数",
        dataIndex: "para"
    },
    {
        title: "说明",
        dataIndex: "statement"
    },
    {
        title: "类型",
        dataIndex: "type"
    },
    {
        title: "默认值",
        dataIndex: "defaultVal"
    }
];
const data = [
    {
        key: "1",
        para: "type",
        statement: "图表类型",
        type: "'pie' | 'line' | 'bar'",
        defaultVal: "line"
    },
    {
        key: "2",
        para: "option",
        statement: "所有参数,详见下方文档",
        type: "Object",
        defaultVal: "{}"
    }
];

const data2 = [
    {
        key: "0",
        para: "option.data",
        statement: "数据",
        type: "Array",
        defaultVal: ""
    },
    {
        key: "1",
        para: "option.width",
        statement: "宽",
        type: "Number",
        defaultVal: "400"
    },
    {
        key: "2",
        para: "option.height",
        statement: "高",
        type: "Number",
        defaultVal: "300"
    },
    {
        key: "3",
        para: "option.margin",
        statement: "图表四周的留白大小，支持传入部分值（如： { top: 5 }）",
        type: "Object",
        defaultVal: "{ top: 5, right: 5, bottom: 5, left: 5 }"
    },
    {
        key: "4",
        para: "option.legend",
        statement: (
            <span>
                图例，传入对象时参数见
                {
                    <a
                        target="_blank"
                        href="http://recharts.org/zh-CN/api/Legend"
                    >{`<Legend/>`}</a>
                }
                组件
            </span>
        ),
        type: "Boolean | Object",
        defaultVal: "false"
    },
    {
        key: "5",
        para: "option.bars",
        statement: "柱状图参数，详见下方文档",
        type: "Array",
        defaultVal: ""
    },
    {
        key: "6",
        para: "option.toolTip",
        statement: (
            <span>
                文字提示，传入对象时参数见
                {
                    <a
                        target="_blank"
                        href="http://recharts.org/zh-CN/api/Tooltip"
                    >{`<Tooltip/>`}</a>
                }
                组件
            </span>
        ),
        type: "Boolean | Object",
        defaultVal: "true"
    },
    {
        key: "7",
        para: "option.grid",
        statement: (
            <span>
                网格，传入对象时参数见
                {
                    <a
                        target="_blank"
                        href="http://recharts.org/zh-CN/api/CartesianGrid"
                    >{`<CartesianGrid/>`}</a>
                }
                组件
            </span>
        ),
        type: "Boolean | Object",
        defaultVal: "false"
    },
    {
        key: "8",
        para: "option.x",
        statement: (
            <span>
                x轴，传入对象时参数见
                {
                    <a
                        target="_blank"
                        href="http://recharts.org/zh-CN/api/XAxis"
                    >{`<XAxis/>`}</a>
                }
                组件
            </span>
        ),
        type: "Boolean | Object",
        defaultVal: "true"
    },
    {
        key: "9",
        para: "option.y",
        statement: (
            <span>
                y轴，传入对象时参数见
                {
                    <a
                        target="_blank"
                        href="http://recharts.org/zh-CN/api/YAxis"
                    >{`<YAxis/>`}</a>
                }
                组件
            </span>
        ),
        type: "Boolean | Object",
        defaultVal: "true"
    }
];
const data3 = [
    {
        key: "1",
        para: "name",
        statement: "线的名称",
        type: "String",
        defaultVal: ""
    },
    {
        key: "2",
        para: "value",
        statement: "'value' 属性对应的 key",
        type: "String",
        defaultVal: ""
    },
    {
        key: "6",
        para: "onClick",
        statement: "柱条 click 事件的回调函数。",
        type: "Function",
        defaultVal: ""
    },
    {
        key: "8",
        para: "label",
        statement:
            "图形上的文本标签。当值为 false ，不展示文本标签。当值为 true，会根据 Bar 的属性配置来展示文本标签。当值为一个对象的时候，会把这个对象解析为 文本标签 的属性，对象参数参考下方文档，来覆盖默认属性。当值是一个 React Element ，会克隆这个 React Element 来渲染“文本标签”。当值是一个 函数 时，会调用这个函数去渲染自定义的“文本标签”。",
        type: "Boolean | Object | ReactElement | Function",
        defaultVal: "true"
    }
];

const data4 = [
    {
        key: "2",
        para: "label.color",
        statement: "文本的字体颜色",
        type: "String",
        defaultVal: ""
    },
    {
        key: "3",
        para: "label.position",
        statement: "文本位置",
        type: '"top" | "left" | "right" | "bottom" | "inside" | "outside" | "insideLeft" | "insideRight" | "insideTop" | "insideBottom" | "insideTopLeft" | "insideBottomLeft" | "insideTopRight" | "insideBottomRight" | "insideStart" | "insideEnd" | "end" | "center"',
        defaultVal: "top"
    }
];

export default class MyRechartsDemo extends CodeStatus {
    render() {
        const { isCodeCollpase } = this.state;
        return (
            <div>
                <MyRecharts option={barOption} type="bar" />
                {this.controlCode()}
                <CodeLight
                    isCodeCollpase={isCodeCollpase}
                    codeString={codeString}
                />
                <h3>组件属性</h3>
                <Doc col={columns} data={data} />
                <h3>option</h3>
                <Doc col={columns} data={data2} />
                <h3>option.bars</h3>
                <h2>
                    数组，可以包含多个对象，以下是单个对象的参数，更多参数请参考
                    <a
                        target="_blank"
                        href="http://recharts.org/zh-CN/api/Bar"
                    >{`<Bar/>`}</a>
                    组件
                </h2>
                <Doc col={columns} data={data3} />
                <h3>label</h3>
                <Doc col={columns} data={data4} />
            </div>
        );
    }
}
