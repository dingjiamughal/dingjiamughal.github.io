(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{79:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"处理css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理css","aria-hidden":"true"}},[t._v("#")]),t._v(" 处理css")]),a("p",[t._v("webpack处理css方式是通过webpack的css-loaderdui css文件进行打包，用js来对css进行加载")]),a("p",[t._v("需要的加载器\n"),a("code",[t._v("style-loader")]),t._v(" 创建link标签"),a("br"),a("code",[t._v("css-loader")]),t._v(" 能在js引入css文件")]),a("blockquote",[a("p",[t._v("cnpm install css-loader style-loader --save-dev")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("//在js中")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'xxx.css'")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("//webpack.config.js")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"path"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      app"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"./src/app.js"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    output"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"./dist"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      publicPath"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"./dist/ "')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"[name].bundle.js"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token regex"}},[t._v("/\\.css$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token comment"}},[t._v("//顺序是先让js中支持import css再放到页面中进行加载")]),t._v("\n          loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"style-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            insertInfo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"#app"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token comment"}},[t._v('// 当做style标签打包在id="app"的dom内')]),t._v("\n            singleton"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token comment"}},[t._v("//合并样式")]),t._v("\n            transform"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"./css.transform.js"')]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"css-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             modules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token comment"}},[t._v("//允许在css文件中引入别的css文件中的模块 `compire`")]),t._v("\n             localIdentName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'[path][name]_[local]_[hash:base64:5]'")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("style-loader中的transform参数的作用\n单独在根目录下创建文件，"),a("code",[t._v("css.transform.js")]),t._v("在此文件中可以进行js对css的逻辑处理，比如获取window对象，判断浏览器版本对所有的css文件进行操作")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// css.transform.js")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("exports")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" res "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("css"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token comment"}},[t._v("//能够log出所有的css文件")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth "),a("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("768")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" css"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"red"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"green"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" css"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"red"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"blue"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("h2",{attrs:{id:"配置less-sass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置less-sass","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置less/sass")]),a("blockquote",[a("p",[t._v("cnpm install less less-loader sass sass-loader")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("modules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token regex"}},[t._v("/\\.less$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"less-loader"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("h2",{attrs:{id:"提取css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提取css","aria-hidden":"true"}},[t._v("#")]),t._v(" 提取css")]),a("blockquote",[a("p",[t._v("cnpm install extract-text-webpack-plugin --save-dev")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ExtractTextWebpackPluigin "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"extract-text-webpack-plugin"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token regex"}},[t._v("/\\.less$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ExtractTextWebpackPluigin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("extract")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token comment"}},[t._v("//提取方法")]),t._v("\n        fallback"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token comment"}},[t._v("//当不需要提取css的时候页面加载css的方法")]),t._v("\n          loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"style-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            singleton"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token comment"}},[t._v("//合并样式")]),t._v("\n            transform"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"./css.transform.js"')]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("//use:如果要提取css需要用css-loader和less-loader加载到页面")]),t._v("\n          loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"css-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             minimize"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             modules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             localIdentName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'[path][name]_[local]_[hash:base64:5]'")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"less-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ExtractTextWebpackPluigin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"[name].min.css"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      allChunks"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),a("h2",{attrs:{id:"postcss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postcss","aria-hidden":"true"}},[t._v("#")]),t._v(" PostCSS")]),a("blockquote",[a("p",[t._v("cnpm install postcss postcss-loader autoprefixer cssnano postcss-next --save-dev")])]),a("p",[a("code",[t._v("Autoprefixer")]),t._v(" 加前缀"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  div "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    display"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("flex"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  div "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    display"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("webkit"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("box"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    display"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("webkit"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("flex"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    display"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("ms"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("flexbox"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    display"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("flex"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[a("code",[t._v("css-nano")]),t._v(" 优化和压缩css,css-loader中也使用css-nano进行压缩")]),a("p",[a("code",[t._v("postcss-next")]),t._v(" 可以使用未来的css新语法")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token regex"}},[t._v("/\\.less$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ExtractTextWebpackPluigin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("extract")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token comment"}},[t._v("//提取方法")]),t._v("\n      fallback"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"style-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          singleton"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          transform"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"./css.transform.js"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"css-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           minimize"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n           modules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n           localIdentName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'[path][name]_[local]_[hash:base64:5]'")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"less-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"postcss-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          ident"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"postcss"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token comment"}},[t._v("//声明接下来使用的插件是给postcss使用的")]),t._v("\n          plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"autoprefixer"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// :root {--mainColor:#fff;} div {color:var(--mainColor)}")]),t._v("\n            "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"postcss-cssnext"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("设置浏览器对postcss兼容性")]),a("ul",[a("li",[t._v("方法1：在"),a("code",[t._v("package.json")]),t._v("中配置")]),a("li",[t._v("方法2：新建"),a("code",[t._v(".browserslistrc")]),t._v("文件")])]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v('"browserslist"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('">= 1%"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"last 2 versions"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),a("h2",{attrs:{id:"tree-shaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking","aria-hidden":"true"}},[t._v("#")]),t._v(" Tree Shaking")]),a("p",[t._v("剔除无用的代码（项目中没有用到过的代码），针对css和js文件")]),a("h3",{attrs:{id:"js中的tree-shaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js中的tree-shaking","aria-hidden":"true"}},[t._v("#")]),t._v(" js中的tree shaking")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// task:引入lodash，并只使用`chunk`方法")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// app.js")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v('// import {chunk} from "lodash"')]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Webpack "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"webpack"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Webpack"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optimize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UglifyJsPlguin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),a("h3",{attrs:{id:"css中的tree-shaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css中的tree-shaking","aria-hidden":"true"}},[t._v("#")]),t._v(" css中的tree shaking")]),a("p",[t._v("借助"),a("code",[t._v("purifycss-webpack")])]),a("blockquote",[a("p",[t._v("cnpm install purifycss-webpack glob-all --save-dev")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" PurifyCss "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"purifycss-webpack"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"path"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" glob "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"glob-all"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nplugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("PurifyCss")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//  一定写在UglifyJsPlguin之前才生效")]),t._v("\n    paths"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("glob"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sync")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("join")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"./*.html"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("join")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"./src/*.js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("webpack"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optimize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UglifyJsPlguin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])}],!1,null,null,null);s.default=o.exports}}]);