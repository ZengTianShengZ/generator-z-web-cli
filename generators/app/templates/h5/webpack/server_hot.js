var webpack = require('webpack');
var express = require('express');
var opn = require('opn');
var bodyParser = require('body-parser');
var config = require('./webpack.config.hot');
var bs = require('browser-sync').create();
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();
var compiler = webpack(config);

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.post('/pay',bodyParser.json() ,function(req,res){
    console.log(req.body);
    var reqBody = req.body;
    var resData = {
        err:0,
        data:{
            name:'success',
            userId:'38239191923'
        }
    };
    res.end(JSON.stringify(resData));
});
app.get('/tt',function (req,res) {
    res.end('lalalaal')
})

app.listen(8088, function() {
    bs.init({
        open: false,
        ui: false,
        notify: false,
        files: ['./src/pages/**/*.html'], // 所监听的文件
        port: 8089,
        server: {
            baseDir:'./src/pages/',
            middleware:[
                webpackDevMiddleware(compiler, {
                    publicPath: config.output.path, // 热编译输出路径
                    hot: true,
                    historyApiFallback: true,
                    inline: true,
                    progress: true,
                    stats: {
                        colors: true,
                    }
                }),
                webpackHotMiddleware(compiler),
                function (req, res, next) {
                    console.log('------build-------');
                    next();
                }
            ]
        },
    });
    opn('http://192.168.1.242:8089/index');
});
