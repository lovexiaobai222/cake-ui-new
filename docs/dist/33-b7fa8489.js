(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),i=n.n(a),r=n(999),o=n(283),l=n(994),c=n(1e3),d=n(1008),p=n(1009),s=n(1010);l.a.Paragraph;var u=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).changeStatus=function(){n.setState((function(e){return{isCodeCollpase:!e.isCodeCollpase}}))},n.copyFn=function(){var e=document.createRange();e.selectNodeContents(document.getElementById(n.id));var t=window.getSelection();t.rangeCount>0&&t.removeAllRanges(),t.addRange(e),document.execCommand("Copy"),c.a.success("复制成功")},n.state={isCodeCollpase:!1},n.id=function(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}(),n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.state.isCodeCollpase;return i.a.createElement("div",{style:{margin:"20px 0"}},i.a.createElement("div",{style:{border:"1px dashed #ddd",borderRadius:"4px",padding:"8px 20px",textAlign:"right"}},i.a.createElement(d.a,{onClick:this.copyFn,style:{marginRight:24}}),e?i.a.createElement(p.a,{onClick:this.changeStatus}):i.a.createElement(s.a,{onClick:this.changeStatus})),i.a.createElement("div",{id:this.id},e?i.a.createElement(r.a,{language:"jsx",style:o.a,showLineNumbers:!0,wrapLines:!0},this.props.children.replace(/^\s+|\s+$/g,"")):null))},a}(i.a.Component)},134:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(993),o=[{width:"15%",title:"参数",dataIndex:"param"},{width:"50%",title:"说明",dataIndex:"explain"},{width:"15%",title:"类型",dataIndex:"type"},{title:"默认值",dataIndex:"defaultValue"}];t.a=function(e){return i.a.createElement(r.a,{size:"small",columns:o,dataSource:e.dataList,pagination:!1})}},988:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(0),i=n.n(a),r=n(133),o=n(134),l=n(423),c=[{key:"1",param:"type",explain:"图表类型",type:"'pie' | 'line' | 'bar'",defaultValue:"line"},{key:"2",param:"option",explain:"所有参数,详见下方文档",type:"Object",defaultValue:"{}"}],d=[{type:"类型一",value:65},{type:"类型二",value:25},{type:"类型三",value:18},{type:"其它",value:5}],p=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).componentDidMount=function(){n.pie1=new l.d(document.getElementById("pie1"),n.config1),n.pie1.render()},n.state={},n.pie1=null,n.config1={title:{visible:!0,text:"饼图"},description:{visible:!0,text:"当把饼图label的类型设置为spider时，标签分为两组，在图表两侧拉线对齐显示。一般来说，蜘蛛布局的label更不容易相互遮挡。"},forceFit:!0,color:["#7190FE","#9AACFF","#A4B6FF","#B6C5FE"],radius:.8,data:d,angleField:"value",colorField:"type",label:{visible:!0,type:"spider"}},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"AntV饼图 示例"),i.a.createElement("div",{id:"pie1"}),i.a.createElement(r.a,null,"\nimport { Pie } from '@antv/g2plot';\n\nconst config="+JSON.stringify(this.config1,null,2)+'\n\n//饼图实例\nthis.pie1=null \n// 初始化饼图实例\nthis.pie1 = new Line(document.getElementById("pie1"), config);\nthis.pie1.render();\n\n<div id="pie1"></div>\n                '),i.a.createElement("h2",null,"组件属性"),i.a.createElement(o.a,{dataList:c}))},a}(a.Component)}}]);