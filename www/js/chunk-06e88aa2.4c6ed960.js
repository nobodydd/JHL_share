(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06e88aa2"],{"11da":function(t,a,s){"use strict";var e=s("d7de"),i=s.n(e);i.a},2627:function(t,a,s){},"4f11":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAqhJREFUeAHtms1L1UEUhtX8IJUwEEGiRKggEqGNiwpx08qiaOEmMKE2QctyIfQXRGAtxJ0o1CYEEaTCRYsgqEUgRAWChIohRBpEH1TengMOHIZWwoHD3HPgZebcO8yc5x283pnframJCAfCgXAgHAgHwoFwIBwIB8KBcMChA5VKpRu9QJto2GGJdiUB3Is+oRTrdqs5mxnifrSdyHfbGWdl2pQD7CX0I4OfJq+3WdHRrEBeR38y+LvktY7KtCkFyLEMfIf8ls1qjmaV3UX3M/jf5FcdlWlTCpAN6FEG/5180GZFR7MC2YqeZfBfyE87KtOmFCDb0esMfp38pM2KjmYFsgt9QDokP+KoTJtSgOxBstM6XpG026zoaFYgzyD5G9fxlKTFUZk2pQB5Hsmnu46HJA02KzqaFcgRJP/XdYyTVMW3u1FNvdsfc7Q/NqXI7qJ7Gbx8x79ms6KjWYGsRzMZvJzuLjoq06YUIJvRQgYv5/p+mxWdzQroXAa/Qd7rrEy7coBdzQyYsFvN4czAX0H5hcYkr9U5LNemJGAvo59Ix2OSRpsVHc4K7AD6qh2gv4haHZZrUxKwp5Dc5+uQI3D5B59kKbBH0Yp2gP57dDiNKb4FthMtIR1rJCeKh0+AwLYhecSl4zNJXxpTfAvsfjSvHaD/DZ0rHj4BAivnhCmk4xfJUBpTfAusnBTlaY+OvyQ3iofXgADfRvL0R8cdPab4PuT/uy16wOvl3xal3QX2AsrvC+VpUfn3hcqEswBvIR1PSJrTmOJbYOUXIXJ/oOMlycHi4RMgsN1oWTtA/y06lMYU3wLbgd4gHR9JjhUPnwCBPYCeIx1L6f2qaCFvQrPKgXdVAa4hgd+HbiL5Bclx/V70w4FwIBwIB8KBcCAcCAfCgXBgzw78A2Wj4+ezw0gaAAAAAElFTkSuQmCC"},"7bdf":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"park-detail"},[s("navigation-bar",{attrs:{pageName:t.pageName},on:{onLeftClick:t.goBack}}),s("div",{staticClass:"detail-box"},[s("div",{staticClass:"content"},[s("div",{staticClass:"top"},[t._v("临时停车详情")]),s("div",{staticClass:"mid"},[s("div",{staticClass:"item"},[s("span",{staticClass:"title"},[t._v("访客姓名")]),s("span",{staticClass:"value"},[t._v(t._s(t.formObj.guest))])]),s("div",{staticClass:"item"},[s("span",{staticClass:"title"},[t._v("访客手机号")]),s("span",{staticClass:"value"},[t._v(t._s(t.formObj.guestPhone))])]),s("div",{staticClass:"item"},[s("span",{staticClass:"title"},[t._v("预约开始时间")]),s("span",{staticClass:"value"},[t._v(t._s(t.formObj.startTime))])]),s("div",{staticClass:"item"},[s("span",{staticClass:"title"},[t._v("预约结束时间")]),s("span",{staticClass:"value"},[t._v(t._s(t.formObj.endTime))])]),s("div",{staticClass:"item"},[s("span",{staticClass:"title"},[t._v("进场时间")]),s("span",{staticClass:"value"},[t._v(t._s(t.formObj.enterTime))])]),s("div",{staticClass:"item"},[s("span",{staticClass:"title"},[t._v("来访楼座信息")]),s("span",{staticClass:"value"},[t._v(t._s(t.formObj.doorNum))])])])]),s("div",[s("button",{staticClass:"back-btn",on:{click:t.goBack}},[t._v("返回临时车辆列表")])])])],1)},i=[],n=s("da6a"),c={name:"parkDetail",components:{NavigationBar:n["a"]},data:function(){return{pageName:"访客预约",formObj:{}}},computed:{},mounted:function(){this.formObj=this.$route.query},methods:{goBack:function(){this.$router.push({path:"/visitorRegister/park"})}}},l=c,o=(s("11da"),s("2877")),r=Object(o["a"])(l,e,i,!1,null,"1f52fcf7",null);a["default"]=r.exports},"960f":function(t,a,s){"use strict";var e=s("2627"),i=s.n(e);i.a},d7de:function(t,a,s){},da6a:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"navBar van-nav-bar",style:t.navBarStyle},[t.isShowLeft?s("div",{staticClass:"left",style:t.bothWidth,on:{click:function(a){return t.$emit("onLeftClick")}}},[t.isShowBack?s("img",{attrs:{src:t.backImg,alt:"",srcset:""}}):t._e(),t._t("nav-left")],2):t._e(),s("div",{staticClass:"center"},[t.isDefault?s("span",{staticClass:"title"},[t._v(t._s(t.pageName))]):t._e(),t._t("nav-center")],2),t.isShowRight?s("div",{staticClass:"right",style:t.bothWidth},[t._t("nav-right")],2):t._e()])},i=[],n={props:{isDefault:{default:!0,type:Boolean},bothWidth:{type:Object,default:function(){return{width:"36px"}}},isShowRight:{default:!0,type:Boolean},isShowLeft:{default:!0,type:Boolean},isShowBack:{default:!0,type:Boolean},leftImgType:{type:String,default:"0"},pageName:{default:"",type:String},navBarStyle:{type:Object,default:function(){return{backgroundColor:"#fff"}}}},data:function(){return{backImg:s("4f11")}},mounted:function(){this.isLeftImg()},methods:{isLeftImg:function(){switch(this.leftImgType){case"0":this.backImg=s("4f11");break;case"1":this.backImg=s("4f11");break}}}},c=n,l=(s("960f"),s("2877")),o=Object(l["a"])(c,e,i,!1,null,"7e35d797",null);a["a"]=o.exports}}]);
//# sourceMappingURL=chunk-06e88aa2.4c6ed960.js.map