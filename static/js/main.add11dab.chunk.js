(this["webpackJsonpreact-express-app"]=this["webpackJsonpreact-express-app"]||[]).push([[0],{11:function(e,t,s){},13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(4),r=s.n(a),i=(s(11),s(3)),o=s.n(i),l=s(5),d=s(6),j=(s(13),s(0)),u=function(e){var t=e.employee;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsxs)("div",{className:"card-header d-flex flex-row-reverse",children:[Object(j.jsx)("i",{class:"fas fa-user-edit fs-5 text-success"}),Object(j.jsx)("i",{class:"fas fa-trash fs-5 px-3 text-danger"})]}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:t.name}),Object(j.jsxs)("p",{className:"card-text",children:[" ",t.position," "]})]})]})},h=function(e){var t=e.employees;return Object(j.jsx)("div",{className:"container my-2",children:t.length<=0?Object(j.jsx)("h3",{className:"text-muted",children:" You don't have employees, Hire some  "}):Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{className:"text-muted",children:" Our Employees"}),t.map((function(e){return Object(j.jsx)("div",{className:"col-md-4 my-2",children:Object(j.jsx)(u,{employee:e})},e.id)}))]})})};var m=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),s=t[0],n=t[1];Object(c.useEffect)((function(){a()}),[]);var a=function(){var e=Object(l.a)(o.a.mark((function e(){var t,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:2900/api/employees",{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,console.log("Data:"+s.length),n(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"container my-5",children:Object(j.jsx)(h,{employees:s})})},x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.add11dab.chunk.js.map