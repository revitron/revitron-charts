(()=>{"use strict";var t,e={192:(t,e,n)=>{var a=function(t,e,n,a){return new(n||(n=Promise))((function(r,i){function o(t){try{c(a.next(t))}catch(t){i(t)}}function s(t){try{c(a.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,s)}c((a=a.apply(t,e||[])).next())}))};const r=t=>a(void 0,void 0,void 0,(function*(){const e=`api/?${t}`,n=yield fetch(e);return yield n.json()})),i=t=>a(void 0,void 0,void 0,(function*(){return(yield r(`/items/${t}?sort=-timestamp&limit=250`)).data.reverse()}));const o="AppInit";class s{static get root(){return this._root}static get state(){return this._state}static get collections(){return this._state.collections}static get displayUnit(){return this._state.displayUnit}static get settings(){return this._state.settings}static init(t){return e=this,n=void 0,s=function*(){this._state.collections=yield a(void 0,void 0,void 0,(function*(){return(yield r("/collections")).data.sort(((t,e)=>t.collection>e.collection?1:-1)).filter((t=>{var e;return null===(e=t.collection)||void 0===e?void 0:e.match(/^snapshots__/i)}))})),this._state.settings=yield r("/settings"),this._root=t,this._state.displayUnit=t.getAttribute("unit")||"feet",window.dispatchEvent(new Event(o))},new((i=void 0)||(i=Promise))((function(t,a){function r(t){try{c(s.next(t))}catch(t){a(t)}}function o(t){try{c(s.throw(t))}catch(t){a(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i((function(t){t(n)}))).then(r,o)}c((s=s.apply(e,n||[])).next())}));var e,n,i,s}}s._state={};var c=n(181);const l=(t,...e)=>{let n=t.raw,a="";return e.forEach(((t,e)=>{let r=n[e];r.endsWith("$")&&(t=d(t),r=r.slice(0,-1)),a+=r+t})),a+=n[n.length-1],a},d=t=>{const e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return t.replace(/[&<>"']/g,(t=>e[t]))},h=(t,e="0 0 16 16")=>{let n;if(t instanceof Array){const e=[];t.forEach((t=>{e.push(`<path d="${t}" />`)})),n=e.join("")}else n=`<path d="${t}" />`;return l`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1em" height="1em" fill="currentColor" viewBox="${e}">${n}</svg>`},u=t=>t.replace(/^([a-z]+)__/,"").replace(/(?!^)([A-Z]+)/g," $1").replace(/_/g," ").split(" ").map((t=>t.charAt(0).toUpperCase()+t.slice(1))).join(" "),v=t=>new Date(Date.parse(t)).toLocaleDateString("en-US",{weekday:"short",year:"2-digit",month:"short",day:"numeric"});c.kL.register(c.qi,c.jn,c.ZL,c.od,c.vn,c.N0,c.jI,c.ST,c.tt,c.CV,c.Xi,c.ho,c.uw,c.f$,c.WV,c.l7,c.FB,c.RM,c.WY,c.Gu,c.De,c.Dx,c.u,c.DK);const m=t=>{const e=getComputedStyle(document.body),n=e.getPropertyValue("--card-info-clr");return{data:t,backgroundColor:e.getPropertyValue("--card-bg-chart"),borderColor:n,fill:!0,borderWidth:2,hoverBorderWidth:4,pointRadius:4,pointHoverRadius:10,pointBorderWidth:1,pointHoverBorderWidth:1,tension:.2}},p=()=>{const t=getComputedStyle(document.body),e=t.getPropertyValue("--card-info-clr"),n=t.getPropertyValue("--card-grid-clr");return{plugins:{legend:{display:!1}},scales:{x:{grid:{color:n},ticks:{color:e}},y:{grid:{color:n},ticks:{color:e,precision:0}}}}},f=t=>{const e=t.match(/^[a-z]{3}/);if(!e)return u(t);let n;switch(e[0]){case"len":n="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z";break;case"are":n="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2zm2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2.004 2.004 0 0 1 1.437-1.437V3.937A2.004 2.004 0 0 1 12.063 2.5H3.937A2.004 2.004 0 0 1 2.5 3.937zM14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z";break;case"vol":n="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z";break;case"num":n="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z";break;default:n=["M12 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM8 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z","M12 7a4 4 0 0 1-3.937 4c-.537.813-1.02 1.515-1.181 1.677a1.102 1.102 0 0 1-1.56-1.559c.1-.098.396-.314.795-.588A4 4 0 0 1 8 3a4 4 0 0 1 4 4Zm-1 0a3 3 0 1 0-3.891 2.865c.667-.44 1.396-.91 1.955-1.268.224-.144.483.115.34.34l-.62.96A3.001 3.001 0 0 0 11 7Z","M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4Z"]}return l` ${h(n)}<span>${u(t)}</span>`},g=(t,e,n,a=!1)=>{const r=["card"];let i="50vh";a&&(r.push("grid__item-span-row"),i="25vh");const o=y("div",r,{},t),s=getComputedStyle(document.body).getPropertyValue("--card-info-clr");y("div",["card__title"],{},o).innerHTML=f(e);const l=y("canvas",["chart__canvas"],{width:"100%",height:i},o);return new c.kL(l,{type:"bar",data:{datasets:[{data:n,backgroundColor:s}]},options:p()}),o},y=(t,e=[],n={},a=null)=>{const r=document.createElement(t);e.forEach((t=>{r.classList.add(t)}));for(const[t,e]of Object.entries(n))r.setAttribute(t,e);return a&&a.appendChild(r),r};var w;!function(t){t.collection="collection"}(w||(w={}));class b extends HTMLElement{constructor(){super()}connectedCallback(){const t=this.getAttribute("collection");this.classList.add("card","card--link"),this.render(t),this.addEventListener("click",(()=>{s.root.update(t)}))}render(t){return e=this,n=void 0,r=function*(){const e=yield i(t),n=e[e.length-1],a=v(n.timestamp);var r;this.innerHTML=l`<div class="card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" /></svg></div><div class="card__title">${u(t)}</div><div class="card__info">${r=n.model_size,Math.round(r/1024/1024).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")} mb<br />${a}</div>`},new((a=void 0)||(a=Promise))((function(t,i){function o(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof a?n:new a((function(t){t(n)}))).then(o,s)}c((r=r.apply(e,n||[])).next())}));var e,n,a,r}}customElements.define("rc-card",b);var _=function(t,e,n,a){return new(n||(n=Promise))((function(r,i){function o(t){try{c(a.next(t))}catch(t){i(t)}}function s(t){try{c(a.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,s)}c((a=a.apply(t,e||[])).next())}))};class M extends HTMLElement{constructor(){super()}connectedCallback(){const t=this.getAttribute("collection");this.init(t)}init(t){return _(this,void 0,void 0,(function*(){const e=yield i(t),{fieldDataSets:n,fields:a}=(t=>{const e=t[t.length-1],n=Object.keys(e).filter((t=>!t.match(/(id|timestamp)/))),a={};return n.forEach((e=>{const n={};t.forEach((t=>{n[v(t.timestamp)]=((t,e)=>{const n=e.match(/^[a-z]{3}/)[0];let a=t;if("meter"==s.displayUnit){switch(n){case"len":a=.3048*t;break;case"are":a=.092903*t;break;case"vol":a=.0283168*t;break;case"mod":a=t/1024/1024}return a}return"mod"==n&&(a=t/1024/1024),a})(t[e],e)})),a[e]=n})),{fieldDataSets:a,fields:n}})(e),r=y("h1",[],{},this),o=y("div",["grid","grid--large"],{},this),l=y("a",[],{href:""},r);l.innerHTML="←",l.addEventListener("click",(t=>{t.preventDefault(),s.root.update()})),y("span",[],{},r).textContent=u(t);const d=yield this.history(t);["syncTimes","syncCountByUser","syncTimeSumByUser","transactionsByUser"].forEach((t=>{d[t]&&o.appendChild(d[t])})),a.forEach((t=>{((t,e,n)=>{const a=y("div",["card"],{},t);y("div",["card__title"],{},a).innerHTML=f(e);const r=y("canvas",["chart__canvas"],{width:"100%",height:"50vh"},a);new c.kL(r,{type:"line",data:{datasets:[m(n)]},options:p()})})(o,t,n[t])})),d.table&&o.appendChild(d.table)}))}history(t){var e;return _(this,void 0,void 0,(function*(){const n={},a=t.replace("snapshots__","history__"),i=t=>t.sort(((t,e)=>t.y<e.y?1:-1)),o=yield r(`/items/${a}?limit=500&sort=-start_time`),s=yield r(`/items/${a}?aggregate[sum]=unique_transactions&groupBy[]=user&limit=500`),c=yield r(`/items/${a}?aggregate[sum]=sync_time&groupBy[]=user&limit=500`),d=yield r(`/items/${a}?aggregate[count]=id&groupBy[]=user&limit=500`);if(o.data){n.table=y("div",["card","grid__item-span-row"],{}),n.table.innerHTML=l`<div class="card__title"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16"><path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" /><path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" /><path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" /></svg><span>Sync History</span></div>`,n.table.appendChild((t=>{const e=y("table",[],{});try{const n=y("tr",[],{},e);Object.keys(t[0]).forEach((t=>{y("th",[],{},n).textContent=u(t)}))}catch(t){}return t.forEach((t=>{const n=y("tr",[],{},e);Object.values(t).forEach((t=>{y("td",[],{},n).textContent=t}))})),e})(o.data));const t=[];o.data.forEach((e=>{t.push({id:e.id,x:`${e.start_time} (${e.user})`,y:e.sync_time})}));const i=t.sort(((t,e)=>t.id>e.id?1:-1)),s=yield r(`/items/${a}?aggregate[avg]=sync_time`);n.syncTimes=g(null,`Sync Times &mdash; Average ${Math.round(null===(e=null==s?void 0:s.data[0].avg)||void 0===e?void 0:e.sync_time)} min.`,i,!0)}if(d.data){const t=[];d.data.forEach((e=>{t.push({x:e.user,y:parseInt(e.count.id)})}));const e=i(t);n.syncCountByUser=g(null,"Number of Syncs by User",e)}if(c.data){const t=[];c.data.forEach((e=>{t.push({x:e.user,y:parseInt(e.sum.sync_time)})}));const e=i(t);n.syncTimeSumByUser=g(null,"Summarized Sync Time by User",e)}if(s.data){const t=[];s.data.forEach((e=>{t.push({x:e.user,y:parseInt(e.sum.unique_transactions)})}));const e=i(t);n.transactionsByUser=g(null,"Transactions by User",e)}return n}))}}customElements.define("rc-collection",M);class L extends HTMLElement{constructor(){super()}connectedCallback(){this.init()}init(){const t=y("input",[],{type:"text",placeholder:"Filter"},this);t.addEventListener("keyup",(()=>{this.filter(t)}))}filter(t){const e=t.value.toLowerCase().split(" ");((t,e=document)=>Array.from(e.querySelectorAll(t)))(".card").forEach((t=>{for(var n=!1,a=0;a<e.length;a++)if(-1==t.textContent.toLowerCase().indexOf(e[a])){n=!0;break}t.style.display=n?"none":""}))}}customElements.define("rc-filter",L);class z extends HTMLElement{constructor(){super()}connectedCallback(){window.addEventListener(o,this.render.bind(this))}render(){this.classList.add("navbar");const t=`${window.location.origin}${window.location.pathname}`,e=y("div",["navbar__nav"],{},this),n=(y("rc-filter",["navbar__filter"],{},this),y("div",["navbar__nav"],{},this));y("a",["navbar__icon"],{href:t},e).innerHTML=h(" M229.49,0L0,132.32v265.65l81.5,47.36l81.5-47.36v-76.4l141.49,80.72L386,356.02v-86.05l74-43v-94.66L229.49,0 z M229.51,17.3L437.5,136.69l-148.06,86.04l74.13,42.07l-59.13,35.16L170.5,222.65l149.04-86.02l-90.07-51.64L81.5,170.98 l-59.03-34.3L229.51,17.3z M237,106.6l52.46,30.08L237,166.95V106.6z M15,389.34V149.68l59,34.28v239.65L15,389.34z M148,389.34 l-59,34.28V183.97l133-77.28v68.93l-74,42.71V389.34z M163,235.64l134,77.34v67.76L163,304.3V235.64z M312,380.77v-67.85l59-35.08 v69.45L312,380.77z M379.33,256.5l-59.77-33.92L445,149.69v68.65L379.33,256.5z ","0 0 460 445"),y("span",[],{},e).textContent=s.settings.data.project_name,y("rc-theme-toggle",[],{},n)}}customElements.define("rc-navbar",z);class k{constructor(t,e={}){t.innerHTML="",t.appendChild(this.create(e))}}class x extends k{create(t){const{collection:e}=t;return y("rc-collection",[],{collection:e})}}class E extends k{create(t){const e=y("main",[],{});y("h1",[],{},e).textContent="Projects";const n=y("div",["grid"],{},e);return s.collections.forEach((t=>{y("rc-card",[],{collection:t.collection},n)})),e}}class V extends HTMLElement{constructor(){super()}connectedCallback(){this.classList.add("container"),this.init(),window.addEventListener("popstate",this.renderView.bind(this))}update(t=""){history.pushState(null,null,`?collection=${t}`),((t,e=document)=>e.querySelector(t))("rc-filter input").value="",this.renderView()}init(){return t=this,e=void 0,a=function*(){yield s.init(this),this.renderView()},new((n=void 0)||(n=Promise))((function(r,i){function o(t){try{c(a.next(t))}catch(t){i(t)}}function s(t){try{c(a.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,s)}c((a=a.apply(t,e||[])).next())}));var t,e,n,a}renderView(){const t=new URLSearchParams(window.location.search);if(t.get(w.collection)){const e=t.get(w.collection);return document.title=`${u(e)} — ${s.settings.data.project_name}`,void new x(this,{collection:e})}document.title=`${s.settings.data.project_name}`,new E(this)}}customElements.define("rc-root",V);class C extends HTMLElement{constructor(){super(),this.darkMode=!1}connectedCallback(){this.classList.add("navbar__theme-toggle");const t=localStorage.getItem("color-scheme")||"dark";this.darkMode="dark"===t,document.documentElement.classList.toggle("dark",this.darkMode),this.addEventListener("click",(()=>{this.darkMode=!this.darkMode,localStorage.setItem("color-scheme",this.darkMode?"dark":"light"),document.documentElement.classList.toggle("dark",this.darkMode),this.render(),s.root.renderView()})),this.render()}render(){this.innerHTML=this.darkMode?h("M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"):h("M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"),this.setAttribute("title","Toggle Dark Mode")}}customElements.define("rc-theme-toggle",C)}},n={};function a(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,a),i.exports}a.m=e,t=[],a.O=(e,n,r,i)=>{if(!n){var o=1/0;for(d=0;d<t.length;d++){for(var[n,r,i]=t[d],s=!0,c=0;c<n.length;c++)(!1&i||o>=i)&&Object.keys(a.O).every((t=>a.O[t](n[c])))?n.splice(c--,1):(s=!1,i<o&&(o=i));if(s){t.splice(d--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[n,r,i]},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={179:0};a.O.j=e=>0===t[e];var e=(e,n)=>{var r,i,[o,s,c]=n,l=0;if(o.some((e=>0!==t[e]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(c)var d=c(a)}for(e&&e(n);l<o.length;l++)i=o[l],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(d)},n=self.webpackChunkrevitron_charts=self.webpackChunkrevitron_charts||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var r=a.O(void 0,[736],(()=>a(192)));r=a.O(r)})();