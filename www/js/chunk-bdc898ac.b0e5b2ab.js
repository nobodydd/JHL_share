(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bdc898ac"],{2627:function(t,e,a){},"4f11":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAqhJREFUeAHtms1L1UEUhtX8IJUwEEGiRKggEqGNiwpx08qiaOEmMKE2QctyIfQXRGAtxJ0o1CYEEaTCRYsgqEUgRAWChIohRBpEH1TengMOHIZWwoHD3HPgZebcO8yc5x283pnframJCAfCgXAgHAgHwoFwIBwIB8KBcMChA5VKpRu9QJto2GGJdiUB3Is+oRTrdqs5mxnifrSdyHfbGWdl2pQD7CX0I4OfJq+3WdHRrEBeR38y+LvktY7KtCkFyLEMfIf8ls1qjmaV3UX3M/jf5FcdlWlTCpAN6FEG/5180GZFR7MC2YqeZfBfyE87KtOmFCDb0esMfp38pM2KjmYFsgt9QDokP+KoTJtSgOxBstM6XpG026zoaFYgzyD5G9fxlKTFUZk2pQB5Hsmnu46HJA02KzqaFcgRJP/XdYyTVMW3u1FNvdsfc7Q/NqXI7qJ7Gbx8x79ms6KjWYGsRzMZvJzuLjoq06YUIJvRQgYv5/p+mxWdzQroXAa/Qd7rrEy7coBdzQyYsFvN4czAX0H5hcYkr9U5LNemJGAvo59Ix2OSRpsVHc4K7AD6qh2gv4haHZZrUxKwp5Dc5+uQI3D5B59kKbBH0Yp2gP57dDiNKb4FthMtIR1rJCeKh0+AwLYhecSl4zNJXxpTfAvsfjSvHaD/DZ0rHj4BAivnhCmk4xfJUBpTfAusnBTlaY+OvyQ3iofXgADfRvL0R8cdPab4PuT/uy16wOvl3xal3QX2AsrvC+VpUfn3hcqEswBvIR1PSJrTmOJbYOUXIXJ/oOMlycHi4RMgsN1oWTtA/y06lMYU3wLbgd4gHR9JjhUPnwCBPYCeIx1L6f2qaCFvQrPKgXdVAa4hgd+HbiL5Bclx/V70w4FwIBwIB8KBcCAcCAfCgXBgzw78A2Wj4+ezw0gaAAAAAElFTkSuQmCC"},"55e8":function(t,e,a){t.exports=a.p+"www/img/noSource.ef090043.png"},"56e4":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return s})),a.d(e,"d",(function(){return c})),a.d(e,"f",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"e",(function(){return l}));var i=a("ba6a"),n=function(t){return new Promise((function(e,a){i["a"].post("/hisense-systemServer/app/property/propertyActivitiesController/getActiMsg.do",{data:JSON.stringify(t)},!0,"homeUrl").then((function(t){e(t)})).catch((function(t){a(t)}))}))},s=function(t){return new Promise((function(e,a){i["a"].post("/hisense-systemServer/app/property/propertyActivitiesController/getActiMsgByActiCode.do",{data:JSON.stringify(t)},!0,"homeUrl").then((function(t){e(t)})).catch((function(t){a(t)}))}))},c=function(t){return new Promise((function(e,a){i["a"].post("/hisense-systemServer/app/property/propertyActivitiesController/getDetailMsgByDetailCode.do",{data:JSON.stringify(t)},!0,"homeUrl").then((function(t){e(t)})).catch((function(t){a(t)}))}))},o=function(t){return new Promise((function(e,a){i["a"].post("/hisense-systemServer/app/property/propertyActivitiesController/updateCloseSignFlag.do",{data:JSON.stringify(t)},!0,"homeUrl").then((function(t){e(t)})).catch((function(t){a(t)}))}))},r=function(t){return new Promise((function(e,a){i["a"].post("/hisense-systemServer/app/property/propertyActivitiesController/getOwnerSignInfo.do",{data:JSON.stringify(t)},!0,"homeUrl").then((function(t){e(t)})).catch((function(t){a(t)}))}))},l=function(t){return new Promise((function(e,a){i["a"].post("/hisense-systemServer/app/property/propertyActivitiesController/updateSceneFlag.do",{data:JSON.stringify(t)},!0,"homeUrl").then((function(t){e(t)})).catch((function(t){a(t)}))}))}},7641:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"activity-deatil-page"},[a("navigation-bar",{staticClass:"detail-nav-bar",attrs:{pageName:t.title,border:!1},on:{onLeftClick:t.onBack}}),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.pageNoData,expression:"!pageNoData"}],staticClass:"detail-content"},[a("div",{staticClass:"content_title"},[t._v(t._s(t.currentDetailData.ACTI_NAME))]),a("div",{staticClass:"content-image"},[a("img",{directives:[{name:"show",rawName:"v-show",value:t.currentDetailData.PIC_URL,expression:"currentDetailData.PIC_URL"}],attrs:{src:t.currentDetailData.PIC_URL,alt:""}})]),a("div",{staticClass:"content-des",domProps:{innerHTML:t._s(t.currentDetailData.CONTENT)}}),a("div",{staticClass:"grayBar"}),a("div",{staticClass:"detail-cell section-select",on:{click:t.sectionSelectClicked}},[a("div",{staticClass:"left"},[t._v("场次")]),a("div",{staticClass:"right"},[a("span",[t._v(t._s(t.currentDetailData.DETAIL_NAME))]),a("van-icon",{attrs:{name:"arrow",size:"15px"}})],1)]),a("div",{staticClass:"grayBar"}),a("div",{staticClass:"detail-cell"},[a("div",{staticClass:"left"},[t._v("已报名人数")]),a("div",{staticClass:"right"},[t._v(t._s(t.sectionData.ENROL_CNTS)+"/"+t._s(t.sectionData.LIMIT_MAX))])]),a("div",{staticClass:"grayBar"}),a("div",{staticClass:"detail-cell"},[a("div",{staticClass:"left"},[t._v("报名时间")]),a("div",{staticClass:"right"},[t._v(t._s(t.currentDetailData.START_TIME)+" 至 "+t._s(t.currentDetailData.END_TIME))])]),a("div",{staticClass:"grayBar"}),a("div",{staticClass:"detail-cell"},[a("div",{staticClass:"left"},[t._v("活动时间")]),a("div",{staticClass:"right"},[t._v(t._s(t.sectionData.START_TIME)+" 至 "+t._s(t.sectionData.END_TIME))])]),a("div",{staticClass:"activity-action"},[a("div",{staticClass:"sign-in action",on:{click:t.signinBtnClicked}},[t._v(t._s(t.sectionData.CLOSE_SIGN_FLAG?"开启签到":"关闭签到"))]),a("div",{staticClass:"enterfor-list action",on:{click:t.entryforListClicked}},[t._v("报名列表")]),a("div",{staticClass:"qrcode action",style:{visibility:0==t.sectionData.CLOSE_SIGN_FLAG?"visible":"hidden"},on:{click:t.qrcodeShowClicked}},[t._v("\n                  获取二维码\n              ")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.pageNoData,expression:"pageNoData"}],staticClass:"no-list"},[a("img",{attrs:{src:t.noSourceImg,alt:""}}),a("div",[t._v("暂无详情")])]),a("van-action-sheet",{attrs:{round:!0,"safe-area-inset-bottom":!0,actions:t.selectActions,"cancel-text":"取消"},on:{select:t.onSelect,cancel:t.onCancel},model:{value:t.isShowSelect,callback:function(e){t.isShowSelect=e},expression:"isShowSelect"}})],1)},n=[],s=(a("a481"),a("56e4")),c=a("da6f"),o=a("2b0e"),r=a("d399"),l=a("ad06"),f=a("ab2c"),u=a("28a2"),d=a("55e8"),v=a.n(d),h=a("da6a");o["default"].use(r["a"]).use(l["a"]).use(f["a"]).use(u["a"]);var g={name:"activityDetail",components:{NavigationBar:h["a"]},created:function(){this.loadPageData()},beforeDestroy:function(){this.previewId&&this.previewId.close()},data:function(){return{active:0,title:"活动详情",pageNoData:!1,isShowSelect:!1,selectActions:[],detailData:[],currentDetailData:{},sectionData:{},noSourceImg:v.a,previewId:""}},methods:{onSelect:function(t){this.isShowSelect=!1,this.currentDetailData.DETAIL_CODE!=t.ele.DETAIL_CODE&&(this.currentDetailData=t.ele,this.getSectionInfo(t.ele.DETAIL_CODE))},onCancel:function(){},loadPageData:function(){var t=this,e={ACTI_CODE:c["b"].get("activityDetailCode")};Object(s["a"])(e).then((function(e){if(e&&e.length>0){t.detailData=e,t.currentDetailData=e[0],t.pageNoData=!1,t.getSectionInfo(t.currentDetailData.DETAIL_CODE),t.sectionData=[];for(var a=0;a<e.length;a++){var i=e[a];t.selectActions.push({name:i.DETAIL_NAME,color:"#1f1f1f",ele:i})}}else t.detailData=[],t.pageNoData=!0})).catch((function(t){r["a"].fail(t)}))},getSectionInfo:function(t){var e=this,a={DETAIL_CODE:t};Object(s["d"])(a).then((function(t){e.sectionData=t})).catch((function(t){r["a"].fail(t)}))},sectionSelectClicked:function(){this.isShowSelect=!0},qrcodeShowClicked:function(){this.previewId=Object(u["a"])({images:[this.sectionData.QR_URL],showIndex:!1})},entryforListClicked:function(){this.$router.push({name:"activityRegisterList",params:this.sectionData})},signinBtnClicked:function(){var t=this;if(this.sectionData.CLOSE_SIGN_FLAG){var e=new Date(this.getNowDate().replace(/\-/g,"/")).getTime(),a=new Date(this.currentDetailData.START_TIME.replace(/\-/g,"/")).getTime(),i=new Date(this.sectionData.END_TIME.replace(/\-/g,"/")).getTime();if(e<a)return void Object(r["a"])("报名未开始，无法开启签到 ！");if(e>i)return void Object(r["a"])("活动已结束，无法开启签到 ！")}var n=c["b"].get("custNews");n=n||c["a"].getStorage("custNews");var o={CLOSE_SIGN_FLAG:this.sectionData.CLOSE_SIGN_FLAG?0:1,DETAIL_CODE:this.sectionData.DETAIL_CODE,USER_CODE:n.USER_CODE};Object(s["f"])(o).then((function(e){t.sectionData.CLOSE_SIGN_FLAG=t.sectionData.CLOSE_SIGN_FLAG?0:1})).catch((function(t){r["a"].fail(t)}))},onBack:function(){history.back()},getNowDate:function(){var t=new Date,e="-",a=":",i=t.getMonth()+1,n=t.getDate();i>=1&&i<=9&&(i="0"+i),n>=0&&n<=9&&(n="0"+n);var s=t.getFullYear()+e+i+e+n+" "+t.getHours()+a+t.getMinutes()+a+t.getSeconds();return s}}},p=g,D=(a("ab09"),a("2877")),C=Object(D["a"])(p,i,n,!1,null,"2ab9c140",null);e["default"]=C.exports},"960f":function(t,e,a){"use strict";var i=a("2627"),n=a.n(i);n.a},ab09:function(t,e,a){"use strict";var i=a("e9f3"),n=a.n(i);n.a},da6a:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navBar van-nav-bar",style:t.navBarStyle},[t.isShowLeft?a("div",{staticClass:"left",style:t.bothWidth,on:{click:function(e){return t.$emit("onLeftClick")}}},[t.isShowBack?a("img",{attrs:{src:t.backImg,alt:"",srcset:""}}):t._e(),t._t("nav-left")],2):t._e(),a("div",{staticClass:"center"},[t.isDefault?a("span",{staticClass:"title"},[t._v(t._s(t.pageName))]):t._e(),t._t("nav-center")],2),t.isShowRight?a("div",{staticClass:"right",style:t.bothWidth},[t._t("nav-right")],2):t._e()])},n=[],s={props:{isDefault:{default:!0,type:Boolean},bothWidth:{type:Object,default:function(){return{width:"36px"}}},isShowRight:{default:!0,type:Boolean},isShowLeft:{default:!0,type:Boolean},isShowBack:{default:!0,type:Boolean},leftImgType:{type:String,default:"0"},pageName:{default:"",type:String},navBarStyle:{type:Object,default:function(){return{backgroundColor:"#fff"}}}},data:function(){return{backImg:a("4f11")}},mounted:function(){this.isLeftImg()},methods:{isLeftImg:function(){switch(this.leftImgType){case"0":this.backImg=a("4f11");break;case"1":this.backImg=a("4f11");break}}}},c=s,o=(a("960f"),a("2877")),r=Object(o["a"])(c,i,n,!1,null,"7e35d797",null);e["a"]=r.exports},e9f3:function(t,e,a){}}]);
//# sourceMappingURL=chunk-bdc898ac.b0e5b2ab.js.map