/**
 * npm run build
 * 构建发布环境
 */
process.env.NODE_ENV = 'build';
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
var CleanWebpackPlugin = require('clean-webpack-plugin');

var pathConfig = require('../pathConfig');

var webpackBase =  require('./webpack.config.base');

module.exports = Object.assign(webpackBase,{
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new CleanWebpackPlugin(pathConfig.output.OUTPUT, {
            root: pathConfig.root_path,
            verbose: true,
            dry: false,
            //exclude: ['shared.js']
        }),
        new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
            template: pathConfig.templatePath, //html模板路径
            filename: '../index.html', //生成的html存放路径，相对于 path
            inject: 'body',
            hash: true
        }),
        new ExtractTextPlugin('css/[name].css'),
        //提取出来的样式和common.js会自动添加进发布模式的html文件中，原来的html没有
        new webpack.optimize.CommonsChunkPlugin("common", "common.bundle.js"),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false, // remove all comments （移除所有注释）
            },
            compress: {          // 压缩
                warnings: false
            }
        })
    ]
});
