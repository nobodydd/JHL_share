(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-367b97c7"],{2627:function(t,e,a){},"4f11":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAqhJREFUeAHtms1L1UEUhtX8IJUwEEGiRKggEqGNiwpx08qiaOEmMKE2QctyIfQXRGAtxJ0o1CYEEaTCRYsgqEUgRAWChIohRBpEH1TengMOHIZWwoHD3HPgZebcO8yc5x283pnframJCAfCgXAgHAgHwoFwIBwIB8KBcMChA5VKpRu9QJto2GGJdiUB3Is+oRTrdqs5mxnifrSdyHfbGWdl2pQD7CX0I4OfJq+3WdHRrEBeR38y+LvktY7KtCkFyLEMfIf8ls1qjmaV3UX3M/jf5FcdlWlTCpAN6FEG/5180GZFR7MC2YqeZfBfyE87KtOmFCDb0esMfp38pM2KjmYFsgt9QDokP+KoTJtSgOxBstM6XpG026zoaFYgzyD5G9fxlKTFUZk2pQB5Hsmnu46HJA02KzqaFcgRJP/XdYyTVMW3u1FNvdsfc7Q/NqXI7qJ7Gbx8x79ms6KjWYGsRzMZvJzuLjoq06YUIJvRQgYv5/p+mxWdzQroXAa/Qd7rrEy7coBdzQyYsFvN4czAX0H5hcYkr9U5LNemJGAvo59Ix2OSRpsVHc4K7AD6qh2gv4haHZZrUxKwp5Dc5+uQI3D5B59kKbBH0Yp2gP57dDiNKb4FthMtIR1rJCeKh0+AwLYhecSl4zNJXxpTfAvsfjSvHaD/DZ0rHj4BAivnhCmk4xfJUBpTfAusnBTlaY+OvyQ3iofXgADfRvL0R8cdPab4PuT/uy16wOvl3xal3QX2AsrvC+VpUfn3hcqEswBvIR1PSJrTmOJbYOUXIXJ/oOMlycHi4RMgsN1oWTtA/y06lMYU3wLbgd4gHR9JjhUPnwCBPYCeIx1L6f2qaCFvQrPKgXdVAa4hgd+HbiL5Bclx/V70w4FwIBwIB8KBcCAcCAfCgXBgzw78A2Wj4+ezw0gaAAAAAElFTkSuQmCC"},"893e":function(t,e,a){},"960f":function(t,e,a){"use strict";var s=a("2627"),i=a.n(s);i.a},a48e:function(t,e,a){"use strict";var s=a("893e"),i=a.n(s);i.a},c86e:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notice-detail-page"},[a("navigation-bar",{attrs:{pageName:t.reqData.systemName+"消息"},on:{onLeftClick:t.onBack}}),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isNoNetwork,expression:"!isNoNetwork"}],staticClass:"notice-content"},[a("div",{staticClass:"notice-title"},[t._v(t._s(t.reqData.messageTopic))]),a("div",{staticClass:"notice-time"},[t._v(t._s(t.reqData.sendTime))]),a("div",{staticClass:"contentArea"},[t._v(t._s(t.reqData.sendMessage))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isNoNetwork,expression:"isNoNetwork"}],staticClass:"no-networking"},[a("h3",[t._v("网络请求失败")]),a("p",[t._v("请检查您的网络")]),a("div",{on:{click:t.setNoticeRead}},[t._v("重新加载")])])],1)},i=[],n=a("35d6"),o=a("da6a"),c=a("2b0e"),r=a("d399");c["default"].use(r["a"]);var l={name:"NoticeDetail",components:{NavigationBar:o["a"]},mounted:function(){var t=this.$route.params;void 0!=t&&void 0!=t.noticeReq&&(this.reqData=t.noticeReq),this.setNoticeRead()},data:function(){return{active:0,title:"物业通知",reqData:{},noticeDetail:{},isNoNetwork:!1}},methods:{onBack:function(){this.$router.back(-1)},setNoticeRead:function(){var t=this;1!=this.reqData.isRead?Object(n["e"])({id:this.reqData.messageId}).then((function(e){t.isNoNetwork=!1,1==e.resultCode&&console.log("设置消息已读失败.")})).catch((function(t){Object(r["a"])(t)})):console.log("message already read, need not set read "+this.reqData.isRead)}}},f=l,d=(a("a48e"),a("2877")),u=Object(d["a"])(f,s,i,!1,null,"8601ef6a",null);e["default"]=u.exports},da6a:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navBar van-nav-bar",style:t.navBarStyle},[t.isShowLeft?a("div",{staticClass:"left",style:t.bothWidth,on:{click:function(e){return t.$emit("onLeftClick")}}},[t.isShowBack?a("img",{attrs:{src:t.backImg,alt:"",srcset:""}}):t._e(),t._t("nav-left")],2):t._e(),a("div",{staticClass:"center"},[t.isDefault?a("span",{staticClass:"title"},[t._v(t._s(t.pageName))]):t._e(),t._t("nav-center")],2),t.isShowRight?a("div",{staticClass:"right",style:t.bothWidth},[t._t("nav-right")],2):t._e()])},i=[],n={props:{isDefault:{default:!0,type:Boolean},bothWidth:{type:Object,default:function(){return{width:"36px"}}},isShowRight:{default:!0,type:Boolean},isShowLeft:{default:!0,type:Boolean},isShowBack:{default:!0,type:Boolean},leftImgType:{type:String,default:"0"},pageName:{default:"",type:String},navBarStyle:{type:Object,default:function(){return{backgroundColor:"#fff"}}}},data:function(){return{backImg:a("4f11")}},mounted:function(){this.isLeftImg()},methods:{isLeftImg:function(){switch(this.leftImgType){case"0":this.backImg=a("4f11");break;case"1":this.backImg=a("4f11");break}}}},o=n,c=(a("960f"),a("2877")),r=Object(c["a"])(o,s,i,!1,null,"7e35d797",null);e["a"]=r.exports}}]);
//# sourceMappingURL=chunk-367b97c7.86d8aa07.js.map