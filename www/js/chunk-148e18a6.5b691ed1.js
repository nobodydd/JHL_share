(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-148e18a6"],{2627:function(t,e,s){},"362d":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%",display:"flex","flex-direction":"column"}},[n("navigation-bar",{attrs:{pageName:"发现"},on:{onLeftClick:t.goBack}}),n("div",{staticClass:"wrapper",attrs:{id:"refreshWrapper"}},[n("van-pull-refresh",{on:{refresh:function(e){return t.loadNotes(1)}},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("van-list",{attrs:{finished:t.finished,"immediate-check":!1,"finished-text":t.noteData.length>0?"无更多数据...":""},on:{load:t.loadMoreNote},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("div",{staticClass:"banner",style:t.background},[n("div",{staticClass:"user-msg"},[n("p",[t._v(t._s(t.userInfo.USER_NICK_NAME))]),t.userInfo.PIC_URL?n("img",{staticClass:"user-avatar",attrs:{src:t.userInfo.PIC_URL,alt:""}}):n("img",{staticClass:"user-avatar",attrs:{src:s("6d1e"),alt:""}})])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.noteData.length&&!t.isEnterNLoading,expression:"!noteData.length && !isEnterNLoading"}],staticClass:"no-list"},[n("div",[t._v("暂无消息")])]),t._l(t.noteData,(function(e,a){return n("section",{key:a,staticClass:"friend-message"},[n("div",{staticClass:"friend-msg"},[n("div",[e.headPic?n("img",{attrs:{src:e.headPic,alt:""}}):n("img",{attrs:{src:s("6d1e"),alt:""}}),n("p",[t._v(t._s(e.nickName))])])]),n("div",{staticClass:"message-container"},[n("p",[t._v(t._s(e.content))]),e.notePic?n("van-row",{staticClass:"message-img",class:{"big-image":1==e.notePic.length}},t._l(e.notePic,(function(s,a){return n("van-col",{key:a,attrs:{span:"6"}},[n("img",{attrs:{src:s,alt:""},on:{click:function(s){return t.preview(e.notePic,a)}}})])})),1):t._e()],1),e?n("div",{staticClass:"handler-container"},[n("van-row",{attrs:{span:"8",type:"flex",justify:"space-between"}},[n("van-col",{staticClass:"desc"},[n("span",[t._v(t._s(e.createdTime))]),n("span",{on:{click:function(s){return t.deleteNote(e.noteCode)}}},[t._v("删除")])]),n("van-col",{staticClass:"handle-type",attrs:{span:"8"}},[n("span",{on:{click:function(s){return t.setLike(e.noteCode,a,e.likerList)}}},[t.checkLike(e.likerList)?n("img",{staticClass:"cls-icon",attrs:{src:s("69ed"),alt:""}}):n("img",{staticClass:"cls-icon",attrs:{src:s("bd0c"),alt:""}}),e.likerList?n("span",[t._v(t._s(e.likerList.length))]):t._e()]),n("span",{on:{click:function(s){return t.addComments(e.noteCode,a)}}},[n("img",{staticClass:"cls-icon",attrs:{src:s("5fbc"),alt:""}}),t._v("\n                  "+t._s(e.commentList?e.commentList.length:"")+"\n                ")])])],1)],1):t._e(),e?n("div",{staticClass:"reply-container"},[e.likerList.length>0?n("van-row",{staticClass:"goods-group",attrs:{type:"flex"}},[n("van-col",{attrs:{span:"1"}},[n("img",{staticClass:"cls-icon",attrs:{src:s("2f26"),alt:""}})]),n("van-col",{staticClass:"goods-person"},t._l(e.likerList,(function(s,a){return n("span",{key:a},[t._v("\n                  "+t._s(s.nickName)+"\n                  "),a!=e.likerList.length-1?n("i",[t._v(",")]):t._e()])})),0)],1):t._e(),e.commentList.length>0?n("div",t._l(e.commentList,(function(i,o){return n("div",{key:o,staticClass:"reply-group",attrs:{type:"flex"}},[n("div",{staticClass:"reply-item"},[n("div",{staticClass:"reply-desc",on:{click:function(s){return t.replyAction(i,e.noteCode,a)}}},[n("span",{staticClass:"reply-name",class:{"reply-flag":!i.returner}},[t._v("\n                      "+t._s(i.nickName)+"\n                      "),1==i.isProperty?n("img",{attrs:{src:s("1187"),width:"36px;"}}):t._e()]),i.returner?n("span",{staticClass:"result"},[t._v("回复")]):t._e(),n("span",{staticClass:"reply-name",class:{"reply-flag":i.returner}},[t._v(t._s(i.returner))]),n("p",{staticClass:"reply-text"},[t._v(t._s(i.content))])]),n("van-row",t._l(i.evalPic,(function(e,s){return n("van-col",{key:s,attrs:{span:"6"}},[n("img",{staticClass:"small-reply-img",attrs:{src:e,alt:""},on:{click:function(e){return t.preview(i.evalPic,s)}}})])})),1)],1)])})),0):t._e(),n("van-row")],1):t._e()])}))],2)],1)],1),n("van-action-sheet",{attrs:{actions:t.deleteActions,"cancel-text":"取消",round:"","close-on-click-action":""},on:{select:t.delCommentAction},model:{value:t.deleteShow,callback:function(e){t.deleteShow=e},expression:"deleteShow"}}),n("Preview",{ref:"myPreview",attrs:{images:t.images},on:{indexChange:t.indexChange}})],1)},a=[],i=(s("ac6a"),s("5629")),o=s("d399"),r=s("2241"),c=s("e036"),l=s("da6f"),d=s("387e"),u=(s("1af5"),s("da6a")),f={name:"MyComments",created:function(){},mounted:function(){},activated:function(){this.$route.params.fromFind?(console.log("from find page, reset scroll top and reload my note list."),this.resetData(),document.querySelector(".wrapper").scrollTop=0,this.isEnterNLoading=!0,this.userInfo=l["b"].get("userInfo")?l["b"].get("userInfo"):{},this.loadNotes(1)):document.querySelector(".wrapper").scrollTop=this.scrollTop},data:function(){return{count:0,selections:[],deleteActions:[{name:"删除"}],selectCatCode:"",reportShow:!1,deleteShow:!1,loading:!1,finished:!1,isLoading:!1,isEnterNLoading:!0,noteTotal:0,pageNumber:1,background:{backgroundImage:"url("+s("36ad")+") ",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},noteData:[],userInfo:{},isLikeSetting:!1,images:[],scrollTop:0,imgComps:[]}},components:{Preview:c["a"],NavigationBar:u["a"]},methods:{resetData:function(){this.selectCatCode="",this.reportShow=!1,this.deleteShow=!1,this.loading=!1,this.finished=!1,this.isLoading=!1,this.isEnterNLoading=!0,this.noteTotal=0,this.pageNumber=1,this.noteData=[],this.userInfo={},this.isLikeSetting=!1,this.images=[],this.scrollTop=0,this.imgComps=[]},loadNotes:function(t){var e=this,s=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Object(i["j"])({areaCode:this.userInfo.AREA_CODE,ownerCode:this.userInfo.USER_CODE,page:t,rows:10}).then((function(t){s&&(e.noteData=[],e.pageNumber=1),t.data.hasNextPage||(e.finished=!0),e.loading=!1,e.isLoading=!1,e.isEnterNLoading&&(e.isEnterNLoading=!1),t.data.list.forEach((function(t){e.noteData.push(t)})),e.pageNumber++}),(function(t){e.isLoading=!1,e.loading=!1,e.isEnterNLoading&&(e.isEnterNLoading=!1)})).catch((function(t){e.finished=!0,e.loading=!1,e.isLoading=!1,e.isEnterNLoading&&(e.isEnterNLoading=!1),o["a"].fail(t)}))},replyAction:function(t,e,s){if(this.userInfo.USER_CODE===t.userCode)this.deleteShow=!0,this.replyNoteIndex=s,this.delActionObj={noteCode:e,evalCode:t.evalCode};else{var n=Object.assign(d["a"].objectFullCopy(t),{NOTE_CODE:e});this.asyncUpdateNoteMsg(e,s),this.scrollTop=document.querySelector(".wrapper").scrollTop,this.$router.push({name:"addNote",params:{pageType:"reply",replyParam:JSON.stringify(n),fromComments:1}})}},asyncUpdateNoteMsg:function(t,e){var s=this;l["b"].set("updateNoteMsgInComments",(function(){Object(i["i"])({noteCode:t}).then((function(t){s.$set(s.noteData,e,t.data)})).catch((function(t){o["a"].fail(t)}))}))},delCommentAction:function(){var t=this,e=this.delActionObj,s=e.noteCode,n=e.evalCode;Object(i["c"])(s,n).then((function(){return Object(i["i"])({noteCode:s})})).then((function(e){t.$set(t.noteData,t.replyNoteIndex,e.data)})).catch((function(t){o["a"].fail(t)}))},addComments:function(t,e){this.asyncUpdateNoteMsg(t,e),this.scrollTop=document.querySelector(".wrapper").scrollTop,this.$router.push({name:"addNote",params:{pageType:"comments",noteCode:t,fromComments:1}})},preview:function(t,e){var s=t.map((function(t){return t}));this.images=s,this.indexChange(e),this.$refs.myPreview.setIndex(e),this.$refs.myPreview.setIsShowPreview(!0)},indexChange:function(t){var e=this,s=this.images[t];if(-1!=s.lastIndexOf("@")){var n,a=s.lastIndexOf("."),i=s.lastIndexOf("@"),o=s.substring(0,i)+s.substring(a,s.length);0!=this.imgComps.length&&this.imgComps[t]?this.imgComps[t].onload=null:this.imgComps[t]=new Image,n=this.imgComps[t],n.onload=function(){e.$set(e.images,t,o)},n.src=o}},setLike:function(t,e,s){var n=this;if(this.isLikeSetting)console.log("like is setting.");else{this.isLikeSetting=!0;var a={concemflag:1,isProperty:1,noteCode:t,userCode:this.userInfo.USER_CODE};a.concemflag=s&&s.some((function(t){return t.userCode==a.userCode}))?0:1,Object(i["l"])(a).then((function(e){return Object(i["i"])({noteCode:t})})).then((function(t){n.isLikeSetting=!1,n.$set(n.noteData,e,t.data)})).catch((function(t){n.isLikeSetting=!1,o["a"].fail(t)}))}},deleteNote:function(t){var e=this;r["a"].confirm({title:"提示",message:"确定删除此贴？"}).then((function(){return Object(i["d"])(t,e.userInfo.USER_CODE).then((function(t){e.loadNotes(1)})).catch((function(t){o["a"].fail(t)}))}))},loadMoreNote:function(){this.isEnterNLoading?console.log("Enter and loading now, ignore load more."):this.loadNotes(this.pageNumber,!1)},checkLike:function(t){var e=this;return!!t&&t.some((function(t){return t.userCode==e.userInfo.USER_CODE}))},goBack:function(){l["b"].get("updateNoteMsg")(!1),this.$router.back(-1)}}},g=f,h=(s("3cc8"),s("2877")),p=Object(h["a"])(g,n,a,!1,null,"390a1cde",null);e["default"]=p.exports},"3cc8":function(t,e,s){"use strict";var n=s("3d2d"),a=s.n(n);a.a},"3d2d":function(t,e,s){},"4f11":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAqhJREFUeAHtms1L1UEUhtX8IJUwEEGiRKggEqGNiwpx08qiaOEmMKE2QctyIfQXRGAtxJ0o1CYEEaTCRYsgqEUgRAWChIohRBpEH1TengMOHIZWwoHD3HPgZebcO8yc5x283pnframJCAfCgXAgHAgHwoFwIBwIB8KBcMChA5VKpRu9QJto2GGJdiUB3Is+oRTrdqs5mxnifrSdyHfbGWdl2pQD7CX0I4OfJq+3WdHRrEBeR38y+LvktY7KtCkFyLEMfIf8ls1qjmaV3UX3M/jf5FcdlWlTCpAN6FEG/5180GZFR7MC2YqeZfBfyE87KtOmFCDb0esMfp38pM2KjmYFsgt9QDokP+KoTJtSgOxBstM6XpG026zoaFYgzyD5G9fxlKTFUZk2pQB5Hsmnu46HJA02KzqaFcgRJP/XdYyTVMW3u1FNvdsfc7Q/NqXI7qJ7Gbx8x79ms6KjWYGsRzMZvJzuLjoq06YUIJvRQgYv5/p+mxWdzQroXAa/Qd7rrEy7coBdzQyYsFvN4czAX0H5hcYkr9U5LNemJGAvo59Ix2OSRpsVHc4K7AD6qh2gv4haHZZrUxKwp5Dc5+uQI3D5B59kKbBH0Yp2gP57dDiNKb4FthMtIR1rJCeKh0+AwLYhecSl4zNJXxpTfAvsfjSvHaD/DZ0rHj4BAivnhCmk4xfJUBpTfAusnBTlaY+OvyQ3iofXgADfRvL0R8cdPab4PuT/uy16wOvl3xal3QX2AsrvC+VpUfn3hcqEswBvIR1PSJrTmOJbYOUXIXJ/oOMlycHi4RMgsN1oWTtA/y06lMYU3wLbgd4gHR9JjhUPnwCBPYCeIx1L6f2qaCFvQrPKgXdVAa4hgd+HbiL5Bclx/V70w4FwIBwIB8KBcCAcCAfCgXBgzw78A2Wj4+ezw0gaAAAAAElFTkSuQmCC"},"960f":function(t,e,s){"use strict";var n=s("2627"),a=s.n(n);a.a},da6a:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navBar van-nav-bar",style:t.navBarStyle},[t.isShowLeft?s("div",{staticClass:"left",style:t.bothWidth,on:{click:function(e){return t.$emit("onLeftClick")}}},[t.isShowBack?s("img",{attrs:{src:t.backImg,alt:"",srcset:""}}):t._e(),t._t("nav-left")],2):t._e(),s("div",{staticClass:"center"},[t.isDefault?s("span",{staticClass:"title"},[t._v(t._s(t.pageName))]):t._e(),t._t("nav-center")],2),t.isShowRight?s("div",{staticClass:"right",style:t.bothWidth},[t._t("nav-right")],2):t._e()])},a=[],i={props:{isDefault:{default:!0,type:Boolean},bothWidth:{type:Object,default:function(){return{width:"36px"}}},isShowRight:{default:!0,type:Boolean},isShowLeft:{default:!0,type:Boolean},isShowBack:{default:!0,type:Boolean},leftImgType:{type:String,default:"0"},pageName:{default:"",type:String},navBarStyle:{type:Object,default:function(){return{backgroundColor:"#fff"}}}},data:function(){return{backImg:s("4f11")}},mounted:function(){this.isLeftImg()},methods:{isLeftImg:function(){switch(this.leftImgType){case"0":this.backImg=s("4f11");break;case"1":this.backImg=s("4f11");break}}}},o=i,r=(s("960f"),s("2877")),c=Object(r["a"])(o,n,a,!1,null,"7e35d797",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-148e18a6.5b691ed1.js.map