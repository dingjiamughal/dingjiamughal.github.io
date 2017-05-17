---
title: Vue学习（1）基础
date: 2017-05-16 18:48:38
tags: Vue
categories: Vue
---

date: 2017-05-16 18:48
vue2.0文档随笔总结
<!-- more -->
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>VIEW</title>
  <link href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
</head>

<body class="container">
  <span id="app" class="aaa">{{message}}</span>

  <div id="app-2">
    <!-- v-bind 简写为 : v-on 简写为 @  -->
    <span v-bind:title="message" v-on:click="spantap">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
    <span v-if="showSpan">showSpanshowSpanshowSpan</span>
  </div>

  <div id="app-4">
    <ul>
      <li v-for="(todo,index) in todos">{{index}} - {{ todo.text }}</li>
    </ul>
    <ul>
      <li v-for="(val,key,index) in obj">{{val}} - {{key}} - {{index}}</li>
    </ul>
  </div>

  <div id="app5">
    <p>{{ message|capitalize }}</p>
    <button v-on:click="reverseMessage">逆转消息</button>
    <input type="text" name="" id="" v-model="inputmsg">{{inputmsg}}
    <button v-bind:disabled="someDynamicCondition">Button</button> {{ ok ? 'YES' : 'NO' }}
    <span v-bind:id="'list_'+id">{{id}}</span>
    <input type="text" v-model="fullname">{{fullname}}
    <input type="text" v-model="question">{{answer}} //v-bind:class两种，1.{表达式} 2."全部绑定在一个对象"
    <!-- <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"></div> -->
    <div class="static" v-bind:class="classObj"></div>
    <div v-bind:style="{styleObj}"></div>
  </div>

  <div id="todo-list">
    <input v-model="newTodoText" v-on:keyup.enter="addNewTodo" placeholder="Add a todo">
    <ul>
      //模板绑定数据用v-bind:title="todo" ---> title就是模板数据了
      <li is="todo-item" v-for="(todo, index) in todos" v-bind:title="todo" v-on:remove="todos.splice(index, 1)"></li>
    </ul>
  </div>

  <div id="template">
    <my-component>hello</my-component>
    <div is="my-component">hello</div>
  </div>

  <div id="event">
    <button @click="count">click</button>{{counter}} keydown:
    <input type="text" @keydown="keycode">
    <!-- Alt + C -->
    keyup.alt.67:<input type="text" @keyup.alt.67="clear">
    <select id="" @change="changeselect" v-model="selectval">
        <option value="123">111</option>
        <option value="212">222</option>
        <option>333</option>
        <option>444</option>
        <option>555</option>
      </select> selected:{{ selected }} selectval:{{selectval}} 单选：
    <input type="radio" v-model="pick" v-bind:value="a">
  </div>

  <div id="counter-event-example">
    <p>{{ total }}</p>
    <button-counter v-on:increment="incrementTotal"></button-counter>
    <button-counter v-on:increment="incrementTotal"></button-counter>
  </div>



  <div id="slot">
    <h1>我是父组件的标题</h1>
    <my-component>
      <p>这是一些初始内容</p>
      <p>这是更多的初始内容</p>
    </my-component>
  </div>
  <div id="layoutslot">
    <app-layout>
      <h1 slot="header">header~~~</h1>
      <p>........。</p>
      <p>。。。。。。</p>
      <p slot="footer">footer~~~</p>
    </app-layout>
  </div>
  <script type="text/javascript">
    var app = new Vue({
      el: 'span',
      data: {
        message: 'Hello World!'
      }
    })
    var app2 = new Vue({
      el: '#app-2',
      data: {
        message: '页面加载于 ' + new Date(),
        showSpan: true
      },
      methods: {
        spantap: function() {
          this.showSpan = !this.showSpan
        }
      }
    })
    var app4 = new Vue({
      el: "#app-4",
      data: {
        todos: [{
            text: '学习 JavaScript'
          },
          {
            text: '学习 Vue'
          },
          {
            text: '整个牛项目'
          }
        ],
        obj: {
          name: 'dingjia',
          sex: 'nan',
          age: '22'
        }
      }
    })
    var app5 = new Vue({
      el: '#app5',
      data: {
        message: 'hello world Hello Vue.js!',
        inputmsg: "inputmsg",
        someDynamicCondition: true,
        ok: false,
        id: 5,
        firstName: 'Foo',
        lastName: 'Bar',
        question: '',
        answer: 'I cannot give you an answer until you ask a question!',
        isActive: true,
        error: null,
        styleObj: {
          color: "red",
          display: "block"
        }
      },
      methods: {
        reverseMessage: function() {
          this.message = this.message.split('').reverse().join('');
          this.someDynamicCondition = !this.someDynamicCondition;
          this.ok = !this.ok;
        }
      },
      filters: {
        capitalize: function(value) {
          if (!value) return ''
          value = value.toString()
          return value.charAt(0).toUpperCase() + value.slice(1)
        }
      },
      //当一个view或者model层值变化
      //同时controller层改变view
      computed: {
        fullname: {
          get: function() {
            return this.firstName + this.lastName
          },
          set: function(newValue) {
            var names = newValue.split(' ')
            this.firstName = names[0]
            this.lastName = names[names.length - 1]
          }
        },
        //等价于 classObj={active:true,'text-danger':false}
        classObj: function() {
          return {
            active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal',
          }
        }
      },
      //当question改变时，运行一个函数
      watch: {
        question: function(newQuestion) {
          this.answer = 'Waiting for you to stop typing...'

        }
      }
    })
    //等价于 var input=app5.inputmsg;
    var input = app5.$data.inputmsg;
    //获取数据除了data，都要用$
    var element = app5.$el;
    console.log(input)
    //监听app5中的inputmsg/$data.inputmsg
    app5.$watch("inputmsg", function(newVal, oldVal) {
      console.log("newVal:" + newVal, "oldVal:" + oldVal)
    })

    Vue.component('todo-item', {
      //html用title为数据，要props
      template: '<li>{{ title }}<button v-on:click="$emit(\'remove\')">X</button></li>',
      props: ['title']
    })
    new Vue({
      el: '#todo-list',
      data: {
        newTodoText: '',
        todos: [
          'Do the dishes',
          'Take out the trash',
          'Mow the lawn'
        ]
      },
      methods: {
        addNewTodo: function() {
          this.todos.push(this.newTodoText)
          this.newTodoText = ''
        }
      }
    })
    var event = new Vue({
      el: "#event",
      data: {
        counter: 0,
        selected: null,
        selectval: null,
        pick: '',
        a: ''
      },
      methods: {
        count: function(event) {
          console.log(event)
          this.counter++
            event.target.offsetWidth += 10;
        },
        keycode: function(event) {
          event.target.value = event.keyCode
        },
        changeselect: function(event) {
          this.selected = event.target[event.target.selectedIndex].innerHTML
        }
      }
    })

    var Child = {
      //子组件中用props，获取父组件的数据
      template: '<div>{{lowercase}}this is a Child component~~{{myMessage}}</div>',
      props: ["myMessage"],
      // data:function(){
      //   return {
      //     normalizedSize:null
      //   }
      // },
      computed: {
        lowercase: function() {
          return this.myMessage.trim().toLowerCase()
        }
      }
    }

    var parent = {
      template: '<p @click="count"><input v-model="componentMsg"/><child-com v-bind:my-message="componentMsg"></child-com>this is a parent component,counter:{{counter}}</p>',
      components: {
        'child-com': Child
      },
      data: function() {
        return {
          counter: 2,
          componentMsg: "lalala"
        }
      },
      methods: {
        count: function() {
          this.counter++
        }
      }
    }

    var template = new Vue({
      el: "#template",
      components: {
        'my-component': parent
      }
    })


    // <div id="counter-event-example">
    //   <p>{{ total }}</p>
    //   <button-counter v-on:increment="incrementTotal"></button-counter>
    //   <button-counter v-on:increment="incrementTotal"></button-counter>
    // </div>
    Vue.component('button-counter', {
      template: '<button v-on:click="increment">{{ counter }}</button>',
      data: function() {
        return {
          counter: 0
        }
      },
      methods: {
        increment: function() {
          this.counter += 1
          this.$emit('increment')
        }
      },
    })

    var counterEvent = new Vue({
      el: '#counter-event-example',
      data: {
        total: 0
      },
      methods: {
        incrementTotal: function() {
          this.total += 1
        }
      }
    })

    //slot中还原父组件HTML
    var slot = new Vue({
      el: "#slot",
      components: {
        "my-component": {
          template: "  <div>\
              <h2>我是子组件的标题</h2>\
              <slot>\
                只有在没有要分发的内容时才会显示。\
              </slot>\
            </div>"
        }
      }
    })

    var layoutslot = new Vue({
      el: "#layoutslot",
      components: {
        'app-layout': {
          template: "<div class='container'>\
  <header>\
    <slot name='header'></slot>\
  </header>\
  <main>\
    <slot>我看看这里的内容会不会显示出来~~</slot>\
  </main>\
  <footer>\
    <slot name='footer'></slot>\
  </footer>\
</div>"
        }
      }
    })
  </script>
</body>

</html>
```
