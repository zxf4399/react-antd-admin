"use strict";(self.webpackChunkreact_antd_admin=self.webpackChunkreact_antd_admin||[]).push([[179],{6508:function(e,t,n){var a=n(7995),c=n(6189),l=n(7280),h=n(8005),r=(n(9090),n(5322)),i=(n(2157),n(6917)),d=n(6883),s=n(8910),m=n(2431),o=n(6695),p=n(9496),Z=(n(1939),n(1748)),u=n(56),f=()=>{const e=(0,h.TH)(),t=(0,p.useMemo)((()=>_["/"].name),[]),n=(0,p.useMemo)((()=>_[e.pathname]?.name),[e.pathname]),a=(0,p.useMemo)((()=>"/"!==e.pathname),[e.pathname]);return(0,u.BX)(Z.Z,{children:[(0,u.tZ)(Z.Z.Item,{children:(0,u.tZ)(l.rU,{to:"/",children:t})},"/"),a&&(0,u.tZ)(Z.Z.Item,{children:n},e.pathname)]})};const{Content:g,Header:k,Sider:y}=i.Z;var S={name:"vxuddk",styles:"padding:24px"},b={name:"k0wtgk",styles:"height:32px;line-height:32px;margin:16px 24px;color:#fff"},v={name:"13udsys",styles:"height:100%"};const w=()=>{const e=(0,h.TH)(),[t,n]=(0,m.Z)({collapsed:!1}),a=(0,o.Z)((()=>{n((e=>({collapsed:!e.collapsed})))})),c=(0,o.Z)((e=>e.map((e=>e.children?(0,u.tZ)(r.Z.SubMenu,{title:e.name,children:c(e.children)},e.path):(0,u.tZ)(r.Z.Item,{children:(0,u.tZ)(l.rU,{to:e.path,children:e.name})},e.path)))));return(0,u.BX)(i.Z,{css:v,children:[(0,u.BX)(y,{collapsed:t.collapsed,collapsible:!0,trigger:null,children:[(0,u.tZ)("div",{css:b,children:"技术栈"}),(0,u.tZ)(r.Z,{defaultSelectedKeys:[e.pathname],mode:"inline",theme:"dark",children:c(H(T))})]}),(0,u.BX)(i.Z,{children:[(0,u.tZ)(k,{children:t.collapsed?(0,u.tZ)(d.Z,{onClick:a}):(0,u.tZ)(s.Z,{onClick:a})}),(0,u.BX)(g,{css:S,children:[(0,u.tZ)(f,{}),(0,u.tZ)(h.j3,{})]})]})]})};var x=(0,p.memo)(w),C=(n(9334),n(9345)),B=({children:e})=>(0,u.tZ)(p.Suspense,{fallback:(0,u.tZ)(C.Z,{}),children:e});const O=p.lazy((()=>n.e(8093).then(n.bind(n,6444)))),z=p.lazy((()=>Promise.all([n.e(4821),n.e(6179),n.e(2245),n.e(5708),n.e(5993),n.e(5515),n.e(33),n.e(2222),n.e(7069),n.e(9084),n.e(2914),n.e(1527),n.e(6893),n.e(1933),n.e(2208),n.e(5777),n.e(7848),n.e(2474),n.e(4161),n.e(1759),n.e(4682),n.e(9762)]).then(n.bind(n,9762)))),M=p.lazy((()=>n.e(2663).then(n.bind(n,2663)))),X=p.lazy((()=>Promise.all([n.e(27),n.e(8888),n.e(3670),n.e(2357),n.e(2277),n.e(5184),n.e(6650),n.e(971),n.e(20),n.e(1167),n.e(3433),n.e(9349),n.e(7762),n.e(107),n.e(1084),n.e(6518),n.e(1075),n.e(3893),n.e(9568),n.e(2728),n.e(9930),n.e(7873),n.e(9871),n.e(1703),n.e(3723),n.e(8330),n.e(2250),n.e(3663),n.e(4985),n.e(3514),n.e(6655),n.e(1187),n.e(8077),n.e(305),n.e(6444),n.e(23),n.e(7078),n.e(4764),n.e(8856),n.e(8865),n.e(7992),n.e(9142),n.e(6727),n.e(1650),n.e(8488),n.e(9431),n.e(2992),n.e(3555),n.e(6913),n.e(9835),n.e(4232),n.e(3093),n.e(5227),n.e(8933),n.e(8184),n.e(114),n.e(564),n.e(5888),n.e(5453),n.e(6168),n.e(3832),n.e(9803)]).then(n.bind(n,5492)))),I=[{children:[{element:(0,u.tZ)(B,{children:(0,u.tZ)(O,{})}),index:!0},{element:(0,u.tZ)(B,{children:(0,u.tZ)(z,{})}),path:"/counter"},{children:[{element:(0,u.tZ)(B,{children:(0,u.tZ)(M,{})}),path:"/css/aspect-ratio"}],path:"/css"},{children:[{element:(0,u.tZ)(B,{children:(0,u.tZ)(X,{})}),path:"/awesome/macOS"}],path:"/awesome"}],element:(0,u.tZ)(x,{}),path:"/"}],_={"/":{name:"首页"},"/awesome":{name:"Awesome"},"/awesome/macOS":{name:"macOS"},"/counter":{name:"计数器"},"/css":{name:"CSS"},"/css/aspect-ratio":{name:"长宽比"}},H=e=>{const t=[];function n(e){if(e?.length)for(let n=0;n<e.length;n++){const a=e[n];a.children?a.path&&t.push({children:H(a.children),name:_[a.path].name,path:a.path}):a.path&&t.push({name:_[a.path].name,path:a.path})}}const a=e[0];return 1===e.length&&"/"===a.path?(t.push({name:_[a.path].name,path:a.path}),n(a.children)):n(e),t};var T=I,U=n(8284),E=n(836);const P=(0,U.xC)({reducer:{counter:E.Z.reducer}});a.render((0,u.tZ)(c.zt,{store:P,children:(0,u.tZ)(l.UT,{children:(0,u.tZ)((()=>(0,h.V$)(T)),{})})}),document.getElementById("root"))},836:function(e,t,n){const a=(0,n(8284).oM)({name:"counter",initialState:{value:0},reducers:{increment:e=>{e.value+=1},decrement:e=>{e.value-=1}}});t.Z=a}},function(e){e.O(0,[179],(function(){[8093,4821,6179,2245,5708,5993,5515,33,2222,7069,9084,2914,1527,6893,1933,2208,5777,7848,2474,4161,1759,4682,9762,2663,27,8888,3670,2357,2277,5184,6650,971,20,1167,3433,9349,7762,107,1084,6518,1075,3893,9568,2728,9930,7873,9871,1703,3723,8330,2250,3663,4985,3514,6655,1187,8077,305,6444,23,7078,4764,8856,8865,7992,9142,6727,1650,8488,9431,2992,3555,6913,9835,4232,3093,5227,8933,8184,114,564,5888,5453,6168,3832,9803].map(e.E)}),5),e.O(0,[4821,6179,2245,5708,5993,5515,787,2844,3920,6247,466,1778,656,6263,7210,3100,9946,3432,4770,8894,7877,6483,7949,2452,6138,7027,1486,2130,6720,9679,8882,5818,3606,9921,172,9324,7671,5454,7056,5295,856,6041,4247,9140,8545,2583,5790,7805,1468,868,9339,40,5146,8376,4128,7915,4620,1188,1992,9002,5811,3101,8388,1845,5240,228,6565,869,5701,3373,8471,2625,2572,5535,8942,8995,1289,1581,2733,2343,5060,8393,8573,9081,2024,9435,126,9264,3156,7478,6807,3521,2556,4941,5267,9758,9965,618,1958,7135,7515,3107],(function(){return 6508,e(e.s=6508)})),e.O()}]);
//# sourceMappingURL=main.f48f46136c7381edb61a.js.map