import{h as i,k as _,r as c,o as m,c as p,a as s}from"../app.9635afe0.js";const b={class:"example-basic"},g=i({__name:"basic-range",setup(v){const t=_(new Date(2016,9,10,18,30)),l=(e,r)=>{const u=[];for(let n=e;n<=r;n++)u.push(n);return u},d=()=>l(0,16).concat(l(19,23)),a=e=>{if(e===17)return l(0,29);if(e===18)return l(31,59)},o=(e,r)=>{if(e===18&&r===30)return l(1,59)};return(e,r)=>{const u=c("el-time-picker");return m(),p("div",b,[s(u,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=n=>t.value=n),"disabled-hours":d,"disabled-minutes":a,"disabled-seconds":o,placeholder:"Arbitrary time"},null,8,["modelValue"])])}}});var S=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"}));const f={class:"example-basic"},V=i({__name:"basic",setup(v){const t=_(),l=_();return(d,a)=>{const o=c("el-time-picker");return m(),p("div",f,[s(o,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),placeholder:"Arbitrary time"},null,8,["modelValue"]),s(o,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value=e),"arrow-control":"",placeholder:"Arbitrary time"},null,8,["modelValue"])])}}});var w=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));const y={class:"demo-range"},k=i({__name:"range",setup(v){const t=_([new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)]),l=_([new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)]);return(d,a)=>{const o=c("el-time-picker");return m(),p("div",y,[s(o,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),"is-range":"","range-separator":"To","start-placeholder":"Start time","end-placeholder":"End time"},null,8,["modelValue"]),s(o,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value=e),"is-range":"","arrow-control":"","range-separator":"To","start-placeholder":"Start time","end-placeholder":"End time"},null,8,["modelValue"])])}}});var j=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));export{S as _,w as a,j as b};
