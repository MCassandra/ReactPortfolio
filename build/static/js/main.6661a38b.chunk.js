(this["webpackJsonpreact-playground"]=this["webpackJsonpreact-playground"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(4),s=n.n(a),i=(n(9),n(0));var r=function(){return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("h1",{children:"Maria Cassandra Gugol"})})},o=(n(11),{foot:{background:"#f9b713",position:"fixed",bottom:0,width:"100%"}});var l=function(){return Object(i.jsxs)("div",{style:o.foot,children:[Object(i.jsxs)("a",{href:"www.linkedin.com/in/maria-cassandra-gugol",children:[" ",Object(i.jsx)("i",{class:"fa fa-linkedin-square fa-4x"})]}),Object(i.jsx)("a",{href:"https://github.com/MCassandra",children:Object(i.jsx)("i",{class:"fa fa-github fa-4x"})}),Object(i.jsx)("a",{href:"mcmgugol@gmail.com",children:Object(i.jsx)("i",{class:"fa fa-google-plus fa-4x"})})]})},j=n(2);var d=function(e){var t=e.currentPage,n=e.handlePageChange;return Object(i.jsxs)("ul",{className:"nav nav-tabs",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{href:"#AboutMe",onClick:function(){return n("AboutMe")},className:"AboutMe"===t?"nav-link active":"nav-link",children:"About Me"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{href:"#resume",onClick:function(){return n("Resume")},className:"Resume"===t?"nav-link active":"nav-link",children:"Resume"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{href:"#portfolio",onClick:function(){return n("Portfolio")},className:"Portfolio"===t?"nav-link active":"nav-link",children:"Portfolio"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{href:"#contact",onClick:function(){return n("Contact")},className:"Contact"===t?"nav-link active":"nav-link",children:"Contact"})})]})},u=n.p+"static/media/IMG_1183.41581253.jpeg";function b(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Hello, There!"}),Object(i.jsx)("p",{children:Object(i.jsx)("img",{src:u,alt:"headshot",width:"300",height:"300"})}),Object(i.jsx)("p",{children:"I am a scientist transitioning my career into web developement. I have worked with animals for over 10 years."}),Object(i.jsx)("p",{children:"I have been learning to code for the past 5 months with UC Irvine's Full Stack Flex Developement bootcamp. This journey has been wild! Web Developement has opened so many curiosities for me, and I can't wait to explore them. My dream would be using my coding skills to bridge my love for animals and science to this exciting world of web development."})]})}function h(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Resume Page"}),Object(i.jsx)("p",{children:Object(i.jsx)("a",{href:"../assets/MGcodeResume.pdf",children:"Resume"})})]})}function m(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(i.jsx)("img",{className:"card-img-top",src:"http://placecorgi.com/".concat((100*Math.random()+200).toString().split(".")[0]),alt:"Card cap"}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h5",{className:"card-title",children:e.name}),Object(i.jsx)("p",{className:"card-text",children:e.description}),Object(i.jsxs)("a",{href:"#",className:"btn btn-primary",children:["Adopt ",e.name]})]})]})})}var x=[{id:1,name:"Project1",description:"pint and pixels"},{id:2,name:"Project2",description:"Prestige World Wide"},{id:3,name:"Project3",description:"A Wheel Good Time"}];function O(){return Object(i.jsx)("div",{children:x.map((function(e){return Object(i.jsx)(m,{name:e.name,description:e.description},e.id)}))})}function f(e){e.projects;return Object(i.jsx)(O,{})}n(12);var p=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(j.a)(s,2),o=r[0],l=r[1],d=Object(c.useState)(""),u=Object(j.a)(d,2),b=u[0],h=u[1],m=Object(c.useState)(""),x=Object(j.a)(m,2),O=x[0],f=x[1],p=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?a(c):"userName"===n?l(c):h(c)};return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["Hello ",o]}),Object(i.jsxs)("form",{className:"form",children:[Object(i.jsx)("input",{value:n,name:"email",onChange:p,type:"email",placeholder:"email"}),Object(i.jsx)("input",{value:o,name:"userName",onChange:p,type:"text",placeholder:"username"}),Object(i.jsx)("input",{value:b,name:"password",onChange:p,type:"password",placeholder:"Password"}),Object(i.jsx)("button",{type:"button",onClick:function(e){(e.preventDefault(),function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(n)&&o)?b.match(/^[A-Za-z]\w{7,14}$/)?(alert("Hello ".concat(o)),l(""),h(""),a("")):f("Choose a more secure password for the account: ".concat(o)):f("Email or username is invalid")},children:"Submit"})]}),O&&Object(i.jsx)("div",{children:Object(i.jsx)("p",{className:"error-text",children:O})})]})};function v(){return Object(i.jsx)(p,{})}function g(){var e=Object(c.useState)("AboutMe"),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(d,{currentPage:n,handlePageChange:function(e){return a(e)}}),"AboutMe"===n?Object(i.jsx)(b,{}):"Resume"===n?Object(i.jsx)(h,{}):"Portfolio"===n?Object(i.jsx)(f,{}):Object(i.jsx)(v,{})]})}var w=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(r,{}),Object(i.jsx)(g,{}),Object(i.jsx)(l,{})]})};n(13);s.a.render(Object(i.jsx)(w,{}),document.getElementById("root"))},9:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.6661a38b.chunk.js.map