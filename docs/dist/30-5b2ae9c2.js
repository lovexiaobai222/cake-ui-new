(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{133:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var l=t(0),n=t.n(l),o=t(1001),u=t(283),r=t(994),i=t(999),d=t(1009),c=t(1010),p=t(1011);r.a.Paragraph;var s=function(e){var a,t;function l(a){var t;return(t=e.call(this,a)||this).changeStatus=function(){t.setState((function(e){return{isCodeCollpase:!e.isCodeCollpase}}))},t.copyFn=function(){var e=document.createRange();e.selectNodeContents(document.getElementById(t.id));var a=window.getSelection();a.rangeCount>0&&a.removeAllRanges(),a.addRange(e),document.execCommand("Copy"),i.a.success("复制成功")},t.state={isCodeCollpase:!1},t.id=function(){for(var e=[],a=0;a<36;a++)e[a]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}(),t}return t=e,(a=l).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,l.prototype.render=function(){var e=this.state.isCodeCollpase;return n.a.createElement("div",{style:{margin:"20px 0"}},n.a.createElement("div",{style:{border:"1px dashed #ddd",borderRadius:"4px",padding:"8px 20px",textAlign:"right"}},n.a.createElement(d.a,{onClick:this.copyFn,style:{marginRight:24}}),e?n.a.createElement(c.a,{onClick:this.changeStatus}):n.a.createElement(p.a,{onClick:this.changeStatus})),n.a.createElement("div",{id:this.id},e?n.a.createElement(o.a,{language:"jsx",style:u.a,showLineNumbers:!0,wrapLines:!0},this.props.children.replace(/^\s+|\s+$/g,"")):null))},l}(n.a.Component)},134:function(e,a,t){"use strict";var l=t(0),n=t.n(l),o=t(993),u=[{width:"15%",title:"参数",dataIndex:"param"},{width:"50%",title:"说明",dataIndex:"explain"},{width:"15%",title:"类型",dataIndex:"type"},{title:"默认值",dataIndex:"defaultValue"}];a.a=function(e){return n.a.createElement(o.a,{size:"small",columns:u,dataSource:e.dataList,pagination:!1})}},400:function(e,a,t){"use strict";var l=t(0),n=t(8),o=t.n(n),u=t(44),r=t(9);function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function d(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var c={small:8,middle:16,large:24};a.a=function(e){var a,t=l.useContext(r.b),n=t.getPrefixCls,p=t.space,s=t.direction,f=e.size,m=void 0===f?(null==p?void 0:p.size)||"small":f,v=e.align,y=e.className,h=e.children,b=e.direction,g=void 0===b?"horizontal":b,E=e.prefixCls,R=function(e,a){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)a.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(t[l[n]]=e[l[n]])}return t}(e,["size","align","className","children","direction","prefixCls"]),x=Object(u.a)(h),C=x.length;if(0===C)return null;var k=void 0===v&&"horizontal"===g?"center":v,V=n("space",E),B=o()(V,"".concat(V,"-").concat(g),(d(a={},"".concat(V,"-rtl"),"rtl"===s),d(a,"".concat(V,"-align-").concat(k),k),a),y),w="".concat(V,"-item"),O="rtl"===s?"marginLeft":"marginRight";return l.createElement("div",i({className:B},R),x.map((function(e,a){return l.createElement("div",{className:w,key:"".concat(w,"-").concat(a),style:a===C-1?{}:d({},"vertical"===g?"marginBottom":O,"string"==typeof m?c[m]:m)},e)})))}},978:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return m}));var l=t(0),n=t.n(l),o=t(133),u=t(134),r=t(400),i=t(479),d=t(294),c=[{key:"defaultChecked",param:"defaultChecked",explain:"初始是否选中",type:"boolean",defaultValue:"false"},{key:"checked",param:"checked",explain:"当前是否选中",type:"boolean",defaultValue:"false"},{key:"disabled",param:"disabled",explain:"是否禁用",type:"boolean",defaultValue:"false"},{key:"value",param:"value",explain:"radio的value值",type:"any",defaultValue:""}],p=[{key:"options",param:"options",explain:"以配置形式设置子元素可选项",type:"array",defaultValue:"[]"},{key:"defaultValue",param:"defaultValue",explain:"初始选中值",type:"any",defaultValue:""},{key:"value",param:"value",explain:"当前选中值",type:"any",defaultValue:""},{key:"disabled",param:"disabled",explain:"禁选所有子单选器",type:"boolean",defaultValue:"false"},{key:"onChange",param:"onChange",explain:"变化时的回调",type:"function",defaultValue:"(checkedValue)=>{}"},{key:"size",param:"size",explain:"大小，只对Radio.Button生效",type:"string",defaultValue:"large、middle（默认）、small"},{key:"buttonStyle",param:"buttonStyle",explain:"Radio.Button的风格样式",type:"string",defaultValue:"outline（默认描边）、solid（填充）"}],s=[{key:"defaultChecked",param:"defaultChecked",explain:"初始是否选中",type:"boolean",defaultValue:"false"},{key:"checked",param:"checked",explain:"当前是否选中",type:"boolean",defaultValue:"false"},{key:"disabled",param:"disabled",explain:"是否禁用",type:"boolean",defaultValue:"false"},{key:"onChange",param:"onChange",explain:"变化时的回调",type:"function",defaultValue:"(e)=>{}"}],f=[{key:"options",param:"options",explain:"可选项",type:"array",defaultValue:"[]"},{key:"defaultValue",param:"defaultValue",explain:"初始选中数组",type:"array",defaultValue:"[]"},{key:"value",param:"value",explain:"选中数组",type:"array",defaultValue:"[]"},{key:"disabled",param:"disabled",explain:"是否禁用整组",type:"boolean",defaultValue:"false"},{key:"onChange",param:"onChange",explain:"变化时的回调",type:"function",defaultValue:"(checkedValue)=>{}"}],m=function(e){var a,t;function l(a,t){var l;return(l=e.call(this,a,t)||this).state={value:1},l}return t=e,(a=l).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,l.prototype.render=function(){var e=this,a=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"},{label:"Banana",value:"Banana",disabled:!0}];return n.a.createElement("div",null,n.a.createElement("h2",null,"单选与多选 示例"),n.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},n.a.createElement("div",{style:{width:"48%"}},n.a.createElement(r.a,{size:26},n.a.createElement(i.default.Group,{value:this.state.value,onChange:function(a){e.setState({value:a.target.value})}},n.a.createElement(i.default,{value:1},"A"),n.a.createElement(i.default,{value:2},"B"),n.a.createElement(i.default,{value:3},"C"),n.a.createElement(i.default,{value:4},"D"),n.a.createElement(i.default,{value:5,disabled:!0},"E")),n.a.createElement(i.default.Group,{defaultValue:1,disabled:!0},n.a.createElement(i.default,{value:1},"A"),n.a.createElement(i.default,{value:2},"B"),n.a.createElement(i.default,{value:3},"C"))),n.a.createElement(r.a,{size:20},n.a.createElement(i.default.Group,{defaultValue:"a",buttonStyle:"solid"},n.a.createElement(i.default.Button,{value:"a"},"杭州"),n.a.createElement(i.default.Button,{value:"b"},"上海"),n.a.createElement(i.default.Button,{value:"c"},"北京"),n.a.createElement(i.default.Button,{value:"d"},"成都")),n.a.createElement(i.default.Group,{defaultValue:"a",size:"small"},n.a.createElement(i.default.Button,{value:"a"},"杭州"),n.a.createElement(i.default.Button,{value:"b"},"上海"),n.a.createElement(i.default.Button,{value:"c"},"北京"),n.a.createElement(i.default.Button,{value:"d"},"成都"))),n.a.createElement(o.a,null,'\nimport { Transfer } from "cake-ui"\n\nthis.state = {\n  value: 1,\n}\n\n<Radio.Group value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value})}} >\n  <Radio value={1}>A</Radio>\n  <Radio value={2}>B</Radio>\n  <Radio value={3}>C</Radio>\n  <Radio value={4}>D</Radio>\n  <Radio value={5} disabled>E</Radio>\n</Radio.Group>\n<Radio.Group defaultValue={1} disabled>\n  <Radio value={1}>A</Radio>\n  <Radio value={2}>B</Radio>\n  <Radio value={3}>C</Radio>\n</Radio.Group>\n\n<Radio.Group defaultValue="a" buttonStyle="solid">\n  <Radio.Button value="a">杭州</Radio.Button>\n  <Radio.Button value="b">上海</Radio.Button>\n  <Radio.Button value="c">北京</Radio.Button>\n  <Radio.Button value="d">成都</Radio.Button>\n</Radio.Group>\n<Radio.Group defaultValue="a" size="small">\n  <Radio.Button value="a">杭州</Radio.Button>\n  <Radio.Button value="b">上海</Radio.Button>\n  <Radio.Button value="c">北京</Radio.Button>\n  <Radio.Button value="d">成都</Radio.Button>\n</Radio.Group>\n                    ')),n.a.createElement("div",{style:{width:"48%"}},n.a.createElement(d.a.Group,{options:a,defaultValue:["Apple"],onChange:function(e){}}),n.a.createElement(d.a.Group,{options:a,defaultValue:["Apple"],disabled:!0}),n.a.createElement(o.a,null,'\nimport { Checkbox } from "cake-ui"\n\nconst options='+JSON.stringify(a,null,2)+"\n\n<Checkbox.Group options={options} defaultValue={['Apple']} onChange={(checkedValues)=>{}} />\n<Checkbox.Group options={options} defaultValue={['Apple']} disabled />\n                    "))),n.a.createElement("h2",null,"Radio属性"),n.a.createElement(u.a,{dataList:c}),n.a.createElement("h2",null,"Radio.Group属性"),n.a.createElement(u.a,{dataList:p}),n.a.createElement("h2",null,"Checkbox属性"),n.a.createElement(u.a,{dataList:s}),n.a.createElement("h2",null,"Checkbox.Group属性"),n.a.createElement(u.a,{dataList:f}))},l}(l.Component)}}]);