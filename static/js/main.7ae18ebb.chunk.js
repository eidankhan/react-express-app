(this["webpackJsonpreact-express-app"]=this["webpackJsonpreact-express-app"]||[]).push([[0],{11:function(e,a,t){},13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t.n(n),c=t(4),r=t.n(c),l=(t(11),t(3)),i=t.n(l),o=t(5),d=t(6),j=(t(13),t(0)),b=function(e){var a=e.employee;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsxs)("div",{className:"card-header d-flex flex-row-reverse",children:[Object(j.jsx)("i",{class:"fas fa-user-edit fs-5 text-success"}),Object(j.jsx)("i",{class:"fas fa-trash fs-5 px-3 text-danger"})]}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:a.name}),Object(j.jsxs)("p",{className:"card-text",children:[" ",a.position," "]})]})]})},u=function(e){var a=e.employees;return Object(j.jsx)("div",{className:"container my-2",children:a.length<=0?Object(j.jsx)("h3",{className:"text-muted",children:" You don't have employees, Hire some  "}):Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{className:"text-muted",children:" Our Employees"}),a.map((function(e){return Object(j.jsx)("div",{className:"col-md-4 my-2",children:Object(j.jsx)(b,{employee:e})},e.id)}))]})})},m=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"/",children:"CRUD APP|"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(j.jsxs)("li",{className:"nav-item",children:[" ",Object(j.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:" Home"})]})})})]})})})};var p=function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],s=a[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){var e=Object(o.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:2900/api/employees",{method:"GET"});case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,console.log("Data:"+t.length),s(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{}),Object(j.jsx)(u,{employees:t})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.7ae18ebb.chunk.js.map