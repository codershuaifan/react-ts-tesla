"use strict";(self.webpackChunkreact_ts_tesla=self.webpackChunkreact_ts_tesla||[]).push([[438],{5357:function(e,s,n){n.d(s,{Z:function(){return i}});n(2791);var a=n(184);function i(e){var s=e.params,n=e.isBuy,i=void 0!==n&&n;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:i?"buy_carInfo":"home_carInfo",children:[(0,a.jsxs)("div",{className:"home_div",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"home_span",children:null===s||void 0===s?void 0:s.battery})," \u516c\u91cc"]}),(0,a.jsx)("div",{className:"home_a2",children:"\u7eed\u822a\u91cc\u7a0b (\u9884\u4f30)"})]}),(0,a.jsxs)("div",{className:"home_div",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"home_span",children:null===s||void 0===s?void 0:s.speedUp})," \u79d2"]}),(0,a.jsx)("div",{className:"home_a2",children:"\u767e\u516c\u91cc\u52a0\u901f"})]}),(0,a.jsxs)("div",{className:"home_div",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"home_span",children:null===s||void 0===s?void 0:s.higtSpeed})," \u516c\u91cc/\u5c0f\u65f6"]}),(0,a.jsx)("div",{className:"home_a2",children:"\u6700\u9ad8\u8f66\u901f+"})]})]})})}},2438:function(e,s,n){n.r(s),n.d(s,{default:function(){return m}});var a=n(885),i=n(2791),c=n(4164),t=n(3482),l=n(2033),o=n(6871),r=n(5357),d=n(184);function m(){var e=(0,o.s0)(),s=(0,i.useState)([]),n=(0,a.Z)(s,2),m=n[0],h=n[1],u=null===m||void 0===m?void 0:m.map((function(s){return(0,d.jsx)(t.tq.Item,{children:(0,d.jsxs)("div",{className:"home_content",style:{backgroundImage:"url(".concat(s.picUrl,")")},children:[(0,d.jsx)("div",{className:"home_carName",children:s.name}),(0,d.jsx)(r.Z,{params:s}),(0,d.jsx)("button",{className:"home_buy",onClick:function(){return n=s.id,void e("/home/buycar/".concat(n));var n},children:"\u7acb\u5373\u8ba2\u8d2d"}),(0,d.jsx)("a",{className:"home_know",children:"\u4e86\u89e3\u66f4\u591a"})]})},s.id)}));(0,i.useEffect)((function(){(0,l.K)("/tesla").then((function(e){h(e.rotationImg)}))}),[]);return(0,d.jsxs)("div",{children:[(0,d.jsx)(t.tq,{loop:!0,indicatorProps:{color:"white"},children:u}),(0,d.jsxs)("div",{className:"home_main",children:[(0,d.jsx)("div",{className:"home_title",children:"\u672a\u6765\u9a7e\u9a76\u4f53\u9a8c"}),(0,d.jsx)("div",{className:"home_des",children:"\u8f66\u8f86\u81ea\u52a8\u53ec\u5524\uff0c\u8dd1\u8f66\u7ea7\u767e\u516c\u91cc\u52a0\u901f\uff0c\u5728\u8f66\u91cc\u6253\u6e38\u620f\uff0c\u514d\u8d39\u5230\u5e97\u4f53\u9a8c\u7279\u65af\u62c9\u9a7e\u9a76\u65b9\u5f0f"}),(0,d.jsx)("img",{className:"home_img",src:"https://china-community-app.tesla.cn/wechatmini/img01.png",alt:""}),(0,d.jsx)("button",{className:"home_button",onClick:function(){e("/home/view")},children:"\u9884\u7ea6\u8bd5\u9a7e"})]}),(0,d.jsxs)("div",{className:"home_new",children:[(0,d.jsx)("div",{children:"\u65b0\u624b\u4f7f\u7528\u6307\u5357"}),(0,d.jsx)("img",{className:"home_img",src:"https://china-community-app.tesla.cn/wechatmini/card_bg.png",alt:""})]}),c.createPortal((0,d.jsx)(o.j3,{}),document.getElementById("root"))]})}},2033:function(e,s,n){n.d(s,{K:function(){return c}});var a=n(4569),i=n.n(a);i().defaults.baseURL="http://121.40.35.197:9000",i().defaults.timeout=5e3;var c=function(e,s){return new Promise((function(n,a){i().get(e,{params:s}).then((function(e){n(e.data.data)})).catch((function(e){a(e)}))}))}}}]);
//# sourceMappingURL=438.129769ed.chunk.js.map