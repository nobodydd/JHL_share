(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0c4e064"],{"1ce2":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"new_msg"},[a("navigation-bar",{attrs:{pageName:"消息"},on:{onLeftClick:t.goBack}}),a("div",{staticClass:"new_msg_list"},[a("van-list",{attrs:{finished:t.finished,"immediate-check":!1,"finished-text":t.newMsgList.legnth>0?"无更多数据...":""},on:{load:t.loadMore},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.newMsgList,(function(e,i){return a("div",{key:i,staticClass:"item",on:{click:function(s){return t.goDetail(e)}}},[a("div",{staticClass:"head"},[e.headPic?a("img",{attrs:{src:e.headPic,alt:""}}):a("img",{attrs:{src:s("6d1e"),alt:""}})]),a("div",{staticClass:"middle"},[e.nickName?a("div",{staticClass:"name"},[t._v(t._s(e.nickName))]):t._e(),a("div",{staticClass:"content"},[e.type?t._e():a("img",{attrs:{src:s("2f26")}}),t._v("\n                      "+t._s(e.evalMessage)+"\n                  ")]),a("div",{staticClass:"time"},[t._v(t._s(e.createdTime))])]),a("div",{staticClass:"note-con"},[e.notePic?a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.notePic,expression:"item.notePic"}],key:e.notePic,staticClass:"article-img",attrs:{src:e.notePic,alt:""}}):t._e(),t._v("\n                  "+t._s(e.noteView)+"\n              ")])])})),0)],1)],1)},i=[],n=s("5629"),o=s("da6f"),c=s("371c"),r=s("da6a"),f={name:"newMsg",components:{NavigationBar:r["a"]},mounted:function(){},activated:function(){this.$route.params.fromFind&&(this.userInfo=o["b"].get("userInfo"),this.resetMsgData(),this.getNewMsgList())},data:function(){return{newMsgList:[],loading:!1,finished:!1,requestType:0,page:1,rows:10}},methods:{resetMsgData:function(){this.newMsgList=[],this.loading=!1,this.finished=!1,this.requestType=0,this.page=1,this.rows=10},getNewMsgList:function(){var t=this;Object(n["g"])({ownerCode:this.userInfo.USER_CODE,areaCode:this.userInfo.AREA_CODE,page:this.page,rows:this.rows,status:0}).then((function(e){t.loading=!1,"0"==e.resultCode?(t.finished=e.data.list.length<10,1==t.page?t.newMsgList=e.data.list:t.newMsgList=t.newMsgList.concat(e.data.list)):(t.$toast(e.msg),t.finished=!0),c["a"].i(t.newMsgList)}),(function(e){t.finished=!0,t.loading=!1,t.$toast(e)})).catch((function(e){t.$toast(e)}))},goDetail:function(t){1==t.noteStatus?this.$toast("帖子已删除"):this.$router.push({name:"newMsgDetail",params:{noteCode:t.noteCode,refreshDetail:1}})},loadMore:function(){},goBack:function(){this.$router.back(-1)}}},l=f,d=(s("9dfd"),s("da07"),s("2877")),g=Object(d["a"])(l,a,i,!1,null,"41e4db49",null);e["default"]=g.exports},2627:function(t,e,s){},3014:function(t,e,s){},"4f11":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAqhJREFUeAHtms1L1UEUhtX8IJUwEEGiRKggEqGNiwpx08qiaOEmMKE2QctyIfQXRGAtxJ0o1CYEEaTCRYsgqEUgRAWChIohRBpEH1TengMOHIZWwoHD3HPgZebcO8yc5x283pnframJCAfCgXAgHAgHwoFwIBwIB8KBcMChA5VKpRu9QJto2GGJdiUB3Is+oRTrdqs5mxnifrSdyHfbGWdl2pQD7CX0I4OfJq+3WdHRrEBeR38y+LvktY7KtCkFyLEMfIf8ls1qjmaV3UX3M/jf5FcdlWlTCpAN6FEG/5180GZFR7MC2YqeZfBfyE87KtOmFCDb0esMfp38pM2KjmYFsgt9QDokP+KoTJtSgOxBstM6XpG026zoaFYgzyD5G9fxlKTFUZk2pQB5Hsmnu46HJA02KzqaFcgRJP/XdYyTVMW3u1FNvdsfc7Q/NqXI7qJ7Gbx8x79ms6KjWYGsRzMZvJzuLjoq06YUIJvRQgYv5/p+mxWdzQroXAa/Qd7rrEy7coBdzQyYsFvN4czAX0H5hcYkr9U5LNemJGAvo59Ix2OSRpsVHc4K7AD6qh2gv4haHZZrUxKwp5Dc5+uQI3D5B59kKbBH0Yp2gP57dDiNKb4FthMtIR1rJCeKh0+AwLYhecSl4zNJXxpTfAvsfjSvHaD/DZ0rHj4BAivnhCmk4xfJUBpTfAusnBTlaY+OvyQ3iofXgADfRvL0R8cdPab4PuT/uy16wOvl3xal3QX2AsrvC+VpUfn3hcqEswBvIR1PSJrTmOJbYOUXIXJ/oOMlycHi4RMgsN1oWTtA/y06lMYU3wLbgd4gHR9JjhUPnwCBPYCeIx1L6f2qaCFvQrPKgXdVAa4hgd+HbiL5Bclx/V70w4FwIBwIB8KBcCAcCAfCgXBgzw78A2Wj4+ezw0gaAAAAAElFTkSuQmCC"},"960f":function(t,e,s){"use strict";var a=s("2627"),i=s.n(a);i.a},"9dfd":function(t,e,s){"use strict";var a=s("3014"),i=s.n(a);i.a},bf72:function(t,e,s){},da07:function(t,e,s){"use strict";var a=s("bf72"),i=s.n(a);i.a},da6a:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navBar van-nav-bar",style:t.navBarStyle},[t.isShowLeft?s("div",{staticClass:"left",style:t.bothWidth,on:{click:function(e){return t.$emit("onLeftClick")}}},[t.isShowBack?s("img",{attrs:{src:t.backImg,alt:"",srcset:""}}):t._e(),t._t("nav-left")],2):t._e(),s("div",{staticClass:"center"},[t.isDefault?s("span",{staticClass:"title"},[t._v(t._s(t.pageName))]):t._e(),t._t("nav-center")],2),t.isShowRight?s("div",{staticClass:"right",style:t.bothWidth},[t._t("nav-right")],2):t._e()])},i=[],n={props:{isDefault:{default:!0,type:Boolean},bothWidth:{type:Object,default:function(){return{width:"36px"}}},isShowRight:{default:!0,type:Boolean},isShowLeft:{default:!0,type:Boolean},isShowBack:{default:!0,type:Boolean},leftImgType:{type:String,default:"0"},pageName:{default:"",type:String},navBarStyle:{type:Object,default:function(){return{backgroundColor:"#fff"}}}},data:function(){return{backImg:s("4f11")}},mounted:function(){this.isLeftImg()},methods:{isLeftImg:function(){switch(this.leftImgType){case"0":this.backImg=s("4f11");break;case"1":this.backImg=s("4f11");break}}}},o=n,c=(s("960f"),s("2877")),r=Object(c["a"])(o,a,i,!1,null,"7e35d797",null);e["a"]=r.exports}}]);
//# sourceMappingURL=chunk-f0c4e064.44ab93db.js.map