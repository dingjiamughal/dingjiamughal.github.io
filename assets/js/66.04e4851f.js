(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{65:function(t,a,n){"use strict";n.r(a);var s=n(0),e=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"css居中解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css居中解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS居中解决方案")]),n("h3",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),n("p",[t._v("44年前我们把人送上月球，但在CSS中我们仍然不能很好实现垂直居中——James Anderson。\n不同场景下的垂直居中折磨了我那么久，今天决定系统的整理一下CSS水平居中和垂直居中，参考文章 "),n("a",{attrs:{href:"http://louiszhai.github.io/2016/03/12/css-center/",target:"_blank",rel:"noopener noreferrer"}},[t._v("路易斯的博客")]),t._v(" 和 "),n("a",{attrs:{href:"http://www.w3cplus.com/css3/css-secrets/vertical-centering.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("w3cplus大漠")])]),n("h3",{attrs:{id:"一、元素固定宽高"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、元素固定宽高","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、元素固定宽高")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<main>\n    <h1>Am I centered yet?</h1>\n    <p>Center me, please!</p>\n</main>\n\nmain {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -3em; /* 6/2 = 3 */\n  margin-left: -9em; /* 18/2 = 9 */\n  width: 18em;\n  height: 6em;\n}\n")])]),n("h3",{attrs:{id:"二、大小不固定，多行文字的垂直居中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、大小不固定，多行文字的垂直居中","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、大小不固定，多行文字的垂直居中")]),n("h4",{attrs:{id:"_1-单行文字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-单行文字","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.单行文字")]),n("p",[t._v("将line-height值与外部标签盒子的高度值设置成一致")]),n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token property"}},[t._v("height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3em"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token property"}},[t._v("line-height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3em"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("h3",{attrs:{id:"_2-多行文字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-多行文字","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.多行文字")]),n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token selector"}},[t._v("div")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("display")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("table-cell"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("550px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1.14em"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("vertical-align")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("middle"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v("span")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("display")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("inline-block"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("font-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0.1em"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("vertical-align")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("middle"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("blockquote",[n("p",[t._v("1.外部div不能使用浮动；\n2.外部div高度和文字大小比例1.14为宜；\n3.内部标签的vertical-align:middle可以省略，但是外部div高度和文字大小比例要修改，高度比字体1.5左右的样子")])]),n("h3",{attrs:{id:"三、大小不固定，图片的水平垂直居中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、大小不固定，图片的水平垂直居中","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、大小不固定，图片的水平垂直居中")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("div {\n  display:table-cell;\n  width:144px;\n  height:144px;\n  font-size:118px;\n  text-align:center;\n  vertical-align:middle;\n}\nimg{\n  max-height:100%;\n  max-width:100%;\n  vertical-align:middle;\n}\n")])]),n("h3",{attrs:{id:"四、大小固定，图片的水平垂直居中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、大小固定，图片的水平垂直居中","aria-hidden":"true"}},[t._v("#")]),t._v(" 四、大小固定，图片的水平垂直居中")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("div {\n  width:400px;\n  height:400px;\n  display:flex;\n  align-items:center;\n  justify-content: center;\n}\nimg{\n  max-height:100%;\n  max-width:100%;\n}\n")])])])}],!1,null,null,null);a.default=e.exports}}]);