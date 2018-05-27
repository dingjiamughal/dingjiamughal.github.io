(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{66:function(e,r,a){"use strict";a.r(r);var t=a(0),n=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"ecamscript5中新增数组方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ecamscript5中新增数组方法","aria-hidden":"true"}},[e._v("#")]),e._v(" ECAMScript5中新增数组方法")]),a("p",[e._v("ES5中，Array新增API之forEach、filter、map、reduce、reduceRight、every、indexOf、lastIndexOf")]),a("h3",{attrs:{id:"foreach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#foreach","aria-hidden":"true"}},[e._v("#")]),e._v(" forEach")]),a("p",[e._v("forEach(callback[,thisArg])")]),a("p",[e._v("示例：\nArray.forEach(function(item, index, array){\n回调函数内容\n}, args);\nitem指遍历数组的当前元素，index指当前元素的索引，array指数组本身，默认情况下this指向Window对象。当存在第二个参数args时，this指向args。")]),a("h3",{attrs:{id:"filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filter","aria-hidden":"true"}},[e._v("#")]),e._v(" filter")]),a("p",[e._v("对原数组进行过滤（筛选）\nfilter(callback[,thisArg])")]),a("p",[e._v("示例：\nArray.filter(function(item, index, array){\n回调函数内容\n}, args);\nfilter，返回过滤完成的数组，不会改变原数组\n[1,2,3,4,5,6].filter(function(v){ return v<5 }); //[1,2,3,4]  a=[1,2,3,4,5,6]")]),a("h3",{attrs:{id:"map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map","aria-hidden":"true"}},[e._v("#")]),e._v(" map")]),a("p",[e._v("对原数组进行更改（变形）\nmap(callback[,thisArg])")]),a("p",[e._v("//简单示例\nArray.map(function(item, index, array){\n回调函数内容\n}, args);\n[1,2,3,4,5,6].map(function(v){ return v<5 }) //true,true,true,true,false,false\n[1,2,3,4,5,6].map(function(v){ return v*v }) //1,4,9,16,25,36")]),a("h3",{attrs:{id:"reduce和reduceright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reduce和reduceright","aria-hidden":"true"}},[e._v("#")]),e._v(" reduce和reduceRight")]),a("p",[e._v("数组组合生成单个词\nreduce(callback[,initialValue])")]),a("p",[e._v("示例：\narr.reduce(function (previousValue, item, index, Array) {\nreturn previousValue + item;    //表示前val+后val\n});\nvar a = [1, 2, 3, 4, 5, 6];\nvar b=a.reduce(function(x,y) { return x+y }); //21")]),a("p",[e._v("reduceRight(callback[,initialValue])\n示例：\narr.reduceRight(function (previousValue, item, index, Array) {\nreturn previousValue + item;"),a("br"),e._v("\n});\n和reduce一样，计算机制从右边开始")]),a("h3",{attrs:{id:"some和every"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some和every","aria-hidden":"true"}},[e._v("#")]),e._v(" some和every")]),a("p",[e._v("对数组的逻辑判断，返回boolen值\nevery(callback, thisArg);")]),a("p",[e._v("示例：\narr.every(function(item, index, array){ return item > xx });\n[1,2,3,4,5,6].some(function(v){ return v<4 }) //true 存在value<4\n[1,2,3,4,5,6].every(function(v){ return v<4 }) //false 不是every value<4")]),a("h3",{attrs:{id:"indexof和lastindexof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexof和lastindexof","aria-hidden":"true"}},[e._v("#")]),e._v(" indexOf和lastIndexOf")]),a("p",[e._v("arr.indexOf(searchElement, fromIndex);")]),a("p",[e._v('示例：\nArray.indexOf("sth");           //1（数组的第二个元素）\n[1,2,3].indexOf(4);             //-1（未找到，注意，-1不是false，隐式转换后他的值为true）\n[1,2,3].indexOf(1);             //0（返回1出现的下标）\n[1,2,3,1,2,3].lastIndexOf(2)    //1（从右边起第一个出现2的下标）')])])}],!1,null,null,null);r.default=n.exports}}]);