(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var Tl={};/**
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
 */const rd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Af=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},id={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,_=h&63;u||(_=64,a||(g=64)),r.push(t[f],t[m],t[g],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(rd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Af(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new Cf;const g=s<<2|l>>4;if(r.push(g),h!==64){const _=l<<4&240|h>>2;if(r.push(_),m!==64){const y=h<<6&192|m;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sf=function(n){const e=rd(n);return id.encodeByteArray(e,!0)},ds=function(n){return Sf(n).replace(/\./g,"")},sd=function(n){try{return id.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Rf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Pf=()=>Rf().__FIREBASE_DEFAULTS__,kf=()=>{if(typeof process>"u"||typeof Tl>"u")return;const n=Tl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Nf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&sd(n[1]);return e&&JSON.parse(e)},Vs=()=>{try{return Pf()||kf()||Nf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},od=n=>{var e,t;return(t=(e=Vs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Df=n=>{const e=od(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ad=()=>{var n;return(n=Vs())===null||n===void 0?void 0:n.config},cd=n=>{var e;return(e=Vs())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Vf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Of(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ds(JSON.stringify(t)),ds(JSON.stringify(a)),""].join(".")}/**
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function xf(){var n;const e=(n=Vs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ff(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $f(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uf(){const n=Xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function jf(){return!xf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bf(){try{return typeof indexedDB=="object"}catch{return!1}}function qf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const zf="FirebaseError";class Yt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=zf,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yi.prototype.create)}}class yi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Hf(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Yt(i,l,r)}}function Hf(n,e){return n.replace(Gf,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Gf=/\{\$([^}]+)}/g;function Wf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function hs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Al(s)&&Al(a)){if(!hs(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Al(n){return n!==null&&typeof n=="object"}/**
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
 */function bi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Kf(n,e){const t=new Qf(n,e);return t.subscribe.bind(t)}class Qf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Yf(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=To),i.error===void 0&&(i.error=To),i.complete===void 0&&(i.complete=To);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function To(){}/**
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
 */function Oe(n){return n&&n._delegate?n._delegate:n}class Bn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vn="[DEFAULT]";/**
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
 */class Jf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Vf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zf(e))try{this.getOrInitializeService({instanceIdentifier:Vn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vn){return this.instances.has(e)}getOptions(e=Vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vn){return this.component?this.component.multipleInstances?e:Vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xf(n){return n===Vn?void 0:n}function Zf(n){return n.instantiationMode==="EAGER"}/**
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
 */class em{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Jf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const tm={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},nm=ne.INFO,rm={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},im=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=rm[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Aa{constructor(e){this.name=e,this._logLevel=nm,this._logHandler=im,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const sm=(n,e)=>e.some(t=>n instanceof t);let Cl,Sl;function om(){return Cl||(Cl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function am(){return Sl||(Sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ld=new WeakMap,Ho=new WeakMap,ud=new WeakMap,Ao=new WeakMap,Ca=new WeakMap;function cm(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(pn(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ld.set(t,n)}).catch(()=>{}),Ca.set(e,n),e}function lm(n){if(Ho.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Ho.set(n,e)}let Go={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ho.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ud.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function um(n){Go=n(Go)}function dm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Co(this),e,...t);return ud.set(r,e.sort?e.sort():[e]),pn(r)}:am().includes(n)?function(...e){return n.apply(Co(this),e),pn(ld.get(this))}:function(...e){return pn(n.apply(Co(this),e))}}function hm(n){return typeof n=="function"?dm(n):(n instanceof IDBTransaction&&lm(n),sm(n,om())?new Proxy(n,Go):n)}function pn(n){if(n instanceof IDBRequest)return cm(n);if(Ao.has(n))return Ao.get(n);const e=hm(n);return e!==n&&(Ao.set(n,e),Ca.set(e,n)),e}const Co=n=>Ca.get(n);function pm(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=pn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(pn(a.result),u.oldVersion,u.newVersion,pn(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const fm=["get","getKey","getAll","getAllKeys","count"],mm=["put","add","delete","clear"],So=new Map;function Rl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(So.get(e))return So.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=mm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fm.includes(t)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&u.done]))[0]};return So.set(e,s),s}um(n=>({...n,get:(e,t,r)=>Rl(e,t)||n.get(e,t,r),has:(e,t)=>!!Rl(e,t)||n.has(e,t)}));/**
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
 */class gm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function vm(n){const e=n.getComponent();return e?.type==="VERSION"}const Wo="@firebase/app",Pl="0.10.13";/**
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
 */const Ht=new Aa("@firebase/app"),_m="@firebase/app-compat",ym="@firebase/analytics-compat",bm="@firebase/analytics",Em="@firebase/app-check-compat",wm="@firebase/app-check",Im="@firebase/auth",Tm="@firebase/auth-compat",Am="@firebase/database",Cm="@firebase/data-connect",Sm="@firebase/database-compat",Rm="@firebase/functions",Pm="@firebase/functions-compat",km="@firebase/installations",Nm="@firebase/installations-compat",Dm="@firebase/messaging",Vm="@firebase/messaging-compat",Om="@firebase/performance",Mm="@firebase/performance-compat",xm="@firebase/remote-config",Lm="@firebase/remote-config-compat",Fm="@firebase/storage",$m="@firebase/storage-compat",Um="@firebase/firestore",jm="@firebase/vertexai-preview",Bm="@firebase/firestore-compat",qm="firebase",zm="10.14.1";/**
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
 */const Ko="[DEFAULT]",Hm={[Wo]:"fire-core",[_m]:"fire-core-compat",[bm]:"fire-analytics",[ym]:"fire-analytics-compat",[wm]:"fire-app-check",[Em]:"fire-app-check-compat",[Im]:"fire-auth",[Tm]:"fire-auth-compat",[Am]:"fire-rtdb",[Cm]:"fire-data-connect",[Sm]:"fire-rtdb-compat",[Rm]:"fire-fn",[Pm]:"fire-fn-compat",[km]:"fire-iid",[Nm]:"fire-iid-compat",[Dm]:"fire-fcm",[Vm]:"fire-fcm-compat",[Om]:"fire-perf",[Mm]:"fire-perf-compat",[xm]:"fire-rc",[Lm]:"fire-rc-compat",[Fm]:"fire-gcs",[$m]:"fire-gcs-compat",[Um]:"fire-fst",[Bm]:"fire-fst-compat",[jm]:"fire-vertex","fire-js":"fire-js",[qm]:"fire-js-all"};/**
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
 */const ps=new Map,Gm=new Map,Qo=new Map;function kl(n,e){try{n.container.addComponent(e)}catch(t){Ht.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function dr(n){const e=n.name;if(Qo.has(e))return Ht.debug(`There were multiple attempts to register component ${e}.`),!1;Qo.set(e,n);for(const t of ps.values())kl(t,n);for(const t of Gm.values())kl(t,n);return!0}function Sa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function wt(n){return n.settings!==void 0}/**
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
 */const Wm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fn=new yi("app","Firebase",Wm);/**
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
 */class Km{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fn.create("app-deleted",{appName:this._name})}}/**
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
 */const Tr=zm;function dd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ko,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fn.create("bad-app-name",{appName:String(i)});if(t||(t=ad()),!t)throw fn.create("no-options");const s=ps.get(i);if(s){if(hs(t,s.options)&&hs(r,s.config))return s;throw fn.create("duplicate-app",{appName:i})}const a=new em(i);for(const u of Qo.values())a.addComponent(u);const l=new Km(t,r,a);return ps.set(i,l),l}function hd(n=Ko){const e=ps.get(n);if(!e&&n===Ko&&ad())return dd();if(!e)throw fn.create("no-app",{appName:n});return e}function mn(n,e,t){var r;let i=(r=Hm[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ht.warn(l.join(" "));return}dr(new Bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Qm="firebase-heartbeat-database",Ym=1,ci="firebase-heartbeat-store";let Ro=null;function pd(){return Ro||(Ro=pm(Qm,Ym,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ci)}catch(t){console.warn(t)}}}}).catch(n=>{throw fn.create("idb-open",{originalErrorMessage:n.message})})),Ro}async function Jm(n){try{const t=(await pd()).transaction(ci),r=await t.objectStore(ci).get(fd(n));return await t.done,r}catch(e){if(e instanceof Yt)Ht.warn(e.message);else{const t=fn.create("idb-get",{originalErrorMessage:e?.message});Ht.warn(t.message)}}}async function Nl(n,e){try{const r=(await pd()).transaction(ci,"readwrite");await r.objectStore(ci).put(e,fd(n)),await r.done}catch(t){if(t instanceof Yt)Ht.warn(t.message);else{const r=fn.create("idb-set",{originalErrorMessage:t?.message});Ht.warn(r.message)}}}function fd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Xm=1024,Zm=30*24*60*60*1e3;class eg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ng(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Dl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Zm}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ht.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Dl(),{heartbeatsToSend:r,unsentEntries:i}=tg(this._heartbeatsCache.heartbeats),s=ds(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ht.warn(t),""}}}function Dl(){return new Date().toISOString().substring(0,10)}function tg(n,e=Xm){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Vl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Vl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ng{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bf()?qf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Jm(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vl(n){return ds(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function rg(n){dr(new Bn("platform-logger",e=>new gm(e),"PRIVATE")),dr(new Bn("heartbeat",e=>new eg(e),"PRIVATE")),mn(Wo,Pl,n),mn(Wo,Pl,"esm2017"),mn("fire-js","")}rg("");var ig="firebase",sg="10.14.1";/**
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
 */mn(ig,sg,"app");var Ol=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xn,md;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,E){function w(){}w.prototype=E.prototype,T.D=E.prototype,T.prototype=new w,T.prototype.constructor=T,T.C=function(A,C,S){for(var b=Array(arguments.length-2),se=2;se<arguments.length;se++)b[se-2]=arguments[se];return E.prototype[C].apply(A,b)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,E,w){w||(w=0);var A=Array(16);if(typeof E=="string")for(var C=0;16>C;++C)A[C]=E.charCodeAt(w++)|E.charCodeAt(w++)<<8|E.charCodeAt(w++)<<16|E.charCodeAt(w++)<<24;else for(C=0;16>C;++C)A[C]=E[w++]|E[w++]<<8|E[w++]<<16|E[w++]<<24;E=T.g[0],w=T.g[1],C=T.g[2];var S=T.g[3],b=E+(S^w&(C^S))+A[0]+3614090360&4294967295;E=w+(b<<7&4294967295|b>>>25),b=S+(C^E&(w^C))+A[1]+3905402710&4294967295,S=E+(b<<12&4294967295|b>>>20),b=C+(w^S&(E^w))+A[2]+606105819&4294967295,C=S+(b<<17&4294967295|b>>>15),b=w+(E^C&(S^E))+A[3]+3250441966&4294967295,w=C+(b<<22&4294967295|b>>>10),b=E+(S^w&(C^S))+A[4]+4118548399&4294967295,E=w+(b<<7&4294967295|b>>>25),b=S+(C^E&(w^C))+A[5]+1200080426&4294967295,S=E+(b<<12&4294967295|b>>>20),b=C+(w^S&(E^w))+A[6]+2821735955&4294967295,C=S+(b<<17&4294967295|b>>>15),b=w+(E^C&(S^E))+A[7]+4249261313&4294967295,w=C+(b<<22&4294967295|b>>>10),b=E+(S^w&(C^S))+A[8]+1770035416&4294967295,E=w+(b<<7&4294967295|b>>>25),b=S+(C^E&(w^C))+A[9]+2336552879&4294967295,S=E+(b<<12&4294967295|b>>>20),b=C+(w^S&(E^w))+A[10]+4294925233&4294967295,C=S+(b<<17&4294967295|b>>>15),b=w+(E^C&(S^E))+A[11]+2304563134&4294967295,w=C+(b<<22&4294967295|b>>>10),b=E+(S^w&(C^S))+A[12]+1804603682&4294967295,E=w+(b<<7&4294967295|b>>>25),b=S+(C^E&(w^C))+A[13]+4254626195&4294967295,S=E+(b<<12&4294967295|b>>>20),b=C+(w^S&(E^w))+A[14]+2792965006&4294967295,C=S+(b<<17&4294967295|b>>>15),b=w+(E^C&(S^E))+A[15]+1236535329&4294967295,w=C+(b<<22&4294967295|b>>>10),b=E+(C^S&(w^C))+A[1]+4129170786&4294967295,E=w+(b<<5&4294967295|b>>>27),b=S+(w^C&(E^w))+A[6]+3225465664&4294967295,S=E+(b<<9&4294967295|b>>>23),b=C+(E^w&(S^E))+A[11]+643717713&4294967295,C=S+(b<<14&4294967295|b>>>18),b=w+(S^E&(C^S))+A[0]+3921069994&4294967295,w=C+(b<<20&4294967295|b>>>12),b=E+(C^S&(w^C))+A[5]+3593408605&4294967295,E=w+(b<<5&4294967295|b>>>27),b=S+(w^C&(E^w))+A[10]+38016083&4294967295,S=E+(b<<9&4294967295|b>>>23),b=C+(E^w&(S^E))+A[15]+3634488961&4294967295,C=S+(b<<14&4294967295|b>>>18),b=w+(S^E&(C^S))+A[4]+3889429448&4294967295,w=C+(b<<20&4294967295|b>>>12),b=E+(C^S&(w^C))+A[9]+568446438&4294967295,E=w+(b<<5&4294967295|b>>>27),b=S+(w^C&(E^w))+A[14]+3275163606&4294967295,S=E+(b<<9&4294967295|b>>>23),b=C+(E^w&(S^E))+A[3]+4107603335&4294967295,C=S+(b<<14&4294967295|b>>>18),b=w+(S^E&(C^S))+A[8]+1163531501&4294967295,w=C+(b<<20&4294967295|b>>>12),b=E+(C^S&(w^C))+A[13]+2850285829&4294967295,E=w+(b<<5&4294967295|b>>>27),b=S+(w^C&(E^w))+A[2]+4243563512&4294967295,S=E+(b<<9&4294967295|b>>>23),b=C+(E^w&(S^E))+A[7]+1735328473&4294967295,C=S+(b<<14&4294967295|b>>>18),b=w+(S^E&(C^S))+A[12]+2368359562&4294967295,w=C+(b<<20&4294967295|b>>>12),b=E+(w^C^S)+A[5]+4294588738&4294967295,E=w+(b<<4&4294967295|b>>>28),b=S+(E^w^C)+A[8]+2272392833&4294967295,S=E+(b<<11&4294967295|b>>>21),b=C+(S^E^w)+A[11]+1839030562&4294967295,C=S+(b<<16&4294967295|b>>>16),b=w+(C^S^E)+A[14]+4259657740&4294967295,w=C+(b<<23&4294967295|b>>>9),b=E+(w^C^S)+A[1]+2763975236&4294967295,E=w+(b<<4&4294967295|b>>>28),b=S+(E^w^C)+A[4]+1272893353&4294967295,S=E+(b<<11&4294967295|b>>>21),b=C+(S^E^w)+A[7]+4139469664&4294967295,C=S+(b<<16&4294967295|b>>>16),b=w+(C^S^E)+A[10]+3200236656&4294967295,w=C+(b<<23&4294967295|b>>>9),b=E+(w^C^S)+A[13]+681279174&4294967295,E=w+(b<<4&4294967295|b>>>28),b=S+(E^w^C)+A[0]+3936430074&4294967295,S=E+(b<<11&4294967295|b>>>21),b=C+(S^E^w)+A[3]+3572445317&4294967295,C=S+(b<<16&4294967295|b>>>16),b=w+(C^S^E)+A[6]+76029189&4294967295,w=C+(b<<23&4294967295|b>>>9),b=E+(w^C^S)+A[9]+3654602809&4294967295,E=w+(b<<4&4294967295|b>>>28),b=S+(E^w^C)+A[12]+3873151461&4294967295,S=E+(b<<11&4294967295|b>>>21),b=C+(S^E^w)+A[15]+530742520&4294967295,C=S+(b<<16&4294967295|b>>>16),b=w+(C^S^E)+A[2]+3299628645&4294967295,w=C+(b<<23&4294967295|b>>>9),b=E+(C^(w|~S))+A[0]+4096336452&4294967295,E=w+(b<<6&4294967295|b>>>26),b=S+(w^(E|~C))+A[7]+1126891415&4294967295,S=E+(b<<10&4294967295|b>>>22),b=C+(E^(S|~w))+A[14]+2878612391&4294967295,C=S+(b<<15&4294967295|b>>>17),b=w+(S^(C|~E))+A[5]+4237533241&4294967295,w=C+(b<<21&4294967295|b>>>11),b=E+(C^(w|~S))+A[12]+1700485571&4294967295,E=w+(b<<6&4294967295|b>>>26),b=S+(w^(E|~C))+A[3]+2399980690&4294967295,S=E+(b<<10&4294967295|b>>>22),b=C+(E^(S|~w))+A[10]+4293915773&4294967295,C=S+(b<<15&4294967295|b>>>17),b=w+(S^(C|~E))+A[1]+2240044497&4294967295,w=C+(b<<21&4294967295|b>>>11),b=E+(C^(w|~S))+A[8]+1873313359&4294967295,E=w+(b<<6&4294967295|b>>>26),b=S+(w^(E|~C))+A[15]+4264355552&4294967295,S=E+(b<<10&4294967295|b>>>22),b=C+(E^(S|~w))+A[6]+2734768916&4294967295,C=S+(b<<15&4294967295|b>>>17),b=w+(S^(C|~E))+A[13]+1309151649&4294967295,w=C+(b<<21&4294967295|b>>>11),b=E+(C^(w|~S))+A[4]+4149444226&4294967295,E=w+(b<<6&4294967295|b>>>26),b=S+(w^(E|~C))+A[11]+3174756917&4294967295,S=E+(b<<10&4294967295|b>>>22),b=C+(E^(S|~w))+A[2]+718787259&4294967295,C=S+(b<<15&4294967295|b>>>17),b=w+(S^(C|~E))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+E&4294967295,T.g[1]=T.g[1]+(C+(b<<21&4294967295|b>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.u=function(T,E){E===void 0&&(E=T.length);for(var w=E-this.blockSize,A=this.B,C=this.h,S=0;S<E;){if(C==0)for(;S<=w;)i(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<E;)if(A[C++]=T.charCodeAt(S++),C==this.blockSize){i(this,A),C=0;break}}else for(;S<E;)if(A[C++]=T[S++],C==this.blockSize){i(this,A),C=0;break}}this.h=C,this.o+=E},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var E=1;E<T.length-8;++E)T[E]=0;var w=8*this.o;for(E=T.length-8;E<T.length;++E)T[E]=w&255,w/=256;for(this.u(T),T=Array(16),E=w=0;4>E;++E)for(var A=0;32>A;A+=8)T[w++]=this.g[E]>>>A&255;return T};function s(T,E){var w=l;return Object.prototype.hasOwnProperty.call(w,T)?w[T]:w[T]=E(T)}function a(T,E){this.h=E;for(var w=[],A=!0,C=T.length-1;0<=C;C--){var S=T[C]|0;A&&S==E||(w[C]=S,A=!1)}this.g=w}var l={};function u(T){return-128<=T&&128>T?s(T,function(E){return new a([E|0],0>E?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return P(h(-T));for(var E=[],w=1,A=0;T>=w;A++)E[A]=T/w|0,w*=4294967296;return new a(E,0)}function f(T,E){if(T.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(T.charAt(0)=="-")return P(f(T.substring(1),E));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(E,8)),A=m,C=0;C<T.length;C+=8){var S=Math.min(8,T.length-C),b=parseInt(T.substring(C,C+S),E);8>S?(S=h(Math.pow(E,S)),A=A.j(S).add(h(b))):(A=A.j(w),A=A.add(h(b)))}return A}var m=u(0),g=u(1),_=u(16777216);n=a.prototype,n.m=function(){if(I(this))return-P(this).m();for(var T=0,E=1,w=0;w<this.g.length;w++){var A=this.i(w);T+=(0<=A?A:4294967296+A)*E,E*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(y(this))return"0";if(I(this))return"-"+P(this).toString(T);for(var E=h(Math.pow(T,6)),w=this,A="";;){var C=$(w,E).g;w=x(w,C.j(E));var S=((0<w.g.length?w.g[0]:w.h)>>>0).toString(T);if(w=C,y(w))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function y(T){if(T.h!=0)return!1;for(var E=0;E<T.g.length;E++)if(T.g[E]!=0)return!1;return!0}function I(T){return T.h==-1}n.l=function(T){return T=x(this,T),I(T)?-1:y(T)?0:1};function P(T){for(var E=T.g.length,w=[],A=0;A<E;A++)w[A]=~T.g[A];return new a(w,~T.h).add(g)}n.abs=function(){return I(this)?P(this):this},n.add=function(T){for(var E=Math.max(this.g.length,T.g.length),w=[],A=0,C=0;C<=E;C++){var S=A+(this.i(C)&65535)+(T.i(C)&65535),b=(S>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);A=b>>>16,S&=65535,b&=65535,w[C]=b<<16|S}return new a(w,w[w.length-1]&-2147483648?-1:0)};function x(T,E){return T.add(P(E))}n.j=function(T){if(y(this)||y(T))return m;if(I(this))return I(T)?P(this).j(P(T)):P(P(this).j(T));if(I(T))return P(this.j(P(T)));if(0>this.l(_)&&0>T.l(_))return h(this.m()*T.m());for(var E=this.g.length+T.g.length,w=[],A=0;A<2*E;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var C=0;C<T.g.length;C++){var S=this.i(A)>>>16,b=this.i(A)&65535,se=T.i(C)>>>16,be=T.i(C)&65535;w[2*A+2*C]+=b*be,F(w,2*A+2*C),w[2*A+2*C+1]+=S*be,F(w,2*A+2*C+1),w[2*A+2*C+1]+=b*se,F(w,2*A+2*C+1),w[2*A+2*C+2]+=S*se,F(w,2*A+2*C+2)}for(A=0;A<E;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=E;A<2*E;A++)w[A]=0;return new a(w,0)};function F(T,E){for(;(T[E]&65535)!=T[E];)T[E+1]+=T[E]>>>16,T[E]&=65535,E++}function O(T,E){this.g=T,this.h=E}function $(T,E){if(y(E))throw Error("division by zero");if(y(T))return new O(m,m);if(I(T))return E=$(P(T),E),new O(P(E.g),P(E.h));if(I(E))return E=$(T,P(E)),new O(P(E.g),E.h);if(30<T.g.length){if(I(T)||I(E))throw Error("slowDivide_ only works with positive integers.");for(var w=g,A=E;0>=A.l(T);)w=U(w),A=U(A);var C=V(w,1),S=V(A,1);for(A=V(A,2),w=V(w,2);!y(A);){var b=S.add(A);0>=b.l(T)&&(C=C.add(w),S=b),A=V(A,1),w=V(w,1)}return E=x(T,C.j(E)),new O(C,E)}for(C=m;0<=T.l(E);){for(w=Math.max(1,Math.floor(T.m()/E.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(w),b=S.j(E);I(b)||0<b.l(T);)w-=A,S=h(w),b=S.j(E);y(S)&&(S=g),C=C.add(S),T=x(T,b)}return new O(C,T)}n.A=function(T){return $(this,T).h},n.and=function(T){for(var E=Math.max(this.g.length,T.g.length),w=[],A=0;A<E;A++)w[A]=this.i(A)&T.i(A);return new a(w,this.h&T.h)},n.or=function(T){for(var E=Math.max(this.g.length,T.g.length),w=[],A=0;A<E;A++)w[A]=this.i(A)|T.i(A);return new a(w,this.h|T.h)},n.xor=function(T){for(var E=Math.max(this.g.length,T.g.length),w=[],A=0;A<E;A++)w[A]=this.i(A)^T.i(A);return new a(w,this.h^T.h)};function U(T){for(var E=T.g.length+1,w=[],A=0;A<E;A++)w[A]=T.i(A)<<1|T.i(A-1)>>>31;return new a(w,T.h)}function V(T,E){var w=E>>5;E%=32;for(var A=T.g.length-w,C=[],S=0;S<A;S++)C[S]=0<E?T.i(S+w)>>>E|T.i(S+w+1)<<32-E:T.i(S+w);return new a(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,md=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,xn=a}).apply(typeof Ol<"u"?Ol:typeof self<"u"?self:typeof window<"u"?window:{});var Qi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gd,Qr,vd,ns,Yo,_d,yd,bd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,d,p){return c==Array.prototype||c==Object.prototype||(c[d]=p.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qi=="object"&&Qi];for(var d=0;d<c.length;++d){var p=c[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function i(c,d){if(d)e:{var p=r;c=c.split(".");for(var v=0;v<c.length-1;v++){var R=c[v];if(!(R in p))break e;p=p[R]}c=c[c.length-1],v=p[c],d=d(v),d!=v&&d!=null&&e(p,c,{configurable:!0,writable:!0,value:d})}}function s(c,d){c instanceof String&&(c+="");var p=0,v=!1,R={next:function(){if(!v&&p<c.length){var k=p++;return{value:d(k,c[k]),done:!1}}return v=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(c){return c||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(c){var d=typeof c;return d=d!="object"?d:c?Array.isArray(c)?"array":d:"null",d=="array"||d=="object"&&typeof c.length=="number"}function h(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function f(c,d,p){return c.call.apply(c.bind,arguments)}function m(c,d,p){if(!c)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,v),c.apply(d,R)}}return function(){return c.apply(d,arguments)}}function g(c,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function _(c,d){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),c.apply(this,v)}}function y(c,d){function p(){}p.prototype=d.prototype,c.aa=d.prototype,c.prototype=new p,c.prototype.constructor=c,c.Qb=function(v,R,k){for(var j=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)j[fe-2]=arguments[fe];return d.prototype[R].apply(v,j)}}function I(c){const d=c.length;if(0<d){const p=Array(d);for(let v=0;v<d;v++)p[v]=c[v];return p}return[]}function P(c,d){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(u(v)){const R=c.length||0,k=v.length||0;c.length=R+k;for(let j=0;j<k;j++)c[R+j]=v[j]}else c.push(v)}}class x{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function F(c){return/^[\s\xa0]*$/.test(c)}function O(){var c=l.navigator;return c&&(c=c.userAgent)?c:""}function $(c){return $[" "](c),c}$[" "]=function(){};var U=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function V(c,d,p){for(const v in c)d.call(p,c[v],v,c)}function T(c,d){for(const p in c)d.call(void 0,c[p],p,c)}function E(c){const d={};for(const p in c)d[p]=c[p];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(c,d){let p,v;for(let R=1;R<arguments.length;R++){v=arguments[R];for(p in v)c[p]=v[p];for(let k=0;k<w.length;k++)p=w[k],Object.prototype.hasOwnProperty.call(v,p)&&(c[p]=v[p])}}function C(c){var d=1;c=c.split(":");const p=[];for(;0<d&&c.length;)p.push(c.shift()),d--;return c.length&&p.push(c.join(":")),p}function S(c){l.setTimeout(()=>{throw c},0)}function b(){var c=kr;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class se{constructor(){this.h=this.g=null}add(d,p){const v=be.get();v.set(d,p),this.h?this.h.next=v:this.g=v,this.h=v}}var be=new x(()=>new Pe,c=>c.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Dt,Tn=!1,kr=new se,Ni=()=>{const c=l.Promise.resolve(void 0);Dt=()=>{c.then(de)}};var de=()=>{for(var c;c=b();){try{c.h.call(c.g)}catch(p){S(p)}var d=be;d.j(c),100>d.h&&(d.h++,c.next=d.g,d.g=c)}Tn=!1};function gt(){this.s=this.s,this.C=this.C}gt.prototype.s=!1,gt.prototype.ma=function(){this.s||(this.s=!0,this.N())},gt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function De(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}De.prototype.h=function(){this.defaultPrevented=!0};var oo=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const p=()=>{};l.addEventListener("test",p,d),l.removeEventListener("test",p,d)}catch{}return c}();function An(c,d){if(De.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var p=this.type=c.type,v=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget){if(U){e:{try{$(d.nodeName);var R=!0;break e}catch{}R=!1}R||(d=null)}}else p=="mouseover"?d=c.fromElement:p=="mouseout"&&(d=c.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:B[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&An.aa.h.call(this)}}y(An,De);var B={2:"touch",3:"pen",4:"mouse"};An.prototype.h=function(){An.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var oe="closure_listenable_"+(1e6*Math.random()|0),he=0;function le(c,d,p,v,R){this.listener=c,this.proxy=null,this.src=d,this.type=p,this.capture=!!v,this.ha=R,this.key=++he,this.da=this.fa=!1}function pe(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Te(c){this.src=c,this.g={},this.h=0}Te.prototype.add=function(c,d,p,v,R){var k=c.toString();c=this.g[k],c||(c=this.g[k]=[],this.h++);var j=ge(c,d,v,R);return-1<j?(d=c[j],p||(d.fa=!1)):(d=new le(d,this.src,k,!!v,R),d.fa=p,c.push(d)),d};function rt(c,d){var p=d.type;if(p in c.g){var v=c.g[p],R=Array.prototype.indexOf.call(v,d,void 0),k;(k=0<=R)&&Array.prototype.splice.call(v,R,1),k&&(pe(d),c.g[p].length==0&&(delete c.g[p],c.h--))}}function ge(c,d,p,v){for(var R=0;R<c.length;++R){var k=c[R];if(!k.da&&k.listener==d&&k.capture==!!p&&k.ha==v)return R}return-1}var Cn="closure_lm_"+(1e6*Math.random()|0),Sn={};function Di(c,d,p,v,R){if(Array.isArray(d)){for(var k=0;k<d.length;k++)Di(c,d[k],p,v,R);return null}return p=ut(p),c&&c[oe]?c.K(d,p,h(v)?!!v.capture:!1,R):ee(c,d,p,!1,v,R)}function ee(c,d,p,v,R,k){if(!d)throw Error("Invalid event type");var j=h(R)?!!R.capture:!!R,fe=vt(c);if(fe||(c[Cn]=fe=new Te(c)),p=fe.add(d,p,v,j,k),p.proxy)return p;if(v=Ze(),p.proxy=v,v.src=c,v.listener=p,c.addEventListener)oo||(R=j),R===void 0&&(R=!1),c.addEventListener(d.toString(),v,R);else if(c.attachEvent)c.attachEvent(Jt(d.toString()),v);else if(c.addListener&&c.removeListener)c.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Ze(){function c(p){return d.call(c.src,c.listener,p)}const d=Ot;return c}function it(c,d,p,v,R){if(Array.isArray(d))for(var k=0;k<d.length;k++)it(c,d[k],p,v,R);else v=h(v)?!!v.capture:!!v,p=ut(p),c&&c[oe]?(c=c.i,d=String(d).toString(),d in c.g&&(k=c.g[d],p=ge(k,p,v,R),-1<p&&(pe(k[p]),Array.prototype.splice.call(k,p,1),k.length==0&&(delete c.g[d],c.h--)))):c&&(c=vt(c))&&(d=c.g[d.toString()],c=-1,d&&(c=ge(d,p,v,R)),(p=-1<c?d[c]:null)&&Vt(p))}function Vt(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[oe])rt(d.i,c);else{var p=c.type,v=c.proxy;d.removeEventListener?d.removeEventListener(p,v,c.capture):d.detachEvent?d.detachEvent(Jt(p),v):d.addListener&&d.removeListener&&d.removeListener(v),(p=vt(d))?(rt(p,c),p.h==0&&(p.src=null,d[Cn]=null)):pe(c)}}}function Jt(c){return c in Sn?Sn[c]:Sn[c]="on"+c}function Ot(c,d){if(c.da)c=!0;else{d=new An(d,this);var p=c.listener,v=c.ha||c.src;c.fa&&Vt(c),c=p.call(v,d)}return c}function vt(c){return c=c[Cn],c instanceof Te?c:null}var Nr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ut(c){return typeof c=="function"?c:(c[Nr]||(c[Nr]=function(d){return c.handleEvent(d)}),c[Nr])}function je(){gt.call(this),this.i=new Te(this),this.M=this,this.F=null}y(je,gt),je.prototype[oe]=!0,je.prototype.removeEventListener=function(c,d,p,v){it(this,c,d,p,v)};function et(c,d){var p,v=c.F;if(v)for(p=[];v;v=v.F)p.push(v);if(c=c.M,v=d.type||d,typeof d=="string")d=new De(d,c);else if(d instanceof De)d.target=d.target||c;else{var R=d;d=new De(v,c),A(d,R)}if(R=!0,p)for(var k=p.length-1;0<=k;k--){var j=d.g=p[k];R=Vi(j,v,!0,d)&&R}if(j=d.g=c,R=Vi(j,v,!0,d)&&R,R=Vi(j,v,!1,d)&&R,p)for(k=0;k<p.length;k++)j=d.g=p[k],R=Vi(j,v,!1,d)&&R}je.prototype.N=function(){if(je.aa.N.call(this),this.i){var c=this.i,d;for(d in c.g){for(var p=c.g[d],v=0;v<p.length;v++)pe(p[v]);delete c.g[d],c.h--}}this.F=null},je.prototype.K=function(c,d,p,v){return this.i.add(String(c),d,!1,p,v)},je.prototype.L=function(c,d,p,v){return this.i.add(String(c),d,!0,p,v)};function Vi(c,d,p,v){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();for(var R=!0,k=0;k<d.length;++k){var j=d[k];if(j&&!j.da&&j.capture==p){var fe=j.listener,xe=j.ha||j.src;j.fa&&rt(c.i,j),R=fe.call(xe,v)!==!1&&R}}return R&&!v.defaultPrevented}function Pc(c,d,p){if(typeof c=="function")p&&(c=g(c,p));else if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(c,d||0)}function kc(c){c.g=Pc(()=>{c.g=null,c.i&&(c.i=!1,kc(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class Xp extends gt{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:kc(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dr(c){gt.call(this),this.h=c,this.g={}}y(Dr,gt);var Nc=[];function Dc(c){V(c.g,function(d,p){this.g.hasOwnProperty(p)&&Vt(d)},c),c.g={}}Dr.prototype.N=function(){Dr.aa.N.call(this),Dc(this)},Dr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ao=l.JSON.stringify,Zp=l.JSON.parse,ef=class{stringify(c){return l.JSON.stringify(c,void 0)}parse(c){return l.JSON.parse(c,void 0)}};function co(){}co.prototype.h=null;function Vc(c){return c.h||(c.h=c.i())}function Oc(){}var Vr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lo(){De.call(this,"d")}y(lo,De);function uo(){De.call(this,"c")}y(uo,De);var Rn={},Mc=null;function Oi(){return Mc=Mc||new je}Rn.La="serverreachability";function xc(c){De.call(this,Rn.La,c)}y(xc,De);function Or(c){const d=Oi();et(d,new xc(d))}Rn.STAT_EVENT="statevent";function Lc(c,d){De.call(this,Rn.STAT_EVENT,c),this.stat=d}y(Lc,De);function tt(c){const d=Oi();et(d,new Lc(d,c))}Rn.Ma="timingevent";function Fc(c,d){De.call(this,Rn.Ma,c),this.size=d}y(Fc,De);function Mr(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){c()},d)}function xr(){this.g=!0}xr.prototype.xa=function(){this.g=!1};function tf(c,d,p,v,R,k){c.info(function(){if(c.g)if(k)for(var j="",fe=k.split("&"),xe=0;xe<fe.length;xe++){var ae=fe[xe].split("=");if(1<ae.length){var Be=ae[0];ae=ae[1];var qe=Be.split("_");j=2<=qe.length&&qe[1]=="type"?j+(Be+"="+ae+"&"):j+(Be+"=redacted&")}}else j=null;else j=k;return"XMLHTTP REQ ("+v+") [attempt "+R+"]: "+d+`
`+p+`
`+j})}function nf(c,d,p,v,R,k,j){c.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+R+"]: "+d+`
`+p+`
`+k+" "+j})}function Jn(c,d,p,v){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+sf(c,p)+(v?" "+v:"")})}function rf(c,d){c.info(function(){return"TIMEOUT: "+d})}xr.prototype.info=function(){};function sf(c,d){if(!c.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(c=0;c<p.length;c++)if(Array.isArray(p[c])){var v=p[c];if(!(2>v.length)){var R=v[1];if(Array.isArray(R)&&!(1>R.length)){var k=R[0];if(k!="noop"&&k!="stop"&&k!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return ao(p)}catch{return d}}var Mi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$c={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ho;function xi(){}y(xi,co),xi.prototype.g=function(){return new XMLHttpRequest},xi.prototype.i=function(){return{}},ho=new xi;function Xt(c,d,p,v){this.j=c,this.i=d,this.l=p,this.R=v||1,this.U=new Dr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Uc}function Uc(){this.i=null,this.g="",this.h=!1}var jc={},po={};function fo(c,d,p){c.L=1,c.v=Ui(Mt(d)),c.m=p,c.P=!0,Bc(c,null)}function Bc(c,d){c.F=Date.now(),Li(c),c.A=Mt(c.v);var p=c.A,v=c.R;Array.isArray(v)||(v=[String(v)]),nl(p.i,"t",v),c.C=0,p=c.j.J,c.h=new Uc,c.g=bl(c.j,p?d:null,!c.m),0<c.O&&(c.M=new Xp(g(c.Y,c,c.g),c.O)),d=c.U,p=c.g,v=c.ca;var R="readystatechange";Array.isArray(R)||(R&&(Nc[0]=R.toString()),R=Nc);for(var k=0;k<R.length;k++){var j=Di(p,R[k],v||d.handleEvent,!1,d.h||d);if(!j)break;d.g[j.key]=j}d=c.H?E(c.H):{},c.m?(c.u||(c.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,d)):(c.u="GET",c.g.ea(c.A,c.u,null,d)),Or(),tf(c.i,c.u,c.A,c.l,c.R,c.m)}Xt.prototype.ca=function(c){c=c.target;const d=this.M;d&&xt(c)==3?d.j():this.Y(c)},Xt.prototype.Y=function(c){try{if(c==this.g)e:{const qe=xt(this.g);var d=this.g.Ba();const er=this.g.Z();if(!(3>qe)&&(qe!=3||this.g&&(this.h.h||this.g.oa()||ll(this.g)))){this.J||qe!=4||d==7||(d==8||0>=er?Or(3):Or(2)),mo(this);var p=this.g.Z();this.X=p;t:if(qc(this)){var v=ll(this.g);c="";var R=v.length,k=xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pn(this),Lr(this);var j="";break t}this.h.i=new l.TextDecoder}for(d=0;d<R;d++)this.h.h=!0,c+=this.h.i.decode(v[d],{stream:!(k&&d==R-1)});v.length=0,this.h.g+=c,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=p==200,nf(this.i,this.u,this.A,this.l,this.R,qe,p),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,xe=this.g;if((fe=xe.g?xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(fe)){var ae=fe;break t}}ae=null}if(p=ae)Jn(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,go(this,p);else{this.o=!1,this.s=3,tt(12),Pn(this),Lr(this);break e}}if(this.P){p=!0;let _t;for(;!this.J&&this.C<j.length;)if(_t=of(this,j),_t==po){qe==4&&(this.s=4,tt(14),p=!1),Jn(this.i,this.l,null,"[Incomplete Response]");break}else if(_t==jc){this.s=4,tt(15),Jn(this.i,this.l,j,"[Invalid Chunk]"),p=!1;break}else Jn(this.i,this.l,_t,null),go(this,_t);if(qc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),qe!=4||j.length!=0||this.h.h||(this.s=1,tt(16),p=!1),this.o=this.o&&p,!p)Jn(this.i,this.l,j,"[Invalid Chunked Response]"),Pn(this),Lr(this);else if(0<j.length&&!this.W){this.W=!0;var Be=this.j;Be.g==this&&Be.ba&&!Be.M&&(Be.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),wo(Be),Be.M=!0,tt(11))}}else Jn(this.i,this.l,j,null),go(this,j);qe==4&&Pn(this),this.o&&!this.J&&(qe==4?gl(this.j,this):(this.o=!1,Li(this)))}else If(this.g),p==400&&0<j.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),Pn(this),Lr(this)}}}catch{}finally{}};function qc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function of(c,d){var p=c.C,v=d.indexOf(`
`,p);return v==-1?po:(p=Number(d.substring(p,v)),isNaN(p)?jc:(v+=1,v+p>d.length?po:(d=d.slice(v,v+p),c.C=v+p,d)))}Xt.prototype.cancel=function(){this.J=!0,Pn(this)};function Li(c){c.S=Date.now()+c.I,zc(c,c.I)}function zc(c,d){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Mr(g(c.ba,c),d)}function mo(c){c.B&&(l.clearTimeout(c.B),c.B=null)}Xt.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(rf(this.i,this.A),this.L!=2&&(Or(),tt(17)),Pn(this),this.s=2,Lr(this)):zc(this,this.S-c)};function Lr(c){c.j.G==0||c.J||gl(c.j,c)}function Pn(c){mo(c);var d=c.M;d&&typeof d.ma=="function"&&d.ma(),c.M=null,Dc(c.U),c.g&&(d=c.g,c.g=null,d.abort(),d.ma())}function go(c,d){try{var p=c.j;if(p.G!=0&&(p.g==c||vo(p.h,c))){if(!c.K&&vo(p.h,c)&&p.G==3){try{var v=p.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var R=v;if(R[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<c.F)Gi(p),zi(p);else break e;Eo(p),tt(18)}}else p.za=R[1],0<p.za-p.T&&37500>R[2]&&p.F&&p.v==0&&!p.C&&(p.C=Mr(g(p.Za,p),6e3));if(1>=Wc(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Nn(p,11)}else if((c.K||p.g==c)&&Gi(p),!F(d))for(R=p.Da.g.parse(d),d=0;d<R.length;d++){let ae=R[d];if(p.T=ae[0],ae=ae[1],p.G==2)if(ae[0]=="c"){p.K=ae[1],p.ia=ae[2];const Be=ae[3];Be!=null&&(p.la=Be,p.j.info("VER="+p.la));const qe=ae[4];qe!=null&&(p.Aa=qe,p.j.info("SVER="+p.Aa));const er=ae[5];er!=null&&typeof er=="number"&&0<er&&(v=1.5*er,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const _t=c.g;if(_t){const Ki=_t.g?_t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ki){var k=v.h;k.g||Ki.indexOf("spdy")==-1&&Ki.indexOf("quic")==-1&&Ki.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(_o(k,k.h),k.h=null))}if(v.D){const Io=_t.g?_t.g.getResponseHeader("X-HTTP-Session-Id"):null;Io&&(v.ya=Io,ve(v.I,v.D,Io))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-c.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var j=c;if(v.qa=yl(v,v.J?v.ia:null,v.W),j.K){Kc(v.h,j);var fe=j,xe=v.L;xe&&(fe.I=xe),fe.B&&(mo(fe),Li(fe)),v.g=j}else fl(v);0<p.i.length&&Hi(p)}else ae[0]!="stop"&&ae[0]!="close"||Nn(p,7);else p.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Nn(p,7):bo(p):ae[0]!="noop"&&p.l&&p.l.ta(ae),p.v=0)}}Or(4)}catch{}}var af=class{constructor(c,d){this.g=c,this.map=d}};function Hc(c){this.l=c||10,l.PerformanceNavigationTiming?(c=l.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gc(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Wc(c){return c.h?1:c.g?c.g.size:0}function vo(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function _o(c,d){c.g?c.g.add(d):c.h=d}function Kc(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}Hc.prototype.cancel=function(){if(this.i=Qc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Qc(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const p of c.g.values())d=d.concat(p.D);return d}return I(c.i)}function cf(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(u(c)){for(var d=[],p=c.length,v=0;v<p;v++)d.push(c[v]);return d}d=[],p=0;for(v in c)d[p++]=c[v];return d}function lf(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(u(c)||typeof c=="string"){var d=[];c=c.length;for(var p=0;p<c;p++)d.push(p);return d}d=[],p=0;for(const v in c)d[p++]=v;return d}}}function Yc(c,d){if(c.forEach&&typeof c.forEach=="function")c.forEach(d,void 0);else if(u(c)||typeof c=="string")Array.prototype.forEach.call(c,d,void 0);else for(var p=lf(c),v=cf(c),R=v.length,k=0;k<R;k++)d.call(void 0,v[k],p&&p[k],c)}var Jc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uf(c,d){if(c){c=c.split("&");for(var p=0;p<c.length;p++){var v=c[p].indexOf("="),R=null;if(0<=v){var k=c[p].substring(0,v);R=c[p].substring(v+1)}else k=c[p];d(k,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function kn(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof kn){this.h=c.h,Fi(this,c.j),this.o=c.o,this.g=c.g,$i(this,c.s),this.l=c.l;var d=c.i,p=new Ur;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Xc(this,p),this.m=c.m}else c&&(d=String(c).match(Jc))?(this.h=!1,Fi(this,d[1]||"",!0),this.o=Fr(d[2]||""),this.g=Fr(d[3]||"",!0),$i(this,d[4]),this.l=Fr(d[5]||"",!0),Xc(this,d[6]||"",!0),this.m=Fr(d[7]||"")):(this.h=!1,this.i=new Ur(null,this.h))}kn.prototype.toString=function(){var c=[],d=this.j;d&&c.push($r(d,Zc,!0),":");var p=this.g;return(p||d=="file")&&(c.push("//"),(d=this.o)&&c.push($r(d,Zc,!0),"@"),c.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&c.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&c.push("/"),c.push($r(p,p.charAt(0)=="/"?pf:hf,!0))),(p=this.i.toString())&&c.push("?",p),(p=this.m)&&c.push("#",$r(p,mf)),c.join("")};function Mt(c){return new kn(c)}function Fi(c,d,p){c.j=p?Fr(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function $i(c,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);c.s=d}else c.s=null}function Xc(c,d,p){d instanceof Ur?(c.i=d,gf(c.i,c.h)):(p||(d=$r(d,ff)),c.i=new Ur(d,c.h))}function ve(c,d,p){c.i.set(d,p)}function Ui(c){return ve(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Fr(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function $r(c,d,p){return typeof c=="string"?(c=encodeURI(c).replace(d,df),p&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function df(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Zc=/[#\/\?@]/g,hf=/[#\?:]/g,pf=/[#\?]/g,ff=/[#\?@]/g,mf=/#/g;function Ur(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function Zt(c){c.g||(c.g=new Map,c.h=0,c.i&&uf(c.i,function(d,p){c.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}n=Ur.prototype,n.add=function(c,d){Zt(this),this.i=null,c=Xn(this,c);var p=this.g.get(c);return p||this.g.set(c,p=[]),p.push(d),this.h+=1,this};function el(c,d){Zt(c),d=Xn(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function tl(c,d){return Zt(c),d=Xn(c,d),c.g.has(d)}n.forEach=function(c,d){Zt(this),this.g.forEach(function(p,v){p.forEach(function(R){c.call(d,R,v,this)},this)},this)},n.na=function(){Zt(this);const c=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let v=0;v<d.length;v++){const R=c[v];for(let k=0;k<R.length;k++)p.push(d[v])}return p},n.V=function(c){Zt(this);let d=[];if(typeof c=="string")tl(this,c)&&(d=d.concat(this.g.get(Xn(this,c))));else{c=Array.from(this.g.values());for(let p=0;p<c.length;p++)d=d.concat(c[p])}return d},n.set=function(c,d){return Zt(this),this.i=null,c=Xn(this,c),tl(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},n.get=function(c,d){return c?(c=this.V(c),0<c.length?String(c[0]):d):d};function nl(c,d,p){el(c,d),0<p.length&&(c.i=null,c.g.set(Xn(c,d),I(p)),c.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var v=d[p];const k=encodeURIComponent(String(v)),j=this.V(v);for(v=0;v<j.length;v++){var R=k;j[v]!==""&&(R+="="+encodeURIComponent(String(j[v]))),c.push(R)}}return this.i=c.join("&")};function Xn(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function gf(c,d){d&&!c.j&&(Zt(c),c.i=null,c.g.forEach(function(p,v){var R=v.toLowerCase();v!=R&&(el(this,v),nl(this,R,p))},c)),c.j=d}function vf(c,d){const p=new xr;if(l.Image){const v=new Image;v.onload=_(en,p,"TestLoadImage: loaded",!0,d,v),v.onerror=_(en,p,"TestLoadImage: error",!1,d,v),v.onabort=_(en,p,"TestLoadImage: abort",!1,d,v),v.ontimeout=_(en,p,"TestLoadImage: timeout",!1,d,v),l.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=c}else d(!1)}function _f(c,d){const p=new xr,v=new AbortController,R=setTimeout(()=>{v.abort(),en(p,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:v.signal}).then(k=>{clearTimeout(R),k.ok?en(p,"TestPingServer: ok",!0,d):en(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(R),en(p,"TestPingServer: error",!1,d)})}function en(c,d,p,v,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),v(p)}catch{}}function yf(){this.g=new ef}function bf(c,d,p){const v=p||"";try{Yc(c,function(R,k){let j=R;h(R)&&(j=ao(R)),d.push(v+k+"="+encodeURIComponent(j))})}catch(R){throw d.push(v+"type="+encodeURIComponent("_badmap")),R}}function ji(c){this.l=c.Ub||null,this.j=c.eb||!1}y(ji,co),ji.prototype.g=function(){return new Bi(this.l,this.j)},ji.prototype.i=function(c){return function(){return c}}({});function Bi(c,d){je.call(this),this.D=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(Bi,je),n=Bi.prototype,n.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=d,this.readyState=1,Br(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(d.body=c),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Br(this)),this.g&&(this.readyState=3,Br(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rl(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function rl(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?jr(this):Br(this),this.readyState==3&&rl(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,jr(this))},n.Qa=function(c){this.g&&(this.response=c,jr(this))},n.ga=function(){this.g&&jr(this)};function jr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Br(c)}n.setRequestHeader=function(c,d){this.u.append(c,d)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,c.push(p[0]+": "+p[1]),p=d.next();return c.join(`\r
`)};function Br(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function il(c){let d="";return V(c,function(p,v){d+=v,d+=":",d+=p,d+=`\r
`}),d}function yo(c,d,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=il(p),typeof c=="string"?p!=null&&encodeURIComponent(String(p)):ve(c,d,p))}function Ee(c){je.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(Ee,je);var Ef=/^https?$/i,wf=["POST","PUT"];n=Ee.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,d,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ho.g(),this.v=this.o?Vc(this.o):Vc(ho),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(k){sl(this,k);return}if(c=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var R in v)p.set(R,v[R]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const k of v.keys())p.set(k,v.get(k));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(k=>k.toLowerCase()=="content-type"),R=l.FormData&&c instanceof l.FormData,!(0<=Array.prototype.indexOf.call(wf,d,void 0))||v||R||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,j]of p)this.g.setRequestHeader(k,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cl(this),this.u=!0,this.g.send(c),this.u=!1}catch(k){sl(this,k)}};function sl(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.m=5,ol(c),qi(c)}function ol(c){c.A||(c.A=!0,et(c,"complete"),et(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,et(this,"complete"),et(this,"abort"),qi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qi(this,!0)),Ee.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?al(this):this.bb())},n.bb=function(){al(this)};function al(c){if(c.h&&typeof a<"u"&&(!c.v[1]||xt(c)!=4||c.Z()!=2)){if(c.u&&xt(c)==4)Pc(c.Ea,0,c);else if(et(c,"readystatechange"),xt(c)==4){c.h=!1;try{const j=c.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var v;if(v=j===0){var R=String(c.D).match(Jc)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),v=!Ef.test(R?R.toLowerCase():"")}p=v}if(p)et(c,"complete"),et(c,"success");else{c.m=6;try{var k=2<xt(c)?c.g.statusText:""}catch{k=""}c.l=k+" ["+c.Z()+"]",ol(c)}}finally{qi(c)}}}}function qi(c,d){if(c.g){cl(c);const p=c.g,v=c.v[0]?()=>{}:null;c.g=null,c.v=null,d||et(c,"ready");try{p.onreadystatechange=v}catch{}}}function cl(c){c.I&&(l.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function xt(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<xt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),Zp(d)}};function ll(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function If(c){const d={};c=(c.g&&2<=xt(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<c.length;v++){if(F(c[v]))continue;var p=C(c[v]);const R=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const k=d[R]||[];d[R]=k,k.push(p)}T(d,function(v){return v.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qr(c,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[c]||d}function ul(c){this.Aa=0,this.i=[],this.j=new xr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qr("baseRetryDelayMs",5e3,c),this.cb=qr("retryDelaySeedMs",1e4,c),this.Wa=qr("forwardChannelMaxRetries",2,c),this.wa=qr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Hc(c&&c.concurrentRequestLimit),this.Da=new yf,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ul.prototype,n.la=8,n.G=1,n.connect=function(c,d,p,v){tt(0),this.W=c,this.H=d||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=yl(this,null,this.W),Hi(this)};function bo(c){if(dl(c),c.G==3){var d=c.U++,p=Mt(c.I);if(ve(p,"SID",c.K),ve(p,"RID",d),ve(p,"TYPE","terminate"),zr(c,p),d=new Xt(c,c.j,d),d.L=2,d.v=Ui(Mt(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=d.v,p=!0),p||(d.g=bl(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Li(d)}_l(c)}function zi(c){c.g&&(wo(c),c.g.cancel(),c.g=null)}function dl(c){zi(c),c.u&&(l.clearTimeout(c.u),c.u=null),Gi(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&l.clearTimeout(c.s),c.s=null)}function Hi(c){if(!Gc(c.h)&&!c.s){c.s=!0;var d=c.Ga;Dt||Ni(),Tn||(Dt(),Tn=!0),kr.add(d,c),c.B=0}}function Tf(c,d){return Wc(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=d.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Mr(g(c.Ga,c,d),vl(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const R=new Xt(this,this.j,c);let k=this.o;if(this.S&&(k?(k=E(k),A(k,this.S)):k=this.S),this.m!==null||this.O||(R.H=k,k=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=pl(this,R,d),p=Mt(this.I),ve(p,"RID",c),ve(p,"CVER",22),this.D&&ve(p,"X-HTTP-Session-Id",this.D),zr(this,p),k&&(this.O?d="headers="+encodeURIComponent(String(il(k)))+"&"+d:this.m&&yo(p,this.m,k)),_o(this.h,R),this.Ua&&ve(p,"TYPE","init"),this.P?(ve(p,"$req",d),ve(p,"SID","null"),R.T=!0,fo(R,p,null)):fo(R,p,d),this.G=2}}else this.G==3&&(c?hl(this,c):this.i.length==0||Gc(this.h)||hl(this))};function hl(c,d){var p;d?p=d.l:p=c.U++;const v=Mt(c.I);ve(v,"SID",c.K),ve(v,"RID",p),ve(v,"AID",c.T),zr(c,v),c.m&&c.o&&yo(v,c.m,c.o),p=new Xt(c,c.j,p,c.B+1),c.m===null&&(p.H=c.o),d&&(c.i=d.D.concat(c.i)),d=pl(c,p,1e3),p.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),_o(c.h,p),fo(p,v,d)}function zr(c,d){c.H&&V(c.H,function(p,v){ve(d,v,p)}),c.l&&Yc({},function(p,v){ve(d,v,p)})}function pl(c,d,p){p=Math.min(c.i.length,p);var v=c.l?g(c.l.Na,c.l,c):null;e:{var R=c.i;let k=-1;for(;;){const j=["count="+p];k==-1?0<p?(k=R[0].g,j.push("ofs="+k)):k=0:j.push("ofs="+k);let fe=!0;for(let xe=0;xe<p;xe++){let ae=R[xe].g;const Be=R[xe].map;if(ae-=k,0>ae)k=Math.max(0,R[xe].g-100),fe=!1;else try{bf(Be,j,"req"+ae+"_")}catch{v&&v(Be)}}if(fe){v=j.join("&");break e}}}return c=c.i.splice(0,p),d.D=c,v}function fl(c){if(!c.g&&!c.u){c.Y=1;var d=c.Fa;Dt||Ni(),Tn||(Dt(),Tn=!0),kr.add(d,c),c.v=0}}function Eo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Mr(g(c.Fa,c),vl(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,ml(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Mr(g(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),zi(this),ml(this))};function wo(c){c.A!=null&&(l.clearTimeout(c.A),c.A=null)}function ml(c){c.g=new Xt(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var d=Mt(c.qa);ve(d,"RID","rpc"),ve(d,"SID",c.K),ve(d,"AID",c.T),ve(d,"CI",c.F?"0":"1"),!c.F&&c.ja&&ve(d,"TO",c.ja),ve(d,"TYPE","xmlhttp"),zr(c,d),c.m&&c.o&&yo(d,c.m,c.o),c.L&&(c.g.I=c.L);var p=c.g;c=c.ia,p.L=1,p.v=Ui(Mt(d)),p.m=null,p.P=!0,Bc(p,c)}n.Za=function(){this.C!=null&&(this.C=null,zi(this),Eo(this),tt(19))};function Gi(c){c.C!=null&&(l.clearTimeout(c.C),c.C=null)}function gl(c,d){var p=null;if(c.g==d){Gi(c),wo(c),c.g=null;var v=2}else if(vo(c.h,d))p=d.D,Kc(c.h,d),v=1;else return;if(c.G!=0){if(d.o)if(v==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var R=c.B;v=Oi(),et(v,new Fc(v,p)),Hi(c)}else fl(c);else if(R=d.s,R==3||R==0&&0<d.X||!(v==1&&Tf(c,d)||v==2&&Eo(c)))switch(p&&0<p.length&&(d=c.h,d.i=d.i.concat(p)),R){case 1:Nn(c,5);break;case 4:Nn(c,10);break;case 3:Nn(c,6);break;default:Nn(c,2)}}}function vl(c,d){let p=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(p*=2),p*d}function Nn(c,d){if(c.j.info("Error code "+d),d==2){var p=g(c.fb,c),v=c.Xa;const R=!v;v=new kn(v||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Fi(v,"https"),Ui(v),R?vf(v.toString(),p):_f(v.toString(),p)}else tt(2);c.G=0,c.l&&c.l.sa(d),_l(c),dl(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function _l(c){if(c.G=0,c.ka=[],c.l){const d=Qc(c.h);(d.length!=0||c.i.length!=0)&&(P(c.ka,d),P(c.ka,c.i),c.h.i.length=0,I(c.i),c.i.length=0),c.l.ra()}}function yl(c,d,p){var v=p instanceof kn?Mt(p):new kn(p);if(v.g!="")d&&(v.g=d+"."+v.g),$i(v,v.s);else{var R=l.location;v=R.protocol,d=d?d+"."+R.hostname:R.hostname,R=+R.port;var k=new kn(null);v&&Fi(k,v),d&&(k.g=d),R&&$i(k,R),p&&(k.l=p),v=k}return p=c.D,d=c.ya,p&&d&&ve(v,p,d),ve(v,"VER",c.la),zr(c,v),v}function bl(c,d,p){if(d&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Ca&&!c.pa?new Ee(new ji({eb:p})):new Ee(c.pa),d.Ha(c.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function El(){}n=El.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Wi(){}Wi.prototype.g=function(c,d){return new at(c,d)};function at(c,d){je.call(this),this.g=new ul(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(c?c["X-WebChannel-Client-Profile"]=d.va:c={"X-WebChannel-Client-Profile":d.va}),this.g.S=c,(c=d&&d.Sb)&&!F(c)&&(this.g.m=c),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!F(d)&&(this.g.D=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new Zn(this)}y(at,je),at.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},at.prototype.close=function(){bo(this.g)},at.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var p={};p.__data__=c,c=p}else this.u&&(p={},p.__data__=ao(c),c=p);d.i.push(new af(d.Ya++,c)),d.G==3&&Hi(d)},at.prototype.N=function(){this.g.l=null,delete this.j,bo(this.g),delete this.g,at.aa.N.call(this)};function wl(c){lo.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){e:{for(const p in d){c=p;break e}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}y(wl,lo);function Il(){uo.call(this),this.status=1}y(Il,uo);function Zn(c){this.g=c}y(Zn,El),Zn.prototype.ua=function(){et(this.g,"a")},Zn.prototype.ta=function(c){et(this.g,new wl(c))},Zn.prototype.sa=function(c){et(this.g,new Il)},Zn.prototype.ra=function(){et(this.g,"b")},Wi.prototype.createWebChannel=Wi.prototype.g,at.prototype.send=at.prototype.o,at.prototype.open=at.prototype.m,at.prototype.close=at.prototype.close,bd=function(){return new Wi},yd=function(){return Oi()},_d=Rn,Yo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mi.NO_ERROR=0,Mi.TIMEOUT=8,Mi.HTTP_ERROR=6,ns=Mi,$c.COMPLETE="complete",vd=$c,Oc.EventType=Vr,Vr.OPEN="a",Vr.CLOSE="b",Vr.ERROR="c",Vr.MESSAGE="d",je.prototype.listen=je.prototype.K,Qr=Oc,Ee.prototype.listenOnce=Ee.prototype.L,Ee.prototype.getLastError=Ee.prototype.Ka,Ee.prototype.getLastErrorCode=Ee.prototype.Ba,Ee.prototype.getStatus=Ee.prototype.Z,Ee.prototype.getResponseJson=Ee.prototype.Oa,Ee.prototype.getResponseText=Ee.prototype.oa,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Ha,gd=Ee}).apply(typeof Qi<"u"?Qi:typeof self<"u"?self:typeof window<"u"?window:{});const Ml="@firebase/firestore";/**
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
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
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
 */let Ar="10.14.0";/**
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
 */const qn=new Aa("@firebase/firestore");function Hr(){return qn.logLevel}function q(n,...e){if(qn.logLevel<=ne.DEBUG){const t=e.map(Ra);qn.debug(`Firestore (${Ar}): ${n}`,...t)}}function Gt(n,...e){if(qn.logLevel<=ne.ERROR){const t=e.map(Ra);qn.error(`Firestore (${Ar}): ${n}`,...t)}}function hr(n,...e){if(qn.logLevel<=ne.WARN){const t=e.map(Ra);qn.warn(`Firestore (${Ar}): ${n}`,...t)}}function Ra(n){if(typeof n=="string")return n;try{/**
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
 */function Q(n="Unexpected state"){const e=`FIRESTORE (${Ar}) INTERNAL ASSERTION FAILED: `+n;throw Gt(e),new Error(e)}function ue(n,e){n||Q()}function J(n,e){return n}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Yt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ln{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Ed{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class og{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Qe.UNAUTHENTICATED))}shutdown(){}}class ag{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class cg{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ue(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new Ln;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ln,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ln)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new Ed(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new Qe(e)}}class lg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ug{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new lg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ue(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ue(typeof t.token=="string"),this.R=t.token,new dg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function pg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class wd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=pg(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(n,e){return n<e?-1:n>e?1:0}function pr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class Ne{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ne(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ne(0,0))}static max(){return new Y(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class li{constructor(e,t,r){t===void 0?t=0:t>e.length&&Q(),r===void 0?r=e.length-t:r>e.length-t&&Q(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return li.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof li?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class we extends li{construct(e,t,r){return new we(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new we(t)}static emptyPath(){return new we([])}}const fg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends li{construct(e,t,r){return new Fe(e,t,r)}static isValidIdentifier(e){return fg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new z(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new z(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(t)}static emptyPath(){return new Fe([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(we.fromString(e))}static fromName(e){return new W(we.fromString(e).popFirst(5))}static empty(){return new W(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return we.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new we(e.slice()))}}function mg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Ne(t+1,0):new Ne(t,r));return new yn(i,W.empty(),e)}function gg(n){return new yn(n.readTime,n.key,-1)}class yn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new yn(Y.min(),W.empty(),-1)}static max(){return new yn(Y.max(),W.empty(),-1)}}function vg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=W.comparator(n.documentKey,e.documentKey),t!==0?t:ce(n.largestBatchId,e.largestBatchId))}/**
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
 */const _g="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ei(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==_g)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):M.reject(t)}static resolve(e){return new M((t,r)=>{t(e)})}static reject(e){return new M((t,r)=>{r(e)})}static waitFor(e){return new M((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=M.resolve(!1);for(const r of e)t=t.next(i=>i?M.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new M((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new M((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function bg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function wi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Pa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Pa.oe=-1;function Os(n){return n==null}function fs(n){return n===0&&1/n==-1/0}function Eg(n){return typeof n=="number"&&Number.isInteger(n)&&!fs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function xl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Kn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Id(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ye{constructor(e,t){this.comparator=e,this.root=t||Le.EMPTY}insert(e,t){return new ye(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yi(this.root,e,this.comparator,!0)}}class Yi{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Le.RED,this.left=i??Le.EMPTY,this.right=s??Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Le(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Le.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Le(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $e{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ll(this.data.getIterator())}getIteratorFrom(e){return new Ll(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new $e(this.comparator);return t.data=e,t}}class Ll{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class lt{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new lt([])}unionWith(e){let t=new $e(Fe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new lt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return pr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Td extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ue{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Td("Invalid base64 string: "+s):s}}(e);return new Ue(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Ue(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const wg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bn(n){if(ue(!!n),typeof n=="string"){let e=0;const t=wg.exec(n);if(ue(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(n.seconds),nanos:Se(n.nanos)}}function Se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function zn(n){return typeof n=="string"?Ue.fromBase64String(n):Ue.fromUint8Array(n)}/**
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
 */function ka(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Na(n){const e=n.mapValue.fields.__previous_value__;return ka(e)?Na(e):e}function ui(n){const e=bn(n.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
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
 */class Ig{constructor(e,t,r,i,s,a,l,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class di{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof di&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ji={mapValue:{}};function Hn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ka(n)?4:Ag(n)?9007199254740991:Tg(n)?10:11:Q()}function Rt(n,e){if(n===e)return!0;const t=Hn(n);if(t!==Hn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ui(n).isEqual(ui(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=bn(i.timestampValue),l=bn(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return zn(i.bytesValue).isEqual(zn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Se(i.doubleValue),l=Se(s.doubleValue);return a===l?fs(a)===fs(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return pr(n.arrayValue.values||[],e.arrayValue.values||[],Rt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(xl(a)!==xl(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Rt(a[u],l[u])))return!1;return!0}(n,e);default:return Q()}}function hi(n,e){return(n.values||[]).find(t=>Rt(t,e))!==void 0}function fr(n,e){if(n===e)return 0;const t=Hn(n),r=Hn(e);if(t!==r)return ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ce(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=Se(s.integerValue||s.doubleValue),u=Se(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Fl(n.timestampValue,e.timestampValue);case 4:return Fl(ui(n),ui(e));case 5:return ce(n.stringValue,e.stringValue);case 6:return function(s,a){const l=zn(s),u=zn(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ce(l[h],u[h]);if(f!==0)return f}return ce(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=ce(Se(s.latitude),Se(a.latitude));return l!==0?l:ce(Se(s.longitude),Se(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return $l(n.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,h,f;const m=s.fields||{},g=a.fields||{},_=(l=m.value)===null||l===void 0?void 0:l.arrayValue,y=(u=g.value)===null||u===void 0?void 0:u.arrayValue,I=ce(((h=_?.values)===null||h===void 0?void 0:h.length)||0,((f=y?.values)===null||f===void 0?void 0:f.length)||0);return I!==0?I:$l(_,y)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Ji.mapValue&&a===Ji.mapValue)return 0;if(s===Ji.mapValue)return 1;if(a===Ji.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=ce(u[m],f[m]);if(g!==0)return g;const _=fr(l[u[m]],h[f[m]]);if(_!==0)return _}return ce(u.length,f.length)}(n.mapValue,e.mapValue);default:throw Q()}}function Fl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ce(n,e);const t=bn(n),r=bn(e),i=ce(t.seconds,r.seconds);return i!==0?i:ce(t.nanos,r.nanos)}function $l(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=fr(t[i],r[i]);if(s)return s}return ce(t.length,r.length)}function mr(n){return Jo(n)}function Jo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=bn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return zn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return W.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Jo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Jo(t.fields[a])}`;return i+"}"}(n.mapValue):Q()}function Xo(n){return!!n&&"integerValue"in n}function Da(n){return!!n&&"arrayValue"in n}function Ul(n){return!!n&&"nullValue"in n}function jl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function rs(n){return!!n&&"mapValue"in n}function Tg(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ei(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Kn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ei(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ei(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Ag(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!rs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ei(t)}setAll(e){let t=Fe.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=ei(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());rs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];rs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Kn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new st(ei(this.value))}}function Ad(n){const e=[];return Kn(n.fields,(t,r)=>{const i=new Fe([t]);if(rs(r)){const s=Ad(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new lt(e)}/**
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
 */class Je{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Je(e,0,Y.min(),Y.min(),Y.min(),st.empty(),0)}static newFoundDocument(e,t,r,i){return new Je(e,1,t,Y.min(),r,i,0)}static newNoDocument(e,t){return new Je(e,2,t,Y.min(),Y.min(),st.empty(),0)}static newUnknownDocument(e,t){return new Je(e,3,t,Y.min(),Y.min(),st.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ms{constructor(e,t){this.position=e,this.inclusive=t}}function Bl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(a.referenceValue),t.key):r=fr(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ql(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Rt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class gs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Cg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Cd{}class ke extends Cd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Rg(e,t,r):t==="array-contains"?new Ng(e,r):t==="in"?new Dg(e,r):t==="not-in"?new Vg(e,r):t==="array-contains-any"?new Og(e,r):new ke(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Pg(e,r):new kg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(fr(t,this.value)):t!==null&&Hn(this.value)===Hn(t)&&this.matchesComparison(fr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pt extends Cd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Pt(e,t)}matches(e){return Sd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sd(n){return n.op==="and"}function Rd(n){return Sg(n)&&Sd(n)}function Sg(n){for(const e of n.filters)if(e instanceof Pt)return!1;return!0}function Zo(n){if(n instanceof ke)return n.field.canonicalString()+n.op.toString()+mr(n.value);if(Rd(n))return n.filters.map(e=>Zo(e)).join(",");{const e=n.filters.map(t=>Zo(t)).join(",");return`${n.op}(${e})`}}function Pd(n,e){return n instanceof ke?function(r,i){return i instanceof ke&&r.op===i.op&&r.field.isEqual(i.field)&&Rt(r.value,i.value)}(n,e):n instanceof Pt?function(r,i){return i instanceof Pt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&Pd(a,i.filters[l]),!0):!1}(n,e):void Q()}function kd(n){return n instanceof ke?function(t){return`${t.field.canonicalString()} ${t.op} ${mr(t.value)}`}(n):n instanceof Pt?function(t){return t.op.toString()+" {"+t.getFilters().map(kd).join(" ,")+"}"}(n):"Filter"}class Rg extends ke{constructor(e,t,r){super(e,t,r),this.key=W.fromName(r.referenceValue)}matches(e){const t=W.comparator(e.key,this.key);return this.matchesComparison(t)}}class Pg extends ke{constructor(e,t){super(e,"in",t),this.keys=Nd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class kg extends ke{constructor(e,t){super(e,"not-in",t),this.keys=Nd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Nd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>W.fromName(r.referenceValue))}class Ng extends ke{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Da(t)&&hi(t.arrayValue,this.value)}}class Dg extends ke{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&hi(this.value.arrayValue,t)}}class Vg extends ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!hi(this.value.arrayValue,t)}}class Og extends ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Da(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>hi(this.value.arrayValue,r))}}/**
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
 */class Mg{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function zl(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Mg(n,e,t,r,i,s,a)}function Va(n){const e=J(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Zo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Os(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>mr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>mr(r)).join(",")),e.ue=t}return e.ue}function Oa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Cg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Pd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ql(n.startAt,e.startAt)&&ql(n.endAt,e.endAt)}function ea(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ms{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function xg(n,e,t,r,i,s,a,l){return new Ms(n,e,t,r,i,s,a,l)}function Ma(n){return new Ms(n)}function Hl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Lg(n){return n.collectionGroup!==null}function ti(n){const e=J(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new $e(Fe.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new gs(s,r))}),t.has(Fe.keyField().canonicalString())||e.ce.push(new gs(Fe.keyField(),r))}return e.ce}function Tt(n){const e=J(n);return e.le||(e.le=Fg(e,ti(n))),e.le}function Fg(n,e){if(n.limitType==="F")return zl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new gs(i.field,s)});const t=n.endAt?new ms(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ms(n.startAt.position,n.startAt.inclusive):null;return zl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ta(n,e,t){return new Ms(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function xs(n,e){return Oa(Tt(n),Tt(e))&&n.limitType===e.limitType}function Dd(n){return`${Va(Tt(n))}|lt:${n.limitType}`}function nr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>kd(i)).join(", ")}]`),Os(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>mr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>mr(i)).join(",")),`Target(${r})`}(Tt(n))}; limitType=${n.limitType})`}function Ls(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of ti(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const h=Bl(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,ti(r),i)||r.endAt&&!function(a,l,u){const h=Bl(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,ti(r),i))}(n,e)}function $g(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Vd(n){return(e,t)=>{let r=!1;for(const i of ti(n)){const s=Ug(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Ug(n,e,t){const r=n.field.isKeyField()?W.comparator(e.key,t.key):function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?fr(u,h):Q()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class Cr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Kn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Id(this.inner)}size(){return this.innerSize}}/**
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
 */const jg=new ye(W.comparator);function Wt(){return jg}const Od=new ye(W.comparator);function Yr(...n){let e=Od;for(const t of n)e=e.insert(t.key,t);return e}function Md(n){let e=Od;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function On(){return ni()}function xd(){return ni()}function ni(){return new Cr(n=>n.toString(),(n,e)=>n.isEqual(e))}const Bg=new ye(W.comparator),qg=new $e(W.comparator);function te(...n){let e=qg;for(const t of n)e=e.add(t);return e}const zg=new $e(ce);function Hg(){return zg}/**
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
 */function xa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fs(e)?"-0":e}}function Ld(n){return{integerValue:""+n}}function Gg(n,e){return Eg(e)?Ld(e):xa(n,e)}/**
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
 */class Fs{constructor(){this._=void 0}}function Wg(n,e,t){return n instanceof vs?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ka(s)&&(s=Na(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof pi?$d(n,e):n instanceof fi?Ud(n,e):function(i,s){const a=Fd(i,s),l=Gl(a)+Gl(i.Pe);return Xo(a)&&Xo(i.Pe)?Ld(l):xa(i.serializer,l)}(n,e)}function Kg(n,e,t){return n instanceof pi?$d(n,e):n instanceof fi?Ud(n,e):t}function Fd(n,e){return n instanceof _s?function(r){return Xo(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class vs extends Fs{}class pi extends Fs{constructor(e){super(),this.elements=e}}function $d(n,e){const t=jd(e);for(const r of n.elements)t.some(i=>Rt(i,r))||t.push(r);return{arrayValue:{values:t}}}class fi extends Fs{constructor(e){super(),this.elements=e}}function Ud(n,e){let t=jd(e);for(const r of n.elements)t=t.filter(i=>!Rt(i,r));return{arrayValue:{values:t}}}class _s extends Fs{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Gl(n){return Se(n.integerValue||n.doubleValue)}function jd(n){return Da(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Qg(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof pi&&i instanceof pi||r instanceof fi&&i instanceof fi?pr(r.elements,i.elements,Rt):r instanceof _s&&i instanceof _s?Rt(r.Pe,i.Pe):r instanceof vs&&i instanceof vs}(n.transform,e.transform)}class Yg{constructor(e,t){this.version=e,this.transformResults=t}}class ft{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ft}static exists(e){return new ft(void 0,e)}static updateTime(e){return new ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function is(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class $s{}function Bd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new La(n.key,ft.none()):new Ii(n.key,n.data,ft.none());{const t=n.data,r=st.empty();let i=new $e(Fe.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new wn(n.key,r,new lt(i.toArray()),ft.none())}}function Jg(n,e,t){n instanceof Ii?function(i,s,a){const l=i.value.clone(),u=Kl(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof wn?function(i,s,a){if(!is(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Kl(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(qd(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ri(n,e,t,r){return n instanceof Ii?function(s,a,l,u){if(!is(s.precondition,a))return l;const h=s.value.clone(),f=Ql(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof wn?function(s,a,l,u){if(!is(s.precondition,a))return l;const h=Ql(s.fieldTransforms,u,a),f=a.data;return f.setAll(qd(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,a,l){return is(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Xg(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Fd(r.transform,i||null);s!=null&&(t===null&&(t=st.empty()),t.set(r.field,s))}return t||null}function Wl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&pr(r,i,(s,a)=>Qg(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ii extends $s{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wn extends $s{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Kl(n,e,t){const r=new Map;ue(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,Kg(a,l,t[i]))}return r}function Ql(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,Wg(s,a,e))}return r}class La extends $s{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zg extends $s{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ev{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Jg(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ri(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ri(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=xd();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const u=Bd(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),te())}isEqual(e){return this.batchId===e.batchId&&pr(this.mutations,e.mutations,(t,r)=>Wl(t,r))&&pr(this.baseMutations,e.baseMutations,(t,r)=>Wl(t,r))}}class Fa{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ue(e.mutations.length===r.length);let i=function(){return Bg}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Fa(e,t,r,i)}}/**
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
 */class tv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Re,ie;function rv(n){switch(n){default:return Q();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function zd(n){if(n===void 0)return Gt("GRPC error has no .code"),L.UNKNOWN;switch(n){case Re.OK:return L.OK;case Re.CANCELLED:return L.CANCELLED;case Re.UNKNOWN:return L.UNKNOWN;case Re.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Re.INTERNAL:return L.INTERNAL;case Re.UNAVAILABLE:return L.UNAVAILABLE;case Re.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Re.NOT_FOUND:return L.NOT_FOUND;case Re.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Re.ABORTED:return L.ABORTED;case Re.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Re.DATA_LOSS:return L.DATA_LOSS;default:return Q()}}(ie=Re||(Re={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function iv(){return new TextEncoder}/**
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
 */const sv=new xn([4294967295,4294967295],0);function Yl(n){const e=iv().encode(n),t=new md;return t.update(e),new Uint8Array(t.digest())}function Jl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new xn([t,r],0),new xn([i,s],0)]}class $a{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Jr(`Invalid padding: ${t}`);if(r<0)throw new Jr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Jr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Jr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=xn.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(xn.fromNumber(r)));return i.compare(sv)===1&&(i=new xn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Yl(e),[r,i]=Jl(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new $a(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=Yl(e),[r,i]=Jl(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Jr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Us{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ti.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Us(Y.min(),i,new ye(ce),Wt(),te())}}class Ti{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ti(r,t,te(),te(),te())}}/**
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
 */class ss{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Hd{constructor(e,t){this.targetId=e,this.me=t}}class Gd{constructor(e,t,r=Ue.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Xl{constructor(){this.fe=0,this.ge=eu(),this.pe=Ue.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),t=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new Ti(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=eu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ov{constructor(e){this.Le=e,this.Be=new Map,this.ke=Wt(),this.qe=Zl(),this.Qe=new ye(ce)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(ea(s))if(r===0){const a=new W(s.path);this.Ue(t,a,Je.newNoDocument(a,Y.min()))}else ue(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=zn(r).toUint8Array()}catch(u){if(u instanceof Td)return hr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new $a(a,i,s)}catch(u){return hr(u instanceof Jr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&ea(l.target)){const u=new W(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Je.newNoDocument(u,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Us(e,t,this.Qe,this.ke,r);return this.ke=Wt(),this.qe=Zl(),this.Qe=new ye(ce),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Xl,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new $e(ce),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Xl),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Zl(){return new ye(W.comparator)}function eu(){return new ye(W.comparator)}const av={asc:"ASCENDING",desc:"DESCENDING"},cv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lv={and:"AND",or:"OR"};class uv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function na(n,e){return n.useProto3Json||Os(e)?e:{value:e}}function ys(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function dv(n,e){return ys(n,e.toTimestamp())}function At(n){return ue(!!n),Y.fromTimestamp(function(t){const r=bn(t);return new Ne(r.seconds,r.nanos)}(n))}function Ua(n,e){return ra(n,e).canonicalString()}function ra(n,e){const t=function(i){return new we(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Kd(n){const e=we.fromString(n);return ue(Zd(e)),e}function ia(n,e){return Ua(n.databaseId,e.path)}function Po(n,e){const t=Kd(e);if(t.get(1)!==n.databaseId.projectId)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new W(Yd(t))}function Qd(n,e){return Ua(n.databaseId,e)}function hv(n){const e=Kd(n);return e.length===4?we.emptyPath():Yd(e)}function sa(n){return new we(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Yd(n){return ue(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function tu(n,e,t){return{name:ia(n,e),fields:t.value.mapValue.fields}}function pv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ue(f===void 0||typeof f=="string"),Ue.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ue.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?L.UNKNOWN:zd(h.code);return new z(f,h.message||"")}(a);t=new Gd(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Po(n,r.document.name),s=At(r.document.updateTime),a=r.document.createTime?At(r.document.createTime):Y.min(),l=new st({mapValue:{fields:r.document.fields}}),u=Je.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new ss(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Po(n,r.document),s=r.readTime?At(r.readTime):Y.min(),a=Je.newNoDocument(i,s),l=r.removedTargetIds||[];t=new ss([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Po(n,r.document),s=r.removedTargetIds||[];t=new ss([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new nv(i,s),l=r.targetId;t=new Hd(l,a)}}return t}function fv(n,e){let t;if(e instanceof Ii)t={update:tu(n,e.key,e.value)};else if(e instanceof La)t={delete:ia(n,e.key)};else if(e instanceof wn)t={update:tu(n,e.key,e.data),updateMask:Iv(e.fieldMask)};else{if(!(e instanceof Zg))return Q();t={verify:ia(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof vs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof pi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof fi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof _s)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:dv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(n,e.precondition)),t}function mv(n,e){return n&&n.length>0?(ue(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?At(i.updateTime):At(s);return a.isEqual(Y.min())&&(a=At(s)),new Yg(a,i.transformResults||[])}(t,e))):[]}function gv(n,e){return{documents:[Qd(n,e.path)]}}function vv(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Qd(n,i);const s=function(h){if(h.length!==0)return Xd(Pt.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:rr(g.field),direction:bv(g.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=na(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function _v(n){let e=hv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ue(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const g=Jd(m);return g instanceof Pt&&Rd(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(g=>function(y){return new gs(ir(y.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(g))}(t.orderBy));let l=null;t.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Os(g)?null:g}(t.limit));let u=null;t.startAt&&(u=function(m){const g=!!m.before,_=m.values||[];return new ms(_,g)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const g=!m.before,_=m.values||[];return new ms(_,g)}(t.endAt)),xg(e,i,a,s,l,"F",u,h)}function yv(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Jd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ir(t.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ir(t.unaryFilter.field);return ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ir(t.unaryFilter.field);return ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ir(t.unaryFilter.field);return ke.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(n):n.fieldFilter!==void 0?function(t){return ke.create(ir(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Pt.create(t.compositeFilter.filters.map(r=>Jd(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(t.compositeFilter.op))}(n):Q()}function bv(n){return av[n]}function Ev(n){return cv[n]}function wv(n){return lv[n]}function rr(n){return{fieldPath:n.canonicalString()}}function ir(n){return Fe.fromServerFormat(n.fieldPath)}function Xd(n){return n instanceof ke?function(t){if(t.op==="=="){if(jl(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NAN"}};if(Ul(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(jl(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NOT_NAN"}};if(Ul(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rr(t.field),op:Ev(t.op),value:t.value}}}(n):n instanceof Pt?function(t){const r=t.getFilters().map(i=>Xd(i));return r.length===1?r[0]:{compositeFilter:{op:wv(t.op),filters:r}}}(n):Q()}function Iv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Zd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class hn{constructor(e,t,r,i,s=Y.min(),a=Y.min(),l=Ue.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new hn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Tv{constructor(e){this.ct=e}}function Av(n){const e=_v({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ta(e,e.limit,"L"):e}/**
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
 */class Cv{constructor(){this.un=new Sv}addToCollectionParentIndex(e,t){return this.un.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(yn.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(yn.min())}updateCollectionGroup(e,t,r){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class Sv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new $e(we.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new $e(we.comparator)).toArray()}}/**
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
 */class gr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new gr(0)}static kn(){return new gr(-1)}}/**
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
 */class Rv{constructor(){this.changes=new Cr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?M.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Pv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class kv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&ri(r.mutation,i,lt.empty(),Ne.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,t,r=te()){const i=On();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Yr();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=On();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,te()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=Wt();const a=ni(),l=function(){return ni()}();return t.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof wn)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ri(f.mutation,h,f.mutation.getFieldMask(),Ne.now())):a.set(h.key,lt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var m;return l.set(h,new Pv(f,(m=a.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,t){const r=ni();let i=new ye((a,l)=>a-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||lt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=xd();f.forEach(g=>{if(!s.has(g)){const _=Bd(t.get(g),r.get(g));_!==null&&m.set(g,_),s=s.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return W.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Lg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):M.resolve(On());let l=-1,u=s;return a.next(h=>M.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,te())).next(f=>({batchId:l,changes:Md(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new W(t)).next(r=>{let i=Yr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=Yr();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(m,g){return new Ms(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,g)=>{a=a.insert(m,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Je.newInvalidDocument(f)))});let l=Yr();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&ri(f.mutation,h,lt.empty(),Ne.now()),Ls(t,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class Nv{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return M.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:At(i.createTime)}}(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Av(i.bundledQuery),readTime:At(i.readTime)}}(t)),M.resolve()}}/**
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
 */class Dv{constructor(){this.overlays=new ye(W.comparator),this.Ir=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const r=On();return M.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),M.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,t,r){const i=On(),s=t.length+1,a=new W(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ye((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=On(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=On(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new tv(t,r));let s=this.Ir.get(t);s===void 0&&(s=te(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
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
 */class Vv{constructor(){this.sessionToken=Ue.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
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
 */class ja{constructor(){this.Tr=new $e(Ve.Er),this.dr=new $e(Ve.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Ve(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Ve(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new W(new we([])),r=new Ve(t,e),i=new Ve(t,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new W(new we([])),r=new Ve(t,e),i=new Ve(t,e+1);let s=te();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new Ve(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return W.comparator(e.key,t.key)||ce(e.wr,t.wr)}static Ar(e,t){return ce(e.wr,t.wr)||W.comparator(e.key,t.key)}}/**
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
 */class Ov{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new $e(Ve.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ev(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,t){return M.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ve(t,0),i=new Ve(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new $e(ce);return t.forEach(i=>{const s=new Ve(i,0),a=new Ve(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const a=new Ve(new W(s),0);let l=new $e(ce);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},a),M.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ue(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(t.mutations,i=>{const s=new Ve(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Ve(t,0),i=this.br.firstAfterOrEqual(r);return M.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Mv{constructor(e){this.Mr=e,this.docs=function(){return new ye(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return M.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(t))}getEntries(e,t){let r=Wt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Je.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Wt();const a=t.path,l=new W(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||vg(gg(f),r)<=0||(i.has(f.key)||Ls(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,t,r,i){Q()}Or(e,t){return M.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new xv(this)}getSize(e){return M.resolve(this.size)}}class xv extends Rv{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class Lv{constructor(e){this.persistence=e,this.Nr=new Cr(t=>Va(t),Oa),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ja,this.targetCount=0,this.kr=gr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),M.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new gr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.Kn(t),M.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return M.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),M.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),M.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return M.resolve(r)}containsKey(e,t){return M.resolve(this.Br.containsKey(t))}}/**
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
 */class Fv{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Pa(0),this.Kr=!1,this.Kr=!0,this.$r=new Vv,this.referenceDelegate=e(this),this.Ur=new Lv(this),this.indexManager=new Cv,this.remoteDocumentCache=function(i){return new Mv(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Tv(t),this.Gr=new Nv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Dv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Ov(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const i=new $v(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class $v extends yg{constructor(e){super(),this.currentSequenceNumber=e}}class Ba{constructor(e){this.persistence=e,this.Jr=new ja,this.Yr=null}static Zr(e){return new Ba(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),M.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=W.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return M.or([()=>M.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class qa{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=te(),i=te();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new qa(e,t.fromCache,r,i)}}/**
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
 */class Uv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class jv{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return jf()?8:bg(Xe())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Uv;return this.Xi(e,t,a).next(l=>{if(s.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Hr()<=ne.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",nr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(Hr()<=ne.DEBUG&&q("QueryEngine","Query:",nr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Hr()<=ne.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",nr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tt(t))):M.resolve())}Yi(e,t){if(Hl(t))return M.resolve(null);let r=Tt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ta(t,null,"F"),r=Tt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=te(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(t,l);return this.ns(t,h,a,u.readTime)?this.Yi(e,ta(t,null,"F")):this.rs(e,h,t,u)}))})))}Zi(e,t,r,i){return Hl(t)||i.isEqual(Y.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(t,s);return this.ns(t,a,r,i)?M.resolve(null):(Hr()<=ne.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),nr(t)),this.rs(e,a,t,mg(i,-1)).next(l=>l))})}ts(e,t){let r=new $e(Vd(e));return t.forEach((i,s)=>{Ls(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return Hr()<=ne.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",nr(t)),this.Ji.getDocumentsMatchingQuery(e,t,yn.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class Bv{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new ye(ce),this._s=new Cr(s=>Va(s),Oa),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kv(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function qv(n,e,t,r){return new Bv(n,e,t,r)}async function eh(n,e){const t=J(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=te();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function zv(n,e){const t=J(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,g=m.keys();let _=M.resolve();return g.forEach(y=>{_=_.next(()=>f.getEntry(u,y)).next(I=>{const P=h.docVersions.get(y);ue(P!==null),I.version.compareTo(P)<0&&(m.applyToRemoteDocument(I,h),I.isValidDocument()&&(I.setReadTime(h.commitVersion),f.addEntry(I)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function th(n){const e=J(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Hv(n,e){const t=J(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,m)));let _=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(Ue.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),i=i.insert(m,_),function(I,P,x){return I.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,_,f)&&l.push(t.Ur.updateTargetData(s,_))});let u=Wt(),h=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Gv(s,a,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Y.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(m=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.os=i,s))}function Gv(n,e,t){let r=te(),i=te();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Wt();return t.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function Wv(n,e){const t=J(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Kv(n,e){const t=J(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new hn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function oa(n,e,t){const r=J(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!wi(a))throw a;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function nu(n,e,t){const r=J(n);let i=Y.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const m=J(u),g=m._s.get(f);return g!==void 0?M.resolve(m.os.get(g)):m.Ur.getTargetData(h,f)}(r,a,Tt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:Y.min(),t?s:te())).next(l=>(Qv(r,$g(e),l),{documents:l,Ts:s})))}function Qv(n,e,t){let r=n.us.get(e)||Y.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}class ru{constructor(){this.activeTargetIds=Hg()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Yv{constructor(){this.so=new ru,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ru,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Jv{_o(e){}shutdown(){}}/**
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
 */class iu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xi=null;function ko(){return Xi===null?Xi=function(){return 268435456+Math.round(2147483648*Math.random())}():Xi++,"0x"+Xi.toString(16)}/**
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
 */const Xv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Zv{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ze="WebChannelConnection";class e_ extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,a){const l=ko(),u=this.xo(t,r.toUriEncodedString());q("RestConnection",`Sending RPC '${t}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(t,u,h,i).then(f=>(q("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw hr("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(t,r,i,s,a,l){return this.Mo(t,r,i,s,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ar}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}xo(t,r){const i=Xv[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=ko();return new Promise((a,l)=>{const u=new gd;u.setWithCredentials(!0),u.listenOnce(vd.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ns.NO_ERROR:const f=u.getResponseJson();q(ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case ns.TIMEOUT:q(ze,`RPC '${e}' ${s} timed out`),l(new z(L.DEADLINE_EXCEEDED,"Request time out"));break;case ns.HTTP_ERROR:const m=u.getStatus();if(q(ze,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g?.error;if(_&&_.status&&_.message){const y=function(P){const x=P.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(x)>=0?x:L.UNKNOWN}(_.status);l(new z(y,_.message))}else l(new z(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new z(L.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{q(ze,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);q(ze,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",h,r,15)})}Bo(e,t,r){const i=ko(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=bd(),l=yd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");q(ze,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=a.createWebChannel(f,u);let g=!1,_=!1;const y=new Zv({Io:P=>{_?q(ze,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(g||(q(ze,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),q(ze,`RPC '${e}' stream ${i} sending:`,P),m.send(P))},To:()=>m.close()}),I=(P,x,F)=>{P.listen(x,O=>{try{F(O)}catch($){setTimeout(()=>{throw $},0)}})};return I(m,Qr.EventType.OPEN,()=>{_||(q(ze,`RPC '${e}' stream ${i} transport opened.`),y.yo())}),I(m,Qr.EventType.CLOSE,()=>{_||(_=!0,q(ze,`RPC '${e}' stream ${i} transport closed`),y.So())}),I(m,Qr.EventType.ERROR,P=>{_||(_=!0,hr(ze,`RPC '${e}' stream ${i} transport errored:`,P),y.So(new z(L.UNAVAILABLE,"The operation could not be completed")))}),I(m,Qr.EventType.MESSAGE,P=>{var x;if(!_){const F=P.data[0];ue(!!F);const O=F,$=O.error||((x=O[0])===null||x===void 0?void 0:x.error);if($){q(ze,`RPC '${e}' stream ${i} received error:`,$);const U=$.status;let V=function(w){const A=Re[w];if(A!==void 0)return zd(A)}(U),T=$.message;V===void 0&&(V=L.INTERNAL,T="Unknown error status: "+U+" with message "+$.message),_=!0,y.So(new z(V,T)),m.close()}else q(ze,`RPC '${e}' stream ${i} received:`,F),y.bo(F)}}),I(l,_d.STAT_EVENT,P=>{P.stat===Yo.PROXY?q(ze,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Yo.NOPROXY&&q(ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.wo()},0),y}}function No(){return typeof document<"u"?document:null}/**
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
 */function js(n){return new uv(n,!0)}/**
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
 */class nh{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class rh{constructor(e,t,r,i,s,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new nh(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(Gt(t.toString()),Gt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new z(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class t_ extends rh{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=pv(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?Y.min():a.readTime?At(a.readTime):Y.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=sa(this.serializer),t.addTarget=function(s,a){let l;const u=a.target;if(l=ea(u)?{documents:gv(s,u)}:{query:vv(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Wd(s,a.resumeToken);const h=na(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(Y.min())>0){l.readTime=ys(s,a.snapshotVersion.toTimestamp());const h=na(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=yv(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=sa(this.serializer),t.removeTarget=e,this.a_(t)}}class n_ extends rh{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ue(!!e.streamToken),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=mv(e.writeResults,e.commitTime),r=At(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=sa(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>fv(this.serializer,r))};this.a_(t)}}/**
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
 */class r_ extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,ra(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(L.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,ra(t,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new z(L.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class i_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Gt(t),this.D_=!1):q("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class s_{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{Qn(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=J(u);h.L_.add(4),await Ai(h),h.q_.set("Unknown"),h.L_.delete(4),await Bs(h)}(this))})}),this.q_=new i_(r,i)}}async function Bs(n){if(Qn(n))for(const e of n.B_)await e(!0)}async function Ai(n){for(const e of n.B_)await e(!1)}function ih(n,e){const t=J(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Wa(t)?Ga(t):Sr(t).r_()&&Ha(t,e))}function za(n,e){const t=J(n),r=Sr(t);t.N_.delete(e),r.r_()&&sh(t,e),t.N_.size===0&&(r.r_()?r.o_():Qn(t)&&t.q_.set("Unknown"))}function Ha(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Sr(n).A_(e)}function sh(n,e){n.Q_.xe(e),Sr(n).R_(e)}function Ga(n){n.Q_=new ov({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Sr(n).start(),n.q_.v_()}function Wa(n){return Qn(n)&&!Sr(n).n_()&&n.N_.size>0}function Qn(n){return J(n).L_.size===0}function oh(n){n.Q_=void 0}async function o_(n){n.q_.set("Online")}async function a_(n){n.N_.forEach((e,t)=>{Ha(n,e)})}async function c_(n,e){oh(n),Wa(n)?(n.q_.M_(e),Ga(n)):n.q_.set("Unknown")}async function l_(n,e,t){if(n.q_.set("Online"),e instanceof Gd&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bs(n,r)}else if(e instanceof ss?n.Q_.Ke(e):e instanceof Hd?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Y.min()))try{const r=await th(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Ue.EMPTY_BYTE_STRING,f.snapshotVersion)),sh(s,u);const m=new hn(f.target,u,h,f.sequenceNumber);Ha(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await bs(n,r)}}async function bs(n,e,t){if(!wi(e))throw e;n.L_.add(1),await Ai(n),n.q_.set("Offline"),t||(t=()=>th(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Bs(n)})}function ah(n,e){return e().catch(t=>bs(n,t,e))}async function qs(n){const e=J(n),t=En(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;u_(e);)try{const i=await Wv(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,d_(e,i)}catch(i){await bs(e,i)}ch(e)&&lh(e)}function u_(n){return Qn(n)&&n.O_.length<10}function d_(n,e){n.O_.push(e);const t=En(n);t.r_()&&t.V_&&t.m_(e.mutations)}function ch(n){return Qn(n)&&!En(n).n_()&&n.O_.length>0}function lh(n){En(n).start()}async function h_(n){En(n).p_()}async function p_(n){const e=En(n);for(const t of n.O_)e.m_(t.mutations)}async function f_(n,e,t){const r=n.O_.shift(),i=Fa.from(r,e,t);await ah(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await qs(n)}async function m_(n,e){e&&En(n).V_&&await async function(r,i){if(function(a){return rv(a)&&a!==L.ABORTED}(i.code)){const s=r.O_.shift();En(r).s_(),await ah(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await qs(r)}}(n,e),ch(n)&&lh(n)}async function su(n,e){const t=J(n);t.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Qn(t);t.L_.add(3),await Ai(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Bs(t)}async function g_(n,e){const t=J(n);e?(t.L_.delete(2),await Bs(t)):e||(t.L_.add(2),await Ai(t),t.q_.set("Unknown"))}function Sr(n){return n.K_||(n.K_=function(t,r,i){const s=J(t);return s.w_(),new t_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:o_.bind(null,n),Ro:a_.bind(null,n),mo:c_.bind(null,n),d_:l_.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Wa(n)?Ga(n):n.q_.set("Unknown")):(await n.K_.stop(),oh(n))})),n.K_}function En(n){return n.U_||(n.U_=function(t,r,i){const s=J(t);return s.w_(),new n_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:h_.bind(null,n),mo:m_.bind(null,n),f_:p_.bind(null,n),g_:f_.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await qs(n)):(await n.U_.stop(),n.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Ka{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new Ka(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qa(n,e){if(Gt("AsyncQueue",`${e}: ${n}`),wi(n))return new z(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class or{constructor(e){this.comparator=e?(t,r)=>e(t,r)||W.comparator(t.key,r.key):(t,r)=>W.comparator(t.key,r.key),this.keyedMap=Yr(),this.sortedSet=new ye(this.comparator)}static emptySet(e){return new or(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof or)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new or;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class ou{constructor(){this.W_=new ye(W.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class vr{constructor(e,t,r,i,s,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new vr(e,t,or.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class v_{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class __{constructor(){this.queries=au(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=J(t),s=i.queries;i.queries=au(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new z(L.ABORTED,"Firestore shutting down"))}}function au(){return new Cr(n=>Dd(n),xs)}async function y_(n,e){const t=J(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new v_,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=Qa(a,`Initialization of query '${nr(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&Ya(t)}async function b_(n,e){const t=J(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function E_(n,e){const t=J(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&Ya(t)}function w_(n,e,t){const r=J(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function Ya(n){n.Y_.forEach(e=>{e.next()})}var aa,cu;(cu=aa||(aa={})).ea="default",cu.Cache="cache";class I_{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new vr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=vr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==aa.Cache}}/**
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
 */class uh{constructor(e){this.key=e}}class dh{constructor(e){this.key=e}}class T_{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=Vd(e),this.Ra=new or(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new ou,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),_=Ls(this.query,m)?m:null,y=!!g&&this.mutatedKeys.has(g.key),I=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let P=!1;g&&_?g.data.isEqual(_.data)?y!==I&&(r.track({type:3,doc:_}),P=!0):this.ga(g,_)||(r.track({type:2,doc:_}),P=!0,(u&&this.Aa(_,u)>0||h&&this.Aa(_,h)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),P=!0):g&&!_&&(r.track({type:1,doc:g}),P=!0,(u||h)&&(l=!0)),P&&(_?(a=a.add(_),s=I?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,m)=>function(_,y){const I=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return I(_)-I(y)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new vr(this.query,e.Ra,s,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ou,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new dh(r))}),this.da.forEach(r=>{e.has(r)||t.push(new uh(r))}),t}ba(e){this.Ta=e.Ts,this.da=te();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return vr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class A_{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class C_{constructor(e){this.key=e,this.va=!1}}class S_{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Cr(l=>Dd(l),xs),this.Ma=new Map,this.xa=new Set,this.Oa=new ye(W.comparator),this.Na=new Map,this.La=new ja,this.Ba={},this.ka=new Map,this.qa=gr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function R_(n,e,t=!0){const r=vh(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await hh(r,e,t,!0),i}async function P_(n,e){const t=vh(n);await hh(t,e,!0,!1)}async function hh(n,e,t,r){const i=await Kv(n.localStore,Tt(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await k_(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&ih(n.remoteStore,i),l}async function k_(n,e,t,r,i){n.Ka=(m,g,_)=>async function(I,P,x,F){let O=P.view.ma(x);O.ns&&(O=await nu(I.localStore,P.query,!1).then(({documents:T})=>P.view.ma(T,O)));const $=F&&F.targetChanges.get(P.targetId),U=F&&F.targetMismatches.get(P.targetId)!=null,V=P.view.applyChanges(O,I.isPrimaryClient,$,U);return uu(I,P.targetId,V.wa),V.snapshot}(n,m,g,_);const s=await nu(n.localStore,e,!0),a=new T_(e,s.Ts),l=a.ma(s.documents),u=Ti.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,u);uu(n,t,h.wa);const f=new A_(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function N_(n,e,t){const r=J(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!xs(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await oa(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&za(r.remoteStore,i.targetId),ca(r,i.targetId)}).catch(Ei)):(ca(r,i.targetId),await oa(r.localStore,i.targetId,!0))}async function D_(n,e){const t=J(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),za(t.remoteStore,r.targetId))}async function V_(n,e,t){const r=U_(n);try{const i=await function(a,l){const u=J(a),h=Ne.now(),f=l.reduce((_,y)=>_.add(y.key),te());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let y=Wt(),I=te();return u.cs.getEntries(_,f).next(P=>{y=P,y.forEach((x,F)=>{F.isValidDocument()||(I=I.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,y)).next(P=>{m=P;const x=[];for(const F of l){const O=Xg(F,m.get(F.key).overlayedDocument);O!=null&&x.push(new wn(F.key,O,Ad(O.value.mapValue),ft.exists(!0)))}return u.mutationQueue.addMutationBatch(_,h,x,l)}).next(P=>{g=P;const x=P.applyToLocalDocumentSet(m,I);return u.documentOverlayCache.saveOverlays(_,P.batchId,x)})}).then(()=>({batchId:g.batchId,changes:Md(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new ye(ce)),h=h.insert(l,u),a.Ba[a.currentUser.toKey()]=h}(r,i.batchId,t),await Ci(r,i.changes),await qs(r.remoteStore)}catch(i){const s=Qa(i,"Failed to persist write");t.reject(s)}}async function ph(n,e){const t=J(n);try{const r=await Hv(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Na.get(s);a&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?ue(a.va):i.removedDocuments.size>0&&(ue(a.va),a.va=!1))}),await Ci(t,r,e)}catch(r){await Ei(r)}}function lu(n,e,t){const r=J(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=J(a);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(h=!0)}),h&&Ya(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function O_(n,e,t){const r=J(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let a=new ye(W.comparator);a=a.insert(s,Je.newNoDocument(s,Y.min()));const l=te().add(s),u=new Us(Y.min(),new Map,new ye(ce),a,l);await ph(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Ja(r)}else await oa(r.localStore,e,!1).then(()=>ca(r,e,t)).catch(Ei)}async function M_(n,e){const t=J(n),r=e.batch.batchId;try{const i=await zv(t.localStore,e);mh(t,r,null),fh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ci(t,i)}catch(i){await Ei(i)}}async function x_(n,e,t){const r=J(n);try{const i=await function(a,l){const u=J(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(ue(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);mh(r,e,t),fh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ci(r,i)}catch(i){await Ei(i)}}function fh(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function mh(n,e,t){const r=J(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function ca(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||gh(n,r)})}function gh(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(za(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Ja(n))}function uu(n,e,t){for(const r of t)r instanceof uh?(n.La.addReference(r.key,e),L_(n,r)):r instanceof dh?(q("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||gh(n,r.key)):Q()}function L_(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(q("SyncEngine","New document in limbo: "+t),n.xa.add(r),Ja(n))}function Ja(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new W(we.fromString(e)),r=n.qa.next();n.Na.set(r,new C_(t)),n.Oa=n.Oa.insert(t,r),ih(n.remoteStore,new hn(Tt(Ma(t.path)),r,"TargetPurposeLimboResolution",Pa.oe))}}async function Ci(n,e,t){const r=J(n),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t?.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=qa.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,h){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(h,g=>M.forEach(g.$i,_=>f.persistence.referenceDelegate.addReference(m,g.targetId,_)).next(()=>M.forEach(g.Ui,_=>f.persistence.referenceDelegate.removeReference(m,g.targetId,_)))))}catch(m){if(!wi(m))throw m;q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const _=f.os.get(g),y=_.snapshotVersion,I=_.withLastLimboFreeSnapshotVersion(y);f.os=f.os.insert(g,I)}}}(r.localStore,s))}async function F_(n,e){const t=J(n);if(!t.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await eh(t.localStore,e);t.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new z(L.CANCELLED,a))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ci(t,r.hs)}}function $_(n,e){const t=J(n),r=t.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=t.Ma.get(e);if(!s)return i;for(const a of s){const l=t.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function vh(n){const e=J(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ph.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=O_.bind(null,e),e.Ca.d_=E_.bind(null,e.eventManager),e.Ca.$a=w_.bind(null,e.eventManager),e}function U_(n){const e=J(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=M_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=x_.bind(null,e),e}class Es{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=js(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return qv(this.persistence,new jv,e.initialUser,this.serializer)}Ga(e){return new Fv(Ba.Zr,this.serializer)}Wa(e){return new Yv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Es.provider={build:()=>new Es};class la{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=F_.bind(null,this.syncEngine),await g_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new __}()}createDatastore(e){const t=js(e.databaseInfo.databaseId),r=function(s){return new e_(s)}(e.databaseInfo);return function(s,a,l,u){return new r_(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new s_(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>lu(this.syncEngine,t,0),function(){return iu.D()?new iu:new Jv}())}createSyncEngine(e,t){return function(i,s,a,l,u,h,f){const m=new S_(i,s,a,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=J(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ai(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}la.provider={build:()=>new la};/**
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
 */class j_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Gt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class B_{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Qe.UNAUTHENTICATED,this.clientId=wd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{q("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(q("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Qa(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Do(n,e){n.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function du(n,e){n.asyncQueue.verifyOperationInProgress();const t=await q_(n);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>su(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>su(e.remoteStore,i)),n._onlineComponents=e}async function q_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Do(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;hr("Error using user provided cache. Falling back to memory cache: "+t),await Do(n,new Es)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Do(n,new Es);return n._offlineComponents}async function _h(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await du(n,n._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await du(n,new la))),n._onlineComponents}function z_(n){return _h(n).then(e=>e.syncEngine)}async function hu(n){const e=await _h(n),t=e.eventManager;return t.onListen=R_.bind(null,e.syncEngine),t.onUnlisten=N_.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=P_.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=D_.bind(null,e.syncEngine),t}/**
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
 */function yh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const pu=new Map;/**
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
 */function H_(n,e,t){if(!t)throw new z(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function G_(n,e,t,r){if(e===!0&&r===!0)throw new z(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function fu(n){if(!W.isDocumentKey(n))throw new z(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Xa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Q()}function Fn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new z(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xa(n);throw new z(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class mu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}G_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Za{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new og;switch(r.type){case"firstParty":return new ug(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=pu.get(t);r&&(q("ComponentProvider","Removing Datastore"),pu.delete(t),r.terminate())}(this),Promise.resolve()}}function W_(n,e,t,r={}){var i;const s=(n=Fn(n,Za))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&hr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Qe.MOCK_USER;else{l=Of(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new z(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Qe(h)}n._authCredentials=new ag(new Ed(l,u))}}/**
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
 */class zs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zs(this.firestore,e,this._query)}}class mt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}}class mi extends zs{constructor(e,t,r){super(e,t,Ma(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new W(e))}withConverter(e){return new mi(this.firestore,e,this._path)}}function K_(n,e,...t){if(n=Oe(n),arguments.length===1&&(e=wd.newId()),H_("doc","path",e),n instanceof Za){const r=we.fromString(e,...t);return fu(r),new mt(n,null,new W(r))}{if(!(n instanceof mt||n instanceof mi))throw new z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(we.fromString(e,...t));return fu(r),new mt(n.firestore,n instanceof mi?n.converter:null,new W(r))}}/**
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
 */class gu{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new nh(this,"async_queue_retry"),this.Vu=()=>{const r=No();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=No();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=No();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Ln;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!wi(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Gt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Ka.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function vu(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class gi extends Za{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new gu,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gu(e),this._firestoreClient=void 0,await e}}}function Q_(n,e){const t=typeof n=="object"?n:hd(),r=typeof n=="string"?n:"(default)",i=Sa(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Df("firestore");s&&W_(i,...s)}return i}function ec(n){if(n._terminated)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Y_(n),n._firestoreClient}function Y_(n){var e,t,r;const i=n._freezeSettings(),s=function(l,u,h,f){return new Ig(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,yh(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new B_(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l?._online.build();return{_offline:l?._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class _r{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _r(Ue.fromBase64String(e))}catch(t){throw new z(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _r(Ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Hs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class tc{constructor(e){this._methodName=e}}/**
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
 */class nc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */class rc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const J_=/^__.*__$/;class X_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new wn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ii(e,this.data,t,this.fieldTransforms)}}class bh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new wn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Eh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class ic{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ic(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ws(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Eh(this.Cu)&&J_.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Z_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||js(e)}Qu(e,t,r,i=!1){return new ic({Cu:e,methodName:t,qu:r,path:Fe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wh(n){const e=n._freezeSettings(),t=js(n._databaseId);return new Z_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ih(n,e,t,r,i,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);sc("Data must be an object, but it was:",a,r);const l=Th(r,a);let u,h;if(s.merge)u=new lt(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=ua(e,m,t);if(!a.contains(g))throw new z(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Ch(f,g)||f.push(g)}u=new lt(f),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new X_(new st(l),u,h)}class Gs extends tc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gs}}function ey(n,e,t,r){const i=n.Qu(1,e,t);sc("Data must be an object, but it was:",i,r);const s=[],a=st.empty();Kn(r,(u,h)=>{const f=oc(e,u,t);h=Oe(h);const m=i.Nu(f);if(h instanceof Gs)s.push(f);else{const g=Ws(h,m);g!=null&&(s.push(f),a.set(f,g))}});const l=new lt(s);return new bh(a,l,i.fieldTransforms)}function ty(n,e,t,r,i,s){const a=n.Qu(1,e,t),l=[ua(e,r,t)],u=[i];if(s.length%2!=0)throw new z(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(ua(e,s[g])),u.push(s[g+1]);const h=[],f=st.empty();for(let g=l.length-1;g>=0;--g)if(!Ch(h,l[g])){const _=l[g];let y=u[g];y=Oe(y);const I=a.Nu(_);if(y instanceof Gs)h.push(_);else{const P=Ws(y,I);P!=null&&(h.push(_),f.set(_,P))}}const m=new lt(h);return new bh(f,m,a.fieldTransforms)}function Ws(n,e){if(Ah(n=Oe(n)))return sc("Unsupported field value:",e,n),Th(n,e);if(n instanceof tc)return function(r,i){if(!Eh(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=Ws(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Gg(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ne.fromDate(r);return{timestampValue:ys(i.serializer,s)}}if(r instanceof Ne){const s=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ys(i.serializer,s)}}if(r instanceof nc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _r)return{bytesValue:Wd(i.serializer,r._byteString)};if(r instanceof mt){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ua(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof rc)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return xa(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Xa(r)}`)}(n,e)}function Th(n,e){const t={};return Id(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kn(n,(r,i)=>{const s=Ws(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Ah(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ne||n instanceof nc||n instanceof _r||n instanceof mt||n instanceof tc||n instanceof rc)}function sc(n,e,t){if(!Ah(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Xa(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function ua(n,e,t){if((e=Oe(e))instanceof Hs)return e._internalPath;if(typeof e=="string")return oc(n,e);throw ws("Field path arguments must be of type string or ",n,!1,void 0,t)}const ny=new RegExp("[~\\*/\\[\\]]");function oc(n,e,t){if(e.search(ny)>=0)throw ws(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Hs(...e.split("."))._internalPath}catch{throw ws(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ws(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new z(L.INVALID_ARGUMENT,l+n+u)}function Ch(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Sh{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ry(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Rh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ry extends Sh{data(){return super.data()}}function Rh(n,e){return typeof e=="string"?oc(n,e):e instanceof Hs?e._internalPath:e._delegate._internalPath}/**
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
 */function iy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new z(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sy{convertValue(e,t="none"){switch(Hn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Kn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>Se(a.doubleValue));return new rc(s)}convertGeoPoint(e){return new nc(Se(e.latitude),Se(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Na(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ui(e));default:return null}}convertTimestamp(e){const t=bn(e);return new Ne(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=we.fromString(e);ue(Zd(r));const i=new di(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(t)||Gt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function Ph(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class Xr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kh extends Sh{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new os(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Rh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class os extends kh{data(e={}){return super.data(e)}}class oy{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Xr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new os(this._firestore,this._userDataWriter,r.key,r,new Xr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new os(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Xr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new os(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Xr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:ay(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ay(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class Nh extends sy{constructor(e){super(),this.firestore=e}convertBytes(e){return new _r(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,t)}}function cy(n,e,t){n=Fn(n,mt);const r=Fn(n.firestore,gi),i=Ph(n.converter,e,t);return Dh(r,[Ih(wh(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ft.none())])}function ly(n,...e){var t,r,i;n=Oe(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||vu(e[a])||(s=e[a],a++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(vu(e[a])){const m=e[a];e[a]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[a+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[a+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(n instanceof mt)h=Fn(n.firestore,gi),f=Ma(n._key.path),u={next:m=>{e[a]&&e[a](uy(h,n,m))},error:e[a+1],complete:e[a+2]};else{const m=Fn(n,zs);h=Fn(m.firestore,gi),f=m._query;const g=new Nh(h);u={next:_=>{e[a]&&e[a](new oy(h,g,m,_))},error:e[a+1],complete:e[a+2]},iy(n._query)}return function(g,_,y,I){const P=new j_(I),x=new I_(_,P,y);return g.asyncQueue.enqueueAndForget(async()=>y_(await hu(g),x)),()=>{P.Za(),g.asyncQueue.enqueueAndForget(async()=>b_(await hu(g),x))}}(ec(h),f,l,u)}function Dh(n,e){return function(r,i){const s=new Ln;return r.asyncQueue.enqueueAndForget(async()=>V_(await z_(r),i,s)),s.promise}(ec(n),e)}function uy(n,e,t){const r=t.docs.get(e._key),i=new Nh(n);return new kh(n,i,e._key,r,new Xr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class dy{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=wh(e)}set(e,t,r){this._verifyNotCommitted();const i=Vo(e,this._firestore),s=Ph(i.converter,t,r),a=Ih(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,ft.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Vo(e,this._firestore);let a;return a=typeof(t=Oe(t))=="string"||t instanceof Hs?ty(this._dataReader,"WriteBatch.update",s._key,t,r,i):ey(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(a.toMutation(s._key,ft.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Vo(e,this._firestore);return this._mutations=this._mutations.concat(new La(t._key,ft.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Vo(n,e){if((n=Oe(n)).firestore!==e)throw new z(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function hy(n){return ec(n=Fn(n,gi)),new dy(n,e=>Dh(n,e))}(function(e,t=!0){(function(i){Ar=i})(Tr),dr(new Bn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new gi(new cg(r.getProvider("auth-internal")),new hg(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new z(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new di(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),mn(Ml,"4.7.3",e),mn(Ml,"4.7.3","esm2017")})();function ac(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Vh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const py=Vh,Oh=new yi("auth","Firebase",Vh());/**
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
 */const Is=new Aa("@firebase/auth");function fy(n,...e){Is.logLevel<=ne.WARN&&Is.warn(`Auth (${Tr}): ${n}`,...e)}function as(n,...e){Is.logLevel<=ne.ERROR&&Is.error(`Auth (${Tr}): ${n}`,...e)}/**
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
 */function kt(n,...e){throw lc(n,...e)}function bt(n,...e){return lc(n,...e)}function cc(n,e,t){const r=Object.assign(Object.assign({},py()),{[e]:t});return new yi("auth","Firebase",r).create(e,{appName:n.name})}function gn(n){return cc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mh(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&kt(n,"argument-error"),cc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Oh.create(n,...e)}function K(n,e,...t){if(!n)throw lc(e,...t)}function Bt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw as(e),new Error(e)}function Kt(n,e){n||Bt(e)}/**
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
 */function da(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function my(){return _u()==="http:"||_u()==="https:"}function _u(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function gy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(my()||Ff()||"connection"in navigator)?navigator.onLine:!0}function vy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Si{constructor(e,t){this.shortDelay=e,this.longDelay=t,Kt(t>e,"Short delay should be less than long delay!"),this.isMobile=Mf()||$f()}get(){return gy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function uc(n,e){Kt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class xh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _y={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const yy=new Si(3e4,6e4);function dc(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Rr(n,e,t,r,i={}){return Lh(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=bi(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},s);return Lf()||(h.referrerPolicy="no-referrer"),xh.fetch()(Fh(n,n.config.apiHost,t,l),h)})}async function Lh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},_y),e);try{const i=new Ey(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Zi(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Zi(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Zi(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw cc(n,f,h);kt(n,f)}}catch(i){if(i instanceof Yt)throw i;kt(n,"network-request-failed",{message:String(i)})}}async function by(n,e,t,r,i={}){const s=await Rr(n,e,t,r,i);return"mfaPendingCredential"in s&&kt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Fh(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?uc(n.config,i):`${n.config.apiScheme}://${i}`}class Ey{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(bt(this.auth,"network-request-failed")),yy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=bt(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function wy(n,e){return Rr(n,"POST","/v1/accounts:delete",e)}async function $h(n,e){return Rr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ii(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Iy(n,e=!1){const t=Oe(n),r=await t.getIdToken(e),i=hc(r);K(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:ii(Oo(i.auth_time)),issuedAtTime:ii(Oo(i.iat)),expirationTime:ii(Oo(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Oo(n){return Number(n)*1e3}function hc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return as("JWT malformed, contained fewer than 3 sections"),null;try{const i=sd(t);return i?JSON.parse(i):(as("Failed to decode base64 JWT payload"),null)}catch(i){return as("Caught error parsing JWT payload as JSON",i?.toString()),null}}function yu(n){const e=hc(n);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Yt&&Ty(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ty({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Ay{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ha{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ts(n){var e;const t=n.auth,r=await n.getIdToken(),i=await vi(n,$h(t,{idToken:r}));K(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Uh(s.providerUserInfo):[],l=Sy(n.providerData,a),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!l?.length,f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ha(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function Cy(n){const e=Oe(n);await Ts(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sy(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Uh(n){return n.map(e=>{var{providerId:t}=e,r=ac(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ry(n,e){const t=await Lh(n,{},async()=>{const r=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Fh(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",xh.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Py(n,e){return Rr(n,"POST","/v2/accounts:revokeToken",dc(n,e))}/**
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
 */class ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){K(e.length!==0,"internal-error");const t=yu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ry(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new ar;return r&&(K(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ar,this.toJSON())}_performRefresh(){return Bt("not implemented")}}/**
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
 */function tn(n,e){K(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ac(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ay(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ha(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await vi(this,this.stsTokenManager.getToken(this.auth,e));return K(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Iy(this,e)}reload(){return Cy(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ts(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(gn(this.auth));const e=await this.getIdToken();return await vi(this,wy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,u,h,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,_=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,y=(a=t.photoURL)!==null&&a!==void 0?a:void 0,I=(l=t.tenantId)!==null&&l!==void 0?l:void 0,P=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,x=(h=t.createdAt)!==null&&h!==void 0?h:void 0,F=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:O,emailVerified:$,isAnonymous:U,providerData:V,stsTokenManager:T}=t;K(O&&T,e,"internal-error");const E=ar.fromJSON(this.name,T);K(typeof O=="string",e,"internal-error"),tn(m,e.name),tn(g,e.name),K(typeof $=="boolean",e,"internal-error"),K(typeof U=="boolean",e,"internal-error"),tn(_,e.name),tn(y,e.name),tn(I,e.name),tn(P,e.name),tn(x,e.name),tn(F,e.name);const w=new qt({uid:O,auth:e,email:g,emailVerified:$,displayName:m,isAnonymous:U,photoURL:y,phoneNumber:_,tenantId:I,stsTokenManager:E,createdAt:x,lastLoginAt:F});return V&&Array.isArray(V)&&(w.providerData=V.map(A=>Object.assign({},A))),P&&(w._redirectEventId=P),w}static async _fromIdTokenResponse(e,t,r=!1){const i=new ar;i.updateFromServerResponse(t);const s=new qt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ts(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Uh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,l=new ar;l.updateFromIdToken(r);const u=new qt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ha(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(u,h),u}}/**
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
 */const bu=new Map;function zt(n){Kt(n instanceof Function,"Expected a class definition");let e=bu.get(n);return e?(Kt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,bu.set(n,e),e)}/**
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
 */class jh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jh.type="NONE";const Eu=jh;/**
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
 */function cs(n,e,t){return`firebase:${n}:${e}:${t}`}class cr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=cs(this.userKey,i.apiKey,s),this.fullPersistenceKey=cs("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new cr(zt(Eu),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||zt(Eu);const a=cs(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){const m=qt._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new cr(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new cr(s,e,r))}}/**
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
 */function wu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wh(e))return"Blackberry";if(Kh(e))return"Webos";if(qh(e))return"Safari";if((e.includes("chrome/")||zh(e))&&!e.includes("edge/"))return"Chrome";if(Gh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Bh(n=Xe()){return/firefox\//i.test(n)}function qh(n=Xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zh(n=Xe()){return/crios\//i.test(n)}function Hh(n=Xe()){return/iemobile/i.test(n)}function Gh(n=Xe()){return/android/i.test(n)}function Wh(n=Xe()){return/blackberry/i.test(n)}function Kh(n=Xe()){return/webos/i.test(n)}function pc(n=Xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ky(n=Xe()){var e;return pc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ny(){return Uf()&&document.documentMode===10}function Qh(n=Xe()){return pc(n)||Gh(n)||Kh(n)||Wh(n)||/windows phone/i.test(n)||Hh(n)}/**
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
 */function Yh(n,e=[]){let t;switch(n){case"Browser":t=wu(Xe());break;case"Worker":t=`${wu(Xe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Tr}/${r}`}/**
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
 */class Dy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Vy(n,e={}){return Rr(n,"GET","/v2/passwordPolicy",dc(n,e))}/**
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
 */const Oy=6;class My{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Oy,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class xy{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Iu(this),this.idTokenSubscription=new Iu(this),this.beforeStateQueue=new Dy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=zt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await cr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await $h(this,{idToken:e}),r=await qt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ts(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(gn(this));const t=e?Oe(e):null;return t&&K(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Vy(this),t=new My(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Py(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&zt(e)||this._popupRedirectResolver;K(t,this,"argument-error"),this.redirectPersistenceManager=await cr.create(this,[zt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&fy(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Pr(n){return Oe(n)}class Iu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kf(t=>this.observer=t)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ly(n){fc=n}function Fy(n){return fc.loadJS(n)}function $y(){return fc.gapiScript}function Uy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function jy(n,e){const t=Sa(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(hs(s,e??{}))return i;kt(i,"already-initialized")}return t.initialize({options:e})}function By(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(zt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function qy(n,e,t){const r=Pr(n);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Jh(e),{host:a,port:l}=zy(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Hy()}function Jh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function zy(n){const e=Jh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Tu(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Tu(a)}}}function Tu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Hy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Xh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Bt("not implemented")}_getIdTokenResponse(e){return Bt("not implemented")}_linkToIdToken(e,t){return Bt("not implemented")}_getReauthenticationResolver(e){return Bt("not implemented")}}/**
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
 */async function lr(n,e){return by(n,"POST","/v1/accounts:signInWithIdp",dc(n,e))}/**
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
 */const Gy="http://localhost";class Gn extends Xh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):kt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ac(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Gn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return lr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,lr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,lr(e,t)}buildRequest(){const e={requestUri:Gy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=bi(t)}return e}}/**
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
 */class Ks{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ri extends Ks{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class cn extends Ri{constructor(){super("facebook.com")}static credential(e){return Gn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";cn.PROVIDER_ID="facebook.com";/**
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
 */class jt extends Ri{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Gn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return jt.credential(t,r)}catch{return null}}}jt.GOOGLE_SIGN_IN_METHOD="google.com";jt.PROVIDER_ID="google.com";/**
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
 */class ln extends Ri{constructor(){super("github.com")}static credential(e){return Gn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.GITHUB_SIGN_IN_METHOD="github.com";ln.PROVIDER_ID="github.com";/**
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
 */class un extends Ri{constructor(){super("twitter.com")}static credential(e,t){return Gn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return un.credential(t,r)}catch{return null}}}un.TWITTER_SIGN_IN_METHOD="twitter.com";un.PROVIDER_ID="twitter.com";/**
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
 */class yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await qt._fromIdTokenResponse(e,r,i),a=Au(r);return new yr({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Au(r);return new yr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Au(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class As extends Yt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,As.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new As(e,t,r,i)}}function Zh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?As._fromErrorAndOperation(n,s,e,r):s})}async function Wy(n,e,t=!1){const r=await vi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return yr._forOperation(n,"link",r)}/**
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
 */async function Ky(n,e,t=!1){const{auth:r}=n;if(wt(r.app))return Promise.reject(gn(r));const i="reauthenticate";try{const s=await vi(n,Zh(r,i,e,n),t);K(s.idToken,r,"internal-error");const a=hc(s.idToken);K(a,r,"internal-error");const{sub:l}=a;return K(n.uid===l,r,"user-mismatch"),yr._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&kt(r,"user-mismatch"),s}}/**
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
 */async function Qy(n,e,t=!1){if(wt(n.app))return Promise.reject(gn(n));const r="signIn",i=await Zh(n,r,e),s=await yr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}/**
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
 */function Cu(n,e){return Oe(n).setPersistence(e)}function Yy(n,e,t,r){return Oe(n).onIdTokenChanged(e,t,r)}function Jy(n,e,t){return Oe(n).beforeAuthStateChanged(e,t)}function Xy(n,e,t,r){return Oe(n).onAuthStateChanged(e,t,r)}function Zy(n){return Oe(n).signOut()}const Cs="__sak";/**
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
 */class ep{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cs,"1"),this.storage.removeItem(Cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const eb=1e3,tb=10;class tp extends ep{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Ny()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tb):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},eb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}tp.type="LOCAL";const np=tp;/**
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
 */class rp extends ep{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rp.type="SESSION";const ip=rp;/**
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
 */function nb(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Qs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Qs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(t.origin,s)),u=await nb(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qs.receivers=[];/**
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
 */function mc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class rb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=mc("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ct(){return window}function ib(n){Ct().location.href=n}/**
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
 */function sp(){return typeof Ct().WorkerGlobalScope<"u"&&typeof Ct().importScripts=="function"}async function sb(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ob(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ab(){return sp()?self:null}/**
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
 */const op="firebaseLocalStorageDb",cb=1,Ss="firebaseLocalStorage",ap="fbase_key";class Pi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ys(n,e){return n.transaction([Ss],e?"readwrite":"readonly").objectStore(Ss)}function lb(){const n=indexedDB.deleteDatabase(op);return new Pi(n).toPromise()}function pa(){const n=indexedDB.open(op,cb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ss,{keyPath:ap})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ss)?e(r):(r.close(),await lb(),e(await pa()))})})}async function Su(n,e,t){const r=Ys(n,!0).put({[ap]:e,value:t});return new Pi(r).toPromise()}async function ub(n,e){const t=Ys(n,!1).get(e),r=await new Pi(t).toPromise();return r===void 0?null:r.value}function Ru(n,e){const t=Ys(n,!0).delete(e);return new Pi(t).toPromise()}const db=800,hb=3;class cp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>hb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qs._getInstance(ab()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await sb(),!this.activeServiceWorker)return;this.sender=new rb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ob()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pa();return await Su(e,Cs,"1"),await Ru(e,Cs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Su(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ub(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ru(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ys(i,!1).getAll();return new Pi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),db)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cp.type="LOCAL";const lp=cp;new Si(3e4,6e4);/**
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
 */function gc(n,e){return e?zt(e):(K(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class vc extends Xh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return lr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function pb(n){return Qy(n.auth,new vc(n),n.bypassAuthState)}function fb(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),Ky(t,new vc(n),n.bypassAuthState)}async function mb(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),Wy(t,new vc(n),n.bypassAuthState)}/**
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
 */class up{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pb;case"linkViaPopup":case"linkViaRedirect":return mb;case"reauthViaPopup":case"reauthViaRedirect":return fb;default:kt(this.auth,"internal-error")}}resolve(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gb=new Si(2e3,1e4);async function vb(n,e,t){if(wt(n.app))return Promise.reject(bt(n,"operation-not-supported-in-this-environment"));const r=Pr(n);Mh(n,e,Ks);const i=gc(r,t);return new Mn(r,"signInViaPopup",e,i).executeNotNull()}class Mn extends up{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mn.currentPopupAction&&Mn.currentPopupAction.cancel(),Mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Kt(this.filter.length===1,"Popup operations only handle one event");const e=mc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gb.get())};e()}}Mn.currentPopupAction=null;/**
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
 */const _b="pendingRedirect",ls=new Map;class yb extends up{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ls.get(this.auth._key());if(!e){try{const r=await bb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ls.set(this.auth._key(),e)}return this.bypassAuthState||ls.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bb(n,e){const t=hp(e),r=dp(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function Eb(n,e){return dp(n)._set(hp(e),"true")}function wb(n,e){ls.set(n._key(),e)}function dp(n){return zt(n._redirectPersistence)}function hp(n){return cs(_b,n.config.apiKey,n.name)}/**
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
 */function Ib(n,e,t){return Tb(n,e,t)}async function Tb(n,e,t){if(wt(n.app))return Promise.reject(gn(n));const r=Pr(n);Mh(n,e,Ks),await r._initializationPromise;const i=gc(r,t);return await Eb(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function Ab(n,e){return await Pr(n)._initializationPromise,pp(n,e,!1)}async function pp(n,e,t=!1){if(wt(n.app))return Promise.reject(gn(n));const r=Pr(n),i=gc(r,e),a=await new yb(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Cb=10*60*1e3;class Sb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Rb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!fp(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(bt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pu(e))}saveEventToCache(e){this.cachedEventUids.add(Pu(e)),this.lastProcessedEventTime=Date.now()}}function Pu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function fp({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Rb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fp(n);default:return!1}}/**
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
 */async function Pb(n,e={}){return Rr(n,"GET","/v1/projects",e)}/**
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
 */const kb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nb=/^https?/;async function Db(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Pb(n);for(const t of e)try{if(Vb(t))return}catch{}kt(n,"unauthorized-domain")}function Vb(n){const e=da(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Nb.test(t))return!1;if(kb.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Ob=new Si(3e4,6e4);function ku(){const n=Ct().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Mb(n){return new Promise((e,t)=>{var r,i,s;function a(){ku(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ku(),t(bt(n,"network-request-failed"))},timeout:Ob.get()})}if(!((i=(r=Ct().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ct().gapi)===null||s===void 0)&&s.load)a();else{const l=Uy("iframefcb");return Ct()[l]=()=>{gapi.load?a():t(bt(n,"network-request-failed"))},Fy(`${$y()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw us=null,e})}let us=null;function xb(n){return us=us||Mb(n),us}/**
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
 */const Lb=new Si(5e3,15e3),Fb="__/auth/iframe",$b="emulator/auth/iframe",Ub={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bb(n){const e=n.config;K(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?uc(e,$b):`https://${n.config.authDomain}/${Fb}`,r={apiKey:e.apiKey,appName:n.name,v:Tr},i=jb.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${bi(r).slice(1)}`}async function qb(n){const e=await xb(n),t=Ct().gapi;return K(t,n,"internal-error"),e.open({where:document.body,url:Bb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ub,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=bt(n,"network-request-failed"),l=Ct().setTimeout(()=>{s(a)},Lb.get());function u(){Ct().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const zb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hb=500,Gb=600,Wb="_blank",Kb="http://localhost";class Nu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qb(n,e,t,r=Hb,i=Gb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},zb),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Xe().toLowerCase();t&&(l=zh(h)?Wb:t),Bh(h)&&(e=e||Kb,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[_,y])=>`${g}${_}=${y},`,"");if(ky(h)&&l!=="_self")return Yb(e||"",l),new Nu(null);const m=window.open(e||"",l,f);K(m,n,"popup-blocked");try{m.focus()}catch{}return new Nu(m)}function Yb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Jb="__/auth/handler",Xb="emulator/auth/handler",Zb=encodeURIComponent("fac");async function Du(n,e,t,r,i,s){K(n.config.authDomain,n,"auth-domain-config-required"),K(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Tr,eventId:i};if(e instanceof Ks){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Wf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof Ri){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),h=u?`#${Zb}=${encodeURIComponent(u)}`:"";return`${eE(n)}?${bi(l).slice(1)}${h}`}function eE({config:n}){return n.emulator?uc(n,Xb):`https://${n.authDomain}/${Jb}`}/**
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
 */const Mo="webStorageSupport";class tE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ip,this._completeRedirectFn=pp,this._overrideRedirectResult=wb}async _openPopup(e,t,r,i){var s;Kt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Du(e,t,r,da(),i);return Qb(e,a,mc())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Du(e,t,r,da(),i);return ib(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Kt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await qb(e),r=new Sb(e);return t.register("authEvent",i=>(K(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Mo,{type:Mo},i=>{var s;const a=(s=i?.[0])===null||s===void 0?void 0:s[Mo];a!==void 0&&t(!!a),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Db(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qh()||qh()||pc()}}const nE=tE;var Vu="@firebase/auth",Ou="1.7.9";/**
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
 */class rE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function iE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sE(n){dr(new Bn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;K(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yh(n)},h=new xy(r,i,s,u);return By(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),dr(new Bn("auth-internal",e=>{const t=Pr(e.getProvider("auth").getImmediate());return(r=>new rE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(Vu,Ou,iE(n)),mn(Vu,Ou,"esm2017")}/**
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
 */const oE=5*60,aE=cd("authIdTokenMaxAge")||oE;let Mu=null;const cE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>aE)return;const i=t?.token;Mu!==i&&(Mu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lE(n=hd()){const e=Sa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=jy(n,{popupRedirectResolver:nE,persistence:[lp,np,ip]}),r=cd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=cE(s.toString());Jy(t,a,()=>a(t.currentUser)),Yy(t,l=>a(l))}}const i=od("auth");return i&&qy(t,`http://${i}`),t}function uE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Ly({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=bt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",uE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sE("Browser");const dE={apiKey:"AIzaSyDkWI1TU4an6qu8cQbt5Xsk4OKrQ-eiITI",authDomain:"ruben-dashboard.firebaseapp.com",projectId:"ruben-dashboard",storageBucket:"ruben-dashboard.firebasestorage.app",messagingSenderId:"40452541202",appId:"1:40452541202:web:bc5ad8cc712773fae181cb"},mp=dd(dE),gp=Q_(mp),Wn=lE(mp),fa=new jt;fa.setCustomParameters({prompt:"select_account"});Cu(Wn,lp).catch(()=>Cu(Wn,np)).catch(n=>console.error("Persistencia Firebase Auth falló:",n));function hE(n){return Xy(Wn,n)}async function pE(n=()=>{}){n("Abriendo Google…");try{await vb(Wn,fa),n("")}catch(e){if(e.code==="auth/popup-blocked"){n("Popup bloqueado, redirigiendo…");try{await Ib(Wn,fa)}catch(t){n("⚠ "+(t.code||t.message),!0)}}else e.code==="auth/cancelled-popup-request"||e.code==="auth/popup-closed-by-user"?n(""):n("⚠ "+(e.code||e.message),!0)}}async function fE(n=()=>{}){try{await Ab(Wn)&&n("✓ Sesión recibida…")}catch(e){n("⚠ "+(e.code||e.message),!0)}}async function mE(){await Zy(Wn)}const me=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,5);function o(n,e={},t=[]){const[r,...i]=n.split("."),s=document.createElement(r||"div");i.length&&(s.className=i.join(" "));for(const[l,u]of Object.entries(e||{}))if(!(u==null||u===!1))if(l==="class")s.className=s.className?s.className+" "+u:u;else if(l==="html")s.innerHTML=u;else if(l==="dataset")Object.assign(s.dataset,u);else if(l.startsWith("on")&&typeof u=="function")s.addEventListener(l.slice(2).toLowerCase(),u);else if(l in s&&l!=="list")try{s[l]=u}catch{s.setAttribute(l,u)}else s.setAttribute(l,u);const a=Array.isArray(t)?t:[t];for(const l of a)l==null||l===!1||s.append(l.nodeType?l:document.createTextNode(String(l)));return s}function _e(n){for(;n.firstChild;)n.removeChild(n.firstChild)}const gE=new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}),N=n=>gE.format(Number(n)||0),Ie=(n,e=2)=>(Number(n)||0).toLocaleString("es-ES",{maximumFractionDigits:e}),X=()=>{const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`},br=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];function pt(n){if(!n)return null;const e=new Date(X()+"T00:00:00"),t=new Date(n+"T00:00:00");return Math.round((t-e)/864e5)}const vE=()=>document.getElementById("metaTheme");function _E(){localStorage.getItem("tema_v2")==="light"&&document.documentElement.classList.add("light"),vp()}function yE(){const n=document.documentElement.classList.toggle("light");localStorage.setItem("tema_v2",n?"light":"dark"),vp()}function vp(){const n=document.documentElement.classList.contains("light"),e=vE();e&&e.setAttribute("content",n?"#f4f1ec":"#09090b")}function ur(n){const e=document.getElementById("syncDot");e&&(e.className="sync-dot"+(n?" "+n:""),n==="ok"&&setTimeout(()=>{e.classList.contains("ok")&&(e.className="sync-dot")},1500))}function D(n,e=""){const t=document.getElementById("toastHost");if(!t)return;const r=o("div.toast"+(e?"."+e:""),{},n);t.append(r),setTimeout(()=>{r.style.opacity="0",setTimeout(()=>r.remove(),200)},e==="err"?3500:2200)}function bE(n,e,t){const r=document.getElementById("appNav");_e(r);for(const i of n)r.append(o("button.nav-item"+(i.id===e?".active":""),{onclick:()=>t(i.id)},[o("span.nav-icon",{},i.icono),o("span.nav-label",{},i.label)]))}function re(n,e,t={}){const r=o("div.modal-backdrop"),i=()=>r.remove();r.addEventListener("click",l=>{l.target===r&&i()});const s=typeof e=="function"?e(i):e,a="div.modal"+(t.className?"."+t.className.split(/\s+/).join("."):"");return r.append(o(a,{},[o("div.modal-title",{},n),s])),document.body.append(r),i}let Er=null;const It={},dn={};function xu(n){if(n!==Er){for(const e of Object.keys(dn)){try{dn[e].unsub()}catch{}delete dn[e]}for(const e of Object.keys(It))delete It[e];Er=n||null}}function _c(n){return K_(gp,"users",Er,"modulos",n)}function H(n){return n in It?It[n]:null}async function Z(n,e){if(!Er)throw new Error("sin sesión");It[n]=e,ur("syncing");try{await cy(_c(n),{data:JSON.stringify(e),ts:Date.now()}),ur("ok")}catch(t){throw ur("err"),console.error("store.save",n,t),t}}async function ki(n){if(!Er)throw new Error("sin sesión");const e=hy(gp),t=Date.now();for(const[r,i]of Object.entries(n))It[r]=i,e.set(_c(r),{data:JSON.stringify(i),ts:t});ur("syncing");try{await e.commit(),ur("ok")}catch(r){throw ur("err"),console.error("store.saveMany",r),r}}function Ye(n,e){if(!Er)return()=>{};if(!dn[n]){const t=new Set,r=ly(_c(n),i=>{It[n]=i.exists()?JSON.parse(i.data().data):null;for(const s of t)try{s(It[n])}catch(a){console.error(a)}},i=>console.error("store.subscribe",n,i));dn[n]={unsub:r,listeners:t}}if(dn[n].listeners.add(e),n in It)try{e(It[n])}catch(t){console.error(t)}return()=>{const t=dn[n];if(t&&(t.listeners.delete(e),t.listeners.size===0)){try{t.unsub()}catch{}delete dn[n]}}}const _p=15e3,Lu=15,Fu=12.5;function EE(n){const[e,t]=n.split("-");return`${e}-${parseInt(t,10)-1}`}function yp(){const n=new Date;return`${n.getFullYear()}-${n.getMonth()}`}function ma(n,e){return n&&n[e]||[]}function ga(n){return(n||[]).reduce((e,t)=>e+(Number(t.importe)||0),0)}function $u(n){return(n||[]).reduce((e,t)=>(e[t.tipo]=(e[t.tipo]||0)+(Number(t.importe)||0),e),{})}function wE(n){const t=(n||[]).map(r=>{const i=(r.trabajos||[]).filter(s=>!s.pagado);return{id:r.id,nombre:r.nombre,nPend:i.length,importe:i.reduce((s,a)=>s+(Number(a.importe)||0),0)}}).filter(r=>r.nPend>0);return{porTrab:t,total:t.reduce((r,i)=>r+i.importe,0)}}const sr=n=>Number(n)||0,bp={camper:["Diseño y presupuesto","Compra de materiales","Desmontaje y preparación","Aislamiento y suelo","Electricidad","Agua y fontanería","Panelado","Mobiliario","Acabados y tapicería","Homologación / ITV","Entrega"],carpinteria:["Medición y diseño","Presupuesto","Compra de material","Corte y mecanizado","Montaje en taller","Acabado (lijado/barniz/lacado)","Instalación en obra","Repasos","Entrega"],cnc:["Diseño / archivo CAD-CAM","Presupuesto","Preparación de material","Mecanizado CNC","Acabado y repasos","Control de calidad","Embalaje","Entrega"]},IE={tarifaVentaMO:25,margenMateriales:.2,iva:.21},In=[["camper","Camper"],["carpinteria","Carpintería"],["cnc","CNC"]],Yn=n=>(In.find(([e])=>e===n)||[null,n])[1];function TE(n,e){const t=n?.trabajos_cfg||{};return{fases:{...bp,...t.fases||{}},params:{...IE,...t.params||{}}}}function AE(n,e){const t=TE(n).fases[e];return Array.isArray(t)&&t.length?t.slice():(bp[e]||[]).slice()}function Ep(n,e){return AE(n,e).map(t=>({nombre:t,estado:"Pendiente",fechaPrevista:"",fechaFin:"",notas:""}))}function wp(n,e){if(!e)return[];const t=[];for(const r of n||[])for(const i of r.trabajos||[])i.proyectoId===e&&t.push({id:i.id,fecha:i.fecha||"",trabajador:r.nombre,trabajadorId:r.id,horas:i.horas??null,descripcion:i.descripcion||"",importe:sr(i.importe),tipo:i.tipo,pagado:!!i.pagado});return t.sort((r,i)=>(r.fecha||"").localeCompare(i.fecha||"")),t}function Js(n,e=[]){const t=n||{},r=(t.materiales||[]).reduce((_,y)=>_+sr(y.costeReal??y.costeEstimado??0),0),i=(t.otrosGastos||[]).reduce((_,y)=>_+sr(y.importe),0),s=wp(e,t.id).reduce((_,y)=>_+y.importe,0),a=r+s+i,l=(t.extras||[]).reduce((_,y)=>_+sr(y.importe),0),u=sr(t.ingresoPresupuestado)+l,h=u-a,f=u>0?h/u*100:0,m=(t.cobros||[]).reduce((_,y)=>_+sr(y.importe),0),g=u-m;return{costeMateriales:r,costeManoObra:s,costeOtros:i,costeTotal:a,extras:l,ingresoTotal:u,resultado:h,margen:f,cobrado:m,pendienteCobro:g}}function yc(n){const e=n?.fases||[];if(!e.length)return"";const t=e.find(r=>r.estado!=="Completada");return t?t.nombre:"Entregado"}const Ip=["Pendiente","En curso","Completada"],Tp=["Pendiente","En curso","Hecha"],CE=["Pendiente","Pedido","Recibido"],bc="impuestos";function Ap(n){return Object.entries(n||{}).filter(([e])=>e!==bc).reduce((e,[,t])=>e+(Number(t)||0),0)}const Ec=[["inversiones","Inversiones"],["liquido","Líquido"],["negocios","Negocios"],["","Sin clasificar"]],Cp=(n,e)=>n?.grupos_cuentas?.[e]||"";function SE(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function RE(n,e,t){const r=[];if(!n)return r;const[i,s,a]=e.split("-").map(Number),[l,u,h]=t.split("-").map(Number),f=new Date(i,s-1,a),m=new Date(l,u-1,h);if(!n.recurrente)return n.fecha&&n.fecha>=e&&n.fecha<=t&&r.push(n.fecha),r;const g=n.fechaInicio||e,_=n.fechaFin||t,[y,I,P]=g.split("-").map(Number),x=new Date(y,I-1,P),[F,O,$]=_.split("-").map(Number),U=new Date(F,O-1,$),V=new Date(Math.max(x.getTime(),f.getTime())),T=new Date(Math.min(m.getTime(),U.getTime()));if(n.frecuencia==="semanal"){const E=n.diaCobro!=null?n.diaCobro:1;for(;V<=T&&V.getDay()!==E;)V.setDate(V.getDate()+1);for(;V<=T;)r.push(V.toISOString().split("T")[0]),V.setDate(V.getDate()+7)}else if(n.frecuencia==="mensual"){const E=Math.max(1,Math.min(31,n.diaCobro||1));let w=V.getFullYear(),A=V.getMonth();for(;;){const C=new Date(w,A+1,0).getDate(),S=Math.min(E,C),b=new Date(w,A,S);if(b>T)break;if(b>=V){const se=`${w}-${String(A+1).padStart(2,"0")}-${String(S).padStart(2,"0")}`;se>=e&&se<=t&&r.push(se)}A++,A>11&&(A=0,w++)}}else if(n.frecuencia==="trimestral"||n.frecuencia==="anual"){const E=n.frecuencia==="anual"?12:3,w=n.diaCobro||x.getDate();let A=x.getFullYear(),C=x.getMonth();for(;;){const S=new Date(A,C+1,0).getDate(),b=Math.min(w,S),se=new Date(A,C,b);if(se>T)break;if(se>=f&&se>=x){const be=`${A}-${String(C+1).padStart(2,"0")}-${String(b).padStart(2,"0")}`;be<=t&&r.push(be)}for(C+=E;C>=12;)C-=12,A++}}return r}function Xs(n,e,t){const r=[];return(n||[]).forEach(i=>{if(i.archivado)return;RE(i,e,t).forEach(a=>{const l=(i.pagos||[]).find(u=>u.fecha===a);r.push({gastoId:i.id,concepto:i.concepto,importe:i.importe,categoria:i.categoria,metodo:i.metodo,fecha:a,pagado:!!l,pago:l,gastoRef:i})})}),r.sort((i,s)=>i.fecha.localeCompare(s.fecha)),r}const xo=n=>n!=="personal",PE=["personal","empresa","combustible","material","otros"];function Uu(n){const e=Array.isArray(n?.categorias_gasto)?n.categorias_gasto:null,t=e&&e.length?e:PE,r=[];for(const i of["personal",...t]){const s=String(i??"").trim();s&&!r.includes(s)&&r.push(s)}return r}function kE(n){const[e,t]=n.split("-").map(Number),r=Math.floor((t-1)/3)+1,i=(r-1)*3,s=new Date(e,i+3,0).getDate();return{anio:e,q:r,etiqueta:`Q${r} ${e}`,desde:`${e}-${String(i+1).padStart(2,"0")}-01`,hasta:`${e}-${String(i+3).padStart(2,"0")}-${String(s).padStart(2,"0")}`}}function NE(n,e,t,r){const i=(r-1)*3,s=new Date(t,i+3,0).getDate(),a=`${t}-${String(i+1).padStart(2,"0")}-01`,l=`${t}-${String(i+3).padStart(2,"0")}-${String(s).padStart(2,"0")}`,u=V=>Number(V).toFixed(2),h=Xs(n||[],a,l).filter(V=>V.gastoRef?.deducible);let f=0,m=0;for(const V of h){const T=V.gastoRef||{};if(T.ivaSoportado!=null)f+=T.ivaSoportado,m+=T.baseImponible||V.importe-T.ivaSoportado;else{const E=(V.importe||0)/1.21;m+=E,f+=E*.21}}const _=(e||[]).filter(V=>V.fecha>=a&&V.fecha<=l),y=_.reduce((V,T)=>V+(T.ivaRepercutido||0),0),I=_.reduce((V,T)=>V+(T.baseImponible||0),0),P=y-f,x=I-m,F=Math.max(0,x*.2),$={1:"20 abril",2:"20 julio",3:"20 octubre",4:"20 enero"}[r]+(r===4?` ${t+1}`:` ${t}`),U=h.some(V=>V.gastoRef&&V.gastoRef.tipoIVA==null);return{ok:!0,trimestre:`Q${r} ${t}`,rango:{desde:a,hasta:l},plazo:$,facturas:{cantidad:_.length,base:u(I),iva_repercutido:u(y),total:u(I+y)},gastos:{cantidad:h.length,base:u(m),iva_soportado:u(f),nota:U?"Algunos gastos estimados al 21% (sin desglose IVA)":null},modelo_303:{repercutido:u(y),soportado:u(f),cuota:u(P),resultado:P>=0?`A INGRESAR ${u(P)}€`:`A DEVOLVER ${u(Math.abs(P))}€`},modelo_130:{base_ingresos:u(I),base_gastos:u(m),rendimiento:u(x),cuota:u(F),resultado:F>0?`A INGRESAR ${u(F)}€`:"Sin pago"},total_provisionar:`${u(Math.max(0,P)+F)}€`}}function _i({cobrospagos:n,gastos:e,trabajadores:t,trabajos:r},i,s){const a=[];for(const l of n?.movimientos||[])!l.fecha||l.fecha<i||l.fecha>s||a.push({id:l.id,fecha:l.fecha,tipo:l.tipo,concepto:l.concepto||"",categoria:l.categoria||"",importe:Number(l.importe)||0,estado:l.estado||"previsto",notas:l.notas||"",origen:"manual",readonly:!1});for(const l of Xs(e||[],i,s))a.push({id:`g:${l.gastoId}:${l.fecha}`,fecha:l.fecha,tipo:"pago",concepto:l.concepto||"",categoria:l.categoria||"",importe:Number(l.importe)||0,estado:l.pagado?"realizado":"previsto",notas:"",origen:"gasto",readonly:!0});for(const l of t||[])for(const u of l.trabajos||[])u.pagado||!u.fecha||u.fecha<i||u.fecha>s||a.push({id:`w:${l.id}:${u.id}`,fecha:u.fecha,tipo:"pago",concepto:`${l.nombre}: ${u.descripcion||""}`.trim(),categoria:"trabajador",importe:Number(u.importe)||0,estado:"previsto",notas:"",origen:"trabajador",readonly:!0});for(const l of r||[]){if((l.estado||"activo")!=="activo"||!l.fechaEntrega||l.fechaEntrega<i||l.fechaEntrega>s)continue;const u=Js(l,[]).pendienteCobro;u<=.005||a.push({id:`t:${l.id}`,fecha:l.fechaEntrega,tipo:"cobro",concepto:`Cobro previsto: ${l.nombre}`,categoria:"trabajo",importe:u,estado:"previsto",notas:"",origen:"trabajo",readonly:!0})}return a.sort((l,u)=>l.fecha.localeCompare(u.fecha)||l.origen.localeCompare(u.origen)),a}function Zs(n){return(n||[]).reduce((e,t)=>e+(t.tipo==="cobro"?t.importe:-t.importe),0)}const eo=[["nuevo","Nuevo"],["cita","Cita"],["presupuestado","Presupuestado"],["ganado","Ganado"],["perdido","Perdido"]],si=eo.map(([n])=>n),DE=["ganado","perdido"];function wr(n){return n==="contactado"?"cita":n}const wc=[["borrador","Borrador"],["enviado","Enviado"],["aceptado","Aceptado"],["rechazado","Rechazado"]],VE=["web","calcom","telegram","instagram","manual"],ju={kifar:"Kifar",klova:"Klova",camper:"Camper"},Sp=2,OE=4;function Nt(n){const e=n||{};return{clientes:Array.isArray(e.clientes)?e.clientes:[],leads:Array.isArray(e.leads)?e.leads:[],presupuestos:Array.isArray(e.presupuestos)?e.presupuestos:[]}}function Qt(n){return n&&n.tipo?Yn(n.tipo):n&&ju[n.negocio]?ju[n.negocio]:"—"}function Ic(n){return(eo.find(([e])=>e===n)||[null,n])[1]||n||"—"}function Tc(n){return(wc.find(([e])=>e===n)||[null,n])[1]||n||"—"}function Ac(n,e){if(!e)return"";const t=(n||[]).find(r=>r.id===e);return t?t.nombre:""}function ME(n,e={}){n.append(o("h1.section-title",{},"Hoy"));const t=o("div");n.append(t);const r={tareas:null,trabajadores:null,trabajos:null,crm:null,ingresos:null,config:null,cobrospagos:null,gastos:null,cargado:{}},i=()=>{_e(t),t.append(xE(r)),t.append(jE(r,e)),t.append(BE(r,e)),t.append(qE(r,e)),t.append(UE(r,e)),t.append(zE(r)),t.append(HE())},s=[Ye("tareas",a=>{r.tareas=a,r.cargado.tareas=!0,i()}),Ye("trabajadores",a=>{r.trabajadores=a,r.cargado.trabajadores=!0,i()}),Ye("trabajos",a=>{r.trabajos=a,r.cargado.trabajos=!0,i()}),Ye("crm",a=>{r.crm=a,r.cargado.crm=!0,i()}),Ye("ingresos",a=>{r.ingresos=a,r.cargado.ingresos=!0,i()}),Ye("config",a=>{r.config=a,r.cargado.config=!0,i()}),Ye("cobrospagos",a=>{r.cobrospagos=a,r.cargado.cobrospagos=!0,i()}),Ye("gastos",a=>{r.gastos=a,r.cargado.gastos=!0,i()})];return i(),()=>s.forEach(a=>a())}function xE(n){const e=o("div.card");e.append(o("div.card-head",{},[o("h3",{},"Tareas"),o("button.link",{onclick:()=>$E(n)},"+ Nueva")]));const r=(n.tareas||[]).filter(l=>!l.done),i=new Set,s=[],a=(l,u)=>{const h=u.filter(f=>!i.has(f.id));h.forEach(f=>i.add(f.id)),h.length&&s.push({titulo:l,items:h})};if(a("Vencidas",r.filter(l=>l.fecha&&pt(l.fecha)<0)),a("Urgentes",r.filter(l=>l.prioridad==="urgente")),a("Próximos 7 días",r.filter(l=>l.fecha&&pt(l.fecha)>=0&&pt(l.fecha)<=7)),!n.cargado.tareas)return e.append(o("div.spinner")),e;if(!s.length)return e.append(o("div.card-empty",{},"Sin tareas urgentes ni próximas")),e;for(const l of s){e.append(o("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:8px 0 2px;"},l.titulo));for(const u of l.items)e.append(LE(u,n))}return e}function LE(n,e){const t=n.fecha?pt(n.fecha):null,r=n.fecha?t<0?o("span.chip.venc",{},`${Math.abs(t)}d tarde`):t===0?o("span.chip.urgente",{},"hoy"):o("span.chip",{},`${t}d`):null,i=o("button.check",{title:"Completar",onclick:async()=>{await FE(n.id,e)}},"✓");return o("div.row",{},[i,o("div.row-main",{},[o("div.row-label",{},n.titulo||"(sin título)"),o("div.row-sub",{},[n.prioridad==="urgente"?o("span.chip.urgente",{},"urgente"):null,n.prioridad==="baja"?o("span.chip.baja",{},"baja"):null,r].filter(Boolean))])])}async function FE(n,e){const t=(e.tareas||[]).slice(),r=t.find(i=>i.id===n);if(r){r.done=!0;try{await Z("tareas",t),D("Tarea completada","ok")}catch{D("No se pudo guardar","err")}}}function $E(n){re("Nueva tarea",e=>{const t=o("input",{placeholder:"Título",autofocus:!0}),r=o("select",{},[o("option",{value:"normal"},"Normal"),o("option",{value:"urgente"},"Urgente"),o("option",{value:"baja"},"Baja")]),i=o("input",{type:"date"}),s=async()=>{if(!t.value.trim()){D("Falta el título","err");return}const a={id:me(),titulo:t.value.trim(),desc:"",proyectoId:"personal",prioridad:r.value,fecha:i.value||"",notas:"",done:!1},l=(n.tareas||[]).slice();l.push(a);try{await Z("tareas",l),D("Tarea creada","ok"),e()}catch{D("No se pudo guardar","err")}};return o("div",{},[Lo("Título",t),o("div.field-grid",{},[Lo("Prioridad",r),Lo("Fecha",i)]),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:s},"Crear")])])})}function UE(n,e){const t=o("div.card");if(t.append(o("div.card-head",{},[o("h3",{},"Pagos pendientes"),e.nav?o("button.link",{onclick:()=>e.nav("equipo")},"Equipo →"):null])),!n.cargado.trabajadores)return t.append(o("div.spinner")),t;const{porTrab:r,total:i}=wE(n.trabajadores);if(!r.length)return t.append(o("div.card-empty",{},"Nada pendiente de pago")),t;t.append(o("div.hero",{},[o("div.hero-label",{},"Total pendiente"),o("div.hero-value",{},N(i))]));for(const s of r)t.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},s.nombre),o("div.row-sub",{},`${s.nPend} trabajo${s.nPend===1?"":"s"}`)]),o("div.row-right",{},o("span.amount.pend",{},N(s.importe)))]));return t}function jE(n,e){const t=o("div.card");if(t.append(o("div.card-head",{},[o("h3",{},"Tesorería · próximos 7 días"),e.nav?o("button.link",{onclick:()=>e.nav("finanzas")},"Finanzas →"):null])),!n.cargado.cobrospagos||!n.cargado.gastos||!n.cargado.trabajadores)return t.append(o("div.spinner")),t;const r=X(),i=new Date(r+"T00:00:00");i.setDate(i.getDate()+7);const s=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`,a=_i({cobrospagos:n.cobrospagos,gastos:n.gastos,trabajadores:n.trabajadores,trabajos:n.trabajos},r,s),l=Zs(a);if(t.append(o("div.hero",{},[o("div.hero-label",{},"Neto de la semana"),o("div.hero-value",{},N(l)),o("div.hero-sub",{},`${a.length} movimiento${a.length===1?"":"s"} · hasta ${s}`)])),!a.length)return t.append(o("div.card-empty",{},"Sin cobros ni pagos previstos")),t;for(const u of a.slice(0,12)){const h=u.origen==="gasto"?"gasto":u.origen==="trabajador"?"trabajador":u.categoria||u.tipo;t.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},[u.concepto||"(sin concepto)",o("span.chip",{style:"margin-left:6px;"},h)]),o("div.row-sub",{},`${u.fecha} · ${u.estado}`)]),o("div.row-right",{},o("div.amount"+(u.tipo==="cobro"?".pos":".neg"),{},(u.tipo==="cobro"?"+":"−")+N(u.importe)))]))}return t}function BE(n,e){const t=o("div.card");if(t.append(o("div.card-head",{},[o("h3",{},"Trabajos"),e.nav?o("button.link",{onclick:()=>e.nav("trabajos")},"Trabajos →"):null])),!n.cargado.trabajos)return t.append(o("div.spinner")),t;const r=(n.trabajos||[]).filter(i=>(i.estado||"activo")==="activo");if(!r.length)return t.append(o("div.card-empty",{},"Sin trabajos activos")),t;r.sort((i,s)=>(i.fechaEntrega||"9999").localeCompare(s.fechaEntrega||"9999"));for(const i of r){const s=i.fechaEntrega?pt(i.fechaEntrega):null;let a=null;s!=null&&s<=7?a=s<0?o("span.chip.venc",{},`${Math.abs(s)}d tarde`):s===0?o("span.chip.urgente",{},"entrega hoy"):o("span.chip.pend",{},`entrega ${s}d`):i.fechaEntrega&&(a=o("span.chip",{},i.fechaEntrega)),t.append(o("div.row",{style:"cursor:pointer;",onclick:()=>e.nav&&e.nav("trabajos")},[o("div.row-main",{},[o("div.row-label",{},i.nombre||"(sin nombre)"),o("div.row-sub",{},`${Yn(i.tipo)}${i.cliente?` · ${i.cliente}`:""} · ${yc(i)||"—"}`)]),o("div.row-right",{},a)]))}return t}function qE(n,e){const t=o("div.card");if(t.append(o("div.card-head",{},[o("h3",{},"Clientes"),e.nav?o("button.link",{onclick:()=>e.nav("clientes")},"Clientes →"):null])),!n.cargado.crm)return t.append(o("div.spinner")),t;const{leads:r,presupuestos:i}=Nt(n.crm),s=r.filter(l=>{if(l.archivado||l.estado!=="nuevo")return!1;const u=pt(l.ultimoContacto||l.creado);return u!=null&&-u>Sp}).sort((l,u)=>(l.ultimoContacto||l.creado||"").localeCompare(u.ultimoContacto||u.creado||"")),a=i.filter(l=>{if(l.estado!=="enviado"||!l.enviado)return!1;const u=pt(l.enviado);return u!=null&&-u>OE}).sort((l,u)=>(l.enviado||"").localeCompare(u.enviado||""));if(!s.length&&!a.length)return t.append(o("div.card-empty",{},"Sin avisos: leads contactados y presupuestos al día")),t;if(s.length){t.append(o("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:8px 0 2px;"},"Leads sin contactar (>2 días)"));for(const l of s.slice(0,6)){const u=-pt(l.ultimoContacto||l.creado);t.append(o("div.row",{style:e.nav?"cursor:pointer;":"",onclick:()=>e.nav&&e.nav("clientes")},[o("div.row-main",{},[o("div.row-label",{},l.nombre||"(sin nombre)"),o("div.row-sub",{},`${Qt(l)} · ${l.origen||"—"}`)]),o("div.row-right",{},o("span.chip.venc",{},`${u}d`))]))}}if(a.length){t.append(o("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:8px 0 2px;"},"Presupuestos sin respuesta (>4 días)"));for(const l of a.slice(0,6)){const u=-pt(l.enviado);t.append(o("div.row",{style:e.nav?"cursor:pointer;":"",onclick:()=>e.nav&&e.nav("clientes")},[o("div.row-main",{},[o("div.row-label",{},l.concepto||"(sin concepto)"),o("div.row-sub",{},`${Qt(l)} · enviado ${l.enviado}`)]),o("div.row-right",{},[o("div.amount",{},N(l.total||0)),o("span.chip.pend",{},`${u}d`)])]))}}return t}function zE(n){const e=o("div.card"),t=new Date;if(e.append(o("div.card-head",{},[o("h3",{},"Kifar este mes"),o("span.small.muted",{},`${br[t.getMonth()]} ${t.getFullYear()}`)])),!n.cargado.ingresos||!n.cargado.config)return e.append(o("div.spinner")),e;const r=ma(n.ingresos,yp()),i=ga(r),s=n.config&&n.config.objetivoMes||_p,a=s>0?Math.min(100,Math.round(i/s*100)):0;return e.append(o("div.hero",{},[o("div.hero-label",{},`${r.length} registro${r.length===1?"":"s"}`),o("div.hero-value",{},N(i)),o("div.hero-sub",{},`Objetivo ${N(s)} · ${a}%`),o("div.progress",{},o("span",{style:`width:${a}%`}))])),e}function HE(){const n=o("div.card");return n.append(o("div.card-head",{},o("h3",{},"Agenda"))),n.append(o("div.card-empty",{},"Disponible próximamente")),n}function Lo(n,e){return o("div.field",{},[o("label",{},n),e])}const to={hrs:"Horas",pct:"Porcentaje",pzs:"Piezas"};function GE(n,e){if(!e.cargado.ingresos||!e.cargado.config){n.append(o("div.spinner"));return}const t=e.ingresos||{},r=e.config&&e.config.objetivoMes||_p,i=yp(),s=ma(t,i),a=ga(s),l=r>0?Math.min(100,Math.round(a/r*100)):0,u=new Date,h=o("div.card");h.append(o("div.card-head",{},[o("h3",{},`${br[u.getMonth()]} ${u.getFullYear()}`),o("button.link",{onclick:()=>Rp()},"+ Ingreso")])),h.append(o("div.hero",{},[o("div.hero-label",{},`${s.length} registro${s.length===1?"":"s"}`),o("div.hero-value",{},N(a)),o("div.hero-sub",{},`Objetivo ${N(r)} · ${l}%`),o("div.progress",{},o("span",{style:`width:${l}%`}))])),h.append(WE($u(s))),n.append(h);const f=o("div.card");f.append(o("div.card-head",{},o("h3",{},"Registros del mes"))),s.length||f.append(o("div.card-empty",{},"Sin ingresos este mes"));for(const g of[...s].sort((_,y)=>(y.fechaISO||"").localeCompare(_.fechaISO||"")))f.append(KE(g,i));n.append(f);const m=o("div.card");m.append(o("div.card-head",{},o("h3",{},"Últimos 6 meses")));for(let g=5;g>=0;g--){const _=new Date;_.setDate(1),_.setMonth(_.getMonth()-g);const y=`${_.getFullYear()}-${_.getMonth()}`,I=ma(t,y),P=ga(I),x=$u(I),F=y===i;m.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},[`${br[_.getMonth()]} ${_.getFullYear()}`,F?o("span.chip.ok",{style:"margin-left:6px;"},"actual"):null]),o("div.row-sub",{},`${I.length} reg · `+(Object.keys(x).length?Object.entries(x).map(([O,$])=>`${to[O]||O}: ${N($)}`).join(" · "):"—"))]),o("div.row-right",{},o("div.amount",{},N(P)))]))}n.append(m)}function WE(n){return Object.entries(n).length?o("div.kpis",{style:"margin-top:10px;"},["hrs","pct","pzs"].map(t=>o("div.kpi",{},[o("div.kpi-v",{},N(n[t]||0)),o("div.kpi-l",{},to[t])]))):o("div.small.muted",{style:"margin-top:8px;"},"Sin desglose todavía")}function KE(n,e){const t=n.tipo==="hrs"?`${Ie(n.horas||0)} h × ${Ie(n.preciohora||0)} €`:n.tipo==="pct"?`base ${N(n.baseImponible||0)} · ${Ie(n.porcentaje||0)}%`:`venta ${N(n.venta||0)} · material ${N(n.material||0)}`;return o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},[n.desc||to[n.tipo]||n.tipo,o("span.chip",{style:"margin-left:6px;"},n.tipo)]),o("div.row-sub",{},`${n.fecha||n.fechaISO||"—"} · ${t}`)]),o("div.row-right",{},[o("div.amount",{},N(n.importe)),o("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;"},[o("button.btn.btn-sm",{onclick:()=>Rp(n,e)},"Editar"),o("button.btn.btn-sm.btn-danger",{onclick:()=>QE(n.id,e)},"Borrar")])])])}function Rp(n=null,e=null){const t=!!n;re(t?"Editar ingreso":"Nuevo ingreso Kifar",r=>{const i=o("input",{type:"date",value:n?.fechaISO||X()}),s=o("select",{},Object.entries(to).map(([$,U])=>o("option",{value:$},U)));s.value=n?.tipo||"hrs";const a=o("input",{value:n?.desc||"",placeholder:"Descripción"}),l=o("input",{type:"number",step:"0.01",value:n?.importe??"",placeholder:"Importe € (opcional en horas)"}),u=o("input",{type:"number",step:"0.25",value:n?.horas??"",placeholder:"Horas"}),h=o("input",{type:"number",step:"0.5",value:n?.preciohora??Lu,placeholder:"€/h"}),f=o("div.field-grid",{},[yt("Horas",u),yt("€/hora",h)]),m=o("input",{type:"number",step:"0.01",value:n?.baseImponible??"",placeholder:"Base imponible"}),g=o("input",{type:"number",step:"0.01",value:n?.materiales??"",placeholder:"Materiales"}),_=o("input",{type:"number",step:"0.5",value:n?.porcentaje??Fu,placeholder:"%"}),y=o("div",{},[o("div.field-grid",{},[yt("Base imponible",m),yt("Materiales",g)]),yt("Porcentaje %",_)]),I=o("input",{type:"number",step:"0.01",value:n?.venta??"",placeholder:"Venta"}),P=o("input",{type:"number",step:"0.01",value:n?.material??"",placeholder:"Material"}),x=o("div.field-grid",{},[yt("Venta",I),yt("Material",P)]),F=()=>{f.hidden=s.value!=="hrs",y.hidden=s.value!=="pct",x.hidden=s.value!=="pzs"};s.addEventListener("change",F);const O=async()=>{const $=s.value,U=i.value||X(),V={id:n?.id||me(),tipo:$,importe:parseFloat(l.value)||0,desc:a.value.trim(),fechaISO:U,fecha:new Date(U+"T00:00:00").toLocaleDateString("es-ES")};if($==="pct"&&(V.baseImponible=parseFloat(m.value)||0,V.materiales=parseFloat(g.value)||0,V.porcentaje=parseFloat(_.value)||Fu),$==="hrs"&&(V.horas=parseFloat(u.value)||0,V.preciohora=parseFloat(h.value)||Lu,V.importe||(V.importe=V.horas*V.preciohora)),$==="pzs"&&(V.venta=parseFloat(I.value)||0,V.material=parseFloat(P.value)||0),!V.importe||V.importe<=0){D("Falta importe (o horas+€/h)","err");return}const T=EE(U),E={...H("ingresos")||{}},w=t?e:null;if(w&&(E[w]=(E[w]||[]).slice()),E[T]=(E[T]||[]).slice(),t)if(w&&w!==T)E[w]=E[w].filter(A=>A.id!==V.id),E[T].push(V);else{const A=E[T],C=A.findIndex(S=>S.id===V.id);C>=0?A[C]=V:A.push(V)}else E[T].push(V);try{await Z("ingresos",E),D(t?"Ingreso actualizado":`Ingreso registrado (${N(V.importe)})`,"ok"),r()}catch{D("No se pudo guardar","err")}};return F(),o("div",{},[o("div.field-grid",{},[yt("Fecha",i),yt("Tipo",s)]),yt("Descripción",a),yt("Importe €",l),f,y,x,o("div.btn-row",{},[o("button.btn",{onclick:r},"Cancelar"),o("button.btn.btn-primary",{onclick:O},t?"Guardar":"Registrar")])])})}async function QE(n,e){const t={...H("ingresos")||{}};t[e]=(t[e]||[]).filter(r=>r.id!==n);try{await Z("ingresos",t),D("Ingreso eliminado","ok")}catch{D("No se pudo guardar","err")}}function yt(n,e){return o("div.field",{},[o("label",{},n),e])}let $n=null;function YE(n,e){$n={proyectoId:n,etiqueta:e||n}}function JE(n,e={}){n.append(o("h1.section-title",{},"Equipo"));let t="trabajadores";const r=o("div.subtabs"),i=o("div");n.append(r),n.append(i);const s={trabajadores:null,capital:null,ingresos:null,config:null,trabajos:null,cargado:{}},a=()=>{_e(r);for(const[u,h]of[["trabajadores","Trabajadores"],["kifar","Kifar"]])r.append(o("button.subtab"+(t===u?".active":""),{onclick:()=>{t=u,a()}},h));_e(i),t==="trabajadores"?Pp(i,s):GE(i,s)},l=[Ye("trabajadores",u=>{s.trabajadores=u,s.cargado.trabajadores=!0,t==="trabajadores"&&a()}),Ye("capital",u=>{s.capital=u,s.cargado.capital=!0}),Ye("ingresos",u=>{s.ingresos=u,s.cargado.ingresos=!0,t==="kifar"&&a()}),Ye("config",u=>{s.config=u,s.cargado.config=!0,t==="kifar"&&a()}),Ye("trabajos",u=>{s.trabajos=u,s.cargado.trabajos=!0,t==="trabajadores"&&a()})];return a(),()=>l.forEach(u=>u())}const He={trabajador:"",estado:"pendientes",desde:"",hasta:""};function Pp(n,e){if(!e.cargado.trabajadores){n.append(o("div.spinner"));return}const t=e.trabajadores||[];$n&&n.append(XE(n,e,t));const r=t.filter(a=>a.activo!==!1),i=t.filter(a=>a.activo===!1),s=o("div.card");s.append(o("div.card-head",{},[o("h3",{},`Trabajadores (${r.length})`),o("button.link",{onclick:()=>kp(null)},"+ Alta")])),r.length||s.append(o("div.card-empty",{},"Sin trabajadores activos"));for(const a of r)s.append(Bu(a,e));if(i.length){s.append(o("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:10px 0 2px;"},"De baja"));for(const a of i)s.append(Bu(a,e))}n.append(s),n.append(Np(e))}function Bu(n,e){const t=n.trabajos||[],i=t.filter(a=>!a.pagado).reduce((a,l)=>a+(Number(l.importe)||0),0),s=n.activo===!1;return o("div.card",{style:"padding:12px;"},[o("div.row",{style:"border:none;padding:0;"},[o("div.row-main",{},[o("div.row-label",{},[n.nombre,s?o("span.chip.baja",{style:"margin-left:6px;"},"baja"):null]),o("div.row-sub",{},[n.precioHoraHabitual?`${Ie(n.precioHoraHabitual)} €/h · `:"",`${t.length} trabajo${t.length===1?"":"s"}`,n.especialidades?` · ${n.especialidades}`:""].join(""))]),o("div.row-right",{},i>0?o("span.amount.pend",{},N(i)):o("span.small.muted",{},"al día"))]),o("div.btn-row",{},[o("button.btn.btn-sm.btn-primary",{onclick:()=>Cc(n,e)},"+ Trabajo"),o("button.btn.btn-sm",{onclick:()=>kp(n,e.trabajadores||[])},"Editar")])])}function XE(n,e,t){const r=t.filter(a=>a.activo!==!1),i=o("div.card",{style:"border-color:var(--gold);"});if(i.append(o("div.card-head",{},[o("h3",{},`Imputar horas a: ${$n.etiqueta}`),o("button.link",{onclick:()=>{$n=null,e.cargado.trabajadores&&ZE(n,e)}},"Cancelar")])),!r.length)return i.append(o("div.card-empty",{},"No hay trabajadores activos. Da de alta uno primero.")),i;i.append(o("div.small.muted",{},"Elige el trabajador; el formulario se abre con el proyecto ya prefijado."));const s=o("div.btn-row",{},r.map(a=>o("button.btn.btn-sm.btn-primary",{onclick:()=>Cc(a,e,null,$n.proyectoId)},`+ ${a.nombre}`)));return i.append(s),i}function ZE(n,e){_e(n),Pp(n,e)}function ew(n,e){const t=n.trabajos||H("trabajos")||[],r=t.filter(i=>(i.estado||"activo")==="activo").map(i=>[i.id,i.nombre]);if(r.push(["kifar","Kifar"],["personal","Personal"]),!r.some(([i])=>i===e)){const i=t.find(s=>s.id===e);r.unshift([e,i?`${i.nombre}${i.estado&&i.estado!=="activo"?" ("+i.estado+")":""}`:e])}return r}function kp(n,e){const t=!n;re(t?"Nuevo trabajador":`Editar ${n.nombre}`,r=>{const i=o("input",{value:n?.nombre||"",placeholder:"Nombre"}),s=o("input",{value:n?.telefono||"",placeholder:"Teléfono"}),a=o("input",{type:"number",step:"0.5",value:n?.precioHoraHabitual??"",placeholder:"€/h"}),l=o("input",{value:n?.especialidades||"",placeholder:"p. ej. carpintería"}),u=o("textarea",{rows:2,placeholder:"Notas"},n?.notas||""),h=async()=>{if(!i.value.trim()){D("Falta el nombre","err");return}const g=(H("trabajadores")||[]).slice().map(_=>({..._}));if(t)g.push({id:me(),nombre:i.value.trim(),telefono:s.value.trim(),precioHoraHabitual:parseFloat(a.value)||0,especialidades:l.value.trim(),notas:u.value.trim(),activo:!0,fechaAlta:X(),trabajos:[]});else{const _=g.find(y=>y.id===n.id);if(!_){D("No encontrado","err");return}_.nombre=i.value.trim(),_.telefono=s.value.trim(),_.precioHoraHabitual=parseFloat(a.value)||0,_.especialidades=l.value.trim(),_.notas=u.value.trim()}try{await Z("trabajadores",g),D(t?"Trabajador creado":"Guardado","ok"),r()}catch{D("No se pudo guardar","err")}},f=[o("button.btn",{onclick:r},"Cancelar"),o("button.btn.btn-primary",{onclick:h},t?"Crear":"Guardar")];let m=null;if(!t){const g=(n.trabajos||[]).length;n.activo===!1?m=o("button.btn.btn-sm",{onclick:()=>qu(n.id,!0,r)},"Reactivar"):m=o("button.btn.btn-sm.btn-danger",{onclick:()=>qu(n.id,!1,r)},"Dar de baja"),g===0&&(m=o("div",{style:"display:flex;gap:8px;"},[m,o("button.btn.btn-sm.btn-danger",{onclick:()=>tw(n.id,r)},"Eliminar")]))}return o("div",{},[Ae("Nombre",i),o("div.field-grid",{},[Ae("Teléfono",s),Ae("Precio €/h habitual",a)]),Ae("Especialidades",l),Ae("Notas",u),m?o("div.field",{},[o("label",{},"Estado"),m]):null,o("div.btn-row",{},f)])})}async function qu(n,e,t){const r=(H("trabajadores")||[]).slice().map(s=>({...s})),i=r.find(s=>s.id===n);if(i){i.activo=e;try{await Z("trabajadores",r),D(e?"Reactivado":"Dado de baja","ok"),t?.()}catch{D("No se pudo guardar","err")}}}async function tw(n,e){const t=H("trabajadores")||[],r=t.find(s=>s.id===n);if(r&&(r.trabajos||[]).length){D("Tiene trabajos: no se puede eliminar","err");return}const i=t.filter(s=>s.id!==n);try{await Z("trabajadores",i),D("Trabajador eliminado","ok"),e?.()}catch{D("No se pudo guardar","err")}}function Cc(n,e,t=null,r=null){const i=!!t;if(i&&t.pagado){D("No se puede editar un trabajo pagado","err");return}re(`${i?"Editar":"Registrar"} trabajo · ${n.nombre}`,s=>{const a=o("input",{type:"date",value:t?.fecha||X()}),l=o("input",{value:t?.descripcion||"",placeholder:"Descripción"}),u=o("select",{},[o("option",{value:"horas"},"Horas"),o("option",{value:"cuenta"},"A cuenta")]);u.value=t?.tipo||"horas";const h=t?.proyectoId||r||"kifar",f=o("select",{},ew(e,h).map(([U,V])=>o("option",{value:U},V)));f.value=h;const m=o("textarea",{rows:2,placeholder:"Notas"},t?.notas||""),g=o("input",{type:"number",step:"0.25",value:t?.horas??"",placeholder:"Horas"}),_=o("input",{type:"number",step:"0.5",value:t?.precioHora??(n.precioHoraHabitual||""),placeholder:"€/h"}),y=o("input",{type:"number",step:"0.01",value:t?.tipo==="cuenta"&&!t?.unidades?t?.importe??"":"",placeholder:"Importe directo €"}),I=o("input",{type:"number",step:"1",value:t?.unidades??"",placeholder:"Unidades"}),P=o("input",{type:"number",step:"0.01",value:t?.precioUnidad??"",placeholder:"€/unidad"}),x=o("div.field-grid",{},[Ae("Horas",g),Ae("Precio €/h",_)]),F=o("div",{},[Ae("Importe directo",y),o("div.field-grid",{},[Ae("Unidades",I),Ae("€/unidad",P)])]),O=()=>{x.hidden=u.value!=="horas",F.hidden=u.value!=="cuenta"};u.addEventListener("change",O);const $=async()=>{if(!l.value.trim()){D("Falta la descripción","err");return}const U=u.value;let V=parseFloat(y.value)||0;const T=parseFloat(g.value)||0,E=parseFloat(_.value)||n.precioHoraHabitual||0,w=parseFloat(I.value)||0,A=parseFloat(P.value)||0;if(V||(U==="horas"&&T&&E?V=T*E:U==="cuenta"&&w&&A&&(V=w*A)),!V||V<=0){D("Falta importe (o horas+€/h, o unidades+€/ud)","err");return}const C=f.value.trim()||"kifar",S=(H("trabajadores")||[]).slice().map(be=>({...be,trabajos:(be.trabajos||[]).slice()})),b=S.find(be=>be.id===n.id);if(!b){D("Trabajador no encontrado","err");return}if(i){const be=b.trabajos.findIndex(Dt=>Dt.id===t.id);if(be<0){D("Trabajo no encontrado","err");return}if(b.trabajos[be].pagado){D("No se puede editar un trabajo pagado","err");return}const Pe={...b.trabajos[be],fecha:a.value||X(),tipo:U,descripcion:l.value.trim(),importe:V,proyectoId:C,deducible:C!=="personal",notas:m.value.trim()};U==="horas"?(Pe.horas=T||0,Pe.precioHora=E||0,delete Pe.unidades,delete Pe.precioUnidad):(Pe.unidades=w||null,Pe.precioUnidad=A||null,delete Pe.horas,delete Pe.precioHora),b.trabajos[be]=Pe;try{await Z("trabajadores",S),D("Trabajo actualizado","ok"),s()}catch{D("No se pudo guardar","err")}return}const se={id:me(),fecha:a.value||X(),tipo:U,descripcion:l.value.trim(),importe:V,proyectoId:C,deducible:C!=="personal",notas:m.value.trim(),pagado:!1,fechaPago:null,formaPago:null,cuentaPago:null};U==="horas"?(se.horas=T||0,se.precioHora=E||0):(se.unidades=w||null,se.precioUnidad=A||null),b.trabajos.push(se);try{await Z("trabajadores",S),$n=null,D(`Trabajo registrado (${N(V)})`,"ok"),s()}catch{D("No se pudo guardar","err")}};return O(),o("div",{},[o("div.field-grid",{},[Ae("Fecha",a),Ae("Tipo",u)]),Ae("Descripción",l),x,F,Ae("Proyecto",f),Ae("Notas",m),o("div.btn-row",{},[o("button.btn",{onclick:s},"Cancelar"),o("button.btn.btn-primary",{onclick:$},i?"Guardar":"Registrar")])])})}function nw(n,e){re("Eliminar trabajo",t=>{const r=async()=>{const i=(H("trabajadores")||[]).slice().map(a=>({...a,trabajos:(a.trabajos||[]).slice()})),s=i.find(a=>a.id===n.id);if(!s){D("Trabajador no encontrado","err");return}s.trabajos=s.trabajos.filter(a=>a.id!==e.id);try{await Z("trabajadores",i),D(`Trabajo eliminado${e.pagado?" (el pago NO se devuelve a capital)":""}`,"ok"),t()}catch{D("No se pudo guardar","err")}};return o("div",{},[o("div.hero",{},[o("div.hero-label",{},`${n.nombre} · ${e.fecha||"—"}`),o("div.hero-value",{},N(e.importe)),o("div.hero-sub",{},e.descripcion||"")]),e.pagado?o("div.card",{style:"border-color:var(--red);"},o("div.row-sub",{style:"color:var(--red);font-size:11px;"},"⚠ Este trabajo está PAGADO. Al eliminarlo, el pago NO se devuelve a capital: el saldo no cambia.")):o("div.small.muted",{},"Se eliminará del historial del trabajador."),o("div.btn-row",{},[o("button.btn",{onclick:t},"Cancelar"),o("button.btn.btn-danger",{onclick:r},"Eliminar")])])})}function Np(n){const e=o("div.card");e.append(o("div.card-head",{},o("h3",{},"Historial")));const t=n.trabajadores||[],r=o("select",{},[o("option",{value:""},"Todos"),...t.map(m=>o("option",{value:m.id},m.nombre))]);r.value=He.trabajador;const i=o("select",{},[o("option",{value:"pendientes"},"Pendientes"),o("option",{value:"pagados"},"Pagados"),o("option",{value:"todos"},"Todos")]);i.value=He.estado;const s=o("input",{type:"date",value:He.desde}),a=o("input",{type:"date",value:He.hasta}),l=()=>{He.trabajador=r.value,He.estado=i.value,He.desde=s.value,He.hasta=a.value,rw(e,n)};[r,i,s,a].forEach(m=>m.addEventListener("change",l)),e.append(o("div.field-grid",{},[Ae("Trabajador",r),Ae("Estado",i)])),e.append(o("div.field-grid",{},[Ae("Desde",s),Ae("Hasta",a)]));let u=[];for(const m of t)if(!(He.trabajador&&m.id!==He.trabajador))for(const g of m.trabajos||[])He.estado==="pendientes"&&g.pagado||He.estado==="pagados"&&!g.pagado||He.desde&&(g.fecha||"")<He.desde||He.hasta&&(g.fecha||"")>He.hasta||u.push({t:m,j:g});u.sort((m,g)=>(g.j.fecha||"").localeCompare(m.j.fecha||""));const h=u.reduce((m,g)=>m+(Number(g.j.importe)||0),0),f=u.filter(m=>!m.j.pagado).reduce((m,g)=>m+(Number(g.j.importe)||0),0);e.append(o("div.kpis",{},[Fo(String(u.length),"Registros"),Fo(N(h),"Importe"),Fo(N(f),"Pendiente")])),u.length||e.append(o("div.card-empty",{},"Sin resultados"));for(const{t:m,j:g}of u)e.append(iw(m,g,n));return e}function rw(n,e){const t=Np(e);n.replaceWith(t)}function iw(n,e,t){const r=e.tipo==="horas"?`${Ie(e.horas||0)} h × ${Ie(e.precioHora||0)} €`:e.unidades?`${Ie(e.unidades)} × ${Ie(e.precioUnidad||0)} €`:"a cuenta";return o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},`${n.nombre} · ${e.descripcion}`),o("div.row-sub",{},`${e.fecha||"—"} · ${r} · ${e.proyectoId}${e.pagado?` · pagado ${e.fechaPago||""} (${e.cuentaPago||""})`:""}`)]),o("div.row-right",{},[o("div.amount"+(e.pagado?"":".pend"),{},N(e.importe)),e.pagado?o("span.chip.ok",{},"pagado"):null,o("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;flex-wrap:wrap;"},[e.pagado?null:o("button.btn.btn-sm.btn-primary",{onclick:()=>sw(n,e)},"Pagar"),e.pagado?null:o("button.btn.btn-sm",{onclick:()=>Cc(n,t,e)},"Editar"),o("button.btn.btn-sm.btn-danger",{onclick:()=>nw(n,e)},"Borrar")].filter(Boolean))])])}function sw(n,e,t){re("Marcar pagado",r=>{const i=Object.keys((H("capital")||{}).cuentas||{});i.includes("revolut")||i.unshift("revolut");const s=o("select",{},i.map(u=>o("option",{value:u},u)));s.value="revolut";const a=o("select",{},["transferencia","efectivo","bizum"].map(u=>o("option",{value:u},u)));a.value="transferencia";const l=async()=>{try{await ow(n.id,e.id,s.value,a.value),D(`Pagado ${N(e.importe)} a ${n.nombre}`,"ok"),r()}catch{D("No se pudo registrar el pago","err")}};return o("div",{},[o("div.hero",{},[o("div.hero-label",{},`${n.nombre} · ${e.descripcion}`),o("div.hero-value",{},N(e.importe))]),o("div.field-grid",{},[Ae("Cuenta",s),Ae("Forma de pago",a)]),o("div.btn-row",{},[o("button.btn",{onclick:r},"Cancelar"),o("button.btn.btn-primary",{onclick:l},"Confirmar pago")])])})}async function ow(n,e,t,r){const i=X(),s=(H("trabajadores")||[]).map(m=>({...m,trabajos:(m.trabajos||[]).map(g=>({...g}))})),a=s.find(m=>m.id===n),l=a&&a.trabajos.find(m=>m.id===e);if(!l)throw new Error("trabajo no encontrado");if(l.pagado)throw new Error("ya pagado");l.pagado=!0,l.fechaPago=i,l.formaPago=r||"transferencia",l.cuentaPago=t||"revolut",l.importePagado=l.importe;const u=H("capital")||{cuentas:{},historial:[]},h={...u,cuentas:{...u.cuentas||{}},historial:(u.historial||[]).slice()},f=l.cuentaPago;h.cuentas[f]=(h.cuentas[f]||0)-l.importe,h.historial.push({id:me(),tipo:"trabajador",cuenta:f,importe:-l.importe,concepto:`${a.nombre}: ${l.descripcion}`,fechaISO:i}),await ki({trabajadores:s,capital:h})}function Ae(n,e){return o("div.field",{},[o("label",{},n),e])}function Fo(n,e){return o("div.kpi",{},[o("div.kpi-v",{},n),o("div.kpi-l",{},e)])}let Gr={modo:"panel",id:null};const Lt={tipo:"",estado:"activos"};function aw(n,e={}){n.append(o("h1.section-title",{},"Trabajos"));const t=o("div");n.append(t);const r={trabajos:null,trabajadores:null,config:null,crm:null,capital:null,cargado:{}},i=()=>{if(_e(t),Gr.modo==="ficha"){const h=(r.trabajos||[]).find(f=>f.id===Gr.id);h?lw(t,r,h):(Gr={modo:"panel",id:null},zu(t,r))}else zu(t,r)},s=h=>{Gr={modo:"ficha",id:h},i()},a=()=>{Gr={modo:"panel",id:null},i()};r._irFicha=s,r._irPanel=a,r._ctx=e;const l=h=>Ye(h,f=>{r[h]=f,r.cargado[h]=!0,i()}),u=[l("trabajos"),l("trabajadores"),l("config"),l("crm"),l("capital")];return i(),()=>u.forEach(h=>h())}function zu(n,e){if(!e.cargado.trabajos||!e.cargado.trabajadores){n.append(o("div.spinner"));return}const t=e.trabajos||[],r=e.trabajadores||[],i=o("div.card");i.append(o("div.card-head",{},[o("h3",{},"Panel"),o("button.link",{onclick:()=>cw(e)},"+ Trabajo")]));const s=o("select",{},[o("option",{value:""},"Todos los tipos"),...In.map(([y,I])=>o("option",{value:y},I))]);s.value=Lt.tipo;const a=o("select",{},[o("option",{value:"activos"},"Activos"),o("option",{value:"cerrados"},"Cerrados"),o("option",{value:"cancelados"},"Cancelados"),o("option",{value:"todos"},"Todos")]);a.value=Lt.estado;const l=()=>{Lt.tipo=s.value,Lt.estado=a.value,e._irPanel()};[s,a].forEach(y=>y.addEventListener("change",l)),i.append(o("div.field-grid",{},[G("Tipo",s),G("Estado",a)])),n.append(i);let u=t.slice();Lt.tipo&&(u=u.filter(y=>y.tipo===Lt.tipo)),Lt.estado==="activos"?u=u.filter(y=>(y.estado||"activo")==="activo"):Lt.estado==="cerrados"?u=u.filter(y=>y.estado==="cerrado"):Lt.estado==="cancelados"&&(u=u.filter(y=>y.estado==="cancelado")),u.sort((y,I)=>(y.fechaEntrega||"9999").localeCompare(I.fechaEntrega||"9999"));const h=o("div.card");if(!u.length){h.append(o("div.card-empty",{},'Sin trabajos con estos filtros. Crea uno con "+ Trabajo".')),n.append(h);return}const f=o("div",{style:"overflow-x:auto;"}),m=o("table.ftable");m.append(o("thead",{},o("tr",{},["Trabajo","Tipo","Cliente","Fase","Entrega","Coste","Ingreso","Bº/Pª","Margen","Cobrado","Pendiente"].map((y,I)=>o("th",{style:I>=5?"text-align:right;":""},y)))));const g=o("tbody"),_={coste:0,ingreso:0,resultado:0,cobrado:0,pendiente:0};for(const y of u){const I=Js(y,r);_.coste+=I.costeTotal,_.ingreso+=I.ingresoTotal,_.resultado+=I.resultado,_.cobrado+=I.cobrado,_.pendiente+=I.pendienteCobro;const P=y.fechaEntrega?pt(y.fechaEntrega):null,x=y.fechaEntrega?o("span",{style:P!=null&&P<0&&y.estado==="activo"?"color:var(--red);":""},y.fechaEntrega):"·",F=o("tr",{style:"cursor:pointer;",onclick:()=>e._irFicha(y.id)},[o("td",{},y.nombre||"(sin nombre)"),o("td",{},Yn(y.tipo)),o("td",{},y.cliente||"·"),o("td",{},yc(y)||"·"),o("td",{},x),o("td",{style:"text-align:right;"},N(I.costeTotal)),o("td",{style:"text-align:right;"},N(I.ingresoTotal)),o("td"+(I.resultado>=0?".pos":".neg"),{style:"text-align:right;"},N(I.resultado)),o("td",{style:"text-align:right;"},`${Ie(I.margen,1)}%`),o("td",{style:"text-align:right;"},N(I.cobrado)),o("td",{style:"text-align:right;"},N(I.pendienteCobro))]);g.append(F)}g.append(o("tr",{style:"font-weight:500;border-top:1px solid var(--border2);"},[o("td",{},"TOTAL"),o("td",{},""),o("td",{},""),o("td",{},""),o("td",{},""),o("td",{style:"text-align:right;"},N(_.coste)),o("td",{style:"text-align:right;"},N(_.ingreso)),o("td"+(_.resultado>=0?".pos":".neg"),{style:"text-align:right;"},N(_.resultado)),o("td",{},""),o("td",{style:"text-align:right;"},N(_.cobrado)),o("td",{style:"text-align:right;"},N(_.pendiente))])),m.append(g),f.append(m),h.append(f),h.append(o("div.small.muted",{style:"margin-top:8px;"},`${u.length} trabajo${u.length===1?"":"s"} · toca una fila para abrir la ficha`)),n.append(h)}function cw(n){re("Nuevo trabajo",e=>{const t=n.config||{},r=o("input",{placeholder:"p. ej. Camper Terro",autofocus:!0}),i=o("select",{},In.map(([O,$])=>o("option",{value:O},$))),s=o("input",{placeholder:"Cliente"}),a=o("input",{placeholder:"Contacto (opcional)"}),l=o("input",{placeholder:"Vehículo / descripción"}),u=o("input",{type:"date",value:X()}),h=o("input",{type:"date"}),f=o("input",{type:"number",step:"0.01",placeholder:"Ingreso presupuestado €"});let m=null;const g=(n.crm?.presupuestos||[]).filter(O=>O.estado==="aceptado"),_=new Set((n.trabajos||[]).map(O=>O.presupuestoId).filter(Boolean)),y=g.filter(O=>!_.has(O.id)),I=n.crm?.clientes||[],P=O=>I.find($=>$.id===O)?.nombre||"";let x=null;if(y.length){const O=o("select",{},[o("option",{value:""},"— ninguno (trabajo en blanco) —"),...y.map($=>o("option",{value:$.id},`${$.concepto||"(sin concepto)"} · ${N($.total||0)}`))]);O.addEventListener("change",()=>{const $=y.find(U=>U.id===O.value);m=$?$.id:null,$&&(r.value||(r.value=$.concepto||""),l.value||(l.value=$.concepto||""),s.value||(s.value=P($.clienteId)),f.value||(f.value=$.total||""))}),x=G("Crear desde presupuesto",O)}const F=async()=>{if(!r.value.trim()){D("Falta el nombre","err");return}const O=i.value,$={id:me(),nombre:r.value.trim(),tipo:O,cliente:s.value.trim(),contacto:a.value.trim(),descripcion:l.value.trim(),fechaInicio:u.value||X(),fechaEntrega:h.value||"",estado:"activo",presupuestoId:m||null,ingresoPresupuestado:parseFloat(f.value)||0,extras:[],fases:Ep(t,O),tareas:[],materiales:[],otrosGastos:[],cobros:[],notas:[]},U=(H("trabajos")||[]).slice();U.push($);try{await Z("trabajos",U),D(`Trabajo "${$.nombre}" creado`,"ok"),e(),n._irFicha($.id)}catch{D("No se pudo guardar","err")}};return o("div",{},[x,G("Nombre",r),o("div.field-grid",{},[G("Tipo",i),G("Cliente",s)]),G("Contacto",a),G("Descripción",l),o("div.field-grid",{},[G("Fecha inicio",u),G("Fecha entrega",h)]),G("Ingreso presupuestado €",f),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:F},"Crear")])].filter(Boolean))})}function lw(n,e,t){const r=e.trabajadores||[],i=Js(t,r);n.append(o("div.btn-row",{style:"margin-top:0;margin-bottom:10px;"},[o("button.btn.btn-sm",{onclick:()=>e._irPanel()},"‹ Panel")]));const s=t.estado==="cerrado"||t.estado==="cancelado",a=o("div.card");a.append(o("div.card-head",{},[o("h3",{},t.nombre||"(sin nombre)"),o("div",{style:"display:flex;gap:6px;align-items:center;"},[o("span.chip",{},Yn(t.tipo)),s?o("span.chip",{},t.estado):null].filter(Boolean))])),a.append(o("div.row-sub",{style:"font-size:11px;"},[t.cliente?`Cliente: ${t.cliente}`:"Sin cliente",t.contacto?` · ${t.contacto}`:"",t.descripcion?` · ${t.descripcion}`:""].join(""))),a.append(o("div.small.muted",{style:"margin-top:4px;"},`${t.fechaInicio||"—"} → ${t.fechaEntrega||"—"} · fase actual: ${yc(t)||"—"}`)),a.append(o("div.btn-row",{},[o("button.btn.btn-sm",{onclick:()=>dw(t)},"Editar datos"),t.estado==="activo"?o("button.btn.btn-sm.btn-danger",{onclick:()=>hw(t,i)},"Cerrar trabajo"):o("button.btn.btn-sm",{onclick:()=>pw(t)},"Reabrir")])),n.append(a),n.append(uw(i)),n.append(fw(t)),n.append(_w(t)),n.append(Dp(t)),n.append(Ew(t)),n.append(ww(t,e,r)),n.append(Tw(t)),n.append(Cw(t)),n.append(Dw(t))}function uw(n){const e=o("div.card");return e.append(o("div.card-head",{},o("h3",{},"Resumen económico"))),e.append(o("div.kpis",{},[Ut(N(n.ingresoTotal),"Ingreso"),Ut(N(n.costeTotal),"Coste"),Ut(N(n.resultado),"Resultado")])),e.append(o("div.kpis",{},[Ut(`${Ie(n.margen,1)}%`,"Margen"),Ut(N(n.cobrado),"Cobrado"),Ut(N(n.pendienteCobro),"Pendiente")])),e.append(o("div.small.muted",{style:"margin-top:6px;"},`Materiales ${N(n.costeMateriales)} · Mano de obra ${N(n.costeManoObra)} · Otros ${N(n.costeOtros)}`)),e}function Sc(){return(H("trabajos")||[]).map(n=>({...n,extras:(n.extras||[]).slice(),fases:(n.fases||[]).slice(),tareas:(n.tareas||[]).slice(),materiales:(n.materiales||[]).slice(),otrosGastos:(n.otrosGastos||[]).slice(),cobros:(n.cobros||[]).slice(),notas:(n.notas||[]).slice()}))}async function Me(n,e,t){const r=Sc(),i=r.find(s=>s.id===n);if(!i){D("Trabajo no encontrado","err");return}e(i);try{await Z("trabajos",r),t&&D(t,"ok")}catch{D("No se pudo guardar","err")}}function dw(n){re(`Editar · ${n.nombre}`,e=>{const t=o("input",{value:n.nombre||""}),r=o("input",{value:n.cliente||""}),i=o("input",{value:n.contacto||""}),s=o("input",{value:n.descripcion||""}),a=o("input",{type:"date",value:n.fechaInicio||""}),l=o("input",{type:"date",value:n.fechaEntrega||""}),u=o("input",{type:"number",step:"0.01",value:n.ingresoPresupuestado??0}),h=async()=>{if(!t.value.trim()){D("Falta el nombre","err");return}await Me(n.id,f=>{f.nombre=t.value.trim(),f.cliente=r.value.trim(),f.contacto=i.value.trim(),f.descripcion=s.value.trim(),f.fechaInicio=a.value||"",f.fechaEntrega=l.value||"",f.ingresoPresupuestado=parseFloat(u.value)||0},"Guardado"),e()};return o("div",{},[G("Nombre",t),G("Cliente",r),G("Contacto",i),G("Descripción",s),o("div.field-grid",{},[G("Fecha inicio",a),G("Fecha entrega",l)]),G("Ingreso presupuestado €",u),o("div.small.muted",{},`Tipo: ${Yn(n.tipo)} (no editable — cambiaría la plantilla de fases).`),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:h},"Guardar")])])})}function hw(n,e){re("Cerrar trabajo",t=>o("div",{},[o("div.hero",{},[o("div.hero-label",{},n.nombre),o("div.hero-value",{},N(e.resultado)),o("div.hero-sub",{},`margen ${Ie(e.margen,1)}%`)]),e.pendienteCobro>.005?o("div.card",{style:"border-color:var(--gold);"},o("div.row-sub",{style:"color:var(--gold);font-size:11px;"},`⚠ Queda pendiente de cobro ${N(e.pendienteCobro)}. ¿Cerrar igualmente?`)):o("div.small.muted",{},"El trabajo pasará a estado cerrado."),o("div.btn-row",{},[o("button.btn",{onclick:t},"Cancelar"),o("button.btn.btn-danger",{onclick:async()=>{await Me(n.id,r=>{r.estado="cerrado"},"Trabajo cerrado"),t()}},"Cerrar trabajo")])]))}async function pw(n){await Me(n.id,e=>{e.estado="activo"},"Trabajo reabierto")}function fw(n){const e=o("div.card");e.append(o("div.card-head",{},[o("h3",{},"Fases"),o("div",{style:"display:flex;gap:12px;align-items:center;"},[o("button.link",{onclick:()=>gw(n)},"+ Fase"),o("button.link",{onclick:()=>mw(n)},"Avanzar →")])]));const t=n.fases||[];if(!t.length)return e.append(o("div.card-empty",{},'Sin fases. Añade una con "+ Fase".')),e;const r=i=>s=>{s.stopPropagation(),i()};return t.forEach((i,s)=>{const a=i.estado==="Completada"?".ok":i.estado==="En curso"?".pend":"";e.append(o("div.row",{style:"cursor:pointer;",onclick:()=>vw(n,s)},[o("div.row-main",{},[o("div.row-label",{},`${s+1}. ${i.nombre}`),o("div.row-sub",{},[i.fechaPrevista?`prev. ${i.fechaPrevista}`:"",i.fechaFin?` · fin ${i.fechaFin}`:"",i.notas?` · ${i.notas}`:""].join("")||"sin fechas")]),o("div.row-right",{style:"display:flex;gap:6px;align-items:center;"},[o("div",{style:"display:flex;flex-direction:column;gap:2px;"},[o("button.btn.btn-sm",{disabled:s===0,title:"Subir",onclick:r(()=>Hu(n,s,-1))},"↑"),o("button.btn.btn-sm",{disabled:s===t.length-1,title:"Bajar",onclick:r(()=>Hu(n,s,1))},"↓")]),o("span.chip"+(a||""),{},i.estado)])]))}),e}async function mw(n){await Me(n.id,e=>{const t=e.fases||[];let r=t.findIndex(i=>i.estado==="En curso");if(r<0&&(r=t.findIndex(i=>i.estado!=="Completada")),r<0){D("Todas las fases están completadas","ok");return}t[r]={...t[r],estado:"Completada",fechaFin:t[r].fechaFin||X()},t[r+1]&&(t[r+1]={...t[r+1],estado:"En curso"})},"Fase avanzada")}async function Hu(n,e,t){const r=e+t;await Me(n.id,i=>{r<0||r>=i.fases.length||([i.fases[e],i.fases[r]]=[i.fases[r],i.fases[e]])},"Fases reordenadas")}function gw(n){re("Nueva fase",e=>{const t=o("input",{placeholder:"Nombre de la fase",autofocus:!0}),r=o("select",{},Ip.map(s=>o("option",{value:s},s))),i=async()=>{if(!t.value.trim()){D("Falta el nombre","err");return}await Me(n.id,s=>{s.fases.push({nombre:t.value.trim(),estado:r.value,fechaPrevista:"",fechaFin:"",notas:""})},"Fase añadida"),e()};return o("div",{},[G("Nombre",t),G("Estado",r),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:i},"Añadir")])])})}function vw(n,e){const t=(n.fases||[])[e];t&&re(`Fase · ${t.nombre}`,r=>{const i=o("input",{value:t.nombre||""}),s=o("select",{},Ip.map(m=>o("option",{value:m},m)));s.value=t.estado||"Pendiente";const a=o("input",{type:"date",value:t.fechaPrevista||""}),l=o("input",{type:"date",value:t.fechaFin||""}),u=o("textarea",{rows:2,placeholder:"Notas"},t.notas||""),h=async()=>{const m=i.value.trim();if(!m){D("Falta el nombre","err");return}await Me(n.id,g=>{const _=g.fases[e]?.nombre;g.fases[e]={...g.fases[e],nombre:m,estado:s.value,fechaPrevista:a.value||"",fechaFin:l.value||"",notas:u.value.trim()},_&&_!==m&&(g.tareas=g.tareas.map(y=>y.fase===_?{...y,fase:m}:y))},"Fase actualizada"),r()},f=async()=>{const m=t.nombre,g=(n.tareas||[]).filter(_=>_.fase===m).length;await Me(n.id,_=>{_.fases=_.fases.filter((y,I)=>I!==e),_.tareas=_.tareas.map(y=>y.fase===m?{...y,fase:""}:y)}),D(g?`Fase eliminada · ${g} tarea${g===1?"":"s"} sin fase`:"Fase eliminada","ok"),r()};return o("div",{},[G("Nombre",i),G("Estado",s),o("div.field-grid",{},[G("Fecha prevista",a),G("Fecha fin",l)]),G("Notas",u),o("div.btn-row",{},[o("button.btn",{onclick:r},"Cancelar"),o("button.btn.btn-danger",{onclick:f},"Eliminar"),o("button.btn.btn-primary",{onclick:h},"Guardar")])])})}function _w(n){const e=o("div.card");e.append(o("div.card-head",{},[o("h3",{},"Extras"),o("button.link",{onclick:()=>yw(n)},"+ Extra")]));const t=n.extras||[];if(!t.length)return e.append(o("div.card-empty",{},"Sin trabajos extra")),e;for(const r of t)e.append(o("div.row",{},[o("div.row-main",{},o("div.row-label",{},r.concepto||"(sin concepto)")),o("div.row-right",{},[o("div.amount.pos",{},"+"+N(r.importe)),o("button.btn.btn-sm.btn-danger",{style:"margin-top:4px;",onclick:()=>Me(n.id,i=>{i.extras=i.extras.filter(s=>s.id!==r.id)},"Extra eliminado")},"Borrar")])]));return e}function yw(n){re("Nuevo extra",e=>{const t=o("input",{placeholder:"Concepto",autofocus:!0}),r=o("input",{type:"number",step:"0.01",placeholder:"Importe €"}),i=async()=>{const s=parseFloat(r.value)||0;if(!t.value.trim()||!s){D("Falta concepto o importe","err");return}await Me(n.id,a=>{a.extras.push({id:me(),concepto:t.value.trim(),importe:s})},"Extra añadido"),e()};return o("div",{},[G("Concepto",t),G("Importe €",r),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:i},"Añadir")])])})}const nn={fase:"",estado:""};function Dp(n){const e=o("div.card");e.append(o("div.card-head",{},[o("h3",{},"Tareas"),o("button.link",{onclick:()=>Gu(n)},"+ Tarea")]));const t=n.tareas||[],r=(n.fases||[]).map(u=>u.nombre),i=o("select",{},[o("option",{value:""},"Todas las fases"),...r.map(u=>o("option",{value:u},u))]);i.value=nn.fase;const s=o("select",{},[o("option",{value:""},"Todos"),...Tp.map(u=>o("option",{value:u},u))]);s.value=nn.estado;const a=()=>{nn.fase=i.value,nn.estado=s.value;const u=Dp((H("trabajos")||[]).find(h=>h.id===n.id)||n);e.replaceWith(u)};[i,s].forEach(u=>u.addEventListener("change",a)),t.length&&e.append(o("div.field-grid",{},[G("Fase",i),G("Estado",s)]));let l=t.slice();if(nn.fase&&(l=l.filter(u=>u.fase===nn.fase)),nn.estado&&(l=l.filter(u=>u.estado===nn.estado)),l.sort((u,h)=>(u.fechaLimite||"9999").localeCompare(h.fechaLimite||"9999")),!l.length)return e.append(o("div.card-empty",{},t.length?"Sin tareas con estos filtros":"Sin tareas")),e;for(const u of l){const h=u.fechaLimite?pt(u.fechaLimite):null,f=u.estado==="Hecha"?o("span.chip.ok",{},"hecha"):u.estado==="En curso"?o("span.chip.pend",{},"en curso"):o("span.chip",{},"pendiente");e.append(o("div.row",{style:"cursor:pointer;",onclick:()=>Gu(n,u)},[o("div.row-main",{},[o("div.row-label",{},u.titulo||"(sin título)"),o("div.row-sub",{},[u.fase||"sin fase",u.responsable?` · ${u.responsable}`:"",u.fechaLimite?` · ${u.fechaLimite}${h!=null&&h<0&&u.estado!=="Hecha"?" (vencida)":""}`:""].join(""))]),o("div.row-right",{},f)]))}return e}function Gu(n,e=null){const t=!!e;re(t?"Editar tarea":"Nueva tarea",r=>{const i=o("input",{value:e?.titulo||"",placeholder:"Título",autofocus:!0}),s=(n.fases||[]).map(y=>y.nombre),a=o("select",{},[o("option",{value:""},"— sin fase —"),...s.map(y=>o("option",{value:y},y))]);a.value=e?.fase||"";const l="resp-"+me(),u=o("datalist",{id:l},bw().map(y=>o("option",{value:y}))),h=o("input",{value:e?.responsable||"Rubén",list:l,placeholder:"Responsable"}),f=o("select",{},Tp.map(y=>o("option",{value:y},y)));f.value=e?.estado||"Pendiente";const m=o("input",{type:"date",value:e?.fechaLimite||""}),g=o("textarea",{rows:2,placeholder:"Notas"},e?.notas||""),_=async()=>{if(!i.value.trim()){D("Falta el título","err");return}await Me(n.id,y=>{const I={id:e?.id||me(),fase:a.value,titulo:i.value.trim(),responsable:h.value.trim(),estado:f.value,fechaLimite:m.value||"",notas:g.value.trim()};if(t){const P=y.tareas.findIndex(x=>x.id===I.id);P>=0?y.tareas[P]=I:y.tareas.push(I)}else y.tareas.push(I)},t?"Tarea actualizada":"Tarea creada"),r()};return o("div",{},[G("Título",i),o("div.field-grid",{},[G("Fase",a),G("Estado",f)]),o("div.field-grid",{},[G("Responsable",h),G("Fecha límite",m)]),u,G("Notas",g),o("div.btn-row",{},[o("button.btn",{onclick:r},"Cancelar"),t?o("button.btn.btn-danger",{onclick:async()=>{await Me(n.id,y=>{y.tareas=y.tareas.filter(I=>I.id!==e.id)},"Tarea eliminada"),r()}},"Eliminar"):null,o("button.btn.btn-primary",{onclick:_},t?"Guardar":"Crear")].filter(Boolean))])})}function bw(){const n=["Rubén"];for(const e of H("trabajadores")||[]){if(e.activo===!1)continue;const t=(e.nombre||"").trim();t&&!n.includes(t)&&n.push(t)}return n}function Ew(n){const e=o("div.card");e.append(o("div.card-head",{},[o("h3",{},"Materiales"),o("button.link",{onclick:()=>Wu(n)},"+ Material")]));const t=n.materiales||[];if(!t.length)return e.append(o("div.card-empty",{},"Sin materiales")),e;for(const r of t){const i=r.costeReal??r.costeEstimado??0,s=r.estadoCompra==="Recibido"?o("span.chip.ok",{},"recibido"):r.estadoCompra==="Pedido"?o("span.chip.pend",{},"pedido"):o("span.chip",{},"pendiente");e.append(o("div.row",{style:"cursor:pointer;",onclick:()=>Wu(n,r)},[o("div.row-main",{},[o("div.row-label",{},[r.nombre||"(sin nombre)",r.cantidad?` · ${Ie(r.cantidad)}`:""].join("")),o("div.row-sub",{},[r.costeReal!=null?`real ${N(r.costeReal)}`:r.costeEstimado!=null?`est. ${N(r.costeEstimado)}`:"sin coste",r.costeReal!=null&&r.costeEstimado!=null?` (est. ${N(r.costeEstimado)})`:"",r.proveedor?` · ${r.proveedor}`:""].join(""))]),o("div.row-right",{},[o("div.amount",{},N(i)),s])]))}return e}function Wu(n,e=null){const t=!!e;re(t?"Editar material":"Nuevo material",r=>{const i=o("input",{value:e?.nombre||"",placeholder:"Nombre",autofocus:!0}),s=o("input",{type:"number",step:"0.01",value:e?.cantidad??"",placeholder:"Cantidad"}),a=o("select",{},CE.map(m=>o("option",{value:m},m)));a.value=e?.estadoCompra||"Pendiente";const l=o("input",{type:"number",step:"0.01",value:e?.costeEstimado??"",placeholder:"Coste estimado €"}),u=o("input",{type:"number",step:"0.01",value:e?.costeReal??"",placeholder:"Coste real €"}),h=o("input",{value:e?.proveedor||"",placeholder:"Proveedor"}),f=async()=>{if(!i.value.trim()){D("Falta el nombre","err");return}await Me(n.id,m=>{const g={id:e?.id||me(),nombre:i.value.trim(),cantidad:s.value===""?null:parseFloat(s.value),estadoCompra:a.value,costeEstimado:l.value===""?null:parseFloat(l.value),costeReal:u.value===""?null:parseFloat(u.value),proveedor:h.value.trim()};if(t){const _=m.materiales.findIndex(y=>y.id===g.id);_>=0?m.materiales[_]=g:m.materiales.push(g)}else m.materiales.push(g)},t?"Material actualizado":"Material añadido"),r()};return o("div",{},[G("Nombre",i),o("div.field-grid",{},[G("Cantidad",s),G("Estado de compra",a)]),o("div.field-grid",{},[G("Coste estimado €",l),G("Coste real €",u)]),G("Proveedor",h),o("div.btn-row",{},[o("button.btn",{onclick:r},"Cancelar"),t?o("button.btn.btn-danger",{onclick:async()=>{await Me(n.id,m=>{m.materiales=m.materiales.filter(g=>g.id!==e.id)},"Material eliminado"),r()}},"Eliminar"):null,o("button.btn.btn-primary",{onclick:f},t?"Guardar":"Añadir")].filter(Boolean))])})}function ww(n,e,t){const r=o("div.card");r.append(o("div.card-head",{},[o("h3",{},"Horas de trabajadores"),o("button.link",{onclick:()=>Iw(e,n)},"+ Horas")]));const i=wp(t,n.id);if(!i.length)return r.append(o("div.card-empty",{},"Sin horas imputadas. Regístralas en Equipo → + Horas.")),r;const s=i.reduce((l,u)=>l+u.importe,0),a=i.reduce((l,u)=>l+(Number(u.horas)||0),0);r.append(o("div.kpis",{},[Ut(String(i.length),"Apuntes"),Ut(Ie(a)+" h","Horas"),Ut(N(s),"Coste MO")]));for(const l of i)r.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},`${l.trabajador} · ${l.descripcion||""}`),o("div.row-sub",{},`${l.fecha||"—"}${l.horas!=null?` · ${Ie(l.horas)} h`:""}${l.pagado?" · pagado":""}`)]),o("div.row-right",{},o("div.amount",{},N(l.importe)))]));return r}function Iw(n,e){YE(e.id,e.nombre),n._ctx?.nav?n._ctx.nav("equipo"):D("Ve a Equipo para imputar las horas","")}function Tw(n){const e=o("div.card");e.append(o("div.card-head",{},[o("h3",{},"Otros gastos"),o("button.link",{onclick:()=>Aw(n)},"+ Gasto")]));const t=n.otrosGastos||[];if(!t.length)return e.append(o("div.card-empty",{},"Sin otros gastos")),e;for(const r of t)e.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},r.concepto||"(sin concepto)"),o("div.row-sub",{},r.fecha||"—")]),o("div.row-right",{},[o("div.amount",{},N(r.importe)),o("button.btn.btn-sm.btn-danger",{style:"margin-top:4px;",onclick:()=>Me(n.id,i=>{i.otrosGastos=i.otrosGastos.filter(s=>s.id!==r.id)},"Gasto eliminado")},"Borrar")])]));return e}function Aw(n){re("Nuevo gasto",e=>{const t=o("input",{type:"date",value:X()}),r=o("input",{placeholder:"Concepto",autofocus:!0}),i=o("input",{type:"number",step:"0.01",placeholder:"Importe €"}),s=async()=>{const a=parseFloat(i.value)||0;if(!r.value.trim()||!a){D("Falta concepto o importe","err");return}await Me(n.id,l=>{l.otrosGastos.push({id:me(),fecha:t.value||X(),concepto:r.value.trim(),importe:a})},"Gasto añadido"),e()};return o("div",{},[o("div.field-grid",{},[G("Fecha",t),G("Importe €",i)]),G("Concepto",r),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:s},"Añadir")])])})}function Cw(n,e){const t=o("div.card");t.append(o("div.card-head",{},[o("h3",{},"Cobros del cliente"),o("button.link",{onclick:()=>Rw(n)},"+ Cobro")]));const r=(n.cobros||[]).slice().sort((i,s)=>(s.fecha||"").localeCompare(i.fecha||""));if(!r.length)return t.append(o("div.card-empty",{},"Sin cobros registrados")),t;for(const i of r)t.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},i.concepto||"Cobro"),o("div.row-sub",{},`${i.fecha||"—"} · ${i.cuenta||"revolut"}`)]),o("div.row-right",{},[o("div.amount.pos",{},"+"+N(i.importe)),o("button.btn.btn-sm.btn-danger",{style:"margin-top:4px;",onclick:()=>Pw(n,i)},"Borrar")])]));return t}function Sw(){const n=Object.keys((H("capital")||{}).cuentas||{});return n.includes("revolut")||n.unshift("revolut"),n}function Rw(n){re("Registrar cobro",e=>{const t=o("input",{type:"date",value:X()}),r=o("input",{placeholder:"Concepto (p. ej. anticipo)",autofocus:!0}),i=o("input",{type:"number",step:"0.01",placeholder:"Importe €"}),s=o("select",{},Sw().map(l=>o("option",{value:l},l)));s.value="revolut";const a=async()=>{const l=parseFloat(i.value)||0;if(!l||l<=0){D("Falta el importe","err");return}try{await kw(n,{fecha:t.value||X(),concepto:r.value.trim()||"Cobro",importe:l,cuenta:s.value}),D(`Cobro ${N(l)} · capital +${N(l)}`,"ok"),e()}catch{D("No se pudo registrar el cobro","err")}};return o("div",{},[o("div.field-grid",{},[G("Fecha",t),G("Importe €",i)]),G("Concepto",r),G("Cuenta",s),o("div.small.muted",{},"El cobro suma al capital de la cuenta y queda en el historial (atómico)."),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:a},"Registrar")])])})}function Pw(n,e){re("Eliminar cobro",t=>o("div",{},[o("div.hero",{},[o("div.hero-label",{},e.concepto||"Cobro"),o("div.hero-value",{},N(e.importe)),o("div.hero-sub",{},`${e.fecha||"—"} · ${e.cuenta||"revolut"}`)]),o("div.small.muted",{},`Se revertirá el capital: ${e.cuenta||"revolut"} −${N(e.importe)}.`),o("div.btn-row",{},[o("button.btn",{onclick:t},"Cancelar"),o("button.btn.btn-danger",{onclick:async()=>{try{await Nw(n,e),D("Cobro eliminado y capital revertido","ok"),t()}catch{D("No se pudo eliminar","err")}}},"Eliminar")])]))}async function kw(n,{fecha:e,concepto:t,importe:r,cuenta:i}){const s=Sc(),a=s.find(h=>h.id===n.id);if(!a)throw new Error("trabajo no encontrado");a.cobros.push({id:me(),fecha:e,concepto:t,importe:r,cuenta:i});const l=H("capital")||{cuentas:{},historial:[]},u={...l,cuentas:{...l.cuentas||{}},historial:(l.historial||[]).slice()};u.cuentas[i]=(u.cuentas[i]||0)+r,u.historial.push({id:me(),tipo:"cobro_trabajo",cuenta:i,importe:+r,concepto:`Cobro ${a.nombre}: ${t}`,fechaISO:e}),await ki({trabajos:s,capital:u})}async function Nw(n,e){const t=Sc(),r=t.find(a=>a.id===n.id);if(!r)throw new Error("trabajo no encontrado");r.cobros=r.cobros.filter(a=>a.id!==e.id);const i=H("capital")||{cuentas:{},historial:[]},s={...i,cuentas:{...i.cuentas||{}},historial:(i.historial||[]).slice()};s.cuentas[e.cuenta]=(s.cuentas[e.cuenta]||0)-e.importe,s.historial.push({id:me(),tipo:"reverso_cobro_trabajo",cuenta:e.cuenta,importe:-e.importe,concepto:`Reverso cobro ${r.nombre}: ${e.concepto||""}`,fechaISO:X()}),await ki({trabajos:t,capital:s})}function Dw(n){const e=o("div.card");e.append(o("div.card-head",{},[o("h3",{},"Notas e incidencias"),o("button.link",{onclick:()=>Vw(n)},"+ Nota")]));const t=(n.notas||[]).slice().sort((r,i)=>(i.fecha||"").localeCompare(r.fecha||""));if(!t.length)return e.append(o("div.card-empty",{},"Sin notas")),e;for(const r of t)e.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},r.texto||""),o("div.row-sub",{},r.fecha||"—")]),o("div.row-right",{},[r.impactoEstimado?o("div.amount"+(Number(r.impactoEstimado)>=0?".pos":".neg"),{},N(r.impactoEstimado)):o("span.small.muted",{},"—"),o("button.btn.btn-sm.btn-danger",{style:"margin-top:4px;",onclick:()=>Me(n.id,i=>{i.notas=i.notas.filter(s=>s.id!==r.id)},"Nota eliminada")},"Borrar")])]));return e}function Vw(n){re("Nueva nota",e=>{const t=o("input",{type:"date",value:X()}),r=o("textarea",{rows:3,placeholder:"Nota o incidencia",autofocus:!0}),i=o("input",{type:"number",step:"0.01",placeholder:"Impacto € estimado (opcional)"}),s=async()=>{if(!r.value.trim()){D("Falta el texto","err");return}await Me(n.id,a=>{a.notas.push({id:me(),fecha:t.value||X(),texto:r.value.trim(),impactoEstimado:i.value===""?null:parseFloat(i.value)})},"Nota añadida"),e()};return o("div",{},[o("div.field-grid",{},[G("Fecha",t),G("Impacto € estimado",i)]),G("Texto",r),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:s},"Añadir")])])})}function G(n,e){return o("div.field",{},[o("label",{},n),e])}function Ut(n,e){return o("div.kpi",{},[o("div.kpi-v",{},n),o("div.kpi-l",{},e)])}const Rs=[["carpinteria","Carpintería"],["electricidad","Electricidad"],["fontaneria","Fontanería"],["carroceria","Carrocería"],["otros","Otros"]];Rs.map(([n])=>n);function Ps(n){return n&&n.categoria||"carpinteria"}const Ir={materiales:[{id:"melamina12",nombre:"Melamina 12mm",precioM2:18,grosor:12,categoria:"carpinteria"},{id:"melamina16",nombre:"Melamina 16mm",precioM2:22,grosor:16,categoria:"carpinteria"},{id:"melamina19",nombre:"Melamina 19mm",precioM2:26,grosor:19,categoria:"carpinteria"},{id:"mdf16",nombre:"MDF 16mm",precioM2:20,grosor:16,categoria:"carpinteria"},{id:"metacrilato",nombre:"Metacrilato 3mm",precioM2:45,grosor:3,categoria:"carpinteria"},{id:"contrachapado",nombre:"Contrachapado 15mm",precioM2:24,grosor:15,categoria:"carpinteria"}],herrajes:[{id:"bisagra",nombre:"Bisagra",precioUd:2.5},{id:"correderaS",nombre:"Corredera suave",precioUd:8},{id:"correderaN",nombre:"Corredera normal",precioUd:4},{id:"tirador",nombre:"Tirador",precioUd:3.5},{id:"pata",nombre:"Pata regulable",precioUd:1.5},{id:"tornillo",nombre:"Tornillo (100ud)",precioUd:3}]},Un={tarifaVentaMO:25,margenMateriales:.2,iva:.21},Ce=n=>Math.round((Number(n)||0)*100)/100;function no(n){return{...Un,...n&&n.params||{}}}function ro(n){const e=n||{};return{materiales:Array.isArray(e.materiales)&&e.materiales.length?e.materiales:Ir.materiales,herrajes:Array.isArray(e.herrajes)&&e.herrajes.length?e.herrajes:Ir.herrajes,params:no(n)}}function va(n,e){if(!e)return null;const t=String(e).toLowerCase();return n.find(r=>r.id===e||r.nombre&&r.nombre.toLowerCase().includes(t))||null}function Ow(n,e,t=[],r=[],i=0,s={}){const a=ro(n),l={tarifaVentaMO:s.tarifaVentaMO!=null?Number(s.tarifaVentaMO):a.params.tarifaVentaMO,margenMateriales:s.margenMateriales!=null?Number(s.margenMateriales):a.params.margenMateriales,iva:a.params.iva},u=1+Number(l.margenMateriales||0),h=[],f=(I,P,x)=>{const F=va(P,I.material||I.materialId||I.herraje||I.herrajeId||I.nombre),O=Number(I.cantidad??I.cant??1)||0;let $,U,V,T;if(I.coste!=null)$=Number(I.coste),U=I.unidad||"ud",V=null,T=I.nombre||I.desc||"Línea";else if(F&&F.precioM2!=null&&I.ancho!=null&&I.alto!=null)$=Number(I.ancho)*Number(I.alto)*O*F.precioM2,U="m²",V=F.precioM2,T=`${F.nombre} ${I.ancho}×${I.alto}m × ${O}ud`;else if(F&&F.precioUd!=null)$=O*F.precioUd,U="ud",V=F.precioUd,T=`${F.nombre} × ${O}ud`;else if(I.precioUd!=null)$=O*Number(I.precioUd),U=I.unidad||"ud",V=Number(I.precioUd),T=`${I.nombre||"Material"}${O?` × ${O}ud`:""}`;else{h.push({tipo:x,desc:`⚠ No encontrado: ${I.material||I.herraje||I.nombre||"?"}`,cant:0,unidad:"ud",precioUd:0,coste:0,precioCliente:0});return}const E=I.precioCliente!=null?Number(I.precioCliente):$*u;h.push({tipo:I.tipo||x,desc:T,cant:O,unidad:U,precioUd:V!=null?Ce(V):null,coste:Ce($),precioCliente:Ce(E)})};for(const I of t)f(I,a.materiales,"material");for(const I of r)f(I,a.herrajes,"herraje");const m=Number(i||0);if(m>0){const I=m*l.tarifaVentaMO;h.push({tipo:"manoObra",desc:`Mano de obra (${m}h × ${l.tarifaVentaMO}€/h)`,cant:m,unidad:"h",precioUd:Ce(l.tarifaVentaMO),coste:Ce(I),precioCliente:Ce(I)})}const g=Ce(h.reduce((I,P)=>I+(Number(P.precioCliente)||0),0)),_=Ce(g*l.iva),y=Ce(g+_);return{tipo:e||null,lineas:h,baseImponible:g,iva:_,total:y,paramsUsados:l}}const _a={camper:{secciones:[{nombre:"Electricidad",activa:!0,precioHora:25,horas:0,items:[{concepto:"Batería",cantidad:1},{concepto:"Inversor",cantidad:1},{concepto:"Placa solar",cantidad:1},{concepto:"Regulador",cantidad:1},{concepto:"Cableado y protecciones",cantidad:1}]},{nombre:"Carrocería",activa:!0,precioHora:25,horas:0,items:[{concepto:"Claraboya",cantidad:1},{concepto:"Aire acondicionado",cantidad:1},{concepto:"Suelo",cantidad:1},{concepto:"Ventanas",cantidad:1}]},{nombre:"Fontanería",activa:!0,precioHora:25,horas:0,items:[{concepto:"Depósito limpias",cantidad:1},{concepto:"Depósito grises",cantidad:1},{concepto:"Bomba",cantidad:1},{concepto:"Grifo",cantidad:1},{concepto:"Calentador",cantidad:1},{concepto:"Tuberías",cantidad:1}]},{nombre:"Panelado",activa:!0,precioHora:25,horas:0,items:[{concepto:"Aislamiento",cantidad:1},{concepto:"Paneles",cantidad:1},{concepto:"Techo",cantidad:1}]},{nombre:"Mobiliario",activa:!0,precioHora:25,horas:0,items:[{concepto:"Módulos de mobiliario",cantidad:1},{concepto:"Herrajes",cantidad:1}]}]}};function Ku(n){return{secciones:(n.secciones||[]).map(e=>({nombre:e.nombre||"Sección",activa:e.activa!==!1,precioHora:e.precioHora!=null?Number(e.precioHora):Un.tarifaVentaMO,horas:Number(e.horas||0),items:(e.items||[]).map(t=>({...t}))}))}}function ks(n,e){const t=n&&n.plantillas&&n.plantillas[e];return t&&Array.isArray(t.secciones)?Ku(t):_a[e]?Ku(_a[e]):null}function Mw(n,e){return ks(n,e)!=null}function Vp(n,e,t=[],r={}){const i=ro(n),s={tarifaVentaMO:i.params.tarifaVentaMO,margenMateriales:r.margenMateriales!=null?Number(r.margenMateriales):i.params.margenMateriales,iva:i.params.iva,porSeccion:!0},a=1+Number(s.margenMateriales||0),l=[];let u=0;for(const g of t||[]){if(g.activa===!1)continue;const _=g.precioHora!=null?Number(g.precioHora):i.params.tarifaVentaMO,y=Number(g.horas||0),I=[];let P=0;for(const O of g.items||[]){const $=Number(O.cantidad??O.cant??1)||0,U=O.concepto||O.nombre||"Item",V=va(i.materiales,O.material||O.materialId)||va(i.herrajes,O.herraje||O.herrajeId);let T=0,E=`${U}${$?` × ${$}`:""}`;V&&V.precioM2!=null&&O.ancho!=null&&O.alto!=null?(T=Number(O.ancho)*Number(O.alto)*$*V.precioM2,E=`${V.nombre} ${O.ancho}×${O.alto}m × ${$}ud`):V&&V.precioUd!=null?(T=$*V.precioUd,E=`${V.nombre} × ${$}ud`):O.precioUd!=null?T=$*Number(O.precioUd):O.coste!=null&&(T=Number(O.coste));const w=O.precioCliente!=null?Number(O.precioCliente):T*a;I.push({tipo:"material",desc:E,cant:$,coste:Ce(T),precioCliente:Ce(w)}),P+=w}let x=0;y>0&&(x=y*_,I.push({tipo:"manoObra",desc:`Mano de obra (${y}h × ${_}€/h)`,cant:y,coste:Ce(x),precioCliente:Ce(x)}),P+=x);const F=Ce(P);u+=F,l.push({nombre:g.nombre||"Sección",activa:!0,precioHora:Ce(_),horas:y,lineas:I,moImporte:Ce(x),subtotal:F})}const h=Ce(u),f=Ce(h*s.iva),m=Ce(h+f);return{tipo:e||null,secciones:l,baseImponible:h,iva:f,total:m,paramsUsados:s}}function xw(n){const e=[];for(const t of n.secciones||[])for(const r of t.lineas)e.push({desc:`[${t.nombre}] ${r.desc}`,cant:1,precio:Ce(r.precioCliente),coste:r.coste!=null?Ce(r.coste):null,tipoLinea:r.tipo});return e}const Lw=n=>{const e=pt(n);return e==null?null:-e};let rn=!1;function Op(n,e){if(!e.cargado.crm){n.append(o("div.spinner"));return}const{leads:t}=Nt(e.crm),r=t.filter(f=>!f.archivado),i=t.filter(f=>f.archivado),s=o("div.card");if(s.append(o("div.card-head",{},[o("h3",{},rn?"Archivados":"Pipeline"),o("div",{style:"display:flex;gap:6px;align-items:center;"},[i.length||rn?o("button.link",{onclick:()=>{rn=!rn,Mp(n,e)}},rn?"‹ Pipeline":`Archivados (${i.length})`):null,rn?null:o("button.link",{onclick:()=>Rc()},"+ Lead")].filter(Boolean))])),s.append(o("div.small.muted",{},rn?`${i.length} lead${i.length===1?"":"s"} archivado${i.length===1?"":"s"} · no aparecen en el pipeline ni en Hoy`:`${r.length} lead${r.length===1?"":"s"} · mueve con ‹ › o cambia el estado en la tarjeta`)),n.append(s),rn){Fw(n,e,i);return}const a=eo.map(([f,m])=>({id:f,label:m,leads:[]})),l={id:"__otros",label:"Otros",leads:[]};for(const f of r)(a.find(g=>g.id===wr(f.estado||"nuevo"))||l).leads.push(f);const u=l.leads.length?[...a,l]:a,h=o("div",{style:"display:flex;gap:10px;overflow-x:auto;padding-bottom:8px;align-items:flex-start;"});for(const f of u){const m=o("div",{style:"flex:0 0 220px;min-width:220px;"});m.append(o("div.small",{style:"text-transform:uppercase;letter-spacing:1px;color:var(--text3);margin-bottom:6px;padding:0 2px;"},`${f.label} · ${f.leads.length}`)),f.leads.length||m.append(o("div.card",{style:"opacity:.5;"},o("div.card-empty",{},"—"))),f.leads.slice().sort((g,_)=>(_.creado||"").localeCompare(g.creado||"")).forEach(g=>m.append($w(g,f.id,e))),h.append(m)}n.append(h)}function Mp(n,e){_e(n),Op(n,e)}function Fw(n,e,t){const r=o("div.card");if(!t.length){r.append(o("div.card-empty",{},"Sin leads archivados.")),n.append(r);return}t.slice().sort((i,s)=>(s.creado||"").localeCompare(i.creado||"")).forEach(i=>{r.append(o("div.row",{},[o("div.row-main",{style:"cursor:pointer;",onclick:()=>Rc(e,i)},[o("div.row-label",{},i.nombre||"(sin nombre)"),o("div.row-sub",{},`${Qt(i)} · ${Ic(wr(i.estado))} · ${i.creado||"—"}`)]),o("div.row-right",{},o("button.btn.btn-sm",{onclick:()=>xp(i,!1,n,e)},"Desarchivar"))]))}),n.append(r)}function $w(n,e,t){const r=Lw(n.creado),i=n.estado==="nuevo"&&r!=null&&r>Sp,s=o("div.card",{style:"margin-bottom:8px;padding:10px;cursor:pointer;"+(i?"border-color:var(--gold);":"")});s.addEventListener("click",()=>Rc(t,n)),s.append(o("div.row-label",{},n.nombre||"(sin nombre)")),s.append(o("div.row-sub",{style:"margin-top:2px;"},[o("span.chip",{},Qt(n)),n.origen?o("span.chip",{style:"margin-left:4px;"},n.origen):null].filter(Boolean))),r!=null&&s.append(o("div.small"+(i?"":".muted"),{style:"margin-top:4px;"+(i?"color:var(--gold);":"")},`${r}d desde alta${i?" · sin contactar":""}`));const a=f=>m=>{m.stopPropagation(),f()},l=si.indexOf(wr(n.estado)),u=DE.includes(wr(n.estado)),h=o("div",{style:"display:flex;gap:4px;align-items:center;margin-top:8px;flex-wrap:wrap;"},[o("button.btn.btn-sm",{disabled:l<=0,title:"Anterior estado",onclick:a(()=>Qu(n,-1))},"‹"),o("button.btn.btn-sm",{disabled:l<0||l>=si.length-1,title:"Siguiente estado",onclick:a(()=>Qu(n,1))},"›"),n.clienteId?o("span.chip.ok",{},"cliente"):o("button.btn.btn-sm.btn-primary",{onclick:a(()=>Uw(n))},"→ Cliente"),u?o("button.btn.btn-sm",{title:"Archivar lead cerrado",onclick:a(()=>xp(n,!0))},"Archivar"):null].filter(Boolean));return s.append(h),s}async function xp(n,e,t,r){await Lp(n.id,i=>{i.archivado=e},e?`"${n.nombre}" archivado`:`"${n.nombre}" desarchivado`),t&&r&&Mp(t,r)}async function Lp(n,e,t){const r=H("crm")||{},i=(Array.isArray(r.leads)?r.leads:[]).map(a=>a.id===n?{...a}:a),s=i.find(a=>a.id===n);if(!s){D("Lead no encontrado","err");return}e(s);try{await Z("crm",{...r,leads:i}),t&&D(t,"ok")}catch{D("No se pudo guardar","err")}}async function Qu(n,e){const t=si.indexOf(wr(n.estado)),r=t+e;if(t<0||r<0||r>=si.length)return;const i=si[r];await Lp(n.id,s=>{s.estado=i,s.ultimoContacto=X()},`${n.nombre} → ${Ic(i)}`)}async function Uw(n,e){const t=H("crm")||{},r=Array.isArray(t.clientes)?t.clientes.slice():[],i=r.find(f=>(f.nombre||"").toLowerCase()===(n.nombre||"").toLowerCase()),s=n.contacto||"",a=s.includes("@"),l=i||{id:me(),nombre:n.nombre,telefono:a?"":s,email:a?s:"",direccion:"",tipo:n.tipo||null,negocio:n.negocio||null,notas:n.descripcion||"",preferencias:"",creado:X()},u=i?r:[...r,l],h=(Array.isArray(t.leads)?t.leads:[]).map(f=>f.id===n.id?{...f,clienteId:l.id}:f);try{await Z("crm",{...t,clientes:u,leads:h}),D(i?`Vinculado al cliente "${l.nombre}"`:`Cliente "${l.nombre}" creado y vinculado`,"ok")}catch{D("No se pudo convertir","err")}}function Rc(n,e=null){const t=!!e;re(t?`Lead · ${e.nombre}`:"Nuevo lead",r=>{const i=o("input",{value:e?.nombre||"",placeholder:"Nombre",autofocus:!0}),s=o("input",{value:e?.contacto||"",placeholder:"Teléfono o email"}),a=o("select",{},[o("option",{value:""},"— sin tipo —"),...In.map(([g,_])=>o("option",{value:g},_))]);a.value=e?.tipo||"";const l=o("select",{},[o("option",{value:""},"—"),...VE.map(g=>o("option",{value:g},g))]);l.value=e?.origen||"manual";const u=o("select",{},eo.map(([g,_])=>o("option",{value:g},_)));u.value=wr(e?.estado||"nuevo");const h=o("textarea",{rows:2,placeholder:"Descripción"},e?.descripcion||""),f=async()=>{if(!i.value.trim()){D("Falta el nombre","err");return}const g=H("crm")||{},_=Array.isArray(g.leads)?g.leads.slice():[];if(t){const y=_.findIndex(I=>I.id===e.id);y>=0&&(_[y]={..._[y],nombre:i.value.trim(),contacto:s.value.trim(),tipo:a.value||null,origen:l.value||"manual",estado:u.value,descripcion:h.value.trim(),ultimoContacto:X()})}else _.push({id:me(),nombre:i.value.trim(),contacto:s.value.trim(),tipo:a.value||null,negocio:a.value==="camper"?"camper":null,origen:l.value||"manual",descripcion:h.value.trim(),estado:u.value||"nuevo",creado:X(),ultimoContacto:null,clienteId:null,presupuestoId:null,cita:null,archivado:!1});try{await Z("crm",{...g,leads:_}),D(t?"Lead actualizado":"Lead creado","ok"),r()}catch{D("No se pudo guardar","err")}},m=async()=>{const g=H("crm")||{},_=(Array.isArray(g.leads)?g.leads:[]).filter(y=>y.id!==e.id);try{await Z("crm",{...g,leads:_}),D("Lead eliminado","ok"),r()}catch{D("No se pudo eliminar","err")}};return o("div",{},[tr("Nombre",i),tr("Contacto",s),o("div.field-grid",{},[tr("Tipo",a),tr("Origen",l)]),tr("Estado",u),tr("Descripción",h),o("div.btn-row",{},[o("button.btn",{onclick:r},"Cancelar"),t?o("button.btn.btn-danger",{onclick:m},"Eliminar"):null,o("button.btn.btn-primary",{onclick:f},t?"Guardar":"Crear")].filter(Boolean))])})}function tr(n,e){return o("div.field",{},[o("label",{},n),e])}const Yu=n=>n===""||n==null?null:parseFloat(n);function Fp({crm:n,precios:e,prefill:t={},onGuardado:r}={}){const{clientes:i,leads:s}=Nt(n),a=ro(e),l=no(e),u={tipo:t.tipo||"carpinteria",clienteId:t.clienteId||"",leadId:t.leadId||"",concepto:t.concepto||"",tarifaVentaMO:l.tarifaVentaMO,margenPct:Math.round(l.margenMateriales*1e3)/10,horas:0,piezas:[h()],herrajes:[],otros:[],secciones:null,seccionesTipo:null};function h(){return{nombre:"",ancho:null,alto:null,cantidad:1,precioUd:null,precioCliente:null}}function f(){return{nombre:"",cantidad:1,precioUd:null,precioCliente:null}}function m(){return{concepto:"",coste:null,precioCliente:null}}function g(){return{concepto:"",cantidad:1,material:"",precioUd:null,precioCliente:null}}function _(){return{nombre:"Nueva sección",activa:!0,precioHora:l.tarifaVentaMO,horas:0,items:[]}}const y=()=>Mw(e,u.tipo);function I(){if(!y()||u.secciones&&u.seccionesTipo===u.tipo)return;const x=ks(e,u.tipo);u.secciones=x?x.secciones:[],u.seccionesTipo=u.tipo}function P(){const x={tarifaVentaMO:u.tarifaVentaMO,margenMateriales:(Number(u.margenPct)||0)/100};if(y())return Vp(e,u.tipo,u.secciones||[],{margenMateriales:x.margenMateriales});const F=u.piezas.filter(U=>(U.nombre||"").trim()||U.precioUd!=null||U.ancho!=null&&U.alto!=null).map(U=>({material:U.nombre,nombre:U.nombre,ancho:U.ancho,alto:U.alto,cantidad:U.cantidad,precioUd:U.precioUd,precioCliente:U.precioCliente})),O=u.herrajes.filter(U=>(U.nombre||"").trim()).map(U=>({herraje:U.nombre,nombre:U.nombre,cantidad:U.cantidad,precioUd:U.precioUd,precioCliente:U.precioCliente})),$=u.otros.filter(U=>(U.concepto||"").trim()&&(U.coste!=null||U.precioCliente!=null)).map(U=>({nombre:U.concepto,tipo:"otro",cantidad:1,coste:U.coste!=null?U.coste:0,precioCliente:U.precioCliente!=null?U.precioCliente:null}));return Ow(e,u.tipo,[...F,...$],O,u.horas||0,x)}re("Presupuestador",x=>{const F=o("div"),O=Uo(In.map(([B,oe])=>[B,oe]),u.tipo,B=>{u.tipo=B,I(),Pe(),de()}),$=Uo([["","— sin cliente —"],...i.map(B=>[B.id,B.nombre])],u.clienteId,B=>{u.clienteId=B}),U=s.filter(B=>B.estado!=="ganado"&&B.estado!=="perdido"&&!B.archivado),V=Uo([["","— sin lead —"],...U.map(B=>[B.id,`${B.nombre} · ${B.estado||"nuevo"}`])],u.leadId,B=>{u.leadId=B}),T=o("input",{value:u.concepto,placeholder:"Trabajo / descripción"});T.addEventListener("input",()=>{u.concepto=T.value});const E=o("input",{type:"number",step:"0.01",value:u.tarifaVentaMO,style:"max-width:110px;"});E.addEventListener("input",()=>{u.tarifaVentaMO=Yu(E.value)??l.tarifaVentaMO,de()});const w=o("input",{type:"number",step:"0.5",value:u.margenPct,style:"max-width:90px;"});w.addEventListener("input",()=>{u.margenPct=Yu(w.value)??0,de()});const A=o("div.field-grid"),C=()=>{_e(A),y()?A.append(Et("Margen materiales %",w)):A.append(Et("Tarifa venta MO €/h",E),Et("Margen materiales %",w))},S=o("div.card",{},[o("div.card-head",{},o("h3",{},"Datos del presupuesto")),o("div.field-grid",{},[Et("Tipo",O),Et("Cliente",$)]),o("div.field-grid",{},[Et("Lead (opcional)",V),Et("Concepto",T)]),A,o("div.small.muted",{},`Defaults: ${l.tarifaVentaMO} €/h · ${Math.round(l.margenMateriales*100)}% · IVA ${Math.round(l.iva*100)}%. Se guardan los valores usados.`)]),b=o("div"),se=o("div.card"),be=o("div.presu-resumen");function Pe(){C(),_e(b),y()?Dt():Ni()}function Dt(){const B=o("div.card",{},[o("div.small.muted",{},"Activa/desactiva secciones enteras, rellena los precios de cada item (sembrados sin precio) y las horas por sección. El precio cliente en blanco = coste × (1+margen).")]);b.append(B),(u.secciones||[]).forEach((oe,he)=>b.append(Tn(oe,he))),b.append(o("div.btn-row",{},[o("button.btn.btn-sm",{onclick:()=>{u.secciones.push(_()),Pe(),de()}},"+ Sección")]))}function Tn(B,oe){const he=o("div.card",{style:B.activa===!1?"opacity:.55;":""}),le=o("input",{type:"checkbox"});le.checked=B.activa!==!1,le.addEventListener("change",()=>{B.activa=le.checked,Pe(),de()});const pe=o("input",{value:B.nombre||"",placeholder:"Sección",style:"font-weight:600;min-width:130px;"});if(pe.addEventListener("input",()=>{B.nombre=pe.value,de()}),he.append(o("div.card-head",{},[o("label",{style:"display:flex;gap:8px;align-items:center;margin:0;"},[le,pe]),o("button.btn.btn-sm.btn-danger",{onclick:()=>{u.secciones.splice(oe,1),Pe(),de()},title:"Quitar sección"},"×")])),B.activa===!1)return he.append(o("div.small.muted",{},"Sección desactivada (no cuenta en el total).")),he;(B.items||[]).forEach((ge,Cn)=>he.append(kr(B,ge,Cn))),(!B.items||!B.items.length)&&he.append(o("div.card-empty",{},"Sin items")),he.append(o("div.btn-row",{},[o("button.btn.btn-sm",{onclick:()=>{(B.items=B.items||[]).push(g()),Pe(),de()}},"+ Item")]));const Te=Ge(B.horas,ge=>{B.horas=ge||0,de()},"Horas"),rt=Ge(B.precioHora,ge=>{B.precioHora=ge??l.tarifaVentaMO,de()},"€/h");return he.append(o("div.field-grid",{style:"margin-top:6px;"},[Et("Horas de la sección",Te),Et("Precio/hora €",rt)])),he}function kr(B,oe,he){const le=o("input",{value:oe.concepto||"",placeholder:"Item",list:"catmat",style:"min-width:130px;"});le.addEventListener("input",()=>{oe.concepto=le.value,oe.material=le.value,de()});const pe=Ge(oe.cantidad,ge=>{oe.cantidad=ge,de()},"Cant"),Te=Ge(oe.precioUd,ge=>{oe.precioUd=ge,de()},"€/ud"),rt=Ge(oe.precioCliente,ge=>{oe.precioCliente=ge,de()},"€ cliente");return es([["Item",le],["Cant",pe],["€/ud coste",Te],["€ cliente",rt]],()=>{B.items.splice(he,1),Pe(),de()})}function Ni(){const B=o("div.card"),oe=o("div.card"),he=o("div.card"),le=o("div.card");function pe(){_e(B),B.append(o("div.card-head",{},[o("h3",{},"Materiales"),o("button.link",{onclick:()=>{u.piezas.push(h()),pe(),de()}},"+ Material")])),B.append(o("div.small.muted",{style:"margin-bottom:6px;"},"Catálogo (ancho×alto en m) o línea libre (nombre + cantidad + €/ud coste). Precio cliente en blanco = coste × (1+margen).")),u.piezas.forEach((ee,Ze)=>B.append(Te(ee,Ze))),u.piezas.length||B.append(o("div.card-empty",{},"Sin materiales"))}function Te(ee,Ze){const it=o("input",{value:ee.nombre,placeholder:"Material o nombre",list:"catmat",style:"min-width:120px;"});it.addEventListener("input",()=>{ee.nombre=it.value,de()});const Vt=Ge(ee.cantidad,ut=>{ee.cantidad=ut},"Cant"),Jt=Ge(ee.ancho,ut=>{ee.ancho=ut},"Ancho m"),Ot=Ge(ee.alto,ut=>{ee.alto=ut},"Alto m"),vt=Ge(ee.precioUd,ut=>{ee.precioUd=ut},"€/ud"),Nr=Ge(ee.precioCliente,ut=>{ee.precioCliente=ut},"€ cliente");return es([["Material",it],["Cant",Vt],["Ancho m",Jt],["Alto m",Ot],["€/ud",vt],["€ cliente",Nr]],()=>{u.piezas.splice(Ze,1),pe(),de()})}function rt(){_e(oe),oe.append(o("div.card-head",{},[o("h3",{},"Herrajes"),o("button.link",{onclick:()=>{u.herrajes.push(f()),rt(),de()}},"+ Herraje")])),u.herrajes.forEach((ee,Ze)=>oe.append(ge(ee,Ze))),u.herrajes.length||oe.append(o("div.card-empty",{},"Sin herrajes"))}function ge(ee,Ze){const it=o("input",{value:ee.nombre,placeholder:"Herraje",list:"catherr",style:"min-width:120px;"});it.addEventListener("input",()=>{ee.nombre=it.value,de()});const Vt=Ge(ee.cantidad,vt=>{ee.cantidad=vt},"Cant"),Jt=Ge(ee.precioUd,vt=>{ee.precioUd=vt},"€/ud"),Ot=Ge(ee.precioCliente,vt=>{ee.precioCliente=vt},"€ cliente");return es([["Herraje",it],["Cant",Vt],["€/ud",Jt],["€ cliente",Ot]],()=>{u.herrajes.splice(Ze,1),rt(),de()})}function Cn(){_e(he),he.append(o("div.card-head",{},o("h3",{},"Mano de obra")));const ee=Ge(u.horas,Ze=>{u.horas=Ze||0,de()},"Horas");he.append(o("div.field-grid",{},[Et("Horas estimadas",ee)])),he.append(o("div.small.muted",{},`Se venden a ${Ie(u.tarifaVentaMO)} €/h (editable arriba). Sin margen adicional.`))}function Sn(){_e(le),le.append(o("div.card-head",{},[o("h3",{},"Otros (subcontratas, homologación, desplazamientos…)"),o("button.link",{onclick:()=>{u.otros.push(m()),Sn(),de()}},"+ Otro")])),le.append(o("div.small.muted",{style:"margin-bottom:6px;"},"Coste y precio cliente independientes (el precio cliente no aplica margen automático).")),u.otros.forEach((ee,Ze)=>le.append(Di(ee,Ze))),u.otros.length||le.append(o("div.card-empty",{},"Sin otros conceptos"))}function Di(ee,Ze){const it=o("input",{value:ee.concepto,placeholder:"Concepto",style:"min-width:140px;"});it.addEventListener("input",()=>{ee.concepto=it.value,de()});const Vt=Ge(ee.coste,Ot=>{ee.coste=Ot},"Coste €"),Jt=Ge(ee.precioCliente,Ot=>{ee.precioCliente=Ot},"€ cliente");return es([["Concepto",it],["Coste €",Vt],["€ cliente",Jt]],()=>{u.otros.splice(Ze,1),Sn(),de()})}b.append(B,oe,he,le),pe(),rt(),Cn(),Sn()}function de(){const B=P();_e(se),se.append(o("div.card-head",{},o("h3",{},"Desglose")));const oe=o("div",{style:"overflow-x:auto;"}),he=o("table.ftable");he.append(o("thead",{},o("tr",{},["Concepto","Coste","Precio cliente"].map((pe,Te)=>o("th",{style:Te?"text-align:right;":""},pe)))));const le=o("tbody");if(B.secciones){for(const pe of B.secciones){le.append(o("tr",{},o("td",{colspan:3,style:"font-weight:600;background:var(--bg2);"},pe.nombre)));for(const Te of pe.lineas)le.append(o("tr",{},[o("td",{style:"padding-left:14px;"},Te.desc),o("td",{style:"text-align:right;"},N(Te.coste)),o("td",{style:"text-align:right;"},N(Te.precioCliente))]));le.append(o("tr",{},[o("td",{style:"text-align:right;color:var(--text3);"},"Subtotal"),o("td",{},""),o("td",{style:"text-align:right;font-weight:600;"},N(pe.subtotal))]))}B.secciones.length||le.append(o("tr",{},o("td",{colspan:3,style:"color:var(--text3);"},"Activa alguna sección y rellena sus precios.")))}else{for(const pe of B.lineas)le.append(o("tr",{},[o("td",{},pe.desc),o("td",{style:"text-align:right;"},N(pe.coste)),o("td",{style:"text-align:right;"},N(pe.precioCliente))]));B.lineas.length||le.append(o("tr",{},o("td",{colspan:3,style:"color:var(--text3);"},"Añade materiales, mano de obra u otros.")))}he.append(le),oe.append(he),se.append(oe),se.append(o("div.kpis",{style:"margin-top:8px;"},[$o(N(B.baseImponible),"Base imponible"),$o(N(B.iva),`IVA ${Math.round(B.paramsUsados.iva*100)}%`),$o(N(B.total),"Total")])),se.append(o("div.btn-row",{},[o("button.btn",{onclick:x},"Cancelar"),o("button.btn.btn-primary",{onclick:()=>gt(B)},"Guardar borrador")])),_e(be),be.append(o("div.presu-resumen-total",{},[N(B.total),o("small",{},`Total · base ${N(B.baseImponible)}`)]),o("div.presu-resumen-btns",{},[o("button.btn.btn-sm",{onclick:()=>se.scrollIntoView({behavior:"smooth",block:"nearest"})},"Ver desglose"),o("button.btn.btn-sm.btn-primary",{onclick:()=>gt(B)},"Guardar")]))}async function gt(B){if(!u.concepto.trim()){D("Falta el concepto","err");return}const oe=!!B.secciones,he=oe?xw(B):B.lineas.map(ge=>({desc:ge.desc,cant:1,precio:ge.precioCliente,coste:ge.coste,tipoLinea:ge.tipo}));if(!he.length){D("El presupuesto no tiene líneas","err");return}const le=Nt(H("crm")),pe=le.presupuestos.slice(),Te={id:me(),leadId:u.leadId||null,clienteId:u.clienteId||null,tipo:u.tipo,negocio:u.tipo==="camper"?"camper":null,concepto:u.concepto.trim(),lineas:he,secciones:oe?u.secciones:null,baseImponible:B.baseImponible,iva:B.iva,total:B.total,paramsUsados:B.paramsUsados,estado:"borrador",creado:X(),enviado:null,respondido:null,trabajoEntregado:null};pe.push(Te);let rt=le.leads;u.leadId&&(rt=le.leads.map(ge=>ge.id===u.leadId?{...ge,presupuestoId:Te.id,estado:"presupuestado"}:ge));try{await Z("crm",{...H("crm")||{},clientes:le.clientes,leads:rt,presupuestos:pe}),D(`Presupuesto "${Te.concepto}" guardado (borrador)`,"ok"),x(),typeof r=="function"&&r(Te)}catch{D("No se pudo guardar","err")}}const De=o("datalist",{id:"catmat"},a.materiales.map(B=>o("option",{value:B.nombre}))),oo=o("datalist",{id:"catherr"},a.herrajes.map(B=>o("option",{value:B.nombre})));I();const An=o("div.presu-grid",{},[o("div.presu-form",{},[S,De,oo,b]),o("div.presu-aside",{},[se])]);return F.append(An,be),Pe(),de(),F},{className:"modal-presu"})}function Et(n,e){return o("div.field",{},[o("label",{},n),e])}function $o(n,e){return o("div.kpi",{},[o("div.kpi-v",{},n),o("div.kpi-l",{},e)])}function Uo(n,e,t){const r=o("select",{},n.map(([i,s])=>o("option",{value:i},s)));return r.value=e,r.addEventListener("change",()=>t(r.value)),r}function Ge(n,e,t){const r=o("input",{type:"number",step:"0.01",value:n??"",placeholder:t||"",style:"max-width:100px;"});return r.addEventListener("input",()=>e(r.value===""?null:parseFloat(r.value))),r}function es(n,e){return o("div.row",{style:"flex-wrap:wrap;gap:8px;align-items:flex-end;"},[...n.map(([t,r])=>o("div.field",{style:"margin:0;"},[o("label",{style:"font-size:9px;"},t),r])),o("button.btn.btn-sm.btn-danger",{onclick:e,title:"Quitar"},"×")])}let Zr={modo:"lista",id:null};function $p(n,e){if(!e.cargado.crm){n.append(o("div.spinner"));return}const{clientes:t}=Nt(e.crm);if(Zr.modo==="ficha"){const s=t.find(a=>a.id===Zr.id);if(s){jw(n,e,s);return}Zr={modo:"lista",id:null}}const r=o("div.card");r.append(o("div.card-head",{},[o("h3",{},"Clientes"),o("button.link",{onclick:()=>jp()},"+ Cliente")])),n.append(r);const i=o("div.card");if(!t.length){i.append(o("div.card-empty",{},"Sin clientes. Créalos aquí o convierte un lead desde Pipeline.")),n.append(i);return}t.slice().sort((s,a)=>(s.nombre||"").localeCompare(a.nombre||"")).forEach(s=>{i.append(o("div.row",{style:"cursor:pointer;",onclick:()=>{Zr={modo:"ficha",id:s.id},Up(n,e)}},[o("div.row-main",{},[o("div.row-label",{},s.nombre||"(sin nombre)"),o("div.row-sub",{},[s.telefono,s.email].filter(Boolean).join(" · ")||"sin contacto")]),o("div.row-right",{},o("span.chip",{},Qt(s)))]))}),n.append(i)}function Up(n,e){_e(n),$p(n,e)}function jw(n,e,t){const{leads:r,presupuestos:i}=Nt(e.crm),s=e.trabajadores||[],a=r.filter(I=>I.clienteId===t.id),l=i.filter(I=>I.clienteId===t.id),u=new Set(l.map(I=>I.id)),h=(t.nombre||"").toLowerCase(),f=(e.trabajos||[]).filter(I=>I.presupuestoId&&u.has(I.presupuestoId)||I.cliente&&I.cliente.toLowerCase()===h);n.append(o("div.btn-row",{style:"margin-top:0;margin-bottom:10px;"},[o("button.btn.btn-sm",{onclick:()=>{Zr={modo:"lista",id:null},Up(n,e)}},"‹ Clientes")]));const m=o("div.card");m.append(o("div.card-head",{},[o("h3",{},t.nombre||"(sin nombre)"),o("span.chip",{},Qt(t))])),m.append(o("div.row-sub",{style:"font-size:11px;"},[t.telefono?`📞 ${t.telefono}`:"",t.email?`  ✉ ${t.email}`:"",t.direccion?`  📍 ${t.direccion}`:""].join("")||"Sin datos de contacto")),t.notas&&m.append(o("div.small.muted",{style:"margin-top:4px;"},t.notas)),t.preferencias&&m.append(o("div.small.muted",{},`Preferencias: ${t.preferencias}`)),m.append(o("div.btn-row",{},[o("button.btn.btn-sm",{onclick:()=>jp(e,t)},"Editar"),o("button.btn.btn-sm.btn-primary",{onclick:()=>Fp({crm:e.crm,precios:e.precios,prefill:{clienteId:t.id,tipo:t.tipo||"carpinteria"}})},"+ Presupuesto")])),n.append(m);const g=o("div.card");g.append(o("div.card-head",{},o("h3",{},`Leads (${a.length})`))),a.length?a.forEach(I=>g.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},I.nombre),o("div.row-sub",{},`${Qt(I)} · ${I.origen||"—"}`)]),o("div.row-right",{},o("span.chip",{},Ic(I.estado)))]))):g.append(o("div.card-empty",{},"Sin leads vinculados")),n.append(g);const _=o("div.card");_.append(o("div.card-head",{},o("h3",{},`Presupuestos (${l.length})`))),l.length?l.slice().sort((I,P)=>(P.creado||"").localeCompare(I.creado||"")).forEach(I=>_.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},I.concepto||"(sin concepto)"),o("div.row-sub",{},`${I.creado||"—"} · ${Tc(I.estado)}`)]),o("div.row-right",{},o("div.amount",{},N(I.total||0)))]))):_.append(o("div.card-empty",{},"Sin presupuestos")),n.append(_);const y=o("div.card");y.append(o("div.card-head",{},o("h3",{},`Trabajos (${f.length})`))),f.length?f.forEach(I=>{const P=Js(I,s);y.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},I.nombre),o("div.row-sub",{},`${Yn(I.tipo)} · ${I.estado||"activo"}`)]),o("div.row-right",{},[o("div.amount",{},N(P.ingresoTotal)),o("div.small.muted",{},`${Ie(P.margen,1)}%`)])]))}):y.append(o("div.card-empty",{},"Sin trabajos")),n.append(y)}function jp(n,e=null){const t=!!e;re(t?`Cliente · ${e.nombre}`:"Nuevo cliente",r=>{const i=o("input",{value:e?.nombre||"",placeholder:"Nombre",autofocus:!0}),s=o("input",{value:e?.telefono||"",placeholder:"Teléfono"}),a=o("input",{value:e?.email||"",placeholder:"Email"}),l=o("input",{value:e?.direccion||"",placeholder:"Dirección"}),u=o("select",{},[o("option",{value:""},"— sin tipo —"),...In.map(([g,_])=>o("option",{value:g},_))]);u.value=e?.tipo||"";const h=o("textarea",{rows:2,placeholder:"Notas"},e?.notas||""),f=o("input",{value:e?.preferencias||"",placeholder:"Preferencias"}),m=async()=>{if(!i.value.trim()){D("Falta el nombre","err");return}const g=H("crm")||{},_=Array.isArray(g.clientes)?g.clientes.slice():[];if(!t&&_.some(y=>(y.nombre||"").toLowerCase()===i.value.trim().toLowerCase())){D("Ya existe un cliente con ese nombre","err");return}if(t){const y=_.findIndex(I=>I.id===e.id);y>=0&&(_[y]={..._[y],nombre:i.value.trim(),telefono:s.value.trim(),email:a.value.trim(),direccion:l.value.trim(),tipo:u.value||null,notas:h.value.trim(),preferencias:f.value.trim()})}else _.push({id:me(),nombre:i.value.trim(),telefono:s.value.trim(),email:a.value.trim(),direccion:l.value.trim(),tipo:u.value||null,negocio:u.value==="camper"?"camper":null,notas:h.value.trim(),preferencias:f.value.trim(),creado:X()});try{await Z("crm",{...g,clientes:_}),D(t?"Cliente guardado":"Cliente creado","ok"),r()}catch{D("No se pudo guardar","err")}};return o("div",{},[Dn("Nombre",i),o("div.field-grid",{},[Dn("Teléfono",s),Dn("Email",a)]),Dn("Dirección",l),o("div.field-grid",{},[Dn("Tipo",u),Dn("Preferencias",f)]),Dn("Notas",h),o("div.btn-row",{},[o("button.btn",{onclick:r},"Cancelar"),o("button.btn.btn-primary",{onclick:m},t?"Guardar":"Crear")])])})}function Dn(n,e){return o("div.field",{},[o("label",{},n),e])}const Bw=In.map(([n])=>n),sn={estado:"",tipo:""};let vn={modo:"lista",id:null};function Bp(n,e){if(!e.cargado.crm||!e.cargado.precios){n.append(o("div.spinner"));return}const{presupuestos:t}=Nt(e.crm);if(vn.modo==="detalle"){const r=t.find(i=>i.id===vn.id);if(r){zw(n,e,r);return}vn={modo:"lista",id:null}}qw(n,e)}function St(n,e){_e(n),Bp(n,e)}function qw(n,e){const{clientes:t,leads:r,presupuestos:i}=Nt(e.crm),s=o("div.card");s.append(o("div.card-head",{},[o("h3",{},"Presupuestos"),o("button.link",{onclick:()=>Fp({crm:e.crm,precios:e.precios,onGuardado:g=>{vn={modo:"detalle",id:g.id},St(n,e)}})},"+ Nuevo con calculadora")]));const a=o("select",{},[o("option",{value:""},"Todos"),...wc.map(([g,_])=>o("option",{value:g},_))]);a.value=sn.estado;const l=o("select",{},[o("option",{value:""},"Todos los tipos"),o("option",{value:"camper"},"Camper"),o("option",{value:"carpinteria"},"Carpintería"),o("option",{value:"cnc"},"CNC")]);l.value=sn.tipo;const u=()=>{sn.estado=a.value,sn.tipo=l.value,St(n,e)};a.addEventListener("change",u),l.addEventListener("change",u),s.append(o("div.field-grid",{},[oi("Estado",a),oi("Tipo",l)])),n.append(s);let h=i.slice();sn.estado&&(h=h.filter(g=>g.estado===sn.estado)),sn.tipo&&(h=h.filter(g=>g.tipo===sn.tipo)),h.sort((g,_)=>(_.creado||"").localeCompare(g.creado||""));const f=o("div.card");if(!h.length){f.append(o("div.card-empty",{},'Sin presupuestos con estos filtros. Crea uno con "+ Nuevo con calculadora".')),n.append(f);return}const m=h.reduce((g,_)=>g+(Number(_.baseImponible??_.total)||0),0);f.append(o("div.card-head",{},[o("h3",{},`${h.length} presupuesto${h.length===1?"":"s"}`),o("span.amount",{},N(m)+" base")]));for(const g of h){const _=Ac(t,g.clienteId)||r.find(y=>y.id===g.leadId)?.nombre||"Sin cliente";f.append(o("div.row",{style:"cursor:pointer;",onclick:()=>{vn={modo:"detalle",id:g.id},St(n,e)}},[o("div.row-main",{},[o("div.row-label",{},g.concepto||"(sin concepto)"),o("div.row-sub",{},`${Qt(g)} · ${_} · ${g.creado||"—"}`)]),o("div.row-right",{},[o("div.amount",{},N(g.total||0)),qp(g.estado)])]))}n.append(f)}function zw(n,e,t){const{clientes:r,leads:i}=Nt(e.crm),s=Ac(r,t.clienteId)||i.find(u=>u.id===t.leadId)?.nombre||"Sin cliente",a=t.paramsUsados&&t.paramsUsados.iva!=null?t.paramsUsados.iva:no(e.precios).iva;n.append(o("div.btn-row",{style:"margin-top:0;margin-bottom:10px;"},[o("button.btn.btn-sm",{onclick:()=>{vn={modo:"lista",id:null},St(n,e)}},"‹ Presupuestos")]));const l=o("div.card");l.append(o("div.card-head",{},[o("h3",{},t.concepto||"(sin concepto)"),o("div",{style:"display:flex;gap:6px;align-items:center;"},[o("span.chip",{},Qt(t)),qp(t.estado)])])),l.append(o("div.row-sub",{style:"font-size:11px;"},`Cliente: ${s}`)),l.append(o("div.small.muted",{style:"margin-top:4px;"},[`Creado ${t.creado||"—"}`,t.enviado?` · enviado ${t.enviado}`:"",t.respondido?` · respondido ${t.respondido}`:""].join(""))),n.append(l),n.append(Hw(n,e,t)),Array.isArray(t.secciones)&&t.secciones.length&&n.append(Qw(e,t)),n.append(Yw(n,e,t,a)),n.append(Jw(n,e,t))}function Hw(n,e,t){const r=o("div.card");r.append(o("div.card-head",{},o("h3",{},"Estado")));const i=o("div.btn-row",{},[...wc.map(([s,a])=>o("button.btn.btn-sm"+(t.estado===s?".btn-primary":""),{onclick:()=>Gw(n,e,t,s)},a))]);return r.append(i),r.append(o("div.btn-row",{},[o("button.btn.btn-sm",{onclick:()=>Ww(n,e,t)},"Duplicar"),o("button.btn.btn-sm.btn-danger",{onclick:()=>Kw(n,e,t)},"Eliminar")])),r}async function Gw(n,e,t,r){await ya(t.id,i=>{i.estado=r,r==="enviado"&&!i.enviado&&(i.enviado=X()),(r==="aceptado"||r==="rechazado")&&!i.respondido&&(i.respondido=X())},`Presupuesto → ${Tc(r)}`),St(n,e)}async function Ww(n,e,t){const r=H("crm")||{},i=(Array.isArray(r.presupuestos)?r.presupuestos:[]).slice(),s={...t,id:me(),concepto:`${t.concepto||"Presupuesto"} (copia)`,estado:"borrador",creado:X(),enviado:null,respondido:null,trabajoEntregado:null,lineas:(t.lineas||[]).map(a=>({...a}))};i.push(s);try{await Z("crm",{...r,presupuestos:i}),D("Presupuesto duplicado","ok"),vn={modo:"detalle",id:s.id},St(n,e)}catch{D("No se pudo duplicar","err")}}function Kw(n,e,t){re("Eliminar presupuesto",r=>o("div",{},[o("div.small.muted",{},`Se eliminará "${t.concepto||"presupuesto"}". Esta acción no se puede deshacer.`),o("div.btn-row",{},[o("button.btn",{onclick:r},"Cancelar"),o("button.btn.btn-danger",{onclick:async()=>{const i=H("crm")||{},s=(Array.isArray(i.presupuestos)?i.presupuestos:[]).filter(a=>a.id!==t.id);try{await Z("crm",{...i,presupuestos:s}),D("Presupuesto eliminado","ok"),r(),vn={modo:"lista",id:null},St(n,e)}catch{D("No se pudo eliminar","err")}}},"Eliminar")])]))}function Qw(n,e){const t=o("div.card");t.append(o("div.card-head",{},o("h3",{},"Secciones")));const r=e.paramsUsados&&e.paramsUsados.margenMateriales!=null?{margenMateriales:e.paramsUsados.margenMateriales}:{},i=Vp(n.precios,e.tipo,e.secciones,r),s=(e.secciones||[]).filter(h=>h.activa===!1).map(h=>h.nombre);if(!i.secciones.length)return t.append(o("div.card-empty",{},"Todas las secciones están desactivadas.")),t;const a=o("div",{style:"overflow-x:auto;"}),l=o("table.ftable");l.append(o("thead",{},o("tr",{},["Sección","Horas","Subtotal"].map((h,f)=>o("th",{style:f?"text-align:right;":""},h)))));const u=o("tbody");for(const h of i.secciones)u.append(o("tr",{},[o("td",{},h.nombre),o("td",{style:"text-align:right;"},h.horas?`${Ie(h.horas)}h × ${N(h.precioHora)}`:"—"),o("td",{style:"text-align:right;font-weight:600;"},N(h.subtotal))]));return l.append(u),a.append(l),t.append(a),s.length&&t.append(o("div.small.muted",{style:"margin-top:6px;"},`Desactivadas: ${s.join(", ")}`)),t}function Yw(n,e,t,r){const i=o("div.card");i.append(o("div.card-head",{},[o("h3",{},"Líneas"),o("button.link",{onclick:()=>Ju(n,e,t,r,null)},"+ Línea")]));const s=t.lineas||[];if(!s.length)i.append(o("div.card-empty",{},"Sin líneas"));else{const a=o("div",{style:"overflow-x:auto;"}),l=o("table.ftable");l.append(o("thead",{},o("tr",{},["Concepto","Coste","Precio cliente"].map((h,f)=>o("th",{style:f?"text-align:right;":""},h)))));const u=o("tbody");for(const h of s)u.append(o("tr",{style:"cursor:pointer;",onclick:()=>Ju(n,e,t,r,h)},[o("td",{},h.desc||""),o("td",{style:"text-align:right;"},h.coste!=null?N(h.coste):"·"),o("td",{style:"text-align:right;"},N(h.precio??0))]));l.append(u),a.append(l),i.append(a)}return i.append(o("div.kpis",{style:"margin-top:8px;"},[ai(N(t.baseImponible??0),"Base"),ai(N(t.iva??0),`IVA ${Math.round(r*100)}%`),ai(N(t.total??0),"Total")])),t.paramsUsados&&i.append(o("div.small.muted",{style:"margin-top:6px;"},`Calculado a ${Ie(t.paramsUsados.tarifaVentaMO)} €/h · margen ${Math.round((t.paramsUsados.margenMateriales||0)*100)}%`)),i}function Ju(n,e,t,r,i){const s=!!i;re(s?"Editar línea":"Nueva línea",a=>{const l=o("input",{value:i?.desc||"",placeholder:"Concepto",autofocus:!0}),u=o("input",{type:"number",step:"0.01",value:i?.coste??"",placeholder:"Coste € (opcional)"}),h=o("input",{type:"number",step:"0.01",value:i?.precio??"",placeholder:"Precio cliente €"}),f=async()=>{if(!l.value.trim()){D("Falta el concepto","err");return}const g={desc:l.value.trim(),cant:1,precio:parseFloat(h.value)||0,coste:u.value===""?null:parseFloat(u.value),tipoLinea:i?.tipoLinea||"material"};await ya(t.id,_=>{const y=(_.lineas||[]).slice();if(s){const I=y.indexOf(i);I>=0?y[I]=g:y.push(g)}else y.push(g);_.lineas=y,Xu(_,r)},s?"Línea actualizada":"Línea añadida"),a(),St(n,e)},m=async()=>{await ya(t.id,g=>{g.lineas=(g.lineas||[]).filter(_=>_!==i),Xu(g,r)},"Línea eliminada"),a(),St(n,e)};return o("div",{},[oi("Concepto",l),o("div.field-grid",{},[oi("Coste €",u),oi("Precio cliente €",h)]),o("div.small.muted",{},"La base, el IVA y el total se recalculan al guardar."),o("div.btn-row",{},[o("button.btn",{onclick:a},"Cancelar"),s?o("button.btn.btn-danger",{onclick:m},"Eliminar"):null,o("button.btn.btn-primary",{onclick:f},s?"Guardar":"Añadir")].filter(Boolean))])})}function Xu(n,e){const t=Math.round((n.lineas||[]).reduce((i,s)=>i+Number(s.cant||1)*Number(s.precio||0),0)*100)/100,r=Math.round(t*Number(e||0)*100)/100;n.baseImponible=t,n.iva=r,n.total=Math.round((t+r)*100)/100}function Jw(n,e,t){const r=o("div.card");r.append(o("div.card-head",{},o("h3",{},"Trabajo")));const i=(e.trabajos||[]).find(s=>s.presupuestoId===t.id);return i?(r.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},i.nombre),o("div.row-sub",{},`${Yn(i.tipo)} · ${i.estado||"activo"}`)]),o("div.row-right",{},o("button.btn.btn-sm",{onclick:()=>e._ctx?.nav&&e._ctx.nav("trabajos")},"Ver en Trabajos"))])),r):t.estado!=="aceptado"?(r.append(o("div.small.muted",{},'El presupuesto debe estar en estado "aceptado" para crear el trabajo.')),r):(r.append(o("div.small.muted",{style:"margin-bottom:8px;"},"Presupuesto aceptado: crea el trabajo de Sylva a partir de este presupuesto.")),r.append(o("div.btn-row",{},[o("button.btn.btn-primary",{onclick:()=>Xw(n,e,t)},"Crear trabajo")])),r)}function Xw(n,e,t){const r=Number(t.baseImponible??t.total)||0,i=Number(t.total??r)||0;re("Crear trabajo",s=>o("div",{},[o("div.small.muted",{},"El ingreso presupuestado del trabajo, ¿con IVA o sin IVA? (el Excel usa el precio sin IVA)."),o("div.kpis",{style:"margin-top:8px;"},[ai(N(r),"Base (sin IVA)"),ai(N(i),"Total (con IVA)")]),o("div.btn-row",{},[o("button.btn",{onclick:s},"Cancelar"),o("button.btn",{onclick:()=>{Zu(n,e,t,i),s()}},"Con IVA"),o("button.btn.btn-primary",{onclick:()=>{Zu(n,e,t,r),s()}},"Sin IVA (base)")])]))}async function Zu(n,e,t,r){const{clientes:i,leads:s}=Nt(e.crm),a=Ac(i,t.clienteId)||s.find(m=>m.id===t.leadId)?.nombre||"",l=Bw.includes(t.tipo)?t.tipo:"carpinteria",u=e.config||{},h=(H("trabajos")||[]).slice(),f={id:me(),nombre:t.concepto||"Trabajo",tipo:l,cliente:a,contacto:"",descripcion:t.concepto||"",fechaInicio:X(),fechaEntrega:"",estado:"activo",presupuestoId:t.id,ingresoPresupuestado:Math.round((Number(r)||0)*100)/100,extras:[],fases:Ep(u,l),tareas:[],materiales:[],otrosGastos:[],cobros:[],notas:[]};h.push(f);try{await Z("trabajos",h),D(`Trabajo "${f.nombre}" creado (ingreso ${N(f.ingresoPresupuestado)})`,"ok"),St(n,e),e._ctx?.nav&&e._ctx.nav("trabajos")}catch{D("No se pudo crear el trabajo","err")}}async function ya(n,e,t){const r=H("crm")||{},i=(Array.isArray(r.presupuestos)?r.presupuestos:[]).map(a=>a.id===n?{...a,lineas:(a.lineas||[]).slice()}:a),s=i.find(a=>a.id===n);if(!s){D("Presupuesto no encontrado","err");return}e(s);try{await Z("crm",{...r,presupuestos:i}),t&&D(t,"ok")}catch{D("No se pudo guardar","err")}}function qp(n){return o("span.chip"+(n==="aceptado"?".ok":n==="enviado"?".pend":n==="rechazado"?".venc":""),{},Tc(n))}function oi(n,e){return o("div.field",{},[o("label",{},n),e])}function ai(n,e){return o("div.kpi",{},[o("div.kpi-v",{},n),o("div.kpi-l",{},e)])}const Zw=[["pipeline","Pipeline"],["clientes","Clientes"],["presupuestos","Presupuestos"],["tarifas","Tarifas"]];let Wr="pipeline";function eI(n,e={}){n.append(o("h1.section-title",{},"Clientes"));const t=o("div.subtabs"),r=o("div");n.append(t),n.append(r);const i={crm:null,precios:null,trabajos:null,trabajadores:null,capital:null,config:null,cargado:{},_ctx:e},s=()=>{_e(t);for(const[u,h]of Zw)t.append(o("button.subtab"+(Wr===u?".active":""),{onclick:()=>{Wr=u,s()}},h));_e(r),Wr==="pipeline"?Op(r,i):Wr==="clientes"?$p(r,i):Wr==="presupuestos"?Bp(r,i):tI(r,i)},a=u=>Ye(u,h=>{i[u]=h,i.cargado[u]=!0,s()}),l=[a("crm"),a("precios"),a("trabajos"),a("trabajadores"),a("capital"),a("config")];return s(),()=>l.forEach(u=>u())}function tI(n,e){if(!e.cargado.precios){n.append(o("div.spinner"));return}const t=e.precios,r=ro(t),i=no(t),s=async f=>{const g={...H("precios")||{},...f};Array.isArray(g.materiales)||(g.materiales=Ir.materiales.slice()),Array.isArray(g.herrajes)||(g.herrajes=Ir.herrajes.slice()),g.params||(g.params={...Un});try{await Z("precios",g),D("Tarifas guardadas","ok")}catch{D("No se pudo guardar","err")}},a=o("div.card");a.append(o("div.card-head",{},o("h3",{},"Parámetros de presupuesto")));const l=o("input",{type:"number",step:"0.01",value:i.tarifaVentaMO}),u=o("input",{type:"number",step:"0.5",value:Math.round(i.margenMateriales*1e3)/10}),h=o("input",{type:"number",step:"0.5",value:Math.round(i.iva*1e3)/10});a.append(o("div.field-grid",{},[ct("Tarifa venta MO €/h",l),ct("Margen materiales %",u),ct("IVA %",h)])),a.append(o("div.small.muted",{},"Fuente única: estos parámetros los usan el presupuestador y el módulo Trabajos.")),a.append(o("div.btn-row",{},[o("button.btn.btn-primary",{onclick:()=>s({params:{tarifaVentaMO:parseFloat(l.value)||Un.tarifaVentaMO,margenMateriales:(parseFloat(u.value)||0)/100,iva:(parseFloat(h.value)||0)/100}})},"Guardar parámetros")])),n.append(a),n.append(iI(r.materiales,s)),n.append(oI("Herrajes",r.herrajes,"herrajes",s,!1)),n.append(rI(t,s))}const nI=Object.keys(_a);function rI(n,e){const t=o("div.card");t.append(o("div.card-head",{},o("h3",{},"Plantillas de presupuesto"))),t.append(o("div.small.muted",{style:"margin-bottom:8px;"},"Secciones y items preestablecidos que carga el presupuestador al elegir el tipo. Los items se siembran sin precio; el precio/hora por sección (25 €/h) es editable. Carpintería y CNC usan el modo simple."));for(const r of nI){const i=(In.find(([f])=>f===r)||[r,r])[1];let s=ks(n,r).secciones;const a=o("div",{style:"margin-top:8px;border-top:1px solid var(--linea);padding-top:8px;"}),l=()=>{_e(a),a.append(o("div.card-head",{},[o("h3",{style:"font-size:13px;"},`Plantilla · ${i}`),o("button.link",{onclick:()=>{s.push({nombre:"Nueva sección",activa:!0,precioHora:Un.tarifaVentaMO,horas:0,items:[]}),l()}},"+ Sección")])),s.forEach((f,m)=>a.append(u(f,m))),s.length||a.append(o("div.card-empty",{},"Sin secciones")),a.append(o("div.btn-row",{},[o("button.btn.btn-sm",{onclick:()=>{s=ks({plantillas:{[r]:null}},r).secciones,l(),D("Plantilla restablecida (recuerda guardar)","ok")}},"Restablecer"),o("button.btn.btn-sm.btn-primary",{onclick:()=>h()},"Guardar plantilla")]))},u=(f,m)=>{const g=o("div.card",{style:"padding:8px;margin-bottom:6px;"}),_=o("input",{type:"checkbox"});_.checked=f.activa!==!1,_.addEventListener("change",()=>{f.activa=_.checked});const y=o("input",{value:f.nombre||"",placeholder:"Sección",style:"font-weight:600;min-width:130px;"});y.addEventListener("input",()=>{f.nombre=y.value}),g.append(o("div.card-head",{},[o("label",{style:"display:flex;gap:6px;align-items:center;margin:0;"},[_,y]),o("button.btn.btn-sm.btn-danger",{onclick:()=>{s.splice(m,1),l()},title:"Quitar sección"},"×")])),(f.items||[]).forEach((x,F)=>{const O=o("input",{value:x.concepto||"",placeholder:"Item",style:"min-width:140px;"});O.addEventListener("input",()=>{x.concepto=O.value});const $=o("input",{type:"number",step:"1",value:x.cantidad??1,placeholder:"Cant",style:"max-width:80px;"});$.addEventListener("input",()=>{x.cantidad=$.value===""?1:parseFloat($.value)}),g.append(o("div.row",{style:"gap:8px;align-items:flex-end;"},[o("div.field",{style:"margin:0;"},[o("label",{style:"font-size:9px;"},"Item"),O]),o("div.field",{style:"margin:0;"},[o("label",{style:"font-size:9px;"},"Cant"),$]),o("button.btn.btn-sm.btn-danger",{onclick:()=>{f.items.splice(F,1),l()},title:"Quitar item"},"×")]))});const I=o("input",{type:"number",step:"0.5",value:f.precioHora??Un.tarifaVentaMO,style:"max-width:90px;"});I.addEventListener("input",()=>{f.precioHora=I.value===""?Un.tarifaVentaMO:parseFloat(I.value)});const P=o("input",{type:"number",step:"0.5",value:f.horas??0,style:"max-width:90px;"});return P.addEventListener("input",()=>{f.horas=P.value===""?0:parseFloat(P.value)}),g.append(o("div.btn-row",{},[o("button.btn.btn-sm",{onclick:()=>{(f.items=f.items||[]).push({concepto:"",cantidad:1}),l()}},"+ Item")])),g.append(o("div.field-grid",{style:"margin-top:4px;"},[ct("Precio/hora € (defecto)",I),ct("Horas (defecto)",P)])),g},h=async()=>{const m={...(H("precios")||{}).plantillas||{}};m[r]={secciones:s},await e({plantillas:m})};l(),t.append(a)}return t}const on={q:"",cat:""};function iI(n,e){const t=o("div.card");t.append(o("div.card-head",{},[o("h3",{},"Materiales"),o("button.link",{onclick:()=>Ns("Materiales","materiales",!0,e,null,on.cat||"carpinteria")},"+ Añadir")]));const r=o("input",{value:on.q,placeholder:"Buscar material…"}),i=o("select",{},[o("option",{value:""},"Todas las categorías"),...Rs.map(([l,u])=>o("option",{value:l},u))]);i.value=on.cat;const s=o("div"),a=()=>{_e(s);const l=on.q.trim().toLowerCase(),u=n.filter(h=>!(on.cat&&Ps(h)!==on.cat||l&&!((h.nombre||"").toLowerCase().includes(l)||(h.id||"").toLowerCase().includes(l))));if(!u.length){s.append(o("div.card-empty",{},n.length?"Ningún material con esos filtros":"Catálogo vacío"));return}for(const[h,f]of Rs){const m=u.filter(g=>Ps(g)===h);if(m.length){s.append(o("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:10px 0 2px;"},`${f} · ${m.length}`));for(const g of m)s.append(sI(g,e))}}};return r.addEventListener("input",()=>{on.q=r.value,a()}),i.addEventListener("change",()=>{on.cat=i.value,a()}),t.append(o("div.field-grid",{},[ct("Buscar",r),ct("Categoría",i)])),t.append(s),a(),t}function sI(n,e){const t=n.precioM2!=null?`${N(n.precioM2)}/m²`:n.precioUd!=null?`${N(n.precioUd)}/ud`:"—";return o("div.row",{style:"cursor:pointer;",onclick:()=>Ns("Materiales","materiales",!0,e,n,Ps(n))},[o("div.row-main",{},[o("div.row-label",{},n.nombre||"(sin nombre)"),o("div.row-sub",{},[n.id?`id: ${n.id}`:"",n.grosor!=null?` · ${n.grosor}mm`:""].join("")||"·")]),o("div.row-right",{},o("div.amount",{},t))])}function oI(n,e,t,r,i){const s=o("div.card");if(s.append(o("div.card-head",{},[o("h3",{},n),o("button.link",{onclick:()=>Ns(n,t,i,r,null)},"+ Añadir")])),!e.length)return s.append(o("div.card-empty",{},"Catálogo vacío")),s;for(const a of e){const l=a.precioM2!=null?`${N(a.precioM2)}/m²`:a.precioUd!=null?`${N(a.precioUd)}/ud`:"—";s.append(o("div.row",{style:"cursor:pointer;",onclick:()=>Ns(n,t,i,r,a)},[o("div.row-main",{},[o("div.row-label",{},a.nombre||"(sin nombre)"),o("div.row-sub",{},[a.id?`id: ${a.id}`:"",""].join("")||"·")]),o("div.row-right",{},o("div.amount",{},l))]))}return s}function Ns(n,e,t,r,i,s){const a=!!i;re(a?`Editar · ${i.nombre}`:`Nuevo en ${n}`,l=>{const u=o("input",{value:i?.nombre||"",placeholder:"Nombre",autofocus:!0}),h=o("select",{},[o("option",{value:"m2"},"Precio por m²"),o("option",{value:"ud"},"Precio por unidad")]);h.value=i&&i.precioUd!=null&&i.precioM2==null?"ud":t?"m2":"ud";const f=o("input",{type:"number",step:"0.01",value:i?.precioM2??i?.precioUd??"",placeholder:"Precio €"}),m=o("input",{type:"number",step:"1",value:i?.grosor??"",placeholder:"Grosor mm (opcional)"}),g=o("select",{},Rs.map(([I,P])=>o("option",{value:I},P)));g.value=t?i?Ps(i):s||"carpinteria":"carpinteria";const _=async()=>{if(!u.value.trim()){D("Falta el nombre","err");return}const I=(H("precios")?.[e]||Ir[e]||[]).slice(),P={id:i?.id||me(),nombre:u.value.trim()},x=parseFloat(f.value)||0;if(t&&h.value==="m2"?(P.precioM2=x,m.value!==""&&(P.grosor=parseFloat(m.value))):P.precioUd=x,t&&(P.categoria=g.value||"carpinteria"),a){const F=I.findIndex(O=>O.id===i.id||O===i);F>=0?I[F]=P:I.push(P)}else I.push(P);await r({[e]:I}),l()},y=async()=>{const I=(H("precios")?.[e]||Ir[e]||[]).filter(P=>P.id!==i.id&&P!==i);await r({[e]:I}),l()};return o("div",{},[ct("Nombre",u),t?ct("Categoría",g):null,t?o("div.field-grid",{},[ct("Modo de precio",h),ct("Precio €",f)]):ct("Precio € / ud",f),t?ct("Grosor mm",m):null,o("div.btn-row",{},[o("button.btn",{onclick:l},"Cancelar"),a?o("button.btn.btn-danger",{onclick:y},"Eliminar"):null,o("button.btn.btn-primary",{onclick:_},a?"Guardar":"Añadir")].filter(Boolean))].filter(Boolean))})}function ct(n,e){return o("div.field",{},[o("label",{},n),e])}const ot={anio:null,mesGridY:null,mesGridM:null},dt={tipo:"",categoria:"",estado:""},io=()=>{const n=H("cobrospagos")||{};return{saldoInicial:Number(n.saldoInicial)||0,fechaInicio:n.fechaInicio||"",movimientos:n.movimientos||[]}},ba=()=>`${new Date().getFullYear()}-01-01`,Ds=(n,e)=>new Date(n,e+1,0).getDate(),jn=(n,e,t)=>`${n}-${String(e+1).padStart(2,"0")}-${String(t).padStart(2,"0")}`;function aI(n,e){if(!e.cargado.cobrospagos||!e.cargado.gastos||!e.cargado.trabajadores){n.append(o("div.spinner"));return}const t=new Date;ot.anio==null&&(ot.anio=t.getFullYear()),ot.mesGridY==null&&(ot.mesGridY=t.getFullYear(),ot.mesGridM=t.getMonth());const r=io(),i={cobrospagos:e.cobrospagos,gastos:e.gastos,trabajadores:e.trabajadores,trabajos:e.trabajos};n.append(cI()),n.append(Ea(i,r)),n.append(Hp(i)),n.append(Gp(i)),n.append(lI(r))}function cI(){const n=o("div.card");return n.append(o("div.card-head",{},[o("h3",{},"Tesorería"),o("button.link",{onclick:()=>zp(null)},"+ Movimiento")])),n.append(o("div.small.muted",{},"Cobros y pagos previstos y realizados. Aparecen automáticamente: gastos, trabajos pendientes de pago y el pendiente de cobro de cada trabajo-proyecto en su fecha de entrega.")),n}function lI(n){const e=o("div.card");return e.append(o("div.card-head",{},o("h3",{},"Saldo inicial"))),e.append(o("div.hero",{},[o("div.hero-label",{},"Saldo inicial"),o("div.hero-value",{},N(n.saldoInicial)),o("div.hero-sub",{},n.fechaInicio?`desde ${n.fechaInicio}`:"sin fecha de inicio")])),e.append(o("div.btn-row",{},[o("button.btn.btn-sm",{onclick:()=>uI(n)},"Editar saldo/fecha inicial")])),e}function uI(n){re("Saldo y fecha inicial",e=>{const t=o("input",{type:"number",step:"0.01",value:n.saldoInicial,placeholder:"Saldo inicial €"}),r=o("input",{type:"date",value:n.fechaInicio||ba()}),i=async()=>{const a={...io(),saldoInicial:parseFloat(t.value)||0,fechaInicio:r.value||ba()};try{await Z("cobrospagos",a),D("Guardado","ok"),e()}catch{D("No se pudo guardar","err")}};return o("div",{},[ht("Saldo inicial €",t),ht("Fecha de inicio",r),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:i},"Guardar")])])})}function zp(n){const e=!!n;re(e?"Editar movimiento":"Nuevo movimiento",t=>{const r=o("input",{type:"date",value:n?.fecha||X()}),i=o("select",{},[o("option",{value:"cobro"},"Cobro"),o("option",{value:"pago"},"Pago")]);i.value=n?.tipo||"cobro";const s=o("input",{value:n?.concepto||"",placeholder:"Concepto"}),a=o("input",{value:n?.categoria||"",placeholder:"Categoría (opcional)"}),l=o("input",{type:"number",step:"0.01",value:n?.importe??"",placeholder:"Importe €"}),u=o("select",{},[o("option",{value:"previsto"},"Previsto"),o("option",{value:"realizado"},"Realizado")]);u.value=n?.estado||"previsto";const h=o("textarea",{rows:2,placeholder:"Notas"},n?.notas||""),f=async()=>{if(!s.value.trim()){D("Falta el concepto","err");return}const m=parseFloat(l.value)||0;if(!m||m<=0){D("Falta el importe","err");return}const g=io(),_=g.movimientos.slice(),y={id:n?.id||me(),fecha:r.value||X(),tipo:i.value,concepto:s.value.trim(),categoria:a.value.trim(),importe:m,estado:u.value,notas:h.value.trim()};if(e){const I=_.findIndex(P=>P.id===y.id);I>=0?_[I]=y:_.push(y)}else _.push(y);try{await Z("cobrospagos",{...g,movimientos:_}),D(e?"Movimiento actualizado":"Movimiento creado","ok"),t()}catch{D("No se pudo guardar","err")}};return o("div",{},[o("div.field-grid",{},[ht("Fecha",r),ht("Tipo",i)]),ht("Concepto",s),o("div.field-grid",{},[ht("Categoría",a),ht("Importe €",l)]),ht("Estado",u),ht("Notas",h),o("div.btn-row",{},[o("button.btn",{onclick:t},"Cancelar"),e?o("button.btn.btn-danger",{onclick:()=>dI(n.id,t)},"Eliminar"):null,o("button.btn.btn-primary",{onclick:f},e?"Guardar":"Crear")].filter(Boolean))])})}async function dI(n,e){const t=io();try{await Z("cobrospagos",{...t,movimientos:t.movimientos.filter(r=>r.id!==n)}),D("Movimiento eliminado","ok"),e?.()}catch{D("No se pudo guardar","err")}}function Ea(n,e){const t=o("div.card"),r=ot.anio;t.append(o("div.card-head",{},[o("h3",{},"Resumen mensual"),o("div",{style:"display:flex;gap:8px;align-items:center;"},[o("button.btn.btn-sm",{onclick:()=>{ot.anio--,t.replaceWith(Ea(n,e))}},"‹"),o("span.small.muted",{},String(r)),o("button.btn.btn-sm",{onclick:()=>{ot.anio++,t.replaceWith(Ea(n,e))}},"›")])]));const i=e.fechaInicio||ba(),s=o("div",{style:"overflow-x:auto;"}),a=o("table.ftable");a.append(o("thead",{},o("tr",{},[o("th",{},"Mes"),o("th",{},"Cobros"),o("th",{},"Pagos"),o("th",{},"Neto"),o("th",{},"Saldo acum.")])));const l=o("tbody");for(let u=0;u<12;u++){const h=jn(r,u,1),f=jn(r,u,Ds(r,u)),m=_i(n,h,f),g=m.filter(x=>x.tipo==="cobro").reduce((x,F)=>x+F.importe,0),_=m.filter(x=>x.tipo==="pago").reduce((x,F)=>x+F.importe,0),y=g-_,I=Zs(_i(n,i,f)),P=e.saldoInicial+I;l.append(o("tr",{},[o("td",{},br[u].slice(0,3)),o("td",{style:"text-align:right;"},g?N(g):"·"),o("td",{style:"text-align:right;"},_?N(_):"·"),o("td"+(y>=0?".pos":".neg"),{style:"text-align:right;"},N(y)),o("td",{style:"text-align:right;font-weight:500;"},N(P))]))}return a.append(l),s.append(a),t.append(s),t}function Hp(n){var g;const e=o("div.card"),t=ot.mesGridY,r=ot.mesGridM,i=_=>{let y=r+_,I=t;for(;y<0;)y+=12,I--;for(;y>11;)y-=12,I++;ot.mesGridY=I,ot.mesGridM=y,e.replaceWith(Hp(n))};e.append(o("div.card-head",{},[o("h3",{},"Calendario"),o("div",{style:"display:flex;gap:8px;align-items:center;"},[o("button.btn.btn-sm",{onclick:()=>i(-1)},"‹"),o("span.small.muted",{},`${br[r]} ${t}`),o("button.btn.btn-sm",{onclick:()=>i(1)},"›")])]));const s=jn(t,r,1),a=jn(t,r,Ds(t,r)),l=_i(n,s,a),u={};for(const _ of l)(u[g=_.fecha]||(u[g]=[])).push(_);const h=o("div.cal-grid");for(const _ of["L","M","X","J","V","S","D"])h.append(o("div.cal-dow",{},_));const f=(new Date(t,r,1).getDay()+6)%7;for(let _=0;_<f;_++)h.append(o("div.cal-cell.empty"));const m=X();for(let _=1;_<=Ds(t,r);_++){const y=jn(t,r,_),I=u[y]||[],P=Zs(I),x=(I.length?" clickable":"")+(y===m?" hoy":""),F=o("div.cal-cell",{class:x.trim()},[o("div.cal-num",{},String(_)),I.length?o("div.cal-net"+(P>=0?".pos":".neg"),{},N(P)):o("div")]);I.length&&F.addEventListener("click",()=>hI(y,I)),h.append(F)}return e.append(h),e}function hI(n,e){re(n,t=>{const r=o("div");for(const i of e)r.append(Wp(i,!1));return o("div",{},[o("div.hero",{},[o("div.hero-label",{},"Neto del día"),o("div.hero-value",{},N(Zs(e)))]),r,o("div.btn-row",{},[o("button.btn",{onclick:t},"Cerrar")])])})}function Gp(n){const e=o("div.card");e.append(o("div.card-head",{},o("h3",{},"Registro del mes")));const t=ot.mesGridY,r=ot.mesGridM,i=jn(t,r,1),s=jn(t,r,Ds(t,r));let a=_i(n,i,s);const l=[...new Set(a.map(y=>y.categoria).filter(Boolean))],u=o("select",{},[o("option",{value:""},"Todos"),o("option",{value:"cobro"},"Cobros"),o("option",{value:"pago"},"Pagos")]);u.value=dt.tipo;const h=o("select",{},[o("option",{value:""},"Todas"),...l.map(y=>o("option",{value:y},y))]);h.value=dt.categoria;const f=o("select",{},[o("option",{value:""},"Todos"),o("option",{value:"previsto"},"Previsto"),o("option",{value:"realizado"},"Realizado")]);f.value=dt.estado;const m=()=>{dt.tipo=u.value,dt.categoria=h.value,dt.estado=f.value,e.replaceWith(Gp(n))};[u,h,f].forEach(y=>y.addEventListener("change",m)),e.append(o("div.field-grid",{},[ht("Tipo",u),ht("Estado",f)])),e.append(ht("Categoría",h)),dt.tipo&&(a=a.filter(y=>y.tipo===dt.tipo)),dt.categoria&&(a=a.filter(y=>y.categoria===dt.categoria)),dt.estado&&(a=a.filter(y=>y.estado===dt.estado));const g=a.filter(y=>y.tipo==="cobro").reduce((y,I)=>y+I.importe,0),_=a.filter(y=>y.tipo==="pago").reduce((y,I)=>y+I.importe,0);if(e.append(o("div.kpis",{},[jo(N(g),"Cobros"),jo(N(_),"Pagos"),jo(N(g-_),"Neto")])),!a.length)return e.append(o("div.card-empty",{},"Sin movimientos")),e;for(const y of a)e.append(Wp(y,!0));return e}function Wp(n,e){const t=n.tipo==="cobro"?".pos":".neg",r=n.origen==="gasto"?"gasto":n.origen==="trabajador"?"trabajador":n.categoria||n.tipo;return o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},[n.concepto||"(sin concepto)",o("span.chip",{style:"margin-left:6px;"},r)]),o("div.row-sub",{},`${n.fecha} · ${n.estado}${n.readonly?" · solo lectura":""}`)]),o("div.row-right",{},[o("div.amount"+t,{},(n.tipo==="cobro"?"+":"−")+N(n.importe)),e&&!n.readonly?o("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;"},[o("button.btn.btn-sm",{onclick:()=>zp(pI(n))},"Editar")]):null])])}function pI(n){return{id:n.id,fecha:n.fecha,tipo:n.tipo,concepto:n.concepto,categoria:n.categoria,importe:n.importe,estado:n.estado,notas:n.notas}}function ht(n,e){return o("div.field",{},[o("label",{},n),e])}function jo(n,e){return o("div.kpi",{},[o("div.kpi-v",{},n),o("div.kpi-l",{},e)])}const Ke={anio:null,mes:null,mostrarArchivados:!1,categoria:""},fI=(n,e)=>new Date(n,e+1,0).getDate(),ed=(n,e,t)=>`${n}-${String(e+1).padStart(2,"0")}-${String(t).padStart(2,"0")}`,td=n=>{const e=new Date;return e.setDate(e.getDate()+n),e.toISOString().split("T")[0]};function mI(n,e){if(!e.cargado.gastos){n.append(o("div.spinner"));return}const t=new Date;Ke.anio==null&&(Ke.anio=t.getFullYear(),Ke.mes=t.getMonth());const r=e.gastos||[];n.append(Kp(r)),n.append(wa(r))}function Kp(n){const e=o("div.card"),t=Ke.anio,r=Ke.mes,i=m=>{let g=r+m,_=t;for(;g<0;)g+=12,_--;for(;g>11;)g-=12,_++;Ke.anio=_,Ke.mes=g,e.replaceWith(Kp(n))};e.append(o("div.card-head",{},[o("h3",{},"Resumen del mes"),o("div",{style:"display:flex;gap:8px;align-items:center;"},[o("button.btn.btn-sm",{onclick:()=>i(-1)},"‹"),o("span.small.muted",{},`${br[r]} ${t}`),o("button.btn.btn-sm",{onclick:()=>i(1)},"›")])]));const s=ed(t,r,1),a=ed(t,r,fI(t,r)),l=Xs(n,s,a),u=l.reduce((m,g)=>m+(g.importe||0),0),h=l.filter(m=>m.pagado).reduce((m,g)=>m+(g.importe||0),0),f=l.filter(m=>!m.pagado).reduce((m,g)=>m+(g.importe||0),0);return e.append(o("div.kpis",{},[Bo(N(u),"Esperado"),Bo(N(h),"Pagado"),Bo(N(f),"Pendiente")])),e}function wa(n){const e=o("div.card");e.append(o("div.card-head",{},[o("h3",{},Ke.mostrarArchivados?"Gastos archivados":"Gastos"),o("button.link",{onclick:()=>Qp(null)},"+ Gasto")]));const t=[...new Set(n.map(u=>u.categoria).filter(Boolean))].sort(),r=o("select",{},[o("option",{value:""},"Todas"),...t.map(u=>o("option",{value:u},u))]);r.value=Ke.categoria,r.addEventListener("change",()=>{Ke.categoria=r.value,e.replaceWith(wa(n))});const i=o("button.btn.btn-sm",{onclick:()=>{Ke.mostrarArchivados=!Ke.mostrarArchivados,e.replaceWith(wa(n))}},Ke.mostrarArchivados?"Ver activos":"Ver archivados");e.append(o("div.field-grid",{},[We("Categoría",r),o("div.field",{},[o("label",{},"Vista"),i])]));let s=n.filter(u=>!!u.archivado===Ke.mostrarArchivados);Ke.categoria&&(s=s.filter(u=>u.categoria===Ke.categoria));const a=s.filter(u=>u.recurrente),l=s.filter(u=>!u.recurrente);return e.append(nd("Recurrentes",a)),e.append(nd("Puntuales",l)),s.length||e.append(o("div.card-empty",{},"Sin gastos")),e}function nd(n,e){var i;const t=o("div");if(!e.length)return t;t.append(o("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:10px 0 2px;"},n));const r={};for(const s of e)(r[i=s.categoria||"—"]||(r[i]=[])).push(s);for(const s of Object.keys(r).sort())for(const a of r[s])t.append(gI(a));return t}function gI(n){const e=n.recurrente?`${n.frecuencia||"mensual"} · día ${n.diaCobro??1}${n.fechaFin?` · hasta ${n.fechaFin}`:""}`:n.fecha||"—",t=!n.recurrente&&(n.pagos||[]).some(r=>r.fecha===n.fecha);return o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},[n.concepto||"(sin concepto)",o("span.chip",{style:"margin-left:6px;"},n.categoria||"—"),n.deducible?o("span.chip.ok",{style:"margin-left:4px;"},"deducible"):null,t?o("span.chip.ok",{style:"margin-left:4px;"},"pagado"):null].filter(Boolean)),o("div.row-sub",{},[e,n.baseImponible!=null?` · base ${N(n.baseImponible)} · IVA ${Ie(n.tipoIVA||21,0)}%`:""].join("")),n.facturaDrive?o("a",{href:n.facturaDrive.link||n.facturaDrive,target:"_blank",rel:"noopener",class:"link",style:"font-size:9px;"},"📎 factura Drive"):null].filter(Boolean)),o("div.row-right",{},[o("div.amount",{},N(n.importe)),o("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;flex-wrap:wrap;"},[o("button.btn.btn-sm.btn-primary",{onclick:()=>_I(n)},"Pagar"),o("button.btn.btn-sm",{onclick:()=>Qp(n)},"Editar"),o("button.btn.btn-sm",{onclick:()=>vI(n)},n.archivado?"Desarchivar":"Archivar"),o("button.btn.btn-sm.btn-danger",{onclick:()=>bI(n)},"Eliminar")])])])}async function vI(n){const e=(H("gastos")||[]).map(r=>({...r})),t=e.find(r=>r.id===n.id);if(t){t.archivado=!t.archivado;try{await Z("gastos",e),D(t.archivado?"Archivado":"Desarchivado","ok")}catch{D("No se pudo guardar","err")}}}function Qp(n){const e=!!n;re(e?"Editar gasto":"Nuevo gasto",t=>{const r=o("input",{value:n?.concepto||"",placeholder:"Concepto"}),i=o("input",{type:"number",step:"0.01",value:n?.importe??"",placeholder:"Importe €"}),s=Uu(H("config"));for(const w of(H("gastos")||[]).map(A=>A.categoria).filter(Boolean))s.includes(w)||s.push(w);const a=o("select",{style:"flex:1;"},s.map(w=>o("option",{value:w},w)));a.value=n?.categoria||"personal";const l=o("input",{type:"checkbox"});l.checked=n?!!n.deducible:xo(a.value),a.addEventListener("change",()=>{e||(l.checked=xo(a.value))});const u=o("button.btn.btn-sm",{type:"button",onclick:async()=>{const w=(window.prompt("Nueva categoría de gasto")||"").trim().toLowerCase();if(!w)return;[...a.options].some(S=>S.value===w)||a.append(o("option",{value:w},w)),a.value=w,e||(l.checked=xo(w));const A={...H("config")||{}},C=Uu(A);if(!C.includes(w)){A.categorias_gasto=[...C,w];try{await Z("config",A)}catch{D("No se pudo guardar la categoría","err")}}}},"+ nueva"),h=o("div",{style:"display:flex;gap:6px;align-items:center;"},[a,u]),f=o("select",{},[o("option",{value:"manual"},"Manual"),o("option",{value:"domiciliado"},"Domiciliado")]);f.value=n?.metodo||"manual";const m=o("textarea",{rows:2,placeholder:"Notas"},n?.notas||""),g=o("input",{type:"checkbox"});g.checked=!!n?.recurrente;const _=o("input",{type:"date",value:n?.fecha||X()}),y=o("div",{},We("Fecha",_)),I=o("select",{},["mensual","trimestral","anual","semanal"].map(w=>o("option",{value:w},w)));I.value=n?.frecuencia||"mensual";const P=o("input",{type:"number",step:"1",value:n?.diaCobro??1,placeholder:"Día (1-31 o 0-6 semanal)"}),x=o("input",{type:"date",value:n?.fechaInicio||X()}),F=o("input",{type:"date",value:n?.fechaFin||""}),O=o("div",{},[o("div.field-grid",{},[We("Frecuencia",I),We("Día de cobro",P)]),o("div.field-grid",{},[We("Fecha inicio",x),We("Fecha fin (opc.)",F)])]),$=()=>{y.hidden=g.checked,O.hidden=!g.checked};g.addEventListener("change",$);const U=o("input",{type:"number",step:"0.01",value:n?.baseImponible??"",placeholder:"Base imponible (opc.)"}),V=o("input",{type:"number",step:"1",value:n?.tipoIVA??21,placeholder:"% IVA"}),T=o("input",{type:"number",step:"0.01",value:n?.ivaSoportado??"",placeholder:"IVA soportado (auto si vacío)"}),E=async()=>{if(!r.value.trim()){D("Falta el concepto","err");return}const w=parseFloat(i.value)||0;if(!w||w<=0){D("Falta el importe","err");return}const A=a.value,C=(H("gastos")||[]).map(b=>({...b})),S=b=>(b.concepto=r.value.trim(),b.importe=w,b.categoria=A,b.deducible=l.checked,b.metodo=f.value||"manual",b.notas=m.value.trim(),b.recurrente=g.checked,b.recurrente?(b.frecuencia=I.value||"mensual",b.diaCobro=P.value!==""?parseInt(P.value,10):1,b.fechaInicio=x.value||X(),b.fechaFin=F.value||null,delete b.fecha):(b.fecha=_.value||X(),delete b.frecuencia,delete b.diaCobro,delete b.fechaInicio,delete b.fechaFin),U.value!==""?(b.baseImponible=parseFloat(U.value),b.tipoIVA=parseFloat(V.value)||21,b.ivaSoportado=T.value!==""?parseFloat(T.value):parseFloat((b.baseImponible*b.tipoIVA/100).toFixed(2))):(delete b.baseImponible,delete b.tipoIVA,delete b.ivaSoportado),b);if(e){const b=C.find(se=>se.id===n.id);if(!b){D("Gasto no encontrado","err");return}S(b)}else{const b=S({id:me(),pagos:[],facturaDrive:null});C.push(b)}try{await Z("gastos",C),D(e?"Gasto guardado":"Gasto creado","ok"),t()}catch{D("No se pudo guardar","err")}};return $(),o("div",{},[We("Concepto",r),o("div.field-grid",{},[We("Importe €",i),We("Categoría",h)]),o("div.field-grid",{},[o("div.field",{},[o("label",{},"Deducible"),o("div",{style:"display:flex;align-items:center;gap:6px;height:34px;"},[l,o("span.small.muted",{},"IVA/IRPF")])]),We("Método",f)]),o("div.field",{},[o("label",{},"Recurrente"),o("div",{style:"display:flex;align-items:center;gap:6px;height:34px;"},[g,o("span.small.muted",{},"se repite en el tiempo")])]),y,O,o("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:10px 0 4px;"},"IVA (opcional)"),o("div.field-grid",{},[We("Base imponible",U),We("% IVA",V)]),We("IVA soportado",T),We("Notas",m),o("div.btn-row",{},[o("button.btn",{onclick:t},"Cancelar"),o("button.btn.btn-primary",{onclick:E},e?"Guardar":"Crear")])])})}function _I(n){re("Marcar pagado",e=>{const t=Xs([n],td(-90),td(120)).filter(h=>!h.pagado);if(!t.length)return o("div",{},[o("div.small.muted",{},"No hay ocurrencias pendientes de este gasto."),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cerrar")])]);const r=X(),i=t.find(h=>h.fecha===r)||t[0],s=o("select",{},t.map(h=>o("option",{value:h.fecha},`${h.fecha} · ${N(h.importe)}`)));s.value=i.fecha;const a=Object.keys((H("capital")||{}).cuentas||{});a.includes("revolut")||a.unshift("revolut");const l=o("select",{},a.map(h=>o("option",{value:h},h)));l.value="revolut";const u=async()=>{try{await yI(n.id,s.value,l.value),D(`Pagado "${n.concepto}"`,"ok"),e()}catch{D("No se pudo registrar el pago","err")}};return o("div",{},[o("div.hero",{},[o("div.hero-label",{},n.concepto),o("div.hero-value",{},N(n.importe))]),o("div.field-grid",{},[We("Ocurrencia",s),We("Cuenta",l)]),o("div.small.muted",{},"Resta de la cuenta y añade un movimiento en el historial de capital, idéntico al bot."),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:u},"Confirmar pago")])])})}async function yI(n,e,t){const r=X(),i=t||"revolut",s=(H("gastos")||[]).map(f=>({...f,pagos:(f.pagos||[]).slice()})),a=s.find(f=>f.id===n);if(!a)throw new Error("gasto no encontrado");const l=a.importe;a.pagos||(a.pagos=[]),a.pagos=a.pagos.filter(f=>f.fecha!==e),a.pagos.push({fecha:e,fechaPago:r,importe:l,cuenta:i});const u=H("capital")||{cuentas:{},historial:[]},h={...u,cuentas:{...u.cuentas||{}},historial:(u.historial||[]).slice()};h.cuentas[i]=(h.cuentas[i]||0)-l,h.historial.push({id:me(),tipo:"gasto",cuenta:i,importe:-l,concepto:`Gasto: ${a.concepto}`,fechaISO:r}),await ki({gastos:s,capital:h})}function bI(n){const e=(n.pagos||[]).length>0,t=(n.pagos||[]).reduce((r,i)=>r+(i.importe||0),0);re("Eliminar gasto",r=>o("div",{},[o("div.hero",{},[o("div.hero-label",{},n.concepto),o("div.hero-value",{},N(n.importe))]),e?o("div.card",{style:"border-color:var(--gold);"},o("div.row-sub",{style:"color:var(--gold);font-size:11px;"},`Tiene ${n.pagos.length} pago(s): se devolverán ${N(t)} al capital (reverso).`)):o("div.small.muted",{},"Se eliminará el gasto."),o("div.btn-row",{},[o("button.btn",{onclick:r},"Cancelar"),o("button.btn.btn-danger",{onclick:async()=>{try{await EI(n.id),D("Gasto eliminado","ok"),r()}catch{D("No se pudo eliminar","err")}}},"Eliminar")])]))}async function EI(n){const e=X(),t=H("gastos")||[],r=t.find(a=>a.id===n);if(!r)throw new Error("gasto no encontrado");let i=0;const s={};if((r.pagos||[]).length>0){const a=H("capital")||{cuentas:{},historial:[]},l={...a,cuentas:{...a.cuentas||{}},historial:(a.historial||[]).slice()};r.pagos.forEach(u=>{l.cuentas[u.cuenta]=(l.cuentas[u.cuenta]||0)+u.importe,i+=u.importe}),l.historial.push({id:me(),tipo:"reverso_gasto",cuenta:r.pagos[0].cuenta,importe:i,concepto:`Reverso: ${r.concepto}`,fechaISO:e}),s.capital=l}s.gastos=t.filter(a=>a.id!==r.id),s.capital?await ki(s):await Z("gastos",s.gastos)}function We(n,e){return o("div.field",{},[o("label",{},n),e])}function Bo(n,e){return o("div.kpi",{},[o("div.kpi-v",{},n),o("div.kpi-l",{},e)])}const nt={anio:null,trim:null};function wI(n,e){if(!e.cargado.gastos||!e.cargado.facturas_emitidas){n.append(o("div.spinner"));return}const t=new Date;nt.anio==null&&(nt.anio=t.getFullYear(),nt.trim=Math.floor(t.getMonth()/3)+1);const r=e.gastos||[],i=e.facturas_emitidas||[];n.append(o("div.card",{style:"border-color:var(--gold);"},o("div.row-sub",{style:"color:var(--gold);font-size:11px;"},"⚠ Estimación — la presentación oficial la hace el gestor."))),n.append(Yp(r,i))}function Yp(n,e){const t=o("div"),r=o("div.card"),i=o("select",{},[nt.anio-2,nt.anio-1,nt.anio,nt.anio+1].map(u=>o("option",{value:u},String(u))));i.value=String(nt.anio);const s=o("select",{},[1,2,3,4].map(u=>o("option",{value:u},`Q${u}`)));s.value=String(nt.trim);const a=()=>{nt.anio=parseInt(i.value,10),nt.trim=parseInt(s.value,10);const u=Yp(n,e);t.replaceWith(u)};i.addEventListener("change",a),s.addEventListener("change",a),r.append(o("div.card-head",{},[o("h3",{},"Trimestre"),o("button.link",{onclick:()=>AI()},"+ Factura emitida")])),r.append(o("div.field-grid",{},[$t("Año",i),$t("Trimestre",s)])),t.append(r);const l=NE(n,e,nt.anio,nt.trim);return t.append(II(l)),t.append(TI(e)),t}function II(n){const e=o("div.card");return e.append(o("div.card-head",{},[o("h3",{},`Resumen ${n.trimestre}`),o("span.small.muted",{},`plazo ${n.plazo}`)])),e.append(o("div.hero",{},[o("div.hero-label",{},"Total a provisionar"),o("div.hero-value",{},n.total_provisionar),o("div.hero-sub",{},`${n.rango.desde} → ${n.rango.hasta}`)])),e.append(o("div.section-label",{style:qo()},"Modelo 303 · IVA")),e.append(Ft("IVA repercutido",N(n.modelo_303.repercutido))),e.append(Ft("IVA soportado",N(n.modelo_303.soportado))),e.append(Ft(n.modelo_303.resultado.startsWith("A DEVOLVER")?"A devolver":"A ingresar",N(Math.abs(parseFloat(n.modelo_303.cuota))),n.modelo_303.cuota>=0?"neg":"pos")),e.append(o("div.section-label",{style:qo()},"Modelo 130 · IRPF")),e.append(Ft("Base ingresos",N(n.modelo_130.base_ingresos))),e.append(Ft("Base gastos",N(n.modelo_130.base_gastos))),e.append(Ft("Rendimiento neto",N(n.modelo_130.rendimiento))),e.append(Ft("Pago fraccionado (20%)",N(n.modelo_130.cuota),"neg")),e.append(o("div.section-label",{style:qo()},"Detalle")),e.append(Ft(`Facturas emitidas (${n.facturas.cantidad})`,`base ${N(n.facturas.base)} · IVA ${N(n.facturas.iva_repercutido)}`)),e.append(Ft(`Gastos deducibles (${n.gastos.cantidad})`,`base ${N(n.gastos.base)} · IVA ${N(n.gastos.iva_soportado)}`)),n.gastos.nota&&e.append(o("div.small.muted",{style:"margin-top:4px;"},n.gastos.nota)),e}function TI(n){const e=o("div.card");e.append(o("div.card-head",{},o("h3",{},"Facturas emitidas del trimestre")));const{desde:t,hasta:r}=kE(`${nt.anio}-${String((nt.trim-1)*3+1).padStart(2,"0")}-01`),i=n.filter(s=>s.fecha>=t&&s.fecha<=r).sort((s,a)=>(a.fecha||"").localeCompare(s.fecha||""));if(!i.length)return e.append(o("div.card-empty",{},"Sin facturas este trimestre")),e;for(const s of i)e.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},[s.concepto||"(sin concepto)",s.numeroFactura?o("span.chip",{style:"margin-left:6px;"},s.numeroFactura):null]),o("div.row-sub",{},`${s.fecha} · ${s.cliente||"s/cliente"} · base ${N(s.baseImponible)} + ${Ie(s.tipoIVA||21,0)}% IVA`)]),o("div.row-right",{},[o("div.amount",{},N(s.total)),o("div",{style:"margin-top:4px;"},o("button.btn.btn-sm.btn-danger",{onclick:()=>CI(s.id)},"Borrar"))])]));return e}function AI(){re("Nueva factura emitida",n=>{const e=o("input",{value:"",placeholder:"Concepto"}),t=o("input",{value:"",placeholder:"Cliente"}),r=o("input",{value:"personal",placeholder:"proyectoId"}),i=o("input",{type:"number",step:"0.01",value:"",placeholder:"Base imponible €"}),s=o("input",{type:"number",step:"1",value:21,placeholder:"% IVA"}),a=o("input",{type:"date",value:X()}),l=o("input",{value:"",placeholder:"Nº factura"}),u=o("div.small.muted",{style:"margin-top:4px;"}),h=()=>{const m=parseFloat(i.value)||0,g=parseFloat(s.value)||21,_=parseFloat((m*g/100).toFixed(2));u.textContent=`IVA ${N(_)} · Total ${N(m+_)}`};[i,s].forEach(m=>m.addEventListener("input",h)),h();const f=async()=>{if(!e.value.trim()){D("Falta el concepto","err");return}const m=parseFloat(i.value)||0,g=parseFloat(s.value)||21,_=parseFloat((m*g/100).toFixed(2)),y={id:me(),concepto:e.value.trim(),cliente:t.value.trim(),proyectoId:r.value.trim()||"personal",baseImponible:m,tipoIVA:g,ivaRepercutido:_,total:parseFloat((m+_).toFixed(2)),fecha:a.value||X(),numeroFactura:l.value.trim()},I=(H("facturas_emitidas")||[]).slice();I.push(y);try{await Z("facturas_emitidas",I),D("Factura registrada","ok"),n()}catch{D("No se pudo guardar","err")}};return o("div",{},[$t("Concepto",e),o("div.field-grid",{},[$t("Cliente",t),$t("proyectoId",r)]),o("div.field-grid",{},[$t("Base imponible €",i),$t("% IVA",s)]),u,o("div.field-grid",{},[$t("Fecha",a),$t("Nº factura",l)]),o("div.btn-row",{},[o("button.btn",{onclick:n},"Cancelar"),o("button.btn.btn-primary",{onclick:f},"Registrar")])])})}async function CI(n){const e=(H("facturas_emitidas")||[]).filter(t=>t.id!==n);try{await Z("facturas_emitidas",e),D("Factura eliminada","ok")}catch{D("No se pudo guardar","err")}}function $t(n,e){return o("div.field",{},[o("label",{},n),e])}function qo(){return"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:12px 0 4px;"}function Ft(n,e,t){return o("div.row",{},[o("div.row-main",{},o("div.row-label",{},n)),o("div.row-right",{},o("div.amount"+(t?"."+t:""),{},e))])}const SI=[["patrimonio","Patrimonio"],["cobros","Cobros y pagos"],["gastos","Gastos"],["fiscal","Fiscal"]];let Kr="patrimonio";function RI(n,e={}){n.append(o("h1.section-title",{},"Finanzas"));const t=o("div.subtabs"),r=o("div");n.append(t),n.append(r);const i={capital:null,config:null,patrimonio_hist:null,cobrospagos:null,gastos:null,trabajadores:null,trabajos:null,facturas_emitidas:null,cargado:{}},s=()=>{_e(t);for(const[u,h]of SI)t.append(o("button.subtab"+(Kr===u?".active":""),{onclick:()=>{Kr=u,s()}},h));_e(r),Kr==="patrimonio"?PI(r,i):Kr==="cobros"?aI(r,i):Kr==="gastos"?mI(r,i):wI(r,i)},a=u=>Ye(u,h=>{i[u]=h,i.cargado[u]=!0,s()}),l=[a("capital"),a("config"),a("patrimonio_hist"),a("cobrospagos"),a("gastos"),a("trabajadores"),a("trabajos"),a("facturas_emitidas")];return s(),()=>l.forEach(u=>u())}function PI(n,e){if(!e.cargado.capital||!e.cargado.config){n.append(o("div.spinner"));return}const t=e.capital||{cuentas:{},historial:[]},r=t.cuentas||{},i=e.config||{},s=Ap(r);n.append(o("div.hero",{},[o("div.hero-label",{},"Patrimonio (sin impuestos)"),o("div.hero-value",{},N(s)),o("div.hero-sub",{},`${Object.keys(r).length} cuenta${Object.keys(r).length===1?"":"s"}`)]));const a=Object.keys(r);for(const[l,u]of Ec){const h=a.filter(g=>Cp(i,g)===l);if(!h.length&&l!==""||!h.length)continue;const f=h.reduce((g,_)=>g+(Number(r[_])||0),0),m=o("div.card");m.append(o("div.card-head",{},[o("h3",{},u),o("span.amount",{},N(f))]));for(const g of h)m.append(kI(g,r[g],s,i));n.append(m)}n.append(o("div.btn-row",{},[o("button.btn.btn-sm.btn-primary",{onclick:()=>VI()},"+ Cuenta")])),n.append(OI(e,r)),n.append(LI(r,i)),n.append(Jp(t))}function kI(n,e,t,r){const i=n===bc,s=t>0&&!i?(Number(e)||0)/t*100:null,a=o("select",{style:"font-size:9px;padding:2px 4px;background:var(--s2);border:1px solid var(--border);border-radius:5px;color:var(--text2);"},Ec.map(([l,u])=>o("option",{value:l},u)));return a.value=Cp(r,n),a.addEventListener("change",()=>NI(n,a.value)),o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},[n,i?o("span.chip",{style:"margin-left:6px;"},"fuera del total"):null]),o("div.row-sub",{},a)]),o("div.row-right",{},[o("div.amount",{},N(e)),o("div.small.muted",{},s==null?"—":`${Ie(s,1)}%`),o("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;"},[o("button.btn.btn-sm",{onclick:()=>DI(n,e)},"Editar")])])])}async function NI(n,e){const t={...H("config")||{}};t.grupos_cuentas={...t.grupos_cuentas||{}},e?t.grupos_cuentas[n]=e:delete t.grupos_cuentas[n];try{await Z("config",t)}catch{D("No se pudo guardar el grupo","err")}}function DI(n,e){re(`Cuenta · ${n}`,t=>{const r=o("input",{value:n,placeholder:"Nombre de la cuenta"}),i=o("input",{type:"number",step:"0.01",value:e??0,placeholder:"Saldo €"}),s=async()=>{const a=r.value.trim();if(!a){D("Falta el nombre","err");return}const l=H("capital")||{cuentas:{}},u={...l.cuentas||{}},h=parseFloat(i.value)||0;if(a!==n){if(u[a]!=null){D("Ya existe una cuenta con ese nombre","err");return}delete u[n],u[a]=h}else u[n]=h;const f={capital:{...l,cuentas:u}};if(a!==n){const m={...H("config")||{}};let g=!1;m.grupos_cuentas&&m.grupos_cuentas[n]!=null&&(m.grupos_cuentas={...m.grupos_cuentas},m.grupos_cuentas[a]=m.grupos_cuentas[n],delete m.grupos_cuentas[n],g=!0),m.reparto_pcts&&m.reparto_pcts[n]!=null&&(m.reparto_pcts={...m.reparto_pcts},m.reparto_pcts[a]=m.reparto_pcts[n],delete m.reparto_pcts[n],g=!0),g&&(f.config=m)}try{await Z("capital",f.capital),f.config&&await Z("config",f.config),D("Cuenta guardada","ok"),t()}catch{D("No se pudo guardar","err")}};return o("div",{},[_n("Nombre",r),_n("Saldo €",i),o("div.small.muted",{},"El saldo se fija directamente (como actualizar_capital). No genera movimiento en el historial."),o("div.btn-row",{},[o("button.btn",{onclick:t},"Cancelar"),o("button.btn.btn-primary",{onclick:s},"Guardar")])])})}function VI(){re("Nueva cuenta",n=>{const e=o("input",{placeholder:"Nombre (p. ej. revolut)"}),t=o("input",{type:"number",step:"0.01",value:0,placeholder:"Saldo inicial €"}),r=o("select",{},Ec.map(([s,a])=>o("option",{value:s},a))),i=async()=>{const s=e.value.trim();if(!s){D("Falta el nombre","err");return}const a=H("capital")||{cuentas:{}},l={...a.cuentas||{}};if(l[s]!=null){D("Ya existe esa cuenta","err");return}l[s]=parseFloat(t.value)||0;try{if(await Z("capital",{...a,cuentas:l}),r.value){const u={...H("config")||{}};u.grupos_cuentas={...u.grupos_cuentas||{},[s]:r.value},await Z("config",u)}D("Cuenta creada","ok"),n()}catch{D("No se pudo guardar","err")}};return o("div",{},[_n("Nombre",e),o("div.field-grid",{},[_n("Saldo inicial",t),_n("Grupo",r)]),o("div.btn-row",{},[o("button.btn",{onclick:n},"Cancelar"),o("button.btn.btn-primary",{onclick:i},"Crear")])])})}function OI(n,e){const t=o("div.card"),r=(n.patrimonio_hist||[]).slice().sort((h,f)=>(h.mes||"").localeCompare(f.mes||""));if(t.append(o("div.card-head",{},[o("h3",{},"Histórico"),o("button.link",{onclick:()=>xI(e)},"Cerrar mes")])),!r.length)return t.append(o("div.card-empty",{},'Sin snapshots. "Cerrar mes" guarda los saldos actuales.')),t;t.append(MI(r));const i=[];for(const h of r)for(const f of Object.keys(h.saldos||{}))i.includes(f)||i.push(f);const s=o("div",{style:"overflow-x:auto;margin-top:10px;"}),a=o("table.ftable"),l=o("tr",{},[o("th",{},"Mes"),...i.map(h=>o("th",{},h)),o("th",{},"Total")]);a.append(o("thead",{},l));const u=o("tbody");for(const h of[...r].reverse())u.append(o("tr",{},[o("td",{},h.mes),...i.map(f=>o("td",{style:"text-align:right;"},h.saldos&&h.saldos[f]!=null?N(h.saldos[f]):"·")),o("td",{style:"text-align:right;font-weight:500;"},N(h.total))]));return a.append(u),s.append(a),t.append(s),t}function MI(n){const i=n.map(y=>Number(y.total)||0),s=Math.min(...i),l=Math.max(...i)-s||1,u=i.length,h=y=>u===1?320/2:6+y*(320-2*6)/(u-1),f=y=>84-(y-s)/l*(90-2*6),m=i.map((y,I)=>`${h(I).toFixed(1)},${f(y).toFixed(1)}`).join(" "),g=document.createElementNS("http://www.w3.org/2000/svg","svg");g.setAttribute("viewBox","0 0 320 90"),g.setAttribute("width","100%"),g.setAttribute("height",90),g.setAttribute("preserveAspectRatio","none"),g.style.display="block";const _=document.createElementNS(g.namespaceURI,"polyline");_.setAttribute("points",m),_.setAttribute("fill","none"),_.setAttribute("stroke","var(--gold)"),_.setAttribute("stroke-width","1.5"),g.append(_);for(let y=0;y<u;y++){const I=document.createElementNS(g.namespaceURI,"circle");I.setAttribute("cx",h(y)),I.setAttribute("cy",f(i[y])),I.setAttribute("r","2"),I.setAttribute("fill","var(--gold2)"),g.append(I)}return g}async function xI(n){const e=SE(),t=(H("patrimonio_hist")||[]).slice(),r=t.findIndex(s=>s.mes===e),i=async()=>{const s={mes:e,saldos:{...n},total:Ap(n)};r>=0?t[r]=s:t.push(s),t.sort((a,l)=>(a.mes||"").localeCompare(l.mes||""));try{await Z("patrimonio_hist",t),D(`Snapshot de ${e} guardado`,"ok")}catch{D("No se pudo guardar","err")}};r>=0?re("Cerrar mes",s=>o("div",{},[o("div.small.muted",{},`Ya existe un snapshot de ${e}. ¿Sobrescribir con los saldos actuales?`),o("div.btn-row",{},[o("button.btn",{onclick:s},"Cancelar"),o("button.btn.btn-primary",{onclick:()=>{i(),s()}},"Sobrescribir")])])):i()}function LI(n,e){const t=o("div.card");t.append(o("div.card-head",{},o("h3",{},"Reparto")));const r=Object.keys(n).filter(m=>m!==bc),i={...e.reparto_pcts||{}},s=o("input",{type:"number",step:"0.01",placeholder:"Importe a repartir €"}),a={},l=o("div"),u=o("div.small",{style:"margin-top:6px;"}),h=()=>{const m=parseFloat(s.value)||0;let g=0;for(const y of r){const I=parseFloat(a[y].pct.value)||0;g+=I,a[y].out.textContent=N(m*I/100)}const _=Math.round(g*100)/100;u.textContent=`Suma de %: ${Ie(_,1)}%`+(_===100?" ✓":" — ⚠ no suman 100"),u.style.color=_===100?"var(--green)":"var(--red)"};for(const m of r){const g=o("input",{type:"number",step:"0.5",value:i[m]??"",placeholder:"%",style:"max-width:70px;"}),_=o("div.amount",{},N(0));g.addEventListener("input",h),a[m]={pct:g,out:_},l.append(o("div.row",{},[o("div.row-main",{},o("div.row-label",{},m)),o("div.row-right",{style:"display:flex;gap:8px;align-items:center;"},[g,_])]))}const f=async()=>{const m={...H("config")||{}};m.reparto_pcts={};for(const g of r){const _=parseFloat(a[g].pct.value)||0;_&&(m.reparto_pcts[g]=_)}try{await Z("config",m),D("Porcentajes guardados","ok")}catch{D("No se pudo guardar","err")}};return t.append(_n("Importe a repartir",s)),s.addEventListener("input",h),t.append(l),t.append(u),t.append(o("div.btn-row",{},[o("button.btn.btn-sm",{onclick:f},"Guardar %")])),h(),t}const an={cuenta:"",tipo:""};function Jp(n){const e=o("div.card");e.append(o("div.card-head",{},o("h3",{},"Movimientos de capital")));const t=n.historial||[],r=[...new Set(t.map(h=>h.cuenta).filter(Boolean))],i=[...new Set(t.map(h=>h.tipo).filter(Boolean))],s=o("select",{},[o("option",{value:""},"Todas"),...r.map(h=>o("option",{value:h},h))]);s.value=an.cuenta;const a=o("select",{},[o("option",{value:""},"Todos"),...i.map(h=>o("option",{value:h},h))]);a.value=an.tipo;const l=()=>{an.cuenta=s.value,an.tipo=a.value;const h=Jp(n);e.replaceWith(h)};s.addEventListener("change",l),a.addEventListener("change",l),e.append(o("div.field-grid",{},[_n("Cuenta",s),_n("Tipo",a)]));let u=t.filter(h=>(!an.cuenta||h.cuenta===an.cuenta)&&(!an.tipo||h.tipo===an.tipo));if(u=u.slice().sort((h,f)=>(f.fechaISO||"").localeCompare(h.fechaISO||"")).slice(0,50),!u.length)return e.append(o("div.card-empty",{},"Sin movimientos")),e;for(const h of u){const f=Number(h.importe)||0;e.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},h.concepto||h.tipo),o("div.row-sub",{},`${h.fechaISO||"—"} · ${h.cuenta||""} · ${h.tipo||""}`)]),o("div.row-right",{},o("div.amount"+(f>=0?".pos":".neg"),{},N(f)))]))}return e}function _n(n,e){return o("div.field",{},[o("label",{},n),e])}const zo=[{id:"hoy",label:"Hoy",icono:"◒",render:ME},{id:"trabajos",label:"Trabajos",icono:"▤",render:aw},{id:"clientes",label:"Clientes",icono:"☺",render:eI},{id:"equipo",label:"Equipo",icono:"⚒",render:JE},{id:"finanzas",label:"Finanzas",icono:"€",render:RI}];let Ia="hoy",ts=null;function Ta(n){if(typeof ts=="function"){try{ts()}catch{}ts=null}Ia=n;const e=zo.find(r=>r.id===n)||zo[0];bE(zo,Ia,Ta);const t=document.getElementById("appMain");_e(t),ts=e.render(t,{nav:Ta})}function so(n,e=!1){const t=document.getElementById("loginEstado");t&&(t.textContent=n||"",t.style.color=e?"var(--red)":"var(--text2)")}_E();document.getElementById("btnTema").addEventListener("click",yE);document.getElementById("btnLogin").addEventListener("click",()=>pE(so));document.getElementById("btnLogout").addEventListener("click",()=>mE());so("Comprobando sesión…");fE(so);hE(n=>{const e=document.getElementById("loginScreen"),t=document.getElementById("appScreen");n?(xu(n.uid),so(""),e.hidden=!0,t.hidden=!1,document.getElementById("userAvatar").src=n.photoURL||"",document.getElementById("userName").textContent=(n.displayName||"").split(" ")[0]||"Rubén",Ta(Ia)):(xu(null),t.hidden=!0,e.hidden=!1)});
