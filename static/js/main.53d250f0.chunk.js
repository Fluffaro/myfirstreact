(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{29:function(e,t,n){},31:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(19),s=n.n(r),l=(n(29),n(0)),o=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{class:"container-fluid",children:[Object(l.jsx)("a",{class:"navbar-brand",href:"#",children:"ICS2608"}),Object(l.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(l.jsxs)("div",{class:"navbar-nav",children:[Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact",children:"Home"}),Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/employees",children:"Employees"}),Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/add",children:"Add employee"}),Object(l.jsx)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})]})})]})})})},i=n(6),d=n(2),j=(n.p,n(31),n(20)),b=n(21),m=n(24),h=n(23),u=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:this.addCounter,children:"Click to pick meredith"}),Object(l.jsxs)("p",{children:["Meredith has been chosen ",this.state.count," times"]})]})}}]),n}(a.a.Component),p=n(3),O=n(22),f=n.n(O).a.create({baseURL:"http://localhost:8080",headers:{"Content-Type":"application/json"}}),x=function(){return f.get("/employees")},v=function(e){return f.post("/employees",e)},y=function(e){return f.put("/employees",e)},g=function(e){return f.get("/employees/".concat(e))},N=function(e){return f.delete("/employees/".concat(e))},k=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){r()}));var r=function(){x().then((function(e){a(e.data)})).catch((function(){console.log("got an error!")}))};return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"List of Employees "}),Object(l.jsx)("div",{className:"container ",children:Object(l.jsxs)("table",{className:"table table-hover table-light table-striped",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{class:"table-danger",children:[Object(l.jsx)("td",{children:"Name"}),Object(l.jsx)("td",{children:"Location"}),Object(l.jsx)("td",{children:"Department"}),Object(l.jsx)("td",{children:"Action"})]})}),Object(l.jsx)("tbody",{children:n.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.department}),Object(l.jsx)("td",{children:e.location}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"d-grid gap-2 d-md-flex justify-content-center",children:[Object(l.jsx)(i.b,{className:"btn btn-outline-primary",to:"/myfirstreact/edit/".concat(e.employeeId),children:"Update"}),Object(l.jsx)("button",{className:"btn btn-outline-danger",onClick:function(t){return n=e.employeeId,void N(n).then((function(e){console.log("successfully deleted!"),r()})).catch((function(e){console.error("got an errorE!",e)}));var n},children:"Delete"})]})})]},e.employeeId)}))})]})})]})},C=n.p+"static/media/gif.65537372.gif";var w=function(){return Object(l.jsx)("div",{className:"Home",children:Object(l.jsxs)("header",{className:"App-header",style:{backgroundImage:"url("+C+")",backgroundSize:"cover"},children:[Object(l.jsx)("p",{children:"Neil Joey Villarey"}),Object(l.jsx)(u,{}),Object(l.jsx)("a",{className:"App-link",href:"https://www.netflix.com/browse?jbv=70140391",target:"_blank",rel:"noopener noreferrer",children:"click me to watch grey's anatomy"})]})})},A=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"page not found!"})})},I=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(p.a)(r,2),o=s[0],i=s[1],j=Object(c.useState)(""),b=Object(p.a)(j,2),m=b[0],h=b[1],u=Object(d.f)(),O=Object(d.g)().employeeId;return Object(c.useEffect)((function(){O&&g(O).then((function(e){a(e.data.name),i(e.data.location),h(e.data.department),console.log(e.data.name),console.log(e.data.location),console.log(e.data.department)})).catch((function(e){console.error("error!",e)}))}),[]),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"Add Employee"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"name",className:"form-label",children:"Name"}),Object(l.jsx)("input",{type:"text",className:"form-control",value:n,id:"name",placeholder:"Add Employee name",onChange:function(e){a(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"location",className:"form-label",children:"Location"}),Object(l.jsx)("input",{type:"text",className:"form-control",value:o,id:"location",placeholder:"Add location",onChange:function(e){i(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"department",className:"form-label",children:"Department"}),Object(l.jsx)("input",{type:"text",className:"form-control",value:m,id:"department",placeholder:"Add Employee department",onChange:function(e){h(e.target.value)}})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault(),O?y({employeeId:O,name:n,location:o,department:m}).then((function(e){console.log("updated employee",e.data),u("/myfirstreact/employees")})).catch((function(e){console.error("something went wrong!")})):v({name:n,location:o,department:m}).then((function(e){console.log("added new employee",e.data),u("/myfirstreact/employees")})).catch((function(e){console.error("something went wrong!")}))}(e)},children:"Save"})]})]})},S=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{children:Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{exact:!0,path:"/myfirstreact/",element:Object(l.jsx)(w,{})}),Object(l.jsx)(d.a,{exact:!0,path:"/myfirstreact/employees",element:Object(l.jsx)(k,{})}),Object(l.jsx)(d.a,{exact:!0,path:"/myfirstreact/add",element:Object(l.jsx)(I,{})}),Object(l.jsx)(d.a,{exact:!0,path:"/myfirstreact/employees/edit/:employeeId",element:Object(l.jsx)(I,{})}),Object(l.jsx)(d.a,{exact:!0,path:"*",element:Object(l.jsx)(A,{})})]})})})};var E=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(S,{})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(50);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(E,{})}),document.getElementById("root")),F()}},[[51,1,2]]]);
//# sourceMappingURL=main.53d250f0.chunk.js.map