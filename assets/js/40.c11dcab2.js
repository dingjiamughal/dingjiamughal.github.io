(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{84:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"javascript-原型和闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-原型和闭包","aria-hidden":"true"}},[t._v("#")]),t._v(" javaScript 原型和闭包")]),a("p",[t._v("过去一直犹犹豫豫，今天下定决心终于撸完了一遍王福朋的JavaScript的原型系列\n总结几点JavaScript中函数作用域，this，闭包等概念")]),a("h2",{attrs:{id:"执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文","aria-hidden":"true"}},[t._v("#")]),t._v(" 执行上下文")]),a("p",[t._v("首先一个简单例子：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//undefined")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//10")]),t._v("\n")])]),a("p",[t._v("因此，在JavaScript中声明一个变量，在声明之前是没法获取值的。\n同样声明函数，和调用函数，也可以做个对比：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//undefined")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("f")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token comment"}},[t._v("//function f(){}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("在声明函数和函数表达式输出的又是不一样的内容。所以可以得出结论：函数每被调用一次，都会产生一个新的执行上下文环境。因为不同的调用可能就会有不同的参数。也就是说，函数调用，在全局（不论声明之前还是之后调用）都可以运行。")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f2")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("fn")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("f2")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("这个例子输出的会是什么呢，答案是10。得出第二点：函数在定义的时候（不是调用的时候），就已经确定了函数体内部自由变量的作用域。\nf1在声明的时候作用域中的a=10，那么调用的时候a=20对她不起作用，因为a=20是f2作用域下的，而f1在声明的时候就已经确定了作用域，即f1作用域是f1本身和全局。说以说，函数创建时就有一个作用域，而作用域中变量的值根据执行过程中产生而确定的。确定变量值的依据就是先找自身作用域，再一层层向上级作用域中查找，而不是函数父级。函数父级不等于上级作用域，或者理解为"),a("code",[t._v("创建")]),t._v("时的作用域而不是"),a("code",[t._v("调用")]),t._v("这也是上面例子所解释的。\n所以再看一个例子，很容易就能得出答案：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f2")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("b"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" f2\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token function"}},[t._v("f1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("x")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{attrs:{class:"token comment"}},[t._v("//30")]),t._v("\n")])]),a("p",[t._v("抛出了个新问题，当f1多次调用的时候，如何才能改变作用域呢？\n详细：http://www.cnblogs.com/wangfupeng1988/p/3989357.html")]),a("h3",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包","aria-hidden":"true"}},[t._v("#")]),t._v(" 闭包")]),a("p",[t._v("王老师对闭包总结了两种情况：\n1.函数作为返回值\n2.函数作为参数传递")]),a("h3",{attrs:{id:"函数作为返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数作为返回值","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数作为返回值")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f2")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fn"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token function"}},[t._v("f1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("fn")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("15")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("//15")]),t._v("\n")])]),a("h3",{attrs:{id:"函数作为参数被传递"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数作为参数被传递","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数作为参数被传递")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" max"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("f3")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("max"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" max"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("f")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("15")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f3"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),a("span",{attrs:{class:"token comment"}},[t._v("//15")]),t._v("\n")])]),a("p",[t._v("又一次的用到了上文的知识点，作用域，此时的f3在声明时作用域是自己和全局，因此在接下来的自运行函数调用的时候，变量max的值为10。\n这是两种形式的闭包函数，我们提到当一个函数被调用完成之后，其执行上下文环境将被销毁，其中的变量也会被同时销毁。\n但在有些情况下，函数调用完成之后，其执行上下文环境不会被销毁，这就是闭包。")]),a("blockquote",[a("p",[t._v("什么意思呢？")])]),a("p",[t._v("由于闭包特性为函数嵌套，因此在执行外部函数时，本应该销毁上下文环境，然而内部函数又创建一个独立作用域，内部函数的变量的作用域是外部函数，因此外部函数在执行完成后上下文环境不会被销毁，一旦销毁内部函数中的变量就会undefined。只有在内部函数读完后，上下文环境才会销毁。\n下面看一下闭包的应用场景，最常见的就是关于for循环+事件问题：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" box"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"div"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("box"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    box"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onclick"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("如果用顺思维的方式去取索引值，会在每次for循环中调用事件，但是事件执行的问题就在声明后需要触发才能调用，然而此时for循环已经在window onload时就执行完成，因此这么写会输出全是length-1。那么闭包就很好的解决这个问题，在创建内部函数时，上下文环境没被销毁，所以一次循环中立即自运行函数，就能将每次的i保存下来，最终返回内部函数，在内部函数执行操作，外部函数只负责接收所有的参数i。")]),a("h3",{attrs:{id:"this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this","aria-hidden":"true"}},[t._v("#")]),t._v(" this")]),a("p",[t._v("this和之前讨论的上下文环境相反，this的指向确定于函数调用而不是函数声明时，构造函数就是个很好的例子：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Foo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"dj"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("year"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("1994")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//Foo")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("Foo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//window")]),t._v("\n")])]),a("p",[t._v("this指向的是Foo这个对象，当调用完成时，函数Foo被实例化后this才有指向——new出来的对象。而普通调用时，this指向window，所以函数定义一致this指向完全看调用的方式。")]),a("blockquote",[a("p",[t._v("那么什么情况下this指向有哪些不同呢?")])]),a("h3",{attrs:{id:"对象中函数属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象中函数属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象中函数属性")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fn"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("//object{x:10,fn:undefined}")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("//10")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nobj"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("fn")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("p",[t._v("之前说了，this指向是看函数调用方式，此时，fn函数在obj内部调用，因此this指向obj对象。")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fn"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("//window")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("//undefined")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("obj"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fn"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("a")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("这种情况是调用的a函数，而a函数就是全局下的fn函数，相当于拷呗了obj的fn函数属性，在全局下调用，那么此时this指向window。")]),a("h3",{attrs:{id:"函数用call或者apply调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数用call或者apply调用","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数用call或者apply调用")]),a("p",[t._v("当一个函数被call和apply调用时，this的值就取传入的对象的值。")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("100")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("fn")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//object{x:100}")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//100")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nfn"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("call")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("既然提到call和apply那就延伸一下这两者的用处和异同点。\ncall()和apply()都是为了改变函数运行时上下文而存在的，也就是为了改变函数体内部 this 的指向。")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Fn")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nFn"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    color"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'red'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    say"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fn "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Fn")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfn"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("say")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),a("span",{attrs:{class:"token comment"}},[t._v("//red")]),t._v("\n")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Fn1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   color"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'yellow'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fn "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Fn")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfn"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("say"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("call")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Fn1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("//yellow")]),t._v("\nfn"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("say"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("apply")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Fn1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("//使用apply()方法返回")]),t._v("\n")])]),a("p",[t._v("当一个对象(Object)没有这个方法，但是其他的Fn原型里面有这个方法，我们可以借助call或apply用其它对象的方法来操作。")]),a("h3",{attrs:{id:"call和apply的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call和apply的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" call和apply的区别")]),a("p",[t._v("虽然call和apply方法都可以改变this指向，将前面的属性或方法传递给括号中的对象。但是他们可传递参数不同。call只能传递字符串，apply可以传递数组。")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("fn"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("say"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("call")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Fn1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfn"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("say"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("apply")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Fn1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("h3",{attrs:{id:"普通调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通调用","aria-hidden":"true"}},[t._v("#")]),t._v(" 普通调用")]),a("p",[t._v("在全局下的this===window，在普通调用时函数内部的this也是指向window(因为在全局调用)，如一开始的例子：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Foo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("Foo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fn"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("f")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token comment"}},[t._v("//window")]),t._v("\n      console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token comment"}},[t._v("//undefined")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("f")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nobj"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("fn")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("p",[t._v("这个例子很特殊，很容易产生误解，认为f函数调用的时候实在obj内部因此this指向obj。但结果this===window，但是仔细发现，在f调用时内部函数并没有生效，当外部fn调用时才生效，因此依旧是全局下fn调用时this指向才生效，是window。")])])}],!1,null,null,null);s.default=o.exports}}]);