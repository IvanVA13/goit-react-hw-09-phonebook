(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[0],{137:function(e,t,a){e.exports={section:"Section_section__3oHiV","main-title":"Section_main-title__EU8Cm",title:"Section_title__FveYn"}},138:function(e,t,a){e.exports={form:"ContactForm_form__b2W-A"}},139:function(e,t,a){e.exports={"input-layout":"Filter_input-layout__1pKd6"}},140:function(e,t,a){e.exports={"contacts-list":"ContactList_contacts-list__29XzO","contacts-list-item":"ContactList_contacts-list-item__1U9TS"}},144:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(137),i=a.n(c),r=a(1),s=function(e){var t=e.title,a=e.children,n=e.main;return Object(r.jsxs)("section",{className:i.a.section,children:[n?Object(r.jsx)("h1",{className:i.a["main-title"],children:t}):Object(r.jsx)("h2",{className:i.a.title,children:t}),a]})};s.defaultProps={title:"",main:!1};var o=s,l=a(133),b=a(135),j=a(129),u=a(14),d=a(48),m=a(138),h=a.n(m),O=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),o=s[0],m=s[1],O=Object(u.c)(d.g),f=Object(u.b)(),x=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":c(n);break;case"number":m(n);break;default:console.warn("This ".concat(a," not support"))}},p=function(){c(""),m("")};return Object(r.jsxs)(b.a,{className:h.a.form,onSubmit:function(e){e.preventDefault(),O.find((function(e){return e.name===a}))?alert("".concat(a," is already in contacts")):f(Object(d.a)(a,o)),p()},children:[Object(r.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(r.jsx)(b.a.Label,{children:"Name"}),Object(r.jsx)(b.a.Control,{onChange:x,type:"text",name:"name",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",autoComplete:"off",required:!0,placeholder:"Enter name"})]}),Object(r.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(r.jsx)(b.a.Label,{children:"Number"}),Object(r.jsx)(b.a.Control,{onChange:x,type:"number",name:"number",value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",autoComplete:"off",required:!0,placeholder:"Enter phone number"})]}),Object(r.jsx)(j.a,{variant:"outline-primary",type:"submit",children:"Add contact"})]})},f=a(143),x=a(134),p=a(139),_=a.n(p),v=function(){var e=Object(u.c)(d.f),t=Object(u.b)(),a=Object(n.useCallback)((function(e){t(Object(d.e)(e.target.value))}),[t]);return Object(r.jsxs)(f.a,{className:"mb-3 ".concat(_.a["input-layout"]),children:[Object(r.jsx)(f.a.Text,{id:"basic-addon1",children:"Name"}),Object(r.jsx)(x.a,{type:"text",value:e,onChange:a,placeholder:"Name to filter","aria-label":"Name to filter","aria-describedby":"basic-addon1"})]})},C=a(148),N=a(140),g=a.n(N),y=function(){var e=Object(u.c)(d.h),t=Object(u.b)();Object(n.useEffect)((function(){t(Object(d.d)())}),[t]);var a=Object(n.useCallback)((function(e){return function(){return t(Object(d.c)(e))}}),[t]);return 0!==e.length&&Object(r.jsx)("ul",{className:g.a["contacts-list"],children:e.map((function(e){var t=e.name,n=e.number,c=e.id;return Object(r.jsx)("li",{className:g.a["contacts-list-item"],children:Object(r.jsxs)(C.a,{children:[Object(r.jsxs)(C.a.Header,{children:["Name: ",t]}),Object(r.jsxs)(C.a.Body,{children:[Object(r.jsx)(C.a.Title,{children:"Phone number"}),Object(r.jsx)(C.a.Text,{children:n}),Object(r.jsx)(j.a,{variant:"outline-danger",onClick:a(c),children:"Delete"})]})]})},c)}))})};t.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{title:"Phonebook",main:!0,children:Object(r.jsx)(O,{})}),Object(r.jsxs)(o,{title:"Contacts",children:[Object(r.jsx)(v,{}),Object(r.jsx)(y,{})]})]})}}}]);
//# sourceMappingURL=contacts-page.60f1691c.chunk.js.map