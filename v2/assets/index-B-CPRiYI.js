(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var ul={};/**
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
 */const zu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},df=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],c=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(c&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],c=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|c&63)}}return e.join("")},qu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],c=i+1<n.length,l=c?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,_=h&63;u||(_=64,c||(g=64)),r.push(t[f],t[m],t[g],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(zu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):df(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new hf;const g=s<<2|l>>4;if(r.push(g),h!==64){const _=l<<4&240|h>>2;if(r.push(_),m!==64){const E=h<<6&192|m;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pf=function(n){const e=zu(n);return qu.encodeByteArray(e,!0)},Gi=function(n){return pf(n).replace(/\./g,"")},Hu=function(n){try{return qu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ff(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mf=()=>ff().__FIREBASE_DEFAULTS__,gf=()=>{if(typeof process>"u"||typeof ul>"u")return;const n=ul.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Hu(n[1]);return e&&JSON.parse(e)},us=()=>{try{return mf()||gf()||vf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gu=n=>{var e,t;return(t=(e=us())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},_f=n=>{const e=Gu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Wu=()=>{var n;return(n=us())===null||n===void 0?void 0:n.config},Ku=n=>{var e;return(e=us())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class yf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function bf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Gi(JSON.stringify(t)),Gi(JSON.stringify(c)),""].join(".")}/**
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
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ef(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function wf(){var n;const e=(n=us())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function If(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Af(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cf(){const n=Ge();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Rf(){return!wf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sf(){try{return typeof indexedDB=="object"}catch{return!1}}function Pf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const kf="FirebaseError";class Ut extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=kf,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ni.prototype.create)}}class ni{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],c=s?Nf(s,r):"Error",l=`${this.serviceName}: ${c} (${i}).`;return new Ut(i,l,r)}}function Nf(n,e){return n.replace(Df,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Df=/\{\$([^}]+)}/g;function Vf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Wi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],c=e[i];if(dl(s)&&dl(c)){if(!Wi(s,c))return!1}else if(s!==c)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function dl(n){return n!==null&&typeof n=="object"}/**
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
 */function ri(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Of(n,e){const t=new Mf(n,e);return t.subscribe.bind(t)}class Mf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");xf(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=oo),i.error===void 0&&(i.error=oo),i.complete===void 0&&(i.complete=oo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function oo(){}/**
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
 */function Re(n){return n&&n._delegate?n._delegate:n}class Cn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _n="[DEFAULT]";/**
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
 */class Lf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new yf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uf(e))try{this.getOrInitializeService({instanceIdentifier:_n})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=_n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_n){return this.instances.has(e)}getOptions(e=_n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,c]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&c.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const c=this.instances.get(i);return c&&e(c,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ff(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_n){return this.component?this.component.multipleInstances?e:_n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ff(n){return n===_n?void 0:n}function Uf(n){return n.instantiationMode==="EAGER"}/**
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
 */class jf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Lf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(te||(te={}));const $f={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Bf=te.INFO,zf={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},qf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=zf[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ca{constructor(e){this.name=e,this._logLevel=Bf,this._logHandler=qf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$f[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Hf=(n,e)=>e.some(t=>n instanceof t);let hl,pl;function Gf(){return hl||(hl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wf(){return pl||(pl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qu=new WeakMap,Po=new WeakMap,Yu=new WeakMap,ao=new WeakMap,la=new WeakMap;function Kf(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",c)},s=()=>{t(Zt(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Qu.set(t,n)}).catch(()=>{}),la.set(e,n),e}function Qf(n){if(Po.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",c),n.removeEventListener("abort",c)},s=()=>{t(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",c),n.addEventListener("abort",c)});Po.set(n,e)}let ko={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Po.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Yu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Zt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Yf(n){ko=n(ko)}function Jf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(co(this),e,...t);return Yu.set(r,e.sort?e.sort():[e]),Zt(r)}:Wf().includes(n)?function(...e){return n.apply(co(this),e),Zt(Qu.get(this))}:function(...e){return Zt(n.apply(co(this),e))}}function Xf(n){return typeof n=="function"?Jf(n):(n instanceof IDBTransaction&&Qf(n),Hf(n,Gf())?new Proxy(n,ko):n)}function Zt(n){if(n instanceof IDBRequest)return Kf(n);if(ao.has(n))return ao.get(n);const e=Xf(n);return e!==n&&(ao.set(n,e),la.set(e,n)),e}const co=n=>la.get(n);function Zf(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const c=indexedDB.open(n,e),l=Zt(c);return r&&c.addEventListener("upgradeneeded",u=>{r(Zt(c.result),u.oldVersion,u.newVersion,Zt(c.transaction),u)}),t&&c.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const em=["get","getKey","getAll","getAllKeys","count"],tm=["put","add","delete","clear"],lo=new Map;function fl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(lo.get(e))return lo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=tm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||em.includes(t)))return;const s=async function(c,...l){const u=this.transaction(c,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&u.done]))[0]};return lo.set(e,s),s}Yf(n=>({...n,get:(e,t,r)=>fl(e,t)||n.get(e,t,r),has:(e,t)=>!!fl(e,t)||n.has(e,t)}));/**
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
 */class nm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(rm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function rm(n){const e=n.getComponent();return e?.type==="VERSION"}const No="@firebase/app",ml="0.10.13";/**
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
 */const Mt=new ca("@firebase/app"),im="@firebase/app-compat",sm="@firebase/analytics-compat",om="@firebase/analytics",am="@firebase/app-check-compat",cm="@firebase/app-check",lm="@firebase/auth",um="@firebase/auth-compat",dm="@firebase/database",hm="@firebase/data-connect",pm="@firebase/database-compat",fm="@firebase/functions",mm="@firebase/functions-compat",gm="@firebase/installations",vm="@firebase/installations-compat",_m="@firebase/messaging",ym="@firebase/messaging-compat",bm="@firebase/performance",Em="@firebase/performance-compat",wm="@firebase/remote-config",Im="@firebase/remote-config-compat",Tm="@firebase/storage",Am="@firebase/storage-compat",Cm="@firebase/firestore",Rm="@firebase/vertexai-preview",Sm="@firebase/firestore-compat",Pm="firebase",km="10.14.1";/**
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
 */const Do="[DEFAULT]",Nm={[No]:"fire-core",[im]:"fire-core-compat",[om]:"fire-analytics",[sm]:"fire-analytics-compat",[cm]:"fire-app-check",[am]:"fire-app-check-compat",[lm]:"fire-auth",[um]:"fire-auth-compat",[dm]:"fire-rtdb",[hm]:"fire-data-connect",[pm]:"fire-rtdb-compat",[fm]:"fire-fn",[mm]:"fire-fn-compat",[gm]:"fire-iid",[vm]:"fire-iid-compat",[_m]:"fire-fcm",[ym]:"fire-fcm-compat",[bm]:"fire-perf",[Em]:"fire-perf-compat",[wm]:"fire-rc",[Im]:"fire-rc-compat",[Tm]:"fire-gcs",[Am]:"fire-gcs-compat",[Cm]:"fire-fst",[Sm]:"fire-fst-compat",[Rm]:"fire-vertex","fire-js":"fire-js",[Pm]:"fire-js-all"};/**
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
 */const Ki=new Map,Dm=new Map,Vo=new Map;function gl(n,e){try{n.container.addComponent(e)}catch(t){Mt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Jn(n){const e=n.name;if(Vo.has(e))return Mt.debug(`There were multiple attempts to register component ${e}.`),!1;Vo.set(e,n);for(const t of Ki.values())gl(t,n);for(const t of Dm.values())gl(t,n);return!0}function ua(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function pt(n){return n.settings!==void 0}/**
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
 */const Vm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},en=new ni("app","Firebase",Vm);/**
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
 */class Om{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
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
 */const lr=km;function Ju(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Do,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw en.create("bad-app-name",{appName:String(i)});if(t||(t=Wu()),!t)throw en.create("no-options");const s=Ki.get(i);if(s){if(Wi(t,s.options)&&Wi(r,s.config))return s;throw en.create("duplicate-app",{appName:i})}const c=new jf(i);for(const u of Vo.values())c.addComponent(u);const l=new Om(t,r,c);return Ki.set(i,l),l}function Xu(n=Do){const e=Ki.get(n);if(!e&&n===Do&&Wu())return Ju();if(!e)throw en.create("no-app",{appName:n});return e}function tn(n,e,t){var r;let i=(r=Nm[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),c=e.match(/\s|\//);if(s||c){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&c&&l.push("and"),c&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mt.warn(l.join(" "));return}Jn(new Cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Mm="firebase-heartbeat-database",xm=1,Hr="firebase-heartbeat-store";let uo=null;function Zu(){return uo||(uo=Zf(Mm,xm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Hr)}catch(t){console.warn(t)}}}}).catch(n=>{throw en.create("idb-open",{originalErrorMessage:n.message})})),uo}async function Lm(n){try{const t=(await Zu()).transaction(Hr),r=await t.objectStore(Hr).get(ed(n));return await t.done,r}catch(e){if(e instanceof Ut)Mt.warn(e.message);else{const t=en.create("idb-get",{originalErrorMessage:e?.message});Mt.warn(t.message)}}}async function vl(n,e){try{const r=(await Zu()).transaction(Hr,"readwrite");await r.objectStore(Hr).put(e,ed(n)),await r.done}catch(t){if(t instanceof Ut)Mt.warn(t.message);else{const r=en.create("idb-set",{originalErrorMessage:t?.message});Mt.warn(r.message)}}}function ed(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Fm=1024,Um=30*24*60*60*1e3;class jm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Bm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_l();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(c=>c.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const l=new Date(c.date).valueOf();return Date.now()-l<=Um}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Mt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=_l(),{heartbeatsToSend:r,unsentEntries:i}=$m(this._heartbeatsCache.heartbeats),s=Gi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Mt.warn(t),""}}}function _l(){return new Date().toISOString().substring(0,10)}function $m(n,e=Fm){const t=[];let r=n.slice();for(const i of n){const s=t.find(c=>c.agent===i.agent);if(s){if(s.dates.push(i.date),yl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),yl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Bm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sf()?Pf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Lm(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function yl(n){return Gi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function zm(n){Jn(new Cn("platform-logger",e=>new nm(e),"PRIVATE")),Jn(new Cn("heartbeat",e=>new jm(e),"PRIVATE")),tn(No,ml,n),tn(No,ml,"esm2017"),tn("fire-js","")}zm("");var qm="firebase",Hm="10.14.1";/**
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
 */tn(qm,Hm,"app");var bl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var En,td;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function w(){}w.prototype=y.prototype,A.D=y.prototype,A.prototype=new w,A.prototype.constructor=A,A.C=function(T,C,R){for(var b=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)b[oe-2]=arguments[oe];return y.prototype[C].apply(T,b)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,y,w){w||(w=0);var T=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)T[C]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(C=0;16>C;++C)T[C]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=A.g[0],w=A.g[1],C=A.g[2];var R=A.g[3],b=y+(R^w&(C^R))+T[0]+3614090360&4294967295;y=w+(b<<7&4294967295|b>>>25),b=R+(C^y&(w^C))+T[1]+3905402710&4294967295,R=y+(b<<12&4294967295|b>>>20),b=C+(w^R&(y^w))+T[2]+606105819&4294967295,C=R+(b<<17&4294967295|b>>>15),b=w+(y^C&(R^y))+T[3]+3250441966&4294967295,w=C+(b<<22&4294967295|b>>>10),b=y+(R^w&(C^R))+T[4]+4118548399&4294967295,y=w+(b<<7&4294967295|b>>>25),b=R+(C^y&(w^C))+T[5]+1200080426&4294967295,R=y+(b<<12&4294967295|b>>>20),b=C+(w^R&(y^w))+T[6]+2821735955&4294967295,C=R+(b<<17&4294967295|b>>>15),b=w+(y^C&(R^y))+T[7]+4249261313&4294967295,w=C+(b<<22&4294967295|b>>>10),b=y+(R^w&(C^R))+T[8]+1770035416&4294967295,y=w+(b<<7&4294967295|b>>>25),b=R+(C^y&(w^C))+T[9]+2336552879&4294967295,R=y+(b<<12&4294967295|b>>>20),b=C+(w^R&(y^w))+T[10]+4294925233&4294967295,C=R+(b<<17&4294967295|b>>>15),b=w+(y^C&(R^y))+T[11]+2304563134&4294967295,w=C+(b<<22&4294967295|b>>>10),b=y+(R^w&(C^R))+T[12]+1804603682&4294967295,y=w+(b<<7&4294967295|b>>>25),b=R+(C^y&(w^C))+T[13]+4254626195&4294967295,R=y+(b<<12&4294967295|b>>>20),b=C+(w^R&(y^w))+T[14]+2792965006&4294967295,C=R+(b<<17&4294967295|b>>>15),b=w+(y^C&(R^y))+T[15]+1236535329&4294967295,w=C+(b<<22&4294967295|b>>>10),b=y+(C^R&(w^C))+T[1]+4129170786&4294967295,y=w+(b<<5&4294967295|b>>>27),b=R+(w^C&(y^w))+T[6]+3225465664&4294967295,R=y+(b<<9&4294967295|b>>>23),b=C+(y^w&(R^y))+T[11]+643717713&4294967295,C=R+(b<<14&4294967295|b>>>18),b=w+(R^y&(C^R))+T[0]+3921069994&4294967295,w=C+(b<<20&4294967295|b>>>12),b=y+(C^R&(w^C))+T[5]+3593408605&4294967295,y=w+(b<<5&4294967295|b>>>27),b=R+(w^C&(y^w))+T[10]+38016083&4294967295,R=y+(b<<9&4294967295|b>>>23),b=C+(y^w&(R^y))+T[15]+3634488961&4294967295,C=R+(b<<14&4294967295|b>>>18),b=w+(R^y&(C^R))+T[4]+3889429448&4294967295,w=C+(b<<20&4294967295|b>>>12),b=y+(C^R&(w^C))+T[9]+568446438&4294967295,y=w+(b<<5&4294967295|b>>>27),b=R+(w^C&(y^w))+T[14]+3275163606&4294967295,R=y+(b<<9&4294967295|b>>>23),b=C+(y^w&(R^y))+T[3]+4107603335&4294967295,C=R+(b<<14&4294967295|b>>>18),b=w+(R^y&(C^R))+T[8]+1163531501&4294967295,w=C+(b<<20&4294967295|b>>>12),b=y+(C^R&(w^C))+T[13]+2850285829&4294967295,y=w+(b<<5&4294967295|b>>>27),b=R+(w^C&(y^w))+T[2]+4243563512&4294967295,R=y+(b<<9&4294967295|b>>>23),b=C+(y^w&(R^y))+T[7]+1735328473&4294967295,C=R+(b<<14&4294967295|b>>>18),b=w+(R^y&(C^R))+T[12]+2368359562&4294967295,w=C+(b<<20&4294967295|b>>>12),b=y+(w^C^R)+T[5]+4294588738&4294967295,y=w+(b<<4&4294967295|b>>>28),b=R+(y^w^C)+T[8]+2272392833&4294967295,R=y+(b<<11&4294967295|b>>>21),b=C+(R^y^w)+T[11]+1839030562&4294967295,C=R+(b<<16&4294967295|b>>>16),b=w+(C^R^y)+T[14]+4259657740&4294967295,w=C+(b<<23&4294967295|b>>>9),b=y+(w^C^R)+T[1]+2763975236&4294967295,y=w+(b<<4&4294967295|b>>>28),b=R+(y^w^C)+T[4]+1272893353&4294967295,R=y+(b<<11&4294967295|b>>>21),b=C+(R^y^w)+T[7]+4139469664&4294967295,C=R+(b<<16&4294967295|b>>>16),b=w+(C^R^y)+T[10]+3200236656&4294967295,w=C+(b<<23&4294967295|b>>>9),b=y+(w^C^R)+T[13]+681279174&4294967295,y=w+(b<<4&4294967295|b>>>28),b=R+(y^w^C)+T[0]+3936430074&4294967295,R=y+(b<<11&4294967295|b>>>21),b=C+(R^y^w)+T[3]+3572445317&4294967295,C=R+(b<<16&4294967295|b>>>16),b=w+(C^R^y)+T[6]+76029189&4294967295,w=C+(b<<23&4294967295|b>>>9),b=y+(w^C^R)+T[9]+3654602809&4294967295,y=w+(b<<4&4294967295|b>>>28),b=R+(y^w^C)+T[12]+3873151461&4294967295,R=y+(b<<11&4294967295|b>>>21),b=C+(R^y^w)+T[15]+530742520&4294967295,C=R+(b<<16&4294967295|b>>>16),b=w+(C^R^y)+T[2]+3299628645&4294967295,w=C+(b<<23&4294967295|b>>>9),b=y+(C^(w|~R))+T[0]+4096336452&4294967295,y=w+(b<<6&4294967295|b>>>26),b=R+(w^(y|~C))+T[7]+1126891415&4294967295,R=y+(b<<10&4294967295|b>>>22),b=C+(y^(R|~w))+T[14]+2878612391&4294967295,C=R+(b<<15&4294967295|b>>>17),b=w+(R^(C|~y))+T[5]+4237533241&4294967295,w=C+(b<<21&4294967295|b>>>11),b=y+(C^(w|~R))+T[12]+1700485571&4294967295,y=w+(b<<6&4294967295|b>>>26),b=R+(w^(y|~C))+T[3]+2399980690&4294967295,R=y+(b<<10&4294967295|b>>>22),b=C+(y^(R|~w))+T[10]+4293915773&4294967295,C=R+(b<<15&4294967295|b>>>17),b=w+(R^(C|~y))+T[1]+2240044497&4294967295,w=C+(b<<21&4294967295|b>>>11),b=y+(C^(w|~R))+T[8]+1873313359&4294967295,y=w+(b<<6&4294967295|b>>>26),b=R+(w^(y|~C))+T[15]+4264355552&4294967295,R=y+(b<<10&4294967295|b>>>22),b=C+(y^(R|~w))+T[6]+2734768916&4294967295,C=R+(b<<15&4294967295|b>>>17),b=w+(R^(C|~y))+T[13]+1309151649&4294967295,w=C+(b<<21&4294967295|b>>>11),b=y+(C^(w|~R))+T[4]+4149444226&4294967295,y=w+(b<<6&4294967295|b>>>26),b=R+(w^(y|~C))+T[11]+3174756917&4294967295,R=y+(b<<10&4294967295|b>>>22),b=C+(y^(R|~w))+T[2]+718787259&4294967295,C=R+(b<<15&4294967295|b>>>17),b=w+(R^(C|~y))+T[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(C+(b<<21&4294967295|b>>>11))&4294967295,A.g[2]=A.g[2]+C&4294967295,A.g[3]=A.g[3]+R&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var w=y-this.blockSize,T=this.B,C=this.h,R=0;R<y;){if(C==0)for(;R<=w;)i(this,A,R),R+=this.blockSize;if(typeof A=="string"){for(;R<y;)if(T[C++]=A.charCodeAt(R++),C==this.blockSize){i(this,T),C=0;break}}else for(;R<y;)if(T[C++]=A[R++],C==this.blockSize){i(this,T),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var w=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=w&255,w/=256;for(this.u(A),A=Array(16),y=w=0;4>y;++y)for(var T=0;32>T;T+=8)A[w++]=this.g[y]>>>T&255;return A};function s(A,y){var w=l;return Object.prototype.hasOwnProperty.call(w,A)?w[A]:w[A]=y(A)}function c(A,y){this.h=y;for(var w=[],T=!0,C=A.length-1;0<=C;C--){var R=A[C]|0;T&&R==y||(w[C]=R,T=!1)}this.g=w}var l={};function u(A){return-128<=A&&128>A?s(A,function(y){return new c([y|0],0>y?-1:0)}):new c([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return m;if(0>A)return k(h(-A));for(var y=[],w=1,T=0;A>=w;T++)y[T]=A/w|0,w*=4294967296;return new c(y,0)}function f(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return k(f(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(y,8)),T=m,C=0;C<A.length;C+=8){var R=Math.min(8,A.length-C),b=parseInt(A.substring(C,C+R),y);8>R?(R=h(Math.pow(y,R)),T=T.j(R).add(h(b))):(T=T.j(w),T=T.add(h(b)))}return T}var m=u(0),g=u(1),_=u(16777216);n=c.prototype,n.m=function(){if(I(this))return-k(this).m();for(var A=0,y=1,w=0;w<this.g.length;w++){var T=this.i(w);A+=(0<=T?T:4294967296+T)*y,y*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(E(this))return"0";if(I(this))return"-"+k(this).toString(A);for(var y=h(Math.pow(A,6)),w=this,T="";;){var C=$(w,y).g;w=V(w,C.j(y));var R=((0<w.g.length?w.g[0]:w.h)>>>0).toString(A);if(w=C,E(w))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function E(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function I(A){return A.h==-1}n.l=function(A){return A=V(this,A),I(A)?-1:E(A)?0:1};function k(A){for(var y=A.g.length,w=[],T=0;T<y;T++)w[T]=~A.g[T];return new c(w,~A.h).add(g)}n.abs=function(){return I(this)?k(this):this},n.add=function(A){for(var y=Math.max(this.g.length,A.g.length),w=[],T=0,C=0;C<=y;C++){var R=T+(this.i(C)&65535)+(A.i(C)&65535),b=(R>>>16)+(this.i(C)>>>16)+(A.i(C)>>>16);T=b>>>16,R&=65535,b&=65535,w[C]=b<<16|R}return new c(w,w[w.length-1]&-2147483648?-1:0)};function V(A,y){return A.add(k(y))}n.j=function(A){if(E(this)||E(A))return m;if(I(this))return I(A)?k(this).j(k(A)):k(k(this).j(A));if(I(A))return k(this.j(k(A)));if(0>this.l(_)&&0>A.l(_))return h(this.m()*A.m());for(var y=this.g.length+A.g.length,w=[],T=0;T<2*y;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var C=0;C<A.g.length;C++){var R=this.i(T)>>>16,b=this.i(T)&65535,oe=A.i(C)>>>16,ye=A.i(C)&65535;w[2*T+2*C]+=b*ye,j(w,2*T+2*C),w[2*T+2*C+1]+=R*ye,j(w,2*T+2*C+1),w[2*T+2*C+1]+=b*oe,j(w,2*T+2*C+1),w[2*T+2*C+2]+=R*oe,j(w,2*T+2*C+2)}for(T=0;T<y;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=y;T<2*y;T++)w[T]=0;return new c(w,0)};function j(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function U(A,y){this.g=A,this.h=y}function $(A,y){if(E(y))throw Error("division by zero");if(E(A))return new U(m,m);if(I(A))return y=$(k(A),y),new U(k(y.g),k(y.h));if(I(y))return y=$(A,k(y)),new U(k(y.g),y.h);if(30<A.g.length){if(I(A)||I(y))throw Error("slowDivide_ only works with positive integers.");for(var w=g,T=y;0>=T.l(A);)w=W(w),T=W(T);var C=x(w,1),R=x(T,1);for(T=x(T,2),w=x(w,2);!E(T);){var b=R.add(T);0>=b.l(A)&&(C=C.add(w),R=b),T=x(T,1),w=x(w,1)}return y=V(A,C.j(y)),new U(C,y)}for(C=m;0<=A.l(y);){for(w=Math.max(1,Math.floor(A.m()/y.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(w),b=R.j(y);I(b)||0<b.l(A);)w-=T,R=h(w),b=R.j(y);E(R)&&(R=g),C=C.add(R),A=V(A,b)}return new U(C,A)}n.A=function(A){return $(this,A).h},n.and=function(A){for(var y=Math.max(this.g.length,A.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)&A.i(T);return new c(w,this.h&A.h)},n.or=function(A){for(var y=Math.max(this.g.length,A.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)|A.i(T);return new c(w,this.h|A.h)},n.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)^A.i(T);return new c(w,this.h^A.h)};function W(A){for(var y=A.g.length+1,w=[],T=0;T<y;T++)w[T]=A.i(T)<<1|A.i(T-1)>>>31;return new c(w,A.h)}function x(A,y){var w=y>>5;y%=32;for(var T=A.g.length-w,C=[],R=0;R<T;R++)C[R]=0<y?A.i(R+w)>>>y|A.i(R+w+1)<<32-y:A.i(R+w);return new c(C,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,td=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=h,c.fromString=f,En=c}).apply(typeof bl<"u"?bl:typeof self<"u"?self:typeof window<"u"?window:{});var Ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nd,Dr,rd,Li,Oo,id,sd,od;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,p){return a==Array.prototype||a==Object.prototype||(a[d]=p.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ni=="object"&&Ni];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function i(a,d){if(d)e:{var p=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var S=a[v];if(!(S in p))break e;p=p[S]}a=a[a.length-1],v=p[a],d=d(v),d!=v&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}function s(a,d){a instanceof String&&(a+="");var p=0,v=!1,S={next:function(){if(!v&&p<a.length){var P=p++;return{value:d(P,a[P]),done:!1}}return v=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(a){return a||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function h(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function f(a,d,p){return a.call.apply(a.bind,arguments)}function m(a,d,p){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,v),a.apply(d,S)}}return function(){return a.apply(d,arguments)}}function g(a,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function _(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function E(a,d){function p(){}p.prototype=d.prototype,a.aa=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(v,S,P){for(var F=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)F[ce-2]=arguments[ce];return d.prototype[S].apply(v,F)}}function I(a){const d=a.length;if(0<d){const p=Array(d);for(let v=0;v<d;v++)p[v]=a[v];return p}return[]}function k(a,d){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(u(v)){const S=a.length||0,P=v.length||0;a.length=S+P;for(let F=0;F<P;F++)a[S+F]=v[F]}else a.push(v)}}class V{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function j(a){return/^[\s\xa0]*$/.test(a)}function U(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var W=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function x(a,d,p){for(const v in a)d.call(p,a[v],v,a)}function A(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function y(a){const d={};for(const p in a)d[p]=a[p];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,d){let p,v;for(let S=1;S<arguments.length;S++){v=arguments[S];for(p in v)a[p]=v[p];for(let P=0;P<w.length;P++)p=w[P],Object.prototype.hasOwnProperty.call(v,p)&&(a[p]=v[p])}}function C(a){var d=1;a=a.split(":");const p=[];for(;0<d&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function R(a){l.setTimeout(()=>{throw a},0)}function b(){var a=Pe;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class oe{constructor(){this.h=this.g=null}add(d,p){const v=ye.get();v.set(d,p),this.h?this.h.next=v:this.g=v,this.h=v}}var ye=new V(()=>new Ze,a=>a.reset());class Ze{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let at,dn=!1,Pe=new oe,fi=()=>{const a=l.Promise.resolve(void 0);at=()=>{a.then(xs)}};var xs=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(p){R(p)}var d=ye;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}dn=!1};function ht(){this.s=this.s,this.C=this.C}ht.prototype.s=!1,ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function L(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}L.prototype.h=function(){this.defaultPrevented=!0};var ue=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,d),l.removeEventListener("test",p,d)}catch{}return a}();function he(a,d){if(L.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(W){e:{try{$(d.nodeName);var S=!0;break e}catch{}S=!1}S||(d=null)}}else p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Me[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&he.aa.h.call(this)}}E(he,L);var Me={2:"touch",3:"pen",4:"mouse"};he.prototype.h=function(){he.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var we="closure_listenable_"+(1e6*Math.random()|0),be=0;function It(a,d,p,v,S){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!v,this.ha=S,this.key=++be,this.da=this.fa=!1}function xn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ye(a){this.src=a,this.g={},this.h=0}Ye.prototype.add=function(a,d,p,v,S){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var F=Fs(a,d,v,S);return-1<F?(d=a[F],p||(d.fa=!1)):(d=new It(d,this.src,P,!!v,S),d.fa=p,a.push(d)),d};function Ls(a,d){var p=d.type;if(p in a.g){var v=a.g[p],S=Array.prototype.indexOf.call(v,d,void 0),P;(P=0<=S)&&Array.prototype.splice.call(v,S,1),P&&(xn(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Fs(a,d,p,v){for(var S=0;S<a.length;++S){var P=a[S];if(!P.da&&P.listener==d&&P.capture==!!p&&P.ha==v)return S}return-1}var Us="closure_lm_"+(1e6*Math.random()|0),js={};function dc(a,d,p,v,S){if(Array.isArray(d)){for(var P=0;P<d.length;P++)dc(a,d[P],p,v,S);return null}return p=fc(p),a&&a[we]?a.K(d,p,h(v)?!!v.capture:!1,S):Mp(a,d,p,!1,v,S)}function Mp(a,d,p,v,S,P){if(!d)throw Error("Invalid event type");var F=h(S)?!!S.capture:!!S,ce=Bs(a);if(ce||(a[Us]=ce=new Ye(a)),p=ce.add(d,p,v,F,P),p.proxy)return p;if(v=xp(),p.proxy=v,v.src=a,v.listener=p,a.addEventListener)ue||(S=F),S===void 0&&(S=!1),a.addEventListener(d.toString(),v,S);else if(a.attachEvent)a.attachEvent(pc(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function xp(){function a(p){return d.call(a.src,a.listener,p)}const d=Lp;return a}function hc(a,d,p,v,S){if(Array.isArray(d))for(var P=0;P<d.length;P++)hc(a,d[P],p,v,S);else v=h(v)?!!v.capture:!!v,p=fc(p),a&&a[we]?(a=a.i,d=String(d).toString(),d in a.g&&(P=a.g[d],p=Fs(P,p,v,S),-1<p&&(xn(P[p]),Array.prototype.splice.call(P,p,1),P.length==0&&(delete a.g[d],a.h--)))):a&&(a=Bs(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Fs(d,p,v,S)),(p=-1<a?d[a]:null)&&$s(p))}function $s(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[we])Ls(d.i,a);else{var p=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(p,v,a.capture):d.detachEvent?d.detachEvent(pc(p),v):d.addListener&&d.removeListener&&d.removeListener(v),(p=Bs(d))?(Ls(p,a),p.h==0&&(p.src=null,d[Us]=null)):xn(a)}}}function pc(a){return a in js?js[a]:js[a]="on"+a}function Lp(a,d){if(a.da)a=!0;else{d=new he(d,this);var p=a.listener,v=a.ha||a.src;a.fa&&$s(a),a=p.call(v,d)}return a}function Bs(a){return a=a[Us],a instanceof Ye?a:null}var zs="__closure_events_fn_"+(1e9*Math.random()>>>0);function fc(a){return typeof a=="function"?a:(a[zs]||(a[zs]=function(d){return a.handleEvent(d)}),a[zs])}function xe(){ht.call(this),this.i=new Ye(this),this.M=this,this.F=null}E(xe,ht),xe.prototype[we]=!0,xe.prototype.removeEventListener=function(a,d,p,v){hc(this,a,d,p,v)};function We(a,d){var p,v=a.F;if(v)for(p=[];v;v=v.F)p.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new L(d,a);else if(d instanceof L)d.target=d.target||a;else{var S=d;d=new L(v,a),T(d,S)}if(S=!0,p)for(var P=p.length-1;0<=P;P--){var F=d.g=p[P];S=mi(F,v,!0,d)&&S}if(F=d.g=a,S=mi(F,v,!0,d)&&S,S=mi(F,v,!1,d)&&S,p)for(P=0;P<p.length;P++)F=d.g=p[P],S=mi(F,v,!1,d)&&S}xe.prototype.N=function(){if(xe.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var p=a.g[d],v=0;v<p.length;v++)xn(p[v]);delete a.g[d],a.h--}}this.F=null},xe.prototype.K=function(a,d,p,v){return this.i.add(String(a),d,!1,p,v)},xe.prototype.L=function(a,d,p,v){return this.i.add(String(a),d,!0,p,v)};function mi(a,d,p,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var S=!0,P=0;P<d.length;++P){var F=d[P];if(F&&!F.da&&F.capture==p){var ce=F.listener,ke=F.ha||F.src;F.fa&&Ls(a.i,F),S=ce.call(ke,v)!==!1&&S}}return S&&!v.defaultPrevented}function mc(a,d,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function gc(a){a.g=mc(()=>{a.g=null,a.i&&(a.i=!1,gc(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Fp extends ht{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:gc(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mr(a){ht.call(this),this.h=a,this.g={}}E(mr,ht);var vc=[];function _c(a){x(a.g,function(d,p){this.g.hasOwnProperty(p)&&$s(d)},a),a.g={}}mr.prototype.N=function(){mr.aa.N.call(this),_c(this)},mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qs=l.JSON.stringify,Up=l.JSON.parse,jp=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Hs(){}Hs.prototype.h=null;function yc(a){return a.h||(a.h=a.i())}function bc(){}var gr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gs(){L.call(this,"d")}E(Gs,L);function Ws(){L.call(this,"c")}E(Ws,L);var hn={},Ec=null;function gi(){return Ec=Ec||new xe}hn.La="serverreachability";function wc(a){L.call(this,hn.La,a)}E(wc,L);function vr(a){const d=gi();We(d,new wc(d))}hn.STAT_EVENT="statevent";function Ic(a,d){L.call(this,hn.STAT_EVENT,a),this.stat=d}E(Ic,L);function Ke(a){const d=gi();We(d,new Ic(d,a))}hn.Ma="timingevent";function Tc(a,d){L.call(this,hn.Ma,a),this.size=d}E(Tc,L);function _r(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function yr(){this.g=!0}yr.prototype.xa=function(){this.g=!1};function $p(a,d,p,v,S,P){a.info(function(){if(a.g)if(P)for(var F="",ce=P.split("&"),ke=0;ke<ce.length;ke++){var ie=ce[ke].split("=");if(1<ie.length){var Le=ie[0];ie=ie[1];var Fe=Le.split("_");F=2<=Fe.length&&Fe[1]=="type"?F+(Le+"="+ie+"&"):F+(Le+"=redacted&")}}else F=null;else F=P;return"XMLHTTP REQ ("+v+") [attempt "+S+"]: "+d+`
`+p+`
`+F})}function Bp(a,d,p,v,S,P,F){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+S+"]: "+d+`
`+p+`
`+P+" "+F})}function Ln(a,d,p,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+qp(a,p)+(v?" "+v:"")})}function zp(a,d){a.info(function(){return"TIMEOUT: "+d})}yr.prototype.info=function(){};function qp(a,d){if(!a.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var v=p[a];if(!(2>v.length)){var S=v[1];if(Array.isArray(S)&&!(1>S.length)){var P=S[0];if(P!="noop"&&P!="stop"&&P!="close")for(var F=1;F<S.length;F++)S[F]=""}}}}return qs(p)}catch{return d}}var vi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ac={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ks;function _i(){}E(_i,Hs),_i.prototype.g=function(){return new XMLHttpRequest},_i.prototype.i=function(){return{}},Ks=new _i;function jt(a,d,p,v){this.j=a,this.i=d,this.l=p,this.R=v||1,this.U=new mr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cc}function Cc(){this.i=null,this.g="",this.h=!1}var Rc={},Qs={};function Ys(a,d,p){a.L=1,a.v=wi(Tt(d)),a.m=p,a.P=!0,Sc(a,null)}function Sc(a,d){a.F=Date.now(),yi(a),a.A=Tt(a.v);var p=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Bc(p.i,"t",v),a.C=0,p=a.j.J,a.h=new Cc,a.g=ol(a.j,p?d:null,!a.m),0<a.O&&(a.M=new Fp(g(a.Y,a,a.g),a.O)),d=a.U,p=a.g,v=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(vc[0]=S.toString()),S=vc);for(var P=0;P<S.length;P++){var F=dc(p,S[P],v||d.handleEvent,!1,d.h||d);if(!F)break;d.g[F.key]=F}d=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),vr(),$p(a.i,a.u,a.A,a.l,a.R,a.m)}jt.prototype.ca=function(a){a=a.target;const d=this.M;d&&At(a)==3?d.j():this.Y(a)},jt.prototype.Y=function(a){try{if(a==this.g)e:{const Fe=At(this.g);var d=this.g.Ba();const jn=this.g.Z();if(!(3>Fe)&&(Fe!=3||this.g&&(this.h.h||this.g.oa()||Qc(this.g)))){this.J||Fe!=4||d==7||(d==8||0>=jn?vr(3):vr(2)),Js(this);var p=this.g.Z();this.X=p;t:if(Pc(this)){var v=Qc(this.g);a="";var S=v.length,P=At(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),br(this);var F="";break t}this.h.i=new l.TextDecoder}for(d=0;d<S;d++)this.h.h=!0,a+=this.h.i.decode(v[d],{stream:!(P&&d==S-1)});v.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=p==200,Bp(this.i,this.u,this.A,this.l,this.R,Fe,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,ke=this.g;if((ce=ke.g?ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(ce)){var ie=ce;break t}}ie=null}if(p=ie)Ln(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xs(this,p);else{this.o=!1,this.s=3,Ke(12),pn(this),br(this);break e}}if(this.P){p=!0;let ct;for(;!this.J&&this.C<F.length;)if(ct=Hp(this,F),ct==Qs){Fe==4&&(this.s=4,Ke(14),p=!1),Ln(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==Rc){this.s=4,Ke(15),Ln(this.i,this.l,F,"[Invalid Chunk]"),p=!1;break}else Ln(this.i,this.l,ct,null),Xs(this,ct);if(Pc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Fe!=4||F.length!=0||this.h.h||(this.s=1,Ke(16),p=!1),this.o=this.o&&p,!p)Ln(this.i,this.l,F,"[Invalid Chunked Response]"),pn(this),br(this);else if(0<F.length&&!this.W){this.W=!0;var Le=this.j;Le.g==this&&Le.ba&&!Le.M&&(Le.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),io(Le),Le.M=!0,Ke(11))}}else Ln(this.i,this.l,F,null),Xs(this,F);Fe==4&&pn(this),this.o&&!this.J&&(Fe==4?nl(this.j,this):(this.o=!1,yi(this)))}else lf(this.g),p==400&&0<F.indexOf("Unknown SID")?(this.s=3,Ke(12)):(this.s=0,Ke(13)),pn(this),br(this)}}}catch{}finally{}};function Pc(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Hp(a,d){var p=a.C,v=d.indexOf(`
`,p);return v==-1?Qs:(p=Number(d.substring(p,v)),isNaN(p)?Rc:(v+=1,v+p>d.length?Qs:(d=d.slice(v,v+p),a.C=v+p,d)))}jt.prototype.cancel=function(){this.J=!0,pn(this)};function yi(a){a.S=Date.now()+a.I,kc(a,a.I)}function kc(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=_r(g(a.ba,a),d)}function Js(a){a.B&&(l.clearTimeout(a.B),a.B=null)}jt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(zp(this.i,this.A),this.L!=2&&(vr(),Ke(17)),pn(this),this.s=2,br(this)):kc(this,this.S-a)};function br(a){a.j.G==0||a.J||nl(a.j,a)}function pn(a){Js(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,_c(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Xs(a,d){try{var p=a.j;if(p.G!=0&&(p.g==a||Zs(p.h,a))){if(!a.K&&Zs(p.h,a)&&p.G==3){try{var v=p.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var S=v;if(S[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Si(p),Ci(p);else break e;ro(p),Ke(18)}}else p.za=S[1],0<p.za-p.T&&37500>S[2]&&p.F&&p.v==0&&!p.C&&(p.C=_r(g(p.Za,p),6e3));if(1>=Vc(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else mn(p,11)}else if((a.K||p.g==a)&&Si(p),!j(d))for(S=p.Da.g.parse(d),d=0;d<S.length;d++){let ie=S[d];if(p.T=ie[0],ie=ie[1],p.G==2)if(ie[0]=="c"){p.K=ie[1],p.ia=ie[2];const Le=ie[3];Le!=null&&(p.la=Le,p.j.info("VER="+p.la));const Fe=ie[4];Fe!=null&&(p.Aa=Fe,p.j.info("SVER="+p.Aa));const jn=ie[5];jn!=null&&typeof jn=="number"&&0<jn&&(v=1.5*jn,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const ct=a.g;if(ct){const ki=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ki){var P=v.h;P.g||ki.indexOf("spdy")==-1&&ki.indexOf("quic")==-1&&ki.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(eo(P,P.h),P.h=null))}if(v.D){const so=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;so&&(v.ya=so,de(v.I,v.D,so))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var F=a;if(v.qa=sl(v,v.J?v.ia:null,v.W),F.K){Oc(v.h,F);var ce=F,ke=v.L;ke&&(ce.I=ke),ce.B&&(Js(ce),yi(ce)),v.g=F}else el(v);0<p.i.length&&Ri(p)}else ie[0]!="stop"&&ie[0]!="close"||mn(p,7);else p.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?mn(p,7):no(p):ie[0]!="noop"&&p.l&&p.l.ta(ie),p.v=0)}}vr(4)}catch{}}var Gp=class{constructor(a,d){this.g=a,this.map=d}};function Nc(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Dc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Vc(a){return a.h?1:a.g?a.g.size:0}function Zs(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function eo(a,d){a.g?a.g.add(d):a.h=d}function Oc(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Nc.prototype.cancel=function(){if(this.i=Mc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Mc(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.D);return d}return I(a.i)}function Wp(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],p=a.length,v=0;v<p;v++)d.push(a[v]);return d}d=[],p=0;for(v in a)d[p++]=a[v];return d}function Kp(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var p=0;p<a;p++)d.push(p);return d}d=[],p=0;for(const v in a)d[p++]=v;return d}}}function xc(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var p=Kp(a),v=Wp(a),S=v.length,P=0;P<S;P++)d.call(void 0,v[P],p&&p[P],a)}var Lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qp(a,d){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var v=a[p].indexOf("="),S=null;if(0<=v){var P=a[p].substring(0,v);S=a[p].substring(v+1)}else P=a[p];d(P,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function fn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof fn){this.h=a.h,bi(this,a.j),this.o=a.o,this.g=a.g,Ei(this,a.s),this.l=a.l;var d=a.i,p=new Ir;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Fc(this,p),this.m=a.m}else a&&(d=String(a).match(Lc))?(this.h=!1,bi(this,d[1]||"",!0),this.o=Er(d[2]||""),this.g=Er(d[3]||"",!0),Ei(this,d[4]),this.l=Er(d[5]||"",!0),Fc(this,d[6]||"",!0),this.m=Er(d[7]||"")):(this.h=!1,this.i=new Ir(null,this.h))}fn.prototype.toString=function(){var a=[],d=this.j;d&&a.push(wr(d,Uc,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(wr(d,Uc,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(wr(p,p.charAt(0)=="/"?Xp:Jp,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",wr(p,ef)),a.join("")};function Tt(a){return new fn(a)}function bi(a,d,p){a.j=p?Er(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ei(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Fc(a,d,p){d instanceof Ir?(a.i=d,tf(a.i,a.h)):(p||(d=wr(d,Zp)),a.i=new Ir(d,a.h))}function de(a,d,p){a.i.set(d,p)}function wi(a){return de(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Er(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function wr(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,Yp),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Yp(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Uc=/[#\/\?@]/g,Jp=/[#\?:]/g,Xp=/[#\?]/g,Zp=/[#\?@]/g,ef=/#/g;function Ir(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function $t(a){a.g||(a.g=new Map,a.h=0,a.i&&Qp(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}n=Ir.prototype,n.add=function(a,d){$t(this),this.i=null,a=Fn(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function jc(a,d){$t(a),d=Fn(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function $c(a,d){return $t(a),d=Fn(a,d),a.g.has(d)}n.forEach=function(a,d){$t(this),this.g.forEach(function(p,v){p.forEach(function(S){a.call(d,S,v,this)},this)},this)},n.na=function(){$t(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let v=0;v<d.length;v++){const S=a[v];for(let P=0;P<S.length;P++)p.push(d[v])}return p},n.V=function(a){$t(this);let d=[];if(typeof a=="string")$c(this,a)&&(d=d.concat(this.g.get(Fn(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)d=d.concat(a[p])}return d},n.set=function(a,d){return $t(this),this.i=null,a=Fn(this,a),$c(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},n.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Bc(a,d,p){jc(a,d),0<p.length&&(a.i=null,a.g.set(Fn(a,d),I(p)),a.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var v=d[p];const P=encodeURIComponent(String(v)),F=this.V(v);for(v=0;v<F.length;v++){var S=P;F[v]!==""&&(S+="="+encodeURIComponent(String(F[v]))),a.push(S)}}return this.i=a.join("&")};function Fn(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function tf(a,d){d&&!a.j&&($t(a),a.i=null,a.g.forEach(function(p,v){var S=v.toLowerCase();v!=S&&(jc(this,v),Bc(this,S,p))},a)),a.j=d}function nf(a,d){const p=new yr;if(l.Image){const v=new Image;v.onload=_(Bt,p,"TestLoadImage: loaded",!0,d,v),v.onerror=_(Bt,p,"TestLoadImage: error",!1,d,v),v.onabort=_(Bt,p,"TestLoadImage: abort",!1,d,v),v.ontimeout=_(Bt,p,"TestLoadImage: timeout",!1,d,v),l.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function rf(a,d){const p=new yr,v=new AbortController,S=setTimeout(()=>{v.abort(),Bt(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(P=>{clearTimeout(S),P.ok?Bt(p,"TestPingServer: ok",!0,d):Bt(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(S),Bt(p,"TestPingServer: error",!1,d)})}function Bt(a,d,p,v,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),v(p)}catch{}}function sf(){this.g=new jp}function of(a,d,p){const v=p||"";try{xc(a,function(S,P){let F=S;h(S)&&(F=qs(S)),d.push(v+P+"="+encodeURIComponent(F))})}catch(S){throw d.push(v+"type="+encodeURIComponent("_badmap")),S}}function Ii(a){this.l=a.Ub||null,this.j=a.eb||!1}E(Ii,Hs),Ii.prototype.g=function(){return new Ti(this.l,this.j)},Ii.prototype.i=function(a){return function(){return a}}({});function Ti(a,d){xe.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Ti,xe),n=Ti.prototype,n.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Ar(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ar(this)),this.g&&(this.readyState=3,Ar(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zc(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function zc(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Tr(this):Ar(this),this.readyState==3&&zc(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Tr(this))},n.Qa=function(a){this.g&&(this.response=a,Tr(this))},n.ga=function(){this.g&&Tr(this)};function Tr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ar(a)}n.setRequestHeader=function(a,d){this.u.append(a,d)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function Ar(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ti.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function qc(a){let d="";return x(a,function(p,v){d+=v,d+=":",d+=p,d+=`\r
`}),d}function to(a,d,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=qc(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):de(a,d,p))}function fe(a){xe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(fe,xe);var af=/^https?$/i,cf=["POST","PUT"];n=fe.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,d,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ks.g(),this.v=this.o?yc(this.o):yc(Ks),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(P){Hc(this,P);return}if(a=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var S in v)p.set(S,v[S]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const P of v.keys())p.set(P,v.get(P));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(P=>P.toLowerCase()=="content-type"),S=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(cf,d,void 0))||v||S||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,F]of p)this.g.setRequestHeader(P,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kc(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){Hc(this,P)}};function Hc(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Gc(a),Ai(a)}function Gc(a){a.A||(a.A=!0,We(a,"complete"),We(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,We(this,"complete"),We(this,"abort"),Ai(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ai(this,!0)),fe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Wc(this):this.bb())},n.bb=function(){Wc(this)};function Wc(a){if(a.h&&typeof c<"u"&&(!a.v[1]||At(a)!=4||a.Z()!=2)){if(a.u&&At(a)==4)mc(a.Ea,0,a);else if(We(a,"readystatechange"),At(a)==4){a.h=!1;try{const F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var v;if(v=F===0){var S=String(a.D).match(Lc)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),v=!af.test(S?S.toLowerCase():"")}p=v}if(p)We(a,"complete"),We(a,"success");else{a.m=6;try{var P=2<At(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",Gc(a)}}finally{Ai(a)}}}}function Ai(a,d){if(a.g){Kc(a);const p=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||We(a,"ready");try{p.onreadystatechange=v}catch{}}}function Kc(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function At(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<At(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Up(d)}};function Qc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function lf(a){const d={};a=(a.g&&2<=At(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(j(a[v]))continue;var p=C(a[v]);const S=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const P=d[S]||[];d[S]=P,P.push(p)}A(d,function(v){return v.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cr(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function Yc(a){this.Aa=0,this.i=[],this.j=new yr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Cr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Cr("baseRetryDelayMs",5e3,a),this.cb=Cr("retryDelaySeedMs",1e4,a),this.Wa=Cr("forwardChannelMaxRetries",2,a),this.wa=Cr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Nc(a&&a.concurrentRequestLimit),this.Da=new sf,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Yc.prototype,n.la=8,n.G=1,n.connect=function(a,d,p,v){Ke(0),this.W=a,this.H=d||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=sl(this,null,this.W),Ri(this)};function no(a){if(Jc(a),a.G==3){var d=a.U++,p=Tt(a.I);if(de(p,"SID",a.K),de(p,"RID",d),de(p,"TYPE","terminate"),Rr(a,p),d=new jt(a,a.j,d),d.L=2,d.v=wi(Tt(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=d.v,p=!0),p||(d.g=ol(d.j,null),d.g.ea(d.v)),d.F=Date.now(),yi(d)}il(a)}function Ci(a){a.g&&(io(a),a.g.cancel(),a.g=null)}function Jc(a){Ci(a),a.u&&(l.clearTimeout(a.u),a.u=null),Si(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ri(a){if(!Dc(a.h)&&!a.s){a.s=!0;var d=a.Ga;at||fi(),dn||(at(),dn=!0),Pe.add(d,a),a.B=0}}function uf(a,d){return Vc(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=_r(g(a.Ga,a,d),rl(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new jt(this,this.j,a);let P=this.o;if(this.S&&(P?(P=y(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(S.H=P,P=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Zc(this,S,d),p=Tt(this.I),de(p,"RID",a),de(p,"CVER",22),this.D&&de(p,"X-HTTP-Session-Id",this.D),Rr(this,p),P&&(this.O?d="headers="+encodeURIComponent(String(qc(P)))+"&"+d:this.m&&to(p,this.m,P)),eo(this.h,S),this.Ua&&de(p,"TYPE","init"),this.P?(de(p,"$req",d),de(p,"SID","null"),S.T=!0,Ys(S,p,null)):Ys(S,p,d),this.G=2}}else this.G==3&&(a?Xc(this,a):this.i.length==0||Dc(this.h)||Xc(this))};function Xc(a,d){var p;d?p=d.l:p=a.U++;const v=Tt(a.I);de(v,"SID",a.K),de(v,"RID",p),de(v,"AID",a.T),Rr(a,v),a.m&&a.o&&to(v,a.m,a.o),p=new jt(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Zc(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),eo(a.h,p),Ys(p,v,d)}function Rr(a,d){a.H&&x(a.H,function(p,v){de(d,v,p)}),a.l&&xc({},function(p,v){de(d,v,p)})}function Zc(a,d,p){p=Math.min(a.i.length,p);var v=a.l?g(a.l.Na,a.l,a):null;e:{var S=a.i;let P=-1;for(;;){const F=["count="+p];P==-1?0<p?(P=S[0].g,F.push("ofs="+P)):P=0:F.push("ofs="+P);let ce=!0;for(let ke=0;ke<p;ke++){let ie=S[ke].g;const Le=S[ke].map;if(ie-=P,0>ie)P=Math.max(0,S[ke].g-100),ce=!1;else try{of(Le,F,"req"+ie+"_")}catch{v&&v(Le)}}if(ce){v=F.join("&");break e}}}return a=a.i.splice(0,p),d.D=a,v}function el(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;at||fi(),dn||(at(),dn=!0),Pe.add(d,a),a.v=0}}function ro(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=_r(g(a.Fa,a),rl(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,tl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=_r(g(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ke(10),Ci(this),tl(this))};function io(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function tl(a){a.g=new jt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Tt(a.qa);de(d,"RID","rpc"),de(d,"SID",a.K),de(d,"AID",a.T),de(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&de(d,"TO",a.ja),de(d,"TYPE","xmlhttp"),Rr(a,d),a.m&&a.o&&to(d,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=wi(Tt(d)),p.m=null,p.P=!0,Sc(p,a)}n.Za=function(){this.C!=null&&(this.C=null,Ci(this),ro(this),Ke(19))};function Si(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function nl(a,d){var p=null;if(a.g==d){Si(a),io(a),a.g=null;var v=2}else if(Zs(a.h,d))p=d.D,Oc(a.h,d),v=1;else return;if(a.G!=0){if(d.o)if(v==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var S=a.B;v=gi(),We(v,new Tc(v,p)),Ri(a)}else el(a);else if(S=d.s,S==3||S==0&&0<d.X||!(v==1&&uf(a,d)||v==2&&ro(a)))switch(p&&0<p.length&&(d=a.h,d.i=d.i.concat(p)),S){case 1:mn(a,5);break;case 4:mn(a,10);break;case 3:mn(a,6);break;default:mn(a,2)}}}function rl(a,d){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*d}function mn(a,d){if(a.j.info("Error code "+d),d==2){var p=g(a.fb,a),v=a.Xa;const S=!v;v=new fn(v||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||bi(v,"https"),wi(v),S?nf(v.toString(),p):rf(v.toString(),p)}else Ke(2);a.G=0,a.l&&a.l.sa(d),il(a),Jc(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function il(a){if(a.G=0,a.ka=[],a.l){const d=Mc(a.h);(d.length!=0||a.i.length!=0)&&(k(a.ka,d),k(a.ka,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.ra()}}function sl(a,d,p){var v=p instanceof fn?Tt(p):new fn(p);if(v.g!="")d&&(v.g=d+"."+v.g),Ei(v,v.s);else{var S=l.location;v=S.protocol,d=d?d+"."+S.hostname:S.hostname,S=+S.port;var P=new fn(null);v&&bi(P,v),d&&(P.g=d),S&&Ei(P,S),p&&(P.l=p),v=P}return p=a.D,d=a.ya,p&&d&&de(v,p,d),de(v,"VER",a.la),Rr(a,v),v}function ol(a,d,p){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new fe(new Ii({eb:p})):new fe(a.pa),d.Ha(a.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function al(){}n=al.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Pi(){}Pi.prototype.g=function(a,d){return new et(a,d)};function et(a,d){xe.call(this),this.g=new Yc(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!j(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!j(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Un(this)}E(et,xe),et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){no(this.g)},et.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=qs(a),a=p);d.i.push(new Gp(d.Ya++,a)),d.G==3&&Ri(d)},et.prototype.N=function(){this.g.l=null,delete this.j,no(this.g),delete this.g,et.aa.N.call(this)};function cl(a){Gs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}E(cl,Gs);function ll(){Ws.call(this),this.status=1}E(ll,Ws);function Un(a){this.g=a}E(Un,al),Un.prototype.ua=function(){We(this.g,"a")},Un.prototype.ta=function(a){We(this.g,new cl(a))},Un.prototype.sa=function(a){We(this.g,new ll)},Un.prototype.ra=function(){We(this.g,"b")},Pi.prototype.createWebChannel=Pi.prototype.g,et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,od=function(){return new Pi},sd=function(){return gi()},id=hn,Oo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vi.NO_ERROR=0,vi.TIMEOUT=8,vi.HTTP_ERROR=6,Li=vi,Ac.COMPLETE="complete",rd=Ac,bc.EventType=gr,gr.OPEN="a",gr.CLOSE="b",gr.ERROR="c",gr.MESSAGE="d",xe.prototype.listen=xe.prototype.K,Dr=bc,fe.prototype.listenOnce=fe.prototype.L,fe.prototype.getLastError=fe.prototype.Ka,fe.prototype.getLastErrorCode=fe.prototype.Ba,fe.prototype.getStatus=fe.prototype.Z,fe.prototype.getResponseJson=fe.prototype.Oa,fe.prototype.getResponseText=fe.prototype.oa,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Ha,nd=fe}).apply(typeof Ni<"u"?Ni:typeof self<"u"?self:typeof window<"u"?window:{});const El="@firebase/firestore";/**
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
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
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
 */let ur="10.14.0";/**
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
 */const Rn=new ca("@firebase/firestore");function Sr(){return Rn.logLevel}function B(n,...e){if(Rn.logLevel<=te.DEBUG){const t=e.map(da);Rn.debug(`Firestore (${ur}): ${n}`,...t)}}function xt(n,...e){if(Rn.logLevel<=te.ERROR){const t=e.map(da);Rn.error(`Firestore (${ur}): ${n}`,...t)}}function Xn(n,...e){if(Rn.logLevel<=te.WARN){const t=e.map(da);Rn.warn(`Firestore (${ur}): ${n}`,...t)}}function da(n){if(typeof n=="string")return n;try{/**
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
 */function Q(n="Unexpected state"){const e=`FIRESTORE (${ur}) INTERNAL ASSERTION FAILED: `+n;throw xt(e),new Error(e)}function ae(n,e){n||Q()}function J(n,e){return n}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Ut{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class wn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class ad{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Gm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ze.UNAUTHENTICATED))}shutdown(){}}class Wm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Km{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new wn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wn,e.enqueueRetryable(()=>i(this.currentUser))};const c=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wn)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new ad(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new ze(e)}}class Qm{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ym{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Qm(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xm{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ae(this.o===void 0);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const c=s.token!==this.R;return this.R=s.token,B("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ae(typeof t.token=="string"),this.R=t.token,new Jm(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Zm(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class cd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Zm(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function se(n,e){return n<e?-1:n>e?1:0}function Zn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class Te{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Te(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Te(0,0))}static max(){return new Y(new Te(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Gr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Q(),r===void 0?r=e.length-t:r>e.length-t&&Q(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Gr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Gr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),c=t.get(i);if(s<c)return-1;if(s>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class me extends Gr{construct(e,t,r){return new me(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new me(t)}static emptyPath(){return new me([])}}const eg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class De extends Gr{construct(e,t,r){return new De(e,t,r)}static isValidIdentifier(e){return eg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),De.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new De(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new z(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(c=!c,i++):l!=="."||c?(r+=l,i++):(s(),i++)}if(s(),c)throw new z(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new De(t)}static emptyPath(){return new De([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(me.fromString(e))}static fromName(e){return new G(me.fromString(e).popFirst(5))}static empty(){return new G(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new me(e.slice()))}}function tg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Te(t+1,0):new Te(t,r));return new on(i,G.empty(),e)}function ng(n){return new on(n.readTime,n.key,-1)}class on{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new on(Y.min(),G.empty(),-1)}static max(){return new on(Y.max(),G.empty(),-1)}}function rg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=G.comparator(n.documentKey,e.documentKey),t!==0?t:se(n.largestBatchId,e.largestBatchId))}/**
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
 */const ig="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ii(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==ig)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):O.reject(t)}static resolve(e){return new O((t,r)=>{t(e)})}static reject(e){return new O((t,r)=>{r(e)})}static waitFor(e){return new O((t,r)=>{let i=0,s=0,c=!1;e.forEach(l=>{++i,l.next(()=>{++s,c&&s===i&&t()},u=>r(u))}),c=!0,s===i&&t()})}static or(e){let t=O.resolve(!1);for(const r of e)t=t.next(i=>i?O.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new O((r,i)=>{const s=e.length,c=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next(f=>{c[h]=f,++l,l===s&&r(c)},f=>i(f))}})}static doWhile(e,t){return new O((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function og(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function si(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ha{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ha.oe=-1;function ds(n){return n==null}function Qi(n){return n===0&&1/n==-1/0}function ag(n){return typeof n=="number"&&Number.isInteger(n)&&!Qi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function wl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Dn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ld(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class pe{constructor(e,t){this.comparator=e,this.root=t||Ne.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Di(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Di(this.root,e,this.comparator,!1)}getReverseIterator(){return new Di(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Di(this.root,e,this.comparator,!0)}}class Di{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ne.RED,this.left=i??Ne.EMPTY,this.right=s??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ne(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ne.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ne(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ve{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Il(this.data.getIterator())}getIteratorFrom(e){return new Il(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ve(this.comparator);return t.data=e,t}}class Il{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class tt{constructor(e){this.fields=e,e.sort(De.comparator)}static empty(){return new tt([])}unionWith(e){let t=new Ve(De.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new tt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class ud extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ud("Invalid base64 string: "+s):s}}(e);return new Oe(t)}static fromUint8Array(e){const t=function(i){let s="";for(let c=0;c<i.length;++c)s+=String.fromCharCode(i[c]);return s}(e);return new Oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const cg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function an(n){if(ae(!!n),typeof n=="string"){let e=0;const t=cg.exec(n);if(ae(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(n.seconds),nanos:ve(n.nanos)}}function ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Sn(n){return typeof n=="string"?Oe.fromBase64String(n):Oe.fromUint8Array(n)}/**
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
 */function pa(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function fa(n){const e=n.mapValue.fields.__previous_value__;return pa(e)?fa(e):e}function Wr(n){const e=an(n.mapValue.fields.__local_write_time__.timestampValue);return new Te(e.seconds,e.nanos)}/**
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
 */class lg{constructor(e,t,r,i,s,c,l,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=c,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Kr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Kr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Kr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Vi={mapValue:{}};function Pn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?pa(n)?4:dg(n)?9007199254740991:ug(n)?10:11:Q()}function yt(n,e){if(n===e)return!0;const t=Pn(n);if(t!==Pn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Wr(n).isEqual(Wr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const c=an(i.timestampValue),l=an(s.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Sn(i.bytesValue).isEqual(Sn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ve(i.geoPointValue.latitude)===ve(s.geoPointValue.latitude)&&ve(i.geoPointValue.longitude)===ve(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ve(i.integerValue)===ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const c=ve(i.doubleValue),l=ve(s.doubleValue);return c===l?Qi(c)===Qi(l):isNaN(c)&&isNaN(l)}return!1}(n,e);case 9:return Zn(n.arrayValue.values||[],e.arrayValue.values||[],yt);case 10:case 11:return function(i,s){const c=i.mapValue.fields||{},l=s.mapValue.fields||{};if(wl(c)!==wl(l))return!1;for(const u in c)if(c.hasOwnProperty(u)&&(l[u]===void 0||!yt(c[u],l[u])))return!1;return!0}(n,e);default:return Q()}}function Qr(n,e){return(n.values||[]).find(t=>yt(t,e))!==void 0}function er(n,e){if(n===e)return 0;const t=Pn(n),r=Pn(e);if(t!==r)return se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return se(n.booleanValue,e.booleanValue);case 2:return function(s,c){const l=ve(s.integerValue||s.doubleValue),u=ve(c.integerValue||c.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Tl(n.timestampValue,e.timestampValue);case 4:return Tl(Wr(n),Wr(e));case 5:return se(n.stringValue,e.stringValue);case 6:return function(s,c){const l=Sn(s),u=Sn(c);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,c){const l=s.split("/"),u=c.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=se(l[h],u[h]);if(f!==0)return f}return se(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,c){const l=se(ve(s.latitude),ve(c.latitude));return l!==0?l:se(ve(s.longitude),ve(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Al(n.arrayValue,e.arrayValue);case 10:return function(s,c){var l,u,h,f;const m=s.fields||{},g=c.fields||{},_=(l=m.value)===null||l===void 0?void 0:l.arrayValue,E=(u=g.value)===null||u===void 0?void 0:u.arrayValue,I=se(((h=_?.values)===null||h===void 0?void 0:h.length)||0,((f=E?.values)===null||f===void 0?void 0:f.length)||0);return I!==0?I:Al(_,E)}(n.mapValue,e.mapValue);case 11:return function(s,c){if(s===Vi.mapValue&&c===Vi.mapValue)return 0;if(s===Vi.mapValue)return 1;if(c===Vi.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=c.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=se(u[m],f[m]);if(g!==0)return g;const _=er(l[u[m]],h[f[m]]);if(_!==0)return _}return se(u.length,f.length)}(n.mapValue,e.mapValue);default:throw Q()}}function Tl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return se(n,e);const t=an(n),r=an(e),i=se(t.seconds,r.seconds);return i!==0?i:se(t.nanos,r.nanos)}function Al(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=er(t[i],r[i]);if(s)return s}return se(t.length,r.length)}function tr(n){return Mo(n)}function Mo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=an(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Sn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return G.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Mo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const c of r)s?s=!1:i+=",",i+=`${c}:${Mo(t.fields[c])}`;return i+"}"}(n.mapValue):Q()}function xo(n){return!!n&&"integerValue"in n}function ma(n){return!!n&&"arrayValue"in n}function Cl(n){return!!n&&"nullValue"in n}function Rl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fi(n){return!!n&&"mapValue"in n}function ug(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Lr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Dn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Lr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Lr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function dg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Je{constructor(e){this.value=e}static empty(){return new Je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Fi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Lr(t)}setAll(e){let t=De.emptyPath(),r={},i=[];e.forEach((c,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}c?r[l.lastSegment()]=Lr(c):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Fi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Fi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Dn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Je(Lr(this.value))}}function dd(n){const e=[];return Dn(n.fields,(t,r)=>{const i=new De([t]);if(Fi(r)){const s=dd(r.mapValue).fields;if(s.length===0)e.push(i);else for(const c of s)e.push(i.child(c))}else e.push(i)}),new tt(e)}/**
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
 */class He{constructor(e,t,r,i,s,c,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=c,this.documentState=l}static newInvalidDocument(e){return new He(e,0,Y.min(),Y.min(),Y.min(),Je.empty(),0)}static newFoundDocument(e,t,r,i){return new He(e,1,t,Y.min(),r,i,0)}static newNoDocument(e,t){return new He(e,2,t,Y.min(),Y.min(),Je.empty(),0)}static newUnknownDocument(e,t){return new He(e,3,t,Y.min(),Y.min(),Je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yi{constructor(e,t){this.position=e,this.inclusive=t}}function Sl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],c=n.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(c.referenceValue),t.key):r=er(c,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!yt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ji{constructor(e,t="asc"){this.field=e,this.dir=t}}function hg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class hd{}class Ie extends hd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new fg(e,t,r):t==="array-contains"?new vg(e,r):t==="in"?new _g(e,r):t==="not-in"?new yg(e,r):t==="array-contains-any"?new bg(e,r):new Ie(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new mg(e,r):new gg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(er(t,this.value)):t!==null&&Pn(this.value)===Pn(t)&&this.matchesComparison(er(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bt extends hd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new bt(e,t)}matches(e){return pd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function pd(n){return n.op==="and"}function fd(n){return pg(n)&&pd(n)}function pg(n){for(const e of n.filters)if(e instanceof bt)return!1;return!0}function Lo(n){if(n instanceof Ie)return n.field.canonicalString()+n.op.toString()+tr(n.value);if(fd(n))return n.filters.map(e=>Lo(e)).join(",");{const e=n.filters.map(t=>Lo(t)).join(",");return`${n.op}(${e})`}}function md(n,e){return n instanceof Ie?function(r,i){return i instanceof Ie&&r.op===i.op&&r.field.isEqual(i.field)&&yt(r.value,i.value)}(n,e):n instanceof bt?function(r,i){return i instanceof bt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,c,l)=>s&&md(c,i.filters[l]),!0):!1}(n,e):void Q()}function gd(n){return n instanceof Ie?function(t){return`${t.field.canonicalString()} ${t.op} ${tr(t.value)}`}(n):n instanceof bt?function(t){return t.op.toString()+" {"+t.getFilters().map(gd).join(" ,")+"}"}(n):"Filter"}class fg extends Ie{constructor(e,t,r){super(e,t,r),this.key=G.fromName(r.referenceValue)}matches(e){const t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class mg extends Ie{constructor(e,t){super(e,"in",t),this.keys=vd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class gg extends Ie{constructor(e,t){super(e,"not-in",t),this.keys=vd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function vd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>G.fromName(r.referenceValue))}class vg extends Ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ma(t)&&Qr(t.arrayValue,this.value)}}class _g extends Ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qr(this.value.arrayValue,t)}}class yg extends Ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Qr(this.value.arrayValue,t)}}class bg extends Ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ma(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Qr(this.value.arrayValue,r))}}/**
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
 */class Eg{constructor(e,t=null,r=[],i=[],s=null,c=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=c,this.endAt=l,this.ue=null}}function kl(n,e=null,t=[],r=[],i=null,s=null,c=null){return new Eg(n,e,t,r,i,s,c)}function ga(n){const e=J(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Lo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ds(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>tr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>tr(r)).join(",")),e.ue=t}return e.ue}function va(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!hg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!md(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Pl(n.startAt,e.startAt)&&Pl(n.endAt,e.endAt)}function Fo(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class hs{constructor(e,t=null,r=[],i=[],s=null,c="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=c,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function wg(n,e,t,r,i,s,c,l){return new hs(n,e,t,r,i,s,c,l)}function _a(n){return new hs(n)}function Nl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ig(n){return n.collectionGroup!==null}function Fr(n){const e=J(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let l=new Ve(De.comparator);return c.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ji(s,r))}),t.has(De.keyField().canonicalString())||e.ce.push(new Ji(De.keyField(),r))}return e.ce}function mt(n){const e=J(n);return e.le||(e.le=Tg(e,Fr(n))),e.le}function Tg(n,e){if(n.limitType==="F")return kl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ji(i.field,s)});const t=n.endAt?new Yi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Yi(n.startAt.position,n.startAt.inclusive):null;return kl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Uo(n,e,t){return new hs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ps(n,e){return va(mt(n),mt(e))&&n.limitType===e.limitType}function _d(n){return`${ga(mt(n))}|lt:${n.limitType}`}function Bn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>gd(i)).join(", ")}]`),ds(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>tr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>tr(i)).join(",")),`Target(${r})`}(mt(n))}; limitType=${n.limitType})`}function fs(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Fr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(c,l,u){const h=Sl(c,l,u);return c.inclusive?h<=0:h<0}(r.startAt,Fr(r),i)||r.endAt&&!function(c,l,u){const h=Sl(c,l,u);return c.inclusive?h>=0:h>0}(r.endAt,Fr(r),i))}(n,e)}function Ag(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function yd(n){return(e,t)=>{let r=!1;for(const i of Fr(n)){const s=Cg(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Cg(n,e,t){const r=n.field.isKeyField()?G.comparator(e.key,t.key):function(s,c,l){const u=c.data.field(s),h=l.data.field(s);return u!==null&&h!==null?er(u,h):Q()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class dr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Dn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ld(this.inner)}size(){return this.innerSize}}/**
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
 */const Rg=new pe(G.comparator);function Lt(){return Rg}const bd=new pe(G.comparator);function Vr(...n){let e=bd;for(const t of n)e=e.insert(t.key,t);return e}function Ed(n){let e=bd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function yn(){return Ur()}function wd(){return Ur()}function Ur(){return new dr(n=>n.toString(),(n,e)=>n.isEqual(e))}const Sg=new pe(G.comparator),Pg=new Ve(G.comparator);function ee(...n){let e=Pg;for(const t of n)e=e.add(t);return e}const kg=new Ve(se);function Ng(){return kg}/**
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
 */function ya(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qi(e)?"-0":e}}function Id(n){return{integerValue:""+n}}function Dg(n,e){return ag(e)?Id(e):ya(n,e)}/**
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
 */class ms{constructor(){this._=void 0}}function Vg(n,e,t){return n instanceof Xi?function(i,s){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&pa(s)&&(s=fa(s)),s&&(c.fields.__previous_value__=s),{mapValue:c}}(t,e):n instanceof Yr?Ad(n,e):n instanceof Jr?Cd(n,e):function(i,s){const c=Td(i,s),l=Dl(c)+Dl(i.Pe);return xo(c)&&xo(i.Pe)?Id(l):ya(i.serializer,l)}(n,e)}function Og(n,e,t){return n instanceof Yr?Ad(n,e):n instanceof Jr?Cd(n,e):t}function Td(n,e){return n instanceof Zi?function(r){return xo(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Xi extends ms{}class Yr extends ms{constructor(e){super(),this.elements=e}}function Ad(n,e){const t=Rd(e);for(const r of n.elements)t.some(i=>yt(i,r))||t.push(r);return{arrayValue:{values:t}}}class Jr extends ms{constructor(e){super(),this.elements=e}}function Cd(n,e){let t=Rd(e);for(const r of n.elements)t=t.filter(i=>!yt(i,r));return{arrayValue:{values:t}}}class Zi extends ms{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Dl(n){return ve(n.integerValue||n.doubleValue)}function Rd(n){return ma(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Mg(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Yr&&i instanceof Yr||r instanceof Jr&&i instanceof Jr?Zn(r.elements,i.elements,yt):r instanceof Zi&&i instanceof Zi?yt(r.Pe,i.Pe):r instanceof Xi&&i instanceof Xi}(n.transform,e.transform)}class xg{constructor(e,t){this.version=e,this.transformResults=t}}class st{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new st}static exists(e){return new st(void 0,e)}static updateTime(e){return new st(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ui(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class gs{}function Sd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ba(n.key,st.none()):new oi(n.key,n.data,st.none());{const t=n.data,r=Je.empty();let i=new Ve(De.comparator);for(let s of e.fields)if(!i.has(s)){let c=t.field(s);c===null&&s.length>1&&(s=s.popLast(),c=t.field(s)),c===null?r.delete(s):r.set(s,c),i=i.add(s)}return new un(n.key,r,new tt(i.toArray()),st.none())}}function Lg(n,e,t){n instanceof oi?function(i,s,c){const l=i.value.clone(),u=Ol(i.fieldTransforms,s,c.transformResults);l.setAll(u),s.convertToFoundDocument(c.version,l).setHasCommittedMutations()}(n,e,t):n instanceof un?function(i,s,c){if(!Ui(i.precondition,s))return void s.convertToUnknownDocument(c.version);const l=Ol(i.fieldTransforms,s,c.transformResults),u=s.data;u.setAll(Pd(i)),u.setAll(l),s.convertToFoundDocument(c.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,c){s.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function jr(n,e,t,r){return n instanceof oi?function(s,c,l,u){if(!Ui(s.precondition,c))return l;const h=s.value.clone(),f=Ml(s.fieldTransforms,u,c);return h.setAll(f),c.convertToFoundDocument(c.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof un?function(s,c,l,u){if(!Ui(s.precondition,c))return l;const h=Ml(s.fieldTransforms,u,c),f=c.data;return f.setAll(Pd(s)),f.setAll(h),c.convertToFoundDocument(c.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,c,l){return Ui(s.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):l}(n,e,t)}function Fg(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Td(r.transform,i||null);s!=null&&(t===null&&(t=Je.empty()),t.set(r.field,s))}return t||null}function Vl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zn(r,i,(s,c)=>Mg(s,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class oi extends gs{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class un extends gs{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Pd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ol(n,e,t){const r=new Map;ae(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],c=s.transform,l=e.data.field(s.field);r.set(s.field,Og(c,l,t[i]))}return r}function Ml(n,e,t){const r=new Map;for(const i of n){const s=i.transform,c=t.data.field(i.field);r.set(i.field,Vg(s,c,e))}return r}class ba extends gs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ug extends gs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class jg{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Lg(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=jr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=jr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=wd();return this.mutations.forEach(i=>{const s=e.get(i.key),c=s.overlayedDocument;let l=this.applyToLocalView(c,s.mutatedFields);l=t.has(i.key)?null:l;const u=Sd(c,l);u!==null&&r.set(i.key,u),c.isValidDocument()||c.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ee())}isEqual(e){return this.batchId===e.batchId&&Zn(this.mutations,e.mutations,(t,r)=>Vl(t,r))&&Zn(this.baseMutations,e.baseMutations,(t,r)=>Vl(t,r))}}class Ea{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ae(e.mutations.length===r.length);let i=function(){return Sg}();const s=e.mutations;for(let c=0;c<s.length;c++)i=i.insert(s[c].key,r[c].version);return new Ea(e,t,r,i)}}/**
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
 */class $g{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Bg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ee,re;function zg(n){switch(n){default:return Q();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function kd(n){if(n===void 0)return xt("GRPC error has no .code"),M.UNKNOWN;switch(n){case Ee.OK:return M.OK;case Ee.CANCELLED:return M.CANCELLED;case Ee.UNKNOWN:return M.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return M.INTERNAL;case Ee.UNAVAILABLE:return M.UNAVAILABLE;case Ee.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ee.NOT_FOUND:return M.NOT_FOUND;case Ee.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ee.ABORTED:return M.ABORTED;case Ee.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ee.DATA_LOSS:return M.DATA_LOSS;default:return Q()}}(re=Ee||(Ee={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function qg(){return new TextEncoder}/**
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
 */const Hg=new En([4294967295,4294967295],0);function xl(n){const e=qg().encode(n),t=new td;return t.update(e),new Uint8Array(t.digest())}function Ll(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new En([t,r],0),new En([i,s],0)]}class wa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Or(`Invalid padding: ${t}`);if(r<0)throw new Or(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Or(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Or(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=En.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(En.fromNumber(r)));return i.compare(Hg)===1&&(i=new En([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=xl(e),[r,i]=Ll(t);for(let s=0;s<this.hashCount;s++){const c=this.Ee(r,i,s);if(!this.de(c))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),c=new wa(s,i,t);return r.forEach(l=>c.insert(l)),c}insert(e){if(this.Ie===0)return;const t=xl(e),[r,i]=Ll(t);for(let s=0;s<this.hashCount;s++){const c=this.Ee(r,i,s);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class vs{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ai.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new vs(Y.min(),i,new pe(se),Lt(),ee())}}class ai{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ai(r,t,ee(),ee(),ee())}}/**
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
 */class ji{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Nd{constructor(e,t){this.targetId=e,this.me=t}}class Dd{constructor(e,t,r=Oe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Fl{constructor(){this.fe=0,this.ge=jl(),this.pe=Oe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),t=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new ai(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=jl()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Gg{constructor(e){this.Le=e,this.Be=new Map,this.ke=Lt(),this.qe=Ul(),this.Qe=new pe(se)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Fo(s))if(r===0){const c=new G(s.path);this.Ue(t,c,He.newNoDocument(c,Y.min()))}else ae(r===1);else{const c=this.Ye(t);if(c!==r){const l=this.Ze(e),u=l?this.Xe(l,e,c):1;if(u!==0){this.je(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let c,l;try{c=Sn(r).toUint8Array()}catch(u){if(u instanceof ud)return Xn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new wa(c,i,s)}catch(u){return Xn(u instanceof Or?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const c=this.Le.tt(),l=`projects/${c.projectId}/databases/${c.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,c)=>{const l=this.Je(c);if(l){if(s.current&&Fo(l.target)){const u=new G(l.target.path);this.ke.get(u)!==null||this.it(c,u)||this.Ue(c,u,He.newNoDocument(u,e))}s.be&&(t.set(c,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,c)=>{let l=!0;c.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,c)=>c.setReadTime(e));const i=new vs(e,t,this.Qe,this.ke,r);return this.ke=Lt(),this.qe=Ul(),this.Qe=new pe(se),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Fl,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ve(se),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Fl),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ul(){return new pe(G.comparator)}function jl(){return new pe(G.comparator)}const Wg={asc:"ASCENDING",desc:"DESCENDING"},Kg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Qg={and:"AND",or:"OR"};class Yg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function jo(n,e){return n.useProto3Json||ds(e)?e:{value:e}}function es(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Jg(n,e){return es(n,e.toTimestamp())}function gt(n){return ae(!!n),Y.fromTimestamp(function(t){const r=an(t);return new Te(r.seconds,r.nanos)}(n))}function Ia(n,e){return $o(n,e).canonicalString()}function $o(n,e){const t=function(i){return new me(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Od(n){const e=me.fromString(n);return ae(Ud(e)),e}function Bo(n,e){return Ia(n.databaseId,e.path)}function ho(n,e){const t=Od(e);if(t.get(1)!==n.databaseId.projectId)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new G(xd(t))}function Md(n,e){return Ia(n.databaseId,e)}function Xg(n){const e=Od(n);return e.length===4?me.emptyPath():xd(e)}function zo(n){return new me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function xd(n){return ae(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function $l(n,e,t){return{name:Bo(n,e),fields:t.value.mapValue.fields}}function Zg(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ae(f===void 0||typeof f=="string"),Oe.fromBase64String(f||"")):(ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Oe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,l=c&&function(h){const f=h.code===void 0?M.UNKNOWN:kd(h.code);return new z(f,h.message||"")}(c);t=new Dd(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ho(n,r.document.name),s=gt(r.document.updateTime),c=r.document.createTime?gt(r.document.createTime):Y.min(),l=new Je({mapValue:{fields:r.document.fields}}),u=He.newFoundDocument(i,s,c,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new ji(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ho(n,r.document),s=r.readTime?gt(r.readTime):Y.min(),c=He.newNoDocument(i,s),l=r.removedTargetIds||[];t=new ji([],l,c.key,c)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ho(n,r.document),s=r.removedTargetIds||[];t=new ji([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,c=new Bg(i,s),l=r.targetId;t=new Nd(l,c)}}return t}function ev(n,e){let t;if(e instanceof oi)t={update:$l(n,e.key,e.value)};else if(e instanceof ba)t={delete:Bo(n,e.key)};else if(e instanceof un)t={update:$l(n,e.key,e.data),updateMask:lv(e.fieldMask)};else{if(!(e instanceof Ug))return Q();t={verify:Bo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,c){const l=c.transform;if(l instanceof Xi)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Yr)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Jr)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Zi)return{fieldPath:c.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Jg(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(n,e.precondition)),t}function tv(n,e){return n&&n.length>0?(ae(e!==void 0),n.map(t=>function(i,s){let c=i.updateTime?gt(i.updateTime):gt(s);return c.isEqual(Y.min())&&(c=gt(s)),new xg(c,i.transformResults||[])}(t,e))):[]}function nv(n,e){return{documents:[Md(n,e.path)]}}function rv(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Md(n,i);const s=function(h){if(h.length!==0)return Fd(bt.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const c=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:zn(g.field),direction:ov(g.dir)}}(f))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const l=jo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function iv(n){let e=Xg(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ae(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const g=Ld(m);return g instanceof bt&&fd(g)?g.getFilters():[g]}(t.where));let c=[];t.orderBy&&(c=function(m){return m.map(g=>function(E){return new Ji(qn(E.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(g))}(t.orderBy));let l=null;t.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,ds(g)?null:g}(t.limit));let u=null;t.startAt&&(u=function(m){const g=!!m.before,_=m.values||[];return new Yi(_,g)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const g=!m.before,_=m.values||[];return new Yi(_,g)}(t.endAt)),wg(e,i,c,s,l,"F",u,h)}function sv(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ld(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=qn(t.unaryFilter.field);return Ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=qn(t.unaryFilter.field);return Ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=qn(t.unaryFilter.field);return Ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=qn(t.unaryFilter.field);return Ie.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(n):n.fieldFilter!==void 0?function(t){return Ie.create(qn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return bt.create(t.compositeFilter.filters.map(r=>Ld(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(t.compositeFilter.op))}(n):Q()}function ov(n){return Wg[n]}function av(n){return Kg[n]}function cv(n){return Qg[n]}function zn(n){return{fieldPath:n.canonicalString()}}function qn(n){return De.fromServerFormat(n.fieldPath)}function Fd(n){return n instanceof Ie?function(t){if(t.op==="=="){if(Rl(t.value))return{unaryFilter:{field:zn(t.field),op:"IS_NAN"}};if(Cl(t.value))return{unaryFilter:{field:zn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Rl(t.value))return{unaryFilter:{field:zn(t.field),op:"IS_NOT_NAN"}};if(Cl(t.value))return{unaryFilter:{field:zn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zn(t.field),op:av(t.op),value:t.value}}}(n):n instanceof bt?function(t){const r=t.getFilters().map(i=>Fd(i));return r.length===1?r[0]:{compositeFilter:{op:cv(t.op),filters:r}}}(n):Q()}function lv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ud(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Xt{constructor(e,t,r,i,s=Y.min(),c=Y.min(),l=Oe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class uv{constructor(e){this.ct=e}}function dv(n){const e=iv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Uo(e,e.limit,"L"):e}/**
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
 */class hv{constructor(){this.un=new pv}addToCollectionParentIndex(e,t){return this.un.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(on.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(on.min())}updateCollectionGroup(e,t,r){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class pv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ve(me.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ve(me.comparator)).toArray()}}/**
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
 */class nr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new nr(0)}static kn(){return new nr(-1)}}/**
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
 */class fv{constructor(){this.changes=new dr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?O.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class mv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class gv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&jr(r.mutation,i,tt.empty(),Te.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ee()){const i=yn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let c=Vr();return s.forEach((l,u)=>{c=c.insert(l,u.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const r=yn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ee()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((c,l)=>{t.set(c,l)})})}computeViews(e,t,r,i){let s=Lt();const c=Ur(),l=function(){return Ur()}();return t.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof un)?s=s.insert(h.key,h):f!==void 0?(c.set(h.key,f.mutation.getFieldMask()),jr(f.mutation,h,f.mutation.getFieldMask(),Te.now())):c.set(h.key,tt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>c.set(h,f)),t.forEach((h,f)=>{var m;return l.set(h,new mv(f,(m=c.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Ur();let i=new pe((c,l)=>c-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const l of c)l.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||tt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const c=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=wd();f.forEach(g=>{if(!s.has(g)){const _=Sd(t.get(g),r.get(g));_!==null&&m.set(g,_),s=s.add(g)}}),c.push(this.documentOverlayCache.saveOverlays(e,h,m))}return O.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(c){return G.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ig(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const c=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):O.resolve(yn());let l=-1,u=s;return c.next(h=>O.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ee())).next(f=>({batchId:l,changes:Ed(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next(r=>{let i=Vr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let c=Vr();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const h=function(m,g){return new hs(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,g)=>{c=c.insert(m,g)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(c=>(s=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(c=>{s.forEach((u,h)=>{const f=h.getKey();c.get(f)===null&&(c=c.insert(f,He.newInvalidDocument(f)))});let l=Vr();return c.forEach((u,h)=>{const f=s.get(u);f!==void 0&&jr(f.mutation,h,tt.empty(),Te.now()),fs(t,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class vv{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return O.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:gt(i.createTime)}}(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:dv(i.bundledQuery),readTime:gt(i.readTime)}}(t)),O.resolve()}}/**
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
 */class _v{constructor(){this.overlays=new pe(G.comparator),this.Ir=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const r=yn();return O.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),O.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,t,r){const i=yn(),s=t.length+1,c=new G(t.child("")),l=this.overlays.getIteratorFrom(c);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new pe((h,f)=>h-f);const c=this.overlays.getIterator();for(;c.hasNext();){const h=c.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=yn(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=yn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return O.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new $g(t,r));let s=this.Ir.get(t);s===void 0&&(s=ee(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
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
 */class yv{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
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
 */class Ta{constructor(){this.Tr=new Ve(Ae.Er),this.dr=new Ve(Ae.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Ae(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Ae(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new G(new me([])),r=new Ae(t,e),i=new Ae(t,e+1),s=[];return this.dr.forEachInRange([r,i],c=>{this.Vr(c),s.push(c.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new G(new me([])),r=new Ae(t,e),i=new Ae(t,e+1);let s=ee();return this.dr.forEachInRange([r,i],c=>{s=s.add(c.key)}),s}containsKey(e){const t=new Ae(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ae{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return G.comparator(e.key,t.key)||se(e.wr,t.wr)}static Ar(e,t){return se(e.wr,t.wr)||G.comparator(e.key,t.key)}}/**
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
 */class bv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ve(Ae.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new jg(s,t,r,i);this.mutationQueue.push(c);for(const l of i)this.br=this.br.add(new Ae(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(c)}lookupMutationBatch(e,t){return O.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ae(t,0),i=new Ae(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],c=>{const l=this.Dr(c.wr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ve(se);return t.forEach(i=>{const s=new Ae(i,0),c=new Ae(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,c],l=>{r=r.add(l.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const c=new Ae(new G(s),0);let l=new Ve(se);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},c),O.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ae(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(t.mutations,i=>{const s=new Ae(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Ae(t,0),i=this.br.firstAfterOrEqual(r);return O.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Ev{constructor(e){this.Mr=e,this.docs=function(){return new pe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,c=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return O.resolve(r?r.document.mutableCopy():He.newInvalidDocument(t))}getEntries(e,t){let r=Lt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():He.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Lt();const c=t.path,l=new G(c.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!c.isPrefixOf(h.path))break;h.path.length>c.length+1||rg(ng(f),r)<=0||(i.has(f.key)||fs(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,t,r,i){Q()}Or(e,t){return O.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new wv(this)}getSize(e){return O.resolve(this.size)}}class wv extends fv{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),O.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class Iv{constructor(e){this.persistence=e,this.Nr=new dr(t=>ga(t),va),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ta,this.targetCount=0,this.kr=nr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),O.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new nr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.Kn(t),O.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((c,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(c),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return O.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),O.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(c=>{s.push(i.markPotentiallyOrphaned(e,c))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return O.resolve(r)}containsKey(e,t){return O.resolve(this.Br.containsKey(t))}}/**
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
 */class Tv{constructor(e,t){this.qr={},this.overlays={},this.Qr=new ha(0),this.Kr=!1,this.Kr=!0,this.$r=new yv,this.referenceDelegate=e(this),this.Ur=new Iv(this),this.indexManager=new hv,this.remoteDocumentCache=function(i){return new Ev(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new uv(t),this.Gr=new vv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _v,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new bv(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){B("MemoryPersistence","Starting transaction:",e);const i=new Av(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class Av extends sg{constructor(e){super(),this.currentSequenceNumber=e}}class Aa{constructor(e){this.persistence=e,this.Jr=new Ta,this.Yr=null}static Zr(e){return new Aa(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),O.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return O.or([()=>O.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Ca{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=ee(),i=ee();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ca(e,t.fromCache,r,i)}}/**
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
 */class Cv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Rv{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Rf()?8:og(Ge())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(c=>{s.result=c}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(c=>{s.result=c})}).next(()=>{if(s.result)return;const c=new Cv;return this.Xi(e,t,c).next(l=>{if(s.result=l,this.zi)return this.es(e,t,c,l.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Sr()<=te.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Bn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(Sr()<=te.DEBUG&&B("QueryEngine","Query:",Bn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Sr()<=te.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Bn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mt(t))):O.resolve())}Yi(e,t){if(Nl(t))return O.resolve(null);let r=mt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Uo(t,null,"F"),r=mt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const c=ee(...s);return this.Ji.getDocuments(e,c).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(t,l);return this.ns(t,h,c,u.readTime)?this.Yi(e,Uo(t,null,"F")):this.rs(e,h,t,u)}))})))}Zi(e,t,r,i){return Nl(t)||i.isEqual(Y.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const c=this.ts(t,s);return this.ns(t,c,r,i)?O.resolve(null):(Sr()<=te.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Bn(t)),this.rs(e,c,t,tg(i,-1)).next(l=>l))})}ts(e,t){let r=new Ve(yd(e));return t.forEach((i,s)=>{fs(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return Sr()<=te.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Bn(t)),this.Ji.getDocumentsMatchingQuery(e,t,on.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(c=>{s=s.insert(c.key,c)}),s))}}/**
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
 */class Sv{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new pe(se),this._s=new dr(s=>ga(s),va),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gv(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Pv(n,e,t,r){return new Sv(n,e,t,r)}async function jd(n,e){const t=J(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const c=[],l=[];let u=ee();for(const h of i){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:c,addedBatchIds:l}))})})}function kv(n,e){const t=J(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,g=m.keys();let _=O.resolve();return g.forEach(E=>{_=_.next(()=>f.getEntry(u,E)).next(I=>{const k=h.docVersions.get(E);ae(k!==null),I.version.compareTo(k)<0&&(m.applyToRemoteDocument(I,h),I.isValidDocument()&&(I.setReadTime(h.commitVersion),f.addEntry(I)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function $d(n){const e=J(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Nv(n,e){const t=J(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const c=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,m)));let _=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(Oe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),i=i.insert(m,_),function(I,k,V){return I.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(g,_,f)&&l.push(t.Ur.updateTargetData(s,_))});let u=Lt(),h=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Dv(s,c,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Y.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(m=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>c.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.os=i,s))}function Dv(n,e,t){let r=ee(),i=ee();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let c=Lt();return t.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),c=c.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),c=c.insert(l,u)):B("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:c,Is:i}})}function Vv(n,e){const t=J(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ov(n,e){const t=J(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):t.Ur.allocateTargetId(r).next(c=>(i=new Xt(e,c,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function qo(n,e,t){const r=J(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,c=>r.persistence.referenceDelegate.removeTarget(c,i))}catch(c){if(!si(c))throw c;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Bl(n,e,t){const r=J(n);let i=Y.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",c=>function(u,h,f){const m=J(u),g=m._s.get(f);return g!==void 0?O.resolve(m.os.get(g)):m.Ur.getTargetData(h,f)}(r,c,mt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(c,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(c,e,t?i:Y.min(),t?s:ee())).next(l=>(Mv(r,Ag(e),l),{documents:l,Ts:s})))}function Mv(n,e,t){let r=n.us.get(e)||Y.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}class zl{constructor(){this.activeTargetIds=Ng()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xv{constructor(){this.so=new zl,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new zl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Lv{_o(e){}shutdown(){}}/**
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
 */class ql{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oi=null;function po(){return Oi===null?Oi=function(){return 268435456+Math.round(2147483648*Math.random())}():Oi++,"0x"+Oi.toString(16)}/**
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
 */const Fv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Uv{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ue="WebChannelConnection";class jv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,c){const l=po(),u=this.xo(t,r.toUriEncodedString());B("RestConnection",`Sending RPC '${t}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,c),this.No(t,u,h,i).then(f=>(B("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Xn("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(t,r,i,s,c,l){return this.Mo(t,r,i,s,c)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ur}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,c)=>t[c]=s),i&&i.headers.forEach((s,c)=>t[c]=s)}xo(t,r){const i=Fv[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=po();return new Promise((c,l)=>{const u=new nd;u.setWithCredentials(!0),u.listenOnce(rd.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Li.NO_ERROR:const f=u.getResponseJson();B(Ue,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),c(f);break;case Li.TIMEOUT:B(Ue,`RPC '${e}' ${s} timed out`),l(new z(M.DEADLINE_EXCEEDED,"Request time out"));break;case Li.HTTP_ERROR:const m=u.getStatus();if(B(Ue,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g?.error;if(_&&_.status&&_.message){const E=function(k){const V=k.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(V)>=0?V:M.UNKNOWN}(_.status);l(new z(E,_.message))}else l(new z(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new z(M.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{B(Ue,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);B(Ue,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",h,r,15)})}Bo(e,t,r){const i=po(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=od(),l=sd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");B(Ue,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=c.createWebChannel(f,u);let g=!1,_=!1;const E=new Uv({Io:k=>{_?B(Ue,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(g||(B(Ue,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),B(Ue,`RPC '${e}' stream ${i} sending:`,k),m.send(k))},To:()=>m.close()}),I=(k,V,j)=>{k.listen(V,U=>{try{j(U)}catch($){setTimeout(()=>{throw $},0)}})};return I(m,Dr.EventType.OPEN,()=>{_||(B(Ue,`RPC '${e}' stream ${i} transport opened.`),E.yo())}),I(m,Dr.EventType.CLOSE,()=>{_||(_=!0,B(Ue,`RPC '${e}' stream ${i} transport closed`),E.So())}),I(m,Dr.EventType.ERROR,k=>{_||(_=!0,Xn(Ue,`RPC '${e}' stream ${i} transport errored:`,k),E.So(new z(M.UNAVAILABLE,"The operation could not be completed")))}),I(m,Dr.EventType.MESSAGE,k=>{var V;if(!_){const j=k.data[0];ae(!!j);const U=j,$=U.error||((V=U[0])===null||V===void 0?void 0:V.error);if($){B(Ue,`RPC '${e}' stream ${i} received error:`,$);const W=$.status;let x=function(w){const T=Ee[w];if(T!==void 0)return kd(T)}(W),A=$.message;x===void 0&&(x=M.INTERNAL,A="Unknown error status: "+W+" with message "+$.message),_=!0,E.So(new z(x,A)),m.close()}else B(Ue,`RPC '${e}' stream ${i} received:`,j),E.bo(j)}}),I(l,id.STAT_EVENT,k=>{k.stat===Oo.PROXY?B(Ue,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Oo.NOPROXY&&B(Ue,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.wo()},0),E}}function fo(){return typeof document<"u"?document:null}/**
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
 */function _s(n){return new Yg(n,!0)}/**
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
 */class Bd{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class zd{constructor(e,t,r,i,s,c,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Bd(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(xt(t.toString()),xt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new z(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $v extends zd{constructor(e,t,r,i,s,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,c),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Zg(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const c=s.targetChange;return c.targetIds&&c.targetIds.length?Y.min():c.readTime?gt(c.readTime):Y.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=zo(this.serializer),t.addTarget=function(s,c){let l;const u=c.target;if(l=Fo(u)?{documents:nv(s,u)}:{query:rv(s,u)._t},l.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){l.resumeToken=Vd(s,c.resumeToken);const h=jo(s,c.expectedCount);h!==null&&(l.expectedCount=h)}else if(c.snapshotVersion.compareTo(Y.min())>0){l.readTime=es(s,c.snapshotVersion.toTimestamp());const h=jo(s,c.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=sv(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=zo(this.serializer),t.removeTarget=e,this.a_(t)}}class Bv extends zd{constructor(e,t,r,i,s,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,c),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=tv(e.writeResults,e.commitTime),r=gt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=zo(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ev(this.serializer,r))};this.a_(t)}}/**
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
 */class zv extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,c])=>this.connection.Mo(e,$o(t,r),i,s,c)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(M.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,l])=>this.connection.Lo(e,$o(t,r),i,c,l,s)).catch(c=>{throw c.name==="FirebaseError"?(c.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new z(M.UNKNOWN,c.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class qv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(xt(t),this.D_=!1):B("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Hv{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(c=>{r.enqueueAndForget(async()=>{Vn(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=J(u);h.L_.add(4),await ci(h),h.q_.set("Unknown"),h.L_.delete(4),await ys(h)}(this))})}),this.q_=new qv(r,i)}}async function ys(n){if(Vn(n))for(const e of n.B_)await e(!0)}async function ci(n){for(const e of n.B_)await e(!1)}function qd(n,e){const t=J(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),ka(t)?Pa(t):hr(t).r_()&&Sa(t,e))}function Ra(n,e){const t=J(n),r=hr(t);t.N_.delete(e),r.r_()&&Hd(t,e),t.N_.size===0&&(r.r_()?r.o_():Vn(t)&&t.q_.set("Unknown"))}function Sa(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hr(n).A_(e)}function Hd(n,e){n.Q_.xe(e),hr(n).R_(e)}function Pa(n){n.Q_=new Gg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),hr(n).start(),n.q_.v_()}function ka(n){return Vn(n)&&!hr(n).n_()&&n.N_.size>0}function Vn(n){return J(n).L_.size===0}function Gd(n){n.Q_=void 0}async function Gv(n){n.q_.set("Online")}async function Wv(n){n.N_.forEach((e,t)=>{Sa(n,e)})}async function Kv(n,e){Gd(n),ka(n)?(n.q_.M_(e),Pa(n)):n.q_.set("Unknown")}async function Qv(n,e,t){if(n.q_.set("Online"),e instanceof Dd&&e.state===2&&e.cause)try{await async function(i,s){const c=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,c),i.N_.delete(l),i.Q_.removeTarget(l))}(n,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ts(n,r)}else if(e instanceof ji?n.Q_.Ke(e):e instanceof Nd?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Y.min()))try{const r=await $d(n.localStore);t.compareTo(r)>=0&&await function(s,c){const l=s.Q_.rt(c);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,c))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Oe.EMPTY_BYTE_STRING,f.snapshotVersion)),Hd(s,u);const m=new Xt(f.target,u,h,f.sequenceNumber);Sa(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await ts(n,r)}}async function ts(n,e,t){if(!si(e))throw e;n.L_.add(1),await ci(n),n.q_.set("Offline"),t||(t=()=>$d(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await ys(n)})}function Wd(n,e){return e().catch(t=>ts(n,t,e))}async function bs(n){const e=J(n),t=cn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Yv(e);)try{const i=await Vv(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,Jv(e,i)}catch(i){await ts(e,i)}Kd(e)&&Qd(e)}function Yv(n){return Vn(n)&&n.O_.length<10}function Jv(n,e){n.O_.push(e);const t=cn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Kd(n){return Vn(n)&&!cn(n).n_()&&n.O_.length>0}function Qd(n){cn(n).start()}async function Xv(n){cn(n).p_()}async function Zv(n){const e=cn(n);for(const t of n.O_)e.m_(t.mutations)}async function e_(n,e,t){const r=n.O_.shift(),i=Ea.from(r,e,t);await Wd(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await bs(n)}async function t_(n,e){e&&cn(n).V_&&await async function(r,i){if(function(c){return zg(c)&&c!==M.ABORTED}(i.code)){const s=r.O_.shift();cn(r).s_(),await Wd(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await bs(r)}}(n,e),Kd(n)&&Qd(n)}async function Hl(n,e){const t=J(n);t.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=Vn(t);t.L_.add(3),await ci(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await ys(t)}async function n_(n,e){const t=J(n);e?(t.L_.delete(2),await ys(t)):e||(t.L_.add(2),await ci(t),t.q_.set("Unknown"))}function hr(n){return n.K_||(n.K_=function(t,r,i){const s=J(t);return s.w_(),new $v(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:Gv.bind(null,n),Ro:Wv.bind(null,n),mo:Kv.bind(null,n),d_:Qv.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),ka(n)?Pa(n):n.q_.set("Unknown")):(await n.K_.stop(),Gd(n))})),n.K_}function cn(n){return n.U_||(n.U_=function(t,r,i){const s=J(t);return s.w_(),new Bv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Xv.bind(null,n),mo:t_.bind(null,n),f_:Zv.bind(null,n),g_:e_.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await bs(n)):(await n.U_.stop(),n.O_.length>0&&(B("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Na{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const c=Date.now()+r,l=new Na(e,t,c,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Da(n,e){if(xt("AsyncQueue",`${e}: ${n}`),si(n))return new z(M.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Gn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||G.comparator(t.key,r.key):(t,r)=>G.comparator(t.key,r.key),this.keyedMap=Vr(),this.sortedSet=new pe(this.comparator)}static emptySet(e){return new Gn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Gn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Gl{constructor(){this.W_=new pe(G.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class rr{constructor(e,t,r,i,s,c,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=c,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const c=[];return t.forEach(l=>{c.push({type:0,doc:l})}),new rr(e,t,Gn.emptySet(t),c,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ps(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class r_{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class i_{constructor(){this.queries=Wl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=J(t),s=i.queries;i.queries=Wl(),s.forEach((c,l)=>{for(const u of l.j_)u.onError(r)})})(this,new z(M.ABORTED,"Firestore shutting down"))}}function Wl(){return new dr(n=>_d(n),ps)}async function s_(n,e){const t=J(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new r_,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(c){const l=Da(c,`Initialization of query '${Bn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&Va(t)}async function o_(n,e){const t=J(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const c=s.j_.indexOf(e);c>=0&&(s.j_.splice(c,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function a_(n,e){const t=J(n);let r=!1;for(const i of e){const s=i.query,c=t.queries.get(s);if(c){for(const l of c.j_)l.X_(i)&&(r=!0);c.z_=i}}r&&Va(t)}function c_(n,e,t){const r=J(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function Va(n){n.Y_.forEach(e=>{e.next()})}var Ho,Kl;(Kl=Ho||(Ho={})).ea="default",Kl.Cache="cache";class l_{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new rr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=rr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ho.Cache}}/**
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
 */class Yd{constructor(e){this.key=e}}class Jd{constructor(e){this.key=e}}class u_{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=yd(e),this.Ra=new Gn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Gl,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,c=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),_=fs(this.query,m)?m:null,E=!!g&&this.mutatedKeys.has(g.key),I=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let k=!1;g&&_?g.data.isEqual(_.data)?E!==I&&(r.track({type:3,doc:_}),k=!0):this.ga(g,_)||(r.track({type:2,doc:_}),k=!0,(u&&this.Aa(_,u)>0||h&&this.Aa(_,h)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),k=!0):g&&!_&&(r.track({type:1,doc:g}),k=!0,(u||h)&&(l=!0)),k&&(_?(c=c.add(_),s=I?s.add(f):s.delete(f)):(c=c.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const f=this.query.limitType==="F"?c.last():c.first();c=c.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:c,fa:r,ns:l,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const c=e.fa.G_();c.sort((f,m)=>function(_,E){const I=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return I(_)-I(E)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,c.length!==0||h?{snapshot:new rr(this.query,e.Ra,s,c,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Gl,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Jd(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Yd(r))}),t}ba(e){this.Ta=e.Ts,this.da=ee();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return rr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class d_{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class h_{constructor(e){this.key=e,this.va=!1}}class p_{constructor(e,t,r,i,s,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=c,this.Ca={},this.Fa=new dr(l=>_d(l),ps),this.Ma=new Map,this.xa=new Set,this.Oa=new pe(G.comparator),this.Na=new Map,this.La=new Ta,this.Ba={},this.ka=new Map,this.qa=nr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function f_(n,e,t=!0){const r=rh(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Xd(r,e,t,!0),i}async function m_(n,e){const t=rh(n);await Xd(t,e,!0,!1)}async function Xd(n,e,t,r){const i=await Ov(n.localStore,mt(e)),s=i.targetId,c=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await g_(n,e,s,c==="current",i.resumeToken)),n.isPrimaryClient&&t&&qd(n.remoteStore,i),l}async function g_(n,e,t,r,i){n.Ka=(m,g,_)=>async function(I,k,V,j){let U=k.view.ma(V);U.ns&&(U=await Bl(I.localStore,k.query,!1).then(({documents:A})=>k.view.ma(A,U)));const $=j&&j.targetChanges.get(k.targetId),W=j&&j.targetMismatches.get(k.targetId)!=null,x=k.view.applyChanges(U,I.isPrimaryClient,$,W);return Yl(I,k.targetId,x.wa),x.snapshot}(n,m,g,_);const s=await Bl(n.localStore,e,!0),c=new u_(e,s.Ts),l=c.ma(s.documents),u=ai.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=c.applyChanges(l,n.isPrimaryClient,u);Yl(n,t,h.wa);const f=new d_(e,t,c);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function v_(n,e,t){const r=J(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(c=>!ps(c,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await qo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Ra(r.remoteStore,i.targetId),Go(r,i.targetId)}).catch(ii)):(Go(r,i.targetId),await qo(r.localStore,i.targetId,!0))}async function __(n,e){const t=J(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ra(t.remoteStore,r.targetId))}async function y_(n,e,t){const r=C_(n);try{const i=await function(c,l){const u=J(c),h=Te.now(),f=l.reduce((_,E)=>_.add(E.key),ee());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let E=Lt(),I=ee();return u.cs.getEntries(_,f).next(k=>{E=k,E.forEach((V,j)=>{j.isValidDocument()||(I=I.add(V))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,E)).next(k=>{m=k;const V=[];for(const j of l){const U=Fg(j,m.get(j.key).overlayedDocument);U!=null&&V.push(new un(j.key,U,dd(U.value.mapValue),st.exists(!0)))}return u.mutationQueue.addMutationBatch(_,h,V,l)}).next(k=>{g=k;const V=k.applyToLocalDocumentSet(m,I);return u.documentOverlayCache.saveOverlays(_,k.batchId,V)})}).then(()=>({batchId:g.batchId,changes:Ed(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(c,l,u){let h=c.Ba[c.currentUser.toKey()];h||(h=new pe(se)),h=h.insert(l,u),c.Ba[c.currentUser.toKey()]=h}(r,i.batchId,t),await li(r,i.changes),await bs(r.remoteStore)}catch(i){const s=Da(i,"Failed to persist write");t.reject(s)}}async function Zd(n,e){const t=J(n);try{const r=await Nv(t.localStore,e);e.targetChanges.forEach((i,s)=>{const c=t.Na.get(s);c&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?c.va=!0:i.modifiedDocuments.size>0?ae(c.va):i.removedDocuments.size>0&&(ae(c.va),c.va=!1))}),await li(t,r,e)}catch(r){await ii(r)}}function Ql(n,e,t){const r=J(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,c)=>{const l=c.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(c,l){const u=J(c);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(h=!0)}),h&&Va(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function b_(n,e,t){const r=J(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let c=new pe(G.comparator);c=c.insert(s,He.newNoDocument(s,Y.min()));const l=ee().add(s),u=new vs(Y.min(),new Map,new pe(se),c,l);await Zd(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Oa(r)}else await qo(r.localStore,e,!1).then(()=>Go(r,e,t)).catch(ii)}async function E_(n,e){const t=J(n),r=e.batch.batchId;try{const i=await kv(t.localStore,e);th(t,r,null),eh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await li(t,i)}catch(i){await ii(i)}}async function w_(n,e,t){const r=J(n);try{const i=await function(c,l){const u=J(c);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(ae(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);th(r,e,t),eh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await li(r,i)}catch(i){await ii(i)}}function eh(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function th(n,e,t){const r=J(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Go(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||nh(n,r)})}function nh(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Ra(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Oa(n))}function Yl(n,e,t){for(const r of t)r instanceof Yd?(n.La.addReference(r.key,e),I_(n,r)):r instanceof Jd?(B("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||nh(n,r.key)):Q()}function I_(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(B("SyncEngine","New document in limbo: "+t),n.xa.add(r),Oa(n))}function Oa(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new G(me.fromString(e)),r=n.qa.next();n.Na.set(r,new h_(t)),n.Oa=n.Oa.insert(t,r),qd(n.remoteStore,new Xt(mt(_a(t.path)),r,"TargetPurposeLimboResolution",ha.oe))}}async function li(n,e,t){const r=J(n),i=[],s=[],c=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{c.push(r.Ka(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t?.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Ca.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(c),r.Ca.d_(i),await async function(u,h){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(h,g=>O.forEach(g.$i,_=>f.persistence.referenceDelegate.addReference(m,g.targetId,_)).next(()=>O.forEach(g.Ui,_=>f.persistence.referenceDelegate.removeReference(m,g.targetId,_)))))}catch(m){if(!si(m))throw m;B("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const _=f.os.get(g),E=_.snapshotVersion,I=_.withLastLimboFreeSnapshotVersion(E);f.os=f.os.insert(g,I)}}}(r.localStore,s))}async function T_(n,e){const t=J(n);if(!t.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await jd(t.localStore,e);t.currentUser=e,function(s,c){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new z(M.CANCELLED,c))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await li(t,r.hs)}}function A_(n,e){const t=J(n),r=t.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=t.Ma.get(e);if(!s)return i;for(const c of s){const l=t.Fa.get(c);i=i.unionWith(l.view.Va)}return i}}function rh(n){const e=J(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=A_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=b_.bind(null,e),e.Ca.d_=a_.bind(null,e.eventManager),e.Ca.$a=c_.bind(null,e.eventManager),e}function C_(n){const e=J(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=E_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=w_.bind(null,e),e}class ns{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_s(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Pv(this.persistence,new Rv,e.initialUser,this.serializer)}Ga(e){return new Tv(Aa.Zr,this.serializer)}Wa(e){return new xv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ns.provider={build:()=>new ns};class Wo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ql(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=T_.bind(null,this.syncEngine),await n_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new i_}()}createDatastore(e){const t=_s(e.databaseInfo.databaseId),r=function(s){return new jv(s)}(e.databaseInfo);return function(s,c,l,u){return new zv(s,c,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,c,l){return new Hv(r,i,s,c,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Ql(this.syncEngine,t,0),function(){return ql.D()?new ql:new Lv}())}createSyncEngine(e,t){return function(i,s,c,l,u,h,f){const m=new p_(i,s,c,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=J(i);B("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ci(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Wo.provider={build:()=>new Wo};/**
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
 */class R_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):xt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class S_{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ze.UNAUTHENTICATED,this.clientId=cd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async c=>{B("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(B("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Da(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mo(n,e){n.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await jd(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Jl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await P_(n);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Hl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Hl(e.remoteStore,i)),n._onlineComponents=e}async function P_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await mo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Xn("Error using user provided cache. Falling back to memory cache: "+t),await mo(n,new ns)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await mo(n,new ns);return n._offlineComponents}async function ih(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await Jl(n,n._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await Jl(n,new Wo))),n._onlineComponents}function k_(n){return ih(n).then(e=>e.syncEngine)}async function Xl(n){const e=await ih(n),t=e.eventManager;return t.onListen=f_.bind(null,e.syncEngine),t.onUnlisten=v_.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=m_.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=__.bind(null,e.syncEngine),t}/**
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
 */function sh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Zl=new Map;/**
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
 */function N_(n,e,t){if(!t)throw new z(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function D_(n,e,t,r){if(e===!0&&r===!0)throw new z(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function eu(n){if(!G.isDocumentKey(n))throw new z(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ma(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Q()}function In(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new z(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ma(n);throw new z(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class tu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}D_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xa{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Gm;switch(r.type){case"firstParty":return new Ym(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Zl.get(t);r&&(B("ComponentProvider","Removing Datastore"),Zl.delete(t),r.terminate())}(this),Promise.resolve()}}function V_(n,e,t,r={}){var i;const s=(n=In(n,xa))._getSettings(),c=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==c&&Xn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:c,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ze.MOCK_USER;else{l=bf(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new z(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ze(h)}n._authCredentials=new Wm(new ad(l,u))}}/**
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
 */class Es{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Es(this.firestore,e,this._query)}}class ot{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class Xr extends Es{constructor(e,t,r){super(e,t,_a(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new G(e))}withConverter(e){return new Xr(this.firestore,e,this._path)}}function O_(n,e,...t){if(n=Re(n),arguments.length===1&&(e=cd.newId()),N_("doc","path",e),n instanceof xa){const r=me.fromString(e,...t);return eu(r),new ot(n,null,new G(r))}{if(!(n instanceof ot||n instanceof Xr))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return eu(r),new ot(n.firestore,n instanceof Xr?n.converter:null,new G(r))}}/**
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
 */class nu{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Bd(this,"async_queue_retry"),this.Vu=()=>{const r=fo();r&&B("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=fo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=fo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new wn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!si(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(c){let l=c.message||"";return c.stack&&(l=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),l}(r);throw xt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Na.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function ru(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Zr extends xa{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new nu,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new nu(e),this._firestoreClient=void 0,await e}}}function M_(n,e){const t=typeof n=="object"?n:Xu(),r=typeof n=="string"?n:"(default)",i=ua(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=_f("firestore");s&&V_(i,...s)}return i}function La(n){if(n._terminated)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||x_(n),n._firestoreClient}function x_(n){var e,t,r;const i=n._freezeSettings(),s=function(l,u,h,f){return new lg(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,sh(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new S_(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l?._online.build();return{_offline:l?._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class ir{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ir(Oe.fromBase64String(e))}catch(t){throw new z(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ir(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ws{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new De(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Fa{constructor(e){this._methodName=e}}/**
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
 */class Ua{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
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
 */class ja{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const L_=/^__.*__$/;class F_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new un(e,this.data,this.fieldMask,t,this.fieldTransforms):new oi(e,this.data,t,this.fieldTransforms)}}class oh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new un(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ah(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class $a{constructor(e,t,r,i,s,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new $a(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return rs(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ah(this.Cu)&&L_.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class U_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||_s(e)}Qu(e,t,r,i=!1){return new $a({Cu:e,methodName:t,qu:r,path:De.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ch(n){const e=n._freezeSettings(),t=_s(n._databaseId);return new U_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function lh(n,e,t,r,i,s={}){const c=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);Ba("Data must be an object, but it was:",c,r);const l=uh(r,c);let u,h;if(s.merge)u=new tt(c.fieldMask),h=c.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=Ko(e,m,t);if(!c.contains(g))throw new z(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);hh(f,g)||f.push(g)}u=new tt(f),h=c.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=c.fieldTransforms;return new F_(new Je(l),u,h)}class Is extends Fa{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Is}}function j_(n,e,t,r){const i=n.Qu(1,e,t);Ba("Data must be an object, but it was:",i,r);const s=[],c=Je.empty();Dn(r,(u,h)=>{const f=za(e,u,t);h=Re(h);const m=i.Nu(f);if(h instanceof Is)s.push(f);else{const g=Ts(h,m);g!=null&&(s.push(f),c.set(f,g))}});const l=new tt(s);return new oh(c,l,i.fieldTransforms)}function $_(n,e,t,r,i,s){const c=n.Qu(1,e,t),l=[Ko(e,r,t)],u=[i];if(s.length%2!=0)throw new z(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Ko(e,s[g])),u.push(s[g+1]);const h=[],f=Je.empty();for(let g=l.length-1;g>=0;--g)if(!hh(h,l[g])){const _=l[g];let E=u[g];E=Re(E);const I=c.Nu(_);if(E instanceof Is)h.push(_);else{const k=Ts(E,I);k!=null&&(h.push(_),f.set(_,k))}}const m=new tt(h);return new oh(f,m,c.fieldTransforms)}function Ts(n,e){if(dh(n=Re(n)))return Ba("Unsupported field value:",e,n),uh(n,e);if(n instanceof Fa)return function(r,i){if(!ah(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let c=0;for(const l of r){let u=Ts(l,i.Lu(c));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),c++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Dg(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Te.fromDate(r);return{timestampValue:es(i.serializer,s)}}if(r instanceof Te){const s=new Te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:es(i.serializer,s)}}if(r instanceof Ua)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ir)return{bytesValue:Vd(i.serializer,r._byteString)};if(r instanceof ot){const s=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(s))throw i.Bu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ia(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ja)return function(c,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return ya(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Ma(r)}`)}(n,e)}function uh(n,e){const t={};return ld(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Dn(n,(r,i)=>{const s=Ts(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function dh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Te||n instanceof Ua||n instanceof ir||n instanceof ot||n instanceof Fa||n instanceof ja)}function Ba(n,e,t){if(!dh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Ma(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Ko(n,e,t){if((e=Re(e))instanceof ws)return e._internalPath;if(typeof e=="string")return za(n,e);throw rs("Field path arguments must be of type string or ",n,!1,void 0,t)}const B_=new RegExp("[~\\*/\\[\\]]");function za(n,e,t){if(e.search(B_)>=0)throw rs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ws(...e.split("."))._internalPath}catch{throw rs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function rs(n,e,t,r,i){const s=r&&!r.isEmpty(),c=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||c)&&(u+=" (found",s&&(u+=` in field ${r}`),c&&(u+=` in document ${i}`),u+=")"),new z(M.INVALID_ARGUMENT,l+n+u)}function hh(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class ph{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new z_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(fh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class z_ extends ph{data(){return super.data()}}function fh(n,e){return typeof e=="string"?za(n,e):e instanceof ws?e._internalPath:e._delegate._internalPath}/**
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
 */function q_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new z(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class H_{convertValue(e,t="none"){switch(Pn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Sn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Dn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(c=>ve(c.doubleValue));return new ja(s)}convertGeoPoint(e){return new Ua(ve(e.latitude),ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=fa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Wr(e));default:return null}}convertTimestamp(e){const t=an(e);return new Te(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=me.fromString(e);ae(Ud(r));const i=new Kr(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(t)||xt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function mh(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class Mr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gh extends ph{constructor(e,t,r,i,s,c){super(e,t,r,i,c),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $i(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(fh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class $i extends gh{data(e={}){return super.data(e)}}class G_{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Mr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new $i(this._firestore,this._userDataWriter,r.key,r,new Mr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map(l=>{const u=new $i(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Mr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:c++}})}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new $i(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Mr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=c.indexOf(l.doc.key),c=c.delete(l.doc.key)),l.type!==1&&(c=c.add(l.doc),f=c.indexOf(l.doc.key)),{type:W_(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function W_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class vh extends H_{constructor(e){super(),this.firestore=e}convertBytes(e){return new ir(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}function K_(n,e,t){n=In(n,ot);const r=In(n.firestore,Zr),i=mh(n.converter,e,t);return _h(r,[lh(ch(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,st.none())])}function Q_(n,...e){var t,r,i;n=Re(n);let s={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||ru(e[c])||(s=e[c],c++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(ru(e[c])){const m=e[c];e[c]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[c+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[c+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(n instanceof ot)h=In(n.firestore,Zr),f=_a(n._key.path),u={next:m=>{e[c]&&e[c](Y_(h,n,m))},error:e[c+1],complete:e[c+2]};else{const m=In(n,Es);h=In(m.firestore,Zr),f=m._query;const g=new vh(h);u={next:_=>{e[c]&&e[c](new G_(h,g,m,_))},error:e[c+1],complete:e[c+2]},q_(n._query)}return function(g,_,E,I){const k=new R_(I),V=new l_(_,k,E);return g.asyncQueue.enqueueAndForget(async()=>s_(await Xl(g),V)),()=>{k.Za(),g.asyncQueue.enqueueAndForget(async()=>o_(await Xl(g),V))}}(La(h),f,l,u)}function _h(n,e){return function(r,i){const s=new wn;return r.asyncQueue.enqueueAndForget(async()=>y_(await k_(r),i,s)),s.promise}(La(n),e)}function Y_(n,e,t){const r=t.docs.get(e._key),i=new vh(n);return new gh(n,i,e._key,r,new Mr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class J_{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ch(e)}set(e,t,r){this._verifyNotCommitted();const i=go(e,this._firestore),s=mh(i.converter,t,r),c=lh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(c.toMutation(i._key,st.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=go(e,this._firestore);let c;return c=typeof(t=Re(t))=="string"||t instanceof ws?$_(this._dataReader,"WriteBatch.update",s._key,t,r,i):j_(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(c.toMutation(s._key,st.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=go(e,this._firestore);return this._mutations=this._mutations.concat(new ba(t._key,st.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function go(n,e){if((n=Re(n)).firestore!==e)throw new z(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function X_(n){return La(n=In(n,Zr)),new J_(n,e=>_h(n,e))}(function(e,t=!0){(function(i){ur=i})(lr),Jn(new Cn("firestore",(r,{instanceIdentifier:i,options:s})=>{const c=r.getProvider("app").getImmediate(),l=new Zr(new Km(r.getProvider("auth-internal")),new Xm(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new z(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kr(h.options.projectId,f)}(c,i),c);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),tn(El,"4.7.3",e),tn(El,"4.7.3","esm2017")})();function qa(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function yh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Z_=yh,bh=new ni("auth","Firebase",yh());/**
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
 */const is=new ca("@firebase/auth");function ey(n,...e){is.logLevel<=te.WARN&&is.warn(`Auth (${lr}): ${n}`,...e)}function Bi(n,...e){is.logLevel<=te.ERROR&&is.error(`Auth (${lr}): ${n}`,...e)}/**
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
 */function Et(n,...e){throw Ga(n,...e)}function dt(n,...e){return Ga(n,...e)}function Ha(n,e,t){const r=Object.assign(Object.assign({},Z_()),{[e]:t});return new ni("auth","Firebase",r).create(e,{appName:n.name})}function nn(n){return Ha(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Eh(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Et(n,"argument-error"),Ha(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ga(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return bh.create(n,...e)}function K(n,e,...t){if(!n)throw Ga(e,...t)}function Dt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Bi(e),new Error(e)}function Ft(n,e){n||Dt(e)}/**
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
 */function Qo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ty(){return iu()==="http:"||iu()==="https:"}function iu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function ny(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ty()||Tf()||"connection"in navigator)?navigator.onLine:!0}function ry(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ui{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ft(t>e,"Short delay should be less than long delay!"),this.isMobile=Ef()||Af()}get(){return ny()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wa(n,e){Ft(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class wh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sy=new ui(3e4,6e4);function Ka(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function pr(n,e,t,r,i={}){return Ih(n,i,async()=>{let s={},c={};r&&(e==="GET"?c=r:s={body:JSON.stringify(r)});const l=ri(Object.assign({key:n.config.apiKey},c)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},s);return If()||(h.referrerPolicy="no-referrer"),wh.fetch()(Th(n,n.config.apiHost,t,l),h)})}async function Ih(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},iy),e);try{const i=new ay(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const c=await s.json();if("needConfirmation"in c)throw Mi(n,"account-exists-with-different-credential",c);if(s.ok&&!("errorMessage"in c))return c;{const l=s.ok?c.errorMessage:c.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mi(n,"credential-already-in-use",c);if(u==="EMAIL_EXISTS")throw Mi(n,"email-already-in-use",c);if(u==="USER_DISABLED")throw Mi(n,"user-disabled",c);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ha(n,f,h);Et(n,f)}}catch(i){if(i instanceof Ut)throw i;Et(n,"network-request-failed",{message:String(i)})}}async function oy(n,e,t,r,i={}){const s=await pr(n,e,t,r,i);return"mfaPendingCredential"in s&&Et(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Th(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Wa(n.config,i):`${n.config.apiScheme}://${i}`}class ay{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(dt(this.auth,"network-request-failed")),sy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Mi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=dt(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function cy(n,e){return pr(n,"POST","/v1/accounts:delete",e)}async function Ah(n,e){return pr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function $r(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ly(n,e=!1){const t=Re(n),r=await t.getIdToken(e),i=Qa(r);K(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,c=s?.sign_in_provider;return{claims:i,token:r,authTime:$r(vo(i.auth_time)),issuedAtTime:$r(vo(i.iat)),expirationTime:$r(vo(i.exp)),signInProvider:c||null,signInSecondFactor:s?.sign_in_second_factor||null}}function vo(n){return Number(n)*1e3}function Qa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Bi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hu(t);return i?JSON.parse(i):(Bi("Failed to decode base64 JWT payload"),null)}catch(i){return Bi("Caught error parsing JWT payload as JSON",i?.toString()),null}}function su(n){const e=Qa(n);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ei(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ut&&uy(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function uy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class dy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$r(this.lastLoginAt),this.creationTime=$r(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ss(n){var e;const t=n.auth,r=await n.getIdToken(),i=await ei(n,Ah(t,{idToken:r}));K(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const c=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ch(s.providerUserInfo):[],l=py(n.providerData,c),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!l?.length,f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Yo(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function hy(n){const e=Re(n);await ss(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function py(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ch(n){return n.map(e=>{var{providerId:t}=e,r=qa(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fy(n,e){const t=await Ih(n,{},async()=>{const r=ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,c=Th(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",wh.fetch()(c,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function my(n,e){return pr(n,"POST","/v2/accounts:revokeToken",Ka(n,e))}/**
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
 */class Wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):su(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){K(e.length!==0,"internal-error");const t=su(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await fy(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,c=new Wn;return r&&(K(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),c.expirationTime=s),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wn,this.toJSON())}_performRefresh(){return Dt("not implemented")}}/**
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
 */function zt(n,e){K(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Vt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=qa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ei(this,this.stsTokenManager.getToken(this.auth,e));return K(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ly(this,e)}reload(){return hy(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ss(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pt(this.auth.app))return Promise.reject(nn(this.auth));const e=await this.getIdToken();return await ei(this,cy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,c,l,u,h,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,_=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,E=(c=t.photoURL)!==null&&c!==void 0?c:void 0,I=(l=t.tenantId)!==null&&l!==void 0?l:void 0,k=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,V=(h=t.createdAt)!==null&&h!==void 0?h:void 0,j=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:U,emailVerified:$,isAnonymous:W,providerData:x,stsTokenManager:A}=t;K(U&&A,e,"internal-error");const y=Wn.fromJSON(this.name,A);K(typeof U=="string",e,"internal-error"),zt(m,e.name),zt(g,e.name),K(typeof $=="boolean",e,"internal-error"),K(typeof W=="boolean",e,"internal-error"),zt(_,e.name),zt(E,e.name),zt(I,e.name),zt(k,e.name),zt(V,e.name),zt(j,e.name);const w=new Vt({uid:U,auth:e,email:g,emailVerified:$,displayName:m,isAnonymous:W,photoURL:E,phoneNumber:_,tenantId:I,stsTokenManager:y,createdAt:V,lastLoginAt:j});return x&&Array.isArray(x)&&(w.providerData=x.map(T=>Object.assign({},T))),k&&(w._redirectEventId=k),w}static async _fromIdTokenResponse(e,t,r=!1){const i=new Wn;i.updateFromServerResponse(t);const s=new Vt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ss(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Ch(i.providerUserInfo):[],c=!(i.email&&i.passwordHash)&&!s?.length,l=new Wn;l.updateFromIdToken(r);const u=new Vt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:c}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Yo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(u,h),u}}/**
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
 */const ou=new Map;function Ot(n){Ft(n instanceof Function,"Expected a class definition");let e=ou.get(n);return e?(Ft(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ou.set(n,e),e)}/**
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
 */class Rh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Rh.type="NONE";const au=Rh;/**
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
 */function zi(n,e,t){return`firebase:${n}:${e}:${t}`}class Kn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zi(this.userKey,i.apiKey,s),this.fullPersistenceKey=zi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Kn(Ot(au),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Ot(au);const c=zi(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(c);if(f){const m=Vt._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Kn(s,e,r):(s=u[0],l&&await s._set(c,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(c)}catch{}})),new Kn(s,e,r))}}/**
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
 */function cu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vh(e))return"Blackberry";if(Oh(e))return"Webos";if(Ph(e))return"Safari";if((e.includes("chrome/")||kh(e))&&!e.includes("edge/"))return"Chrome";if(Dh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Sh(n=Ge()){return/firefox\//i.test(n)}function Ph(n=Ge()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kh(n=Ge()){return/crios\//i.test(n)}function Nh(n=Ge()){return/iemobile/i.test(n)}function Dh(n=Ge()){return/android/i.test(n)}function Vh(n=Ge()){return/blackberry/i.test(n)}function Oh(n=Ge()){return/webos/i.test(n)}function Ya(n=Ge()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function gy(n=Ge()){var e;return Ya(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vy(){return Cf()&&document.documentMode===10}function Mh(n=Ge()){return Ya(n)||Dh(n)||Oh(n)||Vh(n)||/windows phone/i.test(n)||Nh(n)}/**
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
 */function xh(n,e=[]){let t;switch(n){case"Browser":t=cu(Ge());break;case"Worker":t=`${cu(Ge())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${lr}/${r}`}/**
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
 */class _y{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((c,l)=>{try{const u=e(s);c(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function yy(n,e={}){return pr(n,"GET","/v2/passwordPolicy",Ka(n,e))}/**
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
 */const by=6;class Ey{constructor(e){var t,r,i,s;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:by,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,c,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(c=u.containsNumericCharacter)!==null&&c!==void 0?c:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class wy{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lu(this),this.idTokenSubscription=new lu(this),this.beforeStateQueue=new _y(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ot(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Kn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ah(this,{idToken:e}),r=await Vt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(pt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!c||c===l)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ss(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ry()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pt(this.app))return Promise.reject(nn(this));const t=e?Re(e):null;return t&&K(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pt(this.app)?Promise.reject(nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pt(this.app)?Promise.reject(nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yy(this),t=new Ey(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ni("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await my(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ot(e)||this._popupRedirectResolver;K(t,this,"argument-error"),this.redirectPersistenceManager=await Kn.create(this,[Ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let c=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{c||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{c=!0,u()}}else{const u=e.addObserver(t);return()=>{c=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&ey(`Error while retrieving App Check token: ${t.error}`),t?.token}}function fr(n){return Re(n)}class lu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Of(t=>this.observer=t)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ja={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Iy(n){Ja=n}function Ty(n){return Ja.loadJS(n)}function Ay(){return Ja.gapiScript}function Cy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Ry(n,e){const t=ua(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Wi(s,e??{}))return i;Et(i,"already-initialized")}return t.initialize({options:e})}function Sy(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Ot);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Py(n,e,t){const r=fr(n);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Lh(e),{host:c,port:l}=ky(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${c}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:c,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Ny()}function Lh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ky(n){const e=Lh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:uu(r.substr(s.length+1))}}else{const[s,c]=r.split(":");return{host:s,port:uu(c)}}}function uu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ny(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Fh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dt("not implemented")}_getIdTokenResponse(e){return Dt("not implemented")}_linkToIdToken(e,t){return Dt("not implemented")}_getReauthenticationResolver(e){return Dt("not implemented")}}/**
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
 */async function Qn(n,e){return oy(n,"POST","/v1/accounts:signInWithIdp",Ka(n,e))}/**
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
 */const Dy="http://localhost";class kn extends Fh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new kn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=qa(t,["providerId","signInMethod"]);if(!r||!i)return null;const c=new kn(r,i);return c.idToken=s.idToken||void 0,c.accessToken=s.accessToken||void 0,c.secret=s.secret,c.nonce=s.nonce,c.pendingToken=s.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Qn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Qn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qn(e,t)}buildRequest(){const e={requestUri:Dy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ri(t)}return e}}/**
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
 */class As{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class di extends As{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Wt extends di{constructor(){super("facebook.com")}static credential(e){return kn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wt.PROVIDER_ID="facebook.com";/**
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
 */class Nt extends di{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return kn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Nt.credential(t,r)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
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
 */class Kt extends di{constructor(){super("github.com")}static credential(e){return kn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.GITHUB_SIGN_IN_METHOD="github.com";Kt.PROVIDER_ID="github.com";/**
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
 */class Qt extends di{constructor(){super("twitter.com")}static credential(e,t){return kn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Qt.credential(t,r)}catch{return null}}}Qt.TWITTER_SIGN_IN_METHOD="twitter.com";Qt.PROVIDER_ID="twitter.com";/**
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
 */class sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Vt._fromIdTokenResponse(e,r,i),c=du(r);return new sr({user:s,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=du(r);return new sr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function du(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class os extends Ut{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,os.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new os(e,t,r,i)}}function Uh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?os._fromErrorAndOperation(n,s,e,r):s})}async function Vy(n,e,t=!1){const r=await ei(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return sr._forOperation(n,"link",r)}/**
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
 */async function Oy(n,e,t=!1){const{auth:r}=n;if(pt(r.app))return Promise.reject(nn(r));const i="reauthenticate";try{const s=await ei(n,Uh(r,i,e,n),t);K(s.idToken,r,"internal-error");const c=Qa(s.idToken);K(c,r,"internal-error");const{sub:l}=c;return K(n.uid===l,r,"user-mismatch"),sr._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Et(r,"user-mismatch"),s}}/**
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
 */async function My(n,e,t=!1){if(pt(n.app))return Promise.reject(nn(n));const r="signIn",i=await Uh(n,r,e),s=await sr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}/**
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
 */function hu(n,e){return Re(n).setPersistence(e)}function xy(n,e,t,r){return Re(n).onIdTokenChanged(e,t,r)}function Ly(n,e,t){return Re(n).beforeAuthStateChanged(e,t)}function Fy(n,e,t,r){return Re(n).onAuthStateChanged(e,t,r)}function Uy(n){return Re(n).signOut()}const as="__sak";/**
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
 */class jh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(as,"1"),this.storage.removeItem(as),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const jy=1e3,$y=10;class $h extends jh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,l,u)=>{this.notifyListeners(c,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},s=this.storage.getItem(r);vy()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$y):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},jy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$h.type="LOCAL";const Bh=$h;/**
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
 */class zh extends jh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zh.type="SESSION";const qh=zh;/**
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
 */function By(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Cs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Cs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,c=this.handlersMap[i];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(c).map(async h=>h(t.origin,s)),u=await By(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cs.receivers=[];/**
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
 */function Xa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class zy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,c;return new Promise((l,u)=>{const h=Xa("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);c={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function vt(){return window}function qy(n){vt().location.href=n}/**
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
 */function Hh(){return typeof vt().WorkerGlobalScope<"u"&&typeof vt().importScripts=="function"}async function Hy(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gy(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Wy(){return Hh()?self:null}/**
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
 */const Gh="firebaseLocalStorageDb",Ky=1,cs="firebaseLocalStorage",Wh="fbase_key";class hi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Rs(n,e){return n.transaction([cs],e?"readwrite":"readonly").objectStore(cs)}function Qy(){const n=indexedDB.deleteDatabase(Gh);return new hi(n).toPromise()}function Jo(){const n=indexedDB.open(Gh,Ky);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(cs,{keyPath:Wh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(cs)?e(r):(r.close(),await Qy(),e(await Jo()))})})}async function pu(n,e,t){const r=Rs(n,!0).put({[Wh]:e,value:t});return new hi(r).toPromise()}async function Yy(n,e){const t=Rs(n,!1).get(e),r=await new hi(t).toPromise();return r===void 0?null:r.value}function fu(n,e){const t=Rs(n,!0).delete(e);return new hi(t).toPromise()}const Jy=800,Xy=3;class Kh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Xy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cs._getInstance(Wy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Hy(),!this.activeServiceWorker)return;this.sender=new zy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jo();return await pu(e,as,"1"),await fu(e,as),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>pu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Yy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Rs(i,!1).getAll();return new hi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kh.type="LOCAL";const Qh=Kh;new ui(3e4,6e4);/**
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
 */function Za(n,e){return e?Ot(e):(K(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ec extends Fh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Zy(n){return My(n.auth,new ec(n),n.bypassAuthState)}function eb(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),Oy(t,new ec(n),n.bypassAuthState)}async function tb(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),Vy(t,new ec(n),n.bypassAuthState)}/**
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
 */class Yh{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:c,type:l}=e;if(c){this.reject(c);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zy;case"linkViaPopup":case"linkViaRedirect":return tb;case"reauthViaPopup":case"reauthViaRedirect":return eb;default:Et(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const nb=new ui(2e3,1e4);async function rb(n,e,t){if(pt(n.app))return Promise.reject(dt(n,"operation-not-supported-in-this-environment"));const r=fr(n);Eh(n,e,As);const i=Za(r,t);return new bn(r,"signInViaPopup",e,i).executeNotNull()}class bn extends Yh{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=Xa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nb.get())};e()}}bn.currentPopupAction=null;/**
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
 */const ib="pendingRedirect",qi=new Map;class sb extends Yh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=qi.get(this.auth._key());if(!e){try{const r=await ob(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}qi.set(this.auth._key(),e)}return this.bypassAuthState||qi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ob(n,e){const t=Xh(e),r=Jh(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function ab(n,e){return Jh(n)._set(Xh(e),"true")}function cb(n,e){qi.set(n._key(),e)}function Jh(n){return Ot(n._redirectPersistence)}function Xh(n){return zi(ib,n.config.apiKey,n.name)}/**
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
 */function lb(n,e,t){return ub(n,e,t)}async function ub(n,e,t){if(pt(n.app))return Promise.reject(nn(n));const r=fr(n);Eh(n,e,As),await r._initializationPromise;const i=Za(r,t);return await ab(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function db(n,e){return await fr(n)._initializationPromise,Zh(n,e,!1)}async function Zh(n,e,t=!1){if(pt(n.app))return Promise.reject(nn(n));const r=fr(n),i=Za(r,e),c=await new sb(r,i,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
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
 */const hb=10*60*1e3;class pb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ep(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(dt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hb&&this.cachedEventUids.clear(),this.cachedEventUids.has(mu(e))}saveEventToCache(e){this.cachedEventUids.add(mu(e)),this.lastProcessedEventTime=Date.now()}}function mu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ep({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function fb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ep(n);default:return!1}}/**
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
 */async function mb(n,e={}){return pr(n,"GET","/v1/projects",e)}/**
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
 */const gb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vb=/^https?/;async function _b(n){if(n.config.emulator)return;const{authorizedDomains:e}=await mb(n);for(const t of e)try{if(yb(t))return}catch{}Et(n,"unauthorized-domain")}function yb(n){const e=Qo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!vb.test(t))return!1;if(gb.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const bb=new ui(3e4,6e4);function gu(){const n=vt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Eb(n){return new Promise((e,t)=>{var r,i,s;function c(){gu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gu(),t(dt(n,"network-request-failed"))},timeout:bb.get()})}if(!((i=(r=vt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=vt().gapi)===null||s===void 0)&&s.load)c();else{const l=Cy("iframefcb");return vt()[l]=()=>{gapi.load?c():t(dt(n,"network-request-failed"))},Ty(`${Ay()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Hi=null,e})}let Hi=null;function wb(n){return Hi=Hi||Eb(n),Hi}/**
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
 */const Ib=new ui(5e3,15e3),Tb="__/auth/iframe",Ab="emulator/auth/iframe",Cb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sb(n){const e=n.config;K(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Wa(e,Ab):`https://${n.config.authDomain}/${Tb}`,r={apiKey:e.apiKey,appName:n.name,v:lr},i=Rb.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ri(r).slice(1)}`}async function Pb(n){const e=await wb(n),t=vt().gapi;return K(t,n,"internal-error"),e.open({where:document.body,url:Sb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const c=dt(n,"network-request-failed"),l=vt().setTimeout(()=>{s(c)},Ib.get());function u(){vt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(c)})}))}/**
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
 */const kb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nb=500,Db=600,Vb="_blank",Ob="http://localhost";class vu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mb(n,e,t,r=Nb,i=Db){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},kb),{width:r.toString(),height:i.toString(),top:s,left:c}),h=Ge().toLowerCase();t&&(l=kh(h)?Vb:t),Sh(h)&&(e=e||Ob,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[_,E])=>`${g}${_}=${E},`,"");if(gy(h)&&l!=="_self")return xb(e||"",l),new vu(null);const m=window.open(e||"",l,f);K(m,n,"popup-blocked");try{m.focus()}catch{}return new vu(m)}function xb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Lb="__/auth/handler",Fb="emulator/auth/handler",Ub=encodeURIComponent("fac");async function _u(n,e,t,r,i,s){K(n.config.authDomain,n,"auth-domain-config-required"),K(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:lr,eventId:i};if(e instanceof As){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Vf(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))c[f]=m}if(e instanceof di){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(c.scopes=f.join(","))}n.tenantId&&(c.tid=n.tenantId);const l=c;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),h=u?`#${Ub}=${encodeURIComponent(u)}`:"";return`${jb(n)}?${ri(l).slice(1)}${h}`}function jb({config:n}){return n.emulator?Wa(n,Fb):`https://${n.authDomain}/${Lb}`}/**
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
 */const _o="webStorageSupport";class $b{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qh,this._completeRedirectFn=Zh,this._overrideRedirectResult=cb}async _openPopup(e,t,r,i){var s;Ft((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const c=await _u(e,t,r,Qo(),i);return Mb(e,c,Xa())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await _u(e,t,r,Qo(),i);return qy(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ft(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Pb(e),r=new pb(e);return t.register("authEvent",i=>(K(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_o,{type:_o},i=>{var s;const c=(s=i?.[0])===null||s===void 0?void 0:s[_o];c!==void 0&&t(!!c),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_b(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Mh()||Ph()||Ya()}}const Bb=$b;var yu="@firebase/auth",bu="1.7.9";/**
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
 */class zb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hb(n){Jn(new Cn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:c,authDomain:l}=r.options;K(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:c,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xh(n)},h=new wy(r,i,s,u);return Sy(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Jn(new Cn("auth-internal",e=>{const t=fr(e.getProvider("auth").getImmediate());return(r=>new zb(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(yu,bu,qb(n)),tn(yu,bu,"esm2017")}/**
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
 */const Gb=5*60,Wb=Ku("authIdTokenMaxAge")||Gb;let Eu=null;const Kb=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Wb)return;const i=t?.token;Eu!==i&&(Eu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Qb(n=Xu()){const e=ua(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ry(n,{popupRedirectResolver:Bb,persistence:[Qh,Bh,qh]}),r=Ku("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const c=Kb(s.toString());Ly(t,c,()=>c(t.currentUser)),xy(t,l=>c(l))}}const i=Gu("auth");return i&&Py(t,`http://${i}`),t}function Yb(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Iy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=dt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Yb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hb("Browser");const Jb={apiKey:"AIzaSyDkWI1TU4an6qu8cQbt5Xsk4OKrQ-eiITI",authDomain:"ruben-dashboard.firebaseapp.com",projectId:"ruben-dashboard",storageBucket:"ruben-dashboard.firebasestorage.app",messagingSenderId:"40452541202",appId:"1:40452541202:web:bc5ad8cc712773fae181cb"},tp=Ju(Jb),np=M_(tp),Nn=Qb(tp),Xo=new Nt;Xo.setCustomParameters({prompt:"select_account"});hu(Nn,Qh).catch(()=>hu(Nn,Bh)).catch(n=>console.error("Persistencia Firebase Auth falló:",n));function Xb(n){return Fy(Nn,n)}async function Zb(n=()=>{}){n("Abriendo Google…");try{await rb(Nn,Xo),n("")}catch(e){if(e.code==="auth/popup-blocked"){n("Popup bloqueado, redirigiendo…");try{await lb(Nn,Xo)}catch(t){n("⚠ "+(t.code||t.message),!0)}}else e.code==="auth/cancelled-popup-request"||e.code==="auth/popup-closed-by-user"?n(""):n("⚠ "+(e.code||e.message),!0)}}async function eE(n=()=>{}){try{await db(Nn)&&n("✓ Sesión recibida…")}catch(e){n("⚠ "+(e.code||e.message),!0)}}async function tE(){await Uy(Nn)}const le=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,5);function o(n,e={},t=[]){const[r,...i]=n.split("."),s=document.createElement(r||"div");i.length&&(s.className=i.join(" "));for(const[l,u]of Object.entries(e||{}))if(!(u==null||u===!1))if(l==="class")s.className=s.className?s.className+" "+u:u;else if(l==="html")s.innerHTML=u;else if(l==="dataset")Object.assign(s.dataset,u);else if(l.startsWith("on")&&typeof u=="function")s.addEventListener(l.slice(2).toLowerCase(),u);else if(l in s&&l!=="list")try{s[l]=u}catch{s.setAttribute(l,u)}else s.setAttribute(l,u);const c=Array.isArray(t)?t:[t];for(const l of c)l==null||l===!1||s.append(l.nodeType?l:document.createTextNode(String(l)));return s}function Ce(n){for(;n.firstChild;)n.removeChild(n.firstChild)}const nE=new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}),D=n=>nE.format(Number(n)||0),_e=(n,e=2)=>(Number(n)||0).toLocaleString("es-ES",{maximumFractionDigits:e}),X=()=>{const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`},or=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];function it(n){if(!n)return null;const e=new Date(X()+"T00:00:00"),t=new Date(n+"T00:00:00");return Math.round((t-e)/864e5)}const rE=()=>document.getElementById("metaTheme");function iE(){localStorage.getItem("tema_v2")==="light"&&document.documentElement.classList.add("light"),rp()}function sE(){const n=document.documentElement.classList.toggle("light");localStorage.setItem("tema_v2",n?"light":"dark"),rp()}function rp(){const n=document.documentElement.classList.contains("light"),e=rE();e&&e.setAttribute("content",n?"#f4f1ec":"#09090b")}function Yn(n){const e=document.getElementById("syncDot");e&&(e.className="sync-dot"+(n?" "+n:""),n==="ok"&&setTimeout(()=>{e.classList.contains("ok")&&(e.className="sync-dot")},1500))}function N(n,e=""){const t=document.getElementById("toastHost");if(!t)return;const r=o("div.toast"+(e?"."+e:""),{},n);t.append(r),setTimeout(()=>{r.style.opacity="0",setTimeout(()=>r.remove(),200)},e==="err"?3500:2200)}function oE(n,e,t){const r=document.getElementById("appNav");Ce(r);for(const i of n)r.append(o("button.nav-item"+(i.id===e?".active":""),{onclick:()=>t(i.id)},[o("span.nav-icon",{},i.icono),o("span.nav-label",{},i.label)]))}function ne(n,e){const t=o("div.modal-backdrop"),r=()=>t.remove();t.addEventListener("click",s=>{s.target===t&&r()});const i=typeof e=="function"?e(r):e;return t.append(o("div.modal",{},[o("div.modal-title",{},n),i])),document.body.append(t),r}let ar=null;const ft={},Yt={};function wu(n){if(n!==ar){for(const e of Object.keys(Yt)){try{Yt[e].unsub()}catch{}delete Yt[e]}for(const e of Object.keys(ft))delete ft[e];ar=n||null}}function tc(n){return O_(np,"users",ar,"modulos",n)}function q(n){return n in ft?ft[n]:null}async function Z(n,e){if(!ar)throw new Error("sin sesión");ft[n]=e,Yn("syncing");try{await K_(tc(n),{data:JSON.stringify(e),ts:Date.now()}),Yn("ok")}catch(t){throw Yn("err"),console.error("store.save",n,t),t}}async function pi(n){if(!ar)throw new Error("sin sesión");const e=X_(np),t=Date.now();for(const[r,i]of Object.entries(n))ft[r]=i,e.set(tc(r),{data:JSON.stringify(i),ts:t});Yn("syncing");try{await e.commit(),Yn("ok")}catch(r){throw Yn("err"),console.error("store.saveMany",r),r}}function qe(n,e){if(!ar)return()=>{};if(!Yt[n]){const t=new Set,r=Q_(tc(n),i=>{ft[n]=i.exists()?JSON.parse(i.data().data):null;for(const s of t)try{s(ft[n])}catch(c){console.error(c)}},i=>console.error("store.subscribe",n,i));Yt[n]={unsub:r,listeners:t}}if(Yt[n].listeners.add(e),n in ft)try{e(ft[n])}catch(t){console.error(t)}return()=>{const t=Yt[n];if(t&&(t.listeners.delete(e),t.listeners.size===0)){try{t.unsub()}catch{}delete Yt[n]}}}const ip=15e3,Iu=15,Tu=12.5;function aE(n){const[e,t]=n.split("-");return`${e}-${parseInt(t,10)-1}`}function sp(){const n=new Date;return`${n.getFullYear()}-${n.getMonth()}`}function Zo(n,e){return n&&n[e]||[]}function ea(n){return(n||[]).reduce((e,t)=>e+(Number(t.importe)||0),0)}function Au(n){return(n||[]).reduce((e,t)=>(e[t.tipo]=(e[t.tipo]||0)+(Number(t.importe)||0),e),{})}function cE(n){const t=(n||[]).map(r=>{const i=(r.trabajos||[]).filter(s=>!s.pagado);return{id:r.id,nombre:r.nombre,nPend:i.length,importe:i.reduce((s,c)=>s+(Number(c.importe)||0),0)}}).filter(r=>r.nPend>0);return{porTrab:t,total:t.reduce((r,i)=>r+i.importe,0)}}const Hn=n=>Number(n)||0,op={camper:["Diseño y presupuesto","Compra de materiales","Desmontaje y preparación","Aislamiento y suelo","Electricidad","Agua y fontanería","Panelado","Mobiliario","Acabados y tapicería","Homologación / ITV","Entrega"],carpinteria:["Medición y diseño","Presupuesto","Compra de material","Corte y mecanizado","Montaje en taller","Acabado (lijado/barniz/lacado)","Instalación en obra","Repasos","Entrega"],cnc:["Diseño / archivo CAD-CAM","Presupuesto","Preparación de material","Mecanizado CNC","Acabado y repasos","Control de calidad","Embalaje","Entrega"]},lE={tarifaVentaMO:40,margenMateriales:.2,iva:.21},On=[["camper","Camper"],["carpinteria","Carpintería"],["cnc","CNC"]],Mn=n=>(On.find(([e])=>e===n)||[null,n])[1];function uE(n,e){const t=n?.trabajos_cfg||{};return{fases:{...op,...t.fases||{}},params:{...lE,...t.params||{}}}}function dE(n,e){const t=uE(n).fases[e];return Array.isArray(t)&&t.length?t.slice():(op[e]||[]).slice()}function ap(n,e){return dE(n,e).map(t=>({nombre:t,estado:"Pendiente",fechaPrevista:"",fechaFin:"",notas:""}))}function cp(n,e){if(!e)return[];const t=[];for(const r of n||[])for(const i of r.trabajos||[])i.proyectoId===e&&t.push({id:i.id,fecha:i.fecha||"",trabajador:r.nombre,trabajadorId:r.id,horas:i.horas??null,descripcion:i.descripcion||"",importe:Hn(i.importe),tipo:i.tipo,pagado:!!i.pagado});return t.sort((r,i)=>(r.fecha||"").localeCompare(i.fecha||"")),t}function Ss(n,e=[]){const t=n||{},r=(t.materiales||[]).reduce((_,E)=>_+Hn(E.costeReal??E.costeEstimado??0),0),i=(t.otrosGastos||[]).reduce((_,E)=>_+Hn(E.importe),0),s=cp(e,t.id).reduce((_,E)=>_+E.importe,0),c=r+s+i,l=(t.extras||[]).reduce((_,E)=>_+Hn(E.importe),0),u=Hn(t.ingresoPresupuestado)+l,h=u-c,f=u>0?h/u*100:0,m=(t.cobros||[]).reduce((_,E)=>_+Hn(E.importe),0),g=u-m;return{costeMateriales:r,costeManoObra:s,costeOtros:i,costeTotal:c,extras:l,ingresoTotal:u,resultado:h,margen:f,cobrado:m,pendienteCobro:g}}function nc(n){const e=n?.fases||[];if(!e.length)return"";const t=e.find(r=>r.estado!=="Completada");return t?t.nombre:"Entregado"}const lp=["Pendiente","En curso","Completada"],up=["Pendiente","En curso","Hecha"],hE=["Pendiente","Pedido","Recibido"],rc="impuestos";function dp(n){return Object.entries(n||{}).filter(([e])=>e!==rc).reduce((e,[,t])=>e+(Number(t)||0),0)}const ic=[["inversiones","Inversiones"],["liquido","Líquido"],["negocios","Negocios"],["","Sin clasificar"]],hp=(n,e)=>n?.grupos_cuentas?.[e]||"";function pE(n=new Date){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function fE(n,e,t){const r=[];if(!n)return r;const[i,s,c]=e.split("-").map(Number),[l,u,h]=t.split("-").map(Number),f=new Date(i,s-1,c),m=new Date(l,u-1,h);if(!n.recurrente)return n.fecha&&n.fecha>=e&&n.fecha<=t&&r.push(n.fecha),r;const g=n.fechaInicio||e,_=n.fechaFin||t,[E,I,k]=g.split("-").map(Number),V=new Date(E,I-1,k),[j,U,$]=_.split("-").map(Number),W=new Date(j,U-1,$),x=new Date(Math.max(V.getTime(),f.getTime())),A=new Date(Math.min(m.getTime(),W.getTime()));if(n.frecuencia==="semanal"){const y=n.diaCobro!=null?n.diaCobro:1;for(;x<=A&&x.getDay()!==y;)x.setDate(x.getDate()+1);for(;x<=A;)r.push(x.toISOString().split("T")[0]),x.setDate(x.getDate()+7)}else if(n.frecuencia==="mensual"){const y=Math.max(1,Math.min(31,n.diaCobro||1));let w=x.getFullYear(),T=x.getMonth();for(;;){const C=new Date(w,T+1,0).getDate(),R=Math.min(y,C),b=new Date(w,T,R);if(b>A)break;if(b>=x){const oe=`${w}-${String(T+1).padStart(2,"0")}-${String(R).padStart(2,"0")}`;oe>=e&&oe<=t&&r.push(oe)}T++,T>11&&(T=0,w++)}}else if(n.frecuencia==="trimestral"||n.frecuencia==="anual"){const y=n.frecuencia==="anual"?12:3,w=n.diaCobro||V.getDate();let T=V.getFullYear(),C=V.getMonth();for(;;){const R=new Date(T,C+1,0).getDate(),b=Math.min(w,R),oe=new Date(T,C,b);if(oe>A)break;if(oe>=f&&oe>=V){const ye=`${T}-${String(C+1).padStart(2,"0")}-${String(b).padStart(2,"0")}`;ye<=t&&r.push(ye)}for(C+=y;C>=12;)C-=12,T++}}return r}function Ps(n,e,t){const r=[];return(n||[]).forEach(i=>{if(i.archivado)return;fE(i,e,t).forEach(c=>{const l=(i.pagos||[]).find(u=>u.fecha===c);r.push({gastoId:i.id,concepto:i.concepto,importe:i.importe,categoria:i.categoria,metodo:i.metodo,fecha:c,pagado:!!l,pago:l,gastoRef:i})})}),r.sort((i,s)=>i.fecha.localeCompare(s.fecha)),r}const yo=n=>n!=="personal",mE=["personal","empresa","combustible","material","otros"];function Cu(n){const e=Array.isArray(n?.categorias_gasto)?n.categorias_gasto:null,t=e&&e.length?e:mE,r=[];for(const i of["personal",...t]){const s=String(i??"").trim();s&&!r.includes(s)&&r.push(s)}return r}function gE(n){const[e,t]=n.split("-").map(Number),r=Math.floor((t-1)/3)+1,i=(r-1)*3,s=new Date(e,i+3,0).getDate();return{anio:e,q:r,etiqueta:`Q${r} ${e}`,desde:`${e}-${String(i+1).padStart(2,"0")}-01`,hasta:`${e}-${String(i+3).padStart(2,"0")}-${String(s).padStart(2,"0")}`}}function vE(n,e,t,r){const i=(r-1)*3,s=new Date(t,i+3,0).getDate(),c=`${t}-${String(i+1).padStart(2,"0")}-01`,l=`${t}-${String(i+3).padStart(2,"0")}-${String(s).padStart(2,"0")}`,u=x=>Number(x).toFixed(2),h=Ps(n||[],c,l).filter(x=>x.gastoRef?.deducible);let f=0,m=0;for(const x of h){const A=x.gastoRef||{};if(A.ivaSoportado!=null)f+=A.ivaSoportado,m+=A.baseImponible||x.importe-A.ivaSoportado;else{const y=(x.importe||0)/1.21;m+=y,f+=y*.21}}const _=(e||[]).filter(x=>x.fecha>=c&&x.fecha<=l),E=_.reduce((x,A)=>x+(A.ivaRepercutido||0),0),I=_.reduce((x,A)=>x+(A.baseImponible||0),0),k=E-f,V=I-m,j=Math.max(0,V*.2),$={1:"20 abril",2:"20 julio",3:"20 octubre",4:"20 enero"}[r]+(r===4?` ${t+1}`:` ${t}`),W=h.some(x=>x.gastoRef&&x.gastoRef.tipoIVA==null);return{ok:!0,trimestre:`Q${r} ${t}`,rango:{desde:c,hasta:l},plazo:$,facturas:{cantidad:_.length,base:u(I),iva_repercutido:u(E),total:u(I+E)},gastos:{cantidad:h.length,base:u(m),iva_soportado:u(f),nota:W?"Algunos gastos estimados al 21% (sin desglose IVA)":null},modelo_303:{repercutido:u(E),soportado:u(f),cuota:u(k),resultado:k>=0?`A INGRESAR ${u(k)}€`:`A DEVOLVER ${u(Math.abs(k))}€`},modelo_130:{base_ingresos:u(I),base_gastos:u(m),rendimiento:u(V),cuota:u(j),resultado:j>0?`A INGRESAR ${u(j)}€`:"Sin pago"},total_provisionar:`${u(Math.max(0,k)+j)}€`}}function ti({cobrospagos:n,gastos:e,trabajadores:t,trabajos:r},i,s){const c=[];for(const l of n?.movimientos||[])!l.fecha||l.fecha<i||l.fecha>s||c.push({id:l.id,fecha:l.fecha,tipo:l.tipo,concepto:l.concepto||"",categoria:l.categoria||"",importe:Number(l.importe)||0,estado:l.estado||"previsto",notas:l.notas||"",origen:"manual",readonly:!1});for(const l of Ps(e||[],i,s))c.push({id:`g:${l.gastoId}:${l.fecha}`,fecha:l.fecha,tipo:"pago",concepto:l.concepto||"",categoria:l.categoria||"",importe:Number(l.importe)||0,estado:l.pagado?"realizado":"previsto",notas:"",origen:"gasto",readonly:!0});for(const l of t||[])for(const u of l.trabajos||[])u.pagado||!u.fecha||u.fecha<i||u.fecha>s||c.push({id:`w:${l.id}:${u.id}`,fecha:u.fecha,tipo:"pago",concepto:`${l.nombre}: ${u.descripcion||""}`.trim(),categoria:"trabajador",importe:Number(u.importe)||0,estado:"previsto",notas:"",origen:"trabajador",readonly:!0});for(const l of r||[]){if((l.estado||"activo")!=="activo"||!l.fechaEntrega||l.fechaEntrega<i||l.fechaEntrega>s)continue;const u=Ss(l,[]).pendienteCobro;u<=.005||c.push({id:`t:${l.id}`,fecha:l.fechaEntrega,tipo:"cobro",concepto:`Cobro previsto: ${l.nombre}`,categoria:"trabajo",importe:u,estado:"previsto",notas:"",origen:"trabajo",readonly:!0})}return c.sort((l,u)=>l.fecha.localeCompare(u.fecha)||l.origen.localeCompare(u.origen)),c}function ks(n){return(n||[]).reduce((e,t)=>e+(t.tipo==="cobro"?t.importe:-t.importe),0)}const Ns=[["nuevo","Nuevo"],["contactado","Contactado"],["cita","Cita"],["presupuestado","Presupuestado"],["ganado","Ganado"],["perdido","Perdido"]],Br=Ns.map(([n])=>n),sc=[["borrador","Borrador"],["enviado","Enviado"],["aceptado","Aceptado"],["rechazado","Rechazado"]],_E=["web","calcom","telegram","instagram","manual"],Ru={kifar:"Kifar",klova:"Klova",camper:"Camper"},pp=2,yE=4;function wt(n){const e=n||{};return{clientes:Array.isArray(e.clientes)?e.clientes:[],leads:Array.isArray(e.leads)?e.leads:[],presupuestos:Array.isArray(e.presupuestos)?e.presupuestos:[]}}function ln(n){return n&&n.tipo?Mn(n.tipo):n&&Ru[n.negocio]?Ru[n.negocio]:"—"}function fp(n){return(Ns.find(([e])=>e===n)||[null,n])[1]||n||"—"}function oc(n){return(sc.find(([e])=>e===n)||[null,n])[1]||n||"—"}function ac(n,e){if(!e)return"";const t=(n||[]).find(r=>r.id===e);return t?t.nombre:""}function bE(n,e={}){n.append(o("h1.section-title",{},"Hoy"));const t=o("div");n.append(t);const r={tareas:null,trabajadores:null,trabajos:null,crm:null,ingresos:null,config:null,cobrospagos:null,gastos:null,cargado:{}},i=()=>{Ce(t),t.append(EE(r)),t.append(CE(r,e)),t.append(RE(r,e)),t.append(SE(r,e)),t.append(AE(r,e)),t.append(PE(r)),t.append(kE())},s=[qe("tareas",c=>{r.tareas=c,r.cargado.tareas=!0,i()}),qe("trabajadores",c=>{r.trabajadores=c,r.cargado.trabajadores=!0,i()}),qe("trabajos",c=>{r.trabajos=c,r.cargado.trabajos=!0,i()}),qe("crm",c=>{r.crm=c,r.cargado.crm=!0,i()}),qe("ingresos",c=>{r.ingresos=c,r.cargado.ingresos=!0,i()}),qe("config",c=>{r.config=c,r.cargado.config=!0,i()}),qe("cobrospagos",c=>{r.cobrospagos=c,r.cargado.cobrospagos=!0,i()}),qe("gastos",c=>{r.gastos=c,r.cargado.gastos=!0,i()})];return i(),()=>s.forEach(c=>c())}function EE(n){const e=o("div.card");e.append(o("div.card-head",{},[o("h3",{},"Tareas"),o("button.link",{onclick:()=>TE(n)},"+ Nueva")]));const r=(n.tareas||[]).filter(l=>!l.done),i=new Set,s=[],c=(l,u)=>{const h=u.filter(f=>!i.has(f.id));h.forEach(f=>i.add(f.id)),h.length&&s.push({titulo:l,items:h})};if(c("Vencidas",r.filter(l=>l.fecha&&it(l.fecha)<0)),c("Urgentes",r.filter(l=>l.prioridad==="urgente")),c("Próximos 7 días",r.filter(l=>l.fecha&&it(l.fecha)>=0&&it(l.fecha)<=7)),!n.cargado.tareas)return e.append(o("div.spinner")),e;if(!s.length)return e.append(o("div.card-empty",{},"Sin tareas urgentes ni próximas")),e;for(const l of s){e.append(o("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:8px 0 2px;"},l.titulo));for(const u of l.items)e.append(wE(u,n))}return e}function wE(n,e){const t=n.fecha?it(n.fecha):null,r=n.fecha?t<0?o("span.chip.venc",{},`${Math.abs(t)}d tarde`):t===0?o("span.chip.urgente",{},"hoy"):o("span.chip",{},`${t}d`):null,i=o("button.check",{title:"Completar",onclick:async()=>{await IE(n.id,e)}},"✓");return o("div.row",{},[i,o("div.row-main",{},[o("div.row-label",{},n.titulo||"(sin título)"),o("div.row-sub",{},[n.prioridad==="urgente"?o("span.chip.urgente",{},"urgente"):null,n.prioridad==="baja"?o("span.chip.baja",{},"baja"):null,r].filter(Boolean))])])}async function IE(n,e){const t=(e.tareas||[]).slice(),r=t.find(i=>i.id===n);if(r){r.done=!0;try{await Z("tareas",t),N("Tarea completada","ok")}catch{N("No se pudo guardar","err")}}}function TE(n){ne("Nueva tarea",e=>{const t=o("input",{placeholder:"Título",autofocus:!0}),r=o("select",{},[o("option",{value:"normal"},"Normal"),o("option",{value:"urgente"},"Urgente"),o("option",{value:"baja"},"Baja")]),i=o("input",{type:"date"}),s=async()=>{if(!t.value.trim()){N("Falta el título","err");return}const c={id:le(),titulo:t.value.trim(),desc:"",proyectoId:"personal",prioridad:r.value,fecha:i.value||"",notas:"",done:!1},l=(n.tareas||[]).slice();l.push(c);try{await Z("tareas",l),N("Tarea creada","ok"),e()}catch{N("No se pudo guardar","err")}};return o("div",{},[bo("Título",t),o("div.field-grid",{},[bo("Prioridad",r),bo("Fecha",i)]),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:s},"Crear")])])})}function AE(n,e){const t=o("div.card");if(t.append(o("div.card-head",{},[o("h3",{},"Pagos pendientes"),e.nav?o("button.link",{onclick:()=>e.nav("equipo")},"Equipo →"):null])),!n.cargado.trabajadores)return t.append(o("div.spinner")),t;const{porTrab:r,total:i}=cE(n.trabajadores);if(!r.length)return t.append(o("div.card-empty",{},"Nada pendiente de pago")),t;t.append(o("div.hero",{},[o("div.hero-label",{},"Total pendiente"),o("div.hero-value",{},D(i))]));for(const s of r)t.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},s.nombre),o("div.row-sub",{},`${s.nPend} trabajo${s.nPend===1?"":"s"}`)]),o("div.row-right",{},o("span.amount.pend",{},D(s.importe)))]));return t}function CE(n,e){const t=o("div.card");if(t.append(o("div.card-head",{},[o("h3",{},"Tesorería · próximos 7 días"),e.nav?o("button.link",{onclick:()=>e.nav("finanzas")},"Finanzas →"):null])),!n.cargado.cobrospagos||!n.cargado.gastos||!n.cargado.trabajadores)return t.append(o("div.spinner")),t;const r=X(),i=new Date(r+"T00:00:00");i.setDate(i.getDate()+7);const s=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`,c=ti({cobrospagos:n.cobrospagos,gastos:n.gastos,trabajadores:n.trabajadores,trabajos:n.trabajos},r,s),l=ks(c);if(t.append(o("div.hero",{},[o("div.hero-label",{},"Neto de la semana"),o("div.hero-value",{},D(l)),o("div.hero-sub",{},`${c.length} movimiento${c.length===1?"":"s"} · hasta ${s}`)])),!c.length)return t.append(o("div.card-empty",{},"Sin cobros ni pagos previstos")),t;for(const u of c.slice(0,12)){const h=u.origen==="gasto"?"gasto":u.origen==="trabajador"?"trabajador":u.categoria||u.tipo;t.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},[u.concepto||"(sin concepto)",o("span.chip",{style:"margin-left:6px;"},h)]),o("div.row-sub",{},`${u.fecha} · ${u.estado}`)]),o("div.row-right",{},o("div.amount"+(u.tipo==="cobro"?".pos":".neg"),{},(u.tipo==="cobro"?"+":"−")+D(u.importe)))]))}return t}function RE(n,e){const t=o("div.card");if(t.append(o("div.card-head",{},[o("h3",{},"Trabajos"),e.nav?o("button.link",{onclick:()=>e.nav("trabajos")},"Trabajos →"):null])),!n.cargado.trabajos)return t.append(o("div.spinner")),t;const r=(n.trabajos||[]).filter(i=>(i.estado||"activo")==="activo");if(!r.length)return t.append(o("div.card-empty",{},"Sin trabajos activos")),t;r.sort((i,s)=>(i.fechaEntrega||"9999").localeCompare(s.fechaEntrega||"9999"));for(const i of r){const s=i.fechaEntrega?it(i.fechaEntrega):null;let c=null;s!=null&&s<=7?c=s<0?o("span.chip.venc",{},`${Math.abs(s)}d tarde`):s===0?o("span.chip.urgente",{},"entrega hoy"):o("span.chip.pend",{},`entrega ${s}d`):i.fechaEntrega&&(c=o("span.chip",{},i.fechaEntrega)),t.append(o("div.row",{style:"cursor:pointer;",onclick:()=>e.nav&&e.nav("trabajos")},[o("div.row-main",{},[o("div.row-label",{},i.nombre||"(sin nombre)"),o("div.row-sub",{},`${Mn(i.tipo)}${i.cliente?` · ${i.cliente}`:""} · ${nc(i)||"—"}`)]),o("div.row-right",{},c)]))}return t}function SE(n,e){const t=o("div.card");if(t.append(o("div.card-head",{},[o("h3",{},"Clientes"),e.nav?o("button.link",{onclick:()=>e.nav("clientes")},"Clientes →"):null])),!n.cargado.crm)return t.append(o("div.spinner")),t;const{leads:r,presupuestos:i}=wt(n.crm),s=r.filter(l=>{if(l.estado!=="nuevo")return!1;const u=it(l.ultimoContacto||l.creado);return u!=null&&-u>pp}).sort((l,u)=>(l.ultimoContacto||l.creado||"").localeCompare(u.ultimoContacto||u.creado||"")),c=i.filter(l=>{if(l.estado!=="enviado"||!l.enviado)return!1;const u=it(l.enviado);return u!=null&&-u>yE}).sort((l,u)=>(l.enviado||"").localeCompare(u.enviado||""));if(!s.length&&!c.length)return t.append(o("div.card-empty",{},"Sin avisos: leads contactados y presupuestos al día")),t;if(s.length){t.append(o("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:8px 0 2px;"},"Leads sin contactar (>2 días)"));for(const l of s.slice(0,6)){const u=-it(l.ultimoContacto||l.creado);t.append(o("div.row",{style:e.nav?"cursor:pointer;":"",onclick:()=>e.nav&&e.nav("clientes")},[o("div.row-main",{},[o("div.row-label",{},l.nombre||"(sin nombre)"),o("div.row-sub",{},`${ln(l)} · ${l.origen||"—"}`)]),o("div.row-right",{},o("span.chip.venc",{},`${u}d`))]))}}if(c.length){t.append(o("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:8px 0 2px;"},"Presupuestos sin respuesta (>4 días)"));for(const l of c.slice(0,6)){const u=-it(l.enviado);t.append(o("div.row",{style:e.nav?"cursor:pointer;":"",onclick:()=>e.nav&&e.nav("clientes")},[o("div.row-main",{},[o("div.row-label",{},l.concepto||"(sin concepto)"),o("div.row-sub",{},`${ln(l)} · enviado ${l.enviado}`)]),o("div.row-right",{},[o("div.amount",{},D(l.total||0)),o("span.chip.pend",{},`${u}d`)])]))}}return t}function PE(n){const e=o("div.card"),t=new Date;if(e.append(o("div.card-head",{},[o("h3",{},"Kifar este mes"),o("span.small.muted",{},`${or[t.getMonth()]} ${t.getFullYear()}`)])),!n.cargado.ingresos||!n.cargado.config)return e.append(o("div.spinner")),e;const r=Zo(n.ingresos,sp()),i=ea(r),s=n.config&&n.config.objetivoMes||ip,c=s>0?Math.min(100,Math.round(i/s*100)):0;return e.append(o("div.hero",{},[o("div.hero-label",{},`${r.length} registro${r.length===1?"":"s"}`),o("div.hero-value",{},D(i)),o("div.hero-sub",{},`Objetivo ${D(s)} · ${c}%`),o("div.progress",{},o("span",{style:`width:${c}%`}))])),e}function kE(){const n=o("div.card");return n.append(o("div.card-head",{},o("h3",{},"Agenda"))),n.append(o("div.card-empty",{},"Disponible próximamente")),n}function bo(n,e){return o("div.field",{},[o("label",{},n),e])}const Ds={hrs:"Horas",pct:"Porcentaje",pzs:"Piezas"};function NE(n,e){if(!e.cargado.ingresos||!e.cargado.config){n.append(o("div.spinner"));return}const t=e.ingresos||{},r=e.config&&e.config.objetivoMes||ip,i=sp(),s=Zo(t,i),c=ea(s),l=r>0?Math.min(100,Math.round(c/r*100)):0,u=new Date,h=o("div.card");h.append(o("div.card-head",{},[o("h3",{},`${or[u.getMonth()]} ${u.getFullYear()}`),o("button.link",{onclick:()=>mp()},"+ Ingreso")])),h.append(o("div.hero",{},[o("div.hero-label",{},`${s.length} registro${s.length===1?"":"s"}`),o("div.hero-value",{},D(c)),o("div.hero-sub",{},`Objetivo ${D(r)} · ${l}%`),o("div.progress",{},o("span",{style:`width:${l}%`}))])),h.append(DE(Au(s))),n.append(h);const f=o("div.card");f.append(o("div.card-head",{},o("h3",{},"Registros del mes"))),s.length||f.append(o("div.card-empty",{},"Sin ingresos este mes"));for(const g of[...s].sort((_,E)=>(E.fechaISO||"").localeCompare(_.fechaISO||"")))f.append(VE(g,i));n.append(f);const m=o("div.card");m.append(o("div.card-head",{},o("h3",{},"Últimos 6 meses")));for(let g=5;g>=0;g--){const _=new Date;_.setDate(1),_.setMonth(_.getMonth()-g);const E=`${_.getFullYear()}-${_.getMonth()}`,I=Zo(t,E),k=ea(I),V=Au(I),j=E===i;m.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},[`${or[_.getMonth()]} ${_.getFullYear()}`,j?o("span.chip.ok",{style:"margin-left:6px;"},"actual"):null]),o("div.row-sub",{},`${I.length} reg · `+(Object.keys(V).length?Object.entries(V).map(([U,$])=>`${Ds[U]||U}: ${D($)}`).join(" · "):"—"))]),o("div.row-right",{},o("div.amount",{},D(k)))]))}n.append(m)}function DE(n){return Object.entries(n).length?o("div.kpis",{style:"margin-top:10px;"},["hrs","pct","pzs"].map(t=>o("div.kpi",{},[o("div.kpi-v",{},D(n[t]||0)),o("div.kpi-l",{},Ds[t])]))):o("div.small.muted",{style:"margin-top:8px;"},"Sin desglose todavía")}function VE(n,e){const t=n.tipo==="hrs"?`${_e(n.horas||0)} h × ${_e(n.preciohora||0)} €`:n.tipo==="pct"?`base ${D(n.baseImponible||0)} · ${_e(n.porcentaje||0)}%`:`venta ${D(n.venta||0)} · material ${D(n.material||0)}`;return o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},[n.desc||Ds[n.tipo]||n.tipo,o("span.chip",{style:"margin-left:6px;"},n.tipo)]),o("div.row-sub",{},`${n.fecha||n.fechaISO||"—"} · ${t}`)]),o("div.row-right",{},[o("div.amount",{},D(n.importe)),o("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;"},[o("button.btn.btn-sm",{onclick:()=>mp(n,e)},"Editar"),o("button.btn.btn-sm.btn-danger",{onclick:()=>OE(n.id,e)},"Borrar")])])])}function mp(n=null,e=null){const t=!!n;ne(t?"Editar ingreso":"Nuevo ingreso Kifar",r=>{const i=o("input",{type:"date",value:n?.fechaISO||X()}),s=o("select",{},Object.entries(Ds).map(([$,W])=>o("option",{value:$},W)));s.value=n?.tipo||"hrs";const c=o("input",{value:n?.desc||"",placeholder:"Descripción"}),l=o("input",{type:"number",step:"0.01",value:n?.importe??"",placeholder:"Importe € (opcional en horas)"}),u=o("input",{type:"number",step:"0.25",value:n?.horas??"",placeholder:"Horas"}),h=o("input",{type:"number",step:"0.5",value:n?.preciohora??Iu,placeholder:"€/h"}),f=o("div.field-grid",{},[lt("Horas",u),lt("€/hora",h)]),m=o("input",{type:"number",step:"0.01",value:n?.baseImponible??"",placeholder:"Base imponible"}),g=o("input",{type:"number",step:"0.01",value:n?.materiales??"",placeholder:"Materiales"}),_=o("input",{type:"number",step:"0.5",value:n?.porcentaje??Tu,placeholder:"%"}),E=o("div",{},[o("div.field-grid",{},[lt("Base imponible",m),lt("Materiales",g)]),lt("Porcentaje %",_)]),I=o("input",{type:"number",step:"0.01",value:n?.venta??"",placeholder:"Venta"}),k=o("input",{type:"number",step:"0.01",value:n?.material??"",placeholder:"Material"}),V=o("div.field-grid",{},[lt("Venta",I),lt("Material",k)]),j=()=>{f.hidden=s.value!=="hrs",E.hidden=s.value!=="pct",V.hidden=s.value!=="pzs"};s.addEventListener("change",j);const U=async()=>{const $=s.value,W=i.value||X(),x={id:n?.id||le(),tipo:$,importe:parseFloat(l.value)||0,desc:c.value.trim(),fechaISO:W,fecha:new Date(W+"T00:00:00").toLocaleDateString("es-ES")};if($==="pct"&&(x.baseImponible=parseFloat(m.value)||0,x.materiales=parseFloat(g.value)||0,x.porcentaje=parseFloat(_.value)||Tu),$==="hrs"&&(x.horas=parseFloat(u.value)||0,x.preciohora=parseFloat(h.value)||Iu,x.importe||(x.importe=x.horas*x.preciohora)),$==="pzs"&&(x.venta=parseFloat(I.value)||0,x.material=parseFloat(k.value)||0),!x.importe||x.importe<=0){N("Falta importe (o horas+€/h)","err");return}const A=aE(W),y={...q("ingresos")||{}},w=t?e:null;if(w&&(y[w]=(y[w]||[]).slice()),y[A]=(y[A]||[]).slice(),t)if(w&&w!==A)y[w]=y[w].filter(T=>T.id!==x.id),y[A].push(x);else{const T=y[A],C=T.findIndex(R=>R.id===x.id);C>=0?T[C]=x:T.push(x)}else y[A].push(x);try{await Z("ingresos",y),N(t?"Ingreso actualizado":`Ingreso registrado (${D(x.importe)})`,"ok"),r()}catch{N("No se pudo guardar","err")}};return j(),o("div",{},[o("div.field-grid",{},[lt("Fecha",i),lt("Tipo",s)]),lt("Descripción",c),lt("Importe €",l),f,E,V,o("div.btn-row",{},[o("button.btn",{onclick:r},"Cancelar"),o("button.btn.btn-primary",{onclick:U},t?"Guardar":"Registrar")])])})}async function OE(n,e){const t={...q("ingresos")||{}};t[e]=(t[e]||[]).filter(r=>r.id!==n);try{await Z("ingresos",t),N("Ingreso eliminado","ok")}catch{N("No se pudo guardar","err")}}function lt(n,e){return o("div.field",{},[o("label",{},n),e])}let Tn=null;function ME(n,e){Tn={proyectoId:n,etiqueta:e||n}}function xE(n,e={}){n.append(o("h1.section-title",{},"Equipo"));let t="trabajadores";const r=o("div.subtabs"),i=o("div");n.append(r),n.append(i);const s={trabajadores:null,capital:null,ingresos:null,config:null,trabajos:null,cargado:{}},c=()=>{Ce(r);for(const[u,h]of[["trabajadores","Trabajadores"],["kifar","Kifar"]])r.append(o("button.subtab"+(t===u?".active":""),{onclick:()=>{t=u,c()}},h));Ce(i),t==="trabajadores"?gp(i,s):NE(i,s)},l=[qe("trabajadores",u=>{s.trabajadores=u,s.cargado.trabajadores=!0,t==="trabajadores"&&c()}),qe("capital",u=>{s.capital=u,s.cargado.capital=!0}),qe("ingresos",u=>{s.ingresos=u,s.cargado.ingresos=!0,t==="kifar"&&c()}),qe("config",u=>{s.config=u,s.cargado.config=!0,t==="kifar"&&c()}),qe("trabajos",u=>{s.trabajos=u,s.cargado.trabajos=!0,t==="trabajadores"&&c()})];return c(),()=>l.forEach(u=>u())}const je={trabajador:"",estado:"pendientes",desde:"",hasta:""};function gp(n,e){if(!e.cargado.trabajadores){n.append(o("div.spinner"));return}const t=e.trabajadores||[];Tn&&n.append(LE(n,e,t));const r=t.filter(c=>c.activo!==!1),i=t.filter(c=>c.activo===!1),s=o("div.card");s.append(o("div.card-head",{},[o("h3",{},`Trabajadores (${r.length})`),o("button.link",{onclick:()=>vp(null)},"+ Alta")])),r.length||s.append(o("div.card-empty",{},"Sin trabajadores activos"));for(const c of r)s.append(Su(c,e));if(i.length){s.append(o("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:10px 0 2px;"},"De baja"));for(const c of i)s.append(Su(c,e))}n.append(s),n.append(_p(e))}function Su(n,e){const t=n.trabajos||[],i=t.filter(c=>!c.pagado).reduce((c,l)=>c+(Number(l.importe)||0),0),s=n.activo===!1;return o("div.card",{style:"padding:12px;"},[o("div.row",{style:"border:none;padding:0;"},[o("div.row-main",{},[o("div.row-label",{},[n.nombre,s?o("span.chip.baja",{style:"margin-left:6px;"},"baja"):null]),o("div.row-sub",{},[n.precioHoraHabitual?`${_e(n.precioHoraHabitual)} €/h · `:"",`${t.length} trabajo${t.length===1?"":"s"}`,n.especialidades?` · ${n.especialidades}`:""].join(""))]),o("div.row-right",{},i>0?o("span.amount.pend",{},D(i)):o("span.small.muted",{},"al día"))]),o("div.btn-row",{},[o("button.btn.btn-sm.btn-primary",{onclick:()=>cc(n,e)},"+ Trabajo"),o("button.btn.btn-sm",{onclick:()=>vp(n,e.trabajadores||[])},"Editar")])])}function LE(n,e,t){const r=t.filter(c=>c.activo!==!1),i=o("div.card",{style:"border-color:var(--gold);"});if(i.append(o("div.card-head",{},[o("h3",{},`Imputar horas a: ${Tn.etiqueta}`),o("button.link",{onclick:()=>{Tn=null,e.cargado.trabajadores&&FE(n,e)}},"Cancelar")])),!r.length)return i.append(o("div.card-empty",{},"No hay trabajadores activos. Da de alta uno primero.")),i;i.append(o("div.small.muted",{},"Elige el trabajador; el formulario se abre con el proyecto ya prefijado."));const s=o("div.btn-row",{},r.map(c=>o("button.btn.btn-sm.btn-primary",{onclick:()=>cc(c,e,null,Tn.proyectoId)},`+ ${c.nombre}`)));return i.append(s),i}function FE(n,e){Ce(n),gp(n,e)}function UE(n,e){const t=n.trabajos||q("trabajos")||[],r=t.filter(i=>(i.estado||"activo")==="activo").map(i=>[i.id,i.nombre]);if(r.push(["kifar","Kifar"],["personal","Personal"]),!r.some(([i])=>i===e)){const i=t.find(s=>s.id===e);r.unshift([e,i?`${i.nombre}${i.estado&&i.estado!=="activo"?" ("+i.estado+")":""}`:e])}return r}function vp(n,e){const t=!n;ne(t?"Nuevo trabajador":`Editar ${n.nombre}`,r=>{const i=o("input",{value:n?.nombre||"",placeholder:"Nombre"}),s=o("input",{value:n?.telefono||"",placeholder:"Teléfono"}),c=o("input",{type:"number",step:"0.5",value:n?.precioHoraHabitual??"",placeholder:"€/h"}),l=o("input",{value:n?.especialidades||"",placeholder:"p. ej. carpintería"}),u=o("textarea",{rows:2,placeholder:"Notas"},n?.notas||""),h=async()=>{if(!i.value.trim()){N("Falta el nombre","err");return}const g=(q("trabajadores")||[]).slice().map(_=>({..._}));if(t)g.push({id:le(),nombre:i.value.trim(),telefono:s.value.trim(),precioHoraHabitual:parseFloat(c.value)||0,especialidades:l.value.trim(),notas:u.value.trim(),activo:!0,fechaAlta:X(),trabajos:[]});else{const _=g.find(E=>E.id===n.id);if(!_){N("No encontrado","err");return}_.nombre=i.value.trim(),_.telefono=s.value.trim(),_.precioHoraHabitual=parseFloat(c.value)||0,_.especialidades=l.value.trim(),_.notas=u.value.trim()}try{await Z("trabajadores",g),N(t?"Trabajador creado":"Guardado","ok"),r()}catch{N("No se pudo guardar","err")}},f=[o("button.btn",{onclick:r},"Cancelar"),o("button.btn.btn-primary",{onclick:h},t?"Crear":"Guardar")];let m=null;if(!t){const g=(n.trabajos||[]).length;n.activo===!1?m=o("button.btn.btn-sm",{onclick:()=>Pu(n.id,!0,r)},"Reactivar"):m=o("button.btn.btn-sm.btn-danger",{onclick:()=>Pu(n.id,!1,r)},"Dar de baja"),g===0&&(m=o("div",{style:"display:flex;gap:8px;"},[m,o("button.btn.btn-sm.btn-danger",{onclick:()=>jE(n.id,r)},"Eliminar")]))}return o("div",{},[ge("Nombre",i),o("div.field-grid",{},[ge("Teléfono",s),ge("Precio €/h habitual",c)]),ge("Especialidades",l),ge("Notas",u),m?o("div.field",{},[o("label",{},"Estado"),m]):null,o("div.btn-row",{},f)])})}async function Pu(n,e,t){const r=(q("trabajadores")||[]).slice().map(s=>({...s})),i=r.find(s=>s.id===n);if(i){i.activo=e;try{await Z("trabajadores",r),N(e?"Reactivado":"Dado de baja","ok"),t?.()}catch{N("No se pudo guardar","err")}}}async function jE(n,e){const t=q("trabajadores")||[],r=t.find(s=>s.id===n);if(r&&(r.trabajos||[]).length){N("Tiene trabajos: no se puede eliminar","err");return}const i=t.filter(s=>s.id!==n);try{await Z("trabajadores",i),N("Trabajador eliminado","ok"),e?.()}catch{N("No se pudo guardar","err")}}function cc(n,e,t=null,r=null){const i=!!t;if(i&&t.pagado){N("No se puede editar un trabajo pagado","err");return}ne(`${i?"Editar":"Registrar"} trabajo · ${n.nombre}`,s=>{const c=o("input",{type:"date",value:t?.fecha||X()}),l=o("input",{value:t?.descripcion||"",placeholder:"Descripción"}),u=o("select",{},[o("option",{value:"horas"},"Horas"),o("option",{value:"cuenta"},"A cuenta")]);u.value=t?.tipo||"horas";const h=t?.proyectoId||r||"kifar",f=o("select",{},UE(e,h).map(([W,x])=>o("option",{value:W},x)));f.value=h;const m=o("textarea",{rows:2,placeholder:"Notas"},t?.notas||""),g=o("input",{type:"number",step:"0.25",value:t?.horas??"",placeholder:"Horas"}),_=o("input",{type:"number",step:"0.5",value:t?.precioHora??(n.precioHoraHabitual||""),placeholder:"€/h"}),E=o("input",{type:"number",step:"0.01",value:t?.tipo==="cuenta"&&!t?.unidades?t?.importe??"":"",placeholder:"Importe directo €"}),I=o("input",{type:"number",step:"1",value:t?.unidades??"",placeholder:"Unidades"}),k=o("input",{type:"number",step:"0.01",value:t?.precioUnidad??"",placeholder:"€/unidad"}),V=o("div.field-grid",{},[ge("Horas",g),ge("Precio €/h",_)]),j=o("div",{},[ge("Importe directo",E),o("div.field-grid",{},[ge("Unidades",I),ge("€/unidad",k)])]),U=()=>{V.hidden=u.value!=="horas",j.hidden=u.value!=="cuenta"};u.addEventListener("change",U);const $=async()=>{if(!l.value.trim()){N("Falta la descripción","err");return}const W=u.value;let x=parseFloat(E.value)||0;const A=parseFloat(g.value)||0,y=parseFloat(_.value)||n.precioHoraHabitual||0,w=parseFloat(I.value)||0,T=parseFloat(k.value)||0;if(x||(W==="horas"&&A&&y?x=A*y:W==="cuenta"&&w&&T&&(x=w*T)),!x||x<=0){N("Falta importe (o horas+€/h, o unidades+€/ud)","err");return}const C=f.value.trim()||"kifar",R=(q("trabajadores")||[]).slice().map(ye=>({...ye,trabajos:(ye.trabajos||[]).slice()})),b=R.find(ye=>ye.id===n.id);if(!b){N("Trabajador no encontrado","err");return}if(i){const ye=b.trabajos.findIndex(at=>at.id===t.id);if(ye<0){N("Trabajo no encontrado","err");return}if(b.trabajos[ye].pagado){N("No se puede editar un trabajo pagado","err");return}const Ze={...b.trabajos[ye],fecha:c.value||X(),tipo:W,descripcion:l.value.trim(),importe:x,proyectoId:C,deducible:C!=="personal",notas:m.value.trim()};W==="horas"?(Ze.horas=A||0,Ze.precioHora=y||0,delete Ze.unidades,delete Ze.precioUnidad):(Ze.unidades=w||null,Ze.precioUnidad=T||null,delete Ze.horas,delete Ze.precioHora),b.trabajos[ye]=Ze;try{await Z("trabajadores",R),N("Trabajo actualizado","ok"),s()}catch{N("No se pudo guardar","err")}return}const oe={id:le(),fecha:c.value||X(),tipo:W,descripcion:l.value.trim(),importe:x,proyectoId:C,deducible:C!=="personal",notas:m.value.trim(),pagado:!1,fechaPago:null,formaPago:null,cuentaPago:null};W==="horas"?(oe.horas=A||0,oe.precioHora=y||0):(oe.unidades=w||null,oe.precioUnidad=T||null),b.trabajos.push(oe);try{await Z("trabajadores",R),Tn=null,N(`Trabajo registrado (${D(x)})`,"ok"),s()}catch{N("No se pudo guardar","err")}};return U(),o("div",{},[o("div.field-grid",{},[ge("Fecha",c),ge("Tipo",u)]),ge("Descripción",l),V,j,ge("Proyecto",f),ge("Notas",m),o("div.btn-row",{},[o("button.btn",{onclick:s},"Cancelar"),o("button.btn.btn-primary",{onclick:$},i?"Guardar":"Registrar")])])})}function $E(n,e){ne("Eliminar trabajo",t=>{const r=async()=>{const i=(q("trabajadores")||[]).slice().map(c=>({...c,trabajos:(c.trabajos||[]).slice()})),s=i.find(c=>c.id===n.id);if(!s){N("Trabajador no encontrado","err");return}s.trabajos=s.trabajos.filter(c=>c.id!==e.id);try{await Z("trabajadores",i),N(`Trabajo eliminado${e.pagado?" (el pago NO se devuelve a capital)":""}`,"ok"),t()}catch{N("No se pudo guardar","err")}};return o("div",{},[o("div.hero",{},[o("div.hero-label",{},`${n.nombre} · ${e.fecha||"—"}`),o("div.hero-value",{},D(e.importe)),o("div.hero-sub",{},e.descripcion||"")]),e.pagado?o("div.card",{style:"border-color:var(--red);"},o("div.row-sub",{style:"color:var(--red);font-size:11px;"},"⚠ Este trabajo está PAGADO. Al eliminarlo, el pago NO se devuelve a capital: el saldo no cambia.")):o("div.small.muted",{},"Se eliminará del historial del trabajador."),o("div.btn-row",{},[o("button.btn",{onclick:t},"Cancelar"),o("button.btn.btn-danger",{onclick:r},"Eliminar")])])})}function _p(n){const e=o("div.card");e.append(o("div.card-head",{},o("h3",{},"Historial")));const t=n.trabajadores||[],r=o("select",{},[o("option",{value:""},"Todos"),...t.map(m=>o("option",{value:m.id},m.nombre))]);r.value=je.trabajador;const i=o("select",{},[o("option",{value:"pendientes"},"Pendientes"),o("option",{value:"pagados"},"Pagados"),o("option",{value:"todos"},"Todos")]);i.value=je.estado;const s=o("input",{type:"date",value:je.desde}),c=o("input",{type:"date",value:je.hasta}),l=()=>{je.trabajador=r.value,je.estado=i.value,je.desde=s.value,je.hasta=c.value,BE(e,n)};[r,i,s,c].forEach(m=>m.addEventListener("change",l)),e.append(o("div.field-grid",{},[ge("Trabajador",r),ge("Estado",i)])),e.append(o("div.field-grid",{},[ge("Desde",s),ge("Hasta",c)]));let u=[];for(const m of t)if(!(je.trabajador&&m.id!==je.trabajador))for(const g of m.trabajos||[])je.estado==="pendientes"&&g.pagado||je.estado==="pagados"&&!g.pagado||je.desde&&(g.fecha||"")<je.desde||je.hasta&&(g.fecha||"")>je.hasta||u.push({t:m,j:g});u.sort((m,g)=>(g.j.fecha||"").localeCompare(m.j.fecha||""));const h=u.reduce((m,g)=>m+(Number(g.j.importe)||0),0),f=u.filter(m=>!m.j.pagado).reduce((m,g)=>m+(Number(g.j.importe)||0),0);e.append(o("div.kpis",{},[Eo(String(u.length),"Registros"),Eo(D(h),"Importe"),Eo(D(f),"Pendiente")])),u.length||e.append(o("div.card-empty",{},"Sin resultados"));for(const{t:m,j:g}of u)e.append(zE(m,g,n));return e}function BE(n,e){const t=_p(e);n.replaceWith(t)}function zE(n,e,t){const r=e.tipo==="horas"?`${_e(e.horas||0)} h × ${_e(e.precioHora||0)} €`:e.unidades?`${_e(e.unidades)} × ${_e(e.precioUnidad||0)} €`:"a cuenta";return o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},`${n.nombre} · ${e.descripcion}`),o("div.row-sub",{},`${e.fecha||"—"} · ${r} · ${e.proyectoId}${e.pagado?` · pagado ${e.fechaPago||""} (${e.cuentaPago||""})`:""}`)]),o("div.row-right",{},[o("div.amount"+(e.pagado?"":".pend"),{},D(e.importe)),e.pagado?o("span.chip.ok",{},"pagado"):null,o("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;flex-wrap:wrap;"},[e.pagado?null:o("button.btn.btn-sm.btn-primary",{onclick:()=>qE(n,e)},"Pagar"),e.pagado?null:o("button.btn.btn-sm",{onclick:()=>cc(n,t,e)},"Editar"),o("button.btn.btn-sm.btn-danger",{onclick:()=>$E(n,e)},"Borrar")].filter(Boolean))])])}function qE(n,e,t){ne("Marcar pagado",r=>{const i=Object.keys((q("capital")||{}).cuentas||{});i.includes("revolut")||i.unshift("revolut");const s=o("select",{},i.map(u=>o("option",{value:u},u)));s.value="revolut";const c=o("select",{},["transferencia","efectivo","bizum"].map(u=>o("option",{value:u},u)));c.value="transferencia";const l=async()=>{try{await HE(n.id,e.id,s.value,c.value),N(`Pagado ${D(e.importe)} a ${n.nombre}`,"ok"),r()}catch{N("No se pudo registrar el pago","err")}};return o("div",{},[o("div.hero",{},[o("div.hero-label",{},`${n.nombre} · ${e.descripcion}`),o("div.hero-value",{},D(e.importe))]),o("div.field-grid",{},[ge("Cuenta",s),ge("Forma de pago",c)]),o("div.btn-row",{},[o("button.btn",{onclick:r},"Cancelar"),o("button.btn.btn-primary",{onclick:l},"Confirmar pago")])])})}async function HE(n,e,t,r){const i=X(),s=(q("trabajadores")||[]).map(m=>({...m,trabajos:(m.trabajos||[]).map(g=>({...g}))})),c=s.find(m=>m.id===n),l=c&&c.trabajos.find(m=>m.id===e);if(!l)throw new Error("trabajo no encontrado");if(l.pagado)throw new Error("ya pagado");l.pagado=!0,l.fechaPago=i,l.formaPago=r||"transferencia",l.cuentaPago=t||"revolut",l.importePagado=l.importe;const u=q("capital")||{cuentas:{},historial:[]},h={...u,cuentas:{...u.cuentas||{}},historial:(u.historial||[]).slice()},f=l.cuentaPago;h.cuentas[f]=(h.cuentas[f]||0)-l.importe,h.historial.push({id:le(),tipo:"trabajador",cuenta:f,importe:-l.importe,concepto:`${c.nombre}: ${l.descripcion}`,fechaISO:i}),await pi({trabajadores:s,capital:h})}function ge(n,e){return o("div.field",{},[o("label",{},n),e])}function Eo(n,e){return o("div.kpi",{},[o("div.kpi-v",{},n),o("div.kpi-l",{},e)])}let Pr={modo:"panel",id:null};const Ct={tipo:"",estado:"activos"};function GE(n,e={}){n.append(o("h1.section-title",{},"Trabajos"));const t=o("div");n.append(t);const r={trabajos:null,trabajadores:null,config:null,crm:null,capital:null,cargado:{}},i=()=>{if(Ce(t),Pr.modo==="ficha"){const h=(r.trabajos||[]).find(f=>f.id===Pr.id);h?KE(t,r,h):(Pr={modo:"panel",id:null},ku(t,r))}else ku(t,r)},s=h=>{Pr={modo:"ficha",id:h},i()},c=()=>{Pr={modo:"panel",id:null},i()};r._irFicha=s,r._irPanel=c,r._ctx=e;const l=h=>qe(h,f=>{r[h]=f,r.cargado[h]=!0,i()}),u=[l("trabajos"),l("trabajadores"),l("config"),l("crm"),l("capital")];return i(),()=>u.forEach(h=>h())}function ku(n,e){if(!e.cargado.trabajos||!e.cargado.trabajadores){n.append(o("div.spinner"));return}const t=e.trabajos||[],r=e.trabajadores||[],i=o("div.card");i.append(o("div.card-head",{},[o("h3",{},"Panel"),o("button.link",{onclick:()=>WE(e)},"+ Trabajo")]));const s=o("select",{},[o("option",{value:""},"Todos los tipos"),...On.map(([E,I])=>o("option",{value:E},I))]);s.value=Ct.tipo;const c=o("select",{},[o("option",{value:"activos"},"Activos"),o("option",{value:"cerrados"},"Cerrados"),o("option",{value:"cancelados"},"Cancelados"),o("option",{value:"todos"},"Todos")]);c.value=Ct.estado;const l=()=>{Ct.tipo=s.value,Ct.estado=c.value,e._irPanel()};[s,c].forEach(E=>E.addEventListener("change",l)),i.append(o("div.field-grid",{},[H("Tipo",s),H("Estado",c)])),n.append(i);let u=t.slice();Ct.tipo&&(u=u.filter(E=>E.tipo===Ct.tipo)),Ct.estado==="activos"?u=u.filter(E=>(E.estado||"activo")==="activo"):Ct.estado==="cerrados"?u=u.filter(E=>E.estado==="cerrado"):Ct.estado==="cancelados"&&(u=u.filter(E=>E.estado==="cancelado")),u.sort((E,I)=>(E.fechaEntrega||"9999").localeCompare(I.fechaEntrega||"9999"));const h=o("div.card");if(!u.length){h.append(o("div.card-empty",{},'Sin trabajos con estos filtros. Crea uno con "+ Trabajo".')),n.append(h);return}const f=o("div",{style:"overflow-x:auto;"}),m=o("table.ftable");m.append(o("thead",{},o("tr",{},["Trabajo","Tipo","Cliente","Fase","Entrega","Coste","Ingreso","Bº/Pª","Margen","Cobrado","Pendiente"].map((E,I)=>o("th",{style:I>=5?"text-align:right;":""},E)))));const g=o("tbody"),_={coste:0,ingreso:0,resultado:0,cobrado:0,pendiente:0};for(const E of u){const I=Ss(E,r);_.coste+=I.costeTotal,_.ingreso+=I.ingresoTotal,_.resultado+=I.resultado,_.cobrado+=I.cobrado,_.pendiente+=I.pendienteCobro;const k=E.fechaEntrega?it(E.fechaEntrega):null,V=E.fechaEntrega?o("span",{style:k!=null&&k<0&&E.estado==="activo"?"color:var(--red);":""},E.fechaEntrega):"·",j=o("tr",{style:"cursor:pointer;",onclick:()=>e._irFicha(E.id)},[o("td",{},E.nombre||"(sin nombre)"),o("td",{},Mn(E.tipo)),o("td",{},E.cliente||"·"),o("td",{},nc(E)||"·"),o("td",{},V),o("td",{style:"text-align:right;"},D(I.costeTotal)),o("td",{style:"text-align:right;"},D(I.ingresoTotal)),o("td"+(I.resultado>=0?".pos":".neg"),{style:"text-align:right;"},D(I.resultado)),o("td",{style:"text-align:right;"},`${_e(I.margen,1)}%`),o("td",{style:"text-align:right;"},D(I.cobrado)),o("td",{style:"text-align:right;"},D(I.pendienteCobro))]);g.append(j)}g.append(o("tr",{style:"font-weight:500;border-top:1px solid var(--border2);"},[o("td",{},"TOTAL"),o("td",{},""),o("td",{},""),o("td",{},""),o("td",{},""),o("td",{style:"text-align:right;"},D(_.coste)),o("td",{style:"text-align:right;"},D(_.ingreso)),o("td"+(_.resultado>=0?".pos":".neg"),{style:"text-align:right;"},D(_.resultado)),o("td",{},""),o("td",{style:"text-align:right;"},D(_.cobrado)),o("td",{style:"text-align:right;"},D(_.pendiente))])),m.append(g),f.append(m),h.append(f),h.append(o("div.small.muted",{style:"margin-top:8px;"},`${u.length} trabajo${u.length===1?"":"s"} · toca una fila para abrir la ficha`)),n.append(h)}function WE(n){ne("Nuevo trabajo",e=>{const t=n.config||{},r=o("input",{placeholder:"p. ej. Camper Terro",autofocus:!0}),i=o("select",{},On.map(([U,$])=>o("option",{value:U},$))),s=o("input",{placeholder:"Cliente"}),c=o("input",{placeholder:"Contacto (opcional)"}),l=o("input",{placeholder:"Vehículo / descripción"}),u=o("input",{type:"date",value:X()}),h=o("input",{type:"date"}),f=o("input",{type:"number",step:"0.01",placeholder:"Ingreso presupuestado €"});let m=null;const g=(n.crm?.presupuestos||[]).filter(U=>U.estado==="aceptado"),_=new Set((n.trabajos||[]).map(U=>U.presupuestoId).filter(Boolean)),E=g.filter(U=>!_.has(U.id)),I=n.crm?.clientes||[],k=U=>I.find($=>$.id===U)?.nombre||"";let V=null;if(E.length){const U=o("select",{},[o("option",{value:""},"— ninguno (trabajo en blanco) —"),...E.map($=>o("option",{value:$.id},`${$.concepto||"(sin concepto)"} · ${D($.total||0)}`))]);U.addEventListener("change",()=>{const $=E.find(W=>W.id===U.value);m=$?$.id:null,$&&(r.value||(r.value=$.concepto||""),l.value||(l.value=$.concepto||""),s.value||(s.value=k($.clienteId)),f.value||(f.value=$.total||""))}),V=H("Crear desde presupuesto",U)}const j=async()=>{if(!r.value.trim()){N("Falta el nombre","err");return}const U=i.value,$={id:le(),nombre:r.value.trim(),tipo:U,cliente:s.value.trim(),contacto:c.value.trim(),descripcion:l.value.trim(),fechaInicio:u.value||X(),fechaEntrega:h.value||"",estado:"activo",presupuestoId:m||null,ingresoPresupuestado:parseFloat(f.value)||0,extras:[],fases:ap(t,U),tareas:[],materiales:[],otrosGastos:[],cobros:[],notas:[]},W=(q("trabajos")||[]).slice();W.push($);try{await Z("trabajos",W),N(`Trabajo "${$.nombre}" creado`,"ok"),e(),n._irFicha($.id)}catch{N("No se pudo guardar","err")}};return o("div",{},[V,H("Nombre",r),o("div.field-grid",{},[H("Tipo",i),H("Cliente",s)]),H("Contacto",c),H("Descripción",l),o("div.field-grid",{},[H("Fecha inicio",u),H("Fecha entrega",h)]),H("Ingreso presupuestado €",f),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:j},"Crear")])].filter(Boolean))})}function KE(n,e,t){const r=e.trabajadores||[],i=Ss(t,r);n.append(o("div.btn-row",{style:"margin-top:0;margin-bottom:10px;"},[o("button.btn.btn-sm",{onclick:()=>e._irPanel()},"‹ Panel")]));const s=t.estado==="cerrado"||t.estado==="cancelado",c=o("div.card");c.append(o("div.card-head",{},[o("h3",{},t.nombre||"(sin nombre)"),o("div",{style:"display:flex;gap:6px;align-items:center;"},[o("span.chip",{},Mn(t.tipo)),s?o("span.chip",{},t.estado):null].filter(Boolean))])),c.append(o("div.row-sub",{style:"font-size:11px;"},[t.cliente?`Cliente: ${t.cliente}`:"Sin cliente",t.contacto?` · ${t.contacto}`:"",t.descripcion?` · ${t.descripcion}`:""].join(""))),c.append(o("div.small.muted",{style:"margin-top:4px;"},`${t.fechaInicio||"—"} → ${t.fechaEntrega||"—"} · fase actual: ${nc(t)||"—"}`)),c.append(o("div.btn-row",{},[o("button.btn.btn-sm",{onclick:()=>YE(t)},"Editar datos"),t.estado==="activo"?o("button.btn.btn-sm.btn-danger",{onclick:()=>JE(t,i)},"Cerrar trabajo"):o("button.btn.btn-sm",{onclick:()=>XE(t)},"Reabrir")])),n.append(c),n.append(QE(i)),n.append(ZE(t)),n.append(rw(t)),n.append(yp(t)),n.append(ow(t)),n.append(aw(t,e,r)),n.append(lw(t)),n.append(dw(t)),n.append(vw(t))}function QE(n){const e=o("div.card");return e.append(o("div.card-head",{},o("h3",{},"Resumen económico"))),e.append(o("div.kpis",{},[kt(D(n.ingresoTotal),"Ingreso"),kt(D(n.costeTotal),"Coste"),kt(D(n.resultado),"Resultado")])),e.append(o("div.kpis",{},[kt(`${_e(n.margen,1)}%`,"Margen"),kt(D(n.cobrado),"Cobrado"),kt(D(n.pendienteCobro),"Pendiente")])),e.append(o("div.small.muted",{style:"margin-top:6px;"},`Materiales ${D(n.costeMateriales)} · Mano de obra ${D(n.costeManoObra)} · Otros ${D(n.costeOtros)}`)),e}function lc(){return(q("trabajos")||[]).map(n=>({...n,extras:(n.extras||[]).slice(),fases:(n.fases||[]).slice(),tareas:(n.tareas||[]).slice(),materiales:(n.materiales||[]).slice(),otrosGastos:(n.otrosGastos||[]).slice(),cobros:(n.cobros||[]).slice(),notas:(n.notas||[]).slice()}))}async function Se(n,e,t){const r=lc(),i=r.find(s=>s.id===n);if(!i){N("Trabajo no encontrado","err");return}e(i);try{await Z("trabajos",r),t&&N(t,"ok")}catch{N("No se pudo guardar","err")}}function YE(n){ne(`Editar · ${n.nombre}`,e=>{const t=o("input",{value:n.nombre||""}),r=o("input",{value:n.cliente||""}),i=o("input",{value:n.contacto||""}),s=o("input",{value:n.descripcion||""}),c=o("input",{type:"date",value:n.fechaInicio||""}),l=o("input",{type:"date",value:n.fechaEntrega||""}),u=o("input",{type:"number",step:"0.01",value:n.ingresoPresupuestado??0}),h=async()=>{if(!t.value.trim()){N("Falta el nombre","err");return}await Se(n.id,f=>{f.nombre=t.value.trim(),f.cliente=r.value.trim(),f.contacto=i.value.trim(),f.descripcion=s.value.trim(),f.fechaInicio=c.value||"",f.fechaEntrega=l.value||"",f.ingresoPresupuestado=parseFloat(u.value)||0},"Guardado"),e()};return o("div",{},[H("Nombre",t),H("Cliente",r),H("Contacto",i),H("Descripción",s),o("div.field-grid",{},[H("Fecha inicio",c),H("Fecha entrega",l)]),H("Ingreso presupuestado €",u),o("div.small.muted",{},`Tipo: ${Mn(n.tipo)} (no editable — cambiaría la plantilla de fases).`),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:h},"Guardar")])])})}function JE(n,e){ne("Cerrar trabajo",t=>o("div",{},[o("div.hero",{},[o("div.hero-label",{},n.nombre),o("div.hero-value",{},D(e.resultado)),o("div.hero-sub",{},`margen ${_e(e.margen,1)}%`)]),e.pendienteCobro>.005?o("div.card",{style:"border-color:var(--gold);"},o("div.row-sub",{style:"color:var(--gold);font-size:11px;"},`⚠ Queda pendiente de cobro ${D(e.pendienteCobro)}. ¿Cerrar igualmente?`)):o("div.small.muted",{},"El trabajo pasará a estado cerrado."),o("div.btn-row",{},[o("button.btn",{onclick:t},"Cancelar"),o("button.btn.btn-danger",{onclick:async()=>{await Se(n.id,r=>{r.estado="cerrado"},"Trabajo cerrado"),t()}},"Cerrar trabajo")])]))}async function XE(n){await Se(n.id,e=>{e.estado="activo"},"Trabajo reabierto")}function ZE(n){const e=o("div.card");e.append(o("div.card-head",{},[o("h3",{},"Fases"),o("div",{style:"display:flex;gap:12px;align-items:center;"},[o("button.link",{onclick:()=>tw(n)},"+ Fase"),o("button.link",{onclick:()=>ew(n)},"Avanzar →")])]));const t=n.fases||[];if(!t.length)return e.append(o("div.card-empty",{},'Sin fases. Añade una con "+ Fase".')),e;const r=i=>s=>{s.stopPropagation(),i()};return t.forEach((i,s)=>{const c=i.estado==="Completada"?".ok":i.estado==="En curso"?".pend":"";e.append(o("div.row",{style:"cursor:pointer;",onclick:()=>nw(n,s)},[o("div.row-main",{},[o("div.row-label",{},`${s+1}. ${i.nombre}`),o("div.row-sub",{},[i.fechaPrevista?`prev. ${i.fechaPrevista}`:"",i.fechaFin?` · fin ${i.fechaFin}`:"",i.notas?` · ${i.notas}`:""].join("")||"sin fechas")]),o("div.row-right",{style:"display:flex;gap:6px;align-items:center;"},[o("div",{style:"display:flex;flex-direction:column;gap:2px;"},[o("button.btn.btn-sm",{disabled:s===0,title:"Subir",onclick:r(()=>Nu(n,s,-1))},"↑"),o("button.btn.btn-sm",{disabled:s===t.length-1,title:"Bajar",onclick:r(()=>Nu(n,s,1))},"↓")]),o("span.chip"+(c||""),{},i.estado)])]))}),e}async function ew(n){await Se(n.id,e=>{const t=e.fases||[];let r=t.findIndex(i=>i.estado==="En curso");if(r<0&&(r=t.findIndex(i=>i.estado!=="Completada")),r<0){N("Todas las fases están completadas","ok");return}t[r]={...t[r],estado:"Completada",fechaFin:t[r].fechaFin||X()},t[r+1]&&(t[r+1]={...t[r+1],estado:"En curso"})},"Fase avanzada")}async function Nu(n,e,t){const r=e+t;await Se(n.id,i=>{r<0||r>=i.fases.length||([i.fases[e],i.fases[r]]=[i.fases[r],i.fases[e]])},"Fases reordenadas")}function tw(n){ne("Nueva fase",e=>{const t=o("input",{placeholder:"Nombre de la fase",autofocus:!0}),r=o("select",{},lp.map(s=>o("option",{value:s},s))),i=async()=>{if(!t.value.trim()){N("Falta el nombre","err");return}await Se(n.id,s=>{s.fases.push({nombre:t.value.trim(),estado:r.value,fechaPrevista:"",fechaFin:"",notas:""})},"Fase añadida"),e()};return o("div",{},[H("Nombre",t),H("Estado",r),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:i},"Añadir")])])})}function nw(n,e){const t=(n.fases||[])[e];t&&ne(`Fase · ${t.nombre}`,r=>{const i=o("input",{value:t.nombre||""}),s=o("select",{},lp.map(m=>o("option",{value:m},m)));s.value=t.estado||"Pendiente";const c=o("input",{type:"date",value:t.fechaPrevista||""}),l=o("input",{type:"date",value:t.fechaFin||""}),u=o("textarea",{rows:2,placeholder:"Notas"},t.notas||""),h=async()=>{const m=i.value.trim();if(!m){N("Falta el nombre","err");return}await Se(n.id,g=>{const _=g.fases[e]?.nombre;g.fases[e]={...g.fases[e],nombre:m,estado:s.value,fechaPrevista:c.value||"",fechaFin:l.value||"",notas:u.value.trim()},_&&_!==m&&(g.tareas=g.tareas.map(E=>E.fase===_?{...E,fase:m}:E))},"Fase actualizada"),r()},f=async()=>{const m=t.nombre,g=(n.tareas||[]).filter(_=>_.fase===m).length;await Se(n.id,_=>{_.fases=_.fases.filter((E,I)=>I!==e),_.tareas=_.tareas.map(E=>E.fase===m?{...E,fase:""}:E)}),N(g?`Fase eliminada · ${g} tarea${g===1?"":"s"} sin fase`:"Fase eliminada","ok"),r()};return o("div",{},[H("Nombre",i),H("Estado",s),o("div.field-grid",{},[H("Fecha prevista",c),H("Fecha fin",l)]),H("Notas",u),o("div.btn-row",{},[o("button.btn",{onclick:r},"Cancelar"),o("button.btn.btn-danger",{onclick:f},"Eliminar"),o("button.btn.btn-primary",{onclick:h},"Guardar")])])})}function rw(n){const e=o("div.card");e.append(o("div.card-head",{},[o("h3",{},"Extras"),o("button.link",{onclick:()=>iw(n)},"+ Extra")]));const t=n.extras||[];if(!t.length)return e.append(o("div.card-empty",{},"Sin trabajos extra")),e;for(const r of t)e.append(o("div.row",{},[o("div.row-main",{},o("div.row-label",{},r.concepto||"(sin concepto)")),o("div.row-right",{},[o("div.amount.pos",{},"+"+D(r.importe)),o("button.btn.btn-sm.btn-danger",{style:"margin-top:4px;",onclick:()=>Se(n.id,i=>{i.extras=i.extras.filter(s=>s.id!==r.id)},"Extra eliminado")},"Borrar")])]));return e}function iw(n){ne("Nuevo extra",e=>{const t=o("input",{placeholder:"Concepto",autofocus:!0}),r=o("input",{type:"number",step:"0.01",placeholder:"Importe €"}),i=async()=>{const s=parseFloat(r.value)||0;if(!t.value.trim()||!s){N("Falta concepto o importe","err");return}await Se(n.id,c=>{c.extras.push({id:le(),concepto:t.value.trim(),importe:s})},"Extra añadido"),e()};return o("div",{},[H("Concepto",t),H("Importe €",r),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:i},"Añadir")])])})}const qt={fase:"",estado:""};function yp(n){const e=o("div.card");e.append(o("div.card-head",{},[o("h3",{},"Tareas"),o("button.link",{onclick:()=>Du(n)},"+ Tarea")]));const t=n.tareas||[],r=(n.fases||[]).map(u=>u.nombre),i=o("select",{},[o("option",{value:""},"Todas las fases"),...r.map(u=>o("option",{value:u},u))]);i.value=qt.fase;const s=o("select",{},[o("option",{value:""},"Todos"),...up.map(u=>o("option",{value:u},u))]);s.value=qt.estado;const c=()=>{qt.fase=i.value,qt.estado=s.value;const u=yp((q("trabajos")||[]).find(h=>h.id===n.id)||n);e.replaceWith(u)};[i,s].forEach(u=>u.addEventListener("change",c)),t.length&&e.append(o("div.field-grid",{},[H("Fase",i),H("Estado",s)]));let l=t.slice();if(qt.fase&&(l=l.filter(u=>u.fase===qt.fase)),qt.estado&&(l=l.filter(u=>u.estado===qt.estado)),l.sort((u,h)=>(u.fechaLimite||"9999").localeCompare(h.fechaLimite||"9999")),!l.length)return e.append(o("div.card-empty",{},t.length?"Sin tareas con estos filtros":"Sin tareas")),e;for(const u of l){const h=u.fechaLimite?it(u.fechaLimite):null,f=u.estado==="Hecha"?o("span.chip.ok",{},"hecha"):u.estado==="En curso"?o("span.chip.pend",{},"en curso"):o("span.chip",{},"pendiente");e.append(o("div.row",{style:"cursor:pointer;",onclick:()=>Du(n,u)},[o("div.row-main",{},[o("div.row-label",{},u.titulo||"(sin título)"),o("div.row-sub",{},[u.fase||"sin fase",u.responsable?` · ${u.responsable}`:"",u.fechaLimite?` · ${u.fechaLimite}${h!=null&&h<0&&u.estado!=="Hecha"?" (vencida)":""}`:""].join(""))]),o("div.row-right",{},f)]))}return e}function Du(n,e=null){const t=!!e;ne(t?"Editar tarea":"Nueva tarea",r=>{const i=o("input",{value:e?.titulo||"",placeholder:"Título",autofocus:!0}),s=(n.fases||[]).map(E=>E.nombre),c=o("select",{},[o("option",{value:""},"— sin fase —"),...s.map(E=>o("option",{value:E},E))]);c.value=e?.fase||"";const l="resp-"+le(),u=o("datalist",{id:l},sw().map(E=>o("option",{value:E}))),h=o("input",{value:e?.responsable||"Rubén",list:l,placeholder:"Responsable"}),f=o("select",{},up.map(E=>o("option",{value:E},E)));f.value=e?.estado||"Pendiente";const m=o("input",{type:"date",value:e?.fechaLimite||""}),g=o("textarea",{rows:2,placeholder:"Notas"},e?.notas||""),_=async()=>{if(!i.value.trim()){N("Falta el título","err");return}await Se(n.id,E=>{const I={id:e?.id||le(),fase:c.value,titulo:i.value.trim(),responsable:h.value.trim(),estado:f.value,fechaLimite:m.value||"",notas:g.value.trim()};if(t){const k=E.tareas.findIndex(V=>V.id===I.id);k>=0?E.tareas[k]=I:E.tareas.push(I)}else E.tareas.push(I)},t?"Tarea actualizada":"Tarea creada"),r()};return o("div",{},[H("Título",i),o("div.field-grid",{},[H("Fase",c),H("Estado",f)]),o("div.field-grid",{},[H("Responsable",h),H("Fecha límite",m)]),u,H("Notas",g),o("div.btn-row",{},[o("button.btn",{onclick:r},"Cancelar"),t?o("button.btn.btn-danger",{onclick:async()=>{await Se(n.id,E=>{E.tareas=E.tareas.filter(I=>I.id!==e.id)},"Tarea eliminada"),r()}},"Eliminar"):null,o("button.btn.btn-primary",{onclick:_},t?"Guardar":"Crear")].filter(Boolean))])})}function sw(){const n=["Rubén"];for(const e of q("trabajadores")||[]){if(e.activo===!1)continue;const t=(e.nombre||"").trim();t&&!n.includes(t)&&n.push(t)}return n}function ow(n){const e=o("div.card");e.append(o("div.card-head",{},[o("h3",{},"Materiales"),o("button.link",{onclick:()=>Vu(n)},"+ Material")]));const t=n.materiales||[];if(!t.length)return e.append(o("div.card-empty",{},"Sin materiales")),e;for(const r of t){const i=r.costeReal??r.costeEstimado??0,s=r.estadoCompra==="Recibido"?o("span.chip.ok",{},"recibido"):r.estadoCompra==="Pedido"?o("span.chip.pend",{},"pedido"):o("span.chip",{},"pendiente");e.append(o("div.row",{style:"cursor:pointer;",onclick:()=>Vu(n,r)},[o("div.row-main",{},[o("div.row-label",{},[r.nombre||"(sin nombre)",r.cantidad?` · ${_e(r.cantidad)}`:""].join("")),o("div.row-sub",{},[r.costeReal!=null?`real ${D(r.costeReal)}`:r.costeEstimado!=null?`est. ${D(r.costeEstimado)}`:"sin coste",r.costeReal!=null&&r.costeEstimado!=null?` (est. ${D(r.costeEstimado)})`:"",r.proveedor?` · ${r.proveedor}`:""].join(""))]),o("div.row-right",{},[o("div.amount",{},D(i)),s])]))}return e}function Vu(n,e=null){const t=!!e;ne(t?"Editar material":"Nuevo material",r=>{const i=o("input",{value:e?.nombre||"",placeholder:"Nombre",autofocus:!0}),s=o("input",{type:"number",step:"0.01",value:e?.cantidad??"",placeholder:"Cantidad"}),c=o("select",{},hE.map(m=>o("option",{value:m},m)));c.value=e?.estadoCompra||"Pendiente";const l=o("input",{type:"number",step:"0.01",value:e?.costeEstimado??"",placeholder:"Coste estimado €"}),u=o("input",{type:"number",step:"0.01",value:e?.costeReal??"",placeholder:"Coste real €"}),h=o("input",{value:e?.proveedor||"",placeholder:"Proveedor"}),f=async()=>{if(!i.value.trim()){N("Falta el nombre","err");return}await Se(n.id,m=>{const g={id:e?.id||le(),nombre:i.value.trim(),cantidad:s.value===""?null:parseFloat(s.value),estadoCompra:c.value,costeEstimado:l.value===""?null:parseFloat(l.value),costeReal:u.value===""?null:parseFloat(u.value),proveedor:h.value.trim()};if(t){const _=m.materiales.findIndex(E=>E.id===g.id);_>=0?m.materiales[_]=g:m.materiales.push(g)}else m.materiales.push(g)},t?"Material actualizado":"Material añadido"),r()};return o("div",{},[H("Nombre",i),o("div.field-grid",{},[H("Cantidad",s),H("Estado de compra",c)]),o("div.field-grid",{},[H("Coste estimado €",l),H("Coste real €",u)]),H("Proveedor",h),o("div.btn-row",{},[o("button.btn",{onclick:r},"Cancelar"),t?o("button.btn.btn-danger",{onclick:async()=>{await Se(n.id,m=>{m.materiales=m.materiales.filter(g=>g.id!==e.id)},"Material eliminado"),r()}},"Eliminar"):null,o("button.btn.btn-primary",{onclick:f},t?"Guardar":"Añadir")].filter(Boolean))])})}function aw(n,e,t){const r=o("div.card");r.append(o("div.card-head",{},[o("h3",{},"Horas de trabajadores"),o("button.link",{onclick:()=>cw(e,n)},"+ Horas")]));const i=cp(t,n.id);if(!i.length)return r.append(o("div.card-empty",{},"Sin horas imputadas. Regístralas en Equipo → + Horas.")),r;const s=i.reduce((l,u)=>l+u.importe,0),c=i.reduce((l,u)=>l+(Number(u.horas)||0),0);r.append(o("div.kpis",{},[kt(String(i.length),"Apuntes"),kt(_e(c)+" h","Horas"),kt(D(s),"Coste MO")]));for(const l of i)r.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},`${l.trabajador} · ${l.descripcion||""}`),o("div.row-sub",{},`${l.fecha||"—"}${l.horas!=null?` · ${_e(l.horas)} h`:""}${l.pagado?" · pagado":""}`)]),o("div.row-right",{},o("div.amount",{},D(l.importe)))]));return r}function cw(n,e){ME(e.id,e.nombre),n._ctx?.nav?n._ctx.nav("equipo"):N("Ve a Equipo para imputar las horas","")}function lw(n){const e=o("div.card");e.append(o("div.card-head",{},[o("h3",{},"Otros gastos"),o("button.link",{onclick:()=>uw(n)},"+ Gasto")]));const t=n.otrosGastos||[];if(!t.length)return e.append(o("div.card-empty",{},"Sin otros gastos")),e;for(const r of t)e.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},r.concepto||"(sin concepto)"),o("div.row-sub",{},r.fecha||"—")]),o("div.row-right",{},[o("div.amount",{},D(r.importe)),o("button.btn.btn-sm.btn-danger",{style:"margin-top:4px;",onclick:()=>Se(n.id,i=>{i.otrosGastos=i.otrosGastos.filter(s=>s.id!==r.id)},"Gasto eliminado")},"Borrar")])]));return e}function uw(n){ne("Nuevo gasto",e=>{const t=o("input",{type:"date",value:X()}),r=o("input",{placeholder:"Concepto",autofocus:!0}),i=o("input",{type:"number",step:"0.01",placeholder:"Importe €"}),s=async()=>{const c=parseFloat(i.value)||0;if(!r.value.trim()||!c){N("Falta concepto o importe","err");return}await Se(n.id,l=>{l.otrosGastos.push({id:le(),fecha:t.value||X(),concepto:r.value.trim(),importe:c})},"Gasto añadido"),e()};return o("div",{},[o("div.field-grid",{},[H("Fecha",t),H("Importe €",i)]),H("Concepto",r),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:s},"Añadir")])])})}function dw(n,e){const t=o("div.card");t.append(o("div.card-head",{},[o("h3",{},"Cobros del cliente"),o("button.link",{onclick:()=>pw(n)},"+ Cobro")]));const r=(n.cobros||[]).slice().sort((i,s)=>(s.fecha||"").localeCompare(i.fecha||""));if(!r.length)return t.append(o("div.card-empty",{},"Sin cobros registrados")),t;for(const i of r)t.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},i.concepto||"Cobro"),o("div.row-sub",{},`${i.fecha||"—"} · ${i.cuenta||"revolut"}`)]),o("div.row-right",{},[o("div.amount.pos",{},"+"+D(i.importe)),o("button.btn.btn-sm.btn-danger",{style:"margin-top:4px;",onclick:()=>fw(n,i)},"Borrar")])]));return t}function hw(){const n=Object.keys((q("capital")||{}).cuentas||{});return n.includes("revolut")||n.unshift("revolut"),n}function pw(n){ne("Registrar cobro",e=>{const t=o("input",{type:"date",value:X()}),r=o("input",{placeholder:"Concepto (p. ej. anticipo)",autofocus:!0}),i=o("input",{type:"number",step:"0.01",placeholder:"Importe €"}),s=o("select",{},hw().map(l=>o("option",{value:l},l)));s.value="revolut";const c=async()=>{const l=parseFloat(i.value)||0;if(!l||l<=0){N("Falta el importe","err");return}try{await mw(n,{fecha:t.value||X(),concepto:r.value.trim()||"Cobro",importe:l,cuenta:s.value}),N(`Cobro ${D(l)} · capital +${D(l)}`,"ok"),e()}catch{N("No se pudo registrar el cobro","err")}};return o("div",{},[o("div.field-grid",{},[H("Fecha",t),H("Importe €",i)]),H("Concepto",r),H("Cuenta",s),o("div.small.muted",{},"El cobro suma al capital de la cuenta y queda en el historial (atómico)."),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:c},"Registrar")])])})}function fw(n,e){ne("Eliminar cobro",t=>o("div",{},[o("div.hero",{},[o("div.hero-label",{},e.concepto||"Cobro"),o("div.hero-value",{},D(e.importe)),o("div.hero-sub",{},`${e.fecha||"—"} · ${e.cuenta||"revolut"}`)]),o("div.small.muted",{},`Se revertirá el capital: ${e.cuenta||"revolut"} −${D(e.importe)}.`),o("div.btn-row",{},[o("button.btn",{onclick:t},"Cancelar"),o("button.btn.btn-danger",{onclick:async()=>{try{await gw(n,e),N("Cobro eliminado y capital revertido","ok"),t()}catch{N("No se pudo eliminar","err")}}},"Eliminar")])]))}async function mw(n,{fecha:e,concepto:t,importe:r,cuenta:i}){const s=lc(),c=s.find(h=>h.id===n.id);if(!c)throw new Error("trabajo no encontrado");c.cobros.push({id:le(),fecha:e,concepto:t,importe:r,cuenta:i});const l=q("capital")||{cuentas:{},historial:[]},u={...l,cuentas:{...l.cuentas||{}},historial:(l.historial||[]).slice()};u.cuentas[i]=(u.cuentas[i]||0)+r,u.historial.push({id:le(),tipo:"cobro_trabajo",cuenta:i,importe:+r,concepto:`Cobro ${c.nombre}: ${t}`,fechaISO:e}),await pi({trabajos:s,capital:u})}async function gw(n,e){const t=lc(),r=t.find(c=>c.id===n.id);if(!r)throw new Error("trabajo no encontrado");r.cobros=r.cobros.filter(c=>c.id!==e.id);const i=q("capital")||{cuentas:{},historial:[]},s={...i,cuentas:{...i.cuentas||{}},historial:(i.historial||[]).slice()};s.cuentas[e.cuenta]=(s.cuentas[e.cuenta]||0)-e.importe,s.historial.push({id:le(),tipo:"reverso_cobro_trabajo",cuenta:e.cuenta,importe:-e.importe,concepto:`Reverso cobro ${r.nombre}: ${e.concepto||""}`,fechaISO:X()}),await pi({trabajos:t,capital:s})}function vw(n){const e=o("div.card");e.append(o("div.card-head",{},[o("h3",{},"Notas e incidencias"),o("button.link",{onclick:()=>_w(n)},"+ Nota")]));const t=(n.notas||[]).slice().sort((r,i)=>(i.fecha||"").localeCompare(r.fecha||""));if(!t.length)return e.append(o("div.card-empty",{},"Sin notas")),e;for(const r of t)e.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},r.texto||""),o("div.row-sub",{},r.fecha||"—")]),o("div.row-right",{},[r.impactoEstimado?o("div.amount"+(Number(r.impactoEstimado)>=0?".pos":".neg"),{},D(r.impactoEstimado)):o("span.small.muted",{},"—"),o("button.btn.btn-sm.btn-danger",{style:"margin-top:4px;",onclick:()=>Se(n.id,i=>{i.notas=i.notas.filter(s=>s.id!==r.id)},"Nota eliminada")},"Borrar")])]));return e}function _w(n){ne("Nueva nota",e=>{const t=o("input",{type:"date",value:X()}),r=o("textarea",{rows:3,placeholder:"Nota o incidencia",autofocus:!0}),i=o("input",{type:"number",step:"0.01",placeholder:"Impacto € estimado (opcional)"}),s=async()=>{if(!r.value.trim()){N("Falta el texto","err");return}await Se(n.id,c=>{c.notas.push({id:le(),fecha:t.value||X(),texto:r.value.trim(),impactoEstimado:i.value===""?null:parseFloat(i.value)})},"Nota añadida"),e()};return o("div",{},[o("div.field-grid",{},[H("Fecha",t),H("Impacto € estimado",i)]),H("Texto",r),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:s},"Añadir")])])})}function H(n,e){return o("div.field",{},[o("label",{},n),e])}function kt(n,e){return o("div.kpi",{},[o("div.kpi-v",{},n),o("div.kpi-l",{},e)])}const cr={materiales:[{id:"melamina12",nombre:"Melamina 12mm",precioM2:18,grosor:12},{id:"melamina16",nombre:"Melamina 16mm",precioM2:22,grosor:16},{id:"melamina19",nombre:"Melamina 19mm",precioM2:26,grosor:19},{id:"mdf16",nombre:"MDF 16mm",precioM2:20,grosor:16},{id:"metacrilato",nombre:"Metacrilato 3mm",precioM2:45,grosor:3},{id:"contrachapado",nombre:"Contrachapado 15mm",precioM2:24,grosor:15}],herrajes:[{id:"bisagra",nombre:"Bisagra",precioUd:2.5},{id:"correderaS",nombre:"Corredera suave",precioUd:8},{id:"correderaN",nombre:"Corredera normal",precioUd:4},{id:"tirador",nombre:"Tirador",precioUd:3.5},{id:"pata",nombre:"Pata regulable",precioUd:1.5},{id:"tornillo",nombre:"Tornillo (100ud)",precioUd:3}]},ta={tarifaVentaMO:40,margenMateriales:.2,iva:.21},Rt=n=>Math.round((Number(n)||0)*100)/100;function Vs(n){return{...ta,...n&&n.params||{}}}function uc(n){const e=n||{};return{materiales:Array.isArray(e.materiales)&&e.materiales.length?e.materiales:cr.materiales,herrajes:Array.isArray(e.herrajes)&&e.herrajes.length?e.herrajes:cr.herrajes,params:Vs(n)}}function yw(n,e){if(!e)return null;const t=String(e).toLowerCase();return n.find(r=>r.id===e||r.nombre&&r.nombre.toLowerCase().includes(t))||null}function bw(n,e,t=[],r=[],i=0,s={}){const c=uc(n),l={tarifaVentaMO:s.tarifaVentaMO!=null?Number(s.tarifaVentaMO):c.params.tarifaVentaMO,margenMateriales:s.margenMateriales!=null?Number(s.margenMateriales):c.params.margenMateriales,iva:c.params.iva},u=1+Number(l.margenMateriales||0),h=[],f=(I,k,V)=>{const j=yw(k,I.material||I.materialId||I.herraje||I.herrajeId||I.nombre),U=Number(I.cantidad??I.cant??1)||0;let $,W,x,A;if(I.coste!=null)$=Number(I.coste),W=I.unidad||"ud",x=null,A=I.nombre||I.desc||"Línea";else if(j&&j.precioM2!=null&&I.ancho!=null&&I.alto!=null)$=Number(I.ancho)*Number(I.alto)*U*j.precioM2,W="m²",x=j.precioM2,A=`${j.nombre} ${I.ancho}×${I.alto}m × ${U}ud`;else if(j&&j.precioUd!=null)$=U*j.precioUd,W="ud",x=j.precioUd,A=`${j.nombre} × ${U}ud`;else if(I.precioUd!=null)$=U*Number(I.precioUd),W=I.unidad||"ud",x=Number(I.precioUd),A=`${I.nombre||"Material"}${U?` × ${U}ud`:""}`;else{h.push({tipo:V,desc:`⚠ No encontrado: ${I.material||I.herraje||I.nombre||"?"}`,cant:0,unidad:"ud",precioUd:0,coste:0,precioCliente:0});return}const y=I.precioCliente!=null?Number(I.precioCliente):$*u;h.push({tipo:I.tipo||V,desc:A,cant:U,unidad:W,precioUd:x!=null?Rt(x):null,coste:Rt($),precioCliente:Rt(y)})};for(const I of t)f(I,c.materiales,"material");for(const I of r)f(I,c.herrajes,"herraje");const m=Number(i||0);if(m>0){const I=m*l.tarifaVentaMO;h.push({tipo:"manoObra",desc:`Mano de obra (${m}h × ${l.tarifaVentaMO}€/h)`,cant:m,unidad:"h",precioUd:Rt(l.tarifaVentaMO),coste:Rt(I),precioCliente:Rt(I)})}const g=Rt(h.reduce((I,k)=>I+(Number(k.precioCliente)||0),0)),_=Rt(g*l.iva),E=Rt(g+_);return{tipo:e||null,lineas:h,baseImponible:g,iva:_,total:E,paramsUsados:l}}const Ew=n=>{const e=it(n);return e==null?null:-e};function ww(n,e){if(!e.cargado.crm){n.append(o("div.spinner"));return}const{leads:t}=wt(e.crm),r=o("div.card");r.append(o("div.card-head",{},[o("h3",{},"Pipeline"),o("button.link",{onclick:()=>bp()},"+ Lead")])),r.append(o("div.small.muted",{},`${t.length} lead${t.length===1?"":"s"} · mueve con ‹ › o cambia el estado en la tarjeta`)),n.append(r);const i=Ns.map(([u,h])=>({id:u,label:h,leads:[]})),s={id:"__otros",label:"Otros",leads:[]};for(const u of t)(i.find(f=>f.id===(u.estado||"nuevo"))||s).leads.push(u);const c=s.leads.length?[...i,s]:i,l=o("div",{style:"display:flex;gap:10px;overflow-x:auto;padding-bottom:8px;align-items:flex-start;"});for(const u of c){const h=o("div",{style:"flex:0 0 220px;min-width:220px;"});h.append(o("div.small",{style:"text-transform:uppercase;letter-spacing:1px;color:var(--text3);margin-bottom:6px;padding:0 2px;"},`${u.label} · ${u.leads.length}`)),u.leads.length||h.append(o("div.card",{style:"opacity:.5;"},o("div.card-empty",{},"—"))),u.leads.slice().sort((f,m)=>(m.creado||"").localeCompare(f.creado||"")).forEach(f=>h.append(Iw(f,u.id,e))),l.append(h)}n.append(l)}function Iw(n,e,t){const r=Ew(n.creado),i=n.estado==="nuevo"&&r!=null&&r>pp,s=o("div.card",{style:"margin-bottom:8px;padding:10px;cursor:pointer;"+(i?"border-color:var(--gold);":"")});s.addEventListener("click",()=>bp(t,n)),s.append(o("div.row-label",{},n.nombre||"(sin nombre)")),s.append(o("div.row-sub",{style:"margin-top:2px;"},[o("span.chip",{},ln(n)),n.origen?o("span.chip",{style:"margin-left:4px;"},n.origen):null].filter(Boolean))),r!=null&&s.append(o("div.small"+(i?"":".muted"),{style:"margin-top:4px;"+(i?"color:var(--gold);":"")},`${r}d desde alta${i?" · sin contactar":""}`));const c=h=>f=>{f.stopPropagation(),h()},l=Br.indexOf(n.estado),u=o("div",{style:"display:flex;gap:4px;align-items:center;margin-top:8px;flex-wrap:wrap;"},[o("button.btn.btn-sm",{disabled:l<=0,title:"Anterior estado",onclick:c(()=>Ou(n,-1))},"‹"),o("button.btn.btn-sm",{disabled:l<0||l>=Br.length-1,title:"Siguiente estado",onclick:c(()=>Ou(n,1))},"›"),n.clienteId?o("span.chip.ok",{},"cliente"):o("button.btn.btn-sm.btn-primary",{onclick:c(()=>Aw(n))},"→ Cliente")]);return s.append(u),s}async function Tw(n,e,t){const r=q("crm")||{},i=(Array.isArray(r.leads)?r.leads:[]).map(c=>c.id===n?{...c}:c),s=i.find(c=>c.id===n);if(!s){N("Lead no encontrado","err");return}e(s);try{await Z("crm",{...r,leads:i}),t&&N(t,"ok")}catch{N("No se pudo guardar","err")}}async function Ou(n,e){const t=Br.indexOf(n.estado),r=t+e;if(t<0||r<0||r>=Br.length)return;const i=Br[r];await Tw(n.id,s=>{s.estado=i,s.ultimoContacto=X()},`${n.nombre} → ${fp(i)}`)}async function Aw(n,e){const t=q("crm")||{},r=Array.isArray(t.clientes)?t.clientes.slice():[],i=r.find(f=>(f.nombre||"").toLowerCase()===(n.nombre||"").toLowerCase()),s=n.contacto||"",c=s.includes("@"),l=i||{id:le(),nombre:n.nombre,telefono:c?"":s,email:c?s:"",direccion:"",tipo:n.tipo||null,negocio:n.negocio||null,notas:n.descripcion||"",preferencias:"",creado:X()},u=i?r:[...r,l],h=(Array.isArray(t.leads)?t.leads:[]).map(f=>f.id===n.id?{...f,clienteId:l.id}:f);try{await Z("crm",{...t,clientes:u,leads:h}),N(i?`Vinculado al cliente "${l.nombre}"`:`Cliente "${l.nombre}" creado y vinculado`,"ok")}catch{N("No se pudo convertir","err")}}function bp(n,e=null){const t=!!e;ne(t?`Lead · ${e.nombre}`:"Nuevo lead",r=>{const i=o("input",{value:e?.nombre||"",placeholder:"Nombre",autofocus:!0}),s=o("input",{value:e?.contacto||"",placeholder:"Teléfono o email"}),c=o("select",{},[o("option",{value:""},"— sin tipo —"),...On.map(([g,_])=>o("option",{value:g},_))]);c.value=e?.tipo||"";const l=o("select",{},[o("option",{value:""},"—"),..._E.map(g=>o("option",{value:g},g))]);l.value=e?.origen||"manual";const u=o("select",{},Ns.map(([g,_])=>o("option",{value:g},_)));u.value=e?.estado||"nuevo";const h=o("textarea",{rows:2,placeholder:"Descripción"},e?.descripcion||""),f=async()=>{if(!i.value.trim()){N("Falta el nombre","err");return}const g=q("crm")||{},_=Array.isArray(g.leads)?g.leads.slice():[];if(t){const E=_.findIndex(I=>I.id===e.id);E>=0&&(_[E]={..._[E],nombre:i.value.trim(),contacto:s.value.trim(),tipo:c.value||null,origen:l.value||"manual",estado:u.value,descripcion:h.value.trim(),ultimoContacto:X()})}else _.push({id:le(),nombre:i.value.trim(),contacto:s.value.trim(),tipo:c.value||null,negocio:c.value==="camper"?"camper":null,origen:l.value||"manual",descripcion:h.value.trim(),estado:u.value||"nuevo",creado:X(),ultimoContacto:null,clienteId:null,presupuestoId:null,cita:null});try{await Z("crm",{...g,leads:_}),N(t?"Lead actualizado":"Lead creado","ok"),r()}catch{N("No se pudo guardar","err")}},m=async()=>{const g=q("crm")||{},_=(Array.isArray(g.leads)?g.leads:[]).filter(E=>E.id!==e.id);try{await Z("crm",{...g,leads:_}),N("Lead eliminado","ok"),r()}catch{N("No se pudo eliminar","err")}};return o("div",{},[$n("Nombre",i),$n("Contacto",s),o("div.field-grid",{},[$n("Tipo",c),$n("Origen",l)]),$n("Estado",u),$n("Descripción",h),o("div.btn-row",{},[o("button.btn",{onclick:r},"Cancelar"),t?o("button.btn.btn-danger",{onclick:m},"Eliminar"):null,o("button.btn.btn-primary",{onclick:f},t?"Guardar":"Crear")].filter(Boolean))])})}function $n(n,e){return o("div.field",{},[o("label",{},n),e])}const Mu=n=>n===""||n==null?null:parseFloat(n);function Ep({crm:n,precios:e,prefill:t={},onGuardado:r}={}){const{clientes:i,leads:s}=wt(n),c=uc(e),l=Vs(e),u={tipo:t.tipo||"carpinteria",clienteId:t.clienteId||"",leadId:t.leadId||"",concepto:t.concepto||"",tarifaVentaMO:l.tarifaVentaMO,margenPct:Math.round(l.margenMateriales*1e3)/10,horas:0,piezas:[h()],herrajes:[],otros:[]};function h(){return{nombre:"",ancho:null,alto:null,cantidad:1,precioUd:null,precioCliente:null}}function f(){return{nombre:"",cantidad:1,precioUd:null,precioCliente:null}}function m(){return{concepto:"",coste:null,precioCliente:null}}function g(){const _={tarifaVentaMO:u.tarifaVentaMO,margenMateriales:(Number(u.margenPct)||0)/100},E=u.piezas.filter(V=>(V.nombre||"").trim()||V.precioUd!=null||V.ancho!=null&&V.alto!=null).map(V=>({material:V.nombre,nombre:V.nombre,ancho:V.ancho,alto:V.alto,cantidad:V.cantidad,precioUd:V.precioUd,precioCliente:V.precioCliente})),I=u.herrajes.filter(V=>(V.nombre||"").trim()).map(V=>({herraje:V.nombre,nombre:V.nombre,cantidad:V.cantidad,precioUd:V.precioUd,precioCliente:V.precioCliente})),k=u.otros.filter(V=>(V.concepto||"").trim()&&(V.coste!=null||V.precioCliente!=null)).map(V=>({nombre:V.concepto,tipo:"otro",cantidad:1,coste:V.coste!=null?V.coste:0,precioCliente:V.precioCliente!=null?V.precioCliente:null}));return bw(e,u.tipo,[...E,...k],I,u.horas||0,_)}ne("Presupuestador",_=>{const E=o("div"),I=Io(On.map(([L,ue])=>[L,ue]),u.tipo,L=>{u.tipo=L,Pe()}),k=Io([["","— sin cliente —"],...i.map(L=>[L.id,L.nombre])],u.clienteId,L=>{u.clienteId=L}),V=s.filter(L=>L.estado!=="ganado"&&L.estado!=="perdido"),j=Io([["","— sin lead —"],...V.map(L=>[L.id,`${L.nombre} · ${L.estado||"nuevo"}`])],u.leadId,L=>{u.leadId=L}),U=o("input",{value:u.concepto,placeholder:"Trabajo / descripción"});U.addEventListener("input",()=>{u.concepto=U.value});const $=o("input",{type:"number",step:"0.01",value:u.tarifaVentaMO,style:"max-width:110px;"});$.addEventListener("input",()=>{u.tarifaVentaMO=Mu($.value)??l.tarifaVentaMO,Pe()});const W=o("input",{type:"number",step:"0.5",value:u.margenPct,style:"max-width:90px;"});W.addEventListener("input",()=>{u.margenPct=Mu(W.value)??0,Pe()});const x=o("div.card",{},[o("div.card-head",{},o("h3",{},"Datos del presupuesto")),o("div.field-grid",{},[gn("Tipo",I),gn("Cliente",k)]),o("div.field-grid",{},[gn("Lead (opcional)",j),gn("Concepto",U)]),o("div.field-grid",{},[gn("Tarifa venta MO €/h",$),gn("Margen materiales %",W)]),o("div.small.muted",{},`Defaults: ${l.tarifaVentaMO} €/h · ${Math.round(l.margenMateriales*100)}% · IVA ${Math.round(l.iva*100)}%. Se guardan los valores usados.`)]),A=o("div.card"),y=o("div.card"),w=o("div.card"),T=o("div.card"),C=o("div.card",{style:"position:sticky;bottom:0;"});function R(){Ce(A),A.append(o("div.card-head",{},[o("h3",{},"Materiales"),o("button.link",{onclick:()=>{u.piezas.push(h()),R(),Pe()}},"+ Material")])),A.append(o("div.small.muted",{style:"margin-bottom:6px;"},"Catálogo (ancho×alto en m) o línea libre (nombre + cantidad + €/ud coste). Precio cliente en blanco = coste × (1+margen).")),u.piezas.forEach((L,ue)=>A.append(b(L,ue))),u.piezas.length||A.append(o("div.card-empty",{},"Sin materiales"))}function b(L,ue){const he=o("input",{value:L.nombre,placeholder:"Material o nombre",list:"catmat",style:"min-width:120px;"});he.addEventListener("input",()=>{L.nombre=he.value,Pe()});const Me=ut(L.cantidad,Ye=>{L.cantidad=Ye},"Cant"),we=ut(L.ancho,Ye=>{L.ancho=Ye},"Ancho m"),be=ut(L.alto,Ye=>{L.alto=Ye},"Alto m"),It=ut(L.precioUd,Ye=>{L.precioUd=Ye},"€/ud"),xn=ut(L.precioCliente,Ye=>{L.precioCliente=Ye},"€ cliente");return To([["Material",he],["Cant",Me],["Ancho m",we],["Alto m",be],["€/ud",It],["€ cliente",xn]],()=>{u.piezas.splice(ue,1),R(),Pe()})}function oe(){Ce(y),y.append(o("div.card-head",{},[o("h3",{},"Herrajes"),o("button.link",{onclick:()=>{u.herrajes.push(f()),oe(),Pe()}},"+ Herraje")])),u.herrajes.forEach((L,ue)=>y.append(ye(L,ue))),u.herrajes.length||y.append(o("div.card-empty",{},"Sin herrajes"))}function ye(L,ue){const he=o("input",{value:L.nombre,placeholder:"Herraje",list:"catherr",style:"min-width:120px;"});he.addEventListener("input",()=>{L.nombre=he.value,Pe()});const Me=ut(L.cantidad,It=>{L.cantidad=It},"Cant"),we=ut(L.precioUd,It=>{L.precioUd=It},"€/ud"),be=ut(L.precioCliente,It=>{L.precioCliente=It},"€ cliente");return To([["Herraje",he],["Cant",Me],["€/ud",we],["€ cliente",be]],()=>{u.herrajes.splice(ue,1),oe(),Pe()})}function Ze(){Ce(w),w.append(o("div.card-head",{},o("h3",{},"Mano de obra")));const L=ut(u.horas,ue=>{u.horas=ue||0},"Horas");w.append(o("div.field-grid",{},[gn("Horas estimadas",L)])),w.append(o("div.small.muted",{},`Se venden a ${_e(u.tarifaVentaMO)} €/h (editable arriba). Sin margen adicional.`))}function at(){Ce(T),T.append(o("div.card-head",{},[o("h3",{},"Otros (subcontratas, homologación, desplazamientos…)"),o("button.link",{onclick:()=>{u.otros.push(m()),at(),Pe()}},"+ Otro")])),T.append(o("div.small.muted",{style:"margin-bottom:6px;"},"Coste y precio cliente independientes (el precio cliente no aplica margen automático).")),u.otros.forEach((L,ue)=>T.append(dn(L,ue))),u.otros.length||T.append(o("div.card-empty",{},"Sin otros conceptos"))}function dn(L,ue){const he=o("input",{value:L.concepto,placeholder:"Concepto",style:"min-width:140px;"});he.addEventListener("input",()=>{L.concepto=he.value,Pe()});const Me=ut(L.coste,be=>{L.coste=be},"Coste €"),we=ut(L.precioCliente,be=>{L.precioCliente=be},"€ cliente");return To([["Concepto",he],["Coste €",Me],["€ cliente",we]],()=>{u.otros.splice(ue,1),at(),Pe()})}function Pe(){const L=g();Ce(C),C.append(o("div.card-head",{},o("h3",{},"Desglose")));const ue=o("div",{style:"overflow-x:auto;"}),he=o("table.ftable");he.append(o("thead",{},o("tr",{},["Concepto","Coste","Precio cliente"].map((we,be)=>o("th",{style:be?"text-align:right;":""},we)))));const Me=o("tbody");for(const we of L.lineas)Me.append(o("tr",{},[o("td",{},we.desc),o("td",{style:"text-align:right;"},D(we.coste)),o("td",{style:"text-align:right;"},D(we.precioCliente))]));L.lineas.length||Me.append(o("tr",{},o("td",{colspan:3,style:"color:var(--text3);"},"Añade materiales, mano de obra u otros."))),he.append(Me),ue.append(he),C.append(ue),C.append(o("div.kpis",{style:"margin-top:8px;"},[wo(D(L.baseImponible),"Base imponible"),wo(D(L.iva),`IVA ${Math.round(L.paramsUsados.iva*100)}%`),wo(D(L.total),"Total")])),C.append(o("div.btn-row",{},[o("button.btn",{onclick:_},"Cancelar"),o("button.btn.btn-primary",{onclick:()=>fi(L)},"Guardar borrador")]))}async function fi(L){if(!u.concepto.trim()){N("Falta el concepto","err");return}if(!L.lineas.length){N("El presupuesto no tiene líneas","err");return}const ue=wt(q("crm")),he=ue.presupuestos.slice(),Me={id:le(),leadId:u.leadId||null,clienteId:u.clienteId||null,tipo:u.tipo,negocio:u.tipo==="camper"?"camper":null,concepto:u.concepto.trim(),lineas:L.lineas.map(be=>({desc:be.desc,cant:1,precio:be.precioCliente,coste:be.coste,tipoLinea:be.tipo})),baseImponible:L.baseImponible,iva:L.iva,total:L.total,paramsUsados:L.paramsUsados,estado:"borrador",creado:X(),enviado:null,respondido:null,trabajoEntregado:null};he.push(Me);let we=ue.leads;u.leadId&&(we=ue.leads.map(be=>be.id===u.leadId?{...be,presupuestoId:Me.id,estado:"presupuestado"}:be));try{await Z("crm",{...q("crm")||{},clientes:ue.clientes,leads:we,presupuestos:he}),N(`Presupuesto "${Me.concepto}" guardado (borrador)`,"ok"),_(),typeof r=="function"&&r(Me)}catch{N("No se pudo guardar","err")}}const xs=o("datalist",{id:"catmat"},c.materiales.map(L=>o("option",{value:L.nombre}))),ht=o("datalist",{id:"catherr"},c.herrajes.map(L=>o("option",{value:L.nombre})));return E.append(x,xs,ht,A,y,w,T,C),R(),oe(),Ze(),at(),Pe(),E})}function gn(n,e){return o("div.field",{},[o("label",{},n),e])}function wo(n,e){return o("div.kpi",{},[o("div.kpi-v",{},n),o("div.kpi-l",{},e)])}function Io(n,e,t){const r=o("select",{},n.map(([i,s])=>o("option",{value:i},s)));return r.value=e,r.addEventListener("change",()=>t(r.value)),r}function ut(n,e,t){const r=o("input",{type:"number",step:"0.01",value:n??"",placeholder:t||"",style:"max-width:100px;"});return r.addEventListener("input",()=>e(r.value===""?null:parseFloat(r.value))),r}function To(n,e){return o("div.row",{style:"flex-wrap:wrap;gap:8px;align-items:flex-end;"},[...n.map(([t,r])=>o("div.field",{style:"margin:0;"},[o("label",{style:"font-size:9px;"},t),r])),o("button.btn.btn-sm.btn-danger",{onclick:e,title:"Quitar"},"×")])}let xr={modo:"lista",id:null};function wp(n,e){if(!e.cargado.crm){n.append(o("div.spinner"));return}const{clientes:t}=wt(e.crm);if(xr.modo==="ficha"){const s=t.find(c=>c.id===xr.id);if(s){Cw(n,e,s);return}xr={modo:"lista",id:null}}const r=o("div.card");r.append(o("div.card-head",{},[o("h3",{},"Clientes"),o("button.link",{onclick:()=>Tp()},"+ Cliente")])),n.append(r);const i=o("div.card");if(!t.length){i.append(o("div.card-empty",{},"Sin clientes. Créalos aquí o convierte un lead desde Pipeline.")),n.append(i);return}t.slice().sort((s,c)=>(s.nombre||"").localeCompare(c.nombre||"")).forEach(s=>{i.append(o("div.row",{style:"cursor:pointer;",onclick:()=>{xr={modo:"ficha",id:s.id},Ip(n,e)}},[o("div.row-main",{},[o("div.row-label",{},s.nombre||"(sin nombre)"),o("div.row-sub",{},[s.telefono,s.email].filter(Boolean).join(" · ")||"sin contacto")]),o("div.row-right",{},o("span.chip",{},ln(s)))]))}),n.append(i)}function Ip(n,e){Ce(n),wp(n,e)}function Cw(n,e,t){const{leads:r,presupuestos:i}=wt(e.crm),s=e.trabajadores||[],c=r.filter(I=>I.clienteId===t.id),l=i.filter(I=>I.clienteId===t.id),u=new Set(l.map(I=>I.id)),h=(t.nombre||"").toLowerCase(),f=(e.trabajos||[]).filter(I=>I.presupuestoId&&u.has(I.presupuestoId)||I.cliente&&I.cliente.toLowerCase()===h);n.append(o("div.btn-row",{style:"margin-top:0;margin-bottom:10px;"},[o("button.btn.btn-sm",{onclick:()=>{xr={modo:"lista",id:null},Ip(n,e)}},"‹ Clientes")]));const m=o("div.card");m.append(o("div.card-head",{},[o("h3",{},t.nombre||"(sin nombre)"),o("span.chip",{},ln(t))])),m.append(o("div.row-sub",{style:"font-size:11px;"},[t.telefono?`📞 ${t.telefono}`:"",t.email?`  ✉ ${t.email}`:"",t.direccion?`  📍 ${t.direccion}`:""].join("")||"Sin datos de contacto")),t.notas&&m.append(o("div.small.muted",{style:"margin-top:4px;"},t.notas)),t.preferencias&&m.append(o("div.small.muted",{},`Preferencias: ${t.preferencias}`)),m.append(o("div.btn-row",{},[o("button.btn.btn-sm",{onclick:()=>Tp(e,t)},"Editar"),o("button.btn.btn-sm.btn-primary",{onclick:()=>Ep({crm:e.crm,precios:e.precios,prefill:{clienteId:t.id,tipo:t.tipo||"carpinteria"}})},"+ Presupuesto")])),n.append(m);const g=o("div.card");g.append(o("div.card-head",{},o("h3",{},`Leads (${c.length})`))),c.length?c.forEach(I=>g.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},I.nombre),o("div.row-sub",{},`${ln(I)} · ${I.origen||"—"}`)]),o("div.row-right",{},o("span.chip",{},fp(I.estado)))]))):g.append(o("div.card-empty",{},"Sin leads vinculados")),n.append(g);const _=o("div.card");_.append(o("div.card-head",{},o("h3",{},`Presupuestos (${l.length})`))),l.length?l.slice().sort((I,k)=>(k.creado||"").localeCompare(I.creado||"")).forEach(I=>_.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},I.concepto||"(sin concepto)"),o("div.row-sub",{},`${I.creado||"—"} · ${oc(I.estado)}`)]),o("div.row-right",{},o("div.amount",{},D(I.total||0)))]))):_.append(o("div.card-empty",{},"Sin presupuestos")),n.append(_);const E=o("div.card");E.append(o("div.card-head",{},o("h3",{},`Trabajos (${f.length})`))),f.length?f.forEach(I=>{const k=Ss(I,s);E.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},I.nombre),o("div.row-sub",{},`${Mn(I.tipo)} · ${I.estado||"activo"}`)]),o("div.row-right",{},[o("div.amount",{},D(k.ingresoTotal)),o("div.small.muted",{},`${_e(k.margen,1)}%`)])]))}):E.append(o("div.card-empty",{},"Sin trabajos")),n.append(E)}function Tp(n,e=null){const t=!!e;ne(t?`Cliente · ${e.nombre}`:"Nuevo cliente",r=>{const i=o("input",{value:e?.nombre||"",placeholder:"Nombre",autofocus:!0}),s=o("input",{value:e?.telefono||"",placeholder:"Teléfono"}),c=o("input",{value:e?.email||"",placeholder:"Email"}),l=o("input",{value:e?.direccion||"",placeholder:"Dirección"}),u=o("select",{},[o("option",{value:""},"— sin tipo —"),...On.map(([g,_])=>o("option",{value:g},_))]);u.value=e?.tipo||"";const h=o("textarea",{rows:2,placeholder:"Notas"},e?.notas||""),f=o("input",{value:e?.preferencias||"",placeholder:"Preferencias"}),m=async()=>{if(!i.value.trim()){N("Falta el nombre","err");return}const g=q("crm")||{},_=Array.isArray(g.clientes)?g.clientes.slice():[];if(!t&&_.some(E=>(E.nombre||"").toLowerCase()===i.value.trim().toLowerCase())){N("Ya existe un cliente con ese nombre","err");return}if(t){const E=_.findIndex(I=>I.id===e.id);E>=0&&(_[E]={..._[E],nombre:i.value.trim(),telefono:s.value.trim(),email:c.value.trim(),direccion:l.value.trim(),tipo:u.value||null,notas:h.value.trim(),preferencias:f.value.trim()})}else _.push({id:le(),nombre:i.value.trim(),telefono:s.value.trim(),email:c.value.trim(),direccion:l.value.trim(),tipo:u.value||null,negocio:u.value==="camper"?"camper":null,notas:h.value.trim(),preferencias:f.value.trim(),creado:X()});try{await Z("crm",{...g,clientes:_}),N(t?"Cliente guardado":"Cliente creado","ok"),r()}catch{N("No se pudo guardar","err")}};return o("div",{},[vn("Nombre",i),o("div.field-grid",{},[vn("Teléfono",s),vn("Email",c)]),vn("Dirección",l),o("div.field-grid",{},[vn("Tipo",u),vn("Preferencias",f)]),vn("Notas",h),o("div.btn-row",{},[o("button.btn",{onclick:r},"Cancelar"),o("button.btn.btn-primary",{onclick:m},t?"Guardar":"Crear")])])})}function vn(n,e){return o("div.field",{},[o("label",{},n),e])}const Rw=On.map(([n])=>n),Ht={estado:"",tipo:""};let rn={modo:"lista",id:null};function Ap(n,e){if(!e.cargado.crm||!e.cargado.precios){n.append(o("div.spinner"));return}const{presupuestos:t}=wt(e.crm);if(rn.modo==="detalle"){const r=t.find(i=>i.id===rn.id);if(r){Pw(n,e,r);return}rn={modo:"lista",id:null}}Sw(n,e)}function _t(n,e){Ce(n),Ap(n,e)}function Sw(n,e){const{clientes:t,leads:r,presupuestos:i}=wt(e.crm),s=o("div.card");s.append(o("div.card-head",{},[o("h3",{},"Presupuestos"),o("button.link",{onclick:()=>Ep({crm:e.crm,precios:e.precios,onGuardado:g=>{rn={modo:"detalle",id:g.id},_t(n,e)}})},"+ Nuevo con calculadora")]));const c=o("select",{},[o("option",{value:""},"Todos"),...sc.map(([g,_])=>o("option",{value:g},_))]);c.value=Ht.estado;const l=o("select",{},[o("option",{value:""},"Todos los tipos"),o("option",{value:"camper"},"Camper"),o("option",{value:"carpinteria"},"Carpintería"),o("option",{value:"cnc"},"CNC")]);l.value=Ht.tipo;const u=()=>{Ht.estado=c.value,Ht.tipo=l.value,_t(n,e)};c.addEventListener("change",u),l.addEventListener("change",u),s.append(o("div.field-grid",{},[zr("Estado",c),zr("Tipo",l)])),n.append(s);let h=i.slice();Ht.estado&&(h=h.filter(g=>g.estado===Ht.estado)),Ht.tipo&&(h=h.filter(g=>g.tipo===Ht.tipo)),h.sort((g,_)=>(_.creado||"").localeCompare(g.creado||""));const f=o("div.card");if(!h.length){f.append(o("div.card-empty",{},'Sin presupuestos con estos filtros. Crea uno con "+ Nuevo con calculadora".')),n.append(f);return}const m=h.reduce((g,_)=>g+(Number(_.baseImponible??_.total)||0),0);f.append(o("div.card-head",{},[o("h3",{},`${h.length} presupuesto${h.length===1?"":"s"}`),o("span.amount",{},D(m)+" base")]));for(const g of h){const _=ac(t,g.clienteId)||r.find(E=>E.id===g.leadId)?.nombre||"Sin cliente";f.append(o("div.row",{style:"cursor:pointer;",onclick:()=>{rn={modo:"detalle",id:g.id},_t(n,e)}},[o("div.row-main",{},[o("div.row-label",{},g.concepto||"(sin concepto)"),o("div.row-sub",{},`${ln(g)} · ${_} · ${g.creado||"—"}`)]),o("div.row-right",{},[o("div.amount",{},D(g.total||0)),Cp(g.estado)])]))}n.append(f)}function Pw(n,e,t){const{clientes:r,leads:i}=wt(e.crm),s=ac(r,t.clienteId)||i.find(u=>u.id===t.leadId)?.nombre||"Sin cliente",c=t.paramsUsados&&t.paramsUsados.iva!=null?t.paramsUsados.iva:Vs(e.precios).iva;n.append(o("div.btn-row",{style:"margin-top:0;margin-bottom:10px;"},[o("button.btn.btn-sm",{onclick:()=>{rn={modo:"lista",id:null},_t(n,e)}},"‹ Presupuestos")]));const l=o("div.card");l.append(o("div.card-head",{},[o("h3",{},t.concepto||"(sin concepto)"),o("div",{style:"display:flex;gap:6px;align-items:center;"},[o("span.chip",{},ln(t)),Cp(t.estado)])])),l.append(o("div.row-sub",{style:"font-size:11px;"},`Cliente: ${s}`)),l.append(o("div.small.muted",{style:"margin-top:4px;"},[`Creado ${t.creado||"—"}`,t.enviado?` · enviado ${t.enviado}`:"",t.respondido?` · respondido ${t.respondido}`:""].join(""))),n.append(l),n.append(kw(n,e,t)),n.append(Ow(n,e,t,c)),n.append(Mw(n,e,t))}function kw(n,e,t){const r=o("div.card");r.append(o("div.card-head",{},o("h3",{},"Estado")));const i=o("div.btn-row",{},[...sc.map(([s,c])=>o("button.btn.btn-sm"+(t.estado===s?".btn-primary":""),{onclick:()=>Nw(n,e,t,s)},c))]);return r.append(i),r.append(o("div.btn-row",{},[o("button.btn.btn-sm",{onclick:()=>Dw(n,e,t)},"Duplicar"),o("button.btn.btn-sm.btn-danger",{onclick:()=>Vw(n,e,t)},"Eliminar")])),r}async function Nw(n,e,t,r){await na(t.id,i=>{i.estado=r,r==="enviado"&&!i.enviado&&(i.enviado=X()),(r==="aceptado"||r==="rechazado")&&!i.respondido&&(i.respondido=X())},`Presupuesto → ${oc(r)}`),_t(n,e)}async function Dw(n,e,t){const r=q("crm")||{},i=(Array.isArray(r.presupuestos)?r.presupuestos:[]).slice(),s={...t,id:le(),concepto:`${t.concepto||"Presupuesto"} (copia)`,estado:"borrador",creado:X(),enviado:null,respondido:null,trabajoEntregado:null,lineas:(t.lineas||[]).map(c=>({...c}))};i.push(s);try{await Z("crm",{...r,presupuestos:i}),N("Presupuesto duplicado","ok"),rn={modo:"detalle",id:s.id},_t(n,e)}catch{N("No se pudo duplicar","err")}}function Vw(n,e,t){ne("Eliminar presupuesto",r=>o("div",{},[o("div.small.muted",{},`Se eliminará "${t.concepto||"presupuesto"}". Esta acción no se puede deshacer.`),o("div.btn-row",{},[o("button.btn",{onclick:r},"Cancelar"),o("button.btn.btn-danger",{onclick:async()=>{const i=q("crm")||{},s=(Array.isArray(i.presupuestos)?i.presupuestos:[]).filter(c=>c.id!==t.id);try{await Z("crm",{...i,presupuestos:s}),N("Presupuesto eliminado","ok"),r(),rn={modo:"lista",id:null},_t(n,e)}catch{N("No se pudo eliminar","err")}}},"Eliminar")])]))}function Ow(n,e,t,r){const i=o("div.card");i.append(o("div.card-head",{},[o("h3",{},"Líneas"),o("button.link",{onclick:()=>xu(n,e,t,r,null)},"+ Línea")]));const s=t.lineas||[];if(!s.length)i.append(o("div.card-empty",{},"Sin líneas"));else{const c=o("div",{style:"overflow-x:auto;"}),l=o("table.ftable");l.append(o("thead",{},o("tr",{},["Concepto","Coste","Precio cliente"].map((h,f)=>o("th",{style:f?"text-align:right;":""},h)))));const u=o("tbody");for(const h of s)u.append(o("tr",{style:"cursor:pointer;",onclick:()=>xu(n,e,t,r,h)},[o("td",{},h.desc||""),o("td",{style:"text-align:right;"},h.coste!=null?D(h.coste):"·"),o("td",{style:"text-align:right;"},D(h.precio??0))]));l.append(u),c.append(l),i.append(c)}return i.append(o("div.kpis",{style:"margin-top:8px;"},[qr(D(t.baseImponible??0),"Base"),qr(D(t.iva??0),`IVA ${Math.round(r*100)}%`),qr(D(t.total??0),"Total")])),t.paramsUsados&&i.append(o("div.small.muted",{style:"margin-top:6px;"},`Calculado a ${_e(t.paramsUsados.tarifaVentaMO)} €/h · margen ${Math.round((t.paramsUsados.margenMateriales||0)*100)}%`)),i}function xu(n,e,t,r,i){const s=!!i;ne(s?"Editar línea":"Nueva línea",c=>{const l=o("input",{value:i?.desc||"",placeholder:"Concepto",autofocus:!0}),u=o("input",{type:"number",step:"0.01",value:i?.coste??"",placeholder:"Coste € (opcional)"}),h=o("input",{type:"number",step:"0.01",value:i?.precio??"",placeholder:"Precio cliente €"}),f=async()=>{if(!l.value.trim()){N("Falta el concepto","err");return}const g={desc:l.value.trim(),cant:1,precio:parseFloat(h.value)||0,coste:u.value===""?null:parseFloat(u.value),tipoLinea:i?.tipoLinea||"material"};await na(t.id,_=>{const E=(_.lineas||[]).slice();if(s){const I=E.indexOf(i);I>=0?E[I]=g:E.push(g)}else E.push(g);_.lineas=E,Lu(_,r)},s?"Línea actualizada":"Línea añadida"),c(),_t(n,e)},m=async()=>{await na(t.id,g=>{g.lineas=(g.lineas||[]).filter(_=>_!==i),Lu(g,r)},"Línea eliminada"),c(),_t(n,e)};return o("div",{},[zr("Concepto",l),o("div.field-grid",{},[zr("Coste €",u),zr("Precio cliente €",h)]),o("div.small.muted",{},"La base, el IVA y el total se recalculan al guardar."),o("div.btn-row",{},[o("button.btn",{onclick:c},"Cancelar"),s?o("button.btn.btn-danger",{onclick:m},"Eliminar"):null,o("button.btn.btn-primary",{onclick:f},s?"Guardar":"Añadir")].filter(Boolean))])})}function Lu(n,e){const t=Math.round((n.lineas||[]).reduce((i,s)=>i+Number(s.cant||1)*Number(s.precio||0),0)*100)/100,r=Math.round(t*Number(e||0)*100)/100;n.baseImponible=t,n.iva=r,n.total=Math.round((t+r)*100)/100}function Mw(n,e,t){const r=o("div.card");r.append(o("div.card-head",{},o("h3",{},"Trabajo")));const i=(e.trabajos||[]).find(s=>s.presupuestoId===t.id);return i?(r.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},i.nombre),o("div.row-sub",{},`${Mn(i.tipo)} · ${i.estado||"activo"}`)]),o("div.row-right",{},o("button.btn.btn-sm",{onclick:()=>e._ctx?.nav&&e._ctx.nav("trabajos")},"Ver en Trabajos"))])),r):t.estado!=="aceptado"?(r.append(o("div.small.muted",{},'El presupuesto debe estar en estado "aceptado" para crear el trabajo.')),r):(r.append(o("div.small.muted",{style:"margin-bottom:8px;"},"Presupuesto aceptado: crea el trabajo de Sylva a partir de este presupuesto.")),r.append(o("div.btn-row",{},[o("button.btn.btn-primary",{onclick:()=>xw(n,e,t)},"Crear trabajo")])),r)}function xw(n,e,t){const r=Number(t.baseImponible??t.total)||0,i=Number(t.total??r)||0;ne("Crear trabajo",s=>o("div",{},[o("div.small.muted",{},"El ingreso presupuestado del trabajo, ¿con IVA o sin IVA? (el Excel usa el precio sin IVA)."),o("div.kpis",{style:"margin-top:8px;"},[qr(D(r),"Base (sin IVA)"),qr(D(i),"Total (con IVA)")]),o("div.btn-row",{},[o("button.btn",{onclick:s},"Cancelar"),o("button.btn",{onclick:()=>{Fu(n,e,t,i),s()}},"Con IVA"),o("button.btn.btn-primary",{onclick:()=>{Fu(n,e,t,r),s()}},"Sin IVA (base)")])]))}async function Fu(n,e,t,r){const{clientes:i,leads:s}=wt(e.crm),c=ac(i,t.clienteId)||s.find(m=>m.id===t.leadId)?.nombre||"",l=Rw.includes(t.tipo)?t.tipo:"carpinteria",u=e.config||{},h=(q("trabajos")||[]).slice(),f={id:le(),nombre:t.concepto||"Trabajo",tipo:l,cliente:c,contacto:"",descripcion:t.concepto||"",fechaInicio:X(),fechaEntrega:"",estado:"activo",presupuestoId:t.id,ingresoPresupuestado:Math.round((Number(r)||0)*100)/100,extras:[],fases:ap(u,l),tareas:[],materiales:[],otrosGastos:[],cobros:[],notas:[]};h.push(f);try{await Z("trabajos",h),N(`Trabajo "${f.nombre}" creado (ingreso ${D(f.ingresoPresupuestado)})`,"ok"),_t(n,e),e._ctx?.nav&&e._ctx.nav("trabajos")}catch{N("No se pudo crear el trabajo","err")}}async function na(n,e,t){const r=q("crm")||{},i=(Array.isArray(r.presupuestos)?r.presupuestos:[]).map(c=>c.id===n?{...c,lineas:(c.lineas||[]).slice()}:c),s=i.find(c=>c.id===n);if(!s){N("Presupuesto no encontrado","err");return}e(s);try{await Z("crm",{...r,presupuestos:i}),t&&N(t,"ok")}catch{N("No se pudo guardar","err")}}function Cp(n){return o("span.chip"+(n==="aceptado"?".ok":n==="enviado"?".pend":n==="rechazado"?".venc":""),{},oc(n))}function zr(n,e){return o("div.field",{},[o("label",{},n),e])}function qr(n,e){return o("div.kpi",{},[o("div.kpi-v",{},n),o("div.kpi-l",{},e)])}const Lw=[["pipeline","Pipeline"],["clientes","Clientes"],["presupuestos","Presupuestos"],["tarifas","Tarifas"]];let kr="pipeline";function Fw(n,e={}){n.append(o("h1.section-title",{},"Clientes"));const t=o("div.subtabs"),r=o("div");n.append(t),n.append(r);const i={crm:null,precios:null,trabajos:null,trabajadores:null,capital:null,config:null,cargado:{},_ctx:e},s=()=>{Ce(t);for(const[u,h]of Lw)t.append(o("button.subtab"+(kr===u?".active":""),{onclick:()=>{kr=u,s()}},h));Ce(r),kr==="pipeline"?ww(r,i):kr==="clientes"?wp(r,i):kr==="presupuestos"?Ap(r,i):Uw(r,i)},c=u=>qe(u,h=>{i[u]=h,i.cargado[u]=!0,s()}),l=[c("crm"),c("precios"),c("trabajos"),c("trabajadores"),c("capital"),c("config")];return s(),()=>l.forEach(u=>u())}function Uw(n,e){if(!e.cargado.precios){n.append(o("div.spinner"));return}const t=e.precios,r=uc(t),i=Vs(t),s=async f=>{const g={...q("precios")||{},...f};Array.isArray(g.materiales)||(g.materiales=cr.materiales.slice()),Array.isArray(g.herrajes)||(g.herrajes=cr.herrajes.slice()),g.params||(g.params={...ta});try{await Z("precios",g),N("Tarifas guardadas","ok")}catch{N("No se pudo guardar","err")}},c=o("div.card");c.append(o("div.card-head",{},o("h3",{},"Parámetros de presupuesto")));const l=o("input",{type:"number",step:"0.01",value:i.tarifaVentaMO}),u=o("input",{type:"number",step:"0.5",value:Math.round(i.margenMateriales*1e3)/10}),h=o("input",{type:"number",step:"0.5",value:Math.round(i.iva*1e3)/10});c.append(o("div.field-grid",{},[Jt("Tarifa venta MO €/h",l),Jt("Margen materiales %",u),Jt("IVA %",h)])),c.append(o("div.small.muted",{},"Fuente única: estos parámetros los usan el presupuestador y el módulo Trabajos.")),c.append(o("div.btn-row",{},[o("button.btn.btn-primary",{onclick:()=>s({params:{tarifaVentaMO:parseFloat(l.value)||ta.tarifaVentaMO,margenMateriales:(parseFloat(u.value)||0)/100,iva:(parseFloat(h.value)||0)/100}})},"Guardar parámetros")])),n.append(c),n.append(Uu("Materiales",r.materiales,"materiales",s,!0)),n.append(Uu("Herrajes",r.herrajes,"herrajes",s,!1))}function Uu(n,e,t,r,i){const s=o("div.card");if(s.append(o("div.card-head",{},[o("h3",{},n),o("button.link",{onclick:()=>c(null)},"+ Añadir")])),!e.length)return s.append(o("div.card-empty",{},"Catálogo vacío")),s;for(const l of e){const u=l.precioM2!=null?`${D(l.precioM2)}/m²`:l.precioUd!=null?`${D(l.precioUd)}/ud`:"—";s.append(o("div.row",{style:"cursor:pointer;",onclick:()=>c(l)},[o("div.row-main",{},[o("div.row-label",{},l.nombre||"(sin nombre)"),o("div.row-sub",{},[l.id?`id: ${l.id}`:"",i&&l.grosor!=null?` · ${l.grosor}mm`:""].join("")||"·")]),o("div.row-right",{},o("div.amount",{},u))]))}return s;function c(l){const u=!!l;ne(u?`Editar · ${l.nombre}`:`Nuevo en ${n}`,h=>{const f=o("input",{value:l?.nombre||"",placeholder:"Nombre",autofocus:!0}),m=o("select",{},[o("option",{value:"m2"},"Precio por m²"),o("option",{value:"ud"},"Precio por unidad")]);m.value=l&&l.precioUd!=null&&l.precioM2==null?"ud":i?"m2":"ud";const g=o("input",{type:"number",step:"0.01",value:l?.precioM2??l?.precioUd??"",placeholder:"Precio €"}),_=o("input",{type:"number",step:"1",value:l?.grosor??"",placeholder:"Grosor mm (opcional)"}),E=async()=>{if(!f.value.trim()){N("Falta el nombre","err");return}const k=(q("precios")?.[t]||cr[t]||[]).slice(),V={id:l?.id||le(),nombre:f.value.trim()},j=parseFloat(g.value)||0;if(i&&m.value==="m2"?(V.precioM2=j,_.value!==""&&(V.grosor=parseFloat(_.value))):V.precioUd=j,u){const U=k.findIndex($=>$.id===l.id||$===l);U>=0?k[U]=V:k.push(V)}else k.push(V);await r({[t]:k}),h()},I=async()=>{const k=(q("precios")?.[t]||cr[t]||[]).filter(V=>V.id!==l.id&&V!==l);await r({[t]:k}),h()};return o("div",{},[Jt("Nombre",f),i?o("div.field-grid",{},[Jt("Modo de precio",m),Jt("Precio €",g)]):Jt("Precio € / ud",g),i?Jt("Grosor mm",_):null,o("div.btn-row",{},[o("button.btn",{onclick:h},"Cancelar"),u?o("button.btn.btn-danger",{onclick:I},"Eliminar"):null,o("button.btn.btn-primary",{onclick:E},u?"Guardar":"Añadir")].filter(Boolean))].filter(Boolean))})}}function Jt(n,e){return o("div.field",{},[o("label",{},n),e])}const Xe={anio:null,mesGridY:null,mesGridM:null},nt={tipo:"",categoria:"",estado:""},Os=()=>{const n=q("cobrospagos")||{};return{saldoInicial:Number(n.saldoInicial)||0,fechaInicio:n.fechaInicio||"",movimientos:n.movimientos||[]}},ra=()=>`${new Date().getFullYear()}-01-01`,ls=(n,e)=>new Date(n,e+1,0).getDate(),An=(n,e,t)=>`${n}-${String(e+1).padStart(2,"0")}-${String(t).padStart(2,"0")}`;function jw(n,e){if(!e.cargado.cobrospagos||!e.cargado.gastos||!e.cargado.trabajadores){n.append(o("div.spinner"));return}const t=new Date;Xe.anio==null&&(Xe.anio=t.getFullYear()),Xe.mesGridY==null&&(Xe.mesGridY=t.getFullYear(),Xe.mesGridM=t.getMonth());const r=Os(),i={cobrospagos:e.cobrospagos,gastos:e.gastos,trabajadores:e.trabajadores,trabajos:e.trabajos};n.append($w()),n.append(ia(i,r)),n.append(Sp(i)),n.append(Pp(i)),n.append(Bw(r))}function $w(){const n=o("div.card");return n.append(o("div.card-head",{},[o("h3",{},"Tesorería"),o("button.link",{onclick:()=>Rp(null)},"+ Movimiento")])),n.append(o("div.small.muted",{},"Cobros y pagos previstos y realizados. Aparecen automáticamente: gastos, trabajos pendientes de pago y el pendiente de cobro de cada trabajo-proyecto en su fecha de entrega.")),n}function Bw(n){const e=o("div.card");return e.append(o("div.card-head",{},o("h3",{},"Saldo inicial"))),e.append(o("div.hero",{},[o("div.hero-label",{},"Saldo inicial"),o("div.hero-value",{},D(n.saldoInicial)),o("div.hero-sub",{},n.fechaInicio?`desde ${n.fechaInicio}`:"sin fecha de inicio")])),e.append(o("div.btn-row",{},[o("button.btn.btn-sm",{onclick:()=>zw(n)},"Editar saldo/fecha inicial")])),e}function zw(n){ne("Saldo y fecha inicial",e=>{const t=o("input",{type:"number",step:"0.01",value:n.saldoInicial,placeholder:"Saldo inicial €"}),r=o("input",{type:"date",value:n.fechaInicio||ra()}),i=async()=>{const c={...Os(),saldoInicial:parseFloat(t.value)||0,fechaInicio:r.value||ra()};try{await Z("cobrospagos",c),N("Guardado","ok"),e()}catch{N("No se pudo guardar","err")}};return o("div",{},[rt("Saldo inicial €",t),rt("Fecha de inicio",r),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:i},"Guardar")])])})}function Rp(n){const e=!!n;ne(e?"Editar movimiento":"Nuevo movimiento",t=>{const r=o("input",{type:"date",value:n?.fecha||X()}),i=o("select",{},[o("option",{value:"cobro"},"Cobro"),o("option",{value:"pago"},"Pago")]);i.value=n?.tipo||"cobro";const s=o("input",{value:n?.concepto||"",placeholder:"Concepto"}),c=o("input",{value:n?.categoria||"",placeholder:"Categoría (opcional)"}),l=o("input",{type:"number",step:"0.01",value:n?.importe??"",placeholder:"Importe €"}),u=o("select",{},[o("option",{value:"previsto"},"Previsto"),o("option",{value:"realizado"},"Realizado")]);u.value=n?.estado||"previsto";const h=o("textarea",{rows:2,placeholder:"Notas"},n?.notas||""),f=async()=>{if(!s.value.trim()){N("Falta el concepto","err");return}const m=parseFloat(l.value)||0;if(!m||m<=0){N("Falta el importe","err");return}const g=Os(),_=g.movimientos.slice(),E={id:n?.id||le(),fecha:r.value||X(),tipo:i.value,concepto:s.value.trim(),categoria:c.value.trim(),importe:m,estado:u.value,notas:h.value.trim()};if(e){const I=_.findIndex(k=>k.id===E.id);I>=0?_[I]=E:_.push(E)}else _.push(E);try{await Z("cobrospagos",{...g,movimientos:_}),N(e?"Movimiento actualizado":"Movimiento creado","ok"),t()}catch{N("No se pudo guardar","err")}};return o("div",{},[o("div.field-grid",{},[rt("Fecha",r),rt("Tipo",i)]),rt("Concepto",s),o("div.field-grid",{},[rt("Categoría",c),rt("Importe €",l)]),rt("Estado",u),rt("Notas",h),o("div.btn-row",{},[o("button.btn",{onclick:t},"Cancelar"),e?o("button.btn.btn-danger",{onclick:()=>qw(n.id,t)},"Eliminar"):null,o("button.btn.btn-primary",{onclick:f},e?"Guardar":"Crear")].filter(Boolean))])})}async function qw(n,e){const t=Os();try{await Z("cobrospagos",{...t,movimientos:t.movimientos.filter(r=>r.id!==n)}),N("Movimiento eliminado","ok"),e?.()}catch{N("No se pudo guardar","err")}}function ia(n,e){const t=o("div.card"),r=Xe.anio;t.append(o("div.card-head",{},[o("h3",{},"Resumen mensual"),o("div",{style:"display:flex;gap:8px;align-items:center;"},[o("button.btn.btn-sm",{onclick:()=>{Xe.anio--,t.replaceWith(ia(n,e))}},"‹"),o("span.small.muted",{},String(r)),o("button.btn.btn-sm",{onclick:()=>{Xe.anio++,t.replaceWith(ia(n,e))}},"›")])]));const i=e.fechaInicio||ra(),s=o("div",{style:"overflow-x:auto;"}),c=o("table.ftable");c.append(o("thead",{},o("tr",{},[o("th",{},"Mes"),o("th",{},"Cobros"),o("th",{},"Pagos"),o("th",{},"Neto"),o("th",{},"Saldo acum.")])));const l=o("tbody");for(let u=0;u<12;u++){const h=An(r,u,1),f=An(r,u,ls(r,u)),m=ti(n,h,f),g=m.filter(V=>V.tipo==="cobro").reduce((V,j)=>V+j.importe,0),_=m.filter(V=>V.tipo==="pago").reduce((V,j)=>V+j.importe,0),E=g-_,I=ks(ti(n,i,f)),k=e.saldoInicial+I;l.append(o("tr",{},[o("td",{},or[u].slice(0,3)),o("td",{style:"text-align:right;"},g?D(g):"·"),o("td",{style:"text-align:right;"},_?D(_):"·"),o("td"+(E>=0?".pos":".neg"),{style:"text-align:right;"},D(E)),o("td",{style:"text-align:right;font-weight:500;"},D(k))]))}return c.append(l),s.append(c),t.append(s),t}function Sp(n){var g;const e=o("div.card"),t=Xe.mesGridY,r=Xe.mesGridM,i=_=>{let E=r+_,I=t;for(;E<0;)E+=12,I--;for(;E>11;)E-=12,I++;Xe.mesGridY=I,Xe.mesGridM=E,e.replaceWith(Sp(n))};e.append(o("div.card-head",{},[o("h3",{},"Calendario"),o("div",{style:"display:flex;gap:8px;align-items:center;"},[o("button.btn.btn-sm",{onclick:()=>i(-1)},"‹"),o("span.small.muted",{},`${or[r]} ${t}`),o("button.btn.btn-sm",{onclick:()=>i(1)},"›")])]));const s=An(t,r,1),c=An(t,r,ls(t,r)),l=ti(n,s,c),u={};for(const _ of l)(u[g=_.fecha]||(u[g]=[])).push(_);const h=o("div.cal-grid");for(const _ of["L","M","X","J","V","S","D"])h.append(o("div.cal-dow",{},_));const f=(new Date(t,r,1).getDay()+6)%7;for(let _=0;_<f;_++)h.append(o("div.cal-cell.empty"));const m=X();for(let _=1;_<=ls(t,r);_++){const E=An(t,r,_),I=u[E]||[],k=ks(I),V=(I.length?" clickable":"")+(E===m?" hoy":""),j=o("div.cal-cell",{class:V.trim()},[o("div.cal-num",{},String(_)),I.length?o("div.cal-net"+(k>=0?".pos":".neg"),{},D(k)):o("div")]);I.length&&j.addEventListener("click",()=>Hw(E,I)),h.append(j)}return e.append(h),e}function Hw(n,e){ne(n,t=>{const r=o("div");for(const i of e)r.append(kp(i,!1));return o("div",{},[o("div.hero",{},[o("div.hero-label",{},"Neto del día"),o("div.hero-value",{},D(ks(e)))]),r,o("div.btn-row",{},[o("button.btn",{onclick:t},"Cerrar")])])})}function Pp(n){const e=o("div.card");e.append(o("div.card-head",{},o("h3",{},"Registro del mes")));const t=Xe.mesGridY,r=Xe.mesGridM,i=An(t,r,1),s=An(t,r,ls(t,r));let c=ti(n,i,s);const l=[...new Set(c.map(E=>E.categoria).filter(Boolean))],u=o("select",{},[o("option",{value:""},"Todos"),o("option",{value:"cobro"},"Cobros"),o("option",{value:"pago"},"Pagos")]);u.value=nt.tipo;const h=o("select",{},[o("option",{value:""},"Todas"),...l.map(E=>o("option",{value:E},E))]);h.value=nt.categoria;const f=o("select",{},[o("option",{value:""},"Todos"),o("option",{value:"previsto"},"Previsto"),o("option",{value:"realizado"},"Realizado")]);f.value=nt.estado;const m=()=>{nt.tipo=u.value,nt.categoria=h.value,nt.estado=f.value,e.replaceWith(Pp(n))};[u,h,f].forEach(E=>E.addEventListener("change",m)),e.append(o("div.field-grid",{},[rt("Tipo",u),rt("Estado",f)])),e.append(rt("Categoría",h)),nt.tipo&&(c=c.filter(E=>E.tipo===nt.tipo)),nt.categoria&&(c=c.filter(E=>E.categoria===nt.categoria)),nt.estado&&(c=c.filter(E=>E.estado===nt.estado));const g=c.filter(E=>E.tipo==="cobro").reduce((E,I)=>E+I.importe,0),_=c.filter(E=>E.tipo==="pago").reduce((E,I)=>E+I.importe,0);if(e.append(o("div.kpis",{},[Ao(D(g),"Cobros"),Ao(D(_),"Pagos"),Ao(D(g-_),"Neto")])),!c.length)return e.append(o("div.card-empty",{},"Sin movimientos")),e;for(const E of c)e.append(kp(E,!0));return e}function kp(n,e){const t=n.tipo==="cobro"?".pos":".neg",r=n.origen==="gasto"?"gasto":n.origen==="trabajador"?"trabajador":n.categoria||n.tipo;return o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},[n.concepto||"(sin concepto)",o("span.chip",{style:"margin-left:6px;"},r)]),o("div.row-sub",{},`${n.fecha} · ${n.estado}${n.readonly?" · solo lectura":""}`)]),o("div.row-right",{},[o("div.amount"+t,{},(n.tipo==="cobro"?"+":"−")+D(n.importe)),e&&!n.readonly?o("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;"},[o("button.btn.btn-sm",{onclick:()=>Rp(Gw(n))},"Editar")]):null])])}function Gw(n){return{id:n.id,fecha:n.fecha,tipo:n.tipo,concepto:n.concepto,categoria:n.categoria,importe:n.importe,estado:n.estado,notas:n.notas}}function rt(n,e){return o("div.field",{},[o("label",{},n),e])}function Ao(n,e){return o("div.kpi",{},[o("div.kpi-v",{},n),o("div.kpi-l",{},e)])}const Be={anio:null,mes:null,mostrarArchivados:!1,categoria:""},Ww=(n,e)=>new Date(n,e+1,0).getDate(),ju=(n,e,t)=>`${n}-${String(e+1).padStart(2,"0")}-${String(t).padStart(2,"0")}`,$u=n=>{const e=new Date;return e.setDate(e.getDate()+n),e.toISOString().split("T")[0]};function Kw(n,e){if(!e.cargado.gastos){n.append(o("div.spinner"));return}const t=new Date;Be.anio==null&&(Be.anio=t.getFullYear(),Be.mes=t.getMonth());const r=e.gastos||[];n.append(Np(r)),n.append(sa(r))}function Np(n){const e=o("div.card"),t=Be.anio,r=Be.mes,i=m=>{let g=r+m,_=t;for(;g<0;)g+=12,_--;for(;g>11;)g-=12,_++;Be.anio=_,Be.mes=g,e.replaceWith(Np(n))};e.append(o("div.card-head",{},[o("h3",{},"Resumen del mes"),o("div",{style:"display:flex;gap:8px;align-items:center;"},[o("button.btn.btn-sm",{onclick:()=>i(-1)},"‹"),o("span.small.muted",{},`${or[r]} ${t}`),o("button.btn.btn-sm",{onclick:()=>i(1)},"›")])]));const s=ju(t,r,1),c=ju(t,r,Ww(t,r)),l=Ps(n,s,c),u=l.reduce((m,g)=>m+(g.importe||0),0),h=l.filter(m=>m.pagado).reduce((m,g)=>m+(g.importe||0),0),f=l.filter(m=>!m.pagado).reduce((m,g)=>m+(g.importe||0),0);return e.append(o("div.kpis",{},[Co(D(u),"Esperado"),Co(D(h),"Pagado"),Co(D(f),"Pendiente")])),e}function sa(n){const e=o("div.card");e.append(o("div.card-head",{},[o("h3",{},Be.mostrarArchivados?"Gastos archivados":"Gastos"),o("button.link",{onclick:()=>Dp(null)},"+ Gasto")]));const t=[...new Set(n.map(u=>u.categoria).filter(Boolean))].sort(),r=o("select",{},[o("option",{value:""},"Todas"),...t.map(u=>o("option",{value:u},u))]);r.value=Be.categoria,r.addEventListener("change",()=>{Be.categoria=r.value,e.replaceWith(sa(n))});const i=o("button.btn.btn-sm",{onclick:()=>{Be.mostrarArchivados=!Be.mostrarArchivados,e.replaceWith(sa(n))}},Be.mostrarArchivados?"Ver activos":"Ver archivados");e.append(o("div.field-grid",{},[$e("Categoría",r),o("div.field",{},[o("label",{},"Vista"),i])]));let s=n.filter(u=>!!u.archivado===Be.mostrarArchivados);Be.categoria&&(s=s.filter(u=>u.categoria===Be.categoria));const c=s.filter(u=>u.recurrente),l=s.filter(u=>!u.recurrente);return e.append(Bu("Recurrentes",c)),e.append(Bu("Puntuales",l)),s.length||e.append(o("div.card-empty",{},"Sin gastos")),e}function Bu(n,e){var i;const t=o("div");if(!e.length)return t;t.append(o("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:10px 0 2px;"},n));const r={};for(const s of e)(r[i=s.categoria||"—"]||(r[i]=[])).push(s);for(const s of Object.keys(r).sort())for(const c of r[s])t.append(Qw(c));return t}function Qw(n){const e=n.recurrente?`${n.frecuencia||"mensual"} · día ${n.diaCobro??1}${n.fechaFin?` · hasta ${n.fechaFin}`:""}`:n.fecha||"—",t=!n.recurrente&&(n.pagos||[]).some(r=>r.fecha===n.fecha);return o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},[n.concepto||"(sin concepto)",o("span.chip",{style:"margin-left:6px;"},n.categoria||"—"),n.deducible?o("span.chip.ok",{style:"margin-left:4px;"},"deducible"):null,t?o("span.chip.ok",{style:"margin-left:4px;"},"pagado"):null].filter(Boolean)),o("div.row-sub",{},[e,n.baseImponible!=null?` · base ${D(n.baseImponible)} · IVA ${_e(n.tipoIVA||21,0)}%`:""].join("")),n.facturaDrive?o("a",{href:n.facturaDrive.link||n.facturaDrive,target:"_blank",rel:"noopener",class:"link",style:"font-size:9px;"},"📎 factura Drive"):null].filter(Boolean)),o("div.row-right",{},[o("div.amount",{},D(n.importe)),o("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;flex-wrap:wrap;"},[o("button.btn.btn-sm.btn-primary",{onclick:()=>Jw(n)},"Pagar"),o("button.btn.btn-sm",{onclick:()=>Dp(n)},"Editar"),o("button.btn.btn-sm",{onclick:()=>Yw(n)},n.archivado?"Desarchivar":"Archivar"),o("button.btn.btn-sm.btn-danger",{onclick:()=>Zw(n)},"Eliminar")])])])}async function Yw(n){const e=(q("gastos")||[]).map(r=>({...r})),t=e.find(r=>r.id===n.id);if(t){t.archivado=!t.archivado;try{await Z("gastos",e),N(t.archivado?"Archivado":"Desarchivado","ok")}catch{N("No se pudo guardar","err")}}}function Dp(n){const e=!!n;ne(e?"Editar gasto":"Nuevo gasto",t=>{const r=o("input",{value:n?.concepto||"",placeholder:"Concepto"}),i=o("input",{type:"number",step:"0.01",value:n?.importe??"",placeholder:"Importe €"}),s=Cu(q("config"));for(const w of(q("gastos")||[]).map(T=>T.categoria).filter(Boolean))s.includes(w)||s.push(w);const c=o("select",{style:"flex:1;"},s.map(w=>o("option",{value:w},w)));c.value=n?.categoria||"personal";const l=o("input",{type:"checkbox"});l.checked=n?!!n.deducible:yo(c.value),c.addEventListener("change",()=>{e||(l.checked=yo(c.value))});const u=o("button.btn.btn-sm",{type:"button",onclick:async()=>{const w=(window.prompt("Nueva categoría de gasto")||"").trim().toLowerCase();if(!w)return;[...c.options].some(R=>R.value===w)||c.append(o("option",{value:w},w)),c.value=w,e||(l.checked=yo(w));const T={...q("config")||{}},C=Cu(T);if(!C.includes(w)){T.categorias_gasto=[...C,w];try{await Z("config",T)}catch{N("No se pudo guardar la categoría","err")}}}},"+ nueva"),h=o("div",{style:"display:flex;gap:6px;align-items:center;"},[c,u]),f=o("select",{},[o("option",{value:"manual"},"Manual"),o("option",{value:"domiciliado"},"Domiciliado")]);f.value=n?.metodo||"manual";const m=o("textarea",{rows:2,placeholder:"Notas"},n?.notas||""),g=o("input",{type:"checkbox"});g.checked=!!n?.recurrente;const _=o("input",{type:"date",value:n?.fecha||X()}),E=o("div",{},$e("Fecha",_)),I=o("select",{},["mensual","trimestral","anual","semanal"].map(w=>o("option",{value:w},w)));I.value=n?.frecuencia||"mensual";const k=o("input",{type:"number",step:"1",value:n?.diaCobro??1,placeholder:"Día (1-31 o 0-6 semanal)"}),V=o("input",{type:"date",value:n?.fechaInicio||X()}),j=o("input",{type:"date",value:n?.fechaFin||""}),U=o("div",{},[o("div.field-grid",{},[$e("Frecuencia",I),$e("Día de cobro",k)]),o("div.field-grid",{},[$e("Fecha inicio",V),$e("Fecha fin (opc.)",j)])]),$=()=>{E.hidden=g.checked,U.hidden=!g.checked};g.addEventListener("change",$);const W=o("input",{type:"number",step:"0.01",value:n?.baseImponible??"",placeholder:"Base imponible (opc.)"}),x=o("input",{type:"number",step:"1",value:n?.tipoIVA??21,placeholder:"% IVA"}),A=o("input",{type:"number",step:"0.01",value:n?.ivaSoportado??"",placeholder:"IVA soportado (auto si vacío)"}),y=async()=>{if(!r.value.trim()){N("Falta el concepto","err");return}const w=parseFloat(i.value)||0;if(!w||w<=0){N("Falta el importe","err");return}const T=c.value,C=(q("gastos")||[]).map(b=>({...b})),R=b=>(b.concepto=r.value.trim(),b.importe=w,b.categoria=T,b.deducible=l.checked,b.metodo=f.value||"manual",b.notas=m.value.trim(),b.recurrente=g.checked,b.recurrente?(b.frecuencia=I.value||"mensual",b.diaCobro=k.value!==""?parseInt(k.value,10):1,b.fechaInicio=V.value||X(),b.fechaFin=j.value||null,delete b.fecha):(b.fecha=_.value||X(),delete b.frecuencia,delete b.diaCobro,delete b.fechaInicio,delete b.fechaFin),W.value!==""?(b.baseImponible=parseFloat(W.value),b.tipoIVA=parseFloat(x.value)||21,b.ivaSoportado=A.value!==""?parseFloat(A.value):parseFloat((b.baseImponible*b.tipoIVA/100).toFixed(2))):(delete b.baseImponible,delete b.tipoIVA,delete b.ivaSoportado),b);if(e){const b=C.find(oe=>oe.id===n.id);if(!b){N("Gasto no encontrado","err");return}R(b)}else{const b=R({id:le(),pagos:[],facturaDrive:null});C.push(b)}try{await Z("gastos",C),N(e?"Gasto guardado":"Gasto creado","ok"),t()}catch{N("No se pudo guardar","err")}};return $(),o("div",{},[$e("Concepto",r),o("div.field-grid",{},[$e("Importe €",i),$e("Categoría",h)]),o("div.field-grid",{},[o("div.field",{},[o("label",{},"Deducible"),o("div",{style:"display:flex;align-items:center;gap:6px;height:34px;"},[l,o("span.small.muted",{},"IVA/IRPF")])]),$e("Método",f)]),o("div.field",{},[o("label",{},"Recurrente"),o("div",{style:"display:flex;align-items:center;gap:6px;height:34px;"},[g,o("span.small.muted",{},"se repite en el tiempo")])]),E,U,o("div.section-label",{style:"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:10px 0 4px;"},"IVA (opcional)"),o("div.field-grid",{},[$e("Base imponible",W),$e("% IVA",x)]),$e("IVA soportado",A),$e("Notas",m),o("div.btn-row",{},[o("button.btn",{onclick:t},"Cancelar"),o("button.btn.btn-primary",{onclick:y},e?"Guardar":"Crear")])])})}function Jw(n){ne("Marcar pagado",e=>{const t=Ps([n],$u(-90),$u(120)).filter(h=>!h.pagado);if(!t.length)return o("div",{},[o("div.small.muted",{},"No hay ocurrencias pendientes de este gasto."),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cerrar")])]);const r=X(),i=t.find(h=>h.fecha===r)||t[0],s=o("select",{},t.map(h=>o("option",{value:h.fecha},`${h.fecha} · ${D(h.importe)}`)));s.value=i.fecha;const c=Object.keys((q("capital")||{}).cuentas||{});c.includes("revolut")||c.unshift("revolut");const l=o("select",{},c.map(h=>o("option",{value:h},h)));l.value="revolut";const u=async()=>{try{await Xw(n.id,s.value,l.value),N(`Pagado "${n.concepto}"`,"ok"),e()}catch{N("No se pudo registrar el pago","err")}};return o("div",{},[o("div.hero",{},[o("div.hero-label",{},n.concepto),o("div.hero-value",{},D(n.importe))]),o("div.field-grid",{},[$e("Ocurrencia",s),$e("Cuenta",l)]),o("div.small.muted",{},"Resta de la cuenta y añade un movimiento en el historial de capital, idéntico al bot."),o("div.btn-row",{},[o("button.btn",{onclick:e},"Cancelar"),o("button.btn.btn-primary",{onclick:u},"Confirmar pago")])])})}async function Xw(n,e,t){const r=X(),i=t||"revolut",s=(q("gastos")||[]).map(f=>({...f,pagos:(f.pagos||[]).slice()})),c=s.find(f=>f.id===n);if(!c)throw new Error("gasto no encontrado");const l=c.importe;c.pagos||(c.pagos=[]),c.pagos=c.pagos.filter(f=>f.fecha!==e),c.pagos.push({fecha:e,fechaPago:r,importe:l,cuenta:i});const u=q("capital")||{cuentas:{},historial:[]},h={...u,cuentas:{...u.cuentas||{}},historial:(u.historial||[]).slice()};h.cuentas[i]=(h.cuentas[i]||0)-l,h.historial.push({id:le(),tipo:"gasto",cuenta:i,importe:-l,concepto:`Gasto: ${c.concepto}`,fechaISO:r}),await pi({gastos:s,capital:h})}function Zw(n){const e=(n.pagos||[]).length>0,t=(n.pagos||[]).reduce((r,i)=>r+(i.importe||0),0);ne("Eliminar gasto",r=>o("div",{},[o("div.hero",{},[o("div.hero-label",{},n.concepto),o("div.hero-value",{},D(n.importe))]),e?o("div.card",{style:"border-color:var(--gold);"},o("div.row-sub",{style:"color:var(--gold);font-size:11px;"},`Tiene ${n.pagos.length} pago(s): se devolverán ${D(t)} al capital (reverso).`)):o("div.small.muted",{},"Se eliminará el gasto."),o("div.btn-row",{},[o("button.btn",{onclick:r},"Cancelar"),o("button.btn.btn-danger",{onclick:async()=>{try{await eI(n.id),N("Gasto eliminado","ok"),r()}catch{N("No se pudo eliminar","err")}}},"Eliminar")])]))}async function eI(n){const e=X(),t=q("gastos")||[],r=t.find(c=>c.id===n);if(!r)throw new Error("gasto no encontrado");let i=0;const s={};if((r.pagos||[]).length>0){const c=q("capital")||{cuentas:{},historial:[]},l={...c,cuentas:{...c.cuentas||{}},historial:(c.historial||[]).slice()};r.pagos.forEach(u=>{l.cuentas[u.cuenta]=(l.cuentas[u.cuenta]||0)+u.importe,i+=u.importe}),l.historial.push({id:le(),tipo:"reverso_gasto",cuenta:r.pagos[0].cuenta,importe:i,concepto:`Reverso: ${r.concepto}`,fechaISO:e}),s.capital=l}s.gastos=t.filter(c=>c.id!==r.id),s.capital?await pi(s):await Z("gastos",s.gastos)}function $e(n,e){return o("div.field",{},[o("label",{},n),e])}function Co(n,e){return o("div.kpi",{},[o("div.kpi-v",{},n),o("div.kpi-l",{},e)])}const Qe={anio:null,trim:null};function tI(n,e){if(!e.cargado.gastos||!e.cargado.facturas_emitidas){n.append(o("div.spinner"));return}const t=new Date;Qe.anio==null&&(Qe.anio=t.getFullYear(),Qe.trim=Math.floor(t.getMonth()/3)+1);const r=e.gastos||[],i=e.facturas_emitidas||[];n.append(o("div.card",{style:"border-color:var(--gold);"},o("div.row-sub",{style:"color:var(--gold);font-size:11px;"},"⚠ Estimación — la presentación oficial la hace el gestor."))),n.append(Vp(r,i))}function Vp(n,e){const t=o("div"),r=o("div.card"),i=o("select",{},[Qe.anio-2,Qe.anio-1,Qe.anio,Qe.anio+1].map(u=>o("option",{value:u},String(u))));i.value=String(Qe.anio);const s=o("select",{},[1,2,3,4].map(u=>o("option",{value:u},`Q${u}`)));s.value=String(Qe.trim);const c=()=>{Qe.anio=parseInt(i.value,10),Qe.trim=parseInt(s.value,10);const u=Vp(n,e);t.replaceWith(u)};i.addEventListener("change",c),s.addEventListener("change",c),r.append(o("div.card-head",{},[o("h3",{},"Trimestre"),o("button.link",{onclick:()=>iI()},"+ Factura emitida")])),r.append(o("div.field-grid",{},[Pt("Año",i),Pt("Trimestre",s)])),t.append(r);const l=vE(n,e,Qe.anio,Qe.trim);return t.append(nI(l)),t.append(rI(e)),t}function nI(n){const e=o("div.card");return e.append(o("div.card-head",{},[o("h3",{},`Resumen ${n.trimestre}`),o("span.small.muted",{},`plazo ${n.plazo}`)])),e.append(o("div.hero",{},[o("div.hero-label",{},"Total a provisionar"),o("div.hero-value",{},n.total_provisionar),o("div.hero-sub",{},`${n.rango.desde} → ${n.rango.hasta}`)])),e.append(o("div.section-label",{style:Ro()},"Modelo 303 · IVA")),e.append(St("IVA repercutido",D(n.modelo_303.repercutido))),e.append(St("IVA soportado",D(n.modelo_303.soportado))),e.append(St(n.modelo_303.resultado.startsWith("A DEVOLVER")?"A devolver":"A ingresar",D(Math.abs(parseFloat(n.modelo_303.cuota))),n.modelo_303.cuota>=0?"neg":"pos")),e.append(o("div.section-label",{style:Ro()},"Modelo 130 · IRPF")),e.append(St("Base ingresos",D(n.modelo_130.base_ingresos))),e.append(St("Base gastos",D(n.modelo_130.base_gastos))),e.append(St("Rendimiento neto",D(n.modelo_130.rendimiento))),e.append(St("Pago fraccionado (20%)",D(n.modelo_130.cuota),"neg")),e.append(o("div.section-label",{style:Ro()},"Detalle")),e.append(St(`Facturas emitidas (${n.facturas.cantidad})`,`base ${D(n.facturas.base)} · IVA ${D(n.facturas.iva_repercutido)}`)),e.append(St(`Gastos deducibles (${n.gastos.cantidad})`,`base ${D(n.gastos.base)} · IVA ${D(n.gastos.iva_soportado)}`)),n.gastos.nota&&e.append(o("div.small.muted",{style:"margin-top:4px;"},n.gastos.nota)),e}function rI(n){const e=o("div.card");e.append(o("div.card-head",{},o("h3",{},"Facturas emitidas del trimestre")));const{desde:t,hasta:r}=gE(`${Qe.anio}-${String((Qe.trim-1)*3+1).padStart(2,"0")}-01`),i=n.filter(s=>s.fecha>=t&&s.fecha<=r).sort((s,c)=>(c.fecha||"").localeCompare(s.fecha||""));if(!i.length)return e.append(o("div.card-empty",{},"Sin facturas este trimestre")),e;for(const s of i)e.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},[s.concepto||"(sin concepto)",s.numeroFactura?o("span.chip",{style:"margin-left:6px;"},s.numeroFactura):null]),o("div.row-sub",{},`${s.fecha} · ${s.cliente||"s/cliente"} · base ${D(s.baseImponible)} + ${_e(s.tipoIVA||21,0)}% IVA`)]),o("div.row-right",{},[o("div.amount",{},D(s.total)),o("div",{style:"margin-top:4px;"},o("button.btn.btn-sm.btn-danger",{onclick:()=>sI(s.id)},"Borrar"))])]));return e}function iI(){ne("Nueva factura emitida",n=>{const e=o("input",{value:"",placeholder:"Concepto"}),t=o("input",{value:"",placeholder:"Cliente"}),r=o("input",{value:"personal",placeholder:"proyectoId"}),i=o("input",{type:"number",step:"0.01",value:"",placeholder:"Base imponible €"}),s=o("input",{type:"number",step:"1",value:21,placeholder:"% IVA"}),c=o("input",{type:"date",value:X()}),l=o("input",{value:"",placeholder:"Nº factura"}),u=o("div.small.muted",{style:"margin-top:4px;"}),h=()=>{const m=parseFloat(i.value)||0,g=parseFloat(s.value)||21,_=parseFloat((m*g/100).toFixed(2));u.textContent=`IVA ${D(_)} · Total ${D(m+_)}`};[i,s].forEach(m=>m.addEventListener("input",h)),h();const f=async()=>{if(!e.value.trim()){N("Falta el concepto","err");return}const m=parseFloat(i.value)||0,g=parseFloat(s.value)||21,_=parseFloat((m*g/100).toFixed(2)),E={id:le(),concepto:e.value.trim(),cliente:t.value.trim(),proyectoId:r.value.trim()||"personal",baseImponible:m,tipoIVA:g,ivaRepercutido:_,total:parseFloat((m+_).toFixed(2)),fecha:c.value||X(),numeroFactura:l.value.trim()},I=(q("facturas_emitidas")||[]).slice();I.push(E);try{await Z("facturas_emitidas",I),N("Factura registrada","ok"),n()}catch{N("No se pudo guardar","err")}};return o("div",{},[Pt("Concepto",e),o("div.field-grid",{},[Pt("Cliente",t),Pt("proyectoId",r)]),o("div.field-grid",{},[Pt("Base imponible €",i),Pt("% IVA",s)]),u,o("div.field-grid",{},[Pt("Fecha",c),Pt("Nº factura",l)]),o("div.btn-row",{},[o("button.btn",{onclick:n},"Cancelar"),o("button.btn.btn-primary",{onclick:f},"Registrar")])])})}async function sI(n){const e=(q("facturas_emitidas")||[]).filter(t=>t.id!==n);try{await Z("facturas_emitidas",e),N("Factura eliminada","ok")}catch{N("No se pudo guardar","err")}}function Pt(n,e){return o("div.field",{},[o("label",{},n),e])}function Ro(){return"font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:1.5px;margin:12px 0 4px;"}function St(n,e,t){return o("div.row",{},[o("div.row-main",{},o("div.row-label",{},n)),o("div.row-right",{},o("div.amount"+(t?"."+t:""),{},e))])}const oI=[["patrimonio","Patrimonio"],["cobros","Cobros y pagos"],["gastos","Gastos"],["fiscal","Fiscal"]];let Nr="patrimonio";function aI(n,e={}){n.append(o("h1.section-title",{},"Finanzas"));const t=o("div.subtabs"),r=o("div");n.append(t),n.append(r);const i={capital:null,config:null,patrimonio_hist:null,cobrospagos:null,gastos:null,trabajadores:null,trabajos:null,facturas_emitidas:null,cargado:{}},s=()=>{Ce(t);for(const[u,h]of oI)t.append(o("button.subtab"+(Nr===u?".active":""),{onclick:()=>{Nr=u,s()}},h));Ce(r),Nr==="patrimonio"?cI(r,i):Nr==="cobros"?jw(r,i):Nr==="gastos"?Kw(r,i):tI(r,i)},c=u=>qe(u,h=>{i[u]=h,i.cargado[u]=!0,s()}),l=[c("capital"),c("config"),c("patrimonio_hist"),c("cobrospagos"),c("gastos"),c("trabajadores"),c("trabajos"),c("facturas_emitidas")];return s(),()=>l.forEach(u=>u())}function cI(n,e){if(!e.cargado.capital||!e.cargado.config){n.append(o("div.spinner"));return}const t=e.capital||{cuentas:{},historial:[]},r=t.cuentas||{},i=e.config||{},s=dp(r);n.append(o("div.hero",{},[o("div.hero-label",{},"Patrimonio (sin impuestos)"),o("div.hero-value",{},D(s)),o("div.hero-sub",{},`${Object.keys(r).length} cuenta${Object.keys(r).length===1?"":"s"}`)]));const c=Object.keys(r);for(const[l,u]of ic){const h=c.filter(g=>hp(i,g)===l);if(!h.length&&l!==""||!h.length)continue;const f=h.reduce((g,_)=>g+(Number(r[_])||0),0),m=o("div.card");m.append(o("div.card-head",{},[o("h3",{},u),o("span.amount",{},D(f))]));for(const g of h)m.append(lI(g,r[g],s,i));n.append(m)}n.append(o("div.btn-row",{},[o("button.btn.btn-sm.btn-primary",{onclick:()=>hI()},"+ Cuenta")])),n.append(pI(e,r)),n.append(gI(r,i)),n.append(Op(t))}function lI(n,e,t,r){const i=n===rc,s=t>0&&!i?(Number(e)||0)/t*100:null,c=o("select",{style:"font-size:9px;padding:2px 4px;background:var(--s2);border:1px solid var(--border);border-radius:5px;color:var(--text2);"},ic.map(([l,u])=>o("option",{value:l},u)));return c.value=hp(r,n),c.addEventListener("change",()=>uI(n,c.value)),o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},[n,i?o("span.chip",{style:"margin-left:6px;"},"fuera del total"):null]),o("div.row-sub",{},c)]),o("div.row-right",{},[o("div.amount",{},D(e)),o("div.small.muted",{},s==null?"—":`${_e(s,1)}%`),o("div",{style:"display:flex;gap:6px;margin-top:4px;justify-content:flex-end;"},[o("button.btn.btn-sm",{onclick:()=>dI(n,e)},"Editar")])])])}async function uI(n,e){const t={...q("config")||{}};t.grupos_cuentas={...t.grupos_cuentas||{}},e?t.grupos_cuentas[n]=e:delete t.grupos_cuentas[n];try{await Z("config",t)}catch{N("No se pudo guardar el grupo","err")}}function dI(n,e){ne(`Cuenta · ${n}`,t=>{const r=o("input",{value:n,placeholder:"Nombre de la cuenta"}),i=o("input",{type:"number",step:"0.01",value:e??0,placeholder:"Saldo €"}),s=async()=>{const c=r.value.trim();if(!c){N("Falta el nombre","err");return}const l=q("capital")||{cuentas:{}},u={...l.cuentas||{}},h=parseFloat(i.value)||0;if(c!==n){if(u[c]!=null){N("Ya existe una cuenta con ese nombre","err");return}delete u[n],u[c]=h}else u[n]=h;const f={capital:{...l,cuentas:u}};if(c!==n){const m={...q("config")||{}};let g=!1;m.grupos_cuentas&&m.grupos_cuentas[n]!=null&&(m.grupos_cuentas={...m.grupos_cuentas},m.grupos_cuentas[c]=m.grupos_cuentas[n],delete m.grupos_cuentas[n],g=!0),m.reparto_pcts&&m.reparto_pcts[n]!=null&&(m.reparto_pcts={...m.reparto_pcts},m.reparto_pcts[c]=m.reparto_pcts[n],delete m.reparto_pcts[n],g=!0),g&&(f.config=m)}try{await Z("capital",f.capital),f.config&&await Z("config",f.config),N("Cuenta guardada","ok"),t()}catch{N("No se pudo guardar","err")}};return o("div",{},[sn("Nombre",r),sn("Saldo €",i),o("div.small.muted",{},"El saldo se fija directamente (como actualizar_capital). No genera movimiento en el historial."),o("div.btn-row",{},[o("button.btn",{onclick:t},"Cancelar"),o("button.btn.btn-primary",{onclick:s},"Guardar")])])})}function hI(){ne("Nueva cuenta",n=>{const e=o("input",{placeholder:"Nombre (p. ej. revolut)"}),t=o("input",{type:"number",step:"0.01",value:0,placeholder:"Saldo inicial €"}),r=o("select",{},ic.map(([s,c])=>o("option",{value:s},c))),i=async()=>{const s=e.value.trim();if(!s){N("Falta el nombre","err");return}const c=q("capital")||{cuentas:{}},l={...c.cuentas||{}};if(l[s]!=null){N("Ya existe esa cuenta","err");return}l[s]=parseFloat(t.value)||0;try{if(await Z("capital",{...c,cuentas:l}),r.value){const u={...q("config")||{}};u.grupos_cuentas={...u.grupos_cuentas||{},[s]:r.value},await Z("config",u)}N("Cuenta creada","ok"),n()}catch{N("No se pudo guardar","err")}};return o("div",{},[sn("Nombre",e),o("div.field-grid",{},[sn("Saldo inicial",t),sn("Grupo",r)]),o("div.btn-row",{},[o("button.btn",{onclick:n},"Cancelar"),o("button.btn.btn-primary",{onclick:i},"Crear")])])})}function pI(n,e){const t=o("div.card"),r=(n.patrimonio_hist||[]).slice().sort((h,f)=>(h.mes||"").localeCompare(f.mes||""));if(t.append(o("div.card-head",{},[o("h3",{},"Histórico"),o("button.link",{onclick:()=>mI(e)},"Cerrar mes")])),!r.length)return t.append(o("div.card-empty",{},'Sin snapshots. "Cerrar mes" guarda los saldos actuales.')),t;t.append(fI(r));const i=[];for(const h of r)for(const f of Object.keys(h.saldos||{}))i.includes(f)||i.push(f);const s=o("div",{style:"overflow-x:auto;margin-top:10px;"}),c=o("table.ftable"),l=o("tr",{},[o("th",{},"Mes"),...i.map(h=>o("th",{},h)),o("th",{},"Total")]);c.append(o("thead",{},l));const u=o("tbody");for(const h of[...r].reverse())u.append(o("tr",{},[o("td",{},h.mes),...i.map(f=>o("td",{style:"text-align:right;"},h.saldos&&h.saldos[f]!=null?D(h.saldos[f]):"·")),o("td",{style:"text-align:right;font-weight:500;"},D(h.total))]));return c.append(u),s.append(c),t.append(s),t}function fI(n){const i=n.map(E=>Number(E.total)||0),s=Math.min(...i),l=Math.max(...i)-s||1,u=i.length,h=E=>u===1?320/2:6+E*(320-2*6)/(u-1),f=E=>84-(E-s)/l*(90-2*6),m=i.map((E,I)=>`${h(I).toFixed(1)},${f(E).toFixed(1)}`).join(" "),g=document.createElementNS("http://www.w3.org/2000/svg","svg");g.setAttribute("viewBox","0 0 320 90"),g.setAttribute("width","100%"),g.setAttribute("height",90),g.setAttribute("preserveAspectRatio","none"),g.style.display="block";const _=document.createElementNS(g.namespaceURI,"polyline");_.setAttribute("points",m),_.setAttribute("fill","none"),_.setAttribute("stroke","var(--gold)"),_.setAttribute("stroke-width","1.5"),g.append(_);for(let E=0;E<u;E++){const I=document.createElementNS(g.namespaceURI,"circle");I.setAttribute("cx",h(E)),I.setAttribute("cy",f(i[E])),I.setAttribute("r","2"),I.setAttribute("fill","var(--gold2)"),g.append(I)}return g}async function mI(n){const e=pE(),t=(q("patrimonio_hist")||[]).slice(),r=t.findIndex(s=>s.mes===e),i=async()=>{const s={mes:e,saldos:{...n},total:dp(n)};r>=0?t[r]=s:t.push(s),t.sort((c,l)=>(c.mes||"").localeCompare(l.mes||""));try{await Z("patrimonio_hist",t),N(`Snapshot de ${e} guardado`,"ok")}catch{N("No se pudo guardar","err")}};r>=0?ne("Cerrar mes",s=>o("div",{},[o("div.small.muted",{},`Ya existe un snapshot de ${e}. ¿Sobrescribir con los saldos actuales?`),o("div.btn-row",{},[o("button.btn",{onclick:s},"Cancelar"),o("button.btn.btn-primary",{onclick:()=>{i(),s()}},"Sobrescribir")])])):i()}function gI(n,e){const t=o("div.card");t.append(o("div.card-head",{},o("h3",{},"Reparto")));const r=Object.keys(n).filter(m=>m!==rc),i={...e.reparto_pcts||{}},s=o("input",{type:"number",step:"0.01",placeholder:"Importe a repartir €"}),c={},l=o("div"),u=o("div.small",{style:"margin-top:6px;"}),h=()=>{const m=parseFloat(s.value)||0;let g=0;for(const E of r){const I=parseFloat(c[E].pct.value)||0;g+=I,c[E].out.textContent=D(m*I/100)}const _=Math.round(g*100)/100;u.textContent=`Suma de %: ${_e(_,1)}%`+(_===100?" ✓":" — ⚠ no suman 100"),u.style.color=_===100?"var(--green)":"var(--red)"};for(const m of r){const g=o("input",{type:"number",step:"0.5",value:i[m]??"",placeholder:"%",style:"max-width:70px;"}),_=o("div.amount",{},D(0));g.addEventListener("input",h),c[m]={pct:g,out:_},l.append(o("div.row",{},[o("div.row-main",{},o("div.row-label",{},m)),o("div.row-right",{style:"display:flex;gap:8px;align-items:center;"},[g,_])]))}const f=async()=>{const m={...q("config")||{}};m.reparto_pcts={};for(const g of r){const _=parseFloat(c[g].pct.value)||0;_&&(m.reparto_pcts[g]=_)}try{await Z("config",m),N("Porcentajes guardados","ok")}catch{N("No se pudo guardar","err")}};return t.append(sn("Importe a repartir",s)),s.addEventListener("input",h),t.append(l),t.append(u),t.append(o("div.btn-row",{},[o("button.btn.btn-sm",{onclick:f},"Guardar %")])),h(),t}const Gt={cuenta:"",tipo:""};function Op(n){const e=o("div.card");e.append(o("div.card-head",{},o("h3",{},"Movimientos de capital")));const t=n.historial||[],r=[...new Set(t.map(h=>h.cuenta).filter(Boolean))],i=[...new Set(t.map(h=>h.tipo).filter(Boolean))],s=o("select",{},[o("option",{value:""},"Todas"),...r.map(h=>o("option",{value:h},h))]);s.value=Gt.cuenta;const c=o("select",{},[o("option",{value:""},"Todos"),...i.map(h=>o("option",{value:h},h))]);c.value=Gt.tipo;const l=()=>{Gt.cuenta=s.value,Gt.tipo=c.value;const h=Op(n);e.replaceWith(h)};s.addEventListener("change",l),c.addEventListener("change",l),e.append(o("div.field-grid",{},[sn("Cuenta",s),sn("Tipo",c)]));let u=t.filter(h=>(!Gt.cuenta||h.cuenta===Gt.cuenta)&&(!Gt.tipo||h.tipo===Gt.tipo));if(u=u.slice().sort((h,f)=>(f.fechaISO||"").localeCompare(h.fechaISO||"")).slice(0,50),!u.length)return e.append(o("div.card-empty",{},"Sin movimientos")),e;for(const h of u){const f=Number(h.importe)||0;e.append(o("div.row",{},[o("div.row-main",{},[o("div.row-label",{},h.concepto||h.tipo),o("div.row-sub",{},`${h.fechaISO||"—"} · ${h.cuenta||""} · ${h.tipo||""}`)]),o("div.row-right",{},o("div.amount"+(f>=0?".pos":".neg"),{},D(f)))]))}return e}function sn(n,e){return o("div.field",{},[o("label",{},n),e])}const So=[{id:"hoy",label:"Hoy",icono:"◒",render:bE},{id:"trabajos",label:"Trabajos",icono:"▤",render:GE},{id:"clientes",label:"Clientes",icono:"☺",render:Fw},{id:"equipo",label:"Equipo",icono:"⚒",render:xE},{id:"finanzas",label:"Finanzas",icono:"€",render:aI}];let oa="hoy",xi=null;function aa(n){if(typeof xi=="function"){try{xi()}catch{}xi=null}oa=n;const e=So.find(r=>r.id===n)||So[0];oE(So,oa,aa);const t=document.getElementById("appMain");Ce(t),xi=e.render(t,{nav:aa})}function Ms(n,e=!1){const t=document.getElementById("loginEstado");t&&(t.textContent=n||"",t.style.color=e?"var(--red)":"var(--text2)")}iE();document.getElementById("btnTema").addEventListener("click",sE);document.getElementById("btnLogin").addEventListener("click",()=>Zb(Ms));document.getElementById("btnLogout").addEventListener("click",()=>tE());Ms("Comprobando sesión…");eE(Ms);Xb(n=>{const e=document.getElementById("loginScreen"),t=document.getElementById("appScreen");n?(wu(n.uid),Ms(""),e.hidden=!0,t.hidden=!1,document.getElementById("userAvatar").src=n.photoURL||"",document.getElementById("userName").textContent=(n.displayName||"").split(" ")[0]||"Rubén",aa(oa)):(wu(null),t.hidden=!0,e.hidden=!1)});
