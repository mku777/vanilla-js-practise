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



const lazyImages = document.querySelectorAll('img[loading="lazy"]');


lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, {once: true} )
})

function onImageLoaded(evt) {
  evt.target.classList.add('appear')
} 