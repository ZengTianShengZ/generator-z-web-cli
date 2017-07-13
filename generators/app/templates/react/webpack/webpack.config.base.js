/**
 * webpack base
 */
var webpack = require('webpack');
var pathConfig = require('../pathConfig');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包

var DEV = (process.env.NODE_ENV==='dev')?true:false;

module.exports = {
    entry:pathConfig.entry,
    output:pathConfig.output,
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /^node_modules$/,
            loaders: ['react-hot', 'babel'],
            include: [pathConfig.include_ptah]
        },{
            test: /\.css$/,
            exclude: /^node_modules$/,
            loaders: DEV?['style', 'css', 'autoprefixer']:ExtractTextPlugin.extract('style', ['css', 'autoprefixer']),
            include: [pathConfig.include_ptah]
        }, {
            test: /\.less$/,
            exclude: /^node_modules$/,
            loaders: DEV?['style', 'css', 'autoprefixer', 'less']:ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'less']),
            include: [pathConfig.include_ptah]
        }, {
            test: /\.scss$/,
            exclude: /^node_modules$/,
            loader: DEV?'style-loader!css-loader!autoprefixer-loader!sass-loader':ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'sass']),
            include: [pathConfig.include_ptah]
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=[name].[ext]',
            include: [pathConfig.include_ptah]
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /^node_modules$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
            //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            include: [pathConfig.include_ptah]
        }, {
            test: /\.jsx$/,
            exclude: /^node_modules$/,
            loaders: ['react-hot', 'jsx', 'babel'],
            include: [pathConfig.include_ptah]
        }
        ]
    }
};