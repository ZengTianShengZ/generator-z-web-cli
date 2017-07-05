# 前端项目 脚手架 

 <h1 style="text-align:center">欢迎使用 z-web-cli 前端脚手架 </h1>
 
 <div style="align: center">
 ![](https://img.shields.io/npm/v/generator-z-web-cli.svg?style=flat-square)  ![](https://img.shields.io/david/cnpm/npminstall.svg?style=flat-square)  ![](https://img.shields.io/npm/dm/generator-z-web-cli.svg?style=flat-square)  ![](https://img.shields.io/npm/l/generator-z-web-cli.svg)
 </div>
## webpack Feature

   - 可以解析JSX语法
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
   
    
##  目录结构
 
## 使用脚手架 -- generator-z-react-cli

首先确确保自己安装了 nodejs , 然后全局安装 yeoman

```
npm install -g yo
```

然后安装 脚手架

```
npm install -g generator-z-web-cli

```

最后新建个空文件夹,在文件夹里生成项目

```
yo z-web-cli

```
 
在生成项目时，可以选择是构建 react 项目 还是 h5 项目

```
? Select the frame: (Use arrow keys)
> React 
> h5
```

