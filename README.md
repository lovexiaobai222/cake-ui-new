# cake-UI
根据antd 4.0二次开发的前端UI组件库，文档地址：https://github.com/lovexiaobai222/cake-ui-new/doc/dist/index.html#/

# webpack.config.js
作用是通过npm start运行本地开发时的一些配置
在配置中可以通过resolve.alias指定npm包名

# rollup.config.js说明（暂时未用）
作用是导出组件的外链版本，供在HTML中通过srcipt:src方式引入
在配置中可以通过修改output.name指定组件对外暴露的变量名

# /esm
通过babel输出es6 module模块规范的包（运用于两端）

# /lib
通过设置babel以commonJs模块规范来输出包

# /dist
通过webpack配置输出umd模块规范的包（运用于浏览器端，script引入）