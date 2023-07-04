import"./busy-ui.js";class c{static async perform(e,s,t,a){await this[e.action]?.(e,s,t,a)}static async show(e,s,t,a){const n=await crs.dom.get_element(e.args.element,s,t,a),r=await crs.process.getValue(e.args.message||"",s,t,a),i=await crs.process.getValue(e.args.progress||"",s,t,a);if(n==null)return console.error(`busy-ui, unable to find element ${e.args.element}`);if(g(n),n.querySelector("busy-ui")!=null)return;const u=document.createElement("busy-ui");u.dataset.message=r,u.dataset.progress=i,n.appendChild(u)}static async update(e,s,t,a){const n=await crs.dom.get_element(e.args.element,s,t,a),r=await crs.process.getValue(e.args.message||"",s,t,a),i=await crs.process.getValue(e.args.progress||"",s,t,a),l=n.querySelector("busy-ui");l!=null&&(l.dataset.message=r,l.dataset.progress=i)}static async hide(e,s,t,a){const r=(await crs.dom.get_element(e.args.element,s,t,a)).querySelector("busy-ui");r&&r.remove()}}function g(o){const s=window.getComputedStyle(o).getPropertyValue("position");s!=="relative"&&s!=="absolute"&&(o.style.position="relative")}crs.intent.busy_ui=c;export{c as BusyUIActions};
