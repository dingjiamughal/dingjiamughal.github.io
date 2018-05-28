(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{115:function(e,n,s){"use strict";s.r(n);var a=s(0),t=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"开发环境和生产环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发环境和生产环境","aria-hidden":"true"}},[e._v("#")]),e._v(" 开发环境和生产环境")]),s("h2",{attrs:{id:"两种环境都需要的情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两种环境都需要的情况","aria-hidden":"true"}},[e._v("#")]),e._v(" 两种环境都需要的情况")]),s("ul",[s("li",[e._v("入口")]),s("li",[e._v("代码处理 xxx-loader")]),s("li",[e._v("解析配置")])]),s("h2",{attrs:{id:"两种环境分开的情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两种环境分开的情况","aria-hidden":"true"}},[e._v("#")]),e._v(" 两种环境分开的情况")]),s("p",[s("code",[e._v("开发环境")]),e._v("需要的功能：")]),s("ul",[s("li",[e._v("模块热更新")]),s("li",[e._v("sourceMap")]),s("li",[e._v("proxy")]),s("li",[e._v("eslint")])]),s("p",[s("code",[e._v("生产环境")]),e._v("需要的功能：")]),s("ul",[s("li",[e._v("提取公共代码")]),s("li",[e._v("压缩混淆")]),s("li",[e._v("文件压缩、图片base64编码")]),s("li",[e._v("tree shaking 去除无用代码")])]),s("h2",{attrs:{id:"区分两者的配置webpack-merge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区分两者的配置webpack-merge","aria-hidden":"true"}},[e._v("#")]),e._v(" 区分两者的配置webpack-merge")]),s("p",[s("code",[e._v("webpack-merge")]),e._v(" 帮助拼接webpack公共配置+各自的配置\n"),s("code",[e._v("webpack.dev.conf.js")]),e._v(" 开发环境"),s("br"),s("code",[e._v("webpack.prod.conf.js")]),e._v(" 生产环境"),s("br"),s("code",[e._v("webpack.common.conf.js")]),e._v(" 公共"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/*目录结构*/\n├─build # 编译后生成的所有代码、资源（图片、字体等，虽然只是简单的从源目录迁移过来）\n├─node_modules # 利用npm管理的所有包及其依赖\n├─vendor # 所有不能用npm管理的第三方库\n├─.babelrc # babel的配置文件\n├─.eslintrc # ESLint的配置文件\n├─index.html # 仅作为重定向使用\n├─package.json # npm的配置文件\n├─webpack.config.js # webpack的配置文件\n├─src # 当前项目的源码\n    ├─pages # 各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等\n    │  ├─alert # 业务模块\n    │  │  └─index # 具体页面\n    │  ├─index # 业务模块\n    │  │  ├─index # 具体页面\n    │  │  └─login # 具体页面\n    │  │      └─templates # 如果一个页面的HTML比较复杂，可以分成多块再拼在一起\n    │  └─user # 业务模块\n    │      ├─edit-password # 具体页面\n    │      └─modify-info # 具体页面\n    └─public-resource # 各个页面使用到的公共资源\n        ├─components # 组件，可以是纯HTML，也可以包含js/css/image等，看自己需要\n        │  ├─footer # 页尾\n        │  ├─header # 页头\n        │  ├─side-menu # 侧边栏\n        │  └─top-nav # 顶部菜单\n        ├─config # 各种配置文件\n        ├─iconfont # iconfont的字体文件\n        ├─imgs # 公用的图片资源\n        ├─layout # UI布局，组织各个组件拼起来，因应需要可以有不同的布局套路\n        │  ├─layout # 具体的布局套路\n        │  └─layout-without-nav # 具体的布局套路\n        ├─less # less文件，用sass的也可以，又或者是纯css\n        │  ├─base-dir\n        │  ├─components-dir # 如果组件本身不需要js的，那么要加载组件的css比较困难，我建议可以直接用less来加载\n        │  └─base.less # 组织所有的less文件\n        ├─libs # 与业务逻辑无关的库都可以放到这里\n        └─logic # 业务逻辑\n")])])])}],!1,null,null,null);n.default=t.exports}}]);