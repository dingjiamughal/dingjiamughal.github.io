---
title: 生命周期、参数传递和模板template
comments: true
date: 2017-05-02 15:13:08
categories: 微信小程序
tags:
  - 微信小程序
---

### 生命周期
`Page()` 函数注册一个页面时。接受一个object参数，其指定页面的初始数据、生命周期函数、事件处理函数等。
共5种生命周期函数：`onLoad` `onReady` `onShow` `onHide` `onUnload`
onLoad和onShow区别在于onLoad只在页面刷新时执行一次，onShow在页面隐藏再出现时还会执行。反之，onHide和onUnload也一样。
<!-- more -->
### 模板template
模板template的作用在于，一个x项目有且可能有重复的html代码块但是数据展示不同，用template很好的对html页面模块化，多用于wx:for列表渲染:
将数据存放在data.js中，index.js和template.js中会有用到data数据并且引入data.js文件：require("../../data/data.js")
```
/*data.js*/
var list=[{
        id:0,
        name:"one",
        age:11,
        detail:"detail no1"
    },{
        id:1,
        name:"two",
        age:12,
        detail:"detail no2"
    },{
        id:2,
        name:"three",
        age:13,
        detail:"detail no3"
    },{
        id:3,
        name:"four",
        age:14,
        detail:"detail no4"
    },{
        id:4,
        name:"five",
        age:15,
        detail:"detail no5"
    }];
module.exports={
    datalist:list
}
```
在别的页面要调用数据，用module.exports={}暴露方法。

```
/*index.wxml*/
<import src="template/template.wxml" />
<block wx:for="{{listdata}}">
  <view bindtap="bindViewTap" data-id="{{item.id}}">
    <template is="msgitem" data="{{...item}}" />
  </view>
</block>
```

```
/*template.wxml*/
<template name="msgitem">
  <view class="classname">
    <text>index:{{id}},</text>
    <text>name:{{name}},</text>
    <text>age:{{age}}</text>
  </view>
</template>
```
index.wxml中搭建外部框架，中间重复信息放在template中。index.wxml要引入template.wxml,<import src="template/template.wxml" />
template.wxml中存放重复的循环列表代码段`用template包裹`,is属性绑定template名称，data属性控制数据，在template中直接显示字段名就可以，不用多余的如：item.name。
取数据的方法：在data.js中module.exports={datalist:list}，获取数据：
>var datalist=require("../../data/data.js");
var list=datalist.datalist
this.setData({listdata:list})

### 参数传递
在完成缩略图（缩略页面）后，接下来需要点击进入详情页，小程序在路由中获取id的方法通过路由API：
>wx.navigateTo({
  url: 'detail/detail?id='+id
})

```
/*index.js*/
var app = getApp();
var datalist=require("../../data/data.js")
Page({
  data: {},
  onLoad: function () {
      var list=datalist.datalist
      this.setData({
        listdata:list
      })
  },
  bindViewTap:function(event){
      var id=event.currentTarget.dataset.id;
      wx.navigateTo({
        url: 'detail/detail?id='+id
      })
  }
})
```
这里的id为属性data-id="{{item.id}}"，抓取到id之后，也就等于将对应id的数据拿到，并显示在新页面（详情页detail.wxml）中。
这里有个疑问，虽然拿到id但是又如何在detail.wxml识别到id呢，小程序在页面onLoad时，接受一个参数option，option是在路由时传递的参数，这样就能够在detail.wxml中顺利取到id。
```
/*pages/detail/detail.wxml*/
<view>
    {{listdata.detail}}
</view>
```

```
/*pages/detail/detail.js*/
var listdata=require("../../../data/data.js");
Page({
  data:{},
  onLoad:function(options){
    var id=options.id;
    var list=listdata.datalist[id]
    this.setData({
      listdata:list
    })
  }
})
```

### 总结
小程序中缩略图跳转详情页的场景非常普遍，template、路由参数传递和生命周期组成一条供应链。
需要注意的是，每次生成模板时，需要在index页面引入模板页:
> import src="template/template.wxml" />

脚本之间的暴露应用格式：
>module.exports={
    datalist:list
}
var listdata=require("../../../data/data.js");
var data=listdata.listdata

CSS:
>@import("weui.wxss")
