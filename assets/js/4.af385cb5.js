(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{128:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"webpack打包图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包图片","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack打包图片")]),a("h2",{attrs:{id:"webapck打包css中的图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webapck打包css中的图片","aria-hidden":"true"}},[t._v("#")]),t._v(" webapck打包css中的图片")]),a("p",[t._v("优化：自动合成雪碧图、压缩、base64\n处理图片的4个加载器："),a("br"),a("code",[t._v("file-loader")]),t._v(" 帮助css处理图片"),a("br"),a("code",[t._v("url-loader")]),t._v(" base64编码"),a("br"),a("code",[t._v("img-loader")]),t._v(" 压缩图片"),a("br"),a("code",[t._v("postcss-sprites")]),t._v(" 合成雪碧图")]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("下载依赖")]),a("p",[t._v("cnpm install file-loader url-loader img-loader postcss-sprites --save-dev")])]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx.png"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token regex"}},[t._v("/\\.(jpg|jpeg|png|gif)$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"file-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        publicPath"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        outputPath"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"dist/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        useRelativePath"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"url-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("//  打包图片可以直接使用url-loader")]),t._v("\n      options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"[name][hash:5].min.[ext]"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token comment"}},[t._v("//重命名图片文件[文件名].min.[后缀]")]),t._v("\n        limit"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("50000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token comment"}},[t._v("//5kb")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v('// publicPath:"",')]),t._v("\n        outputPath"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"dist/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// useRelativePath:true")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"img-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        pngquant"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("//调整图片精度")]),t._v("\n          quality"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("80")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"postcss-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token comment"}},[t._v("//利用postcss配置生成雪碧图")]),t._v("\n      options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ident"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"postcss"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"postcss-sprites"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            spritePath"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"dist/assets/img/sprites"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            retina"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("h2",{attrs:{id:"webpack打包字体文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包字体文件","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack打包字体文件")]),a("p",[a("code",[t._v("file-loader")]),a("code",[t._v("url-loader")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token regex"}},[t._v("/\\.(eot|woff|woff2|ttf|svg)$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    use "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"url-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"[name]-[hash:5].[ext]"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        limit"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("5000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        publicPath"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        outputPath"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"dist/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        useRelativePath"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=o.exports}}]);