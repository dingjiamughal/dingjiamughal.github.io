---
title: 微信小程序初体验
comments: true
date: 2017-04-28 14:45:24
categories: 微信小程序
tags:
  - 微信小程序
---

被某人忽悠微信小程序，看了两天文档，写了些demo试了试手。总结几点个人对小程序的理解

<!--more-->

[TOC]

### 1. 前期工作
小程序的语法简洁，基于HTML,CSS,JavaScript。对于前端开发人员非常友好。
创建目录时，允许生成四种文件格式：wxml、wxss、json、js。分别对应html、css、json、js。其中json文件用来写配置项。
我们使用`app.json`文件来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等。
以下是一个包含了所有配置选项的`app.json`：
```{
  "pages": [                                      //所有涉及的页面集合
    "pages/index/index",                          //第一行为起始页
    "pages/logs/index"
  ],
  "window": {                                       
    "navigationBarTitleText": "Demo"              //设置顶部标题
  },
  "tabBar": {                                     //工具栏，tabBar是一个数组，只能配置最少2个、最多5个
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页"
    }, {
      "pagePath": "pages/logs/logs",
      "text": "日志"
    }]
  },
  "networkTimeout": {                            //请求超时时间限制，校验请求域名和TLS版本
    "request": 10000,
    "downloadFile": 10000
  },
  "debug": true
}
```
app.js中`App()`函数用来注册一个小程序。接受一个`object`参数，其指定小程序的生命周期函数等。
`onLaunch`监听小程序初始化，当小程序初始化完成时，会触发 onLaunch（全局只触发一次）。
`onHide`当小程序启动，或从后台进入前台显示，会触发 onShow
`onShow`当小程序从前台进入后台，会触发 onHide
`onError`当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
`ObjName`全局的 getApp() 函数，可以获取到小程序实例，在子页面中调用，如：`var appInstance = getApp()appInstance.ObjName`

### 2. 编写第一个小程序应用
在配置完成之后，可以开始编写应用了，为了继承小程序简洁的风格，将所有的页面放在Pages文件夹，开发工具默认创建了`index`和`logs`文件，在运行之前需要确保创建的json文件中有`{}`js文件中要有`Page({})`，否则会控制台报错但对程序运行没有影响，这可能是小程序的编写规范吧，在开发文档中也没有提到。

这里我想谈谈对脚本中`Page()`的理解，官方定义`Page()`函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。这似乎和启动项app.js中的App()是一样的，的确在对比了很久之后发现确实没多大区别，从定义和语法上都是一样的，唯一的区别应该就是控制权限，小程序为了更加模块化，把app.js当父，pages文件夹中的js文件为子，文件之间可以相互调用，用node.js和react语法都能实现配置项调用，个人喜欢用module.exports = {key:value};var a = require("文件名")得到实例

写到这里大概可以谈谈小程序的精髓了 —— 单项数据绑定，基于MVVM数据层的操作，dom操作（包括获取节点）在小程序中完全摒弃。这对于忠实的jQuery粉丝来说会非常不适应，一些最基本的dom操作，例如显示隐藏在小程序中也需要通过一个参数绑定切换数据值来完成dom操作，这个下面细说，期初刚看到小程序脚本语法的时候，觉得既然小程序提倡“小”那为什么不用jQuery呢，后来想了想小程序的应用场景，小程序适合展示页并不会有过多的dom操作，适合类似豆瓣、简书这类数据展示的应用，因此会有许多重复的模板只需要接受事件改变数据就可以了，通过和jQuery比较也可以很好的理解小程序基于数据的编程思想。
举个简单的例子，“显示一个元素”这个功能用jQuery来实现：
> $("#el").show();

而使用MVVM是这样：
>< div xx-show="isShow"></div>
xx.isShow = true;

但是我们如果只需要处理"显示元素"这类简单的问题的话，使用`jQuery`或者MVVM的方式都无所谓了。
当我们面临需要频繁的插入一大段含有js变量的`HTML`：
```
//jQuery
var html= '<div class="panel panel-success">'
        + '<div class="panel-heading text-center">'
        + '<h3 role="button" data-toggle="collapse"aria-controls="content-banners-1" class="panel-title">'+res.title+'</h3>'
        + '</div>'
        + '<div class="collapse in" id="content-banners-1">'
        + '<div class="panel-body">'
        + '<div class="row">'+res.content+'</div>'
        + '<input type="hidden" id="upload-url">'
        + '</div></div></div>';
//然后做模板处理
//最后插入
$('#parent').html( html );```

相比之下：
```
//MVVM

<!-- template -->
<div class="panel panel-success" xx-if="isShow">
...
<div  class="panel-title">{{title}} </div>
...
<div class="row">{{content}}</div>
...
//javascript
xx.title= 'title';
xx.content= 'hello,world!';
xx.isShow = true;
```

简洁性和可读性相形见绌。并且在越复杂的操作DOM的情况下，就能显示出MVVM的优势。
当脚本中的数据变化时，前台页面的数据也会相应的变化，不用于angularjs的双向数据绑定，单项数据绑定只能用脚本控制视图，视图变化不会影响到脚本文件中数据。
小程序有自己的一套数据绑定的语法。所有的逻辑层都可以（应当）写在Page()中，和组件开发调用方式非常相似，小程序规范了所有数据都必须写在data对象中，改变数据层不能直接用this.data.xxx的方式对数据进行赋值，这样没效果，必须用this.setData({})内部传入一个键值对的对象（们），这里有个坑，只能是对象，不能是数组！不能是数组！不能是数组！数组中包对象的形式是不行的，必须要有key值，当初这个犯了这个错误调了一个小时才解决。

一个数据绑定和事件处理例子
```
//wxml
<view class="page">
  <view class="page__bd">
    <view class="weui-tab">
      <view class="weui-navbar">
        <block wx:for="{{tabs}}" wx:key="*this">
          <view id="{{index}}" class="weui-navbar__item {{activeIndex == index ? 'weui-bar__item_on' : ''}}" bindtap="tabClick">
            <view class="weui-navbar__title">{{item}}</view>
          </view>
        </block>
        <view class="weui-navbar__slider" style="left: {{sliderLeft}}px; transform: translateX({{sliderOffset}}px); -webkit-transform: translateX({{sliderOffset}}px);"></view>
      </view>
      <view class="weui-tab__panel">
        //<view class="weui-tab__content" hidden="{{activeIndex != 0}}">选项一的内容</view>
        //<view class="weui-tab__content" hidden="{{activeIndex != 1}}">选项二的内容</view>
        //<view class="weui-tab__content" hidden="{{activeIndex != 2}}">选项三的内容</view>
        <view class="weui-tab__content">
            <view wx:for="{{contents}}" wx:if="{{activeIndex==index}}">{{item}}</view>
        </view>
      </view>
    </view>
  </view>
</view>
<view class="page" wx:if="{{activeIndex==1}}">                    
  <span class="">我在activeIndex==1}}时出现</span>
</view>
<view class="page" wx:if="{{condition}}">
  <span class="">我在condition==true时出现</span>
</view>
```

```
//js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({
  data: {
    scrollTop: 100,
    tabs: ["选项一", "选项二", "选项三"],
    contents:["选项一的内容","选项二的内容","选项三的内容"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    condition: true,
  },
  onLoad: function (option) {
    console.log(option);
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    console.log(e)
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id,                     //activeIndex为鼠标点击目标的id

    });
    if (e.currentTarget.id == 2) {
      this.setData({
        condition: true
      })
    } else {
      this.setData({
        condition: false
      })
    }
  }
})
```
第一部分绑定数值，对列表进行渲染，wx:for=循环绑定
这是个选项卡，功能是点击后显示对应内容以及tab的dom样式
通过鼠标点击event事件对象，e.currentTarget属性找到index来与dom连接关系
> * sliderLeft：容器的left值，sliderOffset：滚动条的left值
> * 小程序规定规则都以属性形式展现
> * page中data，可变数据用`双括号`包裹
> * 事件名称不用`双括号`包裹
> * 小程序中的点击事件为tap，但一定要加前缀bind/catch bind事件冒泡，catch阻止冒泡
> * index为下标，数组索引
> * wx-if上面介绍过，判断显示隐藏，支持直接在里面写判断逻辑，wx-if绑定的值为true时，show，事件完成后通过改变wx-if的值来控制dom

不同于jQuery的操作模式，这个demo和angularjs有点相似，我在简书上也写过一个angularjs选项卡的demo，[Angularjs选项卡][3]

小程序有自己特定的html语义化标签，最常用的<view>和<text>，也有内部封装好的swiper、form、navigetor、canvas组件等等。view标签等同于div，text标签等同于span，虽然span在文档中没有出现，但是小程序仍然支持，text包含的文字能够长按选中。文档中对组件的介绍也很详细，并且微信也推出[weui.wxss][1]样式库。

一下午啥事没做就写了那么多，刚收到昨天做的仿掌盟app的小程序([DAIWAN][2]提供的api)审核不通过的消息，很伤心。感觉个人用户申请小程序提交了也上线不了，还是要注册个公司，太坑了。

小程序学习成本很低，对于jQuery过渡到vue/react/angularjs的同学来说是个不错的选择。
不早了该抢个粥下班了。

未完待续···


[1]: https://github.com/weui/weui-wxss
[2]: http://api.games-cube.com/video/
[3]: http://www.jianshu.com/p/fe7371a16ae4
