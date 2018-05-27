(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{117:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"webpack-optimize-commonschunkplugin-提取公共代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack-optimize-commonschunkplugin-提取公共代码","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack.optimize.CommonsChunkPlugin 提取公共代码")]),n("p",[t._v("CommonsChunkPlugin打包公共代码让浏览器识别到缓存文件，在多页应用中提高第二次之后的读写速度。")]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("webpack"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optimize"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CommonsChunkPlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("options配置项\n"),n("code",[t._v("name")]),t._v(" [name]数组类型"),n("br"),n("code",[t._v("filename")]),n("br"),n("code",[t._v("minChunks")]),t._v(" 自动识别：模块最少出现次数，自动作为打包文件"),n("br"),n("code",[t._v("chunks")]),t._v(" 提取代码的范围"),n("br"),n("code",[t._v("children")]),n("code",[t._v("deepChildren")]),n("code",[t._v("async")])]),n("p",[t._v("业务场景 "),n("code",[t._v("spa")]),n("code",[t._v("spa+第三方依赖")]),n("code",[t._v("多页应用+第三方依赖+webpack生成代码")])]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// CommonsChunkPlugin基本配置")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// pageA.js 中引用了subA.js和sub.js和lodash，subA和subB中引用module.js")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// task：进行代码分割的基础配置")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" webpack "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"webpack"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"path"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"pageA"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"./src/pageA"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"pageB"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"./src/pageB"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"vendor"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v('"lodash"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("path"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_dirname"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token string"}},[t._v('"./dist"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    publicPath"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"/"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//根目录配合webpack-dev-server能解决各种路径问题")]),t._v("\n    filename"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"js/[name].bundle.js"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    chunkFilename"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"[name].chunk.js"')]),n("span",{attrs:{class:"token comment"}},[t._v("//动态打包文件（非入口的js文件）")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("webpack"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optimize"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CommonsChunkPlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("\"['vendor','manifest']\"")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      minChunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("//task提取公共代码module.js并异步加载用async")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("webpack"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optimize"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CommonsChunkPlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("async")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"async-common"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      children："),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token comment"}},[t._v("//向下查找")]),t._v("\n      minChunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("配置了"),n("code",[t._v("minChunk")]),t._v("必须是多entry，CommonsChunkPlugin只能识别多entry的情况")]),n("h2",{attrs:{id:"代码分割和懒加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码分割和懒加载","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码分割和懒加载")]),n("p",[t._v("根据不同需求对js公共文件进行打包和按需加载")]),n("blockquote",[n("p",[t._v("代码分割的场景 分离 业务代码、第三方依赖 分离 业务代码、公共代码、第三方依赖 分离 首次加载、访问后加载（多页应用）")])]),n("p",[n("code",[t._v("require.ensure")]),n("code",[t._v("require.include")])]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" webpack "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"webpack"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"path"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"pageA"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"./src/pageA"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("path"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_dirname"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token string"}},[t._v('"./dist"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    publicPath"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"./dist/"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token comment"}},[t._v("//代码发布路径，最终使发布到服务器的地址")]),t._v("\n    filename"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"[name].bundle.js"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    chunkFilename"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"[name].chunk.js"')]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// plugins:[")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("//   new webpack.optimize.CommonsChunkPlugin({")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v('//     name:"common",')]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("//     minChunks:2")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("//   })")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// ]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// pageA.js 中引用了subA.js和sub.js和lodash，subA和subB中引用module.js")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 任务：将第三方lodash进行代码分割")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//pageA.js中")]),t._v("\nrequire"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("ensure")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v('"lodash"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token comment"}},[t._v("//require加载到页面")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" _"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"lodash"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token comment"}},[t._v("//执行lodash")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token string"}},[t._v('"vendor"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 分离细分")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//task：将subA.js,subB.js进行按需分离")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  require"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("ensure")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v('"./subA"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" subA "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"subA"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token string"}},[t._v('"subA"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token comment"}},[t._v("/* webpackChunkName:'subpageB' */")]),n("span",{attrs:{class:"token string"}},[t._v('"./subB"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subB "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//  import方法，直接执行，webpack3新功能")]),t._v("\n    console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subB"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n此时，发现在subA和subB中的module"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js没有被单独打包成一个文件。这时候就需要在pageA"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js中\nrequire"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("include")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"./module.js"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodule文件在subA和subB"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js中剔除，被单独提取到pageA"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n")])])])}],!1,null,null,null);s.default=o.exports}}]);