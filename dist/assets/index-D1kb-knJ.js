(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function IM(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ld={exports:{}},fe={};var E_;function BM(){if(E_)return fe;E_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function g(I,nt,pt){this.props=I,this.context=nt,this.refs=S,this.updater=pt||E}g.prototype.isReactComponent={},g.prototype.setState=function(I,nt){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,nt,"setState")},g.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function T(){}T.prototype=g.prototype;function D(I,nt,pt){this.props=I,this.context=nt,this.refs=S,this.updater=pt||E}var R=D.prototype=new T;R.constructor=D,b(R,g.prototype),R.isPureReactComponent=!0;var H=Array.isArray;function O(){}var L={H:null,A:null,T:null,S:null},z=Object.prototype.hasOwnProperty;function C(I,nt,pt){var K=pt.ref;return{$$typeof:s,type:I,key:nt,ref:K!==void 0?K:null,props:pt}}function w(I,nt){return C(I.type,nt,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function $(I){var nt={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(pt){return nt[pt]})}var Y=/\/+/g;function et(I,nt){return typeof I=="object"&&I!==null&&I.key!=null?$(""+I.key):nt.toString(36)}function lt(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(O,O):(I.status="pending",I.then(function(nt){I.status==="pending"&&(I.status="fulfilled",I.value=nt)},function(nt){I.status==="pending"&&(I.status="rejected",I.reason=nt)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function B(I,nt,pt,K,dt){var bt=typeof I;(bt==="undefined"||bt==="boolean")&&(I=null);var yt=!1;if(I===null)yt=!0;else switch(bt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(I.$$typeof){case s:case t:yt=!0;break;case v:return yt=I._init,B(yt(I._payload),nt,pt,K,dt)}}if(yt)return dt=dt(I),yt=K===""?"."+et(I,0):K,H(dt)?(pt="",yt!=null&&(pt=yt.replace(Y,"$&/")+"/"),B(dt,nt,pt,"",function(Vt){return Vt})):dt!=null&&(G(dt)&&(dt=w(dt,pt+(dt.key==null||I&&I.key===dt.key?"":(""+dt.key).replace(Y,"$&/")+"/")+yt)),nt.push(dt)),1;yt=0;var Ut=K===""?".":K+":";if(H(I))for(var qt=0;qt<I.length;qt++)K=I[qt],bt=Ut+et(K,qt),yt+=B(K,nt,pt,bt,dt);else if(qt=x(I),typeof qt=="function")for(I=qt.call(I),qt=0;!(K=I.next()).done;)K=K.value,bt=Ut+et(K,qt++),yt+=B(K,nt,pt,bt,dt);else if(bt==="object"){if(typeof I.then=="function")return B(lt(I),nt,pt,K,dt);throw nt=String(I),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return yt}function Z(I,nt,pt){if(I==null)return I;var K=[],dt=0;return B(I,K,"","",function(bt){return nt.call(pt,bt,dt++)}),K}function j(I){if(I._status===-1){var nt=I._result;nt=nt(),nt.then(function(pt){(I._status===0||I._status===-1)&&(I._status=1,I._result=pt)},function(pt){(I._status===0||I._status===-1)&&(I._status=2,I._result=pt)}),I._status===-1&&(I._status=0,I._result=nt)}if(I._status===1)return I._result.default;throw I._result}var St=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Tt={map:Z,forEach:function(I,nt,pt){Z(I,function(){nt.apply(this,arguments)},pt)},count:function(I){var nt=0;return Z(I,function(){nt++}),nt},toArray:function(I){return Z(I,function(nt){return nt})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return fe.Activity=_,fe.Children=Tt,fe.Component=g,fe.Fragment=i,fe.Profiler=l,fe.PureComponent=D,fe.StrictMode=r,fe.Suspense=p,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,fe.__COMPILER_RUNTIME={__proto__:null,c:function(I){return L.H.useMemoCache(I)}},fe.cache=function(I){return function(){return I.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(I,nt,pt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var K=b({},I.props),dt=I.key;if(nt!=null)for(bt in nt.key!==void 0&&(dt=""+nt.key),nt)!z.call(nt,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&nt.ref===void 0||(K[bt]=nt[bt]);var bt=arguments.length-2;if(bt===1)K.children=pt;else if(1<bt){for(var yt=Array(bt),Ut=0;Ut<bt;Ut++)yt[Ut]=arguments[Ut+2];K.children=yt}return C(I.type,dt,K)},fe.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},fe.createElement=function(I,nt,pt){var K,dt={},bt=null;if(nt!=null)for(K in nt.key!==void 0&&(bt=""+nt.key),nt)z.call(nt,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(dt[K]=nt[K]);var yt=arguments.length-2;if(yt===1)dt.children=pt;else if(1<yt){for(var Ut=Array(yt),qt=0;qt<yt;qt++)Ut[qt]=arguments[qt+2];dt.children=Ut}if(I&&I.defaultProps)for(K in yt=I.defaultProps,yt)dt[K]===void 0&&(dt[K]=yt[K]);return C(I,bt,dt)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(I){return{$$typeof:h,render:I}},fe.isValidElement=G,fe.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:j}},fe.memo=function(I,nt){return{$$typeof:m,type:I,compare:nt===void 0?null:nt}},fe.startTransition=function(I){var nt=L.T,pt={};L.T=pt;try{var K=I(),dt=L.S;dt!==null&&dt(pt,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(O,St)}catch(bt){St(bt)}finally{nt!==null&&pt.types!==null&&(nt.types=pt.types),L.T=nt}},fe.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},fe.use=function(I){return L.H.use(I)},fe.useActionState=function(I,nt,pt){return L.H.useActionState(I,nt,pt)},fe.useCallback=function(I,nt){return L.H.useCallback(I,nt)},fe.useContext=function(I){return L.H.useContext(I)},fe.useDebugValue=function(){},fe.useDeferredValue=function(I,nt){return L.H.useDeferredValue(I,nt)},fe.useEffect=function(I,nt){return L.H.useEffect(I,nt)},fe.useEffectEvent=function(I){return L.H.useEffectEvent(I)},fe.useId=function(){return L.H.useId()},fe.useImperativeHandle=function(I,nt,pt){return L.H.useImperativeHandle(I,nt,pt)},fe.useInsertionEffect=function(I,nt){return L.H.useInsertionEffect(I,nt)},fe.useLayoutEffect=function(I,nt){return L.H.useLayoutEffect(I,nt)},fe.useMemo=function(I,nt){return L.H.useMemo(I,nt)},fe.useOptimistic=function(I,nt){return L.H.useOptimistic(I,nt)},fe.useReducer=function(I,nt,pt){return L.H.useReducer(I,nt,pt)},fe.useRef=function(I){return L.H.useRef(I)},fe.useState=function(I){return L.H.useState(I)},fe.useSyncExternalStore=function(I,nt,pt){return L.H.useSyncExternalStore(I,nt,pt)},fe.useTransition=function(){return L.H.useTransition()},fe.version="19.2.7",fe}var b_;function pp(){return b_||(b_=1,Ld.exports=BM()),Ld.exports}var Ce=pp();const P=IM(Ce);var Nd={exports:{}},zo={},Od={exports:{}},Pd={};var T_;function FM(){return T_||(T_=1,(function(s){function t(B,Z){var j=B.length;B.push(Z);t:for(;0<j;){var St=j-1>>>1,Tt=B[St];if(0<l(Tt,Z))B[St]=Z,B[j]=Tt,j=St;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Z=B[0],j=B.pop();if(j!==Z){B[0]=j;t:for(var St=0,Tt=B.length,I=Tt>>>1;St<I;){var nt=2*(St+1)-1,pt=B[nt],K=nt+1,dt=B[K];if(0>l(pt,j))K<Tt&&0>l(dt,pt)?(B[St]=dt,B[K]=j,St=K):(B[St]=pt,B[nt]=j,St=nt);else if(K<Tt&&0>l(dt,j))B[St]=dt,B[K]=j,St=K;else break t}}return Z}function l(B,Z){var j=B.sortIndex-Z.sortIndex;return j!==0?j:B.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var p=[],m=[],v=1,_=null,y=3,x=!1,E=!1,b=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function R(B){for(var Z=i(m);Z!==null;){if(Z.callback===null)r(m);else if(Z.startTime<=B)r(m),Z.sortIndex=Z.expirationTime,t(p,Z);else break;Z=i(m)}}function H(B){if(b=!1,R(B),!E)if(i(p)!==null)E=!0,O||(O=!0,$());else{var Z=i(m);Z!==null&&lt(H,Z.startTime-B)}}var O=!1,L=-1,z=5,C=-1;function w(){return S?!0:!(s.unstable_now()-C<z)}function G(){if(S=!1,O){var B=s.unstable_now();C=B;var Z=!0;try{t:{E=!1,b&&(b=!1,T(L),L=-1),x=!0;var j=y;try{e:{for(R(B),_=i(p);_!==null&&!(_.expirationTime>B&&w());){var St=_.callback;if(typeof St=="function"){_.callback=null,y=_.priorityLevel;var Tt=St(_.expirationTime<=B);if(B=s.unstable_now(),typeof Tt=="function"){_.callback=Tt,R(B),Z=!0;break e}_===i(p)&&r(p),R(B)}else r(p);_=i(p)}if(_!==null)Z=!0;else{var I=i(m);I!==null&&lt(H,I.startTime-B),Z=!1}}break t}finally{_=null,y=j,x=!1}Z=void 0}}finally{Z?$():O=!1}}}var $;if(typeof D=="function")$=function(){D(G)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,et=Y.port2;Y.port1.onmessage=G,$=function(){et.postMessage(null)}}else $=function(){g(G,0)};function lt(B,Z){L=g(function(){B(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(B){switch(y){case 1:case 2:case 3:var Z=3;break;default:Z=y}var j=y;y=Z;try{return B()}finally{y=j}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var j=y;y=B;try{return Z()}finally{y=j}},s.unstable_scheduleCallback=function(B,Z,j){var St=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?St+j:St):j=St,B){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=j+Tt,B={id:v++,callback:Z,priorityLevel:B,startTime:j,expirationTime:Tt,sortIndex:-1},j>St?(B.sortIndex=j,t(m,B),i(p)===null&&B===i(m)&&(b?(T(L),L=-1):b=!0,lt(H,j-St))):(B.sortIndex=Tt,t(p,B),E||x||(E=!0,O||(O=!0,$()))),B},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(B){var Z=y;return function(){var j=y;y=Z;try{return B.apply(this,arguments)}finally{y=j}}}})(Pd)),Pd}var A_;function HM(){return A_||(A_=1,Od.exports=FM()),Od.exports}var zd={exports:{}},Nn={};var R_;function GM(){if(R_)return Nn;R_=1;var s=pp();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:v}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(p,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,v)},Nn.flushSync=function(p){var m=f.T,v=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=m,r.p=v,r.d.f()}},Nn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Nn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Nn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var v=m.as,_=h(v,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,x=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:x}):v==="script"&&r.d.X(p,{crossOrigin:_,integrity:y,fetchPriority:x,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Nn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Nn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,_=h(v,m.crossOrigin);r.d.L(p,v,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Nn.preloadModule=function(p,m){if(typeof p=="string")if(m){var v=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Nn.requestFormReset=function(p){r.d.r(p)},Nn.unstable_batchedUpdates=function(p,m){return p(m)},Nn.useFormState=function(p,m,v){return f.H.useFormState(p,m,v)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.2.7",Nn}var w_;function VM(){if(w_)return zd.exports;w_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),zd.exports=GM(),zd.exports}var C_;function kM(){if(C_)return zo;C_=1;var s=HM(),t=pp(),i=VM();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return p(u),e;if(d===o)return p(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var M=!1,U=u.child;U;){if(U===a){M=!0,a=u,o=d;break}if(U===o){M=!0,o=u,a=d;break}U=U.sibling}if(!M){for(U=d.child;U;){if(U===a){M=!0,a=d,o=u;break}if(U===o){M=!0,o=d,a=u;break}U=U.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),D=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Symbol.for("react.client.reference");function et(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Y?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case g:return"Profiler";case S:return"StrictMode";case H:return"Suspense";case O:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case D:return e.displayName||"Context";case T:return(e._context.displayName||"Context")+".Consumer";case R:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return n=e.displayName||null,n!==null?n:et(e.type)||"Memo";case z:n=e._payload,e=e._init;try{return et(e(n))}catch{}}return null}var lt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},St=[],Tt=-1;function I(e){return{current:e}}function nt(e){0>Tt||(e.current=St[Tt],St[Tt]=null,Tt--)}function pt(e,n){Tt++,St[Tt]=e.current,e.current=n}var K=I(null),dt=I(null),bt=I(null),yt=I(null);function Ut(e,n){switch(pt(bt,n),pt(dt,e),pt(K,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?q0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=q0(n),e=Y0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(K),pt(K,e)}function qt(){nt(K),nt(dt),nt(bt)}function Vt(e){e.memoizedState!==null&&pt(yt,e);var n=K.current,a=Y0(n,e.type);n!==a&&(pt(dt,e),pt(K,a))}function Jt(e){dt.current===e&&(nt(K),nt(dt)),yt.current===e&&(nt(yt),Lo._currentValue=j)}var Lt,Kt;function V(e){if(Lt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Lt=n&&n[1]||"",Kt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lt+e+Kt}var ye=!1;function re(e,n){if(!e||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ft){var ot=ft}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ft){ot=ft}e.call(xt.prototype)}}else{try{throw Error()}catch(ft){ot=ft}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ft){if(ft&&ot&&typeof ft.stack=="string")return[ft.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],U=d[1];if(M&&U){var k=M.split(`
`),rt=U.split(`
`);for(u=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;u<rt.length&&!rt[u].includes("DetermineComponentFrameRoot");)u++;if(o===k.length||u===rt.length)for(o=k.length-1,u=rt.length-1;1<=o&&0<=u&&k[o]!==rt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(k[o]!==rt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||k[o]!==rt[u]){var mt=`
`+k[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?V(a):""}function he(e,n){switch(e.tag){case 26:case 27:case 5:return V(e.type);case 16:return V("Lazy");case 13:return e.child!==n&&n!==null?V("Suspense Fallback"):V("Suspense");case 19:return V("SuspenseList");case 0:case 15:return re(e.type,!1);case 11:return re(e.type.render,!1);case 1:return re(e.type,!0);case 31:return V("Activity");default:return""}}function Ht(e){try{var n="",a=null;do n+=he(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var se=Object.prototype.hasOwnProperty,Yt=s.unstable_scheduleCallback,ie=s.unstable_cancelCallback,Fe=s.unstable_shouldYield,F=s.unstable_requestPaint,A=s.unstable_now,at=s.unstable_getCurrentPriorityLevel,_t=s.unstable_ImmediatePriority,Et=s.unstable_UserBlockingPriority,ht=s.unstable_NormalPriority,jt=s.unstable_LowPriority,Ot=s.unstable_IdlePriority,st=s.log,Ct=s.unstable_setDisableYieldValue,gt=null,wt=null;function kt(e){if(typeof st=="function"&&Ct(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(gt,e)}catch{}}var Pt=Math.clz32?Math.clz32:X,Nt=Math.log,$t=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Nt(e)/$t|0)|0}var zt=256,At=262144,Gt=4194304;function Rt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var U=o&134217727;return U!==0?(o=U&~d,o!==0?u=Rt(o):(M&=U,M!==0?u=Rt(M):a||(a=U&~e,a!==0&&(u=Rt(a))))):(U=o&~d,U!==0?u=Rt(U):M!==0?u=Rt(M):a||(a=o&~e,a!==0&&(u=Rt(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Xt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function oe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=Gt;return Gt<<=1,(Gt&62914560)===0&&(Gt=4194304),e}function De(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function En(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yi(e,n,a,o,u,d){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var U=e.entanglements,k=e.expirationTimes,rt=e.hiddenUpdates;for(a=M&~a;0<a;){var mt=31-Pt(a),xt=1<<mt;U[mt]=0,k[mt]=-1;var ot=rt[mt];if(ot!==null)for(rt[mt]=null,mt=0;mt<ot.length;mt++){var ft=ot[mt];ft!==null&&(ft.lane&=-536870913)}a&=~xt}o!==0&&ks(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~n))}function ks(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Xs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ni(e,n){var a=n&-n;return a=(a&42)!==0?1:tr(a),(a&(e.suspendedLanes|n))!==0?0:a}function tr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Or(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ws(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:g_(e.type))}function er(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var Si=Math.random().toString(36).slice(2),an="__reactFiber$"+Si,bn="__reactProps$"+Si,Xi="__reactContainer$"+Si,qs="__reactEvents$"+Si,Tu="__reactListeners$"+Si,Au="__reactHandles$"+Si,fl="__reactResources$"+Si,nr="__reactMarker$"+Si;function Ys(e){delete e[an],delete e[bn],delete e[qs],delete e[Tu],delete e[Au]}function N(e){var n=e[an];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Xi]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=t_(e);e!==null;){if(a=e[an])return a;e=t_(e)}return n}e=a,a=e.parentNode}return null}function J(e){if(e=e[an]||e[Xi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ct(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ut(e){var n=e[fl];return n||(n=e[fl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(e){e[nr]=!0}var Dt=new Set,It={};function Wt(e,n){Ft(e,n),Ft(e+"Capture",n)}function Ft(e,n){for(It[e]=n,e=0;e<n.length;e++)Dt.add(n[e])}var le=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ce={},te={};function Se(e){return se.call(te,e)?!0:se.call(ce,e)?!1:le.test(e)?te[e]=!0:(ce[e]=!0,!1)}function Ue(e,n,a){if(Se(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ye(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Re(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ge(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ne(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){a=""+M,d.call(this,M)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function be(e){if(!e._valueTracker){var n=ne(e)?"checked":"value";e._valueTracker=Ke(e,n,""+e[n])}}function Un(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ne(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zn=/[\n"\\]/g;function Sn(e){return e.replace(zn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function He(e,n,a,o,u,d,M,U){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ge(n)):e.value!==""+ge(n)&&(e.value=""+ge(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Ln(e,M,ge(n)):a!=null?Ln(e,M,ge(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?e.name=""+ge(U):e.removeAttribute("name")}function In(e,n,a,o,u,d,M,U){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){be(e);return}a=a!=null?""+ge(a):"",n=n!=null?""+ge(n):a,U||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=U?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),be(e)}function Ln(e,n,a){n==="number"&&Mi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function rn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ge(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Tn(e,n,a){if(n!=null&&(n=""+ge(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ge(a):""}function Pr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(lt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ge(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),be(e)}function Xn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ly=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ly.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Xp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&kp(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&kp(e,d,n[d])}function Ru(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ny=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Oy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(e){return Oy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var wu=null;function Cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zr=null,Ir=null;function Wp(e){var n=J(e);if(n&&(e=n.stateNode)){var a=e[bn]||null;t:switch(e=n.stateNode,n.type){case"input":if(He(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Sn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[bn]||null;if(!u)throw Error(r(90));He(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Un(o)}break t;case"textarea":Tn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rn(e,!!a.multiple,n,!1)}}}var Du=!1;function qp(e,n,a){if(Du)return e(n,a);Du=!0;try{var o=e(n);return o}finally{if(Du=!1,(zr!==null||Ir!==null)&&($l(),zr&&(n=zr,e=Ir,Ir=zr=null,Wp(n),e)))for(n=0;n<e.length;n++)Wp(e[n])}}function js(e,n){var a=e.stateNode;if(a===null)return null;var o=a[bn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=!1;if(qi)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{Uu=!1}var _a=null,Lu=null,hl=null;function Yp(){if(hl)return hl;var e,n=Lu,a=n.length,o,u="value"in _a?_a.value:_a.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[d-o];o++);return hl=u.slice(e,1<o?1-o:void 0)}function pl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ml(){return!0}function jp(){return!1}function Wn(e){function n(a,o,u,d,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var U in e)e.hasOwnProperty(U)&&(a=e[U],this[U]=a?a(d):d[U]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ml:jp,this.isPropagationStopped=jp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),n}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=Wn(ir),Ks=_({},ir,{view:0,detail:0}),Py=Wn(Ks),Nu,Ou,Qs,_l=_({},Ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qs&&(Qs&&e.type==="mousemove"?(Nu=e.screenX-Qs.screenX,Ou=e.screenY-Qs.screenY):Ou=Nu=0,Qs=e),Nu)},movementY:function(e){return"movementY"in e?e.movementY:Ou}}),Zp=Wn(_l),zy=_({},_l,{dataTransfer:0}),Iy=Wn(zy),By=_({},Ks,{relatedTarget:0}),Pu=Wn(By),Fy=_({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),Hy=Wn(Fy),Gy=_({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vy=Wn(Gy),ky=_({},ir,{data:0}),Kp=Wn(ky),Xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=qy[e])?!!n[e]:!1}function zu(){return Yy}var jy=_({},Ks,{key:function(e){if(e.key){var n=Xy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zu,charCode:function(e){return e.type==="keypress"?pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zy=Wn(jy),Ky=_({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qp=Wn(Ky),Qy=_({},Ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zu}),Jy=Wn(Qy),$y=_({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),tS=Wn($y),eS=_({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nS=Wn(eS),iS=_({},ir,{newState:0,oldState:0}),aS=Wn(iS),rS=[9,13,27,32],Iu=qi&&"CompositionEvent"in window,Js=null;qi&&"documentMode"in document&&(Js=document.documentMode);var sS=qi&&"TextEvent"in window&&!Js,Jp=qi&&(!Iu||Js&&8<Js&&11>=Js),$p=" ",tm=!1;function em(e,n){switch(e){case"keyup":return rS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function oS(e,n){switch(e){case"compositionend":return nm(n);case"keypress":return n.which!==32?null:(tm=!0,$p);case"textInput":return e=n.data,e===$p&&tm?null:e;default:return null}}function lS(e,n){if(Br)return e==="compositionend"||!Iu&&em(e,n)?(e=Yp(),hl=Lu=_a=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jp&&n.locale!=="ko"?null:n.data;default:return null}}var cS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function im(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!cS[e.type]:n==="textarea"}function am(e,n,a,o){zr?Ir?Ir.push(o):Ir=[o]:zr=o,n=sc(n,"onChange"),0<n.length&&(a=new gl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var $s=null,to=null;function uS(e){H0(e,0)}function vl(e){var n=ct(e);if(Un(n))return e}function rm(e,n){if(e==="change")return n}var sm=!1;if(qi){var Bu;if(qi){var Fu="oninput"in document;if(!Fu){var om=document.createElement("div");om.setAttribute("oninput","return;"),Fu=typeof om.oninput=="function"}Bu=Fu}else Bu=!1;sm=Bu&&(!document.documentMode||9<document.documentMode)}function lm(){$s&&($s.detachEvent("onpropertychange",cm),to=$s=null)}function cm(e){if(e.propertyName==="value"&&vl(to)){var n=[];am(n,to,e,Cu(e)),qp(uS,n)}}function fS(e,n,a){e==="focusin"?(lm(),$s=n,to=a,$s.attachEvent("onpropertychange",cm)):e==="focusout"&&lm()}function dS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(to)}function hS(e,n){if(e==="click")return vl(n)}function pS(e,n){if(e==="input"||e==="change")return vl(n)}function mS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jn=typeof Object.is=="function"?Object.is:mS;function eo(e,n){if(Jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!se.call(n,u)||!Jn(e[u],n[u]))return!1}return!0}function um(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fm(e,n){var a=um(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=um(a)}}function dm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?dm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function hm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Mi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Mi(e.document)}return n}function Hu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var gS=qi&&"documentMode"in document&&11>=document.documentMode,Fr=null,Gu=null,no=null,Vu=!1;function pm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vu||Fr==null||Fr!==Mi(o)||(o=Fr,"selectionStart"in o&&Hu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),no&&eo(no,o)||(no=o,o=sc(Gu,"onSelect"),0<o.length&&(n=new gl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Fr)))}function ar(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Hr={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionrun:ar("Transition","TransitionRun"),transitionstart:ar("Transition","TransitionStart"),transitioncancel:ar("Transition","TransitionCancel"),transitionend:ar("Transition","TransitionEnd")},ku={},mm={};qi&&(mm=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function rr(e){if(ku[e])return ku[e];if(!Hr[e])return e;var n=Hr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in mm)return ku[e]=n[a];return e}var gm=rr("animationend"),_m=rr("animationiteration"),vm=rr("animationstart"),_S=rr("transitionrun"),vS=rr("transitionstart"),yS=rr("transitioncancel"),ym=rr("transitionend"),Sm=new Map,Xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xu.push("scrollEnd");function xi(e,n){Sm.set(e,n),Wt(n,[e])}var yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],Gr=0,Wu=0;function Sl(){for(var e=Gr,n=Wu=Gr=0;n<e;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var d=ui[n];if(ui[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}d!==0&&Mm(a,u,d)}}function Ml(e,n,a,o){ui[Gr++]=e,ui[Gr++]=n,ui[Gr++]=a,ui[Gr++]=o,Wu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function qu(e,n,a,o){return Ml(e,n,a,o),xl(e)}function sr(e,n){return Ml(e,null,null,n),xl(e)}function Mm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function xl(e){if(50<To)throw To=0,nd=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Vr={};function SS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,o){return new SS(e,n,a,o)}function Yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yi(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function xm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function El(e,n,a,o,u,d){var M=0;if(o=e,typeof e=="function")Yu(e)&&(M=1);else if(typeof e=="string")M=TM(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=$n(31,a,n,u),e.elementType=C,e.lanes=d,e;case b:return or(a.children,u,d,n);case S:M=8,u|=24;break;case g:return e=$n(12,a,n,u|2),e.elementType=g,e.lanes=d,e;case H:return e=$n(13,a,n,u),e.elementType=H,e.lanes=d,e;case O:return e=$n(19,a,n,u),e.elementType=O,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:M=10;break t;case T:M=9;break t;case R:M=11;break t;case L:M=14;break t;case z:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=$n(M,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function or(e,n,a,o){return e=$n(7,e,o,n),e.lanes=a,e}function ju(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function Em(e){var n=$n(18,null,null,0);return n.stateNode=e,n}function Zu(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var bm=new WeakMap;function fi(e,n){if(typeof e=="object"&&e!==null){var a=bm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ht(n)},bm.set(e,n),n)}return{value:e,source:n,stack:Ht(n)}}var kr=[],Xr=0,bl=null,io=0,di=[],hi=0,va=null,Oi=1,Pi="";function ji(e,n){kr[Xr++]=io,kr[Xr++]=bl,bl=e,io=n}function Tm(e,n,a){di[hi++]=Oi,di[hi++]=Pi,di[hi++]=va,va=e;var o=Oi;e=Pi;var u=32-Pt(o)-1;o&=~(1<<u),a+=1;var d=32-Pt(n)+u;if(30<d){var M=u-u%5;d=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Oi=1<<32-Pt(n)+u|a<<u|o,Pi=d+e}else Oi=1<<d|a<<u|o,Pi=e}function Ku(e){e.return!==null&&(ji(e,1),Tm(e,1,0))}function Qu(e){for(;e===bl;)bl=kr[--Xr],kr[Xr]=null,io=kr[--Xr],kr[Xr]=null;for(;e===va;)va=di[--hi],di[hi]=null,Pi=di[--hi],di[hi]=null,Oi=di[--hi],di[hi]=null}function Am(e,n){di[hi++]=Oi,di[hi++]=Pi,di[hi++]=va,Oi=n.id,Pi=n.overflow,va=e}var An=null,Qe=null,we=!1,ya=null,pi=!1,Ju=Error(r(519));function Sa(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(fi(n,e)),Ju}function Rm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[an]=e,n[bn]=o,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Ro.length;a++)Ee(Ro[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),In(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),Pr(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||X0(n.textContent,a)?(o.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),o.onScroll!=null&&Ee("scroll",n),o.onScrollEnd!=null&&Ee("scrollend",n),o.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Sa(e,!0)}function wm(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:An=An.return}}function Wr(e){if(e!==An)return!1;if(!we)return wm(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||_d(e.type,e.memoizedProps)),a=!a),a&&Qe&&Sa(e),wm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Qe=$0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Qe=$0(e)}else n===27?(n=Qe,Oa(e.type)?(e=xd,xd=null,Qe=e):Qe=n):Qe=An?gi(e.stateNode.nextSibling):null;return!0}function lr(){Qe=An=null,we=!1}function $u(){var e=ya;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),ya=null),e}function ao(e){ya===null?ya=[e]:ya.push(e)}var tf=I(null),cr=null,Zi=null;function Ma(e,n,a){pt(tf,n._currentValue),n._currentValue=a}function Ki(e){e._currentValue=tf.current,nt(tf)}function ef(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function nf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;t:for(;d!==null;){var U=d;d=u;for(var k=0;k<n.length;k++)if(U.context===n[k]){d.lanes|=a,U=d.alternate,U!==null&&(U.lanes|=a),ef(d.return,a,e),o||(M=null);break t}d=U.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,d=M.alternate,d!==null&&(d.lanes|=a),ef(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function qr(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var U=u.type;Jn(u.pendingProps.value,M.value)||(e!==null?e.push(U):e=[U])}}else if(u===yt.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}u=u.return}e!==null&&nf(n,e,a,o),n.flags|=262144}function Tl(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ur(e){cr=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Cm(cr,e)}function Al(e,n){return cr===null&&ur(e),Cm(e,n)}function Cm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Zi===null){if(e===null)throw Error(r(308));Zi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Zi=Zi.next=n;return a}var MS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},xS=s.unstable_scheduleCallback,ES=s.unstable_NormalPriority,fn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function af(){return{controller:new MS,data:new Map,refCount:0}}function ro(e){e.refCount--,e.refCount===0&&xS(ES,function(){e.controller.abort()})}var so=null,rf=0,Yr=0,jr=null;function bS(e,n){if(so===null){var a=so=[];rf=0,Yr=ld(),jr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return rf++,n.then(Dm,Dm),n}function Dm(){if(--rf===0&&so!==null){jr!==null&&(jr.status="fulfilled");var e=so;so=null,Yr=0,jr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function TS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Um=B.S;B.S=function(e,n){p0=A(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&bS(e,n),Um!==null&&Um(e,n)};var fr=I(null);function sf(){var e=fr.current;return e!==null?e:je.pooledCache}function Rl(e,n){n===null?pt(fr,fr.current):pt(fr,n.pool)}function Lm(){var e=sf();return e===null?null:{parent:fn._currentValue,pool:e}}var Zr=Error(r(460)),of=Error(r(474)),wl=Error(r(542)),Cl={then:function(){}};function Nm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Om(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,zm(e),e;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,zm(e),e}throw hr=n,Zr}}function dr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hr=a,Zr):a}}var hr=null;function Pm(){if(hr===null)throw Error(r(459));var e=hr;return hr=null,e}function zm(e){if(e===Zr||e===wl)throw Error(r(483))}var Kr=null,oo=0;function Dl(e){var n=oo;return oo+=1,Kr===null&&(Kr=[]),Om(Kr,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ul(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Im(e){function n(tt,q){if(e){var it=tt.deletions;it===null?(tt.deletions=[q],tt.flags|=16):it.push(q)}}function a(tt,q){if(!e)return null;for(;q!==null;)n(tt,q),q=q.sibling;return null}function o(tt){for(var q=new Map;tt!==null;)tt.key!==null?q.set(tt.key,tt):q.set(tt.index,tt),tt=tt.sibling;return q}function u(tt,q){return tt=Yi(tt,q),tt.index=0,tt.sibling=null,tt}function d(tt,q,it){return tt.index=it,e?(it=tt.alternate,it!==null?(it=it.index,it<q?(tt.flags|=67108866,q):it):(tt.flags|=67108866,q)):(tt.flags|=1048576,q)}function M(tt){return e&&tt.alternate===null&&(tt.flags|=67108866),tt}function U(tt,q,it,vt){return q===null||q.tag!==6?(q=ju(it,tt.mode,vt),q.return=tt,q):(q=u(q,it),q.return=tt,q)}function k(tt,q,it,vt){var ee=it.type;return ee===b?mt(tt,q,it.props.children,vt,it.key):q!==null&&(q.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===z&&dr(ee)===q.type)?(q=u(q,it.props),lo(q,it),q.return=tt,q):(q=El(it.type,it.key,it.props,null,tt.mode,vt),lo(q,it),q.return=tt,q)}function rt(tt,q,it,vt){return q===null||q.tag!==4||q.stateNode.containerInfo!==it.containerInfo||q.stateNode.implementation!==it.implementation?(q=Zu(it,tt.mode,vt),q.return=tt,q):(q=u(q,it.children||[]),q.return=tt,q)}function mt(tt,q,it,vt,ee){return q===null||q.tag!==7?(q=or(it,tt.mode,vt,ee),q.return=tt,q):(q=u(q,it),q.return=tt,q)}function xt(tt,q,it){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=ju(""+q,tt.mode,it),q.return=tt,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case x:return it=El(q.type,q.key,q.props,null,tt.mode,it),lo(it,q),it.return=tt,it;case E:return q=Zu(q,tt.mode,it),q.return=tt,q;case z:return q=dr(q),xt(tt,q,it)}if(lt(q)||$(q))return q=or(q,tt.mode,it,null),q.return=tt,q;if(typeof q.then=="function")return xt(tt,Dl(q),it);if(q.$$typeof===D)return xt(tt,Al(tt,q),it);Ul(tt,q)}return null}function ot(tt,q,it,vt){var ee=q!==null?q.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return ee!==null?null:U(tt,q,""+it,vt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case x:return it.key===ee?k(tt,q,it,vt):null;case E:return it.key===ee?rt(tt,q,it,vt):null;case z:return it=dr(it),ot(tt,q,it,vt)}if(lt(it)||$(it))return ee!==null?null:mt(tt,q,it,vt,null);if(typeof it.then=="function")return ot(tt,q,Dl(it),vt);if(it.$$typeof===D)return ot(tt,q,Al(tt,it),vt);Ul(tt,it)}return null}function ft(tt,q,it,vt,ee){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return tt=tt.get(it)||null,U(q,tt,""+vt,ee);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case x:return tt=tt.get(vt.key===null?it:vt.key)||null,k(q,tt,vt,ee);case E:return tt=tt.get(vt.key===null?it:vt.key)||null,rt(q,tt,vt,ee);case z:return vt=dr(vt),ft(tt,q,it,vt,ee)}if(lt(vt)||$(vt))return tt=tt.get(it)||null,mt(q,tt,vt,ee,null);if(typeof vt.then=="function")return ft(tt,q,it,Dl(vt),ee);if(vt.$$typeof===D)return ft(tt,q,it,Al(q,vt),ee);Ul(q,vt)}return null}function Zt(tt,q,it,vt){for(var ee=null,Le=null,Qt=q,pe=q=0,Ae=null;Qt!==null&&pe<it.length;pe++){Qt.index>pe?(Ae=Qt,Qt=null):Ae=Qt.sibling;var Ne=ot(tt,Qt,it[pe],vt);if(Ne===null){Qt===null&&(Qt=Ae);break}e&&Qt&&Ne.alternate===null&&n(tt,Qt),q=d(Ne,q,pe),Le===null?ee=Ne:Le.sibling=Ne,Le=Ne,Qt=Ae}if(pe===it.length)return a(tt,Qt),we&&ji(tt,pe),ee;if(Qt===null){for(;pe<it.length;pe++)Qt=xt(tt,it[pe],vt),Qt!==null&&(q=d(Qt,q,pe),Le===null?ee=Qt:Le.sibling=Qt,Le=Qt);return we&&ji(tt,pe),ee}for(Qt=o(Qt);pe<it.length;pe++)Ae=ft(Qt,tt,pe,it[pe],vt),Ae!==null&&(e&&Ae.alternate!==null&&Qt.delete(Ae.key===null?pe:Ae.key),q=d(Ae,q,pe),Le===null?ee=Ae:Le.sibling=Ae,Le=Ae);return e&&Qt.forEach(function(Fa){return n(tt,Fa)}),we&&ji(tt,pe),ee}function ae(tt,q,it,vt){if(it==null)throw Error(r(151));for(var ee=null,Le=null,Qt=q,pe=q=0,Ae=null,Ne=it.next();Qt!==null&&!Ne.done;pe++,Ne=it.next()){Qt.index>pe?(Ae=Qt,Qt=null):Ae=Qt.sibling;var Fa=ot(tt,Qt,Ne.value,vt);if(Fa===null){Qt===null&&(Qt=Ae);break}e&&Qt&&Fa.alternate===null&&n(tt,Qt),q=d(Fa,q,pe),Le===null?ee=Fa:Le.sibling=Fa,Le=Fa,Qt=Ae}if(Ne.done)return a(tt,Qt),we&&ji(tt,pe),ee;if(Qt===null){for(;!Ne.done;pe++,Ne=it.next())Ne=xt(tt,Ne.value,vt),Ne!==null&&(q=d(Ne,q,pe),Le===null?ee=Ne:Le.sibling=Ne,Le=Ne);return we&&ji(tt,pe),ee}for(Qt=o(Qt);!Ne.done;pe++,Ne=it.next())Ne=ft(Qt,tt,pe,Ne.value,vt),Ne!==null&&(e&&Ne.alternate!==null&&Qt.delete(Ne.key===null?pe:Ne.key),q=d(Ne,q,pe),Le===null?ee=Ne:Le.sibling=Ne,Le=Ne);return e&&Qt.forEach(function(zM){return n(tt,zM)}),we&&ji(tt,pe),ee}function ke(tt,q,it,vt){if(typeof it=="object"&&it!==null&&it.type===b&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case x:t:{for(var ee=it.key;q!==null;){if(q.key===ee){if(ee=it.type,ee===b){if(q.tag===7){a(tt,q.sibling),vt=u(q,it.props.children),vt.return=tt,tt=vt;break t}}else if(q.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===z&&dr(ee)===q.type){a(tt,q.sibling),vt=u(q,it.props),lo(vt,it),vt.return=tt,tt=vt;break t}a(tt,q);break}else n(tt,q);q=q.sibling}it.type===b?(vt=or(it.props.children,tt.mode,vt,it.key),vt.return=tt,tt=vt):(vt=El(it.type,it.key,it.props,null,tt.mode,vt),lo(vt,it),vt.return=tt,tt=vt)}return M(tt);case E:t:{for(ee=it.key;q!==null;){if(q.key===ee)if(q.tag===4&&q.stateNode.containerInfo===it.containerInfo&&q.stateNode.implementation===it.implementation){a(tt,q.sibling),vt=u(q,it.children||[]),vt.return=tt,tt=vt;break t}else{a(tt,q);break}else n(tt,q);q=q.sibling}vt=Zu(it,tt.mode,vt),vt.return=tt,tt=vt}return M(tt);case z:return it=dr(it),ke(tt,q,it,vt)}if(lt(it))return Zt(tt,q,it,vt);if($(it)){if(ee=$(it),typeof ee!="function")throw Error(r(150));return it=ee.call(it),ae(tt,q,it,vt)}if(typeof it.then=="function")return ke(tt,q,Dl(it),vt);if(it.$$typeof===D)return ke(tt,q,Al(tt,it),vt);Ul(tt,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,q!==null&&q.tag===6?(a(tt,q.sibling),vt=u(q,it),vt.return=tt,tt=vt):(a(tt,q),vt=ju(it,tt.mode,vt),vt.return=tt,tt=vt),M(tt)):a(tt,q)}return function(tt,q,it,vt){try{oo=0;var ee=ke(tt,q,it,vt);return Kr=null,ee}catch(Qt){if(Qt===Zr||Qt===wl)throw Qt;var Le=$n(29,Qt,null,tt.mode);return Le.lanes=vt,Le.return=tt,Le}}}var pr=Im(!0),Bm=Im(!1),xa=!1;function lf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ba(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=xl(e),Mm(e,null,a),n}return Ml(e,o,n,a),xl(e)}function co(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xs(e,a)}}function uf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ff=!1;function uo(){if(ff){var e=jr;if(e!==null)throw e}}function fo(e,n,a,o){ff=!1;var u=e.updateQueue;xa=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,U=u.shared.pending;if(U!==null){u.shared.pending=null;var k=U,rt=k.next;k.next=null,M===null?d=rt:M.next=rt,M=k;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,U=mt.lastBaseUpdate,U!==M&&(U===null?mt.firstBaseUpdate=rt:U.next=rt,mt.lastBaseUpdate=k))}if(d!==null){var xt=u.baseState;M=0,mt=rt=k=null,U=d;do{var ot=U.lane&-536870913,ft=ot!==U.lane;if(ft?(Te&ot)===ot:(o&ot)===ot){ot!==0&&ot===Yr&&(ff=!0),mt!==null&&(mt=mt.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});t:{var Zt=e,ae=U;ot=n;var ke=a;switch(ae.tag){case 1:if(Zt=ae.payload,typeof Zt=="function"){xt=Zt.call(ke,xt,ot);break t}xt=Zt;break t;case 3:Zt.flags=Zt.flags&-65537|128;case 0:if(Zt=ae.payload,ot=typeof Zt=="function"?Zt.call(ke,xt,ot):Zt,ot==null)break t;xt=_({},xt,ot);break t;case 2:xa=!0}}ot=U.callback,ot!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[ot]:ft.push(ot))}else ft={lane:ot,tag:U.tag,payload:U.payload,callback:U.callback,next:null},mt===null?(rt=mt=ft,k=xt):mt=mt.next=ft,M|=ot;if(U=U.next,U===null){if(U=u.shared.pending,U===null)break;ft=U,U=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);mt===null&&(k=xt),u.baseState=k,u.firstBaseUpdate=rt,u.lastBaseUpdate=mt,d===null&&(u.shared.lanes=0),Ca|=M,e.lanes=M,e.memoizedState=xt}}function Fm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Hm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Fm(a[e],n)}var Qr=I(null),Ll=I(0);function Gm(e,n){e=ra,pt(Ll,e),pt(Qr,n),ra=e|n.baseLanes}function df(){pt(Ll,ra),pt(Qr,Qr.current)}function hf(){ra=Ll.current,nt(Qr),nt(Ll)}var ti=I(null),mi=null;function Ta(e){var n=e.alternate;pt(cn,cn.current&1),pt(ti,e),mi===null&&(n===null||Qr.current!==null||n.memoizedState!==null)&&(mi=e)}function pf(e){pt(cn,cn.current),pt(ti,e),mi===null&&(mi=e)}function Vm(e){e.tag===22?(pt(cn,cn.current),pt(ti,e),mi===null&&(mi=e)):Aa()}function Aa(){pt(cn,cn.current),pt(ti,ti.current)}function ei(e){nt(ti),mi===e&&(mi=null),nt(cn)}var cn=I(0);function Nl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Sd(a)||Md(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=0,de=null,Ge=null,dn=null,Ol=!1,Jr=!1,mr=!1,Pl=0,ho=0,$r=null,AS=0;function sn(){throw Error(r(321))}function mf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Jn(e[a],n[a]))return!1;return!0}function gf(e,n,a,o,u,d){return Qi=d,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?Tg:Uf,mr=!1,d=a(o,u),mr=!1,Jr&&(d=Xm(n,a,o,u)),km(e),d}function km(e){B.H=go;var n=Ge!==null&&Ge.next!==null;if(Qi=0,dn=Ge=de=null,Ol=!1,ho=0,$r=null,n)throw Error(r(300));e===null||hn||(e=e.dependencies,e!==null&&Tl(e)&&(hn=!0))}function Xm(e,n,a,o){de=e;var u=0;do{if(Jr&&($r=null),ho=0,Jr=!1,25<=u)throw Error(r(301));if(u+=1,dn=Ge=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=Ag,d=n(a,o)}while(Jr);return d}function RS(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?po(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(de.flags|=1024),n}function _f(){var e=Pl!==0;return Pl=0,e}function vf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function yf(e){if(Ol){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ol=!1}Qi=0,dn=Ge=de=null,Jr=!1,ho=Pl=0,$r=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?de.memoizedState=dn=e:dn=dn.next=e,dn}function un(){if(Ge===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=dn===null?de.memoizedState:dn.next;if(n!==null)dn=n,Ge=e;else{if(e===null)throw de.alternate===null?Error(r(467)):Error(r(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},dn===null?de.memoizedState=dn=e:dn=dn.next=e}return dn}function zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(e){var n=ho;return ho+=1,$r===null&&($r=[]),e=Om($r,e,n),n=de,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Tg:Uf),e}function Il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return po(e);if(e.$$typeof===D)return Rn(e)}throw Error(r(438,String(e)))}function Sf(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=zl(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function Ji(e,n){return typeof n=="function"?n(e):n}function Bl(e){var n=un();return Mf(n,Ge,e)}function Mf(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var U=M=null,k=null,rt=n,mt=!1;do{var xt=rt.lane&-536870913;if(xt!==rt.lane?(Te&xt)===xt:(Qi&xt)===xt){var ot=rt.revertLane;if(ot===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null}),xt===Yr&&(mt=!0);else if((Qi&ot)===ot){rt=rt.next,ot===Yr&&(mt=!0);continue}else xt={lane:0,revertLane:rt.revertLane,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},k===null?(U=k=xt,M=d):k=k.next=xt,de.lanes|=ot,Ca|=ot;xt=rt.action,mr&&a(d,xt),d=rt.hasEagerState?rt.eagerState:a(d,xt)}else ot={lane:xt,revertLane:rt.revertLane,gesture:rt.gesture,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},k===null?(U=k=ot,M=d):k=k.next=ot,de.lanes|=xt,Ca|=xt;rt=rt.next}while(rt!==null&&rt!==n);if(k===null?M=d:k.next=U,!Jn(d,e.memoizedState)&&(hn=!0,mt&&(a=jr,a!==null)))throw a;e.memoizedState=d,e.baseState=M,e.baseQueue=k,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function xf(e){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do d=e(d,M.action),M=M.next;while(M!==u);Jn(d,n.memoizedState)||(hn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Wm(e,n,a){var o=de,u=un(),d=we;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!Jn((Ge||u).memoizedState,a);if(M&&(u.memoizedState=a,hn=!0),u=u.queue,Tf(jm.bind(null,o,u,e),[e]),u.getSnapshot!==n||M||dn!==null&&dn.memoizedState.tag&1){if(o.flags|=2048,ts(9,{destroy:void 0},Ym.bind(null,o,u,a,n),null),je===null)throw Error(r(349));d||(Qi&127)!==0||qm(o,n,a)}return a}function qm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=zl(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Ym(e,n,a,o){n.value=a,n.getSnapshot=o,Zm(n)&&Km(e)}function jm(e,n,a){return a(function(){Zm(n)&&Km(e)})}function Zm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Jn(e,a)}catch{return!0}}function Km(e){var n=sr(e,2);n!==null&&Kn(n,e,2)}function Ef(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),mr){kt(!0);try{a()}finally{kt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},n}function Qm(e,n,a,o){return e.baseState=a,Mf(e,Ge,typeof o=="function"?o:Ji)}function wS(e,n,a,o,u){if(Gl(e))throw Error(r(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};B.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Jm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Jm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=B.T,M={};B.T=M;try{var U=a(u,o),k=B.S;k!==null&&k(M,U),$m(e,n,U)}catch(rt){bf(e,n,rt)}finally{d!==null&&M.types!==null&&(d.types=M.types),B.T=d}}else try{d=a(u,o),$m(e,n,d)}catch(rt){bf(e,n,rt)}}function $m(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){tg(e,n,o)},function(o){return bf(e,n,o)}):tg(e,n,a)}function tg(e,n,a){n.status="fulfilled",n.value=a,eg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Jm(e,a)))}function bf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,eg(n),n=n.next;while(n!==o)}e.action=null}function eg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ng(e,n){return n}function ig(e,n){if(we){var a=je.formState;if(a!==null){t:{var o=de;if(we){if(Qe){e:{for(var u=Qe,d=pi;u.nodeType!==8;){if(!d){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Qe=gi(u.nextSibling),o=u.data==="F!";break t}}Sa(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ng,lastRenderedState:n},a.queue=o,a=xg.bind(null,de,o),o.dispatch=a,o=Ef(!1),d=Df.bind(null,de,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=wS.bind(null,de,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function ag(e){var n=un();return rg(n,Ge,e)}function rg(e,n,a){if(n=Mf(e,n,ng)[0],e=Bl(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=po(n)}catch(M){throw M===Zr?wl:M}else o=n;n=un();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,ts(9,{destroy:void 0},CS.bind(null,u,a),null)),[o,d,e]}function CS(e,n){e.action=n}function sg(e){var n=un(),a=Ge;if(a!==null)return rg(n,a,e);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ts(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=de.updateQueue,n===null&&(n=zl(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function og(){return un().memoizedState}function Fl(e,n,a,o){var u=Bn();de.flags|=e,u.memoizedState=ts(1|n,{destroy:void 0},a,o===void 0?null:o)}function Hl(e,n,a,o){var u=un();o=o===void 0?null:o;var d=u.memoizedState.inst;Ge!==null&&o!==null&&mf(o,Ge.memoizedState.deps)?u.memoizedState=ts(n,d,a,o):(de.flags|=e,u.memoizedState=ts(1|n,d,a,o))}function lg(e,n){Fl(8390656,8,e,n)}function Tf(e,n){Hl(2048,8,e,n)}function DS(e){de.flags|=4;var n=de.updateQueue;if(n===null)n=zl(),de.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function cg(e){var n=un().memoizedState;return DS({ref:n,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function ug(e,n){return Hl(4,2,e,n)}function fg(e,n){return Hl(4,4,e,n)}function dg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function hg(e,n,a){a=a!=null?a.concat([e]):null,Hl(4,4,dg.bind(null,n,e),a)}function Af(){}function pg(e,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&mf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function mg(e,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&mf(n,o[1]))return o[0];if(o=e(),mr){kt(!0);try{e()}finally{kt(!1)}}return a.memoizedState=[o,n],o}function Rf(e,n,a){return a===void 0||(Qi&1073741824)!==0&&(Te&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=g0(),de.lanes|=e,Ca|=e,a)}function gg(e,n,a,o){return Jn(a,n)?a:Qr.current!==null?(e=Rf(e,a,o),Jn(e,n)||(hn=!0),e):(Qi&42)===0||(Qi&1073741824)!==0&&(Te&261930)===0?(hn=!0,e.memoizedState=a):(e=g0(),de.lanes|=e,Ca|=e,n)}function _g(e,n,a,o,u){var d=Z.p;Z.p=d!==0&&8>d?d:8;var M=B.T,U={};B.T=U,Df(e,!1,n,a);try{var k=u(),rt=B.S;if(rt!==null&&rt(U,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var mt=TS(k,o);mo(e,n,mt,ai(e))}else mo(e,n,o,ai(e))}catch(xt){mo(e,n,{then:function(){},status:"rejected",reason:xt},ai())}finally{Z.p=d,M!==null&&U.types!==null&&(M.types=U.types),B.T=M}}function US(){}function wf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=vg(e).queue;_g(e,u,n,j,a===null?US:function(){return yg(e),a(o)})}function vg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function yg(e){var n=vg(e);n.next===null&&(n=e.alternate.memoizedState),mo(e,n.next.queue,{},ai())}function Cf(){return Rn(Lo)}function Sg(){return un().memoizedState}function Mg(){return un().memoizedState}function LS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();e=Ea(a);var o=ba(n,e,a);o!==null&&(Kn(o,n,a),co(o,n,a)),n={cache:af()},e.payload=n;return}n=n.return}}function NS(e,n,a){var o=ai();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(e)?Eg(n,a):(a=qu(e,n,a,o),a!==null&&(Kn(a,e,o),bg(a,n,o)))}function xg(e,n,a){var o=ai();mo(e,n,a,o)}function mo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(e))Eg(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var M=n.lastRenderedState,U=d(M,a);if(u.hasEagerState=!0,u.eagerState=U,Jn(U,M))return Ml(e,n,u,0),je===null&&Sl(),!1}catch{}if(a=qu(e,n,u,o),a!==null)return Kn(a,e,o),bg(a,n,o),!0}return!1}function Df(e,n,a,o){if(o={lane:2,revertLane:ld(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Gl(e)){if(n)throw Error(r(479))}else n=qu(e,a,o,2),n!==null&&Kn(n,e,2)}function Gl(e){var n=e.alternate;return e===de||n!==null&&n===de}function Eg(e,n){Jr=Ol=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function bg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xs(e,a)}}var go={readContext:Rn,use:Il,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};go.useEffectEvent=sn;var Tg={readContext:Rn,use:Il,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:lg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Fl(4194308,4,dg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Fl(4194308,4,e,n)},useInsertionEffect:function(e,n){Fl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(mr){kt(!0);try{e()}finally{kt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(mr){kt(!0);try{a(n)}finally{kt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=NS.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ef(e);var n=e.queue,a=xg.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Af,useDeferredValue:function(e,n){var a=Bn();return Rf(a,e,n)},useTransition:function(){var e=Ef(!1);return e=_g.bind(null,de,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=de,u=Bn();if(we){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),je===null)throw Error(r(349));(Te&127)!==0||qm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,lg(jm.bind(null,o,d,e),[e]),o.flags|=2048,ts(9,{destroy:void 0},Ym.bind(null,o,d,a,n),null),a},useId:function(){var e=Bn(),n=je.identifierPrefix;if(we){var a=Pi,o=Oi;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=AS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Cf,useFormState:ig,useActionState:ig,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Df.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:Sf,useCacheRefresh:function(){return Bn().memoizedState=LS.bind(null,de)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Uf={readContext:Rn,use:Il,useCallback:pg,useContext:Rn,useEffect:Tf,useImperativeHandle:hg,useInsertionEffect:ug,useLayoutEffect:fg,useMemo:mg,useReducer:Bl,useRef:og,useState:function(){return Bl(Ji)},useDebugValue:Af,useDeferredValue:function(e,n){var a=un();return gg(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Bl(Ji)[0],n=un().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:Wm,useId:Sg,useHostTransitionStatus:Cf,useFormState:ag,useActionState:ag,useOptimistic:function(e,n){var a=un();return Qm(a,Ge,e,n)},useMemoCache:Sf,useCacheRefresh:Mg};Uf.useEffectEvent=cg;var Ag={readContext:Rn,use:Il,useCallback:pg,useContext:Rn,useEffect:Tf,useImperativeHandle:hg,useInsertionEffect:ug,useLayoutEffect:fg,useMemo:mg,useReducer:xf,useRef:og,useState:function(){return xf(Ji)},useDebugValue:Af,useDeferredValue:function(e,n){var a=un();return Ge===null?Rf(a,e,n):gg(a,Ge.memoizedState,e,n)},useTransition:function(){var e=xf(Ji)[0],n=un().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:Wm,useId:Sg,useHostTransitionStatus:Cf,useFormState:sg,useActionState:sg,useOptimistic:function(e,n){var a=un();return Ge!==null?Qm(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Sf,useCacheRefresh:Mg};Ag.useEffectEvent=cg;function Lf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Nf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ai(),u=Ea(o);u.payload=n,a!=null&&(u.callback=a),n=ba(e,u,o),n!==null&&(Kn(n,e,o),co(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ai(),u=Ea(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ba(e,u,o),n!==null&&(Kn(n,e,o),co(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ai(),o=Ea(a);o.tag=2,n!=null&&(o.callback=n),n=ba(e,o,a),n!==null&&(Kn(n,e,a),co(n,e,a))}};function Rg(e,n,a,o,u,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,M):n.prototype&&n.prototype.isPureReactComponent?!eo(a,o)||!eo(u,d):!0}function wg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Nf.enqueueReplaceState(n,n.state,null)}function gr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Cg(e){yl(e)}function Dg(e){console.error(e)}function Ug(e){yl(e)}function Vl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Lg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Of(e,n,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(e,n)},a}function Ng(e){return e=Ea(e),e.tag=3,e}function Og(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){Lg(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Lg(n,a,o),typeof u!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var U=o.stack;this.componentDidCatch(o.value,{componentStack:U!==null?U:""})})}function OS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&qr(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?tc():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),rd(e,o,u)),!1;case 22:return a.flags|=65536,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),rd(e,o,u)),!1}throw Error(r(435,a.tag))}return rd(e,o,u),tc(),!1}if(we)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ju&&(e=Error(r(422),{cause:o}),ao(fi(e,a)))):(o!==Ju&&(n=Error(r(423),{cause:o}),ao(fi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=fi(o,a),u=Of(e.stateNode,o,u),uf(e,u),on!==4&&(on=2)),!1;var d=Error(r(520),{cause:o});if(d=fi(d,a),bo===null?bo=[d]:bo.push(d),on!==4&&(on=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Of(a.stateNode,o,e),uf(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Da===null||!Da.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Ng(u),Og(u,e,a,o),uf(a,u),!1}a=a.return}while(a!==null);return!1}var Pf=Error(r(461)),hn=!1;function wn(e,n,a,o){n.child=e===null?Bm(n,null,a,o):pr(n,e.child,a,o)}function Pg(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var M={};for(var U in o)U!=="ref"&&(M[U]=o[U])}else M=o;return ur(n),o=gf(e,n,a,M,d,u),U=_f(),e!==null&&!hn?(vf(e,n,u),$i(e,n,u)):(we&&U&&Ku(n),n.flags|=1,wn(e,n,o,u),n.child)}function zg(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Yu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Ig(e,n,d,o,u)):(e=El(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!kf(e,u)){var M=d.memoizedProps;if(a=a.compare,a=a!==null?a:eo,a(M,o)&&e.ref===n.ref)return $i(e,n,u)}return n.flags|=1,e=Yi(d,o),e.ref=n.ref,e.return=n,n.child=e}function Ig(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(eo(d,o)&&e.ref===n.ref)if(hn=!1,n.pendingProps=o=d,kf(e,u))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,$i(e,n,u)}return zf(e,n,a,o,u)}function Bg(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return Fg(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rl(n,d!==null?d.cachePool:null),d!==null?Gm(n,d):df(),Vm(n);else return o=n.lanes=536870912,Fg(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Rl(n,d.cachePool),Gm(n,d),Aa(),n.memoizedState=null):(e!==null&&Rl(n,null),df(),Aa());return wn(e,n,u,a),n.child}function _o(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Fg(e,n,a,o,u){var d=sf();return d=d===null?null:{parent:fn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&Rl(n,null),df(),Vm(n),e!==null&&qr(e,n,o,!0),n.childLanes=u,null}function kl(e,n){return n=Wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Hg(e,n,a){return pr(n,e.child,null,a),e=kl(n,n.pendingProps),e.flags|=2,ei(n),n.memoizedState=null,e}function PS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(we){if(o.mode==="hidden")return e=kl(n,o),n.lanes=536870912,_o(null,e);if(pf(n),(e=Qe)?(e=J0(e,pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Em(e),a.return=n,n.child=a,An=n,Qe=null)):e=null,e===null)throw Sa(n);return n.lanes=536870912,null}return kl(n,o)}var d=e.memoizedState;if(d!==null){var M=d.dehydrated;if(pf(n),u)if(n.flags&256)n.flags&=-257,n=Hg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(hn||qr(e,n,a,!1),u=(a&e.childLanes)!==0,hn||u){if(o=je,o!==null&&(M=Ni(o,a),M!==0&&M!==d.retryLane))throw d.retryLane=M,sr(e,M),Kn(o,e,M),Pf;tc(),n=Hg(e,n,a)}else e=d.treeContext,Qe=gi(M.nextSibling),An=n,we=!0,ya=null,pi=!1,e!==null&&Am(n,e),n=kl(n,o),n.flags|=4096;return n}return e=Yi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Xl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function zf(e,n,a,o,u){return ur(n),a=gf(e,n,a,o,void 0,u),o=_f(),e!==null&&!hn?(vf(e,n,u),$i(e,n,u)):(we&&o&&Ku(n),n.flags|=1,wn(e,n,a,u),n.child)}function Gg(e,n,a,o,u,d){return ur(n),n.updateQueue=null,a=Xm(n,o,a,u),km(e),o=_f(),e!==null&&!hn?(vf(e,n,d),$i(e,n,d)):(we&&o&&Ku(n),n.flags|=1,wn(e,n,a,d),n.child)}function Vg(e,n,a,o,u){if(ur(n),n.stateNode===null){var d=Vr,M=a.contextType;typeof M=="object"&&M!==null&&(d=Rn(M)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Nf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},lf(n),M=a.contextType,d.context=typeof M=="object"&&M!==null?Rn(M):Vr,d.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Lf(n,a,M,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&Nf.enqueueReplaceState(d,d.state,null),fo(n,o,d,u),uo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var U=n.memoizedProps,k=gr(a,U);d.props=k;var rt=d.context,mt=a.contextType;M=Vr,typeof mt=="object"&&mt!==null&&(M=Rn(mt));var xt=a.getDerivedStateFromProps;mt=typeof xt=="function"||typeof d.getSnapshotBeforeUpdate=="function",U=n.pendingProps!==U,mt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(U||rt!==M)&&wg(n,d,o,M),xa=!1;var ot=n.memoizedState;d.state=ot,fo(n,o,d,u),uo(),rt=n.memoizedState,U||ot!==rt||xa?(typeof xt=="function"&&(Lf(n,a,xt,o),rt=n.memoizedState),(k=xa||Rg(n,a,k,o,ot,rt,M))?(mt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=rt),d.props=o,d.state=rt,d.context=M,o=k):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,cf(e,n),M=n.memoizedProps,mt=gr(a,M),d.props=mt,xt=n.pendingProps,ot=d.context,rt=a.contextType,k=Vr,typeof rt=="object"&&rt!==null&&(k=Rn(rt)),U=a.getDerivedStateFromProps,(rt=typeof U=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==xt||ot!==k)&&wg(n,d,o,k),xa=!1,ot=n.memoizedState,d.state=ot,fo(n,o,d,u),uo();var ft=n.memoizedState;M!==xt||ot!==ft||xa||e!==null&&e.dependencies!==null&&Tl(e.dependencies)?(typeof U=="function"&&(Lf(n,a,U,o),ft=n.memoizedState),(mt=xa||Rg(n,a,mt,o,ot,ft,k)||e!==null&&e.dependencies!==null&&Tl(e.dependencies))?(rt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ft,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ft,k)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),d.props=o,d.state=ft,d.context=k,o=mt):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Xl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=pr(n,e.child,null,u),n.child=pr(n,null,a,u)):wn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=$i(e,n,u),e}function kg(e,n,a,o){return lr(),n.flags|=256,wn(e,n,a,o),n.child}var If={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bf(e){return{baseLanes:e,cachePool:Lm()}}function Ff(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function Xg(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?Ta(n):Aa(),(e=Qe)?(e=J0(e,pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Em(e),a.return=n,n.child=a,An=n,Qe=null)):e=null,e===null)throw Sa(n);return Md(e)?n.lanes=32:n.lanes=536870912,null}var U=o.children;return o=o.fallback,u?(Aa(),u=n.mode,U=Wl({mode:"hidden",children:U},u),o=or(o,u,a,null),U.return=n,o.return=n,U.sibling=o,n.child=U,o=n.child,o.memoizedState=Bf(a),o.childLanes=Ff(e,M,a),n.memoizedState=If,_o(null,o)):(Ta(n),Hf(n,U))}var k=e.memoizedState;if(k!==null&&(U=k.dehydrated,U!==null)){if(d)n.flags&256?(Ta(n),n.flags&=-257,n=Gf(e,n,a)):n.memoizedState!==null?(Aa(),n.child=e.child,n.flags|=128,n=null):(Aa(),U=o.fallback,u=n.mode,o=Wl({mode:"visible",children:o.children},u),U=or(U,u,a,null),U.flags|=2,o.return=n,U.return=n,o.sibling=U,n.child=o,pr(n,e.child,null,a),o=n.child,o.memoizedState=Bf(a),o.childLanes=Ff(e,M,a),n.memoizedState=If,n=_o(null,o));else if(Ta(n),Md(U)){if(M=U.nextSibling&&U.nextSibling.dataset,M)var rt=M.dgst;M=rt,o=Error(r(419)),o.stack="",o.digest=M,ao({value:o,source:null,stack:null}),n=Gf(e,n,a)}else if(hn||qr(e,n,a,!1),M=(a&e.childLanes)!==0,hn||M){if(M=je,M!==null&&(o=Ni(M,a),o!==0&&o!==k.retryLane))throw k.retryLane=o,sr(e,o),Kn(M,e,o),Pf;Sd(U)||tc(),n=Gf(e,n,a)}else Sd(U)?(n.flags|=192,n.child=e.child,n=null):(e=k.treeContext,Qe=gi(U.nextSibling),An=n,we=!0,ya=null,pi=!1,e!==null&&Am(n,e),n=Hf(n,o.children),n.flags|=4096);return n}return u?(Aa(),U=o.fallback,u=n.mode,k=e.child,rt=k.sibling,o=Yi(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,rt!==null?U=Yi(rt,U):(U=or(U,u,a,null),U.flags|=2),U.return=n,o.return=n,o.sibling=U,n.child=o,_o(null,o),o=n.child,U=e.child.memoizedState,U===null?U=Bf(a):(u=U.cachePool,u!==null?(k=fn._currentValue,u=u.parent!==k?{parent:k,pool:k}:u):u=Lm(),U={baseLanes:U.baseLanes|a,cachePool:u}),o.memoizedState=U,o.childLanes=Ff(e,M,a),n.memoizedState=If,_o(e.child,o)):(Ta(n),a=e.child,e=a.sibling,a=Yi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function Hf(e,n){return n=Wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Wl(e,n){return e=$n(22,e,null,n),e.lanes=0,e}function Gf(e,n,a){return pr(n,e.child,null,a),e=Hf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Wg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ef(e.return,n,a)}function Vf(e,n,a,o,u,d){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=o,M.tail=a,M.tailMode=u,M.treeForkCount=d)}function qg(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var M=cn.current,U=(M&2)!==0;if(U?(M=M&1|2,n.flags|=128):M&=1,pt(cn,M),wn(e,n,o,a),o=we?io:0,!U&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wg(e,a,n);else if(e.tag===19)Wg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Nl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Vf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Nl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Vf(n,!0,a,null,d,o);break;case"together":Vf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function $i(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ca|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(qr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Yi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Yi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function kf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Tl(e)))}function zS(e,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),Ma(n,fn,e.memoizedState.cache),lr();break;case 27:case 5:Vt(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:Ma(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,pf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ta(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Xg(e,n,a):(Ta(n),e=$i(e,n,a),e!==null?e.sibling:null);Ta(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(qr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return qg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),pt(cn,cn.current),o)break;return null;case 22:return n.lanes=0,Bg(e,n,a,n.pendingProps);case 24:Ma(n,fn,e.memoizedState.cache)}return $i(e,n,a)}function Yg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!kf(e,a)&&(n.flags&128)===0)return hn=!1,zS(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,we&&(n.flags&1048576)!==0&&Tm(n,io,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=dr(n.elementType),n.type=e,typeof e=="function")Yu(e)?(o=gr(e,o),n.tag=1,n=Vg(null,n,e,o,a)):(n.tag=0,n=zf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===R){n.tag=11,n=Pg(null,n,e,o,a);break t}else if(u===L){n.tag=14,n=zg(null,n,e,o,a);break t}}throw n=et(e)||e,Error(r(306,n,""))}}return n;case 0:return zf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=gr(o,n.pendingProps),Vg(e,n,o,u,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,cf(e,n),fo(n,o,null,a);var M=n.memoizedState;if(o=M.cache,Ma(n,fn,o),o!==d.cache&&nf(n,[fn],a,!0),uo(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=kg(e,n,o,a);break t}else if(o!==u){u=fi(Error(r(424)),n),ao(u),n=kg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=gi(e.firstChild),An=n,we=!0,ya=null,pi=!0,a=Bm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(lr(),o===u){n=$i(e,n,a);break t}wn(e,n,o,a)}n=n.child}return n;case 26:return Xl(e,n),e===null?(a=a_(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,o=oc(bt.current).createElement(a),o[an]=n,o[bn]=e,Cn(o,a,e),Q(o),n.stateNode=o):n.memoizedState=a_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Vt(n),e===null&&we&&(o=n.stateNode=e_(n.type,n.pendingProps,bt.current),An=n,pi=!0,u=Qe,Oa(n.type)?(xd=u,Qe=gi(o.firstChild)):Qe=u),wn(e,n,n.pendingProps.children,a),Xl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=o=Qe)&&(o=dM(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,An=n,Qe=gi(o.firstChild),pi=!1,u=!0):u=!1),u||Sa(n)),Vt(n),u=n.type,d=n.pendingProps,M=e!==null?e.memoizedProps:null,o=d.children,_d(u,d)?o=null:M!==null&&_d(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=gf(e,n,RS,null,null,a),Lo._currentValue=u),Xl(e,n),wn(e,n,o,a),n.child;case 6:return e===null&&we&&((e=a=Qe)&&(a=hM(a,n.pendingProps,pi),a!==null?(n.stateNode=a,An=n,Qe=null,e=!0):e=!1),e||Sa(n)),null;case 13:return Xg(e,n,a);case 4:return Ut(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=pr(n,null,o,a):wn(e,n,o,a),n.child;case 11:return Pg(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ma(n,n.type,o.value),wn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ur(n),u=Rn(u),o=o(u),n.flags|=1,wn(e,n,o,a),n.child;case 14:return zg(e,n,n.type,n.pendingProps,a);case 15:return Ig(e,n,n.type,n.pendingProps,a);case 19:return qg(e,n,a);case 31:return PS(e,n,a);case 22:return Bg(e,n,a,n.pendingProps);case 24:return ur(n),o=Rn(fn),e===null?(u=sf(),u===null&&(u=je,d=af(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},lf(n),Ma(n,fn,u)):((e.lanes&a)!==0&&(cf(e,n),fo(n,null,null,a),uo()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ma(n,fn,o)):(o=d.cache,Ma(n,fn,o),o!==u.cache&&nf(n,[fn],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ta(e){e.flags|=4}function Xf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(S0())e.flags|=8192;else throw hr=Cl,of}else e.flags&=-16777217}function jg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!c_(n))if(S0())e.flags|=8192;else throw hr=Cl,of}function ql(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ze():536870912,e.lanes|=n,as|=n)}function vo(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function IS(e,n,a){var o=n.pendingProps;switch(Qu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ki(fn),qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Wr(n)?ta(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,$u())),Je(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(ta(n),d!==null?(Je(n),jg(n,d)):(Je(n),Xf(n,u,null,o,a))):d?d!==e.memoizedState?(ta(n),Je(n),jg(n,d)):(Je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ta(n),Je(n),Xf(n,u,e,o,a)),null;case 27:if(Jt(n),a=bt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Je(n),null}e=K.current,Wr(n)?Rm(n):(e=e_(u,o,a),n.stateNode=e,ta(n))}return Je(n),null;case 5:if(Jt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Je(n),null}if(d=K.current,Wr(n))Rm(n);else{var M=oc(bt.current);switch(d){case 1:d=M.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=M.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=M.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?M.createElement("select",{is:o.is}):M.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?M.createElement(u,{is:o.is}):M.createElement(u)}}d[an]=n,d[bn]=o;t:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)d.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break t;for(;M.sibling===null;){if(M.return===null||M.return===n)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=d;t:switch(Cn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ta(n)}}return Je(n),Xf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=bt.current,Wr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[an]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||X0(e.nodeValue,a)),e||Sa(n,!0)}else e=oc(e).createTextNode(o),e[an]=n,n.stateNode=e}return Je(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Wr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[an]=n}else lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),e=!1}else a=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Wr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[an]=n}else lr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ql(n,n.updateQueue),Je(n),null);case 4:return qt(),e===null&&dd(n.stateNode.containerInfo),Je(n),null;case 10:return Ki(n.type),Je(n),null;case 19:if(nt(cn),o=n.memoizedState,o===null)return Je(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)vo(o,!1);else{if(on!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Nl(e),d!==null){for(n.flags|=128,vo(o,!1),e=d.updateQueue,n.updateQueue=e,ql(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)xm(a,e),a=a.sibling;return pt(cn,cn.current&1|2),we&&ji(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&A()>Ql&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Nl(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,ql(n,e),vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!we)return Je(n),null}else 2*A()-o.renderingStartTime>Ql&&a!==536870912&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=A(),e.sibling=null,a=cn.current,pt(cn,u?a&1|2:a&1),we&&ji(n,o.treeForkCount),e):(Je(n),null);case 22:case 23:return ei(n),hf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&ql(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&nt(fr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(fn),Je(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function BS(e,n){switch(Qu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ki(fn),qt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Jt(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(r(340));lr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ei(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));lr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(cn),null;case 4:return qt(),null;case 10:return Ki(n.type),null;case 22:case 23:return ei(n),hf(),e!==null&&nt(fr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ki(fn),null;case 25:return null;default:return null}}function Zg(e,n){switch(Qu(n),n.tag){case 3:Ki(fn),qt();break;case 26:case 27:case 5:Jt(n);break;case 4:qt();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:nt(cn);break;case 10:Ki(n.type);break;case 22:case 23:ei(n),hf(),e!==null&&nt(fr);break;case 24:Ki(fn)}}function yo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,M=a.inst;o=d(),M.destroy=o}a=a.next}while(a!==u)}}catch(U){Be(n,n.return,U)}}function Ra(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var M=o.inst,U=M.destroy;if(U!==void 0){M.destroy=void 0,u=n;var k=a,rt=U;try{rt()}catch(mt){Be(u,k,mt)}}}o=o.next}while(o!==d)}}catch(mt){Be(n,n.return,mt)}}function Kg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Hm(n,a)}catch(o){Be(e,e.return,o)}}}function Qg(e,n,a){a.props=gr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function So(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function Jg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function Wf(e,n,a){try{var o=e.stateNode;sM(o,e.type,a,n),o[bn]=n}catch(u){Be(e,e.return,u)}}function $g(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function qf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||$g(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi));else if(o!==4&&(o===27&&Oa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Yf(e,n,a),e=e.sibling;e!==null;)Yf(e,n,a),e=e.sibling}function Yl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Oa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Yl(e,n,a),e=e.sibling;e!==null;)Yl(e,n,a),e=e.sibling}function t0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[an]=e,n[bn]=a}catch(d){Be(e,e.return,d)}}var ea=!1,pn=!1,jf=!1,e0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function FS(e,n){if(e=e.containerInfo,md=pc,e=hm(e),Hu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var M=0,U=-1,k=-1,rt=0,mt=0,xt=e,ot=null;e:for(;;){for(var ft;xt!==a||u!==0&&xt.nodeType!==3||(U=M+u),xt!==d||o!==0&&xt.nodeType!==3||(k=M+o),xt.nodeType===3&&(M+=xt.nodeValue.length),(ft=xt.firstChild)!==null;)ot=xt,xt=ft;for(;;){if(xt===e)break e;if(ot===a&&++rt===u&&(U=M),ot===d&&++mt===o&&(k=M),(ft=xt.nextSibling)!==null)break;xt=ot,ot=xt.parentNode}xt=ft}a=U===-1||k===-1?null:{start:U,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(gd={focusedElem:e,selectionRange:a},pc=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Zt=gr(a.type,u);e=o.getSnapshotBeforeUpdate(Zt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Be(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)yd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function n0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),o&4&&yo(5,a);break;case 1:if(ia(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Be(a,a.return,M)}else{var u=gr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Be(a,a.return,M)}}o&64&&Kg(a),o&512&&So(a,a.return);break;case 3:if(ia(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Hm(e,n)}catch(M){Be(a,a.return,M)}}break;case 27:n===null&&o&4&&t0(a);case 26:case 5:ia(e,a),n===null&&o&4&&Jg(a),o&512&&So(a,a.return);break;case 12:ia(e,a);break;case 31:ia(e,a),o&4&&r0(e,a);break;case 13:ia(e,a),o&4&&s0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=jS.bind(null,a),pM(e,a))));break;case 22:if(o=a.memoizedState!==null||ea,!o){n=n!==null&&n.memoizedState!==null||pn,u=ea;var d=pn;ea=o,(pn=n)&&!d?aa(e,a,(a.subtreeFlags&8772)!==0):ia(e,a),ea=u,pn=d}break;case 30:break;default:ia(e,a)}}function i0(e){var n=e.alternate;n!==null&&(e.alternate=null,i0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ys(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,qn=!1;function na(e,n,a){for(a=a.child;a!==null;)a0(e,n,a),a=a.sibling}function a0(e,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(gt,a)}catch{}switch(a.tag){case 26:pn||zi(a,n),na(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||zi(a,n);var o=en,u=qn;Oa(a.type)&&(en=a.stateNode,qn=!1),na(e,n,a),Co(a.stateNode),en=o,qn=u;break;case 5:pn||zi(a,n);case 6:if(o=en,u=qn,en=null,na(e,n,a),en=o,qn=u,en!==null)if(qn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(d){Be(a,n,d)}else try{en.removeChild(a.stateNode)}catch(d){Be(a,n,d)}break;case 18:en!==null&&(qn?(e=en,K0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ds(e)):K0(en,a.stateNode));break;case 4:o=en,u=qn,en=a.stateNode.containerInfo,qn=!0,na(e,n,a),en=o,qn=u;break;case 0:case 11:case 14:case 15:Ra(2,a,n),pn||Ra(4,a,n),na(e,n,a);break;case 1:pn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Qg(a,n,o)),na(e,n,a);break;case 21:na(e,n,a);break;case 22:pn=(o=pn)||a.memoizedState!==null,na(e,n,a),pn=o;break;default:na(e,n,a)}}function r0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ds(e)}catch(a){Be(n,n.return,a)}}}function s0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ds(e)}catch(a){Be(n,n.return,a)}}function HS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new e0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new e0),n;default:throw Error(r(435,e.tag))}}function jl(e,n){var a=HS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=ZS.bind(null,e,o);o.then(u,u)}})}function Yn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,M=n,U=M;t:for(;U!==null;){switch(U.tag){case 27:if(Oa(U.type)){en=U.stateNode,qn=!1;break t}break;case 5:en=U.stateNode,qn=!1;break t;case 3:case 4:en=U.stateNode.containerInfo,qn=!0;break t}U=U.return}if(en===null)throw Error(r(160));a0(d,M,u),en=null,qn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)o0(n,e),n=n.sibling}var Ei=null;function o0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(n,e),jn(e),o&4&&(Ra(3,e,e.return),yo(3,e),Ra(5,e,e.return));break;case 1:Yn(n,e),jn(e),o&512&&(pn||a===null||zi(a,a.return)),o&64&&ea&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ei;if(Yn(n,e),jn(e),o&512&&(pn||a===null||zi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[nr]||d[an]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Cn(d,o,a),d[an]=e,Q(d),o=d;break t;case"link":var M=o_("link","href",u).get(o+(a.href||""));if(M){for(var U=0;U<M.length;U++)if(d=M[U],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(U,1);break e}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;case"meta":if(M=o_("meta","content",u).get(o+(a.content||""))){for(U=0;U<M.length;U++)if(d=M[U],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(U,1);break e}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[an]=e,Q(d),o=d}e.stateNode=o}else l_(u,e.type,e.stateNode);else e.stateNode=s_(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?l_(u,e.type,e.stateNode):s_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Wf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,e),jn(e),o&512&&(pn||a===null||zi(a,a.return)),a!==null&&o&4&&Wf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,e),jn(e),o&512&&(pn||a===null||zi(a,a.return)),e.flags&32){u=e.stateNode;try{Xn(u,"")}catch(Zt){Be(e,e.return,Zt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Wf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(jf=!0);break;case 6:if(Yn(n,e),jn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Zt){Be(e,e.return,Zt)}}break;case 3:if(uc=null,u=Ei,Ei=lc(n.containerInfo),Yn(n,e),Ei=u,jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ds(n.containerInfo)}catch(Zt){Be(e,e.return,Zt)}jf&&(jf=!1,l0(e));break;case 4:o=Ei,Ei=lc(e.stateNode.containerInfo),Yn(n,e),jn(e),Ei=o;break;case 12:Yn(n,e),jn(e);break;case 31:Yn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 13:Yn(n,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Kl=A()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 22:u=e.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,rt=ea,mt=pn;if(ea=rt||u,pn=mt||k,Yn(n,e),pn=mt,ea=rt,jn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||k||ea||pn||_r(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(d=k.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{U=k.stateNode;var xt=k.memoizedProps.style,ot=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;U.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Zt){Be(k,k.return,Zt)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(Zt){Be(k,k.return,Zt)}}}else if(n.tag===18){if(a===null){k=n;try{var ft=k.stateNode;u?Q0(ft,!0):Q0(k.stateNode,!1)}catch(Zt){Be(k,k.return,Zt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,jl(e,a))));break;case 19:Yn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 30:break;case 21:break;default:Yn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if($g(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=qf(e);Yl(e,d,u);break;case 5:var M=a.stateNode;a.flags&32&&(Xn(M,""),a.flags&=-33);var U=qf(e);Yl(e,U,M);break;case 3:case 4:var k=a.stateNode.containerInfo,rt=qf(e);Yf(e,rt,k);break;default:throw Error(r(161))}}catch(mt){Be(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function l0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;l0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ia(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)n0(e,n.alternate,n),n=n.sibling}function _r(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ra(4,n,n.return),_r(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Qg(n,n.return,a),_r(n);break;case 27:Co(n.stateNode);case 26:case 5:zi(n,n.return),_r(n);break;case 22:n.memoizedState===null&&_r(n);break;case 30:_r(n);break;default:_r(n)}e=e.sibling}}function aa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,M=d.flags;switch(d.tag){case 0:case 11:case 15:aa(u,d,a),yo(4,d);break;case 1:if(aa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(rt){Be(o,o.return,rt)}if(o=d,u=o.updateQueue,u!==null){var U=o.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)Fm(k[u],U)}catch(rt){Be(o,o.return,rt)}}a&&M&64&&Kg(d),So(d,d.return);break;case 27:t0(d);case 26:case 5:aa(u,d,a),a&&o===null&&M&4&&Jg(d),So(d,d.return);break;case 12:aa(u,d,a);break;case 31:aa(u,d,a),a&&M&4&&r0(u,d);break;case 13:aa(u,d,a),a&&M&4&&s0(u,d);break;case 22:d.memoizedState===null&&aa(u,d,a),So(d,d.return);break;case 30:break;default:aa(u,d,a)}n=n.sibling}}function Zf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ro(a))}function Kf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e))}function bi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)c0(e,n,a,o),n=n.sibling}function c0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,o),u&2048&&yo(9,n);break;case 1:bi(e,n,a,o);break;case 3:bi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e)));break;case 12:if(u&2048){bi(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,M=d.id,U=d.onPostCommit;typeof U=="function"&&U(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Be(n,n.return,k)}}else bi(e,n,a,o);break;case 31:bi(e,n,a,o);break;case 13:bi(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,M=n.alternate,n.memoizedState!==null?d._visibility&2?bi(e,n,a,o):Mo(e,n):d._visibility&2?bi(e,n,a,o):(d._visibility|=2,es(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Zf(M,n);break;case 24:bi(e,n,a,o),u&2048&&Kf(n.alternate,n);break;default:bi(e,n,a,o)}}function es(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,M=n,U=a,k=o,rt=M.flags;switch(M.tag){case 0:case 11:case 15:es(d,M,U,k,u),yo(8,M);break;case 23:break;case 22:var mt=M.stateNode;M.memoizedState!==null?mt._visibility&2?es(d,M,U,k,u):Mo(d,M):(mt._visibility|=2,es(d,M,U,k,u)),u&&rt&2048&&Zf(M.alternate,M);break;case 24:es(d,M,U,k,u),u&&rt&2048&&Kf(M.alternate,M);break;default:es(d,M,U,k,u)}n=n.sibling}}function Mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Mo(a,o),u&2048&&Zf(o.alternate,o);break;case 24:Mo(a,o),u&2048&&Kf(o.alternate,o);break;default:Mo(a,o)}n=n.sibling}}var xo=8192;function ns(e,n,a){if(e.subtreeFlags&xo)for(e=e.child;e!==null;)u0(e,n,a),e=e.sibling}function u0(e,n,a){switch(e.tag){case 26:ns(e,n,a),e.flags&xo&&e.memoizedState!==null&&AM(a,Ei,e.memoizedState,e.memoizedProps);break;case 5:ns(e,n,a);break;case 3:case 4:var o=Ei;Ei=lc(e.stateNode.containerInfo),ns(e,n,a),Ei=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=xo,xo=16777216,ns(e,n,a),xo=o):ns(e,n,a));break;default:ns(e,n,a)}}function f0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,h0(o,e)}f0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)d0(e),e=e.sibling}function d0(e){switch(e.tag){case 0:case 11:case 15:Eo(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:Eo(e);break;case 12:Eo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Zl(e)):Eo(e);break;default:Eo(e)}}function Zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,h0(o,e)}f0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ra(8,n,n.return),Zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zl(n));break;default:Zl(n)}e=e.sibling}}function h0(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Ra(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else t:for(a=e;Mn!==null;){o=Mn;var u=o.sibling,d=o.return;if(i0(o),o===a){Mn=null;break t}if(u!==null){u.return=d,Mn=u;break t}Mn=d}}}var GS={getCacheForType:function(e){var n=Rn(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Rn(fn).controller.signal}},VS=typeof WeakMap=="function"?WeakMap:Map,Pe=0,je=null,xe=null,Te=0,Ie=0,ni=null,wa=!1,is=!1,Qf=!1,ra=0,on=0,Ca=0,vr=0,Jf=0,ii=0,as=0,bo=null,Zn=null,$f=!1,Kl=0,p0=0,Ql=1/0,Jl=null,Da=null,gn=0,Ua=null,rs=null,sa=0,td=0,ed=null,m0=null,To=0,nd=null;function ai(){return(Pe&2)!==0&&Te!==0?Te&-Te:B.T!==null?ld():Ws()}function g0(){if(ii===0)if((Te&536870912)===0||we){var e=At;At<<=1,(At&3932160)===0&&(At=262144),ii=e}else ii=536870912;return e=ti.current,e!==null&&(e.flags|=32),ii}function Kn(e,n,a){(e===je&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(ss(e,0),La(e,Te,ii,!1)),En(e,a),((Pe&2)===0||e!==je)&&(e===je&&((Pe&2)===0&&(vr|=a),on===4&&La(e,Te,ii,!1)),Ii(e))}function _0(e,n,a){if((Pe&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Xt(e,n),u=o?WS(e,n):ad(e,n,!0),d=o;do{if(u===0){is&&!o&&La(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!kS(a)){u=ad(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var U=e;u=bo;var k=U.current.memoizedState.isDehydrated;if(k&&(ss(U,M).flags|=256),M=ad(U,M,!1),M!==2){if(Qf&&!k){U.errorRecoveryDisabledLanes|=d,vr|=d,u=4;break t}d=Zn,Zn=u,d!==null&&(Zn===null?Zn=d:Zn.push.apply(Zn,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){ss(e,0),La(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:La(o,n,ii,!wa);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Kl+300-A(),10<u)){if(La(o,n,ii,!wa),Mt(o,0,!0)!==0)break t;sa=n,o.timeoutHandle=j0(v0.bind(null,o,a,Zn,Jl,$f,n,ii,vr,as,wa,d,"Throttled",-0,0),u);break t}v0(o,a,Zn,Jl,$f,n,ii,vr,as,wa,d,null,-0,0)}}break}while(!0);Ii(e)}function v0(e,n,a,o,u,d,M,U,k,rt,mt,xt,ot,ft){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},u0(n,d,xt);var Zt=(d&62914560)===d?Kl-A():(d&4194048)===d?p0-A():0;if(Zt=RM(xt,Zt),Zt!==null){sa=d,e.cancelPendingCommit=Zt(A0.bind(null,e,n,d,a,o,u,M,U,k,mt,xt,null,ot,ft)),La(e,d,M,!rt);return}}A0(e,n,d,a,o,u,M,U,k)}function kS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Jn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function La(e,n,a,o){n&=~Jf,n&=~vr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Pt(u),M=1<<d;o[d]=-1,u&=~M}a!==0&&ks(e,a,n)}function $l(){return(Pe&6)===0?(Ao(0),!1):!0}function id(){if(xe!==null){if(Ie===0)var e=xe.return;else e=xe,Zi=cr=null,yf(e),Kr=null,oo=0,e=xe;for(;e!==null;)Zg(e.alternate,e),e=e.return;xe=null}}function ss(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,cM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),sa=0,id(),je=e,xe=a=Yi(e.current,null),Te=n,Ie=0,ni=null,wa=!1,is=Xt(e,n),Qf=!1,as=ii=Jf=vr=Ca=on=0,Zn=bo=null,$f=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pt(o),d=1<<u;n|=e[u],o&=~d}return ra=n,Sl(),a}function y0(e,n){de=null,B.H=go,n===Zr||n===wl?(n=Pm(),Ie=3):n===of?(n=Pm(),Ie=4):Ie=n===Pf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,xe===null&&(on=1,Vl(e,fi(n,e.current)))}function S0(){var e=ti.current;return e===null?!0:(Te&4194048)===Te?mi===null:(Te&62914560)===Te||(Te&536870912)!==0?e===mi:!1}function M0(){var e=B.H;return B.H=go,e===null?go:e}function x0(){var e=B.A;return B.A=GS,e}function tc(){on=4,wa||(Te&4194048)!==Te&&ti.current!==null||(is=!0),(Ca&134217727)===0&&(vr&134217727)===0||je===null||La(je,Te,ii,!1)}function ad(e,n,a){var o=Pe;Pe|=2;var u=M0(),d=x0();(je!==e||Te!==n)&&(Jl=null,ss(e,n)),n=!1;var M=on;t:do try{if(Ie!==0&&xe!==null){var U=xe,k=ni;switch(Ie){case 8:id(),M=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var rt=Ie;if(Ie=0,ni=null,os(e,U,k,rt),a&&is){M=0;break t}break;default:rt=Ie,Ie=0,ni=null,os(e,U,k,rt)}}XS(),M=on;break}catch(mt){y0(e,mt)}while(!0);return n&&e.shellSuspendCounter++,Zi=cr=null,Pe=o,B.H=u,B.A=d,xe===null&&(je=null,Te=0,Sl()),M}function XS(){for(;xe!==null;)E0(xe)}function WS(e,n){var a=Pe;Pe|=2;var o=M0(),u=x0();je!==e||Te!==n?(Jl=null,Ql=A()+500,ss(e,n)):is=Xt(e,n);t:do try{if(Ie!==0&&xe!==null){n=xe;var d=ni;e:switch(Ie){case 1:Ie=0,ni=null,os(e,n,d,1);break;case 2:case 9:if(Nm(d)){Ie=0,ni=null,b0(n);break}n=function(){Ie!==2&&Ie!==9||je!==e||(Ie=7),Ii(e)},d.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:Nm(d)?(Ie=0,ni=null,b0(n)):(Ie=0,ni=null,os(e,n,d,7));break;case 5:var M=null;switch(xe.tag){case 26:M=xe.memoizedState;case 5:case 27:var U=xe;if(M?c_(M):U.stateNode.complete){Ie=0,ni=null;var k=U.sibling;if(k!==null)xe=k;else{var rt=U.return;rt!==null?(xe=rt,ec(rt)):xe=null}break e}}Ie=0,ni=null,os(e,n,d,5);break;case 6:Ie=0,ni=null,os(e,n,d,6);break;case 8:id(),on=6;break t;default:throw Error(r(462))}}qS();break}catch(mt){y0(e,mt)}while(!0);return Zi=cr=null,B.H=o,B.A=u,Pe=a,xe!==null?0:(je=null,Te=0,Sl(),on)}function qS(){for(;xe!==null&&!Fe();)E0(xe)}function E0(e){var n=Yg(e.alternate,e,ra);e.memoizedProps=e.pendingProps,n===null?ec(e):xe=n}function b0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Gg(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=Gg(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:yf(n);default:Zg(a,n),n=xe=xm(n,ra),n=Yg(a,n,ra)}e.memoizedProps=e.pendingProps,n===null?ec(e):xe=n}function os(e,n,a,o){Zi=cr=null,yf(n),Kr=null,oo=0;var u=n.return;try{if(OS(e,u,n,a,Te)){on=1,Vl(e,fi(a,e.current)),xe=null;return}}catch(d){if(u!==null)throw xe=u,d;on=1,Vl(e,fi(a,e.current)),xe=null;return}n.flags&32768?(we||o===1?e=!0:is||(Te&536870912)!==0?e=!1:(wa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),T0(n,e)):ec(n)}function ec(e){var n=e;do{if((n.flags&32768)!==0){T0(n,wa);return}e=n.return;var a=IS(n.alternate,n,ra);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=e}while(n!==null);on===0&&(on=5)}function T0(e,n){do{var a=BS(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);on=6,xe=null}function A0(e,n,a,o,u,d,M,U,k){e.cancelPendingCommit=null;do nc();while(gn!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Wu,yi(e,a,d,M,U,k),e===je&&(xe=je=null,Te=0),rs=n,Ua=e,sa=a,td=d,ed=u,m0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,KS(ht,function(){return U0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=Z.p,Z.p=2,M=Pe,Pe|=4;try{FS(e,n,a)}finally{Pe=M,Z.p=u,B.T=o}}gn=1,R0(),w0(),C0()}}function R0(){if(gn===1){gn=0;var e=Ua,n=rs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var u=Pe;Pe|=4;try{o0(n,e);var d=gd,M=hm(e.containerInfo),U=d.focusedElem,k=d.selectionRange;if(M!==U&&U&&U.ownerDocument&&dm(U.ownerDocument.documentElement,U)){if(k!==null&&Hu(U)){var rt=k.start,mt=k.end;if(mt===void 0&&(mt=rt),"selectionStart"in U)U.selectionStart=rt,U.selectionEnd=Math.min(mt,U.value.length);else{var xt=U.ownerDocument||document,ot=xt&&xt.defaultView||window;if(ot.getSelection){var ft=ot.getSelection(),Zt=U.textContent.length,ae=Math.min(k.start,Zt),ke=k.end===void 0?ae:Math.min(k.end,Zt);!ft.extend&&ae>ke&&(M=ke,ke=ae,ae=M);var tt=fm(U,ae),q=fm(U,ke);if(tt&&q&&(ft.rangeCount!==1||ft.anchorNode!==tt.node||ft.anchorOffset!==tt.offset||ft.focusNode!==q.node||ft.focusOffset!==q.offset)){var it=xt.createRange();it.setStart(tt.node,tt.offset),ft.removeAllRanges(),ae>ke?(ft.addRange(it),ft.extend(q.node,q.offset)):(it.setEnd(q.node,q.offset),ft.addRange(it))}}}}for(xt=[],ft=U;ft=ft.parentNode;)ft.nodeType===1&&xt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<xt.length;U++){var vt=xt[U];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}pc=!!md,gd=md=null}finally{Pe=u,Z.p=o,B.T=a}}e.current=n,gn=2}}function w0(){if(gn===2){gn=0;var e=Ua,n=rs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var u=Pe;Pe|=4;try{n0(e,n.alternate,n)}finally{Pe=u,Z.p=o,B.T=a}}gn=3}}function C0(){if(gn===4||gn===3){gn=0,F();var e=Ua,n=rs,a=sa,o=m0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,rs=Ua=null,D0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Da=null),Or(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(gt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=Z.p,Z.p=2,B.T=null;try{for(var d=e.onRecoverableError,M=0;M<o.length;M++){var U=o[M];d(U.value,{componentStack:U.stack})}}finally{B.T=n,Z.p=u}}(sa&3)!==0&&nc(),Ii(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===nd?To++:(To=0,nd=e):To=0,Ao(0)}}function D0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ro(n)))}function nc(){return R0(),w0(),C0(),U0()}function U0(){if(gn!==5)return!1;var e=Ua,n=td;td=0;var a=Or(sa),o=B.T,u=Z.p;try{Z.p=32>a?32:a,B.T=null,a=ed,ed=null;var d=Ua,M=sa;if(gn=0,rs=Ua=null,sa=0,(Pe&6)!==0)throw Error(r(331));var U=Pe;if(Pe|=4,d0(d.current),c0(d,d.current,M,a),Pe=U,Ao(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(gt,d)}catch{}return!0}finally{Z.p=u,B.T=o,D0(e,n)}}function L0(e,n,a){n=fi(a,n),n=Of(e.stateNode,n,2),e=ba(e,n,2),e!==null&&(En(e,2),Ii(e))}function Be(e,n,a){if(e.tag===3)L0(e,e,a);else for(;n!==null;){if(n.tag===3){L0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Da===null||!Da.has(o))){e=fi(a,e),a=Ng(2),o=ba(n,a,2),o!==null&&(Og(a,o,n,e),En(o,2),Ii(o));break}}n=n.return}}function rd(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new VS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Qf=!0,u.add(a),e=YS.bind(null,e,n,a),n.then(e,e))}function YS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(Te&a)===a&&(on===4||on===3&&(Te&62914560)===Te&&300>A()-Kl?(Pe&2)===0&&ss(e,0):Jf|=a,as===Te&&(as=0)),Ii(e)}function N0(e,n){n===0&&(n=ze()),e=sr(e,n),e!==null&&(En(e,n),Ii(e))}function jS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),N0(e,a)}function ZS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),N0(e,a)}function KS(e,n){return Yt(e,n)}var ic=null,ls=null,sd=!1,ac=!1,od=!1,Na=0;function Ii(e){e!==ls&&e.next===null&&(ls===null?ic=ls=e:ls=ls.next=e),ac=!0,sd||(sd=!0,JS())}function Ao(e,n){if(!od&&ac){od=!0;do for(var a=!1,o=ic;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var M=o.suspendedLanes,U=o.pingedLanes;d=(1<<31-Pt(42|e)+1)-1,d&=u&~(M&~U),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,I0(o,d))}else d=Te,d=Mt(o,o===je?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Xt(o,d)||(a=!0,I0(o,d));o=o.next}while(a);od=!1}}function QS(){O0()}function O0(){ac=sd=!1;var e=0;Na!==0&&lM()&&(e=Na);for(var n=A(),a=null,o=ic;o!==null;){var u=o.next,d=P0(o,n);d===0?(o.next=null,a===null?ic=u:a.next=u,u===null&&(ls=a)):(a=o,(e!==0||(d&3)!==0)&&(ac=!0)),o=u}gn!==0&&gn!==5||Ao(e),Na!==0&&(Na=0)}function P0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-Pt(d),U=1<<M,k=u[M];k===-1?((U&a)===0||(U&o)!==0)&&(u[M]=oe(U,n)):k<=n&&(e.expiredLanes|=U),d&=~U}if(n=je,a=Te,a=Mt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ie(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ie(o),Or(a)){case 2:case 8:a=Et;break;case 32:a=ht;break;case 268435456:a=Ot;break;default:a=ht}return o=z0.bind(null,e),a=Yt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ie(o),e.callbackPriority=2,e.callbackNode=null,2}function z0(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nc()&&e.callbackNode!==a)return null;var o=Te;return o=Mt(e,e===je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(_0(e,o,n),P0(e,A()),e.callbackNode!=null&&e.callbackNode===a?z0.bind(null,e):null)}function I0(e,n){if(nc())return null;_0(e,n,!0)}function JS(){uM(function(){(Pe&6)!==0?Yt(_t,QS):O0()})}function ld(){if(Na===0){var e=Yr;e===0&&(e=zt,zt<<=1,(zt&261888)===0&&(zt=256)),Na=e}return Na}function B0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:dl(""+e)}function F0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function $S(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=B0((u[bn]||null).action),M=o.submitter;M&&(n=(n=M[bn]||null)?B0(n.formAction):M.getAttribute("formAction"),n!==null&&(d=n,M=null));var U=new gl("action","action",null,o,u);e.push({event:U,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Na!==0){var k=M?F0(u,M):new FormData(u);wf(a,{pending:!0,data:k,method:u.method,action:d},null,k)}}else typeof d=="function"&&(U.preventDefault(),k=M?F0(u,M):new FormData(u),wf(a,{pending:!0,data:k,method:u.method,action:d},d,k))},currentTarget:u}]})}}for(var cd=0;cd<Xu.length;cd++){var ud=Xu[cd],tM=ud.toLowerCase(),eM=ud[0].toUpperCase()+ud.slice(1);xi(tM,"on"+eM)}xi(gm,"onAnimationEnd"),xi(_m,"onAnimationIteration"),xi(vm,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(_S,"onTransitionRun"),xi(vS,"onTransitionStart"),xi(yS,"onTransitionCancel"),xi(ym,"onTransitionEnd"),Ft("onMouseEnter",["mouseout","mouseover"]),Ft("onMouseLeave",["mouseout","mouseover"]),Ft("onPointerEnter",["pointerout","pointerover"]),Ft("onPointerLeave",["pointerout","pointerover"]),Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function H0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var M=o.length-1;0<=M;M--){var U=o[M],k=U.instance,rt=U.currentTarget;if(U=U.listener,k!==d&&u.isPropagationStopped())break t;d=U,u.currentTarget=rt;try{d(u)}catch(mt){yl(mt)}u.currentTarget=null,d=k}else for(M=0;M<o.length;M++){if(U=o[M],k=U.instance,rt=U.currentTarget,U=U.listener,k!==d&&u.isPropagationStopped())break t;d=U,u.currentTarget=rt;try{d(u)}catch(mt){yl(mt)}u.currentTarget=null,d=k}}}}function Ee(e,n){var a=n[qs];a===void 0&&(a=n[qs]=new Set);var o=e+"__bubble";a.has(o)||(G0(n,e,2,!1),a.add(o))}function fd(e,n,a){var o=0;n&&(o|=4),G0(a,e,o,n)}var rc="_reactListening"+Math.random().toString(36).slice(2);function dd(e){if(!e[rc]){e[rc]=!0,Dt.forEach(function(a){a!=="selectionchange"&&(nM.has(a)||fd(a,!1,e),fd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[rc]||(n[rc]=!0,fd("selectionchange",!1,n))}}function G0(e,n,a,o){switch(g_(n)){case 2:var u=DM;break;case 8:u=UM;break;default:u=Rd}a=u.bind(null,n,a,e),u=void 0,!Uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function hd(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var U=o.stateNode.containerInfo;if(U===u)break;if(M===4)for(M=o.return;M!==null;){var k=M.tag;if((k===3||k===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;U!==null;){if(M=N(U),M===null)return;if(k=M.tag,k===5||k===6||k===26||k===27){o=d=M;continue t}U=U.parentNode}}o=o.return}qp(function(){var rt=d,mt=Cu(a),xt=[];t:{var ot=Sm.get(e);if(ot!==void 0){var ft=gl,Zt=e;switch(e){case"keypress":if(pl(a)===0)break t;case"keydown":case"keyup":ft=Zy;break;case"focusin":Zt="focus",ft=Pu;break;case"focusout":Zt="blur",ft=Pu;break;case"beforeblur":case"afterblur":ft=Pu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=Zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=Iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=Jy;break;case gm:case _m:case vm:ft=Hy;break;case ym:ft=tS;break;case"scroll":case"scrollend":ft=Py;break;case"wheel":ft=nS;break;case"copy":case"cut":case"paste":ft=Vy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=Qp;break;case"toggle":case"beforetoggle":ft=aS}var ae=(n&4)!==0,ke=!ae&&(e==="scroll"||e==="scrollend"),tt=ae?ot!==null?ot+"Capture":null:ot;ae=[];for(var q=rt,it;q!==null;){var vt=q;if(it=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||it===null||tt===null||(vt=js(q,tt),vt!=null&&ae.push(wo(q,vt,it))),ke)break;q=q.return}0<ae.length&&(ot=new ft(ot,Zt,null,a,mt),xt.push({event:ot,listeners:ae}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",ot&&a!==wu&&(Zt=a.relatedTarget||a.fromElement)&&(N(Zt)||Zt[Xi]))break t;if((ft||ot)&&(ot=mt.window===mt?mt:(ot=mt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ft?(Zt=a.relatedTarget||a.toElement,ft=rt,Zt=Zt?N(Zt):null,Zt!==null&&(ke=c(Zt),ae=Zt.tag,Zt!==ke||ae!==5&&ae!==27&&ae!==6)&&(Zt=null)):(ft=null,Zt=rt),ft!==Zt)){if(ae=Zp,vt="onMouseLeave",tt="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Qp,vt="onPointerLeave",tt="onPointerEnter",q="pointer"),ke=ft==null?ot:ct(ft),it=Zt==null?ot:ct(Zt),ot=new ae(vt,q+"leave",ft,a,mt),ot.target=ke,ot.relatedTarget=it,vt=null,N(mt)===rt&&(ae=new ae(tt,q+"enter",Zt,a,mt),ae.target=it,ae.relatedTarget=ke,vt=ae),ke=vt,ft&&Zt)e:{for(ae=iM,tt=ft,q=Zt,it=0,vt=tt;vt;vt=ae(vt))it++;vt=0;for(var ee=q;ee;ee=ae(ee))vt++;for(;0<it-vt;)tt=ae(tt),it--;for(;0<vt-it;)q=ae(q),vt--;for(;it--;){if(tt===q||q!==null&&tt===q.alternate){ae=tt;break e}tt=ae(tt),q=ae(q)}ae=null}else ae=null;ft!==null&&V0(xt,ot,ft,ae,!1),Zt!==null&&ke!==null&&V0(xt,ke,Zt,ae,!0)}}t:{if(ot=rt?ct(rt):window,ft=ot.nodeName&&ot.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ot.type==="file")var Le=rm;else if(im(ot))if(sm)Le=pS;else{Le=dS;var Qt=fS}else ft=ot.nodeName,!ft||ft.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?rt&&Ru(rt.elementType)&&(Le=rm):Le=hS;if(Le&&(Le=Le(e,rt))){am(xt,Le,a,mt);break t}Qt&&Qt(e,ot,rt),e==="focusout"&&rt&&ot.type==="number"&&rt.memoizedProps.value!=null&&Ln(ot,"number",ot.value)}switch(Qt=rt?ct(rt):window,e){case"focusin":(im(Qt)||Qt.contentEditable==="true")&&(Fr=Qt,Gu=rt,no=null);break;case"focusout":no=Gu=Fr=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,pm(xt,a,mt);break;case"selectionchange":if(gS)break;case"keydown":case"keyup":pm(xt,a,mt)}var pe;if(Iu)t:{switch(e){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else Br?em(e,a)&&(Ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(Jp&&a.locale!=="ko"&&(Br||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Br&&(pe=Yp()):(_a=mt,Lu="value"in _a?_a.value:_a.textContent,Br=!0)),Qt=sc(rt,Ae),0<Qt.length&&(Ae=new Kp(Ae,e,null,a,mt),xt.push({event:Ae,listeners:Qt}),pe?Ae.data=pe:(pe=nm(a),pe!==null&&(Ae.data=pe)))),(pe=sS?oS(e,a):lS(e,a))&&(Ae=sc(rt,"onBeforeInput"),0<Ae.length&&(Qt=new Kp("onBeforeInput","beforeinput",null,a,mt),xt.push({event:Qt,listeners:Ae}),Qt.data=pe)),$S(xt,e,rt,a,mt)}H0(xt,n)})}function wo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function sc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=js(e,a),u!=null&&o.unshift(wo(e,u,d)),u=js(e,n),u!=null&&o.push(wo(e,u,d))),e.tag===3)return o;e=e.return}return[]}function iM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function V0(e,n,a,o,u){for(var d=n._reactName,M=[];a!==null&&a!==o;){var U=a,k=U.alternate,rt=U.stateNode;if(U=U.tag,k!==null&&k===o)break;U!==5&&U!==26&&U!==27||rt===null||(k=rt,u?(rt=js(a,d),rt!=null&&M.unshift(wo(a,rt,k))):u||(rt=js(a,d),rt!=null&&M.push(wo(a,rt,k)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var aM=/\r\n?/g,rM=/\u0000|\uFFFD/g;function k0(e){return(typeof e=="string"?e:""+e).replace(aM,`
`).replace(rM,"")}function X0(e,n){return n=k0(n),k0(e)===n}function Ve(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Xn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Xn(e,""+o);break;case"className":Ye(e,"class",o);break;case"tabIndex":Ye(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ye(e,a,o);break;case"style":Xp(e,o,d);break;case"data":if(n!=="object"){Ye(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=dl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=dl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Wi);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=dl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Ue(e,"popover",o);break;case"xlinkActuate":Re(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Re(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Re(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Re(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Re(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Re(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Re(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Re(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Re(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ue(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ny.get(a)||a,Ue(e,a,o))}}function pd(e,n,a,o,u,d){switch(a){case"style":Xp(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Xn(e,o):(typeof o=="number"||typeof o=="bigint")&&Xn(e,""+o);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!It.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[bn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ue(e,a,o)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var M=a[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(e,n,d,M,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":Ee("invalid",e);var U=d=M=u=null,k=null,rt=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":M=mt;break;case"checked":k=mt;break;case"defaultChecked":rt=mt;break;case"value":d=mt;break;case"defaultValue":U=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:Ve(e,n,o,mt,a,null)}}In(e,d,U,k,rt,M,u,!1);return;case"select":Ee("invalid",e),o=M=d=null;for(u in a)if(a.hasOwnProperty(u)&&(U=a[u],U!=null))switch(u){case"value":d=U;break;case"defaultValue":M=U;break;case"multiple":o=U;default:Ve(e,n,u,U,a,null)}n=d,a=M,e.multiple=!!o,n!=null?rn(e,!!o,n,!1):a!=null&&rn(e,!!o,a,!0);return;case"textarea":Ee("invalid",e),d=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(U=a[M],U!=null))switch(M){case"value":o=U;break;case"defaultValue":u=U;break;case"children":d=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(r(91));break;default:Ve(e,n,M,U,a,null)}Pr(e,o,u,d);return;case"option":for(k in a)a.hasOwnProperty(k)&&(o=a[k],o!=null)&&(k==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ve(e,n,k,o,a,null));return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(o=0;o<Ro.length;o++)Ee(Ro[o],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(rt in a)if(a.hasOwnProperty(rt)&&(o=a[rt],o!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(e,n,rt,o,a,null)}return;default:if(Ru(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&pd(e,n,mt,o,a,void 0));return}}for(U in a)a.hasOwnProperty(U)&&(o=a[U],o!=null&&Ve(e,n,U,o,a,null))}function sM(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,U=null,k=null,rt=null,mt=null;for(ft in a){var xt=a[ft];if(a.hasOwnProperty(ft)&&xt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":k=xt;default:o.hasOwnProperty(ft)||Ve(e,n,ft,null,o,xt)}}for(var ot in o){var ft=o[ot];if(xt=a[ot],o.hasOwnProperty(ot)&&(ft!=null||xt!=null))switch(ot){case"type":d=ft;break;case"name":u=ft;break;case"checked":rt=ft;break;case"defaultChecked":mt=ft;break;case"value":M=ft;break;case"defaultValue":U=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:ft!==xt&&Ve(e,n,ot,ft,o,xt)}}He(e,M,U,k,rt,mt,d,u);return;case"select":ft=M=U=ot=null;for(d in a)if(k=a[d],a.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":ft=k;default:o.hasOwnProperty(d)||Ve(e,n,d,null,o,k)}for(u in o)if(d=o[u],k=a[u],o.hasOwnProperty(u)&&(d!=null||k!=null))switch(u){case"value":ot=d;break;case"defaultValue":U=d;break;case"multiple":M=d;default:d!==k&&Ve(e,n,u,d,o,k)}n=U,a=M,o=ft,ot!=null?rn(e,!!a,ot,!1):!!o!=!!a&&(n!=null?rn(e,!!a,n,!0):rn(e,!!a,a?[]:"",!1));return;case"textarea":ft=ot=null;for(U in a)if(u=a[U],a.hasOwnProperty(U)&&u!=null&&!o.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:Ve(e,n,U,null,o,u)}for(M in o)if(u=o[M],d=a[M],o.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":ot=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Ve(e,n,M,u,o,d)}Tn(e,ot,ft);return;case"option":for(var Zt in a)ot=a[Zt],a.hasOwnProperty(Zt)&&ot!=null&&!o.hasOwnProperty(Zt)&&(Zt==="selected"?e.selected=!1:Ve(e,n,Zt,null,o,ot));for(k in o)ot=o[k],ft=a[k],o.hasOwnProperty(k)&&ot!==ft&&(ot!=null||ft!=null)&&(k==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":Ve(e,n,k,ot,o,ft));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)ot=a[ae],a.hasOwnProperty(ae)&&ot!=null&&!o.hasOwnProperty(ae)&&Ve(e,n,ae,null,o,ot);for(rt in o)if(ot=o[rt],ft=a[rt],o.hasOwnProperty(rt)&&ot!==ft&&(ot!=null||ft!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:Ve(e,n,rt,ot,o,ft)}return;default:if(Ru(n)){for(var ke in a)ot=a[ke],a.hasOwnProperty(ke)&&ot!==void 0&&!o.hasOwnProperty(ke)&&pd(e,n,ke,void 0,o,ot);for(mt in o)ot=o[mt],ft=a[mt],!o.hasOwnProperty(mt)||ot===ft||ot===void 0&&ft===void 0||pd(e,n,mt,ot,o,ft);return}}for(var tt in a)ot=a[tt],a.hasOwnProperty(tt)&&ot!=null&&!o.hasOwnProperty(tt)&&Ve(e,n,tt,null,o,ot);for(xt in o)ot=o[xt],ft=a[xt],!o.hasOwnProperty(xt)||ot===ft||ot==null&&ft==null||Ve(e,n,xt,ot,o,ft)}function W0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function oM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,M=u.initiatorType,U=u.duration;if(d&&U&&W0(M)){for(M=0,U=u.responseEnd,o+=1;o<a.length;o++){var k=a[o],rt=k.startTime;if(rt>U)break;var mt=k.transferSize,xt=k.initiatorType;mt&&W0(xt)&&(k=k.responseEnd,M+=mt*(k<U?1:(U-rt)/(k-rt)))}if(--o,n+=8*(d+M)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var md=null,gd=null;function oc(e){return e.nodeType===9?e:e.ownerDocument}function q0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Y0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function _d(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vd=null;function lM(){var e=window.event;return e&&e.type==="popstate"?e===vd?!1:(vd=e,!0):(vd=null,!1)}var j0=typeof setTimeout=="function"?setTimeout:void 0,cM=typeof clearTimeout=="function"?clearTimeout:void 0,Z0=typeof Promise=="function"?Promise:void 0,uM=typeof queueMicrotask=="function"?queueMicrotask:typeof Z0<"u"?function(e){return Z0.resolve(null).then(e).catch(fM)}:j0;function fM(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function K0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),ds(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Co(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Co(a);for(var d=a.firstChild;d;){var M=d.nextSibling,U=d.nodeName;d[nr]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=M}}else a==="body"&&Co(e.ownerDocument.body);a=u}while(a);ds(n)}function Q0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function yd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":yd(a),Ys(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function dM(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[nr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function hM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function J0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gi(e.nextSibling),e===null))return null;return e}function Sd(e){return e.data==="$?"||e.data==="$~"}function Md(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function pM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var xd=null;function $0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return gi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function t_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function e_(e,n,a){switch(n=oc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Co(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ys(e)}var _i=new Map,n_=new Set;function lc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=Z.d;Z.d={f:mM,r:gM,D:_M,C:vM,L:yM,m:SM,X:xM,S:MM,M:EM};function mM(){var e=oa.f(),n=$l();return e||n}function gM(e){var n=J(e);n!==null&&n.tag===5&&n.type==="form"?yg(n):oa.r(e)}var cs=typeof document>"u"?null:document;function i_(e,n,a){var o=cs;if(o&&typeof n=="string"&&n){var u=Sn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),n_.has(u)||(n_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",e),Q(n),o.head.appendChild(n)))}}function _M(e){oa.D(e),i_("dns-prefetch",e,null)}function vM(e,n){oa.C(e,n),i_("preconnect",e,n)}function yM(e,n,a){oa.L(e,n,a);var o=cs;if(o&&e&&n){var u='link[rel="preload"][as="'+Sn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Sn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Sn(a.imageSizes)+'"]')):u+='[href="'+Sn(e)+'"]';var d=u;switch(n){case"style":d=us(e);break;case"script":d=fs(e)}_i.has(d)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),_i.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Do(d))||n==="script"&&o.querySelector(Uo(d))||(n=o.createElement("link"),Cn(n,"link",e),Q(n),o.head.appendChild(n)))}}function SM(e,n){oa.m(e,n);var a=cs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Sn(o)+'"][href="'+Sn(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=fs(e)}if(!_i.has(d)&&(e=_({rel:"modulepreload",href:e},n),_i.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(d)))return}o=a.createElement("link"),Cn(o,"link",e),Q(o),a.head.appendChild(o)}}}function MM(e,n,a){oa.S(e,n,a);var o=cs;if(o&&e){var u=ut(o).hoistableStyles,d=us(e);n=n||"default";var M=u.get(d);if(!M){var U={loading:0,preload:null};if(M=o.querySelector(Do(d)))U.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=_i.get(d))&&Ed(e,a);var k=M=o.createElement("link");Q(k),Cn(k,"link",e),k._p=new Promise(function(rt,mt){k.onload=rt,k.onerror=mt}),k.addEventListener("load",function(){U.loading|=1}),k.addEventListener("error",function(){U.loading|=2}),U.loading|=4,cc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:U},u.set(d,M)}}}function xM(e,n){oa.X(e,n);var a=cs;if(a&&e){var o=ut(a).hoistableScripts,u=fs(e),d=o.get(u);d||(d=a.querySelector(Uo(u)),d||(e=_({src:e,async:!0},n),(n=_i.get(u))&&bd(e,n),d=a.createElement("script"),Q(d),Cn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function EM(e,n){oa.M(e,n);var a=cs;if(a&&e){var o=ut(a).hoistableScripts,u=fs(e),d=o.get(u);d||(d=a.querySelector(Uo(u)),d||(e=_({src:e,async:!0,type:"module"},n),(n=_i.get(u))&&bd(e,n),d=a.createElement("script"),Q(d),Cn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function a_(e,n,a,o){var u=(u=bt.current)?lc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=ut(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=us(a.href);var d=ut(u).hoistableStyles,M=d.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=u.querySelector(Do(e)))&&!d._p&&(M.instance=d,M.state.loading=5),_i.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(e,a),d||bM(u,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(a),a=ut(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function us(e){return'href="'+Sn(e)+'"'}function Do(e){return'link[rel="stylesheet"]['+e+"]"}function r_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function bM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),Q(n),e.head.appendChild(n))}function fs(e){return'[src="'+Sn(e)+'"]'}function Uo(e){return"script[async]"+e}function s_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Sn(a.href)+'"]');if(o)return n.instance=o,Q(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Q(o),Cn(o,"style",u),cc(o,a.precedence,e),n.instance=o;case"stylesheet":u=us(a.href);var d=e.querySelector(Do(u));if(d)return n.state.loading|=4,n.instance=d,Q(d),d;o=r_(a),(u=_i.get(u))&&Ed(o,u),d=(e.ownerDocument||e).createElement("link"),Q(d);var M=d;return M._p=new Promise(function(U,k){M.onload=U,M.onerror=k}),Cn(d,"link",o),n.state.loading|=4,cc(d,a.precedence,e),n.instance=d;case"script":return d=fs(a.src),(u=e.querySelector(Uo(d)))?(n.instance=u,Q(u),u):(o=a,(u=_i.get(d))&&(o=_({},a),bd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Q(u),Cn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cc(o,a.precedence,e));return n.instance}function cc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,M=0;M<o.length;M++){var U=o[M];if(U.dataset.precedence===n)d=U;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Ed(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function bd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var uc=null;function o_(e,n,a){if(uc===null){var o=new Map,u=uc=new Map;u.set(a,o)}else u=uc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[nr]||d[an]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(n)||"";M=e+M;var U=o.get(M);U?U.push(d):o.set(M,[d])}}return o}function l_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function TM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function c_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function AM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=us(o.href),d=n.querySelector(Do(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=fc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,Q(d);return}d=n.ownerDocument||n,o=r_(o),(u=_i.get(u))&&Ed(o,u),d=d.createElement("link"),Q(d);var M=d;M._p=new Promise(function(U,k){M.onload=U,M.onerror=k}),Cn(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=fc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Td=0;function RM(e,n){return e.stylesheets&&e.count===0&&hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&Td===0&&(Td=62500*oM());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Td?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function fc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dc=null;function hc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dc=new Map,n.forEach(wM,e),dc=null,fc.call(e))}function wM(e,n){if(!(n.state.loading&4)){var a=dc.get(e);if(a)var o=a.get(null);else{a=new Map,dc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),d=a.get(M)||o,d===o&&a.set(null,u),a.set(M,u),this.count++,o=fc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Lo={$$typeof:D,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function CM(e,n,a,o,u,d,M,U,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function u_(e,n,a,o,u,d,M,U,k,rt,mt,xt){return e=new CM(e,n,a,M,k,rt,mt,xt,U),n=1,d===!0&&(n|=24),d=$n(3,null,null,n),e.current=d,d.stateNode=e,n=af(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},lf(d),e}function f_(e){return e?(e=Vr,e):Vr}function d_(e,n,a,o,u,d){u=f_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ea(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ba(e,o,n),a!==null&&(Kn(a,e,n),co(a,e,n))}function h_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Ad(e,n){h_(e,n),(e=e.alternate)&&h_(e,n)}function p_(e){if(e.tag===13||e.tag===31){var n=sr(e,67108864);n!==null&&Kn(n,e,67108864),Ad(e,67108864)}}function m_(e){if(e.tag===13||e.tag===31){var n=ai();n=tr(n);var a=sr(e,n);a!==null&&Kn(a,e,n),Ad(e,n)}}var pc=!0;function DM(e,n,a,o){var u=B.T;B.T=null;var d=Z.p;try{Z.p=2,Rd(e,n,a,o)}finally{Z.p=d,B.T=u}}function UM(e,n,a,o){var u=B.T;B.T=null;var d=Z.p;try{Z.p=8,Rd(e,n,a,o)}finally{Z.p=d,B.T=u}}function Rd(e,n,a,o){if(pc){var u=wd(o);if(u===null)hd(e,n,o,mc,a),__(e,o);else if(NM(u,e,n,a,o))o.stopPropagation();else if(__(e,o),n&4&&-1<LM.indexOf(e)){for(;u!==null;){var d=J(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=Rt(d.pendingLanes);if(M!==0){var U=d;for(U.pendingLanes|=2,U.entangledLanes|=2;M;){var k=1<<31-Pt(M);U.entanglements[1]|=k,M&=~k}Ii(d),(Pe&6)===0&&(Ql=A()+500,Ao(0))}}break;case 31:case 13:U=sr(d,2),U!==null&&Kn(U,d,2),$l(),Ad(d,2)}if(d=wd(o),d===null&&hd(e,n,o,mc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else hd(e,n,o,null,a)}}function wd(e){return e=Cu(e),Cd(e)}var mc=null;function Cd(e){if(mc=null,e=N(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mc=e,null}function g_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(at()){case _t:return 2;case Et:return 8;case ht:case jt:return 32;case Ot:return 268435456;default:return 32}default:return 32}}var Dd=!1,Pa=null,za=null,Ia=null,No=new Map,Oo=new Map,Ba=[],LM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function __(e,n){switch(e){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=J(n),n!==null&&p_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function NM(e,n,a,o,u){switch(n){case"focusin":return Pa=Po(Pa,e,n,a,o,u),!0;case"dragenter":return za=Po(za,e,n,a,o,u),!0;case"mouseover":return Ia=Po(Ia,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return No.set(d,Po(No.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Oo.set(d,Po(Oo.get(d)||null,e,n,a,o,u)),!0}return!1}function v_(e){var n=N(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,er(e.priority,function(){m_(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,er(e.priority,function(){m_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=wd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);wu=o,a.target.dispatchEvent(o),wu=null}else return n=J(a),n!==null&&p_(n),e.blockedOn=a,!1;n.shift()}return!0}function y_(e,n,a){gc(e)&&a.delete(n)}function OM(){Dd=!1,Pa!==null&&gc(Pa)&&(Pa=null),za!==null&&gc(za)&&(za=null),Ia!==null&&gc(Ia)&&(Ia=null),No.forEach(y_),Oo.forEach(y_)}function _c(e,n){e.blockedOn===n&&(e.blockedOn=null,Dd||(Dd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,OM)))}var vc=null;function S_(e){vc!==e&&(vc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){vc===e&&(vc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Cd(o||a)===null)continue;break}var d=J(a);d!==null&&(e.splice(n,3),n-=3,wf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ds(e){function n(k){return _c(k,e)}Pa!==null&&_c(Pa,e),za!==null&&_c(za,e),Ia!==null&&_c(Ia,e),No.forEach(n),Oo.forEach(n);for(var a=0;a<Ba.length;a++){var o=Ba[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)v_(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],M=u[bn]||null;if(typeof d=="function")M||S_(a);else if(M){var U=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[bn]||null)U=M.formAction;else if(Cd(u)!==null)continue}else U=M.action;typeof U=="function"?a[o+1]=U:(a.splice(o,3),o-=3),S_(a)}}}function M_(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(M){return u=M})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ud(e){this._internalRoot=e}yc.prototype.render=Ud.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ai();d_(a,o,e,n,null,null)},yc.prototype.unmount=Ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;d_(e.current,2,null,e,null,null),$l(),n[Xi]=null}};function yc(e){this._internalRoot=e}yc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ws();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&v_(e)}};var x_=t.version;if(x_!=="19.2.7")throw Error(r(527,x_,"19.2.7"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var PM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{gt=Sc.inject(PM),wt=Sc}catch{}}return zo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Cg,d=Dg,M=Ug;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=u_(e,1,!1,null,null,a,o,null,u,d,M,M_),e[Xi]=n.current,dd(e),new Ud(n)},zo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",d=Cg,M=Dg,U=Ug,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(U=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=u_(e,1,!0,n,a??null,o,u,k,d,M,U,M_),n.context=f_(null),a=n.current,o=ai(),o=tr(o),u=Ea(o),u.callback=null,ba(a,u,o),a=o,n.current.lanes=a,En(n,a),Ii(n),e[Xi]=n.current,dd(e),new yc(n)},zo.version="19.2.7",zo}var D_;function XM(){if(D_)return Nd.exports;D_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Nd.exports=kM(),Nd.exports}var WM=XM();const Cr={name:"Alisa Pechorina",email:"disaster.woman007@gmail.com",github:"https://github.com/DisasterWoman",headline:"Designing interfaces that feel alive.",summary:"Frontend engineer focused on modern SaaS applications, immersive Three.js experiences and product interfaces where interaction becomes part of the story."},Zv=`mailto:${Cr.email}?subject=Frontend%20Developer%20React%20Three.js%20Opportunity`,qM=[{label:"3D",href:"/3d"},{label:"Build",href:"/#build"},{label:"Experience",href:"/#experience"},{label:"Stack",href:"/#stack"},{label:"Contact",href:"/#contact"}];function YM(){return P.createElement("nav",{className:"topbar","aria-label":"Portfolio navigation"},P.createElement("a",{className:"brand",href:"/"},P.createElement("span",null,"AP"),Cr.name),P.createElement("div",{className:"navLinks"},qM.map(s=>P.createElement("a",{key:s.href,href:s.href},s.label))))}const jM=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kv=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim();var ZM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const KM=Ce.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...h},p)=>Ce.createElement("svg",{ref:p,...ZM,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:Kv("lucide",l),...h},[...f.map(([m,v])=>Ce.createElement(m,v)),...Array.isArray(c)?c:[c]]));const Li=(s,t)=>{const i=Ce.forwardRef(({className:r,...l},c)=>Ce.createElement(KM,{ref:c,iconNode:t,className:Kv(`lucide-${jM(s)}`,r),...l}));return i.displayName=`${s}`,i};const U_=Li("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);const L_=Li("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);const QM=Li("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);const yh=Li("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);const Sh=Li("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);const JM=Li("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);const $M=Li("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);const Mh=Li("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);const tx=Li("Satellite",[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]]);const Qv=Li("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const ex=Li("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Us({children:s,href:t,variant:i="primary",...r}){return P.createElement("a",{className:`button button--${i}`,href:t,...r},s)}const mp="178",nx=0,N_=1,ix=2,Jv=1,$v=2,ha=3,Qa=0,Qn=1,wi=2,ja=0,Ns=1,ru=2,O_=3,P_=4,ax=5,Rr=100,rx=101,sx=102,ox=103,lx=104,cx=200,ux=201,fx=202,dx=203,xh=204,Eh=205,hx=206,px=207,mx=208,gx=209,_x=210,vx=211,yx=212,Sx=213,Mx=214,bh=0,Th=1,Ah=2,zs=3,Rh=4,wh=5,Ch=6,Dh=7,ty=0,xx=1,Ex=2,Za=0,bx=1,Tx=2,Ax=3,Rx=4,wx=5,Cx=6,Dx=7,ey=300,Is=301,Bs=302,Uh=303,Lh=304,yu=306,su=1e3,Ya=1001,Nh=1002,Di=1003,Ux=1004,Mc=1005,Hi=1006,Id=1007,Dr=1008,Vi=1009,ny=1010,iy=1011,Zo=1012,gp=1013,Ur=1014,pa=1015,il=1016,_p=1017,vp=1018,Ko=1020,ay=35902,ry=1021,sy=1022,Ci=1023,Qo=1026,Jo=1027,oy=1028,yp=1029,ly=1030,Sp=1031,Mp=1033,Jc=33776,$c=33777,tu=33778,eu=33779,Oh=35840,Ph=35841,zh=35842,Ih=35843,Bh=36196,Fh=37492,Hh=37496,Gh=37808,Vh=37809,kh=37810,Xh=37811,Wh=37812,qh=37813,Yh=37814,jh=37815,Zh=37816,Kh=37817,Qh=37818,Jh=37819,$h=37820,tp=37821,nu=36492,ep=36494,np=36495,cy=36283,ip=36284,ap=36285,rp=36286,Lx=3200,Nx=3201,uy=0,Ox=1,qa="",Gn="srgb",Fs="srgb-linear",ou="linear",Xe="srgb",hs=7680,z_=519,Px=512,zx=513,Ix=514,fy=515,Bx=516,Fx=517,Hx=518,Gx=519,sp=35044,I_="300 es",ma=2e3,lu=2001;class Gs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],iu=Math.PI/180,op=180/Math.PI;function Ka(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function Me(s,t,i){return Math.max(t,Math.min(i,s))}function Vx(s,t){return(s%t+t)%t}function Bd(s,t,i){return(1-i)*s+i*t}function Fi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function We(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ue{constructor(t=0,i=0){ue.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class al{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,h){let p=r[l+0],m=r[l+1],v=r[l+2],_=r[l+3];const y=c[f+0],x=c[f+1],E=c[f+2],b=c[f+3];if(h===0){t[i+0]=p,t[i+1]=m,t[i+2]=v,t[i+3]=_;return}if(h===1){t[i+0]=y,t[i+1]=x,t[i+2]=E,t[i+3]=b;return}if(_!==b||p!==y||m!==x||v!==E){let S=1-h;const g=p*y+m*x+v*E+_*b,T=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const H=Math.sqrt(D),O=Math.atan2(H,g*T);S=Math.sin(S*O)/H,h=Math.sin(h*O)/H}const R=h*T;if(p=p*S+y*R,m=m*S+x*R,v=v*S+E*R,_=_*S+b*R,S===1-h){const H=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=H,m*=H,v*=H,_*=H}}t[i]=p,t[i+1]=m,t[i+2]=v,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,f){const h=r[l],p=r[l+1],m=r[l+2],v=r[l+3],_=c[f],y=c[f+1],x=c[f+2],E=c[f+3];return t[i]=h*E+v*_+p*x-m*y,t[i+1]=p*E+v*y+m*_-h*x,t[i+2]=m*E+v*x+h*y-p*_,t[i+3]=v*E-h*_-p*y-m*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(r/2),v=h(l/2),_=h(c/2),y=p(r/2),x=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=y*v*_+m*x*E,this._y=m*x*_-y*v*E,this._z=m*v*E+y*x*_,this._w=m*v*_-y*x*E;break;case"YXZ":this._x=y*v*_+m*x*E,this._y=m*x*_-y*v*E,this._z=m*v*E-y*x*_,this._w=m*v*_+y*x*E;break;case"ZXY":this._x=y*v*_-m*x*E,this._y=m*x*_+y*v*E,this._z=m*v*E+y*x*_,this._w=m*v*_-y*x*E;break;case"ZYX":this._x=y*v*_-m*x*E,this._y=m*x*_+y*v*E,this._z=m*v*E-y*x*_,this._w=m*v*_+y*x*E;break;case"YZX":this._x=y*v*_+m*x*E,this._y=m*x*_+y*v*E,this._z=m*v*E-y*x*_,this._w=m*v*_-y*x*E;break;case"XZY":this._x=y*v*_-m*x*E,this._y=m*x*_-y*v*E,this._z=m*v*E+y*x*_,this._w=m*v*_+y*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],p=i[9],m=i[2],v=i[6],_=i[10],y=r+h+_;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(v-p)*x,this._y=(c-m)*x,this._z=(f-l)*x}else if(r>h&&r>_){const x=2*Math.sqrt(1+r-h-_);this._w=(v-p)/x,this._x=.25*x,this._y=(l+f)/x,this._z=(c+m)/x}else if(h>_){const x=2*Math.sqrt(1+h-r-_);this._w=(c-m)/x,this._x=(l+f)/x,this._y=.25*x,this._z=(p+v)/x}else{const x=2*Math.sqrt(1+_-r-h);this._w=(f-l)/x,this._x=(c+m)/x,this._y=(p+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,h=i._x,p=i._y,m=i._z,v=i._w;return this._x=r*v+f*h+l*m-c*p,this._y=l*v+f*p+c*h-r*m,this._z=c*v+f*m+r*p-l*h,this._w=f*v-r*h-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const x=1-i;return this._w=x*f+i*this._w,this._x=x*r+i*this._x,this._y=x*l+i*this._y,this._z=x*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,h),_=Math.sin((1-i)*v)/m,y=Math.sin(i*v)/m;return this._w=f*_+this._w*y,this._x=r*_+this._x*y,this._y=l*_+this._y*y,this._z=c*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,i=0,r=0){W.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(B_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(B_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*l-h*r),v=2*(h*i-c*l),_=2*(c*r-f*i);return this.x=i+p*m+f*_-h*v,this.y=r+p*v+h*m-c*_,this.z=l+p*_+c*v-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*f-r*p,this.z=r*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Fd.copy(this).projectOnVector(t),this.sub(Fd)}reflect(t){return this.sub(Fd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fd=new W,B_=new al;class me{constructor(t,i,r,l,c,f,h,p,m){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,h,p,m)}set(t,i,r,l,c,f,h,p,m){const v=this.elements;return v[0]=t,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=p,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],p=r[6],m=r[1],v=r[4],_=r[7],y=r[2],x=r[5],E=r[8],b=l[0],S=l[3],g=l[6],T=l[1],D=l[4],R=l[7],H=l[2],O=l[5],L=l[8];return c[0]=f*b+h*T+p*H,c[3]=f*S+h*D+p*O,c[6]=f*g+h*R+p*L,c[1]=m*b+v*T+_*H,c[4]=m*S+v*D+_*O,c[7]=m*g+v*R+_*L,c[2]=y*b+x*T+E*H,c[5]=y*S+x*D+E*O,c[8]=y*g+x*R+E*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],v=t[8];return i*f*v-i*h*m-r*c*v+r*h*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],v=t[8],_=v*f-h*m,y=h*p-v*c,x=m*c-f*p,E=i*_+r*y+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=_*b,t[1]=(l*m-v*r)*b,t[2]=(h*r-l*f)*b,t[3]=y*b,t[4]=(v*i-l*p)*b,t[5]=(l*c-h*i)*b,t[6]=x*b,t[7]=(r*p-m*i)*b,t[8]=(f*i-r*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*h)+f+t,-l*m,l*p,-l*(-m*f+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Hd.makeScale(t,i)),this}rotate(t){return this.premultiply(Hd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Hd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hd=new me;function dy(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function cu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function kx(){const s=cu("canvas");return s.style.display="block",s}const F_={};function Os(s){s in F_||(F_[s]=!0,console.warn(s))}function Xx(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function Wx(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qx(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const H_=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),G_=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yx(){const s={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Xe&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Xe&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===qa?ou:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Os("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Os("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Fs]:{primaries:t,whitePoint:r,transfer:ou,toXYZ:H_,fromXYZ:G_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:H_,fromXYZ:G_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),s}const Oe=Yx();function ga(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ps;class jx{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ps===void 0&&(ps=cu("canvas")),ps.width=t.width,ps.height=t.height;const l=ps.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ps}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=cu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ga(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ga(i[r]/255)*255):i[r]=ga(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zx=0;class xp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=Ka(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Gd(l[f].image)):c.push(Gd(l[f]))}else c=Gd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Gd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kx=0;const Vd=new W;class kn extends Gs{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,r=Ya,l=Ya,c=Hi,f=Dr,h=Ci,p=Vi,m=kn.DEFAULT_ANISOTROPY,v=qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Ka(),this.name="",this.source=new xp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vd).x}get height(){return this.source.getSize(Vd).y}get depth(){return this.source.getSize(Vd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ey)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case su:t.x=t.x-Math.floor(t.x);break;case Ya:t.x=t.x<0?0:1;break;case Nh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case su:t.y=t.y-Math.floor(t.y);break;case Ya:t.y=t.y<0?0:1;break;case Nh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=ey;kn.DEFAULT_ANISOTROPY=1;class qe{constructor(t=0,i=0,r=0,l=1){qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const p=t.elements,m=p[0],v=p[4],_=p[8],y=p[1],x=p[5],E=p[9],b=p[2],S=p[6],g=p[10];if(Math.abs(v-y)<.01&&Math.abs(_-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+y)<.1&&Math.abs(_+b)<.1&&Math.abs(E+S)<.1&&Math.abs(m+x+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(m+1)/2,R=(x+1)/2,H=(g+1)/2,O=(v+y)/4,L=(_+b)/4,z=(E+S)/4;return D>R&&D>H?D<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(D),l=O/r,c=L/r):R>H?R<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(R),r=O/l,c=z/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=L/c,l=z/c),this.set(r,l,c,i),this}let T=Math.sqrt((S-E)*(S-E)+(_-b)*(_-b)+(y-v)*(y-v));return Math.abs(T)<.001&&(T=1),this.x=(S-E)/T,this.y=(_-b)/T,this.z=(y-v)/T,this.w=Math.acos((m+x+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this.w=Me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this.w=Me(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qx extends Gs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new qe(0,0,t,i),this.scissorTest=!1,this.viewport=new qe(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new kn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new xp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends Qx{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class hy extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Di,this.minFilter=Di,this.wrapR=Ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jx extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Di,this.minFilter=Di,this.wrapR=Ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl{constructor(t=new W(1/0,1/0,1/0),i=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ti.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ti.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ti.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ti):Ti.fromBufferAttribute(c,f),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),xc.copy(r.boundingBox)),xc.applyMatrix4(t.matrixWorld),this.union(xc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Io),Ec.subVectors(this.max,Io),ms.subVectors(t.a,Io),gs.subVectors(t.b,Io),_s.subVectors(t.c,Io),Ha.subVectors(gs,ms),Ga.subVectors(_s,gs),yr.subVectors(ms,_s);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-yr.z,yr.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,yr.z,0,-yr.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-yr.y,yr.x,0];return!kd(i,ms,gs,_s,Ec)||(i=[1,0,0,0,1,0,0,0,1],!kd(i,ms,gs,_s,Ec))?!1:(bc.crossVectors(Ha,Ga),i=[bc.x,bc.y,bc.z],kd(i,ms,gs,_s,Ec))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(la),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const la=[new W,new W,new W,new W,new W,new W,new W,new W],Ti=new W,xc=new rl,ms=new W,gs=new W,_s=new W,Ha=new W,Ga=new W,yr=new W,Io=new W,Ec=new W,bc=new W,Sr=new W;function kd(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Sr.fromArray(s,c);const h=l.x*Math.abs(Sr.x)+l.y*Math.abs(Sr.y)+l.z*Math.abs(Sr.z),p=t.dot(Sr),m=i.dot(Sr),v=r.dot(Sr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>h)return!1}return!0}const $x=new rl,Bo=new W,Xd=new W;class sl{constructor(t=new W,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):$x.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Bo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(Xd)),this.expandByPoint(Bo.copy(t.center).sub(Xd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ca=new W,Wd=new W,Tc=new W,Va=new W,qd=new W,Ac=new W,Yd=new W;class Su{constructor(t=new W,i=new W(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ca)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ca.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Wd.copy(t).add(i).multiplyScalar(.5),Tc.copy(i).sub(t).normalize(),Va.copy(this.origin).sub(Wd);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Tc),h=Va.dot(this.direction),p=-Va.dot(Tc),m=Va.lengthSq(),v=Math.abs(1-f*f);let _,y,x,E;if(v>0)if(_=f*p-h,y=f*h-p,E=c*v,_>=0)if(y>=-E)if(y<=E){const b=1/v;_*=b,y*=b,x=_*(_+f*y+2*h)+y*(f*_+y+2*p)+m}else y=c,_=Math.max(0,-(f*y+h)),x=-_*_+y*(y+2*p)+m;else y=-c,_=Math.max(0,-(f*y+h)),x=-_*_+y*(y+2*p)+m;else y<=-E?(_=Math.max(0,-(-f*c+h)),y=_>0?-c:Math.min(Math.max(-c,-p),c),x=-_*_+y*(y+2*p)+m):y<=E?(_=0,y=Math.min(Math.max(-c,-p),c),x=y*(y+2*p)+m):(_=Math.max(0,-(f*c+h)),y=_>0?c:Math.min(Math.max(-c,-p),c),x=-_*_+y*(y+2*p)+m);else y=f>0?-c:c,_=Math.max(0,-(f*y+h)),x=-_*_+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Wd).addScaledVector(Tc,y),x}intersectSphere(t,i){ca.subVectors(t.center,this.origin);const r=ca.dot(this.direction),l=ca.dot(ca)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,p=r+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,h,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,y=this.origin;return m>=0?(r=(t.min.x-y.x)*m,l=(t.max.x-y.x)*m):(r=(t.max.x-y.x)*m,l=(t.min.x-y.x)*m),v>=0?(c=(t.min.y-y.y)*v,f=(t.max.y-y.y)*v):(c=(t.max.y-y.y)*v,f=(t.min.y-y.y)*v),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-y.z)*_,p=(t.max.z-y.z)*_):(h=(t.max.z-y.z)*_,p=(t.min.z-y.z)*_),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ca)!==null}intersectTriangle(t,i,r,l,c){qd.subVectors(i,t),Ac.subVectors(r,t),Yd.crossVectors(qd,Ac);let f=this.direction.dot(Yd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Va.subVectors(this.origin,t);const p=h*this.direction.dot(Ac.crossVectors(Va,Ac));if(p<0)return null;const m=h*this.direction.dot(qd.cross(Va));if(m<0||p+m>f)return null;const v=-h*Va.dot(Yd);return v<0?null:this.at(v/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(t,i,r,l,c,f,h,p,m,v,_,y,x,E,b,S){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,h,p,m,v,_,y,x,E,b,S)}set(t,i,r,l,c,f,h,p,m,v,_,y,x,E,b,S){const g=this.elements;return g[0]=t,g[4]=i,g[8]=r,g[12]=l,g[1]=c,g[5]=f,g[9]=h,g[13]=p,g[2]=m,g[6]=v,g[10]=_,g[14]=y,g[3]=x,g[7]=E,g[11]=b,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/vs.setFromMatrixColumn(t,0).length(),c=1/vs.setFromMatrixColumn(t,1).length(),f=1/vs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const y=f*v,x=f*_,E=h*v,b=h*_;i[0]=p*v,i[4]=-p*_,i[8]=m,i[1]=x+E*m,i[5]=y-b*m,i[9]=-h*p,i[2]=b-y*m,i[6]=E+x*m,i[10]=f*p}else if(t.order==="YXZ"){const y=p*v,x=p*_,E=m*v,b=m*_;i[0]=y+b*h,i[4]=E*h-x,i[8]=f*m,i[1]=f*_,i[5]=f*v,i[9]=-h,i[2]=x*h-E,i[6]=b+y*h,i[10]=f*p}else if(t.order==="ZXY"){const y=p*v,x=p*_,E=m*v,b=m*_;i[0]=y-b*h,i[4]=-f*_,i[8]=E+x*h,i[1]=x+E*h,i[5]=f*v,i[9]=b-y*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(t.order==="ZYX"){const y=f*v,x=f*_,E=h*v,b=h*_;i[0]=p*v,i[4]=E*m-x,i[8]=y*m+b,i[1]=p*_,i[5]=b*m+y,i[9]=x*m-E,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(t.order==="YZX"){const y=f*p,x=f*m,E=h*p,b=h*m;i[0]=p*v,i[4]=b-y*_,i[8]=E*_+x,i[1]=_,i[5]=f*v,i[9]=-h*v,i[2]=-m*v,i[6]=x*_+E,i[10]=y-b*_}else if(t.order==="XZY"){const y=f*p,x=f*m,E=h*p,b=h*m;i[0]=p*v,i[4]=-_,i[8]=m*v,i[1]=y*_+b,i[5]=f*v,i[9]=x*_-E,i[2]=E*_-x,i[6]=h*v,i[10]=b*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tE,t,eE)}lookAt(t,i,r){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),ka.crossVectors(r,ri),ka.lengthSq()===0&&(Math.abs(r.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),ka.crossVectors(r,ri)),ka.normalize(),Rc.crossVectors(ri,ka),l[0]=ka.x,l[4]=Rc.x,l[8]=ri.x,l[1]=ka.y,l[5]=Rc.y,l[9]=ri.y,l[2]=ka.z,l[6]=Rc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],p=r[8],m=r[12],v=r[1],_=r[5],y=r[9],x=r[13],E=r[2],b=r[6],S=r[10],g=r[14],T=r[3],D=r[7],R=r[11],H=r[15],O=l[0],L=l[4],z=l[8],C=l[12],w=l[1],G=l[5],$=l[9],Y=l[13],et=l[2],lt=l[6],B=l[10],Z=l[14],j=l[3],St=l[7],Tt=l[11],I=l[15];return c[0]=f*O+h*w+p*et+m*j,c[4]=f*L+h*G+p*lt+m*St,c[8]=f*z+h*$+p*B+m*Tt,c[12]=f*C+h*Y+p*Z+m*I,c[1]=v*O+_*w+y*et+x*j,c[5]=v*L+_*G+y*lt+x*St,c[9]=v*z+_*$+y*B+x*Tt,c[13]=v*C+_*Y+y*Z+x*I,c[2]=E*O+b*w+S*et+g*j,c[6]=E*L+b*G+S*lt+g*St,c[10]=E*z+b*$+S*B+g*Tt,c[14]=E*C+b*Y+S*Z+g*I,c[3]=T*O+D*w+R*et+H*j,c[7]=T*L+D*G+R*lt+H*St,c[11]=T*z+D*$+R*B+H*Tt,c[15]=T*C+D*Y+R*Z+H*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],h=t[5],p=t[9],m=t[13],v=t[2],_=t[6],y=t[10],x=t[14],E=t[3],b=t[7],S=t[11],g=t[15];return E*(+c*p*_-l*m*_-c*h*y+r*m*y+l*h*x-r*p*x)+b*(+i*p*x-i*m*y+c*f*y-l*f*x+l*m*v-c*p*v)+S*(+i*m*_-i*h*x-c*f*_+r*f*x+c*h*v-r*m*v)+g*(-l*h*v-i*p*_+i*h*y+l*f*_-r*f*y+r*p*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],v=t[8],_=t[9],y=t[10],x=t[11],E=t[12],b=t[13],S=t[14],g=t[15],T=_*S*m-b*y*m+b*p*x-h*S*x-_*p*g+h*y*g,D=E*y*m-v*S*m-E*p*x+f*S*x+v*p*g-f*y*g,R=v*b*m-E*_*m+E*h*x-f*b*x-v*h*g+f*_*g,H=E*_*p-v*b*p-E*h*y+f*b*y+v*h*S-f*_*S,O=i*T+r*D+l*R+c*H;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/O;return t[0]=T*L,t[1]=(b*y*c-_*S*c-b*l*x+r*S*x+_*l*g-r*y*g)*L,t[2]=(h*S*c-b*p*c+b*l*m-r*S*m-h*l*g+r*p*g)*L,t[3]=(_*p*c-h*y*c-_*l*m+r*y*m+h*l*x-r*p*x)*L,t[4]=D*L,t[5]=(v*S*c-E*y*c+E*l*x-i*S*x-v*l*g+i*y*g)*L,t[6]=(E*p*c-f*S*c-E*l*m+i*S*m+f*l*g-i*p*g)*L,t[7]=(f*y*c-v*p*c+v*l*m-i*y*m-f*l*x+i*p*x)*L,t[8]=R*L,t[9]=(E*_*c-v*b*c-E*r*x+i*b*x+v*r*g-i*_*g)*L,t[10]=(f*b*c-E*h*c+E*r*m-i*b*m-f*r*g+i*h*g)*L,t[11]=(v*h*c-f*_*c-v*r*m+i*_*m+f*r*x-i*h*x)*L,t[12]=H*L,t[13]=(v*b*l-E*_*l+E*r*y-i*b*y-v*r*S+i*_*S)*L,t[14]=(E*h*l-f*b*l-E*r*p+i*b*p+f*r*S-i*h*S)*L,t[15]=(f*_*l-v*h*l+v*r*p-i*_*p-f*r*y+i*h*y)*L,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,h=t.y,p=t.z,m=c*f,v=c*h;return this.set(m*f+r,m*h-l*p,m*p+l*h,0,m*h+l*p,v*h+r,v*p-l*f,0,m*p-l*h,v*p+l*f,c*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,p=i._w,m=c+c,v=f+f,_=h+h,y=c*m,x=c*v,E=c*_,b=f*v,S=f*_,g=h*_,T=p*m,D=p*v,R=p*_,H=r.x,O=r.y,L=r.z;return l[0]=(1-(b+g))*H,l[1]=(x+R)*H,l[2]=(E-D)*H,l[3]=0,l[4]=(x-R)*O,l[5]=(1-(y+g))*O,l[6]=(S+T)*O,l[7]=0,l[8]=(E+D)*L,l[9]=(S-T)*L,l[10]=(1-(y+b))*L,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=vs.set(l[0],l[1],l[2]).length();const f=vs.set(l[4],l[5],l[6]).length(),h=vs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ai.copy(this);const m=1/c,v=1/f,_=1/h;return Ai.elements[0]*=m,Ai.elements[1]*=m,Ai.elements[2]*=m,Ai.elements[4]*=v,Ai.elements[5]*=v,Ai.elements[6]*=v,Ai.elements[8]*=_,Ai.elements[9]*=_,Ai.elements[10]*=_,i.setFromRotationMatrix(Ai),r.x=c,r.y=f,r.z=h,this}makePerspective(t,i,r,l,c,f,h=ma){const p=this.elements,m=2*c/(i-t),v=2*c/(r-l),_=(i+t)/(i-t),y=(r+l)/(r-l);let x,E;if(h===ma)x=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===lu)x=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=x,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,f,h=ma){const p=this.elements,m=1/(i-t),v=1/(r-l),_=1/(f-c),y=(i+t)*m,x=(r+l)*v;let E,b;if(h===ma)E=(f+c)*_,b=-2*_;else if(h===lu)E=c*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-x,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const vs=new W,Ai=new Ze,tE=new W(0,0,0),eE=new W(1,1,1),ka=new W,Rc=new W,ri=new W,V_=new Ze,k_=new al;class ki{constructor(t=0,i=0,r=0,l=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],p=l[1],m=l[5],v=l[9],_=l[2],y=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return V_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(V_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return k_.setFromEuler(this),this.setFromQuaternion(k_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class Ep{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nE=0;const X_=new W,ys=new al,ua=new Ze,wc=new W,Fo=new W,iE=new W,aE=new al,W_=new W(1,0,0),q_=new W(0,1,0),Y_=new W(0,0,1),j_={type:"added"},rE={type:"removed"},Ss={type:"childadded",child:null},jd={type:"childremoved",child:null};class _n extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=Ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const t=new W,i=new ki,r=new al,l=new W(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new me}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ep,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ys.setFromAxisAngle(t,i),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,i){return ys.setFromAxisAngle(t,i),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(W_,t)}rotateY(t){return this.rotateOnAxis(q_,t)}rotateZ(t){return this.rotateOnAxis(Y_,t)}translateOnAxis(t,i){return X_.copy(t).applyQuaternion(this.quaternion),this.position.add(X_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(W_,t)}translateY(t){return this.translateOnAxis(q_,t)}translateZ(t){return this.translateOnAxis(Y_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?wc.copy(t):wc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Fo,wc,this.up):ua.lookAt(wc,Fo,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),ys.setFromRotationMatrix(ua),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(j_),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(rE),jd.child=t,this.dispatchEvent(jd),jd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(j_),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,iE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,aE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(t.animations,p))}}if(i){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),v=f(t.images),_=f(t.shapes),y=f(t.skeletons),x=f(t.animations),E=f(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const p=[];for(const m in h){const v=h[m];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}_n.DEFAULT_UP=new W(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new W,fa=new W,Zd=new W,da=new W,Ms=new W,xs=new W,Z_=new W,Kd=new W,Qd=new W,Jd=new W,$d=new qe,th=new qe,eh=new qe;class oi{constructor(t=new W,i=new W,r=new W){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ri.subVectors(t,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ri.subVectors(l,i),fa.subVectors(r,i),Zd.subVectors(t,i);const f=Ri.dot(Ri),h=Ri.dot(fa),p=Ri.dot(Zd),m=fa.dot(fa),v=fa.dot(Zd),_=f*m-h*h;if(_===0)return c.set(0,0,0),null;const y=1/_,x=(m*p-h*v)*y,E=(f*v-h*p)*y;return c.set(1-x-E,E,x)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(t,i,r,l,c,f,h,p){return this.getBarycoord(t,i,r,l,da)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,da.x),p.addScaledVector(f,da.y),p.addScaledVector(h,da.z),p)}static getInterpolatedAttribute(t,i,r,l,c,f){return $d.setScalar(0),th.setScalar(0),eh.setScalar(0),$d.fromBufferAttribute(t,i),th.fromBufferAttribute(t,r),eh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector($d,c.x),f.addScaledVector(th,c.y),f.addScaledVector(eh,c.z),f}static isFrontFacing(t,i,r,l){return Ri.subVectors(r,i),fa.subVectors(t,i),Ri.cross(fa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ri.cross(fa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return oi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return oi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,h;Ms.subVectors(l,r),xs.subVectors(c,r),Kd.subVectors(t,r);const p=Ms.dot(Kd),m=xs.dot(Kd);if(p<=0&&m<=0)return i.copy(r);Qd.subVectors(t,l);const v=Ms.dot(Qd),_=xs.dot(Qd);if(v>=0&&_<=v)return i.copy(l);const y=p*_-v*m;if(y<=0&&p>=0&&v<=0)return f=p/(p-v),i.copy(r).addScaledVector(Ms,f);Jd.subVectors(t,c);const x=Ms.dot(Jd),E=xs.dot(Jd);if(E>=0&&x<=E)return i.copy(c);const b=x*m-p*E;if(b<=0&&m>=0&&E<=0)return h=m/(m-E),i.copy(r).addScaledVector(xs,h);const S=v*E-x*_;if(S<=0&&_-v>=0&&x-E>=0)return Z_.subVectors(c,l),h=(_-v)/(_-v+(x-E)),i.copy(l).addScaledVector(Z_,h);const g=1/(S+b+y);return f=b*g,h=y*g,i.copy(r).addScaledVector(Ms,f).addScaledVector(xs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const py={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function nh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class ve{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Oe.workingColorSpace){return this.r=t,this.g=i,this.b=r,Oe.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Oe.workingColorSpace){if(t=Vx(t,1),i=Me(i,0,1),r=Me(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=nh(f,c,t+1/3),this.g=nh(f,c,t),this.b=nh(f,c,t-1/3)}return Oe.colorSpaceToWorking(this,l),this}setStyle(t,i=Gn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Gn){const r=py[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Gn){return Oe.workingToColorSpace(Pn.copy(this),t),Math.round(Me(Pn.r*255,0,255))*65536+Math.round(Me(Pn.g*255,0,255))*256+Math.round(Me(Pn.b*255,0,255))}getHexString(t=Gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Oe.workingColorSpace){Oe.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,c=Pn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let p,m;const v=(h+f)/2;if(h===f)p=0,m=0;else{const _=f-h;switch(m=v<=.5?_/(f+h):_/(2-f-h),f){case r:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-r)/_+2;break;case c:p=(r-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=v,t}getRGB(t,i=Oe.workingColorSpace){return Oe.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=Gn){Oe.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,r=Pn.g,l=Pn.b;return t!==Gn?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Xa),this.setHSL(Xa.h+t,Xa.s+i,Xa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Xa),t.getHSL(Cc);const r=Bd(Xa.h,Cc.h,i),l=Bd(Xa.s,Cc.s,i),c=Bd(Xa.l,Cc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new ve;ve.NAMES=py;let sE=0;class $a extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=Ka(),this.name="",this.type="Material",this.blending=Ns,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=Eh,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(r.blending=this.blending),this.side!==Qa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==xh&&(r.blendSrc=this.blendSrc),this.blendDst!==Eh&&(r.blendDst=this.blendDst),this.blendEquation!==Rr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==z_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class li extends $a{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=ty,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const mn=new W,Dc=new ue;let oE=0;class Dn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=sp,this.updateRanges=[],this.gpuType=pa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(t),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Fi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=We(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Fi(i,this.array)),i}setX(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Fi(i,this.array)),i}setY(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Fi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Fi(i,this.array)),i}setW(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),r=We(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array),c=We(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sp&&(t.usage=this.usage),t}}class my extends Dn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class gy extends Dn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class tn extends Dn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let lE=0;const vi=new Ze,ih=new _n,Es=new W,si=new rl,Ho=new rl,xn=new W;class ln extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=Ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dy(t)?gy:my)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new me().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,i,r){return vi.makeTranslation(t,i,r),this.applyMatrix4(vi),this}scale(t,i,r){return vi.makeScale(t,i,r),this.applyMatrix4(vi),this}lookAt(t){return ih.lookAt(t),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new tn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];si.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const r=this.boundingSphere.center;if(si.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Ho.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors(si.min,Ho.min),si.expandByPoint(xn),xn.addVectors(si.max,Ho.max),si.expandByPoint(xn)):(si.expandByPoint(Ho.min),si.expandByPoint(Ho.max))}si.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)xn.fromBufferAttribute(h,m),p&&(Es.fromBufferAttribute(t,m),xn.add(Es)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let z=0;z<r.count;z++)h[z]=new W,p[z]=new W;const m=new W,v=new W,_=new W,y=new ue,x=new ue,E=new ue,b=new W,S=new W;function g(z,C,w){m.fromBufferAttribute(r,z),v.fromBufferAttribute(r,C),_.fromBufferAttribute(r,w),y.fromBufferAttribute(c,z),x.fromBufferAttribute(c,C),E.fromBufferAttribute(c,w),v.sub(m),_.sub(m),x.sub(y),E.sub(y);const G=1/(x.x*E.y-E.x*x.y);isFinite(G)&&(b.copy(v).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(G),S.copy(_).multiplyScalar(x.x).addScaledVector(v,-E.x).multiplyScalar(G),h[z].add(b),h[C].add(b),h[w].add(b),p[z].add(S),p[C].add(S),p[w].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let z=0,C=T.length;z<C;++z){const w=T[z],G=w.start,$=w.count;for(let Y=G,et=G+$;Y<et;Y+=3)g(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const D=new W,R=new W,H=new W,O=new W;function L(z){H.fromBufferAttribute(l,z),O.copy(H);const C=h[z];D.copy(C),D.sub(H.multiplyScalar(H.dot(C))).normalize(),R.crossVectors(O,C);const G=R.dot(p[z])<0?-1:1;f.setXYZW(z,D.x,D.y,D.z,G)}for(let z=0,C=T.length;z<C;++z){const w=T[z],G=w.start,$=w.count;for(let Y=G,et=G+$;Y<et;Y+=3)L(t.getX(Y+0)),L(t.getX(Y+1)),L(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Dn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,x=r.count;y<x;y++)r.setXYZ(y,0,0,0);const l=new W,c=new W,f=new W,h=new W,p=new W,m=new W,v=new W,_=new W;if(t)for(let y=0,x=t.count;y<x;y+=3){const E=t.getX(y+0),b=t.getX(y+1),S=t.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,S),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,S),h.add(v),p.add(v),m.add(v),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,x=i.count;y<x;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(h,p){const m=h.array,v=h.itemSize,_=h.normalized,y=new m.constructor(p.length*v);let x=0,E=0;for(let b=0,S=p.length;b<S;b++){h.isInterleavedBufferAttribute?x=p[b]*h.data.stride+h.offset:x=p[b]*v;for(let g=0;g<v;g++)y[E++]=m[x++]}return new Dn(y,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ln,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,r);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let v=0,_=m.length;v<_;v++){const y=m[v],x=t(y,r);p.push(x)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,y=m.length;_<y;_++){const x=m[_];v.push(x.toJSON(t.data))}v.length>0&&(l[p]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const c=t.morphAttributes;for(const m in c){const v=[],_=c[m];for(let y=0,x=_.length;y<x;y++)v.push(_[y].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,v=f.length;m<v;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const K_=new Ze,Mr=new Su,Uc=new sl,Q_=new W,Lc=new W,Nc=new W,Oc=new W,ah=new W,Pc=new W,J_=new W,zc=new W;class $e extends _n{constructor(t=new ln,i=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Pc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=h[p],_=c[p];v!==0&&(ah.fromBufferAttribute(_,t),f?Pc.addScaledVector(ah,v):Pc.addScaledVector(ah.sub(i),v))}i.add(Pc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Uc.copy(r.boundingSphere),Uc.applyMatrix4(c),Mr.copy(t.ray).recast(t.near),!(Uc.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Uc,Q_)===null||Mr.origin.distanceToSquared(Q_)>(t.far-t.near)**2))&&(K_.copy(c).invert(),Mr.copy(t.ray).applyMatrix4(K_),!(r.boundingBox!==null&&Mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Mr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,y=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,b=y.length;E<b;E++){const S=y[E],g=f[S.materialIndex],T=Math.max(S.start,x.start),D=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let R=T,H=D;R<H;R+=3){const O=h.getX(R),L=h.getX(R+1),z=h.getX(R+2);l=Ic(this,g,t,r,m,v,_,O,L,z),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),b=Math.min(h.count,x.start+x.count);for(let S=E,g=b;S<g;S+=3){const T=h.getX(S),D=h.getX(S+1),R=h.getX(S+2);l=Ic(this,f,t,r,m,v,_,T,D,R),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,b=y.length;E<b;E++){const S=y[E],g=f[S.materialIndex],T=Math.max(S.start,x.start),D=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let R=T,H=D;R<H;R+=3){const O=R,L=R+1,z=R+2;l=Ic(this,g,t,r,m,v,_,O,L,z),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),b=Math.min(p.count,x.start+x.count);for(let S=E,g=b;S<g;S+=3){const T=S,D=S+1,R=S+2;l=Ic(this,f,t,r,m,v,_,T,D,R),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function cE(s,t,i,r,l,c,f,h){let p;if(t.side===Qn?p=r.intersectTriangle(f,c,l,!0,h):p=r.intersectTriangle(l,c,f,t.side===Qa,h),p===null)return null;zc.copy(h),zc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(zc);return m<i.near||m>i.far?null:{distance:m,point:zc.clone(),object:s}}function Ic(s,t,i,r,l,c,f,h,p,m){s.getVertexPosition(h,Lc),s.getVertexPosition(p,Nc),s.getVertexPosition(m,Oc);const v=cE(s,t,i,r,Lc,Nc,Oc,J_);if(v){const _=new W;oi.getBarycoord(J_,Lc,Nc,Oc,_),l&&(v.uv=oi.getInterpolatedAttribute(l,h,p,m,_,new ue)),c&&(v.uv1=oi.getInterpolatedAttribute(c,h,p,m,_,new ue)),f&&(v.normal=oi.getInterpolatedAttribute(f,h,p,m,_,new W),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:h,b:p,c:m,normal:new W,materialIndex:0};oi.getNormal(Lc,Nc,Oc,y.normal),v.face=y,v.barycoord=_}return v}class ol extends ln{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],v=[],_=[];let y=0,x=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new tn(m,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(_,2));function E(b,S,g,T,D,R,H,O,L,z,C){const w=R/L,G=H/z,$=R/2,Y=H/2,et=O/2,lt=L+1,B=z+1;let Z=0,j=0;const St=new W;for(let Tt=0;Tt<B;Tt++){const I=Tt*G-Y;for(let nt=0;nt<lt;nt++){const pt=nt*w-$;St[b]=pt*T,St[S]=I*D,St[g]=et,m.push(St.x,St.y,St.z),St[b]=0,St[S]=0,St[g]=O>0?1:-1,v.push(St.x,St.y,St.z),_.push(nt/L),_.push(1-Tt/z),Z+=1}}for(let Tt=0;Tt<z;Tt++)for(let I=0;I<L;I++){const nt=y+I+lt*Tt,pt=y+I+lt*(Tt+1),K=y+(I+1)+lt*(Tt+1),dt=y+(I+1)+lt*Tt;p.push(nt,pt,dt),p.push(pt,K,dt),j+=6}h.addGroup(x,j,C),x+=j,y+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Hn(s){const t={};for(let i=0;i<s.length;i++){const r=Hs(s[i]);for(const l in r)t[l]=r[l]}return t}function uE(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function _y(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Oe.workingColorSpace}const fE={clone:Hs,merge:Hn};var dE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ja extends $a{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dE,this.fragmentShader=hE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=uE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class vy extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=ma}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wa=new W,$_=new ue,tv=new ue;class Vn extends vy{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=op*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(iu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return op*2*Math.atan(Math.tan(iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wa.x,Wa.y).multiplyScalar(-t/Wa.z),Wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Wa.x,Wa.y).multiplyScalar(-t/Wa.z)}getViewSize(t,i){return this.getViewBounds(t,$_,tv),i.subVectors(tv,$_)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(iu*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*r/m,l*=f.width/p,r*=f.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const bs=-90,Ts=1;class pE extends _n{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Vn(bs,Ts,t,i);l.layers=this.layers,this.add(l);const c=new Vn(bs,Ts,t,i);c.layers=this.layers,this.add(c);const f=new Vn(bs,Ts,t,i);f.layers=this.layers,this.add(f);const h=new Vn(bs,Ts,t,i);h.layers=this.layers,this.add(h);const p=new Vn(bs,Ts,t,i);p.layers=this.layers,this.add(p);const m=new Vn(bs,Ts,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,p]=i;for(const m of i)this.remove(m);if(t===ma)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===lu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,v]=this.children,_=t.getRenderTarget(),y=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=b,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(_,y,x),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class yy extends kn{constructor(t=[],i=Is,r,l,c,f,h,p,m,v){super(t,i,r,l,c,f,h,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mE extends Lr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new yy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ol(5,5,5),c=new Ja({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qn,blending:ja});c.uniforms.tEquirect.value=i;const f=new $e(l,c),h=i.minFilter;return i.minFilter===Dr&&(i.minFilter=Hi),new pE(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class ci extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gE={type:"move"};class rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const b of t.hand.values()){const S=i.getJointPose(b,r),g=this._getHandJoint(m,b);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],y=v.position.distanceTo(_.position),x=.02,E=.005;m.inputState.pinching&&y>x+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=x-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(gE)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new ci;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class bp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(t),this.density=i}clone(){return new bp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tp extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class _E{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=sp,this.updateRanges=[],this.version=0,this.uuid=Ka()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ka()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ka()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new W;class uu{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.applyMatrix4(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.applyNormalMatrix(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.transformDirection(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Fi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=We(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Fi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Fi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Fi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Fi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),r=We(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),r=We(r,this.array),l=We(l,this.array),c=We(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Dn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new uu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class fu extends $a{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let As;const Go=new W,Rs=new W,ws=new W,Cs=new ue,Vo=new ue,Sy=new Ze,Bc=new W,ko=new W,Fc=new W,ev=new ue,sh=new ue,nv=new ue;class lp extends _n{constructor(t=new fu){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new ln;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new _E(i,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new uu(r,3,0,!1)),As.setAttribute("uv",new uu(r,2,3,!1))}this.geometry=As,this.material=t,this.center=new ue(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),Sy.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-ws.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const f=this.center;Hc(Bc.set(-.5,-.5,0),ws,f,Rs,l,c),Hc(ko.set(.5,-.5,0),ws,f,Rs,l,c),Hc(Fc.set(.5,.5,0),ws,f,Rs,l,c),ev.set(0,0),sh.set(1,0),nv.set(1,1);let h=t.ray.intersectTriangle(Bc,ko,Fc,!1,Go);if(h===null&&(Hc(ko.set(-.5,.5,0),ws,f,Rs,l,c),sh.set(0,1),h=t.ray.intersectTriangle(Bc,Fc,ko,!1,Go),h===null))return;const p=t.ray.origin.distanceTo(Go);p<t.near||p>t.far||i.push({distance:p,point:Go.clone(),uv:oi.getInterpolation(Go,Bc,ko,Fc,ev,sh,nv,new ue),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Hc(s,t,i,r,l,c){Cs.subVectors(s,i).addScalar(.5).multiply(r),l!==void 0?(Vo.x=c*Cs.x-l*Cs.y,Vo.y=l*Cs.x+c*Cs.y):Vo.copy(Cs),s.copy(t),s.x+=Vo.x,s.y+=Vo.y,s.applyMatrix4(Sy)}const oh=new W,vE=new W,yE=new me;class Tr{constructor(t=new W(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=oh.subVectors(r,i).cross(vE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(oh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||yE.getNormalMatrix(t),l=this.coplanarPoint(oh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new sl,SE=new ue(.5,.5),Gc=new W;class Ap{constructor(t=new Tr,i=new Tr,r=new Tr,l=new Tr,c=new Tr,f=new Tr){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ma){const r=this.planes,l=t.elements,c=l[0],f=l[1],h=l[2],p=l[3],m=l[4],v=l[5],_=l[6],y=l[7],x=l[8],E=l[9],b=l[10],S=l[11],g=l[12],T=l[13],D=l[14],R=l[15];if(r[0].setComponents(p-c,y-m,S-x,R-g).normalize(),r[1].setComponents(p+c,y+m,S+x,R+g).normalize(),r[2].setComponents(p+f,y+v,S+E,R+T).normalize(),r[3].setComponents(p-f,y-v,S-E,R-T).normalize(),r[4].setComponents(p-h,y-_,S-b,R-D).normalize(),i===ma)r[5].setComponents(p+h,y+_,S+b,R+D).normalize();else if(i===lu)r[5].setComponents(h,_,b,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(t){xr.center.set(0,0,0);const i=SE.distanceTo(t.center);return xr.radius=.7071067811865476+i,xr.applyMatrix4(t.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Gc.x=l.normal.x>0?t.max.x:t.min.x,Gc.y=l.normal.y>0?t.max.y:t.min.y,Gc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class du extends $a{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const hu=new W,pu=new W,iv=new Ze,Xo=new Su,Vc=new sl,lh=new W,av=new W;class Rp extends _n{constructor(t=new ln,i=new du){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)hu.fromBufferAttribute(i,l-1),pu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=hu.distanceTo(pu);t.setAttribute("lineDistance",new tn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Vc.copy(r.boundingSphere),Vc.applyMatrix4(l),Vc.radius+=c,t.ray.intersectsSphere(Vc)===!1)return;iv.copy(l).invert(),Xo.copy(t.ray).applyMatrix4(iv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,v=r.index,y=r.attributes.position;if(v!==null){const x=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let b=x,S=E-1;b<S;b+=m){const g=v.getX(b),T=v.getX(b+1),D=kc(this,t,Xo,p,g,T,b);D&&i.push(D)}if(this.isLineLoop){const b=v.getX(E-1),S=v.getX(x),g=kc(this,t,Xo,p,b,S,E-1);g&&i.push(g)}}else{const x=Math.max(0,f.start),E=Math.min(y.count,f.start+f.count);for(let b=x,S=E-1;b<S;b+=m){const g=kc(this,t,Xo,p,b,b+1,b);g&&i.push(g)}if(this.isLineLoop){const b=kc(this,t,Xo,p,E-1,x,E-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function kc(s,t,i,r,l,c,f){const h=s.geometry.attributes.position;if(hu.fromBufferAttribute(h,l),pu.fromBufferAttribute(h,c),i.distanceSqToSegment(hu,pu,lh,av)>r)return;lh.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(lh);if(!(m<t.near||m>t.far))return{distance:m,point:av.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const rv=new W,sv=new W;class ME extends Rp{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)rv.fromBufferAttribute(i,l),sv.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+rv.distanceTo(sv);t.setAttribute("lineDistance",new tn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ll extends $a{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ov=new Ze,cp=new Su,Xc=new sl,Wc=new W;class Mu extends _n{constructor(t=new ln,i=new ll){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xc.copy(r.boundingSphere),Xc.applyMatrix4(l),Xc.radius+=c,t.ray.intersectsSphere(Xc)===!1)return;ov.copy(l).invert(),cp.copy(t.ray).applyMatrix4(ov);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=r.index,_=r.attributes.position;if(m!==null){const y=Math.max(0,f.start),x=Math.min(m.count,f.start+f.count);for(let E=y,b=x;E<b;E++){const S=m.getX(E);Wc.fromBufferAttribute(_,S),lv(Wc,S,p,l,t,i,this)}}else{const y=Math.max(0,f.start),x=Math.min(_.count,f.start+f.count);for(let E=y,b=x;E<b;E++)Wc.fromBufferAttribute(_,E),lv(Wc,E,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function lv(s,t,i,r,l,c,f){const h=cp.distanceSqToPoint(s);if(h<i){const p=new W;cp.closestPointToPoint(s,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class xu extends kn{constructor(t,i,r,l,c,f,h,p,m){super(t,i,r,l,c,f,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class My extends kn{constructor(t,i,r=Ur,l,c,f,h=Di,p=Di,m,v=Qo,_=1){if(v!==Qo&&v!==Jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:_};super(y,l,c,f,h,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class wp extends ln{constructor(t=1,i=1,r=1,l=32,c=1,f=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const v=[],_=[],y=[],x=[];let E=0;const b=[],S=r/2;let g=0;T(),f===!1&&(t>0&&D(!0),i>0&&D(!1)),this.setIndex(v),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(y,3)),this.setAttribute("uv",new tn(x,2));function T(){const R=new W,H=new W;let O=0;const L=(i-t)/r;for(let z=0;z<=c;z++){const C=[],w=z/c,G=w*(i-t)+t;for(let $=0;$<=l;$++){const Y=$/l,et=Y*p+h,lt=Math.sin(et),B=Math.cos(et);H.x=G*lt,H.y=-w*r+S,H.z=G*B,_.push(H.x,H.y,H.z),R.set(lt,L,B).normalize(),y.push(R.x,R.y,R.z),x.push(Y,1-w),C.push(E++)}b.push(C)}for(let z=0;z<l;z++)for(let C=0;C<c;C++){const w=b[C][z],G=b[C+1][z],$=b[C+1][z+1],Y=b[C][z+1];(t>0||C!==0)&&(v.push(w,G,Y),O+=3),(i>0||C!==c-1)&&(v.push(G,$,Y),O+=3)}m.addGroup(g,O,0),g+=O}function D(R){const H=E,O=new ue,L=new W;let z=0;const C=R===!0?t:i,w=R===!0?1:-1;for(let $=1;$<=l;$++)_.push(0,S*w,0),y.push(0,w,0),x.push(.5,.5),E++;const G=E;for(let $=0;$<=l;$++){const et=$/l*p+h,lt=Math.cos(et),B=Math.sin(et);L.x=C*B,L.y=S*w,L.z=C*lt,_.push(L.x,L.y,L.z),y.push(0,w,0),O.x=lt*.5+.5,O.y=B*.5*w+.5,x.push(O.x,O.y),E++}for(let $=0;$<l;$++){const Y=H+$,et=G+$;R===!0?v.push(et,et+1,Y):v.push(et+1,et,Y),z+=3}m.addGroup(g,z,R===!0?1:2),g+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mu extends wp{constructor(t=1,i=1,r=32,l=1,c=!1,f=0,h=Math.PI*2){super(0,t,i,r,l,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new mu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cp extends ln{constructor(t=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:l};const c=[],f=[];h(l),m(r),v(),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(c.slice(),3)),this.setAttribute("uv",new tn(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(T){const D=new W,R=new W,H=new W;for(let O=0;O<i.length;O+=3)x(i[O+0],D),x(i[O+1],R),x(i[O+2],H),p(D,R,H,T)}function p(T,D,R,H){const O=H+1,L=[];for(let z=0;z<=O;z++){L[z]=[];const C=T.clone().lerp(R,z/O),w=D.clone().lerp(R,z/O),G=O-z;for(let $=0;$<=G;$++)$===0&&z===O?L[z][$]=C:L[z][$]=C.clone().lerp(w,$/G)}for(let z=0;z<O;z++)for(let C=0;C<2*(O-z)-1;C++){const w=Math.floor(C/2);C%2===0?(y(L[z][w+1]),y(L[z+1][w]),y(L[z][w])):(y(L[z][w+1]),y(L[z+1][w+1]),y(L[z+1][w]))}}function m(T){const D=new W;for(let R=0;R<c.length;R+=3)D.x=c[R+0],D.y=c[R+1],D.z=c[R+2],D.normalize().multiplyScalar(T),c[R+0]=D.x,c[R+1]=D.y,c[R+2]=D.z}function v(){const T=new W;for(let D=0;D<c.length;D+=3){T.x=c[D+0],T.y=c[D+1],T.z=c[D+2];const R=S(T)/2/Math.PI+.5,H=g(T)/Math.PI+.5;f.push(R,1-H)}E(),_()}function _(){for(let T=0;T<f.length;T+=6){const D=f[T+0],R=f[T+2],H=f[T+4],O=Math.max(D,R,H),L=Math.min(D,R,H);O>.9&&L<.1&&(D<.2&&(f[T+0]+=1),R<.2&&(f[T+2]+=1),H<.2&&(f[T+4]+=1))}}function y(T){c.push(T.x,T.y,T.z)}function x(T,D){const R=T*3;D.x=t[R+0],D.y=t[R+1],D.z=t[R+2]}function E(){const T=new W,D=new W,R=new W,H=new W,O=new ue,L=new ue,z=new ue;for(let C=0,w=0;C<c.length;C+=9,w+=6){T.set(c[C+0],c[C+1],c[C+2]),D.set(c[C+3],c[C+4],c[C+5]),R.set(c[C+6],c[C+7],c[C+8]),O.set(f[w+0],f[w+1]),L.set(f[w+2],f[w+3]),z.set(f[w+4],f[w+5]),H.copy(T).add(D).add(R).divideScalar(3);const G=S(H);b(O,w+0,T,G),b(L,w+2,D,G),b(z,w+4,R,G)}}function b(T,D,R,H){H<0&&T.x===1&&(f[D]=T.x-1),R.x===0&&R.z===0&&(f[D]=H/2/Math.PI+.5)}function S(T){return Math.atan2(T.z,-T.x)}function g(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cp(t.vertices,t.indices,t.radius,t.details)}}const qc=new W,Yc=new W,ch=new W,jc=new oi;class xE extends ln{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(iu*i),f=t.getIndex(),h=t.getAttribute("position"),p=f?f.count:h.count,m=[0,0,0],v=["a","b","c"],_=new Array(3),y={},x=[];for(let E=0;E<p;E+=3){f?(m[0]=f.getX(E),m[1]=f.getX(E+1),m[2]=f.getX(E+2)):(m[0]=E,m[1]=E+1,m[2]=E+2);const{a:b,b:S,c:g}=jc;if(b.fromBufferAttribute(h,m[0]),S.fromBufferAttribute(h,m[1]),g.fromBufferAttribute(h,m[2]),jc.getNormal(ch),_[0]=`${Math.round(b.x*l)},${Math.round(b.y*l)},${Math.round(b.z*l)}`,_[1]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,_[2]=`${Math.round(g.x*l)},${Math.round(g.y*l)},${Math.round(g.z*l)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let T=0;T<3;T++){const D=(T+1)%3,R=_[T],H=_[D],O=jc[v[T]],L=jc[v[D]],z=`${R}_${H}`,C=`${H}_${R}`;C in y&&y[C]?(ch.dot(y[C].normal)<=c&&(x.push(O.x,O.y,O.z),x.push(L.x,L.y,L.z)),y[C]=null):z in y||(y[z]={index0:m[T],index1:m[D],normal:ch.clone()})}}for(const E in y)if(y[E]){const{index0:b,index1:S}=y[E];qc.fromBufferAttribute(h,b),Yc.fromBufferAttribute(h,S),x.push(qc.x,qc.y,qc.z),x.push(Yc.x,Yc.y,Yc.z)}this.setAttribute("position",new tn(x,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Dp extends Cp{constructor(t=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Dp(t.radius,t.detail)}}class cl extends ln{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,v=p+1,_=t/h,y=i/p,x=[],E=[],b=[],S=[];for(let g=0;g<v;g++){const T=g*y-f;for(let D=0;D<m;D++){const R=D*_-c;E.push(R,-T,0),b.push(0,0,1),S.push(D/h),S.push(1-g/p)}}for(let g=0;g<p;g++)for(let T=0;T<h;T++){const D=T+m*g,R=T+m*(g+1),H=T+1+m*(g+1),O=T+1+m*g;x.push(D,R,O),x.push(R,H,O)}this.setIndex(x),this.setAttribute("position",new tn(E,3)),this.setAttribute("normal",new tn(b,3)),this.setAttribute("uv",new tn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.width,t.height,t.widthSegments,t.heightSegments)}}class Up extends ln{constructor(t=.5,i=1,r=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:f},r=Math.max(3,r),l=Math.max(1,l);const h=[],p=[],m=[],v=[];let _=t;const y=(i-t)/l,x=new W,E=new ue;for(let b=0;b<=l;b++){for(let S=0;S<=r;S++){const g=c+S/r*f;x.x=_*Math.cos(g),x.y=_*Math.sin(g),p.push(x.x,x.y,x.z),m.push(0,0,1),E.x=(x.x/i+1)/2,E.y=(x.y/i+1)/2,v.push(E.x,E.y)}_+=y}for(let b=0;b<l;b++){const S=b*(r+1);for(let g=0;g<r;g++){const T=g+S,D=T,R=T+r+1,H=T+r+2,O=T+1;h.push(D,R,O),h.push(R,H,O)}}this.setIndex(h),this.setAttribute("position",new tn(p,3)),this.setAttribute("normal",new tn(m,3)),this.setAttribute("uv",new tn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Up(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Gi extends ln{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(f+h,Math.PI);let m=0;const v=[],_=new W,y=new W,x=[],E=[],b=[],S=[];for(let g=0;g<=r;g++){const T=[],D=g/r;let R=0;g===0&&f===0?R=.5/i:g===r&&p===Math.PI&&(R=-.5/i);for(let H=0;H<=i;H++){const O=H/i;_.x=-t*Math.cos(l+O*c)*Math.sin(f+D*h),_.y=t*Math.cos(f+D*h),_.z=t*Math.sin(l+O*c)*Math.sin(f+D*h),E.push(_.x,_.y,_.z),y.copy(_).normalize(),b.push(y.x,y.y,y.z),S.push(O+R,1-D),T.push(m++)}v.push(T)}for(let g=0;g<r;g++)for(let T=0;T<i;T++){const D=v[g][T+1],R=v[g][T],H=v[g+1][T],O=v[g+1][T+1];(g!==0||f>0)&&x.push(D,R,O),(g!==r-1||p<Math.PI)&&x.push(R,H,O)}this.setIndex(x),this.setAttribute("position",new tn(E,3)),this.setAttribute("normal",new tn(b,3)),this.setAttribute("uv",new tn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $o extends ln{constructor(t=1,i=.4,r=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:l,arc:c},r=Math.floor(r),l=Math.floor(l);const f=[],h=[],p=[],m=[],v=new W,_=new W,y=new W;for(let x=0;x<=r;x++)for(let E=0;E<=l;E++){const b=E/l*c,S=x/r*Math.PI*2;_.x=(t+i*Math.cos(S))*Math.cos(b),_.y=(t+i*Math.cos(S))*Math.sin(b),_.z=i*Math.sin(S),h.push(_.x,_.y,_.z),v.x=t*Math.cos(b),v.y=t*Math.sin(b),y.subVectors(_,v).normalize(),p.push(y.x,y.y,y.z),m.push(E/l),m.push(x/r)}for(let x=1;x<=r;x++)for(let E=1;E<=l;E++){const b=(l+1)*x+E-1,S=(l+1)*(x-1)+E-1,g=(l+1)*(x-1)+E,T=(l+1)*x+E;f.push(b,S,T),f.push(S,g,T)}this.setIndex(f),this.setAttribute("position",new tn(h,3)),this.setAttribute("normal",new tn(p,3)),this.setAttribute("uv",new tn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class gu extends $a{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uy,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class EE extends gu{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class bE extends $a{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class TE extends $a{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Lp extends _n{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const uh=new Ze,cv=new W,uv=new W;class xy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Vi,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ap,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;cv.setFromMatrixPosition(t.matrixWorld),i.position.copy(cv),uv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(uv),i.updateMatrixWorld(),uh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(uh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const fv=new Ze,Wo=new W,fh=new W;class AE extends xy{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,c=t.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Wo.setFromMatrixPosition(t.matrixWorld),r.position.copy(Wo),fh.copy(r.position),fh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(fh),r.updateMatrixWorld(),l.makeTranslation(-Wo.x,-Wo.y,-Wo.z),fv.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fv)}}class _u extends Lp{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new AE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ey extends vy{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class RE extends xy{constructor(){super(new Ey(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wE extends Lp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new RE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Np extends Lp{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class CE extends Vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Op{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const dv=new Ze;class DE{constructor(t,i,r=0,l=1/0){this.ray=new Su(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new Ep,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return dv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dv),this}intersectObject(t,i=!0,r=[]){return up(t,this,r,i),r.sort(hv),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)up(t[l],this,r,i);return r.sort(hv),r}}function hv(s,t){return s.distance-t.distance}function up(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let f=0,h=c.length;f<h;f++)up(c[f],t,i,!0)}}class UE{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(Me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function pv(s,t,i,r){const l=LE(r);switch(i){case ry:return s*t;case oy:return s*t/l.components*l.byteLength;case yp:return s*t/l.components*l.byteLength;case ly:return s*t*2/l.components*l.byteLength;case Sp:return s*t*2/l.components*l.byteLength;case sy:return s*t*3/l.components*l.byteLength;case Ci:return s*t*4/l.components*l.byteLength;case Mp:return s*t*4/l.components*l.byteLength;case Jc:case $c:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case tu:case eu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ph:case Ih:return Math.max(s,16)*Math.max(t,8)/4;case Oh:case zh:return Math.max(s,8)*Math.max(t,8)/2;case Bh:case Fh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Hh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Gh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case kh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Xh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case qh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case jh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Zh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Jh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case $h:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case tp:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case nu:case ep:case np:return Math.ceil(s/4)*Math.ceil(t/4)*16;case cy:case ip:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ap:case rp:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function LE(s){switch(s){case Vi:case ny:return{byteLength:1,components:1};case Zo:case iy:case il:return{byteLength:2,components:1};case _p:case vp:return{byteLength:2,components:4};case Ur:case gp:case pa:return{byteLength:4,components:1};case ay:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mp);function by(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function NE(s){const t=new WeakMap;function i(h,p){const m=h.array,v=h.usage,_=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,v),h.onUploadCallback();let x;if(m instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)x=s.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=s.SHORT;else if(m instanceof Uint32Array)x=s.UNSIGNED_INT;else if(m instanceof Int32Array)x=s.INT;else if(m instanceof Int8Array)x=s.BYTE;else if(m instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,p,m){const v=p.array,_=p.updateRanges;if(s.bindBuffer(m,h),_.length===0)s.bufferSubData(m,0,v);else{_.sort((x,E)=>x.start-E.start);let y=0;for(let x=1;x<_.length;x++){const E=_[y],b=_[x];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++y,_[y]=b)}_.length=y+1;for(let x=0,E=_.length;x<E;x++){const b=_[x];s.bufferSubData(m,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:f}}var OE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PE=`#ifdef USE_ALPHAHASH
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
#endif`,zE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HE=`#ifdef USE_AOMAP
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
#endif`,GE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VE=`#ifdef USE_BATCHING
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
#endif`,kE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,YE=`#ifdef USE_IRIDESCENCE
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
#endif`,jE=`#ifdef USE_BUMPMAP
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
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,KE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$E=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,i1=`#define PI 3.141592653589793
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
} // validated`,a1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r1=`vec3 transformedNormal = objectNormal;
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
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u1="gl_FragColor = linearToOutputTexel( gl_FragColor );",f1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d1=`#ifdef USE_ENVMAP
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
#endif`,h1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g1=`#ifdef USE_ENVMAP
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
#endif`,_1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M1=`#ifdef USE_GRADIENTMAP
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
}`,x1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T1=`uniform bool receiveShadow;
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
#endif`,A1=`#ifdef USE_ENVMAP
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
#endif`,R1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U1=`PhysicalMaterial material;
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
#endif`,L1=`struct PhysicalMaterial {
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
}`,N1=`
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
#endif`,O1=`#if defined( RE_IndirectDiffuse )
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
#endif`,P1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k1=`#if defined( USE_POINTS_UV )
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
#endif`,X1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`#ifdef USE_MORPHTARGETS
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
#endif`,K1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,J1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nb=`#ifdef USE_NORMALMAP
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
#endif`,ib=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ab=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ob=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ub=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_b=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vb=`float getShadowMask() {
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
}`,yb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sb=`#ifdef USE_SKINNING
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
#endif`,Mb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xb=`#ifdef USE_SKINNING
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
#endif`,Eb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ab=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rb=`#ifdef USE_TRANSMISSION
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
#endif`,wb=`#ifdef USE_TRANSMISSION
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
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ob=`uniform sampler2D t2D;
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
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`#include <common>
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
}`,Hb=`#if DEPTH_PACKING == 3200
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
}`,Gb=`#define DISTANCE
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
}`,Vb=`#define DISTANCE
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
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`uniform float scale;
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
}`,qb=`uniform vec3 diffuse;
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
}`,Yb=`#include <common>
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
}`,jb=`uniform vec3 diffuse;
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
}`,Zb=`#define LAMBERT
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
}`,Kb=`#define LAMBERT
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
}`,Qb=`#define MATCAP
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
}`,Jb=`#define MATCAP
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
}`,$b=`#define NORMAL
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
}`,tT=`#define NORMAL
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
}`,eT=`#define PHONG
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
}`,nT=`#define PHONG
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
}`,iT=`#define STANDARD
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
}`,aT=`#define STANDARD
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
}`,rT=`#define TOON
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
}`,sT=`#define TOON
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
}`,oT=`uniform float size;
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
}`,lT=`uniform vec3 diffuse;
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
}`,cT=`#include <common>
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
}`,uT=`uniform vec3 color;
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
}`,fT=`uniform float rotation;
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
}`,dT=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:OE,alphahash_pars_fragment:PE,alphamap_fragment:zE,alphamap_pars_fragment:IE,alphatest_fragment:BE,alphatest_pars_fragment:FE,aomap_fragment:HE,aomap_pars_fragment:GE,batching_pars_vertex:VE,batching_vertex:kE,begin_vertex:XE,beginnormal_vertex:WE,bsdfs:qE,iridescence_fragment:YE,bumpmap_pars_fragment:jE,clipping_planes_fragment:ZE,clipping_planes_pars_fragment:KE,clipping_planes_pars_vertex:QE,clipping_planes_vertex:JE,color_fragment:$E,color_pars_fragment:t1,color_pars_vertex:e1,color_vertex:n1,common:i1,cube_uv_reflection_fragment:a1,defaultnormal_vertex:r1,displacementmap_pars_vertex:s1,displacementmap_vertex:o1,emissivemap_fragment:l1,emissivemap_pars_fragment:c1,colorspace_fragment:u1,colorspace_pars_fragment:f1,envmap_fragment:d1,envmap_common_pars_fragment:h1,envmap_pars_fragment:p1,envmap_pars_vertex:m1,envmap_physical_pars_fragment:A1,envmap_vertex:g1,fog_vertex:_1,fog_pars_vertex:v1,fog_fragment:y1,fog_pars_fragment:S1,gradientmap_pars_fragment:M1,lightmap_pars_fragment:x1,lights_lambert_fragment:E1,lights_lambert_pars_fragment:b1,lights_pars_begin:T1,lights_toon_fragment:R1,lights_toon_pars_fragment:w1,lights_phong_fragment:C1,lights_phong_pars_fragment:D1,lights_physical_fragment:U1,lights_physical_pars_fragment:L1,lights_fragment_begin:N1,lights_fragment_maps:O1,lights_fragment_end:P1,logdepthbuf_fragment:z1,logdepthbuf_pars_fragment:I1,logdepthbuf_pars_vertex:B1,logdepthbuf_vertex:F1,map_fragment:H1,map_pars_fragment:G1,map_particle_fragment:V1,map_particle_pars_fragment:k1,metalnessmap_fragment:X1,metalnessmap_pars_fragment:W1,morphinstance_vertex:q1,morphcolor_vertex:Y1,morphnormal_vertex:j1,morphtarget_pars_vertex:Z1,morphtarget_vertex:K1,normal_fragment_begin:Q1,normal_fragment_maps:J1,normal_pars_fragment:$1,normal_pars_vertex:tb,normal_vertex:eb,normalmap_pars_fragment:nb,clearcoat_normal_fragment_begin:ib,clearcoat_normal_fragment_maps:ab,clearcoat_pars_fragment:rb,iridescence_pars_fragment:sb,opaque_fragment:ob,packing:lb,premultiplied_alpha_fragment:cb,project_vertex:ub,dithering_fragment:fb,dithering_pars_fragment:db,roughnessmap_fragment:hb,roughnessmap_pars_fragment:pb,shadowmap_pars_fragment:mb,shadowmap_pars_vertex:gb,shadowmap_vertex:_b,shadowmask_pars_fragment:vb,skinbase_vertex:yb,skinning_pars_vertex:Sb,skinning_vertex:Mb,skinnormal_vertex:xb,specularmap_fragment:Eb,specularmap_pars_fragment:bb,tonemapping_fragment:Tb,tonemapping_pars_fragment:Ab,transmission_fragment:Rb,transmission_pars_fragment:wb,uv_pars_fragment:Cb,uv_pars_vertex:Db,uv_vertex:Ub,worldpos_vertex:Lb,background_vert:Nb,background_frag:Ob,backgroundCube_vert:Pb,backgroundCube_frag:zb,cube_vert:Ib,cube_frag:Bb,depth_vert:Fb,depth_frag:Hb,distanceRGBA_vert:Gb,distanceRGBA_frag:Vb,equirect_vert:kb,equirect_frag:Xb,linedashed_vert:Wb,linedashed_frag:qb,meshbasic_vert:Yb,meshbasic_frag:jb,meshlambert_vert:Zb,meshlambert_frag:Kb,meshmatcap_vert:Qb,meshmatcap_frag:Jb,meshnormal_vert:$b,meshnormal_frag:tT,meshphong_vert:eT,meshphong_frag:nT,meshphysical_vert:iT,meshphysical_frag:aT,meshtoon_vert:rT,meshtoon_frag:sT,points_vert:oT,points_frag:lT,shadow_vert:cT,shadow_frag:uT,sprite_vert:fT,sprite_frag:dT},Bt={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Bi={basic:{uniforms:Hn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Hn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ve(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Hn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Hn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Hn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new ve(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Hn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Hn([Bt.points,Bt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Hn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Hn([Bt.common,Bt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Hn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Hn([Bt.sprite,Bt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:Hn([Bt.common,Bt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:Hn([Bt.lights,Bt.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Bi.physical={uniforms:Hn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Zc={r:0,b:0,g:0},Er=new ki,hT=new Ze;function pT(s,t,i,r,l,c,f){const h=new ve(0);let p=c===!0?0:1,m,v,_=null,y=0,x=null;function E(D){let R=D.isScene===!0?D.background:null;return R&&R.isTexture&&(R=(D.backgroundBlurriness>0?i:t).get(R)),R}function b(D){let R=!1;const H=E(D);H===null?g(h,p):H&&H.isColor&&(g(H,1),R=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(D,R){const H=E(R);H&&(H.isCubeTexture||H.mapping===yu)?(v===void 0&&(v=new $e(new ol(1,1,1),new Ja({name:"BackgroundCubeMaterial",uniforms:Hs(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(O,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Er.copy(R.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),v.material.uniforms.envMap.value=H,v.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(hT.makeRotationFromEuler(Er)),v.material.toneMapped=Oe.getTransfer(H.colorSpace)!==Xe,(_!==H||y!==H.version||x!==s.toneMapping)&&(v.material.needsUpdate=!0,_=H,y=H.version,x=s.toneMapping),v.layers.enableAll(),D.unshift(v,v.geometry,v.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new $e(new cl(2,2),new Ja({name:"BackgroundMaterial",uniforms:Hs(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=Oe.getTransfer(H.colorSpace)!==Xe,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(_!==H||y!==H.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,_=H,y=H.version,x=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,R){D.getRGB(Zc,_y(s)),r.buffers.color.setClear(Zc.r,Zc.g,Zc.b,R,f)}function T(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,R=1){h.set(D),p=R,g(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,g(h,p)},render:b,addToRenderList:S,dispose:T}}function mT(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,f=!1;function h(w,G,$,Y,et){let lt=!1;const B=_(Y,$,G);c!==B&&(c=B,m(c.object)),lt=x(w,Y,$,et),lt&&E(w,Y,$,et),et!==null&&t.update(et,s.ELEMENT_ARRAY_BUFFER),(lt||f)&&(f=!1,R(w,G,$,Y),et!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function p(){return s.createVertexArray()}function m(w){return s.bindVertexArray(w)}function v(w){return s.deleteVertexArray(w)}function _(w,G,$){const Y=$.wireframe===!0;let et=r[w.id];et===void 0&&(et={},r[w.id]=et);let lt=et[G.id];lt===void 0&&(lt={},et[G.id]=lt);let B=lt[Y];return B===void 0&&(B=y(p()),lt[Y]=B),B}function y(w){const G=[],$=[],Y=[];for(let et=0;et<i;et++)G[et]=0,$[et]=0,Y[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:$,attributeDivisors:Y,object:w,attributes:{},index:null}}function x(w,G,$,Y){const et=c.attributes,lt=G.attributes;let B=0;const Z=$.getAttributes();for(const j in Z)if(Z[j].location>=0){const Tt=et[j];let I=lt[j];if(I===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(I=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(I=w.instanceColor)),Tt===void 0||Tt.attribute!==I||I&&Tt.data!==I.data)return!0;B++}return c.attributesNum!==B||c.index!==Y}function E(w,G,$,Y){const et={},lt=G.attributes;let B=0;const Z=$.getAttributes();for(const j in Z)if(Z[j].location>=0){let Tt=lt[j];Tt===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(Tt=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(Tt=w.instanceColor));const I={};I.attribute=Tt,Tt&&Tt.data&&(I.data=Tt.data),et[j]=I,B++}c.attributes=et,c.attributesNum=B,c.index=Y}function b(){const w=c.newAttributes;for(let G=0,$=w.length;G<$;G++)w[G]=0}function S(w){g(w,0)}function g(w,G){const $=c.newAttributes,Y=c.enabledAttributes,et=c.attributeDivisors;$[w]=1,Y[w]===0&&(s.enableVertexAttribArray(w),Y[w]=1),et[w]!==G&&(s.vertexAttribDivisor(w,G),et[w]=G)}function T(){const w=c.newAttributes,G=c.enabledAttributes;for(let $=0,Y=G.length;$<Y;$++)G[$]!==w[$]&&(s.disableVertexAttribArray($),G[$]=0)}function D(w,G,$,Y,et,lt,B){B===!0?s.vertexAttribIPointer(w,G,$,et,lt):s.vertexAttribPointer(w,G,$,Y,et,lt)}function R(w,G,$,Y){b();const et=Y.attributes,lt=$.getAttributes(),B=G.defaultAttributeValues;for(const Z in lt){const j=lt[Z];if(j.location>=0){let St=et[Z];if(St===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(St=w.instanceColor)),St!==void 0){const Tt=St.normalized,I=St.itemSize,nt=t.get(St);if(nt===void 0)continue;const pt=nt.buffer,K=nt.type,dt=nt.bytesPerElement,bt=K===s.INT||K===s.UNSIGNED_INT||St.gpuType===gp;if(St.isInterleavedBufferAttribute){const yt=St.data,Ut=yt.stride,qt=St.offset;if(yt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<j.locationSize;Vt++)g(j.location+Vt,yt.meshPerAttribute);w.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Vt=0;Vt<j.locationSize;Vt++)S(j.location+Vt);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let Vt=0;Vt<j.locationSize;Vt++)D(j.location+Vt,I/j.locationSize,K,Tt,Ut*dt,(qt+I/j.locationSize*Vt)*dt,bt)}else{if(St.isInstancedBufferAttribute){for(let yt=0;yt<j.locationSize;yt++)g(j.location+yt,St.meshPerAttribute);w.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let yt=0;yt<j.locationSize;yt++)S(j.location+yt);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let yt=0;yt<j.locationSize;yt++)D(j.location+yt,I/j.locationSize,K,Tt,I*dt,I/j.locationSize*yt*dt,bt)}}else if(B!==void 0){const Tt=B[Z];if(Tt!==void 0)switch(Tt.length){case 2:s.vertexAttrib2fv(j.location,Tt);break;case 3:s.vertexAttrib3fv(j.location,Tt);break;case 4:s.vertexAttrib4fv(j.location,Tt);break;default:s.vertexAttrib1fv(j.location,Tt)}}}}T()}function H(){z();for(const w in r){const G=r[w];for(const $ in G){const Y=G[$];for(const et in Y)v(Y[et].object),delete Y[et];delete G[$]}delete r[w]}}function O(w){if(r[w.id]===void 0)return;const G=r[w.id];for(const $ in G){const Y=G[$];for(const et in Y)v(Y[et].object),delete Y[et];delete G[$]}delete r[w.id]}function L(w){for(const G in r){const $=r[G];if($[w.id]===void 0)continue;const Y=$[w.id];for(const et in Y)v(Y[et].object),delete Y[et];delete $[w.id]}}function z(){C(),f=!0,c!==l&&(c=l,m(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:C,dispose:H,releaseStatesOfGeometry:O,releaseStatesOfProgram:L,initAttributes:b,enableAttribute:S,disableUnusedAttributes:T}}function gT(s,t,i){let r;function l(m){r=m}function c(m,v){s.drawArrays(r,m,v),i.update(v,r,1)}function f(m,v,_){_!==0&&(s.drawArraysInstanced(r,m,v,_),i.update(v,r,_))}function h(m,v,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,_);let x=0;for(let E=0;E<_;E++)x+=v[E];i.update(x,r,1)}function p(m,v,_,y){if(_===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<m.length;E++)f(m[E],v[E],y[E]);else{x.multiDrawArraysInstancedWEBGL(r,m,0,v,0,y,0,_);let E=0;for(let b=0;b<_;b++)E+=v[b]*y[b];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function _T(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(L){return!(L!==Ci&&r.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(L){const z=L===il&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Vi&&r.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==pa&&!z)}function p(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:x,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:T,maxVaryings:D,maxFragmentUniforms:R,vertexTextures:H,maxSamples:O}}function vT(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new Tr,h=new me,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const x=_.length!==0||y||r!==0||l;return l=y,r=_.length,x},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){i=v(_,y,0)},this.setState=function(_,y,x){const E=_.clippingPlanes,b=_.clipIntersection,S=_.clipShadows,g=s.get(_);if(!l||E===null||E.length===0||c&&!S)c?v(null):m();else{const T=c?0:r,D=T*4;let R=g.clippingState||null;p.value=R,R=v(E,y,D,x);for(let H=0;H!==D;++H)R[H]=i[H];g.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(_,y,x,E){const b=_!==null?_.length:0;let S=null;if(b!==0){if(S=p.value,E!==!0||S===null){const g=x+b*4,T=y.matrixWorldInverse;h.getNormalMatrix(T),(S===null||S.length<g)&&(S=new Float32Array(g));for(let D=0,R=x;D!==b;++D,R+=4)f.copy(_[D]).applyMatrix4(T,h),f.normal.toArray(S,R),S[R+3]=f.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function yT(s){let t=new WeakMap;function i(f,h){return h===Uh?f.mapping=Is:h===Lh&&(f.mapping=Bs),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===Uh||h===Lh)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new mE(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ls=4,mv=[.125,.215,.35,.446,.526,.582],wr=20,dh=new Ey,gv=new ve;let hh=null,ph=0,mh=0,gh=!1;const Ar=(1+Math.sqrt(5))/2,Ds=1/Ar,_v=[new W(-Ar,Ds,0),new W(Ar,Ds,0),new W(-Ds,0,Ar),new W(Ds,0,Ar),new W(0,Ar,-Ds),new W(0,Ar,Ds),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],ST=new W;class vv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=ST}=c;hh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hh,ph,mh),this._renderer.xr.enabled=gh,t.scissorTest=!1,Kc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Is||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Hi,minFilter:Hi,generateMipmaps:!1,type:il,format:Ci,colorSpace:Fs,depthBuffer:!1},l=yv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yv(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MT(c)),this._blurMaterial=xT(c,t,i)}return l}_compileMaterial(t){const i=new $e(this._lodPlanes[0],t);this._renderer.compile(i,dh)}_sceneToCubeUV(t,i,r,l,c){const p=new Vn(90,1,i,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,x=_.toneMapping;_.getClearColor(gv),_.toneMapping=Za,_.autoClear=!1;const E=new li({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),b=new $e(new ol,E);let S=!1;const g=t.background;g?g.isColor&&(E.color.copy(g),t.background=null,S=!0):(E.color.copy(gv),S=!0);for(let T=0;T<6;T++){const D=T%3;D===0?(p.up.set(0,m[T],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[T],c.y,c.z)):D===1?(p.up.set(0,0,m[T]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[T],c.z)):(p.up.set(0,m[T],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[T]));const R=this._cubeSize;Kc(l,D*R,T>2?R:0,R,R),_.setRenderTarget(l),S&&_.render(b,p),_.render(t,p)}b.geometry.dispose(),b.material.dispose(),_.toneMapping=x,_.autoClear=y,t.background=g}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Is||t.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new $e(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;Kc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(f,dh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=_v[(l-c-1)%_v.length];this._blur(t,c-1,c,f,h)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new $e(this._lodPlanes[l],m),y=m.uniforms,x=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*wr-1),b=c/E,S=isFinite(c)?1+Math.floor(v*b):wr;S>wr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${wr}`);const g=[];let T=0;for(let L=0;L<wr;++L){const z=L/b,C=Math.exp(-z*z/2);g.push(C),L===0?T+=C:L<S&&(T+=2*C)}for(let L=0;L<g.length;L++)g[L]=g[L]/T;y.envMap.value=t.texture,y.samples.value=S,y.weights.value=g,y.latitudinal.value=f==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:D}=this;y.dTheta.value=E,y.mipInt.value=D-r;const R=this._sizeLods[l],H=3*R*(l>D-Ls?l-D+Ls:0),O=4*(this._cubeSize-R);Kc(i,H,O,3*R,2*R),p.setRenderTarget(i),p.render(_,dh)}}function MT(s){const t=[],i=[],r=[];let l=s;const c=s-Ls+1+mv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let p=1/h;f>s-Ls?p=mv[f-s+Ls-1]:f===0&&(p=0),r.push(p);const m=1/(h-2),v=-m,_=1+m,y=[v,v,_,v,_,_,v,v,_,_,v,_],x=6,E=6,b=3,S=2,g=1,T=new Float32Array(b*E*x),D=new Float32Array(S*E*x),R=new Float32Array(g*E*x);for(let O=0;O<x;O++){const L=O%3*2/3-1,z=O>2?0:-1,C=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];T.set(C,b*E*O),D.set(y,S*E*O);const w=[O,O,O,O,O,O];R.set(w,g*E*O)}const H=new ln;H.setAttribute("position",new Dn(T,b)),H.setAttribute("uv",new Dn(D,S)),H.setAttribute("faceIndex",new Dn(R,g)),t.push(H),l>Ls&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function yv(s,t,i){const r=new Lr(s,t,i);return r.texture.mapping=yu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Kc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function xT(s,t,i){const r=new Float32Array(wr),l=new W(0,1,0);return new Ja({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Pp(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function Sv(){return new Ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pp(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function Mv(){return new Ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function Pp(){return`

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
	`}function ET(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===Uh||p===Lh,v=p===Is||p===Bs;if(m||v){let _=t.get(h);const y=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new vv(s)),_=m?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const x=h.image;return m&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new vv(s)),_=m?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let p=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function bT(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Os("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function TT(s,t,i,r){const l={},c=new WeakMap;function f(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",f),delete l[y.id];const x=c.get(y);x&&(t.remove(x),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(_,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function p(_){const y=_.attributes;for(const x in y)t.update(y[x],s.ARRAY_BUFFER)}function m(_){const y=[],x=_.index,E=_.attributes.position;let b=0;if(x!==null){const T=x.array;b=x.version;for(let D=0,R=T.length;D<R;D+=3){const H=T[D+0],O=T[D+1],L=T[D+2];y.push(H,O,O,L,L,H)}}else if(E!==void 0){const T=E.array;b=E.version;for(let D=0,R=T.length/3-1;D<R;D+=3){const H=D+0,O=D+1,L=D+2;y.push(H,O,O,L,L,H)}}else return;const S=new(dy(y)?gy:my)(y,1);S.version=b;const g=c.get(_);g&&t.remove(g),c.set(_,S)}function v(_){const y=c.get(_);if(y){const x=_.index;x!==null&&y.version<x.version&&m(_)}else m(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:v}}function AT(s,t,i){let r;function l(y){r=y}let c,f;function h(y){c=y.type,f=y.bytesPerElement}function p(y,x){s.drawElements(r,x,c,y*f),i.update(x,r,1)}function m(y,x,E){E!==0&&(s.drawElementsInstanced(r,x,c,y*f,E),i.update(x,r,E))}function v(y,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,c,y,0,E);let S=0;for(let g=0;g<E;g++)S+=x[g];i.update(S,r,1)}function _(y,x,E,b){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<y.length;g++)m(y[g]/f,x[g],b[g]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,c,y,0,b,0,E);let g=0;for(let T=0;T<E;T++)g+=x[T]*b[T];i.update(g,r,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function RT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function wT(s,t,i){const r=new WeakMap,l=new qe;function c(f,h,p){const m=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let y=r.get(h);if(y===void 0||y.count!==_){let w=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var x=w;y!==void 0&&y.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,g=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let R=0;E===!0&&(R=1),b===!0&&(R=2),S===!0&&(R=3);let H=h.attributes.position.count*R,O=1;H>t.maxTextureSize&&(O=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const L=new Float32Array(H*O*4*_),z=new hy(L,H,O,_);z.type=pa,z.needsUpdate=!0;const C=R*4;for(let G=0;G<_;G++){const $=g[G],Y=T[G],et=D[G],lt=H*O*4*G;for(let B=0;B<$.count;B++){const Z=B*C;E===!0&&(l.fromBufferAttribute($,B),L[lt+Z+0]=l.x,L[lt+Z+1]=l.y,L[lt+Z+2]=l.z,L[lt+Z+3]=0),b===!0&&(l.fromBufferAttribute(Y,B),L[lt+Z+4]=l.x,L[lt+Z+5]=l.y,L[lt+Z+6]=l.z,L[lt+Z+7]=0),S===!0&&(l.fromBufferAttribute(et,B),L[lt+Z+8]=l.x,L[lt+Z+9]=l.y,L[lt+Z+10]=l.z,L[lt+Z+11]=et.itemSize===4?l.w:1)}}y={count:_,texture:z,size:new ue(H,O)},r.set(h,y),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<m.length;S++)E+=m[S];const b=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",b),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function CT(s,t,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,v=p.geometry,_=t.get(p,v);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return _}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const Ty=new kn,xv=new My(1,1),Ay=new hy,Ry=new Jx,wy=new yy,Ev=[],bv=[],Tv=new Float32Array(16),Av=new Float32Array(9),Rv=new Float32Array(4);function Vs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=Ev[l];if(c===void 0&&(c=new Float32Array(l),Ev[l]=c),t!==0){r.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,s[f].toArray(c,h)}return c}function vn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function yn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Eu(s,t){let i=bv[t];i===void 0&&(i=new Int32Array(t),bv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function DT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function UT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2fv(this.addr,t),yn(i,t)}}function LT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;s.uniform3fv(this.addr,t),yn(i,t)}}function NT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4fv(this.addr,t),yn(i,t)}}function OT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(vn(i,r))return;Rv.set(r),s.uniformMatrix2fv(this.addr,!1,Rv),yn(i,r)}}function PT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(vn(i,r))return;Av.set(r),s.uniformMatrix3fv(this.addr,!1,Av),yn(i,r)}}function zT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(vn(i,r))return;Tv.set(r),s.uniformMatrix4fv(this.addr,!1,Tv),yn(i,r)}}function IT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function BT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2iv(this.addr,t),yn(i,t)}}function FT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3iv(this.addr,t),yn(i,t)}}function HT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4iv(this.addr,t),yn(i,t)}}function GT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function VT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2uiv(this.addr,t),yn(i,t)}}function kT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3uiv(this.addr,t),yn(i,t)}}function XT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4uiv(this.addr,t),yn(i,t)}}function WT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(xv.compareFunction=fy,c=xv):c=Ty,i.setTexture2D(t||c,l)}function qT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Ry,l)}function YT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||wy,l)}function jT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Ay,l)}function ZT(s){switch(s){case 5126:return DT;case 35664:return UT;case 35665:return LT;case 35666:return NT;case 35674:return OT;case 35675:return PT;case 35676:return zT;case 5124:case 35670:return IT;case 35667:case 35671:return BT;case 35668:case 35672:return FT;case 35669:case 35673:return HT;case 5125:return GT;case 36294:return VT;case 36295:return kT;case 36296:return XT;case 35678:case 36198:case 36298:case 36306:case 35682:return WT;case 35679:case 36299:case 36307:return qT;case 35680:case 36300:case 36308:case 36293:return YT;case 36289:case 36303:case 36311:case 36292:return jT}}function KT(s,t){s.uniform1fv(this.addr,t)}function QT(s,t){const i=Vs(t,this.size,2);s.uniform2fv(this.addr,i)}function JT(s,t){const i=Vs(t,this.size,3);s.uniform3fv(this.addr,i)}function $T(s,t){const i=Vs(t,this.size,4);s.uniform4fv(this.addr,i)}function tA(s,t){const i=Vs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function eA(s,t){const i=Vs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function nA(s,t){const i=Vs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function iA(s,t){s.uniform1iv(this.addr,t)}function aA(s,t){s.uniform2iv(this.addr,t)}function rA(s,t){s.uniform3iv(this.addr,t)}function sA(s,t){s.uniform4iv(this.addr,t)}function oA(s,t){s.uniform1uiv(this.addr,t)}function lA(s,t){s.uniform2uiv(this.addr,t)}function cA(s,t){s.uniform3uiv(this.addr,t)}function uA(s,t){s.uniform4uiv(this.addr,t)}function fA(s,t,i){const r=this.cache,l=t.length,c=Eu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||Ty,c[f])}function dA(s,t,i){const r=this.cache,l=t.length,c=Eu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Ry,c[f])}function hA(s,t,i){const r=this.cache,l=t.length,c=Eu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||wy,c[f])}function pA(s,t,i){const r=this.cache,l=t.length,c=Eu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Ay,c[f])}function mA(s){switch(s){case 5126:return KT;case 35664:return QT;case 35665:return JT;case 35666:return $T;case 35674:return tA;case 35675:return eA;case 35676:return nA;case 5124:case 35670:return iA;case 35667:case 35671:return aA;case 35668:case 35672:return rA;case 35669:case 35673:return sA;case 5125:return oA;case 36294:return lA;case 36295:return cA;case 36296:return uA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return dA;case 35680:case 36300:case 36308:case 36293:return hA;case 36289:case 36303:case 36311:case 36292:return pA}}class gA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=ZT(i.type)}}class _A{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=mA(i.type)}}class vA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const _h=/(\w+)(\])?(\[|\.)?/g;function wv(s,t){s.seq.push(t),s.map[t.id]=t}function yA(s,t,i){const r=s.name,l=r.length;for(_h.lastIndex=0;;){const c=_h.exec(r),f=_h.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){wv(i,m===void 0?new gA(h,s,t):new _A(h,s,t));break}else{let _=i.map[h];_===void 0&&(_=new vA(h),wv(i,_)),i=_}}}class au{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);yA(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function Cv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const SA=37297;let MA=0;function xA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const Dv=new me;function EA(s){Oe._getMatrix(Dv,Oe.workingColorSpace,s);const t=`mat3( ${Dv.elements.map(i=>i.toFixed(4))} )`;switch(Oe.getTransfer(s)){case ou:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Uv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+xA(s.getShaderSource(t),f)}else return l}function bA(s,t){const i=EA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function TA(s,t){let i;switch(t){case bx:i="Linear";break;case Tx:i="Reinhard";break;case Ax:i="Cineon";break;case Rx:i="ACESFilmic";break;case Cx:i="AgX";break;case Dx:i="Neutral";break;case wx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Qc=new W;function AA(){Oe.getLuminanceCoefficients(Qc);const s=Qc.x.toFixed(4),t=Qc.y.toFixed(4),i=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function wA(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function CA(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:h}}return i}function qo(s){return s!==""}function Lv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const DA=/^[ \t]*#include +<([\w\d./]+)>/gm;function fp(s){return s.replace(DA,LA)}const UA=new Map;function LA(s,t){let i=_e[t];if(i===void 0){const r=UA.get(t);if(r!==void 0)i=_e[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return fp(i)}const NA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ov(s){return s.replace(NA,OA)}function OA(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Pv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function PA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===$v?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ha&&(t="SHADOWMAP_TYPE_VSM"),t}function zA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Is:case Bs:t="ENVMAP_TYPE_CUBE";break;case yu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function IA(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Bs&&(t="ENVMAP_MODE_REFRACTION"),t}function BA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ty:t="ENVMAP_BLENDING_MULTIPLY";break;case xx:t="ENVMAP_BLENDING_MIX";break;case Ex:t="ENVMAP_BLENDING_ADD";break}return t}function FA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function HA(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=PA(i),m=zA(i),v=IA(i),_=BA(i),y=FA(i),x=RA(i),E=wA(c),b=l.createProgram();let S,g,T=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(qo).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(qo).join(`
`),g.length>0&&(g+=`
`)):(S=[Pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),g=[Pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Za?"#define TONE_MAPPING":"",i.toneMapping!==Za?_e.tonemapping_pars_fragment:"",i.toneMapping!==Za?TA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,bA("linearToOutputTexel",i.outputColorSpace),AA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),f=fp(f),f=Lv(f,i),f=Nv(f,i),h=fp(h),h=Lv(h,i),h=Nv(h,i),f=Ov(f),h=Ov(h),i.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",i.glslVersion===I_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===I_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=T+S+f,R=T+g+h,H=Cv(l,l.VERTEX_SHADER,D),O=Cv(l,l.FRAGMENT_SHADER,R);l.attachShader(b,H),l.attachShader(b,O),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function L(G){if(s.debug.checkShaderErrors){const $=l.getProgramInfoLog(b).trim(),Y=l.getShaderInfoLog(H).trim(),et=l.getShaderInfoLog(O).trim();let lt=!0,B=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(lt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,b,H,O);else{const Z=Uv(l,H,"vertex"),j=Uv(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+$+`
`+Z+`
`+j)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(Y===""||et==="")&&(B=!1);B&&(G.diagnostics={runnable:lt,programLog:$,vertexShader:{log:Y,prefix:S},fragmentShader:{log:et,prefix:g}})}l.deleteShader(H),l.deleteShader(O),z=new au(l,b),C=CA(l,b)}let z;this.getUniforms=function(){return z===void 0&&L(this),z};let C;this.getAttributes=function(){return C===void 0&&L(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(b,SA)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=MA++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=H,this.fragmentShader=O,this}let GA=0;class VA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new kA(t),i.set(t,r)),r}}class kA{constructor(t){this.id=GA++,this.code=t,this.usedTimes=0}}function XA(s,t,i,r,l,c,f){const h=new Ep,p=new VA,m=new Set,v=[],_=l.logarithmicDepthBuffer,y=l.vertexTextures;let x=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return m.add(C),C===0?"uv":`uv${C}`}function S(C,w,G,$,Y){const et=$.fog,lt=Y.geometry,B=C.isMeshStandardMaterial?$.environment:null,Z=(C.isMeshStandardMaterial?i:t).get(C.envMap||B),j=Z&&Z.mapping===yu?Z.image.height:null,St=E[C.type];C.precision!==null&&(x=l.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const Tt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,I=Tt!==void 0?Tt.length:0;let nt=0;lt.morphAttributes.position!==void 0&&(nt=1),lt.morphAttributes.normal!==void 0&&(nt=2),lt.morphAttributes.color!==void 0&&(nt=3);let pt,K,dt,bt;if(St){const De=Bi[St];pt=De.vertexShader,K=De.fragmentShader}else pt=C.vertexShader,K=C.fragmentShader,p.update(C),dt=p.getVertexShaderID(C),bt=p.getFragmentShaderID(C);const yt=s.getRenderTarget(),Ut=s.state.buffers.depth.getReversed(),qt=Y.isInstancedMesh===!0,Vt=Y.isBatchedMesh===!0,Jt=!!C.map,Lt=!!C.matcap,Kt=!!Z,V=!!C.aoMap,ye=!!C.lightMap,re=!!C.bumpMap,he=!!C.normalMap,Ht=!!C.displacementMap,se=!!C.emissiveMap,Yt=!!C.metalnessMap,ie=!!C.roughnessMap,Fe=C.anisotropy>0,F=C.clearcoat>0,A=C.dispersion>0,at=C.iridescence>0,_t=C.sheen>0,Et=C.transmission>0,ht=Fe&&!!C.anisotropyMap,jt=F&&!!C.clearcoatMap,Ot=F&&!!C.clearcoatNormalMap,st=F&&!!C.clearcoatRoughnessMap,Ct=at&&!!C.iridescenceMap,gt=at&&!!C.iridescenceThicknessMap,wt=_t&&!!C.sheenColorMap,kt=_t&&!!C.sheenRoughnessMap,Pt=!!C.specularMap,Nt=!!C.specularColorMap,$t=!!C.specularIntensityMap,X=Et&&!!C.transmissionMap,zt=Et&&!!C.thicknessMap,At=!!C.gradientMap,Gt=!!C.alphaMap,Rt=C.alphaTest>0,Mt=!!C.alphaHash,Xt=!!C.extensions;let oe=Za;C.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(oe=s.toneMapping);const ze={shaderID:St,shaderType:C.type,shaderName:C.name,vertexShader:pt,fragmentShader:K,defines:C.defines,customVertexShaderID:dt,customFragmentShaderID:bt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:Vt,batchingColor:Vt&&Y._colorsTexture!==null,instancing:qt,instancingColor:qt&&Y.instanceColor!==null,instancingMorph:qt&&Y.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:yt===null?s.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Fs,alphaToCoverage:!!C.alphaToCoverage,map:Jt,matcap:Lt,envMap:Kt,envMapMode:Kt&&Z.mapping,envMapCubeUVHeight:j,aoMap:V,lightMap:ye,bumpMap:re,normalMap:he,displacementMap:y&&Ht,emissiveMap:se,normalMapObjectSpace:he&&C.normalMapType===Ox,normalMapTangentSpace:he&&C.normalMapType===uy,metalnessMap:Yt,roughnessMap:ie,anisotropy:Fe,anisotropyMap:ht,clearcoat:F,clearcoatMap:jt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:st,dispersion:A,iridescence:at,iridescenceMap:Ct,iridescenceThicknessMap:gt,sheen:_t,sheenColorMap:wt,sheenRoughnessMap:kt,specularMap:Pt,specularColorMap:Nt,specularIntensityMap:$t,transmission:Et,transmissionMap:X,thicknessMap:zt,gradientMap:At,opaque:C.transparent===!1&&C.blending===Ns&&C.alphaToCoverage===!1,alphaMap:Gt,alphaTest:Rt,alphaHash:Mt,combine:C.combine,mapUv:Jt&&b(C.map.channel),aoMapUv:V&&b(C.aoMap.channel),lightMapUv:ye&&b(C.lightMap.channel),bumpMapUv:re&&b(C.bumpMap.channel),normalMapUv:he&&b(C.normalMap.channel),displacementMapUv:Ht&&b(C.displacementMap.channel),emissiveMapUv:se&&b(C.emissiveMap.channel),metalnessMapUv:Yt&&b(C.metalnessMap.channel),roughnessMapUv:ie&&b(C.roughnessMap.channel),anisotropyMapUv:ht&&b(C.anisotropyMap.channel),clearcoatMapUv:jt&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:kt&&b(C.sheenRoughnessMap.channel),specularMapUv:Pt&&b(C.specularMap.channel),specularColorMapUv:Nt&&b(C.specularColorMap.channel),specularIntensityMapUv:$t&&b(C.specularIntensityMap.channel),transmissionMapUv:X&&b(C.transmissionMap.channel),thicknessMapUv:zt&&b(C.thicknessMap.channel),alphaMapUv:Gt&&b(C.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(he||Fe),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!lt.attributes.uv&&(Jt||Gt),fog:!!et,useFog:C.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ut,skinning:Y.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,decodeVideoTexture:Jt&&C.map.isVideoTexture===!0&&Oe.getTransfer(C.map.colorSpace)===Xe,decodeVideoTextureEmissive:se&&C.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(C.emissiveMap.colorSpace)===Xe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===wi,flipSided:C.side===Qn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Xt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&C.extensions.multiDraw===!0||Vt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return ze.vertexUv1s=m.has(1),ze.vertexUv2s=m.has(2),ze.vertexUv3s=m.has(3),m.clear(),ze}function g(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const G in C.defines)w.push(G),w.push(C.defines[G]);return C.isRawShaderMaterial===!1&&(T(w,C),D(w,C),w.push(s.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function T(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function D(C,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),C.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reverseDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),C.push(h.mask)}function R(C){const w=E[C.type];let G;if(w){const $=Bi[w];G=fE.clone($.uniforms)}else G=C.uniforms;return G}function H(C,w){let G;for(let $=0,Y=v.length;$<Y;$++){const et=v[$];if(et.cacheKey===w){G=et,++G.usedTimes;break}}return G===void 0&&(G=new HA(s,w,C,c),v.push(G)),G}function O(C){if(--C.usedTimes===0){const w=v.indexOf(C);v[w]=v[v.length-1],v.pop(),C.destroy()}}function L(C){p.remove(C)}function z(){p.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:R,acquireProgram:H,releaseProgram:O,releaseShaderCache:L,programs:v,dispose:z}}function WA(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,p){s.get(f)[h]=p}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function qA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function zv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Iv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(_,y,x,E,b,S){let g=s[t];return g===void 0?(g={id:_.id,object:_,geometry:y,material:x,groupOrder:E,renderOrder:_.renderOrder,z:b,group:S},s[t]=g):(g.id=_.id,g.object=_,g.geometry=y,g.material=x,g.groupOrder=E,g.renderOrder=_.renderOrder,g.z=b,g.group=S),t++,g}function h(_,y,x,E,b,S){const g=f(_,y,x,E,b,S);x.transmission>0?r.push(g):x.transparent===!0?l.push(g):i.push(g)}function p(_,y,x,E,b,S){const g=f(_,y,x,E,b,S);x.transmission>0?r.unshift(g):x.transparent===!0?l.unshift(g):i.unshift(g)}function m(_,y){i.length>1&&i.sort(_||qA),r.length>1&&r.sort(y||zv),l.length>1&&l.sort(y||zv)}function v(){for(let _=t,y=s.length;_<y;_++){const x=s[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:p,finish:v,sort:m}}function YA(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new Iv,s.set(r,[f])):l>=c.length?(f=new Iv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function jA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new W,color:new ve};break;case"SpotLight":i={position:new W,direction:new W,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new W,color:new ve,distance:0,decay:0};break;case"HemisphereLight":i={direction:new W,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":i={color:new ve,position:new W,halfWidth:new W,halfHeight:new W};break}return s[t.id]=i,i}}}function ZA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let KA=0;function QA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function JA(s){const t=new jA,i=ZA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new W);const l=new W,c=new Ze,f=new Ze;function h(m){let v=0,_=0,y=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let x=0,E=0,b=0,S=0,g=0,T=0,D=0,R=0,H=0,O=0,L=0;m.sort(QA);for(let C=0,w=m.length;C<w;C++){const G=m[C],$=G.color,Y=G.intensity,et=G.distance,lt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=$.r*Y,_+=$.g*Y,y+=$.b*Y;else if(G.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(G.sh.coefficients[B],Y);L++}else if(G.isDirectionalLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,j=i.get(G);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,r.directionalShadow[x]=j,r.directionalShadowMap[x]=lt,r.directionalShadowMatrix[x]=G.shadow.matrix,T++}r.directional[x]=B,x++}else if(G.isSpotLight){const B=t.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy($).multiplyScalar(Y),B.distance=et,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,r.spot[b]=B;const Z=G.shadow;if(G.map&&(r.spotLightMap[H]=G.map,H++,Z.updateMatrices(G),G.castShadow&&O++),r.spotLightMatrix[b]=Z.matrix,G.castShadow){const j=i.get(G);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,r.spotShadow[b]=j,r.spotShadowMap[b]=lt,R++}b++}else if(G.isRectAreaLight){const B=t.get(G);B.color.copy($).multiplyScalar(Y),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=B,S++}else if(G.isPointLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const Z=G.shadow,j=i.get(G);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,r.pointShadow[E]=j,r.pointShadowMap[E]=lt,r.pointShadowMatrix[E]=G.shadow.matrix,D++}r.point[E]=B,E++}else if(G.isHemisphereLight){const B=t.get(G);B.skyColor.copy(G.color).multiplyScalar(Y),B.groundColor.copy(G.groundColor).multiplyScalar(Y),r.hemi[g]=B,g++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Bt.LTC_FLOAT_1,r.rectAreaLTC2=Bt.LTC_FLOAT_2):(r.rectAreaLTC1=Bt.LTC_HALF_1,r.rectAreaLTC2=Bt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=y;const z=r.hash;(z.directionalLength!==x||z.pointLength!==E||z.spotLength!==b||z.rectAreaLength!==S||z.hemiLength!==g||z.numDirectionalShadows!==T||z.numPointShadows!==D||z.numSpotShadows!==R||z.numSpotMaps!==H||z.numLightProbes!==L)&&(r.directional.length=x,r.spot.length=b,r.rectArea.length=S,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=R+H-O,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=L,z.directionalLength=x,z.pointLength=E,z.spotLength=b,z.rectAreaLength=S,z.hemiLength=g,z.numDirectionalShadows=T,z.numPointShadows=D,z.numSpotShadows=R,z.numSpotMaps=H,z.numLightProbes=L,r.version=KA++)}function p(m,v){let _=0,y=0,x=0,E=0,b=0;const S=v.matrixWorldInverse;for(let g=0,T=m.length;g<T;g++){const D=m[g];if(D.isDirectionalLight){const R=r.directional[_];R.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(S),_++}else if(D.isSpotLight){const R=r.spot[x];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(S),x++}else if(D.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),f.identity(),c.copy(D.matrixWorld),c.premultiply(S),f.extractRotation(c),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const R=r.point[y];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),y++}else if(D.isHemisphereLight){const R=r.hemi[b];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(S),b++}}}return{setup:h,setupView:p,state:r}}function Bv(s){const t=new JA(s),i=[],r=[];function l(v){m.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function f(v){r.push(v)}function h(){t.setup(i)}function p(v){t.setupView(i,v)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function $A(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new Bv(s),t.set(l,[h])):c>=f.length?(h=new Bv(s),f.push(h)):h=f[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const t2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e2=`uniform sampler2D shadow_pass;
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
}`;function n2(s,t,i){let r=new Ap;const l=new ue,c=new ue,f=new qe,h=new bE({depthPacking:Nx}),p=new TE,m={},v=i.maxTextureSize,_={[Qa]:Qn,[Qn]:Qa,[wi]:wi},y=new Ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:t2,fragmentShader:e2}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const E=new ln;E.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new $e(E,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jv;let g=this.type;this.render=function(O,L,z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const C=s.getRenderTarget(),w=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),$=s.state;$.setBlending(ja),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Y=g!==ha&&this.type===ha,et=g===ha&&this.type!==ha;for(let lt=0,B=O.length;lt<B;lt++){const Z=O[lt],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const St=j.getFrameExtents();if(l.multiply(St),c.copy(j.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/St.x),l.x=c.x*St.x,j.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/St.y),l.y=c.y*St.y,j.mapSize.y=c.y)),j.map===null||Y===!0||et===!0){const I=this.type!==ha?{minFilter:Di,magFilter:Di}:{};j.map!==null&&j.map.dispose(),j.map=new Lr(l.x,l.y,I),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const Tt=j.getViewportCount();for(let I=0;I<Tt;I++){const nt=j.getViewport(I);f.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),$.viewport(f),j.updateMatrices(Z,I),r=j.getFrustum(),R(L,z,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===ha&&T(j,z),j.needsUpdate=!1}g=this.type,S.needsUpdate=!1,s.setRenderTarget(C,w,G)};function T(O,L){const z=t.update(b);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Lr(l.x,l.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(L,null,z,y,b,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(L,null,z,x,b,null)}function D(O,L,z,C){let w=null;const G=z.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)w=G;else if(w=z.isPointLight===!0?p:h,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const $=w.uuid,Y=L.uuid;let et=m[$];et===void 0&&(et={},m[$]=et);let lt=et[Y];lt===void 0&&(lt=w.clone(),et[Y]=lt,L.addEventListener("dispose",H)),w=lt}if(w.visible=L.visible,w.wireframe=L.wireframe,C===ha?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:_[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const $=s.properties.get(w);$.light=z}return w}function R(O,L,z,C,w){if(O.visible===!1)return;if(O.layers.test(L.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===ha)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,O.matrixWorld);const Y=t.update(O),et=O.material;if(Array.isArray(et)){const lt=Y.groups;for(let B=0,Z=lt.length;B<Z;B++){const j=lt[B],St=et[j.materialIndex];if(St&&St.visible){const Tt=D(O,St,C,w);O.onBeforeShadow(s,O,L,z,Y,Tt,j),s.renderBufferDirect(z,null,Y,Tt,O,j),O.onAfterShadow(s,O,L,z,Y,Tt,j)}}}else if(et.visible){const lt=D(O,et,C,w);O.onBeforeShadow(s,O,L,z,Y,lt,null),s.renderBufferDirect(z,null,Y,lt,O,null),O.onAfterShadow(s,O,L,z,Y,lt,null)}}const $=O.children;for(let Y=0,et=$.length;Y<et;Y++)R($[Y],L,z,C,w)}function H(O){O.target.removeEventListener("dispose",H);for(const z in m){const C=m[z],w=O.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const i2={[bh]:Th,[Ah]:Ch,[Rh]:Dh,[zs]:wh,[Th]:bh,[Ch]:Ah,[Dh]:Rh,[wh]:zs};function a2(s,t){function i(){let X=!1;const zt=new qe;let At=null;const Gt=new qe(0,0,0,0);return{setMask:function(Rt){At!==Rt&&!X&&(s.colorMask(Rt,Rt,Rt,Rt),At=Rt)},setLocked:function(Rt){X=Rt},setClear:function(Rt,Mt,Xt,oe,ze){ze===!0&&(Rt*=oe,Mt*=oe,Xt*=oe),zt.set(Rt,Mt,Xt,oe),Gt.equals(zt)===!1&&(s.clearColor(Rt,Mt,Xt,oe),Gt.copy(zt))},reset:function(){X=!1,At=null,Gt.set(-1,0,0,0)}}}function r(){let X=!1,zt=!1,At=null,Gt=null,Rt=null;return{setReversed:function(Mt){if(zt!==Mt){const Xt=t.get("EXT_clip_control");Mt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),zt=Mt;const oe=Rt;Rt=null,this.setClear(oe)}},getReversed:function(){return zt},setTest:function(Mt){Mt?yt(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(Mt){At!==Mt&&!X&&(s.depthMask(Mt),At=Mt)},setFunc:function(Mt){if(zt&&(Mt=i2[Mt]),Gt!==Mt){switch(Mt){case bh:s.depthFunc(s.NEVER);break;case Th:s.depthFunc(s.ALWAYS);break;case Ah:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case Rh:s.depthFunc(s.EQUAL);break;case wh:s.depthFunc(s.GEQUAL);break;case Ch:s.depthFunc(s.GREATER);break;case Dh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Gt=Mt}},setLocked:function(Mt){X=Mt},setClear:function(Mt){Rt!==Mt&&(zt&&(Mt=1-Mt),s.clearDepth(Mt),Rt=Mt)},reset:function(){X=!1,At=null,Gt=null,Rt=null,zt=!1}}}function l(){let X=!1,zt=null,At=null,Gt=null,Rt=null,Mt=null,Xt=null,oe=null,ze=null;return{setTest:function(De){X||(De?yt(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(De){zt!==De&&!X&&(s.stencilMask(De),zt=De)},setFunc:function(De,En,yi){(At!==De||Gt!==En||Rt!==yi)&&(s.stencilFunc(De,En,yi),At=De,Gt=En,Rt=yi)},setOp:function(De,En,yi){(Mt!==De||Xt!==En||oe!==yi)&&(s.stencilOp(De,En,yi),Mt=De,Xt=En,oe=yi)},setLocked:function(De){X=De},setClear:function(De){ze!==De&&(s.clearStencil(De),ze=De)},reset:function(){X=!1,zt=null,At=null,Gt=null,Rt=null,Mt=null,Xt=null,oe=null,ze=null}}}const c=new i,f=new r,h=new l,p=new WeakMap,m=new WeakMap;let v={},_={},y=new WeakMap,x=[],E=null,b=!1,S=null,g=null,T=null,D=null,R=null,H=null,O=null,L=new ve(0,0,0),z=0,C=!1,w=null,G=null,$=null,Y=null,et=null;const lt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),B=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),B=Z>=2);let St=null,Tt={};const I=s.getParameter(s.SCISSOR_BOX),nt=s.getParameter(s.VIEWPORT),pt=new qe().fromArray(I),K=new qe().fromArray(nt);function dt(X,zt,At,Gt){const Rt=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(X,Mt),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xt=0;Xt<At;Xt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(zt,0,s.RGBA,1,1,Gt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(zt+Xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return Mt}const bt={};bt[s.TEXTURE_2D]=dt(s.TEXTURE_2D,s.TEXTURE_2D,1),bt[s.TEXTURE_CUBE_MAP]=dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[s.TEXTURE_2D_ARRAY]=dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),bt[s.TEXTURE_3D]=dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),yt(s.DEPTH_TEST),f.setFunc(zs),re(!1),he(N_),yt(s.CULL_FACE),V(ja);function yt(X){v[X]!==!0&&(s.enable(X),v[X]=!0)}function Ut(X){v[X]!==!1&&(s.disable(X),v[X]=!1)}function qt(X,zt){return _[X]!==zt?(s.bindFramebuffer(X,zt),_[X]=zt,X===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=zt),X===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=zt),!0):!1}function Vt(X,zt){let At=x,Gt=!1;if(X){At=y.get(zt),At===void 0&&(At=[],y.set(zt,At));const Rt=X.textures;if(At.length!==Rt.length||At[0]!==s.COLOR_ATTACHMENT0){for(let Mt=0,Xt=Rt.length;Mt<Xt;Mt++)At[Mt]=s.COLOR_ATTACHMENT0+Mt;At.length=Rt.length,Gt=!0}}else At[0]!==s.BACK&&(At[0]=s.BACK,Gt=!0);Gt&&s.drawBuffers(At)}function Jt(X){return E!==X?(s.useProgram(X),E=X,!0):!1}const Lt={[Rr]:s.FUNC_ADD,[rx]:s.FUNC_SUBTRACT,[sx]:s.FUNC_REVERSE_SUBTRACT};Lt[ox]=s.MIN,Lt[lx]=s.MAX;const Kt={[cx]:s.ZERO,[ux]:s.ONE,[fx]:s.SRC_COLOR,[xh]:s.SRC_ALPHA,[_x]:s.SRC_ALPHA_SATURATE,[mx]:s.DST_COLOR,[hx]:s.DST_ALPHA,[dx]:s.ONE_MINUS_SRC_COLOR,[Eh]:s.ONE_MINUS_SRC_ALPHA,[gx]:s.ONE_MINUS_DST_COLOR,[px]:s.ONE_MINUS_DST_ALPHA,[vx]:s.CONSTANT_COLOR,[yx]:s.ONE_MINUS_CONSTANT_COLOR,[Sx]:s.CONSTANT_ALPHA,[Mx]:s.ONE_MINUS_CONSTANT_ALPHA};function V(X,zt,At,Gt,Rt,Mt,Xt,oe,ze,De){if(X===ja){b===!0&&(Ut(s.BLEND),b=!1);return}if(b===!1&&(yt(s.BLEND),b=!0),X!==ax){if(X!==S||De!==C){if((g!==Rr||R!==Rr)&&(s.blendEquation(s.FUNC_ADD),g=Rr,R=Rr),De)switch(X){case Ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ru:s.blendFunc(s.ONE,s.ONE);break;case O_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case P_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ru:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case O_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case P_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}T=null,D=null,H=null,O=null,L.set(0,0,0),z=0,S=X,C=De}return}Rt=Rt||zt,Mt=Mt||At,Xt=Xt||Gt,(zt!==g||Rt!==R)&&(s.blendEquationSeparate(Lt[zt],Lt[Rt]),g=zt,R=Rt),(At!==T||Gt!==D||Mt!==H||Xt!==O)&&(s.blendFuncSeparate(Kt[At],Kt[Gt],Kt[Mt],Kt[Xt]),T=At,D=Gt,H=Mt,O=Xt),(oe.equals(L)===!1||ze!==z)&&(s.blendColor(oe.r,oe.g,oe.b,ze),L.copy(oe),z=ze),S=X,C=!1}function ye(X,zt){X.side===wi?Ut(s.CULL_FACE):yt(s.CULL_FACE);let At=X.side===Qn;zt&&(At=!At),re(At),X.blending===Ns&&X.transparent===!1?V(ja):V(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Gt=X.stencilWrite;h.setTest(Gt),Gt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),se(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?yt(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function re(X){w!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),w=X)}function he(X){X!==nx?(yt(s.CULL_FACE),X!==G&&(X===N_?s.cullFace(s.BACK):X===ix?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),G=X}function Ht(X){X!==$&&(B&&s.lineWidth(X),$=X)}function se(X,zt,At){X?(yt(s.POLYGON_OFFSET_FILL),(Y!==zt||et!==At)&&(s.polygonOffset(zt,At),Y=zt,et=At)):Ut(s.POLYGON_OFFSET_FILL)}function Yt(X){X?yt(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function ie(X){X===void 0&&(X=s.TEXTURE0+lt-1),St!==X&&(s.activeTexture(X),St=X)}function Fe(X,zt,At){At===void 0&&(St===null?At=s.TEXTURE0+lt-1:At=St);let Gt=Tt[At];Gt===void 0&&(Gt={type:void 0,texture:void 0},Tt[At]=Gt),(Gt.type!==X||Gt.texture!==zt)&&(St!==At&&(s.activeTexture(At),St=At),s.bindTexture(X,zt||bt[X]),Gt.type=X,Gt.texture=zt)}function F(){const X=Tt[St];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function at(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _t(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ot(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function st(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function gt(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(X){pt.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),pt.copy(X))}function kt(X){K.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),K.copy(X))}function Pt(X,zt){let At=m.get(zt);At===void 0&&(At=new WeakMap,m.set(zt,At));let Gt=At.get(X);Gt===void 0&&(Gt=s.getUniformBlockIndex(zt,X.name),At.set(X,Gt))}function Nt(X,zt){const Gt=m.get(zt).get(X);p.get(zt)!==Gt&&(s.uniformBlockBinding(zt,Gt,X.__bindingPointIndex),p.set(zt,Gt))}function $t(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},St=null,Tt={},_={},y=new WeakMap,x=[],E=null,b=!1,S=null,g=null,T=null,D=null,R=null,H=null,O=null,L=new ve(0,0,0),z=0,C=!1,w=null,G=null,$=null,Y=null,et=null,pt.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:yt,disable:Ut,bindFramebuffer:qt,drawBuffers:Vt,useProgram:Jt,setBlending:V,setMaterial:ye,setFlipSided:re,setCullFace:he,setLineWidth:Ht,setPolygonOffset:se,setScissorTest:Yt,activeTexture:ie,bindTexture:Fe,unbindTexture:F,compressedTexImage2D:A,compressedTexImage3D:at,texImage2D:Ct,texImage3D:gt,updateUBOMapping:Pt,uniformBlockBinding:Nt,texStorage2D:Ot,texStorage3D:st,texSubImage2D:_t,texSubImage3D:Et,compressedTexSubImage2D:ht,compressedTexSubImage3D:jt,scissor:wt,viewport:kt,reset:$t}}function r2(s,t,i,r,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ue,v=new WeakMap;let _;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,A){return x?new OffscreenCanvas(F,A):cu("canvas")}function b(F,A,at){let _t=1;const Et=Fe(F);if((Et.width>at||Et.height>at)&&(_t=at/Math.max(Et.width,Et.height)),_t<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ht=Math.floor(_t*Et.width),jt=Math.floor(_t*Et.height);_===void 0&&(_=E(ht,jt));const Ot=A?E(ht,jt):_;return Ot.width=ht,Ot.height=jt,Ot.getContext("2d").drawImage(F,0,0,ht,jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+ht+"x"+jt+")."),Ot}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),F;return F}function S(F){return F.generateMipmaps}function g(F){s.generateMipmap(F)}function T(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(F,A,at,_t,Et=!1){if(F!==null){if(s[F]!==void 0)return s[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ht=A;if(A===s.RED&&(at===s.FLOAT&&(ht=s.R32F),at===s.HALF_FLOAT&&(ht=s.R16F),at===s.UNSIGNED_BYTE&&(ht=s.R8)),A===s.RED_INTEGER&&(at===s.UNSIGNED_BYTE&&(ht=s.R8UI),at===s.UNSIGNED_SHORT&&(ht=s.R16UI),at===s.UNSIGNED_INT&&(ht=s.R32UI),at===s.BYTE&&(ht=s.R8I),at===s.SHORT&&(ht=s.R16I),at===s.INT&&(ht=s.R32I)),A===s.RG&&(at===s.FLOAT&&(ht=s.RG32F),at===s.HALF_FLOAT&&(ht=s.RG16F),at===s.UNSIGNED_BYTE&&(ht=s.RG8)),A===s.RG_INTEGER&&(at===s.UNSIGNED_BYTE&&(ht=s.RG8UI),at===s.UNSIGNED_SHORT&&(ht=s.RG16UI),at===s.UNSIGNED_INT&&(ht=s.RG32UI),at===s.BYTE&&(ht=s.RG8I),at===s.SHORT&&(ht=s.RG16I),at===s.INT&&(ht=s.RG32I)),A===s.RGB_INTEGER&&(at===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),at===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),at===s.UNSIGNED_INT&&(ht=s.RGB32UI),at===s.BYTE&&(ht=s.RGB8I),at===s.SHORT&&(ht=s.RGB16I),at===s.INT&&(ht=s.RGB32I)),A===s.RGBA_INTEGER&&(at===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),at===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),at===s.UNSIGNED_INT&&(ht=s.RGBA32UI),at===s.BYTE&&(ht=s.RGBA8I),at===s.SHORT&&(ht=s.RGBA16I),at===s.INT&&(ht=s.RGBA32I)),A===s.RGB&&at===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),A===s.RGBA){const jt=Et?ou:Oe.getTransfer(_t);at===s.FLOAT&&(ht=s.RGBA32F),at===s.HALF_FLOAT&&(ht=s.RGBA16F),at===s.UNSIGNED_BYTE&&(ht=jt===Xe?s.SRGB8_ALPHA8:s.RGBA8),at===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),at===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function R(F,A){let at;return F?A===null||A===Ur||A===Ko?at=s.DEPTH24_STENCIL8:A===pa?at=s.DEPTH32F_STENCIL8:A===Zo&&(at=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ur||A===Ko?at=s.DEPTH_COMPONENT24:A===pa?at=s.DEPTH_COMPONENT32F:A===Zo&&(at=s.DEPTH_COMPONENT16),at}function H(F,A){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==Di&&F.minFilter!==Hi?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function O(F){const A=F.target;A.removeEventListener("dispose",O),z(A),A.isVideoTexture&&v.delete(A)}function L(F){const A=F.target;A.removeEventListener("dispose",L),w(A)}function z(F){const A=r.get(F);if(A.__webglInit===void 0)return;const at=F.source,_t=y.get(at);if(_t){const Et=_t[A.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&C(F),Object.keys(_t).length===0&&y.delete(at)}r.remove(F)}function C(F){const A=r.get(F);s.deleteTexture(A.__webglTexture);const at=F.source,_t=y.get(at);delete _t[A.__cacheKey],f.memory.textures--}function w(F){const A=r.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),r.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(A.__webglFramebuffer[_t]))for(let Et=0;Et<A.__webglFramebuffer[_t].length;Et++)s.deleteFramebuffer(A.__webglFramebuffer[_t][Et]);else s.deleteFramebuffer(A.__webglFramebuffer[_t]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[_t])}else{if(Array.isArray(A.__webglFramebuffer))for(let _t=0;_t<A.__webglFramebuffer.length;_t++)s.deleteFramebuffer(A.__webglFramebuffer[_t]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _t=0;_t<A.__webglColorRenderbuffer.length;_t++)A.__webglColorRenderbuffer[_t]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[_t]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const at=F.textures;for(let _t=0,Et=at.length;_t<Et;_t++){const ht=r.get(at[_t]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),f.memory.textures--),r.remove(at[_t])}r.remove(F)}let G=0;function $(){G=0}function Y(){const F=G;return F>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+l.maxTextures),G+=1,F}function et(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function lt(F,A){const at=r.get(F);if(F.isVideoTexture&&Yt(F),F.isRenderTargetTexture===!1&&F.version>0&&at.__version!==F.version){const _t=F.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{bt(at,F,A);return}}i.bindTexture(s.TEXTURE_2D,at.__webglTexture,s.TEXTURE0+A)}function B(F,A){const at=r.get(F);if(F.version>0&&at.__version!==F.version){bt(at,F,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,at.__webglTexture,s.TEXTURE0+A)}function Z(F,A){const at=r.get(F);if(F.version>0&&at.__version!==F.version){bt(at,F,A);return}i.bindTexture(s.TEXTURE_3D,at.__webglTexture,s.TEXTURE0+A)}function j(F,A){const at=r.get(F);if(F.version>0&&at.__version!==F.version){yt(at,F,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture,s.TEXTURE0+A)}const St={[su]:s.REPEAT,[Ya]:s.CLAMP_TO_EDGE,[Nh]:s.MIRRORED_REPEAT},Tt={[Di]:s.NEAREST,[Ux]:s.NEAREST_MIPMAP_NEAREST,[Mc]:s.NEAREST_MIPMAP_LINEAR,[Hi]:s.LINEAR,[Id]:s.LINEAR_MIPMAP_NEAREST,[Dr]:s.LINEAR_MIPMAP_LINEAR},I={[Px]:s.NEVER,[Gx]:s.ALWAYS,[zx]:s.LESS,[fy]:s.LEQUAL,[Ix]:s.EQUAL,[Hx]:s.GEQUAL,[Bx]:s.GREATER,[Fx]:s.NOTEQUAL};function nt(F,A){if(A.type===pa&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Hi||A.magFilter===Id||A.magFilter===Mc||A.magFilter===Dr||A.minFilter===Hi||A.minFilter===Id||A.minFilter===Mc||A.minFilter===Dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,St[A.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,St[A.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,St[A.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,Tt[A.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,Tt[A.minFilter]),A.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,I[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Di||A.minFilter!==Mc&&A.minFilter!==Dr||A.type===pa&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");s.texParameterf(F,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function pt(F,A){let at=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",O));const _t=A.source;let Et=y.get(_t);Et===void 0&&(Et={},y.set(_t,Et));const ht=et(A);if(ht!==F.__cacheKey){Et[ht]===void 0&&(Et[ht]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,at=!0),Et[ht].usedTimes++;const jt=Et[F.__cacheKey];jt!==void 0&&(Et[F.__cacheKey].usedTimes--,jt.usedTimes===0&&C(A)),F.__cacheKey=ht,F.__webglTexture=Et[ht].texture}return at}function K(F,A,at){return Math.floor(Math.floor(F/at)/A)}function dt(F,A,at,_t){const ht=F.updateRanges;if(ht.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,at,_t,A.data);else{ht.sort((gt,wt)=>gt.start-wt.start);let jt=0;for(let gt=1;gt<ht.length;gt++){const wt=ht[jt],kt=ht[gt],Pt=wt.start+wt.count,Nt=K(kt.start,A.width,4),$t=K(wt.start,A.width,4);kt.start<=Pt+1&&Nt===$t&&K(kt.start+kt.count-1,A.width,4)===Nt?wt.count=Math.max(wt.count,kt.start+kt.count-wt.start):(++jt,ht[jt]=kt)}ht.length=jt+1;const Ot=s.getParameter(s.UNPACK_ROW_LENGTH),st=s.getParameter(s.UNPACK_SKIP_PIXELS),Ct=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let gt=0,wt=ht.length;gt<wt;gt++){const kt=ht[gt],Pt=Math.floor(kt.start/4),Nt=Math.ceil(kt.count/4),$t=Pt%A.width,X=Math.floor(Pt/A.width),zt=Nt,At=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,$t),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,$t,X,zt,At,at,_t,A.data)}F.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ot),s.pixelStorei(s.UNPACK_SKIP_PIXELS,st),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ct)}}function bt(F,A,at){let _t=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_t=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_t=s.TEXTURE_3D);const Et=pt(F,A),ht=A.source;i.bindTexture(_t,F.__webglTexture,s.TEXTURE0+at);const jt=r.get(ht);if(ht.version!==jt.__version||Et===!0){i.activeTexture(s.TEXTURE0+at);const Ot=Oe.getPrimaries(Oe.workingColorSpace),st=A.colorSpace===qa?null:Oe.getPrimaries(A.colorSpace),Ct=A.colorSpace===qa||Ot===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let gt=b(A.image,!1,l.maxTextureSize);gt=ie(A,gt);const wt=c.convert(A.format,A.colorSpace),kt=c.convert(A.type);let Pt=D(A.internalFormat,wt,kt,A.colorSpace,A.isVideoTexture);nt(_t,A);let Nt;const $t=A.mipmaps,X=A.isVideoTexture!==!0,zt=jt.__version===void 0||Et===!0,At=ht.dataReady,Gt=H(A,gt);if(A.isDepthTexture)Pt=R(A.format===Jo,A.type),zt&&(X?i.texStorage2D(s.TEXTURE_2D,1,Pt,gt.width,gt.height):i.texImage2D(s.TEXTURE_2D,0,Pt,gt.width,gt.height,0,wt,kt,null));else if(A.isDataTexture)if($t.length>0){X&&zt&&i.texStorage2D(s.TEXTURE_2D,Gt,Pt,$t[0].width,$t[0].height);for(let Rt=0,Mt=$t.length;Rt<Mt;Rt++)Nt=$t[Rt],X?At&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Nt.width,Nt.height,wt,kt,Nt.data):i.texImage2D(s.TEXTURE_2D,Rt,Pt,Nt.width,Nt.height,0,wt,kt,Nt.data);A.generateMipmaps=!1}else X?(zt&&i.texStorage2D(s.TEXTURE_2D,Gt,Pt,gt.width,gt.height),At&&dt(A,gt,wt,kt)):i.texImage2D(s.TEXTURE_2D,0,Pt,gt.width,gt.height,0,wt,kt,gt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){X&&zt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,Pt,$t[0].width,$t[0].height,gt.depth);for(let Rt=0,Mt=$t.length;Rt<Mt;Rt++)if(Nt=$t[Rt],A.format!==Ci)if(wt!==null)if(X){if(At)if(A.layerUpdates.size>0){const Xt=pv(Nt.width,Nt.height,A.format,A.type);for(const oe of A.layerUpdates){const ze=Nt.data.subarray(oe*Xt/Nt.data.BYTES_PER_ELEMENT,(oe+1)*Xt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,oe,Nt.width,Nt.height,1,wt,ze)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,Nt.width,Nt.height,gt.depth,wt,Nt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Rt,Pt,Nt.width,Nt.height,gt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?At&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,Nt.width,Nt.height,gt.depth,wt,kt,Nt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Rt,Pt,Nt.width,Nt.height,gt.depth,0,wt,kt,Nt.data)}else{X&&zt&&i.texStorage2D(s.TEXTURE_2D,Gt,Pt,$t[0].width,$t[0].height);for(let Rt=0,Mt=$t.length;Rt<Mt;Rt++)Nt=$t[Rt],A.format!==Ci?wt!==null?X?At&&i.compressedTexSubImage2D(s.TEXTURE_2D,Rt,0,0,Nt.width,Nt.height,wt,Nt.data):i.compressedTexImage2D(s.TEXTURE_2D,Rt,Pt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?At&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Nt.width,Nt.height,wt,kt,Nt.data):i.texImage2D(s.TEXTURE_2D,Rt,Pt,Nt.width,Nt.height,0,wt,kt,Nt.data)}else if(A.isDataArrayTexture)if(X){if(zt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,Pt,gt.width,gt.height,gt.depth),At)if(A.layerUpdates.size>0){const Rt=pv(gt.width,gt.height,A.format,A.type);for(const Mt of A.layerUpdates){const Xt=gt.data.subarray(Mt*Rt/gt.data.BYTES_PER_ELEMENT,(Mt+1)*Rt/gt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Mt,gt.width,gt.height,1,wt,kt,Xt)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,wt,kt,gt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,gt.width,gt.height,gt.depth,0,wt,kt,gt.data);else if(A.isData3DTexture)X?(zt&&i.texStorage3D(s.TEXTURE_3D,Gt,Pt,gt.width,gt.height,gt.depth),At&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,wt,kt,gt.data)):i.texImage3D(s.TEXTURE_3D,0,Pt,gt.width,gt.height,gt.depth,0,wt,kt,gt.data);else if(A.isFramebufferTexture){if(zt)if(X)i.texStorage2D(s.TEXTURE_2D,Gt,Pt,gt.width,gt.height);else{let Rt=gt.width,Mt=gt.height;for(let Xt=0;Xt<Gt;Xt++)i.texImage2D(s.TEXTURE_2D,Xt,Pt,Rt,Mt,0,wt,kt,null),Rt>>=1,Mt>>=1}}else if($t.length>0){if(X&&zt){const Rt=Fe($t[0]);i.texStorage2D(s.TEXTURE_2D,Gt,Pt,Rt.width,Rt.height)}for(let Rt=0,Mt=$t.length;Rt<Mt;Rt++)Nt=$t[Rt],X?At&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,wt,kt,Nt):i.texImage2D(s.TEXTURE_2D,Rt,Pt,wt,kt,Nt);A.generateMipmaps=!1}else if(X){if(zt){const Rt=Fe(gt);i.texStorage2D(s.TEXTURE_2D,Gt,Pt,Rt.width,Rt.height)}At&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,wt,kt,gt)}else i.texImage2D(s.TEXTURE_2D,0,Pt,wt,kt,gt);S(A)&&g(_t),jt.__version=ht.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function yt(F,A,at){if(A.image.length!==6)return;const _t=pt(F,A),Et=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+at);const ht=r.get(Et);if(Et.version!==ht.__version||_t===!0){i.activeTexture(s.TEXTURE0+at);const jt=Oe.getPrimaries(Oe.workingColorSpace),Ot=A.colorSpace===qa?null:Oe.getPrimaries(A.colorSpace),st=A.colorSpace===qa||jt===Ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const Ct=A.isCompressedTexture||A.image[0].isCompressedTexture,gt=A.image[0]&&A.image[0].isDataTexture,wt=[];for(let Mt=0;Mt<6;Mt++)!Ct&&!gt?wt[Mt]=b(A.image[Mt],!0,l.maxCubemapSize):wt[Mt]=gt?A.image[Mt].image:A.image[Mt],wt[Mt]=ie(A,wt[Mt]);const kt=wt[0],Pt=c.convert(A.format,A.colorSpace),Nt=c.convert(A.type),$t=D(A.internalFormat,Pt,Nt,A.colorSpace),X=A.isVideoTexture!==!0,zt=ht.__version===void 0||_t===!0,At=Et.dataReady;let Gt=H(A,kt);nt(s.TEXTURE_CUBE_MAP,A);let Rt;if(Ct){X&&zt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Gt,$t,kt.width,kt.height);for(let Mt=0;Mt<6;Mt++){Rt=wt[Mt].mipmaps;for(let Xt=0;Xt<Rt.length;Xt++){const oe=Rt[Xt];A.format!==Ci?Pt!==null?X?At&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Xt,0,0,oe.width,oe.height,Pt,oe.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Xt,$t,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?At&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Xt,0,0,oe.width,oe.height,Pt,Nt,oe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Xt,$t,oe.width,oe.height,0,Pt,Nt,oe.data)}}}else{if(Rt=A.mipmaps,X&&zt){Rt.length>0&&Gt++;const Mt=Fe(wt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Gt,$t,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(gt){X?At&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,wt[Mt].width,wt[Mt].height,Pt,Nt,wt[Mt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,$t,wt[Mt].width,wt[Mt].height,0,Pt,Nt,wt[Mt].data);for(let Xt=0;Xt<Rt.length;Xt++){const ze=Rt[Xt].image[Mt].image;X?At&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Xt+1,0,0,ze.width,ze.height,Pt,Nt,ze.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Xt+1,$t,ze.width,ze.height,0,Pt,Nt,ze.data)}}else{X?At&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Pt,Nt,wt[Mt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,$t,Pt,Nt,wt[Mt]);for(let Xt=0;Xt<Rt.length;Xt++){const oe=Rt[Xt];X?At&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Xt+1,0,0,Pt,Nt,oe.image[Mt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Xt+1,$t,Pt,Nt,oe.image[Mt])}}}S(A)&&g(s.TEXTURE_CUBE_MAP),ht.__version=Et.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function Ut(F,A,at,_t,Et,ht){const jt=c.convert(at.format,at.colorSpace),Ot=c.convert(at.type),st=D(at.internalFormat,jt,Ot,at.colorSpace),Ct=r.get(A),gt=r.get(at);if(gt.__renderTarget=A,!Ct.__hasExternalTextures){const wt=Math.max(1,A.width>>ht),kt=Math.max(1,A.height>>ht);Et===s.TEXTURE_3D||Et===s.TEXTURE_2D_ARRAY?i.texImage3D(Et,ht,st,wt,kt,A.depth,0,jt,Ot,null):i.texImage2D(Et,ht,st,wt,kt,0,jt,Ot,null)}i.bindFramebuffer(s.FRAMEBUFFER,F),se(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_t,Et,gt.__webglTexture,0,Ht(A)):(Et===s.TEXTURE_2D||Et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_t,Et,gt.__webglTexture,ht),i.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(F,A,at){if(s.bindRenderbuffer(s.RENDERBUFFER,F),A.depthBuffer){const _t=A.depthTexture,Et=_t&&_t.isDepthTexture?_t.type:null,ht=R(A.stencilBuffer,Et),jt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ot=Ht(A);se(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ot,ht,A.width,A.height):at?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,ht,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ht,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,jt,s.RENDERBUFFER,F)}else{const _t=A.textures;for(let Et=0;Et<_t.length;Et++){const ht=_t[Et],jt=c.convert(ht.format,ht.colorSpace),Ot=c.convert(ht.type),st=D(ht.internalFormat,jt,Ot,ht.colorSpace),Ct=Ht(A);at&&se(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,st,A.width,A.height):se(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,st,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,st,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Vt(F,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=r.get(A.depthTexture);_t.__renderTarget=A,(!_t.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),lt(A.depthTexture,0);const Et=_t.__webglTexture,ht=Ht(A);if(A.depthTexture.format===Qo)se(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0);else if(A.depthTexture.format===Jo)se(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Jt(F){const A=r.get(F),at=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const _t=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),_t){const Et=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,_t.removeEventListener("dispose",Et)};_t.addEventListener("dispose",Et),A.__depthDisposeCallback=Et}A.__boundDepthTexture=_t}if(F.depthTexture&&!A.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");const _t=F.texture.mipmaps;_t&&_t.length>0?Vt(A.__webglFramebuffer[0],F):Vt(A.__webglFramebuffer,F)}else if(at){A.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[_t]),A.__webglDepthbuffer[_t]===void 0)A.__webglDepthbuffer[_t]=s.createRenderbuffer(),qt(A.__webglDepthbuffer[_t],F,!1);else{const Et=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer[_t];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,ht)}}else{const _t=F.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),qt(A.__webglDepthbuffer,F,!1);else{const Et=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,ht)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(F,A,at){const _t=r.get(F);A!==void 0&&Ut(_t.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),at!==void 0&&Jt(F)}function Kt(F){const A=F.texture,at=r.get(F),_t=r.get(A);F.addEventListener("dispose",L);const Et=F.textures,ht=F.isWebGLCubeRenderTarget===!0,jt=Et.length>1;if(jt||(_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture()),_t.__version=A.version,f.memory.textures++),ht){at.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer[Ot]=[];for(let st=0;st<A.mipmaps.length;st++)at.__webglFramebuffer[Ot][st]=s.createFramebuffer()}else at.__webglFramebuffer[Ot]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer=[];for(let Ot=0;Ot<A.mipmaps.length;Ot++)at.__webglFramebuffer[Ot]=s.createFramebuffer()}else at.__webglFramebuffer=s.createFramebuffer();if(jt)for(let Ot=0,st=Et.length;Ot<st;Ot++){const Ct=r.get(Et[Ot]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=s.createTexture(),f.memory.textures++)}if(F.samples>0&&se(F)===!1){at.__webglMultisampledFramebuffer=s.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Ot=0;Ot<Et.length;Ot++){const st=Et[Ot];at.__webglColorRenderbuffer[Ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,at.__webglColorRenderbuffer[Ot]);const Ct=c.convert(st.format,st.colorSpace),gt=c.convert(st.type),wt=D(st.internalFormat,Ct,gt,st.colorSpace,F.isXRRenderTarget===!0),kt=Ht(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,wt,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ot,s.RENDERBUFFER,at.__webglColorRenderbuffer[Ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(at.__webglDepthRenderbuffer=s.createRenderbuffer(),qt(at.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){i.bindTexture(s.TEXTURE_CUBE_MAP,_t.__webglTexture),nt(s.TEXTURE_CUBE_MAP,A);for(let Ot=0;Ot<6;Ot++)if(A.mipmaps&&A.mipmaps.length>0)for(let st=0;st<A.mipmaps.length;st++)Ut(at.__webglFramebuffer[Ot][st],F,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,st);else Ut(at.__webglFramebuffer[Ot],F,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);S(A)&&g(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Ot=0,st=Et.length;Ot<st;Ot++){const Ct=Et[Ot],gt=r.get(Ct);i.bindTexture(s.TEXTURE_2D,gt.__webglTexture),nt(s.TEXTURE_2D,Ct),Ut(at.__webglFramebuffer,F,Ct,s.COLOR_ATTACHMENT0+Ot,s.TEXTURE_2D,0),S(Ct)&&g(s.TEXTURE_2D)}i.unbindTexture()}else{let Ot=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ot=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ot,_t.__webglTexture),nt(Ot,A),A.mipmaps&&A.mipmaps.length>0)for(let st=0;st<A.mipmaps.length;st++)Ut(at.__webglFramebuffer[st],F,A,s.COLOR_ATTACHMENT0,Ot,st);else Ut(at.__webglFramebuffer,F,A,s.COLOR_ATTACHMENT0,Ot,0);S(A)&&g(Ot),i.unbindTexture()}F.depthBuffer&&Jt(F)}function V(F){const A=F.textures;for(let at=0,_t=A.length;at<_t;at++){const Et=A[at];if(S(Et)){const ht=T(F),jt=r.get(Et).__webglTexture;i.bindTexture(ht,jt),g(ht),i.unbindTexture()}}}const ye=[],re=[];function he(F){if(F.samples>0){if(se(F)===!1){const A=F.textures,at=F.width,_t=F.height;let Et=s.COLOR_BUFFER_BIT;const ht=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,jt=r.get(F),Ot=A.length>1;if(Ot)for(let Ct=0;Ct<A.length;Ct++)i.bindFramebuffer(s.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,jt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const st=F.texture.mipmaps;st&&st.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let Ct=0;Ct<A.length;Ct++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Et|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Et|=s.STENCIL_BUFFER_BIT)),Ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,jt.__webglColorRenderbuffer[Ct]);const gt=r.get(A[Ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,gt,0)}s.blitFramebuffer(0,0,at,_t,0,0,at,_t,Et,s.NEAREST),p===!0&&(ye.length=0,re.length=0,ye.push(s.COLOR_ATTACHMENT0+Ct),F.depthBuffer&&F.resolveDepthBuffer===!1&&(ye.push(ht),re.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,re)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ye))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ot)for(let Ct=0;Ct<A.length;Ct++){i.bindFramebuffer(s.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,jt.__webglColorRenderbuffer[Ct]);const gt=r.get(A[Ct]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,jt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,gt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const A=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Ht(F){return Math.min(l.maxSamples,F.samples)}function se(F){const A=r.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Yt(F){const A=f.render.frame;v.get(F)!==A&&(v.set(F,A),F.update())}function ie(F,A){const at=F.colorSpace,_t=F.format,Et=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||at!==Fs&&at!==qa&&(Oe.getTransfer(at)===Xe?(_t!==Ci||Et!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),A}function Fe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(m.width=F.naturalWidth||F.width,m.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(m.width=F.displayWidth,m.height=F.displayHeight):(m.width=F.width,m.height=F.height),m}this.allocateTextureUnit=Y,this.resetTextureUnits=$,this.setTexture2D=lt,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=Lt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=se}function s2(s,t){function i(r,l=qa){let c;const f=Oe.getTransfer(l);if(r===Vi)return s.UNSIGNED_BYTE;if(r===_p)return s.UNSIGNED_SHORT_4_4_4_4;if(r===vp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ay)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ny)return s.BYTE;if(r===iy)return s.SHORT;if(r===Zo)return s.UNSIGNED_SHORT;if(r===gp)return s.INT;if(r===Ur)return s.UNSIGNED_INT;if(r===pa)return s.FLOAT;if(r===il)return s.HALF_FLOAT;if(r===ry)return s.ALPHA;if(r===sy)return s.RGB;if(r===Ci)return s.RGBA;if(r===Qo)return s.DEPTH_COMPONENT;if(r===Jo)return s.DEPTH_STENCIL;if(r===oy)return s.RED;if(r===yp)return s.RED_INTEGER;if(r===ly)return s.RG;if(r===Sp)return s.RG_INTEGER;if(r===Mp)return s.RGBA_INTEGER;if(r===Jc||r===$c||r===tu||r===eu)if(f===Xe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Oh||r===Ph||r===zh||r===Ih)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Oh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ph)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ih)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bh||r===Fh||r===Hh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Bh||r===Fh)return f===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Hh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===jh||r===Zh||r===Kh||r===Qh||r===Jh||r===$h||r===tp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Gh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jh)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$h)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===tp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===nu||r===ep||r===np)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===nu)return f===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ep)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===np)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cy||r===ip||r===ap||r===rp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===nu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===ip)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ap)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ko?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const o2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l2=`
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

}`;class c2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new kn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ja({vertexShader:o2,fragmentShader:l2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $e(new cl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u2 extends Gs{constructor(t,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",p=1,m=null,v=null,_=null,y=null,x=null,E=null;const b=new c2,S=i.getContextAttributes();let g=null,T=null;const D=[],R=[],H=new ue;let O=null;const L=new Vn;L.viewport=new qe;const z=new Vn;z.viewport=new qe;const C=[L,z],w=new CE;let G=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let dt=D[K];return dt===void 0&&(dt=new rh,D[K]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(K){let dt=D[K];return dt===void 0&&(dt=new rh,D[K]=dt),dt.getGripSpace()},this.getHand=function(K){let dt=D[K];return dt===void 0&&(dt=new rh,D[K]=dt),dt.getHandSpace()};function Y(K){const dt=R.indexOf(K.inputSource);if(dt===-1)return;const bt=D[dt];bt!==void 0&&(bt.update(K.inputSource,K.frame,m||f),bt.dispatchEvent({type:K.type,data:K.inputSource}))}function et(){l.removeEventListener("select",Y),l.removeEventListener("selectstart",Y),l.removeEventListener("selectend",Y),l.removeEventListener("squeeze",Y),l.removeEventListener("squeezestart",Y),l.removeEventListener("squeezeend",Y),l.removeEventListener("end",et),l.removeEventListener("inputsourceschange",lt);for(let K=0;K<D.length;K++){const dt=R[K];dt!==null&&(R[K]=null,D[K].disconnect(dt))}G=null,$=null,b.reset(),t.setRenderTarget(g),x=null,y=null,_=null,l=null,T=null,pt.stop(),r.isPresenting=!1,t.setPixelRatio(O),t.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){h=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",Y),l.addEventListener("selectstart",Y),l.addEventListener("selectend",Y),l.addEventListener("squeeze",Y),l.addEventListener("squeezestart",Y),l.addEventListener("squeezeend",Y),l.addEventListener("end",et),l.addEventListener("inputsourceschange",lt),S.xrCompatible!==!0&&await i.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,yt=null,Ut=null;S.depth&&(Ut=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=S.stencil?Jo:Qo,yt=S.stencil?Ko:Ur);const qt={colorFormat:i.RGBA8,depthFormat:Ut,scaleFactor:c};_=new XRWebGLBinding(l,i),y=_.createProjectionLayer(qt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),T=new Lr(y.textureWidth,y.textureHeight,{format:Ci,type:Vi,depthTexture:new My(y.textureWidth,y.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const bt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),T=new Lr(x.framebufferWidth,x.framebufferHeight,{format:Ci,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),pt.setContext(l),pt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function lt(K){for(let dt=0;dt<K.removed.length;dt++){const bt=K.removed[dt],yt=R.indexOf(bt);yt>=0&&(R[yt]=null,D[yt].disconnect(bt))}for(let dt=0;dt<K.added.length;dt++){const bt=K.added[dt];let yt=R.indexOf(bt);if(yt===-1){for(let qt=0;qt<D.length;qt++)if(qt>=R.length){R.push(bt),yt=qt;break}else if(R[qt]===null){R[qt]=bt,yt=qt;break}if(yt===-1)break}const Ut=D[yt];Ut&&Ut.connect(bt)}}const B=new W,Z=new W;function j(K,dt,bt){B.setFromMatrixPosition(dt.matrixWorld),Z.setFromMatrixPosition(bt.matrixWorld);const yt=B.distanceTo(Z),Ut=dt.projectionMatrix.elements,qt=bt.projectionMatrix.elements,Vt=Ut[14]/(Ut[10]-1),Jt=Ut[14]/(Ut[10]+1),Lt=(Ut[9]+1)/Ut[5],Kt=(Ut[9]-1)/Ut[5],V=(Ut[8]-1)/Ut[0],ye=(qt[8]+1)/qt[0],re=Vt*V,he=Vt*ye,Ht=yt/(-V+ye),se=Ht*-V;if(dt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(se),K.translateZ(Ht),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ut[10]===-1)K.projectionMatrix.copy(dt.projectionMatrix),K.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Yt=Vt+Ht,ie=Jt+Ht,Fe=re-se,F=he+(yt-se),A=Lt*Jt/ie*Yt,at=Kt*Jt/ie*Yt;K.projectionMatrix.makePerspective(Fe,F,A,at,Yt,ie),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function St(K,dt){dt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(dt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let dt=K.near,bt=K.far;b.texture!==null&&(b.depthNear>0&&(dt=b.depthNear),b.depthFar>0&&(bt=b.depthFar)),w.near=z.near=L.near=dt,w.far=z.far=L.far=bt,(G!==w.near||$!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),G=w.near,$=w.far),L.layers.mask=K.layers.mask|2,z.layers.mask=K.layers.mask|4,w.layers.mask=L.layers.mask|z.layers.mask;const yt=K.parent,Ut=w.cameras;St(w,yt);for(let qt=0;qt<Ut.length;qt++)St(Ut[qt],yt);Ut.length===2?j(w,L,z):w.projectionMatrix.copy(L.projectionMatrix),Tt(K,w,yt)};function Tt(K,dt,bt){bt===null?K.matrix.copy(dt.matrixWorld):(K.matrix.copy(bt.matrixWorld),K.matrix.invert(),K.matrix.multiply(dt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(dt.projectionMatrix),K.projectionMatrixInverse.copy(dt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=op*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(y===null&&x===null))return p},this.setFoveation=function(K){p=K,y!==null&&(y.fixedFoveation=K),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=K)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(w)};let I=null;function nt(K,dt){if(v=dt.getViewerPose(m||f),E=dt,v!==null){const bt=v.views;x!==null&&(t.setRenderTargetFramebuffer(T,x.framebuffer),t.setRenderTarget(T));let yt=!1;bt.length!==w.cameras.length&&(w.cameras.length=0,yt=!0);for(let Vt=0;Vt<bt.length;Vt++){const Jt=bt[Vt];let Lt=null;if(x!==null)Lt=x.getViewport(Jt);else{const V=_.getViewSubImage(y,Jt);Lt=V.viewport,Vt===0&&(t.setRenderTargetTextures(T,V.colorTexture,V.depthStencilTexture),t.setRenderTarget(T))}let Kt=C[Vt];Kt===void 0&&(Kt=new Vn,Kt.layers.enable(Vt),Kt.viewport=new qe,C[Vt]=Kt),Kt.matrix.fromArray(Jt.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Jt.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Vt===0&&(w.matrix.copy(Kt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),yt===!0&&w.cameras.push(Kt)}const Ut=l.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Vt=_.getDepthInformation(bt[0]);Vt&&Vt.isValid&&Vt.texture&&b.init(t,Vt,l.renderState)}}for(let bt=0;bt<D.length;bt++){const yt=R[bt],Ut=D[bt];yt!==null&&Ut!==void 0&&Ut.update(yt,dt,m||f)}I&&I(K,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),E=null}const pt=new by;pt.setAnimationLoop(nt),this.setAnimationLoop=function(K){I=K},this.dispose=function(){}}}const br=new ki,f2=new Ze;function d2(s,t){function i(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,_y(s)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function l(S,g,T,D,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(S,g):g.isMeshToonMaterial?(c(S,g),_(S,g)):g.isMeshPhongMaterial?(c(S,g),v(S,g)):g.isMeshStandardMaterial?(c(S,g),y(S,g),g.isMeshPhysicalMaterial&&x(S,g,R)):g.isMeshMatcapMaterial?(c(S,g),E(S,g)):g.isMeshDepthMaterial?c(S,g):g.isMeshDistanceMaterial?(c(S,g),b(S,g)):g.isMeshNormalMaterial?c(S,g):g.isLineBasicMaterial?(f(S,g),g.isLineDashedMaterial&&h(S,g)):g.isPointsMaterial?p(S,g,T,D):g.isSpriteMaterial?m(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,i(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===Qn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,i(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===Qn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,i(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,i(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const T=t.get(g),D=T.envMap,R=T.envMapRotation;D&&(S.envMap.value=D,br.copy(R),br.x*=-1,br.y*=-1,br.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),S.envMapRotation.value.setFromMatrix4(f2.makeRotationFromEuler(br)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,S.aoMapTransform))}function f(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform))}function h(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function p(S,g,T,D){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*T,S.scale.value=D*.5,g.map&&(S.map.value=g.map,i(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function m(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function v(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function _(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function y(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function x(S,g,T){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=T.texture,S.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,g){g.matcap&&(S.matcap.value=g.matcap)}function b(S,g){const T=t.get(g).light;S.referencePosition.value.setFromMatrixPosition(T.matrixWorld),S.nearDistance.value=T.shadow.camera.near,S.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function h2(s,t,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(T,D){const R=D.program;r.uniformBlockBinding(T,R)}function m(T,D){let R=l[T.id];R===void 0&&(E(T),R=v(T),l[T.id]=R,T.addEventListener("dispose",S));const H=D.program;r.updateUBOMapping(T,H);const O=t.render.frame;c[T.id]!==O&&(y(T),c[T.id]=O)}function v(T){const D=_();T.__bindingPointIndex=D;const R=s.createBuffer(),H=T.__size,O=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,H,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,R),R}function _(){for(let T=0;T<h;T++)if(f.indexOf(T)===-1)return f.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(T){const D=l[T.id],R=T.uniforms,H=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let O=0,L=R.length;O<L;O++){const z=Array.isArray(R[O])?R[O]:[R[O]];for(let C=0,w=z.length;C<w;C++){const G=z[C];if(x(G,O,C,H)===!0){const $=G.__offset,Y=Array.isArray(G.value)?G.value:[G.value];let et=0;for(let lt=0;lt<Y.length;lt++){const B=Y[lt],Z=b(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,$+et,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,et),et+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(T,D,R,H){const O=T.value,L=D+"_"+R;if(H[L]===void 0)return typeof O=="number"||typeof O=="boolean"?H[L]=O:H[L]=O.clone(),!0;{const z=H[L];if(typeof O=="number"||typeof O=="boolean"){if(z!==O)return H[L]=O,!0}else if(z.equals(O)===!1)return z.copy(O),!0}return!1}function E(T){const D=T.uniforms;let R=0;const H=16;for(let L=0,z=D.length;L<z;L++){const C=Array.isArray(D[L])?D[L]:[D[L]];for(let w=0,G=C.length;w<G;w++){const $=C[w],Y=Array.isArray($.value)?$.value:[$.value];for(let et=0,lt=Y.length;et<lt;et++){const B=Y[et],Z=b(B),j=R%H,St=j%Z.boundary,Tt=j+St;R+=St,Tt!==0&&H-Tt<Z.storage&&(R+=H-Tt),$.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=R,R+=Z.storage}}}const O=R%H;return O>0&&(R+=H-O),T.__size=R,T.__cache={},this}function b(T){const D={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(D.boundary=4,D.storage=4):T.isVector2?(D.boundary=8,D.storage=8):T.isVector3||T.isColor?(D.boundary=16,D.storage=12):T.isVector4?(D.boundary=16,D.storage=16):T.isMatrix3?(D.boundary=48,D.storage=48):T.isMatrix4?(D.boundary=64,D.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),D}function S(T){const D=T.target;D.removeEventListener("dispose",S);const R=f.indexOf(D.__bindingPointIndex);f.splice(R,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function g(){for(const T in l)s.deleteBuffer(l[T]);f=[],l={},c={}}return{bind:p,update:m,dispose:g}}class zp{constructor(t={}){const{canvas:i=kx(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=f;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,g=null;const T=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let H=!1;this._outputColorSpace=Gn;let O=0,L=0,z=null,C=-1,w=null;const G=new qe,$=new qe;let Y=null;const et=new ve(0);let lt=0,B=i.width,Z=i.height,j=1,St=null,Tt=null;const I=new qe(0,0,B,Z),nt=new qe(0,0,B,Z);let pt=!1;const K=new Ap;let dt=!1,bt=!1;const yt=new Ze,Ut=new Ze,qt=new W,Vt=new qe,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function Kt(){return z===null?j:1}let V=r;function ye(N,J){return i.getContext(N,J)}try{const N={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${mp}`),i.addEventListener("webglcontextlost",Gt,!1),i.addEventListener("webglcontextrestored",Rt,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),V===null){const J="webgl2";if(V=ye(J,N),V===null)throw ye(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let re,he,Ht,se,Yt,ie,Fe,F,A,at,_t,Et,ht,jt,Ot,st,Ct,gt,wt,kt,Pt,Nt,$t,X;function zt(){re=new bT(V),re.init(),Nt=new s2(V,re),he=new _T(V,re,t,Nt),Ht=new a2(V,re),he.reverseDepthBuffer&&y&&Ht.buffers.depth.setReversed(!0),se=new RT(V),Yt=new WA,ie=new r2(V,re,Ht,Yt,he,Nt,se),Fe=new yT(R),F=new ET(R),A=new NE(V),$t=new mT(V,A),at=new TT(V,A,se,$t),_t=new CT(V,at,A,se),wt=new wT(V,he,ie),st=new vT(Yt),Et=new XA(R,Fe,F,re,he,$t,st),ht=new d2(R,Yt),jt=new YA,Ot=new $A(re),gt=new pT(R,Fe,F,Ht,_t,x,p),Ct=new n2(R,_t,he),X=new h2(V,se,he,Ht),kt=new gT(V,re,se),Pt=new AT(V,re,se),se.programs=Et.programs,R.capabilities=he,R.extensions=re,R.properties=Yt,R.renderLists=jt,R.shadowMap=Ct,R.state=Ht,R.info=se}zt();const At=new u2(R,V);this.xr=At,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const N=re.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=re.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(N){N!==void 0&&(j=N,this.setSize(B,Z,!1))},this.getSize=function(N){return N.set(B,Z)},this.setSize=function(N,J,ct=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=N,Z=J,i.width=Math.floor(N*j),i.height=Math.floor(J*j),ct===!0&&(i.style.width=N+"px",i.style.height=J+"px"),this.setViewport(0,0,N,J)},this.getDrawingBufferSize=function(N){return N.set(B*j,Z*j).floor()},this.setDrawingBufferSize=function(N,J,ct){B=N,Z=J,j=ct,i.width=Math.floor(N*ct),i.height=Math.floor(J*ct),this.setViewport(0,0,N,J)},this.getCurrentViewport=function(N){return N.copy(G)},this.getViewport=function(N){return N.copy(I)},this.setViewport=function(N,J,ct,ut){N.isVector4?I.set(N.x,N.y,N.z,N.w):I.set(N,J,ct,ut),Ht.viewport(G.copy(I).multiplyScalar(j).round())},this.getScissor=function(N){return N.copy(nt)},this.setScissor=function(N,J,ct,ut){N.isVector4?nt.set(N.x,N.y,N.z,N.w):nt.set(N,J,ct,ut),Ht.scissor($.copy(nt).multiplyScalar(j).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(N){Ht.setScissorTest(pt=N)},this.setOpaqueSort=function(N){St=N},this.setTransparentSort=function(N){Tt=N},this.getClearColor=function(N){return N.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor(...arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha(...arguments)},this.clear=function(N=!0,J=!0,ct=!0){let ut=0;if(N){let Q=!1;if(z!==null){const Dt=z.texture.format;Q=Dt===Mp||Dt===Sp||Dt===yp}if(Q){const Dt=z.texture.type,It=Dt===Vi||Dt===Ur||Dt===Zo||Dt===Ko||Dt===_p||Dt===vp,Wt=gt.getClearColor(),Ft=gt.getClearAlpha(),le=Wt.r,ce=Wt.g,te=Wt.b;It?(E[0]=le,E[1]=ce,E[2]=te,E[3]=Ft,V.clearBufferuiv(V.COLOR,0,E)):(b[0]=le,b[1]=ce,b[2]=te,b[3]=Ft,V.clearBufferiv(V.COLOR,0,b))}else ut|=V.COLOR_BUFFER_BIT}J&&(ut|=V.DEPTH_BUFFER_BIT),ct&&(ut|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Gt,!1),i.removeEventListener("webglcontextrestored",Rt,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),gt.dispose(),jt.dispose(),Ot.dispose(),Yt.dispose(),Fe.dispose(),F.dispose(),_t.dispose(),$t.dispose(),X.dispose(),Et.dispose(),At.dispose(),At.removeEventListener("sessionstart",ks),At.removeEventListener("sessionend",Xs),Ni.stop()};function Gt(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const N=se.autoReset,J=Ct.enabled,ct=Ct.autoUpdate,ut=Ct.needsUpdate,Q=Ct.type;zt(),se.autoReset=N,Ct.enabled=J,Ct.autoUpdate=ct,Ct.needsUpdate=ut,Ct.type=Q}function Mt(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Xt(N){const J=N.target;J.removeEventListener("dispose",Xt),oe(J)}function oe(N){ze(N),Yt.remove(N)}function ze(N){const J=Yt.get(N).programs;J!==void 0&&(J.forEach(function(ct){Et.releaseProgram(ct)}),N.isShaderMaterial&&Et.releaseShaderCache(N))}this.renderBufferDirect=function(N,J,ct,ut,Q,Dt){J===null&&(J=Jt);const It=Q.isMesh&&Q.matrixWorld.determinant()<0,Wt=qs(N,J,ct,ut,Q);Ht.setMaterial(ut,It);let Ft=ct.index,le=1;if(ut.wireframe===!0){if(Ft=at.getWireframeAttribute(ct),Ft===void 0)return;le=2}const ce=ct.drawRange,te=ct.attributes.position;let Se=ce.start*le,Ue=(ce.start+ce.count)*le;Dt!==null&&(Se=Math.max(Se,Dt.start*le),Ue=Math.min(Ue,(Dt.start+Dt.count)*le)),Ft!==null?(Se=Math.max(Se,0),Ue=Math.min(Ue,Ft.count)):te!=null&&(Se=Math.max(Se,0),Ue=Math.min(Ue,te.count));const Ye=Ue-Se;if(Ye<0||Ye===1/0)return;$t.setup(Q,ut,Wt,ct,Ft);let Re,ge=kt;if(Ft!==null&&(Re=A.get(Ft),ge=Pt,ge.setIndex(Re)),Q.isMesh)ut.wireframe===!0?(Ht.setLineWidth(ut.wireframeLinewidth*Kt()),ge.setMode(V.LINES)):ge.setMode(V.TRIANGLES);else if(Q.isLine){let ne=ut.linewidth;ne===void 0&&(ne=1),Ht.setLineWidth(ne*Kt()),Q.isLineSegments?ge.setMode(V.LINES):Q.isLineLoop?ge.setMode(V.LINE_LOOP):ge.setMode(V.LINE_STRIP)}else Q.isPoints?ge.setMode(V.POINTS):Q.isSprite&&ge.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Os("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))ge.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const ne=Q._multiDrawStarts,Ke=Q._multiDrawCounts,be=Q._multiDrawCount,Un=Ft?A.get(Ft).bytesPerElement:1,Mi=Yt.get(ut).currentProgram.getUniforms();for(let zn=0;zn<be;zn++)Mi.setValue(V,"_gl_DrawID",zn),ge.render(ne[zn]/Un,Ke[zn])}else if(Q.isInstancedMesh)ge.renderInstances(Se,Ye,Q.count);else if(ct.isInstancedBufferGeometry){const ne=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Ke=Math.min(ct.instanceCount,ne);ge.renderInstances(Se,Ye,Ke)}else ge.render(Se,Ye)};function De(N,J,ct){N.transparent===!0&&N.side===wi&&N.forceSinglePass===!1?(N.side=Qn,N.needsUpdate=!0,an(N,J,ct),N.side=Qa,N.needsUpdate=!0,an(N,J,ct),N.side=wi):an(N,J,ct)}this.compile=function(N,J,ct=null){ct===null&&(ct=N),g=Ot.get(ct),g.init(J),D.push(g),ct.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),N!==ct&&N.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),g.setupLights();const ut=new Set;return N.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Dt=Q.material;if(Dt)if(Array.isArray(Dt))for(let It=0;It<Dt.length;It++){const Wt=Dt[It];De(Wt,ct,Q),ut.add(Wt)}else De(Dt,ct,Q),ut.add(Dt)}),g=D.pop(),ut},this.compileAsync=function(N,J,ct=null){const ut=this.compile(N,J,ct);return new Promise(Q=>{function Dt(){if(ut.forEach(function(It){Yt.get(It).currentProgram.isReady()&&ut.delete(It)}),ut.size===0){Q(N);return}setTimeout(Dt,10)}re.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let En=null;function yi(N){En&&En(N)}function ks(){Ni.stop()}function Xs(){Ni.start()}const Ni=new by;Ni.setAnimationLoop(yi),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(N){En=N,At.setAnimationLoop(N),N===null?Ni.stop():Ni.start()},At.addEventListener("sessionstart",ks),At.addEventListener("sessionend",Xs),this.render=function(N,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(J),J=At.getCamera()),N.isScene===!0&&N.onBeforeRender(R,N,J,z),g=Ot.get(N,D.length),g.init(J),D.push(g),Ut.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),K.setFromProjectionMatrix(Ut),bt=this.localClippingEnabled,dt=st.init(this.clippingPlanes,bt),S=jt.get(N,T.length),S.init(),T.push(S),At.enabled===!0&&At.isPresenting===!0){const Dt=R.xr.getDepthSensingMesh();Dt!==null&&tr(Dt,J,-1/0,R.sortObjects)}tr(N,J,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(St,Tt),Lt=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Lt&&gt.addToRenderList(S,N),this.info.render.frame++,dt===!0&&st.beginShadows();const ct=g.state.shadowsArray;Ct.render(ct,N,J),dt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=S.opaque,Q=S.transmissive;if(g.setupLights(),J.isArrayCamera){const Dt=J.cameras;if(Q.length>0)for(let It=0,Wt=Dt.length;It<Wt;It++){const Ft=Dt[It];Ws(ut,Q,N,Ft)}Lt&&gt.render(N);for(let It=0,Wt=Dt.length;It<Wt;It++){const Ft=Dt[It];Or(S,N,Ft,Ft.viewport)}}else Q.length>0&&Ws(ut,Q,N,J),Lt&&gt.render(N),Or(S,N,J);z!==null&&L===0&&(ie.updateMultisampleRenderTarget(z),ie.updateRenderTargetMipmap(z)),N.isScene===!0&&N.onAfterRender(R,N,J),$t.resetDefaultState(),C=-1,w=null,D.pop(),D.length>0?(g=D[D.length-1],dt===!0&&st.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,T.pop(),T.length>0?S=T[T.length-1]:S=null};function tr(N,J,ct,ut){if(N.visible===!1)return;if(N.layers.test(J.layers)){if(N.isGroup)ct=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(J);else if(N.isLight)g.pushLight(N),N.castShadow&&g.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||K.intersectsSprite(N)){ut&&Vt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Ut);const It=_t.update(N),Wt=N.material;Wt.visible&&S.push(N,It,Wt,ct,Vt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||K.intersectsObject(N))){const It=_t.update(N),Wt=N.material;if(ut&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Vt.copy(N.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Vt.copy(It.boundingSphere.center)),Vt.applyMatrix4(N.matrixWorld).applyMatrix4(Ut)),Array.isArray(Wt)){const Ft=It.groups;for(let le=0,ce=Ft.length;le<ce;le++){const te=Ft[le],Se=Wt[te.materialIndex];Se&&Se.visible&&S.push(N,It,Se,ct,Vt.z,te)}}else Wt.visible&&S.push(N,It,Wt,ct,Vt.z,null)}}const Dt=N.children;for(let It=0,Wt=Dt.length;It<Wt;It++)tr(Dt[It],J,ct,ut)}function Or(N,J,ct,ut){const Q=N.opaque,Dt=N.transmissive,It=N.transparent;g.setupLightsView(ct),dt===!0&&st.setGlobalState(R.clippingPlanes,ct),ut&&Ht.viewport(G.copy(ut)),Q.length>0&&er(Q,J,ct),Dt.length>0&&er(Dt,J,ct),It.length>0&&er(It,J,ct),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function Ws(N,J,ct,ut){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ut.id]===void 0&&(g.state.transmissionRenderTarget[ut.id]=new Lr(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?il:Vi,minFilter:Dr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const Dt=g.state.transmissionRenderTarget[ut.id],It=ut.viewport||G;Dt.setSize(It.z*R.transmissionResolutionScale,It.w*R.transmissionResolutionScale);const Wt=R.getRenderTarget(),Ft=R.getActiveCubeFace(),le=R.getActiveMipmapLevel();R.setRenderTarget(Dt),R.getClearColor(et),lt=R.getClearAlpha(),lt<1&&R.setClearColor(16777215,.5),R.clear(),Lt&&gt.render(ct);const ce=R.toneMapping;R.toneMapping=Za;const te=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),g.setupLightsView(ut),dt===!0&&st.setGlobalState(R.clippingPlanes,ut),er(N,ct,ut),ie.updateMultisampleRenderTarget(Dt),ie.updateRenderTargetMipmap(Dt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Ue=0,Ye=J.length;Ue<Ye;Ue++){const Re=J[Ue],ge=Re.object,ne=Re.geometry,Ke=Re.material,be=Re.group;if(Ke.side===wi&&ge.layers.test(ut.layers)){const Un=Ke.side;Ke.side=Qn,Ke.needsUpdate=!0,Si(ge,ct,ut,ne,Ke,be),Ke.side=Un,Ke.needsUpdate=!0,Se=!0}}Se===!0&&(ie.updateMultisampleRenderTarget(Dt),ie.updateRenderTargetMipmap(Dt))}R.setRenderTarget(Wt,Ft,le),R.setClearColor(et,lt),te!==void 0&&(ut.viewport=te),R.toneMapping=ce}function er(N,J,ct){const ut=J.isScene===!0?J.overrideMaterial:null;for(let Q=0,Dt=N.length;Q<Dt;Q++){const It=N[Q],Wt=It.object,Ft=It.geometry,le=It.group;let ce=It.material;ce.allowOverride===!0&&ut!==null&&(ce=ut),Wt.layers.test(ct.layers)&&Si(Wt,J,ct,Ft,ce,le)}}function Si(N,J,ct,ut,Q,Dt){N.onBeforeRender(R,J,ct,ut,Q,Dt),N.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Q.onBeforeRender(R,J,ct,ut,N,Dt),Q.transparent===!0&&Q.side===wi&&Q.forceSinglePass===!1?(Q.side=Qn,Q.needsUpdate=!0,R.renderBufferDirect(ct,J,ut,Q,N,Dt),Q.side=Qa,Q.needsUpdate=!0,R.renderBufferDirect(ct,J,ut,Q,N,Dt),Q.side=wi):R.renderBufferDirect(ct,J,ut,Q,N,Dt),N.onAfterRender(R,J,ct,ut,Q,Dt)}function an(N,J,ct){J.isScene!==!0&&(J=Jt);const ut=Yt.get(N),Q=g.state.lights,Dt=g.state.shadowsArray,It=Q.state.version,Wt=Et.getParameters(N,Q.state,Dt,J,ct),Ft=Et.getProgramCacheKey(Wt);let le=ut.programs;ut.environment=N.isMeshStandardMaterial?J.environment:null,ut.fog=J.fog,ut.envMap=(N.isMeshStandardMaterial?F:Fe).get(N.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&N.envMap===null?J.environmentRotation:N.envMapRotation,le===void 0&&(N.addEventListener("dispose",Xt),le=new Map,ut.programs=le);let ce=le.get(Ft);if(ce!==void 0){if(ut.currentProgram===ce&&ut.lightsStateVersion===It)return Xi(N,Wt),ce}else Wt.uniforms=Et.getUniforms(N),N.onBeforeCompile(Wt,R),ce=Et.acquireProgram(Wt,Ft),le.set(Ft,ce),ut.uniforms=Wt.uniforms;const te=ut.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(te.clippingPlanes=st.uniform),Xi(N,Wt),ut.needsLights=Au(N),ut.lightsStateVersion=It,ut.needsLights&&(te.ambientLightColor.value=Q.state.ambient,te.lightProbe.value=Q.state.probe,te.directionalLights.value=Q.state.directional,te.directionalLightShadows.value=Q.state.directionalShadow,te.spotLights.value=Q.state.spot,te.spotLightShadows.value=Q.state.spotShadow,te.rectAreaLights.value=Q.state.rectArea,te.ltc_1.value=Q.state.rectAreaLTC1,te.ltc_2.value=Q.state.rectAreaLTC2,te.pointLights.value=Q.state.point,te.pointLightShadows.value=Q.state.pointShadow,te.hemisphereLights.value=Q.state.hemi,te.directionalShadowMap.value=Q.state.directionalShadowMap,te.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,te.spotShadowMap.value=Q.state.spotShadowMap,te.spotLightMatrix.value=Q.state.spotLightMatrix,te.spotLightMap.value=Q.state.spotLightMap,te.pointShadowMap.value=Q.state.pointShadowMap,te.pointShadowMatrix.value=Q.state.pointShadowMatrix),ut.currentProgram=ce,ut.uniformsList=null,ce}function bn(N){if(N.uniformsList===null){const J=N.currentProgram.getUniforms();N.uniformsList=au.seqWithValue(J.seq,N.uniforms)}return N.uniformsList}function Xi(N,J){const ct=Yt.get(N);ct.outputColorSpace=J.outputColorSpace,ct.batching=J.batching,ct.batchingColor=J.batchingColor,ct.instancing=J.instancing,ct.instancingColor=J.instancingColor,ct.instancingMorph=J.instancingMorph,ct.skinning=J.skinning,ct.morphTargets=J.morphTargets,ct.morphNormals=J.morphNormals,ct.morphColors=J.morphColors,ct.morphTargetsCount=J.morphTargetsCount,ct.numClippingPlanes=J.numClippingPlanes,ct.numIntersection=J.numClipIntersection,ct.vertexAlphas=J.vertexAlphas,ct.vertexTangents=J.vertexTangents,ct.toneMapping=J.toneMapping}function qs(N,J,ct,ut,Q){J.isScene!==!0&&(J=Jt),ie.resetTextureUnits();const Dt=J.fog,It=ut.isMeshStandardMaterial?J.environment:null,Wt=z===null?R.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Fs,Ft=(ut.isMeshStandardMaterial?F:Fe).get(ut.envMap||It),le=ut.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ce=!!ct.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),te=!!ct.morphAttributes.position,Se=!!ct.morphAttributes.normal,Ue=!!ct.morphAttributes.color;let Ye=Za;ut.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ye=R.toneMapping);const Re=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,ge=Re!==void 0?Re.length:0,ne=Yt.get(ut),Ke=g.state.lights;if(dt===!0&&(bt===!0||N!==w)){const rn=N===w&&ut.id===C;st.setState(ut,N,rn)}let be=!1;ut.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Ke.state.version||ne.outputColorSpace!==Wt||Q.isBatchedMesh&&ne.batching===!1||!Q.isBatchedMesh&&ne.batching===!0||Q.isBatchedMesh&&ne.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&ne.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&ne.instancing===!1||!Q.isInstancedMesh&&ne.instancing===!0||Q.isSkinnedMesh&&ne.skinning===!1||!Q.isSkinnedMesh&&ne.skinning===!0||Q.isInstancedMesh&&ne.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ne.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ne.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ne.instancingMorph===!1&&Q.morphTexture!==null||ne.envMap!==Ft||ut.fog===!0&&ne.fog!==Dt||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==st.numPlanes||ne.numIntersection!==st.numIntersection)||ne.vertexAlphas!==le||ne.vertexTangents!==ce||ne.morphTargets!==te||ne.morphNormals!==Se||ne.morphColors!==Ue||ne.toneMapping!==Ye||ne.morphTargetsCount!==ge)&&(be=!0):(be=!0,ne.__version=ut.version);let Un=ne.currentProgram;be===!0&&(Un=an(ut,J,Q));let Mi=!1,zn=!1,Sn=!1;const He=Un.getUniforms(),In=ne.uniforms;if(Ht.useProgram(Un.program)&&(Mi=!0,zn=!0,Sn=!0),ut.id!==C&&(C=ut.id,zn=!0),Mi||w!==N){Ht.buffers.depth.getReversed()?(yt.copy(N.projectionMatrix),Wx(yt),qx(yt),He.setValue(V,"projectionMatrix",yt)):He.setValue(V,"projectionMatrix",N.projectionMatrix),He.setValue(V,"viewMatrix",N.matrixWorldInverse);const Tn=He.map.cameraPosition;Tn!==void 0&&Tn.setValue(V,qt.setFromMatrixPosition(N.matrixWorld)),he.logarithmicDepthBuffer&&He.setValue(V,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&He.setValue(V,"isOrthographic",N.isOrthographicCamera===!0),w!==N&&(w=N,zn=!0,Sn=!0)}if(Q.isSkinnedMesh){He.setOptional(V,Q,"bindMatrix"),He.setOptional(V,Q,"bindMatrixInverse");const rn=Q.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),He.setValue(V,"boneTexture",rn.boneTexture,ie))}Q.isBatchedMesh&&(He.setOptional(V,Q,"batchingTexture"),He.setValue(V,"batchingTexture",Q._matricesTexture,ie),He.setOptional(V,Q,"batchingIdTexture"),He.setValue(V,"batchingIdTexture",Q._indirectTexture,ie),He.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&He.setValue(V,"batchingColorTexture",Q._colorsTexture,ie));const Ln=ct.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&wt.update(Q,ct,Un),(zn||ne.receiveShadow!==Q.receiveShadow)&&(ne.receiveShadow=Q.receiveShadow,He.setValue(V,"receiveShadow",Q.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(In.envMap.value=Ft,In.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&J.environment!==null&&(In.envMapIntensity.value=J.environmentIntensity),zn&&(He.setValue(V,"toneMappingExposure",R.toneMappingExposure),ne.needsLights&&Tu(In,Sn),Dt&&ut.fog===!0&&ht.refreshFogUniforms(In,Dt),ht.refreshMaterialUniforms(In,ut,j,Z,g.state.transmissionRenderTarget[N.id]),au.upload(V,bn(ne),In,ie)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(au.upload(V,bn(ne),In,ie),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&He.setValue(V,"center",Q.center),He.setValue(V,"modelViewMatrix",Q.modelViewMatrix),He.setValue(V,"normalMatrix",Q.normalMatrix),He.setValue(V,"modelMatrix",Q.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const rn=ut.uniformsGroups;for(let Tn=0,Pr=rn.length;Tn<Pr;Tn++){const Xn=rn[Tn];X.update(Xn,Un),X.bind(Xn,Un)}}return Un}function Tu(N,J){N.ambientLightColor.needsUpdate=J,N.lightProbe.needsUpdate=J,N.directionalLights.needsUpdate=J,N.directionalLightShadows.needsUpdate=J,N.pointLights.needsUpdate=J,N.pointLightShadows.needsUpdate=J,N.spotLights.needsUpdate=J,N.spotLightShadows.needsUpdate=J,N.rectAreaLights.needsUpdate=J,N.hemisphereLights.needsUpdate=J}function Au(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(N,J,ct){const ut=Yt.get(N);ut.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),Yt.get(N.texture).__webglTexture=J,Yt.get(N.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:ct,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,J){const ct=Yt.get(N);ct.__webglFramebuffer=J,ct.__useDefaultFramebuffer=J===void 0};const fl=V.createFramebuffer();this.setRenderTarget=function(N,J=0,ct=0){z=N,O=J,L=ct;let ut=!0,Q=null,Dt=!1,It=!1;if(N){const Ft=Yt.get(N);if(Ft.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(V.FRAMEBUFFER,null),ut=!1;else if(Ft.__webglFramebuffer===void 0)ie.setupRenderTarget(N);else if(Ft.__hasExternalTextures)ie.rebindTextures(N,Yt.get(N.texture).__webglTexture,Yt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const te=N.depthTexture;if(Ft.__boundDepthTexture!==te){if(te!==null&&Yt.has(te)&&(N.width!==te.image.width||N.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(N)}}const le=N.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(It=!0);const ce=Yt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ce[J])?Q=ce[J][ct]:Q=ce[J],Dt=!0):N.samples>0&&ie.useMultisampledRTT(N)===!1?Q=Yt.get(N).__webglMultisampledFramebuffer:Array.isArray(ce)?Q=ce[ct]:Q=ce,G.copy(N.viewport),$.copy(N.scissor),Y=N.scissorTest}else G.copy(I).multiplyScalar(j).floor(),$.copy(nt).multiplyScalar(j).floor(),Y=pt;if(ct!==0&&(Q=fl),Ht.bindFramebuffer(V.FRAMEBUFFER,Q)&&ut&&Ht.drawBuffers(N,Q),Ht.viewport(G),Ht.scissor($),Ht.setScissorTest(Y),Dt){const Ft=Yt.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ft.__webglTexture,ct)}else if(It){const Ft=Yt.get(N.texture),le=J;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ft.__webglTexture,ct,le)}else if(N!==null&&ct!==0){const Ft=Yt.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ft.__webglTexture,ct)}C=-1},this.readRenderTargetPixels=function(N,J,ct,ut,Q,Dt,It,Wt=0){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Yt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&It!==void 0&&(Ft=Ft[It]),Ft){Ht.bindFramebuffer(V.FRAMEBUFFER,Ft);try{const le=N.textures[Wt],ce=le.format,te=le.type;if(!he.textureFormatReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=N.width-ut&&ct>=0&&ct<=N.height-Q&&(N.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Wt),V.readPixels(J,ct,ut,Q,Nt.convert(ce),Nt.convert(te),Dt))}finally{const le=z!==null?Yt.get(z).__webglFramebuffer:null;Ht.bindFramebuffer(V.FRAMEBUFFER,le)}}},this.readRenderTargetPixelsAsync=async function(N,J,ct,ut,Q,Dt,It,Wt=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Yt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&It!==void 0&&(Ft=Ft[It]),Ft)if(J>=0&&J<=N.width-ut&&ct>=0&&ct<=N.height-Q){Ht.bindFramebuffer(V.FRAMEBUFFER,Ft);const le=N.textures[Wt],ce=le.format,te=le.type;if(!he.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Se=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Se),V.bufferData(V.PIXEL_PACK_BUFFER,Dt.byteLength,V.STREAM_READ),N.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Wt),V.readPixels(J,ct,ut,Q,Nt.convert(ce),Nt.convert(te),0);const Ue=z!==null?Yt.get(z).__webglFramebuffer:null;Ht.bindFramebuffer(V.FRAMEBUFFER,Ue);const Ye=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Xx(V,Ye,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Se),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Dt),V.deleteBuffer(Se),V.deleteSync(Ye),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,J=null,ct=0){const ut=Math.pow(2,-ct),Q=Math.floor(N.image.width*ut),Dt=Math.floor(N.image.height*ut),It=J!==null?J.x:0,Wt=J!==null?J.y:0;ie.setTexture2D(N,0),V.copyTexSubImage2D(V.TEXTURE_2D,ct,0,0,It,Wt,Q,Dt),Ht.unbindTexture()};const nr=V.createFramebuffer(),Ys=V.createFramebuffer();this.copyTextureToTexture=function(N,J,ct=null,ut=null,Q=0,Dt=null){Dt===null&&(Q!==0?(Os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=Q,Q=0):Dt=0);let It,Wt,Ft,le,ce,te,Se,Ue,Ye;const Re=N.isCompressedTexture?N.mipmaps[Dt]:N.image;if(ct!==null)It=ct.max.x-ct.min.x,Wt=ct.max.y-ct.min.y,Ft=ct.isBox3?ct.max.z-ct.min.z:1,le=ct.min.x,ce=ct.min.y,te=ct.isBox3?ct.min.z:0;else{const Ln=Math.pow(2,-Q);It=Math.floor(Re.width*Ln),Wt=Math.floor(Re.height*Ln),N.isDataArrayTexture?Ft=Re.depth:N.isData3DTexture?Ft=Math.floor(Re.depth*Ln):Ft=1,le=0,ce=0,te=0}ut!==null?(Se=ut.x,Ue=ut.y,Ye=ut.z):(Se=0,Ue=0,Ye=0);const ge=Nt.convert(J.format),ne=Nt.convert(J.type);let Ke;J.isData3DTexture?(ie.setTexture3D(J,0),Ke=V.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(ie.setTexture2DArray(J,0),Ke=V.TEXTURE_2D_ARRAY):(ie.setTexture2D(J,0),Ke=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,J.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,J.unpackAlignment);const be=V.getParameter(V.UNPACK_ROW_LENGTH),Un=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Mi=V.getParameter(V.UNPACK_SKIP_PIXELS),zn=V.getParameter(V.UNPACK_SKIP_ROWS),Sn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Re.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Re.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,le),V.pixelStorei(V.UNPACK_SKIP_ROWS,ce),V.pixelStorei(V.UNPACK_SKIP_IMAGES,te);const He=N.isDataArrayTexture||N.isData3DTexture,In=J.isDataArrayTexture||J.isData3DTexture;if(N.isDepthTexture){const Ln=Yt.get(N),rn=Yt.get(J),Tn=Yt.get(Ln.__renderTarget),Pr=Yt.get(rn.__renderTarget);Ht.bindFramebuffer(V.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ht.bindFramebuffer(V.DRAW_FRAMEBUFFER,Pr.__webglFramebuffer);for(let Xn=0;Xn<Ft;Xn++)He&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Yt.get(N).__webglTexture,Q,te+Xn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Yt.get(J).__webglTexture,Dt,Ye+Xn)),V.blitFramebuffer(le,ce,It,Wt,Se,Ue,It,Wt,V.DEPTH_BUFFER_BIT,V.NEAREST);Ht.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||N.isRenderTargetTexture||Yt.has(N)){const Ln=Yt.get(N),rn=Yt.get(J);Ht.bindFramebuffer(V.READ_FRAMEBUFFER,nr),Ht.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ys);for(let Tn=0;Tn<Ft;Tn++)He?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ln.__webglTexture,Q,te+Tn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ln.__webglTexture,Q),In?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,rn.__webglTexture,Dt,Ye+Tn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,rn.__webglTexture,Dt),Q!==0?V.blitFramebuffer(le,ce,It,Wt,Se,Ue,It,Wt,V.COLOR_BUFFER_BIT,V.NEAREST):In?V.copyTexSubImage3D(Ke,Dt,Se,Ue,Ye+Tn,le,ce,It,Wt):V.copyTexSubImage2D(Ke,Dt,Se,Ue,le,ce,It,Wt);Ht.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else In?N.isDataTexture||N.isData3DTexture?V.texSubImage3D(Ke,Dt,Se,Ue,Ye,It,Wt,Ft,ge,ne,Re.data):J.isCompressedArrayTexture?V.compressedTexSubImage3D(Ke,Dt,Se,Ue,Ye,It,Wt,Ft,ge,Re.data):V.texSubImage3D(Ke,Dt,Se,Ue,Ye,It,Wt,Ft,ge,ne,Re):N.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Dt,Se,Ue,It,Wt,ge,ne,Re.data):N.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Dt,Se,Ue,Re.width,Re.height,ge,Re.data):V.texSubImage2D(V.TEXTURE_2D,Dt,Se,Ue,It,Wt,ge,ne,Re);V.pixelStorei(V.UNPACK_ROW_LENGTH,be),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Un),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Mi),V.pixelStorei(V.UNPACK_SKIP_ROWS,zn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Sn),Dt===0&&J.generateMipmaps&&V.generateMipmap(Ke),Ht.unbindTexture()},this.copyTextureToTexture3D=function(N,J,ct=null,ut=null,Q=0){return Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,J,ct,ut,Q)},this.initRenderTarget=function(N){Yt.get(N).__webglFramebuffer===void 0&&ie.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ie.setTextureCube(N,0):N.isData3DTexture?ie.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ie.setTexture2DArray(N,0):ie.setTexture2D(N,0),Ht.unbindTexture()},this.resetState=function(){O=0,L=0,z=null,Ht.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(t),i.unpackColorSpace=Oe._getUnpackColorSpace()}}const Fv=["Booking","Analytics","Pricing","Payments","Users","API","Reports","Notify"];function p2(s){const t=document.createElement("canvas");t.width=256,t.height=96;const i=t.getContext("2d");i.clearRect(0,0,t.width,t.height),i.fillStyle="rgba(8, 13, 28, 0.76)",i.strokeStyle="rgba(42, 248, 255, 0.42)",i.lineWidth=3,i.roundRect(18,18,220,54,12),i.fill(),i.stroke(),i.fillStyle="#f7fbff",i.font="800 28px Inter, Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(s,128,46);const r=new xu(t),l=new fu({map:r,transparent:!0,opacity:.92,depthTest:!1,depthWrite:!1}),c=new lp(l);return c.scale.set(1.16,.44,1),c.renderOrder=20,c}function m2(){const s=Ce.useRef(null);return Ce.useEffect(()=>{const t=s.current;if(!t)return;const i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=new Tp;r.fog=new bp(395539,.048);const l=new Vn(36,1,.1,100);l.position.set(.2,2.42,9.4),l.lookAt(0,0,0);const c=new zp({antialias:!0,alpha:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setClearColor(0,0),t.appendChild(c.domElement);const f=new ci;f.scale.setScalar(.8),r.add(f);const h=new Np(8052735,.45),p=new _u(2816255,7.5,15);p.position.set(-2.2,3.4,4.2);const m=new _u(14286661,3.2,12);m.position.set(3.4,1.6,2.2),r.add(h,p,m);const v=new EE({color:2683647,emissive:697272,emissiveIntensity:.72,roughness:.18,metalness:.06,transmission:.25,thickness:.6,transparent:!0,opacity:.78}),_=new $e(new Dp(1.03,5),v);f.add(_);const y=new $e(new Gi(1.42,48,32),new li({color:2816255,transparent:!0,opacity:.08,wireframe:!0}));f.add(y);const x=new li({color:14286661,transparent:!0,opacity:.24}),E=[1.85,2.45,3.05].map((Y,et)=>{const lt=new $e(new $o(Y,.006,8,160),x.clone());return lt.rotation.set(Math.PI/2+et*.38,et*.18,et*.34),f.add(lt),lt}),b=new li({color:1054759,transparent:!0,opacity:.72,side:wi,depthTest:!1,depthWrite:!1}),S=new du({color:2816255,transparent:!0,opacity:.5,depthTest:!1,depthWrite:!1}),g=Fv.map((Y,et)=>{const lt=et/Fv.length*Math.PI*2,B=2.02+et%2*.16,Z=new ci;Z.position.set(Math.cos(lt)*B,Math.sin(et*1.7)*.5,Math.sin(lt)*1.35),Z.rotation.set(.12*Math.sin(lt),-lt*.28,.04*et);const j=new $e(new cl(1.16,.52),b.clone()),St=new ME(new xE(j.geometry),S.clone()),Tt=p2(Y);return Tt.position.z=.025,j.renderOrder=18,St.renderOrder=19,Z.add(j,St,Tt),f.add(Z),Z}),T=new du({color:2816255,transparent:!0,opacity:.18});g.forEach(Y=>{const et=[new W(0,0,0),Y.position.clone().multiplyScalar(.78)],lt=new Rp(new ln().setFromPoints(et),T.clone());f.add(lt)});const D=new ln,R=800,H=new Float32Array(R*3);for(let Y=0;Y<R;Y+=1){const et=Y*3;H[et]=(Math.random()-.5)*16,H[et+1]=(Math.random()-.5)*9,H[et+2]=-Math.random()*8-1}D.setAttribute("position",new Dn(H,3));const O=new Mu(D,new ll({color:14543103,size:.018,transparent:!0,opacity:.72}));r.add(O);const L=new ue,z=Y=>{const et=t.getBoundingClientRect();L.x=((Y.clientX-et.left)/et.width-.5)*2,L.y=((Y.clientY-et.top)/et.height-.5)*-2};t.addEventListener("pointermove",z);const C=()=>{const{width:Y,height:et}=t.getBoundingClientRect();c.setSize(Y,et,!1),l.aspect=Y/Math.max(et,1),l.updateProjectionMatrix()};C(),window.addEventListener("resize",C);let w=0;const G=new Op,$=()=>{const Y=G.getElapsedTime(),et=i?.12:1;f.rotation.y=Y*.1*et+L.x*.08,f.rotation.x=-.06+L.y*.055,_.rotation.x=Y*.42*et,_.rotation.y=Y*.31*et,y.rotation.y=-Y*.16*et,O.rotation.y=Y*.018*et,E.forEach((lt,B)=>{lt.rotation.z=Y*(.12+B*.045)*et}),g.forEach((lt,B)=>{lt.position.y+=Math.sin(Y*1.4+B)*.0016*et,lt.lookAt(l.position)}),c.render(r,l),w=requestAnimationFrame($)};return $(),()=>{cancelAnimationFrame(w),t.removeEventListener("pointermove",z),window.removeEventListener("resize",C),c.dispose(),t.removeChild(c.domElement),r.traverse(Y=>{Y.geometry&&Y.geometry.dispose(),Y.material&&(Array.isArray(Y.material)?Y.material:[Y.material]).forEach(lt=>{lt.map&&lt.map.dispose(),lt.dispose()})})}},[]),P.createElement("div",{className:"commandScene",ref:s,"aria-label":"Animated command center scene"})}const g2=[{name:"Mercury",size:.08,distance:.62,color:"#aaa393",accent:"#5d574c",speed:1.8},{name:"Venus",size:.13,distance:.86,color:"#d89b4d",accent:"#74451f",speed:1.35},{name:"Earth",size:.14,distance:1.1,color:"#2aa9ff",accent:"#75f2c8",speed:1.06},{name:"Mars",size:.11,distance:1.33,color:"#c85734",accent:"#6d2a19",speed:.86},{name:"Jupiter",size:.21,distance:1.62,color:"#c49555",accent:"#6b421f",speed:.58},{name:"Saturn",size:.18,distance:1.9,color:"#c7b06d",accent:"#74643f",speed:.45,ring:!0}];function _2({color:s,accent:t,name:i}){const r=document.createElement("canvas");r.width=256,r.height=128;const l=r.getContext("2d"),c=l.createLinearGradient(0,0,r.width,r.height);c.addColorStop(0,s),c.addColorStop(.55,s),c.addColorStop(1,t),l.fillStyle=c,l.fillRect(0,0,r.width,r.height);for(let h=0;h<22;h+=1){const p=h/22*r.height+Math.sin(h*1.7)*4;l.fillStyle=h%2===0?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.14)",l.fillRect(0,p,r.width,2+Math.random()*5)}if(i==="Earth"){l.fillStyle="rgba(113, 242, 190, 0.72)";for(let h=0;h<10;h+=1)l.beginPath(),l.ellipse(35+h*22,26+Math.sin(h)*24,13,6,h*.4,0,Math.PI*2),l.fill()}const f=new xu(r);return f.colorSpace=Gn,f.wrapS=su,f.wrapT=Ya,f}function v2(){const s=document.createElement("canvas");s.width=256,s.height=256;const t=s.getContext("2d"),i=t.createRadialGradient(92,72,8,128,128,142);i.addColorStop(0,"#fff7a8"),i.addColorStop(.18,"#ffd35c"),i.addColorStop(.48,"#ff9f1c"),i.addColorStop(.78,"#e85f00"),i.addColorStop(1,"#8a2600"),t.fillStyle=i,t.fillRect(0,0,s.width,s.height);for(let l=0;l<42;l+=1){const c=Math.random()*s.width,f=Math.random()*s.height,h=8+Math.random()*26,p=t.createRadialGradient(c,f,0,c,f,h);p.addColorStop(0,"rgba(255,255,190,0.34)"),p.addColorStop(.45,"rgba(255,120,0,0.16)"),p.addColorStop(1,"rgba(120,20,0,0)"),t.fillStyle=p,t.beginPath(),t.arc(c,f,h,0,Math.PI*2),t.fill()}const r=new xu(s);return r.colorSpace=Gn,r}function y2(){const s=Ce.useRef(null);return Ce.useEffect(()=>{const t=s.current;if(!t)return;const i=new Tp,r=new Vn(38,1,.1,60);r.position.set(0,2.38,5.12),r.lookAt(0,0,0);const l=new zp({antialias:!0,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setClearColor(0,0),t.appendChild(l.domElement),i.add(new Np(9480447,.42));const c=new _u(16766826,8,18);c.position.set(0,0,0),i.add(c);const f=new ci;f.rotation.x=-.68,f.scale.setScalar(1.02),i.add(f);const h=v2(),p=new $e(new Gi(.43,64,42),new gu({map:h,emissive:16747008,emissiveMap:h,emissiveIntensity:.92,roughness:.72}));f.add(p);const m=new $e(new Gi(.76,48,32),new li({color:16757802,transparent:!0,opacity:.14,depthWrite:!1}));f.add(m);const v=new li({color:8187135,transparent:!0,opacity:.18}),_=g2.map((L,z)=>{const C=new $e(new $o(L.distance,.003,8,120),v.clone());f.add(C);const w=new ci,G=_2(L),$=new $e(new Gi(L.size,40,24),new gu({map:G,roughness:.64,metalness:.02,emissive:new ve(L.color),emissiveIntensity:.04}));if(w.add($),L.ring){const Y=new $e(new $o(L.size*1.72,L.size*.075,8,96),new li({color:14076058,transparent:!0,opacity:.68}));Y.rotation.x=Math.PI/2.45,w.add(Y)}return w.userData={planet:L,angle:z*1.1},f.add(w),{group:w,body:$,orbit:C}}),y=new ln,x=700,E=new Float32Array(x*3);for(let L=0;L<x;L+=1){const z=L*3;E[z]=(Math.random()-.5)*7.2,E[z+1]=(Math.random()-.5)*4.2,E[z+2]=-Math.random()*4.8}y.setAttribute("position",new Dn(E,3));const b=new Mu(y,new ll({color:16777215,size:.011,transparent:!0,opacity:.82}));i.add(b);let S=!1;const g=()=>{S=!0},T=()=>{S=!1};t.addEventListener("pointerenter",g),t.addEventListener("pointerleave",T);const D=()=>{const{width:L,height:z}=t.getBoundingClientRect();l.setSize(L,z,!1),r.aspect=L/Math.max(z,1),r.updateProjectionMatrix()};D(),window.addEventListener("resize",D);let R=0;const H=new Op,O=()=>{const L=H.getElapsedTime(),z=S?1.85:1;f.rotation.z=L*.055,p.rotation.y=L*.18,p.rotation.x=Math.sin(L*.3)*.04,m.scale.setScalar(1+Math.sin(L*2)*.035),_.forEach(({group:C,body:w},G)=>{const{planet:$}=C.userData,Y=C.userData.angle+L*$.speed*.34*z;C.position.set(Math.cos(Y)*$.distance,Math.sin(Y)*$.distance,0),w.rotation.y=L*(.8+G*.08)}),b.rotation.y=L*.025,l.render(i,r),R=requestAnimationFrame(O)};return O(),()=>{cancelAnimationFrame(R),t.removeEventListener("pointerenter",g),t.removeEventListener("pointerleave",T),window.removeEventListener("resize",D),l.dispose(),t.removeChild(l.domElement),i.traverse(L=>{L.geometry&&L.geometry.dispose(),L.material&&(Array.isArray(L.material)?L.material:[L.material]).forEach(C=>{C.map&&C.map.dispose(),C.emissiveMap&&C.emissiveMap.dispose(),C.dispose()})})}},[]),P.createElement("div",{className:"solarPreviewScene",ref:s,"aria-hidden":"true"})}const S2=[["SaaS Platforms","Complex dashboards, admin panels, booking systems, pricing tools and product workflows."],["Interactive UI","Motion systems, micro-interactions, smooth transitions and interface storytelling."],["Three.js Experiences","Procedural scenes, camera systems, particles, lighting and immersive web experiences."]],M2=[["Hospitality SaaS","Booking platforms, pricing logic, payments, analytics and admin workflows."],["Recruitment Platforms","Candidate flows, filters, resume management, notifications and API-connected interfaces."],["Enterprise UI","Responsive systems, admin interfaces, refactoring, maintainability and performance."]],x2=[["Core",["React","Vue","TypeScript","JavaScript"]],["State & Data",["Redux Toolkit","RTK Query","React Query","Pinia"]],["UI",["MUI","Ant Design","Tailwind","SCSS"]],["3D & Motion",["Three.js","GSAP","Framer Motion","GLSL"]],["Testing",["Jest","Vitest"]]];function E2(){const[s,t]=Ce.useState(!1);return[s,()=>{t(!0),window.setTimeout(()=>{window.location.href="/3d"},520)}]}function b2(){const[s,t]=E2();return P.createElement(P.Fragment,null,P.createElement("div",{className:`routeVeil ${s?"isActive":""}`,"aria-hidden":"true"}),P.createElement("header",{id:"top",className:"landingHero"},P.createElement("section",{className:"landingHeroCopy","aria-labelledby":"hero-title"},P.createElement("p",{className:"kicker"},P.createElement(Qv,{size:16})," Frontend Engineer · React · Vue · Three.js"),P.createElement("h1",{id:"hero-title"},Cr.headline),P.createElement("p",null,Cr.summary),P.createElement("div",{className:"ctaRow"},P.createElement("button",{className:"button button--primary",type:"button",onClick:t},P.createElement(Mh,{size:18})," Explore 3D Experience"),P.createElement(Us,{variant:"secondary",href:Cr.github,target:"_blank",rel:"noreferrer"},P.createElement(yh,{size:18})," GitHub ",P.createElement(L_,{size:16}))),P.createElement("div",{className:"landingBadges"},["4+ Years","Commercial Products","TypeScript","Three.js","Available Worldwide"].map(i=>P.createElement("span",{key:i},i)))),P.createElement(m2,null)),P.createElement("section",{className:"featured3d","aria-labelledby":"featured-title"},P.createElement("div",null,P.createElement("p",{className:"kicker"},"Featured 3D Experience"),P.createElement("h2",{id:"featured-title"},"Solar Interface System"),P.createElement("p",null,"A cinematic Three.js experiment inspired by mission control interfaces. Interactive planets, orbit animation, particle fields, real-time lighting and smooth camera movement."),P.createElement("button",{className:"button button--primary",type:"button",onClick:t},"Launch Experience ",P.createElement(L_,{size:16}))),P.createElement("button",{className:"solarPreviewButton",type:"button",onClick:t,"aria-label":"Launch Solar Interface System"},P.createElement(y2,null))),P.createElement("section",{className:"landingSection",id:"build"},P.createElement("div",{className:"landingSectionIntro"},P.createElement("p",{className:"kicker"},"What I Build"),P.createElement("h2",null,"Interfaces built for real products.")),P.createElement("div",{className:"landingCardGrid"},S2.map(([i,r])=>P.createElement("article",{className:"landingCard",key:i},P.createElement("h3",null,i),P.createElement("p",null,r))))),P.createElement("section",{className:"landingSection",id:"experience"},P.createElement("div",{className:"landingSectionIntro"},P.createElement("p",{className:"kicker"},"Commercial Experience"),P.createElement("h2",null,"Built for real users, not only portfolios.")),P.createElement("div",{className:"landingCardGrid"},M2.map(([i,r])=>P.createElement("article",{className:"landingCard compact",key:i},P.createElement("h3",null,i),P.createElement("p",null,r))))),P.createElement("section",{className:"landingSection",id:"stack"},P.createElement("div",{className:"landingSectionIntro"},P.createElement("p",{className:"kicker"},"Technology"),P.createElement("h2",null,"Frontend toolkit for product systems.")),P.createElement("div",{className:"techGrid"},x2.map(([i,r])=>P.createElement("article",{className:"techGroup",key:i},P.createElement("h3",null,i),P.createElement("div",null,r.map(l=>P.createElement("span",{key:l},l))),i==="3D & Motion"?P.createElement("button",{type:"button",onClick:t},"See 3D case"):null)))),P.createElement("section",{className:"launchSequence"},P.createElement("div",null,P.createElement("p",{className:"kicker"},"Launch Sequence"),P.createElement("h2",null,"Ready to explore a complete Three.js experience?"),P.createElement("p",null,"Enter a dedicated interactive solar system built with animated planets, orbit mechanics, particles, lighting and cinematic camera movement."),P.createElement("button",{className:"button button--primary",type:"button",onClick:t},"Launch Solar Interface")),P.createElement("div",{className:"systemChecks","aria-hidden":"true"},["System Check","Lighting","Particles","Camera","Orbit Engine","Ready"].map(i=>P.createElement("span",{key:i},i)))),P.createElement("footer",{className:"landingContact",id:"contact"},P.createElement("div",null,P.createElement("p",{className:"kicker"},"Contact"),P.createElement("h2",null,"Let’s build something memorable."),P.createElement("p",null,"Open to frontend roles, creative engineering projects and interactive web experiences.")),P.createElement("div",{className:"ctaRow"},P.createElement(Us,{variant:"secondary",href:Cr.github,target:"_blank",rel:"noreferrer"},P.createElement(yh,{size:18})," GitHub"),P.createElement(Us,{href:Zv},P.createElement(Sh,{size:18})," Email"),P.createElement(Us,{variant:"secondary",href:"https://t.me/disasterwoman",target:"_blank",rel:"noreferrer"},"Telegram"))))}function T2(s){return Object.prototype.toString.call(s)==="[object Object]"}function Hv(s){return T2(s)||Array.isArray(s)}function A2(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ip(s,t){const i=Object.keys(s),r=Object.keys(t);if(i.length!==r.length)return!1;const l=JSON.stringify(Object.keys(s.breakpoints||{})),c=JSON.stringify(Object.keys(t.breakpoints||{}));return l!==c?!1:i.every(f=>{const h=s[f],p=t[f];return typeof h=="function"?`${h}`==`${p}`:!Hv(h)||!Hv(p)?h===p:Ip(h,p)})}function Gv(s){return s.concat().sort((t,i)=>t.name>i.name?1:-1).map(t=>t.options)}function R2(s,t){if(s.length!==t.length)return!1;const i=Gv(s),r=Gv(t);return i.every((l,c)=>{const f=r[c];return Ip(l,f)})}function Bp(s){return typeof s=="number"}function dp(s){return typeof s=="string"}function bu(s){return typeof s=="boolean"}function Vv(s){return Object.prototype.toString.call(s)==="[object Object]"}function nn(s){return Math.abs(s)}function Fp(s){return Math.sign(s)}function jo(s,t){return nn(s-t)}function w2(s,t){if(s===0||t===0||nn(s)<=nn(t))return 0;const i=jo(nn(s),nn(t));return nn(i/s)}function C2(s){return Math.round(s*100)/100}function tl(s){return el(s).map(Number)}function Ui(s){return s[ul(s)]}function ul(s){return Math.max(0,s.length-1)}function Hp(s,t){return t===ul(s)}function kv(s,t=0){return Array.from(Array(s),(i,r)=>t+r)}function el(s){return Object.keys(s)}function Cy(s,t){return[s,t].reduce((i,r)=>(el(r).forEach(l=>{const c=i[l],f=r[l],h=Vv(c)&&Vv(f);i[l]=h?Cy(c,f):f}),i),{})}function hp(s,t){return typeof t.MouseEvent<"u"&&s instanceof t.MouseEvent}function D2(s,t){const i={start:r,center:l,end:c};function r(){return 0}function l(p){return c(p)/2}function c(p){return t-p}function f(p,m){return dp(s)?i[s](p):s(t,p,m)}return{measure:f}}function nl(){let s=[];function t(l,c,f,h={passive:!0}){let p;if("addEventListener"in l)l.addEventListener(c,f,h),p=()=>l.removeEventListener(c,f,h);else{const m=l;m.addListener(f),p=()=>m.removeListener(f)}return s.push(p),r}function i(){s=s.filter(l=>l())}const r={add:t,clear:i};return r}function U2(s,t,i,r){const l=nl(),c=1e3/60;let f=null,h=0,p=0;function m(){l.add(s,"visibilitychange",()=>{s.hidden&&E()})}function v(){x(),l.clear()}function _(S){if(!p)return;f||(f=S,i(),i());const g=S-f;for(f=S,h+=g;h>=c;)i(),h-=c;const T=h/c;r(T),p&&(p=t.requestAnimationFrame(_))}function y(){p||(p=t.requestAnimationFrame(_))}function x(){t.cancelAnimationFrame(p),f=null,h=0,p=0}function E(){f=null,h=0}return{init:m,destroy:v,start:y,stop:x,update:i,render:r}}function L2(s,t){const i=t==="rtl",r=s==="y",l=r?"y":"x",c=r?"x":"y",f=!r&&i?-1:1,h=v(),p=_();function m(E){const{height:b,width:S}=E;return r?b:S}function v(){return r?"top":i?"right":"left"}function _(){return r?"bottom":i?"left":"right"}function y(E){return E*f}return{scroll:l,cross:c,startEdge:h,endEdge:p,measureSize:m,direction:y}}function Nr(s=0,t=0){const i=nn(s-t);function r(m){return m<s}function l(m){return m>t}function c(m){return r(m)||l(m)}function f(m){return c(m)?r(m)?s:t:m}function h(m){return i?m-i*Math.ceil((m-t)/i):m}return{length:i,max:t,min:s,constrain:f,reachedAny:c,reachedMax:l,reachedMin:r,removeOffset:h}}function Dy(s,t,i){const{constrain:r}=Nr(0,s),l=s+1;let c=f(t);function f(y){return i?nn((l+y)%l):r(y)}function h(){return c}function p(y){return c=f(y),_}function m(y){return v().set(h()+y)}function v(){return Dy(s,h(),i)}const _={get:h,set:p,add:m,clone:v};return _}function N2(s,t,i,r,l,c,f,h,p,m,v,_,y,x,E,b,S,g,T){const{cross:D,direction:R}=s,H=["INPUT","SELECT","TEXTAREA"],O={passive:!1},L=nl(),z=nl(),C=Nr(50,225).constrain(x.measure(20)),w={mouse:300,touch:400},G={mouse:500,touch:600},$=E?43:25;let Y=!1,et=0,lt=0,B=!1,Z=!1,j=!1,St=!1;function Tt(Lt){if(!T)return;function Kt(ye){(bu(T)||T(Lt,ye))&&bt(ye)}const V=t;L.add(V,"dragstart",ye=>ye.preventDefault(),O).add(V,"touchmove",()=>{},O).add(V,"touchend",()=>{}).add(V,"touchstart",Kt).add(V,"mousedown",Kt).add(V,"touchcancel",Ut).add(V,"contextmenu",Ut).add(V,"click",qt,!0)}function I(){L.clear(),z.clear()}function nt(){const Lt=St?i:t;z.add(Lt,"touchmove",yt,O).add(Lt,"touchend",Ut).add(Lt,"mousemove",yt,O).add(Lt,"mouseup",Ut)}function pt(Lt){const Kt=Lt.nodeName||"";return H.includes(Kt)}function K(){return(E?G:w)[St?"mouse":"touch"]}function dt(Lt,Kt){const V=_.add(Fp(Lt)*-1),ye=v.byDistance(Lt,!E).distance;return E||nn(Lt)<C?ye:S&&Kt?ye*.5:v.byIndex(V.get(),0).distance}function bt(Lt){const Kt=hp(Lt,r);St=Kt,j=E&&Kt&&!Lt.buttons&&Y,Y=jo(l.get(),f.get())>=2,!(Kt&&Lt.button!==0)&&(pt(Lt.target)||(B=!0,c.pointerDown(Lt),m.useFriction(0).useDuration(0),l.set(f),nt(),et=c.readPoint(Lt),lt=c.readPoint(Lt,D),y.emit("pointerDown")))}function yt(Lt){if(!hp(Lt,r)&&Lt.touches.length>=2)return Ut(Lt);const V=c.readPoint(Lt),ye=c.readPoint(Lt,D),re=jo(V,et),he=jo(ye,lt);if(!Z&&!St&&(!Lt.cancelable||(Z=re>he,!Z)))return Ut(Lt);const Ht=c.pointerMove(Lt);re>b&&(j=!0),m.useFriction(.3).useDuration(.75),h.start(),l.add(R(Ht)),Lt.preventDefault()}function Ut(Lt){const V=v.byDistance(0,!1).index!==_.get(),ye=c.pointerUp(Lt)*K(),re=dt(R(ye),V),he=w2(ye,re),Ht=$-10*he,se=g+he/50;Z=!1,B=!1,z.clear(),m.useDuration(Ht).useFriction(se),p.distance(re,!E),St=!1,y.emit("pointerUp")}function qt(Lt){j&&(Lt.stopPropagation(),Lt.preventDefault(),j=!1)}function Vt(){return B}return{init:Tt,destroy:I,pointerDown:Vt}}function O2(s,t){let r,l;function c(_){return _.timeStamp}function f(_,y){const E=`client${(y||s.scroll)==="x"?"X":"Y"}`;return(hp(_,t)?_:_.touches[0])[E]}function h(_){return r=_,l=_,f(_)}function p(_){const y=f(_)-f(l),x=c(_)-c(r)>170;return l=_,x&&(r=_),y}function m(_){if(!r||!l)return 0;const y=f(l)-f(r),x=c(_)-c(r),E=c(_)-c(l)>170,b=y/x;return x&&!E&&nn(b)>.1?b:0}return{pointerDown:h,pointerMove:p,pointerUp:m,readPoint:f}}function P2(){function s(i){const{offsetTop:r,offsetLeft:l,offsetWidth:c,offsetHeight:f}=i;return{top:r,right:l+c,bottom:r+f,left:l,width:c,height:f}}return{measure:s}}function z2(s){function t(r){return s*(r/100)}return{measure:t}}function I2(s,t,i,r,l,c,f){const h=[s].concat(r);let p,m,v=[],_=!1;function y(S){return l.measureSize(f.measure(S))}function x(S){if(!c)return;m=y(s),v=r.map(y);function g(T){for(const D of T){if(_)return;const R=D.target===s,H=r.indexOf(D.target),O=R?m:v[H],L=y(R?s:r[H]);if(nn(L-O)>=.5){S.reInit(),t.emit("resize");break}}}p=new ResizeObserver(T=>{(bu(c)||c(S,T))&&g(T)}),i.requestAnimationFrame(()=>{h.forEach(T=>p.observe(T))})}function E(){_=!0,p&&p.disconnect()}return{init:x,destroy:E}}function B2(s,t,i,r,l,c){let f=0,h=0,p=l,m=c,v=s.get(),_=0;function y(){const O=r.get()-s.get(),L=!p;let z=0;return L?(f=0,i.set(r),s.set(r),z=O):(i.set(s),f+=O/p,f*=m,v+=f,s.add(f),z=v-_),h=Fp(z),_=v,H}function x(){const O=r.get()-t.get();return nn(O)<.001}function E(){return p}function b(){return h}function S(){return f}function g(){return D(l)}function T(){return R(c)}function D(O){return p=O,H}function R(O){return m=O,H}const H={direction:b,duration:E,velocity:S,seek:y,settled:x,useBaseFriction:T,useBaseDuration:g,useFriction:R,useDuration:D};return H}function F2(s,t,i,r,l){const c=l.measure(10),f=l.measure(50),h=Nr(.1,.99);let p=!1;function m(){return!(p||!s.reachedAny(i.get())||!s.reachedAny(t.get()))}function v(x){if(!m())return;const E=s.reachedMin(t.get())?"min":"max",b=nn(s[E]-t.get()),S=i.get()-t.get(),g=h.constrain(b/f);i.subtract(S*g),!x&&nn(S)<c&&(i.set(s.constrain(i.get())),r.useDuration(25).useBaseFriction())}function _(x){p=!x}return{shouldConstrain:m,constrain:v,toggleActive:_}}function H2(s,t,i,r,l){const c=Nr(-t+s,0),f=_(),h=v(),p=y();function m(E,b){return jo(E,b)<=1}function v(){const E=f[0],b=Ui(f),S=f.lastIndexOf(E),g=f.indexOf(b)+1;return Nr(S,g)}function _(){return i.map((E,b)=>{const{min:S,max:g}=c,T=c.constrain(E),D=!b,R=Hp(i,b);return D?g:R||m(S,T)?S:m(g,T)?g:T}).map(E=>parseFloat(E.toFixed(3)))}function y(){if(t<=s+l)return[c.max];if(r==="keepSnaps")return f;const{min:E,max:b}=h;return f.slice(E,b)}return{snapsContained:p,scrollContainLimit:h}}function G2(s,t,i){const r=t[0],l=i?r-s:Ui(t);return{limit:Nr(l,r)}}function V2(s,t,i,r){const c=t.min+.1,f=t.max+.1,{reachedMin:h,reachedMax:p}=Nr(c,f);function m(y){return y===1?p(i.get()):y===-1?h(i.get()):!1}function v(y){if(!m(y))return;const x=s*(y*-1);r.forEach(E=>E.add(x))}return{loop:v}}function k2(s){const{max:t,length:i}=s;function r(c){const f=c-t;return i?f/-i:0}return{get:r}}function X2(s,t,i,r,l){const{startEdge:c,endEdge:f}=s,{groupSlides:h}=l,p=_().map(t.measure),m=y(),v=x();function _(){return h(r).map(b=>Ui(b)[f]-b[0][c]).map(nn)}function y(){return r.map(b=>i[c]-b[c]).map(b=>-nn(b))}function x(){return h(m).map(b=>b[0]).map((b,S)=>b+p[S])}return{snaps:m,snapsAligned:v}}function W2(s,t,i,r,l,c){const{groupSlides:f}=l,{min:h,max:p}=r,m=v();function v(){const y=f(c),x=!s||t==="keepSnaps";return i.length===1?[c]:x?y:y.slice(h,p).map((E,b,S)=>{const g=!b,T=Hp(S,b);if(g){const D=Ui(S[0])+1;return kv(D)}if(T){const D=ul(c)-Ui(S)[0]+1;return kv(D,Ui(S)[0])}return E})}return{slideRegistry:m}}function q2(s,t,i,r,l){const{reachedAny:c,removeOffset:f,constrain:h}=r;function p(E){return E.concat().sort((b,S)=>nn(b)-nn(S))[0]}function m(E){const b=s?f(E):h(E),S=t.map((T,D)=>({diff:v(T-b,0),index:D})).sort((T,D)=>nn(T.diff)-nn(D.diff)),{index:g}=S[0];return{index:g,distance:b}}function v(E,b){const S=[E,E+i,E-i];if(!s)return E;if(!b)return p(S);const g=S.filter(T=>Fp(T)===b);return g.length?p(g):Ui(S)-i}function _(E,b){const S=t[E]-l.get(),g=v(S,b);return{index:E,distance:g}}function y(E,b){const S=l.get()+E,{index:g,distance:T}=m(S),D=!s&&c(S);if(!b||D)return{index:g,distance:E};const R=t[g]-T,H=E+v(R,0);return{index:g,distance:H}}return{byDistance:y,byIndex:_,shortcut:v}}function Y2(s,t,i,r,l,c,f){function h(_){const y=_.distance,x=_.index!==t.get();c.add(y),y&&(r.duration()?s.start():(s.update(),s.render(1),s.update())),x&&(i.set(t.get()),t.set(_.index),f.emit("select"))}function p(_,y){const x=l.byDistance(_,y);h(x)}function m(_,y){const x=t.clone().set(_),E=l.byIndex(x.get(),y);h(E)}return{distance:p,index:m}}function j2(s,t,i,r,l,c,f,h){const p={passive:!0,capture:!0};let m=0;function v(x){if(!h)return;function E(b){if(new Date().getTime()-m>10)return;f.emit("slideFocusStart"),s.scrollLeft=0;const T=i.findIndex(D=>D.includes(b));Bp(T)&&(l.useDuration(0),r.index(T,0),f.emit("slideFocus"))}c.add(document,"keydown",_,!1),t.forEach((b,S)=>{c.add(b,"focus",g=>{(bu(h)||h(x,g))&&E(S)},p)})}function _(x){x.code==="Tab"&&(m=new Date().getTime())}return{init:v}}function Yo(s){let t=s;function i(){return t}function r(p){t=f(p)}function l(p){t+=f(p)}function c(p){t-=f(p)}function f(p){return Bp(p)?p:p.get()}return{get:i,set:r,add:l,subtract:c}}function Uy(s,t){const i=s.scroll==="x"?f:h,r=t.style;let l=null,c=!1;function f(y){return`translate3d(${y}px,0px,0px)`}function h(y){return`translate3d(0px,${y}px,0px)`}function p(y){if(c)return;const x=C2(s.direction(y));x!==l&&(r.transform=i(x),l=x)}function m(y){c=!y}function v(){c||(r.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:v,to:p,toggleActive:m}}function Z2(s,t,i,r,l,c,f,h,p){const v=tl(l),_=tl(l).reverse(),y=g().concat(T());function x(L,z){return L.reduce((C,w)=>C-l[w],z)}function E(L,z){return L.reduce((C,w)=>x(C,z)>0?C.concat([w]):C,[])}function b(L){return c.map((z,C)=>({start:z-r[C]+.5+L,end:z+t-.5+L}))}function S(L,z,C){const w=b(z);return L.map(G=>{const $=C?0:-i,Y=C?i:0,et=C?"end":"start",lt=w[G][et];return{index:G,loopPoint:lt,slideLocation:Yo(-1),translate:Uy(s,p[G]),target:()=>h.get()>lt?$:Y}})}function g(){const L=f[0],z=E(_,L);return S(z,i,!1)}function T(){const L=t-f[0]-1,z=E(v,L);return S(z,-i,!0)}function D(){return y.every(({index:L})=>{const z=v.filter(C=>C!==L);return x(z,t)<=.1})}function R(){y.forEach(L=>{const{target:z,translate:C,slideLocation:w}=L,G=z();G!==w.get()&&(C.to(G),w.set(G))})}function H(){y.forEach(L=>L.translate.clear())}return{canLoop:D,clear:H,loop:R,loopPoints:y}}function K2(s,t,i){let r,l=!1;function c(p){if(!i)return;function m(v){for(const _ of v)if(_.type==="childList"){p.reInit(),t.emit("slidesChanged");break}}r=new MutationObserver(v=>{l||(bu(i)||i(p,v))&&m(v)}),r.observe(s,{childList:!0})}function f(){r&&r.disconnect(),l=!0}return{init:c,destroy:f}}function Q2(s,t,i,r){const l={};let c=null,f=null,h,p=!1;function m(){h=new IntersectionObserver(E=>{p||(E.forEach(b=>{const S=t.indexOf(b.target);l[S]=b}),c=null,f=null,i.emit("slidesInView"))},{root:s.parentElement,threshold:r}),t.forEach(E=>h.observe(E))}function v(){h&&h.disconnect(),p=!0}function _(E){return el(l).reduce((b,S)=>{const g=parseInt(S),{isIntersecting:T}=l[g];return(E&&T||!E&&!T)&&b.push(g),b},[])}function y(E=!0){if(E&&c)return c;if(!E&&f)return f;const b=_(E);return E&&(c=b),E||(f=b),b}return{init:m,destroy:v,get:y}}function J2(s,t,i,r,l,c){const{measureSize:f,startEdge:h,endEdge:p}=s,m=i[0]&&l,v=E(),_=b(),y=i.map(f),x=S();function E(){if(!m)return 0;const T=i[0];return nn(t[h]-T[h])}function b(){if(!m)return 0;const T=c.getComputedStyle(Ui(r));return parseFloat(T.getPropertyValue(`margin-${p}`))}function S(){return i.map((T,D,R)=>{const H=!D,O=Hp(R,D);return H?y[D]+v:O?y[D]+_:R[D+1][h]-T[h]}).map(nn)}return{slideSizes:y,slideSizesWithGaps:x,startGap:v,endGap:_}}function $2(s,t,i,r,l,c,f,h,p){const{startEdge:m,endEdge:v,direction:_}=s,y=Bp(i);function x(g,T){return tl(g).filter(D=>D%T===0).map(D=>g.slice(D,D+T))}function E(g){return g.length?tl(g).reduce((T,D,R)=>{const H=Ui(T)||0,O=H===0,L=D===ul(g),z=l[m]-c[H][m],C=l[m]-c[D][v],w=!r&&O?_(f):0,G=!r&&L?_(h):0,$=nn(C-G-(z+w));return R&&$>t+p&&T.push(D),L&&T.push(g.length),T},[]).map((T,D,R)=>{const H=Math.max(R[D-1]||0);return g.slice(H,T)}):[]}function b(g){return y?x(g,i):E(g)}return{groupSlides:b}}function tR(s,t,i,r,l,c,f){const{align:h,axis:p,direction:m,startIndex:v,loop:_,duration:y,dragFree:x,dragThreshold:E,inViewThreshold:b,slidesToScroll:S,skipSnaps:g,containScroll:T,watchResize:D,watchSlides:R,watchDrag:H,watchFocus:O}=c,L=2,z=P2(),C=z.measure(t),w=i.map(z.measure),G=L2(p,m),$=G.measureSize(C),Y=z2($),et=D2(h,$),lt=!_&&!!T,B=_||!!T,{slideSizes:Z,slideSizesWithGaps:j,startGap:St,endGap:Tt}=J2(G,C,w,i,B,l),I=$2(G,$,S,_,C,w,St,Tt,L),{snaps:nt,snapsAligned:pt}=X2(G,et,C,w,I),K=-Ui(nt)+Ui(j),{snapsContained:dt,scrollContainLimit:bt}=H2($,K,pt,T,L),yt=lt?dt:pt,{limit:Ut}=G2(K,yt,_),qt=Dy(ul(yt),v,_),Vt=qt.clone(),Jt=tl(i),Lt=({dragHandler:Ot,scrollBody:st,scrollBounds:Ct,options:{loop:gt}})=>{gt||Ct.constrain(Ot.pointerDown()),st.seek()},Kt=({scrollBody:Ot,translate:st,location:Ct,offsetLocation:gt,previousLocation:wt,scrollLooper:kt,slideLooper:Pt,dragHandler:Nt,animation:$t,eventHandler:X,scrollBounds:zt,options:{loop:At}},Gt)=>{const Rt=Ot.settled(),Mt=!zt.shouldConstrain(),Xt=At?Rt:Rt&&Mt,oe=Xt&&!Nt.pointerDown();oe&&$t.stop();const ze=Ct.get()*Gt+wt.get()*(1-Gt);gt.set(ze),At&&(kt.loop(Ot.direction()),Pt.loop()),st.to(gt.get()),oe&&X.emit("settle"),Xt||X.emit("scroll")},V=U2(r,l,()=>Lt(jt),Ot=>Kt(jt,Ot)),ye=.68,re=yt[qt.get()],he=Yo(re),Ht=Yo(re),se=Yo(re),Yt=Yo(re),ie=B2(he,se,Ht,Yt,y,ye),Fe=q2(_,yt,K,Ut,Yt),F=Y2(V,qt,Vt,ie,Fe,Yt,f),A=k2(Ut),at=nl(),_t=Q2(t,i,f,b),{slideRegistry:Et}=W2(lt,T,yt,bt,I,Jt),ht=j2(s,i,Et,F,ie,at,f,O),jt={ownerDocument:r,ownerWindow:l,eventHandler:f,containerRect:C,slideRects:w,animation:V,axis:G,dragHandler:N2(G,s,r,l,Yt,O2(G,l),he,V,F,ie,Fe,qt,f,Y,x,E,g,ye,H),eventStore:at,percentOfView:Y,index:qt,indexPrevious:Vt,limit:Ut,location:he,offsetLocation:se,previousLocation:Ht,options:c,resizeHandler:I2(t,f,l,i,G,D,z),scrollBody:ie,scrollBounds:F2(Ut,se,Yt,ie,Y),scrollLooper:V2(K,Ut,se,[he,se,Ht,Yt]),scrollProgress:A,scrollSnapList:yt.map(A.get),scrollSnaps:yt,scrollTarget:Fe,scrollTo:F,slideLooper:Z2(G,$,K,Z,j,nt,yt,se,i),slideFocus:ht,slidesHandler:K2(t,f,R),slidesInView:_t,slideIndexes:Jt,slideRegistry:Et,slidesToScroll:I,target:Yt,translate:Uy(G,t)};return jt}function eR(){let s={},t;function i(m){t=m}function r(m){return s[m]||[]}function l(m){return r(m).forEach(v=>v(t,m)),p}function c(m,v){return s[m]=r(m).concat([v]),p}function f(m,v){return s[m]=r(m).filter(_=>_!==v),p}function h(){s={}}const p={init:i,emit:l,off:f,on:c,clear:h};return p}const nR={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function iR(s){function t(c,f){return Cy(c,f||{})}function i(c){const f=c.breakpoints||{},h=el(f).filter(p=>s.matchMedia(p).matches).map(p=>f[p]).reduce((p,m)=>t(p,m),{});return t(c,h)}function r(c){return c.map(f=>el(f.breakpoints||{})).reduce((f,h)=>f.concat(h),[]).map(s.matchMedia)}return{mergeOptions:t,optionsAtMedia:i,optionsMediaQueries:r}}function aR(s){let t=[];function i(c,f){return t=f.filter(({options:h})=>s.optionsAtMedia(h).active!==!1),t.forEach(h=>h.init(c,s)),f.reduce((h,p)=>Object.assign(h,{[p.name]:p}),{})}function r(){t=t.filter(c=>c.destroy())}return{init:i,destroy:r}}function vu(s,t,i){const r=s.ownerDocument,l=r.defaultView,c=iR(l),f=aR(c),h=nl(),p=eR(),{mergeOptions:m,optionsAtMedia:v,optionsMediaQueries:_}=c,{on:y,off:x,emit:E}=p,b=G;let S=!1,g,T=m(nR,vu.globalOptions),D=m(T),R=[],H,O,L;function z(){const{container:Jt,slides:Lt}=D;O=(dp(Jt)?s.querySelector(Jt):Jt)||s.children[0];const V=dp(Lt)?O.querySelectorAll(Lt):Lt;L=[].slice.call(V||O.children)}function C(Jt){const Lt=tR(s,O,L,r,l,Jt,p);if(Jt.loop&&!Lt.slideLooper.canLoop()){const Kt=Object.assign({},Jt,{loop:!1});return C(Kt)}return Lt}function w(Jt,Lt){S||(T=m(T,Jt),D=v(T),R=Lt||R,z(),g=C(D),_([T,...R.map(({options:Kt})=>Kt)]).forEach(Kt=>h.add(Kt,"change",G)),D.active&&(g.translate.to(g.location.get()),g.animation.init(),g.slidesInView.init(),g.slideFocus.init(Vt),g.eventHandler.init(Vt),g.resizeHandler.init(Vt),g.slidesHandler.init(Vt),g.options.loop&&g.slideLooper.loop(),O.offsetParent&&L.length&&g.dragHandler.init(Vt),H=f.init(Vt,R)))}function G(Jt,Lt){const Kt=I();$(),w(m({startIndex:Kt},Jt),Lt),p.emit("reInit")}function $(){g.dragHandler.destroy(),g.eventStore.clear(),g.translate.clear(),g.slideLooper.clear(),g.resizeHandler.destroy(),g.slidesHandler.destroy(),g.slidesInView.destroy(),g.animation.destroy(),f.destroy(),h.clear()}function Y(){S||(S=!0,h.clear(),$(),p.emit("destroy"),p.clear())}function et(Jt,Lt,Kt){!D.active||S||(g.scrollBody.useBaseFriction().useDuration(Lt===!0?0:D.duration),g.scrollTo.index(Jt,Kt||0))}function lt(Jt){const Lt=g.index.add(1).get();et(Lt,Jt,-1)}function B(Jt){const Lt=g.index.add(-1).get();et(Lt,Jt,1)}function Z(){return g.index.add(1).get()!==I()}function j(){return g.index.add(-1).get()!==I()}function St(){return g.scrollSnapList}function Tt(){return g.scrollProgress.get(g.offsetLocation.get())}function I(){return g.index.get()}function nt(){return g.indexPrevious.get()}function pt(){return g.slidesInView.get()}function K(){return g.slidesInView.get(!1)}function dt(){return H}function bt(){return g}function yt(){return s}function Ut(){return O}function qt(){return L}const Vt={canScrollNext:Z,canScrollPrev:j,containerNode:Ut,internalEngine:bt,destroy:Y,off:x,on:y,emit:E,plugins:dt,previousScrollSnap:nt,reInit:b,rootNode:yt,scrollNext:lt,scrollPrev:B,scrollProgress:Tt,scrollSnapList:St,scrollTo:et,selectedScrollSnap:I,slideNodes:qt,slidesInView:pt,slidesNotInView:K};return w(t,i),setTimeout(()=>p.emit("init"),0),Vt}vu.globalOptions=void 0;function Gp(s={},t=[]){const i=Ce.useRef(s),r=Ce.useRef(t),[l,c]=Ce.useState(),[f,h]=Ce.useState(),p=Ce.useCallback(()=>{l&&l.reInit(i.current,r.current)},[l]);return Ce.useEffect(()=>{Ip(i.current,s)||(i.current=s,p())},[s,p]),Ce.useEffect(()=>{R2(r.current,t)||(r.current=t,p())},[t,p]),Ce.useEffect(()=>{if(A2()&&f){vu.globalOptions=Gp.globalOptions;const m=vu(f,i.current,r.current);return c(m),()=>m.destroy()}else c(void 0)},[f,c]),[h,l]}Gp.globalOptions=void 0;function Vp(s,t){const i=document.createElement("canvas");i.width=s,i.height=s;const r=i.getContext("2d");t(r,s);const l=new xu(i);return l.colorSpace=Gn,l.anisotropy=8,l}function rR(){return Vp(512,(s,t)=>{const i=s.createRadialGradient(t*.38,t*.34,10,t/2,t/2,t*.56);i.addColorStop(0,"#fff8bd"),i.addColorStop(.28,"#ffd94c"),i.addColorStop(.58,"#ff8b24"),i.addColorStop(1,"#8e230b"),s.fillStyle=i,s.fillRect(0,0,t,t);for(let r=0;r<220;r+=1){const l=Math.random()*t,c=Math.random()*t,f=8+Math.random()*34;s.globalAlpha=.08+Math.random()*.12,s.fillStyle=Math.random()>.45?"#fff3a1":"#ff5a1f",s.beginPath(),s.arc(l,c,f,0,Math.PI*2),s.fill()}s.globalAlpha=1})}function Xv({base:s,accent:t,light:i,bands:r=!1,clouds:l=!1}){return Vp(512,(c,f)=>{const h=c.createLinearGradient(0,0,f,f);if(h.addColorStop(0,i),h.addColorStop(.42,s),h.addColorStop(1,t),c.fillStyle=h,c.fillRect(0,0,f,f),r)for(let p=0;p<f;p+=18+Math.random()*20)c.globalAlpha=.18+Math.random()*.18,c.fillStyle=Math.random()>.5?i:t,c.fillRect(0,p,f,6+Math.random()*20);for(let p=0;p<120;p+=1)c.globalAlpha=.06+Math.random()*.14,c.fillStyle=Math.random()>.5?i:t,c.beginPath(),c.ellipse(Math.random()*f,Math.random()*f,12+Math.random()*56,4+Math.random()*22,Math.random()*Math.PI,0,Math.PI*2),c.fill();if(l)for(let p=0;p<90;p+=1)c.globalAlpha=.08+Math.random()*.16,c.fillStyle="#ffffff",c.beginPath(),c.ellipse(Math.random()*f,Math.random()*f,18+Math.random()*70,3+Math.random()*12,Math.random()*Math.PI,0,Math.PI*2),c.fill();c.globalAlpha=1})}function sR(s){return Vp(256,(t,i)=>{const r=t.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);r.addColorStop(0,s),r.addColorStop(.28,s),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(0,0,i,i)})}function Wv(s,t,i="#000000",r=.02){return new gu({color:t,map:s,emissive:i,emissiveIntensity:r,roughness:.82,metalness:.02})}function qv(s,t="#8eeeff"){const i=[];for(let r=0;r<=240;r+=1){const l=r/240*Math.PI*2;i.push(new W(Math.cos(l)*s,0,Math.sin(l)*s))}return new Rp(new ln().setFromPoints(i),new du({color:t,transparent:!0,opacity:.28}))}function vh(s){const t=new ln,i=new Float32Array(s*3),r=new Float32Array(s*3);for(let l=0;l<s;l+=1){const c=8+Math.random()*44,f=Math.random()*Math.PI*2,h=Math.acos(Math.random()*2-1);i[l*3]=c*Math.sin(h)*Math.cos(f),i[l*3+1]=c*Math.cos(h)*.72,i[l*3+2]=c*Math.sin(h)*Math.sin(f);const p=.72+Math.random()*.28;r[l*3]=p,r[l*3+1]=p*(.86+Math.random()*.14),r[l*3+2]=1}return t.setAttribute("position",new Dn(i,3)),t.setAttribute("color",new Dn(r,3)),new Mu(t,new ll({size:.028,transparent:!0,opacity:.9,vertexColors:!0,depthWrite:!1}))}function oR(s,t,i){const r=new ln,l=new Float32Array(s*3),c=new Float32Array(s*3);for(let f=0;f<s;f+=1){const h=Math.random()*Math.PI*2,p=t+Math.random()*(i-t);l[f*3]=Math.cos(h)*p,l[f*3+1]=(Math.random()-.5)*.08,l[f*3+2]=Math.sin(h)*p,c[f*3]=.45+Math.random()*.35,c[f*3+1]=.58+Math.random()*.32,c[f*3+2]=.72+Math.random()*.26}return r.setAttribute("position",new Dn(l,3)),r.setAttribute("color",new Dn(c,3)),new Mu(r,new ll({size:.025,transparent:!0,opacity:.58,vertexColors:!0,depthWrite:!1}))}function lR(){const s=Ce.useRef(null);return Ce.useEffect(()=>{const t=s.current;if(!t)return;const i=new zp({antialias:!0,alpha:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.shadowMap.enabled=!0,i.shadowMap.type=$v,t.appendChild(i.domElement),i.domElement.style.cursor="grab";const r=new Tp,l=new Vn(39,1,.1,100);l.position.set(.3,5.8,15.6),r.add(new Np("#6f8fd1",.42));const c=new _u("#fff0a8",18,54);c.castShadow=!0,r.add(c);const f=new wE("#79ecff",.9);f.position.set(-6,7,5),r.add(f);const h=new ci;h.rotation.x=-.18,r.add(h);const p=vh(6200);r.add(p);const m=vh(950);m.material.size=.06,m.material.opacity=.96,r.add(m);const v=vh(260);v.material.size=.12,v.material.opacity=.42,r.add(v);const _=rR(),y=sR("rgba(255, 183, 55, 0.95)"),x=new $e(new Gi(.9,80,80),new li({map:_,color:"#fff0a8"}));h.add(x);const E=new lp(new fu({map:y,color:"#ffb347",transparent:!0,opacity:.62,depthWrite:!1,blending:ru}));E.scale.set(3.1,3.1,1),h.add(E);const b=[{name:"Mercury",radius:1.45,size:.15,speed:1.45,color:"#9c9a92",y:.02,texture:{base:"#8f8a7a",accent:"#3c3a36",light:"#ddd7c4"}},{name:"Venus",radius:2.12,size:.26,speed:1.08,color:"#c98b3d",y:-.03,texture:{base:"#b66d2b",accent:"#5f2f16",light:"#f2bd70",clouds:!0}},{name:"Earth",radius:2.92,size:.31,speed:.82,color:"#4aa5ff",y:.05,moon:!0,texture:{base:"#235fbf",accent:"#184076",light:"#58c7ff",clouds:!0}},{name:"Mars",radius:3.72,size:.24,speed:.64,color:"#c66a42",y:-.04,texture:{base:"#a94928",accent:"#42180e",light:"#ee9a5d"}},{name:"Jupiter",radius:4.95,size:.55,speed:.43,color:"#d4a15f",y:.03,texture:{base:"#b98243",accent:"#6a3b1f",light:"#f5d192",bands:!0}},{name:"Saturn",radius:6.22,size:.43,speed:.32,color:"#c8b78a",y:-.02,rings:!0,texture:{base:"#b9a56f",accent:"#5c4b31",light:"#efe0b1",bands:!0}},{name:"Uranus",radius:7.28,size:.31,speed:.25,color:"#78d8eb",y:.06,texture:{base:"#57b9cf",accent:"#1e6173",light:"#b8f7ff",bands:!0}}],S=oR(760,3.95,4.48);h.add(S);const g=[];let T=null;const D=b.map((st,Ct)=>{const gt=qv(st.radius,Ct%2?"#b4f6ff":"#fff06a");gt.rotation.y=Ct*.05,h.add(gt),g.push(gt);const wt=new ci;wt.rotation.y=Ct*.8,h.add(wt);const kt=Xv(st.texture),Pt=new $e(new Gi(st.size,48,48),Wv(kt,st.color,st.color,.04));Pt.position.set(st.radius,st.y,0),Pt.castShadow=!0,Pt.receiveShadow=!0,wt.add(Pt);let Nt=null;if(st.moon){Nt=new ci,Nt.position.copy(Pt.position);const $t=qv(.56,"#ffffff");$t.material.opacity=.22,Nt.add($t),g.push($t);const X=new $e(new Gi(.07,20,20),Wv(Xv({base:"#c9c9c4",accent:"#5d5d5a",light:"#f7f7ef"}),"#f7fbff","#ffffff",.02));X.position.x=.56,Nt.add(X),wt.add(Nt),T={name:"Moon",radius:st.radius+.56,size:.07,pivot:Nt,planet:X,moonPivot:null,speed:st.speed,baseY:st.y}}if(st.rings){const $t=new $e(new Up(st.size*1.35,st.size*2.05,80),new li({color:"#e9d8a4",transparent:!0,opacity:.72,side:wi}));$t.position.copy(Pt.position),$t.rotation.set(Math.PI/2.55,.24,.18),wt.add($t)}return{name:st.name,radius:st.radius,size:st.size,pivot:wt,planet:Pt,moonPivot:Nt,speed:st.speed,baseY:st.y}}),R=[{name:"Sun",radius:0,size:.9,pivot:h,planet:x,moonPivot:null,speed:0,baseY:0},...D,T].filter(Boolean),H=new ci,O=new $e(new mu(.07,.24,18),new li({color:"#ffffff"}));O.rotation.z=-Math.PI/2;const L=new lp(new fu({map:y,color:"#62f6ff",transparent:!0,opacity:.72,blending:ru,depthWrite:!1}));L.scale.set(.35,.35,1),H.add(O,L),H.visible=!1,h.add(H);const z=new ci,C=new $e(new Gi(.1,18,18),new li({color:"#ffffff"})),w=new $e(new mu(.08,.9,18),new li({color:"#62f6ff",transparent:!0,opacity:.44}));w.rotation.z=Math.PI/2,w.position.x=-.45,z.add(C,w),h.add(z);const G=new Op,$=new DE,Y=new ue,et={position:new W(.3,5.8,15.6),lookAt:new W(.2,0,0)},lt=new W(.2,0,0),B=new UE,Z=new W,j=()=>{Z.copy(et.position).sub(et.lookAt),B.setFromVector3(Z)},St=()=>{B.phi=Math.max(.36,Math.min(Math.PI-.28,B.phi)),B.radius=Math.max(2.4,Math.min(22,B.radius)),et.position.copy(et.lookAt).add(Z.setFromSpherical(B))};j();let Tt=-100,I=1,nt=!0,pt=null,K=null,dt=0,bt=!1,yt=!1,Ut=!1,qt=0,Vt=0;const Jt=new W,Lt=new W,Kt=new W,V=st=>{if(!st)return;st.planet.updateWorldMatrix(!0,!1),st.planet.getWorldPosition(Jt),et.lookAt.copy(Jt),Lt.set(Jt.x,0,Jt.z),Lt.lengthSq()<.001&&Lt.set(1,0,0),Lt.normalize();const Ct=Math.max(1.15,st.size*3.5),gt=Math.max(.72,st.size*2.2);Kt.copy(Lt).multiplyScalar(Ct).add(new W(0,gt,1.45+st.size*2.2)),et.position.copy(Jt).add(Kt)},ye=st=>{st&&(K=st,V(st),j())},re=st=>{const Ct=R.find(gt=>gt.name===st.detail?.planet);ye(Ct)},he=()=>{K=null,et.position.set(.3,5.8,15.6),et.lookAt.set(.2,0,0),j()},Ht=()=>{Tt=G.getElapsedTime(),H.visible=!0},se=st=>{I=Number(st.detail?.speed||1)},Yt=st=>{g.forEach(Ct=>{Ct.visible=!!st.detail?.enabled})},ie=st=>{nt=!!st.detail?.enabled},Fe=st=>{const Ct=Math.max(.3,Math.min(1,Number(st.detail?.density||100)/100));p.geometry.setDrawRange(0,Math.floor(6200*Ct)),m.geometry.setDrawRange(0,Math.floor(950*Ct)),v.geometry.setDrawRange(0,Math.floor(260*Ct))},F=st=>{if(bt)return;const Ct=i.domElement.getBoundingClientRect();Y.x=(st.clientX-Ct.left)/Ct.width*2-1,Y.y=-((st.clientY-Ct.top)/Ct.height*2-1),$.setFromCamera(Y,l);const gt=$.intersectObjects(R.map(kt=>kt.planet),!1),wt=gt.length?R.find(kt=>kt.planet===gt[0].object):null;pt&&pt!==wt&&(pt.planet.scale.setScalar(1),"emissiveIntensity"in pt.planet.material&&(pt.planet.material.emissiveIntensity=pt.name==="Sun"?1:.04)),pt=wt,i.domElement.style.cursor=pt?"pointer":"grab",pt&&(pt.planet.scale.setScalar(1.16),"emissiveIntensity"in pt.planet.material&&(pt.planet.material.emissiveIntensity=pt.name==="Sun"?1.35:.18))},A=()=>{if(Ut){Ut=!1;return}pt&&(ye(pt),window.dispatchEvent(new CustomEvent("space-selected-planet",{detail:{planet:pt.name}})))},at=st=>{!st.isPrimary||st.button!==0||(bt=!0,K=null,yt=!1,qt=st.clientX,Vt=st.clientY,i.domElement.style.cursor="grabbing",i.domElement.setPointerCapture?.(st.pointerId))},_t=st=>{if(!bt){F(st);return}const Ct=st.clientX-qt,gt=st.clientY-Vt;Math.abs(Ct)+Math.abs(gt)>3&&(yt=!0),qt=st.clientX,Vt=st.clientY,B.theta-=Ct*.006,B.phi-=gt*.005,St()},Et=st=>{bt&&(bt=!1,Ut=yt,i.domElement.releasePointerCapture?.(st.pointerId),i.domElement.style.cursor=pt?"pointer":"grab")},ht=st=>{st.preventDefault();const Ct=st.deltaY*.006;B.radius+=Ct,St()},jt=()=>{const st=t.clientWidth,Ct=t.clientHeight;i.setSize(st,Ct),l.aspect=st/Ct,l.updateProjectionMatrix()},Ot=()=>{dt=requestAnimationFrame(Ot);const st=G.getElapsedTime();h.rotation.y=st*.055*I,p.rotation.y=st*.012,m.rotation.y=-st*.018,v.rotation.y=st*.007,S.rotation.y=st*.08,x.rotation.y=st*.08,x.scale.setScalar(1+Math.sin(st*2.4)*.025),E.scale.setScalar(1+Math.sin(st*1.7)*.08),D.forEach(({pivot:wt,planet:kt,moonPivot:Pt,speed:Nt,baseY:$t},X)=>{wt.rotation.y=st*Nt*I+X*.8,kt.rotation.y=st*(1.2+X*.08),kt.position.y=$t+Math.sin(st*1.4+X)*.035,Pt&&(Pt.rotation.y=st*2.4)});const Ct=st*.46;if(z.position.set(Math.cos(Ct)*6.1,.8+Math.sin(st*1.1)*.45,Math.sin(Ct)*2.2),z.rotation.y=-Ct,H.visible){const wt=Math.min((st-Tt)/5,1),kt=wt*Math.PI,Pt=2.92+(3.72-2.92)*wt;H.position.set(Pt,.12+Math.sin(kt)*.9,Math.sin(wt*Math.PI*2)*.42),H.rotation.y=wt*Math.PI*2,wt>=1&&(H.visible=!1)}K&&V(K);const gt=nt?new W(Math.sin(st*.16)*.22,Math.sin(st*.21)*.12,0):new W(0,0,0);l.position.lerp(et.position.clone().add(gt),.045),lt.lerp(et.lookAt,.055),l.lookAt(lt),i.render(r,l)};return jt(),Ot(),window.addEventListener("resize",jt),window.addEventListener("space-focus-planet",re),window.addEventListener("space-reset-camera",he),window.addEventListener("space-launch-probe",Ht),window.addEventListener("space-set-orbit-speed",se),window.addEventListener("space-toggle-orbits",Yt),window.addEventListener("space-toggle-cinematic",ie),window.addEventListener("space-set-star-density",Fe),i.domElement.addEventListener("pointermove",F),i.domElement.addEventListener("pointerdown",at),i.domElement.addEventListener("pointermove",_t),i.domElement.addEventListener("pointerup",Et),i.domElement.addEventListener("pointercancel",Et),i.domElement.addEventListener("wheel",ht,{passive:!1}),i.domElement.addEventListener("click",A),i.domElement.style.touchAction="none",()=>{cancelAnimationFrame(dt),window.removeEventListener("resize",jt),window.removeEventListener("space-focus-planet",re),window.removeEventListener("space-reset-camera",he),window.removeEventListener("space-launch-probe",Ht),window.removeEventListener("space-set-orbit-speed",se),window.removeEventListener("space-toggle-orbits",Yt),window.removeEventListener("space-toggle-cinematic",ie),window.removeEventListener("space-set-star-density",Fe),i.domElement.removeEventListener("pointermove",F),i.domElement.removeEventListener("pointerdown",at),i.domElement.removeEventListener("pointermove",_t),i.domElement.removeEventListener("pointerup",Et),i.domElement.removeEventListener("pointercancel",Et),i.domElement.removeEventListener("wheel",ht),i.domElement.removeEventListener("click",A),t.removeChild(i.domElement),i.dispose(),r.traverse(st=>{st.geometry&&st.geometry.dispose(),st.material&&(st.material.map&&st.material.map.dispose(),st.material.dispose())})}},[]),P.createElement("div",{className:"complexCanvas",ref:s,"aria-label":"Animated solar system scene"})}const Yv=[{name:"Sun",type:"Star",tagline:"System core",distanceLabel:"System position",distance:"0 km",period:"center point",temperature:"5,500 C",gravity:"274 m/s2",diameter:"1,392,700 km",moons:"8 planets",day:"25d",color:"#ffb347"},{name:"Mercury",type:"Terrestrial",tagline:"Fast inner world",distance:"57.9M km",period:"88 days",temperature:"167 C",gravity:"3.70 m/s2",diameter:"4,879 km",moons:"0",day:"58d 15h",color:"#b9b2a0"},{name:"Venus",type:"Terrestrial",tagline:"Golden atmosphere",distance:"108.2M km",period:"225 days",temperature:"464 C",gravity:"8.87 m/s2",diameter:"12,104 km",moons:"0",day:"243d",color:"#e7a85d"},{name:"Earth",type:"Terrestrial",tagline:"Blue mission origin",distance:"149.6M km",period:"365 days",temperature:"15 C",gravity:"9.81 m/s2",diameter:"12,742 km",moons:"1",day:"24h",color:"#58c7ff"},{name:"Moon",type:"Natural satellite",tagline:"Earth orbit companion",distanceLabel:"Distance from Earth",distance:"384,400 km",period:"27.3 days",temperature:"-20 C avg",gravity:"1.62 m/s2",diameter:"3,474 km",moons:"0",day:"27d 7h",color:"#d9d7cf"},{name:"Mars",type:"Terrestrial",tagline:"The red planet",distance:"227.9M km",period:"687 days",temperature:"-63 C",gravity:"3.71 m/s2",diameter:"6,779 km",moons:"2",day:"24h 37m",color:"#ee7a4d"},{name:"Jupiter",type:"Gas giant",tagline:"Storm-scale gravity",distance:"778.5M km",period:"12 years",temperature:"-108 C",gravity:"24.79 m/s2",diameter:"139,820 km",moons:"95",day:"9h 56m",color:"#f0c27a"},{name:"Saturn",type:"Gas giant",tagline:"Ringed signal hub",distance:"1.43B km",period:"29 years",temperature:"-139 C",gravity:"10.44 m/s2",diameter:"116,460 km",moons:"146",day:"10h 42m",color:"#d8c38c"},{name:"Uranus",type:"Ice giant",tagline:"Outer blue vector",distance:"2.87B km",period:"84 years",temperature:"-195 C",gravity:"8.69 m/s2",diameter:"50,724 km",moons:"27",day:"17h 14m",color:"#9cefff"}],cR=[["Performance","Instanced star fields, procedural textures, reduced geometry churn and responsive canvas sizing."],["Interaction","Planet selection, event-driven camera focus, probe launch animation and UI-to-WebGL state control."],["Visuals","Custom canvas materials, glow sprites, rings, asteroid belt, particles and cinematic color states."]],uR=[["01","The Sun","Orange-gold origin point with procedural surface motion and additive glow."],["02","Inner planets","Mercury, Venus, Earth and Mars move through tight transparent orbits."],["03","Asteroid belt","Particle belt adds scale and motion between Mars and Jupiter."],["04","Gas giants","Jupiter and Saturn show larger textured bodies, rings and slower orbital rhythm."],["05","Outer darkness","Blue/violet depth, dense stars and slow cinematic camera drift."]],fR=[["Three.js","Core WebGL scene, planets, lights and orbital motion."],["React","Stateful control panels and event bridge into canvas."],["TypeScript-ready","Data-driven interfaces structured for typed models."],["GLSL-style shaders","Procedural texture and atmosphere-like glow work."],["Vite","Fast local iteration and optimized production build."],["Postprocessing-ready","Scene prepared for bloom, trails and cinematic passes."]];function jv(s){window.dispatchEvent(new CustomEvent("space-focus-planet",{detail:{planet:s}}))}function dR(){window.dispatchEvent(new CustomEvent("space-launch-probe"))}function hR(){window.dispatchEvent(new CustomEvent("space-reset-camera"))}function pR(){const[s,t]=Gp({align:"start",containScroll:"trimSnaps"}),[i,r]=Ce.useState(null),[l,c]=Ce.useState(1.25),[f,h]=Ce.useState(100),[p,m]=Ce.useState(!0),[v,_]=Ce.useState(!0),[y,x]=Ce.useState(0);Ce.useEffect(()=>{const T=D=>{const R=Yv.find(H=>H.name===D.detail?.planet);R&&r(R)};return window.addEventListener("space-selected-planet",T),()=>window.removeEventListener("space-selected-planet",T)},[]),Ce.useEffect(()=>{window.dispatchEvent(new CustomEvent("space-set-orbit-speed",{detail:{speed:l}}))},[l]),Ce.useEffect(()=>{window.dispatchEvent(new CustomEvent("space-toggle-orbits",{detail:{enabled:p}}))},[p]),Ce.useEffect(()=>{window.dispatchEvent(new CustomEvent("space-toggle-cinematic",{detail:{enabled:v}}))},[v]),Ce.useEffect(()=>{window.dispatchEvent(new CustomEvent("space-set-star-density",{detail:{density:f}}))},[f]);const E=T=>{r(T),jv(T.name),document.querySelector(".missionControl")?.scrollIntoView({behavior:"smooth",block:"start"})},b=Ce.useCallback(()=>t?.scrollPrev(),[t]),S=Ce.useCallback(()=>t?.scrollNext(),[t]),g=()=>{dR(),x(1);const T=Date.now(),D=window.setInterval(()=>{const R=Math.min(Math.round((Date.now()-T)/5e3*100),100);x(R),R>=100&&window.clearInterval(D)},120)};return P.createElement(P.Fragment,null,P.createElement("section",{className:"spaceHero","aria-label":"Cinematic space control room intro"},P.createElement("div",{className:"showcaseCopy"},P.createElement("p",{className:"kicker"},P.createElement(JM,{size:16})," NASA-style dashboard"),P.createElement("h1",null,"Cinematic space control room."),P.createElement("p",null,"Not a website about space. A space interface you can control: select planets, launch probes, tune telemetry and drive a realistic Three.js solar system."),P.createElement("div",{className:"showcaseBadges","aria-label":"3D scene details"},P.createElement("span",null,"3D planet selection"),P.createElement("span",null,"mission planner"),P.createElement("span",null,"live signal UI")))),P.createElement("section",{className:`missionControl ${i?"hasSelection":""}`,"aria-labelledby":"mission-control-title"},P.createElement("div",{className:"missionScene"},P.createElement(lR,null)),i?P.createElement("aside",{className:"controlPanel"},P.createElement("div",{className:"controlPanelHeader"},P.createElement("p",{className:"kicker"},P.createElement(tx,{size:16})," Selected object"),P.createElement("button",{type:"button","aria-label":"Close selected object panel",onClick:()=>r(null)},P.createElement(ex,{size:18}))),P.createElement("h2",{id:"mission-control-title"},i.name),P.createElement("dl",null,P.createElement("div",null,P.createElement("dt",null,i.distanceLabel||"Distance from Sun"),P.createElement("dd",null,i.distance)),P.createElement("div",null,P.createElement("dt",null,"Orbital period"),P.createElement("dd",null,i.period)),P.createElement("div",null,P.createElement("dt",null,"Gravity"),P.createElement("dd",null,i.gravity)),P.createElement("div",null,P.createElement("dt",null,"Temperature"),P.createElement("dd",null,i.temperature))),P.createElement("div",{className:"planetTuning","aria-label":"Scene controls"},P.createElement("label",null,P.createElement("span",null,"Orbit speed ",P.createElement("b",null,l.toFixed(2),"x")),P.createElement("input",{type:"range",min:"0.25",max:"2",step:"0.05",value:l,onChange:T=>c(Number(T.target.value))})),P.createElement("label",null,P.createElement("span",null,"Star density ",P.createElement("b",null,Math.round(f),"%")),P.createElement("input",{type:"range",min:"30",max:"100",step:"5",value:f,onChange:T=>h(Number(T.target.value))})),P.createElement("div",{className:"planetToggleGrid"},P.createElement("label",null,P.createElement("input",{type:"checkbox",checked:p,onChange:T=>m(T.target.checked)})," Show orbits"),P.createElement("label",null,P.createElement("input",{type:"checkbox",checked:v,onChange:T=>_(T.target.checked)})," Cinematic camera")),P.createElement("button",{type:"button",onClick:hR},"Reset view")),P.createElement("div",{className:"controlActions"},P.createElement("button",{type:"button",onClick:()=>jv(i.name)},"Focus planet"),P.createElement("button",{type:"button",onClick:g},"Launch probe"))):null),P.createElement("section",{className:"spaceSection","aria-labelledby":"archive-title"},P.createElement("div",{className:"spaceIntro"},P.createElement("p",{className:"kicker"},P.createElement(Qv,{size:16})," Planet archive"),P.createElement("h2",{id:"archive-title"},"Explore the system."),P.createElement("p",null,"Each card controls the main mission canvas and focuses the camera without changing pages.")),P.createElement("div",{className:"archiveCarousel"},P.createElement("div",{className:"carouselControls","aria-label":"Planet archive controls"},P.createElement("button",{type:"button",onClick:b},"Prev"),P.createElement("button",{type:"button",onClick:S},"Next")),P.createElement("div",{className:"embla",ref:s},P.createElement("div",{className:"emblaTrack"},Yv.map(T=>P.createElement("div",{className:"emblaSlide",key:T.name},P.createElement("button",{className:`archiveCard ${i?.name===T.name?"isActive":""}`,type:"button",onClick:()=>E(T)},P.createElement("span",null,T.type),P.createElement("i",{style:{"--planet-color":T.color}}),P.createElement("strong",null,T.name),P.createElement("em",null,T.tagline),P.createElement("dl",null,P.createElement("div",null,P.createElement("dt",null,"diameter"),P.createElement("dd",null,T.diameter)),P.createElement("div",null,P.createElement("dt",null,"moons"),P.createElement("dd",null,T.moons)),P.createElement("div",null,P.createElement("dt",null,"day length"),P.createElement("dd",null,T.day))),P.createElement("small",null,"Explore")))))))),P.createElement("section",{className:"spaceSection launchSection","aria-labelledby":"launch-title"},P.createElement("div",{className:"spaceIntro"},P.createElement("p",{className:"kicker"},P.createElement(Mh,{size:16})," Launch simulator"),P.createElement("h2",{id:"launch-title"},"Mission route."),P.createElement("p",null,"Earth to Jupiter transfer simulation with probe animation and live progress feedback.")),P.createElement("div",{className:"launchPanel"},P.createElement("div",{className:"missionRoute"},P.createElement("span",null,"Earth"),P.createElement("i",null),P.createElement("span",null,"Jupiter")),P.createElement("dl",null,P.createElement("div",null,P.createElement("dt",null,"Estimated travel time"),P.createElement("dd",null,"6 years")),P.createElement("div",null,P.createElement("dt",null,"Fuel required"),P.createElement("dd",null,"78%")),P.createElement("div",null,P.createElement("dt",null,"Signal delay"),P.createElement("dd",null,"43 min"))),P.createElement("div",{className:"progressTrack"},P.createElement("span",{style:{width:`${y}%`}})),P.createElement("p",{className:"launchStatus"},y>0&&y<100?`launching... ${y}%`:y===100?"arrival flash confirmed":"probe standing by"),P.createElement("button",{className:"launchButton",type:"button",onClick:g},P.createElement(Mh,{size:18})," Launch mission"))),P.createElement("section",{className:"spaceSection","aria-labelledby":"signal-title"},P.createElement("div",{className:"spaceIntro"},P.createElement("p",{className:"kicker"},P.createElement($M,{size:16})," Signal dashboard"),P.createElement("h2",{id:"signal-title"},"Live orbital data."),P.createElement("p",null,"Controls show state management, UI-to-canvas events and realtime scene tuning.")),P.createElement("div",{className:"signalConsole"},P.createElement("div",{className:"radar","aria-hidden":"true"},P.createElement("span",null),P.createElement("span",null),P.createElement("span",null)),P.createElement("div",{className:"signalDashboard"},P.createElement("div",{className:"signalReadout"},P.createElement("span",null,"Signal strength"),P.createElement("strong",null,"87%"),P.createElement("small",null,"stable")),P.createElement("div",{className:"signalReadout"},P.createElement("span",null,"Star density"),P.createElement("strong",null,Math.round(7410*(f/100))),P.createElement("small",null,"live")),P.createElement("div",{className:"signalReadout"},P.createElement("span",null,"Active planet"),P.createElement("strong",null,i?.name||"System"),P.createElement("small",null,i?"focus":"idle")),P.createElement("div",{className:"signalReadout"},P.createElement("span",null,"Orbit speed"),P.createElement("strong",null,l.toFixed(2),"x"),P.createElement("small",null,"tuned"))))),P.createElement("section",{className:"spaceSection journeySection","aria-labelledby":"journey-title"},P.createElement("div",{className:"spaceIntro"},P.createElement("p",{className:"kicker"},P.createElement(U_,{size:16})," Cinematic scroll journey"),P.createElement("h2",{id:"journey-title"},"Camera path story."),P.createElement("p",null,"Scroll blocks describe the route a production version can bind to camera keyframes.")),P.createElement("div",{className:"journeyList"},uR.map(([T,D,R])=>P.createElement("article",{key:T},P.createElement("span",null,T),P.createElement("h3",null,D),P.createElement("p",null,R))))),P.createElement("section",{className:"spaceSection","aria-labelledby":"case-title"},P.createElement("div",{className:"spaceIntro"},P.createElement("p",{className:"kicker"},P.createElement(QM,{size:16})," Technical case study"),P.createElement("h2",{id:"case-title"},"Built as a real WebGL interface.")),P.createElement("div",{className:"caseCards"},cR.map(([T,D])=>P.createElement("article",{key:T},P.createElement("h3",null,T),P.createElement("p",null,D))),P.createElement("div",{className:"flowDiagram"},"React state to Three.js scene to UI panels to user interaction"))),P.createElement("section",{className:"spaceSection","aria-labelledby":"stack-title"},P.createElement("div",{className:"spaceIntro"},P.createElement("p",{className:"kicker"},P.createElement(U_,{size:16})," Stack constellation"),P.createElement("h2",{id:"stack-title"},"Technology orbit.")),P.createElement("div",{className:"constellationStack"},fR.map(([T,D])=>P.createElement("article",{key:T},P.createElement("strong",null,T),P.createElement("p",null,D))))),P.createElement("footer",{className:"spaceContact",id:"contact"},P.createElement("div",null,P.createElement("p",{className:"kicker"},P.createElement(Sh,{size:16})," Contact"),P.createElement("h2",null,"Want to build something cinematic?"),P.createElement("p",null,"Frontend developer focused on interactive interfaces, 3D experiences and polished UI systems.")),P.createElement("div",{className:"ctaRow"},P.createElement(Us,{href:Zv},P.createElement(Sh,{size:18})," Contact me"),P.createElement(Us,{variant:"secondary",href:Cr.github,target:"_blank",rel:"noreferrer"},P.createElement(yh,{size:18})," View GitHub"))))}function mR(){const s=window.location.pathname==="/3d";return P.createElement(P.Fragment,null,P.createElement("div",{className:"grainLayer","aria-hidden":"true"}),P.createElement("main",{className:"pageShell"},P.createElement(YM,null),s?P.createElement(pR,null):P.createElement(b2,null)))}WM.createRoot(document.getElementById("root")).render(P.createElement(P.StrictMode,null,P.createElement(mR,null)));
