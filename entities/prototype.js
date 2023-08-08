// const counter = {
//     value: 0,
//     increment() {
//         console.log(this)
//         this.value += 1;
//     },
//     decrement() {
//         console.log(this)
//         this.value -= 1;
//     },
// }

// const inButton = document.querySelector(".increment");
// const deButton = document.querySelector(".decrement");
// const count = document.querySelector(".counterValue");

// inButton.addEventListener("click", function () {
//     console.log('клик увеличить');
//     counter.increment()
//     count.textContent = counter.value;
// });

// deButton.addEventListener("click", function () {
//   console.log("клик уменьшить");
//   counter.decrement();
//   count.textContent = counter.value;
// });


// const Box = function( {width, height, color} ) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
// }
// Box.prototype.colorChange = function (newColor) {
//     this.color = newColor;
// }

// const myBox = new Box({
//     width: 200,
//     height: 100,
//     color: "black",
// })

// myBox.colorChange('white')

// console.log(myBox);



// const CounterPlugin = function ({
//   rootSelector,
//   initialValue = 0,
//   step = 1,
// } = {}) {
//   this._value = initialValue;
//   this._step = step;
//   this._refs = this._getRefs(rootSelector);
//     this._bindEvents();

//     console.log(this._refs);
// };

// CounterPlugin.prototype._getRefs = function (rootSelector) {
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);
//   refs.incrementButton = refs.container.querySelector("[data-increment]");
//   refs.decrementButton = refs.container.querySelector("[data-decrement]");
//   refs.value = refs.container.querySelector("[data-value]");
//   return refs;
// };

// CounterPlugin.prototype._bindEvents = function () {
//   this._refs.incrementButton.addEventListener("click", () => {
//       this.increment();
//       this.updateValue();
//     // this._refs.value.textContent = this._value;
//   });

//   this._refs.decrementButton.addEventListener("click", () => {
//     console.log();
//       this.decrement();
//       this.updateValue();
//     // this._refs.value.textContent = this._value;;
//   });
// };

// CounterPlugin.prototype.updateValue = function () {
//    this._refs.value.textContent = this._value;
// };


// CounterPlugin.prototype.increment = function () {
//   this._value += this._step;
// };

// CounterPlugin.prototype.decrement = function () {
//   this._value -= this._step;
// };

// const counterFirst = new CounterPlugin({
//   rootSelector: "#counter1",
//   step: 10,
// });


// const Character = function (config) {
//   const { priority, race, clas, name, gender, itemLevel } = config;
//   this.priority = priority;
//   this.race = race;
//   this.clas = clas;
//   this.name = name;
//   this.gender = gender;
//   this.itemLevel = itemLevel;
// };


// Character.password = function () {
//     console.log("Password")
// }

// Character.password('123123123')
// console.dir(Character)

// Character.prototype.changeItemLevel = function (newItemLevel) {
//     this.itemLevel = newItemLevel;
// };
  

// const myCharacter = new Character({
//   priority: "main",
//   race: "Orc",
//   clas: "Hunter",
//   name: "Vindsval",
//   gender: "male",
//   itemLevel: 241,
// });
// myCharacter.changeItemLevel(250);

// console.log(myCharacter);

// const myCharacter2 = new Character({
//   priority: "twink",
//   race: "Blood Elf",
//   clas: "Paladin",
//   name: "Dodheim",
//   gender: "male",
//   itemLevel: 222,
// });

// console.log(myCharacter2);


// class Character {
//   constructor({ priority, race, name, gender } = {}) {
//     this.priority = priority;
//     this.race = race;
//     this.name = name;
//     this.gender = gender;
//   }
// }

// class Hunter extends Character {
//   constructor({ arrowsCount, ...restProps }) {
//     super(restProps);

//     this._arrowsCount = arrowsCount;
//   }
//   set arrowsCount(count) {
//     this._arrowsCount = count;
//   }
// }

// const vindsval = new Hunter({priority : "main", race : "orc", name : "Vindsval", gender : "male", arrowsCount : 2000});
// vindsval.arrowsCount = 3500;

// console.log(vindsval);

// class Mage extends Character {
//   constructor({spells, ...restProps }) {
//     super(restProps);
//     this.spells = spells;
//   }
//   set spell(spell) {
//     this.spell = spells;
//   }
// }

// const darkspace = new Mage({ priority: "twink", race: "undead", name: "Darkspace", gender: "male", spells : 'fireball'})
// console.log(darkspace);

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     const toDelete = this.items.indexOf(itemToRemove);
//     this.items.splice(toDelete, 1);
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");

// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// class StringBuilder {
//   constructor(initialValue) {
//       this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value = `${this.value} + ${str}`;
//   }
//   padStart (str) {
//     this.value = str + this.value;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="






