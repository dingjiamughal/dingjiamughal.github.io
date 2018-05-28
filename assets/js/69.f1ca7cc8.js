(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{67:function(t,a,s){"use strict";s.r(a);var r=s(0),o=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"css3-box-shadow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css3-box-shadow","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3 box-shadow")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("box-shadow: offsetX offsetY blur spread color position;\n")])]),s("p",[t._v("它们分别为: x轴偏移(向右) y轴偏移(向下) 模糊半径 大小 颜色 位置。")]),s("h3",{attrs:{id:"offsetx：向右偏移-offsety：向下偏移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offsetx：向右偏移-offsety：向下偏移","aria-hidden":"true"}},[t._v("#")]),t._v(" offsetX：向右偏移 offsetY：向下偏移")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("box-shadow: 20px 0 10px 0 lightblue;\n")])]),s("p",[s("img",{attrs:{src:"http://louiszhai.github.io/docImages/box-shadow01.png",alt:"offset"}})]),s("h3",{attrs:{id:"blur：设置阴影的模糊半径-值越大时-阴影就越模糊。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blur：设置阴影的模糊半径-值越大时-阴影就越模糊。","aria-hidden":"true"}},[t._v("#")]),t._v(" blur：设置阴影的模糊半径, 值越大时, 阴影就越模糊。")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("box-shadow: 20px 0 50px 0 lightblue;\n")])]),s("p",[s("img",{attrs:{src:"http://louiszhai.github.io/docImages/box-shadow05.png",alt:"blur"}}),t._v("\n似乎没有办法去衡量blur值，所以看下面的例子帮助理解")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".shadow {\n  width:100px;height:100px;\n  .border(1px);\n  .fl();\n  margin:30px;\n  box-shadow: 200px 0 0px 0 lightblue;  //  左图\n  box-shadow: 200px 0 20px 0 lightblue; // 中图\n  box-shadow: 200px 0 90px 0 lightblue; // 右图\n}\n")])]),s("p",[s("img",{attrs:{src:"/img/boxshadow1.png",alt:"blur"}}),s("img",{attrs:{src:"/img/boxshadow2.png",alt:"blur"}}),s("img",{attrs:{src:"/img/boxshadow3.png",alt:"blur"}}),t._v("\n非常神奇的是，box-shadow阴影，然而当偏离过大时就可以发现，其实box-shadow是个填充色，而改变模糊程度完全由blur控制。")]),s("h3",{attrs:{id:"spread：相当于盒子的画布，有一种outerborder的感觉"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spread：相当于盒子的画布，有一种outerborder的感觉","aria-hidden":"true"}},[t._v("#")]),t._v(" spread：相当于盒子的画布，有一种outerborder的感觉")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("box-shadow: 0 0 0 10px lightblue;\n")])]),s("p",[s("img",{attrs:{src:"http://louiszhai.github.io/docImages/box-shadow19.png",alt:"spread"}}),t._v("\n它的值为（+），则扩展，值为（-），则缩小")]),s("h3",{attrs:{id:"position"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#position","aria-hidden":"true"}},[t._v("#")]),t._v(" position")]),s("p",[t._v("position为最后一个参数，最有意思的一个参数，让阴影充满了变数\n默认是外阴影，可选insert内阴影")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("box-shadow: 0 0 20px 10px lightblue inset;\n")])]),s("p",[s("img",{attrs:{src:"http://louiszhai.github.io/docImages/box-shadow11.png",alt:"position"}}),t._v("\n内阴影就相当于外阴影的映像，position还可以内外阴影组合")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("box-shadow: 0 0 20px 10px lightblue , 0 0 20px 10px lightblue inset;\n")])]),s("p",[s("img",{attrs:{src:"http://louiszhai.github.io/docImages/box-shadow12.png",alt:"position"}})]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("box-shadow: 10px 10px 0px 10px #d0268c,\n            -10px -10px 0px 10px rgba(95, 167, 44, 0.56),\n            0px 0px 0px 20px lightgrey; /*多重阴影效果*/\n")])]),s("p",[s("img",{attrs:{src:"http://louiszhai.github.io/docImages/box-shadow13.png",alt:"position"}})]),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例")]),s("p",[s("img",{attrs:{src:"http://louiszhai.github.io/docImages/box-shadow18.gif",alt:"position"}})]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<style>\n  .rose {\n    position: relative;\n    width: 80px;\n    height: 120px;\n    background: rgba(0,0,0,0.2);\n    transition: transform 1s;\n  }\n  .rose::after {\n    content: "";\n    position: absolute;\n    bottom: -30px;\n    left: 50%;\n    height: 8px;\n    width: 100%;\n    border-radius: 50%;\n    background-color: rgba(0,0,0,0.2);\n    transform: translate(-50%, 0);\n    transition: transform 1s;\n    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.2);\n  }\n</style>\n<div class="rose"></div>\n')])]),s("p",[t._v("添加动画")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".rose:hover {\n    transform: translateY(-40px);\n    transition: transform 1s;\n}\n.rose:hover::after {\n  transform: translate(-50%, 40px) scale(0.75);\n  transition: transform 1s;\n}\n")])]),s("p",[t._v("巧妙运用伪元素来完成动画或者旋转情况下的box-shadow。")]),s("p",[t._v("本文参考自louis：http://louiszhai.github.io")])])}],!1,null,null,null);a.default=o.exports}}]);