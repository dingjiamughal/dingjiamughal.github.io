---
title: Nodejs——Express框架
date: 2017-05-11 14:10:11
tags: node.js
categories: node.js
---

Express在后台的受欢迎的程度，和jQuery一样，就是企业的事实上的标准。
<!-- more -->
>既然能堪比js的jQuery，Express有哪些便捷之处呢？

原生Node开发，会发现有很多问题。比如：
呈递静态页面很不方便，需要处理每个HTTP请求，还要考虑304问题。
路由处理代码不直观清晰，需要写很多正则表达式和字符串函数。
不能集中精力写业务，要考虑很多其他的东西。
EXPRESS是在你的想法和服务器之间充当薄薄的一层。这并不意味着他不够健壮，或者没有足够的有用特性，而是尽量少干预你，让你充分表达自己的思想，同时提供一些有用的东西。

英语官网：http://expressjs.com/
中文官网：http://www.expressjs.com.cn/

#### Express强大的路由能力
```
var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.send("你好");
});
app.get("/haha",function(req,res){
    res.send("这是haha页面，哈哈哈哈哈哈");
});
app.get(/^\/student\/([\d]{10})$/,function(req,res){
    res.send("学生信息，学号" + req.params[0]);
});
app.get("/teacher/:gonghao",function(req,res){
    res.send("老师信息，工号" + req.params.gonghao);
});
app.listen(3000);
```
原声的nodejs创建路由需要，创建服务器，解析url地址，判断路径。用了Express，这些问题都变得很无脑，另外Express可以对路径进行过滤操作。

#### 静态文件伺服能力：
app.use(express.static("./public"));

#### 模板引擎
```
var express = require("express");
var app = express();
app.set("view engine","ejs");
app.get("/",function(req,res){
   res.render("haha",{
        "news" : ["我是小新闻啊","我也是啊","哈哈哈哈"]
    });
});
app.listen(3000);
```
render()读取文件
