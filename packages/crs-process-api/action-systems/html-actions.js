class u{static async perform(a,t,r,s){await this[a.action]?.(a,t,r,s)}static async get(a,t,r,s){if(a.args.url!=null)return a.args.template!=null?await this.#t(a,t,r,s):await this.#a(a,t,r,s);if(a.args.schema!=null)return await this.#r(a,t,r,s);if(a.args.function!=null)return await this.#s(a,t,r,s);if(a.args.markdown!=null)return await crs.call("markdown","to_html",a.args,t,r,s)}static async template_from_file(a,t,r,s){const e=await crs.process.getValue(a.args.url,t,r,s),l=await fetch(e).then(c=>c.text()),n=document.createElement("template");return n.innerHTML=l,a.args.target!=null&&await crs.process.setValue(a.args.target,n,t,r,s),n}static async create(a,t,r,s){const e=a.args.html.indexOf("<")==-1?await crs.process.getValue(a.args.html,t,r,s):a.args.html,l=await crs.process.getValue(a.args.ctx,t,r,s),n=await crs.call("string","inflate",{parameters:l,template:e},t,r,s),c=document.createElement("template");c.innerHTML=n;const i=c.content;return a.args.target!=null&&await crs.process.setValue(args.target,i,t,r,s),i}static async#a(a,t,r,s){const e=await crs.process.getValue(a.args.url,t,r,s);return await fetch(e).then(l=>l.text())}static async#t(a,t,r,s){const e=await crs.process.getValue(a.args.template,t,r,s),l=await crs.process.getValue(a.args.url,t,r,s);return await crs.binding.templates.get(e,l)}static async#r(a,t,r,s){let e=await crs.process.getValue(a.args.schema,t,r,s);return typeof e=="string"&&(e=await fetch(e).then(l=>l.json())),schema?.parser?.parse(e)}static async#s(a,t,r,s){const e=await crs.process.getValue(a.args.function,t,r,s),l=await crs.process.getValue(a.args.parameters||[],t,r,s);return await e(...l)}}crs.intent.html=u;export{u as HtmlActions};
