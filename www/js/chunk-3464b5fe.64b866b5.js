(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3464b5fe"],{"0613":function(t,e,i){"use strict";var a=i("8220"),s=i.n(a);s.a},2627:function(t,e,i){},3996:function(t,e,i){"use strict";i.d(e,"c",(function(){return s})),i.d(e,"b",(function(){return n})),i.d(e,"d",(function(){return o})),i.d(e,"a",(function(){return c}));var a=i("ba6a"),s=function(t){return new Promise((function(e,i){a["a"].post("hisense-systemServer/app/property/getdeliveResult.do",t,!0,"homeUrl").then((function(t){e(t)}),(function(t){i(t)}))}))},n=function(t){return new Promise((function(e,i){a["a"].post("hisense-systemServer/app/property/getDelivePicByCode.do",t,!0,"homeUrl").then((function(t){e(t)}),(function(t){i(t)}))}))},o=function(t){return new Promise((function(e,i){a["a"].post("hisense-systemServer/app/property/saveDelivePic.do",t,!0,"homeUrl").then((function(t){e(t)}),(function(t){i(t)}))}))},c=function(t){return new Promise((function(e,i){a["a"].get("xwj-property-repair/complQuery/getWorkOrderList",t,!0).then((function(t){e(t)})).catch((function(t){i(t)}))}))}},"39be":function(t,e,i){"use strict";var a=i("b613"),s=i.n(a);s.a},4577:function(t,e,i){t.exports=i.p+"www/img/Floor.5ca59243.png"},"4e4d":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"image-list"},[t._l(t.selectPictures,(function(e,i){return a("li",{key:i,style:{width:t.imageWidthAndHeight+"px",height:t.imageWidthAndHeight+"px"}},[t.isShowAdd?a("van-icon",{staticClass:"delete-picture",attrs:{color:"rgb(181, 181, 181)",name:"clear"},on:{click:function(e){return t.deletePicture(i)}}}):t._e(),a("img",{attrs:{src:e,alt:""},on:{click:function(e){return t.preview(i)}}})],1)})),t.accountAddImage&&t.isShowAdd?a("li",[a("div",{staticClass:"add-image",on:{click:t.addAction}},[a("img",{staticClass:"cls-icon",attrs:{src:i("974a"),alt:""}})])]):t._e()],2)])},s=[],n=(i("ac6a"),i("c5f6"),i("28a2")),o=i("d399"),c=(i("a49b"),i("da6f")),r={name:"AddImage",props:{maxImageCount:{type:Number,default:4},selectPictures:{type:Array,default:function(){return[]}},isShowAdd:{type:Boolean,default:!0},imageType:{type:Number,default:-1}},data:function(){return{}},mounted:function(){var t=document.querySelector(".image-list");this.imageWidthAndHeight=t.offsetWidth/4},computed:{accountAddImage:function(){return this.selectPictures.length<this.maxImageCount},maximumImagesCount:function(){return this.maxImageCount-this.selectPictures.length}},watch:{selectPictures:function(t,e){console.log(t),this.$emit("imageMapChange",this.selectPictures.slice(0))}},methods:{preview:function(t){Object(n["a"])({images:this.selectPictures,startPosition:t})},addAction:function(){this.$emit("imageAddAction")},deletePicture:function(t){this.selectPictures.splice(t,1)},addSelect:function(t,e){e?this.getPicture():this.useCamera()},useCamera:function(){var t=this;this.$plugin.usePlugin("camera")((function(e){t.uploadFile(e)}),(function(t){o["a"].fail(t)}))},uploadFile:function(t){var e=this,i=o["a"].loading({duration:0,mask:!0,message:"加载中..."}),a="".concat(c["b"].get("custUrl.homeUrl"),"xwj-sys-media/media/upload/uploadFile"),s={params:{file:"",source:"wyApp",business:"complPic"}};1==this.imageType&&(s.params.business="dicoveryPic"),s.headers={contentType:"multipart/form-data"},this.$plugin.usePlugin("fileTransfer")(a,t,(function(t){i.clear();var a=JSON.parse(t.response);"0"==a.resultCode?e.selectPictures.push(a.data):o["a"].fail(a.msg)}),(function(t){i.clear(),o["a"].fail(t)}),s)},getPicture:function(){var t=this;this.$plugin.usePlugin("getPictures")(this.maximumImagesCount,(function(e){e.forEach((function(e){t.uploadFile(e)}))}),(function(t){o["a"].fail(t)}))}}},l=r,u=(i("0613"),i("2877")),d=Object(u["a"])(l,a,s,!1,null,"0fc768a1",null);e["a"]=d.exports},"4f11":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAqhJREFUeAHtms1L1UEUhtX8IJUwEEGiRKggEqGNiwpx08qiaOEmMKE2QctyIfQXRGAtxJ0o1CYEEaTCRYsgqEUgRAWChIohRBpEH1TengMOHIZWwoHD3HPgZebcO8yc5x283pnframJCAfCgXAgHAgHwoFwIBwIB8KBcMChA5VKpRu9QJto2GGJdiUB3Is+oRTrdqs5mxnifrSdyHfbGWdl2pQD7CX0I4OfJq+3WdHRrEBeR38y+LvktY7KtCkFyLEMfIf8ls1qjmaV3UX3M/jf5FcdlWlTCpAN6FEG/5180GZFR7MC2YqeZfBfyE87KtOmFCDb0esMfp38pM2KjmYFsgt9QDokP+KoTJtSgOxBstM6XpG026zoaFYgzyD5G9fxlKTFUZk2pQB5Hsmnu46HJA02KzqaFcgRJP/XdYyTVMW3u1FNvdsfc7Q/NqXI7qJ7Gbx8x79ms6KjWYGsRzMZvJzuLjoq06YUIJvRQgYv5/p+mxWdzQroXAa/Qd7rrEy7coBdzQyYsFvN4czAX0H5hcYkr9U5LNemJGAvo59Ix2OSRpsVHc4K7AD6qh2gv4haHZZrUxKwp5Dc5+uQI3D5B59kKbBH0Yp2gP57dDiNKb4FthMtIR1rJCeKh0+AwLYhecSl4zNJXxpTfAvsfjSvHaD/DZ0rHj4BAivnhCmk4xfJUBpTfAusnBTlaY+OvyQ3iofXgADfRvL0R8cdPab4PuT/uy16wOvl3xal3QX2AsrvC+VpUfn3hcqEswBvIR1PSJrTmOJbYOUXIXJ/oOMlycHi4RMgsN1oWTtA/y06lMYU3wLbgd4gHR9JjhUPnwCBPYCeIx1L6f2qaCFvQrPKgXdVAa4hgd+HbiL5Bclx/V70w4FwIBwIB8KBcCAcCAfCgXBgzw78A2Wj4+ezw0gaAAAAAElFTkSuQmCC"},8220:function(t,e,i){},8984:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"checkDetail"},[i("navigation-bar",{attrs:{pageName:"已验房详情"},on:{onLeftClick:t.goBack}},[t._t("right",[i("div",{staticClass:"nav-right",attrs:{slot:"right"},slot:"right"},[i("div",{on:{click:t.editDetail}},[t._v("修改")])])],{slot:"nav-right"})],2),i("div",{staticClass:"detail-box"},[i("div",{staticClass:"title"},[i("div",{staticClass:"left"},[i("img",{attrs:{src:t.floorIcon,alt:""}}),i("span",[t._v(t._s(t.roomDetail.BUILD_NAME)+" "+t._s(t.roomDetail.UNIT_NO)+" "+t._s(t.roomDetail.ROOM_NAME))])]),i("div",{staticClass:"right"},[i("img",{attrs:{src:t.checkIcon,alt:""}})])]),t.checkTime&&!t.isEdit?i("div",{staticClass:"list border"},[i("div",{staticClass:"ele1"},[t._v("交付时间")]),i("div",{staticClass:"ele2"},[t._v(t._s(t.checkTime))])]):t._e(),t.isEdit?i("van-field",{attrs:{readonly:"",clickable:"",label:"交付时间",value:t.showTime,"input-align":"right",placeholder:"请选择交付时间","right-icon":"arrow"},on:{click:function(e){t.showDatePicker=!0}}}):t._e(),i("div",{staticClass:"img-box"},[i("add-image",{ref:"addImageComponent",attrs:{"select-pictures":t.defaultImgList,"is-show-add":t.isEdit},on:{imageAddAction:t.showAddSheetControll,imageMapChange:t.upDateImageData}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isEdit,expression:"isEdit"}],staticClass:"pass-btn",on:{click:t.passCheck}},[t._v("通过")])],1),i("van-action-sheet",{attrs:{actions:t.actions,"cancel-text":"取消",round:"","close-on-click-action":""},on:{select:t.addSelect},model:{value:t.showAddSheet,callback:function(e){t.showAddSheet=e},expression:"showAddSheet"}}),i("van-popup",{attrs:{position:"bottom"},model:{value:t.showDatePicker,callback:function(e){t.showDatePicker=e},expression:"showDatePicker"}},[i("van-datetime-picker",{attrs:{type:"date",title:"选择交付时间","min-date":t.minDate,"max-date":t.maxDate},on:{cancel:function(e){t.showDatePicker=!1},confirm:t.selectDate},model:{value:t.workDate,callback:function(e){t.workDate=e},expression:"workDate"}})],1)],1)},s=[],n=(i("ac6a"),i("3996")),o=i("da6f"),c=i("4e4d"),r=i("4577"),l=i.n(r),u=i("9f38"),d=i.n(u),h=i("da6a"),f={name:"checkDetail",data:function(){return{roomDetail:null,isEdit:!1,actions:[{name:"拍照"},{name:"从手机相册选择"}],imgList:[],defaultImgList:[],showAddSheet:!1,floorIcon:l.a,checkIcon:d.a,checkTime:"",showTime:null,showDatePicker:!1,workDate:new Date,minDate:new Date(1919,0,1),maxDate:new Date(2090,11,31)}},components:{"add-image":c["a"],NavigationBar:h["a"]},created:function(){this.roomDetail=this.$route.params,this.isEdit=!1,this.showTime=null,this.getRoomsDetail()},beforeRouteLeave:function(t,e,i){i()},activated:function(){},methods:{selectDate:function(t){this.showDatePicker=!1,this.showTime=this.formatter(t),this.workDate=t},formatter:function(t){return t.getFullYear()+"-"+this.getTime(t.getMonth()+1)+"-"+this.getTime(t.getDate())},getTime:function(t){return t<10?"0"+t:t},getRoomsDetail:function(){var t=this,e={ROOM_CODE:this.roomDetail.ROOM_CODE};Object(n["b"])({data:JSON.stringify(e)}).then((function(e){t.checkTime="",e.forEach((function(e){t.defaultImgList.push(e.URL),t.checkTime||(t.checkTime=e.DELIVERY_DATE)})),t.defaultImgList.length>4&&t.defaultImgList.splice(0,4)}),(function(e){t.$toast(e)}))},editDetail:function(){this.isEdit=!this.isEdit,this.isEdit&&(this.showTime=this.checkTime)},goBack:function(){o["b"].set("reloadCheckHouseStatus",0),this.$router.back(-1)},upDateImageData:function(t){this.imgList=t},showAddSheetControll:function(){this.showAddSheet=!this.showAddSheet},addSelect:function(t,e){this.getPictureData(e)},getPictureData:function(t){t?this.$refs.addImageComponent.getPicture():this.$refs.addImageComponent.useCamera()},passCheck:function(){var t=this;if(this.hasCompleteParam()){var e={ROOM_CODE:this.roomDetail.ROOM_CODE,USER_CODE:o["b"].get("userInfo").USER_CODE,DELIVE_FLAG:this.roomDetail.DELIVE_FLAG,PIC_URL:this.imgList,FILETEXT:"",DELIVERY_DATE:this.showTime};Object(n["d"])({data:JSON.stringify(e)}).then((function(e){e.success&&t.goBack()}),(function(e){t.$toast(e)}))}},hasCompleteParam:function(){return!(this.imgList.length<=0)||(this.$toast("请选择图片！"),!1)}},computed:{}},m=f,g=(i("39be"),i("2877")),A=Object(g["a"])(m,a,s,!1,null,"18ae64e4",null);e["default"]=A.exports},"960f":function(t,e,i){"use strict";var a=i("2627"),s=i.n(a);s.a},"974a":function(t,e){t.exports="data:image/png;base64,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"},"9f38":function(t,e,i){t.exports=i.p+"www/img/checked2.1079ae2c.png"},b613:function(t,e,i){},da6a:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navBar van-nav-bar",style:t.navBarStyle},[t.isShowLeft?i("div",{staticClass:"left",style:t.bothWidth,on:{click:function(e){return t.$emit("onLeftClick")}}},[t.isShowBack?i("img",{attrs:{src:t.backImg,alt:"",srcset:""}}):t._e(),t._t("nav-left")],2):t._e(),i("div",{staticClass:"center"},[t.isDefault?i("span",{staticClass:"title"},[t._v(t._s(t.pageName))]):t._e(),t._t("nav-center")],2),t.isShowRight?i("div",{staticClass:"right",style:t.bothWidth},[t._t("nav-right")],2):t._e()])},s=[],n={props:{isDefault:{default:!0,type:Boolean},bothWidth:{type:Object,default:function(){return{width:"36px"}}},isShowRight:{default:!0,type:Boolean},isShowLeft:{default:!0,type:Boolean},isShowBack:{default:!0,type:Boolean},leftImgType:{type:String,default:"0"},pageName:{default:"",type:String},navBarStyle:{type:Object,default:function(){return{backgroundColor:"#fff"}}}},data:function(){return{backImg:i("4f11")}},mounted:function(){this.isLeftImg()},methods:{isLeftImg:function(){switch(this.leftImgType){case"0":this.backImg=i("4f11");break;case"1":this.backImg=i("4f11");break}}}},o=n,c=(i("960f"),i("2877")),r=Object(c["a"])(o,a,s,!1,null,"7e35d797",null);e["a"]=r.exports}}]);
//# sourceMappingURL=chunk-3464b5fe.64b866b5.js.map