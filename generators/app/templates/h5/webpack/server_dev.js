var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config.hot');
var bs = require('browser-sync').create();

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	publicPath: config.output.path, // 热编译输出路径
	hot: true,
	historyApiFallback: true,
	inline: true,
	progress: true,
	stats: {
		colors: true,
	}
}));

app.use(require('webpack-hot-middleware')(compiler));

//将其他路由，全部返回index.html
app.get('*', function(req, res) {
	res.sendFile(__dirname + '/src/index.tpl.html')
});

app.listen(8088, function() {
	console.log('正常打开8088端口');
	bs.init({
		open: false,
		ui: false,
		notify: false,
		proxy: 'localhost:8088',
		files: ['./src/index.tpl.html'],
		port: 8088
	});
});
