(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{127:function(e,n,l){"use strict";l.r(n);var a=l(0),c=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("div",{staticClass:"content"},[l("h1",{attrs:{id:"优化打包速度"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#优化打包速度","aria-hidden":"true"}},[e._v("#")]),e._v(" 优化打包速度")]),l("blockquote",[l("p",[e._v("影响打包速度的原因")])]),l("ul",[l("li",[e._v("文件多")]),l("li",[e._v("文件中的依赖多")]),l("li",[e._v("页面多（业务逻辑多 多chunk）")])]),l("blockquote",[l("p",[e._v("解决方法")])]),l("p",[e._v("一、分开vendor和app\nvendor代码不会去修改避免打包\n"),l("code",[e._v("DllPlugin")]),l("code",[e._v("DllReferencePlguin")])]),l("p",[e._v("二、UglifyJsPlugin异步打包\n"),l("code",[e._v("{parallel | cache}")])]),l("pre",{pre:!0,attrs:{class:"language-js"}},[l("code",[e._v("\n")])]),l("p",[e._v("三、HappyPack.ThreadPool\n使loader并行处理")]),l("p",[e._v("四、减少babel-loader编译时间\n开启缓存 options.cacheDirectory\n编译范围的选择 "),l("code",[e._v("include")]),l("code",[e._v("exclude")])]),l("p",[e._v("五、其他\n减少resolve\ndevtool中去除sourceMap\ncache-loader\n升级node和webpack")])])}],!1,null,null,null);n.default=c.exports}}]);