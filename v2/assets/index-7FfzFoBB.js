(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var Nc={};/**
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
 */const nu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},vp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},ru={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let v=(l&15)<<2|d>>6,E=d&63;u||(E=64,a||(v=64)),r.push(t[f],t[g],t[v],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(nu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):vp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const g=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||d==null||g==null)throw new _p;const v=s<<2|l>>4;if(r.push(v),d!==64){const E=l<<4&240|d>>2;if(r.push(E),g!==64){const T=d<<6&192|g;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _p extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yp=function(n){const e=nu(n);return ru.encodeByteArray(e,!0)},Ei=function(n){return yp(n).replace(/\./g,"")},iu=function(n){try{return ru.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ep=()=>bp().__FIREBASE_DEFAULTS__,Ip=()=>{if(typeof process>"u"||typeof Nc>"u")return;const n=Nc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Tp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&iu(n[1]);return e&&JSON.parse(e)},Ui=()=>{try{return Ep()||Ip()||Tp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},su=n=>{var e,t;return(t=(e=Ui())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},wp=n=>{const e=su(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ou=()=>{var n;return(n=Ui())===null||n===void 0?void 0:n.config},au=n=>{var e;return(e=Ui())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Ap{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Rp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ei(JSON.stringify(t)),Ei(JSON.stringify(a)),""].join(".")}/**
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
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function Pp(){var n;const e=(n=Ui())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Cp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Np(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dp(){const n=Le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Vp(){return!Pp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Op(){try{return typeof indexedDB=="object"}catch{return!1}}function Mp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const xp="FirebaseError";class wt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=xp,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cr.prototype.create)}}class Cr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Lp(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new wt(i,l,r)}}function Lp(n,e){return n.replace(Fp,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Fp=/\{\$([^}]+)}/g;function Up(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ii(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Dc(s)&&Dc(a)){if(!Ii(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Dc(n){return n!==null&&typeof n=="object"}/**
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
 */function kr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jp(n,e){const t=new $p(n,e);return t.subscribe.bind(t)}class $p{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Bp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Vs),i.error===void 0&&(i.error=Vs),i.complete===void 0&&(i.complete=Vs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Vs(){}/**
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
 */function Ee(n){return n&&n._delegate?n._delegate:n}class an{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jt="[DEFAULT]";/**
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
 */class qp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ap;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hp(e))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jt){return this.instances.has(e)}getOptions(e=Jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jt){return this.component?this.component.multipleInstances?e:Jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zp(n){return n===Jt?void 0:n}function Hp(n){return n.instantiationMode==="EAGER"}/**
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
 */class Gp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const Wp={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Kp=X.INFO,Qp={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Yp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Qp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ko{constructor(e){this.name=e,this._logLevel=Kp,this._logHandler=Yp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Jp=(n,e)=>e.some(t=>n instanceof t);let Vc,Oc;function Xp(){return Vc||(Vc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zp(){return Oc||(Oc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cu=new WeakMap,Xs=new WeakMap,lu=new WeakMap,Os=new WeakMap,No=new WeakMap;function ef(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Lt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&cu.set(t,n)}).catch(()=>{}),No.set(e,n),e}function tf(n){if(Xs.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Xs.set(n,e)}let Zs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||lu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Lt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function nf(n){Zs=n(Zs)}function rf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ms(this),e,...t);return lu.set(r,e.sort?e.sort():[e]),Lt(r)}:Zp().includes(n)?function(...e){return n.apply(Ms(this),e),Lt(cu.get(this))}:function(...e){return Lt(n.apply(Ms(this),e))}}function sf(n){return typeof n=="function"?rf(n):(n instanceof IDBTransaction&&tf(n),Jp(n,Xp())?new Proxy(n,Zs):n)}function Lt(n){if(n instanceof IDBRequest)return ef(n);if(Os.has(n))return Os.get(n);const e=sf(n);return e!==n&&(Os.set(n,e),No.set(e,n)),e}const Ms=n=>No.get(n);function of(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=Lt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Lt(a.result),u.oldVersion,u.newVersion,Lt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const af=["get","getKey","getAll","getAllKeys","count"],cf=["put","add","delete","clear"],xs=new Map;function Mc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(xs.get(e))return xs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=cf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||af.includes(t)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&u.done]))[0]};return xs.set(e,s),s}nf(n=>({...n,get:(e,t,r)=>Mc(e,t)||n.get(e,t,r),has:(e,t)=>!!Mc(e,t)||n.has(e,t)}));/**
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
 */class lf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(uf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function uf(n){const e=n.getComponent();return e?.type==="VERSION"}const eo="@firebase/app",xc="0.10.13";/**
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
 */const yt=new ko("@firebase/app"),hf="@firebase/app-compat",df="@firebase/analytics-compat",pf="@firebase/analytics",ff="@firebase/app-check-compat",mf="@firebase/app-check",gf="@firebase/auth",vf="@firebase/auth-compat",_f="@firebase/database",yf="@firebase/data-connect",bf="@firebase/database-compat",Ef="@firebase/functions",If="@firebase/functions-compat",Tf="@firebase/installations",wf="@firebase/installations-compat",Af="@firebase/messaging",Rf="@firebase/messaging-compat",Sf="@firebase/performance",Pf="@firebase/performance-compat",Cf="@firebase/remote-config",kf="@firebase/remote-config-compat",Nf="@firebase/storage",Df="@firebase/storage-compat",Vf="@firebase/firestore",Of="@firebase/vertexai-preview",Mf="@firebase/firestore-compat",xf="firebase",Lf="10.14.1";/**
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
 */const to="[DEFAULT]",Ff={[eo]:"fire-core",[hf]:"fire-core-compat",[pf]:"fire-analytics",[df]:"fire-analytics-compat",[mf]:"fire-app-check",[ff]:"fire-app-check-compat",[gf]:"fire-auth",[vf]:"fire-auth-compat",[_f]:"fire-rtdb",[yf]:"fire-data-connect",[bf]:"fire-rtdb-compat",[Ef]:"fire-fn",[If]:"fire-fn-compat",[Tf]:"fire-iid",[wf]:"fire-iid-compat",[Af]:"fire-fcm",[Rf]:"fire-fcm-compat",[Sf]:"fire-perf",[Pf]:"fire-perf-compat",[Cf]:"fire-rc",[kf]:"fire-rc-compat",[Nf]:"fire-gcs",[Df]:"fire-gcs-compat",[Vf]:"fire-fst",[Mf]:"fire-fst-compat",[Of]:"fire-vertex","fire-js":"fire-js",[xf]:"fire-js-all"};/**
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
 */const Ti=new Map,Uf=new Map,no=new Map;function Lc(n,e){try{n.container.addComponent(e)}catch(t){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Pn(n){const e=n.name;if(no.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;no.set(e,n);for(const t of Ti.values())Lc(t,n);for(const t of Uf.values())Lc(t,n);return!0}function Do(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function tt(n){return n.settings!==void 0}/**
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
 */const jf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new Cr("app","Firebase",jf);/**
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
 */class $f{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const Un=Lf;function uu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:to,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(t||(t=ou()),!t)throw Ft.create("no-options");const s=Ti.get(i);if(s){if(Ii(t,s.options)&&Ii(r,s.config))return s;throw Ft.create("duplicate-app",{appName:i})}const a=new Gp(i);for(const u of no.values())a.addComponent(u);const l=new $f(t,r,a);return Ti.set(i,l),l}function hu(n=to){const e=Ti.get(n);if(!e&&n===to&&ou())return uu();if(!e)throw Ft.create("no-app",{appName:n});return e}function Ut(n,e,t){var r;let i=(r=Ff[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(l.join(" "));return}Pn(new an(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Bf="firebase-heartbeat-database",qf=1,_r="firebase-heartbeat-store";let Ls=null;function du(){return Ls||(Ls=of(Bf,qf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(_r)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ft.create("idb-open",{originalErrorMessage:n.message})})),Ls}async function zf(n){try{const t=(await du()).transaction(_r),r=await t.objectStore(_r).get(pu(n));return await t.done,r}catch(e){if(e instanceof wt)yt.warn(e.message);else{const t=Ft.create("idb-get",{originalErrorMessage:e?.message});yt.warn(t.message)}}}async function Fc(n,e){try{const r=(await du()).transaction(_r,"readwrite");await r.objectStore(_r).put(e,pu(n)),await r.done}catch(t){if(t instanceof wt)yt.warn(t.message);else{const r=Ft.create("idb-set",{originalErrorMessage:t?.message});yt.warn(r.message)}}}function pu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Hf=1024,Gf=30*24*60*60*1e3;class Wf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Qf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Uc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Gf}),this._storage.overwrite(this._heartbeatsCache))}catch(r){yt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Uc(),{heartbeatsToSend:r,unsentEntries:i}=Kf(this._heartbeatsCache.heartbeats),s=Ei(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return yt.warn(t),""}}}function Uc(){return new Date().toISOString().substring(0,10)}function Kf(n,e=Hf){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),jc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),jc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Qf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Op()?Mp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zf(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jc(n){return Ei(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Yf(n){Pn(new an("platform-logger",e=>new lf(e),"PRIVATE")),Pn(new an("heartbeat",e=>new Wf(e),"PRIVATE")),Ut(eo,xc,n),Ut(eo,xc,"esm2017"),Ut("fire-js","")}Yf("");var Jf="firebase",Xf="10.14.1";/**
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
 */Ut(Jf,Xf,"app");var $c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var en,fu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function b(){}b.prototype=y.prototype,w.D=y.prototype,w.prototype=new b,w.prototype.constructor=w,w.C=function(I,A,R){for(var _=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)_[ae-2]=arguments[ae];return y.prototype[A].apply(I,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,b){b||(b=0);var I=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)I[A]=y.charCodeAt(b++)|y.charCodeAt(b++)<<8|y.charCodeAt(b++)<<16|y.charCodeAt(b++)<<24;else for(A=0;16>A;++A)I[A]=y[b++]|y[b++]<<8|y[b++]<<16|y[b++]<<24;y=w.g[0],b=w.g[1],A=w.g[2];var R=w.g[3],_=y+(R^b&(A^R))+I[0]+3614090360&4294967295;y=b+(_<<7&4294967295|_>>>25),_=R+(A^y&(b^A))+I[1]+3905402710&4294967295,R=y+(_<<12&4294967295|_>>>20),_=A+(b^R&(y^b))+I[2]+606105819&4294967295,A=R+(_<<17&4294967295|_>>>15),_=b+(y^A&(R^y))+I[3]+3250441966&4294967295,b=A+(_<<22&4294967295|_>>>10),_=y+(R^b&(A^R))+I[4]+4118548399&4294967295,y=b+(_<<7&4294967295|_>>>25),_=R+(A^y&(b^A))+I[5]+1200080426&4294967295,R=y+(_<<12&4294967295|_>>>20),_=A+(b^R&(y^b))+I[6]+2821735955&4294967295,A=R+(_<<17&4294967295|_>>>15),_=b+(y^A&(R^y))+I[7]+4249261313&4294967295,b=A+(_<<22&4294967295|_>>>10),_=y+(R^b&(A^R))+I[8]+1770035416&4294967295,y=b+(_<<7&4294967295|_>>>25),_=R+(A^y&(b^A))+I[9]+2336552879&4294967295,R=y+(_<<12&4294967295|_>>>20),_=A+(b^R&(y^b))+I[10]+4294925233&4294967295,A=R+(_<<17&4294967295|_>>>15),_=b+(y^A&(R^y))+I[11]+2304563134&4294967295,b=A+(_<<22&4294967295|_>>>10),_=y+(R^b&(A^R))+I[12]+1804603682&4294967295,y=b+(_<<7&4294967295|_>>>25),_=R+(A^y&(b^A))+I[13]+4254626195&4294967295,R=y+(_<<12&4294967295|_>>>20),_=A+(b^R&(y^b))+I[14]+2792965006&4294967295,A=R+(_<<17&4294967295|_>>>15),_=b+(y^A&(R^y))+I[15]+1236535329&4294967295,b=A+(_<<22&4294967295|_>>>10),_=y+(A^R&(b^A))+I[1]+4129170786&4294967295,y=b+(_<<5&4294967295|_>>>27),_=R+(b^A&(y^b))+I[6]+3225465664&4294967295,R=y+(_<<9&4294967295|_>>>23),_=A+(y^b&(R^y))+I[11]+643717713&4294967295,A=R+(_<<14&4294967295|_>>>18),_=b+(R^y&(A^R))+I[0]+3921069994&4294967295,b=A+(_<<20&4294967295|_>>>12),_=y+(A^R&(b^A))+I[5]+3593408605&4294967295,y=b+(_<<5&4294967295|_>>>27),_=R+(b^A&(y^b))+I[10]+38016083&4294967295,R=y+(_<<9&4294967295|_>>>23),_=A+(y^b&(R^y))+I[15]+3634488961&4294967295,A=R+(_<<14&4294967295|_>>>18),_=b+(R^y&(A^R))+I[4]+3889429448&4294967295,b=A+(_<<20&4294967295|_>>>12),_=y+(A^R&(b^A))+I[9]+568446438&4294967295,y=b+(_<<5&4294967295|_>>>27),_=R+(b^A&(y^b))+I[14]+3275163606&4294967295,R=y+(_<<9&4294967295|_>>>23),_=A+(y^b&(R^y))+I[3]+4107603335&4294967295,A=R+(_<<14&4294967295|_>>>18),_=b+(R^y&(A^R))+I[8]+1163531501&4294967295,b=A+(_<<20&4294967295|_>>>12),_=y+(A^R&(b^A))+I[13]+2850285829&4294967295,y=b+(_<<5&4294967295|_>>>27),_=R+(b^A&(y^b))+I[2]+4243563512&4294967295,R=y+(_<<9&4294967295|_>>>23),_=A+(y^b&(R^y))+I[7]+1735328473&4294967295,A=R+(_<<14&4294967295|_>>>18),_=b+(R^y&(A^R))+I[12]+2368359562&4294967295,b=A+(_<<20&4294967295|_>>>12),_=y+(b^A^R)+I[5]+4294588738&4294967295,y=b+(_<<4&4294967295|_>>>28),_=R+(y^b^A)+I[8]+2272392833&4294967295,R=y+(_<<11&4294967295|_>>>21),_=A+(R^y^b)+I[11]+1839030562&4294967295,A=R+(_<<16&4294967295|_>>>16),_=b+(A^R^y)+I[14]+4259657740&4294967295,b=A+(_<<23&4294967295|_>>>9),_=y+(b^A^R)+I[1]+2763975236&4294967295,y=b+(_<<4&4294967295|_>>>28),_=R+(y^b^A)+I[4]+1272893353&4294967295,R=y+(_<<11&4294967295|_>>>21),_=A+(R^y^b)+I[7]+4139469664&4294967295,A=R+(_<<16&4294967295|_>>>16),_=b+(A^R^y)+I[10]+3200236656&4294967295,b=A+(_<<23&4294967295|_>>>9),_=y+(b^A^R)+I[13]+681279174&4294967295,y=b+(_<<4&4294967295|_>>>28),_=R+(y^b^A)+I[0]+3936430074&4294967295,R=y+(_<<11&4294967295|_>>>21),_=A+(R^y^b)+I[3]+3572445317&4294967295,A=R+(_<<16&4294967295|_>>>16),_=b+(A^R^y)+I[6]+76029189&4294967295,b=A+(_<<23&4294967295|_>>>9),_=y+(b^A^R)+I[9]+3654602809&4294967295,y=b+(_<<4&4294967295|_>>>28),_=R+(y^b^A)+I[12]+3873151461&4294967295,R=y+(_<<11&4294967295|_>>>21),_=A+(R^y^b)+I[15]+530742520&4294967295,A=R+(_<<16&4294967295|_>>>16),_=b+(A^R^y)+I[2]+3299628645&4294967295,b=A+(_<<23&4294967295|_>>>9),_=y+(A^(b|~R))+I[0]+4096336452&4294967295,y=b+(_<<6&4294967295|_>>>26),_=R+(b^(y|~A))+I[7]+1126891415&4294967295,R=y+(_<<10&4294967295|_>>>22),_=A+(y^(R|~b))+I[14]+2878612391&4294967295,A=R+(_<<15&4294967295|_>>>17),_=b+(R^(A|~y))+I[5]+4237533241&4294967295,b=A+(_<<21&4294967295|_>>>11),_=y+(A^(b|~R))+I[12]+1700485571&4294967295,y=b+(_<<6&4294967295|_>>>26),_=R+(b^(y|~A))+I[3]+2399980690&4294967295,R=y+(_<<10&4294967295|_>>>22),_=A+(y^(R|~b))+I[10]+4293915773&4294967295,A=R+(_<<15&4294967295|_>>>17),_=b+(R^(A|~y))+I[1]+2240044497&4294967295,b=A+(_<<21&4294967295|_>>>11),_=y+(A^(b|~R))+I[8]+1873313359&4294967295,y=b+(_<<6&4294967295|_>>>26),_=R+(b^(y|~A))+I[15]+4264355552&4294967295,R=y+(_<<10&4294967295|_>>>22),_=A+(y^(R|~b))+I[6]+2734768916&4294967295,A=R+(_<<15&4294967295|_>>>17),_=b+(R^(A|~y))+I[13]+1309151649&4294967295,b=A+(_<<21&4294967295|_>>>11),_=y+(A^(b|~R))+I[4]+4149444226&4294967295,y=b+(_<<6&4294967295|_>>>26),_=R+(b^(y|~A))+I[11]+3174756917&4294967295,R=y+(_<<10&4294967295|_>>>22),_=A+(y^(R|~b))+I[2]+718787259&4294967295,A=R+(_<<15&4294967295|_>>>17),_=b+(R^(A|~y))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(A+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var b=y-this.blockSize,I=this.B,A=this.h,R=0;R<y;){if(A==0)for(;R<=b;)i(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<y;)if(I[A++]=w.charCodeAt(R++),A==this.blockSize){i(this,I),A=0;break}}else for(;R<y;)if(I[A++]=w[R++],A==this.blockSize){i(this,I),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var b=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=b&255,b/=256;for(this.u(w),w=Array(16),y=b=0;4>y;++y)for(var I=0;32>I;I+=8)w[b++]=this.g[y]>>>I&255;return w};function s(w,y){var b=l;return Object.prototype.hasOwnProperty.call(b,w)?b[w]:b[w]=y(w)}function a(w,y){this.h=y;for(var b=[],I=!0,A=w.length-1;0<=A;A--){var R=w[A]|0;I&&R==y||(b[A]=R,I=!1)}this.g=b}var l={};function u(w){return-128<=w&&128>w?s(w,function(y){return new a([y|0],0>y?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return k(d(-w));for(var y=[],b=1,I=0;w>=b;I++)y[I]=w/b|0,b*=4294967296;return new a(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return k(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=d(Math.pow(y,8)),I=g,A=0;A<w.length;A+=8){var R=Math.min(8,w.length-A),_=parseInt(w.substring(A,A+R),y);8>R?(R=d(Math.pow(y,R)),I=I.j(R).add(d(_))):(I=I.j(b),I=I.add(d(_)))}return I}var g=u(0),v=u(1),E=u(16777216);n=a.prototype,n.m=function(){if(P(this))return-k(this).m();for(var w=0,y=1,b=0;b<this.g.length;b++){var I=this.i(b);w+=(0<=I?I:4294967296+I)*y,y*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(T(this))return"0";if(P(this))return"-"+k(this).toString(w);for(var y=d(Math.pow(w,6)),b=this,I="";;){var A=$(b,y).g;b=L(b,A.j(y));var R=((0<b.g.length?b.g[0]:b.h)>>>0).toString(w);if(b=A,T(b))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function T(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function P(w){return w.h==-1}n.l=function(w){return w=L(this,w),P(w)?-1:T(w)?0:1};function k(w){for(var y=w.g.length,b=[],I=0;I<y;I++)b[I]=~w.g[I];return new a(b,~w.h).add(v)}n.abs=function(){return P(this)?k(this):this},n.add=function(w){for(var y=Math.max(this.g.length,w.g.length),b=[],I=0,A=0;A<=y;A++){var R=I+(this.i(A)&65535)+(w.i(A)&65535),_=(R>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);I=_>>>16,R&=65535,_&=65535,b[A]=_<<16|R}return new a(b,b[b.length-1]&-2147483648?-1:0)};function L(w,y){return w.add(k(y))}n.j=function(w){if(T(this)||T(w))return g;if(P(this))return P(w)?k(this).j(k(w)):k(k(this).j(w));if(P(w))return k(this.j(k(w)));if(0>this.l(E)&&0>w.l(E))return d(this.m()*w.m());for(var y=this.g.length+w.g.length,b=[],I=0;I<2*y;I++)b[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<w.g.length;A++){var R=this.i(I)>>>16,_=this.i(I)&65535,ae=w.i(A)>>>16,_e=w.i(A)&65535;b[2*I+2*A]+=_*_e,j(b,2*I+2*A),b[2*I+2*A+1]+=R*_e,j(b,2*I+2*A+1),b[2*I+2*A+1]+=_*ae,j(b,2*I+2*A+1),b[2*I+2*A+2]+=R*ae,j(b,2*I+2*A+2)}for(I=0;I<y;I++)b[I]=b[2*I+1]<<16|b[2*I];for(I=y;I<2*y;I++)b[I]=0;return new a(b,0)};function j(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function U(w,y){this.g=w,this.h=y}function $(w,y){if(T(y))throw Error("division by zero");if(T(w))return new U(g,g);if(P(w))return y=$(k(w),y),new U(k(y.g),k(y.h));if(P(y))return y=$(w,k(y)),new U(k(y.g),y.h);if(30<w.g.length){if(P(w)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var b=v,I=y;0>=I.l(w);)b=Q(b),I=Q(I);var A=M(b,1),R=M(I,1);for(I=M(I,2),b=M(b,2);!T(I);){var _=R.add(I);0>=_.l(w)&&(A=A.add(b),R=_),I=M(I,1),b=M(b,1)}return y=L(w,A.j(y)),new U(A,y)}for(A=g;0<=w.l(y);){for(b=Math.max(1,Math.floor(w.m()/y.m())),I=Math.ceil(Math.log(b)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=d(b),_=R.j(y);P(_)||0<_.l(w);)b-=I,R=d(b),_=R.j(y);T(R)&&(R=v),A=A.add(R),w=L(w,_)}return new U(A,w)}n.A=function(w){return $(this,w).h},n.and=function(w){for(var y=Math.max(this.g.length,w.g.length),b=[],I=0;I<y;I++)b[I]=this.i(I)&w.i(I);return new a(b,this.h&w.h)},n.or=function(w){for(var y=Math.max(this.g.length,w.g.length),b=[],I=0;I<y;I++)b[I]=this.i(I)|w.i(I);return new a(b,this.h|w.h)},n.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),b=[],I=0;I<y;I++)b[I]=this.i(I)^w.i(I);return new a(b,this.h^w.h)};function Q(w){for(var y=w.g.length+1,b=[],I=0;I<y;I++)b[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(b,w.h)}function M(w,y){var b=y>>5;y%=32;for(var I=w.g.length-b,A=[],R=0;R<I;R++)A[R]=0<y?w.i(R+b)>>>y|w.i(R+b+1)<<32-y:w.i(R+b);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,en=a}).apply(typeof $c<"u"?$c:typeof self<"u"?self:typeof window<"u"?window:{});var oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mu,lr,gu,di,ro,vu,_u,yu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,p){return o==Array.prototype||o==Object.prototype||(o[h]=p.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof oi=="object"&&oi];for(var h=0;h<o.length;++h){var p=o[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function i(o,h){if(h)e:{var p=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var S=o[m];if(!(S in p))break e;p=p[S]}o=o[o.length-1],m=p[o],h=h(m),h!=m&&h!=null&&e(p,o,{configurable:!0,writable:!0,value:h})}}function s(o,h){o instanceof String&&(o+="");var p=0,m=!1,S={next:function(){if(!m&&p<o.length){var C=p++;return{value:h(C,o[C]),done:!1}}return m=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(o){return o||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var h=typeof o;return h=h!="object"?h:o?Array.isArray(o)?"array":h:"null",h=="array"||h=="object"&&typeof o.length=="number"}function d(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function f(o,h,p){return o.call.apply(o.bind,arguments)}function g(o,h,p){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,m),o.apply(h,S)}}return function(){return o.apply(h,arguments)}}function v(o,h,p){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,v.apply(null,arguments)}function E(o,h){var p=Array.prototype.slice.call(arguments,1);return function(){var m=p.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function T(o,h){function p(){}p.prototype=h.prototype,o.aa=h.prototype,o.prototype=new p,o.prototype.constructor=o,o.Qb=function(m,S,C){for(var x=Array(arguments.length-2),se=2;se<arguments.length;se++)x[se-2]=arguments[se];return h.prototype[S].apply(m,x)}}function P(o){const h=o.length;if(0<h){const p=Array(h);for(let m=0;m<h;m++)p[m]=o[m];return p}return[]}function k(o,h){for(let p=1;p<arguments.length;p++){const m=arguments[p];if(u(m)){const S=o.length||0,C=m.length||0;o.length=S+C;for(let x=0;x<C;x++)o[S+x]=m[x]}else o.push(m)}}class L{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function j(o){return/^[\s\xa0]*$/.test(o)}function U(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function $(o){return $[" "](o),o}$[" "]=function(){};var Q=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function M(o,h,p){for(const m in o)h.call(p,o[m],m,o)}function w(o,h){for(const p in o)h.call(void 0,o[p],p,o)}function y(o){const h={};for(const p in o)h[p]=o[p];return h}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,h){let p,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(p in m)o[p]=m[p];for(let C=0;C<b.length;C++)p=b[C],Object.prototype.hasOwnProperty.call(m,p)&&(o[p]=m[p])}}function A(o){var h=1;o=o.split(":");const p=[];for(;0<h&&o.length;)p.push(o.shift()),h--;return o.length&&p.push(o.join(":")),p}function R(o){l.setTimeout(()=>{throw o},0)}function _(){var o=ls;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class ae{constructor(){this.h=this.g=null}add(h,p){const m=_e.get();m.set(h,p),this.h?this.h.next=m:this.g=m,this.h=m}}var _e=new L(()=>new Je,o=>o.reset());class Je{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Gt,Hn=!1,ls=new ae,Na=()=>{const o=l.Promise.resolve(void 0);Gt=()=>{o.then(Ld)}};var Ld=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(p){R(p)}var h=_e;h.j(o),100>h.h&&(h.h++,o.next=h.g,h.g=o)}Hn=!1};function At(){this.s=this.s,this.C=this.C}At.prototype.s=!1,At.prototype.ma=function(){this.s||(this.s=!0,this.N())},At.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var Fd=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return o}();function Gn(o,h){if(Se.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var p=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget){if(Q){e:{try{$(h.nodeName);var S=!0;break e}catch{}S=!1}S||(h=null)}}else p=="mouseover"?h=o.fromElement:p=="mouseout"&&(h=o.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ud[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Gn.aa.h.call(this)}}T(Gn,Se);var Ud={2:"touch",3:"pen",4:"mouse"};Gn.prototype.h=function(){Gn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var $r="closure_listenable_"+(1e6*Math.random()|0),jd=0;function $d(o,h,p,m,S){this.listener=o,this.proxy=null,this.src=h,this.type=p,this.capture=!!m,this.ha=S,this.key=++jd,this.da=this.fa=!1}function Br(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function qr(o){this.src=o,this.g={},this.h=0}qr.prototype.add=function(o,h,p,m,S){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var x=hs(o,h,m,S);return-1<x?(h=o[x],p||(h.fa=!1)):(h=new $d(h,this.src,C,!!m,S),h.fa=p,o.push(h)),h};function us(o,h){var p=h.type;if(p in o.g){var m=o.g[p],S=Array.prototype.indexOf.call(m,h,void 0),C;(C=0<=S)&&Array.prototype.splice.call(m,S,1),C&&(Br(h),o.g[p].length==0&&(delete o.g[p],o.h--))}}function hs(o,h,p,m){for(var S=0;S<o.length;++S){var C=o[S];if(!C.da&&C.listener==h&&C.capture==!!p&&C.ha==m)return S}return-1}var ds="closure_lm_"+(1e6*Math.random()|0),ps={};function Da(o,h,p,m,S){if(Array.isArray(h)){for(var C=0;C<h.length;C++)Da(o,h[C],p,m,S);return null}return p=Ma(p),o&&o[$r]?o.K(h,p,d(m)?!!m.capture:!1,S):Bd(o,h,p,!1,m,S)}function Bd(o,h,p,m,S,C){if(!h)throw Error("Invalid event type");var x=d(S)?!!S.capture:!!S,se=ms(o);if(se||(o[ds]=se=new qr(o)),p=se.add(h,p,m,x,C),p.proxy)return p;if(m=qd(),p.proxy=m,m.src=o,m.listener=p,o.addEventListener)Fd||(S=x),S===void 0&&(S=!1),o.addEventListener(h.toString(),m,S);else if(o.attachEvent)o.attachEvent(Oa(h.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return p}function qd(){function o(p){return h.call(o.src,o.listener,p)}const h=zd;return o}function Va(o,h,p,m,S){if(Array.isArray(h))for(var C=0;C<h.length;C++)Va(o,h[C],p,m,S);else m=d(m)?!!m.capture:!!m,p=Ma(p),o&&o[$r]?(o=o.i,h=String(h).toString(),h in o.g&&(C=o.g[h],p=hs(C,p,m,S),-1<p&&(Br(C[p]),Array.prototype.splice.call(C,p,1),C.length==0&&(delete o.g[h],o.h--)))):o&&(o=ms(o))&&(h=o.g[h.toString()],o=-1,h&&(o=hs(h,p,m,S)),(p=-1<o?h[o]:null)&&fs(p))}function fs(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[$r])us(h.i,o);else{var p=o.type,m=o.proxy;h.removeEventListener?h.removeEventListener(p,m,o.capture):h.detachEvent?h.detachEvent(Oa(p),m):h.addListener&&h.removeListener&&h.removeListener(m),(p=ms(h))?(us(p,o),p.h==0&&(p.src=null,h[ds]=null)):Br(o)}}}function Oa(o){return o in ps?ps[o]:ps[o]="on"+o}function zd(o,h){if(o.da)o=!0;else{h=new Gn(h,this);var p=o.listener,m=o.ha||o.src;o.fa&&fs(o),o=p.call(m,h)}return o}function ms(o){return o=o[ds],o instanceof qr?o:null}var gs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ma(o){return typeof o=="function"?o:(o[gs]||(o[gs]=function(h){return o.handleEvent(h)}),o[gs])}function Pe(){At.call(this),this.i=new qr(this),this.M=this,this.F=null}T(Pe,At),Pe.prototype[$r]=!0,Pe.prototype.removeEventListener=function(o,h,p,m){Va(this,o,h,p,m)};function Fe(o,h){var p,m=o.F;if(m)for(p=[];m;m=m.F)p.push(m);if(o=o.M,m=h.type||h,typeof h=="string")h=new Se(h,o);else if(h instanceof Se)h.target=h.target||o;else{var S=h;h=new Se(m,o),I(h,S)}if(S=!0,p)for(var C=p.length-1;0<=C;C--){var x=h.g=p[C];S=zr(x,m,!0,h)&&S}if(x=h.g=o,S=zr(x,m,!0,h)&&S,S=zr(x,m,!1,h)&&S,p)for(C=0;C<p.length;C++)x=h.g=p[C],S=zr(x,m,!1,h)&&S}Pe.prototype.N=function(){if(Pe.aa.N.call(this),this.i){var o=this.i,h;for(h in o.g){for(var p=o.g[h],m=0;m<p.length;m++)Br(p[m]);delete o.g[h],o.h--}}this.F=null},Pe.prototype.K=function(o,h,p,m){return this.i.add(String(o),h,!1,p,m)},Pe.prototype.L=function(o,h,p,m){return this.i.add(String(o),h,!0,p,m)};function zr(o,h,p,m){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();for(var S=!0,C=0;C<h.length;++C){var x=h[C];if(x&&!x.da&&x.capture==p){var se=x.listener,Ie=x.ha||x.src;x.fa&&us(o.i,x),S=se.call(Ie,m)!==!1&&S}}return S&&!m.defaultPrevented}function xa(o,h,p){if(typeof o=="function")p&&(o=v(o,p));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(o,h||0)}function La(o){o.g=xa(()=>{o.g=null,o.i&&(o.i=!1,La(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class Hd extends At{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:La(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wn(o){At.call(this),this.h=o,this.g={}}T(Wn,At);var Fa=[];function Ua(o){M(o.g,function(h,p){this.g.hasOwnProperty(p)&&fs(h)},o),o.g={}}Wn.prototype.N=function(){Wn.aa.N.call(this),Ua(this)},Wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vs=l.JSON.stringify,Gd=l.JSON.parse,Wd=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function _s(){}_s.prototype.h=null;function ja(o){return o.h||(o.h=o.i())}function $a(){}var Kn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ys(){Se.call(this,"d")}T(ys,Se);function bs(){Se.call(this,"c")}T(bs,Se);var Wt={},Ba=null;function Hr(){return Ba=Ba||new Pe}Wt.La="serverreachability";function qa(o){Se.call(this,Wt.La,o)}T(qa,Se);function Qn(o){const h=Hr();Fe(h,new qa(h))}Wt.STAT_EVENT="statevent";function za(o,h){Se.call(this,Wt.STAT_EVENT,o),this.stat=h}T(za,Se);function Ue(o){const h=Hr();Fe(h,new za(h,o))}Wt.Ma="timingevent";function Ha(o,h){Se.call(this,Wt.Ma,o),this.size=h}T(Ha,Se);function Yn(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},h)}function Jn(){this.g=!0}Jn.prototype.xa=function(){this.g=!1};function Kd(o,h,p,m,S,C){o.info(function(){if(o.g)if(C)for(var x="",se=C.split("&"),Ie=0;Ie<se.length;Ie++){var ee=se[Ie].split("=");if(1<ee.length){var Ce=ee[0];ee=ee[1];var ke=Ce.split("_");x=2<=ke.length&&ke[1]=="type"?x+(Ce+"="+ee+"&"):x+(Ce+"=redacted&")}}else x=null;else x=C;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+h+`
`+p+`
`+x})}function Qd(o,h,p,m,S,C,x){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+h+`
`+p+`
`+C+" "+x})}function mn(o,h,p,m){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+Jd(o,p)+(m?" "+m:"")})}function Yd(o,h){o.info(function(){return"TIMEOUT: "+h})}Jn.prototype.info=function(){};function Jd(o,h){if(!o.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(o=0;o<p.length;o++)if(Array.isArray(p[o])){var m=p[o];if(!(2>m.length)){var S=m[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var x=1;x<S.length;x++)S[x]=""}}}}return vs(p)}catch{return h}}var Gr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ga={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Es;function Wr(){}T(Wr,_s),Wr.prototype.g=function(){return new XMLHttpRequest},Wr.prototype.i=function(){return{}},Es=new Wr;function Rt(o,h,p,m){this.j=o,this.i=h,this.l=p,this.R=m||1,this.U=new Wn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wa}function Wa(){this.i=null,this.g="",this.h=!1}var Ka={},Is={};function Ts(o,h,p){o.L=1,o.v=Jr(lt(h)),o.m=p,o.P=!0,Qa(o,null)}function Qa(o,h){o.F=Date.now(),Kr(o),o.A=lt(o.v);var p=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),lc(p.i,"t",m),o.C=0,p=o.j.J,o.h=new Wa,o.g=Sc(o.j,p?h:null,!o.m),0<o.O&&(o.M=new Hd(v(o.Y,o,o.g),o.O)),h=o.U,p=o.g,m=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Fa[0]=S.toString()),S=Fa);for(var C=0;C<S.length;C++){var x=Da(p,S[C],m||h.handleEvent,!1,h.h||h);if(!x)break;h.g[x.key]=x}h=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,h)):(o.u="GET",o.g.ea(o.A,o.u,null,h)),Qn(),Kd(o.i,o.u,o.A,o.l,o.R,o.m)}Rt.prototype.ca=function(o){o=o.target;const h=this.M;h&&ut(o)==3?h.j():this.Y(o)},Rt.prototype.Y=function(o){try{if(o==this.g)e:{const ke=ut(this.g);var h=this.g.Ba();const _n=this.g.Z();if(!(3>ke)&&(ke!=3||this.g&&(this.h.h||this.g.oa()||gc(this.g)))){this.J||ke!=4||h==7||(h==8||0>=_n?Qn(3):Qn(2)),ws(this);var p=this.g.Z();this.X=p;t:if(Ya(this)){var m=gc(this.g);o="";var S=m.length,C=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),Xn(this);var x="";break t}this.h.i=new l.TextDecoder}for(h=0;h<S;h++)this.h.h=!0,o+=this.h.i.decode(m[h],{stream:!(C&&h==S-1)});m.length=0,this.h.g+=o,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=p==200,Qd(this.i,this.u,this.A,this.l,this.R,ke,p),this.o){if(this.T&&!this.K){t:{if(this.g){var se,Ie=this.g;if((se=Ie.g?Ie.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(se)){var ee=se;break t}}ee=null}if(p=ee)mn(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,As(this,p);else{this.o=!1,this.s=3,Ue(12),Kt(this),Xn(this);break e}}if(this.P){p=!0;let Xe;for(;!this.J&&this.C<x.length;)if(Xe=Xd(this,x),Xe==Is){ke==4&&(this.s=4,Ue(14),p=!1),mn(this.i,this.l,null,"[Incomplete Response]");break}else if(Xe==Ka){this.s=4,Ue(15),mn(this.i,this.l,x,"[Invalid Chunk]"),p=!1;break}else mn(this.i,this.l,Xe,null),As(this,Xe);if(Ya(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ke!=4||x.length!=0||this.h.h||(this.s=1,Ue(16),p=!1),this.o=this.o&&p,!p)mn(this.i,this.l,x,"[Invalid Chunked Response]"),Kt(this),Xn(this);else if(0<x.length&&!this.W){this.W=!0;var Ce=this.j;Ce.g==this&&Ce.ba&&!Ce.M&&(Ce.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),Ns(Ce),Ce.M=!0,Ue(11))}}else mn(this.i,this.l,x,null),As(this,x);ke==4&&Kt(this),this.o&&!this.J&&(ke==4?Tc(this.j,this):(this.o=!1,Kr(this)))}else mp(this.g),p==400&&0<x.indexOf("Unknown SID")?(this.s=3,Ue(12)):(this.s=0,Ue(13)),Kt(this),Xn(this)}}}catch{}finally{}};function Ya(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Xd(o,h){var p=o.C,m=h.indexOf(`
`,p);return m==-1?Is:(p=Number(h.substring(p,m)),isNaN(p)?Ka:(m+=1,m+p>h.length?Is:(h=h.slice(m,m+p),o.C=m+p,h)))}Rt.prototype.cancel=function(){this.J=!0,Kt(this)};function Kr(o){o.S=Date.now()+o.I,Ja(o,o.I)}function Ja(o,h){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Yn(v(o.ba,o),h)}function ws(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Rt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Yd(this.i,this.A),this.L!=2&&(Qn(),Ue(17)),Kt(this),this.s=2,Xn(this)):Ja(this,this.S-o)};function Xn(o){o.j.G==0||o.J||Tc(o.j,o)}function Kt(o){ws(o);var h=o.M;h&&typeof h.ma=="function"&&h.ma(),o.M=null,Ua(o.U),o.g&&(h=o.g,o.g=null,h.abort(),h.ma())}function As(o,h){try{var p=o.j;if(p.G!=0&&(p.g==o||Rs(p.h,o))){if(!o.K&&Rs(p.h,o)&&p.G==3){try{var m=p.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<o.F)ri(p),ti(p);else break e;ks(p),Ue(18)}}else p.za=S[1],0<p.za-p.T&&37500>S[2]&&p.F&&p.v==0&&!p.C&&(p.C=Yn(v(p.Za,p),6e3));if(1>=ec(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Yt(p,11)}else if((o.K||p.g==o)&&ri(p),!j(h))for(S=p.Da.g.parse(h),h=0;h<S.length;h++){let ee=S[h];if(p.T=ee[0],ee=ee[1],p.G==2)if(ee[0]=="c"){p.K=ee[1],p.ia=ee[2];const Ce=ee[3];Ce!=null&&(p.la=Ce,p.j.info("VER="+p.la));const ke=ee[4];ke!=null&&(p.Aa=ke,p.j.info("SVER="+p.Aa));const _n=ee[5];_n!=null&&typeof _n=="number"&&0<_n&&(m=1.5*_n,p.L=m,p.j.info("backChannelRequestTimeoutMs_="+m)),m=p;const Xe=o.g;if(Xe){const si=Xe.g?Xe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(si){var C=m.h;C.g||si.indexOf("spdy")==-1&&si.indexOf("quic")==-1&&si.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Ss(C,C.h),C.h=null))}if(m.D){const Ds=Xe.g?Xe.g.getResponseHeader("X-HTTP-Session-Id"):null;Ds&&(m.ya=Ds,ce(m.I,m.D,Ds))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-o.F,p.j.info("Handshake RTT: "+p.R+"ms")),m=p;var x=o;if(m.qa=Rc(m,m.J?m.ia:null,m.W),x.K){tc(m.h,x);var se=x,Ie=m.L;Ie&&(se.I=Ie),se.B&&(ws(se),Kr(se)),m.g=x}else Ec(m);0<p.i.length&&ni(p)}else ee[0]!="stop"&&ee[0]!="close"||Yt(p,7);else p.G==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?Yt(p,7):Cs(p):ee[0]!="noop"&&p.l&&p.l.ta(ee),p.v=0)}}Qn(4)}catch{}}var Zd=class{constructor(o,h){this.g=o,this.map=h}};function Xa(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Za(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ec(o){return o.h?1:o.g?o.g.size:0}function Rs(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function Ss(o,h){o.g?o.g.add(h):o.h=h}function tc(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}Xa.prototype.cancel=function(){if(this.i=nc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function nc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const p of o.g.values())h=h.concat(p.D);return h}return P(o.i)}function ep(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var h=[],p=o.length,m=0;m<p;m++)h.push(o[m]);return h}h=[],p=0;for(m in o)h[p++]=o[m];return h}function tp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var h=[];o=o.length;for(var p=0;p<o;p++)h.push(p);return h}h=[],p=0;for(const m in o)h[p++]=m;return h}}}function rc(o,h){if(o.forEach&&typeof o.forEach=="function")o.forEach(h,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,h,void 0);else for(var p=tp(o),m=ep(o),S=m.length,C=0;C<S;C++)h.call(void 0,m[C],p&&p[C],o)}var ic=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function np(o,h){if(o){o=o.split("&");for(var p=0;p<o.length;p++){var m=o[p].indexOf("="),S=null;if(0<=m){var C=o[p].substring(0,m);S=o[p].substring(m+1)}else C=o[p];h(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Qt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Qt){this.h=o.h,Qr(this,o.j),this.o=o.o,this.g=o.g,Yr(this,o.s),this.l=o.l;var h=o.i,p=new tr;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),sc(this,p),this.m=o.m}else o&&(h=String(o).match(ic))?(this.h=!1,Qr(this,h[1]||"",!0),this.o=Zn(h[2]||""),this.g=Zn(h[3]||"",!0),Yr(this,h[4]),this.l=Zn(h[5]||"",!0),sc(this,h[6]||"",!0),this.m=Zn(h[7]||"")):(this.h=!1,this.i=new tr(null,this.h))}Qt.prototype.toString=function(){var o=[],h=this.j;h&&o.push(er(h,oc,!0),":");var p=this.g;return(p||h=="file")&&(o.push("//"),(h=this.o)&&o.push(er(h,oc,!0),"@"),o.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&o.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&o.push("/"),o.push(er(p,p.charAt(0)=="/"?sp:ip,!0))),(p=this.i.toString())&&o.push("?",p),(p=this.m)&&o.push("#",er(p,ap)),o.join("")};function lt(o){return new Qt(o)}function Qr(o,h,p){o.j=p?Zn(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function Yr(o,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);o.s=h}else o.s=null}function sc(o,h,p){h instanceof tr?(o.i=h,cp(o.i,o.h)):(p||(h=er(h,op)),o.i=new tr(h,o.h))}function ce(o,h,p){o.i.set(h,p)}function Jr(o){return ce(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Zn(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function er(o,h,p){return typeof o=="string"?(o=encodeURI(o).replace(h,rp),p&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function rp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var oc=/[#\/\?@]/g,ip=/[#\?:]/g,sp=/[#\?]/g,op=/[#\?@]/g,ap=/#/g;function tr(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function St(o){o.g||(o.g=new Map,o.h=0,o.i&&np(o.i,function(h,p){o.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}n=tr.prototype,n.add=function(o,h){St(this),this.i=null,o=gn(this,o);var p=this.g.get(o);return p||this.g.set(o,p=[]),p.push(h),this.h+=1,this};function ac(o,h){St(o),h=gn(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function cc(o,h){return St(o),h=gn(o,h),o.g.has(h)}n.forEach=function(o,h){St(this),this.g.forEach(function(p,m){p.forEach(function(S){o.call(h,S,m,this)},this)},this)},n.na=function(){St(this);const o=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let m=0;m<h.length;m++){const S=o[m];for(let C=0;C<S.length;C++)p.push(h[m])}return p},n.V=function(o){St(this);let h=[];if(typeof o=="string")cc(this,o)&&(h=h.concat(this.g.get(gn(this,o))));else{o=Array.from(this.g.values());for(let p=0;p<o.length;p++)h=h.concat(o[p])}return h},n.set=function(o,h){return St(this),this.i=null,o=gn(this,o),cc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},n.get=function(o,h){return o?(o=this.V(o),0<o.length?String(o[0]):h):h};function lc(o,h,p){ac(o,h),0<p.length&&(o.i=null,o.g.set(gn(o,h),P(p)),o.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var m=h[p];const C=encodeURIComponent(String(m)),x=this.V(m);for(m=0;m<x.length;m++){var S=C;x[m]!==""&&(S+="="+encodeURIComponent(String(x[m]))),o.push(S)}}return this.i=o.join("&")};function gn(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function cp(o,h){h&&!o.j&&(St(o),o.i=null,o.g.forEach(function(p,m){var S=m.toLowerCase();m!=S&&(ac(this,m),lc(this,S,p))},o)),o.j=h}function lp(o,h){const p=new Jn;if(l.Image){const m=new Image;m.onload=E(Pt,p,"TestLoadImage: loaded",!0,h,m),m.onerror=E(Pt,p,"TestLoadImage: error",!1,h,m),m.onabort=E(Pt,p,"TestLoadImage: abort",!1,h,m),m.ontimeout=E(Pt,p,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else h(!1)}function up(o,h){const p=new Jn,m=new AbortController,S=setTimeout(()=>{m.abort(),Pt(p,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:m.signal}).then(C=>{clearTimeout(S),C.ok?Pt(p,"TestPingServer: ok",!0,h):Pt(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(S),Pt(p,"TestPingServer: error",!1,h)})}function Pt(o,h,p,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(p)}catch{}}function hp(){this.g=new Wd}function dp(o,h,p){const m=p||"";try{rc(o,function(S,C){let x=S;d(S)&&(x=vs(S)),h.push(m+C+"="+encodeURIComponent(x))})}catch(S){throw h.push(m+"type="+encodeURIComponent("_badmap")),S}}function Xr(o){this.l=o.Ub||null,this.j=o.eb||!1}T(Xr,_s),Xr.prototype.g=function(){return new Zr(this.l,this.j)},Xr.prototype.i=function(o){return function(){return o}}({});function Zr(o,h){Pe.call(this),this.D=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(Zr,Pe),n=Zr.prototype,n.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=h,this.readyState=1,rr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(h.body=o),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,rr(this)),this.g&&(this.readyState=3,rr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;uc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function uc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?nr(this):rr(this),this.readyState==3&&uc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,nr(this))},n.Qa=function(o){this.g&&(this.response=o,nr(this))},n.ga=function(){this.g&&nr(this)};function nr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,rr(o)}n.setRequestHeader=function(o,h){this.u.append(o,h)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,o.push(p[0]+": "+p[1]),p=h.next();return o.join(`\r
`)};function rr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function hc(o){let h="";return M(o,function(p,m){h+=m,h+=":",h+=p,h+=`\r
`}),h}function Ps(o,h,p){e:{for(m in p){var m=!1;break e}m=!0}m||(p=hc(p),typeof o=="string"?p!=null&&encodeURIComponent(String(p)):ce(o,h,p))}function ue(o){Pe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(ue,Pe);var pp=/^https?$/i,fp=["POST","PUT"];n=ue.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,h,p,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Es.g(),this.v=this.o?ja(this.o):ja(Es),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(C){dc(this,C);return}if(o=p||"",p=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)p.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const C of m.keys())p.set(C,m.get(C));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(p.keys()).find(C=>C.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fp,h,void 0))||m||S||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,x]of p)this.g.setRequestHeader(C,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mc(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){dc(this,C)}};function dc(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.m=5,pc(o),ei(o)}function pc(o){o.A||(o.A=!0,Fe(o,"complete"),Fe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Fe(this,"complete"),Fe(this,"abort"),ei(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ei(this,!0)),ue.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?fc(this):this.bb())},n.bb=function(){fc(this)};function fc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ut(o)!=4||o.Z()!=2)){if(o.u&&ut(o)==4)xa(o.Ea,0,o);else if(Fe(o,"readystatechange"),ut(o)==4){o.h=!1;try{const x=o.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var m;if(m=x===0){var S=String(o.D).match(ic)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),m=!pp.test(S?S.toLowerCase():"")}p=m}if(p)Fe(o,"complete"),Fe(o,"success");else{o.m=6;try{var C=2<ut(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",pc(o)}}finally{ei(o)}}}}function ei(o,h){if(o.g){mc(o);const p=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,h||Fe(o,"ready");try{p.onreadystatechange=m}catch{}}}function mc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ut(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),Gd(h)}};function gc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function mp(o){const h={};o=(o.g&&2<=ut(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(j(o[m]))continue;var p=A(o[m]);const S=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const C=h[S]||[];h[S]=C,C.push(p)}w(h,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ir(o,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[o]||h}function vc(o){this.Aa=0,this.i=[],this.j=new Jn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ir("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ir("baseRetryDelayMs",5e3,o),this.cb=ir("retryDelaySeedMs",1e4,o),this.Wa=ir("forwardChannelMaxRetries",2,o),this.wa=ir("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Xa(o&&o.concurrentRequestLimit),this.Da=new hp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=vc.prototype,n.la=8,n.G=1,n.connect=function(o,h,p,m){Ue(0),this.W=o,this.H=h||{},p&&m!==void 0&&(this.H.OSID=p,this.H.OAID=m),this.F=this.X,this.I=Rc(this,null,this.W),ni(this)};function Cs(o){if(_c(o),o.G==3){var h=o.U++,p=lt(o.I);if(ce(p,"SID",o.K),ce(p,"RID",h),ce(p,"TYPE","terminate"),sr(o,p),h=new Rt(o,o.j,h),h.L=2,h.v=Jr(lt(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=Sc(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Kr(h)}Ac(o)}function ti(o){o.g&&(Ns(o),o.g.cancel(),o.g=null)}function _c(o){ti(o),o.u&&(l.clearTimeout(o.u),o.u=null),ri(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function ni(o){if(!Za(o.h)&&!o.s){o.s=!0;var h=o.Ga;Gt||Na(),Hn||(Gt(),Hn=!0),ls.add(h,o),o.B=0}}function gp(o,h){return ec(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=h.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Yn(v(o.Ga,o,h),wc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new Rt(this,this.j,o);let C=this.o;if(this.S&&(C?(C=y(C),I(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var m=this.i[p];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=bc(this,S,h),p=lt(this.I),ce(p,"RID",o),ce(p,"CVER",22),this.D&&ce(p,"X-HTTP-Session-Id",this.D),sr(this,p),C&&(this.O?h="headers="+encodeURIComponent(String(hc(C)))+"&"+h:this.m&&Ps(p,this.m,C)),Ss(this.h,S),this.Ua&&ce(p,"TYPE","init"),this.P?(ce(p,"$req",h),ce(p,"SID","null"),S.T=!0,Ts(S,p,null)):Ts(S,p,h),this.G=2}}else this.G==3&&(o?yc(this,o):this.i.length==0||Za(this.h)||yc(this))};function yc(o,h){var p;h?p=h.l:p=o.U++;const m=lt(o.I);ce(m,"SID",o.K),ce(m,"RID",p),ce(m,"AID",o.T),sr(o,m),o.m&&o.o&&Ps(m,o.m,o.o),p=new Rt(o,o.j,p,o.B+1),o.m===null&&(p.H=o.o),h&&(o.i=h.D.concat(o.i)),h=bc(o,p,1e3),p.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ss(o.h,p),Ts(p,m,h)}function sr(o,h){o.H&&M(o.H,function(p,m){ce(h,m,p)}),o.l&&rc({},function(p,m){ce(h,m,p)})}function bc(o,h,p){p=Math.min(o.i.length,p);var m=o.l?v(o.l.Na,o.l,o):null;e:{var S=o.i;let C=-1;for(;;){const x=["count="+p];C==-1?0<p?(C=S[0].g,x.push("ofs="+C)):C=0:x.push("ofs="+C);let se=!0;for(let Ie=0;Ie<p;Ie++){let ee=S[Ie].g;const Ce=S[Ie].map;if(ee-=C,0>ee)C=Math.max(0,S[Ie].g-100),se=!1;else try{dp(Ce,x,"req"+ee+"_")}catch{m&&m(Ce)}}if(se){m=x.join("&");break e}}}return o=o.i.splice(0,p),h.D=o,m}function Ec(o){if(!o.g&&!o.u){o.Y=1;var h=o.Fa;Gt||Na(),Hn||(Gt(),Hn=!0),ls.add(h,o),o.v=0}}function ks(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Yn(v(o.Fa,o),wc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ic(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Yn(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ue(10),ti(this),Ic(this))};function Ns(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Ic(o){o.g=new Rt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var h=lt(o.qa);ce(h,"RID","rpc"),ce(h,"SID",o.K),ce(h,"AID",o.T),ce(h,"CI",o.F?"0":"1"),!o.F&&o.ja&&ce(h,"TO",o.ja),ce(h,"TYPE","xmlhttp"),sr(o,h),o.m&&o.o&&Ps(h,o.m,o.o),o.L&&(o.g.I=o.L);var p=o.g;o=o.ia,p.L=1,p.v=Jr(lt(h)),p.m=null,p.P=!0,Qa(p,o)}n.Za=function(){this.C!=null&&(this.C=null,ti(this),ks(this),Ue(19))};function ri(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Tc(o,h){var p=null;if(o.g==h){ri(o),Ns(o),o.g=null;var m=2}else if(Rs(o.h,h))p=h.D,tc(o.h,h),m=1;else return;if(o.G!=0){if(h.o)if(m==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var S=o.B;m=Hr(),Fe(m,new Ha(m,p)),ni(o)}else Ec(o);else if(S=h.s,S==3||S==0&&0<h.X||!(m==1&&gp(o,h)||m==2&&ks(o)))switch(p&&0<p.length&&(h=o.h,h.i=h.i.concat(p)),S){case 1:Yt(o,5);break;case 4:Yt(o,10);break;case 3:Yt(o,6);break;default:Yt(o,2)}}}function wc(o,h){let p=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(p*=2),p*h}function Yt(o,h){if(o.j.info("Error code "+h),h==2){var p=v(o.fb,o),m=o.Xa;const S=!m;m=new Qt(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Qr(m,"https"),Jr(m),S?lp(m.toString(),p):up(m.toString(),p)}else Ue(2);o.G=0,o.l&&o.l.sa(h),Ac(o),_c(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ue(2)):(this.j.info("Failed to ping google.com"),Ue(1))};function Ac(o){if(o.G=0,o.ka=[],o.l){const h=nc(o.h);(h.length!=0||o.i.length!=0)&&(k(o.ka,h),k(o.ka,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.ra()}}function Rc(o,h,p){var m=p instanceof Qt?lt(p):new Qt(p);if(m.g!="")h&&(m.g=h+"."+m.g),Yr(m,m.s);else{var S=l.location;m=S.protocol,h=h?h+"."+S.hostname:S.hostname,S=+S.port;var C=new Qt(null);m&&Qr(C,m),h&&(C.g=h),S&&Yr(C,S),p&&(C.l=p),m=C}return p=o.D,h=o.ya,p&&h&&ce(m,p,h),ce(m,"VER",o.la),sr(o,m),m}function Sc(o,h,p){if(h&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Ca&&!o.pa?new ue(new Xr({eb:p})):new ue(o.pa),h.Ha(o.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pc(){}n=Pc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ii(){}ii.prototype.g=function(o,h){return new He(o,h)};function He(o,h){Pe.call(this),this.g=new vc(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(o?o["X-WebChannel-Client-Profile"]=h.va:o={"X-WebChannel-Client-Profile":h.va}),this.g.S=o,(o=h&&h.Sb)&&!j(o)&&(this.g.m=o),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!j(h)&&(this.g.D=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new vn(this)}T(He,Pe),He.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},He.prototype.close=function(){Cs(this.g)},He.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var p={};p.__data__=o,o=p}else this.u&&(p={},p.__data__=vs(o),o=p);h.i.push(new Zd(h.Ya++,o)),h.G==3&&ni(h)},He.prototype.N=function(){this.g.l=null,delete this.j,Cs(this.g),delete this.g,He.aa.N.call(this)};function Cc(o){ys.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const p in h){o=p;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}T(Cc,ys);function kc(){bs.call(this),this.status=1}T(kc,bs);function vn(o){this.g=o}T(vn,Pc),vn.prototype.ua=function(){Fe(this.g,"a")},vn.prototype.ta=function(o){Fe(this.g,new Cc(o))},vn.prototype.sa=function(o){Fe(this.g,new kc)},vn.prototype.ra=function(){Fe(this.g,"b")},ii.prototype.createWebChannel=ii.prototype.g,He.prototype.send=He.prototype.o,He.prototype.open=He.prototype.m,He.prototype.close=He.prototype.close,yu=function(){return new ii},_u=function(){return Hr()},vu=Wt,ro={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gr.NO_ERROR=0,Gr.TIMEOUT=8,Gr.HTTP_ERROR=6,di=Gr,Ga.COMPLETE="complete",gu=Ga,$a.EventType=Kn,Kn.OPEN="a",Kn.CLOSE="b",Kn.ERROR="c",Kn.MESSAGE="d",Pe.prototype.listen=Pe.prototype.K,lr=$a,ue.prototype.listenOnce=ue.prototype.L,ue.prototype.getLastError=ue.prototype.Ka,ue.prototype.getLastErrorCode=ue.prototype.Ba,ue.prototype.getStatus=ue.prototype.Z,ue.prototype.getResponseJson=ue.prototype.Oa,ue.prototype.getResponseText=ue.prototype.oa,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Ha,mu=ue}).apply(typeof oi<"u"?oi:typeof self<"u"?self:typeof window<"u"?window:{});const Bc="@firebase/firestore";/**
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
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
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
 */let jn="10.14.0";/**
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
 */const cn=new ko("@firebase/firestore");function or(){return cn.logLevel}function F(n,...e){if(cn.logLevel<=X.DEBUG){const t=e.map(Vo);cn.debug(`Firestore (${jn}): ${n}`,...t)}}function bt(n,...e){if(cn.logLevel<=X.ERROR){const t=e.map(Vo);cn.error(`Firestore (${jn}): ${n}`,...t)}}function Cn(n,...e){if(cn.logLevel<=X.WARN){const t=e.map(Vo);cn.warn(`Firestore (${jn}): ${n}`,...t)}}function Vo(n){if(typeof n=="string")return n;try{/**
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
 */function G(n="Unexpected state"){const e=`FIRESTORE (${jn}) INTERNAL ASSERTION FAILED: `+n;throw bt(e),new Error(e)}function re(n,e){n||G()}function K(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends wt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class bu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Zf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Me.UNAUTHENTICATED))}shutdown(){}}class em{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class tm{constructor(e){this.t=e,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new tn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tn,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new bu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new Me(e)}}class nm{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class rm{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new nm(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class im{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sm{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){re(this.o===void 0);const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(re(typeof t.token=="string"),this.R=t.token,new im(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function om(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Eu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=om(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function te(n,e){return n<e?-1:n>e?1:0}function kn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class ge{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ge(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new ge(0,0))}static max(){return new W(new ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class yr{constructor(e,t,r){t===void 0?t=0:t>e.length&&G(),r===void 0?r=e.length-t:r>e.length-t&&G(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return yr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof yr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class he extends yr{construct(e,t,r){return new he(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new he(t)}static emptyPath(){return new he([])}}const am=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class we extends yr{construct(e,t,r){return new we(e,t,r)}static isValidIdentifier(e){return am.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),we.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new we(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new B(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new we(t)}static emptyPath(){return new we([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(he.fromString(e))}static fromName(e){return new q(he.fromString(e).popFirst(5))}static empty(){return new q(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return he.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new he(e.slice()))}}function cm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new ge(t+1,0):new ge(t,r));return new Bt(i,q.empty(),e)}function lm(n){return new Bt(n.readTime,n.key,-1)}class Bt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Bt(W.min(),q.empty(),-1)}static max(){return new Bt(W.max(),q.empty(),-1)}}function um(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}/**
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
 */const hm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Nr(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==hm)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(i=>i?D.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new D((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;t(e[d]).next(f=>{a[d]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new D((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function pm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Dr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Oo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Oo.oe=-1;function ji(n){return n==null}function wi(n){return n===0&&1/n==-1/0}function fm(n){return typeof n=="number"&&Number.isInteger(n)&&!wi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function qc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function pn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Iu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class le{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ai(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ai(this.root,e,this.comparator,!1)}getReverseIterator(){return new ai(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ai(this.root,e,this.comparator,!0)}}class ai{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Te.RED,this.left=i??Te.EMPTY,this.right=s??Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Te(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Te.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Te(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ae{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zc(this.data.getIterator())}getIteratorFrom(e){return new zc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ae(this.comparator);return t.data=e,t}}class zc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ge{constructor(e){this.fields=e,e.sort(we.comparator)}static empty(){return new Ge([])}unionWith(e){let t=new Ae(we.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ge(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return kn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Tu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Tu("Invalid base64 string: "+s):s}}(e);return new Re(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Re(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const mm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qt(n){if(re(!!n),typeof n=="string"){let e=0;const t=mm.exec(n);if(re(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pe(n.seconds),nanos:pe(n.nanos)}}function pe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ln(n){return typeof n=="string"?Re.fromBase64String(n):Re.fromUint8Array(n)}/**
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
 */function Mo(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function xo(n){const e=n.mapValue.fields.__previous_value__;return Mo(e)?xo(e):e}function br(n){const e=qt(n.mapValue.fields.__local_write_time__.timestampValue);return new ge(e.seconds,e.nanos)}/**
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
 */class gm{constructor(e,t,r,i,s,a,l,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Er{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Er("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Er&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ci={mapValue:{}};function un(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Mo(n)?4:_m(n)?9007199254740991:vm(n)?10:11:G()}function ot(n,e){if(n===e)return!0;const t=un(n);if(t!==un(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return br(n).isEqual(br(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=qt(i.timestampValue),l=qt(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return ln(i.bytesValue).isEqual(ln(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return pe(i.geoPointValue.latitude)===pe(s.geoPointValue.latitude)&&pe(i.geoPointValue.longitude)===pe(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return pe(i.integerValue)===pe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=pe(i.doubleValue),l=pe(s.doubleValue);return a===l?wi(a)===wi(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return kn(n.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(qc(a)!==qc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!ot(a[u],l[u])))return!1;return!0}(n,e);default:return G()}}function Ir(n,e){return(n.values||[]).find(t=>ot(t,e))!==void 0}function Nn(n,e){if(n===e)return 0;const t=un(n),r=un(e);if(t!==r)return te(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=pe(s.integerValue||s.doubleValue),u=pe(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Hc(n.timestampValue,e.timestampValue);case 4:return Hc(br(n),br(e));case 5:return te(n.stringValue,e.stringValue);case 6:return function(s,a){const l=ln(s),u=ln(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=te(l[d],u[d]);if(f!==0)return f}return te(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=te(pe(s.latitude),pe(a.latitude));return l!==0?l:te(pe(s.longitude),pe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Gc(n.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,d,f;const g=s.fields||{},v=a.fields||{},E=(l=g.value)===null||l===void 0?void 0:l.arrayValue,T=(u=v.value)===null||u===void 0?void 0:u.arrayValue,P=te(((d=E?.values)===null||d===void 0?void 0:d.length)||0,((f=T?.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:Gc(E,T)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===ci.mapValue&&a===ci.mapValue)return 0;if(s===ci.mapValue)return 1;if(a===ci.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const v=te(u[g],f[g]);if(v!==0)return v;const E=Nn(l[u[g]],d[f[g]]);if(E!==0)return E}return te(u.length,f.length)}(n.mapValue,e.mapValue);default:throw G()}}function Hc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);const t=qt(n),r=qt(e),i=te(t.seconds,r.seconds);return i!==0?i:te(t.nanos,r.nanos)}function Gc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Nn(t[i],r[i]);if(s)return s}return te(t.length,r.length)}function Dn(n){return io(n)}function io(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=qt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ln(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=io(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${io(t.fields[a])}`;return i+"}"}(n.mapValue):G()}function so(n){return!!n&&"integerValue"in n}function Lo(n){return!!n&&"arrayValue"in n}function Wc(n){return!!n&&"nullValue"in n}function Kc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function pi(n){return!!n&&"mapValue"in n}function vm(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function pr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return pn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=pr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=pr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function _m(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!pi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=pr(t)}setAll(e){let t=we.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=pr(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());pi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];pi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){pn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new qe(pr(this.value))}}function wu(n){const e=[];return pn(n.fields,(t,r)=>{const i=new we([t]);if(pi(r)){const s=wu(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Ge(e)}/**
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
 */class xe{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new xe(e,0,W.min(),W.min(),W.min(),qe.empty(),0)}static newFoundDocument(e,t,r,i){return new xe(e,1,t,W.min(),r,i,0)}static newNoDocument(e,t){return new xe(e,2,t,W.min(),W.min(),qe.empty(),0)}static newUnknownDocument(e,t){return new xe(e,3,t,W.min(),W.min(),qe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ai{constructor(e,t){this.position=e,this.inclusive=t}}function Qc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),t.key):r=Nn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ot(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ri{constructor(e,t="asc"){this.field=e,this.dir=t}}function ym(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Au{}class me extends Au{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Em(e,t,r):t==="array-contains"?new wm(e,r):t==="in"?new Am(e,r):t==="not-in"?new Rm(e,r):t==="array-contains-any"?new Sm(e,r):new me(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Im(e,r):new Tm(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Nn(t,this.value)):t!==null&&un(this.value)===un(t)&&this.matchesComparison(Nn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class at extends Au{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new at(e,t)}matches(e){return Ru(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ru(n){return n.op==="and"}function Su(n){return bm(n)&&Ru(n)}function bm(n){for(const e of n.filters)if(e instanceof at)return!1;return!0}function oo(n){if(n instanceof me)return n.field.canonicalString()+n.op.toString()+Dn(n.value);if(Su(n))return n.filters.map(e=>oo(e)).join(",");{const e=n.filters.map(t=>oo(t)).join(",");return`${n.op}(${e})`}}function Pu(n,e){return n instanceof me?function(r,i){return i instanceof me&&r.op===i.op&&r.field.isEqual(i.field)&&ot(r.value,i.value)}(n,e):n instanceof at?function(r,i){return i instanceof at&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&Pu(a,i.filters[l]),!0):!1}(n,e):void G()}function Cu(n){return n instanceof me?function(t){return`${t.field.canonicalString()} ${t.op} ${Dn(t.value)}`}(n):n instanceof at?function(t){return t.op.toString()+" {"+t.getFilters().map(Cu).join(" ,")+"}"}(n):"Filter"}class Em extends me{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class Im extends me{constructor(e,t){super(e,"in",t),this.keys=ku("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Tm extends me{constructor(e,t){super(e,"not-in",t),this.keys=ku("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ku(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>q.fromName(r.referenceValue))}class wm extends me{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Lo(t)&&Ir(t.arrayValue,this.value)}}class Am extends me{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ir(this.value.arrayValue,t)}}class Rm extends me{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ir(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ir(this.value.arrayValue,t)}}class Sm extends me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Lo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ir(this.value.arrayValue,r))}}/**
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
 */class Pm{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Jc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Pm(n,e,t,r,i,s,a)}function Fo(n){const e=K(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>oo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ji(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Dn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Dn(r)).join(",")),e.ue=t}return e.ue}function Uo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ym(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Pu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Yc(n.startAt,e.startAt)&&Yc(n.endAt,e.endAt)}function ao(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class $i{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Cm(n,e,t,r,i,s,a,l){return new $i(n,e,t,r,i,s,a,l)}function jo(n){return new $i(n)}function Xc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function km(n){return n.collectionGroup!==null}function fr(n){const e=K(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ae(we.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ri(s,r))}),t.has(we.keyField().canonicalString())||e.ce.push(new Ri(we.keyField(),r))}return e.ce}function rt(n){const e=K(n);return e.le||(e.le=Nm(e,fr(n))),e.le}function Nm(n,e){if(n.limitType==="F")return Jc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ri(i.field,s)});const t=n.endAt?new Ai(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ai(n.startAt.position,n.startAt.inclusive):null;return Jc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function co(n,e,t){return new $i(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bi(n,e){return Uo(rt(n),rt(e))&&n.limitType===e.limitType}function Nu(n){return`${Fo(rt(n))}|lt:${n.limitType}`}function yn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Cu(i)).join(", ")}]`),ji(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Dn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Dn(i)).join(",")),`Target(${r})`}(rt(n))}; limitType=${n.limitType})`}function qi(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of fr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const d=Qc(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,fr(r),i)||r.endAt&&!function(a,l,u){const d=Qc(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,fr(r),i))}(n,e)}function Dm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Du(n){return(e,t)=>{let r=!1;for(const i of fr(n)){const s=Vm(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Vm(n,e,t){const r=n.field.isKeyField()?q.comparator(e.key,t.key):function(s,a,l){const u=a.data.field(s),d=l.data.field(s);return u!==null&&d!==null?Nn(u,d):G()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class $n{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){pn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Iu(this.inner)}size(){return this.innerSize}}/**
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
 */const Om=new le(q.comparator);function Et(){return Om}const Vu=new le(q.comparator);function ur(...n){let e=Vu;for(const t of n)e=e.insert(t.key,t);return e}function Ou(n){let e=Vu;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Xt(){return mr()}function Mu(){return mr()}function mr(){return new $n(n=>n.toString(),(n,e)=>n.isEqual(e))}const Mm=new le(q.comparator),xm=new Ae(q.comparator);function J(...n){let e=xm;for(const t of n)e=e.add(t);return e}const Lm=new Ae(te);function Fm(){return Lm}/**
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
 */function $o(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wi(e)?"-0":e}}function xu(n){return{integerValue:""+n}}function Um(n,e){return fm(e)?xu(e):$o(n,e)}/**
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
 */class zi{constructor(){this._=void 0}}function jm(n,e,t){return n instanceof Si?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Mo(s)&&(s=xo(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof Tr?Fu(n,e):n instanceof wr?Uu(n,e):function(i,s){const a=Lu(i,s),l=Zc(a)+Zc(i.Pe);return so(a)&&so(i.Pe)?xu(l):$o(i.serializer,l)}(n,e)}function $m(n,e,t){return n instanceof Tr?Fu(n,e):n instanceof wr?Uu(n,e):t}function Lu(n,e){return n instanceof Pi?function(r){return so(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Si extends zi{}class Tr extends zi{constructor(e){super(),this.elements=e}}function Fu(n,e){const t=ju(e);for(const r of n.elements)t.some(i=>ot(i,r))||t.push(r);return{arrayValue:{values:t}}}class wr extends zi{constructor(e){super(),this.elements=e}}function Uu(n,e){let t=ju(e);for(const r of n.elements)t=t.filter(i=>!ot(i,r));return{arrayValue:{values:t}}}class Pi extends zi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Zc(n){return pe(n.integerValue||n.doubleValue)}function ju(n){return Lo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Bm(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Tr&&i instanceof Tr||r instanceof wr&&i instanceof wr?kn(r.elements,i.elements,ot):r instanceof Pi&&i instanceof Pi?ot(r.Pe,i.Pe):r instanceof Si&&i instanceof Si}(n.transform,e.transform)}class qm{constructor(e,t){this.version=e,this.transformResults=t}}class Qe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qe}static exists(e){return new Qe(void 0,e)}static updateTime(e){return new Qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Hi{}function $u(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Bo(n.key,Qe.none()):new Vr(n.key,n.data,Qe.none());{const t=n.data,r=qe.empty();let i=new Ae(we.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Ht(n.key,r,new Ge(i.toArray()),Qe.none())}}function zm(n,e,t){n instanceof Vr?function(i,s,a){const l=i.value.clone(),u=tl(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Ht?function(i,s,a){if(!fi(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=tl(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(Bu(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function gr(n,e,t,r){return n instanceof Vr?function(s,a,l,u){if(!fi(s.precondition,a))return l;const d=s.value.clone(),f=nl(s.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ht?function(s,a,l,u){if(!fi(s.precondition,a))return l;const d=nl(s.fieldTransforms,u,a),f=a.data;return f.setAll(Bu(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(s,a,l){return fi(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Hm(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Lu(r.transform,i||null);s!=null&&(t===null&&(t=qe.empty()),t.set(r.field,s))}return t||null}function el(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&kn(r,i,(s,a)=>Bm(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Vr extends Hi{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ht extends Hi{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Bu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function tl(n,e,t){const r=new Map;re(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,$m(a,l,t[i]))}return r}function nl(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,jm(s,a,e))}return r}class Bo extends Hi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gm extends Hi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Wm{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&zm(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=gr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=gr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Mu();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const u=$u(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),J())}isEqual(e){return this.batchId===e.batchId&&kn(this.mutations,e.mutations,(t,r)=>el(t,r))&&kn(this.baseMutations,e.baseMutations,(t,r)=>el(t,r))}}class qo{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){re(e.mutations.length===r.length);let i=function(){return Mm}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new qo(e,t,r,i)}}/**
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
 */class Km{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Qm{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var fe,Z;function Ym(n){switch(n){default:return G();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function qu(n){if(n===void 0)return bt("GRPC error has no .code"),V.UNKNOWN;switch(n){case fe.OK:return V.OK;case fe.CANCELLED:return V.CANCELLED;case fe.UNKNOWN:return V.UNKNOWN;case fe.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case fe.INTERNAL:return V.INTERNAL;case fe.UNAVAILABLE:return V.UNAVAILABLE;case fe.UNAUTHENTICATED:return V.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case fe.NOT_FOUND:return V.NOT_FOUND;case fe.ALREADY_EXISTS:return V.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return V.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case fe.ABORTED:return V.ABORTED;case fe.OUT_OF_RANGE:return V.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return V.UNIMPLEMENTED;case fe.DATA_LOSS:return V.DATA_LOSS;default:return G()}}(Z=fe||(fe={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Jm(){return new TextEncoder}/**
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
 */const Xm=new en([4294967295,4294967295],0);function rl(n){const e=Jm().encode(n),t=new fu;return t.update(e),new Uint8Array(t.digest())}function il(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new en([t,r],0),new en([i,s],0)]}class zo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new hr(`Invalid padding: ${t}`);if(r<0)throw new hr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new hr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=en.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(en.fromNumber(r)));return i.compare(Xm)===1&&(i=new en([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=rl(e),[r,i]=il(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new zo(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=rl(e),[r,i]=il(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class hr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gi{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Or.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Gi(W.min(),i,new le(te),Et(),J())}}class Or{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Or(r,t,J(),J(),J())}}/**
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
 */class mi{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class zu{constructor(e,t){this.targetId=e,this.me=t}}class Hu{constructor(e,t,r=Re.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class sl{constructor(){this.fe=0,this.ge=al(),this.pe=Re.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=J(),t=J(),r=J();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Or(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=al()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,re(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Zm{constructor(e){this.Le=e,this.Be=new Map,this.ke=Et(),this.qe=ol(),this.Qe=new le(te)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(ao(s))if(r===0){const a=new q(s.path);this.Ue(t,a,xe.newNoDocument(a,W.min()))}else re(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=ln(r).toUint8Array()}catch(u){if(u instanceof Tu)return Cn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new zo(a,i,s)}catch(u){return Cn(u instanceof hr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&ao(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,xe.newNoDocument(u,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=J();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Gi(e,t,this.Qe,this.ke,r);return this.ke=Et(),this.qe=ol(),this.Qe=new le(te),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new sl,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ae(te),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new sl),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ol(){return new le(q.comparator)}function al(){return new le(q.comparator)}const eg={asc:"ASCENDING",desc:"DESCENDING"},tg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ng={and:"AND",or:"OR"};class rg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lo(n,e){return n.useProto3Json||ji(e)?e:{value:e}}function Ci(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gu(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ig(n,e){return Ci(n,e.toTimestamp())}function it(n){return re(!!n),W.fromTimestamp(function(t){const r=qt(t);return new ge(r.seconds,r.nanos)}(n))}function Ho(n,e){return uo(n,e).canonicalString()}function uo(n,e){const t=function(i){return new he(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Wu(n){const e=he.fromString(n);return re(Xu(e)),e}function ho(n,e){return Ho(n.databaseId,e.path)}function Fs(n,e){const t=Wu(e);if(t.get(1)!==n.databaseId.projectId)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(Qu(t))}function Ku(n,e){return Ho(n.databaseId,e)}function sg(n){const e=Wu(n);return e.length===4?he.emptyPath():Qu(e)}function po(n){return new he(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Qu(n){return re(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function cl(n,e,t){return{name:ho(n,e),fields:t.value.mapValue.fields}}function og(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(re(f===void 0||typeof f=="string"),Re.fromBase64String(f||"")):(re(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Re.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const f=d.code===void 0?V.UNKNOWN:qu(d.code);return new B(f,d.message||"")}(a);t=new Hu(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fs(n,r.document.name),s=it(r.document.updateTime),a=r.document.createTime?it(r.document.createTime):W.min(),l=new qe({mapValue:{fields:r.document.fields}}),u=xe.newFoundDocument(i,s,a,l),d=r.targetIds||[],f=r.removedTargetIds||[];t=new mi(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Fs(n,r.document),s=r.readTime?it(r.readTime):W.min(),a=xe.newNoDocument(i,s),l=r.removedTargetIds||[];t=new mi([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Fs(n,r.document),s=r.removedTargetIds||[];t=new mi([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new Qm(i,s),l=r.targetId;t=new zu(l,a)}}return t}function ag(n,e){let t;if(e instanceof Vr)t={update:cl(n,e.key,e.value)};else if(e instanceof Bo)t={delete:ho(n,e.key)};else if(e instanceof Ht)t={update:cl(n,e.key,e.data),updateMask:gg(e.fieldMask)};else{if(!(e instanceof Gm))return G();t={verify:ho(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof Si)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Tr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof wr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Pi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ig(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(n,e.precondition)),t}function cg(n,e){return n&&n.length>0?(re(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?it(i.updateTime):it(s);return a.isEqual(W.min())&&(a=it(s)),new qm(a,i.transformResults||[])}(t,e))):[]}function lg(n,e){return{documents:[Ku(n,e.path)]}}function ug(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ku(n,i);const s=function(d){if(d.length!==0)return Ju(at.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(f=>function(v){return{field:bn(v.field),direction:pg(v.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=lo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function hg(n){let e=sg(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){re(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(g){const v=Yu(g);return v instanceof at&&Su(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(v=>function(T){return new Ri(En(T.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(v))}(t.orderBy));let l=null;t.limit&&(l=function(g){let v;return v=typeof g=="object"?g.value:g,ji(v)?null:v}(t.limit));let u=null;t.startAt&&(u=function(g){const v=!!g.before,E=g.values||[];return new Ai(E,v)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const v=!g.before,E=g.values||[];return new Ai(E,v)}(t.endAt)),Cm(e,i,a,s,l,"F",u,d)}function dg(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Yu(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=En(t.unaryFilter.field);return me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=En(t.unaryFilter.field);return me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=En(t.unaryFilter.field);return me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=En(t.unaryFilter.field);return me.create(a,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(n):n.fieldFilter!==void 0?function(t){return me.create(En(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return at.create(t.compositeFilter.filters.map(r=>Yu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(t.compositeFilter.op))}(n):G()}function pg(n){return eg[n]}function fg(n){return tg[n]}function mg(n){return ng[n]}function bn(n){return{fieldPath:n.canonicalString()}}function En(n){return we.fromServerFormat(n.fieldPath)}function Ju(n){return n instanceof me?function(t){if(t.op==="=="){if(Kc(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NAN"}};if(Wc(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Kc(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NOT_NAN"}};if(Wc(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bn(t.field),op:fg(t.op),value:t.value}}}(n):n instanceof at?function(t){const r=t.getFilters().map(i=>Ju(i));return r.length===1?r[0]:{compositeFilter:{op:mg(t.op),filters:r}}}(n):G()}function gg(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Xu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class xt{constructor(e,t,r,i,s=W.min(),a=W.min(),l=Re.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class vg{constructor(e){this.ct=e}}function _g(n){const e=hg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?co(e,e.limit,"L"):e}/**
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
 */class yg{constructor(){this.un=new bg}addToCollectionParentIndex(e,t){return this.un.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Bt.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Bt.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class bg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ae(he.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ae(he.comparator)).toArray()}}/**
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
 */class Vn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Vn(0)}static kn(){return new Vn(-1)}}/**
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
 */class Eg{constructor(){this.changes=new $n(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ig{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Tg{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&gr(r.mutation,i,Ge.empty(),ge.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,t,r=J()){const i=Xt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=ur();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Xt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,J()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=Et();const a=mr(),l=function(){return mr()}();return t.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Ht)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),gr(f.mutation,d,f.mutation.getFieldMask(),ge.now())):a.set(d.key,Ge.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var g;return l.set(d,new Ig(f,(g=a.get(d))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,t){const r=mr();let i=new le((a,l)=>a-l),s=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let f=r.get(u)||Ge.empty();f=l.applyToLocalView(d,f),r.set(u,f);const g=(i.get(l.batchId)||J()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,g=Mu();f.forEach(v=>{if(!s.has(v)){const E=$u(t.get(v),r.get(v));E!==null&&g.set(v,E),s=s.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):km(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):D.resolve(Xt());let l=-1,u=s;return a.next(d=>D.forEach(d,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?D.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,J())).next(f=>({batchId:l,changes:Ou(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(r=>{let i=ur();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=ur();return this.indexManager.getCollectionParents(e,s).next(l=>D.forEach(l,u=>{const d=function(g,v){return new $i(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((g,v)=>{a=a.insert(g,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,xe.newInvalidDocument(f)))});let l=ur();return a.forEach((u,d)=>{const f=s.get(u);f!==void 0&&gr(f.mutation,d,Ge.empty(),ge.now()),qi(t,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class wg{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return D.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:it(i.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:_g(i.bundledQuery),readTime:it(i.readTime)}}(t)),D.resolve()}}/**
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
 */class Ag{constructor(){this.overlays=new le(q.comparator),this.Ir=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Xt();return D.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const i=Xt(),s=t.length+1,a=new q(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return D.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new le((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=Xt(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Xt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return D.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Km(t,r));let s=this.Ir.get(t);s===void 0&&(s=J(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
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
 */class Rg{constructor(){this.sessionToken=Re.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class Go{constructor(){this.Tr=new Ae(ye.Er),this.dr=new Ae(ye.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new ye(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new ye(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new q(new he([])),r=new ye(t,e),i=new ye(t,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new q(new he([])),r=new ye(t,e),i=new ye(t,e+1);let s=J();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new ye(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ye{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return q.comparator(e.key,t.key)||te(e.wr,t.wr)}static Ar(e,t){return te(e.wr,t.wr)||q.comparator(e.key,t.key)}}/**
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
 */class Sg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ae(ye.Er)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Wm(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new ye(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ye(t,0),i=new ye(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ae(te);return t.forEach(i=>{const s=new ye(i,0),a=new ye(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const a=new ye(new q(s),0);let l=new Ae(te);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},a),D.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){re(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(t.mutations,i=>{const s=new ye(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new ye(t,0),i=this.br.firstAfterOrEqual(r);return D.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Pg{constructor(e){this.Mr=e,this.docs=function(){return new le(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():xe.newInvalidDocument(t))}getEntries(e,t){let r=Et();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xe.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Et();const a=t.path,l=new q(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||um(lm(f),r)<=0||(i.has(f.key)||qi(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,t,r,i){G()}Or(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Cg(this)}getSize(e){return D.resolve(this.size)}}class Cg extends Eg{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class kg{constructor(e){this.persistence=e,this.Nr=new $n(t=>Fo(t),Uo),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Go,this.targetCount=0,this.kr=Vn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),D.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Vn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Kn(t),D.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.Br.containsKey(t))}}/**
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
 */class Ng{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Oo(0),this.Kr=!1,this.Kr=!0,this.$r=new Rg,this.referenceDelegate=e(this),this.Ur=new kg(this),this.indexManager=new yg,this.remoteDocumentCache=function(i){return new Pg(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new vg(t),this.Gr=new wg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ag,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Sg(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){F("MemoryPersistence","Starting transaction:",e);const i=new Dg(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class Dg extends dm{constructor(e){super(),this.currentSequenceNumber=e}}class Wo{constructor(e){this.persistence=e,this.Jr=new Go,this.Yr=null}static Zr(e){return new Wo(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),D.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,W.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return D.or([()=>D.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Ko{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=J(),i=J();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ko(e,t.fromCache,r,i)}}/**
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
 */class Vg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Og{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Vp()?8:pm(Le())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Vg;return this.Xi(e,t,a).next(l=>{if(s.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(or()<=X.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",yn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(or()<=X.DEBUG&&F("QueryEngine","Query:",yn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(or()<=X.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",yn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rt(t))):D.resolve())}Yi(e,t){if(Xc(t))return D.resolve(null);let r=rt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=co(t,null,"F"),r=rt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=J(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(t,l);return this.ns(t,d,a,u.readTime)?this.Yi(e,co(t,null,"F")):this.rs(e,d,t,u)}))})))}Zi(e,t,r,i){return Xc(t)||i.isEqual(W.min())?D.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(t,s);return this.ns(t,a,r,i)?D.resolve(null):(or()<=X.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yn(t)),this.rs(e,a,t,cm(i,-1)).next(l=>l))})}ts(e,t){let r=new Ae(Du(e));return t.forEach((i,s)=>{qi(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return or()<=X.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",yn(t)),this.Ji.getDocumentsMatchingQuery(e,t,Bt.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class Mg{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new le(te),this._s=new $n(s=>Fo(s),Uo),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Tg(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function xg(n,e,t,r){return new Mg(n,e,t,r)}async function Zu(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=J();for(const d of i){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:l}))})})}function Lg(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const g=d.batch,v=g.keys();let E=D.resolve();return v.forEach(T=>{E=E.next(()=>f.getEntry(u,T)).next(P=>{const k=d.docVersions.get(T);re(k!==null),P.version.compareTo(k)<0&&(g.applyToRemoteDocument(P,d),P.isValidDocument()&&(P.setReadTime(d.commitVersion),f.addEntry(P)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=J();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function eh(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Fg(n,e){const t=K(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((f,g)=>{const v=i.get(g);if(!v)return;l.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,g)));let E=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?E=E.withResumeToken(Re.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),i=i.insert(g,E),function(P,k,L){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(v,E,f)&&l.push(t.Ur.updateTargetData(s,E))});let u=Et(),d=J();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Ug(s,a,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(W.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(g=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return D.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(t.os=i,s))}function Ug(n,e,t){let r=J(),i=J();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Et();return t.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(W.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):F("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function jg(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $g(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new xt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function fo(n,e,t){const r=K(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Dr(a))throw a;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function ll(n,e,t){const r=K(n);let i=W.min(),s=J();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const g=K(u),v=g._s.get(f);return v!==void 0?D.resolve(g.os.get(v)):g.Ur.getTargetData(d,f)}(r,a,rt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:W.min(),t?s:J())).next(l=>(Bg(r,Dm(e),l),{documents:l,Ts:s})))}function Bg(n,e,t){let r=n.us.get(e)||W.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}class ul{constructor(){this.activeTargetIds=Fm()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qg{constructor(){this.so=new ul,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ul,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class zg{_o(e){}shutdown(){}}/**
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
 */class hl{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let li=null;function Us(){return li===null?li=function(){return 268435456+Math.round(2147483648*Math.random())}():li++,"0x"+li.toString(16)}/**
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
 */const Hg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Gg{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ne="WebChannelConnection";class Wg extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,a){const l=Us(),u=this.xo(t,r.toUriEncodedString());F("RestConnection",`Sending RPC '${t}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,a),this.No(t,u,d,i).then(f=>(F("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Cn("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(t,r,i,s,a,l){return this.Mo(t,r,i,s,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+jn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}xo(t,r){const i=Hg[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=Us();return new Promise((a,l)=>{const u=new mu;u.setWithCredentials(!0),u.listenOnce(gu.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case di.NO_ERROR:const f=u.getResponseJson();F(Ne,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case di.TIMEOUT:F(Ne,`RPC '${e}' ${s} timed out`),l(new B(V.DEADLINE_EXCEEDED,"Request time out"));break;case di.HTTP_ERROR:const g=u.getStatus();if(F(Ne,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const E=v?.error;if(E&&E.status&&E.message){const T=function(k){const L=k.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(L)>=0?L:V.UNKNOWN}(E.status);l(new B(T,E.message))}else l(new B(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new B(V.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{F(Ne,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);F(Ne,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",d,r,15)})}Bo(e,t,r){const i=Us(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=yu(),l=_u(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");F(Ne,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=a.createWebChannel(f,u);let v=!1,E=!1;const T=new Gg({Io:k=>{E?F(Ne,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(v||(F(Ne,`Opening RPC '${e}' stream ${i} transport.`),g.open(),v=!0),F(Ne,`RPC '${e}' stream ${i} sending:`,k),g.send(k))},To:()=>g.close()}),P=(k,L,j)=>{k.listen(L,U=>{try{j(U)}catch($){setTimeout(()=>{throw $},0)}})};return P(g,lr.EventType.OPEN,()=>{E||(F(Ne,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),P(g,lr.EventType.CLOSE,()=>{E||(E=!0,F(Ne,`RPC '${e}' stream ${i} transport closed`),T.So())}),P(g,lr.EventType.ERROR,k=>{E||(E=!0,Cn(Ne,`RPC '${e}' stream ${i} transport errored:`,k),T.So(new B(V.UNAVAILABLE,"The operation could not be completed")))}),P(g,lr.EventType.MESSAGE,k=>{var L;if(!E){const j=k.data[0];re(!!j);const U=j,$=U.error||((L=U[0])===null||L===void 0?void 0:L.error);if($){F(Ne,`RPC '${e}' stream ${i} received error:`,$);const Q=$.status;let M=function(b){const I=fe[b];if(I!==void 0)return qu(I)}(Q),w=$.message;M===void 0&&(M=V.INTERNAL,w="Unknown error status: "+Q+" with message "+$.message),E=!0,T.So(new B(M,w)),g.close()}else F(Ne,`RPC '${e}' stream ${i} received:`,j),T.bo(j)}}),P(l,vu.STAT_EVENT,k=>{k.stat===ro.PROXY?F(Ne,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===ro.NOPROXY&&F(Ne,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function js(){return typeof document<"u"?document:null}/**
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
 */function Wi(n){return new rg(n,!0)}/**
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
 */class th{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class nh{constructor(e,t,r,i,s,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new th(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(bt(t.toString()),bt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new B(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Kg extends nh{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=og(this.serializer,e),r=function(s){if(!("targetChange"in s))return W.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?W.min():a.readTime?it(a.readTime):W.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=po(this.serializer),t.addTarget=function(s,a){let l;const u=a.target;if(l=ao(u)?{documents:lg(s,u)}:{query:ug(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Gu(s,a.resumeToken);const d=lo(s,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(W.min())>0){l.readTime=Ci(s,a.snapshotVersion.toTimestamp());const d=lo(s,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=dg(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=po(this.serializer),t.removeTarget=e,this.a_(t)}}class Qg extends nh{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return re(!!e.streamToken),this.lastStreamToken=e.streamToken,re(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=cg(e.writeResults,e.commitTime),r=it(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=po(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ag(this.serializer,r))};this.a_(t)}}/**
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
 */class Yg extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,uo(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(V.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,uo(t,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(V.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Jg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(bt(t),this.D_=!1):F("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Xg{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{fn(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=K(u);d.L_.add(4),await Mr(d),d.q_.set("Unknown"),d.L_.delete(4),await Ki(d)}(this))})}),this.q_=new Jg(r,i)}}async function Ki(n){if(fn(n))for(const e of n.B_)await e(!0)}async function Mr(n){for(const e of n.B_)await e(!1)}function rh(n,e){const t=K(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Xo(t)?Jo(t):Bn(t).r_()&&Yo(t,e))}function Qo(n,e){const t=K(n),r=Bn(t);t.N_.delete(e),r.r_()&&ih(t,e),t.N_.size===0&&(r.r_()?r.o_():fn(t)&&t.q_.set("Unknown"))}function Yo(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Bn(n).A_(e)}function ih(n,e){n.Q_.xe(e),Bn(n).R_(e)}function Jo(n){n.Q_=new Zm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Bn(n).start(),n.q_.v_()}function Xo(n){return fn(n)&&!Bn(n).n_()&&n.N_.size>0}function fn(n){return K(n).L_.size===0}function sh(n){n.Q_=void 0}async function Zg(n){n.q_.set("Online")}async function ev(n){n.N_.forEach((e,t)=>{Yo(n,e)})}async function tv(n,e){sh(n),Xo(n)?(n.q_.M_(e),Jo(n)):n.q_.set("Unknown")}async function nv(n,e,t){if(n.q_.set("Online"),e instanceof Hu&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ki(n,r)}else if(e instanceof mi?n.Q_.Ke(e):e instanceof zu?n.Q_.He(e):n.Q_.We(e),!t.isEqual(W.min()))try{const r=await eh(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Re.EMPTY_BYTE_STRING,f.snapshotVersion)),ih(s,u);const g=new xt(f.target,u,d,f.sequenceNumber);Yo(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await ki(n,r)}}async function ki(n,e,t){if(!Dr(e))throw e;n.L_.add(1),await Mr(n),n.q_.set("Offline"),t||(t=()=>eh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ki(n)})}function oh(n,e){return e().catch(t=>ki(n,t,e))}async function Qi(n){const e=K(n),t=zt(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;rv(e);)try{const i=await jg(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,iv(e,i)}catch(i){await ki(e,i)}ah(e)&&ch(e)}function rv(n){return fn(n)&&n.O_.length<10}function iv(n,e){n.O_.push(e);const t=zt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function ah(n){return fn(n)&&!zt(n).n_()&&n.O_.length>0}function ch(n){zt(n).start()}async function sv(n){zt(n).p_()}async function ov(n){const e=zt(n);for(const t of n.O_)e.m_(t.mutations)}async function av(n,e,t){const r=n.O_.shift(),i=qo.from(r,e,t);await oh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Qi(n)}async function cv(n,e){e&&zt(n).V_&&await async function(r,i){if(function(a){return Ym(a)&&a!==V.ABORTED}(i.code)){const s=r.O_.shift();zt(r).s_(),await oh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Qi(r)}}(n,e),ah(n)&&ch(n)}async function dl(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=fn(t);t.L_.add(3),await Mr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ki(t)}async function lv(n,e){const t=K(n);e?(t.L_.delete(2),await Ki(t)):e||(t.L_.add(2),await Mr(t),t.q_.set("Unknown"))}function Bn(n){return n.K_||(n.K_=function(t,r,i){const s=K(t);return s.w_(),new Kg(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:Zg.bind(null,n),Ro:ev.bind(null,n),mo:tv.bind(null,n),d_:nv.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Xo(n)?Jo(n):n.q_.set("Unknown")):(await n.K_.stop(),sh(n))})),n.K_}function zt(n){return n.U_||(n.U_=function(t,r,i){const s=K(t);return s.w_(),new Qg(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:sv.bind(null,n),mo:cv.bind(null,n),f_:ov.bind(null,n),g_:av.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Qi(n)):(await n.U_.stop(),n.O_.length>0&&(F("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Zo{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new Zo(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ea(n,e){if(bt("AsyncQueue",`${e}: ${n}`),Dr(n))return new B(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Tn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(t,r)=>q.comparator(t.key,r.key),this.keyedMap=ur(),this.sortedSet=new le(this.comparator)}static emptySet(e){return new Tn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Tn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Tn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class pl{constructor(){this.W_=new le(q.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class On{constructor(e,t,r,i,s,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new On(e,t,Tn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class uv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class hv{constructor(){this.queries=fl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=K(t),s=i.queries;i.queries=fl(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new B(V.ABORTED,"Firestore shutting down"))}}function fl(){return new $n(n=>Nu(n),Bi)}async function dv(n,e){const t=K(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new uv,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=ea(a,`Initialization of query '${yn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&ta(t)}async function pv(n,e){const t=K(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function fv(n,e){const t=K(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&ta(t)}function mv(n,e,t){const r=K(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function ta(n){n.Y_.forEach(e=>{e.next()})}var mo,ml;(ml=mo||(mo={})).ea="default",ml.Cache="cache";class gv{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new On(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=On.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==mo.Cache}}/**
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
 */class lh{constructor(e){this.key=e}}class uh{constructor(e){this.key=e}}class vv{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=J(),this.mutatedKeys=J(),this.Aa=Du(e),this.Ra=new Tn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new pl,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const v=i.get(f),E=qi(this.query,g)?g:null,T=!!v&&this.mutatedKeys.has(v.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let k=!1;v&&E?v.data.isEqual(E.data)?T!==P&&(r.track({type:3,doc:E}),k=!0):this.ga(v,E)||(r.track({type:2,doc:E}),k=!0,(u&&this.Aa(E,u)>0||d&&this.Aa(E,d)<0)&&(l=!0)):!v&&E?(r.track({type:0,doc:E}),k=!0):v&&!E&&(r.track({type:1,doc:v}),k=!0,(u||d)&&(l=!0)),k&&(E?(a=a.add(E),s=P?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,g)=>function(E,T){const P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return P(E)-P(T)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,a.length!==0||d?{snapshot:new On(this.query,e.Ra,s,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new pl,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=J(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new uh(r))}),this.da.forEach(r=>{e.has(r)||t.push(new lh(r))}),t}ba(e){this.Ta=e.Ts,this.da=J();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return On.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class _v{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class yv{constructor(e){this.key=e,this.va=!1}}class bv{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new $n(l=>Nu(l),Bi),this.Ma=new Map,this.xa=new Set,this.Oa=new le(q.comparator),this.Na=new Map,this.La=new Go,this.Ba={},this.ka=new Map,this.qa=Vn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Ev(n,e,t=!0){const r=gh(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await hh(r,e,t,!0),i}async function Iv(n,e){const t=gh(n);await hh(t,e,!0,!1)}async function hh(n,e,t,r){const i=await $g(n.localStore,rt(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await Tv(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&rh(n.remoteStore,i),l}async function Tv(n,e,t,r,i){n.Ka=(g,v,E)=>async function(P,k,L,j){let U=k.view.ma(L);U.ns&&(U=await ll(P.localStore,k.query,!1).then(({documents:w})=>k.view.ma(w,U)));const $=j&&j.targetChanges.get(k.targetId),Q=j&&j.targetMismatches.get(k.targetId)!=null,M=k.view.applyChanges(U,P.isPrimaryClient,$,Q);return vl(P,k.targetId,M.wa),M.snapshot}(n,g,v,E);const s=await ll(n.localStore,e,!0),a=new vv(e,s.Ts),l=a.ma(s.documents),u=Or.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,u);vl(n,t,d.wa);const f=new _v(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function wv(n,e,t){const r=K(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!Bi(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await fo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Qo(r.remoteStore,i.targetId),go(r,i.targetId)}).catch(Nr)):(go(r,i.targetId),await fo(r.localStore,i.targetId,!0))}async function Av(n,e){const t=K(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Qo(t.remoteStore,r.targetId))}async function Rv(n,e,t){const r=Vv(n);try{const i=await function(a,l){const u=K(a),d=ge.now(),f=l.reduce((E,T)=>E.add(T.key),J());let g,v;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let T=Et(),P=J();return u.cs.getEntries(E,f).next(k=>{T=k,T.forEach((L,j)=>{j.isValidDocument()||(P=P.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,T)).next(k=>{g=k;const L=[];for(const j of l){const U=Hm(j,g.get(j.key).overlayedDocument);U!=null&&L.push(new Ht(j.key,U,wu(U.value.mapValue),Qe.exists(!0)))}return u.mutationQueue.addMutationBatch(E,d,L,l)}).next(k=>{v=k;const L=k.applyToLocalDocumentSet(g,P);return u.documentOverlayCache.saveOverlays(E,k.batchId,L)})}).then(()=>({batchId:v.batchId,changes:Ou(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let d=a.Ba[a.currentUser.toKey()];d||(d=new le(te)),d=d.insert(l,u),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,t),await xr(r,i.changes),await Qi(r.remoteStore)}catch(i){const s=ea(i,"Failed to persist write");t.reject(s)}}async function dh(n,e){const t=K(n);try{const r=await Fg(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Na.get(s);a&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?re(a.va):i.removedDocuments.size>0&&(re(a.va),a.va=!1))}),await xr(t,r,e)}catch(r){await Nr(r)}}function gl(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=K(a);u.onlineState=l;let d=!1;u.queries.forEach((f,g)=>{for(const v of g.j_)v.Z_(l)&&(d=!0)}),d&&ta(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Sv(n,e,t){const r=K(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let a=new le(q.comparator);a=a.insert(s,xe.newNoDocument(s,W.min()));const l=J().add(s),u=new Gi(W.min(),new Map,new le(te),a,l);await dh(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),na(r)}else await fo(r.localStore,e,!1).then(()=>go(r,e,t)).catch(Nr)}async function Pv(n,e){const t=K(n),r=e.batch.batchId;try{const i=await Lg(t.localStore,e);fh(t,r,null),ph(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await xr(t,i)}catch(i){await Nr(i)}}async function Cv(n,e,t){const r=K(n);try{const i=await function(a,l){const u=K(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(g=>(re(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);fh(r,e,t),ph(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await xr(r,i)}catch(i){await Nr(i)}}function ph(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function fh(n,e,t){const r=K(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function go(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||mh(n,r)})}function mh(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Qo(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),na(n))}function vl(n,e,t){for(const r of t)r instanceof lh?(n.La.addReference(r.key,e),kv(n,r)):r instanceof uh?(F("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||mh(n,r.key)):G()}function kv(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(F("SyncEngine","New document in limbo: "+t),n.xa.add(r),na(n))}function na(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new q(he.fromString(e)),r=n.qa.next();n.Na.set(r,new yv(t)),n.Oa=n.Oa.insert(t,r),rh(n.remoteStore,new xt(rt(jo(t.path)),r,"TargetPurposeLimboResolution",Oo.oe))}}async function xr(n,e,t){const r=K(n),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(f=t?.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){i.push(d);const g=Ko.Wi(u.targetId,d);s.push(g)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,d){const f=K(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>D.forEach(d,v=>D.forEach(v.$i,E=>f.persistence.referenceDelegate.addReference(g,v.targetId,E)).next(()=>D.forEach(v.Ui,E=>f.persistence.referenceDelegate.removeReference(g,v.targetId,E)))))}catch(g){if(!Dr(g))throw g;F("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const E=f.os.get(v),T=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(T);f.os=f.os.insert(v,P)}}}(r.localStore,s))}async function Nv(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await Zu(t.localStore,e);t.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new B(V.CANCELLED,a))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xr(t,r.hs)}}function Dv(n,e){const t=K(n),r=t.Na.get(e);if(r&&r.va)return J().add(r.key);{let i=J();const s=t.Ma.get(e);if(!s)return i;for(const a of s){const l=t.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function gh(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=dh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Dv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Sv.bind(null,e),e.Ca.d_=fv.bind(null,e.eventManager),e.Ca.$a=mv.bind(null,e.eventManager),e}function Vv(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Pv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Cv.bind(null,e),e}class Ni{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wi(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return xg(this.persistence,new Og,e.initialUser,this.serializer)}Ga(e){return new Ng(Wo.Zr,this.serializer)}Wa(e){return new qg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ni.provider={build:()=>new Ni};class vo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nv.bind(null,this.syncEngine),await lv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hv}()}createDatastore(e){const t=Wi(e.databaseInfo.databaseId),r=function(s){return new Wg(s)}(e.databaseInfo);return function(s,a,l,u){return new Yg(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new Xg(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>gl(this.syncEngine,t,0),function(){return hl.D()?new hl:new zg}())}createSyncEngine(e,t){return function(i,s,a,l,u,d,f){const g=new bv(i,s,a,l,u,d);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=K(i);F("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Mr(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}vo.provider={build:()=>new vo};/**
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
 */class Ov{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):bt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Mv{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Me.UNAUTHENTICATED,this.clientId=Eu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{F("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(F("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ea(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $s(n,e){n.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Zu(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function _l(n,e){n.asyncQueue.verifyOperationInProgress();const t=await xv(n);F("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>dl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>dl(e.remoteStore,i)),n._onlineComponents=e}async function xv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await $s(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Cn("Error using user provided cache. Falling back to memory cache: "+t),await $s(n,new Ni)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await $s(n,new Ni);return n._offlineComponents}async function vh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await _l(n,n._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await _l(n,new vo))),n._onlineComponents}function Lv(n){return vh(n).then(e=>e.syncEngine)}async function yl(n){const e=await vh(n),t=e.eventManager;return t.onListen=Ev.bind(null,e.syncEngine),t.onUnlisten=wv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Iv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Av.bind(null,e.syncEngine),t}/**
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
 */function _h(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const bl=new Map;/**
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
 */function Fv(n,e,t){if(!t)throw new B(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Uv(n,e,t,r){if(e===!0&&r===!0)throw new B(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function El(n){if(!q.isDocumentKey(n))throw new B(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ra(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G()}function nn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ra(n);throw new B(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Il{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Uv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_h((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ia{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Il({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Il(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Zf;switch(r.type){case"firstParty":return new rm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=bl.get(t);r&&(F("ComponentProvider","Removing Datastore"),bl.delete(t),r.terminate())}(this),Promise.resolve()}}function jv(n,e,t,r={}){var i;const s=(n=nn(n,ia))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Cn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Me.MOCK_USER;else{l=Rp(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new B(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Me(d)}n._authCredentials=new em(new bu(l,u))}}/**
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
 */class Yi{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yi(this.firestore,e,this._query)}}class Ye{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ye(this.firestore,e,this._key)}}class Ar extends Yi{constructor(e,t,r){super(e,t,jo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ye(this.firestore,null,new q(e))}withConverter(e){return new Ar(this.firestore,e,this._path)}}function $v(n,e,...t){if(n=Ee(n),arguments.length===1&&(e=Eu.newId()),Fv("doc","path",e),n instanceof ia){const r=he.fromString(e,...t);return El(r),new Ye(n,null,new q(r))}{if(!(n instanceof Ye||n instanceof Ar))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(he.fromString(e,...t));return El(r),new Ye(n.firestore,n instanceof Ar?n.converter:null,new q(r))}}/**
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
 */class Tl{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new th(this,"async_queue_retry"),this.Vu=()=>{const r=js();r&&F("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=js();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=js();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new tn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Dr(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw bt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Zo.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function wl(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Rr extends ia{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Tl,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tl(e),this._firestoreClient=void 0,await e}}}function Bv(n,e){const t=typeof n=="object"?n:hu(),r=typeof n=="string"?n:"(default)",i=Do(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=wp("firestore");s&&jv(i,...s)}return i}function sa(n){if(n._terminated)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||qv(n),n._firestoreClient}function qv(n){var e,t,r;const i=n._freezeSettings(),s=function(l,u,d,f){return new gm(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,_h(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Mv(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l?._online.build();return{_offline:l?._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Mn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mn(Re.fromBase64String(e))}catch(t){throw new B(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Mn(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ji{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new we(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class oa{constructor(e){this._methodName=e}}/**
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
 */class aa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
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
 */class ca{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const zv=/^__.*__$/;class Hv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ht(e,this.data,this.fieldMask,t,this.fieldTransforms):new Vr(e,this.data,t,this.fieldTransforms)}}class yh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ht(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function bh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class la{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new la(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Di(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(bh(this.Cu)&&zv.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Gv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Wi(e)}Qu(e,t,r,i=!1){return new la({Cu:e,methodName:t,qu:r,path:we.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Eh(n){const e=n._freezeSettings(),t=Wi(n._databaseId);return new Gv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ih(n,e,t,r,i,s={}){const a=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);ua("Data must be an object, but it was:",a,r);const l=Th(r,a);let u,d;if(s.merge)u=new Ge(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const v=_o(e,g,t);if(!a.contains(v))throw new B(V.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Ah(f,v)||f.push(v)}u=new Ge(f),d=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=a.fieldTransforms;return new Hv(new qe(l),u,d)}class Xi extends oa{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xi}}function Wv(n,e,t,r){const i=n.Qu(1,e,t);ua("Data must be an object, but it was:",i,r);const s=[],a=qe.empty();pn(r,(u,d)=>{const f=ha(e,u,t);d=Ee(d);const g=i.Nu(f);if(d instanceof Xi)s.push(f);else{const v=Zi(d,g);v!=null&&(s.push(f),a.set(f,v))}});const l=new Ge(s);return new yh(a,l,i.fieldTransforms)}function Kv(n,e,t,r,i,s){const a=n.Qu(1,e,t),l=[_o(e,r,t)],u=[i];if(s.length%2!=0)throw new B(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<s.length;v+=2)l.push(_o(e,s[v])),u.push(s[v+1]);const d=[],f=qe.empty();for(let v=l.length-1;v>=0;--v)if(!Ah(d,l[v])){const E=l[v];let T=u[v];T=Ee(T);const P=a.Nu(E);if(T instanceof Xi)d.push(E);else{const k=Zi(T,P);k!=null&&(d.push(E),f.set(E,k))}}const g=new Ge(d);return new yh(f,g,a.fieldTransforms)}function Zi(n,e){if(wh(n=Ee(n)))return ua("Unsupported field value:",e,n),Th(n,e);if(n instanceof oa)return function(r,i){if(!bh(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=Zi(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Um(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ge.fromDate(r);return{timestampValue:Ci(i.serializer,s)}}if(r instanceof ge){const s=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ci(i.serializer,s)}}if(r instanceof aa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mn)return{bytesValue:Gu(i.serializer,r._byteString)};if(r instanceof Ye){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ho(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ca)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return $o(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ra(r)}`)}(n,e)}function Th(n,e){const t={};return Iu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pn(n,(r,i)=>{const s=Zi(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function wh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ge||n instanceof aa||n instanceof Mn||n instanceof Ye||n instanceof oa||n instanceof ca)}function ua(n,e,t){if(!wh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=ra(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function _o(n,e,t){if((e=Ee(e))instanceof Ji)return e._internalPath;if(typeof e=="string")return ha(n,e);throw Di("Field path arguments must be of type string or ",n,!1,void 0,t)}const Qv=new RegExp("[~\\*/\\[\\]]");function ha(n,e,t){if(e.search(Qv)>=0)throw Di(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ji(...e.split("."))._internalPath}catch{throw Di(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Di(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new B(V.INVALID_ARGUMENT,l+n+u)}function Ah(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Rh{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Yv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Sh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Yv extends Rh{data(){return super.data()}}function Sh(n,e){return typeof e=="string"?ha(n,e):e instanceof Ji?e._internalPath:e._delegate._internalPath}/**
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
 */function Jv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xv{convertValue(e,t="none"){switch(un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ln(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return pn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>pe(a.doubleValue));return new ca(s)}convertGeoPoint(e){return new aa(pe(e.latitude),pe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=xo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(br(e));default:return null}}convertTimestamp(e){const t=qt(e);return new ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=he.fromString(e);re(Xu(r));const i=new Er(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(t)||bt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */class dr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ch extends Rh{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new gi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Sh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class gi extends Ch{data(e={}){return super.data(e)}}class Zv{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new dr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new gi(this._firestore,this._userDataWriter,r.key,r,new dr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new gi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new dr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new gi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new dr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:e_(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function e_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class kh extends Xv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ye(this.firestore,null,t)}}function t_(n,e,t){n=nn(n,Ye);const r=nn(n.firestore,Rr),i=Ph(n.converter,e,t);return Nh(r,[Ih(Eh(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Qe.none())])}function n_(n,...e){var t,r,i;n=Ee(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||wl(e[a])||(s=e[a],a++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(wl(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let u,d,f;if(n instanceof Ye)d=nn(n.firestore,Rr),f=jo(n._key.path),u={next:g=>{e[a]&&e[a](r_(d,n,g))},error:e[a+1],complete:e[a+2]};else{const g=nn(n,Yi);d=nn(g.firestore,Rr),f=g._query;const v=new kh(d);u={next:E=>{e[a]&&e[a](new Zv(d,v,g,E))},error:e[a+1],complete:e[a+2]},Jv(n._query)}return function(v,E,T,P){const k=new Ov(P),L=new gv(E,k,T);return v.asyncQueue.enqueueAndForget(async()=>dv(await yl(v),L)),()=>{k.Za(),v.asyncQueue.enqueueAndForget(async()=>pv(await yl(v),L))}}(sa(d),f,l,u)}function Nh(n,e){return function(r,i){const s=new tn;return r.asyncQueue.enqueueAndForget(async()=>Rv(await Lv(r),i,s)),s.promise}(sa(n),e)}function r_(n,e,t){const r=t.docs.get(e._key),i=new kh(n);return new Ch(n,i,e._key,r,new dr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class i_{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Eh(e)}set(e,t,r){this._verifyNotCommitted();const i=Bs(e,this._firestore),s=Ph(i.converter,t,r),a=Ih(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,Qe.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Bs(e,this._firestore);let a;return a=typeof(t=Ee(t))=="string"||t instanceof Ji?Kv(this._dataReader,"WriteBatch.update",s._key,t,r,i):Wv(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(a.toMutation(s._key,Qe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Bs(e,this._firestore);return this._mutations=this._mutations.concat(new Bo(t._key,Qe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Bs(n,e){if((n=Ee(n)).firestore!==e)throw new B(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function s_(n){return sa(n=nn(n,Rr)),new i_(n,e=>Nh(n,e))}(function(e,t=!0){(function(i){jn=i})(Un),Pn(new an("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Rr(new tm(r.getProvider("auth-internal")),new sm(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new B(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Er(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ut(Bc,"4.7.3",e),Ut(Bc,"4.7.3","esm2017")})();function da(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Dh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const o_=Dh,Vh=new Cr("auth","Firebase",Dh());/**
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
 */const Vi=new ko("@firebase/auth");function a_(n,...e){Vi.logLevel<=X.WARN&&Vi.warn(`Auth (${Un}): ${n}`,...e)}function vi(n,...e){Vi.logLevel<=X.ERROR&&Vi.error(`Auth (${Un}): ${n}`,...e)}/**
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
 */function ct(n,...e){throw fa(n,...e)}function et(n,...e){return fa(n,...e)}function pa(n,e,t){const r=Object.assign(Object.assign({},o_()),{[e]:t});return new Cr("auth","Firebase",r).create(e,{appName:n.name})}function jt(n){return pa(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Oh(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ct(n,"argument-error"),pa(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Vh.create(n,...e)}function H(n,e,...t){if(!n)throw fa(e,...t)}function gt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw vi(e),new Error(e)}function It(n,e){n||gt(e)}/**
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
 */function yo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function c_(){return Al()==="http:"||Al()==="https:"}function Al(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function l_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(c_()||kp()||"connection"in navigator)?navigator.onLine:!0}function u_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Lr{constructor(e,t){this.shortDelay=e,this.longDelay=t,It(t>e,"Short delay should be less than long delay!"),this.isMobile=Sp()||Np()}get(){return l_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ma(n,e){It(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Mh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const h_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const d_=new Lr(3e4,6e4);function ga(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function qn(n,e,t,r,i={}){return xh(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=kr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},s);return Cp()||(d.referrerPolicy="no-referrer"),Mh.fetch()(Lh(n,n.config.apiHost,t,l),d)})}async function xh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},h_),e);try{const i=new f_(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ui(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ui(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ui(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ui(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw pa(n,f,d);ct(n,f)}}catch(i){if(i instanceof wt)throw i;ct(n,"network-request-failed",{message:String(i)})}}async function p_(n,e,t,r,i={}){const s=await qn(n,e,t,r,i);return"mfaPendingCredential"in s&&ct(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Lh(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?ma(n.config,i):`${n.config.apiScheme}://${i}`}class f_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),d_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ui(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=et(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function m_(n,e){return qn(n,"POST","/v1/accounts:delete",e)}async function Fh(n,e){return qn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function vr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function g_(n,e=!1){const t=Ee(n),r=await t.getIdToken(e),i=va(r);H(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:vr(qs(i.auth_time)),issuedAtTime:vr(qs(i.iat)),expirationTime:vr(qs(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function qs(n){return Number(n)*1e3}function va(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return vi("JWT malformed, contained fewer than 3 sections"),null;try{const i=iu(t);return i?JSON.parse(i):(vi("Failed to decode base64 JWT payload"),null)}catch(i){return vi("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Rl(n){const e=va(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Sr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof wt&&v_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function v_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class __{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=vr(this.lastLoginAt),this.creationTime=vr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Oi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Sr(n,Fh(t,{idToken:r}));H(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Uh(s.providerUserInfo):[],l=b_(n.providerData,a),u=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!l?.length,f=u?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new bo(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function y_(n){const e=Ee(n);await Oi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function b_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Uh(n){return n.map(e=>{var{providerId:t}=e,r=da(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function E_(n,e){const t=await xh(n,{},async()=>{const r=kr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Lh(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Mh.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function I_(n,e){return qn(n,"POST","/v2/accounts:revokeToken",ga(n,e))}/**
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
 */class wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=Rl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await E_(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new wn;return r&&(H(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wn,this.toJSON())}_performRefresh(){return gt("not implemented")}}/**
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
 */function Ct(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class vt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=da(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new __(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Sr(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return g_(this,e)}reload(){return y_(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Oi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(jt(this.auth));const e=await this.getIdToken();return await Sr(this,m_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,u,d,f;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(i=t.email)!==null&&i!==void 0?i:void 0,E=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,T=(a=t.photoURL)!==null&&a!==void 0?a:void 0,P=(l=t.tenantId)!==null&&l!==void 0?l:void 0,k=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,L=(d=t.createdAt)!==null&&d!==void 0?d:void 0,j=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:U,emailVerified:$,isAnonymous:Q,providerData:M,stsTokenManager:w}=t;H(U&&w,e,"internal-error");const y=wn.fromJSON(this.name,w);H(typeof U=="string",e,"internal-error"),Ct(g,e.name),Ct(v,e.name),H(typeof $=="boolean",e,"internal-error"),H(typeof Q=="boolean",e,"internal-error"),Ct(E,e.name),Ct(T,e.name),Ct(P,e.name),Ct(k,e.name),Ct(L,e.name),Ct(j,e.name);const b=new vt({uid:U,auth:e,email:v,emailVerified:$,displayName:g,isAnonymous:Q,photoURL:T,phoneNumber:E,tenantId:P,stsTokenManager:y,createdAt:L,lastLoginAt:j});return M&&Array.isArray(M)&&(b.providerData=M.map(I=>Object.assign({},I))),k&&(b._redirectEventId=k),b}static async _fromIdTokenResponse(e,t,r=!1){const i=new wn;i.updateFromServerResponse(t);const s=new vt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Oi(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];H(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Uh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,l=new wn;l.updateFromIdToken(r);const u=new vt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new bo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(u,d),u}}/**
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
 */const Sl=new Map;function _t(n){It(n instanceof Function,"Expected a class definition");let e=Sl.get(n);return e?(It(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Sl.set(n,e),e)}/**
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
 */class jh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jh.type="NONE";const Pl=jh;/**
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
 */function _i(n,e,t){return`firebase:${n}:${e}:${t}`}class An{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_i(this.userKey,i.apiKey,s),this.fullPersistenceKey=_i("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new An(_t(Pl),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||_t(Pl);const a=_i(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const f=await d._get(a);if(f){const g=vt._fromJSON(e,f);d!==s&&(l=g),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new An(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new An(s,e,r))}}/**
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
 */function Cl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($h(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gh(e))return"Blackberry";if(Wh(e))return"Webos";if(Bh(e))return"Safari";if((e.includes("chrome/")||qh(e))&&!e.includes("edge/"))return"Chrome";if(Hh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function $h(n=Le()){return/firefox\//i.test(n)}function Bh(n=Le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qh(n=Le()){return/crios\//i.test(n)}function zh(n=Le()){return/iemobile/i.test(n)}function Hh(n=Le()){return/android/i.test(n)}function Gh(n=Le()){return/blackberry/i.test(n)}function Wh(n=Le()){return/webos/i.test(n)}function _a(n=Le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function T_(n=Le()){var e;return _a(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function w_(){return Dp()&&document.documentMode===10}function Kh(n=Le()){return _a(n)||Hh(n)||Wh(n)||Gh(n)||/windows phone/i.test(n)||zh(n)}/**
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
 */function Qh(n,e=[]){let t;switch(n){case"Browser":t=Cl(Le());break;case"Worker":t=`${Cl(Le())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Un}/${r}`}/**
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
 */class A_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function R_(n,e={}){return qn(n,"GET","/v2/passwordPolicy",ga(n,e))}/**
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
 */const S_=6;class P_{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:S_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class C_{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kl(this),this.idTokenSubscription=new kl(this),this.beforeStateQueue=new A_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_t(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await An.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Fh(this,{idToken:e}),r=await vt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(tt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Oi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=u_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tt(this.app))return Promise.reject(jt(this));const t=e?Ee(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tt(this.app)?Promise.reject(jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await R_(this),t=new P_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Cr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await I_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_t(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await An.create(this,[_t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&a_(`Error while retrieving App Check token: ${t.error}`),t?.token}}function zn(n){return Ee(n)}class kl{constructor(e){this.auth=e,this.observer=null,this.addObserver=jp(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ya={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function k_(n){ya=n}function N_(n){return ya.loadJS(n)}function D_(){return ya.gapiScript}function V_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function O_(n,e){const t=Do(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Ii(s,e??{}))return i;ct(i,"already-initialized")}return t.initialize({options:e})}function M_(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(_t);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function x_(n,e,t){const r=zn(n);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Yh(e),{host:a,port:l}=L_(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),F_()}function Yh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function L_(n){const e=Yh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nl(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Nl(a)}}}function Nl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function F_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Jh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gt("not implemented")}_getIdTokenResponse(e){return gt("not implemented")}_linkToIdToken(e,t){return gt("not implemented")}_getReauthenticationResolver(e){return gt("not implemented")}}/**
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
 */async function Rn(n,e){return p_(n,"POST","/v1/accounts:signInWithIdp",ga(n,e))}/**
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
 */const U_="http://localhost";class hn extends Jh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ct("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=da(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new hn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Rn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Rn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Rn(e,t)}buildRequest(){const e={requestUri:U_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=kr(t)}return e}}/**
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
 */class es{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fr extends es{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dt extends Fr{constructor(){super("facebook.com")}static credential(e){return hn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dt.PROVIDER_ID="facebook.com";/**
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
 */class mt extends Fr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hn._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return mt.credential(t,r)}catch{return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com";mt.PROVIDER_ID="google.com";/**
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
 */class Vt extends Fr{constructor(){super("github.com")}static credential(e){return hn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.GITHUB_SIGN_IN_METHOD="github.com";Vt.PROVIDER_ID="github.com";/**
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
 */class Ot extends Fr{constructor(){super("twitter.com")}static credential(e,t){return hn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ot.credential(t,r)}catch{return null}}}Ot.TWITTER_SIGN_IN_METHOD="twitter.com";Ot.PROVIDER_ID="twitter.com";/**
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
 */class xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await vt._fromIdTokenResponse(e,r,i),a=Dl(r);return new xn({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Dl(r);return new xn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Dl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Mi extends wt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Mi(e,t,r,i)}}function Xh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mi._fromErrorAndOperation(n,s,e,r):s})}async function j_(n,e,t=!1){const r=await Sr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xn._forOperation(n,"link",r)}/**
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
 */async function $_(n,e,t=!1){const{auth:r}=n;if(tt(r.app))return Promise.reject(jt(r));const i="reauthenticate";try{const s=await Sr(n,Xh(r,i,e,n),t);H(s.idToken,r,"internal-error");const a=va(s.idToken);H(a,r,"internal-error");const{sub:l}=a;return H(n.uid===l,r,"user-mismatch"),xn._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&ct(r,"user-mismatch"),s}}/**
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
 */async function B_(n,e,t=!1){if(tt(n.app))return Promise.reject(jt(n));const r="signIn",i=await Xh(n,r,e),s=await xn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}/**
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
 */function Vl(n,e){return Ee(n).setPersistence(e)}function q_(n,e,t,r){return Ee(n).onIdTokenChanged(e,t,r)}function z_(n,e,t){return Ee(n).beforeAuthStateChanged(e,t)}function H_(n,e,t,r){return Ee(n).onAuthStateChanged(e,t,r)}function G_(n){return Ee(n).signOut()}const xi="__sak";/**
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
 */class Zh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xi,"1"),this.storage.removeItem(xi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const W_=1e3,K_=10;class ed extends Zh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);w_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,K_):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},W_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ed.type="LOCAL";const td=ed;/**
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
 */class nd extends Zh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}nd.type="SESSION";const rd=nd;/**
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
 */function Q_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ts{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ts(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(t.origin,s)),u=await Q_(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ts.receivers=[];/**
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
 */function ba(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Y_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const d=ba("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(v.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function st(){return window}function J_(n){st().location.href=n}/**
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
 */function id(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function X_(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z_(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ey(){return id()?self:null}/**
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
 */const sd="firebaseLocalStorageDb",ty=1,Li="firebaseLocalStorage",od="fbase_key";class Ur{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ns(n,e){return n.transaction([Li],e?"readwrite":"readonly").objectStore(Li)}function ny(){const n=indexedDB.deleteDatabase(sd);return new Ur(n).toPromise()}function Eo(){const n=indexedDB.open(sd,ty);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Li,{keyPath:od})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Li)?e(r):(r.close(),await ny(),e(await Eo()))})})}async function Ol(n,e,t){const r=ns(n,!0).put({[od]:e,value:t});return new Ur(r).toPromise()}async function ry(n,e){const t=ns(n,!1).get(e),r=await new Ur(t).toPromise();return r===void 0?null:r.value}function Ml(n,e){const t=ns(n,!0).delete(e);return new Ur(t).toPromise()}const iy=800,sy=3;class ad{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Eo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>sy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return id()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ts._getInstance(ey()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await X_(),!this.activeServiceWorker)return;this.sender=new Y_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Eo();return await Ol(e,xi,"1"),await Ml(e,xi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ol(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ry(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ml(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ns(i,!1).getAll();return new Ur(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ad.type="LOCAL";const cd=ad;new Lr(3e4,6e4);/**
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
 */function Ea(n,e){return e?_t(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ia extends Jh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Rn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oy(n){return B_(n.auth,new Ia(n),n.bypassAuthState)}function ay(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),$_(t,new Ia(n),n.bypassAuthState)}async function cy(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),j_(t,new Ia(n),n.bypassAuthState)}/**
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
 */class ld{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oy;case"linkViaPopup":case"linkViaRedirect":return cy;case"reauthViaPopup":case"reauthViaRedirect":return ay;default:ct(this.auth,"internal-error")}}resolve(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ly=new Lr(2e3,1e4);async function uy(n,e,t){if(tt(n.app))return Promise.reject(et(n,"operation-not-supported-in-this-environment"));const r=zn(n);Oh(n,e,es);const i=Ea(r,t);return new Zt(r,"signInViaPopup",e,i).executeNotNull()}class Zt extends ld{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zt.currentPopupAction&&Zt.currentPopupAction.cancel(),Zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){It(this.filter.length===1,"Popup operations only handle one event");const e=ba();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ly.get())};e()}}Zt.currentPopupAction=null;/**
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
 */const hy="pendingRedirect",yi=new Map;class dy extends ld{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=yi.get(this.auth._key());if(!e){try{const r=await py(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}yi.set(this.auth._key(),e)}return this.bypassAuthState||yi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function py(n,e){const t=hd(e),r=ud(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function fy(n,e){return ud(n)._set(hd(e),"true")}function my(n,e){yi.set(n._key(),e)}function ud(n){return _t(n._redirectPersistence)}function hd(n){return _i(hy,n.config.apiKey,n.name)}/**
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
 */function gy(n,e,t){return vy(n,e,t)}async function vy(n,e,t){if(tt(n.app))return Promise.reject(jt(n));const r=zn(n);Oh(n,e,es),await r._initializationPromise;const i=Ea(r,t);return await fy(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function _y(n,e){return await zn(n)._initializationPromise,dd(n,e,!1)}async function dd(n,e,t=!1){if(tt(n.app))return Promise.reject(jt(n));const r=zn(n),i=Ea(r,e),a=await new dy(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const yy=10*60*1e3;class by{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ey(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!pd(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(et(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yy&&this.cachedEventUids.clear(),this.cachedEventUids.has(xl(e))}saveEventToCache(e){this.cachedEventUids.add(xl(e)),this.lastProcessedEventTime=Date.now()}}function xl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function pd({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Ey(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pd(n);default:return!1}}/**
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
 */async function Iy(n,e={}){return qn(n,"GET","/v1/projects",e)}/**
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
 */const Ty=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wy=/^https?/;async function Ay(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Iy(n);for(const t of e)try{if(Ry(t))return}catch{}ct(n,"unauthorized-domain")}function Ry(n){const e=yo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!wy.test(t))return!1;if(Ty.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Sy=new Lr(3e4,6e4);function Ll(){const n=st().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Py(n){return new Promise((e,t)=>{var r,i,s;function a(){Ll(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ll(),t(et(n,"network-request-failed"))},timeout:Sy.get()})}if(!((i=(r=st().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=st().gapi)===null||s===void 0)&&s.load)a();else{const l=V_("iframefcb");return st()[l]=()=>{gapi.load?a():t(et(n,"network-request-failed"))},N_(`${D_()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw bi=null,e})}let bi=null;function Cy(n){return bi=bi||Py(n),bi}/**
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
 */const ky=new Lr(5e3,15e3),Ny="__/auth/iframe",Dy="emulator/auth/iframe",Vy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Oy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function My(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ma(e,Dy):`https://${n.config.authDomain}/${Ny}`,r={apiKey:e.apiKey,appName:n.name,v:Un},i=Oy.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${kr(r).slice(1)}`}async function xy(n){const e=await Cy(n),t=st().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:My(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vy,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=et(n,"network-request-failed"),l=st().setTimeout(()=>{s(a)},ky.get());function u(){st().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const Ly={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fy=500,Uy=600,jy="_blank",$y="http://localhost";class Fl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function By(n,e,t,r=Fy,i=Uy){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Ly),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Le().toLowerCase();t&&(l=qh(d)?jy:t),$h(d)&&(e=e||$y,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[E,T])=>`${v}${E}=${T},`,"");if(T_(d)&&l!=="_self")return qy(e||"",l),new Fl(null);const g=window.open(e||"",l,f);H(g,n,"popup-blocked");try{g.focus()}catch{}return new Fl(g)}function qy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const zy="__/auth/handler",Hy="emulator/auth/handler",Gy=encodeURIComponent("fac");async function Ul(n,e,t,r,i,s){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Un,eventId:i};if(e instanceof es){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Up(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof Fr){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),d=u?`#${Gy}=${encodeURIComponent(u)}`:"";return`${Wy(n)}?${kr(l).slice(1)}${d}`}function Wy({config:n}){return n.emulator?ma(n,Hy):`https://${n.authDomain}/${zy}`}/**
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
 */const zs="webStorageSupport";class Ky{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rd,this._completeRedirectFn=dd,this._overrideRedirectResult=my}async _openPopup(e,t,r,i){var s;It((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Ul(e,t,r,yo(),i);return By(e,a,ba())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Ul(e,t,r,yo(),i);return J_(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(It(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await xy(e),r=new by(e);return t.register("authEvent",i=>(H(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zs,{type:zs},i=>{var s;const a=(s=i?.[0])===null||s===void 0?void 0:s[zs];a!==void 0&&t(!!a),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ay(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Kh()||Bh()||_a()}}const Qy=Ky;var jl="@firebase/auth",$l="1.7.9";/**
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
 */class Yy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Jy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Xy(n){Pn(new an("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;H(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qh(n)},d=new C_(r,i,s,u);return M_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Pn(new an("auth-internal",e=>{const t=zn(e.getProvider("auth").getImmediate());return(r=>new Yy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(jl,$l,Jy(n)),Ut(jl,$l,"esm2017")}/**
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
 */const Zy=5*60,eb=au("authIdTokenMaxAge")||Zy;let Bl=null;const tb=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>eb)return;const i=t?.token;Bl!==i&&(Bl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nb(n=hu()){const e=Do(n,"auth");if(e.isInitialized())return e.getImmediate();const t=O_(n,{popupRedirectResolver:Qy,persistence:[cd,td,rd]}),r=au("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=tb(s.toString());z_(t,a,()=>a(t.currentUser)),q_(t,l=>a(l))}}const i=su("auth");return i&&x_(t,`http://${i}`),t}function rb(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}k_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=et("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",rb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Xy("Browser");const ib={apiKey:"AIzaSyDkWI1TU4an6qu8cQbt5Xsk4OKrQ-eiITI",authDomain:"ruben-dashboard.firebaseapp.com",projectId:"ruben-dashboard",storageBucket:"ruben-dashboard.firebasestorage.app",messagingSenderId:"40452541202",appId:"1:40452541202:web:bc5ad8cc712773fae181cb"},fd=uu(ib),md=Bv(fd),dn=nb(fd),Io=new mt;Io.setCustomParameters({prompt:"select_account"});Vl(dn,cd).catch(()=>Vl(dn,td)).catch(n=>console.error("Persistencia Firebase Auth falló:",n));function sb(n){return H_(dn,n)}async function ob(n=()=>{}){n("Abriendo Google…");try{await uy(dn,Io),n("")}catch(e){if(e.code==="auth/popup-blocked"){n("Popup bloqueado, redirigiendo…");try{await gy(dn,Io)}catch(t){n("⚠ "+(t.code||t.message),!0)}}else e.code==="auth/cancelled-popup-request"||e.code==="auth/popup-closed-by-user"?n(""):n("⚠ "+(e.code||e.message),!0)}}async function ab(n=()=>{}){try{await _y(dn)&&n("✓ Sesión recibida…")}catch(e){n("⚠ "+(e.code||e.message),!0)}}async function cb(){await G_(dn)}const ve=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,5);function c(n,e={},t=[]){const[r,...i]=n.split("."),s=document.createElement(r||"div");i.length&&(s.className=i.join(" "));for(const[l,u]of Object.entries(e||{}))if(!(u==null||u===!1))if(l==="class")s.className=s.className?s.className+" "+u:u;else if(l==="html")s.innerHTML=u;else if(l==="dataset")Object.assign(s.dataset,u);else if(l.startsWith("on")&&typeof u=="function")s.addEventListener(l.slice(2).toLowerCase(),u);else if(l in s&&l!=="list")try{s[l]=u}catch{s.setAttribute(l,u)}else s.setAttribute(l,u);const a=Array.isArray(t)?t:[t];for(const l of a)l==null||l===!1||s.append(l.nodeType?l:document.createTextNode(String(l)));return s}function Tt(n){for(;n.firstChild;)n.removeChild(n.firstChild)}const lb=new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}),N=n=>lb.format(Number(n)||0),be=(n,e=2)=>(Number(n)||0).toLocaleString("es-ES",{maximumFractionDigits:e}),ne=()=>{const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`},Ln=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];function rn(n){if(!n)return null;const e=new Date(ne()+"T00:00:00"),t=new Date(n+"T00:00:00");return Math.round((t-e)/864e5)}const ub=()=>document.getElementById("metaTheme");function hb(){localStorage.getItem("tema_v2")==="light"&&document.documentElement.classList.add("light"),gd()}function db(){const n=document.documentElement.classList.toggle("light");localStorage.setItem("tema_v2",n?"light":"dark"),gd()}function gd(){const n=document.documentElement.classList.contains("light"),e=ub();e&&e.setAttribute("content",n?"#f4f1ec":"#09090b")}function Sn(n){const e=document.getElementById("syncDot");e&&(e.className="sync-dot"+(n?" "+n:""),n==="ok"&&setTimeout(()=>{e.classList.contains("ok")&&(e.className="sync-dot")},1500))}function O(n,e=""){const t=document.getElementById("toastHost");if(!t)return;const r=c("div.toast"+(e?"."+e:""),{},n);t.append(r),setTimeout(()=>{r.style.opacity="0",setTimeout(()=>r.remove(),200)},e==="err"?3500:2200)}function pb(n,e,t){const r=document.getElementById("appNav");Tt(r);for(const i of n)r.append(c("button.nav-item"+(i.id===e?".active":""),{onclick:()=>t(i.id)},[c("span.nav-icon",{},i.icono),c("span.nav-label",{},i.label)]))}function oe(n,e){const t=c("div.modal-backdrop"),r=()=>t.remove();t.addEventListener("click",s=>{s.target===t&&r()});const i=typeof e=="function"?e(r):e;return t.append(c("div.modal",{},[c("div.modal-title",{},n),i])),document.body.append(t),r}let Fn=null;const nt={},Mt={};function ql(n){if(n!==Fn){for(const e of Object.keys(Mt)){try{Mt[e].unsub()}catch{}delete Mt[e]}for(const e of Object.keys(nt))delete nt[e];Fn=n||null}}function Ta(n){return $v(md,"users",Fn,"modulos",n)}function Y(n){return n in nt?nt[n]:null}async function ie(n,e){if(!Fn)throw new Error("sin sesión");nt[n]=e,Sn("syncing");try{await t_(Ta(n),{data:JSON.stringify(e),ts:Date.now()}),Sn("ok")}catch(t){throw Sn("err"),console.error("store.save",n,t),t}}async function jr(n){if(!Fn)throw new Error("sin sesión");const e=s_(md),t=Date.now();for(const[r,i]of Object.entries(n))nt[r]=i,e.set(Ta(r),{data:JSON.stringify(i),ts:t});Sn("syncing");try{await e.commit(),Sn("ok")}catch(r){throw Sn("err"),console.error("store.saveMany",r),r}}function Be(n,e){if(!Fn)return()=>{};if(!Mt[n]){const t=new Set,r=n_(Ta(n),i=>{nt[n]=i.exists()?JSON.parse(i.data().data):null;for(const s of t)try{s(nt[n])}catch(a){console.error(a)}},i=>console.error("store.subscribe",n,i));Mt[n]={unsub:r,listeners:t}}if(Mt[n].listeners.add(e),n in nt)try{e(nt[n])}catch(t){console.error(t)}return()=>{const t=Mt[n];if(t&&(t.listeners.delete(e),t.listeners.size===0)){try{t.unsub()}catch{}delete Mt[n]}}}const vd=15e3,zl=15,Hl=12.5;function fb(n){const[e,t]=n.split("-");return`${e}-${parseInt(t,10)-1}`}function _d(){const n=new Date;return`${n.getFullYear()}-${n.getMonth()}`}function To(n,e){return n&&n[e]||[]}function wo(n){return(n||[]).reduce((e,t)=>e+(Number(t.importe)||0),0)}function Gl(n){return(n||[]).reduce((e,t)=>(e[t.tipo]=(e[t.tipo]||0)+(Number(t.importe)||0),e),{})}function mb(n){const t=(n||[]).map(r=>{const i=(r.trabajos||[]).filter(s=>!s.pagado);return{id:r.id,nombre:r.nombre,nPend:i.length,importe:i.reduce((s,a)=>s+(Number(a.importe)||0),0)}}).filter(r=>r.nPend>0);return{porTrab:t,total:t.reduce((r,i)=>r+i.importe,0)}}const In=n=>Number(n)||0,yd={camper:["Diseño y presupuesto","Compra de materiales","Desmontaje y preparación","Aislamiento y suelo","Electricidad","Agua y fontanería","Panelado","Mobiliario","Acabados y tapicería","Homologación / ITV","Entrega"],carpinteria:["Medición y diseño","Presupuesto","Compra de material","Corte y mecanizado","Montaje en taller","Acabado (lijado/barniz/lacado)","Instalación en obra","Repasos","Entrega"],cnc:["Diseño / archivo CAD-CAM","Presupuesto","Preparación de material","Mecanizado CNC","Acabado y repasos","Control de calidad","Embalaje","Entrega"]},gb={tarifaVentaMO:40,margenMateriales:.2,iva:.21},wa=[["camper","Camper"],["carpinteria","Carpintería"],["cnc","CNC"]],rs=n=>(wa.find(([e])=>e===n)||[null,n])[1];function vb(n){const e=n?.trabajos_cfg||{};return{fases:{...yd,...e.fases||{}},params:{...gb,...e.params||{}}}}function _b(n,e){const t=vb(n).fases[e];return Array.isArray(t)&&t.length?t.slice():(yd[e]||[]).slice()}function yb(n,e){return _b(n,e).map(t=>({nombre:t,estado:"Pendiente",fechaPrevista:"",fechaFin:"",notas:""}))}function bd(n,e){if(!e)return[];const t=[];for(const r of n||[])for(const i of r.trabajos||[])i.proyectoId===e&&t.push({id:i.id,fecha:i.fecha||"",trabajador:r.nombre,trabajadorId:r.id,horas:i.horas??null,descripcion:i.descripcion||"",importe:In(i.importe),tipo:i.tipo,pagado:!!i.pagado});return t.sort((r,i)=>(r.fecha||"").localeCompare(i.fecha||"")),t}function Aa(n,e=[]){const t=n||{},r=(t.materiales||[]).reduce((E,T)=>E+In(T.costeReal??T.costeEstimado??0),0),i=(t.otrosGastos||[]).reduce((E,T)=>E+In(T.importe),0),s=bd(e,t.id).reduce((E,T)=>E+T.importe,0),a=r+s+i,l=(t.extras||[]).reduce((E,T)=>E+In(T.importe),0),u=In(t.ingresoPresupuestado)+l,d=u-a,f=u>0?d/u*100:0,g=(t.cobros||[]).reduce((E,T)=>E+In(T.importe),0),v=u-g;return{costeMateriales:r,costeManoObra:s,costeOtros:i,costeTotal:a,extras:l,ingresoTotal:u,resultado:d,margen:f,cobrado:g,pendienteCobro:v}}function Ra(n){const e=n?.fases||[];if(!e.length)return"";const t=e.find(r=>r.estado!=="Completada");return t?t.nombre:"Entregado"}const bb=["Pendiente","En curso","Completada"],Ed=["Pendiente","En curso","Hecha"],Eb=["Pendiente","Pedido","Recibido"],Sa="impuestos";function Id(n){return Object.entries(n||{}).filter(([e])=>e!==Sa).reduce((e,[,t])=>e+(Number(t)||0),0)}const Pa=[["inversiones","Inversiones"],["liquido","Líquido"],["negocios","Negocios"],["","Sin clasificar"]],Td=(n,e)=>n?.grupos_cuentas?.[e]||"";function Ib(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function Tb(n,e,t){const r=[];if(!n)return r;const[i,s,a]=e.split("-").map(Number),[l,u,d]=t.split("-").map(Number),f=new Date(i,s-1,a),g=new Date(l,u-1,d);if(!n.recurrente)return n.fecha&&n.fecha>=e&&n.fecha<=t&&r.push(n.fecha),r;const v=n.fechaInicio||e,E=n.fechaFin||t,[T,P,k]=v.split("-").map(Number),L=new Date(T,P-1,k),[j,U,$]=E.split("-").map(Number),Q=new Date(j,U-1,$),M=new Date(Math.max(L.getTime(),f.getTime())),w=new Date(Math.min(g.getTime(),Q.getTime()));if(n.frecuencia==="semanal"){const y=n.diaCobro!=null?n.diaCobro:1;for(;M<=w&&M.getDay()!==y;)M.setDate(M.getDate()+1);for(;M<=w;)r.push(M.toISOString().split("T")[0]),M.setDate(M.getDate()+7)}else if(n.frecuencia==="mensual"){const y=Math.max(1,Math.min(31,n.diaCobro||1));let b=M.getFullYear(),I=M.getMonth();for(;;){const A=new Date(b,I+1,0).getDate(),R=Math.min(y,A),_=new Date(b,I,R);if(_>w)break;if(_>=M){const ae=`${b}-${String(I+1).padStart(2,"0")}-${String(R).padStart(2,"0")}`;ae>=e&&ae<=t&&r.push(ae)}I++,I>11&&(I=0,b++)}}else if(n.frecuencia==="trimestral"||n.frecuencia==="anual"){const y=n.frecuencia==="anual"?12:3,b=n.diaCobro||L.getDate();let I=L.getFullYear(),A=L.getMonth();for(;;){const R=new Date(I,A+1,0).getDate(),_=Math.min(b,R),ae=new Date(I,A,_);if(ae>w)break;if(ae>=f&&ae>=L){const _e=`${I}-${String(A+1).padStart(2,"0")}-${String(_).padStart(2,"0")}`;_e<=t&&r.push(_e)}for(A+=y;A>=12;)A-=12,I++}}return r}function is(n,e,t){const r=[];return(n||[]).forEach(i=>{if(i.archivado)return;Tb(i,e,t).forEach(a=>{const l=(i.pagos||[]).find(u=>u.fecha===a);r.push({gastoId:i.id,concepto:i.concepto,importe:i.importe,categoria:i.categoria,metodo:i.metodo,fecha:a,pagado:!!l,pago:l,gastoRef:i})})}),r.sort((i,s)=>i.fecha.localeCompare(s.fecha)),r}const Hs=n=>n!=="personal",wb=["personal","empresa","combustible","material","otros"];function Wl(n){const e=Array.isArray(n?.categorias_gasto)?n.categorias_gasto:null,t=e&&e.length?e:wb,r=[];for(const i of["personal",...t]){const s=String(i??"").trim();s&&!r.includes(s)&&r.push(s)}return r}function Ab(n){const[e,t]=n.split("-").map(Number),r=Math.floor((t-1)/3)+1,i=(r-1)*3,s=new Date(e,i+3,0).getDate();return{anio:e,q:r,etiqueta:`Q${r} ${e}`,desde:`${e}-${String(i+1).padStart(2,"0")}-01`,hasta:`${e}-${String(i+3).padStart(2,"0")}-${String(s).padStart(2,"0")}`}}function Rb(n,e,t,r){const i=(r-1)*3,s=new Date(t,i+3,0).getDate(),a=`${t}-${String(i+1).padStart(2,"0")}-01`,l=`${t}-${String(i+3).padStart(2,"0")}-${String(s).padStart(2,"0")}`,u=M=>Number(M).toFixed(2),d=is(n||[],a,l).filter(M=>M.gastoRef?.deducible);let f=0,g=0;for(const M of d){const w=M.gastoRef||{};if(w.ivaSoportado!=null)f+=w.ivaSoportado,g+=w.baseImponible||M.importe-w.ivaSoportado;else{const y=(M.importe||0)/1.21;g+=y,f+=y*.21}}const E=(e||[]).filter(M=>M.fecha>=a&&M.fecha<=l),T=E.reduce((M,w)=>M+(w.ivaRepercutido||0),0),P=E.reduce((M,w)=>M+(w.baseImponible||0),0),k=T-f,L=P-g,j=Math.max(0,L*.2),$={1:"20 abril",2:"20 julio",3:"20 octubre",4:"20 enero"}[r]+(r===4?` ${t+1}`:` ${t}`),Q=d.some(M=>M.gastoRef&&M.gastoRef.tipoIVA==null);return{ok:!0,trimestre:`Q${r} ${t}`,rango:{desde:a,hasta:l},plazo:$,facturas:{cantidad:E.length,base:u(P),iva_repercutido:u(T),total:u(P+T)},gastos:{cantidad:d.length,base:u(g),iva_soportado:u(f),nota:Q?"Algunos gastos estimados al 21% (sin desglose IVA)":null},modelo_303:{repercutido:u(T),soportado:u(f),cuota:u(k),resultado:k>=0?`A INGRESAR ${u(k)}€`:`A DEVOLVER ${u(Math.abs(k))}€`},modelo_130:{base_ingresos:u(P),base_gastos:u(g),rendimiento:u(L),cuota:u(j),resultado:j>0?`A INGRESAR ${u(j)}€`:"Sin pago"},total_provisionar:`${u(Math.max(0,k)+j)}€`}}function Pr({cobrospagos:n,gastos:e,trabajadores:t,trabajos:r},i,s){const a=[];for(const l of n?.movimientos||[])!l.fecha||l.fecha<i||l.fecha>s||a.push({id:l.id,fecha:l.fecha,tipo:l.tipo,concepto:l.concepto||"",categoria:l.categoria||"",importe:Number(l.importe)||0,estado:l.estado||"previsto",notas:l.notas||"",origen:"manual",readonly:!1});for(const l of is(e||[],i,s))a.push({id:`g:${l.gastoId}:${l.fecha}`,fecha:l.fecha,tipo:"pago",concepto:l.concepto||"",categoria:l.categoria||"",importe:Number(l.importe)||0,estado:l.pagado?"realizado":"previsto",notas:"",origen:"gasto",readonly:!0});for(const l of t||[])for(const u of l.trabajos||[])u.pagado||!u.fecha||u.fecha<i||u.fecha>s||a.push({id:`w:${l.id}:${u.id}`,fecha:u.fecha,tipo:"pago",concepto:`${l.nombre}: ${u.descripcion||""}`.trim(),categoria:"trabajador",importe:Number(u.importe)||0,estado:"previsto",notas:"",origen:"trabajador",readonly:!0});for(const l of r||[]){if((l.estado||"activo")!=="activo"||!l.fechaEntrega||l.fechaEntrega<i||l.fechaEntrega>s)continue;const u=Aa(l,[]).pendienteCobro;u<=.005||a.push({id:`t:${l.id}`,fecha:l.fechaEntrega,tipo:"cobro",concepto:`Cobro previsto: ${l.nombre}`,categoria:"trabajo",importe:u,estado:"previsto",notas:"",origen:"trabajo",readonly:!0})}return a.sort((l,u)=>l.fecha.localeCompare(u.fecha)||l.origen.localeCompare(u.origen)),a}function ss(n){return(n||[]).reduce((e,t)=>e+(t.tipo==="cobro"?t.importe:-t.importe),0)}function Sb(n,e={}){n.append(c("h1.section-title",{},"Hoy"));const t=c("div");n.append(t);const r={tareas:null,trabajadores:null,trabajos:null,ingresos:null,config:null,cobrospagos:null,gastos:null,cargado:{}},i=()=>{Tt(t),t.append(Pb(r)),t.append(Vb(r,e)),t.append(Ob(r,e)),t.append(Db(r,e)),t.append(Mb(r)),t.append(xb())},s=[Be("tareas",a=>{r.tareas=a,r.cargado.tareas=!0,i()}),Be("trabajadores",a=>{r.trabajadores=a,r.cargado.trabajadores=!0,i()}),Be("trabajos",a=>{r.trabajos=a,r.cargado.trabajos=!0,i()}),Be("ingresos",a=>{r.ingresos=a,r.cargado.ingresos=!0,i()}),Be("config",a=>{r.config=a,r.cargado.config=!0,i()}),Be("cobrospagos",a=>{r.cobrospagos=a,r.cargado.cobrospagos=!0,i()}),Be("gastos",a=>{r.gastos=a,r.cargado.gastos=!0,i()})];return i(),()=>s.forEach(a=>a())}function Pb(n){const e=c("div.card");e.append(c("div.card-head",{},[c("h3",{},"Tareas"),c("button.link",{onclick:()=>Nb(n)},"+ Nueva")]));const r=(n.tareas||[]).filter(l=>!l.done),i=new Set,s=[],a=(l,u)=>{const d=u.filter(f=>!i.has(f.id));d.forEach(f=>i.add(f.id)),d.length&&s.push({titulo:l,items:d})};if(a("Vencidas",r.filter(l=>l.fecha&&rn(l.fecha)<0)),a("Urgentes",r.filter(l=>l.prioridad==="urgente")),a("Próximos 7 días",r.filter(l=>l.fecha&&rn(l.fecha)>=0&&rn(l.fecha)<=7)),!n.cargado.tareas)return e.append(c("div.spinner")),e;if(!s.length)return e.append(c("div.card-empty",{},"Sin tareas urgentes ni próximas")),e;for(const l of s){e.append(c("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:8px 0 2px;"},l.titulo));for(const u of l.items)e.append(Cb(u,n))}return e}function Cb(n,e){const t=n.fecha?rn(n.fecha):null,r=n.fecha?t<0?c("span.chip.venc",{},`${Math.abs(t)}d tarde`):t===0?c("span.chip.urgente",{},"hoy"):c("span.chip",{},`${t}d`):null,i=c("button.check",{title:"Completar",onclick:async()=>{await kb(n.id,e)}},"✓");return c("div.row",{},[i,c("div.row-main",{},[c("div.row-label",{},n.titulo||"(sin título)"),c("div.row-sub",{},[n.prioridad==="urgente"?c("span.chip.urgente",{},"urgente"):null,n.prioridad==="baja"?c("span.chip.baja",{},"baja"):null,r].filter(Boolean))])])}async function kb(n,e){const t=(e.tareas||[]).slice(),r=t.find(i=>i.id===n);if(r){r.done=!0;try{await ie("tareas",t),O("Tarea completada","ok")}catch{O("No se pudo guardar","err")}}}function Nb(n){oe("Nueva tarea",e=>{const t=c("input",{placeholder:"Título",autofocus:!0}),r=c("select",{},[c("option",{value:"normal"},"Normal"),c("option",{value:"urgente"},"Urgente"),c("option",{value:"baja"},"Baja")]),i=c("input",{type:"date"}),s=async()=>{if(!t.value.trim()){O("Falta el título","err");return}const a={id:ve(),titulo:t.value.trim(),desc:"",proyectoId:"personal",prioridad:r.value,fecha:i.value||"",notas:"",done:!1},l=(n.tareas||[]).slice();l.push(a);try{await ie("tareas",l),O("Tarea creada","ok"),e()}catch{O("No se pudo guardar","err")}};return c("div",{},[Gs("Título",t),c("div.field-grid",{},[Gs("Prioridad",r),Gs("Fecha",i)]),c("div.btn-row",{},[c("button.btn",{onclick:e},"Cancelar"),c("button.btn.btn-primary",{onclick:s},"Crear")])])})}function Db(n,e){const t=c("div.card");if(t.append(c("div.card-head",{},[c("h3",{},"Pagos pendientes"),e.nav?c("button.link",{onclick:()=>e.nav("equipo")},"Equipo →"):null])),!n.cargado.trabajadores)return t.append(c("div.spinner")),t;const{porTrab:r,total:i}=mb(n.trabajadores);if(!r.length)return t.append(c("div.card-empty",{},"Nada pendiente de pago")),t;t.append(c("div.hero",{},[c("div.hero-label",{},"Total pendiente"),c("div.hero-value",{},N(i))]));for(const s of r)t.append(c("div.row",{},[c("div.row-main",{},[c("div.row-label",{},s.nombre),c("div.row-sub",{},`${s.nPend} trabajo${s.nPend===1?"":"s"}`)]),c("div.row-right",{},c("span.amount.pend",{},N(s.importe)))]));return t}function Vb(n,e){const t=c("div.card");if(t.append(c("div.card-head",{},[c("h3",{},"Tesorería · próximos 7 días"),e.nav?c("button.link",{onclick:()=>e.nav("finanzas")},"Finanzas →"):null])),!n.cargado.cobrospagos||!n.cargado.gastos||!n.cargado.trabajadores)return t.append(c("div.spinner")),t;const r=ne(),i=new Date(r+"T00:00:00");i.setDate(i.getDate()+7);const s=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`,a=Pr({cobrospagos:n.cobrospagos,gastos:n.gastos,trabajadores:n.trabajadores,trabajos:n.trabajos},r,s),l=ss(a);if(t.append(c("div.hero",{},[c("div.hero-label",{},"Neto de la semana"),c("div.hero-value",{},N(l)),c("div.hero-sub",{},`${a.length} movimiento${a.length===1?"":"s"} · hasta ${s}`)])),!a.length)return t.append(c("div.card-empty",{},"Sin cobros ni pagos previstos")),t;for(const u of a.slice(0,12)){const d=u.origen==="gasto"?"gasto":u.origen==="trabajador"?"trabajador":u.categoria||u.tipo;t.append(c("div.row",{},[c("div.row-main",{},[c("div.row-label",{},[u.concepto||"(sin concepto)",c("span.chip",{style:"margin-left:6px;"},d)]),c("div.row-sub",{},`${u.fecha} · ${u.estado}`)]),c("div.row-right",{},c("div.amount"+(u.tipo==="cobro"?".pos":".neg"),{},(u.tipo==="cobro"?"+":"−")+N(u.importe)))]))}return t}function Ob(n,e){const t=c("div.card");if(t.append(c("div.card-head",{},[c("h3",{},"Trabajos"),e.nav?c("button.link",{onclick:()=>e.nav("trabajos")},"Trabajos →"):null])),!n.cargado.trabajos)return t.append(c("div.spinner")),t;const r=(n.trabajos||[]).filter(i=>(i.estado||"activo")==="activo");if(!r.length)return t.append(c("div.card-empty",{},"Sin trabajos activos")),t;r.sort((i,s)=>(i.fechaEntrega||"9999").localeCompare(s.fechaEntrega||"9999"));for(const i of r){const s=i.fechaEntrega?rn(i.fechaEntrega):null;let a=null;s!=null&&s<=7?a=s<0?c("span.chip.venc",{},`${Math.abs(s)}d tarde`):s===0?c("span.chip.urgente",{},"entrega hoy"):c("span.chip.pend",{},`entrega ${s}d`):i.fechaEntrega&&(a=c("span.chip",{},i.fechaEntrega)),t.append(c("div.row",{style:"cursor:pointer;",onclick:()=>e.nav&&e.nav("trabajos")},[c("div.row-main",{},[c("div.row-label",{},i.nombre||"(sin nombre)"),c("div.row-sub",{},`${rs(i.tipo)}${i.cliente?` · ${i.cliente}`:""} · ${Ra(i)||"—"}`)]),c("div.row-right",{},a)]))}return t}function Mb(n){const e=c("div.card"),t=new Date;if(e.append(c("div.card-head",{},[c("h3",{},"Kifar este mes"),c("span.small.muted",{},`${Ln[t.getMonth()]} ${t.getFullYear()}`)])),!n.cargado.ingresos||!n.cargado.config)return e.append(c("div.spinner")),e;const r=To(n.ingresos,_d()),i=wo(r),s=n.config&&n.config.objetivoMes||vd,a=s>0?Math.min(100,Math.round(i/s*100)):0;return e.append(c("div.hero",{},[c("div.hero-label",{},`${r.length} registro${r.length===1?"":"s"}`),c("div.hero-value",{},N(i)),c("div.hero-sub",{},`Objetivo ${N(s)} · ${a}%`),c("div.progress",{},c("span",{style:`width:${a}%`}))])),e}function xb(){const n=c("div.card");return n.append(c("div.card-head",{},c("h3",{},"Agenda"))),n.append(c("div.card-empty",{},"Disponible próximamente")),n}function Gs(n,e){return c("div.field",{},[c("label",{},n),e])}const os={hrs:"Horas",pct:"Porcentaje",pzs:"Piezas"};function Lb(n,e){if(!e.cargado.ingresos||!e.cargado.config){n.append(c("div.spinner"));return}const t=e.ingresos||{},r=e.config&&e.config.objetivoMes||vd,i=_d(),s=To(t,i),a=wo(s),l=r>0?Math.min(100,Math.round(a/r*100)):0,u=new Date,d=c("div.card");d.append(c("div.card-head",{},[c("h3",{},`${Ln[u.getMonth()]} ${u.getFullYear()}`),c("button.link",{onclick:()=>wd()},"+ Ingreso")])),d.append(c("div.hero",{},[c("div.hero-label",{},`${s.length} registro${s.length===1?"":"s"}`),c("div.hero-value",{},N(a)),c("div.hero-sub",{},`Objetivo ${N(r)} · ${l}%`),c("div.progress",{},c("span",{style:`width:${l}%`}))])),d.append(Fb(Gl(s))),n.append(d);const f=c("div.card");f.append(c("div.card-head",{},c("h3",{},"Registros del mes"))),s.length||f.append(c("div.card-empty",{},"Sin ingresos este mes"));for(const v of[...s].sort((E,T)=>(T.fechaISO||"").localeCompare(E.fechaISO||"")))f.append(Ub(v,i));n.append(f);const g=c("div.card");g.append(c("div.card-head",{},c("h3",{},"Últimos 6 meses")));for(let v=5;v>=0;v--){const E=new Date;E.setDate(1),E.setMonth(E.getMonth()-v);const T=`${E.getFullYear()}-${E.getMonth()}`,P=To(t,T),k=wo(P),L=Gl(P),j=T===i;g.append(c("div.row",{},[c("div.row-main",{},[c("div.row-label",{},[`${Ln[E.getMonth()]} ${E.getFullYear()}`,j?c("span.chip.ok",{style:"margin-left:6px;"},"actual"):null]),c("div.row-sub",{},`${P.length} reg · `+(Object.keys(L).length?Object.entries(L).map(([U,$])=>`${os[U]||U}: ${N($)}`).join(" · "):"—"))]),c("div.row-right",{},c("div.amount",{},N(k)))]))}n.append(g)}function Fb(n){return Object.entries(n).length?c("div.kpis",{style:"margin-top:10px;"},["hrs","pct","pzs"].map(t=>c("div.kpi",{},[c("div.kpi-v",{},N(n[t]||0)),c("div.kpi-l",{},os[t])]))):c("div.small.muted",{style:"margin-top:8px;"},"Sin desglose todavía")}function Ub(n,e){const t=n.tipo==="hrs"?`${be(n.horas||0)} h × ${be(n.preciohora||0)} €`:n.tipo==="pct"?`base ${N(n.baseImponible||0)} · ${be(n.porcentaje||0)}%`:`venta ${N(n.venta||0)} · material ${N(n.material||0)}`;return c("div.row",{},[c("div.row-main",{},[c("div.row-label",{},[n.desc||os[n.tipo]||n.tipo,c("span.chip",{style:"margin-left:6px;"},n.tipo)]),c("div.row-sub",{},`${n.fecha||n.fechaISO||"—"} · ${t}`)]),c("div.row-right",{},[c("div.amount",{},N(n.importe)),c("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;"},[c("button.btn.btn-sm",{onclick:()=>wd(n,e)},"Editar"),c("button.btn.btn-sm.btn-danger",{onclick:()=>jb(n.id,e)},"Borrar")])])])}function wd(n=null,e=null){const t=!!n;oe(t?"Editar ingreso":"Nuevo ingreso Kifar",r=>{const i=c("input",{type:"date",value:n?.fechaISO||ne()}),s=c("select",{},Object.entries(os).map(([$,Q])=>c("option",{value:$},Q)));s.value=n?.tipo||"hrs";const a=c("input",{value:n?.desc||"",placeholder:"Descripción"}),l=c("input",{type:"number",step:"0.01",value:n?.importe??"",placeholder:"Importe € (opcional en horas)"}),u=c("input",{type:"number",step:"0.25",value:n?.horas??"",placeholder:"Horas"}),d=c("input",{type:"number",step:"0.5",value:n?.preciohora??zl,placeholder:"€/h"}),f=c("div.field-grid",{},[Ze("Horas",u),Ze("€/hora",d)]),g=c("input",{type:"number",step:"0.01",value:n?.baseImponible??"",placeholder:"Base imponible"}),v=c("input",{type:"number",step:"0.01",value:n?.materiales??"",placeholder:"Materiales"}),E=c("input",{type:"number",step:"0.5",value:n?.porcentaje??Hl,placeholder:"%"}),T=c("div",{},[c("div.field-grid",{},[Ze("Base imponible",g),Ze("Materiales",v)]),Ze("Porcentaje %",E)]),P=c("input",{type:"number",step:"0.01",value:n?.venta??"",placeholder:"Venta"}),k=c("input",{type:"number",step:"0.01",value:n?.material??"",placeholder:"Material"}),L=c("div.field-grid",{},[Ze("Venta",P),Ze("Material",k)]),j=()=>{f.hidden=s.value!=="hrs",T.hidden=s.value!=="pct",L.hidden=s.value!=="pzs"};s.addEventListener("change",j);const U=async()=>{const $=s.value,Q=i.value||ne(),M={id:n?.id||ve(),tipo:$,importe:parseFloat(l.value)||0,desc:a.value.trim(),fechaISO:Q,fecha:new Date(Q+"T00:00:00").toLocaleDateString("es-ES")};if($==="pct"&&(M.baseImponible=parseFloat(g.value)||0,M.materiales=parseFloat(v.value)||0,M.porcentaje=parseFloat(E.value)||Hl),$==="hrs"&&(M.horas=parseFloat(u.value)||0,M.preciohora=parseFloat(d.value)||zl,M.importe||(M.importe=M.horas*M.preciohora)),$==="pzs"&&(M.venta=parseFloat(P.value)||0,M.material=parseFloat(k.value)||0),!M.importe||M.importe<=0){O("Falta importe (o horas+€/h)","err");return}const w=fb(Q),y={...Y("ingresos")||{}},b=t?e:null;if(b&&(y[b]=(y[b]||[]).slice()),y[w]=(y[w]||[]).slice(),t)if(b&&b!==w)y[b]=y[b].filter(I=>I.id!==M.id),y[w].push(M);else{const I=y[w],A=I.findIndex(R=>R.id===M.id);A>=0?I[A]=M:I.push(M)}else y[w].push(M);try{await ie("ingresos",y),O(t?"Ingreso actualizado":`Ingreso registrado (${N(M.importe)})`,"ok"),r()}catch{O("No se pudo guardar","err")}};return j(),c("div",{},[c("div.field-grid",{},[Ze("Fecha",i),Ze("Tipo",s)]),Ze("Descripción",a),Ze("Importe €",l),f,T,L,c("div.btn-row",{},[c("button.btn",{onclick:r},"Cancelar"),c("button.btn.btn-primary",{onclick:U},t?"Guardar":"Registrar")])])})}async function jb(n,e){const t={...Y("ingresos")||{}};t[e]=(t[e]||[]).filter(r=>r.id!==n);try{await ie("ingresos",t),O("Ingreso eliminado","ok")}catch{O("No se pudo guardar","err")}}function Ze(n,e){return c("div.field",{},[c("label",{},n),e])}let sn=null;function $b(n,e){sn={proyectoId:n,etiqueta:e||n}}function Bb(n,e={}){n.append(c("h1.section-title",{},"Equipo"));let t="trabajadores";const r=c("div.subtabs"),i=c("div");n.append(r),n.append(i);const s={trabajadores:null,capital:null,ingresos:null,config:null,trabajos:null,cargado:{}},a=()=>{Tt(r);for(const[u,d]of[["trabajadores","Trabajadores"],["kifar","Kifar"]])r.append(c("button.subtab"+(t===u?".active":""),{onclick:()=>{t=u,a()}},d));Tt(i),t==="trabajadores"?Ad(i,s):Lb(i,s)},l=[Be("trabajadores",u=>{s.trabajadores=u,s.cargado.trabajadores=!0,t==="trabajadores"&&a()}),Be("capital",u=>{s.capital=u,s.cargado.capital=!0}),Be("ingresos",u=>{s.ingresos=u,s.cargado.ingresos=!0,t==="kifar"&&a()}),Be("config",u=>{s.config=u,s.cargado.config=!0,t==="kifar"&&a()}),Be("trabajos",u=>{s.trabajos=u,s.cargado.trabajos=!0,t==="trabajadores"&&a()})];return a(),()=>l.forEach(u=>u())}const De={trabajador:"",estado:"pendientes",desde:"",hasta:""};function Ad(n,e){if(!e.cargado.trabajadores){n.append(c("div.spinner"));return}const t=e.trabajadores||[];sn&&n.append(qb(n,e,t));const r=t.filter(a=>a.activo!==!1),i=t.filter(a=>a.activo===!1),s=c("div.card");s.append(c("div.card-head",{},[c("h3",{},`Trabajadores (${r.length})`),c("button.link",{onclick:()=>Rd(null)},"+ Alta")])),r.length||s.append(c("div.card-empty",{},"Sin trabajadores activos"));for(const a of r)s.append(Kl(a,e));if(i.length){s.append(c("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:10px 0 2px;"},"De baja"));for(const a of i)s.append(Kl(a,e))}n.append(s),n.append(Sd(e))}function Kl(n,e){const t=n.trabajos||[],i=t.filter(a=>!a.pagado).reduce((a,l)=>a+(Number(l.importe)||0),0),s=n.activo===!1;return c("div.card",{style:"padding:12px;"},[c("div.row",{style:"border:none;padding:0;"},[c("div.row-main",{},[c("div.row-label",{},[n.nombre,s?c("span.chip.baja",{style:"margin-left:6px;"},"baja"):null]),c("div.row-sub",{},[n.precioHoraHabitual?`${be(n.precioHoraHabitual)} €/h · `:"",`${t.length} trabajo${t.length===1?"":"s"}`,n.especialidades?` · ${n.especialidades}`:""].join(""))]),c("div.row-right",{},i>0?c("span.amount.pend",{},N(i)):c("span.small.muted",{},"al día"))]),c("div.btn-row",{},[c("button.btn.btn-sm.btn-primary",{onclick:()=>Ca(n,e)},"+ Trabajo"),c("button.btn.btn-sm",{onclick:()=>Rd(n,e.trabajadores||[])},"Editar")])])}function qb(n,e,t){const r=t.filter(a=>a.activo!==!1),i=c("div.card",{style:"border-color:var(--gold);"});if(i.append(c("div.card-head",{},[c("h3",{},`Imputar horas a: ${sn.etiqueta}`),c("button.link",{onclick:()=>{sn=null,e.cargado.trabajadores&&zb(n,e)}},"Cancelar")])),!r.length)return i.append(c("div.card-empty",{},"No hay trabajadores activos. Da de alta uno primero.")),i;i.append(c("div.small.muted",{},"Elige el trabajador; el formulario se abre con el proyecto ya prefijado."));const s=c("div.btn-row",{},r.map(a=>c("button.btn.btn-sm.btn-primary",{onclick:()=>Ca(a,e,null,sn.proyectoId)},`+ ${a.nombre}`)));return i.append(s),i}function zb(n,e){Tt(n),Ad(n,e)}function Hb(n,e){const t=n.trabajos||Y("trabajos")||[],r=t.filter(i=>(i.estado||"activo")==="activo").map(i=>[i.id,i.nombre]);if(r.push(["kifar","Kifar"],["personal","Personal"]),!r.some(([i])=>i===e)){const i=t.find(s=>s.id===e);r.unshift([e,i?`${i.nombre}${i.estado&&i.estado!=="activo"?" ("+i.estado+")":""}`:e])}return r}function Rd(n,e){const t=!n;oe(t?"Nuevo trabajador":`Editar ${n.nombre}`,r=>{const i=c("input",{value:n?.nombre||"",placeholder:"Nombre"}),s=c("input",{value:n?.telefono||"",placeholder:"Teléfono"}),a=c("input",{type:"number",step:"0.5",value:n?.precioHoraHabitual??"",placeholder:"€/h"}),l=c("input",{value:n?.especialidades||"",placeholder:"p. ej. carpintería"}),u=c("textarea",{rows:2,placeholder:"Notas"},n?.notas||""),d=async()=>{if(!i.value.trim()){O("Falta el nombre","err");return}const v=(Y("trabajadores")||[]).slice().map(E=>({...E}));if(t)v.push({id:ve(),nombre:i.value.trim(),telefono:s.value.trim(),precioHoraHabitual:parseFloat(a.value)||0,especialidades:l.value.trim(),notas:u.value.trim(),activo:!0,fechaAlta:ne(),trabajos:[]});else{const E=v.find(T=>T.id===n.id);if(!E){O("No encontrado","err");return}E.nombre=i.value.trim(),E.telefono=s.value.trim(),E.precioHoraHabitual=parseFloat(a.value)||0,E.especialidades=l.value.trim(),E.notas=u.value.trim()}try{await ie("trabajadores",v),O(t?"Trabajador creado":"Guardado","ok"),r()}catch{O("No se pudo guardar","err")}},f=[c("button.btn",{onclick:r},"Cancelar"),c("button.btn.btn-primary",{onclick:d},t?"Crear":"Guardar")];let g=null;if(!t){const v=(n.trabajos||[]).length;n.activo===!1?g=c("button.btn.btn-sm",{onclick:()=>Ql(n.id,!0,r)},"Reactivar"):g=c("button.btn.btn-sm.btn-danger",{onclick:()=>Ql(n.id,!1,r)},"Dar de baja"),v===0&&(g=c("div",{style:"display:flex;gap:8px;"},[g,c("button.btn.btn-sm.btn-danger",{onclick:()=>Gb(n.id,r)},"Eliminar")]))}return c("div",{},[de("Nombre",i),c("div.field-grid",{},[de("Teléfono",s),de("Precio €/h habitual",a)]),de("Especialidades",l),de("Notas",u),g?c("div.field",{},[c("label",{},"Estado"),g]):null,c("div.btn-row",{},f)])})}async function Ql(n,e,t){const r=(Y("trabajadores")||[]).slice().map(s=>({...s})),i=r.find(s=>s.id===n);if(i){i.activo=e;try{await ie("trabajadores",r),O(e?"Reactivado":"Dado de baja","ok"),t?.()}catch{O("No se pudo guardar","err")}}}async function Gb(n,e){const t=Y("trabajadores")||[],r=t.find(s=>s.id===n);if(r&&(r.trabajos||[]).length){O("Tiene trabajos: no se puede eliminar","err");return}const i=t.filter(s=>s.id!==n);try{await ie("trabajadores",i),O("Trabajador eliminado","ok"),e?.()}catch{O("No se pudo guardar","err")}}function Ca(n,e,t=null,r=null){const i=!!t;if(i&&t.pagado){O("No se puede editar un trabajo pagado","err");return}oe(`${i?"Editar":"Registrar"} trabajo · ${n.nombre}`,s=>{const a=c("input",{type:"date",value:t?.fecha||ne()}),l=c("input",{value:t?.descripcion||"",placeholder:"Descripción"}),u=c("select",{},[c("option",{value:"horas"},"Horas"),c("option",{value:"cuenta"},"A cuenta")]);u.value=t?.tipo||"horas";const d=t?.proyectoId||r||"kifar",f=c("select",{},Hb(e,d).map(([Q,M])=>c("option",{value:Q},M)));f.value=d;const g=c("textarea",{rows:2,placeholder:"Notas"},t?.notas||""),v=c("input",{type:"number",step:"0.25",value:t?.horas??"",placeholder:"Horas"}),E=c("input",{type:"number",step:"0.5",value:t?.precioHora??(n.precioHoraHabitual||""),placeholder:"€/h"}),T=c("input",{type:"number",step:"0.01",value:t?.tipo==="cuenta"&&!t?.unidades?t?.importe??"":"",placeholder:"Importe directo €"}),P=c("input",{type:"number",step:"1",value:t?.unidades??"",placeholder:"Unidades"}),k=c("input",{type:"number",step:"0.01",value:t?.precioUnidad??"",placeholder:"€/unidad"}),L=c("div.field-grid",{},[de("Horas",v),de("Precio €/h",E)]),j=c("div",{},[de("Importe directo",T),c("div.field-grid",{},[de("Unidades",P),de("€/unidad",k)])]),U=()=>{L.hidden=u.value!=="horas",j.hidden=u.value!=="cuenta"};u.addEventListener("change",U);const $=async()=>{if(!l.value.trim()){O("Falta la descripción","err");return}const Q=u.value;let M=parseFloat(T.value)||0;const w=parseFloat(v.value)||0,y=parseFloat(E.value)||n.precioHoraHabitual||0,b=parseFloat(P.value)||0,I=parseFloat(k.value)||0;if(M||(Q==="horas"&&w&&y?M=w*y:Q==="cuenta"&&b&&I&&(M=b*I)),!M||M<=0){O("Falta importe (o horas+€/h, o unidades+€/ud)","err");return}const A=f.value.trim()||"kifar",R=(Y("trabajadores")||[]).slice().map(_e=>({..._e,trabajos:(_e.trabajos||[]).slice()})),_=R.find(_e=>_e.id===n.id);if(!_){O("Trabajador no encontrado","err");return}if(i){const _e=_.trabajos.findIndex(Gt=>Gt.id===t.id);if(_e<0){O("Trabajo no encontrado","err");return}if(_.trabajos[_e].pagado){O("No se puede editar un trabajo pagado","err");return}const Je={..._.trabajos[_e],fecha:a.value||ne(),tipo:Q,descripcion:l.value.trim(),importe:M,proyectoId:A,deducible:A!=="personal",notas:g.value.trim()};Q==="horas"?(Je.horas=w||0,Je.precioHora=y||0,delete Je.unidades,delete Je.precioUnidad):(Je.unidades=b||null,Je.precioUnidad=I||null,delete Je.horas,delete Je.precioHora),_.trabajos[_e]=Je;try{await ie("trabajadores",R),O("Trabajo actualizado","ok"),s()}catch{O("No se pudo guardar","err")}return}const ae={id:ve(),fecha:a.value||ne(),tipo:Q,descripcion:l.value.trim(),importe:M,proyectoId:A,deducible:A!=="personal",notas:g.value.trim(),pagado:!1,fechaPago:null,formaPago:null,cuentaPago:null};Q==="horas"?(ae.horas=w||0,ae.precioHora=y||0):(ae.unidades=b||null,ae.precioUnidad=I||null),_.trabajos.push(ae);try{await ie("trabajadores",R),sn=null,O(`Trabajo registrado (${N(M)})`,"ok"),s()}catch{O("No se pudo guardar","err")}};return U(),c("div",{},[c("div.field-grid",{},[de("Fecha",a),de("Tipo",u)]),de("Descripción",l),L,j,de("Proyecto",f),de("Notas",g),c("div.btn-row",{},[c("button.btn",{onclick:s},"Cancelar"),c("button.btn.btn-primary",{onclick:$},i?"Guardar":"Registrar")])])})}function Wb(n,e){oe("Eliminar trabajo",t=>{const r=async()=>{const i=(Y("trabajadores")||[]).slice().map(a=>({...a,trabajos:(a.trabajos||[]).slice()})),s=i.find(a=>a.id===n.id);if(!s){O("Trabajador no encontrado","err");return}s.trabajos=s.trabajos.filter(a=>a.id!==e.id);try{await ie("trabajadores",i),O(`Trabajo eliminado${e.pagado?" (el pago NO se devuelve a capital)":""}`,"ok"),t()}catch{O("No se pudo guardar","err")}};return c("div",{},[c("div.hero",{},[c("div.hero-label",{},`${n.nombre} · ${e.fecha||"—"}`),c("div.hero-value",{},N(e.importe)),c("div.hero-sub",{},e.descripcion||"")]),e.pagado?c("div.card",{style:"border-color:var(--red);"},c("div.row-sub",{style:"color:var(--red);font-size:11px;"},"⚠ Este trabajo está PAGADO. Al eliminarlo, el pago NO se devuelve a capital: el saldo no cambia.")):c("div.small.muted",{},"Se eliminará del historial del trabajador."),c("div.btn-row",{},[c("button.btn",{onclick:t},"Cancelar"),c("button.btn.btn-danger",{onclick:r},"Eliminar")])])})}function Sd(n){const e=c("div.card");e.append(c("div.card-head",{},c("h3",{},"Historial")));const t=n.trabajadores||[],r=c("select",{},[c("option",{value:""},"Todos"),...t.map(g=>c("option",{value:g.id},g.nombre))]);r.value=De.trabajador;const i=c("select",{},[c("option",{value:"pendientes"},"Pendientes"),c("option",{value:"pagados"},"Pagados"),c("option",{value:"todos"},"Todos")]);i.value=De.estado;const s=c("input",{type:"date",value:De.desde}),a=c("input",{type:"date",value:De.hasta}),l=()=>{De.trabajador=r.value,De.estado=i.value,De.desde=s.value,De.hasta=a.value,Kb(e,n)};[r,i,s,a].forEach(g=>g.addEventListener("change",l)),e.append(c("div.field-grid",{},[de("Trabajador",r),de("Estado",i)])),e.append(c("div.field-grid",{},[de("Desde",s),de("Hasta",a)]));let u=[];for(const g of t)if(!(De.trabajador&&g.id!==De.trabajador))for(const v of g.trabajos||[])De.estado==="pendientes"&&v.pagado||De.estado==="pagados"&&!v.pagado||De.desde&&(v.fecha||"")<De.desde||De.hasta&&(v.fecha||"")>De.hasta||u.push({t:g,j:v});u.sort((g,v)=>(v.j.fecha||"").localeCompare(g.j.fecha||""));const d=u.reduce((g,v)=>g+(Number(v.j.importe)||0),0),f=u.filter(g=>!g.j.pagado).reduce((g,v)=>g+(Number(v.j.importe)||0),0);e.append(c("div.kpis",{},[Ws(String(u.length),"Registros"),Ws(N(d),"Importe"),Ws(N(f),"Pendiente")])),u.length||e.append(c("div.card-empty",{},"Sin resultados"));for(const{t:g,j:v}of u)e.append(Qb(g,v,n));return e}function Kb(n,e){const t=Sd(e);n.replaceWith(t)}function Qb(n,e,t){const r=e.tipo==="horas"?`${be(e.horas||0)} h × ${be(e.precioHora||0)} €`:e.unidades?`${be(e.unidades)} × ${be(e.precioUnidad||0)} €`:"a cuenta";return c("div.row",{},[c("div.row-main",{},[c("div.row-label",{},`${n.nombre} · ${e.descripcion}`),c("div.row-sub",{},`${e.fecha||"—"} · ${r} · ${e.proyectoId}${e.pagado?` · pagado ${e.fechaPago||""} (${e.cuentaPago||""})`:""}`)]),c("div.row-right",{},[c("div.amount"+(e.pagado?"":".pend"),{},N(e.importe)),e.pagado?c("span.chip.ok",{},"pagado"):null,c("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;flex-wrap:wrap;"},[e.pagado?null:c("button.btn.btn-sm.btn-primary",{onclick:()=>Yb(n,e)},"Pagar"),e.pagado?null:c("button.btn.btn-sm",{onclick:()=>Ca(n,t,e)},"Editar"),c("button.btn.btn-sm.btn-danger",{onclick:()=>Wb(n,e)},"Borrar")].filter(Boolean))])])}function Yb(n,e,t){oe("Marcar pagado",r=>{const i=Object.keys((Y("capital")||{}).cuentas||{});i.includes("revolut")||i.unshift("revolut");const s=c("select",{},i.map(u=>c("option",{value:u},u)));s.value="revolut";const a=c("select",{},["transferencia","efectivo","bizum"].map(u=>c("option",{value:u},u)));a.value="transferencia";const l=async()=>{try{await Jb(n.id,e.id,s.value,a.value),O(`Pagado ${N(e.importe)} a ${n.nombre}`,"ok"),r()}catch{O("No se pudo registrar el pago","err")}};return c("div",{},[c("div.hero",{},[c("div.hero-label",{},`${n.nombre} · ${e.descripcion}`),c("div.hero-value",{},N(e.importe))]),c("div.field-grid",{},[de("Cuenta",s),de("Forma de pago",a)]),c("div.btn-row",{},[c("button.btn",{onclick:r},"Cancelar"),c("button.btn.btn-primary",{onclick:l},"Confirmar pago")])])})}async function Jb(n,e,t,r){const i=ne(),s=(Y("trabajadores")||[]).map(g=>({...g,trabajos:(g.trabajos||[]).map(v=>({...v}))})),a=s.find(g=>g.id===n),l=a&&a.trabajos.find(g=>g.id===e);if(!l)throw new Error("trabajo no encontrado");if(l.pagado)throw new Error("ya pagado");l.pagado=!0,l.fechaPago=i,l.formaPago=r||"transferencia",l.cuentaPago=t||"revolut",l.importePagado=l.importe;const u=Y("capital")||{cuentas:{},historial:[]},d={...u,cuentas:{...u.cuentas||{}},historial:(u.historial||[]).slice()},f=l.cuentaPago;d.cuentas[f]=(d.cuentas[f]||0)-l.importe,d.historial.push({id:ve(),tipo:"trabajador",cuenta:f,importe:-l.importe,concepto:`${a.nombre}: ${l.descripcion}`,fechaISO:i}),await jr({trabajadores:s,capital:d})}function de(n,e){return c("div.field",{},[c("label",{},n),e])}function Ws(n,e){return c("div.kpi",{},[c("div.kpi-v",{},n),c("div.kpi-l",{},e)])}let ar={modo:"panel",id:null};const ht={tipo:"",estado:"activos"};function Xb(n,e={}){n.append(c("h1.section-title",{},"Trabajos"));const t=c("div");n.append(t);const r={trabajos:null,trabajadores:null,config:null,crm:null,capital:null,cargado:{}},i=()=>{if(Tt(t),ar.modo==="ficha"){const d=(r.trabajos||[]).find(f=>f.id===ar.id);d?eE(t,r,d):(ar={modo:"panel",id:null},Yl(t,r))}else Yl(t,r)},s=d=>{ar={modo:"ficha",id:d},i()},a=()=>{ar={modo:"panel",id:null},i()};r._irFicha=s,r._irPanel=a,r._ctx=e;const l=d=>Be(d,f=>{r[d]=f,r.cargado[d]=!0,i()}),u=[l("trabajos"),l("trabajadores"),l("config"),l("crm"),l("capital")];return i(),()=>u.forEach(d=>d())}function Yl(n,e){if(!e.cargado.trabajos||!e.cargado.trabajadores){n.append(c("div.spinner"));return}const t=e.trabajos||[],r=e.trabajadores||[],i=c("div.card");i.append(c("div.card-head",{},[c("h3",{},"Panel"),c("button.link",{onclick:()=>Zb(e)},"+ Trabajo")]));const s=c("select",{},[c("option",{value:""},"Todos los tipos"),...wa.map(([T,P])=>c("option",{value:T},P))]);s.value=ht.tipo;const a=c("select",{},[c("option",{value:"activos"},"Activos"),c("option",{value:"cerrados"},"Cerrados"),c("option",{value:"cancelados"},"Cancelados"),c("option",{value:"todos"},"Todos")]);a.value=ht.estado;const l=()=>{ht.tipo=s.value,ht.estado=a.value,e._irPanel()};[s,a].forEach(T=>T.addEventListener("change",l)),i.append(c("div.field-grid",{},[z("Tipo",s),z("Estado",a)])),n.append(i);let u=t.slice();ht.tipo&&(u=u.filter(T=>T.tipo===ht.tipo)),ht.estado==="activos"?u=u.filter(T=>(T.estado||"activo")==="activo"):ht.estado==="cerrados"?u=u.filter(T=>T.estado==="cerrado"):ht.estado==="cancelados"&&(u=u.filter(T=>T.estado==="cancelado")),u.sort((T,P)=>(T.fechaEntrega||"9999").localeCompare(P.fechaEntrega||"9999"));const d=c("div.card");if(!u.length){d.append(c("div.card-empty",{},'Sin trabajos con estos filtros. Crea uno con "+ Trabajo".')),n.append(d);return}const f=c("div",{style:"overflow-x:auto;"}),g=c("table.ftable");g.append(c("thead",{},c("tr",{},["Trabajo","Tipo","Cliente","Fase","Entrega","Coste","Ingreso","Bº/Pª","Margen","Cobrado","Pendiente"].map((T,P)=>c("th",{style:P>=5?"text-align:right;":""},T)))));const v=c("tbody"),E={coste:0,ingreso:0,resultado:0,cobrado:0,pendiente:0};for(const T of u){const P=Aa(T,r);E.coste+=P.costeTotal,E.ingreso+=P.ingresoTotal,E.resultado+=P.resultado,E.cobrado+=P.cobrado,E.pendiente+=P.pendienteCobro;const k=T.fechaEntrega?rn(T.fechaEntrega):null,L=T.fechaEntrega?c("span",{style:k!=null&&k<0&&T.estado==="activo"?"color:var(--red);":""},T.fechaEntrega):"·",j=c("tr",{style:"cursor:pointer;",onclick:()=>e._irFicha(T.id)},[c("td",{},T.nombre||"(sin nombre)"),c("td",{},rs(T.tipo)),c("td",{},T.cliente||"·"),c("td",{},Ra(T)||"·"),c("td",{},L),c("td",{style:"text-align:right;"},N(P.costeTotal)),c("td",{style:"text-align:right;"},N(P.ingresoTotal)),c("td"+(P.resultado>=0?".pos":".neg"),{style:"text-align:right;"},N(P.resultado)),c("td",{style:"text-align:right;"},`${be(P.margen,1)}%`),c("td",{style:"text-align:right;"},N(P.cobrado)),c("td",{style:"text-align:right;"},N(P.pendienteCobro))]);v.append(j)}v.append(c("tr",{style:"font-weight:500;border-top:1px solid var(--border2);"},[c("td",{},"TOTAL"),c("td",{},""),c("td",{},""),c("td",{},""),c("td",{},""),c("td",{style:"text-align:right;"},N(E.coste)),c("td",{style:"text-align:right;"},N(E.ingreso)),c("td"+(E.resultado>=0?".pos":".neg"),{style:"text-align:right;"},N(E.resultado)),c("td",{},""),c("td",{style:"text-align:right;"},N(E.cobrado)),c("td",{style:"text-align:right;"},N(E.pendiente))])),g.append(v),f.append(g),d.append(f),d.append(c("div.small.muted",{style:"margin-top:8px;"},`${u.length} trabajo${u.length===1?"":"s"} · toca una fila para abrir la ficha`)),n.append(d)}function Zb(n){oe("Nuevo trabajo",e=>{const t=n.config||{},r=c("input",{placeholder:"p. ej. Camper Terro",autofocus:!0}),i=c("select",{},wa.map(([U,$])=>c("option",{value:U},$))),s=c("input",{placeholder:"Cliente"}),a=c("input",{placeholder:"Contacto (opcional)"}),l=c("input",{placeholder:"Vehículo / descripción"}),u=c("input",{type:"date",value:ne()}),d=c("input",{type:"date"}),f=c("input",{type:"number",step:"0.01",placeholder:"Ingreso presupuestado €"});let g=null;const v=(n.crm?.presupuestos||[]).filter(U=>U.estado==="aceptado"),E=new Set((n.trabajos||[]).map(U=>U.presupuestoId).filter(Boolean)),T=v.filter(U=>!E.has(U.id)),P=n.crm?.clientes||[],k=U=>P.find($=>$.id===U)?.nombre||"";let L=null;if(T.length){const U=c("select",{},[c("option",{value:""},"— ninguno (trabajo en blanco) —"),...T.map($=>c("option",{value:$.id},`${$.concepto||"(sin concepto)"} · ${N($.total||0)}`))]);U.addEventListener("change",()=>{const $=T.find(Q=>Q.id===U.value);g=$?$.id:null,$&&(r.value||(r.value=$.concepto||""),l.value||(l.value=$.concepto||""),s.value||(s.value=k($.clienteId)),f.value||(f.value=$.total||""))}),L=z("Crear desde presupuesto",U)}const j=async()=>{if(!r.value.trim()){O("Falta el nombre","err");return}const U=i.value,$={id:ve(),nombre:r.value.trim(),tipo:U,cliente:s.value.trim(),contacto:a.value.trim(),descripcion:l.value.trim(),fechaInicio:u.value||ne(),fechaEntrega:d.value||"",estado:"activo",presupuestoId:g||null,ingresoPresupuestado:parseFloat(f.value)||0,extras:[],fases:yb(t,U),tareas:[],materiales:[],otrosGastos:[],cobros:[],notas:[]},Q=(Y("trabajos")||[]).slice();Q.push($);try{await ie("trabajos",Q),O(`Trabajo "${$.nombre}" creado`,"ok"),e(),n._irFicha($.id)}catch{O("No se pudo guardar","err")}};return c("div",{},[L,z("Nombre",r),c("div.field-grid",{},[z("Tipo",i),z("Cliente",s)]),z("Contacto",a),z("Descripción",l),c("div.field-grid",{},[z("Fecha inicio",u),z("Fecha entrega",d)]),z("Ingreso presupuestado €",f),c("div.btn-row",{},[c("button.btn",{onclick:e},"Cancelar"),c("button.btn.btn-primary",{onclick:j},"Crear")])].filter(Boolean))})}function eE(n,e,t){const r=e.trabajadores||[],i=Aa(t,r);n.append(c("div.btn-row",{style:"margin-top:0;margin-bottom:10px;"},[c("button.btn.btn-sm",{onclick:()=>e._irPanel()},"‹ Panel")]));const s=t.estado==="cerrado"||t.estado==="cancelado",a=c("div.card");a.append(c("div.card-head",{},[c("h3",{},t.nombre||"(sin nombre)"),c("div",{style:"display:flex;gap:6px;align-items:center;"},[c("span.chip",{},rs(t.tipo)),s?c("span.chip",{},t.estado):null].filter(Boolean))])),a.append(c("div.row-sub",{style:"font-size:11px;"},[t.cliente?`Cliente: ${t.cliente}`:"Sin cliente",t.contacto?` · ${t.contacto}`:"",t.descripcion?` · ${t.descripcion}`:""].join(""))),a.append(c("div.small.muted",{style:"margin-top:4px;"},`${t.fechaInicio||"—"} → ${t.fechaEntrega||"—"} · fase actual: ${Ra(t)||"—"}`)),a.append(c("div.btn-row",{},[c("button.btn.btn-sm",{onclick:()=>nE(t)},"Editar datos"),t.estado==="activo"?c("button.btn.btn-sm.btn-danger",{onclick:()=>rE(t,i)},"Cerrar trabajo"):c("button.btn.btn-sm",{onclick:()=>iE(t)},"Reabrir")])),n.append(a),n.append(tE(i)),n.append(sE(t)),n.append(cE(t)),n.append(Pd(t)),n.append(uE(t)),n.append(hE(t,e,r)),n.append(pE(t)),n.append(mE(t)),n.append(EE(t))}function tE(n){const e=c("div.card");return e.append(c("div.card-head",{},c("h3",{},"Resumen económico"))),e.append(c("div.kpis",{},[ft(N(n.ingresoTotal),"Ingreso"),ft(N(n.costeTotal),"Coste"),ft(N(n.resultado),"Resultado")])),e.append(c("div.kpis",{},[ft(`${be(n.margen,1)}%`,"Margen"),ft(N(n.cobrado),"Cobrado"),ft(N(n.pendienteCobro),"Pendiente")])),e.append(c("div.small.muted",{style:"margin-top:6px;"},`Materiales ${N(n.costeMateriales)} · Mano de obra ${N(n.costeManoObra)} · Otros ${N(n.costeOtros)}`)),e}function ka(){return(Y("trabajos")||[]).map(n=>({...n,extras:(n.extras||[]).slice(),fases:(n.fases||[]).slice(),tareas:(n.tareas||[]).slice(),materiales:(n.materiales||[]).slice(),otrosGastos:(n.otrosGastos||[]).slice(),cobros:(n.cobros||[]).slice(),notas:(n.notas||[]).slice()}))}async function $e(n,e,t){const r=ka(),i=r.find(s=>s.id===n);if(!i){O("Trabajo no encontrado","err");return}e(i);try{await ie("trabajos",r),t&&O(t,"ok")}catch{O("No se pudo guardar","err")}}function nE(n){oe(`Editar · ${n.nombre}`,e=>{const t=c("input",{value:n.nombre||""}),r=c("input",{value:n.cliente||""}),i=c("input",{value:n.contacto||""}),s=c("input",{value:n.descripcion||""}),a=c("input",{type:"date",value:n.fechaInicio||""}),l=c("input",{type:"date",value:n.fechaEntrega||""}),u=c("input",{type:"number",step:"0.01",value:n.ingresoPresupuestado??0}),d=async()=>{if(!t.value.trim()){O("Falta el nombre","err");return}await $e(n.id,f=>{f.nombre=t.value.trim(),f.cliente=r.value.trim(),f.contacto=i.value.trim(),f.descripcion=s.value.trim(),f.fechaInicio=a.value||"",f.fechaEntrega=l.value||"",f.ingresoPresupuestado=parseFloat(u.value)||0},"Guardado"),e()};return c("div",{},[z("Nombre",t),z("Cliente",r),z("Contacto",i),z("Descripción",s),c("div.field-grid",{},[z("Fecha inicio",a),z("Fecha entrega",l)]),z("Ingreso presupuestado €",u),c("div.small.muted",{},`Tipo: ${rs(n.tipo)} (no editable — cambiaría la plantilla de fases).`),c("div.btn-row",{},[c("button.btn",{onclick:e},"Cancelar"),c("button.btn.btn-primary",{onclick:d},"Guardar")])])})}function rE(n,e){oe("Cerrar trabajo",t=>c("div",{},[c("div.hero",{},[c("div.hero-label",{},n.nombre),c("div.hero-value",{},N(e.resultado)),c("div.hero-sub",{},`margen ${be(e.margen,1)}%`)]),e.pendienteCobro>.005?c("div.card",{style:"border-color:var(--gold);"},c("div.row-sub",{style:"color:var(--gold);font-size:11px;"},`⚠ Queda pendiente de cobro ${N(e.pendienteCobro)}. ¿Cerrar igualmente?`)):c("div.small.muted",{},"El trabajo pasará a estado cerrado."),c("div.btn-row",{},[c("button.btn",{onclick:t},"Cancelar"),c("button.btn.btn-danger",{onclick:async()=>{await $e(n.id,r=>{r.estado="cerrado"},"Trabajo cerrado"),t()}},"Cerrar trabajo")])]))}async function iE(n){await $e(n.id,e=>{e.estado="activo"},"Trabajo reabierto")}function sE(n){const e=c("div.card");e.append(c("div.card-head",{},[c("h3",{},"Fases"),c("button.link",{onclick:()=>oE(n)},"Avanzar →")]));const t=n.fases||[];return t.length?(t.forEach((r,i)=>{const s=r.estado==="Completada"?".ok":r.estado==="En curso"?".pend":"";e.append(c("div.row",{style:"cursor:pointer;",onclick:()=>aE(n,i)},[c("div.row-main",{},[c("div.row-label",{},`${i+1}. ${r.nombre}`),c("div.row-sub",{},[r.fechaPrevista?`prev. ${r.fechaPrevista}`:"",r.fechaFin?` · fin ${r.fechaFin}`:"",r.notas?` · ${r.notas}`:""].join("")||"sin fechas")]),c("div.row-right",{},c("span.chip"+(s||""),{},r.estado))]))}),e):(e.append(c("div.card-empty",{},"Sin fases")),e)}async function oE(n){await $e(n.id,e=>{const t=e.fases||[];let r=t.findIndex(i=>i.estado==="En curso");if(r<0&&(r=t.findIndex(i=>i.estado!=="Completada")),r<0){O("Todas las fases están completadas","ok");return}t[r]={...t[r],estado:"Completada",fechaFin:t[r].fechaFin||ne()},t[r+1]&&(t[r+1]={...t[r+1],estado:"En curso"})},"Fase avanzada")}function aE(n,e){const t=(n.fases||[])[e];t&&oe(`Fase · ${t.nombre}`,r=>{const i=c("select",{},bb.map(d=>c("option",{value:d},d)));i.value=t.estado||"Pendiente";const s=c("input",{type:"date",value:t.fechaPrevista||""}),a=c("input",{type:"date",value:t.fechaFin||""}),l=c("textarea",{rows:2,placeholder:"Notas"},t.notas||""),u=async()=>{await $e(n.id,d=>{d.fases[e]={...d.fases[e],estado:i.value,fechaPrevista:s.value||"",fechaFin:a.value||"",notas:l.value.trim()}},"Fase actualizada"),r()};return c("div",{},[z("Estado",i),c("div.field-grid",{},[z("Fecha prevista",s),z("Fecha fin",a)]),z("Notas",l),c("div.btn-row",{},[c("button.btn",{onclick:r},"Cancelar"),c("button.btn.btn-primary",{onclick:u},"Guardar")])])})}function cE(n){const e=c("div.card");e.append(c("div.card-head",{},[c("h3",{},"Extras"),c("button.link",{onclick:()=>lE(n)},"+ Extra")]));const t=n.extras||[];if(!t.length)return e.append(c("div.card-empty",{},"Sin trabajos extra")),e;for(const r of t)e.append(c("div.row",{},[c("div.row-main",{},c("div.row-label",{},r.concepto||"(sin concepto)")),c("div.row-right",{},[c("div.amount.pos",{},"+"+N(r.importe)),c("button.btn.btn-sm.btn-danger",{style:"margin-top:4px;",onclick:()=>$e(n.id,i=>{i.extras=i.extras.filter(s=>s.id!==r.id)},"Extra eliminado")},"Borrar")])]));return e}function lE(n){oe("Nuevo extra",e=>{const t=c("input",{placeholder:"Concepto",autofocus:!0}),r=c("input",{type:"number",step:"0.01",placeholder:"Importe €"}),i=async()=>{const s=parseFloat(r.value)||0;if(!t.value.trim()||!s){O("Falta concepto o importe","err");return}await $e(n.id,a=>{a.extras.push({id:ve(),concepto:t.value.trim(),importe:s})},"Extra añadido"),e()};return c("div",{},[z("Concepto",t),z("Importe €",r),c("div.btn-row",{},[c("button.btn",{onclick:e},"Cancelar"),c("button.btn.btn-primary",{onclick:i},"Añadir")])])})}const kt={fase:"",estado:""};function Pd(n){const e=c("div.card");e.append(c("div.card-head",{},[c("h3",{},"Tareas"),c("button.link",{onclick:()=>Jl(n)},"+ Tarea")]));const t=n.tareas||[],r=(n.fases||[]).map(u=>u.nombre),i=c("select",{},[c("option",{value:""},"Todas las fases"),...r.map(u=>c("option",{value:u},u))]);i.value=kt.fase;const s=c("select",{},[c("option",{value:""},"Todos"),...Ed.map(u=>c("option",{value:u},u))]);s.value=kt.estado;const a=()=>{kt.fase=i.value,kt.estado=s.value;const u=Pd((Y("trabajos")||[]).find(d=>d.id===n.id)||n);e.replaceWith(u)};[i,s].forEach(u=>u.addEventListener("change",a)),t.length&&e.append(c("div.field-grid",{},[z("Fase",i),z("Estado",s)]));let l=t.slice();if(kt.fase&&(l=l.filter(u=>u.fase===kt.fase)),kt.estado&&(l=l.filter(u=>u.estado===kt.estado)),l.sort((u,d)=>(u.fechaLimite||"9999").localeCompare(d.fechaLimite||"9999")),!l.length)return e.append(c("div.card-empty",{},t.length?"Sin tareas con estos filtros":"Sin tareas")),e;for(const u of l){const d=u.fechaLimite?rn(u.fechaLimite):null,f=u.estado==="Hecha"?c("span.chip.ok",{},"hecha"):u.estado==="En curso"?c("span.chip.pend",{},"en curso"):c("span.chip",{},"pendiente");e.append(c("div.row",{style:"cursor:pointer;",onclick:()=>Jl(n,u)},[c("div.row-main",{},[c("div.row-label",{},u.titulo||"(sin título)"),c("div.row-sub",{},[u.fase||"sin fase",u.responsable?` · ${u.responsable}`:"",u.fechaLimite?` · ${u.fechaLimite}${d!=null&&d<0&&u.estado!=="Hecha"?" (vencida)":""}`:""].join(""))]),c("div.row-right",{},f)]))}return e}function Jl(n,e=null){const t=!!e;oe(t?"Editar tarea":"Nueva tarea",r=>{const i=c("input",{value:e?.titulo||"",placeholder:"Título",autofocus:!0}),s=(n.fases||[]).map(v=>v.nombre),a=c("select",{},[c("option",{value:""},"— sin fase —"),...s.map(v=>c("option",{value:v},v))]);a.value=e?.fase||"";const l=c("input",{value:e?.responsable||"",placeholder:"Responsable"}),u=c("select",{},Ed.map(v=>c("option",{value:v},v)));u.value=e?.estado||"Pendiente";const d=c("input",{type:"date",value:e?.fechaLimite||""}),f=c("textarea",{rows:2,placeholder:"Notas"},e?.notas||""),g=async()=>{if(!i.value.trim()){O("Falta el título","err");return}await $e(n.id,v=>{const E={id:e?.id||ve(),fase:a.value,titulo:i.value.trim(),responsable:l.value.trim(),estado:u.value,fechaLimite:d.value||"",notas:f.value.trim()};if(t){const T=v.tareas.findIndex(P=>P.id===E.id);T>=0?v.tareas[T]=E:v.tareas.push(E)}else v.tareas.push(E)},t?"Tarea actualizada":"Tarea creada"),r()};return c("div",{},[z("Título",i),c("div.field-grid",{},[z("Fase",a),z("Estado",u)]),c("div.field-grid",{},[z("Responsable",l),z("Fecha límite",d)]),z("Notas",f),c("div.btn-row",{},[c("button.btn",{onclick:r},"Cancelar"),t?c("button.btn.btn-danger",{onclick:async()=>{await $e(n.id,v=>{v.tareas=v.tareas.filter(E=>E.id!==e.id)},"Tarea eliminada"),r()}},"Eliminar"):null,c("button.btn.btn-primary",{onclick:g},t?"Guardar":"Crear")].filter(Boolean))])})}function uE(n){const e=c("div.card");e.append(c("div.card-head",{},[c("h3",{},"Materiales"),c("button.link",{onclick:()=>Xl(n)},"+ Material")]));const t=n.materiales||[];if(!t.length)return e.append(c("div.card-empty",{},"Sin materiales")),e;for(const r of t){const i=r.costeReal??r.costeEstimado??0,s=r.estadoCompra==="Recibido"?c("span.chip.ok",{},"recibido"):r.estadoCompra==="Pedido"?c("span.chip.pend",{},"pedido"):c("span.chip",{},"pendiente");e.append(c("div.row",{style:"cursor:pointer;",onclick:()=>Xl(n,r)},[c("div.row-main",{},[c("div.row-label",{},[r.nombre||"(sin nombre)",r.cantidad?` · ${be(r.cantidad)}`:""].join("")),c("div.row-sub",{},[r.costeReal!=null?`real ${N(r.costeReal)}`:r.costeEstimado!=null?`est. ${N(r.costeEstimado)}`:"sin coste",r.costeReal!=null&&r.costeEstimado!=null?` (est. ${N(r.costeEstimado)})`:"",r.proveedor?` · ${r.proveedor}`:""].join(""))]),c("div.row-right",{},[c("div.amount",{},N(i)),s])]))}return e}function Xl(n,e=null){const t=!!e;oe(t?"Editar material":"Nuevo material",r=>{const i=c("input",{value:e?.nombre||"",placeholder:"Nombre",autofocus:!0}),s=c("input",{type:"number",step:"0.01",value:e?.cantidad??"",placeholder:"Cantidad"}),a=c("select",{},Eb.map(g=>c("option",{value:g},g)));a.value=e?.estadoCompra||"Pendiente";const l=c("input",{type:"number",step:"0.01",value:e?.costeEstimado??"",placeholder:"Coste estimado €"}),u=c("input",{type:"number",step:"0.01",value:e?.costeReal??"",placeholder:"Coste real €"}),d=c("input",{value:e?.proveedor||"",placeholder:"Proveedor"}),f=async()=>{if(!i.value.trim()){O("Falta el nombre","err");return}await $e(n.id,g=>{const v={id:e?.id||ve(),nombre:i.value.trim(),cantidad:s.value===""?null:parseFloat(s.value),estadoCompra:a.value,costeEstimado:l.value===""?null:parseFloat(l.value),costeReal:u.value===""?null:parseFloat(u.value),proveedor:d.value.trim()};if(t){const E=g.materiales.findIndex(T=>T.id===v.id);E>=0?g.materiales[E]=v:g.materiales.push(v)}else g.materiales.push(v)},t?"Material actualizado":"Material añadido"),r()};return c("div",{},[z("Nombre",i),c("div.field-grid",{},[z("Cantidad",s),z("Estado de compra",a)]),c("div.field-grid",{},[z("Coste estimado €",l),z("Coste real €",u)]),z("Proveedor",d),c("div.btn-row",{},[c("button.btn",{onclick:r},"Cancelar"),t?c("button.btn.btn-danger",{onclick:async()=>{await $e(n.id,g=>{g.materiales=g.materiales.filter(v=>v.id!==e.id)},"Material eliminado"),r()}},"Eliminar"):null,c("button.btn.btn-primary",{onclick:f},t?"Guardar":"Añadir")].filter(Boolean))])})}function hE(n,e,t){const r=c("div.card");r.append(c("div.card-head",{},[c("h3",{},"Horas de trabajadores"),c("button.link",{onclick:()=>dE(e,n)},"+ Horas")]));const i=bd(t,n.id);if(!i.length)return r.append(c("div.card-empty",{},"Sin horas imputadas. Regístralas en Equipo → + Horas.")),r;const s=i.reduce((l,u)=>l+u.importe,0),a=i.reduce((l,u)=>l+(Number(u.horas)||0),0);r.append(c("div.kpis",{},[ft(String(i.length),"Apuntes"),ft(be(a)+" h","Horas"),ft(N(s),"Coste MO")]));for(const l of i)r.append(c("div.row",{},[c("div.row-main",{},[c("div.row-label",{},`${l.trabajador} · ${l.descripcion||""}`),c("div.row-sub",{},`${l.fecha||"—"}${l.horas!=null?` · ${be(l.horas)} h`:""}${l.pagado?" · pagado":""}`)]),c("div.row-right",{},c("div.amount",{},N(l.importe)))]));return r}function dE(n,e){$b(e.id,e.nombre),n._ctx?.nav?n._ctx.nav("equipo"):O("Ve a Equipo para imputar las horas","")}function pE(n){const e=c("div.card");e.append(c("div.card-head",{},[c("h3",{},"Otros gastos"),c("button.link",{onclick:()=>fE(n)},"+ Gasto")]));const t=n.otrosGastos||[];if(!t.length)return e.append(c("div.card-empty",{},"Sin otros gastos")),e;for(const r of t)e.append(c("div.row",{},[c("div.row-main",{},[c("div.row-label",{},r.concepto||"(sin concepto)"),c("div.row-sub",{},r.fecha||"—")]),c("div.row-right",{},[c("div.amount",{},N(r.importe)),c("button.btn.btn-sm.btn-danger",{style:"margin-top:4px;",onclick:()=>$e(n.id,i=>{i.otrosGastos=i.otrosGastos.filter(s=>s.id!==r.id)},"Gasto eliminado")},"Borrar")])]));return e}function fE(n){oe("Nuevo gasto",e=>{const t=c("input",{type:"date",value:ne()}),r=c("input",{placeholder:"Concepto",autofocus:!0}),i=c("input",{type:"number",step:"0.01",placeholder:"Importe €"}),s=async()=>{const a=parseFloat(i.value)||0;if(!r.value.trim()||!a){O("Falta concepto o importe","err");return}await $e(n.id,l=>{l.otrosGastos.push({id:ve(),fecha:t.value||ne(),concepto:r.value.trim(),importe:a})},"Gasto añadido"),e()};return c("div",{},[c("div.field-grid",{},[z("Fecha",t),z("Importe €",i)]),z("Concepto",r),c("div.btn-row",{},[c("button.btn",{onclick:e},"Cancelar"),c("button.btn.btn-primary",{onclick:s},"Añadir")])])})}function mE(n,e){const t=c("div.card");t.append(c("div.card-head",{},[c("h3",{},"Cobros del cliente"),c("button.link",{onclick:()=>vE(n)},"+ Cobro")]));const r=(n.cobros||[]).slice().sort((i,s)=>(s.fecha||"").localeCompare(i.fecha||""));if(!r.length)return t.append(c("div.card-empty",{},"Sin cobros registrados")),t;for(const i of r)t.append(c("div.row",{},[c("div.row-main",{},[c("div.row-label",{},i.concepto||"Cobro"),c("div.row-sub",{},`${i.fecha||"—"} · ${i.cuenta||"revolut"}`)]),c("div.row-right",{},[c("div.amount.pos",{},"+"+N(i.importe)),c("button.btn.btn-sm.btn-danger",{style:"margin-top:4px;",onclick:()=>_E(n,i)},"Borrar")])]));return t}function gE(){const n=Object.keys((Y("capital")||{}).cuentas||{});return n.includes("revolut")||n.unshift("revolut"),n}function vE(n){oe("Registrar cobro",e=>{const t=c("input",{type:"date",value:ne()}),r=c("input",{placeholder:"Concepto (p. ej. anticipo)",autofocus:!0}),i=c("input",{type:"number",step:"0.01",placeholder:"Importe €"}),s=c("select",{},gE().map(l=>c("option",{value:l},l)));s.value="revolut";const a=async()=>{const l=parseFloat(i.value)||0;if(!l||l<=0){O("Falta el importe","err");return}try{await yE(n,{fecha:t.value||ne(),concepto:r.value.trim()||"Cobro",importe:l,cuenta:s.value}),O(`Cobro ${N(l)} · capital +${N(l)}`,"ok"),e()}catch{O("No se pudo registrar el cobro","err")}};return c("div",{},[c("div.field-grid",{},[z("Fecha",t),z("Importe €",i)]),z("Concepto",r),z("Cuenta",s),c("div.small.muted",{},"El cobro suma al capital de la cuenta y queda en el historial (atómico)."),c("div.btn-row",{},[c("button.btn",{onclick:e},"Cancelar"),c("button.btn.btn-primary",{onclick:a},"Registrar")])])})}function _E(n,e){oe("Eliminar cobro",t=>c("div",{},[c("div.hero",{},[c("div.hero-label",{},e.concepto||"Cobro"),c("div.hero-value",{},N(e.importe)),c("div.hero-sub",{},`${e.fecha||"—"} · ${e.cuenta||"revolut"}`)]),c("div.small.muted",{},`Se revertirá el capital: ${e.cuenta||"revolut"} −${N(e.importe)}.`),c("div.btn-row",{},[c("button.btn",{onclick:t},"Cancelar"),c("button.btn.btn-danger",{onclick:async()=>{try{await bE(n,e),O("Cobro eliminado y capital revertido","ok"),t()}catch{O("No se pudo eliminar","err")}}},"Eliminar")])]))}async function yE(n,{fecha:e,concepto:t,importe:r,cuenta:i}){const s=ka(),a=s.find(d=>d.id===n.id);if(!a)throw new Error("trabajo no encontrado");a.cobros.push({id:ve(),fecha:e,concepto:t,importe:r,cuenta:i});const l=Y("capital")||{cuentas:{},historial:[]},u={...l,cuentas:{...l.cuentas||{}},historial:(l.historial||[]).slice()};u.cuentas[i]=(u.cuentas[i]||0)+r,u.historial.push({id:ve(),tipo:"cobro_trabajo",cuenta:i,importe:+r,concepto:`Cobro ${a.nombre}: ${t}`,fechaISO:e}),await jr({trabajos:s,capital:u})}async function bE(n,e){const t=ka(),r=t.find(a=>a.id===n.id);if(!r)throw new Error("trabajo no encontrado");r.cobros=r.cobros.filter(a=>a.id!==e.id);const i=Y("capital")||{cuentas:{},historial:[]},s={...i,cuentas:{...i.cuentas||{}},historial:(i.historial||[]).slice()};s.cuentas[e.cuenta]=(s.cuentas[e.cuenta]||0)-e.importe,s.historial.push({id:ve(),tipo:"reverso_cobro_trabajo",cuenta:e.cuenta,importe:-e.importe,concepto:`Reverso cobro ${r.nombre}: ${e.concepto||""}`,fechaISO:ne()}),await jr({trabajos:t,capital:s})}function EE(n){const e=c("div.card");e.append(c("div.card-head",{},[c("h3",{},"Notas e incidencias"),c("button.link",{onclick:()=>IE(n)},"+ Nota")]));const t=(n.notas||[]).slice().sort((r,i)=>(i.fecha||"").localeCompare(r.fecha||""));if(!t.length)return e.append(c("div.card-empty",{},"Sin notas")),e;for(const r of t)e.append(c("div.row",{},[c("div.row-main",{},[c("div.row-label",{},r.texto||""),c("div.row-sub",{},r.fecha||"—")]),c("div.row-right",{},[r.impactoEstimado?c("div.amount"+(Number(r.impactoEstimado)>=0?".pos":".neg"),{},N(r.impactoEstimado)):c("span.small.muted",{},"—"),c("button.btn.btn-sm.btn-danger",{style:"margin-top:4px;",onclick:()=>$e(n.id,i=>{i.notas=i.notas.filter(s=>s.id!==r.id)},"Nota eliminada")},"Borrar")])]));return e}function IE(n){oe("Nueva nota",e=>{const t=c("input",{type:"date",value:ne()}),r=c("textarea",{rows:3,placeholder:"Nota o incidencia",autofocus:!0}),i=c("input",{type:"number",step:"0.01",placeholder:"Impacto € estimado (opcional)"}),s=async()=>{if(!r.value.trim()){O("Falta el texto","err");return}await $e(n.id,a=>{a.notas.push({id:ve(),fecha:t.value||ne(),texto:r.value.trim(),impactoEstimado:i.value===""?null:parseFloat(i.value)})},"Nota añadida"),e()};return c("div",{},[c("div.field-grid",{},[z("Fecha",t),z("Impacto € estimado",i)]),z("Texto",r),c("div.btn-row",{},[c("button.btn",{onclick:e},"Cancelar"),c("button.btn.btn-primary",{onclick:s},"Añadir")])])})}function z(n,e){return c("div.field",{},[c("label",{},n),e])}function ft(n,e){return c("div.kpi",{},[c("div.kpi-v",{},n),c("div.kpi-l",{},e)])}const ze={anio:null,mesGridY:null,mesGridM:null},We={tipo:"",categoria:"",estado:""},as=()=>{const n=Y("cobrospagos")||{};return{saldoInicial:Number(n.saldoInicial)||0,fechaInicio:n.fechaInicio||"",movimientos:n.movimientos||[]}},Ao=()=>`${new Date().getFullYear()}-01-01`,Fi=(n,e)=>new Date(n,e+1,0).getDate(),on=(n,e,t)=>`${n}-${String(e+1).padStart(2,"0")}-${String(t).padStart(2,"0")}`;function TE(n,e){if(!e.cargado.cobrospagos||!e.cargado.gastos||!e.cargado.trabajadores){n.append(c("div.spinner"));return}const t=new Date;ze.anio==null&&(ze.anio=t.getFullYear()),ze.mesGridY==null&&(ze.mesGridY=t.getFullYear(),ze.mesGridM=t.getMonth());const r=as(),i={cobrospagos:e.cobrospagos,gastos:e.gastos,trabajadores:e.trabajadores,trabajos:e.trabajos};n.append(wE()),n.append(Ro(i,r)),n.append(kd(i)),n.append(Nd(i)),n.append(AE(r))}function wE(){const n=c("div.card");return n.append(c("div.card-head",{},[c("h3",{},"Tesorería"),c("button.link",{onclick:()=>Cd(null)},"+ Movimiento")])),n.append(c("div.small.muted",{},"Cobros y pagos previstos y realizados. Aparecen automáticamente: gastos, trabajos pendientes de pago y el pendiente de cobro de cada trabajo-proyecto en su fecha de entrega.")),n}function AE(n){const e=c("div.card");return e.append(c("div.card-head",{},c("h3",{},"Saldo inicial"))),e.append(c("div.hero",{},[c("div.hero-label",{},"Saldo inicial"),c("div.hero-value",{},N(n.saldoInicial)),c("div.hero-sub",{},n.fechaInicio?`desde ${n.fechaInicio}`:"sin fecha de inicio")])),e.append(c("div.btn-row",{},[c("button.btn.btn-sm",{onclick:()=>RE(n)},"Editar saldo/fecha inicial")])),e}function RE(n){oe("Saldo y fecha inicial",e=>{const t=c("input",{type:"number",step:"0.01",value:n.saldoInicial,placeholder:"Saldo inicial €"}),r=c("input",{type:"date",value:n.fechaInicio||Ao()}),i=async()=>{const a={...as(),saldoInicial:parseFloat(t.value)||0,fechaInicio:r.value||Ao()};try{await ie("cobrospagos",a),O("Guardado","ok"),e()}catch{O("No se pudo guardar","err")}};return c("div",{},[Ke("Saldo inicial €",t),Ke("Fecha de inicio",r),c("div.btn-row",{},[c("button.btn",{onclick:e},"Cancelar"),c("button.btn.btn-primary",{onclick:i},"Guardar")])])})}function Cd(n){const e=!!n;oe(e?"Editar movimiento":"Nuevo movimiento",t=>{const r=c("input",{type:"date",value:n?.fecha||ne()}),i=c("select",{},[c("option",{value:"cobro"},"Cobro"),c("option",{value:"pago"},"Pago")]);i.value=n?.tipo||"cobro";const s=c("input",{value:n?.concepto||"",placeholder:"Concepto"}),a=c("input",{value:n?.categoria||"",placeholder:"Categoría (opcional)"}),l=c("input",{type:"number",step:"0.01",value:n?.importe??"",placeholder:"Importe €"}),u=c("select",{},[c("option",{value:"previsto"},"Previsto"),c("option",{value:"realizado"},"Realizado")]);u.value=n?.estado||"previsto";const d=c("textarea",{rows:2,placeholder:"Notas"},n?.notas||""),f=async()=>{if(!s.value.trim()){O("Falta el concepto","err");return}const g=parseFloat(l.value)||0;if(!g||g<=0){O("Falta el importe","err");return}const v=as(),E=v.movimientos.slice(),T={id:n?.id||ve(),fecha:r.value||ne(),tipo:i.value,concepto:s.value.trim(),categoria:a.value.trim(),importe:g,estado:u.value,notas:d.value.trim()};if(e){const P=E.findIndex(k=>k.id===T.id);P>=0?E[P]=T:E.push(T)}else E.push(T);try{await ie("cobrospagos",{...v,movimientos:E}),O(e?"Movimiento actualizado":"Movimiento creado","ok"),t()}catch{O("No se pudo guardar","err")}};return c("div",{},[c("div.field-grid",{},[Ke("Fecha",r),Ke("Tipo",i)]),Ke("Concepto",s),c("div.field-grid",{},[Ke("Categoría",a),Ke("Importe €",l)]),Ke("Estado",u),Ke("Notas",d),c("div.btn-row",{},[c("button.btn",{onclick:t},"Cancelar"),e?c("button.btn.btn-danger",{onclick:()=>SE(n.id,t)},"Eliminar"):null,c("button.btn.btn-primary",{onclick:f},e?"Guardar":"Crear")].filter(Boolean))])})}async function SE(n,e){const t=as();try{await ie("cobrospagos",{...t,movimientos:t.movimientos.filter(r=>r.id!==n)}),O("Movimiento eliminado","ok"),e?.()}catch{O("No se pudo guardar","err")}}function Ro(n,e){const t=c("div.card"),r=ze.anio;t.append(c("div.card-head",{},[c("h3",{},"Resumen mensual"),c("div",{style:"display:flex;gap:8px;align-items:center;"},[c("button.btn.btn-sm",{onclick:()=>{ze.anio--,t.replaceWith(Ro(n,e))}},"‹"),c("span.small.muted",{},String(r)),c("button.btn.btn-sm",{onclick:()=>{ze.anio++,t.replaceWith(Ro(n,e))}},"›")])]));const i=e.fechaInicio||Ao(),s=c("div",{style:"overflow-x:auto;"}),a=c("table.ftable");a.append(c("thead",{},c("tr",{},[c("th",{},"Mes"),c("th",{},"Cobros"),c("th",{},"Pagos"),c("th",{},"Neto"),c("th",{},"Saldo acum.")])));const l=c("tbody");for(let u=0;u<12;u++){const d=on(r,u,1),f=on(r,u,Fi(r,u)),g=Pr(n,d,f),v=g.filter(L=>L.tipo==="cobro").reduce((L,j)=>L+j.importe,0),E=g.filter(L=>L.tipo==="pago").reduce((L,j)=>L+j.importe,0),T=v-E,P=ss(Pr(n,i,f)),k=e.saldoInicial+P;l.append(c("tr",{},[c("td",{},Ln[u].slice(0,3)),c("td",{style:"text-align:right;"},v?N(v):"·"),c("td",{style:"text-align:right;"},E?N(E):"·"),c("td"+(T>=0?".pos":".neg"),{style:"text-align:right;"},N(T)),c("td",{style:"text-align:right;font-weight:500;"},N(k))]))}return a.append(l),s.append(a),t.append(s),t}function kd(n){var v;const e=c("div.card"),t=ze.mesGridY,r=ze.mesGridM,i=E=>{let T=r+E,P=t;for(;T<0;)T+=12,P--;for(;T>11;)T-=12,P++;ze.mesGridY=P,ze.mesGridM=T,e.replaceWith(kd(n))};e.append(c("div.card-head",{},[c("h3",{},"Calendario"),c("div",{style:"display:flex;gap:8px;align-items:center;"},[c("button.btn.btn-sm",{onclick:()=>i(-1)},"‹"),c("span.small.muted",{},`${Ln[r]} ${t}`),c("button.btn.btn-sm",{onclick:()=>i(1)},"›")])]));const s=on(t,r,1),a=on(t,r,Fi(t,r)),l=Pr(n,s,a),u={};for(const E of l)(u[v=E.fecha]||(u[v]=[])).push(E);const d=c("div.cal-grid");for(const E of["L","M","X","J","V","S","D"])d.append(c("div.cal-dow",{},E));const f=(new Date(t,r,1).getDay()+6)%7;for(let E=0;E<f;E++)d.append(c("div.cal-cell.empty"));const g=ne();for(let E=1;E<=Fi(t,r);E++){const T=on(t,r,E),P=u[T]||[],k=ss(P),L=(P.length?" clickable":"")+(T===g?" hoy":""),j=c("div.cal-cell",{class:L.trim()},[c("div.cal-num",{},String(E)),P.length?c("div.cal-net"+(k>=0?".pos":".neg"),{},N(k)):c("div")]);P.length&&j.addEventListener("click",()=>PE(T,P)),d.append(j)}return e.append(d),e}function PE(n,e){oe(n,t=>{const r=c("div");for(const i of e)r.append(Dd(i,!1));return c("div",{},[c("div.hero",{},[c("div.hero-label",{},"Neto del día"),c("div.hero-value",{},N(ss(e)))]),r,c("div.btn-row",{},[c("button.btn",{onclick:t},"Cerrar")])])})}function Nd(n){const e=c("div.card");e.append(c("div.card-head",{},c("h3",{},"Registro del mes")));const t=ze.mesGridY,r=ze.mesGridM,i=on(t,r,1),s=on(t,r,Fi(t,r));let a=Pr(n,i,s);const l=[...new Set(a.map(T=>T.categoria).filter(Boolean))],u=c("select",{},[c("option",{value:""},"Todos"),c("option",{value:"cobro"},"Cobros"),c("option",{value:"pago"},"Pagos")]);u.value=We.tipo;const d=c("select",{},[c("option",{value:""},"Todas"),...l.map(T=>c("option",{value:T},T))]);d.value=We.categoria;const f=c("select",{},[c("option",{value:""},"Todos"),c("option",{value:"previsto"},"Previsto"),c("option",{value:"realizado"},"Realizado")]);f.value=We.estado;const g=()=>{We.tipo=u.value,We.categoria=d.value,We.estado=f.value,e.replaceWith(Nd(n))};[u,d,f].forEach(T=>T.addEventListener("change",g)),e.append(c("div.field-grid",{},[Ke("Tipo",u),Ke("Estado",f)])),e.append(Ke("Categoría",d)),We.tipo&&(a=a.filter(T=>T.tipo===We.tipo)),We.categoria&&(a=a.filter(T=>T.categoria===We.categoria)),We.estado&&(a=a.filter(T=>T.estado===We.estado));const v=a.filter(T=>T.tipo==="cobro").reduce((T,P)=>T+P.importe,0),E=a.filter(T=>T.tipo==="pago").reduce((T,P)=>T+P.importe,0);if(e.append(c("div.kpis",{},[Ks(N(v),"Cobros"),Ks(N(E),"Pagos"),Ks(N(v-E),"Neto")])),!a.length)return e.append(c("div.card-empty",{},"Sin movimientos")),e;for(const T of a)e.append(Dd(T,!0));return e}function Dd(n,e){const t=n.tipo==="cobro"?".pos":".neg",r=n.origen==="gasto"?"gasto":n.origen==="trabajador"?"trabajador":n.categoria||n.tipo;return c("div.row",{},[c("div.row-main",{},[c("div.row-label",{},[n.concepto||"(sin concepto)",c("span.chip",{style:"margin-left:6px;"},r)]),c("div.row-sub",{},`${n.fecha} · ${n.estado}${n.readonly?" · solo lectura":""}`)]),c("div.row-right",{},[c("div.amount"+t,{},(n.tipo==="cobro"?"+":"−")+N(n.importe)),e&&!n.readonly?c("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;"},[c("button.btn.btn-sm",{onclick:()=>Cd(CE(n))},"Editar")]):null])])}function CE(n){return{id:n.id,fecha:n.fecha,tipo:n.tipo,concepto:n.concepto,categoria:n.categoria,importe:n.importe,estado:n.estado,notas:n.notas}}function Ke(n,e){return c("div.field",{},[c("label",{},n),e])}function Ks(n,e){return c("div.kpi",{},[c("div.kpi-v",{},n),c("div.kpi-l",{},e)])}const Oe={anio:null,mes:null,mostrarArchivados:!1,categoria:""},kE=(n,e)=>new Date(n,e+1,0).getDate(),Zl=(n,e,t)=>`${n}-${String(e+1).padStart(2,"0")}-${String(t).padStart(2,"0")}`,eu=n=>{const e=new Date;return e.setDate(e.getDate()+n),e.toISOString().split("T")[0]};function NE(n,e){if(!e.cargado.gastos){n.append(c("div.spinner"));return}const t=new Date;Oe.anio==null&&(Oe.anio=t.getFullYear(),Oe.mes=t.getMonth());const r=e.gastos||[];n.append(Vd(r)),n.append(So(r))}function Vd(n){const e=c("div.card"),t=Oe.anio,r=Oe.mes,i=g=>{let v=r+g,E=t;for(;v<0;)v+=12,E--;for(;v>11;)v-=12,E++;Oe.anio=E,Oe.mes=v,e.replaceWith(Vd(n))};e.append(c("div.card-head",{},[c("h3",{},"Resumen del mes"),c("div",{style:"display:flex;gap:8px;align-items:center;"},[c("button.btn.btn-sm",{onclick:()=>i(-1)},"‹"),c("span.small.muted",{},`${Ln[r]} ${t}`),c("button.btn.btn-sm",{onclick:()=>i(1)},"›")])]));const s=Zl(t,r,1),a=Zl(t,r,kE(t,r)),l=is(n,s,a),u=l.reduce((g,v)=>g+(v.importe||0),0),d=l.filter(g=>g.pagado).reduce((g,v)=>g+(v.importe||0),0),f=l.filter(g=>!g.pagado).reduce((g,v)=>g+(v.importe||0),0);return e.append(c("div.kpis",{},[Qs(N(u),"Esperado"),Qs(N(d),"Pagado"),Qs(N(f),"Pendiente")])),e}function So(n){const e=c("div.card");e.append(c("div.card-head",{},[c("h3",{},Oe.mostrarArchivados?"Gastos archivados":"Gastos"),c("button.link",{onclick:()=>Od(null)},"+ Gasto")]));const t=[...new Set(n.map(u=>u.categoria).filter(Boolean))].sort(),r=c("select",{},[c("option",{value:""},"Todas"),...t.map(u=>c("option",{value:u},u))]);r.value=Oe.categoria,r.addEventListener("change",()=>{Oe.categoria=r.value,e.replaceWith(So(n))});const i=c("button.btn.btn-sm",{onclick:()=>{Oe.mostrarArchivados=!Oe.mostrarArchivados,e.replaceWith(So(n))}},Oe.mostrarArchivados?"Ver activos":"Ver archivados");e.append(c("div.field-grid",{},[Ve("Categoría",r),c("div.field",{},[c("label",{},"Vista"),i])]));let s=n.filter(u=>!!u.archivado===Oe.mostrarArchivados);Oe.categoria&&(s=s.filter(u=>u.categoria===Oe.categoria));const a=s.filter(u=>u.recurrente),l=s.filter(u=>!u.recurrente);return e.append(tu("Recurrentes",a)),e.append(tu("Puntuales",l)),s.length||e.append(c("div.card-empty",{},"Sin gastos")),e}function tu(n,e){var i;const t=c("div");if(!e.length)return t;t.append(c("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:10px 0 2px;"},n));const r={};for(const s of e)(r[i=s.categoria||"—"]||(r[i]=[])).push(s);for(const s of Object.keys(r).sort())for(const a of r[s])t.append(DE(a));return t}function DE(n){const e=n.recurrente?`${n.frecuencia||"mensual"} · día ${n.diaCobro??1}${n.fechaFin?` · hasta ${n.fechaFin}`:""}`:n.fecha||"—",t=!n.recurrente&&(n.pagos||[]).some(r=>r.fecha===n.fecha);return c("div.row",{},[c("div.row-main",{},[c("div.row-label",{},[n.concepto||"(sin concepto)",c("span.chip",{style:"margin-left:6px;"},n.categoria||"—"),n.deducible?c("span.chip.ok",{style:"margin-left:4px;"},"deducible"):null,t?c("span.chip.ok",{style:"margin-left:4px;"},"pagado"):null].filter(Boolean)),c("div.row-sub",{},[e,n.baseImponible!=null?` · base ${N(n.baseImponible)} · IVA ${be(n.tipoIVA||21,0)}%`:""].join("")),n.facturaDrive?c("a",{href:n.facturaDrive.link||n.facturaDrive,target:"_blank",rel:"noopener",class:"link",style:"font-size:9px;"},"📎 factura Drive"):null].filter(Boolean)),c("div.row-right",{},[c("div.amount",{},N(n.importe)),c("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;flex-wrap:wrap;"},[c("button.btn.btn-sm.btn-primary",{onclick:()=>OE(n)},"Pagar"),c("button.btn.btn-sm",{onclick:()=>Od(n)},"Editar"),c("button.btn.btn-sm",{onclick:()=>VE(n)},n.archivado?"Desarchivar":"Archivar"),c("button.btn.btn-sm.btn-danger",{onclick:()=>xE(n)},"Eliminar")])])])}async function VE(n){const e=(Y("gastos")||[]).map(r=>({...r})),t=e.find(r=>r.id===n.id);if(t){t.archivado=!t.archivado;try{await ie("gastos",e),O(t.archivado?"Archivado":"Desarchivado","ok")}catch{O("No se pudo guardar","err")}}}function Od(n){const e=!!n;oe(e?"Editar gasto":"Nuevo gasto",t=>{const r=c("input",{value:n?.concepto||"",placeholder:"Concepto"}),i=c("input",{type:"number",step:"0.01",value:n?.importe??"",placeholder:"Importe €"}),s=Wl(Y("config"));for(const b of(Y("gastos")||[]).map(I=>I.categoria).filter(Boolean))s.includes(b)||s.push(b);const a=c("select",{style:"flex:1;"},s.map(b=>c("option",{value:b},b)));a.value=n?.categoria||"personal";const l=c("input",{type:"checkbox"});l.checked=n?!!n.deducible:Hs(a.value),a.addEventListener("change",()=>{e||(l.checked=Hs(a.value))});const u=c("button.btn.btn-sm",{type:"button",onclick:async()=>{const b=(window.prompt("Nueva categoría de gasto")||"").trim().toLowerCase();if(!b)return;[...a.options].some(R=>R.value===b)||a.append(c("option",{value:b},b)),a.value=b,e||(l.checked=Hs(b));const I={...Y("config")||{}},A=Wl(I);if(!A.includes(b)){I.categorias_gasto=[...A,b];try{await ie("config",I)}catch{O("No se pudo guardar la categoría","err")}}}},"+ nueva"),d=c("div",{style:"display:flex;gap:6px;align-items:center;"},[a,u]),f=c("select",{},[c("option",{value:"manual"},"Manual"),c("option",{value:"domiciliado"},"Domiciliado")]);f.value=n?.metodo||"manual";const g=c("textarea",{rows:2,placeholder:"Notas"},n?.notas||""),v=c("input",{type:"checkbox"});v.checked=!!n?.recurrente;const E=c("input",{type:"date",value:n?.fecha||ne()}),T=c("div",{},Ve("Fecha",E)),P=c("select",{},["mensual","trimestral","anual","semanal"].map(b=>c("option",{value:b},b)));P.value=n?.frecuencia||"mensual";const k=c("input",{type:"number",step:"1",value:n?.diaCobro??1,placeholder:"Día (1-31 o 0-6 semanal)"}),L=c("input",{type:"date",value:n?.fechaInicio||ne()}),j=c("input",{type:"date",value:n?.fechaFin||""}),U=c("div",{},[c("div.field-grid",{},[Ve("Frecuencia",P),Ve("Día de cobro",k)]),c("div.field-grid",{},[Ve("Fecha inicio",L),Ve("Fecha fin (opc.)",j)])]),$=()=>{T.hidden=v.checked,U.hidden=!v.checked};v.addEventListener("change",$);const Q=c("input",{type:"number",step:"0.01",value:n?.baseImponible??"",placeholder:"Base imponible (opc.)"}),M=c("input",{type:"number",step:"1",value:n?.tipoIVA??21,placeholder:"% IVA"}),w=c("input",{type:"number",step:"0.01",value:n?.ivaSoportado??"",placeholder:"IVA soportado (auto si vacío)"}),y=async()=>{if(!r.value.trim()){O("Falta el concepto","err");return}const b=parseFloat(i.value)||0;if(!b||b<=0){O("Falta el importe","err");return}const I=a.value,A=(Y("gastos")||[]).map(_=>({..._})),R=_=>(_.concepto=r.value.trim(),_.importe=b,_.categoria=I,_.deducible=l.checked,_.metodo=f.value||"manual",_.notas=g.value.trim(),_.recurrente=v.checked,_.recurrente?(_.frecuencia=P.value||"mensual",_.diaCobro=k.value!==""?parseInt(k.value,10):1,_.fechaInicio=L.value||ne(),_.fechaFin=j.value||null,delete _.fecha):(_.fecha=E.value||ne(),delete _.frecuencia,delete _.diaCobro,delete _.fechaInicio,delete _.fechaFin),Q.value!==""?(_.baseImponible=parseFloat(Q.value),_.tipoIVA=parseFloat(M.value)||21,_.ivaSoportado=w.value!==""?parseFloat(w.value):parseFloat((_.baseImponible*_.tipoIVA/100).toFixed(2))):(delete _.baseImponible,delete _.tipoIVA,delete _.ivaSoportado),_);if(e){const _=A.find(ae=>ae.id===n.id);if(!_){O("Gasto no encontrado","err");return}R(_)}else{const _=R({id:ve(),pagos:[],facturaDrive:null});A.push(_)}try{await ie("gastos",A),O(e?"Gasto guardado":"Gasto creado","ok"),t()}catch{O("No se pudo guardar","err")}};return $(),c("div",{},[Ve("Concepto",r),c("div.field-grid",{},[Ve("Importe €",i),Ve("Categoría",d)]),c("div.field-grid",{},[c("div.field",{},[c("label",{},"Deducible"),c("div",{style:"display:flex;align-items:center;gap:6px;height:34px;"},[l,c("span.small.muted",{},"IVA/IRPF")])]),Ve("Método",f)]),c("div.field",{},[c("label",{},"Recurrente"),c("div",{style:"display:flex;align-items:center;gap:6px;height:34px;"},[v,c("span.small.muted",{},"se repite en el tiempo")])]),T,U,c("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:10px 0 4px;"},"IVA (opcional)"),c("div.field-grid",{},[Ve("Base imponible",Q),Ve("% IVA",M)]),Ve("IVA soportado",w),Ve("Notas",g),c("div.btn-row",{},[c("button.btn",{onclick:t},"Cancelar"),c("button.btn.btn-primary",{onclick:y},e?"Guardar":"Crear")])])})}function OE(n){oe("Marcar pagado",e=>{const t=is([n],eu(-90),eu(120)).filter(d=>!d.pagado);if(!t.length)return c("div",{},[c("div.small.muted",{},"No hay ocurrencias pendientes de este gasto."),c("div.btn-row",{},[c("button.btn",{onclick:e},"Cerrar")])]);const r=ne(),i=t.find(d=>d.fecha===r)||t[0],s=c("select",{},t.map(d=>c("option",{value:d.fecha},`${d.fecha} · ${N(d.importe)}`)));s.value=i.fecha;const a=Object.keys((Y("capital")||{}).cuentas||{});a.includes("revolut")||a.unshift("revolut");const l=c("select",{},a.map(d=>c("option",{value:d},d)));l.value="revolut";const u=async()=>{try{await ME(n.id,s.value,l.value),O(`Pagado "${n.concepto}"`,"ok"),e()}catch{O("No se pudo registrar el pago","err")}};return c("div",{},[c("div.hero",{},[c("div.hero-label",{},n.concepto),c("div.hero-value",{},N(n.importe))]),c("div.field-grid",{},[Ve("Ocurrencia",s),Ve("Cuenta",l)]),c("div.small.muted",{},"Resta de la cuenta y añade un movimiento en el historial de capital, idéntico al bot."),c("div.btn-row",{},[c("button.btn",{onclick:e},"Cancelar"),c("button.btn.btn-primary",{onclick:u},"Confirmar pago")])])})}async function ME(n,e,t){const r=ne(),i=t||"revolut",s=(Y("gastos")||[]).map(f=>({...f,pagos:(f.pagos||[]).slice()})),a=s.find(f=>f.id===n);if(!a)throw new Error("gasto no encontrado");const l=a.importe;a.pagos||(a.pagos=[]),a.pagos=a.pagos.filter(f=>f.fecha!==e),a.pagos.push({fecha:e,fechaPago:r,importe:l,cuenta:i});const u=Y("capital")||{cuentas:{},historial:[]},d={...u,cuentas:{...u.cuentas||{}},historial:(u.historial||[]).slice()};d.cuentas[i]=(d.cuentas[i]||0)-l,d.historial.push({id:ve(),tipo:"gasto",cuenta:i,importe:-l,concepto:`Gasto: ${a.concepto}`,fechaISO:r}),await jr({gastos:s,capital:d})}function xE(n){const e=(n.pagos||[]).length>0,t=(n.pagos||[]).reduce((r,i)=>r+(i.importe||0),0);oe("Eliminar gasto",r=>c("div",{},[c("div.hero",{},[c("div.hero-label",{},n.concepto),c("div.hero-value",{},N(n.importe))]),e?c("div.card",{style:"border-color:var(--gold);"},c("div.row-sub",{style:"color:var(--gold);font-size:11px;"},`Tiene ${n.pagos.length} pago(s): se devolverán ${N(t)} al capital (reverso).`)):c("div.small.muted",{},"Se eliminará el gasto."),c("div.btn-row",{},[c("button.btn",{onclick:r},"Cancelar"),c("button.btn.btn-danger",{onclick:async()=>{try{await LE(n.id),O("Gasto eliminado","ok"),r()}catch{O("No se pudo eliminar","err")}}},"Eliminar")])]))}async function LE(n){const e=ne(),t=Y("gastos")||[],r=t.find(a=>a.id===n);if(!r)throw new Error("gasto no encontrado");let i=0;const s={};if((r.pagos||[]).length>0){const a=Y("capital")||{cuentas:{},historial:[]},l={...a,cuentas:{...a.cuentas||{}},historial:(a.historial||[]).slice()};r.pagos.forEach(u=>{l.cuentas[u.cuenta]=(l.cuentas[u.cuenta]||0)+u.importe,i+=u.importe}),l.historial.push({id:ve(),tipo:"reverso_gasto",cuenta:r.pagos[0].cuenta,importe:i,concepto:`Reverso: ${r.concepto}`,fechaISO:e}),s.capital=l}s.gastos=t.filter(a=>a.id!==r.id),s.capital?await jr(s):await ie("gastos",s.gastos)}function Ve(n,e){return c("div.field",{},[c("label",{},n),e])}function Qs(n,e){return c("div.kpi",{},[c("div.kpi-v",{},n),c("div.kpi-l",{},e)])}const je={anio:null,trim:null};function FE(n,e){if(!e.cargado.gastos||!e.cargado.facturas_emitidas){n.append(c("div.spinner"));return}const t=new Date;je.anio==null&&(je.anio=t.getFullYear(),je.trim=Math.floor(t.getMonth()/3)+1);const r=e.gastos||[],i=e.facturas_emitidas||[];n.append(c("div.card",{style:"border-color:var(--gold);"},c("div.row-sub",{style:"color:var(--gold);font-size:11px;"},"⚠ Estimación — la presentación oficial la hace el gestor."))),n.append(Md(r,i))}function Md(n,e){const t=c("div"),r=c("div.card"),i=c("select",{},[je.anio-2,je.anio-1,je.anio,je.anio+1].map(u=>c("option",{value:u},String(u))));i.value=String(je.anio);const s=c("select",{},[1,2,3,4].map(u=>c("option",{value:u},`Q${u}`)));s.value=String(je.trim);const a=()=>{je.anio=parseInt(i.value,10),je.trim=parseInt(s.value,10);const u=Md(n,e);t.replaceWith(u)};i.addEventListener("change",a),s.addEventListener("change",a),r.append(c("div.card-head",{},[c("h3",{},"Trimestre"),c("button.link",{onclick:()=>$E()},"+ Factura emitida")])),r.append(c("div.field-grid",{},[pt("Año",i),pt("Trimestre",s)])),t.append(r);const l=Rb(n,e,je.anio,je.trim);return t.append(UE(l)),t.append(jE(e)),t}function UE(n){const e=c("div.card");return e.append(c("div.card-head",{},[c("h3",{},`Resumen ${n.trimestre}`),c("span.small.muted",{},`plazo ${n.plazo}`)])),e.append(c("div.hero",{},[c("div.hero-label",{},"Total a provisionar"),c("div.hero-value",{},n.total_provisionar),c("div.hero-sub",{},`${n.rango.desde} → ${n.rango.hasta}`)])),e.append(c("div.section-label",{style:Ys()},"Modelo 303 · IVA")),e.append(dt("IVA repercutido",N(n.modelo_303.repercutido))),e.append(dt("IVA soportado",N(n.modelo_303.soportado))),e.append(dt(n.modelo_303.resultado.startsWith("A DEVOLVER")?"A devolver":"A ingresar",N(Math.abs(parseFloat(n.modelo_303.cuota))),n.modelo_303.cuota>=0?"neg":"pos")),e.append(c("div.section-label",{style:Ys()},"Modelo 130 · IRPF")),e.append(dt("Base ingresos",N(n.modelo_130.base_ingresos))),e.append(dt("Base gastos",N(n.modelo_130.base_gastos))),e.append(dt("Rendimiento neto",N(n.modelo_130.rendimiento))),e.append(dt("Pago fraccionado (20%)",N(n.modelo_130.cuota),"neg")),e.append(c("div.section-label",{style:Ys()},"Detalle")),e.append(dt(`Facturas emitidas (${n.facturas.cantidad})`,`base ${N(n.facturas.base)} · IVA ${N(n.facturas.iva_repercutido)}`)),e.append(dt(`Gastos deducibles (${n.gastos.cantidad})`,`base ${N(n.gastos.base)} · IVA ${N(n.gastos.iva_soportado)}`)),n.gastos.nota&&e.append(c("div.small.muted",{style:"margin-top:4px;"},n.gastos.nota)),e}function jE(n){const e=c("div.card");e.append(c("div.card-head",{},c("h3",{},"Facturas emitidas del trimestre")));const{desde:t,hasta:r}=Ab(`${je.anio}-${String((je.trim-1)*3+1).padStart(2,"0")}-01`),i=n.filter(s=>s.fecha>=t&&s.fecha<=r).sort((s,a)=>(a.fecha||"").localeCompare(s.fecha||""));if(!i.length)return e.append(c("div.card-empty",{},"Sin facturas este trimestre")),e;for(const s of i)e.append(c("div.row",{},[c("div.row-main",{},[c("div.row-label",{},[s.concepto||"(sin concepto)",s.numeroFactura?c("span.chip",{style:"margin-left:6px;"},s.numeroFactura):null]),c("div.row-sub",{},`${s.fecha} · ${s.cliente||"s/cliente"} · base ${N(s.baseImponible)} + ${be(s.tipoIVA||21,0)}% IVA`)]),c("div.row-right",{},[c("div.amount",{},N(s.total)),c("div",{style:"margin-top:4px;"},c("button.btn.btn-sm.btn-danger",{onclick:()=>BE(s.id)},"Borrar"))])]));return e}function $E(){oe("Nueva factura emitida",n=>{const e=c("input",{value:"",placeholder:"Concepto"}),t=c("input",{value:"",placeholder:"Cliente"}),r=c("input",{value:"personal",placeholder:"proyectoId"}),i=c("input",{type:"number",step:"0.01",value:"",placeholder:"Base imponible €"}),s=c("input",{type:"number",step:"1",value:21,placeholder:"% IVA"}),a=c("input",{type:"date",value:ne()}),l=c("input",{value:"",placeholder:"Nº factura"}),u=c("div.small.muted",{style:"margin-top:4px;"}),d=()=>{const g=parseFloat(i.value)||0,v=parseFloat(s.value)||21,E=parseFloat((g*v/100).toFixed(2));u.textContent=`IVA ${N(E)} · Total ${N(g+E)}`};[i,s].forEach(g=>g.addEventListener("input",d)),d();const f=async()=>{if(!e.value.trim()){O("Falta el concepto","err");return}const g=parseFloat(i.value)||0,v=parseFloat(s.value)||21,E=parseFloat((g*v/100).toFixed(2)),T={id:ve(),concepto:e.value.trim(),cliente:t.value.trim(),proyectoId:r.value.trim()||"personal",baseImponible:g,tipoIVA:v,ivaRepercutido:E,total:parseFloat((g+E).toFixed(2)),fecha:a.value||ne(),numeroFactura:l.value.trim()},P=(Y("facturas_emitidas")||[]).slice();P.push(T);try{await ie("facturas_emitidas",P),O("Factura registrada","ok"),n()}catch{O("No se pudo guardar","err")}};return c("div",{},[pt("Concepto",e),c("div.field-grid",{},[pt("Cliente",t),pt("proyectoId",r)]),c("div.field-grid",{},[pt("Base imponible €",i),pt("% IVA",s)]),u,c("div.field-grid",{},[pt("Fecha",a),pt("Nº factura",l)]),c("div.btn-row",{},[c("button.btn",{onclick:n},"Cancelar"),c("button.btn.btn-primary",{onclick:f},"Registrar")])])})}async function BE(n){const e=(Y("facturas_emitidas")||[]).filter(t=>t.id!==n);try{await ie("facturas_emitidas",e),O("Factura eliminada","ok")}catch{O("No se pudo guardar","err")}}function pt(n,e){return c("div.field",{},[c("label",{},n),e])}function Ys(){return"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:12px 0 4px;"}function dt(n,e,t){return c("div.row",{},[c("div.row-main",{},c("div.row-label",{},n)),c("div.row-right",{},c("div.amount"+(t?"."+t:""),{},e))])}const qE=[["patrimonio","Patrimonio"],["cobros","Cobros y pagos"],["gastos","Gastos"],["fiscal","Fiscal"]];let cr="patrimonio";function zE(n,e={}){n.append(c("h1.section-title",{},"Finanzas"));const t=c("div.subtabs"),r=c("div");n.append(t),n.append(r);const i={capital:null,config:null,patrimonio_hist:null,cobrospagos:null,gastos:null,trabajadores:null,trabajos:null,facturas_emitidas:null,cargado:{}},s=()=>{Tt(t);for(const[u,d]of qE)t.append(c("button.subtab"+(cr===u?".active":""),{onclick:()=>{cr=u,s()}},d));Tt(r),cr==="patrimonio"?HE(r,i):cr==="cobros"?TE(r,i):cr==="gastos"?NE(r,i):FE(r,i)},a=u=>Be(u,d=>{i[u]=d,i.cargado[u]=!0,s()}),l=[a("capital"),a("config"),a("patrimonio_hist"),a("cobrospagos"),a("gastos"),a("trabajadores"),a("trabajos"),a("facturas_emitidas")];return s(),()=>l.forEach(u=>u())}function HE(n,e){if(!e.cargado.capital||!e.cargado.config){n.append(c("div.spinner"));return}const t=e.capital||{cuentas:{},historial:[]},r=t.cuentas||{},i=e.config||{},s=Id(r);n.append(c("div.hero",{},[c("div.hero-label",{},"Patrimonio (sin impuestos)"),c("div.hero-value",{},N(s)),c("div.hero-sub",{},`${Object.keys(r).length} cuenta${Object.keys(r).length===1?"":"s"}`)]));const a=Object.keys(r);for(const[l,u]of Pa){const d=a.filter(v=>Td(i,v)===l);if(!d.length&&l!==""||!d.length)continue;const f=d.reduce((v,E)=>v+(Number(r[E])||0),0),g=c("div.card");g.append(c("div.card-head",{},[c("h3",{},u),c("span.amount",{},N(f))]));for(const v of d)g.append(GE(v,r[v],s,i));n.append(g)}n.append(c("div.btn-row",{},[c("button.btn.btn-sm.btn-primary",{onclick:()=>QE()},"+ Cuenta")])),n.append(YE(e,r)),n.append(ZE(r,i)),n.append(xd(t))}function GE(n,e,t,r){const i=n===Sa,s=t>0&&!i?(Number(e)||0)/t*100:null,a=c("select",{style:"font-size:9px;padding:2px 4px;background:var(--s2);border:1px solid var(--border);border-radius:5px;color:var(--text2);"},Pa.map(([l,u])=>c("option",{value:l},u)));return a.value=Td(r,n),a.addEventListener("change",()=>WE(n,a.value)),c("div.row",{},[c("div.row-main",{},[c("div.row-label",{},[n,i?c("span.chip",{style:"margin-left:6px;"},"fuera del total"):null]),c("div.row-sub",{},a)]),c("div.row-right",{},[c("div.amount",{},N(e)),c("div.small.muted",{},s==null?"—":`${be(s,1)}%`),c("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;"},[c("button.btn.btn-sm",{onclick:()=>KE(n,e)},"Editar")])])])}async function WE(n,e){const t={...Y("config")||{}};t.grupos_cuentas={...t.grupos_cuentas||{}},e?t.grupos_cuentas[n]=e:delete t.grupos_cuentas[n];try{await ie("config",t)}catch{O("No se pudo guardar el grupo","err")}}function KE(n,e){oe(`Cuenta · ${n}`,t=>{const r=c("input",{value:n,placeholder:"Nombre de la cuenta"}),i=c("input",{type:"number",step:"0.01",value:e??0,placeholder:"Saldo €"}),s=async()=>{const a=r.value.trim();if(!a){O("Falta el nombre","err");return}const l=Y("capital")||{cuentas:{}},u={...l.cuentas||{}},d=parseFloat(i.value)||0;if(a!==n){if(u[a]!=null){O("Ya existe una cuenta con ese nombre","err");return}delete u[n],u[a]=d}else u[n]=d;const f={capital:{...l,cuentas:u}};if(a!==n){const g={...Y("config")||{}};let v=!1;g.grupos_cuentas&&g.grupos_cuentas[n]!=null&&(g.grupos_cuentas={...g.grupos_cuentas},g.grupos_cuentas[a]=g.grupos_cuentas[n],delete g.grupos_cuentas[n],v=!0),g.reparto_pcts&&g.reparto_pcts[n]!=null&&(g.reparto_pcts={...g.reparto_pcts},g.reparto_pcts[a]=g.reparto_pcts[n],delete g.reparto_pcts[n],v=!0),v&&(f.config=g)}try{await ie("capital",f.capital),f.config&&await ie("config",f.config),O("Cuenta guardada","ok"),t()}catch{O("No se pudo guardar","err")}};return c("div",{},[$t("Nombre",r),$t("Saldo €",i),c("div.small.muted",{},"El saldo se fija directamente (como actualizar_capital). No genera movimiento en el historial."),c("div.btn-row",{},[c("button.btn",{onclick:t},"Cancelar"),c("button.btn.btn-primary",{onclick:s},"Guardar")])])})}function QE(){oe("Nueva cuenta",n=>{const e=c("input",{placeholder:"Nombre (p. ej. revolut)"}),t=c("input",{type:"number",step:"0.01",value:0,placeholder:"Saldo inicial €"}),r=c("select",{},Pa.map(([s,a])=>c("option",{value:s},a))),i=async()=>{const s=e.value.trim();if(!s){O("Falta el nombre","err");return}const a=Y("capital")||{cuentas:{}},l={...a.cuentas||{}};if(l[s]!=null){O("Ya existe esa cuenta","err");return}l[s]=parseFloat(t.value)||0;try{if(await ie("capital",{...a,cuentas:l}),r.value){const u={...Y("config")||{}};u.grupos_cuentas={...u.grupos_cuentas||{},[s]:r.value},await ie("config",u)}O("Cuenta creada","ok"),n()}catch{O("No se pudo guardar","err")}};return c("div",{},[$t("Nombre",e),c("div.field-grid",{},[$t("Saldo inicial",t),$t("Grupo",r)]),c("div.btn-row",{},[c("button.btn",{onclick:n},"Cancelar"),c("button.btn.btn-primary",{onclick:i},"Crear")])])})}function YE(n,e){const t=c("div.card"),r=(n.patrimonio_hist||[]).slice().sort((d,f)=>(d.mes||"").localeCompare(f.mes||""));if(t.append(c("div.card-head",{},[c("h3",{},"Histórico"),c("button.link",{onclick:()=>XE(e)},"Cerrar mes")])),!r.length)return t.append(c("div.card-empty",{},'Sin snapshots. "Cerrar mes" guarda los saldos actuales.')),t;t.append(JE(r));const i=[];for(const d of r)for(const f of Object.keys(d.saldos||{}))i.includes(f)||i.push(f);const s=c("div",{style:"overflow-x:auto;margin-top:10px;"}),a=c("table.ftable"),l=c("tr",{},[c("th",{},"Mes"),...i.map(d=>c("th",{},d)),c("th",{},"Total")]);a.append(c("thead",{},l));const u=c("tbody");for(const d of[...r].reverse())u.append(c("tr",{},[c("td",{},d.mes),...i.map(f=>c("td",{style:"text-align:right;"},d.saldos&&d.saldos[f]!=null?N(d.saldos[f]):"·")),c("td",{style:"text-align:right;font-weight:500;"},N(d.total))]));return a.append(u),s.append(a),t.append(s),t}function JE(n){const i=n.map(T=>Number(T.total)||0),s=Math.min(...i),l=Math.max(...i)-s||1,u=i.length,d=T=>u===1?320/2:6+T*(320-2*6)/(u-1),f=T=>84-(T-s)/l*(90-2*6),g=i.map((T,P)=>`${d(P).toFixed(1)},${f(T).toFixed(1)}`).join(" "),v=document.createElementNS("http://www.w3.org/2000/svg","svg");v.setAttribute("viewBox","0 0 320 90"),v.setAttribute("width","100%"),v.setAttribute("height",90),v.setAttribute("preserveAspectRatio","none"),v.style.display="block";const E=document.createElementNS(v.namespaceURI,"polyline");E.setAttribute("points",g),E.setAttribute("fill","none"),E.setAttribute("stroke","var(--gold)"),E.setAttribute("stroke-width","1.5"),v.append(E);for(let T=0;T<u;T++){const P=document.createElementNS(v.namespaceURI,"circle");P.setAttribute("cx",d(T)),P.setAttribute("cy",f(i[T])),P.setAttribute("r","2"),P.setAttribute("fill","var(--gold2)"),v.append(P)}return v}async function XE(n){const e=Ib(),t=(Y("patrimonio_hist")||[]).slice(),r=t.findIndex(s=>s.mes===e),i=async()=>{const s={mes:e,saldos:{...n},total:Id(n)};r>=0?t[r]=s:t.push(s),t.sort((a,l)=>(a.mes||"").localeCompare(l.mes||""));try{await ie("patrimonio_hist",t),O(`Snapshot de ${e} guardado`,"ok")}catch{O("No se pudo guardar","err")}};r>=0?oe("Cerrar mes",s=>c("div",{},[c("div.small.muted",{},`Ya existe un snapshot de ${e}. ¿Sobrescribir con los saldos actuales?`),c("div.btn-row",{},[c("button.btn",{onclick:s},"Cancelar"),c("button.btn.btn-primary",{onclick:()=>{i(),s()}},"Sobrescribir")])])):i()}function ZE(n,e){const t=c("div.card");t.append(c("div.card-head",{},c("h3",{},"Reparto")));const r=Object.keys(n).filter(g=>g!==Sa),i={...e.reparto_pcts||{}},s=c("input",{type:"number",step:"0.01",placeholder:"Importe a repartir €"}),a={},l=c("div"),u=c("div.small",{style:"margin-top:6px;"}),d=()=>{const g=parseFloat(s.value)||0;let v=0;for(const T of r){const P=parseFloat(a[T].pct.value)||0;v+=P,a[T].out.textContent=N(g*P/100)}const E=Math.round(v*100)/100;u.textContent=`Suma de %: ${be(E,1)}%`+(E===100?" ✓":" — ⚠ no suman 100"),u.style.color=E===100?"var(--green)":"var(--red)"};for(const g of r){const v=c("input",{type:"number",step:"0.5",value:i[g]??"",placeholder:"%",style:"max-width:70px;"}),E=c("div.amount",{},N(0));v.addEventListener("input",d),a[g]={pct:v,out:E},l.append(c("div.row",{},[c("div.row-main",{},c("div.row-label",{},g)),c("div.row-right",{style:"display:flex;gap:8px;align-items:center;"},[v,E])]))}const f=async()=>{const g={...Y("config")||{}};g.reparto_pcts={};for(const v of r){const E=parseFloat(a[v].pct.value)||0;E&&(g.reparto_pcts[v]=E)}try{await ie("config",g),O("Porcentajes guardados","ok")}catch{O("No se pudo guardar","err")}};return t.append($t("Importe a repartir",s)),s.addEventListener("input",d),t.append(l),t.append(u),t.append(c("div.btn-row",{},[c("button.btn.btn-sm",{onclick:f},"Guardar %")])),d(),t}const Nt={cuenta:"",tipo:""};function xd(n){const e=c("div.card");e.append(c("div.card-head",{},c("h3",{},"Movimientos de capital")));const t=n.historial||[],r=[...new Set(t.map(d=>d.cuenta).filter(Boolean))],i=[...new Set(t.map(d=>d.tipo).filter(Boolean))],s=c("select",{},[c("option",{value:""},"Todas"),...r.map(d=>c("option",{value:d},d))]);s.value=Nt.cuenta;const a=c("select",{},[c("option",{value:""},"Todos"),...i.map(d=>c("option",{value:d},d))]);a.value=Nt.tipo;const l=()=>{Nt.cuenta=s.value,Nt.tipo=a.value;const d=xd(n);e.replaceWith(d)};s.addEventListener("change",l),a.addEventListener("change",l),e.append(c("div.field-grid",{},[$t("Cuenta",s),$t("Tipo",a)]));let u=t.filter(d=>(!Nt.cuenta||d.cuenta===Nt.cuenta)&&(!Nt.tipo||d.tipo===Nt.tipo));if(u=u.slice().sort((d,f)=>(f.fechaISO||"").localeCompare(d.fechaISO||"")).slice(0,50),!u.length)return e.append(c("div.card-empty",{},"Sin movimientos")),e;for(const d of u){const f=Number(d.importe)||0;e.append(c("div.row",{},[c("div.row-main",{},[c("div.row-label",{},d.concepto||d.tipo),c("div.row-sub",{},`${d.fechaISO||"—"} · ${d.cuenta||""} · ${d.tipo||""}`)]),c("div.row-right",{},c("div.amount"+(f>=0?".pos":".neg"),{},N(f)))]))}return e}function $t(n,e){return c("div.field",{},[c("label",{},n),e])}const Js=[{id:"hoy",label:"Hoy",icono:"◒",render:Sb},{id:"trabajos",label:"Trabajos",icono:"▤",render:Xb},{id:"equipo",label:"Equipo",icono:"⚒",render:Bb},{id:"finanzas",label:"Finanzas",icono:"€",render:zE}];let Po="hoy",hi=null;function Co(n){if(typeof hi=="function"){try{hi()}catch{}hi=null}Po=n;const e=Js.find(r=>r.id===n)||Js[0];pb(Js,Po,Co);const t=document.getElementById("appMain");Tt(t),hi=e.render(t,{nav:Co})}function cs(n,e=!1){const t=document.getElementById("loginEstado");t&&(t.textContent=n||"",t.style.color=e?"var(--red)":"var(--text2)")}hb();document.getElementById("btnTema").addEventListener("click",db);document.getElementById("btnLogin").addEventListener("click",()=>ob(cs));document.getElementById("btnLogout").addEventListener("click",()=>cb());cs("Comprobando sesión…");ab(cs);sb(n=>{const e=document.getElementById("loginScreen"),t=document.getElementById("appScreen");n?(ql(n.uid),cs(""),e.hidden=!0,t.hidden=!1,document.getElementById("userAvatar").src=n.photoURL||"",document.getElementById("userName").textContent=(n.displayName||"").split(" ")[0]||"Rubén",Co(Po)):(ql(null),t.hidden=!0,e.hidden=!1)});
