(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{133:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),l=a.n(n),o=a(999),i=a(283),r=a(994),u=a(1e3),d=a(1008),c=a(1009),s=a(1010);r.a.Paragraph;var m=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).changeStatus=function(){a.setState((function(e){return{isCodeCollpase:!e.isCodeCollpase}}))},a.copyFn=function(){var e=document.createRange();e.selectNodeContents(document.getElementById(a.id));var t=window.getSelection();t.rangeCount>0&&t.removeAllRanges(),t.addRange(e),document.execCommand("Copy"),u.a.success("复制成功")},a.state={isCodeCollpase:!1},a.id=function(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}(),a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.state.isCodeCollpase;return l.a.createElement("div",{style:{margin:"20px 0"}},l.a.createElement("div",{style:{border:"1px dashed #ddd",borderRadius:"4px",padding:"8px 20px",textAlign:"right"}},l.a.createElement(d.a,{onClick:this.copyFn,style:{marginRight:24}}),e?l.a.createElement(c.a,{onClick:this.changeStatus}):l.a.createElement(s.a,{onClick:this.changeStatus})),l.a.createElement("div",{id:this.id},e?l.a.createElement(o.a,{language:"jsx",style:i.a,showLineNumbers:!0,wrapLines:!0},this.props.children.replace(/^\s+|\s+$/g,"")):null))},n}(l.a.Component)},134:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(993),i=[{width:"15%",title:"参数",dataIndex:"param"},{width:"50%",title:"说明",dataIndex:"explain"},{width:"15%",title:"类型",dataIndex:"type"},{title:"默认值",dataIndex:"defaultValue"}];t.a=function(e){return l.a.createElement(o.a,{size:"small",columns:i,dataSource:e.dataList,pagination:!1})}},961:function(e,t,a){"use strict";var n=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"},o=a(128),i=function(e,t){return n.createElement(o.a,Object.assign({},e,{ref:t,icon:l}))};i.displayName="DownloadOutlined",t.a=n.forwardRef(i)},977:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(0),l=a.n(n),o=a(133),i=a(134),r=a(459),u=a(136),d=a(479),c=a(483),s=a(961),m=a(1009),p=[{key:"disabled",param:"disabled",explain:"禁用按钮",type:"boolean",defaultValue:"false"},{key:"href",param:"href",explain:"跳转地址,同<a/>",type:"string",defaultValue:""},{key:"target",param:"target",explain:"跳转窗口,同<a target='_blank'/>",type:"string",defaultValue:""},{key:"icon",param:"icon",explain:"按钮左侧图标",type:"ReactNode",defaultValue:""},{key:"loading",param:"loading",explain:"按钮载入状态",type:"boolean",defaultValue:"false"},{key:"shape",param:"shape",explain:"按钮外形",type:"string",defaultValue:"'','circle','round'"},{key:"size",param:"size",explain:"按钮大小",type:"string",defaultValue:"'middle'(默认),'large','small'"},{key:"type",param:"type",explain:"按钮大小",type:"string",defaultValue:"''(默认),'primary','dashed','link'"},{key:"onClick",param:"onClick",explain:"按钮回调",type:"function",defaultValue:"(e)=>{}"},{key:"danger",param:"danger",explain:"危险按钮",type:"boolean",defaultValue:"false"}],y=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=l.a.createElement(r.a,{onClick:function(e){}},l.a.createElement(r.a.Item,{key:"1"},"1st item"),l.a.createElement(r.a.Item,{key:"2"},"2nd item"),l.a.createElement(r.a.Item,{key:"3"},"3rd item"));return l.a.createElement("div",null,l.a.createElement("h2",null,"按钮 示例"),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},l.a.createElement("div",{style:{width:"48%"}},l.a.createElement("div",{style:{width:"460px",display:"flex",justifyContent:"space-between",alignItems:"center"}},l.a.createElement(u.a,{type:"primary",size:"small"},"按钮"),l.a.createElement(u.a,{type:"primary"},"按钮"),l.a.createElement(u.a,{type:"primary",size:"large"},"按钮"),l.a.createElement(u.a,{size:"small"},"按钮"),l.a.createElement(u.a,null,"按钮"),l.a.createElement(u.a,{size:"large"},"按钮")),l.a.createElement(o.a,null,'\nimport { Button } from "antd"\n\n<Button type="primary" size={"small"}>按钮</Button>\n<Button type="primary">按钮</Button>\n<Button type="primary" size={"large"}>按钮</Button>\n\n<Button size={"small"}>按钮</Button>\n<Button>按钮</Button>\n<Button size={"large"}>按钮</Button>\n                        ')),l.a.createElement("div",{style:{width:"48%"}},l.a.createElement("div",{style:{width:"560px",display:"flex",justifyContent:"space-between",alignItems:"center"}},l.a.createElement(u.a,{type:"primary",size:"small",icon:l.a.createElement(s.a,null)},"按钮"),l.a.createElement(u.a,{type:"primary",icon:l.a.createElement(s.a,null)},"按钮"),l.a.createElement(u.a,{type:"primary",size:"large",icon:l.a.createElement(s.a,null)},"按钮"),l.a.createElement(u.a,{size:"small",icon:l.a.createElement(s.a,null)},"按钮"),l.a.createElement(u.a,{icon:l.a.createElement(s.a,null)},"按钮"),l.a.createElement(u.a,{size:"large",icon:l.a.createElement(s.a,null)},"按钮")),l.a.createElement(o.a,null,'\nimport { Button } from "antd"\nimport { DownloadOutlined } from \'@ant-design/icons\';\n\n<Button type="primary" size={"small"} icon={<DownloadOutlined />}>按钮</Button>\n<Button type="primary" icon={<DownloadOutlined />}>按钮</Button>\n<Button type="primary" size={"large"} icon={<DownloadOutlined />}>按钮</Button>\n\n<Button size={"small"} icon={<DownloadOutlined />}>按钮</Button>\n<Button icon={<DownloadOutlined />}>按钮</Button>\n<Button size={"large"} icon={<DownloadOutlined />}>按钮</Button>\n                        ')),l.a.createElement("div",{style:{width:"48%"}},l.a.createElement("div",{style:{width:"460px",display:"flex",justifyContent:"space-between",alignItems:"center"}},l.a.createElement(u.a,{type:"primary",icon:l.a.createElement(s.a,null),shape:"round"}),l.a.createElement(u.a,{icon:l.a.createElement(s.a,null),shape:"round"}),l.a.createElement(u.a,{type:"primary",size:"small",icon:l.a.createElement(s.a,null),shape:"circle"}),l.a.createElement(u.a,{type:"primary",icon:l.a.createElement(s.a,null),shape:"circle"}),l.a.createElement(u.a,{type:"primary",size:"large",icon:l.a.createElement(s.a,null),shape:"circle"}),l.a.createElement(u.a,{size:"small",icon:l.a.createElement(s.a,null),shape:"circle"}),l.a.createElement(u.a,{icon:l.a.createElement(s.a,null),shape:"circle"}),l.a.createElement(u.a,{size:"large",icon:l.a.createElement(s.a,null),shape:"circle"})),l.a.createElement(o.a,null,'\nimport { Button } from "antd"\nimport { DownloadOutlined } from \'@ant-design/icons\';\n\n<Button type="primary" icon={<DownloadOutlined />} shape="round"/>\n<Button icon={<DownloadOutlined />} shape="round"/>\n\n<Button type="primary" size={"small"} icon={<DownloadOutlined />} shape="circle"/>\n<Button type="primary" icon={<DownloadOutlined />} shape="circle"/>\n<Button type="primary" size={"large"} icon={<DownloadOutlined />} shape="circle"/>\n\n<Button size={"small"} icon={<DownloadOutlined />} shape="circle"/>\n<Button icon={<DownloadOutlined />} shape="circle"/>\n<Button size={"large"} icon={<DownloadOutlined />} shape="circle"/>\n                        ')),l.a.createElement("div",{style:{width:"48%"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}},l.a.createElement(u.a,{type:"dashed"},"按钮"),l.a.createElement(u.a,{type:"dashed",icon:l.a.createElement(s.a,null)},"按钮"),l.a.createElement(u.a,{type:"dashed",icon:l.a.createElement(s.a,null),shape:"circle"}),l.a.createElement(u.a,{danger:!0},"按钮"),l.a.createElement(u.a,{type:"dashed",danger:!0},"按钮"),l.a.createElement(u.a,{type:"dashed",disabled:!0,danger:!0},"按钮"),l.a.createElement("br",null),l.a.createElement(u.a,{disabled:!0},"按钮"),l.a.createElement(u.a,{type:"dashed",disabled:!0},"按钮"),l.a.createElement(u.a,{type:"dashed",disabled:!0,shape:"round"},"按钮")),l.a.createElement(o.a,null,'\nimport { Button } from "antd"\nimport { DownloadOutlined } from \'@ant-design/icons\';\n\n<Button type="dashed">按钮</Button>\n<Button type="dashed" icon={<DownloadOutlined />}>按钮</Button>\n<Button type="dashed" icon={<DownloadOutlined />} shape="circle"/>\n\n<Button danger>按钮</Button>\n<Button type="dashed" danger>按钮</Button>\n<Button type="dashed" disabled danger>按钮</Button>\n\n<Button disabled>按钮</Button>\n<Button type="dashed" disabled>按钮</Button>\n<Button type="dashed" disabled shape="round">按钮</Button>\n                        ')),l.a.createElement("div",{style:{width:"48%"}},l.a.createElement("div",{style:{width:"460px",display:"flex",justifyContent:"space-between",alignItems:"center"}},l.a.createElement(d.default.Group,{defaultValue:"hangzhou",onChange:function(e){}},l.a.createElement(d.default.Button,{value:"hangzhou"},"杭州"),l.a.createElement(d.default.Button,{value:"shanghai"},"上海"),l.a.createElement(d.default.Button,{value:"beijing"},"北京"),l.a.createElement(d.default.Button,{value:"chengdu"},"成都")),l.a.createElement(d.default.Group,{size:"small",disabled:!0,defaultValue:"hangzhou",onChange:function(e){}},l.a.createElement(d.default.Button,{value:"hangzhou"},"杭州"),l.a.createElement(d.default.Button,{value:"shanghai"},"上海"),l.a.createElement(d.default.Button,{value:"beijing"},"北京"),l.a.createElement(d.default.Button,{value:"chengdu"},"成都"))),l.a.createElement(o.a,null,'\nimport { Button,Radio } from "antd";\n\n<Radio.Group defaultValue={"hangzhou"} onChange={(e)=>{}}>\n  <Radio.Button value="hangzhou">杭州</Radio.Button>\n  <Radio.Button value="shanghai">上海</Radio.Button>\n  <Radio.Button value="beijing">北京</Radio.Button>\n  <Radio.Button value="chengdu">成都</Radio.Button>\n</Radio.Group>\n\n<Radio.Group size="small" disabled defaultValue={"hangzhou"} onChange={(e)=>{}}>\n  <Radio.Button value="hangzhou">杭州</Radio.Button>\n  <Radio.Button value="shanghai">上海</Radio.Button>\n  <Radio.Button value="beijing">北京</Radio.Button>\n  <Radio.Button value="chengdu">成都</Radio.Button>\n</Radio.Group>\n                        ')),l.a.createElement("div",{style:{width:"48%"}},l.a.createElement("div",null,l.a.createElement(c.a,{overlay:e},l.a.createElement(u.a,null,"菜单按钮 ",l.a.createElement(m.a,null)))),l.a.createElement(o.a,null,'\nimport { Button,Menu, Dropdown } from "antd"\nimport { DownOutlined } from \'@ant-design/icons\';\n\nconst menu = (\n  <Menu onClick={(e)=>{}}>\n    <Menu.Item key="1">1st item</Menu.Item>\n    <Menu.Item key="2">2nd item</Menu.Item>\n    <Menu.Item key="3">3rd item</Menu.Item>\n  </Menu>\n);\n\n<Dropdown overlay={menu}>\n  <Button>\n    菜单按钮 <DownOutlined />\n  </Button>\n</Dropdown>\n                        '))),l.a.createElement("h2",null,"组件属性"),l.a.createElement(i.a,{dataList:p}))},n}(l.a.Component)}}]);