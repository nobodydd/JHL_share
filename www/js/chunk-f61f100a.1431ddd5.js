(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f61f100a"],{2627:function(e,t,s){},"4f11":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAqhJREFUeAHtms1L1UEUhtX8IJUwEEGiRKggEqGNiwpx08qiaOEmMKE2QctyIfQXRGAtxJ0o1CYEEaTCRYsgqEUgRAWChIohRBpEH1TengMOHIZWwoHD3HPgZebcO8yc5x283pnframJCAfCgXAgHAgHwoFwIBwIB8KBcMChA5VKpRu9QJto2GGJdiUB3Is+oRTrdqs5mxnifrSdyHfbGWdl2pQD7CX0I4OfJq+3WdHRrEBeR38y+LvktY7KtCkFyLEMfIf8ls1qjmaV3UX3M/jf5FcdlWlTCpAN6FEG/5180GZFR7MC2YqeZfBfyE87KtOmFCDb0esMfp38pM2KjmYFsgt9QDokP+KoTJtSgOxBstM6XpG026zoaFYgzyD5G9fxlKTFUZk2pQB5Hsmnu46HJA02KzqaFcgRJP/XdYyTVMW3u1FNvdsfc7Q/NqXI7qJ7Gbx8x79ms6KjWYGsRzMZvJzuLjoq06YUIJvRQgYv5/p+mxWdzQroXAa/Qd7rrEy7coBdzQyYsFvN4czAX0H5hcYkr9U5LNemJGAvo59Ix2OSRpsVHc4K7AD6qh2gv4haHZZrUxKwp5Dc5+uQI3D5B59kKbBH0Yp2gP57dDiNKb4FthMtIR1rJCeKh0+AwLYhecSl4zNJXxpTfAvsfjSvHaD/DZ0rHj4BAivnhCmk4xfJUBpTfAusnBTlaY+OvyQ3iofXgADfRvL0R8cdPab4PuT/uy16wOvl3xal3QX2AsrvC+VpUfn3hcqEswBvIR1PSJrTmOJbYOUXIXJ/oOMlycHi4RMgsN1oWTtA/y06lMYU3wLbgd4gHR9JjhUPnwCBPYCeIx1L6f2qaCFvQrPKgXdVAa4hgd+HbiL5Bclx/V70w4FwIBwIB8KBcCAcCAfCgXBgzw78A2Wj4+ezw0gaAAAAAElFTkSuQmCC"},"5a38":function(e,t,s){},"5d9d":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"commerceReceivedList"},[s("navigation-bar",{attrs:{pageName:"我的送达","right-text":"",fixed:!0},on:{onLeftClick:e.onClickLeft}}),s("div",{staticClass:"searchPanel"},[s("div",{staticClass:"searchInput",on:{click:function(t){return e.gotoSearch()}}},[s("img",{staticClass:"searchImg",attrs:{src:e.serachIcon}}),e._v("\n      搜索订单编号\n    ")])]),e.orderList.length<=0?s("div",{staticClass:"noMessagePanel"},[s("div",{staticClass:"noMessage"},[s("img",{staticClass:"noMessageImg",attrs:{src:e.imgDefault}}),s("p",[e._v("暂无订单")])])]):e._e(),s("div",{staticClass:"commerce-over-box"},[e.orderList.length>0?s("van-list",{attrs:{finished:e.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:e.loadMore},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},e._l(e.orderList,(function(t,a){return s("div",{key:a,staticClass:"card"},[t?s("div",{staticClass:"orderTitlePanel",on:{click:function(s){return e.gotoCommerceDetail(t)}}},[s("div",{staticClass:"orderTitleStore"},[e._v(e._s(t.shopName))]),s("div",{staticClass:"orderCode"},[e._v("订单号："+e._s(t.subBillNo))]),0==t.deliveryType?s("div",{staticClass:"SendTypeDelivery"},[s("div",{staticClass:"sendType"},[e._v("快递配送")])]):e._e(),1==t.deliveryType?s("div",{staticClass:"SendTypeDelivery"},[s("div",{staticClass:"sendType"},[e._v("销售配送")])]):e._e(),2==t.deliveryType?s("div",{staticClass:"SendTypeSelf"},[s("div",{staticClass:"sendType"},[e._v("到店自提")])]):e._e()]):e._e(),t?s("div",{staticClass:"van-hairline--top"}):e._e(),t?s("div",{staticClass:"orderInfoPanel",on:{click:function(s){return e.gotoCommerceDetail(t)}}},[s("van-image",{staticClass:"orderImg",attrs:{"lazy-load":"",src:t.firstGoodsPicUrl}}),s("div",{staticClass:"orderDetail"},[s("div",{staticStyle:{display:"flex"}},[s("div",{staticClass:"orderName userName"},[e._v(e._s(t.recName)+" ")]),s("div",{staticClass:"orderName",staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.recPhone))]),s("div",{staticClass:"orderStatus"},[e._v(e._s(t.billStatus))])]),s("div",{staticClass:"orderName"},[e._v(e._s(t.recAddr))]),s("div",{staticClass:"orderName",staticStyle:{color:"#9a9a9a"}},[e._v(e._s(t.createdTime))])])],1):e._e(),s("div",{staticClass:"van-hairline--top lineMargin"}),t&&t.goodsInfo&&t.goodsInfo.length>0?s("div",{staticClass:"pricePanel",on:{click:function(s){return e.gotoCommerceDetail(t)}}},[s("div",{staticClass:"orderGoods"},[e._v(e._s(t.goodsInfo[0].goodsName))]),s("div",{staticClass:"orderGoodsNum"},[e._v("共"+e._s(t.goodsInfo.length)+"件商品")]),s("div",[s("span",{staticClass:"orderPrice"},[s("span",{staticStyle:{"font-size":"14px"}},[e._v("￥")]),e._v("\n                  "+e._s(t.realPayTotal)+"\n                ")])])]):e._e()])})),0):e._e()],1)],1)},r=[],n=s("9143"),i=s("da6f"),o=s("371c"),c=s("da6a"),d={name:"commerceReceivedList",components:{NavigationBar:c["a"]},data:function(){return{orderList:[],isLoading:!1,finished:!1,orderData:{page:1,row:10,recAreaCode:""},active:0,imgDefault:s("e632"),serachIcon:s("98e2"),userInfo:null,scrollTop:0}},beforeRouteLeave:function(e,t,s){this.scrollTop=document.querySelector(".commerce-over-box").scrollTop,s()},activated:function(){this.userInfo=i["b"].get("userInfo"),this.userInfo=this.userInfo?this.userInfo:i["a"].getStorage("custNews"),this.orderData.recAreaCode=this.userInfo.AREA_CODE,this.$route.params.load?(this.resetData(),this.getOrderList(),document.querySelector(".commerce-over-box").scrollTop=0):document.querySelector(".commerce-over-box").scrollTop=this.scrollTop},methods:{resetData:function(){this.orderData.page=1,this.orderList=[],this.isLoading=!1,this.finished=!1},getOrderList:function(){var e=this,t=i["b"].get("custNews")&&i["b"].get("custNews").AREA_CODE?i["b"].get("custNews"):i["a"].getStorage("custNews");if(""!=this.userInfo.AREA_CODE&&void 0!=this.userInfo.AREA_CODE||(o["a"].i("area code empty, reset first."),this.userInfo=t&&t.AREA_CODE?t:i["a"].getStorage("custNews"),this.orderData.recAreaCode=this.userInfo.AREA_CODE),this.userInfo.AREA_CODE!=t.AREA_CODE&&(o["a"].i("area code changed, reset first."),this.userInfo=t&&t.AREA_CODE?t:i["a"].getStorage("custNews"),this.orderData.recAreaCode=this.userInfo.AREA_CODE),!this.orderData.recAreaCode)return console.log("area code empty, ignore order request."),void this.$toast("小区代码不能未空，请联系管理员。");this.orderData.orderCate=2,this.isLoading=!0,Object(n["c"])(this.orderData).then((function(t){"0"==t.resultCode?(t.pages<=e.orderData.page||0==t.pages?e.finished=!0:(e.orderData.page++,e.finished=!1),setTimeout((function(){e.orderList=e.orderList.concat(t.data)}),200)):(t.msg?e.$toast(t.msg):e.showMsg("网络异常，请稍后重试！"),e.finished=!0),e.isLoading=!1})).catch((function(t){e.$toast("加载失败，请稍后重试！"),e.isLoading=!1,e.finished=!0}))},loadMore:function(){var e=this;setTimeout((function(){e.getOrderList()}),500)},gotoSearch:function(){this.$router.push({path:"/commerceSearch",query:{orderType:1}})},gotoCommerceDetail:function(e){i["b"].set("dealFunction",this.changeDataFromList),this.$router.push({path:"/commerceOrderDetail",query:{orderInfo:e,receivedInfo:{receivedName:"王大锤",receivedPhone:""}}})},onClickLeft:function(){this.$router.back()}}},u=d,l=(s("699d"),s("2877")),f=Object(l["a"])(u,a,r,!1,null,"1a0b34c6",null);t["default"]=f.exports},"699d":function(e,t,s){"use strict";var a=s("5a38"),r=s.n(a);r.a},9143:function(e,t,s){"use strict";s.d(t,"c",(function(){return r})),s.d(t,"b",(function(){return n})),s.d(t,"h",(function(){return i})),s.d(t,"d",(function(){return o})),s.d(t,"e",(function(){return c})),s.d(t,"f",(function(){return d})),s.d(t,"i",(function(){return u})),s.d(t,"g",(function(){return l})),s.d(t,"a",(function(){return f}));var a=s("ba6a"),r=function(e){return new Promise((function(t,s){a["a"].get("xwj-commerce-sale/saler/orderList",e,!0).then((function(e){t(e)})).catch((function(e){s(e)}))}))},n=function(e){return new Promise((function(t,s){a["a"].get("xwj-commerce-sale/saler/orderDetailBySubNo",e,!0).then((function(e){t(e)})).catch((function(e){s(e)}))}))},i=function(e){return new Promise((function(t,s){a["a"].post("xwj-commerce-sale/myOrder/confirmOrder",e).then((function(e){t(e)})).catch((function(e){s(e)}))}))},o=function(e){return new Promise((function(t,s){a["a"].get("xwj-commerce-purchase/saler/getBuyList",e,!0).then((function(e){t(e)})).catch((function(e){s(e)}))}))},c=function(e){return new Promise((function(t,s){a["a"].get("xwj-commerce-sale/saler/returnGoodsList",e,!0).then((function(e){t(e)})).catch((function(e){s(e)}))}))},d=function(e){return new Promise((function(t,s){a["a"].get("xwj-commerce-sale/saler/returnDetailByReturnNo",e,!0).then((function(e){t(e)})).catch((function(e){s(e)}))}))},u=function(e){return new Promise((function(t,s){a["a"].post("xwj-commerce-sale/saler/returnGoodsAppr",e).then((function(e){t(e)})).catch((function(e){s(e)}))}))},l=function(e){return new Promise((function(t,s){a["a"].post("xwj-commerce-sale/saler/sendGoodsArriveMsg",e).then((function(e){t(e)})).catch((function(e){s(e)}))}))},f=function(e,t){return new Promise((function(s,r){a["a"].get("xwj-adapter-dada/dadaOrder/orderTrack",{orderId:e,recAreaCode:t}).then((function(e){s(e)})).catch((function(e){r(e)}))}))}},"960f":function(e,t,s){"use strict";var a=s("2627"),r=s.n(a);r.a},"98e2":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAA7pJREFUSA2tlktIlFEUx2c+HWYx0aoWPahGey1btAgpQoKgqKBdGlnqWMuCpOgl9BB67HpY+EItpFwEQRgJlbVoYQMSVLSwTTBoJdEURTONM/3+H/fKtVIbnQN3zvnO6/+dc8937wQD01BbW9vCsbGxHbhtYS1nLWYVs0aDwWAil8v1w/tisdgzeBb9lBSczNre3l4C0FnsFSSd1M+Jf+N5XmNtbe3tqYD/mai5ufkoiQQWMglT8MckGmANI//kJaKsEuSNrCUsS09DodCu6urqEatw+QTA3t7ecCKRaCPRbjmR/DNyY1FRUQtv/s0NtHJPT09RMpncht9BdOXSEzdSXFy8A9AX1s/yCYAtLS23HLD7BO0h6It1no4Tf4j4i/iFAP3EKmNvh9y4ccDW1tYj2Wz2gjFeraurO0jAtEPgJpPM3pdlMpmHiHOIHwqHw2uqqqq+Wz/POJUAdk4yTvdnCqb4mpqa5wxPnWSqXZ5KpY5LtuQDmmlUGz6rjTOpzCYUp42a1OuSAT1M95ZKFnn6zuAVesDYmM+eKWYKOg1oGnuYvPusn8fDdha2YFrTaA2z5WzLB/LeNXn8giR77N1Wo3w82egbe96MIm4qCOBVppMBD2WpUQ7knXGaADr21rpQ2ErJaqnORpFOkIJSNBp9T0FjSgrOMnFVqINYn8MP8UJSeXl5hnw/lZP8kgP6LEYl8AYLxAtJ3d3d88gbMTn9gtTShBR8rP5eFhKQjz7q5BvycSi1X4KmFfDxo0662RJH3GaTI8lh8EqyxyT1GeUiRneDkWfNdItQwH4loqhHLP9c9jhZdFO/loEqG8ULQVxZO8lj78krNqemNMeDBVrP5bvPGmfKOzs7FxHbpHjyxzl1+iWL/MOb/t7B0O9rAoEb3GvrjJw3i8fjIYalh3bOJzjFMMbcJD4gYOrvLrj+FoRZfVS6zXX8H1mVDQ4OPsG3TP6ANXBcvnRjJ0wlQ7OWfew1b5flBa5FIpEzlZWV/rfqBrqy+ZuhPWsysdY8TI7ztPSyVUwAlLKjo6M0nU4/QFxhnL7ypneQ78EHGDL9Pcxxs6tl+me3CZADyHZA1MYGXvwEurks7WMDoGd9WT9/UldXV4R9OEaiemxqsUu/SJDGZk+QcRv6OGAxtZFLtx7QS9ZoQf+q0DqIm5t6L4G6z1a7NkdOkuwRz1fcaZSdOTgJ8yvTM371UwLKyZLuM4BXUtkyAjPw7/B3OkHg/kdtfV3OxJ/C94zRffxvQDdJvjKghwE9wos1/QZ4dZvF8yqPBAAAAABJRU5ErkJggg=="},da6a:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"navBar van-nav-bar",style:e.navBarStyle},[e.isShowLeft?s("div",{staticClass:"left",style:e.bothWidth,on:{click:function(t){return e.$emit("onLeftClick")}}},[e.isShowBack?s("img",{attrs:{src:e.backImg,alt:"",srcset:""}}):e._e(),e._t("nav-left")],2):e._e(),s("div",{staticClass:"center"},[e.isDefault?s("span",{staticClass:"title"},[e._v(e._s(e.pageName))]):e._e(),e._t("nav-center")],2),e.isShowRight?s("div",{staticClass:"right",style:e.bothWidth},[e._t("nav-right")],2):e._e()])},r=[],n={props:{isDefault:{default:!0,type:Boolean},bothWidth:{type:Object,default:function(){return{width:"36px"}}},isShowRight:{default:!0,type:Boolean},isShowLeft:{default:!0,type:Boolean},isShowBack:{default:!0,type:Boolean},leftImgType:{type:String,default:"0"},pageName:{default:"",type:String},navBarStyle:{type:Object,default:function(){return{backgroundColor:"#fff"}}}},data:function(){return{backImg:s("4f11")}},mounted:function(){this.isLeftImg()},methods:{isLeftImg:function(){switch(this.leftImgType){case"0":this.backImg=s("4f11");break;case"1":this.backImg=s("4f11");break}}}},i=n,o=(s("960f"),s("2877")),c=Object(o["a"])(i,a,r,!1,null,"7e35d797",null);t["a"]=c.exports},e632:function(e,t,s){e.exports=s.p+"www/img/img_Default@2x.8a897332.png"}}]);
//# sourceMappingURL=chunk-f61f100a.1431ddd5.js.map