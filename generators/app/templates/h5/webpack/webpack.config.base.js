/**
 * webpack base
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var webpack = require('webpack');
var pathConfig = require('../path_config');
var DEV = (process.env.NODE_ENV==='dev')?true:false;
module.exports = {
    entry:pathConfig.ENTRY_FILES,
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /^node_modules$/,
            loaders: ['babel'],
            include: [pathConfig.SRC]
        },{
            test: /\.(tpl|html)$/,
            exclude: /^node_modules$/,
            loaders: ['ejs-template-loader'],
            include: [pathConfig.SRC]
        }, {
            test: /\.css$/,
            exclude: /^node_modules$/,
            loaders: DEV?['style', 'css', 'autoprefixer']:ExtractTextPlugin.extract('style', ['css', 'autoprefixer']),
            include: [pathConfig.SRC]
        }, {
            test: /\.less$/,
            exclude: /^node_modules$/,
            loaders: DEV?['style', 'css', 'autoprefixer', 'less']:ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'less']),
            include: [pathConfig.SRC]
        }, {
            test: /\.scss$/,
            exclude: /^node_modules$/,
            loader: DEV?'style-loader!css-loader!autoprefixer-loader!sass-loader':ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'sass']),
            include: [pathConfig.SRC]
        },{
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=images/[name].[ext]',
            include: [pathConfig.SRC]
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /^node_modules$/,
            loader: 'url-loader?limit=8192&name=images/[name].[hash:8].[ext]',
            include: [pathConfig.SRC]
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'zepto-webpack'
        })
    ]
};