(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),i=n.n(a),r=n(1001),o=n(283),l=n(994),c=n(999),d=n(1009),s=n(1010),u=n(1011);l.a.Paragraph;var p=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).changeStatus=function(){n.setState((function(e){return{isCodeCollpase:!e.isCodeCollpase}}))},n.copyFn=function(){var e=document.createRange();e.selectNodeContents(document.getElementById(n.id));var t=window.getSelection();t.rangeCount>0&&t.removeAllRanges(),t.addRange(e),document.execCommand("Copy"),c.a.success("复制成功")},n.state={isCodeCollpase:!1},n.id=function(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}(),n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.state.isCodeCollpase;return i.a.createElement("div",{style:{margin:"20px 0"}},i.a.createElement("div",{style:{border:"1px dashed #ddd",borderRadius:"4px",padding:"8px 20px",textAlign:"right"}},i.a.createElement(d.a,{onClick:this.copyFn,style:{marginRight:24}}),e?i.a.createElement(s.a,{onClick:this.changeStatus}):i.a.createElement(u.a,{onClick:this.changeStatus})),i.a.createElement("div",{id:this.id},e?i.a.createElement(r.a,{language:"jsx",style:o.a,showLineNumbers:!0,wrapLines:!0},this.props.children.replace(/^\s+|\s+$/g,"")):null))},a}(i.a.Component)},134:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(993),o=[{width:"15%",title:"参数",dataIndex:"param"},{width:"50%",title:"说明",dataIndex:"explain"},{width:"15%",title:"类型",dataIndex:"type"},{title:"默认值",dataIndex:"defaultValue"}];t.a=function(e){return i.a.createElement(r.a,{size:"small",columns:o,dataSource:e.dataList,pagination:!1})}},989:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(0),i=n.n(a),r=n(133),o=n(134),l=n(423),c=[{key:"1",param:"type",explain:"图表类型",type:"'pie' | 'line' | 'bar'",defaultValue:"line"},{key:"2",param:"option",explain:"所有参数,详见下方文档",type:"Object",defaultValue:"{}"}],d=[{type:"分类一",value:65},{type:"分类二",value:43},{type:"分类三",value:18}],s=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).componentDidMount=function(){n.ring1=new l.b(document.getElementById("ring1"),n.config1),n.ring1.render()},n.state={},n.ring1=null,n.config1={title:{visible:!0,text:"环图"},forceFit:!0,radius:.8,padding:"auto",data:d,color:["#7190FE","#9AACFF","#A4B6FF","#B6C5FE"],angleField:"value",colorField:"type",statistic:{visible:!0},label:{visible:!0,type:"spider"},legend:{visible:!0,position:"top-center"}},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"AntV环图 示例"),i.a.createElement("div",{id:"ring1"}),i.a.createElement(r.a,null,"\nimport { Donut } from '@antv/g2plot';\n\nconst config="+JSON.stringify(this.config1,null,2)+'\n\n//环图实例\nthis.ring1=null \n// 初始化环图实例\nthis.ring1 = new Donut(document.getElementById("ring1"), config);\nthis.ring1.render();\n\n<div id="ring1"></div>\n                '),i.a.createElement("h2",null,"组件属性"),i.a.createElement(o.a,{dataList:c}))},a}(a.Component)}}]);