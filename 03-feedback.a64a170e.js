function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,v=function(){return l.Date.now()};function b(e,t,n){var o,r,i,a,u,f,c=0,l=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function T(e){return c=e,u=setTimeout(j,t),l?y(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=i}function j(){var e=v();if(h(e))return w(e);u=setTimeout(j,function(e){var n=t-(e-f);return d?m(n,i-(e-c)):n}(e))}function w(e){return u=void 0,b&&o?y(e):(o=r=void 0,a)}function S(){var e=v(),n=h(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return T(f);if(d)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=g(t)||0,p(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(g(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},S.flush=function(){return void 0===u?a:w(v())},S}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),T=document.querySelector(".feedback-form textarea");y.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),e.target.reset();new FormData(e.currentTarget.value).forEach(((e,t)=>{console.log("onFormSubmit => name",t),console.log("onFormSubmit => name",e)}))})),T.addEventListener("input",e(t)((function(e){const t=e.currentTarget.value;localStorage.setItem("feedback-form-state",t)}),500));!function(){const e=localStorage.getItem("feedback-form-state");e&&(T.value=e)}();
//# sourceMappingURL=03-feedback.a64a170e.js.map
