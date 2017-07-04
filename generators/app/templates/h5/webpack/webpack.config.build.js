/**
 * npm run build
 * 构建发布环境
 */
process.env.NODE_ENV = 'build';
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
var pathConfig = require('../path_config');

var webpackBase =  require('./webpack.config.base');

webpackBase.plugins.push( new ExtractTextPlugin('style/[name].css'));

for (i=0;i<pathConfig.HTML_PATHS.length;i++){
    var htmlPlugin = new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
        template: pathConfig.HTML_PATHS[i], //html模板路径
        filename: '../'+pathConfig.FILE_PATHS[i]+'.html', //生成的html存放路径，相对于 path
        inject: 'body',
        hash: false,
        chunks:[pathConfig.FILE_PATHS[i]]
    });
    webpackBase.plugins.push(htmlPlugin);
}

// var argv = process.argv.pop() || '--build';
// var buildPath = '';
// switch (argv){
//     case '--build':
//         // buildPath = 'http://bongads.b0.upaiyun.com/share/tt';
//         buildPath = '/h5build/static';
//         pathConfig.BUILD_PATH = '../../weix/wx-test/h5build/static';
//         break;
//     case '--online':
//         buildPath = 'http://bongads.b0.upaiyun.com/share/online';
//         break;
// }

module.exports = Object.assign(webpackBase,{
    output: {
        publicPath: pathConfig.PUBLIC_PATH,
        path:pathConfig.BUILD_PATH, //编译好的资源放在根目录的相对 BUILD_PATH 目录下
        filename: 'js/[name].js', //编译后的文件名字
        chunkFilename: '[name].[chunkhash:5].min.js',
    },
    devtool: 'cheap-module-eval-source-map',
});
