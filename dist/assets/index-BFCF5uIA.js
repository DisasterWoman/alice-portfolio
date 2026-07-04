(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Ix(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Dh={exports:{}},de={};var M_;function Bx(){if(M_)return de;M_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=y&&P[y]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function g(P,nt,xt){this.props=P,this.context=nt,this.refs=S,this.updater=xt||E}g.prototype.isReactComponent={},g.prototype.setState=function(P,nt){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,nt,"setState")},g.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function T(){}T.prototype=g.prototype;function C(P,nt,xt){this.props=P,this.context=nt,this.refs=S,this.updater=xt||E}var R=C.prototype=new T;R.constructor=C,b(R,g.prototype),R.isPureReactComponent=!0;var V=Array.isArray;function O(){}var N={H:null,A:null,T:null,S:null},z=Object.prototype.hasOwnProperty;function D(P,nt,xt){var Q=xt.ref;return{$$typeof:s,type:P,key:nt,ref:Q!==void 0?Q:null,props:xt}}function w(P,nt){return D(P.type,nt,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function $(P){var nt={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(xt){return nt[xt]})}var j=/\/+/g;function et(P,nt){return typeof P=="object"&&P!==null&&P.key!=null?$(""+P.key):nt.toString(36)}function st(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(O,O):(P.status="pending",P.then(function(nt){P.status==="pending"&&(P.status="fulfilled",P.value=nt)},function(nt){P.status==="pending"&&(P.status="rejected",P.reason=nt)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function B(P,nt,xt,Q,ft){var Rt=typeof P;(Rt==="undefined"||Rt==="boolean")&&(P=null);var gt=!1;if(P===null)gt=!0;else switch(Rt){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(P.$$typeof){case s:case t:gt=!0;break;case v:return gt=P._init,B(gt(P._payload),nt,xt,Q,ft)}}if(gt)return ft=ft(P),gt=Q===""?"."+et(P,0):Q,V(ft)?(xt="",gt!=null&&(xt=gt.replace(j,"$&/")+"/"),B(ft,nt,xt,"",function(Vt){return Vt})):ft!=null&&(G(ft)&&(ft=w(ft,xt+(ft.key==null||P&&P.key===ft.key?"":(""+ft.key).replace(j,"$&/")+"/")+gt)),nt.push(ft)),1;gt=0;var Dt=Q===""?".":Q+":";if(V(P))for(var Xt=0;Xt<P.length;Xt++)Q=P[Xt],Rt=Dt+et(Q,Xt),gt+=B(Q,nt,xt,Rt,ft);else if(Xt=M(P),typeof Xt=="function")for(P=Xt.call(P),Xt=0;!(Q=P.next()).done;)Q=Q.value,Rt=Dt+et(Q,Xt++),gt+=B(Q,nt,xt,Rt,ft);else if(Rt==="object"){if(typeof P.then=="function")return B(st(P),nt,xt,Q,ft);throw nt=String(P),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return gt}function W(P,nt,xt){if(P==null)return P;var Q=[],ft=0;return B(P,Q,"","",function(Rt){return nt.call(xt,Rt,ft++)}),Q}function K(P){if(P._status===-1){var nt=P._result;nt=nt(),nt.then(function(xt){(P._status===0||P._status===-1)&&(P._status=1,P._result=xt)},function(xt){(P._status===0||P._status===-1)&&(P._status=2,P._result=xt)}),P._status===-1&&(P._status=0,P._result=nt)}if(P._status===1)return P._result.default;throw P._result}var _t=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Tt={map:W,forEach:function(P,nt,xt){W(P,function(){nt.apply(this,arguments)},xt)},count:function(P){var nt=0;return W(P,function(){nt++}),nt},toArray:function(P){return W(P,function(nt){return nt})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return de.Activity=_,de.Children=Tt,de.Component=g,de.Fragment=i,de.Profiler=l,de.PureComponent=C,de.StrictMode=r,de.Suspense=p,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,de.__COMPILER_RUNTIME={__proto__:null,c:function(P){return N.H.useMemoCache(P)}},de.cache=function(P){return function(){return P.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(P,nt,xt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Q=b({},P.props),ft=P.key;if(nt!=null)for(Rt in nt.key!==void 0&&(ft=""+nt.key),nt)!z.call(nt,Rt)||Rt==="key"||Rt==="__self"||Rt==="__source"||Rt==="ref"&&nt.ref===void 0||(Q[Rt]=nt[Rt]);var Rt=arguments.length-2;if(Rt===1)Q.children=xt;else if(1<Rt){for(var gt=Array(Rt),Dt=0;Dt<Rt;Dt++)gt[Dt]=arguments[Dt+2];Q.children=gt}return D(P.type,ft,Q)},de.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},de.createElement=function(P,nt,xt){var Q,ft={},Rt=null;if(nt!=null)for(Q in nt.key!==void 0&&(Rt=""+nt.key),nt)z.call(nt,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(ft[Q]=nt[Q]);var gt=arguments.length-2;if(gt===1)ft.children=xt;else if(1<gt){for(var Dt=Array(gt),Xt=0;Xt<gt;Xt++)Dt[Xt]=arguments[Xt+2];ft.children=Dt}if(P&&P.defaultProps)for(Q in gt=P.defaultProps,gt)ft[Q]===void 0&&(ft[Q]=gt[Q]);return D(P,Rt,ft)},de.createRef=function(){return{current:null}},de.forwardRef=function(P){return{$$typeof:d,render:P}},de.isValidElement=G,de.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:K}},de.memo=function(P,nt){return{$$typeof:m,type:P,compare:nt===void 0?null:nt}},de.startTransition=function(P){var nt=N.T,xt={};N.T=xt;try{var Q=P(),ft=N.S;ft!==null&&ft(xt,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(O,_t)}catch(Rt){_t(Rt)}finally{nt!==null&&xt.types!==null&&(nt.types=xt.types),N.T=nt}},de.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},de.use=function(P){return N.H.use(P)},de.useActionState=function(P,nt,xt){return N.H.useActionState(P,nt,xt)},de.useCallback=function(P,nt){return N.H.useCallback(P,nt)},de.useContext=function(P){return N.H.useContext(P)},de.useDebugValue=function(){},de.useDeferredValue=function(P,nt){return N.H.useDeferredValue(P,nt)},de.useEffect=function(P,nt){return N.H.useEffect(P,nt)},de.useEffectEvent=function(P){return N.H.useEffectEvent(P)},de.useId=function(){return N.H.useId()},de.useImperativeHandle=function(P,nt,xt){return N.H.useImperativeHandle(P,nt,xt)},de.useInsertionEffect=function(P,nt){return N.H.useInsertionEffect(P,nt)},de.useLayoutEffect=function(P,nt){return N.H.useLayoutEffect(P,nt)},de.useMemo=function(P,nt){return N.H.useMemo(P,nt)},de.useOptimistic=function(P,nt){return N.H.useOptimistic(P,nt)},de.useReducer=function(P,nt,xt){return N.H.useReducer(P,nt,xt)},de.useRef=function(P){return N.H.useRef(P)},de.useState=function(P){return N.H.useState(P)},de.useSyncExternalStore=function(P,nt,xt){return N.H.useSyncExternalStore(P,nt,xt)},de.useTransition=function(){return N.H.useTransition()},de.version="19.2.7",de}var E_;function dp(){return E_||(E_=1,Dh.exports=Bx()),Dh.exports}var Ce=dp();const I=Ix(Ce);var Uh={exports:{}},zo={},Lh={exports:{}},Nh={};var b_;function Fx(){return b_||(b_=1,(function(s){function t(B,W){var K=B.length;B.push(W);t:for(;0<K;){var _t=K-1>>>1,Tt=B[_t];if(0<l(Tt,W))B[_t]=W,B[K]=Tt,K=_t;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var W=B[0],K=B.pop();if(K!==W){B[0]=K;t:for(var _t=0,Tt=B.length,P=Tt>>>1;_t<P;){var nt=2*(_t+1)-1,xt=B[nt],Q=nt+1,ft=B[Q];if(0>l(xt,K))Q<Tt&&0>l(ft,xt)?(B[_t]=ft,B[Q]=K,_t=Q):(B[_t]=xt,B[nt]=K,_t=nt);else if(Q<Tt&&0>l(ft,K))B[_t]=ft,B[Q]=K,_t=Q;else break t}}return W}function l(B,W){var K=B.sortIndex-W.sortIndex;return K!==0?K:B.id-W.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,_=null,y=3,M=!1,E=!1,b=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function R(B){for(var W=i(m);W!==null;){if(W.callback===null)r(m);else if(W.startTime<=B)r(m),W.sortIndex=W.expirationTime,t(p,W);else break;W=i(m)}}function V(B){if(b=!1,R(B),!E)if(i(p)!==null)E=!0,O||(O=!0,$());else{var W=i(m);W!==null&&st(V,W.startTime-B)}}var O=!1,N=-1,z=5,D=-1;function w(){return S?!0:!(s.unstable_now()-D<z)}function G(){if(S=!1,O){var B=s.unstable_now();D=B;var W=!0;try{t:{E=!1,b&&(b=!1,T(N),N=-1),M=!0;var K=y;try{e:{for(R(B),_=i(p);_!==null&&!(_.expirationTime>B&&w());){var _t=_.callback;if(typeof _t=="function"){_.callback=null,y=_.priorityLevel;var Tt=_t(_.expirationTime<=B);if(B=s.unstable_now(),typeof Tt=="function"){_.callback=Tt,R(B),W=!0;break e}_===i(p)&&r(p),R(B)}else r(p);_=i(p)}if(_!==null)W=!0;else{var P=i(m);P!==null&&st(V,P.startTime-B),W=!1}}break t}finally{_=null,y=K,M=!1}W=void 0}}finally{W?$():O=!1}}}var $;if(typeof C=="function")$=function(){C(G)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,et=j.port2;j.port1.onmessage=G,$=function(){et.postMessage(null)}}else $=function(){g(G,0)};function st(B,W){N=g(function(){B(s.unstable_now())},W)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(B){switch(y){case 1:case 2:case 3:var W=3;break;default:W=y}var K=y;y=W;try{return B()}finally{y=K}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,W){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var K=y;y=B;try{return W()}finally{y=K}},s.unstable_scheduleCallback=function(B,W,K){var _t=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?_t+K:_t):K=_t,B){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=K+Tt,B={id:v++,callback:W,priorityLevel:B,startTime:K,expirationTime:Tt,sortIndex:-1},K>_t?(B.sortIndex=K,t(m,B),i(p)===null&&B===i(m)&&(b?(T(N),N=-1):b=!0,st(V,K-_t))):(B.sortIndex=Tt,t(p,B),E||M||(E=!0,O||(O=!0,$()))),B},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(B){var W=y;return function(){var K=y;y=W;try{return B.apply(this,arguments)}finally{y=K}}}})(Nh)),Nh}var T_;function Hx(){return T_||(T_=1,Lh.exports=Fx()),Lh.exports}var Oh={exports:{}},Nn={};var A_;function Gx(){if(A_)return Nn;A_=1;var s=dp();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:v}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(p,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,v)},Nn.flushSync=function(p){var m=f.T,v=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=m,r.p=v,r.d.f()}},Nn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Nn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Nn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var v=m.as,_=d(v,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:M}):v==="script"&&r.d.X(p,{crossOrigin:_,integrity:y,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Nn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Nn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,_=d(v,m.crossOrigin);r.d.L(p,v,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Nn.preloadModule=function(p,m){if(typeof p=="string")if(m){var v=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Nn.requestFormReset=function(p){r.d.r(p)},Nn.unstable_batchedUpdates=function(p,m){return p(m)},Nn.useFormState=function(p,m,v){return f.H.useFormState(p,m,v)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.2.7",Nn}var R_;function Vx(){if(R_)return Oh.exports;R_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Oh.exports=Gx(),Oh.exports}var w_;function kx(){if(w_)return zo;w_=1;var s=Hx(),t=dp(),i=Vx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return p(u),e;if(h===o)return p(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var x=!1,U=u.child;U;){if(U===a){x=!0,a=u,o=h;break}if(U===o){x=!0,o=u,a=h;break}U=U.sibling}if(!x){for(U=h.child;U;){if(U===a){x=!0,a=h,o=u;break}if(U===o){x=!0,o=h,a=u;break}U=U.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),C=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var j=Symbol.for("react.client.reference");function et(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===j?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case g:return"Profiler";case S:return"StrictMode";case V:return"Suspense";case O:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case C:return e.displayName||"Context";case T:return(e._context.displayName||"Context")+".Consumer";case R:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return n=e.displayName||null,n!==null?n:et(e.type)||"Memo";case z:n=e._payload,e=e._init;try{return et(e(n))}catch{}}return null}var st=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},_t=[],Tt=-1;function P(e){return{current:e}}function nt(e){0>Tt||(e.current=_t[Tt],_t[Tt]=null,Tt--)}function xt(e,n){Tt++,_t[Tt]=e.current,e.current=n}var Q=P(null),ft=P(null),Rt=P(null),gt=P(null);function Dt(e,n){switch(xt(Rt,n),xt(ft,e),xt(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?W0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=W0(n),e=q0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(Q),xt(Q,e)}function Xt(){nt(Q),nt(ft),nt(Rt)}function Vt(e){e.memoizedState!==null&&xt(gt,e);var n=Q.current,a=q0(n,e.type);n!==a&&(xt(ft,e),xt(Q,a))}function St(e){ft.current===e&&(nt(Q),nt(ft)),gt.current===e&&(nt(gt),Lo._currentValue=K)}var Et,Bt;function F(e){if(Et===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Et=n&&n[1]||"",Bt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Et+e+Bt}var he=!1;function Jt(e,n){if(!e||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ut){var ot=ut}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ut){ot=ut}e.call(yt.prototype)}}else{try{throw Error()}catch(ut){ot=ut}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ut){if(ut&&ot&&typeof ut.stack=="string")return[ut.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],U=h[1];if(x&&U){var k=x.split(`
`),at=U.split(`
`);for(u=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;u<at.length&&!at[u].includes("DetermineComponentFrameRoot");)u++;if(o===k.length||u===at.length)for(o=k.length-1,u=at.length-1;1<=o&&0<=u&&k[o]!==at[u];)u--;for(;1<=o&&0<=u;o--,u--)if(k[o]!==at[u]){if(o!==1||u!==1)do if(o--,u--,0>u||k[o]!==at[u]){var dt=`
`+k[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{he=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?F(a):""}function ue(e,n){switch(e.tag){case 26:case 27:case 5:return F(e.type);case 16:return F("Lazy");case 13:return e.child!==n&&n!==null?F("Suspense Fallback"):F("Suspense");case 19:return F("SuspenseList");case 0:case 15:return Jt(e.type,!1);case 11:return Jt(e.type.render,!1);case 1:return Jt(e.type,!0);case 31:return F("Activity");default:return""}}function Pt(e){try{var n="",a=null;do n+=ue(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ie=Object.prototype.hasOwnProperty,jt=s.unstable_scheduleCallback,re=s.unstable_cancelCallback,Ze=s.unstable_shouldYield,H=s.unstable_requestPaint,A=s.unstable_now,rt=s.unstable_getCurrentPriorityLevel,mt=s.unstable_ImmediatePriority,bt=s.unstable_UserBlockingPriority,ht=s.unstable_NormalPriority,Zt=s.unstable_LowPriority,Ut=s.unstable_IdlePriority,qt=s.log,Kt=s.unstable_setDisableYieldValue,Mt=null,Lt=null;function $t(e){if(typeof qt=="function"&&Kt(e),Lt&&typeof Lt.setStrictMode=="function")try{Lt.setStrictMode(Mt,e)}catch{}}var Wt=Math.clz32?Math.clz32:q,Nt=Math.log,se=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(Nt(e)/se|0)|0}var Ot=256,At=262144,Ht=4194304;function wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var U=o&134217727;return U!==0?(o=U&~h,o!==0?u=wt(o):(x&=U,x!==0?u=wt(x):a||(a=U&~e,a!==0&&(u=wt(a))))):(U=o&~h,U!==0?u=wt(U):x!==0?u=wt(x):a||(a=o&~e,a!==0&&(u=wt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Gt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function oe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function De(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function En(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yi(e,n,a,o,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var U=e.entanglements,k=e.expirationTimes,at=e.hiddenUpdates;for(a=x&~a;0<a;){var dt=31-Wt(a),yt=1<<dt;U[dt]=0,k[dt]=-1;var ot=at[dt];if(ot!==null)for(at[dt]=null,dt=0;dt<ot.length;dt++){var ut=ot[dt];ut!==null&&(ut.lane&=-536870913)}a&=~yt}o!==0&&ks(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~n))}function ks(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Wt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Xs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Wt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Li(e,n){var a=n&-n;return a=(a&42)!==0?1:$a(a),(a&(e.suspendedLanes|n))!==0?0:a}function $a(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Or(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ws(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:m_(e.type))}function tr(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var Si=Math.random().toString(36).slice(2),an="__reactFiber$"+Si,bn="__reactProps$"+Si,Xi="__reactContainer$"+Si,qs="__reactEvents$"+Si,Eu="__reactListeners$"+Si,bu="__reactHandles$"+Si,ul="__reactResources$"+Si,er="__reactMarker$"+Si;function Ys(e){delete e[an],delete e[bn],delete e[qs],delete e[Eu],delete e[bu]}function L(e){var n=e[an];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Xi]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=$0(e);e!==null;){if(a=e[an])return a;e=$0(e)}return n}e=a,a=e.parentNode}return null}function J(e){if(e=e[an]||e[Xi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function lt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ct(e){var n=e[ul];return n||(n=e[ul]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Z(e){e[er]=!0}var Ct=new Set,zt={};function kt(e,n){Ft(e,n),Ft(e+"Capture",n)}function Ft(e,n){for(zt[e]=n,e=0;e<n.length;e++)Ct.add(n[e])}var le=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ce={},te={};function ye(e){return ie.call(te,e)?!0:ie.call(ce,e)?!1:le.test(e)?te[e]=!0:(ce[e]=!0,!1)}function Ue(e,n,a){if(ye(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function qe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Re(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ne(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ee(e){if(!e._valueTracker){var n=ne(e)?"checked":"value";e._valueTracker=Ke(e,n,""+e[n])}}function Un(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ne(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zn=/[\n"\\]/g;function Sn(e){return e.replace(zn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fe(e,n,a,o,u,h,x,U){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?Ln(e,x,_e(n)):a!=null?Ln(e,x,_e(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?e.name=""+_e(U):e.removeAttribute("name")}function In(e,n,a,o,u,h,x,U){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Ee(e);return}a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,U||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=U?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Ee(e)}function Ln(e,n,a){n==="number"&&xi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function rn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Tn(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function Pr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(st(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ee(e)}function kn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ly=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ly.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function kp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Vp(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Vp(e,h,n[h])}function Tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ny=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Oy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fl(e){return Oy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var Au=null;function Ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zr=null,Ir=null;function Xp(e){var n=J(e);if(n&&(e=n.stateNode)){var a=e[bn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Sn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[bn]||null;if(!u)throw Error(r(90));Fe(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Un(o)}break t;case"textarea":Tn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rn(e,!!a.multiple,n,!1)}}}var wu=!1;function Wp(e,n,a){if(wu)return e(n,a);wu=!0;try{var o=e(n);return o}finally{if(wu=!1,(zr!==null||Ir!==null)&&(Jl(),zr&&(n=zr,e=Ir,Ir=zr=null,Xp(n),e)))for(n=0;n<e.length;n++)Xp(e[n])}}function js(e,n){var a=e.stateNode;if(a===null)return null;var o=a[bn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=!1;if(qi)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{Cu=!1}var _a=null,Du=null,hl=null;function qp(){if(hl)return hl;var e,n=Du,a=n.length,o,u="value"in _a?_a.value:_a.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[h-o];o++);return hl=u.slice(e,1<o?1-o:void 0)}function dl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function pl(){return!0}function Yp(){return!1}function Xn(e){function n(a,o,u,h,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var U in e)e.hasOwnProperty(U)&&(a=e[U],this[U]=a?a(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?pl:Yp,this.isPropagationStopped=Yp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Xn(nr),Ks=_({},nr,{view:0,detail:0}),Py=Xn(Ks),Uu,Lu,Qs,gl=_({},Ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qs&&(Qs&&e.type==="mousemove"?(Uu=e.screenX-Qs.screenX,Lu=e.screenY-Qs.screenY):Lu=Uu=0,Qs=e),Uu)},movementY:function(e){return"movementY"in e?e.movementY:Lu}}),jp=Xn(gl),zy=_({},gl,{dataTransfer:0}),Iy=Xn(zy),By=_({},Ks,{relatedTarget:0}),Nu=Xn(By),Fy=_({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Hy=Xn(Fy),Gy=_({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vy=Xn(Gy),ky=_({},nr,{data:0}),Zp=Xn(ky),Xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=qy[e])?!!n[e]:!1}function Ou(){return Yy}var jy=_({},Ks,{key:function(e){if(e.key){var n=Xy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zy=Xn(jy),Ky=_({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kp=Xn(Ky),Qy=_({},Ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),Jy=Xn(Qy),$y=_({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tS=Xn($y),eS=_({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nS=Xn(eS),iS=_({},nr,{newState:0,oldState:0}),aS=Xn(iS),rS=[9,13,27,32],Pu=qi&&"CompositionEvent"in window,Js=null;qi&&"documentMode"in document&&(Js=document.documentMode);var sS=qi&&"TextEvent"in window&&!Js,Qp=qi&&(!Pu||Js&&8<Js&&11>=Js),Jp=" ",$p=!1;function tm(e,n){switch(e){case"keyup":return rS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function em(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function oS(e,n){switch(e){case"compositionend":return em(n);case"keypress":return n.which!==32?null:($p=!0,Jp);case"textInput":return e=n.data,e===Jp&&$p?null:e;default:return null}}function lS(e,n){if(Br)return e==="compositionend"||!Pu&&tm(e,n)?(e=qp(),hl=Du=_a=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qp&&n.locale!=="ko"?null:n.data;default:return null}}var cS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!cS[e.type]:n==="textarea"}function im(e,n,a,o){zr?Ir?Ir.push(o):Ir=[o]:zr=o,n=rc(n,"onChange"),0<n.length&&(a=new ml("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var $s=null,to=null;function uS(e){F0(e,0)}function _l(e){var n=lt(e);if(Un(n))return e}function am(e,n){if(e==="change")return n}var rm=!1;if(qi){var zu;if(qi){var Iu="oninput"in document;if(!Iu){var sm=document.createElement("div");sm.setAttribute("oninput","return;"),Iu=typeof sm.oninput=="function"}zu=Iu}else zu=!1;rm=zu&&(!document.documentMode||9<document.documentMode)}function om(){$s&&($s.detachEvent("onpropertychange",lm),to=$s=null)}function lm(e){if(e.propertyName==="value"&&_l(to)){var n=[];im(n,to,e,Ru(e)),Wp(uS,n)}}function fS(e,n,a){e==="focusin"?(om(),$s=n,to=a,$s.attachEvent("onpropertychange",lm)):e==="focusout"&&om()}function hS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(to)}function dS(e,n){if(e==="click")return _l(n)}function pS(e,n){if(e==="input"||e==="change")return _l(n)}function mS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qn=typeof Object.is=="function"?Object.is:mS;function eo(e,n){if(Qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ie.call(n,u)||!Qn(e[u],n[u]))return!1}return!0}function cm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function um(e,n){var a=cm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=cm(a)}}function fm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?fm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function hm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=xi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=xi(e.document)}return n}function Bu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var gS=qi&&"documentMode"in document&&11>=document.documentMode,Fr=null,Fu=null,no=null,Hu=!1;function dm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hu||Fr==null||Fr!==xi(o)||(o=Fr,"selectionStart"in o&&Bu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),no&&eo(no,o)||(no=o,o=rc(Fu,"onSelect"),0<o.length&&(n=new ml("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Fr)))}function ir(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Hr={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionrun:ir("Transition","TransitionRun"),transitionstart:ir("Transition","TransitionStart"),transitioncancel:ir("Transition","TransitionCancel"),transitionend:ir("Transition","TransitionEnd")},Gu={},pm={};qi&&(pm=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function ar(e){if(Gu[e])return Gu[e];if(!Hr[e])return e;var n=Hr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in pm)return Gu[e]=n[a];return e}var mm=ar("animationend"),gm=ar("animationiteration"),_m=ar("animationstart"),_S=ar("transitionrun"),vS=ar("transitionstart"),yS=ar("transitioncancel"),vm=ar("transitionend"),ym=new Map,Vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vu.push("scrollEnd");function Mi(e,n){ym.set(e,n),kt(n,[e])}var vl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],Gr=0,ku=0;function yl(){for(var e=Gr,n=ku=Gr=0;n<e;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var h=ci[n];if(ci[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}h!==0&&Sm(a,u,h)}}function Sl(e,n,a,o){ci[Gr++]=e,ci[Gr++]=n,ci[Gr++]=a,ci[Gr++]=o,ku|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Xu(e,n,a,o){return Sl(e,n,a,o),xl(e)}function rr(e,n){return Sl(e,null,null,n),xl(e)}function Sm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Wt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function xl(e){if(50<To)throw To=0,th=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Vr={};function SS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,n,a,o){return new SS(e,n,a,o)}function Wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yi(e,n){var a=e.alternate;return a===null?(a=Jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function xm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ml(e,n,a,o,u,h){var x=0;if(o=e,typeof e=="function")Wu(e)&&(x=1);else if(typeof e=="string")x=Tx(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Jn(31,a,n,u),e.elementType=D,e.lanes=h,e;case b:return sr(a.children,u,h,n);case S:x=8,u|=24;break;case g:return e=Jn(12,a,n,u|2),e.elementType=g,e.lanes=h,e;case V:return e=Jn(13,a,n,u),e.elementType=V,e.lanes=h,e;case O:return e=Jn(19,a,n,u),e.elementType=O,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:x=10;break t;case T:x=9;break t;case R:x=11;break t;case N:x=14;break t;case z:x=16,o=null;break t}x=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Jn(x,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function sr(e,n,a,o){return e=Jn(7,e,o,n),e.lanes=a,e}function qu(e,n,a){return e=Jn(6,e,null,n),e.lanes=a,e}function Mm(e){var n=Jn(18,null,null,0);return n.stateNode=e,n}function Yu(e,n,a){return n=Jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Em=new WeakMap;function ui(e,n){if(typeof e=="object"&&e!==null){var a=Em.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Pt(n)},Em.set(e,n),n)}return{value:e,source:n,stack:Pt(n)}}var kr=[],Xr=0,El=null,io=0,fi=[],hi=0,va=null,Ni=1,Oi="";function ji(e,n){kr[Xr++]=io,kr[Xr++]=El,El=e,io=n}function bm(e,n,a){fi[hi++]=Ni,fi[hi++]=Oi,fi[hi++]=va,va=e;var o=Ni;e=Oi;var u=32-Wt(o)-1;o&=~(1<<u),a+=1;var h=32-Wt(n)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Ni=1<<32-Wt(n)+u|a<<u|o,Oi=h+e}else Ni=1<<h|a<<u|o,Oi=e}function ju(e){e.return!==null&&(ji(e,1),bm(e,1,0))}function Zu(e){for(;e===El;)El=kr[--Xr],kr[Xr]=null,io=kr[--Xr],kr[Xr]=null;for(;e===va;)va=fi[--hi],fi[hi]=null,Oi=fi[--hi],fi[hi]=null,Ni=fi[--hi],fi[hi]=null}function Tm(e,n){fi[hi++]=Ni,fi[hi++]=Oi,fi[hi++]=va,Ni=n.id,Oi=n.overflow,va=e}var An=null,Qe=null,we=!1,ya=null,di=!1,Ku=Error(r(519));function Sa(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(ui(n,e)),Ku}function Am(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[an]=e,n[bn]=o,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<Ro.length;a++)Me(Ro[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),In(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),Pr(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||k0(n.textContent,a)?(o.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),o.onScroll!=null&&Me("scroll",n),o.onScrollEnd!=null&&Me("scrollend",n),o.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Sa(e,!0)}function Rm(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:An=An.return}}function Wr(e){if(e!==An)return!1;if(!we)return Rm(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||mh(e.type,e.memoizedProps)),a=!a),a&&Qe&&Sa(e),Rm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Qe=J0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Qe=J0(e)}else n===27?(n=Qe,Oa(e.type)?(e=Sh,Sh=null,Qe=e):Qe=n):Qe=An?mi(e.stateNode.nextSibling):null;return!0}function or(){Qe=An=null,we=!1}function Qu(){var e=ya;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),ya=null),e}function ao(e){ya===null?ya=[e]:ya.push(e)}var Ju=P(null),lr=null,Zi=null;function xa(e,n,a){xt(Ju,n._currentValue),n._currentValue=a}function Ki(e){e._currentValue=Ju.current,nt(Ju)}function $u(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function tf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var U=h;h=u;for(var k=0;k<n.length;k++)if(U.context===n[k]){h.lanes|=a,U=h.alternate,U!==null&&(U.lanes|=a),$u(h.return,a,e),o||(x=null);break t}h=U.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),$u(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function qr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var U=u.type;Qn(u.pendingProps.value,x.value)||(e!==null?e.push(U):e=[U])}}else if(u===gt.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}u=u.return}e!==null&&tf(n,e,a,o),n.flags|=262144}function bl(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cr(e){lr=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return wm(lr,e)}function Tl(e,n){return lr===null&&cr(e),wm(e,n)}function wm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Zi===null){if(e===null)throw Error(r(308));Zi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Zi=Zi.next=n;return a}var xS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},MS=s.unstable_scheduleCallback,ES=s.unstable_NormalPriority,fn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ef(){return{controller:new xS,data:new Map,refCount:0}}function ro(e){e.refCount--,e.refCount===0&&MS(ES,function(){e.controller.abort()})}var so=null,nf=0,Yr=0,jr=null;function bS(e,n){if(so===null){var a=so=[];nf=0,Yr=sh(),jr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return nf++,n.then(Cm,Cm),n}function Cm(){if(--nf===0&&so!==null){jr!==null&&(jr.status="fulfilled");var e=so;so=null,Yr=0,jr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function TS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Dm=B.S;B.S=function(e,n){d0=A(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&bS(e,n),Dm!==null&&Dm(e,n)};var ur=P(null);function af(){var e=ur.current;return e!==null?e:Ye.pooledCache}function Al(e,n){n===null?xt(ur,ur.current):xt(ur,n.pool)}function Um(){var e=af();return e===null?null:{parent:fn._currentValue,pool:e}}var Zr=Error(r(460)),rf=Error(r(474)),Rl=Error(r(542)),wl={then:function(){}};function Lm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Nm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pm(e),e;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pm(e),e}throw hr=n,Zr}}function fr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hr=a,Zr):a}}var hr=null;function Om(){if(hr===null)throw Error(r(459));var e=hr;return hr=null,e}function Pm(e){if(e===Zr||e===Rl)throw Error(r(483))}var Kr=null,oo=0;function Cl(e){var n=oo;return oo+=1,Kr===null&&(Kr=[]),Nm(Kr,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Dl(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function zm(e){function n(tt,X){if(e){var it=tt.deletions;it===null?(tt.deletions=[X],tt.flags|=16):it.push(X)}}function a(tt,X){if(!e)return null;for(;X!==null;)n(tt,X),X=X.sibling;return null}function o(tt){for(var X=new Map;tt!==null;)tt.key!==null?X.set(tt.key,tt):X.set(tt.index,tt),tt=tt.sibling;return X}function u(tt,X){return tt=Yi(tt,X),tt.index=0,tt.sibling=null,tt}function h(tt,X,it){return tt.index=it,e?(it=tt.alternate,it!==null?(it=it.index,it<X?(tt.flags|=67108866,X):it):(tt.flags|=67108866,X)):(tt.flags|=1048576,X)}function x(tt){return e&&tt.alternate===null&&(tt.flags|=67108866),tt}function U(tt,X,it,pt){return X===null||X.tag!==6?(X=qu(it,tt.mode,pt),X.return=tt,X):(X=u(X,it),X.return=tt,X)}function k(tt,X,it,pt){var ee=it.type;return ee===b?dt(tt,X,it.props.children,pt,it.key):X!==null&&(X.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===z&&fr(ee)===X.type)?(X=u(X,it.props),lo(X,it),X.return=tt,X):(X=Ml(it.type,it.key,it.props,null,tt.mode,pt),lo(X,it),X.return=tt,X)}function at(tt,X,it,pt){return X===null||X.tag!==4||X.stateNode.containerInfo!==it.containerInfo||X.stateNode.implementation!==it.implementation?(X=Yu(it,tt.mode,pt),X.return=tt,X):(X=u(X,it.children||[]),X.return=tt,X)}function dt(tt,X,it,pt,ee){return X===null||X.tag!==7?(X=sr(it,tt.mode,pt,ee),X.return=tt,X):(X=u(X,it),X.return=tt,X)}function yt(tt,X,it){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=qu(""+X,tt.mode,it),X.return=tt,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return it=Ml(X.type,X.key,X.props,null,tt.mode,it),lo(it,X),it.return=tt,it;case E:return X=Yu(X,tt.mode,it),X.return=tt,X;case z:return X=fr(X),yt(tt,X,it)}if(st(X)||$(X))return X=sr(X,tt.mode,it,null),X.return=tt,X;if(typeof X.then=="function")return yt(tt,Cl(X),it);if(X.$$typeof===C)return yt(tt,Tl(tt,X),it);Dl(tt,X)}return null}function ot(tt,X,it,pt){var ee=X!==null?X.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return ee!==null?null:U(tt,X,""+it,pt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case M:return it.key===ee?k(tt,X,it,pt):null;case E:return it.key===ee?at(tt,X,it,pt):null;case z:return it=fr(it),ot(tt,X,it,pt)}if(st(it)||$(it))return ee!==null?null:dt(tt,X,it,pt,null);if(typeof it.then=="function")return ot(tt,X,Cl(it),pt);if(it.$$typeof===C)return ot(tt,X,Tl(tt,it),pt);Dl(tt,it)}return null}function ut(tt,X,it,pt,ee){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return tt=tt.get(it)||null,U(X,tt,""+pt,ee);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return tt=tt.get(pt.key===null?it:pt.key)||null,k(X,tt,pt,ee);case E:return tt=tt.get(pt.key===null?it:pt.key)||null,at(X,tt,pt,ee);case z:return pt=fr(pt),ut(tt,X,it,pt,ee)}if(st(pt)||$(pt))return tt=tt.get(it)||null,dt(X,tt,pt,ee,null);if(typeof pt.then=="function")return ut(tt,X,it,Cl(pt),ee);if(pt.$$typeof===C)return ut(tt,X,it,Tl(X,pt),ee);Dl(X,pt)}return null}function Yt(tt,X,it,pt){for(var ee=null,Le=null,Qt=X,me=X=0,Te=null;Qt!==null&&me<it.length;me++){Qt.index>me?(Te=Qt,Qt=null):Te=Qt.sibling;var Ne=ot(tt,Qt,it[me],pt);if(Ne===null){Qt===null&&(Qt=Te);break}e&&Qt&&Ne.alternate===null&&n(tt,Qt),X=h(Ne,X,me),Le===null?ee=Ne:Le.sibling=Ne,Le=Ne,Qt=Te}if(me===it.length)return a(tt,Qt),we&&ji(tt,me),ee;if(Qt===null){for(;me<it.length;me++)Qt=yt(tt,it[me],pt),Qt!==null&&(X=h(Qt,X,me),Le===null?ee=Qt:Le.sibling=Qt,Le=Qt);return we&&ji(tt,me),ee}for(Qt=o(Qt);me<it.length;me++)Te=ut(Qt,tt,me,it[me],pt),Te!==null&&(e&&Te.alternate!==null&&Qt.delete(Te.key===null?me:Te.key),X=h(Te,X,me),Le===null?ee=Te:Le.sibling=Te,Le=Te);return e&&Qt.forEach(function(Fa){return n(tt,Fa)}),we&&ji(tt,me),ee}function ae(tt,X,it,pt){if(it==null)throw Error(r(151));for(var ee=null,Le=null,Qt=X,me=X=0,Te=null,Ne=it.next();Qt!==null&&!Ne.done;me++,Ne=it.next()){Qt.index>me?(Te=Qt,Qt=null):Te=Qt.sibling;var Fa=ot(tt,Qt,Ne.value,pt);if(Fa===null){Qt===null&&(Qt=Te);break}e&&Qt&&Fa.alternate===null&&n(tt,Qt),X=h(Fa,X,me),Le===null?ee=Fa:Le.sibling=Fa,Le=Fa,Qt=Te}if(Ne.done)return a(tt,Qt),we&&ji(tt,me),ee;if(Qt===null){for(;!Ne.done;me++,Ne=it.next())Ne=yt(tt,Ne.value,pt),Ne!==null&&(X=h(Ne,X,me),Le===null?ee=Ne:Le.sibling=Ne,Le=Ne);return we&&ji(tt,me),ee}for(Qt=o(Qt);!Ne.done;me++,Ne=it.next())Ne=ut(Qt,tt,me,Ne.value,pt),Ne!==null&&(e&&Ne.alternate!==null&&Qt.delete(Ne.key===null?me:Ne.key),X=h(Ne,X,me),Le===null?ee=Ne:Le.sibling=Ne,Le=Ne);return e&&Qt.forEach(function(zx){return n(tt,zx)}),we&&ji(tt,me),ee}function Ve(tt,X,it,pt){if(typeof it=="object"&&it!==null&&it.type===b&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case M:t:{for(var ee=it.key;X!==null;){if(X.key===ee){if(ee=it.type,ee===b){if(X.tag===7){a(tt,X.sibling),pt=u(X,it.props.children),pt.return=tt,tt=pt;break t}}else if(X.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===z&&fr(ee)===X.type){a(tt,X.sibling),pt=u(X,it.props),lo(pt,it),pt.return=tt,tt=pt;break t}a(tt,X);break}else n(tt,X);X=X.sibling}it.type===b?(pt=sr(it.props.children,tt.mode,pt,it.key),pt.return=tt,tt=pt):(pt=Ml(it.type,it.key,it.props,null,tt.mode,pt),lo(pt,it),pt.return=tt,tt=pt)}return x(tt);case E:t:{for(ee=it.key;X!==null;){if(X.key===ee)if(X.tag===4&&X.stateNode.containerInfo===it.containerInfo&&X.stateNode.implementation===it.implementation){a(tt,X.sibling),pt=u(X,it.children||[]),pt.return=tt,tt=pt;break t}else{a(tt,X);break}else n(tt,X);X=X.sibling}pt=Yu(it,tt.mode,pt),pt.return=tt,tt=pt}return x(tt);case z:return it=fr(it),Ve(tt,X,it,pt)}if(st(it))return Yt(tt,X,it,pt);if($(it)){if(ee=$(it),typeof ee!="function")throw Error(r(150));return it=ee.call(it),ae(tt,X,it,pt)}if(typeof it.then=="function")return Ve(tt,X,Cl(it),pt);if(it.$$typeof===C)return Ve(tt,X,Tl(tt,it),pt);Dl(tt,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,X!==null&&X.tag===6?(a(tt,X.sibling),pt=u(X,it),pt.return=tt,tt=pt):(a(tt,X),pt=qu(it,tt.mode,pt),pt.return=tt,tt=pt),x(tt)):a(tt,X)}return function(tt,X,it,pt){try{oo=0;var ee=Ve(tt,X,it,pt);return Kr=null,ee}catch(Qt){if(Qt===Zr||Qt===Rl)throw Qt;var Le=Jn(29,Qt,null,tt.mode);return Le.lanes=pt,Le.return=tt,Le}}}var dr=zm(!0),Im=zm(!1),Ma=!1;function sf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function of(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ba(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=xl(e),Sm(e,null,a),n}return Sl(e,o,n,a),xl(e)}function co(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xs(e,a)}}function lf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var cf=!1;function uo(){if(cf){var e=jr;if(e!==null)throw e}}function fo(e,n,a,o){cf=!1;var u=e.updateQueue;Ma=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,U=u.shared.pending;if(U!==null){u.shared.pending=null;var k=U,at=k.next;k.next=null,x===null?h=at:x.next=at,x=k;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,U=dt.lastBaseUpdate,U!==x&&(U===null?dt.firstBaseUpdate=at:U.next=at,dt.lastBaseUpdate=k))}if(h!==null){var yt=u.baseState;x=0,dt=at=k=null,U=h;do{var ot=U.lane&-536870913,ut=ot!==U.lane;if(ut?(be&ot)===ot:(o&ot)===ot){ot!==0&&ot===Yr&&(cf=!0),dt!==null&&(dt=dt.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});t:{var Yt=e,ae=U;ot=n;var Ve=a;switch(ae.tag){case 1:if(Yt=ae.payload,typeof Yt=="function"){yt=Yt.call(Ve,yt,ot);break t}yt=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=ae.payload,ot=typeof Yt=="function"?Yt.call(Ve,yt,ot):Yt,ot==null)break t;yt=_({},yt,ot);break t;case 2:Ma=!0}}ot=U.callback,ot!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[ot]:ut.push(ot))}else ut={lane:ot,tag:U.tag,payload:U.payload,callback:U.callback,next:null},dt===null?(at=dt=ut,k=yt):dt=dt.next=ut,x|=ot;if(U=U.next,U===null){if(U=u.shared.pending,U===null)break;ut=U,U=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);dt===null&&(k=yt),u.baseState=k,u.firstBaseUpdate=at,u.lastBaseUpdate=dt,h===null&&(u.shared.lanes=0),Ca|=x,e.lanes=x,e.memoizedState=yt}}function Bm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Fm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Bm(a[e],n)}var Qr=P(null),Ul=P(0);function Hm(e,n){e=ra,xt(Ul,e),xt(Qr,n),ra=e|n.baseLanes}function uf(){xt(Ul,ra),xt(Qr,Qr.current)}function ff(){ra=Ul.current,nt(Qr),nt(Ul)}var $n=P(null),pi=null;function Ta(e){var n=e.alternate;xt(cn,cn.current&1),xt($n,e),pi===null&&(n===null||Qr.current!==null||n.memoizedState!==null)&&(pi=e)}function hf(e){xt(cn,cn.current),xt($n,e),pi===null&&(pi=e)}function Gm(e){e.tag===22?(xt(cn,cn.current),xt($n,e),pi===null&&(pi=e)):Aa()}function Aa(){xt(cn,cn.current),xt($n,$n.current)}function ti(e){nt($n),pi===e&&(pi=null),nt(cn)}var cn=P(0);function Ll(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||vh(a)||yh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=0,pe=null,He=null,hn=null,Nl=!1,Jr=!1,pr=!1,Ol=0,ho=0,$r=null,AS=0;function sn(){throw Error(r(321))}function df(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Qn(e[a],n[a]))return!1;return!0}function pf(e,n,a,o,u,h){return Qi=h,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?bg:Cf,pr=!1,h=a(o,u),pr=!1,Jr&&(h=km(n,a,o,u)),Vm(e),h}function Vm(e){B.H=go;var n=He!==null&&He.next!==null;if(Qi=0,hn=He=pe=null,Nl=!1,ho=0,$r=null,n)throw Error(r(300));e===null||dn||(e=e.dependencies,e!==null&&bl(e)&&(dn=!0))}function km(e,n,a,o){pe=e;var u=0;do{if(Jr&&($r=null),ho=0,Jr=!1,25<=u)throw Error(r(301));if(u+=1,hn=He=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=Tg,h=n(a,o)}while(Jr);return h}function RS(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?po(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(pe.flags|=1024),n}function mf(){var e=Ol!==0;return Ol=0,e}function gf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function _f(e){if(Nl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Nl=!1}Qi=0,hn=He=pe=null,Jr=!1,ho=Ol=0,$r=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?pe.memoizedState=hn=e:hn=hn.next=e,hn}function un(){if(He===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=hn===null?pe.memoizedState:hn.next;if(n!==null)hn=n,He=e;else{if(e===null)throw pe.alternate===null?Error(r(467)):Error(r(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},hn===null?pe.memoizedState=hn=e:hn=hn.next=e}return hn}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(e){var n=ho;return ho+=1,$r===null&&($r=[]),e=Nm($r,e,n),n=pe,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?bg:Cf),e}function zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return po(e);if(e.$$typeof===C)return Rn(e)}throw Error(r(438,String(e)))}function vf(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pl(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function Ji(e,n){return typeof n=="function"?n(e):n}function Il(e){var n=un();return yf(n,He,e)}function yf(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var U=x=null,k=null,at=n,dt=!1;do{var yt=at.lane&-536870913;if(yt!==at.lane?(be&yt)===yt:(Qi&yt)===yt){var ot=at.revertLane;if(ot===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),yt===Yr&&(dt=!0);else if((Qi&ot)===ot){at=at.next,ot===Yr&&(dt=!0);continue}else yt={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},k===null?(U=k=yt,x=h):k=k.next=yt,pe.lanes|=ot,Ca|=ot;yt=at.action,pr&&a(h,yt),h=at.hasEagerState?at.eagerState:a(h,yt)}else ot={lane:yt,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},k===null?(U=k=ot,x=h):k=k.next=ot,pe.lanes|=yt,Ca|=yt;at=at.next}while(at!==null&&at!==n);if(k===null?x=h:k.next=U,!Qn(h,e.memoizedState)&&(dn=!0,dt&&(a=jr,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=k,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Sf(e){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);Qn(h,n.memoizedState)||(dn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Xm(e,n,a){var o=pe,u=un(),h=we;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Qn((He||u).memoizedState,a);if(x&&(u.memoizedState=a,dn=!0),u=u.queue,Ef(Ym.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,ts(9,{destroy:void 0},qm.bind(null,o,u,a,n),null),Ye===null)throw Error(r(349));h||(Qi&127)!==0||Wm(o,n,a)}return a}function Wm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Pl(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function qm(e,n,a,o){n.value=a,n.getSnapshot=o,jm(n)&&Zm(e)}function Ym(e,n,a){return a(function(){jm(n)&&Zm(e)})}function jm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Qn(e,a)}catch{return!0}}function Zm(e){var n=rr(e,2);n!==null&&Zn(n,e,2)}function xf(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),pr){$t(!0);try{a()}finally{$t(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},n}function Km(e,n,a,o){return e.baseState=a,yf(e,He,typeof o=="function"?o:Ji)}function wS(e,n,a,o,u){if(Hl(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};B.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Qm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Qm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=B.T,x={};B.T=x;try{var U=a(u,o),k=B.S;k!==null&&k(x,U),Jm(e,n,U)}catch(at){Mf(e,n,at)}finally{h!==null&&x.types!==null&&(h.types=x.types),B.T=h}}else try{h=a(u,o),Jm(e,n,h)}catch(at){Mf(e,n,at)}}function Jm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){$m(e,n,o)},function(o){return Mf(e,n,o)}):$m(e,n,a)}function $m(e,n,a){n.status="fulfilled",n.value=a,tg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Qm(e,a)))}function Mf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,tg(n),n=n.next;while(n!==o)}e.action=null}function tg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function eg(e,n){return n}function ng(e,n){if(we){var a=Ye.formState;if(a!==null){t:{var o=pe;if(we){if(Qe){e:{for(var u=Qe,h=di;u.nodeType!==8;){if(!h){u=null;break e}if(u=mi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Qe=mi(u.nextSibling),o=u.data==="F!";break t}}Sa(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eg,lastRenderedState:n},a.queue=o,a=xg.bind(null,pe,o),o.dispatch=a,o=xf(!1),h=wf.bind(null,pe,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=wS.bind(null,pe,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function ig(e){var n=un();return ag(n,He,e)}function ag(e,n,a){if(n=yf(e,n,eg)[0],e=Il(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=po(n)}catch(x){throw x===Zr?Rl:x}else o=n;n=un();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,ts(9,{destroy:void 0},CS.bind(null,u,a),null)),[o,h,e]}function CS(e,n){e.action=n}function rg(e){var n=un(),a=He;if(a!==null)return ag(n,a,e);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ts(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Pl(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function sg(){return un().memoizedState}function Bl(e,n,a,o){var u=Bn();pe.flags|=e,u.memoizedState=ts(1|n,{destroy:void 0},a,o===void 0?null:o)}function Fl(e,n,a,o){var u=un();o=o===void 0?null:o;var h=u.memoizedState.inst;He!==null&&o!==null&&df(o,He.memoizedState.deps)?u.memoizedState=ts(n,h,a,o):(pe.flags|=e,u.memoizedState=ts(1|n,h,a,o))}function og(e,n){Bl(8390656,8,e,n)}function Ef(e,n){Fl(2048,8,e,n)}function DS(e){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=Pl(),pe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function lg(e){var n=un().memoizedState;return DS({ref:n,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function cg(e,n){return Fl(4,2,e,n)}function ug(e,n){return Fl(4,4,e,n)}function fg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function hg(e,n,a){a=a!=null?a.concat([e]):null,Fl(4,4,fg.bind(null,n,e),a)}function bf(){}function dg(e,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&df(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function pg(e,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&df(n,o[1]))return o[0];if(o=e(),pr){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[o,n],o}function Tf(e,n,a){return a===void 0||(Qi&1073741824)!==0&&(be&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=m0(),pe.lanes|=e,Ca|=e,a)}function mg(e,n,a,o){return Qn(a,n)?a:Qr.current!==null?(e=Tf(e,a,o),Qn(e,n)||(dn=!0),e):(Qi&42)===0||(Qi&1073741824)!==0&&(be&261930)===0?(dn=!0,e.memoizedState=a):(e=m0(),pe.lanes|=e,Ca|=e,n)}function gg(e,n,a,o,u){var h=W.p;W.p=h!==0&&8>h?h:8;var x=B.T,U={};B.T=U,wf(e,!1,n,a);try{var k=u(),at=B.S;if(at!==null&&at(U,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var dt=TS(k,o);mo(e,n,dt,ii(e))}else mo(e,n,o,ii(e))}catch(yt){mo(e,n,{then:function(){},status:"rejected",reason:yt},ii())}finally{W.p=h,x!==null&&U.types!==null&&(x.types=U.types),B.T=x}}function US(){}function Af(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=_g(e).queue;gg(e,u,n,K,a===null?US:function(){return vg(e),a(o)})}function _g(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function vg(e){var n=_g(e);n.next===null&&(n=e.alternate.memoizedState),mo(e,n.next.queue,{},ii())}function Rf(){return Rn(Lo)}function yg(){return un().memoizedState}function Sg(){return un().memoizedState}function LS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();e=Ea(a);var o=ba(n,e,a);o!==null&&(Zn(o,n,a),co(o,n,a)),n={cache:ef()},e.payload=n;return}n=n.return}}function NS(e,n,a){var o=ii();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hl(e)?Mg(n,a):(a=Xu(e,n,a,o),a!==null&&(Zn(a,e,o),Eg(a,n,o)))}function xg(e,n,a){var o=ii();mo(e,n,a,o)}function mo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hl(e))Mg(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,U=h(x,a);if(u.hasEagerState=!0,u.eagerState=U,Qn(U,x))return Sl(e,n,u,0),Ye===null&&yl(),!1}catch{}if(a=Xu(e,n,u,o),a!==null)return Zn(a,e,o),Eg(a,n,o),!0}return!1}function wf(e,n,a,o){if(o={lane:2,revertLane:sh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Hl(e)){if(n)throw Error(r(479))}else n=Xu(e,a,o,2),n!==null&&Zn(n,e,2)}function Hl(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function Mg(e,n){Jr=Nl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Eg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xs(e,a)}}var go={readContext:Rn,use:zl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};go.useEffectEvent=sn;var bg={readContext:Rn,use:zl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:og,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Bl(4194308,4,fg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Bl(4194308,4,e,n)},useInsertionEffect:function(e,n){Bl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(pr){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(pr){$t(!0);try{a(n)}finally{$t(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=NS.bind(null,pe,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=xf(e);var n=e.queue,a=xg.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:bf,useDeferredValue:function(e,n){var a=Bn();return Tf(a,e,n)},useTransition:function(){var e=xf(!1);return e=gg.bind(null,pe,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=pe,u=Bn();if(we){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ye===null)throw Error(r(349));(be&127)!==0||Wm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,og(Ym.bind(null,o,h,e),[e]),o.flags|=2048,ts(9,{destroy:void 0},qm.bind(null,o,h,a,n),null),a},useId:function(){var e=Bn(),n=Ye.identifierPrefix;if(we){var a=Oi,o=Ni;a=(o&~(1<<32-Wt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ol++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=AS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Rf,useFormState:ng,useActionState:ng,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=wf.bind(null,pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:vf,useCacheRefresh:function(){return Bn().memoizedState=LS.bind(null,pe)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Cf={readContext:Rn,use:zl,useCallback:dg,useContext:Rn,useEffect:Ef,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:ug,useMemo:pg,useReducer:Il,useRef:sg,useState:function(){return Il(Ji)},useDebugValue:bf,useDeferredValue:function(e,n){var a=un();return mg(a,He.memoizedState,e,n)},useTransition:function(){var e=Il(Ji)[0],n=un().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:Xm,useId:yg,useHostTransitionStatus:Rf,useFormState:ig,useActionState:ig,useOptimistic:function(e,n){var a=un();return Km(a,He,e,n)},useMemoCache:vf,useCacheRefresh:Sg};Cf.useEffectEvent=lg;var Tg={readContext:Rn,use:zl,useCallback:dg,useContext:Rn,useEffect:Ef,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:ug,useMemo:pg,useReducer:Sf,useRef:sg,useState:function(){return Sf(Ji)},useDebugValue:bf,useDeferredValue:function(e,n){var a=un();return He===null?Tf(a,e,n):mg(a,He.memoizedState,e,n)},useTransition:function(){var e=Sf(Ji)[0],n=un().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:Xm,useId:yg,useHostTransitionStatus:Rf,useFormState:rg,useActionState:rg,useOptimistic:function(e,n){var a=un();return He!==null?Km(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:vf,useCacheRefresh:Sg};Tg.useEffectEvent=lg;function Df(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Uf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ii(),u=Ea(o);u.payload=n,a!=null&&(u.callback=a),n=ba(e,u,o),n!==null&&(Zn(n,e,o),co(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ii(),u=Ea(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ba(e,u,o),n!==null&&(Zn(n,e,o),co(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ii(),o=Ea(a);o.tag=2,n!=null&&(o.callback=n),n=ba(e,o,a),n!==null&&(Zn(n,e,a),co(n,e,a))}};function Ag(e,n,a,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):n.prototype&&n.prototype.isPureReactComponent?!eo(a,o)||!eo(u,h):!0}function Rg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Uf.enqueueReplaceState(n,n.state,null)}function mr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function wg(e){vl(e)}function Cg(e){console.error(e)}function Dg(e){vl(e)}function Gl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ug(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Lf(e,n,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){Gl(e,n)},a}function Lg(e){return e=Ea(e),e.tag=3,e}function Ng(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Ug(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Ug(n,a,o),typeof u!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var U=o.stack;this.componentDidCatch(o.value,{componentStack:U!==null?U:""})})}function OS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&qr(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?$l():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),ih(e,o,u)),!1;case 22:return a.flags|=65536,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),ih(e,o,u)),!1}throw Error(r(435,a.tag))}return ih(e,o,u),$l(),!1}if(we)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ku&&(e=Error(r(422),{cause:o}),ao(ui(e,a)))):(o!==Ku&&(n=Error(r(423),{cause:o}),ao(ui(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ui(o,a),u=Lf(e.stateNode,o,u),lf(e,u),on!==4&&(on=2)),!1;var h=Error(r(520),{cause:o});if(h=ui(h,a),bo===null?bo=[h]:bo.push(h),on!==4&&(on=2),n===null)return!0;o=ui(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Lf(a.stateNode,o,e),lf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Da===null||!Da.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Lg(u),Ng(u,e,a,o),lf(a,u),!1}a=a.return}while(a!==null);return!1}var Nf=Error(r(461)),dn=!1;function wn(e,n,a,o){n.child=e===null?Im(n,null,a,o):dr(n,e.child,a,o)}function Og(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var x={};for(var U in o)U!=="ref"&&(x[U]=o[U])}else x=o;return cr(n),o=pf(e,n,a,x,h,u),U=mf(),e!==null&&!dn?(gf(e,n,u),$i(e,n,u)):(we&&U&&ju(n),n.flags|=1,wn(e,n,o,u),n.child)}function Pg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Wu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,zg(e,n,h,o,u)):(e=Ml(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Gf(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:eo,a(x,o)&&e.ref===n.ref)return $i(e,n,u)}return n.flags|=1,e=Yi(h,o),e.ref=n.ref,e.return=n,n.child=e}function zg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(eo(h,o)&&e.ref===n.ref)if(dn=!1,n.pendingProps=o=h,Gf(e,u))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,$i(e,n,u)}return Of(e,n,a,o,u)}function Ig(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return Bg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Al(n,h!==null?h.cachePool:null),h!==null?Hm(n,h):uf(),Gm(n);else return o=n.lanes=536870912,Bg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Al(n,h.cachePool),Hm(n,h),Aa(),n.memoizedState=null):(e!==null&&Al(n,null),uf(),Aa());return wn(e,n,u,a),n.child}function _o(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Bg(e,n,a,o,u){var h=af();return h=h===null?null:{parent:fn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Al(n,null),uf(),Gm(n),e!==null&&qr(e,n,o,!0),n.childLanes=u,null}function Vl(e,n){return n=Xl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Fg(e,n,a){return dr(n,e.child,null,a),e=Vl(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function PS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(we){if(o.mode==="hidden")return e=Vl(n,o),n.lanes=536870912,_o(null,e);if(hf(n),(e=Qe)?(e=Q0(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Mm(e),a.return=n,n.child=a,An=n,Qe=null)):e=null,e===null)throw Sa(n);return n.lanes=536870912,null}return Vl(n,o)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(hf(n),u)if(n.flags&256)n.flags&=-257,n=Fg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(dn||qr(e,n,a,!1),u=(a&e.childLanes)!==0,dn||u){if(o=Ye,o!==null&&(x=Li(o,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,rr(e,x),Zn(o,e,x),Nf;$l(),n=Fg(e,n,a)}else e=h.treeContext,Qe=mi(x.nextSibling),An=n,we=!0,ya=null,di=!1,e!==null&&Tm(n,e),n=Vl(n,o),n.flags|=4096;return n}return e=Yi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function kl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Of(e,n,a,o,u){return cr(n),a=pf(e,n,a,o,void 0,u),o=mf(),e!==null&&!dn?(gf(e,n,u),$i(e,n,u)):(we&&o&&ju(n),n.flags|=1,wn(e,n,a,u),n.child)}function Hg(e,n,a,o,u,h){return cr(n),n.updateQueue=null,a=km(n,o,a,u),Vm(e),o=mf(),e!==null&&!dn?(gf(e,n,h),$i(e,n,h)):(we&&o&&ju(n),n.flags|=1,wn(e,n,a,h),n.child)}function Gg(e,n,a,o,u){if(cr(n),n.stateNode===null){var h=Vr,x=a.contextType;typeof x=="object"&&x!==null&&(h=Rn(x)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Uf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},sf(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?Rn(x):Vr,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Df(n,a,x,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&Uf.enqueueReplaceState(h,h.state,null),fo(n,o,h,u),uo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var U=n.memoizedProps,k=mr(a,U);h.props=k;var at=h.context,dt=a.contextType;x=Vr,typeof dt=="object"&&dt!==null&&(x=Rn(dt));var yt=a.getDerivedStateFromProps;dt=typeof yt=="function"||typeof h.getSnapshotBeforeUpdate=="function",U=n.pendingProps!==U,dt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(U||at!==x)&&Rg(n,h,o,x),Ma=!1;var ot=n.memoizedState;h.state=ot,fo(n,o,h,u),uo(),at=n.memoizedState,U||ot!==at||Ma?(typeof yt=="function"&&(Df(n,a,yt,o),at=n.memoizedState),(k=Ma||Ag(n,a,k,o,ot,at,x))?(dt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=at),h.props=o,h.state=at,h.context=x,o=k):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,of(e,n),x=n.memoizedProps,dt=mr(a,x),h.props=dt,yt=n.pendingProps,ot=h.context,at=a.contextType,k=Vr,typeof at=="object"&&at!==null&&(k=Rn(at)),U=a.getDerivedStateFromProps,(at=typeof U=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==yt||ot!==k)&&Rg(n,h,o,k),Ma=!1,ot=n.memoizedState,h.state=ot,fo(n,o,h,u),uo();var ut=n.memoizedState;x!==yt||ot!==ut||Ma||e!==null&&e.dependencies!==null&&bl(e.dependencies)?(typeof U=="function"&&(Df(n,a,U,o),ut=n.memoizedState),(dt=Ma||Ag(n,a,dt,o,ot,ut,k)||e!==null&&e.dependencies!==null&&bl(e.dependencies))?(at||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ut,k),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ut,k)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),h.props=o,h.state=ut,h.context=k,o=dt):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,kl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=dr(n,e.child,null,u),n.child=dr(n,null,a,u)):wn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=$i(e,n,u),e}function Vg(e,n,a,o){return or(),n.flags|=256,wn(e,n,a,o),n.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zf(e){return{baseLanes:e,cachePool:Um()}}function If(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ni),e}function kg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?Ta(n):Aa(),(e=Qe)?(e=Q0(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Mm(e),a.return=n,n.child=a,An=n,Qe=null)):e=null,e===null)throw Sa(n);return yh(e)?n.lanes=32:n.lanes=536870912,null}var U=o.children;return o=o.fallback,u?(Aa(),u=n.mode,U=Xl({mode:"hidden",children:U},u),o=sr(o,u,a,null),U.return=n,o.return=n,U.sibling=o,n.child=U,o=n.child,o.memoizedState=zf(a),o.childLanes=If(e,x,a),n.memoizedState=Pf,_o(null,o)):(Ta(n),Bf(n,U))}var k=e.memoizedState;if(k!==null&&(U=k.dehydrated,U!==null)){if(h)n.flags&256?(Ta(n),n.flags&=-257,n=Ff(e,n,a)):n.memoizedState!==null?(Aa(),n.child=e.child,n.flags|=128,n=null):(Aa(),U=o.fallback,u=n.mode,o=Xl({mode:"visible",children:o.children},u),U=sr(U,u,a,null),U.flags|=2,o.return=n,U.return=n,o.sibling=U,n.child=o,dr(n,e.child,null,a),o=n.child,o.memoizedState=zf(a),o.childLanes=If(e,x,a),n.memoizedState=Pf,n=_o(null,o));else if(Ta(n),yh(U)){if(x=U.nextSibling&&U.nextSibling.dataset,x)var at=x.dgst;x=at,o=Error(r(419)),o.stack="",o.digest=x,ao({value:o,source:null,stack:null}),n=Ff(e,n,a)}else if(dn||qr(e,n,a,!1),x=(a&e.childLanes)!==0,dn||x){if(x=Ye,x!==null&&(o=Li(x,a),o!==0&&o!==k.retryLane))throw k.retryLane=o,rr(e,o),Zn(x,e,o),Nf;vh(U)||$l(),n=Ff(e,n,a)}else vh(U)?(n.flags|=192,n.child=e.child,n=null):(e=k.treeContext,Qe=mi(U.nextSibling),An=n,we=!0,ya=null,di=!1,e!==null&&Tm(n,e),n=Bf(n,o.children),n.flags|=4096);return n}return u?(Aa(),U=o.fallback,u=n.mode,k=e.child,at=k.sibling,o=Yi(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,at!==null?U=Yi(at,U):(U=sr(U,u,a,null),U.flags|=2),U.return=n,o.return=n,o.sibling=U,n.child=o,_o(null,o),o=n.child,U=e.child.memoizedState,U===null?U=zf(a):(u=U.cachePool,u!==null?(k=fn._currentValue,u=u.parent!==k?{parent:k,pool:k}:u):u=Um(),U={baseLanes:U.baseLanes|a,cachePool:u}),o.memoizedState=U,o.childLanes=If(e,x,a),n.memoizedState=Pf,_o(e.child,o)):(Ta(n),a=e.child,e=a.sibling,a=Yi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Bf(e,n){return n=Xl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Xl(e,n){return e=Jn(22,e,null,n),e.lanes=0,e}function Ff(e,n,a){return dr(n,e.child,null,a),e=Bf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Xg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),$u(e.return,n,a)}function Hf(e,n,a,o,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=h)}function Wg(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var x=cn.current,U=(x&2)!==0;if(U?(x=x&1|2,n.flags|=128):x&=1,xt(cn,x),wn(e,n,o,a),o=we?io:0,!U&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xg(e,a,n);else if(e.tag===19)Xg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ll(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Hf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ll(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Hf(n,!0,a,null,h,o);break;case"together":Hf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function $i(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ca|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(qr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Yi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Yi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Gf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&bl(e)))}function zS(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),xa(n,fn,e.memoizedState.cache),or();break;case 27:case 5:Vt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:xa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,hf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ta(n),n.flags|=128,null):(a&n.child.childLanes)!==0?kg(e,n,a):(Ta(n),e=$i(e,n,a),e!==null?e.sibling:null);Ta(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(qr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Wg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(cn,cn.current),o)break;return null;case 22:return n.lanes=0,Ig(e,n,a,n.pendingProps);case 24:xa(n,fn,e.memoizedState.cache)}return $i(e,n,a)}function qg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Gf(e,a)&&(n.flags&128)===0)return dn=!1,zS(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,we&&(n.flags&1048576)!==0&&bm(n,io,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=fr(n.elementType),n.type=e,typeof e=="function")Wu(e)?(o=mr(e,o),n.tag=1,n=Gg(null,n,e,o,a)):(n.tag=0,n=Of(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===R){n.tag=11,n=Og(null,n,e,o,a);break t}else if(u===N){n.tag=14,n=Pg(null,n,e,o,a);break t}}throw n=et(e)||e,Error(r(306,n,""))}}return n;case 0:return Of(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=mr(o,n.pendingProps),Gg(e,n,o,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,of(e,n),fo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,xa(n,fn,o),o!==h.cache&&tf(n,[fn],a,!0),uo(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Vg(e,n,o,a);break t}else if(o!==u){u=ui(Error(r(424)),n),ao(u),n=Vg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=mi(e.firstChild),An=n,we=!0,ya=null,di=!0,a=Im(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(or(),o===u){n=$i(e,n,a);break t}wn(e,n,o,a)}n=n.child}return n;case 26:return kl(e,n),e===null?(a=i_(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,o=sc(Rt.current).createElement(a),o[an]=n,o[bn]=e,Cn(o,a,e),Z(o),n.stateNode=o):n.memoizedState=i_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Vt(n),e===null&&we&&(o=n.stateNode=t_(n.type,n.pendingProps,Rt.current),An=n,di=!0,u=Qe,Oa(n.type)?(Sh=u,Qe=mi(o.firstChild)):Qe=u),wn(e,n,n.pendingProps.children,a),kl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=o=Qe)&&(o=hx(o,n.type,n.pendingProps,di),o!==null?(n.stateNode=o,An=n,Qe=mi(o.firstChild),di=!1,u=!0):u=!1),u||Sa(n)),Vt(n),u=n.type,h=n.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,mh(u,h)?o=null:x!==null&&mh(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=pf(e,n,RS,null,null,a),Lo._currentValue=u),kl(e,n),wn(e,n,o,a),n.child;case 6:return e===null&&we&&((e=a=Qe)&&(a=dx(a,n.pendingProps,di),a!==null?(n.stateNode=a,An=n,Qe=null,e=!0):e=!1),e||Sa(n)),null;case 13:return kg(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=dr(n,null,o,a):wn(e,n,o,a),n.child;case 11:return Og(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,xa(n,n.type,o.value),wn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,cr(n),u=Rn(u),o=o(u),n.flags|=1,wn(e,n,o,a),n.child;case 14:return Pg(e,n,n.type,n.pendingProps,a);case 15:return zg(e,n,n.type,n.pendingProps,a);case 19:return Wg(e,n,a);case 31:return PS(e,n,a);case 22:return Ig(e,n,a,n.pendingProps);case 24:return cr(n),o=Rn(fn),e===null?(u=af(),u===null&&(u=Ye,h=ef(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},sf(n),xa(n,fn,u)):((e.lanes&a)!==0&&(of(e,n),fo(n,null,null,a),uo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),xa(n,fn,o)):(o=h.cache,xa(n,fn,o),o!==u.cache&&tf(n,[fn],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ta(e){e.flags|=4}function Vf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(y0())e.flags|=8192;else throw hr=wl,rf}else e.flags&=-16777217}function Yg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!l_(n))if(y0())e.flags|=8192;else throw hr=wl,rf}function Wl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ze():536870912,e.lanes|=n,as|=n)}function vo(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function IS(e,n,a){var o=n.pendingProps;switch(Zu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ki(fn),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Wr(n)?ta(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qu())),Je(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(ta(n),h!==null?(Je(n),Yg(n,h)):(Je(n),Vf(n,u,null,o,a))):h?h!==e.memoizedState?(ta(n),Je(n),Yg(n,h)):(Je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ta(n),Je(n),Vf(n,u,e,o,a)),null;case 27:if(St(n),a=Rt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Je(n),null}e=Q.current,Wr(n)?Am(n):(e=t_(u,o,a),n.stateNode=e,ta(n))}return Je(n),null;case 5:if(St(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Je(n),null}if(h=Q.current,Wr(n))Am(n);else{var x=sc(Rt.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}h[an]=n,h[bn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;t:switch(Cn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ta(n)}}return Je(n),Vf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Rt.current,Wr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[an]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||k0(e.nodeValue,a)),e||Sa(n,!0)}else e=sc(e).createTextNode(o),e[an]=n,n.stateNode=e}return Je(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Wr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[an]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),e=!1}else a=Qu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Wr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[an]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=Qu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Wl(n,n.updateQueue),Je(n),null);case 4:return Xt(),e===null&&uh(n.stateNode.containerInfo),Je(n),null;case 10:return Ki(n.type),Je(n),null;case 19:if(nt(cn),o=n.memoizedState,o===null)return Je(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)vo(o,!1);else{if(on!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Ll(e),h!==null){for(n.flags|=128,vo(o,!1),e=h.updateQueue,n.updateQueue=e,Wl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)xm(a,e),a=a.sibling;return xt(cn,cn.current&1|2),we&&ji(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&A()>Kl&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ll(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Wl(n,e),vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!we)return Je(n),null}else 2*A()-o.renderingStartTime>Kl&&a!==536870912&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=A(),e.sibling=null,a=cn.current,xt(cn,u?a&1|2:a&1),we&&ji(n,o.treeForkCount),e):(Je(n),null);case 22:case 23:return ti(n),ff(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&Wl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&nt(ur),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(fn),Je(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function BS(e,n){switch(Zu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ki(fn),Xt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return St(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(r(340));or()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));or()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(cn),null;case 4:return Xt(),null;case 10:return Ki(n.type),null;case 22:case 23:return ti(n),ff(),e!==null&&nt(ur),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ki(fn),null;case 25:return null;default:return null}}function jg(e,n){switch(Zu(n),n.tag){case 3:Ki(fn),Xt();break;case 26:case 27:case 5:St(n);break;case 4:Xt();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:nt(cn);break;case 10:Ki(n.type);break;case 22:case 23:ti(n),ff(),e!==null&&nt(ur);break;case 24:Ki(fn)}}function yo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==u)}}catch(U){Be(n,n.return,U)}}function Ra(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var x=o.inst,U=x.destroy;if(U!==void 0){x.destroy=void 0,u=n;var k=a,at=U;try{at()}catch(dt){Be(u,k,dt)}}}o=o.next}while(o!==h)}}catch(dt){Be(n,n.return,dt)}}function Zg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Fm(n,a)}catch(o){Be(e,e.return,o)}}}function Kg(e,n,a){a.props=mr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function So(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function Pi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function Qg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function kf(e,n,a){try{var o=e.stateNode;sx(o,e.type,a,n),o[bn]=n}catch(u){Be(e,e.return,u)}}function Jg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function Xf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Jg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi));else if(o!==4&&(o===27&&Oa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Wf(e,n,a),e=e.sibling;e!==null;)Wf(e,n,a),e=e.sibling}function ql(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Oa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ql(e,n,a),e=e.sibling;e!==null;)ql(e,n,a),e=e.sibling}function $g(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[an]=e,n[bn]=a}catch(h){Be(e,e.return,h)}}var ea=!1,pn=!1,qf=!1,t0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function FS(e,n){if(e=e.containerInfo,dh=dc,e=hm(e),Bu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var x=0,U=-1,k=-1,at=0,dt=0,yt=e,ot=null;e:for(;;){for(var ut;yt!==a||u!==0&&yt.nodeType!==3||(U=x+u),yt!==h||o!==0&&yt.nodeType!==3||(k=x+o),yt.nodeType===3&&(x+=yt.nodeValue.length),(ut=yt.firstChild)!==null;)ot=yt,yt=ut;for(;;){if(yt===e)break e;if(ot===a&&++at===u&&(U=x),ot===h&&++dt===o&&(k=x),(ut=yt.nextSibling)!==null)break;yt=ot,ot=yt.parentNode}yt=ut}a=U===-1||k===-1?null:{start:U,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(ph={focusedElem:e,selectionRange:a},dc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Yt=mr(a.type,u);e=o.getSnapshotBeforeUpdate(Yt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Be(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)_h(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_h(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function e0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),o&4&&yo(5,a);break;case 1:if(ia(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Be(a,a.return,x)}else{var u=mr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Be(a,a.return,x)}}o&64&&Zg(a),o&512&&So(a,a.return);break;case 3:if(ia(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Fm(e,n)}catch(x){Be(a,a.return,x)}}break;case 27:n===null&&o&4&&$g(a);case 26:case 5:ia(e,a),n===null&&o&4&&Qg(a),o&512&&So(a,a.return);break;case 12:ia(e,a);break;case 31:ia(e,a),o&4&&a0(e,a);break;case 13:ia(e,a),o&4&&r0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=jS.bind(null,a),px(e,a))));break;case 22:if(o=a.memoizedState!==null||ea,!o){n=n!==null&&n.memoizedState!==null||pn,u=ea;var h=pn;ea=o,(pn=n)&&!h?aa(e,a,(a.subtreeFlags&8772)!==0):ia(e,a),ea=u,pn=h}break;case 30:break;default:ia(e,a)}}function n0(e){var n=e.alternate;n!==null&&(e.alternate=null,n0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ys(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,Wn=!1;function na(e,n,a){for(a=a.child;a!==null;)i0(e,n,a),a=a.sibling}function i0(e,n,a){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:pn||Pi(a,n),na(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||Pi(a,n);var o=tn,u=Wn;Oa(a.type)&&(tn=a.stateNode,Wn=!1),na(e,n,a),Co(a.stateNode),tn=o,Wn=u;break;case 5:pn||Pi(a,n);case 6:if(o=tn,u=Wn,tn=null,na(e,n,a),tn=o,Wn=u,tn!==null)if(Wn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(h){Be(a,n,h)}else try{tn.removeChild(a.stateNode)}catch(h){Be(a,n,h)}break;case 18:tn!==null&&(Wn?(e=tn,Z0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),hs(e)):Z0(tn,a.stateNode));break;case 4:o=tn,u=Wn,tn=a.stateNode.containerInfo,Wn=!0,na(e,n,a),tn=o,Wn=u;break;case 0:case 11:case 14:case 15:Ra(2,a,n),pn||Ra(4,a,n),na(e,n,a);break;case 1:pn||(Pi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Kg(a,n,o)),na(e,n,a);break;case 21:na(e,n,a);break;case 22:pn=(o=pn)||a.memoizedState!==null,na(e,n,a),pn=o;break;default:na(e,n,a)}}function a0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{hs(e)}catch(a){Be(n,n.return,a)}}}function r0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hs(e)}catch(a){Be(n,n.return,a)}}function HS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new t0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new t0),n;default:throw Error(r(435,e.tag))}}function Yl(e,n){var a=HS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=ZS.bind(null,e,o);o.then(u,u)}})}function qn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,x=n,U=x;t:for(;U!==null;){switch(U.tag){case 27:if(Oa(U.type)){tn=U.stateNode,Wn=!1;break t}break;case 5:tn=U.stateNode,Wn=!1;break t;case 3:case 4:tn=U.stateNode.containerInfo,Wn=!0;break t}U=U.return}if(tn===null)throw Error(r(160));i0(h,x,u),tn=null,Wn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)s0(n,e),n=n.sibling}var Ei=null;function s0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(n,e),Yn(e),o&4&&(Ra(3,e,e.return),yo(3,e),Ra(5,e,e.return));break;case 1:qn(n,e),Yn(e),o&512&&(pn||a===null||Pi(a,a.return)),o&64&&ea&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ei;if(qn(n,e),Yn(e),o&512&&(pn||a===null||Pi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[er]||h[an]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Cn(h,o,a),h[an]=e,Z(h),o=h;break t;case"link":var x=s_("link","href",u).get(o+(a.href||""));if(x){for(var U=0;U<x.length;U++)if(h=x[U],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(U,1);break e}}h=u.createElement(o),Cn(h,o,a),u.head.appendChild(h);break;case"meta":if(x=s_("meta","content",u).get(o+(a.content||""))){for(U=0;U<x.length;U++)if(h=x[U],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(U,1);break e}}h=u.createElement(o),Cn(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[an]=e,Z(h),o=h}e.stateNode=o}else o_(u,e.type,e.stateNode);else e.stateNode=r_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?o_(u,e.type,e.stateNode):r_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&kf(e,e.memoizedProps,a.memoizedProps)}break;case 27:qn(n,e),Yn(e),o&512&&(pn||a===null||Pi(a,a.return)),a!==null&&o&4&&kf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,e),Yn(e),o&512&&(pn||a===null||Pi(a,a.return)),e.flags&32){u=e.stateNode;try{kn(u,"")}catch(Yt){Be(e,e.return,Yt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,kf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(qf=!0);break;case 6:if(qn(n,e),Yn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Yt){Be(e,e.return,Yt)}}break;case 3:if(cc=null,u=Ei,Ei=oc(n.containerInfo),qn(n,e),Ei=u,Yn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{hs(n.containerInfo)}catch(Yt){Be(e,e.return,Yt)}qf&&(qf=!1,o0(e));break;case 4:o=Ei,Ei=oc(e.stateNode.containerInfo),qn(n,e),Yn(e),Ei=o;break;case 12:qn(n,e),Yn(e);break;case 31:qn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Yl(e,o)));break;case 13:qn(n,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zl=A()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Yl(e,o)));break;case 22:u=e.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,at=ea,dt=pn;if(ea=at||u,pn=dt||k,qn(n,e),pn=dt,ea=at,Yn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||k||ea||pn||gr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(h=k.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{U=k.stateNode;var yt=k.memoizedProps.style,ot=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;U.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Yt){Be(k,k.return,Yt)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(Yt){Be(k,k.return,Yt)}}}else if(n.tag===18){if(a===null){k=n;try{var ut=k.stateNode;u?K0(ut,!0):K0(k.stateNode,!1)}catch(Yt){Be(k,k.return,Yt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Yl(e,a))));break;case 19:qn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Yl(e,o)));break;case 30:break;case 21:break;default:qn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Jg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=Xf(e);ql(e,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(kn(x,""),a.flags&=-33);var U=Xf(e);ql(e,U,x);break;case 3:case 4:var k=a.stateNode.containerInfo,at=Xf(e);Wf(e,at,k);break;default:throw Error(r(161))}}catch(dt){Be(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function o0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;o0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ia(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)e0(e,n.alternate,n),n=n.sibling}function gr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ra(4,n,n.return),gr(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Kg(n,n.return,a),gr(n);break;case 27:Co(n.stateNode);case 26:case 5:Pi(n,n.return),gr(n);break;case 22:n.memoizedState===null&&gr(n);break;case 30:gr(n);break;default:gr(n)}e=e.sibling}}function aa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:aa(u,h,a),yo(4,h);break;case 1:if(aa(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(at){Be(o,o.return,at)}if(o=h,u=o.updateQueue,u!==null){var U=o.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)Bm(k[u],U)}catch(at){Be(o,o.return,at)}}a&&x&64&&Zg(h),So(h,h.return);break;case 27:$g(h);case 26:case 5:aa(u,h,a),a&&o===null&&x&4&&Qg(h),So(h,h.return);break;case 12:aa(u,h,a);break;case 31:aa(u,h,a),a&&x&4&&a0(u,h);break;case 13:aa(u,h,a),a&&x&4&&r0(u,h);break;case 22:h.memoizedState===null&&aa(u,h,a),So(h,h.return);break;case 30:break;default:aa(u,h,a)}n=n.sibling}}function Yf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ro(a))}function jf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e))}function bi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)l0(e,n,a,o),n=n.sibling}function l0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,o),u&2048&&yo(9,n);break;case 1:bi(e,n,a,o);break;case 3:bi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e)));break;case 12:if(u&2048){bi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,x=h.id,U=h.onPostCommit;typeof U=="function"&&U(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Be(n,n.return,k)}}else bi(e,n,a,o);break;case 31:bi(e,n,a,o);break;case 13:bi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?bi(e,n,a,o):xo(e,n):h._visibility&2?bi(e,n,a,o):(h._visibility|=2,es(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Yf(x,n);break;case 24:bi(e,n,a,o),u&2048&&jf(n.alternate,n);break;default:bi(e,n,a,o)}}function es(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,x=n,U=a,k=o,at=x.flags;switch(x.tag){case 0:case 11:case 15:es(h,x,U,k,u),yo(8,x);break;case 23:break;case 22:var dt=x.stateNode;x.memoizedState!==null?dt._visibility&2?es(h,x,U,k,u):xo(h,x):(dt._visibility|=2,es(h,x,U,k,u)),u&&at&2048&&Yf(x.alternate,x);break;case 24:es(h,x,U,k,u),u&&at&2048&&jf(x.alternate,x);break;default:es(h,x,U,k,u)}n=n.sibling}}function xo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:xo(a,o),u&2048&&Yf(o.alternate,o);break;case 24:xo(a,o),u&2048&&jf(o.alternate,o);break;default:xo(a,o)}n=n.sibling}}var Mo=8192;function ns(e,n,a){if(e.subtreeFlags&Mo)for(e=e.child;e!==null;)c0(e,n,a),e=e.sibling}function c0(e,n,a){switch(e.tag){case 26:ns(e,n,a),e.flags&Mo&&e.memoizedState!==null&&Ax(a,Ei,e.memoizedState,e.memoizedProps);break;case 5:ns(e,n,a);break;case 3:case 4:var o=Ei;Ei=oc(e.stateNode.containerInfo),ns(e,n,a),Ei=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Mo,Mo=16777216,ns(e,n,a),Mo=o):ns(e,n,a));break;default:ns(e,n,a)}}function u0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,h0(o,e)}u0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)f0(e),e=e.sibling}function f0(e){switch(e.tag){case 0:case 11:case 15:Eo(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:Eo(e);break;case 12:Eo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,jl(e)):Eo(e);break;default:Eo(e)}}function jl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,h0(o,e)}u0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ra(8,n,n.return),jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,jl(n));break;default:jl(n)}e=e.sibling}}function h0(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Ra(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var u=o.sibling,h=o.return;if(n0(o),o===a){xn=null;break t}if(u!==null){u.return=h,xn=u;break t}xn=h}}}var GS={getCacheForType:function(e){var n=Rn(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Rn(fn).controller.signal}},VS=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ye=null,xe=null,be=0,Ie=0,ei=null,wa=!1,is=!1,Zf=!1,ra=0,on=0,Ca=0,_r=0,Kf=0,ni=0,as=0,bo=null,jn=null,Qf=!1,Zl=0,d0=0,Kl=1/0,Ql=null,Da=null,gn=0,Ua=null,rs=null,sa=0,Jf=0,$f=null,p0=null,To=0,th=null;function ii(){return(Pe&2)!==0&&be!==0?be&-be:B.T!==null?sh():Ws()}function m0(){if(ni===0)if((be&536870912)===0||we){var e=At;At<<=1,(At&3932160)===0&&(At=262144),ni=e}else ni=536870912;return e=$n.current,e!==null&&(e.flags|=32),ni}function Zn(e,n,a){(e===Ye&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(ss(e,0),La(e,be,ni,!1)),En(e,a),((Pe&2)===0||e!==Ye)&&(e===Ye&&((Pe&2)===0&&(_r|=a),on===4&&La(e,be,ni,!1)),zi(e))}function g0(e,n,a){if((Pe&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Gt(e,n),u=o?WS(e,n):nh(e,n,!0),h=o;do{if(u===0){is&&!o&&La(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!kS(a)){u=nh(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var U=e;u=bo;var k=U.current.memoizedState.isDehydrated;if(k&&(ss(U,x).flags|=256),x=nh(U,x,!1),x!==2){if(Zf&&!k){U.errorRecoveryDisabledLanes|=h,_r|=h,u=4;break t}h=jn,jn=u,h!==null&&(jn===null?jn=h:jn.push.apply(jn,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){ss(e,0),La(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:La(o,n,ni,!wa);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Zl+300-A(),10<u)){if(La(o,n,ni,!wa),vt(o,0,!0)!==0)break t;sa=n,o.timeoutHandle=Y0(_0.bind(null,o,a,jn,Ql,Qf,n,ni,_r,as,wa,h,"Throttled",-0,0),u);break t}_0(o,a,jn,Ql,Qf,n,ni,_r,as,wa,h,null,-0,0)}}break}while(!0);zi(e)}function _0(e,n,a,o,u,h,x,U,k,at,dt,yt,ot,ut){if(e.timeoutHandle=-1,yt=n.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},c0(n,h,yt);var Yt=(h&62914560)===h?Zl-A():(h&4194048)===h?d0-A():0;if(Yt=Rx(yt,Yt),Yt!==null){sa=h,e.cancelPendingCommit=Yt(T0.bind(null,e,n,h,a,o,u,x,U,k,dt,yt,null,ot,ut)),La(e,h,x,!at);return}}T0(e,n,h,a,o,u,x,U,k)}function kS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Qn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function La(e,n,a,o){n&=~Kf,n&=~_r,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Wt(u),x=1<<h;o[h]=-1,u&=~x}a!==0&&ks(e,a,n)}function Jl(){return(Pe&6)===0?(Ao(0),!1):!0}function eh(){if(xe!==null){if(Ie===0)var e=xe.return;else e=xe,Zi=lr=null,_f(e),Kr=null,oo=0,e=xe;for(;e!==null;)jg(e.alternate,e),e=e.return;xe=null}}function ss(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,cx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),sa=0,eh(),Ye=e,xe=a=Yi(e.current,null),be=n,Ie=0,ei=null,wa=!1,is=Gt(e,n),Zf=!1,as=ni=Kf=_r=Ca=on=0,jn=bo=null,Qf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Wt(o),h=1<<u;n|=e[u],o&=~h}return ra=n,yl(),a}function v0(e,n){pe=null,B.H=go,n===Zr||n===Rl?(n=Om(),Ie=3):n===rf?(n=Om(),Ie=4):Ie=n===Nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,xe===null&&(on=1,Gl(e,ui(n,e.current)))}function y0(){var e=$n.current;return e===null?!0:(be&4194048)===be?pi===null:(be&62914560)===be||(be&536870912)!==0?e===pi:!1}function S0(){var e=B.H;return B.H=go,e===null?go:e}function x0(){var e=B.A;return B.A=GS,e}function $l(){on=4,wa||(be&4194048)!==be&&$n.current!==null||(is=!0),(Ca&134217727)===0&&(_r&134217727)===0||Ye===null||La(Ye,be,ni,!1)}function nh(e,n,a){var o=Pe;Pe|=2;var u=S0(),h=x0();(Ye!==e||be!==n)&&(Ql=null,ss(e,n)),n=!1;var x=on;t:do try{if(Ie!==0&&xe!==null){var U=xe,k=ei;switch(Ie){case 8:eh(),x=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var at=Ie;if(Ie=0,ei=null,os(e,U,k,at),a&&is){x=0;break t}break;default:at=Ie,Ie=0,ei=null,os(e,U,k,at)}}XS(),x=on;break}catch(dt){v0(e,dt)}while(!0);return n&&e.shellSuspendCounter++,Zi=lr=null,Pe=o,B.H=u,B.A=h,xe===null&&(Ye=null,be=0,yl()),x}function XS(){for(;xe!==null;)M0(xe)}function WS(e,n){var a=Pe;Pe|=2;var o=S0(),u=x0();Ye!==e||be!==n?(Ql=null,Kl=A()+500,ss(e,n)):is=Gt(e,n);t:do try{if(Ie!==0&&xe!==null){n=xe;var h=ei;e:switch(Ie){case 1:Ie=0,ei=null,os(e,n,h,1);break;case 2:case 9:if(Lm(h)){Ie=0,ei=null,E0(n);break}n=function(){Ie!==2&&Ie!==9||Ye!==e||(Ie=7),zi(e)},h.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:Lm(h)?(Ie=0,ei=null,E0(n)):(Ie=0,ei=null,os(e,n,h,7));break;case 5:var x=null;switch(xe.tag){case 26:x=xe.memoizedState;case 5:case 27:var U=xe;if(x?l_(x):U.stateNode.complete){Ie=0,ei=null;var k=U.sibling;if(k!==null)xe=k;else{var at=U.return;at!==null?(xe=at,tc(at)):xe=null}break e}}Ie=0,ei=null,os(e,n,h,5);break;case 6:Ie=0,ei=null,os(e,n,h,6);break;case 8:eh(),on=6;break t;default:throw Error(r(462))}}qS();break}catch(dt){v0(e,dt)}while(!0);return Zi=lr=null,B.H=o,B.A=u,Pe=a,xe!==null?0:(Ye=null,be=0,yl(),on)}function qS(){for(;xe!==null&&!Ze();)M0(xe)}function M0(e){var n=qg(e.alternate,e,ra);e.memoizedProps=e.pendingProps,n===null?tc(e):xe=n}function E0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Hg(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=Hg(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:_f(n);default:jg(a,n),n=xe=xm(n,ra),n=qg(a,n,ra)}e.memoizedProps=e.pendingProps,n===null?tc(e):xe=n}function os(e,n,a,o){Zi=lr=null,_f(n),Kr=null,oo=0;var u=n.return;try{if(OS(e,u,n,a,be)){on=1,Gl(e,ui(a,e.current)),xe=null;return}}catch(h){if(u!==null)throw xe=u,h;on=1,Gl(e,ui(a,e.current)),xe=null;return}n.flags&32768?(we||o===1?e=!0:is||(be&536870912)!==0?e=!1:(wa=e=!0,(o===2||o===9||o===3||o===6)&&(o=$n.current,o!==null&&o.tag===13&&(o.flags|=16384))),b0(n,e)):tc(n)}function tc(e){var n=e;do{if((n.flags&32768)!==0){b0(n,wa);return}e=n.return;var a=IS(n.alternate,n,ra);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=e}while(n!==null);on===0&&(on=5)}function b0(e,n){do{var a=BS(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);on=6,xe=null}function T0(e,n,a,o,u,h,x,U,k){e.cancelPendingCommit=null;do ec();while(gn!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=ku,yi(e,a,h,x,U,k),e===Ye&&(xe=Ye=null,be=0),rs=n,Ua=e,sa=a,Jf=h,$f=u,p0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,KS(ht,function(){return D0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=W.p,W.p=2,x=Pe,Pe|=4;try{FS(e,n,a)}finally{Pe=x,W.p=u,B.T=o}}gn=1,A0(),R0(),w0()}}function A0(){if(gn===1){gn=0;var e=Ua,n=rs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=W.p;W.p=2;var u=Pe;Pe|=4;try{s0(n,e);var h=ph,x=hm(e.containerInfo),U=h.focusedElem,k=h.selectionRange;if(x!==U&&U&&U.ownerDocument&&fm(U.ownerDocument.documentElement,U)){if(k!==null&&Bu(U)){var at=k.start,dt=k.end;if(dt===void 0&&(dt=at),"selectionStart"in U)U.selectionStart=at,U.selectionEnd=Math.min(dt,U.value.length);else{var yt=U.ownerDocument||document,ot=yt&&yt.defaultView||window;if(ot.getSelection){var ut=ot.getSelection(),Yt=U.textContent.length,ae=Math.min(k.start,Yt),Ve=k.end===void 0?ae:Math.min(k.end,Yt);!ut.extend&&ae>Ve&&(x=Ve,Ve=ae,ae=x);var tt=um(U,ae),X=um(U,Ve);if(tt&&X&&(ut.rangeCount!==1||ut.anchorNode!==tt.node||ut.anchorOffset!==tt.offset||ut.focusNode!==X.node||ut.focusOffset!==X.offset)){var it=yt.createRange();it.setStart(tt.node,tt.offset),ut.removeAllRanges(),ae>Ve?(ut.addRange(it),ut.extend(X.node,X.offset)):(it.setEnd(X.node,X.offset),ut.addRange(it))}}}}for(yt=[],ut=U;ut=ut.parentNode;)ut.nodeType===1&&yt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<yt.length;U++){var pt=yt[U];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}dc=!!dh,ph=dh=null}finally{Pe=u,W.p=o,B.T=a}}e.current=n,gn=2}}function R0(){if(gn===2){gn=0;var e=Ua,n=rs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=W.p;W.p=2;var u=Pe;Pe|=4;try{e0(e,n.alternate,n)}finally{Pe=u,W.p=o,B.T=a}}gn=3}}function w0(){if(gn===4||gn===3){gn=0,H();var e=Ua,n=rs,a=sa,o=p0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,rs=Ua=null,C0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Da=null),Or(a),n=n.stateNode,Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=W.p,W.p=2,B.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var U=o[x];h(U.value,{componentStack:U.stack})}}finally{B.T=n,W.p=u}}(sa&3)!==0&&ec(),zi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===th?To++:(To=0,th=e):To=0,Ao(0)}}function C0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ro(n)))}function ec(){return A0(),R0(),w0(),D0()}function D0(){if(gn!==5)return!1;var e=Ua,n=Jf;Jf=0;var a=Or(sa),o=B.T,u=W.p;try{W.p=32>a?32:a,B.T=null,a=$f,$f=null;var h=Ua,x=sa;if(gn=0,rs=Ua=null,sa=0,(Pe&6)!==0)throw Error(r(331));var U=Pe;if(Pe|=4,f0(h.current),l0(h,h.current,x,a),Pe=U,Ao(0,!1),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(Mt,h)}catch{}return!0}finally{W.p=u,B.T=o,C0(e,n)}}function U0(e,n,a){n=ui(a,n),n=Lf(e.stateNode,n,2),e=ba(e,n,2),e!==null&&(En(e,2),zi(e))}function Be(e,n,a){if(e.tag===3)U0(e,e,a);else for(;n!==null;){if(n.tag===3){U0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Da===null||!Da.has(o))){e=ui(a,e),a=Lg(2),o=ba(n,a,2),o!==null&&(Ng(a,o,n,e),En(o,2),zi(o));break}}n=n.return}}function ih(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new VS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Zf=!0,u.add(a),e=YS.bind(null,e,n,a),n.then(e,e))}function YS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(be&a)===a&&(on===4||on===3&&(be&62914560)===be&&300>A()-Zl?(Pe&2)===0&&ss(e,0):Kf|=a,as===be&&(as=0)),zi(e)}function L0(e,n){n===0&&(n=ze()),e=rr(e,n),e!==null&&(En(e,n),zi(e))}function jS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),L0(e,a)}function ZS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),L0(e,a)}function KS(e,n){return jt(e,n)}var nc=null,ls=null,ah=!1,ic=!1,rh=!1,Na=0;function zi(e){e!==ls&&e.next===null&&(ls===null?nc=ls=e:ls=ls.next=e),ic=!0,ah||(ah=!0,JS())}function Ao(e,n){if(!rh&&ic){rh=!0;do for(var a=!1,o=nc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var x=o.suspendedLanes,U=o.pingedLanes;h=(1<<31-Wt(42|e)+1)-1,h&=u&~(x&~U),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,z0(o,h))}else h=be,h=vt(o,o===Ye?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Gt(o,h)||(a=!0,z0(o,h));o=o.next}while(a);rh=!1}}function QS(){N0()}function N0(){ic=ah=!1;var e=0;Na!==0&&lx()&&(e=Na);for(var n=A(),a=null,o=nc;o!==null;){var u=o.next,h=O0(o,n);h===0?(o.next=null,a===null?nc=u:a.next=u,u===null&&(ls=a)):(a=o,(e!==0||(h&3)!==0)&&(ic=!0)),o=u}gn!==0&&gn!==5||Ao(e),Na!==0&&(Na=0)}function O0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Wt(h),U=1<<x,k=u[x];k===-1?((U&a)===0||(U&o)!==0)&&(u[x]=oe(U,n)):k<=n&&(e.expiredLanes|=U),h&=~U}if(n=Ye,a=be,a=vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&re(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Gt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&re(o),Or(a)){case 2:case 8:a=bt;break;case 32:a=ht;break;case 268435456:a=Ut;break;default:a=ht}return o=P0.bind(null,e),a=jt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&re(o),e.callbackPriority=2,e.callbackNode=null,2}function P0(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ec()&&e.callbackNode!==a)return null;var o=be;return o=vt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(g0(e,o,n),O0(e,A()),e.callbackNode!=null&&e.callbackNode===a?P0.bind(null,e):null)}function z0(e,n){if(ec())return null;g0(e,n,!0)}function JS(){ux(function(){(Pe&6)!==0?jt(mt,QS):N0()})}function sh(){if(Na===0){var e=Yr;e===0&&(e=Ot,Ot<<=1,(Ot&261888)===0&&(Ot=256)),Na=e}return Na}function I0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fl(""+e)}function B0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function $S(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=I0((u[bn]||null).action),x=o.submitter;x&&(n=(n=x[bn]||null)?I0(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var U=new ml("action","action",null,o,u);e.push({event:U,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Na!==0){var k=x?B0(u,x):new FormData(u);Af(a,{pending:!0,data:k,method:u.method,action:h},null,k)}}else typeof h=="function"&&(U.preventDefault(),k=x?B0(u,x):new FormData(u),Af(a,{pending:!0,data:k,method:u.method,action:h},h,k))},currentTarget:u}]})}}for(var oh=0;oh<Vu.length;oh++){var lh=Vu[oh],tx=lh.toLowerCase(),ex=lh[0].toUpperCase()+lh.slice(1);Mi(tx,"on"+ex)}Mi(mm,"onAnimationEnd"),Mi(gm,"onAnimationIteration"),Mi(_m,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(_S,"onTransitionRun"),Mi(vS,"onTransitionStart"),Mi(yS,"onTransitionCancel"),Mi(vm,"onTransitionEnd"),Ft("onMouseEnter",["mouseout","mouseover"]),Ft("onMouseLeave",["mouseout","mouseover"]),Ft("onPointerEnter",["pointerout","pointerover"]),Ft("onPointerLeave",["pointerout","pointerover"]),kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kt("onBeforeInput",["compositionend","keypress","textInput","paste"]),kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function F0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var x=o.length-1;0<=x;x--){var U=o[x],k=U.instance,at=U.currentTarget;if(U=U.listener,k!==h&&u.isPropagationStopped())break t;h=U,u.currentTarget=at;try{h(u)}catch(dt){vl(dt)}u.currentTarget=null,h=k}else for(x=0;x<o.length;x++){if(U=o[x],k=U.instance,at=U.currentTarget,U=U.listener,k!==h&&u.isPropagationStopped())break t;h=U,u.currentTarget=at;try{h(u)}catch(dt){vl(dt)}u.currentTarget=null,h=k}}}}function Me(e,n){var a=n[qs];a===void 0&&(a=n[qs]=new Set);var o=e+"__bubble";a.has(o)||(H0(n,e,2,!1),a.add(o))}function ch(e,n,a){var o=0;n&&(o|=4),H0(a,e,o,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function uh(e){if(!e[ac]){e[ac]=!0,Ct.forEach(function(a){a!=="selectionchange"&&(nx.has(a)||ch(a,!1,e),ch(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ac]||(n[ac]=!0,ch("selectionchange",!1,n))}}function H0(e,n,a,o){switch(m_(n)){case 2:var u=Dx;break;case 8:u=Ux;break;default:u=Th}a=u.bind(null,n,a,e),u=void 0,!Cu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function fh(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var U=o.stateNode.containerInfo;if(U===u)break;if(x===4)for(x=o.return;x!==null;){var k=x.tag;if((k===3||k===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;U!==null;){if(x=L(U),x===null)return;if(k=x.tag,k===5||k===6||k===26||k===27){o=h=x;continue t}U=U.parentNode}}o=o.return}Wp(function(){var at=h,dt=Ru(a),yt=[];t:{var ot=ym.get(e);if(ot!==void 0){var ut=ml,Yt=e;switch(e){case"keypress":if(dl(a)===0)break t;case"keydown":case"keyup":ut=Zy;break;case"focusin":Yt="focus",ut=Nu;break;case"focusout":Yt="blur",ut=Nu;break;case"beforeblur":case"afterblur":ut=Nu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Jy;break;case mm:case gm:case _m:ut=Hy;break;case vm:ut=tS;break;case"scroll":case"scrollend":ut=Py;break;case"wheel":ut=nS;break;case"copy":case"cut":case"paste":ut=Vy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Kp;break;case"toggle":case"beforetoggle":ut=aS}var ae=(n&4)!==0,Ve=!ae&&(e==="scroll"||e==="scrollend"),tt=ae?ot!==null?ot+"Capture":null:ot;ae=[];for(var X=at,it;X!==null;){var pt=X;if(it=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||it===null||tt===null||(pt=js(X,tt),pt!=null&&ae.push(wo(X,pt,it))),Ve)break;X=X.return}0<ae.length&&(ot=new ut(ot,Yt,null,a,dt),yt.push({event:ot,listeners:ae}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",ot&&a!==Au&&(Yt=a.relatedTarget||a.fromElement)&&(L(Yt)||Yt[Xi]))break t;if((ut||ot)&&(ot=dt.window===dt?dt:(ot=dt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ut?(Yt=a.relatedTarget||a.toElement,ut=at,Yt=Yt?L(Yt):null,Yt!==null&&(Ve=c(Yt),ae=Yt.tag,Yt!==Ve||ae!==5&&ae!==27&&ae!==6)&&(Yt=null)):(ut=null,Yt=at),ut!==Yt)){if(ae=jp,pt="onMouseLeave",tt="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Kp,pt="onPointerLeave",tt="onPointerEnter",X="pointer"),Ve=ut==null?ot:lt(ut),it=Yt==null?ot:lt(Yt),ot=new ae(pt,X+"leave",ut,a,dt),ot.target=Ve,ot.relatedTarget=it,pt=null,L(dt)===at&&(ae=new ae(tt,X+"enter",Yt,a,dt),ae.target=it,ae.relatedTarget=Ve,pt=ae),Ve=pt,ut&&Yt)e:{for(ae=ix,tt=ut,X=Yt,it=0,pt=tt;pt;pt=ae(pt))it++;pt=0;for(var ee=X;ee;ee=ae(ee))pt++;for(;0<it-pt;)tt=ae(tt),it--;for(;0<pt-it;)X=ae(X),pt--;for(;it--;){if(tt===X||X!==null&&tt===X.alternate){ae=tt;break e}tt=ae(tt),X=ae(X)}ae=null}else ae=null;ut!==null&&G0(yt,ot,ut,ae,!1),Yt!==null&&Ve!==null&&G0(yt,Ve,Yt,ae,!0)}}t:{if(ot=at?lt(at):window,ut=ot.nodeName&&ot.nodeName.toLowerCase(),ut==="select"||ut==="input"&&ot.type==="file")var Le=am;else if(nm(ot))if(rm)Le=pS;else{Le=hS;var Qt=fS}else ut=ot.nodeName,!ut||ut.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?at&&Tu(at.elementType)&&(Le=am):Le=dS;if(Le&&(Le=Le(e,at))){im(yt,Le,a,dt);break t}Qt&&Qt(e,ot,at),e==="focusout"&&at&&ot.type==="number"&&at.memoizedProps.value!=null&&Ln(ot,"number",ot.value)}switch(Qt=at?lt(at):window,e){case"focusin":(nm(Qt)||Qt.contentEditable==="true")&&(Fr=Qt,Fu=at,no=null);break;case"focusout":no=Fu=Fr=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,dm(yt,a,dt);break;case"selectionchange":if(gS)break;case"keydown":case"keyup":dm(yt,a,dt)}var me;if(Pu)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else Br?tm(e,a)&&(Te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(Qp&&a.locale!=="ko"&&(Br||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Br&&(me=qp()):(_a=dt,Du="value"in _a?_a.value:_a.textContent,Br=!0)),Qt=rc(at,Te),0<Qt.length&&(Te=new Zp(Te,e,null,a,dt),yt.push({event:Te,listeners:Qt}),me?Te.data=me:(me=em(a),me!==null&&(Te.data=me)))),(me=sS?oS(e,a):lS(e,a))&&(Te=rc(at,"onBeforeInput"),0<Te.length&&(Qt=new Zp("onBeforeInput","beforeinput",null,a,dt),yt.push({event:Qt,listeners:Te}),Qt.data=me)),$S(yt,e,at,a,dt)}F0(yt,n)})}function wo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function rc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=js(e,a),u!=null&&o.unshift(wo(e,u,h)),u=js(e,n),u!=null&&o.push(wo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function ix(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function G0(e,n,a,o,u){for(var h=n._reactName,x=[];a!==null&&a!==o;){var U=a,k=U.alternate,at=U.stateNode;if(U=U.tag,k!==null&&k===o)break;U!==5&&U!==26&&U!==27||at===null||(k=at,u?(at=js(a,h),at!=null&&x.unshift(wo(a,at,k))):u||(at=js(a,h),at!=null&&x.push(wo(a,at,k)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var ax=/\r\n?/g,rx=/\u0000|\uFFFD/g;function V0(e){return(typeof e=="string"?e:""+e).replace(ax,`
`).replace(rx,"")}function k0(e,n){return n=V0(n),V0(e)===n}function Ge(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||kn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&kn(e,""+o);break;case"className":qe(e,"class",o);break;case"tabIndex":qe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":qe(e,a,o);break;case"style":kp(e,o,h);break;case"data":if(n!=="object"){qe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=fl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ge(e,n,"name",u.name,u,null),Ge(e,n,"formEncType",u.formEncType,u,null),Ge(e,n,"formMethod",u.formMethod,u,null),Ge(e,n,"formTarget",u.formTarget,u,null)):(Ge(e,n,"encType",u.encType,u,null),Ge(e,n,"method",u.method,u,null),Ge(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=fl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Wi);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=fl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Ue(e,"popover",o);break;case"xlinkActuate":Re(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Re(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Re(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Re(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Re(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Re(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Re(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Re(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Re(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ue(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ny.get(a)||a,Ue(e,a,o))}}function hh(e,n,a,o,u,h){switch(a){case"style":kp(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?kn(e,o):(typeof o=="number"||typeof o=="bigint")&&kn(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[bn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ue(e,a,o)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,h,x,a,null)}}u&&Ge(e,n,"srcSet",a.srcSet,a,null),o&&Ge(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var U=h=x=u=null,k=null,at=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":x=dt;break;case"checked":k=dt;break;case"defaultChecked":at=dt;break;case"value":h=dt;break;case"defaultValue":U=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Ge(e,n,o,dt,a,null)}}In(e,h,U,k,at,x,u,!1);return;case"select":Me("invalid",e),o=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(U=a[u],U!=null))switch(u){case"value":h=U;break;case"defaultValue":x=U;break;case"multiple":o=U;default:Ge(e,n,u,U,a,null)}n=h,a=x,e.multiple=!!o,n!=null?rn(e,!!o,n,!1):a!=null&&rn(e,!!o,a,!0);return;case"textarea":Me("invalid",e),h=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(U=a[x],U!=null))switch(x){case"value":o=U;break;case"defaultValue":u=U;break;case"children":h=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(r(91));break;default:Ge(e,n,x,U,a,null)}Pr(e,o,u,h);return;case"option":for(k in a)a.hasOwnProperty(k)&&(o=a[k],o!=null)&&(k==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ge(e,n,k,o,a,null));return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<Ro.length;o++)Me(Ro[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(o=a[at],o!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,at,o,a,null)}return;default:if(Tu(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&hh(e,n,dt,o,a,void 0));return}}for(U in a)a.hasOwnProperty(U)&&(o=a[U],o!=null&&Ge(e,n,U,o,a,null))}function sx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,U=null,k=null,at=null,dt=null;for(ut in a){var yt=a[ut];if(a.hasOwnProperty(ut)&&yt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":k=yt;default:o.hasOwnProperty(ut)||Ge(e,n,ut,null,o,yt)}}for(var ot in o){var ut=o[ot];if(yt=a[ot],o.hasOwnProperty(ot)&&(ut!=null||yt!=null))switch(ot){case"type":h=ut;break;case"name":u=ut;break;case"checked":at=ut;break;case"defaultChecked":dt=ut;break;case"value":x=ut;break;case"defaultValue":U=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:ut!==yt&&Ge(e,n,ot,ut,o,yt)}}Fe(e,x,U,k,at,dt,h,u);return;case"select":ut=x=U=ot=null;for(h in a)if(k=a[h],a.hasOwnProperty(h)&&k!=null)switch(h){case"value":break;case"multiple":ut=k;default:o.hasOwnProperty(h)||Ge(e,n,h,null,o,k)}for(u in o)if(h=o[u],k=a[u],o.hasOwnProperty(u)&&(h!=null||k!=null))switch(u){case"value":ot=h;break;case"defaultValue":U=h;break;case"multiple":x=h;default:h!==k&&Ge(e,n,u,h,o,k)}n=U,a=x,o=ut,ot!=null?rn(e,!!a,ot,!1):!!o!=!!a&&(n!=null?rn(e,!!a,n,!0):rn(e,!!a,a?[]:"",!1));return;case"textarea":ut=ot=null;for(U in a)if(u=a[U],a.hasOwnProperty(U)&&u!=null&&!o.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:Ge(e,n,U,null,o,u)}for(x in o)if(u=o[x],h=a[x],o.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":ot=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Ge(e,n,x,u,o,h)}Tn(e,ot,ut);return;case"option":for(var Yt in a)ot=a[Yt],a.hasOwnProperty(Yt)&&ot!=null&&!o.hasOwnProperty(Yt)&&(Yt==="selected"?e.selected=!1:Ge(e,n,Yt,null,o,ot));for(k in o)ot=o[k],ut=a[k],o.hasOwnProperty(k)&&ot!==ut&&(ot!=null||ut!=null)&&(k==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":Ge(e,n,k,ot,o,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)ot=a[ae],a.hasOwnProperty(ae)&&ot!=null&&!o.hasOwnProperty(ae)&&Ge(e,n,ae,null,o,ot);for(at in o)if(ot=o[at],ut=a[at],o.hasOwnProperty(at)&&ot!==ut&&(ot!=null||ut!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:Ge(e,n,at,ot,o,ut)}return;default:if(Tu(n)){for(var Ve in a)ot=a[Ve],a.hasOwnProperty(Ve)&&ot!==void 0&&!o.hasOwnProperty(Ve)&&hh(e,n,Ve,void 0,o,ot);for(dt in o)ot=o[dt],ut=a[dt],!o.hasOwnProperty(dt)||ot===ut||ot===void 0&&ut===void 0||hh(e,n,dt,ot,o,ut);return}}for(var tt in a)ot=a[tt],a.hasOwnProperty(tt)&&ot!=null&&!o.hasOwnProperty(tt)&&Ge(e,n,tt,null,o,ot);for(yt in o)ot=o[yt],ut=a[yt],!o.hasOwnProperty(yt)||ot===ut||ot==null&&ut==null||Ge(e,n,yt,ot,o,ut)}function X0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ox(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,x=u.initiatorType,U=u.duration;if(h&&U&&X0(x)){for(x=0,U=u.responseEnd,o+=1;o<a.length;o++){var k=a[o],at=k.startTime;if(at>U)break;var dt=k.transferSize,yt=k.initiatorType;dt&&X0(yt)&&(k=k.responseEnd,x+=dt*(k<U?1:(U-at)/(k-at)))}if(--o,n+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var dh=null,ph=null;function sc(e){return e.nodeType===9?e:e.ownerDocument}function W0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function q0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function mh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gh=null;function lx(){var e=window.event;return e&&e.type==="popstate"?e===gh?!1:(gh=e,!0):(gh=null,!1)}var Y0=typeof setTimeout=="function"?setTimeout:void 0,cx=typeof clearTimeout=="function"?clearTimeout:void 0,j0=typeof Promise=="function"?Promise:void 0,ux=typeof queueMicrotask=="function"?queueMicrotask:typeof j0<"u"?function(e){return j0.resolve(null).then(e).catch(fx)}:Y0;function fx(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function Z0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),hs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Co(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Co(a);for(var h=a.firstChild;h;){var x=h.nextSibling,U=h.nodeName;h[er]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&Co(e.ownerDocument.body);a=u}while(a);hs(n)}function K0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function _h(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_h(a),Ys(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function hx(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[er])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function dx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function Q0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mi(e.nextSibling),e===null))return null;return e}function vh(e){return e.data==="$?"||e.data==="$~"}function yh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function px(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Sh=null;function J0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return mi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function $0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function t_(e,n,a){switch(n=sc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Co(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ys(e)}var gi=new Map,e_=new Set;function oc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=W.d;W.d={f:mx,r:gx,D:_x,C:vx,L:yx,m:Sx,X:Mx,S:xx,M:Ex};function mx(){var e=oa.f(),n=Jl();return e||n}function gx(e){var n=J(e);n!==null&&n.tag===5&&n.type==="form"?vg(n):oa.r(e)}var cs=typeof document>"u"?null:document;function n_(e,n,a){var o=cs;if(o&&typeof n=="string"&&n){var u=Sn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),e_.has(u)||(e_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",e),Z(n),o.head.appendChild(n)))}}function _x(e){oa.D(e),n_("dns-prefetch",e,null)}function vx(e,n){oa.C(e,n),n_("preconnect",e,n)}function yx(e,n,a){oa.L(e,n,a);var o=cs;if(o&&e&&n){var u='link[rel="preload"][as="'+Sn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Sn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Sn(a.imageSizes)+'"]')):u+='[href="'+Sn(e)+'"]';var h=u;switch(n){case"style":h=us(e);break;case"script":h=fs(e)}gi.has(h)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),gi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Do(h))||n==="script"&&o.querySelector(Uo(h))||(n=o.createElement("link"),Cn(n,"link",e),Z(n),o.head.appendChild(n)))}}function Sx(e,n){oa.m(e,n);var a=cs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Sn(o)+'"][href="'+Sn(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=fs(e)}if(!gi.has(h)&&(e=_({rel:"modulepreload",href:e},n),gi.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(h)))return}o=a.createElement("link"),Cn(o,"link",e),Z(o),a.head.appendChild(o)}}}function xx(e,n,a){oa.S(e,n,a);var o=cs;if(o&&e){var u=ct(o).hoistableStyles,h=us(e);n=n||"default";var x=u.get(h);if(!x){var U={loading:0,preload:null};if(x=o.querySelector(Do(h)))U.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=gi.get(h))&&xh(e,a);var k=x=o.createElement("link");Z(k),Cn(k,"link",e),k._p=new Promise(function(at,dt){k.onload=at,k.onerror=dt}),k.addEventListener("load",function(){U.loading|=1}),k.addEventListener("error",function(){U.loading|=2}),U.loading|=4,lc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:U},u.set(h,x)}}}function Mx(e,n){oa.X(e,n);var a=cs;if(a&&e){var o=ct(a).hoistableScripts,u=fs(e),h=o.get(u);h||(h=a.querySelector(Uo(u)),h||(e=_({src:e,async:!0},n),(n=gi.get(u))&&Mh(e,n),h=a.createElement("script"),Z(h),Cn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Ex(e,n){oa.M(e,n);var a=cs;if(a&&e){var o=ct(a).hoistableScripts,u=fs(e),h=o.get(u);h||(h=a.querySelector(Uo(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=gi.get(u))&&Mh(e,n),h=a.createElement("script"),Z(h),Cn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function i_(e,n,a,o){var u=(u=Rt.current)?oc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=ct(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=us(a.href);var h=ct(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(Do(e)))&&!h._p&&(x.instance=h,x.state.loading=5),gi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gi.set(e,a),h||bx(u,e,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(a),a=ct(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function us(e){return'href="'+Sn(e)+'"'}function Do(e){return'link[rel="stylesheet"]['+e+"]"}function a_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function bx(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),Z(n),e.head.appendChild(n))}function fs(e){return'[src="'+Sn(e)+'"]'}function Uo(e){return"script[async]"+e}function r_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Sn(a.href)+'"]');if(o)return n.instance=o,Z(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Z(o),Cn(o,"style",u),lc(o,a.precedence,e),n.instance=o;case"stylesheet":u=us(a.href);var h=e.querySelector(Do(u));if(h)return n.state.loading|=4,n.instance=h,Z(h),h;o=a_(a),(u=gi.get(u))&&xh(o,u),h=(e.ownerDocument||e).createElement("link"),Z(h);var x=h;return x._p=new Promise(function(U,k){x.onload=U,x.onerror=k}),Cn(h,"link",o),n.state.loading|=4,lc(h,a.precedence,e),n.instance=h;case"script":return h=fs(a.src),(u=e.querySelector(Uo(h)))?(n.instance=u,Z(u),u):(o=a,(u=gi.get(h))&&(o=_({},a),Mh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Z(u),Cn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,lc(o,a.precedence,e));return n.instance}function lc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,x=0;x<o.length;x++){var U=o[x];if(U.dataset.precedence===n)h=U;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function xh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Mh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var cc=null;function s_(e,n,a){if(cc===null){var o=new Map,u=cc=new Map;u.set(a,o)}else u=cc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[er]||h[an]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=e+x;var U=o.get(x);U?U.push(h):o.set(x,[h])}}return o}function o_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Tx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function l_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ax(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=us(o.href),h=n.querySelector(Do(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=uc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,Z(h);return}h=n.ownerDocument||n,o=a_(o),(u=gi.get(u))&&xh(o,u),h=h.createElement("link"),Z(h);var x=h;x._p=new Promise(function(U,k){x.onload=U,x.onerror=k}),Cn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=uc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Eh=0;function Rx(e,n){return e.stylesheets&&e.count===0&&hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Eh===0&&(Eh=62500*ox());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Eh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fc=null;function hc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fc=new Map,n.forEach(wx,e),fc=null,uc.call(e))}function wx(e,n){if(!(n.state.loading&4)){var a=fc.get(e);if(a)var o=a.get(null);else{a=new Map,fc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,u),a.set(x,u),this.count++,o=uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Lo={$$typeof:C,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function Cx(e,n,a,o,u,h,x,U,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function c_(e,n,a,o,u,h,x,U,k,at,dt,yt){return e=new Cx(e,n,a,x,k,at,dt,yt,U),n=1,h===!0&&(n|=24),h=Jn(3,null,null,n),e.current=h,h.stateNode=e,n=ef(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},sf(h),e}function u_(e){return e?(e=Vr,e):Vr}function f_(e,n,a,o,u,h){u=u_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ea(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=ba(e,o,n),a!==null&&(Zn(a,e,n),co(a,e,n))}function h_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function bh(e,n){h_(e,n),(e=e.alternate)&&h_(e,n)}function d_(e){if(e.tag===13||e.tag===31){var n=rr(e,67108864);n!==null&&Zn(n,e,67108864),bh(e,67108864)}}function p_(e){if(e.tag===13||e.tag===31){var n=ii();n=$a(n);var a=rr(e,n);a!==null&&Zn(a,e,n),bh(e,n)}}var dc=!0;function Dx(e,n,a,o){var u=B.T;B.T=null;var h=W.p;try{W.p=2,Th(e,n,a,o)}finally{W.p=h,B.T=u}}function Ux(e,n,a,o){var u=B.T;B.T=null;var h=W.p;try{W.p=8,Th(e,n,a,o)}finally{W.p=h,B.T=u}}function Th(e,n,a,o){if(dc){var u=Ah(o);if(u===null)fh(e,n,o,pc,a),g_(e,o);else if(Nx(u,e,n,a,o))o.stopPropagation();else if(g_(e,o),n&4&&-1<Lx.indexOf(e)){for(;u!==null;){var h=J(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=wt(h.pendingLanes);if(x!==0){var U=h;for(U.pendingLanes|=2,U.entangledLanes|=2;x;){var k=1<<31-Wt(x);U.entanglements[1]|=k,x&=~k}zi(h),(Pe&6)===0&&(Kl=A()+500,Ao(0))}}break;case 31:case 13:U=rr(h,2),U!==null&&Zn(U,h,2),Jl(),bh(h,2)}if(h=Ah(o),h===null&&fh(e,n,o,pc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else fh(e,n,o,null,a)}}function Ah(e){return e=Ru(e),Rh(e)}var pc=null;function Rh(e){if(pc=null,e=L(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return pc=e,null}function m_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rt()){case mt:return 2;case bt:return 8;case ht:case Zt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var wh=!1,Pa=null,za=null,Ia=null,No=new Map,Oo=new Map,Ba=[],Lx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function g_(e,n){switch(e){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=J(n),n!==null&&d_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Nx(e,n,a,o,u){switch(n){case"focusin":return Pa=Po(Pa,e,n,a,o,u),!0;case"dragenter":return za=Po(za,e,n,a,o,u),!0;case"mouseover":return Ia=Po(Ia,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return No.set(h,Po(No.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Oo.set(h,Po(Oo.get(h)||null,e,n,a,o,u)),!0}return!1}function __(e){var n=L(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,tr(e.priority,function(){p_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,tr(e.priority,function(){p_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Ah(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Au=o,a.target.dispatchEvent(o),Au=null}else return n=J(a),n!==null&&d_(n),e.blockedOn=a,!1;n.shift()}return!0}function v_(e,n,a){mc(e)&&a.delete(n)}function Ox(){wh=!1,Pa!==null&&mc(Pa)&&(Pa=null),za!==null&&mc(za)&&(za=null),Ia!==null&&mc(Ia)&&(Ia=null),No.forEach(v_),Oo.forEach(v_)}function gc(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Ox)))}var _c=null;function y_(e){_c!==e&&(_c=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){_c===e&&(_c=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Rh(o||a)===null)continue;break}var h=J(a);h!==null&&(e.splice(n,3),n-=3,Af(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function hs(e){function n(k){return gc(k,e)}Pa!==null&&gc(Pa,e),za!==null&&gc(za,e),Ia!==null&&gc(Ia,e),No.forEach(n),Oo.forEach(n);for(var a=0;a<Ba.length;a++){var o=Ba[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)__(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],x=u[bn]||null;if(typeof h=="function")x||y_(a);else if(x){var U=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[bn]||null)U=x.formAction;else if(Rh(u)!==null)continue}else U=x.action;typeof U=="function"?a[o+1]=U:(a.splice(o,3),o-=3),y_(a)}}}function S_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ch(e){this._internalRoot=e}vc.prototype.render=Ch.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ii();f_(a,o,e,n,null,null)},vc.prototype.unmount=Ch.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;f_(e.current,2,null,e,null,null),Jl(),n[Xi]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ws();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&__(e)}};var x_=t.version;if(x_!=="19.2.7")throw Error(r(527,x_,"19.2.7"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Px={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{Mt=yc.inject(Px),Lt=yc}catch{}}return zo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=wg,h=Cg,x=Dg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=c_(e,1,!1,null,null,a,o,null,u,h,x,S_),e[Xi]=n.current,uh(e),new Ch(n)},zo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",h=wg,x=Cg,U=Dg,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(U=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=c_(e,1,!0,n,a??null,o,u,k,h,x,U,S_),n.context=u_(null),a=n.current,o=ii(),o=$a(o),u=Ea(o),u.callback=null,ba(a,u,o),a=o,n.current.lanes=a,En(n,a),zi(n),e[Xi]=n.current,uh(e),new vc(n)},zo.version="19.2.7",zo}var C_;function Xx(){if(C_)return Uh.exports;C_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Uh.exports=kx(),Uh.exports}var Wx=Xx();const wr={name:"Alisa Pechorina",email:"disaster.woman007@gmail.com",github:"https://github.com/DisasterWoman",headline:"Designing interfaces that feel alive.",summary:"Frontend engineer focused on modern SaaS applications, immersive Three.js experiences and product interfaces where interaction becomes part of the story."},jv=`mailto:${wr.email}?subject=Frontend%20Developer%20React%20Three.js%20Opportunity`,qx=[{label:"3D",href:"/3d"},{label:"Build",href:"/#build"},{label:"Experience",href:"/#experience"},{label:"Stack",href:"/#stack"},{label:"Contact",href:"/#contact"}];function Yx(){return I.createElement("nav",{className:"topbar","aria-label":"Portfolio navigation"},I.createElement("a",{className:"brand",href:"/"},I.createElement("span",null,"AP"),wr.name),I.createElement("div",{className:"navLinks"},qx.map(s=>I.createElement("a",{key:s.href,href:s.href},s.label))))}const jx=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Zv=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim();var Zx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Kx=Ce.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...d},p)=>Ce.createElement("svg",{ref:p,...Zx,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:Zv("lucide",l),...d},[...f.map(([m,v])=>Ce.createElement(m,v)),...Array.isArray(c)?c:[c]]));const ki=(s,t)=>{const i=Ce.forwardRef(({className:r,...l},c)=>Ce.createElement(Kx,{ref:c,iconNode:t,className:Zv(`lucide-${jx(s)}`,r),...l}));return i.displayName=`${s}`,i};const D_=ki("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);const U_=ki("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);const Qx=ki("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);const _d=ki("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);const vd=ki("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);const Jx=ki("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);const $x=ki("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);const yd=ki("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);const tM=ki("Satellite",[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]]);const Kv=ki("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);function Us({children:s,href:t,variant:i="primary",...r}){return I.createElement("a",{className:`button button--${i}`,href:t,...r},s)}const pp="178",eM=0,L_=1,nM=2,Qv=1,Jv=2,da=3,Ka=0,Kn=1,wi=2,Ya=0,Ns=1,au=2,N_=3,O_=4,iM=5,Ar=100,aM=101,rM=102,sM=103,oM=104,lM=200,cM=201,uM=202,fM=203,Sd=204,xd=205,hM=206,dM=207,pM=208,mM=209,gM=210,_M=211,vM=212,yM=213,SM=214,Md=0,Ed=1,bd=2,zs=3,Td=4,Ad=5,Rd=6,wd=7,$v=0,xM=1,MM=2,ja=0,EM=1,bM=2,TM=3,AM=4,RM=5,wM=6,CM=7,ty=300,Is=301,Bs=302,Cd=303,Dd=304,_u=306,Ud=1e3,Cr=1001,Ld=1002,Di=1003,DM=1004,Sc=1005,Fi=1006,Ph=1007,Dr=1008,Gi=1009,ey=1010,ny=1011,Zo=1012,mp=1013,Ur=1014,pa=1015,nl=1016,gp=1017,_p=1018,Ko=1020,iy=35902,ay=1021,ry=1022,Ci=1023,Qo=1026,Jo=1027,sy=1028,vp=1029,oy=1030,yp=1031,Sp=1033,Qc=33776,Jc=33777,$c=33778,tu=33779,Nd=35840,Od=35841,Pd=35842,zd=35843,Id=36196,Bd=37492,Fd=37496,Hd=37808,Gd=37809,Vd=37810,kd=37811,Xd=37812,Wd=37813,qd=37814,Yd=37815,jd=37816,Zd=37817,Kd=37818,Qd=37819,Jd=37820,$d=37821,eu=36492,tp=36494,ep=36495,ly=36283,np=36284,ip=36285,ap=36286,UM=3200,LM=3201,cy=0,NM=1,qa="",si="srgb",Fs="srgb-linear",ru="linear",ke="srgb",ds=7680,P_=519,OM=512,PM=513,zM=514,uy=515,IM=516,BM=517,FM=518,HM=519,rp=35044,z_="300 es",ma=2e3,su=2001;class Gs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nu=Math.PI/180,sp=180/Math.PI;function Za(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function Ae(s,t,i){return Math.max(t,Math.min(i,s))}function GM(s,t){return(s%t+t)%t}function zh(s,t,i){return(1-i)*s+i*t}function Bi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class fe{constructor(t=0,i=0){fe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class il{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,d){let p=r[l+0],m=r[l+1],v=r[l+2],_=r[l+3];const y=c[f+0],M=c[f+1],E=c[f+2],b=c[f+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=v,t[i+3]=_;return}if(d===1){t[i+0]=y,t[i+1]=M,t[i+2]=E,t[i+3]=b;return}if(_!==b||p!==y||m!==M||v!==E){let S=1-d;const g=p*y+m*M+v*E+_*b,T=g>=0?1:-1,C=1-g*g;if(C>Number.EPSILON){const V=Math.sqrt(C),O=Math.atan2(V,g*T);S=Math.sin(S*O)/V,d=Math.sin(d*O)/V}const R=d*T;if(p=p*S+y*R,m=m*S+M*R,v=v*S+E*R,_=_*S+b*R,S===1-d){const V=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=V,m*=V,v*=V,_*=V}}t[i]=p,t[i+1]=m,t[i+2]=v,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,f){const d=r[l],p=r[l+1],m=r[l+2],v=r[l+3],_=c[f],y=c[f+1],M=c[f+2],E=c[f+3];return t[i]=d*E+v*_+p*M-m*y,t[i+1]=p*E+v*y+m*_-d*M,t[i+2]=m*E+v*M+d*y-p*_,t[i+3]=v*E-d*_-p*y-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(l/2),_=d(c/2),y=p(r/2),M=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=y*v*_+m*M*E,this._y=m*M*_-y*v*E,this._z=m*v*E+y*M*_,this._w=m*v*_-y*M*E;break;case"YXZ":this._x=y*v*_+m*M*E,this._y=m*M*_-y*v*E,this._z=m*v*E-y*M*_,this._w=m*v*_+y*M*E;break;case"ZXY":this._x=y*v*_-m*M*E,this._y=m*M*_+y*v*E,this._z=m*v*E+y*M*_,this._w=m*v*_-y*M*E;break;case"ZYX":this._x=y*v*_-m*M*E,this._y=m*M*_+y*v*E,this._z=m*v*E-y*M*_,this._w=m*v*_+y*M*E;break;case"YZX":this._x=y*v*_+m*M*E,this._y=m*M*_+y*v*E,this._z=m*v*E-y*M*_,this._w=m*v*_-y*M*E;break;case"XZY":this._x=y*v*_-m*M*E,this._y=m*M*_-y*v*E,this._z=m*v*E+y*M*_,this._w=m*v*_+y*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],m=i[2],v=i[6],_=i[10],y=r+d+_;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(v-p)*M,this._y=(c-m)*M,this._z=(f-l)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(v-p)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+m)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(c-m)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(f-l)/M,this._x=(c+m)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,d=i._x,p=i._y,m=i._z,v=i._w;return this._x=r*v+f*d+l*m-c*p,this._y=l*v+f*p+c*d-r*m,this._z=c*v+f*m+r*p-l*d,this._w=f*v-r*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),_=Math.sin((1-i)*v)/m,y=Math.sin(i*v)/m;return this._w=f*_+this._w*y,this._x=r*_+this._x*y,this._y=l*_+this._y*y,this._z=c*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,i=0,r=0){Y.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(I_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(I_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*r),v=2*(d*i-c*l),_=2*(c*r-f*i);return this.x=i+p*m+f*_-d*v,this.y=r+p*v+d*m-c*_,this.z=l+p*_+c*v-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*f-r*p,this.z=r*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Ih.copy(this).projectOnVector(t),this.sub(Ih)}reflect(t){return this.sub(Ih.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ih=new Y,I_=new il;class ge{constructor(t,i,r,l,c,f,d,p,m){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,p,m)}set(t,i,r,l,c,f,d,p,m){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=p,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],v=r[4],_=r[7],y=r[2],M=r[5],E=r[8],b=l[0],S=l[3],g=l[6],T=l[1],C=l[4],R=l[7],V=l[2],O=l[5],N=l[8];return c[0]=f*b+d*T+p*V,c[3]=f*S+d*C+p*O,c[6]=f*g+d*R+p*N,c[1]=m*b+v*T+_*V,c[4]=m*S+v*C+_*O,c[7]=m*g+v*R+_*N,c[2]=y*b+M*T+E*V,c[5]=y*S+M*C+E*O,c[8]=y*g+M*R+E*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8];return i*f*v-i*d*m-r*c*v+r*d*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8],_=v*f-d*m,y=d*p-v*c,M=m*c-f*p,E=i*_+r*y+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=_*b,t[1]=(l*m-v*r)*b,t[2]=(d*r-l*f)*b,t[3]=y*b,t[4]=(v*i-l*p)*b,t[5]=(l*c-d*i)*b,t[6]=M*b,t[7]=(r*p-m*i)*b,t[8]=(f*i-r*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Bh.makeScale(t,i)),this}rotate(t){return this.premultiply(Bh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Bh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bh=new ge;function fy(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ou(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function VM(){const s=ou("canvas");return s.style.display="block",s}const B_={};function Os(s){s in B_||(B_[s]=!0,console.warn(s))}function kM(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function XM(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function WM(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const F_=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),H_=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qM(){const s={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ke&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ke&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===qa?ru:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Os("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Os("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Fs]:{primaries:t,whitePoint:r,transfer:ru,toXYZ:F_,fromXYZ:H_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:r,transfer:ke,toXYZ:F_,fromXYZ:H_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const Oe=qM();function ga(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ps;class YM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ps===void 0&&(ps=ou("canvas")),ps.width=t.width,ps.height=t.height;const l=ps.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ps}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ou("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ga(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ga(i[r]/255)*255):i[r]=ga(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jM=0;class xp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Za(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Fh(l[f].image)):c.push(Fh(l[f]))}else c=Fh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Fh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?YM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZM=0;const Hh=new Y;class Vn extends Gs{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=Cr,l=Cr,c=Fi,f=Dr,d=Ci,p=Gi,m=Vn.DEFAULT_ANISOTROPY,v=qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Za(),this.name="",this.source=new xp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hh).x}get height(){return this.source.getSize(Hh).y}get depth(){return this.source.getSize(Hh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ty)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ud:t.x=t.x-Math.floor(t.x);break;case Cr:t.x=t.x<0?0:1;break;case Ld:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ud:t.y=t.y-Math.floor(t.y);break;case Cr:t.y=t.y<0?0:1;break;case Ld:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=ty;Vn.DEFAULT_ANISOTROPY=1;class We{constructor(t=0,i=0,r=0,l=1){We.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const p=t.elements,m=p[0],v=p[4],_=p[8],y=p[1],M=p[5],E=p[9],b=p[2],S=p[6],g=p[10];if(Math.abs(v-y)<.01&&Math.abs(_-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+y)<.1&&Math.abs(_+b)<.1&&Math.abs(E+S)<.1&&Math.abs(m+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(m+1)/2,R=(M+1)/2,V=(g+1)/2,O=(v+y)/4,N=(_+b)/4,z=(E+S)/4;return C>R&&C>V?C<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(C),l=O/r,c=N/r):R>V?R<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(R),r=O/l,c=z/l):V<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),r=N/c,l=z/c),this.set(r,l,c,i),this}let T=Math.sqrt((S-E)*(S-E)+(_-b)*(_-b)+(y-v)*(y-v));return Math.abs(T)<.001&&(T=1),this.x=(S-E)/T,this.y=(_-b)/T,this.z=(y-v)/T,this.w=Math.acos((m+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this.w=Ae(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this.w=Ae(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KM extends Gs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new We(0,0,t,i),this.scissorTest=!1,this.viewport=new We(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Vn(l);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Fi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new xp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends KM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class hy extends Vn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Di,this.minFilter=Di,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class QM extends Vn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Di,this.minFilter=Di,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class al{constructor(t=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ti.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ti.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ti.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Ti):Ti.fromBufferAttribute(c,f),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),xc.copy(r.boundingBox)),xc.applyMatrix4(t.matrixWorld),this.union(xc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Io),Mc.subVectors(this.max,Io),ms.subVectors(t.a,Io),gs.subVectors(t.b,Io),_s.subVectors(t.c,Io),Ha.subVectors(gs,ms),Ga.subVectors(_s,gs),vr.subVectors(ms,_s);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-vr.z,vr.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,vr.z,0,-vr.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-vr.y,vr.x,0];return!Gh(i,ms,gs,_s,Mc)||(i=[1,0,0,0,1,0,0,0,1],!Gh(i,ms,gs,_s,Mc))?!1:(Ec.crossVectors(Ha,Ga),i=[Ec.x,Ec.y,Ec.z],Gh(i,ms,gs,_s,Mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(la),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const la=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Ti=new Y,xc=new al,ms=new Y,gs=new Y,_s=new Y,Ha=new Y,Ga=new Y,vr=new Y,Io=new Y,Mc=new Y,Ec=new Y,yr=new Y;function Gh(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){yr.fromArray(s,c);const d=l.x*Math.abs(yr.x)+l.y*Math.abs(yr.y)+l.z*Math.abs(yr.z),p=t.dot(yr),m=i.dot(yr),v=r.dot(yr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const JM=new al,Bo=new Y,Vh=new Y;class rl{constructor(t=new Y,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):JM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Bo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(Vh)),this.expandByPoint(Bo.copy(t.center).sub(Vh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ca=new Y,kh=new Y,bc=new Y,Va=new Y,Xh=new Y,Tc=new Y,Wh=new Y;class vu{constructor(t=new Y,i=new Y(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ca)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ca.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){kh.copy(t).add(i).multiplyScalar(.5),bc.copy(i).sub(t).normalize(),Va.copy(this.origin).sub(kh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(bc),d=Va.dot(this.direction),p=-Va.dot(bc),m=Va.lengthSq(),v=Math.abs(1-f*f);let _,y,M,E;if(v>0)if(_=f*p-d,y=f*d-p,E=c*v,_>=0)if(y>=-E)if(y<=E){const b=1/v;_*=b,y*=b,M=_*(_+f*y+2*d)+y*(f*_+y+2*p)+m}else y=c,_=Math.max(0,-(f*y+d)),M=-_*_+y*(y+2*p)+m;else y=-c,_=Math.max(0,-(f*y+d)),M=-_*_+y*(y+2*p)+m;else y<=-E?(_=Math.max(0,-(-f*c+d)),y=_>0?-c:Math.min(Math.max(-c,-p),c),M=-_*_+y*(y+2*p)+m):y<=E?(_=0,y=Math.min(Math.max(-c,-p),c),M=y*(y+2*p)+m):(_=Math.max(0,-(f*c+d)),y=_>0?c:Math.min(Math.max(-c,-p),c),M=-_*_+y*(y+2*p)+m);else y=f>0?-c:c,_=Math.max(0,-(f*y+d)),M=-_*_+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(kh).addScaledVector(bc,y),M}intersectSphere(t,i){ca.subVectors(t.center,this.origin);const r=ca.dot(this.direction),l=ca.dot(ca)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,y=this.origin;return m>=0?(r=(t.min.x-y.x)*m,l=(t.max.x-y.x)*m):(r=(t.max.x-y.x)*m,l=(t.min.x-y.x)*m),v>=0?(c=(t.min.y-y.y)*v,f=(t.max.y-y.y)*v):(c=(t.max.y-y.y)*v,f=(t.min.y-y.y)*v),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-y.z)*_,p=(t.max.z-y.z)*_):(d=(t.max.z-y.z)*_,p=(t.min.z-y.z)*_),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ca)!==null}intersectTriangle(t,i,r,l,c){Xh.subVectors(i,t),Tc.subVectors(r,t),Wh.crossVectors(Xh,Tc);let f=this.direction.dot(Wh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Va.subVectors(this.origin,t);const p=d*this.direction.dot(Tc.crossVectors(Va,Tc));if(p<0)return null;const m=d*this.direction.dot(Xh.cross(Va));if(m<0||p+m>f)return null;const v=-d*Va.dot(Wh);return v<0?null:this.at(v/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,r,l,c,f,d,p,m,v,_,y,M,E,b,S){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,p,m,v,_,y,M,E,b,S)}set(t,i,r,l,c,f,d,p,m,v,_,y,M,E,b,S){const g=this.elements;return g[0]=t,g[4]=i,g[8]=r,g[12]=l,g[1]=c,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=v,g[10]=_,g[14]=y,g[3]=M,g[7]=E,g[11]=b,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/vs.setFromMatrixColumn(t,0).length(),c=1/vs.setFromMatrixColumn(t,1).length(),f=1/vs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const y=f*v,M=f*_,E=d*v,b=d*_;i[0]=p*v,i[4]=-p*_,i[8]=m,i[1]=M+E*m,i[5]=y-b*m,i[9]=-d*p,i[2]=b-y*m,i[6]=E+M*m,i[10]=f*p}else if(t.order==="YXZ"){const y=p*v,M=p*_,E=m*v,b=m*_;i[0]=y+b*d,i[4]=E*d-M,i[8]=f*m,i[1]=f*_,i[5]=f*v,i[9]=-d,i[2]=M*d-E,i[6]=b+y*d,i[10]=f*p}else if(t.order==="ZXY"){const y=p*v,M=p*_,E=m*v,b=m*_;i[0]=y-b*d,i[4]=-f*_,i[8]=E+M*d,i[1]=M+E*d,i[5]=f*v,i[9]=b-y*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const y=f*v,M=f*_,E=d*v,b=d*_;i[0]=p*v,i[4]=E*m-M,i[8]=y*m+b,i[1]=p*_,i[5]=b*m+y,i[9]=M*m-E,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const y=f*p,M=f*m,E=d*p,b=d*m;i[0]=p*v,i[4]=b-y*_,i[8]=E*_+M,i[1]=_,i[5]=f*v,i[9]=-d*v,i[2]=-m*v,i[6]=M*_+E,i[10]=y-b*_}else if(t.order==="XZY"){const y=f*p,M=f*m,E=d*p,b=d*m;i[0]=p*v,i[4]=-_,i[8]=m*v,i[1]=y*_+b,i[5]=f*v,i[9]=M*_-E,i[2]=E*_-M,i[6]=d*v,i[10]=b*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose($M,t,tE)}lookAt(t,i,r){const l=this.elements;return ai.subVectors(t,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),ka.crossVectors(r,ai),ka.lengthSq()===0&&(Math.abs(r.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),ka.crossVectors(r,ai)),ka.normalize(),Ac.crossVectors(ai,ka),l[0]=ka.x,l[4]=Ac.x,l[8]=ai.x,l[1]=ka.y,l[5]=Ac.y,l[9]=ai.y,l[2]=ka.z,l[6]=Ac.z,l[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],v=r[1],_=r[5],y=r[9],M=r[13],E=r[2],b=r[6],S=r[10],g=r[14],T=r[3],C=r[7],R=r[11],V=r[15],O=l[0],N=l[4],z=l[8],D=l[12],w=l[1],G=l[5],$=l[9],j=l[13],et=l[2],st=l[6],B=l[10],W=l[14],K=l[3],_t=l[7],Tt=l[11],P=l[15];return c[0]=f*O+d*w+p*et+m*K,c[4]=f*N+d*G+p*st+m*_t,c[8]=f*z+d*$+p*B+m*Tt,c[12]=f*D+d*j+p*W+m*P,c[1]=v*O+_*w+y*et+M*K,c[5]=v*N+_*G+y*st+M*_t,c[9]=v*z+_*$+y*B+M*Tt,c[13]=v*D+_*j+y*W+M*P,c[2]=E*O+b*w+S*et+g*K,c[6]=E*N+b*G+S*st+g*_t,c[10]=E*z+b*$+S*B+g*Tt,c[14]=E*D+b*j+S*W+g*P,c[3]=T*O+C*w+R*et+V*K,c[7]=T*N+C*G+R*st+V*_t,c[11]=T*z+C*$+R*B+V*Tt,c[15]=T*D+C*j+R*W+V*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],d=t[5],p=t[9],m=t[13],v=t[2],_=t[6],y=t[10],M=t[14],E=t[3],b=t[7],S=t[11],g=t[15];return E*(+c*p*_-l*m*_-c*d*y+r*m*y+l*d*M-r*p*M)+b*(+i*p*M-i*m*y+c*f*y-l*f*M+l*m*v-c*p*v)+S*(+i*m*_-i*d*M-c*f*_+r*f*M+c*d*v-r*m*v)+g*(-l*d*v-i*p*_+i*d*y+l*f*_-r*f*y+r*p*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8],_=t[9],y=t[10],M=t[11],E=t[12],b=t[13],S=t[14],g=t[15],T=_*S*m-b*y*m+b*p*M-d*S*M-_*p*g+d*y*g,C=E*y*m-v*S*m-E*p*M+f*S*M+v*p*g-f*y*g,R=v*b*m-E*_*m+E*d*M-f*b*M-v*d*g+f*_*g,V=E*_*p-v*b*p-E*d*y+f*b*y+v*d*S-f*_*S,O=i*T+r*C+l*R+c*V;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/O;return t[0]=T*N,t[1]=(b*y*c-_*S*c-b*l*M+r*S*M+_*l*g-r*y*g)*N,t[2]=(d*S*c-b*p*c+b*l*m-r*S*m-d*l*g+r*p*g)*N,t[3]=(_*p*c-d*y*c-_*l*m+r*y*m+d*l*M-r*p*M)*N,t[4]=C*N,t[5]=(v*S*c-E*y*c+E*l*M-i*S*M-v*l*g+i*y*g)*N,t[6]=(E*p*c-f*S*c-E*l*m+i*S*m+f*l*g-i*p*g)*N,t[7]=(f*y*c-v*p*c+v*l*m-i*y*m-f*l*M+i*p*M)*N,t[8]=R*N,t[9]=(E*_*c-v*b*c-E*r*M+i*b*M+v*r*g-i*_*g)*N,t[10]=(f*b*c-E*d*c+E*r*m-i*b*m-f*r*g+i*d*g)*N,t[11]=(v*d*c-f*_*c-v*r*m+i*_*m+f*r*M-i*d*M)*N,t[12]=V*N,t[13]=(v*b*l-E*_*l+E*r*y-i*b*y-v*r*S+i*_*S)*N,t[14]=(E*d*l-f*b*l-E*r*p+i*b*p+f*r*S-i*d*S)*N,t[15]=(f*_*l-v*d*l+v*r*p-i*_*p-f*r*y+i*d*y)*N,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,d=t.y,p=t.z,m=c*f,v=c*d;return this.set(m*f+r,m*d-l*p,m*p+l*d,0,m*d+l*p,v*d+r,v*p-l*f,0,m*p-l*d,v*p+l*f,c*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,d=i._z,p=i._w,m=c+c,v=f+f,_=d+d,y=c*m,M=c*v,E=c*_,b=f*v,S=f*_,g=d*_,T=p*m,C=p*v,R=p*_,V=r.x,O=r.y,N=r.z;return l[0]=(1-(b+g))*V,l[1]=(M+R)*V,l[2]=(E-C)*V,l[3]=0,l[4]=(M-R)*O,l[5]=(1-(y+g))*O,l[6]=(S+T)*O,l[7]=0,l[8]=(E+C)*N,l[9]=(S-T)*N,l[10]=(1-(y+b))*N,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=vs.set(l[0],l[1],l[2]).length();const f=vs.set(l[4],l[5],l[6]).length(),d=vs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ai.copy(this);const m=1/c,v=1/f,_=1/d;return Ai.elements[0]*=m,Ai.elements[1]*=m,Ai.elements[2]*=m,Ai.elements[4]*=v,Ai.elements[5]*=v,Ai.elements[6]*=v,Ai.elements[8]*=_,Ai.elements[9]*=_,Ai.elements[10]*=_,i.setFromRotationMatrix(Ai),r.x=c,r.y=f,r.z=d,this}makePerspective(t,i,r,l,c,f,d=ma){const p=this.elements,m=2*c/(i-t),v=2*c/(r-l),_=(i+t)/(i-t),y=(r+l)/(r-l);let M,E;if(d===ma)M=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===su)M=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,f,d=ma){const p=this.elements,m=1/(i-t),v=1/(r-l),_=1/(f-c),y=(i+t)*m,M=(r+l)*v;let E,b;if(d===ma)E=(f+c)*_,b=-2*_;else if(d===su)E=c*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const vs=new Y,Ai=new je,$M=new Y(0,0,0),tE=new Y(1,1,1),ka=new Y,Ac=new Y,ai=new Y,G_=new je,V_=new il;class Vi{constructor(t=0,i=0,r=0,l=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],v=l[9],_=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ae(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return G_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(G_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return V_.setFromEuler(this),this.setFromQuaternion(V_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class Mp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eE=0;const k_=new Y,ys=new il,ua=new je,Rc=new Y,Fo=new Y,nE=new Y,iE=new il,X_=new Y(1,0,0),W_=new Y(0,1,0),q_=new Y(0,0,1),Y_={type:"added"},aE={type:"removed"},Ss={type:"childadded",child:null},qh={type:"childremoved",child:null};class _n extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=Za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const t=new Y,i=new Vi,r=new il,l=new Y(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new ge}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ys.setFromAxisAngle(t,i),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,i){return ys.setFromAxisAngle(t,i),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(X_,t)}rotateY(t){return this.rotateOnAxis(W_,t)}rotateZ(t){return this.rotateOnAxis(q_,t)}translateOnAxis(t,i){return k_.copy(t).applyQuaternion(this.quaternion),this.position.add(k_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(X_,t)}translateY(t){return this.translateOnAxis(W_,t)}translateZ(t){return this.translateOnAxis(q_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Rc.copy(t):Rc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Fo,Rc,this.up):ua.lookAt(Rc,Fo,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),ys.setFromRotationMatrix(ua),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Y_),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(aE),qh.child=t,this.dispatchEvent(qh),qh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Y_),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,nE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,iE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),v=f(t.images),_=f(t.shapes),y=f(t.skeletons),M=f(t.animations),E=f(t.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}_n.DEFAULT_UP=new Y(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new Y,fa=new Y,Yh=new Y,ha=new Y,xs=new Y,Ms=new Y,j_=new Y,jh=new Y,Zh=new Y,Kh=new Y,Qh=new We,Jh=new We,$h=new We;class oi{constructor(t=new Y,i=new Y,r=new Y){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ri.subVectors(t,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ri.subVectors(l,i),fa.subVectors(r,i),Yh.subVectors(t,i);const f=Ri.dot(Ri),d=Ri.dot(fa),p=Ri.dot(Yh),m=fa.dot(fa),v=fa.dot(Yh),_=f*m-d*d;if(_===0)return c.set(0,0,0),null;const y=1/_,M=(m*p-d*v)*y,E=(f*v-d*p)*y;return c.set(1-M-E,E,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(t,i,r,l,c,f,d,p){return this.getBarycoord(t,i,r,l,ha)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ha.x),p.addScaledVector(f,ha.y),p.addScaledVector(d,ha.z),p)}static getInterpolatedAttribute(t,i,r,l,c,f){return Qh.setScalar(0),Jh.setScalar(0),$h.setScalar(0),Qh.fromBufferAttribute(t,i),Jh.fromBufferAttribute(t,r),$h.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Qh,c.x),f.addScaledVector(Jh,c.y),f.addScaledVector($h,c.z),f}static isFrontFacing(t,i,r,l){return Ri.subVectors(r,i),fa.subVectors(t,i),Ri.cross(fa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ri.cross(fa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return oi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return oi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,d;xs.subVectors(l,r),Ms.subVectors(c,r),jh.subVectors(t,r);const p=xs.dot(jh),m=Ms.dot(jh);if(p<=0&&m<=0)return i.copy(r);Zh.subVectors(t,l);const v=xs.dot(Zh),_=Ms.dot(Zh);if(v>=0&&_<=v)return i.copy(l);const y=p*_-v*m;if(y<=0&&p>=0&&v<=0)return f=p/(p-v),i.copy(r).addScaledVector(xs,f);Kh.subVectors(t,c);const M=xs.dot(Kh),E=Ms.dot(Kh);if(E>=0&&M<=E)return i.copy(c);const b=M*m-p*E;if(b<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(r).addScaledVector(Ms,d);const S=v*E-M*_;if(S<=0&&_-v>=0&&M-E>=0)return j_.subVectors(c,l),d=(_-v)/(_-v+(M-E)),i.copy(l).addScaledVector(j_,d);const g=1/(S+b+y);return f=b*g,d=y*g,i.copy(r).addScaledVector(xs,f).addScaledVector(Ms,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},wc={h:0,s:0,l:0};function td(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Se{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Oe.workingColorSpace){return this.r=t,this.g=i,this.b=r,Oe.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Oe.workingColorSpace){if(t=GM(t,1),i=Ae(i,0,1),r=Ae(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=td(f,c,t+1/3),this.g=td(f,c,t),this.b=td(f,c,t-1/3)}return Oe.colorSpaceToWorking(this,l),this}setStyle(t,i=si){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=si){const r=dy[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Oe.workingToColorSpace(Pn.copy(this),t),Math.round(Ae(Pn.r*255,0,255))*65536+Math.round(Ae(Pn.g*255,0,255))*256+Math.round(Ae(Pn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Oe.workingColorSpace){Oe.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,c=Pn.b,f=Math.max(r,l,c),d=Math.min(r,l,c);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const _=f-d;switch(m=v<=.5?_/(f+d):_/(2-f-d),f){case r:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-r)/_+2;break;case c:p=(r-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=v,t}getRGB(t,i=Oe.workingColorSpace){return Oe.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=si){Oe.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,r=Pn.g,l=Pn.b;return t!==si?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Xa),this.setHSL(Xa.h+t,Xa.s+i,Xa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Xa),t.getHSL(wc);const r=zh(Xa.h,wc.h,i),l=zh(Xa.s,wc.s,i),c=zh(Xa.l,wc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Se;Se.NAMES=dy;let rE=0;class Ja extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=Za(),this.name="",this.type="Material",this.blending=Ns,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=xd,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=P_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(r.blending=this.blending),this.side!==Ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Sd&&(r.blendSrc=this.blendSrc),this.blendDst!==xd&&(r.blendDst=this.blendDst),this.blendEquation!==Ar&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==P_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vi extends Ja{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=$v,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const mn=new Y,Cc=new fe;let sE=0;class Dn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=rp,this.updateRanges=[],this.gpuType=pa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Cc.fromBufferAttribute(this,i),Cc.applyMatrix3(t),this.setXY(i,Cc.x,Cc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Bi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Xe(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Bi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Bi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Bi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Bi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array),c=Xe(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rp&&(t.usage=this.usage),t}}class py extends Dn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class my extends Dn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class $e extends Dn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let oE=0;const _i=new je,ed=new _n,Es=new Y,ri=new al,Ho=new al,Mn=new Y;class ln extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=Za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fy(t)?my:py)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ge().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,i,r){return _i.makeTranslation(t,i,r),this.applyMatrix4(_i),this}scale(t,i,r){return _i.makeScale(t,i,r),this.applyMatrix4(_i),this}lookAt(t){return ed.lookAt(t),ed.updateMatrix(),this.applyMatrix4(ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new $e(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Ho.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(ri.min,Ho.min),ri.expandByPoint(Mn),Mn.addVectors(ri.max,Ho.max),ri.expandByPoint(Mn)):(ri.expandByPoint(Ho.min),ri.expandByPoint(Ho.max))}ri.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)Mn.fromBufferAttribute(d,m),p&&(Es.fromBufferAttribute(t,m),Mn.add(Es)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let z=0;z<r.count;z++)d[z]=new Y,p[z]=new Y;const m=new Y,v=new Y,_=new Y,y=new fe,M=new fe,E=new fe,b=new Y,S=new Y;function g(z,D,w){m.fromBufferAttribute(r,z),v.fromBufferAttribute(r,D),_.fromBufferAttribute(r,w),y.fromBufferAttribute(c,z),M.fromBufferAttribute(c,D),E.fromBufferAttribute(c,w),v.sub(m),_.sub(m),M.sub(y),E.sub(y);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(b.copy(v).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(G),S.copy(_).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(G),d[z].add(b),d[D].add(b),d[w].add(b),p[z].add(S),p[D].add(S),p[w].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let z=0,D=T.length;z<D;++z){const w=T[z],G=w.start,$=w.count;for(let j=G,et=G+$;j<et;j+=3)g(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const C=new Y,R=new Y,V=new Y,O=new Y;function N(z){V.fromBufferAttribute(l,z),O.copy(V);const D=d[z];C.copy(D),C.sub(V.multiplyScalar(V.dot(D))).normalize(),R.crossVectors(O,D);const G=R.dot(p[z])<0?-1:1;f.setXYZW(z,C.x,C.y,C.z,G)}for(let z=0,D=T.length;z<D;++z){const w=T[z],G=w.start,$=w.count;for(let j=G,et=G+$;j<et;j+=3)N(t.getX(j+0)),N(t.getX(j+1)),N(t.getX(j+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Dn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const l=new Y,c=new Y,f=new Y,d=new Y,p=new Y,m=new Y,v=new Y,_=new Y;if(t)for(let y=0,M=t.count;y<M;y+=3){const E=t.getX(y+0),b=t.getX(y+1),S=t.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,S),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,S),d.add(v),p.add(v),m.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(d,p){const m=d.array,v=d.itemSize,_=d.normalized,y=new m.constructor(p.length*v);let M=0,E=0;for(let b=0,S=p.length;b<S;b++){d.isInterleavedBufferAttribute?M=p[b]*d.data.stride+d.offset:M=p[b]*v;for(let g=0;g<v;g++)y[E++]=m[M++]}return new Dn(y,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ln,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,r);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let v=0,_=m.length;v<_;v++){const y=m[v],M=t(y,r);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,y=m.length;_<y;_++){const M=m[_];v.push(M.toJSON(t.data))}v.length>0&&(l[p]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const c=t.morphAttributes;for(const m in c){const v=[],_=c[m];for(let y=0,M=_.length;y<M;y++)v.push(_[y].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,v=f.length;m<v;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Z_=new je,Sr=new vu,Dc=new rl,K_=new Y,Uc=new Y,Lc=new Y,Nc=new Y,nd=new Y,Oc=new Y,Q_=new Y,Pc=new Y;class en extends _n{constructor(t=new ln,i=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Oc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=d[p],_=c[p];v!==0&&(nd.fromBufferAttribute(_,t),f?Oc.addScaledVector(nd,v):Oc.addScaledVector(nd.sub(i),v))}i.add(Oc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Dc.copy(r.boundingSphere),Dc.applyMatrix4(c),Sr.copy(t.ray).recast(t.near),!(Dc.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Dc,K_)===null||Sr.origin.distanceToSquared(K_)>(t.far-t.near)**2))&&(Z_.copy(c).invert(),Sr.copy(t.ray).applyMatrix4(Z_),!(r.boundingBox!==null&&Sr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Sr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,y=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,b=y.length;E<b;E++){const S=y[E],g=f[S.materialIndex],T=Math.max(S.start,M.start),C=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let R=T,V=C;R<V;R+=3){const O=d.getX(R),N=d.getX(R+1),z=d.getX(R+2);l=zc(this,g,t,r,m,v,_,O,N,z),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let S=E,g=b;S<g;S+=3){const T=d.getX(S),C=d.getX(S+1),R=d.getX(S+2);l=zc(this,f,t,r,m,v,_,T,C,R),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,b=y.length;E<b;E++){const S=y[E],g=f[S.materialIndex],T=Math.max(S.start,M.start),C=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let R=T,V=C;R<V;R+=3){const O=R,N=R+1,z=R+2;l=zc(this,g,t,r,m,v,_,O,N,z),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(p.count,M.start+M.count);for(let S=E,g=b;S<g;S+=3){const T=S,C=S+1,R=S+2;l=zc(this,f,t,r,m,v,_,T,C,R),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function lE(s,t,i,r,l,c,f,d){let p;if(t.side===Kn?p=r.intersectTriangle(f,c,l,!0,d):p=r.intersectTriangle(l,c,f,t.side===Ka,d),p===null)return null;Pc.copy(d),Pc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(Pc);return m<i.near||m>i.far?null:{distance:m,point:Pc.clone(),object:s}}function zc(s,t,i,r,l,c,f,d,p,m){s.getVertexPosition(d,Uc),s.getVertexPosition(p,Lc),s.getVertexPosition(m,Nc);const v=lE(s,t,i,r,Uc,Lc,Nc,Q_);if(v){const _=new Y;oi.getBarycoord(Q_,Uc,Lc,Nc,_),l&&(v.uv=oi.getInterpolatedAttribute(l,d,p,m,_,new fe)),c&&(v.uv1=oi.getInterpolatedAttribute(c,d,p,m,_,new fe)),f&&(v.normal=oi.getInterpolatedAttribute(f,d,p,m,_,new Y),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new Y,materialIndex:0};oi.getNormal(Uc,Lc,Nc,y.normal),v.face=y,v.barycoord=_}return v}class sl extends ln{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],v=[],_=[];let y=0,M=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new $e(m,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(_,2));function E(b,S,g,T,C,R,V,O,N,z,D){const w=R/N,G=V/z,$=R/2,j=V/2,et=O/2,st=N+1,B=z+1;let W=0,K=0;const _t=new Y;for(let Tt=0;Tt<B;Tt++){const P=Tt*G-j;for(let nt=0;nt<st;nt++){const xt=nt*w-$;_t[b]=xt*T,_t[S]=P*C,_t[g]=et,m.push(_t.x,_t.y,_t.z),_t[b]=0,_t[S]=0,_t[g]=O>0?1:-1,v.push(_t.x,_t.y,_t.z),_.push(nt/N),_.push(1-Tt/z),W+=1}}for(let Tt=0;Tt<z;Tt++)for(let P=0;P<N;P++){const nt=y+P+st*Tt,xt=y+P+st*(Tt+1),Q=y+(P+1)+st*(Tt+1),ft=y+(P+1)+st*Tt;p.push(nt,xt,ft),p.push(xt,Q,ft),K+=6}d.addGroup(M,K,D),M+=K,y+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Hn(s){const t={};for(let i=0;i<s.length;i++){const r=Hs(s[i]);for(const l in r)t[l]=r[l]}return t}function cE(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function gy(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Oe.workingColorSpace}const uE={clone:Hs,merge:Hn};var fE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qa extends Ja{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fE,this.fragmentShader=hE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=cE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class _y extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=ma}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wa=new Y,J_=new fe,$_=new fe;class Gn extends _y{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=sp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sp*2*Math.atan(Math.tan(nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wa.x,Wa.y).multiplyScalar(-t/Wa.z),Wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Wa.x,Wa.y).multiplyScalar(-t/Wa.z)}getViewSize(t,i){return this.getViewBounds(t,J_,$_),i.subVectors($_,J_)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(nu*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*r/m,l*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const bs=-90,Ts=1;class dE extends _n{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Gn(bs,Ts,t,i);l.layers=this.layers,this.add(l);const c=new Gn(bs,Ts,t,i);c.layers=this.layers,this.add(c);const f=new Gn(bs,Ts,t,i);f.layers=this.layers,this.add(f);const d=new Gn(bs,Ts,t,i);d.layers=this.layers,this.add(d);const p=new Gn(bs,Ts,t,i);p.layers=this.layers,this.add(p);const m=new Gn(bs,Ts,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,d,p]=i;for(const m of i)this.remove(m);if(t===ma)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===su)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,v]=this.children,_=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=b,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(_,y,M),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class vy extends Vn{constructor(t=[],i=Is,r,l,c,f,d,p,m,v){super(t,i,r,l,c,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pE extends Lr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new vy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new sl(5,5,5),c=new Qa({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Kn,blending:Ya});c.uniforms.tEquirect.value=i;const f=new en(l,c),d=i.minFilter;return i.minFilter===Dr&&(i.minFilter=Fi),new dE(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class li extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mE={type:"move"};class id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const b of t.hand.values()){const S=i.getJointPose(b,r),g=this._getHandJoint(m,b);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],y=v.position.distanceTo(_.position),M=.02,E=.005;m.inputState.pinching&&y>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(mE)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new li;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Ep{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Se(t),this.density=i}clone(){return new Ep(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class bp extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class gE{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=rp,this.updateRanges=[],this.version=0,this.uuid=Za()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Za()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Za()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new Y;class lu{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.applyMatrix4(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.applyNormalMatrix(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.transformDirection(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Bi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Xe(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Bi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Bi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Bi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Bi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array),c=Xe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Dn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new lu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class cu extends Ja{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let As;const Go=new Y,Rs=new Y,ws=new Y,Cs=new fe,Vo=new fe,yy=new je,Ic=new Y,ko=new Y,Bc=new Y,tv=new fe,ad=new fe,ev=new fe;class op extends _n{constructor(t=new cu){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new ln;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new gE(i,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new lu(r,3,0,!1)),As.setAttribute("uv",new lu(r,2,3,!1))}this.geometry=As,this.material=t,this.center=new fe(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),yy.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-ws.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const f=this.center;Fc(Ic.set(-.5,-.5,0),ws,f,Rs,l,c),Fc(ko.set(.5,-.5,0),ws,f,Rs,l,c),Fc(Bc.set(.5,.5,0),ws,f,Rs,l,c),tv.set(0,0),ad.set(1,0),ev.set(1,1);let d=t.ray.intersectTriangle(Ic,ko,Bc,!1,Go);if(d===null&&(Fc(ko.set(-.5,.5,0),ws,f,Rs,l,c),ad.set(0,1),d=t.ray.intersectTriangle(Ic,Bc,ko,!1,Go),d===null))return;const p=t.ray.origin.distanceTo(Go);p<t.near||p>t.far||i.push({distance:p,point:Go.clone(),uv:oi.getInterpolation(Go,Ic,ko,Bc,tv,ad,ev,new fe),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Fc(s,t,i,r,l,c){Cs.subVectors(s,i).addScalar(.5).multiply(r),l!==void 0?(Vo.x=c*Cs.x-l*Cs.y,Vo.y=l*Cs.x+c*Cs.y):Vo.copy(Cs),s.copy(t),s.x+=Vo.x,s.y+=Vo.y,s.applyMatrix4(yy)}const rd=new Y,_E=new Y,vE=new ge;class br{constructor(t=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=rd.subVectors(r,i).cross(_E.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(rd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||vE.getNormalMatrix(t),l=this.coplanarPoint(rd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new rl,yE=new fe(.5,.5),Hc=new Y;class Tp{constructor(t=new br,i=new br,r=new br,l=new br,c=new br,f=new br){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ma){const r=this.planes,l=t.elements,c=l[0],f=l[1],d=l[2],p=l[3],m=l[4],v=l[5],_=l[6],y=l[7],M=l[8],E=l[9],b=l[10],S=l[11],g=l[12],T=l[13],C=l[14],R=l[15];if(r[0].setComponents(p-c,y-m,S-M,R-g).normalize(),r[1].setComponents(p+c,y+m,S+M,R+g).normalize(),r[2].setComponents(p+f,y+v,S+E,R+T).normalize(),r[3].setComponents(p-f,y-v,S-E,R-T).normalize(),r[4].setComponents(p-d,y-_,S-b,R-C).normalize(),i===ma)r[5].setComponents(p+d,y+_,S+b,R+C).normalize();else if(i===su)r[5].setComponents(d,_,b,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(t){xr.center.set(0,0,0);const i=yE.distanceTo(t.center);return xr.radius=.7071067811865476+i,xr.applyMatrix4(t.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Hc.x=l.normal.x>0?t.max.x:t.min.x,Hc.y=l.normal.y>0?t.max.y:t.min.y,Hc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uu extends Ja{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fu=new Y,hu=new Y,nv=new je,Xo=new vu,Gc=new rl,sd=new Y,iv=new Y;class Ap extends _n{constructor(t=new ln,i=new uu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)fu.fromBufferAttribute(i,l-1),hu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=fu.distanceTo(hu);t.setAttribute("lineDistance",new $e(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Gc.copy(r.boundingSphere),Gc.applyMatrix4(l),Gc.radius+=c,t.ray.intersectsSphere(Gc)===!1)return;nv.copy(l).invert(),Xo.copy(t.ray).applyMatrix4(nv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=r.index,y=r.attributes.position;if(v!==null){const M=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let b=M,S=E-1;b<S;b+=m){const g=v.getX(b),T=v.getX(b+1),C=Vc(this,t,Xo,p,g,T,b);C&&i.push(C)}if(this.isLineLoop){const b=v.getX(E-1),S=v.getX(M),g=Vc(this,t,Xo,p,b,S,E-1);g&&i.push(g)}}else{const M=Math.max(0,f.start),E=Math.min(y.count,f.start+f.count);for(let b=M,S=E-1;b<S;b+=m){const g=Vc(this,t,Xo,p,b,b+1,b);g&&i.push(g)}if(this.isLineLoop){const b=Vc(this,t,Xo,p,E-1,M,E-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Vc(s,t,i,r,l,c,f){const d=s.geometry.attributes.position;if(fu.fromBufferAttribute(d,l),hu.fromBufferAttribute(d,c),i.distanceSqToSegment(fu,hu,sd,iv)>r)return;sd.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(sd);if(!(m<t.near||m>t.far))return{distance:m,point:iv.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const av=new Y,rv=new Y;class SE extends Ap{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)av.fromBufferAttribute(i,l),rv.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+av.distanceTo(rv);t.setAttribute("lineDistance",new $e(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ol extends Ja{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const sv=new je,lp=new vu,kc=new rl,Xc=new Y;class yu extends _n{constructor(t=new ln,i=new ol){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),kc.copy(r.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,t.ray.intersectsSphere(kc)===!1)return;sv.copy(l).invert(),lp.copy(t.ray).applyMatrix4(sv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,_=r.attributes.position;if(m!==null){const y=Math.max(0,f.start),M=Math.min(m.count,f.start+f.count);for(let E=y,b=M;E<b;E++){const S=m.getX(E);Xc.fromBufferAttribute(_,S),ov(Xc,S,p,l,t,i,this)}}else{const y=Math.max(0,f.start),M=Math.min(_.count,f.start+f.count);for(let E=y,b=M;E<b;E++)Xc.fromBufferAttribute(_,E),ov(Xc,E,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function ov(s,t,i,r,l,c,f){const d=lp.distanceSqToPoint(s);if(d<i){const p=new Y;lp.closestPointToPoint(s,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class Sy extends Vn{constructor(t,i,r,l,c,f,d,p,m){super(t,i,r,l,c,f,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xy extends Vn{constructor(t,i,r=Ur,l,c,f,d=Di,p=Di,m,v=Qo,_=1){if(v!==Qo&&v!==Jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:_};super(y,l,c,f,d,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Rp extends ln{constructor(t=1,i=1,r=1,l=32,c=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const v=[],_=[],y=[],M=[];let E=0;const b=[],S=r/2;let g=0;T(),f===!1&&(t>0&&C(!0),i>0&&C(!1)),this.setIndex(v),this.setAttribute("position",new $e(_,3)),this.setAttribute("normal",new $e(y,3)),this.setAttribute("uv",new $e(M,2));function T(){const R=new Y,V=new Y;let O=0;const N=(i-t)/r;for(let z=0;z<=c;z++){const D=[],w=z/c,G=w*(i-t)+t;for(let $=0;$<=l;$++){const j=$/l,et=j*p+d,st=Math.sin(et),B=Math.cos(et);V.x=G*st,V.y=-w*r+S,V.z=G*B,_.push(V.x,V.y,V.z),R.set(st,N,B).normalize(),y.push(R.x,R.y,R.z),M.push(j,1-w),D.push(E++)}b.push(D)}for(let z=0;z<l;z++)for(let D=0;D<c;D++){const w=b[D][z],G=b[D+1][z],$=b[D+1][z+1],j=b[D][z+1];(t>0||D!==0)&&(v.push(w,G,j),O+=3),(i>0||D!==c-1)&&(v.push(G,$,j),O+=3)}m.addGroup(g,O,0),g+=O}function C(R){const V=E,O=new fe,N=new Y;let z=0;const D=R===!0?t:i,w=R===!0?1:-1;for(let $=1;$<=l;$++)_.push(0,S*w,0),y.push(0,w,0),M.push(.5,.5),E++;const G=E;for(let $=0;$<=l;$++){const et=$/l*p+d,st=Math.cos(et),B=Math.sin(et);N.x=D*B,N.y=S*w,N.z=D*st,_.push(N.x,N.y,N.z),y.push(0,w,0),O.x=st*.5+.5,O.y=B*.5*w+.5,M.push(O.x,O.y),E++}for(let $=0;$<l;$++){const j=V+$,et=G+$;R===!0?v.push(et,et+1,j):v.push(et+1,et,j),z+=3}m.addGroup(g,z,R===!0?1:2),g+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class du extends Rp{constructor(t=1,i=1,r=32,l=1,c=!1,f=0,d=Math.PI*2){super(0,t,i,r,l,c,f,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:d}}static fromJSON(t){return new du(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wp extends ln{constructor(t=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:l};const c=[],f=[];d(l),m(r),v(),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(c.slice(),3)),this.setAttribute("uv",new $e(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(T){const C=new Y,R=new Y,V=new Y;for(let O=0;O<i.length;O+=3)M(i[O+0],C),M(i[O+1],R),M(i[O+2],V),p(C,R,V,T)}function p(T,C,R,V){const O=V+1,N=[];for(let z=0;z<=O;z++){N[z]=[];const D=T.clone().lerp(R,z/O),w=C.clone().lerp(R,z/O),G=O-z;for(let $=0;$<=G;$++)$===0&&z===O?N[z][$]=D:N[z][$]=D.clone().lerp(w,$/G)}for(let z=0;z<O;z++)for(let D=0;D<2*(O-z)-1;D++){const w=Math.floor(D/2);D%2===0?(y(N[z][w+1]),y(N[z+1][w]),y(N[z][w])):(y(N[z][w+1]),y(N[z+1][w+1]),y(N[z+1][w]))}}function m(T){const C=new Y;for(let R=0;R<c.length;R+=3)C.x=c[R+0],C.y=c[R+1],C.z=c[R+2],C.normalize().multiplyScalar(T),c[R+0]=C.x,c[R+1]=C.y,c[R+2]=C.z}function v(){const T=new Y;for(let C=0;C<c.length;C+=3){T.x=c[C+0],T.y=c[C+1],T.z=c[C+2];const R=S(T)/2/Math.PI+.5,V=g(T)/Math.PI+.5;f.push(R,1-V)}E(),_()}function _(){for(let T=0;T<f.length;T+=6){const C=f[T+0],R=f[T+2],V=f[T+4],O=Math.max(C,R,V),N=Math.min(C,R,V);O>.9&&N<.1&&(C<.2&&(f[T+0]+=1),R<.2&&(f[T+2]+=1),V<.2&&(f[T+4]+=1))}}function y(T){c.push(T.x,T.y,T.z)}function M(T,C){const R=T*3;C.x=t[R+0],C.y=t[R+1],C.z=t[R+2]}function E(){const T=new Y,C=new Y,R=new Y,V=new Y,O=new fe,N=new fe,z=new fe;for(let D=0,w=0;D<c.length;D+=9,w+=6){T.set(c[D+0],c[D+1],c[D+2]),C.set(c[D+3],c[D+4],c[D+5]),R.set(c[D+6],c[D+7],c[D+8]),O.set(f[w+0],f[w+1]),N.set(f[w+2],f[w+3]),z.set(f[w+4],f[w+5]),V.copy(T).add(C).add(R).divideScalar(3);const G=S(V);b(O,w+0,T,G),b(N,w+2,C,G),b(z,w+4,R,G)}}function b(T,C,R,V){V<0&&T.x===1&&(f[C]=T.x-1),R.x===0&&R.z===0&&(f[C]=V/2/Math.PI+.5)}function S(T){return Math.atan2(T.z,-T.x)}function g(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wp(t.vertices,t.indices,t.radius,t.details)}}const Wc=new Y,qc=new Y,od=new Y,Yc=new oi;class xE extends ln{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(nu*i),f=t.getIndex(),d=t.getAttribute("position"),p=f?f.count:d.count,m=[0,0,0],v=["a","b","c"],_=new Array(3),y={},M=[];for(let E=0;E<p;E+=3){f?(m[0]=f.getX(E),m[1]=f.getX(E+1),m[2]=f.getX(E+2)):(m[0]=E,m[1]=E+1,m[2]=E+2);const{a:b,b:S,c:g}=Yc;if(b.fromBufferAttribute(d,m[0]),S.fromBufferAttribute(d,m[1]),g.fromBufferAttribute(d,m[2]),Yc.getNormal(od),_[0]=`${Math.round(b.x*l)},${Math.round(b.y*l)},${Math.round(b.z*l)}`,_[1]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,_[2]=`${Math.round(g.x*l)},${Math.round(g.y*l)},${Math.round(g.z*l)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let T=0;T<3;T++){const C=(T+1)%3,R=_[T],V=_[C],O=Yc[v[T]],N=Yc[v[C]],z=`${R}_${V}`,D=`${V}_${R}`;D in y&&y[D]?(od.dot(y[D].normal)<=c&&(M.push(O.x,O.y,O.z),M.push(N.x,N.y,N.z)),y[D]=null):z in y||(y[z]={index0:m[T],index1:m[C],normal:od.clone()})}}for(const E in y)if(y[E]){const{index0:b,index1:S}=y[E];Wc.fromBufferAttribute(d,b),qc.fromBufferAttribute(d,S),M.push(Wc.x,Wc.y,Wc.z),M.push(qc.x,qc.y,qc.z)}this.setAttribute("position",new $e(M,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Cp extends wp{constructor(t=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Cp(t.radius,t.detail)}}class ll extends ln{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,v=p+1,_=t/d,y=i/p,M=[],E=[],b=[],S=[];for(let g=0;g<v;g++){const T=g*y-f;for(let C=0;C<m;C++){const R=C*_-c;E.push(R,-T,0),b.push(0,0,1),S.push(C/d),S.push(1-g/p)}}for(let g=0;g<p;g++)for(let T=0;T<d;T++){const C=T+m*g,R=T+m*(g+1),V=T+1+m*(g+1),O=T+1+m*g;M.push(C,R,O),M.push(R,V,O)}this.setIndex(M),this.setAttribute("position",new $e(E,3)),this.setAttribute("normal",new $e(b,3)),this.setAttribute("uv",new $e(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.widthSegments,t.heightSegments)}}class Dp extends ln{constructor(t=.5,i=1,r=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:f},r=Math.max(3,r),l=Math.max(1,l);const d=[],p=[],m=[],v=[];let _=t;const y=(i-t)/l,M=new Y,E=new fe;for(let b=0;b<=l;b++){for(let S=0;S<=r;S++){const g=c+S/r*f;M.x=_*Math.cos(g),M.y=_*Math.sin(g),p.push(M.x,M.y,M.z),m.push(0,0,1),E.x=(M.x/i+1)/2,E.y=(M.y/i+1)/2,v.push(E.x,E.y)}_+=y}for(let b=0;b<l;b++){const S=b*(r+1);for(let g=0;g<r;g++){const T=g+S,C=T,R=T+r+1,V=T+r+2,O=T+1;d.push(C,R,O),d.push(R,V,O)}}this.setIndex(d),this.setAttribute("position",new $e(p,3)),this.setAttribute("normal",new $e(m,3)),this.setAttribute("uv",new $e(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dp(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Hi extends ln{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(f+d,Math.PI);let m=0;const v=[],_=new Y,y=new Y,M=[],E=[],b=[],S=[];for(let g=0;g<=r;g++){const T=[],C=g/r;let R=0;g===0&&f===0?R=.5/i:g===r&&p===Math.PI&&(R=-.5/i);for(let V=0;V<=i;V++){const O=V/i;_.x=-t*Math.cos(l+O*c)*Math.sin(f+C*d),_.y=t*Math.cos(f+C*d),_.z=t*Math.sin(l+O*c)*Math.sin(f+C*d),E.push(_.x,_.y,_.z),y.copy(_).normalize(),b.push(y.x,y.y,y.z),S.push(O+R,1-C),T.push(m++)}v.push(T)}for(let g=0;g<r;g++)for(let T=0;T<i;T++){const C=v[g][T+1],R=v[g][T],V=v[g+1][T],O=v[g+1][T+1];(g!==0||f>0)&&M.push(C,R,O),(g!==r-1||p<Math.PI)&&M.push(R,V,O)}this.setIndex(M),this.setAttribute("position",new $e(E,3)),this.setAttribute("normal",new $e(b,3)),this.setAttribute("uv",new $e(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Su extends ln{constructor(t=1,i=.4,r=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:l,arc:c},r=Math.floor(r),l=Math.floor(l);const f=[],d=[],p=[],m=[],v=new Y,_=new Y,y=new Y;for(let M=0;M<=r;M++)for(let E=0;E<=l;E++){const b=E/l*c,S=M/r*Math.PI*2;_.x=(t+i*Math.cos(S))*Math.cos(b),_.y=(t+i*Math.cos(S))*Math.sin(b),_.z=i*Math.sin(S),d.push(_.x,_.y,_.z),v.x=t*Math.cos(b),v.y=t*Math.sin(b),y.subVectors(_,v).normalize(),p.push(y.x,y.y,y.z),m.push(E/l),m.push(M/r)}for(let M=1;M<=r;M++)for(let E=1;E<=l;E++){const b=(l+1)*M+E-1,S=(l+1)*(M-1)+E-1,g=(l+1)*(M-1)+E,T=(l+1)*M+E;f.push(b,S,T),f.push(S,g,T)}this.setIndex(f),this.setAttribute("position",new $e(d,3)),this.setAttribute("normal",new $e(p,3)),this.setAttribute("uv",new $e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Su(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class pu extends Ja{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cy,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ME extends pu{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class EE extends Ja{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bE extends Ja{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Up extends _n{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const ld=new je,lv=new Y,cv=new Y;class My{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Gi,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tp,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;lv.setFromMatrixPosition(t.matrixWorld),i.position.copy(lv),cv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(cv),i.updateMatrixWorld(),ld.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ld),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ld)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const uv=new je,Wo=new Y,cd=new Y;class TE extends My{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,c=t.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Wo.setFromMatrixPosition(t.matrixWorld),r.position.copy(Wo),cd.copy(r.position),cd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(cd),r.updateMatrixWorld(),l.makeTranslation(-Wo.x,-Wo.y,-Wo.z),uv.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uv)}}class mu extends Up{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new TE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ey extends _y{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class AE extends My{constructor(){super(new Ey(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class RE extends Up{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new AE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Lp extends Up{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class wE extends Gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Np{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const fv=new je;class CE{constructor(t,i,r=0,l=1/0){this.ray=new vu(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new Mp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return fv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fv),this}intersectObject(t,i=!0,r=[]){return cp(t,this,r,i),r.sort(hv),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)cp(t[l],this,r,i);return r.sort(hv),r}}function hv(s,t){return s.distance-t.distance}function cp(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let f=0,d=c.length;f<d;f++)cp(c[f],t,i,!0)}}function dv(s,t,i,r){const l=DE(r);switch(i){case ay:return s*t;case sy:return s*t/l.components*l.byteLength;case vp:return s*t/l.components*l.byteLength;case oy:return s*t*2/l.components*l.byteLength;case yp:return s*t*2/l.components*l.byteLength;case ry:return s*t*3/l.components*l.byteLength;case Ci:return s*t*4/l.components*l.byteLength;case Sp:return s*t*4/l.components*l.byteLength;case Qc:case Jc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $c:case tu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Od:case zd:return Math.max(s,16)*Math.max(t,8)/4;case Nd:case Pd:return Math.max(s,8)*Math.max(t,8)/2;case Id:case Bd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Fd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Gd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Vd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case kd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Xd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Wd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case qd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Yd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case jd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Kd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Jd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case $d:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case eu:case tp:case ep:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ly:case np:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ip:case ap:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function DE(s){switch(s){case Gi:case ey:return{byteLength:1,components:1};case Zo:case ny:case nl:return{byteLength:2,components:1};case gp:case _p:return{byteLength:2,components:4};case Ur:case mp:case pa:return{byteLength:4,components:1};case iy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pp);function by(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function UE(s){const t=new WeakMap;function i(d,p){const m=d.array,v=d.usage,_=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,v),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const v=p.array,_=p.updateRanges;if(s.bindBuffer(m,d),_.length===0)s.bufferSubData(m,0,v);else{_.sort((M,E)=>M.start-E.start);let y=0;for(let M=1;M<_.length;M++){const E=_[y],b=_[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++y,_[y]=b)}_.length=y+1;for(let M=0,E=_.length;M<E;M++){const b=_[M];s.bufferSubData(m,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(s.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var LE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NE=`#ifdef USE_ALPHAHASH
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
#endif`,OE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BE=`#ifdef USE_AOMAP
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
#endif`,FE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HE=`#ifdef USE_BATCHING
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
#endif`,GE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,WE=`#ifdef USE_IRIDESCENCE
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
#endif`,qE=`#ifdef USE_BUMPMAP
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
#endif`,YE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,e1=`#define PI 3.141592653589793
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
} // validated`,n1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,i1=`vec3 transformedNormal = objectNormal;
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
#endif`,a1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l1="gl_FragColor = linearToOutputTexel( gl_FragColor );",c1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u1=`#ifdef USE_ENVMAP
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
#endif`,f1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h1=`#ifdef USE_ENVMAP
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
#endif`,d1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y1=`#ifdef USE_GRADIENTMAP
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
}`,S1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E1=`uniform bool receiveShadow;
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
#endif`,b1=`#ifdef USE_ENVMAP
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
#endif`,T1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C1=`PhysicalMaterial material;
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
#endif`,D1=`struct PhysicalMaterial {
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
}`,U1=`
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
#endif`,L1=`#if defined( RE_IndirectDiffuse )
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
#endif`,N1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G1=`#if defined( USE_POINTS_UV )
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
#endif`,V1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,X1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y1=`#ifdef USE_MORPHTARGETS
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
#endif`,j1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tb=`#ifdef USE_NORMALMAP
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
#endif`,eb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ib=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ab=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ob=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,db=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gb=`float getShadowMask() {
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
}`,_b=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vb=`#ifdef USE_SKINNING
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
#endif`,yb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sb=`#ifdef USE_SKINNING
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
#endif`,xb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tb=`#ifdef USE_TRANSMISSION
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
#endif`,Ab=`#ifdef USE_TRANSMISSION
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
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Db=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ub=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lb=`uniform sampler2D t2D;
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
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ob=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`#include <common>
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
}`,Bb=`#if DEPTH_PACKING == 3200
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
}`,Fb=`#define DISTANCE
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
}`,Hb=`#define DISTANCE
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
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kb=`uniform float scale;
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
}`,Xb=`uniform vec3 diffuse;
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
}`,Wb=`#include <common>
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
}`,qb=`uniform vec3 diffuse;
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
}`,Yb=`#define LAMBERT
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
}`,jb=`#define LAMBERT
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
}`,Zb=`#define MATCAP
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
}`,Kb=`#define MATCAP
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
}`,Qb=`#define NORMAL
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
}`,Jb=`#define NORMAL
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
}`,$b=`#define PHONG
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
}`,tT=`#define PHONG
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
}`,eT=`#define STANDARD
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
}`,nT=`#define STANDARD
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
}`,iT=`#define TOON
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
}`,aT=`#define TOON
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
}`,rT=`uniform float size;
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
}`,sT=`uniform vec3 diffuse;
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
}`,oT=`#include <common>
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
}`,lT=`uniform vec3 color;
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
}`,cT=`uniform float rotation;
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
}`,uT=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:LE,alphahash_pars_fragment:NE,alphamap_fragment:OE,alphamap_pars_fragment:PE,alphatest_fragment:zE,alphatest_pars_fragment:IE,aomap_fragment:BE,aomap_pars_fragment:FE,batching_pars_vertex:HE,batching_vertex:GE,begin_vertex:VE,beginnormal_vertex:kE,bsdfs:XE,iridescence_fragment:WE,bumpmap_pars_fragment:qE,clipping_planes_fragment:YE,clipping_planes_pars_fragment:jE,clipping_planes_pars_vertex:ZE,clipping_planes_vertex:KE,color_fragment:QE,color_pars_fragment:JE,color_pars_vertex:$E,color_vertex:t1,common:e1,cube_uv_reflection_fragment:n1,defaultnormal_vertex:i1,displacementmap_pars_vertex:a1,displacementmap_vertex:r1,emissivemap_fragment:s1,emissivemap_pars_fragment:o1,colorspace_fragment:l1,colorspace_pars_fragment:c1,envmap_fragment:u1,envmap_common_pars_fragment:f1,envmap_pars_fragment:h1,envmap_pars_vertex:d1,envmap_physical_pars_fragment:b1,envmap_vertex:p1,fog_vertex:m1,fog_pars_vertex:g1,fog_fragment:_1,fog_pars_fragment:v1,gradientmap_pars_fragment:y1,lightmap_pars_fragment:S1,lights_lambert_fragment:x1,lights_lambert_pars_fragment:M1,lights_pars_begin:E1,lights_toon_fragment:T1,lights_toon_pars_fragment:A1,lights_phong_fragment:R1,lights_phong_pars_fragment:w1,lights_physical_fragment:C1,lights_physical_pars_fragment:D1,lights_fragment_begin:U1,lights_fragment_maps:L1,lights_fragment_end:N1,logdepthbuf_fragment:O1,logdepthbuf_pars_fragment:P1,logdepthbuf_pars_vertex:z1,logdepthbuf_vertex:I1,map_fragment:B1,map_pars_fragment:F1,map_particle_fragment:H1,map_particle_pars_fragment:G1,metalnessmap_fragment:V1,metalnessmap_pars_fragment:k1,morphinstance_vertex:X1,morphcolor_vertex:W1,morphnormal_vertex:q1,morphtarget_pars_vertex:Y1,morphtarget_vertex:j1,normal_fragment_begin:Z1,normal_fragment_maps:K1,normal_pars_fragment:Q1,normal_pars_vertex:J1,normal_vertex:$1,normalmap_pars_fragment:tb,clearcoat_normal_fragment_begin:eb,clearcoat_normal_fragment_maps:nb,clearcoat_pars_fragment:ib,iridescence_pars_fragment:ab,opaque_fragment:rb,packing:sb,premultiplied_alpha_fragment:ob,project_vertex:lb,dithering_fragment:cb,dithering_pars_fragment:ub,roughnessmap_fragment:fb,roughnessmap_pars_fragment:hb,shadowmap_pars_fragment:db,shadowmap_pars_vertex:pb,shadowmap_vertex:mb,shadowmask_pars_fragment:gb,skinbase_vertex:_b,skinning_pars_vertex:vb,skinning_vertex:yb,skinnormal_vertex:Sb,specularmap_fragment:xb,specularmap_pars_fragment:Mb,tonemapping_fragment:Eb,tonemapping_pars_fragment:bb,transmission_fragment:Tb,transmission_pars_fragment:Ab,uv_pars_fragment:Rb,uv_pars_vertex:wb,uv_vertex:Cb,worldpos_vertex:Db,background_vert:Ub,background_frag:Lb,backgroundCube_vert:Nb,backgroundCube_frag:Ob,cube_vert:Pb,cube_frag:zb,depth_vert:Ib,depth_frag:Bb,distanceRGBA_vert:Fb,distanceRGBA_frag:Hb,equirect_vert:Gb,equirect_frag:Vb,linedashed_vert:kb,linedashed_frag:Xb,meshbasic_vert:Wb,meshbasic_frag:qb,meshlambert_vert:Yb,meshlambert_frag:jb,meshmatcap_vert:Zb,meshmatcap_frag:Kb,meshnormal_vert:Qb,meshnormal_frag:Jb,meshphong_vert:$b,meshphong_frag:tT,meshphysical_vert:eT,meshphysical_frag:nT,meshtoon_vert:iT,meshtoon_frag:aT,points_vert:rT,points_frag:sT,shadow_vert:oT,shadow_frag:lT,sprite_vert:cT,sprite_frag:uT},It={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Ii={basic:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Se(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Hn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Hn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Se(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Hn([It.points,It.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Hn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Hn([It.common,It.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Hn([It.sprite,It.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Hn([It.common,It.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Hn([It.lights,It.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Ii.physical={uniforms:Hn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const jc={r:0,b:0,g:0},Mr=new Vi,fT=new je;function hT(s,t,i,r,l,c,f){const d=new Se(0);let p=c===!0?0:1,m,v,_=null,y=0,M=null;function E(C){let R=C.isScene===!0?C.background:null;return R&&R.isTexture&&(R=(C.backgroundBlurriness>0?i:t).get(R)),R}function b(C){let R=!1;const V=E(C);V===null?g(d,p):V&&V.isColor&&(g(V,1),R=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(C,R){const V=E(R);V&&(V.isCubeTexture||V.mapping===_u)?(v===void 0&&(v=new en(new sl(1,1,1),new Qa({name:"BackgroundCubeMaterial",uniforms:Hs(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(O,N,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Mr.copy(R.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),v.material.uniforms.envMap.value=V,v.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(fT.makeRotationFromEuler(Mr)),v.material.toneMapped=Oe.getTransfer(V.colorSpace)!==ke,(_!==V||y!==V.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,_=V,y=V.version,M=s.toneMapping),v.layers.enableAll(),C.unshift(v,v.geometry,v.material,0,0,null)):V&&V.isTexture&&(m===void 0&&(m=new en(new ll(2,2),new Qa({name:"BackgroundMaterial",uniforms:Hs(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=V,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=Oe.getTransfer(V.colorSpace)!==ke,V.matrixAutoUpdate===!0&&V.updateMatrix(),m.material.uniforms.uvTransform.value.copy(V.matrix),(_!==V||y!==V.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,_=V,y=V.version,M=s.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function g(C,R){C.getRGB(jc,gy(s)),r.buffers.color.setClear(jc.r,jc.g,jc.b,R,f)}function T(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(C,R=1){d.set(C),p=R,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,g(d,p)},render:b,addToRenderList:S,dispose:T}}function dT(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,f=!1;function d(w,G,$,j,et){let st=!1;const B=_(j,$,G);c!==B&&(c=B,m(c.object)),st=M(w,j,$,et),st&&E(w,j,$,et),et!==null&&t.update(et,s.ELEMENT_ARRAY_BUFFER),(st||f)&&(f=!1,R(w,G,$,j),et!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function p(){return s.createVertexArray()}function m(w){return s.bindVertexArray(w)}function v(w){return s.deleteVertexArray(w)}function _(w,G,$){const j=$.wireframe===!0;let et=r[w.id];et===void 0&&(et={},r[w.id]=et);let st=et[G.id];st===void 0&&(st={},et[G.id]=st);let B=st[j];return B===void 0&&(B=y(p()),st[j]=B),B}function y(w){const G=[],$=[],j=[];for(let et=0;et<i;et++)G[et]=0,$[et]=0,j[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:$,attributeDivisors:j,object:w,attributes:{},index:null}}function M(w,G,$,j){const et=c.attributes,st=G.attributes;let B=0;const W=$.getAttributes();for(const K in W)if(W[K].location>=0){const Tt=et[K];let P=st[K];if(P===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(P=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(P=w.instanceColor)),Tt===void 0||Tt.attribute!==P||P&&Tt.data!==P.data)return!0;B++}return c.attributesNum!==B||c.index!==j}function E(w,G,$,j){const et={},st=G.attributes;let B=0;const W=$.getAttributes();for(const K in W)if(W[K].location>=0){let Tt=st[K];Tt===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(Tt=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(Tt=w.instanceColor));const P={};P.attribute=Tt,Tt&&Tt.data&&(P.data=Tt.data),et[K]=P,B++}c.attributes=et,c.attributesNum=B,c.index=j}function b(){const w=c.newAttributes;for(let G=0,$=w.length;G<$;G++)w[G]=0}function S(w){g(w,0)}function g(w,G){const $=c.newAttributes,j=c.enabledAttributes,et=c.attributeDivisors;$[w]=1,j[w]===0&&(s.enableVertexAttribArray(w),j[w]=1),et[w]!==G&&(s.vertexAttribDivisor(w,G),et[w]=G)}function T(){const w=c.newAttributes,G=c.enabledAttributes;for(let $=0,j=G.length;$<j;$++)G[$]!==w[$]&&(s.disableVertexAttribArray($),G[$]=0)}function C(w,G,$,j,et,st,B){B===!0?s.vertexAttribIPointer(w,G,$,et,st):s.vertexAttribPointer(w,G,$,j,et,st)}function R(w,G,$,j){b();const et=j.attributes,st=$.getAttributes(),B=G.defaultAttributeValues;for(const W in st){const K=st[W];if(K.location>=0){let _t=et[W];if(_t===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(_t=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(_t=w.instanceColor)),_t!==void 0){const Tt=_t.normalized,P=_t.itemSize,nt=t.get(_t);if(nt===void 0)continue;const xt=nt.buffer,Q=nt.type,ft=nt.bytesPerElement,Rt=Q===s.INT||Q===s.UNSIGNED_INT||_t.gpuType===mp;if(_t.isInterleavedBufferAttribute){const gt=_t.data,Dt=gt.stride,Xt=_t.offset;if(gt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<K.locationSize;Vt++)g(K.location+Vt,gt.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Vt=0;Vt<K.locationSize;Vt++)S(K.location+Vt);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let Vt=0;Vt<K.locationSize;Vt++)C(K.location+Vt,P/K.locationSize,Q,Tt,Dt*ft,(Xt+P/K.locationSize*Vt)*ft,Rt)}else{if(_t.isInstancedBufferAttribute){for(let gt=0;gt<K.locationSize;gt++)g(K.location+gt,_t.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let gt=0;gt<K.locationSize;gt++)S(K.location+gt);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let gt=0;gt<K.locationSize;gt++)C(K.location+gt,P/K.locationSize,Q,Tt,P*ft,P/K.locationSize*gt*ft,Rt)}}else if(B!==void 0){const Tt=B[W];if(Tt!==void 0)switch(Tt.length){case 2:s.vertexAttrib2fv(K.location,Tt);break;case 3:s.vertexAttrib3fv(K.location,Tt);break;case 4:s.vertexAttrib4fv(K.location,Tt);break;default:s.vertexAttrib1fv(K.location,Tt)}}}}T()}function V(){z();for(const w in r){const G=r[w];for(const $ in G){const j=G[$];for(const et in j)v(j[et].object),delete j[et];delete G[$]}delete r[w]}}function O(w){if(r[w.id]===void 0)return;const G=r[w.id];for(const $ in G){const j=G[$];for(const et in j)v(j[et].object),delete j[et];delete G[$]}delete r[w.id]}function N(w){for(const G in r){const $=r[G];if($[w.id]===void 0)continue;const j=$[w.id];for(const et in j)v(j[et].object),delete j[et];delete $[w.id]}}function z(){D(),f=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:z,resetDefaultState:D,dispose:V,releaseStatesOfGeometry:O,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:S,disableUnusedAttributes:T}}function pT(s,t,i){let r;function l(m){r=m}function c(m,v){s.drawArrays(r,m,v),i.update(v,r,1)}function f(m,v,_){_!==0&&(s.drawArraysInstanced(r,m,v,_),i.update(v,r,_))}function d(m,v,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,_);let M=0;for(let E=0;E<_;E++)M+=v[E];i.update(M,r,1)}function p(m,v,_,y){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)f(m[E],v[E],y[E]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,v,0,y,0,_);let E=0;for(let b=0;b<_;b++)E+=v[b]*y[b];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function mT(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(N){return!(N!==Ci&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const z=N===nl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Gi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==pa&&!z)}function p(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:R,vertexTextures:V,maxSamples:O}}function gT(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new br,d=new ge,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const M=_.length!==0||y||r!==0||l;return l=y,r=_.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){i=v(_,y,0)},this.setState=function(_,y,M){const E=_.clippingPlanes,b=_.clipIntersection,S=_.clipShadows,g=s.get(_);if(!l||E===null||E.length===0||c&&!S)c?v(null):m();else{const T=c?0:r,C=T*4;let R=g.clippingState||null;p.value=R,R=v(E,y,C,M);for(let V=0;V!==C;++V)R[V]=i[V];g.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(_,y,M,E){const b=_!==null?_.length:0;let S=null;if(b!==0){if(S=p.value,E!==!0||S===null){const g=M+b*4,T=y.matrixWorldInverse;d.getNormalMatrix(T),(S===null||S.length<g)&&(S=new Float32Array(g));for(let C=0,R=M;C!==b;++C,R+=4)f.copy(_[C]).applyMatrix4(T,d),f.normal.toArray(S,R),S[R+3]=f.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function _T(s){let t=new WeakMap;function i(f,d){return d===Cd?f.mapping=Is:d===Dd&&(f.mapping=Bs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Cd||d===Dd)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new pE(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ls=4,pv=[.125,.215,.35,.446,.526,.582],Rr=20,ud=new Ey,mv=new Se;let fd=null,hd=0,dd=0,pd=!1;const Tr=(1+Math.sqrt(5))/2,Ds=1/Tr,gv=[new Y(-Tr,Ds,0),new Y(Tr,Ds,0),new Y(-Ds,0,Tr),new Y(Ds,0,Tr),new Y(0,Tr,-Ds),new Y(0,Tr,Ds),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],vT=new Y;class _v{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:d=vT}=c;fd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),dd=this._renderer.getActiveMipmapLevel(),pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fd,hd,dd),this._renderer.xr.enabled=pd,t.scissorTest=!1,Zc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Is||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),dd=this._renderer.getActiveMipmapLevel(),pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:nl,format:Ci,colorSpace:Fs,depthBuffer:!1},l=vv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vv(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yT(c)),this._blurMaterial=ST(c,t,i)}return l}_compileMaterial(t){const i=new en(this._lodPlanes[0],t);this._renderer.compile(i,ud)}_sceneToCubeUV(t,i,r,l,c){const p=new Gn(90,1,i,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,M=_.toneMapping;_.getClearColor(mv),_.toneMapping=ja,_.autoClear=!1;const E=new vi({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),b=new en(new sl,E);let S=!1;const g=t.background;g?g.isColor&&(E.color.copy(g),t.background=null,S=!0):(E.color.copy(mv),S=!0);for(let T=0;T<6;T++){const C=T%3;C===0?(p.up.set(0,m[T],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[T],c.y,c.z)):C===1?(p.up.set(0,0,m[T]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[T],c.z)):(p.up.set(0,m[T],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[T]));const R=this._cubeSize;Zc(l,C*R,T>2?R:0,R,R),_.setRenderTarget(l),S&&_.render(b,p),_.render(t,p)}b.geometry.dispose(),b.material.dispose(),_.toneMapping=M,_.autoClear=y,t.background=g}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Is||t.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new en(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;Zc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(f,ud)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=gv[(l-c-1)%gv.length];this._blur(t,c-1,c,f,d)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new en(this._lodPlanes[l],m),y=m.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Rr-1),b=c/E,S=isFinite(c)?1+Math.floor(v*b):Rr;S>Rr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Rr}`);const g=[];let T=0;for(let N=0;N<Rr;++N){const z=N/b,D=Math.exp(-z*z/2);g.push(D),N===0?T+=D:N<S&&(T+=2*D)}for(let N=0;N<g.length;N++)g[N]=g[N]/T;y.envMap.value=t.texture,y.samples.value=S,y.weights.value=g,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:C}=this;y.dTheta.value=E,y.mipInt.value=C-r;const R=this._sizeLods[l],V=3*R*(l>C-Ls?l-C+Ls:0),O=4*(this._cubeSize-R);Zc(i,V,O,3*R,2*R),p.setRenderTarget(i),p.render(_,ud)}}function yT(s){const t=[],i=[],r=[];let l=s;const c=s-Ls+1+pv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>s-Ls?p=pv[f-s+Ls-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,_=1+m,y=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,E=6,b=3,S=2,g=1,T=new Float32Array(b*E*M),C=new Float32Array(S*E*M),R=new Float32Array(g*E*M);for(let O=0;O<M;O++){const N=O%3*2/3-1,z=O>2?0:-1,D=[N,z,0,N+2/3,z,0,N+2/3,z+1,0,N,z,0,N+2/3,z+1,0,N,z+1,0];T.set(D,b*E*O),C.set(y,S*E*O);const w=[O,O,O,O,O,O];R.set(w,g*E*O)}const V=new ln;V.setAttribute("position",new Dn(T,b)),V.setAttribute("uv",new Dn(C,S)),V.setAttribute("faceIndex",new Dn(R,g)),t.push(V),l>Ls&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function vv(s,t,i){const r=new Lr(s,t,i);return r.texture.mapping=_u,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Zc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function ST(s,t,i){const r=new Float32Array(Rr),l=new Y(0,1,0);return new Qa({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Op(),fragmentShader:`

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
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function yv(){return new Qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Op(),fragmentShader:`

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
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function Sv(){return new Qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function Op(){return`

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
	`}function xT(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Cd||p===Dd,v=p===Is||p===Bs;if(m||v){let _=t.get(d);const y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new _v(s)),_=m?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return m&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new _v(s)),_=m?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function MT(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Os("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function ET(s,t,i,r){const l={},c=new WeakMap;function f(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",f),delete l[y.id];const M=c.get(y);M&&(t.remove(M),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(_,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function p(_){const y=_.attributes;for(const M in y)t.update(y[M],s.ARRAY_BUFFER)}function m(_){const y=[],M=_.index,E=_.attributes.position;let b=0;if(M!==null){const T=M.array;b=M.version;for(let C=0,R=T.length;C<R;C+=3){const V=T[C+0],O=T[C+1],N=T[C+2];y.push(V,O,O,N,N,V)}}else if(E!==void 0){const T=E.array;b=E.version;for(let C=0,R=T.length/3-1;C<R;C+=3){const V=C+0,O=C+1,N=C+2;y.push(V,O,O,N,N,V)}}else return;const S=new(fy(y)?my:py)(y,1);S.version=b;const g=c.get(_);g&&t.remove(g),c.set(_,S)}function v(_){const y=c.get(_);if(y){const M=_.index;M!==null&&y.version<M.version&&m(_)}else m(_);return c.get(_)}return{get:d,update:p,getWireframeAttribute:v}}function bT(s,t,i){let r;function l(y){r=y}let c,f;function d(y){c=y.type,f=y.bytesPerElement}function p(y,M){s.drawElements(r,M,c,y*f),i.update(M,r,1)}function m(y,M,E){E!==0&&(s.drawElementsInstanced(r,M,c,y*f,E),i.update(M,r,E))}function v(y,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,y,0,E);let S=0;for(let g=0;g<E;g++)S+=M[g];i.update(S,r,1)}function _(y,M,E,b){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<y.length;g++)m(y[g]/f,M[g],b[g]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,y,0,b,0,E);let g=0;for(let T=0;T<E;T++)g+=M[T]*b[T];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function TT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function AT(s,t,i){const r=new WeakMap,l=new We;function c(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let y=r.get(d);if(y===void 0||y.count!==_){let w=function(){z.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var M=w;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],C=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),b===!0&&(R=2),S===!0&&(R=3);let V=d.attributes.position.count*R,O=1;V>t.maxTextureSize&&(O=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const N=new Float32Array(V*O*4*_),z=new hy(N,V,O,_);z.type=pa,z.needsUpdate=!0;const D=R*4;for(let G=0;G<_;G++){const $=g[G],j=T[G],et=C[G],st=V*O*4*G;for(let B=0;B<$.count;B++){const W=B*D;E===!0&&(l.fromBufferAttribute($,B),N[st+W+0]=l.x,N[st+W+1]=l.y,N[st+W+2]=l.z,N[st+W+3]=0),b===!0&&(l.fromBufferAttribute(j,B),N[st+W+4]=l.x,N[st+W+5]=l.y,N[st+W+6]=l.z,N[st+W+7]=0),S===!0&&(l.fromBufferAttribute(et,B),N[st+W+8]=l.x,N[st+W+9]=l.y,N[st+W+10]=l.z,N[st+W+11]=et.itemSize===4?l.w:1)}}y={count:_,texture:z,size:new fe(V,O)},r.set(d,y),d.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<m.length;S++)E+=m[S];const b=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",b),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function RT(s,t,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,v=p.geometry,_=t.get(p,v);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return _}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const Ty=new Vn,xv=new xy(1,1),Ay=new hy,Ry=new QM,wy=new vy,Mv=[],Ev=[],bv=new Float32Array(16),Tv=new Float32Array(9),Av=new Float32Array(4);function Vs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=Mv[l];if(c===void 0&&(c=new Float32Array(l),Mv[l]=c),t!==0){r.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,s[f].toArray(c,d)}return c}function vn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function yn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function xu(s,t){let i=Ev[t];i===void 0&&(i=new Int32Array(t),Ev[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function wT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function CT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2fv(this.addr,t),yn(i,t)}}function DT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;s.uniform3fv(this.addr,t),yn(i,t)}}function UT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4fv(this.addr,t),yn(i,t)}}function LT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(vn(i,r))return;Av.set(r),s.uniformMatrix2fv(this.addr,!1,Av),yn(i,r)}}function NT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(vn(i,r))return;Tv.set(r),s.uniformMatrix3fv(this.addr,!1,Tv),yn(i,r)}}function OT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(vn(i,r))return;bv.set(r),s.uniformMatrix4fv(this.addr,!1,bv),yn(i,r)}}function PT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function zT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2iv(this.addr,t),yn(i,t)}}function IT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3iv(this.addr,t),yn(i,t)}}function BT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4iv(this.addr,t),yn(i,t)}}function FT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function HT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2uiv(this.addr,t),yn(i,t)}}function GT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3uiv(this.addr,t),yn(i,t)}}function VT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4uiv(this.addr,t),yn(i,t)}}function kT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(xv.compareFunction=uy,c=xv):c=Ty,i.setTexture2D(t||c,l)}function XT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Ry,l)}function WT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||wy,l)}function qT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Ay,l)}function YT(s){switch(s){case 5126:return wT;case 35664:return CT;case 35665:return DT;case 35666:return UT;case 35674:return LT;case 35675:return NT;case 35676:return OT;case 5124:case 35670:return PT;case 35667:case 35671:return zT;case 35668:case 35672:return IT;case 35669:case 35673:return BT;case 5125:return FT;case 36294:return HT;case 36295:return GT;case 36296:return VT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return qT}}function jT(s,t){s.uniform1fv(this.addr,t)}function ZT(s,t){const i=Vs(t,this.size,2);s.uniform2fv(this.addr,i)}function KT(s,t){const i=Vs(t,this.size,3);s.uniform3fv(this.addr,i)}function QT(s,t){const i=Vs(t,this.size,4);s.uniform4fv(this.addr,i)}function JT(s,t){const i=Vs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function $T(s,t){const i=Vs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function tA(s,t){const i=Vs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function eA(s,t){s.uniform1iv(this.addr,t)}function nA(s,t){s.uniform2iv(this.addr,t)}function iA(s,t){s.uniform3iv(this.addr,t)}function aA(s,t){s.uniform4iv(this.addr,t)}function rA(s,t){s.uniform1uiv(this.addr,t)}function sA(s,t){s.uniform2uiv(this.addr,t)}function oA(s,t){s.uniform3uiv(this.addr,t)}function lA(s,t){s.uniform4uiv(this.addr,t)}function cA(s,t,i){const r=this.cache,l=t.length,c=xu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||Ty,c[f])}function uA(s,t,i){const r=this.cache,l=t.length,c=xu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Ry,c[f])}function fA(s,t,i){const r=this.cache,l=t.length,c=xu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||wy,c[f])}function hA(s,t,i){const r=this.cache,l=t.length,c=xu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Ay,c[f])}function dA(s){switch(s){case 5126:return jT;case 35664:return ZT;case 35665:return KT;case 35666:return QT;case 35674:return JT;case 35675:return $T;case 35676:return tA;case 5124:case 35670:return eA;case 35667:case 35671:return nA;case 35668:case 35672:return iA;case 35669:case 35673:return aA;case 5125:return rA;case 36294:return sA;case 36295:return oA;case 36296:return lA;case 35678:case 36198:case 36298:case 36306:case 35682:return cA;case 35679:case 36299:case 36307:return uA;case 35680:case 36300:case 36308:case 36293:return fA;case 36289:case 36303:case 36311:case 36292:return hA}}class pA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=YT(i.type)}}class mA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=dA(i.type)}}class gA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const md=/(\w+)(\])?(\[|\.)?/g;function Rv(s,t){s.seq.push(t),s.map[t.id]=t}function _A(s,t,i){const r=s.name,l=r.length;for(md.lastIndex=0;;){const c=md.exec(r),f=md.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){Rv(i,m===void 0?new pA(d,s,t):new mA(d,s,t));break}else{let _=i.map[d];_===void 0&&(_=new gA(d),Rv(i,_)),i=_}}}class iu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);_A(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function wv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const vA=37297;let yA=0;function SA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;r.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const Cv=new ge;function xA(s){Oe._getMatrix(Cv,Oe.workingColorSpace,s);const t=`mat3( ${Cv.elements.map(i=>i.toFixed(4))} )`;switch(Oe.getTransfer(s)){case ru:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Dv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+SA(s.getShaderSource(t),f)}else return l}function MA(s,t){const i=xA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function EA(s,t){let i;switch(t){case EM:i="Linear";break;case bM:i="Reinhard";break;case TM:i="Cineon";break;case AM:i="ACESFilmic";break;case wM:i="AgX";break;case CM:i="Neutral";break;case RM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Kc=new Y;function bA(){Oe.getLuminanceCoefficients(Kc);const s=Kc.x.toFixed(4),t=Kc.y.toFixed(4),i=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function AA(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function RA(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:d}}return i}function qo(s){return s!==""}function Uv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wA=/^[ \t]*#include +<([\w\d./]+)>/gm;function up(s){return s.replace(wA,DA)}const CA=new Map;function DA(s,t){let i=ve[t];if(i===void 0){const r=CA.get(t);if(r!==void 0)i=ve[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return up(i)}const UA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nv(s){return s.replace(UA,LA)}function LA(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Ov(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function NA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Qv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Jv?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===da&&(t="SHADOWMAP_TYPE_VSM"),t}function OA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Is:case Bs:t="ENVMAP_TYPE_CUBE";break;case _u:t="ENVMAP_TYPE_CUBE_UV";break}return t}function PA(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Bs&&(t="ENVMAP_MODE_REFRACTION"),t}function zA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $v:t="ENVMAP_BLENDING_MULTIPLY";break;case xM:t="ENVMAP_BLENDING_MIX";break;case MM:t="ENVMAP_BLENDING_ADD";break}return t}function IA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function BA(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=NA(i),m=OA(i),v=PA(i),_=zA(i),y=IA(i),M=TA(i),E=AA(c),b=l.createProgram();let S,g,T=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(qo).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(qo).join(`
`),g.length>0&&(g+=`
`)):(S=[Ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),g=[Ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ja?"#define TONE_MAPPING":"",i.toneMapping!==ja?ve.tonemapping_pars_fragment:"",i.toneMapping!==ja?EA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,MA("linearToOutputTexel",i.outputColorSpace),bA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),f=up(f),f=Uv(f,i),f=Lv(f,i),d=up(d),d=Uv(d,i),d=Lv(d,i),f=Nv(f),d=Nv(d),i.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",i.glslVersion===z_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===z_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const C=T+S+f,R=T+g+d,V=wv(l,l.VERTEX_SHADER,C),O=wv(l,l.FRAGMENT_SHADER,R);l.attachShader(b,V),l.attachShader(b,O),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function N(G){if(s.debug.checkShaderErrors){const $=l.getProgramInfoLog(b).trim(),j=l.getShaderInfoLog(V).trim(),et=l.getShaderInfoLog(O).trim();let st=!0,B=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(st=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,b,V,O);else{const W=Dv(l,V,"vertex"),K=Dv(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+$+`
`+W+`
`+K)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(j===""||et==="")&&(B=!1);B&&(G.diagnostics={runnable:st,programLog:$,vertexShader:{log:j,prefix:S},fragmentShader:{log:et,prefix:g}})}l.deleteShader(V),l.deleteShader(O),z=new iu(l,b),D=RA(l,b)}let z;this.getUniforms=function(){return z===void 0&&N(this),z};let D;this.getAttributes=function(){return D===void 0&&N(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(b,vA)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=yA++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=V,this.fragmentShader=O,this}let FA=0;class HA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new GA(t),i.set(t,r)),r}}class GA{constructor(t){this.id=FA++,this.code=t,this.usedTimes=0}}function VA(s,t,i,r,l,c,f){const d=new Mp,p=new HA,m=new Set,v=[],_=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return m.add(D),D===0?"uv":`uv${D}`}function S(D,w,G,$,j){const et=$.fog,st=j.geometry,B=D.isMeshStandardMaterial?$.environment:null,W=(D.isMeshStandardMaterial?i:t).get(D.envMap||B),K=W&&W.mapping===_u?W.image.height:null,_t=E[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const Tt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,P=Tt!==void 0?Tt.length:0;let nt=0;st.morphAttributes.position!==void 0&&(nt=1),st.morphAttributes.normal!==void 0&&(nt=2),st.morphAttributes.color!==void 0&&(nt=3);let xt,Q,ft,Rt;if(_t){const De=Ii[_t];xt=De.vertexShader,Q=De.fragmentShader}else xt=D.vertexShader,Q=D.fragmentShader,p.update(D),ft=p.getVertexShaderID(D),Rt=p.getFragmentShaderID(D);const gt=s.getRenderTarget(),Dt=s.state.buffers.depth.getReversed(),Xt=j.isInstancedMesh===!0,Vt=j.isBatchedMesh===!0,St=!!D.map,Et=!!D.matcap,Bt=!!W,F=!!D.aoMap,he=!!D.lightMap,Jt=!!D.bumpMap,ue=!!D.normalMap,Pt=!!D.displacementMap,ie=!!D.emissiveMap,jt=!!D.metalnessMap,re=!!D.roughnessMap,Ze=D.anisotropy>0,H=D.clearcoat>0,A=D.dispersion>0,rt=D.iridescence>0,mt=D.sheen>0,bt=D.transmission>0,ht=Ze&&!!D.anisotropyMap,Zt=H&&!!D.clearcoatMap,Ut=H&&!!D.clearcoatNormalMap,qt=H&&!!D.clearcoatRoughnessMap,Kt=rt&&!!D.iridescenceMap,Mt=rt&&!!D.iridescenceThicknessMap,Lt=mt&&!!D.sheenColorMap,$t=mt&&!!D.sheenRoughnessMap,Wt=!!D.specularMap,Nt=!!D.specularColorMap,se=!!D.specularIntensityMap,q=bt&&!!D.transmissionMap,Ot=bt&&!!D.thicknessMap,At=!!D.gradientMap,Ht=!!D.alphaMap,wt=D.alphaTest>0,vt=!!D.alphaHash,Gt=!!D.extensions;let oe=ja;D.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(oe=s.toneMapping);const ze={shaderID:_t,shaderType:D.type,shaderName:D.name,vertexShader:xt,fragmentShader:Q,defines:D.defines,customVertexShaderID:ft,customFragmentShaderID:Rt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Vt,batchingColor:Vt&&j._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&j.instanceColor!==null,instancingMorph:Xt&&j.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:gt===null?s.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Fs,alphaToCoverage:!!D.alphaToCoverage,map:St,matcap:Et,envMap:Bt,envMapMode:Bt&&W.mapping,envMapCubeUVHeight:K,aoMap:F,lightMap:he,bumpMap:Jt,normalMap:ue,displacementMap:y&&Pt,emissiveMap:ie,normalMapObjectSpace:ue&&D.normalMapType===NM,normalMapTangentSpace:ue&&D.normalMapType===cy,metalnessMap:jt,roughnessMap:re,anisotropy:Ze,anisotropyMap:ht,clearcoat:H,clearcoatMap:Zt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:qt,dispersion:A,iridescence:rt,iridescenceMap:Kt,iridescenceThicknessMap:Mt,sheen:mt,sheenColorMap:Lt,sheenRoughnessMap:$t,specularMap:Wt,specularColorMap:Nt,specularIntensityMap:se,transmission:bt,transmissionMap:q,thicknessMap:Ot,gradientMap:At,opaque:D.transparent===!1&&D.blending===Ns&&D.alphaToCoverage===!1,alphaMap:Ht,alphaTest:wt,alphaHash:vt,combine:D.combine,mapUv:St&&b(D.map.channel),aoMapUv:F&&b(D.aoMap.channel),lightMapUv:he&&b(D.lightMap.channel),bumpMapUv:Jt&&b(D.bumpMap.channel),normalMapUv:ue&&b(D.normalMap.channel),displacementMapUv:Pt&&b(D.displacementMap.channel),emissiveMapUv:ie&&b(D.emissiveMap.channel),metalnessMapUv:jt&&b(D.metalnessMap.channel),roughnessMapUv:re&&b(D.roughnessMap.channel),anisotropyMapUv:ht&&b(D.anisotropyMap.channel),clearcoatMapUv:Zt&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:$t&&b(D.sheenRoughnessMap.channel),specularMapUv:Wt&&b(D.specularMap.channel),specularColorMapUv:Nt&&b(D.specularColorMap.channel),specularIntensityMapUv:se&&b(D.specularIntensityMap.channel),transmissionMapUv:q&&b(D.transmissionMap.channel),thicknessMapUv:Ot&&b(D.thicknessMap.channel),alphaMapUv:Ht&&b(D.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(ue||Ze),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!st.attributes.uv&&(St||Ht),fog:!!et,useFog:D.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Dt,skinning:j.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,decodeVideoTexture:St&&D.map.isVideoTexture===!0&&Oe.getTransfer(D.map.colorSpace)===ke,decodeVideoTextureEmissive:ie&&D.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(D.emissiveMap.colorSpace)===ke,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===wi,flipSided:D.side===Kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Gt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&D.extensions.multiDraw===!0||Vt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return ze.vertexUv1s=m.has(1),ze.vertexUv2s=m.has(2),ze.vertexUv3s=m.has(3),m.clear(),ze}function g(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)w.push(G),w.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(T(w,D),C(w,D),w.push(s.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function T(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function C(D,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),D.push(d.mask)}function R(D){const w=E[D.type];let G;if(w){const $=Ii[w];G=uE.clone($.uniforms)}else G=D.uniforms;return G}function V(D,w){let G;for(let $=0,j=v.length;$<j;$++){const et=v[$];if(et.cacheKey===w){G=et,++G.usedTimes;break}}return G===void 0&&(G=new BA(s,w,D,c),v.push(G)),G}function O(D){if(--D.usedTimes===0){const w=v.indexOf(D);v[w]=v[v.length-1],v.pop(),D.destroy()}}function N(D){p.remove(D)}function z(){p.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:R,acquireProgram:V,releaseProgram:O,releaseShaderCache:N,programs:v,dispose:z}}function kA(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,p){s.get(f)[d]=p}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function XA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Pv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function zv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(_,y,M,E,b,S){let g=s[t];return g===void 0?(g={id:_.id,object:_,geometry:y,material:M,groupOrder:E,renderOrder:_.renderOrder,z:b,group:S},s[t]=g):(g.id=_.id,g.object=_,g.geometry=y,g.material=M,g.groupOrder=E,g.renderOrder=_.renderOrder,g.z=b,g.group=S),t++,g}function d(_,y,M,E,b,S){const g=f(_,y,M,E,b,S);M.transmission>0?r.push(g):M.transparent===!0?l.push(g):i.push(g)}function p(_,y,M,E,b,S){const g=f(_,y,M,E,b,S);M.transmission>0?r.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function m(_,y){i.length>1&&i.sort(_||XA),r.length>1&&r.sort(y||Pv),l.length>1&&l.sort(y||Pv)}function v(){for(let _=t,y=s.length;_<y;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:p,finish:v,sort:m}}function WA(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new zv,s.set(r,[f])):l>=c.length?(f=new zv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function qA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Y,color:new Se};break;case"SpotLight":i={position:new Y,direction:new Y,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new Se,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":i={color:new Se,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[t.id]=i,i}}}function YA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let jA=0;function ZA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function KA(s){const t=new qA,i=YA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Y);const l=new Y,c=new je,f=new je;function d(m){let v=0,_=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,E=0,b=0,S=0,g=0,T=0,C=0,R=0,V=0,O=0,N=0;m.sort(ZA);for(let D=0,w=m.length;D<w;D++){const G=m[D],$=G.color,j=G.intensity,et=G.distance,st=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=$.r*j,_+=$.g*j,y+=$.b*j;else if(G.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(G.sh.coefficients[B],j);N++}else if(G.isDirectionalLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const W=G.shadow,K=i.get(G);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,r.directionalShadow[M]=K,r.directionalShadowMap[M]=st,r.directionalShadowMatrix[M]=G.shadow.matrix,T++}r.directional[M]=B,M++}else if(G.isSpotLight){const B=t.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy($).multiplyScalar(j),B.distance=et,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,r.spot[b]=B;const W=G.shadow;if(G.map&&(r.spotLightMap[V]=G.map,V++,W.updateMatrices(G),G.castShadow&&O++),r.spotLightMatrix[b]=W.matrix,G.castShadow){const K=i.get(G);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,r.spotShadow[b]=K,r.spotShadowMap[b]=st,R++}b++}else if(G.isRectAreaLight){const B=t.get(G);B.color.copy($).multiplyScalar(j),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=B,S++}else if(G.isPointLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const W=G.shadow,K=i.get(G);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,K.shadowCameraNear=W.camera.near,K.shadowCameraFar=W.camera.far,r.pointShadow[E]=K,r.pointShadowMap[E]=st,r.pointShadowMatrix[E]=G.shadow.matrix,C++}r.point[E]=B,E++}else if(G.isHemisphereLight){const B=t.get(G);B.skyColor.copy(G.color).multiplyScalar(j),B.groundColor.copy(G.groundColor).multiplyScalar(j),r.hemi[g]=B,g++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=It.LTC_FLOAT_1,r.rectAreaLTC2=It.LTC_FLOAT_2):(r.rectAreaLTC1=It.LTC_HALF_1,r.rectAreaLTC2=It.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=y;const z=r.hash;(z.directionalLength!==M||z.pointLength!==E||z.spotLength!==b||z.rectAreaLength!==S||z.hemiLength!==g||z.numDirectionalShadows!==T||z.numPointShadows!==C||z.numSpotShadows!==R||z.numSpotMaps!==V||z.numLightProbes!==N)&&(r.directional.length=M,r.spot.length=b,r.rectArea.length=S,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=R+V-O,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=N,z.directionalLength=M,z.pointLength=E,z.spotLength=b,z.rectAreaLength=S,z.hemiLength=g,z.numDirectionalShadows=T,z.numPointShadows=C,z.numSpotShadows=R,z.numSpotMaps=V,z.numLightProbes=N,r.version=jA++)}function p(m,v){let _=0,y=0,M=0,E=0,b=0;const S=v.matrixWorldInverse;for(let g=0,T=m.length;g<T;g++){const C=m[g];if(C.isDirectionalLight){const R=r.directional[_];R.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(S),_++}else if(C.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(S),M++}else if(C.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(S),f.identity(),c.copy(C.matrixWorld),c.premultiply(S),f.extractRotation(c),R.halfWidth.set(C.width*.5,0,0),R.halfHeight.set(0,C.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),E++}else if(C.isPointLight){const R=r.point[y];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(S),y++}else if(C.isHemisphereLight){const R=r.hemi[b];R.direction.setFromMatrixPosition(C.matrixWorld),R.direction.transformDirection(S),b++}}}return{setup:d,setupView:p,state:r}}function Iv(s){const t=new KA(s),i=[],r=[];function l(v){m.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function f(v){r.push(v)}function d(){t.setup(i)}function p(v){t.setupView(i,v)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function QA(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Iv(s),t.set(l,[d])):c>=f.length?(d=new Iv(s),f.push(d)):d=f[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const JA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$A=`uniform sampler2D shadow_pass;
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
}`;function t2(s,t,i){let r=new Tp;const l=new fe,c=new fe,f=new We,d=new EE({depthPacking:LM}),p=new bE,m={},v=i.maxTextureSize,_={[Ka]:Kn,[Kn]:Ka,[wi]:wi},y=new Qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:JA,fragmentShader:$A}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const E=new ln;E.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new en(E,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qv;let g=this.type;this.render=function(O,N,z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const D=s.getRenderTarget(),w=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Ya),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const j=g!==da&&this.type===da,et=g===da&&this.type!==da;for(let st=0,B=O.length;st<B;st++){const W=O[st],K=W.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const _t=K.getFrameExtents();if(l.multiply(_t),c.copy(K.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/_t.x),l.x=c.x*_t.x,K.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/_t.y),l.y=c.y*_t.y,K.mapSize.y=c.y)),K.map===null||j===!0||et===!0){const P=this.type!==da?{minFilter:Di,magFilter:Di}:{};K.map!==null&&K.map.dispose(),K.map=new Lr(l.x,l.y,P),K.map.texture.name=W.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const Tt=K.getViewportCount();for(let P=0;P<Tt;P++){const nt=K.getViewport(P);f.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),$.viewport(f),K.updateMatrices(W,P),r=K.getFrustum(),R(N,z,K.camera,W,this.type)}K.isPointLightShadow!==!0&&this.type===da&&T(K,z),K.needsUpdate=!1}g=this.type,S.needsUpdate=!1,s.setRenderTarget(D,w,G)};function T(O,N){const z=t.update(b);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Lr(l.x,l.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(N,null,z,y,b,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(N,null,z,M,b,null)}function C(O,N,z,D){let w=null;const G=z.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)w=G;else if(w=z.isPointLight===!0?p:d,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const $=w.uuid,j=N.uuid;let et=m[$];et===void 0&&(et={},m[$]=et);let st=et[j];st===void 0&&(st=w.clone(),et[j]=st,N.addEventListener("dispose",V)),w=st}if(w.visible=N.visible,w.wireframe=N.wireframe,D===da?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:_[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const $=s.properties.get(w);$.light=z}return w}function R(O,N,z,D,w){if(O.visible===!1)return;if(O.layers.test(N.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===da)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,O.matrixWorld);const j=t.update(O),et=O.material;if(Array.isArray(et)){const st=j.groups;for(let B=0,W=st.length;B<W;B++){const K=st[B],_t=et[K.materialIndex];if(_t&&_t.visible){const Tt=C(O,_t,D,w);O.onBeforeShadow(s,O,N,z,j,Tt,K),s.renderBufferDirect(z,null,j,Tt,O,K),O.onAfterShadow(s,O,N,z,j,Tt,K)}}}else if(et.visible){const st=C(O,et,D,w);O.onBeforeShadow(s,O,N,z,j,st,null),s.renderBufferDirect(z,null,j,st,O,null),O.onAfterShadow(s,O,N,z,j,st,null)}}const $=O.children;for(let j=0,et=$.length;j<et;j++)R($[j],N,z,D,w)}function V(O){O.target.removeEventListener("dispose",V);for(const z in m){const D=m[z],w=O.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const e2={[Md]:Ed,[bd]:Rd,[Td]:wd,[zs]:Ad,[Ed]:Md,[Rd]:bd,[wd]:Td,[Ad]:zs};function n2(s,t){function i(){let q=!1;const Ot=new We;let At=null;const Ht=new We(0,0,0,0);return{setMask:function(wt){At!==wt&&!q&&(s.colorMask(wt,wt,wt,wt),At=wt)},setLocked:function(wt){q=wt},setClear:function(wt,vt,Gt,oe,ze){ze===!0&&(wt*=oe,vt*=oe,Gt*=oe),Ot.set(wt,vt,Gt,oe),Ht.equals(Ot)===!1&&(s.clearColor(wt,vt,Gt,oe),Ht.copy(Ot))},reset:function(){q=!1,At=null,Ht.set(-1,0,0,0)}}}function r(){let q=!1,Ot=!1,At=null,Ht=null,wt=null;return{setReversed:function(vt){if(Ot!==vt){const Gt=t.get("EXT_clip_control");vt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),Ot=vt;const oe=wt;wt=null,this.setClear(oe)}},getReversed:function(){return Ot},setTest:function(vt){vt?gt(s.DEPTH_TEST):Dt(s.DEPTH_TEST)},setMask:function(vt){At!==vt&&!q&&(s.depthMask(vt),At=vt)},setFunc:function(vt){if(Ot&&(vt=e2[vt]),Ht!==vt){switch(vt){case Md:s.depthFunc(s.NEVER);break;case Ed:s.depthFunc(s.ALWAYS);break;case bd:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case Td:s.depthFunc(s.EQUAL);break;case Ad:s.depthFunc(s.GEQUAL);break;case Rd:s.depthFunc(s.GREATER);break;case wd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ht=vt}},setLocked:function(vt){q=vt},setClear:function(vt){wt!==vt&&(Ot&&(vt=1-vt),s.clearDepth(vt),wt=vt)},reset:function(){q=!1,At=null,Ht=null,wt=null,Ot=!1}}}function l(){let q=!1,Ot=null,At=null,Ht=null,wt=null,vt=null,Gt=null,oe=null,ze=null;return{setTest:function(De){q||(De?gt(s.STENCIL_TEST):Dt(s.STENCIL_TEST))},setMask:function(De){Ot!==De&&!q&&(s.stencilMask(De),Ot=De)},setFunc:function(De,En,yi){(At!==De||Ht!==En||wt!==yi)&&(s.stencilFunc(De,En,yi),At=De,Ht=En,wt=yi)},setOp:function(De,En,yi){(vt!==De||Gt!==En||oe!==yi)&&(s.stencilOp(De,En,yi),vt=De,Gt=En,oe=yi)},setLocked:function(De){q=De},setClear:function(De){ze!==De&&(s.clearStencil(De),ze=De)},reset:function(){q=!1,Ot=null,At=null,Ht=null,wt=null,vt=null,Gt=null,oe=null,ze=null}}}const c=new i,f=new r,d=new l,p=new WeakMap,m=new WeakMap;let v={},_={},y=new WeakMap,M=[],E=null,b=!1,S=null,g=null,T=null,C=null,R=null,V=null,O=null,N=new Se(0,0,0),z=0,D=!1,w=null,G=null,$=null,j=null,et=null;const st=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,W=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),B=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),B=W>=2);let _t=null,Tt={};const P=s.getParameter(s.SCISSOR_BOX),nt=s.getParameter(s.VIEWPORT),xt=new We().fromArray(P),Q=new We().fromArray(nt);function ft(q,Ot,At,Ht){const wt=new Uint8Array(4),vt=s.createTexture();s.bindTexture(q,vt),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Gt=0;Gt<At;Gt++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Ot,0,s.RGBA,1,1,Ht,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(Ot+Gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return vt}const Rt={};Rt[s.TEXTURE_2D]=ft(s.TEXTURE_2D,s.TEXTURE_2D,1),Rt[s.TEXTURE_CUBE_MAP]=ft(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[s.TEXTURE_2D_ARRAY]=ft(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Rt[s.TEXTURE_3D]=ft(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),gt(s.DEPTH_TEST),f.setFunc(zs),Jt(!1),ue(L_),gt(s.CULL_FACE),F(Ya);function gt(q){v[q]!==!0&&(s.enable(q),v[q]=!0)}function Dt(q){v[q]!==!1&&(s.disable(q),v[q]=!1)}function Xt(q,Ot){return _[q]!==Ot?(s.bindFramebuffer(q,Ot),_[q]=Ot,q===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ot),q===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Vt(q,Ot){let At=M,Ht=!1;if(q){At=y.get(Ot),At===void 0&&(At=[],y.set(Ot,At));const wt=q.textures;if(At.length!==wt.length||At[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,Gt=wt.length;vt<Gt;vt++)At[vt]=s.COLOR_ATTACHMENT0+vt;At.length=wt.length,Ht=!0}}else At[0]!==s.BACK&&(At[0]=s.BACK,Ht=!0);Ht&&s.drawBuffers(At)}function St(q){return E!==q?(s.useProgram(q),E=q,!0):!1}const Et={[Ar]:s.FUNC_ADD,[aM]:s.FUNC_SUBTRACT,[rM]:s.FUNC_REVERSE_SUBTRACT};Et[sM]=s.MIN,Et[oM]=s.MAX;const Bt={[lM]:s.ZERO,[cM]:s.ONE,[uM]:s.SRC_COLOR,[Sd]:s.SRC_ALPHA,[gM]:s.SRC_ALPHA_SATURATE,[pM]:s.DST_COLOR,[hM]:s.DST_ALPHA,[fM]:s.ONE_MINUS_SRC_COLOR,[xd]:s.ONE_MINUS_SRC_ALPHA,[mM]:s.ONE_MINUS_DST_COLOR,[dM]:s.ONE_MINUS_DST_ALPHA,[_M]:s.CONSTANT_COLOR,[vM]:s.ONE_MINUS_CONSTANT_COLOR,[yM]:s.CONSTANT_ALPHA,[SM]:s.ONE_MINUS_CONSTANT_ALPHA};function F(q,Ot,At,Ht,wt,vt,Gt,oe,ze,De){if(q===Ya){b===!0&&(Dt(s.BLEND),b=!1);return}if(b===!1&&(gt(s.BLEND),b=!0),q!==iM){if(q!==S||De!==D){if((g!==Ar||R!==Ar)&&(s.blendEquation(s.FUNC_ADD),g=Ar,R=Ar),De)switch(q){case Ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case au:s.blendFunc(s.ONE,s.ONE);break;case N_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case O_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case au:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case N_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case O_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}T=null,C=null,V=null,O=null,N.set(0,0,0),z=0,S=q,D=De}return}wt=wt||Ot,vt=vt||At,Gt=Gt||Ht,(Ot!==g||wt!==R)&&(s.blendEquationSeparate(Et[Ot],Et[wt]),g=Ot,R=wt),(At!==T||Ht!==C||vt!==V||Gt!==O)&&(s.blendFuncSeparate(Bt[At],Bt[Ht],Bt[vt],Bt[Gt]),T=At,C=Ht,V=vt,O=Gt),(oe.equals(N)===!1||ze!==z)&&(s.blendColor(oe.r,oe.g,oe.b,ze),N.copy(oe),z=ze),S=q,D=!1}function he(q,Ot){q.side===wi?Dt(s.CULL_FACE):gt(s.CULL_FACE);let At=q.side===Kn;Ot&&(At=!At),Jt(At),q.blending===Ns&&q.transparent===!1?F(Ya):F(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const Ht=q.stencilWrite;d.setTest(Ht),Ht&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ie(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):Dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(q){w!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),w=q)}function ue(q){q!==eM?(gt(s.CULL_FACE),q!==G&&(q===L_?s.cullFace(s.BACK):q===nM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Dt(s.CULL_FACE),G=q}function Pt(q){q!==$&&(B&&s.lineWidth(q),$=q)}function ie(q,Ot,At){q?(gt(s.POLYGON_OFFSET_FILL),(j!==Ot||et!==At)&&(s.polygonOffset(Ot,At),j=Ot,et=At)):Dt(s.POLYGON_OFFSET_FILL)}function jt(q){q?gt(s.SCISSOR_TEST):Dt(s.SCISSOR_TEST)}function re(q){q===void 0&&(q=s.TEXTURE0+st-1),_t!==q&&(s.activeTexture(q),_t=q)}function Ze(q,Ot,At){At===void 0&&(_t===null?At=s.TEXTURE0+st-1:At=_t);let Ht=Tt[At];Ht===void 0&&(Ht={type:void 0,texture:void 0},Tt[At]=Ht),(Ht.type!==q||Ht.texture!==Ot)&&(_t!==At&&(s.activeTexture(At),_t=At),s.bindTexture(q,Ot||Rt[q]),Ht.type=q,Ht.texture=Ot)}function H(){const q=Tt[_t];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function rt(){try{s.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function mt(){try{s.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function bt(){try{s.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ht(){try{s.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Zt(){try{s.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ut(){try{s.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function qt(){try{s.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Kt(){try{s.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Mt(){try{s.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Lt(q){xt.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),xt.copy(q))}function $t(q){Q.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),Q.copy(q))}function Wt(q,Ot){let At=m.get(Ot);At===void 0&&(At=new WeakMap,m.set(Ot,At));let Ht=At.get(q);Ht===void 0&&(Ht=s.getUniformBlockIndex(Ot,q.name),At.set(q,Ht))}function Nt(q,Ot){const Ht=m.get(Ot).get(q);p.get(Ot)!==Ht&&(s.uniformBlockBinding(Ot,Ht,q.__bindingPointIndex),p.set(Ot,Ht))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},_t=null,Tt={},_={},y=new WeakMap,M=[],E=null,b=!1,S=null,g=null,T=null,C=null,R=null,V=null,O=null,N=new Se(0,0,0),z=0,D=!1,w=null,G=null,$=null,j=null,et=null,xt.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:gt,disable:Dt,bindFramebuffer:Xt,drawBuffers:Vt,useProgram:St,setBlending:F,setMaterial:he,setFlipSided:Jt,setCullFace:ue,setLineWidth:Pt,setPolygonOffset:ie,setScissorTest:jt,activeTexture:re,bindTexture:Ze,unbindTexture:H,compressedTexImage2D:A,compressedTexImage3D:rt,texImage2D:Kt,texImage3D:Mt,updateUBOMapping:Wt,uniformBlockBinding:Nt,texStorage2D:Ut,texStorage3D:qt,texSubImage2D:mt,texSubImage3D:bt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Zt,scissor:Lt,viewport:$t,reset:se}}function i2(s,t,i,r,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new fe,v=new WeakMap;let _;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(H,A){return M?new OffscreenCanvas(H,A):ou("canvas")}function b(H,A,rt){let mt=1;const bt=Ze(H);if((bt.width>rt||bt.height>rt)&&(mt=rt/Math.max(bt.width,bt.height)),mt<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){const ht=Math.floor(mt*bt.width),Zt=Math.floor(mt*bt.height);_===void 0&&(_=E(ht,Zt));const Ut=A?E(ht,Zt):_;return Ut.width=ht,Ut.height=Zt,Ut.getContext("2d").drawImage(H,0,0,ht,Zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+ht+"x"+Zt+")."),Ut}else return"data"in H&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),H;return H}function S(H){return H.generateMipmaps}function g(H){s.generateMipmap(H)}function T(H){return H.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?s.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(H,A,rt,mt,bt=!1){if(H!==null){if(s[H]!==void 0)return s[H];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let ht=A;if(A===s.RED&&(rt===s.FLOAT&&(ht=s.R32F),rt===s.HALF_FLOAT&&(ht=s.R16F),rt===s.UNSIGNED_BYTE&&(ht=s.R8)),A===s.RED_INTEGER&&(rt===s.UNSIGNED_BYTE&&(ht=s.R8UI),rt===s.UNSIGNED_SHORT&&(ht=s.R16UI),rt===s.UNSIGNED_INT&&(ht=s.R32UI),rt===s.BYTE&&(ht=s.R8I),rt===s.SHORT&&(ht=s.R16I),rt===s.INT&&(ht=s.R32I)),A===s.RG&&(rt===s.FLOAT&&(ht=s.RG32F),rt===s.HALF_FLOAT&&(ht=s.RG16F),rt===s.UNSIGNED_BYTE&&(ht=s.RG8)),A===s.RG_INTEGER&&(rt===s.UNSIGNED_BYTE&&(ht=s.RG8UI),rt===s.UNSIGNED_SHORT&&(ht=s.RG16UI),rt===s.UNSIGNED_INT&&(ht=s.RG32UI),rt===s.BYTE&&(ht=s.RG8I),rt===s.SHORT&&(ht=s.RG16I),rt===s.INT&&(ht=s.RG32I)),A===s.RGB_INTEGER&&(rt===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),rt===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),rt===s.UNSIGNED_INT&&(ht=s.RGB32UI),rt===s.BYTE&&(ht=s.RGB8I),rt===s.SHORT&&(ht=s.RGB16I),rt===s.INT&&(ht=s.RGB32I)),A===s.RGBA_INTEGER&&(rt===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),rt===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),rt===s.UNSIGNED_INT&&(ht=s.RGBA32UI),rt===s.BYTE&&(ht=s.RGBA8I),rt===s.SHORT&&(ht=s.RGBA16I),rt===s.INT&&(ht=s.RGBA32I)),A===s.RGB&&rt===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),A===s.RGBA){const Zt=bt?ru:Oe.getTransfer(mt);rt===s.FLOAT&&(ht=s.RGBA32F),rt===s.HALF_FLOAT&&(ht=s.RGBA16F),rt===s.UNSIGNED_BYTE&&(ht=Zt===ke?s.SRGB8_ALPHA8:s.RGBA8),rt===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),rt===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function R(H,A){let rt;return H?A===null||A===Ur||A===Ko?rt=s.DEPTH24_STENCIL8:A===pa?rt=s.DEPTH32F_STENCIL8:A===Zo&&(rt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ur||A===Ko?rt=s.DEPTH_COMPONENT24:A===pa?rt=s.DEPTH_COMPONENT32F:A===Zo&&(rt=s.DEPTH_COMPONENT16),rt}function V(H,A){return S(H)===!0||H.isFramebufferTexture&&H.minFilter!==Di&&H.minFilter!==Fi?Math.log2(Math.max(A.width,A.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?A.mipmaps.length:1}function O(H){const A=H.target;A.removeEventListener("dispose",O),z(A),A.isVideoTexture&&v.delete(A)}function N(H){const A=H.target;A.removeEventListener("dispose",N),w(A)}function z(H){const A=r.get(H);if(A.__webglInit===void 0)return;const rt=H.source,mt=y.get(rt);if(mt){const bt=mt[A.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&D(H),Object.keys(mt).length===0&&y.delete(rt)}r.remove(H)}function D(H){const A=r.get(H);s.deleteTexture(A.__webglTexture);const rt=H.source,mt=y.get(rt);delete mt[A.__cacheKey],f.memory.textures--}function w(H){const A=r.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),r.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(A.__webglFramebuffer[mt]))for(let bt=0;bt<A.__webglFramebuffer[mt].length;bt++)s.deleteFramebuffer(A.__webglFramebuffer[mt][bt]);else s.deleteFramebuffer(A.__webglFramebuffer[mt]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[mt])}else{if(Array.isArray(A.__webglFramebuffer))for(let mt=0;mt<A.__webglFramebuffer.length;mt++)s.deleteFramebuffer(A.__webglFramebuffer[mt]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let mt=0;mt<A.__webglColorRenderbuffer.length;mt++)A.__webglColorRenderbuffer[mt]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[mt]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const rt=H.textures;for(let mt=0,bt=rt.length;mt<bt;mt++){const ht=r.get(rt[mt]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),f.memory.textures--),r.remove(rt[mt])}r.remove(H)}let G=0;function $(){G=0}function j(){const H=G;return H>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+H+" texture units while this GPU supports only "+l.maxTextures),G+=1,H}function et(H){const A=[];return A.push(H.wrapS),A.push(H.wrapT),A.push(H.wrapR||0),A.push(H.magFilter),A.push(H.minFilter),A.push(H.anisotropy),A.push(H.internalFormat),A.push(H.format),A.push(H.type),A.push(H.generateMipmaps),A.push(H.premultiplyAlpha),A.push(H.flipY),A.push(H.unpackAlignment),A.push(H.colorSpace),A.join()}function st(H,A){const rt=r.get(H);if(H.isVideoTexture&&jt(H),H.isRenderTargetTexture===!1&&H.version>0&&rt.__version!==H.version){const mt=H.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(rt,H,A);return}}i.bindTexture(s.TEXTURE_2D,rt.__webglTexture,s.TEXTURE0+A)}function B(H,A){const rt=r.get(H);if(H.version>0&&rt.__version!==H.version){Rt(rt,H,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,rt.__webglTexture,s.TEXTURE0+A)}function W(H,A){const rt=r.get(H);if(H.version>0&&rt.__version!==H.version){Rt(rt,H,A);return}i.bindTexture(s.TEXTURE_3D,rt.__webglTexture,s.TEXTURE0+A)}function K(H,A){const rt=r.get(H);if(H.version>0&&rt.__version!==H.version){gt(rt,H,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture,s.TEXTURE0+A)}const _t={[Ud]:s.REPEAT,[Cr]:s.CLAMP_TO_EDGE,[Ld]:s.MIRRORED_REPEAT},Tt={[Di]:s.NEAREST,[DM]:s.NEAREST_MIPMAP_NEAREST,[Sc]:s.NEAREST_MIPMAP_LINEAR,[Fi]:s.LINEAR,[Ph]:s.LINEAR_MIPMAP_NEAREST,[Dr]:s.LINEAR_MIPMAP_LINEAR},P={[OM]:s.NEVER,[HM]:s.ALWAYS,[PM]:s.LESS,[uy]:s.LEQUAL,[zM]:s.EQUAL,[FM]:s.GEQUAL,[IM]:s.GREATER,[BM]:s.NOTEQUAL};function nt(H,A){if(A.type===pa&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Fi||A.magFilter===Ph||A.magFilter===Sc||A.magFilter===Dr||A.minFilter===Fi||A.minFilter===Ph||A.minFilter===Sc||A.minFilter===Dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(H,s.TEXTURE_WRAP_S,_t[A.wrapS]),s.texParameteri(H,s.TEXTURE_WRAP_T,_t[A.wrapT]),(H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY)&&s.texParameteri(H,s.TEXTURE_WRAP_R,_t[A.wrapR]),s.texParameteri(H,s.TEXTURE_MAG_FILTER,Tt[A.magFilter]),s.texParameteri(H,s.TEXTURE_MIN_FILTER,Tt[A.minFilter]),A.compareFunction&&(s.texParameteri(H,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(H,s.TEXTURE_COMPARE_FUNC,P[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Di||A.minFilter!==Sc&&A.minFilter!==Dr||A.type===pa&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const rt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(H,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function xt(H,A){let rt=!1;H.__webglInit===void 0&&(H.__webglInit=!0,A.addEventListener("dispose",O));const mt=A.source;let bt=y.get(mt);bt===void 0&&(bt={},y.set(mt,bt));const ht=et(A);if(ht!==H.__cacheKey){bt[ht]===void 0&&(bt[ht]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,rt=!0),bt[ht].usedTimes++;const Zt=bt[H.__cacheKey];Zt!==void 0&&(bt[H.__cacheKey].usedTimes--,Zt.usedTimes===0&&D(A)),H.__cacheKey=ht,H.__webglTexture=bt[ht].texture}return rt}function Q(H,A,rt){return Math.floor(Math.floor(H/rt)/A)}function ft(H,A,rt,mt){const ht=H.updateRanges;if(ht.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,rt,mt,A.data);else{ht.sort((Mt,Lt)=>Mt.start-Lt.start);let Zt=0;for(let Mt=1;Mt<ht.length;Mt++){const Lt=ht[Zt],$t=ht[Mt],Wt=Lt.start+Lt.count,Nt=Q($t.start,A.width,4),se=Q(Lt.start,A.width,4);$t.start<=Wt+1&&Nt===se&&Q($t.start+$t.count-1,A.width,4)===Nt?Lt.count=Math.max(Lt.count,$t.start+$t.count-Lt.start):(++Zt,ht[Zt]=$t)}ht.length=Zt+1;const Ut=s.getParameter(s.UNPACK_ROW_LENGTH),qt=s.getParameter(s.UNPACK_SKIP_PIXELS),Kt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Mt=0,Lt=ht.length;Mt<Lt;Mt++){const $t=ht[Mt],Wt=Math.floor($t.start/4),Nt=Math.ceil($t.count/4),se=Wt%A.width,q=Math.floor(Wt/A.width),Ot=Nt,At=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,se),s.pixelStorei(s.UNPACK_SKIP_ROWS,q),i.texSubImage2D(s.TEXTURE_2D,0,se,q,Ot,At,rt,mt,A.data)}H.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ut),s.pixelStorei(s.UNPACK_SKIP_PIXELS,qt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Kt)}}function Rt(H,A,rt){let mt=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(mt=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(mt=s.TEXTURE_3D);const bt=xt(H,A),ht=A.source;i.bindTexture(mt,H.__webglTexture,s.TEXTURE0+rt);const Zt=r.get(ht);if(ht.version!==Zt.__version||bt===!0){i.activeTexture(s.TEXTURE0+rt);const Ut=Oe.getPrimaries(Oe.workingColorSpace),qt=A.colorSpace===qa?null:Oe.getPrimaries(A.colorSpace),Kt=A.colorSpace===qa||Ut===qt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let Mt=b(A.image,!1,l.maxTextureSize);Mt=re(A,Mt);const Lt=c.convert(A.format,A.colorSpace),$t=c.convert(A.type);let Wt=C(A.internalFormat,Lt,$t,A.colorSpace,A.isVideoTexture);nt(mt,A);let Nt;const se=A.mipmaps,q=A.isVideoTexture!==!0,Ot=Zt.__version===void 0||bt===!0,At=ht.dataReady,Ht=V(A,Mt);if(A.isDepthTexture)Wt=R(A.format===Jo,A.type),Ot&&(q?i.texStorage2D(s.TEXTURE_2D,1,Wt,Mt.width,Mt.height):i.texImage2D(s.TEXTURE_2D,0,Wt,Mt.width,Mt.height,0,Lt,$t,null));else if(A.isDataTexture)if(se.length>0){q&&Ot&&i.texStorage2D(s.TEXTURE_2D,Ht,Wt,se[0].width,se[0].height);for(let wt=0,vt=se.length;wt<vt;wt++)Nt=se[wt],q?At&&i.texSubImage2D(s.TEXTURE_2D,wt,0,0,Nt.width,Nt.height,Lt,$t,Nt.data):i.texImage2D(s.TEXTURE_2D,wt,Wt,Nt.width,Nt.height,0,Lt,$t,Nt.data);A.generateMipmaps=!1}else q?(Ot&&i.texStorage2D(s.TEXTURE_2D,Ht,Wt,Mt.width,Mt.height),At&&ft(A,Mt,Lt,$t)):i.texImage2D(s.TEXTURE_2D,0,Wt,Mt.width,Mt.height,0,Lt,$t,Mt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){q&&Ot&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,Wt,se[0].width,se[0].height,Mt.depth);for(let wt=0,vt=se.length;wt<vt;wt++)if(Nt=se[wt],A.format!==Ci)if(Lt!==null)if(q){if(At)if(A.layerUpdates.size>0){const Gt=dv(Nt.width,Nt.height,A.format,A.type);for(const oe of A.layerUpdates){const ze=Nt.data.subarray(oe*Gt/Nt.data.BYTES_PER_ELEMENT,(oe+1)*Gt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,wt,0,0,oe,Nt.width,Nt.height,1,Lt,ze)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,wt,0,0,0,Nt.width,Nt.height,Mt.depth,Lt,Nt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,wt,Wt,Nt.width,Nt.height,Mt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?At&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,wt,0,0,0,Nt.width,Nt.height,Mt.depth,Lt,$t,Nt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,wt,Wt,Nt.width,Nt.height,Mt.depth,0,Lt,$t,Nt.data)}else{q&&Ot&&i.texStorage2D(s.TEXTURE_2D,Ht,Wt,se[0].width,se[0].height);for(let wt=0,vt=se.length;wt<vt;wt++)Nt=se[wt],A.format!==Ci?Lt!==null?q?At&&i.compressedTexSubImage2D(s.TEXTURE_2D,wt,0,0,Nt.width,Nt.height,Lt,Nt.data):i.compressedTexImage2D(s.TEXTURE_2D,wt,Wt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?At&&i.texSubImage2D(s.TEXTURE_2D,wt,0,0,Nt.width,Nt.height,Lt,$t,Nt.data):i.texImage2D(s.TEXTURE_2D,wt,Wt,Nt.width,Nt.height,0,Lt,$t,Nt.data)}else if(A.isDataArrayTexture)if(q){if(Ot&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,Wt,Mt.width,Mt.height,Mt.depth),At)if(A.layerUpdates.size>0){const wt=dv(Mt.width,Mt.height,A.format,A.type);for(const vt of A.layerUpdates){const Gt=Mt.data.subarray(vt*wt/Mt.data.BYTES_PER_ELEMENT,(vt+1)*wt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,vt,Mt.width,Mt.height,1,Lt,$t,Gt)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,$t,Mt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Wt,Mt.width,Mt.height,Mt.depth,0,Lt,$t,Mt.data);else if(A.isData3DTexture)q?(Ot&&i.texStorage3D(s.TEXTURE_3D,Ht,Wt,Mt.width,Mt.height,Mt.depth),At&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,$t,Mt.data)):i.texImage3D(s.TEXTURE_3D,0,Wt,Mt.width,Mt.height,Mt.depth,0,Lt,$t,Mt.data);else if(A.isFramebufferTexture){if(Ot)if(q)i.texStorage2D(s.TEXTURE_2D,Ht,Wt,Mt.width,Mt.height);else{let wt=Mt.width,vt=Mt.height;for(let Gt=0;Gt<Ht;Gt++)i.texImage2D(s.TEXTURE_2D,Gt,Wt,wt,vt,0,Lt,$t,null),wt>>=1,vt>>=1}}else if(se.length>0){if(q&&Ot){const wt=Ze(se[0]);i.texStorage2D(s.TEXTURE_2D,Ht,Wt,wt.width,wt.height)}for(let wt=0,vt=se.length;wt<vt;wt++)Nt=se[wt],q?At&&i.texSubImage2D(s.TEXTURE_2D,wt,0,0,Lt,$t,Nt):i.texImage2D(s.TEXTURE_2D,wt,Wt,Lt,$t,Nt);A.generateMipmaps=!1}else if(q){if(Ot){const wt=Ze(Mt);i.texStorage2D(s.TEXTURE_2D,Ht,Wt,wt.width,wt.height)}At&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Lt,$t,Mt)}else i.texImage2D(s.TEXTURE_2D,0,Wt,Lt,$t,Mt);S(A)&&g(mt),Zt.__version=ht.version,A.onUpdate&&A.onUpdate(A)}H.__version=A.version}function gt(H,A,rt){if(A.image.length!==6)return;const mt=xt(H,A),bt=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+rt);const ht=r.get(bt);if(bt.version!==ht.__version||mt===!0){i.activeTexture(s.TEXTURE0+rt);const Zt=Oe.getPrimaries(Oe.workingColorSpace),Ut=A.colorSpace===qa?null:Oe.getPrimaries(A.colorSpace),qt=A.colorSpace===qa||Zt===Ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const Kt=A.isCompressedTexture||A.image[0].isCompressedTexture,Mt=A.image[0]&&A.image[0].isDataTexture,Lt=[];for(let vt=0;vt<6;vt++)!Kt&&!Mt?Lt[vt]=b(A.image[vt],!0,l.maxCubemapSize):Lt[vt]=Mt?A.image[vt].image:A.image[vt],Lt[vt]=re(A,Lt[vt]);const $t=Lt[0],Wt=c.convert(A.format,A.colorSpace),Nt=c.convert(A.type),se=C(A.internalFormat,Wt,Nt,A.colorSpace),q=A.isVideoTexture!==!0,Ot=ht.__version===void 0||mt===!0,At=bt.dataReady;let Ht=V(A,$t);nt(s.TEXTURE_CUBE_MAP,A);let wt;if(Kt){q&&Ot&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ht,se,$t.width,$t.height);for(let vt=0;vt<6;vt++){wt=Lt[vt].mipmaps;for(let Gt=0;Gt<wt.length;Gt++){const oe=wt[Gt];A.format!==Ci?Wt!==null?q?At&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,0,0,oe.width,oe.height,Wt,oe.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,se,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?At&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,0,0,oe.width,oe.height,Wt,Nt,oe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,se,oe.width,oe.height,0,Wt,Nt,oe.data)}}}else{if(wt=A.mipmaps,q&&Ot){wt.length>0&&Ht++;const vt=Ze(Lt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ht,se,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Mt){q?At&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Lt[vt].width,Lt[vt].height,Wt,Nt,Lt[vt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,se,Lt[vt].width,Lt[vt].height,0,Wt,Nt,Lt[vt].data);for(let Gt=0;Gt<wt.length;Gt++){const ze=wt[Gt].image[vt].image;q?At&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,0,0,ze.width,ze.height,Wt,Nt,ze.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,se,ze.width,ze.height,0,Wt,Nt,ze.data)}}else{q?At&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Wt,Nt,Lt[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,se,Wt,Nt,Lt[vt]);for(let Gt=0;Gt<wt.length;Gt++){const oe=wt[Gt];q?At&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,0,0,Wt,Nt,oe.image[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,se,Wt,Nt,oe.image[vt])}}}S(A)&&g(s.TEXTURE_CUBE_MAP),ht.__version=bt.version,A.onUpdate&&A.onUpdate(A)}H.__version=A.version}function Dt(H,A,rt,mt,bt,ht){const Zt=c.convert(rt.format,rt.colorSpace),Ut=c.convert(rt.type),qt=C(rt.internalFormat,Zt,Ut,rt.colorSpace),Kt=r.get(A),Mt=r.get(rt);if(Mt.__renderTarget=A,!Kt.__hasExternalTextures){const Lt=Math.max(1,A.width>>ht),$t=Math.max(1,A.height>>ht);bt===s.TEXTURE_3D||bt===s.TEXTURE_2D_ARRAY?i.texImage3D(bt,ht,qt,Lt,$t,A.depth,0,Zt,Ut,null):i.texImage2D(bt,ht,qt,Lt,$t,0,Zt,Ut,null)}i.bindFramebuffer(s.FRAMEBUFFER,H),ie(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,bt,Mt.__webglTexture,0,Pt(A)):(bt===s.TEXTURE_2D||bt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,mt,bt,Mt.__webglTexture,ht),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(H,A,rt){if(s.bindRenderbuffer(s.RENDERBUFFER,H),A.depthBuffer){const mt=A.depthTexture,bt=mt&&mt.isDepthTexture?mt.type:null,ht=R(A.stencilBuffer,bt),Zt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ut=Pt(A);ie(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut,ht,A.width,A.height):rt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,ht,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ht,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Zt,s.RENDERBUFFER,H)}else{const mt=A.textures;for(let bt=0;bt<mt.length;bt++){const ht=mt[bt],Zt=c.convert(ht.format,ht.colorSpace),Ut=c.convert(ht.type),qt=C(ht.internalFormat,Zt,Ut,ht.colorSpace),Kt=Pt(A);rt&&ie(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,qt,A.width,A.height):ie(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt,qt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,qt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Vt(H,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,H),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=r.get(A.depthTexture);mt.__renderTarget=A,(!mt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),st(A.depthTexture,0);const bt=mt.__webglTexture,ht=Pt(A);if(A.depthTexture.format===Qo)ie(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,bt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,bt,0);else if(A.depthTexture.format===Jo)ie(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,bt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function St(H){const A=r.get(H),rt=H.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==H.depthTexture){const mt=H.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),mt){const bt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,mt.removeEventListener("dispose",bt)};mt.addEventListener("dispose",bt),A.__depthDisposeCallback=bt}A.__boundDepthTexture=mt}if(H.depthTexture&&!A.__autoAllocateDepthBuffer){if(rt)throw new Error("target.depthTexture not supported in Cube render targets");const mt=H.texture.mipmaps;mt&&mt.length>0?Vt(A.__webglFramebuffer[0],H):Vt(A.__webglFramebuffer,H)}else if(rt){A.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[mt]),A.__webglDepthbuffer[mt]===void 0)A.__webglDepthbuffer[mt]=s.createRenderbuffer(),Xt(A.__webglDepthbuffer[mt],H,!1);else{const bt=H.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer[mt];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,ht)}}else{const mt=H.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Xt(A.__webglDepthbuffer,H,!1);else{const bt=H.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,ht)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(H,A,rt){const mt=r.get(H);A!==void 0&&Dt(mt.__webglFramebuffer,H,H.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),rt!==void 0&&St(H)}function Bt(H){const A=H.texture,rt=r.get(H),mt=r.get(A);H.addEventListener("dispose",N);const bt=H.textures,ht=H.isWebGLCubeRenderTarget===!0,Zt=bt.length>1;if(Zt||(mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture()),mt.__version=A.version,f.memory.textures++),ht){rt.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(A.mipmaps&&A.mipmaps.length>0){rt.__webglFramebuffer[Ut]=[];for(let qt=0;qt<A.mipmaps.length;qt++)rt.__webglFramebuffer[Ut][qt]=s.createFramebuffer()}else rt.__webglFramebuffer[Ut]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){rt.__webglFramebuffer=[];for(let Ut=0;Ut<A.mipmaps.length;Ut++)rt.__webglFramebuffer[Ut]=s.createFramebuffer()}else rt.__webglFramebuffer=s.createFramebuffer();if(Zt)for(let Ut=0,qt=bt.length;Ut<qt;Ut++){const Kt=r.get(bt[Ut]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=s.createTexture(),f.memory.textures++)}if(H.samples>0&&ie(H)===!1){rt.__webglMultisampledFramebuffer=s.createFramebuffer(),rt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let Ut=0;Ut<bt.length;Ut++){const qt=bt[Ut];rt.__webglColorRenderbuffer[Ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,rt.__webglColorRenderbuffer[Ut]);const Kt=c.convert(qt.format,qt.colorSpace),Mt=c.convert(qt.type),Lt=C(qt.internalFormat,Kt,Mt,qt.colorSpace,H.isXRRenderTarget===!0),$t=Pt(H);s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,Lt,H.width,H.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,rt.__webglColorRenderbuffer[Ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),H.depthBuffer&&(rt.__webglDepthRenderbuffer=s.createRenderbuffer(),Xt(rt.__webglDepthRenderbuffer,H,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){i.bindTexture(s.TEXTURE_CUBE_MAP,mt.__webglTexture),nt(s.TEXTURE_CUBE_MAP,A);for(let Ut=0;Ut<6;Ut++)if(A.mipmaps&&A.mipmaps.length>0)for(let qt=0;qt<A.mipmaps.length;qt++)Dt(rt.__webglFramebuffer[Ut][qt],H,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,qt);else Dt(rt.__webglFramebuffer[Ut],H,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(A)&&g(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Ut=0,qt=bt.length;Ut<qt;Ut++){const Kt=bt[Ut],Mt=r.get(Kt);i.bindTexture(s.TEXTURE_2D,Mt.__webglTexture),nt(s.TEXTURE_2D,Kt),Dt(rt.__webglFramebuffer,H,Kt,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,0),S(Kt)&&g(s.TEXTURE_2D)}i.unbindTexture()}else{let Ut=s.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Ut=H.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ut,mt.__webglTexture),nt(Ut,A),A.mipmaps&&A.mipmaps.length>0)for(let qt=0;qt<A.mipmaps.length;qt++)Dt(rt.__webglFramebuffer[qt],H,A,s.COLOR_ATTACHMENT0,Ut,qt);else Dt(rt.__webglFramebuffer,H,A,s.COLOR_ATTACHMENT0,Ut,0);S(A)&&g(Ut),i.unbindTexture()}H.depthBuffer&&St(H)}function F(H){const A=H.textures;for(let rt=0,mt=A.length;rt<mt;rt++){const bt=A[rt];if(S(bt)){const ht=T(H),Zt=r.get(bt).__webglTexture;i.bindTexture(ht,Zt),g(ht),i.unbindTexture()}}}const he=[],Jt=[];function ue(H){if(H.samples>0){if(ie(H)===!1){const A=H.textures,rt=H.width,mt=H.height;let bt=s.COLOR_BUFFER_BIT;const ht=H.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Zt=r.get(H),Ut=A.length>1;if(Ut)for(let Kt=0;Kt<A.length;Kt++)i.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const qt=H.texture.mipmaps;qt&&qt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let Kt=0;Kt<A.length;Kt++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(bt|=s.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(bt|=s.STENCIL_BUFFER_BIT)),Ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Zt.__webglColorRenderbuffer[Kt]);const Mt=r.get(A[Kt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Mt,0)}s.blitFramebuffer(0,0,rt,mt,0,0,rt,mt,bt,s.NEAREST),p===!0&&(he.length=0,Jt.length=0,he.push(s.COLOR_ATTACHMENT0+Kt),H.depthBuffer&&H.resolveDepthBuffer===!1&&(he.push(ht),Jt.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Jt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ut)for(let Kt=0;Kt<A.length;Kt++){i.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.RENDERBUFFER,Zt.__webglColorRenderbuffer[Kt]);const Mt=r.get(A[Kt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.TEXTURE_2D,Mt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.resolveDepthBuffer===!1&&p){const A=H.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Pt(H){return Math.min(l.maxSamples,H.samples)}function ie(H){const A=r.get(H);return H.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function jt(H){const A=f.render.frame;v.get(H)!==A&&(v.set(H,A),H.update())}function re(H,A){const rt=H.colorSpace,mt=H.format,bt=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||rt!==Fs&&rt!==qa&&(Oe.getTransfer(rt)===ke?(mt!==Ci||bt!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",rt)),A}function Ze(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(m.width=H.naturalWidth||H.width,m.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(m.width=H.displayWidth,m.height=H.displayHeight):(m.width=H.width,m.height=H.height),m}this.allocateTextureUnit=j,this.resetTextureUnits=$,this.setTexture2D=st,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=K,this.rebindTextures=Et,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=ie}function a2(s,t){function i(r,l=qa){let c;const f=Oe.getTransfer(l);if(r===Gi)return s.UNSIGNED_BYTE;if(r===gp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===_p)return s.UNSIGNED_SHORT_5_5_5_1;if(r===iy)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ey)return s.BYTE;if(r===ny)return s.SHORT;if(r===Zo)return s.UNSIGNED_SHORT;if(r===mp)return s.INT;if(r===Ur)return s.UNSIGNED_INT;if(r===pa)return s.FLOAT;if(r===nl)return s.HALF_FLOAT;if(r===ay)return s.ALPHA;if(r===ry)return s.RGB;if(r===Ci)return s.RGBA;if(r===Qo)return s.DEPTH_COMPONENT;if(r===Jo)return s.DEPTH_STENCIL;if(r===sy)return s.RED;if(r===vp)return s.RED_INTEGER;if(r===oy)return s.RG;if(r===yp)return s.RG_INTEGER;if(r===Sp)return s.RGBA_INTEGER;if(r===Qc||r===Jc||r===$c||r===tu)if(f===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nd||r===Od||r===Pd||r===zd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Nd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Od)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Id||r===Bd||r===Fd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Id||r===Bd)return f===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Fd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Hd||r===Gd||r===Vd||r===kd||r===Xd||r===Wd||r===qd||r===Yd||r===jd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Hd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Jd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$d)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===eu||r===tp||r===ep)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===eu)return f===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===tp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ep)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ly||r===np||r===ip||r===ap)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===eu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===np)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ip)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ap)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ko?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const r2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s2=`
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

}`;class o2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Vn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Qa({vertexShader:r2,fragmentShader:s2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new en(new ll(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l2 extends Gs{constructor(t,i){super();const r=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,v=null,_=null,y=null,M=null,E=null;const b=new o2,S=i.getContextAttributes();let g=null,T=null;const C=[],R=[],V=new fe;let O=null;const N=new Gn;N.viewport=new We;const z=new Gn;z.viewport=new We;const D=[N,z],w=new wE;let G=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ft=C[Q];return ft===void 0&&(ft=new id,C[Q]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Q){let ft=C[Q];return ft===void 0&&(ft=new id,C[Q]=ft),ft.getGripSpace()},this.getHand=function(Q){let ft=C[Q];return ft===void 0&&(ft=new id,C[Q]=ft),ft.getHandSpace()};function j(Q){const ft=R.indexOf(Q.inputSource);if(ft===-1)return;const Rt=C[ft];Rt!==void 0&&(Rt.update(Q.inputSource,Q.frame,m||f),Rt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function et(){l.removeEventListener("select",j),l.removeEventListener("selectstart",j),l.removeEventListener("selectend",j),l.removeEventListener("squeeze",j),l.removeEventListener("squeezestart",j),l.removeEventListener("squeezeend",j),l.removeEventListener("end",et),l.removeEventListener("inputsourceschange",st);for(let Q=0;Q<C.length;Q++){const ft=R[Q];ft!==null&&(R[Q]=null,C[Q].disconnect(ft))}G=null,$=null,b.reset(),t.setRenderTarget(g),M=null,y=null,_=null,l=null,T=null,xt.stop(),r.isPresenting=!1,t.setPixelRatio(O),t.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",j),l.addEventListener("selectstart",j),l.addEventListener("selectend",j),l.addEventListener("squeeze",j),l.addEventListener("squeezestart",j),l.addEventListener("squeezeend",j),l.addEventListener("end",et),l.addEventListener("inputsourceschange",st),S.xrCompatible!==!0&&await i.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(V),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,gt=null,Dt=null;S.depth&&(Dt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Rt=S.stencil?Jo:Qo,gt=S.stencil?Ko:Ur);const Xt={colorFormat:i.RGBA8,depthFormat:Dt,scaleFactor:c};_=new XRWebGLBinding(l,i),y=_.createProjectionLayer(Xt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),T=new Lr(y.textureWidth,y.textureHeight,{format:Ci,type:Gi,depthTexture:new xy(y.textureWidth,y.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Rt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Rt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),T=new Lr(M.framebufferWidth,M.framebufferHeight,{format:Ci,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),xt.setContext(l),xt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function st(Q){for(let ft=0;ft<Q.removed.length;ft++){const Rt=Q.removed[ft],gt=R.indexOf(Rt);gt>=0&&(R[gt]=null,C[gt].disconnect(Rt))}for(let ft=0;ft<Q.added.length;ft++){const Rt=Q.added[ft];let gt=R.indexOf(Rt);if(gt===-1){for(let Xt=0;Xt<C.length;Xt++)if(Xt>=R.length){R.push(Rt),gt=Xt;break}else if(R[Xt]===null){R[Xt]=Rt,gt=Xt;break}if(gt===-1)break}const Dt=C[gt];Dt&&Dt.connect(Rt)}}const B=new Y,W=new Y;function K(Q,ft,Rt){B.setFromMatrixPosition(ft.matrixWorld),W.setFromMatrixPosition(Rt.matrixWorld);const gt=B.distanceTo(W),Dt=ft.projectionMatrix.elements,Xt=Rt.projectionMatrix.elements,Vt=Dt[14]/(Dt[10]-1),St=Dt[14]/(Dt[10]+1),Et=(Dt[9]+1)/Dt[5],Bt=(Dt[9]-1)/Dt[5],F=(Dt[8]-1)/Dt[0],he=(Xt[8]+1)/Xt[0],Jt=Vt*F,ue=Vt*he,Pt=gt/(-F+he),ie=Pt*-F;if(ft.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ie),Q.translateZ(Pt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Dt[10]===-1)Q.projectionMatrix.copy(ft.projectionMatrix),Q.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const jt=Vt+Pt,re=St+Pt,Ze=Jt-ie,H=ue+(gt-ie),A=Et*St/re*jt,rt=Bt*St/re*jt;Q.projectionMatrix.makePerspective(Ze,H,A,rt,jt,re),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function _t(Q,ft){ft===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ft.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let ft=Q.near,Rt=Q.far;b.texture!==null&&(b.depthNear>0&&(ft=b.depthNear),b.depthFar>0&&(Rt=b.depthFar)),w.near=z.near=N.near=ft,w.far=z.far=N.far=Rt,(G!==w.near||$!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),G=w.near,$=w.far),N.layers.mask=Q.layers.mask|2,z.layers.mask=Q.layers.mask|4,w.layers.mask=N.layers.mask|z.layers.mask;const gt=Q.parent,Dt=w.cameras;_t(w,gt);for(let Xt=0;Xt<Dt.length;Xt++)_t(Dt[Xt],gt);Dt.length===2?K(w,N,z):w.projectionMatrix.copy(N.projectionMatrix),Tt(Q,w,gt)};function Tt(Q,ft,Rt){Rt===null?Q.matrix.copy(ft.matrixWorld):(Q.matrix.copy(Rt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ft.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ft.projectionMatrix),Q.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=sp*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(Q){p=Q,y!==null&&(y.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(w)};let P=null;function nt(Q,ft){if(v=ft.getViewerPose(m||f),E=ft,v!==null){const Rt=v.views;M!==null&&(t.setRenderTargetFramebuffer(T,M.framebuffer),t.setRenderTarget(T));let gt=!1;Rt.length!==w.cameras.length&&(w.cameras.length=0,gt=!0);for(let Vt=0;Vt<Rt.length;Vt++){const St=Rt[Vt];let Et=null;if(M!==null)Et=M.getViewport(St);else{const F=_.getViewSubImage(y,St);Et=F.viewport,Vt===0&&(t.setRenderTargetTextures(T,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(T))}let Bt=D[Vt];Bt===void 0&&(Bt=new Gn,Bt.layers.enable(Vt),Bt.viewport=new We,D[Vt]=Bt),Bt.matrix.fromArray(St.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(St.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Et.x,Et.y,Et.width,Et.height),Vt===0&&(w.matrix.copy(Bt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),gt===!0&&w.cameras.push(Bt)}const Dt=l.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Vt=_.getDepthInformation(Rt[0]);Vt&&Vt.isValid&&Vt.texture&&b.init(t,Vt,l.renderState)}}for(let Rt=0;Rt<C.length;Rt++){const gt=R[Rt],Dt=C[Rt];gt!==null&&Dt!==void 0&&Dt.update(gt,ft,m||f)}P&&P(Q,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),E=null}const xt=new by;xt.setAnimationLoop(nt),this.setAnimationLoop=function(Q){P=Q},this.dispose=function(){}}}const Er=new Vi,c2=new je;function u2(s,t){function i(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,gy(s)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function l(S,g,T,C,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(S,g):g.isMeshToonMaterial?(c(S,g),_(S,g)):g.isMeshPhongMaterial?(c(S,g),v(S,g)):g.isMeshStandardMaterial?(c(S,g),y(S,g),g.isMeshPhysicalMaterial&&M(S,g,R)):g.isMeshMatcapMaterial?(c(S,g),E(S,g)):g.isMeshDepthMaterial?c(S,g):g.isMeshDistanceMaterial?(c(S,g),b(S,g)):g.isMeshNormalMaterial?c(S,g):g.isLineBasicMaterial?(f(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?p(S,g,T,C):g.isSpriteMaterial?m(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,i(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===Kn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,i(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===Kn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,i(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,i(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const T=t.get(g),C=T.envMap,R=T.envMapRotation;C&&(S.envMap.value=C,Er.copy(R),Er.x*=-1,Er.y*=-1,Er.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),S.envMapRotation.value.setFromMatrix4(c2.makeRotationFromEuler(Er)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,S.aoMapTransform))}function f(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function p(S,g,T,C){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*T,S.scale.value=C*.5,g.map&&(S.map.value=g.map,i(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function m(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function v(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function _(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function y(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function M(S,g,T){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Kn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=T.texture,S.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,g){g.matcap&&(S.matcap.value=g.matcap)}function b(S,g){const T=t.get(g).light;S.referencePosition.value.setFromMatrixPosition(T.matrixWorld),S.nearDistance.value=T.shadow.camera.near,S.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function f2(s,t,i,r){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(T,C){const R=C.program;r.uniformBlockBinding(T,R)}function m(T,C){let R=l[T.id];R===void 0&&(E(T),R=v(T),l[T.id]=R,T.addEventListener("dispose",S));const V=C.program;r.updateUBOMapping(T,V);const O=t.render.frame;c[T.id]!==O&&(y(T),c[T.id]=O)}function v(T){const C=_();T.__bindingPointIndex=C;const R=s.createBuffer(),V=T.__size,O=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,V,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,R),R}function _(){for(let T=0;T<d;T++)if(f.indexOf(T)===-1)return f.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(T){const C=l[T.id],R=T.uniforms,V=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let O=0,N=R.length;O<N;O++){const z=Array.isArray(R[O])?R[O]:[R[O]];for(let D=0,w=z.length;D<w;D++){const G=z[D];if(M(G,O,D,V)===!0){const $=G.__offset,j=Array.isArray(G.value)?G.value:[G.value];let et=0;for(let st=0;st<j.length;st++){const B=j[st],W=b(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,$+et,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,et),et+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(T,C,R,V){const O=T.value,N=C+"_"+R;if(V[N]===void 0)return typeof O=="number"||typeof O=="boolean"?V[N]=O:V[N]=O.clone(),!0;{const z=V[N];if(typeof O=="number"||typeof O=="boolean"){if(z!==O)return V[N]=O,!0}else if(z.equals(O)===!1)return z.copy(O),!0}return!1}function E(T){const C=T.uniforms;let R=0;const V=16;for(let N=0,z=C.length;N<z;N++){const D=Array.isArray(C[N])?C[N]:[C[N]];for(let w=0,G=D.length;w<G;w++){const $=D[w],j=Array.isArray($.value)?$.value:[$.value];for(let et=0,st=j.length;et<st;et++){const B=j[et],W=b(B),K=R%V,_t=K%W.boundary,Tt=K+_t;R+=_t,Tt!==0&&V-Tt<W.storage&&(R+=V-Tt),$.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=R,R+=W.storage}}}const O=R%V;return O>0&&(R+=V-O),T.__size=R,T.__cache={},this}function b(T){const C={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(C.boundary=4,C.storage=4):T.isVector2?(C.boundary=8,C.storage=8):T.isVector3||T.isColor?(C.boundary=16,C.storage=12):T.isVector4?(C.boundary=16,C.storage=16):T.isMatrix3?(C.boundary=48,C.storage=48):T.isMatrix4?(C.boundary=64,C.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),C}function S(T){const C=T.target;C.removeEventListener("dispose",S);const R=f.indexOf(C.__bindingPointIndex);f.splice(R,1),s.deleteBuffer(l[C.id]),delete l[C.id],delete c[C.id]}function g(){for(const T in l)s.deleteBuffer(l[T]);f=[],l={},c={}}return{bind:p,update:m,dispose:g}}class Pp{constructor(t={}){const{canvas:i=VM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=f;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,g=null;const T=[],C=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let V=!1;this._outputColorSpace=si;let O=0,N=0,z=null,D=-1,w=null;const G=new We,$=new We;let j=null;const et=new Se(0);let st=0,B=i.width,W=i.height,K=1,_t=null,Tt=null;const P=new We(0,0,B,W),nt=new We(0,0,B,W);let xt=!1;const Q=new Tp;let ft=!1,Rt=!1;const gt=new je,Dt=new je,Xt=new Y,Vt=new We,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Bt(){return z===null?K:1}let F=r;function he(L,J){return i.getContext(L,J)}try{const L={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${pp}`),i.addEventListener("webglcontextlost",Ht,!1),i.addEventListener("webglcontextrestored",wt,!1),i.addEventListener("webglcontextcreationerror",vt,!1),F===null){const J="webgl2";if(F=he(J,L),F===null)throw he(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Jt,ue,Pt,ie,jt,re,Ze,H,A,rt,mt,bt,ht,Zt,Ut,qt,Kt,Mt,Lt,$t,Wt,Nt,se,q;function Ot(){Jt=new MT(F),Jt.init(),Nt=new a2(F,Jt),ue=new mT(F,Jt,t,Nt),Pt=new n2(F,Jt),ue.reverseDepthBuffer&&y&&Pt.buffers.depth.setReversed(!0),ie=new TT(F),jt=new kA,re=new i2(F,Jt,Pt,jt,ue,Nt,ie),Ze=new _T(R),H=new xT(R),A=new UE(F),se=new dT(F,A),rt=new ET(F,A,ie,se),mt=new RT(F,rt,A,ie),Lt=new AT(F,ue,re),qt=new gT(jt),bt=new VA(R,Ze,H,Jt,ue,se,qt),ht=new u2(R,jt),Zt=new WA,Ut=new QA(Jt),Mt=new hT(R,Ze,H,Pt,mt,M,p),Kt=new t2(R,mt,ue),q=new f2(F,ie,ue,Pt),$t=new pT(F,Jt,ie),Wt=new bT(F,Jt,ie),ie.programs=bt.programs,R.capabilities=ue,R.extensions=Jt,R.properties=jt,R.renderLists=Zt,R.shadowMap=Kt,R.state=Pt,R.info=ie}Ot();const At=new l2(R,F);this.xr=At,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const L=Jt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Jt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(L){L!==void 0&&(K=L,this.setSize(B,W,!1))},this.getSize=function(L){return L.set(B,W)},this.setSize=function(L,J,lt=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=L,W=J,i.width=Math.floor(L*K),i.height=Math.floor(J*K),lt===!0&&(i.style.width=L+"px",i.style.height=J+"px"),this.setViewport(0,0,L,J)},this.getDrawingBufferSize=function(L){return L.set(B*K,W*K).floor()},this.setDrawingBufferSize=function(L,J,lt){B=L,W=J,K=lt,i.width=Math.floor(L*lt),i.height=Math.floor(J*lt),this.setViewport(0,0,L,J)},this.getCurrentViewport=function(L){return L.copy(G)},this.getViewport=function(L){return L.copy(P)},this.setViewport=function(L,J,lt,ct){L.isVector4?P.set(L.x,L.y,L.z,L.w):P.set(L,J,lt,ct),Pt.viewport(G.copy(P).multiplyScalar(K).round())},this.getScissor=function(L){return L.copy(nt)},this.setScissor=function(L,J,lt,ct){L.isVector4?nt.set(L.x,L.y,L.z,L.w):nt.set(L,J,lt,ct),Pt.scissor($.copy(nt).multiplyScalar(K).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(L){Pt.setScissorTest(xt=L)},this.setOpaqueSort=function(L){_t=L},this.setTransparentSort=function(L){Tt=L},this.getClearColor=function(L){return L.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(L=!0,J=!0,lt=!0){let ct=0;if(L){let Z=!1;if(z!==null){const Ct=z.texture.format;Z=Ct===Sp||Ct===yp||Ct===vp}if(Z){const Ct=z.texture.type,zt=Ct===Gi||Ct===Ur||Ct===Zo||Ct===Ko||Ct===gp||Ct===_p,kt=Mt.getClearColor(),Ft=Mt.getClearAlpha(),le=kt.r,ce=kt.g,te=kt.b;zt?(E[0]=le,E[1]=ce,E[2]=te,E[3]=Ft,F.clearBufferuiv(F.COLOR,0,E)):(b[0]=le,b[1]=ce,b[2]=te,b[3]=Ft,F.clearBufferiv(F.COLOR,0,b))}else ct|=F.COLOR_BUFFER_BIT}J&&(ct|=F.DEPTH_BUFFER_BIT),lt&&(ct|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ht,!1),i.removeEventListener("webglcontextrestored",wt,!1),i.removeEventListener("webglcontextcreationerror",vt,!1),Mt.dispose(),Zt.dispose(),Ut.dispose(),jt.dispose(),Ze.dispose(),H.dispose(),mt.dispose(),se.dispose(),q.dispose(),bt.dispose(),At.dispose(),At.removeEventListener("sessionstart",ks),At.removeEventListener("sessionend",Xs),Li.stop()};function Ht(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const L=ie.autoReset,J=Kt.enabled,lt=Kt.autoUpdate,ct=Kt.needsUpdate,Z=Kt.type;Ot(),ie.autoReset=L,Kt.enabled=J,Kt.autoUpdate=lt,Kt.needsUpdate=ct,Kt.type=Z}function vt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Gt(L){const J=L.target;J.removeEventListener("dispose",Gt),oe(J)}function oe(L){ze(L),jt.remove(L)}function ze(L){const J=jt.get(L).programs;J!==void 0&&(J.forEach(function(lt){bt.releaseProgram(lt)}),L.isShaderMaterial&&bt.releaseShaderCache(L))}this.renderBufferDirect=function(L,J,lt,ct,Z,Ct){J===null&&(J=St);const zt=Z.isMesh&&Z.matrixWorld.determinant()<0,kt=qs(L,J,lt,ct,Z);Pt.setMaterial(ct,zt);let Ft=lt.index,le=1;if(ct.wireframe===!0){if(Ft=rt.getWireframeAttribute(lt),Ft===void 0)return;le=2}const ce=lt.drawRange,te=lt.attributes.position;let ye=ce.start*le,Ue=(ce.start+ce.count)*le;Ct!==null&&(ye=Math.max(ye,Ct.start*le),Ue=Math.min(Ue,(Ct.start+Ct.count)*le)),Ft!==null?(ye=Math.max(ye,0),Ue=Math.min(Ue,Ft.count)):te!=null&&(ye=Math.max(ye,0),Ue=Math.min(Ue,te.count));const qe=Ue-ye;if(qe<0||qe===1/0)return;se.setup(Z,ct,kt,lt,Ft);let Re,_e=$t;if(Ft!==null&&(Re=A.get(Ft),_e=Wt,_e.setIndex(Re)),Z.isMesh)ct.wireframe===!0?(Pt.setLineWidth(ct.wireframeLinewidth*Bt()),_e.setMode(F.LINES)):_e.setMode(F.TRIANGLES);else if(Z.isLine){let ne=ct.linewidth;ne===void 0&&(ne=1),Pt.setLineWidth(ne*Bt()),Z.isLineSegments?_e.setMode(F.LINES):Z.isLineLoop?_e.setMode(F.LINE_LOOP):_e.setMode(F.LINE_STRIP)}else Z.isPoints?_e.setMode(F.POINTS):Z.isSprite&&_e.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Os("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))_e.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const ne=Z._multiDrawStarts,Ke=Z._multiDrawCounts,Ee=Z._multiDrawCount,Un=Ft?A.get(Ft).bytesPerElement:1,xi=jt.get(ct).currentProgram.getUniforms();for(let zn=0;zn<Ee;zn++)xi.setValue(F,"_gl_DrawID",zn),_e.render(ne[zn]/Un,Ke[zn])}else if(Z.isInstancedMesh)_e.renderInstances(ye,qe,Z.count);else if(lt.isInstancedBufferGeometry){const ne=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ke=Math.min(lt.instanceCount,ne);_e.renderInstances(ye,qe,Ke)}else _e.render(ye,qe)};function De(L,J,lt){L.transparent===!0&&L.side===wi&&L.forceSinglePass===!1?(L.side=Kn,L.needsUpdate=!0,an(L,J,lt),L.side=Ka,L.needsUpdate=!0,an(L,J,lt),L.side=wi):an(L,J,lt)}this.compile=function(L,J,lt=null){lt===null&&(lt=L),g=Ut.get(lt),g.init(J),C.push(g),lt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(J.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),L!==lt&&L.traverseVisible(function(Z){Z.isLight&&Z.layers.test(J.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights();const ct=new Set;return L.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ct=Z.material;if(Ct)if(Array.isArray(Ct))for(let zt=0;zt<Ct.length;zt++){const kt=Ct[zt];De(kt,lt,Z),ct.add(kt)}else De(Ct,lt,Z),ct.add(Ct)}),g=C.pop(),ct},this.compileAsync=function(L,J,lt=null){const ct=this.compile(L,J,lt);return new Promise(Z=>{function Ct(){if(ct.forEach(function(zt){jt.get(zt).currentProgram.isReady()&&ct.delete(zt)}),ct.size===0){Z(L);return}setTimeout(Ct,10)}Jt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let En=null;function yi(L){En&&En(L)}function ks(){Li.stop()}function Xs(){Li.start()}const Li=new by;Li.setAnimationLoop(yi),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(L){En=L,At.setAnimationLoop(L),L===null?Li.stop():Li.start()},At.addEventListener("sessionstart",ks),At.addEventListener("sessionend",Xs),this.render=function(L,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(J),J=At.getCamera()),L.isScene===!0&&L.onBeforeRender(R,L,J,z),g=Ut.get(L,C.length),g.init(J),C.push(g),Dt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Q.setFromProjectionMatrix(Dt),Rt=this.localClippingEnabled,ft=qt.init(this.clippingPlanes,Rt),S=Zt.get(L,T.length),S.init(),T.push(S),At.enabled===!0&&At.isPresenting===!0){const Ct=R.xr.getDepthSensingMesh();Ct!==null&&$a(Ct,J,-1/0,R.sortObjects)}$a(L,J,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(_t,Tt),Et=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Et&&Mt.addToRenderList(S,L),this.info.render.frame++,ft===!0&&qt.beginShadows();const lt=g.state.shadowsArray;Kt.render(lt,L,J),ft===!0&&qt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=S.opaque,Z=S.transmissive;if(g.setupLights(),J.isArrayCamera){const Ct=J.cameras;if(Z.length>0)for(let zt=0,kt=Ct.length;zt<kt;zt++){const Ft=Ct[zt];Ws(ct,Z,L,Ft)}Et&&Mt.render(L);for(let zt=0,kt=Ct.length;zt<kt;zt++){const Ft=Ct[zt];Or(S,L,Ft,Ft.viewport)}}else Z.length>0&&Ws(ct,Z,L,J),Et&&Mt.render(L),Or(S,L,J);z!==null&&N===0&&(re.updateMultisampleRenderTarget(z),re.updateRenderTargetMipmap(z)),L.isScene===!0&&L.onAfterRender(R,L,J),se.resetDefaultState(),D=-1,w=null,C.pop(),C.length>0?(g=C[C.length-1],ft===!0&&qt.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,T.pop(),T.length>0?S=T[T.length-1]:S=null};function $a(L,J,lt,ct){if(L.visible===!1)return;if(L.layers.test(J.layers)){if(L.isGroup)lt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(J);else if(L.isLight)g.pushLight(L),L.castShadow&&g.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Q.intersectsSprite(L)){ct&&Vt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Dt);const zt=mt.update(L),kt=L.material;kt.visible&&S.push(L,zt,kt,lt,Vt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Q.intersectsObject(L))){const zt=mt.update(L),kt=L.material;if(ct&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Vt.copy(L.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Vt.copy(zt.boundingSphere.center)),Vt.applyMatrix4(L.matrixWorld).applyMatrix4(Dt)),Array.isArray(kt)){const Ft=zt.groups;for(let le=0,ce=Ft.length;le<ce;le++){const te=Ft[le],ye=kt[te.materialIndex];ye&&ye.visible&&S.push(L,zt,ye,lt,Vt.z,te)}}else kt.visible&&S.push(L,zt,kt,lt,Vt.z,null)}}const Ct=L.children;for(let zt=0,kt=Ct.length;zt<kt;zt++)$a(Ct[zt],J,lt,ct)}function Or(L,J,lt,ct){const Z=L.opaque,Ct=L.transmissive,zt=L.transparent;g.setupLightsView(lt),ft===!0&&qt.setGlobalState(R.clippingPlanes,lt),ct&&Pt.viewport(G.copy(ct)),Z.length>0&&tr(Z,J,lt),Ct.length>0&&tr(Ct,J,lt),zt.length>0&&tr(zt,J,lt),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Ws(L,J,lt,ct){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ct.id]===void 0&&(g.state.transmissionRenderTarget[ct.id]=new Lr(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?nl:Gi,minFilter:Dr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const Ct=g.state.transmissionRenderTarget[ct.id],zt=ct.viewport||G;Ct.setSize(zt.z*R.transmissionResolutionScale,zt.w*R.transmissionResolutionScale);const kt=R.getRenderTarget(),Ft=R.getActiveCubeFace(),le=R.getActiveMipmapLevel();R.setRenderTarget(Ct),R.getClearColor(et),st=R.getClearAlpha(),st<1&&R.setClearColor(16777215,.5),R.clear(),Et&&Mt.render(lt);const ce=R.toneMapping;R.toneMapping=ja;const te=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),g.setupLightsView(ct),ft===!0&&qt.setGlobalState(R.clippingPlanes,ct),tr(L,lt,ct),re.updateMultisampleRenderTarget(Ct),re.updateRenderTargetMipmap(Ct),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ue=0,qe=J.length;Ue<qe;Ue++){const Re=J[Ue],_e=Re.object,ne=Re.geometry,Ke=Re.material,Ee=Re.group;if(Ke.side===wi&&_e.layers.test(ct.layers)){const Un=Ke.side;Ke.side=Kn,Ke.needsUpdate=!0,Si(_e,lt,ct,ne,Ke,Ee),Ke.side=Un,Ke.needsUpdate=!0,ye=!0}}ye===!0&&(re.updateMultisampleRenderTarget(Ct),re.updateRenderTargetMipmap(Ct))}R.setRenderTarget(kt,Ft,le),R.setClearColor(et,st),te!==void 0&&(ct.viewport=te),R.toneMapping=ce}function tr(L,J,lt){const ct=J.isScene===!0?J.overrideMaterial:null;for(let Z=0,Ct=L.length;Z<Ct;Z++){const zt=L[Z],kt=zt.object,Ft=zt.geometry,le=zt.group;let ce=zt.material;ce.allowOverride===!0&&ct!==null&&(ce=ct),kt.layers.test(lt.layers)&&Si(kt,J,lt,Ft,ce,le)}}function Si(L,J,lt,ct,Z,Ct){L.onBeforeRender(R,J,lt,ct,Z,Ct),L.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Z.onBeforeRender(R,J,lt,ct,L,Ct),Z.transparent===!0&&Z.side===wi&&Z.forceSinglePass===!1?(Z.side=Kn,Z.needsUpdate=!0,R.renderBufferDirect(lt,J,ct,Z,L,Ct),Z.side=Ka,Z.needsUpdate=!0,R.renderBufferDirect(lt,J,ct,Z,L,Ct),Z.side=wi):R.renderBufferDirect(lt,J,ct,Z,L,Ct),L.onAfterRender(R,J,lt,ct,Z,Ct)}function an(L,J,lt){J.isScene!==!0&&(J=St);const ct=jt.get(L),Z=g.state.lights,Ct=g.state.shadowsArray,zt=Z.state.version,kt=bt.getParameters(L,Z.state,Ct,J,lt),Ft=bt.getProgramCacheKey(kt);let le=ct.programs;ct.environment=L.isMeshStandardMaterial?J.environment:null,ct.fog=J.fog,ct.envMap=(L.isMeshStandardMaterial?H:Ze).get(L.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&L.envMap===null?J.environmentRotation:L.envMapRotation,le===void 0&&(L.addEventListener("dispose",Gt),le=new Map,ct.programs=le);let ce=le.get(Ft);if(ce!==void 0){if(ct.currentProgram===ce&&ct.lightsStateVersion===zt)return Xi(L,kt),ce}else kt.uniforms=bt.getUniforms(L),L.onBeforeCompile(kt,R),ce=bt.acquireProgram(kt,Ft),le.set(Ft,ce),ct.uniforms=kt.uniforms;const te=ct.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(te.clippingPlanes=qt.uniform),Xi(L,kt),ct.needsLights=bu(L),ct.lightsStateVersion=zt,ct.needsLights&&(te.ambientLightColor.value=Z.state.ambient,te.lightProbe.value=Z.state.probe,te.directionalLights.value=Z.state.directional,te.directionalLightShadows.value=Z.state.directionalShadow,te.spotLights.value=Z.state.spot,te.spotLightShadows.value=Z.state.spotShadow,te.rectAreaLights.value=Z.state.rectArea,te.ltc_1.value=Z.state.rectAreaLTC1,te.ltc_2.value=Z.state.rectAreaLTC2,te.pointLights.value=Z.state.point,te.pointLightShadows.value=Z.state.pointShadow,te.hemisphereLights.value=Z.state.hemi,te.directionalShadowMap.value=Z.state.directionalShadowMap,te.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,te.spotShadowMap.value=Z.state.spotShadowMap,te.spotLightMatrix.value=Z.state.spotLightMatrix,te.spotLightMap.value=Z.state.spotLightMap,te.pointShadowMap.value=Z.state.pointShadowMap,te.pointShadowMatrix.value=Z.state.pointShadowMatrix),ct.currentProgram=ce,ct.uniformsList=null,ce}function bn(L){if(L.uniformsList===null){const J=L.currentProgram.getUniforms();L.uniformsList=iu.seqWithValue(J.seq,L.uniforms)}return L.uniformsList}function Xi(L,J){const lt=jt.get(L);lt.outputColorSpace=J.outputColorSpace,lt.batching=J.batching,lt.batchingColor=J.batchingColor,lt.instancing=J.instancing,lt.instancingColor=J.instancingColor,lt.instancingMorph=J.instancingMorph,lt.skinning=J.skinning,lt.morphTargets=J.morphTargets,lt.morphNormals=J.morphNormals,lt.morphColors=J.morphColors,lt.morphTargetsCount=J.morphTargetsCount,lt.numClippingPlanes=J.numClippingPlanes,lt.numIntersection=J.numClipIntersection,lt.vertexAlphas=J.vertexAlphas,lt.vertexTangents=J.vertexTangents,lt.toneMapping=J.toneMapping}function qs(L,J,lt,ct,Z){J.isScene!==!0&&(J=St),re.resetTextureUnits();const Ct=J.fog,zt=ct.isMeshStandardMaterial?J.environment:null,kt=z===null?R.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Fs,Ft=(ct.isMeshStandardMaterial?H:Ze).get(ct.envMap||zt),le=ct.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ce=!!lt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),te=!!lt.morphAttributes.position,ye=!!lt.morphAttributes.normal,Ue=!!lt.morphAttributes.color;let qe=ja;ct.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(qe=R.toneMapping);const Re=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,_e=Re!==void 0?Re.length:0,ne=jt.get(ct),Ke=g.state.lights;if(ft===!0&&(Rt===!0||L!==w)){const rn=L===w&&ct.id===D;qt.setState(ct,L,rn)}let Ee=!1;ct.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Ke.state.version||ne.outputColorSpace!==kt||Z.isBatchedMesh&&ne.batching===!1||!Z.isBatchedMesh&&ne.batching===!0||Z.isBatchedMesh&&ne.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&ne.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&ne.instancing===!1||!Z.isInstancedMesh&&ne.instancing===!0||Z.isSkinnedMesh&&ne.skinning===!1||!Z.isSkinnedMesh&&ne.skinning===!0||Z.isInstancedMesh&&ne.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ne.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ne.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ne.instancingMorph===!1&&Z.morphTexture!==null||ne.envMap!==Ft||ct.fog===!0&&ne.fog!==Ct||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==qt.numPlanes||ne.numIntersection!==qt.numIntersection)||ne.vertexAlphas!==le||ne.vertexTangents!==ce||ne.morphTargets!==te||ne.morphNormals!==ye||ne.morphColors!==Ue||ne.toneMapping!==qe||ne.morphTargetsCount!==_e)&&(Ee=!0):(Ee=!0,ne.__version=ct.version);let Un=ne.currentProgram;Ee===!0&&(Un=an(ct,J,Z));let xi=!1,zn=!1,Sn=!1;const Fe=Un.getUniforms(),In=ne.uniforms;if(Pt.useProgram(Un.program)&&(xi=!0,zn=!0,Sn=!0),ct.id!==D&&(D=ct.id,zn=!0),xi||w!==L){Pt.buffers.depth.getReversed()?(gt.copy(L.projectionMatrix),XM(gt),WM(gt),Fe.setValue(F,"projectionMatrix",gt)):Fe.setValue(F,"projectionMatrix",L.projectionMatrix),Fe.setValue(F,"viewMatrix",L.matrixWorldInverse);const Tn=Fe.map.cameraPosition;Tn!==void 0&&Tn.setValue(F,Xt.setFromMatrixPosition(L.matrixWorld)),ue.logarithmicDepthBuffer&&Fe.setValue(F,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Fe.setValue(F,"isOrthographic",L.isOrthographicCamera===!0),w!==L&&(w=L,zn=!0,Sn=!0)}if(Z.isSkinnedMesh){Fe.setOptional(F,Z,"bindMatrix"),Fe.setOptional(F,Z,"bindMatrixInverse");const rn=Z.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Fe.setValue(F,"boneTexture",rn.boneTexture,re))}Z.isBatchedMesh&&(Fe.setOptional(F,Z,"batchingTexture"),Fe.setValue(F,"batchingTexture",Z._matricesTexture,re),Fe.setOptional(F,Z,"batchingIdTexture"),Fe.setValue(F,"batchingIdTexture",Z._indirectTexture,re),Fe.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Fe.setValue(F,"batchingColorTexture",Z._colorsTexture,re));const Ln=lt.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Lt.update(Z,lt,Un),(zn||ne.receiveShadow!==Z.receiveShadow)&&(ne.receiveShadow=Z.receiveShadow,Fe.setValue(F,"receiveShadow",Z.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(In.envMap.value=Ft,In.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&J.environment!==null&&(In.envMapIntensity.value=J.environmentIntensity),zn&&(Fe.setValue(F,"toneMappingExposure",R.toneMappingExposure),ne.needsLights&&Eu(In,Sn),Ct&&ct.fog===!0&&ht.refreshFogUniforms(In,Ct),ht.refreshMaterialUniforms(In,ct,K,W,g.state.transmissionRenderTarget[L.id]),iu.upload(F,bn(ne),In,re)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(iu.upload(F,bn(ne),In,re),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Fe.setValue(F,"center",Z.center),Fe.setValue(F,"modelViewMatrix",Z.modelViewMatrix),Fe.setValue(F,"normalMatrix",Z.normalMatrix),Fe.setValue(F,"modelMatrix",Z.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const rn=ct.uniformsGroups;for(let Tn=0,Pr=rn.length;Tn<Pr;Tn++){const kn=rn[Tn];q.update(kn,Un),q.bind(kn,Un)}}return Un}function Eu(L,J){L.ambientLightColor.needsUpdate=J,L.lightProbe.needsUpdate=J,L.directionalLights.needsUpdate=J,L.directionalLightShadows.needsUpdate=J,L.pointLights.needsUpdate=J,L.pointLightShadows.needsUpdate=J,L.spotLights.needsUpdate=J,L.spotLightShadows.needsUpdate=J,L.rectAreaLights.needsUpdate=J,L.hemisphereLights.needsUpdate=J}function bu(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(L,J,lt){const ct=jt.get(L);ct.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),jt.get(L.texture).__webglTexture=J,jt.get(L.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:lt,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,J){const lt=jt.get(L);lt.__webglFramebuffer=J,lt.__useDefaultFramebuffer=J===void 0};const ul=F.createFramebuffer();this.setRenderTarget=function(L,J=0,lt=0){z=L,O=J,N=lt;let ct=!0,Z=null,Ct=!1,zt=!1;if(L){const Ft=jt.get(L);if(Ft.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(F.FRAMEBUFFER,null),ct=!1;else if(Ft.__webglFramebuffer===void 0)re.setupRenderTarget(L);else if(Ft.__hasExternalTextures)re.rebindTextures(L,jt.get(L.texture).__webglTexture,jt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const te=L.depthTexture;if(Ft.__boundDepthTexture!==te){if(te!==null&&jt.has(te)&&(L.width!==te.image.width||L.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(L)}}const le=L.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(zt=!0);const ce=jt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ce[J])?Z=ce[J][lt]:Z=ce[J],Ct=!0):L.samples>0&&re.useMultisampledRTT(L)===!1?Z=jt.get(L).__webglMultisampledFramebuffer:Array.isArray(ce)?Z=ce[lt]:Z=ce,G.copy(L.viewport),$.copy(L.scissor),j=L.scissorTest}else G.copy(P).multiplyScalar(K).floor(),$.copy(nt).multiplyScalar(K).floor(),j=xt;if(lt!==0&&(Z=ul),Pt.bindFramebuffer(F.FRAMEBUFFER,Z)&&ct&&Pt.drawBuffers(L,Z),Pt.viewport(G),Pt.scissor($),Pt.setScissorTest(j),Ct){const Ft=jt.get(L.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ft.__webglTexture,lt)}else if(zt){const Ft=jt.get(L.texture),le=J;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.__webglTexture,lt,le)}else if(L!==null&&lt!==0){const Ft=jt.get(L.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ft.__webglTexture,lt)}D=-1},this.readRenderTargetPixels=function(L,J,lt,ct,Z,Ct,zt,kt=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=jt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&zt!==void 0&&(Ft=Ft[zt]),Ft){Pt.bindFramebuffer(F.FRAMEBUFFER,Ft);try{const le=L.textures[kt],ce=le.format,te=le.type;if(!ue.textureFormatReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=L.width-ct&&lt>=0&&lt<=L.height-Z&&(L.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+kt),F.readPixels(J,lt,ct,Z,Nt.convert(ce),Nt.convert(te),Ct))}finally{const le=z!==null?jt.get(z).__webglFramebuffer:null;Pt.bindFramebuffer(F.FRAMEBUFFER,le)}}},this.readRenderTargetPixelsAsync=async function(L,J,lt,ct,Z,Ct,zt,kt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=jt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&zt!==void 0&&(Ft=Ft[zt]),Ft)if(J>=0&&J<=L.width-ct&&lt>=0&&lt<=L.height-Z){Pt.bindFramebuffer(F.FRAMEBUFFER,Ft);const le=L.textures[kt],ce=le.format,te=le.type;if(!ue.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ye),F.bufferData(F.PIXEL_PACK_BUFFER,Ct.byteLength,F.STREAM_READ),L.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+kt),F.readPixels(J,lt,ct,Z,Nt.convert(ce),Nt.convert(te),0);const Ue=z!==null?jt.get(z).__webglFramebuffer:null;Pt.bindFramebuffer(F.FRAMEBUFFER,Ue);const qe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await kM(F,qe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ye),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ct),F.deleteBuffer(ye),F.deleteSync(qe),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,J=null,lt=0){const ct=Math.pow(2,-lt),Z=Math.floor(L.image.width*ct),Ct=Math.floor(L.image.height*ct),zt=J!==null?J.x:0,kt=J!==null?J.y:0;re.setTexture2D(L,0),F.copyTexSubImage2D(F.TEXTURE_2D,lt,0,0,zt,kt,Z,Ct),Pt.unbindTexture()};const er=F.createFramebuffer(),Ys=F.createFramebuffer();this.copyTextureToTexture=function(L,J,lt=null,ct=null,Z=0,Ct=null){Ct===null&&(Z!==0?(Os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ct=Z,Z=0):Ct=0);let zt,kt,Ft,le,ce,te,ye,Ue,qe;const Re=L.isCompressedTexture?L.mipmaps[Ct]:L.image;if(lt!==null)zt=lt.max.x-lt.min.x,kt=lt.max.y-lt.min.y,Ft=lt.isBox3?lt.max.z-lt.min.z:1,le=lt.min.x,ce=lt.min.y,te=lt.isBox3?lt.min.z:0;else{const Ln=Math.pow(2,-Z);zt=Math.floor(Re.width*Ln),kt=Math.floor(Re.height*Ln),L.isDataArrayTexture?Ft=Re.depth:L.isData3DTexture?Ft=Math.floor(Re.depth*Ln):Ft=1,le=0,ce=0,te=0}ct!==null?(ye=ct.x,Ue=ct.y,qe=ct.z):(ye=0,Ue=0,qe=0);const _e=Nt.convert(J.format),ne=Nt.convert(J.type);let Ke;J.isData3DTexture?(re.setTexture3D(J,0),Ke=F.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(re.setTexture2DArray(J,0),Ke=F.TEXTURE_2D_ARRAY):(re.setTexture2D(J,0),Ke=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,J.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,J.unpackAlignment);const Ee=F.getParameter(F.UNPACK_ROW_LENGTH),Un=F.getParameter(F.UNPACK_IMAGE_HEIGHT),xi=F.getParameter(F.UNPACK_SKIP_PIXELS),zn=F.getParameter(F.UNPACK_SKIP_ROWS),Sn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Re.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Re.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,le),F.pixelStorei(F.UNPACK_SKIP_ROWS,ce),F.pixelStorei(F.UNPACK_SKIP_IMAGES,te);const Fe=L.isDataArrayTexture||L.isData3DTexture,In=J.isDataArrayTexture||J.isData3DTexture;if(L.isDepthTexture){const Ln=jt.get(L),rn=jt.get(J),Tn=jt.get(Ln.__renderTarget),Pr=jt.get(rn.__renderTarget);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pr.__webglFramebuffer);for(let kn=0;kn<Ft;kn++)Fe&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,jt.get(L).__webglTexture,Z,te+kn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,jt.get(J).__webglTexture,Ct,qe+kn)),F.blitFramebuffer(le,ce,zt,kt,ye,Ue,zt,kt,F.DEPTH_BUFFER_BIT,F.NEAREST);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||L.isRenderTargetTexture||jt.has(L)){const Ln=jt.get(L),rn=jt.get(J);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,er),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ys);for(let Tn=0;Tn<Ft;Tn++)Fe?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ln.__webglTexture,Z,te+Tn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ln.__webglTexture,Z),In?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,rn.__webglTexture,Ct,qe+Tn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,rn.__webglTexture,Ct),Z!==0?F.blitFramebuffer(le,ce,zt,kt,ye,Ue,zt,kt,F.COLOR_BUFFER_BIT,F.NEAREST):In?F.copyTexSubImage3D(Ke,Ct,ye,Ue,qe+Tn,le,ce,zt,kt):F.copyTexSubImage2D(Ke,Ct,ye,Ue,le,ce,zt,kt);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else In?L.isDataTexture||L.isData3DTexture?F.texSubImage3D(Ke,Ct,ye,Ue,qe,zt,kt,Ft,_e,ne,Re.data):J.isCompressedArrayTexture?F.compressedTexSubImage3D(Ke,Ct,ye,Ue,qe,zt,kt,Ft,_e,Re.data):F.texSubImage3D(Ke,Ct,ye,Ue,qe,zt,kt,Ft,_e,ne,Re):L.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ct,ye,Ue,zt,kt,_e,ne,Re.data):L.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ct,ye,Ue,Re.width,Re.height,_e,Re.data):F.texSubImage2D(F.TEXTURE_2D,Ct,ye,Ue,zt,kt,_e,ne,Re);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ee),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Un),F.pixelStorei(F.UNPACK_SKIP_PIXELS,xi),F.pixelStorei(F.UNPACK_SKIP_ROWS,zn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Sn),Ct===0&&J.generateMipmaps&&F.generateMipmap(Ke),Pt.unbindTexture()},this.copyTextureToTexture3D=function(L,J,lt=null,ct=null,Z=0){return Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,J,lt,ct,Z)},this.initRenderTarget=function(L){jt.get(L).__webglFramebuffer===void 0&&re.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?re.setTextureCube(L,0):L.isData3DTexture?re.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?re.setTexture2DArray(L,0):re.setTexture2D(L,0),Pt.unbindTexture()},this.resetState=function(){O=0,N=0,z=null,Pt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(t),i.unpackColorSpace=Oe._getUnpackColorSpace()}}const Bv=["Booking","Analytics","Pricing","Payments","Users","API","Reports","Notify"];function h2(s){const t=document.createElement("canvas");t.width=256,t.height=96;const i=t.getContext("2d");i.clearRect(0,0,t.width,t.height),i.fillStyle="rgba(8, 13, 28, 0.76)",i.strokeStyle="rgba(42, 248, 255, 0.42)",i.lineWidth=3,i.roundRect(18,18,220,54,12),i.fill(),i.stroke(),i.fillStyle="#f7fbff",i.font="800 28px Inter, Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(s,128,46);const r=new Sy(t),l=new cu({map:r,transparent:!0,opacity:.92}),c=new op(l);return c.scale.set(1.52,.57,1),c}function d2(){const s=Ce.useRef(null);return Ce.useEffect(()=>{const t=s.current;if(!t)return;const i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=new bp;r.fog=new Ep(395539,.048);const l=new Gn(38,1,.1,100);l.position.set(.2,2.3,8.4),l.lookAt(0,0,0);const c=new Pp({antialias:!0,alpha:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setClearColor(0,0),t.appendChild(c.domElement);const f=new li;f.scale.setScalar(.86),r.add(f);const d=new Lp(8052735,.45),p=new mu(2816255,7.5,15);p.position.set(-2.2,3.4,4.2);const m=new mu(14286661,3.2,12);m.position.set(3.4,1.6,2.2),r.add(d,p,m);const v=new ME({color:2683647,emissive:697272,emissiveIntensity:.72,roughness:.18,metalness:.06,transmission:.25,thickness:.6,transparent:!0,opacity:.78}),_=new en(new Cp(1.03,5),v);f.add(_);const y=new en(new Hi(1.42,48,32),new vi({color:2816255,transparent:!0,opacity:.08,wireframe:!0}));f.add(y);const M=new vi({color:14286661,transparent:!0,opacity:.24}),E=[1.85,2.45,3.05].map((j,et)=>{const st=new en(new Su(j,.006,8,160),M.clone());return st.rotation.set(Math.PI/2+et*.38,et*.18,et*.34),f.add(st),st}),b=new vi({color:1054759,transparent:!0,opacity:.72,side:wi}),S=new uu({color:2816255,transparent:!0,opacity:.5}),g=Bv.map((j,et)=>{const st=et/Bv.length*Math.PI*2,B=3.2+et%2*.35,W=new li;W.position.set(Math.cos(st)*B,Math.sin(et*1.7)*.5,Math.sin(st)*1.35),W.rotation.set(.12*Math.sin(st),-st*.28,.04*et);const K=new en(new ll(1.52,.68),b.clone()),_t=new SE(new xE(K.geometry),S.clone()),Tt=h2(j);return Tt.position.z=.025,W.add(K,_t,Tt),f.add(W),W}),T=new uu({color:2816255,transparent:!0,opacity:.18});g.forEach(j=>{const et=[new Y(0,0,0),j.position.clone().multiplyScalar(.78)],st=new Ap(new ln().setFromPoints(et),T.clone());f.add(st)});const C=new ln,R=800,V=new Float32Array(R*3);for(let j=0;j<R;j+=1){const et=j*3;V[et]=(Math.random()-.5)*16,V[et+1]=(Math.random()-.5)*9,V[et+2]=-Math.random()*8-1}C.setAttribute("position",new Dn(V,3));const O=new yu(C,new ol({color:14543103,size:.018,transparent:!0,opacity:.72}));r.add(O);const N=new fe,z=j=>{const et=t.getBoundingClientRect();N.x=((j.clientX-et.left)/et.width-.5)*2,N.y=((j.clientY-et.top)/et.height-.5)*-2};t.addEventListener("pointermove",z);const D=()=>{const{width:j,height:et}=t.getBoundingClientRect();c.setSize(j,et,!1),l.aspect=j/Math.max(et,1),l.updateProjectionMatrix()};D(),window.addEventListener("resize",D);let w=0;const G=new Np,$=()=>{const j=G.getElapsedTime(),et=i?.12:1;f.rotation.y=j*.13*et+N.x*.12,f.rotation.x=-.08+N.y*.08,_.rotation.x=j*.42*et,_.rotation.y=j*.31*et,y.rotation.y=-j*.16*et,O.rotation.y=j*.018*et,E.forEach((st,B)=>{st.rotation.z=j*(.12+B*.045)*et}),g.forEach((st,B)=>{st.position.y+=Math.sin(j*1.4+B)*.0016*et,st.lookAt(l.position)}),c.render(r,l),w=requestAnimationFrame($)};return $(),()=>{cancelAnimationFrame(w),t.removeEventListener("pointermove",z),window.removeEventListener("resize",D),c.dispose(),t.removeChild(c.domElement),r.traverse(j=>{j.geometry&&j.geometry.dispose(),j.material&&(Array.isArray(j.material)?j.material:[j.material]).forEach(st=>{st.map&&st.map.dispose(),st.dispose()})})}},[]),I.createElement("div",{className:"commandScene",ref:s,"aria-label":"Animated command center scene"})}const p2=[{size:.11,distance:.72,color:12038304,speed:1.8},{size:.16,distance:1,color:14063438,speed:1.35},{size:.17,distance:1.32,color:2796031,speed:1.06},{size:.14,distance:1.67,color:13984831,speed:.86},{size:.25,distance:2.1,color:12950357,speed:.6}];function m2(){const s=Ce.useRef(null);return Ce.useEffect(()=>{const t=s.current;if(!t)return;const i=new bp,r=new Gn(42,1,.1,60);r.position.set(0,2.2,4.8),r.lookAt(0,0,0);const l=new Pp({antialias:!0,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setClearColor(0,0),t.appendChild(l.domElement),i.add(new Lp(9480447,.38));const c=new mu(16766826,8,18);c.position.set(0,0,0),i.add(c);const f=new li;f.rotation.x=-.72,i.add(f);const d=new en(new Hi(.42,40,28),new pu({color:16753951,emissive:16743168,emissiveIntensity:1.5,roughness:.48}));f.add(d);const p=new en(new Hi(.68,40,28),new vi({color:16757802,transparent:!0,opacity:.12}));f.add(p);const m=new vi({color:8187135,transparent:!0,opacity:.22}),v=p2.map((O,N)=>{const z=new en(new Su(O.distance,.003,8,120),m.clone());f.add(z);const D=new li,w=new en(new Hi(O.size,28,18),new pu({color:O.color,roughness:.58,metalness:.02,emissive:O.color,emissiveIntensity:.08}));return D.add(w),D.userData={planet:O,angle:N*1.1},f.add(D),{group:D,body:w,orbit:z}}),_=new ln,y=420,M=new Float32Array(y*3);for(let O=0;O<y;O+=1){const N=O*3;M[N]=(Math.random()-.5)*8,M[N+1]=(Math.random()-.5)*5,M[N+2]=-Math.random()*4}_.setAttribute("position",new Dn(M,3));const E=new yu(_,new ol({color:16777215,size:.012,transparent:!0,opacity:.76}));i.add(E);let b=!1;const S=()=>{b=!0},g=()=>{b=!1};t.addEventListener("pointerenter",S),t.addEventListener("pointerleave",g);const T=()=>{const{width:O,height:N}=t.getBoundingClientRect();l.setSize(O,N,!1),r.aspect=O/Math.max(N,1),r.updateProjectionMatrix()};T(),window.addEventListener("resize",T);let C=0;const R=new Np,V=()=>{const O=R.getElapsedTime(),N=b?1.85:1;f.rotation.z=O*.08,p.scale.setScalar(1+Math.sin(O*2)*.035),v.forEach(({group:z,body:D},w)=>{const{planet:G}=z.userData,$=z.userData.angle+O*G.speed*.34*N;z.position.set(Math.cos($)*G.distance,Math.sin($)*G.distance,0),D.rotation.y=O*(.8+w*.08)}),E.rotation.y=O*.025,l.render(i,r),C=requestAnimationFrame(V)};return V(),()=>{cancelAnimationFrame(C),t.removeEventListener("pointerenter",S),t.removeEventListener("pointerleave",g),window.removeEventListener("resize",T),l.dispose(),t.removeChild(l.domElement),i.traverse(O=>{O.geometry&&O.geometry.dispose(),O.material&&(Array.isArray(O.material)?O.material:[O.material]).forEach(z=>z.dispose())})}},[]),I.createElement("div",{className:"solarPreviewScene",ref:s,"aria-hidden":"true"})}const g2=[["SaaS Platforms","Complex dashboards, admin panels, booking systems, pricing tools and product workflows."],["Interactive UI","Motion systems, micro-interactions, smooth transitions and interface storytelling."],["Three.js Experiences","Procedural scenes, camera systems, particles, lighting and immersive web experiences."]],_2=[["Hospitality SaaS","Booking platforms, pricing logic, payments, analytics and admin workflows."],["Recruitment Platforms","Candidate flows, filters, resume management, notifications and API-connected interfaces."],["Enterprise UI","Responsive systems, admin interfaces, refactoring, maintainability and performance."]],v2=[["Core",["React","Vue","TypeScript","JavaScript"]],["State & Data",["Redux Toolkit","RTK Query","React Query","Pinia"]],["UI",["MUI","Ant Design","Tailwind","SCSS"]],["3D & Motion",["Three.js","GSAP","Framer Motion","GLSL"]],["Testing",["Jest","Vitest"]]];function y2(){const[s,t]=Ce.useState(!1);return[s,()=>{t(!0),window.setTimeout(()=>{window.location.href="/3d"},520)}]}function S2(){const[s,t]=y2();return I.createElement(I.Fragment,null,I.createElement("div",{className:`routeVeil ${s?"isActive":""}`,"aria-hidden":"true"}),I.createElement("header",{id:"top",className:"landingHero"},I.createElement("section",{className:"landingHeroCopy","aria-labelledby":"hero-title"},I.createElement("p",{className:"kicker"},I.createElement(Kv,{size:16})," Frontend Engineer · React · Vue · Three.js"),I.createElement("h1",{id:"hero-title"},wr.headline),I.createElement("p",null,wr.summary),I.createElement("div",{className:"ctaRow"},I.createElement("button",{className:"button button--primary",type:"button",onClick:t},I.createElement(yd,{size:18})," Explore 3D Experience"),I.createElement(Us,{variant:"secondary",href:wr.github,target:"_blank",rel:"noreferrer"},I.createElement(_d,{size:18})," GitHub ",I.createElement(U_,{size:16}))),I.createElement("div",{className:"landingBadges"},["4+ Years","Commercial Products","TypeScript","Three.js","Available Worldwide"].map(i=>I.createElement("span",{key:i},i)))),I.createElement(d2,null)),I.createElement("section",{className:"featured3d","aria-labelledby":"featured-title"},I.createElement("div",null,I.createElement("p",{className:"kicker"},"Featured 3D Experience"),I.createElement("h2",{id:"featured-title"},"Solar Interface System"),I.createElement("p",null,"A cinematic Three.js experiment inspired by mission control interfaces. Interactive planets, orbit animation, particle fields, real-time lighting and smooth camera movement."),I.createElement("button",{className:"button button--primary",type:"button",onClick:t},"Launch Experience ",I.createElement(U_,{size:16}))),I.createElement("button",{className:"solarPreviewButton",type:"button",onClick:t,"aria-label":"Launch Solar Interface System"},I.createElement(m2,null))),I.createElement("section",{className:"landingSection",id:"build"},I.createElement("div",{className:"landingSectionIntro"},I.createElement("p",{className:"kicker"},"What I Build"),I.createElement("h2",null,"Interfaces built for real products.")),I.createElement("div",{className:"landingCardGrid"},g2.map(([i,r])=>I.createElement("article",{className:"landingCard",key:i},I.createElement("h3",null,i),I.createElement("p",null,r))))),I.createElement("section",{className:"landingSection",id:"experience"},I.createElement("div",{className:"landingSectionIntro"},I.createElement("p",{className:"kicker"},"Commercial Experience"),I.createElement("h2",null,"Built for real users, not only portfolios.")),I.createElement("div",{className:"landingCardGrid"},_2.map(([i,r])=>I.createElement("article",{className:"landingCard compact",key:i},I.createElement("h3",null,i),I.createElement("p",null,r))))),I.createElement("section",{className:"landingSection",id:"stack"},I.createElement("div",{className:"landingSectionIntro"},I.createElement("p",{className:"kicker"},"Technology"),I.createElement("h2",null,"Frontend toolkit for product systems.")),I.createElement("div",{className:"techGrid"},v2.map(([i,r])=>I.createElement("article",{className:"techGroup",key:i},I.createElement("h3",null,i),I.createElement("div",null,r.map(l=>I.createElement("span",{key:l},l))),i==="3D & Motion"?I.createElement("button",{type:"button",onClick:t},"See 3D case"):null)))),I.createElement("section",{className:"launchSequence"},I.createElement("div",null,I.createElement("p",{className:"kicker"},"Launch Sequence"),I.createElement("h2",null,"Ready to explore a complete Three.js experience?"),I.createElement("p",null,"Enter a dedicated interactive solar system built with animated planets, orbit mechanics, particles, lighting and cinematic camera movement."),I.createElement("button",{className:"button button--primary",type:"button",onClick:t},"Launch Solar Interface")),I.createElement("div",{className:"systemChecks","aria-hidden":"true"},["System Check","Lighting","Particles","Camera","Orbit Engine","Ready"].map(i=>I.createElement("span",{key:i},i)))),I.createElement("footer",{className:"landingContact",id:"contact"},I.createElement("div",null,I.createElement("p",{className:"kicker"},"Contact"),I.createElement("h2",null,"Let’s build something memorable."),I.createElement("p",null,"Open to frontend roles, creative engineering projects and interactive web experiences.")),I.createElement("div",{className:"ctaRow"},I.createElement(Us,{variant:"secondary",href:wr.github,target:"_blank",rel:"noreferrer"},I.createElement(_d,{size:18})," GitHub"),I.createElement(Us,{href:jv},I.createElement(vd,{size:18})," Email"),I.createElement(Us,{variant:"secondary",href:"https://t.me/disasterwoman",target:"_blank",rel:"noreferrer"},"Telegram"))))}function x2(s){return Object.prototype.toString.call(s)==="[object Object]"}function Fv(s){return x2(s)||Array.isArray(s)}function M2(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function zp(s,t){const i=Object.keys(s),r=Object.keys(t);if(i.length!==r.length)return!1;const l=JSON.stringify(Object.keys(s.breakpoints||{})),c=JSON.stringify(Object.keys(t.breakpoints||{}));return l!==c?!1:i.every(f=>{const d=s[f],p=t[f];return typeof d=="function"?`${d}`==`${p}`:!Fv(d)||!Fv(p)?d===p:zp(d,p)})}function Hv(s){return s.concat().sort((t,i)=>t.name>i.name?1:-1).map(t=>t.options)}function E2(s,t){if(s.length!==t.length)return!1;const i=Hv(s),r=Hv(t);return i.every((l,c)=>{const f=r[c];return zp(l,f)})}function Ip(s){return typeof s=="number"}function fp(s){return typeof s=="string"}function Mu(s){return typeof s=="boolean"}function Gv(s){return Object.prototype.toString.call(s)==="[object Object]"}function nn(s){return Math.abs(s)}function Bp(s){return Math.sign(s)}function jo(s,t){return nn(s-t)}function b2(s,t){if(s===0||t===0||nn(s)<=nn(t))return 0;const i=jo(nn(s),nn(t));return nn(i/s)}function T2(s){return Math.round(s*100)/100}function $o(s){return tl(s).map(Number)}function Ui(s){return s[cl(s)]}function cl(s){return Math.max(0,s.length-1)}function Fp(s,t){return t===cl(s)}function Vv(s,t=0){return Array.from(Array(s),(i,r)=>t+r)}function tl(s){return Object.keys(s)}function Cy(s,t){return[s,t].reduce((i,r)=>(tl(r).forEach(l=>{const c=i[l],f=r[l],d=Gv(c)&&Gv(f);i[l]=d?Cy(c,f):f}),i),{})}function hp(s,t){return typeof t.MouseEvent<"u"&&s instanceof t.MouseEvent}function A2(s,t){const i={start:r,center:l,end:c};function r(){return 0}function l(p){return c(p)/2}function c(p){return t-p}function f(p,m){return fp(s)?i[s](p):s(t,p,m)}return{measure:f}}function el(){let s=[];function t(l,c,f,d={passive:!0}){let p;if("addEventListener"in l)l.addEventListener(c,f,d),p=()=>l.removeEventListener(c,f,d);else{const m=l;m.addListener(f),p=()=>m.removeListener(f)}return s.push(p),r}function i(){s=s.filter(l=>l())}const r={add:t,clear:i};return r}function R2(s,t,i,r){const l=el(),c=1e3/60;let f=null,d=0,p=0;function m(){l.add(s,"visibilitychange",()=>{s.hidden&&E()})}function v(){M(),l.clear()}function _(S){if(!p)return;f||(f=S,i(),i());const g=S-f;for(f=S,d+=g;d>=c;)i(),d-=c;const T=d/c;r(T),p&&(p=t.requestAnimationFrame(_))}function y(){p||(p=t.requestAnimationFrame(_))}function M(){t.cancelAnimationFrame(p),f=null,d=0,p=0}function E(){f=null,d=0}return{init:m,destroy:v,start:y,stop:M,update:i,render:r}}function w2(s,t){const i=t==="rtl",r=s==="y",l=r?"y":"x",c=r?"x":"y",f=!r&&i?-1:1,d=v(),p=_();function m(E){const{height:b,width:S}=E;return r?b:S}function v(){return r?"top":i?"right":"left"}function _(){return r?"bottom":i?"left":"right"}function y(E){return E*f}return{scroll:l,cross:c,startEdge:d,endEdge:p,measureSize:m,direction:y}}function Nr(s=0,t=0){const i=nn(s-t);function r(m){return m<s}function l(m){return m>t}function c(m){return r(m)||l(m)}function f(m){return c(m)?r(m)?s:t:m}function d(m){return i?m-i*Math.ceil((m-t)/i):m}return{length:i,max:t,min:s,constrain:f,reachedAny:c,reachedMax:l,reachedMin:r,removeOffset:d}}function Dy(s,t,i){const{constrain:r}=Nr(0,s),l=s+1;let c=f(t);function f(y){return i?nn((l+y)%l):r(y)}function d(){return c}function p(y){return c=f(y),_}function m(y){return v().set(d()+y)}function v(){return Dy(s,d(),i)}const _={get:d,set:p,add:m,clone:v};return _}function C2(s,t,i,r,l,c,f,d,p,m,v,_,y,M,E,b,S,g,T){const{cross:C,direction:R}=s,V=["INPUT","SELECT","TEXTAREA"],O={passive:!1},N=el(),z=el(),D=Nr(50,225).constrain(M.measure(20)),w={mouse:300,touch:400},G={mouse:500,touch:600},$=E?43:25;let j=!1,et=0,st=0,B=!1,W=!1,K=!1,_t=!1;function Tt(Et){if(!T)return;function Bt(he){(Mu(T)||T(Et,he))&&Rt(he)}const F=t;N.add(F,"dragstart",he=>he.preventDefault(),O).add(F,"touchmove",()=>{},O).add(F,"touchend",()=>{}).add(F,"touchstart",Bt).add(F,"mousedown",Bt).add(F,"touchcancel",Dt).add(F,"contextmenu",Dt).add(F,"click",Xt,!0)}function P(){N.clear(),z.clear()}function nt(){const Et=_t?i:t;z.add(Et,"touchmove",gt,O).add(Et,"touchend",Dt).add(Et,"mousemove",gt,O).add(Et,"mouseup",Dt)}function xt(Et){const Bt=Et.nodeName||"";return V.includes(Bt)}function Q(){return(E?G:w)[_t?"mouse":"touch"]}function ft(Et,Bt){const F=_.add(Bp(Et)*-1),he=v.byDistance(Et,!E).distance;return E||nn(Et)<D?he:S&&Bt?he*.5:v.byIndex(F.get(),0).distance}function Rt(Et){const Bt=hp(Et,r);_t=Bt,K=E&&Bt&&!Et.buttons&&j,j=jo(l.get(),f.get())>=2,!(Bt&&Et.button!==0)&&(xt(Et.target)||(B=!0,c.pointerDown(Et),m.useFriction(0).useDuration(0),l.set(f),nt(),et=c.readPoint(Et),st=c.readPoint(Et,C),y.emit("pointerDown")))}function gt(Et){if(!hp(Et,r)&&Et.touches.length>=2)return Dt(Et);const F=c.readPoint(Et),he=c.readPoint(Et,C),Jt=jo(F,et),ue=jo(he,st);if(!W&&!_t&&(!Et.cancelable||(W=Jt>ue,!W)))return Dt(Et);const Pt=c.pointerMove(Et);Jt>b&&(K=!0),m.useFriction(.3).useDuration(.75),d.start(),l.add(R(Pt)),Et.preventDefault()}function Dt(Et){const F=v.byDistance(0,!1).index!==_.get(),he=c.pointerUp(Et)*Q(),Jt=ft(R(he),F),ue=b2(he,Jt),Pt=$-10*ue,ie=g+ue/50;W=!1,B=!1,z.clear(),m.useDuration(Pt).useFriction(ie),p.distance(Jt,!E),_t=!1,y.emit("pointerUp")}function Xt(Et){K&&(Et.stopPropagation(),Et.preventDefault(),K=!1)}function Vt(){return B}return{init:Tt,destroy:P,pointerDown:Vt}}function D2(s,t){let r,l;function c(_){return _.timeStamp}function f(_,y){const E=`client${(y||s.scroll)==="x"?"X":"Y"}`;return(hp(_,t)?_:_.touches[0])[E]}function d(_){return r=_,l=_,f(_)}function p(_){const y=f(_)-f(l),M=c(_)-c(r)>170;return l=_,M&&(r=_),y}function m(_){if(!r||!l)return 0;const y=f(l)-f(r),M=c(_)-c(r),E=c(_)-c(l)>170,b=y/M;return M&&!E&&nn(b)>.1?b:0}return{pointerDown:d,pointerMove:p,pointerUp:m,readPoint:f}}function U2(){function s(i){const{offsetTop:r,offsetLeft:l,offsetWidth:c,offsetHeight:f}=i;return{top:r,right:l+c,bottom:r+f,left:l,width:c,height:f}}return{measure:s}}function L2(s){function t(r){return s*(r/100)}return{measure:t}}function N2(s,t,i,r,l,c,f){const d=[s].concat(r);let p,m,v=[],_=!1;function y(S){return l.measureSize(f.measure(S))}function M(S){if(!c)return;m=y(s),v=r.map(y);function g(T){for(const C of T){if(_)return;const R=C.target===s,V=r.indexOf(C.target),O=R?m:v[V],N=y(R?s:r[V]);if(nn(N-O)>=.5){S.reInit(),t.emit("resize");break}}}p=new ResizeObserver(T=>{(Mu(c)||c(S,T))&&g(T)}),i.requestAnimationFrame(()=>{d.forEach(T=>p.observe(T))})}function E(){_=!0,p&&p.disconnect()}return{init:M,destroy:E}}function O2(s,t,i,r,l,c){let f=0,d=0,p=l,m=c,v=s.get(),_=0;function y(){const O=r.get()-s.get(),N=!p;let z=0;return N?(f=0,i.set(r),s.set(r),z=O):(i.set(s),f+=O/p,f*=m,v+=f,s.add(f),z=v-_),d=Bp(z),_=v,V}function M(){const O=r.get()-t.get();return nn(O)<.001}function E(){return p}function b(){return d}function S(){return f}function g(){return C(l)}function T(){return R(c)}function C(O){return p=O,V}function R(O){return m=O,V}const V={direction:b,duration:E,velocity:S,seek:y,settled:M,useBaseFriction:T,useBaseDuration:g,useFriction:R,useDuration:C};return V}function P2(s,t,i,r,l){const c=l.measure(10),f=l.measure(50),d=Nr(.1,.99);let p=!1;function m(){return!(p||!s.reachedAny(i.get())||!s.reachedAny(t.get()))}function v(M){if(!m())return;const E=s.reachedMin(t.get())?"min":"max",b=nn(s[E]-t.get()),S=i.get()-t.get(),g=d.constrain(b/f);i.subtract(S*g),!M&&nn(S)<c&&(i.set(s.constrain(i.get())),r.useDuration(25).useBaseFriction())}function _(M){p=!M}return{shouldConstrain:m,constrain:v,toggleActive:_}}function z2(s,t,i,r,l){const c=Nr(-t+s,0),f=_(),d=v(),p=y();function m(E,b){return jo(E,b)<=1}function v(){const E=f[0],b=Ui(f),S=f.lastIndexOf(E),g=f.indexOf(b)+1;return Nr(S,g)}function _(){return i.map((E,b)=>{const{min:S,max:g}=c,T=c.constrain(E),C=!b,R=Fp(i,b);return C?g:R||m(S,T)?S:m(g,T)?g:T}).map(E=>parseFloat(E.toFixed(3)))}function y(){if(t<=s+l)return[c.max];if(r==="keepSnaps")return f;const{min:E,max:b}=d;return f.slice(E,b)}return{snapsContained:p,scrollContainLimit:d}}function I2(s,t,i){const r=t[0],l=i?r-s:Ui(t);return{limit:Nr(l,r)}}function B2(s,t,i,r){const c=t.min+.1,f=t.max+.1,{reachedMin:d,reachedMax:p}=Nr(c,f);function m(y){return y===1?p(i.get()):y===-1?d(i.get()):!1}function v(y){if(!m(y))return;const M=s*(y*-1);r.forEach(E=>E.add(M))}return{loop:v}}function F2(s){const{max:t,length:i}=s;function r(c){const f=c-t;return i?f/-i:0}return{get:r}}function H2(s,t,i,r,l){const{startEdge:c,endEdge:f}=s,{groupSlides:d}=l,p=_().map(t.measure),m=y(),v=M();function _(){return d(r).map(b=>Ui(b)[f]-b[0][c]).map(nn)}function y(){return r.map(b=>i[c]-b[c]).map(b=>-nn(b))}function M(){return d(m).map(b=>b[0]).map((b,S)=>b+p[S])}return{snaps:m,snapsAligned:v}}function G2(s,t,i,r,l,c){const{groupSlides:f}=l,{min:d,max:p}=r,m=v();function v(){const y=f(c),M=!s||t==="keepSnaps";return i.length===1?[c]:M?y:y.slice(d,p).map((E,b,S)=>{const g=!b,T=Fp(S,b);if(g){const C=Ui(S[0])+1;return Vv(C)}if(T){const C=cl(c)-Ui(S)[0]+1;return Vv(C,Ui(S)[0])}return E})}return{slideRegistry:m}}function V2(s,t,i,r,l){const{reachedAny:c,removeOffset:f,constrain:d}=r;function p(E){return E.concat().sort((b,S)=>nn(b)-nn(S))[0]}function m(E){const b=s?f(E):d(E),S=t.map((T,C)=>({diff:v(T-b,0),index:C})).sort((T,C)=>nn(T.diff)-nn(C.diff)),{index:g}=S[0];return{index:g,distance:b}}function v(E,b){const S=[E,E+i,E-i];if(!s)return E;if(!b)return p(S);const g=S.filter(T=>Bp(T)===b);return g.length?p(g):Ui(S)-i}function _(E,b){const S=t[E]-l.get(),g=v(S,b);return{index:E,distance:g}}function y(E,b){const S=l.get()+E,{index:g,distance:T}=m(S),C=!s&&c(S);if(!b||C)return{index:g,distance:E};const R=t[g]-T,V=E+v(R,0);return{index:g,distance:V}}return{byDistance:y,byIndex:_,shortcut:v}}function k2(s,t,i,r,l,c,f){function d(_){const y=_.distance,M=_.index!==t.get();c.add(y),y&&(r.duration()?s.start():(s.update(),s.render(1),s.update())),M&&(i.set(t.get()),t.set(_.index),f.emit("select"))}function p(_,y){const M=l.byDistance(_,y);d(M)}function m(_,y){const M=t.clone().set(_),E=l.byIndex(M.get(),y);d(E)}return{distance:p,index:m}}function X2(s,t,i,r,l,c,f,d){const p={passive:!0,capture:!0};let m=0;function v(M){if(!d)return;function E(b){if(new Date().getTime()-m>10)return;f.emit("slideFocusStart"),s.scrollLeft=0;const T=i.findIndex(C=>C.includes(b));Ip(T)&&(l.useDuration(0),r.index(T,0),f.emit("slideFocus"))}c.add(document,"keydown",_,!1),t.forEach((b,S)=>{c.add(b,"focus",g=>{(Mu(d)||d(M,g))&&E(S)},p)})}function _(M){M.code==="Tab"&&(m=new Date().getTime())}return{init:v}}function Yo(s){let t=s;function i(){return t}function r(p){t=f(p)}function l(p){t+=f(p)}function c(p){t-=f(p)}function f(p){return Ip(p)?p:p.get()}return{get:i,set:r,add:l,subtract:c}}function Uy(s,t){const i=s.scroll==="x"?f:d,r=t.style;let l=null,c=!1;function f(y){return`translate3d(${y}px,0px,0px)`}function d(y){return`translate3d(0px,${y}px,0px)`}function p(y){if(c)return;const M=T2(s.direction(y));M!==l&&(r.transform=i(M),l=M)}function m(y){c=!y}function v(){c||(r.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:v,to:p,toggleActive:m}}function W2(s,t,i,r,l,c,f,d,p){const v=$o(l),_=$o(l).reverse(),y=g().concat(T());function M(N,z){return N.reduce((D,w)=>D-l[w],z)}function E(N,z){return N.reduce((D,w)=>M(D,z)>0?D.concat([w]):D,[])}function b(N){return c.map((z,D)=>({start:z-r[D]+.5+N,end:z+t-.5+N}))}function S(N,z,D){const w=b(z);return N.map(G=>{const $=D?0:-i,j=D?i:0,et=D?"end":"start",st=w[G][et];return{index:G,loopPoint:st,slideLocation:Yo(-1),translate:Uy(s,p[G]),target:()=>d.get()>st?$:j}})}function g(){const N=f[0],z=E(_,N);return S(z,i,!1)}function T(){const N=t-f[0]-1,z=E(v,N);return S(z,-i,!0)}function C(){return y.every(({index:N})=>{const z=v.filter(D=>D!==N);return M(z,t)<=.1})}function R(){y.forEach(N=>{const{target:z,translate:D,slideLocation:w}=N,G=z();G!==w.get()&&(D.to(G),w.set(G))})}function V(){y.forEach(N=>N.translate.clear())}return{canLoop:C,clear:V,loop:R,loopPoints:y}}function q2(s,t,i){let r,l=!1;function c(p){if(!i)return;function m(v){for(const _ of v)if(_.type==="childList"){p.reInit(),t.emit("slidesChanged");break}}r=new MutationObserver(v=>{l||(Mu(i)||i(p,v))&&m(v)}),r.observe(s,{childList:!0})}function f(){r&&r.disconnect(),l=!0}return{init:c,destroy:f}}function Y2(s,t,i,r){const l={};let c=null,f=null,d,p=!1;function m(){d=new IntersectionObserver(E=>{p||(E.forEach(b=>{const S=t.indexOf(b.target);l[S]=b}),c=null,f=null,i.emit("slidesInView"))},{root:s.parentElement,threshold:r}),t.forEach(E=>d.observe(E))}function v(){d&&d.disconnect(),p=!0}function _(E){return tl(l).reduce((b,S)=>{const g=parseInt(S),{isIntersecting:T}=l[g];return(E&&T||!E&&!T)&&b.push(g),b},[])}function y(E=!0){if(E&&c)return c;if(!E&&f)return f;const b=_(E);return E&&(c=b),E||(f=b),b}return{init:m,destroy:v,get:y}}function j2(s,t,i,r,l,c){const{measureSize:f,startEdge:d,endEdge:p}=s,m=i[0]&&l,v=E(),_=b(),y=i.map(f),M=S();function E(){if(!m)return 0;const T=i[0];return nn(t[d]-T[d])}function b(){if(!m)return 0;const T=c.getComputedStyle(Ui(r));return parseFloat(T.getPropertyValue(`margin-${p}`))}function S(){return i.map((T,C,R)=>{const V=!C,O=Fp(R,C);return V?y[C]+v:O?y[C]+_:R[C+1][d]-T[d]}).map(nn)}return{slideSizes:y,slideSizesWithGaps:M,startGap:v,endGap:_}}function Z2(s,t,i,r,l,c,f,d,p){const{startEdge:m,endEdge:v,direction:_}=s,y=Ip(i);function M(g,T){return $o(g).filter(C=>C%T===0).map(C=>g.slice(C,C+T))}function E(g){return g.length?$o(g).reduce((T,C,R)=>{const V=Ui(T)||0,O=V===0,N=C===cl(g),z=l[m]-c[V][m],D=l[m]-c[C][v],w=!r&&O?_(f):0,G=!r&&N?_(d):0,$=nn(D-G-(z+w));return R&&$>t+p&&T.push(C),N&&T.push(g.length),T},[]).map((T,C,R)=>{const V=Math.max(R[C-1]||0);return g.slice(V,T)}):[]}function b(g){return y?M(g,i):E(g)}return{groupSlides:b}}function K2(s,t,i,r,l,c,f){const{align:d,axis:p,direction:m,startIndex:v,loop:_,duration:y,dragFree:M,dragThreshold:E,inViewThreshold:b,slidesToScroll:S,skipSnaps:g,containScroll:T,watchResize:C,watchSlides:R,watchDrag:V,watchFocus:O}=c,N=2,z=U2(),D=z.measure(t),w=i.map(z.measure),G=w2(p,m),$=G.measureSize(D),j=L2($),et=A2(d,$),st=!_&&!!T,B=_||!!T,{slideSizes:W,slideSizesWithGaps:K,startGap:_t,endGap:Tt}=j2(G,D,w,i,B,l),P=Z2(G,$,S,_,D,w,_t,Tt,N),{snaps:nt,snapsAligned:xt}=H2(G,et,D,w,P),Q=-Ui(nt)+Ui(K),{snapsContained:ft,scrollContainLimit:Rt}=z2($,Q,xt,T,N),gt=st?ft:xt,{limit:Dt}=I2(Q,gt,_),Xt=Dy(cl(gt),v,_),Vt=Xt.clone(),St=$o(i),Et=({dragHandler:Ut,scrollBody:qt,scrollBounds:Kt,options:{loop:Mt}})=>{Mt||Kt.constrain(Ut.pointerDown()),qt.seek()},Bt=({scrollBody:Ut,translate:qt,location:Kt,offsetLocation:Mt,previousLocation:Lt,scrollLooper:$t,slideLooper:Wt,dragHandler:Nt,animation:se,eventHandler:q,scrollBounds:Ot,options:{loop:At}},Ht)=>{const wt=Ut.settled(),vt=!Ot.shouldConstrain(),Gt=At?wt:wt&&vt,oe=Gt&&!Nt.pointerDown();oe&&se.stop();const ze=Kt.get()*Ht+Lt.get()*(1-Ht);Mt.set(ze),At&&($t.loop(Ut.direction()),Wt.loop()),qt.to(Mt.get()),oe&&q.emit("settle"),Gt||q.emit("scroll")},F=R2(r,l,()=>Et(Zt),Ut=>Bt(Zt,Ut)),he=.68,Jt=gt[Xt.get()],ue=Yo(Jt),Pt=Yo(Jt),ie=Yo(Jt),jt=Yo(Jt),re=O2(ue,ie,Pt,jt,y,he),Ze=V2(_,gt,Q,Dt,jt),H=k2(F,Xt,Vt,re,Ze,jt,f),A=F2(Dt),rt=el(),mt=Y2(t,i,f,b),{slideRegistry:bt}=G2(st,T,gt,Rt,P,St),ht=X2(s,i,bt,H,re,rt,f,O),Zt={ownerDocument:r,ownerWindow:l,eventHandler:f,containerRect:D,slideRects:w,animation:F,axis:G,dragHandler:C2(G,s,r,l,jt,D2(G,l),ue,F,H,re,Ze,Xt,f,j,M,E,g,he,V),eventStore:rt,percentOfView:j,index:Xt,indexPrevious:Vt,limit:Dt,location:ue,offsetLocation:ie,previousLocation:Pt,options:c,resizeHandler:N2(t,f,l,i,G,C,z),scrollBody:re,scrollBounds:P2(Dt,ie,jt,re,j),scrollLooper:B2(Q,Dt,ie,[ue,ie,Pt,jt]),scrollProgress:A,scrollSnapList:gt.map(A.get),scrollSnaps:gt,scrollTarget:Ze,scrollTo:H,slideLooper:W2(G,$,Q,W,K,nt,gt,ie,i),slideFocus:ht,slidesHandler:q2(t,f,R),slidesInView:mt,slideIndexes:St,slideRegistry:bt,slidesToScroll:P,target:jt,translate:Uy(G,t)};return Zt}function Q2(){let s={},t;function i(m){t=m}function r(m){return s[m]||[]}function l(m){return r(m).forEach(v=>v(t,m)),p}function c(m,v){return s[m]=r(m).concat([v]),p}function f(m,v){return s[m]=r(m).filter(_=>_!==v),p}function d(){s={}}const p={init:i,emit:l,off:f,on:c,clear:d};return p}const J2={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function $2(s){function t(c,f){return Cy(c,f||{})}function i(c){const f=c.breakpoints||{},d=tl(f).filter(p=>s.matchMedia(p).matches).map(p=>f[p]).reduce((p,m)=>t(p,m),{});return t(c,d)}function r(c){return c.map(f=>tl(f.breakpoints||{})).reduce((f,d)=>f.concat(d),[]).map(s.matchMedia)}return{mergeOptions:t,optionsAtMedia:i,optionsMediaQueries:r}}function tR(s){let t=[];function i(c,f){return t=f.filter(({options:d})=>s.optionsAtMedia(d).active!==!1),t.forEach(d=>d.init(c,s)),f.reduce((d,p)=>Object.assign(d,{[p.name]:p}),{})}function r(){t=t.filter(c=>c.destroy())}return{init:i,destroy:r}}function gu(s,t,i){const r=s.ownerDocument,l=r.defaultView,c=$2(l),f=tR(c),d=el(),p=Q2(),{mergeOptions:m,optionsAtMedia:v,optionsMediaQueries:_}=c,{on:y,off:M,emit:E}=p,b=G;let S=!1,g,T=m(J2,gu.globalOptions),C=m(T),R=[],V,O,N;function z(){const{container:St,slides:Et}=C;O=(fp(St)?s.querySelector(St):St)||s.children[0];const F=fp(Et)?O.querySelectorAll(Et):Et;N=[].slice.call(F||O.children)}function D(St){const Et=K2(s,O,N,r,l,St,p);if(St.loop&&!Et.slideLooper.canLoop()){const Bt=Object.assign({},St,{loop:!1});return D(Bt)}return Et}function w(St,Et){S||(T=m(T,St),C=v(T),R=Et||R,z(),g=D(C),_([T,...R.map(({options:Bt})=>Bt)]).forEach(Bt=>d.add(Bt,"change",G)),C.active&&(g.translate.to(g.location.get()),g.animation.init(),g.slidesInView.init(),g.slideFocus.init(Vt),g.eventHandler.init(Vt),g.resizeHandler.init(Vt),g.slidesHandler.init(Vt),g.options.loop&&g.slideLooper.loop(),O.offsetParent&&N.length&&g.dragHandler.init(Vt),V=f.init(Vt,R)))}function G(St,Et){const Bt=P();$(),w(m({startIndex:Bt},St),Et),p.emit("reInit")}function $(){g.dragHandler.destroy(),g.eventStore.clear(),g.translate.clear(),g.slideLooper.clear(),g.resizeHandler.destroy(),g.slidesHandler.destroy(),g.slidesInView.destroy(),g.animation.destroy(),f.destroy(),d.clear()}function j(){S||(S=!0,d.clear(),$(),p.emit("destroy"),p.clear())}function et(St,Et,Bt){!C.active||S||(g.scrollBody.useBaseFriction().useDuration(Et===!0?0:C.duration),g.scrollTo.index(St,Bt||0))}function st(St){const Et=g.index.add(1).get();et(Et,St,-1)}function B(St){const Et=g.index.add(-1).get();et(Et,St,1)}function W(){return g.index.add(1).get()!==P()}function K(){return g.index.add(-1).get()!==P()}function _t(){return g.scrollSnapList}function Tt(){return g.scrollProgress.get(g.offsetLocation.get())}function P(){return g.index.get()}function nt(){return g.indexPrevious.get()}function xt(){return g.slidesInView.get()}function Q(){return g.slidesInView.get(!1)}function ft(){return V}function Rt(){return g}function gt(){return s}function Dt(){return O}function Xt(){return N}const Vt={canScrollNext:W,canScrollPrev:K,containerNode:Dt,internalEngine:Rt,destroy:j,off:M,on:y,emit:E,plugins:ft,previousScrollSnap:nt,reInit:b,rootNode:gt,scrollNext:st,scrollPrev:B,scrollProgress:Tt,scrollSnapList:_t,scrollTo:et,selectedScrollSnap:P,slideNodes:Xt,slidesInView:xt,slidesNotInView:Q};return w(t,i),setTimeout(()=>p.emit("init"),0),Vt}gu.globalOptions=void 0;function Hp(s={},t=[]){const i=Ce.useRef(s),r=Ce.useRef(t),[l,c]=Ce.useState(),[f,d]=Ce.useState(),p=Ce.useCallback(()=>{l&&l.reInit(i.current,r.current)},[l]);return Ce.useEffect(()=>{zp(i.current,s)||(i.current=s,p())},[s,p]),Ce.useEffect(()=>{E2(r.current,t)||(r.current=t,p())},[t,p]),Ce.useEffect(()=>{if(M2()&&f){gu.globalOptions=Hp.globalOptions;const m=gu(f,i.current,r.current);return c(m),()=>m.destroy()}else c(void 0)},[f,c]),[d,l]}Hp.globalOptions=void 0;function Gp(s,t){const i=document.createElement("canvas");i.width=s,i.height=s;const r=i.getContext("2d");t(r,s);const l=new Sy(i);return l.colorSpace=si,l.anisotropy=8,l}function eR(){return Gp(512,(s,t)=>{const i=s.createRadialGradient(t*.38,t*.34,10,t/2,t/2,t*.56);i.addColorStop(0,"#fff8bd"),i.addColorStop(.28,"#ffd94c"),i.addColorStop(.58,"#ff8b24"),i.addColorStop(1,"#8e230b"),s.fillStyle=i,s.fillRect(0,0,t,t);for(let r=0;r<220;r+=1){const l=Math.random()*t,c=Math.random()*t,f=8+Math.random()*34;s.globalAlpha=.08+Math.random()*.12,s.fillStyle=Math.random()>.45?"#fff3a1":"#ff5a1f",s.beginPath(),s.arc(l,c,f,0,Math.PI*2),s.fill()}s.globalAlpha=1})}function kv({base:s,accent:t,light:i,bands:r=!1,clouds:l=!1}){return Gp(512,(c,f)=>{const d=c.createLinearGradient(0,0,f,f);if(d.addColorStop(0,i),d.addColorStop(.42,s),d.addColorStop(1,t),c.fillStyle=d,c.fillRect(0,0,f,f),r)for(let p=0;p<f;p+=18+Math.random()*20)c.globalAlpha=.18+Math.random()*.18,c.fillStyle=Math.random()>.5?i:t,c.fillRect(0,p,f,6+Math.random()*20);for(let p=0;p<120;p+=1)c.globalAlpha=.06+Math.random()*.14,c.fillStyle=Math.random()>.5?i:t,c.beginPath(),c.ellipse(Math.random()*f,Math.random()*f,12+Math.random()*56,4+Math.random()*22,Math.random()*Math.PI,0,Math.PI*2),c.fill();if(l)for(let p=0;p<90;p+=1)c.globalAlpha=.08+Math.random()*.16,c.fillStyle="#ffffff",c.beginPath(),c.ellipse(Math.random()*f,Math.random()*f,18+Math.random()*70,3+Math.random()*12,Math.random()*Math.PI,0,Math.PI*2),c.fill();c.globalAlpha=1})}function nR(s){return Gp(256,(t,i)=>{const r=t.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);r.addColorStop(0,s),r.addColorStop(.28,s),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(0,0,i,i)})}function Xv(s,t,i="#000000",r=.02){return new pu({color:t,map:s,emissive:i,emissiveIntensity:r,roughness:.82,metalness:.02})}function Wv(s,t="#8eeeff"){const i=[];for(let r=0;r<=240;r+=1){const l=r/240*Math.PI*2;i.push(new Y(Math.cos(l)*s,0,Math.sin(l)*s))}return new Ap(new ln().setFromPoints(i),new uu({color:t,transparent:!0,opacity:.28}))}function gd(s){const t=new ln,i=new Float32Array(s*3),r=new Float32Array(s*3);for(let l=0;l<s;l+=1){const c=8+Math.random()*44,f=Math.random()*Math.PI*2,d=Math.acos(Math.random()*2-1);i[l*3]=c*Math.sin(d)*Math.cos(f),i[l*3+1]=c*Math.cos(d)*.72,i[l*3+2]=c*Math.sin(d)*Math.sin(f);const p=.72+Math.random()*.28;r[l*3]=p,r[l*3+1]=p*(.86+Math.random()*.14),r[l*3+2]=1}return t.setAttribute("position",new Dn(i,3)),t.setAttribute("color",new Dn(r,3)),new yu(t,new ol({size:.028,transparent:!0,opacity:.9,vertexColors:!0,depthWrite:!1}))}function iR(s,t,i){const r=new ln,l=new Float32Array(s*3),c=new Float32Array(s*3);for(let f=0;f<s;f+=1){const d=Math.random()*Math.PI*2,p=t+Math.random()*(i-t);l[f*3]=Math.cos(d)*p,l[f*3+1]=(Math.random()-.5)*.08,l[f*3+2]=Math.sin(d)*p,c[f*3]=.45+Math.random()*.35,c[f*3+1]=.58+Math.random()*.32,c[f*3+2]=.72+Math.random()*.26}return r.setAttribute("position",new Dn(l,3)),r.setAttribute("color",new Dn(c,3)),new yu(r,new ol({size:.025,transparent:!0,opacity:.58,vertexColors:!0,depthWrite:!1}))}function aR(){const s=Ce.useRef(null);return Ce.useEffect(()=>{const t=s.current;if(!t)return;const i=new Pp({antialias:!0,alpha:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.shadowMap.enabled=!0,i.shadowMap.type=Jv,t.appendChild(i.domElement),i.domElement.style.cursor="grab";const r=new bp,l=new Gn(39,1,.1,100);l.position.set(.3,5.8,15.6),r.add(new Lp("#6f8fd1",.42));const c=new mu("#fff0a8",18,54);c.castShadow=!0,r.add(c);const f=new RE("#79ecff",.9);f.position.set(-6,7,5),r.add(f);const d=new li;d.rotation.x=-.18,r.add(d);const p=gd(6200);r.add(p);const m=gd(950);m.material.size=.06,m.material.opacity=.96,r.add(m);const v=gd(260);v.material.size=.12,v.material.opacity=.42,r.add(v);const _=eR(),y=nR("rgba(255, 183, 55, 0.95)"),M=new en(new Hi(.9,80,80),new vi({map:_,color:"#fff0a8"}));d.add(M);const E=new op(new cu({map:y,color:"#ffb347",transparent:!0,opacity:.62,depthWrite:!1,blending:au}));E.scale.set(3.1,3.1,1),d.add(E);const b=[{name:"Mercury",radius:1.45,size:.15,speed:1.45,color:"#9c9a92",y:.02,texture:{base:"#8f8a7a",accent:"#3c3a36",light:"#ddd7c4"}},{name:"Venus",radius:2.12,size:.26,speed:1.08,color:"#c98b3d",y:-.03,texture:{base:"#b66d2b",accent:"#5f2f16",light:"#f2bd70",clouds:!0}},{name:"Earth",radius:2.92,size:.31,speed:.82,color:"#4aa5ff",y:.05,moon:!0,texture:{base:"#235fbf",accent:"#184076",light:"#58c7ff",clouds:!0}},{name:"Mars",radius:3.72,size:.24,speed:.64,color:"#c66a42",y:-.04,texture:{base:"#a94928",accent:"#42180e",light:"#ee9a5d"}},{name:"Jupiter",radius:4.95,size:.55,speed:.43,color:"#d4a15f",y:.03,texture:{base:"#b98243",accent:"#6a3b1f",light:"#f5d192",bands:!0}},{name:"Saturn",radius:6.22,size:.43,speed:.32,color:"#c8b78a",y:-.02,rings:!0,texture:{base:"#b9a56f",accent:"#5c4b31",light:"#efe0b1",bands:!0}},{name:"Uranus",radius:7.28,size:.31,speed:.25,color:"#78d8eb",y:.06,texture:{base:"#57b9cf",accent:"#1e6173",light:"#b8f7ff",bands:!0}}],S=iR(760,3.95,4.48);d.add(S);const g=[],T=b.map((St,Et)=>{const Bt=Wv(St.radius,Et%2?"#b4f6ff":"#fff06a");Bt.rotation.y=Et*.05,d.add(Bt),g.push(Bt);const F=new li;F.rotation.y=Et*.8,d.add(F);const he=kv(St.texture),Jt=new en(new Hi(St.size,48,48),Xv(he,St.color,St.color,.04));Jt.position.set(St.radius,St.y,0),Jt.castShadow=!0,Jt.receiveShadow=!0,F.add(Jt);let ue=null;if(St.moon){ue=new li,ue.position.copy(Jt.position);const Pt=Wv(.56,"#ffffff");Pt.material.opacity=.22,ue.add(Pt),g.push(Pt);const ie=new en(new Hi(.07,20,20),Xv(kv({base:"#c9c9c4",accent:"#5d5d5a",light:"#f7f7ef"}),"#f7fbff","#ffffff",.02));ie.position.x=.56,ue.add(ie),F.add(ue)}if(St.rings){const Pt=new en(new Dp(St.size*1.35,St.size*2.05,80),new vi({color:"#e9d8a4",transparent:!0,opacity:.72,side:wi}));Pt.position.copy(Jt.position),Pt.rotation.set(Math.PI/2.55,.24,.18),F.add(Pt)}return{name:St.name,radius:St.radius,pivot:F,planet:Jt,moonPivot:ue,speed:St.speed,baseY:St.y}}),C=new li,R=new en(new du(.07,.24,18),new vi({color:"#ffffff"}));R.rotation.z=-Math.PI/2;const V=new op(new cu({map:y,color:"#62f6ff",transparent:!0,opacity:.72,blending:au,depthWrite:!1}));V.scale.set(.35,.35,1),C.add(R,V),C.visible=!1,d.add(C);const O=new li,N=new en(new Hi(.1,18,18),new vi({color:"#ffffff"})),z=new en(new du(.08,.9,18),new vi({color:"#62f6ff",transparent:!0,opacity:.44}));z.rotation.z=Math.PI/2,z.position.x=-.45,O.add(N,z),d.add(O);const D=new Np,w=new CE,G=new fe,$={position:new Y(.3,5.8,15.6),lookAt:new Y(.2,0,0)},j=new Y(.2,0,0);let et=-100,st=1,B=!0,W=null,K=0;const _t=St=>{St&&($.position.set(St.radius+.9,1.7,3.2),$.lookAt.set(St.radius,St.baseY,0))},Tt=St=>{const Et=T.find(Bt=>Bt.name===St.detail?.planet);_t(Et)},P=()=>{$.position.set(.3,5.8,15.6),$.lookAt.set(.2,0,0)},nt=()=>{et=D.getElapsedTime(),C.visible=!0},xt=St=>{st=Number(St.detail?.speed||1)},Q=St=>{g.forEach(Et=>{Et.visible=!!St.detail?.enabled})},ft=St=>{B=!!St.detail?.enabled},Rt=St=>{const Et=Math.max(.3,Math.min(1,Number(St.detail?.density||100)/100));p.geometry.setDrawRange(0,Math.floor(6200*Et)),m.geometry.setDrawRange(0,Math.floor(950*Et)),v.geometry.setDrawRange(0,Math.floor(260*Et))},gt=St=>{const Et=i.domElement.getBoundingClientRect();G.x=(St.clientX-Et.left)/Et.width*2-1,G.y=-((St.clientY-Et.top)/Et.height*2-1),w.setFromCamera(G,l);const Bt=w.intersectObjects(T.map(he=>he.planet),!1),F=Bt.length?T.find(he=>he.planet===Bt[0].object):null;W&&W!==F&&(W.planet.scale.setScalar(1),W.planet.material.emissiveIntensity=.04),W=F,i.domElement.style.cursor=W?"pointer":"grab",W&&(W.planet.scale.setScalar(1.16),W.planet.material.emissiveIntensity=.18)},Dt=()=>{W&&(_t(W),window.dispatchEvent(new CustomEvent("space-selected-planet",{detail:{planet:W.name}})))},Xt=()=>{const St=t.clientWidth,Et=t.clientHeight;i.setSize(St,Et),l.aspect=St/Et,l.updateProjectionMatrix()},Vt=()=>{K=requestAnimationFrame(Vt);const St=D.getElapsedTime();d.rotation.y=St*.055*st,p.rotation.y=St*.012,m.rotation.y=-St*.018,v.rotation.y=St*.007,S.rotation.y=St*.08,M.rotation.y=St*.08,M.scale.setScalar(1+Math.sin(St*2.4)*.025),E.scale.setScalar(1+Math.sin(St*1.7)*.08),T.forEach(({pivot:F,planet:he,moonPivot:Jt,speed:ue,baseY:Pt},ie)=>{F.rotation.y=St*ue*st+ie*.8,he.rotation.y=St*(1.2+ie*.08),he.position.y=Pt+Math.sin(St*1.4+ie)*.035,Jt&&(Jt.rotation.y=St*2.4)});const Et=St*.46;if(O.position.set(Math.cos(Et)*6.1,.8+Math.sin(St*1.1)*.45,Math.sin(Et)*2.2),O.rotation.y=-Et,C.visible){const F=Math.min((St-et)/5,1),he=F*Math.PI,Jt=2.92+(3.72-2.92)*F;C.position.set(Jt,.12+Math.sin(he)*.9,Math.sin(F*Math.PI*2)*.42),C.rotation.y=F*Math.PI*2,F>=1&&(C.visible=!1)}const Bt=B?new Y(Math.sin(St*.16)*.22,Math.sin(St*.21)*.12,0):new Y(0,0,0);l.position.lerp($.position.clone().add(Bt),.045),j.lerp($.lookAt,.055),l.lookAt(j),i.render(r,l)};return Xt(),Vt(),window.addEventListener("resize",Xt),window.addEventListener("space-focus-planet",Tt),window.addEventListener("space-reset-camera",P),window.addEventListener("space-launch-probe",nt),window.addEventListener("space-set-orbit-speed",xt),window.addEventListener("space-toggle-orbits",Q),window.addEventListener("space-toggle-cinematic",ft),window.addEventListener("space-set-star-density",Rt),i.domElement.addEventListener("pointermove",gt),i.domElement.addEventListener("click",Dt),()=>{cancelAnimationFrame(K),window.removeEventListener("resize",Xt),window.removeEventListener("space-focus-planet",Tt),window.removeEventListener("space-reset-camera",P),window.removeEventListener("space-launch-probe",nt),window.removeEventListener("space-set-orbit-speed",xt),window.removeEventListener("space-toggle-orbits",Q),window.removeEventListener("space-toggle-cinematic",ft),window.removeEventListener("space-set-star-density",Rt),i.domElement.removeEventListener("pointermove",gt),i.domElement.removeEventListener("click",Dt),t.removeChild(i.domElement),i.dispose(),r.traverse(St=>{St.geometry&&St.geometry.dispose(),St.material&&(St.material.map&&St.material.map.dispose(),St.material.dispose())})}},[]),I.createElement("div",{className:"complexCanvas",ref:s,"aria-label":"Animated solar system scene"})}const qv=[{name:"Mercury",type:"Terrestrial",tagline:"Fast inner world",distance:"57.9M km",period:"88 days",temperature:"167 C",gravity:"3.70 m/s2",diameter:"4,879 km",moons:"0",day:"58d 15h",color:"#b9b2a0"},{name:"Venus",type:"Terrestrial",tagline:"Golden atmosphere",distance:"108.2M km",period:"225 days",temperature:"464 C",gravity:"8.87 m/s2",diameter:"12,104 km",moons:"0",day:"243d",color:"#e7a85d"},{name:"Earth",type:"Terrestrial",tagline:"Blue mission origin",distance:"149.6M km",period:"365 days",temperature:"15 C",gravity:"9.81 m/s2",diameter:"12,742 km",moons:"1",day:"24h",color:"#58c7ff"},{name:"Mars",type:"Terrestrial",tagline:"The red planet",distance:"227.9M km",period:"687 days",temperature:"-63 C",gravity:"3.71 m/s2",diameter:"6,779 km",moons:"2",day:"24h 37m",color:"#ee7a4d"},{name:"Jupiter",type:"Gas giant",tagline:"Storm-scale gravity",distance:"778.5M km",period:"12 years",temperature:"-108 C",gravity:"24.79 m/s2",diameter:"139,820 km",moons:"95",day:"9h 56m",color:"#f0c27a"},{name:"Saturn",type:"Gas giant",tagline:"Ringed signal hub",distance:"1.43B km",period:"29 years",temperature:"-139 C",gravity:"10.44 m/s2",diameter:"116,460 km",moons:"146",day:"10h 42m",color:"#d8c38c"},{name:"Uranus",type:"Ice giant",tagline:"Outer blue vector",distance:"2.87B km",period:"84 years",temperature:"-195 C",gravity:"8.69 m/s2",diameter:"50,724 km",moons:"27",day:"17h 14m",color:"#9cefff"}],rR=[["Performance","Instanced star fields, procedural textures, reduced geometry churn and responsive canvas sizing."],["Interaction","Planet selection, event-driven camera focus, probe launch animation and UI-to-WebGL state control."],["Visuals","Custom canvas materials, glow sprites, rings, asteroid belt, particles and cinematic color states."]],sR=[["01","The Sun","Orange-gold origin point with procedural surface motion and additive glow."],["02","Inner planets","Mercury, Venus, Earth and Mars move through tight transparent orbits."],["03","Asteroid belt","Particle belt adds scale and motion between Mars and Jupiter."],["04","Gas giants","Jupiter and Saturn show larger textured bodies, rings and slower orbital rhythm."],["05","Outer darkness","Blue/violet depth, dense stars and slow cinematic camera drift."]],oR=[["Three.js","Core WebGL scene, planets, lights and orbital motion."],["React","Stateful control panels and event bridge into canvas."],["TypeScript-ready","Data-driven interfaces structured for typed models."],["GLSL-style shaders","Procedural texture and atmosphere-like glow work."],["Vite","Fast local iteration and optimized production build."],["Postprocessing-ready","Scene prepared for bloom, trails and cinematic passes."]];function Yv(s){window.dispatchEvent(new CustomEvent("space-focus-planet",{detail:{planet:s}}))}function lR(){window.dispatchEvent(new CustomEvent("space-launch-probe"))}function cR(){window.dispatchEvent(new CustomEvent("space-reset-camera"))}function uR(){const[s,t]=Hp({align:"start",containScroll:"trimSnaps"}),[i,r]=Ce.useState(null),[l,c]=Ce.useState(1.25),[f,d]=Ce.useState(100),[p,m]=Ce.useState(!0),[v,_]=Ce.useState(!0),[y,M]=Ce.useState(0);Ce.useEffect(()=>{const T=C=>{const R=qv.find(V=>V.name===C.detail?.planet);R&&r(R)};return window.addEventListener("space-selected-planet",T),()=>window.removeEventListener("space-selected-planet",T)},[]),Ce.useEffect(()=>{window.dispatchEvent(new CustomEvent("space-set-orbit-speed",{detail:{speed:l}}))},[l]),Ce.useEffect(()=>{window.dispatchEvent(new CustomEvent("space-toggle-orbits",{detail:{enabled:p}}))},[p]),Ce.useEffect(()=>{window.dispatchEvent(new CustomEvent("space-toggle-cinematic",{detail:{enabled:v}}))},[v]),Ce.useEffect(()=>{window.dispatchEvent(new CustomEvent("space-set-star-density",{detail:{density:f}}))},[f]);const E=T=>{r(T),Yv(T.name),document.querySelector(".missionControl")?.scrollIntoView({behavior:"smooth",block:"center"})},b=Ce.useCallback(()=>t?.scrollPrev(),[t]),S=Ce.useCallback(()=>t?.scrollNext(),[t]),g=()=>{lR(),M(1);const T=Date.now(),C=window.setInterval(()=>{const R=Math.min(Math.round((Date.now()-T)/5e3*100),100);M(R),R>=100&&window.clearInterval(C)},120)};return I.createElement(I.Fragment,null,I.createElement("section",{className:"spaceHero","aria-label":"Cinematic space control room intro"},I.createElement("div",{className:"showcaseCopy"},I.createElement("p",{className:"kicker"},I.createElement(Jx,{size:16})," NASA-style dashboard"),I.createElement("h1",null,"Cinematic space control room."),I.createElement("p",null,"Not a website about space. A space interface you can control: select planets, launch probes, tune telemetry and drive a realistic Three.js solar system."),I.createElement("div",{className:"showcaseBadges","aria-label":"3D scene details"},I.createElement("span",null,"3D planet selection"),I.createElement("span",null,"mission planner"),I.createElement("span",null,"live signal UI")))),I.createElement("section",{className:`missionControl ${i?"hasSelection":""}`,"aria-labelledby":"mission-control-title"},I.createElement("div",{className:"missionScene"},I.createElement(aR,null)),i?I.createElement("aside",{className:"controlPanel"},I.createElement("p",{className:"kicker"},I.createElement(tM,{size:16})," Selected object"),I.createElement("h2",{id:"mission-control-title"},i.name),I.createElement("dl",null,I.createElement("div",null,I.createElement("dt",null,"Distance from Sun"),I.createElement("dd",null,i.distance)),I.createElement("div",null,I.createElement("dt",null,"Orbital period"),I.createElement("dd",null,i.period)),I.createElement("div",null,I.createElement("dt",null,"Gravity"),I.createElement("dd",null,i.gravity)),I.createElement("div",null,I.createElement("dt",null,"Temperature"),I.createElement("dd",null,i.temperature))),I.createElement("div",{className:"controlActions"},I.createElement("button",{type:"button",onClick:()=>Yv(i.name)},"Focus planet"),I.createElement("button",{type:"button",onClick:g},"Launch probe"))):null),I.createElement("section",{className:"spaceSection","aria-labelledby":"archive-title"},I.createElement("div",{className:"spaceIntro"},I.createElement("p",{className:"kicker"},I.createElement(Kv,{size:16})," Planet archive"),I.createElement("h2",{id:"archive-title"},"Explore the system."),I.createElement("p",null,"Each card controls the main mission canvas and focuses the camera without changing pages.")),I.createElement("div",{className:"archiveCarousel"},I.createElement("div",{className:"carouselControls","aria-label":"Planet archive controls"},I.createElement("button",{type:"button",onClick:b},"Prev"),I.createElement("button",{type:"button",onClick:S},"Next")),I.createElement("div",{className:"embla",ref:s},I.createElement("div",{className:"emblaTrack"},qv.map(T=>I.createElement("div",{className:"emblaSlide",key:T.name},I.createElement("button",{className:`archiveCard ${i?.name===T.name?"isActive":""}`,type:"button",onClick:()=>E(T)},I.createElement("span",null,T.type),I.createElement("i",{style:{"--planet-color":T.color}}),I.createElement("strong",null,T.name),I.createElement("em",null,T.tagline),I.createElement("dl",null,I.createElement("div",null,I.createElement("dt",null,"diameter"),I.createElement("dd",null,T.diameter)),I.createElement("div",null,I.createElement("dt",null,"moons"),I.createElement("dd",null,T.moons)),I.createElement("div",null,I.createElement("dt",null,"day length"),I.createElement("dd",null,T.day))),I.createElement("small",null,"Explore")))))))),I.createElement("section",{className:"spaceSection launchSection","aria-labelledby":"launch-title"},I.createElement("div",{className:"spaceIntro"},I.createElement("p",{className:"kicker"},I.createElement(yd,{size:16})," Launch simulator"),I.createElement("h2",{id:"launch-title"},"Mission route."),I.createElement("p",null,"Earth to Jupiter transfer simulation with probe animation and live progress feedback.")),I.createElement("div",{className:"launchPanel"},I.createElement("div",{className:"missionRoute"},I.createElement("span",null,"Earth"),I.createElement("i",null),I.createElement("span",null,"Jupiter")),I.createElement("dl",null,I.createElement("div",null,I.createElement("dt",null,"Estimated travel time"),I.createElement("dd",null,"6 years")),I.createElement("div",null,I.createElement("dt",null,"Fuel required"),I.createElement("dd",null,"78%")),I.createElement("div",null,I.createElement("dt",null,"Signal delay"),I.createElement("dd",null,"43 min"))),I.createElement("div",{className:"progressTrack"},I.createElement("span",{style:{width:`${y}%`}})),I.createElement("p",{className:"launchStatus"},y>0&&y<100?`launching... ${y}%`:y===100?"arrival flash confirmed":"probe standing by"),I.createElement("button",{className:"launchButton",type:"button",onClick:g},I.createElement(yd,{size:18})," Launch mission"))),I.createElement("section",{className:"spaceSection","aria-labelledby":"signal-title"},I.createElement("div",{className:"spaceIntro"},I.createElement("p",{className:"kicker"},I.createElement($x,{size:16})," Signal dashboard"),I.createElement("h2",{id:"signal-title"},"Live orbital data."),I.createElement("p",null,"Controls show state management, UI-to-canvas events and realtime scene tuning.")),I.createElement("div",{className:"signalConsole"},I.createElement("div",{className:"radar","aria-hidden":"true"},I.createElement("span",null),I.createElement("span",null),I.createElement("span",null)),I.createElement("div",{className:"signalControls"},I.createElement("label",null,"Orbit speed ",I.createElement("input",{type:"range",min:"0.25",max:"2",step:"0.05",value:l,onChange:T=>c(Number(T.target.value))})),I.createElement("label",null,"Star density ",I.createElement("input",{type:"range",min:"30",max:"100",step:"5",value:f,onChange:T=>d(Number(T.target.value))})),I.createElement("label",null,I.createElement("input",{type:"checkbox",checked:p,onChange:T=>m(T.target.checked)})," Show orbits"),I.createElement("label",null,I.createElement("input",{type:"checkbox",checked:v,onChange:T=>_(T.target.checked)})," Cinematic camera"),I.createElement("button",{type:"button",onClick:cR},"Reset view")),I.createElement("div",{className:"signalDashboard"},I.createElement("div",{className:"signalReadout"},I.createElement("span",null,"Signal strength"),I.createElement("strong",null,"87%"),I.createElement("small",null,"stable")),I.createElement("div",{className:"signalReadout"},I.createElement("span",null,"Star density"),I.createElement("strong",null,Math.round(7410*(f/100))),I.createElement("small",null,"live")),I.createElement("div",{className:"signalReadout"},I.createElement("span",null,"Active planet"),I.createElement("strong",null,i?.name||"System"),I.createElement("small",null,i?"focus":"idle")),I.createElement("div",{className:"signalReadout"},I.createElement("span",null,"Orbit speed"),I.createElement("strong",null,l.toFixed(2),"x"),I.createElement("small",null,"tuned"))))),I.createElement("section",{className:"spaceSection journeySection","aria-labelledby":"journey-title"},I.createElement("div",{className:"spaceIntro"},I.createElement("p",{className:"kicker"},I.createElement(D_,{size:16})," Cinematic scroll journey"),I.createElement("h2",{id:"journey-title"},"Camera path story."),I.createElement("p",null,"Scroll blocks describe the route a production version can bind to camera keyframes.")),I.createElement("div",{className:"journeyList"},sR.map(([T,C,R])=>I.createElement("article",{key:T},I.createElement("span",null,T),I.createElement("h3",null,C),I.createElement("p",null,R))))),I.createElement("section",{className:"spaceSection","aria-labelledby":"case-title"},I.createElement("div",{className:"spaceIntro"},I.createElement("p",{className:"kicker"},I.createElement(Qx,{size:16})," Technical case study"),I.createElement("h2",{id:"case-title"},"Built as a real WebGL interface.")),I.createElement("div",{className:"caseCards"},rR.map(([T,C])=>I.createElement("article",{key:T},I.createElement("h3",null,T),I.createElement("p",null,C))),I.createElement("div",{className:"flowDiagram"},"React state to Three.js scene to UI panels to user interaction"))),I.createElement("section",{className:"spaceSection","aria-labelledby":"stack-title"},I.createElement("div",{className:"spaceIntro"},I.createElement("p",{className:"kicker"},I.createElement(D_,{size:16})," Stack constellation"),I.createElement("h2",{id:"stack-title"},"Technology orbit.")),I.createElement("div",{className:"constellationStack"},oR.map(([T,C])=>I.createElement("article",{key:T},I.createElement("strong",null,T),I.createElement("p",null,C))))),I.createElement("footer",{className:"spaceContact",id:"contact"},I.createElement("div",null,I.createElement("p",{className:"kicker"},I.createElement(vd,{size:16})," Contact"),I.createElement("h2",null,"Want to build something cinematic?"),I.createElement("p",null,"Frontend developer focused on interactive interfaces, 3D experiences and polished UI systems.")),I.createElement("div",{className:"ctaRow"},I.createElement(Us,{href:jv},I.createElement(vd,{size:18})," Contact me"),I.createElement(Us,{variant:"secondary",href:wr.github,target:"_blank",rel:"noreferrer"},I.createElement(_d,{size:18})," View GitHub"))))}function fR(){const s=window.location.pathname==="/3d";return I.createElement(I.Fragment,null,I.createElement("div",{className:"grainLayer","aria-hidden":"true"}),I.createElement("main",{className:"pageShell"},I.createElement(Yx,null),s?I.createElement(uR,null):I.createElement(S2,null)))}Wx.createRoot(document.getElementById("root")).render(I.createElement(I.StrictMode,null,I.createElement(fR,null)));
