"use strict";(self.webpackChunkreact_ts_tesla=self.webpackChunkreact_ts_tesla||[]).push([[786],{3786:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var i=n(885),s=n(2791),a=n(3397),c=n(6871),r=n(2033),u=n(184);function o(){var e=(0,s.useState)([]),t=(0,i.Z)(e,2),n=t[0],o=t[1],l=(0,s.useState)("0"),d=(0,i.Z)(l,2),f=d[0],m=d[1],v=(0,c.s0)();(0,s.useEffect)((function(){(0,r.K)("/tesla").then((function(e){o(e.rotationImg)}))}),[]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"view_back"}),(0,u.jsxs)("div",{className:"view_main",children:[(0,u.jsxs)("div",{className:"view_top",children:[(0,u.jsx)("span",{children:"\u9009\u62e9\u8f66\u578b"}),(0,u.jsx)(a.Z,{onClick:function(){v(-1)}})]}),n.map((function(e){return(0,u.jsxs)("div",{className:f===e.id?"view_item view_activeItem":"view_item",onClick:function(){return m(e.id)},children:[(0,u.jsx)("span",{children:e.name}),(0,u.jsx)("img",{alt:"",src:e.configuration[0].carColor[e.id].configList[1].picUrl,className:"view_img"})]},e.id)})),(0,u.jsx)("div",{className:"view_todo",children:"\u6b64\u529f\u80fd\u672a\u5b8c\u5584,\u60a8\u8fd8\u4e0d\u80fd\u8bd5\u9a7e"})]})]})}},2033:function(e,t,n){n.d(t,{K:function(){return a}});var i=n(4569),s=n.n(i);s().defaults.baseURL="http://121.40.35.197:9000",s().defaults.timeout=5e3;var a=function(e,t){return new Promise((function(n,i){s().get(e,{params:t}).then((function(e){n(e.data.data)})).catch((function(e){i(e)}))}))}}}]);
//# sourceMappingURL=786.d20cef9c.chunk.js.map