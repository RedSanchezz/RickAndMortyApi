(this.webpackJsonptest4=this.webpackJsonptest4||[]).push([[0],{67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},71:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),i=c(10),r=c.n(i),n=(c(67),c(11)),l=(c(68),c(69),c(2)),j=function(e){var t=e.character,c=e.setOpenModal,a=e.setCurrentCharacter;return Object(l.jsxs)("div",{className:"characters__characters-list-item character-item",onClick:function(e){a(t),c(!0)},children:[Object(l.jsxs)("div",{className:"character-item__name",children:["\u0418\u043c\u044f: ",t.name]}),Object(l.jsx)("div",{className:"character-item__image",children:Object(l.jsx)("img",{src:t.image,alt:"character-logo"})}),Object(l.jsxs)("div",{className:"character-item__properties-list",children:[Object(l.jsxs)("div",{className:"properties-list__item character-item__id",children:["ID: ",t.id]}),Object(l.jsxs)("div",{className:"properties-list__item character-item__gender",children:["\u041f\u043e\u043b: ",t.gender]}),Object(l.jsxs)("div",{className:"properties-list__item character-item__created",children:["\u0412\u0438\u0434 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430: ",t.species]}),Object(l.jsxs)("div",{className:"properties-list__item character-item__created",children:["\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f: ",t.created.slice(0,16).replace("T"," ")]})]})]})},o=(c(71),c(127)),d=c(120),u=c(129),h=c(125),b=c(126),m=c(57),O=c.n(m),_=c(121),x=function(e){var t=e.acceptFilters,c=e.showPreloader,s=Object(a.useState)(""),i=Object(n.a)(s,2),r=i[0],j=i[1],m=Object(a.useState)(""),x=Object(n.a)(m,2),f=x[0],p=x[1],v=Object(a.useState)(""),g=Object(n.a)(v,2),N=g[0],C=g[1],k=Object(a.useState)(""),S=Object(n.a)(k,2),w=S[0],P=S[1],E=Object(a.useState)(""),F=Object(n.a)(E,2),T=F[0],y=F[1],M=Object(a.useState)(!1),I=Object(n.a)(M,2),D=I[0],A=I[1];return Object(l.jsxs)("div",{className:"characters__filters",children:[Object(l.jsx)("div",{onClick:function(e){A(!0)},className:"characters__filters-mobile-btn",children:Object(l.jsx)("img",{src:"images/filter-icon.svg",alt:"filter-icon"})}),Object(l.jsxs)("div",{className:D?"characters__filters-list open":"characters__filters-list",children:[Object(l.jsx)("div",{onClick:function(e){A(!1)},className:"characters__filters-close-mobile-btn",children:Object(l.jsx)("img",{src:"images/close-btn.svg",alt:"close-btn"})}),Object(l.jsx)("div",{className:"characters__filters-list-item",children:Object(l.jsx)(o.a,{id:"standard",label:"\u0418\u043c\u044f",onChange:function(e){j(e.currentTarget.value)},value:r})}),Object(l.jsx)("div",{className:"characters__filters-list-item",children:Object(l.jsxs)(d.a,{children:[Object(l.jsx)(u.a,{id:"demo-simple-select-label",children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),Object(l.jsxs)(h.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:f,onChange:function(e){p(e.target.value)},children:[Object(l.jsx)(b.a,{value:"",children:"-"}),Object(l.jsx)(b.a,{value:"Alive",children:"\u0416\u0438\u0432"}),Object(l.jsx)(b.a,{value:"Dead",children:"\u041c\u0435\u0440\u0442\u0432"}),Object(l.jsx)(b.a,{value:"unknown",children:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e"})]})]})}),Object(l.jsx)("div",{className:"characters__filters-list-item",children:Object(l.jsx)(o.a,{id:"standard",label:"\u0412\u0438\u0434",value:N,onChange:function(e){C(e.currentTarget.value)}})}),Object(l.jsx)("div",{className:"characters__filters-list-item",children:Object(l.jsx)(o.a,{id:"standard",label:"\u0422\u0438\u043f \u043f\u0435\u0440\u0441\u043e\u043e\u043d\u0430\u0436\u0430",onChange:function(e){P(e.currentTarget.value)},value:w})}),Object(l.jsx)("div",{className:"characters__filters-list-item",children:Object(l.jsxs)(d.a,{children:[Object(l.jsx)(u.a,{id:"gender-filter-input-label",children:"\u041f\u043e\u043b"}),Object(l.jsxs)(h.a,{labelId:"gender-filter-input-label",id:"demo-simple-select",value:T,onChange:function(e){y(e.target.value)},children:[Object(l.jsx)(b.a,{value:"",children:"-"}),Object(l.jsx)(b.a,{value:"Female",children:"\u0416\u0435\u043d\u0449\u0438\u043d\u0430"}),Object(l.jsx)(b.a,{value:"Male",children:"\u041c\u0443\u0436\u0447\u0438\u043d\u0430"}),Object(l.jsx)(b.a,{value:"Genderless",children:"\u0411\u0435\u0441\u043f\u043e\u043b\u044b\u0439"}),Object(l.jsx)(b.a,{value:"unknown",children:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e"})]})]})}),c?Object(l.jsx)("div",{className:"characters__filters-preloader",children:Object(l.jsx)(_.a,{})}):Object(l.jsx)("div",{onClick:function(e){A(!1);var c=[];r&&c.push("name=".concat(r)),f&&c.push("status=".concat(f)),N&&c.push("species=".concat(N)),w&&c.push("type=".concat(w)),T&&c.push("gender=".concat(T)),t(c)},className:"characters__filters-update-btn ",children:Object(l.jsx)(O.a,{})})]})]})};c(79);var f=function(e){var t=e.currentPage,c=e.setCurrentPage,a=e.pagesCount,s=e.showPreloader;function i(e){c(e)}function r(e){return t<=3?e===t:a-3<t?n(e)===t:3===e}function n(e){if(t<=3)switch(e){case 1:return 1;case 2:return 2;case 3:return 3;case 4:return 4;case 5:return 5}else{if(a-3<t)switch(e){case 1:return a-4;case 2:return a-3;case 3:return a-2;case 4:return a-1;case 5:return a}switch(e){case 1:return t-2;case 2:return t-1;case 3:return t;case 4:return t+1;case 5:return t+2}}return 0}return Object(l.jsxs)("ul",{className:s?"pagination disabled":"pagination",children:[Object(l.jsx)("li",{className:t-1===0?"pagination__item__icon disabled":"pagination__item__icon",onClick:function(){c(t-1)},children:Object(l.jsx)("i",{className:"material-icons",children:"chevron_left"})}),Object(l.jsx)("li",{className:r(1)?"pagination__item active":"pagination__item",onClick:function(){return i(n(1))},children:n(1)}),a>=2&&Object(l.jsx)("li",{className:r(2)?"pagination__item active":"pagination__item",onClick:function(){return i(n(2))},children:n(2)}),a>=3&&Object(l.jsx)("li",{className:r(3)?"pagination__item active":"pagination__item",onClick:function(){return i(n(3))},children:n(3)}),a>=4&&Object(l.jsx)("li",{className:r(4)?"pagination__item active":"pagination__item",onClick:function(){return i(n(4))},children:n(4)}),a>=5&&Object(l.jsx)("li",{className:r(5)?"pagination__item active":"pagination__item",onClick:function(){return i(n(5))},children:n(5)}),Object(l.jsx)("li",{className:t===a?"pagination__item__icon disabled":"pagination__item__icon",onClick:function(){c(t+1)},children:Object(l.jsx)("i",{className:"material-icons",children:"chevron_right"})})]})},p=c(123),v=c(124),g=(c(80),c(122)),N=function(e){var t=e.isOpen,c=e.character,s=e.setOpenModal,i=Object(a.useState)([]),r=Object(n.a)(i,2),j=r[0],o=r[1],d=Object(a.useState)(!1),u=Object(n.a)(d,2),h=u[0],b=u[1];return Object(a.useEffect)((function(){document.body.style.overflow=t?"hidden":""}),[t]),Object(a.useEffect)((function(){if(b(!0),!0===t){var e=c.episode;Promise.all(e.map((function(e){return fetch(e)}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(e){var t=[];e.forEach((function(e){t.push(e.name)})),o(t),b(!1)}))}}),[t,c.episode]),Object(l.jsx)(g.a,{in:t,timeout:500,children:Object(l.jsx)("div",{onClick:function(e){e.currentTarget===e.target&&s(!1)},className:"modal-wrapper",children:Object(l.jsxs)("div",{className:"modal-character",children:[Object(l.jsxs)("div",{className:"modal-character__name",children:["\u0418\u043c\u044f: ",c.name]}),Object(l.jsx)("div",{className:"modal-character__img",children:t&&Object(l.jsx)("img",{src:c.image,alt:"character-logo"})}),Object(l.jsxs)("div",{className:"modal-character__item-list",children:[Object(l.jsxs)("div",{className:"modal-character__item",children:["\u0421\u0442\u0430\u0442\u0443\u0441: ",c.status]}),Object(l.jsxs)("div",{className:"modal-character__item",children:["\u0412\u0438\u0434: ",c.species]}),c.type&&Object(l.jsxs)("div",{className:"modal-character__item",children:["\u0422\u0438\u043f: ",c.type]}),Object(l.jsxs)("div",{className:"modal-character__item",children:["\u041f\u043e\u043b: ",c.gender]}),Object(l.jsxs)("div",{className:"modal-character__item",children:["\u041d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435: ",c.location.name]}),Object(l.jsxs)("div",{className:"modal-character__item",children:["\u041c\u0435\u0441\u0442\u043e \u043f\u0440\u043e\u0438c\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f: ",c.origin.name]})]}),Object(l.jsxs)("div",{className:"modal-character__episodes",children:[Object(l.jsx)("h3",{children:"\u0421\u0435\u0440\u0438\u0438"}),h?Object(l.jsx)(_.a,{}):Object(l.jsx)("ul",{children:j.map((function(e,t){return Object(l.jsx)("li",{children:e},t)}))})]}),Object(l.jsxs)("div",{className:"modal-character__item",children:["\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f : ",c.created.slice(0,16).replace("T"," ")]}),Object(l.jsx)("div",{onClick:function(e){s(!1)},className:"modal-character__close-btn",children:Object(l.jsx)("img",{src:"images/close-btn.svg",alt:"close-btn"})})]})})})},C=function(){var e=Object(a.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(1),r=Object(n.a)(i,2),o=r[0],d=r[1],u=Object(a.useState)(1),h=Object(n.a)(u,2),b=h[0],m=h[1],O=Object(a.useState)([]),_=Object(n.a)(O,2),g=_[0],C=_[1],k=Object(a.useState)(!1),S=Object(n.a)(k,2),w=S[0],P=S[1],E=Object(a.useState)(!1),F=Object(n.a)(E,2),T=F[0],y=F[1],M=Object(a.useState)(),I=Object(n.a)(M,2),D=I[0],A=I[1],B=Object(a.useState)(""),J=Object(n.a)(B,2),L=J[0],G=J[1];return Object(a.useEffect)((function(){P(!0),function(e,t){var c="https://rickandmortyapi.com/api/character/";return e&&(c=c+"?page="+e),(null===t||void 0===t?void 0:t.length)&&t.forEach((function(e){c=c+"&"+e})),fetch(c).then((function(e){if(e.ok)return e.json();throw 404===e.status?Error("\u041f\u0435\u0440\u0441\u043e\u043e\u043d\u0430\u0436\u0435\u0439 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"):Error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 !")}))}(o,g).then((function(e){s(e.results),m(e.info.pages),P(!1),G(""),D||A(e.results[0])})).catch((function(e){G(e.message),s([]),m(1),P(!1)}))}),[o,g]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)(p.a,{maxWidth:"lg",children:[Object(l.jsx)(f,{showPreloader:w,currentPage:o,setCurrentPage:d,pagesCount:b}),Object(l.jsx)(x,{acceptFilters:function(e){d(1),C(e)},showPreloader:w}),w?Object(l.jsx)(v.a,{}):Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"characters__characters-list",children:[L&&Object(l.jsx)("h2",{children:L}),c.map((function(e,t){return Object(l.jsx)(j,{character:e,setOpenModal:y,setCurrentCharacter:A},t)}))]})}),Object(l.jsx)(f,{showPreloader:w,currentPage:o,setCurrentPage:d,pagesCount:b})]}),D&&Object(l.jsx)(N,{isOpen:T,character:D,setOpenModal:y})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,130)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),k()}},[[81,1,2]]]);
//# sourceMappingURL=main.85da5452.chunk.js.map