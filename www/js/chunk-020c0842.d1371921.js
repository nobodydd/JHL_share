(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-020c0842"],{2627:function(t,e,a){},"4f11":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAqhJREFUeAHtms1L1UEUhtX8IJUwEEGiRKggEqGNiwpx08qiaOEmMKE2QctyIfQXRGAtxJ0o1CYEEaTCRYsgqEUgRAWChIohRBpEH1TengMOHIZWwoHD3HPgZebcO8yc5x283pnframJCAfCgXAgHAgHwoFwIBwIB8KBcMChA5VKpRu9QJto2GGJdiUB3Is+oRTrdqs5mxnifrSdyHfbGWdl2pQD7CX0I4OfJq+3WdHRrEBeR38y+LvktY7KtCkFyLEMfIf8ls1qjmaV3UX3M/jf5FcdlWlTCpAN6FEG/5180GZFR7MC2YqeZfBfyE87KtOmFCDb0esMfp38pM2KjmYFsgt9QDokP+KoTJtSgOxBstM6XpG026zoaFYgzyD5G9fxlKTFUZk2pQB5Hsmnu46HJA02KzqaFcgRJP/XdYyTVMW3u1FNvdsfc7Q/NqXI7qJ7Gbx8x79ms6KjWYGsRzMZvJzuLjoq06YUIJvRQgYv5/p+mxWdzQroXAa/Qd7rrEy7coBdzQyYsFvN4czAX0H5hcYkr9U5LNemJGAvo59Ix2OSRpsVHc4K7AD6qh2gv4haHZZrUxKwp5Dc5+uQI3D5B59kKbBH0Yp2gP57dDiNKb4FthMtIR1rJCeKh0+AwLYhecSl4zNJXxpTfAvsfjSvHaD/DZ0rHj4BAivnhCmk4xfJUBpTfAusnBTlaY+OvyQ3iofXgADfRvL0R8cdPab4PuT/uy16wOvl3xal3QX2AsrvC+VpUfn3hcqEswBvIR1PSJrTmOJbYOUXIXJ/oOMlycHi4RMgsN1oWTtA/y06lMYU3wLbgd4gHR9JjhUPnwCBPYCeIx1L6f2qaCFvQrPKgXdVAa4hgd+HbiL5Bclx/V70w4FwIBwIB8KBcCAcCAfCgXBgzw78A2Wj4+ezw0gaAAAAAElFTkSuQmCC"},"53e7":function(t,e,a){},"78d2":function(t,e,a){t.exports=a.p+"www/img/default.616f61f2.png"},"913d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"recognition-detail"},[s("navigation-bar",{attrs:{pageName:t.pageName},on:{onLeftClick:t.goBack}}),s("div",{staticClass:"detail-box"},[t.roomInfo.length>0?s("van-swipe",{staticClass:"my-swipe",attrs:{"indicator-color":"#00cccc"}},t._l(t.roomInfo,(function(e,a){return s("van-swipe-item",{key:a},[s("div",{staticClass:"content"},[s("div",{staticClass:"item"},[s("span",{staticClass:"title"},[t._v("姓名")]),s("span",{staticClass:"value"},[t._v(t._s(t.info.name))])]),s("div",{staticClass:"item"},[s("span",{staticClass:"title"},[t._v("性别")]),s("span",{staticClass:"value"},[t._v(t._s("0"==t.info.sex?"男":"女"))])]),s("div",{staticClass:"item"},[s("span",{staticClass:"title"},[t._v("手机号")]),s("span",{staticClass:"value"},[t._v(t._s(t.info.phone))])]),s("div",{staticClass:"item"},[s("span",{staticClass:"title"},[t._v("身份")]),s("span",{staticClass:"value"},[t._v(t._s(t.info.groupName))])]),s("div",{staticClass:"item"},[s("span",{staticClass:"title"},[t._v("住址")]),s("span",{staticClass:"value"},[t._v(t._s(e.doorNum))])]),s("div",{staticClass:"item"},[s("span",{staticClass:"title"},[t._v("是否录入人脸")]),s("span",{staticClass:"value"},[t._v(t._s(t.hasPic?"是":"否"))])])])])})),1):s("div",{staticClass:"content"},[s("div",{staticClass:"item"},[s("span",{staticClass:"title"},[t._v("姓名")]),s("span",{staticClass:"value"},[t._v(t._s(t.info.name))])]),s("div",{staticClass:"item"},[s("span",{staticClass:"title"},[t._v("性别")]),s("span",{staticClass:"value"},[t._v(t._s("1"==t.info.sex?"男":"女"))])]),s("div",{staticClass:"item"},[s("span",{staticClass:"title"},[t._v("手机号")]),s("span",{staticClass:"value"},[t._v(t._s(t.info.phone))])]),s("div",{staticClass:"item"},[s("span",{staticClass:"title"},[t._v("身份")]),s("span",{staticClass:"value"},[t._v(t._s(t.info.groupName))])]),s("div",{staticClass:"item"},[s("span",{staticClass:"title"},[t._v("住址")]),s("span",{staticClass:"value"},[t._v("暂无数据")])]),s("div",{staticClass:"item"},[s("span",{staticClass:"title"},[t._v("是否录入人脸")]),s("span",{staticClass:"value"},[t._v(t._s(t.hasPic?"是":"否"))])])]),s("div",{staticClass:"img-area"},[s("img",{attrs:{src:t.hasPic?t.undefaultPic:t.defaultPic}}),s("button",{staticClass:"upload-btn",on:{click:function(e){t.showPhotoSelectSheet=!0}}},[s("img",{attrs:{src:a("e9e4")}}),t._v("\n          "+t._s(t.hasPic?"重新上传":"录入人脸照片")+"\n        ")])])],1),s("van-action-sheet",{attrs:{actions:t.actions,"cancel-text":"取消",round:"","close-on-click-action":""},on:{select:t.onClickedGetPhoto},model:{value:t.showPhotoSelectSheet,callback:function(e){t.showPhotoSelectSheet=e},expression:"showPhotoSelectSheet"}})],1)},i=[],n=(a("ac6a"),a("bd86")),o=(a("7f7f"),a("da6f")),c=a("ab2c"),l=a("e02d"),f=a("1b06"),r=a("da6a");function u(t){top.postMessage({method:"xt_camera",params:{xtid:t}},"*")}function d(t,e,a,s){top.postMessage({method:"xt_fileTransfer",params:{reqUrl:t,fileURL:e,xtid:a,options:s}},"*")}var A={name:"recognitionDetail",components:Object(n["a"])({NavigationBar:r["a"]},c["a"].name,c["a"]),data:function(){return{pageName:"业主人脸录入",custNews:null,faceId:"",info:{},roomInfo:[],hasPic:!1,defaultPic:a("78d2"),undefaultPic:"",showPhotoSelectSheet:!1,actions:[{name:"拍照"},{name:"从手机相册选择"}]}},created:function(){this.custNews=o["b"].get("custNews"),window.addEventListener("message",(function(t){if("xt_camera"==t.method)"success"==t.result?this.uploadPhotoFile(t.data):this.$toast("上传图片失败");else if("xt_fileTransfer"==t.method)if("success"==t.result){var e=o["b"].get("showLoadingView");e&&e(!1);var a=JSON.parse(t.data.response);if(console.log("--code--"+a.code),200==a.code){var s=a.data.fileupload.id;this.getPic(s),this.face2Device(),this.$toast("上传成功，正在下发设备")}else console.log("facePic--false"),this.picUrl="",this.$toast(a.message)}else this.$toast("上传图片失败");else"uploadPic"==t.method&&this.uploadHeadPhotoFile(t.params.reqUrl,t.params.fileURL)}),!1)},mounted:function(){this.faceId=this.$route.query.id,console.log("人脸详情"+this.faceId),this.getFaceInfoDetail()},methods:{goBack:function(){this.$router.push({path:"/recognition"})},getFaceInfoDetail:function(){this.loading=!0;var t=this;Object(l["a"])(this.faceId).then((function(e){t.loading=!1;e.data;if(t.info=e.data.model,t.roomInfo=e.data.rooms,t.info.faceFileId){console.log("有照片,调用download展示照片");var a=t.info.faceFileId;t.getPic(a)}})).catch((function(e){t.loading=!1,console.log("获取人脸详情报错了",e),t.$toast(e)}))},getPic:function(t){var e=this;this.loading=!0,console.log("--getPic--download--"),Object(l["c"])(t).then((function(t){console.log("获取图片成功",t);var a=new Blob([t.data],{type:"application/octet-stream;charset=utf-8"});console.log(URL.createObjectURL(a)),e.undefaultPic=URL.createObjectURL(a),e.hasPic=!0,e.loading=!1}))},onClickedGetPhoto:function(t,e){this.getPictureData(e)},getPictureData:function(t){t?this.getLocalPicture():this.useCamera()},getLocalPicture:function(){var t=this;this.$plugin.usePlugin("getPictures")(1,(function(e){e.forEach((function(e){t.uploadPhotoFile(e)}))}),(function(e){t.$toast(e)}))},useCamera:function(){u("xt01")},uploadPhotoFile:function(t){var e=o["b"].get("showLoadingView");e&&e(!0),console.log("--uploadPhotoFile--");var a=o["a"].getStorage("xtBaseUrl")+"/web/face/check/pic",s=new FileUploadOptions,i={};i.file=t,i.type="face",i.edit="edit",i.faceId=this.faceId,s.params=i;var n=o["a"].getStorage("controlToken");s.headers={contentType:"multipart/form-data"},s.headers={Authorization:n},d(a,encodeURI(t),"xt01",s)},face2Device:function(){var t=this;console.log("--face2Device--"),this.loading=!0,Object(f["e"])(this.faceId,this.custNews.AREA_CODE).then((function(e){t.loading=!1,console.log(t.faceId),console.log(JSON.stringify(e)),"200"==e.code?t.$toast("成功下发设备"):t.$toast("下发设备失败，请去物业后台进行人脸下发")})).catch((function(e){t.loading=!1,t.$toast("下发设备失败，请去物业后台进行人脸下发")}))}}},h=A,p=(a("e100"),a("2877")),g=Object(p["a"])(h,s,i,!1,null,"6b8b422e",null);e["default"]=g.exports},"960f":function(t,e,a){"use strict";var s=a("2627"),i=a.n(s);i.a},da6a:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navBar van-nav-bar",style:t.navBarStyle},[t.isShowLeft?a("div",{staticClass:"left",style:t.bothWidth,on:{click:function(e){return t.$emit("onLeftClick")}}},[t.isShowBack?a("img",{attrs:{src:t.backImg,alt:"",srcset:""}}):t._e(),t._t("nav-left")],2):t._e(),a("div",{staticClass:"center"},[t.isDefault?a("span",{staticClass:"title"},[t._v(t._s(t.pageName))]):t._e(),t._t("nav-center")],2),t.isShowRight?a("div",{staticClass:"right",style:t.bothWidth},[t._t("nav-right")],2):t._e()])},i=[],n={props:{isDefault:{default:!0,type:Boolean},bothWidth:{type:Object,default:function(){return{width:"36px"}}},isShowRight:{default:!0,type:Boolean},isShowLeft:{default:!0,type:Boolean},isShowBack:{default:!0,type:Boolean},leftImgType:{type:String,default:"0"},pageName:{default:"",type:String},navBarStyle:{type:Object,default:function(){return{backgroundColor:"#fff"}}}},data:function(){return{backImg:a("4f11")}},mounted:function(){this.isLeftImg()},methods:{isLeftImg:function(){switch(this.leftImgType){case"0":this.backImg=a("4f11");break;case"1":this.backImg=a("4f11");break}}}},o=n,c=(a("960f"),a("2877")),l=Object(c["a"])(o,s,i,!1,null,"7e35d797",null);e["a"]=l.exports},e02d:function(t,e,a){"use strict";a.d(e,"e",(function(){return c})),a.d(e,"d",(function(){return l})),a.d(e,"g",(function(){return f})),a.d(e,"f",(function(){return r})),a.d(e,"b",(function(){return u})),a.d(e,"a",(function(){return d})),a.d(e,"c",(function(){return A}));var s=a("bc3a"),i=a.n(s),n=a("2b69"),o=(a("96e6"),a("da6f")),c=function(t){return new Promise((function(e,a){n["a"].get("/web/face/app/wy/selectRegion",t).then((function(t){e(t)})).catch((function(t){a(t)}))}))},l=function(t){return new Promise((function(e,a){n["a"].get("/web/face/app/wy/selectBuild",t).then((function(t){e(t)})).catch((function(t){a(t)}))}))},f=function(t){return new Promise((function(e,a){n["a"].get("/web/face/app/wy/selectUnit",t).then((function(t){e(t)})).catch((function(t){a(t)}))}))},r=function(t){return new Promise((function(e,a){n["a"].get("/web/face/app/wy/selectRoom",t).then((function(t){e(t)})).catch((function(t){a(t)}))}))},u=function(t){return new Promise((function(e,a){n["a"].get("/web/face/app/wy/find",t).then((function(t){e(t)})).catch((function(t){a(t)}))}))},d=function(t){return new Promise((function(e,a){n["a"].get("/web/face/app/wy/"+t).then((function(t){e(t)})).catch((function(t){a(t)}))}))},A=function(t){return i()({url:o["a"].getStorage("xtBaseUrl")+"/subsystem/api/support/ftps/download1?id="+t,method:"get",responseType:"arraybuffer",ignoreCodeValidation:!0})}},e100:function(t,e,a){"use strict";var s=a("53e7"),i=a.n(s);i.a},e9e4:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAFAAAAAAnxZisAAABp0lEQVQ4EZWVPUsDQRCGL0YFvwIWYmVppYRgZ2EhCBaiaCE2gmBlZ2EpWAk2gv8hlUUKOy0UtBYrQRtjpWhAFBQjEeP5TGDXYe92ww087Ds7X7lk9xJFAYvjeBHewWc1AguBFv4QhfPw7eus9hvoOV+nHMFVgsuQc5Jm8budPZ/bIHDiBH/xKzLgE9HrBNPcmM0aSOEw5KGd1SP1qD75RmADBk03dAHW4BmC1m7AOdUjprG7EhuCo9CE0IAqhfarQ/fBFEzDgBmG7oQrSLXQgBnVZIXqV9XhA72u4kX81BPnG3ChiicpbqrmWspJaxmbhzpgdIdJcNYz5W+jfXk7Ku9UaSt9hY82I4omlHZlSW08KG2lb4D9ccl8sdlJoWM9ybD/0cdUsntDVSg6Vs640v/S/BjO+oTfegrWfrhx4uLeQ+vysebhGhLmO0WSeGA+BlruwB5cgpz5fSio+BZ+qoUGyNG0d8E0c1dySlBP7c5maIDU/MAudKU0lhflJnyB1yRJ3pLt7I6ECtxCE0ZhCYoQNBkgr1/3vyBYlCEYyz0oZyjImlr+A21cIn7EeE/zAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=chunk-020c0842.d1371921.js.map