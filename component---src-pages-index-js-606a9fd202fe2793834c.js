(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[678],{7198:function(e,t,a){"use strict";var n=a(7294),r=a(5444);t.Z=function(e){e.pageTitle;var t=e.children,a=((0,r.K2)("3000541721"),new URLSearchParams(window.location.search).get("param")||""),c=(0,n.useState)(a),l=c[0],o=c[1];return n.createElement("main",null,n.createElement("div",{id:"header"},n.createElement("div",{className:"toolbar-inside"},n.createElement("div",{className:"header-container"},n.createElement("div",{className:"header-container-left"},n.createElement("div",{className:"toolbar-logo toolbar-subMenu-box header-fl"},n.createElement(r.rU,{to:"/"},n.createElement("img",{width:"24px",height:"24px",title:"shortpage",src:"https://trangianhuan.github.io/icon/awesome-icons/svg/user-shape.svg"})))),n.createElement("div",{className:"header-container-middle"},n.createElement("div",{className:"toolbar-search onlySearch"},n.createElement("div",{className:"toolbar-search-container"},n.createElement("input",{id:"toolbar-search-input",autoComplete:"off",type:"text",placeholder:"search",value:l,onChange:function(e){o(e.target.value),console.log(l,e.target.value)}}),n.createElement("button",{id:"toolbar-search-button",onClick:function(){fetch("https://jsonplaceholder.typicode.com/todos?userId="+l).then((function(e){return e.json()})).then((function(e){(0,r.c4)("/search?param="+l,{state:{data:e}})}))}})))),n.createElement("div",{className:"header-container-right"},n.createElement("div",{className:"toolbar-btns onlyUser"}))))),n.createElement("div",{className:"container"},t))}},7704:function(e,t,a){"use strict";a.r(t);var n=a(7294),r=a(7198);t.default=function(e){var t=e.data.allPost.edges;return n.createElement(r.Z,{pageTitle:"Home Page"},t.map((function(e,t){return n.createElement("div",{key:t},n.createElement("p",null,e.node.title))})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-606a9fd202fe2793834c.js.map