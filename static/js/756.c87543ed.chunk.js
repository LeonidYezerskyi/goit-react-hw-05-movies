"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[756],{756:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(861),a=r(885),s=r(757),i=r.n(s),c=r(791),o=r(731),u=r(739),d=r(639),l={movieInfo:"MovieDetails_movieInfo__4EKMk",description:"MovieDetails_description__33mrB",button:"MovieDetails_button__uXZxd",titleMovie:"MovieDetails_titleMovie__EIK-c",scoreInfo:"MovieDetails_scoreInfo__Pik3p",scoreNumber:"MovieDetails_scoreNumber__sHOC2",overviewText:"MovieDetails_overviewText__K3-MM",genresList:"MovieDetails_genresList__2o809",addTitle:"MovieDetails_addTitle__x5dSC",addLinks:"MovieDetails_addLinks__lp1W+",errorText:"MovieDetails_errorText__kouLd"},v=r(390);var p=r.p+"static/media/arrow.aab4f4cb76b5866cac53aba872eaf928.svg",h=r(184),f=function(){var e,t,s=(0,u.UO)().movieId,f=(0,u.TH)(),m=(0,u.s0)(),x=(0,c.useState)(null),_=(0,a.Z)(x,2),g=_[0],b=_[1],j=(0,c.useState)(!1),w=(0,a.Z)(j,2),k=w[0],M=w[1],Z=(0,c.useState)(""),y=(0,a.Z)(Z,2),N=y[0],D=y[1];(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,M(!0),e.next=4,(0,v.TP)(t);case 4:r=e.sent,b(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),D(e.t0.message);case 11:return e.prev=11,M(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();e(s)}),[s]);var T=(0,c.lazy)((function(){return r.e(106).then(r.bind(r,106))})),I=(0,c.lazy)((function(){return r.e(702).then(r.bind(r,702))}));return(0,h.jsxs)("div",{className:l.movieInfo,children:[k&&(0,h.jsx)(d.Z,{}),N.length>0&&(0,h.jsxs)("p",{className:l.errorText,children:["Upss, Some error occured... ",N]}),g&&(0,h.jsxs)("section",{children:[(0,h.jsxs)("button",{className:l.button,onClick:function(){f.state?m(f.state.from):m("/")},children:[(0,h.jsx)("img",{src:p,alt:"arrow",width:"15"}),"Go back"]}),(0,h.jsxs)("div",{className:l.description,children:[(0,h.jsx)("img",{src:g.poster_path?"https://image.tmdb.org/t/p/w500".concat(g.poster_path):"",width:"300",alt:"movie moment"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{className:l.titleMovie,children:g.title}),(0,h.jsxs)("p",{className:l.scoreInfo,children:["User score: ",(0,h.jsxs)("span",{className:l.scoreNumber,children:[parseInt(10*g.vote_average),"%"]})]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("span",{className:l.overviewText,children:g.overview}),(0,h.jsx)("h4",{children:"Genres"}),(0,h.jsx)("span",{className:l.genresList,children:(null===g||void 0===g?void 0:g.genres)&&g.genres.map((function(e){var t=e.id,r=e.name;return(0,h.jsx)("li",{children:r},t)}))})]})]}),(0,h.jsxs)("div",{className:l.addInfo,children:[(0,h.jsx)("h5",{className:l.addTitle,children:"Additional information"}),(0,h.jsxs)("div",{className:l.addLinks,children:[(0,h.jsx)(o.rU,{to:"cast",state:{from:null===(e=f.state)||void 0===e?void 0:e.from},children:(0,h.jsx)("p",{children:"Cast"})}),(0,h.jsx)(o.rU,{to:"reviews",state:{from:null===(t=f.state)||void 0===t?void 0:t.from},children:(0,h.jsx)("p",{children:"Reviews"})})]})]}),(0,h.jsx)(c.Suspense,{children:(0,h.jsxs)(u.Z5,{children:[(0,h.jsx)(u.AW,{path:"cast",element:(0,h.jsx)(T,{})}),(0,h.jsx)(u.AW,{path:"reviews",element:(0,h.jsx)(I,{})})]})})]})]})}},390:function(e,t,r){r.d(t,{Df:function(){return c},TP:function(){return o},gH:function(){return l},tx:function(){return d},zv:function(){return u}});var n=r(861),a=r(757),s=r.n(a),i=r(388),c=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=0b64762ebc7274a2812ac6387d535224");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(){var t,r,n,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=0b64762ebc7274a2812ac6387d535224&language=en-GB"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(){var t,r,n,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=0b64762ebc7274a2812ac6387d535224&language=en-GB"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(){var t,r,n,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=0b64762ebc7274a2812ac6387d535224&language=en-GB&page=1"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(){var t,r,n,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,i.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=0b64762ebc7274a2812ac6387d535224&language=en-US&page=1&include_adult=false"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=756.c87543ed.chunk.js.map