(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{61:function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(68);t.a=function(e){return a.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(64);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},64:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},65:function(e,t,n){"use strict";var r=n(18);n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return u}));var a=function(){return{type:"REQUIRE"}},i=function(e){return{type:"MINLENGTH",val:e}},c=function(){return{type:"EMAIL"}},u=function(e,t){var n,a=!0,i=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(r.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i,c=!0,u=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==a.return||a.return()}finally{if(u)throw i}}}}(t);try{for(i.s();!(n=i.n()).done;){var c=n.value;"REQUIRE"===c.type&&(a=a&&e.trim().length>0),"MINLENGTH"===c.type&&(a=a&&e.trim().length>=c.val),"MAXLENGTH"===c.type&&(a=a&&e.trim().length<=c.val),"MIN"===c.type&&(a=a&&+e>=c.val),"MAX"===c.type&&(a=a&&+e<=c.val),"EMAIL"===c.type&&(a=a&&/^\S+@\S+\.\S+$/.test(e))}}catch(u){i.e(u)}finally{i.f()}return a}},68:function(e,t,n){},71:function(e,t,n){"use strict";var r=n(12),a=n(62),i=n(0),c=n.n(i),u=n(65),l=(n(72),function(e,t){switch(t.type){case"CHANGE":return Object(a.a)(Object(a.a)({},e),{},{value:t.val,isValid:Object(u.d)(t.val,t.validators)});case"TOUCH":return Object(a.a)(Object(a.a)({},e),{},{isTouched:!0});default:return e}});t.a=function(e){var t=Object(i.useReducer)(l,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=Object(r.a)(t,2),a=n[0],u=n[1],o=e.id,s=e.onInput,p=a.value,d=a.isValid;Object(i.useEffect)((function(){s(o,p,d)}),[o,p,d,s]);var f=function(t){u({type:"CHANGE",val:t.target.value,validators:e.validators})},b=function(){u({type:"TOUCH"})},v="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:b,value:a.value}):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:f,onBlur:b,value:a.value});return c.a.createElement("div",{className:"form-control ".concat(!a.isValid&&a.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),v,!a.isValid&&a.isTouched&&c.a.createElement("p",null,e.errorText))}},72:function(e,t,n){},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(12),a=n(64),i=n(62),c=n(0),u=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var r in e.inputs)e.inputs[r]&&(n=r===t.inputId?n&&t.isValid:n&&e.inputs[r].isValid);return Object(i.a)(Object(i.a)({},e),{},{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(a.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},l=function(e,t){var n=Object(c.useReducer)(u,{inputs:e,isValid:t}),a=Object(r.a)(n,2),i=a[0],l=a[1];return[i,Object(c.useCallback)((function(e,t,n){l({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(c.useCallback)((function(e,t){l({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},76:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var r=n(66),a=n.n(r),i=n(67),c=n(12),u=n(0),l=n.n(u),o=n(2),s=n(71),p=n(63),d=n(61),f=n(17),b=n(69),v=n(65),m=n(73),O=n(70),y=n(13);n(76);t.default=function(){var e=Object(u.useContext)(y.a),t=Object(O.a)(),n=t.isLoading,r=t.error,j=t.sendRequest,h=t.clearError,E=Object(u.useState)(),V=Object(c.a)(E,2),T=V[0],I=V[1],w=Object(o.h)().recipeId,g=Object(o.g)(),N=Object(m.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),A=Object(c.a)(N,3),C=A[0],P=A[1],k=A[2];Object(u.useEffect)((function(){(function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("".concat("https://recipe-bloc-backend.herokuapp.com/api","/recipes/").concat(w));case 3:t=e.sent,I(t.recipe),k({title:{value:t.recipe.title,isValid:!0},description:{value:t.recipe.description,isValid:!0}},!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[j,w,k]);var x=function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,j("".concat("https://recipe-bloc-backend.herokuapp.com/api","/recipes/").concat(w),"PATCH",JSON.stringify({title:C.inputs.title.value,description:C.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token});case 4:g.push("/"+e.userId+"recipes"),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return n?l.a.createElement("div",{className:"center"},l.a.createElement(f.a,null)):T||r?l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{error:r,onClear:h}),!n&&T&&l.a.createElement("form",{className:"recipe-form",onSubmit:x},l.a.createElement(s.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(v.c)()],errorText:"Please enter a valid title.",onInput:P,initialValue:T.title,initialValid:!0}),l.a.createElement(s.a,{id:"description",element:"textarea",label:"Description",validators:[Object(v.b)(5)],errorText:"Please enter a valid description (min. 5 characters).",onInput:P,initialValue:T.description,initialValid:!0}),l.a.createElement(p.a,{type:"submit",disabled:!C.isValid},"UPDATE RECIPE"))):l.a.createElement("div",{className:"center"},l.a.createElement(d.a,null,l.a.createElement("h2",null,"Could not find recipe!")))}}}]);
//# sourceMappingURL=6.c396b019.chunk.js.map