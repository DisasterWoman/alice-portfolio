(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function bS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Zf={exports:{}},re={};var E0;function AS(){if(E0)return re;E0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,x={};function g(N,at,St){this.props=N,this.context=at,this.refs=x,this.updater=St||T}g.prototype.isReactComponent={},g.prototype.setState=function(N,at){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,at,"setState")},g.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function P(){}P.prototype=g.prototype;function U(N,at,St){this.props=N,this.context=at,this.refs=x,this.updater=St||T}var D=U.prototype=new P;D.constructor=U,C(D,g.prototype),D.isPureReactComponent=!0;var V=Array.isArray;function F(){}var L={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function R(N,at,St){var j=St.ref;return{$$typeof:o,type:N,key:at,ref:j!==void 0?j:null,props:St}}function A(N,at){return R(N.type,at,N.props)}function B(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function tt(N){var at={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(St){return at[St]})}var et=/\/+/g;function lt(N,at){return typeof N=="object"&&N!==null&&N.key!=null?tt(""+N.key):at.toString(36)}function ht(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(F,F):(N.status="pending",N.then(function(at){N.status==="pending"&&(N.status="fulfilled",N.value=at)},function(at){N.status==="pending"&&(N.status="rejected",N.reason=at)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,at,St,j,ft){var bt=typeof N;(bt==="undefined"||bt==="boolean")&&(N=null);var Mt=!1;if(N===null)Mt=!0;else switch(bt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(N.$$typeof){case o:case e:Mt=!0;break;case y:return Mt=N._init,z(Mt(N._payload),at,St,j,ft)}}if(Mt)return ft=ft(N),Mt=j===""?"."+lt(N,0):j,V(ft)?(St="",Mt!=null&&(St=Mt.replace(et,"$&/")+"/"),z(ft,at,St,"",function(Jt){return Jt})):ft!=null&&(B(ft)&&(ft=A(ft,St+(ft.key==null||N&&N.key===ft.key?"":(""+ft.key).replace(et,"$&/")+"/")+Mt)),at.push(ft)),1;Mt=0;var zt=j===""?".":j+":";if(V(N))for(var Qt=0;Qt<N.length;Qt++)j=N[Qt],bt=zt+lt(j,Qt),Mt+=z(j,at,St,bt,ft);else if(Qt=M(N),typeof Qt=="function")for(N=Qt.call(N),Qt=0;!(j=N.next()).done;)j=j.value,bt=zt+lt(j,Qt++),Mt+=z(j,at,St,bt,ft);else if(bt==="object"){if(typeof N.then=="function")return z(ht(N),at,St,j,ft);throw at=String(N),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function K(N,at,St){if(N==null)return N;var j=[],ft=0;return z(N,j,"","",function(bt){return at.call(St,bt,ft++)}),j}function Z(N){if(N._status===-1){var at=N._result;at=at(),at.then(function(St){(N._status===0||N._status===-1)&&(N._status=1,N._result=St)},function(St){(N._status===0||N._status===-1)&&(N._status=2,N._result=St)}),N._status===-1&&(N._status=0,N._result=at)}if(N._status===1)return N._result.default;throw N._result}var xt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Rt={map:K,forEach:function(N,at,St){K(N,function(){at.apply(this,arguments)},St)},count:function(N){var at=0;return K(N,function(){at++}),at},toArray:function(N){return K(N,function(at){return at})||[]},only:function(N){if(!B(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return re.Activity=v,re.Children=Rt,re.Component=g,re.Fragment=i,re.Profiler=l,re.PureComponent=U,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return L.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(N,at,St){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var j=C({},N.props),ft=N.key;if(at!=null)for(bt in at.key!==void 0&&(ft=""+at.key),at)!k.call(at,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&at.ref===void 0||(j[bt]=at[bt]);var bt=arguments.length-2;if(bt===1)j.children=St;else if(1<bt){for(var Mt=Array(bt),zt=0;zt<bt;zt++)Mt[zt]=arguments[zt+2];j.children=Mt}return R(N.type,ft,j)},re.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},re.createElement=function(N,at,St){var j,ft={},bt=null;if(at!=null)for(j in at.key!==void 0&&(bt=""+at.key),at)k.call(at,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(ft[j]=at[j]);var Mt=arguments.length-2;if(Mt===1)ft.children=St;else if(1<Mt){for(var zt=Array(Mt),Qt=0;Qt<Mt;Qt++)zt[Qt]=arguments[Qt+2];ft.children=zt}if(N&&N.defaultProps)for(j in Mt=N.defaultProps,Mt)ft[j]===void 0&&(ft[j]=Mt[j]);return R(N,bt,ft)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:d,render:N}},re.isValidElement=B,re.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:Z}},re.memo=function(N,at){return{$$typeof:p,type:N,compare:at===void 0?null:at}},re.startTransition=function(N){var at=L.T,St={};L.T=St;try{var j=N(),ft=L.S;ft!==null&&ft(St,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(F,xt)}catch(bt){xt(bt)}finally{at!==null&&St.types!==null&&(at.types=St.types),L.T=at}},re.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},re.use=function(N){return L.H.use(N)},re.useActionState=function(N,at,St){return L.H.useActionState(N,at,St)},re.useCallback=function(N,at){return L.H.useCallback(N,at)},re.useContext=function(N){return L.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,at){return L.H.useDeferredValue(N,at)},re.useEffect=function(N,at){return L.H.useEffect(N,at)},re.useEffectEvent=function(N){return L.H.useEffectEvent(N)},re.useId=function(){return L.H.useId()},re.useImperativeHandle=function(N,at,St){return L.H.useImperativeHandle(N,at,St)},re.useInsertionEffect=function(N,at){return L.H.useInsertionEffect(N,at)},re.useLayoutEffect=function(N,at){return L.H.useLayoutEffect(N,at)},re.useMemo=function(N,at){return L.H.useMemo(N,at)},re.useOptimistic=function(N,at){return L.H.useOptimistic(N,at)},re.useReducer=function(N,at,St){return L.H.useReducer(N,at,St)},re.useRef=function(N){return L.H.useRef(N)},re.useState=function(N){return L.H.useState(N)},re.useSyncExternalStore=function(N,at,St){return L.H.useSyncExternalStore(N,at,St)},re.useTransition=function(){return L.H.useTransition()},re.version="19.2.7",re}var T0;function bd(){return T0||(T0=1,Zf.exports=AS()),Zf.exports}var Pi=bd();const _t=bS(Pi);var Kf={exports:{}},Ao={},Qf={exports:{}},Jf={};var b0;function RS(){return b0||(b0=1,(function(o){function e(z,K){var Z=z.length;z.push(K);t:for(;0<Z;){var xt=Z-1>>>1,Rt=z[xt];if(0<l(Rt,K))z[xt]=K,z[Z]=Rt,Z=xt;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],Z=z.pop();if(Z!==K){z[0]=Z;t:for(var xt=0,Rt=z.length,N=Rt>>>1;xt<N;){var at=2*(xt+1)-1,St=z[at],j=at+1,ft=z[j];if(0>l(St,Z))j<Rt&&0>l(ft,St)?(z[xt]=ft,z[j]=Z,xt=j):(z[xt]=St,z[at]=Z,xt=at);else if(j<Rt&&0>l(ft,Z))z[xt]=ft,z[j]=Z,xt=j;else break t}}return K}function l(z,K){var Z=z.sortIndex-K.sortIndex;return Z!==0?Z:z.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],y=1,v=null,S=3,M=!1,T=!1,C=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(z){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=z)r(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function V(z){if(C=!1,D(z),!T)if(i(m)!==null)T=!0,F||(F=!0,tt());else{var K=i(p);K!==null&&ht(V,K.startTime-z)}}var F=!1,L=-1,k=5,R=-1;function A(){return x?!0:!(o.unstable_now()-R<k)}function B(){if(x=!1,F){var z=o.unstable_now();R=z;var K=!0;try{t:{T=!1,C&&(C=!1,P(L),L=-1),M=!0;var Z=S;try{e:{for(D(z),v=i(m);v!==null&&!(v.expirationTime>z&&A());){var xt=v.callback;if(typeof xt=="function"){v.callback=null,S=v.priorityLevel;var Rt=xt(v.expirationTime<=z);if(z=o.unstable_now(),typeof Rt=="function"){v.callback=Rt,D(z),K=!0;break e}v===i(m)&&r(m),D(z)}else r(m);v=i(m)}if(v!==null)K=!0;else{var N=i(p);N!==null&&ht(V,N.startTime-z),K=!1}}break t}finally{v=null,S=Z,M=!1}K=void 0}}finally{K?tt():F=!1}}}var tt;if(typeof U=="function")tt=function(){U(B)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,lt=et.port2;et.port1.onmessage=B,tt=function(){lt.postMessage(null)}}else tt=function(){g(B,0)};function ht(z,K){L=g(function(){z(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(z){switch(S){case 1:case 2:case 3:var K=3;break;default:K=S}var Z=S;S=K;try{return z()}finally{S=Z}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=S;S=z;try{return K()}finally{S=Z}},o.unstable_scheduleCallback=function(z,K,Z){var xt=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?xt+Z:xt):Z=xt,z){case 1:var Rt=-1;break;case 2:Rt=250;break;case 5:Rt=1073741823;break;case 4:Rt=1e4;break;default:Rt=5e3}return Rt=Z+Rt,z={id:y++,callback:K,priorityLevel:z,startTime:Z,expirationTime:Rt,sortIndex:-1},Z>xt?(z.sortIndex=Z,e(p,z),i(m)===null&&z===i(p)&&(C?(P(L),L=-1):C=!0,ht(V,Z-xt))):(z.sortIndex=Rt,e(m,z),T||M||(T=!0,F||(F=!0,tt()))),z},o.unstable_shouldYield=A,o.unstable_wrapCallback=function(z){var K=S;return function(){var Z=S;S=K;try{return z.apply(this,arguments)}finally{S=Z}}}})(Jf)),Jf}var A0;function CS(){return A0||(A0=1,Qf.exports=RS()),Qf.exports}var $f={exports:{}},Cn={};var R0;function wS(){if(R0)return Cn;R0=1;var o=bd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:y}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(m,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,y)},Cn.flushSync=function(m){var p=h.T,y=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=y,r.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var y=p.as,v=d(y,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:M}):y==="script"&&r.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,v=d(y,p.crossOrigin);r.d.L(m,y,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var y=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Cn.requestFormReset=function(m){r.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,y){return h.H.useFormState(m,p,y)},Cn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Cn.version="19.2.7",Cn}var C0;function DS(){if(C0)return $f.exports;C0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),$f.exports=wS(),$f.exports}var w0;function US(){if(w0)return Ao;w0=1;var o=CS(),e=bd(),i=DS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var _=!1,b=c.child;b;){if(b===a){_=!0,a=c,s=f;break}if(b===s){_=!0,s=c,a=f;break}b=b.sibling}if(!_){for(b=f.child;b;){if(b===a){_=!0,a=f,s=c;break}if(b===s){_=!0,s=f,a=c;break}b=b.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function tt(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var et=Symbol.for("react.client.reference");function lt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===et?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case g:return"Profiler";case x:return"StrictMode";case V:return"Suspense";case F:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case U:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case L:return n=t.displayName||null,n!==null?n:lt(t.type)||"Memo";case k:n=t._payload,t=t._init;try{return lt(t(n))}catch{}}return null}var ht=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},xt=[],Rt=-1;function N(t){return{current:t}}function at(t){0>Rt||(t.current=xt[Rt],xt[Rt]=null,Rt--)}function St(t,n){Rt++,xt[Rt]=t.current,t.current=n}var j=N(null),ft=N(null),bt=N(null),Mt=N(null);function zt(t,n){switch(St(bt,n),St(ft,t),St(j,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?qg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=qg(n),t=Yg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}at(j),St(j,t)}function Qt(){at(j),at(ft),at(bt)}function Jt(t){t.memoizedState!==null&&St(Mt,t);var n=j.current,a=Yg(n,t.type);n!==a&&(St(ft,t),St(j,a))}function Ne(t){ft.current===t&&(at(j),at(ft)),Mt.current===t&&(at(Mt),Mo._currentValue=Z)}var Ve,Te;function H(t){if(Ve===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ve=n&&n[1]||"",Te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ve+t+Te}var un=!1;function Se(t,n){if(!t||un)return"";un=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var it=ot}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(ot){it=ot}t.call(mt.prototype)}}else{try{throw Error()}catch(ot){it=ot}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&it&&typeof ot.stack=="string")return[ot.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],b=f[1];if(_&&b){var I=_.split(`
`),$=b.split(`
`);for(c=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===I.length||c===$.length)for(s=I.length-1,c=$.length-1;1<=s&&0<=c&&I[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(I[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||I[s]!==$[c]){var ut=`
`+I[s].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=s&&0<=c);break}}}finally{un=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?H(a):""}function Oe(t,n){switch(t.tag){case 26:case 27:case 5:return H(t.type);case 16:return H("Lazy");case 13:return t.child!==n&&n!==null?H("Suspense Fallback"):H("Suspense");case 19:return H("SuspenseList");case 0:case 15:return Se(t.type,!1);case 11:return Se(t.type.render,!1);case 1:return Se(t.type,!0);case 31:return H("Activity");default:return""}}function kt(t){try{var n="",a=null;do n+=Oe(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var me=Object.prototype.hasOwnProperty,jt=o.unstable_scheduleCallback,ae=o.unstable_cancelCallback,tn=o.unstable_shouldYield,O=o.unstable_requestPaint,E=o.unstable_now,nt=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,ct=o.unstable_NormalPriority,Xt=o.unstable_LowPriority,wt=o.unstable_IdlePriority,Gt=o.log,Wt=o.unstable_setDisableYieldValue,yt=null,Ct=null;function qt(t){if(typeof Gt=="function"&&Wt(t),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(yt,t)}catch{}}var Ht=Math.clz32?Math.clz32:X,Dt=Math.log,ne=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Dt(t)/ne|0)|0}var Ut=256,Et=262144,Bt=4194304;function Tt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?c=Tt(s):(_&=b,_!==0?c=Tt(_):a||(a=b&~t,a!==0&&(c=Tt(a))))):(b=s&~f,b!==0?c=Tt(b):_!==0?c=Tt(_):a||(a=s&~t,a!==0&&(c=Tt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function It(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var t=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),t}function be(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function vn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function pi(t,n,a,s,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,I=t.expirationTimes,$=t.hiddenUpdates;for(a=_&~a;0<a;){var ut=31-Ht(a),mt=1<<ut;b[ut]=0,I[ut]=-1;var it=$[ut];if(it!==null)for($[ut]=null,ut=0;ut<it.length;ut++){var ot=it[ut];ot!==null&&(ot.lane&=-536870913)}a&=~mt}s!==0&&Ns(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Ns(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ht(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Os(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ht(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Ai(t,n){var a=n&-n;return a=(a&42)!==0?1:Ya(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ya(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Cr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function zs(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:g0(t.type))}function ja(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var mi=Math.random().toString(36).slice(2),Ke="__reactFiber$"+mi,yn="__reactProps$"+mi,Fi="__reactContainer$"+mi,Ps="__reactEvents$"+mi,Vc="__reactListeners$"+mi,kc="__reactHandles$"+mi,qo="__reactResources$"+mi,Za="__reactMarker$"+mi;function Bs(t){delete t[Ke],delete t[yn],delete t[Ps],delete t[Vc],delete t[kc]}function w(t){var n=t[Ke];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Fi]||a[Ke]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=t0(t);t!==null;){if(a=t[Ke])return a;t=t0(t)}return n}t=a,a=t.parentNode}return null}function q(t){if(t=t[Ke]||t[Fi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function rt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function st(t){var n=t[qo];return n||(n=t[qo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function W(t){t[Za]=!0}var At=new Set,Lt={};function Pt(t,n){Ot(t,n),Ot(t+"Capture",n)}function Ot(t,n){for(Lt[t]=n,t=0;t<n.length;t++)At.add(n[t])}var te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},Yt={};function fe(t){return me.call(Yt,t)?!0:me.call(ee,t)?!1:te.test(t)?Yt[t]=!0:(ee[t]=!0,!1)}function Ae(t,n,a){if(fe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ke(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function xe(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function ce(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function We(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ge(t){if(!t._valueTracker){var n=Kt(t)?"checked":"value";t._valueTracker=We(t,n,""+t[n])}}function An(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Kt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function gi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Un=/[\n"\\]/g;function mn(t){return t.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pe(t,n,a,s,c,f,_,b){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ce(n)):t.value!==""+ce(n)&&(t.value=""+ce(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?Rn(t,_,ce(n)):a!=null?Rn(t,_,ce(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+ce(b):t.removeAttribute("name")}function Ln(t,n,a,s,c,f,_,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ge(t);return}a=a!=null?""+ce(a):"",n=n!=null?""+ce(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),ge(t)}function Rn(t,n,a){n==="number"&&gi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Qe(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ce(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Sn(t,n,a){if(n!=null&&(n=""+ce(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ce(a):""}function wr(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ht(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ce(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),ge(t)}function Pn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Sv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Sv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Xd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&kd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&kd(t,f,n[f])}function Xc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(t){return Mv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Hi(){}var Wc=null;function qc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dr=null,Ur=null;function Wd(t){var n=q(t);if(n&&(t=n.stateNode)){var a=t[yn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Pe(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[yn]||null;if(!c)throw Error(r(90));Pe(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&An(s)}break t;case"textarea":Sn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qe(t,!!a.multiple,n,!1)}}}var Yc=!1;function qd(t,n,a){if(Yc)return t(n,a);Yc=!0;try{var s=t(n);return s}finally{if(Yc=!1,(Dr!==null||Ur!==null)&&(Ol(),Dr&&(n=Dr,t=Ur,Ur=Dr=null,Wd(n),t)))for(n=0;n<t.length;n++)Wd(t[n])}}function Is(t,n){var a=t.stateNode;if(a===null)return null;var s=a[yn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=!1;if(Gi)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){jc=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{jc=!1}var da=null,Zc=null,jo=null;function Yd(){if(jo)return jo;var t,n=Zc,a=n.length,s,c="value"in da?da.value:da.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===c[f-s];s++);return jo=c.slice(t,1<s?1-s:void 0)}function Zo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ko(){return!0}function jd(){return!1}function Bn(t){function n(a,s,c,f,_){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ko:jd,this.isPropagationStopped=jd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qo=Bn(Ka),Hs=v({},Ka,{view:0,detail:0}),Ev=Bn(Hs),Kc,Qc,Gs,Jo=v({},Hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$c,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gs&&(Gs&&t.type==="mousemove"?(Kc=t.screenX-Gs.screenX,Qc=t.screenY-Gs.screenY):Qc=Kc=0,Gs=t),Kc)},movementY:function(t){return"movementY"in t?t.movementY:Qc}}),Zd=Bn(Jo),Tv=v({},Jo,{dataTransfer:0}),bv=Bn(Tv),Av=v({},Hs,{relatedTarget:0}),Jc=Bn(Av),Rv=v({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Cv=Bn(Rv),wv=v({},Ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dv=Bn(wv),Uv=v({},Ka,{data:0}),Kd=Bn(Uv),Lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ov[t])?!!n[t]:!1}function $c(){return zv}var Pv=v({},Hs,{key:function(t){if(t.key){var n=Lv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Nv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$c,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bv=Bn(Pv),Iv=v({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=Bn(Iv),Fv=v({},Hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$c}),Hv=Bn(Fv),Gv=v({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vv=Bn(Gv),kv=v({},Jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xv=Bn(kv),Wv=v({},Ka,{newState:0,oldState:0}),qv=Bn(Wv),Yv=[9,13,27,32],tu=Gi&&"CompositionEvent"in window,Vs=null;Gi&&"documentMode"in document&&(Vs=document.documentMode);var jv=Gi&&"TextEvent"in window&&!Vs,Jd=Gi&&(!tu||Vs&&8<Vs&&11>=Vs),$d=" ",tp=!1;function ep(t,n){switch(t){case"keyup":return Yv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Lr=!1;function Zv(t,n){switch(t){case"compositionend":return np(n);case"keypress":return n.which!==32?null:(tp=!0,$d);case"textInput":return t=n.data,t===$d&&tp?null:t;default:return null}}function Kv(t,n){if(Lr)return t==="compositionend"||!tu&&ep(t,n)?(t=Yd(),jo=Zc=da=null,Lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jd&&n.locale!=="ko"?null:n.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Qv[t.type]:n==="textarea"}function ap(t,n,a,s){Dr?Ur?Ur.push(s):Ur=[s]:Dr=s,n=Gl(n,"onChange"),0<n.length&&(a=new Qo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var ks=null,Xs=null;function Jv(t){Hg(t,0)}function $o(t){var n=rt(t);if(An(n))return t}function rp(t,n){if(t==="change")return n}var sp=!1;if(Gi){var eu;if(Gi){var nu="oninput"in document;if(!nu){var op=document.createElement("div");op.setAttribute("oninput","return;"),nu=typeof op.oninput=="function"}eu=nu}else eu=!1;sp=eu&&(!document.documentMode||9<document.documentMode)}function lp(){ks&&(ks.detachEvent("onpropertychange",cp),Xs=ks=null)}function cp(t){if(t.propertyName==="value"&&$o(Xs)){var n=[];ap(n,Xs,t,qc(t)),qd(Jv,n)}}function $v(t,n,a){t==="focusin"?(lp(),ks=n,Xs=a,ks.attachEvent("onpropertychange",cp)):t==="focusout"&&lp()}function ty(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $o(Xs)}function ey(t,n){if(t==="click")return $o(n)}function ny(t,n){if(t==="input"||t==="change")return $o(n)}function iy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:iy;function Ws(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!me.call(n,c)||!jn(t[c],n[c]))return!1}return!0}function up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fp(t,n){var a=up(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=up(a)}}function hp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?hp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function dp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gi(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=gi(t.document)}return n}function iu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ay=Gi&&"documentMode"in document&&11>=document.documentMode,Nr=null,au=null,qs=null,ru=!1;function pp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ru||Nr==null||Nr!==gi(s)||(s=Nr,"selectionStart"in s&&iu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),qs&&Ws(qs,s)||(qs=s,s=Gl(au,"onSelect"),0<s.length&&(n=new Qo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Nr)))}function Qa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Or={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},su={},mp={};Gi&&(mp=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function Ja(t){if(su[t])return su[t];if(!Or[t])return t;var n=Or[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in mp)return su[t]=n[a];return t}var gp=Ja("animationend"),_p=Ja("animationiteration"),vp=Ja("animationstart"),ry=Ja("transitionrun"),sy=Ja("transitionstart"),oy=Ja("transitioncancel"),yp=Ja("transitionend"),Sp=new Map,ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ou.push("scrollEnd");function _i(t,n){Sp.set(t,n),Pt(n,[t])}var tl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ii=[],zr=0,lu=0;function el(){for(var t=zr,n=lu=zr=0;n<t;){var a=ii[n];ii[n++]=null;var s=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,s!==null&&c!==null){var _=s.pending;_===null?c.next=c:(c.next=_.next,_.next=c),s.pending=c}f!==0&&xp(a,c,f)}}function nl(t,n,a,s){ii[zr++]=t,ii[zr++]=n,ii[zr++]=a,ii[zr++]=s,lu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function cu(t,n,a,s){return nl(t,n,a,s),il(t)}function $a(t,n){return nl(t,null,null,n),il(t)}function xp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Ht(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function il(t){if(50<mo)throw mo=0,yf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Pr={};function ly(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,s){return new ly(t,n,a,s)}function uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vi(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Mp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function al(t,n,a,s,c,f){var _=0;if(s=t,typeof t=="function")uu(t)&&(_=1);else if(typeof t=="string")_=dS(t,a,j.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case R:return t=Zn(31,a,n,c),t.elementType=R,t.lanes=f,t;case C:return tr(a.children,c,f,n);case x:_=8,c|=24;break;case g:return t=Zn(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case V:return t=Zn(13,a,n,c),t.elementType=V,t.lanes=f,t;case F:return t=Zn(19,a,n,c),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:_=10;break t;case P:_=9;break t;case D:_=11;break t;case L:_=14;break t;case k:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Zn(_,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function tr(t,n,a,s){return t=Zn(7,t,s,n),t.lanes=a,t}function fu(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function Ep(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function hu(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Tp=new WeakMap;function ai(t,n){if(typeof t=="object"&&t!==null){var a=Tp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:kt(n)},Tp.set(t,n),n)}return{value:t,source:n,stack:kt(n)}}var Br=[],Ir=0,rl=null,Ys=0,ri=[],si=0,pa=null,Ri=1,Ci="";function ki(t,n){Br[Ir++]=Ys,Br[Ir++]=rl,rl=t,Ys=n}function bp(t,n,a){ri[si++]=Ri,ri[si++]=Ci,ri[si++]=pa,pa=t;var s=Ri;t=Ci;var c=32-Ht(s)-1;s&=~(1<<c),a+=1;var f=32-Ht(n)+c;if(30<f){var _=c-c%5;f=(s&(1<<_)-1).toString(32),s>>=_,c-=_,Ri=1<<32-Ht(n)+c|a<<c|s,Ci=f+t}else Ri=1<<f|a<<c|s,Ci=t}function du(t){t.return!==null&&(ki(t,1),bp(t,1,0))}function pu(t){for(;t===rl;)rl=Br[--Ir],Br[Ir]=null,Ys=Br[--Ir],Br[Ir]=null;for(;t===pa;)pa=ri[--si],ri[si]=null,Ci=ri[--si],ri[si]=null,Ri=ri[--si],ri[si]=null}function Ap(t,n){ri[si++]=Ri,ri[si++]=Ci,ri[si++]=pa,Ri=n.id,Ci=n.overflow,pa=t}var xn=null,qe=null,Me=!1,ma=null,oi=!1,mu=Error(r(519));function ga(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw js(ai(n,t)),mu}function Rp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Ke]=t,n[yn]=s,a){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(a=0;a<_o.length;a++)de(_o[a],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),Ln(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),wr(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Xg(n.textContent,a)?(s.popover!=null&&(de("beforetoggle",n),de("toggle",n)),s.onScroll!=null&&de("scroll",n),s.onScrollEnd!=null&&de("scrollend",n),s.onClick!=null&&(n.onclick=Hi),n=!0):n=!1,n||ga(t,!0)}function Cp(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:xn=xn.return}}function Fr(t){if(t!==xn)return!1;if(!Me)return Cp(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Of(t.type,t.memoizedProps)),a=!a),a&&qe&&ga(t),Cp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qe=$g(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qe=$g(t)}else n===27?(n=qe,Da(t.type)?(t=Ff,Ff=null,qe=t):qe=n):qe=xn?ci(t.stateNode.nextSibling):null;return!0}function er(){qe=xn=null,Me=!1}function gu(){var t=ma;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),ma=null),t}function js(t){ma===null?ma=[t]:ma.push(t)}var _u=N(null),nr=null,Xi=null;function _a(t,n,a){St(_u,n._currentValue),n._currentValue=a}function Wi(t){t._currentValue=_u.current,at(_u)}function vu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function yu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var I=0;I<n.length;I++)if(b.context===n[I]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),vu(f.return,a,t),s||(_=null);break t}f=b.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),vu(_,a,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Hr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var b=c.type;jn(c.pendingProps.value,_.value)||(t!==null?t.push(b):t=[b])}}else if(c===Mt.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Mo):t=[Mo])}c=c.return}t!==null&&yu(n,t,a,s),n.flags|=262144}function sl(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ir(t){nr=t,Xi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return wp(nr,t)}function ol(t,n){return nr===null&&ir(t),wp(t,n)}function wp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(t===null)throw Error(r(308));Xi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Xi=Xi.next=n;return a}var cy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},uy=o.unstable_scheduleCallback,fy=o.unstable_NormalPriority,an={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Su(){return{controller:new cy,data:new Map,refCount:0}}function Zs(t){t.refCount--,t.refCount===0&&uy(fy,function(){t.controller.abort()})}var Ks=null,xu=0,Gr=0,Vr=null;function hy(t,n){if(Ks===null){var a=Ks=[];xu=0,Gr=bf(),Vr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return xu++,n.then(Dp,Dp),n}function Dp(){if(--xu===0&&Ks!==null){Vr!==null&&(Vr.status="fulfilled");var t=Ks;Ks=null,Gr=0,Vr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function dy(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Up=z.S;z.S=function(t,n){pg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&hy(t,n),Up!==null&&Up(t,n)};var ar=N(null);function Mu(){var t=ar.current;return t!==null?t:Xe.pooledCache}function ll(t,n){n===null?St(ar,ar.current):St(ar,n.pool)}function Lp(){var t=Mu();return t===null?null:{parent:an._currentValue,pool:t}}var kr=Error(r(460)),Eu=Error(r(474)),cl=Error(r(542)),ul={then:function(){}};function Np(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Op(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Hi,Hi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Pp(t),t;default:if(typeof n.status=="string")n.then(Hi,Hi);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Pp(t),t}throw sr=n,kr}}function rr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(sr=a,kr):a}}var sr=null;function zp(){if(sr===null)throw Error(r(459));var t=sr;return sr=null,t}function Pp(t){if(t===kr||t===cl)throw Error(r(483))}var Xr=null,Qs=0;function fl(t){var n=Qs;return Qs+=1,Xr===null&&(Xr=[]),Op(Xr,t,n)}function Js(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function hl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Bp(t){function n(Y,G){if(t){var J=Y.deletions;J===null?(Y.deletions=[G],Y.flags|=16):J.push(G)}}function a(Y,G){if(!t)return null;for(;G!==null;)n(Y,G),G=G.sibling;return null}function s(Y){for(var G=new Map;Y!==null;)Y.key!==null?G.set(Y.key,Y):G.set(Y.index,Y),Y=Y.sibling;return G}function c(Y,G){return Y=Vi(Y,G),Y.index=0,Y.sibling=null,Y}function f(Y,G,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<G?(Y.flags|=67108866,G):J):(Y.flags|=67108866,G)):(Y.flags|=1048576,G)}function _(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function b(Y,G,J,dt){return G===null||G.tag!==6?(G=fu(J,Y.mode,dt),G.return=Y,G):(G=c(G,J),G.return=Y,G)}function I(Y,G,J,dt){var Zt=J.type;return Zt===C?ut(Y,G,J.props.children,dt,J.key):G!==null&&(G.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===k&&rr(Zt)===G.type)?(G=c(G,J.props),Js(G,J),G.return=Y,G):(G=al(J.type,J.key,J.props,null,Y.mode,dt),Js(G,J),G.return=Y,G)}function $(Y,G,J,dt){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=hu(J,Y.mode,dt),G.return=Y,G):(G=c(G,J.children||[]),G.return=Y,G)}function ut(Y,G,J,dt,Zt){return G===null||G.tag!==7?(G=tr(J,Y.mode,dt,Zt),G.return=Y,G):(G=c(G,J),G.return=Y,G)}function mt(Y,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=fu(""+G,Y.mode,J),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case M:return J=al(G.type,G.key,G.props,null,Y.mode,J),Js(J,G),J.return=Y,J;case T:return G=hu(G,Y.mode,J),G.return=Y,G;case k:return G=rr(G),mt(Y,G,J)}if(ht(G)||tt(G))return G=tr(G,Y.mode,J,null),G.return=Y,G;if(typeof G.then=="function")return mt(Y,fl(G),J);if(G.$$typeof===U)return mt(Y,ol(Y,G),J);hl(Y,G)}return null}function it(Y,G,J,dt){var Zt=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Zt!==null?null:b(Y,G,""+J,dt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===Zt?I(Y,G,J,dt):null;case T:return J.key===Zt?$(Y,G,J,dt):null;case k:return J=rr(J),it(Y,G,J,dt)}if(ht(J)||tt(J))return Zt!==null?null:ut(Y,G,J,dt,null);if(typeof J.then=="function")return it(Y,G,fl(J),dt);if(J.$$typeof===U)return it(Y,G,ol(Y,J),dt);hl(Y,J)}return null}function ot(Y,G,J,dt,Zt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return Y=Y.get(J)||null,b(G,Y,""+dt,Zt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case M:return Y=Y.get(dt.key===null?J:dt.key)||null,I(G,Y,dt,Zt);case T:return Y=Y.get(dt.key===null?J:dt.key)||null,$(G,Y,dt,Zt);case k:return dt=rr(dt),ot(Y,G,J,dt,Zt)}if(ht(dt)||tt(dt))return Y=Y.get(J)||null,ut(G,Y,dt,Zt,null);if(typeof dt.then=="function")return ot(Y,G,J,fl(dt),Zt);if(dt.$$typeof===U)return ot(Y,G,J,ol(G,dt),Zt);hl(G,dt)}return null}function Ft(Y,G,J,dt){for(var Zt=null,Re=null,Vt=G,oe=G=0,ve=null;Vt!==null&&oe<J.length;oe++){Vt.index>oe?(ve=Vt,Vt=null):ve=Vt.sibling;var Ce=it(Y,Vt,J[oe],dt);if(Ce===null){Vt===null&&(Vt=ve);break}t&&Vt&&Ce.alternate===null&&n(Y,Vt),G=f(Ce,G,oe),Re===null?Zt=Ce:Re.sibling=Ce,Re=Ce,Vt=ve}if(oe===J.length)return a(Y,Vt),Me&&ki(Y,oe),Zt;if(Vt===null){for(;oe<J.length;oe++)Vt=mt(Y,J[oe],dt),Vt!==null&&(G=f(Vt,G,oe),Re===null?Zt=Vt:Re.sibling=Vt,Re=Vt);return Me&&ki(Y,oe),Zt}for(Vt=s(Vt);oe<J.length;oe++)ve=ot(Vt,Y,oe,J[oe],dt),ve!==null&&(t&&ve.alternate!==null&&Vt.delete(ve.key===null?oe:ve.key),G=f(ve,G,oe),Re===null?Zt=ve:Re.sibling=ve,Re=ve);return t&&Vt.forEach(function(za){return n(Y,za)}),Me&&ki(Y,oe),Zt}function $t(Y,G,J,dt){if(J==null)throw Error(r(151));for(var Zt=null,Re=null,Vt=G,oe=G=0,ve=null,Ce=J.next();Vt!==null&&!Ce.done;oe++,Ce=J.next()){Vt.index>oe?(ve=Vt,Vt=null):ve=Vt.sibling;var za=it(Y,Vt,Ce.value,dt);if(za===null){Vt===null&&(Vt=ve);break}t&&Vt&&za.alternate===null&&n(Y,Vt),G=f(za,G,oe),Re===null?Zt=za:Re.sibling=za,Re=za,Vt=ve}if(Ce.done)return a(Y,Vt),Me&&ki(Y,oe),Zt;if(Vt===null){for(;!Ce.done;oe++,Ce=J.next())Ce=mt(Y,Ce.value,dt),Ce!==null&&(G=f(Ce,G,oe),Re===null?Zt=Ce:Re.sibling=Ce,Re=Ce);return Me&&ki(Y,oe),Zt}for(Vt=s(Vt);!Ce.done;oe++,Ce=J.next())Ce=ot(Vt,Y,oe,Ce.value,dt),Ce!==null&&(t&&Ce.alternate!==null&&Vt.delete(Ce.key===null?oe:Ce.key),G=f(Ce,G,oe),Re===null?Zt=Ce:Re.sibling=Ce,Re=Ce);return t&&Vt.forEach(function(TS){return n(Y,TS)}),Me&&ki(Y,oe),Zt}function Fe(Y,G,J,dt){if(typeof J=="object"&&J!==null&&J.type===C&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var Zt=J.key;G!==null;){if(G.key===Zt){if(Zt=J.type,Zt===C){if(G.tag===7){a(Y,G.sibling),dt=c(G,J.props.children),dt.return=Y,Y=dt;break t}}else if(G.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===k&&rr(Zt)===G.type){a(Y,G.sibling),dt=c(G,J.props),Js(dt,J),dt.return=Y,Y=dt;break t}a(Y,G);break}else n(Y,G);G=G.sibling}J.type===C?(dt=tr(J.props.children,Y.mode,dt,J.key),dt.return=Y,Y=dt):(dt=al(J.type,J.key,J.props,null,Y.mode,dt),Js(dt,J),dt.return=Y,Y=dt)}return _(Y);case T:t:{for(Zt=J.key;G!==null;){if(G.key===Zt)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){a(Y,G.sibling),dt=c(G,J.children||[]),dt.return=Y,Y=dt;break t}else{a(Y,G);break}else n(Y,G);G=G.sibling}dt=hu(J,Y.mode,dt),dt.return=Y,Y=dt}return _(Y);case k:return J=rr(J),Fe(Y,G,J,dt)}if(ht(J))return Ft(Y,G,J,dt);if(tt(J)){if(Zt=tt(J),typeof Zt!="function")throw Error(r(150));return J=Zt.call(J),$t(Y,G,J,dt)}if(typeof J.then=="function")return Fe(Y,G,fl(J),dt);if(J.$$typeof===U)return Fe(Y,G,ol(Y,J),dt);hl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(a(Y,G.sibling),dt=c(G,J),dt.return=Y,Y=dt):(a(Y,G),dt=fu(J,Y.mode,dt),dt.return=Y,Y=dt),_(Y)):a(Y,G)}return function(Y,G,J,dt){try{Qs=0;var Zt=Fe(Y,G,J,dt);return Xr=null,Zt}catch(Vt){if(Vt===kr||Vt===cl)throw Vt;var Re=Zn(29,Vt,null,Y.mode);return Re.lanes=dt,Re.return=Y,Re}}}var or=Bp(!0),Ip=Bp(!1),va=!1;function Tu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ya(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Sa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(De&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=il(t),xp(t,null,a),n}return nl(t,s,n,a),il(t)}function $s(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Os(t,a)}}function Au(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ru=!1;function to(){if(Ru){var t=Vr;if(t!==null)throw t}}function eo(t,n,a,s){Ru=!1;var c=t.updateQueue;va=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var I=b,$=I.next;I.next=null,_===null?f=$:_.next=$,_=I;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,b=ut.lastBaseUpdate,b!==_&&(b===null?ut.firstBaseUpdate=$:b.next=$,ut.lastBaseUpdate=I))}if(f!==null){var mt=c.baseState;_=0,ut=$=I=null,b=f;do{var it=b.lane&-536870913,ot=it!==b.lane;if(ot?(_e&it)===it:(s&it)===it){it!==0&&it===Gr&&(Ru=!0),ut!==null&&(ut=ut.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Ft=t,$t=b;it=n;var Fe=a;switch($t.tag){case 1:if(Ft=$t.payload,typeof Ft=="function"){mt=Ft.call(Fe,mt,it);break t}mt=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=$t.payload,it=typeof Ft=="function"?Ft.call(Fe,mt,it):Ft,it==null)break t;mt=v({},mt,it);break t;case 2:va=!0}}it=b.callback,it!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[it]:ot.push(it))}else ot={lane:it,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ut===null?($=ut=ot,I=mt):ut=ut.next=ot,_|=it;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ot=b,b=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ut===null&&(I=mt),c.baseState=I,c.firstBaseUpdate=$,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),ba|=_,t.lanes=_,t.memoizedState=mt}}function Fp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Hp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Fp(a[t],n)}var Wr=N(null),dl=N(0);function Gp(t,n){t=ta,St(dl,t),St(Wr,n),ta=t|n.baseLanes}function Cu(){St(dl,ta),St(Wr,Wr.current)}function wu(){ta=dl.current,at(Wr),at(dl)}var Kn=N(null),li=null;function xa(t){var n=t.alternate;St(en,en.current&1),St(Kn,t),li===null&&(n===null||Wr.current!==null||n.memoizedState!==null)&&(li=t)}function Du(t){St(en,en.current),St(Kn,t),li===null&&(li=t)}function Vp(t){t.tag===22?(St(en,en.current),St(Kn,t),li===null&&(li=t)):Ma()}function Ma(){St(en,en.current),St(Kn,Kn.current)}function Qn(t){at(Kn),li===t&&(li=null),at(en)}var en=N(0);function pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bf(a)||If(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=0,se=null,Be=null,rn=null,ml=!1,qr=!1,lr=!1,gl=0,no=0,Yr=null,py=0;function Je(){throw Error(r(321))}function Uu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!jn(t[a],n[a]))return!1;return!0}function Lu(t,n,a,s,c,f){return qi=f,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?bm:Yu,lr=!1,f=a(s,c),lr=!1,qr&&(f=Xp(n,a,s,c)),kp(t),f}function kp(t){z.H=ro;var n=Be!==null&&Be.next!==null;if(qi=0,rn=Be=se=null,ml=!1,no=0,Yr=null,n)throw Error(r(300));t===null||sn||(t=t.dependencies,t!==null&&sl(t)&&(sn=!0))}function Xp(t,n,a,s){se=t;var c=0;do{if(qr&&(Yr=null),no=0,qr=!1,25<=c)throw Error(r(301));if(c+=1,rn=Be=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=Am,f=n(a,s)}while(qr);return f}function my(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?io(n):n,t=t.useState()[0],(Be!==null?Be.memoizedState:null)!==t&&(se.flags|=1024),n}function Nu(){var t=gl!==0;return gl=0,t}function Ou(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function zu(t){if(ml){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ml=!1}qi=0,rn=Be=se=null,qr=!1,no=gl=0,Yr=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?se.memoizedState=rn=t:rn=rn.next=t,rn}function nn(){if(Be===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var n=rn===null?se.memoizedState:rn.next;if(n!==null)rn=n,Be=t;else{if(t===null)throw se.alternate===null?Error(r(467)):Error(r(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},rn===null?se.memoizedState=rn=t:rn=rn.next=t}return rn}function _l(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function io(t){var n=no;return no+=1,Yr===null&&(Yr=[]),t=Op(Yr,t,n),n=se,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?bm:Yu),t}function vl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return io(t);if(t.$$typeof===U)return Mn(t)}throw Error(r(438,String(t)))}function Pu(t){var n=null,a=se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=se.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=_l(),se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=A;return n.index++,a}function Yi(t,n){return typeof n=="function"?n(t):n}function yl(t){var n=nn();return Bu(n,Be,t)}function Bu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=_=null,I=null,$=n,ut=!1;do{var mt=$.lane&-536870913;if(mt!==$.lane?(_e&mt)===mt:(qi&mt)===mt){var it=$.revertLane;if(it===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),mt===Gr&&(ut=!0);else if((qi&it)===it){$=$.next,it===Gr&&(ut=!0);continue}else mt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(b=I=mt,_=f):I=I.next=mt,se.lanes|=it,ba|=it;mt=$.action,lr&&a(f,mt),f=$.hasEagerState?$.eagerState:a(f,mt)}else it={lane:mt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(b=I=it,_=f):I=I.next=it,se.lanes|=mt,ba|=mt;$=$.next}while($!==null&&$!==n);if(I===null?_=f:I.next=b,!jn(f,t.memoizedState)&&(sn=!0,ut&&(a=Vr,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=I,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Iu(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);jn(f,n.memoizedState)||(sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Wp(t,n,a){var s=se,c=nn(),f=Me;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!jn((Be||c).memoizedState,a);if(_&&(c.memoizedState=a,sn=!0),c=c.queue,Gu(jp.bind(null,s,c,t),[t]),c.getSnapshot!==n||_||rn!==null&&rn.memoizedState.tag&1){if(s.flags|=2048,jr(9,{destroy:void 0},Yp.bind(null,s,c,a,n),null),Xe===null)throw Error(r(349));f||(qi&127)!==0||qp(s,n,a)}return a}function qp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=se.updateQueue,n===null?(n=_l(),se.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Yp(t,n,a,s){n.value=a,n.getSnapshot=s,Zp(n)&&Kp(t)}function jp(t,n,a){return a(function(){Zp(n)&&Kp(t)})}function Zp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!jn(t,a)}catch{return!0}}function Kp(t){var n=$a(t,2);n!==null&&Vn(n,t,2)}function Fu(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),lr){qt(!0);try{a()}finally{qt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:t},n}function Qp(t,n,a,s){return t.baseState=a,Bu(t,Be,typeof s=="function"?s:Yi)}function gy(t,n,a,s,c){if(Ml(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Jp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Jp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=z.T,_={};z.T=_;try{var b=a(c,s),I=z.S;I!==null&&I(_,b),$p(t,n,b)}catch($){Hu(t,n,$)}finally{f!==null&&_.types!==null&&(f.types=_.types),z.T=f}}else try{f=a(c,s),$p(t,n,f)}catch($){Hu(t,n,$)}}function $p(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){tm(t,n,s)},function(s){return Hu(t,n,s)}):tm(t,n,a)}function tm(t,n,a){n.status="fulfilled",n.value=a,em(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Jp(t,a)))}function Hu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,em(n),n=n.next;while(n!==s)}t.action=null}function em(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function nm(t,n){return n}function im(t,n){if(Me){var a=Xe.formState;if(a!==null){t:{var s=se;if(Me){if(qe){e:{for(var c=qe,f=oi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){qe=ci(c.nextSibling),s=c.data==="F!";break t}}ga(s)}s=!1}s&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nm,lastRenderedState:n},a.queue=s,a=Mm.bind(null,se,s),s.dispatch=a,s=Fu(!1),f=qu.bind(null,se,!1,s.queue),s=Nn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=gy.bind(null,se,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function am(t){var n=nn();return rm(n,Be,t)}function rm(t,n,a){if(n=Bu(t,n,nm)[0],t=yl(Yi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=io(n)}catch(_){throw _===kr?cl:_}else s=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(se.flags|=2048,jr(9,{destroy:void 0},_y.bind(null,c,a),null)),[s,f,t]}function _y(t,n){t.action=n}function sm(t){var n=nn(),a=Be;if(a!==null)return rm(n,a,t);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function jr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=se.updateQueue,n===null&&(n=_l(),se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function om(){return nn().memoizedState}function Sl(t,n,a,s){var c=Nn();se.flags|=t,c.memoizedState=jr(1|n,{destroy:void 0},a,s===void 0?null:s)}function xl(t,n,a,s){var c=nn();s=s===void 0?null:s;var f=c.memoizedState.inst;Be!==null&&s!==null&&Uu(s,Be.memoizedState.deps)?c.memoizedState=jr(n,f,a,s):(se.flags|=t,c.memoizedState=jr(1|n,f,a,s))}function lm(t,n){Sl(8390656,8,t,n)}function Gu(t,n){xl(2048,8,t,n)}function vy(t){se.flags|=4;var n=se.updateQueue;if(n===null)n=_l(),se.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function cm(t){var n=nn().memoizedState;return vy({ref:n,nextImpl:t}),function(){if((De&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function um(t,n){return xl(4,2,t,n)}function fm(t,n){return xl(4,4,t,n)}function hm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function dm(t,n,a){a=a!=null?a.concat([t]):null,xl(4,4,hm.bind(null,n,t),a)}function Vu(){}function pm(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Uu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function mm(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Uu(n,s[1]))return s[0];if(s=t(),lr){qt(!0);try{t()}finally{qt(!1)}}return a.memoizedState=[s,n],s}function ku(t,n,a){return a===void 0||(qi&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=gg(),se.lanes|=t,ba|=t,a)}function gm(t,n,a,s){return jn(a,n)?a:Wr.current!==null?(t=ku(t,a,s),jn(t,n)||(sn=!0),t):(qi&42)===0||(qi&1073741824)!==0&&(_e&261930)===0?(sn=!0,t.memoizedState=a):(t=gg(),se.lanes|=t,ba|=t,n)}function _m(t,n,a,s,c){var f=K.p;K.p=f!==0&&8>f?f:8;var _=z.T,b={};z.T=b,qu(t,!1,n,a);try{var I=c(),$=z.S;if($!==null&&$(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ut=dy(I,s);ao(t,n,ut,ti(t))}else ao(t,n,s,ti(t))}catch(mt){ao(t,n,{then:function(){},status:"rejected",reason:mt},ti())}finally{K.p=f,_!==null&&b.types!==null&&(_.types=b.types),z.T=_}}function yy(){}function Xu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=vm(t).queue;_m(t,c,n,Z,a===null?yy:function(){return ym(t),a(s)})}function vm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function ym(t){var n=vm(t);n.next===null&&(n=t.alternate.memoizedState),ao(t,n.next.queue,{},ti())}function Wu(){return Mn(Mo)}function Sm(){return nn().memoizedState}function xm(){return nn().memoizedState}function Sy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();t=ya(a);var s=Sa(n,t,a);s!==null&&(Vn(s,n,a),$s(s,n,a)),n={cache:Su()},t.payload=n;return}n=n.return}}function xy(t,n,a){var s=ti();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(t)?Em(n,a):(a=cu(t,n,a,s),a!==null&&(Vn(a,t,s),Tm(a,n,s)))}function Mm(t,n,a){var s=ti();ao(t,n,a,s)}function ao(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ml(t))Em(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,b=f(_,a);if(c.hasEagerState=!0,c.eagerState=b,jn(b,_))return nl(t,n,c,0),Xe===null&&el(),!1}catch{}if(a=cu(t,n,c,s),a!==null)return Vn(a,t,s),Tm(a,n,s),!0}return!1}function qu(t,n,a,s){if(s={lane:2,revertLane:bf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Ml(t)){if(n)throw Error(r(479))}else n=cu(t,a,s,2),n!==null&&Vn(n,t,2)}function Ml(t){var n=t.alternate;return t===se||n!==null&&n===se}function Em(t,n){qr=ml=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Tm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Os(t,a)}}var ro={readContext:Mn,use:vl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};ro.useEffectEvent=Je;var bm={readContext:Mn,use:vl,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:lm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Sl(4194308,4,hm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Sl(4194308,4,t,n)},useInsertionEffect:function(t,n){Sl(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var s=t();if(lr){qt(!0);try{t()}finally{qt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Nn();if(a!==void 0){var c=a(n);if(lr){qt(!0);try{a(n)}finally{qt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=xy.bind(null,se,t),[s.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=Fu(t);var n=t.queue,a=Mm.bind(null,se,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Vu,useDeferredValue:function(t,n){var a=Nn();return ku(a,t,n)},useTransition:function(){var t=Fu(!1);return t=_m.bind(null,se,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=se,c=Nn();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xe===null)throw Error(r(349));(_e&127)!==0||qp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,lm(jp.bind(null,s,f,t),[t]),s.flags|=2048,jr(9,{destroy:void 0},Yp.bind(null,s,f,a,n),null),a},useId:function(){var t=Nn(),n=Xe.identifierPrefix;if(Me){var a=Ci,s=Ri;a=(s&~(1<<32-Ht(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=py++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Wu,useFormState:im,useActionState:im,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=qu.bind(null,se,!0,a),a.dispatch=n,[t,n]},useMemoCache:Pu,useCacheRefresh:function(){return Nn().memoizedState=Sy.bind(null,se)},useEffectEvent:function(t){var n=Nn(),a={impl:t};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Yu={readContext:Mn,use:vl,useCallback:pm,useContext:Mn,useEffect:Gu,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:fm,useMemo:mm,useReducer:yl,useRef:om,useState:function(){return yl(Yi)},useDebugValue:Vu,useDeferredValue:function(t,n){var a=nn();return gm(a,Be.memoizedState,t,n)},useTransition:function(){var t=yl(Yi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:io(t),n]},useSyncExternalStore:Wp,useId:Sm,useHostTransitionStatus:Wu,useFormState:am,useActionState:am,useOptimistic:function(t,n){var a=nn();return Qp(a,Be,t,n)},useMemoCache:Pu,useCacheRefresh:xm};Yu.useEffectEvent=cm;var Am={readContext:Mn,use:vl,useCallback:pm,useContext:Mn,useEffect:Gu,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:fm,useMemo:mm,useReducer:Iu,useRef:om,useState:function(){return Iu(Yi)},useDebugValue:Vu,useDeferredValue:function(t,n){var a=nn();return Be===null?ku(a,t,n):gm(a,Be.memoizedState,t,n)},useTransition:function(){var t=Iu(Yi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:io(t),n]},useSyncExternalStore:Wp,useId:Sm,useHostTransitionStatus:Wu,useFormState:sm,useActionState:sm,useOptimistic:function(t,n){var a=nn();return Be!==null?Qp(a,Be,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Pu,useCacheRefresh:xm};Am.useEffectEvent=cm;function ju(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Zu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ti(),c=ya(s);c.payload=n,a!=null&&(c.callback=a),n=Sa(t,c,s),n!==null&&(Vn(n,t,s),$s(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ti(),c=ya(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Sa(t,c,s),n!==null&&(Vn(n,t,s),$s(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ti(),s=ya(a);s.tag=2,n!=null&&(s.callback=n),n=Sa(t,s,a),n!==null&&(Vn(n,t,a),$s(n,t,a))}};function Rm(t,n,a,s,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Ws(a,s)||!Ws(c,f):!0}function Cm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Zu.enqueueReplaceState(n,n.state,null)}function cr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function wm(t){tl(t)}function Dm(t){console.error(t)}function Um(t){tl(t)}function El(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Lm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ku(t,n,a){return a=ya(a),a.tag=3,a.payload={element:null},a.callback=function(){El(t,n)},a}function Nm(t){return t=ya(t),t.tag=3,t}function Om(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Lm(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Lm(n,a,s),typeof c!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function My(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Hr(n,a,c,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?zl():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Mf(t,s,c)),!1;case 22:return a.flags|=65536,s===ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Mf(t,s,c)),!1}throw Error(r(435,a.tag))}return Mf(t,s,c),zl(),!1}if(Me)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==mu&&(t=Error(r(422),{cause:s}),js(ai(t,a)))):(s!==mu&&(n=Error(r(423),{cause:s}),js(ai(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ai(s,a),c=Ku(t.stateNode,s,c),Au(t,c),$e!==4&&($e=2)),!1;var f=Error(r(520),{cause:s});if(f=ai(f,a),po===null?po=[f]:po.push(f),$e!==4&&($e=2),n===null)return!0;s=ai(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Ku(a.stateNode,s,t),Au(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Nm(c),Om(c,t,a,s),Au(a,c),!1}a=a.return}while(a!==null);return!1}var Qu=Error(r(461)),sn=!1;function En(t,n,a,s){n.child=t===null?Ip(n,null,a,s):or(n,t.child,a,s)}function zm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var b in s)b!=="ref"&&(_[b]=s[b])}else _=s;return ir(n),s=Lu(t,n,a,_,f,c),b=Nu(),t!==null&&!sn?(Ou(t,n,c),ji(t,n,c)):(Me&&b&&du(n),n.flags|=1,En(t,n,s,c),n.child)}function Pm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!uu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Bm(t,n,f,s,c)):(t=al(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!sf(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ws,a(_,s)&&t.ref===n.ref)return ji(t,n,c)}return n.flags|=1,t=Vi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Bm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Ws(f,s)&&t.ref===n.ref)if(sn=!1,n.pendingProps=s=f,sf(t,c))(t.flags&131072)!==0&&(sn=!0);else return n.lanes=t.lanes,ji(t,n,c)}return Ju(t,n,a,s,c)}function Im(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Fm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ll(n,f!==null?f.cachePool:null),f!==null?Gp(n,f):Cu(),Vp(n);else return s=n.lanes=536870912,Fm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(ll(n,f.cachePool),Gp(n,f),Ma(),n.memoizedState=null):(t!==null&&ll(n,null),Cu(),Ma());return En(t,n,c,a),n.child}function so(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Fm(t,n,a,s,c){var f=Mu();return f=f===null?null:{parent:an._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&ll(n,null),Cu(),Vp(n),t!==null&&Hr(t,n,s,!0),n.childLanes=c,null}function Tl(t,n){return n=Al({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Hm(t,n,a){return or(n,t.child,null,a),t=Tl(n,n.pendingProps),t.flags|=2,Qn(n),n.memoizedState=null,t}function Ey(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(s.mode==="hidden")return t=Tl(n,s),n.lanes=536870912,so(null,t);if(Du(n),(t=qe)?(t=Jg(t,oi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:pa!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=Ep(t),a.return=n,n.child=a,xn=n,qe=null)):t=null,t===null)throw ga(n);return n.lanes=536870912,null}return Tl(n,s)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Du(n),c)if(n.flags&256)n.flags&=-257,n=Hm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(sn||Hr(t,n,a,!1),c=(a&t.childLanes)!==0,sn||c){if(s=Xe,s!==null&&(_=Ai(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,$a(t,_),Vn(s,t,_),Qu;zl(),n=Hm(t,n,a)}else t=f.treeContext,qe=ci(_.nextSibling),xn=n,Me=!0,ma=null,oi=!1,t!==null&&Ap(n,t),n=Tl(n,s),n.flags|=4096;return n}return t=Vi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function bl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ju(t,n,a,s,c){return ir(n),a=Lu(t,n,a,s,void 0,c),s=Nu(),t!==null&&!sn?(Ou(t,n,c),ji(t,n,c)):(Me&&s&&du(n),n.flags|=1,En(t,n,a,c),n.child)}function Gm(t,n,a,s,c,f){return ir(n),n.updateQueue=null,a=Xp(n,s,a,c),kp(t),s=Nu(),t!==null&&!sn?(Ou(t,n,f),ji(t,n,f)):(Me&&s&&du(n),n.flags|=1,En(t,n,a,f),n.child)}function Vm(t,n,a,s,c){if(ir(n),n.stateNode===null){var f=Pr,_=a.contextType;typeof _=="object"&&_!==null&&(f=Mn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Tu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Mn(_):Pr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(ju(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Zu.enqueueReplaceState(f,f.state,null),eo(n,s,f,c),to(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,I=cr(a,b);f.props=I;var $=f.context,ut=a.contextType;_=Pr,typeof ut=="object"&&ut!==null&&(_=Mn(ut));var mt=a.getDerivedStateFromProps;ut=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||$!==_)&&Cm(n,f,s,_),va=!1;var it=n.memoizedState;f.state=it,eo(n,s,f,c),to(),$=n.memoizedState,b||it!==$||va?(typeof mt=="function"&&(ju(n,a,mt,s),$=n.memoizedState),(I=va||Rm(n,a,I,s,it,$,_))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=_,s=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,bu(t,n),_=n.memoizedProps,ut=cr(a,_),f.props=ut,mt=n.pendingProps,it=f.context,$=a.contextType,I=Pr,typeof $=="object"&&$!==null&&(I=Mn($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==mt||it!==I)&&Cm(n,f,s,I),va=!1,it=n.memoizedState,f.state=it,eo(n,s,f,c),to();var ot=n.memoizedState;_!==mt||it!==ot||va||t!==null&&t.dependencies!==null&&sl(t.dependencies)?(typeof b=="function"&&(ju(n,a,b,s),ot=n.memoizedState),(ut=va||Rm(n,a,ut,s,it,ot,I)||t!==null&&t.dependencies!==null&&sl(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=I,s=ut):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,bl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=or(n,t.child,null,c),n.child=or(n,null,a,c)):En(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ji(t,n,c),t}function km(t,n,a,s){return er(),n.flags|=256,En(t,n,a,s),n.child}var $u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tf(t){return{baseLanes:t,cachePool:Lp()}}function ef(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function Xm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(en.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(c?xa(n):Ma(),(t=qe)?(t=Jg(t,oi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:pa!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=Ep(t),a.return=n,n.child=a,xn=n,qe=null)):t=null,t===null)throw ga(n);return If(t)?n.lanes=32:n.lanes=536870912,null}var b=s.children;return s=s.fallback,c?(Ma(),c=n.mode,b=Al({mode:"hidden",children:b},c),s=tr(s,c,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,s=n.child,s.memoizedState=tf(a),s.childLanes=ef(t,_,a),n.memoizedState=$u,so(null,s)):(xa(n),nf(n,b))}var I=t.memoizedState;if(I!==null&&(b=I.dehydrated,b!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=af(t,n,a)):n.memoizedState!==null?(Ma(),n.child=t.child,n.flags|=128,n=null):(Ma(),b=s.fallback,c=n.mode,s=Al({mode:"visible",children:s.children},c),b=tr(b,c,a,null),b.flags|=2,s.return=n,b.return=n,s.sibling=b,n.child=s,or(n,t.child,null,a),s=n.child,s.memoizedState=tf(a),s.childLanes=ef(t,_,a),n.memoizedState=$u,n=so(null,s));else if(xa(n),If(b)){if(_=b.nextSibling&&b.nextSibling.dataset,_)var $=_.dgst;_=$,s=Error(r(419)),s.stack="",s.digest=_,js({value:s,source:null,stack:null}),n=af(t,n,a)}else if(sn||Hr(t,n,a,!1),_=(a&t.childLanes)!==0,sn||_){if(_=Xe,_!==null&&(s=Ai(_,a),s!==0&&s!==I.retryLane))throw I.retryLane=s,$a(t,s),Vn(_,t,s),Qu;Bf(b)||zl(),n=af(t,n,a)}else Bf(b)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,qe=ci(b.nextSibling),xn=n,Me=!0,ma=null,oi=!1,t!==null&&Ap(n,t),n=nf(n,s.children),n.flags|=4096);return n}return c?(Ma(),b=s.fallback,c=n.mode,I=t.child,$=I.sibling,s=Vi(I,{mode:"hidden",children:s.children}),s.subtreeFlags=I.subtreeFlags&65011712,$!==null?b=Vi($,b):(b=tr(b,c,a,null),b.flags|=2),b.return=n,s.return=n,s.sibling=b,n.child=s,so(null,s),s=n.child,b=t.child.memoizedState,b===null?b=tf(a):(c=b.cachePool,c!==null?(I=an._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=Lp(),b={baseLanes:b.baseLanes|a,cachePool:c}),s.memoizedState=b,s.childLanes=ef(t,_,a),n.memoizedState=$u,so(t.child,s)):(xa(n),a=t.child,t=a.sibling,a=Vi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function nf(t,n){return n=Al({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Al(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function af(t,n,a){return or(n,t.child,null,a),t=nf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Wm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),vu(t.return,n,a)}function rf(t,n,a,s,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function qm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var _=en.current,b=(_&2)!==0;if(b?(_=_&1|2,n.flags|=128):_&=1,St(en,_),En(t,n,s,a),s=Me?Ys:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wm(t,a,n);else if(t.tag===19)Wm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&pl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),rf(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&pl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}rf(n,!0,a,null,f,s);break;case"together":rf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function ji(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Hr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Vi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Vi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function sf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&sl(t)))}function Ty(t,n,a){switch(n.tag){case 3:zt(n,n.stateNode.containerInfo),_a(n,an,t.memoizedState.cache),er();break;case 27:case 5:Jt(n);break;case 4:zt(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Du(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Xm(t,n,a):(xa(n),t=ji(t,n,a),t!==null?t.sibling:null);xa(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Hr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return qm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(en,en.current),s)break;return null;case 22:return n.lanes=0,Im(t,n,a,n.pendingProps);case 24:_a(n,an,t.memoizedState.cache)}return ji(t,n,a)}function Ym(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)sn=!0;else{if(!sf(t,a)&&(n.flags&128)===0)return sn=!1,Ty(t,n,a);sn=(t.flags&131072)!==0}else sn=!1,Me&&(n.flags&1048576)!==0&&bp(n,Ys,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=rr(n.elementType),n.type=t,typeof t=="function")uu(t)?(s=cr(t,s),n.tag=1,n=Vm(null,n,t,s,a)):(n.tag=0,n=Ju(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===D){n.tag=11,n=zm(null,n,t,s,a);break t}else if(c===L){n.tag=14,n=Pm(null,n,t,s,a);break t}}throw n=lt(t)||t,Error(r(306,n,""))}}return n;case 0:return Ju(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=cr(s,n.pendingProps),Vm(t,n,s,c,a);case 3:t:{if(zt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,bu(t,n),eo(n,s,null,a);var _=n.memoizedState;if(s=_.cache,_a(n,an,s),s!==f.cache&&yu(n,[an],a,!0),to(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=km(t,n,s,a);break t}else if(s!==c){c=ai(Error(r(424)),n),js(c),n=km(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,qe=ci(t.firstChild),xn=n,Me=!0,ma=null,oi=!0,a=Ip(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(er(),s===c){n=ji(t,n,a);break t}En(t,n,s,a)}n=n.child}return n;case 26:return bl(t,n),t===null?(a=a0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,t=n.pendingProps,s=Vl(bt.current).createElement(a),s[Ke]=n,s[yn]=t,Tn(s,a,t),W(s),n.stateNode=s):n.memoizedState=a0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Jt(n),t===null&&Me&&(s=n.stateNode=e0(n.type,n.pendingProps,bt.current),xn=n,oi=!0,c=qe,Da(n.type)?(Ff=c,qe=ci(s.firstChild)):qe=c),En(t,n,n.pendingProps.children,a),bl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((c=s=qe)&&(s=tS(s,n.type,n.pendingProps,oi),s!==null?(n.stateNode=s,xn=n,qe=ci(s.firstChild),oi=!1,c=!0):c=!1),c||ga(n)),Jt(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,s=f.children,Of(c,f)?s=null:_!==null&&Of(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Lu(t,n,my,null,null,a),Mo._currentValue=c),bl(t,n),En(t,n,s,a),n.child;case 6:return t===null&&Me&&((t=a=qe)&&(a=eS(a,n.pendingProps,oi),a!==null?(n.stateNode=a,xn=n,qe=null,t=!0):t=!1),t||ga(n)),null;case 13:return Xm(t,n,a);case 4:return zt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=or(n,null,s,a):En(t,n,s,a),n.child;case 11:return zm(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,_a(n,n.type,s.value),En(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ir(n),c=Mn(c),s=s(c),n.flags|=1,En(t,n,s,a),n.child;case 14:return Pm(t,n,n.type,n.pendingProps,a);case 15:return Bm(t,n,n.type,n.pendingProps,a);case 19:return qm(t,n,a);case 31:return Ey(t,n,a);case 22:return Im(t,n,a,n.pendingProps);case 24:return ir(n),s=Mn(an),t===null?(c=Mu(),c===null&&(c=Xe,f=Su(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Tu(n),_a(n,an,c)):((t.lanes&a)!==0&&(bu(t,n),eo(n,null,null,a),to()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),_a(n,an,s)):(s=f.cache,_a(n,an,s),s!==c.cache&&yu(n,[an],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Zi(t){t.flags|=4}function of(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Sg())t.flags|=8192;else throw sr=ul,Eu}else t.flags&=-16777217}function jm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!c0(n))if(Sg())t.flags|=8192;else throw sr=ul,Eu}function Rl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ze():536870912,t.lanes|=n,Jr|=n)}function oo(t,n){if(!Me)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ye(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function by(t,n,a){var s=n.pendingProps;switch(pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Wi(an),Qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Fr(n)?Zi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gu())),Ye(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Zi(n),f!==null?(Ye(n),jm(n,f)):(Ye(n),of(n,c,null,s,a))):f?f!==t.memoizedState?(Zi(n),Ye(n),jm(n,f)):(Ye(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Zi(n),Ye(n),of(n,c,t,s,a)),null;case 27:if(Ne(n),a=bt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Zi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}t=j.current,Fr(n)?Rp(n):(t=e0(c,s,a),n.stateNode=t,Zi(n))}return Ye(n),null;case 5:if(Ne(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Zi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}if(f=j.current,Fr(n))Rp(n);else{var _=Vl(bt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(c,{is:s.is}):_.createElement(c)}}f[Ke]=n,f[yn]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Tn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Zi(n)}}return Ye(n),of(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Zi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=bt.current,Fr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=xn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[Ke]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Xg(t.nodeValue,a)),t||ga(n,!0)}else t=Vl(t).createTextNode(s),t[Ke]=n,n.stateNode=t}return Ye(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Fr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Ke]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),t=!1}else a=gu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ye(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Fr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Ke]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),c=!1}else c=gu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Rl(n,n.updateQueue),Ye(n),null);case 4:return Qt(),t===null&&wf(n.stateNode.containerInfo),Ye(n),null;case 10:return Wi(n.type),Ye(n),null;case 19:if(at(en),s=n.memoizedState,s===null)return Ye(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)oo(s,!1);else{if($e!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=pl(t),f!==null){for(n.flags|=128,oo(s,!1),t=f.updateQueue,n.updateQueue=t,Rl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Mp(a,t),a=a.sibling;return St(en,en.current&1|2),Me&&ki(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&E()>Ll&&(n.flags|=128,c=!0,oo(s,!1),n.lanes=4194304)}else{if(!c)if(t=pl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Rl(n,t),oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Me)return Ye(n),null}else 2*E()-s.renderingStartTime>Ll&&a!==536870912&&(n.flags|=128,c=!0,oo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=E(),t.sibling=null,a=en.current,St(en,c?a&1|2:a&1),Me&&ki(n,s.treeForkCount),t):(Ye(n),null);case 22:case 23:return Qn(n),wu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&Rl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&at(ar),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(an),Ye(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Ay(t,n){switch(pu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Wi(an),Qt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(r(340));er()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));er()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return at(en),null;case 4:return Qt(),null;case 10:return Wi(n.type),null;case 22:case 23:return Qn(n),wu(),t!==null&&at(ar),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Wi(an),null;case 25:return null;default:return null}}function Zm(t,n){switch(pu(n),n.tag){case 3:Wi(an),Qt();break;case 26:case 27:case 5:Ne(n);break;case 4:Qt();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:at(en);break;case 10:Wi(n.type);break;case 22:case 23:Qn(n),wu(),t!==null&&at(ar);break;case 24:Wi(an)}}function lo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==c)}}catch(b){Le(n,n.return,b)}}function Ea(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var _=s.inst,b=_.destroy;if(b!==void 0){_.destroy=void 0,c=n;var I=a,$=b;try{$()}catch(ut){Le(c,I,ut)}}}s=s.next}while(s!==f)}}catch(ut){Le(n,n.return,ut)}}function Km(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Hp(n,a)}catch(s){Le(t,t.return,s)}}}function Qm(t,n,a){a.props=cr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Le(t,n,s)}}function co(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Le(t,n,c)}}function wi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Le(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Le(t,n,c)}else a.current=null}function Jm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Le(t,t.return,c)}}function lf(t,n,a){try{var s=t.stateNode;jy(s,t.type,a,n),s[yn]=n}catch(c){Le(t,t.return,c)}}function $m(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Da(t.type)||t.tag===4}function cf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||$m(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Da(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hi));else if(s!==4&&(s===27&&Da(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(uf(t,n,a),t=t.sibling;t!==null;)uf(t,n,a),t=t.sibling}function Cl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Da(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Cl(t,n,a),t=t.sibling;t!==null;)Cl(t,n,a),t=t.sibling}function tg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,s,a),n[Ke]=t,n[yn]=a}catch(f){Le(t,t.return,f)}}var Ki=!1,on=!1,ff=!1,eg=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Ry(t,n){if(t=t.containerInfo,Lf=Zl,t=dp(t),iu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,b=-1,I=-1,$=0,ut=0,mt=t,it=null;e:for(;;){for(var ot;mt!==a||c!==0&&mt.nodeType!==3||(b=_+c),mt!==f||s!==0&&mt.nodeType!==3||(I=_+s),mt.nodeType===3&&(_+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)it=mt,mt=ot;for(;;){if(mt===t)break e;if(it===a&&++$===c&&(b=_),it===f&&++ut===s&&(I=_),(ot=mt.nextSibling)!==null)break;mt=it,it=mt.parentNode}mt=ot}a=b===-1||I===-1?null:{start:b,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nf={focusedElem:t,selectionRange:a},Zl=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ft=cr(a.type,c);t=s.getSnapshotBeforeUpdate(Ft,f),s.__reactInternalSnapshotBeforeUpdate=t}catch($t){Le(a,a.return,$t)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Pf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function ng(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(t,a),s&4&&lo(5,a);break;case 1:if(Ji(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Le(a,a.return,_)}else{var c=cr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Le(a,a.return,_)}}s&64&&Km(a),s&512&&co(a,a.return);break;case 3:if(Ji(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Hp(t,n)}catch(_){Le(a,a.return,_)}}break;case 27:n===null&&s&4&&tg(a);case 26:case 5:Ji(t,a),n===null&&s&4&&Jm(a),s&512&&co(a,a.return);break;case 12:Ji(t,a);break;case 31:Ji(t,a),s&4&&rg(t,a);break;case 13:Ji(t,a),s&4&&sg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Py.bind(null,a),nS(t,a))));break;case 22:if(s=a.memoizedState!==null||Ki,!s){n=n!==null&&n.memoizedState!==null||on,c=Ki;var f=on;Ki=s,(on=n)&&!f?$i(t,a,(a.subtreeFlags&8772)!==0):Ji(t,a),Ki=c,on=f}break;case 30:break;default:Ji(t,a)}}function ig(t){var n=t.alternate;n!==null&&(t.alternate=null,ig(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Bs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ze=null,In=!1;function Qi(t,n,a){for(a=a.child;a!==null;)ag(t,n,a),a=a.sibling}function ag(t,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:on||wi(a,n),Qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||wi(a,n);var s=Ze,c=In;Da(a.type)&&(Ze=a.stateNode,In=!1),Qi(t,n,a),yo(a.stateNode),Ze=s,In=c;break;case 5:on||wi(a,n);case 6:if(s=Ze,c=In,Ze=null,Qi(t,n,a),Ze=s,In=c,Ze!==null)if(In)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){Le(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){Le(a,n,f)}break;case 18:Ze!==null&&(In?(t=Ze,Kg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ss(t)):Kg(Ze,a.stateNode));break;case 4:s=Ze,c=In,Ze=a.stateNode.containerInfo,In=!0,Qi(t,n,a),Ze=s,In=c;break;case 0:case 11:case 14:case 15:Ea(2,a,n),on||Ea(4,a,n),Qi(t,n,a);break;case 1:on||(wi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Qm(a,n,s)),Qi(t,n,a);break;case 21:Qi(t,n,a);break;case 22:on=(s=on)||a.memoizedState!==null,Qi(t,n,a),on=s;break;default:Qi(t,n,a)}}function rg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ss(t)}catch(a){Le(n,n.return,a)}}}function sg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ss(t)}catch(a){Le(n,n.return,a)}}function Cy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new eg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new eg),n;default:throw Error(r(435,t.tag))}}function wl(t,n){var a=Cy(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=By.bind(null,t,s);s.then(c,c)}})}function Fn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,_=n,b=_;t:for(;b!==null;){switch(b.tag){case 27:if(Da(b.type)){Ze=b.stateNode,In=!1;break t}break;case 5:Ze=b.stateNode,In=!1;break t;case 3:case 4:Ze=b.stateNode.containerInfo,In=!0;break t}b=b.return}if(Ze===null)throw Error(r(160));ag(f,_,c),Ze=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)og(n,t),n=n.sibling}var vi=null;function og(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Fn(n,t),Hn(t),s&4&&(Ea(3,t,t.return),lo(3,t),Ea(5,t,t.return));break;case 1:Fn(n,t),Hn(t),s&512&&(on||a===null||wi(a,a.return)),s&64&&Ki&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=vi;if(Fn(n,t),Hn(t),s&512&&(on||a===null||wi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Za]||f[Ke]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,s,a),f[Ke]=t,W(f),s=f;break t;case"link":var _=o0("link","href",c).get(s+(a.href||""));if(_){for(var b=0;b<_.length;b++)if(f=_[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(b,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;case"meta":if(_=o0("meta","content",c).get(s+(a.content||""))){for(b=0;b<_.length;b++)if(f=_[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(b,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[Ke]=t,W(f),s=f}t.stateNode=s}else l0(c,t.type,t.stateNode);else t.stateNode=s0(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?l0(c,t.type,t.stateNode):s0(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&lf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,t),Hn(t),s&512&&(on||a===null||wi(a,a.return)),a!==null&&s&4&&lf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,t),Hn(t),s&512&&(on||a===null||wi(a,a.return)),t.flags&32){c=t.stateNode;try{Pn(c,"")}catch(Ft){Le(t,t.return,Ft)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,lf(t,c,a!==null?a.memoizedProps:c)),s&1024&&(ff=!0);break;case 6:if(Fn(n,t),Hn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Ft){Le(t,t.return,Ft)}}break;case 3:if(Wl=null,c=vi,vi=kl(n.containerInfo),Fn(n,t),vi=c,Hn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ss(n.containerInfo)}catch(Ft){Le(t,t.return,Ft)}ff&&(ff=!1,lg(t));break;case 4:s=vi,vi=kl(t.stateNode.containerInfo),Fn(n,t),Hn(t),vi=s;break;case 12:Fn(n,t),Hn(t);break;case 31:Fn(n,t),Hn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,wl(t,s)));break;case 13:Fn(n,t),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ul=E()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,wl(t,s)));break;case 22:c=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,$=Ki,ut=on;if(Ki=$||c,on=ut||I,Fn(n,t),on=ut,Ki=$,Hn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||Ki||on||ur(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{b=I.stateNode;var mt=I.memoizedProps.style,it=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;b.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Ft){Le(I,I.return,Ft)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Ft){Le(I,I.return,Ft)}}}else if(n.tag===18){if(a===null){I=n;try{var ot=I.stateNode;c?Qg(ot,!0):Qg(I.stateNode,!1)}catch(Ft){Le(I,I.return,Ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,wl(t,a))));break;case 19:Fn(n,t),Hn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,wl(t,s)));break;case 30:break;case 21:break;default:Fn(n,t),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if($m(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=cf(t);Cl(t,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(Pn(_,""),a.flags&=-33);var b=cf(t);Cl(t,b,_);break;case 3:case 4:var I=a.stateNode.containerInfo,$=cf(t);uf(t,$,I);break;default:throw Error(r(161))}}catch(ut){Le(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function lg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;lg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ng(t,n.alternate,n),n=n.sibling}function ur(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),ur(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Qm(n,n.return,a),ur(n);break;case 27:yo(n.stateNode);case 26:case 5:wi(n,n.return),ur(n);break;case 22:n.memoizedState===null&&ur(n);break;case 30:ur(n);break;default:ur(n)}t=t.sibling}}function $i(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:$i(c,f,a),lo(4,f);break;case 1:if($i(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Le(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var b=s.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Fp(I[c],b)}catch($){Le(s,s.return,$)}}a&&_&64&&Km(f),co(f,f.return);break;case 27:tg(f);case 26:case 5:$i(c,f,a),a&&s===null&&_&4&&Jm(f),co(f,f.return);break;case 12:$i(c,f,a);break;case 31:$i(c,f,a),a&&_&4&&rg(c,f);break;case 13:$i(c,f,a),a&&_&4&&sg(c,f);break;case 22:f.memoizedState===null&&$i(c,f,a),co(f,f.return);break;case 30:break;default:$i(c,f,a)}n=n.sibling}}function hf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Zs(a))}function df(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Zs(t))}function yi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)cg(t,n,a,s),n=n.sibling}function cg(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,s),c&2048&&lo(9,n);break;case 1:yi(t,n,a,s);break;case 3:yi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Zs(t)));break;case 12:if(c&2048){yi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,b=f.onPostCommit;typeof b=="function"&&b(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Le(n,n.return,I)}}else yi(t,n,a,s);break;case 31:yi(t,n,a,s);break;case 13:yi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?yi(t,n,a,s):uo(t,n):f._visibility&2?yi(t,n,a,s):(f._visibility|=2,Zr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&hf(_,n);break;case 24:yi(t,n,a,s),c&2048&&df(n.alternate,n);break;default:yi(t,n,a,s)}}function Zr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,b=a,I=s,$=_.flags;switch(_.tag){case 0:case 11:case 15:Zr(f,_,b,I,c),lo(8,_);break;case 23:break;case 22:var ut=_.stateNode;_.memoizedState!==null?ut._visibility&2?Zr(f,_,b,I,c):uo(f,_):(ut._visibility|=2,Zr(f,_,b,I,c)),c&&$&2048&&hf(_.alternate,_);break;case 24:Zr(f,_,b,I,c),c&&$&2048&&df(_.alternate,_);break;default:Zr(f,_,b,I,c)}n=n.sibling}}function uo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:uo(a,s),c&2048&&hf(s.alternate,s);break;case 24:uo(a,s),c&2048&&df(s.alternate,s);break;default:uo(a,s)}n=n.sibling}}var fo=8192;function Kr(t,n,a){if(t.subtreeFlags&fo)for(t=t.child;t!==null;)ug(t,n,a),t=t.sibling}function ug(t,n,a){switch(t.tag){case 26:Kr(t,n,a),t.flags&fo&&t.memoizedState!==null&&pS(a,vi,t.memoizedState,t.memoizedProps);break;case 5:Kr(t,n,a);break;case 3:case 4:var s=vi;vi=kl(t.stateNode.containerInfo),Kr(t,n,a),vi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=fo,fo=16777216,Kr(t,n,a),fo=s):Kr(t,n,a));break;default:Kr(t,n,a)}}function fg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ho(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,dg(s,t)}fg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hg(t),t=t.sibling}function hg(t){switch(t.tag){case 0:case 11:case 15:ho(t),t.flags&2048&&Ea(9,t,t.return);break;case 3:ho(t);break;case 12:ho(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Dl(t)):ho(t);break;default:ho(t)}}function Dl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,dg(s,t)}fg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Dl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Dl(n));break;default:Dl(n)}t=t.sibling}}function dg(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Zs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,gn=s;else t:for(a=t;gn!==null;){s=gn;var c=s.sibling,f=s.return;if(ig(s),s===a){gn=null;break t}if(c!==null){c.return=f,gn=c;break t}gn=f}}}var wy={getCacheForType:function(t){var n=Mn(an),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(an).controller.signal}},Dy=typeof WeakMap=="function"?WeakMap:Map,De=0,Xe=null,he=null,_e=0,Ue=0,Jn=null,Ta=!1,Qr=!1,pf=!1,ta=0,$e=0,ba=0,fr=0,mf=0,$n=0,Jr=0,po=null,Gn=null,gf=!1,Ul=0,pg=0,Ll=1/0,Nl=null,Aa=null,fn=0,Ra=null,$r=null,ea=0,_f=0,vf=null,mg=null,mo=0,yf=null;function ti(){return(De&2)!==0&&_e!==0?_e&-_e:z.T!==null?bf():zs()}function gg(){if($n===0)if((_e&536870912)===0||Me){var t=Et;Et<<=1,(Et&3932160)===0&&(Et=262144),$n=t}else $n=536870912;return t=Kn.current,t!==null&&(t.flags|=32),$n}function Vn(t,n,a){(t===Xe&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)&&(ts(t,0),Ca(t,_e,$n,!1)),vn(t,a),((De&2)===0||t!==Xe)&&(t===Xe&&((De&2)===0&&(fr|=a),$e===4&&Ca(t,_e,$n,!1)),Di(t))}function _g(t,n,a){if((De&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||It(t,n),c=s?Ny(t,n):xf(t,n,!0),f=s;do{if(c===0){Qr&&!s&&Ca(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Uy(a)){c=xf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var b=t;c=po;var I=b.current.memoizedState.isDehydrated;if(I&&(ts(b,_).flags|=256),_=xf(b,_,!1),_!==2){if(pf&&!I){b.errorRecoveryDisabledLanes|=f,fr|=f,c=4;break t}f=Gn,Gn=c,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){ts(t,0),Ca(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ca(s,n,$n,!Ta);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Ul+300-E(),10<c)){if(Ca(s,n,$n,!Ta),gt(s,0,!0)!==0)break t;ea=n,s.timeoutHandle=jg(vg.bind(null,s,a,Gn,Nl,gf,n,$n,fr,Jr,Ta,f,"Throttled",-0,0),c);break t}vg(s,a,Gn,Nl,gf,n,$n,fr,Jr,Ta,f,null,-0,0)}}break}while(!0);Di(t)}function vg(t,n,a,s,c,f,_,b,I,$,ut,mt,it,ot){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},ug(n,f,mt);var Ft=(f&62914560)===f?Ul-E():(f&4194048)===f?pg-E():0;if(Ft=mS(mt,Ft),Ft!==null){ea=f,t.cancelPendingCommit=Ft(Ag.bind(null,t,n,f,a,s,c,_,b,I,ut,mt,null,it,ot)),Ca(t,f,_,!$);return}}Ag(t,n,f,a,s,c,_,b,I)}function Uy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!jn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(t,n,a,s){n&=~mf,n&=~fr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Ht(c),_=1<<f;s[f]=-1,c&=~_}a!==0&&Ns(t,a,n)}function Ol(){return(De&6)===0?(go(0),!1):!0}function Sf(){if(he!==null){if(Ue===0)var t=he.return;else t=he,Xi=nr=null,zu(t),Xr=null,Qs=0,t=he;for(;t!==null;)Zm(t.alternate,t),t=t.return;he=null}}function ts(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Qy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ea=0,Sf(),Xe=t,he=a=Vi(t.current,null),_e=n,Ue=0,Jn=null,Ta=!1,Qr=It(t,n),pf=!1,Jr=$n=mf=fr=ba=$e=0,Gn=po=null,gf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Ht(s),f=1<<c;n|=t[c],s&=~f}return ta=n,el(),a}function yg(t,n){se=null,z.H=ro,n===kr||n===cl?(n=zp(),Ue=3):n===Eu?(n=zp(),Ue=4):Ue=n===Qu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,he===null&&($e=1,El(t,ai(n,t.current)))}function Sg(){var t=Kn.current;return t===null?!0:(_e&4194048)===_e?li===null:(_e&62914560)===_e||(_e&536870912)!==0?t===li:!1}function xg(){var t=z.H;return z.H=ro,t===null?ro:t}function Mg(){var t=z.A;return z.A=wy,t}function zl(){$e=4,Ta||(_e&4194048)!==_e&&Kn.current!==null||(Qr=!0),(ba&134217727)===0&&(fr&134217727)===0||Xe===null||Ca(Xe,_e,$n,!1)}function xf(t,n,a){var s=De;De|=2;var c=xg(),f=Mg();(Xe!==t||_e!==n)&&(Nl=null,ts(t,n)),n=!1;var _=$e;t:do try{if(Ue!==0&&he!==null){var b=he,I=Jn;switch(Ue){case 8:Sf(),_=6;break t;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var $=Ue;if(Ue=0,Jn=null,es(t,b,I,$),a&&Qr){_=0;break t}break;default:$=Ue,Ue=0,Jn=null,es(t,b,I,$)}}Ly(),_=$e;break}catch(ut){yg(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Xi=nr=null,De=s,z.H=c,z.A=f,he===null&&(Xe=null,_e=0,el()),_}function Ly(){for(;he!==null;)Eg(he)}function Ny(t,n){var a=De;De|=2;var s=xg(),c=Mg();Xe!==t||_e!==n?(Nl=null,Ll=E()+500,ts(t,n)):Qr=It(t,n);t:do try{if(Ue!==0&&he!==null){n=he;var f=Jn;e:switch(Ue){case 1:Ue=0,Jn=null,es(t,n,f,1);break;case 2:case 9:if(Np(f)){Ue=0,Jn=null,Tg(n);break}n=function(){Ue!==2&&Ue!==9||Xe!==t||(Ue=7),Di(t)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:Np(f)?(Ue=0,Jn=null,Tg(n)):(Ue=0,Jn=null,es(t,n,f,7));break;case 5:var _=null;switch(he.tag){case 26:_=he.memoizedState;case 5:case 27:var b=he;if(_?c0(_):b.stateNode.complete){Ue=0,Jn=null;var I=b.sibling;if(I!==null)he=I;else{var $=b.return;$!==null?(he=$,Pl($)):he=null}break e}}Ue=0,Jn=null,es(t,n,f,5);break;case 6:Ue=0,Jn=null,es(t,n,f,6);break;case 8:Sf(),$e=6;break t;default:throw Error(r(462))}}Oy();break}catch(ut){yg(t,ut)}while(!0);return Xi=nr=null,z.H=s,z.A=c,De=a,he!==null?0:(Xe=null,_e=0,el(),$e)}function Oy(){for(;he!==null&&!tn();)Eg(he)}function Eg(t){var n=Ym(t.alternate,t,ta);t.memoizedProps=t.pendingProps,n===null?Pl(t):he=n}function Tg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Gm(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Gm(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:zu(n);default:Zm(a,n),n=he=Mp(n,ta),n=Ym(a,n,ta)}t.memoizedProps=t.pendingProps,n===null?Pl(t):he=n}function es(t,n,a,s){Xi=nr=null,zu(n),Xr=null,Qs=0;var c=n.return;try{if(My(t,c,n,a,_e)){$e=1,El(t,ai(a,t.current)),he=null;return}}catch(f){if(c!==null)throw he=c,f;$e=1,El(t,ai(a,t.current)),he=null;return}n.flags&32768?(Me||s===1?t=!0:Qr||(_e&536870912)!==0?t=!1:(Ta=t=!0,(s===2||s===9||s===3||s===6)&&(s=Kn.current,s!==null&&s.tag===13&&(s.flags|=16384))),bg(n,t)):Pl(n)}function Pl(t){var n=t;do{if((n.flags&32768)!==0){bg(n,Ta);return}t=n.return;var a=by(n.alternate,n,ta);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);$e===0&&($e=5)}function bg(t,n){do{var a=Ay(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);$e=6,he=null}function Ag(t,n,a,s,c,f,_,b,I){t.cancelPendingCommit=null;do Bl();while(fn!==0);if((De&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=lu,pi(t,a,f,_,b,I),t===Xe&&(he=Xe=null,_e=0),$r=n,Ra=t,ea=a,_f=f,vf=c,mg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Iy(ct,function(){return Ug(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,c=K.p,K.p=2,_=De,De|=4;try{Ry(t,n,a)}finally{De=_,K.p=c,z.T=s}}fn=1,Rg(),Cg(),wg()}}function Rg(){if(fn===1){fn=0;var t=Ra,n=$r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=K.p;K.p=2;var c=De;De|=4;try{og(n,t);var f=Nf,_=dp(t.containerInfo),b=f.focusedElem,I=f.selectionRange;if(_!==b&&b&&b.ownerDocument&&hp(b.ownerDocument.documentElement,b)){if(I!==null&&iu(b)){var $=I.start,ut=I.end;if(ut===void 0&&(ut=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(ut,b.value.length);else{var mt=b.ownerDocument||document,it=mt&&mt.defaultView||window;if(it.getSelection){var ot=it.getSelection(),Ft=b.textContent.length,$t=Math.min(I.start,Ft),Fe=I.end===void 0?$t:Math.min(I.end,Ft);!ot.extend&&$t>Fe&&(_=Fe,Fe=$t,$t=_);var Y=fp(b,$t),G=fp(b,Fe);if(Y&&G&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==G.node||ot.focusOffset!==G.offset)){var J=mt.createRange();J.setStart(Y.node,Y.offset),ot.removeAllRanges(),$t>Fe?(ot.addRange(J),ot.extend(G.node,G.offset)):(J.setEnd(G.node,G.offset),ot.addRange(J))}}}}for(mt=[],ot=b;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<mt.length;b++){var dt=mt[b];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Zl=!!Lf,Nf=Lf=null}finally{De=c,K.p=s,z.T=a}}t.current=n,fn=2}}function Cg(){if(fn===2){fn=0;var t=Ra,n=$r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=K.p;K.p=2;var c=De;De|=4;try{ng(t,n.alternate,n)}finally{De=c,K.p=s,z.T=a}}fn=3}}function wg(){if(fn===4||fn===3){fn=0,O();var t=Ra,n=$r,a=ea,s=mg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,$r=Ra=null,Dg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Aa=null),Cr(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,c=K.p,K.p=2,z.T=null;try{for(var f=t.onRecoverableError,_=0;_<s.length;_++){var b=s[_];f(b.value,{componentStack:b.stack})}}finally{z.T=n,K.p=c}}(ea&3)!==0&&Bl(),Di(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===yf?mo++:(mo=0,yf=t):mo=0,go(0)}}function Dg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Zs(n)))}function Bl(){return Rg(),Cg(),wg(),Ug()}function Ug(){if(fn!==5)return!1;var t=Ra,n=_f;_f=0;var a=Cr(ea),s=z.T,c=K.p;try{K.p=32>a?32:a,z.T=null,a=vf,vf=null;var f=Ra,_=ea;if(fn=0,$r=Ra=null,ea=0,(De&6)!==0)throw Error(r(331));var b=De;if(De|=4,hg(f.current),cg(f,f.current,_,a),De=b,go(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{K.p=c,z.T=s,Dg(t,n)}}function Lg(t,n,a){n=ai(a,n),n=Ku(t.stateNode,n,2),t=Sa(t,n,2),t!==null&&(vn(t,2),Di(t))}function Le(t,n,a){if(t.tag===3)Lg(t,t,a);else for(;n!==null;){if(n.tag===3){Lg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Aa===null||!Aa.has(s))){t=ai(a,t),a=Nm(2),s=Sa(n,a,2),s!==null&&(Om(a,s,n,t),vn(s,2),Di(s));break}}n=n.return}}function Mf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Dy;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(pf=!0,c.add(a),t=zy.bind(null,t,n,a),n.then(t,t))}function zy(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(_e&a)===a&&($e===4||$e===3&&(_e&62914560)===_e&&300>E()-Ul?(De&2)===0&&ts(t,0):mf|=a,Jr===_e&&(Jr=0)),Di(t)}function Ng(t,n){n===0&&(n=ze()),t=$a(t,n),t!==null&&(vn(t,n),Di(t))}function Py(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Ng(t,a)}function By(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Ng(t,a)}function Iy(t,n){return jt(t,n)}var Il=null,ns=null,Ef=!1,Fl=!1,Tf=!1,wa=0;function Di(t){t!==ns&&t.next===null&&(ns===null?Il=ns=t:ns=ns.next=t),Fl=!0,Ef||(Ef=!0,Hy())}function go(t,n){if(!Tf&&Fl){Tf=!0;do for(var a=!1,s=Il;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var _=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-Ht(42|t)+1)-1,f&=c&~(_&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Bg(s,f))}else f=_e,f=gt(s,s===Xe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||It(s,f)||(a=!0,Bg(s,f));s=s.next}while(a);Tf=!1}}function Fy(){Og()}function Og(){Fl=Ef=!1;var t=0;wa!==0&&Ky()&&(t=wa);for(var n=E(),a=null,s=Il;s!==null;){var c=s.next,f=zg(s,n);f===0?(s.next=null,a===null?Il=c:a.next=c,c===null&&(ns=a)):(a=s,(t!==0||(f&3)!==0)&&(Fl=!0)),s=c}fn!==0&&fn!==5||go(t),wa!==0&&(wa=0)}function zg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Ht(f),b=1<<_,I=c[_];I===-1?((b&a)===0||(b&s)!==0)&&(c[_]=ie(b,n)):I<=n&&(t.expiredLanes|=b),f&=~b}if(n=Xe,a=_e,a=gt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&ae(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||It(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&ae(s),Cr(a)){case 2:case 8:a=vt;break;case 32:a=ct;break;case 268435456:a=wt;break;default:a=ct}return s=Pg.bind(null,t),a=jt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&ae(s),t.callbackPriority=2,t.callbackNode=null,2}function Pg(t,n){if(fn!==0&&fn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Bl()&&t.callbackNode!==a)return null;var s=_e;return s=gt(t,t===Xe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(_g(t,s,n),zg(t,E()),t.callbackNode!=null&&t.callbackNode===a?Pg.bind(null,t):null)}function Bg(t,n){if(Bl())return null;_g(t,n,!0)}function Hy(){Jy(function(){(De&6)!==0?jt(pt,Fy):Og()})}function bf(){if(wa===0){var t=Gr;t===0&&(t=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),wa=t}return wa}function Ig(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yo(""+t)}function Fg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Gy(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Ig((c[yn]||null).action),_=s.submitter;_&&(n=(n=_[yn]||null)?Ig(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var b=new Qo("action","action",null,s,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(wa!==0){var I=_?Fg(c,_):new FormData(c);Xu(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(b.preventDefault(),I=_?Fg(c,_):new FormData(c),Xu(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Af=0;Af<ou.length;Af++){var Rf=ou[Af],Vy=Rf.toLowerCase(),ky=Rf[0].toUpperCase()+Rf.slice(1);_i(Vy,"on"+ky)}_i(gp,"onAnimationEnd"),_i(_p,"onAnimationIteration"),_i(vp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(ry,"onTransitionRun"),_i(sy,"onTransitionStart"),_i(oy,"onTransitionCancel"),_i(yp,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function Hg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var b=s[_],I=b.instance,$=b.currentTarget;if(b=b.listener,I!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=$;try{f(c)}catch(ut){tl(ut)}c.currentTarget=null,f=I}else for(_=0;_<s.length;_++){if(b=s[_],I=b.instance,$=b.currentTarget,b=b.listener,I!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=$;try{f(c)}catch(ut){tl(ut)}c.currentTarget=null,f=I}}}}function de(t,n){var a=n[Ps];a===void 0&&(a=n[Ps]=new Set);var s=t+"__bubble";a.has(s)||(Gg(n,t,2,!1),a.add(s))}function Cf(t,n,a){var s=0;n&&(s|=4),Gg(a,t,s,n)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function wf(t){if(!t[Hl]){t[Hl]=!0,At.forEach(function(a){a!=="selectionchange"&&(Xy.has(a)||Cf(a,!1,t),Cf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Hl]||(n[Hl]=!0,Cf("selectionchange",!1,n))}}function Gg(t,n,a,s){switch(g0(n)){case 2:var c=vS;break;case 8:c=yS;break;default:c=Xf}a=c.bind(null,n,a,t),c=void 0,!jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Df(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var b=s.stateNode.containerInfo;if(b===c)break;if(_===4)for(_=s.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;b!==null;){if(_=w(b),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){s=f=_;continue t}b=b.parentNode}}s=s.return}qd(function(){var $=f,ut=qc(a),mt=[];t:{var it=Sp.get(t);if(it!==void 0){var ot=Qo,Ft=t;switch(t){case"keypress":if(Zo(a)===0)break t;case"keydown":case"keyup":ot=Bv;break;case"focusin":Ft="focus",ot=Jc;break;case"focusout":Ft="blur",ot=Jc;break;case"beforeblur":case"afterblur":ot=Jc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Hv;break;case gp:case _p:case vp:ot=Cv;break;case yp:ot=Vv;break;case"scroll":case"scrollend":ot=Ev;break;case"wheel":ot=Xv;break;case"copy":case"cut":case"paste":ot=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Qd;break;case"toggle":case"beforetoggle":ot=qv}var $t=(n&4)!==0,Fe=!$t&&(t==="scroll"||t==="scrollend"),Y=$t?it!==null?it+"Capture":null:it;$t=[];for(var G=$,J;G!==null;){var dt=G;if(J=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||J===null||Y===null||(dt=Is(G,Y),dt!=null&&$t.push(vo(G,dt,J))),Fe)break;G=G.return}0<$t.length&&(it=new ot(it,Ft,null,a,ut),mt.push({event:it,listeners:$t}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",it&&a!==Wc&&(Ft=a.relatedTarget||a.fromElement)&&(w(Ft)||Ft[Fi]))break t;if((ot||it)&&(it=ut.window===ut?ut:(it=ut.ownerDocument)?it.defaultView||it.parentWindow:window,ot?(Ft=a.relatedTarget||a.toElement,ot=$,Ft=Ft?w(Ft):null,Ft!==null&&(Fe=u(Ft),$t=Ft.tag,Ft!==Fe||$t!==5&&$t!==27&&$t!==6)&&(Ft=null)):(ot=null,Ft=$),ot!==Ft)){if($t=Zd,dt="onMouseLeave",Y="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&($t=Qd,dt="onPointerLeave",Y="onPointerEnter",G="pointer"),Fe=ot==null?it:rt(ot),J=Ft==null?it:rt(Ft),it=new $t(dt,G+"leave",ot,a,ut),it.target=Fe,it.relatedTarget=J,dt=null,w(ut)===$&&($t=new $t(Y,G+"enter",Ft,a,ut),$t.target=J,$t.relatedTarget=Fe,dt=$t),Fe=dt,ot&&Ft)e:{for($t=Wy,Y=ot,G=Ft,J=0,dt=Y;dt;dt=$t(dt))J++;dt=0;for(var Zt=G;Zt;Zt=$t(Zt))dt++;for(;0<J-dt;)Y=$t(Y),J--;for(;0<dt-J;)G=$t(G),dt--;for(;J--;){if(Y===G||G!==null&&Y===G.alternate){$t=Y;break e}Y=$t(Y),G=$t(G)}$t=null}else $t=null;ot!==null&&Vg(mt,it,ot,$t,!1),Ft!==null&&Fe!==null&&Vg(mt,Fe,Ft,$t,!0)}}t:{if(it=$?rt($):window,ot=it.nodeName&&it.nodeName.toLowerCase(),ot==="select"||ot==="input"&&it.type==="file")var Re=rp;else if(ip(it))if(sp)Re=ny;else{Re=ty;var Vt=$v}else ot=it.nodeName,!ot||ot.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?$&&Xc($.elementType)&&(Re=rp):Re=ey;if(Re&&(Re=Re(t,$))){ap(mt,Re,a,ut);break t}Vt&&Vt(t,it,$),t==="focusout"&&$&&it.type==="number"&&$.memoizedProps.value!=null&&Rn(it,"number",it.value)}switch(Vt=$?rt($):window,t){case"focusin":(ip(Vt)||Vt.contentEditable==="true")&&(Nr=Vt,au=$,qs=null);break;case"focusout":qs=au=Nr=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,pp(mt,a,ut);break;case"selectionchange":if(ay)break;case"keydown":case"keyup":pp(mt,a,ut)}var oe;if(tu)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Lr?ep(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Jd&&a.locale!=="ko"&&(Lr||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Lr&&(oe=Yd()):(da=ut,Zc="value"in da?da.value:da.textContent,Lr=!0)),Vt=Gl($,ve),0<Vt.length&&(ve=new Kd(ve,t,null,a,ut),mt.push({event:ve,listeners:Vt}),oe?ve.data=oe:(oe=np(a),oe!==null&&(ve.data=oe)))),(oe=jv?Zv(t,a):Kv(t,a))&&(ve=Gl($,"onBeforeInput"),0<ve.length&&(Vt=new Kd("onBeforeInput","beforeinput",null,a,ut),mt.push({event:Vt,listeners:ve}),Vt.data=oe)),Gy(mt,t,$,a,ut)}Hg(mt,n)})}function vo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Gl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Is(t,a),c!=null&&s.unshift(vo(t,c,f)),c=Is(t,n),c!=null&&s.push(vo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Wy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Vg(t,n,a,s,c){for(var f=n._reactName,_=[];a!==null&&a!==s;){var b=a,I=b.alternate,$=b.stateNode;if(b=b.tag,I!==null&&I===s)break;b!==5&&b!==26&&b!==27||$===null||(I=$,c?($=Is(a,f),$!=null&&_.unshift(vo(a,$,I))):c||($=Is(a,f),$!=null&&_.push(vo(a,$,I)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var qy=/\r\n?/g,Yy=/\u0000|\uFFFD/g;function kg(t){return(typeof t=="string"?t:""+t).replace(qy,`
`).replace(Yy,"")}function Xg(t,n){return n=kg(n),kg(t)===n}function Ie(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Pn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Pn(t,""+s);break;case"className":ke(t,"class",s);break;case"tabIndex":ke(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ke(t,a,s);break;case"style":Xd(t,s,f);break;case"data":if(n!=="object"){ke(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Yo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(t,n,"name",c.name,c,null),Ie(t,n,"formEncType",c.formEncType,c,null),Ie(t,n,"formMethod",c.formMethod,c,null),Ie(t,n,"formTarget",c.formTarget,c,null)):(Ie(t,n,"encType",c.encType,c,null),Ie(t,n,"method",c.method,c,null),Ie(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Yo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Hi);break;case"onScroll":s!=null&&de("scroll",t);break;case"onScrollEnd":s!=null&&de("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Yo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":de("beforetoggle",t),de("toggle",t),Ae(t,"popover",s);break;case"xlinkActuate":xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":xe(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":xe(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":xe(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":xe(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ae(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xv.get(a)||a,Ae(t,a,s))}}function Uf(t,n,a,s,c,f){switch(a){case"style":Xd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Pn(t,s):(typeof s=="number"||typeof s=="bigint")&&Pn(t,""+s);break;case"onScroll":s!=null&&de("scroll",t);break;case"onScrollEnd":s!=null&&de("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Ae(t,a,s)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",t),de("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(t,n,f,_,a,null)}}c&&Ie(t,n,"srcSet",a.srcSet,a,null),s&&Ie(t,n,"src",a.src,a,null);return;case"input":de("invalid",t);var b=f=_=c=null,I=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":c=ut;break;case"type":_=ut;break;case"checked":I=ut;break;case"defaultChecked":$=ut;break;case"value":f=ut;break;case"defaultValue":b=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Ie(t,n,s,ut,a,null)}}Ln(t,f,b,I,$,_,c,!1);return;case"select":de("invalid",t),s=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":_=b;break;case"multiple":s=b;default:Ie(t,n,c,b,a,null)}n=f,a=_,t.multiple=!!s,n!=null?Qe(t,!!s,n,!1):a!=null&&Qe(t,!!s,a,!0);return;case"textarea":de("invalid",t),f=c=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(b=a[_],b!=null))switch(_){case"value":s=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ie(t,n,_,b,a,null)}wr(t,s,c,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(s=a[I],s!=null)&&(I==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ie(t,n,I,s,a,null));return;case"dialog":de("beforetoggle",t),de("toggle",t),de("cancel",t),de("close",t);break;case"iframe":case"object":de("load",t);break;case"video":case"audio":for(s=0;s<_o.length;s++)de(_o[s],t);break;case"image":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"embed":case"source":case"link":de("error",t),de("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(t,n,$,s,a,null)}return;default:if(Xc(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&Uf(t,n,ut,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&Ie(t,n,b,s,a,null))}function jy(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,b=null,I=null,$=null,ut=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":I=mt;default:s.hasOwnProperty(ot)||Ie(t,n,ot,null,s,mt)}}for(var it in s){var ot=s[it];if(mt=a[it],s.hasOwnProperty(it)&&(ot!=null||mt!=null))switch(it){case"type":f=ot;break;case"name":c=ot;break;case"checked":$=ot;break;case"defaultChecked":ut=ot;break;case"value":_=ot;break;case"defaultValue":b=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==mt&&Ie(t,n,it,ot,s,mt)}}Pe(t,_,b,I,$,ut,f,c);return;case"select":ot=_=b=it=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ot=I;default:s.hasOwnProperty(f)||Ie(t,n,f,null,s,I)}for(c in s)if(f=s[c],I=a[c],s.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":it=f;break;case"defaultValue":b=f;break;case"multiple":_=f;default:f!==I&&Ie(t,n,c,f,s,I)}n=b,a=_,s=ot,it!=null?Qe(t,!!a,it,!1):!!s!=!!a&&(n!=null?Qe(t,!!a,n,!0):Qe(t,!!a,a?[]:"",!1));return;case"textarea":ot=it=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ie(t,n,b,null,s,c)}for(_ in s)if(c=s[_],f=a[_],s.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":it=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ie(t,n,_,c,s,f)}Sn(t,it,ot);return;case"option":for(var Ft in a)it=a[Ft],a.hasOwnProperty(Ft)&&it!=null&&!s.hasOwnProperty(Ft)&&(Ft==="selected"?t.selected=!1:Ie(t,n,Ft,null,s,it));for(I in s)it=s[I],ot=a[I],s.hasOwnProperty(I)&&it!==ot&&(it!=null||ot!=null)&&(I==="selected"?t.selected=it&&typeof it!="function"&&typeof it!="symbol":Ie(t,n,I,it,s,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)it=a[$t],a.hasOwnProperty($t)&&it!=null&&!s.hasOwnProperty($t)&&Ie(t,n,$t,null,s,it);for($ in s)if(it=s[$],ot=a[$],s.hasOwnProperty($)&&it!==ot&&(it!=null||ot!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Ie(t,n,$,it,s,ot)}return;default:if(Xc(n)){for(var Fe in a)it=a[Fe],a.hasOwnProperty(Fe)&&it!==void 0&&!s.hasOwnProperty(Fe)&&Uf(t,n,Fe,void 0,s,it);for(ut in s)it=s[ut],ot=a[ut],!s.hasOwnProperty(ut)||it===ot||it===void 0&&ot===void 0||Uf(t,n,ut,it,s,ot);return}}for(var Y in a)it=a[Y],a.hasOwnProperty(Y)&&it!=null&&!s.hasOwnProperty(Y)&&Ie(t,n,Y,null,s,it);for(mt in s)it=s[mt],ot=a[mt],!s.hasOwnProperty(mt)||it===ot||it==null&&ot==null||Ie(t,n,mt,it,s,ot)}function Wg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,_=c.initiatorType,b=c.duration;if(f&&b&&Wg(_)){for(_=0,b=c.responseEnd,s+=1;s<a.length;s++){var I=a[s],$=I.startTime;if($>b)break;var ut=I.transferSize,mt=I.initiatorType;ut&&Wg(mt)&&(I=I.responseEnd,_+=ut*(I<b?1:(b-$)/(I-$)))}if(--s,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Lf=null,Nf=null;function Vl(t){return t.nodeType===9?t:t.ownerDocument}function qg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Of(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function Ky(){var t=window.event;return t&&t.type==="popstate"?t===zf?!1:(zf=t,!0):(zf=null,!1)}var jg=typeof setTimeout=="function"?setTimeout:void 0,Qy=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,Jy=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(t){return Zg.resolve(null).then(t).catch($y)}:jg;function $y(t){setTimeout(function(){throw t})}function Da(t){return t==="head"}function Kg(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),ss(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")yo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,yo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,b=f.nodeName;f[Za]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&yo(t.ownerDocument.body);a=c}while(a);ss(n)}function Qg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Pf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pf(a),Bs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function tS(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Za])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function eS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function Jg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ci(t.nextSibling),t===null))return null;return t}function Bf(t){return t.data==="$?"||t.data==="$~"}function If(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function nS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ff=null;function $g(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function t0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function e0(t,n,a){switch(n=Vl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function yo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Bs(t)}var ui=new Map,n0=new Set;function kl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var na=K.d;K.d={f:iS,r:aS,D:rS,C:sS,L:oS,m:lS,X:uS,S:cS,M:fS};function iS(){var t=na.f(),n=Ol();return t||n}function aS(t){var n=q(t);n!==null&&n.tag===5&&n.type==="form"?ym(n):na.r(t)}var is=typeof document>"u"?null:document;function i0(t,n,a){var s=is;if(s&&typeof n=="string"&&n){var c=mn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),n0.has(c)||(n0.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Tn(n,"link",t),W(n),s.head.appendChild(n)))}}function rS(t){na.D(t),i0("dns-prefetch",t,null)}function sS(t,n){na.C(t,n),i0("preconnect",t,n)}function oS(t,n,a){na.L(t,n,a);var s=is;if(s&&t&&n){var c='link[rel="preload"][as="'+mn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+mn(a.imageSizes)+'"]')):c+='[href="'+mn(t)+'"]';var f=c;switch(n){case"style":f=as(t);break;case"script":f=rs(t)}ui.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(So(f))||n==="script"&&s.querySelector(xo(f))||(n=s.createElement("link"),Tn(n,"link",t),W(n),s.head.appendChild(n)))}}function lS(t,n){na.m(t,n);var a=is;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+mn(s)+'"][href="'+mn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=rs(t)}if(!ui.has(f)&&(t=v({rel:"modulepreload",href:t},n),ui.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(f)))return}s=a.createElement("link"),Tn(s,"link",t),W(s),a.head.appendChild(s)}}}function cS(t,n,a){na.S(t,n,a);var s=is;if(s&&t){var c=st(s).hoistableStyles,f=as(t);n=n||"default";var _=c.get(f);if(!_){var b={loading:0,preload:null};if(_=s.querySelector(So(f)))b.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(f))&&Hf(t,a);var I=_=s.createElement("link");W(I),Tn(I,"link",t),I._p=new Promise(function($,ut){I.onload=$,I.onerror=ut}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Xl(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:b},c.set(f,_)}}}function uS(t,n){na.X(t,n);var a=is;if(a&&t){var s=st(a).hoistableScripts,c=rs(t),f=s.get(c);f||(f=a.querySelector(xo(c)),f||(t=v({src:t,async:!0},n),(n=ui.get(c))&&Gf(t,n),f=a.createElement("script"),W(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function fS(t,n){na.M(t,n);var a=is;if(a&&t){var s=st(a).hoistableScripts,c=rs(t),f=s.get(c);f||(f=a.querySelector(xo(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=ui.get(c))&&Gf(t,n),f=a.createElement("script"),W(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function a0(t,n,a,s){var c=(c=bt.current)?kl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=as(a.href),a=st(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=as(a.href);var f=st(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(So(t)))&&!f._p&&(_.instance=f,_.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),f||hS(c,t,a,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rs(a),a=st(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function as(t){return'href="'+mn(t)+'"'}function So(t){return'link[rel="stylesheet"]['+t+"]"}function r0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function hS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Tn(n,"link",a),W(n),t.head.appendChild(n))}function rs(t){return'[src="'+mn(t)+'"]'}function xo(t){return"script[async]"+t}function s0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+mn(a.href)+'"]');if(s)return n.instance=s,W(s),s;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),W(s),Tn(s,"style",c),Xl(s,a.precedence,t),n.instance=s;case"stylesheet":c=as(a.href);var f=t.querySelector(So(c));if(f)return n.state.loading|=4,n.instance=f,W(f),f;s=r0(a),(c=ui.get(c))&&Hf(s,c),f=(t.ownerDocument||t).createElement("link"),W(f);var _=f;return _._p=new Promise(function(b,I){_.onload=b,_.onerror=I}),Tn(f,"link",s),n.state.loading|=4,Xl(f,a.precedence,t),n.instance=f;case"script":return f=rs(a.src),(c=t.querySelector(xo(f)))?(n.instance=c,W(c),c):(s=a,(c=ui.get(f))&&(s=v({},a),Gf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),W(c),Tn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Xl(s,a.precedence,t));return n.instance}function Xl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,_=0;_<s.length;_++){var b=s[_];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Hf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Wl=null;function o0(t,n,a){if(Wl===null){var s=new Map,c=Wl=new Map;c.set(a,s)}else c=Wl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Za]||f[Ke]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var b=s.get(_);b?b.push(f):s.set(_,[f])}}return s}function l0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function dS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function c0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function pS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=as(s.href),f=n.querySelector(So(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ql.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,W(f);return}f=n.ownerDocument||n,s=r0(s),(c=ui.get(c))&&Hf(s,c),f=f.createElement("link"),W(f);var _=f;_._p=new Promise(function(b,I){_.onload=b,_.onerror=I}),Tn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ql.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Vf=0;function mS(t,n){return t.stylesheets&&t.count===0&&jl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&jl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Vf===0&&(Vf=62500*Zy());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&jl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Vf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)jl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yl=null;function jl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yl=new Map,n.forEach(gS,t),Yl=null,ql.call(t))}function gS(t,n){if(!(n.state.loading&4)){var a=Yl.get(t);if(a)var s=a.get(null);else{a=new Map,Yl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,c),a.set(_,c),this.count++,s=ql.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Mo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function _S(t,n,a,s,c,f,_,b,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function u0(t,n,a,s,c,f,_,b,I,$,ut,mt){return t=new _S(t,n,a,_,I,$,ut,mt,b),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),t.current=f,f.stateNode=t,n=Su(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Tu(f),t}function f0(t){return t?(t=Pr,t):Pr}function h0(t,n,a,s,c,f){c=f0(c),s.context===null?s.context=c:s.pendingContext=c,s=ya(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Sa(t,s,n),a!==null&&(Vn(a,t,n),$s(a,t,n))}function d0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function kf(t,n){d0(t,n),(t=t.alternate)&&d0(t,n)}function p0(t){if(t.tag===13||t.tag===31){var n=$a(t,67108864);n!==null&&Vn(n,t,67108864),kf(t,67108864)}}function m0(t){if(t.tag===13||t.tag===31){var n=ti();n=Ya(n);var a=$a(t,n);a!==null&&Vn(a,t,n),kf(t,n)}}var Zl=!0;function vS(t,n,a,s){var c=z.T;z.T=null;var f=K.p;try{K.p=2,Xf(t,n,a,s)}finally{K.p=f,z.T=c}}function yS(t,n,a,s){var c=z.T;z.T=null;var f=K.p;try{K.p=8,Xf(t,n,a,s)}finally{K.p=f,z.T=c}}function Xf(t,n,a,s){if(Zl){var c=Wf(s);if(c===null)Df(t,n,s,Kl,a),_0(t,s);else if(xS(c,t,n,a,s))s.stopPropagation();else if(_0(t,s),n&4&&-1<SS.indexOf(t)){for(;c!==null;){var f=q(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Tt(f.pendingLanes);if(_!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;_;){var I=1<<31-Ht(_);b.entanglements[1]|=I,_&=~I}Di(f),(De&6)===0&&(Ll=E()+500,go(0))}}break;case 31:case 13:b=$a(f,2),b!==null&&Vn(b,f,2),Ol(),kf(f,2)}if(f=Wf(s),f===null&&Df(t,n,s,Kl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Df(t,n,s,null,a)}}function Wf(t){return t=qc(t),qf(t)}var Kl=null;function qf(t){if(Kl=null,t=w(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Kl=t,null}function g0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nt()){case pt:return 2;case vt:return 8;case ct:case Xt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var Yf=!1,Ua=null,La=null,Na=null,Eo=new Map,To=new Map,Oa=[],SS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _0(t,n){switch(t){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function bo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=q(n),n!==null&&p0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function xS(t,n,a,s,c){switch(n){case"focusin":return Ua=bo(Ua,t,n,a,s,c),!0;case"dragenter":return La=bo(La,t,n,a,s,c),!0;case"mouseover":return Na=bo(Na,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Eo.set(f,bo(Eo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,To.set(f,bo(To.get(f)||null,t,n,a,s,c)),!0}return!1}function v0(t){var n=w(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,ja(t.priority,function(){m0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,ja(t.priority,function(){m0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Wf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Wc=s,a.target.dispatchEvent(s),Wc=null}else return n=q(a),n!==null&&p0(n),t.blockedOn=a,!1;n.shift()}return!0}function y0(t,n,a){Ql(t)&&a.delete(n)}function MS(){Yf=!1,Ua!==null&&Ql(Ua)&&(Ua=null),La!==null&&Ql(La)&&(La=null),Na!==null&&Ql(Na)&&(Na=null),Eo.forEach(y0),To.forEach(y0)}function Jl(t,n){t.blockedOn===n&&(t.blockedOn=null,Yf||(Yf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,MS)))}var $l=null;function S0(t){$l!==t&&($l=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){$l===t&&($l=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(qf(s||a)===null)continue;break}var f=q(a);f!==null&&(t.splice(n,3),n-=3,Xu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function ss(t){function n(I){return Jl(I,t)}Ua!==null&&Jl(Ua,t),La!==null&&Jl(La,t),Na!==null&&Jl(Na,t),Eo.forEach(n),To.forEach(n);for(var a=0;a<Oa.length;a++){var s=Oa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)v0(a),a.blockedOn===null&&Oa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],_=c[yn]||null;if(typeof f=="function")_||S0(a);else if(_){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[yn]||null)b=_.formAction;else if(qf(c)!==null)continue}else b=_.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),S0(a)}}}function x0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function jf(t){this._internalRoot=t}tc.prototype.render=jf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ti();h0(a,s,t,n,null,null)},tc.prototype.unmount=jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;h0(t.current,2,null,t,null,null),Ol(),n[Fi]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var n=zs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Oa.length&&n!==0&&n<Oa[a].priority;a++);Oa.splice(a,0,t),a===0&&v0(t)}};var M0=e.version;if(M0!=="19.2.7")throw Error(r(527,M0,"19.2.7"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var ES={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{yt=ec.inject(ES),Ct=ec}catch{}}return Ao.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=wm,f=Dm,_=Um;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=u0(t,1,!1,null,null,a,s,null,c,f,_,x0),t[Fi]=n.current,wf(t),new jf(n)},Ao.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=wm,_=Dm,b=Um,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=u0(t,1,!0,n,a??null,s,c,I,f,_,b,x0),n.context=f0(null),a=n.current,s=ti(),s=Ya(s),c=ya(s),c.callback=null,Sa(a,c,s),a=s,n.current.lanes=a,vn(n,a),Di(n),t[Fi]=n.current,wf(t),new tc(n)},Ao.version="19.2.7",Ao}var D0;function LS(){if(D0)return Kf.exports;D0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Kf.exports=US(),Kf.exports}var NS=LS();const Ad="178",OS=0,U0=1,zS=2,B_=1,Rd=2,la=3,Wa=0,Wn=1,Li=2,ka=0,Ms=1,L0=2,N0=3,O0=4,PS=5,Sr=100,BS=101,IS=102,FS=103,HS=104,GS=200,VS=201,kS=202,XS=203,Oh=204,zh=205,WS=206,qS=207,YS=208,jS=209,ZS=210,KS=211,QS=212,JS=213,$S=214,Ph=0,Bh=1,Ih=2,bs=3,Fh=4,Hh=5,Gh=6,Vh=7,I_=0,tx=1,ex=2,Xa=0,nx=1,ix=2,ax=3,rx=4,sx=5,ox=6,lx=7,F_=300,As=301,Rs=302,kh=303,Xh=304,Ic=306,Wh=1e3,Tr=1001,qh=1002,bi=1003,cx=1004,nc=1005,Ni=1006,th=1007,br=1008,Bi=1009,H_=1010,G_=1011,zo=1012,Cd=1013,Ar=1014,ca=1015,Ho=1016,wd=1017,Dd=1018,Po=1020,V_=35902,k_=1021,X_=1022,Ti=1023,Bo=1026,Io=1027,W_=1028,Ud=1029,q_=1030,Ld=1031,Nd=1033,Rc=33776,Cc=33777,wc=33778,Dc=33779,Yh=35840,jh=35841,Zh=35842,Kh=35843,Qh=36196,Jh=37492,$h=37496,td=37808,ed=37809,nd=37810,id=37811,ad=37812,rd=37813,sd=37814,od=37815,ld=37816,cd=37817,ud=37818,fd=37819,hd=37820,dd=37821,Uc=36492,pd=36494,md=36495,Y_=36283,gd=36284,_d=36285,vd=36286,ux=3200,fx=3201,Od=0,hx=1,Va="",hi="srgb",Cs="srgb-linear",Nc="linear",He="srgb",os=7680,z0=519,dx=512,px=513,mx=514,j_=515,gx=516,_x=517,vx=518,yx=519,P0=35044,B0="300 es",ua=2e3,Oc=2001;class Ds{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eh=Math.PI/180,yd=180/Math.PI;function Go(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function Ee(o,e,i){return Math.max(e,Math.min(i,o))}function Sx(o,e){return(o%e+e)%e}function nh(o,e,i){return(1-i)*o+i*e}function Ro(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class pe{constructor(e=0,i=0){pe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ee(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],y=r[l+2],v=r[l+3];const S=u[h+0],M=u[h+1],T=u[h+2],C=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=y,e[i+3]=v;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=T,e[i+3]=C;return}if(v!==C||m!==S||p!==M||y!==T){let x=1-d;const g=m*S+p*M+y*T+v*C,P=g>=0?1:-1,U=1-g*g;if(U>Number.EPSILON){const V=Math.sqrt(U),F=Math.atan2(V,g*P);x=Math.sin(x*F)/V,d=Math.sin(d*F)/V}const D=d*P;if(m=m*x+S*D,p=p*x+M*D,y=y*x+T*D,v=v*x+C*D,x===1-d){const V=1/Math.sqrt(m*m+p*p+y*y+v*v);m*=V,p*=V,y*=V,v*=V}}e[i]=m,e[i+1]=p,e[i+2]=y,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],y=r[l+3],v=u[h],S=u[h+1],M=u[h+2],T=u[h+3];return e[i]=d*T+y*v+m*M-p*S,e[i+1]=m*T+y*S+p*v-d*M,e[i+2]=p*T+y*M+d*S-m*v,e[i+3]=y*T-d*v-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),y=d(l/2),v=d(u/2),S=m(r/2),M=m(l/2),T=m(u/2);switch(h){case"XYZ":this._x=S*y*v+p*M*T,this._y=p*M*v-S*y*T,this._z=p*y*T+S*M*v,this._w=p*y*v-S*M*T;break;case"YXZ":this._x=S*y*v+p*M*T,this._y=p*M*v-S*y*T,this._z=p*y*T-S*M*v,this._w=p*y*v+S*M*T;break;case"ZXY":this._x=S*y*v-p*M*T,this._y=p*M*v+S*y*T,this._z=p*y*T+S*M*v,this._w=p*y*v-S*M*T;break;case"ZYX":this._x=S*y*v-p*M*T,this._y=p*M*v+S*y*T,this._z=p*y*T-S*M*v,this._w=p*y*v+S*M*T;break;case"YZX":this._x=S*y*v+p*M*T,this._y=p*M*v+S*y*T,this._z=p*y*T-S*M*v,this._w=p*y*v-S*M*T;break;case"XZY":this._x=S*y*v-p*M*T,this._y=p*M*v-S*y*T,this._z=p*y*T+S*M*v,this._w=p*y*v+S*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],y=i[6],v=i[10],S=r+d+v;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(y-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(y-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+y)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ee(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,y=i._w;return this._x=r*y+h*d+l*p-u*m,this._y=l*y+h*m+u*d-r*p,this._z=u*y+h*p+r*m-l*d,this._w=h*y-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),y=Math.atan2(p,d),v=Math.sin((1-i)*y)/p,S=Math.sin(i*y)/p;return this._w=h*v+this._w*S,this._x=r*v+this._x*S,this._y=l*v+this._y*S,this._z=u*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,i=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(I0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(I0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),y=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*y,this.y=r+m*y+d*p-u*v,this.z=l+m*v+u*y-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ee(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new Q,I0=new Vo;class le{constructor(e,i,r,l,u,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const y=this.elements;return y[0]=e,y[1]=l,y[2]=d,y[3]=i,y[4]=u,y[5]=m,y[6]=r,y[7]=h,y[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],y=r[4],v=r[7],S=r[2],M=r[5],T=r[8],C=l[0],x=l[3],g=l[6],P=l[1],U=l[4],D=l[7],V=l[2],F=l[5],L=l[8];return u[0]=h*C+d*P+m*V,u[3]=h*x+d*U+m*F,u[6]=h*g+d*D+m*L,u[1]=p*C+y*P+v*V,u[4]=p*x+y*U+v*F,u[7]=p*g+y*D+v*L,u[2]=S*C+M*P+T*V,u[5]=S*x+M*U+T*F,u[8]=S*g+M*D+T*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],y=e[8];return i*h*y-i*d*p-r*u*y+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],y=e[8],v=y*h-d*p,S=d*m-y*u,M=p*u-h*m,T=i*v+r*S+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=v*C,e[1]=(l*p-y*r)*C,e[2]=(d*r-l*h)*C,e[3]=S*C,e[4]=(y*i-l*m)*C,e[5]=(l*u-d*i)*C,e[6]=M*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(ah.makeScale(e,i)),this}rotate(e){return this.premultiply(ah.makeRotation(-e)),this}translate(e,i){return this.premultiply(ah.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ah=new le;function Z_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function zc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function xx(){const o=zc("canvas");return o.style.display="block",o}const F0={};function Es(o){o in F0||(F0[o]=!0,console.warn(o))}function Mx(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function Ex(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Tx(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const H0=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),G0=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bx(){const o={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===He&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===He&&(l.r=Ts(l.r),l.g=Ts(l.g),l.b=Ts(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?Nc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Es("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Es("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Cs]:{primaries:e,whitePoint:r,transfer:Nc,toXYZ:H0,fromXYZ:G0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:He,toXYZ:H0,fromXYZ:G0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const we=bx();function fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ts(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ls;class Ax{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ls===void 0&&(ls=zc("canvas")),ls.width=e.width,ls.height=e.height;const l=ls.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ls}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=zc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=fa(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(fa(i[r]/255)*255):i[r]=fa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rx=0;class zd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=Go(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(rh(l[h].image)):u.push(rh(l[h]))}else u=rh(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function rh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ax.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cx=0;const sh=new Q;class qn extends Ds{constructor(e=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,r=Tr,l=Tr,u=Ni,h=br,d=Ti,m=Bi,p=qn.DEFAULT_ANISOTROPY,y=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Go(),this.name="",this.source=new zd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==F_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wh:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wh:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=F_;qn.DEFAULT_ANISOTROPY=1;class Ge{constructor(e=0,i=0,r=0,l=1){Ge.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],y=m[4],v=m[8],S=m[1],M=m[5],T=m[9],C=m[2],x=m[6],g=m[10];if(Math.abs(y-S)<.01&&Math.abs(v-C)<.01&&Math.abs(T-x)<.01){if(Math.abs(y+S)<.1&&Math.abs(v+C)<.1&&Math.abs(T+x)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,D=(M+1)/2,V=(g+1)/2,F=(y+S)/4,L=(v+C)/4,k=(T+x)/4;return U>D&&U>V?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=F/r,u=L/r):D>V?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=F/l,u=k/l):V<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(V),r=L/u,l=k/u),this.set(r,l,u,i),this}let P=Math.sqrt((x-T)*(x-T)+(v-C)*(v-C)+(S-y)*(S-y));return Math.abs(P)<.001&&(P=1),this.x=(x-T)/P,this.y=(v-C)/P,this.z=(S-y)/P,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this.w=Ee(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this.w=Ee(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wx extends Ds{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Ge(0,0,e,i),this.scissorTest=!1,this.viewport=new Ge(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new qn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new zd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends wx{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class K_ extends qn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dx extends qn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ko{constructor(e=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Si.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Si.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Si.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Si):Si.fromBufferAttribute(u,h),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ic.copy(r.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),ac.subVectors(this.max,Co),cs.subVectors(e.a,Co),us.subVectors(e.b,Co),fs.subVectors(e.c,Co),Pa.subVectors(us,cs),Ba.subVectors(fs,us),hr.subVectors(cs,fs);let i=[0,-Pa.z,Pa.y,0,-Ba.z,Ba.y,0,-hr.z,hr.y,Pa.z,0,-Pa.x,Ba.z,0,-Ba.x,hr.z,0,-hr.x,-Pa.y,Pa.x,0,-Ba.y,Ba.x,0,-hr.y,hr.x,0];return!oh(i,cs,us,fs,ac)||(i=[1,0,0,0,1,0,0,0,1],!oh(i,cs,us,fs,ac))?!1:(rc.crossVectors(Pa,Ba),i=[rc.x,rc.y,rc.z],oh(i,cs,us,fs,ac))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ia),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ia=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Si=new Q,ic=new ko,cs=new Q,us=new Q,fs=new Q,Pa=new Q,Ba=new Q,hr=new Q,Co=new Q,ac=new Q,rc=new Q,dr=new Q;function oh(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){dr.fromArray(o,u);const d=l.x*Math.abs(dr.x)+l.y*Math.abs(dr.y)+l.z*Math.abs(dr.z),m=e.dot(dr),p=i.dot(dr),y=r.dot(dr);if(Math.max(-Math.max(m,p,y),Math.min(m,p,y))>d)return!1}return!0}const Ux=new ko,wo=new Q,lh=new Q;class Xo{constructor(e=new Q,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Ux.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wo.subVectors(e,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(wo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wo.copy(e.center).add(lh)),this.expandByPoint(wo.copy(e.center).sub(lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const aa=new Q,ch=new Q,sc=new Q,Ia=new Q,uh=new Q,oc=new Q,fh=new Q;class Pd{constructor(e=new Q,i=new Q(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,aa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=aa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){ch.copy(e).add(i).multiplyScalar(.5),sc.copy(i).sub(e).normalize(),Ia.copy(this.origin).sub(ch);const u=e.distanceTo(i)*.5,h=-this.direction.dot(sc),d=Ia.dot(this.direction),m=-Ia.dot(sc),p=Ia.lengthSq(),y=Math.abs(1-h*h);let v,S,M,T;if(y>0)if(v=h*m-d,S=h*d-m,T=u*y,v>=0)if(S>=-T)if(S<=T){const C=1/y;v*=C,S*=C,M=v*(v+h*S+2*d)+S*(h*v+S+2*m)+p}else S=u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;else S=-u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;else S<=-T?(v=Math.max(0,-(-h*u+d)),S=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p):S<=T?(v=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(v=Math.max(0,-(h*u+d)),S=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p);else S=h>0?-u:u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(ch).addScaledVector(sc,S),M}intersectSphere(e,i){aa.subVectors(e.center,this.origin);const r=aa.dot(this.direction),l=aa.dot(aa)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,y=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),y>=0?(u=(e.min.y-S.y)*y,h=(e.max.y-S.y)*y):(u=(e.max.y-S.y)*y,h=(e.min.y-S.y)*y),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-S.z)*v,m=(e.max.z-S.z)*v):(d=(e.max.z-S.z)*v,m=(e.min.z-S.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,aa)!==null}intersectTriangle(e,i,r,l,u){uh.subVectors(i,e),oc.subVectors(r,e),fh.crossVectors(uh,oc);let h=this.direction.dot(fh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ia.subVectors(this.origin,e);const m=d*this.direction.dot(oc.crossVectors(Ia,oc));if(m<0)return null;const p=d*this.direction.dot(uh.cross(Ia));if(p<0||m+p>h)return null;const y=-d*Ia.dot(fh);return y<0?null:this.at(y/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,i,r,l,u,h,d,m,p,y,v,S,M,T,C,x){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,y,v,S,M,T,C,x)}set(e,i,r,l,u,h,d,m,p,y,v,S,M,T,C,x){const g=this.elements;return g[0]=e,g[4]=i,g[8]=r,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=y,g[10]=v,g[14]=S,g[3]=M,g[7]=T,g[11]=C,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/hs.setFromMatrixColumn(e,0).length(),u=1/hs.setFromMatrixColumn(e,1).length(),h=1/hs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),y=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const S=h*y,M=h*v,T=d*y,C=d*v;i[0]=m*y,i[4]=-m*v,i[8]=p,i[1]=M+T*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=T+M*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*y,M=m*v,T=p*y,C=p*v;i[0]=S+C*d,i[4]=T*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*y,i[9]=-d,i[2]=M*d-T,i[6]=C+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*y,M=m*v,T=p*y,C=p*v;i[0]=S-C*d,i[4]=-h*v,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*y,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*y,M=h*v,T=d*y,C=d*v;i[0]=m*y,i[4]=T*p-M,i[8]=S*p+C,i[1]=m*v,i[5]=C*p+S,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,M=h*p,T=d*m,C=d*p;i[0]=m*y,i[4]=C-S*v,i[8]=T*v+M,i[1]=v,i[5]=h*y,i[9]=-d*y,i[2]=-p*y,i[6]=M*v+T,i[10]=S-C*v}else if(e.order==="XZY"){const S=h*m,M=h*p,T=d*m,C=d*p;i[0]=m*y,i[4]=-v,i[8]=p*y,i[1]=S*v+C,i[5]=h*y,i[9]=M*v-T,i[2]=T*v-M,i[6]=d*y,i[10]=C*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lx,e,Nx)}lookAt(e,i,r){const l=this.elements;return ei.subVectors(e,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Fa.crossVectors(r,ei),Fa.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Fa.crossVectors(r,ei)),Fa.normalize(),lc.crossVectors(ei,Fa),l[0]=Fa.x,l[4]=lc.x,l[8]=ei.x,l[1]=Fa.y,l[5]=lc.y,l[9]=ei.y,l[2]=Fa.z,l[6]=lc.z,l[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],y=r[1],v=r[5],S=r[9],M=r[13],T=r[2],C=r[6],x=r[10],g=r[14],P=r[3],U=r[7],D=r[11],V=r[15],F=l[0],L=l[4],k=l[8],R=l[12],A=l[1],B=l[5],tt=l[9],et=l[13],lt=l[2],ht=l[6],z=l[10],K=l[14],Z=l[3],xt=l[7],Rt=l[11],N=l[15];return u[0]=h*F+d*A+m*lt+p*Z,u[4]=h*L+d*B+m*ht+p*xt,u[8]=h*k+d*tt+m*z+p*Rt,u[12]=h*R+d*et+m*K+p*N,u[1]=y*F+v*A+S*lt+M*Z,u[5]=y*L+v*B+S*ht+M*xt,u[9]=y*k+v*tt+S*z+M*Rt,u[13]=y*R+v*et+S*K+M*N,u[2]=T*F+C*A+x*lt+g*Z,u[6]=T*L+C*B+x*ht+g*xt,u[10]=T*k+C*tt+x*z+g*Rt,u[14]=T*R+C*et+x*K+g*N,u[3]=P*F+U*A+D*lt+V*Z,u[7]=P*L+U*B+D*ht+V*xt,u[11]=P*k+U*tt+D*z+V*Rt,u[15]=P*R+U*et+D*K+V*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],y=e[2],v=e[6],S=e[10],M=e[14],T=e[3],C=e[7],x=e[11],g=e[15];return T*(+u*m*v-l*p*v-u*d*S+r*p*S+l*d*M-r*m*M)+C*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*y-u*m*y)+x*(+i*p*v-i*d*M-u*h*v+r*h*M+u*d*y-r*p*y)+g*(-l*d*y-i*m*v+i*d*S+l*h*v-r*h*S+r*m*y)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],y=e[8],v=e[9],S=e[10],M=e[11],T=e[12],C=e[13],x=e[14],g=e[15],P=v*x*p-C*S*p+C*m*M-d*x*M-v*m*g+d*S*g,U=T*S*p-y*x*p-T*m*M+h*x*M+y*m*g-h*S*g,D=y*C*p-T*v*p+T*d*M-h*C*M-y*d*g+h*v*g,V=T*v*m-y*C*m-T*d*S+h*C*S+y*d*x-h*v*x,F=i*P+r*U+l*D+u*V;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/F;return e[0]=P*L,e[1]=(C*S*u-v*x*u-C*l*M+r*x*M+v*l*g-r*S*g)*L,e[2]=(d*x*u-C*m*u+C*l*p-r*x*p-d*l*g+r*m*g)*L,e[3]=(v*m*u-d*S*u-v*l*p+r*S*p+d*l*M-r*m*M)*L,e[4]=U*L,e[5]=(y*x*u-T*S*u+T*l*M-i*x*M-y*l*g+i*S*g)*L,e[6]=(T*m*u-h*x*u-T*l*p+i*x*p+h*l*g-i*m*g)*L,e[7]=(h*S*u-y*m*u+y*l*p-i*S*p-h*l*M+i*m*M)*L,e[8]=D*L,e[9]=(T*v*u-y*C*u-T*r*M+i*C*M+y*r*g-i*v*g)*L,e[10]=(h*C*u-T*d*u+T*r*p-i*C*p-h*r*g+i*d*g)*L,e[11]=(y*d*u-h*v*u-y*r*p+i*v*p+h*r*M-i*d*M)*L,e[12]=V*L,e[13]=(y*C*l-T*v*l+T*r*S-i*C*S-y*r*x+i*v*x)*L,e[14]=(T*d*l-h*C*l-T*r*m+i*C*m+h*r*x-i*d*x)*L,e[15]=(h*v*l-y*d*l+y*r*m-i*v*m-h*r*S+i*d*S)*L,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,y=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,y*d+r,y*m-l*h,0,p*m-l*d,y*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,y=h+h,v=d+d,S=u*p,M=u*y,T=u*v,C=h*y,x=h*v,g=d*v,P=m*p,U=m*y,D=m*v,V=r.x,F=r.y,L=r.z;return l[0]=(1-(C+g))*V,l[1]=(M+D)*V,l[2]=(T-U)*V,l[3]=0,l[4]=(M-D)*F,l[5]=(1-(S+g))*F,l[6]=(x+P)*F,l[7]=0,l[8]=(T+U)*L,l[9]=(x-P)*L,l[10]=(1-(S+C))*L,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=hs.set(l[0],l[1],l[2]).length();const h=hs.set(l[4],l[5],l[6]).length(),d=hs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],xi.copy(this);const p=1/u,y=1/h,v=1/d;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=y,xi.elements[5]*=y,xi.elements[6]*=y,xi.elements[8]*=v,xi.elements[9]*=v,xi.elements[10]*=v,i.setFromRotationMatrix(xi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=ua){const m=this.elements,p=2*u/(i-e),y=2*u/(r-l),v=(i+e)/(i-e),S=(r+l)/(r-l);let M,T;if(d===ua)M=-(h+u)/(h-u),T=-2*h*u/(h-u);else if(d===Oc)M=-h/(h-u),T=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=y,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=ua){const m=this.elements,p=1/(i-e),y=1/(r-l),v=1/(h-u),S=(i+e)*p,M=(r+l)*y;let T,C;if(d===ua)T=(h+u)*v,C=-2*v;else if(d===Oc)T=u*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*y,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=C,m[14]=-T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const hs=new Q,xi=new je,Lx=new Q(0,0,0),Nx=new Q(1,1,1),Fa=new Q,lc=new Q,ei=new Q,V0=new je,k0=new Vo;class Ii{constructor(e=0,i=0,r=0,l=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],y=l[9],v=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-y,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-y,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return V0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(V0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return k0.setFromEuler(this),this.setFromQuaternion(k0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class Q_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ox=0;const X0=new Q,ds=new Vo,ra=new je,cc=new Q,Do=new Q,zx=new Q,Px=new Vo,W0=new Q(1,0,0),q0=new Q(0,1,0),Y0=new Q(0,0,1),j0={type:"added"},Bx={type:"removed"},ps={type:"childadded",child:null},hh={type:"childremoved",child:null};class hn extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=Go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new Q,i=new Ii,r=new Vo,l=new Q(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new le}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Q_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ds.setFromAxisAngle(e,i),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,i){return ds.setFromAxisAngle(e,i),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(W0,e)}rotateY(e){return this.rotateOnAxis(q0,e)}rotateZ(e){return this.rotateOnAxis(Y0,e)}translateOnAxis(e,i){return X0.copy(e).applyQuaternion(this.quaternion),this.position.add(X0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(W0,e)}translateY(e){return this.translateOnAxis(q0,e)}translateZ(e){return this.translateOnAxis(Y0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?cc.copy(e):cc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(Do,cc,this.up):ra.lookAt(cc,Do,this.up),this.quaternion.setFromRotationMatrix(ra),l&&(ra.extractRotation(l.matrixWorld),ds.setFromRotationMatrix(ra),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(j0),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Bx),hh.child=e,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(j0),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,zx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,Px,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,y=m.length;p<y;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),y=h(e.images),v=h(e.shapes),S=h(e.skeletons),M=h(e.animations),T=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),y.length>0&&(r.images=y),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(d){const m=[];for(const p in d){const y=d[p];delete y.metadata,m.push(y)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}hn.DEFAULT_UP=new Q(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new Q,sa=new Q,dh=new Q,oa=new Q,ms=new Q,gs=new Q,Z0=new Q,ph=new Q,mh=new Q,gh=new Q,_h=new Ge,vh=new Ge,yh=new Ge;class Ei{constructor(e=new Q,i=new Q,r=new Q){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Mi.subVectors(e,i),l.cross(Mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Mi.subVectors(l,i),sa.subVectors(r,i),dh.subVectors(e,i);const h=Mi.dot(Mi),d=Mi.dot(sa),m=Mi.dot(dh),p=sa.dot(sa),y=sa.dot(dh),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const S=1/v,M=(p*m-d*y)*S,T=(h*y-d*m)*S;return u.set(1-M-T,T,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,oa.x),m.addScaledVector(h,oa.y),m.addScaledVector(d,oa.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return _h.setScalar(0),vh.setScalar(0),yh.setScalar(0),_h.fromBufferAttribute(e,i),vh.fromBufferAttribute(e,r),yh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(_h,u.x),h.addScaledVector(vh,u.y),h.addScaledVector(yh,u.z),h}static isFrontFacing(e,i,r,l){return Mi.subVectors(r,i),sa.subVectors(e,i),Mi.cross(sa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),Mi.cross(sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ei.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ei.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;ms.subVectors(l,r),gs.subVectors(u,r),ph.subVectors(e,r);const m=ms.dot(ph),p=gs.dot(ph);if(m<=0&&p<=0)return i.copy(r);mh.subVectors(e,l);const y=ms.dot(mh),v=gs.dot(mh);if(y>=0&&v<=y)return i.copy(l);const S=m*v-y*p;if(S<=0&&m>=0&&y<=0)return h=m/(m-y),i.copy(r).addScaledVector(ms,h);gh.subVectors(e,u);const M=ms.dot(gh),T=gs.dot(gh);if(T>=0&&M<=T)return i.copy(u);const C=M*p-m*T;if(C<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(r).addScaledVector(gs,d);const x=y*T-M*v;if(x<=0&&v-y>=0&&M-T>=0)return Z0.subVectors(u,l),d=(v-y)/(v-y+(M-T)),i.copy(l).addScaledVector(Z0,d);const g=1/(x+C+S);return h=C*g,d=S*g,i.copy(r).addScaledVector(ms,h).addScaledVector(gs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const J_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},uc={h:0,s:0,l:0};function Sh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ye{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=we.workingColorSpace){return this.r=e,this.g=i,this.b=r,we.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=we.workingColorSpace){if(e=Sx(e,1),i=Ee(i,0,1),r=Ee(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=Sh(h,u,e+1/3),this.g=Sh(h,u,e),this.b=Sh(h,u,e-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(e,i=hi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=hi){const r=J_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return we.workingToColorSpace(Dn.copy(this),e),Math.round(Ee(Dn.r*255,0,255))*65536+Math.round(Ee(Dn.g*255,0,255))*256+Math.round(Ee(Dn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=we.workingColorSpace){we.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,u=Dn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const y=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=y<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=y,e}getRGB(e,i=we.workingColorSpace){return we.workingToColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=hi){we.workingToColorSpace(Dn.copy(this),e);const i=Dn.r,r=Dn.g,l=Dn.b;return e!==hi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ha),this.setHSL(Ha.h+e,Ha.s+i,Ha.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ha),e.getHSL(uc);const r=nh(Ha.h,uc.h,i),l=nh(Ha.s,uc.s,i),u=nh(Ha.l,uc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new ye;ye.NAMES=J_;let Ix=0;class qa extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=Go(),this.name="",this.type="Material",this.blending=Ms,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=zh,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(r.blending=this.blending),this.side!==Wa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Oh&&(r.blendSrc=this.blendSrc),this.blendDst!==zh&&(r.blendDst=this.blendDst),this.blendEquation!==Sr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==z0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(r.stencilFail=this.stencilFail),this.stencilZFail!==os&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xr extends qa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=I_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new Q,fc=new pe;let Fx=0;class di{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fx++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=P0,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)fc.fromBufferAttribute(this,i),fc.applyMatrix3(e),this.setXY(i,fc.x,fc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(e),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ro(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=kn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ro(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ro(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ro(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ro(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==P0&&(e.usage=this.usage),e}}class $_ extends di{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class tv extends di{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class bn extends di{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Hx=0;const fi=new je,xh=new hn,_s=new Q,ni=new ko,Uo=new ko,_n=new Q;class zn extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z_(e)?tv:$_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new le().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,r){return fi.makeTranslation(e,i,r),this.applyMatrix4(fi),this}scale(e,i,r){return fi.makeScale(e,i,r),this.applyMatrix4(fi),this}lookAt(e){return xh.lookAt(e),xh.updateMatrix(),this.applyMatrix4(xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new bn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ni.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Uo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(ni.min,Uo.min),ni.expandByPoint(_n),_n.addVectors(ni.max,Uo.max),ni.expandByPoint(_n)):(ni.expandByPoint(Uo.min),ni.expandByPoint(Uo.max))}ni.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,y=d.count;p<y;p++)_n.fromBufferAttribute(d,p),m&&(_s.fromBufferAttribute(e,p),_n.add(_s)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let k=0;k<r.count;k++)d[k]=new Q,m[k]=new Q;const p=new Q,y=new Q,v=new Q,S=new pe,M=new pe,T=new pe,C=new Q,x=new Q;function g(k,R,A){p.fromBufferAttribute(r,k),y.fromBufferAttribute(r,R),v.fromBufferAttribute(r,A),S.fromBufferAttribute(u,k),M.fromBufferAttribute(u,R),T.fromBufferAttribute(u,A),y.sub(p),v.sub(p),M.sub(S),T.sub(S);const B=1/(M.x*T.y-T.x*M.y);isFinite(B)&&(C.copy(y).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(B),x.copy(v).multiplyScalar(M.x).addScaledVector(y,-T.x).multiplyScalar(B),d[k].add(C),d[R].add(C),d[A].add(C),m[k].add(x),m[R].add(x),m[A].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let k=0,R=P.length;k<R;++k){const A=P[k],B=A.start,tt=A.count;for(let et=B,lt=B+tt;et<lt;et+=3)g(e.getX(et+0),e.getX(et+1),e.getX(et+2))}const U=new Q,D=new Q,V=new Q,F=new Q;function L(k){V.fromBufferAttribute(l,k),F.copy(V);const R=d[k];U.copy(R),U.sub(V.multiplyScalar(V.dot(R))).normalize(),D.crossVectors(F,R);const B=D.dot(m[k])<0?-1:1;h.setXYZW(k,U.x,U.y,U.z,B)}for(let k=0,R=P.length;k<R;++k){const A=P[k],B=A.start,tt=A.count;for(let et=B,lt=B+tt;et<lt;et+=3)L(e.getX(et+0)),L(e.getX(et+1)),L(e.getX(et+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new di(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new Q,u=new Q,h=new Q,d=new Q,m=new Q,p=new Q,y=new Q,v=new Q;if(e)for(let S=0,M=e.count;S<M;S+=3){const T=e.getX(S+0),C=e.getX(S+1),x=e.getX(S+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,x),y.subVectors(h,u),v.subVectors(l,u),y.cross(v),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,x),d.add(y),m.add(y),p.add(y),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),y.subVectors(h,u),v.subVectors(l,u),y.cross(v),r.setXYZ(S+0,y.x,y.y,y.z),r.setXYZ(S+1,y.x,y.y,y.z),r.setXYZ(S+2,y.x,y.y,y.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,y=d.itemSize,v=d.normalized,S=new p.constructor(m.length*y);let M=0,T=0;for(let C=0,x=m.length;C<x;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*y;for(let g=0;g<y;g++)S[T++]=p[M++]}return new di(S,y,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zn,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let y=0,v=p.length;y<v;y++){const S=p[y],M=e(S,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],y=[];for(let v=0,S=p.length;v<S;v++){const M=p[v];y.push(M.toJSON(e.data))}y.length>0&&(l[m]=y,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const y=l[p];this.setAttribute(p,y.clone(i))}const u=e.morphAttributes;for(const p in u){const y=[],v=u[p];for(let S=0,M=v.length;S<M;S++)y.push(v[S].clone(i));this.morphAttributes[p]=y}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,y=h.length;p<y;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const K0=new je,pr=new Pd,hc=new Xo,Q0=new Q,dc=new Q,pc=new Q,mc=new Q,Mh=new Q,gc=new Q,J0=new Q,_c=new Q;class cn extends hn{constructor(e=new zn,i=new xr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){gc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const y=d[m],v=u[m];y!==0&&(Mh.fromBufferAttribute(v,e),h?gc.addScaledVector(Mh,y):gc.addScaledVector(Mh.sub(i),y))}i.add(gc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hc.copy(r.boundingSphere),hc.applyMatrix4(u),pr.copy(e.ray).recast(e.near),!(hc.containsPoint(pr.origin)===!1&&(pr.intersectSphere(hc,Q0)===null||pr.origin.distanceToSquared(Q0)>(e.far-e.near)**2))&&(K0.copy(u).invert(),pr.copy(e.ray).applyMatrix4(K0),!(r.boundingBox!==null&&pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,pr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,y=u.attributes.uv1,v=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,C=S.length;T<C;T++){const x=S[T],g=h[x.materialIndex],P=Math.max(x.start,M.start),U=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let D=P,V=U;D<V;D+=3){const F=d.getX(D),L=d.getX(D+1),k=d.getX(D+2);l=vc(this,g,e,r,p,y,v,F,L,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let x=T,g=C;x<g;x+=3){const P=d.getX(x),U=d.getX(x+1),D=d.getX(x+2);l=vc(this,h,e,r,p,y,v,P,U,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,C=S.length;T<C;T++){const x=S[T],g=h[x.materialIndex],P=Math.max(x.start,M.start),U=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let D=P,V=U;D<V;D+=3){const F=D,L=D+1,k=D+2;l=vc(this,g,e,r,p,y,v,F,L,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let x=T,g=C;x<g;x+=3){const P=x,U=x+1,D=x+2;l=vc(this,h,e,r,p,y,v,P,U,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function Gx(o,e,i,r,l,u,h,d){let m;if(e.side===Wn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Wa,d),m===null)return null;_c.copy(d),_c.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(_c);return p<i.near||p>i.far?null:{distance:p,point:_c.clone(),object:o}}function vc(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,dc),o.getVertexPosition(m,pc),o.getVertexPosition(p,mc);const y=Gx(o,e,i,r,dc,pc,mc,J0);if(y){const v=new Q;Ei.getBarycoord(J0,dc,pc,mc,v),l&&(y.uv=Ei.getInterpolatedAttribute(l,d,m,p,v,new pe)),u&&(y.uv1=Ei.getInterpolatedAttribute(u,d,m,p,v,new pe)),h&&(y.normal=Ei.getInterpolatedAttribute(h,d,m,p,v,new Q),y.normal.dot(r.direction)>0&&y.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new Q,materialIndex:0};Ei.getNormal(dc,pc,mc,S.normal),y.face=S,y.barycoord=v}return y}class Us extends zn{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],y=[],v=[];let S=0,M=0;T("z","y","x",-1,-1,r,i,e,h,u,0),T("z","y","x",1,-1,r,i,-e,h,u,1),T("x","z","y",1,1,e,r,i,l,h,2),T("x","z","y",1,-1,e,r,-i,l,h,3),T("x","y","z",1,-1,e,i,r,l,u,4),T("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new bn(p,3)),this.setAttribute("normal",new bn(y,3)),this.setAttribute("uv",new bn(v,2));function T(C,x,g,P,U,D,V,F,L,k,R){const A=D/L,B=V/k,tt=D/2,et=V/2,lt=F/2,ht=L+1,z=k+1;let K=0,Z=0;const xt=new Q;for(let Rt=0;Rt<z;Rt++){const N=Rt*B-et;for(let at=0;at<ht;at++){const St=at*A-tt;xt[C]=St*P,xt[x]=N*U,xt[g]=lt,p.push(xt.x,xt.y,xt.z),xt[C]=0,xt[x]=0,xt[g]=F>0?1:-1,y.push(xt.x,xt.y,xt.z),v.push(at/L),v.push(1-Rt/k),K+=1}}for(let Rt=0;Rt<k;Rt++)for(let N=0;N<L;N++){const at=S+N+ht*Rt,St=S+N+ht*(Rt+1),j=S+(N+1)+ht*(Rt+1),ft=S+(N+1)+ht*Rt;m.push(at,St,ft),m.push(St,j,ft),Z+=6}d.addGroup(M,Z,R),M+=Z,S+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function On(o){const e={};for(let i=0;i<o.length;i++){const r=ws(o[i]);for(const l in r)e[l]=r[l]}return e}function Vx(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function ev(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:we.workingColorSpace}const kx={clone:ws,merge:On};var Xx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ha extends qa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xx,this.fragmentShader=Wx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=Vx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Bd extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=ua}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new Q,$0=new pe,t_=new pe;class Xn extends Bd{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=yd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yd*2*Math.atan(Math.tan(eh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z)}getViewSize(e,i){return this.getViewBounds(e,$0,t_),i.subVectors(t_,$0)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(eh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vs=-90,ys=1;class qx extends hn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Xn(vs,ys,e,i);l.layers=this.layers,this.add(l);const u=new Xn(vs,ys,e,i);u.layers=this.layers,this.add(u);const h=new Xn(vs,ys,e,i);h.layers=this.layers,this.add(h);const d=new Xn(vs,ys,e,i);d.layers=this.layers,this.add(d);const m=new Xn(vs,ys,e,i);m.layers=this.layers,this.add(m);const p=new Xn(vs,ys,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===ua)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Oc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,y]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,y),e.setRenderTarget(v,S,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class nv extends qn{constructor(e=[],i=As,r,l,u,h,d,m,p,y){super(e,i,r,l,u,h,d,m,p,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yx extends Rr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new nv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Us(5,5,5),u=new ha({name:"CubemapFromEquirect",uniforms:ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:ka});u.uniforms.tEquirect.value=i;const h=new cn(l,u),d=i.minFilter;return i.minFilter===br&&(i.minFilter=Ni),new qx(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class Oi extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jx={type:"move"};class Eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const x=i.getJointPose(C,r),g=this._getHandJoint(p,C);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const y=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=y.position.distanceTo(v.position),M=.02,T=.005;p.inputState.pinching&&S>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(jx)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Oi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Sd extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Th=new Q,Zx=new Q,Kx=new le;class vr{constructor(e=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Th.subVectors(r,i).cross(Zx.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Th),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Kx.getNormalMatrix(e),l=this.coplanarPoint(Th).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Xo,Qx=new pe(.5,.5),yc=new Q;class Id{constructor(e=new vr,i=new vr,r=new vr,l=new vr,u=new vr,h=new vr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ua){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],y=l[5],v=l[6],S=l[7],M=l[8],T=l[9],C=l[10],x=l[11],g=l[12],P=l[13],U=l[14],D=l[15];if(r[0].setComponents(m-u,S-p,x-M,D-g).normalize(),r[1].setComponents(m+u,S+p,x+M,D+g).normalize(),r[2].setComponents(m+h,S+y,x+T,D+P).normalize(),r[3].setComponents(m-h,S-y,x-T,D-P).normalize(),r[4].setComponents(m-d,S-v,x-C,D-U).normalize(),i===ua)r[5].setComponents(m+d,S+v,x+C,D+U).normalize();else if(i===Oc)r[5].setComponents(d,v,C,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){mr.center.set(0,0,0);const i=Qx.distanceTo(e.center);return mr.radius=.7071067811865476+i,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(yc.x=l.normal.x>0?e.max.x:e.min.x,yc.y=l.normal.y>0?e.max.y:e.min.y,yc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(yc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fd extends qa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pc=new Q,Bc=new Q,e_=new je,Lo=new Pd,Sc=new Xo,bh=new Q,n_=new Q;class iv extends hn{constructor(e=new zn,i=new Fd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Pc.fromBufferAttribute(i,l-1),Bc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Pc.distanceTo(Bc);e.setAttribute("lineDistance",new bn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Sc.copy(r.boundingSphere),Sc.applyMatrix4(l),Sc.radius+=u,e.ray.intersectsSphere(Sc)===!1)return;e_.copy(l).invert(),Lo.copy(e.ray).applyMatrix4(e_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,y=r.index,S=r.attributes.position;if(y!==null){const M=Math.max(0,h.start),T=Math.min(y.count,h.start+h.count);for(let C=M,x=T-1;C<x;C+=p){const g=y.getX(C),P=y.getX(C+1),U=xc(this,e,Lo,m,g,P,C);U&&i.push(U)}if(this.isLineLoop){const C=y.getX(T-1),x=y.getX(M),g=xc(this,e,Lo,m,C,x,T-1);g&&i.push(g)}}else{const M=Math.max(0,h.start),T=Math.min(S.count,h.start+h.count);for(let C=M,x=T-1;C<x;C+=p){const g=xc(this,e,Lo,m,C,C+1,C);g&&i.push(g)}if(this.isLineLoop){const C=xc(this,e,Lo,m,T-1,M,T-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function xc(o,e,i,r,l,u,h){const d=o.geometry.attributes.position;if(Pc.fromBufferAttribute(d,l),Bc.fromBufferAttribute(d,u),i.distanceSqToSegment(Pc,Bc,bh,n_)>r)return;bh.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(bh);if(!(p<e.near||p>e.far))return{distance:p,point:n_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class av extends qa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const i_=new je,xd=new Pd,Mc=new Xo,Ec=new Q;class Jx extends hn{constructor(e=new zn,i=new av){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Mc.copy(r.boundingSphere),Mc.applyMatrix4(l),Mc.radius+=u,e.ray.intersectsSphere(Mc)===!1)return;i_.copy(l).invert(),xd.copy(e.ray).applyMatrix4(i_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const S=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let T=S,C=M;T<C;T++){const x=p.getX(T);Ec.fromBufferAttribute(v,x),a_(Ec,x,m,l,e,i,this)}}else{const S=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let T=S,C=M;T<C;T++)Ec.fromBufferAttribute(v,T),a_(Ec,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function a_(o,e,i,r,l,u,h){const d=xd.distanceSqToPoint(o);if(d<i){const m=new Q;xd.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class rv extends qn{constructor(e,i,r=Ar,l,u,h,d=bi,m=bi,p,y=Bo,v=1){if(y!==Bo&&y!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:v};super(S,l,u,h,d,m,y,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Fo extends zn{constructor(e=1,i=1,r=1,l=32,u=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const y=[],v=[],S=[],M=[];let T=0;const C=[],x=r/2;let g=0;P(),h===!1&&(e>0&&U(!0),i>0&&U(!1)),this.setIndex(y),this.setAttribute("position",new bn(v,3)),this.setAttribute("normal",new bn(S,3)),this.setAttribute("uv",new bn(M,2));function P(){const D=new Q,V=new Q;let F=0;const L=(i-e)/r;for(let k=0;k<=u;k++){const R=[],A=k/u,B=A*(i-e)+e;for(let tt=0;tt<=l;tt++){const et=tt/l,lt=et*m+d,ht=Math.sin(lt),z=Math.cos(lt);V.x=B*ht,V.y=-A*r+x,V.z=B*z,v.push(V.x,V.y,V.z),D.set(ht,L,z).normalize(),S.push(D.x,D.y,D.z),M.push(et,1-A),R.push(T++)}C.push(R)}for(let k=0;k<l;k++)for(let R=0;R<u;R++){const A=C[R][k],B=C[R+1][k],tt=C[R+1][k+1],et=C[R][k+1];(e>0||R!==0)&&(y.push(A,B,et),F+=3),(i>0||R!==u-1)&&(y.push(B,tt,et),F+=3)}p.addGroup(g,F,0),g+=F}function U(D){const V=T,F=new pe,L=new Q;let k=0;const R=D===!0?e:i,A=D===!0?1:-1;for(let tt=1;tt<=l;tt++)v.push(0,x*A,0),S.push(0,A,0),M.push(.5,.5),T++;const B=T;for(let tt=0;tt<=l;tt++){const lt=tt/l*m+d,ht=Math.cos(lt),z=Math.sin(lt);L.x=R*z,L.y=x*A,L.z=R*ht,v.push(L.x,L.y,L.z),S.push(0,A,0),F.x=ht*.5+.5,F.y=z*.5*A+.5,M.push(F.x,F.y),T++}for(let tt=0;tt<l;tt++){const et=V+tt,lt=B+tt;D===!0?y.push(lt,lt+1,et):y.push(lt+1,lt,et),k+=3}p.addGroup(g,k,D===!0?1:2),g+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hd extends Fo{constructor(e=1,i=1,r=32,l=1,u=!1,h=0,d=Math.PI*2){super(0,e,i,r,l,u,h,d),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:r,heightSegments:l,openEnded:u,thetaStart:h,thetaLength:d}}static fromJSON(e){return new Hd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wo extends zn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,y=m+1,v=e/d,S=i/m,M=[],T=[],C=[],x=[];for(let g=0;g<y;g++){const P=g*S-h;for(let U=0;U<p;U++){const D=U*v-u;T.push(D,-P,0),C.push(0,0,1),x.push(U/d),x.push(1-g/m)}}for(let g=0;g<m;g++)for(let P=0;P<d;P++){const U=P+p*g,D=P+p*(g+1),V=P+1+p*(g+1),F=P+1+p*g;M.push(U,D,F),M.push(D,V,F)}this.setIndex(M),this.setAttribute("position",new bn(T,3)),this.setAttribute("normal",new bn(C,3)),this.setAttribute("uv",new bn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gd extends zn{constructor(e=.5,i=1,r=32,l=1,u=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:u,thetaLength:h},r=Math.max(3,r),l=Math.max(1,l);const d=[],m=[],p=[],y=[];let v=e;const S=(i-e)/l,M=new Q,T=new pe;for(let C=0;C<=l;C++){for(let x=0;x<=r;x++){const g=u+x/r*h;M.x=v*Math.cos(g),M.y=v*Math.sin(g),m.push(M.x,M.y,M.z),p.push(0,0,1),T.x=(M.x/i+1)/2,T.y=(M.y/i+1)/2,y.push(T.x,T.y)}v+=S}for(let C=0;C<l;C++){const x=C*(r+1);for(let g=0;g<r;g++){const P=g+x,U=P,D=P+r+1,V=P+r+2,F=P+1;d.push(U,D,F),d.push(D,V,F)}}this.setIndex(d),this.setAttribute("position",new bn(m,3)),this.setAttribute("normal",new bn(p,3)),this.setAttribute("uv",new bn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Mr extends zn{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const y=[],v=new Q,S=new Q,M=[],T=[],C=[],x=[];for(let g=0;g<=r;g++){const P=[],U=g/r;let D=0;g===0&&h===0?D=.5/i:g===r&&m===Math.PI&&(D=-.5/i);for(let V=0;V<=i;V++){const F=V/i;v.x=-e*Math.cos(l+F*u)*Math.sin(h+U*d),v.y=e*Math.cos(h+U*d),v.z=e*Math.sin(l+F*u)*Math.sin(h+U*d),T.push(v.x,v.y,v.z),S.copy(v).normalize(),C.push(S.x,S.y,S.z),x.push(F+D,1-U),P.push(p++)}y.push(P)}for(let g=0;g<r;g++)for(let P=0;P<i;P++){const U=y[g][P+1],D=y[g][P],V=y[g+1][P],F=y[g+1][P+1];(g!==0||h>0)&&M.push(U,D,F),(g!==r-1||m<Math.PI)&&M.push(D,V,F)}this.setIndex(M),this.setAttribute("position",new bn(T,3)),this.setAttribute("normal",new bn(C,3)),this.setAttribute("uv",new bn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $x extends qa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Od,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tM extends qa{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ye(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Od,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class eM extends qa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ux,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nM extends qa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Fc extends hn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class iM extends Fc{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Ah=new je,r_=new Q,s_=new Q;class sv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Id,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;r_.setFromMatrixPosition(e.matrixWorld),i.position.copy(r_),s_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(s_),i.updateMatrixWorld(),Ah.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const o_=new je,No=new Q,Rh=new Q;class aM extends sv{constructor(){super(new Xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),No.setFromMatrixPosition(e.matrixWorld),r.position.copy(No),Rh.copy(r.position),Rh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Rh),r.updateMatrixWorld(),l.makeTranslation(-No.x,-No.y,-No.z),o_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o_)}}class Md extends Fc{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new aM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ov extends Bd{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=y*this.view.offsetY,m=d-y*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class rM extends sv{constructor(){super(new ov(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lv extends Fc{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new rM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sM extends Fc{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class oM extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class cv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function l_(o,e,i,r){const l=lM(r);switch(i){case k_:return o*e;case W_:return o*e/l.components*l.byteLength;case Ud:return o*e/l.components*l.byteLength;case q_:return o*e*2/l.components*l.byteLength;case Ld:return o*e*2/l.components*l.byteLength;case X_:return o*e*3/l.components*l.byteLength;case Ti:return o*e*4/l.components*l.byteLength;case Nd:return o*e*4/l.components*l.byteLength;case Rc:case Cc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wc:case Dc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case jh:case Kh:return Math.max(o,16)*Math.max(e,8)/4;case Yh:case Zh:return Math.max(o,8)*Math.max(e,8)/2;case Qh:case Jh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case $h:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case nd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case id:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ad:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case rd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case sd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case od:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ld:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case cd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case ud:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case fd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case hd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case dd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Uc:case pd:case md:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Y_:case gd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case _d:case vd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lM(o){switch(o){case Bi:case H_:return{byteLength:1,components:1};case zo:case G_:case Ho:return{byteLength:2,components:1};case wd:case Dd:return{byteLength:2,components:4};case Ar:case Cd:case ca:return{byteLength:4,components:1};case V_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ad}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ad);function uv(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function cM(o){const e=new WeakMap;function i(d,m){const p=d.array,y=d.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,y),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const y=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,y);else{v.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<v.length;M++){const T=v[S],C=v[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++S,v[S]=C)}v.length=S+1;for(let M=0,T=v.length;M<T;M++){const C=v[M];o.bufferSubData(p,C.start*y.BYTES_PER_ELEMENT,y,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const y=e.get(d);(!y||y.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var uM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_M=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,EM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,NM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HM="gl_FragColor = linearToOutputTexel( gl_FragColor );",GM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_E=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ME=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,AE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,NE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,FE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,i1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,l1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,g1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,v1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,C1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,D1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,U1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,O1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,I1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,G1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:uM,alphahash_pars_fragment:fM,alphamap_fragment:hM,alphamap_pars_fragment:dM,alphatest_fragment:pM,alphatest_pars_fragment:mM,aomap_fragment:gM,aomap_pars_fragment:_M,batching_pars_vertex:vM,batching_vertex:yM,begin_vertex:SM,beginnormal_vertex:xM,bsdfs:MM,iridescence_fragment:EM,bumpmap_pars_fragment:TM,clipping_planes_fragment:bM,clipping_planes_pars_fragment:AM,clipping_planes_pars_vertex:RM,clipping_planes_vertex:CM,color_fragment:wM,color_pars_fragment:DM,color_pars_vertex:UM,color_vertex:LM,common:NM,cube_uv_reflection_fragment:OM,defaultnormal_vertex:zM,displacementmap_pars_vertex:PM,displacementmap_vertex:BM,emissivemap_fragment:IM,emissivemap_pars_fragment:FM,colorspace_fragment:HM,colorspace_pars_fragment:GM,envmap_fragment:VM,envmap_common_pars_fragment:kM,envmap_pars_fragment:XM,envmap_pars_vertex:WM,envmap_physical_pars_fragment:nE,envmap_vertex:qM,fog_vertex:YM,fog_pars_vertex:jM,fog_fragment:ZM,fog_pars_fragment:KM,gradientmap_pars_fragment:QM,lightmap_pars_fragment:JM,lights_lambert_fragment:$M,lights_lambert_pars_fragment:tE,lights_pars_begin:eE,lights_toon_fragment:iE,lights_toon_pars_fragment:aE,lights_phong_fragment:rE,lights_phong_pars_fragment:sE,lights_physical_fragment:oE,lights_physical_pars_fragment:lE,lights_fragment_begin:cE,lights_fragment_maps:uE,lights_fragment_end:fE,logdepthbuf_fragment:hE,logdepthbuf_pars_fragment:dE,logdepthbuf_pars_vertex:pE,logdepthbuf_vertex:mE,map_fragment:gE,map_pars_fragment:_E,map_particle_fragment:vE,map_particle_pars_fragment:yE,metalnessmap_fragment:SE,metalnessmap_pars_fragment:xE,morphinstance_vertex:ME,morphcolor_vertex:EE,morphnormal_vertex:TE,morphtarget_pars_vertex:bE,morphtarget_vertex:AE,normal_fragment_begin:RE,normal_fragment_maps:CE,normal_pars_fragment:wE,normal_pars_vertex:DE,normal_vertex:UE,normalmap_pars_fragment:LE,clearcoat_normal_fragment_begin:NE,clearcoat_normal_fragment_maps:OE,clearcoat_pars_fragment:zE,iridescence_pars_fragment:PE,opaque_fragment:BE,packing:IE,premultiplied_alpha_fragment:FE,project_vertex:HE,dithering_fragment:GE,dithering_pars_fragment:VE,roughnessmap_fragment:kE,roughnessmap_pars_fragment:XE,shadowmap_pars_fragment:WE,shadowmap_pars_vertex:qE,shadowmap_vertex:YE,shadowmask_pars_fragment:jE,skinbase_vertex:ZE,skinning_pars_vertex:KE,skinning_vertex:QE,skinnormal_vertex:JE,specularmap_fragment:$E,specularmap_pars_fragment:t1,tonemapping_fragment:e1,tonemapping_pars_fragment:n1,transmission_fragment:i1,transmission_pars_fragment:a1,uv_pars_fragment:r1,uv_pars_vertex:s1,uv_vertex:o1,worldpos_vertex:l1,background_vert:c1,background_frag:u1,backgroundCube_vert:f1,backgroundCube_frag:h1,cube_vert:d1,cube_frag:p1,depth_vert:m1,depth_frag:g1,distanceRGBA_vert:_1,distanceRGBA_frag:v1,equirect_vert:y1,equirect_frag:S1,linedashed_vert:x1,linedashed_frag:M1,meshbasic_vert:E1,meshbasic_frag:T1,meshlambert_vert:b1,meshlambert_frag:A1,meshmatcap_vert:R1,meshmatcap_frag:C1,meshnormal_vert:w1,meshnormal_frag:D1,meshphong_vert:U1,meshphong_frag:L1,meshphysical_vert:N1,meshphysical_frag:O1,meshtoon_vert:z1,meshtoon_frag:P1,points_vert:B1,points_frag:I1,shadow_vert:F1,shadow_frag:H1,sprite_vert:G1,sprite_frag:V1},Nt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ui={basic:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ye(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:On([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:On([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new ye(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:On([Nt.points,Nt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:On([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:On([Nt.common,Nt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:On([Nt.sprite,Nt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:On([Nt.common,Nt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:On([Nt.lights,Nt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ui.physical={uniforms:On([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Tc={r:0,b:0,g:0},gr=new Ii,k1=new je;function X1(o,e,i,r,l,u,h){const d=new ye(0);let m=u===!0?0:1,p,y,v=null,S=0,M=null;function T(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?i:e).get(D)),D}function C(U){let D=!1;const V=T(U);V===null?g(d,m):V&&V.isColor&&(g(V,1),D=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(U,D){const V=T(D);V&&(V.isCubeTexture||V.mapping===Ic)?(y===void 0&&(y=new cn(new Us(1,1,1),new ha({name:"BackgroundCubeMaterial",uniforms:ws(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),y.geometry.deleteAttribute("normal"),y.geometry.deleteAttribute("uv"),y.onBeforeRender=function(F,L,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(y.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(y)),gr.copy(D.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),y.material.uniforms.envMap.value=V,y.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,y.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,y.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,y.material.uniforms.backgroundRotation.value.setFromMatrix4(k1.makeRotationFromEuler(gr)),y.material.toneMapped=we.getTransfer(V.colorSpace)!==He,(v!==V||S!==V.version||M!==o.toneMapping)&&(y.material.needsUpdate=!0,v=V,S=V.version,M=o.toneMapping),y.layers.enableAll(),U.unshift(y,y.geometry,y.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new cn(new Wo(2,2),new ha({name:"BackgroundMaterial",uniforms:ws(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=we.getTransfer(V.colorSpace)!==He,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(v!==V||S!==V.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=V,S=V.version,M=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function g(U,D){U.getRGB(Tc,ev(o)),r.buffers.color.setClear(Tc.r,Tc.g,Tc.b,D,h)}function P(){y!==void 0&&(y.geometry.dispose(),y.material.dispose(),y=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,D=1){d.set(U),m=D,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,g(d,m)},render:C,addToRenderList:x,dispose:P}}function W1(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,h=!1;function d(A,B,tt,et,lt){let ht=!1;const z=v(et,tt,B);u!==z&&(u=z,p(u.object)),ht=M(A,et,tt,lt),ht&&T(A,et,tt,lt),lt!==null&&e.update(lt,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,D(A,B,tt,et),lt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(lt).buffer))}function m(){return o.createVertexArray()}function p(A){return o.bindVertexArray(A)}function y(A){return o.deleteVertexArray(A)}function v(A,B,tt){const et=tt.wireframe===!0;let lt=r[A.id];lt===void 0&&(lt={},r[A.id]=lt);let ht=lt[B.id];ht===void 0&&(ht={},lt[B.id]=ht);let z=ht[et];return z===void 0&&(z=S(m()),ht[et]=z),z}function S(A){const B=[],tt=[],et=[];for(let lt=0;lt<i;lt++)B[lt]=0,tt[lt]=0,et[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:tt,attributeDivisors:et,object:A,attributes:{},index:null}}function M(A,B,tt,et){const lt=u.attributes,ht=B.attributes;let z=0;const K=tt.getAttributes();for(const Z in K)if(K[Z].location>=0){const Rt=lt[Z];let N=ht[Z];if(N===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(N=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(N=A.instanceColor)),Rt===void 0||Rt.attribute!==N||N&&Rt.data!==N.data)return!0;z++}return u.attributesNum!==z||u.index!==et}function T(A,B,tt,et){const lt={},ht=B.attributes;let z=0;const K=tt.getAttributes();for(const Z in K)if(K[Z].location>=0){let Rt=ht[Z];Rt===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(Rt=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(Rt=A.instanceColor));const N={};N.attribute=Rt,Rt&&Rt.data&&(N.data=Rt.data),lt[Z]=N,z++}u.attributes=lt,u.attributesNum=z,u.index=et}function C(){const A=u.newAttributes;for(let B=0,tt=A.length;B<tt;B++)A[B]=0}function x(A){g(A,0)}function g(A,B){const tt=u.newAttributes,et=u.enabledAttributes,lt=u.attributeDivisors;tt[A]=1,et[A]===0&&(o.enableVertexAttribArray(A),et[A]=1),lt[A]!==B&&(o.vertexAttribDivisor(A,B),lt[A]=B)}function P(){const A=u.newAttributes,B=u.enabledAttributes;for(let tt=0,et=B.length;tt<et;tt++)B[tt]!==A[tt]&&(o.disableVertexAttribArray(tt),B[tt]=0)}function U(A,B,tt,et,lt,ht,z){z===!0?o.vertexAttribIPointer(A,B,tt,lt,ht):o.vertexAttribPointer(A,B,tt,et,lt,ht)}function D(A,B,tt,et){C();const lt=et.attributes,ht=tt.getAttributes(),z=B.defaultAttributeValues;for(const K in ht){const Z=ht[K];if(Z.location>=0){let xt=lt[K];if(xt===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(xt=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(xt=A.instanceColor)),xt!==void 0){const Rt=xt.normalized,N=xt.itemSize,at=e.get(xt);if(at===void 0)continue;const St=at.buffer,j=at.type,ft=at.bytesPerElement,bt=j===o.INT||j===o.UNSIGNED_INT||xt.gpuType===Cd;if(xt.isInterleavedBufferAttribute){const Mt=xt.data,zt=Mt.stride,Qt=xt.offset;if(Mt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<Z.locationSize;Jt++)g(Z.location+Jt,Mt.meshPerAttribute);A.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Jt=0;Jt<Z.locationSize;Jt++)x(Z.location+Jt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Jt=0;Jt<Z.locationSize;Jt++)U(Z.location+Jt,N/Z.locationSize,j,Rt,zt*ft,(Qt+N/Z.locationSize*Jt)*ft,bt)}else{if(xt.isInstancedBufferAttribute){for(let Mt=0;Mt<Z.locationSize;Mt++)g(Z.location+Mt,xt.meshPerAttribute);A.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Mt=0;Mt<Z.locationSize;Mt++)x(Z.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Mt=0;Mt<Z.locationSize;Mt++)U(Z.location+Mt,N/Z.locationSize,j,Rt,N*ft,N/Z.locationSize*Mt*ft,bt)}}else if(z!==void 0){const Rt=z[K];if(Rt!==void 0)switch(Rt.length){case 2:o.vertexAttrib2fv(Z.location,Rt);break;case 3:o.vertexAttrib3fv(Z.location,Rt);break;case 4:o.vertexAttrib4fv(Z.location,Rt);break;default:o.vertexAttrib1fv(Z.location,Rt)}}}}P()}function V(){k();for(const A in r){const B=r[A];for(const tt in B){const et=B[tt];for(const lt in et)y(et[lt].object),delete et[lt];delete B[tt]}delete r[A]}}function F(A){if(r[A.id]===void 0)return;const B=r[A.id];for(const tt in B){const et=B[tt];for(const lt in et)y(et[lt].object),delete et[lt];delete B[tt]}delete r[A.id]}function L(A){for(const B in r){const tt=r[B];if(tt[A.id]===void 0)continue;const et=tt[A.id];for(const lt in et)y(et[lt].object),delete et[lt];delete tt[A.id]}}function k(){R(),h=!0,u!==l&&(u=l,p(u.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:R,dispose:V,releaseStatesOfGeometry:F,releaseStatesOfProgram:L,initAttributes:C,enableAttribute:x,disableUnusedAttributes:P}}function q1(o,e,i){let r;function l(p){r=p}function u(p,y){o.drawArrays(r,p,y),i.update(y,r,1)}function h(p,y,v){v!==0&&(o.drawArraysInstanced(r,p,y,v),i.update(y,r,v))}function d(p,y,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,y,0,v);let M=0;for(let T=0;T<v;T++)M+=y[T];i.update(M,r,1)}function m(p,y,v,S){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)h(p[T],y[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,y,0,S,0,v);let T=0;for(let C=0;C<v;C++)T+=y[C]*S[C];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Y1(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(L){return!(L!==Ti&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(L){const k=L===Ho&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Bi&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ca&&!k)}function m(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const y=m(p);y!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",y,"instead."),p=y);const v=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=T>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:V,maxSamples:F}}function j1(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new vr,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const M=v.length!==0||S||r!==0||l;return l=S,r=v.length,M},this.beginShadows=function(){u=!0,y(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=y(v,S,0)},this.setState=function(v,S,M){const T=v.clippingPlanes,C=v.clipIntersection,x=v.clipShadows,g=o.get(v);if(!l||T===null||T.length===0||u&&!x)u?y(null):p();else{const P=u?0:r,U=P*4;let D=g.clippingState||null;m.value=D,D=y(T,S,U,M);for(let V=0;V!==U;++V)D[V]=i[V];g.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function y(v,S,M,T){const C=v!==null?v.length:0;let x=null;if(C!==0){if(x=m.value,T!==!0||x===null){const g=M+C*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(x===null||x.length<g)&&(x=new Float32Array(g));for(let U=0,D=M;U!==C;++U,D+=4)h.copy(v[U]).applyMatrix4(P,d),h.normal.toArray(x,D),x[D+3]=h.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,x}}function Z1(o){let e=new WeakMap;function i(h,d){return d===kh?h.mapping=As:d===Xh&&(h.mapping=Rs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===kh||d===Xh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Yx(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const xs=4,c_=[.125,.215,.35,.446,.526,.582],Er=20,Ch=new ov,u_=new ye;let wh=null,Dh=0,Uh=0,Lh=!1;const yr=(1+Math.sqrt(5))/2,Ss=1/yr,f_=[new Q(-yr,Ss,0),new Q(yr,Ss,0),new Q(-Ss,0,yr),new Q(Ss,0,yr),new Q(0,yr,-Ss),new Q(0,yr,Ss),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],K1=new Q;class h_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=K1}=u;wh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wh,Dh,Uh),this._renderer.xr.enabled=Lh,e.scissorTest=!1,bc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===As||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Ho,format:Ti,colorSpace:Cs,depthBuffer:!1},l=d_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=d_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q1(u)),this._blurMaterial=J1(u,e,i)}return l}_compileMaterial(e){const i=new cn(this._lodPlanes[0],e);this._renderer.compile(i,Ch)}_sceneToCubeUV(e,i,r,l,u){const m=new Xn(90,1,i,r),p=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,M=v.toneMapping;v.getClearColor(u_),v.toneMapping=Xa,v.autoClear=!1;const T=new xr({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),C=new cn(new Us,T);let x=!1;const g=e.background;g?g.isColor&&(T.color.copy(g),e.background=null,x=!0):(T.color.copy(u_),x=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+y[P],u.y,u.z)):U===1?(m.up.set(0,0,p[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+y[P],u.z)):(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+y[P]));const D=this._cubeSize;bc(l,U*D,P>2?D:0,D,D),v.setRenderTarget(l),x&&v.render(C,m),v.render(e,m)}C.geometry.dispose(),C.material.dispose(),v.toneMapping=M,v.autoClear=S,e.background=g}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===As||e.mapping===Rs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=m_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new cn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;bc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Ch)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=f_[(l-u-1)%f_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const y=3,v=new cn(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Er-1),C=u/T,x=isFinite(u)?1+Math.floor(y*C):Er;x>Er&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Er}`);const g=[];let P=0;for(let L=0;L<Er;++L){const k=L/C,R=Math.exp(-k*k/2);g.push(R),L===0?P+=R:L<x&&(P+=2*R)}for(let L=0;L<g.length;L++)g[L]=g[L]/P;S.envMap.value=e.texture,S.samples.value=x,S.weights.value=g,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:U}=this;S.dTheta.value=T,S.mipInt.value=U-r;const D=this._sizeLods[l],V=3*D*(l>U-xs?l-U+xs:0),F=4*(this._cubeSize-D);bc(i,V,F,3*D,2*D),m.setRenderTarget(i),m.render(v,Ch)}}function Q1(o){const e=[],i=[],r=[];let l=o;const u=o-xs+1+c_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-xs?m=c_[h-o+xs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),y=-p,v=1+p,S=[y,y,v,y,v,v,y,y,v,v,y,v],M=6,T=6,C=3,x=2,g=1,P=new Float32Array(C*T*M),U=new Float32Array(x*T*M),D=new Float32Array(g*T*M);for(let F=0;F<M;F++){const L=F%3*2/3-1,k=F>2?0:-1,R=[L,k,0,L+2/3,k,0,L+2/3,k+1,0,L,k,0,L+2/3,k+1,0,L,k+1,0];P.set(R,C*T*F),U.set(S,x*T*F);const A=[F,F,F,F,F,F];D.set(A,g*T*F)}const V=new zn;V.setAttribute("position",new di(P,C)),V.setAttribute("uv",new di(U,x)),V.setAttribute("faceIndex",new di(D,g)),e.push(V),l>xs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function d_(o,e,i){const r=new Rr(o,e,i);return r.texture.mapping=Ic,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function J1(o,e,i){const r=new Float32Array(Er),l=new Q(0,1,0);return new ha({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function p_(){return new ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function m_(){return new ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Vd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $1(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===kh||m===Xh,y=m===As||m===Rs;if(p||y){let v=e.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new h_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||y&&M&&l(M)?(i===null&&(i=new h_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let y=0;y<p;y++)d[y]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function tT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Es("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function eT(o,e,i,r){const l={},u=new WeakMap;function h(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const T in S.attributes)e.remove(S.attributes[T]);S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(v){const S=[],M=v.index,T=v.attributes.position;let C=0;if(M!==null){const P=M.array;C=M.version;for(let U=0,D=P.length;U<D;U+=3){const V=P[U+0],F=P[U+1],L=P[U+2];S.push(V,F,F,L,L,V)}}else if(T!==void 0){const P=T.array;C=T.version;for(let U=0,D=P.length/3-1;U<D;U+=3){const V=U+0,F=U+1,L=U+2;S.push(V,F,F,L,L,V)}}else return;const x=new(Z_(S)?tv:$_)(S,1);x.version=C;const g=u.get(v);g&&e.remove(g),u.set(v,x)}function y(v){const S=u.get(v);if(S){const M=v.index;M!==null&&S.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:y}}function nT(o,e,i){let r;function l(S){r=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(r,M,u,S*h),i.update(M,r,1)}function p(S,M,T){T!==0&&(o.drawElementsInstanced(r,M,u,S*h,T),i.update(M,r,T))}function y(S,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,T);let x=0;for(let g=0;g<T;g++)x+=M[g];i.update(x,r,1)}function v(S,M,T,C){if(T===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<S.length;g++)p(S[g]/h,M[g],C[g]);else{x.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,C,0,T);let g=0;for(let P=0;P<T;P++)g+=M[P]*C[P];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=y,this.renderMultiDrawInstances=v}function iT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function aT(o,e,i){const r=new WeakMap,l=new Ge;function u(h,d,m){const p=h.morphTargetInfluences,y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=y!==void 0?y.length:0;let S=r.get(d);if(S===void 0||S.count!==v){let A=function(){k.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var M=A;S!==void 0&&S.texture.dispose();const T=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let D=0;T===!0&&(D=1),C===!0&&(D=2),x===!0&&(D=3);let V=d.attributes.position.count*D,F=1;V>e.maxTextureSize&&(F=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const L=new Float32Array(V*F*4*v),k=new K_(L,V,F,v);k.type=ca,k.needsUpdate=!0;const R=D*4;for(let B=0;B<v;B++){const tt=g[B],et=P[B],lt=U[B],ht=V*F*4*B;for(let z=0;z<tt.count;z++){const K=z*R;T===!0&&(l.fromBufferAttribute(tt,z),L[ht+K+0]=l.x,L[ht+K+1]=l.y,L[ht+K+2]=l.z,L[ht+K+3]=0),C===!0&&(l.fromBufferAttribute(et,z),L[ht+K+4]=l.x,L[ht+K+5]=l.y,L[ht+K+6]=l.z,L[ht+K+7]=0),x===!0&&(l.fromBufferAttribute(lt,z),L[ht+K+8]=l.x,L[ht+K+9]=l.y,L[ht+K+10]=l.z,L[ht+K+11]=lt.itemSize===4?l.w:1)}}S={count:v,texture:k,size:new pe(V,F)},r.set(d,S),d.addEventListener("dispose",A)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let x=0;x<p.length;x++)T+=p[x];const C=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function rT(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,y=m.geometry,v=e.get(m,y);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const fv=new qn,g_=new rv(1,1),hv=new K_,dv=new Dx,pv=new nv,__=[],v_=[],y_=new Float32Array(16),S_=new Float32Array(9),x_=new Float32Array(4);function Ls(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=__[l];if(u===void 0&&(u=new Float32Array(l),__[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function dn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function pn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Hc(o,e){let i=v_[e];i===void 0&&(i=new Int32Array(e),v_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function sT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function oT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2fv(this.addr,e),pn(i,e)}}function lT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(dn(i,e))return;o.uniform3fv(this.addr,e),pn(i,e)}}function cT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4fv(this.addr,e),pn(i,e)}}function uT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;x_.set(r),o.uniformMatrix2fv(this.addr,!1,x_),pn(i,r)}}function fT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;S_.set(r),o.uniformMatrix3fv(this.addr,!1,S_),pn(i,r)}}function hT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;y_.set(r),o.uniformMatrix4fv(this.addr,!1,y_),pn(i,r)}}function dT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function pT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2iv(this.addr,e),pn(i,e)}}function mT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3iv(this.addr,e),pn(i,e)}}function gT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4iv(this.addr,e),pn(i,e)}}function _T(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function vT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2uiv(this.addr,e),pn(i,e)}}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3uiv(this.addr,e),pn(i,e)}}function ST(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4uiv(this.addr,e),pn(i,e)}}function xT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(g_.compareFunction=j_,u=g_):u=fv,i.setTexture2D(e||u,l)}function MT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||dv,l)}function ET(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||pv,l)}function TT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||hv,l)}function bT(o){switch(o){case 5126:return sT;case 35664:return oT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return fT;case 35676:return hT;case 5124:case 35670:return dT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return _T;case 36294:return vT;case 36295:return yT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return TT}}function AT(o,e){o.uniform1fv(this.addr,e)}function RT(o,e){const i=Ls(e,this.size,2);o.uniform2fv(this.addr,i)}function CT(o,e){const i=Ls(e,this.size,3);o.uniform3fv(this.addr,i)}function wT(o,e){const i=Ls(e,this.size,4);o.uniform4fv(this.addr,i)}function DT(o,e){const i=Ls(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function UT(o,e){const i=Ls(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function LT(o,e){const i=Ls(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function NT(o,e){o.uniform1iv(this.addr,e)}function OT(o,e){o.uniform2iv(this.addr,e)}function zT(o,e){o.uniform3iv(this.addr,e)}function PT(o,e){o.uniform4iv(this.addr,e)}function BT(o,e){o.uniform1uiv(this.addr,e)}function IT(o,e){o.uniform2uiv(this.addr,e)}function FT(o,e){o.uniform3uiv(this.addr,e)}function HT(o,e){o.uniform4uiv(this.addr,e)}function GT(o,e,i){const r=this.cache,l=e.length,u=Hc(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||fv,u[h])}function VT(o,e,i){const r=this.cache,l=e.length,u=Hc(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||dv,u[h])}function kT(o,e,i){const r=this.cache,l=e.length,u=Hc(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||pv,u[h])}function XT(o,e,i){const r=this.cache,l=e.length,u=Hc(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||hv,u[h])}function WT(o){switch(o){case 5126:return AT;case 35664:return RT;case 35665:return CT;case 35666:return wT;case 35674:return DT;case 35675:return UT;case 35676:return LT;case 5124:case 35670:return NT;case 35667:case 35671:return OT;case 35668:case 35672:return zT;case 35669:case 35673:return PT;case 5125:return BT;case 36294:return IT;case 36295:return FT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return XT}}class qT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=bT(i.type)}}class YT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=WT(i.type)}}class jT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const Nh=/(\w+)(\])?(\[|\.)?/g;function M_(o,e){o.seq.push(e),o.map[e.id]=e}function ZT(o,e,i){const r=o.name,l=r.length;for(Nh.lastIndex=0;;){const u=Nh.exec(r),h=Nh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){M_(i,p===void 0?new qT(d,o,e):new YT(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new jT(d),M_(i,v)),i=v}}}class Lc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);ZT(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function E_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const KT=37297;let QT=0;function JT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const T_=new le;function $T(o){we._getMatrix(T_,we.workingColorSpace,o);const e=`mat3( ${T_.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(o)){case Nc:return[e,"LinearTransferOETF"];case He:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function b_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+JT(o.getShaderSource(e),h)}else return l}function tb(o,e){const i=$T(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function eb(o,e){let i;switch(e){case nx:i="Linear";break;case ix:i="Reinhard";break;case ax:i="Cineon";break;case rx:i="ACESFilmic";break;case ox:i="AgX";break;case lx:i="Neutral";break;case sx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ac=new Q;function nb(){we.getLuminanceCoefficients(Ac);const o=Ac.x.toFixed(4),e=Ac.y.toFixed(4),i=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ib(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function ab(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function rb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Oo(o){return o!==""}function A_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function R_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(o){return o.replace(sb,lb)}const ob=new Map;function lb(o,e){let i=ue[e];if(i===void 0){const r=ob.get(e);if(r!==void 0)i=ue[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ed(i)}const cb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C_(o){return o.replace(cb,ub)}function ub(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function w_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===B_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Rd?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===la&&(e="SHADOWMAP_TYPE_VSM"),e}function hb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case As:case Rs:e="ENVMAP_TYPE_CUBE";break;case Ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function db(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Rs&&(e="ENVMAP_MODE_REFRACTION"),e}function pb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case I_:e="ENVMAP_BLENDING_MULTIPLY";break;case tx:e="ENVMAP_BLENDING_MIX";break;case ex:e="ENVMAP_BLENDING_ADD";break}return e}function mb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function gb(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=fb(i),p=hb(i),y=db(i),v=pb(i),S=mb(i),M=ib(i),T=ab(u),C=l.createProgram();let x,g,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Oo).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Oo).join(`
`),g.length>0&&(g+=`
`)):(x=[w_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+y:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),g=[w_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+y:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?ue.tonemapping_pars_fragment:"",i.toneMapping!==Xa?eb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,tb("linearToOutputTexel",i.outputColorSpace),nb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Oo).join(`
`)),h=Ed(h),h=A_(h,i),h=R_(h,i),d=Ed(d),d=A_(d,i),d=R_(d,i),h=C_(h),d=C_(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",i.glslVersion===B0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===B0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const U=P+x+h,D=P+g+d,V=E_(l,l.VERTEX_SHADER,U),F=E_(l,l.FRAGMENT_SHADER,D);l.attachShader(C,V),l.attachShader(C,F),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function L(B){if(o.debug.checkShaderErrors){const tt=l.getProgramInfoLog(C).trim(),et=l.getShaderInfoLog(V).trim(),lt=l.getShaderInfoLog(F).trim();let ht=!0,z=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,V,F);else{const K=b_(l,V,"vertex"),Z=b_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+tt+`
`+K+`
`+Z)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(et===""||lt==="")&&(z=!1);z&&(B.diagnostics={runnable:ht,programLog:tt,vertexShader:{log:et,prefix:x},fragmentShader:{log:lt,prefix:g}})}l.deleteShader(V),l.deleteShader(F),k=new Lc(l,C),R=rb(l,C)}let k;this.getUniforms=function(){return k===void 0&&L(this),k};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(C,KT)),A},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=QT++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=V,this.fragmentShader=F,this}let _b=0;class vb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new yb(e),i.set(e,r)),r}}class yb{constructor(e){this.id=_b++,this.code=e,this.usedTimes=0}}function Sb(o,e,i,r,l,u,h){const d=new Q_,m=new vb,p=new Set,y=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return p.add(R),R===0?"uv":`uv${R}`}function x(R,A,B,tt,et){const lt=tt.fog,ht=et.geometry,z=R.isMeshStandardMaterial?tt.environment:null,K=(R.isMeshStandardMaterial?i:e).get(R.envMap||z),Z=K&&K.mapping===Ic?K.image.height:null,xt=T[R.type];R.precision!==null&&(M=l.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const Rt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,N=Rt!==void 0?Rt.length:0;let at=0;ht.morphAttributes.position!==void 0&&(at=1),ht.morphAttributes.normal!==void 0&&(at=2),ht.morphAttributes.color!==void 0&&(at=3);let St,j,ft,bt;if(xt){const be=Ui[xt];St=be.vertexShader,j=be.fragmentShader}else St=R.vertexShader,j=R.fragmentShader,m.update(R),ft=m.getVertexShaderID(R),bt=m.getFragmentShaderID(R);const Mt=o.getRenderTarget(),zt=o.state.buffers.depth.getReversed(),Qt=et.isInstancedMesh===!0,Jt=et.isBatchedMesh===!0,Ne=!!R.map,Ve=!!R.matcap,Te=!!K,H=!!R.aoMap,un=!!R.lightMap,Se=!!R.bumpMap,Oe=!!R.normalMap,kt=!!R.displacementMap,me=!!R.emissiveMap,jt=!!R.metalnessMap,ae=!!R.roughnessMap,tn=R.anisotropy>0,O=R.clearcoat>0,E=R.dispersion>0,nt=R.iridescence>0,pt=R.sheen>0,vt=R.transmission>0,ct=tn&&!!R.anisotropyMap,Xt=O&&!!R.clearcoatMap,wt=O&&!!R.clearcoatNormalMap,Gt=O&&!!R.clearcoatRoughnessMap,Wt=nt&&!!R.iridescenceMap,yt=nt&&!!R.iridescenceThicknessMap,Ct=pt&&!!R.sheenColorMap,qt=pt&&!!R.sheenRoughnessMap,Ht=!!R.specularMap,Dt=!!R.specularColorMap,ne=!!R.specularIntensityMap,X=vt&&!!R.transmissionMap,Ut=vt&&!!R.thicknessMap,Et=!!R.gradientMap,Bt=!!R.alphaMap,Tt=R.alphaTest>0,gt=!!R.alphaHash,It=!!R.extensions;let ie=Xa;R.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(ie=o.toneMapping);const ze={shaderID:xt,shaderType:R.type,shaderName:R.name,vertexShader:St,fragmentShader:j,defines:R.defines,customVertexShaderID:ft,customFragmentShaderID:bt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:Jt,batchingColor:Jt&&et._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&et.instanceColor!==null,instancingMorph:Qt&&et.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Mt===null?o.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Cs,alphaToCoverage:!!R.alphaToCoverage,map:Ne,matcap:Ve,envMap:Te,envMapMode:Te&&K.mapping,envMapCubeUVHeight:Z,aoMap:H,lightMap:un,bumpMap:Se,normalMap:Oe,displacementMap:S&&kt,emissiveMap:me,normalMapObjectSpace:Oe&&R.normalMapType===hx,normalMapTangentSpace:Oe&&R.normalMapType===Od,metalnessMap:jt,roughnessMap:ae,anisotropy:tn,anisotropyMap:ct,clearcoat:O,clearcoatMap:Xt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Gt,dispersion:E,iridescence:nt,iridescenceMap:Wt,iridescenceThicknessMap:yt,sheen:pt,sheenColorMap:Ct,sheenRoughnessMap:qt,specularMap:Ht,specularColorMap:Dt,specularIntensityMap:ne,transmission:vt,transmissionMap:X,thicknessMap:Ut,gradientMap:Et,opaque:R.transparent===!1&&R.blending===Ms&&R.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Tt,alphaHash:gt,combine:R.combine,mapUv:Ne&&C(R.map.channel),aoMapUv:H&&C(R.aoMap.channel),lightMapUv:un&&C(R.lightMap.channel),bumpMapUv:Se&&C(R.bumpMap.channel),normalMapUv:Oe&&C(R.normalMap.channel),displacementMapUv:kt&&C(R.displacementMap.channel),emissiveMapUv:me&&C(R.emissiveMap.channel),metalnessMapUv:jt&&C(R.metalnessMap.channel),roughnessMapUv:ae&&C(R.roughnessMap.channel),anisotropyMapUv:ct&&C(R.anisotropyMap.channel),clearcoatMapUv:Xt&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:wt&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:qt&&C(R.sheenRoughnessMap.channel),specularMapUv:Ht&&C(R.specularMap.channel),specularColorMapUv:Dt&&C(R.specularColorMap.channel),specularIntensityMapUv:ne&&C(R.specularIntensityMap.channel),transmissionMapUv:X&&C(R.transmissionMap.channel),thicknessMapUv:Ut&&C(R.thicknessMap.channel),alphaMapUv:Bt&&C(R.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(Oe||tn),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!ht.attributes.uv&&(Ne||Bt),fog:!!lt,useFog:R.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:zt,skinning:et.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:at,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ne&&R.map.isVideoTexture===!0&&we.getTransfer(R.map.colorSpace)===He,decodeVideoTextureEmissive:me&&R.emissiveMap.isVideoTexture===!0&&we.getTransfer(R.emissiveMap.colorSpace)===He,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Li,flipSided:R.side===Wn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:It&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&R.extensions.multiDraw===!0||Jt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return ze.vertexUv1s=p.has(1),ze.vertexUv2s=p.has(2),ze.vertexUv3s=p.has(3),p.clear(),ze}function g(R){const A=[];if(R.shaderID?A.push(R.shaderID):(A.push(R.customVertexShaderID),A.push(R.customFragmentShaderID)),R.defines!==void 0)for(const B in R.defines)A.push(B),A.push(R.defines[B]);return R.isRawShaderMaterial===!1&&(P(A,R),U(A,R),A.push(o.outputColorSpace)),A.push(R.customProgramCacheKey),A.join()}function P(R,A){R.push(A.precision),R.push(A.outputColorSpace),R.push(A.envMapMode),R.push(A.envMapCubeUVHeight),R.push(A.mapUv),R.push(A.alphaMapUv),R.push(A.lightMapUv),R.push(A.aoMapUv),R.push(A.bumpMapUv),R.push(A.normalMapUv),R.push(A.displacementMapUv),R.push(A.emissiveMapUv),R.push(A.metalnessMapUv),R.push(A.roughnessMapUv),R.push(A.anisotropyMapUv),R.push(A.clearcoatMapUv),R.push(A.clearcoatNormalMapUv),R.push(A.clearcoatRoughnessMapUv),R.push(A.iridescenceMapUv),R.push(A.iridescenceThicknessMapUv),R.push(A.sheenColorMapUv),R.push(A.sheenRoughnessMapUv),R.push(A.specularMapUv),R.push(A.specularColorMapUv),R.push(A.specularIntensityMapUv),R.push(A.transmissionMapUv),R.push(A.thicknessMapUv),R.push(A.combine),R.push(A.fogExp2),R.push(A.sizeAttenuation),R.push(A.morphTargetsCount),R.push(A.morphAttributeCount),R.push(A.numDirLights),R.push(A.numPointLights),R.push(A.numSpotLights),R.push(A.numSpotLightMaps),R.push(A.numHemiLights),R.push(A.numRectAreaLights),R.push(A.numDirLightShadows),R.push(A.numPointLightShadows),R.push(A.numSpotLightShadows),R.push(A.numSpotLightShadowsWithMaps),R.push(A.numLightProbes),R.push(A.shadowMapType),R.push(A.toneMapping),R.push(A.numClippingPlanes),R.push(A.numClipIntersection),R.push(A.depthPacking)}function U(R,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),A.gradientMap&&d.enable(22),R.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),R.push(d.mask)}function D(R){const A=T[R.type];let B;if(A){const tt=Ui[A];B=kx.clone(tt.uniforms)}else B=R.uniforms;return B}function V(R,A){let B;for(let tt=0,et=y.length;tt<et;tt++){const lt=y[tt];if(lt.cacheKey===A){B=lt,++B.usedTimes;break}}return B===void 0&&(B=new gb(o,A,R,u),y.push(B)),B}function F(R){if(--R.usedTimes===0){const A=y.indexOf(R);y[A]=y[y.length-1],y.pop(),R.destroy()}}function L(R){m.remove(R)}function k(){m.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:D,acquireProgram:V,releaseProgram:F,releaseShaderCache:L,programs:y,dispose:k}}function xb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function Mb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function D_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function U_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(v,S,M,T,C,x){let g=o[e];return g===void 0?(g={id:v.id,object:v,geometry:S,material:M,groupOrder:T,renderOrder:v.renderOrder,z:C,group:x},o[e]=g):(g.id=v.id,g.object=v,g.geometry=S,g.material=M,g.groupOrder=T,g.renderOrder=v.renderOrder,g.z=C,g.group=x),e++,g}function d(v,S,M,T,C,x){const g=h(v,S,M,T,C,x);M.transmission>0?r.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(v,S,M,T,C,x){const g=h(v,S,M,T,C,x);M.transmission>0?r.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,S){i.length>1&&i.sort(v||Mb),r.length>1&&r.sort(S||D_),l.length>1&&l.sort(S||D_)}function y(){for(let v=e,S=o.length;v<S;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:y,sort:p}}function Eb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new U_,o.set(r,[h])):l>=u.length?(h=new U_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function Tb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Q,color:new ye};break;case"SpotLight":i={position:new Q,direction:new Q,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return o[e.id]=i,i}}}function bb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Ab=0;function Rb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Cb(o){const e=new Tb,i=bb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Q);const l=new Q,u=new je,h=new je;function d(p){let y=0,v=0,S=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let M=0,T=0,C=0,x=0,g=0,P=0,U=0,D=0,V=0,F=0,L=0;p.sort(Rb);for(let R=0,A=p.length;R<A;R++){const B=p[R],tt=B.color,et=B.intensity,lt=B.distance,ht=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)y+=tt.r*et,v+=tt.g*et,S+=tt.b*et;else if(B.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(B.sh.coefficients[z],et);L++}else if(B.isDirectionalLight){const z=e.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const K=B.shadow,Z=i.get(B);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,r.directionalShadow[M]=Z,r.directionalShadowMap[M]=ht,r.directionalShadowMatrix[M]=B.shadow.matrix,P++}r.directional[M]=z,M++}else if(B.isSpotLight){const z=e.get(B);z.position.setFromMatrixPosition(B.matrixWorld),z.color.copy(tt).multiplyScalar(et),z.distance=lt,z.coneCos=Math.cos(B.angle),z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),z.decay=B.decay,r.spot[C]=z;const K=B.shadow;if(B.map&&(r.spotLightMap[V]=B.map,V++,K.updateMatrices(B),B.castShadow&&F++),r.spotLightMatrix[C]=K.matrix,B.castShadow){const Z=i.get(B);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,r.spotShadow[C]=Z,r.spotShadowMap[C]=ht,D++}C++}else if(B.isRectAreaLight){const z=e.get(B);z.color.copy(tt).multiplyScalar(et),z.halfWidth.set(B.width*.5,0,0),z.halfHeight.set(0,B.height*.5,0),r.rectArea[x]=z,x++}else if(B.isPointLight){const z=e.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),z.distance=B.distance,z.decay=B.decay,B.castShadow){const K=B.shadow,Z=i.get(B);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,r.pointShadow[T]=Z,r.pointShadowMap[T]=ht,r.pointShadowMatrix[T]=B.shadow.matrix,U++}r.point[T]=z,T++}else if(B.isHemisphereLight){const z=e.get(B);z.skyColor.copy(B.color).multiplyScalar(et),z.groundColor.copy(B.groundColor).multiplyScalar(et),r.hemi[g]=z,g++}}x>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=v,r.ambient[2]=S;const k=r.hash;(k.directionalLength!==M||k.pointLength!==T||k.spotLength!==C||k.rectAreaLength!==x||k.hemiLength!==g||k.numDirectionalShadows!==P||k.numPointShadows!==U||k.numSpotShadows!==D||k.numSpotMaps!==V||k.numLightProbes!==L)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=x,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=D+V-F,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=L,k.directionalLength=M,k.pointLength=T,k.spotLength=C,k.rectAreaLength=x,k.hemiLength=g,k.numDirectionalShadows=P,k.numPointShadows=U,k.numSpotShadows=D,k.numSpotMaps=V,k.numLightProbes=L,r.version=Ab++)}function m(p,y){let v=0,S=0,M=0,T=0,C=0;const x=y.matrixWorldInverse;for(let g=0,P=p.length;g<P;g++){const U=p[g];if(U.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),v++}else if(U.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),M++}else if(U.isRectAreaLight){const D=r.rectArea[T];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(x),h.identity(),u.copy(U.matrixWorld),u.premultiply(x),h.extractRotation(u),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),T++}else if(U.isPointLight){const D=r.point[S];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(x),S++}else if(U.isHemisphereLight){const D=r.hemi[C];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(x),C++}}}return{setup:d,setupView:m,state:r}}function L_(o){const e=new Cb(o),i=[],r=[];function l(y){p.camera=y,i.length=0,r.length=0}function u(y){i.push(y)}function h(y){r.push(y)}function d(){e.setup(i)}function m(y){e.setupView(i,y)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function wb(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new L_(o),e.set(l,[d])):u>=h.length?(d=new L_(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const Db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ub=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lb(o,e,i){let r=new Id;const l=new pe,u=new pe,h=new Ge,d=new eM({depthPacking:fx}),m=new nM,p={},y=i.maxTextureSize,v={[Wa]:Wn,[Wn]:Wa,[Li]:Li},S=new ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Db,fragmentShader:Ub}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new zn;T.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new cn(T,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=B_;let g=this.type;this.render=function(F,L,k){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const R=o.getRenderTarget(),A=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),tt=o.state;tt.setBlending(ka),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const et=g!==la&&this.type===la,lt=g===la&&this.type!==la;for(let ht=0,z=F.length;ht<z;ht++){const K=F[ht],Z=K.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const xt=Z.getFrameExtents();if(l.multiply(xt),u.copy(Z.mapSize),(l.x>y||l.y>y)&&(l.x>y&&(u.x=Math.floor(y/xt.x),l.x=u.x*xt.x,Z.mapSize.x=u.x),l.y>y&&(u.y=Math.floor(y/xt.y),l.y=u.y*xt.y,Z.mapSize.y=u.y)),Z.map===null||et===!0||lt===!0){const N=this.type!==la?{minFilter:bi,magFilter:bi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Rr(l.x,l.y,N),Z.map.texture.name=K.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const Rt=Z.getViewportCount();for(let N=0;N<Rt;N++){const at=Z.getViewport(N);h.set(u.x*at.x,u.y*at.y,u.x*at.z,u.y*at.w),tt.viewport(h),Z.updateMatrices(K,N),r=Z.getFrustum(),D(L,k,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===la&&P(Z,k),Z.needsUpdate=!1}g=this.type,x.needsUpdate=!1,o.setRenderTarget(R,A,B)};function P(F,L){const k=e.update(C);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Rr(l.x,l.y)),S.uniforms.shadow_pass.value=F.map.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(L,null,k,S,C,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(L,null,k,M,C,null)}function U(F,L,k,R){let A=null;const B=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)A=B;else if(A=k.isPointLight===!0?m:d,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const tt=A.uuid,et=L.uuid;let lt=p[tt];lt===void 0&&(lt={},p[tt]=lt);let ht=lt[et];ht===void 0&&(ht=A.clone(),lt[et]=ht,L.addEventListener("dispose",V)),A=ht}if(A.visible=L.visible,A.wireframe=L.wireframe,R===la?A.side=L.shadowSide!==null?L.shadowSide:L.side:A.side=L.shadowSide!==null?L.shadowSide:v[L.side],A.alphaMap=L.alphaMap,A.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,A.map=L.map,A.clipShadows=L.clipShadows,A.clippingPlanes=L.clippingPlanes,A.clipIntersection=L.clipIntersection,A.displacementMap=L.displacementMap,A.displacementScale=L.displacementScale,A.displacementBias=L.displacementBias,A.wireframeLinewidth=L.wireframeLinewidth,A.linewidth=L.linewidth,k.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const tt=o.properties.get(A);tt.light=k}return A}function D(F,L,k,R,A){if(F.visible===!1)return;if(F.layers.test(L.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&A===la)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const et=e.update(F),lt=F.material;if(Array.isArray(lt)){const ht=et.groups;for(let z=0,K=ht.length;z<K;z++){const Z=ht[z],xt=lt[Z.materialIndex];if(xt&&xt.visible){const Rt=U(F,xt,R,A);F.onBeforeShadow(o,F,L,k,et,Rt,Z),o.renderBufferDirect(k,null,et,Rt,F,Z),F.onAfterShadow(o,F,L,k,et,Rt,Z)}}}else if(lt.visible){const ht=U(F,lt,R,A);F.onBeforeShadow(o,F,L,k,et,ht,null),o.renderBufferDirect(k,null,et,ht,F,null),F.onAfterShadow(o,F,L,k,et,ht,null)}}const tt=F.children;for(let et=0,lt=tt.length;et<lt;et++)D(tt[et],L,k,R,A)}function V(F){F.target.removeEventListener("dispose",V);for(const k in p){const R=p[k],A=F.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}const Nb={[Ph]:Bh,[Ih]:Gh,[Fh]:Vh,[bs]:Hh,[Bh]:Ph,[Gh]:Ih,[Vh]:Fh,[Hh]:bs};function Ob(o,e){function i(){let X=!1;const Ut=new Ge;let Et=null;const Bt=new Ge(0,0,0,0);return{setMask:function(Tt){Et!==Tt&&!X&&(o.colorMask(Tt,Tt,Tt,Tt),Et=Tt)},setLocked:function(Tt){X=Tt},setClear:function(Tt,gt,It,ie,ze){ze===!0&&(Tt*=ie,gt*=ie,It*=ie),Ut.set(Tt,gt,It,ie),Bt.equals(Ut)===!1&&(o.clearColor(Tt,gt,It,ie),Bt.copy(Ut))},reset:function(){X=!1,Et=null,Bt.set(-1,0,0,0)}}}function r(){let X=!1,Ut=!1,Et=null,Bt=null,Tt=null;return{setReversed:function(gt){if(Ut!==gt){const It=e.get("EXT_clip_control");gt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),Ut=gt;const ie=Tt;Tt=null,this.setClear(ie)}},getReversed:function(){return Ut},setTest:function(gt){gt?Mt(o.DEPTH_TEST):zt(o.DEPTH_TEST)},setMask:function(gt){Et!==gt&&!X&&(o.depthMask(gt),Et=gt)},setFunc:function(gt){if(Ut&&(gt=Nb[gt]),Bt!==gt){switch(gt){case Ph:o.depthFunc(o.NEVER);break;case Bh:o.depthFunc(o.ALWAYS);break;case Ih:o.depthFunc(o.LESS);break;case bs:o.depthFunc(o.LEQUAL);break;case Fh:o.depthFunc(o.EQUAL);break;case Hh:o.depthFunc(o.GEQUAL);break;case Gh:o.depthFunc(o.GREATER);break;case Vh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=gt}},setLocked:function(gt){X=gt},setClear:function(gt){Tt!==gt&&(Ut&&(gt=1-gt),o.clearDepth(gt),Tt=gt)},reset:function(){X=!1,Et=null,Bt=null,Tt=null,Ut=!1}}}function l(){let X=!1,Ut=null,Et=null,Bt=null,Tt=null,gt=null,It=null,ie=null,ze=null;return{setTest:function(be){X||(be?Mt(o.STENCIL_TEST):zt(o.STENCIL_TEST))},setMask:function(be){Ut!==be&&!X&&(o.stencilMask(be),Ut=be)},setFunc:function(be,vn,pi){(Et!==be||Bt!==vn||Tt!==pi)&&(o.stencilFunc(be,vn,pi),Et=be,Bt=vn,Tt=pi)},setOp:function(be,vn,pi){(gt!==be||It!==vn||ie!==pi)&&(o.stencilOp(be,vn,pi),gt=be,It=vn,ie=pi)},setLocked:function(be){X=be},setClear:function(be){ze!==be&&(o.clearStencil(be),ze=be)},reset:function(){X=!1,Ut=null,Et=null,Bt=null,Tt=null,gt=null,It=null,ie=null,ze=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let y={},v={},S=new WeakMap,M=[],T=null,C=!1,x=null,g=null,P=null,U=null,D=null,V=null,F=null,L=new ye(0,0,0),k=0,R=!1,A=null,B=null,tt=null,et=null,lt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=K>=2);let xt=null,Rt={};const N=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),St=new Ge().fromArray(N),j=new Ge().fromArray(at);function ft(X,Ut,Et,Bt){const Tt=new Uint8Array(4),gt=o.createTexture();o.bindTexture(X,gt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let It=0;It<Et;It++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Tt):o.texImage2D(Ut+It,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Tt);return gt}const bt={};bt[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),bt[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),bt[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Mt(o.DEPTH_TEST),h.setFunc(bs),Se(!1),Oe(U0),Mt(o.CULL_FACE),H(ka);function Mt(X){y[X]!==!0&&(o.enable(X),y[X]=!0)}function zt(X){y[X]!==!1&&(o.disable(X),y[X]=!1)}function Qt(X,Ut){return v[X]!==Ut?(o.bindFramebuffer(X,Ut),v[X]=Ut,X===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ut),X===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Jt(X,Ut){let Et=M,Bt=!1;if(X){Et=S.get(Ut),Et===void 0&&(Et=[],S.set(Ut,Et));const Tt=X.textures;if(Et.length!==Tt.length||Et[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,It=Tt.length;gt<It;gt++)Et[gt]=o.COLOR_ATTACHMENT0+gt;Et.length=Tt.length,Bt=!0}}else Et[0]!==o.BACK&&(Et[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(Et)}function Ne(X){return T!==X?(o.useProgram(X),T=X,!0):!1}const Ve={[Sr]:o.FUNC_ADD,[BS]:o.FUNC_SUBTRACT,[IS]:o.FUNC_REVERSE_SUBTRACT};Ve[FS]=o.MIN,Ve[HS]=o.MAX;const Te={[GS]:o.ZERO,[VS]:o.ONE,[kS]:o.SRC_COLOR,[Oh]:o.SRC_ALPHA,[ZS]:o.SRC_ALPHA_SATURATE,[YS]:o.DST_COLOR,[WS]:o.DST_ALPHA,[XS]:o.ONE_MINUS_SRC_COLOR,[zh]:o.ONE_MINUS_SRC_ALPHA,[jS]:o.ONE_MINUS_DST_COLOR,[qS]:o.ONE_MINUS_DST_ALPHA,[KS]:o.CONSTANT_COLOR,[QS]:o.ONE_MINUS_CONSTANT_COLOR,[JS]:o.CONSTANT_ALPHA,[$S]:o.ONE_MINUS_CONSTANT_ALPHA};function H(X,Ut,Et,Bt,Tt,gt,It,ie,ze,be){if(X===ka){C===!0&&(zt(o.BLEND),C=!1);return}if(C===!1&&(Mt(o.BLEND),C=!0),X!==PS){if(X!==x||be!==R){if((g!==Sr||D!==Sr)&&(o.blendEquation(o.FUNC_ADD),g=Sr,D=Sr),be)switch(X){case Ms:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case L0:o.blendFunc(o.ONE,o.ONE);break;case N0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case O0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ms:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case L0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case N0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case O0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}P=null,U=null,V=null,F=null,L.set(0,0,0),k=0,x=X,R=be}return}Tt=Tt||Ut,gt=gt||Et,It=It||Bt,(Ut!==g||Tt!==D)&&(o.blendEquationSeparate(Ve[Ut],Ve[Tt]),g=Ut,D=Tt),(Et!==P||Bt!==U||gt!==V||It!==F)&&(o.blendFuncSeparate(Te[Et],Te[Bt],Te[gt],Te[It]),P=Et,U=Bt,V=gt,F=It),(ie.equals(L)===!1||ze!==k)&&(o.blendColor(ie.r,ie.g,ie.b,ze),L.copy(ie),k=ze),x=X,R=!1}function un(X,Ut){X.side===Li?zt(o.CULL_FACE):Mt(o.CULL_FACE);let Et=X.side===Wn;Ut&&(Et=!Et),Se(Et),X.blending===Ms&&X.transparent===!1?H(ka):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const Bt=X.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),me(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Mt(o.SAMPLE_ALPHA_TO_COVERAGE):zt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Se(X){A!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),A=X)}function Oe(X){X!==OS?(Mt(o.CULL_FACE),X!==B&&(X===U0?o.cullFace(o.BACK):X===zS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):zt(o.CULL_FACE),B=X}function kt(X){X!==tt&&(z&&o.lineWidth(X),tt=X)}function me(X,Ut,Et){X?(Mt(o.POLYGON_OFFSET_FILL),(et!==Ut||lt!==Et)&&(o.polygonOffset(Ut,Et),et=Ut,lt=Et)):zt(o.POLYGON_OFFSET_FILL)}function jt(X){X?Mt(o.SCISSOR_TEST):zt(o.SCISSOR_TEST)}function ae(X){X===void 0&&(X=o.TEXTURE0+ht-1),xt!==X&&(o.activeTexture(X),xt=X)}function tn(X,Ut,Et){Et===void 0&&(xt===null?Et=o.TEXTURE0+ht-1:Et=xt);let Bt=Rt[Et];Bt===void 0&&(Bt={type:void 0,texture:void 0},Rt[Et]=Bt),(Bt.type!==X||Bt.texture!==Ut)&&(xt!==Et&&(o.activeTexture(Et),xt=Et),o.bindTexture(X,Ut||bt[X]),Bt.type=X,Bt.texture=Ut)}function O(){const X=Rt[xt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function nt(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pt(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Gt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(X){St.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function qt(X){j.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),j.copy(X))}function Ht(X,Ut){let Et=p.get(Ut);Et===void 0&&(Et=new WeakMap,p.set(Ut,Et));let Bt=Et.get(X);Bt===void 0&&(Bt=o.getUniformBlockIndex(Ut,X.name),Et.set(X,Bt))}function Dt(X,Ut){const Bt=p.get(Ut).get(X);m.get(Ut)!==Bt&&(o.uniformBlockBinding(Ut,Bt,X.__bindingPointIndex),m.set(Ut,Bt))}function ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},xt=null,Rt={},v={},S=new WeakMap,M=[],T=null,C=!1,x=null,g=null,P=null,U=null,D=null,V=null,F=null,L=new ye(0,0,0),k=0,R=!1,A=null,B=null,tt=null,et=null,lt=null,St.set(0,0,o.canvas.width,o.canvas.height),j.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Mt,disable:zt,bindFramebuffer:Qt,drawBuffers:Jt,useProgram:Ne,setBlending:H,setMaterial:un,setFlipSided:Se,setCullFace:Oe,setLineWidth:kt,setPolygonOffset:me,setScissorTest:jt,activeTexture:ae,bindTexture:tn,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:nt,texImage2D:Wt,texImage3D:yt,updateUBOMapping:Ht,uniformBlockBinding:Dt,texStorage2D:wt,texStorage3D:Gt,texSubImage2D:pt,texSubImage3D:vt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Xt,scissor:Ct,viewport:qt,reset:ne}}function zb(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new pe,y=new WeakMap;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(O,E){return M?new OffscreenCanvas(O,E):zc("canvas")}function C(O,E,nt){let pt=1;const vt=tn(O);if((vt.width>nt||vt.height>nt)&&(pt=nt/Math.max(vt.width,vt.height)),pt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ct=Math.floor(pt*vt.width),Xt=Math.floor(pt*vt.height);v===void 0&&(v=T(ct,Xt));const wt=E?T(ct,Xt):v;return wt.width=ct,wt.height=Xt,wt.getContext("2d").drawImage(O,0,0,ct,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ct+"x"+Xt+")."),wt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),O;return O}function x(O){return O.generateMipmaps}function g(O){o.generateMipmap(O)}function P(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(O,E,nt,pt,vt=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ct=E;if(E===o.RED&&(nt===o.FLOAT&&(ct=o.R32F),nt===o.HALF_FLOAT&&(ct=o.R16F),nt===o.UNSIGNED_BYTE&&(ct=o.R8)),E===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ct=o.R8UI),nt===o.UNSIGNED_SHORT&&(ct=o.R16UI),nt===o.UNSIGNED_INT&&(ct=o.R32UI),nt===o.BYTE&&(ct=o.R8I),nt===o.SHORT&&(ct=o.R16I),nt===o.INT&&(ct=o.R32I)),E===o.RG&&(nt===o.FLOAT&&(ct=o.RG32F),nt===o.HALF_FLOAT&&(ct=o.RG16F),nt===o.UNSIGNED_BYTE&&(ct=o.RG8)),E===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ct=o.RG8UI),nt===o.UNSIGNED_SHORT&&(ct=o.RG16UI),nt===o.UNSIGNED_INT&&(ct=o.RG32UI),nt===o.BYTE&&(ct=o.RG8I),nt===o.SHORT&&(ct=o.RG16I),nt===o.INT&&(ct=o.RG32I)),E===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),nt===o.UNSIGNED_INT&&(ct=o.RGB32UI),nt===o.BYTE&&(ct=o.RGB8I),nt===o.SHORT&&(ct=o.RGB16I),nt===o.INT&&(ct=o.RGB32I)),E===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),nt===o.UNSIGNED_INT&&(ct=o.RGBA32UI),nt===o.BYTE&&(ct=o.RGBA8I),nt===o.SHORT&&(ct=o.RGBA16I),nt===o.INT&&(ct=o.RGBA32I)),E===o.RGB&&nt===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),E===o.RGBA){const Xt=vt?Nc:we.getTransfer(pt);nt===o.FLOAT&&(ct=o.RGBA32F),nt===o.HALF_FLOAT&&(ct=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(ct=Xt===He?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ct}function D(O,E){let nt;return O?E===null||E===Ar||E===Po?nt=o.DEPTH24_STENCIL8:E===ca?nt=o.DEPTH32F_STENCIL8:E===zo&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ar||E===Po?nt=o.DEPTH_COMPONENT24:E===ca?nt=o.DEPTH_COMPONENT32F:E===zo&&(nt=o.DEPTH_COMPONENT16),nt}function V(O,E){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==bi&&O.minFilter!==Ni?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function F(O){const E=O.target;E.removeEventListener("dispose",F),k(E),E.isVideoTexture&&y.delete(E)}function L(O){const E=O.target;E.removeEventListener("dispose",L),A(E)}function k(O){const E=r.get(O);if(E.__webglInit===void 0)return;const nt=O.source,pt=S.get(nt);if(pt){const vt=pt[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&R(O),Object.keys(pt).length===0&&S.delete(nt)}r.remove(O)}function R(O){const E=r.get(O);o.deleteTexture(E.__webglTexture);const nt=O.source,pt=S.get(nt);delete pt[E.__cacheKey],h.memory.textures--}function A(O){const E=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(E.__webglFramebuffer[pt]))for(let vt=0;vt<E.__webglFramebuffer[pt].length;vt++)o.deleteFramebuffer(E.__webglFramebuffer[pt][vt]);else o.deleteFramebuffer(E.__webglFramebuffer[pt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[pt])}else{if(Array.isArray(E.__webglFramebuffer))for(let pt=0;pt<E.__webglFramebuffer.length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[pt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pt=0;pt<E.__webglColorRenderbuffer.length;pt++)E.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[pt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const nt=O.textures;for(let pt=0,vt=nt.length;pt<vt;pt++){const ct=r.get(nt[pt]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),h.memory.textures--),r.remove(nt[pt])}r.remove(O)}let B=0;function tt(){B=0}function et(){const O=B;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),B+=1,O}function lt(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function ht(O,E){const nt=r.get(O);if(O.isVideoTexture&&jt(O),O.isRenderTargetTexture===!1&&O.version>0&&nt.__version!==O.version){const pt=O.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{bt(nt,O,E);return}}i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+E)}function z(O,E){const nt=r.get(O);if(O.version>0&&nt.__version!==O.version){bt(nt,O,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+E)}function K(O,E){const nt=r.get(O);if(O.version>0&&nt.__version!==O.version){bt(nt,O,E);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+E)}function Z(O,E){const nt=r.get(O);if(O.version>0&&nt.__version!==O.version){Mt(nt,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+E)}const xt={[Wh]:o.REPEAT,[Tr]:o.CLAMP_TO_EDGE,[qh]:o.MIRRORED_REPEAT},Rt={[bi]:o.NEAREST,[cx]:o.NEAREST_MIPMAP_NEAREST,[nc]:o.NEAREST_MIPMAP_LINEAR,[Ni]:o.LINEAR,[th]:o.LINEAR_MIPMAP_NEAREST,[br]:o.LINEAR_MIPMAP_LINEAR},N={[dx]:o.NEVER,[yx]:o.ALWAYS,[px]:o.LESS,[j_]:o.LEQUAL,[mx]:o.EQUAL,[vx]:o.GEQUAL,[gx]:o.GREATER,[_x]:o.NOTEQUAL};function at(O,E){if(E.type===ca&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ni||E.magFilter===th||E.magFilter===nc||E.magFilter===br||E.minFilter===Ni||E.minFilter===th||E.minFilter===nc||E.minFilter===br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,xt[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,xt[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,xt[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Rt[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Rt[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===bi||E.minFilter!==nc&&E.minFilter!==br||E.type===ca&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const nt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function St(O,E){let nt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",F));const pt=E.source;let vt=S.get(pt);vt===void 0&&(vt={},S.set(pt,vt));const ct=lt(E);if(ct!==O.__cacheKey){vt[ct]===void 0&&(vt[ct]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),vt[ct].usedTimes++;const Xt=vt[O.__cacheKey];Xt!==void 0&&(vt[O.__cacheKey].usedTimes--,Xt.usedTimes===0&&R(E)),O.__cacheKey=ct,O.__webglTexture=vt[ct].texture}return nt}function j(O,E,nt){return Math.floor(Math.floor(O/nt)/E)}function ft(O,E,nt,pt){const ct=O.updateRanges;if(ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,nt,pt,E.data);else{ct.sort((yt,Ct)=>yt.start-Ct.start);let Xt=0;for(let yt=1;yt<ct.length;yt++){const Ct=ct[Xt],qt=ct[yt],Ht=Ct.start+Ct.count,Dt=j(qt.start,E.width,4),ne=j(Ct.start,E.width,4);qt.start<=Ht+1&&Dt===ne&&j(qt.start+qt.count-1,E.width,4)===Dt?Ct.count=Math.max(Ct.count,qt.start+qt.count-Ct.start):(++Xt,ct[Xt]=qt)}ct.length=Xt+1;const wt=o.getParameter(o.UNPACK_ROW_LENGTH),Gt=o.getParameter(o.UNPACK_SKIP_PIXELS),Wt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let yt=0,Ct=ct.length;yt<Ct;yt++){const qt=ct[yt],Ht=Math.floor(qt.start/4),Dt=Math.ceil(qt.count/4),ne=Ht%E.width,X=Math.floor(Ht/E.width),Ut=Dt,Et=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ne),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,ne,X,Ut,Et,nt,pt,E.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,wt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Gt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Wt)}}function bt(O,E,nt){let pt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pt=o.TEXTURE_3D);const vt=St(O,E),ct=E.source;i.bindTexture(pt,O.__webglTexture,o.TEXTURE0+nt);const Xt=r.get(ct);if(ct.version!==Xt.__version||vt===!0){i.activeTexture(o.TEXTURE0+nt);const wt=we.getPrimaries(we.workingColorSpace),Gt=E.colorSpace===Va?null:we.getPrimaries(E.colorSpace),Wt=E.colorSpace===Va||wt===Gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let yt=C(E.image,!1,l.maxTextureSize);yt=ae(E,yt);const Ct=u.convert(E.format,E.colorSpace),qt=u.convert(E.type);let Ht=U(E.internalFormat,Ct,qt,E.colorSpace,E.isVideoTexture);at(pt,E);let Dt;const ne=E.mipmaps,X=E.isVideoTexture!==!0,Ut=Xt.__version===void 0||vt===!0,Et=ct.dataReady,Bt=V(E,yt);if(E.isDepthTexture)Ht=D(E.format===Io,E.type),Ut&&(X?i.texStorage2D(o.TEXTURE_2D,1,Ht,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Ht,yt.width,yt.height,0,Ct,qt,null));else if(E.isDataTexture)if(ne.length>0){X&&Ut&&i.texStorage2D(o.TEXTURE_2D,Bt,Ht,ne[0].width,ne[0].height);for(let Tt=0,gt=ne.length;Tt<gt;Tt++)Dt=ne[Tt],X?Et&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Ct,qt,Dt.data):i.texImage2D(o.TEXTURE_2D,Tt,Ht,Dt.width,Dt.height,0,Ct,qt,Dt.data);E.generateMipmaps=!1}else X?(Ut&&i.texStorage2D(o.TEXTURE_2D,Bt,Ht,yt.width,yt.height),Et&&ft(E,yt,Ct,qt)):i.texImage2D(o.TEXTURE_2D,0,Ht,yt.width,yt.height,0,Ct,qt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Ht,ne[0].width,ne[0].height,yt.depth);for(let Tt=0,gt=ne.length;Tt<gt;Tt++)if(Dt=ne[Tt],E.format!==Ti)if(Ct!==null)if(X){if(Et)if(E.layerUpdates.size>0){const It=l_(Dt.width,Dt.height,E.format,E.type);for(const ie of E.layerUpdates){const ze=Dt.data.subarray(ie*It/Dt.data.BYTES_PER_ELEMENT,(ie+1)*It/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,ie,Dt.width,Dt.height,1,Ct,ze)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Dt.width,Dt.height,yt.depth,Ct,Dt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,Ht,Dt.width,Dt.height,yt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Et&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Dt.width,Dt.height,yt.depth,Ct,qt,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Tt,Ht,Dt.width,Dt.height,yt.depth,0,Ct,qt,Dt.data)}else{X&&Ut&&i.texStorage2D(o.TEXTURE_2D,Bt,Ht,ne[0].width,ne[0].height);for(let Tt=0,gt=ne.length;Tt<gt;Tt++)Dt=ne[Tt],E.format!==Ti?Ct!==null?X?Et&&i.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Ct,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,Tt,Ht,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Et&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Ct,qt,Dt.data):i.texImage2D(o.TEXTURE_2D,Tt,Ht,Dt.width,Dt.height,0,Ct,qt,Dt.data)}else if(E.isDataArrayTexture)if(X){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Ht,yt.width,yt.height,yt.depth),Et)if(E.layerUpdates.size>0){const Tt=l_(yt.width,yt.height,E.format,E.type);for(const gt of E.layerUpdates){const It=yt.data.subarray(gt*Tt/yt.data.BYTES_PER_ELEMENT,(gt+1)*Tt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,yt.width,yt.height,1,Ct,qt,It)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Ct,qt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ht,yt.width,yt.height,yt.depth,0,Ct,qt,yt.data);else if(E.isData3DTexture)X?(Ut&&i.texStorage3D(o.TEXTURE_3D,Bt,Ht,yt.width,yt.height,yt.depth),Et&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Ct,qt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Ht,yt.width,yt.height,yt.depth,0,Ct,qt,yt.data);else if(E.isFramebufferTexture){if(Ut)if(X)i.texStorage2D(o.TEXTURE_2D,Bt,Ht,yt.width,yt.height);else{let Tt=yt.width,gt=yt.height;for(let It=0;It<Bt;It++)i.texImage2D(o.TEXTURE_2D,It,Ht,Tt,gt,0,Ct,qt,null),Tt>>=1,gt>>=1}}else if(ne.length>0){if(X&&Ut){const Tt=tn(ne[0]);i.texStorage2D(o.TEXTURE_2D,Bt,Ht,Tt.width,Tt.height)}for(let Tt=0,gt=ne.length;Tt<gt;Tt++)Dt=ne[Tt],X?Et&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Ct,qt,Dt):i.texImage2D(o.TEXTURE_2D,Tt,Ht,Ct,qt,Dt);E.generateMipmaps=!1}else if(X){if(Ut){const Tt=tn(yt);i.texStorage2D(o.TEXTURE_2D,Bt,Ht,Tt.width,Tt.height)}Et&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ct,qt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Ht,Ct,qt,yt);x(E)&&g(pt),Xt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Mt(O,E,nt){if(E.image.length!==6)return;const pt=St(O,E),vt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+nt);const ct=r.get(vt);if(vt.version!==ct.__version||pt===!0){i.activeTexture(o.TEXTURE0+nt);const Xt=we.getPrimaries(we.workingColorSpace),wt=E.colorSpace===Va?null:we.getPrimaries(E.colorSpace),Gt=E.colorSpace===Va||Xt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const Wt=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,Ct=[];for(let gt=0;gt<6;gt++)!Wt&&!yt?Ct[gt]=C(E.image[gt],!0,l.maxCubemapSize):Ct[gt]=yt?E.image[gt].image:E.image[gt],Ct[gt]=ae(E,Ct[gt]);const qt=Ct[0],Ht=u.convert(E.format,E.colorSpace),Dt=u.convert(E.type),ne=U(E.internalFormat,Ht,Dt,E.colorSpace),X=E.isVideoTexture!==!0,Ut=ct.__version===void 0||pt===!0,Et=vt.dataReady;let Bt=V(E,qt);at(o.TEXTURE_CUBE_MAP,E);let Tt;if(Wt){X&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,ne,qt.width,qt.height);for(let gt=0;gt<6;gt++){Tt=Ct[gt].mipmaps;for(let It=0;It<Tt.length;It++){const ie=Tt[It];E.format!==Ti?Ht!==null?X?Et&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It,0,0,ie.width,ie.height,Ht,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It,ne,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It,0,0,ie.width,ie.height,Ht,Dt,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It,ne,ie.width,ie.height,0,Ht,Dt,ie.data)}}}else{if(Tt=E.mipmaps,X&&Ut){Tt.length>0&&Bt++;const gt=tn(Ct[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,ne,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(yt){X?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ct[gt].width,Ct[gt].height,Ht,Dt,Ct[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ne,Ct[gt].width,Ct[gt].height,0,Ht,Dt,Ct[gt].data);for(let It=0;It<Tt.length;It++){const ze=Tt[It].image[gt].image;X?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It+1,0,0,ze.width,ze.height,Ht,Dt,ze.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It+1,ne,ze.width,ze.height,0,Ht,Dt,ze.data)}}else{X?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ht,Dt,Ct[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ne,Ht,Dt,Ct[gt]);for(let It=0;It<Tt.length;It++){const ie=Tt[It];X?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It+1,0,0,Ht,Dt,ie.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It+1,ne,Ht,Dt,ie.image[gt])}}}x(E)&&g(o.TEXTURE_CUBE_MAP),ct.__version=vt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function zt(O,E,nt,pt,vt,ct){const Xt=u.convert(nt.format,nt.colorSpace),wt=u.convert(nt.type),Gt=U(nt.internalFormat,Xt,wt,nt.colorSpace),Wt=r.get(E),yt=r.get(nt);if(yt.__renderTarget=E,!Wt.__hasExternalTextures){const Ct=Math.max(1,E.width>>ct),qt=Math.max(1,E.height>>ct);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,ct,Gt,Ct,qt,E.depth,0,Xt,wt,null):i.texImage2D(vt,ct,Gt,Ct,qt,0,Xt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),me(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,vt,yt.__webglTexture,0,kt(E)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,vt,yt.__webglTexture,ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Qt(O,E,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const pt=E.depthTexture,vt=pt&&pt.isDepthTexture?pt.type:null,ct=D(E.stencilBuffer,vt),Xt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=kt(E);me(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,ct,E.width,E.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,ct,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ct,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,O)}else{const pt=E.textures;for(let vt=0;vt<pt.length;vt++){const ct=pt[vt],Xt=u.convert(ct.format,ct.colorSpace),wt=u.convert(ct.type),Gt=U(ct.internalFormat,Xt,wt,ct.colorSpace),Wt=kt(E);nt&&me(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,Gt,E.width,E.height):me(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Wt,Gt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Gt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Jt(O,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=r.get(E.depthTexture);pt.__renderTarget=E,(!pt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const vt=pt.__webglTexture,ct=kt(E);if(E.depthTexture.format===Bo)me(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(E.depthTexture.format===Io)me(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Ne(O){const E=r.get(O),nt=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const pt=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pt){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pt.removeEventListener("dispose",vt)};pt.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=pt}if(O.depthTexture&&!E.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const pt=O.texture.mipmaps;pt&&pt.length>0?Jt(E.__webglFramebuffer[0],O):Jt(E.__webglFramebuffer,O)}else if(nt){E.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[pt]),E.__webglDepthbuffer[pt]===void 0)E.__webglDepthbuffer[pt]=o.createRenderbuffer(),Qt(E.__webglDepthbuffer[pt],O,!1);else{const vt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ct)}}else{const pt=O.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Qt(E.__webglDepthbuffer,O,!1);else{const vt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ve(O,E,nt){const pt=r.get(O);E!==void 0&&zt(pt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&Ne(O)}function Te(O){const E=O.texture,nt=r.get(O),pt=r.get(E);O.addEventListener("dispose",L);const vt=O.textures,ct=O.isWebGLCubeRenderTarget===!0,Xt=vt.length>1;if(Xt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=E.version,h.memory.textures++),ct){nt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer[wt]=[];for(let Gt=0;Gt<E.mipmaps.length;Gt++)nt.__webglFramebuffer[wt][Gt]=o.createFramebuffer()}else nt.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)nt.__webglFramebuffer[wt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let wt=0,Gt=vt.length;wt<Gt;wt++){const Wt=r.get(vt[wt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&me(O)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let wt=0;wt<vt.length;wt++){const Gt=vt[wt];nt.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[wt]);const Wt=u.convert(Gt.format,Gt.colorSpace),yt=u.convert(Gt.type),Ct=U(Gt.internalFormat,Wt,yt,Gt.colorSpace,O.isXRRenderTarget===!0),qt=kt(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Ct,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),Qt(nt.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),at(o.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)zt(nt.__webglFramebuffer[wt][Gt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Gt);else zt(nt.__webglFramebuffer[wt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);x(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let wt=0,Gt=vt.length;wt<Gt;wt++){const Wt=vt[wt],yt=r.get(Wt);i.bindTexture(o.TEXTURE_2D,yt.__webglTexture),at(o.TEXTURE_2D,Wt),zt(nt.__webglFramebuffer,O,Wt,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),x(Wt)&&g(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(wt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,pt.__webglTexture),at(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)zt(nt.__webglFramebuffer[Gt],O,E,o.COLOR_ATTACHMENT0,wt,Gt);else zt(nt.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,wt,0);x(E)&&g(wt),i.unbindTexture()}O.depthBuffer&&Ne(O)}function H(O){const E=O.textures;for(let nt=0,pt=E.length;nt<pt;nt++){const vt=E[nt];if(x(vt)){const ct=P(O),Xt=r.get(vt).__webglTexture;i.bindTexture(ct,Xt),g(ct),i.unbindTexture()}}}const un=[],Se=[];function Oe(O){if(O.samples>0){if(me(O)===!1){const E=O.textures,nt=O.width,pt=O.height;let vt=o.COLOR_BUFFER_BIT;const ct=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=r.get(O),wt=E.length>1;if(wt)for(let Wt=0;Wt<E.length;Wt++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const Gt=O.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Wt=0;Wt<E.length;Wt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Wt]);const yt=r.get(E[Wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,nt,pt,0,0,nt,pt,vt,o.NEAREST),m===!0&&(un.length=0,Se.length=0,un.push(o.COLOR_ATTACHMENT0+Wt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(un.push(ct),Se.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Se)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,un))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let Wt=0;Wt<E.length;Wt++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Wt]);const yt=r.get(E[Wt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function kt(O){return Math.min(l.maxSamples,O.samples)}function me(O){const E=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function jt(O){const E=h.render.frame;y.get(O)!==E&&(y.set(O,E),O.update())}function ae(O,E){const nt=O.colorSpace,pt=O.format,vt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||nt!==Cs&&nt!==Va&&(we.getTransfer(nt)===He?(pt!==Ti||vt!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),E}function tn(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=et,this.resetTextureUnits=tt,this.setTexture2D=ht,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=Ve,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=me}function Pb(o,e){function i(r,l=Va){let u;const h=we.getTransfer(l);if(r===Bi)return o.UNSIGNED_BYTE;if(r===wd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Dd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===V_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===H_)return o.BYTE;if(r===G_)return o.SHORT;if(r===zo)return o.UNSIGNED_SHORT;if(r===Cd)return o.INT;if(r===Ar)return o.UNSIGNED_INT;if(r===ca)return o.FLOAT;if(r===Ho)return o.HALF_FLOAT;if(r===k_)return o.ALPHA;if(r===X_)return o.RGB;if(r===Ti)return o.RGBA;if(r===Bo)return o.DEPTH_COMPONENT;if(r===Io)return o.DEPTH_STENCIL;if(r===W_)return o.RED;if(r===Ud)return o.RED_INTEGER;if(r===q_)return o.RG;if(r===Ld)return o.RG_INTEGER;if(r===Nd)return o.RGBA_INTEGER;if(r===Rc||r===Cc||r===wc||r===Dc)if(h===He)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Rc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Rc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yh||r===jh||r===Zh||r===Kh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Yh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qh||r===Jh||r===$h)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Qh||r===Jh)return h===He?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===$h)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===td||r===ed||r===nd||r===id||r===ad||r===rd||r===sd||r===od||r===ld||r===cd||r===ud||r===fd||r===hd||r===dd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===td)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ed)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===id)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ad)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===rd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===sd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===od)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ld)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ud)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===hd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Uc||r===pd||r===md)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Uc)return h===He?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===pd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===md)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Y_||r===gd||r===_d||r===vd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Uc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===gd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===_d)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===vd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Po?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ib=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Fb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new qn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ha({vertexShader:Bb,fragmentShader:Ib,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new cn(new Wo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hb extends Ds{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,y=null,v=null,S=null,M=null,T=null;const C=new Fb,x=i.getContextAttributes();let g=null,P=null;const U=[],D=[],V=new pe;let F=null;const L=new Xn;L.viewport=new Ge;const k=new Xn;k.viewport=new Ge;const R=[L,k],A=new oM;let B=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ft=U[j];return ft===void 0&&(ft=new Eh,U[j]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(j){let ft=U[j];return ft===void 0&&(ft=new Eh,U[j]=ft),ft.getGripSpace()},this.getHand=function(j){let ft=U[j];return ft===void 0&&(ft=new Eh,U[j]=ft),ft.getHandSpace()};function et(j){const ft=D.indexOf(j.inputSource);if(ft===-1)return;const bt=U[ft];bt!==void 0&&(bt.update(j.inputSource,j.frame,p||h),bt.dispatchEvent({type:j.type,data:j.inputSource}))}function lt(){l.removeEventListener("select",et),l.removeEventListener("selectstart",et),l.removeEventListener("selectend",et),l.removeEventListener("squeeze",et),l.removeEventListener("squeezestart",et),l.removeEventListener("squeezeend",et),l.removeEventListener("end",lt),l.removeEventListener("inputsourceschange",ht);for(let j=0;j<U.length;j++){const ft=D[j];ft!==null&&(D[j]=null,U[j].disconnect(ft))}B=null,tt=null,C.reset(),e.setRenderTarget(g),M=null,S=null,v=null,l=null,P=null,St.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){u=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){d=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(g=e.getRenderTarget(),l.addEventListener("select",et),l.addEventListener("selectstart",et),l.addEventListener("selectend",et),l.addEventListener("squeeze",et),l.addEventListener("squeezestart",et),l.addEventListener("squeezeend",et),l.addEventListener("end",lt),l.addEventListener("inputsourceschange",ht),x.xrCompatible!==!0&&await i.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(V),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Mt=null,zt=null;x.depth&&(zt=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=x.stencil?Io:Bo,Mt=x.stencil?Po:Ar);const Qt={colorFormat:i.RGBA8,depthFormat:zt,scaleFactor:u};v=new XRWebGLBinding(l,i),S=v.createProjectionLayer(Qt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),P=new Rr(S.textureWidth,S.textureHeight,{format:Ti,type:Bi,depthTexture:new rv(S.textureWidth,S.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const bt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Rr(M.framebufferWidth,M.framebufferHeight,{format:Ti,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),St.setContext(l),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ht(j){for(let ft=0;ft<j.removed.length;ft++){const bt=j.removed[ft],Mt=D.indexOf(bt);Mt>=0&&(D[Mt]=null,U[Mt].disconnect(bt))}for(let ft=0;ft<j.added.length;ft++){const bt=j.added[ft];let Mt=D.indexOf(bt);if(Mt===-1){for(let Qt=0;Qt<U.length;Qt++)if(Qt>=D.length){D.push(bt),Mt=Qt;break}else if(D[Qt]===null){D[Qt]=bt,Mt=Qt;break}if(Mt===-1)break}const zt=U[Mt];zt&&zt.connect(bt)}}const z=new Q,K=new Q;function Z(j,ft,bt){z.setFromMatrixPosition(ft.matrixWorld),K.setFromMatrixPosition(bt.matrixWorld);const Mt=z.distanceTo(K),zt=ft.projectionMatrix.elements,Qt=bt.projectionMatrix.elements,Jt=zt[14]/(zt[10]-1),Ne=zt[14]/(zt[10]+1),Ve=(zt[9]+1)/zt[5],Te=(zt[9]-1)/zt[5],H=(zt[8]-1)/zt[0],un=(Qt[8]+1)/Qt[0],Se=Jt*H,Oe=Jt*un,kt=Mt/(-H+un),me=kt*-H;if(ft.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(me),j.translateZ(kt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),zt[10]===-1)j.projectionMatrix.copy(ft.projectionMatrix),j.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const jt=Jt+kt,ae=Ne+kt,tn=Se-me,O=Oe+(Mt-me),E=Ve*Ne/ae*jt,nt=Te*Ne/ae*jt;j.projectionMatrix.makePerspective(tn,O,E,nt,jt,ae),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function xt(j,ft){ft===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ft.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let ft=j.near,bt=j.far;C.texture!==null&&(C.depthNear>0&&(ft=C.depthNear),C.depthFar>0&&(bt=C.depthFar)),A.near=k.near=L.near=ft,A.far=k.far=L.far=bt,(B!==A.near||tt!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,tt=A.far),L.layers.mask=j.layers.mask|2,k.layers.mask=j.layers.mask|4,A.layers.mask=L.layers.mask|k.layers.mask;const Mt=j.parent,zt=A.cameras;xt(A,Mt);for(let Qt=0;Qt<zt.length;Qt++)xt(zt[Qt],Mt);zt.length===2?Z(A,L,k):A.projectionMatrix.copy(L.projectionMatrix),Rt(j,A,Mt)};function Rt(j,ft,bt){bt===null?j.matrix.copy(ft.matrixWorld):(j.matrix.copy(bt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ft.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ft.projectionMatrix),j.projectionMatrixInverse.copy(ft.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=yd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(j){m=j,S!==null&&(S.fixedFoveation=j),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=j)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(A)};let N=null;function at(j,ft){if(y=ft.getViewerPose(p||h),T=ft,y!==null){const bt=y.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Mt=!1;bt.length!==A.cameras.length&&(A.cameras.length=0,Mt=!0);for(let Jt=0;Jt<bt.length;Jt++){const Ne=bt[Jt];let Ve=null;if(M!==null)Ve=M.getViewport(Ne);else{const H=v.getViewSubImage(S,Ne);Ve=H.viewport,Jt===0&&(e.setRenderTargetTextures(P,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(P))}let Te=R[Jt];Te===void 0&&(Te=new Xn,Te.layers.enable(Jt),Te.viewport=new Ge,R[Jt]=Te),Te.matrix.fromArray(Ne.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Ne.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Jt===0&&(A.matrix.copy(Te.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Mt===!0&&A.cameras.push(Te)}const zt=l.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Jt=v.getDepthInformation(bt[0]);Jt&&Jt.isValid&&Jt.texture&&C.init(e,Jt,l.renderState)}}for(let bt=0;bt<U.length;bt++){const Mt=D[bt],zt=U[bt];Mt!==null&&zt!==void 0&&zt.update(Mt,ft,p||h)}N&&N(j,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),T=null}const St=new uv;St.setAnimationLoop(at),this.setAnimationLoop=function(j){N=j},this.dispose=function(){}}}const _r=new Ii,Gb=new je;function Vb(o,e){function i(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function r(x,g){g.color.getRGB(x.fogColor.value,ev(o)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function l(x,g,P,U,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(x,g):g.isMeshToonMaterial?(u(x,g),v(x,g)):g.isMeshPhongMaterial?(u(x,g),y(x,g)):g.isMeshStandardMaterial?(u(x,g),S(x,g),g.isMeshPhysicalMaterial&&M(x,g,D)):g.isMeshMatcapMaterial?(u(x,g),T(x,g)):g.isMeshDepthMaterial?u(x,g):g.isMeshDistanceMaterial?(u(x,g),C(x,g)):g.isMeshNormalMaterial?u(x,g):g.isLineBasicMaterial?(h(x,g),g.isLineDashedMaterial&&d(x,g)):g.isPointsMaterial?m(x,g,P,U):g.isSpriteMaterial?p(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,i(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,i(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Wn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,i(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Wn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,i(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,i(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const P=e.get(g),U=P.envMap,D=P.envMapRotation;U&&(x.envMap.value=U,_r.copy(D),_r.x*=-1,_r.y*=-1,_r.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),x.envMapRotation.value.setFromMatrix4(Gb.makeRotationFromEuler(_r)),x.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,x.aoMapTransform))}function h(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,i(g.map,x.mapTransform))}function d(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function m(x,g,P,U){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*P,x.scale.value=U*.5,g.map&&(x.map.value=g.map,i(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function p(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,i(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function y(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function v(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function S(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function M(x,g,P){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Wn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,g){g.matcap&&(x.matcap.value=g.matcap)}function C(x,g){const P=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function kb(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,U){const D=U.program;r.uniformBlockBinding(P,D)}function p(P,U){let D=l[P.id];D===void 0&&(T(P),D=y(P),l[P.id]=D,P.addEventListener("dispose",x));const V=U.program;r.updateUBOMapping(P,V);const F=e.render.frame;u[P.id]!==F&&(S(P),u[P.id]=F)}function y(P){const U=v();P.__bindingPointIndex=U;const D=o.createBuffer(),V=P.__size,F=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,V,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,D),D}function v(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const U=l[P.id],D=P.uniforms,V=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let F=0,L=D.length;F<L;F++){const k=Array.isArray(D[F])?D[F]:[D[F]];for(let R=0,A=k.length;R<A;R++){const B=k[R];if(M(B,F,R,V)===!0){const tt=B.__offset,et=Array.isArray(B.value)?B.value:[B.value];let lt=0;for(let ht=0;ht<et.length;ht++){const z=et[ht],K=C(z);typeof z=="number"||typeof z=="boolean"?(B.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,tt+lt,B.__data)):z.isMatrix3?(B.__data[0]=z.elements[0],B.__data[1]=z.elements[1],B.__data[2]=z.elements[2],B.__data[3]=0,B.__data[4]=z.elements[3],B.__data[5]=z.elements[4],B.__data[6]=z.elements[5],B.__data[7]=0,B.__data[8]=z.elements[6],B.__data[9]=z.elements[7],B.__data[10]=z.elements[8],B.__data[11]=0):(z.toArray(B.__data,lt),lt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,tt,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,U,D,V){const F=P.value,L=U+"_"+D;if(V[L]===void 0)return typeof F=="number"||typeof F=="boolean"?V[L]=F:V[L]=F.clone(),!0;{const k=V[L];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return V[L]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function T(P){const U=P.uniforms;let D=0;const V=16;for(let L=0,k=U.length;L<k;L++){const R=Array.isArray(U[L])?U[L]:[U[L]];for(let A=0,B=R.length;A<B;A++){const tt=R[A],et=Array.isArray(tt.value)?tt.value:[tt.value];for(let lt=0,ht=et.length;lt<ht;lt++){const z=et[lt],K=C(z),Z=D%V,xt=Z%K.boundary,Rt=Z+xt;D+=xt,Rt!==0&&V-Rt<K.storage&&(D+=V-Rt),tt.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=D,D+=K.storage}}}const F=D%V;return F>0&&(D+=V-F),P.__size=D,P.__cache={},this}function C(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),U}function x(P){const U=P.target;U.removeEventListener("dispose",x);const D=h.indexOf(U.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function g(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:m,update:p,dispose:g}}class mv{constructor(e={}){const{canvas:i=xx(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const T=new Uint32Array(4),C=new Int32Array(4);let x=null,g=null;const P=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let V=!1;this._outputColorSpace=hi;let F=0,L=0,k=null,R=-1,A=null;const B=new Ge,tt=new Ge;let et=null;const lt=new ye(0);let ht=0,z=i.width,K=i.height,Z=1,xt=null,Rt=null;const N=new Ge(0,0,z,K),at=new Ge(0,0,z,K);let St=!1;const j=new Id;let ft=!1,bt=!1;const Mt=new je,zt=new je,Qt=new Q,Jt=new Ge,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Te(){return k===null?Z:1}let H=r;function un(w,q){return i.getContext(w,q)}try{const w={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:y,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ad}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",Tt,!1),i.addEventListener("webglcontextcreationerror",gt,!1),H===null){const q="webgl2";if(H=un(q,w),H===null)throw un(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Se,Oe,kt,me,jt,ae,tn,O,E,nt,pt,vt,ct,Xt,wt,Gt,Wt,yt,Ct,qt,Ht,Dt,ne,X;function Ut(){Se=new tT(H),Se.init(),Dt=new Pb(H,Se),Oe=new Y1(H,Se,e,Dt),kt=new Ob(H,Se),Oe.reverseDepthBuffer&&S&&kt.buffers.depth.setReversed(!0),me=new iT(H),jt=new xb,ae=new zb(H,Se,kt,jt,Oe,Dt,me),tn=new Z1(D),O=new $1(D),E=new cM(H),ne=new W1(H,E),nt=new eT(H,E,me,ne),pt=new rT(H,nt,E,me),Ct=new aT(H,Oe,ae),Gt=new j1(jt),vt=new Sb(D,tn,O,Se,Oe,ne,Gt),ct=new Vb(D,jt),Xt=new Eb,wt=new wb(Se),yt=new X1(D,tn,O,kt,pt,M,m),Wt=new Lb(D,pt,Oe),X=new kb(H,me,Oe,kt),qt=new q1(H,Se,me),Ht=new nT(H,Se,me),me.programs=vt.programs,D.capabilities=Oe,D.extensions=Se,D.properties=jt,D.renderLists=Xt,D.shadowMap=Wt,D.state=kt,D.info=me}Ut();const Et=new Hb(D,H);this.xr=Et,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=Se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(z,K,!1))},this.getSize=function(w){return w.set(z,K)},this.setSize=function(w,q,rt=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,K=q,i.width=Math.floor(w*Z),i.height=Math.floor(q*Z),rt===!0&&(i.style.width=w+"px",i.style.height=q+"px"),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(z*Z,K*Z).floor()},this.setDrawingBufferSize=function(w,q,rt){z=w,K=q,Z=rt,i.width=Math.floor(w*rt),i.height=Math.floor(q*rt),this.setViewport(0,0,w,q)},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy(N)},this.setViewport=function(w,q,rt,st){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,q,rt,st),kt.viewport(B.copy(N).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(at)},this.setScissor=function(w,q,rt,st){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,q,rt,st),kt.scissor(tt.copy(at).multiplyScalar(Z).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(w){kt.setScissorTest(St=w)},this.setOpaqueSort=function(w){xt=w},this.setTransparentSort=function(w){Rt=w},this.getClearColor=function(w){return w.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(w=!0,q=!0,rt=!0){let st=0;if(w){let W=!1;if(k!==null){const At=k.texture.format;W=At===Nd||At===Ld||At===Ud}if(W){const At=k.texture.type,Lt=At===Bi||At===Ar||At===zo||At===Po||At===wd||At===Dd,Pt=yt.getClearColor(),Ot=yt.getClearAlpha(),te=Pt.r,ee=Pt.g,Yt=Pt.b;Lt?(T[0]=te,T[1]=ee,T[2]=Yt,T[3]=Ot,H.clearBufferuiv(H.COLOR,0,T)):(C[0]=te,C[1]=ee,C[2]=Yt,C[3]=Ot,H.clearBufferiv(H.COLOR,0,C))}else st|=H.COLOR_BUFFER_BIT}q&&(st|=H.DEPTH_BUFFER_BIT),rt&&(st|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",Tt,!1),i.removeEventListener("webglcontextcreationerror",gt,!1),yt.dispose(),Xt.dispose(),wt.dispose(),jt.dispose(),tn.dispose(),O.dispose(),pt.dispose(),ne.dispose(),X.dispose(),vt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",Ns),Et.removeEventListener("sessionend",Os),Ai.stop()};function Bt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const w=me.autoReset,q=Wt.enabled,rt=Wt.autoUpdate,st=Wt.needsUpdate,W=Wt.type;Ut(),me.autoReset=w,Wt.enabled=q,Wt.autoUpdate=rt,Wt.needsUpdate=st,Wt.type=W}function gt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function It(w){const q=w.target;q.removeEventListener("dispose",It),ie(q)}function ie(w){ze(w),jt.remove(w)}function ze(w){const q=jt.get(w).programs;q!==void 0&&(q.forEach(function(rt){vt.releaseProgram(rt)}),w.isShaderMaterial&&vt.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,rt,st,W,At){q===null&&(q=Ne);const Lt=W.isMesh&&W.matrixWorld.determinant()<0,Pt=Ps(w,q,rt,st,W);kt.setMaterial(st,Lt);let Ot=rt.index,te=1;if(st.wireframe===!0){if(Ot=nt.getWireframeAttribute(rt),Ot===void 0)return;te=2}const ee=rt.drawRange,Yt=rt.attributes.position;let fe=ee.start*te,Ae=(ee.start+ee.count)*te;At!==null&&(fe=Math.max(fe,At.start*te),Ae=Math.min(Ae,(At.start+At.count)*te)),Ot!==null?(fe=Math.max(fe,0),Ae=Math.min(Ae,Ot.count)):Yt!=null&&(fe=Math.max(fe,0),Ae=Math.min(Ae,Yt.count));const ke=Ae-fe;if(ke<0||ke===1/0)return;ne.setup(W,st,Pt,rt,Ot);let xe,ce=qt;if(Ot!==null&&(xe=E.get(Ot),ce=Ht,ce.setIndex(xe)),W.isMesh)st.wireframe===!0?(kt.setLineWidth(st.wireframeLinewidth*Te()),ce.setMode(H.LINES)):ce.setMode(H.TRIANGLES);else if(W.isLine){let Kt=st.linewidth;Kt===void 0&&(Kt=1),kt.setLineWidth(Kt*Te()),W.isLineSegments?ce.setMode(H.LINES):W.isLineLoop?ce.setMode(H.LINE_LOOP):ce.setMode(H.LINE_STRIP)}else W.isPoints?ce.setMode(H.POINTS):W.isSprite&&ce.setMode(H.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Es("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))ce.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Kt=W._multiDrawStarts,We=W._multiDrawCounts,ge=W._multiDrawCount,An=Ot?E.get(Ot).bytesPerElement:1,gi=jt.get(st).currentProgram.getUniforms();for(let Un=0;Un<ge;Un++)gi.setValue(H,"_gl_DrawID",Un),ce.render(Kt[Un]/An,We[Un])}else if(W.isInstancedMesh)ce.renderInstances(fe,ke,W.count);else if(rt.isInstancedBufferGeometry){const Kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,We=Math.min(rt.instanceCount,Kt);ce.renderInstances(fe,ke,We)}else ce.render(fe,ke)};function be(w,q,rt){w.transparent===!0&&w.side===Li&&w.forceSinglePass===!1?(w.side=Wn,w.needsUpdate=!0,Ke(w,q,rt),w.side=Wa,w.needsUpdate=!0,Ke(w,q,rt),w.side=Li):Ke(w,q,rt)}this.compile=function(w,q,rt=null){rt===null&&(rt=w),g=wt.get(rt),g.init(q),U.push(g),rt.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),w!==rt&&w.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const st=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const At=W.material;if(At)if(Array.isArray(At))for(let Lt=0;Lt<At.length;Lt++){const Pt=At[Lt];be(Pt,rt,W),st.add(Pt)}else be(At,rt,W),st.add(At)}),g=U.pop(),st},this.compileAsync=function(w,q,rt=null){const st=this.compile(w,q,rt);return new Promise(W=>{function At(){if(st.forEach(function(Lt){jt.get(Lt).currentProgram.isReady()&&st.delete(Lt)}),st.size===0){W(w);return}setTimeout(At,10)}Se.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let vn=null;function pi(w){vn&&vn(w)}function Ns(){Ai.stop()}function Os(){Ai.start()}const Ai=new uv;Ai.setAnimationLoop(pi),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(w){vn=w,Et.setAnimationLoop(w),w===null?Ai.stop():Ai.start()},Et.addEventListener("sessionstart",Ns),Et.addEventListener("sessionend",Os),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(q),q=Et.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,q,k),g=wt.get(w,U.length),g.init(q),U.push(g),zt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),j.setFromProjectionMatrix(zt),bt=this.localClippingEnabled,ft=Gt.init(this.clippingPlanes,bt),x=Xt.get(w,P.length),x.init(),P.push(x),Et.enabled===!0&&Et.isPresenting===!0){const At=D.xr.getDepthSensingMesh();At!==null&&Ya(At,q,-1/0,D.sortObjects)}Ya(w,q,0,D.sortObjects),x.finish(),D.sortObjects===!0&&x.sort(xt,Rt),Ve=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,Ve&&yt.addToRenderList(x,w),this.info.render.frame++,ft===!0&&Gt.beginShadows();const rt=g.state.shadowsArray;Wt.render(rt,w,q),ft===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=x.opaque,W=x.transmissive;if(g.setupLights(),q.isArrayCamera){const At=q.cameras;if(W.length>0)for(let Lt=0,Pt=At.length;Lt<Pt;Lt++){const Ot=At[Lt];zs(st,W,w,Ot)}Ve&&yt.render(w);for(let Lt=0,Pt=At.length;Lt<Pt;Lt++){const Ot=At[Lt];Cr(x,w,Ot,Ot.viewport)}}else W.length>0&&zs(st,W,w,q),Ve&&yt.render(w),Cr(x,w,q);k!==null&&L===0&&(ae.updateMultisampleRenderTarget(k),ae.updateRenderTargetMipmap(k)),w.isScene===!0&&w.onAfterRender(D,w,q),ne.resetDefaultState(),R=-1,A=null,U.pop(),U.length>0?(g=U[U.length-1],ft===!0&&Gt.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,P.pop(),P.length>0?x=P[P.length-1]:x=null};function Ya(w,q,rt,st){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)rt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){st&&Jt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(zt);const Lt=pt.update(w),Pt=w.material;Pt.visible&&x.push(w,Lt,Pt,rt,Jt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const Lt=pt.update(w),Pt=w.material;if(st&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Jt.copy(w.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Jt.copy(Lt.boundingSphere.center)),Jt.applyMatrix4(w.matrixWorld).applyMatrix4(zt)),Array.isArray(Pt)){const Ot=Lt.groups;for(let te=0,ee=Ot.length;te<ee;te++){const Yt=Ot[te],fe=Pt[Yt.materialIndex];fe&&fe.visible&&x.push(w,Lt,fe,rt,Jt.z,Yt)}}else Pt.visible&&x.push(w,Lt,Pt,rt,Jt.z,null)}}const At=w.children;for(let Lt=0,Pt=At.length;Lt<Pt;Lt++)Ya(At[Lt],q,rt,st)}function Cr(w,q,rt,st){const W=w.opaque,At=w.transmissive,Lt=w.transparent;g.setupLightsView(rt),ft===!0&&Gt.setGlobalState(D.clippingPlanes,rt),st&&kt.viewport(B.copy(st)),W.length>0&&ja(W,q,rt),At.length>0&&ja(At,q,rt),Lt.length>0&&ja(Lt,q,rt),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function zs(w,q,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[st.id]===void 0&&(g.state.transmissionRenderTarget[st.id]=new Rr(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?Ho:Bi,minFilter:br,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const At=g.state.transmissionRenderTarget[st.id],Lt=st.viewport||B;At.setSize(Lt.z*D.transmissionResolutionScale,Lt.w*D.transmissionResolutionScale);const Pt=D.getRenderTarget(),Ot=D.getActiveCubeFace(),te=D.getActiveMipmapLevel();D.setRenderTarget(At),D.getClearColor(lt),ht=D.getClearAlpha(),ht<1&&D.setClearColor(16777215,.5),D.clear(),Ve&&yt.render(rt);const ee=D.toneMapping;D.toneMapping=Xa;const Yt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),g.setupLightsView(st),ft===!0&&Gt.setGlobalState(D.clippingPlanes,st),ja(w,rt,st),ae.updateMultisampleRenderTarget(At),ae.updateRenderTargetMipmap(At),Se.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let Ae=0,ke=q.length;Ae<ke;Ae++){const xe=q[Ae],ce=xe.object,Kt=xe.geometry,We=xe.material,ge=xe.group;if(We.side===Li&&ce.layers.test(st.layers)){const An=We.side;We.side=Wn,We.needsUpdate=!0,mi(ce,rt,st,Kt,We,ge),We.side=An,We.needsUpdate=!0,fe=!0}}fe===!0&&(ae.updateMultisampleRenderTarget(At),ae.updateRenderTargetMipmap(At))}D.setRenderTarget(Pt,Ot,te),D.setClearColor(lt,ht),Yt!==void 0&&(st.viewport=Yt),D.toneMapping=ee}function ja(w,q,rt){const st=q.isScene===!0?q.overrideMaterial:null;for(let W=0,At=w.length;W<At;W++){const Lt=w[W],Pt=Lt.object,Ot=Lt.geometry,te=Lt.group;let ee=Lt.material;ee.allowOverride===!0&&st!==null&&(ee=st),Pt.layers.test(rt.layers)&&mi(Pt,q,rt,Ot,ee,te)}}function mi(w,q,rt,st,W,At){w.onBeforeRender(D,q,rt,st,W,At),w.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(D,q,rt,st,w,At),W.transparent===!0&&W.side===Li&&W.forceSinglePass===!1?(W.side=Wn,W.needsUpdate=!0,D.renderBufferDirect(rt,q,st,W,w,At),W.side=Wa,W.needsUpdate=!0,D.renderBufferDirect(rt,q,st,W,w,At),W.side=Li):D.renderBufferDirect(rt,q,st,W,w,At),w.onAfterRender(D,q,rt,st,W,At)}function Ke(w,q,rt){q.isScene!==!0&&(q=Ne);const st=jt.get(w),W=g.state.lights,At=g.state.shadowsArray,Lt=W.state.version,Pt=vt.getParameters(w,W.state,At,q,rt),Ot=vt.getProgramCacheKey(Pt);let te=st.programs;st.environment=w.isMeshStandardMaterial?q.environment:null,st.fog=q.fog,st.envMap=(w.isMeshStandardMaterial?O:tn).get(w.envMap||st.environment),st.envMapRotation=st.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,te===void 0&&(w.addEventListener("dispose",It),te=new Map,st.programs=te);let ee=te.get(Ot);if(ee!==void 0){if(st.currentProgram===ee&&st.lightsStateVersion===Lt)return Fi(w,Pt),ee}else Pt.uniforms=vt.getUniforms(w),w.onBeforeCompile(Pt,D),ee=vt.acquireProgram(Pt,Ot),te.set(Ot,ee),st.uniforms=Pt.uniforms;const Yt=st.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Yt.clippingPlanes=Gt.uniform),Fi(w,Pt),st.needsLights=kc(w),st.lightsStateVersion=Lt,st.needsLights&&(Yt.ambientLightColor.value=W.state.ambient,Yt.lightProbe.value=W.state.probe,Yt.directionalLights.value=W.state.directional,Yt.directionalLightShadows.value=W.state.directionalShadow,Yt.spotLights.value=W.state.spot,Yt.spotLightShadows.value=W.state.spotShadow,Yt.rectAreaLights.value=W.state.rectArea,Yt.ltc_1.value=W.state.rectAreaLTC1,Yt.ltc_2.value=W.state.rectAreaLTC2,Yt.pointLights.value=W.state.point,Yt.pointLightShadows.value=W.state.pointShadow,Yt.hemisphereLights.value=W.state.hemi,Yt.directionalShadowMap.value=W.state.directionalShadowMap,Yt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Yt.spotShadowMap.value=W.state.spotShadowMap,Yt.spotLightMatrix.value=W.state.spotLightMatrix,Yt.spotLightMap.value=W.state.spotLightMap,Yt.pointShadowMap.value=W.state.pointShadowMap,Yt.pointShadowMatrix.value=W.state.pointShadowMatrix),st.currentProgram=ee,st.uniformsList=null,ee}function yn(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=Lc.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function Fi(w,q){const rt=jt.get(w);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function Ps(w,q,rt,st,W){q.isScene!==!0&&(q=Ne),ae.resetTextureUnits();const At=q.fog,Lt=st.isMeshStandardMaterial?q.environment:null,Pt=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Cs,Ot=(st.isMeshStandardMaterial?O:tn).get(st.envMap||Lt),te=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ee=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Yt=!!rt.morphAttributes.position,fe=!!rt.morphAttributes.normal,Ae=!!rt.morphAttributes.color;let ke=Xa;st.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ke=D.toneMapping);const xe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ce=xe!==void 0?xe.length:0,Kt=jt.get(st),We=g.state.lights;if(ft===!0&&(bt===!0||w!==A)){const Qe=w===A&&st.id===R;Gt.setState(st,w,Qe)}let ge=!1;st.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==We.state.version||Kt.outputColorSpace!==Pt||W.isBatchedMesh&&Kt.batching===!1||!W.isBatchedMesh&&Kt.batching===!0||W.isBatchedMesh&&Kt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Kt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Kt.instancing===!1||!W.isInstancedMesh&&Kt.instancing===!0||W.isSkinnedMesh&&Kt.skinning===!1||!W.isSkinnedMesh&&Kt.skinning===!0||W.isInstancedMesh&&Kt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Kt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Kt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Kt.instancingMorph===!1&&W.morphTexture!==null||Kt.envMap!==Ot||st.fog===!0&&Kt.fog!==At||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Gt.numPlanes||Kt.numIntersection!==Gt.numIntersection)||Kt.vertexAlphas!==te||Kt.vertexTangents!==ee||Kt.morphTargets!==Yt||Kt.morphNormals!==fe||Kt.morphColors!==Ae||Kt.toneMapping!==ke||Kt.morphTargetsCount!==ce)&&(ge=!0):(ge=!0,Kt.__version=st.version);let An=Kt.currentProgram;ge===!0&&(An=Ke(st,q,W));let gi=!1,Un=!1,mn=!1;const Pe=An.getUniforms(),Ln=Kt.uniforms;if(kt.useProgram(An.program)&&(gi=!0,Un=!0,mn=!0),st.id!==R&&(R=st.id,Un=!0),gi||A!==w){kt.buffers.depth.getReversed()?(Mt.copy(w.projectionMatrix),Ex(Mt),Tx(Mt),Pe.setValue(H,"projectionMatrix",Mt)):Pe.setValue(H,"projectionMatrix",w.projectionMatrix),Pe.setValue(H,"viewMatrix",w.matrixWorldInverse);const Sn=Pe.map.cameraPosition;Sn!==void 0&&Sn.setValue(H,Qt.setFromMatrixPosition(w.matrixWorld)),Oe.logarithmicDepthBuffer&&Pe.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Pe.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),A!==w&&(A=w,Un=!0,mn=!0)}if(W.isSkinnedMesh){Pe.setOptional(H,W,"bindMatrix"),Pe.setOptional(H,W,"bindMatrixInverse");const Qe=W.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Pe.setValue(H,"boneTexture",Qe.boneTexture,ae))}W.isBatchedMesh&&(Pe.setOptional(H,W,"batchingTexture"),Pe.setValue(H,"batchingTexture",W._matricesTexture,ae),Pe.setOptional(H,W,"batchingIdTexture"),Pe.setValue(H,"batchingIdTexture",W._indirectTexture,ae),Pe.setOptional(H,W,"batchingColorTexture"),W._colorsTexture!==null&&Pe.setValue(H,"batchingColorTexture",W._colorsTexture,ae));const Rn=rt.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Ct.update(W,rt,An),(Un||Kt.receiveShadow!==W.receiveShadow)&&(Kt.receiveShadow=W.receiveShadow,Pe.setValue(H,"receiveShadow",W.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Ln.envMap.value=Ot,Ln.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&q.environment!==null&&(Ln.envMapIntensity.value=q.environmentIntensity),Un&&(Pe.setValue(H,"toneMappingExposure",D.toneMappingExposure),Kt.needsLights&&Vc(Ln,mn),At&&st.fog===!0&&ct.refreshFogUniforms(Ln,At),ct.refreshMaterialUniforms(Ln,st,Z,K,g.state.transmissionRenderTarget[w.id]),Lc.upload(H,yn(Kt),Ln,ae)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Lc.upload(H,yn(Kt),Ln,ae),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Pe.setValue(H,"center",W.center),Pe.setValue(H,"modelViewMatrix",W.modelViewMatrix),Pe.setValue(H,"normalMatrix",W.normalMatrix),Pe.setValue(H,"modelMatrix",W.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Qe=st.uniformsGroups;for(let Sn=0,wr=Qe.length;Sn<wr;Sn++){const Pn=Qe[Sn];X.update(Pn,An),X.bind(Pn,An)}}return An}function Vc(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function kc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(w,q,rt){const st=jt.get(w);st.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),jt.get(w.texture).__webglTexture=q,jt.get(w.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,q){const rt=jt.get(w);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const qo=H.createFramebuffer();this.setRenderTarget=function(w,q=0,rt=0){k=w,F=q,L=rt;let st=!0,W=null,At=!1,Lt=!1;if(w){const Ot=jt.get(w);if(Ot.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(H.FRAMEBUFFER,null),st=!1;else if(Ot.__webglFramebuffer===void 0)ae.setupRenderTarget(w);else if(Ot.__hasExternalTextures)ae.rebindTextures(w,jt.get(w.texture).__webglTexture,jt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Yt=w.depthTexture;if(Ot.__boundDepthTexture!==Yt){if(Yt!==null&&jt.has(Yt)&&(w.width!==Yt.image.width||w.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(w)}}const te=w.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Lt=!0);const ee=jt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ee[q])?W=ee[q][rt]:W=ee[q],At=!0):w.samples>0&&ae.useMultisampledRTT(w)===!1?W=jt.get(w).__webglMultisampledFramebuffer:Array.isArray(ee)?W=ee[rt]:W=ee,B.copy(w.viewport),tt.copy(w.scissor),et=w.scissorTest}else B.copy(N).multiplyScalar(Z).floor(),tt.copy(at).multiplyScalar(Z).floor(),et=St;if(rt!==0&&(W=qo),kt.bindFramebuffer(H.FRAMEBUFFER,W)&&st&&kt.drawBuffers(w,W),kt.viewport(B),kt.scissor(tt),kt.setScissorTest(et),At){const Ot=jt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ot.__webglTexture,rt)}else if(Lt){const Ot=jt.get(w.texture),te=q;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ot.__webglTexture,rt,te)}else if(w!==null&&rt!==0){const Ot=jt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ot.__webglTexture,rt)}R=-1},this.readRenderTargetPixels=function(w,q,rt,st,W,At,Lt,Pt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=jt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){kt.bindFramebuffer(H.FRAMEBUFFER,Ot);try{const te=w.textures[Pt],ee=te.format,Yt=te.type;if(!Oe.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-st&&rt>=0&&rt<=w.height-W&&(w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pt),H.readPixels(q,rt,st,W,Dt.convert(ee),Dt.convert(Yt),At))}finally{const te=k!==null?jt.get(k).__webglFramebuffer:null;kt.bindFramebuffer(H.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(w,q,rt,st,W,At,Lt,Pt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=jt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(q>=0&&q<=w.width-st&&rt>=0&&rt<=w.height-W){kt.bindFramebuffer(H.FRAMEBUFFER,Ot);const te=w.textures[Pt],ee=te.format,Yt=te.type;if(!Oe.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const fe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,fe),H.bufferData(H.PIXEL_PACK_BUFFER,At.byteLength,H.STREAM_READ),w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pt),H.readPixels(q,rt,st,W,Dt.convert(ee),Dt.convert(Yt),0);const Ae=k!==null?jt.get(k).__webglFramebuffer:null;kt.bindFramebuffer(H.FRAMEBUFFER,Ae);const ke=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Mx(H,ke,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,fe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,At),H.deleteBuffer(fe),H.deleteSync(ke),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,q=null,rt=0){const st=Math.pow(2,-rt),W=Math.floor(w.image.width*st),At=Math.floor(w.image.height*st),Lt=q!==null?q.x:0,Pt=q!==null?q.y:0;ae.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,Lt,Pt,W,At),kt.unbindTexture()};const Za=H.createFramebuffer(),Bs=H.createFramebuffer();this.copyTextureToTexture=function(w,q,rt=null,st=null,W=0,At=null){At===null&&(W!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=W,W=0):At=0);let Lt,Pt,Ot,te,ee,Yt,fe,Ae,ke;const xe=w.isCompressedTexture?w.mipmaps[At]:w.image;if(rt!==null)Lt=rt.max.x-rt.min.x,Pt=rt.max.y-rt.min.y,Ot=rt.isBox3?rt.max.z-rt.min.z:1,te=rt.min.x,ee=rt.min.y,Yt=rt.isBox3?rt.min.z:0;else{const Rn=Math.pow(2,-W);Lt=Math.floor(xe.width*Rn),Pt=Math.floor(xe.height*Rn),w.isDataArrayTexture?Ot=xe.depth:w.isData3DTexture?Ot=Math.floor(xe.depth*Rn):Ot=1,te=0,ee=0,Yt=0}st!==null?(fe=st.x,Ae=st.y,ke=st.z):(fe=0,Ae=0,ke=0);const ce=Dt.convert(q.format),Kt=Dt.convert(q.type);let We;q.isData3DTexture?(ae.setTexture3D(q,0),We=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ae.setTexture2DArray(q,0),We=H.TEXTURE_2D_ARRAY):(ae.setTexture2D(q,0),We=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const ge=H.getParameter(H.UNPACK_ROW_LENGTH),An=H.getParameter(H.UNPACK_IMAGE_HEIGHT),gi=H.getParameter(H.UNPACK_SKIP_PIXELS),Un=H.getParameter(H.UNPACK_SKIP_ROWS),mn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,xe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,te),H.pixelStorei(H.UNPACK_SKIP_ROWS,ee),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Yt);const Pe=w.isDataArrayTexture||w.isData3DTexture,Ln=q.isDataArrayTexture||q.isData3DTexture;if(w.isDepthTexture){const Rn=jt.get(w),Qe=jt.get(q),Sn=jt.get(Rn.__renderTarget),wr=jt.get(Qe.__renderTarget);kt.bindFramebuffer(H.READ_FRAMEBUFFER,Sn.__webglFramebuffer),kt.bindFramebuffer(H.DRAW_FRAMEBUFFER,wr.__webglFramebuffer);for(let Pn=0;Pn<Ot;Pn++)Pe&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,jt.get(w).__webglTexture,W,Yt+Pn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,jt.get(q).__webglTexture,At,ke+Pn)),H.blitFramebuffer(te,ee,Lt,Pt,fe,Ae,Lt,Pt,H.DEPTH_BUFFER_BIT,H.NEAREST);kt.bindFramebuffer(H.READ_FRAMEBUFFER,null),kt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||jt.has(w)){const Rn=jt.get(w),Qe=jt.get(q);kt.bindFramebuffer(H.READ_FRAMEBUFFER,Za),kt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Bs);for(let Sn=0;Sn<Ot;Sn++)Pe?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Rn.__webglTexture,W,Yt+Sn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Rn.__webglTexture,W),Ln?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Qe.__webglTexture,At,ke+Sn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Qe.__webglTexture,At),W!==0?H.blitFramebuffer(te,ee,Lt,Pt,fe,Ae,Lt,Pt,H.COLOR_BUFFER_BIT,H.NEAREST):Ln?H.copyTexSubImage3D(We,At,fe,Ae,ke+Sn,te,ee,Lt,Pt):H.copyTexSubImage2D(We,At,fe,Ae,te,ee,Lt,Pt);kt.bindFramebuffer(H.READ_FRAMEBUFFER,null),kt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ln?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(We,At,fe,Ae,ke,Lt,Pt,Ot,ce,Kt,xe.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(We,At,fe,Ae,ke,Lt,Pt,Ot,ce,xe.data):H.texSubImage3D(We,At,fe,Ae,ke,Lt,Pt,Ot,ce,Kt,xe):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,At,fe,Ae,Lt,Pt,ce,Kt,xe.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,At,fe,Ae,xe.width,xe.height,ce,xe.data):H.texSubImage2D(H.TEXTURE_2D,At,fe,Ae,Lt,Pt,ce,Kt,xe);H.pixelStorei(H.UNPACK_ROW_LENGTH,ge),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,An),H.pixelStorei(H.UNPACK_SKIP_PIXELS,gi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Un),H.pixelStorei(H.UNPACK_SKIP_IMAGES,mn),At===0&&q.generateMipmaps&&H.generateMipmap(We),kt.unbindTexture()},this.copyTextureToTexture3D=function(w,q,rt=null,st=null,W=0){return Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,q,rt,st,W)},this.initRenderTarget=function(w){jt.get(w).__webglFramebuffer===void 0&&ae.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ae.setTextureCube(w,0):w.isData3DTexture?ae.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ae.setTexture2DArray(w,0):ae.setTexture2D(w,0),kt.unbindTexture()},this.resetState=function(){F=0,L=0,k=null,kt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(e),i.unpackColorSpace=we._getUnpackColorSpace()}}const Xb=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Wb=`
  precision highp float;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uPointer;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - uResolution.xy) / min(uResolution.x, uResolution.y);
    vec2 pointer = (uPointer - 0.5) * vec2(0.22, -0.18);
    vec2 p = uv + pointer;

    float aurora = smoothstep(0.72, 0.06, abs(p.y + sin(p.x * 2.1 + uTime * 0.28) * 0.18));
    aurora *= 0.38 + noise(p * 2.0 + uTime * 0.08) * 0.62;
    float halo = smoothstep(1.25, 0.0, length(p - vec2(0.35, -0.08)));
    float stars = step(0.995, noise(gl_FragCoord.xy * 0.45 + uTime * 0.04));

    vec3 ink = vec3(0.025, 0.035, 0.07);
    vec3 blue = vec3(0.05, 0.22, 0.38);
    vec3 teal = vec3(0.04, 0.72, 0.72);
    vec3 rose = vec3(0.84, 0.18, 0.58);
    vec3 gold = vec3(1.0, 0.68, 0.18);

    vec3 color = mix(ink, blue, smoothstep(-0.85, 0.9, p.y));
    color += teal * aurora * 0.34;
    color += rose * aurora * smoothstep(-0.4, 0.9, p.x) * 0.22;
    color += blue * halo * 0.42;
    color += gold * stars * 0.55;
    color *= 1.0 - smoothstep(0.45, 1.8, length(uv)) * 0.42;
    gl_FragColor = vec4(color, 1.0);
  }
`;function Td(o,e=o){return new tM({color:o,emissive:e,emissiveIntensity:.16})}function N_(o,e,i,r){const l=new cn(new Us(o,e,i,1,1,1),Td(r));return l.castShadow=!0,l.receiveShadow=!0,l}function qb(){const o=Pi.useRef(null);return Pi.useEffect(()=>{const e=o.current;if(!e)return;const i=new mv({antialias:!0,alpha:!1});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.shadowMap.enabled=!0,i.shadowMap.type=Rd,e.appendChild(i.domElement);const r=new Sd,l=new Xn(42,1,.1,100);l.position.set(.15,4.9,10.4),l.lookAt(.35,.95,0);const u={uTime:{value:0},uResolution:{value:new pe(1,1)},uPointer:{value:new pe(.5,.5)}},h=new Sd,d=new Bd,m=new cn(new Wo(2,2),new ha({vertexShader:Xb,fragmentShader:Wb,uniforms:u}));h.add(m),r.add(new iM("#ffffff","#20305f",2.8));const p=new lv("#fff2bf",4.1);p.position.set(-3.8,7.8,6.2),p.castShadow=!0,p.shadow.mapSize.set(2048,2048),r.add(p);const y=new Md("#2af8ff",7,18);y.position.set(4.2,2.8,3.2),r.add(y);const v=new Md("#ff4bb7",5.5,16);v.position.set(-4.8,1.8,-1.8),r.add(v);const S=new Oi;S.position.set(2.25,-.95,-.7),S.rotation.set(-.1,-.48,.02),r.add(S);const M=new cn(new Fo(4.1,4.75,.28,7),Td("#252458","#3b2a8d"));M.receiveShadow=!0,S.add(M);const T=new cn(new Fo(4.12,4.76,.045,7),Td("#3a3977","#5b4ed6"));T.position.y=.17,S.add(T);const C=["#22f2d0","#18c9ff","#ff45bd","#c7ff2f","#ffb13b","#7165ff"],x=[];for(let R=0;R<62;R+=1){const A=R*.58,B=.48+R%11*.32,tt=Math.cos(A)*B,et=Math.sin(A)*B*.7,lt=.34+R*13%17*.105,ht=.16+R%4*.045,z=N_(ht,lt,ht,C[R%C.length]);z.position.set(tt,lt/2+.18,et),z.rotation.y=A*.32,z.userData={baseHeight:lt,phase:R*.42},S.add(z),x.push(z)}const g=new Oi,P=new Fd({color:"#f4ff6a",transparent:!0,opacity:.78});for(let R=0;R<5;R+=1){const A=[];for(let B=0;B<180;B+=1){const tt=B/179,et=tt*Math.PI*3.2+R*1.26;A.push(new Q(Math.cos(et)*(1.1+tt*1.9),.4+Math.sin(tt*Math.PI)*1.75+R*.04,Math.sin(et)*(.48+tt*.55)))}g.add(new iv(new zn().setFromPoints(A),P))}S.add(g);const U=[];for(let R=0;R<10;R+=1){const A=N_(.22,.22,.22,C[(R+2)%C.length]);A.userData={angle:R*.72,radius:2.6+R%3*.3,speed:.45+R*.025},S.add(A),U.push(A)}const D=new cv;let V=0;const F=()=>{const R=e.clientWidth,A=e.clientHeight;i.setSize(R,A),l.aspect=R/A,l.updateProjectionMatrix(),u.uResolution.value.set(R*i.getPixelRatio(),A*i.getPixelRatio())},L=R=>{u.uPointer.value.set(R.clientX/window.innerWidth,R.clientY/window.innerHeight)},k=()=>{V=requestAnimationFrame(k);const R=D.getElapsedTime();u.uTime.value=R,S.rotation.y=-.48+Math.sin(R*.2)*.2,S.rotation.x=-.1+Math.sin(R*.31)*.045,S.position.y=-.95+Math.sin(R*.85)*.08,g.rotation.y=R*.42,g.rotation.x=Math.sin(R*.37)*.18,x.forEach(A=>{const B=1+Math.max(0,Math.sin(R*2.6+A.userData.phase))*.16;A.scale.y=B,A.position.y=A.userData.baseHeight*B/2+.18}),U.forEach(A=>{const B=A.userData,tt=B.angle+R*B.speed;A.position.set(Math.cos(tt)*B.radius,1.35+Math.sin(R*1.4+B.angle)*.48,Math.sin(tt)*B.radius*.55),A.rotation.set(R*.9+B.angle,R*1.2,R*.7)}),l.position.x=Math.sin(R*.16)*.22,l.lookAt(.35,.95,0),i.autoClear=!0,i.render(h,d),i.autoClear=!1,i.clearDepth(),i.render(r,l)};return F(),k(),window.addEventListener("resize",F),window.addEventListener("pointermove",L),()=>{cancelAnimationFrame(V),window.removeEventListener("resize",F),window.removeEventListener("pointermove",L),e.removeChild(i.domElement),i.dispose(),m.geometry.dispose(),m.material.dispose(),r.traverse(R=>{R.geometry&&R.geometry.dispose(),R.material&&R.material.dispose()})}},[]),_t.createElement("div",{className:"sceneCanvas",ref:o,"aria-hidden":"true"})}const zi={name:"Alisa Pechorina",location:"Saint Petersburg, Russia",email:"disaster.woman007@gmail.com",phone:"+7 951 661 6636",github:"https://github.com/DisasterWoman",headline:"Frontend developer for immersive interfaces.",summary:"React and TypeScript developer with commercial product experience, strong UI ownership and a focused Three.js portfolio direction for data-heavy planning, analytics and AI-powered workflows."},gv=`mailto:${zi.email}?subject=Frontend%20Developer%20React%20Three.js%20Opportunity`,Yb=[{label:"3D",href:"/3d"},{label:"Signal",href:"/#signal"},{label:"Impact",href:"/#impact"},{label:"Stack",href:"/#stack"},{label:"Contact",href:"/#contact"}],jb=[{value:"4+",label:"years in frontend"},{value:"20%",label:"hotel occupancy lift"},{value:"30%",label:"fewer booking errors"},{value:"EN",label:"fluent communication"}],Zb=["React, TypeScript and Redux Toolkit in commercial SaaS interfaces.","Interactive booking, analytics, filtering and notification flows shipped to users.","API integrations, responsive design, Edge/Safari support, testing and documentation.","Three.js focus through portfolio-level immersive planning and feasibility interfaces."],Kb=[{company:"UPRO GROUP",role:"Frontend Developer - React, Redux Toolkit, TypeScript",period:"Jan 2022 - Present",accent:"Hospitality SaaS",points:["Built room, pricing and analytics admin workflows.","Delivered booking UI with calendar, dynamic pricing and payments.","Improved API synchronization and notification reliability."]},{company:"Trending Jobs",role:"Frontend Developer - React, Redux Toolkit, TypeScript",period:"Feb 2021 - Jan 2022",accent:"International platform",points:["Created dynamic filters by salary, location and employment type.","Built candidate accounts for resumes, responses and notifications.","Improved data loading and reduced server pressure through API optimization."]},{company:"Deutsche Telekom IT",role:"Frontend Developer - Vue, Nuxt, TypeScript",period:"Aug 2020 - Dec 2021",accent:"Enterprise UI",points:["Implemented state-driven select matrices and responsive product lists.","Refactored legacy code with TypeScript and performance improvements.","Added Jest/Vitest coverage and technical documentation."]}],Qb=["React","TypeScript","JavaScript","Three.js","Next.js","Redux Toolkit","RTK Query","React Query","React Hook Form","Framer Motion","REST API","Jest","Vitest","Tailwind CSS","MUI","Ant Design","Vue","Nuxt","Pinia","CI/CD"],Jb=[{title:"Urban product lens",body:"Portfolio story tuned to architecture, planning, feasibility and sustainable design."},{title:"Frontend ownership",body:"Feature work from idea, contracts and states through production polish."},{title:"Interactive layer",body:"Three.js animation, shader motion and live data-inspired visual language."}];function $b(){return _t.createElement("nav",{className:"topbar","aria-label":"Portfolio navigation"},_t.createElement("a",{className:"brand",href:"/"},_t.createElement("span",null,"AP"),zi.name),_t.createElement("div",{className:"navLinks"},Yb.map(o=>_t.createElement("a",{key:o.href,href:o.href},o.label))))}const tA=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_v=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();var eA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const nA=Pi.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:h,...d},m)=>Pi.createElement("svg",{ref:m,...eA,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:_v("lucide",l),...d},[...h.map(([p,y])=>Pi.createElement(p,y)),...Array.isArray(u)?u:[u]]));const Yn=(o,e)=>{const i=Pi.forwardRef(({className:r,...l},u)=>Pi.createElement(nA,{ref:u,iconNode:e,className:_v(`lucide-${tA(o)}`,r),...l}));return i.displayName=`${o}`,i};const iA=Yn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);const aA=Yn("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);const rA=Yn("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);const sA=Yn("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);const oA=Yn("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const lA=Yn("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);const vv=Yn("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);const yv=Yn("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);const cA=Yn("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);const uA=Yn("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);const fA=Yn("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);const hA=Yn("Radar",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);const dA=Yn("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const pA=Yn("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);function O_({children:o,href:e,variant:i="primary",...r}){return _t.createElement("a",{className:`button button--${i}`,href:e,...r},o)}function mA(){return _t.createElement("header",{id:"top",className:"hero"},_t.createElement("section",{className:"heroCopy","aria-labelledby":"hero-title"},_t.createElement("p",{className:"kicker"},_t.createElement(dA,{size:16})," React / Three.js / TypeScript"),_t.createElement("h1",{id:"hero-title"},zi.headline),_t.createElement("p",{className:"lead"},zi.summary),_t.createElement("div",{className:"ctaRow"},_t.createElement(O_,{href:gv},_t.createElement(yv,{size:18})," Contact me"),_t.createElement(O_,{variant:"secondary",href:zi.github,target:"_blank",rel:"noreferrer"},_t.createElement(vv,{size:18})," GitHub ",_t.createElement(iA,{size:16}))),_t.createElement("div",{className:"profileMeta","aria-label":"Profile details"},_t.createElement("span",null,_t.createElement(cA,{size:16})," ",zi.location),_t.createElement("span",null,_t.createElement(lA,{size:16})," Fluent English"),_t.createElement("span",null,_t.createElement(sA,{size:16})," SaaS product UI"))),_t.createElement("aside",{className:"heroPanel","aria-label":"Role match summary"},_t.createElement("div",{className:"panelTop"},_t.createElement("span",null,_t.createElement(hA,{size:18})," live role signal"),_t.createElement("strong",null,"React + Three.js")),_t.createElement("div",{className:"signalBars","aria-hidden":"true"},_t.createElement("span",null),_t.createElement("span",null),_t.createElement("span",null),_t.createElement("span",null)),_t.createElement("div",{className:"metricGrid"},jb.map(o=>_t.createElement("div",{className:"metricTile",key:o.label},_t.createElement("strong",null,o.value),_t.createElement("span",null,o.label))))))}function z_(o,e=o,i=.06){return new $x({color:o,emissive:e,emissiveIntensity:i,roughness:.72,metalness:.02})}function P_(o,e="#8eeeff"){const i=[];for(let r=0;r<=240;r+=1){const l=r/240*Math.PI*2;i.push(new Q(Math.cos(l)*o,0,Math.sin(l)*o))}return new iv(new zn().setFromPoints(i),new Fd({color:e,transparent:!0,opacity:.28}))}function gA(o){const e=new zn,i=new Float32Array(o*3),r=new Float32Array(o*3);for(let l=0;l<o;l+=1){const u=9+Math.random()*28,h=Math.random()*Math.PI*2,d=Math.acos(Math.random()*2-1);i[l*3]=u*Math.sin(d)*Math.cos(h),i[l*3+1]=u*Math.cos(d)*.6,i[l*3+2]=u*Math.sin(d)*Math.sin(h);const m=.72+Math.random()*.28;r[l*3]=m,r[l*3+1]=m*(.86+Math.random()*.14),r[l*3+2]=1}return e.setAttribute("position",new di(i,3)),e.setAttribute("color",new di(r,3)),new Jx(e,new av({size:.035,transparent:!0,opacity:.86,vertexColors:!0,depthWrite:!1}))}function _A(){const o=Pi.useRef(null);return Pi.useEffect(()=>{const e=o.current;if(!e)return;const i=new mv({antialias:!0,alpha:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.shadowMap.enabled=!0,i.shadowMap.type=Rd,e.appendChild(i.domElement);const r=new Sd,l=new Xn(42,1,.1,100);l.position.set(0,5.2,12.2),r.add(new sM("#8bb8ff",.8));const u=new Md("#fff0a8",12,40);u.castShadow=!0,r.add(u);const h=new lv("#79ecff",1.3);h.position.set(-6,7,5),r.add(h);const d=new Oi;d.rotation.x=-.18,r.add(d);const m=gA(900);r.add(m);const p=new cn(new Mr(.82,48,48),new xr({color:"#ffd84d"}));d.add(p);const y=new cn(new Mr(1.2,48,48),new xr({color:"#ff9f2e",transparent:!0,opacity:.18,depthWrite:!1}));d.add(y);const S=[{radius:1.55,size:.18,speed:1.45,color:"#8ef5ff",y:.02},{radius:2.25,size:.28,speed:1.08,color:"#ffb15a",y:-.03},{radius:3.1,size:.34,speed:.82,color:"#35d9ff",y:.05,moon:!0},{radius:4.05,size:.26,speed:.64,color:"#ff5ca8",y:-.04},{radius:5.15,size:.52,speed:.43,color:"#d9ff45",y:.03},{radius:6.35,size:.42,speed:.32,color:"#7d70ff",y:-.02,rings:!0},{radius:7.35,size:.3,speed:.25,color:"#22f2d0",y:.06}].map((D,V)=>{const F=P_(D.radius,V%2?"#b4f6ff":"#fff06a");F.rotation.y=V*.05,d.add(F);const L=new Oi;L.rotation.y=V*.8,d.add(L);const k=new cn(new Mr(D.size,32,32),z_(D.color,D.color,.12));k.position.set(D.radius,D.y,0),k.castShadow=!0,k.receiveShadow=!0,L.add(k);let R=null;if(D.moon){R=new Oi,R.position.copy(k.position);const A=P_(.56,"#ffffff");A.material.opacity=.22,R.add(A);const B=new cn(new Mr(.07,16,16),z_("#f7fbff","#ffffff",.05));B.position.x=.56,R.add(B),L.add(R)}if(D.rings){const A=new cn(new Gd(D.size*1.35,D.size*2.05,80),new xr({color:"#f4ff6a",transparent:!0,opacity:.58,side:Li}));A.position.copy(k.position),A.rotation.set(Math.PI/2.55,.24,.18),L.add(A)}return{pivot:L,planet:k,moonPivot:R,speed:D.speed,baseY:D.y}}),M=new Oi,T=new cn(new Mr(.1,18,18),new xr({color:"#ffffff"})),C=new cn(new Hd(.08,.9,18),new xr({color:"#62f6ff",transparent:!0,opacity:.44}));C.rotation.z=Math.PI/2,C.position.x=-.45,M.add(T,C),d.add(M);const x=new cv;let g=0;const P=()=>{const D=e.clientWidth,V=e.clientHeight;i.setSize(D,V),l.aspect=D/V,l.updateProjectionMatrix()},U=()=>{g=requestAnimationFrame(U);const D=x.getElapsedTime();d.rotation.y=D*.055,m.rotation.y=D*.012,p.scale.setScalar(1+Math.sin(D*2.4)*.04),y.scale.setScalar(1+Math.sin(D*1.7)*.08),S.forEach(({pivot:F,planet:L,moonPivot:k,speed:R,baseY:A},B)=>{F.rotation.y=D*R+B*.8,L.rotation.y=D*(1.2+B*.08),L.position.y=A+Math.sin(D*1.4+B)*.035,k&&(k.rotation.y=D*2.4)});const V=D*.46;M.position.set(Math.cos(V)*6.1,.8+Math.sin(D*1.1)*.45,Math.sin(V)*2.2),M.rotation.y=-V,l.position.x=Math.sin(D*.16)*1.2,l.position.y=5.2+Math.sin(D*.21)*.35,l.lookAt(.8,0,0),i.render(r,l)};return P(),U(),window.addEventListener("resize",P),()=>{cancelAnimationFrame(g),window.removeEventListener("resize",P),e.removeChild(i.domElement),i.dispose(),r.traverse(D=>{D.geometry&&D.geometry.dispose(),D.material&&D.material.dispose()})}},[]),_t.createElement("div",{className:"complexCanvas",ref:o,"aria-label":"Animated solar system scene"})}function vA(){return _t.createElement("section",{className:"showcaseSection","aria-label":"Advanced 3D animation page"},_t.createElement(_A,null),_t.createElement("div",{className:"showcaseCopy"},_t.createElement("p",{className:"kicker"},_t.createElement(uA,{size:16})," 3D solar system"),_t.createElement("h1",null,"Solar interface system."),_t.createElement("p",null,"A dedicated Three.js page with orbiting planets, glowing stars, planetary rings and a soft cinematic camera loop."),_t.createElement("div",{className:"showcaseBadges","aria-label":"3D scene details"},_t.createElement("span",null,"900 stars"),_t.createElement("span",null,"7 planets"),_t.createElement("span",null,"animated orbits"))))}function Gc({kicker:o,title:e,body:i,icon:r}){return _t.createElement("div",{className:"sectionIntro"},_t.createElement("p",{className:"kicker"},r?_t.createElement(r,{size:16}):null,o),_t.createElement("h2",null,e),i?_t.createElement("p",null,i):null)}function yA(){return _t.createElement("section",{className:"contentSection",id:"signal"},_t.createElement(Gc,{icon:aA,kicker:"Signal",title:"Architecture-tech interface energy, without the visual noise.",body:"The site now lets the 3D island carry the personality while the content stays readable and calm."}),_t.createElement("div",{className:"signalCards"},Jb.map((o,e)=>_t.createElement("article",{className:"signalCard",key:o.title},_t.createElement("span",null,String(e+1).padStart(2,"0")),_t.createElement("h3",null,o.title),_t.createElement("p",null,o.body)))))}function SA(){return _t.createElement("section",{className:"contentSection",id:"impact"},_t.createElement(Gc,{kicker:"Impact",title:"Commercial frontend with product outcomes."}),_t.createElement("div",{className:"impactList"},Zb.map(o=>_t.createElement("p",{key:o},_t.createElement(oA,{size:18})," ",o))))}function xA(){return _t.createElement("section",{className:"experienceRail","aria-label":"Experience timeline"},Kb.map(o=>_t.createElement("article",{className:"experienceItem",key:o.company},_t.createElement("div",{className:"experienceHeader"},_t.createElement("p",null,o.period),_t.createElement("span",null,o.accent)),_t.createElement("div",null,_t.createElement("h3",null,o.company),_t.createElement("p",null,o.role)),_t.createElement("ul",null,o.points.map(e=>_t.createElement("li",{key:e},e))))))}function MA(){return _t.createElement("section",{className:"contentSection",id:"stack"},_t.createElement(Gc,{icon:rA,kicker:"Stack",title:"Frontend toolkit with a visual systems edge.",body:"A practical stack for maintainable React applications, animated interfaces and data-rich user journeys."}),_t.createElement("div",{className:"skillCloud"},Qb.map(o=>_t.createElement("span",{key:o},o))))}function EA(){return _t.createElement("footer",{className:"footer",id:"contact"},_t.createElement(Gc,{icon:pA,kicker:"Contact",title:"Ready for the React / Three.js interview loop.",body:"Interested in architecture tech, AI-supported workflows and international product teams."}),_t.createElement("div",{className:"contactLinks"},_t.createElement("a",{href:gv},_t.createElement(yv,{size:18})," ",zi.email),_t.createElement("a",{href:`tel:${zi.phone.replace(/\s/g,"")}`},_t.createElement(fA,{size:18})," ",zi.phone),_t.createElement("a",{href:zi.github,target:"_blank",rel:"noreferrer"},_t.createElement(vv,{size:18})," github.com/DisasterWoman")))}function TA(){const o=window.location.pathname==="/3d";return _t.createElement(_t.Fragment,null,o?null:_t.createElement(qb,null),_t.createElement("div",{className:"grainLayer","aria-hidden":"true"}),_t.createElement("main",{className:"pageShell"},_t.createElement($b,null),o?_t.createElement(vA,null):_t.createElement(_t.Fragment,null,_t.createElement(mA,null),_t.createElement(yA,null),_t.createElement(SA,null),_t.createElement(xA,null),_t.createElement(MA,null),_t.createElement(EA,null))))}NS.createRoot(document.getElementById("root")).render(_t.createElement(_t.StrictMode,null,_t.createElement(TA,null)));
