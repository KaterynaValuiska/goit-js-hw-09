const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){o=setInterval((()=>{t.setAttribute("disabled",""),r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(e){t.removeAttribute("disabled"),clearInterval(o)}));let o=null;
//# sourceMappingURL=01-color-switcher.8fefef59.js.map