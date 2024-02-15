import{a as ee,j as te}from"./jsx-runtime-37f7df21.js";import{g as ne}from"./index-f1f2c4b1.js";var J={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var o={}.hasOwnProperty;function u(){for(var s=[],i=0;i<arguments.length;i++){var t=arguments[i];if(t){var r=typeof t;if(r==="string"||r==="number")s.push(t);else if(Array.isArray(t)){if(t.length){var c=u.apply(null,t);c&&s.push(c)}}else if(r==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){s.push(t.toString());continue}for(var f in t)o.call(t,f)&&t[f]&&s.push(f)}}}return s.join(" ")}e.exports?(u.default=u,e.exports=u):window.classNames=u})()})(J);var oe=J.exports;const se=ne(oe),re=Symbol(),F=Symbol(),D="a",A="w";let ce=(e,o)=>new Proxy(e,o);const q=Object.getPrototypeOf,U=new WeakMap,I=e=>e&&(U.has(e)?U.get(e):q(e)===Object.prototype||q(e)===Array.prototype),k=e=>typeof e=="object"&&e!==null,ie=e=>{if(Array.isArray(e))return Array.from(e);const o=Object.getOwnPropertyDescriptors(e);return Object.values(o).forEach(u=>{u.configurable=!0}),Object.create(q(e),o)},z=e=>e[F]||e,ae=(e,o,u,s)=>{if(!I(e))return e;let i=s&&s.get(e);if(!i){const f=z(e);i=(n=>Object.values(Object.getOwnPropertyDescriptors(n)).some(y=>!y.configurable&&!y.writable))(f)?[f,ie(f)]:[f],s==null||s.set(e,i)}const[t,r]=i;let c=u&&u.get(t);return c&&c[1].f===!!r||(c=((f,n)=>{const y={f:n};let b=!1;const p=(w,h)=>{if(!b){let S=y[D].get(f);if(S||(S={},y[D].set(f,S)),w===A)S[A]=!0;else{let O=S[w];O||(O=new Set,S[w]=O),O.add(h)}}},m={get:(w,h)=>h===F?f:(p("k",h),ae(Reflect.get(w,h),y[D],y.c,y.t)),has:(w,h)=>h===re?(b=!0,y[D].delete(f),!0):(p("h",h),Reflect.has(w,h)),getOwnPropertyDescriptor:(w,h)=>(p("o",h),Reflect.getOwnPropertyDescriptor(w,h)),ownKeys:w=>(p(A),Reflect.ownKeys(w))};return n&&(m.set=m.deleteProperty=()=>!1),[m,y]})(t,!!r),c[1].p=ce(r||t,c[0]),u&&u.set(t,c)),c[1][D]=o,c[1].c=u,c[1].t=s,c[1].p},ue=(e,o,u,s)=>{if(Object.is(e,o))return!1;if(!k(e)||!k(o))return!0;const i=u.get(z(e));if(!i)return!0;if(s){const r=s.get(e);if(r&&r.n===o)return r.g;s.set(e,{n:o,g:!1})}let t=null;try{for(const r of i.h||[])if(t=Reflect.has(e,r)!==Reflect.has(o,r),t)return t;if(i[A]===!0){if(t=((r,c)=>{const f=Reflect.ownKeys(r),n=Reflect.ownKeys(c);return f.length!==n.length||f.some((y,b)=>y!==n[b])})(e,o),t)return t}else for(const r of i.o||[])if(t=!!Reflect.getOwnPropertyDescriptor(e,r)!=!!Reflect.getOwnPropertyDescriptor(o,r),t)return t;for(const r of i.k||[])if(t=ue(e[r],o[r],u,s),t)return t;return t===null&&(t=!0),t}finally{s&&s.set(e,{n:o,g:t})}},le=e=>I(e)&&e[F]||null,$=(e,o=!0)=>{U.set(e,o)},ve=(e,o,u)=>{const s=[],i=new WeakSet,t=(r,c)=>{if(i.has(r))return;k(r)&&i.add(r);const f=k(r)&&o.get(z(r));if(f){var n,y;if((n=f.h)==null||n.forEach(p=>{const m=`:has(${String(p)})`;s.push(c?[...c,m]:[m])}),f[A]===!0){const p=":ownKeys";s.push(c?[...c,p]:[p])}else{var b;(b=f.o)==null||b.forEach(p=>{const m=`:hasOwn(${String(p)})`;s.push(c?[...c,m]:[m])})}(y=f.k)==null||y.forEach(p=>{u&&!("value"in(Object.getOwnPropertyDescriptor(r,p)||{}))||t(r[p],c?[...c,p]:[p])})}else c&&s.push(c)};return t(e),s},C=e=>typeof e=="object"&&e!==null,v=new WeakMap,V=new WeakSet,fe=(e=Object.is,o=(n,y)=>new Proxy(n,y),u=n=>C(n)&&!V.has(n)&&(Array.isArray(n)||!(Symbol.iterator in n))&&!(n instanceof WeakMap)&&!(n instanceof WeakSet)&&!(n instanceof Error)&&!(n instanceof Number)&&!(n instanceof Date)&&!(n instanceof String)&&!(n instanceof RegExp)&&!(n instanceof ArrayBuffer),s=n=>{switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:throw n}},i=new WeakMap,t=(n,y,b=s)=>{const p=i.get(n);if((p==null?void 0:p[0])===y)return p[1];const m=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n));return $(m,!0),i.set(n,[y,m]),Reflect.ownKeys(n).forEach(w=>{if(Object.getOwnPropertyDescriptor(m,w))return;const h=Reflect.get(n,w),S={value:h,enumerable:!0,configurable:!0};if(V.has(h))$(h,!1);else if(h instanceof Promise)delete S.value,S.get=()=>b(h);else if(v.has(h)){const[O,W]=v.get(h);S.value=t(O,W(),b)}Object.defineProperty(m,w,S)}),Object.preventExtensions(m)},r=new WeakMap,c=[1,1],f=n=>{if(!C(n))throw new Error("object required");const y=r.get(n);if(y)return y;let b=c[0];const p=new Set,m=(d,l=++c[0])=>{b!==l&&(b=l,p.forEach(a=>a(d,l)))};let w=c[1];const h=(d=++c[1])=>(w!==d&&!p.size&&(w=d,O.forEach(([l])=>{const a=l[1](d);a>b&&(b=a)})),b),S=d=>(l,a)=>{const g=[...l];g[1]=[d,...g[1]],m(g,a)},O=new Map,W=(d,l)=>{if(p.size){const a=l[3](S(d));O.set(d,[l,a])}else O.set(d,[l])},Y=d=>{var l;const a=O.get(d);a&&(O.delete(d),(l=a[1])==null||l.call(a))},Z=d=>(p.add(d),p.size===1&&O.forEach(([a,g],E)=>{const j=a[3](S(E));O.set(E,[a,j])}),()=>{p.delete(d),p.size===0&&O.forEach(([a,g],E)=>{g&&(g(),O.set(E,[a]))})}),x=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),L=o(x,{deleteProperty(d,l){const a=Reflect.get(d,l);Y(l);const g=Reflect.deleteProperty(d,l);return g&&m(["delete",[l],a]),g},set(d,l,a,g){const E=Reflect.has(d,l),j=Reflect.get(d,l,g);if(E&&(e(j,a)||r.has(a)&&e(j,r.get(a))))return!0;Y(l),C(a)&&(a=le(a)||a);let _=a;if(a instanceof Promise)a.then(P=>{a.status="fulfilled",a.value=P,m(["resolve",[l],P])}).catch(P=>{a.status="rejected",a.reason=P,m(["reject",[l],P])});else{!v.has(a)&&u(a)&&(_=f(a));const P=!V.has(_)&&v.get(_);P&&W(l,P)}return Reflect.set(d,l,_,g),m(["set",[l],a,j]),!0}});r.set(n,L);const H=[x,h,t,Z];return v.set(L,H),Reflect.ownKeys(n).forEach(d=>{const l=Object.getOwnPropertyDescriptor(n,d);"value"in l&&(L[d]=n[d],delete l.value,delete l.writable),Object.defineProperty(x,d,l)}),L})=>[f,v,V,e,o,u,s,i,t,r,c],[de]=fe();function pe(e={}){return de(e)}function X(e,o,u){const s=v.get(e);let i;const t=[],r=s[3];let c=!1;const n=r(y=>{if(t.push(y),u){o(t.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,c&&o(t.splice(0))}))});return c=!0,()=>{c=!1,n()}}function Ee(e,o){const u=v.get(e),[s,i,t]=u;return t(s,i(),o)}function ye(e,o,u,s){let i=e[o];return X(e,()=>{const t=e[o];Object.is(i,t)||u(i=t)},s)}const Q={renderDistance:2,multiplayerRenderDistance:2,closeConfirmation:!0,autoFullScreen:!1,mouseRawInput:!1,autoExitFullscreen:!1,localUsername:"wanderer",mouseSensX:50,mouseSensY:-1,chatWidth:320,chatHeight:180,chatScale:100,chatOpacity:100,chatOpacityOpened:100,messagesLimit:200,volume:50,fov:75,guiScale:3,autoRequestCompletions:!0,touchButtonsSize:40,touchButtonsOpacity:80,touchButtonsPosition:12,gpuPreference:"default",disableAssets:!1,debugLogNotFrequentPackets:!1,unimplementedContainers:!1,dayCycleAndLighting:!0,loadPlayerSkins:!0,antiAliasing:!1,showChunkBorders:!1,frameLimit:!1,alwaysBackupWorldBeforeLoading:void 0,alwaysShowMobileControls:!1,excludeCommunicationDebugEvents:[],preventDevReloadWhilePlaying:!1,numWorkers:4,localServerOptions:{},preferLoadReadonly:!1,disableLoadPrompts:!1,guestUsername:"guest",askGuestName:!0,showCursorBlockInSpectator:!1,renderEntities:!0,autoRespawn:!1,mutedSounds:[]},he=e=>(e.highPerformanceGpu&&(e.gpuPreference="high-performance",delete e.highPerformanceGpu),e),R=pe({...Q,...he(JSON.parse(localStorage.options||"{}"))});window.options=window.settings=R;Object.defineProperty(window,"debugChangedOptions",{get(){return Object.fromEntries(Object.entries(R).filter(([e,o])=>Q[e]!==o))}});X(R,()=>{localStorage.options=JSON.stringify(R)});const K=(e,o)=>{const u=new Set;o(new Proxy(e,{get(s,i,t){return u.add(i.toString()),Reflect.get(s,i,t)}}));for(const s of u)ye(e,s,()=>{o(e)})};K(R,e=>{globalThis.excludeCommunicationDebugEvents=e.excludeCommunicationDebugEvents});K(R,e=>{document.body.classList.toggle("disable-assets",e.disableAssets)});K(R,e=>{document.body.style.setProperty("--touch-movement-buttons-opacity",(e.touchButtonsOpacity/100).toString())});K(R,e=>{document.body.style.setProperty("--touch-movement-buttons-position",e.touchButtonsPosition*2+"px")});const me=()=>localStorage.cypress==="true";let B;const M={},N=[],G=[];async function we(e){if(N.includes(e))return!0;N.push(e);const o=await window.fetch(e);if(!o.ok){const s=`Failed to load sound ${e}`;if(me())throw new Error(s);console.warn(s);return}const u=await o.arrayBuffer();M[e]=u,N.splice(N.indexOf(e),1)}async function be(e,o=1){const u=o*(R.volume/100);if(!u)return;B??(B=new window.AudioContext);for(const[r,c]of Object.entries(M))G.includes(r)||(M[r]=await B.decodeAudioData(c),G.push(r));const s=M[e];if(!s){console.warn(`Sound ${e} not loaded yet`);return}const i=B.createGain(),t=B.createBufferSource();t.buffer=s,t.connect(i),i.connect(B.destination),i.gain.value=u,t.start(0)}const Oe="_button_q52va_1",Se="_icon_q52va_55",T={button:Oe,icon:Se};we("button_click.mp3");const je=({label:e,icon:o,children:u,inScreen:s,rootRef:i,...t})=>{const r=c=>{var f;be("button_click.mp3"),(f=t.onClick)==null||f.call(t,c)};return s&&(t.style??(t.style={}),t.style.width=150),o&&(t.style??(t.style={}),t.style.width=20),ee("button",{ref:i,...t,className:se(T.button,t.className),onClick:r,children:[o&&te("iconify-icon",{class:T.icon,icon:o}),e,u]})};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},inScreen:{defaultValue:null,description:"",name:"inScreen",required:!1,type:{name:"boolean"}},rootRef:{defaultValue:null,description:"",name:"rootRef",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}}}catch{}export{je as B,Ee as a,ue as b,se as c,ae as d,me as i,R as o,pe as p,X as s,ve as w};
//# sourceMappingURL=Button-ab0893ea.js.map
