!function(){var t={443:function(t,e,n){var r;console.log("sprite.js"),(r=n(169)).keys().forEach(r),fetch("https://cdn.jsdelivr.net/gh/olhajduk/labinven@gh-pages/sprite.svg").then((function(t){return t.text()})).then((function(t){document.getElementById("sprite").innerHTML=t}))},81:function(t,e,n){"use strict";n.r(e),e.default={id:"icon-bottle-usage",viewBox:"0 0 64 114",url:n.p+"sprite.svg#icon-bottle",toString:function(){return this.url}}},424:function(t,e,n){"use strict";n.r(e),e.default={id:"icon-sampler-usage",viewBox:"0 0 73 95",url:n.p+"sprite.svg#icon-sampler",toString:function(){return this.url}}},255:function(t,e,n){"use strict";n.r(e),e.default={id:"icon-valve-usage",viewBox:"0 0 51 31",url:n.p+"sprite.svg#icon-valve",toString:function(){return this.url}}},169:function(t,e,n){var r={"./icon-bottle.svg":81,"./icon-sampler.svg":424,"./icon-valve.svg":255};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=169}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t}(),function(){"use strict";n(443),console.log("working!")}()}();