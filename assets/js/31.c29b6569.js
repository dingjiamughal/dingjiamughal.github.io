(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{105:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"vue组件库开发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue组件库开发","aria-hidden":"true"}},[t._v("#")]),t._v(" vue组件库开发")]),n("h2",{attrs:{id:"全局注册组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局注册组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局注册组件")]),n("p",[t._v("step1：新建一个.vue文件叫"),n("code",[t._v("plugin.vue")]),t._v("。通过一个js文中注册组件，就叫"),n("code",[t._v("index.js")])]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Plugin "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"./plugin.vue"')]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("component")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Plugin"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Plugin"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("step2：在入口js文件中引用")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Plugin "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"./components/plugin"')]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 引入注册整个文件夹，会自动识别index.js 为入口文件")]),t._v("\n\nVue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Plugin"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("h2",{attrs:{id:"扩展组件功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#扩展组件功能","aria-hidden":"true"}},[t._v("#")]),t._v(" 扩展组件功能")]),n("p",[t._v("e.g生成一个简单的div组件"),n("br"),t._v("\nstep1：新建"),n("code",[t._v("func-plugin.js")]),t._v("来声明扩展组件，作为继承组件，可以覆盖.vue文件中的数据")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Plugin "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"./plugin.vue"')]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("extends")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Plugin"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  computed"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("style")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        position"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"fixed"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        right"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"20px"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        bottom"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("verticalOffset"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("px`")])]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("data")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      verticalOffset"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("m1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("m2")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("step2：新建"),n("code",[t._v("Function.js")]),t._v("编写方法")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"vue"')]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Component "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"./func-plugin.js"')]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//也可以通过new Vue新建实例来创建组件")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" PluginConstructor "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("extend")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Component"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 通过seed 给组件加id，为了之后的组件销毁")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" seed "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("plugin")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("//服务端渲染没有dom操作，排除这种情况")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$isServer"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 分离参数类型")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    autoClose"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("rest\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" options\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 存放实例对象")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" instances "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 定义instance 在Vue实例下写外部扩展的配置项")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 相当于原生js插件中的Object.assgin()")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// instance 相当于组件内部的this")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" instance "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("PluginConstructor")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    propsData"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("rest "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      autoClose\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 主体逻辑-------------------------------------")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("//定义id，为了删除实例 选到指定的组件")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`PluginConstructor_")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("seed"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("`")])]),t._v("\n  instance"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" id\n  instance"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" instance"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("$mount")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//生成html节点")]),t._v("\n  document"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 对内部的data、props进行操作")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" verticalOffset "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n  instances"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("forEach")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    verticalOffset "),n("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" item"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  verticalOffset "),n("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n  instance"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("verticalOffset "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" verticalOffset\n  instances"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("push")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 监听组件内部$emit事件")]),t._v("\n  instance"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("$on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'destroyVm'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("removeInstance")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token comment"}},[t._v("// 删除instance实例")]),t._v("\n    document"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("removeChild")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 删除dom节点")]),t._v("\n    instance"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("$destroy")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 销毁实例")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" instance"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//  写一个方法，删除指定的instance")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("removeInstance")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("instance"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" index "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" instances"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("findIndex")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" item"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" instance"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  instances"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("splice")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" plugin\n")])]),n("p",[t._v("ste3：在"),n("code",[t._v("index.js")]),t._v("中引入方法函数js")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Plugin "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"./plugin.vue"')]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pluginFunc "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"./Function"')]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("component")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Plugin"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Plugin"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$pluginFunc "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" pluginFunc\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("在别的组件中就可调用Plugin组件")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("methods"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("showPlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("$pluginFunc")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      data1"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'xxx'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      data2"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'zzz'")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),n("p",[t._v("以上搞定了，对组件内部配置项的assign + 事件监听")])])}],!1,null,null,null);s.default=o.exports}}]);