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
})({"entities/arrays.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = 555; // const lenght = family.length - 1;
// console.log(family[3]);
// console.table(family);
// for (let i = 0; i <= family.length -1; i += 1) {
//     family[i] += ' homies';
// }
// for (const famil of family) {
//     console.log(famil);
// }
// найти сумму
// const cart = [1, 2, 3, 4, 5, 6, 7, 8];
// let totalSum = 0;
// for (let i = 0; i < cart.length; i += 1) {
//     if (cart[i] % 2 === 0) {
//       totalSum += cart[i];
//     }
// }
// for (let num of cart) {
//     if (num % 2 == 0) {
//       totalSum += num;
//     }
// }
// console.log(totalSum);
// const logins = ["Ann", "Max", "Jara", "Thorin"];
// const loginToFind = 'Jara';
// for (let i = 0; i < logins.length; i += 1) {
//     if (logins[i].includes(loginToFind)) {
//         console.log('мы нашли логин', loginToFind);
//         break;
//   }
//   console.log(i);
// }
// const search = logins.includes(loginToFind) ? 'мы нашли логин' : 'не нашли логин'; 
// console.log(search);
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let minNumber = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//     if (minNumber < numbers[i]) {
//         minNumber = numbers[i];
//     }
// }
//   console.log(minNumber);
// const logins = ["Ann", "Max", "Jara", "Thorin"];
// let newString = '';
// for (let i = 0; i < logins.length; i++) {
//     newString += `${logins[i]} ,`;
// }
// newString = newString.slice(logins[0], newString.length - 1);
// // newString = logins.join(', ');
//   console.log(newString);
// const string = 'JavaScript';
// let upperString = string.toUpperCase().split('');
// console.log(upperString); 
// for (let i = 0; i < upperString.length; i += 1) {
//   if (upperString[i] === string[i]) {
//     upperString[i] = upperString[i].toLowerCase();
//     const newString = upperString.join("");
//     console.log(newString);
//   }
// }
// let newString = string.split('')
// console.log(newString);
// for (const letter of newString) {
//     if (letter) {
//         letter.toLowerCase();
//     } 
// }
// const title = 'Top 10 benefits of React framework';
// let newurl = title.toLowerCase().split(' ').join('-'); +
// console.log(newurl);
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// const newarray = array1.concat(array2);
// console.log(newarray);
// let array3 = 0;
// for (let i = 0; i < newarray.length; i++) {
//   array3 += newarray[i];
// }
//   console.log(array3);
// const cards = ['card1', 'card2', 'card3', 'card4', 'card5'];
// const el = cards.indexOf('card3');
// const cardToRemove = cards.splice(el, 1)
// console.log(cards);
// const cardTOInsert = 'Ann';
// const index = cards.splice(3, 0, cardTOInsert);
// console.log(cards)
// const cardToUpdate = 'card2'
// const upd = cards.splice(1, 1, "lol");
// console.log(cards);
// const numbers = [2, 4, 6, 8, 10, 13, 14, 15];
// const newArr = numbers.forEach( (number, index, array) => {
//    return console.log(`${number} plus ${index}`);
// })
// const doubleNumbers = numbers.map((number) => number *= 2);
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// const newNames = products.map(
//     product => (product.price = Math.round(product.price * 1.1))
// );
// console.log(newNames);
// const nameToUpdate = "Droid";
// const droidToUpdate = products.map((product) => {
//   if (nameToUpdate === product.name) {
//     return {
//       ...product,
//       quantity: (product.quantity += 3),
//     };
//   }
//   return product;
// });
// console.log(droidToUpdate);
// const numbers = [2, 4, 6, 8, 10, 13, 14, 15];
// const filteredNumbers = numbers.filter((number) => number > 10);
// console.log(filteredNumbers);
// const products = [
//   { name: "Radar", price: 1300, quantity: 4, isOn: true },
//   { name: "Scanner", price: 2700, quantity: 3, isOn: false },
//   { name: "Droid", price: 400, quantity: 7, isOn: true },
//   { name: "Grip", price: 1200, quantity: 9, isOn: false },
// ];
// const priceCheck = products.every(product => {
//     return product.price > 50;
// })
// console.log(priceCheck);
// const numbers = [2, 4, 6, 8, 10, 13, 14, 15];
// const total = numbers.reduce((acc, number) => {
//     console.log('acc ==>', acc)
//     console.log('number ==>', number);
//     return acc + number;
// }, 0)
// console.log('total ==>', total)
// const salary = {
//     max: 100,
//     ann: 150,
//     thorin: 300,
// }
// const total = Object.values(salary).reduce((acc, number) => {
// return acc + number
// }, 0)
// console.log('total ==>', total)
// const products = [
//   {
//     name: "Radar",
//     price: 1300,
//     quantity: 4,
//     isOn: true,
//     tags: ["earth, moon, mars, neprune"],
//   },
//   {
//     name: "Scanner",
//     price: 2700,
//     quantity: 3,
//     isOn: false,
//     tags: ["earth, moon, mars, venera"],
//   },
//   {
//     name: "Droid",
//     price: 400,
//     quantity: 7,
//     isOn: true,
//     tags: ["moon, mars, neptune"],
//   },
//   {
//     name: "Grip",
//     price: 1200,
//     quantity: 9,
//     isOn: false,
//     tags: ["earth, moon, mars, saturn"],
//   },
// ];
// const tags = products.reduce((tag, product) => {
//     tag.push(...product.tags);
//     return tag;
// }, [])
// console.log(tags);
// const numbers = [2, 30, 6, 8, 1, 13, 14, 4];
// // numbers.sort();
// console.log(numbers);
// // const letters = ['a', 'b', 'c', 'd', 'D', 'f', 'b', 'k', 'A', 'j', 'K'];
// // letters.sort();
// // console.log(letters);
// const sortArr = [...numbers].sort((currentEl, nextEl) => {
//     return currentEl - nextEl;
// });
// const sortedArr = [...products].sort((currentEl, nextEl) => {
//     const result = nextEl.name[0] < currentEl.name[0];
//     if (result) {
//         return 1;
//     }
//     if (!result) {
//         return -1;
//     }
// })
// console.log(sortedArr);
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => {
//     return array.indexOf(genre) === index;
// })
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// const topRatedBooks = books.filter(book => {
//     return MIN_RATING <= book.rating;
// });
// console.log(topRatedBooks);
// const booksByAuthor = books.filter(book => {
//     return AUTHOR === book.author;
// })
// console.log(booksByAuthor);
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//     }
// ]
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter((user) => user.gender === gender)
//     .reduce((totalBalance, user) => totalBalance + user.balance, 0);
// }
// console.log(getTotalBalanceByGender(users, 'female'));
// const getSortedFriends = (users) => {
//   return users.flatMap((user) => user.friends)
//     .filter((friend, index, arr) => arr.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));
//  };
// console.log(getSortedFriends(users));
// const getNamesSortedByFriendCount = (users) => {
//   return [...users].sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name);
//  };
// console.log(getNamesSortedByFriendCount(users));
// const sortByName = (users) => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };
// console.log(sortByName(users));
// const getTotalFriendCount = (users) => {
//     return users.reduce((acc, user) => acc + user.friends.length, 0);
// };
// console.log(getTotalFriendCount(users));
// const calculateTotalBalance = (users) => {
//     return users.reduce((acc, user) => acc + user.balance, 0);
// };
// console.log(calculateTotalBalance(users));
// const getUsersWithFriend = (users, friendName) => {
// return users.filter(user => user.friends.includes(friendName))
// }
// console.log(getUsersWithFriend(users, "Briana Decker"));
// const getFriends = (users) => {
//     const allFriends = users.flatMap(user => user.friends);
//    return allFriends.filter((friend, index, array) => {
//         return array.indexOf(friend) === index;
//     })
// };
// console.log(getFriends(users));
// const getActiveUsers = (users) => {
//     return users.filter((users) => users.isActive);
// };
// console.log(getActiveUsers(users));
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players);
// const totalPlayTime = playtimes.reduce((acc, player) => {
//     return acc + player;
// }, 0)
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// const totalAveragePlaytimePerGame = players.reduce((sum, player) => {
//     const average = player.playtime / player.gamesPlayed;
//     console.log(average);
//     return sum + average;
// }, 0)
// console.log(totalAveragePlaytimePerGame);
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line
// const names = [...books]
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .map((book) => book.author);
//   console.log(names);
// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author)
// );
// const sortedByAscendingRating = [...books].sort((a, b) =>
//   a.rating - b.rating)
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.log(sortedByAuthorName)
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);
exports.default = _default;
},{}],"bubbling.js":[function(require,module,exports) {
"use strict";

var _arrays = _interopRequireDefault(require("./entities/arrays"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
console.log(_arrays.default);

// const refs = {
//   parrent: document.querySelector("#parent"),
//   child: document.querySelector("#child"),
//   innerChild: document.querySelector("#inner-child"),
// };

// refs.parrent.addEventListener("click", (e) => {
//   console.log("parrent clicked");
//   console.log("e target ->", e.target);
//   console.log("e currentTarget ->", e.currentTarget);
// });

// refs.child.addEventListener("click", (e) => {
//   console.log("child clicked");
//   console.log("e target ->", e.target);
//   console.log("e currentTarget ->", e.currentTarget);
// });

// refs.innerChild.addEventListener("click", (e) => {
//   console.log("inner child clicked");
//   console.log("e target ->", e.target);
//   console.log("e currentTarget ->", e.currentTarget);
// });

// const buttonsEL = document.querySelector('.js-container');

// buttonsEL.addEventListener('click', (e) => {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   console.log(e.target.textContent);
//  });

// const tagsEl = document.querySelector(".js-tags");
// let selectedTag = null;

// function onTagsClick(e) {
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const currentActiveButton = document.querySelector(".tags-btn--active");

//   if (currentActiveButton) {
//     currentActiveButton.classList.remove("tags-btn--active");
//   }

//   e.target.classList.add("tags-btn--active");
//   selectedTag = e.target.dataset.value;
//   console.log(selectedTag);
// }

// tagsEl.addEventListener("click", onTagsClick);

// const colors = [
//   { hex: "#ff4000", rgb: "255, 64, 0" },
//   { hex: "#ff8000", rgb: "255, 128, 0" },
//   { hex: "#ffbf00", rgb: "255, 128, 0" },
//   { hex: "#ffbf00", rgb: "255, 191, 0" },
//   { hex: "#ffff00", rgb: "255, 255, 0" },
//   { hex: "#bfff00", rgb: "191, 255, 0" },
//   { hex: "#80ff00", rgb: "128, 255, 0" },
//   { hex: "#40ff00", rgb: "64, 255, 0" },
// ];

// const palette = document.querySelector(".palette");
// const markUp = markupCreate(colors);

// palette.insertAdjacentHTML("afterbegin", markUp);

// function markupCreate(colors) {
//   return colors
//     .map((color) => {
//       return `
//   <div class="color-card">
//     <div
//       class="color-swatch"
//       data-hex= "${color.hex}"
//       data-rgb= "${color.rgb}"
//       style="background-color: ${color.hex}"
//     ></div>
//     <div class="color-meta">
//       <p><b>HEX</b> : ${color.hex}</p>
//       <p><b>RGB</b> : ${color.rgb}</p>
//     </div>
//   </div>

// `;
//     })
//     .join("");
// }

// palette.addEventListener('click', colorPicker)

// function colorPicker(e) {
//   if (!e.target.classList.contains("color-swatch")) {
//     return;
//   }
//    console.log("colorPicker");
// }

// const cordsElement = document.querySelector(".js-coords");
// console.log(cordsElement);
// const throttledOn = _.throttle(onMouseMove, 200);

// let mouseMove = 0;

// window.addEventListener("mousemove", throttledOn);

// function onMouseMove(e) {
//   mouseMove += 1;

//   console.log(e);

//   cordsElement.textContent = `
//   Кол-во вызовов ${mouseMove}, X: ${e.clientX},
//   Y : ${e.clientY}`;
// }

// const inputEl = document.querySelector('.js-input')
// const outputEl = document.querySelector('.js-output')
// let inputCounter = 0;

// inputEl.addEventListener('input', _.debounce(onInputChange, 500));

// function onInputChange(e) {
//   inputCounter += 1;

//   console.log(e);

//   outputEl.textContent = `Кол-во вызовов: ${inputCounter};
//   значение: ${e.target.value}`;

// }

// const bands = [
//   { label: 'Emperor' },
//   { label: 'Funeral Mist' },
//   { label: 'Marduk' },
//   { label: 'Gorgoroth' },
//   { label: 'Dark Funeral' },
//   { label: 'Mayhem' },
//   { label: 'Nile' },
//   { label: 'Napalm Death' },
//   { label: 'Wormed' },
//   { label: 'Ulcerate' },
//   { label: 'Ved Buens Ende' },
//   { label: 'Dodheimsgard' },
//   { label: 'Immortal' },
//   { label: 'Isahn' },
//   { label: 'Leprous' },
//   { label: 'Shining' },
//   { label: 'Code' },
//   { label: 'Lifelover' },
//   { label: 'Abyssic Hate' },
//   { label: 'Gojira' },
// ];

// const listEl = document.querySelector('.js-list');
// const filterEL = document.querySelector('#filter');
// const markList = markUp(bands);
// listEl.innerHTML = markList;

// filterEL.addEventListener("input", _.debounce(onFilter, 500));

// function onFilter(e) {
//   const filter = e.target.value.toLowerCase();
//   const filteredItems = bands.filter(band => band.label.toLowerCase().includes(filter));
//   const filteredMarkUp = markUp(filteredItems);
//   listEl.innerHTML = filteredMarkUp;

// }

// function markUp(items) {
//   return items.map(item => `<li>${item.label}</li>`).join("");
// }

var lazyImages = document.querySelectorAll('img[loading="lazy"]');
lazyImages.forEach(function (image) {
  image.addEventListener("load", onImageLoaded, {
    once: true
  });
});
function onImageLoaded(evt) {
  evt.target.classList.add("appear");
}
},{"./entities/arrays":"entities/arrays.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64149" + '/');
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
      });

      // Enable HMR for CSS by default.
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
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","bubbling.js"], null)
//# sourceMappingURL=/bubbling.6b67b1c1.js.map