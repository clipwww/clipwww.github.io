webpackJsonp([1],{116:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(115),i=e(310),n=e.n(i),r=e(122);a.a.config.productionTip=!1,new a.a({el:"#app",router:r.a,template:"<App/>",components:{App:n.a}})},118:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(313),i=e.n(a),n=e(311),r=e.n(n);s.default={name:"app",components:{topbar:i.a,mainBlock:r.a},data:function(){return{}}}},119:function(t,s){},120:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},121:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={}},122:function(t,s,e){"use strict";var a=e(115),i=e(318),n=e(312),r=e.n(n);a.a.use(i.a),s.a=new i.a({routes:[{path:"/",name:"Home",component:r.a}]})},304:function(t,s){},305:function(t,s){},306:function(t,s){},307:function(t,s){},309:function(t,s,e){t.exports=e.p+"static/img/1492961499230.362f1ee.png"},310:function(t,s,e){e(306);var a=e(59)(e(118),e(316),null,null);t.exports=a.exports},311:function(t,s,e){e(305);var a=e(59)(e(119),e(315),null,null);t.exports=a.exports},312:function(t,s,e){e(307);var a=e(59)(e(120),e(317),null,null);t.exports=a.exports},313:function(t,s,e){e(304);var a=e(59)(e(121),e(314),null,null);t.exports=a.exports},314:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",{staticClass:"topbar"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"topbar--search"},[t._m(1),t._v(" "),e("router-link",{attrs:{to:"/"}},[e("i",{staticClass:"ion-android-search"})])],1),t._v(" "),e("div",{staticClass:"topbar--right"},[t._m(2),t._v(" "),e("div",{staticClass:"topbar--right--link"},[e("router-link",{staticClass:"topbar--right--home",attrs:{to:"/"}},[t._v("\n                    首頁\n                ")])],1)]),t._v(" "),t._m(3)])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"topbar--icon"},[e("a",{attrs:{href:"https://github.com/clipwww",title:"clipwww github",target:"_black"}},[e("i",{staticClass:"ion-social-github"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"topbar--search--wrap"},[e("input",{attrs:{type:"text",placeholder:"我也不知道這是要搜尋什麼"}}),t._v(" "),e("button",[e("i",{staticClass:"ion-android-search"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"topbar--right--my"},[e("label",{attrs:{for:"js-messages"}},[e("figure",[e("img",{attrs:{src:"https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/10308366_744288482259570_8989851254586754317_n.jpg?oh=d65c95fd544a2d620c4375fcf190bf2c&oe=59BF0B0E"}}),t._v(" "),e("figcaption",[t._v("簡爾廷")])])]),t._v(" "),e("input",{staticClass:"topbar--right--my--messages",attrs:{type:"checkbox",id:"js-messages"}}),t._v(" "),e("div",{staticClass:"checkbox-popup-wrap"},[e("label",{attrs:{for:"js-messages"}}),t._v(" "),e("div",{staticClass:"content container"},[e("p",[t._v("嗨，我是簡爾廷。")]),t._v(" "),e("p",[t._v("我也不知道要讓這邊點了可以幹嘛所以就弄了這個。")]),t._v(" "),e("p",[t._v("這邊是用chexbox + label做出來的（無js）")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"topbar--humbuger"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"ion-navicon"})])])}]}},315:function(t,s,e){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container mainBlock"},[a("figure",{staticClass:"main-visual"},[a("img",{staticClass:"main-visual--image",attrs:{src:e(309),alt:"main visual"}}),t._v(" "),a("h2",[t._v("簡爾廷"),a("span",[t._v("（David, Jian）")])])]),t._v(" "),a("div",{staticClass:"menu"},[a("div",{staticClass:"menu--myPic"},[a("img",{attrs:{src:"https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/10308366_744288482259570_8989851254586754317_n.jpg?oh=d65c95fd544a2d620c4375fcf190bf2c&oe=59BF0B0E",alt:"Me"}})])])])}]}},316:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("topbar"),t._v(" "),e("main-block"),t._v(" "),e("router-view")],1)},staticRenderFns:[]}},317:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"info-box"},[e("header",[e("i",{staticClass:"ion-information-circled"}),e("span",[t._v("基本資料")])]),t._v(" "),e("div",{staticClass:"info-box--body"},[e("ul",[e("li",[e("i",{staticClass:"ion-ios-calendar"}),t._v("1990 / 03 / 30")]),t._v(" "),e("li",[e("i",{staticClass:"ion-ios-email"}),t._v("clipwww@gmail.com")]),t._v(" "),e("li",[e("i",{staticClass:"ion-briefcase"}),t._v("蝦米智慧媒體Web前端工程師")]),t._v(" "),e("li",[e("i",{staticClass:"ion-university"}),t._v("東海大學資管系碩士")]),t._v(" "),e("li",[e("i",{staticClass:"ion-university"}),t._v("東海大學資工系學士")])])])]),t._v(" "),e("div",{staticClass:"info-box"},[e("header",[e("i",{staticClass:"ion-settings"}),e("span",[t._v("技能")])])])])])])}]}},320:function(t,s,e){e(117),t.exports=e(116)}},[320]);
//# sourceMappingURL=app.ee13b8b44178d22e249b.js.map