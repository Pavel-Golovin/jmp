!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6)},function(e,t,n){},function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=document.querySelector(".header__burger-btn"),i=document.querySelector(".main__menu"),a=document.querySelector(".overlay--menu"),l=document.querySelector(".menu__close-btn"),u=document.querySelector(".body"),s=function(){i.classList.remove("main__menu--open"),a.classList.remove("overlay--active"),u.classList.remove("body--overflow-hidden"),document.removeEventListener("keydown",d)},d=function(e){var t=r(document.querySelectorAll(".main__modal"),2),n=t[0],o=t[1];"Escape"!==e.key||n.classList.contains("main__modal--open")||o.classList.contains("main__modal--open")||s()};c.addEventListener("click",(function(){i.classList.add("main__menu--open"),a.classList.add("overlay--active"),u.classList.add("body--overflow-hidden"),a.addEventListener("click",s),l.addEventListener("click",s),document.addEventListener("keydown",d)}))},function(e,t,n){"use strict";var r,o,c,i=document.querySelector(".section__content--brands"),a=document.querySelector(".section__content--devices"),l=document.querySelector(".section__content--services"),u={slidesPerView:1.2,spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{440:{slidesPerView:2,spaceBetween:10},660:{slidesPerView:3}}},s=!1,d=function(){if(document.documentElement.clientWidth<768){if(s)return!1;r=new Swiper(i,u),o=new Swiper(a,u),c=new Swiper(l,u),s=!0}else{if(!s)return!1;r.destroy(!0,!0),o.destroy(!0,!0),c.destroy(!0,!0),s=!1}};window.onload=d,window.onresize=d},function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=document.querySelector(".overlay--modal"),i={elementCaption:"main__modal--feedback",get element(){return document.querySelector(".".concat(this.elementCaption))},get openButtons(){return document.querySelectorAll(".contacts-list__chat")},get closeButton(){return document.querySelector(".modal__close-btn--feedback")}},a={elementCaption:"main__modal--call",get element(){return document.querySelector(".".concat(this.elementCaption))},get openButtons(){return document.querySelectorAll(".contacts-list__call")},get closeButton(){return document.querySelector(".modal__close-btn--call")}},l=function(e){return function(){e.element.classList.remove("main__modal--open"),c.classList.remove("overlay--active"),e.closeButton.classList.add("modal__close-btn--hidden"),document.removeEventListener("keydown",u)}},u=function(e){var t=r(document.querySelectorAll(".modal"),2),n=t[0],o=t[1];"Escape"===e.key&&n.classList.contains("main__modal--open")&&l(i)(),"Escape"===e.key&&o.classList.contains("main__modal--open")&&l(a)()},s=function(e){var t=l(e);e.openButtons.forEach((function(n){n.addEventListener("click",(function(){!function(e){e.element.classList.add("main__modal--open"),c.classList.add("overlay--active"),e.closeButton.classList.remove("modal__close-btn--hidden"),document.addEventListener("keydown",u)}(e),c.addEventListener("click",t),e.closeButton.addEventListener("click",t)}))}))};s(i),s(a)},function(e,t,n){"use strict";var r=document.querySelectorAll(".toggle-btn"),o=[document.querySelector(".article__text"),document.querySelector(".section__content--brands"),document.querySelector(".section__content--devices")];r.forEach((function(e,t){e.addEventListener("click",(function(e){var n=e.target.classList.contains("article__read-more")?"Читать далее":"Показать всё";this.innerText=this.innerText===n?"Скрыть":n,this.classList.toggle("toggle-btn--reversed"),o[t].classList.toggle("show-all")}))}))}]);
//# sourceMappingURL=bundle.js.map