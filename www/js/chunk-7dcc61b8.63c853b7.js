(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dcc61b8"],{"0a5d":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAABACAYAAADbPd8FAAAAAXNSR0IArs4c6QAAAtZJREFUeAHtnT1vE0EYhN89PkThDgSSWyQqqOB/EJCgoKE02LgioeSjhVAF+eMnEKQQ/gc0gERFGwSIikgUKH551/JZ4chsoORmrsh5dzbFzDxan6PIm3zUd9NFkEDaDZM7luy1edq2Ixe2U6/3s2m8ak5o3NYEvGPm58z9htls02ZvP/h4cKXpVkA0E2EZu58NOLZ8Mnjs/nDJwVEW//IJEpj5mk2/ZvFe/rEkIw90kSYQUNRvHwKClIEDbD/x6fSYgDggGcqp/Eyx925FQFC2D0wnFxAgGs5pt0vaITirR667AgJFQznvHQFBWTw2LSBwNpSKgKCsHZsWEDgbSkVAUNaOTQsInA2lIiAoa8emBQTOhlIREJS1Y9MCAmdDqQgIytqxaQGBs6FUBARl7di0gMDZUCoCgrJ2bFpA4GwoFQFBWTs2LSBwNpSKgKCsHZsWEDgbSkVAUNaOTQsInA2lIiAoa8emBQTOhlIREJS1Y9MCAmdDqQgIytqxaQGBs6FUBARl7di0gMDZUCoCgrJ2bFpA4GwoFQFBWTs2XcV3H3/HshS2BKr4IuxPbKblFyeQd4gdLEthSyA/QwgIttYLfvMO8aagSyJLIICoXpF5lt1CAlXqbXyMXeJ9YY0kogQWf4eoXhJ5ltVCAgsgTjwzm5/JVFgqiSGBORDp9voXS77OYFgeywksdohYdNKeWkqfy8ultj2BJRDp+mg3PnH04wFTxza2vfWCvyUQeU26tbEVt0eF9ZJankBq+nP3ZOM7z+OMx2tNTeP2J/DbDpHtppTcTh2/Ga9etN++HDYT+GOHqBfMd4rJ4H6MH8RTBVxXr9e9HQkcWrRPhlfNZ6M4BfZMOyzLRSmBQ4HIv+yb/Y59s7vxvxOrMYozpHW1NYG/AqI27+PV05Z+DGO3WIm3kfP1vO7tSeCfgNhv26fDOEx8djnAuBjz3bh353ftIPtj+u9e/wKO83L8Mw2P0AAAAABJRU5ErkJggg=="},2627:function(t,s,e){},"2f67":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"commerceReturnList"},[e("navigation-bar",{attrs:{pageName:"退货订单","right-text":""},on:{onLeftClick:t.onClickLeft}}),e("div",{staticClass:"searchPanel"},[e("div",{staticClass:"searchInput",on:{click:function(s){return t.gotoSearch()}}},[e("img",{staticClass:"searchImg",attrs:{src:t.serachIcon}}),t._v("\n      搜索退货单号\n    ")])]),e("div",{staticClass:"commerce-return-tabs-box"},[e("van-tabs",{attrs:{"swipe-threshold":5,color:"#00d8d1",swipeable:""},on:{change:t.onTabChange},model:{value:t.active,callback:function(s){t.active=s},expression:"active"}},[e("van-tab",{attrs:{title:"全部"}},[t.orderList.length<=0?e("div",{staticClass:"noMessagePanel"},[e("div",{staticClass:"noMessage"},[e("img",{staticClass:"noMessageImg",attrs:{src:t.imgDefault}}),e("p",[t._v("暂无订单")])])]):t._e(),t.orderList.length>0?e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.loadMore},model:{value:t.isLoading,callback:function(s){t.isLoading=s},expression:"isLoading"}},t._l(t.orderList,(function(s,a){return e("van-cell",{key:a},[e("div",{staticClass:"card"},[e("div",{staticClass:"orderTitlePanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("span",{staticClass:"orderTitleStore"},[t._v(t._s(s.shopName))]),"待审核"==s.billStatus?e("div",{staticClass:"orderCodeJudge",style:{backgroundImage:t.checkImage}},[t._v("待审核")]):t._e(),"待退款"==s.billStatus?e("div",{staticClass:"orderCodeReturn",style:{backgroundImage:t.refundImage}},[t._v(t._s(s.billStatus))]):t._e(),"已完成"==s.billStatus?e("div",{staticClass:"orderCodeFinished",style:{backgroundImage:t.finishImage}},[t._v(t._s(s.billStatus))]):t._e(),"已驳回"==s.billStatus?e("div",{staticClass:"orderCodeHasReturn",style:{backgroundImage:t.rejectImage}},[t._v(t._s(s.billStatus))]):t._e()]),e("div",{staticClass:"van-hairline--top"}),e("div",{staticClass:"orderInfoPanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("退货单号")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.returnBillNo))])]),e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("申请时间")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.returnTime))])])]),e("div",{staticClass:"dashLine"}),e("div",{staticClass:"orderInfoPanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("订单号")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.subBillNo))])]),e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("下单时间")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.createdTime))])])]),e("div",{staticClass:"dashLine"}),e("div",{staticClass:"orderInfoPanel autoHeight",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("联系人")]),e("span",{staticClass:"orderInfoDetai"},[t._v("\n                    "+t._s(s.returnName)+"\n                    "+t._s(s.returnPhone)+"\n                  ")])]),e("div",{staticClass:"orderInfoItem"},[e("div",{staticClass:"orderInfoTitle"},[t._v("取件地址")]),e("div",{staticClass:"orderInfoDetai"},[t._v(t._s(s.returnAddr))])])]),e("div",{staticClass:"van-hairline--top"}),e("div",{staticClass:"pricePanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("span",{staticClass:"orderGoods"},[t._v(t._s(s.spuName))]),e("span",{staticClass:"orderGoodsNum"},[t._v("共1件商品")]),e("span",{staticClass:"orderPrice"},[e("span",{staticStyle:{"font-size":"14px"}},[t._v("￥")]),t._v("\n                  "+t._s(s.realPaySkuTotal)+"\n                ")])])])])})),1):t._e()],1),e("van-tab",{attrs:{title:"待审核"}},[t.orderList.length<=0?e("div",{staticClass:"noMessagePanel"},[e("div",{staticClass:"noMessage"},[e("img",{staticClass:"noMessageImg",attrs:{src:t.imgDefault}}),e("p",[t._v("暂无订单")])])]):t._e(),t.orderList.length>0?e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.loadMore},model:{value:t.isLoading,callback:function(s){t.isLoading=s},expression:"isLoading"}},t._l(t.orderList,(function(s,a){return e("van-cell",{key:a},[e("div",{staticClass:"card"},[e("div",{staticClass:"orderTitlePanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("span",{staticClass:"orderTitleStore"},[t._v(t._s(s.shopName))]),e("div",{staticClass:"orderCodeJudge",style:{backgroundImage:t.checkImage}},[t._v("待审核")])]),e("div",{staticClass:"van-hairline--top"}),e("div",{staticClass:"orderInfoPanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("退货单号")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.returnBillNo))])]),e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("申请时间")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.returnTime))])])]),e("div",{staticClass:"dashLine"}),e("div",{staticClass:"orderInfoPanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("订单号")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.subBillNo))])]),e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("下单时间")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.createdTime))])])]),e("div",{staticClass:"dashLine"}),e("div",{staticClass:"orderInfoPanel autoHeight",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("联系人")]),e("span",{staticClass:"orderInfoDetai"},[t._v("\n                    "+t._s(s.returnName)+"\n                    "+t._s(s.returnPhone)+"\n                  ")])]),e("div",{staticClass:"orderInfoItem"},[e("div",{staticClass:"orderInfoTitle"},[t._v("取件地址")]),e("div",{staticClass:"orderInfoDetai"},[t._v(t._s(s.returnAddr))])])]),e("div",{staticClass:"van-hairline--top"}),e("div",{staticClass:"pricePanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("span",{staticClass:"orderGoods"},[t._v(t._s(s.spuName))]),e("span",{staticClass:"orderGoodsNum"},[t._v("共1件商品")]),e("span",{staticClass:"orderPrice"},[e("span",{staticStyle:{"font-size":"14px"}},[t._v("￥")]),t._v("\n                  "+t._s(s.realPaySkuTotal)+"\n                ")])])])])})),1):t._e()],1),e("van-tab",{attrs:{title:"待退款"}},[t.orderList.length<=0?e("div",{staticClass:"noMessagePanel"},[e("div",{staticClass:"noMessage"},[e("img",{staticClass:"noMessageImg",attrs:{src:t.imgDefault}}),e("p",[t._v("暂无订单")])])]):t._e(),t.orderList.length>0?e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.loadMore},model:{value:t.isLoading,callback:function(s){t.isLoading=s},expression:"isLoading"}},t._l(t.orderList,(function(s,a){return e("van-cell",{key:a},[e("div",{staticClass:"card"},[e("div",{staticClass:"orderTitlePanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("span",{staticClass:"orderTitleStore"},[t._v(t._s(s.shopName))]),e("div",{staticClass:"orderCodeReturn",style:{backgroundImage:t.refundImage}},[t._v("待退款")])]),e("div",{staticClass:"van-hairline--top"}),e("div",{staticClass:"orderInfoPanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("退货单号")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.returnBillNo))])]),e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("申请时间")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.returnTime))])])]),e("div",{staticClass:"dashLine"}),e("div",{staticClass:"orderInfoPanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("订单号")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.subBillNo))])]),e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("下单时间")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.createdTime))])])]),e("div",{staticClass:"dashLine"}),e("div",{staticClass:"orderInfoPanel autoHeight",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("联系人")]),e("span",{staticClass:"orderInfoDetai"},[t._v("\n                    "+t._s(s.returnName)+"\n                    "+t._s(s.returnPhone)+"\n                  ")])]),e("div",{staticClass:"orderInfoItem"},[e("div",{staticClass:"orderInfoTitle"},[t._v("取件地址")]),e("div",{staticClass:"orderInfoDetai"},[t._v(t._s(s.returnAddr))])])]),e("div",{staticClass:"van-hairline--top"}),e("div",{staticClass:"pricePanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("span",{staticClass:"orderGoods"},[t._v(t._s(s.spuName))]),e("span",{staticClass:"orderGoodsNum"},[t._v("共1件商品")]),e("span",{staticClass:"orderPrice"},[e("span",{staticStyle:{"font-size":"14px"}},[t._v("￥")]),t._v("\n                  "+t._s(s.realPaySkuTotal)+"\n                ")])])])])})),1):t._e()],1),e("van-tab",{attrs:{title:"已完成"}},[t.orderList.length<=0?e("div",{staticClass:"noMessagePanel"},[e("div",{staticClass:"noMessage"},[e("img",{staticClass:"noMessageImg",attrs:{src:t.imgDefault}}),e("p",[t._v("暂无订单")])])]):t._e(),t.orderList.length>0?e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.loadMore},model:{value:t.isLoading,callback:function(s){t.isLoading=s},expression:"isLoading"}},t._l(t.orderList,(function(s,a){return e("van-cell",{key:a},[e("div",{staticClass:"card"},[e("div",{staticClass:"orderTitlePanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("span",{staticClass:"orderTitleStore"},[t._v(t._s(s.shopName))]),e("div",{staticClass:"orderCodeFinished",style:{backgroundImage:t.finishImage}},[t._v("已完成")])]),e("div",{staticClass:"van-hairline--top"}),e("div",{staticClass:"orderInfoPanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("退货单号")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.returnBillNo))])]),e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("申请时间")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.returnTime))])])]),e("div",{staticClass:"dashLine"}),e("div",{staticClass:"orderInfoPanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("订单号")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.subBillNo))])]),e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("下单时间")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.createdTime))])])]),e("div",{staticClass:"dashLine"}),e("div",{staticClass:"orderInfoPanel autoHeight",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("联系人")]),e("span",{staticClass:"orderInfoDetai"},[t._v("\n                    "+t._s(s.returnName)+"\n                    "+t._s(s.returnPhone)+"\n                  ")])]),e("div",{staticClass:"orderInfoItem"},[e("div",{staticClass:"orderInfoTitle"},[t._v("取件地址")]),e("div",{staticClass:"orderInfoDetai"},[t._v(t._s(s.returnAddr))])])]),e("div",{staticClass:"van-hairline--top"}),e("div",{staticClass:"pricePanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("span",{staticClass:"orderGoods"},[t._v(t._s(s.spuName))]),e("span",{staticClass:"orderGoodsNum"},[t._v("共1件商品")]),e("span",{staticClass:"orderPrice"},[e("span",{staticStyle:{"font-size":"14px"}},[t._v("￥")]),t._v("\n                  "+t._s(s.realPaySkuTotal)+"\n                ")])])])])})),1):t._e()],1),e("van-tab",{attrs:{title:"已驳回"}},[t.orderList.length<=0?e("div",{staticClass:"noMessagePanel"},[e("div",{staticClass:"noMessage"},[e("img",{staticClass:"noMessageImg",attrs:{src:t.imgDefault}}),e("p",[t._v("暂无订单")])])]):t._e(),t.orderList.length>0?e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.loadMore},model:{value:t.isLoading,callback:function(s){t.isLoading=s},expression:"isLoading"}},t._l(t.orderList,(function(s,a){return e("van-cell",{key:a},[e("div",{staticClass:"card"},[e("div",{staticClass:"orderTitlePanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("span",{staticClass:"orderTitleStore"},[t._v(t._s(s.shopName))]),e("div",{staticClass:"orderCodeHasReturn",style:{backgroundImage:t.rejectImage}},[t._v("已驳回")])]),e("div",{staticClass:"van-hairline--top"}),e("div",{staticClass:"orderInfoPanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("退货单号")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.returnBillNo))])]),e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("申请时间")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.returnTime))])])]),e("div",{staticClass:"dashLine"}),e("div",{staticClass:"orderInfoPanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("订单号")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.subBillNo))])]),e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("下单时间")]),e("span",{staticClass:"orderInfoDetai"},[t._v(t._s(s.createdTime))])])]),e("div",{staticClass:"dashLine"}),e("div",{staticClass:"orderInfoPanel autoHeight",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("div",{staticClass:"orderInfoItem"},[e("span",{staticClass:"orderInfoTitle"},[t._v("联系人")]),e("span",{staticClass:"orderInfoDetai"},[t._v("\n                    "+t._s(s.returnName)+"\n                    "+t._s(s.returnPhone)+"\n                  ")])]),e("div",{staticClass:"orderInfoItem"},[e("div",{staticClass:"orderInfoTitle"},[t._v("取件地址")]),e("div",{staticClass:"orderInfoDetai"},[t._v(t._s(s.returnAddr))])])]),e("div",{staticClass:"van-hairline--top"}),e("div",{staticClass:"pricePanel",on:{click:function(e){return t.gotoReturnDetail(s)}}},[e("span",{staticClass:"orderGoods"},[t._v(t._s(s.spuName))]),e("span",{staticClass:"orderGoodsNum"},[t._v("共1件商品")]),e("span",{staticClass:"orderPrice"},[e("span",{staticStyle:{"font-size":"14px"}},[t._v("￥")]),t._v("\n                  "+t._s(s.realPaySkuTotal)+"\n                ")])])])])})),1):t._e()],1)],1)],1)],1)},i=[],n=e("9143"),r=e("da6f"),o=e("986e"),c=e("371c"),l=e("da6a"),d={name:"commerceReturnList",components:{NavigationBar:l["a"]},data:function(){return{orderList:[],isLoading:!1,finished:!1,orderData:{page:1,row:10},active:0,imgDefault:e("e632"),serachIcon:e("98e2"),userInfo:null,scrollTop:0,rejectImage:"url("+e("ae58")+") ",finishImage:"url("+e("ca95")+") ",refundImage:"url("+e("b9d4")+") ",checkImage:"url("+e("0a5d")+") "}},beforeRouteLeave:function(t,s,e){this.scrollTop=document.querySelectorAll(".van-tab__pane")[this.active].scrollTop,e()},activated:function(){this.userInfo=r["b"].get("userInfo"),this.userInfo=this.userInfo?this.userInfo:r["a"].getStorage("custNews"),this.orderData.recAreaCode=this.userInfo.AREA_CODE,"{}"!=JSON.stringify(this.$route.params)?(this.active!=this.$route.params.orderInfo?this.active=1*this.$route.params.orderInfo:(this.initParams(),this.getReturnList()),document.querySelectorAll(".van-tab__pane")[this.active].scrollTop=0):document.querySelectorAll(".van-tab__pane")[this.active].scrollTop=this.scrollTop},methods:{initParams:function(){this.orderData.page=1,this.orderList=[],this.finished=!1},getReturnList:function(){var t=this,s=r["b"].get("custNews")&&r["b"].get("custNews").AREA_CODE?r["b"].get("custNews"):r["a"].getStorage("custNews");""!=this.userInfo.AREA_CODE&&void 0!=this.userInfo.AREA_CODE||(c["a"].i("area code empty, reset first."),this.userInfo=s&&s.AREA_CODE?s:r["a"].getStorage("custNews"),this.orderData.recAreaCode=this.userInfo.AREA_CODE),this.userInfo.AREA_CODE!=s.AREA_CODE&&(c["a"].i("area code changed, reset first."),this.userInfo=s&&s.AREA_CODE?s:r["a"].getStorage("custNews"),this.orderData.recAreaCode=this.userInfo.AREA_CODE),this.orderData.orderCate=this.active,this.isLoading=!0,Object(n["e"])(this.orderData).then((function(s){t.isLoading=!1,"0"==s.resultCode?(s.pages<=t.orderData.page||0==s.pages?t.finished=!0:(t.finished=!1,t.orderData.page++),setTimeout((function(){t.orderList=t.orderList.concat(s.data)}),200)):(t.finished=!0,s.msg?t.$toast(s.msg):t.showMsg("网络异常，请稍后重试！"))})).catch((function(s){t.isLoading=!1,t.finished=!0,t.$toast("加载失败，请稍后重试！")}))},loadMore:function(){this.getReturnList()},adoptReturn:function(t){this.setReturnStatus(t.returnBillNo,1)},rejectReturn:function(t){this.setReturnStatus(t.returnBillNo,0)},setReturnStatus:function(t,s){var e=this,a={returnBillNo:t,auditResult:s};Object(n["i"])(a).then((function(a){"0"==a.resultCode?(e.changeDataFromList(t,s?"已完成":"已驳回"),e.$toast("审批成功")):e.$toast("审批失败，请重试！")})).catch((function(t){e.$toast("网络异常，请稍后重试！")}))},changeDataFromList:function(t,s){for(var e=-1,a=0;a<this.orderList.length;a++)if(this.orderList[a].returnBillNo==t){e=a;break}0==this.active?this.orderList[e].billStatus=s:1==this.active?this.orderList.splice(e,1):(this.initParams(),this.getReturnList()),o["a"].$emit("reloadSaleNum")},gotoReturnDetail:function(t){r["b"].set("returnDealFunction",this.changeDataFromList),this.$router.push({path:"/commerceReturnDetail",query:{orderInfo:t}})},gotoSearch:function(){r["b"].set("returnDealFunction",this.changeDataFromList),this.$router.push({path:"/commerceSearch",query:{orderType:2}})},onClickLeft:function(){r["b"].dele("returnDealFunction"),this.$router.back()},onTabChange:function(t){this.initParams(),this.getReturnList()}}},u=d,f=(e("3405"),e("2877")),v=Object(f["a"])(u,a,i,!1,null,null,null);s["default"]=v.exports},3405:function(t,s,e){"use strict";var a=e("e7a0"),i=e.n(a);i.a},"4f11":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAqhJREFUeAHtms1L1UEUhtX8IJUwEEGiRKggEqGNiwpx08qiaOEmMKE2QctyIfQXRGAtxJ0o1CYEEaTCRYsgqEUgRAWChIohRBpEH1TengMOHIZWwoHD3HPgZebcO8yc5x283pnframJCAfCgXAgHAgHwoFwIBwIB8KBcMChA5VKpRu9QJto2GGJdiUB3Is+oRTrdqs5mxnifrSdyHfbGWdl2pQD7CX0I4OfJq+3WdHRrEBeR38y+LvktY7KtCkFyLEMfIf8ls1qjmaV3UX3M/jf5FcdlWlTCpAN6FEG/5180GZFR7MC2YqeZfBfyE87KtOmFCDb0esMfp38pM2KjmYFsgt9QDokP+KoTJtSgOxBstM6XpG026zoaFYgzyD5G9fxlKTFUZk2pQB5Hsmnu46HJA02KzqaFcgRJP/XdYyTVMW3u1FNvdsfc7Q/NqXI7qJ7Gbx8x79ms6KjWYGsRzMZvJzuLjoq06YUIJvRQgYv5/p+mxWdzQroXAa/Qd7rrEy7coBdzQyYsFvN4czAX0H5hcYkr9U5LNemJGAvo59Ix2OSRpsVHc4K7AD6qh2gv4haHZZrUxKwp5Dc5+uQI3D5B59kKbBH0Yp2gP57dDiNKb4FthMtIR1rJCeKh0+AwLYhecSl4zNJXxpTfAvsfjSvHaD/DZ0rHj4BAivnhCmk4xfJUBpTfAusnBTlaY+OvyQ3iofXgADfRvL0R8cdPab4PuT/uy16wOvl3xal3QX2AsrvC+VpUfn3hcqEswBvIR1PSJrTmOJbYOUXIXJ/oOMlycHi4RMgsN1oWTtA/y06lMYU3wLbgd4gHR9JjhUPnwCBPYCeIx1L6f2qaCFvQrPKgXdVAa4hgd+HbiL5Bclx/V70w4FwIBwIB8KBcCAcCAfCgXBgzw78A2Wj4+ezw0gaAAAAAElFTkSuQmCC"},9143:function(t,s,e){"use strict";e.d(s,"c",(function(){return i})),e.d(s,"b",(function(){return n})),e.d(s,"h",(function(){return r})),e.d(s,"d",(function(){return o})),e.d(s,"e",(function(){return c})),e.d(s,"f",(function(){return l})),e.d(s,"i",(function(){return d})),e.d(s,"g",(function(){return u})),e.d(s,"a",(function(){return f}));var a=e("ba6a"),i=function(t){return new Promise((function(s,e){a["a"].get("xwj-commerce-sale/saler/orderList",t,!0).then((function(t){s(t)})).catch((function(t){e(t)}))}))},n=function(t){return new Promise((function(s,e){a["a"].get("xwj-commerce-sale/saler/orderDetailBySubNo",t,!0).then((function(t){s(t)})).catch((function(t){e(t)}))}))},r=function(t){return new Promise((function(s,e){a["a"].post("xwj-commerce-sale/myOrder/confirmOrder",t).then((function(t){s(t)})).catch((function(t){e(t)}))}))},o=function(t){return new Promise((function(s,e){a["a"].get("xwj-commerce-purchase/saler/getBuyList",t,!0).then((function(t){s(t)})).catch((function(t){e(t)}))}))},c=function(t){return new Promise((function(s,e){a["a"].get("xwj-commerce-sale/saler/returnGoodsList",t,!0).then((function(t){s(t)})).catch((function(t){e(t)}))}))},l=function(t){return new Promise((function(s,e){a["a"].get("xwj-commerce-sale/saler/returnDetailByReturnNo",t,!0).then((function(t){s(t)})).catch((function(t){e(t)}))}))},d=function(t){return new Promise((function(s,e){a["a"].post("xwj-commerce-sale/saler/returnGoodsAppr",t).then((function(t){s(t)})).catch((function(t){e(t)}))}))},u=function(t){return new Promise((function(s,e){a["a"].post("xwj-commerce-sale/saler/sendGoodsArriveMsg",t).then((function(t){s(t)})).catch((function(t){e(t)}))}))},f=function(t,s){return new Promise((function(e,i){a["a"].get("xwj-adapter-dada/dadaOrder/orderTrack",{orderId:t,recAreaCode:s}).then((function(t){e(t)})).catch((function(t){i(t)}))}))}},"960f":function(t,s,e){"use strict";var a=e("2627"),i=e.n(a);i.a},"98e2":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAA7pJREFUSA2tlktIlFEUx2c+HWYx0aoWPahGey1btAgpQoKgqKBdGlnqWMuCpOgl9BB67HpY+EItpFwEQRgJlbVoYQMSVLSwTTBoJdEURTONM/3+H/fKtVIbnQN3zvnO6/+dc8937wQD01BbW9vCsbGxHbhtYS1nLWYVs0aDwWAil8v1w/tisdgzeBb9lBSczNre3l4C0FnsFSSd1M+Jf+N5XmNtbe3tqYD/mai5ufkoiQQWMglT8MckGmANI//kJaKsEuSNrCUsS09DodCu6urqEatw+QTA3t7ecCKRaCPRbjmR/DNyY1FRUQtv/s0NtHJPT09RMpncht9BdOXSEzdSXFy8A9AX1s/yCYAtLS23HLD7BO0h6It1no4Tf4j4i/iFAP3EKmNvh9y4ccDW1tYj2Wz2gjFeraurO0jAtEPgJpPM3pdlMpmHiHOIHwqHw2uqqqq+Wz/POJUAdk4yTvdnCqb4mpqa5wxPnWSqXZ5KpY5LtuQDmmlUGz6rjTOpzCYUp42a1OuSAT1M95ZKFnn6zuAVesDYmM+eKWYKOg1oGnuYvPusn8fDdha2YFrTaA2z5WzLB/LeNXn8giR77N1Wo3w82egbe96MIm4qCOBVppMBD2WpUQ7knXGaADr21rpQ2ErJaqnORpFOkIJSNBp9T0FjSgrOMnFVqINYn8MP8UJSeXl5hnw/lZP8kgP6LEYl8AYLxAtJ3d3d88gbMTn9gtTShBR8rP5eFhKQjz7q5BvycSi1X4KmFfDxo0662RJH3GaTI8lh8EqyxyT1GeUiRneDkWfNdItQwH4loqhHLP9c9jhZdFO/loEqG8ULQVxZO8lj78krNqemNMeDBVrP5bvPGmfKOzs7FxHbpHjyxzl1+iWL/MOb/t7B0O9rAoEb3GvrjJw3i8fjIYalh3bOJzjFMMbcJD4gYOrvLrj+FoRZfVS6zXX8H1mVDQ4OPsG3TP6ANXBcvnRjJ0wlQ7OWfew1b5flBa5FIpEzlZWV/rfqBrqy+ZuhPWsysdY8TI7ztPSyVUwAlLKjo6M0nU4/QFxhnL7ypneQ78EHGDL9Pcxxs6tl+me3CZADyHZA1MYGXvwEurks7WMDoGd9WT9/UldXV4R9OEaiemxqsUu/SJDGZk+QcRv6OGAxtZFLtx7QS9ZoQf+q0DqIm5t6L4G6z1a7NkdOkuwRz1fcaZSdOTgJ8yvTM371UwLKyZLuM4BXUtkyAjPw7/B3OkHg/kdtfV3OxJ/C94zRffxvQDdJvjKghwE9wos1/QZ4dZvF8yqPBAAAAABJRU5ErkJggg=="},ae58:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAABACAYAAADbPd8FAAAAAXNSR0IArs4c6QAAAvFJREFUeAHtnT1rFFEYhd97o0IkoFgobBuwiZ3byNioP8AYsLGxF6z8KBVbPzrxP6gQY60bIdnZNGtnsLKNaCERA/ED5vreDbvE2T2Jls45U2Rm7hkC55yHO5Nb5IZXK91kOhqfQDDbsmAbXnY/Wlw6Mn1oqd1u/6obj/UB3TczAQdhJiU7acmuVKl6trn9431ntXep7lZA1BMhuU8pzToYi69Xevf9esTBARL/sgkSSFbd6qyuZfV2/jEiI9/o4ExgB4qd14eA4GRgzHWy9KDf7x8UEGPRcA7kb4qv2z/nBQRn/xNdV1YJiInJkA76WkVbMwRp+RNtJ2sJiInJcA7mxSsBwdk9dC0gYDScgoDg7B26FhAwGk5BQHD2Dl0LCBgNpyAgOHuHrgUEjIZTEBCcvUPXAgJGwykICM7eoWsBAaPhFAQEZ+/QtYCA0XAKAoKzd+haQMBoOAUBwdk7dC0gYDScgoDg7B26FhAwGk5BQHD2Dl0LCBgNpyAgOHuHrgUEjIZTEBCcvUPXAgJGwykICM7eoWsBAaPhFAQEZ+/QtYCA0XAKAoKzd+haQMBoOAUBwdk7dB1DCN+gKoEuAZ8h0kc61zIME8ivjA2oSqBLIPo/mhIQdLVjwzFYeItlKWwJxBDtJZtp+cUJxAtF8cFCeIcfkcKUwGAdIqT0gsm0vOIEBkBMT4XHgz2Z8HNSSBIYAFEUxWdfoHpI4lk290hgAETW47GjjxyKT3s8K4kggREQ5+bmtvxPjmsOhS9N6GBNYAREDuD82TOL/i1xjzUM+Tbf2rN2+FY7odPtPfXz5ZqkW4IE/pghst/8yjg8Fa76+TmBf1msJTA2Qwz1PFMsd3t3/IPibr4ejuvc7AT2LXq5u7bgO8A+cShONDsKucsJ7AtEfujN+vpM9WXzhkNxM2/Dk8d0NDOBvwJiaL0sy+PfK7temc1bSqeG4zo3J4F/AmK37U5ZzqbKLvqOsKf9l7Rca/nO8y3NILtT+v+ufwOgeJDPjohuigAAAABJRU5ErkJggg=="},b9d4:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAABACAYAAADbPd8FAAAAAXNSR0IArs4c6QAAAvhJREFUeAHtnb9rFEEcxb+z56W6QlMYSJtgIWJjCkv/A5NABHNIugjCqYVa6tUaQVAC2okguTu4JP+FRayipjC2EQWrXKNHdpxd2WOzt89g6b63cD/2zTbvvQ8zu3fFuOutDW86CBJwAzN/4JztmLOtxvnZrVc354ZF41FR0HlVE/CN4Oyc97bsY+seftzfa97uLhTdCohiIizn3mZiH/ebrY3H7bYfcXCKxb98licQm93//KOTDD5I3kZkJCc6OBNIoMiWDwHBycCY69jiJ6svd+oCYiwaUiHcUww+7c8LCNL+S217ExClwZCK4ZF0TjMEafnltt20gChPhlT1DQFBWj2yLSBQMqS6gCAtHtkWECgZUl1AkBaPbAsIlAypLiBIi0e2BQRKhlQXEKTFI9sCAiVDqgsI0uKRbQGBkiHVBQRp8ci2gEDJkOoCgrR4ZFtAoGRIdQFBWjyyLSBQMqS6gCAtHtkWECgZUl1AkBaPbAsIlAypLiBIi0e2BQRKhlQXEKTFI9sCAiVDqgsI0uKRbQGBkiHVBQRp8ci2gEDJkOoCgrR4ZFtAoGRIdQFBWjyyHTnnDtGgdL4EIu/9Vz7bcowSSJaMAzQonS+BsGQICL7asePIW/QeD2uELYFowte32UzLL04gev184Ys59wFfohGmBNLfIZzZJpNpecUJpEDUJuovzJI9mXSwJ5AC8WZt8Xt42lhjD0P+czvqnJ50T8Nubd8UCncC6QyRRLDevjZwUe1WWDq0bSMxE7W89913vb2Ll5cS6Upe13eeBMIDxvEj/Lfhmnc6nbCZRkrG8VGdVT2B0ZKRGQ3/fvqpWrQSbjJ7maZPngTGZojM+p+ZovswzBSPwhbB8Lrsen1WI4ETi16+21v08dG6eZuqhmW5+FsCY0tG8eK3z5b6Zyaj2bCUtPXjVTGd6p2fOEPkLd+41z979HPYCgvIvHl/IT+m79VI4J+AyFteaW3O/HLDq87iS+E+YzqMhZcLr3QX+vyl+v4fJfAb2Id8yvrkkuUAAAAASUVORK5CYII="},ca95:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAABACAYAAADbPd8FAAAAAXNSR0IArs4c6QAAAu1JREFUeAHtnU1rE1EYhe97q6WLNnVVITuJLqzu9H9YBdcuBaErrbYgGkFQ/NiJ4E8Qodb/UXdtXNjirqKrfHQRlc7rnYaEmSSn1WVzziyauedOC+ech9vJBHLtwVbTg46JT8As7Idge6nsTQu+cW5xfuO22Z9h4yYghiNhGduuRVt5vlj5WHQciwOdMyXgNc+y9dXt5ou6+4CDU0wRyOtoAu5hpdto5RP38x8DMvKBDs4EcihWG+3ruXsBwcnAiGvP/OU799MCYiQaVsFr3xqtJQHB2v8Y3x5MQIzJhVayEK5qhaCtf5xxrwqIcbmQaundxqyAIC0f2RYQKBlSXUCQFo9sCwiUDKkuIEiLR7YFBEqGVBcQpMUj2wICJUOqCwjS4pFtAYGSIdUFBGnxyLaAQMmQ6gKCtHhkW0CgZEh1AUFaPLItIFAypLqAIC0e2RYQKBlSXUCQFo9sCwiUDKkuIEiLR7YFBEqGVBcQpMUj2wICJUOqCwjS4pFtAYGSIdUFBGnxyLaAQMmQ6gKCtHhkW0CgZEh1AUFaPLItIFAypLqAIC0e2Y7BQgdNSudLIFqw73y25RglEIP7HpqUzpdAdDMBwdc7dBzTTcRnOKsJugTi1HT2ic61DMME4tMLZ3bTbitb8ApNUCXQew5hVtpVhSoBmS0lcAjEzHR809uTqTSnAWECh0DUz8/9TBt0vSL0L8tDCQweXc+Eyuv0kOrH0LyGZAkMgKhfsn2bineCmbZtJIOgaHcARC4+uzi3nvZMeFK8QOdcCaT+y4e721qj9T59Vf7N8oxGDAmUVojcsKV/GQuV+VvpXccHhgDksZzAyArRn+6tFO1H6YbicfoADF7Xv16vk5HAsUWvfenc8IPsrQc/OxmW5eKoBI4FIv/l+rbPdkP7bgh+L9+G56g/qLmTncA/AdG3WN/pLPzqZstuvpTAuNzX9To5CfwXEEXbD782awe/47Us+BVzr6a70WpaQapaQYopnbzzvwQahlSsew1EAAAAAElFTkSuQmCC"},da6a:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"navBar van-nav-bar",style:t.navBarStyle},[t.isShowLeft?e("div",{staticClass:"left",style:t.bothWidth,on:{click:function(s){return t.$emit("onLeftClick")}}},[t.isShowBack?e("img",{attrs:{src:t.backImg,alt:"",srcset:""}}):t._e(),t._t("nav-left")],2):t._e(),e("div",{staticClass:"center"},[t.isDefault?e("span",{staticClass:"title"},[t._v(t._s(t.pageName))]):t._e(),t._t("nav-center")],2),t.isShowRight?e("div",{staticClass:"right",style:t.bothWidth},[t._t("nav-right")],2):t._e()])},i=[],n={props:{isDefault:{default:!0,type:Boolean},bothWidth:{type:Object,default:function(){return{width:"36px"}}},isShowRight:{default:!0,type:Boolean},isShowLeft:{default:!0,type:Boolean},isShowBack:{default:!0,type:Boolean},leftImgType:{type:String,default:"0"},pageName:{default:"",type:String},navBarStyle:{type:Object,default:function(){return{backgroundColor:"#fff"}}}},data:function(){return{backImg:e("4f11")}},mounted:function(){this.isLeftImg()},methods:{isLeftImg:function(){switch(this.leftImgType){case"0":this.backImg=e("4f11");break;case"1":this.backImg=e("4f11");break}}}},r=n,o=(e("960f"),e("2877")),c=Object(o["a"])(r,a,i,!1,null,"7e35d797",null);s["a"]=c.exports},e632:function(t,s,e){t.exports=e.p+"www/img/img_Default@2x.8a897332.png"},e7a0:function(t,s,e){}}]);
//# sourceMappingURL=chunk-7dcc61b8.63c853b7.js.map