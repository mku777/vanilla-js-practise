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
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const inputEl = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");


createButton.addEventListener("click", (e) => {
  inputEl.value;
  createBoxes(inputEl.value);
    inputEl.value = "";
});

destroyButton.addEventListener("click", (e) => {
boxesEl.innerHTML = "";
})

function createBoxes(amount) {
  boxesEl.innerHTML = "";
  let basicSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    let size = basicSize + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesEl.append(box);
  }
}

