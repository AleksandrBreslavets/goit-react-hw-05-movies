"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[215],{673:function(n,t,e){e.d(t,{F:function(){return s},h:function(){return o}});var r,a,u=e(168),c=e(444),i=e(87),s=c.ZP.li(r||(r=(0,u.Z)(['\n    margin-bottom: 10px;\n    list-style:"\ud83c\udfac";\n']))),o=(0,c.ZP)(i.OL)(a||(a=(0,u.Z)(["\n    text-decoration: none;\n    color:black;\n    font-size: 18px;\n    &:hover,&:active,&:focus{\n        color:red;\n    }\n"])))},436:function(n,t,e){e.d(t,{IQ:function(){return p},JS:function(){return i},Jh:function(){return f},Kd:function(){return s},t2:function(){return o}});var r=e(861),a=e(757),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.headers={Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWY1MTFhNDkyM2NiMzYzZWE1MGQxYmY2NDRkOWQ4MSIsInN1YiI6IjY0OTJjZDUxNDNjZDU0MDBjODFhZjQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3ZoWbX-qb3V6pyGWC-GdfRKa5qk6kiHeWeSt9uswZNE",accept:"application/json"};var i=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?language=en-US");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie",{params:{query:t,include_adult:!1,language:"en-US",page:1}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},215:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r=e(861),a=e(439),u=e(757),c=e.n(u),i=e(436),s=e(791),o=e(286),f=e(673),p=e(184),l="Something went wrong with loading trending films. Try to reload the page!",h=function(){var n=(0,s.useState)([]),t=(0,a.Z)(n,2),e=t[0],u=t[1],h=(0,s.useState)(null),d=(0,a.Z)(h,2),v=d[0],Z=d[1],g=(0,s.useState)(!1),x=(0,a.Z)(g,2),m=x[0],w=x[1],b=(0,s.useState)(!1),y=(0,a.Z)(b,2),k=y[0],j=y[1];return(0,s.useEffect)((function(){function n(){return(n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(null),w(!1),j(!0),n.next=6,(0,i.JS)();case 6:if(t=n.sent){n.next=10;break}return w(!0),n.abrupt("return");case 10:u(t),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),Z(l);case 16:return n.prev=16,j(!1),n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[0,13,16,19]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,p.jsxs)("div",{children:[v&&(0,p.jsx)("p",{children:v}),!m&&(0,p.jsx)("ul",{children:e.map((function(n){var t=n.title,e=n.id;return(0,p.jsx)(f.F,{children:(0,p.jsx)(f.h,{to:"movies/".concat(e),children:t})},e)}))}),m&&(0,p.jsx)("p",{children:"There is not any information about trending films..."}),k&&(0,p.jsx)(o.a,{})]})},d=function(){return(0,p.jsx)(h,{})}}}]);
//# sourceMappingURL=215.116d6212.chunk.js.map