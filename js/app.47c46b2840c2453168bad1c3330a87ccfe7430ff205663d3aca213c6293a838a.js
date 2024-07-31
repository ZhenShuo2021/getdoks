"use strict";(()=>{var Ze=Object.create;var Ie=Object.defineProperty;var Ke=Object.getOwnPropertyDescriptor;var et=Object.getOwnPropertyNames;var tt=Object.getPrototypeOf,rt=Object.prototype.hasOwnProperty;var be=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports);var nt=(r,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of et(t))!rt.call(r,a)&&a!==n&&Ie(r,a,{get:()=>t[a],enumerable:!(o=Ke(t,a))||o.enumerable});return r};var Ee=(r,t,n)=>(n=r!=null?Ze(tt(r)):{},nt(t||!r||!r.__esModule?Ie(n,"default",{value:r,enumerable:!0}):n,r));var de=(r,t,n)=>new Promise((o,a)=>{var e=v=>{try{y(n.next(v))}catch(E){a(E)}},m=v=>{try{y(n.throw(v))}catch(E){a(E)}},y=v=>v.done?o(v.value):Promise.resolve(v.value).then(e,m);y((n=n.apply(r,t)).next())});var Ae=be((dt,he)=>{(function(r,t){var n=t(r,r.document,Date);r.lazySizes=n,typeof he=="object"&&he.exports&&(he.exports=n)})(typeof window!="undefined"?window:{},function(t,n,o){"use strict";var a,e;if(function(){var h,p={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};e=t.lazySizesConfig||t.lazysizesConfig||{};for(h in p)h in e||(e[h]=p[h])}(),!n||!n.getElementsByClassName)return{init:function(){},cfg:e,noSupport:!0};var m=n.documentElement,y=t.HTMLPictureElement,v="addEventListener",E="getAttribute",S=t[v].bind(t),z=t.setTimeout,b=t.requestAnimationFrame||z,C=t.requestIdleCallback,g=/^picture$/i,T=["load","error","lazyincluded","_lazyloaded"],_={},F=Array.prototype.forEach,B=function(h,p){return _[p]||(_[p]=new RegExp("(\\s|^)"+p+"(\\s|$)")),_[p].test(h[E]("class")||"")&&_[p]},H=function(h,p){B(h,p)||h.setAttribute("class",(h[E]("class")||"").trim()+" "+p)},K=function(h,p){var A;(A=B(h,p))&&h.setAttribute("class",(h[E]("class")||"").replace(A," "))},ee=function(h,p,A){var f=A?v:"removeEventListener";A&&ee(h,p),T.forEach(function(s){h[f](s,p)})},R=function(h,p,A,f,s){var i=n.createEvent("Event");return A||(A={}),A.instance=a,i.initEvent(p,!f,!s),i.detail=A,h.dispatchEvent(i),i},te=function(h,p){var A;!y&&(A=t.picturefill||e.pf)?(p&&p.src&&!h[E]("srcset")&&h.setAttribute("srcset",p.src),A({reevaluate:!0,elements:[h]})):p&&p.src&&(h.src=p.src)},D=function(h,p){return(getComputedStyle(h,null)||{})[p]},ce=function(h,p,A){for(A=A||h.offsetWidth;A<e.minSize&&p&&!h._lazysizesWidth;)A=p.offsetWidth,p=p.parentNode;return A},X=function(){var h,p,A=[],f=[],s=A,i=function(){var u=s;for(s=A.length?f:A,h=!0,p=!1;u.length;)u.shift()();h=!1},l=function(u,d){h&&!d?u.apply(this,arguments):(s.push(u),p||(p=!0,(n.hidden?z:b)(i)))};return l._lsFlush=i,l}(),$=function(h,p){return p?function(){X(h)}:function(){var A=this,f=arguments;X(function(){h.apply(A,f)})}},me=function(h){var p,A=0,f=e.throttleDelay,s=e.ricTimeout,i=function(){p=!1,A=o.now(),h()},l=C&&s>49?function(){C(i,{timeout:s}),s!==e.ricTimeout&&(s=e.ricTimeout)}:$(function(){z(i)},!0);return function(u){var d;(u=u===!0)&&(s=33),!p&&(p=!0,d=f-(o.now()-A),d<0&&(d=0),u||d<9?l():z(l,d))}},ue=function(h){var p,A,f=99,s=function(){p=null,h()},i=function(){var l=o.now()-A;l<f?z(i,f-l):(C||s)(s)};return function(){A=o.now(),p||(p=z(i,f))}},le=function(){var h,p,A,f,s,i,l,u,d,P,I,V,We=/^img$/i,Ye=/^iframe$/i,qe="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),De=0,ne=0,j=0,Q=-1,Te=function(c){j--,(!c||j<0||!c.target)&&(j=0)},we=function(c){return V==null&&(V=D(n.body,"visibility")=="hidden"),V||!(D(c.parentNode,"visibility")=="hidden"&&D(c,"visibility")=="hidden")},$e=function(c,L){var w,x=c,k=we(c);for(u-=L,I+=L,d-=L,P+=L;k&&(x=x.offsetParent)&&x!=n.body&&x!=m;)k=(D(x,"opacity")||1)>0,k&&D(x,"overflow")!="visible"&&(w=x.getBoundingClientRect(),k=P>w.left&&d<w.right&&I>w.top-1&&u<w.bottom+1);return k},Pe=function(){var c,L,w,x,k,M,W,Y,J,q,G,Z,N=a.elements;if((f=e.loadMode)&&j<8&&(c=N.length)){for(L=0,Q++;L<c;L++)if(!(!N[L]||N[L]._lazyRace)){if(!qe||a.prematureUnveil&&a.prematureUnveil(N[L])){ie(N[L]);continue}if((!(Y=N[L][E]("data-expand"))||!(M=Y*1))&&(M=ne),q||(q=!e.expand||e.expand<1?m.clientHeight>500&&m.clientWidth>500?500:370:e.expand,a._defEx=q,G=q*e.expFactor,Z=e.hFac,V=null,ne<G&&j<1&&Q>2&&f>2&&!n.hidden?(ne=G,Q=0):f>1&&Q>1&&j<6?ne=q:ne=De),J!==M&&(i=innerWidth+M*Z,l=innerHeight+M,W=M*-1,J=M),w=N[L].getBoundingClientRect(),(I=w.bottom)>=W&&(u=w.top)<=l&&(P=w.right)>=W*Z&&(d=w.left)<=i&&(I||P||d||u)&&(e.loadHidden||we(N[L]))&&(p&&j<3&&!Y&&(f<3||Q<4)||$e(N[L],M))){if(ie(N[L]),k=!0,j>9)break}else!k&&p&&!x&&j<4&&Q<4&&f>2&&(h[0]||e.preloadAfterLoad)&&(h[0]||!Y&&(I||P||d||u||N[L][E](e.sizesAttr)!="auto"))&&(x=h[0]||N[L])}x&&!k&&ie(x)}},O=me(Pe),_e=function(c){var L=c.target;if(L._lazyCache){delete L._lazyCache;return}Te(c),H(L,e.loadedClass),K(L,e.loadingClass),ee(L,xe),R(L,"lazyloaded")},Ve=$(_e),xe=function(c){Ve({target:c.target})},Je=function(c,L){var w=c.getAttribute("data-load-mode")||e.iframeLoadMode;w==0?c.contentWindow.location.replace(L):w==1&&(c.src=L)},Xe=function(c){var L,w=c[E](e.srcsetAttr);(L=e.customMedia[c[E]("data-media")||c[E]("media")])&&c.setAttribute("media",L),w&&c.setAttribute("srcset",w)},Ge=$(function(c,L,w,x,k){var M,W,Y,J,q,G;(q=R(c,"lazybeforeunveil",L)).defaultPrevented||(x&&(w?H(c,e.autosizesClass):c.setAttribute("sizes",x)),W=c[E](e.srcsetAttr),M=c[E](e.srcAttr),k&&(Y=c.parentNode,J=Y&&g.test(Y.nodeName||"")),G=L.firesLoad||"src"in c&&(W||M||J),q={target:c},H(c,e.loadingClass),G&&(clearTimeout(A),A=z(Te,2500),ee(c,xe,!0)),J&&F.call(Y.getElementsByTagName("source"),Xe),W?c.setAttribute("srcset",W):M&&!J&&(Ye.test(c.nodeName)?Je(c,M):c.src=M),k&&(W||J)&&te(c,{src:M})),c._lazyRace&&delete c._lazyRace,K(c,e.lazyClass),X(function(){var Z=c.complete&&c.naturalWidth>1;(!G||Z)&&(Z&&H(c,e.fastLoadedClass),_e(q),c._lazyCache=!0,z(function(){"_lazyCache"in c&&delete c._lazyCache},9)),c.loading=="lazy"&&j--},!0)}),ie=function(c){if(!c._lazyRace){var L,w=We.test(c.nodeName),x=w&&(c[E](e.sizesAttr)||c[E]("sizes")),k=x=="auto";(k||!p)&&w&&(c[E]("src")||c.srcset)&&!c.complete&&!B(c,e.errorClass)&&B(c,e.lazyClass)||(L=R(c,"lazyunveilread").detail,k&&re.updateElem(c,!0,c.offsetWidth),c._lazyRace=!0,j++,Ge(c,L,k,x,w))}},Qe=ue(function(){e.loadMode=3,O()}),ke=function(){e.loadMode==3&&(e.loadMode=2),Qe()},fe=function(){if(!p){if(o.now()-s<999){z(fe,999);return}p=!0,e.loadMode=3,O(),S("scroll",ke,!0)}};return{_:function(){s=o.now(),a.elements=n.getElementsByClassName(e.lazyClass),h=n.getElementsByClassName(e.lazyClass+" "+e.preloadClass),S("scroll",O,!0),S("resize",O,!0),S("pageshow",function(c){if(c.persisted){var L=n.querySelectorAll("."+e.loadingClass);L.length&&L.forEach&&b(function(){L.forEach(function(w){w.complete&&ie(w)})})}}),t.MutationObserver?new MutationObserver(O).observe(m,{childList:!0,subtree:!0,attributes:!0}):(m[v]("DOMNodeInserted",O,!0),m[v]("DOMAttrModified",O,!0),setInterval(O,999)),S("hashchange",O,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(c){n[v](c,O,!0)}),/d$|^c/.test(n.readyState)?fe():(S("load",fe),n[v]("DOMContentLoaded",O),z(fe,2e4)),a.elements.length?(Pe(),X._lsFlush()):O()},checkElems:O,unveil:ie,_aLSL:ke}}(),re=function(){var h,p=$(function(i,l,u,d){var P,I,V;if(i._lazysizesWidth=d,d+="px",i.setAttribute("sizes",d),g.test(l.nodeName||""))for(P=l.getElementsByTagName("source"),I=0,V=P.length;I<V;I++)P[I].setAttribute("sizes",d);u.detail.dataAttr||te(i,u.detail)}),A=function(i,l,u){var d,P=i.parentNode;P&&(u=ce(i,P,u),d=R(i,"lazybeforesizes",{width:u,dataAttr:!!l}),d.defaultPrevented||(u=d.detail.width,u&&u!==i._lazysizesWidth&&p(i,P,d,u)))},f=function(){var i,l=h.length;if(l)for(i=0;i<l;i++)A(h[i])},s=ue(f);return{_:function(){h=n.getElementsByClassName(e.autosizesClass),S("resize",s)},checkElems:s,updateElem:A}}(),U=function(){!U.i&&n.getElementsByClassName&&(U.i=!0,re._(),le._())};return z(function(){e.init&&U()}),a={cfg:e,autoSizer:re,loader:le,init:U,uP:te,aC:H,rC:K,hC:B,fire:R,gW:ce,rAF:X},a})});var je=be((pt,Ce)=>{(function(r,t){var n=function(){t(r.lazySizes),r.removeEventListener("lazyunveilread",n,!0)};t=t.bind(null,r,r.document),typeof Ce=="object"&&Ce.exports?t(Ae()):typeof define=="function"&&define.amd?define(["lazysizes"],t):r.lazySizes?n():r.addEventListener("lazyunveilread",n,!0)})(window,function(r,t,n){"use strict";var o="loading"in HTMLImageElement.prototype,a="loading"in HTMLIFrameElement.prototype,e=!1,m=n.prematureUnveil,y=n.cfg,v={focus:1,mouseover:1,click:1,load:1,transitionend:1,animationend:1,scroll:1,resize:1};if(y.nativeLoading||(y.nativeLoading={}),!r.addEventListener||!r.MutationObserver||!o&&!a)return;function E(){var z=n.loader,b=z.checkElems,C=function(){setTimeout(function(){r.removeEventListener("scroll",z._aLSL,!0)},1e3)},g=typeof y.nativeLoading.disableListeners=="object"?y.nativeLoading.disableListeners:v;g.scroll&&(r.addEventListener("load",C),C(),r.removeEventListener("scroll",b,!0)),g.resize&&r.removeEventListener("resize",b,!0),Object.keys(g).forEach(function(T){g[T]&&t.removeEventListener(T,b,!0)})}function S(){e||(e=!0,o&&a&&y.nativeLoading.disableListeners&&(y.nativeLoading.disableListeners===!0&&(y.nativeLoading.setLoadingAttribute=!0),E()),y.nativeLoading.setLoadingAttribute&&r.addEventListener("lazybeforeunveil",function(z){var b=z.target;"loading"in b&&!b.getAttribute("loading")&&b.setAttribute("loading","lazy")},!0))}n.prematureUnveil=function(b){if(e||S(),"loading"in b&&(y.nativeLoading.setLoadingAttribute||b.getAttribute("loading"))&&(b.getAttribute("data-sizes")!="auto"||b.offsetWidth))return!0;if(m)return m(b)}})});var He=be((ae,Se)=>{(function(t,n){typeof ae=="object"&&typeof Se=="object"?Se.exports=n():typeof define=="function"&&define.amd?define([],n):typeof ae=="object"?ae.ClipboardJS=n():t.ClipboardJS=n()})(ae,function(){return function(){var r={686:function(o,a,e){"use strict";e.d(a,{default:function(){return A}});var m=e(279),y=e.n(m),v=e(370),E=e.n(v),S=e(817),z=e.n(S);function b(f){try{return document.execCommand(f)}catch(s){return!1}}var C=function(s){var i=z()(s);return b("cut"),i},g=C;function T(f){var s=document.documentElement.getAttribute("dir")==="rtl",i=document.createElement("textarea");i.style.fontSize="12pt",i.style.border="0",i.style.padding="0",i.style.margin="0",i.style.position="absolute",i.style[s?"right":"left"]="-9999px";var l=window.pageYOffset||document.documentElement.scrollTop;return i.style.top="".concat(l,"px"),i.setAttribute("readonly",""),i.value=f,i}var _=function(s,i){var l=T(s);i.container.appendChild(l);var u=z()(l);return b("copy"),l.remove(),u},F=function(s){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},l="";return typeof s=="string"?l=_(s,i):s instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(s==null?void 0:s.type)?l=_(s.value,i):(l=z()(s),b("copy")),l},B=F;function H(f){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?H=function(i){return typeof i}:H=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},H(f)}var K=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=s.action,l=i===void 0?"copy":i,u=s.container,d=s.target,P=s.text;if(l!=="copy"&&l!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(d!==void 0)if(d&&H(d)==="object"&&d.nodeType===1){if(l==="copy"&&d.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(l==="cut"&&(d.hasAttribute("readonly")||d.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(P)return B(P,{container:u});if(d)return l==="cut"?g(d):B(d,{container:u})},ee=K;function R(f){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?R=function(i){return typeof i}:R=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},R(f)}function te(f,s){if(!(f instanceof s))throw new TypeError("Cannot call a class as a function")}function D(f,s){for(var i=0;i<s.length;i++){var l=s[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(f,l.key,l)}}function ce(f,s,i){return s&&D(f.prototype,s),i&&D(f,i),f}function X(f,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function");f.prototype=Object.create(s&&s.prototype,{constructor:{value:f,writable:!0,configurable:!0}}),s&&$(f,s)}function $(f,s){return $=Object.setPrototypeOf||function(l,u){return l.__proto__=u,l},$(f,s)}function me(f){var s=re();return function(){var l=U(f),u;if(s){var d=U(this).constructor;u=Reflect.construct(l,arguments,d)}else u=l.apply(this,arguments);return ue(this,u)}}function ue(f,s){return s&&(R(s)==="object"||typeof s=="function")?s:le(f)}function le(f){if(f===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f}function re(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(f){return!1}}function U(f){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},U(f)}function h(f,s){var i="data-clipboard-".concat(f);if(s.hasAttribute(i))return s.getAttribute(i)}var p=function(f){X(i,f);var s=me(i);function i(l,u){var d;return te(this,i),d=s.call(this),d.resolveOptions(u),d.listenClick(l),d}return ce(i,[{key:"resolveOptions",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof u.action=="function"?u.action:this.defaultAction,this.target=typeof u.target=="function"?u.target:this.defaultTarget,this.text=typeof u.text=="function"?u.text:this.defaultText,this.container=R(u.container)==="object"?u.container:document.body}},{key:"listenClick",value:function(u){var d=this;this.listener=E()(u,"click",function(P){return d.onClick(P)})}},{key:"onClick",value:function(u){var d=u.delegateTarget||u.currentTarget,P=this.action(d)||"copy",I=ee({action:P,container:this.container,target:this.target(d),text:this.text(d)});this.emit(I?"success":"error",{action:P,text:I,trigger:d,clearSelection:function(){d&&d.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(u){return h("action",u)}},{key:"defaultTarget",value:function(u){var d=h("target",u);if(d)return document.querySelector(d)}},{key:"defaultText",value:function(u){return h("text",u)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(u){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return B(u,d)}},{key:"cut",value:function(u){return g(u)}},{key:"isSupported",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],d=typeof u=="string"?[u]:u,P=!!document.queryCommandSupported;return d.forEach(function(I){P=P&&!!document.queryCommandSupported(I)}),P}}]),i}(y()),A=p},828:function(o){var a=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}function m(y,v){for(;y&&y.nodeType!==a;){if(typeof y.matches=="function"&&y.matches(v))return y;y=y.parentNode}}o.exports=m},438:function(o,a,e){var m=e(828);function y(S,z,b,C,g){var T=E.apply(this,arguments);return S.addEventListener(b,T,g),{destroy:function(){S.removeEventListener(b,T,g)}}}function v(S,z,b,C,g){return typeof S.addEventListener=="function"?y.apply(null,arguments):typeof b=="function"?y.bind(null,document).apply(null,arguments):(typeof S=="string"&&(S=document.querySelectorAll(S)),Array.prototype.map.call(S,function(T){return y(T,z,b,C,g)}))}function E(S,z,b,C){return function(g){g.delegateTarget=m(g.target,z),g.delegateTarget&&C.call(S,g)}}o.exports=v},879:function(o,a){a.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},a.nodeList=function(e){var m=Object.prototype.toString.call(e);return e!==void 0&&(m==="[object NodeList]"||m==="[object HTMLCollection]")&&"length"in e&&(e.length===0||a.node(e[0]))},a.string=function(e){return typeof e=="string"||e instanceof String},a.fn=function(e){var m=Object.prototype.toString.call(e);return m==="[object Function]"}},370:function(o,a,e){var m=e(879),y=e(438);function v(b,C,g){if(!b&&!C&&!g)throw new Error("Missing required arguments");if(!m.string(C))throw new TypeError("Second argument must be a String");if(!m.fn(g))throw new TypeError("Third argument must be a Function");if(m.node(b))return E(b,C,g);if(m.nodeList(b))return S(b,C,g);if(m.string(b))return z(b,C,g);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function E(b,C,g){return b.addEventListener(C,g),{destroy:function(){b.removeEventListener(C,g)}}}function S(b,C,g){return Array.prototype.forEach.call(b,function(T){T.addEventListener(C,g)}),{destroy:function(){Array.prototype.forEach.call(b,function(T){T.removeEventListener(C,g)})}}}function z(b,C,g){return y(document.body,b,C,g)}o.exports=v},817:function(o){function a(e){var m;if(e.nodeName==="SELECT")e.focus(),m=e.value;else if(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){var y=e.hasAttribute("readonly");y||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),y||e.removeAttribute("readonly"),m=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var v=window.getSelection(),E=document.createRange();E.selectNodeContents(e),v.removeAllRanges(),v.addRange(E),m=v.toString()}return m}o.exports=a},279:function(o){function a(){}a.prototype={on:function(e,m,y){var v=this.e||(this.e={});return(v[e]||(v[e]=[])).push({fn:m,ctx:y}),this},once:function(e,m,y){var v=this;function E(){v.off(e,E),m.apply(y,arguments)}return E._=m,this.on(e,E,y)},emit:function(e){var m=[].slice.call(arguments,1),y=((this.e||(this.e={}))[e]||[]).slice(),v=0,E=y.length;for(v;v<E;v++)y[v].fn.apply(y[v].ctx,m);return this},off:function(e,m){var y=this.e||(this.e={}),v=y[e],E=[];if(v&&m)for(var S=0,z=v.length;S<z;S++)v[S].fn!==m&&v[S].fn._!==m&&E.push(v[S]);return E.length?y[e]=E:delete y[e],this}},o.exports=a,o.exports.TinyEmitter=a}},t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={exports:{}};return r[o](a,a.exports,n),a.exports}return function(){n.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(a,{a}),a}}(),function(){n.d=function(o,a){for(var e in a)n.o(a,e)&&!n.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:a[e]})}}(),function(){n.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)}}(),n(686)}().default})});function Me(r){return new Promise(function(t,n,o){(o=new XMLHttpRequest).open("GET",r,o.withCredentials=!0),o.onload=function(){o.status===200?t():n()},o.send()})}var Le,it=(Le=document.createElement("link")).relList&&Le.relList.supports&&Le.relList.supports("prefetch")?function(r){return new Promise(function(t,n,o){(o=document.createElement("link")).rel="prefetch",o.href=r,o.onload=t,o.onerror=n,document.head.appendChild(o)})}:Me,ot=window.requestIdleCallback||function(r){var t=Date.now();return setTimeout(function(){r({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},oe=new Set,pe=new Set,ve=!1;function Oe(r){if(r){if(r.saveData)return new Error("Save-Data is enabled");if(/2g/.test(r.effectiveType))return new Error("network conditions are poor")}return!0}function Ne(r){if(r||(r={}),window.IntersectionObserver){var t=function(C){C=C||1;var g=[],T=0;function _(){T<C&&g.length>0&&(g.shift()(),T++)}return[function(F){g.push(F)>1||_()},function(){T--,_()}]}(r.throttle||1/0),n=t[0],o=t[1],a=r.limit||1/0,e=r.origins||[location.hostname],m=r.ignores||[],y=r.delay||0,v=[],E=r.timeoutFn||ot,S=typeof r.hrefFn=="function"&&r.hrefFn,z=r.prerender||!1;ve=r.prerenderAndPrefetch||!1;var b=new IntersectionObserver(function(C){C.forEach(function(g){if(g.isIntersecting)v.push((g=g.target).href),function(_,F){F?setTimeout(_,F):_()}(function(){v.indexOf(g.href)!==-1&&(b.unobserve(g),(ve||z)&&pe.size<1?at(S?S(g):g.href).catch(function(_){if(!r.onError)throw _;r.onError(_)}):oe.size<a&&!z&&n(function(){Re(S?S(g):g.href,r.priority).then(o).catch(function(_){o(),r.onError&&r.onError(_)})}))},y);else{var T=v.indexOf((g=g.target).href);T>-1&&v.splice(T)}})},{threshold:r.threshold||0});return E(function(){(r.el||document).querySelectorAll("a").forEach(function(C){e.length&&!e.includes(C.hostname)||function g(T,_){return Array.isArray(_)?_.some(function(F){return g(T,F)}):(_.test||_).call(_,T.href,T)}(C,m)||b.observe(C)})},{timeout:r.timeout||2e3}),function(){oe.clear(),b.disconnect()}}}function Re(r,t,n){var o=Oe(navigator.connection);return o instanceof Error?Promise.reject(new Error("Cannot prefetch, "+o.message)):(pe.size>0&&!ve&&console.warn("[Warning] You are using both prefetching and prerendering on the same document"),Promise.all([].concat(r).map(function(a){if(!oe.has(a))return oe.add(a),(t?function(e){return window.fetch?fetch(e,{credentials:"include"}):Me(e)}:it)(new URL(a,location.href).toString())})))}function at(r,t){var n=Oe(navigator.connection);if(n instanceof Error)return Promise.reject(new Error("Cannot prerender, "+n.message));if(!HTMLScriptElement.supports("speculationrules"))return Re(r),Promise.reject(new Error("This browser does not support the speculation rules API. Falling back to prefetch."));if(document.querySelector('script[type="speculationrules"]'))return Promise.reject(new Error("Speculation Rules is already defined and cannot be altered."));for(var o=0,a=[].concat(r);o<a.length;o+=1){var e=a[o];if(window.location.origin!==new URL(e,window.location.href).origin)return Promise.reject(new Error("Only same origin URLs are allowed: "+e));pe.add(e)}oe.size>0&&!ve&&console.warn("[Warning] You are using both prefetching and prerendering on the same document");var m=function(y){var v=document.createElement("script");v.type="speculationrules",v.text='{"prerender":[{"source": "list","urls": ["'+Array.from(y).join('","')+'"]}]}';try{document.head.appendChild(v)}catch(E){return E}return!0}(pe);return m===!0?Promise.resolve():Promise.reject(m)}var Fe=Ee(Ae()),ht=Ee(je());Ne();Fe.default.cfg.nativeLoading={setLoadingAttribute:!0,disableListeners:{scroll:!0}};var Be=Ee(He());(()=>{"use strict";for(var r=document.getElementsByClassName("highlight"),t=0;t<r.length;++t){var n=r[t];n.insertAdjacentHTML("afterbegin",'<div class="copy"><button title="Copy to clipboard" class="btn-copy" aria-label="Clipboard button"><div></div></button></div>')}var o=new Be.default(".btn-copy",{target:function(a){return a.parentNode.nextElementSibling}});o.on("success",function(a){a.clearSelection()}),o.on("error",function(a){console.error("Action:",a.action),console.error("Trigger:",a.trigger)})})();var se=document.getElementById("toTop");se!==null&&(se.classList.remove("fade"),window.onscroll=function(){st()},se.addEventListener("click",ct));function st(){document.body.scrollTop>270||document.documentElement.scrollTop>270?se.classList.add("fade"):se.classList.remove("fade")}function ct(){document.body.scrollTop=0,document.documentElement.scrollTop=0}var ge,ye=document.querySelectorAll("[data-toggle-tab]"),ut=document.querySelectorAll("[data-pane]");function Ue(r){if(r.target){r.preventDefault();var t=r.currentTarget,n=t.getAttribute("data-toggle-tab")}else var n=r;window.localStorage&&window.localStorage.setItem("configLangPref",n);for(var o=document.querySelectorAll("[data-toggle-tab="+n+"]"),a=document.querySelectorAll("[data-pane="+n+"]"),e=0;e<ye.length;e++)ye[e].classList.remove("active"),ut[e].classList.remove("active");for(var e=0;e<o.length;e++)o[e].classList.add("active"),a[e].classList.add("show","active")}for(ge=0;ge<ye.length;ge++)ye[ge].addEventListener("click",Ue);window.localStorage.getItem("configLangPref")&&Ue(window.localStorage.getItem("configLangPref"));var ze=class r extends HTMLElement{connectedCallback(){this.videoId=this.getAttribute("videoid");let t=this.querySelector(".lty-playbtn");if(this.playLabel=t&&t.textContent.trim()||this.getAttribute("playlabel")||"Play",this.dataset.title=this.getAttribute("title")||"",this.style.backgroundImage||(this.style.backgroundImage=`url("https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg")`,this.upgradePosterImage()),t||(t=document.createElement("button"),t.type="button",t.classList.add("lty-playbtn"),this.append(t)),!t.textContent){let n=document.createElement("span");n.className="lyt-visually-hidden",n.textContent=this.playLabel,t.append(n)}this.addNoscriptIframe(),t.removeAttribute("href"),this.addEventListener("pointerover",r.warmConnections,{once:!0}),this.addEventListener("click",this.activate),this.needsYTApi=this.hasAttribute("js-api")||navigator.vendor.includes("Apple")||navigator.userAgent.includes("Mobi")}static addPrefetch(t,n,o){let a=document.createElement("link");a.rel=t,a.href=n,o&&(a.as=o),document.head.append(a)}static warmConnections(){r.preconnected||(r.addPrefetch("preconnect","https://www.youtube-nocookie.com"),r.addPrefetch("preconnect","https://www.google.com"),r.addPrefetch("preconnect","https://googleads.g.doubleclick.net"),r.addPrefetch("preconnect","https://static.doubleclick.net"),r.preconnected=!0)}fetchYTPlayerApi(){window.YT||window.YT&&window.YT.Player||(this.ytApiPromise=new Promise((t,n)=>{var o=document.createElement("script");o.src="https://www.youtube.com/iframe_api",o.async=!0,o.onload=a=>{YT.ready(t)},o.onerror=n,this.append(o)}))}getYTPlayer(){return de(this,null,function*(){return this.playerPromise||(yield this.activate()),this.playerPromise})}addYTPlayerIframe(){return de(this,null,function*(){this.fetchYTPlayerApi(),yield this.ytApiPromise;let t=document.createElement("div");this.append(t);let n=Object.fromEntries(this.getParams().entries());this.playerPromise=new Promise(o=>{let a=new YT.Player(t,{width:"100%",videoId:this.videoId,playerVars:n,events:{onReady:e=>{e.target.playVideo(),o(a)}}})})})}addNoscriptIframe(){let t=this.createBasicIframe(),n=document.createElement("noscript");n.innerHTML=t.outerHTML,this.append(n)}getParams(){let t=new URLSearchParams(this.getAttribute("params")||[]);return t.append("autoplay","1"),t.append("playsinline","1"),t}activate(){return de(this,null,function*(){if(this.classList.contains("lyt-activated"))return;if(this.classList.add("lyt-activated"),this.needsYTApi)return this.addYTPlayerIframe(this.getParams());let t=this.createBasicIframe();this.append(t),t.focus()})}createBasicIframe(){let t=document.createElement("iframe");return t.width=560,t.height=315,t.title=this.playLabel,t.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",t.allowFullscreen=!0,t.src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${this.getParams().toString()}`,t}upgradePosterImage(){setTimeout(()=>{let t=`https://i.ytimg.com/vi_webp/${this.videoId}/sddefault.webp`,n=new Image;n.fetchPriority="low",n.referrerpolicy="origin",n.src=t,n.onload=o=>{o.target.naturalHeight==90&&o.target.naturalWidth==120||(this.style.backgroundImage=`url("${t}")`)}},100)}};customElements.define("lite-youtube",ze);})();
/*! Bundled license information:

clipboard/dist/clipboard.js:
  (*!
   * clipboard.js v2.0.11
   * https://clipboardjs.com/
   *
   * Licensed MIT © Zeno Rocha
   *)

@hyas/doks-core/assets/js/clipboard.js:
  (*!
   * clipboard.js for Bootstrap based Hyas sites
   * Copyright 2021-2023 Hyas
   * Licensed under the MIT License
   *)
*/
