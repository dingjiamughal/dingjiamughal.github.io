---
title: jQuery实现加入购物车飞入动画效果
date: 2017-05-01 10:44:17
categories: jQuery
tags: fly.js
---

在电商购物网站浏览中意的商品时，点击页面中的“加入购物车”按钮即可将商品加入的购物车中。本文介绍借助一款基于jQuery的动画插件，点击加入购物车按钮时，实现商品将飞入到右侧的购物车中的效果。

<!-- more -->

### HTML
首先载入jQuery库文件和jquery.fly.min.js插件。
```
<script src="jquery.js"></script>
<script src="jquery.fly.min.js"></script>
<script src="requestAnimationFrame.js"></script>
```
布置html结构
```
<div class="box">
    <img src="images/lg.jpg" width="180" height="180">
    <h4>￥<span>3499.00</span></h4>
    <p>LG 49LF5400-CA 49寸IPS硬屏富贵招财铜钱设计</p>
    <a href="#" class="button orange addcar">加入购物车</a>
</div>
<div class="box">
    <img src="images/hs.jpg" width="180" height="180">
    <h4>￥<span>3799.00</span></h4>
    <p>Hisense/海信 LED50T1A 海信电视官方旗舰店</p>
    <a href="#" class="button orange addcar">加入购物车</a>
</div>
<div class="box">
    <img src="images/cw.jpg" width="180" height="180">
    <h4>￥<span>￥3999.00</span></h4>
    <p>Skyworth/创维 50E8EUS 8核4Kj极清酷开系统智能液晶电视</p>
    <a href="#" class="button orange addcar">加入购物车</a>
</div>
<div class="box">
    <img src="images/ls.jpg" width="180" height="180">
    <h4>￥<span>6969.00</span></h4>
    <p>乐视TV Letv X60S 4核1080P高清3D安卓智能超级电视</p>
    <a href="#" class="button orange addcar">加入购物车</a>
</div>
```
在页面的右侧加上购物车以及提示信息。
```
<div class="m-sidebar">
    <div class="cart">
        <i id="end"></i>
        <span>购物车</span>
    </div>
</div>
<div id="msg">已成功加入购物车！</div>
```
### CSS
```
.box{float:left; width:198px; height:320px; margin-left:5px; border:1px solid #e0e0e0; text-align:center}
.box p{line-height:20px; padding:4px 4px 10px 4px; text-align:left}
.box:hover{border:1px solid #f90}
.box h4{line-height:32px; font-size:14px; color:#f30;font-weight:500}
.box h4 span{font-size:20px}
.u-flyer{display: block;width: 50px;height: 50px;border-radius: 50px;position: fixed;z-index: 9999;}

.m-sidebar{position: fixed;top: 0;right: 0;background: #000;z-index: 2000;width: 35px;height: 100%;font-size: 12px;color: #fff;}
.cart{color: #fff;text-align:center;line-height: 20px;padding: 200px 0 0 0px;}
.cart span{display:block;width:20px;margin:0 auto;}
.cart i{width:35px;height:35px;display:block; background:url(car.png) no-repeat;}
#msg{position:fixed; top:300px; right:35px; z-index:10000; width:1px; height:52px; line-height:52px; font-size:20px; text-align:center; color:#fff; background:#360; display:none}
```
### jQuery
我们要实现的效果是，当用户点击“加入购物车”按钮时，当前商品图片会变成一个缩小的圆球，以按钮为起点，向右侧以抛物线的形式飞出，最后落入页面右侧的购物车里，并提示操作成功。在飞出之前，我们要获取当前商品的图片，然后调用fly插件，之后的抛物线轨迹都是由fly插件完成，我们只需定义起点和终点等参数即可。
```
<script>
$(function() {
    var offset = $("#end").offset();
    $(".addcar").click(function(event){
        var addcar = $(this);
        var img = addcar.parent().find('img').attr('src');
        var flyer = $('<img class="u-flyer" src="'+img+'">');
        flyer.fly({
            start: {
                left: event.pageX, //开始位置（必填）#fly元素会被设置成position: fixed
                top: event.pageY //开始位置（必填）
            },
            end: {
                left: offset.left+10, //结束位置（必填）
                top: offset.top+10, //结束位置（必填）
                width: 0, //结束时宽度
                height: 0 //结束时高度
            },
            onEnd: function(){ //结束回调
                $("#msg").show().animate({width: '250px'}, 200).fadeOut(1000); //提示信息
                addcar.css("cursor","default").removeClass('orange').unbind('click');
                this.destory(); //移除dom
            }
        });
    });
});
</script>
```
> demo演示地址，http://www.xhrsama.com/fly.js/feirugouwuche
> 源码地址，https://github.com/dingjiamughal/fly.js
