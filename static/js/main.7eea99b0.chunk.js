(this["webpackJsonplive-stocks-api"]=this["webpackJsonplive-stocks-api"]||[]).push([[0],{10:function(e,s,c){},13:function(e,s,c){"use strict";c.r(s);var t=c(1),l=c.n(t),a=c(4),n=c.n(a),r=(c(9),c(10),c(2)),i=c(0);var o=function(){return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("h1",{children:"Live Stocks API Data"})})};var d=function(){return Object(i.jsxs)("div",{children:["See these other projects:\xa0",Object(i.jsx)("a",{className:"project-links",rel:"noopener",href:"https://egertonk.github.io/react-wise-spender/",children:"React-Wise-Spender"}),"\xa0 ",Object(i.jsx)("a",{className:"project-links",rel:"noopener",href:"https://egertonk.github.io/react-todo-list/",children:"React-Todo-List"}),"\xa0 ",Object(i.jsx)("a",{className:"project-links",rel:"noopener",href:"http://mason.gmu.edu/~eduring/IT331_PROJECT/index.html",children:"Front End Project"}),"\xa0 ",Object(i.jsx)("a",{className:"project-links",rel:"noopener",href:"http://mason.gmu.edu/~eduring/bangladesh/Home.html",children:"Bangladesh Web Project"}),"\xa0 ",Object(i.jsx)("a",{className:"project-links",rel:"noopener",href:"https://egertonk.github.io/react-api-news/",children:"react-api-news"})]})};var j=function(){return Object(i.jsxs)("footer",{className:"App-footer",children:["App Provided By Egerton...",Object(i.jsx)(d,{})]})};c(12);var h=function(){var e=Object(t.useState)(null),s=Object(r.a)(e,2),c=s[0],l=s[1],a=Object(t.useState)(null),n=Object(r.a)(a,2),d=n[0],h=n[1],m=Object(t.useState)(!1),b=Object(r.a)(m,2),O=(b[0],b[1]),v=[],x="https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=zPejacn6XxwRcHAahnN3uhRoZw3mwoCCb5p4SHQf",u=(new Request(x),{});if(Object(t.useEffect)((function(){fetch(x,{method:"GET",mode:"cors",headers:u}).then((function(e){return e.json()})).then((function(e){l(e),O(!0)}),(function(e){O(!0),h(e)}))}),[]),d)return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"media",children:[Object(i.jsx)("img",{className:"align-self-start mr-3",style:{backgroundColor:"#02898a"}}),Object(i.jsx)("div",{className:"media-body",children:c.message})]})});for(var p in c){var N=c[p];for(var g in N)void 0!==N[g].ticker&&v.push(Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"shadow-lg p-3 mb-5 bg-white rounded",children:[Object(i.jsx)("h3",{className:"mt-0",children:N[g].ticker}),Object(i.jsxs)("div",{class:"row",children:[Object(i.jsxs)("div",{className:"col-sm",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"smallScreens col",children:"Name:"}),Object(i.jsx)("div",{className:"smallScreens bold-it col",children:N[g].name})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"smallScreens col",children:"Current Price:"}),Object(i.jsxs)("div",{className:"smallScreens style-money-one col",children:["$",N[g].price]})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"smallScreens col",children:"Volume Traded:"}),Object(i.jsx)("div",{className:"smallScreens bold-it col",children:N[g].volume})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"smallScreens col",children:"Previous Close Price:"}),Object(i.jsxs)("div",{className:"smallScreens style-money-one col",children:["$",N[g].previous_close_price]})]})]}),Object(i.jsxs)("div",{className:"col-sm",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"smallScreens col",children:"Today's Open:"}),Object(i.jsxs)("div",{className:"smallScreens bold-it col",children:["$",N[g].day_open]})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"smallScreens col",children:"Today's Low:"}),Object(i.jsxs)("div",{className:"smallScreens style-money-two col",children:["$",N[g].day_low]})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"smallScreens col",children:"Today's High:"}),Object(i.jsxs)("div",{className:"smallScreens col style-money-one",children:["$",N[g].day_high]})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"smallScreens col",children:"Today's Change:"}),Object(i.jsxs)("div",{className:"smallScreens col bold-it",children:["$",N[g].day_change]})]})]})]})]})}))}return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(o,{}),v,Object(i.jsx)(j,{})]})};var m=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(h,{})})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(s){var c=s.getCLS,t=s.getFID,l=s.getFCP,a=s.getLCP,n=s.getTTFB;c(e),t(e),l(e),a(e),n(e)}))};n.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),b()},9:function(e,s,c){}},[[13,1,2]]]);
//# sourceMappingURL=main.7eea99b0.chunk.js.map