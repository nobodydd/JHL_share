(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88a53aca"],{"26df":function(t,e,n){"use strict";var o=n("6b1e"),i=n.n(o);i.a},"6b1e":function(t,e,n){},a429:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%",background:"#FFFFFF",width:"100%"}},[n("page-header",{on:{"btn-action":t.openApp}}),n("div",{staticClass:"pageView"},[n("div",{staticStyle:{color:"#999999","margin-bottom":"10px"}},[t._v("验证码:6位数字")]),n("div",[n("van-field",{attrs:{placeholder:"请输入验证码"},model:{value:t.msgCode,callback:function(e){t.msgCode=e},expression:"msgCode"}},[n("van-button",{attrs:{slot:"button",size:"small",disabled:!t.btnEnable},on:{click:t.sendMsgCode},slot:"button"},[t._v(t._s(t.msgBtnText))])],1)],1),n("div",{staticClass:"bottomView"},[n("div",{staticClass:"nextBtn",on:{click:t.commitAction}},[t._v("确 认")])])])],1)},i=[],a=n("2b0e"),s=n("565f"),c=n("b650"),u=n("a39b"),r=n("e181");a["a"].use(c["a"]),a["a"].use(s["a"]);var d={name:"CommitPage",components:{PageHeader:u["a"]},data:function(){return{msgCode:"",uuid:"",phone:"",resultType:"",btnEnable:!0,msgBtnText:"发送验证码",icon:{xwjlogo:n("ecd5")}}},methods:{sendMsgCode:function(){var t=this,e={PHONE:this.phone};Object(r["c"])(e).then((function(e){t.$toast(e.msg),t.timeCountDown()})).catch((function(t){console.log(t)}))},timeCountDown:function(){var t=this;this.btnEnable=!1;var e=60,n=window.setInterval((function(){e--,e>0?t.msgBtnText=e+"秒后重新发送":(t.btnEnable=!0,window.clearInterval(n),t.msgBtnText="获取验证码")}),1e3)},commitAction:function(){var t=this;if(""!=this.msgCode){var e={uuid:this.uuid,phone:this.phone,verificationCode:this.msgCode,approvalResult:this.resultType};Object(r["a"])(e).then((function(e){console.log(e),t.parasData(e)})).catch((function(t){console.log(t)}))}else this.$toast("验证码不能为空")},parasData:function(t){var e=JSON.parse(this.$route.query.data),n="【"+e.areaName+"-"+e.buildName+"-"+e.showRoomName+"】",o={nickName:e.ownerNickName,room:n,type:this.$route.query.type};console.log(this.$route.query),console.log(o),this.$router.push({path:"/resultPage",query:o})},openApp:function(){this.shareOpenApp("myfamily")}},mounted:function(){var t=this.$route.query,e=JSON.parse(t.data);console.log(e),this.uuid=e.uuid,this.phone=t.phone,this.resultType=t.type,this.androidShareOpenApp("myfamily")}},h=d,l=(n("26df"),n("2877")),p=Object(l["a"])(h,o,i,!1,null,"7225e9a2",null);e["default"]=p.exports},e181:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return u}));n("d3b7");var o=n("ba6a"),i=n("d399"),a=function(t){return console.log(t),new Promise((function(e,n){o["a"].get("xwj-property-house/house/binding/getMemberBindingDetail",t).then((function(t){e(t)})).catch((function(t){Object(i["a"])("网络异常，请稍后重试！"),n(t)}))}))},s=function(t){return new Promise((function(e,n){o["a"].post("xwj-property-house/house/binding/checkPropertyOwnerPhone",t,!1).then((function(t){"0"==t.resultCode?e(t.data):(Object(i["a"])(t.msg),n(t.msg))})).catch((function(t){Object(i["a"])("网络异常，请稍后重试！"),n(t)}))}))},c=function(t){return new Promise((function(e,n){o["a"].post("xwj-property-house/house/binding/checkPhoneVerificationCode",t,!1).then((function(t){"0"==t.resultCode?e(t.data):(Object(i["a"])(t.msg),n(t.msg))})).catch((function(t){Object(i["a"])("网络异常，请稍后重试！"),n(t)}))}))},u=function(t){return new Promise((function(e,n){o["a"].post("hisense-systemServer/login/getMsgCode.do",{data:JSON.stringify(t)},!0,"homeUrl").then((function(t){1==t.success?e(t):(Object(i["a"])(t.msg),n(t.msg))})).catch((function(t){Object(i["a"])("网络异常，请稍后重试！"),n(t)}))}))}}}]);
//# sourceMappingURL=chunk-88a53aca.a263bb87.js.map