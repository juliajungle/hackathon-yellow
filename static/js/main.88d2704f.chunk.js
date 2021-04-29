(this["webpackJsonpzherkin-hackathon"]=this["webpackJsonpzherkin-hackathon"]||[]).push([[0],{18:function(e,n,i){},24:function(e,n,i){"use strict";i.r(n);var t,a,r,s,c,o,l,h=i(1),d=i.n(h),j=i(9),p=i.n(j),u=(i(18),i(13)),b=i(2),v=i(3),x=i(0),g=v.a.nav(t||(t=Object(b.a)(["\n  font-size: 16px;\n  border-right: 1px solid lightgrey;\n  display: flex;\n  flex-direction: column;\n  margin-right: 20px;\n  padding: 20px;\n\n  h1 {\n    font-size: 24px;\n    color: #51ddb4;\n    padding: 0;\n    margin: 0 0 20px;\n  }\n\n  ul {\n    color: #1a1a1a;\n    list-style: none;\n    padding: 0;\n    margin: 0 0 20px;\n  }\n\n  li {\n  }\n"]))),O=function(){return Object(x.jsxs)(g,{children:[Object(x.jsx)("h1",{children:"Features"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"Feature 1"}),Object(x.jsx)("li",{children:"Feature 2"})]})]})},f=v.a.div(a||(a=Object(b.a)(["\n  background-color: #f6f7f7;\n  padding: 20px;\n  margin-bottom: 40px;\n"]))),y=(v.a.input(r||(r=Object(b.a)([""]))),v.a.h3(s||(s=Object(b.a)(["\n  margin-top: 0;\n"])))),m=v.a.div(c||(c=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),k=function(e){var n=e.name,i=e.steps;return Object(x.jsxs)(f,{children:[Object(x.jsxs)(m,{children:[" ",Object(x.jsx)(y,{children:n}),Object(x.jsx)("input",{type:"checkbox"})]}),i.map((function(e){return Object(x.jsx)("p",{children:e},e)}))]})},S=v.a.div(o||(o=Object(b.a)(["\n  font-size: 32px;\n  padding: 0;\n  margin: 0;\n  background-color: #51ddb4;\n\n  h3 {\n    position: relative;\n    top: -23px;\n    right: 11px;\n  }\n"]))),D=function(e){var n=e.name,i=e.userStory,t=e.scenarios;return console.log({scenarios:t}),Object(x.jsxs)("div",{children:[Object(x.jsx)(S,{children:Object(x.jsx)("h3",{children:n})}),Object(x.jsx)("p",{children:i}),t.map((function(e){var n=e.scenarioName,i=e.scenarioSteps;return Object(x.jsx)(k,{name:n,steps:i},n)}))]})},N=function(e){var n=e.data,i=n.featureName,t=n.userStory,a=n.scenarios;return Object(x.jsx)("div",{children:Object(x.jsx)(D,{name:i,userStory:t,scenarios:a})})},w=i(4),C=v.a.div(l||(l=Object(b.a)(["\n  position: fixed;\n  top: 20px;\n  right: 20px;\n"])));var F=function(){var e=Object(h.useState)(),n=Object(u.a)(e,2),i=n[0],t=n[1];return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("header",{className:"App-header"}),Object(x.jsxs)(C,{children:[" ",Object(x.jsx)("input",{type:"text",onChange:function(e){t(e.target.value)},value:i}),Object(x.jsxs)("p",{children:["Your search term: ",i]}),Object(x.jsx)("button",{onClick:function(){console.log(w)},children:"Search"})]}),Object(x.jsxs)("div",{className:"App-container",children:[Object(x.jsx)(O,{}),Object(x.jsx)(N,{data:w})]})]})},T=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,25)).then((function(n){var i=n.getCLS,t=n.getFID,a=n.getFCP,r=n.getLCP,s=n.getTTFB;i(e),t(e),a(e),r(e),s(e)}))};p.a.render(Object(x.jsx)(d.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root")),T()},4:function(e){e.exports=JSON.parse('{"featureName":"Delivery link","userStory":"user story...","scenarios":[{"scenarioName":"Scenario: Delivery link is present in navigation","scenarioSteps":["Given a delivery URL has been added to a venue in the CMS","When the venue website is viewed","Then there is a Delivery link on the navigation"]},{"scenarioName":"Scenario: Delivery link opens in a new tab","scenarioSteps":["Given a venue has a Delivery link in the navigation","When the link is selected","Then a new tab is opened","And the Delivery page is shown"]},{"scenarioName":"Scenario: Delivery link is not present if not in the CMS","scenarioSteps":["Given a delivery URL has NOT been added to a venue in the CMS","When the venue website is viewed","Then there is no Delivery link in the navigation"]},{"scenarioName":"Scenario: Delivery link can be toggled off by Brand","scenarioSteps":["Given a venue has a Delivery link in the navigation","When that venue\u2019s Brand has the delivery links toggled off","Then there is no Delivery link in the navigation of that venue"]}]}')}},[[24,1,2]]]);
//# sourceMappingURL=main.88d2704f.chunk.js.map