!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");t.addEventListener("click",(function(e){t.setAttribute("disabled","");setInterval((function(){t.hasAttribute("disabled")&&(o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)))}),1e3)})),e.addEventListener("click",(function(e){t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.e1310617.js.map
