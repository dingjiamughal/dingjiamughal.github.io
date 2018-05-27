(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{90:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"懒加载与节流函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#懒加载与节流函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 懒加载与节流函数")]),a("p",[t._v("js性能优化之懒加载，应用场景为页面图片过多，为了减少对后台的请求，只在页面中出现图片的情况对图片进行加载，而未出现的图片不加载。\n所谓加载就是赋予正确的图片src属性。")]),a("p",[t._v("实现懒加载的核心原理就是，图片位置出现在可视区域，给图片加上正确的src\n出现图片的场景有两种：页面加载、滚轮往下滚")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("load")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" seeHeight"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" top"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Imgs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Imgs"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("seeHeight"),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("top"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Imgs"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getAttribute")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"src"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("==")]),a("span",{attrs:{class:"token string"}},[t._v('"images/loading.gif"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Imgs"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Imgs"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getAttribute")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"data-src"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      n"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("i"),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onscroll"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("load"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("p",[t._v("在滚轮往下滚和页面刚刷新的时候运行load函数，load函数中判断了每一张图片位置，再n++表示，按顺序加载完成的图片就不进行再一次检查。\n但是并没有到这结束，虽然达到了懒加载效果，如果用户操作失误，当滚轮过快时，页面图片就会毫无停留的加载，因此需要定义加载状态，即延迟n秒加载，当滚轮滚动时，限制加载的时间间隔，于是用到节流函数概念。")]),a("h3",{attrs:{id:"节流函数-throttle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节流函数-throttle","aria-hidden":"true"}},[t._v("#")]),t._v(" 节流函数 throttle")]),a("p",[t._v("节流函数作用是自定义控制函数调用的频率，这很符合懒加载的情景，我们希望load函数在滚轮滚动的时候有频率的被调用，而不是没滚1px就会被调用一次，所以需要用闭包来定义函数，并计算内外函数调用时间差。")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("throttle")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("load"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("delay"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("time"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" startTime"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" timer"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" curTime"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("clearInterval")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curTime"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("startTime"),a("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v("time"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("load")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      startTime"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("curTime"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      timer"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("load")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("delay"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"scroll"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token function"}},[t._v("throttle")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("load"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("500")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("500")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("p",[t._v("函数中传入三个参数，事件函数，延时时间和时间差。最重要的是最后一个参数时间差，我们希望每次onscroll时，触发节流函数，判断在达到time毫秒后再调用load函数，这样会剩下非常多的计算dom的内存。\n最后为什么需要延时器呢？\n假如我们滚动的很慢，依旧保持着500ms的速率执行load函数，当我们在最后时刻比如在499ms的节点下一张图出现在可视区域，那么感觉一瞬间执行了load函数一样，导致加载不整齐，用户体验会很差。所以当不到500ms，比如在400ms需要立即触发load函数，就需要添加一个延时器，延迟500ms运行load函数，能达到加载的整齐化。")])])}],!1,null,null,null);s.default=o.exports}}]);