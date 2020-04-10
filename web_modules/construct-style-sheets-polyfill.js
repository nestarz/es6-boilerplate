!function(){if(!("adoptedStyleSheets"in document)){var e="ShadyCSS"in window&&!window.ShadyCSS.nativeShadow,t=[],n=[],o=new WeakMap,r=new WeakMap,a=new WeakMap,d=new WeakMap,i=new WeakMap,c={loaded:!1},l={body:null,CSSStyleSheet:null},s=CSSStyleSheet,h=/@import/,u=["addImport","addPageRule","addRule","deleteRule","insertRule","removeImport","removeRule"],p=["replace","replaceSync"],S=function(){function e(){var e=document.createElement("style");c.loaded?l.body.appendChild(e):(document.head.appendChild(e),e.disabled=!0,t.push(e));var n=e.sheet;return r.set(n,{adopters:new Map,actions:[],basicStyleElement:e}),n}var n=e.prototype;return n.replace=function(e){var t=this;return new Promise((function(n,o){if(r.has(t)){var a=r.get(t).basicStyleElement;a.innerHTML=e,n(a.sheet),g(t)}else o(new Error("Failed to execute 'replace' on 'CSSStyleSheet': Can't call replace on non-constructed CSSStyleSheets."))}))},n.replaceSync=function(e){if(h.test(e))throw new Error("@import rules are not allowed when creating stylesheet synchronously");if(r.has(this)){var t=r.get(this).basicStyleElement;return t.innerHTML=e,g(this),t.sheet}throw new Error("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")},e}();Object.defineProperty(S,Symbol.hasInstance,{configurable:!0,value:f}),v(s.prototype),window.CSSStyleSheet=S,function(){var t={configurable:!0,get:function(){return o.get(this)||[]},set:function(e){var t=o.get(this)||[];!function(e,t){var n=t===document?"Document":"ShadowRoot";if(!Array.isArray(e))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Iterator getter is not callable.");if(!e.every(f))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Failed to convert value to 'CSSStyleSheet'");var r=e.filter((function(t,n){return e.indexOf(t)===n}));o.set(t,r)}(e,this);var n=this===document?y()?this.head:this.body:this,a="isConnected"in n?n.isConnected:document.body.contains(n);window.requestAnimationFrame((function(){a&&(w(n),function(e,t){for(var n=m(e),o=0,a=t.length;o<a;o++){if(n.indexOf(t[o])>-1)return;var i=r.get(t[o]).adopters,c=d.get(e),l=i.get(e);c.disconnect(),l.parentNode.removeChild(l),c.observe()}}(n,t))}),0)}};if(Object.defineProperty(Document.prototype,"adoptedStyleSheets",t),"undefined"!=typeof ShadowRoot){var n=HTMLElement.prototype.attachShadow;HTMLElement.prototype.attachShadow=function(){var t=e?this:n.apply(this,arguments);return b(t),t},Object.defineProperty(ShadowRoot.prototype,"adoptedStyleSheets",t)}}(),y()?document.addEventListener("DOMContentLoaded",E):E()}function f(e){return e instanceof s||e instanceof l.CSSStyleSheet}function y(){return"loading"===document.readyState}function m(e){return o.get(e.parentNode===document.documentElement?document:e)}function v(e){p.forEach((function(t){e[t]=function(){return S.prototype[t].apply(this,arguments)}})),u.forEach((function(t){var n=e[t];e[t]=function(){var e=arguments,o=n.apply(this,e);if(r.has(this)){var a=r.get(this),d=a.adopters,i=a.actions;d.forEach((function(n){n.sheet&&n.sheet[t].apply(n.sheet,e)})),i.push([t,e])}return o}}))}function g(e){var t=r.get(e),n=t.adopters,o=t.basicStyleElement;n.forEach((function(e){e.innerHTML=o.innerHTML}))}function w(e){for(var t=document.createDocumentFragment(),o=m(e),c=d.get(e),l=0,s=o.length;l<s;l++){var h=r.get(o[l]),u=h.adopters,p=h.basicStyleElement,S=u.get(e);S?(c.disconnect(),t.appendChild(S),(!S.innerHTML||S.sheet&&!S.sheet.cssText)&&(S.innerHTML=p.innerHTML),c.observe()):((S=document.createElement("style")).innerHTML=p.innerHTML,a.set(S,e),i.set(S,0),u.set(e,S),t.appendChild(S)),e===document.head&&n.push(S)}e.insertBefore(t,e.firstChild);for(var f=0,y=o.length;f<y;f++){var v=r.get(o[f]),g=v.adopters,w=v.actions,C=g.get(e),b=i.get(C);if(w.length>0){for(var E=b,M=w.length;E<M;E++){var T=w[E],L=T[0],R=T[1];C.sheet[L].apply(C.sheet,R)}i.set(C,w.length-1)}}}function C(t){for(var n=0,o=t.length;n<o;n++){for(var r=t[n],d=r.addedNodes,i=r.removedNodes,c=0,l=i.length;c<l;c++){var s=a.get(i[c]);s&&w(s)}if(!e)for(var h=0,u=d.length;h<u;h++)for(var p=document.createNodeIterator(d[h],NodeFilter.SHOW_ELEMENT,(function(e){return e.shadowRoot&&e.shadowRoot.adoptedStyleSheets.length>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}),null,!1),S=void 0;S=p.nextNode();)w(S.shadowRoot)}}function b(e){var t=new MutationObserver(C),n={observe:function(){t.observe(e,{childList:!0,subtree:!0})},disconnect:function(){t.disconnect()}};d.set(e,n),n.observe()}function E(){var e=document.createElement("iframe");e.hidden=!0,document.body.appendChild(e),l.body=e.contentWindow.document.body,l.CSSStyleSheet=e.contentWindow.CSSStyleSheet,v(e.contentWindow.CSSStyleSheet.prototype),b(document.body),c.loaded=!0;for(var o=document.createDocumentFragment(),r=0,a=t.length;r<a;r++)t[r].disabled=!1,o.appendChild(t[r]);l.body.appendChild(o);for(var d=0,i=n.length;d<i;d++)o.appendChild(n[d]);document.body.insertBefore(o,document.body.firstChild),t.length=0,n.length=0}}();
//# sourceMappingURL=construct-style-sheets-polyfill.js.map
