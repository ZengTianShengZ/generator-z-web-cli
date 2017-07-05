# h5 项目

## webpack Feature

   - 可以解析ES6语法新特性
   - 支持LESS、SCSS预处理器
   - 编译完成自动打开浏览器
   - 单独分离CSS样式文件
   - 支持文件MD5戳，解决文件缓存问题
   - 支持图片、图标字体等资源的编译
   - 支持浏览器源码调试
   - 实现组件级热更新
   - 实现代码的热替换，浏览器实时刷新查看效果
   - 区分开发环境和生产环境
   - 分离业务功能代码和公共依赖代码  

##  h5 目录结构
```
  React
  |-- build //构建目录，遵循发布系统规范
  |    |-- index.html   //静态页面
  |    |-- static       //资源文件发布到cdn,或发布到服务器  
  |
  |-- src                     //源码目录
  |    |--common              // 公共方法
  |    |      |-- js          //工具脚本
  |    |      |-- style       //工具样式
  |    |--Config              //环境配置
  |    |--Image               //图片资源
  |    |--pages               // 页面
  |    |      |--  index      // 页面模块
  |    |      |      |--  tpl         // 页面模板（采用ejs模板）
  |    |      |      |--  index.html  // 页面
  |    |      |      |--  index.js   
  |    |      |      |--  index.css   
  |    |      |      |  
  |-- webpack                   // 项目构建
  |     |-- server_hot.js       // 日常服务
  |     |-- server.js           // 发布测试服务
  |     |-- webpack.config.base.js         
  |     |-- webpack.config.buildt.js   
  |     |-- webpack.config.hot.js
  |-- path_config.js              项目构建路径配置

```

## 前端项目构建

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run hot

# build for production with test
npm run build

# build for production with online
npm run online
```


 
    
## 项目架构 
  
   - 本项目默认采用 zepto.js 库，ejs做模板引擎
   - 内部集成 weixin-js-sdk 可以选择是否使用
