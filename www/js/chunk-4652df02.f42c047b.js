(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4652df02"],{"11e7":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mineinfo-page"},[i("navigation-bar",{staticClass:"mineinfo-nav-bar",attrs:{border:!1,pageName:"账号信息"},on:{onLeftClick:t.onClickLeft}}),i("div",{staticClass:"mineinfo-content"},[i("div",{staticClass:"content-cell-head",on:{click:t.clickedHeaderSet}},[i("div",{staticClass:"mine-header-img"},[i("img",{attrs:{src:t.showUserImg,alt:""}})]),i("div",{staticClass:"cell-header-title"},[t._v("头像设置")]),i("div",{staticClass:"cell-next-icon"},[i("img",{attrs:{src:t.arrowIcon,alt:""}})])]),i("div",{staticClass:"content-cell"},[i("van-field",{attrs:{label:"账户",placeholder:"账号",size:"14","label-width":"60",disabled:""},model:{value:t.userInfo.userAccount,callback:function(e){t.$set(t.userInfo,"userAccount",e)},expression:"userInfo.userAccount"}})],1),i("div",{staticClass:"content-cell"},[i("van-field",{attrs:{label:"昵称",placeholder:"昵称",size:"14","label-width":"60",maxlength:"16"},model:{value:t.userInfo.userNickname,callback:function(e){t.$set(t.userInfo,"userNickname",e)},expression:"userInfo.userNickname"}})],1),i("div",{staticClass:"content-cell"},[i("van-field",{attrs:{label:"手机",placeholder:"手机",size:"14","label-width":"60"},model:{value:t.userInfo.userPhoneNum,callback:function(e){t.$set(t.userInfo,"userPhoneNum",e)},expression:"userInfo.userPhoneNum"}})],1),i("div",{staticClass:"content-push-cell"},[i("p",[t._v("发帖极光推送")]),i("van-switch",{staticClass:"push-switch",attrs:{size:"25"},model:{value:t.pushSwitchCtl,callback:function(e){t.pushSwitchCtl=e},expression:"pushSwitchCtl"}})],1),i("div",{staticClass:"saveButton",on:{click:t.onClickSave}},[t._v("保存")])]),i("van-action-sheet",{attrs:{actions:t.actions,"cancel-text":"取消",round:"","close-on-click-action":""},on:{select:t.onClickedGetPhoto},model:{value:t.showPhotoSelectSheet,callback:function(e){t.showPhotoSelectSheet=e},expression:"showPhotoSelectSheet"}})],1)},n=[],a=(i("4917"),i("ac6a"),i("d915")),r=i("da6f"),o=(i("a49b"),i("2b0e")),c=i("6b41"),l=i("565f"),u=i("d282"),h=i("ea8e"),f={size:[Number,String],value:null,loading:Boolean,disabled:Boolean,activeColor:String,inactiveColor:String,activeValue:{type:null,default:!0},inactiveValue:{type:null,default:!1}},d=i("78eb"),g=i("543e"),v=Object(u["a"])("switch"),m=v[0],p=v[1],b=m({mixins:[d["a"]],props:f,computed:{checked:function(){return this.value===this.activeValue},style:function(){return{fontSize:Object(h["a"])(this.size),backgroundColor:this.checked?this.activeColor:this.inactiveColor}}},methods:{onClick:function(t){if(this.$emit("click",t),!this.disabled&&!this.loading){var e=this.checked?this.inactiveValue:this.activeValue;this.$emit("input",e),this.$emit("change",e)}},genLoading:function(){var t=this.$createElement;if(this.loading){var e=this.checked?this.activeColor:this.inactiveColor;return t(g["a"],{class:p("loading"),attrs:{color:e}})}}},render:function(){var t=arguments[0],e=this.checked,i=this.loading,s=this.disabled;return t("div",{class:p({on:e,loading:i,disabled:s}),attrs:{role:"switch","aria-checked":String(e)},style:this.style,on:{click:this.onClick}},[t("div",{class:p("node")},[this.genLoading()])])}}),I=i("ab2c"),C=i("d399"),k=i("3425"),S=i.n(k),w=i("a6e6"),A=i.n(w),y=i("d28e"),P=i("da6a");o["default"].use(c["a"]).use(l["a"]).use(b).use(I["a"]);var E={name:"mineInfoPage",components:{NavigationBar:P["a"]},created:function(){this.loadPageData()},data:function(){return{active:0,arrowIcon:A.a,userInfo:{userIcon:"",userAccount:"",userNickname:"",userPhoneNum:"",uuid:"",WJDM:""},pushSwitchCtl:!1,actions:[{name:"拍照",color:"#007aff"},{name:"从手机相册选择",color:"#007aff"}],showPhotoSelectSheet:!1}},computed:{showUserImg:function(){return""!=this.userInfo.userIcon?this.userInfo.userIcon:S.a}},methods:{onClickedGetPhoto:function(t,e){this.getPictureData(e)},getPictureData:function(t){t?this.getLocalPicture():this.useCamera()},clickedHeaderSet:function(){this.showPhotoSelectSheet=!0},useCamera:function(){var t=this;this.$plugin.usePlugin("camera")((function(e){t.uploadHeadPhotoFile(e)}),(function(t){C["a"].fail(t)}))},getLocalPicture:function(){var t=this;this.$plugin.usePlugin("getPictures")(1,(function(e){e.forEach((function(e){t.uploadHeadPhotoFile(e)}))}),(function(t){C["a"].fail(t)}))},uploadHeadPhotoFile:function(t){var e=this,i=C["a"].loading({duration:0,mask:!0,message:"上传中..."}),s="".concat(r["b"].get("custUrl.homeUrl"),"xwj-sys-media/media/upload/uploadFile"),n=new FileUploadOptions,a={};a.file=t,a.source="wyApp",a.business="userPic",n.params=a;var o={contentType:"multipart/form-data"};n.headers=o,this.$plugin.usePlugin("fileTransfer")(s,t,(function(t){i.clear();var s=JSON.parse(t.response);0==s.resultCode?(e.userInfo.WJDM=s.data,e.userInfo.userIcon=s.data):(console.log("resData: "+s),C["a"].fail(s.msg))}),(function(t){i.clear(),console.log("fail error: "+t),C["a"].fail(t)}),n)},loadPageData:function(){var t=this,e=r["b"].get("custNews");e=e||r["a"].getStorage("custNews");var i={AREA_CODE:e.AREA_CODE,USER_CODE:e.USER_CODE};Object(a["d"])(i).then((function(e){var i=e.PIC_URL;""!=i&&(t.userInfo.userIcon=i),t.userInfo.userAccount=e.USER_ACCNT,t.userInfo.userNickname=e.USER_NICK_NAME,t.userInfo.userPhoneNum=e.PHONE,t.userInfo.uuid=e.UUID,t.pushSwitchCtl=!!e.IS_NOTE_PUSH})).catch((function(t){C["a"].fail(t)}))},savePageData:function(){var t=this,e=r["b"].get("custNews");e=e||r["a"].getStorage("custNews");var i={PIC_URL:this.userInfo.userIcon,USER_CODE:e.USER_CODE,USER_NICK_NAME:this.userInfo.userNickname,UUID:this.userInfo.uuid,PHONE:this.userInfo.userPhoneNum,IS_NOTE_PUSH:this.pushSwitchCtl?"1":"0",WJDM:this.userInfo.WJDM};Object(a["e"])(i).then((function(s){Object(C["a"])(s.msg),r["b"].get("updatePageData")(i),r["b"].get("updateFindUserInfo")(i),e.PIC_URL=t.userInfo.userIcon,e.USER_NICK_NAME=t.userInfo.userNickname,e.UUID=t.userInfo.uuid,e.PHONE=t.userInfo.userPhoneNum,e.WJDM=t.userInfo.WJDM,Object(y["m"])(e),setTimeout((function(){s.success&&t.onClickLeft()}),600)})).catch((function(t){C["a"].fail(t)}))},onClickLeft:function(){this.$router.go(-1)},onClickSave:function(){var t="^[一-龥A-Za-z0-9_]+$";""==this.userInfo.userNickname?Object(C["a"])("用户昵称不能为空"):this.userInfo.userNickname.match(t)?this.userInfo.userNickname.length>=40?Object(C["a"])("用户昵称过长","center"):""==this.userInfo.userPhoneNum?Object(C["a"])("号码不能为空"):11!=this.userInfo.userPhoneNum.length?Object(C["a"])("手机号必须为11位"):/^(((11[0-9]{1})|(12[0-9]{1})|(13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[0-9]{1}))+\d{8})$/.test(this.userInfo.userPhoneNum)?this.savePageData():Object(C["a"])("手机号格式不正确"):Object(C["a"])("用户昵称仅支持汉字、字母、数字组合")}}},O=E,x=(i("50b7"),i("2877")),N=Object(x["a"])(O,s,n,!1,null,"56a2c594",null);e["default"]=N.exports},2627:function(t,e,i){},4917:function(t,e,i){"use strict";var s=i("cb7c"),n=i("9def"),a=i("0390"),r=i("5f1b");i("214f")("match",1,(function(t,e,i,o){return[function(i){var s=t(this),n=void 0==i?void 0:i[e];return void 0!==n?n.call(i,s):new RegExp(i)[e](String(s))},function(t){var e=o(i,t,this);if(e.done)return e.value;var c=s(t),l=String(this);if(!c.global)return r(c,l);var u=c.unicode;c.lastIndex=0;var h,f=[],d=0;while(null!==(h=r(c,l))){var g=String(h[0]);f[d]=g,""===g&&(c.lastIndex=a(l,n(c.lastIndex),u)),d++}return 0===d?null:f}]}))},"4f11":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAqhJREFUeAHtms1L1UEUhtX8IJUwEEGiRKggEqGNiwpx08qiaOEmMKE2QctyIfQXRGAtxJ0o1CYEEaTCRYsgqEUgRAWChIohRBpEH1TengMOHIZWwoHD3HPgZebcO8yc5x283pnframJCAfCgXAgHAgHwoFwIBwIB8KBcMChA5VKpRu9QJto2GGJdiUB3Is+oRTrdqs5mxnifrSdyHfbGWdl2pQD7CX0I4OfJq+3WdHRrEBeR38y+LvktY7KtCkFyLEMfIf8ls1qjmaV3UX3M/jf5FcdlWlTCpAN6FEG/5180GZFR7MC2YqeZfBfyE87KtOmFCDb0esMfp38pM2KjmYFsgt9QDokP+KoTJtSgOxBstM6XpG026zoaFYgzyD5G9fxlKTFUZk2pQB5Hsmnu46HJA02KzqaFcgRJP/XdYyTVMW3u1FNvdsfc7Q/NqXI7qJ7Gbx8x79ms6KjWYGsRzMZvJzuLjoq06YUIJvRQgYv5/p+mxWdzQroXAa/Qd7rrEy7coBdzQyYsFvN4czAX0H5hcYkr9U5LNemJGAvo59Ix2OSRpsVHc4K7AD6qh2gv4haHZZrUxKwp5Dc5+uQI3D5B59kKbBH0Yp2gP57dDiNKb4FthMtIR1rJCeKh0+AwLYhecSl4zNJXxpTfAvsfjSvHaD/DZ0rHj4BAivnhCmk4xfJUBpTfAusnBTlaY+OvyQ3iofXgADfRvL0R8cdPab4PuT/uy16wOvl3xal3QX2AsrvC+VpUfn3hcqEswBvIR1PSJrTmOJbYOUXIXJ/oOMlycHi4RMgsN1oWTtA/y06lMYU3wLbgd4gHR9JjhUPnwCBPYCeIx1L6f2qaCFvQrPKgXdVAa4hgd+HbiL5Bclx/V70w4FwIBwIB8KBcCAcCAfCgXBgzw78A2Wj4+ezw0gaAAAAAElFTkSuQmCC"},"50b7":function(t,e,i){"use strict";var s=i("c44f"),n=i.n(s);n.a},"565f":function(t,e,i){"use strict";var s=i("2638"),n=i.n(s),a=i("c31d");function r(t,e){if(e){var i=t.indexOf(".");i>-1&&(t=t.slice(0,i+1)+t.slice(i).replace(/\./g,""))}else t=t.split(".")[0];var s=e?/[^0-9.]/g:/\D/g;return t.replace(s,"")}var o=i("1325"),c=i("a142");function l(){return!c["f"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var u=i("a8c1"),h=l();function f(){h&&Object(u["g"])(Object(u["b"])())}var d=i("d282"),g=i("ea8e"),v=i("ad06"),m=i("7744"),p=i("dfaf"),b=Object(d["a"])("field"),I=b[0],C=b[1];e["a"]=I({inheritAttrs:!1,provide:function(){return{vanField:this}},inject:{vanForm:{default:null}},props:Object(a["a"])({},p["a"],{name:String,rules:Array,error:Boolean,disabled:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,formatter:Function,maxlength:[Number,String],labelWidth:[Number,String],labelClass:null,labelAlign:String,inputAlign:String,placeholder:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,type:{type:String,default:"text"}}),data:function(){return{focused:!1,validateMessage:""}},watch:{value:function(){this.resetValidation(),this.validateWithTrigger("onChange"),this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize),this.vanForm&&this.vanForm.addField(this)},beforeDestroy:function(){this.vanForm&&this.vanForm.removeField(this)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(c["b"])(this.value)&&!this.readonly},showError:function(){return!!(this.vanForm&&this.vanForm.showError&&this.validateMessage)||this.error},listeners:function(){var t=Object(a["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.getProp("labelWidth");if(t)return{width:Object(g["a"])(t)}},formValue:function(){return this.children&&(this.$scopedSlots.input||this.$slots.input)?this.children.value:this.value}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},runValidator:function(t,e){return new Promise((function(i){var s=e.validator(t,e);if(Object(c["e"])(s))return s.then(i);i(s)}))},isEmptyValue:function(t){return Array.isArray(t)?!t.length:!t},runSyncRule:function(t,e){return(!e.required||!this.isEmptyValue(t))&&!(e.pattern&&!e.pattern.test(t))},getRuleMessage:function(t,e){var i=e.message;return Object(c["c"])(i)?i(t,e):i},runRules:function(t){var e=this;return t.reduce((function(t,i){return t.then((function(){if(!e.validateMessage){var t=e.formValue;if(i.formatter&&(t=i.formatter(t,i)),e.runSyncRule(t,i))return i.validator?e.runValidator(t,i).then((function(s){!1===s&&(e.validateMessage=e.getRuleMessage(t,i))})):void 0;e.validateMessage=e.getRuleMessage(t,i)}}))}),Promise.resolve())},validate:function(t){var e=this;return void 0===t&&(t=this.rules),new Promise((function(i){t||i(),e.runRules(t).then((function(){e.validateMessage?i({name:e.name,message:e.validateMessage}):i()}))}))},validateWithTrigger:function(t){if(this.vanForm&&this.rules){var e=this.vanForm.validateTrigger===t,i=this.rules.filter((function(i){return i.trigger?i.trigger===t:e}));this.validate(i)}},resetValidation:function(){this.validateMessage&&(this.validateMessage="")},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,i=e.value,s=this.maxlength;if(Object(c["b"])(s)&&i.length>s&&(i=i.slice(0,s),t.value=i),"number"===this.type||"digit"===this.type){var n=i,a="number"===this.type;i=r(i,a),i!==n&&(t.value=i)}if(this.formatter){var o=i;i=this.formatter(i),i!==o&&(t.value=i)}return i}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),this.validateWithTrigger("onBlur"),f()},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(o["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(c["d"])(this.autosize)){var i=this.autosize,s=i.maxHeight,n=i.minHeight;s&&(e=Math.min(e,s)),n&&(e=Math.max(e,n))}e&&(t.style.height=e+"px")}},genInput:function(){var t=this.$createElement,e=this.type,i=this.slots("input"),s=this.getProp("inputAlign");if(i)return t("div",{class:C("control",[s,"custom"])},[i]);var r={ref:"input",class:C("control",s),domProps:{value:this.value},attrs:Object(a["a"])({},this.$attrs,{name:this.name,disabled:this.disabled,readonly:this.readonly,placeholder:this.placeholder}),on:this.listeners,directives:[{name:"model",value:this.value}]};if("textarea"===e)return t("textarea",n()([{},r]));var o,c=e;return"number"===e&&(c="text",o="decimal"),"digit"===e&&(c="tel",o="numeric"),t("input",n()([{attrs:{type:c,inputmode:o}},r]))},genLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:C("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(v["a"],{attrs:{name:this.leftIcon,classPrefix:this.iconPrefix}})])},genRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:C("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(v["a"],{attrs:{name:this.rightIcon,classPrefix:this.iconPrefix}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.maxlength){var e=this.value.length,i=e>=this.maxlength;return t("div",{class:C("word-limit")},[t("span",{class:C("word-num",{full:i})},[e]),"/",this.maxlength])}},genMessage:function(){var t=this.$createElement;if(!this.vanForm||!1!==this.vanForm.showErrorMessage){var e=this.errorMessage||this.validateMessage;if(e){var i=this.getProp("errorMessageAlign");return t("div",{class:C("error-message",i)},[e])}}},getProp:function(t){return Object(c["b"])(this[t])?this[t]:this.vanForm&&Object(c["b"])(this.vanForm[t])?this.vanForm[t]:void 0},genLabel:function(){var t=this.$createElement,e=this.getProp("colon")?":":"";return this.slots("label")?[this.slots("label"),e]:this.label?t("span",[this.label+e]):void 0}},render:function(){var t,e=arguments[0],i=this.slots,s=this.getProp("labelAlign"),n={icon:this.genLeftIcon},a=this.genLabel();return a&&(n.title=function(){return a}),e(m["a"],{attrs:{icon:this.leftIcon,size:this.size,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,valueClass:C("value"),titleClass:[C("label",s),this.labelClass],arrowDirection:this.arrowDirection},scopedSlots:n,class:C((t={error:this.showError},t["label-"+s]=s,t["min-height"]="textarea"===this.type&&!this.autosize,t)),on:{click:this.onClick}},[e("div",{class:C("body")},[this.genInput(),this.showClear&&e(v["a"],{attrs:{name:"clear"},class:C("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),i("button")&&e("div",{class:C("button")},[i("button")])]),this.genWordLimit(),this.genMessage()])}})},"960f":function(t,e,i){"use strict";var s=i("2627"),n=i.n(s);n.a},c44f:function(t,e,i){},da6a:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navBar van-nav-bar",style:t.navBarStyle},[t.isShowLeft?i("div",{staticClass:"left",style:t.bothWidth,on:{click:function(e){return t.$emit("onLeftClick")}}},[t.isShowBack?i("img",{attrs:{src:t.backImg,alt:"",srcset:""}}):t._e(),t._t("nav-left")],2):t._e(),i("div",{staticClass:"center"},[t.isDefault?i("span",{staticClass:"title"},[t._v(t._s(t.pageName))]):t._e(),t._t("nav-center")],2),t.isShowRight?i("div",{staticClass:"right",style:t.bothWidth},[t._t("nav-right")],2):t._e()])},n=[],a={props:{isDefault:{default:!0,type:Boolean},bothWidth:{type:Object,default:function(){return{width:"36px"}}},isShowRight:{default:!0,type:Boolean},isShowLeft:{default:!0,type:Boolean},isShowBack:{default:!0,type:Boolean},leftImgType:{type:String,default:"0"},pageName:{default:"",type:String},navBarStyle:{type:Object,default:function(){return{backgroundColor:"#fff"}}}},data:function(){return{backImg:i("4f11")}},mounted:function(){this.isLeftImg()},methods:{isLeftImg:function(){switch(this.leftImgType){case"0":this.backImg=i("4f11");break;case"1":this.backImg=i("4f11");break}}}},r=a,o=(i("960f"),i("2877")),c=Object(o["a"])(r,s,n,!1,null,"7e35d797",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-4652df02.f42c047b.js.map