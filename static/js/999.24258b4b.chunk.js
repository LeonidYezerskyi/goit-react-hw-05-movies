"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[999],{999:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(861),a=n(885),u=n(757),c=n.n(u),i=n(639),o=n(791),s=n(731),p="SearchForm_formSection__dog72",f="SearchForm_input__HOxJo",v="SearchForm_button__UXY06",l=n(184),d=function(e){var t=e.onSelectName,n=void 0===t?function(){}:t,r=(0,o.useState)(""),u=(0,a.Z)(r,2),c=u[0],i=u[1],d=(0,s.lr)(),h=(0,a.Z)(d,2),m=(h[0],h[1]),g=function(){i("")};return(0,l.jsx)("div",{className:p,children:(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(c),m({query:c}),g()},children:[(0,l.jsx)("input",{className:f,type:"text",name:"name",value:c,placeholder:"Enter name to find the movie",onChange:function(e){var t=e.target.value.trim();i(t)},required:!0}),(0,l.jsx)("button",{className:v,type:"submit",children:"Search"})]})})},h=n(739),m=n(390),g="MoviesPage_moviesList__RPIho",_="MoviesPage_titleMovie__PvyjT",x=function(){var e,t=(0,o.useState)(""),n=(0,a.Z)(t,2),u=n[0],p=n[1],f=(0,o.useState)(null),v=(0,a.Z)(f,2),x=v[0],b=v[1],Z=(0,o.useState)(!1),y=(0,a.Z)(Z,2),w=y[0],k=y[1],S=(0,o.useState)(""),j=(0,a.Z)(S,2),N=j[0],P=j[1],q=(0,h.TH)(),B=(0,s.lr)(),H=null!==(e=(0,a.Z)(B,1)[0].get("query"))&&void 0!==e?e:"";H&&!u&&p(H),(0,o.useEffect)((function(){if(u){var e=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,(0,m.gH)(t);case 4:n=e.sent,r=n.results,b(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),P(e.t0.message);case 12:return e.prev=12,k(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();e(u)}}),[u]);return(0,l.jsxs)("div",{className:g,children:[(0,l.jsx)(d,{onSelectName:function(e){p(e),b([])}}),N.length>0&&(0,l.jsxs)("p",{children:["Upss, Some error occured... ",N]}),w&&(0,l.jsx)(i.Z,{}),(0,l.jsx)("ul",{children:Boolean(null===x||void 0===x?void 0:x.length)&&x.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(s.rU,{to:"/movies/".concat(e.id),state:{from:q},children:(0,l.jsx)("h2",{className:_,children:e.title})})},e.id)}))})]})}},390:function(e,t,n){n.d(t,{Df:function(){return i},TP:function(){return o},gH:function(){return f},tx:function(){return p},zv:function(){return s}});var r=n(861),a=n(757),u=n.n(a),c=n(388),i=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=0b64762ebc7274a2812ac6387d535224");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(){var t,n,r,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=0b64762ebc7274a2812ac6387d535224&language=en-GB"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(){var t,n,r,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=0b64762ebc7274a2812ac6387d535224&language=en-GB"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(){var t,n,r,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=0b64762ebc7274a2812ac6387d535224&language=en-GB&page=1"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(){var t,n,r,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=0b64762ebc7274a2812ac6387d535224&language=en-US&page=1&include_adult=false"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=999.24258b4b.chunk.js.map