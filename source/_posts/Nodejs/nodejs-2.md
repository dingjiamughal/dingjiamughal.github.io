---
title: nodejs-2
date: 2017-05-08 16:42:11
tags: node.js
categories: node.js
---
在Node.js中，以模块为单位划分所有功能，并且提供了一个完整的模块加载机制，这时的我们可以将应用程序划分为各个不同的部分。不可能用一个js文件去写全部的业务。肯定要有MVC。狭义的说，每一个JavaScript文件都是一个模块；而多个JavaScript文件之间可以相互require，他们共同实现了一个功能，他们整体对外，又称为一个广义上的模块。Node.js中，一个JavaScript文件中定义的变量、函数，都只在这个文件内部有效。当需要从此JS文件外部引用这些变量、函数时，必须使用exports对象进行暴露。使用者要用require()命令引用这个JS文件。
<!-- more -->
### 一、Http模块
Node.js是服务器的程序，写的js语句，都将运行在服务器上。返回给客户的，都是已经处理好的纯html。
Node.js中，将很多的功能，划分为了一个个mudule
有一些程序需要使用fs功能（文件读取功能），有一些不用的，所以为了效率，你用什么，就require什么。

1	//require表示引包，引包就是引用自己的一个特殊功能
2	var http = require("http");
3	//创建服务器，参数是一个回调函数
4	var server = http.createServer(function(req,res){
5		//req表示请求，request;  res表示响应，response
6		//设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
7		res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
8		res.end("hahaha");
9	});
10
11	//运行服务器
12	server.listen(3000,"127.0.0.1");
npm install -g supervisor 自动刷新插件。

使用者用foo来接收exports对象，也就是说，这里的foo变量，就是文件中的exports变量。
一个JavaScript文件，可以向外exports无数个变量、函数。但是require的时候，仅仅需要require这个JS文件一次。使用的它的变量、函数的时候，用点语法即可。所以，无形之中，增加了一个顶层命名空间。
js文件中，可以用exports暴露很多东西，比如函数、变量。
```
1	var msg = "你好";
2	var info = "呵呵";
3
4	function showInfo(){
5	    console.log(info);
6	}
7
8	exports.msg = msg;
9	exports.info = info;
10	exports.showInfo = showInfo;
```
在使用者中，只需要require一次。
```
var foo = require("../app/foo.js");
相当于增加了顶层变量。所有的函数、变量都要从这个顶层变量走：
console.log(foo.msg);      //你好
console.log(foo.info);     //呵呵
foo.showInfo();            //呵呵
```
Node中，js文件和js文件，就是被一个个exports和require构建成为网状的，不是靠html文件统一在一起的。

可以将一个JavaScript文件中，描述一个类。用module.export = 构造函数名;的方式向外暴露一个类。也就是说，js文件和js文件之间有两种合作的模式：
1） 某一个js文件中，提供了函数，供别人使用。 只需要暴露函数就行了； exports.msg=msg;
2） 某一个js文件，描述了一个类。   module.exports = People;

如果在require命令中，这么写:
```
var foo = require("foo.js");   
```
没有写./， 所以不是一个相对路径。是一个特殊的路径，那么Node.js将该文件视为node_modules目录下的一个文件

还可以使用文件夹来管理模块，比如
```
var bar = require("bar");   //bar是一个文件夹
```
那么Node.js将会去寻找node_modules目录下的bar文件夹中的index.js去执行。
每一个模块文件夹中，推荐都写一个package.json文件，这个文件的名字不能改。node将自动读取里面的配置。有一个main项，就是入口文件：
```
{
  "name": "kaoladebar",
  "version": "1.0.1",
	"main" : "app.js"             //此时入口文件为replace("index.js","app.js")
}
```
package.json文件，要放到模块文件夹的根目录去。
模块就是一些功能的封装，所以一些成熟的、经常使用的功能，都有人封装成为了模块。并且放到了社区中，供人免费下载。
这个伟大的社区，叫做npm（node package management）[https://www.npmjs.com/](https://www.npmjs.com/)


去社区搜索需求，然后点进去，看api。如果要配置一个模块，那么直接在cmd使用 npm install 模块名字
安装的时候，要注意，命令提示符的所在位置。

1.我们的依赖包，可能在随时更新，我们永远想保持更新，或者某持某一个版本；
2.项目越来越大的时候，给别人看的时候，没有必要再次共享我们引用的第三方模块。
因此可以用package.json来管理依赖。在cmd中，使用npm init可以初始化一个package.json文件，用回答问题的方式生成一个新的package.json文件。
使用
1	npm install
将能安装所有依赖。
npm也有文档，这是package.json的介绍：[https://docs.npmjs.com/files/package.json](https://docs.npmjs.com/files/package.json)
require()别的js文件的时候，将执行那个js文件。

注意：
require()中的路径，是从当前这个js文件出发，找到别人。
所以，桌面上有一个a.js， test文件夹中有b.js、c.js、1.txt
a要引用b：
```
var b = require(“./test/b.js”);
```
b要引用c：
```
var b = require(“./c.js”);
```
但是，而fs是从命令提示符找到别人，fs等其他的模块用到路径的时候，都是相对于cmd命令光标所在位置。
所以，在b.js中想读1.txt文件，推荐用绝对路径：
```
fs.readFile(__dirname + "/1.txt",function(err,data){
	if(err) { throw err; }
	console.log(data.toString());
});
```
```
var http=require("http");
var url=require("url");
var fs=require("fs");
http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    if(pathname=="/"){
        pathname="index.html"
    }
    fs.readFile("./views/"+pathname,function(err,data){
        if(err){
            fs.readFile("./views/404.html",function(err,data){
                res.writeHead(404,{'Content-Type':'text/html;charset=UTF8'})
                res.end(data);
            });
            return;
        }
        res.end(data);
        console.log(data)
    });
    console.log(pathname)
}).listen(3000);
```
### 二、Post请求
```
        var data = "";
         req.addListener("data",function(chunk){
         data += chunk;
        });
        //全部传输完毕
        req.addListener("end",function(){
            console.log(data.toString());
            res.end("success");
        });
```
用一个提交表单的例子，使用第三方模块formidable，npm install formidable。
提交表单上传文件到指定目录，并且实现文件改名，只要涉及文件上传，那么form标签要加一个属性：
```
<form action="http://127.0.0.1/dopost" method="post" enctype="multipart/form-data">
```
```
var http = require("http");
var formidable = require('formidable');
var util = require("util");
var fs = require("fs");
var sd = require("silly-datetime");
var path = require("path");
//创建服务器
var server = http.createServer(function(req,res){
    //如果你的访问地址是这个，并且请求类型是post
    if(req.url == "/dopost" && req.method.toLowerCase() == "post"){
        //Creates a new incoming form.
        var form = new formidable.IncomingForm();
        //设置文件上传存放地址
        form.uploadDir = "./uploads";
        //执行里面的回调函数的时候，表单已经全部接收完毕了。
        form.parse(req, function(err, fields, files) {
            //if(err){
            //    throw err;
            //}
            //console.log(util.inspect({fields: fields, files: files}));
            //时间，使用了第三方模块，silly-datetime
            var ttt = sd.format(new Date(), 'YYYYMMDDHHmmss');
            var ran = parseInt(Math.random() * 89999 + 10000);
            var extname = path.extname(files.tupian.name);
            //执行改名
            var oldpath = __dirname + "/" + files.tupian.path;
            //新的路径由三个部分组成：时间戳、随机数、拓展名
            var newpath = __dirname + "/uploads/" + ttt + ran + extname;

            //改名
            fs.rename(oldpath,newpath,function(err){
                if(err){
                    throw Error("改名失败");
                }
                res.writeHead(200, {'content-type': 'text/plain'});
                res.end("成功");
            });
        });
    }else if(req.url == "/"){
        //呈递form.html页面
        fs.readFile("./form.html",function(err,data){
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        })
    }else{
        res.writeHead(404, {'content-type': 'text/html'});
        res.end("404");
    }
});
server.listen(80,"192.168.41.36");
```
