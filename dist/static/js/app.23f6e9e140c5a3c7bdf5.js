webpackJsonp([12],{"1eUC":function(t,e){},"2hfY":function(t,e,n){"use strict";e.a=function(t){var e=new Date(t),n=(Date.now()-e)/1e3;if(n<30)return"刚刚";if(n<3600)return Math.ceil(n/60)+"分钟前";if(n<86400)return Math.ceil(n/3600)+"小时前";if(n<172800)return"1天前";return t}},"33ZO":function(t,e,n){"use strict";var o={name:"BaseHeader",props:{activeIndex:String,simple:{type:Boolean,default:!1}},data:function(){return{}},computed:{user:function(){return{login:0!=this.$store.state.account.length,avatar:this.$store.state.avatar}}},methods:{logout:function(){var t=this,e=this;this.$store.dispatch("logout").then(function(){t.$router.push({path:"/"})}).catch(function(t){"error"!==t&&e.$message({message:t,type:"error",showClose:!0})})}}},a={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-header",{staticClass:"me-area"},[o("el-row",{staticClass:"me-header"},[o("el-col",{staticClass:"me-header-left",attrs:{span:4}},[o("router-link",{staticClass:"me-title",attrs:{to:"/"}},[o("img",{attrs:{src:n("dLd/")}})])],1),t._v(" "),t.simple?[t._t("default")]:o("el-col",{attrs:{span:16}},[o("el-menu",{attrs:{router:!0,"menu-trigger":"click","active-text-color":"#5FB878","default-active":t.activeIndex,mode:"horizontal"}},[o("el-menu-item",{attrs:{index:"/"}},[t._v("首页")]),t._v(" "),o("el-menu-item",{attrs:{index:"/log"}},[t._v("日志")]),t._v(" "),o("el-menu-item",{attrs:{index:"/messageBoard"}},[t._v("留言板")]),t._v(" "),o("el-col",{attrs:{span:4,offset:10}},[o("el-menu-item",{attrs:{index:"/write"}},[o("i",{staticClass:"el-icon-edit"}),t._v("写文章")])],1)],1)],1),t._v(" "),o("el-col",{attrs:{span:4}},[o("el-menu",{attrs:{router:!0,"menu-trigger":"click",mode:"horizontal","active-text-color":"#5FB878"}},[t.user.login?[o("el-submenu",{attrs:{index:""}},[o("template",{slot:"title"},[o("img",{staticClass:"me-header-picture",attrs:{src:t.user.avatar}})]),t._v(" "),o("el-menu-item",{attrs:{index:""},on:{click:t.logout}},[o("i",{staticClass:"el-icon-back"}),t._v("退出")])],2)]:[o("el-menu-item",{attrs:{index:"/login"}},[o("el-button",{attrs:{type:"text"}},[t._v("登录")])],1),t._v(" "),o("el-menu-item",{attrs:{index:"/register"}},[o("el-button",{attrs:{type:"text"}},[t._v("注册")])],1)]],2)],1)],2)],1)},staticRenderFns:[]};var i=n("C7Lr")(o,a,!1,function(t){n("MHXp")},null,null);e.a=i.exports},"7xIN":function(t,e){},IcnI:function(t,e,n){"use strict";var o=n("rVsN"),a=n.n(o),i=n("2bvH"),r=n("xd7I"),c=n("Moy7"),s=n("M9A7");r.default.use(i.a),e.a=new i.a.Store({state:{id:"",account:"",name:"",avatar:"",token:Object(c.a)()},mutations:{SET_TOKEN:function(t,e){t.token=e},SET_ACCOUNT:function(t,e){t.account=e},SET_NAME:function(t,e){t.name=e},SET_AVATAR:function(t,e){t.avatar=e},SET_ID:function(t,e){t.id=e}},actions:{login:function(t,e){var n=t.commit;return new a.a(function(t,o){Object(s.c)(e.account,e.password).then(function(e){n("SET_TOKEN",e.data.data.sessionToken),Object(c.c)(e.data.data.sessionToken),t()}).catch(function(t){o(t)})})},getUserInfo:function(t){var e=t.commit;t.state;return new a.a(function(t,n){Object(s.b)(Object(c.a)()).then(function(n){n.data.data?(e("SET_ID",n.data.data.userId),e("SET_ACCOUNT",n.data.data.email),e("SET_NAME",n.data.data.nickname)):(e("SET_ACCOUNT",""),e("SET_NAME",""),e("SET_AVATAR",""),e("SET_ID",""),Object(c.b)()),t(n)}).catch(function(t){n(t)})})},logout:function(t){var e=t.commit;t.state;return new a.a(function(t,n){Object(s.d)(Object(c.a)()).then(function(n){e("SET_TOKEN",""),e("SET_ACCOUNT",""),e("SET_NAME",""),e("SET_AVATAR",""),e("SET_ID",""),Object(c.b)(),t()}).catch(function(t){n(t)})})},fedLogOut:function(t){var e=t.commit;return new a.a(function(t){e("SET_TOKEN",""),e("SET_ACCOUNT",""),e("SET_NAME",""),e("SET_AVATAR",""),e("SET_ID",""),Object(c.b)(),t()}).catch(function(t){reject(t)})},register:function(t,e){var n=t.commit;return new a.a(function(t,o){Object(s.e)(e.account,e.nickname,e.password).then(function(e){n("SET_TOKEN",e.data.data.sessionToken),Object(c.c)(e.data.data.sessionToken),t()}).catch(function(t){o(t)})})}}})},Iorc:function(t,e){},Jntt:function(t,e){},M9A7:function(t,e,n){"use strict";e.c=function(t,e){var n={email:t,passwordHash:e};return new a.a(function(t,e){r.a.post("/api/session",n).then(function(e){t(e)}).catch(function(t){e(t)})})},e.d=function(t){return new a.a(function(e,n){r.a.delete("/api/session?token="+t).then(function(t){e(t)}).catch(function(t){n(t)})})},e.b=function(t){return new a.a(function(e,n){r.a.get("/api/session?token="+t).then(function(t){var o=t.data.data.sessionUserId;r.a.get("/api/user/"+o).then(function(t){e(t)}).catch(function(t){n(t)})}).catch(function(t){console.log(t),n(t)})})},e.a=function(t){return new a.a(function(e,n){r.a.get("/api/user/"+t).then(function(t){e(t)}).catch(function(t){n(t)})})},e.e=function(t,e,n){var o={email:t,nickname:e,passwordHash:n};return new a.a(function(t,e){r.a.post("/api/user",o).then(function(e){r.a.post("/api/session",o).then(function(e){t(e)})}).catch(function(t){e(t)})})};var o=n("rVsN"),a=n.n(o),i=n("2sCs"),r=n.n(i)},MHXp:function(t,e){},Moy7:function(t,e,n){"use strict";e.a=function(){return localStorage.token},e.c=function(t){return localStorage.token=t},e.b=function(){return localStorage.removeItem("token")}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("fCJj");var o=n("P+0C"),a=n.n(o),i=n("xd7I"),r={name:"GoTop",data:function(){return{topShow:!1}},methods:{toTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,this.topShow=!1},needToTop:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;this.topShow=t>400}},mounted:function(){this.$nextTick(function(){window.addEventListener("scroll",this.needToTop)})}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:this.topShow,expression:"topShow"}],staticClass:"me-to-top",on:{click:this.toTop}},[e("i",{staticClass:"el-icon-caret-top"})])])},staticRenderFns:[]};var s={name:"App",components:{GoTop:n("C7Lr")(r,c,!1,function(t){n("1eUC")},null,null).exports}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),e("go-top")],1)},staticRenderFns:[]};var l=n("C7Lr")(s,u,!1,function(t){n("hJXe")},null,null).exports,f=n("qHZP"),d=n.n(f),h=n("ZWLj"),m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-footer",{staticClass:"me-area"},[e("div",{staticClass:"me-footer"},[e("p",[this._v("Designed by\n      "),e("strong",[e("router-link",{staticClass:"me-login-design-color",attrs:{to:"/"}},[this._v("BSDN")])],1)])])])},staticRenderFns:[]};var p=n("C7Lr")({name:"BaseFooter",data:function(){return{}},methods:{},mounted:function(){}},m,!1,function(t){n("Jntt")},null,null).exports,v={name:"Home",data:function(){return{activeIndex:"/",footerShow:!0}},components:{"base-header":n("33ZO").a,"base-footer":p},beforeRouteEnter:function(t,e,n){n(function(e){e.activeIndex=t.path})},beforeRouteUpdate:function(t,e,n){"/"==t.path?this.footerShow=!0:this.footerShow=!1,this.activeIndex=t.path,n()}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("el-container",[e("base-header",{attrs:{activeIndex:this.activeIndex}}),this._v(" "),e("router-view",{staticClass:"me-container"}),this._v(" "),e("base-footer",{directives:[{name:"show",rawName:"v-show",value:this.footerShow,expression:"footerShow"}]})],1)],1)},staticRenderFns:[]};var _=n("C7Lr")(v,T,!1,function(t){n("Iorc")},null,null).exports,g=n("IcnI"),w=n("Moy7");i.default.use(h.a);var b=new h.a({routes:[{path:"/write/:id?",component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){return t(n("tgdm"))}.bind(null,n)).catch(n.oe)},meta:{requireLogin:!0}},{path:"",name:"Home",component:_,children:[{path:"/",component:function(t){return Promise.all([n.e(0),n.e(3)]).then(function(){return t(n("mlqX"))}.bind(null,n)).catch(n.oe)}},{path:"/log",component:function(t){return n.e(5).then(function(){return t(n("joCn"))}.bind(null,n)).catch(n.oe)}},{path:"/archives/:year?/:month?",component:function(t){return Promise.all([n.e(0),n.e(7)]).then(function(){return t(n("3/TF"))}.bind(null,n)).catch(n.oe)}},{path:"/messageBoard",component:function(t){return n.e(6).then(function(){return t(n("ncpC"))}.bind(null,n)).catch(n.oe)}},{path:"/view/:id",component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){return t(n("u66k"))}.bind(null,n)).catch(n.oe)}},{path:"/:type/all",component:function(t){return Promise.all([n.e(0),n.e(10)]).then(function(){return t(n("4fko"))}.bind(null,n)).catch(n.oe)}},{path:"/:type/:id",component:function(t){return Promise.all([n.e(0),n.e(8)]).then(function(){return t(n("8wPo"))}.bind(null,n)).catch(n.oe)}}]},{path:"/login",component:function(t){return n.e(4).then(function(){return t(n("lmfZ"))}.bind(null,n)).catch(n.oe)}},{path:"/register",component:function(t){return n.e(9).then(function(){return t(n("tcoL"))}.bind(null,n)).catch(n.oe)}}],scrollBehavior:function(t,e,n){return{x:0,y:0}}});b.beforeEach(function(t,e,n){Object(w.a)()?"/login"===t.path?n({path:"/"}):0===g.a.state.account.length?g.a.dispatch("getUserInfo").then(function(t){n()}).catch(function(){n({path:"/"})}):n():t.matched.some(function(t){return t.meta.requireLogin})?d()({type:"warning",showClose:!0,message:"请先登录哦"}):n()});var E=b,S=n("i7YX"),C=n.n(S),x=(n("7xIN"),n("2hfY"));i.default.config.productionTip=!1,i.default.use(a.a),Object.defineProperty(i.default.prototype,"$_",{value:C.a}),i.default.directive("title",function(t,e){document.title=t.dataset.title}),i.default.filter("format",x.a),new i.default({el:"#app",router:E,store:g.a,template:"<App/>",components:{App:l}})},"dLd/":function(t,e,n){t.exports=n.p+"static/img/logo.7535673.png"},fCJj:function(t,e){},hJXe:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.23f6e9e140c5a3c7bdf5.js.map