(this["webpackJsonpmy-movie-app"]=this["webpackJsonpmy-movie-app"]||[]).push([[0],{40:function(e,t,c){},55:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(24),s=c.n(i),r=c(9),j=c(2),o=(c(40),c(25)),l=c(26),b=c(35),d=c(34),h=c(27),u=c(1),m=function(e){Object(b.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)(h.a,{videoId:"W7edvITC9g4",opts:{height:"450",width:"100%",playerVars:{autoplay:!0,loop:!0,playlist:"W7edvITC9g4"}},onReady:this._onReady})})}},{key:"_onReady",value:function(e){e.target.mute()}}]),c}(a.a.Component),O=c(33);c(55);var x=function(e){return Object(u.jsx)("div",{className:"gridCard",children:Object(u.jsx)("a",{href:"#!",children:Object(u.jsx)("img",{src:e.image,alt:e.movieNmae})})})},v=c(30),p=c.n(v),f=(c(73),function(){var e=Object(n.useState)(),t=Object(O.a)(e,2),c=t[0],i=t[1];Object(n.useEffect)((function(){var e="".concat("https://api.themoviedb.org/3/","movie/popular?api_key=").concat("0d41f8e0498a7fd935b57aa31c86611a","&language=ko&page=1");s(e)}),[]);var s=function(e){p.a.get(e).then((function(e){i(e.data.results)})).catch((function(e){console.log(e)}))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"font-white",style:{textAlign:"center"},children:"MovieList"}),Object(u.jsx)("div",{className:"movieList__area",children:c&&c.map((function(e,t){return Object(u.jsx)(a.a.Fragment,{children:Object(u.jsx)(x,{image:"".concat("http://image.tmdb.org/t/p/","w500").concat(e.poster_path),movieId:e.id,movieName:e.title})},t)}))})]})}),g=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{}),Object(u.jsx)(f,{})]})},y=(c(74),function(){return Object(u.jsx)("nav",{className:"container-fluid",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"navbar col-12",children:[Object(u.jsx)("div",{className:"navbar__logo",children:Object(u.jsx)("a",{href:"#!",children:"Wmovie"})}),Object(u.jsxs)("ul",{className:"navbar__menu",children:[Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/movieList",children:"MovieList"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/mypage",children:"MyPage"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/",children:"FAQ"})})]}),Object(u.jsxs)("div",{className:"navbar__icons",children:[Object(u.jsx)("li",{children:Object(u.jsx)("i",{className:"fab fa-github"})}),Object(u.jsx)("li",{children:Object(u.jsx)("i",{className:"fab fa-blogger"})})]}),Object(u.jsx)("button",{className:"navbar__toggleBtn",onClick:function(){var e=document.querySelector(".navbar__menu"),t=document.querySelector(".navbar__icons");e.classList.toggle("active"),t.classList.toggle("active")},children:Object(u.jsx)("i",{})})]})})})}),_=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h2",{className:"font-white",style:{textAlign:"center"},children:"Mypage"})})},N=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"movieDetail!!"})})};var k=function(){return Object(u.jsxs)(r.a,{children:[Object(u.jsx)(y,{}),Object(u.jsx)(j.a,{exact:!0,path:"/",component:g}),Object(u.jsx)(j.a,{path:"/movieList",component:f}),Object(u.jsx)(j.a,{path:"/movieDetail",component:N}),Object(u.jsx)(j.a,{path:"/mypage",component:_})]})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.a053afb5.chunk.js.map