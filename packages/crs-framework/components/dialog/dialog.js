import{loadHTML as n}from"./../../src/load-resources.js";class c extends HTMLElement{#e=[];#a=this.#l.bind(this);#t={close:this.#c.bind(this),resize:this.#n.bind(this)};constructor(){super(),this.attachShadow({mode:"open"})}async connectedCallback(){this.shadowRoot.innerHTML=await n(import.meta.url),await this.load(),await crs.call("component","notify_ready",{element:this})}load(){return new Promise(e=>{this.shadowRoot.addEventListener("click",this.#a),e()})}async disconnectedCallback(){const e=this.shadowRoot.querySelector(".popup");await crs.call("dom_interactive","disable_move",{element:e}),this.shadowRoot.removeEventListener("click",this.#a),this.#a=null,await crs.binding.translations.delete("dialog"),this.#e=null;for(const t of Object.keys(this.#t))this.#t[t]=null;this.#t=null}async#l(e){const a=e.composedPath()[0].dataset.action;if(a==null)return;if(this.#t[a]!=null)return this.#t[a](e);const s=this.#e[this.#e.length-1];s.action=a,s.event=e;try{await s.options.callback?.(s)}finally{delete s.action,delete s.event}}async#n(){this.classList.toggle("fullscreen");const e=this.classList.contains("fullscreen")?"close-fullscreen":"open-fullscreen";this.shadowRoot.querySelector("#btnResize").textContent=e;const t=this.classList.contains("fullscreen")?"disable_move":"enable_move",a=this.shadowRoot.querySelector(".popup");await crs.call("dom_interactive",t,{element:a,move_query:"header"})}async#c(){await this.#i()}async#s(e){return new Promise(async t=>{const{header:a,main:s,footer:l,options:i}=e;await crs.call("component","on_ready",{element:this,caller:this,callback:async()=>{await this.#o(a,i),await this.#d(l),await this.#h(s),await this.#r(i),requestAnimationFrame(async()=>{await this.#u(i),t()})}})})}async#r(e){if(e?.allowMove===!0&&e?.showHeader===!0){const t=this.shadowRoot.querySelector(".popup");await crs.call("dom_interactive","enable_move",{element:t,move_query:"header"})}if(this.dataset.allowMove=e?.allowMove===!0?"true":"false",this.dataset.allowResize=e?.allowResize===!0?"true":"false",e?.autoClose===!0){const t=await crs.call("dom","create_element",{tag_name:"div",classes:["back"],id:"back-layer",dataset:{action:"close"}});this.shadowRoot.appendChild(t)}e?.minWidth!=null&&this.style.setProperty("--min-width",e.minWidth),e?.minHeight!=null&&this.style.setProperty("--min-height",e.minHeight)}async#o(e,t){const a=this.shadowRoot.querySelector("header");if(t?.showHeader===!1){a.innerHTML="";return}if(t?.severity!=null&&(a.dataset.severity=t.severity),e!=null){a.replaceChildren(e);return}const s={title:t?.title??"",close:t?.closeText??"Close",resize:t?.resizeText??"Resize"};await crs.binding.translations.add(s,"dialog"),await crs.binding.translations.parseElement(a)}async#h(e){if(e==null)return;let t=this.querySelector("[slot=body]");if(t==null&&(t=document.createElement("div"),t.setAttribute("slot","body"),this.appendChild(t)),typeof e=="string"){t.textContent=e;return}t.appendChild(e)}async#d(e){const t=this.shadowRoot.querySelector("footer");t.innerHTML="",e!=null&&t.appendChild(e)}async#u(e){const t=this.shadowRoot.querySelector(".popup");if(e?.target==null)return await crs.call("fixed_position","set",{element:t,container:e?.parent,position:"center-screen",margin:10});await crs.call("fixed_layout","set",{target:e.target,element:t,container:e.parent,at:e.position.toLowerCase(),anchor:e.anchor.toLowerCase(),margin:e.margin})}async#i(){const e=this.#e.pop();if(e.action="close",e.options.callback&&e.options.callback(e),this.#e.length==0)return await crs.call("dialog","force_close",{});const t=this.#e[this.#e.length-1];return await this.#s(t),!0}async show(e,t,a,s,l){const i={header:e,main:t,footer:a,options:s};this.#e.push(i),await this.#s(i),l!=null&&await crs.binding.parsers.parseElements(this.children,l),s?.callback!=null&&s.callback!==!1&&(i.action="loaded",await s.callback(i),delete i.action)}async close(){for(const e of this.children)await crs.binding.utils.unmarkElement(e);return await this.#i()}}customElements.define("dialog-component",c);export{c as Dialog};
