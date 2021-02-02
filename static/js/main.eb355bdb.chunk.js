(this.webpackJsonpcustomer_records=this.webpackJsonpcustomer_records||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var c=r(0),a=r(1),s=r.n(a),n=r(3),d=r.n(n),i=(r(14),r(4)),l=r(5),o=r(6),h=r(8),j=r(7);r(15),r(16);var m=function(e){return Object(c.jsx)("div",{className:"header-item",children:Object(c.jsxs)("form",{children:[Object(c.jsx)("label",{for:"filter",children:"filter by"}),Object(c.jsx)("input",{type:"text",id:"filter",name:"filter",placeholder:"filter by gender or payment method",value:e.state.value,onChange:e.handleChange})]})})};r(17);var u=function(e){return Object(c.jsx)("div",{className:"header-item",children:Object(c.jsxs)("form",{children:[Object(c.jsx)("label",{for:"search",children:"Search"}),Object(c.jsx)("input",{type:"text",id:"search",name:"search",placeholder:"search",value:e.state.value,onChange:e.handleChange})]})})};r(18);var b=function(e){return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("h3",{children:"Customer Records"}),Object(c.jsx)(m,{handleChange:e.handleChange,state:e.state}),Object(c.jsx)(u,{handleChange:e.handleChange,state:e.state,handleSearch:e.handleSearch})]})};r(19);var O=function(e){var t=e.records;return e.loading?Object(c.jsx)("h2",{children:"Loading..."}):Object(c.jsxs)("table",{className:"records",cellPadding:0,cellSpacing:0,children:[Object(c.jsx)("thead",{className:"records-container",children:Object(c.jsxs)("tr",{className:"records-header",children:[Object(c.jsx)("td",{className:"records-header-item",children:"First Name"}),Object(c.jsx)("td",{className:"records-header-item",children:"Last Name"}),Object(c.jsx)("td",{className:"records-header-item",children:"Gender"}),Object(c.jsx)("td",{className:"records-header-item",children:"Latitude"}),Object(c.jsx)("td",{className:"records-header-item",children:"Longitude"}),Object(c.jsx)("td",{className:"records-header-item",children:"Credit Card No."}),Object(c.jsx)("td",{className:"records-header-item",children:"Card Type"}),Object(c.jsx)("td",{className:"records-header-item",children:"Email"}),Object(c.jsx)("td",{className:"records-header-item",children:"Domain Name"}),Object(c.jsx)("td",{className:"records-header-item",children:"Telephone"}),Object(c.jsx)("td",{className:"records-header-item",children:"MacAddress"}),Object(c.jsx)("td",{className:"records-header-item",children:"URL"}),Object(c.jsx)("td",{className:"records-header-item",children:"Username"}),Object(c.jsx)("td",{className:"records-header-item",children:"Last Login"}),Object(c.jsx)("td",{className:"records-header-item",children:"Payment Method"})]})}),Object(c.jsx)("tbody",{children:t.map((function(e,t){return Object(c.jsxs)("tr",{className:"records-body",children:[Object(c.jsx)("td",{className:"record-item",children:e.FirstName}),Object(c.jsx)("td",{className:"record-item",children:e.LastName}),Object(c.jsx)("td",{className:"record-item",children:e.Gender}),Object(c.jsx)("td",{className:"record-item",children:e.Latitude}),Object(c.jsx)("td",{className:"record-item",children:e.Longitude}),Object(c.jsx)("td",{className:"record-item",children:e.CreditCardNumber}),Object(c.jsx)("td",{className:"record-item",children:e.CreditCardType}),Object(c.jsx)("td",{className:"record-item",children:e.Email}),Object(c.jsx)("td",{className:"record-item",children:e.DomainName}),Object(c.jsx)("td",{className:"record-item",children:e.PhoneNumber}),Object(c.jsx)("td",{className:"record-item",children:e.MacAddress}),Object(c.jsx)("td",{className:"record-item",children:e.URL}),Object(c.jsx)("td",{className:"record-item",children:e.UserName}),Object(c.jsx)("td",{className:"record-item",children:e.LastLogin}),Object(c.jsx)("td",{className:"record-item",children:e.PaymentMethod})]},t)}))})]})};r(20);var x=function(e){for(var t=e.recordsPerPage,r=e.totalRecords,a=e.paginate,s=[],n=1;n<=Math.ceil(r/t);n++)s.push(n);return Object(c.jsx)("nav",{children:Object(c.jsx)("ul",{className:"pagination",children:s.map((function(e){return Object(c.jsx)("li",{className:"page-item",children:Object(c.jsx)("a",{href:"!#",className:"page-link",onClick:function(){return a(e)},children:e})},e)}))})})},f=function(e){Object(h.a)(r,e);var t=Object(j.a)(r);function r(e){var c;return Object(l.a)(this,r),(c=t.call(this,e)).handleChange=function(e){c.setState(Object(i.a)({},e.target.name,e.target.value))},c.filter=function(e){return e.filter((function(e){return-1!==e.Gender.toString().toLowerCase().indexOf(c.state.filter.toLowerCase())||-1!==e.PaymentMethod.toString().toLowerCase().indexOf(c.state.filter.toLowerCase())}))},c.handleSearch=function(e){var t=e[0]&&Object.keys(e[0]);return e.filter((function(e){return t.some((function(t){return-1!==e[t].toString().toLowerCase().indexOf(c.state.search.toLowerCase())}))}))},c.paginate=function(e){c.setState({currentPage:e})},c.state={filter:"",search:"",records:[],loading:!1,currentPage:1,recordsPerPage:20},c}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0});fetch("https://thedavyloper.github.io/customer-records-json/records.json").then((function(e){return e.json()})).then((function(t){return e.setState({records:t.records.profiles,loading:!1})}))}},{key:"render",value:function(){var e=this.state.currentPage*this.state.recordsPerPage,t=e-this.state.recordsPerPage,r=this.state.records.slice(t,e);return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(b,{handleChange:this.handleChange,state:this.state,handleSearch:this.handleSearch}),Object(c.jsx)(O,{records:this.handleSearch(this.filter(r)),loading:this.state.loading}),Object(c.jsx)(x,{recordsPerPage:this.state.recordsPerPage,totalRecords:this.state.records.length,paginate:this.paginate})]})}}]),r}(a.Component),g=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,22)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;r(e),c(e),a(e),s(e),n(e)}))};d.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),g()}],[[21,1,2]]]);
//# sourceMappingURL=main.eb355bdb.chunk.js.map