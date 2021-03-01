(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{56:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return l})),a.d(t,"d",(function(){return c}));var n=a(61),i=function(){return{type:"REQUIRE"}},r=function(e){return{type:"MINLENGTH",val:e}},l=function(){return{type:"EMAIL"}},c=function(e,t){var a,i=!0,r=Object(n.a)(t);try{for(r.s();!(a=r.n()).done;){var l=a.value;"REQUIRE"===l.type&&(i=i&&e.trim().length>0),"MINLENGTH"===l.type&&(i=i&&e.trim().length>=l.val),"MAXLENGTH"===l.type&&(i=i&&e.trim().length<=l.val),"MIN"===l.type&&(i=i&&+e>=l.val),"MAX"===l.type&&(i=i&&+e<=l.val),"EMAIL"===l.type&&(i=i&&/^\S+@\S+\.\S+$/.test(e))}}catch(c){r.e(c)}finally{r.f()}return i}},58:function(e,t,a){"use strict";var n=a(4),i=a(55),r=a(0),l=a.n(r),c=a(56),u=(a(59),function(e,t){switch(t.type){case"CHANGE":return Object(i.a)(Object(i.a)({},e),{},{value:t.val,isValid:Object(c.d)(t.val,t.validators)});case"TOUCH":return Object(i.a)(Object(i.a)({},e),{},{isTouched:!0});default:return e}});t.a=function(e){var t=Object(r.useReducer)(u,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),a=Object(n.a)(t,2),i=a[0],c=a[1],s=e.id,o=e.onInput,p=i.value,d=i.isValid;Object(r.useEffect)((function(){o(s,p,d)}),[s,p,d,o]);var m=function(t){c({type:"CHANGE",val:t.target.value,validators:e.validators})},v=function(){c({type:"TOUCH"})},f="input"===e.element?l.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:m,onBlur:v,value:i.value}):l.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:m,onBlur:v,value:i.value});return l.a.createElement("div",{className:"form-control ".concat(!i.isValid&&i.isTouched&&"form-control--invalid")},l.a.createElement("label",{htmlFor:e.id},e.label),f,!i.isValid&&i.isTouched&&l.a.createElement("p",null,e.errorText))}},59:function(e,t,a){},60:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(4),i=a(57),r=a(55),l=a(0),c=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(r.a)(Object(r.a)({},e),{},{inputs:Object(r.a)(Object(r.a)({},e.inputs),{},Object(i.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},u=function(e,t){var a=Object(l.useReducer)(c,{inputs:e,isValid:t}),i=Object(n.a)(a,2),r=i[0],u=i[1];return[r,Object(l.useCallback)((function(e,t,a){u({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(l.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},62:function(e,t,a){"use strict";(function(e){var n=a(4),i=a(0),r=a.n(i),l=a(11);a(63);t.a=function(t){var a=Object(i.useState)(),c=Object(n.a)(a,2),u=c[0],s=c[1],o=Object(i.useState)(),p=Object(n.a)(o,2),d=p[0],m=p[1],v=Object(i.useState)(!1),f=Object(n.a)(v,2),b=f[0],O=f[1],E=Object(i.useRef)();Object(i.useEffect)((function(){if(u){var e=new FileReader;e.onload=function(){m(e.result)},e.readAsDataURL(u)}}),[u]);return r.a.createElement("div",{className:"form-control"},r.a.createElement("input",{id:t.id,ref:E,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(a){var n,i,r=b;if(a.target.files&&1===a.target.files.length){n=a.target.files[0];var l=new FileReader;l.onloadend=function(){var t=l.result,a=new e(t).toString("base64");localStorage.setItem("myImage",a);new e(a,"base64").toString("ascii")},l.readAsDataURL(n),i=localStorage.getItem("myImage"),console.log(i),s(n),O(!0),r=!0}else O(!1),r=!1;t.onInput(t.id,n,r)}}),r.a.createElement("div",{className:"image-upload ".concat(t.center&&"center")},r.a.createElement("div",{className:"image-upload__preview"},d&&r.a.createElement("img",{src:d,alt:"Preview"}),!d&&r.a.createElement("p",null,"Please pick an image.")),r.a.createElement(l.a,{type:"button",onClick:function(){E.current.click()}},"PICK IMAGE")),!b&&r.a.createElement("p",null,t.errorText))}}).call(this,a(65).Buffer)},63:function(e,t,a){},72:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(9),i=a.n(n),r=a(12),l=a(55),c=a(4),u=a(0),s=a.n(u),o=a(16),p=a(58),d=a(11),m=a(17),v=a(14),f=a(62),b=a(56),O=a(60),E=a(18),j=a(15);a(72);t.default=function(){var e=Object(u.useContext)(j.a),t=Object(u.useState)(!0),a=Object(c.a)(t,2),n=a[0],g=a[1],y=Object(E.a)(),I=y.isLoading,h=y.error,w=y.sendRequest,T=y.clearError,V=Object(O.a)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),N=Object(c.a)(V,3),S=N[0],C=N[1],k=N[2],x=function(){var t=Object(r.a)(i.a.mark((function t(a){var r,l,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!n){t.next=13;break}return t.prev=2,t.next=5,w("http://localhost:5000/api/users/login","POST",JSON.stringify({email:S.inputs.email.value,password:S.inputs.password.value}),{"Content-Type":"application/json"});case 5:r=t.sent,e.login(r.userId,r.token),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(2);case 11:t.next=27;break;case 13:return t.prev=13,(l=new FormData).append("email",S.inputs.email.value),l.append("name",S.inputs.name.value),l.append("password",S.inputs.password.value),l.append("image",S.inputs.image.value),t.next=21,w("http://localhost:5000/api/users/signup","POST",l);case 21:c=t.sent,e.login(c.userId,c.token),t.next=27;break;case 25:t.prev=25,t.t1=t.catch(13);case 27:case"end":return t.stop()}}),t,null,[[2,9],[13,25]])})));return function(e){return t.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{error:h,onClear:T}),s.a.createElement(o.a,{className:"authentication"},I&&s.a.createElement(v.a,{asOverlay:!0}),s.a.createElement("h2",null,"Login Required"),s.a.createElement("form",{onSubmit:x},!n&&s.a.createElement(p.a,{element:"input",id:"name",type:"text",label:"Your Name",validators:[Object(b.c)()],errorText:"Please enter a name.",onInput:C}),!n&&s.a.createElement(f.a,{center:!0,id:"image",onInput:C}),s.a.createElement(p.a,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[Object(b.a)()],errorText:"Please enter a valid email address.",onInput:C}),s.a.createElement(p.a,{element:"input",id:"password",type:"password",label:"Password",validators:[Object(b.b)(6)],errorText:"Please enter a valid password, at least 6 characters.",onInput:C}),s.a.createElement(d.a,{type:"submit",disabled:!S.isValid},n?"LOGIN":"SIGNUP")),s.a.createElement(d.a,{inverse:!0,onClick:function(){n?k(Object(l.a)(Object(l.a)({},S.inputs),{},{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):k(Object(l.a)(Object(l.a)({},S.inputs),{},{name:void 0,image:void 0}),S.inputs.email.isValid&&S.inputs.password.isValid),g((function(e){return!e}))}},"SWITCH TO ",n?"SIGNUP":"LOGIN")))}}}]);
//# sourceMappingURL=6.f6707b40.chunk.js.map