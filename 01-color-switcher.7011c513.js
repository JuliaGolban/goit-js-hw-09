!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");console.dir(e);var o=null,r=!1;e.addEventListener("click",(function(){r||(o=setInterval((function(){e.disabled=!0,n.disabled=!1,t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3))})),n.addEventListener("click",(function(){return clearInterval(o),r=!1,n.disabled=!0,e.disabled=!1,t.style.backgroundColor}))}();
//# sourceMappingURL=01-color-switcher.7011c513.js.map
