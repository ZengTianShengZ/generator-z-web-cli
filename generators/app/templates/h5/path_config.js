/**
 * Created by ZengTianSheng on 2017/6/22.
 */
const fs = require('fs');
const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html

const entry_PATH = path.resolve(__dirname,'src/pages');
let entryFilesArray = fs.readdirSync(entry_PATH);
let entryFiles = {};
let htmlPATHS = [];
let filePath = [];

let argv = process.argv.pop() || '--build';
let cdnPath = '';
let buildPath ='';
switch (argv){
    case '--build':
        buildPath = 'http://CDN/xxxxxxxxxxxxxx/static/';
        cdnPath = 'http://CDN/xxxxxxxxxxxxxx/static/';
        break;
    case '--online':
        cdnPath = 'http://CDN/xxxxxxxxxxxxxx/online/static/';
        buildPath = path.resolve(__dirname,'build/static');
        break;
}



entryFilesArray.forEach(function(file){
    if(argv === '--build'){
        entryFiles[file] = [
            path.resolve(entry_PATH,file,'index')
        ];
    }else{
        entryFiles[file] = [
            'webpack-hot-middleware/client?reload=true',
            path.resolve(entry_PATH,file,'index')
        ];
    }
    filePath.push(file);
    htmlPATHS.push(path.resolve(entry_PATH,file,'index.html'))
});

module.exports = {
    ENTRY_FILES:entryFiles,
    HOT_PATH:path.resolve(__dirname,'/build/static'),
    BUILD_PATH:path.resolve(__dirname,'./build/static'),
    PUBLIC_PATH:cdnPath,
    SRC:path.resolve(__dirname,'src'),
    HTML_PATHS:htmlPATHS,
    FILE_PATHS:filePath
};