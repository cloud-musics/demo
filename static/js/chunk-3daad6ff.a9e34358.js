(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3daad6ff"],{"50a1":function(t,a,e){"use strict";e("7d41")},"57b3":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"sale-page"},[n("div",{staticClass:"poster"},[n("img",{attrs:{src:e("f6da")}})]),n("div",{staticClass:"table"},[t._v(" 销售团队 ")])])}],i=e("ad8f"),c={filters:{statusFilter:function(t){var a={published:"success",draft:"gray",deleted:"danger"};return a[t]}},data:function(){return{list:null,listLoading:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(i["a"])().then((function(a){t.list=a.data.items,t.listLoading=!1}))}}},r=c,u=(e("50a1"),e("2877")),l=Object(u["a"])(r,n,s,!1,null,"bca9e43a",null);a["default"]=l.exports},"7d41":function(t,a,e){},ad8f:function(t,a,e){"use strict";e.d(a,"a",(function(){return s}));var n=e("b775");function s(t){return Object(n["a"])({url:"/vue-admin-template/table/list",method:"get",params:t})}},f6da:function(t,a,e){t.exports=e.p+"static/img/socialbg.9b854ac2.jpg"}}]);