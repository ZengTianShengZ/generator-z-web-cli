/**
 * npm run hot
 * 构建开发环境
 */
process.env.NODE_ENV = 'dev';
var path = require('path');
var webpack = require('webpack');
var pathConfig = require('../path_config');

var webpackBase =  require('./webpack.config.base');

webpackBase.plugins.push(new webpack.HotModuleReplacementPlugin());
webpackBase.plugins.push(new webpack.NoErrorsPlugin());

module.exports = Object.assign(webpackBase,{
    output:{
        publicPath:pathConfig.HOT_PATH, // 追加 path 路径 ,热刷新不能去掉 publicPath
        path: pathConfig.HOT_PATH,
        filename: 'js/[name].js'
    },
    devtool: 'cheap-module-eval-source-map',
});
