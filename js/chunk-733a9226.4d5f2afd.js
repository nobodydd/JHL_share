(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-733a9226"],{"057f":function(t,e,n){var i=n("fc6a"),o=n("241c").f,r={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==r.call(t)?a(t):o(i(t))}},"3c71":function(t,e,n){},"3ca3":function(t,e,n){"use strict";var i=n("6547").charAt,o=n("69f3"),r=n("7dd0"),s="String Iterator",a=o.set,c=o.getterFor(s);r(String,"String",(function(t){a(this,{type:s,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,o=e.index;return o>=n.length?{value:void 0,done:!0}:(t=i(n,o),e.index+=t.length,{value:t,done:!1})}))},"5c7f":function(t,e,n){"use strict";var i=n("7aee"),o=n.n(i);o.a},"746f":function(t,e,n){var i=n("428f"),o=n("5135"),r=n("c032"),s=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});o(e,t)||s(e,t,{value:r.f(t)})}},"7aee":function(t,e,n){},"7b0a":function(t,e,n){},"7c7f":function(t,e,n){},a4d3:function(t,e,n){"use strict";var i=n("23e7"),o=n("da84"),r=n("c430"),s=n("83ab"),a=n("4930"),c=n("d039"),u=n("5135"),h=n("e8b5"),f=n("861d"),l=n("825a"),d=n("7b0b"),p=n("fc6a"),y=n("c04e"),b=n("5c6c"),g=n("7c73"),m=n("df75"),v=n("241c"),w=n("057f"),S=n("7418"),x=n("06cf"),O=n("9bf2"),j=n("d1e7"),k=n("9112"),P=n("6eeb"),C=n("5692"),$=n("f772"),N=n("d012"),B=n("90e3"),T=n("b622"),A=n("c032"),E=n("746f"),D=n("d44e"),_=n("69f3"),K=n("b727").forEach,I=$("hidden"),F="Symbol",J="prototype",q=T("toPrimitive"),M=_.set,z=_.getterFor(F),V=Object[J],G=o.Symbol,L=o.JSON,R=L&&L.stringify,U=x.f,H=O.f,Q=w.f,W=j.f,X=C("symbols"),Y=C("op-symbols"),Z=C("string-to-symbol-registry"),tt=C("symbol-to-string-registry"),et=C("wks"),nt=o.QObject,it=!nt||!nt[J]||!nt[J].findChild,ot=s&&c((function(){return 7!=g(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=U(V,e);i&&delete V[e],H(t,e,n),i&&t!==V&&H(V,e,i)}:H,rt=function(t,e){var n=X[t]=g(G[J]);return M(n,{type:F,tag:t,description:e}),s||(n.description=e),n},st=a&&"symbol"==typeof G.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},at=function(t,e,n){t===V&&at(Y,e,n),l(t);var i=y(e,!0);return l(n),u(X,i)?(n.enumerable?(u(t,I)&&t[I][i]&&(t[I][i]=!1),n=g(n,{enumerable:b(0,!1)})):(u(t,I)||H(t,I,b(1,{})),t[I][i]=!0),ot(t,i,n)):H(t,i,n)},ct=function(t,e){l(t);var n=p(e),i=m(n).concat(dt(n));return K(i,(function(e){s&&!ht.call(n,e)||at(t,e,n[e])})),t},ut=function(t,e){return void 0===e?g(t):ct(g(t),e)},ht=function(t){var e=y(t,!0),n=W.call(this,e);return!(this===V&&u(X,e)&&!u(Y,e))&&(!(n||!u(this,e)||!u(X,e)||u(this,I)&&this[I][e])||n)},ft=function(t,e){var n=p(t),i=y(e,!0);if(n!==V||!u(X,i)||u(Y,i)){var o=U(n,i);return!o||!u(X,i)||u(n,I)&&n[I][i]||(o.enumerable=!0),o}},lt=function(t){var e=Q(p(t)),n=[];return K(e,(function(t){u(X,t)||u(N,t)||n.push(t)})),n},dt=function(t){var e=t===V,n=Q(e?Y:p(t)),i=[];return K(n,(function(t){!u(X,t)||e&&!u(V,t)||i.push(X[t])})),i};a||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=B(t),n=function(t){this===V&&n.call(Y,t),u(this,I)&&u(this[I],e)&&(this[I][e]=!1),ot(this,e,b(1,t))};return s&&it&&ot(V,e,{configurable:!0,set:n}),rt(e,t)},P(G[J],"toString",(function(){return z(this).tag})),j.f=ht,O.f=at,x.f=ft,v.f=w.f=lt,S.f=dt,s&&(H(G[J],"description",{configurable:!0,get:function(){return z(this).description}}),r||P(V,"propertyIsEnumerable",ht,{unsafe:!0})),A.f=function(t){return rt(T(t),t)}),i({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:G}),K(m(et),(function(t){E(t)})),i({target:F,stat:!0,forced:!a},{for:function(t){var e=String(t);if(u(Z,e))return Z[e];var n=G(e);return Z[e]=n,tt[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(u(tt,t))return tt[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),i({target:"Object",stat:!0,forced:!a,sham:!s},{create:ut,defineProperty:at,defineProperties:ct,getOwnPropertyDescriptor:ft}),i({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:lt,getOwnPropertySymbols:dt}),i({target:"Object",stat:!0,forced:c((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(d(t))}}),L&&i({target:"JSON",stat:!0,forced:!a||c((function(){var t=G();return"[null]"!=R([t])||"{}"!=R({a:t})||"{}"!=R(Object(t))}))},{stringify:function(t){var e,n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e=i[1],(f(e)||void 0!==t)&&!st(t))return h(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),i[1]=e,R.apply(L,i)}}),G[J][q]||k(G[J],q,G[J].valueOf),D(G,F),N[I]=!0},bf60:function(t,e,n){},bfab:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%",background:"#FFFFFF",width:"100%"}},[n("page-header",{on:{"btn-action":t.openApp}}),n("div",{staticClass:"contentDetail"},[t._m(0),n("div",[n("div",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v("请填写您在物业预留的产权人手机号")]),n("van-divider"),n("van-row",{attrs:{type:"flex",justify:"space-between"},on:{click:t.showKeyBoardAction}},t._l(11,(function(e){return n("van-col",{key:e,staticClass:"phoneItem",attrs:{span:"2"}},[t._v(t._s(t.phoneDatas.length>=e?t.phoneDatas[e-1]:""))])})),1)],1),n("div",{staticClass:"bottomView"},[n("div",{staticClass:"nextBtn",on:{click:t.nextSetp}},[t._v("下一步")])]),n("div",{staticClass:"tipView"},[n("span",{staticClass:"tips",on:{click:t.pusToChangeGuide}},[t._v("我是产权人,可是我换手机号了")])]),n("van-number-keyboard",{attrs:{show:t.showKeyboard},on:{input:t.onInput,delete:t.onDelete,blur:function(e){t.showKeyboard=!1}}})],1)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-bottom":"40px"}},[n("div",{staticClass:"title"},[t._v("验证手机号")]),n("span",{staticStyle:{"font-size":"16px"}},[t._v("通过验证后审核结果立即生效")])])}],r=(n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),n("68ef"),n("7c7f"),n("2638")),s=n.n(r),a=n("d282"),c=n("ba31"),u=Object(a["a"])("divider"),h=u[0],f=u[1];function l(t,e,n,i){var o;return t("div",s()([{attrs:{role:"separator"},style:{borderColor:e.borderColor},class:f((o={dashed:e.dashed,hairline:e.hairline},o["content-"+e.contentPosition]=n.default,o))},Object(c["b"])(i,!0)]),[n.default&&n.default()])}l.props={dashed:Boolean,hairline:{type:Boolean,default:!0},contentPosition:{type:String,default:"center"}};var d=h(l),p=(n("3c71"),n("1325")),y=n("b1d2"),b=n("5fbe"),g=n("3875"),m=Object(a["a"])("key"),v=m[0],w=m[1],S=v({mixins:[g["a"]],props:{type:String,text:[Number,String],theme:{type:Array,default:function(){return[]}}},data:function(){return{active:!1}},computed:{className:function(){var t=this.theme.slice(0);return this.active&&t.push("active"),this.type&&t.push(this.type),w(t)}},methods:{onTouchStart:function(t){t.stopPropagation(),this.touchStart(t),this.active=!0},onTouchMove:function(t){this.touchMove(t),this.direction&&(this.active=!1)},onTouchEnd:function(){this.active&&(this.active=!1,this.$emit("press",this.text,this.type))}},render:function(){var t=arguments[0];return t("i",{attrs:{role:"button",tabindex:"0"},class:[y["a"],this.className],on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots("default")||this.text])}}),x=Object(a["a"])("number-keyboard"),O=x[0],j=x[1],k=x[2],P=["blue","big"],C=["delete","big","gray"],$=O({mixins:[Object(b["a"])((function(t){this.hideOnClickOutside&&t(document.body,"touchstart",this.onBlur)}))],model:{event:"update:value"},props:{show:Boolean,title:String,closeButtonText:String,deleteButtonText:String,theme:{type:String,default:"default"},value:{type:String,default:""},extraKey:{type:String,default:""},maxlength:{type:[Number,String],default:Number.MAX_VALUE},zIndex:{type:Number,default:100},transition:{type:Boolean,default:!0},showDeleteKey:{type:Boolean,default:!0},hideOnClickOutside:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!0}},watch:{show:function(){this.transition||this.$emit(this.show?"show":"hide")}},computed:{keys:function(){for(var t=[],e=1;e<=9;e++)t.push({text:e});switch(this.theme){case"default":t.push({text:this.extraKey,theme:["gray"],type:"extra"},{text:0},{text:this.deleteText,theme:["gray"],type:"delete"});break;case"custom":t.push({text:0,theme:["middle"]},{text:this.extraKey,type:"extra"});break}return t},deleteText:function(){return this.deleteButtonText||k("delete")}},methods:{onBlur:function(){this.$emit("blur")},onClose:function(){this.$emit("close"),this.onBlur()},onAnimationEnd:function(){this.$emit(this.show?"show":"hide")},onPress:function(t,e){if(""!==t){var n=this.value;"delete"===e?(this.$emit("delete"),this.$emit("update:value",n.slice(0,n.length-1))):"close"===e?this.onClose():n.length<this.maxlength&&(this.$emit("input",t),this.$emit("update:value",n+t))}}},render:function(){var t=this,e=arguments[0],n=this.title,i=this.theme,o=this.onPress,r=this.closeButtonText,s=this.slots("title-left"),a=r&&"default"===i,c=n||a||s,u=c&&e("div",{class:[j("title"),y["e"]]},[s&&e("span",{class:j("title-left")},[s]),n&&e("span",[n]),a&&e("span",{attrs:{role:"button",tabindex:"0"},class:j("close"),on:{click:this.onClose}},[r])]),h=this.keys.map((function(n){return e(S,{key:n.text,attrs:{text:n.text,type:n.type,theme:n.theme},on:{press:o}},["delete"===n.type&&t.slots("delete"),"extra"===n.type&&t.slots("extra-key")])})),f="custom"===i&&e("div",{class:j("sidebar")},[e(S,{attrs:{text:this.deleteText,type:"delete",theme:C},on:{press:o}},[this.slots("delete")]),e(S,{attrs:{text:r,type:"close",theme:P},on:{press:o}})]);return e("transition",{attrs:{name:this.transition?"van-slide-up":""}},[e("div",{directives:[{name:"show",value:this.show}],style:{zIndex:this.zIndex},class:j([i,{"safe-area-inset-bottom":this.safeAreaInsetBottom}]),on:{touchstart:p["d"],animationend:this.onAnimationEnd,webkitAnimationEnd:this.onAnimationEnd}},[u,e("div",{class:j("body")},[h,f])])])}}),N=(n("bf60"),Object(a["a"])("row")),B=N[0],T=N[1],A=B({props:{type:String,align:String,justify:String,tag:{type:String,default:"div"},gutter:{type:[Number,String],default:0}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,e=arguments[0],n=this.align,i=this.justify,o="flex"===this.type,r="-"+Number(this.gutter)/2+"px",s=this.gutter?{marginLeft:r,marginRight:r}:{};return e(this.tag,{style:s,class:T((t={flex:o},t["align-"+n]=o&&n,t["justify-"+i]=o&&i,t)),on:{click:this.onClick}},[this.slots()])}}),E=(n("7b0a"),Object(a["a"])("col")),D=E[0],_=E[1],K=D({props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{gutter:function(){return this.$parent&&Number(this.$parent.gutter)||0},style:function(){var t=this.gutter/2+"px";return this.gutter?{paddingLeft:t,paddingRight:t}:{}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,e=arguments[0],n=this.span,i=this.offset;return e(this.tag,{style:this.style,class:_((t={},t[n]=n,t["offset-"+i]=i,t)),on:{click:this.onClick}},[this.slots()])}}),I=n("2b0e"),F=n("a39b"),J=n("e181");I["a"].use(A).use(K),I["a"].use($),I["a"].use(d);var q={name:"VerifyPhone",components:{PageHeader:F["a"]},data:function(){return{showKeyboard:!1,phoneDatas:[],icon:{xwjlogo:n("ecd5")}}},methods:{showKeyBoardAction:function(){this.showKeyboard||(this.showKeyboard=!0)},onInput:function(t){console.log(t),this.phoneDatas.length<11&&this.phoneDatas.push(t)},onDelete:function(){this.phoneDatas.length>0&&this.phoneDatas.pop()},nextSetp:function(){this.btnEnable?this.verifyPhoneNum():this.$toast("请输入正确的手机号")},verifyPhoneNum:function(){var t=this,e=JSON.parse(this.$route.query.data),n={uuid:e.uuid,phone:this.phone};Object(J["d"])(n).then((function(e){t.$router.push({name:"commitPage",query:{data:t.$route.query.data,type:t.$route.query.type,phone:t.phone}})})).catch((function(t){console.log(t)}))},pusToChangeGuide:function(){this.$router.push("changeGuide")},openApp:function(){this.shareOpenApp("myfamily")}},mounted:function(){var t=this;console.log(this.$route.query),console.log(JSON.parse(this.$route.query.data).uuid),setTimeout((function(){t.androidShareOpenApp("myfamily")}),500)},computed:{phone:function(){var t="",e=!0,n=!1,i=void 0;try{for(var o,r=this.phoneDatas[Symbol.iterator]();!(e=(o=r.next()).done);e=!0){var s=o.value;t+=s}}catch(a){n=!0,i=a}finally{try{e||null==r.return||r.return()}finally{if(n)throw i}}return t},btnEnable:function(){return 11==this.phoneDatas.length}}},M=q,z=(n("5c7f"),n("2877")),V=Object(z["a"])(M,i,o,!1,null,"05d3e696",null);e["default"]=V.exports},c032:function(t,e,n){e.f=n("b622")},d28b:function(t,e,n){var i=n("746f");i("iterator")},ddb0:function(t,e,n){var i=n("da84"),o=n("fdbc"),r=n("e260"),s=n("9112"),a=n("b622"),c=a("iterator"),u=a("toStringTag"),h=r.values;for(var f in o){var l=i[f],d=l&&l.prototype;if(d){if(d[c]!==h)try{s(d,c,h)}catch(y){d[c]=h}if(d[u]||s(d,u,f),o[f])for(var p in r)if(d[p]!==r[p])try{s(d,p,r[p])}catch(y){d[p]=r[p]}}}},e01a:function(t,e,n){"use strict";var i=n("23e7"),o=n("83ab"),r=n("da84"),s=n("5135"),a=n("861d"),c=n("9bf2").f,u=n("e893"),h=r.Symbol;if(o&&"function"==typeof h&&(!("description"in h.prototype)||void 0!==h().description)){var f={},l=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof l?new h(t):void 0===t?h():h(t);return""===t&&(f[e]=!0),e};u(l,h);var d=l.prototype=h.prototype;d.constructor=l;var p=d.toString,y="Symbol(test)"==String(h("test")),b=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(s(f,t))return"";var n=y?e.slice(7,-1):e.replace(b,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:l})}},e181:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return c}));n("d3b7"),n("e7e5");var i=n("d399"),o=n("ba6a"),r=function(t){return console.log(t),new Promise((function(e,n){o["a"].get("xwj-property-house/house/binding/getMemberBindingDetail",t).then((function(t){e(t)})).catch((function(t){Object(i["a"])("网络异常，请稍后重试！"),n(t)}))}))},s=function(t){return new Promise((function(e,n){o["a"].post("xwj-property-house/house/binding/checkPropertyOwnerPhone",t,!1).then((function(t){"0"==t.resultCode?e(t.data):(Object(i["a"])(t.msg),n(t.msg))})).catch((function(t){Object(i["a"])("网络异常，请稍后重试！"),n(t)}))}))},a=function(t){return new Promise((function(e,n){o["a"].post("xwj-property-house/house/binding/checkPhoneVerificationCode",t,!1).then((function(t){"0"==t.resultCode?e(t.data):(Object(i["a"])(t.msg),n(t.msg))})).catch((function(t){Object(i["a"])("网络异常，请稍后重试！"),n(t)}))}))},c=function(t){return new Promise((function(e,n){o["a"].post("hisense-systemServer/login/getMsgCode.do",{data:JSON.stringify(t)},!0,"homeUrl").then((function(t){1==t.success?e(t):(Object(i["a"])(t.msg),n(t.msg))})).catch((function(t){Object(i["a"])("网络异常，请稍后重试！"),n(t)}))}))}}}]);
//# sourceMappingURL=chunk-733a9226.4d5f2afd.js.map