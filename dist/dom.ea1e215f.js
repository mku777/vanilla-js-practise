parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fRxd":[function(require,module,exports) {
function e(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}var t=document.querySelector("input"),n=document.querySelector("[data-create]"),r=document.querySelector("[data-destroy]"),c=document.querySelector("#boxes");function o(t){c.innerHTML="";for(var n=0;n<t;n+=1){var r=document.createElement("div"),o=30+10*n;r.style.width="".concat(o,"px"),r.style.height="".concat(o,"px"),r.style.backgroundColor=e(),c.append(r)}}n.addEventListener("click",function(e){t.value,o(t.value),t.value=""}),r.addEventListener("click",function(e){c.innerHTML=""});
},{}]},{},["fRxd"], null)
//# sourceMappingURL=/dom.ea1e215f.js.map