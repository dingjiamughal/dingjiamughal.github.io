webpackJsonp([5],{"1T9g":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("ZLEe"),l=a.n(n),o=a("4YfN"),i=a.n(o),r=(a("fHWG"),a("f+26")),c=a("9rMa"),s=a("c3m1"),u=a("kdnD"),d=a("NHOI"),m={components:{FormGroup:s.a,InfoTitle:u.a,MDialog:d.a},data:function(){return{tHeight:"",loadingTable:!1,isShowDialog:!1,tableColumnLabel:[{label:"rewardName",value:"奖励名称"},{label:"rewardType",value:"奖励类型"},{label:"actionContent",value:"动作内容",width:260},{label:"paramsList",value:"参数列表",width:160},{label:"admin",value:"最后更新人"},{label:"lastUpdateTime",value:"最后更新时间"}],tableData:[],paginationLen:null,paginationSize:null}},computed:i()({},Object(c.b)(["rewardsRuleFormLabelAlign","mainRulesAddModalData"]),{formContent:function(){return this.rewardsRuleFormLabelAlign},tableHeight:function(){return document.body.clientHeight-230}}),created:function(){var e=this;Object(r.a)("/rewardParams-data",{pagination:!0,Size:7,Index:1}).then(function(t){e.tableData=t.data.tableData,e.paginationLen=t.data.length,e.paginationSize=7})},mounted:function(){this.$nextTick(function(){})},methods:{operateBtn:function(e,t){var a="",n="";switch(e){case 0:a="primary",n="el-icon-edit";break;case 1:a="danger",n="el-icon-delete"}return"icon"===t?n:a},handlePagination:function(e){var t=this;console.log(e),this.loadingTable=!0;Object(r.a)("/rewardParams-data",{pagination:!0,Size:7,Index:e}).then(function(e){t.timer=setTimeout(function(){t.loadingTable=!1,t.tableData=e.data.tableData,clearTimeout(t.timer)},1200)})},handleOperateBtn:function(e,t){console.log(e,t)},searchForm:function(){console.log(this.$store.state.ruleFormLabelAlign)},clearForm:function(){var e=this;l()(this.ruleFormLabelAlign).forEach(function(t){e.ruleFormLabelAlign[t].value="time"===t?[]:""}),console.log(this.$store.state.ruleFormLabelAlign)},addForm:function(){this.isShowDialog=!0},handleCloseDialog:function(){this.isShowDialog=!1},handleConfirmDialog:function(){this.isShowDialog=!1},filterBtn:function(e,t,a){console.log(e,t,a)},formatter:function(e,t){return""}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"paramConfig-rule"},[a("form-group",{staticClass:"form-group",attrs:{"form-content":e.formContent}},[a("el-col",{attrs:{span:6}},[a("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-plus"},on:{click:e.addForm}},[e._v("新增")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-search"},on:{click:e.searchForm}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{size:"small",icon:"el-icon-delete"},on:{click:e.clearForm}},[e._v("清空")])],1)],1),e._v(" "),a("div",{staticClass:"table-wrapper"},[a("div",{staticClass:"table-group"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingTable,expression:"loadingTable"}],ref:"mainTable",attrs:{data:e.tableData,"max-height":e.tableHeight,"element-loading-text":"拼命加载中",border:""}},[e._l(e.tableColumnLabel,function(e,t){return a("el-table-column",{key:e.label,attrs:{prop:e.label,label:e.value,width:e.width,formatter:e.formatter}})}),e._v(" "),a("el-table-column",{attrs:{prop:"operate",label:"操作",width:"112",formatter:e.formatter},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.operate,function(n){return a("el-button",{key:n,attrs:{size:"small",type:e.operateBtn(n,"type"),icon:e.operateBtn(n,"icon"),circle:""},on:{click:function(a){e.handleOperateBtn(t.$index,t.row)}}})})}}])})],2)],1),e._v(" "),a("el-pagination",{staticClass:"table-pagination",attrs:{background:"",layout:"prev, pager, next","page-size":e.paginationSize,total:e.paginationLen},on:{"current-change":e.handlePagination}})],1)],1)},staticRenderFns:[]};var b=a("Z0/y")(m,f,!1,function(e){a("BfsN"),a("2Sy6")},"data-v-46aaec84",null);t.default=b.exports},"2Sy6":function(e,t){},BfsN:function(e,t){}});
//# sourceMappingURL=5.c94190189f8f15554eee.js.map