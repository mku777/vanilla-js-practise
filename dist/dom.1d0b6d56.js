// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRandomHexColor;

// addEventListener('click', (evt) => {
//     const navRef = document.querySelector("ul");
//     console.log(navRef);
//     const navLinksRef = navRef.querySelector("li");
//     console.log(navLinksRef);
// })
// const mainButton = document.createElement("button");
// mainButton.classList.add('btn-primary');
// mainButton.textContent = "super button";
// console.log(mainButton);
// const imageEl = document.querySelector(".hero-image");
// const navAllEl = document.querySelector(".site__nav--list");
// navAllEl.addEventListener("click", () => {
//     navAllEl.classList.toggle("super-band");
// })
// const newListEl = document.createElement("li");
// newListEl.textContent = "Emperor";
// navAllEl.appendChild(newListEl);
// navAllEl.insertBefore(mainButton, navAllEl.firstChild);
// const colorPicker = [
//   {
//     label: "DarkRed",
//     color: "#8B0000",
//   },
//   {
//     label: "HotPink",
//     color: "#FF69B4",
//   },
//   {
//     label: "DarkGreen",
//     color: "#006400",
//   },
//   {
//     label: "LightSeaGreen",
//     color: "#20B2AA",
//   },
//   {
//     label: "DarkMagenta",
//     color: "#8B008B",
//   },
// ];
// const pickerWrap = document.querySelector("div");
// pickerWrap.classList.add("picker-wrap");
// console.log(pickerWrap);
// const elements = colorPicker.map(picker => {
//     const buttonPicker = document.createElement("button");
//     buttonPicker.type = "button";
//     buttonPicker.classList.add("picker");
//     buttonPicker.textContent = picker.label;
//     buttonPicker.style.backgroundColor = picker.color;
//     return buttonPicker;
// })
// for (let i = 0; i < colorPicker.length; i++) {
//
//   const picker = colorPicker[i];
//   buttonPicker.type = "button";
//   buttonPicker.classList.add("picker");
//   buttonPicker.textContent = picker.label;
//   buttonPicker.style.backgroundColor = picker.color;
//   elements.push(buttonPicker);
// }
// function makeColorPickerOptions(options) {
//     return options.map((picker) => {
//       const buttonPicker = document.createElement("button");
//       buttonPicker.type = "button";
//       buttonPicker.classList.add("picker");
//       buttonPicker.textContent = picker.label;
//       buttonPicker.style.backgroundColor = picker.color;
//       return buttonPicker;
//     });
// }
// const elements = makeColorPickerOptions(colorPicker);
// console.log(elements);
// pickerWrap.append(...elements);
// const playlist = {
//   album: "The Fat of the Land",
//   tracks: ["track1", "track2", "track3", "track4", "track5", "track6"],
//   trackCount: 6,
//   rating: 10,
//   year: "1997",
//   genre: "rave",
// };
// const artistEl = document.querySelector(".artistEl");
// const albumEl = document.createElement("p");
// const tracksEl = document.createElement("p");
// const countEl = document.createElement("p");
// albumEl.textContent = playlist.album;
// tracksEl.textContent = playlist.tracks;
// countEl.textContent = playlist.trackCount;
// artistEl.append(albumEl, tracksEl, countEl);
// console.log(artistEl);
// const categoriesEL = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categoriesEL.length}`);
// categoriesEL.forEach(item => {
//   const titleEl = item.querySelector("h2");
//   console.log(`Category: ${titleEl.textContent}`);
//   const liEl = item.querySelectorAll("li");
//   console.log(`Elements : ${liEl.length}`);
// });
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
// const ulEl = document.querySelector("#ingredients");
// ingredients.map((item) => {
//   const itemElements = document.createElement("li");
//   itemElements.className = 'item';
//   itemElements.textContent = item;
//   console.log(itemElements)
//   ulEl.append(itemElements);
// });
// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];
// const ulEl = document.querySelector(".gallery");
// console.log(ulEl);
// const gallery = images.map(({ url, alt }) => {
//   return `<li><img src=${url} alt=${alt} width="250"></img></li>`;
// });
// ulEl.insertAdjacentHTML("beforeend", gallery);
// ulEl.style.flexDirection = "column";
// const incrementButton = document.querySelector("[data-action=increment");
// const decrementButton = document.querySelector("[data-action=decrement");
// const valueCounter = document.querySelector("#value");
// let value = 0;
// incrementButton.addEventListener("click", () => {
//   value += 1;
//   valueCounter.textContent = value;
// });
// decrementButton.addEventListener("click", () => {
//   value -= 1;
//   valueCounter.textContent = value;
// });
// const inputEl = document.querySelector("#name-input");
// const spanEl = document.querySelector("#name-output");
// inputEl.addEventListener("input", (e) => {
//   spanEl.textContent = e.currentTarget.value;
//   if (e.currentTarget.value === "") {
//     spanEl.textContent = 'Anonymous';
//   }
// })
// const inputEl = document.querySelector("#validation-input");
// let dataEl = inputEl.dataset.length;
// console.log(dataEl);
// inputEl.addEventListener("blur", () => {
//   if (inputEl.value.length !== Number(dataEl)) {
//     return inputEl.classList.add("invalid");
//   }
//   inputEl.classList.remove("invalid");
//   return inputEl.classList.add("valid");
// });
// console.log(inputEl);
// const inputEl = document.querySelector("#font-size-control");
// const textEl = document.querySelector("#text");
// inputEl.addEventListener("input", (e) => {
//  textEl.style.fontSize = `${e.currentTarget.value}px`;
// });
// const loginFormRef = document.querySelector(".login-form");
// loginFormRef.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const email = e.currentTarget.email.value;
//   const password = e.currentTarget.password.value;
//   if (email && password) {
//     const userObject = {
//       email,
//       password,
//     };
// document.querySelector(".login-form").reset();
//     return console.log(userObject);
//   }
//   window.alert("Please fill all fields");
//     document.querySelector(".login-form").reset();
// });
// const changeColorButton = document.querySelector(".change-color");
// const backgroundColor = document.querySelector(".color");
// const bodyColor = document.querySelector("body");
// changeColorButton.addEventListener("click", () => {
//   bodyColor.style.backgroundColor = getRandomHexColor();
//   backgroundColor.textContent = bodyColor.style.backgroundColor;
// });
function getRandomHexColor() {
  return "#".concat(Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0));
} // const inputEl = document.querySelector("input");
// const createButton = document.querySelector("[data-create]");
// const destroyButton = document.querySelector("[data-destroy]");
// const boxesEl = document.querySelector("#boxes");
// createButton.addEventListener("click", (e) => {
//   inputEl.value;
//   createBoxes(inputEl.value);
//     inputEl.value = "";
// });
// destroyButton.addEventListener("click", (e) => {
// boxesEl.innerHTML = "";
// })
// function createBoxes(amount) {
//   boxesEl.innerHTML = "";
//   let basicSize = 30;
//   for (let i = 0; i < amount; i += 1) {
//     const box = document.createElement("div");
//     let size = basicSize + i * 10;
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxesEl.append(box);
//   }
// }
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62313" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","dom.js"], null)
//# sourceMappingURL=/dom.1d0b6d56.js.map