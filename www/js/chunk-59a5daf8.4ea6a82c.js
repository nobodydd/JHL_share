(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59a5daf8"],{"0613":function(t,e,i){"use strict";var o=i("8220"),n=i.n(o);n.a},2627:function(t,e,i){},"4e4d":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("ul",{staticClass:"image-list"},[t._l(t.selectPictures,(function(e,i){return o("li",{key:i,style:{width:t.imageWidthAndHeight+"px",height:t.imageWidthAndHeight+"px"}},[t.isShowAdd?o("van-icon",{staticClass:"delete-picture",attrs:{color:"rgb(181, 181, 181)",name:"clear"},on:{click:function(e){return t.deletePicture(i)}}}):t._e(),o("img",{attrs:{src:e,alt:""},on:{click:function(e){return t.preview(i)}}})],1)})),t.accountAddImage&&t.isShowAdd?o("li",[o("div",{staticClass:"add-image",on:{click:t.addAction}},[o("img",{staticClass:"cls-icon",attrs:{src:i("974a"),alt:""}})])]):t._e()],2)])},n=[],a=(i("ac6a"),i("c5f6"),i("28a2")),s=i("d399"),c=(i("a49b"),i("da6f")),r={name:"AddImage",props:{maxImageCount:{type:Number,default:4},selectPictures:{type:Array,default:function(){return[]}},isShowAdd:{type:Boolean,default:!0},imageType:{type:Number,default:-1}},data:function(){return{}},mounted:function(){var t=document.querySelector(".image-list");this.imageWidthAndHeight=t.offsetWidth/4},computed:{accountAddImage:function(){return this.selectPictures.length<this.maxImageCount},maximumImagesCount:function(){return this.maxImageCount-this.selectPictures.length}},watch:{selectPictures:function(t,e){console.log(t),this.$emit("imageMapChange",this.selectPictures.slice(0))}},methods:{preview:function(t){Object(a["a"])({images:this.selectPictures,startPosition:t})},addAction:function(){this.$emit("imageAddAction")},deletePicture:function(t){this.selectPictures.splice(t,1)},addSelect:function(t,e){e?this.getPicture():this.useCamera()},useCamera:function(){var t=this;this.$plugin.usePlugin("camera")((function(e){t.uploadFile(e)}),(function(t){s["a"].fail(t)}))},uploadFile:function(t){var e=this,i=s["a"].loading({duration:0,mask:!0,message:"加载中..."}),o="".concat(c["b"].get("custUrl.homeUrl"),"xwj-sys-media/media/upload/uploadFile"),n={params:{file:"",source:"wyApp",business:"complPic"}};1==this.imageType&&(n.params.business="dicoveryPic"),n.headers={contentType:"multipart/form-data"},this.$plugin.usePlugin("fileTransfer")(o,t,(function(t){i.clear();var o=JSON.parse(t.response);"0"==o.resultCode?e.selectPictures.push(o.data):s["a"].fail(o.msg)}),(function(t){i.clear(),s["a"].fail(t)}),n)},getPicture:function(){var t=this;this.$plugin.usePlugin("getPictures")(this.maximumImagesCount,(function(e){e.forEach((function(e){t.uploadFile(e)}))}),(function(t){s["a"].fail(t)}))}}},l=r,u=(i("0613"),i("2877")),d=Object(u["a"])(l,o,n,!1,null,"0fc768a1",null);e["a"]=d.exports},"4f11":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAqhJREFUeAHtms1L1UEUhtX8IJUwEEGiRKggEqGNiwpx08qiaOEmMKE2QctyIfQXRGAtxJ0o1CYEEaTCRYsgqEUgRAWChIohRBpEH1TengMOHIZWwoHD3HPgZebcO8yc5x283pnframJCAfCgXAgHAgHwoFwIBwIB8KBcMChA5VKpRu9QJto2GGJdiUB3Is+oRTrdqs5mxnifrSdyHfbGWdl2pQD7CX0I4OfJq+3WdHRrEBeR38y+LvktY7KtCkFyLEMfIf8ls1qjmaV3UX3M/jf5FcdlWlTCpAN6FEG/5180GZFR7MC2YqeZfBfyE87KtOmFCDb0esMfp38pM2KjmYFsgt9QDokP+KoTJtSgOxBstM6XpG026zoaFYgzyD5G9fxlKTFUZk2pQB5Hsmnu46HJA02KzqaFcgRJP/XdYyTVMW3u1FNvdsfc7Q/NqXI7qJ7Gbx8x79ms6KjWYGsRzMZvJzuLjoq06YUIJvRQgYv5/p+mxWdzQroXAa/Qd7rrEy7coBdzQyYsFvN4czAX0H5hcYkr9U5LNemJGAvo59Ix2OSRpsVHc4K7AD6qh2gv4haHZZrUxKwp5Dc5+uQI3D5B59kKbBH0Yp2gP57dDiNKb4FthMtIR1rJCeKh0+AwLYhecSl4zNJXxpTfAvsfjSvHaD/DZ0rHj4BAivnhCmk4xfJUBpTfAusnBTlaY+OvyQ3iofXgADfRvL0R8cdPab4PuT/uy16wOvl3xal3QX2AsrvC+VpUfn3hcqEswBvIR1PSJrTmOJbYOUXIXJ/oOMlycHi4RMgsN1oWTtA/y06lMYU3wLbgd4gHR9JjhUPnwCBPYCeIx1L6f2qaCFvQrPKgXdVAa4hgd+HbiL5Bclx/V70w4FwIBwIB8KBcCAcCAfCgXBgzw78A2Wj4+ezw0gaAAAAAElFTkSuQmCC"},"55c4":function(t,e,i){t.exports=i.p+"www/img/query.1e3c5341.png"},6353:function(t,e,i){"use strict";var o=i("76aa"),n=i.n(o);n.a},"76aa":function(t,e,i){},8220:function(t,e,i){},"960f":function(t,e,i){"use strict";var o=i("2627"),n=i.n(o);n.a},"974a":function(t,e){t.exports="data:image/png;base64,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"},ab82:function(t,e,i){"use strict";var o=i("bb7f"),n=i.n(o);n.a},bb7f:function(t,e,i){},da6a:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navBar van-nav-bar",style:t.navBarStyle},[t.isShowLeft?i("div",{staticClass:"left",style:t.bothWidth,on:{click:function(e){return t.$emit("onLeftClick")}}},[t.isShowBack?i("img",{attrs:{src:t.backImg,alt:"",srcset:""}}):t._e(),t._t("nav-left")],2):t._e(),i("div",{staticClass:"center"},[t.isDefault?i("span",{staticClass:"title"},[t._v(t._s(t.pageName))]):t._e(),t._t("nav-center")],2),t.isShowRight?i("div",{staticClass:"right",style:t.bothWidth},[t._t("nav-right")],2):t._e()])},n=[],a={props:{isDefault:{default:!0,type:Boolean},bothWidth:{type:Object,default:function(){return{width:"36px"}}},isShowRight:{default:!0,type:Boolean},isShowLeft:{default:!0,type:Boolean},isShowBack:{default:!0,type:Boolean},leftImgType:{type:String,default:"0"},pageName:{default:"",type:String},navBarStyle:{type:Object,default:function(){return{backgroundColor:"#fff"}}}},data:function(){return{backImg:i("4f11")}},mounted:function(){this.isLeftImg()},methods:{isLeftImg:function(){switch(this.leftImgType){case"0":this.backImg=i("4f11");break;case"1":this.backImg=i("4f11");break}}}},s=a,c=(i("960f"),i("2877")),r=Object(c["a"])(s,o,n,!1,null,"7e35d797",null);e["a"]=r.exports},da6e:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"workFinish"},[i("navigation-bar",{attrs:{pageName:"工单完成"},on:{onLeftClick:t.goBack}}),i("div",{staticClass:"box"},[i("div",{staticClass:"field-box"},[i("van-field",{attrs:{clickable:"",label:"责任单位","input-align":"right",placeholder:"请选择责任单位","right-icon":t.queryIcon},on:{"click-right-icon":t.getCompanyList},model:{value:t.filterCompany,callback:function(e){t.filterCompany=e},expression:"filterCompany"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.companyName.length>0,expression:"companyName.length > 0"}],staticClass:"show-list"},t._l(t.companyName,(function(e,o){return i("div",{key:o},[t._v("\n                    "+t._s(e)+"\n                ")])})),0),i("van-field",{attrs:{clickable:"",label:"施工单位","input-align":"right",placeholder:"请选择施工单位","right-icon":t.queryIcon},on:{"click-right-icon":t.getConstructionList},model:{value:t.filterConstruction,callback:function(e){t.filterConstruction=e},expression:"filterConstruction"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.constructionName.length>0,expression:"constructionName.length > 0"}],staticClass:"show-list"},t._l(t.constructionName,(function(e,o){return i("div",{key:o},[t._v("\n                    "+t._s(e)+"\n                ")])})),0)],1),i("div",{staticClass:"area-box"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.workContent,expression:"workContent"}],attrs:{name:"",id:"",placeholder:"请填写完成情况...",maxlength:"100"},domProps:{value:t.workContent},on:{input:[function(e){e.target.composing||(t.workContent=e.target.value)},t.filterContent]}}),i("div",{staticClass:"num"},[t._v(t._s(t.workContent.length)+"/100")])]),i("div",{staticClass:"content"},[i("div",{staticClass:"visible-box"},[i("div",{staticClass:"title"},[t._v("业主是否可见")]),i("van-switch",{attrs:{size:"24px","active-color":"#00d8d1","inactive-color":"#FFFFFF"},model:{value:t.isVisiable,callback:function(e){t.isVisiable=e},expression:"isVisiable"}})],1),i("div",{staticClass:"photo-box"},[t._m(0),i("div",{staticClass:"photo"},[i("add-image",{ref:"addImageComponent",on:{imageAddAction:t.showAddSheetControll,imageMapChange:t.upDateImageData}})],1)])])]),i("div",{staticClass:"submit-box"},[i("div",{staticClass:"submit",on:{click:t.finish}},[t._v("完成")])]),i("van-popup",{attrs:{position:"bottom"},model:{value:t.showCondition,callback:function(e){t.showCondition=e},expression:"showCondition"}},[i("div",{staticClass:"checkbox-box"},[i("div",{staticClass:"checkbox-group"},[i("van-checkbox-group",{on:{change:t.toggleValue},model:{value:t.conditionCodeList,callback:function(e){t.conditionCodeList=e},expression:"conditionCodeList"}},t._l(t.showList,(function(e,o){return i("van-checkbox",{key:o,attrs:{"checked-color":"#00d8d1",name:e.CONSTRU_CODE}},[t._v("\n            "+t._s(e.CONSTRU_NAME)+"\n            ")])})),1)],1),i("div",{staticClass:"checkbox-submit",on:{click:t.show}},[t._v("确定")])])]),i("van-action-sheet",{attrs:{actions:t.actions,"cancel-text":"取消",round:"","close-on-click-action":""},on:{select:t.addSelect},model:{value:t.showAddSheet,callback:function(e){t.showAddSheet=e},expression:"showAddSheet"}})],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("div",[t._v("上传图片")]),i("div",{staticClass:"limit"},[t._v("(最多4张)")])])}],a=(i("a481"),i("ac6a"),i("9e59")),s=i("da6f"),c=i("4e4d"),r=i("55c4"),l=i.n(r),u=i("da6a"),d={name:"workFinish",data:function(){return{isVisiable:!1,workContent:"",showCondition:!1,conditionCodeList:[],conditionNameList:[],selectType:0,showList:[],filterCompany:"",filterConstruction:"",companyCode:[],companyName:[],constructionCode:[],constructionName:[],workDetail:null,userInfo:null,actions:[{name:"拍照"},{name:"从手机相册选择"}],imgList:[],showAddSheet:!1,queryIcon:l.a}},components:{"add-image":c["a"],NavigationBar:u["a"]},created:function(){this.workDetail=this.$route.params,this.userInfo=s["b"].get("userInfo")},methods:{goBack:function(){this.$router.back(-1)},getCompanyList:function(){var t=this;this.selectType=0;var e={AREA_CODE:this.workDetail.areaCode};this.filterCompany&&(e.DUTY_CODE=this.filterCompany),Object(a["g"])({data:JSON.stringify(e)}).then((function(e){t.showList=e,t.conditionCodeList=t.companyCode.concat([]),t.conditionNameList=t.companyName.concat([]),t.showCondition=!0}),(function(e){t.$toast(e)}))},getConstructionList:function(){var t=this;this.companyCode.length<=0&&this.$toast("请先选择责任单位！"),this.selectType=1;var e={AREA_CODE:this.workDetail.areaCode};this.filterConstruction&&(e.CONSTRU_CODE=this.filterConstruction),Object(a["g"])({data:JSON.stringify(e)}).then((function(e){t.showList=e,t.conditionCodeList=t.constructionCode.concat([]),t.conditionNameList=t.constructionName.concat([]),t.showCondition=!0}),(function(e){t.$toast(e)}))},toggleValue:function(){var t=this;this.conditionNameList=[],this.showList.forEach((function(e){t.conditionCodeList.forEach((function(i){e.CONSTRU_CODE==i&&t.conditionNameList.push(e.CONSTRU_NAME)}))}))},show:function(){this.showCondition=!1,0==this.selectType&&(this.companyCode=this.conditionCodeList.concat([]),this.companyName=this.conditionNameList.concat([])),this.constructionCode=this.conditionCodeList.concat([]),this.constructionName=this.conditionNameList.concat([])},upDateImageData:function(t){this.imgList=t},showAddSheetControll:function(){this.showAddSheet=!this.showAddSheet},addSelect:function(t,e){this.getPictureData(e)},getPictureData:function(t){t?this.$refs.addImageComponent.getPicture():this.$refs.addImageComponent.useCamera()},filterContent:function(){this.workContent=this.workContent.replace(/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi,"")},finish:function(){var t=this;if(this.hasCompleteParam()){var e={complCode:this.workDetail.complCode,areaCode:this.workDetail.areaCode,roomCode:this.workDetail.roomCode,construCode:this.companyCode.join(","),dutyCode:this.constructionCode.join(","),createdBy:this.userInfo.USER_CODE,userCode:this.userInfo.USER_CODE,picUrl:this.imgList,content:this.workContent,isShow:this.isVisiable?1:0};Object(a["d"])(e).then((function(e){"0"==e.resultCode?(t.$toast("完成成功"),s["b"].set("workDetailComplCode",t.workDetail.complCode),t.goBack()):t.$toast(e.msg)}),(function(e){t.$toast(e)}))}},hasCompleteParam:function(){return this.companyCode.length<=0?(this.$toast("请选择责任单位！"),!1):!!this.workContent||(this.$toast("请填写完成信息！"),!1)}},computed:{}},h=d,f=(i("ab82"),i("6353"),i("2877")),m=Object(f["a"])(h,o,n,!1,null,"264d7b36",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-59a5daf8.4ea6a82c.js.map