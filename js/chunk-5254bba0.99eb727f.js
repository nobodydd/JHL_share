(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5254bba0"],{"057f":function(t,e,n){var o=n("fc6a"),r=n("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?s(t):r(o(t))}},"3ca3":function(t,e,n){"use strict";var o=n("6547").charAt,r=n("69f3"),i=n("7dd0"),a="String Iterator",s=r.set,c=r.getterFor(a);i(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,r=e.index;return r>=n.length?{value:void 0,done:!0}:(t=o(n,r),e.index+=t.length,{value:t,done:!1})}))},"746f":function(t,e,n){var o=n("428f"),r=n("5135"),i=n("c032"),a=n("9bf2").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});r(e,t)||a(e,t,{value:i.f(t)})}},"94b1":function(t,e,n){},a106:function(t,e,n){"use strict";var o=n("94b1"),r=n.n(o);r.a},a4d3:function(t,e,n){"use strict";var o=n("23e7"),r=n("da84"),i=n("c430"),a=n("83ab"),s=n("4930"),c=n("d039"),u=n("5135"),f=n("e8b5"),l=n("861d"),d=n("825a"),h=n("7b0b"),p=n("fc6a"),b=n("c04e"),y=n("5c6c"),v=n("7c73"),g=n("df75"),m=n("241c"),w=n("057f"),S=n("7418"),O=n("06cf"),j=n("9bf2"),x=n("d1e7"),P=n("9112"),D=n("6eeb"),$=n("5692"),_=n("f772"),k=n("d012"),C=n("90e3"),F=n("b622"),N=n("c032"),E=n("746f"),q=n("d44e"),A=n("69f3"),K=n("b727").forEach,J=_("hidden"),I="Symbol",T="prototype",B=F("toPrimitive"),G=A.set,V=A.getterFor(I),z=Object[T],H=r.Symbol,Q=r.JSON,W=Q&&Q.stringify,L=O.f,M=j.f,R=w.f,U=x.f,X=$("symbols"),Y=$("op-symbols"),Z=$("string-to-symbol-registry"),tt=$("symbol-to-string-registry"),et=$("wks"),nt=r.QObject,ot=!nt||!nt[T]||!nt[T].findChild,rt=a&&c((function(){return 7!=v(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=L(z,e);o&&delete z[e],M(t,e,n),o&&t!==z&&M(z,e,o)}:M,it=function(t,e){var n=X[t]=v(H[T]);return G(n,{type:I,tag:t,description:e}),a||(n.description=e),n},at=s&&"symbol"==typeof H.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},st=function(t,e,n){t===z&&st(Y,e,n),d(t);var o=b(e,!0);return d(n),u(X,o)?(n.enumerable?(u(t,J)&&t[J][o]&&(t[J][o]=!1),n=v(n,{enumerable:y(0,!1)})):(u(t,J)||M(t,J,y(1,{})),t[J][o]=!0),rt(t,o,n)):M(t,o,n)},ct=function(t,e){d(t);var n=p(e),o=g(n).concat(ht(n));return K(o,(function(e){a&&!ft.call(n,e)||st(t,e,n[e])})),t},ut=function(t,e){return void 0===e?v(t):ct(v(t),e)},ft=function(t){var e=b(t,!0),n=U.call(this,e);return!(this===z&&u(X,e)&&!u(Y,e))&&(!(n||!u(this,e)||!u(X,e)||u(this,J)&&this[J][e])||n)},lt=function(t,e){var n=p(t),o=b(e,!0);if(n!==z||!u(X,o)||u(Y,o)){var r=L(n,o);return!r||!u(X,o)||u(n,J)&&n[J][o]||(r.enumerable=!0),r}},dt=function(t){var e=R(p(t)),n=[];return K(e,(function(t){u(X,t)||u(k,t)||n.push(t)})),n},ht=function(t){var e=t===z,n=R(e?Y:p(t)),o=[];return K(n,(function(t){!u(X,t)||e&&!u(z,t)||o.push(X[t])})),o};s||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=C(t),n=function(t){this===z&&n.call(Y,t),u(this,J)&&u(this[J],e)&&(this[J][e]=!1),rt(this,e,y(1,t))};return a&&ot&&rt(z,e,{configurable:!0,set:n}),it(e,t)},D(H[T],"toString",(function(){return V(this).tag})),x.f=ft,j.f=st,O.f=lt,m.f=w.f=dt,S.f=ht,a&&(M(H[T],"description",{configurable:!0,get:function(){return V(this).description}}),i||D(z,"propertyIsEnumerable",ft,{unsafe:!0})),N.f=function(t){return it(F(t),t)}),o({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:H}),K(g(et),(function(t){E(t)})),o({target:I,stat:!0,forced:!s},{for:function(t){var e=String(t);if(u(Z,e))return Z[e];var n=H(e);return Z[e]=n,tt[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(u(tt,t))return tt[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),o({target:"Object",stat:!0,forced:!s,sham:!a},{create:ut,defineProperty:st,defineProperties:ct,getOwnPropertyDescriptor:lt}),o({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:dt,getOwnPropertySymbols:ht}),o({target:"Object",stat:!0,forced:c((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(h(t))}}),Q&&o({target:"JSON",stat:!0,forced:!s||c((function(){var t=H();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}))},{stringify:function(t){var e,n,o=[t],r=1;while(arguments.length>r)o.push(arguments[r++]);if(n=e=o[1],(l(e)||void 0!==t)&&!at(t))return f(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),o[1]=e,W.apply(Q,o)}}),H[T][B]||P(H[T],B,H[T].valueOf),q(H,I),k[J]=!0},bfab:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%",background:"#FFFFFF",width:"100%"}},[n("page-header",{on:{"btn-action":t.openApp}}),n("div",{staticClass:"contentDetail"},[t._m(0),n("div",[n("div",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v("请填写您在物业预留的产权人手机号")]),n("van-divider"),n("van-row",{attrs:{type:"flex",justify:"space-between"},on:{click:t.showKeyBoardAction}},t._l(11,(function(e){return n("van-col",{key:e,staticClass:"phoneItem",attrs:{span:"2"}},[t._v(t._s(t.phoneDatas.length>=e?t.phoneDatas[e-1]:""))])})),1)],1),n("div",{staticClass:"bottomView"},[n("div",{staticClass:"nextBtn",on:{click:t.nextSetp}},[t._v("下一步")])]),n("div",{staticClass:"tipView"},[n("span",{staticClass:"tips",on:{click:t.pusToChangeGuide}},[t._v("我是产权人,可是我换手机号了")])]),n("van-number-keyboard",{attrs:{show:t.showKeyboard},on:{input:t.onInput,delete:t.onDelete,blur:function(e){t.showKeyboard=!1}}})],1)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-bottom":"40px"}},[n("div",{staticClass:"title"},[t._v("验证手机号")]),n("span",{staticStyle:{"font-size":"16px"}},[t._v("通过验证后审核结果立即生效")])])}],i=(n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b0e")),a=n("9ed2"),s=n("7bd9"),c=n("d1e1"),u=n("9ffb"),f=n("a39b"),l=n("e181");i["a"].use(c["a"]).use(u["a"]),i["a"].use(s["a"]),i["a"].use(a["a"]);var d={name:"VerifyPhone",components:{PageHeader:f["a"]},data:function(){return{showKeyboard:!1,phoneDatas:[],icon:{xwjlogo:n("ecd5")}}},methods:{showKeyBoardAction:function(){this.showKeyboard||(this.showKeyboard=!0)},onInput:function(t){console.log(t),this.phoneDatas.length<11&&this.phoneDatas.push(t)},onDelete:function(){this.phoneDatas.length>0&&this.phoneDatas.pop()},nextSetp:function(){this.btnEnable?this.verifyPhoneNum():this.$toast("请输入正确的手机号")},verifyPhoneNum:function(){var t=this,e=JSON.parse(this.$route.query.data),n={uuid:e.uuid,phone:this.phone};Object(l["f"])(n).then((function(e){t.$router.push({name:"commitPage",query:{data:t.$route.query.data,type:t.$route.query.type,phone:t.phone,identify:t.$route.query.identify}})})).catch((function(t){console.log(t)}))},pusToChangeGuide:function(){this.$router.push("changeGuide")},openApp:function(){this.shareOpenApp("myfamily")}},mounted:function(){console.log(this.$route.query),console.log(JSON.parse(this.$route.query.data).uuid),this.androidShareOpenApp("myfamily")},computed:{phone:function(){var t="",e=!0,n=!1,o=void 0;try{for(var r,i=this.phoneDatas[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var a=r.value;t+=a}}catch(s){n=!0,o=s}finally{try{e||null==i.return||i.return()}finally{if(n)throw o}}return t},btnEnable:function(){return 11==this.phoneDatas.length}}},h=d,p=(n("a106"),n("2877")),b=Object(p["a"])(h,o,r,!1,null,"22dffa6a",null);e["default"]=b.exports},c032:function(t,e,n){e.f=n("b622")},d28b:function(t,e,n){var o=n("746f");o("iterator")},ddb0:function(t,e,n){var o=n("da84"),r=n("fdbc"),i=n("e260"),a=n("9112"),s=n("b622"),c=s("iterator"),u=s("toStringTag"),f=i.values;for(var l in r){var d=o[l],h=d&&d.prototype;if(h){if(h[c]!==f)try{a(h,c,f)}catch(b){h[c]=f}if(h[u]||a(h,u,l),r[l])for(var p in i)if(h[p]!==i[p])try{a(h,p,i[p])}catch(b){h[p]=i[p]}}}},e01a:function(t,e,n){"use strict";var o=n("23e7"),r=n("83ab"),i=n("da84"),a=n("5135"),s=n("861d"),c=n("9bf2").f,u=n("e893"),f=i.Symbol;if(r&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var h=d.prototype=f.prototype;h.constructor=d;var p=h.toString,b="Symbol(test)"==String(f("test")),y=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(a(l,t))return"";var n=b?e.slice(7,-1):e.replace(y,"$1");return""===n?void 0:n}}),o({global:!0,forced:!0},{Symbol:d})}}}]);
//# sourceMappingURL=chunk-5254bba0.99eb727f.js.map