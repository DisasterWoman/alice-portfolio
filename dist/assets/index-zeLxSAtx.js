(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function AM(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ed={exports:{}},he={};var d_;function RM(){if(d_)return he;d_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=y&&P[y]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function g(P,et,Mt){this.props=P,this.context=et,this.refs=S,this.updater=Mt||E}g.prototype.isReactComponent={},g.prototype.setState=function(P,et){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,et,"setState")},g.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function C(){}C.prototype=g.prototype;function L(P,et,Mt){this.props=P,this.context=et,this.refs=S,this.updater=Mt||E}var D=L.prototype=new C;D.constructor=L,b(D,g.prototype),D.isPureReactComponent=!0;var k=Array.isArray;function H(){}var N={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function A(P,et,Mt){var j=Mt.ref;return{$$typeof:s,type:P,key:et,ref:j!==void 0?j:null,props:Mt}}function R(P,et){return A(P.type,et,P.props)}function I(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function $(P){var et={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Mt){return et[Mt]})}var tt=/\/+/g;function lt(P,et){return typeof P=="object"&&P!==null&&P.key!=null?$(""+P.key):et.toString(36)}function ut(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(H,H):(P.status="pending",P.then(function(et){P.status==="pending"&&(P.status="fulfilled",P.value=et)},function(et){P.status==="pending"&&(P.status="rejected",P.reason=et)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function z(P,et,Mt,j,ft){var At=typeof P;(At==="undefined"||At==="boolean")&&(P=null);var gt=!1;if(P===null)gt=!0;else switch(At){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(P.$$typeof){case s:case t:gt=!0;break;case v:return gt=P._init,z(gt(P._payload),et,Mt,j,ft)}}if(gt)return ft=ft(P),gt=j===""?"."+lt(P,0):j,k(ft)?(Mt="",gt!=null&&(Mt=gt.replace(tt,"$&/")+"/"),z(ft,et,Mt,"",function(Vt){return Vt})):ft!=null&&(I(ft)&&(ft=R(ft,Mt+(ft.key==null||P&&P.key===ft.key?"":(""+ft.key).replace(tt,"$&/")+"/")+gt)),et.push(ft)),1;gt=0;var Dt=j===""?".":j+":";if(k(P))for(var Xt=0;Xt<P.length;Xt++)j=P[Xt],At=Dt+lt(j,Xt),gt+=z(j,et,Mt,At,ft);else if(Xt=x(P),typeof Xt=="function")for(P=Xt.call(P),Xt=0;!(j=P.next()).done;)j=j.value,At=Dt+lt(j,Xt++),gt+=z(j,et,Mt,At,ft);else if(At==="object"){if(typeof P.then=="function")return z(ut(P),et,Mt,j,ft);throw et=String(P),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return gt}function q(P,et,Mt){if(P==null)return P;var j=[],ft=0;return z(P,j,"","",function(At){return et.call(Mt,At,ft++)}),j}function Z(P){if(P._status===-1){var et=P._result;et=et(),et.then(function(Mt){(P._status===0||P._status===-1)&&(P._status=1,P._result=Mt)},function(Mt){(P._status===0||P._status===-1)&&(P._status=2,P._result=Mt)}),P._status===-1&&(P._status=0,P._result=et)}if(P._status===1)return P._result.default;throw P._result}var St=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},wt={map:q,forEach:function(P,et,Mt){q(P,function(){et.apply(this,arguments)},Mt)},count:function(P){var et=0;return q(P,function(){et++}),et},toArray:function(P){return q(P,function(et){return et})||[]},only:function(P){if(!I(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return he.Activity=_,he.Children=wt,he.Component=g,he.Fragment=i,he.Profiler=l,he.PureComponent=L,he.StrictMode=r,he.Suspense=p,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,he.__COMPILER_RUNTIME={__proto__:null,c:function(P){return N.H.useMemoCache(P)}},he.cache=function(P){return function(){return P.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(P,et,Mt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var j=b({},P.props),ft=P.key;if(et!=null)for(At in et.key!==void 0&&(ft=""+et.key),et)!V.call(et,At)||At==="key"||At==="__self"||At==="__source"||At==="ref"&&et.ref===void 0||(j[At]=et[At]);var At=arguments.length-2;if(At===1)j.children=Mt;else if(1<At){for(var gt=Array(At),Dt=0;Dt<At;Dt++)gt[Dt]=arguments[Dt+2];j.children=gt}return A(P.type,ft,j)},he.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},he.createElement=function(P,et,Mt){var j,ft={},At=null;if(et!=null)for(j in et.key!==void 0&&(At=""+et.key),et)V.call(et,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(ft[j]=et[j]);var gt=arguments.length-2;if(gt===1)ft.children=Mt;else if(1<gt){for(var Dt=Array(gt),Xt=0;Xt<gt;Xt++)Dt[Xt]=arguments[Xt+2];ft.children=Dt}if(P&&P.defaultProps)for(j in gt=P.defaultProps,gt)ft[j]===void 0&&(ft[j]=gt[j]);return A(P,At,ft)},he.createRef=function(){return{current:null}},he.forwardRef=function(P){return{$$typeof:h,render:P}},he.isValidElement=I,he.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:Z}},he.memo=function(P,et){return{$$typeof:m,type:P,compare:et===void 0?null:et}},he.startTransition=function(P){var et=N.T,Mt={};N.T=Mt;try{var j=P(),ft=N.S;ft!==null&&ft(Mt,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(H,St)}catch(At){St(At)}finally{et!==null&&Mt.types!==null&&(et.types=Mt.types),N.T=et}},he.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},he.use=function(P){return N.H.use(P)},he.useActionState=function(P,et,Mt){return N.H.useActionState(P,et,Mt)},he.useCallback=function(P,et){return N.H.useCallback(P,et)},he.useContext=function(P){return N.H.useContext(P)},he.useDebugValue=function(){},he.useDeferredValue=function(P,et){return N.H.useDeferredValue(P,et)},he.useEffect=function(P,et){return N.H.useEffect(P,et)},he.useEffectEvent=function(P){return N.H.useEffectEvent(P)},he.useId=function(){return N.H.useId()},he.useImperativeHandle=function(P,et,Mt){return N.H.useImperativeHandle(P,et,Mt)},he.useInsertionEffect=function(P,et){return N.H.useInsertionEffect(P,et)},he.useLayoutEffect=function(P,et){return N.H.useLayoutEffect(P,et)},he.useMemo=function(P,et){return N.H.useMemo(P,et)},he.useOptimistic=function(P,et){return N.H.useOptimistic(P,et)},he.useReducer=function(P,et,Mt){return N.H.useReducer(P,et,Mt)},he.useRef=function(P){return N.H.useRef(P)},he.useState=function(P){return N.H.useState(P)},he.useSyncExternalStore=function(P,et,Mt){return N.H.useSyncExternalStore(P,et,Mt)},he.useTransition=function(){return N.H.useTransition()},he.version="19.2.7",he}var h_;function sp(){return h_||(h_=1,Ed.exports=RM()),Ed.exports}var Pe=sp();const O=AM(Pe);var bd={exports:{}},zo={},Td={exports:{}},Ad={};var p_;function wM(){return p_||(p_=1,(function(s){function t(z,q){var Z=z.length;z.push(q);t:for(;0<Z;){var St=Z-1>>>1,wt=z[St];if(0<l(wt,q))z[St]=q,z[Z]=wt,Z=St;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var q=z[0],Z=z.pop();if(Z!==q){z[0]=Z;t:for(var St=0,wt=z.length,P=wt>>>1;St<P;){var et=2*(St+1)-1,Mt=z[et],j=et+1,ft=z[j];if(0>l(Mt,Z))j<wt&&0>l(ft,Mt)?(z[St]=ft,z[j]=Z,St=j):(z[St]=Mt,z[et]=Z,St=et);else if(j<wt&&0>l(ft,Z))z[St]=ft,z[j]=Z,St=j;else break t}}return q}function l(z,q){var Z=z.sortIndex-q.sortIndex;return Z!==0?Z:z.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var p=[],m=[],v=1,_=null,y=3,x=!1,E=!1,b=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(z){for(var q=i(m);q!==null;){if(q.callback===null)r(m);else if(q.startTime<=z)r(m),q.sortIndex=q.expirationTime,t(p,q);else break;q=i(m)}}function k(z){if(b=!1,D(z),!E)if(i(p)!==null)E=!0,H||(H=!0,$());else{var q=i(m);q!==null&&ut(k,q.startTime-z)}}var H=!1,N=-1,V=5,A=-1;function R(){return S?!0:!(s.unstable_now()-A<V)}function I(){if(S=!1,H){var z=s.unstable_now();A=z;var q=!0;try{t:{E=!1,b&&(b=!1,C(N),N=-1),x=!0;var Z=y;try{e:{for(D(z),_=i(p);_!==null&&!(_.expirationTime>z&&R());){var St=_.callback;if(typeof St=="function"){_.callback=null,y=_.priorityLevel;var wt=St(_.expirationTime<=z);if(z=s.unstable_now(),typeof wt=="function"){_.callback=wt,D(z),q=!0;break e}_===i(p)&&r(p),D(z)}else r(p);_=i(p)}if(_!==null)q=!0;else{var P=i(m);P!==null&&ut(k,P.startTime-z),q=!1}}break t}finally{_=null,y=Z,x=!1}q=void 0}}finally{q?$():H=!1}}}var $;if(typeof L=="function")$=function(){L(I)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,lt=tt.port2;tt.port1.onmessage=I,$=function(){lt.postMessage(null)}}else $=function(){g(I,0)};function ut(z,q){N=g(function(){z(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(z){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var Z=y;y=q;try{return z()}finally{y=Z}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=y;y=z;try{return q()}finally{y=Z}},s.unstable_scheduleCallback=function(z,q,Z){var St=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?St+Z:St):Z=St,z){case 1:var wt=-1;break;case 2:wt=250;break;case 5:wt=1073741823;break;case 4:wt=1e4;break;default:wt=5e3}return wt=Z+wt,z={id:v++,callback:q,priorityLevel:z,startTime:Z,expirationTime:wt,sortIndex:-1},Z>St?(z.sortIndex=Z,t(m,z),i(p)===null&&z===i(m)&&(b?(C(N),N=-1):b=!0,ut(k,Z-St))):(z.sortIndex=wt,t(p,z),E||x||(E=!0,H||(H=!0,$()))),z},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(z){var q=y;return function(){var Z=y;y=q;try{return z.apply(this,arguments)}finally{y=Z}}}})(Ad)),Ad}var m_;function CM(){return m_||(m_=1,Td.exports=wM()),Td.exports}var Rd={exports:{}},Nn={};var g_;function DM(){if(g_)return Nn;g_=1;var s=sp();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:v}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(p,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,v)},Nn.flushSync=function(p){var m=f.T,v=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=m,r.p=v,r.d.f()}},Nn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Nn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Nn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var v=m.as,_=h(v,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,x=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:x}):v==="script"&&r.d.X(p,{crossOrigin:_,integrity:y,fetchPriority:x,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Nn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Nn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,_=h(v,m.crossOrigin);r.d.L(p,v,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Nn.preloadModule=function(p,m){if(typeof p=="string")if(m){var v=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Nn.requestFormReset=function(p){r.d.r(p)},Nn.unstable_batchedUpdates=function(p,m){return p(m)},Nn.useFormState=function(p,m,v){return f.H.useFormState(p,m,v)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.2.7",Nn}var __;function UM(){if(__)return Rd.exports;__=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Rd.exports=DM(),Rd.exports}var v_;function LM(){if(v_)return zo;v_=1;var s=CM(),t=sp(),i=UM();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return p(u),e;if(d===o)return p(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var M=!1,w=u.child;w;){if(w===a){M=!0,a=u,o=d;break}if(w===o){M=!0,o=u,a=d;break}w=w.sibling}if(!M){for(w=d.child;w;){if(w===a){M=!0,a=d,o=u;break}if(w===o){M=!0,o=d,a=u;break}w=w.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case g:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case H:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var ut=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},St=[],wt=-1;function P(e){return{current:e}}function et(e){0>wt||(e.current=St[wt],St[wt]=null,wt--)}function Mt(e,n){wt++,St[wt]=e.current,e.current=n}var j=P(null),ft=P(null),At=P(null),gt=P(null);function Dt(e,n){switch(Mt(At,n),Mt(ft,e),Mt(j,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?P0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=P0(n),e=z0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(j),Mt(j,e)}function Xt(){et(j),et(ft),et(At)}function Vt(e){e.memoizedState!==null&&Mt(gt,e);var n=j.current,a=z0(n,e.type);n!==a&&(Mt(ft,e),Mt(j,a))}function yt(e){ft.current===e&&(et(j),et(ft)),gt.current===e&&(et(gt),Lo._currentValue=Z)}var Et,Bt;function B(e){if(Et===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Et=n&&n[1]||"",Bt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Et+e+Bt}var fe=!1;function Jt(e,n){if(!e||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ct){var rt=ct}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ct){rt=ct}e.call(vt.prototype)}}else{try{throw Error()}catch(ct){rt=ct}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ct){if(ct&&rt&&typeof ct.stack=="string")return[ct.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],w=d[1];if(M&&w){var G=M.split(`
`),it=w.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===it.length)for(o=G.length-1,u=it.length-1;1<=o&&0<=u&&G[o]!==it[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==it[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==it[u]){var ht=`
`+G[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?B(a):""}function ue(e,n){switch(e.tag){case 26:case 27:case 5:return B(e.type);case 16:return B("Lazy");case 13:return e.child!==n&&n!==null?B("Suspense Fallback"):B("Suspense");case 19:return B("SuspenseList");case 0:case 15:return Jt(e.type,!1);case 11:return Jt(e.type.render,!1);case 1:return Jt(e.type,!0);case 31:return B("Activity");default:return""}}function Pt(e){try{var n="",a=null;do n+=ue(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ie=Object.prototype.hasOwnProperty,jt=s.unstable_scheduleCallback,re=s.unstable_cancelCallback,Ze=s.unstable_shouldYield,F=s.unstable_requestPaint,T=s.unstable_now,at=s.unstable_getCurrentPriorityLevel,mt=s.unstable_ImmediatePriority,bt=s.unstable_UserBlockingPriority,dt=s.unstable_NormalPriority,Zt=s.unstable_LowPriority,Ut=s.unstable_IdlePriority,qt=s.log,Kt=s.unstable_setDisableYieldValue,xt=null,Lt=null;function $t(e){if(typeof qt=="function"&&Kt(e),Lt&&typeof Lt.setStrictMode=="function")try{Lt.setStrictMode(xt,e)}catch{}}var Wt=Math.clz32?Math.clz32:W,Nt=Math.log,se=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Nt(e)/se|0)|0}var Ot=256,Tt=262144,Ht=4194304;function Rt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var w=o&134217727;return w!==0?(o=w&~d,o!==0?u=Rt(o):(M&=w,M!==0?u=Rt(M):a||(a=w&~e,a!==0&&(u=Rt(a))))):(w=o&~d,w!==0?u=Rt(w):M!==0?u=Rt(M):a||(a=o&~e,a!==0&&(u=Rt(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Gt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function oe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function Ce(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function xn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vi(e,n,a,o,u,d){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,G=e.expirationTimes,it=e.hiddenUpdates;for(a=M&~a;0<a;){var ht=31-Wt(a),vt=1<<ht;w[ht]=0,G[ht]=-1;var rt=it[ht];if(rt!==null)for(it[ht]=null,ht=0;ht<rt.length;ht++){var ct=rt[ht];ct!==null&&(ct.lane&=-536870913)}a&=~vt}o!==0&&ks(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~n))}function ks(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Wt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Xs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Wt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Li(e,n){var a=n&-n;return a=(a&42)!==0?1:Ja(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ja(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Nr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ws(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:r_(e.type))}function $a(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var yi=Math.random().toString(36).slice(2),en="__reactFiber$"+yi,En="__reactProps$"+yi,ki="__reactContainer$"+yi,qs="__reactEvents$"+yi,gu="__reactListeners$"+yi,_u="__reactHandles$"+yi,cl="__reactResources$"+yi,tr="__reactMarker$"+yi;function Ys(e){delete e[en],delete e[En],delete e[qs],delete e[gu],delete e[_u]}function U(e){var n=e[en];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ki]||a[en]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=k0(e);e!==null;){if(a=e[en])return a;e=k0(e)}return n}e=a,a=e.parentNode}return null}function K(e){if(e=e[en]||e[ki]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function st(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ot(e){var n=e[cl];return n||(n=e[cl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(e){e[tr]=!0}var Ct=new Set,zt={};function kt(e,n){Ft(e,n),Ft(e+"Capture",n)}function Ft(e,n){for(zt[e]=n,e=0;e<n.length;e++)Ct.add(n[e])}var le=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ce={},te={};function ye(e){return ie.call(te,e)?!0:ie.call(ce,e)?!1:le.test(e)?te[e]=!0:(ce[e]=!0,!1)}function De(e,n,a){if(ye(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function qe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ae(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ne(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){a=""+M,d.call(this,M)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ee(e){if(!e._valueTracker){var n=ne(e)?"checked":"value";e._valueTracker=Ke(e,n,""+e[n])}}function Un(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ne(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zn=/[\n"\\]/g;function yn(e){return e.replace(zn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fe(e,n,a,o,u,d,M,w){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Ln(e,M,_e(n)):a!=null?Ln(e,M,_e(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+_e(w):e.removeAttribute("name")}function In(e,n,a,o,u,d,M,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ee(e);return}a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=w?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),Ee(e)}function Ln(e,n,a){n==="number"&&Si(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function nn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function bn(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function Or(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ut(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ee(e)}function kn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var My=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||My.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Np(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Lp(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Lp(e,d,n[d])}function vu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ey=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ul(e){return Ey.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xi(){}var yu=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pr=null,zr=null;function Op(e){var n=K(e);if(n&&(e=n.stateNode)){var a=e[En]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[En]||null;if(!u)throw Error(r(90));Fe(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Un(o)}break t;case"textarea":bn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&nn(e,!!a.multiple,n,!1)}}}var Mu=!1;function Pp(e,n,a){if(Mu)return e(n,a);Mu=!0;try{var o=e(n);return o}finally{if(Mu=!1,(Pr!==null||zr!==null)&&(Ql(),Pr&&(n=Pr,e=zr,zr=Pr=null,Op(n),e)))for(n=0;n<e.length;n++)Op(e[n])}}function js(e,n){var a=e.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(Wi)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){xu=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{xu=!1}var va=null,Eu=null,fl=null;function zp(){if(fl)return fl;var e,n=Eu,a=n.length,o,u="value"in va?va.value:va.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[d-o];o++);return fl=u.slice(e,1<o?1-o:void 0)}function dl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function hl(){return!0}function Ip(){return!1}function Xn(e){function n(a,o,u,d,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?hl:Ip,this.isPropagationStopped=Ip,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),n}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=Xn(er),Ks=_({},er,{view:0,detail:0}),by=Xn(Ks),bu,Tu,Qs,ml=_({},Ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qs&&(Qs&&e.type==="mousemove"?(bu=e.screenX-Qs.screenX,Tu=e.screenY-Qs.screenY):Tu=bu=0,Qs=e),bu)},movementY:function(e){return"movementY"in e?e.movementY:Tu}}),Bp=Xn(ml),Ty=_({},ml,{dataTransfer:0}),Ay=Xn(Ty),Ry=_({},Ks,{relatedTarget:0}),Au=Xn(Ry),wy=_({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),Cy=Xn(wy),Dy=_({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uy=Xn(Dy),Ly=_({},er,{data:0}),Fp=Xn(Ly),Ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Py[e])?!!n[e]:!1}function Ru(){return zy}var Iy=_({},Ks,{key:function(e){if(e.key){var n=Ny[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Oy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),By=Xn(Iy),Fy=_({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hp=Xn(Fy),Hy=_({},Ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),Gy=Xn(Hy),Vy=_({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),ky=Xn(Vy),Xy=_({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wy=Xn(Xy),qy=_({},er,{newState:0,oldState:0}),Yy=Xn(qy),jy=[9,13,27,32],wu=Wi&&"CompositionEvent"in window,Js=null;Wi&&"documentMode"in document&&(Js=document.documentMode);var Zy=Wi&&"TextEvent"in window&&!Js,Gp=Wi&&(!wu||Js&&8<Js&&11>=Js),Vp=" ",kp=!1;function Xp(e,n){switch(e){case"keyup":return jy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ir=!1;function Ky(e,n){switch(e){case"compositionend":return Wp(n);case"keypress":return n.which!==32?null:(kp=!0,Vp);case"textInput":return e=n.data,e===Vp&&kp?null:e;default:return null}}function Qy(e,n){if(Ir)return e==="compositionend"||!wu&&Xp(e,n)?(e=zp(),fl=Eu=va=null,Ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gp&&n.locale!=="ko"?null:n.data;default:return null}}var Jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Jy[e.type]:n==="textarea"}function Yp(e,n,a,o){Pr?zr?zr.push(o):zr=[o]:Pr=o,n=ac(n,"onChange"),0<n.length&&(a=new pl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var $s=null,to=null;function $y(e){C0(e,0)}function gl(e){var n=st(e);if(Un(n))return e}function jp(e,n){if(e==="change")return n}var Zp=!1;if(Wi){var Cu;if(Wi){var Du="oninput"in document;if(!Du){var Kp=document.createElement("div");Kp.setAttribute("oninput","return;"),Du=typeof Kp.oninput=="function"}Cu=Du}else Cu=!1;Zp=Cu&&(!document.documentMode||9<document.documentMode)}function Qp(){$s&&($s.detachEvent("onpropertychange",Jp),to=$s=null)}function Jp(e){if(e.propertyName==="value"&&gl(to)){var n=[];Yp(n,to,e,Su(e)),Pp($y,n)}}function tS(e,n,a){e==="focusin"?(Qp(),$s=n,to=a,$s.attachEvent("onpropertychange",Jp)):e==="focusout"&&Qp()}function eS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(to)}function nS(e,n){if(e==="click")return gl(n)}function iS(e,n){if(e==="input"||e==="change")return gl(n)}function aS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jn=typeof Object.is=="function"?Object.is:aS;function eo(e,n){if(Jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ie.call(n,u)||!Jn(e[u],n[u]))return!1}return!0}function $p(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tm(e,n){var a=$p(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=$p(a)}}function em(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?em(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function nm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Si(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Si(e.document)}return n}function Uu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var rS=Wi&&"documentMode"in document&&11>=document.documentMode,Br=null,Lu=null,no=null,Nu=!1;function im(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nu||Br==null||Br!==Si(o)||(o=Br,"selectionStart"in o&&Uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),no&&eo(no,o)||(no=o,o=ac(Lu,"onSelect"),0<o.length&&(n=new pl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Br)))}function nr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Fr={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},Ou={},am={};Wi&&(am=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function ir(e){if(Ou[e])return Ou[e];if(!Fr[e])return e;var n=Fr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in am)return Ou[e]=n[a];return e}var rm=ir("animationend"),sm=ir("animationiteration"),om=ir("animationstart"),sS=ir("transitionrun"),oS=ir("transitionstart"),lS=ir("transitioncancel"),lm=ir("transitionend"),cm=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function Mi(e,n){cm.set(e,n),kt(n,[e])}var _l=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},li=[],Hr=0,zu=0;function vl(){for(var e=Hr,n=zu=Hr=0;n<e;){var a=li[n];li[n++]=null;var o=li[n];li[n++]=null;var u=li[n];li[n++]=null;var d=li[n];if(li[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}d!==0&&um(a,u,d)}}function yl(e,n,a,o){li[Hr++]=e,li[Hr++]=n,li[Hr++]=a,li[Hr++]=o,zu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Iu(e,n,a,o){return yl(e,n,a,o),Sl(e)}function ar(e,n){return yl(e,null,null,n),Sl(e)}function um(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Wt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Sl(e){if(50<To)throw To=0,Yf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Gr={};function cS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,o){return new cS(e,n,a,o)}function Bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qi(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function fm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ml(e,n,a,o,u,d){var M=0;if(o=e,typeof e=="function")Bu(e)&&(M=1);else if(typeof e=="string")M=pM(e,a,j.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=$n(31,a,n,u),e.elementType=A,e.lanes=d,e;case b:return rr(a.children,u,d,n);case S:M=8,u|=24;break;case g:return e=$n(12,a,n,u|2),e.elementType=g,e.lanes=d,e;case k:return e=$n(13,a,n,u),e.elementType=k,e.lanes=d,e;case H:return e=$n(19,a,n,u),e.elementType=H,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:M=10;break t;case C:M=9;break t;case D:M=11;break t;case N:M=14;break t;case V:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=$n(M,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function rr(e,n,a,o){return e=$n(7,e,o,n),e.lanes=a,e}function Fu(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function dm(e){var n=$n(18,null,null,0);return n.stateNode=e,n}function Hu(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var hm=new WeakMap;function ci(e,n){if(typeof e=="object"&&e!==null){var a=hm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Pt(n)},hm.set(e,n),n)}return{value:e,source:n,stack:Pt(n)}}var Vr=[],kr=0,xl=null,io=0,ui=[],fi=0,ya=null,Ni=1,Oi="";function Yi(e,n){Vr[kr++]=io,Vr[kr++]=xl,xl=e,io=n}function pm(e,n,a){ui[fi++]=Ni,ui[fi++]=Oi,ui[fi++]=ya,ya=e;var o=Ni;e=Oi;var u=32-Wt(o)-1;o&=~(1<<u),a+=1;var d=32-Wt(n)+u;if(30<d){var M=u-u%5;d=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Ni=1<<32-Wt(n)+u|a<<u|o,Oi=d+e}else Ni=1<<d|a<<u|o,Oi=e}function Gu(e){e.return!==null&&(Yi(e,1),pm(e,1,0))}function Vu(e){for(;e===xl;)xl=Vr[--kr],Vr[kr]=null,io=Vr[--kr],Vr[kr]=null;for(;e===ya;)ya=ui[--fi],ui[fi]=null,Oi=ui[--fi],ui[fi]=null,Ni=ui[--fi],ui[fi]=null}function mm(e,n){ui[fi++]=Ni,ui[fi++]=Oi,ui[fi++]=ya,Ni=n.id,Oi=n.overflow,ya=e}var Tn=null,Qe=null,Re=!1,Sa=null,di=!1,ku=Error(r(519));function Ma(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(ci(n,e)),ku}function gm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[en]=e,n[En]=o,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<Ro.length;a++)Me(Ro[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),In(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),Or(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||N0(n.textContent,a)?(o.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),o.onScroll!=null&&Me("scroll",n),o.onScrollEnd!=null&&Me("scrollend",n),o.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Ma(e,!0)}function _m(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:Tn=Tn.return}}function Xr(e){if(e!==Tn)return!1;if(!Re)return _m(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ld(e.type,e.memoizedProps)),a=!a),a&&Qe&&Ma(e),_m(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Qe=V0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Qe=V0(e)}else n===27?(n=Qe,Pa(e.type)?(e=hd,hd=null,Qe=e):Qe=n):Qe=Tn?pi(e.stateNode.nextSibling):null;return!0}function sr(){Qe=Tn=null,Re=!1}function Xu(){var e=Sa;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Sa=null),e}function ao(e){Sa===null?Sa=[e]:Sa.push(e)}var Wu=P(null),or=null,ji=null;function xa(e,n,a){Mt(Wu,n._currentValue),n._currentValue=a}function Zi(e){e._currentValue=Wu.current,et(Wu)}function qu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Yu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;t:for(;d!==null;){var w=d;d=u;for(var G=0;G<n.length;G++)if(w.context===n[G]){d.lanes|=a,w=d.alternate,w!==null&&(w.lanes|=a),qu(d.return,a,e),o||(M=null);break t}d=w.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,d=M.alternate,d!==null&&(d.lanes|=a),qu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Wr(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var w=u.type;Jn(u.pendingProps.value,M.value)||(e!==null?e.push(w):e=[w])}}else if(u===gt.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}u=u.return}e!==null&&Yu(n,e,a,o),n.flags|=262144}function El(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function lr(e){or=e,ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return vm(or,e)}function bl(e,n){return or===null&&lr(e),vm(e,n)}function vm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(e===null)throw Error(r(308));ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ji=ji.next=n;return a}var uS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},fS=s.unstable_scheduleCallback,dS=s.unstable_NormalPriority,ln={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new uS,data:new Map,refCount:0}}function ro(e){e.refCount--,e.refCount===0&&fS(dS,function(){e.controller.abort()})}var so=null,Zu=0,qr=0,Yr=null;function hS(e,n){if(so===null){var a=so=[];Zu=0,qr=$f(),Yr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Zu++,n.then(ym,ym),n}function ym(){if(--Zu===0&&so!==null){Yr!==null&&(Yr.status="fulfilled");var e=so;so=null,qr=0,Yr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function pS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Sm=z.S;z.S=function(e,n){i0=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&hS(e,n),Sm!==null&&Sm(e,n)};var cr=P(null);function Ku(){var e=cr.current;return e!==null?e:Ye.pooledCache}function Tl(e,n){n===null?Mt(cr,cr.current):Mt(cr,n.pool)}function Mm(){var e=Ku();return e===null?null:{parent:ln._currentValue,pool:e}}var jr=Error(r(460)),Qu=Error(r(474)),Al=Error(r(542)),Rl={then:function(){}};function xm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Em(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tm(e),e;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tm(e),e}throw fr=n,jr}}function ur(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fr=a,jr):a}}var fr=null;function bm(){if(fr===null)throw Error(r(459));var e=fr;return fr=null,e}function Tm(e){if(e===jr||e===Al)throw Error(r(483))}var Zr=null,oo=0;function wl(e){var n=oo;return oo+=1,Zr===null&&(Zr=[]),Em(Zr,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Cl(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Am(e){function n(J,X){if(e){var nt=J.deletions;nt===null?(J.deletions=[X],J.flags|=16):nt.push(X)}}function a(J,X){if(!e)return null;for(;X!==null;)n(J,X),X=X.sibling;return null}function o(J){for(var X=new Map;J!==null;)J.key!==null?X.set(J.key,J):X.set(J.index,J),J=J.sibling;return X}function u(J,X){return J=qi(J,X),J.index=0,J.sibling=null,J}function d(J,X,nt){return J.index=nt,e?(nt=J.alternate,nt!==null?(nt=nt.index,nt<X?(J.flags|=67108866,X):nt):(J.flags|=67108866,X)):(J.flags|=1048576,X)}function M(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function w(J,X,nt,pt){return X===null||X.tag!==6?(X=Fu(nt,J.mode,pt),X.return=J,X):(X=u(X,nt),X.return=J,X)}function G(J,X,nt,pt){var ee=nt.type;return ee===b?ht(J,X,nt.props.children,pt,nt.key):X!==null&&(X.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===V&&ur(ee)===X.type)?(X=u(X,nt.props),lo(X,nt),X.return=J,X):(X=Ml(nt.type,nt.key,nt.props,null,J.mode,pt),lo(X,nt),X.return=J,X)}function it(J,X,nt,pt){return X===null||X.tag!==4||X.stateNode.containerInfo!==nt.containerInfo||X.stateNode.implementation!==nt.implementation?(X=Hu(nt,J.mode,pt),X.return=J,X):(X=u(X,nt.children||[]),X.return=J,X)}function ht(J,X,nt,pt,ee){return X===null||X.tag!==7?(X=rr(nt,J.mode,pt,ee),X.return=J,X):(X=u(X,nt),X.return=J,X)}function vt(J,X,nt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Fu(""+X,J.mode,nt),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case x:return nt=Ml(X.type,X.key,X.props,null,J.mode,nt),lo(nt,X),nt.return=J,nt;case E:return X=Hu(X,J.mode,nt),X.return=J,X;case V:return X=ur(X),vt(J,X,nt)}if(ut(X)||$(X))return X=rr(X,J.mode,nt,null),X.return=J,X;if(typeof X.then=="function")return vt(J,wl(X),nt);if(X.$$typeof===L)return vt(J,bl(J,X),nt);Cl(J,X)}return null}function rt(J,X,nt,pt){var ee=X!==null?X.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return ee!==null?null:w(J,X,""+nt,pt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case x:return nt.key===ee?G(J,X,nt,pt):null;case E:return nt.key===ee?it(J,X,nt,pt):null;case V:return nt=ur(nt),rt(J,X,nt,pt)}if(ut(nt)||$(nt))return ee!==null?null:ht(J,X,nt,pt,null);if(typeof nt.then=="function")return rt(J,X,wl(nt),pt);if(nt.$$typeof===L)return rt(J,X,bl(J,nt),pt);Cl(J,nt)}return null}function ct(J,X,nt,pt,ee){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return J=J.get(nt)||null,w(X,J,""+pt,ee);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case x:return J=J.get(pt.key===null?nt:pt.key)||null,G(X,J,pt,ee);case E:return J=J.get(pt.key===null?nt:pt.key)||null,it(X,J,pt,ee);case V:return pt=ur(pt),ct(J,X,nt,pt,ee)}if(ut(pt)||$(pt))return J=J.get(nt)||null,ht(X,J,pt,ee,null);if(typeof pt.then=="function")return ct(J,X,nt,wl(pt),ee);if(pt.$$typeof===L)return ct(J,X,nt,bl(X,pt),ee);Cl(X,pt)}return null}function Yt(J,X,nt,pt){for(var ee=null,Ue=null,Qt=X,me=X=0,Te=null;Qt!==null&&me<nt.length;me++){Qt.index>me?(Te=Qt,Qt=null):Te=Qt.sibling;var Le=rt(J,Qt,nt[me],pt);if(Le===null){Qt===null&&(Qt=Te);break}e&&Qt&&Le.alternate===null&&n(J,Qt),X=d(Le,X,me),Ue===null?ee=Le:Ue.sibling=Le,Ue=Le,Qt=Te}if(me===nt.length)return a(J,Qt),Re&&Yi(J,me),ee;if(Qt===null){for(;me<nt.length;me++)Qt=vt(J,nt[me],pt),Qt!==null&&(X=d(Qt,X,me),Ue===null?ee=Qt:Ue.sibling=Qt,Ue=Qt);return Re&&Yi(J,me),ee}for(Qt=o(Qt);me<nt.length;me++)Te=ct(Qt,J,me,nt[me],pt),Te!==null&&(e&&Te.alternate!==null&&Qt.delete(Te.key===null?me:Te.key),X=d(Te,X,me),Ue===null?ee=Te:Ue.sibling=Te,Ue=Te);return e&&Qt.forEach(function(Ha){return n(J,Ha)}),Re&&Yi(J,me),ee}function ae(J,X,nt,pt){if(nt==null)throw Error(r(151));for(var ee=null,Ue=null,Qt=X,me=X=0,Te=null,Le=nt.next();Qt!==null&&!Le.done;me++,Le=nt.next()){Qt.index>me?(Te=Qt,Qt=null):Te=Qt.sibling;var Ha=rt(J,Qt,Le.value,pt);if(Ha===null){Qt===null&&(Qt=Te);break}e&&Qt&&Ha.alternate===null&&n(J,Qt),X=d(Ha,X,me),Ue===null?ee=Ha:Ue.sibling=Ha,Ue=Ha,Qt=Te}if(Le.done)return a(J,Qt),Re&&Yi(J,me),ee;if(Qt===null){for(;!Le.done;me++,Le=nt.next())Le=vt(J,Le.value,pt),Le!==null&&(X=d(Le,X,me),Ue===null?ee=Le:Ue.sibling=Le,Ue=Le);return Re&&Yi(J,me),ee}for(Qt=o(Qt);!Le.done;me++,Le=nt.next())Le=ct(Qt,J,me,Le.value,pt),Le!==null&&(e&&Le.alternate!==null&&Qt.delete(Le.key===null?me:Le.key),X=d(Le,X,me),Ue===null?ee=Le:Ue.sibling=Le,Ue=Le);return e&&Qt.forEach(function(TM){return n(J,TM)}),Re&&Yi(J,me),ee}function Ve(J,X,nt,pt){if(typeof nt=="object"&&nt!==null&&nt.type===b&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case x:t:{for(var ee=nt.key;X!==null;){if(X.key===ee){if(ee=nt.type,ee===b){if(X.tag===7){a(J,X.sibling),pt=u(X,nt.props.children),pt.return=J,J=pt;break t}}else if(X.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===V&&ur(ee)===X.type){a(J,X.sibling),pt=u(X,nt.props),lo(pt,nt),pt.return=J,J=pt;break t}a(J,X);break}else n(J,X);X=X.sibling}nt.type===b?(pt=rr(nt.props.children,J.mode,pt,nt.key),pt.return=J,J=pt):(pt=Ml(nt.type,nt.key,nt.props,null,J.mode,pt),lo(pt,nt),pt.return=J,J=pt)}return M(J);case E:t:{for(ee=nt.key;X!==null;){if(X.key===ee)if(X.tag===4&&X.stateNode.containerInfo===nt.containerInfo&&X.stateNode.implementation===nt.implementation){a(J,X.sibling),pt=u(X,nt.children||[]),pt.return=J,J=pt;break t}else{a(J,X);break}else n(J,X);X=X.sibling}pt=Hu(nt,J.mode,pt),pt.return=J,J=pt}return M(J);case V:return nt=ur(nt),Ve(J,X,nt,pt)}if(ut(nt))return Yt(J,X,nt,pt);if($(nt)){if(ee=$(nt),typeof ee!="function")throw Error(r(150));return nt=ee.call(nt),ae(J,X,nt,pt)}if(typeof nt.then=="function")return Ve(J,X,wl(nt),pt);if(nt.$$typeof===L)return Ve(J,X,bl(J,nt),pt);Cl(J,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,X!==null&&X.tag===6?(a(J,X.sibling),pt=u(X,nt),pt.return=J,J=pt):(a(J,X),pt=Fu(nt,J.mode,pt),pt.return=J,J=pt),M(J)):a(J,X)}return function(J,X,nt,pt){try{oo=0;var ee=Ve(J,X,nt,pt);return Zr=null,ee}catch(Qt){if(Qt===jr||Qt===Al)throw Qt;var Ue=$n(29,Qt,null,J.mode);return Ue.lanes=pt,Ue.return=J,Ue}}}var dr=Am(!0),Rm=Am(!1),Ea=!1;function Ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ta(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Oe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Sl(e),um(e,null,a),n}return yl(e,o,n,a),Sl(e)}function co(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xs(e,a)}}function tf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ef=!1;function uo(){if(ef){var e=Yr;if(e!==null)throw e}}function fo(e,n,a,o){ef=!1;var u=e.updateQueue;Ea=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var G=w,it=G.next;G.next=null,M===null?d=it:M.next=it,M=G;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,w=ht.lastBaseUpdate,w!==M&&(w===null?ht.firstBaseUpdate=it:w.next=it,ht.lastBaseUpdate=G))}if(d!==null){var vt=u.baseState;M=0,ht=it=G=null,w=d;do{var rt=w.lane&-536870913,ct=rt!==w.lane;if(ct?(be&rt)===rt:(o&rt)===rt){rt!==0&&rt===qr&&(ef=!0),ht!==null&&(ht=ht.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var Yt=e,ae=w;rt=n;var Ve=a;switch(ae.tag){case 1:if(Yt=ae.payload,typeof Yt=="function"){vt=Yt.call(Ve,vt,rt);break t}vt=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=ae.payload,rt=typeof Yt=="function"?Yt.call(Ve,vt,rt):Yt,rt==null)break t;vt=_({},vt,rt);break t;case 2:Ea=!0}}rt=w.callback,rt!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[rt]:ct.push(rt))}else ct={lane:rt,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ht===null?(it=ht=ct,G=vt):ht=ht.next=ct,M|=rt;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;ct=w,w=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);ht===null&&(G=vt),u.baseState=G,u.firstBaseUpdate=it,u.lastBaseUpdate=ht,d===null&&(u.shared.lanes=0),Da|=M,e.lanes=M,e.memoizedState=vt}}function wm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Cm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)wm(a[e],n)}var Kr=P(null),Dl=P(0);function Dm(e,n){e=aa,Mt(Dl,e),Mt(Kr,n),aa=e|n.baseLanes}function nf(){Mt(Dl,aa),Mt(Kr,Kr.current)}function af(){aa=Dl.current,et(Kr),et(Dl)}var ti=P(null),hi=null;function Aa(e){var n=e.alternate;Mt(sn,sn.current&1),Mt(ti,e),hi===null&&(n===null||Kr.current!==null||n.memoizedState!==null)&&(hi=e)}function rf(e){Mt(sn,sn.current),Mt(ti,e),hi===null&&(hi=e)}function Um(e){e.tag===22?(Mt(sn,sn.current),Mt(ti,e),hi===null&&(hi=e)):Ra()}function Ra(){Mt(sn,sn.current),Mt(ti,ti.current)}function ei(e){et(ti),hi===e&&(hi=null),et(sn)}var sn=P(0);function Ul(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fd(a)||dd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ki=0,pe=null,He=null,cn=null,Ll=!1,Qr=!1,hr=!1,Nl=0,ho=0,Jr=null,mS=0;function an(){throw Error(r(321))}function sf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Jn(e[a],n[a]))return!1;return!0}function of(e,n,a,o,u,d){return Ki=d,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?pg:xf,hr=!1,d=a(o,u),hr=!1,Qr&&(d=Nm(n,a,o,u)),Lm(e),d}function Lm(e){z.H=go;var n=He!==null&&He.next!==null;if(Ki=0,cn=He=pe=null,Ll=!1,ho=0,Jr=null,n)throw Error(r(300));e===null||un||(e=e.dependencies,e!==null&&El(e)&&(un=!0))}function Nm(e,n,a,o){pe=e;var u=0;do{if(Qr&&(Jr=null),ho=0,Qr=!1,25<=u)throw Error(r(301));if(u+=1,cn=He=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=mg,d=n(a,o)}while(Qr);return d}function gS(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?po(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(pe.flags|=1024),n}function lf(){var e=Nl!==0;return Nl=0,e}function cf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function uf(e){if(Ll){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ll=!1}Ki=0,cn=He=pe=null,Qr=!1,ho=Nl=0,Jr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?pe.memoizedState=cn=e:cn=cn.next=e,cn}function on(){if(He===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=cn===null?pe.memoizedState:cn.next;if(n!==null)cn=n,He=e;else{if(e===null)throw pe.alternate===null?Error(r(467)):Error(r(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},cn===null?pe.memoizedState=cn=e:cn=cn.next=e}return cn}function Ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(e){var n=ho;return ho+=1,Jr===null&&(Jr=[]),e=Em(Jr,e,n),n=pe,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?pg:xf),e}function Pl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return po(e);if(e.$$typeof===L)return An(e)}throw Error(r(438,String(e)))}function ff(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ol(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=R;return n.index++,a}function Qi(e,n){return typeof n=="function"?n(e):n}function zl(e){var n=on();return df(n,He,e)}function df(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var w=M=null,G=null,it=n,ht=!1;do{var vt=it.lane&-536870913;if(vt!==it.lane?(be&vt)===vt:(Ki&vt)===vt){var rt=it.revertLane;if(rt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),vt===qr&&(ht=!0);else if((Ki&rt)===rt){it=it.next,rt===qr&&(ht=!0);continue}else vt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(w=G=vt,M=d):G=G.next=vt,pe.lanes|=rt,Da|=rt;vt=it.action,hr&&a(d,vt),d=it.hasEagerState?it.eagerState:a(d,vt)}else rt={lane:vt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(w=G=rt,M=d):G=G.next=rt,pe.lanes|=vt,Da|=vt;it=it.next}while(it!==null&&it!==n);if(G===null?M=d:G.next=w,!Jn(d,e.memoizedState)&&(un=!0,ht&&(a=Yr,a!==null)))throw a;e.memoizedState=d,e.baseState=M,e.baseQueue=G,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function hf(e){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do d=e(d,M.action),M=M.next;while(M!==u);Jn(d,n.memoizedState)||(un=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Om(e,n,a){var o=pe,u=on(),d=Re;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!Jn((He||u).memoizedState,a);if(M&&(u.memoizedState=a,un=!0),u=u.queue,gf(Im.bind(null,o,u,e),[e]),u.getSnapshot!==n||M||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,$r(9,{destroy:void 0},zm.bind(null,o,u,a,n),null),Ye===null)throw Error(r(349));d||(Ki&127)!==0||Pm(o,n,a)}return a}function Pm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Ol(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function zm(e,n,a,o){n.value=a,n.getSnapshot=o,Bm(n)&&Fm(e)}function Im(e,n,a){return a(function(){Bm(n)&&Fm(e)})}function Bm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Jn(e,a)}catch{return!0}}function Fm(e){var n=ar(e,2);n!==null&&Zn(n,e,2)}function pf(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),hr){$t(!0);try{a()}finally{$t(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},n}function Hm(e,n,a,o){return e.baseState=a,df(e,He,typeof o=="function"?o:Qi)}function _S(e,n,a,o,u){if(Fl(e))throw Error(r(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};z.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Gm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Gm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=z.T,M={};z.T=M;try{var w=a(u,o),G=z.S;G!==null&&G(M,w),Vm(e,n,w)}catch(it){mf(e,n,it)}finally{d!==null&&M.types!==null&&(d.types=M.types),z.T=d}}else try{d=a(u,o),Vm(e,n,d)}catch(it){mf(e,n,it)}}function Vm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){km(e,n,o)},function(o){return mf(e,n,o)}):km(e,n,a)}function km(e,n,a){n.status="fulfilled",n.value=a,Xm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Gm(e,a)))}function mf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Xm(n),n=n.next;while(n!==o)}e.action=null}function Xm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Wm(e,n){return n}function qm(e,n){if(Re){var a=Ye.formState;if(a!==null){t:{var o=pe;if(Re){if(Qe){e:{for(var u=Qe,d=di;u.nodeType!==8;){if(!d){u=null;break e}if(u=pi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Qe=pi(u.nextSibling),o=u.data==="F!";break t}}Ma(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wm,lastRenderedState:n},a.queue=o,a=fg.bind(null,pe,o),o.dispatch=a,o=pf(!1),d=Mf.bind(null,pe,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=_S.bind(null,pe,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Ym(e){var n=on();return jm(n,He,e)}function jm(e,n,a){if(n=df(e,n,Wm)[0],e=zl(Qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=po(n)}catch(M){throw M===jr?Al:M}else o=n;n=on();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,$r(9,{destroy:void 0},vS.bind(null,u,a),null)),[o,d,e]}function vS(e,n){e.action=n}function Zm(e){var n=on(),a=He;if(a!==null)return jm(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function $r(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Ol(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Km(){return on().memoizedState}function Il(e,n,a,o){var u=Bn();pe.flags|=e,u.memoizedState=$r(1|n,{destroy:void 0},a,o===void 0?null:o)}function Bl(e,n,a,o){var u=on();o=o===void 0?null:o;var d=u.memoizedState.inst;He!==null&&o!==null&&sf(o,He.memoizedState.deps)?u.memoizedState=$r(n,d,a,o):(pe.flags|=e,u.memoizedState=$r(1|n,d,a,o))}function Qm(e,n){Il(8390656,8,e,n)}function gf(e,n){Bl(2048,8,e,n)}function yS(e){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=Ol(),pe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Jm(e){var n=on().memoizedState;return yS({ref:n,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function $m(e,n){return Bl(4,2,e,n)}function tg(e,n){return Bl(4,4,e,n)}function eg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ng(e,n,a){a=a!=null?a.concat([e]):null,Bl(4,4,eg.bind(null,n,e),a)}function _f(){}function ig(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&sf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function ag(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&sf(n,o[1]))return o[0];if(o=e(),hr){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[o,n],o}function vf(e,n,a){return a===void 0||(Ki&1073741824)!==0&&(be&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=r0(),pe.lanes|=e,Da|=e,a)}function rg(e,n,a,o){return Jn(a,n)?a:Kr.current!==null?(e=vf(e,a,o),Jn(e,n)||(un=!0),e):(Ki&42)===0||(Ki&1073741824)!==0&&(be&261930)===0?(un=!0,e.memoizedState=a):(e=r0(),pe.lanes|=e,Da|=e,n)}function sg(e,n,a,o,u){var d=q.p;q.p=d!==0&&8>d?d:8;var M=z.T,w={};z.T=w,Mf(e,!1,n,a);try{var G=u(),it=z.S;if(it!==null&&it(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ht=pS(G,o);mo(e,n,ht,ai(e))}else mo(e,n,o,ai(e))}catch(vt){mo(e,n,{then:function(){},status:"rejected",reason:vt},ai())}finally{q.p=d,M!==null&&w.types!==null&&(M.types=w.types),z.T=M}}function SS(){}function yf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=og(e).queue;sg(e,u,n,Z,a===null?SS:function(){return lg(e),a(o)})}function og(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function lg(e){var n=og(e);n.next===null&&(n=e.alternate.memoizedState),mo(e,n.next.queue,{},ai())}function Sf(){return An(Lo)}function cg(){return on().memoizedState}function ug(){return on().memoizedState}function MS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();e=ba(a);var o=Ta(n,e,a);o!==null&&(Zn(o,n,a),co(o,n,a)),n={cache:ju()},e.payload=n;return}n=n.return}}function xS(e,n,a){var o=ai();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fl(e)?dg(n,a):(a=Iu(e,n,a,o),a!==null&&(Zn(a,e,o),hg(a,n,o)))}function fg(e,n,a){var o=ai();mo(e,n,a,o)}function mo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fl(e))dg(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var M=n.lastRenderedState,w=d(M,a);if(u.hasEagerState=!0,u.eagerState=w,Jn(w,M))return yl(e,n,u,0),Ye===null&&vl(),!1}catch{}if(a=Iu(e,n,u,o),a!==null)return Zn(a,e,o),hg(a,n,o),!0}return!1}function Mf(e,n,a,o){if(o={lane:2,revertLane:$f(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Fl(e)){if(n)throw Error(r(479))}else n=Iu(e,a,o,2),n!==null&&Zn(n,e,2)}function Fl(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function dg(e,n){Qr=Ll=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function hg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xs(e,a)}}var go={readContext:An,use:Pl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};go.useEffectEvent=an;var pg={readContext:An,use:Pl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:Qm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Il(4194308,4,eg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Il(4194308,4,e,n)},useInsertionEffect:function(e,n){Il(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(hr){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(hr){$t(!0);try{a(n)}finally{$t(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=xS.bind(null,pe,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=pf(e);var n=e.queue,a=fg.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:_f,useDeferredValue:function(e,n){var a=Bn();return vf(a,e,n)},useTransition:function(){var e=pf(!1);return e=sg.bind(null,pe,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=pe,u=Bn();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ye===null)throw Error(r(349));(be&127)!==0||Pm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Qm(Im.bind(null,o,d,e),[e]),o.flags|=2048,$r(9,{destroy:void 0},zm.bind(null,o,d,a,n),null),a},useId:function(){var e=Bn(),n=Ye.identifierPrefix;if(Re){var a=Oi,o=Ni;a=(o&~(1<<32-Wt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=mS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Sf,useFormState:qm,useActionState:qm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Mf.bind(null,pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:ff,useCacheRefresh:function(){return Bn().memoizedState=MS.bind(null,pe)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},xf={readContext:An,use:Pl,useCallback:ig,useContext:An,useEffect:gf,useImperativeHandle:ng,useInsertionEffect:$m,useLayoutEffect:tg,useMemo:ag,useReducer:zl,useRef:Km,useState:function(){return zl(Qi)},useDebugValue:_f,useDeferredValue:function(e,n){var a=on();return rg(a,He.memoizedState,e,n)},useTransition:function(){var e=zl(Qi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:Om,useId:cg,useHostTransitionStatus:Sf,useFormState:Ym,useActionState:Ym,useOptimistic:function(e,n){var a=on();return Hm(a,He,e,n)},useMemoCache:ff,useCacheRefresh:ug};xf.useEffectEvent=Jm;var mg={readContext:An,use:Pl,useCallback:ig,useContext:An,useEffect:gf,useImperativeHandle:ng,useInsertionEffect:$m,useLayoutEffect:tg,useMemo:ag,useReducer:hf,useRef:Km,useState:function(){return hf(Qi)},useDebugValue:_f,useDeferredValue:function(e,n){var a=on();return He===null?vf(a,e,n):rg(a,He.memoizedState,e,n)},useTransition:function(){var e=hf(Qi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:Om,useId:cg,useHostTransitionStatus:Sf,useFormState:Zm,useActionState:Zm,useOptimistic:function(e,n){var a=on();return He!==null?Hm(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ff,useCacheRefresh:ug};mg.useEffectEvent=Jm;function Ef(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var bf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ai(),u=ba(o);u.payload=n,a!=null&&(u.callback=a),n=Ta(e,u,o),n!==null&&(Zn(n,e,o),co(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ai(),u=ba(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ta(e,u,o),n!==null&&(Zn(n,e,o),co(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ai(),o=ba(a);o.tag=2,n!=null&&(o.callback=n),n=Ta(e,o,a),n!==null&&(Zn(n,e,a),co(n,e,a))}};function gg(e,n,a,o,u,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,M):n.prototype&&n.prototype.isPureReactComponent?!eo(a,o)||!eo(u,d):!0}function _g(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&bf.enqueueReplaceState(n,n.state,null)}function pr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function vg(e){_l(e)}function yg(e){console.error(e)}function Sg(e){_l(e)}function Hl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Mg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tf(e,n,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Hl(e,n)},a}function xg(e){return e=ba(e),e.tag=3,e}function Eg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){Mg(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Mg(n,a,o),typeof u!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function ES(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Wr(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?Jl():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Kf(e,o,u)),!1;case 22:return a.flags|=65536,o===Rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Kf(e,o,u)),!1}throw Error(r(435,a.tag))}return Kf(e,o,u),Jl(),!1}if(Re)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ku&&(e=Error(r(422),{cause:o}),ao(ci(e,a)))):(o!==ku&&(n=Error(r(423),{cause:o}),ao(ci(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ci(o,a),u=Tf(e.stateNode,o,u),tf(e,u),rn!==4&&(rn=2)),!1;var d=Error(r(520),{cause:o});if(d=ci(d,a),bo===null?bo=[d]:bo.push(d),rn!==4&&(rn=2),n===null)return!0;o=ci(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Tf(a.stateNode,o,e),tf(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ua===null||!Ua.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=xg(u),Eg(u,e,a,o),tf(a,u),!1}a=a.return}while(a!==null);return!1}var Af=Error(r(461)),un=!1;function Rn(e,n,a,o){n.child=e===null?Rm(n,null,a,o):dr(n,e.child,a,o)}function bg(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var M={};for(var w in o)w!=="ref"&&(M[w]=o[w])}else M=o;return lr(n),o=of(e,n,a,M,d,u),w=lf(),e!==null&&!un?(cf(e,n,u),Ji(e,n,u)):(Re&&w&&Gu(n),n.flags|=1,Rn(e,n,o,u),n.child)}function Tg(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Bu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Ag(e,n,d,o,u)):(e=Ml(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!Of(e,u)){var M=d.memoizedProps;if(a=a.compare,a=a!==null?a:eo,a(M,o)&&e.ref===n.ref)return Ji(e,n,u)}return n.flags|=1,e=qi(d,o),e.ref=n.ref,e.return=n,n.child=e}function Ag(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(eo(d,o)&&e.ref===n.ref)if(un=!1,n.pendingProps=o=d,Of(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,Ji(e,n,u)}return Rf(e,n,a,o,u)}function Rg(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return wg(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Tl(n,d!==null?d.cachePool:null),d!==null?Dm(n,d):nf(),Um(n);else return o=n.lanes=536870912,wg(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Tl(n,d.cachePool),Dm(n,d),Ra(),n.memoizedState=null):(e!==null&&Tl(n,null),nf(),Ra());return Rn(e,n,u,a),n.child}function _o(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function wg(e,n,a,o,u){var d=Ku();return d=d===null?null:{parent:ln._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&Tl(n,null),nf(),Um(n),e!==null&&Wr(e,n,o,!0),n.childLanes=u,null}function Gl(e,n){return n=kl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Cg(e,n,a){return dr(n,e.child,null,a),e=Gl(n,n.pendingProps),e.flags|=2,ei(n),n.memoizedState=null,e}function bS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Re){if(o.mode==="hidden")return e=Gl(n,o),n.lanes=536870912,_o(null,e);if(rf(n),(e=Qe)?(e=G0(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=dm(e),a.return=n,n.child=a,Tn=n,Qe=null)):e=null,e===null)throw Ma(n);return n.lanes=536870912,null}return Gl(n,o)}var d=e.memoizedState;if(d!==null){var M=d.dehydrated;if(rf(n),u)if(n.flags&256)n.flags&=-257,n=Cg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||Wr(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(o=Ye,o!==null&&(M=Li(o,a),M!==0&&M!==d.retryLane))throw d.retryLane=M,ar(e,M),Zn(o,e,M),Af;Jl(),n=Cg(e,n,a)}else e=d.treeContext,Qe=pi(M.nextSibling),Tn=n,Re=!0,Sa=null,di=!1,e!==null&&mm(n,e),n=Gl(n,o),n.flags|=4096;return n}return e=qi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Vl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Rf(e,n,a,o,u){return lr(n),a=of(e,n,a,o,void 0,u),o=lf(),e!==null&&!un?(cf(e,n,u),Ji(e,n,u)):(Re&&o&&Gu(n),n.flags|=1,Rn(e,n,a,u),n.child)}function Dg(e,n,a,o,u,d){return lr(n),n.updateQueue=null,a=Nm(n,o,a,u),Lm(e),o=lf(),e!==null&&!un?(cf(e,n,d),Ji(e,n,d)):(Re&&o&&Gu(n),n.flags|=1,Rn(e,n,a,d),n.child)}function Ug(e,n,a,o,u){if(lr(n),n.stateNode===null){var d=Gr,M=a.contextType;typeof M=="object"&&M!==null&&(d=An(M)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=bf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Ju(n),M=a.contextType,d.context=typeof M=="object"&&M!==null?An(M):Gr,d.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Ef(n,a,M,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&bf.enqueueReplaceState(d,d.state,null),fo(n,o,d,u),uo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var w=n.memoizedProps,G=pr(a,w);d.props=G;var it=d.context,ht=a.contextType;M=Gr,typeof ht=="object"&&ht!==null&&(M=An(ht));var vt=a.getDerivedStateFromProps;ht=typeof vt=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,ht||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||it!==M)&&_g(n,d,o,M),Ea=!1;var rt=n.memoizedState;d.state=rt,fo(n,o,d,u),uo(),it=n.memoizedState,w||rt!==it||Ea?(typeof vt=="function"&&(Ef(n,a,vt,o),it=n.memoizedState),(G=Ea||gg(n,a,G,o,rt,it,M))?(ht||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),d.props=o,d.state=it,d.context=M,o=G):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,$u(e,n),M=n.memoizedProps,ht=pr(a,M),d.props=ht,vt=n.pendingProps,rt=d.context,it=a.contextType,G=Gr,typeof it=="object"&&it!==null&&(G=An(it)),w=a.getDerivedStateFromProps,(it=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==vt||rt!==G)&&_g(n,d,o,G),Ea=!1,rt=n.memoizedState,d.state=rt,fo(n,o,d,u),uo();var ct=n.memoizedState;M!==vt||rt!==ct||Ea||e!==null&&e.dependencies!==null&&El(e.dependencies)?(typeof w=="function"&&(Ef(n,a,w,o),ct=n.memoizedState),(ht=Ea||gg(n,a,ht,o,rt,ct,G)||e!==null&&e.dependencies!==null&&El(e.dependencies))?(it||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ct,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ct,G)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ct),d.props=o,d.state=ct,d.context=G,o=ht):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Vl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=dr(n,e.child,null,u),n.child=dr(n,null,a,u)):Rn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=Ji(e,n,u),e}function Lg(e,n,a,o){return sr(),n.flags|=256,Rn(e,n,a,o),n.child}var wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cf(e){return{baseLanes:e,cachePool:Mm()}}function Df(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function Ng(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(u?Aa(n):Ra(),(e=Qe)?(e=G0(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=dm(e),a.return=n,n.child=a,Tn=n,Qe=null)):e=null,e===null)throw Ma(n);return dd(e)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(Ra(),u=n.mode,w=kl({mode:"hidden",children:w},u),o=rr(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=Cf(a),o.childLanes=Df(e,M,a),n.memoizedState=wf,_o(null,o)):(Aa(n),Uf(n,w))}var G=e.memoizedState;if(G!==null&&(w=G.dehydrated,w!==null)){if(d)n.flags&256?(Aa(n),n.flags&=-257,n=Lf(e,n,a)):n.memoizedState!==null?(Ra(),n.child=e.child,n.flags|=128,n=null):(Ra(),w=o.fallback,u=n.mode,o=kl({mode:"visible",children:o.children},u),w=rr(w,u,a,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,dr(n,e.child,null,a),o=n.child,o.memoizedState=Cf(a),o.childLanes=Df(e,M,a),n.memoizedState=wf,n=_o(null,o));else if(Aa(n),dd(w)){if(M=w.nextSibling&&w.nextSibling.dataset,M)var it=M.dgst;M=it,o=Error(r(419)),o.stack="",o.digest=M,ao({value:o,source:null,stack:null}),n=Lf(e,n,a)}else if(un||Wr(e,n,a,!1),M=(a&e.childLanes)!==0,un||M){if(M=Ye,M!==null&&(o=Li(M,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,ar(e,o),Zn(M,e,o),Af;fd(w)||Jl(),n=Lf(e,n,a)}else fd(w)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Qe=pi(w.nextSibling),Tn=n,Re=!0,Sa=null,di=!1,e!==null&&mm(n,e),n=Uf(n,o.children),n.flags|=4096);return n}return u?(Ra(),w=o.fallback,u=n.mode,G=e.child,it=G.sibling,o=qi(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,it!==null?w=qi(it,w):(w=rr(w,u,a,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,_o(null,o),o=n.child,w=e.child.memoizedState,w===null?w=Cf(a):(u=w.cachePool,u!==null?(G=ln._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Mm(),w={baseLanes:w.baseLanes|a,cachePool:u}),o.memoizedState=w,o.childLanes=Df(e,M,a),n.memoizedState=wf,_o(e.child,o)):(Aa(n),a=e.child,e=a.sibling,a=qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function Uf(e,n){return n=kl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function kl(e,n){return e=$n(22,e,null,n),e.lanes=0,e}function Lf(e,n,a){return dr(n,e.child,null,a),e=Uf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Og(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),qu(e.return,n,a)}function Nf(e,n,a,o,u,d){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=o,M.tail=a,M.tailMode=u,M.treeForkCount=d)}function Pg(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var M=sn.current,w=(M&2)!==0;if(w?(M=M&1|2,n.flags|=128):M&=1,Mt(sn,M),Rn(e,n,o,a),o=Re?io:0,!w&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Og(e,a,n);else if(e.tag===19)Og(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ul(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Nf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ul(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Nf(n,!0,a,null,d,o);break;case"together":Nf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Da|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Wr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=qi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=qi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Of(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&El(e)))}function TS(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),xa(n,ln,e.memoizedState.cache),sr();break;case 27:case 5:Vt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:xa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,rf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Aa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ng(e,n,a):(Aa(n),e=Ji(e,n,a),e!==null?e.sibling:null);Aa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Wr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Pg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Mt(sn,sn.current),o)break;return null;case 22:return n.lanes=0,Rg(e,n,a,n.pendingProps);case 24:xa(n,ln,e.memoizedState.cache)}return Ji(e,n,a)}function zg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!Of(e,a)&&(n.flags&128)===0)return un=!1,TS(e,n,a);un=(e.flags&131072)!==0}else un=!1,Re&&(n.flags&1048576)!==0&&pm(n,io,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ur(n.elementType),n.type=e,typeof e=="function")Bu(e)?(o=pr(e,o),n.tag=1,n=Ug(null,n,e,o,a)):(n.tag=0,n=Rf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=bg(null,n,e,o,a);break t}else if(u===N){n.tag=14,n=Tg(null,n,e,o,a);break t}}throw n=lt(e)||e,Error(r(306,n,""))}}return n;case 0:return Rf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=pr(o,n.pendingProps),Ug(e,n,o,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,$u(e,n),fo(n,o,null,a);var M=n.memoizedState;if(o=M.cache,xa(n,ln,o),o!==d.cache&&Yu(n,[ln],a,!0),uo(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Lg(e,n,o,a);break t}else if(o!==u){u=ci(Error(r(424)),n),ao(u),n=Lg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=pi(e.firstChild),Tn=n,Re=!0,Sa=null,di=!0,a=Rm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(sr(),o===u){n=Ji(e,n,a);break t}Rn(e,n,o,a)}n=n.child}return n;case 26:return Vl(e,n),e===null?(a=Y0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,o=rc(At.current).createElement(a),o[en]=n,o[En]=e,wn(o,a,e),Y(o),n.stateNode=o):n.memoizedState=Y0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Vt(n),e===null&&Re&&(o=n.stateNode=X0(n.type,n.pendingProps,At.current),Tn=n,di=!0,u=Qe,Pa(n.type)?(hd=u,Qe=pi(o.firstChild)):Qe=u),Rn(e,n,n.pendingProps.children,a),Vl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((u=o=Qe)&&(o=eM(o,n.type,n.pendingProps,di),o!==null?(n.stateNode=o,Tn=n,Qe=pi(o.firstChild),di=!1,u=!0):u=!1),u||Ma(n)),Vt(n),u=n.type,d=n.pendingProps,M=e!==null?e.memoizedProps:null,o=d.children,ld(u,d)?o=null:M!==null&&ld(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=of(e,n,gS,null,null,a),Lo._currentValue=u),Vl(e,n),Rn(e,n,o,a),n.child;case 6:return e===null&&Re&&((e=a=Qe)&&(a=nM(a,n.pendingProps,di),a!==null?(n.stateNode=a,Tn=n,Qe=null,e=!0):e=!1),e||Ma(n)),null;case 13:return Ng(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=dr(n,null,o,a):Rn(e,n,o,a),n.child;case 11:return bg(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,xa(n,n.type,o.value),Rn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,lr(n),u=An(u),o=o(u),n.flags|=1,Rn(e,n,o,a),n.child;case 14:return Tg(e,n,n.type,n.pendingProps,a);case 15:return Ag(e,n,n.type,n.pendingProps,a);case 19:return Pg(e,n,a);case 31:return bS(e,n,a);case 22:return Rg(e,n,a,n.pendingProps);case 24:return lr(n),o=An(ln),e===null?(u=Ku(),u===null&&(u=Ye,d=ju(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Ju(n),xa(n,ln,u)):((e.lanes&a)!==0&&($u(e,n),fo(n,null,null,a),uo()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),xa(n,ln,o)):(o=d.cache,xa(n,ln,o),o!==u.cache&&Yu(n,[ln],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function $i(e){e.flags|=4}function Pf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(c0())e.flags|=8192;else throw fr=Rl,Qu}else e.flags&=-16777217}function Ig(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!J0(n))if(c0())e.flags|=8192;else throw fr=Rl,Qu}function Xl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ze():536870912,e.lanes|=n,is|=n)}function vo(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function AS(e,n,a){var o=n.pendingProps;switch(Vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Zi(ln),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xr(n)?$i(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Xu())),Je(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?($i(n),d!==null?(Je(n),Ig(n,d)):(Je(n),Pf(n,u,null,o,a))):d?d!==e.memoizedState?($i(n),Je(n),Ig(n,d)):(Je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&$i(n),Je(n),Pf(n,u,e,o,a)),null;case 27:if(yt(n),a=At.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Je(n),null}e=j.current,Xr(n)?gm(n):(e=X0(u,o,a),n.stateNode=e,$i(n))}return Je(n),null;case 5:if(yt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Je(n),null}if(d=j.current,Xr(n))gm(n);else{var M=rc(At.current);switch(d){case 1:d=M.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=M.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=M.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?M.createElement("select",{is:o.is}):M.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?M.createElement(u,{is:o.is}):M.createElement(u)}}d[en]=n,d[En]=o;t:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)d.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break t;for(;M.sibling===null;){if(M.return===null||M.return===n)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=d;t:switch(wn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&$i(n)}}return Je(n),Pf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=At.current,Xr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[en]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||N0(e.nodeValue,a)),e||Ma(n,!0)}else e=rc(e).createTextNode(o),e[en]=n,n.stateNode=e}return Je(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Xr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[en]=n}else sr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),e=!1}else a=Xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Xr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[en]=n}else sr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=Xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Xl(n,n.updateQueue),Je(n),null);case 4:return Xt(),e===null&&id(n.stateNode.containerInfo),Je(n),null;case 10:return Zi(n.type),Je(n),null;case 19:if(et(sn),o=n.memoizedState,o===null)return Je(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)vo(o,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Ul(e),d!==null){for(n.flags|=128,vo(o,!1),e=d.updateQueue,n.updateQueue=e,Xl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)fm(a,e),a=a.sibling;return Mt(sn,sn.current&1|2),Re&&Yi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>Zl&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ul(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Xl(n,e),vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Re)return Je(n),null}else 2*T()-o.renderingStartTime>Zl&&a!==536870912&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=sn.current,Mt(sn,u?a&1|2:a&1),Re&&Yi(n,o.treeForkCount),e):(Je(n),null);case 22:case 23:return ei(n),af(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&Xl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&et(cr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Zi(ln),Je(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function RS(e,n){switch(Vu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zi(ln),Xt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return yt(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(r(340));sr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ei(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));sr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return et(sn),null;case 4:return Xt(),null;case 10:return Zi(n.type),null;case 22:case 23:return ei(n),af(),e!==null&&et(cr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Zi(ln),null;case 25:return null;default:return null}}function Bg(e,n){switch(Vu(n),n.tag){case 3:Zi(ln),Xt();break;case 26:case 27:case 5:yt(n);break;case 4:Xt();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:et(sn);break;case 10:Zi(n.type);break;case 22:case 23:ei(n),af(),e!==null&&et(cr);break;case 24:Zi(ln)}}function yo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,M=a.inst;o=d(),M.destroy=o}a=a.next}while(a!==u)}}catch(w){Be(n,n.return,w)}}function wa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var M=o.inst,w=M.destroy;if(w!==void 0){M.destroy=void 0,u=n;var G=a,it=w;try{it()}catch(ht){Be(u,G,ht)}}}o=o.next}while(o!==d)}}catch(ht){Be(n,n.return,ht)}}function Fg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Cm(n,a)}catch(o){Be(e,e.return,o)}}}function Hg(e,n,a){a.props=pr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function So(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function Pi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function Gg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function zf(e,n,a){try{var o=e.stateNode;ZS(o,e.type,a,n),o[En]=n}catch(u){Be(e,e.return,u)}}function Vg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pa(e.type)||e.tag===4}function If(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Vg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi));else if(o!==4&&(o===27&&Pa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Bf(e,n,a),e=e.sibling;e!==null;)Bf(e,n,a),e=e.sibling}function Wl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Wl(e,n,a),e=e.sibling;e!==null;)Wl(e,n,a),e=e.sibling}function kg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[en]=e,n[En]=a}catch(d){Be(e,e.return,d)}}var ta=!1,fn=!1,Ff=!1,Xg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function wS(e,n){if(e=e.containerInfo,sd=dc,e=nm(e),Uu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var M=0,w=-1,G=-1,it=0,ht=0,vt=e,rt=null;e:for(;;){for(var ct;vt!==a||u!==0&&vt.nodeType!==3||(w=M+u),vt!==d||o!==0&&vt.nodeType!==3||(G=M+o),vt.nodeType===3&&(M+=vt.nodeValue.length),(ct=vt.firstChild)!==null;)rt=vt,vt=ct;for(;;){if(vt===e)break e;if(rt===a&&++it===u&&(w=M),rt===d&&++ht===o&&(G=M),(ct=vt.nextSibling)!==null)break;vt=rt,rt=vt.parentNode}vt=ct}a=w===-1||G===-1?null:{start:w,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(od={focusedElem:e,selectionRange:a},dc=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Yt=pr(a.type,u);e=o.getSnapshotBeforeUpdate(Yt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Be(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ud(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ud(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function Wg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),o&4&&yo(5,a);break;case 1:if(na(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Be(a,a.return,M)}else{var u=pr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Be(a,a.return,M)}}o&64&&Fg(a),o&512&&So(a,a.return);break;case 3:if(na(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Cm(e,n)}catch(M){Be(a,a.return,M)}}break;case 27:n===null&&o&4&&kg(a);case 26:case 5:na(e,a),n===null&&o&4&&Gg(a),o&512&&So(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),o&4&&jg(e,a);break;case 13:na(e,a),o&4&&Zg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=IS.bind(null,a),iM(e,a))));break;case 22:if(o=a.memoizedState!==null||ta,!o){n=n!==null&&n.memoizedState!==null||fn,u=ta;var d=fn;ta=o,(fn=n)&&!d?ia(e,a,(a.subtreeFlags&8772)!==0):na(e,a),ta=u,fn=d}break;case 30:break;default:na(e,a)}}function qg(e){var n=e.alternate;n!==null&&(e.alternate=null,qg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ys(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Wn=!1;function ea(e,n,a){for(a=a.child;a!==null;)Yg(e,n,a),a=a.sibling}function Yg(e,n,a){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(xt,a)}catch{}switch(a.tag){case 26:fn||Pi(a,n),ea(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Pi(a,n);var o=$e,u=Wn;Pa(a.type)&&($e=a.stateNode,Wn=!1),ea(e,n,a),Co(a.stateNode),$e=o,Wn=u;break;case 5:fn||Pi(a,n);case 6:if(o=$e,u=Wn,$e=null,ea(e,n,a),$e=o,Wn=u,$e!==null)if(Wn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(d){Be(a,n,d)}else try{$e.removeChild(a.stateNode)}catch(d){Be(a,n,d)}break;case 18:$e!==null&&(Wn?(e=$e,F0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),fs(e)):F0($e,a.stateNode));break;case 4:o=$e,u=Wn,$e=a.stateNode.containerInfo,Wn=!0,ea(e,n,a),$e=o,Wn=u;break;case 0:case 11:case 14:case 15:wa(2,a,n),fn||wa(4,a,n),ea(e,n,a);break;case 1:fn||(Pi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Hg(a,n,o)),ea(e,n,a);break;case 21:ea(e,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,ea(e,n,a),fn=o;break;default:ea(e,n,a)}}function jg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{fs(e)}catch(a){Be(n,n.return,a)}}}function Zg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fs(e)}catch(a){Be(n,n.return,a)}}function CS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Xg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Xg),n;default:throw Error(r(435,e.tag))}}function ql(e,n){var a=CS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=BS.bind(null,e,o);o.then(u,u)}})}function qn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,M=n,w=M;t:for(;w!==null;){switch(w.tag){case 27:if(Pa(w.type)){$e=w.stateNode,Wn=!1;break t}break;case 5:$e=w.stateNode,Wn=!1;break t;case 3:case 4:$e=w.stateNode.containerInfo,Wn=!0;break t}w=w.return}if($e===null)throw Error(r(160));Yg(d,M,u),$e=null,Wn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Kg(n,e),n=n.sibling}var xi=null;function Kg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(n,e),Yn(e),o&4&&(wa(3,e,e.return),yo(3,e),wa(5,e,e.return));break;case 1:qn(n,e),Yn(e),o&512&&(fn||a===null||Pi(a,a.return)),o&64&&ta&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=xi;if(qn(n,e),Yn(e),o&512&&(fn||a===null||Pi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[tr]||d[en]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),wn(d,o,a),d[en]=e,Y(d),o=d;break t;case"link":var M=K0("link","href",u).get(o+(a.href||""));if(M){for(var w=0;w<M.length;w++)if(d=M[w],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(w,1);break e}}d=u.createElement(o),wn(d,o,a),u.head.appendChild(d);break;case"meta":if(M=K0("meta","content",u).get(o+(a.content||""))){for(w=0;w<M.length;w++)if(d=M[w],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(w,1);break e}}d=u.createElement(o),wn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[en]=e,Y(d),o=d}e.stateNode=o}else Q0(u,e.type,e.stateNode);else e.stateNode=Z0(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Q0(u,e.type,e.stateNode):Z0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&zf(e,e.memoizedProps,a.memoizedProps)}break;case 27:qn(n,e),Yn(e),o&512&&(fn||a===null||Pi(a,a.return)),a!==null&&o&4&&zf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,e),Yn(e),o&512&&(fn||a===null||Pi(a,a.return)),e.flags&32){u=e.stateNode;try{kn(u,"")}catch(Yt){Be(e,e.return,Yt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,zf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Ff=!0);break;case 6:if(qn(n,e),Yn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Yt){Be(e,e.return,Yt)}}break;case 3:if(lc=null,u=xi,xi=sc(n.containerInfo),qn(n,e),xi=u,Yn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{fs(n.containerInfo)}catch(Yt){Be(e,e.return,Yt)}Ff&&(Ff=!1,Qg(e));break;case 4:o=xi,xi=sc(e.stateNode.containerInfo),qn(n,e),Yn(e),xi=o;break;case 12:qn(n,e),Yn(e);break;case 31:qn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ql(e,o)));break;case 13:qn(n,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jl=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ql(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,it=ta,ht=fn;if(ta=it||u,fn=ht||G,qn(n,e),fn=ht,ta=it,Yn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ta||fn||mr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(d=G.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{w=G.stateNode;var vt=G.memoizedProps.style,rt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;w.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Yt){Be(G,G.return,Yt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Yt){Be(G,G.return,Yt)}}}else if(n.tag===18){if(a===null){G=n;try{var ct=G.stateNode;u?H0(ct,!0):H0(G.stateNode,!1)}catch(Yt){Be(G,G.return,Yt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ql(e,a))));break;case 19:qn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ql(e,o)));break;case 30:break;case 21:break;default:qn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Vg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=If(e);Wl(e,d,u);break;case 5:var M=a.stateNode;a.flags&32&&(kn(M,""),a.flags&=-33);var w=If(e);Wl(e,w,M);break;case 3:case 4:var G=a.stateNode.containerInfo,it=If(e);Bf(e,it,G);break;default:throw Error(r(161))}}catch(ht){Be(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Qg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Qg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function na(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Wg(e,n.alternate,n),n=n.sibling}function mr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:wa(4,n,n.return),mr(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Hg(n,n.return,a),mr(n);break;case 27:Co(n.stateNode);case 26:case 5:Pi(n,n.return),mr(n);break;case 22:n.memoizedState===null&&mr(n);break;case 30:mr(n);break;default:mr(n)}e=e.sibling}}function ia(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,M=d.flags;switch(d.tag){case 0:case 11:case 15:ia(u,d,a),yo(4,d);break;case 1:if(ia(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){Be(o,o.return,it)}if(o=d,u=o.updateQueue,u!==null){var w=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)wm(G[u],w)}catch(it){Be(o,o.return,it)}}a&&M&64&&Fg(d),So(d,d.return);break;case 27:kg(d);case 26:case 5:ia(u,d,a),a&&o===null&&M&4&&Gg(d),So(d,d.return);break;case 12:ia(u,d,a);break;case 31:ia(u,d,a),a&&M&4&&jg(u,d);break;case 13:ia(u,d,a),a&&M&4&&Zg(u,d);break;case 22:d.memoizedState===null&&ia(u,d,a),So(d,d.return);break;case 30:break;default:ia(u,d,a)}n=n.sibling}}function Hf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ro(a))}function Gf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e))}function Ei(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Jg(e,n,a,o),n=n.sibling}function Jg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(e,n,a,o),u&2048&&yo(9,n);break;case 1:Ei(e,n,a,o);break;case 3:Ei(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e)));break;case 12:if(u&2048){Ei(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,M=d.id,w=d.onPostCommit;typeof w=="function"&&w(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Be(n,n.return,G)}}else Ei(e,n,a,o);break;case 31:Ei(e,n,a,o);break;case 13:Ei(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,M=n.alternate,n.memoizedState!==null?d._visibility&2?Ei(e,n,a,o):Mo(e,n):d._visibility&2?Ei(e,n,a,o):(d._visibility|=2,ts(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Hf(M,n);break;case 24:Ei(e,n,a,o),u&2048&&Gf(n.alternate,n);break;default:Ei(e,n,a,o)}}function ts(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,M=n,w=a,G=o,it=M.flags;switch(M.tag){case 0:case 11:case 15:ts(d,M,w,G,u),yo(8,M);break;case 23:break;case 22:var ht=M.stateNode;M.memoizedState!==null?ht._visibility&2?ts(d,M,w,G,u):Mo(d,M):(ht._visibility|=2,ts(d,M,w,G,u)),u&&it&2048&&Hf(M.alternate,M);break;case 24:ts(d,M,w,G,u),u&&it&2048&&Gf(M.alternate,M);break;default:ts(d,M,w,G,u)}n=n.sibling}}function Mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Mo(a,o),u&2048&&Hf(o.alternate,o);break;case 24:Mo(a,o),u&2048&&Gf(o.alternate,o);break;default:Mo(a,o)}n=n.sibling}}var xo=8192;function es(e,n,a){if(e.subtreeFlags&xo)for(e=e.child;e!==null;)$g(e,n,a),e=e.sibling}function $g(e,n,a){switch(e.tag){case 26:es(e,n,a),e.flags&xo&&e.memoizedState!==null&&mM(a,xi,e.memoizedState,e.memoizedProps);break;case 5:es(e,n,a);break;case 3:case 4:var o=xi;xi=sc(e.stateNode.containerInfo),es(e,n,a),xi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=xo,xo=16777216,es(e,n,a),xo=o):es(e,n,a));break;default:es(e,n,a)}}function t0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,n0(o,e)}t0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)e0(e),e=e.sibling}function e0(e){switch(e.tag){case 0:case 11:case 15:Eo(e),e.flags&2048&&wa(9,e,e.return);break;case 3:Eo(e);break;case 12:Eo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Yl(e)):Eo(e);break;default:Eo(e)}}function Yl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,n0(o,e)}t0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:wa(8,n,n.return),Yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(n));break;default:Yl(n)}e=e.sibling}}function n0(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else t:for(a=e;Sn!==null;){o=Sn;var u=o.sibling,d=o.return;if(qg(o),o===a){Sn=null;break t}if(u!==null){u.return=d,Sn=u;break t}Sn=d}}}var DS={getCacheForType:function(e){var n=An(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(ln).controller.signal}},US=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ye=null,Se=null,be=0,Ie=0,ni=null,Ca=!1,ns=!1,Vf=!1,aa=0,rn=0,Da=0,gr=0,kf=0,ii=0,is=0,bo=null,jn=null,Xf=!1,jl=0,i0=0,Zl=1/0,Kl=null,Ua=null,mn=0,La=null,as=null,ra=0,Wf=0,qf=null,a0=null,To=0,Yf=null;function ai(){return(Oe&2)!==0&&be!==0?be&-be:z.T!==null?$f():Ws()}function r0(){if(ii===0)if((be&536870912)===0||Re){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),ii=e}else ii=536870912;return e=ti.current,e!==null&&(e.flags|=32),ii}function Zn(e,n,a){(e===Ye&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(rs(e,0),Na(e,be,ii,!1)),xn(e,a),((Oe&2)===0||e!==Ye)&&(e===Ye&&((Oe&2)===0&&(gr|=a),rn===4&&Na(e,be,ii,!1)),zi(e))}function s0(e,n,a){if((Oe&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Gt(e,n),u=o?OS(e,n):Zf(e,n,!0),d=o;do{if(u===0){ns&&!o&&Na(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!LS(a)){u=Zf(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var w=e;u=bo;var G=w.current.memoizedState.isDehydrated;if(G&&(rs(w,M).flags|=256),M=Zf(w,M,!1),M!==2){if(Vf&&!G){w.errorRecoveryDisabledLanes|=d,gr|=d,u=4;break t}d=jn,jn=u,d!==null&&(jn===null?jn=d:jn.push.apply(jn,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){rs(e,0),Na(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Na(o,n,ii,!Ca);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=jl+300-T(),10<u)){if(Na(o,n,ii,!Ca),_t(o,0,!0)!==0)break t;ra=n,o.timeoutHandle=I0(o0.bind(null,o,a,jn,Kl,Xf,n,ii,gr,is,Ca,d,"Throttled",-0,0),u);break t}o0(o,a,jn,Kl,Xf,n,ii,gr,is,Ca,d,null,-0,0)}}break}while(!0);zi(e)}function o0(e,n,a,o,u,d,M,w,G,it,ht,vt,rt,ct){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},$g(n,d,vt);var Yt=(d&62914560)===d?jl-T():(d&4194048)===d?i0-T():0;if(Yt=gM(vt,Yt),Yt!==null){ra=d,e.cancelPendingCommit=Yt(m0.bind(null,e,n,d,a,o,u,M,w,G,ht,vt,null,rt,ct)),Na(e,d,M,!it);return}}m0(e,n,d,a,o,u,M,w,G)}function LS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Jn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Na(e,n,a,o){n&=~kf,n&=~gr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Wt(u),M=1<<d;o[d]=-1,u&=~M}a!==0&&ks(e,a,n)}function Ql(){return(Oe&6)===0?(Ao(0),!1):!0}function jf(){if(Se!==null){if(Ie===0)var e=Se.return;else e=Se,ji=or=null,uf(e),Zr=null,oo=0,e=Se;for(;e!==null;)Bg(e.alternate,e),e=e.return;Se=null}}function rs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,JS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,jf(),Ye=e,Se=a=qi(e.current,null),be=n,Ie=0,ni=null,Ca=!1,ns=Gt(e,n),Vf=!1,is=ii=kf=gr=Da=rn=0,jn=bo=null,Xf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Wt(o),d=1<<u;n|=e[u],o&=~d}return aa=n,vl(),a}function l0(e,n){pe=null,z.H=go,n===jr||n===Al?(n=bm(),Ie=3):n===Qu?(n=bm(),Ie=4):Ie=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,Se===null&&(rn=1,Hl(e,ci(n,e.current)))}function c0(){var e=ti.current;return e===null?!0:(be&4194048)===be?hi===null:(be&62914560)===be||(be&536870912)!==0?e===hi:!1}function u0(){var e=z.H;return z.H=go,e===null?go:e}function f0(){var e=z.A;return z.A=DS,e}function Jl(){rn=4,Ca||(be&4194048)!==be&&ti.current!==null||(ns=!0),(Da&134217727)===0&&(gr&134217727)===0||Ye===null||Na(Ye,be,ii,!1)}function Zf(e,n,a){var o=Oe;Oe|=2;var u=u0(),d=f0();(Ye!==e||be!==n)&&(Kl=null,rs(e,n)),n=!1;var M=rn;t:do try{if(Ie!==0&&Se!==null){var w=Se,G=ni;switch(Ie){case 8:jf(),M=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var it=Ie;if(Ie=0,ni=null,ss(e,w,G,it),a&&ns){M=0;break t}break;default:it=Ie,Ie=0,ni=null,ss(e,w,G,it)}}NS(),M=rn;break}catch(ht){l0(e,ht)}while(!0);return n&&e.shellSuspendCounter++,ji=or=null,Oe=o,z.H=u,z.A=d,Se===null&&(Ye=null,be=0,vl()),M}function NS(){for(;Se!==null;)d0(Se)}function OS(e,n){var a=Oe;Oe|=2;var o=u0(),u=f0();Ye!==e||be!==n?(Kl=null,Zl=T()+500,rs(e,n)):ns=Gt(e,n);t:do try{if(Ie!==0&&Se!==null){n=Se;var d=ni;e:switch(Ie){case 1:Ie=0,ni=null,ss(e,n,d,1);break;case 2:case 9:if(xm(d)){Ie=0,ni=null,h0(n);break}n=function(){Ie!==2&&Ie!==9||Ye!==e||(Ie=7),zi(e)},d.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:xm(d)?(Ie=0,ni=null,h0(n)):(Ie=0,ni=null,ss(e,n,d,7));break;case 5:var M=null;switch(Se.tag){case 26:M=Se.memoizedState;case 5:case 27:var w=Se;if(M?J0(M):w.stateNode.complete){Ie=0,ni=null;var G=w.sibling;if(G!==null)Se=G;else{var it=w.return;it!==null?(Se=it,$l(it)):Se=null}break e}}Ie=0,ni=null,ss(e,n,d,5);break;case 6:Ie=0,ni=null,ss(e,n,d,6);break;case 8:jf(),rn=6;break t;default:throw Error(r(462))}}PS();break}catch(ht){l0(e,ht)}while(!0);return ji=or=null,z.H=o,z.A=u,Oe=a,Se!==null?0:(Ye=null,be=0,vl(),rn)}function PS(){for(;Se!==null&&!Ze();)d0(Se)}function d0(e){var n=zg(e.alternate,e,aa);e.memoizedProps=e.pendingProps,n===null?$l(e):Se=n}function h0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Dg(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=Dg(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:uf(n);default:Bg(a,n),n=Se=fm(n,aa),n=zg(a,n,aa)}e.memoizedProps=e.pendingProps,n===null?$l(e):Se=n}function ss(e,n,a,o){ji=or=null,uf(n),Zr=null,oo=0;var u=n.return;try{if(ES(e,u,n,a,be)){rn=1,Hl(e,ci(a,e.current)),Se=null;return}}catch(d){if(u!==null)throw Se=u,d;rn=1,Hl(e,ci(a,e.current)),Se=null;return}n.flags&32768?(Re||o===1?e=!0:ns||(be&536870912)!==0?e=!1:(Ca=e=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),p0(n,e)):$l(n)}function $l(e){var n=e;do{if((n.flags&32768)!==0){p0(n,Ca);return}e=n.return;var a=AS(n.alternate,n,aa);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);rn===0&&(rn=5)}function p0(e,n){do{var a=RS(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);rn=6,Se=null}function m0(e,n,a,o,u,d,M,w,G){e.cancelPendingCommit=null;do tc();while(mn!==0);if((Oe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=zu,vi(e,a,d,M,w,G),e===Ye&&(Se=Ye=null,be=0),as=n,La=e,ra=a,Wf=d,qf=u,a0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,FS(dt,function(){return S0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=q.p,q.p=2,M=Oe,Oe|=4;try{wS(e,n,a)}finally{Oe=M,q.p=u,z.T=o}}mn=1,g0(),_0(),v0()}}function g0(){if(mn===1){mn=0;var e=La,n=as,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=q.p;q.p=2;var u=Oe;Oe|=4;try{Kg(n,e);var d=od,M=nm(e.containerInfo),w=d.focusedElem,G=d.selectionRange;if(M!==w&&w&&w.ownerDocument&&em(w.ownerDocument.documentElement,w)){if(G!==null&&Uu(w)){var it=G.start,ht=G.end;if(ht===void 0&&(ht=it),"selectionStart"in w)w.selectionStart=it,w.selectionEnd=Math.min(ht,w.value.length);else{var vt=w.ownerDocument||document,rt=vt&&vt.defaultView||window;if(rt.getSelection){var ct=rt.getSelection(),Yt=w.textContent.length,ae=Math.min(G.start,Yt),Ve=G.end===void 0?ae:Math.min(G.end,Yt);!ct.extend&&ae>Ve&&(M=Ve,Ve=ae,ae=M);var J=tm(w,ae),X=tm(w,Ve);if(J&&X&&(ct.rangeCount!==1||ct.anchorNode!==J.node||ct.anchorOffset!==J.offset||ct.focusNode!==X.node||ct.focusOffset!==X.offset)){var nt=vt.createRange();nt.setStart(J.node,J.offset),ct.removeAllRanges(),ae>Ve?(ct.addRange(nt),ct.extend(X.node,X.offset)):(nt.setEnd(X.node,X.offset),ct.addRange(nt))}}}}for(vt=[],ct=w;ct=ct.parentNode;)ct.nodeType===1&&vt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<vt.length;w++){var pt=vt[w];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}dc=!!sd,od=sd=null}finally{Oe=u,q.p=o,z.T=a}}e.current=n,mn=2}}function _0(){if(mn===2){mn=0;var e=La,n=as,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=q.p;q.p=2;var u=Oe;Oe|=4;try{Wg(e,n.alternate,n)}finally{Oe=u,q.p=o,z.T=a}}mn=3}}function v0(){if(mn===4||mn===3){mn=0,F();var e=La,n=as,a=ra,o=a0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,as=La=null,y0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ua=null),Nr(a),n=n.stateNode,Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(xt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=q.p,q.p=2,z.T=null;try{for(var d=e.onRecoverableError,M=0;M<o.length;M++){var w=o[M];d(w.value,{componentStack:w.stack})}}finally{z.T=n,q.p=u}}(ra&3)!==0&&tc(),zi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Yf?To++:(To=0,Yf=e):To=0,Ao(0)}}function y0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ro(n)))}function tc(){return g0(),_0(),v0(),S0()}function S0(){if(mn!==5)return!1;var e=La,n=Wf;Wf=0;var a=Nr(ra),o=z.T,u=q.p;try{q.p=32>a?32:a,z.T=null,a=qf,qf=null;var d=La,M=ra;if(mn=0,as=La=null,ra=0,(Oe&6)!==0)throw Error(r(331));var w=Oe;if(Oe|=4,e0(d.current),Jg(d,d.current,M,a),Oe=w,Ao(0,!1),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(xt,d)}catch{}return!0}finally{q.p=u,z.T=o,y0(e,n)}}function M0(e,n,a){n=ci(a,n),n=Tf(e.stateNode,n,2),e=Ta(e,n,2),e!==null&&(xn(e,2),zi(e))}function Be(e,n,a){if(e.tag===3)M0(e,e,a);else for(;n!==null;){if(n.tag===3){M0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ua===null||!Ua.has(o))){e=ci(a,e),a=xg(2),o=Ta(n,a,2),o!==null&&(Eg(a,o,n,e),xn(o,2),zi(o));break}}n=n.return}}function Kf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new US;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Vf=!0,u.add(a),e=zS.bind(null,e,n,a),n.then(e,e))}function zS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(be&a)===a&&(rn===4||rn===3&&(be&62914560)===be&&300>T()-jl?(Oe&2)===0&&rs(e,0):kf|=a,is===be&&(is=0)),zi(e)}function x0(e,n){n===0&&(n=ze()),e=ar(e,n),e!==null&&(xn(e,n),zi(e))}function IS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),x0(e,a)}function BS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),x0(e,a)}function FS(e,n){return jt(e,n)}var ec=null,os=null,Qf=!1,nc=!1,Jf=!1,Oa=0;function zi(e){e!==os&&e.next===null&&(os===null?ec=os=e:os=os.next=e),nc=!0,Qf||(Qf=!0,GS())}function Ao(e,n){if(!Jf&&nc){Jf=!0;do for(var a=!1,o=ec;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var M=o.suspendedLanes,w=o.pingedLanes;d=(1<<31-Wt(42|e)+1)-1,d&=u&~(M&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,A0(o,d))}else d=be,d=_t(o,o===Ye?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Gt(o,d)||(a=!0,A0(o,d));o=o.next}while(a);Jf=!1}}function HS(){E0()}function E0(){nc=Qf=!1;var e=0;Oa!==0&&QS()&&(e=Oa);for(var n=T(),a=null,o=ec;o!==null;){var u=o.next,d=b0(o,n);d===0?(o.next=null,a===null?ec=u:a.next=u,u===null&&(os=a)):(a=o,(e!==0||(d&3)!==0)&&(nc=!0)),o=u}mn!==0&&mn!==5||Ao(e),Oa!==0&&(Oa=0)}function b0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-Wt(d),w=1<<M,G=u[M];G===-1?((w&a)===0||(w&o)!==0)&&(u[M]=oe(w,n)):G<=n&&(e.expiredLanes|=w),d&=~w}if(n=Ye,a=be,a=_t(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&re(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Gt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&re(o),Nr(a)){case 2:case 8:a=bt;break;case 32:a=dt;break;case 268435456:a=Ut;break;default:a=dt}return o=T0.bind(null,e),a=jt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&re(o),e.callbackPriority=2,e.callbackNode=null,2}function T0(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(tc()&&e.callbackNode!==a)return null;var o=be;return o=_t(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(s0(e,o,n),b0(e,T()),e.callbackNode!=null&&e.callbackNode===a?T0.bind(null,e):null)}function A0(e,n){if(tc())return null;s0(e,n,!0)}function GS(){$S(function(){(Oe&6)!==0?jt(mt,HS):E0()})}function $f(){if(Oa===0){var e=qr;e===0&&(e=Ot,Ot<<=1,(Ot&261888)===0&&(Ot=256)),Oa=e}return Oa}function R0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ul(""+e)}function w0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function VS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=R0((u[En]||null).action),M=o.submitter;M&&(n=(n=M[En]||null)?R0(n.formAction):M.getAttribute("formAction"),n!==null&&(d=n,M=null));var w=new pl("action","action",null,o,u);e.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Oa!==0){var G=M?w0(u,M):new FormData(u);yf(a,{pending:!0,data:G,method:u.method,action:d},null,G)}}else typeof d=="function"&&(w.preventDefault(),G=M?w0(u,M):new FormData(u),yf(a,{pending:!0,data:G,method:u.method,action:d},d,G))},currentTarget:u}]})}}for(var td=0;td<Pu.length;td++){var ed=Pu[td],kS=ed.toLowerCase(),XS=ed[0].toUpperCase()+ed.slice(1);Mi(kS,"on"+XS)}Mi(rm,"onAnimationEnd"),Mi(sm,"onAnimationIteration"),Mi(om,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(sS,"onTransitionRun"),Mi(oS,"onTransitionStart"),Mi(lS,"onTransitionCancel"),Mi(lm,"onTransitionEnd"),Ft("onMouseEnter",["mouseout","mouseover"]),Ft("onMouseLeave",["mouseout","mouseover"]),Ft("onPointerEnter",["pointerout","pointerover"]),Ft("onPointerLeave",["pointerout","pointerover"]),kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kt("onBeforeInput",["compositionend","keypress","textInput","paste"]),kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function C0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var M=o.length-1;0<=M;M--){var w=o[M],G=w.instance,it=w.currentTarget;if(w=w.listener,G!==d&&u.isPropagationStopped())break t;d=w,u.currentTarget=it;try{d(u)}catch(ht){_l(ht)}u.currentTarget=null,d=G}else for(M=0;M<o.length;M++){if(w=o[M],G=w.instance,it=w.currentTarget,w=w.listener,G!==d&&u.isPropagationStopped())break t;d=w,u.currentTarget=it;try{d(u)}catch(ht){_l(ht)}u.currentTarget=null,d=G}}}}function Me(e,n){var a=n[qs];a===void 0&&(a=n[qs]=new Set);var o=e+"__bubble";a.has(o)||(D0(n,e,2,!1),a.add(o))}function nd(e,n,a){var o=0;n&&(o|=4),D0(a,e,o,n)}var ic="_reactListening"+Math.random().toString(36).slice(2);function id(e){if(!e[ic]){e[ic]=!0,Ct.forEach(function(a){a!=="selectionchange"&&(WS.has(a)||nd(a,!1,e),nd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ic]||(n[ic]=!0,nd("selectionchange",!1,n))}}function D0(e,n,a,o){switch(r_(n)){case 2:var u=yM;break;case 8:u=SM;break;default:u=vd}a=u.bind(null,n,a,e),u=void 0,!xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ad(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var w=o.stateNode.containerInfo;if(w===u)break;if(M===4)for(M=o.return;M!==null;){var G=M.tag;if((G===3||G===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;w!==null;){if(M=U(w),M===null)return;if(G=M.tag,G===5||G===6||G===26||G===27){o=d=M;continue t}w=w.parentNode}}o=o.return}Pp(function(){var it=d,ht=Su(a),vt=[];t:{var rt=cm.get(e);if(rt!==void 0){var ct=pl,Yt=e;switch(e){case"keypress":if(dl(a)===0)break t;case"keydown":case"keyup":ct=By;break;case"focusin":Yt="focus",ct=Au;break;case"focusout":Yt="blur",ct=Au;break;case"beforeblur":case"afterblur":ct=Au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Ay;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Gy;break;case rm:case sm:case om:ct=Cy;break;case lm:ct=ky;break;case"scroll":case"scrollend":ct=by;break;case"wheel":ct=Wy;break;case"copy":case"cut":case"paste":ct=Uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Hp;break;case"toggle":case"beforetoggle":ct=Yy}var ae=(n&4)!==0,Ve=!ae&&(e==="scroll"||e==="scrollend"),J=ae?rt!==null?rt+"Capture":null:rt;ae=[];for(var X=it,nt;X!==null;){var pt=X;if(nt=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||nt===null||J===null||(pt=js(X,J),pt!=null&&ae.push(wo(X,pt,nt))),Ve)break;X=X.return}0<ae.length&&(rt=new ct(rt,Yt,null,a,ht),vt.push({event:rt,listeners:ae}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",rt&&a!==yu&&(Yt=a.relatedTarget||a.fromElement)&&(U(Yt)||Yt[ki]))break t;if((ct||rt)&&(rt=ht.window===ht?ht:(rt=ht.ownerDocument)?rt.defaultView||rt.parentWindow:window,ct?(Yt=a.relatedTarget||a.toElement,ct=it,Yt=Yt?U(Yt):null,Yt!==null&&(Ve=c(Yt),ae=Yt.tag,Yt!==Ve||ae!==5&&ae!==27&&ae!==6)&&(Yt=null)):(ct=null,Yt=it),ct!==Yt)){if(ae=Bp,pt="onMouseLeave",J="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Hp,pt="onPointerLeave",J="onPointerEnter",X="pointer"),Ve=ct==null?rt:st(ct),nt=Yt==null?rt:st(Yt),rt=new ae(pt,X+"leave",ct,a,ht),rt.target=Ve,rt.relatedTarget=nt,pt=null,U(ht)===it&&(ae=new ae(J,X+"enter",Yt,a,ht),ae.target=nt,ae.relatedTarget=Ve,pt=ae),Ve=pt,ct&&Yt)e:{for(ae=qS,J=ct,X=Yt,nt=0,pt=J;pt;pt=ae(pt))nt++;pt=0;for(var ee=X;ee;ee=ae(ee))pt++;for(;0<nt-pt;)J=ae(J),nt--;for(;0<pt-nt;)X=ae(X),pt--;for(;nt--;){if(J===X||X!==null&&J===X.alternate){ae=J;break e}J=ae(J),X=ae(X)}ae=null}else ae=null;ct!==null&&U0(vt,rt,ct,ae,!1),Yt!==null&&Ve!==null&&U0(vt,Ve,Yt,ae,!0)}}t:{if(rt=it?st(it):window,ct=rt.nodeName&&rt.nodeName.toLowerCase(),ct==="select"||ct==="input"&&rt.type==="file")var Ue=jp;else if(qp(rt))if(Zp)Ue=iS;else{Ue=eS;var Qt=tS}else ct=rt.nodeName,!ct||ct.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?it&&vu(it.elementType)&&(Ue=jp):Ue=nS;if(Ue&&(Ue=Ue(e,it))){Yp(vt,Ue,a,ht);break t}Qt&&Qt(e,rt,it),e==="focusout"&&it&&rt.type==="number"&&it.memoizedProps.value!=null&&Ln(rt,"number",rt.value)}switch(Qt=it?st(it):window,e){case"focusin":(qp(Qt)||Qt.contentEditable==="true")&&(Br=Qt,Lu=it,no=null);break;case"focusout":no=Lu=Br=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,im(vt,a,ht);break;case"selectionchange":if(rS)break;case"keydown":case"keyup":im(vt,a,ht)}var me;if(wu)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else Ir?Xp(e,a)&&(Te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(Gp&&a.locale!=="ko"&&(Ir||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Ir&&(me=zp()):(va=ht,Eu="value"in va?va.value:va.textContent,Ir=!0)),Qt=ac(it,Te),0<Qt.length&&(Te=new Fp(Te,e,null,a,ht),vt.push({event:Te,listeners:Qt}),me?Te.data=me:(me=Wp(a),me!==null&&(Te.data=me)))),(me=Zy?Ky(e,a):Qy(e,a))&&(Te=ac(it,"onBeforeInput"),0<Te.length&&(Qt=new Fp("onBeforeInput","beforeinput",null,a,ht),vt.push({event:Qt,listeners:Te}),Qt.data=me)),VS(vt,e,it,a,ht)}C0(vt,n)})}function wo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ac(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=js(e,a),u!=null&&o.unshift(wo(e,u,d)),u=js(e,n),u!=null&&o.push(wo(e,u,d))),e.tag===3)return o;e=e.return}return[]}function qS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function U0(e,n,a,o,u){for(var d=n._reactName,M=[];a!==null&&a!==o;){var w=a,G=w.alternate,it=w.stateNode;if(w=w.tag,G!==null&&G===o)break;w!==5&&w!==26&&w!==27||it===null||(G=it,u?(it=js(a,d),it!=null&&M.unshift(wo(a,it,G))):u||(it=js(a,d),it!=null&&M.push(wo(a,it,G)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var YS=/\r\n?/g,jS=/\u0000|\uFFFD/g;function L0(e){return(typeof e=="string"?e:""+e).replace(YS,`
`).replace(jS,"")}function N0(e,n){return n=L0(n),L0(e)===n}function Ge(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||kn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&kn(e,""+o);break;case"className":qe(e,"class",o);break;case"tabIndex":qe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":qe(e,a,o);break;case"style":Np(e,o,d);break;case"data":if(n!=="object"){qe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ul(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Ge(e,n,"name",u.name,u,null),Ge(e,n,"formEncType",u.formEncType,u,null),Ge(e,n,"formMethod",u.formMethod,u,null),Ge(e,n,"formTarget",u.formTarget,u,null)):(Ge(e,n,"encType",u.encType,u,null),Ge(e,n,"method",u.method,u,null),Ge(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ul(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Xi);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ul(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),De(e,"popover",o);break;case"xlinkActuate":Ae(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ae(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ae(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ae(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ae(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ae(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ae(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ae(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ae(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":De(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xy.get(a)||a,De(e,a,o))}}function rd(e,n,a,o,u,d){switch(a){case"style":Np(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?kn(e,o):(typeof o=="number"||typeof o=="bigint")&&kn(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[En]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):De(e,a,o)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var M=a[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,d,M,a,null)}}u&&Ge(e,n,"srcSet",a.srcSet,a,null),o&&Ge(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var w=d=M=u=null,G=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":M=ht;break;case"checked":G=ht;break;case"defaultChecked":it=ht;break;case"value":d=ht;break;case"defaultValue":w=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:Ge(e,n,o,ht,a,null)}}In(e,d,w,G,it,M,u,!1);return;case"select":Me("invalid",e),o=M=d=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":d=w;break;case"defaultValue":M=w;break;case"multiple":o=w;default:Ge(e,n,u,w,a,null)}n=d,a=M,e.multiple=!!o,n!=null?nn(e,!!o,n,!1):a!=null&&nn(e,!!o,a,!0);return;case"textarea":Me("invalid",e),d=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(w=a[M],w!=null))switch(M){case"value":o=w;break;case"defaultValue":u=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Ge(e,n,M,w,a,null)}Or(e,o,u,d);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ge(e,n,G,o,a,null));return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<Ro.length;o++)Me(Ro[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,it,o,a,null)}return;default:if(vu(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&rd(e,n,ht,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&Ge(e,n,w,o,a,null))}function ZS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,w=null,G=null,it=null,ht=null;for(ct in a){var vt=a[ct];if(a.hasOwnProperty(ct)&&vt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":G=vt;default:o.hasOwnProperty(ct)||Ge(e,n,ct,null,o,vt)}}for(var rt in o){var ct=o[rt];if(vt=a[rt],o.hasOwnProperty(rt)&&(ct!=null||vt!=null))switch(rt){case"type":d=ct;break;case"name":u=ct;break;case"checked":it=ct;break;case"defaultChecked":ht=ct;break;case"value":M=ct;break;case"defaultValue":w=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:ct!==vt&&Ge(e,n,rt,ct,o,vt)}}Fe(e,M,w,G,it,ht,d,u);return;case"select":ct=M=w=rt=null;for(d in a)if(G=a[d],a.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":ct=G;default:o.hasOwnProperty(d)||Ge(e,n,d,null,o,G)}for(u in o)if(d=o[u],G=a[u],o.hasOwnProperty(u)&&(d!=null||G!=null))switch(u){case"value":rt=d;break;case"defaultValue":w=d;break;case"multiple":M=d;default:d!==G&&Ge(e,n,u,d,o,G)}n=w,a=M,o=ct,rt!=null?nn(e,!!a,rt,!1):!!o!=!!a&&(n!=null?nn(e,!!a,n,!0):nn(e,!!a,a?[]:"",!1));return;case"textarea":ct=rt=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ge(e,n,w,null,o,u)}for(M in o)if(u=o[M],d=a[M],o.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":rt=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Ge(e,n,M,u,o,d)}bn(e,rt,ct);return;case"option":for(var Yt in a)rt=a[Yt],a.hasOwnProperty(Yt)&&rt!=null&&!o.hasOwnProperty(Yt)&&(Yt==="selected"?e.selected=!1:Ge(e,n,Yt,null,o,rt));for(G in o)rt=o[G],ct=a[G],o.hasOwnProperty(G)&&rt!==ct&&(rt!=null||ct!=null)&&(G==="selected"?e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":Ge(e,n,G,rt,o,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)rt=a[ae],a.hasOwnProperty(ae)&&rt!=null&&!o.hasOwnProperty(ae)&&Ge(e,n,ae,null,o,rt);for(it in o)if(rt=o[it],ct=a[it],o.hasOwnProperty(it)&&rt!==ct&&(rt!=null||ct!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:Ge(e,n,it,rt,o,ct)}return;default:if(vu(n)){for(var Ve in a)rt=a[Ve],a.hasOwnProperty(Ve)&&rt!==void 0&&!o.hasOwnProperty(Ve)&&rd(e,n,Ve,void 0,o,rt);for(ht in o)rt=o[ht],ct=a[ht],!o.hasOwnProperty(ht)||rt===ct||rt===void 0&&ct===void 0||rd(e,n,ht,rt,o,ct);return}}for(var J in a)rt=a[J],a.hasOwnProperty(J)&&rt!=null&&!o.hasOwnProperty(J)&&Ge(e,n,J,null,o,rt);for(vt in o)rt=o[vt],ct=a[vt],!o.hasOwnProperty(vt)||rt===ct||rt==null&&ct==null||Ge(e,n,vt,rt,o,ct)}function O0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function KS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,M=u.initiatorType,w=u.duration;if(d&&w&&O0(M)){for(M=0,w=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],it=G.startTime;if(it>w)break;var ht=G.transferSize,vt=G.initiatorType;ht&&O0(vt)&&(G=G.responseEnd,M+=ht*(G<w?1:(w-it)/(G-it)))}if(--o,n+=8*(d+M)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sd=null,od=null;function rc(e){return e.nodeType===9?e:e.ownerDocument}function P0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function z0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ld(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cd=null;function QS(){var e=window.event;return e&&e.type==="popstate"?e===cd?!1:(cd=e,!0):(cd=null,!1)}var I0=typeof setTimeout=="function"?setTimeout:void 0,JS=typeof clearTimeout=="function"?clearTimeout:void 0,B0=typeof Promise=="function"?Promise:void 0,$S=typeof queueMicrotask=="function"?queueMicrotask:typeof B0<"u"?function(e){return B0.resolve(null).then(e).catch(tM)}:I0;function tM(e){setTimeout(function(){throw e})}function Pa(e){return e==="head"}function F0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),fs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Co(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Co(a);for(var d=a.firstChild;d;){var M=d.nextSibling,w=d.nodeName;d[tr]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=M}}else a==="body"&&Co(e.ownerDocument.body);a=u}while(a);fs(n)}function H0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ud(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ud(a),Ys(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function eM(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[tr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function nM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pi(e.nextSibling),e===null))return null;return e}function G0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pi(e.nextSibling),e===null))return null;return e}function fd(e){return e.data==="$?"||e.data==="$~"}function dd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function iM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var hd=null;function V0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return pi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function k0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function X0(e,n,a){switch(n=rc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Co(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ys(e)}var mi=new Map,W0=new Set;function sc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sa=q.d;q.d={f:aM,r:rM,D:sM,C:oM,L:lM,m:cM,X:fM,S:uM,M:dM};function aM(){var e=sa.f(),n=Ql();return e||n}function rM(e){var n=K(e);n!==null&&n.tag===5&&n.type==="form"?lg(n):sa.r(e)}var ls=typeof document>"u"?null:document;function q0(e,n,a){var o=ls;if(o&&typeof n=="string"&&n){var u=yn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),W0.has(u)||(W0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",e),Y(n),o.head.appendChild(n)))}}function sM(e){sa.D(e),q0("dns-prefetch",e,null)}function oM(e,n){sa.C(e,n),q0("preconnect",e,n)}function lM(e,n,a){sa.L(e,n,a);var o=ls;if(o&&e&&n){var u='link[rel="preload"][as="'+yn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+yn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+yn(a.imageSizes)+'"]')):u+='[href="'+yn(e)+'"]';var d=u;switch(n){case"style":d=cs(e);break;case"script":d=us(e)}mi.has(d)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),mi.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Do(d))||n==="script"&&o.querySelector(Uo(d))||(n=o.createElement("link"),wn(n,"link",e),Y(n),o.head.appendChild(n)))}}function cM(e,n){sa.m(e,n);var a=ls;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+yn(o)+'"][href="'+yn(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=us(e)}if(!mi.has(d)&&(e=_({rel:"modulepreload",href:e},n),mi.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(d)))return}o=a.createElement("link"),wn(o,"link",e),Y(o),a.head.appendChild(o)}}}function uM(e,n,a){sa.S(e,n,a);var o=ls;if(o&&e){var u=ot(o).hoistableStyles,d=cs(e);n=n||"default";var M=u.get(d);if(!M){var w={loading:0,preload:null};if(M=o.querySelector(Do(d)))w.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=mi.get(d))&&pd(e,a);var G=M=o.createElement("link");Y(G),wn(G,"link",e),G._p=new Promise(function(it,ht){G.onload=it,G.onerror=ht}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,oc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:w},u.set(d,M)}}}function fM(e,n){sa.X(e,n);var a=ls;if(a&&e){var o=ot(a).hoistableScripts,u=us(e),d=o.get(u);d||(d=a.querySelector(Uo(u)),d||(e=_({src:e,async:!0},n),(n=mi.get(u))&&md(e,n),d=a.createElement("script"),Y(d),wn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function dM(e,n){sa.M(e,n);var a=ls;if(a&&e){var o=ot(a).hoistableScripts,u=us(e),d=o.get(u);d||(d=a.querySelector(Uo(u)),d||(e=_({src:e,async:!0,type:"module"},n),(n=mi.get(u))&&md(e,n),d=a.createElement("script"),Y(d),wn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Y0(e,n,a,o){var u=(u=At.current)?sc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=cs(a.href),a=ot(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=cs(a.href);var d=ot(u).hoistableStyles,M=d.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=u.querySelector(Do(e)))&&!d._p&&(M.instance=d,M.state.loading=5),mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(e,a),d||hM(u,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=us(a),a=ot(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function cs(e){return'href="'+yn(e)+'"'}function Do(e){return'link[rel="stylesheet"]['+e+"]"}function j0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function hM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),Y(n),e.head.appendChild(n))}function us(e){return'[src="'+yn(e)+'"]'}function Uo(e){return"script[async]"+e}function Z0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+yn(a.href)+'"]');if(o)return n.instance=o,Y(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Y(o),wn(o,"style",u),oc(o,a.precedence,e),n.instance=o;case"stylesheet":u=cs(a.href);var d=e.querySelector(Do(u));if(d)return n.state.loading|=4,n.instance=d,Y(d),d;o=j0(a),(u=mi.get(u))&&pd(o,u),d=(e.ownerDocument||e).createElement("link"),Y(d);var M=d;return M._p=new Promise(function(w,G){M.onload=w,M.onerror=G}),wn(d,"link",o),n.state.loading|=4,oc(d,a.precedence,e),n.instance=d;case"script":return d=us(a.src),(u=e.querySelector(Uo(d)))?(n.instance=u,Y(u),u):(o=a,(u=mi.get(d))&&(o=_({},a),md(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Y(u),wn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,oc(o,a.precedence,e));return n.instance}function oc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,M=0;M<o.length;M++){var w=o[M];if(w.dataset.precedence===n)d=w;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function pd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function md(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var lc=null;function K0(e,n,a){if(lc===null){var o=new Map,u=lc=new Map;u.set(a,o)}else u=lc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[tr]||d[en]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(n)||"";M=e+M;var w=o.get(M);w?w.push(d):o.set(M,[d])}}return o}function Q0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function pM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function J0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function mM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=cs(o.href),d=n.querySelector(Do(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=cc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,Y(d);return}d=n.ownerDocument||n,o=j0(o),(u=mi.get(u))&&pd(o,u),d=d.createElement("link"),Y(d);var M=d;M._p=new Promise(function(w,G){M.onload=w,M.onerror=G}),wn(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=cc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var gd=0;function gM(e,n){return e.stylesheets&&e.count===0&&fc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&gd===0&&(gd=62500*KS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>gd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var uc=null;function fc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uc=new Map,n.forEach(_M,e),uc=null,cc.call(e))}function _M(e,n){if(!(n.state.loading&4)){var a=uc.get(e);if(a)var o=a.get(null);else{a=new Map,uc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),d=a.get(M)||o,d===o&&a.set(null,u),a.set(M,u),this.count++,o=cc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Lo={$$typeof:L,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function vM(e,n,a,o,u,d,M,w,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function $0(e,n,a,o,u,d,M,w,G,it,ht,vt){return e=new vM(e,n,a,M,G,it,ht,vt,w),n=1,d===!0&&(n|=24),d=$n(3,null,null,n),e.current=d,d.stateNode=e,n=ju(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Ju(d),e}function t_(e){return e?(e=Gr,e):Gr}function e_(e,n,a,o,u,d){u=t_(u),o.context===null?o.context=u:o.pendingContext=u,o=ba(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ta(e,o,n),a!==null&&(Zn(a,e,n),co(a,e,n))}function n_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function _d(e,n){n_(e,n),(e=e.alternate)&&n_(e,n)}function i_(e){if(e.tag===13||e.tag===31){var n=ar(e,67108864);n!==null&&Zn(n,e,67108864),_d(e,67108864)}}function a_(e){if(e.tag===13||e.tag===31){var n=ai();n=Ja(n);var a=ar(e,n);a!==null&&Zn(a,e,n),_d(e,n)}}var dc=!0;function yM(e,n,a,o){var u=z.T;z.T=null;var d=q.p;try{q.p=2,vd(e,n,a,o)}finally{q.p=d,z.T=u}}function SM(e,n,a,o){var u=z.T;z.T=null;var d=q.p;try{q.p=8,vd(e,n,a,o)}finally{q.p=d,z.T=u}}function vd(e,n,a,o){if(dc){var u=yd(o);if(u===null)ad(e,n,o,hc,a),s_(e,o);else if(xM(u,e,n,a,o))o.stopPropagation();else if(s_(e,o),n&4&&-1<MM.indexOf(e)){for(;u!==null;){var d=K(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=Rt(d.pendingLanes);if(M!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;M;){var G=1<<31-Wt(M);w.entanglements[1]|=G,M&=~G}zi(d),(Oe&6)===0&&(Zl=T()+500,Ao(0))}}break;case 31:case 13:w=ar(d,2),w!==null&&Zn(w,d,2),Ql(),_d(d,2)}if(d=yd(o),d===null&&ad(e,n,o,hc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else ad(e,n,o,null,a)}}function yd(e){return e=Su(e),Sd(e)}var hc=null;function Sd(e){if(hc=null,e=U(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return hc=e,null}function r_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(at()){case mt:return 2;case bt:return 8;case dt:case Zt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var Md=!1,za=null,Ia=null,Ba=null,No=new Map,Oo=new Map,Fa=[],MM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function s_(e,n){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=K(n),n!==null&&i_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function xM(e,n,a,o,u){switch(n){case"focusin":return za=Po(za,e,n,a,o,u),!0;case"dragenter":return Ia=Po(Ia,e,n,a,o,u),!0;case"mouseover":return Ba=Po(Ba,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return No.set(d,Po(No.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Oo.set(d,Po(Oo.get(d)||null,e,n,a,o,u)),!0}return!1}function o_(e){var n=U(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,$a(e.priority,function(){a_(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,$a(e.priority,function(){a_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=yd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);yu=o,a.target.dispatchEvent(o),yu=null}else return n=K(a),n!==null&&i_(n),e.blockedOn=a,!1;n.shift()}return!0}function l_(e,n,a){pc(e)&&a.delete(n)}function EM(){Md=!1,za!==null&&pc(za)&&(za=null),Ia!==null&&pc(Ia)&&(Ia=null),Ba!==null&&pc(Ba)&&(Ba=null),No.forEach(l_),Oo.forEach(l_)}function mc(e,n){e.blockedOn===n&&(e.blockedOn=null,Md||(Md=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,EM)))}var gc=null;function c_(e){gc!==e&&(gc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){gc===e&&(gc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Sd(o||a)===null)continue;break}var d=K(a);d!==null&&(e.splice(n,3),n-=3,yf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function fs(e){function n(G){return mc(G,e)}za!==null&&mc(za,e),Ia!==null&&mc(Ia,e),Ba!==null&&mc(Ba,e),No.forEach(n),Oo.forEach(n);for(var a=0;a<Fa.length;a++){var o=Fa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Fa.length&&(a=Fa[0],a.blockedOn===null);)o_(a),a.blockedOn===null&&Fa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],M=u[En]||null;if(typeof d=="function")M||c_(a);else if(M){var w=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[En]||null)w=M.formAction;else if(Sd(u)!==null)continue}else w=M.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),c_(a)}}}function u_(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(M){return u=M})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function xd(e){this._internalRoot=e}_c.prototype.render=xd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ai();e_(a,o,e,n,null,null)},_c.prototype.unmount=xd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e_(e.current,2,null,e,null,null),Ql(),n[ki]=null}};function _c(e){this._internalRoot=e}_c.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ws();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Fa.length&&n!==0&&n<Fa[a].priority;a++);Fa.splice(a,0,e),a===0&&o_(e)}};var f_=t.version;if(f_!=="19.2.7")throw Error(r(527,f_,"19.2.7"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var bM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{xt=vc.inject(bM),Lt=vc}catch{}}return zo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=vg,d=yg,M=Sg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=$0(e,1,!1,null,null,a,o,null,u,d,M,u_),e[ki]=n.current,id(e),new xd(n)},zo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",d=vg,M=yg,w=Sg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=$0(e,1,!0,n,a??null,o,u,G,d,M,w,u_),n.context=t_(null),a=n.current,o=ai(),o=Ja(o),u=ba(o),u.callback=null,Ta(a,u,o),a=o,n.current.lanes=a,xn(n,a),zi(n),e[ki]=n.current,id(e),new _c(n)},zo.version="19.2.7",zo}var y_;function NM(){if(y_)return bd.exports;y_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),bd.exports=LM(),bd.exports}var OM=NM();const op="178",PM=0,S_=1,zM=2,Iv=1,lp=2,da=3,Qa=0,Qn=1,Bi=2,ja=0,Ls=1,$c=2,M_=3,x_=4,IM=5,Tr=100,BM=101,FM=102,HM=103,GM=104,VM=200,kM=201,XM=202,WM=203,uh=204,fh=205,qM=206,YM=207,jM=208,ZM=209,KM=210,QM=211,JM=212,$M=213,tx=214,dh=0,hh=1,ph=2,Ps=3,mh=4,gh=5,_h=6,vh=7,Bv=0,ex=1,nx=2,Za=0,ix=1,ax=2,rx=3,sx=4,ox=5,lx=6,cx=7,Fv=300,zs=301,Is=302,yh=303,Sh=304,uu=306,Mh=1e3,wr=1001,xh=1002,Di=1003,ux=1004,yc=1005,Hi=1006,wd=1007,Cr=1008,Gi=1009,Hv=1010,Gv=1011,Zo=1012,cp=1013,Dr=1014,ha=1015,il=1016,up=1017,fp=1018,Ko=1020,Vv=35902,kv=1021,Xv=1022,wi=1023,Qo=1026,Jo=1027,Wv=1028,dp=1029,qv=1030,hp=1031,pp=1033,Yc=33776,jc=33777,Zc=33778,Kc=33779,Eh=35840,bh=35841,Th=35842,Ah=35843,Rh=36196,wh=37492,Ch=37496,Dh=37808,Uh=37809,Lh=37810,Nh=37811,Oh=37812,Ph=37813,zh=37814,Ih=37815,Bh=37816,Fh=37817,Hh=37818,Gh=37819,Vh=37820,kh=37821,Qc=36492,Xh=36494,Wh=36495,Yv=36283,qh=36284,Yh=36285,jh=36286,fx=3200,dx=3201,mp=0,hx=1,Ya="",oi="srgb",Bs="srgb-linear",tu="linear",ke="srgb",ds=7680,E_=519,px=512,mx=513,gx=514,jv=515,_x=516,vx=517,yx=518,Sx=519,Zh=35044,b_="300 es",pa=2e3,eu=2001;class Hs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cd=Math.PI/180,Kh=180/Math.PI;function Ka(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function we(s,t,i){return Math.max(t,Math.min(i,s))}function Mx(s,t){return(s%t+t)%t}function Dd(s,t,i){return(1-i)*s+i*t}function Fi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class de{constructor(t=0,i=0){de.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(we(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class al{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,h){let p=r[l+0],m=r[l+1],v=r[l+2],_=r[l+3];const y=c[f+0],x=c[f+1],E=c[f+2],b=c[f+3];if(h===0){t[i+0]=p,t[i+1]=m,t[i+2]=v,t[i+3]=_;return}if(h===1){t[i+0]=y,t[i+1]=x,t[i+2]=E,t[i+3]=b;return}if(_!==b||p!==y||m!==x||v!==E){let S=1-h;const g=p*y+m*x+v*E+_*b,C=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const k=Math.sqrt(L),H=Math.atan2(k,g*C);S=Math.sin(S*H)/k,h=Math.sin(h*H)/k}const D=h*C;if(p=p*S+y*D,m=m*S+x*D,v=v*S+E*D,_=_*S+b*D,S===1-h){const k=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=k,m*=k,v*=k,_*=k}}t[i]=p,t[i+1]=m,t[i+2]=v,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,f){const h=r[l],p=r[l+1],m=r[l+2],v=r[l+3],_=c[f],y=c[f+1],x=c[f+2],E=c[f+3];return t[i]=h*E+v*_+p*x-m*y,t[i+1]=p*E+v*y+m*_-h*x,t[i+2]=m*E+v*x+h*y-p*_,t[i+3]=v*E-h*_-p*y-m*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(r/2),v=h(l/2),_=h(c/2),y=p(r/2),x=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=y*v*_+m*x*E,this._y=m*x*_-y*v*E,this._z=m*v*E+y*x*_,this._w=m*v*_-y*x*E;break;case"YXZ":this._x=y*v*_+m*x*E,this._y=m*x*_-y*v*E,this._z=m*v*E-y*x*_,this._w=m*v*_+y*x*E;break;case"ZXY":this._x=y*v*_-m*x*E,this._y=m*x*_+y*v*E,this._z=m*v*E+y*x*_,this._w=m*v*_-y*x*E;break;case"ZYX":this._x=y*v*_-m*x*E,this._y=m*x*_+y*v*E,this._z=m*v*E-y*x*_,this._w=m*v*_+y*x*E;break;case"YZX":this._x=y*v*_+m*x*E,this._y=m*x*_+y*v*E,this._z=m*v*E-y*x*_,this._w=m*v*_-y*x*E;break;case"XZY":this._x=y*v*_-m*x*E,this._y=m*x*_-y*v*E,this._z=m*v*E+y*x*_,this._w=m*v*_+y*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],p=i[9],m=i[2],v=i[6],_=i[10],y=r+h+_;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(v-p)*x,this._y=(c-m)*x,this._z=(f-l)*x}else if(r>h&&r>_){const x=2*Math.sqrt(1+r-h-_);this._w=(v-p)/x,this._x=.25*x,this._y=(l+f)/x,this._z=(c+m)/x}else if(h>_){const x=2*Math.sqrt(1+h-r-_);this._w=(c-m)/x,this._x=(l+f)/x,this._y=.25*x,this._z=(p+v)/x}else{const x=2*Math.sqrt(1+_-r-h);this._w=(f-l)/x,this._x=(c+m)/x,this._y=(p+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,h=i._x,p=i._y,m=i._z,v=i._w;return this._x=r*v+f*h+l*m-c*p,this._y=l*v+f*p+c*h-r*m,this._z=c*v+f*m+r*p-l*h,this._w=f*v-r*h-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const x=1-i;return this._w=x*f+i*this._w,this._x=x*r+i*this._x,this._y=x*l+i*this._y,this._z=x*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,h),_=Math.sin((1-i)*v)/m,y=Math.sin(i*v)/m;return this._w=f*_+this._w*y,this._x=r*_+this._x*y,this._y=l*_+this._y*y,this._z=c*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,r=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(T_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(T_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*l-h*r),v=2*(h*i-c*l),_=2*(c*r-f*i);return this.x=i+p*m+f*_-h*v,this.y=r+p*v+h*m-c*_,this.z=l+p*_+c*v-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this.z=we(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this.z=we(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*f-r*p,this.z=r*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Ud.copy(this).projectOnVector(t),this.sub(Ud)}reflect(t){return this.sub(Ud.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(we(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ud=new Q,T_=new al;class ge{constructor(t,i,r,l,c,f,h,p,m){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,h,p,m)}set(t,i,r,l,c,f,h,p,m){const v=this.elements;return v[0]=t,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=p,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],p=r[6],m=r[1],v=r[4],_=r[7],y=r[2],x=r[5],E=r[8],b=l[0],S=l[3],g=l[6],C=l[1],L=l[4],D=l[7],k=l[2],H=l[5],N=l[8];return c[0]=f*b+h*C+p*k,c[3]=f*S+h*L+p*H,c[6]=f*g+h*D+p*N,c[1]=m*b+v*C+_*k,c[4]=m*S+v*L+_*H,c[7]=m*g+v*D+_*N,c[2]=y*b+x*C+E*k,c[5]=y*S+x*L+E*H,c[8]=y*g+x*D+E*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],v=t[8];return i*f*v-i*h*m-r*c*v+r*h*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],v=t[8],_=v*f-h*m,y=h*p-v*c,x=m*c-f*p,E=i*_+r*y+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=_*b,t[1]=(l*m-v*r)*b,t[2]=(h*r-l*f)*b,t[3]=y*b,t[4]=(v*i-l*p)*b,t[5]=(l*c-h*i)*b,t[6]=x*b,t[7]=(r*p-m*i)*b,t[8]=(f*i-r*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*h)+f+t,-l*m,l*p,-l*(-m*f+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Ld.makeScale(t,i)),this}rotate(t){return this.premultiply(Ld.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ld.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ld=new ge;function Zv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function nu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xx(){const s=nu("canvas");return s.style.display="block",s}const A_={};function Ns(s){s in A_||(A_[s]=!0,console.warn(s))}function Ex(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function bx(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Tx(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const R_=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),w_=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ax(){const s={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ke&&(l.r=ma(l.r),l.g=ma(l.g),l.b=ma(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ke&&(l.r=Os(l.r),l.g=Os(l.g),l.b=Os(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ya?tu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ns("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ns("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Bs]:{primaries:t,whitePoint:r,transfer:tu,toXYZ:R_,fromXYZ:w_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:r,transfer:ke,toXYZ:R_,fromXYZ:w_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),s}const Ne=Ax();function ma(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hs;class Rx{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{hs===void 0&&(hs=nu("canvas")),hs.width=t.width,hs.height=t.height;const l=hs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=hs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=nu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ma(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ma(i[r]/255)*255):i[r]=ma(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wx=0;class gp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Ka(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Nd(l[f].image)):c.push(Nd(l[f]))}else c=Nd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Nd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cx=0;const Od=new Q;class Gn extends Hs{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=wr,l=wr,c=Hi,f=Cr,h=wi,p=Gi,m=Gn.DEFAULT_ANISOTROPY,v=Ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Ka(),this.name="",this.source=new gp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Od).x}get height(){return this.source.getSize(Od).y}get depth(){return this.source.getSize(Od).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mh:t.x=t.x-Math.floor(t.x);break;case wr:t.x=t.x<0?0:1;break;case xh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mh:t.y=t.y-Math.floor(t.y);break;case wr:t.y=t.y<0?0:1;break;case xh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Fv;Gn.DEFAULT_ANISOTROPY=1;class We{constructor(t=0,i=0,r=0,l=1){We.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const p=t.elements,m=p[0],v=p[4],_=p[8],y=p[1],x=p[5],E=p[9],b=p[2],S=p[6],g=p[10];if(Math.abs(v-y)<.01&&Math.abs(_-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+y)<.1&&Math.abs(_+b)<.1&&Math.abs(E+S)<.1&&Math.abs(m+x+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,D=(x+1)/2,k=(g+1)/2,H=(v+y)/4,N=(_+b)/4,V=(E+S)/4;return L>D&&L>k?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=H/r,c=N/r):D>k?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=H/l,c=V/l):k<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),r=N/c,l=V/c),this.set(r,l,c,i),this}let C=Math.sqrt((S-E)*(S-E)+(_-b)*(_-b)+(y-v)*(y-v));return Math.abs(C)<.001&&(C=1),this.x=(S-E)/C,this.y=(_-b)/C,this.z=(y-v)/C,this.w=Math.acos((m+x+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this.z=we(this.z,t.z,i.z),this.w=we(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this.z=we(this.z,t,i),this.w=we(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dx extends Hs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new We(0,0,t,i),this.scissorTest=!1,this.viewport=new We(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Gn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new gp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends Dx{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Kv extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Di,this.minFilter=Di,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ux extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Di,this.minFilter=Di,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,bi):bi.fromBufferAttribute(c,f),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Sc.copy(r.boundingBox)),Sc.applyMatrix4(t.matrixWorld),this.union(Sc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Io),Mc.subVectors(this.max,Io),ps.subVectors(t.a,Io),ms.subVectors(t.b,Io),gs.subVectors(t.c,Io),Ga.subVectors(ms,ps),Va.subVectors(gs,ms),_r.subVectors(ps,gs);let i=[0,-Ga.z,Ga.y,0,-Va.z,Va.y,0,-_r.z,_r.y,Ga.z,0,-Ga.x,Va.z,0,-Va.x,_r.z,0,-_r.x,-Ga.y,Ga.x,0,-Va.y,Va.x,0,-_r.y,_r.x,0];return!Pd(i,ps,ms,gs,Mc)||(i=[1,0,0,0,1,0,0,0,1],!Pd(i,ps,ms,gs,Mc))?!1:(xc.crossVectors(Ga,Va),i=[xc.x,xc.y,xc.z],Pd(i,ps,ms,gs,Mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const oa=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],bi=new Q,Sc=new rl,ps=new Q,ms=new Q,gs=new Q,Ga=new Q,Va=new Q,_r=new Q,Io=new Q,Mc=new Q,xc=new Q,vr=new Q;function Pd(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){vr.fromArray(s,c);const h=l.x*Math.abs(vr.x)+l.y*Math.abs(vr.y)+l.z*Math.abs(vr.z),p=t.dot(vr),m=i.dot(vr),v=r.dot(vr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>h)return!1}return!0}const Lx=new rl,Bo=new Q,zd=new Q;class sl{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Lx.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Bo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(zd)),this.expandByPoint(Bo.copy(t.center).sub(zd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const la=new Q,Id=new Q,Ec=new Q,ka=new Q,Bd=new Q,bc=new Q,Fd=new Q;class fu{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,la)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=la.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(la.copy(this.origin).addScaledVector(this.direction,i),la.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Id.copy(t).add(i).multiplyScalar(.5),Ec.copy(i).sub(t).normalize(),ka.copy(this.origin).sub(Id);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Ec),h=ka.dot(this.direction),p=-ka.dot(Ec),m=ka.lengthSq(),v=Math.abs(1-f*f);let _,y,x,E;if(v>0)if(_=f*p-h,y=f*h-p,E=c*v,_>=0)if(y>=-E)if(y<=E){const b=1/v;_*=b,y*=b,x=_*(_+f*y+2*h)+y*(f*_+y+2*p)+m}else y=c,_=Math.max(0,-(f*y+h)),x=-_*_+y*(y+2*p)+m;else y=-c,_=Math.max(0,-(f*y+h)),x=-_*_+y*(y+2*p)+m;else y<=-E?(_=Math.max(0,-(-f*c+h)),y=_>0?-c:Math.min(Math.max(-c,-p),c),x=-_*_+y*(y+2*p)+m):y<=E?(_=0,y=Math.min(Math.max(-c,-p),c),x=y*(y+2*p)+m):(_=Math.max(0,-(f*c+h)),y=_>0?c:Math.min(Math.max(-c,-p),c),x=-_*_+y*(y+2*p)+m);else y=f>0?-c:c,_=Math.max(0,-(f*y+h)),x=-_*_+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Id).addScaledVector(Ec,y),x}intersectSphere(t,i){la.subVectors(t.center,this.origin);const r=la.dot(this.direction),l=la.dot(la)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,p=r+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,h,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,y=this.origin;return m>=0?(r=(t.min.x-y.x)*m,l=(t.max.x-y.x)*m):(r=(t.max.x-y.x)*m,l=(t.min.x-y.x)*m),v>=0?(c=(t.min.y-y.y)*v,f=(t.max.y-y.y)*v):(c=(t.max.y-y.y)*v,f=(t.min.y-y.y)*v),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-y.z)*_,p=(t.max.z-y.z)*_):(h=(t.max.z-y.z)*_,p=(t.min.z-y.z)*_),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,la)!==null}intersectTriangle(t,i,r,l,c){Bd.subVectors(i,t),bc.subVectors(r,t),Fd.crossVectors(Bd,bc);let f=this.direction.dot(Fd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;ka.subVectors(this.origin,t);const p=h*this.direction.dot(bc.crossVectors(ka,bc));if(p<0)return null;const m=h*this.direction.dot(Bd.cross(ka));if(m<0||p+m>f)return null;const v=-h*ka.dot(Fd);return v<0?null:this.at(v/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,r,l,c,f,h,p,m,v,_,y,x,E,b,S){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,h,p,m,v,_,y,x,E,b,S)}set(t,i,r,l,c,f,h,p,m,v,_,y,x,E,b,S){const g=this.elements;return g[0]=t,g[4]=i,g[8]=r,g[12]=l,g[1]=c,g[5]=f,g[9]=h,g[13]=p,g[2]=m,g[6]=v,g[10]=_,g[14]=y,g[3]=x,g[7]=E,g[11]=b,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/_s.setFromMatrixColumn(t,0).length(),c=1/_s.setFromMatrixColumn(t,1).length(),f=1/_s.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const y=f*v,x=f*_,E=h*v,b=h*_;i[0]=p*v,i[4]=-p*_,i[8]=m,i[1]=x+E*m,i[5]=y-b*m,i[9]=-h*p,i[2]=b-y*m,i[6]=E+x*m,i[10]=f*p}else if(t.order==="YXZ"){const y=p*v,x=p*_,E=m*v,b=m*_;i[0]=y+b*h,i[4]=E*h-x,i[8]=f*m,i[1]=f*_,i[5]=f*v,i[9]=-h,i[2]=x*h-E,i[6]=b+y*h,i[10]=f*p}else if(t.order==="ZXY"){const y=p*v,x=p*_,E=m*v,b=m*_;i[0]=y-b*h,i[4]=-f*_,i[8]=E+x*h,i[1]=x+E*h,i[5]=f*v,i[9]=b-y*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(t.order==="ZYX"){const y=f*v,x=f*_,E=h*v,b=h*_;i[0]=p*v,i[4]=E*m-x,i[8]=y*m+b,i[1]=p*_,i[5]=b*m+y,i[9]=x*m-E,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(t.order==="YZX"){const y=f*p,x=f*m,E=h*p,b=h*m;i[0]=p*v,i[4]=b-y*_,i[8]=E*_+x,i[1]=_,i[5]=f*v,i[9]=-h*v,i[2]=-m*v,i[6]=x*_+E,i[10]=y-b*_}else if(t.order==="XZY"){const y=f*p,x=f*m,E=h*p,b=h*m;i[0]=p*v,i[4]=-_,i[8]=m*v,i[1]=y*_+b,i[5]=f*v,i[9]=x*_-E,i[2]=E*_-x,i[6]=h*v,i[10]=b*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nx,t,Ox)}lookAt(t,i,r){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Xa.crossVectors(r,ri),Xa.lengthSq()===0&&(Math.abs(r.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Xa.crossVectors(r,ri)),Xa.normalize(),Tc.crossVectors(ri,Xa),l[0]=Xa.x,l[4]=Tc.x,l[8]=ri.x,l[1]=Xa.y,l[5]=Tc.y,l[9]=ri.y,l[2]=Xa.z,l[6]=Tc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],p=r[8],m=r[12],v=r[1],_=r[5],y=r[9],x=r[13],E=r[2],b=r[6],S=r[10],g=r[14],C=r[3],L=r[7],D=r[11],k=r[15],H=l[0],N=l[4],V=l[8],A=l[12],R=l[1],I=l[5],$=l[9],tt=l[13],lt=l[2],ut=l[6],z=l[10],q=l[14],Z=l[3],St=l[7],wt=l[11],P=l[15];return c[0]=f*H+h*R+p*lt+m*Z,c[4]=f*N+h*I+p*ut+m*St,c[8]=f*V+h*$+p*z+m*wt,c[12]=f*A+h*tt+p*q+m*P,c[1]=v*H+_*R+y*lt+x*Z,c[5]=v*N+_*I+y*ut+x*St,c[9]=v*V+_*$+y*z+x*wt,c[13]=v*A+_*tt+y*q+x*P,c[2]=E*H+b*R+S*lt+g*Z,c[6]=E*N+b*I+S*ut+g*St,c[10]=E*V+b*$+S*z+g*wt,c[14]=E*A+b*tt+S*q+g*P,c[3]=C*H+L*R+D*lt+k*Z,c[7]=C*N+L*I+D*ut+k*St,c[11]=C*V+L*$+D*z+k*wt,c[15]=C*A+L*tt+D*q+k*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],h=t[5],p=t[9],m=t[13],v=t[2],_=t[6],y=t[10],x=t[14],E=t[3],b=t[7],S=t[11],g=t[15];return E*(+c*p*_-l*m*_-c*h*y+r*m*y+l*h*x-r*p*x)+b*(+i*p*x-i*m*y+c*f*y-l*f*x+l*m*v-c*p*v)+S*(+i*m*_-i*h*x-c*f*_+r*f*x+c*h*v-r*m*v)+g*(-l*h*v-i*p*_+i*h*y+l*f*_-r*f*y+r*p*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],v=t[8],_=t[9],y=t[10],x=t[11],E=t[12],b=t[13],S=t[14],g=t[15],C=_*S*m-b*y*m+b*p*x-h*S*x-_*p*g+h*y*g,L=E*y*m-v*S*m-E*p*x+f*S*x+v*p*g-f*y*g,D=v*b*m-E*_*m+E*h*x-f*b*x-v*h*g+f*_*g,k=E*_*p-v*b*p-E*h*y+f*b*y+v*h*S-f*_*S,H=i*C+r*L+l*D+c*k;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/H;return t[0]=C*N,t[1]=(b*y*c-_*S*c-b*l*x+r*S*x+_*l*g-r*y*g)*N,t[2]=(h*S*c-b*p*c+b*l*m-r*S*m-h*l*g+r*p*g)*N,t[3]=(_*p*c-h*y*c-_*l*m+r*y*m+h*l*x-r*p*x)*N,t[4]=L*N,t[5]=(v*S*c-E*y*c+E*l*x-i*S*x-v*l*g+i*y*g)*N,t[6]=(E*p*c-f*S*c-E*l*m+i*S*m+f*l*g-i*p*g)*N,t[7]=(f*y*c-v*p*c+v*l*m-i*y*m-f*l*x+i*p*x)*N,t[8]=D*N,t[9]=(E*_*c-v*b*c-E*r*x+i*b*x+v*r*g-i*_*g)*N,t[10]=(f*b*c-E*h*c+E*r*m-i*b*m-f*r*g+i*h*g)*N,t[11]=(v*h*c-f*_*c-v*r*m+i*_*m+f*r*x-i*h*x)*N,t[12]=k*N,t[13]=(v*b*l-E*_*l+E*r*y-i*b*y-v*r*S+i*_*S)*N,t[14]=(E*h*l-f*b*l-E*r*p+i*b*p+f*r*S-i*h*S)*N,t[15]=(f*_*l-v*h*l+v*r*p-i*_*p-f*r*y+i*h*y)*N,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,h=t.y,p=t.z,m=c*f,v=c*h;return this.set(m*f+r,m*h-l*p,m*p+l*h,0,m*h+l*p,v*h+r,v*p-l*f,0,m*p-l*h,v*p+l*f,c*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,p=i._w,m=c+c,v=f+f,_=h+h,y=c*m,x=c*v,E=c*_,b=f*v,S=f*_,g=h*_,C=p*m,L=p*v,D=p*_,k=r.x,H=r.y,N=r.z;return l[0]=(1-(b+g))*k,l[1]=(x+D)*k,l[2]=(E-L)*k,l[3]=0,l[4]=(x-D)*H,l[5]=(1-(y+g))*H,l[6]=(S+C)*H,l[7]=0,l[8]=(E+L)*N,l[9]=(S-C)*N,l[10]=(1-(y+b))*N,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=_s.set(l[0],l[1],l[2]).length();const f=_s.set(l[4],l[5],l[6]).length(),h=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ti.copy(this);const m=1/c,v=1/f,_=1/h;return Ti.elements[0]*=m,Ti.elements[1]*=m,Ti.elements[2]*=m,Ti.elements[4]*=v,Ti.elements[5]*=v,Ti.elements[6]*=v,Ti.elements[8]*=_,Ti.elements[9]*=_,Ti.elements[10]*=_,i.setFromRotationMatrix(Ti),r.x=c,r.y=f,r.z=h,this}makePerspective(t,i,r,l,c,f,h=pa){const p=this.elements,m=2*c/(i-t),v=2*c/(r-l),_=(i+t)/(i-t),y=(r+l)/(r-l);let x,E;if(h===pa)x=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===eu)x=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=x,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,f,h=pa){const p=this.elements,m=1/(i-t),v=1/(r-l),_=1/(f-c),y=(i+t)*m,x=(r+l)*v;let E,b;if(h===pa)E=(f+c)*_,b=-2*_;else if(h===eu)E=c*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-x,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const _s=new Q,Ti=new je,Nx=new Q(0,0,0),Ox=new Q(1,1,1),Xa=new Q,Tc=new Q,ri=new Q,C_=new je,D_=new al;class Vi{constructor(t=0,i=0,r=0,l=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],p=l[1],m=l[5],v=l[9],_=l[2],y=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-we(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(we(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-we(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(we(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-we(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return C_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(C_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return D_.setFromEuler(this),this.setFromQuaternion(D_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class _p{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Px=0;const U_=new Q,vs=new al,ca=new je,Ac=new Q,Fo=new Q,zx=new Q,Ix=new al,L_=new Q(1,0,0),N_=new Q(0,1,0),O_=new Q(0,0,1),P_={type:"added"},Bx={type:"removed"},ys={type:"childadded",child:null},Hd={type:"childremoved",child:null};class pn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=Ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const t=new Q,i=new Vi,r=new al,l=new Q(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new ge}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _p,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return vs.setFromAxisAngle(t,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,i){return vs.setFromAxisAngle(t,i),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(L_,t)}rotateY(t){return this.rotateOnAxis(N_,t)}rotateZ(t){return this.rotateOnAxis(O_,t)}translateOnAxis(t,i){return U_.copy(t).applyQuaternion(this.quaternion),this.position.add(U_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(L_,t)}translateY(t){return this.translateOnAxis(N_,t)}translateZ(t){return this.translateOnAxis(O_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Ac.copy(t):Ac.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(Fo,Ac,this.up):ca.lookAt(Ac,Fo,this.up),this.quaternion.setFromRotationMatrix(ca),l&&(ca.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(ca),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(P_),ys.child=t,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Bx),Hd.child=t,this.dispatchEvent(Hd),Hd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ca.multiply(t.parent.matrixWorld)),t.applyMatrix4(ca),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(P_),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,zx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,Ix,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(t.animations,p))}}if(i){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),v=f(t.images),_=f(t.shapes),y=f(t.skeletons),x=f(t.animations),E=f(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const p=[];for(const m in h){const v=h[m];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}pn.DEFAULT_UP=new Q(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new Q,ua=new Q,Gd=new Q,fa=new Q,Ss=new Q,Ms=new Q,z_=new Q,Vd=new Q,kd=new Q,Xd=new Q,Wd=new We,qd=new We,Yd=new We;class _i{constructor(t=new Q,i=new Q,r=new Q){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ai.subVectors(t,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ai.subVectors(l,i),ua.subVectors(r,i),Gd.subVectors(t,i);const f=Ai.dot(Ai),h=Ai.dot(ua),p=Ai.dot(Gd),m=ua.dot(ua),v=ua.dot(Gd),_=f*m-h*h;if(_===0)return c.set(0,0,0),null;const y=1/_,x=(m*p-h*v)*y,E=(f*v-h*p)*y;return c.set(1-x-E,E,x)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(t,i,r,l,c,f,h,p){return this.getBarycoord(t,i,r,l,fa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,fa.x),p.addScaledVector(f,fa.y),p.addScaledVector(h,fa.z),p)}static getInterpolatedAttribute(t,i,r,l,c,f){return Wd.setScalar(0),qd.setScalar(0),Yd.setScalar(0),Wd.fromBufferAttribute(t,i),qd.fromBufferAttribute(t,r),Yd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Wd,c.x),f.addScaledVector(qd,c.y),f.addScaledVector(Yd,c.z),f}static isFrontFacing(t,i,r,l){return Ai.subVectors(r,i),ua.subVectors(t,i),Ai.cross(ua).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),Ai.cross(ua).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return _i.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,h;Ss.subVectors(l,r),Ms.subVectors(c,r),Vd.subVectors(t,r);const p=Ss.dot(Vd),m=Ms.dot(Vd);if(p<=0&&m<=0)return i.copy(r);kd.subVectors(t,l);const v=Ss.dot(kd),_=Ms.dot(kd);if(v>=0&&_<=v)return i.copy(l);const y=p*_-v*m;if(y<=0&&p>=0&&v<=0)return f=p/(p-v),i.copy(r).addScaledVector(Ss,f);Xd.subVectors(t,c);const x=Ss.dot(Xd),E=Ms.dot(Xd);if(E>=0&&x<=E)return i.copy(c);const b=x*m-p*E;if(b<=0&&m>=0&&E<=0)return h=m/(m-E),i.copy(r).addScaledVector(Ms,h);const S=v*E-x*_;if(S<=0&&_-v>=0&&x-E>=0)return z_.subVectors(c,l),h=(_-v)/(_-v+(x-E)),i.copy(l).addScaledVector(z_,h);const g=1/(S+b+y);return f=b*g,h=y*g,i.copy(r).addScaledVector(Ss,f).addScaledVector(Ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wa={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function jd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class xe{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ne.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ne.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ne.workingColorSpace){if(t=Mx(t,1),i=we(i,0,1),r=we(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=jd(f,c,t+1/3),this.g=jd(f,c,t),this.b=jd(f,c,t-1/3)}return Ne.colorSpaceToWorking(this,l),this}setStyle(t,i=oi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=oi){const r=Qv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ma(t.r),this.g=ma(t.g),this.b=ma(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return Ne.workingToColorSpace(Pn.copy(this),t),Math.round(we(Pn.r*255,0,255))*65536+Math.round(we(Pn.g*255,0,255))*256+Math.round(we(Pn.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ne.workingColorSpace){Ne.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,c=Pn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let p,m;const v=(h+f)/2;if(h===f)p=0,m=0;else{const _=f-h;switch(m=v<=.5?_/(f+h):_/(2-f-h),f){case r:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-r)/_+2;break;case c:p=(r-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=v,t}getRGB(t,i=Ne.workingColorSpace){return Ne.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=oi){Ne.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,r=Pn.g,l=Pn.b;return t!==oi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Wa),this.setHSL(Wa.h+t,Wa.s+i,Wa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Wa),t.getHSL(Rc);const r=Dd(Wa.h,Rc.h,i),l=Dd(Wa.s,Rc.s,i),c=Dd(Wa.l,Rc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new xe;xe.NAMES=Qv;let Fx=0;class _a extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=Ka(),this.name="",this.type="Material",this.blending=Ls,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=fh,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(r.blending=this.blending),this.side!==Qa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==uh&&(r.blendSrc=this.blendSrc),this.blendDst!==fh&&(r.blendDst=this.blendDst),this.blendEquation!==Tr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==E_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ar extends _a{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new Q,wc=new de;let Hx=0;class Vn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hx++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Zh,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)wc.fromBufferAttribute(this,i),wc.applyMatrix3(t),this.setXY(i,wc.x,wc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Fi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Xe(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Fi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Fi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Fi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Fi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array),c=Xe(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zh&&(t.usage=this.usage),t}}class Jv extends Vn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class $v extends Vn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Cn extends Vn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let Gx=0;const gi=new je,Zd=new pn,xs=new Q,si=new rl,Ho=new rl,Mn=new Q;class Dn extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=Ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zv(t)?$v:Jv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ge().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,r){return gi.makeTranslation(t,i,r),this.applyMatrix4(gi),this}scale(t,i,r){return gi.makeScale(t,i,r),this.applyMatrix4(gi),this}lookAt(t){return Zd.lookAt(t),Zd.updateMatrix(),this.applyMatrix4(Zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Cn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];si.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const r=this.boundingSphere.center;if(si.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Ho.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(si.min,Ho.min),si.expandByPoint(Mn),Mn.addVectors(si.max,Ho.max),si.expandByPoint(Mn)):(si.expandByPoint(Ho.min),si.expandByPoint(Ho.max))}si.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)Mn.fromBufferAttribute(h,m),p&&(xs.fromBufferAttribute(t,m),Mn.add(xs)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let V=0;V<r.count;V++)h[V]=new Q,p[V]=new Q;const m=new Q,v=new Q,_=new Q,y=new de,x=new de,E=new de,b=new Q,S=new Q;function g(V,A,R){m.fromBufferAttribute(r,V),v.fromBufferAttribute(r,A),_.fromBufferAttribute(r,R),y.fromBufferAttribute(c,V),x.fromBufferAttribute(c,A),E.fromBufferAttribute(c,R),v.sub(m),_.sub(m),x.sub(y),E.sub(y);const I=1/(x.x*E.y-E.x*x.y);isFinite(I)&&(b.copy(v).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(I),S.copy(_).multiplyScalar(x.x).addScaledVector(v,-E.x).multiplyScalar(I),h[V].add(b),h[A].add(b),h[R].add(b),p[V].add(S),p[A].add(S),p[R].add(S))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let V=0,A=C.length;V<A;++V){const R=C[V],I=R.start,$=R.count;for(let tt=I,lt=I+$;tt<lt;tt+=3)g(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const L=new Q,D=new Q,k=new Q,H=new Q;function N(V){k.fromBufferAttribute(l,V),H.copy(k);const A=h[V];L.copy(A),L.sub(k.multiplyScalar(k.dot(A))).normalize(),D.crossVectors(H,A);const I=D.dot(p[V])<0?-1:1;f.setXYZW(V,L.x,L.y,L.z,I)}for(let V=0,A=C.length;V<A;++V){const R=C[V],I=R.start,$=R.count;for(let tt=I,lt=I+$;tt<lt;tt+=3)N(t.getX(tt+0)),N(t.getX(tt+1)),N(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Vn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,x=r.count;y<x;y++)r.setXYZ(y,0,0,0);const l=new Q,c=new Q,f=new Q,h=new Q,p=new Q,m=new Q,v=new Q,_=new Q;if(t)for(let y=0,x=t.count;y<x;y+=3){const E=t.getX(y+0),b=t.getX(y+1),S=t.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,S),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,S),h.add(v),p.add(v),m.add(v),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,x=i.count;y<x;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(h,p){const m=h.array,v=h.itemSize,_=h.normalized,y=new m.constructor(p.length*v);let x=0,E=0;for(let b=0,S=p.length;b<S;b++){h.isInterleavedBufferAttribute?x=p[b]*h.data.stride+h.offset:x=p[b]*v;for(let g=0;g<v;g++)y[E++]=m[x++]}return new Vn(y,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Dn,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,r);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let v=0,_=m.length;v<_;v++){const y=m[v],x=t(y,r);p.push(x)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,y=m.length;_<y;_++){const x=m[_];v.push(x.toJSON(t.data))}v.length>0&&(l[p]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const c=t.morphAttributes;for(const m in c){const v=[],_=c[m];for(let y=0,x=_.length;y<x;y++)v.push(_[y].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,v=f.length;m<v;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const I_=new je,yr=new fu,Cc=new sl,B_=new Q,Dc=new Q,Uc=new Q,Lc=new Q,Kd=new Q,Nc=new Q,F_=new Q,Oc=new Q;class hn extends pn{constructor(t=new Dn,i=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Nc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=h[p],_=c[p];v!==0&&(Kd.fromBufferAttribute(_,t),f?Nc.addScaledVector(Kd,v):Nc.addScaledVector(Kd.sub(i),v))}i.add(Nc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Cc.copy(r.boundingSphere),Cc.applyMatrix4(c),yr.copy(t.ray).recast(t.near),!(Cc.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Cc,B_)===null||yr.origin.distanceToSquared(B_)>(t.far-t.near)**2))&&(I_.copy(c).invert(),yr.copy(t.ray).applyMatrix4(I_),!(r.boundingBox!==null&&yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,yr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,y=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,b=y.length;E<b;E++){const S=y[E],g=f[S.materialIndex],C=Math.max(S.start,x.start),L=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let D=C,k=L;D<k;D+=3){const H=h.getX(D),N=h.getX(D+1),V=h.getX(D+2);l=Pc(this,g,t,r,m,v,_,H,N,V),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),b=Math.min(h.count,x.start+x.count);for(let S=E,g=b;S<g;S+=3){const C=h.getX(S),L=h.getX(S+1),D=h.getX(S+2);l=Pc(this,f,t,r,m,v,_,C,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,b=y.length;E<b;E++){const S=y[E],g=f[S.materialIndex],C=Math.max(S.start,x.start),L=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let D=C,k=L;D<k;D+=3){const H=D,N=D+1,V=D+2;l=Pc(this,g,t,r,m,v,_,H,N,V),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),b=Math.min(p.count,x.start+x.count);for(let S=E,g=b;S<g;S+=3){const C=S,L=S+1,D=S+2;l=Pc(this,f,t,r,m,v,_,C,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function Vx(s,t,i,r,l,c,f,h){let p;if(t.side===Qn?p=r.intersectTriangle(f,c,l,!0,h):p=r.intersectTriangle(l,c,f,t.side===Qa,h),p===null)return null;Oc.copy(h),Oc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(Oc);return m<i.near||m>i.far?null:{distance:m,point:Oc.clone(),object:s}}function Pc(s,t,i,r,l,c,f,h,p,m){s.getVertexPosition(h,Dc),s.getVertexPosition(p,Uc),s.getVertexPosition(m,Lc);const v=Vx(s,t,i,r,Dc,Uc,Lc,F_);if(v){const _=new Q;_i.getBarycoord(F_,Dc,Uc,Lc,_),l&&(v.uv=_i.getInterpolatedAttribute(l,h,p,m,_,new de)),c&&(v.uv1=_i.getInterpolatedAttribute(c,h,p,m,_,new de)),f&&(v.normal=_i.getInterpolatedAttribute(f,h,p,m,_,new Q),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:h,b:p,c:m,normal:new Q,materialIndex:0};_i.getNormal(Dc,Uc,Lc,y.normal),v.face=y,v.barycoord=_}return v}class Gs extends Dn{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],v=[],_=[];let y=0,x=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new Cn(m,3)),this.setAttribute("normal",new Cn(v,3)),this.setAttribute("uv",new Cn(_,2));function E(b,S,g,C,L,D,k,H,N,V,A){const R=D/N,I=k/V,$=D/2,tt=k/2,lt=H/2,ut=N+1,z=V+1;let q=0,Z=0;const St=new Q;for(let wt=0;wt<z;wt++){const P=wt*I-tt;for(let et=0;et<ut;et++){const Mt=et*R-$;St[b]=Mt*C,St[S]=P*L,St[g]=lt,m.push(St.x,St.y,St.z),St[b]=0,St[S]=0,St[g]=H>0?1:-1,v.push(St.x,St.y,St.z),_.push(et/N),_.push(1-wt/V),q+=1}}for(let wt=0;wt<V;wt++)for(let P=0;P<N;P++){const et=y+P+ut*wt,Mt=y+P+ut*(wt+1),j=y+(P+1)+ut*(wt+1),ft=y+(P+1)+ut*wt;p.push(et,Mt,ft),p.push(Mt,j,ft),Z+=6}h.addGroup(x,Z,A),x+=Z,y+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Hn(s){const t={};for(let i=0;i<s.length;i++){const r=Fs(s[i]);for(const l in r)t[l]=r[l]}return t}function kx(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function ty(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}const Xx={clone:Fs,merge:Hn};var Wx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ga extends _a{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wx,this.fragmentShader=qx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=kx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class vp extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=pa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qa=new Q,H_=new de,G_=new de;class Kn extends vp{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Kh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kh*2*Math.atan(Math.tan(Cd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qa.x,qa.y).multiplyScalar(-t/qa.z),qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(qa.x,qa.y).multiplyScalar(-t/qa.z)}getViewSize(t,i){return this.getViewBounds(t,H_,G_),i.subVectors(G_,H_)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Cd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*r/m,l*=f.width/p,r*=f.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,bs=1;class Yx extends pn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Kn(Es,bs,t,i);l.layers=this.layers,this.add(l);const c=new Kn(Es,bs,t,i);c.layers=this.layers,this.add(c);const f=new Kn(Es,bs,t,i);f.layers=this.layers,this.add(f);const h=new Kn(Es,bs,t,i);h.layers=this.layers,this.add(h);const p=new Kn(Es,bs,t,i);p.layers=this.layers,this.add(p);const m=new Kn(Es,bs,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,p]=i;for(const m of i)this.remove(m);if(t===pa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===eu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,v]=this.children,_=t.getRenderTarget(),y=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=b,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(_,y,x),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class ey extends Gn{constructor(t=[],i=zs,r,l,c,f,h,p,m,v){super(t,i,r,l,c,f,h,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jx extends Ur{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new ey(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Gs(5,5,5),c=new ga({name:"CubemapFromEquirect",uniforms:Fs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qn,blending:ja});c.uniforms.tEquirect.value=i;const f=new hn(l,c),h=i.minFilter;return i.minFilter===Cr&&(i.minFilter=Hi),new Yx(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class Ri extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zx={type:"move"};class Qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const b of t.hand.values()){const S=i.getJointPose(b,r),g=this._getHandJoint(m,b);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],y=v.position.distanceTo(_.position),x=.02,E=.005;m.inputState.pinching&&y>x+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=x-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Zx)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Ri;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Qh extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Kx{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Zh,this.updateRanges=[],this.version=0,this.uuid=Ka()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ka()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ka()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new Q;class iu{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.applyMatrix4(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.applyNormalMatrix(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.transformDirection(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Fi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Xe(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Fi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Fi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Fi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Fi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array),c=Xe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Vn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new iu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Jh extends _a{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ts;const Go=new Q,As=new Q,Rs=new Q,ws=new de,Vo=new de,ny=new je,zc=new Q,ko=new Q,Ic=new Q,V_=new de,Jd=new de,k_=new de;class X_ extends pn{constructor(t=new Jh){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new Dn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new Kx(i,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new iu(r,3,0,!1)),Ts.setAttribute("uv",new iu(r,2,3,!1))}this.geometry=Ts,this.material=t,this.center=new de(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),ny.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Rs.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const f=this.center;Bc(zc.set(-.5,-.5,0),Rs,f,As,l,c),Bc(ko.set(.5,-.5,0),Rs,f,As,l,c),Bc(Ic.set(.5,.5,0),Rs,f,As,l,c),V_.set(0,0),Jd.set(1,0),k_.set(1,1);let h=t.ray.intersectTriangle(zc,ko,Ic,!1,Go);if(h===null&&(Bc(ko.set(-.5,.5,0),Rs,f,As,l,c),Jd.set(0,1),h=t.ray.intersectTriangle(zc,Ic,ko,!1,Go),h===null))return;const p=t.ray.origin.distanceTo(Go);p<t.near||p>t.far||i.push({distance:p,point:Go.clone(),uv:_i.getInterpolation(Go,zc,ko,Ic,V_,Jd,k_,new de),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Bc(s,t,i,r,l,c){ws.subVectors(s,i).addScalar(.5).multiply(r),l!==void 0?(Vo.x=c*ws.x-l*ws.y,Vo.y=l*ws.x+c*ws.y):Vo.copy(ws),s.copy(t),s.x+=Vo.x,s.y+=Vo.y,s.applyMatrix4(ny)}const $d=new Q,Qx=new Q,Jx=new ge;class Er{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=$d.subVectors(r,i).cross(Qx.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta($d),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Jx.getNormalMatrix(t),l=this.coplanarPoint($d).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new sl,$x=new de(.5,.5),Fc=new Q;class yp{constructor(t=new Er,i=new Er,r=new Er,l=new Er,c=new Er,f=new Er){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=pa){const r=this.planes,l=t.elements,c=l[0],f=l[1],h=l[2],p=l[3],m=l[4],v=l[5],_=l[6],y=l[7],x=l[8],E=l[9],b=l[10],S=l[11],g=l[12],C=l[13],L=l[14],D=l[15];if(r[0].setComponents(p-c,y-m,S-x,D-g).normalize(),r[1].setComponents(p+c,y+m,S+x,D+g).normalize(),r[2].setComponents(p+f,y+v,S+E,D+C).normalize(),r[3].setComponents(p-f,y-v,S-E,D-C).normalize(),r[4].setComponents(p-h,y-_,S-b,D-L).normalize(),i===pa)r[5].setComponents(p+h,y+_,S+b,D+L).normalize();else if(i===eu)r[5].setComponents(h,_,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Sr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(t){Sr.center.set(0,0,0);const i=$x.distanceTo(t.center);return Sr.radius=.7071067811865476+i,Sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Fc.x=l.normal.x>0?t.max.x:t.min.x,Fc.y=l.normal.y>0?t.max.y:t.min.y,Fc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sp extends _a{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const au=new Q,ru=new Q,W_=new je,Xo=new fu,Hc=new sl,th=new Q,q_=new Q;class iy extends pn{constructor(t=new Dn,i=new Sp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)au.fromBufferAttribute(i,l-1),ru.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=au.distanceTo(ru);t.setAttribute("lineDistance",new Cn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Hc.copy(r.boundingSphere),Hc.applyMatrix4(l),Hc.radius+=c,t.ray.intersectsSphere(Hc)===!1)return;W_.copy(l).invert(),Xo.copy(t.ray).applyMatrix4(W_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,v=r.index,y=r.attributes.position;if(v!==null){const x=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let b=x,S=E-1;b<S;b+=m){const g=v.getX(b),C=v.getX(b+1),L=Gc(this,t,Xo,p,g,C,b);L&&i.push(L)}if(this.isLineLoop){const b=v.getX(E-1),S=v.getX(x),g=Gc(this,t,Xo,p,b,S,E-1);g&&i.push(g)}}else{const x=Math.max(0,f.start),E=Math.min(y.count,f.start+f.count);for(let b=x,S=E-1;b<S;b+=m){const g=Gc(this,t,Xo,p,b,b+1,b);g&&i.push(g)}if(this.isLineLoop){const b=Gc(this,t,Xo,p,E-1,x,E-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Gc(s,t,i,r,l,c,f){const h=s.geometry.attributes.position;if(au.fromBufferAttribute(h,l),ru.fromBufferAttribute(h,c),i.distanceSqToSegment(au,ru,th,q_)>r)return;th.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(th);if(!(m<t.near||m>t.far))return{distance:m,point:q_.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}class Mp extends _a{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Y_=new je,$h=new fu,Vc=new sl,kc=new Q;class ay extends pn{constructor(t=new Dn,i=new Mp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Vc.copy(r.boundingSphere),Vc.applyMatrix4(l),Vc.radius+=c,t.ray.intersectsSphere(Vc)===!1)return;Y_.copy(l).invert(),$h.copy(t.ray).applyMatrix4(Y_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=r.index,_=r.attributes.position;if(m!==null){const y=Math.max(0,f.start),x=Math.min(m.count,f.start+f.count);for(let E=y,b=x;E<b;E++){const S=m.getX(E);kc.fromBufferAttribute(_,S),j_(kc,S,p,l,t,i,this)}}else{const y=Math.max(0,f.start),x=Math.min(_.count,f.start+f.count);for(let E=y,b=x;E<b;E++)kc.fromBufferAttribute(_,E),j_(kc,E,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function j_(s,t,i,r,l,c,f){const h=$h.distanceSqToPoint(s);if(h<i){const p=new Q;$h.closestPointToPoint(s,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class tE extends Gn{constructor(t,i,r,l,c,f,h,p,m){super(t,i,r,l,c,f,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ry extends Gn{constructor(t,i,r=Dr,l,c,f,h=Di,p=Di,m,v=Qo,_=1){if(v!==Qo&&v!==Jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:_};super(y,l,c,f,h,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class $o extends Dn{constructor(t=1,i=1,r=1,l=32,c=1,f=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const v=[],_=[],y=[],x=[];let E=0;const b=[],S=r/2;let g=0;C(),f===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new Cn(_,3)),this.setAttribute("normal",new Cn(y,3)),this.setAttribute("uv",new Cn(x,2));function C(){const D=new Q,k=new Q;let H=0;const N=(i-t)/r;for(let V=0;V<=c;V++){const A=[],R=V/c,I=R*(i-t)+t;for(let $=0;$<=l;$++){const tt=$/l,lt=tt*p+h,ut=Math.sin(lt),z=Math.cos(lt);k.x=I*ut,k.y=-R*r+S,k.z=I*z,_.push(k.x,k.y,k.z),D.set(ut,N,z).normalize(),y.push(D.x,D.y,D.z),x.push(tt,1-R),A.push(E++)}b.push(A)}for(let V=0;V<l;V++)for(let A=0;A<c;A++){const R=b[A][V],I=b[A+1][V],$=b[A+1][V+1],tt=b[A][V+1];(t>0||A!==0)&&(v.push(R,I,tt),H+=3),(i>0||A!==c-1)&&(v.push(I,$,tt),H+=3)}m.addGroup(g,H,0),g+=H}function L(D){const k=E,H=new de,N=new Q;let V=0;const A=D===!0?t:i,R=D===!0?1:-1;for(let $=1;$<=l;$++)_.push(0,S*R,0),y.push(0,R,0),x.push(.5,.5),E++;const I=E;for(let $=0;$<=l;$++){const lt=$/l*p+h,ut=Math.cos(lt),z=Math.sin(lt);N.x=A*z,N.y=S*R,N.z=A*ut,_.push(N.x,N.y,N.z),y.push(0,R,0),H.x=ut*.5+.5,H.y=z*.5*R+.5,x.push(H.x,H.y),E++}for(let $=0;$<l;$++){const tt=k+$,lt=I+$;D===!0?v.push(lt,lt+1,tt):v.push(lt+1,lt,tt),V+=3}m.addGroup(g,V,D===!0?1:2),g+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class su extends $o{constructor(t=1,i=1,r=32,l=1,c=!1,f=0,h=Math.PI*2){super(0,t,i,r,l,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new su(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ol extends Dn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,v=p+1,_=t/h,y=i/p,x=[],E=[],b=[],S=[];for(let g=0;g<v;g++){const C=g*y-f;for(let L=0;L<m;L++){const D=L*_-c;E.push(D,-C,0),b.push(0,0,1),S.push(L/h),S.push(1-g/p)}}for(let g=0;g<p;g++)for(let C=0;C<h;C++){const L=C+m*g,D=C+m*(g+1),k=C+1+m*(g+1),H=C+1+m*g;x.push(L,D,H),x.push(D,k,H)}this.setIndex(x),this.setAttribute("position",new Cn(E,3)),this.setAttribute("normal",new Cn(b,3)),this.setAttribute("uv",new Cn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.width,t.height,t.widthSegments,t.heightSegments)}}class xp extends Dn{constructor(t=.5,i=1,r=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:f},r=Math.max(3,r),l=Math.max(1,l);const h=[],p=[],m=[],v=[];let _=t;const y=(i-t)/l,x=new Q,E=new de;for(let b=0;b<=l;b++){for(let S=0;S<=r;S++){const g=c+S/r*f;x.x=_*Math.cos(g),x.y=_*Math.sin(g),p.push(x.x,x.y,x.z),m.push(0,0,1),E.x=(x.x/i+1)/2,E.y=(x.y/i+1)/2,v.push(E.x,E.y)}_+=y}for(let b=0;b<l;b++){const S=b*(r+1);for(let g=0;g<r;g++){const C=g+S,L=C,D=C+r+1,k=C+r+2,H=C+1;h.push(L,D,H),h.push(D,k,H)}}this.setIndex(h),this.setAttribute("position",new Cn(p,3)),this.setAttribute("normal",new Cn(m,3)),this.setAttribute("uv",new Cn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xp(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ds extends Dn{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(f+h,Math.PI);let m=0;const v=[],_=new Q,y=new Q,x=[],E=[],b=[],S=[];for(let g=0;g<=r;g++){const C=[],L=g/r;let D=0;g===0&&f===0?D=.5/i:g===r&&p===Math.PI&&(D=-.5/i);for(let k=0;k<=i;k++){const H=k/i;_.x=-t*Math.cos(l+H*c)*Math.sin(f+L*h),_.y=t*Math.cos(f+L*h),_.z=t*Math.sin(l+H*c)*Math.sin(f+L*h),E.push(_.x,_.y,_.z),y.copy(_).normalize(),b.push(y.x,y.y,y.z),S.push(H+D,1-L),C.push(m++)}v.push(C)}for(let g=0;g<r;g++)for(let C=0;C<i;C++){const L=v[g][C+1],D=v[g][C],k=v[g+1][C],H=v[g+1][C+1];(g!==0||f>0)&&x.push(L,D,H),(g!==r-1||p<Math.PI)&&x.push(D,k,H)}this.setIndex(x),this.setAttribute("position",new Cn(E,3)),this.setAttribute("normal",new Cn(b,3)),this.setAttribute("uv",new Cn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class eE extends _a{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mp,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nE extends _a{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mp,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class iE extends _a{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class aE extends _a{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class du extends pn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class rE extends du{constructor(t,i,r){super(t,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const eh=new je,Z_=new Q,K_=new Q;class sy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Gi,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yp,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;Z_.setFromMatrixPosition(t.matrixWorld),i.position.copy(Z_),K_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(K_),i.updateMatrixWorld(),eh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(eh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Q_=new je,Wo=new Q,nh=new Q;class sE extends sy{constructor(){super(new Kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,c=t.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Wo.setFromMatrixPosition(t.matrixWorld),r.position.copy(Wo),nh.copy(r.position),nh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(nh),r.updateMatrixWorld(),l.makeTranslation(-Wo.x,-Wo.y,-Wo.z),Q_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Q_)}}class tp extends du{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new sE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class oy extends vp{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class oE extends sy{constructor(){super(new oy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ly extends du{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new oE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lE extends du{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class cE extends Kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class cy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const J_=new je;class uE{constructor(t,i,r=0,l=1/0){this.ray=new fu(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new _p,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return J_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(J_),this}intersectObject(t,i=!0,r=[]){return ep(t,this,r,i),r.sort($_),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)ep(t[l],this,r,i);return r.sort($_),r}}function $_(s,t){return s.distance-t.distance}function ep(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let f=0,h=c.length;f<h;f++)ep(c[f],t,i,!0)}}function tv(s,t,i,r){const l=fE(r);switch(i){case kv:return s*t;case Wv:return s*t/l.components*l.byteLength;case dp:return s*t/l.components*l.byteLength;case qv:return s*t*2/l.components*l.byteLength;case hp:return s*t*2/l.components*l.byteLength;case Xv:return s*t*3/l.components*l.byteLength;case wi:return s*t*4/l.components*l.byteLength;case pp:return s*t*4/l.components*l.byteLength;case Yc:case jc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zc:case Kc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bh:case Ah:return Math.max(s,16)*Math.max(t,8)/4;case Eh:case Th:return Math.max(s,8)*Math.max(t,8)/2;case Rh:case wh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ch:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Uh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Lh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Nh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Oh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ph:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case zh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ih:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Bh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Hh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Gh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Vh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case kh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Qc:case Xh:case Wh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Yv:case qh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Yh:case jh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function fE(s){switch(s){case Gi:case Hv:return{byteLength:1,components:1};case Zo:case Gv:case il:return{byteLength:2,components:1};case up:case fp:return{byteLength:2,components:4};case Dr:case cp:case ha:return{byteLength:4,components:1};case Vv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:op}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=op);function uy(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function dE(s){const t=new WeakMap;function i(h,p){const m=h.array,v=h.usage,_=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,v),h.onUploadCallback();let x;if(m instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)x=s.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=s.SHORT;else if(m instanceof Uint32Array)x=s.UNSIGNED_INT;else if(m instanceof Int32Array)x=s.INT;else if(m instanceof Int8Array)x=s.BYTE;else if(m instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,p,m){const v=p.array,_=p.updateRanges;if(s.bindBuffer(m,h),_.length===0)s.bufferSubData(m,0,v);else{_.sort((x,E)=>x.start-E.start);let y=0;for(let x=1;x<_.length;x++){const E=_[y],b=_[x];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++y,_[y]=b)}_.length=y+1;for(let x=0,E=_.length;x<E;x++){const b=_[x];s.bufferSubData(m,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:f}}var hE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pE=`#ifdef USE_ALPHAHASH
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
#endif`,mE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yE=`#ifdef USE_AOMAP
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
#endif`,SE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ME=`#ifdef USE_BATCHING
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
#endif`,xE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AE=`#ifdef USE_IRIDESCENCE
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
#endif`,RE=`#ifdef USE_BUMPMAP
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
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zE=`#define PI 3.141592653589793
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
} // validated`,IE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BE=`vec3 transformedNormal = objectNormal;
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
#endif`,FE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kE="gl_FragColor = linearToOutputTexel( gl_FragColor );",XE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WE=`#ifdef USE_ENVMAP
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
#endif`,qE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YE=`#ifdef USE_ENVMAP
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
#endif`,jE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZE=`#ifdef USE_ENVMAP
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
#endif`,KE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$E=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t1=`#ifdef USE_GRADIENTMAP
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
}`,e1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a1=`uniform bool receiveShadow;
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
#endif`,r1=`#ifdef USE_ENVMAP
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
#endif`,s1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u1=`PhysicalMaterial material;
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
#endif`,f1=`struct PhysicalMaterial {
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
}`,d1=`
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
#endif`,h1=`#if defined( RE_IndirectDiffuse )
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
#endif`,p1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x1=`#if defined( USE_POINTS_UV )
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
#endif`,E1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
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
#endif`,C1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P1=`#ifdef USE_NORMALMAP
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
#endif`,z1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,V1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Q1=`float getShadowMask() {
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
}`,J1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$1=`#ifdef USE_SKINNING
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
#endif`,tb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eb=`#ifdef USE_SKINNING
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
#endif`,nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ab=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sb=`#ifdef USE_TRANSMISSION
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
#endif`,ob=`#ifdef USE_TRANSMISSION
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const db=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hb=`uniform sampler2D t2D;
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
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`#include <common>
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
}`,yb=`#if DEPTH_PACKING == 3200
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
}`,Sb=`#define DISTANCE
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
}`,Mb=`#define DISTANCE
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
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`uniform float scale;
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
}`,Tb=`uniform vec3 diffuse;
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
}`,Ab=`#include <common>
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
}`,Rb=`uniform vec3 diffuse;
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
}`,wb=`#define LAMBERT
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
}`,Cb=`#define LAMBERT
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
}`,Db=`#define MATCAP
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
}`,Ub=`#define MATCAP
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
}`,Lb=`#define NORMAL
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
}`,Nb=`#define NORMAL
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
}`,Ob=`#define PHONG
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
}`,Pb=`#define PHONG
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
}`,zb=`#define STANDARD
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
}`,Ib=`#define STANDARD
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
}`,Bb=`#define TOON
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
}`,Fb=`#define TOON
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
}`,Hb=`uniform float size;
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
}`,Gb=`uniform vec3 diffuse;
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
}`,Vb=`#include <common>
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
}`,kb=`uniform vec3 color;
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
}`,Xb=`uniform float rotation;
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
}`,Wb=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:hE,alphahash_pars_fragment:pE,alphamap_fragment:mE,alphamap_pars_fragment:gE,alphatest_fragment:_E,alphatest_pars_fragment:vE,aomap_fragment:yE,aomap_pars_fragment:SE,batching_pars_vertex:ME,batching_vertex:xE,begin_vertex:EE,beginnormal_vertex:bE,bsdfs:TE,iridescence_fragment:AE,bumpmap_pars_fragment:RE,clipping_planes_fragment:wE,clipping_planes_pars_fragment:CE,clipping_planes_pars_vertex:DE,clipping_planes_vertex:UE,color_fragment:LE,color_pars_fragment:NE,color_pars_vertex:OE,color_vertex:PE,common:zE,cube_uv_reflection_fragment:IE,defaultnormal_vertex:BE,displacementmap_pars_vertex:FE,displacementmap_vertex:HE,emissivemap_fragment:GE,emissivemap_pars_fragment:VE,colorspace_fragment:kE,colorspace_pars_fragment:XE,envmap_fragment:WE,envmap_common_pars_fragment:qE,envmap_pars_fragment:YE,envmap_pars_vertex:jE,envmap_physical_pars_fragment:r1,envmap_vertex:ZE,fog_vertex:KE,fog_pars_vertex:QE,fog_fragment:JE,fog_pars_fragment:$E,gradientmap_pars_fragment:t1,lightmap_pars_fragment:e1,lights_lambert_fragment:n1,lights_lambert_pars_fragment:i1,lights_pars_begin:a1,lights_toon_fragment:s1,lights_toon_pars_fragment:o1,lights_phong_fragment:l1,lights_phong_pars_fragment:c1,lights_physical_fragment:u1,lights_physical_pars_fragment:f1,lights_fragment_begin:d1,lights_fragment_maps:h1,lights_fragment_end:p1,logdepthbuf_fragment:m1,logdepthbuf_pars_fragment:g1,logdepthbuf_pars_vertex:_1,logdepthbuf_vertex:v1,map_fragment:y1,map_pars_fragment:S1,map_particle_fragment:M1,map_particle_pars_fragment:x1,metalnessmap_fragment:E1,metalnessmap_pars_fragment:b1,morphinstance_vertex:T1,morphcolor_vertex:A1,morphnormal_vertex:R1,morphtarget_pars_vertex:w1,morphtarget_vertex:C1,normal_fragment_begin:D1,normal_fragment_maps:U1,normal_pars_fragment:L1,normal_pars_vertex:N1,normal_vertex:O1,normalmap_pars_fragment:P1,clearcoat_normal_fragment_begin:z1,clearcoat_normal_fragment_maps:I1,clearcoat_pars_fragment:B1,iridescence_pars_fragment:F1,opaque_fragment:H1,packing:G1,premultiplied_alpha_fragment:V1,project_vertex:k1,dithering_fragment:X1,dithering_pars_fragment:W1,roughnessmap_fragment:q1,roughnessmap_pars_fragment:Y1,shadowmap_pars_fragment:j1,shadowmap_pars_vertex:Z1,shadowmap_vertex:K1,shadowmask_pars_fragment:Q1,skinbase_vertex:J1,skinning_pars_vertex:$1,skinning_vertex:tb,skinnormal_vertex:eb,specularmap_fragment:nb,specularmap_pars_fragment:ib,tonemapping_fragment:ab,tonemapping_pars_fragment:rb,transmission_fragment:sb,transmission_pars_fragment:ob,uv_pars_fragment:lb,uv_pars_vertex:cb,uv_vertex:ub,worldpos_vertex:fb,background_vert:db,background_frag:hb,backgroundCube_vert:pb,backgroundCube_frag:mb,cube_vert:gb,cube_frag:_b,depth_vert:vb,depth_frag:yb,distanceRGBA_vert:Sb,distanceRGBA_frag:Mb,equirect_vert:xb,equirect_frag:Eb,linedashed_vert:bb,linedashed_frag:Tb,meshbasic_vert:Ab,meshbasic_frag:Rb,meshlambert_vert:wb,meshlambert_frag:Cb,meshmatcap_vert:Db,meshmatcap_frag:Ub,meshnormal_vert:Lb,meshnormal_frag:Nb,meshphong_vert:Ob,meshphong_frag:Pb,meshphysical_vert:zb,meshphysical_frag:Ib,meshtoon_vert:Bb,meshtoon_frag:Fb,points_vert:Hb,points_frag:Gb,shadow_vert:Vb,shadow_frag:kb,sprite_vert:Xb,sprite_frag:Wb},It={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Ii={basic:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new xe(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Hn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Hn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new xe(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Hn([It.points,It.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Hn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Hn([It.common,It.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Hn([It.sprite,It.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Hn([It.common,It.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Hn([It.lights,It.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Ii.physical={uniforms:Hn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Xc={r:0,b:0,g:0},Mr=new Vi,qb=new je;function Yb(s,t,i,r,l,c,f){const h=new xe(0);let p=c===!0?0:1,m,v,_=null,y=0,x=null;function E(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:t).get(D)),D}function b(L){let D=!1;const k=E(L);k===null?g(h,p):k&&k.isColor&&(g(k,1),D=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(L,D){const k=E(D);k&&(k.isCubeTexture||k.mapping===uu)?(v===void 0&&(v=new hn(new Gs(1,1,1),new ga({name:"BackgroundCubeMaterial",uniforms:Fs(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,N,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Mr.copy(D.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),v.material.uniforms.envMap.value=k,v.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(qb.makeRotationFromEuler(Mr)),v.material.toneMapped=Ne.getTransfer(k.colorSpace)!==ke,(_!==k||y!==k.version||x!==s.toneMapping)&&(v.material.needsUpdate=!0,_=k,y=k.version,x=s.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):k&&k.isTexture&&(m===void 0&&(m=new hn(new ol(2,2),new ga({name:"BackgroundMaterial",uniforms:Fs(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=k,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Ne.getTransfer(k.colorSpace)!==ke,k.matrixAutoUpdate===!0&&k.updateMatrix(),m.material.uniforms.uvTransform.value.copy(k.matrix),(_!==k||y!==k.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,_=k,y=k.version,x=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function g(L,D){L.getRGB(Xc,ty(s)),r.buffers.color.setClear(Xc.r,Xc.g,Xc.b,D,f)}function C(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,D=1){h.set(L),p=D,g(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,g(h,p)},render:b,addToRenderList:S,dispose:C}}function jb(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,f=!1;function h(R,I,$,tt,lt){let ut=!1;const z=_(tt,$,I);c!==z&&(c=z,m(c.object)),ut=x(R,tt,$,lt),ut&&E(R,tt,$,lt),lt!==null&&t.update(lt,s.ELEMENT_ARRAY_BUFFER),(ut||f)&&(f=!1,D(R,I,$,tt),lt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function v(R){return s.deleteVertexArray(R)}function _(R,I,$){const tt=$.wireframe===!0;let lt=r[R.id];lt===void 0&&(lt={},r[R.id]=lt);let ut=lt[I.id];ut===void 0&&(ut={},lt[I.id]=ut);let z=ut[tt];return z===void 0&&(z=y(p()),ut[tt]=z),z}function y(R){const I=[],$=[],tt=[];for(let lt=0;lt<i;lt++)I[lt]=0,$[lt]=0,tt[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:$,attributeDivisors:tt,object:R,attributes:{},index:null}}function x(R,I,$,tt){const lt=c.attributes,ut=I.attributes;let z=0;const q=$.getAttributes();for(const Z in q)if(q[Z].location>=0){const wt=lt[Z];let P=ut[Z];if(P===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(P=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(P=R.instanceColor)),wt===void 0||wt.attribute!==P||P&&wt.data!==P.data)return!0;z++}return c.attributesNum!==z||c.index!==tt}function E(R,I,$,tt){const lt={},ut=I.attributes;let z=0;const q=$.getAttributes();for(const Z in q)if(q[Z].location>=0){let wt=ut[Z];wt===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(wt=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(wt=R.instanceColor));const P={};P.attribute=wt,wt&&wt.data&&(P.data=wt.data),lt[Z]=P,z++}c.attributes=lt,c.attributesNum=z,c.index=tt}function b(){const R=c.newAttributes;for(let I=0,$=R.length;I<$;I++)R[I]=0}function S(R){g(R,0)}function g(R,I){const $=c.newAttributes,tt=c.enabledAttributes,lt=c.attributeDivisors;$[R]=1,tt[R]===0&&(s.enableVertexAttribArray(R),tt[R]=1),lt[R]!==I&&(s.vertexAttribDivisor(R,I),lt[R]=I)}function C(){const R=c.newAttributes,I=c.enabledAttributes;for(let $=0,tt=I.length;$<tt;$++)I[$]!==R[$]&&(s.disableVertexAttribArray($),I[$]=0)}function L(R,I,$,tt,lt,ut,z){z===!0?s.vertexAttribIPointer(R,I,$,lt,ut):s.vertexAttribPointer(R,I,$,tt,lt,ut)}function D(R,I,$,tt){b();const lt=tt.attributes,ut=$.getAttributes(),z=I.defaultAttributeValues;for(const q in ut){const Z=ut[q];if(Z.location>=0){let St=lt[q];if(St===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(St=R.instanceColor)),St!==void 0){const wt=St.normalized,P=St.itemSize,et=t.get(St);if(et===void 0)continue;const Mt=et.buffer,j=et.type,ft=et.bytesPerElement,At=j===s.INT||j===s.UNSIGNED_INT||St.gpuType===cp;if(St.isInterleavedBufferAttribute){const gt=St.data,Dt=gt.stride,Xt=St.offset;if(gt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<Z.locationSize;Vt++)g(Z.location+Vt,gt.meshPerAttribute);R.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Vt=0;Vt<Z.locationSize;Vt++)S(Z.location+Vt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Vt=0;Vt<Z.locationSize;Vt++)L(Z.location+Vt,P/Z.locationSize,j,wt,Dt*ft,(Xt+P/Z.locationSize*Vt)*ft,At)}else{if(St.isInstancedBufferAttribute){for(let gt=0;gt<Z.locationSize;gt++)g(Z.location+gt,St.meshPerAttribute);R.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let gt=0;gt<Z.locationSize;gt++)S(Z.location+gt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let gt=0;gt<Z.locationSize;gt++)L(Z.location+gt,P/Z.locationSize,j,wt,P*ft,P/Z.locationSize*gt*ft,At)}}else if(z!==void 0){const wt=z[q];if(wt!==void 0)switch(wt.length){case 2:s.vertexAttrib2fv(Z.location,wt);break;case 3:s.vertexAttrib3fv(Z.location,wt);break;case 4:s.vertexAttrib4fv(Z.location,wt);break;default:s.vertexAttrib1fv(Z.location,wt)}}}}C()}function k(){V();for(const R in r){const I=r[R];for(const $ in I){const tt=I[$];for(const lt in tt)v(tt[lt].object),delete tt[lt];delete I[$]}delete r[R]}}function H(R){if(r[R.id]===void 0)return;const I=r[R.id];for(const $ in I){const tt=I[$];for(const lt in tt)v(tt[lt].object),delete tt[lt];delete I[$]}delete r[R.id]}function N(R){for(const I in r){const $=r[I];if($[R.id]===void 0)continue;const tt=$[R.id];for(const lt in tt)v(tt[lt].object),delete tt[lt];delete $[R.id]}}function V(){A(),f=!0,c!==l&&(c=l,m(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:A,dispose:k,releaseStatesOfGeometry:H,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:S,disableUnusedAttributes:C}}function Zb(s,t,i){let r;function l(m){r=m}function c(m,v){s.drawArrays(r,m,v),i.update(v,r,1)}function f(m,v,_){_!==0&&(s.drawArraysInstanced(r,m,v,_),i.update(v,r,_))}function h(m,v,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,_);let x=0;for(let E=0;E<_;E++)x+=v[E];i.update(x,r,1)}function p(m,v,_,y){if(_===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<m.length;E++)f(m[E],v[E],y[E]);else{x.multiDrawArraysInstancedWEBGL(r,m,0,v,0,y,0,_);let E=0;for(let b=0;b<_;b++)E+=v[b]*y[b];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Kb(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(N){return!(N!==wi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(N){const V=N===il&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Gi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ha&&!V)}function p(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=E>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:x,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:k,maxSamples:H}}function Qb(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new Er,h=new ge,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const x=_.length!==0||y||r!==0||l;return l=y,r=_.length,x},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){i=v(_,y,0)},this.setState=function(_,y,x){const E=_.clippingPlanes,b=_.clipIntersection,S=_.clipShadows,g=s.get(_);if(!l||E===null||E.length===0||c&&!S)c?v(null):m();else{const C=c?0:r,L=C*4;let D=g.clippingState||null;p.value=D,D=v(E,y,L,x);for(let k=0;k!==L;++k)D[k]=i[k];g.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=C}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(_,y,x,E){const b=_!==null?_.length:0;let S=null;if(b!==0){if(S=p.value,E!==!0||S===null){const g=x+b*4,C=y.matrixWorldInverse;h.getNormalMatrix(C),(S===null||S.length<g)&&(S=new Float32Array(g));for(let L=0,D=x;L!==b;++L,D+=4)f.copy(_[L]).applyMatrix4(C,h),f.normal.toArray(S,D),S[D+3]=f.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function Jb(s){let t=new WeakMap;function i(f,h){return h===yh?f.mapping=zs:h===Sh&&(f.mapping=Is),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===yh||h===Sh)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new jx(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Us=4,ev=[.125,.215,.35,.446,.526,.582],Rr=20,ih=new oy,nv=new xe;let ah=null,rh=0,sh=0,oh=!1;const br=(1+Math.sqrt(5))/2,Cs=1/br,iv=[new Q(-br,Cs,0),new Q(br,Cs,0),new Q(-Cs,0,br),new Q(Cs,0,br),new Q(0,br,-Cs),new Q(0,br,Cs),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],$b=new Q;class av{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=$b}=c;ah=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ah,rh,sh),this._renderer.xr.enabled=oh,t.scissorTest=!1,Wc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===zs||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ah=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Hi,minFilter:Hi,generateMipmaps:!1,type:il,format:wi,colorSpace:Bs,depthBuffer:!1},l=rv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rv(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tT(c)),this._blurMaterial=eT(c,t,i)}return l}_compileMaterial(t){const i=new hn(this._lodPlanes[0],t);this._renderer.compile(i,ih)}_sceneToCubeUV(t,i,r,l,c){const p=new Kn(90,1,i,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,x=_.toneMapping;_.getClearColor(nv),_.toneMapping=Za,_.autoClear=!1;const E=new Ar({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),b=new hn(new Gs,E);let S=!1;const g=t.background;g?g.isColor&&(E.color.copy(g),t.background=null,S=!0):(E.color.copy(nv),S=!0);for(let C=0;C<6;C++){const L=C%3;L===0?(p.up.set(0,m[C],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[C],c.y,c.z)):L===1?(p.up.set(0,0,m[C]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[C],c.z)):(p.up.set(0,m[C],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[C]));const D=this._cubeSize;Wc(l,L*D,C>2?D:0,D,D),_.setRenderTarget(l),S&&_.render(b,p),_.render(t,p)}b.geometry.dispose(),b.material.dispose(),_.toneMapping=x,_.autoClear=y,t.background=g}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===zs||t.mapping===Is;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new hn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;Wc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(f,ih)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=iv[(l-c-1)%iv.length];this._blur(t,c-1,c,f,h)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new hn(this._lodPlanes[l],m),y=m.uniforms,x=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Rr-1),b=c/E,S=isFinite(c)?1+Math.floor(v*b):Rr;S>Rr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Rr}`);const g=[];let C=0;for(let N=0;N<Rr;++N){const V=N/b,A=Math.exp(-V*V/2);g.push(A),N===0?C+=A:N<S&&(C+=2*A)}for(let N=0;N<g.length;N++)g[N]=g[N]/C;y.envMap.value=t.texture,y.samples.value=S,y.weights.value=g,y.latitudinal.value=f==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:L}=this;y.dTheta.value=E,y.mipInt.value=L-r;const D=this._sizeLods[l],k=3*D*(l>L-Us?l-L+Us:0),H=4*(this._cubeSize-D);Wc(i,k,H,3*D,2*D),p.setRenderTarget(i),p.render(_,ih)}}function tT(s){const t=[],i=[],r=[];let l=s;const c=s-Us+1+ev.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let p=1/h;f>s-Us?p=ev[f-s+Us-1]:f===0&&(p=0),r.push(p);const m=1/(h-2),v=-m,_=1+m,y=[v,v,_,v,_,_,v,v,_,_,v,_],x=6,E=6,b=3,S=2,g=1,C=new Float32Array(b*E*x),L=new Float32Array(S*E*x),D=new Float32Array(g*E*x);for(let H=0;H<x;H++){const N=H%3*2/3-1,V=H>2?0:-1,A=[N,V,0,N+2/3,V,0,N+2/3,V+1,0,N,V,0,N+2/3,V+1,0,N,V+1,0];C.set(A,b*E*H),L.set(y,S*E*H);const R=[H,H,H,H,H,H];D.set(R,g*E*H)}const k=new Dn;k.setAttribute("position",new Vn(C,b)),k.setAttribute("uv",new Vn(L,S)),k.setAttribute("faceIndex",new Vn(D,g)),t.push(k),l>Us&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function rv(s,t,i){const r=new Ur(s,t,i);return r.texture.mapping=uu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Wc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function eT(s,t,i){const r=new Float32Array(Rr),l=new Q(0,1,0);return new ga({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ep(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function sv(){return new ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ep(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function ov(){return new ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function Ep(){return`

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
	`}function nT(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===yh||p===Sh,v=p===zs||p===Is;if(m||v){let _=t.get(h);const y=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new av(s)),_=m?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const x=h.image;return m&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new av(s)),_=m?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let p=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function iT(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ns("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function aT(s,t,i,r){const l={},c=new WeakMap;function f(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",f),delete l[y.id];const x=c.get(y);x&&(t.remove(x),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(_,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function p(_){const y=_.attributes;for(const x in y)t.update(y[x],s.ARRAY_BUFFER)}function m(_){const y=[],x=_.index,E=_.attributes.position;let b=0;if(x!==null){const C=x.array;b=x.version;for(let L=0,D=C.length;L<D;L+=3){const k=C[L+0],H=C[L+1],N=C[L+2];y.push(k,H,H,N,N,k)}}else if(E!==void 0){const C=E.array;b=E.version;for(let L=0,D=C.length/3-1;L<D;L+=3){const k=L+0,H=L+1,N=L+2;y.push(k,H,H,N,N,k)}}else return;const S=new(Zv(y)?$v:Jv)(y,1);S.version=b;const g=c.get(_);g&&t.remove(g),c.set(_,S)}function v(_){const y=c.get(_);if(y){const x=_.index;x!==null&&y.version<x.version&&m(_)}else m(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:v}}function rT(s,t,i){let r;function l(y){r=y}let c,f;function h(y){c=y.type,f=y.bytesPerElement}function p(y,x){s.drawElements(r,x,c,y*f),i.update(x,r,1)}function m(y,x,E){E!==0&&(s.drawElementsInstanced(r,x,c,y*f,E),i.update(x,r,E))}function v(y,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,c,y,0,E);let S=0;for(let g=0;g<E;g++)S+=x[g];i.update(S,r,1)}function _(y,x,E,b){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<y.length;g++)m(y[g]/f,x[g],b[g]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,c,y,0,b,0,E);let g=0;for(let C=0;C<E;C++)g+=x[C]*b[C];i.update(g,r,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function sT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function oT(s,t,i){const r=new WeakMap,l=new We;function c(f,h,p){const m=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let y=r.get(h);if(y===void 0||y.count!==_){let R=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var x=R;y!==void 0&&y.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,g=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),b===!0&&(D=2),S===!0&&(D=3);let k=h.attributes.position.count*D,H=1;k>t.maxTextureSize&&(H=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const N=new Float32Array(k*H*4*_),V=new Kv(N,k,H,_);V.type=ha,V.needsUpdate=!0;const A=D*4;for(let I=0;I<_;I++){const $=g[I],tt=C[I],lt=L[I],ut=k*H*4*I;for(let z=0;z<$.count;z++){const q=z*A;E===!0&&(l.fromBufferAttribute($,z),N[ut+q+0]=l.x,N[ut+q+1]=l.y,N[ut+q+2]=l.z,N[ut+q+3]=0),b===!0&&(l.fromBufferAttribute(tt,z),N[ut+q+4]=l.x,N[ut+q+5]=l.y,N[ut+q+6]=l.z,N[ut+q+7]=0),S===!0&&(l.fromBufferAttribute(lt,z),N[ut+q+8]=l.x,N[ut+q+9]=l.y,N[ut+q+10]=l.z,N[ut+q+11]=lt.itemSize===4?l.w:1)}}y={count:_,texture:V,size:new de(k,H)},r.set(h,y),h.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<m.length;S++)E+=m[S];const b=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",b),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function lT(s,t,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,v=p.geometry,_=t.get(p,v);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return _}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const fy=new Gn,lv=new ry(1,1),dy=new Kv,hy=new Ux,py=new ey,cv=[],uv=[],fv=new Float32Array(16),dv=new Float32Array(9),hv=new Float32Array(4);function Vs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=cv[l];if(c===void 0&&(c=new Float32Array(l),cv[l]=c),t!==0){r.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,s[f].toArray(c,h)}return c}function gn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function _n(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function hu(s,t){let i=uv[t];i===void 0&&(i=new Int32Array(t),uv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function cT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function uT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2fv(this.addr,t),_n(i,t)}}function fT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;s.uniform3fv(this.addr,t),_n(i,t)}}function dT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4fv(this.addr,t),_n(i,t)}}function hT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;hv.set(r),s.uniformMatrix2fv(this.addr,!1,hv),_n(i,r)}}function pT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;dv.set(r),s.uniformMatrix3fv(this.addr,!1,dv),_n(i,r)}}function mT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;fv.set(r),s.uniformMatrix4fv(this.addr,!1,fv),_n(i,r)}}function gT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function _T(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2iv(this.addr,t),_n(i,t)}}function vT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;s.uniform3iv(this.addr,t),_n(i,t)}}function yT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4iv(this.addr,t),_n(i,t)}}function ST(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function MT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2uiv(this.addr,t),_n(i,t)}}function xT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;s.uniform3uiv(this.addr,t),_n(i,t)}}function ET(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4uiv(this.addr,t),_n(i,t)}}function bT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(lv.compareFunction=jv,c=lv):c=fy,i.setTexture2D(t||c,l)}function TT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||hy,l)}function AT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||py,l)}function RT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||dy,l)}function wT(s){switch(s){case 5126:return cT;case 35664:return uT;case 35665:return fT;case 35666:return dT;case 35674:return hT;case 35675:return pT;case 35676:return mT;case 5124:case 35670:return gT;case 35667:case 35671:return _T;case 35668:case 35672:return vT;case 35669:case 35673:return yT;case 5125:return ST;case 36294:return MT;case 36295:return xT;case 36296:return ET;case 35678:case 36198:case 36298:case 36306:case 35682:return bT;case 35679:case 36299:case 36307:return TT;case 35680:case 36300:case 36308:case 36293:return AT;case 36289:case 36303:case 36311:case 36292:return RT}}function CT(s,t){s.uniform1fv(this.addr,t)}function DT(s,t){const i=Vs(t,this.size,2);s.uniform2fv(this.addr,i)}function UT(s,t){const i=Vs(t,this.size,3);s.uniform3fv(this.addr,i)}function LT(s,t){const i=Vs(t,this.size,4);s.uniform4fv(this.addr,i)}function NT(s,t){const i=Vs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function OT(s,t){const i=Vs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function PT(s,t){const i=Vs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function zT(s,t){s.uniform1iv(this.addr,t)}function IT(s,t){s.uniform2iv(this.addr,t)}function BT(s,t){s.uniform3iv(this.addr,t)}function FT(s,t){s.uniform4iv(this.addr,t)}function HT(s,t){s.uniform1uiv(this.addr,t)}function GT(s,t){s.uniform2uiv(this.addr,t)}function VT(s,t){s.uniform3uiv(this.addr,t)}function kT(s,t){s.uniform4uiv(this.addr,t)}function XT(s,t,i){const r=this.cache,l=t.length,c=hu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||fy,c[f])}function WT(s,t,i){const r=this.cache,l=t.length,c=hu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||hy,c[f])}function qT(s,t,i){const r=this.cache,l=t.length,c=hu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||py,c[f])}function YT(s,t,i){const r=this.cache,l=t.length,c=hu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||dy,c[f])}function jT(s){switch(s){case 5126:return CT;case 35664:return DT;case 35665:return UT;case 35666:return LT;case 35674:return NT;case 35675:return OT;case 35676:return PT;case 5124:case 35670:return zT;case 35667:case 35671:return IT;case 35668:case 35672:return BT;case 35669:case 35673:return FT;case 5125:return HT;case 36294:return GT;case 36295:return VT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return YT}}class ZT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=wT(i.type)}}class KT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jT(i.type)}}class QT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const lh=/(\w+)(\])?(\[|\.)?/g;function pv(s,t){s.seq.push(t),s.map[t.id]=t}function JT(s,t,i){const r=s.name,l=r.length;for(lh.lastIndex=0;;){const c=lh.exec(r),f=lh.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){pv(i,m===void 0?new ZT(h,s,t):new KT(h,s,t));break}else{let _=i.map[h];_===void 0&&(_=new QT(h),pv(i,_)),i=_}}}class Jc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);JT(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function mv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const $T=37297;let tA=0;function eA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const gv=new ge;function nA(s){Ne._getMatrix(gv,Ne.workingColorSpace,s);const t=`mat3( ${gv.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(s)){case tu:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function _v(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+eA(s.getShaderSource(t),f)}else return l}function iA(s,t){const i=nA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function aA(s,t){let i;switch(t){case ix:i="Linear";break;case ax:i="Reinhard";break;case rx:i="Cineon";break;case sx:i="ACESFilmic";break;case lx:i="AgX";break;case cx:i="Neutral";break;case ox:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const qc=new Q;function rA(){Ne.getLuminanceCoefficients(qc);const s=qc.x.toFixed(4),t=qc.y.toFixed(4),i=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function oA(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function lA(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:h}}return i}function qo(s){return s!==""}function vv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cA=/^[ \t]*#include +<([\w\d./]+)>/gm;function np(s){return s.replace(cA,fA)}const uA=new Map;function fA(s,t){let i=ve[t];if(i===void 0){const r=uA.get(t);if(r!==void 0)i=ve[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return np(i)}const dA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sv(s){return s.replace(dA,hA)}function hA(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Mv(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function pA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Iv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===lp?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===da&&(t="SHADOWMAP_TYPE_VSM"),t}function mA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zs:case Is:t="ENVMAP_TYPE_CUBE";break;case uu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gA(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Is&&(t="ENVMAP_MODE_REFRACTION"),t}function _A(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bv:t="ENVMAP_BLENDING_MULTIPLY";break;case ex:t="ENVMAP_BLENDING_MIX";break;case nx:t="ENVMAP_BLENDING_ADD";break}return t}function vA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function yA(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=pA(i),m=mA(i),v=gA(i),_=_A(i),y=vA(i),x=sA(i),E=oA(c),b=l.createProgram();let S,g,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(qo).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(qo).join(`
`),g.length>0&&(g+=`
`)):(S=[Mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),g=[Mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Za?"#define TONE_MAPPING":"",i.toneMapping!==Za?ve.tonemapping_pars_fragment:"",i.toneMapping!==Za?aA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,iA("linearToOutputTexel",i.outputColorSpace),rA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),f=np(f),f=vv(f,i),f=yv(f,i),h=np(h),h=vv(h,i),h=yv(h,i),f=Sv(f),h=Sv(h),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",i.glslVersion===b_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===b_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=C+S+f,D=C+g+h,k=mv(l,l.VERTEX_SHADER,L),H=mv(l,l.FRAGMENT_SHADER,D);l.attachShader(b,k),l.attachShader(b,H),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function N(I){if(s.debug.checkShaderErrors){const $=l.getProgramInfoLog(b).trim(),tt=l.getShaderInfoLog(k).trim(),lt=l.getShaderInfoLog(H).trim();let ut=!0,z=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(ut=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,b,k,H);else{const q=_v(l,k,"vertex"),Z=_v(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+$+`
`+q+`
`+Z)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(tt===""||lt==="")&&(z=!1);z&&(I.diagnostics={runnable:ut,programLog:$,vertexShader:{log:tt,prefix:S},fragmentShader:{log:lt,prefix:g}})}l.deleteShader(k),l.deleteShader(H),V=new Jc(l,b),A=lA(l,b)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(b,$T)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tA++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=k,this.fragmentShader=H,this}let SA=0;class MA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new xA(t),i.set(t,r)),r}}class xA{constructor(t){this.id=SA++,this.code=t,this.usedTimes=0}}function EA(s,t,i,r,l,c,f){const h=new _p,p=new MA,m=new Set,v=[],_=l.logarithmicDepthBuffer,y=l.vertexTextures;let x=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return m.add(A),A===0?"uv":`uv${A}`}function S(A,R,I,$,tt){const lt=$.fog,ut=tt.geometry,z=A.isMeshStandardMaterial?$.environment:null,q=(A.isMeshStandardMaterial?i:t).get(A.envMap||z),Z=q&&q.mapping===uu?q.image.height:null,St=E[A.type];A.precision!==null&&(x=l.getMaxPrecision(A.precision),x!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",x,"instead."));const wt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,P=wt!==void 0?wt.length:0;let et=0;ut.morphAttributes.position!==void 0&&(et=1),ut.morphAttributes.normal!==void 0&&(et=2),ut.morphAttributes.color!==void 0&&(et=3);let Mt,j,ft,At;if(St){const Ce=Ii[St];Mt=Ce.vertexShader,j=Ce.fragmentShader}else Mt=A.vertexShader,j=A.fragmentShader,p.update(A),ft=p.getVertexShaderID(A),At=p.getFragmentShaderID(A);const gt=s.getRenderTarget(),Dt=s.state.buffers.depth.getReversed(),Xt=tt.isInstancedMesh===!0,Vt=tt.isBatchedMesh===!0,yt=!!A.map,Et=!!A.matcap,Bt=!!q,B=!!A.aoMap,fe=!!A.lightMap,Jt=!!A.bumpMap,ue=!!A.normalMap,Pt=!!A.displacementMap,ie=!!A.emissiveMap,jt=!!A.metalnessMap,re=!!A.roughnessMap,Ze=A.anisotropy>0,F=A.clearcoat>0,T=A.dispersion>0,at=A.iridescence>0,mt=A.sheen>0,bt=A.transmission>0,dt=Ze&&!!A.anisotropyMap,Zt=F&&!!A.clearcoatMap,Ut=F&&!!A.clearcoatNormalMap,qt=F&&!!A.clearcoatRoughnessMap,Kt=at&&!!A.iridescenceMap,xt=at&&!!A.iridescenceThicknessMap,Lt=mt&&!!A.sheenColorMap,$t=mt&&!!A.sheenRoughnessMap,Wt=!!A.specularMap,Nt=!!A.specularColorMap,se=!!A.specularIntensityMap,W=bt&&!!A.transmissionMap,Ot=bt&&!!A.thicknessMap,Tt=!!A.gradientMap,Ht=!!A.alphaMap,Rt=A.alphaTest>0,_t=!!A.alphaHash,Gt=!!A.extensions;let oe=Za;A.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(oe=s.toneMapping);const ze={shaderID:St,shaderType:A.type,shaderName:A.name,vertexShader:Mt,fragmentShader:j,defines:A.defines,customVertexShaderID:ft,customFragmentShaderID:At,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:x,batching:Vt,batchingColor:Vt&&tt._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&tt.instanceColor!==null,instancingMorph:Xt&&tt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:gt===null?s.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Bs,alphaToCoverage:!!A.alphaToCoverage,map:yt,matcap:Et,envMap:Bt,envMapMode:Bt&&q.mapping,envMapCubeUVHeight:Z,aoMap:B,lightMap:fe,bumpMap:Jt,normalMap:ue,displacementMap:y&&Pt,emissiveMap:ie,normalMapObjectSpace:ue&&A.normalMapType===hx,normalMapTangentSpace:ue&&A.normalMapType===mp,metalnessMap:jt,roughnessMap:re,anisotropy:Ze,anisotropyMap:dt,clearcoat:F,clearcoatMap:Zt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:qt,dispersion:T,iridescence:at,iridescenceMap:Kt,iridescenceThicknessMap:xt,sheen:mt,sheenColorMap:Lt,sheenRoughnessMap:$t,specularMap:Wt,specularColorMap:Nt,specularIntensityMap:se,transmission:bt,transmissionMap:W,thicknessMap:Ot,gradientMap:Tt,opaque:A.transparent===!1&&A.blending===Ls&&A.alphaToCoverage===!1,alphaMap:Ht,alphaTest:Rt,alphaHash:_t,combine:A.combine,mapUv:yt&&b(A.map.channel),aoMapUv:B&&b(A.aoMap.channel),lightMapUv:fe&&b(A.lightMap.channel),bumpMapUv:Jt&&b(A.bumpMap.channel),normalMapUv:ue&&b(A.normalMap.channel),displacementMapUv:Pt&&b(A.displacementMap.channel),emissiveMapUv:ie&&b(A.emissiveMap.channel),metalnessMapUv:jt&&b(A.metalnessMap.channel),roughnessMapUv:re&&b(A.roughnessMap.channel),anisotropyMapUv:dt&&b(A.anisotropyMap.channel),clearcoatMapUv:Zt&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:$t&&b(A.sheenRoughnessMap.channel),specularMapUv:Wt&&b(A.specularMap.channel),specularColorMapUv:Nt&&b(A.specularColorMap.channel),specularIntensityMapUv:se&&b(A.specularIntensityMap.channel),transmissionMapUv:W&&b(A.transmissionMap.channel),thicknessMapUv:Ot&&b(A.thicknessMap.channel),alphaMapUv:Ht&&b(A.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(ue||Ze),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!ut.attributes.uv&&(yt||Ht),fog:!!lt,useFog:A.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Dt,skinning:tt.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:et,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,decodeVideoTexture:yt&&A.map.isVideoTexture===!0&&Ne.getTransfer(A.map.colorSpace)===ke,decodeVideoTextureEmissive:ie&&A.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(A.emissiveMap.colorSpace)===ke,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Bi,flipSided:A.side===Qn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Gt&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&A.extensions.multiDraw===!0||Vt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ze.vertexUv1s=m.has(1),ze.vertexUv2s=m.has(2),ze.vertexUv3s=m.has(3),m.clear(),ze}function g(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const I in A.defines)R.push(I),R.push(A.defines[I]);return A.isRawShaderMaterial===!1&&(C(R,A),L(R,A),R.push(s.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function C(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function L(A,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),A.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),A.push(h.mask)}function D(A){const R=E[A.type];let I;if(R){const $=Ii[R];I=Xx.clone($.uniforms)}else I=A.uniforms;return I}function k(A,R){let I;for(let $=0,tt=v.length;$<tt;$++){const lt=v[$];if(lt.cacheKey===R){I=lt,++I.usedTimes;break}}return I===void 0&&(I=new yA(s,R,A,c),v.push(I)),I}function H(A){if(--A.usedTimes===0){const R=v.indexOf(A);v[R]=v[v.length-1],v.pop(),A.destroy()}}function N(A){p.remove(A)}function V(){p.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:D,acquireProgram:k,releaseProgram:H,releaseShaderCache:N,programs:v,dispose:V}}function bA(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,p){s.get(f)[h]=p}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function TA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function xv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ev(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(_,y,x,E,b,S){let g=s[t];return g===void 0?(g={id:_.id,object:_,geometry:y,material:x,groupOrder:E,renderOrder:_.renderOrder,z:b,group:S},s[t]=g):(g.id=_.id,g.object=_,g.geometry=y,g.material=x,g.groupOrder=E,g.renderOrder=_.renderOrder,g.z=b,g.group=S),t++,g}function h(_,y,x,E,b,S){const g=f(_,y,x,E,b,S);x.transmission>0?r.push(g):x.transparent===!0?l.push(g):i.push(g)}function p(_,y,x,E,b,S){const g=f(_,y,x,E,b,S);x.transmission>0?r.unshift(g):x.transparent===!0?l.unshift(g):i.unshift(g)}function m(_,y){i.length>1&&i.sort(_||TA),r.length>1&&r.sort(y||xv),l.length>1&&l.sort(y||xv)}function v(){for(let _=t,y=s.length;_<y;_++){const x=s[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:p,finish:v,sort:m}}function AA(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new Ev,s.set(r,[f])):l>=c.length?(f=new Ev,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function RA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new xe};break;case"SpotLight":i={position:new Q,direction:new Q,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[t.id]=i,i}}}function wA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let CA=0;function DA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function UA(s){const t=new RA,i=wA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const l=new Q,c=new je,f=new je;function h(m){let v=0,_=0,y=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let x=0,E=0,b=0,S=0,g=0,C=0,L=0,D=0,k=0,H=0,N=0;m.sort(DA);for(let A=0,R=m.length;A<R;A++){const I=m[A],$=I.color,tt=I.intensity,lt=I.distance,ut=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)v+=$.r*tt,_+=$.g*tt,y+=$.b*tt;else if(I.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(I.sh.coefficients[z],tt);N++}else if(I.isDirectionalLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const q=I.shadow,Z=i.get(I);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,r.directionalShadow[x]=Z,r.directionalShadowMap[x]=ut,r.directionalShadowMatrix[x]=I.shadow.matrix,C++}r.directional[x]=z,x++}else if(I.isSpotLight){const z=t.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy($).multiplyScalar(tt),z.distance=lt,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,r.spot[b]=z;const q=I.shadow;if(I.map&&(r.spotLightMap[k]=I.map,k++,q.updateMatrices(I),I.castShadow&&H++),r.spotLightMatrix[b]=q.matrix,I.castShadow){const Z=i.get(I);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,r.spotShadow[b]=Z,r.spotShadowMap[b]=ut,D++}b++}else if(I.isRectAreaLight){const z=t.get(I);z.color.copy($).multiplyScalar(tt),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),r.rectArea[S]=z,S++}else if(I.isPointLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){const q=I.shadow,Z=i.get(I);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,Z.shadowCameraNear=q.camera.near,Z.shadowCameraFar=q.camera.far,r.pointShadow[E]=Z,r.pointShadowMap[E]=ut,r.pointShadowMatrix[E]=I.shadow.matrix,L++}r.point[E]=z,E++}else if(I.isHemisphereLight){const z=t.get(I);z.skyColor.copy(I.color).multiplyScalar(tt),z.groundColor.copy(I.groundColor).multiplyScalar(tt),r.hemi[g]=z,g++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=It.LTC_FLOAT_1,r.rectAreaLTC2=It.LTC_FLOAT_2):(r.rectAreaLTC1=It.LTC_HALF_1,r.rectAreaLTC2=It.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=y;const V=r.hash;(V.directionalLength!==x||V.pointLength!==E||V.spotLength!==b||V.rectAreaLength!==S||V.hemiLength!==g||V.numDirectionalShadows!==C||V.numPointShadows!==L||V.numSpotShadows!==D||V.numSpotMaps!==k||V.numLightProbes!==N)&&(r.directional.length=x,r.spot.length=b,r.rectArea.length=S,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=D+k-H,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=N,V.directionalLength=x,V.pointLength=E,V.spotLength=b,V.rectAreaLength=S,V.hemiLength=g,V.numDirectionalShadows=C,V.numPointShadows=L,V.numSpotShadows=D,V.numSpotMaps=k,V.numLightProbes=N,r.version=CA++)}function p(m,v){let _=0,y=0,x=0,E=0,b=0;const S=v.matrixWorldInverse;for(let g=0,C=m.length;g<C;g++){const L=m[g];if(L.isDirectionalLight){const D=r.directional[_];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),_++}else if(L.isSpotLight){const D=r.spot[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const D=r.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),f.identity(),c.copy(L.matrixWorld),c.premultiply(S),f.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const D=r.point[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const D=r.hemi[b];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(S),b++}}}return{setup:h,setupView:p,state:r}}function bv(s){const t=new UA(s),i=[],r=[];function l(v){m.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function f(v){r.push(v)}function h(){t.setup(i)}function p(v){t.setupView(i,v)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function LA(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new bv(s),t.set(l,[h])):c>=f.length?(h=new bv(s),f.push(h)):h=f[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const NA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OA=`uniform sampler2D shadow_pass;
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
}`;function PA(s,t,i){let r=new yp;const l=new de,c=new de,f=new We,h=new iE({depthPacking:dx}),p=new aE,m={},v=i.maxTextureSize,_={[Qa]:Qn,[Qn]:Qa,[Bi]:Bi},y=new ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:NA,fragmentShader:OA}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const E=new Dn;E.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new hn(E,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iv;let g=this.type;this.render=function(H,N,V){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const A=s.getRenderTarget(),R=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),$=s.state;$.setBlending(ja),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const tt=g!==da&&this.type===da,lt=g===da&&this.type!==da;for(let ut=0,z=H.length;ut<z;ut++){const q=H[ut],Z=q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const St=Z.getFrameExtents();if(l.multiply(St),c.copy(Z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/St.x),l.x=c.x*St.x,Z.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/St.y),l.y=c.y*St.y,Z.mapSize.y=c.y)),Z.map===null||tt===!0||lt===!0){const P=this.type!==da?{minFilter:Di,magFilter:Di}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ur(l.x,l.y,P),Z.map.texture.name=q.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();const wt=Z.getViewportCount();for(let P=0;P<wt;P++){const et=Z.getViewport(P);f.set(c.x*et.x,c.y*et.y,c.x*et.z,c.y*et.w),$.viewport(f),Z.updateMatrices(q,P),r=Z.getFrustum(),D(N,V,Z.camera,q,this.type)}Z.isPointLightShadow!==!0&&this.type===da&&C(Z,V),Z.needsUpdate=!1}g=this.type,S.needsUpdate=!1,s.setRenderTarget(A,R,I)};function C(H,N){const V=t.update(b);y.defines.VSM_SAMPLES!==H.blurSamples&&(y.defines.VSM_SAMPLES=H.blurSamples,x.defines.VSM_SAMPLES=H.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ur(l.x,l.y)),y.uniforms.shadow_pass.value=H.map.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(N,null,V,y,b,null),x.uniforms.shadow_pass.value=H.mapPass.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(N,null,V,x,b,null)}function L(H,N,V,A){let R=null;const I=V.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(I!==void 0)R=I;else if(R=V.isPointLight===!0?p:h,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const $=R.uuid,tt=N.uuid;let lt=m[$];lt===void 0&&(lt={},m[$]=lt);let ut=lt[tt];ut===void 0&&(ut=R.clone(),lt[tt]=ut,N.addEventListener("dispose",k)),R=ut}if(R.visible=N.visible,R.wireframe=N.wireframe,A===da?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:_[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,V.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const $=s.properties.get(R);$.light=V}return R}function D(H,N,V,A,R){if(H.visible===!1)return;if(H.layers.test(N.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&R===da)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,H.matrixWorld);const tt=t.update(H),lt=H.material;if(Array.isArray(lt)){const ut=tt.groups;for(let z=0,q=ut.length;z<q;z++){const Z=ut[z],St=lt[Z.materialIndex];if(St&&St.visible){const wt=L(H,St,A,R);H.onBeforeShadow(s,H,N,V,tt,wt,Z),s.renderBufferDirect(V,null,tt,wt,H,Z),H.onAfterShadow(s,H,N,V,tt,wt,Z)}}}else if(lt.visible){const ut=L(H,lt,A,R);H.onBeforeShadow(s,H,N,V,tt,ut,null),s.renderBufferDirect(V,null,tt,ut,H,null),H.onAfterShadow(s,H,N,V,tt,ut,null)}}const $=H.children;for(let tt=0,lt=$.length;tt<lt;tt++)D($[tt],N,V,A,R)}function k(H){H.target.removeEventListener("dispose",k);for(const V in m){const A=m[V],R=H.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}const zA={[dh]:hh,[ph]:_h,[mh]:vh,[Ps]:gh,[hh]:dh,[_h]:ph,[vh]:mh,[gh]:Ps};function IA(s,t){function i(){let W=!1;const Ot=new We;let Tt=null;const Ht=new We(0,0,0,0);return{setMask:function(Rt){Tt!==Rt&&!W&&(s.colorMask(Rt,Rt,Rt,Rt),Tt=Rt)},setLocked:function(Rt){W=Rt},setClear:function(Rt,_t,Gt,oe,ze){ze===!0&&(Rt*=oe,_t*=oe,Gt*=oe),Ot.set(Rt,_t,Gt,oe),Ht.equals(Ot)===!1&&(s.clearColor(Rt,_t,Gt,oe),Ht.copy(Ot))},reset:function(){W=!1,Tt=null,Ht.set(-1,0,0,0)}}}function r(){let W=!1,Ot=!1,Tt=null,Ht=null,Rt=null;return{setReversed:function(_t){if(Ot!==_t){const Gt=t.get("EXT_clip_control");_t?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),Ot=_t;const oe=Rt;Rt=null,this.setClear(oe)}},getReversed:function(){return Ot},setTest:function(_t){_t?gt(s.DEPTH_TEST):Dt(s.DEPTH_TEST)},setMask:function(_t){Tt!==_t&&!W&&(s.depthMask(_t),Tt=_t)},setFunc:function(_t){if(Ot&&(_t=zA[_t]),Ht!==_t){switch(_t){case dh:s.depthFunc(s.NEVER);break;case hh:s.depthFunc(s.ALWAYS);break;case ph:s.depthFunc(s.LESS);break;case Ps:s.depthFunc(s.LEQUAL);break;case mh:s.depthFunc(s.EQUAL);break;case gh:s.depthFunc(s.GEQUAL);break;case _h:s.depthFunc(s.GREATER);break;case vh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ht=_t}},setLocked:function(_t){W=_t},setClear:function(_t){Rt!==_t&&(Ot&&(_t=1-_t),s.clearDepth(_t),Rt=_t)},reset:function(){W=!1,Tt=null,Ht=null,Rt=null,Ot=!1}}}function l(){let W=!1,Ot=null,Tt=null,Ht=null,Rt=null,_t=null,Gt=null,oe=null,ze=null;return{setTest:function(Ce){W||(Ce?gt(s.STENCIL_TEST):Dt(s.STENCIL_TEST))},setMask:function(Ce){Ot!==Ce&&!W&&(s.stencilMask(Ce),Ot=Ce)},setFunc:function(Ce,xn,vi){(Tt!==Ce||Ht!==xn||Rt!==vi)&&(s.stencilFunc(Ce,xn,vi),Tt=Ce,Ht=xn,Rt=vi)},setOp:function(Ce,xn,vi){(_t!==Ce||Gt!==xn||oe!==vi)&&(s.stencilOp(Ce,xn,vi),_t=Ce,Gt=xn,oe=vi)},setLocked:function(Ce){W=Ce},setClear:function(Ce){ze!==Ce&&(s.clearStencil(Ce),ze=Ce)},reset:function(){W=!1,Ot=null,Tt=null,Ht=null,Rt=null,_t=null,Gt=null,oe=null,ze=null}}}const c=new i,f=new r,h=new l,p=new WeakMap,m=new WeakMap;let v={},_={},y=new WeakMap,x=[],E=null,b=!1,S=null,g=null,C=null,L=null,D=null,k=null,H=null,N=new xe(0,0,0),V=0,A=!1,R=null,I=null,$=null,tt=null,lt=null;const ut=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,q=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=q>=1):Z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=q>=2);let St=null,wt={};const P=s.getParameter(s.SCISSOR_BOX),et=s.getParameter(s.VIEWPORT),Mt=new We().fromArray(P),j=new We().fromArray(et);function ft(W,Ot,Tt,Ht){const Rt=new Uint8Array(4),_t=s.createTexture();s.bindTexture(W,_t),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Gt=0;Gt<Tt;Gt++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ot,0,s.RGBA,1,1,Ht,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(Ot+Gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return _t}const At={};At[s.TEXTURE_2D]=ft(s.TEXTURE_2D,s.TEXTURE_2D,1),At[s.TEXTURE_CUBE_MAP]=ft(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[s.TEXTURE_2D_ARRAY]=ft(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),At[s.TEXTURE_3D]=ft(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),gt(s.DEPTH_TEST),f.setFunc(Ps),Jt(!1),ue(S_),gt(s.CULL_FACE),B(ja);function gt(W){v[W]!==!0&&(s.enable(W),v[W]=!0)}function Dt(W){v[W]!==!1&&(s.disable(W),v[W]=!1)}function Xt(W,Ot){return _[W]!==Ot?(s.bindFramebuffer(W,Ot),_[W]=Ot,W===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ot),W===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Vt(W,Ot){let Tt=x,Ht=!1;if(W){Tt=y.get(Ot),Tt===void 0&&(Tt=[],y.set(Ot,Tt));const Rt=W.textures;if(Tt.length!==Rt.length||Tt[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,Gt=Rt.length;_t<Gt;_t++)Tt[_t]=s.COLOR_ATTACHMENT0+_t;Tt.length=Rt.length,Ht=!0}}else Tt[0]!==s.BACK&&(Tt[0]=s.BACK,Ht=!0);Ht&&s.drawBuffers(Tt)}function yt(W){return E!==W?(s.useProgram(W),E=W,!0):!1}const Et={[Tr]:s.FUNC_ADD,[BM]:s.FUNC_SUBTRACT,[FM]:s.FUNC_REVERSE_SUBTRACT};Et[HM]=s.MIN,Et[GM]=s.MAX;const Bt={[VM]:s.ZERO,[kM]:s.ONE,[XM]:s.SRC_COLOR,[uh]:s.SRC_ALPHA,[KM]:s.SRC_ALPHA_SATURATE,[jM]:s.DST_COLOR,[qM]:s.DST_ALPHA,[WM]:s.ONE_MINUS_SRC_COLOR,[fh]:s.ONE_MINUS_SRC_ALPHA,[ZM]:s.ONE_MINUS_DST_COLOR,[YM]:s.ONE_MINUS_DST_ALPHA,[QM]:s.CONSTANT_COLOR,[JM]:s.ONE_MINUS_CONSTANT_COLOR,[$M]:s.CONSTANT_ALPHA,[tx]:s.ONE_MINUS_CONSTANT_ALPHA};function B(W,Ot,Tt,Ht,Rt,_t,Gt,oe,ze,Ce){if(W===ja){b===!0&&(Dt(s.BLEND),b=!1);return}if(b===!1&&(gt(s.BLEND),b=!0),W!==IM){if(W!==S||Ce!==A){if((g!==Tr||D!==Tr)&&(s.blendEquation(s.FUNC_ADD),g=Tr,D=Tr),Ce)switch(W){case Ls:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $c:s.blendFunc(s.ONE,s.ONE);break;case M_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case x_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ls:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $c:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case M_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case x_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}C=null,L=null,k=null,H=null,N.set(0,0,0),V=0,S=W,A=Ce}return}Rt=Rt||Ot,_t=_t||Tt,Gt=Gt||Ht,(Ot!==g||Rt!==D)&&(s.blendEquationSeparate(Et[Ot],Et[Rt]),g=Ot,D=Rt),(Tt!==C||Ht!==L||_t!==k||Gt!==H)&&(s.blendFuncSeparate(Bt[Tt],Bt[Ht],Bt[_t],Bt[Gt]),C=Tt,L=Ht,k=_t,H=Gt),(oe.equals(N)===!1||ze!==V)&&(s.blendColor(oe.r,oe.g,oe.b,ze),N.copy(oe),V=ze),S=W,A=!1}function fe(W,Ot){W.side===Bi?Dt(s.CULL_FACE):gt(s.CULL_FACE);let Tt=W.side===Qn;Ot&&(Tt=!Tt),Jt(Tt),W.blending===Ls&&W.transparent===!1?B(ja):B(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ht=W.stencilWrite;h.setTest(Ht),Ht&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ie(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):Dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(W){R!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),R=W)}function ue(W){W!==PM?(gt(s.CULL_FACE),W!==I&&(W===S_?s.cullFace(s.BACK):W===zM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Dt(s.CULL_FACE),I=W}function Pt(W){W!==$&&(z&&s.lineWidth(W),$=W)}function ie(W,Ot,Tt){W?(gt(s.POLYGON_OFFSET_FILL),(tt!==Ot||lt!==Tt)&&(s.polygonOffset(Ot,Tt),tt=Ot,lt=Tt)):Dt(s.POLYGON_OFFSET_FILL)}function jt(W){W?gt(s.SCISSOR_TEST):Dt(s.SCISSOR_TEST)}function re(W){W===void 0&&(W=s.TEXTURE0+ut-1),St!==W&&(s.activeTexture(W),St=W)}function Ze(W,Ot,Tt){Tt===void 0&&(St===null?Tt=s.TEXTURE0+ut-1:Tt=St);let Ht=wt[Tt];Ht===void 0&&(Ht={type:void 0,texture:void 0},wt[Tt]=Ht),(Ht.type!==W||Ht.texture!==Ot)&&(St!==Tt&&(s.activeTexture(Tt),St=Tt),s.bindTexture(W,Ot||At[W]),Ht.type=W,Ht.texture=Ot)}function F(){const W=wt[St];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function at(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function mt(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function dt(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Zt(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ut(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Kt(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xt(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Lt(W){Mt.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Mt.copy(W))}function $t(W){j.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),j.copy(W))}function Wt(W,Ot){let Tt=m.get(Ot);Tt===void 0&&(Tt=new WeakMap,m.set(Ot,Tt));let Ht=Tt.get(W);Ht===void 0&&(Ht=s.getUniformBlockIndex(Ot,W.name),Tt.set(W,Ht))}function Nt(W,Ot){const Ht=m.get(Ot).get(W);p.get(Ot)!==Ht&&(s.uniformBlockBinding(Ot,Ht,W.__bindingPointIndex),p.set(Ot,Ht))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},St=null,wt={},_={},y=new WeakMap,x=[],E=null,b=!1,S=null,g=null,C=null,L=null,D=null,k=null,H=null,N=new xe(0,0,0),V=0,A=!1,R=null,I=null,$=null,tt=null,lt=null,Mt.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:gt,disable:Dt,bindFramebuffer:Xt,drawBuffers:Vt,useProgram:yt,setBlending:B,setMaterial:fe,setFlipSided:Jt,setCullFace:ue,setLineWidth:Pt,setPolygonOffset:ie,setScissorTest:jt,activeTexture:re,bindTexture:Ze,unbindTexture:F,compressedTexImage2D:T,compressedTexImage3D:at,texImage2D:Kt,texImage3D:xt,updateUBOMapping:Wt,uniformBlockBinding:Nt,texStorage2D:Ut,texStorage3D:qt,texSubImage2D:mt,texSubImage3D:bt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Zt,scissor:Lt,viewport:$t,reset:se}}function BA(s,t,i,r,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new de,v=new WeakMap;let _;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,T){return x?new OffscreenCanvas(F,T):nu("canvas")}function b(F,T,at){let mt=1;const bt=Ze(F);if((bt.width>at||bt.height>at)&&(mt=at/Math.max(bt.width,bt.height)),mt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const dt=Math.floor(mt*bt.width),Zt=Math.floor(mt*bt.height);_===void 0&&(_=E(dt,Zt));const Ut=T?E(dt,Zt):_;return Ut.width=dt,Ut.height=Zt,Ut.getContext("2d").drawImage(F,0,0,dt,Zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+dt+"x"+Zt+")."),Ut}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),F;return F}function S(F){return F.generateMipmaps}function g(F){s.generateMipmap(F)}function C(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(F,T,at,mt,bt=!1){if(F!==null){if(s[F]!==void 0)return s[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let dt=T;if(T===s.RED&&(at===s.FLOAT&&(dt=s.R32F),at===s.HALF_FLOAT&&(dt=s.R16F),at===s.UNSIGNED_BYTE&&(dt=s.R8)),T===s.RED_INTEGER&&(at===s.UNSIGNED_BYTE&&(dt=s.R8UI),at===s.UNSIGNED_SHORT&&(dt=s.R16UI),at===s.UNSIGNED_INT&&(dt=s.R32UI),at===s.BYTE&&(dt=s.R8I),at===s.SHORT&&(dt=s.R16I),at===s.INT&&(dt=s.R32I)),T===s.RG&&(at===s.FLOAT&&(dt=s.RG32F),at===s.HALF_FLOAT&&(dt=s.RG16F),at===s.UNSIGNED_BYTE&&(dt=s.RG8)),T===s.RG_INTEGER&&(at===s.UNSIGNED_BYTE&&(dt=s.RG8UI),at===s.UNSIGNED_SHORT&&(dt=s.RG16UI),at===s.UNSIGNED_INT&&(dt=s.RG32UI),at===s.BYTE&&(dt=s.RG8I),at===s.SHORT&&(dt=s.RG16I),at===s.INT&&(dt=s.RG32I)),T===s.RGB_INTEGER&&(at===s.UNSIGNED_BYTE&&(dt=s.RGB8UI),at===s.UNSIGNED_SHORT&&(dt=s.RGB16UI),at===s.UNSIGNED_INT&&(dt=s.RGB32UI),at===s.BYTE&&(dt=s.RGB8I),at===s.SHORT&&(dt=s.RGB16I),at===s.INT&&(dt=s.RGB32I)),T===s.RGBA_INTEGER&&(at===s.UNSIGNED_BYTE&&(dt=s.RGBA8UI),at===s.UNSIGNED_SHORT&&(dt=s.RGBA16UI),at===s.UNSIGNED_INT&&(dt=s.RGBA32UI),at===s.BYTE&&(dt=s.RGBA8I),at===s.SHORT&&(dt=s.RGBA16I),at===s.INT&&(dt=s.RGBA32I)),T===s.RGB&&at===s.UNSIGNED_INT_5_9_9_9_REV&&(dt=s.RGB9_E5),T===s.RGBA){const Zt=bt?tu:Ne.getTransfer(mt);at===s.FLOAT&&(dt=s.RGBA32F),at===s.HALF_FLOAT&&(dt=s.RGBA16F),at===s.UNSIGNED_BYTE&&(dt=Zt===ke?s.SRGB8_ALPHA8:s.RGBA8),at===s.UNSIGNED_SHORT_4_4_4_4&&(dt=s.RGBA4),at===s.UNSIGNED_SHORT_5_5_5_1&&(dt=s.RGB5_A1)}return(dt===s.R16F||dt===s.R32F||dt===s.RG16F||dt===s.RG32F||dt===s.RGBA16F||dt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function D(F,T){let at;return F?T===null||T===Dr||T===Ko?at=s.DEPTH24_STENCIL8:T===ha?at=s.DEPTH32F_STENCIL8:T===Zo&&(at=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Dr||T===Ko?at=s.DEPTH_COMPONENT24:T===ha?at=s.DEPTH_COMPONENT32F:T===Zo&&(at=s.DEPTH_COMPONENT16),at}function k(F,T){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==Di&&F.minFilter!==Hi?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function H(F){const T=F.target;T.removeEventListener("dispose",H),V(T),T.isVideoTexture&&v.delete(T)}function N(F){const T=F.target;T.removeEventListener("dispose",N),R(T)}function V(F){const T=r.get(F);if(T.__webglInit===void 0)return;const at=F.source,mt=y.get(at);if(mt){const bt=mt[T.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&A(F),Object.keys(mt).length===0&&y.delete(at)}r.remove(F)}function A(F){const T=r.get(F);s.deleteTexture(T.__webglTexture);const at=F.source,mt=y.get(at);delete mt[T.__cacheKey],f.memory.textures--}function R(F){const T=r.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),r.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(T.__webglFramebuffer[mt]))for(let bt=0;bt<T.__webglFramebuffer[mt].length;bt++)s.deleteFramebuffer(T.__webglFramebuffer[mt][bt]);else s.deleteFramebuffer(T.__webglFramebuffer[mt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[mt])}else{if(Array.isArray(T.__webglFramebuffer))for(let mt=0;mt<T.__webglFramebuffer.length;mt++)s.deleteFramebuffer(T.__webglFramebuffer[mt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let mt=0;mt<T.__webglColorRenderbuffer.length;mt++)T.__webglColorRenderbuffer[mt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[mt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const at=F.textures;for(let mt=0,bt=at.length;mt<bt;mt++){const dt=r.get(at[mt]);dt.__webglTexture&&(s.deleteTexture(dt.__webglTexture),f.memory.textures--),r.remove(at[mt])}r.remove(F)}let I=0;function $(){I=0}function tt(){const F=I;return F>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+l.maxTextures),I+=1,F}function lt(F){const T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.colorSpace),T.join()}function ut(F,T){const at=r.get(F);if(F.isVideoTexture&&jt(F),F.isRenderTargetTexture===!1&&F.version>0&&at.__version!==F.version){const mt=F.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{At(at,F,T);return}}i.bindTexture(s.TEXTURE_2D,at.__webglTexture,s.TEXTURE0+T)}function z(F,T){const at=r.get(F);if(F.version>0&&at.__version!==F.version){At(at,F,T);return}i.bindTexture(s.TEXTURE_2D_ARRAY,at.__webglTexture,s.TEXTURE0+T)}function q(F,T){const at=r.get(F);if(F.version>0&&at.__version!==F.version){At(at,F,T);return}i.bindTexture(s.TEXTURE_3D,at.__webglTexture,s.TEXTURE0+T)}function Z(F,T){const at=r.get(F);if(F.version>0&&at.__version!==F.version){gt(at,F,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture,s.TEXTURE0+T)}const St={[Mh]:s.REPEAT,[wr]:s.CLAMP_TO_EDGE,[xh]:s.MIRRORED_REPEAT},wt={[Di]:s.NEAREST,[ux]:s.NEAREST_MIPMAP_NEAREST,[yc]:s.NEAREST_MIPMAP_LINEAR,[Hi]:s.LINEAR,[wd]:s.LINEAR_MIPMAP_NEAREST,[Cr]:s.LINEAR_MIPMAP_LINEAR},P={[px]:s.NEVER,[Sx]:s.ALWAYS,[mx]:s.LESS,[jv]:s.LEQUAL,[gx]:s.EQUAL,[yx]:s.GEQUAL,[_x]:s.GREATER,[vx]:s.NOTEQUAL};function et(F,T){if(T.type===ha&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Hi||T.magFilter===wd||T.magFilter===yc||T.magFilter===Cr||T.minFilter===Hi||T.minFilter===wd||T.minFilter===yc||T.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,St[T.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,St[T.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,St[T.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,wt[T.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,wt[T.minFilter]),T.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,P[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Di||T.minFilter!==yc&&T.minFilter!==Cr||T.type===ha&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");s.texParameterf(F,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Mt(F,T){let at=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",H));const mt=T.source;let bt=y.get(mt);bt===void 0&&(bt={},y.set(mt,bt));const dt=lt(T);if(dt!==F.__cacheKey){bt[dt]===void 0&&(bt[dt]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,at=!0),bt[dt].usedTimes++;const Zt=bt[F.__cacheKey];Zt!==void 0&&(bt[F.__cacheKey].usedTimes--,Zt.usedTimes===0&&A(T)),F.__cacheKey=dt,F.__webglTexture=bt[dt].texture}return at}function j(F,T,at){return Math.floor(Math.floor(F/at)/T)}function ft(F,T,at,mt){const dt=F.updateRanges;if(dt.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,at,mt,T.data);else{dt.sort((xt,Lt)=>xt.start-Lt.start);let Zt=0;for(let xt=1;xt<dt.length;xt++){const Lt=dt[Zt],$t=dt[xt],Wt=Lt.start+Lt.count,Nt=j($t.start,T.width,4),se=j(Lt.start,T.width,4);$t.start<=Wt+1&&Nt===se&&j($t.start+$t.count-1,T.width,4)===Nt?Lt.count=Math.max(Lt.count,$t.start+$t.count-Lt.start):(++Zt,dt[Zt]=$t)}dt.length=Zt+1;const Ut=s.getParameter(s.UNPACK_ROW_LENGTH),qt=s.getParameter(s.UNPACK_SKIP_PIXELS),Kt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let xt=0,Lt=dt.length;xt<Lt;xt++){const $t=dt[xt],Wt=Math.floor($t.start/4),Nt=Math.ceil($t.count/4),se=Wt%T.width,W=Math.floor(Wt/T.width),Ot=Nt,Tt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,se),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,se,W,Ot,Tt,at,mt,T.data)}F.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ut),s.pixelStorei(s.UNPACK_SKIP_PIXELS,qt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Kt)}}function At(F,T,at){let mt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=s.TEXTURE_3D);const bt=Mt(F,T),dt=T.source;i.bindTexture(mt,F.__webglTexture,s.TEXTURE0+at);const Zt=r.get(dt);if(dt.version!==Zt.__version||bt===!0){i.activeTexture(s.TEXTURE0+at);const Ut=Ne.getPrimaries(Ne.workingColorSpace),qt=T.colorSpace===Ya?null:Ne.getPrimaries(T.colorSpace),Kt=T.colorSpace===Ya||Ut===qt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let xt=b(T.image,!1,l.maxTextureSize);xt=re(T,xt);const Lt=c.convert(T.format,T.colorSpace),$t=c.convert(T.type);let Wt=L(T.internalFormat,Lt,$t,T.colorSpace,T.isVideoTexture);et(mt,T);let Nt;const se=T.mipmaps,W=T.isVideoTexture!==!0,Ot=Zt.__version===void 0||bt===!0,Tt=dt.dataReady,Ht=k(T,xt);if(T.isDepthTexture)Wt=D(T.format===Jo,T.type),Ot&&(W?i.texStorage2D(s.TEXTURE_2D,1,Wt,xt.width,xt.height):i.texImage2D(s.TEXTURE_2D,0,Wt,xt.width,xt.height,0,Lt,$t,null));else if(T.isDataTexture)if(se.length>0){W&&Ot&&i.texStorage2D(s.TEXTURE_2D,Ht,Wt,se[0].width,se[0].height);for(let Rt=0,_t=se.length;Rt<_t;Rt++)Nt=se[Rt],W?Tt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Nt.width,Nt.height,Lt,$t,Nt.data):i.texImage2D(s.TEXTURE_2D,Rt,Wt,Nt.width,Nt.height,0,Lt,$t,Nt.data);T.generateMipmaps=!1}else W?(Ot&&i.texStorage2D(s.TEXTURE_2D,Ht,Wt,xt.width,xt.height),Tt&&ft(T,xt,Lt,$t)):i.texImage2D(s.TEXTURE_2D,0,Wt,xt.width,xt.height,0,Lt,$t,xt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&Ot&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,Wt,se[0].width,se[0].height,xt.depth);for(let Rt=0,_t=se.length;Rt<_t;Rt++)if(Nt=se[Rt],T.format!==wi)if(Lt!==null)if(W){if(Tt)if(T.layerUpdates.size>0){const Gt=tv(Nt.width,Nt.height,T.format,T.type);for(const oe of T.layerUpdates){const ze=Nt.data.subarray(oe*Gt/Nt.data.BYTES_PER_ELEMENT,(oe+1)*Gt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,oe,Nt.width,Nt.height,1,Lt,ze)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,Nt.width,Nt.height,xt.depth,Lt,Nt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Rt,Wt,Nt.width,Nt.height,xt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Tt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,Nt.width,Nt.height,xt.depth,Lt,$t,Nt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Rt,Wt,Nt.width,Nt.height,xt.depth,0,Lt,$t,Nt.data)}else{W&&Ot&&i.texStorage2D(s.TEXTURE_2D,Ht,Wt,se[0].width,se[0].height);for(let Rt=0,_t=se.length;Rt<_t;Rt++)Nt=se[Rt],T.format!==wi?Lt!==null?W?Tt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Rt,0,0,Nt.width,Nt.height,Lt,Nt.data):i.compressedTexImage2D(s.TEXTURE_2D,Rt,Wt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Tt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Nt.width,Nt.height,Lt,$t,Nt.data):i.texImage2D(s.TEXTURE_2D,Rt,Wt,Nt.width,Nt.height,0,Lt,$t,Nt.data)}else if(T.isDataArrayTexture)if(W){if(Ot&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,Wt,xt.width,xt.height,xt.depth),Tt)if(T.layerUpdates.size>0){const Rt=tv(xt.width,xt.height,T.format,T.type);for(const _t of T.layerUpdates){const Gt=xt.data.subarray(_t*Rt/xt.data.BYTES_PER_ELEMENT,(_t+1)*Rt/xt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,xt.width,xt.height,1,Lt,$t,Gt)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Lt,$t,xt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Wt,xt.width,xt.height,xt.depth,0,Lt,$t,xt.data);else if(T.isData3DTexture)W?(Ot&&i.texStorage3D(s.TEXTURE_3D,Ht,Wt,xt.width,xt.height,xt.depth),Tt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Lt,$t,xt.data)):i.texImage3D(s.TEXTURE_3D,0,Wt,xt.width,xt.height,xt.depth,0,Lt,$t,xt.data);else if(T.isFramebufferTexture){if(Ot)if(W)i.texStorage2D(s.TEXTURE_2D,Ht,Wt,xt.width,xt.height);else{let Rt=xt.width,_t=xt.height;for(let Gt=0;Gt<Ht;Gt++)i.texImage2D(s.TEXTURE_2D,Gt,Wt,Rt,_t,0,Lt,$t,null),Rt>>=1,_t>>=1}}else if(se.length>0){if(W&&Ot){const Rt=Ze(se[0]);i.texStorage2D(s.TEXTURE_2D,Ht,Wt,Rt.width,Rt.height)}for(let Rt=0,_t=se.length;Rt<_t;Rt++)Nt=se[Rt],W?Tt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Lt,$t,Nt):i.texImage2D(s.TEXTURE_2D,Rt,Wt,Lt,$t,Nt);T.generateMipmaps=!1}else if(W){if(Ot){const Rt=Ze(xt);i.texStorage2D(s.TEXTURE_2D,Ht,Wt,Rt.width,Rt.height)}Tt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Lt,$t,xt)}else i.texImage2D(s.TEXTURE_2D,0,Wt,Lt,$t,xt);S(T)&&g(mt),Zt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function gt(F,T,at){if(T.image.length!==6)return;const mt=Mt(F,T),bt=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+at);const dt=r.get(bt);if(bt.version!==dt.__version||mt===!0){i.activeTexture(s.TEXTURE0+at);const Zt=Ne.getPrimaries(Ne.workingColorSpace),Ut=T.colorSpace===Ya?null:Ne.getPrimaries(T.colorSpace),qt=T.colorSpace===Ya||Zt===Ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const Kt=T.isCompressedTexture||T.image[0].isCompressedTexture,xt=T.image[0]&&T.image[0].isDataTexture,Lt=[];for(let _t=0;_t<6;_t++)!Kt&&!xt?Lt[_t]=b(T.image[_t],!0,l.maxCubemapSize):Lt[_t]=xt?T.image[_t].image:T.image[_t],Lt[_t]=re(T,Lt[_t]);const $t=Lt[0],Wt=c.convert(T.format,T.colorSpace),Nt=c.convert(T.type),se=L(T.internalFormat,Wt,Nt,T.colorSpace),W=T.isVideoTexture!==!0,Ot=dt.__version===void 0||mt===!0,Tt=bt.dataReady;let Ht=k(T,$t);et(s.TEXTURE_CUBE_MAP,T);let Rt;if(Kt){W&&Ot&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ht,se,$t.width,$t.height);for(let _t=0;_t<6;_t++){Rt=Lt[_t].mipmaps;for(let Gt=0;Gt<Rt.length;Gt++){const oe=Rt[Gt];T.format!==wi?Wt!==null?W?Tt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,0,0,oe.width,oe.height,Wt,oe.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,se,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Tt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,0,0,oe.width,oe.height,Wt,Nt,oe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,se,oe.width,oe.height,0,Wt,Nt,oe.data)}}}else{if(Rt=T.mipmaps,W&&Ot){Rt.length>0&&Ht++;const _t=Ze(Lt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ht,se,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(xt){W?Tt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Lt[_t].width,Lt[_t].height,Wt,Nt,Lt[_t].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Lt[_t].width,Lt[_t].height,0,Wt,Nt,Lt[_t].data);for(let Gt=0;Gt<Rt.length;Gt++){const ze=Rt[Gt].image[_t].image;W?Tt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,0,0,ze.width,ze.height,Wt,Nt,ze.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,se,ze.width,ze.height,0,Wt,Nt,ze.data)}}else{W?Tt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Wt,Nt,Lt[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Wt,Nt,Lt[_t]);for(let Gt=0;Gt<Rt.length;Gt++){const oe=Rt[Gt];W?Tt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,0,0,Wt,Nt,oe.image[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,se,Wt,Nt,oe.image[_t])}}}S(T)&&g(s.TEXTURE_CUBE_MAP),dt.__version=bt.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function Dt(F,T,at,mt,bt,dt){const Zt=c.convert(at.format,at.colorSpace),Ut=c.convert(at.type),qt=L(at.internalFormat,Zt,Ut,at.colorSpace),Kt=r.get(T),xt=r.get(at);if(xt.__renderTarget=T,!Kt.__hasExternalTextures){const Lt=Math.max(1,T.width>>dt),$t=Math.max(1,T.height>>dt);bt===s.TEXTURE_3D||bt===s.TEXTURE_2D_ARRAY?i.texImage3D(bt,dt,qt,Lt,$t,T.depth,0,Zt,Ut,null):i.texImage2D(bt,dt,qt,Lt,$t,0,Zt,Ut,null)}i.bindFramebuffer(s.FRAMEBUFFER,F),ie(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,bt,xt.__webglTexture,0,Pt(T)):(bt===s.TEXTURE_2D||bt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,mt,bt,xt.__webglTexture,dt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(F,T,at){if(s.bindRenderbuffer(s.RENDERBUFFER,F),T.depthBuffer){const mt=T.depthTexture,bt=mt&&mt.isDepthTexture?mt.type:null,dt=D(T.stencilBuffer,bt),Zt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ut=Pt(T);ie(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut,dt,T.width,T.height):at?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,dt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,dt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Zt,s.RENDERBUFFER,F)}else{const mt=T.textures;for(let bt=0;bt<mt.length;bt++){const dt=mt[bt],Zt=c.convert(dt.format,dt.colorSpace),Ut=c.convert(dt.type),qt=L(dt.internalFormat,Zt,Ut,dt.colorSpace),Kt=Pt(T);at&&ie(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,qt,T.width,T.height):ie(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt,qt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,qt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Vt(F,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=r.get(T.depthTexture);mt.__renderTarget=T,(!mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ut(T.depthTexture,0);const bt=mt.__webglTexture,dt=Pt(T);if(T.depthTexture.format===Qo)ie(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,bt,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,bt,0);else if(T.depthTexture.format===Jo)ie(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,bt,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function yt(F){const T=r.get(F),at=F.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==F.depthTexture){const mt=F.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),mt){const bt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,mt.removeEventListener("dispose",bt)};mt.addEventListener("dispose",bt),T.__depthDisposeCallback=bt}T.__boundDepthTexture=mt}if(F.depthTexture&&!T.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");const mt=F.texture.mipmaps;mt&&mt.length>0?Vt(T.__webglFramebuffer[0],F):Vt(T.__webglFramebuffer,F)}else if(at){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]===void 0)T.__webglDepthbuffer[mt]=s.createRenderbuffer(),Xt(T.__webglDepthbuffer[mt],F,!1);else{const bt=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[mt];s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,dt)}}else{const mt=F.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Xt(T.__webglDepthbuffer,F,!1);else{const bt=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,dt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(F,T,at){const mt=r.get(F);T!==void 0&&Dt(mt.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),at!==void 0&&yt(F)}function Bt(F){const T=F.texture,at=r.get(F),mt=r.get(T);F.addEventListener("dispose",N);const bt=F.textures,dt=F.isWebGLCubeRenderTarget===!0,Zt=bt.length>1;if(Zt||(mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture()),mt.__version=T.version,f.memory.textures++),dt){at.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer[Ut]=[];for(let qt=0;qt<T.mipmaps.length;qt++)at.__webglFramebuffer[Ut][qt]=s.createFramebuffer()}else at.__webglFramebuffer[Ut]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)at.__webglFramebuffer[Ut]=s.createFramebuffer()}else at.__webglFramebuffer=s.createFramebuffer();if(Zt)for(let Ut=0,qt=bt.length;Ut<qt;Ut++){const Kt=r.get(bt[Ut]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=s.createTexture(),f.memory.textures++)}if(F.samples>0&&ie(F)===!1){at.__webglMultisampledFramebuffer=s.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Ut=0;Ut<bt.length;Ut++){const qt=bt[Ut];at.__webglColorRenderbuffer[Ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,at.__webglColorRenderbuffer[Ut]);const Kt=c.convert(qt.format,qt.colorSpace),xt=c.convert(qt.type),Lt=L(qt.internalFormat,Kt,xt,qt.colorSpace,F.isXRRenderTarget===!0),$t=Pt(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,Lt,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,at.__webglColorRenderbuffer[Ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(at.__webglDepthRenderbuffer=s.createRenderbuffer(),Xt(at.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){i.bindTexture(s.TEXTURE_CUBE_MAP,mt.__webglTexture),et(s.TEXTURE_CUBE_MAP,T);for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let qt=0;qt<T.mipmaps.length;qt++)Dt(at.__webglFramebuffer[Ut][qt],F,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,qt);else Dt(at.__webglFramebuffer[Ut],F,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(T)&&g(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Ut=0,qt=bt.length;Ut<qt;Ut++){const Kt=bt[Ut],xt=r.get(Kt);i.bindTexture(s.TEXTURE_2D,xt.__webglTexture),et(s.TEXTURE_2D,Kt),Dt(at.__webglFramebuffer,F,Kt,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,0),S(Kt)&&g(s.TEXTURE_2D)}i.unbindTexture()}else{let Ut=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ut=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ut,mt.__webglTexture),et(Ut,T),T.mipmaps&&T.mipmaps.length>0)for(let qt=0;qt<T.mipmaps.length;qt++)Dt(at.__webglFramebuffer[qt],F,T,s.COLOR_ATTACHMENT0,Ut,qt);else Dt(at.__webglFramebuffer,F,T,s.COLOR_ATTACHMENT0,Ut,0);S(T)&&g(Ut),i.unbindTexture()}F.depthBuffer&&yt(F)}function B(F){const T=F.textures;for(let at=0,mt=T.length;at<mt;at++){const bt=T[at];if(S(bt)){const dt=C(F),Zt=r.get(bt).__webglTexture;i.bindTexture(dt,Zt),g(dt),i.unbindTexture()}}}const fe=[],Jt=[];function ue(F){if(F.samples>0){if(ie(F)===!1){const T=F.textures,at=F.width,mt=F.height;let bt=s.COLOR_BUFFER_BIT;const dt=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Zt=r.get(F),Ut=T.length>1;if(Ut)for(let Kt=0;Kt<T.length;Kt++)i.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const qt=F.texture.mipmaps;qt&&qt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let Kt=0;Kt<T.length;Kt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(bt|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(bt|=s.STENCIL_BUFFER_BIT)),Ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Zt.__webglColorRenderbuffer[Kt]);const xt=r.get(T[Kt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xt,0)}s.blitFramebuffer(0,0,at,mt,0,0,at,mt,bt,s.NEAREST),p===!0&&(fe.length=0,Jt.length=0,fe.push(s.COLOR_ATTACHMENT0+Kt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(fe.push(dt),Jt.push(dt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Jt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ut)for(let Kt=0;Kt<T.length;Kt++){i.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.RENDERBUFFER,Zt.__webglColorRenderbuffer[Kt]);const xt=r.get(T[Kt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.TEXTURE_2D,xt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const T=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Pt(F){return Math.min(l.maxSamples,F.samples)}function ie(F){const T=r.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function jt(F){const T=f.render.frame;v.get(F)!==T&&(v.set(F,T),F.update())}function re(F,T){const at=F.colorSpace,mt=F.format,bt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||at!==Bs&&at!==Ya&&(Ne.getTransfer(at)===ke?(mt!==wi||bt!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),T}function Ze(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(m.width=F.naturalWidth||F.width,m.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(m.width=F.displayWidth,m.height=F.displayHeight):(m.width=F.width,m.height=F.height),m}this.allocateTextureUnit=tt,this.resetTextureUnits=$,this.setTexture2D=ut,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=Z,this.rebindTextures=Et,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=ie}function FA(s,t){function i(r,l=Ya){let c;const f=Ne.getTransfer(l);if(r===Gi)return s.UNSIGNED_BYTE;if(r===up)return s.UNSIGNED_SHORT_4_4_4_4;if(r===fp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Vv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Hv)return s.BYTE;if(r===Gv)return s.SHORT;if(r===Zo)return s.UNSIGNED_SHORT;if(r===cp)return s.INT;if(r===Dr)return s.UNSIGNED_INT;if(r===ha)return s.FLOAT;if(r===il)return s.HALF_FLOAT;if(r===kv)return s.ALPHA;if(r===Xv)return s.RGB;if(r===wi)return s.RGBA;if(r===Qo)return s.DEPTH_COMPONENT;if(r===Jo)return s.DEPTH_STENCIL;if(r===Wv)return s.RED;if(r===dp)return s.RED_INTEGER;if(r===qv)return s.RG;if(r===hp)return s.RG_INTEGER;if(r===pp)return s.RGBA_INTEGER;if(r===Yc||r===jc||r===Zc||r===Kc)if(f===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Eh||r===bh||r===Th||r===Ah)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Eh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Th)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ah)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rh||r===wh||r===Ch)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Rh||r===wh)return f===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ch)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===zh||r===Ih||r===Bh||r===Fh||r===Hh||r===Gh||r===Vh||r===kh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Dh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Oh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ph)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ih)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qc||r===Xh||r===Wh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Qc)return f===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Wh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Yv||r===qh||r===Yh||r===jh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Qc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===qh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ko?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const HA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GA=`
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

}`;class VA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Gn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ga({vertexShader:HA,fragmentShader:GA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new hn(new ol(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kA extends Hs{constructor(t,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",p=1,m=null,v=null,_=null,y=null,x=null,E=null;const b=new VA,S=i.getContextAttributes();let g=null,C=null;const L=[],D=[],k=new de;let H=null;const N=new Kn;N.viewport=new We;const V=new Kn;V.viewport=new We;const A=[N,V],R=new cE;let I=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ft=L[j];return ft===void 0&&(ft=new Qd,L[j]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(j){let ft=L[j];return ft===void 0&&(ft=new Qd,L[j]=ft),ft.getGripSpace()},this.getHand=function(j){let ft=L[j];return ft===void 0&&(ft=new Qd,L[j]=ft),ft.getHandSpace()};function tt(j){const ft=D.indexOf(j.inputSource);if(ft===-1)return;const At=L[ft];At!==void 0&&(At.update(j.inputSource,j.frame,m||f),At.dispatchEvent({type:j.type,data:j.inputSource}))}function lt(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",lt),l.removeEventListener("inputsourceschange",ut);for(let j=0;j<L.length;j++){const ft=D[j];ft!==null&&(D[j]=null,L[j].disconnect(ft))}I=null,$=null,b.reset(),t.setRenderTarget(g),x=null,y=null,_=null,l=null,C=null,Mt.stop(),r.isPresenting=!1,t.setPixelRatio(H),t.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){c=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){h=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(j){m=j},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",lt),l.addEventListener("inputsourceschange",ut),S.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,gt=null,Dt=null;S.depth&&(Dt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=S.stencil?Jo:Qo,gt=S.stencil?Ko:Dr);const Xt={colorFormat:i.RGBA8,depthFormat:Dt,scaleFactor:c};_=new XRWebGLBinding(l,i),y=_.createProjectionLayer(Xt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),C=new Ur(y.textureWidth,y.textureHeight,{format:wi,type:Gi,depthTexture:new ry(y.textureWidth,y.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const At={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new Ur(x.framebufferWidth,x.framebufferHeight,{format:wi,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),Mt.setContext(l),Mt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ut(j){for(let ft=0;ft<j.removed.length;ft++){const At=j.removed[ft],gt=D.indexOf(At);gt>=0&&(D[gt]=null,L[gt].disconnect(At))}for(let ft=0;ft<j.added.length;ft++){const At=j.added[ft];let gt=D.indexOf(At);if(gt===-1){for(let Xt=0;Xt<L.length;Xt++)if(Xt>=D.length){D.push(At),gt=Xt;break}else if(D[Xt]===null){D[Xt]=At,gt=Xt;break}if(gt===-1)break}const Dt=L[gt];Dt&&Dt.connect(At)}}const z=new Q,q=new Q;function Z(j,ft,At){z.setFromMatrixPosition(ft.matrixWorld),q.setFromMatrixPosition(At.matrixWorld);const gt=z.distanceTo(q),Dt=ft.projectionMatrix.elements,Xt=At.projectionMatrix.elements,Vt=Dt[14]/(Dt[10]-1),yt=Dt[14]/(Dt[10]+1),Et=(Dt[9]+1)/Dt[5],Bt=(Dt[9]-1)/Dt[5],B=(Dt[8]-1)/Dt[0],fe=(Xt[8]+1)/Xt[0],Jt=Vt*B,ue=Vt*fe,Pt=gt/(-B+fe),ie=Pt*-B;if(ft.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ie),j.translateZ(Pt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Dt[10]===-1)j.projectionMatrix.copy(ft.projectionMatrix),j.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const jt=Vt+Pt,re=yt+Pt,Ze=Jt-ie,F=ue+(gt-ie),T=Et*yt/re*jt,at=Bt*yt/re*jt;j.projectionMatrix.makePerspective(Ze,F,T,at,jt,re),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function St(j,ft){ft===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ft.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let ft=j.near,At=j.far;b.texture!==null&&(b.depthNear>0&&(ft=b.depthNear),b.depthFar>0&&(At=b.depthFar)),R.near=V.near=N.near=ft,R.far=V.far=N.far=At,(I!==R.near||$!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),I=R.near,$=R.far),N.layers.mask=j.layers.mask|2,V.layers.mask=j.layers.mask|4,R.layers.mask=N.layers.mask|V.layers.mask;const gt=j.parent,Dt=R.cameras;St(R,gt);for(let Xt=0;Xt<Dt.length;Xt++)St(Dt[Xt],gt);Dt.length===2?Z(R,N,V):R.projectionMatrix.copy(N.projectionMatrix),wt(j,R,gt)};function wt(j,ft,At){At===null?j.matrix.copy(ft.matrixWorld):(j.matrix.copy(At.matrixWorld),j.matrix.invert(),j.matrix.multiply(ft.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ft.projectionMatrix),j.projectionMatrixInverse.copy(ft.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Kh*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&x===null))return p},this.setFoveation=function(j){p=j,y!==null&&(y.fixedFoveation=j),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=j)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(R)};let P=null;function et(j,ft){if(v=ft.getViewerPose(m||f),E=ft,v!==null){const At=v.views;x!==null&&(t.setRenderTargetFramebuffer(C,x.framebuffer),t.setRenderTarget(C));let gt=!1;At.length!==R.cameras.length&&(R.cameras.length=0,gt=!0);for(let Vt=0;Vt<At.length;Vt++){const yt=At[Vt];let Et=null;if(x!==null)Et=x.getViewport(yt);else{const B=_.getViewSubImage(y,yt);Et=B.viewport,Vt===0&&(t.setRenderTargetTextures(C,B.colorTexture,B.depthStencilTexture),t.setRenderTarget(C))}let Bt=A[Vt];Bt===void 0&&(Bt=new Kn,Bt.layers.enable(Vt),Bt.viewport=new We,A[Vt]=Bt),Bt.matrix.fromArray(yt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(yt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Et.x,Et.y,Et.width,Et.height),Vt===0&&(R.matrix.copy(Bt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),gt===!0&&R.cameras.push(Bt)}const Dt=l.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Vt=_.getDepthInformation(At[0]);Vt&&Vt.isValid&&Vt.texture&&b.init(t,Vt,l.renderState)}}for(let At=0;At<L.length;At++){const gt=D[At],Dt=L[At];gt!==null&&Dt!==void 0&&Dt.update(gt,ft,m||f)}P&&P(j,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),E=null}const Mt=new uy;Mt.setAnimationLoop(et),this.setAnimationLoop=function(j){P=j},this.dispose=function(){}}}const xr=new Vi,XA=new je;function WA(s,t){function i(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,ty(s)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function l(S,g,C,L,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(S,g):g.isMeshToonMaterial?(c(S,g),_(S,g)):g.isMeshPhongMaterial?(c(S,g),v(S,g)):g.isMeshStandardMaterial?(c(S,g),y(S,g),g.isMeshPhysicalMaterial&&x(S,g,D)):g.isMeshMatcapMaterial?(c(S,g),E(S,g)):g.isMeshDepthMaterial?c(S,g):g.isMeshDistanceMaterial?(c(S,g),b(S,g)):g.isMeshNormalMaterial?c(S,g):g.isLineBasicMaterial?(f(S,g),g.isLineDashedMaterial&&h(S,g)):g.isPointsMaterial?p(S,g,C,L):g.isSpriteMaterial?m(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,i(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===Qn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,i(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===Qn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,i(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,i(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const C=t.get(g),L=C.envMap,D=C.envMapRotation;L&&(S.envMap.value=L,xr.copy(D),xr.x*=-1,xr.y*=-1,xr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),S.envMapRotation.value.setFromMatrix4(XA.makeRotationFromEuler(xr)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,S.aoMapTransform))}function f(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform))}function h(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function p(S,g,C,L){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*C,S.scale.value=L*.5,g.map&&(S.map.value=g.map,i(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function m(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function v(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function _(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function y(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function x(S,g,C){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=C.texture,S.transmissionSamplerSize.value.set(C.width,C.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,g){g.matcap&&(S.matcap.value=g.matcap)}function b(S,g){const C=t.get(g).light;S.referencePosition.value.setFromMatrixPosition(C.matrixWorld),S.nearDistance.value=C.shadow.camera.near,S.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function qA(s,t,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,L){const D=L.program;r.uniformBlockBinding(C,D)}function m(C,L){let D=l[C.id];D===void 0&&(E(C),D=v(C),l[C.id]=D,C.addEventListener("dispose",S));const k=L.program;r.updateUBOMapping(C,k);const H=t.render.frame;c[C.id]!==H&&(y(C),c[C.id]=H)}function v(C){const L=_();C.__bindingPointIndex=L;const D=s.createBuffer(),k=C.__size,H=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,k,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,D),D}function _(){for(let C=0;C<h;C++)if(f.indexOf(C)===-1)return f.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(C){const L=l[C.id],D=C.uniforms,k=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let H=0,N=D.length;H<N;H++){const V=Array.isArray(D[H])?D[H]:[D[H]];for(let A=0,R=V.length;A<R;A++){const I=V[A];if(x(I,H,A,k)===!0){const $=I.__offset,tt=Array.isArray(I.value)?I.value:[I.value];let lt=0;for(let ut=0;ut<tt.length;ut++){const z=tt[ut],q=b(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,$+lt,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,lt),lt+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(C,L,D,k){const H=C.value,N=L+"_"+D;if(k[N]===void 0)return typeof H=="number"||typeof H=="boolean"?k[N]=H:k[N]=H.clone(),!0;{const V=k[N];if(typeof H=="number"||typeof H=="boolean"){if(V!==H)return k[N]=H,!0}else if(V.equals(H)===!1)return V.copy(H),!0}return!1}function E(C){const L=C.uniforms;let D=0;const k=16;for(let N=0,V=L.length;N<V;N++){const A=Array.isArray(L[N])?L[N]:[L[N]];for(let R=0,I=A.length;R<I;R++){const $=A[R],tt=Array.isArray($.value)?$.value:[$.value];for(let lt=0,ut=tt.length;lt<ut;lt++){const z=tt[lt],q=b(z),Z=D%k,St=Z%q.boundary,wt=Z+St;D+=St,wt!==0&&k-wt<q.storage&&(D+=k-wt),$.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=D,D+=q.storage}}}const H=D%k;return H>0&&(D+=k-H),C.__size=D,C.__cache={},this}function b(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),L}function S(C){const L=C.target;L.removeEventListener("dispose",S);const D=f.indexOf(L.__bindingPointIndex);f.splice(D,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function g(){for(const C in l)s.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:p,update:m,dispose:g}}class my{constructor(t={}){const{canvas:i=xx(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=f;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,g=null;const C=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let k=!1;this._outputColorSpace=oi;let H=0,N=0,V=null,A=-1,R=null;const I=new We,$=new We;let tt=null;const lt=new xe(0);let ut=0,z=i.width,q=i.height,Z=1,St=null,wt=null;const P=new We(0,0,z,q),et=new We(0,0,z,q);let Mt=!1;const j=new yp;let ft=!1,At=!1;const gt=new je,Dt=new je,Xt=new Q,Vt=new We,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Bt(){return V===null?Z:1}let B=r;function fe(U,K){return i.getContext(U,K)}try{const U={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${op}`),i.addEventListener("webglcontextlost",Ht,!1),i.addEventListener("webglcontextrestored",Rt,!1),i.addEventListener("webglcontextcreationerror",_t,!1),B===null){const K="webgl2";if(B=fe(K,U),B===null)throw fe(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let Jt,ue,Pt,ie,jt,re,Ze,F,T,at,mt,bt,dt,Zt,Ut,qt,Kt,xt,Lt,$t,Wt,Nt,se,W;function Ot(){Jt=new iT(B),Jt.init(),Nt=new FA(B,Jt),ue=new Kb(B,Jt,t,Nt),Pt=new IA(B,Jt),ue.reverseDepthBuffer&&y&&Pt.buffers.depth.setReversed(!0),ie=new sT(B),jt=new bA,re=new BA(B,Jt,Pt,jt,ue,Nt,ie),Ze=new Jb(D),F=new nT(D),T=new dE(B),se=new jb(B,T),at=new aT(B,T,ie,se),mt=new lT(B,at,T,ie),Lt=new oT(B,ue,re),qt=new Qb(jt),bt=new EA(D,Ze,F,Jt,ue,se,qt),dt=new WA(D,jt),Zt=new AA,Ut=new LA(Jt),xt=new Yb(D,Ze,F,Pt,mt,x,p),Kt=new PA(D,mt,ue),W=new qA(B,ie,ue,Pt),$t=new Zb(B,Jt,ie),Wt=new rT(B,Jt,ie),ie.programs=bt.programs,D.capabilities=ue,D.extensions=Jt,D.properties=jt,D.renderLists=Zt,D.shadowMap=Kt,D.state=Pt,D.info=ie}Ot();const Tt=new kA(D,B);this.xr=Tt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const U=Jt.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Jt.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(U){U!==void 0&&(Z=U,this.setSize(z,q,!1))},this.getSize=function(U){return U.set(z,q)},this.setSize=function(U,K,st=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=U,q=K,i.width=Math.floor(U*Z),i.height=Math.floor(K*Z),st===!0&&(i.style.width=U+"px",i.style.height=K+"px"),this.setViewport(0,0,U,K)},this.getDrawingBufferSize=function(U){return U.set(z*Z,q*Z).floor()},this.setDrawingBufferSize=function(U,K,st){z=U,q=K,Z=st,i.width=Math.floor(U*st),i.height=Math.floor(K*st),this.setViewport(0,0,U,K)},this.getCurrentViewport=function(U){return U.copy(I)},this.getViewport=function(U){return U.copy(P)},this.setViewport=function(U,K,st,ot){U.isVector4?P.set(U.x,U.y,U.z,U.w):P.set(U,K,st,ot),Pt.viewport(I.copy(P).multiplyScalar(Z).round())},this.getScissor=function(U){return U.copy(et)},this.setScissor=function(U,K,st,ot){U.isVector4?et.set(U.x,U.y,U.z,U.w):et.set(U,K,st,ot),Pt.scissor($.copy(et).multiplyScalar(Z).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(U){Pt.setScissorTest(Mt=U)},this.setOpaqueSort=function(U){St=U},this.setTransparentSort=function(U){wt=U},this.getClearColor=function(U){return U.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(U=!0,K=!0,st=!0){let ot=0;if(U){let Y=!1;if(V!==null){const Ct=V.texture.format;Y=Ct===pp||Ct===hp||Ct===dp}if(Y){const Ct=V.texture.type,zt=Ct===Gi||Ct===Dr||Ct===Zo||Ct===Ko||Ct===up||Ct===fp,kt=xt.getClearColor(),Ft=xt.getClearAlpha(),le=kt.r,ce=kt.g,te=kt.b;zt?(E[0]=le,E[1]=ce,E[2]=te,E[3]=Ft,B.clearBufferuiv(B.COLOR,0,E)):(b[0]=le,b[1]=ce,b[2]=te,b[3]=Ft,B.clearBufferiv(B.COLOR,0,b))}else ot|=B.COLOR_BUFFER_BIT}K&&(ot|=B.DEPTH_BUFFER_BIT),st&&(ot|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ht,!1),i.removeEventListener("webglcontextrestored",Rt,!1),i.removeEventListener("webglcontextcreationerror",_t,!1),xt.dispose(),Zt.dispose(),Ut.dispose(),jt.dispose(),Ze.dispose(),F.dispose(),mt.dispose(),se.dispose(),W.dispose(),bt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",ks),Tt.removeEventListener("sessionend",Xs),Li.stop()};function Ht(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const U=ie.autoReset,K=Kt.enabled,st=Kt.autoUpdate,ot=Kt.needsUpdate,Y=Kt.type;Ot(),ie.autoReset=U,Kt.enabled=K,Kt.autoUpdate=st,Kt.needsUpdate=ot,Kt.type=Y}function _t(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Gt(U){const K=U.target;K.removeEventListener("dispose",Gt),oe(K)}function oe(U){ze(U),jt.remove(U)}function ze(U){const K=jt.get(U).programs;K!==void 0&&(K.forEach(function(st){bt.releaseProgram(st)}),U.isShaderMaterial&&bt.releaseShaderCache(U))}this.renderBufferDirect=function(U,K,st,ot,Y,Ct){K===null&&(K=yt);const zt=Y.isMesh&&Y.matrixWorld.determinant()<0,kt=qs(U,K,st,ot,Y);Pt.setMaterial(ot,zt);let Ft=st.index,le=1;if(ot.wireframe===!0){if(Ft=at.getWireframeAttribute(st),Ft===void 0)return;le=2}const ce=st.drawRange,te=st.attributes.position;let ye=ce.start*le,De=(ce.start+ce.count)*le;Ct!==null&&(ye=Math.max(ye,Ct.start*le),De=Math.min(De,(Ct.start+Ct.count)*le)),Ft!==null?(ye=Math.max(ye,0),De=Math.min(De,Ft.count)):te!=null&&(ye=Math.max(ye,0),De=Math.min(De,te.count));const qe=De-ye;if(qe<0||qe===1/0)return;se.setup(Y,ot,kt,st,Ft);let Ae,_e=$t;if(Ft!==null&&(Ae=T.get(Ft),_e=Wt,_e.setIndex(Ae)),Y.isMesh)ot.wireframe===!0?(Pt.setLineWidth(ot.wireframeLinewidth*Bt()),_e.setMode(B.LINES)):_e.setMode(B.TRIANGLES);else if(Y.isLine){let ne=ot.linewidth;ne===void 0&&(ne=1),Pt.setLineWidth(ne*Bt()),Y.isLineSegments?_e.setMode(B.LINES):Y.isLineLoop?_e.setMode(B.LINE_LOOP):_e.setMode(B.LINE_STRIP)}else Y.isPoints?_e.setMode(B.POINTS):Y.isSprite&&_e.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))_e.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const ne=Y._multiDrawStarts,Ke=Y._multiDrawCounts,Ee=Y._multiDrawCount,Un=Ft?T.get(Ft).bytesPerElement:1,Si=jt.get(ot).currentProgram.getUniforms();for(let zn=0;zn<Ee;zn++)Si.setValue(B,"_gl_DrawID",zn),_e.render(ne[zn]/Un,Ke[zn])}else if(Y.isInstancedMesh)_e.renderInstances(ye,qe,Y.count);else if(st.isInstancedBufferGeometry){const ne=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ke=Math.min(st.instanceCount,ne);_e.renderInstances(ye,qe,Ke)}else _e.render(ye,qe)};function Ce(U,K,st){U.transparent===!0&&U.side===Bi&&U.forceSinglePass===!1?(U.side=Qn,U.needsUpdate=!0,en(U,K,st),U.side=Qa,U.needsUpdate=!0,en(U,K,st),U.side=Bi):en(U,K,st)}this.compile=function(U,K,st=null){st===null&&(st=U),g=Ut.get(st),g.init(K),L.push(g),st.traverseVisible(function(Y){Y.isLight&&Y.layers.test(K.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),U!==st&&U.traverseVisible(function(Y){Y.isLight&&Y.layers.test(K.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const ot=new Set;return U.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ct=Y.material;if(Ct)if(Array.isArray(Ct))for(let zt=0;zt<Ct.length;zt++){const kt=Ct[zt];Ce(kt,st,Y),ot.add(kt)}else Ce(Ct,st,Y),ot.add(Ct)}),g=L.pop(),ot},this.compileAsync=function(U,K,st=null){const ot=this.compile(U,K,st);return new Promise(Y=>{function Ct(){if(ot.forEach(function(zt){jt.get(zt).currentProgram.isReady()&&ot.delete(zt)}),ot.size===0){Y(U);return}setTimeout(Ct,10)}Jt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let xn=null;function vi(U){xn&&xn(U)}function ks(){Li.stop()}function Xs(){Li.start()}const Li=new uy;Li.setAnimationLoop(vi),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(U){xn=U,Tt.setAnimationLoop(U),U===null?Li.stop():Li.start()},Tt.addEventListener("sessionstart",ks),Tt.addEventListener("sessionend",Xs),this.render=function(U,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(K),K=Tt.getCamera()),U.isScene===!0&&U.onBeforeRender(D,U,K,V),g=Ut.get(U,L.length),g.init(K),L.push(g),Dt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),j.setFromProjectionMatrix(Dt),At=this.localClippingEnabled,ft=qt.init(this.clippingPlanes,At),S=Zt.get(U,C.length),S.init(),C.push(S),Tt.enabled===!0&&Tt.isPresenting===!0){const Ct=D.xr.getDepthSensingMesh();Ct!==null&&Ja(Ct,K,-1/0,D.sortObjects)}Ja(U,K,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(St,wt),Et=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,Et&&xt.addToRenderList(S,U),this.info.render.frame++,ft===!0&&qt.beginShadows();const st=g.state.shadowsArray;Kt.render(st,U,K),ft===!0&&qt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=S.opaque,Y=S.transmissive;if(g.setupLights(),K.isArrayCamera){const Ct=K.cameras;if(Y.length>0)for(let zt=0,kt=Ct.length;zt<kt;zt++){const Ft=Ct[zt];Ws(ot,Y,U,Ft)}Et&&xt.render(U);for(let zt=0,kt=Ct.length;zt<kt;zt++){const Ft=Ct[zt];Nr(S,U,Ft,Ft.viewport)}}else Y.length>0&&Ws(ot,Y,U,K),Et&&xt.render(U),Nr(S,U,K);V!==null&&N===0&&(re.updateMultisampleRenderTarget(V),re.updateRenderTargetMipmap(V)),U.isScene===!0&&U.onAfterRender(D,U,K),se.resetDefaultState(),A=-1,R=null,L.pop(),L.length>0?(g=L[L.length-1],ft===!0&&qt.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,C.pop(),C.length>0?S=C[C.length-1]:S=null};function Ja(U,K,st,ot){if(U.visible===!1)return;if(U.layers.test(K.layers)){if(U.isGroup)st=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(K);else if(U.isLight)g.pushLight(U),U.castShadow&&g.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||j.intersectsSprite(U)){ot&&Vt.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Dt);const zt=mt.update(U),kt=U.material;kt.visible&&S.push(U,zt,kt,st,Vt.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||j.intersectsObject(U))){const zt=mt.update(U),kt=U.material;if(ot&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Vt.copy(U.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Vt.copy(zt.boundingSphere.center)),Vt.applyMatrix4(U.matrixWorld).applyMatrix4(Dt)),Array.isArray(kt)){const Ft=zt.groups;for(let le=0,ce=Ft.length;le<ce;le++){const te=Ft[le],ye=kt[te.materialIndex];ye&&ye.visible&&S.push(U,zt,ye,st,Vt.z,te)}}else kt.visible&&S.push(U,zt,kt,st,Vt.z,null)}}const Ct=U.children;for(let zt=0,kt=Ct.length;zt<kt;zt++)Ja(Ct[zt],K,st,ot)}function Nr(U,K,st,ot){const Y=U.opaque,Ct=U.transmissive,zt=U.transparent;g.setupLightsView(st),ft===!0&&qt.setGlobalState(D.clippingPlanes,st),ot&&Pt.viewport(I.copy(ot)),Y.length>0&&$a(Y,K,st),Ct.length>0&&$a(Ct,K,st),zt.length>0&&$a(zt,K,st),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Ws(U,K,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ot.id]===void 0&&(g.state.transmissionRenderTarget[ot.id]=new Ur(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?il:Gi,minFilter:Cr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const Ct=g.state.transmissionRenderTarget[ot.id],zt=ot.viewport||I;Ct.setSize(zt.z*D.transmissionResolutionScale,zt.w*D.transmissionResolutionScale);const kt=D.getRenderTarget(),Ft=D.getActiveCubeFace(),le=D.getActiveMipmapLevel();D.setRenderTarget(Ct),D.getClearColor(lt),ut=D.getClearAlpha(),ut<1&&D.setClearColor(16777215,.5),D.clear(),Et&&xt.render(st);const ce=D.toneMapping;D.toneMapping=Za;const te=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),g.setupLightsView(ot),ft===!0&&qt.setGlobalState(D.clippingPlanes,ot),$a(U,st,ot),re.updateMultisampleRenderTarget(Ct),re.updateRenderTargetMipmap(Ct),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let De=0,qe=K.length;De<qe;De++){const Ae=K[De],_e=Ae.object,ne=Ae.geometry,Ke=Ae.material,Ee=Ae.group;if(Ke.side===Bi&&_e.layers.test(ot.layers)){const Un=Ke.side;Ke.side=Qn,Ke.needsUpdate=!0,yi(_e,st,ot,ne,Ke,Ee),Ke.side=Un,Ke.needsUpdate=!0,ye=!0}}ye===!0&&(re.updateMultisampleRenderTarget(Ct),re.updateRenderTargetMipmap(Ct))}D.setRenderTarget(kt,Ft,le),D.setClearColor(lt,ut),te!==void 0&&(ot.viewport=te),D.toneMapping=ce}function $a(U,K,st){const ot=K.isScene===!0?K.overrideMaterial:null;for(let Y=0,Ct=U.length;Y<Ct;Y++){const zt=U[Y],kt=zt.object,Ft=zt.geometry,le=zt.group;let ce=zt.material;ce.allowOverride===!0&&ot!==null&&(ce=ot),kt.layers.test(st.layers)&&yi(kt,K,st,Ft,ce,le)}}function yi(U,K,st,ot,Y,Ct){U.onBeforeRender(D,K,st,ot,Y,Ct),U.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),Y.onBeforeRender(D,K,st,ot,U,Ct),Y.transparent===!0&&Y.side===Bi&&Y.forceSinglePass===!1?(Y.side=Qn,Y.needsUpdate=!0,D.renderBufferDirect(st,K,ot,Y,U,Ct),Y.side=Qa,Y.needsUpdate=!0,D.renderBufferDirect(st,K,ot,Y,U,Ct),Y.side=Bi):D.renderBufferDirect(st,K,ot,Y,U,Ct),U.onAfterRender(D,K,st,ot,Y,Ct)}function en(U,K,st){K.isScene!==!0&&(K=yt);const ot=jt.get(U),Y=g.state.lights,Ct=g.state.shadowsArray,zt=Y.state.version,kt=bt.getParameters(U,Y.state,Ct,K,st),Ft=bt.getProgramCacheKey(kt);let le=ot.programs;ot.environment=U.isMeshStandardMaterial?K.environment:null,ot.fog=K.fog,ot.envMap=(U.isMeshStandardMaterial?F:Ze).get(U.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&U.envMap===null?K.environmentRotation:U.envMapRotation,le===void 0&&(U.addEventListener("dispose",Gt),le=new Map,ot.programs=le);let ce=le.get(Ft);if(ce!==void 0){if(ot.currentProgram===ce&&ot.lightsStateVersion===zt)return ki(U,kt),ce}else kt.uniforms=bt.getUniforms(U),U.onBeforeCompile(kt,D),ce=bt.acquireProgram(kt,Ft),le.set(Ft,ce),ot.uniforms=kt.uniforms;const te=ot.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(te.clippingPlanes=qt.uniform),ki(U,kt),ot.needsLights=_u(U),ot.lightsStateVersion=zt,ot.needsLights&&(te.ambientLightColor.value=Y.state.ambient,te.lightProbe.value=Y.state.probe,te.directionalLights.value=Y.state.directional,te.directionalLightShadows.value=Y.state.directionalShadow,te.spotLights.value=Y.state.spot,te.spotLightShadows.value=Y.state.spotShadow,te.rectAreaLights.value=Y.state.rectArea,te.ltc_1.value=Y.state.rectAreaLTC1,te.ltc_2.value=Y.state.rectAreaLTC2,te.pointLights.value=Y.state.point,te.pointLightShadows.value=Y.state.pointShadow,te.hemisphereLights.value=Y.state.hemi,te.directionalShadowMap.value=Y.state.directionalShadowMap,te.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,te.spotShadowMap.value=Y.state.spotShadowMap,te.spotLightMatrix.value=Y.state.spotLightMatrix,te.spotLightMap.value=Y.state.spotLightMap,te.pointShadowMap.value=Y.state.pointShadowMap,te.pointShadowMatrix.value=Y.state.pointShadowMatrix),ot.currentProgram=ce,ot.uniformsList=null,ce}function En(U){if(U.uniformsList===null){const K=U.currentProgram.getUniforms();U.uniformsList=Jc.seqWithValue(K.seq,U.uniforms)}return U.uniformsList}function ki(U,K){const st=jt.get(U);st.outputColorSpace=K.outputColorSpace,st.batching=K.batching,st.batchingColor=K.batchingColor,st.instancing=K.instancing,st.instancingColor=K.instancingColor,st.instancingMorph=K.instancingMorph,st.skinning=K.skinning,st.morphTargets=K.morphTargets,st.morphNormals=K.morphNormals,st.morphColors=K.morphColors,st.morphTargetsCount=K.morphTargetsCount,st.numClippingPlanes=K.numClippingPlanes,st.numIntersection=K.numClipIntersection,st.vertexAlphas=K.vertexAlphas,st.vertexTangents=K.vertexTangents,st.toneMapping=K.toneMapping}function qs(U,K,st,ot,Y){K.isScene!==!0&&(K=yt),re.resetTextureUnits();const Ct=K.fog,zt=ot.isMeshStandardMaterial?K.environment:null,kt=V===null?D.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Bs,Ft=(ot.isMeshStandardMaterial?F:Ze).get(ot.envMap||zt),le=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ce=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),te=!!st.morphAttributes.position,ye=!!st.morphAttributes.normal,De=!!st.morphAttributes.color;let qe=Za;ot.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(qe=D.toneMapping);const Ae=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,_e=Ae!==void 0?Ae.length:0,ne=jt.get(ot),Ke=g.state.lights;if(ft===!0&&(At===!0||U!==R)){const nn=U===R&&ot.id===A;qt.setState(ot,U,nn)}let Ee=!1;ot.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Ke.state.version||ne.outputColorSpace!==kt||Y.isBatchedMesh&&ne.batching===!1||!Y.isBatchedMesh&&ne.batching===!0||Y.isBatchedMesh&&ne.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&ne.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&ne.instancing===!1||!Y.isInstancedMesh&&ne.instancing===!0||Y.isSkinnedMesh&&ne.skinning===!1||!Y.isSkinnedMesh&&ne.skinning===!0||Y.isInstancedMesh&&ne.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ne.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ne.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ne.instancingMorph===!1&&Y.morphTexture!==null||ne.envMap!==Ft||ot.fog===!0&&ne.fog!==Ct||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==qt.numPlanes||ne.numIntersection!==qt.numIntersection)||ne.vertexAlphas!==le||ne.vertexTangents!==ce||ne.morphTargets!==te||ne.morphNormals!==ye||ne.morphColors!==De||ne.toneMapping!==qe||ne.morphTargetsCount!==_e)&&(Ee=!0):(Ee=!0,ne.__version=ot.version);let Un=ne.currentProgram;Ee===!0&&(Un=en(ot,K,Y));let Si=!1,zn=!1,yn=!1;const Fe=Un.getUniforms(),In=ne.uniforms;if(Pt.useProgram(Un.program)&&(Si=!0,zn=!0,yn=!0),ot.id!==A&&(A=ot.id,zn=!0),Si||R!==U){Pt.buffers.depth.getReversed()?(gt.copy(U.projectionMatrix),bx(gt),Tx(gt),Fe.setValue(B,"projectionMatrix",gt)):Fe.setValue(B,"projectionMatrix",U.projectionMatrix),Fe.setValue(B,"viewMatrix",U.matrixWorldInverse);const bn=Fe.map.cameraPosition;bn!==void 0&&bn.setValue(B,Xt.setFromMatrixPosition(U.matrixWorld)),ue.logarithmicDepthBuffer&&Fe.setValue(B,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Fe.setValue(B,"isOrthographic",U.isOrthographicCamera===!0),R!==U&&(R=U,zn=!0,yn=!0)}if(Y.isSkinnedMesh){Fe.setOptional(B,Y,"bindMatrix"),Fe.setOptional(B,Y,"bindMatrixInverse");const nn=Y.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Fe.setValue(B,"boneTexture",nn.boneTexture,re))}Y.isBatchedMesh&&(Fe.setOptional(B,Y,"batchingTexture"),Fe.setValue(B,"batchingTexture",Y._matricesTexture,re),Fe.setOptional(B,Y,"batchingIdTexture"),Fe.setValue(B,"batchingIdTexture",Y._indirectTexture,re),Fe.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Fe.setValue(B,"batchingColorTexture",Y._colorsTexture,re));const Ln=st.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Lt.update(Y,st,Un),(zn||ne.receiveShadow!==Y.receiveShadow)&&(ne.receiveShadow=Y.receiveShadow,Fe.setValue(B,"receiveShadow",Y.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(In.envMap.value=Ft,In.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&K.environment!==null&&(In.envMapIntensity.value=K.environmentIntensity),zn&&(Fe.setValue(B,"toneMappingExposure",D.toneMappingExposure),ne.needsLights&&gu(In,yn),Ct&&ot.fog===!0&&dt.refreshFogUniforms(In,Ct),dt.refreshMaterialUniforms(In,ot,Z,q,g.state.transmissionRenderTarget[U.id]),Jc.upload(B,En(ne),In,re)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Jc.upload(B,En(ne),In,re),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Fe.setValue(B,"center",Y.center),Fe.setValue(B,"modelViewMatrix",Y.modelViewMatrix),Fe.setValue(B,"normalMatrix",Y.normalMatrix),Fe.setValue(B,"modelMatrix",Y.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const nn=ot.uniformsGroups;for(let bn=0,Or=nn.length;bn<Or;bn++){const kn=nn[bn];W.update(kn,Un),W.bind(kn,Un)}}return Un}function gu(U,K){U.ambientLightColor.needsUpdate=K,U.lightProbe.needsUpdate=K,U.directionalLights.needsUpdate=K,U.directionalLightShadows.needsUpdate=K,U.pointLights.needsUpdate=K,U.pointLightShadows.needsUpdate=K,U.spotLights.needsUpdate=K,U.spotLightShadows.needsUpdate=K,U.rectAreaLights.needsUpdate=K,U.hemisphereLights.needsUpdate=K}function _u(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(U,K,st){const ot=jt.get(U);ot.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),jt.get(U.texture).__webglTexture=K,jt.get(U.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,K){const st=jt.get(U);st.__webglFramebuffer=K,st.__useDefaultFramebuffer=K===void 0};const cl=B.createFramebuffer();this.setRenderTarget=function(U,K=0,st=0){V=U,H=K,N=st;let ot=!0,Y=null,Ct=!1,zt=!1;if(U){const Ft=jt.get(U);if(Ft.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(B.FRAMEBUFFER,null),ot=!1;else if(Ft.__webglFramebuffer===void 0)re.setupRenderTarget(U);else if(Ft.__hasExternalTextures)re.rebindTextures(U,jt.get(U.texture).__webglTexture,jt.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const te=U.depthTexture;if(Ft.__boundDepthTexture!==te){if(te!==null&&jt.has(te)&&(U.width!==te.image.width||U.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(U)}}const le=U.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(zt=!0);const ce=jt.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(ce[K])?Y=ce[K][st]:Y=ce[K],Ct=!0):U.samples>0&&re.useMultisampledRTT(U)===!1?Y=jt.get(U).__webglMultisampledFramebuffer:Array.isArray(ce)?Y=ce[st]:Y=ce,I.copy(U.viewport),$.copy(U.scissor),tt=U.scissorTest}else I.copy(P).multiplyScalar(Z).floor(),$.copy(et).multiplyScalar(Z).floor(),tt=Mt;if(st!==0&&(Y=cl),Pt.bindFramebuffer(B.FRAMEBUFFER,Y)&&ot&&Pt.drawBuffers(U,Y),Pt.viewport(I),Pt.scissor($),Pt.setScissorTest(tt),Ct){const Ft=jt.get(U.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ft.__webglTexture,st)}else if(zt){const Ft=jt.get(U.texture),le=K;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ft.__webglTexture,st,le)}else if(U!==null&&st!==0){const Ft=jt.get(U.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ft.__webglTexture,st)}A=-1},this.readRenderTargetPixels=function(U,K,st,ot,Y,Ct,zt,kt=0){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=jt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&zt!==void 0&&(Ft=Ft[zt]),Ft){Pt.bindFramebuffer(B.FRAMEBUFFER,Ft);try{const le=U.textures[kt],ce=le.format,te=le.type;if(!ue.textureFormatReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=U.width-ot&&st>=0&&st<=U.height-Y&&(U.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+kt),B.readPixels(K,st,ot,Y,Nt.convert(ce),Nt.convert(te),Ct))}finally{const le=V!==null?jt.get(V).__webglFramebuffer:null;Pt.bindFramebuffer(B.FRAMEBUFFER,le)}}},this.readRenderTargetPixelsAsync=async function(U,K,st,ot,Y,Ct,zt,kt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=jt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&zt!==void 0&&(Ft=Ft[zt]),Ft)if(K>=0&&K<=U.width-ot&&st>=0&&st<=U.height-Y){Pt.bindFramebuffer(B.FRAMEBUFFER,Ft);const le=U.textures[kt],ce=le.format,te=le.type;if(!ue.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ye),B.bufferData(B.PIXEL_PACK_BUFFER,Ct.byteLength,B.STREAM_READ),U.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+kt),B.readPixels(K,st,ot,Y,Nt.convert(ce),Nt.convert(te),0);const De=V!==null?jt.get(V).__webglFramebuffer:null;Pt.bindFramebuffer(B.FRAMEBUFFER,De);const qe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ex(B,qe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ye),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ct),B.deleteBuffer(ye),B.deleteSync(qe),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,K=null,st=0){const ot=Math.pow(2,-st),Y=Math.floor(U.image.width*ot),Ct=Math.floor(U.image.height*ot),zt=K!==null?K.x:0,kt=K!==null?K.y:0;re.setTexture2D(U,0),B.copyTexSubImage2D(B.TEXTURE_2D,st,0,0,zt,kt,Y,Ct),Pt.unbindTexture()};const tr=B.createFramebuffer(),Ys=B.createFramebuffer();this.copyTextureToTexture=function(U,K,st=null,ot=null,Y=0,Ct=null){Ct===null&&(Y!==0?(Ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ct=Y,Y=0):Ct=0);let zt,kt,Ft,le,ce,te,ye,De,qe;const Ae=U.isCompressedTexture?U.mipmaps[Ct]:U.image;if(st!==null)zt=st.max.x-st.min.x,kt=st.max.y-st.min.y,Ft=st.isBox3?st.max.z-st.min.z:1,le=st.min.x,ce=st.min.y,te=st.isBox3?st.min.z:0;else{const Ln=Math.pow(2,-Y);zt=Math.floor(Ae.width*Ln),kt=Math.floor(Ae.height*Ln),U.isDataArrayTexture?Ft=Ae.depth:U.isData3DTexture?Ft=Math.floor(Ae.depth*Ln):Ft=1,le=0,ce=0,te=0}ot!==null?(ye=ot.x,De=ot.y,qe=ot.z):(ye=0,De=0,qe=0);const _e=Nt.convert(K.format),ne=Nt.convert(K.type);let Ke;K.isData3DTexture?(re.setTexture3D(K,0),Ke=B.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(re.setTexture2DArray(K,0),Ke=B.TEXTURE_2D_ARRAY):(re.setTexture2D(K,0),Ke=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);const Ee=B.getParameter(B.UNPACK_ROW_LENGTH),Un=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Si=B.getParameter(B.UNPACK_SKIP_PIXELS),zn=B.getParameter(B.UNPACK_SKIP_ROWS),yn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ae.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ae.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,le),B.pixelStorei(B.UNPACK_SKIP_ROWS,ce),B.pixelStorei(B.UNPACK_SKIP_IMAGES,te);const Fe=U.isDataArrayTexture||U.isData3DTexture,In=K.isDataArrayTexture||K.isData3DTexture;if(U.isDepthTexture){const Ln=jt.get(U),nn=jt.get(K),bn=jt.get(Ln.__renderTarget),Or=jt.get(nn.__renderTarget);Pt.bindFramebuffer(B.READ_FRAMEBUFFER,bn.__webglFramebuffer),Pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let kn=0;kn<Ft;kn++)Fe&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,jt.get(U).__webglTexture,Y,te+kn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,jt.get(K).__webglTexture,Ct,qe+kn)),B.blitFramebuffer(le,ce,zt,kt,ye,De,zt,kt,B.DEPTH_BUFFER_BIT,B.NEAREST);Pt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||U.isRenderTargetTexture||jt.has(U)){const Ln=jt.get(U),nn=jt.get(K);Pt.bindFramebuffer(B.READ_FRAMEBUFFER,tr),Pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ys);for(let bn=0;bn<Ft;bn++)Fe?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ln.__webglTexture,Y,te+bn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ln.__webglTexture,Y),In?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,nn.__webglTexture,Ct,qe+bn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,nn.__webglTexture,Ct),Y!==0?B.blitFramebuffer(le,ce,zt,kt,ye,De,zt,kt,B.COLOR_BUFFER_BIT,B.NEAREST):In?B.copyTexSubImage3D(Ke,Ct,ye,De,qe+bn,le,ce,zt,kt):B.copyTexSubImage2D(Ke,Ct,ye,De,le,ce,zt,kt);Pt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else In?U.isDataTexture||U.isData3DTexture?B.texSubImage3D(Ke,Ct,ye,De,qe,zt,kt,Ft,_e,ne,Ae.data):K.isCompressedArrayTexture?B.compressedTexSubImage3D(Ke,Ct,ye,De,qe,zt,kt,Ft,_e,Ae.data):B.texSubImage3D(Ke,Ct,ye,De,qe,zt,kt,Ft,_e,ne,Ae):U.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ct,ye,De,zt,kt,_e,ne,Ae.data):U.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ct,ye,De,Ae.width,Ae.height,_e,Ae.data):B.texSubImage2D(B.TEXTURE_2D,Ct,ye,De,zt,kt,_e,ne,Ae);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ee),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Un),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Si),B.pixelStorei(B.UNPACK_SKIP_ROWS,zn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,yn),Ct===0&&K.generateMipmaps&&B.generateMipmap(Ke),Pt.unbindTexture()},this.copyTextureToTexture3D=function(U,K,st=null,ot=null,Y=0){return Ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,K,st,ot,Y)},this.initRenderTarget=function(U){jt.get(U).__webglFramebuffer===void 0&&re.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?re.setTextureCube(U,0):U.isData3DTexture?re.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?re.setTexture2DArray(U,0):re.setTexture2D(U,0),Pt.unbindTexture()},this.resetState=function(){H=0,N=0,V=null,Pt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ne._getUnpackColorSpace()}}const YA=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,jA=`
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
`;function ip(s,t=s){return new nE({color:s,emissive:t,emissiveIntensity:.16})}function Tv(s,t,i,r){const l=new hn(new Gs(s,t,i,1,1,1),ip(r));return l.castShadow=!0,l.receiveShadow=!0,l}function ZA(){const s=Pe.useRef(null);return Pe.useEffect(()=>{const t=s.current;if(!t)return;const i=new my({antialias:!0,alpha:!1});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.shadowMap.enabled=!0,i.shadowMap.type=lp,t.appendChild(i.domElement);const r=new Qh,l=new Kn(42,1,.1,100);l.position.set(.15,4.9,10.4),l.lookAt(.35,.95,0);const c={uTime:{value:0},uResolution:{value:new de(1,1)},uPointer:{value:new de(.5,.5)}},f=new Qh,h=new vp,p=new hn(new ol(2,2),new ga({vertexShader:YA,fragmentShader:jA,uniforms:c}));f.add(p),r.add(new rE("#ffffff","#20305f",2.8));const m=new ly("#fff2bf",4.1);m.position.set(-3.8,7.8,6.2),m.castShadow=!0,m.shadow.mapSize.set(2048,2048),r.add(m);const v=new tp("#2af8ff",7,18);v.position.set(4.2,2.8,3.2),r.add(v);const _=new tp("#ff4bb7",5.5,16);_.position.set(-4.8,1.8,-1.8),r.add(_);const y=new Ri;y.position.set(2.25,-.95,-.7),y.rotation.set(-.1,-.48,.02),r.add(y);const x=new hn(new $o(4.1,4.75,.28,7),ip("#252458","#3b2a8d"));x.receiveShadow=!0,y.add(x);const E=new hn(new $o(4.12,4.76,.045,7),ip("#3a3977","#5b4ed6"));E.position.y=.17,y.add(E);const b=["#22f2d0","#18c9ff","#ff45bd","#c7ff2f","#ffb13b","#7165ff"],S=[];for(let A=0;A<62;A+=1){const R=A*.58,I=.48+A%11*.32,$=Math.cos(R)*I,tt=Math.sin(R)*I*.7,lt=.34+A*13%17*.105,ut=.16+A%4*.045,z=Tv(ut,lt,ut,b[A%b.length]);z.position.set($,lt/2+.18,tt),z.rotation.y=R*.32,z.userData={baseHeight:lt,phase:A*.42},y.add(z),S.push(z)}const g=new Ri,C=new Sp({color:"#f4ff6a",transparent:!0,opacity:.78});for(let A=0;A<5;A+=1){const R=[];for(let I=0;I<180;I+=1){const $=I/179,tt=$*Math.PI*3.2+A*1.26;R.push(new Q(Math.cos(tt)*(1.1+$*1.9),.4+Math.sin($*Math.PI)*1.75+A*.04,Math.sin(tt)*(.48+$*.55)))}g.add(new iy(new Dn().setFromPoints(R),C))}y.add(g);const L=[];for(let A=0;A<10;A+=1){const R=Tv(.22,.22,.22,b[(A+2)%b.length]);R.userData={angle:A*.72,radius:2.6+A%3*.3,speed:.45+A*.025},y.add(R),L.push(R)}const D=new cy;let k=0;const H=()=>{const A=t.clientWidth,R=t.clientHeight;i.setSize(A,R),l.aspect=A/R,l.updateProjectionMatrix(),c.uResolution.value.set(A*i.getPixelRatio(),R*i.getPixelRatio())},N=A=>{c.uPointer.value.set(A.clientX/window.innerWidth,A.clientY/window.innerHeight)},V=()=>{k=requestAnimationFrame(V);const A=D.getElapsedTime();c.uTime.value=A,y.rotation.y=-.48+Math.sin(A*.2)*.2,y.rotation.x=-.1+Math.sin(A*.31)*.045,y.position.y=-.95+Math.sin(A*.85)*.08,g.rotation.y=A*.42,g.rotation.x=Math.sin(A*.37)*.18,S.forEach(R=>{const I=1+Math.max(0,Math.sin(A*2.6+R.userData.phase))*.16;R.scale.y=I,R.position.y=R.userData.baseHeight*I/2+.18}),L.forEach(R=>{const I=R.userData,$=I.angle+A*I.speed;R.position.set(Math.cos($)*I.radius,1.35+Math.sin(A*1.4+I.angle)*.48,Math.sin($)*I.radius*.55),R.rotation.set(A*.9+I.angle,A*1.2,A*.7)}),l.position.x=Math.sin(A*.16)*.22,l.lookAt(.35,.95,0),i.autoClear=!0,i.render(f,h),i.autoClear=!1,i.clearDepth(),i.render(r,l)};return H(),V(),window.addEventListener("resize",H),window.addEventListener("pointermove",N),()=>{cancelAnimationFrame(k),window.removeEventListener("resize",H),window.removeEventListener("pointermove",N),t.removeChild(i.domElement),i.dispose(),p.geometry.dispose(),p.material.dispose(),r.traverse(A=>{A.geometry&&A.geometry.dispose(),A.material&&A.material.dispose()})}},[]),O.createElement("div",{className:"sceneCanvas",ref:s,"aria-hidden":"true"})}const Ci={name:"Alisa Pechorina",location:"Saint Petersburg, Russia",email:"disaster.woman007@gmail.com",phone:"+7 951 661 6636",github:"https://github.com/DisasterWoman",headline:"Frontend developer for immersive interfaces.",summary:"React and TypeScript developer with commercial product experience, strong UI ownership and a focused Three.js portfolio direction for data-heavy planning, analytics and AI-powered workflows."},bp=`mailto:${Ci.email}?subject=Frontend%20Developer%20React%20Three.js%20Opportunity`,KA=[{label:"3D",href:"/3d"},{label:"Signal",href:"/#signal"},{label:"Impact",href:"/#impact"},{label:"Stack",href:"/#stack"},{label:"Contact",href:"/#contact"}],QA=[{value:"4+",label:"years in frontend"},{value:"20%",label:"hotel occupancy lift"},{value:"30%",label:"fewer booking errors"},{value:"EN",label:"fluent communication"}],JA=["React, TypeScript and Redux Toolkit in commercial SaaS interfaces.","Interactive booking, analytics, filtering and notification flows shipped to users.","API integrations, responsive design, Edge/Safari support, testing and documentation.","Three.js focus through portfolio-level immersive planning and feasibility interfaces."],$A=[{company:"UPRO GROUP",role:"Frontend Developer - React, Redux Toolkit, TypeScript",period:"Jan 2022 - Present",accent:"Hospitality SaaS",points:["Built room, pricing and analytics admin workflows.","Delivered booking UI with calendar, dynamic pricing and payments.","Improved API synchronization and notification reliability."]},{company:"Trending Jobs",role:"Frontend Developer - React, Redux Toolkit, TypeScript",period:"Feb 2021 - Jan 2022",accent:"International platform",points:["Created dynamic filters by salary, location and employment type.","Built candidate accounts for resumes, responses and notifications.","Improved data loading and reduced server pressure through API optimization."]},{company:"Deutsche Telekom IT",role:"Frontend Developer - Vue, Nuxt, TypeScript",period:"Aug 2020 - Dec 2021",accent:"Enterprise UI",points:["Implemented state-driven select matrices and responsive product lists.","Refactored legacy code with TypeScript and performance improvements.","Added Jest/Vitest coverage and technical documentation."]}],t2=["React","TypeScript","JavaScript","Three.js","Next.js","Redux Toolkit","RTK Query","React Query","React Hook Form","Framer Motion","REST API","Jest","Vitest","Tailwind CSS","MUI","Ant Design","Vue","Nuxt","Pinia","CI/CD"],e2=[{title:"Urban product lens",body:"Portfolio story tuned to architecture, planning, feasibility and sustainable design."},{title:"Frontend ownership",body:"Feature work from idea, contracts and states through production polish."},{title:"Interactive layer",body:"Three.js animation, shader motion and live data-inspired visual language."}];function n2(){return O.createElement("nav",{className:"topbar","aria-label":"Portfolio navigation"},O.createElement("a",{className:"brand",href:"/"},O.createElement("span",null,"AP"),Ci.name),O.createElement("div",{className:"navLinks"},KA.map(s=>O.createElement("a",{key:s.href,href:s.href},s.label))))}const i2=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gy=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim();var a2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const r2=Pe.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...h},p)=>Pe.createElement("svg",{ref:p,...a2,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:gy("lucide",l),...h},[...f.map(([m,v])=>Pe.createElement(m,v)),...Array.isArray(c)?c:[c]]));const vn=(s,t)=>{const i=Pe.forwardRef(({className:r,...l},c)=>Pe.createElement(r2,{ref:c,iconNode:t,className:gy(`lucide-${i2(s)}`,r),...l}));return i.displayName=`${s}`,i};const Av=vn("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);const s2=vn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);const o2=vn("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);const l2=vn("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);const c2=vn("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);const u2=vn("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const f2=vn("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);const d2=vn("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);const Tp=vn("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);const ou=vn("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);const h2=vn("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);const p2=vn("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);const m2=vn("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);const g2=vn("Radar",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);const _2=vn("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);const Rv=vn("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);const v2=vn("Satellite",[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]]);const _y=vn("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const y2=vn("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);function lu({children:s,href:t,variant:i="primary",...r}){return O.createElement("a",{className:`button button--${i}`,href:t,...r},s)}function S2(){return O.createElement("header",{id:"top",className:"hero"},O.createElement("section",{className:"heroCopy","aria-labelledby":"hero-title"},O.createElement("p",{className:"kicker"},O.createElement(_y,{size:16})," React / Three.js / TypeScript"),O.createElement("h1",{id:"hero-title"},Ci.headline),O.createElement("p",{className:"lead"},Ci.summary),O.createElement("div",{className:"ctaRow"},O.createElement(lu,{href:bp},O.createElement(ou,{size:18})," Contact me"),O.createElement(lu,{variant:"secondary",href:Ci.github,target:"_blank",rel:"noreferrer"},O.createElement(Tp,{size:18})," GitHub ",O.createElement(s2,{size:16}))),O.createElement("div",{className:"profileMeta","aria-label":"Profile details"},O.createElement("span",null,O.createElement(h2,{size:16})," ",Ci.location),O.createElement("span",null,O.createElement(f2,{size:16})," Fluent English"),O.createElement("span",null,O.createElement(c2,{size:16})," SaaS product UI"))),O.createElement("aside",{className:"heroPanel","aria-label":"Role match summary"},O.createElement("div",{className:"panelTop"},O.createElement("span",null,O.createElement(g2,{size:18})," live role signal"),O.createElement("strong",null,"React + Three.js")),O.createElement("div",{className:"signalBars","aria-hidden":"true"},O.createElement("span",null),O.createElement("span",null),O.createElement("span",null),O.createElement("span",null)),O.createElement("div",{className:"metricGrid"},QA.map(s=>O.createElement("div",{className:"metricTile",key:s.label},O.createElement("strong",null,s.value),O.createElement("span",null,s.label))))))}function M2(s){return Object.prototype.toString.call(s)==="[object Object]"}function wv(s){return M2(s)||Array.isArray(s)}function x2(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ap(s,t){const i=Object.keys(s),r=Object.keys(t);if(i.length!==r.length)return!1;const l=JSON.stringify(Object.keys(s.breakpoints||{})),c=JSON.stringify(Object.keys(t.breakpoints||{}));return l!==c?!1:i.every(f=>{const h=s[f],p=t[f];return typeof h=="function"?`${h}`==`${p}`:!wv(h)||!wv(p)?h===p:Ap(h,p)})}function Cv(s){return s.concat().sort((t,i)=>t.name>i.name?1:-1).map(t=>t.options)}function E2(s,t){if(s.length!==t.length)return!1;const i=Cv(s),r=Cv(t);return i.every((l,c)=>{const f=r[c];return Ap(l,f)})}function Rp(s){return typeof s=="number"}function ap(s){return typeof s=="string"}function pu(s){return typeof s=="boolean"}function Dv(s){return Object.prototype.toString.call(s)==="[object Object]"}function tn(s){return Math.abs(s)}function wp(s){return Math.sign(s)}function jo(s,t){return tn(s-t)}function b2(s,t){if(s===0||t===0||tn(s)<=tn(t))return 0;const i=jo(tn(s),tn(t));return tn(i/s)}function T2(s){return Math.round(s*100)/100}function tl(s){return el(s).map(Number)}function Ui(s){return s[ll(s)]}function ll(s){return Math.max(0,s.length-1)}function Cp(s,t){return t===ll(s)}function Uv(s,t=0){return Array.from(Array(s),(i,r)=>t+r)}function el(s){return Object.keys(s)}function vy(s,t){return[s,t].reduce((i,r)=>(el(r).forEach(l=>{const c=i[l],f=r[l],h=Dv(c)&&Dv(f);i[l]=h?vy(c,f):f}),i),{})}function rp(s,t){return typeof t.MouseEvent<"u"&&s instanceof t.MouseEvent}function A2(s,t){const i={start:r,center:l,end:c};function r(){return 0}function l(p){return c(p)/2}function c(p){return t-p}function f(p,m){return ap(s)?i[s](p):s(t,p,m)}return{measure:f}}function nl(){let s=[];function t(l,c,f,h={passive:!0}){let p;if("addEventListener"in l)l.addEventListener(c,f,h),p=()=>l.removeEventListener(c,f,h);else{const m=l;m.addListener(f),p=()=>m.removeListener(f)}return s.push(p),r}function i(){s=s.filter(l=>l())}const r={add:t,clear:i};return r}function R2(s,t,i,r){const l=nl(),c=1e3/60;let f=null,h=0,p=0;function m(){l.add(s,"visibilitychange",()=>{s.hidden&&E()})}function v(){x(),l.clear()}function _(S){if(!p)return;f||(f=S,i(),i());const g=S-f;for(f=S,h+=g;h>=c;)i(),h-=c;const C=h/c;r(C),p&&(p=t.requestAnimationFrame(_))}function y(){p||(p=t.requestAnimationFrame(_))}function x(){t.cancelAnimationFrame(p),f=null,h=0,p=0}function E(){f=null,h=0}return{init:m,destroy:v,start:y,stop:x,update:i,render:r}}function w2(s,t){const i=t==="rtl",r=s==="y",l=r?"y":"x",c=r?"x":"y",f=!r&&i?-1:1,h=v(),p=_();function m(E){const{height:b,width:S}=E;return r?b:S}function v(){return r?"top":i?"right":"left"}function _(){return r?"bottom":i?"left":"right"}function y(E){return E*f}return{scroll:l,cross:c,startEdge:h,endEdge:p,measureSize:m,direction:y}}function Lr(s=0,t=0){const i=tn(s-t);function r(m){return m<s}function l(m){return m>t}function c(m){return r(m)||l(m)}function f(m){return c(m)?r(m)?s:t:m}function h(m){return i?m-i*Math.ceil((m-t)/i):m}return{length:i,max:t,min:s,constrain:f,reachedAny:c,reachedMax:l,reachedMin:r,removeOffset:h}}function yy(s,t,i){const{constrain:r}=Lr(0,s),l=s+1;let c=f(t);function f(y){return i?tn((l+y)%l):r(y)}function h(){return c}function p(y){return c=f(y),_}function m(y){return v().set(h()+y)}function v(){return yy(s,h(),i)}const _={get:h,set:p,add:m,clone:v};return _}function C2(s,t,i,r,l,c,f,h,p,m,v,_,y,x,E,b,S,g,C){const{cross:L,direction:D}=s,k=["INPUT","SELECT","TEXTAREA"],H={passive:!1},N=nl(),V=nl(),A=Lr(50,225).constrain(x.measure(20)),R={mouse:300,touch:400},I={mouse:500,touch:600},$=E?43:25;let tt=!1,lt=0,ut=0,z=!1,q=!1,Z=!1,St=!1;function wt(Et){if(!C)return;function Bt(fe){(pu(C)||C(Et,fe))&&At(fe)}const B=t;N.add(B,"dragstart",fe=>fe.preventDefault(),H).add(B,"touchmove",()=>{},H).add(B,"touchend",()=>{}).add(B,"touchstart",Bt).add(B,"mousedown",Bt).add(B,"touchcancel",Dt).add(B,"contextmenu",Dt).add(B,"click",Xt,!0)}function P(){N.clear(),V.clear()}function et(){const Et=St?i:t;V.add(Et,"touchmove",gt,H).add(Et,"touchend",Dt).add(Et,"mousemove",gt,H).add(Et,"mouseup",Dt)}function Mt(Et){const Bt=Et.nodeName||"";return k.includes(Bt)}function j(){return(E?I:R)[St?"mouse":"touch"]}function ft(Et,Bt){const B=_.add(wp(Et)*-1),fe=v.byDistance(Et,!E).distance;return E||tn(Et)<A?fe:S&&Bt?fe*.5:v.byIndex(B.get(),0).distance}function At(Et){const Bt=rp(Et,r);St=Bt,Z=E&&Bt&&!Et.buttons&&tt,tt=jo(l.get(),f.get())>=2,!(Bt&&Et.button!==0)&&(Mt(Et.target)||(z=!0,c.pointerDown(Et),m.useFriction(0).useDuration(0),l.set(f),et(),lt=c.readPoint(Et),ut=c.readPoint(Et,L),y.emit("pointerDown")))}function gt(Et){if(!rp(Et,r)&&Et.touches.length>=2)return Dt(Et);const B=c.readPoint(Et),fe=c.readPoint(Et,L),Jt=jo(B,lt),ue=jo(fe,ut);if(!q&&!St&&(!Et.cancelable||(q=Jt>ue,!q)))return Dt(Et);const Pt=c.pointerMove(Et);Jt>b&&(Z=!0),m.useFriction(.3).useDuration(.75),h.start(),l.add(D(Pt)),Et.preventDefault()}function Dt(Et){const B=v.byDistance(0,!1).index!==_.get(),fe=c.pointerUp(Et)*j(),Jt=ft(D(fe),B),ue=b2(fe,Jt),Pt=$-10*ue,ie=g+ue/50;q=!1,z=!1,V.clear(),m.useDuration(Pt).useFriction(ie),p.distance(Jt,!E),St=!1,y.emit("pointerUp")}function Xt(Et){Z&&(Et.stopPropagation(),Et.preventDefault(),Z=!1)}function Vt(){return z}return{init:wt,destroy:P,pointerDown:Vt}}function D2(s,t){let r,l;function c(_){return _.timeStamp}function f(_,y){const E=`client${(y||s.scroll)==="x"?"X":"Y"}`;return(rp(_,t)?_:_.touches[0])[E]}function h(_){return r=_,l=_,f(_)}function p(_){const y=f(_)-f(l),x=c(_)-c(r)>170;return l=_,x&&(r=_),y}function m(_){if(!r||!l)return 0;const y=f(l)-f(r),x=c(_)-c(r),E=c(_)-c(l)>170,b=y/x;return x&&!E&&tn(b)>.1?b:0}return{pointerDown:h,pointerMove:p,pointerUp:m,readPoint:f}}function U2(){function s(i){const{offsetTop:r,offsetLeft:l,offsetWidth:c,offsetHeight:f}=i;return{top:r,right:l+c,bottom:r+f,left:l,width:c,height:f}}return{measure:s}}function L2(s){function t(r){return s*(r/100)}return{measure:t}}function N2(s,t,i,r,l,c,f){const h=[s].concat(r);let p,m,v=[],_=!1;function y(S){return l.measureSize(f.measure(S))}function x(S){if(!c)return;m=y(s),v=r.map(y);function g(C){for(const L of C){if(_)return;const D=L.target===s,k=r.indexOf(L.target),H=D?m:v[k],N=y(D?s:r[k]);if(tn(N-H)>=.5){S.reInit(),t.emit("resize");break}}}p=new ResizeObserver(C=>{(pu(c)||c(S,C))&&g(C)}),i.requestAnimationFrame(()=>{h.forEach(C=>p.observe(C))})}function E(){_=!0,p&&p.disconnect()}return{init:x,destroy:E}}function O2(s,t,i,r,l,c){let f=0,h=0,p=l,m=c,v=s.get(),_=0;function y(){const H=r.get()-s.get(),N=!p;let V=0;return N?(f=0,i.set(r),s.set(r),V=H):(i.set(s),f+=H/p,f*=m,v+=f,s.add(f),V=v-_),h=wp(V),_=v,k}function x(){const H=r.get()-t.get();return tn(H)<.001}function E(){return p}function b(){return h}function S(){return f}function g(){return L(l)}function C(){return D(c)}function L(H){return p=H,k}function D(H){return m=H,k}const k={direction:b,duration:E,velocity:S,seek:y,settled:x,useBaseFriction:C,useBaseDuration:g,useFriction:D,useDuration:L};return k}function P2(s,t,i,r,l){const c=l.measure(10),f=l.measure(50),h=Lr(.1,.99);let p=!1;function m(){return!(p||!s.reachedAny(i.get())||!s.reachedAny(t.get()))}function v(x){if(!m())return;const E=s.reachedMin(t.get())?"min":"max",b=tn(s[E]-t.get()),S=i.get()-t.get(),g=h.constrain(b/f);i.subtract(S*g),!x&&tn(S)<c&&(i.set(s.constrain(i.get())),r.useDuration(25).useBaseFriction())}function _(x){p=!x}return{shouldConstrain:m,constrain:v,toggleActive:_}}function z2(s,t,i,r,l){const c=Lr(-t+s,0),f=_(),h=v(),p=y();function m(E,b){return jo(E,b)<=1}function v(){const E=f[0],b=Ui(f),S=f.lastIndexOf(E),g=f.indexOf(b)+1;return Lr(S,g)}function _(){return i.map((E,b)=>{const{min:S,max:g}=c,C=c.constrain(E),L=!b,D=Cp(i,b);return L?g:D||m(S,C)?S:m(g,C)?g:C}).map(E=>parseFloat(E.toFixed(3)))}function y(){if(t<=s+l)return[c.max];if(r==="keepSnaps")return f;const{min:E,max:b}=h;return f.slice(E,b)}return{snapsContained:p,scrollContainLimit:h}}function I2(s,t,i){const r=t[0],l=i?r-s:Ui(t);return{limit:Lr(l,r)}}function B2(s,t,i,r){const c=t.min+.1,f=t.max+.1,{reachedMin:h,reachedMax:p}=Lr(c,f);function m(y){return y===1?p(i.get()):y===-1?h(i.get()):!1}function v(y){if(!m(y))return;const x=s*(y*-1);r.forEach(E=>E.add(x))}return{loop:v}}function F2(s){const{max:t,length:i}=s;function r(c){const f=c-t;return i?f/-i:0}return{get:r}}function H2(s,t,i,r,l){const{startEdge:c,endEdge:f}=s,{groupSlides:h}=l,p=_().map(t.measure),m=y(),v=x();function _(){return h(r).map(b=>Ui(b)[f]-b[0][c]).map(tn)}function y(){return r.map(b=>i[c]-b[c]).map(b=>-tn(b))}function x(){return h(m).map(b=>b[0]).map((b,S)=>b+p[S])}return{snaps:m,snapsAligned:v}}function G2(s,t,i,r,l,c){const{groupSlides:f}=l,{min:h,max:p}=r,m=v();function v(){const y=f(c),x=!s||t==="keepSnaps";return i.length===1?[c]:x?y:y.slice(h,p).map((E,b,S)=>{const g=!b,C=Cp(S,b);if(g){const L=Ui(S[0])+1;return Uv(L)}if(C){const L=ll(c)-Ui(S)[0]+1;return Uv(L,Ui(S)[0])}return E})}return{slideRegistry:m}}function V2(s,t,i,r,l){const{reachedAny:c,removeOffset:f,constrain:h}=r;function p(E){return E.concat().sort((b,S)=>tn(b)-tn(S))[0]}function m(E){const b=s?f(E):h(E),S=t.map((C,L)=>({diff:v(C-b,0),index:L})).sort((C,L)=>tn(C.diff)-tn(L.diff)),{index:g}=S[0];return{index:g,distance:b}}function v(E,b){const S=[E,E+i,E-i];if(!s)return E;if(!b)return p(S);const g=S.filter(C=>wp(C)===b);return g.length?p(g):Ui(S)-i}function _(E,b){const S=t[E]-l.get(),g=v(S,b);return{index:E,distance:g}}function y(E,b){const S=l.get()+E,{index:g,distance:C}=m(S),L=!s&&c(S);if(!b||L)return{index:g,distance:E};const D=t[g]-C,k=E+v(D,0);return{index:g,distance:k}}return{byDistance:y,byIndex:_,shortcut:v}}function k2(s,t,i,r,l,c,f){function h(_){const y=_.distance,x=_.index!==t.get();c.add(y),y&&(r.duration()?s.start():(s.update(),s.render(1),s.update())),x&&(i.set(t.get()),t.set(_.index),f.emit("select"))}function p(_,y){const x=l.byDistance(_,y);h(x)}function m(_,y){const x=t.clone().set(_),E=l.byIndex(x.get(),y);h(E)}return{distance:p,index:m}}function X2(s,t,i,r,l,c,f,h){const p={passive:!0,capture:!0};let m=0;function v(x){if(!h)return;function E(b){if(new Date().getTime()-m>10)return;f.emit("slideFocusStart"),s.scrollLeft=0;const C=i.findIndex(L=>L.includes(b));Rp(C)&&(l.useDuration(0),r.index(C,0),f.emit("slideFocus"))}c.add(document,"keydown",_,!1),t.forEach((b,S)=>{c.add(b,"focus",g=>{(pu(h)||h(x,g))&&E(S)},p)})}function _(x){x.code==="Tab"&&(m=new Date().getTime())}return{init:v}}function Yo(s){let t=s;function i(){return t}function r(p){t=f(p)}function l(p){t+=f(p)}function c(p){t-=f(p)}function f(p){return Rp(p)?p:p.get()}return{get:i,set:r,add:l,subtract:c}}function Sy(s,t){const i=s.scroll==="x"?f:h,r=t.style;let l=null,c=!1;function f(y){return`translate3d(${y}px,0px,0px)`}function h(y){return`translate3d(0px,${y}px,0px)`}function p(y){if(c)return;const x=T2(s.direction(y));x!==l&&(r.transform=i(x),l=x)}function m(y){c=!y}function v(){c||(r.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:v,to:p,toggleActive:m}}function W2(s,t,i,r,l,c,f,h,p){const v=tl(l),_=tl(l).reverse(),y=g().concat(C());function x(N,V){return N.reduce((A,R)=>A-l[R],V)}function E(N,V){return N.reduce((A,R)=>x(A,V)>0?A.concat([R]):A,[])}function b(N){return c.map((V,A)=>({start:V-r[A]+.5+N,end:V+t-.5+N}))}function S(N,V,A){const R=b(V);return N.map(I=>{const $=A?0:-i,tt=A?i:0,lt=A?"end":"start",ut=R[I][lt];return{index:I,loopPoint:ut,slideLocation:Yo(-1),translate:Sy(s,p[I]),target:()=>h.get()>ut?$:tt}})}function g(){const N=f[0],V=E(_,N);return S(V,i,!1)}function C(){const N=t-f[0]-1,V=E(v,N);return S(V,-i,!0)}function L(){return y.every(({index:N})=>{const V=v.filter(A=>A!==N);return x(V,t)<=.1})}function D(){y.forEach(N=>{const{target:V,translate:A,slideLocation:R}=N,I=V();I!==R.get()&&(A.to(I),R.set(I))})}function k(){y.forEach(N=>N.translate.clear())}return{canLoop:L,clear:k,loop:D,loopPoints:y}}function q2(s,t,i){let r,l=!1;function c(p){if(!i)return;function m(v){for(const _ of v)if(_.type==="childList"){p.reInit(),t.emit("slidesChanged");break}}r=new MutationObserver(v=>{l||(pu(i)||i(p,v))&&m(v)}),r.observe(s,{childList:!0})}function f(){r&&r.disconnect(),l=!0}return{init:c,destroy:f}}function Y2(s,t,i,r){const l={};let c=null,f=null,h,p=!1;function m(){h=new IntersectionObserver(E=>{p||(E.forEach(b=>{const S=t.indexOf(b.target);l[S]=b}),c=null,f=null,i.emit("slidesInView"))},{root:s.parentElement,threshold:r}),t.forEach(E=>h.observe(E))}function v(){h&&h.disconnect(),p=!0}function _(E){return el(l).reduce((b,S)=>{const g=parseInt(S),{isIntersecting:C}=l[g];return(E&&C||!E&&!C)&&b.push(g),b},[])}function y(E=!0){if(E&&c)return c;if(!E&&f)return f;const b=_(E);return E&&(c=b),E||(f=b),b}return{init:m,destroy:v,get:y}}function j2(s,t,i,r,l,c){const{measureSize:f,startEdge:h,endEdge:p}=s,m=i[0]&&l,v=E(),_=b(),y=i.map(f),x=S();function E(){if(!m)return 0;const C=i[0];return tn(t[h]-C[h])}function b(){if(!m)return 0;const C=c.getComputedStyle(Ui(r));return parseFloat(C.getPropertyValue(`margin-${p}`))}function S(){return i.map((C,L,D)=>{const k=!L,H=Cp(D,L);return k?y[L]+v:H?y[L]+_:D[L+1][h]-C[h]}).map(tn)}return{slideSizes:y,slideSizesWithGaps:x,startGap:v,endGap:_}}function Z2(s,t,i,r,l,c,f,h,p){const{startEdge:m,endEdge:v,direction:_}=s,y=Rp(i);function x(g,C){return tl(g).filter(L=>L%C===0).map(L=>g.slice(L,L+C))}function E(g){return g.length?tl(g).reduce((C,L,D)=>{const k=Ui(C)||0,H=k===0,N=L===ll(g),V=l[m]-c[k][m],A=l[m]-c[L][v],R=!r&&H?_(f):0,I=!r&&N?_(h):0,$=tn(A-I-(V+R));return D&&$>t+p&&C.push(L),N&&C.push(g.length),C},[]).map((C,L,D)=>{const k=Math.max(D[L-1]||0);return g.slice(k,C)}):[]}function b(g){return y?x(g,i):E(g)}return{groupSlides:b}}function K2(s,t,i,r,l,c,f){const{align:h,axis:p,direction:m,startIndex:v,loop:_,duration:y,dragFree:x,dragThreshold:E,inViewThreshold:b,slidesToScroll:S,skipSnaps:g,containScroll:C,watchResize:L,watchSlides:D,watchDrag:k,watchFocus:H}=c,N=2,V=U2(),A=V.measure(t),R=i.map(V.measure),I=w2(p,m),$=I.measureSize(A),tt=L2($),lt=A2(h,$),ut=!_&&!!C,z=_||!!C,{slideSizes:q,slideSizesWithGaps:Z,startGap:St,endGap:wt}=j2(I,A,R,i,z,l),P=Z2(I,$,S,_,A,R,St,wt,N),{snaps:et,snapsAligned:Mt}=H2(I,lt,A,R,P),j=-Ui(et)+Ui(Z),{snapsContained:ft,scrollContainLimit:At}=z2($,j,Mt,C,N),gt=ut?ft:Mt,{limit:Dt}=I2(j,gt,_),Xt=yy(ll(gt),v,_),Vt=Xt.clone(),yt=tl(i),Et=({dragHandler:Ut,scrollBody:qt,scrollBounds:Kt,options:{loop:xt}})=>{xt||Kt.constrain(Ut.pointerDown()),qt.seek()},Bt=({scrollBody:Ut,translate:qt,location:Kt,offsetLocation:xt,previousLocation:Lt,scrollLooper:$t,slideLooper:Wt,dragHandler:Nt,animation:se,eventHandler:W,scrollBounds:Ot,options:{loop:Tt}},Ht)=>{const Rt=Ut.settled(),_t=!Ot.shouldConstrain(),Gt=Tt?Rt:Rt&&_t,oe=Gt&&!Nt.pointerDown();oe&&se.stop();const ze=Kt.get()*Ht+Lt.get()*(1-Ht);xt.set(ze),Tt&&($t.loop(Ut.direction()),Wt.loop()),qt.to(xt.get()),oe&&W.emit("settle"),Gt||W.emit("scroll")},B=R2(r,l,()=>Et(Zt),Ut=>Bt(Zt,Ut)),fe=.68,Jt=gt[Xt.get()],ue=Yo(Jt),Pt=Yo(Jt),ie=Yo(Jt),jt=Yo(Jt),re=O2(ue,ie,Pt,jt,y,fe),Ze=V2(_,gt,j,Dt,jt),F=k2(B,Xt,Vt,re,Ze,jt,f),T=F2(Dt),at=nl(),mt=Y2(t,i,f,b),{slideRegistry:bt}=G2(ut,C,gt,At,P,yt),dt=X2(s,i,bt,F,re,at,f,H),Zt={ownerDocument:r,ownerWindow:l,eventHandler:f,containerRect:A,slideRects:R,animation:B,axis:I,dragHandler:C2(I,s,r,l,jt,D2(I,l),ue,B,F,re,Ze,Xt,f,tt,x,E,g,fe,k),eventStore:at,percentOfView:tt,index:Xt,indexPrevious:Vt,limit:Dt,location:ue,offsetLocation:ie,previousLocation:Pt,options:c,resizeHandler:N2(t,f,l,i,I,L,V),scrollBody:re,scrollBounds:P2(Dt,ie,jt,re,tt),scrollLooper:B2(j,Dt,ie,[ue,ie,Pt,jt]),scrollProgress:T,scrollSnapList:gt.map(T.get),scrollSnaps:gt,scrollTarget:Ze,scrollTo:F,slideLooper:W2(I,$,j,q,Z,et,gt,ie,i),slideFocus:dt,slidesHandler:q2(t,f,D),slidesInView:mt,slideIndexes:yt,slideRegistry:bt,slidesToScroll:P,target:jt,translate:Sy(I,t)};return Zt}function Q2(){let s={},t;function i(m){t=m}function r(m){return s[m]||[]}function l(m){return r(m).forEach(v=>v(t,m)),p}function c(m,v){return s[m]=r(m).concat([v]),p}function f(m,v){return s[m]=r(m).filter(_=>_!==v),p}function h(){s={}}const p={init:i,emit:l,off:f,on:c,clear:h};return p}const J2={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function $2(s){function t(c,f){return vy(c,f||{})}function i(c){const f=c.breakpoints||{},h=el(f).filter(p=>s.matchMedia(p).matches).map(p=>f[p]).reduce((p,m)=>t(p,m),{});return t(c,h)}function r(c){return c.map(f=>el(f.breakpoints||{})).reduce((f,h)=>f.concat(h),[]).map(s.matchMedia)}return{mergeOptions:t,optionsAtMedia:i,optionsMediaQueries:r}}function tR(s){let t=[];function i(c,f){return t=f.filter(({options:h})=>s.optionsAtMedia(h).active!==!1),t.forEach(h=>h.init(c,s)),f.reduce((h,p)=>Object.assign(h,{[p.name]:p}),{})}function r(){t=t.filter(c=>c.destroy())}return{init:i,destroy:r}}function cu(s,t,i){const r=s.ownerDocument,l=r.defaultView,c=$2(l),f=tR(c),h=nl(),p=Q2(),{mergeOptions:m,optionsAtMedia:v,optionsMediaQueries:_}=c,{on:y,off:x,emit:E}=p,b=I;let S=!1,g,C=m(J2,cu.globalOptions),L=m(C),D=[],k,H,N;function V(){const{container:yt,slides:Et}=L;H=(ap(yt)?s.querySelector(yt):yt)||s.children[0];const B=ap(Et)?H.querySelectorAll(Et):Et;N=[].slice.call(B||H.children)}function A(yt){const Et=K2(s,H,N,r,l,yt,p);if(yt.loop&&!Et.slideLooper.canLoop()){const Bt=Object.assign({},yt,{loop:!1});return A(Bt)}return Et}function R(yt,Et){S||(C=m(C,yt),L=v(C),D=Et||D,V(),g=A(L),_([C,...D.map(({options:Bt})=>Bt)]).forEach(Bt=>h.add(Bt,"change",I)),L.active&&(g.translate.to(g.location.get()),g.animation.init(),g.slidesInView.init(),g.slideFocus.init(Vt),g.eventHandler.init(Vt),g.resizeHandler.init(Vt),g.slidesHandler.init(Vt),g.options.loop&&g.slideLooper.loop(),H.offsetParent&&N.length&&g.dragHandler.init(Vt),k=f.init(Vt,D)))}function I(yt,Et){const Bt=P();$(),R(m({startIndex:Bt},yt),Et),p.emit("reInit")}function $(){g.dragHandler.destroy(),g.eventStore.clear(),g.translate.clear(),g.slideLooper.clear(),g.resizeHandler.destroy(),g.slidesHandler.destroy(),g.slidesInView.destroy(),g.animation.destroy(),f.destroy(),h.clear()}function tt(){S||(S=!0,h.clear(),$(),p.emit("destroy"),p.clear())}function lt(yt,Et,Bt){!L.active||S||(g.scrollBody.useBaseFriction().useDuration(Et===!0?0:L.duration),g.scrollTo.index(yt,Bt||0))}function ut(yt){const Et=g.index.add(1).get();lt(Et,yt,-1)}function z(yt){const Et=g.index.add(-1).get();lt(Et,yt,1)}function q(){return g.index.add(1).get()!==P()}function Z(){return g.index.add(-1).get()!==P()}function St(){return g.scrollSnapList}function wt(){return g.scrollProgress.get(g.offsetLocation.get())}function P(){return g.index.get()}function et(){return g.indexPrevious.get()}function Mt(){return g.slidesInView.get()}function j(){return g.slidesInView.get(!1)}function ft(){return k}function At(){return g}function gt(){return s}function Dt(){return H}function Xt(){return N}const Vt={canScrollNext:q,canScrollPrev:Z,containerNode:Dt,internalEngine:At,destroy:tt,off:x,on:y,emit:E,plugins:ft,previousScrollSnap:et,reInit:b,rootNode:gt,scrollNext:ut,scrollPrev:z,scrollProgress:wt,scrollSnapList:St,scrollTo:lt,selectedScrollSnap:P,slideNodes:Xt,slidesInView:Mt,slidesNotInView:j};return R(t,i),setTimeout(()=>p.emit("init"),0),Vt}cu.globalOptions=void 0;function Dp(s={},t=[]){const i=Pe.useRef(s),r=Pe.useRef(t),[l,c]=Pe.useState(),[f,h]=Pe.useState(),p=Pe.useCallback(()=>{l&&l.reInit(i.current,r.current)},[l]);return Pe.useEffect(()=>{Ap(i.current,s)||(i.current=s,p())},[s,p]),Pe.useEffect(()=>{E2(r.current,t)||(r.current=t,p())},[t,p]),Pe.useEffect(()=>{if(x2()&&f){cu.globalOptions=Dp.globalOptions;const m=cu(f,i.current,r.current);return c(m),()=>m.destroy()}else c(void 0)},[f,c]),[h,l]}Dp.globalOptions=void 0;function Up(s,t){const i=document.createElement("canvas");i.width=s,i.height=s;const r=i.getContext("2d");t(r,s);const l=new tE(i);return l.colorSpace=oi,l.anisotropy=8,l}function eR(){return Up(512,(s,t)=>{const i=s.createRadialGradient(t*.38,t*.34,10,t/2,t/2,t*.56);i.addColorStop(0,"#fff8bd"),i.addColorStop(.28,"#ffd94c"),i.addColorStop(.58,"#ff8b24"),i.addColorStop(1,"#8e230b"),s.fillStyle=i,s.fillRect(0,0,t,t);for(let r=0;r<220;r+=1){const l=Math.random()*t,c=Math.random()*t,f=8+Math.random()*34;s.globalAlpha=.08+Math.random()*.12,s.fillStyle=Math.random()>.45?"#fff3a1":"#ff5a1f",s.beginPath(),s.arc(l,c,f,0,Math.PI*2),s.fill()}s.globalAlpha=1})}function Lv({base:s,accent:t,light:i,bands:r=!1,clouds:l=!1}){return Up(512,(c,f)=>{const h=c.createLinearGradient(0,0,f,f);if(h.addColorStop(0,i),h.addColorStop(.42,s),h.addColorStop(1,t),c.fillStyle=h,c.fillRect(0,0,f,f),r)for(let p=0;p<f;p+=18+Math.random()*20)c.globalAlpha=.18+Math.random()*.18,c.fillStyle=Math.random()>.5?i:t,c.fillRect(0,p,f,6+Math.random()*20);for(let p=0;p<120;p+=1)c.globalAlpha=.06+Math.random()*.14,c.fillStyle=Math.random()>.5?i:t,c.beginPath(),c.ellipse(Math.random()*f,Math.random()*f,12+Math.random()*56,4+Math.random()*22,Math.random()*Math.PI,0,Math.PI*2),c.fill();if(l)for(let p=0;p<90;p+=1)c.globalAlpha=.08+Math.random()*.16,c.fillStyle="#ffffff",c.beginPath(),c.ellipse(Math.random()*f,Math.random()*f,18+Math.random()*70,3+Math.random()*12,Math.random()*Math.PI,0,Math.PI*2),c.fill();c.globalAlpha=1})}function nR(s){return Up(256,(t,i)=>{const r=t.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);r.addColorStop(0,s),r.addColorStop(.28,s),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(0,0,i,i)})}function Nv(s,t,i="#000000",r=.02){return new eE({color:t,map:s,emissive:i,emissiveIntensity:r,roughness:.82,metalness:.02})}function Ov(s,t="#8eeeff"){const i=[];for(let r=0;r<=240;r+=1){const l=r/240*Math.PI*2;i.push(new Q(Math.cos(l)*s,0,Math.sin(l)*s))}return new iy(new Dn().setFromPoints(i),new Sp({color:t,transparent:!0,opacity:.28}))}function ch(s){const t=new Dn,i=new Float32Array(s*3),r=new Float32Array(s*3);for(let l=0;l<s;l+=1){const c=8+Math.random()*44,f=Math.random()*Math.PI*2,h=Math.acos(Math.random()*2-1);i[l*3]=c*Math.sin(h)*Math.cos(f),i[l*3+1]=c*Math.cos(h)*.72,i[l*3+2]=c*Math.sin(h)*Math.sin(f);const p=.72+Math.random()*.28;r[l*3]=p,r[l*3+1]=p*(.86+Math.random()*.14),r[l*3+2]=1}return t.setAttribute("position",new Vn(i,3)),t.setAttribute("color",new Vn(r,3)),new ay(t,new Mp({size:.028,transparent:!0,opacity:.9,vertexColors:!0,depthWrite:!1}))}function iR(s,t,i){const r=new Dn,l=new Float32Array(s*3),c=new Float32Array(s*3);for(let f=0;f<s;f+=1){const h=Math.random()*Math.PI*2,p=t+Math.random()*(i-t);l[f*3]=Math.cos(h)*p,l[f*3+1]=(Math.random()-.5)*.08,l[f*3+2]=Math.sin(h)*p,c[f*3]=.45+Math.random()*.35,c[f*3+1]=.58+Math.random()*.32,c[f*3+2]=.72+Math.random()*.26}return r.setAttribute("position",new Vn(l,3)),r.setAttribute("color",new Vn(c,3)),new ay(r,new Mp({size:.025,transparent:!0,opacity:.58,vertexColors:!0,depthWrite:!1}))}function aR(){const s=Pe.useRef(null);return Pe.useEffect(()=>{const t=s.current;if(!t)return;const i=new my({antialias:!0,alpha:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.shadowMap.enabled=!0,i.shadowMap.type=lp,t.appendChild(i.domElement),i.domElement.style.cursor="grab";const r=new Qh,l=new Kn(39,1,.1,100);l.position.set(.3,5.8,15.6),r.add(new lE("#6f8fd1",.42));const c=new tp("#fff0a8",18,54);c.castShadow=!0,r.add(c);const f=new ly("#79ecff",.9);f.position.set(-6,7,5),r.add(f);const h=new Ri;h.rotation.x=-.18,r.add(h);const p=ch(6200);r.add(p);const m=ch(950);m.material.size=.06,m.material.opacity=.96,r.add(m);const v=ch(260);v.material.size=.12,v.material.opacity=.42,r.add(v);const _=eR(),y=nR("rgba(255, 183, 55, 0.95)"),x=new hn(new Ds(.9,80,80),new Ar({map:_,color:"#fff0a8"}));h.add(x);const E=new X_(new Jh({map:y,color:"#ffb347",transparent:!0,opacity:.62,depthWrite:!1,blending:$c}));E.scale.set(3.1,3.1,1),h.add(E);const b=[{name:"Mercury",radius:1.45,size:.15,speed:1.45,color:"#9c9a92",y:.02,texture:{base:"#8f8a7a",accent:"#3c3a36",light:"#ddd7c4"}},{name:"Venus",radius:2.12,size:.26,speed:1.08,color:"#c98b3d",y:-.03,texture:{base:"#b66d2b",accent:"#5f2f16",light:"#f2bd70",clouds:!0}},{name:"Earth",radius:2.92,size:.31,speed:.82,color:"#4aa5ff",y:.05,moon:!0,texture:{base:"#235fbf",accent:"#184076",light:"#58c7ff",clouds:!0}},{name:"Mars",radius:3.72,size:.24,speed:.64,color:"#c66a42",y:-.04,texture:{base:"#a94928",accent:"#42180e",light:"#ee9a5d"}},{name:"Jupiter",radius:4.95,size:.55,speed:.43,color:"#d4a15f",y:.03,texture:{base:"#b98243",accent:"#6a3b1f",light:"#f5d192",bands:!0}},{name:"Saturn",radius:6.22,size:.43,speed:.32,color:"#c8b78a",y:-.02,rings:!0,texture:{base:"#b9a56f",accent:"#5c4b31",light:"#efe0b1",bands:!0}},{name:"Uranus",radius:7.28,size:.31,speed:.25,color:"#78d8eb",y:.06,texture:{base:"#57b9cf",accent:"#1e6173",light:"#b8f7ff",bands:!0}}],S=iR(760,3.95,4.48);h.add(S);const g=[],C=b.map((yt,Et)=>{const Bt=Ov(yt.radius,Et%2?"#b4f6ff":"#fff06a");Bt.rotation.y=Et*.05,h.add(Bt),g.push(Bt);const B=new Ri;B.rotation.y=Et*.8,h.add(B);const fe=Lv(yt.texture),Jt=new hn(new Ds(yt.size,48,48),Nv(fe,yt.color,yt.color,.04));Jt.position.set(yt.radius,yt.y,0),Jt.castShadow=!0,Jt.receiveShadow=!0,B.add(Jt);let ue=null;if(yt.moon){ue=new Ri,ue.position.copy(Jt.position);const Pt=Ov(.56,"#ffffff");Pt.material.opacity=.22,ue.add(Pt),g.push(Pt);const ie=new hn(new Ds(.07,20,20),Nv(Lv({base:"#c9c9c4",accent:"#5d5d5a",light:"#f7f7ef"}),"#f7fbff","#ffffff",.02));ie.position.x=.56,ue.add(ie),B.add(ue)}if(yt.rings){const Pt=new hn(new xp(yt.size*1.35,yt.size*2.05,80),new Ar({color:"#e9d8a4",transparent:!0,opacity:.72,side:Bi}));Pt.position.copy(Jt.position),Pt.rotation.set(Math.PI/2.55,.24,.18),B.add(Pt)}return{name:yt.name,radius:yt.radius,pivot:B,planet:Jt,moonPivot:ue,speed:yt.speed,baseY:yt.y}}),L=new Ri,D=new hn(new su(.07,.24,18),new Ar({color:"#ffffff"}));D.rotation.z=-Math.PI/2;const k=new X_(new Jh({map:y,color:"#62f6ff",transparent:!0,opacity:.72,blending:$c,depthWrite:!1}));k.scale.set(.35,.35,1),L.add(D,k),L.visible=!1,h.add(L);const H=new Ri,N=new hn(new Ds(.1,18,18),new Ar({color:"#ffffff"})),V=new hn(new su(.08,.9,18),new Ar({color:"#62f6ff",transparent:!0,opacity:.44}));V.rotation.z=Math.PI/2,V.position.x=-.45,H.add(N,V),h.add(H);const A=new cy,R=new uE,I=new de,$={position:new Q(.3,5.8,15.6),lookAt:new Q(.2,0,0)},tt=new Q(.2,0,0);let lt=-100,ut=1,z=!0,q=null,Z=0;const St=yt=>{yt&&($.position.set(yt.radius+.9,1.7,3.2),$.lookAt.set(yt.radius,yt.baseY,0))},wt=yt=>{const Et=C.find(Bt=>Bt.name===yt.detail?.planet);St(Et)},P=()=>{$.position.set(.3,5.8,15.6),$.lookAt.set(.2,0,0)},et=()=>{lt=A.getElapsedTime(),L.visible=!0},Mt=yt=>{ut=Number(yt.detail?.speed||1)},j=yt=>{g.forEach(Et=>{Et.visible=!!yt.detail?.enabled})},ft=yt=>{z=!!yt.detail?.enabled},At=yt=>{const Et=Math.max(.3,Math.min(1,Number(yt.detail?.density||100)/100));p.geometry.setDrawRange(0,Math.floor(6200*Et)),m.geometry.setDrawRange(0,Math.floor(950*Et)),v.geometry.setDrawRange(0,Math.floor(260*Et))},gt=yt=>{const Et=i.domElement.getBoundingClientRect();I.x=(yt.clientX-Et.left)/Et.width*2-1,I.y=-((yt.clientY-Et.top)/Et.height*2-1),R.setFromCamera(I,l);const Bt=R.intersectObjects(C.map(fe=>fe.planet),!1),B=Bt.length?C.find(fe=>fe.planet===Bt[0].object):null;q&&q!==B&&(q.planet.scale.setScalar(1),q.planet.material.emissiveIntensity=.04),q=B,i.domElement.style.cursor=q?"pointer":"grab",q&&(q.planet.scale.setScalar(1.16),q.planet.material.emissiveIntensity=.18)},Dt=()=>{q&&(St(q),window.dispatchEvent(new CustomEvent("space-selected-planet",{detail:{planet:q.name}})))},Xt=()=>{const yt=t.clientWidth,Et=t.clientHeight;i.setSize(yt,Et),l.aspect=yt/Et,l.updateProjectionMatrix()},Vt=()=>{Z=requestAnimationFrame(Vt);const yt=A.getElapsedTime();h.rotation.y=yt*.055*ut,p.rotation.y=yt*.012,m.rotation.y=-yt*.018,v.rotation.y=yt*.007,S.rotation.y=yt*.08,x.rotation.y=yt*.08,x.scale.setScalar(1+Math.sin(yt*2.4)*.025),E.scale.setScalar(1+Math.sin(yt*1.7)*.08),C.forEach(({pivot:B,planet:fe,moonPivot:Jt,speed:ue,baseY:Pt},ie)=>{B.rotation.y=yt*ue*ut+ie*.8,fe.rotation.y=yt*(1.2+ie*.08),fe.position.y=Pt+Math.sin(yt*1.4+ie)*.035,Jt&&(Jt.rotation.y=yt*2.4)});const Et=yt*.46;if(H.position.set(Math.cos(Et)*6.1,.8+Math.sin(yt*1.1)*.45,Math.sin(Et)*2.2),H.rotation.y=-Et,L.visible){const B=Math.min((yt-lt)/5,1),fe=B*Math.PI,Jt=2.92+(3.72-2.92)*B;L.position.set(Jt,.12+Math.sin(fe)*.9,Math.sin(B*Math.PI*2)*.42),L.rotation.y=B*Math.PI*2,B>=1&&(L.visible=!1)}const Bt=z?new Q(Math.sin(yt*.16)*.22,Math.sin(yt*.21)*.12,0):new Q(0,0,0);l.position.lerp($.position.clone().add(Bt),.045),tt.lerp($.lookAt,.055),l.lookAt(tt),i.render(r,l)};return Xt(),Vt(),window.addEventListener("resize",Xt),window.addEventListener("space-focus-planet",wt),window.addEventListener("space-reset-camera",P),window.addEventListener("space-launch-probe",et),window.addEventListener("space-set-orbit-speed",Mt),window.addEventListener("space-toggle-orbits",j),window.addEventListener("space-toggle-cinematic",ft),window.addEventListener("space-set-star-density",At),i.domElement.addEventListener("pointermove",gt),i.domElement.addEventListener("click",Dt),()=>{cancelAnimationFrame(Z),window.removeEventListener("resize",Xt),window.removeEventListener("space-focus-planet",wt),window.removeEventListener("space-reset-camera",P),window.removeEventListener("space-launch-probe",et),window.removeEventListener("space-set-orbit-speed",Mt),window.removeEventListener("space-toggle-orbits",j),window.removeEventListener("space-toggle-cinematic",ft),window.removeEventListener("space-set-star-density",At),i.domElement.removeEventListener("pointermove",gt),i.domElement.removeEventListener("click",Dt),t.removeChild(i.domElement),i.dispose(),r.traverse(yt=>{yt.geometry&&yt.geometry.dispose(),yt.material&&(yt.material.map&&yt.material.map.dispose(),yt.material.dispose())})}},[]),O.createElement("div",{className:"complexCanvas",ref:s,"aria-label":"Animated solar system scene"})}const Pv=[{name:"Mercury",type:"Terrestrial",tagline:"Fast inner world",distance:"57.9M km",period:"88 days",temperature:"167 C",gravity:"3.70 m/s2",diameter:"4,879 km",moons:"0",day:"58d 15h",color:"#b9b2a0"},{name:"Venus",type:"Terrestrial",tagline:"Golden atmosphere",distance:"108.2M km",period:"225 days",temperature:"464 C",gravity:"8.87 m/s2",diameter:"12,104 km",moons:"0",day:"243d",color:"#e7a85d"},{name:"Earth",type:"Terrestrial",tagline:"Blue mission origin",distance:"149.6M km",period:"365 days",temperature:"15 C",gravity:"9.81 m/s2",diameter:"12,742 km",moons:"1",day:"24h",color:"#58c7ff"},{name:"Mars",type:"Terrestrial",tagline:"The red planet",distance:"227.9M km",period:"687 days",temperature:"-63 C",gravity:"3.71 m/s2",diameter:"6,779 km",moons:"2",day:"24h 37m",color:"#ee7a4d"},{name:"Jupiter",type:"Gas giant",tagline:"Storm-scale gravity",distance:"778.5M km",period:"12 years",temperature:"-108 C",gravity:"24.79 m/s2",diameter:"139,820 km",moons:"95",day:"9h 56m",color:"#f0c27a"},{name:"Saturn",type:"Gas giant",tagline:"Ringed signal hub",distance:"1.43B km",period:"29 years",temperature:"-139 C",gravity:"10.44 m/s2",diameter:"116,460 km",moons:"146",day:"10h 42m",color:"#d8c38c"},{name:"Uranus",type:"Ice giant",tagline:"Outer blue vector",distance:"2.87B km",period:"84 years",temperature:"-195 C",gravity:"8.69 m/s2",diameter:"50,724 km",moons:"27",day:"17h 14m",color:"#9cefff"}],rR=[["Performance","Instanced star fields, procedural textures, reduced geometry churn and responsive canvas sizing."],["Interaction","Planet selection, event-driven camera focus, probe launch animation and UI-to-WebGL state control."],["Visuals","Custom canvas materials, glow sprites, rings, asteroid belt, particles and cinematic color states."]],sR=[["01","The Sun","Orange-gold origin point with procedural surface motion and additive glow."],["02","Inner planets","Mercury, Venus, Earth and Mars move through tight transparent orbits."],["03","Asteroid belt","Particle belt adds scale and motion between Mars and Jupiter."],["04","Gas giants","Jupiter and Saturn show larger textured bodies, rings and slower orbital rhythm."],["05","Outer darkness","Blue/violet depth, dense stars and slow cinematic camera drift."]],oR=[["Three.js","Core WebGL scene, planets, lights and orbital motion."],["React","Stateful control panels and event bridge into canvas."],["TypeScript-ready","Data-driven interfaces structured for typed models."],["GLSL-style shaders","Procedural texture and atmosphere-like glow work."],["Vite","Fast local iteration and optimized production build."],["Postprocessing-ready","Scene prepared for bloom, trails and cinematic passes."]];function zv(s){window.dispatchEvent(new CustomEvent("space-focus-planet",{detail:{planet:s}}))}function lR(){window.dispatchEvent(new CustomEvent("space-launch-probe"))}function cR(){window.dispatchEvent(new CustomEvent("space-reset-camera"))}function uR(){const[s,t]=Dp({align:"start",containScroll:"trimSnaps"}),[i,r]=Pe.useState(null),[l,c]=Pe.useState(1.25),[f,h]=Pe.useState(100),[p,m]=Pe.useState(!0),[v,_]=Pe.useState(!0),[y,x]=Pe.useState(0);Pe.useEffect(()=>{const C=L=>{const D=Pv.find(k=>k.name===L.detail?.planet);D&&r(D)};return window.addEventListener("space-selected-planet",C),()=>window.removeEventListener("space-selected-planet",C)},[]),Pe.useEffect(()=>{window.dispatchEvent(new CustomEvent("space-set-orbit-speed",{detail:{speed:l}}))},[l]),Pe.useEffect(()=>{window.dispatchEvent(new CustomEvent("space-toggle-orbits",{detail:{enabled:p}}))},[p]),Pe.useEffect(()=>{window.dispatchEvent(new CustomEvent("space-toggle-cinematic",{detail:{enabled:v}}))},[v]),Pe.useEffect(()=>{window.dispatchEvent(new CustomEvent("space-set-star-density",{detail:{density:f}}))},[f]);const E=C=>{r(C),zv(C.name),document.querySelector(".missionControl")?.scrollIntoView({behavior:"smooth",block:"center"})},b=Pe.useCallback(()=>t?.scrollPrev(),[t]),S=Pe.useCallback(()=>t?.scrollNext(),[t]),g=()=>{lR(),x(1);const C=Date.now(),L=window.setInterval(()=>{const D=Math.min(Math.round((Date.now()-C)/5e3*100),100);x(D),D>=100&&window.clearInterval(L)},120)};return O.createElement(O.Fragment,null,O.createElement("section",{className:"spaceHero","aria-label":"Cinematic space control room intro"},O.createElement("div",{className:"showcaseCopy"},O.createElement("p",{className:"kicker"},O.createElement(p2,{size:16})," NASA-style dashboard"),O.createElement("h1",null,"Cinematic space control room."),O.createElement("p",null,"Not a website about space. A space interface you can control: select planets, launch probes, tune telemetry and drive a realistic Three.js solar system."),O.createElement("div",{className:"showcaseBadges","aria-label":"3D scene details"},O.createElement("span",null,"3D planet selection"),O.createElement("span",null,"mission planner"),O.createElement("span",null,"live signal UI")))),O.createElement("section",{className:`missionControl ${i?"hasSelection":""}`,"aria-labelledby":"mission-control-title"},O.createElement("div",{className:"missionScene"},O.createElement(aR,null)),i?O.createElement("aside",{className:"controlPanel"},O.createElement("p",{className:"kicker"},O.createElement(v2,{size:16})," Selected object"),O.createElement("h2",{id:"mission-control-title"},i.name),O.createElement("dl",null,O.createElement("div",null,O.createElement("dt",null,"Distance from Sun"),O.createElement("dd",null,i.distance)),O.createElement("div",null,O.createElement("dt",null,"Orbital period"),O.createElement("dd",null,i.period)),O.createElement("div",null,O.createElement("dt",null,"Gravity"),O.createElement("dd",null,i.gravity)),O.createElement("div",null,O.createElement("dt",null,"Temperature"),O.createElement("dd",null,i.temperature))),O.createElement("div",{className:"controlActions"},O.createElement("button",{type:"button",onClick:()=>zv(i.name)},"Focus planet"),O.createElement("button",{type:"button",onClick:g},"Launch probe"))):null),O.createElement("section",{className:"spaceSection","aria-labelledby":"archive-title"},O.createElement("div",{className:"spaceIntro"},O.createElement("p",{className:"kicker"},O.createElement(_y,{size:16})," Planet archive"),O.createElement("h2",{id:"archive-title"},"Explore the system."),O.createElement("p",null,"Each card controls the main mission canvas and focuses the camera without changing pages.")),O.createElement("div",{className:"archiveCarousel"},O.createElement("div",{className:"carouselControls","aria-label":"Planet archive controls"},O.createElement("button",{type:"button",onClick:b},"Prev"),O.createElement("button",{type:"button",onClick:S},"Next")),O.createElement("div",{className:"embla",ref:s},O.createElement("div",{className:"emblaTrack"},Pv.map(C=>O.createElement("div",{className:"emblaSlide",key:C.name},O.createElement("button",{className:`archiveCard ${i?.name===C.name?"isActive":""}`,type:"button",onClick:()=>E(C)},O.createElement("span",null,C.type),O.createElement("i",{style:{"--planet-color":C.color}}),O.createElement("strong",null,C.name),O.createElement("em",null,C.tagline),O.createElement("dl",null,O.createElement("div",null,O.createElement("dt",null,"diameter"),O.createElement("dd",null,C.diameter)),O.createElement("div",null,O.createElement("dt",null,"moons"),O.createElement("dd",null,C.moons)),O.createElement("div",null,O.createElement("dt",null,"day length"),O.createElement("dd",null,C.day))),O.createElement("small",null,"Explore")))))))),O.createElement("section",{className:"spaceSection launchSection","aria-labelledby":"launch-title"},O.createElement("div",{className:"spaceIntro"},O.createElement("p",{className:"kicker"},O.createElement(Rv,{size:16})," Launch simulator"),O.createElement("h2",{id:"launch-title"},"Mission route."),O.createElement("p",null,"Earth to Jupiter transfer simulation with probe animation and live progress feedback.")),O.createElement("div",{className:"launchPanel"},O.createElement("div",{className:"missionRoute"},O.createElement("span",null,"Earth"),O.createElement("i",null),O.createElement("span",null,"Jupiter")),O.createElement("dl",null,O.createElement("div",null,O.createElement("dt",null,"Estimated travel time"),O.createElement("dd",null,"6 years")),O.createElement("div",null,O.createElement("dt",null,"Fuel required"),O.createElement("dd",null,"78%")),O.createElement("div",null,O.createElement("dt",null,"Signal delay"),O.createElement("dd",null,"43 min"))),O.createElement("div",{className:"progressTrack"},O.createElement("span",{style:{width:`${y}%`}})),O.createElement("p",{className:"launchStatus"},y>0&&y<100?`launching... ${y}%`:y===100?"arrival flash confirmed":"probe standing by"),O.createElement("button",{className:"launchButton",type:"button",onClick:g},O.createElement(Rv,{size:18})," Launch mission"))),O.createElement("section",{className:"spaceSection","aria-labelledby":"signal-title"},O.createElement("div",{className:"spaceIntro"},O.createElement("p",{className:"kicker"},O.createElement(_2,{size:16})," Signal dashboard"),O.createElement("h2",{id:"signal-title"},"Live orbital data."),O.createElement("p",null,"Controls show state management, UI-to-canvas events and realtime scene tuning.")),O.createElement("div",{className:"signalConsole"},O.createElement("div",{className:"radar","aria-hidden":"true"},O.createElement("span",null),O.createElement("span",null),O.createElement("span",null)),O.createElement("div",{className:"signalControls"},O.createElement("label",null,"Orbit speed ",O.createElement("input",{type:"range",min:"0.25",max:"2",step:"0.05",value:l,onChange:C=>c(Number(C.target.value))})),O.createElement("label",null,"Star density ",O.createElement("input",{type:"range",min:"30",max:"100",step:"5",value:f,onChange:C=>h(Number(C.target.value))})),O.createElement("label",null,O.createElement("input",{type:"checkbox",checked:p,onChange:C=>m(C.target.checked)})," Show orbits"),O.createElement("label",null,O.createElement("input",{type:"checkbox",checked:v,onChange:C=>_(C.target.checked)})," Cinematic camera"),O.createElement("button",{type:"button",onClick:cR},"Reset view")),O.createElement("div",{className:"signalDashboard"},O.createElement("div",{className:"signalReadout"},O.createElement("span",null,"Signal strength"),O.createElement("strong",null,"87%"),O.createElement("small",null,"stable")),O.createElement("div",{className:"signalReadout"},O.createElement("span",null,"Star density"),O.createElement("strong",null,Math.round(7410*(f/100))),O.createElement("small",null,"live")),O.createElement("div",{className:"signalReadout"},O.createElement("span",null,"Active planet"),O.createElement("strong",null,i?.name||"System"),O.createElement("small",null,i?"focus":"idle")),O.createElement("div",{className:"signalReadout"},O.createElement("span",null,"Orbit speed"),O.createElement("strong",null,l.toFixed(2),"x"),O.createElement("small",null,"tuned"))))),O.createElement("section",{className:"spaceSection journeySection","aria-labelledby":"journey-title"},O.createElement("div",{className:"spaceIntro"},O.createElement("p",{className:"kicker"},O.createElement(Av,{size:16})," Cinematic scroll journey"),O.createElement("h2",{id:"journey-title"},"Camera path story."),O.createElement("p",null,"Scroll blocks describe the route a production version can bind to camera keyframes.")),O.createElement("div",{className:"journeyList"},sR.map(([C,L,D])=>O.createElement("article",{key:C},O.createElement("span",null,C),O.createElement("h3",null,L),O.createElement("p",null,D))))),O.createElement("section",{className:"spaceSection","aria-labelledby":"case-title"},O.createElement("div",{className:"spaceIntro"},O.createElement("p",{className:"kicker"},O.createElement(d2,{size:16})," Technical case study"),O.createElement("h2",{id:"case-title"},"Built as a real WebGL interface.")),O.createElement("div",{className:"caseCards"},rR.map(([C,L])=>O.createElement("article",{key:C},O.createElement("h3",null,C),O.createElement("p",null,L))),O.createElement("div",{className:"flowDiagram"},"React state to Three.js scene to UI panels to user interaction"))),O.createElement("section",{className:"spaceSection","aria-labelledby":"stack-title"},O.createElement("div",{className:"spaceIntro"},O.createElement("p",{className:"kicker"},O.createElement(Av,{size:16})," Stack constellation"),O.createElement("h2",{id:"stack-title"},"Technology orbit.")),O.createElement("div",{className:"constellationStack"},oR.map(([C,L])=>O.createElement("article",{key:C},O.createElement("strong",null,C),O.createElement("p",null,L))))),O.createElement("footer",{className:"spaceContact",id:"contact"},O.createElement("div",null,O.createElement("p",{className:"kicker"},O.createElement(ou,{size:16})," Contact"),O.createElement("h2",null,"Want to build something cinematic?"),O.createElement("p",null,"Frontend developer focused on interactive interfaces, 3D experiences and polished UI systems.")),O.createElement("div",{className:"ctaRow"},O.createElement(lu,{href:bp},O.createElement(ou,{size:18})," Contact me"),O.createElement(lu,{variant:"secondary",href:Ci.github,target:"_blank",rel:"noreferrer"},O.createElement(Tp,{size:18})," View GitHub"))))}function mu({kicker:s,title:t,body:i,icon:r}){return O.createElement("div",{className:"sectionIntro"},O.createElement("p",{className:"kicker"},r?O.createElement(r,{size:16}):null,s),O.createElement("h2",null,t),i?O.createElement("p",null,i):null)}function fR(){return O.createElement("section",{className:"contentSection",id:"signal"},O.createElement(mu,{icon:o2,kicker:"Signal",title:"Architecture-tech interface energy, without the visual noise.",body:"The site now lets the 3D island carry the personality while the content stays readable and calm."}),O.createElement("div",{className:"signalCards"},e2.map((s,t)=>O.createElement("article",{className:"signalCard",key:s.title},O.createElement("span",null,String(t+1).padStart(2,"0")),O.createElement("h3",null,s.title),O.createElement("p",null,s.body)))))}function dR(){return O.createElement("section",{className:"contentSection",id:"impact"},O.createElement(mu,{kicker:"Impact",title:"Commercial frontend with product outcomes."}),O.createElement("div",{className:"impactList"},JA.map(s=>O.createElement("p",{key:s},O.createElement(u2,{size:18})," ",s))))}function hR(){return O.createElement("section",{className:"experienceRail","aria-label":"Experience timeline"},$A.map(s=>O.createElement("article",{className:"experienceItem",key:s.company},O.createElement("div",{className:"experienceHeader"},O.createElement("p",null,s.period),O.createElement("span",null,s.accent)),O.createElement("div",null,O.createElement("h3",null,s.company),O.createElement("p",null,s.role)),O.createElement("ul",null,s.points.map(t=>O.createElement("li",{key:t},t))))))}function pR(){return O.createElement("section",{className:"contentSection",id:"stack"},O.createElement(mu,{icon:l2,kicker:"Stack",title:"Frontend toolkit with a visual systems edge.",body:"A practical stack for maintainable React applications, animated interfaces and data-rich user journeys."}),O.createElement("div",{className:"skillCloud"},t2.map(s=>O.createElement("span",{key:s},s))))}function mR(){return O.createElement("footer",{className:"footer",id:"contact"},O.createElement(mu,{icon:y2,kicker:"Contact",title:"Ready for the React / Three.js interview loop.",body:"Interested in architecture tech, AI-supported workflows and international product teams."}),O.createElement("div",{className:"contactLinks"},O.createElement("a",{href:bp},O.createElement(ou,{size:18})," ",Ci.email),O.createElement("a",{href:`tel:${Ci.phone.replace(/\s/g,"")}`},O.createElement(m2,{size:18})," ",Ci.phone),O.createElement("a",{href:Ci.github,target:"_blank",rel:"noreferrer"},O.createElement(Tp,{size:18})," github.com/DisasterWoman")))}function gR(){const s=window.location.pathname==="/3d";return O.createElement(O.Fragment,null,s?null:O.createElement(ZA,null),O.createElement("div",{className:"grainLayer","aria-hidden":"true"}),O.createElement("main",{className:"pageShell"},O.createElement(n2,null),s?O.createElement(uR,null):O.createElement(O.Fragment,null,O.createElement(S2,null),O.createElement(fR,null),O.createElement(dR,null),O.createElement(hR,null),O.createElement(pR,null),O.createElement(mR,null))))}OM.createRoot(document.getElementById("root")).render(O.createElement(O.StrictMode,null,O.createElement(gR,null)));
