(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{998:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1),o=n(118),i=n(16),c=n.n(i),u=n(13),d=n(459),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 000 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM459.7 834.7L189.3 564.3 589 164.6 836 188l23.4 247-399.7 399.7zM680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]},name:"tag",theme:"outlined"},s=n(128),m=function(e,t){return a.createElement(s.a,Object.assign({},e,{ref:t,icon:p}))};m.displayName="TagOutlined";var h=a.forwardRef(m),f=n(1007),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 518H506V160c0-4.4-3.6-8-8-8h-26a398.46 398.46 0 00-282.8 117.1 398.19 398.19 0 00-85.7 127.1A397.61 397.61 0 0072 552a398.46 398.46 0 00117.1 282.8c36.7 36.7 79.5 65.6 127.1 85.7A397.61 397.61 0 00472 952a398.46 398.46 0 00282.8-117.1c36.7-36.7 65.6-79.5 85.7-127.1A397.61 397.61 0 00872 552v-26c0-4.4-3.6-8-8-8zM705.7 787.8A331.59 331.59 0 01470.4 884c-88.1-.4-170.9-34.9-233.2-97.2C174.5 724.1 140 640.7 140 552c0-88.7 34.5-172.1 97.2-234.8 54.6-54.6 124.9-87.9 200.8-95.5V586h364.3c-7.7 76.3-41.3 147-96.6 201.8zM952 462.4l-2.6-28.2c-8.5-92.1-49.4-179-115.2-244.6A399.4 399.4 0 00589 74.6L560.7 72c-4.7-.4-8.7 3.2-8.7 7.9V464c0 4.4 3.6 8 8 8l384-1c4.7 0 8.4-4 8-8.6zm-332.2-58.2V147.6a332.24 332.24 0 01166.4 89.8c45.7 45.6 77 103.6 90 166.1l-256.4.7z"}}]},name:"pie-chart",theme:"outlined"},x=function(e,t){return a.createElement(s.a,Object.assign({},e,{ref:t,icon:g}))};x.displayName="PieChartOutlined";var b=a.forwardRef(x),E=d.a.SubMenu,P=o.a.Sider,y=[{url:"searchForm",text:"SearchForm"},{url:"tableData",text:"TableData"},{url:"form",text:"Form"},{url:"popForm",text:"PopForm"},{url:"draggableModal",text:"DraggableModal"},{url:"draggablePopForm",text:"DraggablePopForm"},{url:"descriptions",text:"Descriptions"},{url:"checkTagGroup",text:"CheckTagGroup"},{url:"editor",text:"WangEditor"},{url:"tree",text:"Tree"},{url:"slider",text:"Slider"},{url:"steps",text:"Steps"},{url:"button",text:"Button"},{url:"badge",text:"Badge"},{url:"radioAndCheckbox",text:"RadioAndCheckbox"},{url:"switch",text:"Switch"},{url:"inputAndSelect",text:"InputAndSelect"},{url:"datePicker",text:"DatePicker"},{url:"upload",text:"Upload"},{url:"breadcrumb",text:"Breadcrumb"},{url:"rate",text:"Rate"},{url:"transfer",text:"Transfer"},{url:"transferTag",text:"TransferTag"},{url:"photoView",text:"PhotoView"}],k=[{url:"barChart",text:"柱状图"},{url:"lineChart",text:"折线图"},{url:"pieChart",text:"饼状图"},{url:"ringChart",text:"环状图"}],w=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props.match;return r.a.createElement(P,{style:{background:"#fff",overflow:"hidden auto"}},r.a.createElement(d.a,{mode:"inline",defaultSelectedKeys:["0"],defaultOpenKeys:["sub0"],style:{height:"100%",borderRight:0}},r.a.createElement(E,{key:"开发组件",title:r.a.createElement("span",null,r.a.createElement(h,null),"开发组件")},r.a.createElement(d.a.Item,{key:"注意事项"},r.a.createElement(u.a,{to:e.url+"/payAttention"},"注意事项"))),r.a.createElement(E,{key:"范例",title:r.a.createElement("span",null,r.a.createElement(f.a,null),"范例")},y.map((function(t,n){return r.a.createElement(d.a.Item,{key:t.text},r.a.createElement(u.a,{to:e.url+"/"+t.url},t.text))}))),r.a.createElement(E,{key:"图表",title:r.a.createElement("span",null,r.a.createElement(b,null),"AntV图表")},k.map((function(t,n){return r.a.createElement(d.a.Item,{key:t.text},r.a.createElement(u.a,{to:e.url+"/"+t.url},t.text))})))))},a}(r.a.Component),v=n(17);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var A=o.a.Content,T=[{path:"payAttention",component:c()({loader:function(){return n.e(40).then(n.bind(null,966))},loading:v.a}),isExact:!0},{path:"searchForm",component:c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(16)]).then(n.bind(null,967))},loading:v.a}),isExact:!0},{path:"tableData",component:c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,968))},loading:v.a}),isExact:!0},{path:"form",component:c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(7)]).then(n.bind(null,1003))},loading:v.a}),isExact:!0},{path:"popForm",component:c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(15)]).then(n.bind(null,969))},loading:v.a}),isExact:!0},{path:"draggableModal",component:c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(11)]).then(n.bind(null,970))},loading:v.a}),isExact:!0},{path:"draggablePopForm",component:c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(12)]).then(n.bind(null,971))},loading:v.a}),isExact:!0},{path:"checkTagGroup",component:c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(9)]).then(n.bind(null,972))},loading:v.a}),isExact:!0},{path:"editor",component:c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,973))},loading:v.a}),isExact:!0},{path:"tree",component:c()({loader:function(){return Promise.all([n.e(0),n.e(21),n.e(38)]).then(n.bind(null,974))},loading:v.a}),isExact:!0},{path:"slider",component:c()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(20),n.e(36)]).then(n.bind(null,975))},loading:v.a}),isExact:!0},{path:"steps",component:c()({loader:function(){return Promise.all([n.e(0),n.e(26),n.e(37)]).then(n.bind(null,976))},loading:v.a}),isExact:!0},{path:"button",component:c()({loader:function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,977))},loading:v.a}),isExact:!0},{path:"badge",component:c()({loader:function(){return Promise.all([n.e(0),n.e(24)]).then(n.bind(null,1004))},loading:v.a}),isExact:!0},{path:"radioAndCheckbox",component:c()({loader:function(){return Promise.all([n.e(0),n.e(30)]).then(n.bind(null,978))},loading:v.a}),isExact:!0},{path:"switch",component:c()({loader:function(){return Promise.all([n.e(0),n.e(25)]).then(n.bind(null,1005))},loading:v.a}),isExact:!0},{path:"inputAndSelect",component:c()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(22),n.e(35)]).then(n.bind(null,979))},loading:v.a}),isExact:!0},{path:"descriptions",component:c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(10)]).then(n.bind(null,980))},loading:v.a}),isExact:!0},{path:"datePicker",component:c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(27)]).then(n.bind(null,981))},loading:v.a}),isExact:!0},{path:"upload",component:c()({loader:function(){return Promise.all([n.e(0),n.e(19),n.e(39)]).then(n.bind(null,982))},loading:v.a}),isExact:!0},{path:"breadcrumb",component:c()({loader:function(){return Promise.all([n.e(0),n.e(29)]).then(n.bind(null,996))},loading:v.a}),isExact:!0},{path:"rate",component:c()({loader:function(){return Promise.all([n.e(0),n.e(23)]).then(n.bind(null,997))},loading:v.a}),isExact:!0},{path:"transfer",component:c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(18)]).then(n.bind(null,983))},loading:v.a}),isExact:!0},{path:"transferTag",component:c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(17)]).then(n.bind(null,984))},loading:v.a}),isExact:!0},{path:"photoView",component:c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(14)]).then(n.bind(null,985))},loading:v.a}),isExact:!0},{path:"barChart",component:c()({loader:function(){return Promise.all([n.e(0),n.e(4),n.e(32)]).then(n.bind(null,986))},loading:v.a}),isExact:!0},{path:"lineChart",component:c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(31)]).then(n.bind(null,987))},loading:v.a}),isExact:!0},{path:"pieChart",component:c()({loader:function(){return Promise.all([n.e(0),n.e(4),n.e(33)]).then(n.bind(null,988))},loading:v.a}),isExact:!0},{path:"ringChart",component:c()({loader:function(){return Promise.all([n.e(0),n.e(4),n.e(34)]).then(n.bind(null,989))},loading:v.a}),isExact:!0}],F=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props.match,t=function(t){return r.a.createElement(l.a,{exact:t.isExact,path:e.url+"/"+t.path,render:function(e){return r.a.createElement(t.component,C({},e,{routes:t.routes}))}})};return r.a.createElement(o.a,null,r.a.createElement(w,this.props),r.a.createElement(o.a,{style:{background:"#fff",margin:"24px"}},r.a.createElement(A,{style:{padding:"24px"}},T.map((function(e){return r.a.createElement(t,C({key:e.path},e))})))))},a}(r.a.Component);t.default=F}}]);