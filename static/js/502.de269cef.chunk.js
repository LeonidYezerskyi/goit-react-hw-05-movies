"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[502],{502:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(791),a=n(861),i=n(885),c=n(757),u=n.n(c),o=n(390);var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=(0,r.useState)(e),n=(0,i.Z)(t,2),c=n[0],s=n[1],p=(0,r.useState)(!1),v=(0,i.Z)(p,2),d=v[0],f=v[1],h=(0,r.useState)(""),l=(0,i.Z)(h,2),g=l[0],m=l[1],b=function(){var e=(0,a.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!0),e.next=4,(0,o.Df)();case 4:t=e.sent,n=t.results,s(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),m(e.t0.message);case 12:return e.prev=12,f(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return{movies:c,error:g,isLoadingMovies:d,fetchTrendingMovies:b}},p=n(639),v=n(731),d="HomePage_moviesList__8MbkQ",f="HomePage_titleMovie__d1k-5",h="HomePage_notification__W8XdD",l=n(184),g=function(){var e=s([]),t=e.movies,n=e.error,a=e.isLoadingMovies,i=e.fetchTrendingMovies;return(0,r.useEffect)((function(){i()}),[]),(0,l.jsxs)("div",{className:d,children:[(0,l.jsx)("h1",{children:"Trending today"}),n.length>0&&(0,l.jsxs)("p",{className:h,children:["Upss, Some error occured... ",n]}),a&&(0,l.jsx)(p.Z,{}),(0,l.jsx)("ul",{children:Boolean(null===t||void 0===t?void 0:t.length)&&t.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(v.rU,{to:"/movies/".concat(e.id),children:(0,l.jsx)("h2",{className:f,children:e.title})})},e.id)}))})]})}},390:function(e,t,n){n.d(t,{Df:function(){return u},TP:function(){return o},gH:function(){return v},tx:function(){return p},zv:function(){return s}});var r=n(861),a=n(757),i=n.n(a),c=n(388),u=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=0b64762ebc7274a2812ac6387d535224");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(){var t,n,r,a=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=0b64762ebc7274a2812ac6387d535224&language=en-GB"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(i().mark((function e(){var t,n,r,a=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=0b64762ebc7274a2812ac6387d535224&language=en-GB"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(){var t,n,r,a=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=0b64762ebc7274a2812ac6387d535224&language=en-GB&page=1"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(){var t,n,r,a=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=0b64762ebc7274a2812ac6387d535224&language=en-US&page=1&include_adult=false"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=502.de269cef.chunk.js.map