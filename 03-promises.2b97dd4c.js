!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("h6c0i"),i={form:document.querySelector("form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),btnSubmit:document.querySelector('button[type="submit"]')};function c(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}console.log("refs",i),i.form.addEventListener("submit",(function(e){e.preventDefault();for(var t=Number(e.currentTarget.elements.delay.value),n=Number(e.currentTarget.elements.step.value),o=Number(e.currentTarget.elements.amount.value),i=1;i<=o;i+=1){var u=t+n*(i-1);console.log(u),c(i,u).then((function(e){var t=e.position,n=e.delay;r.Notify.success("Fulfilled promise ".concat(t," in ").concat(n,"ms")),console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;r.Notify.failure("Rejected promise ".concat(t," in ").concat(n,"ms")),console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}))}e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.2b97dd4c.js.map