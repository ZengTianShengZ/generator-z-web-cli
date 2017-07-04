/**
 * Created by ZengTianSheng on 2017/5/16.
 */
var path = require('path');
var chalk = require('chalk');    //不同颜色的info
var util = require('util');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');    //yeoman弹出框
var path = require('path');
var Reactpackage = yeoman.Base.extend({
    appFrame:'',
    appName:'',
    prompting: function () {
        return this.prompt([{
            type    : 'input',
            name    : 'name',
            message : 'Your project name：',
            default : this.appname // Default to current folder name
        }, {
            type : 'list',
            name : 'checkValue',
            message : 'Select the frame:',
            choices : [
                {
                    name : 'React',
                    value : 'react'
                },
                {
                    name : 'h5',
                    value : 'h5'
                },
            ]
        },
        //     {
        //     type    : 'confirm', // 确定
        //     name    : 'cool',
        //     message : 'Would you like to enable the Cool feature?'
        // }
        ]).then(function (answers) {

            this.log('app name', answers.name);
            this.log('app frame', answers.checkValue);
            // this.log('cool feature', answers.cool);

            this.appName = answers.name;
            this.appFrame = answers.checkValue;

        }.bind(this));
    },
    info: function() {
        // this.log(chalk.green(
        //     `
        //
        //         _ ----- _    ╭──────────────────────────╮
        //         |       |    │   react   h5             │
        //         |--(o)--|    │    successfully! then    │
        //        |---------|   │  install dependencies/n  │
        //         ( _'U'_ )    │  npm install/n  npm run  │
        //         /___A___/    │            hot           │
        //          |  ~  |     ╰──────────────────────────╯
        //        __'.___.'__
        //      '   '  |° ' Y '
        //
        //
        //     `
        // ));
    },
    generateBasic: function() {  //按照自己的templates目录自定义
        switch (this.appFrame){
            case 'react':
                this.directory('react', './');   //拷贝目录,第一个参数为模板下的文件，第二个参数为目标文件
                //this.copy('package.json', 'package.json');   //拷贝文件
                break;
            case 'h5':
                this.directory('h5', './');
                break;
        }
    },
    generateClient: function() {
        this.sourceRoot(path.join(__dirname, 'templates'));
        this.destinationPath('./');
    },
    install: function() {      //安装依赖
        // this.installDependencies({
        //     skipInstall: this.options['skip-install']
        // });
    },
    end: function() {
        this.log(yosay(
            ' app has been created successfully! then install dependencies' +
            '/n  npm install'+
            '/n  npm run hot'
        ));
    }
});
module.exports = Reactpackage;