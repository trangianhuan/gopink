(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[678],{9465:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(18),a=n(7294),c=n(7198),s=n(3552),o=n(5444),u=(a.Component,a.Component,n(3004)),l=function(e){var t=e.data.allPost.edges,n=t,s=[];n.forEach((function(e){try{s=[].concat((0,r.Z)(s),(0,r.Z)(e.node.tags))}catch(t){console.log("error",t)}})),s=s.filter((function(e,t,n){return n.findIndex((function(t){return t.slug===e.slug}))===t}));var l=(0,a.useState)((0,r.Z)(n.slice(0,5))),i=l[0],f=l[1],g=(0,a.useState)(!1),m=g[0],h=g[1],d=(0,a.useState)(n.length>5),v=d[0],E=d[1],p=(0,a.useRef)(),b=function(e){e[0].isIntersecting&&h(!0)};return(0,a.useEffect)((function(){var e=new IntersectionObserver(b,{root:null,rootMargin:"20px",threshold:1});p.current&&e.observe(p.current)}),[]),(0,a.useEffect)((function(){if(m&&v){var e=i.length,t=e<n.length?n.slice(e,e+5):[];f([].concat((0,r.Z)(i),(0,r.Z)(t))),h(!1)}}),[m,v]),(0,a.useEffect)((function(){var e=i.length<n.length;E(e)}),[i]),a.createElement(c.Z,{pageTitle:"Home Page"},a.createElement(u.Z,null),a.createElement("div",{className:"m-auto main"},a.createElement("div",{className:"bg-white my-2 p-4"},a.createElement(o.rU,{to:"/game/tmc"},"Game TMC"))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-685af97e7c12a0231961.js.map