const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(e){t.setAttribute("disabled","");setInterval((()=>{t.hasAttribute("disabled")&&(r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`)}),1e3)})),e.addEventListener("click",(function(e){t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.a428edae.js.map
