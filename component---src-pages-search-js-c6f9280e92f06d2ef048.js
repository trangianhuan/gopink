(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[996],{7198:function(e,t,a){"use strict";var n=a(7294),r=a(5444);t.Z=function(e){e.pageTitle;var t=e.children,a=((0,r.K2)("3000541721"),new URLSearchParams(window.location.search).get("param")||""),o=(0,n.useState)(a),c=o[0],s=o[1];return n.createElement("main",null,n.createElement("div",{id:"header"},n.createElement("div",{className:"toolbar-inside"},n.createElement("div",{className:"header-container"},n.createElement("div",{className:"header-container-left"},n.createElement("div",{className:"toolbar-logo toolbar-subMenu-box header-fl"},n.createElement(r.rU,{to:"/"},n.createElement("img",{width:"24px",height:"24px",title:"shortpage",src:"https://trangianhuan.github.io/icon/awesome-icons/svg/user-shape.svg"})))),n.createElement("div",{className:"header-container-middle"},n.createElement("div",{className:"toolbar-search onlySearch"},n.createElement("div",{className:"toolbar-search-container"},n.createElement("input",{id:"toolbar-search-input",autoComplete:"off",type:"text",placeholder:"search",value:c,onChange:function(e){s(e.target.value),console.log(c,e.target.value)}}),n.createElement("button",{id:"toolbar-search-button",onClick:function(){fetch("https://jsonplaceholder.typicode.com/todos?userId="+c).then((function(e){return e.json()})).then((function(e){(0,r.c4)("/search?param="+c,{state:{data:e}})}))}})))),n.createElement("div",{className:"header-container-right"},n.createElement("div",{className:"toolbar-btns onlyUser"}))))),n.createElement("div",{className:"container"},t))}},5068:function(e,t,a){"use strict";a.r(t);var n=a(7294),r=a(7198);a(5444);t.default=function(e){console.log(e);var t=new URLSearchParams(e.location.search),a=(0,n.useState)([]),o=(a[0],a[1]),c=(0,n.useState)(""),s=c[0],l=c[1];return console.log(s,t.get("param")),(0,n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/todos?userId="+s).then((function(e){return e.json()})).then((function(e){console.log(e),o(e),l(t.get("param"))}))}),[]),n.createElement(r.Z,{pageTitle:"Blogs "},"search page")}}}]);
//# sourceMappingURL=component---src-pages-search-js-c6f9280e92f06d2ef048.js.map