/*!
 * /*
 * taucharts@2.7.2 (2019-04-22)
 * Copyright 2019 Targetprocess, Inc.
 * Licensed under Apache License 2.0
 * * /
 * 
 */
!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("taucharts"));else if("function"==typeof define&&define.amd)define(["taucharts"],r);else{var t="object"==typeof exports?r(require("taucharts")):r(e.Taucharts);for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(window,function(e){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var u=r[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var u in e)t.d(n,u,function(r){return e[r]}.bind(null,u));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=29)}({0:function(r,t){r.exports=e},29:function(e,r,t){"use strict";t.r(r);var n=t(0),u=t.n(n),i=u.a.api.utils;function o(e){var r=i.defaults(e||{},{verbose:!1,forceBrush:{}}),t={init:function(e){r.verbose&&(this.panel=e.insertToRightSidebar(this.template())),e.traverseSpec(e.getSpec(),function(e){e&&"COORDS.PARALLEL"===e.type&&(e.guide=e.guide||{},e.guide.enableBrushing=!0)}),t.forceBrush=r.forceBrush||{}},onRender:function(e){var n=e.getSpec().scales,u=Object.keys(n).reduce(function(e,r){var u=n[r].dim;return t.forceBrush[u]&&(e[r]=t.forceBrush[u]),e},{}),i=e.select(function(e){return"PARALLEL/ELEMENT.LINE"===e.config.type});i.forEach(function(e,n){e.parentUnit.on("brush",function(u,i){t.forceBrush={};var o=i.map(function(e){var r=e.dim,n=e.func,u=e.args;t.forceBrush[r]=u;var i=function(){return!0};return"between"===n&&(i=function(e){return e[r]>=u[0]&&u[1]>=e[r]}),"inset"===n&&(i=function(e){return u.indexOf(e[r])>=0}),i}),a=0;if(e.fire("highlight",function(e){var r=o.every(function(r){return r(e)});return a+=r?1:0,r}),r.verbose){var c=t.panel.getElementsByClassName("i-"+n);if(0===c.length){var f=document.createElement("div");f.className="i-"+n,t.panel.appendChild(f),c[0]=f}c[0].innerHTML=i.reduce(function(e,r){return e+"<div>"+r.dim+": ["+r.args.join(",")+"]</div>"},"<div>Matched: "+a+"</div>")}})}),i.forEach(function(e){e.parentUnit.fire("force-brush",u)})},template:i.template('<div class="tau-chart__chart_brushing_panel"></div>')};return t}u.a.api.plugins.add("parallel-brushing",o),r.default=o}})});