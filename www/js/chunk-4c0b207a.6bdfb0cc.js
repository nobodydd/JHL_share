(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c0b207a"],{"251e":function(t,i,n){"use strict";var e=n("5831"),s=n.n(e);s.a},2627:function(t,i,n){},"2f21":function(t,i,n){"use strict";var e=n("79e5");t.exports=function(t,i){return!!t&&e((function(){i?t.call(null,(function(){}),1):t.call(null)}))}},"4f11":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAqhJREFUeAHtms1L1UEUhtX8IJUwEEGiRKggEqGNiwpx08qiaOEmMKE2QctyIfQXRGAtxJ0o1CYEEaTCRYsgqEUgRAWChIohRBpEH1TengMOHIZWwoHD3HPgZebcO8yc5x283pnframJCAfCgXAgHAgHwoFwIBwIB8KBcMChA5VKpRu9QJto2GGJdiUB3Is+oRTrdqs5mxnifrSdyHfbGWdl2pQD7CX0I4OfJq+3WdHRrEBeR38y+LvktY7KtCkFyLEMfIf8ls1qjmaV3UX3M/jf5FcdlWlTCpAN6FEG/5180GZFR7MC2YqeZfBfyE87KtOmFCDb0esMfp38pM2KjmYFsgt9QDokP+KoTJtSgOxBstM6XpG026zoaFYgzyD5G9fxlKTFUZk2pQB5Hsmnu46HJA02KzqaFcgRJP/XdYyTVMW3u1FNvdsfc7Q/NqXI7qJ7Gbx8x79ms6KjWYGsRzMZvJzuLjoq06YUIJvRQgYv5/p+mxWdzQroXAa/Qd7rrEy7coBdzQyYsFvN4czAX0H5hcYkr9U5LNemJGAvo59Ix2OSRpsVHc4K7AD6qh2gv4haHZZrUxKwp5Dc5+uQI3D5B59kKbBH0Yp2gP57dDiNKb4FthMtIR1rJCeKh0+AwLYhecSl4zNJXxpTfAvsfjSvHaD/DZ0rHj4BAivnhCmk4xfJUBpTfAusnBTlaY+OvyQ3iofXgADfRvL0R8cdPab4PuT/uy16wOvl3xal3QX2AsrvC+VpUfn3hcqEswBvIR1PSJrTmOJbYOUXIXJ/oOMlycHi4RMgsN1oWTtA/y06lMYU3wLbgd4gHR9JjhUPnwCBPYCeIx1L6f2qaCFvQrPKgXdVAa4hgd+HbiL5Bclx/V70w4FwIBwIB8KBcCAcCAfCgXBgzw78A2Wj4+ezw0gaAAAAAElFTkSuQmCC"},"55dd":function(t,i,n){"use strict";var e=n("5ca1"),s=n("d8e8"),a=n("4bf8"),o=n("79e5"),r=[].sort,c=[1,2,3];e(e.P+e.F*(o((function(){c.sort(void 0)}))||!o((function(){c.sort(null)}))||!n("2f21")(r)),"Array",{sort:function(t){return void 0===t?r.call(a(this)):r.call(a(this),s(t))}})},"55e8":function(t,i,n){t.exports=n.p+"www/img/noSource.ef090043.png"},"56e4":function(t,i,n){"use strict";n.d(i,"b",(function(){return s})),n.d(i,"a",(function(){return a})),n.d(i,"d",(function(){return o})),n.d(i,"f",(function(){return r})),n.d(i,"c",(function(){return c})),n.d(i,"e",(function(){return l}));var e=n("ba6a"),s=function(t){return new Promise((function(i,n){e["a"].post("/hisense-systemServer/app/property/propertyActivitiesController/getActiMsg.do",{data:JSON.stringify(t)},!0,"homeUrl").then((function(t){i(t)})).catch((function(t){n(t)}))}))},a=function(t){return new Promise((function(i,n){e["a"].post("/hisense-systemServer/app/property/propertyActivitiesController/getActiMsgByActiCode.do",{data:JSON.stringify(t)},!0,"homeUrl").then((function(t){i(t)})).catch((function(t){n(t)}))}))},o=function(t){return new Promise((function(i,n){e["a"].post("/hisense-systemServer/app/property/propertyActivitiesController/getDetailMsgByDetailCode.do",{data:JSON.stringify(t)},!0,"homeUrl").then((function(t){i(t)})).catch((function(t){n(t)}))}))},r=function(t){return new Promise((function(i,n){e["a"].post("/hisense-systemServer/app/property/propertyActivitiesController/updateCloseSignFlag.do",{data:JSON.stringify(t)},!0,"homeUrl").then((function(t){i(t)})).catch((function(t){n(t)}))}))},c=function(t){return new Promise((function(i,n){e["a"].post("/hisense-systemServer/app/property/propertyActivitiesController/getOwnerSignInfo.do",{data:JSON.stringify(t)},!0,"homeUrl").then((function(t){i(t)})).catch((function(t){n(t)}))}))},l=function(t){return new Promise((function(i,n){e["a"].post("/hisense-systemServer/app/property/propertyActivitiesController/updateSceneFlag.do",{data:JSON.stringify(t)},!0,"homeUrl").then((function(t){i(t)})).catch((function(t){n(t)}))}))}},5831:function(t,i,n){},"95c9":function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"activity-register-page"},[n("navigation-bar",{staticClass:"register-nav-bar",attrs:{pageName:t.title,border:!1},on:{onLeftClick:t.onBack}}),n("div",{staticClass:"register-content"},[n("div",{staticClass:"register-tip"},[n("div",{staticClass:"acivity-name"},[n("span",[t._v(t._s(t.activityInfo.DETAIL_NAME))])]),n("div",{staticClass:"register-progress"},[n("progress",{attrs:{max:"100"},domProps:{value:t.activitySignupPercentage(t.activityInfo)}}),n("div",[t._v(t._s(t.activityInfo.ENROL_CNTS)+"/"+t._s(t.activityInfo.LIMIT_MAX)+"人")])])]),n("div",{staticClass:"grayBar"}),n("van-tabs",{attrs:{swipeable:"",sticky:"","offset-top":44,color:"#00d8d1"},model:{value:t.activeTab,callback:function(i){t.activeTab=i},expression:"activeTab"}},[n("van-tab",{attrs:{title:"未签到"}},[n("van-index-bar",{attrs:{"index-list":t.nosigninIndex}},t._l(t.nosigninIndex,(function(i){return n("div",{key:i},[n("van-index-anchor",{attrs:{index:i}}),t._l(t.nosigninData[i],(function(i,e){return n("div",{key:e,staticClass:"register-cell"},[n("div",{staticClass:"owner-name"},[t._v(t._s(i.OWNER_NAME))]),n("div",{staticClass:"owner-info",style:{width:0==t.activityInfo.CLOSE_SIGN_FLAG?"176px":"276px"}},[n("div",{staticClass:"owner-address"},[t._v(t._s(i.BUILD_NAME)+"栋-"+t._s(i.UNIT_NO)+"单元-"+t._s(i.ROOM_NAME)+"室")]),n("div",{staticClass:"owner-signinnumber"},[t._v("报名人数："+t._s(i.ENROL_CNT))]),n("a",{staticClass:"owner-phonenumber",attrs:{href:"tel:"+i.PHONE}},[n("div",[t._v(t._s(i.PHONE))]),n("van-icon",{attrs:{name:"phone-o",size:"26px",color:"#FF0000"}})],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.activityInfo.CLOSE_SIGN_FLAG,expression:"activityInfo.CLOSE_SIGN_FLAG==0 ? true : false"}],staticClass:"action-button",on:{click:function(n){return t.signIn(i.OWNER_CODE)}}},[t._v("签到")])])}))],2)})),0),n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.nosigninIndex.length,expression:"nosigninIndex.length == 0"}],staticClass:"no-list"},[n("img",{attrs:{src:t.noSourceImg,alt:""}}),n("div",[t._v("暂无未签到信息")])])],1),n("van-tab",{attrs:{title:"已签到"}},[n("van-index-bar",{attrs:{"index-list":t.signinIndex}},t._l(t.signinIndex,(function(i){return n("div",{key:i},[n("van-index-anchor",{attrs:{index:i}}),t._l(t.signinData[i],(function(i,e){return n("div",{key:e,staticClass:"register-cell"},[n("div",{staticClass:"owner-name"},[t._v(t._s(i.OWNER_NAME))]),n("div",{staticClass:"owner-info",style:{width:0==t.activityInfo.CLOSE_SIGN_FLAG?"176px":"276px"}},[n("div",{staticClass:"owner-address"},[t._v(t._s(i.BUILD_NAME)+"栋-"+t._s(i.UNIT_NO)+"单元-"+t._s(i.ROOM_NAME)+"室")]),n("div",{staticClass:"owner-signinnumber"},[t._v("报名人数："+t._s(i.ENROL_CNT))]),n("a",{staticClass:"owner-phonenumber",attrs:{href:"tel:"+i.PHONE}},[n("div",[t._v(t._s(i.PHONE))]),n("van-icon",{attrs:{name:"phone-o",size:"26px",color:"#FF0000"}})],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.activityInfo.CLOSE_SIGN_FLAG,expression:"activityInfo.CLOSE_SIGN_FLAG==0"}],staticClass:"action-button",on:{click:function(n){return t.cancel(i.OWNER_CODE)}}},[t._v("取消")])])}))],2)})),0),n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.signinIndex.length,expression:"signinIndex.length == 0"}],staticClass:"no-list"},[n("img",{attrs:{src:t.noSourceImg,alt:""}}),n("div",[t._v("暂无签到信息")])])],1)],1)],1)],1)},s=[],a=(n("c5f6"),n("55dd"),n("56e4")),o=n("da6f"),r=n("2b0e"),c=n("d399"),l=n("0b33"),h=n("5e46"),u=n("d282"),d=n("a142"),f=n("02de"),v=n("1325"),g=n("a8c1"),p=n("3875"),I=n("9884"),y=n("5fbe");function m(){for(var t=[],i="A".charCodeAt(0),n=0;n<26;n++)t.push(String.fromCharCode(i+n));return t}var x=Object(u["a"])("index-bar"),C=x[0],A=x[1],E=C({mixins:[p["a"],Object(I["b"])("vanIndexBar"),Object(y["a"])((function(t){this.scroller||(this.scroller=Object(g["d"])(this.$el)),t(this.scroller,"scroll",this.onScroll)}))],props:{zIndex:[Number,String],highlightColor:String,sticky:{type:Boolean,default:!0},stickyOffsetTop:{type:Number,default:0},indexList:{type:Array,default:m}},data:function(){return{activeAnchorIndex:null}},computed:{sidebarStyle:function(){if(Object(d["b"])(this.zIndex))return{zIndex:this.zIndex+1}},highlightStyle:function(){var t=this.highlightColor;if(t)return{color:t}}},watch:{indexList:function(){this.$nextTick(this.onScroll)}},methods:{onScroll:function(){var t=this;if(!Object(f["a"])(this.$el)){var i=Object(g["c"])(this.scroller),n=this.getScrollerRect(),e=this.children.map((function(i){return{height:i.height,top:t.getElementTop(i.$el,n)}})),s=this.getActiveAnchorIndex(i,e);this.activeAnchorIndex=this.indexList[s],this.sticky&&this.children.forEach((function(a,o){if(o===s||o===s-1){var r=a.$el.getBoundingClientRect();a.left=r.left,a.width=r.width}else a.left=null,a.width=null;if(o===s)a.active=!0,a.top=Math.max(t.stickyOffsetTop,e[o].top-i)+n.top;else if(o===s-1){var c=e[s].top-i;a.active=c>0,a.top=c+n.top-a.height}else a.active=!1}))}},getScrollerRect:function(){return this.scroller.getBoundingClientRect?this.scroller.getBoundingClientRect():{top:0,left:0}},getElementTop:function(t,i){var n=this.scroller;if(n===window||n===document.body)return Object(g["a"])(t);var e=t.getBoundingClientRect();return e.top-i.top+Object(g["c"])(n)},getActiveAnchorIndex:function(t,i){for(var n=this.children.length-1;n>=0;n--){var e=n>0?i[n-1].height:0,s=this.sticky?e+this.stickyOffsetTop:0;if(t+s>=i[n].top)return n}return-1},onClick:function(t){this.scrollToElement(t.target)},onTouchMove:function(t){if(this.touchMove(t),"vertical"===this.direction){Object(v["c"])(t);var i=t.touches[0],n=i.clientX,e=i.clientY,s=document.elementFromPoint(n,e);if(s){var a=s.dataset.index;this.touchActiveIndex!==a&&(this.touchActiveIndex=a,this.scrollToElement(s))}}},scrollToElement:function(t){var i=t.dataset.index;if(i){var n=this.children.filter((function(t){return String(t.index)===i}));n[0]&&(n[0].scrollIntoView(),this.sticky&&this.stickyOffsetTop&&Object(g["g"])(Object(g["b"])()-this.stickyOffsetTop),this.$emit("select",n[0].index))}},onTouchEnd:function(){this.active=null}},render:function(){var t=this,i=arguments[0],n=this.indexList.map((function(n){var e=n===t.activeAnchorIndex;return i("span",{class:A("index",{active:e}),style:e?t.highlightStyle:null,attrs:{"data-index":n}},[n])}));return i("div",{class:A()},[i("div",{class:A("sidebar"),style:this.sidebarStyle,on:{click:this.onClick,touchstart:this.touchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[n]),this.slots("default")])}}),_=n("b1d2"),b=Object(u["a"])("index-anchor"),O=b[0],w=b[1],S=O({mixins:[Object(I["a"])("vanIndexBar",{indexKey:"childrenIndex"})],props:{index:[Number,String]},data:function(){return{top:0,left:null,width:null,active:!1}},computed:{sticky:function(){return this.active&&this.parent.sticky},anchorStyle:function(){if(this.sticky)return{zIndex:""+this.parent.zIndex,left:this.left?this.left+"px":null,width:this.width?this.width+"px":null,transform:"translate3d(0, "+this.top+"px, 0)",color:this.parent.highlightColor}}},mounted:function(){this.height=this.$el.offsetHeight},methods:{scrollIntoView:function(){this.$el.scrollIntoView()}},render:function(){var t,i=arguments[0],n=this.sticky;return i("div",{style:{height:n?this.height+"px":null}},[i("div",{style:this.anchorStyle,class:[w({sticky:n}),(t={},t[_["a"]]=n,t)]},[this.slots("default")||this.index])])}}),N=n("ad06"),D=n("da6a"),L=n("55e8"),T=n.n(L);r["default"].use(c["a"]).use(l["a"]).use(h["a"]).use(E).use(S).use(N["a"]);var k={name:"activityRegisterList",components:{NavigationBar:D["a"]},created:function(){this.activityInfo=this.$route.params,this.loadPageData()},data:function(){return{active:0,title:"报名列表",activeTab:0,activityInfo:{},nosigninIndex:[],nosigninData:{},signinData:{},signinIndex:[],noSourceImg:T.a}},methods:{loadPageData:function(){var t=this,i={DETAIL_CODE:this.activityInfo.DETAIL_CODE};Object(a["c"])(i).then((function(i){i&&i.length>0?t.regiseterDataParse(i):c["a"].fail("无报名信息")})).catch((function(t){c["a"].fail(t)}))},regiseterDataParse:function(t){this.signinIndex=[],this.signinData=[],this.nosigninIndex=[],this.nosigninData=[];for(var i=0;i<t.length;i++){var n=t[i],e=this.getPinYinFirstLetter(n.OWNER_NAME_PINYIN);n.SCENE_FLAG&&1==n.SCENE_FLAG?(-1===this.signinIndex.indexOf(e)&&this.signinIndex.push(e),void 0==this.signinData[e]&&(this.signinData[e]=[]),this.signinData[e].push(n)):(-1===this.nosigninIndex.indexOf(e)&&this.nosigninIndex.push(e),void 0==this.nosigninData[e]&&(this.nosigninData[e]=[]),this.nosigninData[e].push(n))}this.signinIndex.sort(),this.nosigninIndex.sort();var s=this.signinIndex.indexOf("#");s>-1&&(this.signinIndex.splice(s,1),this.signinIndex.push("#")),s=this.nosigninIndex.indexOf("#"),s>-1&&(this.nosigninIndex.splice(s,1),this.nosigninIndex.push("#"))},getPinYinFirstLetter:function(t){var i;if(t&&void 0!=t&&t.length>0){var n=/^[A-Za-z]+$/;i=t[0],i=n.test(i)?i.toUpperCase():"#"}else i="#";return i},signIn:function(t){var i=this,n={SCENE_FLAG:"1",DETAIL_CODE:this.activityInfo.DETAIL_CODE,USER_CODE:o["b"].get("userInfo").USER_CODE,OWNER_CODE:t};Object(a["e"])(n).then((function(t){t.success?(i.$toast("签到成功"),i.activeTab=1,i.loadPageData()):c["a"].fail("签到失败")}),(function(t){c["a"].fail(t)}))},cancel:function(t){var i=this,n={SCENE_FLAG:"0",DETAIL_CODE:this.activityInfo.DETAIL_CODE,USER_CODE:o["b"].get("userInfo").USER_CODE,OWNER_CODE:t};Object(a["e"])(n).then((function(t){t.success?(i.$toast("取消成功"),i.activeTab=0,i.loadPageData()):c["a"].fail("取消失败")}),(function(t){c["a"].fail(t)}))},onBack:function(){history.back()}},computed:{activitySignupPercentage:function(){return function(t){var i=t.LIMIT_MAX,n=t.ENROL_CNTS,e=Math.round(Number(n)/Number(i)*1e4)/100;return e}}}},R=k,B=(n("251e"),n("2877")),F=Object(B["a"])(R,e,s,!1,null,"3e634e36",null);i["default"]=F.exports},"960f":function(t,i,n){"use strict";var e=n("2627"),s=n.n(e);s.a},da6a:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"navBar van-nav-bar",style:t.navBarStyle},[t.isShowLeft?n("div",{staticClass:"left",style:t.bothWidth,on:{click:function(i){return t.$emit("onLeftClick")}}},[t.isShowBack?n("img",{attrs:{src:t.backImg,alt:"",srcset:""}}):t._e(),t._t("nav-left")],2):t._e(),n("div",{staticClass:"center"},[t.isDefault?n("span",{staticClass:"title"},[t._v(t._s(t.pageName))]):t._e(),t._t("nav-center")],2),t.isShowRight?n("div",{staticClass:"right",style:t.bothWidth},[t._t("nav-right")],2):t._e()])},s=[],a={props:{isDefault:{default:!0,type:Boolean},bothWidth:{type:Object,default:function(){return{width:"36px"}}},isShowRight:{default:!0,type:Boolean},isShowLeft:{default:!0,type:Boolean},isShowBack:{default:!0,type:Boolean},leftImgType:{type:String,default:"0"},pageName:{default:"",type:String},navBarStyle:{type:Object,default:function(){return{backgroundColor:"#fff"}}}},data:function(){return{backImg:n("4f11")}},mounted:function(){this.isLeftImg()},methods:{isLeftImg:function(){switch(this.leftImgType){case"0":this.backImg=n("4f11");break;case"1":this.backImg=n("4f11");break}}}},o=a,r=(n("960f"),n("2877")),c=Object(r["a"])(o,e,s,!1,null,"7e35d797",null);i["a"]=c.exports}}]);
//# sourceMappingURL=chunk-4c0b207a.6bdfb0cc.js.map