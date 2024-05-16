(function(T,R){typeof exports=="object"&&typeof module<"u"?R(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],R):(T=typeof globalThis<"u"?globalThis:T||self,R(T.dslZustand={},T.react))})(this,function(T,R){"use strict";var x=function(){return x=Object.assign||function(u){for(var o,c=1,h=arguments.length;c<h;c++){o=arguments[c];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(u[d]=o[d])}return u},x.apply(this,arguments)};typeof SuppressedError=="function"&&SuppressedError;var C={exports:{}},j={},I={exports:{}},G={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U;function k(){if(U)return G;U=1;var e=R;function u(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var o=typeof Object.is=="function"?Object.is:u,c=e.useState,h=e.useEffect,d=e.useLayoutEffect,y=e.useDebugValue;function L(t,i){var f=i(),S=c({inst:{value:f,getSnapshot:i}}),s=S[0].inst,v=S[1];return d(function(){s.value=f,s.getSnapshot=i,g(s)&&v({inst:s})},[t,f,i]),h(function(){return g(s)&&v({inst:s}),t(function(){g(s)&&v({inst:s})})},[t]),y(f),f}function g(t){var i=t.getSnapshot;t=t.value;try{var f=i();return!o(t,f)}catch{return!0}}function O(t,i){return i()}var l=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?O:L;return G.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:l,G}var M={};/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q;function Z(){return q||(q=1,process.env.NODE_ENV!=="production"&&function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var e=R,u=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function o(a){{for(var r=arguments.length,p=new Array(r>1?r-1:0),n=1;n<r;n++)p[n-1]=arguments[n];c("error",a,p)}}function c(a,r,p){{var n=u.ReactDebugCurrentFrame,_=n.getStackAddendum();_!==""&&(r+="%s",p=p.concat([_]));var m=p.map(function(E){return String(E)});m.unshift("Warning: "+r),Function.prototype.apply.call(console[a],console,m)}}function h(a,r){return a===r&&(a!==0||1/a===1/r)||a!==a&&r!==r}var d=typeof Object.is=="function"?Object.is:h,y=e.useState,L=e.useEffect,g=e.useLayoutEffect,O=e.useDebugValue,l=!1,t=!1;function i(a,r,p){l||e.startTransition!==void 0&&(l=!0,o("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));var n=r();if(!t){var _=r();d(n,_)||(o("The result of getSnapshot should be cached to avoid an infinite loop"),t=!0)}var m=y({inst:{value:n,getSnapshot:r}}),E=m[0].inst,A=m[1];return g(function(){E.value=n,E.getSnapshot=r,f(E)&&A({inst:E})},[a,n,r]),L(function(){f(E)&&A({inst:E});var W=function(){f(E)&&A({inst:E})};return a(W)},[a]),O(n),n}function f(a){var r=a.getSnapshot,p=a.value;try{var n=r();return!d(p,n)}catch{return!0}}function S(a,r,p){return r()}var s=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",v=!s,V=v?S:i,w=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:V;M.useSyncExternalStore=w,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),M}var z;function F(){return z||(z=1,process.env.NODE_ENV==="production"?I.exports=k():I.exports=Z()),I.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P;function J(){if(P)return j;P=1;var e=R,u=F();function o(O,l){return O===l&&(O!==0||1/O===1/l)||O!==O&&l!==l}var c=typeof Object.is=="function"?Object.is:o,h=u.useSyncExternalStore,d=e.useRef,y=e.useEffect,L=e.useMemo,g=e.useDebugValue;return j.useSyncExternalStoreWithSelector=function(O,l,t,i,f){var S=d(null);if(S.current===null){var s={hasValue:!1,value:null};S.current=s}else s=S.current;S=L(function(){function V(n){if(!w){if(w=!0,a=n,n=i(n),f!==void 0&&s.hasValue){var _=s.value;if(f(_,n))return r=_}return r=n}if(_=r,c(a,n))return _;var m=i(n);return f!==void 0&&f(_,m)?_:(a=n,r=m)}var w=!1,a,r,p=t===void 0?null:t;return[function(){return V(l())},p===null?void 0:function(){return V(p())}]},[l,t,i,f]);var v=h(O,S[0],S[1]);return y(function(){s.hasValue=!0,s.value=v},[v]),g(v),v},j}var B={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y;function Q(){return Y||(Y=1,process.env.NODE_ENV!=="production"&&function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var e=R,u=F();function o(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var c=typeof Object.is=="function"?Object.is:o,h=u.useSyncExternalStore,d=e.useRef,y=e.useEffect,L=e.useMemo,g=e.useDebugValue;function O(l,t,i,f,S){var s=d(null),v;s.current===null?(v={hasValue:!1,value:null},s.current=v):v=s.current;var V=L(function(){var p=!1,n,_,m=function(D){if(!p){p=!0,n=D;var b=f(D);if(S!==void 0&&v.hasValue){var H=v.value;if(S(H,b))return _=H,H}return _=b,b}var ne=n,K=_;if(c(ne,D))return K;var N=f(D);return S!==void 0&&S(K,N)?K:(n=D,_=N,N)},E=i===void 0?null:i,A=function(){return m(t())},W=E===null?void 0:function(){return m(E())};return[A,W]},[t,i,f,S]),w=V[0],a=V[1],r=h(l,w,a);return y(function(){v.hasValue=!0,v.value=r},[r]),g(r),r}B.useSyncExternalStoreWithSelector=O,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),B}process.env.NODE_ENV==="production"?C.exports=J():C.exports=Q();var X=C.exports,$=function(){console.log("hello dengshangli")},ee=function(e){var u={},o=new Set,c=function(d){if(!Object.is(d,u)){var y=u;u=x(x({},u),d),o.forEach(function(L){return L(u,y)})}};u=e(c);var h=u;return{getState:function(){return u},setState:c,getInitialState:function(){return h},subscribe:function(d){return o.add(d),function(){return o.delete(d)}},destroy:function(){o.clear()}}},re=function(e,u){var o=X.useSyncExternalStoreWithSelector(e.subscribe,e.getState,e.getInitialState,u);return o},te=function(e){var u=ee(e),o=function(c){return re(u,c)};return o};T.create=te,T.hello=$,Object.defineProperty(T,Symbol.toStringTag,{value:"Module"})});
