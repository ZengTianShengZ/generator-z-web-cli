/**
 * Created by ZengTianSheng on 2017/7/13.
 */
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

let argv = process.argv.pop() || '--build';

let TEMPLATE_PATH = path.resolve(__dirname,'src/template/index.html');
let CDN_PATH = '';
let ENTRY = {};
let OUTPUT = {};

if (argv === '--build' || argv === '--online') {
    if (argv === '--build') {
        CDN_PATH = 'http://CDN/xxxxxxxxxxxxxxxx/test/static/';
    } else {
        CDN_PATH = 'http://CDN/xxxxxxxxxxxxxx/online/static/';
    }
    ENTRY = {
        app: path.resolve(__dirname, 'src', 'app'),
        common: [
            'babel-polyfill',
            "react",
            'react-dom',
            'react-router',
            'redux',
            'react-redux',
            'redux-thunk',
            'immutable'
        ],
    };
    OUTPUT = {
        publicPath:CDN_PATH, //编译好的文件，在服务器的路径,域名会自动添加到前面
        path: path.resolve(__dirname, './build/static'),
        filename: 'js/[name].js', //编译后的文件名字
        chunkFilename: 'js/[name].[chunkhash:5].min.js',
    };
} else {
    ENTRY = {
        app: [
            'webpack-hot-middleware/client',
            'babel-polyfill',
            path.resolve(__dirname, 'src', 'app')
        ]
    };
    OUTPUT = {
        publicPath: '/build/static', //编译好的文件，在服务器的路径,这是静态资源引用路径
        path: path.resolve(__dirname, '/build/static'),
        filename: '[name].js'
    };
}
module.exports = {
    entry: ENTRY,
    output: OUTPUT,
    include_ptah: path.resolve(__dirname, 'src'),
    templatePath:TEMPLATE_PATH,
    root_path:path.resolve(__dirname)
};