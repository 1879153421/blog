(function(e){function t(t){for(var a,o,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r={app:0},s=[];function i(e){return c.p+"js/"+({about:"about",blog:"blog",detail:"detail",home:"home",message:"message",project:"project"}[e]||e)+"."+{about:"33baec33",blog:"1faf383b","chunk-036e9701":"bc33f72b","chunk-7db525f2":"e56299ef",detail:"70d60df7",home:"638ba3a9",message:"41896d2c",project:"7bce0a2d"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,blog:1,"chunk-036e9701":1,"chunk-7db525f2":1,detail:1,home:1,message:1,project:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about",blog:"blog",detail:"detail",home:"home",message:"message",project:"project"}[e]||e)+"."+{about:"41d63d44",blog:"c95d51f3","chunk-036e9701":"51800f6a","chunk-7db525f2":"9a82fa2e",detail:"9076adeb",home:"c5820a27",message:"7d0d15e5",project:"0a687e09"}[e]+".css",r=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete o[e],d.parentNode.removeChild(d),n(s)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var p=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",p.name="ChunkLoadError",p.type=a,p.request=o,n[1](p)}r[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"014c":function(e,t,n){},"014cd":function(e,t,n){},"0c6d":function(e,t,n){"use strict";n("d3b7");var a=n("cebe"),o=n.n(a),r=n("c4f5"),s=localStorage.getItem("token"),i=o.a;s&&(i=o.a.create({headers:{authorization:"bearer "+s}})),i.interceptors.response.use((function(e){if(0===e.data.code)return e.headers.authorization&&localStorage.setItem("token",e.headers.authorization),e.data.data;Object(r["a"])({type:"error",content:e.data.msg})}),(function(e){return 403===e.response.status&&localStorage.removeItem("token"),Promise.reject(e)})),t["a"]=i},"0e60":function(e,t,n){"use strict";n("6c05")},"1df5":function(e,t,n){"use strict";n("43cd")},"229f":function(e,t,n){},"2c81":function(e,t,n){e.exports=n.p+"img/404.5b8a38c7.jpg"},4045:function(e,t,n){e.exports=n.p+"img/loading.7d26db10.svg"},"40a2":function(e,t,n){"use strict";n("229f")},4174:function(e,t,n){e.exports=n.p+"img/default.969421d9.gif"},"43cd":function(e,t,n){},"4b51":function(e,t,n){},"4c9e":function(e,t,n){"use strict";n("6997")},"536b":function(e,t,n){e.exports={message:"showMessage-module_message_3v7H3",icon:"showMessage-module_icon_3nHuj","message-info":"showMessage-module_message-info_1ZW3l","message-error":"showMessage-module_message-error_2UIr3","message-success":"showMessage-module_message-success_gMWiM","message-warn":"showMessage-module_message-warn_1Jfh3",content:"showMessage-module_content_1GoWm"}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("8bbf"),o=n.n(a),r=(n("4b51"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("Layout",{scopedSlots:e._u([{key:"left",fn:function(){return[n("SiteAside")]},proxy:!0}])},[[n("RouterView")]],2),n("ToTop")],1)}),s=[],i=n("5849"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"site-aside-container"},[e.data?[n("Avatar",{attrs:{url:e.data.avatar,size:110}}),n("h5",{directives:[{name:"show",rawName:"v-show",value:e.user,expression:"user"}]},[e._v(e._s(e.data.siteTitle))]),n("h5",{directives:[{name:"show",rawName:"v-show",value:!e.user,expression:"!user"}]},[n("span",{on:{click:e.handleLogin}},[e._v("登录")]),e._v("/"),n("span",{on:{click:e.handleRegister}},[e._v("注册")])])]:e._e(),n("Menu"),e.data?n("Contact",{directives:[{name:"show",rawName:"v-show",value:e.user,expression:"user"}]}):e._e(),n("p",{directives:[{name:"show",rawName:"v-show",value:e.user,expression:"user"}],staticClass:"loginOut",on:{click:e.handleLoginOut}},[e._v("退出登录")]),e.data?n("p",{staticClass:"footer"},[e._v(" "+e._s(e.data.icp)+" ")]):e._e()],2)},l=[],u=n("1da1"),p=(n("96cf"),n("77c0")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"menu-container"},e._l(e.items,(function(t,a){return n("RouterLink",{key:a,attrs:{exact:t.exact,"active-class":"selected","exact-active-class":"",to:{name:t.name}}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:t.icon}})],1),n("span",[e._v(e._s(t.title))])])})),1)},m=[],h=n("d010a"),g={components:{Icon:h["a"]},data:function(){return{items:[{name:"Home",title:"首页",icon:"home",exact:!0},{name:"Blog",title:"文章",icon:"blog",exact:!1},{name:"About",title:"关于我",icon:"about",exact:!0},{name:"Project",title:"项目&效果",icon:"code",exact:!0},{name:"Message",title:"留言板",icon:"chat",exact:!0}]}}},f=g,b=(n("6564"),n("2877")),v=Object(b["a"])(f,d,m,!1,null,"3dec4af7",null),w=v.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"contact-container"},[n("li",[n("a",{attrs:{href:e.data.github,target:"_blank"}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"github"}})],1),n("span",[e._v(e._s(e.data.githubName))])])]),n("li",[n("a",{attrs:{href:""}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"qq"}})],1),n("span",[e._v(e._s(e.data.qq))]),n("div",{staticClass:"pop"},[n("img",{attrs:{src:e.data.qqQrCode,alt:""}})])])]),n("li",[n("a",{attrs:{href:""}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"weixin"}})],1),n("span",[e._v(e._s(e.data.weixin))]),n("div",{staticClass:"pop"},[n("img",{attrs:{src:e.data.weixinQrCode,alt:""}})])])]),n("li",[n("a",{attrs:{href:"mailto:"+e.data.mailTo}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"mail"}})],1),n("span",[e._v(e._s(e.data.mail))]),n("div",{staticClass:"pop"},[n("img",{attrs:{src:e.data.weixinQrCode,alt:""}})])])])])},j=[],x=n("5880"),k={components:{Icon:h["a"]},computed:Object(x["mapState"])("setting",["data"])},O=k,C=(n("0e60"),Object(b["a"])(O,y,j,!1,null,"3d587bb2",null)),_=C.exports,S=n("c4f5"),T={components:{Avatar:p["a"],Menu:w,Contact:_},computed:{data:function(){return this.$store.state.setting.data},user:function(){return this.$store.state.loginUser.data}},methods:{handleLoginOut:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("loginUser/loginOut"),t.next=3,e.$store.dispatch("setting/fetchSetting");case 3:e.$router.push("/"),Object(S["a"])({content:"退出成功"});case 5:case"end":return t.stop()}}),t)})))()},handleLogin:function(){this.$router.push("/login")},handleRegister:function(){this.$router.push("/register")}}},R=T,A=(n("76fa"),Object(b["a"])(R,c,l,!1,null,"72394db1",null)),q=A.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"to-top-container",on:{click:e.handleClick}},[e._v("Top")])},L=[],D={data:function(){return{show:!1}},created:function(){this.$bus.$on("mainScroll",this.handleScroll)},destroyed:function(){this.$bus.$on("mainScroll",this.handleScroll)},methods:{handleClick:function(){this.$bus.$emit("setMainScroll",0)},handleScroll:function(e){this.show=!!e&&e.scrollTop>500}}},P=D,M=(n("40a2"),Object(b["a"])(P,z,L,!1,null,"6761453d",null)),$=M.exports,E={name:"App",components:{Layout:i["a"],SiteAside:q,ToTop:$}},H=E,I=(n("d79b"),Object(b["a"])(H,r,s,!1,null,"018d9ce5",null)),N=I.exports,J=n("6389"),U=n.n(J),B=(n("d3b7"),n("4795"),n("3ca3"),n("ddb0"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),G=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"not-found-container"},[a("img",{attrs:{src:n("2c81"),alt:""}})])}],K={},W=K,V=(n("1df5"),Object(b["a"])(W,B,G,!1,null,"4252a629",null)),Q=V.exports,F=(n("a5d8"),n("709b")),Z={namespaced:!0,state:{loading:!1,data:[]},mutations:{setLoading:function(e,t){e.loading=t},setData:function(e,t){e.data=t}},actions:{fetchBanner:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.state.data.length){t.next=2;break}return t.abrupt("return");case 2:return e.commit("setLoading",!0),t.next=5,Object(F["a"])();case 5:n=t.sent,e.commit("setData",n),e.commit("setLoading",!1);case 8:case"end":return t.stop()}}),t)})))()}}},X=n("0c6d");n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("0d03");function Y(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?t[2]:null}function ee(e,t){return te.apply(this,arguments)}function te(){return te=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,X["a"].post("/api/admin/login",{loginId:t,loginPwd:n});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),te.apply(this,arguments)}function ne(e){return ae.apply(this,arguments)}function ae(){return ae=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,X["a"].post("/api/admin/register",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),ae.apply(this,arguments)}function oe(){function e(e){var t=new Date;t.setTime(t.getTime()-1);var n=Y(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toGMTString())}localStorage.removeItem("token"),e("token")}function re(){return se.apply(this,arguments)}function se(){return se=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=Y("token"),t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,X["a"].get("/api/admin/whoami");case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)}))),se.apply(this,arguments)}function ie(){return ce.apply(this,arguments)}function ce(){return ce=Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,re();case 2:if(t=e.sent,t){e.next=5;break}return e.abrupt("return",{avatar:"https://img0.baidu.com/it/u=3684533571,3875739943&fm=26&fmt=auto",siteTitle:"勾指起誓",webTitle:"我的博客",github:"https://github.com/",qq:"1879153421",qqQrCode:"https://i.loli.net/2021/10/05/9cjstaZfmlRKU4H.png",weixin:"l1879153421",weixinQrCode:"https://i.loli.net/2021/10/05/9cjstaZfmlRKU4H.png",mail:"我的邮箱",mailTo:"1879153421@qq.com",icp:"浙ICP备17001719号",githubName:"我的GitHub",favicon:"https://img2.baidu.com/it/u=3559071630,3668586377&fm=26&fmt=auto",personWeb:"https://www.baidu.com/"});case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)}))),ce.apply(this,arguments)}var le=n("ed08"),ue={namespaced:!0,state:{loading:!1,data:null},mutations:{setLoading:function(e,t){e.loading=t},setData:function(e,t){e.data=t}},actions:{fetchSetting:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit("setLoading",!0),t.next=3,ie();case 3:if(n=t.sent,e.commit("setData",n),e.commit("setLoading",!1),!n.favicon){t.next=15;break}if(a=document.querySelector("link[rel='shortcut icon']"),!a){t.next=10;break}return t.abrupt("return");case 10:o=document.createElement("link"),o.rel="shortcut icon",o.type="images/x-icon",o.href=n.favicon,document.querySelector("head").appendChild(o);case 15:n.webTitle&&le["d"].setSiteTitle(n.webTitle);case 16:case"end":return t.stop()}}),t)})))()}}};function pe(){return de.apply(this,arguments)}function de(){return de=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,X["a"].get("/api/about");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),de.apply(this,arguments)}var me={namespaced:!0,state:{loading:!1,data:null},mutations:{setLoading:function(e,t){e.loading=t},setData:function(e,t){e.data=t}},actions:{fetchAbout:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.state.data){t.next=2;break}return t.abrupt("return");case 2:return e.commit("setLoading",!0),t.next=5,pe();case 5:n=t.sent,e.commit("setData",n),e.commit("setLoading",!1);case 8:case"end":return t.stop()}}),t)})))()}}};function he(){return ge.apply(this,arguments)}function ge(){return ge=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,X["a"].get("/api/project");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),ge.apply(this,arguments)}var fe={namespaced:!0,state:{loading:!1,data:null},mutations:{setData:function(e,t){e.data=t},setLoading:function(e,t){e.loading=t}},actions:{fetchProject:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.state.data){t.next=2;break}return t.abrupt("return");case 2:return e.commit("setLoading",!0),t.next=5,he();case 5:n=t.sent,e.commit("setData",n),e.commit("setLoading",!1);case 8:case"end":return t.stop()}}),t)})))()}}},be={namespaced:!0,state:{data:null,isLoading:!1},mutations:{setData:function(e,t){e.data=t},setIsLoading:function(e,t){e.isLoading=t}},actions:{login:function(e,t){return Object(u["a"])(regeneratorRuntime.mark((function n(){var a,o,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,o=t.loginId,r=t.loginPwd,a("setIsLoading",!0),n.next=5,ee(o,r);case 5:return s=n.sent,a("setData",s),a("setIsLoading",!1),n.abrupt("return",s);case 9:case"end":return n.stop()}}),n)})))()},register:function(e,t){return Object(u["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,a("setIsLoading",!0),n.next=4,ne(t);case 4:return o=n.sent,a("setIsLoading",!1),n.abrupt("return",o);case 7:case"end":return n.stop()}}),n)})))()},loginOut:function(e){var t=e.commit;t("setData",null),oe()},whoAmI:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("setIsLoading",!0),t.prev=2,t.next=5,re();case 5:return a=t.sent,n("setData",a),t.abrupt("return",a);case 10:t.prev=10,t.t0=t["catch"](2),n("setData",null);case 13:n("setIsLoading",!1);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})))()}}};window.vuex||Object(x["install"])(o.a);var ve=new x["Store"]({modules:{banner:Z,setting:ue,about:me,project:fe,loginUser:be},strict:!0}),we=n("323e");function ye(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Object(we["start"])(),t.next=4;break;case 4:return t.next=6,e();case 6:return n=t.sent,Object(we["done"])(),t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})))}Object(we["configure"])({trickleSpeed:20,showSpinner:!1});var je=[{name:"Home",path:"/",component:ye((function(){return n.e("home").then(n.bind(null,"16c0"))})),meta:{title:"首页"}},{name:"About",path:"/about",component:ye((function(){return n.e("about").then(n.bind(null,"0737"))})),meta:{title:"关于我"},beforeEnter:function(e,t,n){ve.state.loginUser.data?n():n("/login")}},{name:"Blog",path:"/blog",component:ye((function(){return n.e("blog").then(n.bind(null,"3b5d"))})),meta:{title:"文章"}},{name:"CategoryBlog",path:"/blog/cate/:categoryId",component:ye((function(){return n.e("blog").then(n.bind(null,"3b5d"))})),meta:{title:"文章"}},{name:"Project",path:"/project",component:ye((function(){return n.e("project").then(n.bind(null,"34fb"))})),meta:{title:"项目&效果"}},{path:"/login",component:function(){return n.e("chunk-7db525f2").then(n.bind(null,"a55b"))},meta:{title:"登录"}},{path:"/register",component:function(){return n.e("chunk-036e9701").then(n.bind(null,"73cf"))},meta:{title:"注册"}},{name:"Message",path:"/message",component:ye((function(){return n.e("message").then(n.bind(null,"8fc4"))})),meta:{title:"留言板"}},{name:"BlogDetail",path:"/blog/:id",component:ye((function(){return n.e("detail").then(n.bind(null,"ccf9"))})),meta:{title:"文章详情"}},{name:"NotFound",path:"*",component:Q}];window.VueRouter||o.a.use(U.a);var xe=new U.a({routes:je,mode:"history"});xe.afterEach((function(e,t){e.meta.title&&le["d"].setRouteTitle(e.meta.title)}));var ke=xe,Oe=n("5c96"),Ce=n.n(Oe),_e=(n("0fae"),n("ade3")),Se=(n("6eba"),n("96eb")),Te=n.n(Se),Re=n("b383"),Ae=n.n(Re);Te.a.mock("/api/blogtype","get",{code:0,msg:"","data|10-20":[{"id|+1":1,name:"分类@id","articleCount|0-300":0,"order|+1":1}]}),Te.a.mock(/^\/api\/blog(\?.+)?$/,"get",(function(e){var t=Ae.a.parse(e.url),n=Object(_e["a"])({"total|2000-3000":0},"rows|".concat(t.limit||10),[{id:"@guid",title:"@ctitle",description:"@cparagraph(1,10)",category:{"id|1-10":0,name:"分类@id"},"scanNumber|0-3000":0,"commentNumber|0-300":30,"thumb|1":['@image("300x250", @color, "#fff", @natural)'],createDate:"@date('T')"}]);return Te.a.mock({code:0,msg:"",data:n})})),Te.a.mock(/^\/api\/blog\/[^/]+$/,"get",{code:0,msg:"",data:{id:"@guid",title:"CORS跨域方案详解",category:{"id|1-10":1,name:"分类@id"},description:"@cparagraph(1,10)","scanNumber|0-10000":0,"commentNumber|0-100":0,createDate:"@date('T')",toc:[{name:"概述",anchor:"article-md-title-1"},{name:"简单请求",anchor:"article-md-title-2",children:[{name:"简单请求的判定",anchor:"article-md-title-3"},{name:"简单请求的交互规范",anchor:"article-md-title-4"}]},{name:"需要预检的请求",anchor:"article-md-title-5"},{name:"附带身份证的请求",anchor:"article-md-title-6"},{name:"一个额外的补充",anchor:"article-md-title-7"}],"thimb|1":[Te.a.Random.image("300x250","#000","#fff","Random Image"),null],htmlContent:'<blockquote>\n        <p>阅读本文，你需要首先知道：</p><ol>\n        <li>浏览器的同源策略</li>\n        <li>跨域问题</li>\n        <li>JSONP原理</li>\n        <li>cookie原理</li>\n        </ol>\n        </blockquote>\n        <p>JSONP并不是一个好的跨域解决方案，它至少有着下面两个严重问题：</p><ol>\n        <li><strong>会打乱服务器的消息格式</strong>：JSONP要求服务器响应一段JS代码，但在非跨域的情况下，服务器又需要响应一个正常的JSON格式</li>\n        <li><strong>只能完成GET请求</strong>：JSONP的原理会要求浏览器端生成一个<code>script</code>元素，而<code>script</code>元素发出的请求只能是<code>get</code>请求</li>\n        </ol>\n        <p>所以，CORS是一种更好的跨域解决方案。</p><h1 id="article-md-title-1">概述</h1><p><code>CORS</code>是基于<code>http1.1</code>的一种跨域解决方案，它的全称是<strong>C</strong>ross-<strong>O</strong>rigin <strong>R</strong>esource <strong>S</strong>haring，跨域资源共享。</p><p>它的总体思路是：<strong>如果浏览器要跨域访问服务器的资源，需要获得服务器的允许</strong></p><figure class="markdown-image">\n              \n              <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421152122793.png" title="image-20200421152122793" alt="image-20200421152122793">\n              <figcaption>image-20200421152122793</figcaption>\n          \n            </figure><p>而要知道，一个请求可以附带很多信息，从而会对服务器造成不同程度的影响</p><p>比如有的请求只是获取一些新闻，有的请求会改动服务器的数据</p><p>针对不同的请求，CORS规定了三种不同的交互模式，分别是：</p><ul>\n        <li><strong>简单请求</strong></li>\n        <li><strong>需要预检的请求</strong></li>\n        <li><strong>附带身份凭证的请求</strong></li>\n        </ul>\n        <p>这三种模式从上到下层层递进，请求可以做的事越来越多，要求也越来越严格。</p><p>下面分别说明三种请求模式的具体规范。</p><h1 id="article-md-title-2">简单请求</h1><p>当浏览器端运行了一段ajax代码（无论是使用XMLHttpRequest还是fetch api），浏览器会首先判断它属于哪一种请求模式</p><h2 id="article-md-title-3">简单请求的判定</h2><p>当请求<strong>同时满足</strong>以下条件时，浏览器会认为它是一个简单请求：</p><ol>\n        <li><p><strong>请求方法属于下面的一种：</strong></p><ul>\n        <li>get</li>\n        <li>post</li>\n        <li>head</li>\n        </ul>\n        </li>\n        <li><p><strong>请求头仅包含安全的字段，常见的安全字段如下：</strong></p><ul>\n        <li><code>Accept</code></li>\n        <li><code>Accept-Language</code></li>\n        <li><code>Content-Language</code></li>\n        <li><code>Content-Type</code></li>\n        <li><code>DPR</code></li>\n        <li><code>Downlink</code></li>\n        <li><code>Save-Data</code></li>\n        <li><code>Viewport-Width</code></li>\n        <li><code>Width</code></li>\n        </ul>\n        </li>\n        <li><p><strong>请求头如果包含<code>Content-Type</code>，仅限下面的值之一：</strong></p><ul>\n        <li><code>text/plain</code></li>\n        <li><code>multipart/form-data</code></li>\n        <li><code>application/x-www-form-urlencoded</code></li>\n        </ul>\n        </li>\n        </ol>\n        <p>如果以上三个条件同时满足，浏览器判定为简单请求。</p><p>下面是一些例子：</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n        fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);\n        \n        <span class="hljs-comment">// 请求方法不满足要求，不是简单请求</span>\n        fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n          <span class="hljs-attr">method</span>:<span class="hljs-string">"PUT"</span>\n        })\n        \n        <span class="hljs-comment">// 加入了额外的请求头，不是简单请求</span>\n        fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n          <span class="hljs-attr">headers</span>:{\n            <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>\n          }\n        })\n        \n        <span class="hljs-comment">// 简单请求</span>\n        fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n          <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>\n        })\n        \n        <span class="hljs-comment">// content-type不满足要求，不是简单请求</span>\n        fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n          <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>,\n          <span class="hljs-attr">headers</span>: {\n            <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n          }\n        })</code></pre>\n        <h2 id="article-md-title-4">简单请求的交互规范</h2><p>当浏览器判定某个<strong>ajax跨域请求</strong>是<strong>简单请求</strong>时，会发生以下的事情</p><ol>\n        <li><strong>请求头中会自动添加<code>Origin</code>字段</strong></li>\n        </ol>\n        <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n        fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);</code></pre>\n        <p>请求发出后，请求头会是下面的格式：</p><pre><code>GET /api/news/ HTTP/1.1\n        Host: crossdomain.com\n        Connection: keep-alive\n        ...\n        Referer: http://my.com/index.html\n        Origin: http://my.com</code></pre><p>看到最后一行没，<code>Origin</code>字段会告诉服务器，是哪个源地址在跨域请求</p><ol start="2">\n        <li><strong>服务器响应头中应包含<code>Access-Control-Allow-Origin</code></strong></li>\n        </ol>\n        <p>当服务器收到请求后，如果允许该请求跨域访问，需要在响应头中添加<code>Access-Control-Allow-Origin</code>字段</p><p>该字段的值可以是：</p><ul>\n        <li>*：表示我很开放，什么人我都允许访问</li>\n        <li>具体的源：比如<code>http://my.com</code>，表示我就允许你访问</li>\n        </ul>\n        <blockquote>\n        <p>实际上，这两个值对于客户端<code>http://my.com</code>而言，都一样，因为客户端才不会管其他源服务器允不允许，就关心自己是否被允许</p><p>当然，服务器也可以维护一个可被允许的源列表，如果请求的<code>Origin</code>命中该列表，才响应<code>*</code>或具体的源</p><p><strong>为了避免后续的麻烦，强烈推荐响应具体的源</strong></p></blockquote>\n        <p>假设服务器做出了以下的响应：</p><pre><code>HTTP/1.1 200 OK\n        Date: Tue, 21 Apr 2020 08:03:35 GMT\n        ...\n        Access-Control-Allow-Origin: http://my.com\n        ...\n        \n        消息体中的数据</code></pre><p>当浏览器看到服务器允许自己访问后，高兴的像一个两百斤的孩子，于是，它就把响应顺利的交给js，以完成后续的操作</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n              \n              <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421162846480.png" title="image-20200421162846480" alt="image-20200421162846480">\n              <figcaption>image-20200421162846480</figcaption>\n          \n            </figure><h1 id="article-md-title-5">需要预检的请求</h1><p>简单的请求对服务器的威胁不大，所以允许使用上述的简单交互即可完成。</p><p>但是，如果浏览器不认为这是一种简单请求，就会按照下面的流程进行：</p><ol>\n        <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n        <li><strong>服务器允许</strong></li>\n        <li><strong>浏览器发送真实请求</strong></li>\n        <li><strong>服务器完成真实的响应</strong></li>\n        </ol>\n        <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 需要预检的请求</span>\n        fetch(<span class="hljs-string">"http://crossdomain.com/api/user"</span>, {\n          <span class="hljs-attr">method</span>:<span class="hljs-string">"POST"</span>, <span class="hljs-comment">// post 请求</span>\n          <span class="hljs-attr">headers</span>:{  <span class="hljs-comment">// 设置请求头</span>\n            <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>,\n            <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>,\n            <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n          },\n          <span class="hljs-attr">body</span>: <span class="hljs-built_in">JSON</span>.stringify({ <span class="hljs-attr">name</span>: <span class="hljs-string">"袁小进"</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">18</span> }) <span class="hljs-comment">// 设置请求体</span>\n        });</code></pre>\n        <p>浏览器发现它不是一个简单请求，则会按照下面的流程与服务器交互</p><ol>\n        <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n        </ol>\n        <pre><code>OPTIONS /api/user HTTP/1.1\n        Host: crossdomain.com\n        ...\n        Origin: http://my.com\n        Access-Control-Request-Method: POST\n        Access-Control-Request-Headers: a, b, content-type</code></pre><p>可以看出，这并非我们想要发出的真实请求，请求中不包含我们的响应头，也没有消息体。</p><p>这是一个预检请求，它的目的是询问服务器，是否允许后续的真实请求。</p><p>预检请求<strong>没有请求体</strong>，它包含了后续真实请求要做的事情</p><p>预检请求有以下特征：</p><ul>\n        <li>请求方法为<code>OPTIONS</code></li>\n        <li>没有请求体</li>\n        <li>请求头中包含<ul>\n        <li><code>Origin</code>：请求的源，和简单请求的含义一致</li>\n        <li><code>Access-Control-Request-Method</code>：后续的真实请求将使用的请求方法</li>\n        <li><code>Access-Control-Request-Headers</code>：后续的真实请求会改动的请求头</li>\n        </ul>\n        </li>\n        </ul>\n        <ol start="2">\n        <li><strong>服务器允许</strong></li>\n        </ol>\n        <p>服务器收到预检请求后，可以检查预检请求中包含的信息，如果允许这样的请求，需要响应下面的消息格式</p><pre><code>HTTP/1.1 200 OK\n        Date: Tue, 21 Apr 2020 08:03:35 GMT\n        ...\n        Access-Control-Allow-Origin: http://my.com\n        Access-Control-Allow-Methods: POST\n        Access-Control-Allow-Headers: a, b, content-type\n        Access-Control-Max-Age: 86400\n        ...</code></pre><p>对于预检请求，不需要响应任何的消息体，只需要在响应头中添加：</p><ul>\n        <li><code>Access-Control-Allow-Origin</code>：和简单请求一样，表示允许的源</li>\n        <li><code>Access-Control-Allow-Methods</code>：表示允许的后续真实的请求方法</li>\n        <li><code>Access-Control-Allow-Headers</code>：表示允许改动的请求头</li>\n        <li><code>Access-Control-Max-Age</code>：告诉浏览器，多少秒内，对于同样的请求源、方法、头，都不需要再发送预检请求了</li>\n        </ul>\n        <ol start="3">\n        <li><strong>浏览器发送真实请求</strong></li>\n        </ol>\n        <p>预检被服务器允许后，浏览器就会发送真实请求了，上面的代码会发生下面的请求数据</p><pre><code>POST /api/user HTTP/1.1\n        Host: crossdomain.com\n        Connection: keep-alive\n        ...\n        Referer: http://my.com/index.html\n        Origin: http://my.com\n        \n        {"name": "袁小进", "age": 18 }</code></pre><ol start="4">\n        <li><strong>服务器响应真实请求</strong></li>\n        </ol>\n        <pre><code>HTTP/1.1 200 OK\n        Date: Tue, 21 Apr 2020 08:03:35 GMT\n        ...\n        Access-Control-Allow-Origin: http://my.com\n        ...\n        \n        添加用户成功</code></pre><p>可以看出，当完成预检之后，后续的处理与简单请求相同</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n              \n              <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421165913320.png" title="image-20200421165913320" alt="image-20200421165913320">\n              <figcaption>image-20200421165913320</figcaption>\n          \n            </figure><h1 id="article-md-title-6">附带身份凭证的请求</h1><p>默认情况下，ajax的跨域请求并不会附带cookie，这样一来，某些需要权限的操作就无法进行</p><p>不过可以通过简单的配置就可以实现附带cookie</p><pre><code class="language-js"><span class="hljs-comment">// xhr</span>\n        <span class="hljs-keyword">var</span> xhr = <span class="hljs-keyword">new</span> XMLHttpRequest();\n        xhr.withCredentials = <span class="hljs-literal">true</span>;\n        \n        <span class="hljs-comment">// fetch api</span>\n        fetch(url, {\n          <span class="hljs-attr">credentials</span>: <span class="hljs-string">"include"</span>\n        })</code></pre>\n        <p>这样一来，该跨域的ajax请求就是一个<em>附带身份凭证的请求</em></p><p>当一个请求需要附带cookie时，无论它是简单请求，还是预检请求，都会在请求头中添加<code>cookie</code>字段</p><p>而服务器响应时，需要明确告知客户端：服务器允许这样的凭据</p><p>告知的方式也非常的简单，只需要在响应头中添加：<code>Access-Control-Allow-Credentials: true</code>即可</p><p>对于一个附带身份凭证的请求，若服务器没有明确告知，浏览器仍然视为跨域被拒绝。</p><p>另外要特别注意的是：<strong>对于附带身份凭证的请求，服务器不得设置 <code>Access-Control-Allow-Origin 的值为*</code></strong>。这就是为什么不推荐使用*的原因</p><h1 id="article-md-title-7">一个额外的补充</h1><p>在跨域访问时，JS只能拿到一些最基本的响应头，如：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头。</p><p><code>Access-Control-Expose-Headers</code>头让服务器把允许浏览器访问的头放入白名单，例如：</p><pre><code>Access-Control-Expose-Headers: authorization, a, b</code></pre><p>这样JS就能够访问指定的响应头了。</p>'}}),Te.a.mock("/api/comment","post",{code:0,msg:"",data:{id:"@guid",nickname:"@cname",content:"@cparagraph(1,10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}}),Te.a.mock(/^\/api\/comment\/?(\?.+)?$/,"get",(function(e){var t=Ae.a.parse(e.url);return Te.a.mock({code:0,msg:"",data:Object(_e["a"])({"total|50-200":0},"rows|".concat(t.limit||10),[{id:"@guid",nickname:"@cname",content:"@cparagraph(1,10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}])})})),Te.a.mock("/api/about","get",{code:0,msg:"",data:"https://1879153421.github.io/lby/"}),Te.a.mock(/^\/api\/project\/?$/,"get",{code:0,msg:"","data|10-20":[{id:"@uuid",name:"@ctitle(1, 10)","url|1":["@url",null],"github|1":["@url",null],"description|1-4":["@cparagraph(1, 5)"],thumb:"@image(300x250, @color, #fff, @natural)"}]}),Te.a.mock("/api/message","post",{code:0,msg:"",data:{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}}),Te.a.mock(/^\/api\/message\/?(\?.+)?$/,"get",(function(e){var t=Ae.a.parse(e.url);return Te.a.mock({code:0,msg:"",data:Object(_e["a"])({total:52},"rows|".concat(t.limit||10),[{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:Date.now(),"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}])})})),Te.a.setup({timeout:"1000-2000"});var qe=new o.a({});o.a.prototype.$bus=qe;var ze=qe,Le=n("5c5c"),De=n.n(Le),Pe=n("4045"),Me=n.n(Pe);function $e(e){return e.querySelector("img[data-role=loading]")}function Ee(){var e=document.createElement("img");return e.src=Me.a,e.dataset.role="loading",e.className=De.a.loading,e}var He=function(e,t){var n=$e(e);if(t.value){if(!n){var a=Ee();e.appendChild(a)}}else n&&n.remove()},Ie=n("b85c"),Ne=(n("4de4"),n("4174")),Je=n.n(Ne),Ue=[];function Be(e){e.dom.src=Je.a;var t=document.documentElement.clientHeight,n=e.dom.getBoundingClientRect(),a=n.height||150;n.top>=-a&&n.top<=t&&(e.dom.src=e.src,Ue=Ue.filter((function(t){return t!==e})))}function Ge(){var e,t=Object(Ie["a"])(Ue);try{for(t.s();!(e=t.n()).done;){var n=e.value;Be(n)}}catch(a){t.e(a)}finally{t.f()}}function Ke(){Ge()}ze.$on("mainScroll",Object(le["a"])(Ke,50));var We={inserted:function(e,t){var n={dom:e,src:t.value};Ue.push(n),Be(n)},unbind:function(e){Ue=Ue.filter((function(t){return t.dom!==e}))}};ve.dispatch("setting/fetchSetting"),ve.dispatch("loginUser/whoAmI"),o.a.prototype.$showMessage=le["c"],o.a.directive("loading",He),o.a.directive("lazy",We),o.a.use(Ce.a),new o.a({router:ke,store:ve,render:function(e){return e(N)}}).$mount("#app")},5849:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-container"},[n("div",{staticClass:"left"},[e._t("left")],2),n("div",{staticClass:"main"},[e._t("default")],2),n("div",{staticClass:"right"},[e._t("right")],2)])},o=[],r={},s=r,i=(n("7580"),n("2877")),c=Object(i["a"])(s,a,o,!1,null,"b3c23972",null);t["a"]=c.exports},5880:function(e,t){e.exports=Vuex},"5c5c":function(e,t,n){e.exports={loading:"loading-module_loading_1dKWw"}},6389:function(e,t){e.exports=VueRouter},6564:function(e,t,n){"use strict";n("ea87")},6997:function(e,t,n){},"6c05":function(e,t,n){},"709b":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("1da1"),o=(n("96cf"),n("26e9"),n("0c6d"));function r(){return s.apply(this,arguments)}function s(){return s=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].get("/api/banner");case 2:return t=e.sent,e.abrupt("return",t.reverse());case 4:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}},7580:function(e,t,n){"use strict";n("9359")},"76fa":function(e,t,n){"use strict";n("014cd")},"77c0":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("img",{staticClass:"avatar-img avatar-container",style:{height:e.size+"px",width:e.size+"px"},attrs:{src:e.url}})},o=[],r=(n("a9e3"),{props:{url:{type:String,requred:!0},size:{type:Number}}}),s=r,i=(n("4c9e"),n("2877")),c=Object(i["a"])(s,a,o,!1,null,null,null);t["a"]=c.exports},"8bbf":function(e,t){e.exports=Vue},9359:function(e,t,n){},b75c:function(e,t,n){"use strict";n("014c")},bd0a:function(e,t,n){},c4f5:function(e,t,n){"use strict";n("99af"),n("4795");var a=n("536b"),o=n.n(a),r=n("d010a"),s=n("dc93");t["a"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.content||"弹出一个提示",n=e.type||"info",a=e.duration||2e3,i=e.container||document.body,c=document.createElement("div"),l=Object(s["a"])(r["a"],{type:n});c.innerHTML='<div class="'.concat(o.a.icon,'">').concat(l.outerHTML,'</div><span class="').concat(o.a.content,'">').concat(t,"</span>"),i.appendChild(c);var u="message-".concat(n);c.className="".concat(o.a.message," ").concat(o.a[u]),"static"==getComputedStyle(i).position&&(i.style.position="relative"),c.clientHeight,c.style.opacity=1,c.style.transform="translate(-50%,-50%)",setTimeout((function(){c.style.opacity=0,c.style.transform="translate(-50%,-50%) translateY(-50px)",c.addEventListener("transitionend",(function(){c.remove(),e.callback&&e.callback()}),{once:!0})}),a)}},cebe:function(e,t){e.exports=axios},d010a:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i",{staticClass:"iconfont icon-container",class:e.fontClass})},o=[],r={home:"iconzhuye",success:"iconzhengque",error:"iconcuowu",close:"iconguanbi",warn:"iconjinggao",info:"iconxinxi",blog:"iconblog",code:"iconcode",about:"iconset_about_hov",weixin:"iconweixin",mail:"iconemail",github:"icongithub",qq:"iconsign_qq",arrowUp:"iconiconfonticonfonti2copy",arrowDown:"iconiconfonticonfonti2",empty:"iconempty",chat:"iconliuyan"},s={props:{type:{type:String,required:!0}},computed:{fontClass:function(){return r[this.type]}}},i=s,c=(n("b75c"),n("2877")),l=Object(c["a"])(i,a,o,!1,null,"1108479e",null);t["a"]=l.exports},d79b:function(e,t,n){"use strict";n("bd0a")},dc93:function(e,t,n){"use strict";var a=n("8bbf"),o=n.n(a);t["a"]=function(e,t){var n=new o.a({render:function(n){return n(e,{props:t})}});return n.$mount(),n.$el}},ea87:function(e,t,n){},ed08:function(e,t,n){"use strict";n.d(t,"c",(function(){return a["a"]})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return l}));n("dc93");var a=n("c4f5"),o=(n("0d03"),n("4d90"),n("d3b7"),n("25f0"),n("99af"),function(e){var t=new Date(+e),n=(t.getMonth()+1).toString().padStart(2,"0"),a=t.getDate().toString().padStart(2,"0");return"".concat(t.getFullYear(),"-").concat(n,"-").concat(a)}),r=(n("4795"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=null;return function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];clearTimeout(n),n=setTimeout((function(){e.apply(void 0,o)}),t)}}),s="",i="";function c(){document.title=s||i?!s&&i?i:s&&!i?s:"".concat(s,"-").concat(i):"loading...."}var l={setRouteTitle:function(e){s=e,c()},setSiteTitle:function(e){i=e,c()}}}});