// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,b=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var O=String.fromCharCode,E=isNaN,_=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,f,l,s,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){return"string"==typeof r}function A(r){var e,t,n;if(!V(r))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=P(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var F,N=Object.prototype,$=N.toString,C=N.__defineGetter__,B=N.__defineSetter__,L=N.__lookupGetter__,R=N.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var G=F;function W(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(r){return"string"==typeof r}function Z(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var M=Z();function Y(){return M&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString,H=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&H.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,q="function"==typeof D?D.toStringTag:"",J=Y()?function(r){var e,t,n;if(null==r)return U.call(r);t=r[q],e=z(r,q);try{r[q]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[q]=t:delete r[q],n}:function(r){return U.call(r)},K=String.prototype.valueOf,Q=Y();function rr(r){return"object"==typeof r&&(r instanceof String||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object String]"===J(r)))}function er(r){return X(r)||rr(r)}function tr(r){return"symbol"==typeof r}W(er,"isPrimitive",X),W(er,"isObject",rr);var nr=/^Symbol\(.*\)$/;function ir(r){try{return"symbol"==typeof r.valueOf()&&nr.test(function(r){return Symbol.prototype.toString.call(r)}(r))}catch(r){return!1}}function or(r){return"object"==typeof r&&"[object Symbol]"===J(r)&&ir(r)}function ar(r){return tr(r)||or(r)}function ur(r){return function(){return r}}W(ar,"isPrimitive",tr),W(ar,"isObject",or);var cr,fr=ur(!1),lr=ur(!1),sr=ur(!1);W(fr,"isPrimitive",lr),W(fr,"isObject",sr),cr=Z()?ar:fr;const{isPrimitive:pr}=cr;function gr(r){return"number"==typeof r}var yr=Number,br=yr.prototype.toString,dr=Y();function hr(r){return"object"==typeof r&&(r instanceof yr||(dr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function vr(r){return gr(r)||hr(r)}W(vr,"isPrimitive",gr),W(vr,"isObject",hr);var mr=Number.POSITIVE_INFINITY,wr=yr.NEGATIVE_INFINITY,jr=Math.floor;function Sr(r){return jr(r)===r}function Or(r){return r<mr&&r>wr&&Sr(r)}function Er(r){return gr(r)&&Or(r)}function _r(r){return hr(r)&&Or(r.valueOf())}function Tr(r){return Er(r)||_r(r)}function kr(r){return Er(r)&&r>=0}function xr(r){return _r(r)&&r.valueOf()>=0}function Ir(r){return kr(r)||xr(r)}W(Tr,"isPrimitive",Er),W(Tr,"isObject",_r),W(Ir,"isPrimitive",kr),W(Ir,"isObject",xr);var Pr=/./;function Vr(r){return"boolean"==typeof r}var Ar=Boolean,Fr=Boolean.prototype.toString,Nr=Y();function $r(r){return"object"==typeof r&&(r instanceof Ar||(Nr?function(r){try{return Fr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Cr(r){return Vr(r)||$r(r)}function Br(){return new Function("return this;")()}W(Cr,"isPrimitive",Vr),W(Cr,"isObject",$r);var Lr="object"==typeof self?self:null,Rr="object"==typeof window?window:null,Gr="object"==typeof globalThis?globalThis:null,Wr=function(r){if(arguments.length){if(!Vr(r))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Br()}if(Gr)return Gr;if(Lr)return Lr;if(Rr)return Rr;throw new Error("unexpected error. Unable to resolve global object.")}(),Xr=Wr.document&&Wr.document.childNodes,Zr=Int8Array;function Mr(){return/^\s*function\s*([^(]*)/i}var Yr,Ur=/^\s*function\s*([^(]*)/i;W(Mr,"REGEXP",Ur),Yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var Hr=Yr;function zr(r){return null!==r&&"object"==typeof r}var Dr=function(r){if("function"!=typeof r)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Hr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(zr);function qr(r){var e,t,n,i;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ur.exec(n.toString()))return e[1]}return zr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}W(zr,"isObjectLikeArray",Dr);var Jr,Kr="function"==typeof Pr||"object"==typeof Zr||"function"==typeof Xr?function(r){return qr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?qr(r).toLowerCase():e},Qr=(Jr=Object.assign,"function"===Kr(Jr)),re=Object.assign;function ee(r){return Object.keys(Object(r))}var te,ne=void 0!==Object.keys;function ie(r){return"[object Arguments]"===J(r)}te=function(){return ie(arguments)}();var oe=te;function ae(r){return r!=r}function ue(r){return gr(r)&&ae(r)}function ce(r){return hr(r)&&ae(r.valueOf())}function fe(r){return ue(r)||ce(r)}W(fe,"isPrimitive",ue),W(fe,"isObject",ce);var le,se=Object.prototype.propertyIsEnumerable,pe=!se.call("beep","0");function ge(r,e){var t;return null!=r&&(!(t=se.call(r,e))&&pe&&er(r)?!ue(e=+e)&&Er(e)&&e>=0&&e<r.length:t)}le=oe?ie:function(r){return null!==r&&"object"==typeof r&&!Hr(r)&&"number"==typeof r.length&&Sr(r.length)&&r.length>=0&&r.length<=4294967295&&z(r,"callee")&&!ge(r,"callee")};var ye=le,be=Array.prototype.slice,de=ge((function(){}),"prototype"),he=!ge({toString:null},"toString");function ve(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Sr(r.length)&&r.length>=0&&r.length<=9007199254740991}function me(r,e,t){var n,i;if(!ve(r)&&!X(r))throw new TypeError(A("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Er(t))throw new TypeError(A("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(fe(e)){for(;i<n;i++)if(fe(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}function we(r){return r.constructor&&r.constructor.prototype===r}var je,Se=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Oe="undefined"==typeof window?void 0:window,Ee=function(){var r;if("undefined"===Kr(Oe))return!1;for(r in Oe)try{-1===me(Se,r)&&z(Oe,r)&&null!==Oe[r]&&"object"===Kr(Oe[r])&&we(Oe[r])}catch(r){return!0}return!1}(),_e="undefined"!=typeof window,Te=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];je=ne?function(){return 2!==(ee(arguments)||"").length}(1,2)?function(r){return ye(r)?ee(be.call(r)):ee(r)}:ee:function(r){var e,t,n,i,o,a,u;if(i=[],ye(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!z(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(0==(n="function"==typeof r)&&!zr(r))return i;t=de&&n}for(o in r)t&&"prototype"===o||!z(r,o)||i.push(String(o));if(he)for(e=function(r){if(!1===_e&&!Ee)return we(r);try{return we(r)}catch(r){return!1}}(r),u=0;u<Te.length;u++)a=Te[u],e&&"constructor"===a||!z(r,a)||i.push(String(a));return i};var ke,xe=je,Ie=void 0!==Object.getOwnPropertySymbols,Pe=Object,Ve=Pe.getOwnPropertySymbols;ke=Ie?function(r){return Ve(Pe(r))}:function(){return[]};var Ae,Fe=ke;function Ne(r){var e,t,n;for(e=xe(r),t=Fe(r),n=0;n<t.length;n++)ge(r,t[n])&&e.push(t[n]);return e}Ae=Qr?re:function(r){var e,t,n,i,o,a,u;if(null==r)throw new TypeError(A("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(o=Pe(r),a=1;a<arguments.length;a++)if(null!=(e=arguments[a]))for(i=(t=Ne(Pe(e))).length,u=0;u<i;u++)o[n=t[u]]=e[n];return o};var $e=Ae;return function(r,e){if("object"!=typeof r||null===r)throw new TypeError(A("invalid argument. First argument must be an ndarray. Value: `%s`.",r));if(!function(r){return X(r)||pr(r)||kr(r)}(e))throw new TypeError(A("invalid argument. Second argument must be a valid property name. Value: `%s`.",e));return function(r,e){var t=r.flags;return"object"!=typeof t||null===t?{}:e?$e({},t):t}(r,!1)[e]}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).flag=e();
//# sourceMappingURL=browser.js.map
