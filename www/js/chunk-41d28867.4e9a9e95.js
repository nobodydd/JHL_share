(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41d28867"],{"6d45":function(t,e,s){"use strict";var a=s("e32d"),i=s.n(a);i.a},bb7f5:function(t,e,s){},e32d:function(t,e,s){},ef42:function(t,e,s){"use strict";var a=s("bb7f5"),i=s.n(a);i.a},f07f:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"workDelayApply"},[s("navigation-bar",{attrs:{pageName:"延期申请（内部）"},on:{onLeftClick:t.goBack}}),s("div",{staticClass:"box"},[s("div",{staticClass:"field-box"},[s("div",{staticClass:"approver-box"},[s("van-cell",{attrs:{title:"审批人"}}),t.postInfo?s("div",{staticClass:"dis"},[s("span",[t._v("您的审批人是 ")]),s("span",[t._v(t._s(t.postInfo.postName))]),t.postInfo.userList&&t.postInfo.userList.length>0?s("span",[t._v("(")]):t._e(),t._l(t.postInfo.userList.length>3?3:t.postInfo.userList.length,(function(e,a){return t.postInfo.userList?s("span",{key:a},[t._v("\n                  "+t._s(t.postInfo.userList[a].userName)+"\n                ")]):t._e()})),t.postInfo.userList&&t.postInfo.userList.length>3?s("span",[t._v("...")]):t._e(),t.postInfo.userList&&t.postInfo.userList.length>0?s("span",[t._v(")")]):t._e()],2):t._e()],1),s("van-field",{attrs:{readonly:"",clickable:"",label:"变更类型",value:t.applyType?t.applyType.typeName:"","input-align":"right",placeholder:"请选择类型","right-icon":"arrow","label-width":"130"},on:{click:t.selectType}}),!t.applyType||t.applyType&&"0"==t.applyType.type?s("van-field",{attrs:{readonly:"",clickable:"",label:"延时时间",value:t.showTime,"input-align":"right",placeholder:"请选择延时时间","right-icon":"arrow"},on:{click:function(e){t.showDatePicker=!0}}}):t._e(),t.applyType&&"1"==t.applyType.type?s("van-field",{attrs:{readonly:"",clickable:"",label:"工单分类",value:t.category?t.category.complCatName:"","input-align":"right",placeholder:"请选择工单分类","right-icon":"arrow"},on:{click:t.selecCategory}}):t._e()],1),s("div",{staticClass:"area-box"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.workContent,expression:"workContent"}],attrs:{name:"",id:"",placeholder:"请填写申请原因...",maxlength:"100"},domProps:{value:t.workContent},on:{input:[function(e){e.target.composing||(t.workContent=e.target.value)},t.filterContent]}}),s("div",{staticClass:"num"},[t._v(t._s(t.workContent.length)+"/100")])]),s("div",{staticClass:"submit-box"},[s("div",{staticClass:"submit",on:{click:t.submitApply}},[t._v("提交")])])]),s("van-popup",{attrs:{position:"bottom"},model:{value:t.showFilterCondition,callback:function(e){t.showFilterCondition=e},expression:"showFilterCondition"}},[s("van-picker",{attrs:{columns:t.conditionList,"show-toolbar":"",title:"选择工单分类","value-key":"typeName","default-index":t.defalutIndex},on:{cancel:function(e){t.showFilterCondition=!1},confirm:t.confirmSelect}})],1),s("van-popup",{attrs:{position:"bottom"},model:{value:t.showDatePicker,callback:function(e){t.showDatePicker=e},expression:"showDatePicker"}},[s("van-datetime-picker",{attrs:{type:"datetime",title:"选择延时时间","min-date":t.minDate,"max-date":t.maxDate},on:{cancel:function(e){t.showDatePicker=!1},confirm:t.selectDate},model:{value:t.workDate,callback:function(e){t.workDate=e},expression:"workDate"}})],1),s("van-popup",{attrs:{position:"bottom"},model:{value:t.showCategoryModel,callback:function(e){t.showCategoryModel=e},expression:"showCategoryModel"}},[s("div",{staticClass:"popup-top"},[s("div",{staticClass:"cancel",on:{click:t.hideModel}},[s("img",{attrs:{src:t.leftIcon,alt:""}})]),s("div",{staticClass:"catTitle"},[t._v(t._s(t.catTitle))])]),s("div",{staticClass:"dis-tab"},t._l(t.tabs,(function(e,a){return s("div",{staticClass:"content-div",on:{click:function(s){return t.toClass(e)}}},[t.classData.level!=a?s("div",{staticClass:"dis-tab-div"},[s("div",{staticClass:"type-tab"},[t._v(t._s(e.catName))])]):t._e(),t.classData.level==a?s("div",{staticClass:"dis-tab-div-sel"},[s("div",{staticClass:"type-tab"},[t._v(t._s(e.catName))])]):t._e()])})),0),s("div",{staticClass:"popup-bottom"},t._l(t.classList,(function(e,a){return s("div",{key:a,on:{click:function(s){return t.nextClass(e)}}},[e.uuid!=t.selectTab.uuid?s("div",{staticClass:"detail-cell section-select"},[s("div",{staticClass:"left-nosel"},[t._v(t._s(e.complCatName))])]):t._e(),e.uuid==t.selectTab.uuid?s("div",{staticClass:"detail-cell section-select"},[s("div",{staticClass:"left"},[t._v(t._s(e.complCatName))]),s("div",{staticClass:"right"},[s("van-icon",{staticClass:"succ-right",attrs:{name:"success",size:"15px"}})],1)]):t._e()])})),0)])],1)},i=[],o=(s("a481"),s("72d3")),l=s("da6f"),n=s("3962"),c=s.n(n),r=s("c1df"),u=s.n(r),h=s("da6a"),p={name:"workDelayApply",components:{NavigationBar:h["a"]},data:function(){return{approver:"",workDate:new Date,showTime:"",category:null,workDetail:null,workContent:"",showDatePicker:!1,showFilterCondition:!1,showCategoryModel:!1,applyType:null,postInfo:null,uuidParents:[],classData:{uuidParent:"0",complResource:1,level:0,deptCode:""},classList:[],defalutIndex:0,conditionList:[],applayTypeList:[{type:"0",typeName:"申请延期"},{type:"1",typeName:"申请修改工单分类"}],minDate:new Date(1919,0,1),maxDate:new Date(2090,11,31),userInfo:null,leftIcon:c.a,tabs:[{uuid:0,catName:"请选择"}],catTitle:"请选择一级分类",selectTab:{uuid:0,catName:"请选择"}}},created:function(){this.workDetail=this.$route.params,this.userInfo=l["b"].get("userInfo"),this.getApprover()},updated:function(){if(this.showCategoryModel)if(this.classData.level==this.tabs.length-1)document.querySelector(".dis-tab").scrollLeft=999999;else if(0==this.classData.level)document.querySelector(".dis-tab").scrollLeft=0;else{var t=document.querySelector(".dis-tab"),e=document.querySelector(".dis-tab-div-sel"),s=e.offsetLeft-t.scrollLeft,a=t.offsetWidth-e.offsetLeft;log.l("leftOffset value "+s+" - widthOffset value "+a+" - selectWidth value "+e.offsetWidth),s<40?t.scrollLeft=t.scrollLeft-2*e.offsetWidth:a<40&&(t.scrollLeft=t.scrollLeft+2*e.offsetWidth)}},methods:{goBack:function(){this.$router.back(-1)},getApprover:function(){var t=this;console.log(this.userInfo),Object(o["f"])({areaCode:this.workDetail.areaCode,userCode:this.userInfo.USER_CODE,complResource:1}).then((function(e){0==e.resultCode?(console.log(e.data),t.postInfo=e.data):t.$toast(e.msg)}),(function(e){t.$toast(e)}))},selectType:function(){this.showFilterCondition=!0,this.conditionList=this.applayTypeList},selectDate:function(t){if(this.showDatePicker=!1,this.workDetail&&this.workDetail.compLimitTime&&t){var e=this.formatter(t),s=this.workDetail.compLimitTime;if(u()(e)<u()(s))return void this.$toast("延期时间必须大于规定时限，请重新选择延期时间！")}this.showTime=this.formatter(t),this.workDate=t},formatter:function(t){return t.getFullYear()+"-"+this.getTime(t.getMonth()+1)+"-"+this.getTime(t.getDate())+" "+this.getTime(t.getHours())+":"+this.getTime(t.getMinutes())+":00"},getTime:function(t){return t<10?"0"+t:t},confirmSelect:function(t,e){this.showFilterCondition=!1,this.applyType&&t.type==this.applyType.type||(this.applyType=t,this.defaultIndex=e,this.showTime="",this.category="")},filterContent:function(){this.workContent=this.workContent.replace(/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi,"")},backToLastLevel:function(){this.uuidParents.pop(),this.classData.uuidParent=this.uuidParents[this.uuidParents.length-1],this.tabs=[{uuid:0,catName:"请选择"}],this.classData.level=0,this.catTitle="请选择一级分类",this.selecCategory()},nextClass:function(t){if(0==t.isLeafFlag){if(this.classData.uuidParent=t.uuid,this.classData.level<this.tabs.length-1){var e=this.classData.level;this.tabs=this.tabs.slice(0,e)}else this.tabs.pop();this.tabs.push({uuid:t.uuid,catName:this.getCatName(t.complCatName)}),this.selectTab={uuid:0,catName:"请选择"},this.tabs.push(this.selectTab),this.classData.level++,this.selecCategory()}else this.category=t,this.showCategoryModel=!1,this.tabs=[{uuid:0,catName:"请选择"}],this.selectTab={uuid:0,catName:"请选择"},this.classData.level=0,this.classList=[],this.classData={uuidParent:"0",complResource:1,level:0,deptCode:this.userInfo.deptCode}},toClass:function(t){if(t.uuid!=this.selectTab.uuid){var e=this.tabs.indexOf(t),s=this.tabs[e-1];this.selectTab=t,s?(this.classData.uuidParent=s.uuid,this.classData.level=e,this.selecCategory()):(this.classData={uuidParent:"0",complResource:1,level:0,deptCode:this.userInfo.deptCode},this.selecCategory())}else log.i("WorkDelayApplyInSide: select the same tab, ignore.")},getCatName:function(t){return t?t.length<=5?t:t.slice(0,2)+"..."+t.slice(t.length-2):null},selecCategory:function(){var t=this;this.classData.uuidParent!=this.uuidParents[this.uuidParents.length-1]&&this.uuidParents.push(this.classData.uuidParent),this.classData.complResource=1,this.classData.deptCode=this.userInfo.deptCode,Object(o["g"])(this.classData).then((function(e){switch(t.classList=e.data,t.showCategoryModel=!0,t.classData.level+1){case 1:t.catTitle="选择一级分类";break;case 2:t.catTitle="选择二级分类";break;case 3:t.catTitle="选择三级分类";break;case 4:t.catTitle="选择四级分类";break;case 5:t.catTitle="选择五级分类";break;case 6:t.catTitle="选择六级分类";break;case 7:t.catTitle="选择七级分类";break;case 8:t.catTitle="选择八级分类";break;case 9:t.catTitle="选择九级分类";break;case 10:t.catTitle="选择十级分类";break;default:t.catTitle="选择超十级分类";break}}),(function(e){t.$toast(e)}))},hideModel:function(){this.classData.uuidParent="0",this.uuidParents=[],this.showCategoryModel=!1,this.tabs=[{uuid:0,catName:"请选择"}],this.classData.level=0,this.catTitle="请选择一级分类",this.classList=[],this.selectTab={uuid:0,catName:"请选择"}},submitApply:function(){var t=this;if(this.hasCompleteParam()){var e={approvalType:1*this.applyType.type,approvalPostCode:this.postInfo.postCode,complCatCodeOld:this.workDetail.complCatCode,complCatCodeNew:this.category?this.category.complCatCode:"",receveDelayTime:this.showTime||"",reason:this.workContent,complCode:this.workDetail.complCode,userCode:this.userInfo.USER_CODE,areaCode:this.workDetail.areaCode,areaName:this.workDetail.areaName};Object(o["b"])(e).then((function(e){0==e.resultCode?(t.$toast("提交工单申请成功"),l["b"].set("insideWorkDetailComplCode",t.workDetail.complCode),t.goBack()):t.$toast(e.msg)}),(function(e){t.$toast(e)}))}},hasCompleteParam:function(){if(!this.workDetail||!this.workDetail.compLimitTime)return this.$toast("未接单,请接单后重试!"),!1;if(!this.postInfo)return this.$toast("没有对应的审核人"),!1;if(!this.applyType)return this.$toast("请选择延期类型！"),!1;if(0==this.applyType.type&&!this.showTime)return this.$toast("请选择延期时间！"),!1;if(1==this.applyType.type&&!this.category)return this.$toast("请选择工单分类！"),!1;if(!this.workContent)return this.$toast("申请原因不能为空！"),!1;if(0==this.applyType&&this.workDetail&&this.workDetail.compLimitTime&&this.showTime){var t=this.showTime,e=this.workDetail.compLimitTime;if(u()(t)<u()(e))return this.$toast("延期时间必须大于规定时限！"),!1}return!0}},computed:{}},d=p,f=(s("6d45"),s("ef42"),s("2877")),m=Object(f["a"])(d,a,i,!1,null,"1f9d1467",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-41d28867.4e9a9e95.js.map