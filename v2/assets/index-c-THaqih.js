(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var mc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Qd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Fl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,c=a?n[i+1]:0,u=i+2<n.length,f=u?n[i+2]:0,p=s>>2,g=(s&3)<<4|c>>4;let v=(c&15)<<2|f>>6,b=f&63;u||(b=64,a||(v=64)),r.push(t[p],t[g],t[v],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ll(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Qd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const f=i<n.length?t[n.charAt(i)]:64;++i;const g=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||f==null||g==null)throw new Yd;const v=s<<2|c>>4;if(r.push(v),f!==64){const b=c<<4&240|f>>2;if(r.push(b),g!==64){const S=f<<6&192|g;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Yd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jd=function(n){const e=Ll(n);return Fl.encodeByteArray(e,!0)},hi=function(n){return Jd(n).replace(/\./g,"")},Ul=function(n){try{return Fl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=()=>Xd().__FIREBASE_DEFAULTS__,ef=()=>{if(typeof process>"u"||typeof mc>"u")return;const n=mc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},tf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ul(n[1]);return e&&JSON.parse(e)},Ci=()=>{try{return Zd()||ef()||tf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},jl=n=>{var e,t;return(t=(e=Ci())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},nf=n=>{const e=jl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},$l=()=>{var n;return(n=Ci())===null||n===void 0?void 0:n.config},Bl=n=>{var e;return(e=Ci())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[hi(JSON.stringify(t)),hi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function of(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function af(){var n;const e=(n=Ci())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function uf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hf(){const n=Ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function df(){return!af()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ff(){try{return typeof indexedDB=="object"}catch{return!1}}function pf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="FirebaseError";class vt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=mf,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yr.prototype.create)}}class yr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?gf(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new vt(i,c,r)}}function gf(n,e){return n.replace(_f,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _f=/\{\$([^}]+)}/g;function vf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function di(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(gc(s)&&gc(a)){if(!di(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function gc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yf(n,e){const t=new Ef(n,e);return t.subscribe.bind(t)}class Ef{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");If(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ts),i.error===void 0&&(i.error=Ts),i.complete===void 0&&(i.complete=Ts);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function If(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ts(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(n){return n&&n._delegate?n._delegate:n}class Yt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new rf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bf(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wf(n){return n===qt?void 0:n}function bf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Tf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const Rf={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Sf=Q.INFO,Pf={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Cf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Pf[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vo{constructor(e){this.name=e,this._logLevel=Sf,this._logHandler=Cf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const kf=(n,e)=>e.some(t=>n instanceof t);let _c,vc;function Df(){return _c||(_c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nf(){return vc||(vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ql=new WeakMap,js=new WeakMap,zl=new WeakMap,ws=new WeakMap,yo=new WeakMap;function Vf(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(kt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ql.set(t,n)}).catch(()=>{}),yo.set(e,n),e}function Of(n){if(js.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});js.set(n,e)}let $s={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return js.get(n);if(e==="objectStoreNames")return n.objectStoreNames||zl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return kt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Mf(n){$s=n($s)}function xf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(bs(this),e,...t);return zl.set(r,e.sort?e.sort():[e]),kt(r)}:Nf().includes(n)?function(...e){return n.apply(bs(this),e),kt(ql.get(this))}:function(...e){return kt(n.apply(bs(this),e))}}function Lf(n){return typeof n=="function"?xf(n):(n instanceof IDBTransaction&&Of(n),kf(n,Df())?new Proxy(n,$s):n)}function kt(n){if(n instanceof IDBRequest)return Vf(n);if(ws.has(n))return ws.get(n);const e=Lf(n);return e!==n&&(ws.set(n,e),yo.set(e,n)),e}const bs=n=>yo.get(n);function Ff(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),c=kt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(kt(a.result),u.oldVersion,u.newVersion,kt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Uf=["get","getKey","getAll","getAllKeys","count"],jf=["put","add","delete","clear"],As=new Map;function yc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(As.get(e))return As.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=jf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Uf.includes(t)))return;const s=async function(a,...c){const u=this.transaction(a,i?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[t](...c),i&&u.done]))[0]};return As.set(e,s),s}Mf(n=>({...n,get:(e,t,r)=>yc(e,t)||n.get(e,t,r),has:(e,t)=>!!yc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Bf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Bf(n){const e=n.getComponent();return e?.type==="VERSION"}const Bs="@firebase/app",Ec="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new vo("@firebase/app"),qf="@firebase/app-compat",zf="@firebase/analytics-compat",Hf="@firebase/analytics",Gf="@firebase/app-check-compat",Wf="@firebase/app-check",Kf="@firebase/auth",Qf="@firebase/auth-compat",Yf="@firebase/database",Jf="@firebase/data-connect",Xf="@firebase/database-compat",Zf="@firebase/functions",ep="@firebase/functions-compat",tp="@firebase/installations",np="@firebase/installations-compat",rp="@firebase/messaging",ip="@firebase/messaging-compat",sp="@firebase/performance",op="@firebase/performance-compat",ap="@firebase/remote-config",cp="@firebase/remote-config-compat",lp="@firebase/storage",up="@firebase/storage-compat",hp="@firebase/firestore",dp="@firebase/vertexai-preview",fp="@firebase/firestore-compat",pp="firebase",mp="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs="[DEFAULT]",gp={[Bs]:"fire-core",[qf]:"fire-core-compat",[Hf]:"fire-analytics",[zf]:"fire-analytics-compat",[Wf]:"fire-app-check",[Gf]:"fire-app-check-compat",[Kf]:"fire-auth",[Qf]:"fire-auth-compat",[Yf]:"fire-rtdb",[Jf]:"fire-data-connect",[Xf]:"fire-rtdb-compat",[Zf]:"fire-fn",[ep]:"fire-fn-compat",[tp]:"fire-iid",[np]:"fire-iid-compat",[rp]:"fire-fcm",[ip]:"fire-fcm-compat",[sp]:"fire-perf",[op]:"fire-perf-compat",[ap]:"fire-rc",[cp]:"fire-rc-compat",[lp]:"fire-gcs",[up]:"fire-gcs-compat",[hp]:"fire-fst",[fp]:"fire-fst-compat",[dp]:"fire-vertex","fire-js":"fire-js",[pp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new Map,_p=new Map,zs=new Map;function Ic(n,e){try{n.container.addComponent(e)}catch(t){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vn(n){const e=n.name;if(zs.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;zs.set(e,n);for(const t of fi.values())Ic(t,n);for(const t of _p.values())Ic(t,n);return!0}function Eo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Je(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dt=new yr("app","Firebase",vp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=mp;function Hl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qs,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Dt.create("bad-app-name",{appName:String(i)});if(t||(t=$l()),!t)throw Dt.create("no-options");const s=fi.get(i);if(s){if(di(t,s.options)&&di(r,s.config))return s;throw Dt.create("duplicate-app",{appName:i})}const a=new Af(i);for(const u of zs.values())a.addComponent(u);const c=new yp(t,r,a);return fi.set(i,c),c}function Gl(n=qs){const e=fi.get(n);if(!e&&n===qs&&$l())return Hl();if(!e)throw Dt.create("no-app",{appName:n});return e}function Nt(n,e,t){var r;let i=(r=gp[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(c.join(" "));return}vn(new Yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="firebase-heartbeat-database",Ip=1,cr="firebase-heartbeat-store";let Rs=null;function Wl(){return Rs||(Rs=Ff(Ep,Ip,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(cr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Dt.create("idb-open",{originalErrorMessage:n.message})})),Rs}async function Tp(n){try{const t=(await Wl()).transaction(cr),r=await t.objectStore(cr).get(Kl(n));return await t.done,r}catch(e){if(e instanceof vt)pt.warn(e.message);else{const t=Dt.create("idb-get",{originalErrorMessage:e?.message});pt.warn(t.message)}}}async function Tc(n,e){try{const r=(await Wl()).transaction(cr,"readwrite");await r.objectStore(cr).put(e,Kl(n)),await r.done}catch(t){if(t instanceof vt)pt.warn(t.message);else{const r=Dt.create("idb-set",{originalErrorMessage:t?.message});pt.warn(r.message)}}}function Kl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=1024,bp=30*24*60*60*1e3;class Ap{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Sp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=bp}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wc(),{heartbeatsToSend:r,unsentEntries:i}=Rp(this._heartbeatsCache.heartbeats),s=hi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return pt.warn(t),""}}}function wc(){return new Date().toISOString().substring(0,10)}function Rp(n,e=wp){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),bc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),bc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Sp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ff()?pf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Tp(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bc(n){return hi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(n){vn(new Yt("platform-logger",e=>new $f(e),"PRIVATE")),vn(new Yt("heartbeat",e=>new Ap(e),"PRIVATE")),Nt(Bs,Ec,n),Nt(Bs,Ec,"esm2017"),Nt("fire-js","")}Pp("");var Cp="firebase",kp="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(Cp,kp,"app");var Ac=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gt,Ql;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function y(){}y.prototype=_.prototype,T.D=_.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(w,I,A){for(var E=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)E[ne-2]=arguments[ne];return _.prototype[I].apply(w,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,_,y){y||(y=0);var w=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)w[I]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(I=0;16>I;++I)w[I]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=T.g[0],y=T.g[1],I=T.g[2];var A=T.g[3],E=_+(A^y&(I^A))+w[0]+3614090360&4294967295;_=y+(E<<7&4294967295|E>>>25),E=A+(I^_&(y^I))+w[1]+3905402710&4294967295,A=_+(E<<12&4294967295|E>>>20),E=I+(y^A&(_^y))+w[2]+606105819&4294967295,I=A+(E<<17&4294967295|E>>>15),E=y+(_^I&(A^_))+w[3]+3250441966&4294967295,y=I+(E<<22&4294967295|E>>>10),E=_+(A^y&(I^A))+w[4]+4118548399&4294967295,_=y+(E<<7&4294967295|E>>>25),E=A+(I^_&(y^I))+w[5]+1200080426&4294967295,A=_+(E<<12&4294967295|E>>>20),E=I+(y^A&(_^y))+w[6]+2821735955&4294967295,I=A+(E<<17&4294967295|E>>>15),E=y+(_^I&(A^_))+w[7]+4249261313&4294967295,y=I+(E<<22&4294967295|E>>>10),E=_+(A^y&(I^A))+w[8]+1770035416&4294967295,_=y+(E<<7&4294967295|E>>>25),E=A+(I^_&(y^I))+w[9]+2336552879&4294967295,A=_+(E<<12&4294967295|E>>>20),E=I+(y^A&(_^y))+w[10]+4294925233&4294967295,I=A+(E<<17&4294967295|E>>>15),E=y+(_^I&(A^_))+w[11]+2304563134&4294967295,y=I+(E<<22&4294967295|E>>>10),E=_+(A^y&(I^A))+w[12]+1804603682&4294967295,_=y+(E<<7&4294967295|E>>>25),E=A+(I^_&(y^I))+w[13]+4254626195&4294967295,A=_+(E<<12&4294967295|E>>>20),E=I+(y^A&(_^y))+w[14]+2792965006&4294967295,I=A+(E<<17&4294967295|E>>>15),E=y+(_^I&(A^_))+w[15]+1236535329&4294967295,y=I+(E<<22&4294967295|E>>>10),E=_+(I^A&(y^I))+w[1]+4129170786&4294967295,_=y+(E<<5&4294967295|E>>>27),E=A+(y^I&(_^y))+w[6]+3225465664&4294967295,A=_+(E<<9&4294967295|E>>>23),E=I+(_^y&(A^_))+w[11]+643717713&4294967295,I=A+(E<<14&4294967295|E>>>18),E=y+(A^_&(I^A))+w[0]+3921069994&4294967295,y=I+(E<<20&4294967295|E>>>12),E=_+(I^A&(y^I))+w[5]+3593408605&4294967295,_=y+(E<<5&4294967295|E>>>27),E=A+(y^I&(_^y))+w[10]+38016083&4294967295,A=_+(E<<9&4294967295|E>>>23),E=I+(_^y&(A^_))+w[15]+3634488961&4294967295,I=A+(E<<14&4294967295|E>>>18),E=y+(A^_&(I^A))+w[4]+3889429448&4294967295,y=I+(E<<20&4294967295|E>>>12),E=_+(I^A&(y^I))+w[9]+568446438&4294967295,_=y+(E<<5&4294967295|E>>>27),E=A+(y^I&(_^y))+w[14]+3275163606&4294967295,A=_+(E<<9&4294967295|E>>>23),E=I+(_^y&(A^_))+w[3]+4107603335&4294967295,I=A+(E<<14&4294967295|E>>>18),E=y+(A^_&(I^A))+w[8]+1163531501&4294967295,y=I+(E<<20&4294967295|E>>>12),E=_+(I^A&(y^I))+w[13]+2850285829&4294967295,_=y+(E<<5&4294967295|E>>>27),E=A+(y^I&(_^y))+w[2]+4243563512&4294967295,A=_+(E<<9&4294967295|E>>>23),E=I+(_^y&(A^_))+w[7]+1735328473&4294967295,I=A+(E<<14&4294967295|E>>>18),E=y+(A^_&(I^A))+w[12]+2368359562&4294967295,y=I+(E<<20&4294967295|E>>>12),E=_+(y^I^A)+w[5]+4294588738&4294967295,_=y+(E<<4&4294967295|E>>>28),E=A+(_^y^I)+w[8]+2272392833&4294967295,A=_+(E<<11&4294967295|E>>>21),E=I+(A^_^y)+w[11]+1839030562&4294967295,I=A+(E<<16&4294967295|E>>>16),E=y+(I^A^_)+w[14]+4259657740&4294967295,y=I+(E<<23&4294967295|E>>>9),E=_+(y^I^A)+w[1]+2763975236&4294967295,_=y+(E<<4&4294967295|E>>>28),E=A+(_^y^I)+w[4]+1272893353&4294967295,A=_+(E<<11&4294967295|E>>>21),E=I+(A^_^y)+w[7]+4139469664&4294967295,I=A+(E<<16&4294967295|E>>>16),E=y+(I^A^_)+w[10]+3200236656&4294967295,y=I+(E<<23&4294967295|E>>>9),E=_+(y^I^A)+w[13]+681279174&4294967295,_=y+(E<<4&4294967295|E>>>28),E=A+(_^y^I)+w[0]+3936430074&4294967295,A=_+(E<<11&4294967295|E>>>21),E=I+(A^_^y)+w[3]+3572445317&4294967295,I=A+(E<<16&4294967295|E>>>16),E=y+(I^A^_)+w[6]+76029189&4294967295,y=I+(E<<23&4294967295|E>>>9),E=_+(y^I^A)+w[9]+3654602809&4294967295,_=y+(E<<4&4294967295|E>>>28),E=A+(_^y^I)+w[12]+3873151461&4294967295,A=_+(E<<11&4294967295|E>>>21),E=I+(A^_^y)+w[15]+530742520&4294967295,I=A+(E<<16&4294967295|E>>>16),E=y+(I^A^_)+w[2]+3299628645&4294967295,y=I+(E<<23&4294967295|E>>>9),E=_+(I^(y|~A))+w[0]+4096336452&4294967295,_=y+(E<<6&4294967295|E>>>26),E=A+(y^(_|~I))+w[7]+1126891415&4294967295,A=_+(E<<10&4294967295|E>>>22),E=I+(_^(A|~y))+w[14]+2878612391&4294967295,I=A+(E<<15&4294967295|E>>>17),E=y+(A^(I|~_))+w[5]+4237533241&4294967295,y=I+(E<<21&4294967295|E>>>11),E=_+(I^(y|~A))+w[12]+1700485571&4294967295,_=y+(E<<6&4294967295|E>>>26),E=A+(y^(_|~I))+w[3]+2399980690&4294967295,A=_+(E<<10&4294967295|E>>>22),E=I+(_^(A|~y))+w[10]+4293915773&4294967295,I=A+(E<<15&4294967295|E>>>17),E=y+(A^(I|~_))+w[1]+2240044497&4294967295,y=I+(E<<21&4294967295|E>>>11),E=_+(I^(y|~A))+w[8]+1873313359&4294967295,_=y+(E<<6&4294967295|E>>>26),E=A+(y^(_|~I))+w[15]+4264355552&4294967295,A=_+(E<<10&4294967295|E>>>22),E=I+(_^(A|~y))+w[6]+2734768916&4294967295,I=A+(E<<15&4294967295|E>>>17),E=y+(A^(I|~_))+w[13]+1309151649&4294967295,y=I+(E<<21&4294967295|E>>>11),E=_+(I^(y|~A))+w[4]+4149444226&4294967295,_=y+(E<<6&4294967295|E>>>26),E=A+(y^(_|~I))+w[11]+3174756917&4294967295,A=_+(E<<10&4294967295|E>>>22),E=I+(_^(A|~y))+w[2]+718787259&4294967295,I=A+(E<<15&4294967295|E>>>17),E=y+(A^(I|~_))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(I+(E<<21&4294967295|E>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var y=_-this.blockSize,w=this.B,I=this.h,A=0;A<_;){if(I==0)for(;A<=y;)i(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<_;)if(w[I++]=T.charCodeAt(A++),I==this.blockSize){i(this,w),I=0;break}}else for(;A<_;)if(w[I++]=T[A++],I==this.blockSize){i(this,w),I=0;break}}this.h=I,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var y=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=y&255,y/=256;for(this.u(T),T=Array(16),_=y=0;4>_;++_)for(var w=0;32>w;w+=8)T[y++]=this.g[_]>>>w&255;return T};function s(T,_){var y=c;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=_(T)}function a(T,_){this.h=_;for(var y=[],w=!0,I=T.length-1;0<=I;I--){var A=T[I]|0;w&&A==_||(y[I]=A,w=!1)}this.g=y}var c={};function u(T){return-128<=T&&128>T?s(T,function(_){return new a([_|0],0>_?-1:0)}):new a([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return k(f(-T));for(var _=[],y=1,w=0;T>=y;w++)_[w]=T/y|0,y*=4294967296;return new a(_,0)}function p(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return k(p(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=f(Math.pow(_,8)),w=g,I=0;I<T.length;I+=8){var A=Math.min(8,T.length-I),E=parseInt(T.substring(I,I+A),_);8>A?(A=f(Math.pow(_,A)),w=w.j(A).add(f(E))):(w=w.j(y),w=w.add(f(E)))}return w}var g=u(0),v=u(1),b=u(16777216);n=a.prototype,n.m=function(){if(C(this))return-k(this).m();for(var T=0,_=1,y=0;y<this.g.length;y++){var w=this.i(y);T+=(0<=w?w:4294967296+w)*_,_*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(C(this))return"-"+k(this).toString(T);for(var _=f(Math.pow(T,6)),y=this,w="";;){var I=q(y,_).g;y=L(y,I.j(_));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=I,S(y))return A+w;for(;6>A.length;)A="0"+A;w=A+w}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function C(T){return T.h==-1}n.l=function(T){return T=L(this,T),C(T)?-1:S(T)?0:1};function k(T){for(var _=T.g.length,y=[],w=0;w<_;w++)y[w]=~T.g[w];return new a(y,~T.h).add(v)}n.abs=function(){return C(this)?k(this):this},n.add=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],w=0,I=0;I<=_;I++){var A=w+(this.i(I)&65535)+(T.i(I)&65535),E=(A>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);w=E>>>16,A&=65535,E&=65535,y[I]=E<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function L(T,_){return T.add(k(_))}n.j=function(T){if(S(this)||S(T))return g;if(C(this))return C(T)?k(this).j(k(T)):k(k(this).j(T));if(C(T))return k(this.j(k(T)));if(0>this.l(b)&&0>T.l(b))return f(this.m()*T.m());for(var _=this.g.length+T.g.length,y=[],w=0;w<2*_;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var I=0;I<T.g.length;I++){var A=this.i(w)>>>16,E=this.i(w)&65535,ne=T.i(I)>>>16,Ye=T.i(I)&65535;y[2*w+2*I]+=E*Ye,U(y,2*w+2*I),y[2*w+2*I+1]+=A*Ye,U(y,2*w+2*I+1),y[2*w+2*I+1]+=E*ne,U(y,2*w+2*I+1),y[2*w+2*I+2]+=A*ne,U(y,2*w+2*I+2)}for(w=0;w<_;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=_;w<2*_;w++)y[w]=0;return new a(y,0)};function U(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function B(T,_){this.g=T,this.h=_}function q(T,_){if(S(_))throw Error("division by zero");if(S(T))return new B(g,g);if(C(T))return _=q(k(T),_),new B(k(_.g),k(_.h));if(C(_))return _=q(T,k(_)),new B(k(_.g),_.h);if(30<T.g.length){if(C(T)||C(_))throw Error("slowDivide_ only works with positive integers.");for(var y=v,w=_;0>=w.l(T);)y=Z(y),w=Z(w);var I=O(y,1),A=O(w,1);for(w=O(w,2),y=O(y,2);!S(w);){var E=A.add(w);0>=E.l(T)&&(I=I.add(y),A=E),w=O(w,1),y=O(y,1)}return _=L(T,I.j(_)),new B(I,_)}for(I=g;0<=T.l(_);){for(y=Math.max(1,Math.floor(T.m()/_.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),A=f(y),E=A.j(_);C(E)||0<E.l(T);)y-=w,A=f(y),E=A.j(_);S(A)&&(A=v),I=I.add(A),T=L(T,E)}return new B(I,T)}n.A=function(T){return q(this,T).h},n.and=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)&T.i(w);return new a(y,this.h&T.h)},n.or=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)|T.i(w);return new a(y,this.h|T.h)},n.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)^T.i(w);return new a(y,this.h^T.h)};function Z(T){for(var _=T.g.length+1,y=[],w=0;w<_;w++)y[w]=T.i(w)<<1|T.i(w-1)>>>31;return new a(y,T.h)}function O(T,_){var y=_>>5;_%=32;for(var w=T.g.length-y,I=[],A=0;A<w;A++)I[A]=0<_?T.i(A+y)>>>_|T.i(A+y+1)<<32-_:T.i(A+y);return new a(I,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ql=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,Gt=a}).apply(typeof Ac<"u"?Ac:typeof self<"u"?self:typeof window<"u"?window:{});var Qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yl,Zn,Jl,ti,Hs,Xl,Zl,eu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,d){return o==Array.prototype||o==Object.prototype||(o[h]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qr=="object"&&Qr];for(var h=0;h<o.length;++h){var d=o[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,h){if(h)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var R=o[m];if(!(R in d))break e;d=d[R]}o=o[o.length-1],m=d[o],h=h(m),h!=m&&h!=null&&e(d,o,{configurable:!0,writable:!0,value:h})}}function s(o,h){o instanceof String&&(o+="");var d=0,m=!1,R={next:function(){if(!m&&d<o.length){var P=d++;return{value:h(P,o[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(o){return o||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var h=typeof o;return h=h!="object"?h:o?Array.isArray(o)?"array":h:"null",h=="array"||h=="object"&&typeof o.length=="number"}function f(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function p(o,h,d){return o.call.apply(o.bind,arguments)}function g(o,h,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,m),o.apply(h,R)}}return function(){return o.apply(h,arguments)}}function v(o,h,d){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,v.apply(null,arguments)}function b(o,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function S(o,h){function d(){}d.prototype=h.prototype,o.aa=h.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,R,P){for(var V=Array(arguments.length-2),re=2;re<arguments.length;re++)V[re-2]=arguments[re];return h.prototype[R].apply(m,V)}}function C(o){const h=o.length;if(0<h){const d=Array(h);for(let m=0;m<h;m++)d[m]=o[m];return d}return[]}function k(o,h){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const R=o.length||0,P=m.length||0;o.length=R+P;for(let V=0;V<P;V++)o[R+V]=m[V]}else o.push(m)}}class L{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function U(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function q(o){return q[" "](o),o}q[" "]=function(){};var Z=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function O(o,h,d){for(const m in o)h.call(d,o[m],m,o)}function T(o,h){for(const d in o)h.call(void 0,o[d],d,o)}function _(o){const h={};for(const d in o)h[d]=o[d];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,h){let d,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(d in m)o[d]=m[d];for(let P=0;P<y.length;P++)d=y[P],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function I(o){var h=1;o=o.split(":");const d=[];for(;0<h&&o.length;)d.push(o.shift()),h--;return o.length&&d.push(o.join(":")),d}function A(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Xi;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class ne{constructor(){this.h=this.g=null}add(h,d){const m=Ye.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Ye=new L(()=>new pd,o=>o.reset());class pd{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Mn,xn=!1,Xi=new ne,ma=()=>{const o=c.Promise.resolve(void 0);Mn=()=>{o.then(md)}};var md=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){A(d)}var h=Ye;h.j(o),100>h.h&&(h.h++,o.next=h.g,h.g=o)}xn=!1};function yt(){this.s=this.s,this.C=this.C}yt.prototype.s=!1,yt.prototype.ma=function(){this.s||(this.s=!0,this.N())},yt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var gd=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,h),c.removeEventListener("test",d,h)}catch{}return o}();function Ln(o,h){if(Te.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget){if(Z){e:{try{q(h.nodeName);var R=!0;break e}catch{}R=!1}R||(h=null)}}else d=="mouseover"?h=o.fromElement:d=="mouseout"&&(h=o.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:_d[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ln.aa.h.call(this)}}S(Ln,Te);var _d={2:"touch",3:"pen",4:"mouse"};Ln.prototype.h=function(){Ln.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var kr="closure_listenable_"+(1e6*Math.random()|0),vd=0;function yd(o,h,d,m,R){this.listener=o,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=R,this.key=++vd,this.da=this.fa=!1}function Dr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Nr(o){this.src=o,this.g={},this.h=0}Nr.prototype.add=function(o,h,d,m,R){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var V=es(o,h,m,R);return-1<V?(h=o[V],d||(h.fa=!1)):(h=new yd(h,this.src,P,!!m,R),h.fa=d,o.push(h)),h};function Zi(o,h){var d=h.type;if(d in o.g){var m=o.g[d],R=Array.prototype.indexOf.call(m,h,void 0),P;(P=0<=R)&&Array.prototype.splice.call(m,R,1),P&&(Dr(h),o.g[d].length==0&&(delete o.g[d],o.h--))}}function es(o,h,d,m){for(var R=0;R<o.length;++R){var P=o[R];if(!P.da&&P.listener==h&&P.capture==!!d&&P.ha==m)return R}return-1}var ts="closure_lm_"+(1e6*Math.random()|0),ns={};function ga(o,h,d,m,R){if(Array.isArray(h)){for(var P=0;P<h.length;P++)ga(o,h[P],d,m,R);return null}return d=ya(d),o&&o[kr]?o.K(h,d,f(m)?!!m.capture:!1,R):Ed(o,h,d,!1,m,R)}function Ed(o,h,d,m,R,P){if(!h)throw Error("Invalid event type");var V=f(R)?!!R.capture:!!R,re=is(o);if(re||(o[ts]=re=new Nr(o)),d=re.add(h,d,m,V,P),d.proxy)return d;if(m=Id(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)gd||(R=V),R===void 0&&(R=!1),o.addEventListener(h.toString(),m,R);else if(o.attachEvent)o.attachEvent(va(h.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Id(){function o(d){return h.call(o.src,o.listener,d)}const h=Td;return o}function _a(o,h,d,m,R){if(Array.isArray(h))for(var P=0;P<h.length;P++)_a(o,h[P],d,m,R);else m=f(m)?!!m.capture:!!m,d=ya(d),o&&o[kr]?(o=o.i,h=String(h).toString(),h in o.g&&(P=o.g[h],d=es(P,d,m,R),-1<d&&(Dr(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[h],o.h--)))):o&&(o=is(o))&&(h=o.g[h.toString()],o=-1,h&&(o=es(h,d,m,R)),(d=-1<o?h[o]:null)&&rs(d))}function rs(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[kr])Zi(h.i,o);else{var d=o.type,m=o.proxy;h.removeEventListener?h.removeEventListener(d,m,o.capture):h.detachEvent?h.detachEvent(va(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=is(h))?(Zi(d,o),d.h==0&&(d.src=null,h[ts]=null)):Dr(o)}}}function va(o){return o in ns?ns[o]:ns[o]="on"+o}function Td(o,h){if(o.da)o=!0;else{h=new Ln(h,this);var d=o.listener,m=o.ha||o.src;o.fa&&rs(o),o=d.call(m,h)}return o}function is(o){return o=o[ts],o instanceof Nr?o:null}var ss="__closure_events_fn_"+(1e9*Math.random()>>>0);function ya(o){return typeof o=="function"?o:(o[ss]||(o[ss]=function(h){return o.handleEvent(h)}),o[ss])}function we(){yt.call(this),this.i=new Nr(this),this.M=this,this.F=null}S(we,yt),we.prototype[kr]=!0,we.prototype.removeEventListener=function(o,h,d,m){_a(this,o,h,d,m)};function Oe(o,h){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=h.type||h,typeof h=="string")h=new Te(h,o);else if(h instanceof Te)h.target=h.target||o;else{var R=h;h=new Te(m,o),w(h,R)}if(R=!0,d)for(var P=d.length-1;0<=P;P--){var V=h.g=d[P];R=Vr(V,m,!0,h)&&R}if(V=h.g=o,R=Vr(V,m,!0,h)&&R,R=Vr(V,m,!1,h)&&R,d)for(P=0;P<d.length;P++)V=h.g=d[P],R=Vr(V,m,!1,h)&&R}we.prototype.N=function(){if(we.aa.N.call(this),this.i){var o=this.i,h;for(h in o.g){for(var d=o.g[h],m=0;m<d.length;m++)Dr(d[m]);delete o.g[h],o.h--}}this.F=null},we.prototype.K=function(o,h,d,m){return this.i.add(String(o),h,!1,d,m)},we.prototype.L=function(o,h,d,m){return this.i.add(String(o),h,!0,d,m)};function Vr(o,h,d,m){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();for(var R=!0,P=0;P<h.length;++P){var V=h[P];if(V&&!V.da&&V.capture==d){var re=V.listener,_e=V.ha||V.src;V.fa&&Zi(o.i,V),R=re.call(_e,m)!==!1&&R}}return R&&!m.defaultPrevented}function Ea(o,h,d){if(typeof o=="function")d&&(o=v(o,d));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(o,h||0)}function Ia(o){o.g=Ea(()=>{o.g=null,o.i&&(o.i=!1,Ia(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class wd extends yt{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ia(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fn(o){yt.call(this),this.h=o,this.g={}}S(Fn,yt);var Ta=[];function wa(o){O(o.g,function(h,d){this.g.hasOwnProperty(d)&&rs(h)},o),o.g={}}Fn.prototype.N=function(){Fn.aa.N.call(this),wa(this)},Fn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var os=c.JSON.stringify,bd=c.JSON.parse,Ad=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function as(){}as.prototype.h=null;function ba(o){return o.h||(o.h=o.i())}function Aa(){}var Un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cs(){Te.call(this,"d")}S(cs,Te);function ls(){Te.call(this,"c")}S(ls,Te);var Ut={},Ra=null;function Or(){return Ra=Ra||new we}Ut.La="serverreachability";function Sa(o){Te.call(this,Ut.La,o)}S(Sa,Te);function jn(o){const h=Or();Oe(h,new Sa(h))}Ut.STAT_EVENT="statevent";function Pa(o,h){Te.call(this,Ut.STAT_EVENT,o),this.stat=h}S(Pa,Te);function Me(o){const h=Or();Oe(h,new Pa(h,o))}Ut.Ma="timingevent";function Ca(o,h){Te.call(this,Ut.Ma,o),this.size=h}S(Ca,Te);function $n(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},h)}function Bn(){this.g=!0}Bn.prototype.xa=function(){this.g=!1};function Rd(o,h,d,m,R,P){o.info(function(){if(o.g)if(P)for(var V="",re=P.split("&"),_e=0;_e<re.length;_e++){var J=re[_e].split("=");if(1<J.length){var be=J[0];J=J[1];var Ae=be.split("_");V=2<=Ae.length&&Ae[1]=="type"?V+(be+"="+J+"&"):V+(be+"=redacted&")}}else V=null;else V=P;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+h+`
`+d+`
`+V})}function Sd(o,h,d,m,R,P,V){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+h+`
`+d+`
`+P+" "+V})}function on(o,h,d,m){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+Cd(o,d)+(m?" "+m:"")})}function Pd(o,h){o.info(function(){return"TIMEOUT: "+h})}Bn.prototype.info=function(){};function Cd(o,h){if(!o.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var R=m[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var V=1;V<R.length;V++)R[V]=""}}}}return os(d)}catch{return h}}var Mr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ka={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},us;function xr(){}S(xr,as),xr.prototype.g=function(){return new XMLHttpRequest},xr.prototype.i=function(){return{}},us=new xr;function Et(o,h,d,m){this.j=o,this.i=h,this.l=d,this.R=m||1,this.U=new Fn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Da}function Da(){this.i=null,this.g="",this.h=!1}var Na={},hs={};function ds(o,h,d){o.L=1,o.v=jr(ot(h)),o.m=d,o.P=!0,Va(o,null)}function Va(o,h){o.F=Date.now(),Lr(o),o.A=ot(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Wa(d.i,"t",m),o.C=0,d=o.j.J,o.h=new Da,o.g=hc(o.j,d?h:null,!o.m),0<o.O&&(o.M=new wd(v(o.Y,o,o.g),o.O)),h=o.U,d=o.g,m=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Ta[0]=R.toString()),R=Ta);for(var P=0;P<R.length;P++){var V=ga(d,R[P],m||h.handleEvent,!1,h.h||h);if(!V)break;h.g[V.key]=V}h=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,h)):(o.u="GET",o.g.ea(o.A,o.u,null,h)),jn(),Rd(o.i,o.u,o.A,o.l,o.R,o.m)}Et.prototype.ca=function(o){o=o.target;const h=this.M;h&&at(o)==3?h.j():this.Y(o)},Et.prototype.Y=function(o){try{if(o==this.g)e:{const Ae=at(this.g);var h=this.g.Ba();const ln=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||ec(this.g)))){this.J||Ae!=4||h==7||(h==8||0>=ln?jn(3):jn(2)),fs(this);var d=this.g.Z();this.X=d;t:if(Oa(this)){var m=ec(this.g);o="";var R=m.length,P=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jt(this),qn(this);var V="";break t}this.h.i=new c.TextDecoder}for(h=0;h<R;h++)this.h.h=!0,o+=this.h.i.decode(m[h],{stream:!(P&&h==R-1)});m.length=0,this.h.g+=o,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=d==200,Sd(this.i,this.u,this.A,this.l,this.R,Ae,d),this.o){if(this.T&&!this.K){t:{if(this.g){var re,_e=this.g;if((re=_e.g?_e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(re)){var J=re;break t}}J=null}if(d=J)on(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ps(this,d);else{this.o=!1,this.s=3,Me(12),jt(this),qn(this);break e}}if(this.P){d=!0;let Ge;for(;!this.J&&this.C<V.length;)if(Ge=kd(this,V),Ge==hs){Ae==4&&(this.s=4,Me(14),d=!1),on(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==Na){this.s=4,Me(15),on(this.i,this.l,V,"[Invalid Chunk]"),d=!1;break}else on(this.i,this.l,Ge,null),ps(this,Ge);if(Oa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||V.length!=0||this.h.h||(this.s=1,Me(16),d=!1),this.o=this.o&&d,!d)on(this.i,this.l,V,"[Invalid Chunked Response]"),jt(this),qn(this);else if(0<V.length&&!this.W){this.W=!0;var be=this.j;be.g==this&&be.ba&&!be.M&&(be.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Es(be),be.M=!0,Me(11))}}else on(this.i,this.l,V,null),ps(this,V);Ae==4&&jt(this),this.o&&!this.J&&(Ae==4?ac(this.j,this):(this.o=!1,Lr(this)))}else Wd(this.g),d==400&&0<V.indexOf("Unknown SID")?(this.s=3,Me(12)):(this.s=0,Me(13)),jt(this),qn(this)}}}catch{}finally{}};function Oa(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function kd(o,h){var d=o.C,m=h.indexOf(`
`,d);return m==-1?hs:(d=Number(h.substring(d,m)),isNaN(d)?Na:(m+=1,m+d>h.length?hs:(h=h.slice(m,m+d),o.C=m+d,h)))}Et.prototype.cancel=function(){this.J=!0,jt(this)};function Lr(o){o.S=Date.now()+o.I,Ma(o,o.I)}function Ma(o,h){if(o.B!=null)throw Error("WatchDog timer not null");o.B=$n(v(o.ba,o),h)}function fs(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Et.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Pd(this.i,this.A),this.L!=2&&(jn(),Me(17)),jt(this),this.s=2,qn(this)):Ma(this,this.S-o)};function qn(o){o.j.G==0||o.J||ac(o.j,o)}function jt(o){fs(o);var h=o.M;h&&typeof h.ma=="function"&&h.ma(),o.M=null,wa(o.U),o.g&&(h=o.g,o.g=null,h.abort(),h.ma())}function ps(o,h){try{var d=o.j;if(d.G!=0&&(d.g==o||ms(d.h,o))){if(!o.K&&ms(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Gr(d),zr(d);else break e;ys(d),Me(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=$n(v(d.Za,d),6e3));if(1>=Fa(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Bt(d,11)}else if((o.K||d.g==o)&&Gr(d),!U(h))for(R=d.Da.g.parse(h),h=0;h<R.length;h++){let J=R[h];if(d.T=J[0],J=J[1],d.G==2)if(J[0]=="c"){d.K=J[1],d.ia=J[2];const be=J[3];be!=null&&(d.la=be,d.j.info("VER="+d.la));const Ae=J[4];Ae!=null&&(d.Aa=Ae,d.j.info("SVER="+d.Aa));const ln=J[5];ln!=null&&typeof ln=="number"&&0<ln&&(m=1.5*ln,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ge=o.g;if(Ge){const Kr=Ge.g?Ge.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Kr){var P=m.h;P.g||Kr.indexOf("spdy")==-1&&Kr.indexOf("quic")==-1&&Kr.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(gs(P,P.h),P.h=null))}if(m.D){const Is=Ge.g?Ge.g.getResponseHeader("X-HTTP-Session-Id"):null;Is&&(m.ya=Is,ie(m.I,m.D,Is))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var V=o;if(m.qa=uc(m,m.J?m.ia:null,m.W),V.K){Ua(m.h,V);var re=V,_e=m.L;_e&&(re.I=_e),re.B&&(fs(re),Lr(re)),m.g=V}else sc(m);0<d.i.length&&Hr(d)}else J[0]!="stop"&&J[0]!="close"||Bt(d,7);else d.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Bt(d,7):vs(d):J[0]!="noop"&&d.l&&d.l.ta(J),d.v=0)}}jn(4)}catch{}}var Dd=class{constructor(o,h){this.g=o,this.map=h}};function xa(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function La(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Fa(o){return o.h?1:o.g?o.g.size:0}function ms(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function gs(o,h){o.g?o.g.add(h):o.h=h}function Ua(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}xa.prototype.cancel=function(){if(this.i=ja(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ja(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const d of o.g.values())h=h.concat(d.D);return h}return C(o.i)}function Nd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var h=[],d=o.length,m=0;m<d;m++)h.push(o[m]);return h}h=[],d=0;for(m in o)h[d++]=o[m];return h}function Vd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var h=[];o=o.length;for(var d=0;d<o;d++)h.push(d);return h}h=[],d=0;for(const m in o)h[d++]=m;return h}}}function $a(o,h){if(o.forEach&&typeof o.forEach=="function")o.forEach(h,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,h,void 0);else for(var d=Vd(o),m=Nd(o),R=m.length,P=0;P<R;P++)h.call(void 0,m[P],d&&d[P],o)}var Ba=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Od(o,h){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),R=null;if(0<=m){var P=o[d].substring(0,m);R=o[d].substring(m+1)}else P=o[d];h(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function $t(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof $t){this.h=o.h,Fr(this,o.j),this.o=o.o,this.g=o.g,Ur(this,o.s),this.l=o.l;var h=o.i,d=new Gn;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),qa(this,d),this.m=o.m}else o&&(h=String(o).match(Ba))?(this.h=!1,Fr(this,h[1]||"",!0),this.o=zn(h[2]||""),this.g=zn(h[3]||"",!0),Ur(this,h[4]),this.l=zn(h[5]||"",!0),qa(this,h[6]||"",!0),this.m=zn(h[7]||"")):(this.h=!1,this.i=new Gn(null,this.h))}$t.prototype.toString=function(){var o=[],h=this.j;h&&o.push(Hn(h,za,!0),":");var d=this.g;return(d||h=="file")&&(o.push("//"),(h=this.o)&&o.push(Hn(h,za,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Hn(d,d.charAt(0)=="/"?Ld:xd,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Hn(d,Ud)),o.join("")};function ot(o){return new $t(o)}function Fr(o,h,d){o.j=d?zn(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function Ur(o,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);o.s=h}else o.s=null}function qa(o,h,d){h instanceof Gn?(o.i=h,jd(o.i,o.h)):(d||(h=Hn(h,Fd)),o.i=new Gn(h,o.h))}function ie(o,h,d){o.i.set(h,d)}function jr(o){return ie(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function zn(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Hn(o,h,d){return typeof o=="string"?(o=encodeURI(o).replace(h,Md),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Md(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var za=/[#\/\?@]/g,xd=/[#\?:]/g,Ld=/[#\?]/g,Fd=/[#\?@]/g,Ud=/#/g;function Gn(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function It(o){o.g||(o.g=new Map,o.h=0,o.i&&Od(o.i,function(h,d){o.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}n=Gn.prototype,n.add=function(o,h){It(this),this.i=null,o=an(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(h),this.h+=1,this};function Ha(o,h){It(o),h=an(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function Ga(o,h){return It(o),h=an(o,h),o.g.has(h)}n.forEach=function(o,h){It(this),this.g.forEach(function(d,m){d.forEach(function(R){o.call(h,R,m,this)},this)},this)},n.na=function(){It(this);const o=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let m=0;m<h.length;m++){const R=o[m];for(let P=0;P<R.length;P++)d.push(h[m])}return d},n.V=function(o){It(this);let h=[];if(typeof o=="string")Ga(this,o)&&(h=h.concat(this.g.get(an(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)h=h.concat(o[d])}return h},n.set=function(o,h){return It(this),this.i=null,o=an(this,o),Ga(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},n.get=function(o,h){return o?(o=this.V(o),0<o.length?String(o[0]):h):h};function Wa(o,h,d){Ha(o,h),0<d.length&&(o.i=null,o.g.set(an(o,h),C(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var m=h[d];const P=encodeURIComponent(String(m)),V=this.V(m);for(m=0;m<V.length;m++){var R=P;V[m]!==""&&(R+="="+encodeURIComponent(String(V[m]))),o.push(R)}}return this.i=o.join("&")};function an(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function jd(o,h){h&&!o.j&&(It(o),o.i=null,o.g.forEach(function(d,m){var R=m.toLowerCase();m!=R&&(Ha(this,m),Wa(this,R,d))},o)),o.j=h}function $d(o,h){const d=new Bn;if(c.Image){const m=new Image;m.onload=b(Tt,d,"TestLoadImage: loaded",!0,h,m),m.onerror=b(Tt,d,"TestLoadImage: error",!1,h,m),m.onabort=b(Tt,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=b(Tt,d,"TestLoadImage: timeout",!1,h,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else h(!1)}function Bd(o,h){const d=new Bn,m=new AbortController,R=setTimeout(()=>{m.abort(),Tt(d,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:m.signal}).then(P=>{clearTimeout(R),P.ok?Tt(d,"TestPingServer: ok",!0,h):Tt(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),Tt(d,"TestPingServer: error",!1,h)})}function Tt(o,h,d,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(d)}catch{}}function qd(){this.g=new Ad}function zd(o,h,d){const m=d||"";try{$a(o,function(R,P){let V=R;f(R)&&(V=os(R)),h.push(m+P+"="+encodeURIComponent(V))})}catch(R){throw h.push(m+"type="+encodeURIComponent("_badmap")),R}}function $r(o){this.l=o.Ub||null,this.j=o.eb||!1}S($r,as),$r.prototype.g=function(){return new Br(this.l,this.j)},$r.prototype.i=function(o){return function(){return o}}({});function Br(o,h){we.call(this),this.D=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Br,we),n=Br.prototype,n.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=h,this.readyState=1,Kn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(h.body=o),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Kn(this)),this.g&&(this.readyState=3,Kn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ka(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ka(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?Wn(this):Kn(this),this.readyState==3&&Ka(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Wn(this))},n.Qa=function(o){this.g&&(this.response=o,Wn(this))},n.ga=function(){this.g&&Wn(this)};function Wn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Kn(o)}n.setRequestHeader=function(o,h){this.u.append(o,h)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=h.next();return o.join(`\r
`)};function Kn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Br.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Qa(o){let h="";return O(o,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function _s(o,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Qa(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ie(o,h,d))}function ae(o){we.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ae,we);var Hd=/^https?$/i,Gd=["POST","PUT"];n=ae.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():us.g(),this.v=this.o?ba(this.o):ba(us),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(P){Ya(this,P);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)d.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Gd,h,void 0))||m||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,V]of d)this.g.setRequestHeader(P,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Za(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Ya(this,P)}};function Ya(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.m=5,Ja(o),qr(o)}function Ja(o){o.A||(o.A=!0,Oe(o,"complete"),Oe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Oe(this,"complete"),Oe(this,"abort"),qr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qr(this,!0)),ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Xa(this):this.bb())},n.bb=function(){Xa(this)};function Xa(o){if(o.h&&typeof a<"u"&&(!o.v[1]||at(o)!=4||o.Z()!=2)){if(o.u&&at(o)==4)Ea(o.Ea,0,o);else if(Oe(o,"readystatechange"),at(o)==4){o.h=!1;try{const V=o.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=V===0){var R=String(o.D).match(Ba)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),m=!Hd.test(R?R.toLowerCase():"")}d=m}if(d)Oe(o,"complete"),Oe(o,"success");else{o.m=6;try{var P=2<at(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Ja(o)}}finally{qr(o)}}}}function qr(o,h){if(o.g){Za(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,h||Oe(o,"ready");try{d.onreadystatechange=m}catch{}}}function Za(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function at(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),bd(h)}};function ec(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Wd(o){const h={};o=(o.g&&2<=at(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(U(o[m]))continue;var d=I(o[m]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=h[R]||[];h[R]=P,P.push(d)}T(h,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qn(o,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||h}function tc(o){this.Aa=0,this.i=[],this.j=new Bn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qn("baseRetryDelayMs",5e3,o),this.cb=Qn("retryDelaySeedMs",1e4,o),this.Wa=Qn("forwardChannelMaxRetries",2,o),this.wa=Qn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new xa(o&&o.concurrentRequestLimit),this.Da=new qd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=tc.prototype,n.la=8,n.G=1,n.connect=function(o,h,d,m){Me(0),this.W=o,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=uc(this,null,this.W),Hr(this)};function vs(o){if(nc(o),o.G==3){var h=o.U++,d=ot(o.I);if(ie(d,"SID",o.K),ie(d,"RID",h),ie(d,"TYPE","terminate"),Yn(o,d),h=new Et(o,o.j,h),h.L=2,h.v=jr(ot(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=h.v,d=!0),d||(h.g=hc(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Lr(h)}lc(o)}function zr(o){o.g&&(Es(o),o.g.cancel(),o.g=null)}function nc(o){zr(o),o.u&&(c.clearTimeout(o.u),o.u=null),Gr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Hr(o){if(!La(o.h)&&!o.s){o.s=!0;var h=o.Ga;Mn||ma(),xn||(Mn(),xn=!0),Xi.add(h,o),o.B=0}}function Kd(o,h){return Fa(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=h.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=$n(v(o.Ga,o,h),cc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Et(this,this.j,o);let P=this.o;if(this.S&&(P?(P=_(P),w(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=ic(this,R,h),d=ot(this.I),ie(d,"RID",o),ie(d,"CVER",22),this.D&&ie(d,"X-HTTP-Session-Id",this.D),Yn(this,d),P&&(this.O?h="headers="+encodeURIComponent(String(Qa(P)))+"&"+h:this.m&&_s(d,this.m,P)),gs(this.h,R),this.Ua&&ie(d,"TYPE","init"),this.P?(ie(d,"$req",h),ie(d,"SID","null"),R.T=!0,ds(R,d,null)):ds(R,d,h),this.G=2}}else this.G==3&&(o?rc(this,o):this.i.length==0||La(this.h)||rc(this))};function rc(o,h){var d;h?d=h.l:d=o.U++;const m=ot(o.I);ie(m,"SID",o.K),ie(m,"RID",d),ie(m,"AID",o.T),Yn(o,m),o.m&&o.o&&_s(m,o.m,o.o),d=new Et(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),h&&(o.i=h.D.concat(o.i)),h=ic(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),gs(o.h,d),ds(d,m,h)}function Yn(o,h){o.H&&O(o.H,function(d,m){ie(h,m,d)}),o.l&&$a({},function(d,m){ie(h,m,d)})}function ic(o,h,d){d=Math.min(o.i.length,d);var m=o.l?v(o.l.Na,o.l,o):null;e:{var R=o.i;let P=-1;for(;;){const V=["count="+d];P==-1?0<d?(P=R[0].g,V.push("ofs="+P)):P=0:V.push("ofs="+P);let re=!0;for(let _e=0;_e<d;_e++){let J=R[_e].g;const be=R[_e].map;if(J-=P,0>J)P=Math.max(0,R[_e].g-100),re=!1;else try{zd(be,V,"req"+J+"_")}catch{m&&m(be)}}if(re){m=V.join("&");break e}}}return o=o.i.splice(0,d),h.D=o,m}function sc(o){if(!o.g&&!o.u){o.Y=1;var h=o.Fa;Mn||ma(),xn||(Mn(),xn=!0),Xi.add(h,o),o.v=0}}function ys(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=$n(v(o.Fa,o),cc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,oc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=$n(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Me(10),zr(this),oc(this))};function Es(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function oc(o){o.g=new Et(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var h=ot(o.qa);ie(h,"RID","rpc"),ie(h,"SID",o.K),ie(h,"AID",o.T),ie(h,"CI",o.F?"0":"1"),!o.F&&o.ja&&ie(h,"TO",o.ja),ie(h,"TYPE","xmlhttp"),Yn(o,h),o.m&&o.o&&_s(h,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=jr(ot(h)),d.m=null,d.P=!0,Va(d,o)}n.Za=function(){this.C!=null&&(this.C=null,zr(this),ys(this),Me(19))};function Gr(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function ac(o,h){var d=null;if(o.g==h){Gr(o),Es(o),o.g=null;var m=2}else if(ms(o.h,h))d=h.D,Ua(o.h,h),m=1;else return;if(o.G!=0){if(h.o)if(m==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var R=o.B;m=Or(),Oe(m,new Ca(m,d)),Hr(o)}else sc(o);else if(R=h.s,R==3||R==0&&0<h.X||!(m==1&&Kd(o,h)||m==2&&ys(o)))switch(d&&0<d.length&&(h=o.h,h.i=h.i.concat(d)),R){case 1:Bt(o,5);break;case 4:Bt(o,10);break;case 3:Bt(o,6);break;default:Bt(o,2)}}}function cc(o,h){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*h}function Bt(o,h){if(o.j.info("Error code "+h),h==2){var d=v(o.fb,o),m=o.Xa;const R=!m;m=new $t(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Fr(m,"https"),jr(m),R?$d(m.toString(),d):Bd(m.toString(),d)}else Me(2);o.G=0,o.l&&o.l.sa(h),lc(o),nc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function lc(o){if(o.G=0,o.ka=[],o.l){const h=ja(o.h);(h.length!=0||o.i.length!=0)&&(k(o.ka,h),k(o.ka,o.i),o.h.i.length=0,C(o.i),o.i.length=0),o.l.ra()}}function uc(o,h,d){var m=d instanceof $t?ot(d):new $t(d);if(m.g!="")h&&(m.g=h+"."+m.g),Ur(m,m.s);else{var R=c.location;m=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;var P=new $t(null);m&&Fr(P,m),h&&(P.g=h),R&&Ur(P,R),d&&(P.l=d),m=P}return d=o.D,h=o.ya,d&&h&&ie(m,d,h),ie(m,"VER",o.la),Yn(o,m),m}function hc(o,h,d){if(h&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Ca&&!o.pa?new ae(new $r({eb:d})):new ae(o.pa),h.Ha(o.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function dc(){}n=dc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Wr(){}Wr.prototype.g=function(o,h){return new Ue(o,h)};function Ue(o,h){we.call(this),this.g=new tc(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(o?o["X-WebChannel-Client-Profile"]=h.va:o={"X-WebChannel-Client-Profile":h.va}),this.g.S=o,(o=h&&h.Sb)&&!U(o)&&(this.g.m=o),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!U(h)&&(this.g.D=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new cn(this)}S(Ue,we),Ue.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ue.prototype.close=function(){vs(this.g)},Ue.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=os(o),o=d);h.i.push(new Dd(h.Ya++,o)),h.G==3&&Hr(h)},Ue.prototype.N=function(){this.g.l=null,delete this.j,vs(this.g),delete this.g,Ue.aa.N.call(this)};function fc(o){cs.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const d in h){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}S(fc,cs);function pc(){ls.call(this),this.status=1}S(pc,ls);function cn(o){this.g=o}S(cn,dc),cn.prototype.ua=function(){Oe(this.g,"a")},cn.prototype.ta=function(o){Oe(this.g,new fc(o))},cn.prototype.sa=function(o){Oe(this.g,new pc)},cn.prototype.ra=function(){Oe(this.g,"b")},Wr.prototype.createWebChannel=Wr.prototype.g,Ue.prototype.send=Ue.prototype.o,Ue.prototype.open=Ue.prototype.m,Ue.prototype.close=Ue.prototype.close,eu=function(){return new Wr},Zl=function(){return Or()},Xl=Ut,Hs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mr.NO_ERROR=0,Mr.TIMEOUT=8,Mr.HTTP_ERROR=6,ti=Mr,ka.COMPLETE="complete",Jl=ka,Aa.EventType=Un,Un.OPEN="a",Un.CLOSE="b",Un.ERROR="c",Un.MESSAGE="d",we.prototype.listen=we.prototype.K,Zn=Aa,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha,Yl=ae}).apply(typeof Qr<"u"?Qr:typeof self<"u"?self:typeof window<"u"?window:{});const Rc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new vo("@firebase/firestore");function Jn(){return Jt.logLevel}function F(n,...e){if(Jt.logLevel<=Q.DEBUG){const t=e.map(Io);Jt.debug(`Firestore (${kn}): ${n}`,...t)}}function mt(n,...e){if(Jt.logLevel<=Q.ERROR){const t=e.map(Io);Jt.error(`Firestore (${kn}): ${n}`,...t)}}function yn(n,...e){if(Jt.logLevel<=Q.WARN){const t=e.map(Io);Jt.warn(`Firestore (${kn}): ${n}`,...t)}}function Io(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(n="Unexpected state"){const e=`FIRESTORE (${kn}) INTERNAL ASSERTION FAILED: `+n;throw mt(e),new Error(e)}function ee(n,e){n||H()}function W(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends vt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Dp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ke.UNAUTHENTICATED))}shutdown(){}}class Np{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Vp{constructor(e){this.t=e,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ee(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Wt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Wt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string"),new tu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string"),new ke(e)}}class Op{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Mp{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Op(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lp{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ee(this.o===void 0);const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ee(typeof t.token=="string"),this.R=t.token,new xp(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Fp(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function X(n,e){return n<e?-1:n>e?1:0}function En(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new j(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new pe(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new pe(0,0))}static max(){return new G(new pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t,r){t===void 0?t=0:t>e.length&&H(),r===void 0?r=e.length-t:r>e.length-t&&H(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return lr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof lr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ce extends lr{construct(e,t,r){return new ce(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ce(t)}static emptyPath(){return new ce([])}}const Up=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ye extends lr{construct(e,t,r){return new ye(e,t,r)}static isValidIdentifier(e){return Up.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ye(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new j(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new j(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new j(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ye(t)}static emptyPath(){return new ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ce.fromString(e))}static fromName(e){return new $(ce.fromString(e).popFirst(5))}static empty(){return new $(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ce(e.slice()))}}function jp(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new pe(t+1,0):new pe(t,r));return new Mt(i,$.empty(),e)}function $p(n){return new Mt(n.readTime,n.key,-1)}class Mt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Mt(G.min(),$.empty(),-1)}static max(){return new Mt(G.max(),$.empty(),-1)}}function Bp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ir(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==qp)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(i=>i?D.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new D((r,i)=>{const s=e.length,a=new Array(s);let c=0;for(let u=0;u<s;u++){const f=u;t(e[f]).next(p=>{a[f]=p,++c,c===s&&r(a)},p=>i(p))}})}static doWhile(e,t){return new D((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Hp(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Tr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}To.oe=-1;function ki(n){return n==null}function pi(n){return n===0&&1/n==-1/0}function Gp(n){return typeof n=="number"&&Number.isInteger(n)&&!pi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function rn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ru(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yr(this.root,e,this.comparator,!0)}}class Yr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ve.RED,this.left=i??ve.EMPTY,this.right=s??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ve(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Pc(this.data.getIterator())}getIteratorFrom(e){return new Pc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ee(this.comparator);return t.data=e,t}}class Pc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.fields=e,e.sort(ye.comparator)}static empty(){return new je([])}unionWith(e){let t=new Ee(ye.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return En(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new iu("Invalid base64 string: "+s):s}}(e);return new Ie(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Ie(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ie.EMPTY_BYTE_STRING=new Ie("");const Wp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xt(n){if(ee(!!n),typeof n=="string"){let e=0;const t=Wp.exec(n);if(ee(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xt(n){return typeof n=="string"?Ie.fromBase64String(n):Ie.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function bo(n){const e=n.mapValue.fields.__previous_value__;return wo(e)?bo(e):e}function ur(n){const e=xt(n.mapValue.fields.__local_write_time__.timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,t,r,i,s,a,c,u,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=f}}class hr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new hr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr={mapValue:{}};function Zt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wo(n)?4:Yp(n)?9007199254740991:Qp(n)?10:11:H()}function nt(n,e){if(n===e)return!0;const t=Zt(n);if(t!==Zt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ur(n).isEqual(ur(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=xt(i.timestampValue),c=xt(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Xt(i.bytesValue).isEqual(Xt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ue(i.geoPointValue.latitude)===ue(s.geoPointValue.latitude)&&ue(i.geoPointValue.longitude)===ue(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ue(i.integerValue)===ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ue(i.doubleValue),c=ue(s.doubleValue);return a===c?pi(a)===pi(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return En(n.arrayValue.values||[],e.arrayValue.values||[],nt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Sc(a)!==Sc(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!nt(a[u],c[u])))return!1;return!0}(n,e);default:return H()}}function dr(n,e){return(n.values||[]).find(t=>nt(t,e))!==void 0}function In(n,e){if(n===e)return 0;const t=Zt(n),r=Zt(e);if(t!==r)return X(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return function(s,a){const c=ue(s.integerValue||s.doubleValue),u=ue(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Cc(n.timestampValue,e.timestampValue);case 4:return Cc(ur(n),ur(e));case 5:return X(n.stringValue,e.stringValue);case 6:return function(s,a){const c=Xt(s),u=Xt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),u=a.split("/");for(let f=0;f<c.length&&f<u.length;f++){const p=X(c[f],u[f]);if(p!==0)return p}return X(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const c=X(ue(s.latitude),ue(a.latitude));return c!==0?c:X(ue(s.longitude),ue(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return kc(n.arrayValue,e.arrayValue);case 10:return function(s,a){var c,u,f,p;const g=s.fields||{},v=a.fields||{},b=(c=g.value)===null||c===void 0?void 0:c.arrayValue,S=(u=v.value)===null||u===void 0?void 0:u.arrayValue,C=X(((f=b?.values)===null||f===void 0?void 0:f.length)||0,((p=S?.values)===null||p===void 0?void 0:p.length)||0);return C!==0?C:kc(b,S)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Jr.mapValue&&a===Jr.mapValue)return 0;if(s===Jr.mapValue)return 1;if(a===Jr.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),f=a.fields||{},p=Object.keys(f);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const v=X(u[g],p[g]);if(v!==0)return v;const b=In(c[u[g]],f[p[g]]);if(b!==0)return b}return X(u.length,p.length)}(n.mapValue,e.mapValue);default:throw H()}}function Cc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=xt(n),r=xt(e),i=X(t.seconds,r.seconds);return i!==0?i:X(t.nanos,r.nanos)}function kc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=In(t[i],r[i]);if(s)return s}return X(t.length,r.length)}function Tn(n){return Gs(n)}function Gs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=xt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Xt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Gs(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Gs(t.fields[a])}`;return i+"}"}(n.mapValue):H()}function Ws(n){return!!n&&"integerValue"in n}function Ao(n){return!!n&&"arrayValue"in n}function Dc(n){return!!n&&"nullValue"in n}function Nc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ni(n){return!!n&&"mapValue"in n}function Qp(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function rr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return rn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=rr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=rr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Yp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.value=e}static empty(){return new Le({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ni(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rr(t)}setAll(e){let t=ye.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=rr(a):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ni(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ni(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){rn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Le(rr(this.value))}}function su(n){const e=[];return rn(n.fields,(t,r)=>{const i=new ye([t]);if(ni(r)){const s=su(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new je(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new De(e,0,G.min(),G.min(),G.min(),Le.empty(),0)}static newFoundDocument(e,t,r,i){return new De(e,1,t,G.min(),r,i,0)}static newNoDocument(e,t){return new De(e,2,t,G.min(),G.min(),Le.empty(),0)}static newUnknownDocument(e,t){return new De(e,3,t,G.min(),G.min(),Le.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Le.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t){this.position=e,this.inclusive=t}}function Vc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(a.referenceValue),t.key):r=In(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Oc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!nt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Jp(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{}class fe extends ou{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Zp(e,t,r):t==="array-contains"?new nm(e,r):t==="in"?new rm(e,r):t==="not-in"?new im(e,r):t==="array-contains-any"?new sm(e,r):new fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new em(e,r):new tm(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(In(t,this.value)):t!==null&&Zt(this.value)===Zt(t)&&this.matchesComparison(In(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rt extends ou{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new rt(e,t)}matches(e){return au(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function au(n){return n.op==="and"}function cu(n){return Xp(n)&&au(n)}function Xp(n){for(const e of n.filters)if(e instanceof rt)return!1;return!0}function Ks(n){if(n instanceof fe)return n.field.canonicalString()+n.op.toString()+Tn(n.value);if(cu(n))return n.filters.map(e=>Ks(e)).join(",");{const e=n.filters.map(t=>Ks(t)).join(",");return`${n.op}(${e})`}}function lu(n,e){return n instanceof fe?function(r,i){return i instanceof fe&&r.op===i.op&&r.field.isEqual(i.field)&&nt(r.value,i.value)}(n,e):n instanceof rt?function(r,i){return i instanceof rt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&lu(a,i.filters[c]),!0):!1}(n,e):void H()}function uu(n){return n instanceof fe?function(t){return`${t.field.canonicalString()} ${t.op} ${Tn(t.value)}`}(n):n instanceof rt?function(t){return t.op.toString()+" {"+t.getFilters().map(uu).join(" ,")+"}"}(n):"Filter"}class Zp extends fe{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class em extends fe{constructor(e,t){super(e,"in",t),this.keys=hu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tm extends fe{constructor(e,t){super(e,"not-in",t),this.keys=hu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function hu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class nm extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ao(t)&&dr(t.arrayValue,this.value)}}class rm extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&dr(this.value.arrayValue,t)}}class im extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!dr(this.value.arrayValue,t)}}class sm extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ao(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>dr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.ue=null}}function Mc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new om(n,e,t,r,i,s,a)}function Ro(n){const e=W(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ks(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ki(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Tn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Tn(r)).join(",")),e.ue=t}return e.ue}function So(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Jp(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!lu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Oc(n.startAt,e.startAt)&&Oc(n.endAt,e.endAt)}function Qs(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function am(n,e,t,r,i,s,a,c){return new Di(n,e,t,r,i,s,a,c)}function Po(n){return new Di(n)}function xc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function cm(n){return n.collectionGroup!==null}function ir(n){const e=W(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ee(ye.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new gi(s,r))}),t.has(ye.keyField().canonicalString())||e.ce.push(new gi(ye.keyField(),r))}return e.ce}function Ze(n){const e=W(n);return e.le||(e.le=lm(e,ir(n))),e.le}function lm(n,e){if(n.limitType==="F")return Mc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new gi(i.field,s)});const t=n.endAt?new mi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new mi(n.startAt.position,n.startAt.inclusive):null;return Mc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ys(n,e,t){return new Di(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ni(n,e){return So(Ze(n),Ze(e))&&n.limitType===e.limitType}function du(n){return`${Ro(Ze(n))}|lt:${n.limitType}`}function un(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>uu(i)).join(", ")}]`),ki(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Tn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Tn(i)).join(",")),`Target(${r})`}(Ze(n))}; limitType=${n.limitType})`}function Vi(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):$.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of ir(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,u){const f=Vc(a,c,u);return a.inclusive?f<=0:f<0}(r.startAt,ir(r),i)||r.endAt&&!function(a,c,u){const f=Vc(a,c,u);return a.inclusive?f>=0:f>0}(r.endAt,ir(r),i))}(n,e)}function um(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function fu(n){return(e,t)=>{let r=!1;for(const i of ir(n)){const s=hm(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function hm(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(s,a,c){const u=a.data.field(s),f=c.data.field(s);return u!==null&&f!==null?In(u,f):H()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){rn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ru(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=new oe($.comparator);function gt(){return dm}const pu=new oe($.comparator);function er(...n){let e=pu;for(const t of n)e=e.insert(t.key,t);return e}function mu(n){let e=pu;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function zt(){return sr()}function gu(){return sr()}function sr(){return new Dn(n=>n.toString(),(n,e)=>n.isEqual(e))}const fm=new oe($.comparator),pm=new Ee($.comparator);function K(...n){let e=pm;for(const t of n)e=e.add(t);return e}const mm=new Ee(X);function gm(){return mm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pi(e)?"-0":e}}function _u(n){return{integerValue:""+n}}function _m(n,e){return Gp(e)?_u(e):Co(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this._=void 0}}function vm(n,e,t){return n instanceof _i?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&wo(s)&&(s=bo(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof fr?yu(n,e):n instanceof pr?Eu(n,e):function(i,s){const a=vu(i,s),c=Lc(a)+Lc(i.Pe);return Ws(a)&&Ws(i.Pe)?_u(c):Co(i.serializer,c)}(n,e)}function ym(n,e,t){return n instanceof fr?yu(n,e):n instanceof pr?Eu(n,e):t}function vu(n,e){return n instanceof vi?function(r){return Ws(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class _i extends Oi{}class fr extends Oi{constructor(e){super(),this.elements=e}}function yu(n,e){const t=Iu(e);for(const r of n.elements)t.some(i=>nt(i,r))||t.push(r);return{arrayValue:{values:t}}}class pr extends Oi{constructor(e){super(),this.elements=e}}function Eu(n,e){let t=Iu(e);for(const r of n.elements)t=t.filter(i=>!nt(i,r));return{arrayValue:{values:t}}}class vi extends Oi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Lc(n){return ue(n.integerValue||n.doubleValue)}function Iu(n){return Ao(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Em(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof fr&&i instanceof fr||r instanceof pr&&i instanceof pr?En(r.elements,i.elements,nt):r instanceof vi&&i instanceof vi?nt(r.Pe,i.Pe):r instanceof _i&&i instanceof _i}(n.transform,e.transform)}class Im{constructor(e,t){this.version=e,this.transformResults=t}}class ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ri(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Mi{}function Tu(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ko(n.key,ze.none()):new wr(n.key,n.data,ze.none());{const t=n.data,r=Le.empty();let i=new Ee(ye.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Ft(n.key,r,new je(i.toArray()),ze.none())}}function Tm(n,e,t){n instanceof wr?function(i,s,a){const c=i.value.clone(),u=Uc(i.fieldTransforms,s,a.transformResults);c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Ft?function(i,s,a){if(!ri(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=Uc(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(wu(i)),u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function or(n,e,t,r){return n instanceof wr?function(s,a,c,u){if(!ri(s.precondition,a))return c;const f=s.value.clone(),p=jc(s.fieldTransforms,u,a);return f.setAll(p),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ft?function(s,a,c,u){if(!ri(s.precondition,a))return c;const f=jc(s.fieldTransforms,u,a),p=a.data;return p.setAll(wu(s)),p.setAll(f),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(s,a,c){return ri(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function wm(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=vu(r.transform,i||null);s!=null&&(t===null&&(t=Le.empty()),t.set(r.field,s))}return t||null}function Fc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&En(r,i,(s,a)=>Em(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class wr extends Mi{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ft extends Mi{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Uc(n,e,t){const r=new Map;ee(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,ym(a,c,t[i]))}return r}function jc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,vm(s,a,e))}return r}class ko extends Mi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bm extends Mi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Tm(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=or(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=or(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=gu();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;const u=Tu(a,c);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),K())}isEqual(e){return this.batchId===e.batchId&&En(this.mutations,e.mutations,(t,r)=>Fc(t,r))&&En(this.baseMutations,e.baseMutations,(t,r)=>Fc(t,r))}}class Do{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ee(e.mutations.length===r.length);let i=function(){return fm}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Do(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de,Y;function Pm(n){switch(n){default:return H();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function bu(n){if(n===void 0)return mt("GRPC error has no .code"),N.UNKNOWN;switch(n){case de.OK:return N.OK;case de.CANCELLED:return N.CANCELLED;case de.UNKNOWN:return N.UNKNOWN;case de.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case de.INTERNAL:return N.INTERNAL;case de.UNAVAILABLE:return N.UNAVAILABLE;case de.UNAUTHENTICATED:return N.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case de.NOT_FOUND:return N.NOT_FOUND;case de.ALREADY_EXISTS:return N.ALREADY_EXISTS;case de.PERMISSION_DENIED:return N.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case de.ABORTED:return N.ABORTED;case de.OUT_OF_RANGE:return N.OUT_OF_RANGE;case de.UNIMPLEMENTED:return N.UNIMPLEMENTED;case de.DATA_LOSS:return N.DATA_LOSS;default:return H()}}(Y=de||(de={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=new Gt([4294967295,4294967295],0);function $c(n){const e=Cm().encode(n),t=new Ql;return t.update(e),new Uint8Array(t.digest())}function Bc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Gt([t,r],0),new Gt([i,s],0)]}class No{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new tr(`Invalid padding: ${t}`);if(r<0)throw new tr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new tr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new tr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Gt.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Gt.fromNumber(r)));return i.compare(km)===1&&(i=new Gt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=$c(e),[r,i]=Bc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new No(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=$c(e),[r,i]=Bc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class tr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,br.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new xi(G.min(),i,new oe(X),gt(),K())}}class br{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new br(r,t,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Au{constructor(e,t){this.targetId=e,this.me=t}}class Ru{constructor(e,t,r=Ie.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class qc{constructor(){this.fe=0,this.ge=Hc(),this.pe=Ie.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=K(),t=K(),r=K();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:H()}}),new br(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Hc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Dm{constructor(e){this.Le=e,this.Be=new Map,this.ke=gt(),this.qe=zc(),this.Qe=new oe(X)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:H()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Qs(s))if(r===0){const a=new $(s.path);this.Ue(t,a,De.newNoDocument(a,G.min()))}else ee(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),u=c?this.Xe(c,e,a):1;if(u!==0){this.je(t);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,f)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,c;try{a=Xt(r).toUint8Array()}catch(u){if(u instanceof iu)return yn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new No(a,i,s)}catch(u){return yn(u instanceof tr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const c=this.Je(a);if(c){if(s.current&&Qs(c.target)){const u=new $(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,De.newNoDocument(u,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=K();this.qe.forEach((s,a)=>{let c=!0;a.forEachWhile(u=>{const f=this.Je(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new xi(e,t,this.Qe,this.ke,r);return this.ke=gt(),this.qe=zc(),this.Qe=new oe(X),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new qc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ee(X),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new qc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function zc(){return new oe($.comparator)}function Hc(){return new oe($.comparator)}const Nm={asc:"ASCENDING",desc:"DESCENDING"},Vm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Om={and:"AND",or:"OR"};class Mm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Js(n,e){return n.useProto3Json||ki(e)?e:{value:e}}function yi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Su(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function xm(n,e){return yi(n,e.toTimestamp())}function et(n){return ee(!!n),G.fromTimestamp(function(t){const r=xt(t);return new pe(r.seconds,r.nanos)}(n))}function Vo(n,e){return Xs(n,e).canonicalString()}function Xs(n,e){const t=function(i){return new ce(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Pu(n){const e=ce.fromString(n);return ee(Vu(e)),e}function Zs(n,e){return Vo(n.databaseId,e.path)}function Ss(n,e){const t=Pu(e);if(t.get(1)!==n.databaseId.projectId)throw new j(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(ku(t))}function Cu(n,e){return Vo(n.databaseId,e)}function Lm(n){const e=Pu(n);return e.length===4?ce.emptyPath():ku(e)}function eo(n){return new ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ku(n){return ee(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Gc(n,e,t){return{name:Zs(n,e),fields:t.value.mapValue.fields}}function Fm(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(f,p){return f.useProto3Json?(ee(p===void 0||typeof p=="string"),Ie.fromBase64String(p||"")):(ee(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Ie.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(f){const p=f.code===void 0?N.UNKNOWN:bu(f.code);return new j(p,f.message||"")}(a);t=new Ru(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ss(n,r.document.name),s=et(r.document.updateTime),a=r.document.createTime?et(r.document.createTime):G.min(),c=new Le({mapValue:{fields:r.document.fields}}),u=De.newFoundDocument(i,s,a,c),f=r.targetIds||[],p=r.removedTargetIds||[];t=new ii(f,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ss(n,r.document),s=r.readTime?et(r.readTime):G.min(),a=De.newNoDocument(i,s),c=r.removedTargetIds||[];t=new ii([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ss(n,r.document),s=r.removedTargetIds||[];t=new ii([],s,i,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new Sm(i,s),c=r.targetId;t=new Au(c,a)}}return t}function Um(n,e){let t;if(e instanceof wr)t={update:Gc(n,e.key,e.value)};else if(e instanceof ko)t={delete:Zs(n,e.key)};else if(e instanceof Ft)t={update:Gc(n,e.key,e.data),updateMask:Km(e.fieldMask)};else{if(!(e instanceof bm))return H();t={verify:Zs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const c=a.transform;if(c instanceof _i)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof fr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof pr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof vi)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw H()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:xm(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:H()}(n,e.precondition)),t}function jm(n,e){return n&&n.length>0?(ee(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?et(i.updateTime):et(s);return a.isEqual(G.min())&&(a=et(s)),new Im(a,i.transformResults||[])}(t,e))):[]}function $m(n,e){return{documents:[Cu(n,e.path)]}}function Bm(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Cu(n,i);const s=function(f){if(f.length!==0)return Nu(rt.create(f,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(f){if(f.length!==0)return f.map(p=>function(v){return{field:hn(v.field),direction:Hm(v.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Js(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{_t:t,parent:i}}function qm(n){let e=Lm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ee(r===1);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(g){const v=Du(g);return v instanceof rt&&cu(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(v=>function(S){return new gi(dn(S.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(v))}(t.orderBy));let c=null;t.limit&&(c=function(g){let v;return v=typeof g=="object"?g.value:g,ki(v)?null:v}(t.limit));let u=null;t.startAt&&(u=function(g){const v=!!g.before,b=g.values||[];return new mi(b,v)}(t.startAt));let f=null;return t.endAt&&(f=function(g){const v=!g.before,b=g.values||[];return new mi(b,v)}(t.endAt)),am(e,i,a,s,c,"F",u,f)}function zm(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Du(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=dn(t.unaryFilter.field);return fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=dn(t.unaryFilter.field);return fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=dn(t.unaryFilter.field);return fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=dn(t.unaryFilter.field);return fe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(n):n.fieldFilter!==void 0?function(t){return fe.create(dn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return rt.create(t.compositeFilter.filters.map(r=>Du(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return H()}}(t.compositeFilter.op))}(n):H()}function Hm(n){return Nm[n]}function Gm(n){return Vm[n]}function Wm(n){return Om[n]}function hn(n){return{fieldPath:n.canonicalString()}}function dn(n){return ye.fromServerFormat(n.fieldPath)}function Nu(n){return n instanceof fe?function(t){if(t.op==="=="){if(Nc(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NAN"}};if(Dc(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Nc(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NOT_NAN"}};if(Dc(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hn(t.field),op:Gm(t.op),value:t.value}}}(n):n instanceof rt?function(t){const r=t.getFilters().map(i=>Nu(i));return r.length===1?r[0]:{compositeFilter:{op:Wm(t.op),filters:r}}}(n):H()}function Km(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Vu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t,r,i,s=G.min(),a=G.min(),c=Ie.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Ct(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.ct=e}}function Ym(n){const e=qm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ys(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.un=new Xm}addToCollectionParentIndex(e,t){return this.un.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Mt.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Mt.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Xm{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ee(ce.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ee(ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new wn(0)}static kn(){return new wn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.changes=new Dn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&or(r.mutation,i,je.empty(),pe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,t,r=K()){const i=zt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=er();return s.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=zt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,K()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=gt();const a=sr(),c=function(){return sr()}();return t.forEach((u,f)=>{const p=r.get(f.key);i.has(f.key)&&(p===void 0||p.mutation instanceof Ft)?s=s.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),or(p.mutation,f,p.mutation.getFieldMask(),pe.now())):a.set(f.key,je.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((f,p)=>a.set(f,p)),t.forEach((f,p)=>{var g;return c.set(f,new eg(p,(g=a.get(f))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,t){const r=sr();let i=new oe((a,c)=>a-c),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const f=t.get(u);if(f===null)return;let p=r.get(u)||je.empty();p=c.applyToLocalView(f,p),r.set(u,p);const g=(i.get(c.batchId)||K()).add(u);i=i.insert(c.batchId,g)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),f=u.key,p=u.value,g=gu();p.forEach(v=>{if(!s.has(v)){const b=Tu(t.get(v),r.get(v));b!==null&&g.set(v,b),s=s.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,g))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):D.resolve(zt());let c=-1,u=s;return a.next(f=>D.forEach(f,(p,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),s.get(p)?D.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{u=u.insert(p,v)}))).next(()=>this.populateOverlays(e,f,s)).next(()=>this.computeViews(e,u,f,K())).next(p=>({batchId:c,changes:mu(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let i=er();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=er();return this.indexManager.getCollectionParents(e,s).next(c=>D.forEach(c,u=>{const f=function(g,v){return new Di(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(p=>{p.forEach((g,v)=>{a=a.insert(g,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,De.newInvalidDocument(p)))});let c=er();return a.forEach((u,f)=>{const p=s.get(u);p!==void 0&&or(p.mutation,f,je.empty(),pe.now()),Vi(t,f)&&(c=c.insert(u,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return D.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:et(i.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Ym(i.bundledQuery),readTime:et(i.readTime)}}(t)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(){this.overlays=new oe($.comparator),this.Ir=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=zt();return D.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const i=zt(),s=t.length+1,a=new $(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,f=u.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return D.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new oe((f,p)=>f-p);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let p=s.get(f.largestBatchId);p===null&&(p=zt(),s=s.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const c=zt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((f,p)=>c.set(f,p)),!(c.size()>=i)););return D.resolve(c)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Rm(t,r));let s=this.Ir.get(t);s===void 0&&(s=K(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.sessionToken=Ie.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.Tr=new Ee(me.Er),this.dr=new Ee(me.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new me(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new me(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new $(new ce([])),r=new me(t,e),i=new me(t,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new $(new ce([])),r=new me(t,e),i=new me(t,e+1);let s=K();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new me(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class me{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return $.comparator(e.key,t.key)||X(e.wr,t.wr)}static Ar(e,t){return X(e.wr,t.wr)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ee(me.Er)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Am(s,t,r,i);this.mutationQueue.push(a);for(const c of i)this.br=this.br.add(new me(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new me(t,0),i=new me(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const c=this.Dr(a.wr);s.push(c)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ee(X);return t.forEach(i=>{const s=new me(i,0),a=new me(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],c=>{r=r.add(c.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const a=new me(new $(s),0);let c=new Ee(X);return this.br.forEachWhile(u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(c=c.add(u.wr)),!0)},a),D.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ee(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(t.mutations,i=>{const s=new me(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new me(t,0),i=this.br.firstAfterOrEqual(r);return D.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.Mr=e,this.docs=function(){return new oe($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():De.newInvalidDocument(t))}getEntries(e,t){let r=gt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():De.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=gt();const a=t.path,c=new $(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:f,value:{document:p}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Bp($p(p),r)<=0||(i.has(p.key)||Vi(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,t,r,i){H()}Or(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ag(this)}getSize(e){return D.resolve(this.size)}}class ag extends Zm{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e){this.persistence=e,this.Nr=new Dn(t=>Ro(t),So),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Oo,this.targetCount=0,this.kr=wn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),D.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new wn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Kn(t),D.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t){this.qr={},this.overlays={},this.Qr=new To(0),this.Kr=!1,this.Kr=!0,this.$r=new ig,this.referenceDelegate=e(this),this.Ur=new cg(this),this.indexManager=new Jm,this.remoteDocumentCache=function(i){return new og(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Qm(t),this.Gr=new ng(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new sg(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){F("MemoryPersistence","Starting transaction:",e);const i=new ug(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class ug extends zp{constructor(e){super(),this.currentSequenceNumber=e}}class Mo{constructor(e){this.persistence=e,this.Jr=new Oo,this.Yr=null}static Zr(e){return new Mo(e)}get Xr(){if(this.Yr)return this.Yr;throw H()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),D.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const i=$.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,G.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return D.or([()=>D.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=K(),i=K();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new xo(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return df()?8:Hp(Ne())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new hg;return this.Xi(e,t,a).next(c=>{if(s.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Jn()<=Q.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",un(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(Jn()<=Q.DEBUG&&F("QueryEngine","Query:",un(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Jn()<=Q.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",un(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ze(t))):D.resolve())}Yi(e,t){if(xc(t))return D.resolve(null);let r=Ze(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ys(t,null,"F"),r=Ze(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=K(...s);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const f=this.ts(t,c);return this.ns(t,f,a,u.readTime)?this.Yi(e,Ys(t,null,"F")):this.rs(e,f,t,u)}))})))}Zi(e,t,r,i){return xc(t)||i.isEqual(G.min())?D.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(t,s);return this.ns(t,a,r,i)?D.resolve(null):(Jn()<=Q.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),un(t)),this.rs(e,a,t,jp(i,-1)).next(c=>c))})}ts(e,t){let r=new Ee(fu(e));return t.forEach((i,s)=>{Vi(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return Jn()<=Q.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",un(t)),this.Ji.getDocumentsMatchingQuery(e,t,Mt.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new oe(X),this._s=new Dn(s=>Ro(s),So),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tg(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function pg(n,e,t,r){return new fg(n,e,t,r)}async function Ou(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],c=[];let u=K();for(const f of i){a.push(f.batchId);for(const p of f.mutations)u=u.add(p.key)}for(const f of s){c.push(f.batchId);for(const p of f.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:c}))})})}function mg(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,f,p){const g=f.batch,v=g.keys();let b=D.resolve();return v.forEach(S=>{b=b.next(()=>p.getEntry(u,S)).next(C=>{const k=f.docVersions.get(S);ee(k!==null),C.version.compareTo(k)<0&&(g.applyToRemoteDocument(C,f),C.isValidDocument()&&(C.setReadTime(f.commitVersion),p.addEntry(C)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=K();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(u=u.add(c.batch.mutations[f].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Mu(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function gg(n,e){const t=W(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const c=[];e.targetChanges.forEach((p,g)=>{const v=i.get(g);if(!v)return;c.push(t.Ur.removeMatchingKeys(s,p.removedDocuments,g).next(()=>t.Ur.addMatchingKeys(s,p.addedDocuments,g)));let b=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?b=b.withResumeToken(Ie.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):p.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(p.resumeToken,r)),i=i.insert(g,b),function(C,k,L){return C.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(v,b,p)&&c.push(t.Ur.updateTargetData(s,b))});let u=gt(),f=K();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),c.push(_g(s,a,e.documentUpdates).next(p=>{u=p.Ps,f=p.Is})),!r.isEqual(G.min())){const p=t.Ur.getLastRemoteSnapshotVersion(s).next(g=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(p)}return D.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,f)).next(()=>u)}).then(s=>(t.os=i,s))}function _g(n,e,t){let r=K(),i=K();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=gt();return t.forEach((c,u)=>{const f=s.get(c);u.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(G.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):F("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function vg(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yg(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new Ct(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function to(n,e,t){const r=W(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Tr(a))throw a;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Wc(n,e,t){const r=W(n);let i=G.min(),s=K();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,f,p){const g=W(u),v=g._s.get(p);return v!==void 0?D.resolve(g.os.get(v)):g.Ur.getTargetData(f,p)}(r,a,Ze(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:G.min(),t?s:K())).next(c=>(Eg(r,um(e),c),{documents:c,Ts:s})))}function Eg(n,e,t){let r=n.us.get(e)||G.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}class Kc{constructor(){this.activeTargetIds=gm()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ig{constructor(){this.so=new Kc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Kc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xr=null;function Ps(){return Xr===null?Xr=function(){return 268435456+Math.round(2147483648*Math.random())}():Xr++,"0x"+Xr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="WebChannelConnection";class Ag extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,a){const c=Ps(),u=this.xo(t,r.toUriEncodedString());F("RestConnection",`Sending RPC '${t}' ${c}:`,u,i);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,s,a),this.No(t,u,f,i).then(p=>(F("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw yn("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",u,"request:",i),p})}Lo(t,r,i,s,a,c){return this.Mo(t,r,i,s,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+kn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}xo(t,r){const i=wg[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=Ps();return new Promise((a,c)=>{const u=new Yl;u.setWithCredentials(!0),u.listenOnce(Jl.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ti.NO_ERROR:const p=u.getResponseJson();F(Re,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),a(p);break;case ti.TIMEOUT:F(Re,`RPC '${e}' ${s} timed out`),c(new j(N.DEADLINE_EXCEEDED,"Request time out"));break;case ti.HTTP_ERROR:const g=u.getStatus();if(F(Re,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const b=v?.error;if(b&&b.status&&b.message){const S=function(k){const L=k.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(L)>=0?L:N.UNKNOWN}(b.status);c(new j(S,b.message))}else c(new j(N.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new j(N.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{F(Re,`RPC '${e}' ${s} completed.`)}});const f=JSON.stringify(i);F(Re,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",f,r,15)})}Bo(e,t,r){const i=Ps(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=eu(),c=Zl(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const p=s.join("");F(Re,`Creating RPC '${e}' stream ${i}: ${p}`,u);const g=a.createWebChannel(p,u);let v=!1,b=!1;const S=new bg({Io:k=>{b?F(Re,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(v||(F(Re,`Opening RPC '${e}' stream ${i} transport.`),g.open(),v=!0),F(Re,`RPC '${e}' stream ${i} sending:`,k),g.send(k))},To:()=>g.close()}),C=(k,L,U)=>{k.listen(L,B=>{try{U(B)}catch(q){setTimeout(()=>{throw q},0)}})};return C(g,Zn.EventType.OPEN,()=>{b||(F(Re,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),C(g,Zn.EventType.CLOSE,()=>{b||(b=!0,F(Re,`RPC '${e}' stream ${i} transport closed`),S.So())}),C(g,Zn.EventType.ERROR,k=>{b||(b=!0,yn(Re,`RPC '${e}' stream ${i} transport errored:`,k),S.So(new j(N.UNAVAILABLE,"The operation could not be completed")))}),C(g,Zn.EventType.MESSAGE,k=>{var L;if(!b){const U=k.data[0];ee(!!U);const B=U,q=B.error||((L=B[0])===null||L===void 0?void 0:L.error);if(q){F(Re,`RPC '${e}' stream ${i} received error:`,q);const Z=q.status;let O=function(y){const w=de[y];if(w!==void 0)return bu(w)}(Z),T=q.message;O===void 0&&(O=N.INTERNAL,T="Unknown error status: "+Z+" with message "+q.message),b=!0,S.So(new j(O,T)),g.close()}else F(Re,`RPC '${e}' stream ${i} received:`,U),S.bo(U)}}),C(c,Xl.STAT_EVENT,k=>{k.stat===Hs.PROXY?F(Re,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Hs.NOPROXY&&F(Re,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Cs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(n){return new Mm(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t,r,i,s,a,c,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new xu(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(mt(t.toString()),mt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new j(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rg extends Lu{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Fm(this.serializer,e),r=function(s){if(!("targetChange"in s))return G.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?G.min():a.readTime?et(a.readTime):G.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=eo(this.serializer),t.addTarget=function(s,a){let c;const u=a.target;if(c=Qs(u)?{documents:$m(s,u)}:{query:Bm(s,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Su(s,a.resumeToken);const f=Js(s,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(G.min())>0){c.readTime=yi(s,a.snapshotVersion.toTimestamp());const f=Js(s,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,e);const r=zm(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=eo(this.serializer),t.removeTarget=e,this.a_(t)}}class Sg extends Lu{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ee(!!e.streamToken),this.lastStreamToken=e.streamToken,ee(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=jm(e.writeResults,e.commitTime),r=et(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=eo(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Um(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new j(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,Xs(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(N.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,Xs(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(N.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Cg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(mt(t),this.D_=!1):F("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{sn(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(u){const f=W(u);f.L_.add(4),await Ar(f),f.q_.set("Unknown"),f.L_.delete(4),await Fi(f)}(this))})}),this.q_=new Cg(r,i)}}async function Fi(n){if(sn(n))for(const e of n.B_)await e(!0)}async function Ar(n){for(const e of n.B_)await e(!1)}function Fu(n,e){const t=W(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),jo(t)?Uo(t):Nn(t).r_()&&Fo(t,e))}function Lo(n,e){const t=W(n),r=Nn(t);t.N_.delete(e),r.r_()&&Uu(t,e),t.N_.size===0&&(r.r_()?r.o_():sn(t)&&t.q_.set("Unknown"))}function Fo(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Nn(n).A_(e)}function Uu(n,e){n.Q_.xe(e),Nn(n).R_(e)}function Uo(n){n.Q_=new Dm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Nn(n).start(),n.q_.v_()}function jo(n){return sn(n)&&!Nn(n).n_()&&n.N_.size>0}function sn(n){return W(n).L_.size===0}function ju(n){n.Q_=void 0}async function Dg(n){n.q_.set("Online")}async function Ng(n){n.N_.forEach((e,t)=>{Fo(n,e)})}async function Vg(n,e){ju(n),jo(n)?(n.q_.M_(e),Uo(n)):n.q_.set("Unknown")}async function Og(n,e,t){if(n.q_.set("Online"),e instanceof Ru&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const c of s.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.N_.delete(c),i.Q_.removeTarget(c))}(n,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ei(n,r)}else if(e instanceof ii?n.Q_.Ke(e):e instanceof Au?n.Q_.He(e):n.Q_.We(e),!t.isEqual(G.min()))try{const r=await Mu(n.localStore);t.compareTo(r)>=0&&await function(s,a){const c=s.Q_.rt(a);return c.targetChanges.forEach((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.N_.get(f);p&&s.N_.set(f,p.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,f)=>{const p=s.N_.get(u);if(!p)return;s.N_.set(u,p.withResumeToken(Ie.EMPTY_BYTE_STRING,p.snapshotVersion)),Uu(s,u);const g=new Ct(p.target,u,f,p.sequenceNumber);Fo(s,g)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Ei(n,r)}}async function Ei(n,e,t){if(!Tr(e))throw e;n.L_.add(1),await Ar(n),n.q_.set("Offline"),t||(t=()=>Mu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Fi(n)})}function $u(n,e){return e().catch(t=>Ei(n,t,e))}async function Ui(n){const e=W(n),t=Lt(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Mg(e);)try{const i=await vg(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,xg(e,i)}catch(i){await Ei(e,i)}Bu(e)&&qu(e)}function Mg(n){return sn(n)&&n.O_.length<10}function xg(n,e){n.O_.push(e);const t=Lt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Bu(n){return sn(n)&&!Lt(n).n_()&&n.O_.length>0}function qu(n){Lt(n).start()}async function Lg(n){Lt(n).p_()}async function Fg(n){const e=Lt(n);for(const t of n.O_)e.m_(t.mutations)}async function Ug(n,e,t){const r=n.O_.shift(),i=Do.from(r,e,t);await $u(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ui(n)}async function jg(n,e){e&&Lt(n).V_&&await async function(r,i){if(function(a){return Pm(a)&&a!==N.ABORTED}(i.code)){const s=r.O_.shift();Lt(r).s_(),await $u(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ui(r)}}(n,e),Bu(n)&&qu(n)}async function Yc(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=sn(t);t.L_.add(3),await Ar(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Fi(t)}async function $g(n,e){const t=W(n);e?(t.L_.delete(2),await Fi(t)):e||(t.L_.add(2),await Ar(t),t.q_.set("Unknown"))}function Nn(n){return n.K_||(n.K_=function(t,r,i){const s=W(t);return s.w_(),new Rg(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:Dg.bind(null,n),Ro:Ng.bind(null,n),mo:Vg.bind(null,n),d_:Og.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),jo(n)?Uo(n):n.q_.set("Unknown")):(await n.K_.stop(),ju(n))})),n.K_}function Lt(n){return n.U_||(n.U_=function(t,r,i){const s=W(t);return s.w_(),new Sg(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Lg.bind(null,n),mo:jg.bind(null,n),f_:Fg.bind(null,n),g_:Ug.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Ui(n)):(await n.U_.stop(),n.O_.length>0&&(F("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,c=new $o(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bo(n,e){if(mt("AsyncQueue",`${e}: ${n}`),Tr(n))return new j(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=er(),this.sortedSet=new oe(this.comparator)}static emptySet(e){return new fn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new fn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this.W_=new oe($.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):H():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class bn{constructor(e,t,r,i,s,a,c,u,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new bn(e,t,fn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ni(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class qg{constructor(){this.queries=Xc(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=W(t),s=i.queries;i.queries=Xc(),s.forEach((a,c)=>{for(const u of c.j_)u.onError(r)})})(this,new j(N.ABORTED,"Firestore shutting down"))}}function Xc(){return new Dn(n=>du(n),Ni)}async function zg(n,e){const t=W(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Bg,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=Bo(a,`Initialization of query '${un(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&qo(t)}async function Hg(n,e){const t=W(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Gg(n,e){const t=W(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const c of a.j_)c.X_(i)&&(r=!0);a.z_=i}}r&&qo(t)}function Wg(n,e,t){const r=W(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function qo(n){n.Y_.forEach(e=>{e.next()})}var no,Zc;(Zc=no||(no={})).ea="default",Zc.Cache="cache";class Kg{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new bn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=bn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==no.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e){this.key=e}}class Hu{constructor(e){this.key=e}}class Qg{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=K(),this.mutatedKeys=K(),this.Aa=fu(e),this.Ra=new fn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Jc,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,g)=>{const v=i.get(p),b=Vi(this.query,g)?g:null,S=!!v&&this.mutatedKeys.has(v.key),C=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let k=!1;v&&b?v.data.isEqual(b.data)?S!==C&&(r.track({type:3,doc:b}),k=!0):this.ga(v,b)||(r.track({type:2,doc:b}),k=!0,(u&&this.Aa(b,u)>0||f&&this.Aa(b,f)<0)&&(c=!0)):!v&&b?(r.track({type:0,doc:b}),k=!0):v&&!b&&(r.track({type:1,doc:v}),k=!0,(u||f)&&(c=!0)),k&&(b?(a=a.add(b),s=C?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:c,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((p,g)=>function(b,S){const C=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return C(b)-C(S)}(p.type,g.type)||this.Aa(p.doc,g.doc)),this.pa(r),i=i!=null&&i;const c=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,f=u!==this.Ea;return this.Ea=u,a.length!==0||f?{snapshot:new bn(this.query,e.Ra,s,a,e.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Jc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=K(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Hu(r))}),this.da.forEach(r=>{e.has(r)||t.push(new zu(r))}),t}ba(e){this.Ta=e.Ts,this.da=K();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return bn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Yg{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Jg{constructor(e){this.key=e,this.va=!1}}class Xg{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Dn(c=>du(c),Ni),this.Ma=new Map,this.xa=new Set,this.Oa=new oe($.comparator),this.Na=new Map,this.La=new Oo,this.Ba={},this.ka=new Map,this.qa=wn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Zg(n,e,t=!0){const r=Ju(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Gu(r,e,t,!0),i}async function e_(n,e){const t=Ju(n);await Gu(t,e,!0,!1)}async function Gu(n,e,t,r){const i=await yg(n.localStore,Ze(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=await t_(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Fu(n.remoteStore,i),c}async function t_(n,e,t,r,i){n.Ka=(g,v,b)=>async function(C,k,L,U){let B=k.view.ma(L);B.ns&&(B=await Wc(C.localStore,k.query,!1).then(({documents:T})=>k.view.ma(T,B)));const q=U&&U.targetChanges.get(k.targetId),Z=U&&U.targetMismatches.get(k.targetId)!=null,O=k.view.applyChanges(B,C.isPrimaryClient,q,Z);return tl(C,k.targetId,O.wa),O.snapshot}(n,g,v,b);const s=await Wc(n.localStore,e,!0),a=new Qg(e,s.Ts),c=a.ma(s.documents),u=br.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),f=a.applyChanges(c,n.isPrimaryClient,u);tl(n,t,f.wa);const p=new Yg(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),f.snapshot}async function n_(n,e,t){const r=W(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!Ni(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await to(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Lo(r.remoteStore,i.targetId),ro(r,i.targetId)}).catch(Ir)):(ro(r,i.targetId),await to(r.localStore,i.targetId,!0))}async function r_(n,e){const t=W(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Lo(t.remoteStore,r.targetId))}async function i_(n,e,t){const r=h_(n);try{const i=await function(a,c){const u=W(a),f=pe.now(),p=c.reduce((b,S)=>b.add(S.key),K());let g,v;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let S=gt(),C=K();return u.cs.getEntries(b,p).next(k=>{S=k,S.forEach((L,U)=>{U.isValidDocument()||(C=C.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,S)).next(k=>{g=k;const L=[];for(const U of c){const B=wm(U,g.get(U.key).overlayedDocument);B!=null&&L.push(new Ft(U.key,B,su(B.value.mapValue),ze.exists(!0)))}return u.mutationQueue.addMutationBatch(b,f,L,c)}).next(k=>{v=k;const L=k.applyToLocalDocumentSet(g,C);return u.documentOverlayCache.saveOverlays(b,k.batchId,L)})}).then(()=>({batchId:v.batchId,changes:mu(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,u){let f=a.Ba[a.currentUser.toKey()];f||(f=new oe(X)),f=f.insert(c,u),a.Ba[a.currentUser.toKey()]=f}(r,i.batchId,t),await Rr(r,i.changes),await Ui(r.remoteStore)}catch(i){const s=Bo(i,"Failed to persist write");t.reject(s)}}async function Wu(n,e){const t=W(n);try{const r=await gg(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Na.get(s);a&&(ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?ee(a.va):i.removedDocuments.size>0&&(ee(a.va),a.va=!1))}),await Rr(t,r,e)}catch(r){await Ir(r)}}function el(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,a)=>{const c=a.view.Z_(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const u=W(a);u.onlineState=c;let f=!1;u.queries.forEach((p,g)=>{for(const v of g.j_)v.Z_(c)&&(f=!0)}),f&&qo(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function s_(n,e,t){const r=W(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let a=new oe($.comparator);a=a.insert(s,De.newNoDocument(s,G.min()));const c=K().add(s),u=new xi(G.min(),new Map,new oe(X),a,c);await Wu(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),zo(r)}else await to(r.localStore,e,!1).then(()=>ro(r,e,t)).catch(Ir)}async function o_(n,e){const t=W(n),r=e.batch.batchId;try{const i=await mg(t.localStore,e);Qu(t,r,null),Ku(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Rr(t,i)}catch(i){await Ir(i)}}async function a_(n,e,t){const r=W(n);try{const i=await function(a,c){const u=W(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return u.mutationQueue.lookupMutationBatch(f,c).next(g=>(ee(g!==null),p=g.keys(),u.mutationQueue.removeMutationBatch(f,g))).next(()=>u.mutationQueue.performConsistencyCheck(f)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(f,p,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>u.localDocuments.getDocuments(f,p))})}(r.localStore,e);Qu(r,e,t),Ku(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Rr(r,i)}catch(i){await Ir(i)}}function Ku(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Qu(n,e,t){const r=W(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function ro(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Yu(n,r)})}function Yu(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Lo(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),zo(n))}function tl(n,e,t){for(const r of t)r instanceof zu?(n.La.addReference(r.key,e),c_(n,r)):r instanceof Hu?(F("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Yu(n,r.key)):H()}function c_(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(F("SyncEngine","New document in limbo: "+t),n.xa.add(r),zo(n))}function zo(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new $(ce.fromString(e)),r=n.qa.next();n.Na.set(r,new Jg(t)),n.Oa=n.Oa.insert(t,r),Fu(n.remoteStore,new Ct(Ze(Po(t.path)),r,"TargetPurposeLimboResolution",To.oe))}}async function Rr(n,e,t){const r=W(n),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{a.push(r.Ka(u,e,t).then(f=>{var p;if((f||t)&&r.isPrimaryClient){const g=f?!f.fromCache:(p=t?.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(f){i.push(f);const g=xo.Wi(u.targetId,f);s.push(g)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,f){const p=W(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>D.forEach(f,v=>D.forEach(v.$i,b=>p.persistence.referenceDelegate.addReference(g,v.targetId,b)).next(()=>D.forEach(v.Ui,b=>p.persistence.referenceDelegate.removeReference(g,v.targetId,b)))))}catch(g){if(!Tr(g))throw g;F("LocalStore","Failed to update sequence numbers: "+g)}for(const g of f){const v=g.targetId;if(!g.fromCache){const b=p.os.get(v),S=b.snapshotVersion,C=b.withLastLimboFreeSnapshotVersion(S);p.os=p.os.insert(v,C)}}}(r.localStore,s))}async function l_(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await Ou(t.localStore,e);t.currentUser=e,function(s,a){s.ka.forEach(c=>{c.forEach(u=>{u.reject(new j(N.CANCELLED,a))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Rr(t,r.hs)}}function u_(n,e){const t=W(n),r=t.Na.get(e);if(r&&r.va)return K().add(r.key);{let i=K();const s=t.Ma.get(e);if(!s)return i;for(const a of s){const c=t.Fa.get(a);i=i.unionWith(c.view.Va)}return i}}function Ju(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=u_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=s_.bind(null,e),e.Ca.d_=Gg.bind(null,e.eventManager),e.Ca.$a=Wg.bind(null,e.eventManager),e}function h_(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=o_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=a_.bind(null,e),e}class Ii{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Li(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return pg(this.persistence,new dg,e.initialUser,this.serializer)}Ga(e){return new lg(Mo.Zr,this.serializer)}Wa(e){return new Ig}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ii.provider={build:()=>new Ii};class io{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>el(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=l_.bind(null,this.syncEngine),await $g(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qg}()}createDatastore(e){const t=Li(e.databaseInfo.databaseId),r=function(s){return new Ag(s)}(e.databaseInfo);return function(s,a,c,u){return new Pg(s,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new kg(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>el(this.syncEngine,t,0),function(){return Qc.D()?new Qc:new Tg}())}createSyncEngine(e,t){return function(i,s,a,c,u,f,p){const g=new Xg(i,s,a,c,u,f);return p&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=W(i);F("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ar(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}io.provider={build:()=>new io};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):mt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ke.UNAUTHENTICATED,this.clientId=nu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{F("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(F("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Bo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ks(n,e){n.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ou(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function nl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await p_(n);F("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Yc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Yc(e.remoteStore,i)),n._onlineComponents=e}async function p_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await ks(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===N.FAILED_PRECONDITION||i.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;yn("Error using user provided cache. Falling back to memory cache: "+t),await ks(n,new Ii)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await ks(n,new Ii);return n._offlineComponents}async function Xu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await nl(n,n._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await nl(n,new io))),n._onlineComponents}function m_(n){return Xu(n).then(e=>e.syncEngine)}async function rl(n){const e=await Xu(n),t=e.eventManager;return t.onListen=Zg.bind(null,e.syncEngine),t.onUnlisten=n_.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=e_.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=r_.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(n,e,t){if(!t)throw new j(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function __(n,e,t,r){if(e===!0&&r===!0)throw new j(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function sl(n){if(!$.isDocumentKey(n))throw new j(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ho(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H()}function Kt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ho(n);throw new j(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}__("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Go{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ol({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ol(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Dp;switch(r.type){case"firstParty":return new Mp(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=il.get(t);r&&(F("ComponentProvider","Removing Datastore"),il.delete(t),r.terminate())}(this),Promise.resolve()}}function v_(n,e,t,r={}){var i;const s=(n=Kt(n,Go))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&yn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=ke.MOCK_USER;else{c=sf(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new j(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ke(f)}n._authCredentials=new Np(new tu(c,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ji(this.firestore,e,this._query)}}class He{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}}class mr extends ji{constructor(e,t,r){super(e,t,Po(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new $(e))}withConverter(e){return new mr(this.firestore,e,this._path)}}function y_(n,e,...t){if(n=ge(n),arguments.length===1&&(e=nu.newId()),g_("doc","path",e),n instanceof Go){const r=ce.fromString(e,...t);return sl(r),new He(n,null,new $(r))}{if(!(n instanceof He||n instanceof mr))throw new j(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ce.fromString(e,...t));return sl(r),new He(n.firestore,n instanceof mr?n.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new xu(this,"async_queue_retry"),this.Vu=()=>{const r=Cs();r&&F("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Cs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Cs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Wt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Tr(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw mt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=$o.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&H()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function cl(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class gr extends Go{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new al,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new al(e),this._firestoreClient=void 0,await e}}}function E_(n,e){const t=typeof n=="object"?n:Gl(),r=typeof n=="string"?n:"(default)",i=Eo(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=nf("firestore");s&&v_(i,...s)}return i}function Wo(n){if(n._terminated)throw new j(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||I_(n),n._firestoreClient}function I_(n){var e,t,r;const i=n._freezeSettings(),s=function(c,u,f,p){return new Kp(c,u,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Zu(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new f_(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){const u=c?._online.build();return{_offline:c?._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An(Ie.fromBase64String(e))}catch(t){throw new j(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new An(Ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=/^__.*__$/;class w_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ft(e,this.data,this.fieldMask,t,this.fieldTransforms):new wr(e,this.data,t,this.fieldTransforms)}}class eh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ft(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function th(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Jo{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Jo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ti(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(th(this.Cu)&&T_.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class b_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Li(e)}Qu(e,t,r,i=!1){return new Jo({Cu:e,methodName:t,qu:r,path:ye.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nh(n){const e=n._freezeSettings(),t=Li(n._databaseId);return new b_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function rh(n,e,t,r,i,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);Xo("Data must be an object, but it was:",a,r);const c=ih(r,a);let u,f;if(s.merge)u=new je(a.fieldMask),f=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const g of s.mergeFields){const v=so(e,g,t);if(!a.contains(v))throw new j(N.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);oh(p,v)||p.push(v)}u=new je(p),f=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,f=a.fieldTransforms;return new w_(new Le(c),u,f)}class Bi extends Ko{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bi}}function A_(n,e,t,r){const i=n.Qu(1,e,t);Xo("Data must be an object, but it was:",i,r);const s=[],a=Le.empty();rn(r,(u,f)=>{const p=Zo(e,u,t);f=ge(f);const g=i.Nu(p);if(f instanceof Bi)s.push(p);else{const v=qi(f,g);v!=null&&(s.push(p),a.set(p,v))}});const c=new je(s);return new eh(a,c,i.fieldTransforms)}function R_(n,e,t,r,i,s){const a=n.Qu(1,e,t),c=[so(e,r,t)],u=[i];if(s.length%2!=0)throw new j(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<s.length;v+=2)c.push(so(e,s[v])),u.push(s[v+1]);const f=[],p=Le.empty();for(let v=c.length-1;v>=0;--v)if(!oh(f,c[v])){const b=c[v];let S=u[v];S=ge(S);const C=a.Nu(b);if(S instanceof Bi)f.push(b);else{const k=qi(S,C);k!=null&&(f.push(b),p.set(b,k))}}const g=new je(f);return new eh(p,g,a.fieldTransforms)}function qi(n,e){if(sh(n=ge(n)))return Xo("Unsupported field value:",e,n),ih(n,e);if(n instanceof Ko)return function(r,i){if(!th(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const c of r){let u=qi(c,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _m(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pe.fromDate(r);return{timestampValue:yi(i.serializer,s)}}if(r instanceof pe){const s=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yi(i.serializer,s)}}if(r instanceof Qo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof An)return{bytesValue:Su(i.serializer,r._byteString)};if(r instanceof He){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Vo(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Yo)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return Co(c.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Ho(r)}`)}(n,e)}function ih(n,e){const t={};return ru(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rn(n,(r,i)=>{const s=qi(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function sh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof pe||n instanceof Qo||n instanceof An||n instanceof He||n instanceof Ko||n instanceof Yo)}function Xo(n,e,t){if(!sh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Ho(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function so(n,e,t){if((e=ge(e))instanceof $i)return e._internalPath;if(typeof e=="string")return Zo(n,e);throw Ti("Field path arguments must be of type string or ",n,!1,void 0,t)}const S_=new RegExp("[~\\*/\\[\\]]");function Zo(n,e,t){if(e.search(S_)>=0)throw Ti(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new $i(...e.split("."))._internalPath}catch{throw Ti(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ti(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new j(N.INVALID_ARGUMENT,c+n+u)}function oh(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new P_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ch("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class P_ extends ah{data(){return super.data()}}function ch(n,e){return typeof e=="string"?Zo(n,e):e instanceof $i?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class k_{convertValue(e,t="none"){switch(Zt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw H()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return rn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ue(a.doubleValue));return new Yo(s)}convertGeoPoint(e){return new Qo(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=bo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ur(e));default:return null}}convertTimestamp(e){const t=xt(e);return new pe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ce.fromString(e);ee(Vu(r));const i=new hr(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(t)||mt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uh extends ah{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new si(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ch("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class si extends uh{data(e={}){return super.data(e)}}class D_{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new nr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new si(this._firestore,this._userDataWriter,r.key,r,new nr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const u=new si(i._firestore,i._userDataWriter,c.doc.key,c.doc,new nr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new si(i._firestore,i._userDataWriter,c.doc.key,c.doc,new nr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,p=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:N_(c.type),doc:u,oldIndex:f,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function N_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class hh extends k_{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,t)}}function V_(n,e,t){n=Kt(n,He);const r=Kt(n.firestore,gr),i=lh(n.converter,e,t);return dh(r,[rh(nh(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ze.none())])}function O_(n,...e){var t,r,i;n=ge(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||cl(e[a])||(s=e[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(cl(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let u,f,p;if(n instanceof He)f=Kt(n.firestore,gr),p=Po(n._key.path),u={next:g=>{e[a]&&e[a](M_(f,n,g))},error:e[a+1],complete:e[a+2]};else{const g=Kt(n,ji);f=Kt(g.firestore,gr),p=g._query;const v=new hh(f);u={next:b=>{e[a]&&e[a](new D_(f,v,g,b))},error:e[a+1],complete:e[a+2]},C_(n._query)}return function(v,b,S,C){const k=new d_(C),L=new Kg(b,k,S);return v.asyncQueue.enqueueAndForget(async()=>zg(await rl(v),L)),()=>{k.Za(),v.asyncQueue.enqueueAndForget(async()=>Hg(await rl(v),L))}}(Wo(f),p,c,u)}function dh(n,e){return function(r,i){const s=new Wt;return r.asyncQueue.enqueueAndForget(async()=>i_(await m_(r),i,s)),s.promise}(Wo(n),e)}function M_(n,e,t){const r=t.docs.get(e._key),i=new hh(n);return new uh(n,i,e._key,r,new nr(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=nh(e)}set(e,t,r){this._verifyNotCommitted();const i=Ds(e,this._firestore),s=lh(i.converter,t,r),a=rh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,ze.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Ds(e,this._firestore);let a;return a=typeof(t=ge(t))=="string"||t instanceof $i?R_(this._dataReader,"WriteBatch.update",s._key,t,r,i):A_(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(a.toMutation(s._key,ze.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ds(e,this._firestore);return this._mutations=this._mutations.concat(new ko(t._key,ze.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new j(N.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ds(n,e){if((n=ge(n)).firestore!==e)throw new j(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(n){return Wo(n=Kt(n,gr)),new x_(n,e=>dh(n,e))}(function(e,t=!0){(function(i){kn=i})(Cn),vn(new Yt("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new gr(new Vp(r.getProvider("auth-internal")),new Lp(r.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new j(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hr(f.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Nt(Rc,"4.7.3",e),Nt(Rc,"4.7.3","esm2017")})();function ea(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function fh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const F_=fh,ph=new yr("auth","Firebase",fh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new vo("@firebase/auth");function U_(n,...e){wi.logLevel<=Q.WARN&&wi.warn(`Auth (${Cn}): ${n}`,...e)}function oi(n,...e){wi.logLevel<=Q.ERROR&&wi.error(`Auth (${Cn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n,...e){throw na(n,...e)}function Qe(n,...e){return na(n,...e)}function ta(n,e,t){const r=Object.assign(Object.assign({},F_()),{[e]:t});return new yr("auth","Firebase",r).create(e,{appName:n.name})}function Vt(n){return ta(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mh(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&it(n,"argument-error"),ta(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function na(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ph.create(n,...e)}function z(n,e,...t){if(!n)throw na(e,...t)}function ht(n){const e="INTERNAL ASSERTION FAILED: "+n;throw oi(e),new Error(e)}function _t(n,e){n||ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function j_(){return ll()==="http:"||ll()==="https:"}function ll(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(j_()||lf()||"connection"in navigator)?navigator.onLine:!0}function B_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t){this.shortDelay=e,this.longDelay=t,_t(t>e,"Short delay should be less than long delay!"),this.isMobile=of()||uf()}get(){return $_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n,e){_t(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=new Sr(3e4,6e4);function ia(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Vn(n,e,t,r,i={}){return _h(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const c=Er(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:u},s);return cf()||(f.referrerPolicy="no-referrer"),gh.fetch()(vh(n,n.config.apiHost,t,c),f)})}async function _h(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},q_),e);try{const i=new G_(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Zr(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[u,f]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Zr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Zr(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw ta(n,p,f);it(n,p)}}catch(i){if(i instanceof vt)throw i;it(n,"network-request-failed",{message:String(i)})}}async function H_(n,e,t,r,i={}){const s=await Vn(n,e,t,r,i);return"mfaPendingCredential"in s&&it(n,"multi-factor-auth-required",{_serverResponse:s}),s}function vh(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?ra(n.config,i):`${n.config.apiScheme}://${i}`}class G_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),z_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Qe(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W_(n,e){return Vn(n,"POST","/v1/accounts:delete",e)}async function yh(n,e){return Vn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function K_(n,e=!1){const t=ge(n),r=await t.getIdToken(e),i=sa(r);z(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:ar(Ns(i.auth_time)),issuedAtTime:ar(Ns(i.iat)),expirationTime:ar(Ns(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Ns(n){return Number(n)*1e3}function sa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return oi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ul(t);return i?JSON.parse(i):(oi("Failed to decode base64 JWT payload"),null)}catch(i){return oi("Caught error parsing JWT payload as JSON",i?.toString()),null}}function ul(n){const e=sa(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _r(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof vt&&Q_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Q_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ar(this.lastLoginAt),this.creationTime=ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await _r(n,yh(t,{idToken:r}));z(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Eh(s.providerUserInfo):[],c=X_(n.providerData,a),u=n.isAnonymous,f=!(n.email&&s.passwordHash)&&!c?.length,p=u?f:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new ao(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(n,g)}async function J_(n){const e=ge(n);await bi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function X_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Eh(n){return n.map(e=>{var{providerId:t}=e,r=ea(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(n,e){const t=await _h(n,{},async()=>{const r=Er({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=vh(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",gh.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ev(n,e){return Vn(n,"POST","/v2/accounts:revokeToken",ia(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ul(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=ul(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Z_(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new pn;return r&&(z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pn,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class dt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ea(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ao(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await _r(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return K_(this,e)}reload(){return J_(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await bi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Je(this.auth.app))return Promise.reject(Vt(this.auth));const e=await this.getIdToken();return await _r(this,W_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,c,u,f,p;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(i=t.email)!==null&&i!==void 0?i:void 0,b=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,S=(a=t.photoURL)!==null&&a!==void 0?a:void 0,C=(c=t.tenantId)!==null&&c!==void 0?c:void 0,k=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,L=(f=t.createdAt)!==null&&f!==void 0?f:void 0,U=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:B,emailVerified:q,isAnonymous:Z,providerData:O,stsTokenManager:T}=t;z(B&&T,e,"internal-error");const _=pn.fromJSON(this.name,T);z(typeof B=="string",e,"internal-error"),wt(g,e.name),wt(v,e.name),z(typeof q=="boolean",e,"internal-error"),z(typeof Z=="boolean",e,"internal-error"),wt(b,e.name),wt(S,e.name),wt(C,e.name),wt(k,e.name),wt(L,e.name),wt(U,e.name);const y=new dt({uid:B,auth:e,email:v,emailVerified:q,displayName:g,isAnonymous:Z,photoURL:S,phoneNumber:b,tenantId:C,stsTokenManager:_,createdAt:L,lastLoginAt:U});return O&&Array.isArray(O)&&(y.providerData=O.map(w=>Object.assign({},w))),k&&(y._redirectEventId=k),y}static async _fromIdTokenResponse(e,t,r=!1){const i=new pn;i.updateFromServerResponse(t);const s=new dt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bi(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Eh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,c=new pn;c.updateFromIdToken(r);const u=new dt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ao(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(u,f),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new Map;function ft(n){_t(n instanceof Function,"Expected a class definition");let e=hl.get(n);return e?(_t(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,hl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ih.type="NONE";const dl=Ih;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n,e,t){return`firebase:${n}:${e}:${t}`}class mn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ai(this.userKey,i.apiKey,s),this.fullPersistenceKey=ai("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new mn(ft(dl),e,r);const i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let s=i[0]||ft(dl);const a=ai(r,e.config.apiKey,e.name);let c=null;for(const f of t)try{const p=await f._get(a);if(p){const g=dt._fromJSON(e,p);f!==s&&(c=g),s=f;break}}catch{}const u=i.filter(f=>f._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new mn(s,e,r):(s=u[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async f=>{if(f!==s)try{await f._remove(a)}catch{}})),new mn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ah(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Th(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sh(e))return"Blackberry";if(Ph(e))return"Webos";if(wh(e))return"Safari";if((e.includes("chrome/")||bh(e))&&!e.includes("edge/"))return"Chrome";if(Rh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Th(n=Ne()){return/firefox\//i.test(n)}function wh(n=Ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bh(n=Ne()){return/crios\//i.test(n)}function Ah(n=Ne()){return/iemobile/i.test(n)}function Rh(n=Ne()){return/android/i.test(n)}function Sh(n=Ne()){return/blackberry/i.test(n)}function Ph(n=Ne()){return/webos/i.test(n)}function oa(n=Ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function tv(n=Ne()){var e;return oa(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nv(){return hf()&&document.documentMode===10}function Ch(n=Ne()){return oa(n)||Rh(n)||Ph(n)||Sh(n)||/windows phone/i.test(n)||Ah(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(n,e=[]){let t;switch(n){case"Browser":t=fl(Ne());break;case"Worker":t=`${fl(Ne())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Cn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,c)=>{try{const u=e(s);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iv(n,e={}){return Vn(n,"GET","/v2/passwordPolicy",ia(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=6;class ov{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:sv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pl(this),this.idTokenSubscription=new pl(this),this.beforeStateQueue=new rv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ph,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ft(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await mn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await yh(this,{idToken:e}),r=await dt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Je(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=B_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Je(this.app))return Promise.reject(Vt(this));const t=e?ge(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Je(this.app)?Promise.reject(Vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Je(this.app)?Promise.reject(Vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iv(this),t=new ov(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ev(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ft(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await mn.create(this,[ft(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&U_(`Error while retrieving App Check token: ${t.error}`),t?.token}}function On(n){return ge(n)}class pl{constructor(e){this.auth=e,this.observer=null,this.addObserver=yf(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cv(n){aa=n}function lv(n){return aa.loadJS(n)}function uv(){return aa.gapiScript}function hv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(n,e){const t=Eo(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(di(s,e??{}))return i;it(i,"already-initialized")}return t.initialize({options:e})}function fv(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(ft);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function pv(n,e,t){const r=On(n);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Dh(e),{host:a,port:c}=mv(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),gv()}function Dh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function mv(n){const e=Dh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ml(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:ml(a)}}}function ml(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function gv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ht("not implemented")}_getIdTokenResponse(e){return ht("not implemented")}_linkToIdToken(e,t){return ht("not implemented")}_getReauthenticationResolver(e){return ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(n,e){return H_(n,"POST","/v1/accounts:signInWithIdp",ia(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="http://localhost";class en extends Nh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new en(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):it("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ea(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new en(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return gn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,gn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gn(e,t)}buildRequest(){const e={requestUri:_v,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Er(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends zi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Pr{constructor(){super("facebook.com")}static credential(e){return en._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com";At.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return en._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ut.credential(t,r)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Pr{constructor(){super("github.com")}static credential(e){return en._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Pr{constructor(){super("twitter.com")}static credential(e,t){return en._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return St.credential(t,r)}catch{return null}}}St.TWITTER_SIGN_IN_METHOD="twitter.com";St.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await dt._fromIdTokenResponse(e,r,i),a=gl(r);return new Rn({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=gl(r);return new Rn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function gl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends vt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ai.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ai(e,t,r,i)}}function Vh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ai._fromErrorAndOperation(n,s,e,r):s})}async function vv(n,e,t=!1){const r=await _r(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Rn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yv(n,e,t=!1){const{auth:r}=n;if(Je(r.app))return Promise.reject(Vt(r));const i="reauthenticate";try{const s=await _r(n,Vh(r,i,e,n),t);z(s.idToken,r,"internal-error");const a=sa(s.idToken);z(a,r,"internal-error");const{sub:c}=a;return z(n.uid===c,r,"user-mismatch"),Rn._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&it(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ev(n,e,t=!1){if(Je(n.app))return Promise.reject(Vt(n));const r="signIn",i=await Vh(n,r,e),s=await Rn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n,e){return ge(n).setPersistence(e)}function Iv(n,e,t,r){return ge(n).onIdTokenChanged(e,t,r)}function Tv(n,e,t){return ge(n).beforeAuthStateChanged(e,t)}function wv(n,e,t,r){return ge(n).onAuthStateChanged(e,t,r)}function bv(n){return ge(n).signOut()}const Ri="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ri,"1"),this.storage.removeItem(Ri),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=1e3,Rv=10;class Mh extends Oh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ch(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);nv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Rv):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Av)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mh.type="LOCAL";const xh=Mh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh extends Oh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Lh.type="SESSION";const Fh=Lh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Hi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async f=>f(t.origin,s)),u=await Sv(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,u)=>{const f=ca("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const v=g;if(v.data.eventId===f)switch(v.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(v.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function Cv(n){tt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function kv(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dv(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Nv(){return Uh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="firebaseLocalStorageDb",Vv=1,Si="firebaseLocalStorage",$h="fbase_key";class Cr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Gi(n,e){return n.transaction([Si],e?"readwrite":"readonly").objectStore(Si)}function Ov(){const n=indexedDB.deleteDatabase(jh);return new Cr(n).toPromise()}function co(){const n=indexedDB.open(jh,Vv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Si,{keyPath:$h})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Si)?e(r):(r.close(),await Ov(),e(await co()))})})}async function vl(n,e,t){const r=Gi(n,!0).put({[$h]:e,value:t});return new Cr(r).toPromise()}async function Mv(n,e){const t=Gi(n,!1).get(e),r=await new Cr(t).toPromise();return r===void 0?null:r.value}function yl(n,e){const t=Gi(n,!0).delete(e);return new Cr(t).toPromise()}const xv=800,Lv=3;class Bh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await co(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Lv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hi._getInstance(Nv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await kv(),!this.activeServiceWorker)return;this.sender=new Pv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await co();return await vl(e,Ri,"1"),await yl(e,Ri),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>vl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Mv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>yl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Gi(i,!1).getAll();return new Cr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bh.type="LOCAL";const qh=Bh;new Sr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(n,e){return e?ft(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends Nh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Fv(n){return Ev(n.auth,new ua(n),n.bypassAuthState)}function Uv(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),yv(t,new ua(n),n.bypassAuthState)}async function jv(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),vv(t,new ua(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fv;case"linkViaPopup":case"linkViaRedirect":return jv;case"reauthViaPopup":case"reauthViaRedirect":return Uv;default:it(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=new Sr(2e3,1e4);async function Bv(n,e,t){if(Je(n.app))return Promise.reject(Qe(n,"operation-not-supported-in-this-environment"));const r=On(n);mh(n,e,zi);const i=la(r,t);return new Ht(r,"signInViaPopup",e,i).executeNotNull()}class Ht extends zh{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ht.currentPopupAction&&Ht.currentPopupAction.cancel(),Ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const e=ca();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$v.get())};e()}}Ht.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv="pendingRedirect",ci=new Map;class zv extends zh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ci.get(this.auth._key());if(!e){try{const r=await Hv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ci.set(this.auth._key(),e)}return this.bypassAuthState||ci.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hv(n,e){const t=Gh(e),r=Hh(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function Gv(n,e){return Hh(n)._set(Gh(e),"true")}function Wv(n,e){ci.set(n._key(),e)}function Hh(n){return ft(n._redirectPersistence)}function Gh(n){return ai(qv,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(n,e,t){return Qv(n,e,t)}async function Qv(n,e,t){if(Je(n.app))return Promise.reject(Vt(n));const r=On(n);mh(n,e,zi),await r._initializationPromise;const i=la(r,t);return await Gv(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function Yv(n,e){return await On(n)._initializationPromise,Wh(n,e,!1)}async function Wh(n,e,t=!1){if(Je(n.app))return Promise.reject(Vt(n));const r=On(n),i=la(r,e),a=await new zv(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=10*60*1e3;class Xv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Kh(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Qe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jv&&this.cachedEventUids.clear(),this.cachedEventUids.has(El(e))}saveEventToCache(e){this.cachedEventUids.add(El(e)),this.lastProcessedEventTime=Date.now()}}function El(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Kh({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Zv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ey(n,e={}){return Vn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ny=/^https?/;async function ry(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ey(n);for(const t of e)try{if(iy(t))return}catch{}it(n,"unauthorized-domain")}function iy(n){const e=oo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!ny.test(t))return!1;if(ty.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=new Sr(3e4,6e4);function Il(){const n=tt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function oy(n){return new Promise((e,t)=>{var r,i,s;function a(){Il(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Il(),t(Qe(n,"network-request-failed"))},timeout:sy.get()})}if(!((i=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tt().gapi)===null||s===void 0)&&s.load)a();else{const c=hv("iframefcb");return tt()[c]=()=>{gapi.load?a():t(Qe(n,"network-request-failed"))},lv(`${uv()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw li=null,e})}let li=null;function ay(n){return li=li||oy(n),li}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=new Sr(5e3,15e3),ly="__/auth/iframe",uy="emulator/auth/iframe",hy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fy(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ra(e,uy):`https://${n.config.authDomain}/${ly}`,r={apiKey:e.apiKey,appName:n.name,v:Cn},i=dy.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Er(r).slice(1)}`}async function py(n){const e=await ay(n),t=tt().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:fy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hy,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Qe(n,"network-request-failed"),c=tt().setTimeout(()=>{s(a)},cy.get());function u(){tt().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gy=500,_y=600,vy="_blank",yy="http://localhost";class Tl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ey(n,e,t,r=gy,i=_y){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},my),{width:r.toString(),height:i.toString(),top:s,left:a}),f=Ne().toLowerCase();t&&(c=bh(f)?vy:t),Th(f)&&(e=e||yy,u.scrollbars="yes");const p=Object.entries(u).reduce((v,[b,S])=>`${v}${b}=${S},`,"");if(tv(f)&&c!=="_self")return Iy(e||"",c),new Tl(null);const g=window.open(e||"",c,p);z(g,n,"popup-blocked");try{g.focus()}catch{}return new Tl(g)}function Iy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="__/auth/handler",wy="emulator/auth/handler",by=encodeURIComponent("fac");async function wl(n,e,t,r,i,s){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Cn,eventId:i};if(e instanceof zi){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",vf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof Pr){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const u=await n._getAppCheckToken(),f=u?`#${by}=${encodeURIComponent(u)}`:"";return`${Ay(n)}?${Er(c).slice(1)}${f}`}function Ay({config:n}){return n.emulator?ra(n,wy):`https://${n.authDomain}/${Ty}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="webStorageSupport";class Ry{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fh,this._completeRedirectFn=Wh,this._overrideRedirectResult=Wv}async _openPopup(e,t,r,i){var s;_t((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await wl(e,t,r,oo(),i);return Ey(e,a,ca())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await wl(e,t,r,oo(),i);return Cv(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(_t(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await py(e),r=new Xv(e);return t.register("authEvent",i=>(z(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vs,{type:Vs},i=>{var s;const a=(s=i?.[0])===null||s===void 0?void 0:s[Vs];a!==void 0&&t(!!a),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ry(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ch()||wh()||oa()}}const Sy=Ry;var bl="@firebase/auth",Al="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ky(n){vn(new Yt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kh(n)},f=new av(r,i,s,u);return fv(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),vn(new Yt("auth-internal",e=>{const t=On(e.getProvider("auth").getImmediate());return(r=>new Py(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(bl,Al,Cy(n)),Nt(bl,Al,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=5*60,Ny=Bl("authIdTokenMaxAge")||Dy;let Rl=null;const Vy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ny)return;const i=t?.token;Rl!==i&&(Rl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Oy(n=Gl()){const e=Eo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=dv(n,{popupRedirectResolver:Sy,persistence:[qh,xh,Fh]}),r=Bl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Vy(s.toString());Tv(t,a,()=>a(t.currentUser)),Iv(t,c=>a(c))}}const i=jl("auth");return i&&pv(t,`http://${i}`),t}function My(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}cv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Qe("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",My().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ky("Browser");const xy={apiKey:"AIzaSyDkWI1TU4an6qu8cQbt5Xsk4OKrQ-eiITI",authDomain:"ruben-dashboard.firebaseapp.com",projectId:"ruben-dashboard",storageBucket:"ruben-dashboard.firebasestorage.app",messagingSenderId:"40452541202",appId:"1:40452541202:web:bc5ad8cc712773fae181cb"},Qh=Hl(xy),Yh=E_(Qh),tn=Oy(Qh),lo=new ut;lo.setCustomParameters({prompt:"select_account"});_l(tn,qh).catch(()=>_l(tn,xh)).catch(n=>console.error("Persistencia Firebase Auth falló:",n));function Ly(n){return wv(tn,n)}async function Fy(n=()=>{}){n("Abriendo Google…");try{await Bv(tn,lo),n("")}catch(e){if(e.code==="auth/popup-blocked"){n("Popup bloqueado, redirigiendo…");try{await Kv(tn,lo)}catch(t){n("⚠ "+(t.code||t.message),!0)}}else e.code==="auth/cancelled-popup-request"||e.code==="auth/popup-closed-by-user"?n(""):n("⚠ "+(e.code||e.message),!0)}}async function Uy(n=()=>{}){try{await Yv(tn)&&n("✓ Sesión recibida…")}catch(e){n("⚠ "+(e.code||e.message),!0)}}async function jy(){await bv(tn)}const st=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,5);function l(n,e={},t=[]){const[r,...i]=n.split("."),s=document.createElement(r||"div");i.length&&(s.className=i.join(" "));for(const[c,u]of Object.entries(e||{}))if(!(u==null||u===!1))if(c==="class")s.className=s.className?s.className+" "+u:u;else if(c==="html")s.innerHTML=u;else if(c==="dataset")Object.assign(s.dataset,u);else if(c.startsWith("on")&&typeof u=="function")s.addEventListener(c.slice(2).toLowerCase(),u);else if(c in s&&c!=="list")try{s[c]=u}catch{s.setAttribute(c,u)}else s.setAttribute(c,u);const a=Array.isArray(t)?t:[t];for(const c of a)c==null||c===!1||s.append(c.nodeType?c:document.createTextNode(String(c)));return s}function nn(n){for(;n.firstChild;)n.removeChild(n.firstChild)}const $y=new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}),x=n=>$y.format(Number(n)||0),$e=(n,e=2)=>(Number(n)||0).toLocaleString("es-ES",{maximumFractionDigits:e}),he=()=>{const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`},Sn=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];function ui(n){if(!n)return null;const e=new Date(he()+"T00:00:00"),t=new Date(n+"T00:00:00");return Math.round((t-e)/864e5)}const By=()=>document.getElementById("metaTheme");function qy(){localStorage.getItem("tema_v2")==="light"&&document.documentElement.classList.add("light"),Jh()}function zy(){const n=document.documentElement.classList.toggle("light");localStorage.setItem("tema_v2",n?"light":"dark"),Jh()}function Jh(){const n=document.documentElement.classList.contains("light"),e=By();e&&e.setAttribute("content",n?"#f4f1ec":"#09090b")}function _n(n){const e=document.getElementById("syncDot");e&&(e.className="sync-dot"+(n?" "+n:""),n==="ok"&&setTimeout(()=>{e.classList.contains("ok")&&(e.className="sync-dot")},1500))}function M(n,e=""){const t=document.getElementById("toastHost");if(!t)return;const r=l("div.toast"+(e?"."+e:""),{},n);t.append(r),setTimeout(()=>{r.style.opacity="0",setTimeout(()=>r.remove(),200)},e==="err"?3500:2200)}function Hy(n,e,t){const r=document.getElementById("appNav");nn(r);for(const i of n)r.append(l("button.nav-item"+(i.id===e?".active":""),{onclick:()=>t(i.id)},[l("span.nav-icon",{},i.icono),l("span.nav-label",{},i.label)]))}function Ve(n,e){const t=l("div.modal-backdrop"),r=()=>t.remove();t.addEventListener("click",s=>{s.target===t&&r()});const i=typeof e=="function"?e(r):e;return t.append(l("div.modal",{},[l("div.modal-title",{},n),i])),document.body.append(t),r}let Pn=null;const Xe={},Pt={};function Sl(n){if(n!==Pn){for(const e of Object.keys(Pt)){try{Pt[e].unsub()}catch{}delete Pt[e]}for(const e of Object.keys(Xe))delete Xe[e];Pn=n||null}}function ha(n){return y_(Yh,"users",Pn,"modulos",n)}function te(n){return n in Xe?Xe[n]:null}async function se(n,e){if(!Pn)throw new Error("sin sesión");Xe[n]=e,_n("syncing");try{await V_(ha(n),{data:JSON.stringify(e),ts:Date.now()}),_n("ok")}catch(t){throw _n("err"),console.error("store.save",n,t),t}}async function da(n){if(!Pn)throw new Error("sin sesión");const e=L_(Yh),t=Date.now();for(const[r,i]of Object.entries(n))Xe[r]=i,e.set(ha(r),{data:JSON.stringify(i),ts:t});_n("syncing");try{await e.commit(),_n("ok")}catch(r){throw _n("err"),console.error("store.saveMany",r),r}}function Ke(n,e){if(!Pn)return()=>{};if(!Pt[n]){const t=new Set,r=O_(ha(n),i=>{Xe[n]=i.exists()?JSON.parse(i.data().data):null;for(const s of t)try{s(Xe[n])}catch(a){console.error(a)}},i=>console.error("store.subscribe",n,i));Pt[n]={unsub:r,listeners:t}}if(Pt[n].listeners.add(e),n in Xe)try{e(Xe[n])}catch(t){console.error(t)}return()=>{const t=Pt[n];if(t&&(t.listeners.delete(e),t.listeners.size===0)){try{t.unsub()}catch{}delete Pt[n]}}}const Xh=15e3,Pl=15,Cl=12.5;function Gy(n){const[e,t]=n.split("-");return`${e}-${parseInt(t,10)-1}`}function Zh(){const n=new Date;return`${n.getFullYear()}-${n.getMonth()}`}function uo(n,e){return n&&n[e]||[]}function ho(n){return(n||[]).reduce((e,t)=>e+(Number(t.importe)||0),0)}function kl(n){return(n||[]).reduce((e,t)=>(e[t.tipo]=(e[t.tipo]||0)+(Number(t.importe)||0),e),{})}function Wy(n){const t=(n||[]).map(r=>{const i=(r.trabajos||[]).filter(s=>!s.pagado);return{id:r.id,nombre:r.nombre,nPend:i.length,importe:i.reduce((s,a)=>s+(Number(a.importe)||0),0)}}).filter(r=>r.nPend>0);return{porTrab:t,total:t.reduce((r,i)=>r+i.importe,0)}}const fa="impuestos";function ed(n){return Object.entries(n||{}).filter(([e])=>e!==fa).reduce((e,[,t])=>e+(Number(t)||0),0)}const pa=[["inversiones","Inversiones"],["liquido","Líquido"],["negocios","Negocios"],["","Sin clasificar"]],td=(n,e)=>n?.grupos_cuentas?.[e]||"";function Ky(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function Qy(n,e,t){const r=[];if(!n)return r;const[i,s,a]=e.split("-").map(Number),[c,u,f]=t.split("-").map(Number),p=new Date(i,s-1,a),g=new Date(c,u-1,f);if(!n.recurrente)return n.fecha&&n.fecha>=e&&n.fecha<=t&&r.push(n.fecha),r;const v=n.fechaInicio||e,b=n.fechaFin||t,[S,C,k]=v.split("-").map(Number),L=new Date(S,C-1,k),[U,B,q]=b.split("-").map(Number),Z=new Date(U,B-1,q),O=new Date(Math.max(L.getTime(),p.getTime())),T=new Date(Math.min(g.getTime(),Z.getTime()));if(n.frecuencia==="semanal"){const _=n.diaCobro!=null?n.diaCobro:1;for(;O<=T&&O.getDay()!==_;)O.setDate(O.getDate()+1);for(;O<=T;)r.push(O.toISOString().split("T")[0]),O.setDate(O.getDate()+7)}else if(n.frecuencia==="mensual"){const _=Math.max(1,Math.min(31,n.diaCobro||1));let y=O.getFullYear(),w=O.getMonth();for(;;){const I=new Date(y,w+1,0).getDate(),A=Math.min(_,I),E=new Date(y,w,A);if(E>T)break;if(E>=O){const ne=`${y}-${String(w+1).padStart(2,"0")}-${String(A).padStart(2,"0")}`;ne>=e&&ne<=t&&r.push(ne)}w++,w>11&&(w=0,y++)}}else if(n.frecuencia==="trimestral"||n.frecuencia==="anual"){const _=n.frecuencia==="anual"?12:3,y=n.diaCobro||L.getDate();let w=L.getFullYear(),I=L.getMonth();for(;;){const A=new Date(w,I+1,0).getDate(),E=Math.min(y,A),ne=new Date(w,I,E);if(ne>T)break;if(ne>=p&&ne>=L){const Ye=`${w}-${String(I+1).padStart(2,"0")}-${String(E).padStart(2,"0")}`;Ye<=t&&r.push(Ye)}for(I+=_;I>=12;)I-=12,w++}}return r}function Wi(n,e,t){const r=[];return(n||[]).forEach(i=>{if(i.archivado)return;Qy(i,e,t).forEach(a=>{const c=(i.pagos||[]).find(u=>u.fecha===a);r.push({gastoId:i.id,concepto:i.concepto,importe:i.importe,categoria:i.categoria,metodo:i.metodo,fecha:a,pagado:!!c,pago:c,gastoRef:i})})}),r.sort((i,s)=>i.fecha.localeCompare(s.fecha)),r}const Dl=n=>n!=="personal",Yy=["personal","kifar","klova","camper","trading","uni","impuestos"];function Jy(n){const[e,t]=n.split("-").map(Number),r=Math.floor((t-1)/3)+1,i=(r-1)*3,s=new Date(e,i+3,0).getDate();return{anio:e,q:r,etiqueta:`Q${r} ${e}`,desde:`${e}-${String(i+1).padStart(2,"0")}-01`,hasta:`${e}-${String(i+3).padStart(2,"0")}-${String(s).padStart(2,"0")}`}}function Xy(n,e,t,r){const i=(r-1)*3,s=new Date(t,i+3,0).getDate(),a=`${t}-${String(i+1).padStart(2,"0")}-01`,c=`${t}-${String(i+3).padStart(2,"0")}-${String(s).padStart(2,"0")}`,u=O=>Number(O).toFixed(2),f=Wi(n||[],a,c).filter(O=>O.gastoRef?.deducible);let p=0,g=0;for(const O of f){const T=O.gastoRef||{};if(T.ivaSoportado!=null)p+=T.ivaSoportado,g+=T.baseImponible||O.importe-T.ivaSoportado;else{const _=(O.importe||0)/1.21;g+=_,p+=_*.21}}const b=(e||[]).filter(O=>O.fecha>=a&&O.fecha<=c),S=b.reduce((O,T)=>O+(T.ivaRepercutido||0),0),C=b.reduce((O,T)=>O+(T.baseImponible||0),0),k=S-p,L=C-g,U=Math.max(0,L*.2),q={1:"20 abril",2:"20 julio",3:"20 octubre",4:"20 enero"}[r]+(r===4?` ${t+1}`:` ${t}`),Z=f.some(O=>O.gastoRef&&O.gastoRef.tipoIVA==null);return{ok:!0,trimestre:`Q${r} ${t}`,rango:{desde:a,hasta:c},plazo:q,facturas:{cantidad:b.length,base:u(C),iva_repercutido:u(S),total:u(C+S)},gastos:{cantidad:f.length,base:u(g),iva_soportado:u(p),nota:Z?"Algunos gastos estimados al 21% (sin desglose IVA)":null},modelo_303:{repercutido:u(S),soportado:u(p),cuota:u(k),resultado:k>=0?`A INGRESAR ${u(k)}€`:`A DEVOLVER ${u(Math.abs(k))}€`},modelo_130:{base_ingresos:u(C),base_gastos:u(g),rendimiento:u(L),cuota:u(U),resultado:U>0?`A INGRESAR ${u(U)}€`:"Sin pago"},total_provisionar:`${u(Math.max(0,k)+U)}€`}}function vr({cobrospagos:n,gastos:e,trabajadores:t},r,i){const s=[];for(const a of n?.movimientos||[])!a.fecha||a.fecha<r||a.fecha>i||s.push({id:a.id,fecha:a.fecha,tipo:a.tipo,concepto:a.concepto||"",categoria:a.categoria||"",importe:Number(a.importe)||0,estado:a.estado||"previsto",notas:a.notas||"",origen:"manual",readonly:!1});for(const a of Wi(e||[],r,i))s.push({id:`g:${a.gastoId}:${a.fecha}`,fecha:a.fecha,tipo:"pago",concepto:a.concepto||"",categoria:a.categoria||"",importe:Number(a.importe)||0,estado:a.pagado?"realizado":"previsto",notas:"",origen:"gasto",readonly:!0});for(const a of t||[])for(const c of a.trabajos||[])c.pagado||!c.fecha||c.fecha<r||c.fecha>i||s.push({id:`w:${a.id}:${c.id}`,fecha:c.fecha,tipo:"pago",concepto:`${a.nombre}: ${c.descripcion||""}`.trim(),categoria:"trabajador",importe:Number(c.importe)||0,estado:"previsto",notas:"",origen:"trabajador",readonly:!0});return s.sort((a,c)=>a.fecha.localeCompare(c.fecha)||a.origen.localeCompare(c.origen)),s}function Ki(n){return(n||[]).reduce((e,t)=>e+(t.tipo==="cobro"?t.importe:-t.importe),0)}function Zy(n,e={}){n.append(l("h1.section-title",{},"Hoy"));const t=l("div");n.append(t);const r={tareas:null,trabajadores:null,ingresos:null,config:null,cobrospagos:null,gastos:null,cargado:{}},i=()=>{nn(t),t.append(eE(r)),t.append(sE(r,e)),t.append(iE(r,e)),t.append(oE(r)),t.append(aE())},s=[Ke("tareas",a=>{r.tareas=a,r.cargado.tareas=!0,i()}),Ke("trabajadores",a=>{r.trabajadores=a,r.cargado.trabajadores=!0,i()}),Ke("ingresos",a=>{r.ingresos=a,r.cargado.ingresos=!0,i()}),Ke("config",a=>{r.config=a,r.cargado.config=!0,i()}),Ke("cobrospagos",a=>{r.cobrospagos=a,r.cargado.cobrospagos=!0,i()}),Ke("gastos",a=>{r.gastos=a,r.cargado.gastos=!0,i()})];return i(),()=>s.forEach(a=>a())}function eE(n){const e=l("div.card");e.append(l("div.card-head",{},[l("h3",{},"Tareas"),l("button.link",{onclick:()=>rE(n)},"+ Nueva")]));const r=(n.tareas||[]).filter(c=>!c.done),i=new Set,s=[],a=(c,u)=>{const f=u.filter(p=>!i.has(p.id));f.forEach(p=>i.add(p.id)),f.length&&s.push({titulo:c,items:f})};if(a("Vencidas",r.filter(c=>c.fecha&&ui(c.fecha)<0)),a("Urgentes",r.filter(c=>c.prioridad==="urgente")),a("Próximos 7 días",r.filter(c=>c.fecha&&ui(c.fecha)>=0&&ui(c.fecha)<=7)),!n.cargado.tareas)return e.append(l("div.spinner")),e;if(!s.length)return e.append(l("div.card-empty",{},"Sin tareas urgentes ni próximas")),e;for(const c of s){e.append(l("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:8px 0 2px;"},c.titulo));for(const u of c.items)e.append(tE(u,n))}return e}function tE(n,e){const t=n.fecha?ui(n.fecha):null,r=n.fecha?t<0?l("span.chip.venc",{},`${Math.abs(t)}d tarde`):t===0?l("span.chip.urgente",{},"hoy"):l("span.chip",{},`${t}d`):null,i=l("button.check",{title:"Completar",onclick:async()=>{await nE(n.id,e)}},"✓");return l("div.row",{},[i,l("div.row-main",{},[l("div.row-label",{},n.titulo||"(sin título)"),l("div.row-sub",{},[n.prioridad==="urgente"?l("span.chip.urgente",{},"urgente"):null,n.prioridad==="baja"?l("span.chip.baja",{},"baja"):null,r].filter(Boolean))])])}async function nE(n,e){const t=(e.tareas||[]).slice(),r=t.find(i=>i.id===n);if(r){r.done=!0;try{await se("tareas",t),M("Tarea completada","ok")}catch{M("No se pudo guardar","err")}}}function rE(n){Ve("Nueva tarea",e=>{const t=l("input",{placeholder:"Título",autofocus:!0}),r=l("select",{},[l("option",{value:"normal"},"Normal"),l("option",{value:"urgente"},"Urgente"),l("option",{value:"baja"},"Baja")]),i=l("input",{type:"date"}),s=async()=>{if(!t.value.trim()){M("Falta el título","err");return}const a={id:st(),titulo:t.value.trim(),desc:"",proyectoId:"personal",prioridad:r.value,fecha:i.value||"",notas:"",done:!1},c=(n.tareas||[]).slice();c.push(a);try{await se("tareas",c),M("Tarea creada","ok"),e()}catch{M("No se pudo guardar","err")}};return l("div",{},[Os("Título",t),l("div.field-grid",{},[Os("Prioridad",r),Os("Fecha",i)]),l("div.btn-row",{},[l("button.btn",{onclick:e},"Cancelar"),l("button.btn.btn-primary",{onclick:s},"Crear")])])})}function iE(n,e){const t=l("div.card");if(t.append(l("div.card-head",{},[l("h3",{},"Pagos pendientes"),e.nav?l("button.link",{onclick:()=>e.nav("equipo")},"Equipo →"):null])),!n.cargado.trabajadores)return t.append(l("div.spinner")),t;const{porTrab:r,total:i}=Wy(n.trabajadores);if(!r.length)return t.append(l("div.card-empty",{},"Nada pendiente de pago")),t;t.append(l("div.hero",{},[l("div.hero-label",{},"Total pendiente"),l("div.hero-value",{},x(i))]));for(const s of r)t.append(l("div.row",{},[l("div.row-main",{},[l("div.row-label",{},s.nombre),l("div.row-sub",{},`${s.nPend} trabajo${s.nPend===1?"":"s"}`)]),l("div.row-right",{},l("span.amount.pend",{},x(s.importe)))]));return t}function sE(n,e){const t=l("div.card");if(t.append(l("div.card-head",{},[l("h3",{},"Tesorería · próximos 7 días"),e.nav?l("button.link",{onclick:()=>e.nav("finanzas")},"Finanzas →"):null])),!n.cargado.cobrospagos||!n.cargado.gastos||!n.cargado.trabajadores)return t.append(l("div.spinner")),t;const r=he(),i=new Date(r+"T00:00:00");i.setDate(i.getDate()+7);const s=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`,a=vr({cobrospagos:n.cobrospagos,gastos:n.gastos,trabajadores:n.trabajadores},r,s),c=Ki(a);if(t.append(l("div.hero",{},[l("div.hero-label",{},"Neto de la semana"),l("div.hero-value",{},x(c)),l("div.hero-sub",{},`${a.length} movimiento${a.length===1?"":"s"} · hasta ${s}`)])),!a.length)return t.append(l("div.card-empty",{},"Sin cobros ni pagos previstos")),t;for(const u of a.slice(0,12)){const f=u.origen==="gasto"?"gasto":u.origen==="trabajador"?"trabajador":u.categoria||u.tipo;t.append(l("div.row",{},[l("div.row-main",{},[l("div.row-label",{},[u.concepto||"(sin concepto)",l("span.chip",{style:"margin-left:6px;"},f)]),l("div.row-sub",{},`${u.fecha} · ${u.estado}`)]),l("div.row-right",{},l("div.amount"+(u.tipo==="cobro"?".pos":".neg"),{},(u.tipo==="cobro"?"+":"−")+x(u.importe)))]))}return t}function oE(n){const e=l("div.card"),t=new Date;if(e.append(l("div.card-head",{},[l("h3",{},"Kifar este mes"),l("span.small.muted",{},`${Sn[t.getMonth()]} ${t.getFullYear()}`)])),!n.cargado.ingresos||!n.cargado.config)return e.append(l("div.spinner")),e;const r=uo(n.ingresos,Zh()),i=ho(r),s=n.config&&n.config.objetivoMes||Xh,a=s>0?Math.min(100,Math.round(i/s*100)):0;return e.append(l("div.hero",{},[l("div.hero-label",{},`${r.length} registro${r.length===1?"":"s"}`),l("div.hero-value",{},x(i)),l("div.hero-sub",{},`Objetivo ${x(s)} · ${a}%`),l("div.progress",{},l("span",{style:`width:${a}%`}))])),e}function aE(){const n=l("div.card");return n.append(l("div.card-head",{},l("h3",{},"Agenda"))),n.append(l("div.card-empty",{},"Disponible próximamente")),n}function Os(n,e){return l("div.field",{},[l("label",{},n),e])}const Qi={hrs:"Horas",pct:"Porcentaje",pzs:"Piezas"};function cE(n,e){if(!e.cargado.ingresos||!e.cargado.config){n.append(l("div.spinner"));return}const t=e.ingresos||{},r=e.config&&e.config.objetivoMes||Xh,i=Zh(),s=uo(t,i),a=ho(s),c=r>0?Math.min(100,Math.round(a/r*100)):0,u=new Date,f=l("div.card");f.append(l("div.card-head",{},[l("h3",{},`${Sn[u.getMonth()]} ${u.getFullYear()}`),l("button.link",{onclick:()=>nd()},"+ Ingreso")])),f.append(l("div.hero",{},[l("div.hero-label",{},`${s.length} registro${s.length===1?"":"s"}`),l("div.hero-value",{},x(a)),l("div.hero-sub",{},`Objetivo ${x(r)} · ${c}%`),l("div.progress",{},l("span",{style:`width:${c}%`}))])),f.append(lE(kl(s))),n.append(f);const p=l("div.card");p.append(l("div.card-head",{},l("h3",{},"Registros del mes"))),s.length||p.append(l("div.card-empty",{},"Sin ingresos este mes"));for(const v of[...s].sort((b,S)=>(S.fechaISO||"").localeCompare(b.fechaISO||"")))p.append(uE(v,i));n.append(p);const g=l("div.card");g.append(l("div.card-head",{},l("h3",{},"Últimos 6 meses")));for(let v=5;v>=0;v--){const b=new Date;b.setDate(1),b.setMonth(b.getMonth()-v);const S=`${b.getFullYear()}-${b.getMonth()}`,C=uo(t,S),k=ho(C),L=kl(C),U=S===i;g.append(l("div.row",{},[l("div.row-main",{},[l("div.row-label",{},[`${Sn[b.getMonth()]} ${b.getFullYear()}`,U?l("span.chip.ok",{style:"margin-left:6px;"},"actual"):null]),l("div.row-sub",{},`${C.length} reg · `+(Object.keys(L).length?Object.entries(L).map(([B,q])=>`${Qi[B]||B}: ${x(q)}`).join(" · "):"—"))]),l("div.row-right",{},l("div.amount",{},x(k)))]))}n.append(g)}function lE(n){return Object.entries(n).length?l("div.kpis",{style:"margin-top:10px;"},["hrs","pct","pzs"].map(t=>l("div.kpi",{},[l("div.kpi-v",{},x(n[t]||0)),l("div.kpi-l",{},Qi[t])]))):l("div.small.muted",{style:"margin-top:8px;"},"Sin desglose todavía")}function uE(n,e){const t=n.tipo==="hrs"?`${$e(n.horas||0)} h × ${$e(n.preciohora||0)} €`:n.tipo==="pct"?`base ${x(n.baseImponible||0)} · ${$e(n.porcentaje||0)}%`:`venta ${x(n.venta||0)} · material ${x(n.material||0)}`;return l("div.row",{},[l("div.row-main",{},[l("div.row-label",{},[n.desc||Qi[n.tipo]||n.tipo,l("span.chip",{style:"margin-left:6px;"},n.tipo)]),l("div.row-sub",{},`${n.fecha||n.fechaISO||"—"} · ${t}`)]),l("div.row-right",{},[l("div.amount",{},x(n.importe)),l("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;"},[l("button.btn.btn-sm",{onclick:()=>nd(n,e)},"Editar"),l("button.btn.btn-sm.btn-danger",{onclick:()=>hE(n.id,e)},"Borrar")])])])}function nd(n=null,e=null){const t=!!n;Ve(t?"Editar ingreso":"Nuevo ingreso Kifar",r=>{const i=l("input",{type:"date",value:n?.fechaISO||he()}),s=l("select",{},Object.entries(Qi).map(([q,Z])=>l("option",{value:q},Z)));s.value=n?.tipo||"hrs";const a=l("input",{value:n?.desc||"",placeholder:"Descripción"}),c=l("input",{type:"number",step:"0.01",value:n?.importe??"",placeholder:"Importe € (opcional en horas)"}),u=l("input",{type:"number",step:"0.25",value:n?.horas??"",placeholder:"Horas"}),f=l("input",{type:"number",step:"0.5",value:n?.preciohora??Pl,placeholder:"€/h"}),p=l("div.field-grid",{},[We("Horas",u),We("€/hora",f)]),g=l("input",{type:"number",step:"0.01",value:n?.baseImponible??"",placeholder:"Base imponible"}),v=l("input",{type:"number",step:"0.01",value:n?.materiales??"",placeholder:"Materiales"}),b=l("input",{type:"number",step:"0.5",value:n?.porcentaje??Cl,placeholder:"%"}),S=l("div",{},[l("div.field-grid",{},[We("Base imponible",g),We("Materiales",v)]),We("Porcentaje %",b)]),C=l("input",{type:"number",step:"0.01",value:n?.venta??"",placeholder:"Venta"}),k=l("input",{type:"number",step:"0.01",value:n?.material??"",placeholder:"Material"}),L=l("div.field-grid",{},[We("Venta",C),We("Material",k)]),U=()=>{p.hidden=s.value!=="hrs",S.hidden=s.value!=="pct",L.hidden=s.value!=="pzs"};s.addEventListener("change",U);const B=async()=>{const q=s.value,Z=i.value||he(),O={id:n?.id||st(),tipo:q,importe:parseFloat(c.value)||0,desc:a.value.trim(),fechaISO:Z,fecha:new Date(Z+"T00:00:00").toLocaleDateString("es-ES")};if(q==="pct"&&(O.baseImponible=parseFloat(g.value)||0,O.materiales=parseFloat(v.value)||0,O.porcentaje=parseFloat(b.value)||Cl),q==="hrs"&&(O.horas=parseFloat(u.value)||0,O.preciohora=parseFloat(f.value)||Pl,O.importe||(O.importe=O.horas*O.preciohora)),q==="pzs"&&(O.venta=parseFloat(C.value)||0,O.material=parseFloat(k.value)||0),!O.importe||O.importe<=0){M("Falta importe (o horas+€/h)","err");return}const T=Gy(Z),_={...te("ingresos")||{}},y=t?e:null;if(y&&(_[y]=(_[y]||[]).slice()),_[T]=(_[T]||[]).slice(),t)if(y&&y!==T)_[y]=_[y].filter(w=>w.id!==O.id),_[T].push(O);else{const w=_[T],I=w.findIndex(A=>A.id===O.id);I>=0?w[I]=O:w.push(O)}else _[T].push(O);try{await se("ingresos",_),M(t?"Ingreso actualizado":`Ingreso registrado (${x(O.importe)})`,"ok"),r()}catch{M("No se pudo guardar","err")}};return U(),l("div",{},[l("div.field-grid",{},[We("Fecha",i),We("Tipo",s)]),We("Descripción",a),We("Importe €",c),p,S,L,l("div.btn-row",{},[l("button.btn",{onclick:r},"Cancelar"),l("button.btn.btn-primary",{onclick:B},t?"Guardar":"Registrar")])])})}async function hE(n,e){const t={...te("ingresos")||{}};t[e]=(t[e]||[]).filter(r=>r.id!==n);try{await se("ingresos",t),M("Ingreso eliminado","ok")}catch{M("No se pudo guardar","err")}}function We(n,e){return l("div.field",{},[l("label",{},n),e])}function dE(n,e={}){n.append(l("h1.section-title",{},"Equipo"));let t="trabajadores";const r=l("div.subtabs"),i=l("div");n.append(r),n.append(i);const s={trabajadores:null,capital:null,ingresos:null,config:null,cargado:{}},a=()=>{nn(r);for(const[u,f]of[["trabajadores","Trabajadores"],["kifar","Kifar"]])r.append(l("button.subtab"+(t===u?".active":""),{onclick:()=>{t=u,a()}},f));nn(i),t==="trabajadores"?fE(i,s):cE(i,s)},c=[Ke("trabajadores",u=>{s.trabajadores=u,s.cargado.trabajadores=!0,t==="trabajadores"&&a()}),Ke("capital",u=>{s.capital=u,s.cargado.capital=!0}),Ke("ingresos",u=>{s.ingresos=u,s.cargado.ingresos=!0,t==="kifar"&&a()}),Ke("config",u=>{s.config=u,s.cargado.config=!0,t==="kifar"&&a()})];return a(),()=>c.forEach(u=>u())}const Se={trabajador:"",estado:"pendientes",desde:"",hasta:""};function fE(n,e){if(!e.cargado.trabajadores){n.append(l("div.spinner"));return}const t=e.trabajadores||[],r=t.filter(a=>a.activo!==!1),i=t.filter(a=>a.activo===!1),s=l("div.card");s.append(l("div.card-head",{},[l("h3",{},`Trabajadores (${r.length})`),l("button.link",{onclick:()=>rd(null)},"+ Alta")])),r.length||s.append(l("div.card-empty",{},"Sin trabajadores activos"));for(const a of r)s.append(Nl(a));if(i.length){s.append(l("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:10px 0 2px;"},"De baja"));for(const a of i)s.append(Nl(a))}n.append(s),n.append(sd(e))}function Nl(n,e){const t=n.trabajos||[],i=t.filter(a=>!a.pagado).reduce((a,c)=>a+(Number(c.importe)||0),0),s=n.activo===!1;return l("div.card",{style:"padding:12px;"},[l("div.row",{style:"border:none;padding:0;"},[l("div.row-main",{},[l("div.row-label",{},[n.nombre,s?l("span.chip.baja",{style:"margin-left:6px;"},"baja"):null]),l("div.row-sub",{},[n.precioHoraHabitual?`${$e(n.precioHoraHabitual)} €/h · `:"",`${t.length} trabajo${t.length===1?"":"s"}`,n.especialidades?` · ${n.especialidades}`:""].join(""))]),l("div.row-right",{},i>0?l("span.amount.pend",{},x(i)):l("span.small.muted",{},"al día"))]),l("div.btn-row",{},[l("button.btn.btn-sm.btn-primary",{onclick:()=>id(n)},"+ Trabajo"),l("button.btn.btn-sm",{onclick:()=>rd(n)},"Editar")])])}function rd(n,e){const t=!n;Ve(t?"Nuevo trabajador":`Editar ${n.nombre}`,r=>{const i=l("input",{value:n?.nombre||"",placeholder:"Nombre"}),s=l("input",{value:n?.telefono||"",placeholder:"Teléfono"}),a=l("input",{type:"number",step:"0.5",value:n?.precioHoraHabitual??"",placeholder:"€/h"}),c=l("input",{value:n?.especialidades||"",placeholder:"p. ej. carpintería"}),u=l("textarea",{rows:2,placeholder:"Notas"},n?.notas||""),f=async()=>{if(!i.value.trim()){M("Falta el nombre","err");return}const v=(te("trabajadores")||[]).slice().map(b=>({...b}));if(t)v.push({id:st(),nombre:i.value.trim(),telefono:s.value.trim(),precioHoraHabitual:parseFloat(a.value)||0,especialidades:c.value.trim(),notas:u.value.trim(),activo:!0,fechaAlta:he(),trabajos:[]});else{const b=v.find(S=>S.id===n.id);if(!b){M("No encontrado","err");return}b.nombre=i.value.trim(),b.telefono=s.value.trim(),b.precioHoraHabitual=parseFloat(a.value)||0,b.especialidades=c.value.trim(),b.notas=u.value.trim()}try{await se("trabajadores",v),M(t?"Trabajador creado":"Guardado","ok"),r()}catch{M("No se pudo guardar","err")}},p=[l("button.btn",{onclick:r},"Cancelar"),l("button.btn.btn-primary",{onclick:f},t?"Crear":"Guardar")];let g=null;if(!t){const v=(n.trabajos||[]).length;n.activo===!1?g=l("button.btn.btn-sm",{onclick:()=>Vl(n.id,!0,r)},"Reactivar"):g=l("button.btn.btn-sm.btn-danger",{onclick:()=>Vl(n.id,!1,r)},"Dar de baja"),v===0&&(g=l("div",{style:"display:flex;gap:8px;"},[g,l("button.btn.btn-sm.btn-danger",{onclick:()=>pE(n.id,r)},"Eliminar")]))}return l("div",{},[le("Nombre",i),l("div.field-grid",{},[le("Teléfono",s),le("Precio €/h habitual",a)]),le("Especialidades",c),le("Notas",u),g?l("div.field",{},[l("label",{},"Estado"),g]):null,l("div.btn-row",{},p)])})}async function Vl(n,e,t){const r=(te("trabajadores")||[]).slice().map(s=>({...s})),i=r.find(s=>s.id===n);if(i){i.activo=e;try{await se("trabajadores",r),M(e?"Reactivado":"Dado de baja","ok"),t?.()}catch{M("No se pudo guardar","err")}}}async function pE(n,e){const t=te("trabajadores")||[],r=t.find(s=>s.id===n);if(r&&(r.trabajos||[]).length){M("Tiene trabajos: no se puede eliminar","err");return}const i=t.filter(s=>s.id!==n);try{await se("trabajadores",i),M("Trabajador eliminado","ok"),e?.()}catch{M("No se pudo guardar","err")}}function id(n,e,t=null){const r=!!t;if(r&&t.pagado){M("No se puede editar un trabajo pagado","err");return}Ve(`${r?"Editar":"Registrar"} trabajo · ${n.nombre}`,i=>{const s=l("input",{type:"date",value:t?.fecha||he()}),a=l("input",{value:t?.descripcion||"",placeholder:"Descripción"}),c=l("select",{},[l("option",{value:"horas"},"Horas"),l("option",{value:"cuenta"},"A cuenta")]);c.value=t?.tipo||"horas";const u=l("input",{value:t?.proyectoId||"kifar",placeholder:"proyectoId (kifar, personal, …)"}),f=l("textarea",{rows:2,placeholder:"Notas"},t?.notas||""),p=l("input",{type:"number",step:"0.25",value:t?.horas??"",placeholder:"Horas"}),g=l("input",{type:"number",step:"0.5",value:t?.precioHora??(n.precioHoraHabitual||""),placeholder:"€/h"}),v=l("input",{type:"number",step:"0.01",value:t?.tipo==="cuenta"&&!t?.unidades?t?.importe??"":"",placeholder:"Importe directo €"}),b=l("input",{type:"number",step:"1",value:t?.unidades??"",placeholder:"Unidades"}),S=l("input",{type:"number",step:"0.01",value:t?.precioUnidad??"",placeholder:"€/unidad"}),C=l("div.field-grid",{},[le("Horas",p),le("Precio €/h",g)]),k=l("div",{},[le("Importe directo",v),l("div.field-grid",{},[le("Unidades",b),le("€/unidad",S)])]),L=()=>{C.hidden=c.value!=="horas",k.hidden=c.value!=="cuenta"};c.addEventListener("change",L);const U=async()=>{if(!a.value.trim()){M("Falta la descripción","err");return}const B=c.value;let q=parseFloat(v.value)||0;const Z=parseFloat(p.value)||0,O=parseFloat(g.value)||n.precioHoraHabitual||0,T=parseFloat(b.value)||0,_=parseFloat(S.value)||0;if(q||(B==="horas"&&Z&&O?q=Z*O:B==="cuenta"&&T&&_&&(q=T*_)),!q||q<=0){M("Falta importe (o horas+€/h, o unidades+€/ud)","err");return}const y=u.value.trim()||"kifar",w=(te("trabajadores")||[]).slice().map(E=>({...E,trabajos:(E.trabajos||[]).slice()})),I=w.find(E=>E.id===n.id);if(!I){M("Trabajador no encontrado","err");return}if(r){const E=I.trabajos.findIndex(Ye=>Ye.id===t.id);if(E<0){M("Trabajo no encontrado","err");return}if(I.trabajos[E].pagado){M("No se puede editar un trabajo pagado","err");return}const ne={...I.trabajos[E],fecha:s.value||he(),tipo:B,descripcion:a.value.trim(),importe:q,proyectoId:y,deducible:y!=="personal",notas:f.value.trim()};B==="horas"?(ne.horas=Z||0,ne.precioHora=O||0,delete ne.unidades,delete ne.precioUnidad):(ne.unidades=T||null,ne.precioUnidad=_||null,delete ne.horas,delete ne.precioHora),I.trabajos[E]=ne;try{await se("trabajadores",w),M("Trabajo actualizado","ok"),i()}catch{M("No se pudo guardar","err")}return}const A={id:st(),fecha:s.value||he(),tipo:B,descripcion:a.value.trim(),importe:q,proyectoId:y,deducible:y!=="personal",notas:f.value.trim(),pagado:!1,fechaPago:null,formaPago:null,cuentaPago:null};B==="horas"?(A.horas=Z||0,A.precioHora=O||0):(A.unidades=T||null,A.precioUnidad=_||null),I.trabajos.push(A);try{await se("trabajadores",w),M(`Trabajo registrado (${x(q)})`,"ok"),i()}catch{M("No se pudo guardar","err")}};return L(),l("div",{},[l("div.field-grid",{},[le("Fecha",s),le("Tipo",c)]),le("Descripción",a),C,k,le("proyectoId",u),le("Notas",f),l("div.btn-row",{},[l("button.btn",{onclick:i},"Cancelar"),l("button.btn.btn-primary",{onclick:U},r?"Guardar":"Registrar")])])})}function mE(n,e){Ve("Eliminar trabajo",t=>{const r=async()=>{const i=(te("trabajadores")||[]).slice().map(a=>({...a,trabajos:(a.trabajos||[]).slice()})),s=i.find(a=>a.id===n.id);if(!s){M("Trabajador no encontrado","err");return}s.trabajos=s.trabajos.filter(a=>a.id!==e.id);try{await se("trabajadores",i),M(`Trabajo eliminado${e.pagado?" (el pago NO se devuelve a capital)":""}`,"ok"),t()}catch{M("No se pudo guardar","err")}};return l("div",{},[l("div.hero",{},[l("div.hero-label",{},`${n.nombre} · ${e.fecha||"—"}`),l("div.hero-value",{},x(e.importe)),l("div.hero-sub",{},e.descripcion||"")]),e.pagado?l("div.card",{style:"border-color:var(--red);"},l("div.row-sub",{style:"color:var(--red);font-size:11px;"},"⚠ Este trabajo está PAGADO. Al eliminarlo, el pago NO se devuelve a capital: el saldo no cambia.")):l("div.small.muted",{},"Se eliminará del historial del trabajador."),l("div.btn-row",{},[l("button.btn",{onclick:t},"Cancelar"),l("button.btn.btn-danger",{onclick:r},"Eliminar")])])})}function sd(n){const e=l("div.card");e.append(l("div.card-head",{},l("h3",{},"Historial")));const t=n.trabajadores||[],r=l("select",{},[l("option",{value:""},"Todos"),...t.map(g=>l("option",{value:g.id},g.nombre))]);r.value=Se.trabajador;const i=l("select",{},[l("option",{value:"pendientes"},"Pendientes"),l("option",{value:"pagados"},"Pagados"),l("option",{value:"todos"},"Todos")]);i.value=Se.estado;const s=l("input",{type:"date",value:Se.desde}),a=l("input",{type:"date",value:Se.hasta}),c=()=>{Se.trabajador=r.value,Se.estado=i.value,Se.desde=s.value,Se.hasta=a.value,gE(e,n)};[r,i,s,a].forEach(g=>g.addEventListener("change",c)),e.append(l("div.field-grid",{},[le("Trabajador",r),le("Estado",i)])),e.append(l("div.field-grid",{},[le("Desde",s),le("Hasta",a)]));let u=[];for(const g of t)if(!(Se.trabajador&&g.id!==Se.trabajador))for(const v of g.trabajos||[])Se.estado==="pendientes"&&v.pagado||Se.estado==="pagados"&&!v.pagado||Se.desde&&(v.fecha||"")<Se.desde||Se.hasta&&(v.fecha||"")>Se.hasta||u.push({t:g,j:v});u.sort((g,v)=>(v.j.fecha||"").localeCompare(g.j.fecha||""));const f=u.reduce((g,v)=>g+(Number(v.j.importe)||0),0),p=u.filter(g=>!g.j.pagado).reduce((g,v)=>g+(Number(v.j.importe)||0),0);e.append(l("div.kpis",{},[Ms(String(u.length),"Registros"),Ms(x(f),"Importe"),Ms(x(p),"Pendiente")])),u.length||e.append(l("div.card-empty",{},"Sin resultados"));for(const{t:g,j:v}of u)e.append(_E(g,v,n));return e}function gE(n,e){const t=sd(e);n.replaceWith(t)}function _E(n,e,t){const r=e.tipo==="horas"?`${$e(e.horas||0)} h × ${$e(e.precioHora||0)} €`:e.unidades?`${$e(e.unidades)} × ${$e(e.precioUnidad||0)} €`:"a cuenta";return l("div.row",{},[l("div.row-main",{},[l("div.row-label",{},`${n.nombre} · ${e.descripcion}`),l("div.row-sub",{},`${e.fecha||"—"} · ${r} · ${e.proyectoId}${e.pagado?` · pagado ${e.fechaPago||""} (${e.cuentaPago||""})`:""}`)]),l("div.row-right",{},[l("div.amount"+(e.pagado?"":".pend"),{},x(e.importe)),e.pagado?l("span.chip.ok",{},"pagado"):null,l("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;flex-wrap:wrap;"},[e.pagado?null:l("button.btn.btn-sm.btn-primary",{onclick:()=>vE(n,e)},"Pagar"),e.pagado?null:l("button.btn.btn-sm",{onclick:()=>id(n,t,e)},"Editar"),l("button.btn.btn-sm.btn-danger",{onclick:()=>mE(n,e)},"Borrar")].filter(Boolean))])])}function vE(n,e,t){Ve("Marcar pagado",r=>{const i=Object.keys((te("capital")||{}).cuentas||{});i.includes("revolut")||i.unshift("revolut");const s=l("select",{},i.map(u=>l("option",{value:u},u)));s.value="revolut";const a=l("select",{},["transferencia","efectivo","bizum"].map(u=>l("option",{value:u},u)));a.value="transferencia";const c=async()=>{try{await yE(n.id,e.id,s.value,a.value),M(`Pagado ${x(e.importe)} a ${n.nombre}`,"ok"),r()}catch{M("No se pudo registrar el pago","err")}};return l("div",{},[l("div.hero",{},[l("div.hero-label",{},`${n.nombre} · ${e.descripcion}`),l("div.hero-value",{},x(e.importe))]),l("div.field-grid",{},[le("Cuenta",s),le("Forma de pago",a)]),l("div.btn-row",{},[l("button.btn",{onclick:r},"Cancelar"),l("button.btn.btn-primary",{onclick:c},"Confirmar pago")])])})}async function yE(n,e,t,r){const i=he(),s=(te("trabajadores")||[]).map(g=>({...g,trabajos:(g.trabajos||[]).map(v=>({...v}))})),a=s.find(g=>g.id===n),c=a&&a.trabajos.find(g=>g.id===e);if(!c)throw new Error("trabajo no encontrado");if(c.pagado)throw new Error("ya pagado");c.pagado=!0,c.fechaPago=i,c.formaPago=r||"transferencia",c.cuentaPago=t||"revolut",c.importePagado=c.importe;const u=te("capital")||{cuentas:{},historial:[]},f={...u,cuentas:{...u.cuentas||{}},historial:(u.historial||[]).slice()},p=c.cuentaPago;f.cuentas[p]=(f.cuentas[p]||0)-c.importe,f.historial.push({id:st(),tipo:"trabajador",cuenta:p,importe:-c.importe,concepto:`${a.nombre}: ${c.descripcion}`,fechaISO:i}),await da({trabajadores:s,capital:f})}function le(n,e){return l("div.field",{},[l("label",{},n),e])}function Ms(n,e){return l("div.kpi",{},[l("div.kpi-v",{},n),l("div.kpi-l",{},e)])}const Fe={anio:null,mesGridY:null,mesGridM:null},Be={tipo:"",categoria:"",estado:""},Yi=()=>{const n=te("cobrospagos")||{};return{saldoInicial:Number(n.saldoInicial)||0,fechaInicio:n.fechaInicio||"",movimientos:n.movimientos||[]}},fo=()=>`${new Date().getFullYear()}-01-01`,Pi=(n,e)=>new Date(n,e+1,0).getDate(),Qt=(n,e,t)=>`${n}-${String(e+1).padStart(2,"0")}-${String(t).padStart(2,"0")}`;function EE(n,e){if(!e.cargado.cobrospagos||!e.cargado.gastos||!e.cargado.trabajadores){n.append(l("div.spinner"));return}const t=new Date;Fe.anio==null&&(Fe.anio=t.getFullYear()),Fe.mesGridY==null&&(Fe.mesGridY=t.getFullYear(),Fe.mesGridM=t.getMonth());const r=Yi(),i={cobrospagos:e.cobrospagos,gastos:e.gastos,trabajadores:e.trabajadores};n.append(IE(r)),n.append(po(i,r)),n.append(ad(i)),n.append(cd(i))}function IE(n){const e=l("div.card");return e.append(l("div.card-head",{},[l("h3",{},"Tesorería"),l("button.link",{onclick:()=>od(null)},"+ Movimiento")])),e.append(l("div.hero",{},[l("div.hero-label",{},"Saldo inicial"),l("div.hero-value",{},x(n.saldoInicial)),l("div.hero-sub",{},n.fechaInicio?`desde ${n.fechaInicio}`:"sin fecha de inicio")])),e.append(l("div.btn-row",{},[l("button.btn.btn-sm",{onclick:()=>TE(n)},"Editar saldo/fecha inicial")])),e}function TE(n){Ve("Saldo y fecha inicial",e=>{const t=l("input",{type:"number",step:"0.01",value:n.saldoInicial,placeholder:"Saldo inicial €"}),r=l("input",{type:"date",value:n.fechaInicio||fo()}),i=async()=>{const a={...Yi(),saldoInicial:parseFloat(t.value)||0,fechaInicio:r.value||fo()};try{await se("cobrospagos",a),M("Guardado","ok"),e()}catch{M("No se pudo guardar","err")}};return l("div",{},[qe("Saldo inicial €",t),qe("Fecha de inicio",r),l("div.btn-row",{},[l("button.btn",{onclick:e},"Cancelar"),l("button.btn.btn-primary",{onclick:i},"Guardar")])])})}function od(n){const e=!!n;Ve(e?"Editar movimiento":"Nuevo movimiento",t=>{const r=l("input",{type:"date",value:n?.fecha||he()}),i=l("select",{},[l("option",{value:"cobro"},"Cobro"),l("option",{value:"pago"},"Pago")]);i.value=n?.tipo||"cobro";const s=l("input",{value:n?.concepto||"",placeholder:"Concepto"}),a=l("input",{value:n?.categoria||"",placeholder:"Categoría (opcional)"}),c=l("input",{type:"number",step:"0.01",value:n?.importe??"",placeholder:"Importe €"}),u=l("select",{},[l("option",{value:"previsto"},"Previsto"),l("option",{value:"realizado"},"Realizado")]);u.value=n?.estado||"previsto";const f=l("textarea",{rows:2,placeholder:"Notas"},n?.notas||""),p=async()=>{if(!s.value.trim()){M("Falta el concepto","err");return}const g=parseFloat(c.value)||0;if(!g||g<=0){M("Falta el importe","err");return}const v=Yi(),b=v.movimientos.slice(),S={id:n?.id||st(),fecha:r.value||he(),tipo:i.value,concepto:s.value.trim(),categoria:a.value.trim(),importe:g,estado:u.value,notas:f.value.trim()};if(e){const C=b.findIndex(k=>k.id===S.id);C>=0?b[C]=S:b.push(S)}else b.push(S);try{await se("cobrospagos",{...v,movimientos:b}),M(e?"Movimiento actualizado":"Movimiento creado","ok"),t()}catch{M("No se pudo guardar","err")}};return l("div",{},[l("div.field-grid",{},[qe("Fecha",r),qe("Tipo",i)]),qe("Concepto",s),l("div.field-grid",{},[qe("Categoría",a),qe("Importe €",c)]),qe("Estado",u),qe("Notas",f),l("div.btn-row",{},[l("button.btn",{onclick:t},"Cancelar"),e?l("button.btn.btn-danger",{onclick:()=>wE(n.id,t)},"Eliminar"):null,l("button.btn.btn-primary",{onclick:p},e?"Guardar":"Crear")].filter(Boolean))])})}async function wE(n,e){const t=Yi();try{await se("cobrospagos",{...t,movimientos:t.movimientos.filter(r=>r.id!==n)}),M("Movimiento eliminado","ok"),e?.()}catch{M("No se pudo guardar","err")}}function po(n,e){const t=l("div.card"),r=Fe.anio;t.append(l("div.card-head",{},[l("h3",{},"Resumen mensual"),l("div",{style:"display:flex;gap:8px;align-items:center;"},[l("button.btn.btn-sm",{onclick:()=>{Fe.anio--,t.replaceWith(po(n,e))}},"‹"),l("span.small.muted",{},String(r)),l("button.btn.btn-sm",{onclick:()=>{Fe.anio++,t.replaceWith(po(n,e))}},"›")])]));const i=e.fechaInicio||fo(),s=l("div",{style:"overflow-x:auto;"}),a=l("table.ftable");a.append(l("thead",{},l("tr",{},[l("th",{},"Mes"),l("th",{},"Cobros"),l("th",{},"Pagos"),l("th",{},"Neto"),l("th",{},"Saldo acum.")])));const c=l("tbody");for(let u=0;u<12;u++){const f=Qt(r,u,1),p=Qt(r,u,Pi(r,u)),g=vr(n,f,p),v=g.filter(L=>L.tipo==="cobro").reduce((L,U)=>L+U.importe,0),b=g.filter(L=>L.tipo==="pago").reduce((L,U)=>L+U.importe,0),S=v-b,C=Ki(vr(n,i,p)),k=e.saldoInicial+C;c.append(l("tr",{},[l("td",{},Sn[u].slice(0,3)),l("td",{style:"text-align:right;"},v?x(v):"·"),l("td",{style:"text-align:right;"},b?x(b):"·"),l("td"+(S>=0?".pos":".neg"),{style:"text-align:right;"},x(S)),l("td",{style:"text-align:right;font-weight:500;"},x(k))]))}return a.append(c),s.append(a),t.append(s),t}function ad(n){var v;const e=l("div.card"),t=Fe.mesGridY,r=Fe.mesGridM,i=b=>{let S=r+b,C=t;for(;S<0;)S+=12,C--;for(;S>11;)S-=12,C++;Fe.mesGridY=C,Fe.mesGridM=S,e.replaceWith(ad(n))};e.append(l("div.card-head",{},[l("h3",{},"Calendario"),l("div",{style:"display:flex;gap:8px;align-items:center;"},[l("button.btn.btn-sm",{onclick:()=>i(-1)},"‹"),l("span.small.muted",{},`${Sn[r]} ${t}`),l("button.btn.btn-sm",{onclick:()=>i(1)},"›")])]));const s=Qt(t,r,1),a=Qt(t,r,Pi(t,r)),c=vr(n,s,a),u={};for(const b of c)(u[v=b.fecha]||(u[v]=[])).push(b);const f=l("div.cal-grid");for(const b of["L","M","X","J","V","S","D"])f.append(l("div.cal-dow",{},b));const p=(new Date(t,r,1).getDay()+6)%7;for(let b=0;b<p;b++)f.append(l("div.cal-cell.empty"));const g=he();for(let b=1;b<=Pi(t,r);b++){const S=Qt(t,r,b),C=u[S]||[],k=Ki(C),L=(C.length?" clickable":"")+(S===g?" hoy":""),U=l("div.cal-cell",{class:L.trim()},[l("div.cal-num",{},String(b)),C.length?l("div.cal-net"+(k>=0?".pos":".neg"),{},$e(k,0)):l("div")]);C.length&&U.addEventListener("click",()=>bE(S,C)),f.append(U)}return e.append(f),e}function bE(n,e){Ve(n,t=>{const r=l("div");for(const i of e)r.append(ld(i,!1));return l("div",{},[l("div.hero",{},[l("div.hero-label",{},"Neto del día"),l("div.hero-value",{},x(Ki(e)))]),r,l("div.btn-row",{},[l("button.btn",{onclick:t},"Cerrar")])])})}function cd(n){const e=l("div.card");e.append(l("div.card-head",{},l("h3",{},"Registro del mes")));const t=Fe.mesGridY,r=Fe.mesGridM,i=Qt(t,r,1),s=Qt(t,r,Pi(t,r));let a=vr(n,i,s);const c=[...new Set(a.map(S=>S.categoria).filter(Boolean))],u=l("select",{},[l("option",{value:""},"Todos"),l("option",{value:"cobro"},"Cobros"),l("option",{value:"pago"},"Pagos")]);u.value=Be.tipo;const f=l("select",{},[l("option",{value:""},"Todas"),...c.map(S=>l("option",{value:S},S))]);f.value=Be.categoria;const p=l("select",{},[l("option",{value:""},"Todos"),l("option",{value:"previsto"},"Previsto"),l("option",{value:"realizado"},"Realizado")]);p.value=Be.estado;const g=()=>{Be.tipo=u.value,Be.categoria=f.value,Be.estado=p.value,e.replaceWith(cd(n))};[u,f,p].forEach(S=>S.addEventListener("change",g)),e.append(l("div.field-grid",{},[qe("Tipo",u),qe("Estado",p)])),e.append(qe("Categoría",f)),Be.tipo&&(a=a.filter(S=>S.tipo===Be.tipo)),Be.categoria&&(a=a.filter(S=>S.categoria===Be.categoria)),Be.estado&&(a=a.filter(S=>S.estado===Be.estado));const v=a.filter(S=>S.tipo==="cobro").reduce((S,C)=>S+C.importe,0),b=a.filter(S=>S.tipo==="pago").reduce((S,C)=>S+C.importe,0);if(e.append(l("div.kpis",{},[xs(x(v),"Cobros"),xs(x(b),"Pagos"),xs(x(v-b),"Neto")])),!a.length)return e.append(l("div.card-empty",{},"Sin movimientos")),e;for(const S of a)e.append(ld(S,!0));return e}function ld(n,e){const t=n.tipo==="cobro"?".pos":".neg",r=n.origen==="gasto"?"gasto":n.origen==="trabajador"?"trabajador":n.categoria||n.tipo;return l("div.row",{},[l("div.row-main",{},[l("div.row-label",{},[n.concepto||"(sin concepto)",l("span.chip",{style:"margin-left:6px;"},r)]),l("div.row-sub",{},`${n.fecha} · ${n.estado}${n.readonly?" · solo lectura":""}`)]),l("div.row-right",{},[l("div.amount"+t,{},(n.tipo==="cobro"?"+":"−")+x(n.importe)),e&&!n.readonly?l("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;"},[l("button.btn.btn-sm",{onclick:()=>od(AE(n))},"Editar")]):null])])}function AE(n){return{id:n.id,fecha:n.fecha,tipo:n.tipo,concepto:n.concepto,categoria:n.categoria,importe:n.importe,estado:n.estado,notas:n.notas}}function qe(n,e){return l("div.field",{},[l("label",{},n),e])}function xs(n,e){return l("div.kpi",{},[l("div.kpi-v",{},n),l("div.kpi-l",{},e)])}const Ce={anio:null,mes:null,mostrarArchivados:!1,categoria:""},RE=(n,e)=>new Date(n,e+1,0).getDate(),Ol=(n,e,t)=>`${n}-${String(e+1).padStart(2,"0")}-${String(t).padStart(2,"0")}`,Ml=n=>{const e=new Date;return e.setDate(e.getDate()+n),e.toISOString().split("T")[0]};function SE(n,e){if(!e.cargado.gastos){n.append(l("div.spinner"));return}const t=new Date;Ce.anio==null&&(Ce.anio=t.getFullYear(),Ce.mes=t.getMonth());const r=e.gastos||[];n.append(ud(r)),n.append(mo(r))}function ud(n){const e=l("div.card"),t=Ce.anio,r=Ce.mes,i=g=>{let v=r+g,b=t;for(;v<0;)v+=12,b--;for(;v>11;)v-=12,b++;Ce.anio=b,Ce.mes=v,e.replaceWith(ud(n))};e.append(l("div.card-head",{},[l("h3",{},"Resumen del mes"),l("div",{style:"display:flex;gap:8px;align-items:center;"},[l("button.btn.btn-sm",{onclick:()=>i(-1)},"‹"),l("span.small.muted",{},`${Sn[r]} ${t}`),l("button.btn.btn-sm",{onclick:()=>i(1)},"›")])]));const s=Ol(t,r,1),a=Ol(t,r,RE(t,r)),c=Wi(n,s,a),u=c.reduce((g,v)=>g+(v.importe||0),0),f=c.filter(g=>g.pagado).reduce((g,v)=>g+(v.importe||0),0),p=c.filter(g=>!g.pagado).reduce((g,v)=>g+(v.importe||0),0);return e.append(l("div.kpis",{},[Ls(x(u),"Esperado"),Ls(x(f),"Pagado"),Ls(x(p),"Pendiente")])),e}function mo(n){const e=l("div.card");e.append(l("div.card-head",{},[l("h3",{},Ce.mostrarArchivados?"Gastos archivados":"Gastos"),l("button.link",{onclick:()=>hd(null)},"+ Gasto")]));const t=[...new Set(n.map(u=>u.categoria).filter(Boolean))].sort(),r=l("select",{},[l("option",{value:""},"Todas"),...t.map(u=>l("option",{value:u},u))]);r.value=Ce.categoria,r.addEventListener("change",()=>{Ce.categoria=r.value,e.replaceWith(mo(n))});const i=l("button.btn.btn-sm",{onclick:()=>{Ce.mostrarArchivados=!Ce.mostrarArchivados,e.replaceWith(mo(n))}},Ce.mostrarArchivados?"Ver activos":"Ver archivados");e.append(l("div.field-grid",{},[Pe("Categoría",r),l("div.field",{},[l("label",{},"Vista"),i])]));let s=n.filter(u=>!!u.archivado===Ce.mostrarArchivados);Ce.categoria&&(s=s.filter(u=>u.categoria===Ce.categoria));const a=s.filter(u=>u.recurrente),c=s.filter(u=>!u.recurrente);return e.append(xl("Recurrentes",a)),e.append(xl("Puntuales",c)),s.length||e.append(l("div.card-empty",{},"Sin gastos")),e}function xl(n,e){var i;const t=l("div");if(!e.length)return t;t.append(l("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:10px 0 2px;"},n));const r={};for(const s of e)(r[i=s.categoria||"—"]||(r[i]=[])).push(s);for(const s of Object.keys(r).sort())for(const a of r[s])t.append(PE(a));return t}function PE(n){const e=n.recurrente?`${n.frecuencia||"mensual"} · día ${n.diaCobro??1}${n.fechaFin?` · hasta ${n.fechaFin}`:""}`:n.fecha||"—",t=!n.recurrente&&(n.pagos||[]).some(r=>r.fecha===n.fecha);return l("div.row",{},[l("div.row-main",{},[l("div.row-label",{},[n.concepto||"(sin concepto)",l("span.chip",{style:"margin-left:6px;"},n.categoria||"—"),n.deducible?l("span.chip.ok",{style:"margin-left:4px;"},"deducible"):null,t?l("span.chip.ok",{style:"margin-left:4px;"},"pagado"):null].filter(Boolean)),l("div.row-sub",{},[e,n.baseImponible!=null?` · base ${x(n.baseImponible)} · IVA ${$e(n.tipoIVA||21,0)}%`:""].join("")),n.facturaDrive?l("a",{href:n.facturaDrive.link||n.facturaDrive,target:"_blank",rel:"noopener",class:"link",style:"font-size:9px;"},"📎 factura Drive"):null].filter(Boolean)),l("div.row-right",{},[l("div.amount",{},x(n.importe)),l("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;flex-wrap:wrap;"},[l("button.btn.btn-sm.btn-primary",{onclick:()=>kE(n)},"Pagar"),l("button.btn.btn-sm",{onclick:()=>hd(n)},"Editar"),l("button.btn.btn-sm",{onclick:()=>CE(n)},n.archivado?"Desarchivar":"Archivar"),l("button.btn.btn-sm.btn-danger",{onclick:()=>NE(n)},"Eliminar")])])])}async function CE(n){const e=(te("gastos")||[]).map(r=>({...r})),t=e.find(r=>r.id===n.id);if(t){t.archivado=!t.archivado;try{await se("gastos",e),M(t.archivado?"Archivado":"Desarchivado","ok")}catch{M("No se pudo guardar","err")}}}function hd(n){const e=!!n;Ve(e?"Editar gasto":"Nuevo gasto",t=>{const r=l("input",{value:n?.concepto||"",placeholder:"Concepto"}),i=l("input",{type:"number",step:"0.01",value:n?.importe??"",placeholder:"Importe €"}),s=[...new Set([...Yy,...(te("gastos")||[]).map(T=>T.categoria).filter(Boolean)])],a=l("select",{},s.map(T=>l("option",{value:T},T)));a.value=n?.categoria||"personal";const c=l("input",{type:"checkbox"});c.checked=n?!!n.deducible:Dl(a.value),a.addEventListener("change",()=>{e||(c.checked=Dl(a.value))});const u=l("select",{},[l("option",{value:"manual"},"Manual"),l("option",{value:"domiciliado"},"Domiciliado")]);u.value=n?.metodo||"manual";const f=l("textarea",{rows:2,placeholder:"Notas"},n?.notas||""),p=l("input",{type:"checkbox"});p.checked=!!n?.recurrente;const g=l("input",{type:"date",value:n?.fecha||he()}),v=l("div",{},Pe("Fecha",g)),b=l("select",{},["mensual","trimestral","anual","semanal"].map(T=>l("option",{value:T},T)));b.value=n?.frecuencia||"mensual";const S=l("input",{type:"number",step:"1",value:n?.diaCobro??1,placeholder:"Día (1-31 o 0-6 semanal)"}),C=l("input",{type:"date",value:n?.fechaInicio||he()}),k=l("input",{type:"date",value:n?.fechaFin||""}),L=l("div",{},[l("div.field-grid",{},[Pe("Frecuencia",b),Pe("Día de cobro",S)]),l("div.field-grid",{},[Pe("Fecha inicio",C),Pe("Fecha fin (opc.)",k)])]),U=()=>{v.hidden=p.checked,L.hidden=!p.checked};p.addEventListener("change",U);const B=l("input",{type:"number",step:"0.01",value:n?.baseImponible??"",placeholder:"Base imponible (opc.)"}),q=l("input",{type:"number",step:"1",value:n?.tipoIVA??21,placeholder:"% IVA"}),Z=l("input",{type:"number",step:"0.01",value:n?.ivaSoportado??"",placeholder:"IVA soportado (auto si vacío)"}),O=async()=>{if(!r.value.trim()){M("Falta el concepto","err");return}const T=parseFloat(i.value)||0;if(!T||T<=0){M("Falta el importe","err");return}const _=a.value,y=(te("gastos")||[]).map(I=>({...I})),w=I=>(I.concepto=r.value.trim(),I.importe=T,I.categoria=_,I.deducible=c.checked,I.metodo=u.value||"manual",I.notas=f.value.trim(),I.recurrente=p.checked,I.recurrente?(I.frecuencia=b.value||"mensual",I.diaCobro=S.value!==""?parseInt(S.value,10):1,I.fechaInicio=C.value||he(),I.fechaFin=k.value||null,delete I.fecha):(I.fecha=g.value||he(),delete I.frecuencia,delete I.diaCobro,delete I.fechaInicio,delete I.fechaFin),B.value!==""?(I.baseImponible=parseFloat(B.value),I.tipoIVA=parseFloat(q.value)||21,I.ivaSoportado=Z.value!==""?parseFloat(Z.value):parseFloat((I.baseImponible*I.tipoIVA/100).toFixed(2))):(delete I.baseImponible,delete I.tipoIVA,delete I.ivaSoportado),I);if(e){const I=y.find(A=>A.id===n.id);if(!I){M("Gasto no encontrado","err");return}w(I)}else{const I=w({id:st(),pagos:[],facturaDrive:null});y.push(I)}try{await se("gastos",y),M(e?"Gasto guardado":"Gasto creado","ok"),t()}catch{M("No se pudo guardar","err")}};return U(),l("div",{},[Pe("Concepto",r),l("div.field-grid",{},[Pe("Importe €",i),Pe("Categoría",a)]),l("div.field-grid",{},[l("div.field",{},[l("label",{},"Deducible"),l("div",{style:"display:flex;align-items:center;gap:6px;height:34px;"},[c,l("span.small.muted",{},"IVA/IRPF")])]),Pe("Método",u)]),l("div.field",{},[l("label",{},"Recurrente"),l("div",{style:"display:flex;align-items:center;gap:6px;height:34px;"},[p,l("span.small.muted",{},"se repite en el tiempo")])]),v,L,l("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:10px 0 4px;"},"IVA (opcional)"),l("div.field-grid",{},[Pe("Base imponible",B),Pe("% IVA",q)]),Pe("IVA soportado",Z),Pe("Notas",f),l("div.btn-row",{},[l("button.btn",{onclick:t},"Cancelar"),l("button.btn.btn-primary",{onclick:O},e?"Guardar":"Crear")])])})}function kE(n){Ve("Marcar pagado",e=>{const t=Wi([n],Ml(-90),Ml(120)).filter(f=>!f.pagado);if(!t.length)return l("div",{},[l("div.small.muted",{},"No hay ocurrencias pendientes de este gasto."),l("div.btn-row",{},[l("button.btn",{onclick:e},"Cerrar")])]);const r=he(),i=t.find(f=>f.fecha===r)||t[0],s=l("select",{},t.map(f=>l("option",{value:f.fecha},`${f.fecha} · ${x(f.importe)}`)));s.value=i.fecha;const a=Object.keys((te("capital")||{}).cuentas||{});a.includes("revolut")||a.unshift("revolut");const c=l("select",{},a.map(f=>l("option",{value:f},f)));c.value="revolut";const u=async()=>{try{await DE(n.id,s.value,c.value),M(`Pagado "${n.concepto}"`,"ok"),e()}catch{M("No se pudo registrar el pago","err")}};return l("div",{},[l("div.hero",{},[l("div.hero-label",{},n.concepto),l("div.hero-value",{},x(n.importe))]),l("div.field-grid",{},[Pe("Ocurrencia",s),Pe("Cuenta",c)]),l("div.small.muted",{},"Resta de la cuenta y añade un movimiento en el historial de capital, idéntico al bot."),l("div.btn-row",{},[l("button.btn",{onclick:e},"Cancelar"),l("button.btn.btn-primary",{onclick:u},"Confirmar pago")])])})}async function DE(n,e,t){const r=he(),i=t||"revolut",s=(te("gastos")||[]).map(p=>({...p,pagos:(p.pagos||[]).slice()})),a=s.find(p=>p.id===n);if(!a)throw new Error("gasto no encontrado");const c=a.importe;a.pagos||(a.pagos=[]),a.pagos=a.pagos.filter(p=>p.fecha!==e),a.pagos.push({fecha:e,fechaPago:r,importe:c,cuenta:i});const u=te("capital")||{cuentas:{},historial:[]},f={...u,cuentas:{...u.cuentas||{}},historial:(u.historial||[]).slice()};f.cuentas[i]=(f.cuentas[i]||0)-c,f.historial.push({id:st(),tipo:"gasto",cuenta:i,importe:-c,concepto:`Gasto: ${a.concepto}`,fechaISO:r}),await da({gastos:s,capital:f})}function NE(n){const e=(n.pagos||[]).length>0,t=(n.pagos||[]).reduce((r,i)=>r+(i.importe||0),0);Ve("Eliminar gasto",r=>l("div",{},[l("div.hero",{},[l("div.hero-label",{},n.concepto),l("div.hero-value",{},x(n.importe))]),e?l("div.card",{style:"border-color:var(--gold);"},l("div.row-sub",{style:"color:var(--gold);font-size:11px;"},`Tiene ${n.pagos.length} pago(s): se devolverán ${x(t)} al capital (reverso).`)):l("div.small.muted",{},"Se eliminará el gasto."),l("div.btn-row",{},[l("button.btn",{onclick:r},"Cancelar"),l("button.btn.btn-danger",{onclick:async()=>{try{await VE(n.id),M("Gasto eliminado","ok"),r()}catch{M("No se pudo eliminar","err")}}},"Eliminar")])]))}async function VE(n){const e=he(),t=te("gastos")||[],r=t.find(a=>a.id===n);if(!r)throw new Error("gasto no encontrado");let i=0;const s={};if((r.pagos||[]).length>0){const a=te("capital")||{cuentas:{},historial:[]},c={...a,cuentas:{...a.cuentas||{}},historial:(a.historial||[]).slice()};r.pagos.forEach(u=>{c.cuentas[u.cuenta]=(c.cuentas[u.cuenta]||0)+u.importe,i+=u.importe}),c.historial.push({id:st(),tipo:"reverso_gasto",cuenta:r.pagos[0].cuenta,importe:i,concepto:`Reverso: ${r.concepto}`,fechaISO:e}),s.capital=c}s.gastos=t.filter(a=>a.id!==r.id),s.capital?await da(s):await se("gastos",s.gastos)}function Pe(n,e){return l("div.field",{},[l("label",{},n),e])}function Ls(n,e){return l("div.kpi",{},[l("div.kpi-v",{},n),l("div.kpi-l",{},e)])}const xe={anio:null,trim:null};function OE(n,e){if(!e.cargado.gastos||!e.cargado.facturas_emitidas){n.append(l("div.spinner"));return}const t=new Date;xe.anio==null&&(xe.anio=t.getFullYear(),xe.trim=Math.floor(t.getMonth()/3)+1);const r=e.gastos||[],i=e.facturas_emitidas||[];n.append(l("div.card",{style:"border-color:var(--gold);"},l("div.row-sub",{style:"color:var(--gold);font-size:11px;"},"⚠ Estimación — la presentación oficial la hace el gestor."))),n.append(dd(r,i))}function dd(n,e){const t=l("div"),r=l("div.card"),i=l("select",{},[xe.anio-2,xe.anio-1,xe.anio,xe.anio+1].map(u=>l("option",{value:u},String(u))));i.value=String(xe.anio);const s=l("select",{},[1,2,3,4].map(u=>l("option",{value:u},`Q${u}`)));s.value=String(xe.trim);const a=()=>{xe.anio=parseInt(i.value,10),xe.trim=parseInt(s.value,10);const u=dd(n,e);t.replaceWith(u)};i.addEventListener("change",a),s.addEventListener("change",a),r.append(l("div.card-head",{},[l("h3",{},"Trimestre"),l("button.link",{onclick:()=>LE()},"+ Factura emitida")])),r.append(l("div.field-grid",{},[lt("Año",i),lt("Trimestre",s)])),t.append(r);const c=Xy(n,e,xe.anio,xe.trim);return t.append(ME(c)),t.append(xE(e)),t}function ME(n){const e=l("div.card");return e.append(l("div.card-head",{},[l("h3",{},`Resumen ${n.trimestre}`),l("span.small.muted",{},`plazo ${n.plazo}`)])),e.append(l("div.hero",{},[l("div.hero-label",{},"Total a provisionar"),l("div.hero-value",{},n.total_provisionar),l("div.hero-sub",{},`${n.rango.desde} → ${n.rango.hasta}`)])),e.append(l("div.section-label",{style:Fs()},"Modelo 303 · IVA")),e.append(ct("IVA repercutido",x(n.modelo_303.repercutido))),e.append(ct("IVA soportado",x(n.modelo_303.soportado))),e.append(ct(n.modelo_303.resultado.startsWith("A DEVOLVER")?"A devolver":"A ingresar",x(Math.abs(parseFloat(n.modelo_303.cuota))),n.modelo_303.cuota>=0?"neg":"pos")),e.append(l("div.section-label",{style:Fs()},"Modelo 130 · IRPF")),e.append(ct("Base ingresos",x(n.modelo_130.base_ingresos))),e.append(ct("Base gastos",x(n.modelo_130.base_gastos))),e.append(ct("Rendimiento neto",x(n.modelo_130.rendimiento))),e.append(ct("Pago fraccionado (20%)",x(n.modelo_130.cuota),"neg")),e.append(l("div.section-label",{style:Fs()},"Detalle")),e.append(ct(`Facturas emitidas (${n.facturas.cantidad})`,`base ${x(n.facturas.base)} · IVA ${x(n.facturas.iva_repercutido)}`)),e.append(ct(`Gastos deducibles (${n.gastos.cantidad})`,`base ${x(n.gastos.base)} · IVA ${x(n.gastos.iva_soportado)}`)),n.gastos.nota&&e.append(l("div.small.muted",{style:"margin-top:4px;"},n.gastos.nota)),e}function xE(n){const e=l("div.card");e.append(l("div.card-head",{},l("h3",{},"Facturas emitidas del trimestre")));const{desde:t,hasta:r}=Jy(`${xe.anio}-${String((xe.trim-1)*3+1).padStart(2,"0")}-01`),i=n.filter(s=>s.fecha>=t&&s.fecha<=r).sort((s,a)=>(a.fecha||"").localeCompare(s.fecha||""));if(!i.length)return e.append(l("div.card-empty",{},"Sin facturas este trimestre")),e;for(const s of i)e.append(l("div.row",{},[l("div.row-main",{},[l("div.row-label",{},[s.concepto||"(sin concepto)",s.numeroFactura?l("span.chip",{style:"margin-left:6px;"},s.numeroFactura):null]),l("div.row-sub",{},`${s.fecha} · ${s.cliente||"s/cliente"} · base ${x(s.baseImponible)} + ${$e(s.tipoIVA||21,0)}% IVA`)]),l("div.row-right",{},[l("div.amount",{},x(s.total)),l("div",{style:"margin-top:4px;"},l("button.btn.btn-sm.btn-danger",{onclick:()=>FE(s.id)},"Borrar"))])]));return e}function LE(){Ve("Nueva factura emitida",n=>{const e=l("input",{value:"",placeholder:"Concepto"}),t=l("input",{value:"",placeholder:"Cliente"}),r=l("input",{value:"personal",placeholder:"proyectoId"}),i=l("input",{type:"number",step:"0.01",value:"",placeholder:"Base imponible €"}),s=l("input",{type:"number",step:"1",value:21,placeholder:"% IVA"}),a=l("input",{type:"date",value:he()}),c=l("input",{value:"",placeholder:"Nº factura"}),u=l("div.small.muted",{style:"margin-top:4px;"}),f=()=>{const g=parseFloat(i.value)||0,v=parseFloat(s.value)||21,b=parseFloat((g*v/100).toFixed(2));u.textContent=`IVA ${x(b)} · Total ${x(g+b)}`};[i,s].forEach(g=>g.addEventListener("input",f)),f();const p=async()=>{if(!e.value.trim()){M("Falta el concepto","err");return}const g=parseFloat(i.value)||0,v=parseFloat(s.value)||21,b=parseFloat((g*v/100).toFixed(2)),S={id:st(),concepto:e.value.trim(),cliente:t.value.trim(),proyectoId:r.value.trim()||"personal",baseImponible:g,tipoIVA:v,ivaRepercutido:b,total:parseFloat((g+b).toFixed(2)),fecha:a.value||he(),numeroFactura:c.value.trim()},C=(te("facturas_emitidas")||[]).slice();C.push(S);try{await se("facturas_emitidas",C),M("Factura registrada","ok"),n()}catch{M("No se pudo guardar","err")}};return l("div",{},[lt("Concepto",e),l("div.field-grid",{},[lt("Cliente",t),lt("proyectoId",r)]),l("div.field-grid",{},[lt("Base imponible €",i),lt("% IVA",s)]),u,l("div.field-grid",{},[lt("Fecha",a),lt("Nº factura",c)]),l("div.btn-row",{},[l("button.btn",{onclick:n},"Cancelar"),l("button.btn.btn-primary",{onclick:p},"Registrar")])])})}async function FE(n){const e=(te("facturas_emitidas")||[]).filter(t=>t.id!==n);try{await se("facturas_emitidas",e),M("Factura eliminada","ok")}catch{M("No se pudo guardar","err")}}function lt(n,e){return l("div.field",{},[l("label",{},n),e])}function Fs(){return"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:12px 0 4px;"}function ct(n,e,t){return l("div.row",{},[l("div.row-main",{},l("div.row-label",{},n)),l("div.row-right",{},l("div.amount"+(t?"."+t:""),{},e))])}const UE=[["patrimonio","Patrimonio"],["cobros","Cobros y pagos"],["gastos","Gastos"],["fiscal","Fiscal"]];let Xn="patrimonio";function jE(n,e={}){n.append(l("h1.section-title",{},"Finanzas"));const t=l("div.subtabs"),r=l("div");n.append(t),n.append(r);const i={capital:null,config:null,patrimonio_hist:null,cobrospagos:null,gastos:null,trabajadores:null,facturas_emitidas:null,cargado:{}},s=()=>{nn(t);for(const[u,f]of UE)t.append(l("button.subtab"+(Xn===u?".active":""),{onclick:()=>{Xn=u,s()}},f));nn(r),Xn==="patrimonio"?$E(r,i):Xn==="cobros"?EE(r,i):Xn==="gastos"?SE(r,i):OE(r,i)},a=u=>Ke(u,f=>{i[u]=f,i.cargado[u]=!0,s()}),c=[a("capital"),a("config"),a("patrimonio_hist"),a("cobrospagos"),a("gastos"),a("trabajadores"),a("facturas_emitidas")];return s(),()=>c.forEach(u=>u())}function $E(n,e){if(!e.cargado.capital||!e.cargado.config){n.append(l("div.spinner"));return}const t=e.capital||{cuentas:{},historial:[]},r=t.cuentas||{},i=e.config||{},s=ed(r);n.append(l("div.hero",{},[l("div.hero-label",{},"Patrimonio (sin impuestos)"),l("div.hero-value",{},x(s)),l("div.hero-sub",{},`${Object.keys(r).length} cuenta${Object.keys(r).length===1?"":"s"}`)]));const a=Object.keys(r);for(const[c,u]of pa){const f=a.filter(v=>td(i,v)===c);if(!f.length&&c!==""||!f.length)continue;const p=f.reduce((v,b)=>v+(Number(r[b])||0),0),g=l("div.card");g.append(l("div.card-head",{},[l("h3",{},u),l("span.amount",{},x(p))]));for(const v of f)g.append(BE(v,r[v],s,i));n.append(g)}n.append(l("div.btn-row",{},[l("button.btn.btn-sm.btn-primary",{onclick:()=>HE()},"+ Cuenta")])),n.append(GE(e,r)),n.append(QE(r,i)),n.append(fd(t))}function BE(n,e,t,r){const i=n===fa,s=t>0&&!i?(Number(e)||0)/t*100:null,a=l("select",{style:"font-size:9px;padding:2px 4px;background:var(--s2);border:1px solid var(--border);border-radius:5px;color:var(--text2);"},pa.map(([c,u])=>l("option",{value:c},u)));return a.value=td(r,n),a.addEventListener("change",()=>qE(n,a.value)),l("div.row",{},[l("div.row-main",{},[l("div.row-label",{},[n,i?l("span.chip",{style:"margin-left:6px;"},"fuera del total"):null]),l("div.row-sub",{},a)]),l("div.row-right",{},[l("div.amount",{},x(e)),l("div.small.muted",{},s==null?"—":`${$e(s,1)}%`),l("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;"},[l("button.btn.btn-sm",{onclick:()=>zE(n,e)},"Editar")])])])}async function qE(n,e){const t={...te("config")||{}};t.grupos_cuentas={...t.grupos_cuentas||{}},e?t.grupos_cuentas[n]=e:delete t.grupos_cuentas[n];try{await se("config",t)}catch{M("No se pudo guardar el grupo","err")}}function zE(n,e){Ve(`Cuenta · ${n}`,t=>{const r=l("input",{value:n,placeholder:"Nombre de la cuenta"}),i=l("input",{type:"number",step:"0.01",value:e??0,placeholder:"Saldo €"}),s=async()=>{const a=r.value.trim();if(!a){M("Falta el nombre","err");return}const c=te("capital")||{cuentas:{}},u={...c.cuentas||{}},f=parseFloat(i.value)||0;if(a!==n){if(u[a]!=null){M("Ya existe una cuenta con ese nombre","err");return}delete u[n],u[a]=f}else u[n]=f;const p={capital:{...c,cuentas:u}};if(a!==n){const g={...te("config")||{}};let v=!1;g.grupos_cuentas&&g.grupos_cuentas[n]!=null&&(g.grupos_cuentas={...g.grupos_cuentas},g.grupos_cuentas[a]=g.grupos_cuentas[n],delete g.grupos_cuentas[n],v=!0),g.reparto_pcts&&g.reparto_pcts[n]!=null&&(g.reparto_pcts={...g.reparto_pcts},g.reparto_pcts[a]=g.reparto_pcts[n],delete g.reparto_pcts[n],v=!0),v&&(p.config=g)}try{await se("capital",p.capital),p.config&&await se("config",p.config),M("Cuenta guardada","ok"),t()}catch{M("No se pudo guardar","err")}};return l("div",{},[Ot("Nombre",r),Ot("Saldo €",i),l("div.small.muted",{},"El saldo se fija directamente (como actualizar_capital). No genera movimiento en el historial."),l("div.btn-row",{},[l("button.btn",{onclick:t},"Cancelar"),l("button.btn.btn-primary",{onclick:s},"Guardar")])])})}function HE(){Ve("Nueva cuenta",n=>{const e=l("input",{placeholder:"Nombre (p. ej. revolut)"}),t=l("input",{type:"number",step:"0.01",value:0,placeholder:"Saldo inicial €"}),r=l("select",{},pa.map(([s,a])=>l("option",{value:s},a))),i=async()=>{const s=e.value.trim();if(!s){M("Falta el nombre","err");return}const a=te("capital")||{cuentas:{}},c={...a.cuentas||{}};if(c[s]!=null){M("Ya existe esa cuenta","err");return}c[s]=parseFloat(t.value)||0;try{if(await se("capital",{...a,cuentas:c}),r.value){const u={...te("config")||{}};u.grupos_cuentas={...u.grupos_cuentas||{},[s]:r.value},await se("config",u)}M("Cuenta creada","ok"),n()}catch{M("No se pudo guardar","err")}};return l("div",{},[Ot("Nombre",e),l("div.field-grid",{},[Ot("Saldo inicial",t),Ot("Grupo",r)]),l("div.btn-row",{},[l("button.btn",{onclick:n},"Cancelar"),l("button.btn.btn-primary",{onclick:i},"Crear")])])})}function GE(n,e){const t=l("div.card"),r=(n.patrimonio_hist||[]).slice().sort((f,p)=>(f.mes||"").localeCompare(p.mes||""));if(t.append(l("div.card-head",{},[l("h3",{},"Histórico"),l("button.link",{onclick:()=>KE(e)},"Cerrar mes")])),!r.length)return t.append(l("div.card-empty",{},'Sin snapshots. "Cerrar mes" guarda los saldos actuales.')),t;t.append(WE(r));const i=[];for(const f of r)for(const p of Object.keys(f.saldos||{}))i.includes(p)||i.push(p);const s=l("div",{style:"overflow-x:auto;margin-top:10px;"}),a=l("table.ftable"),c=l("tr",{},[l("th",{},"Mes"),...i.map(f=>l("th",{},f)),l("th",{},"Total")]);a.append(l("thead",{},c));const u=l("tbody");for(const f of[...r].reverse())u.append(l("tr",{},[l("td",{},f.mes),...i.map(p=>l("td",{style:"text-align:right;"},f.saldos&&f.saldos[p]!=null?x(f.saldos[p]):"·")),l("td",{style:"text-align:right;font-weight:500;"},x(f.total))]));return a.append(u),s.append(a),t.append(s),t}function WE(n){const i=n.map(S=>Number(S.total)||0),s=Math.min(...i),c=Math.max(...i)-s||1,u=i.length,f=S=>u===1?320/2:6+S*(320-2*6)/(u-1),p=S=>84-(S-s)/c*(90-2*6),g=i.map((S,C)=>`${f(C).toFixed(1)},${p(S).toFixed(1)}`).join(" "),v=document.createElementNS("http://www.w3.org/2000/svg","svg");v.setAttribute("viewBox","0 0 320 90"),v.setAttribute("width","100%"),v.setAttribute("height",90),v.setAttribute("preserveAspectRatio","none"),v.style.display="block";const b=document.createElementNS(v.namespaceURI,"polyline");b.setAttribute("points",g),b.setAttribute("fill","none"),b.setAttribute("stroke","var(--gold)"),b.setAttribute("stroke-width","1.5"),v.append(b);for(let S=0;S<u;S++){const C=document.createElementNS(v.namespaceURI,"circle");C.setAttribute("cx",f(S)),C.setAttribute("cy",p(i[S])),C.setAttribute("r","2"),C.setAttribute("fill","var(--gold2)"),v.append(C)}return v}async function KE(n){const e=Ky(),t=(te("patrimonio_hist")||[]).slice(),r=t.findIndex(s=>s.mes===e),i=async()=>{const s={mes:e,saldos:{...n},total:ed(n)};r>=0?t[r]=s:t.push(s),t.sort((a,c)=>(a.mes||"").localeCompare(c.mes||""));try{await se("patrimonio_hist",t),M(`Snapshot de ${e} guardado`,"ok")}catch{M("No se pudo guardar","err")}};r>=0?Ve("Cerrar mes",s=>l("div",{},[l("div.small.muted",{},`Ya existe un snapshot de ${e}. ¿Sobrescribir con los saldos actuales?`),l("div.btn-row",{},[l("button.btn",{onclick:s},"Cancelar"),l("button.btn.btn-primary",{onclick:()=>{i(),s()}},"Sobrescribir")])])):i()}function QE(n,e){const t=l("div.card");t.append(l("div.card-head",{},l("h3",{},"Reparto")));const r=Object.keys(n).filter(g=>g!==fa),i={...e.reparto_pcts||{}},s=l("input",{type:"number",step:"0.01",placeholder:"Importe a repartir €"}),a={},c=l("div"),u=l("div.small",{style:"margin-top:6px;"}),f=()=>{const g=parseFloat(s.value)||0;let v=0;for(const S of r){const C=parseFloat(a[S].pct.value)||0;v+=C,a[S].out.textContent=x(g*C/100)}const b=Math.round(v*100)/100;u.textContent=`Suma de %: ${$e(b,1)}%`+(b===100?" ✓":" — ⚠ no suman 100"),u.style.color=b===100?"var(--green)":"var(--red)"};for(const g of r){const v=l("input",{type:"number",step:"0.5",value:i[g]??"",placeholder:"%",style:"max-width:70px;"}),b=l("div.amount",{},x(0));v.addEventListener("input",f),a[g]={pct:v,out:b},c.append(l("div.row",{},[l("div.row-main",{},l("div.row-label",{},g)),l("div.row-right",{style:"display:flex;gap:8px;align-items:center;"},[v,b])]))}const p=async()=>{const g={...te("config")||{}};g.reparto_pcts={};for(const v of r){const b=parseFloat(a[v].pct.value)||0;b&&(g.reparto_pcts[v]=b)}try{await se("config",g),M("Porcentajes guardados","ok")}catch{M("No se pudo guardar","err")}};return t.append(Ot("Importe a repartir",s)),s.addEventListener("input",f),t.append(c),t.append(u),t.append(l("div.btn-row",{},[l("button.btn.btn-sm",{onclick:p},"Guardar %")])),f(),t}const bt={cuenta:"",tipo:""};function fd(n){const e=l("div.card");e.append(l("div.card-head",{},l("h3",{},"Movimientos de capital")));const t=n.historial||[],r=[...new Set(t.map(f=>f.cuenta).filter(Boolean))],i=[...new Set(t.map(f=>f.tipo).filter(Boolean))],s=l("select",{},[l("option",{value:""},"Todas"),...r.map(f=>l("option",{value:f},f))]);s.value=bt.cuenta;const a=l("select",{},[l("option",{value:""},"Todos"),...i.map(f=>l("option",{value:f},f))]);a.value=bt.tipo;const c=()=>{bt.cuenta=s.value,bt.tipo=a.value;const f=fd(n);e.replaceWith(f)};s.addEventListener("change",c),a.addEventListener("change",c),e.append(l("div.field-grid",{},[Ot("Cuenta",s),Ot("Tipo",a)]));let u=t.filter(f=>(!bt.cuenta||f.cuenta===bt.cuenta)&&(!bt.tipo||f.tipo===bt.tipo));if(u=u.slice().sort((f,p)=>(p.fechaISO||"").localeCompare(f.fechaISO||"")).slice(0,50),!u.length)return e.append(l("div.card-empty",{},"Sin movimientos")),e;for(const f of u){const p=Number(f.importe)||0;e.append(l("div.row",{},[l("div.row-main",{},[l("div.row-label",{},f.concepto||f.tipo),l("div.row-sub",{},`${f.fechaISO||"—"} · ${f.cuenta||""} · ${f.tipo||""}`)]),l("div.row-right",{},l("div.amount"+(p>=0?".pos":".neg"),{},x(p)))]))}return e}function Ot(n,e){return l("div.field",{},[l("label",{},n),e])}const Us=[{id:"hoy",label:"Hoy",icono:"◒",render:Zy},{id:"equipo",label:"Equipo",icono:"⚒",render:dE},{id:"finanzas",label:"Finanzas",icono:"€",render:jE}];let go="hoy",ei=null;function _o(n){if(typeof ei=="function"){try{ei()}catch{}ei=null}go=n;const e=Us.find(r=>r.id===n)||Us[0];Hy(Us,go,_o);const t=document.getElementById("appMain");nn(t),ei=e.render(t,{nav:_o})}function Ji(n,e=!1){const t=document.getElementById("loginEstado");t&&(t.textContent=n||"",t.style.color=e?"var(--red)":"var(--text2)")}qy();document.getElementById("btnTema").addEventListener("click",zy);document.getElementById("btnLogin").addEventListener("click",()=>Fy(Ji));document.getElementById("btnLogout").addEventListener("click",()=>jy());Ji("Comprobando sesión…");Uy(Ji);Ly(n=>{const e=document.getElementById("loginScreen"),t=document.getElementById("appScreen");n?(Sl(n.uid),Ji(""),e.hidden=!0,t.hidden=!1,document.getElementById("userAvatar").src=n.photoURL||"",document.getElementById("userName").textContent=(n.displayName||"").split(" ")[0]||"Rubén",_o(go)):(Sl(null),t.hidden=!0,e.hidden=!1)});
