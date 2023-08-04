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


const colors = [
  { hex: "#ff4000", rgb: "255, 64, 0" },
  { hex: "#ff8000", rgb: "255, 128, 0" },
  { hex: "#ffbf00", rgb: "255, 128, 0" },
  { hex: "#ffbf00", rgb: "255, 191, 0" },
  { hex: "#ffff00", rgb: "255, 255, 0" },
  { hex: "#bfff00", rgb: "191, 255, 0" },
  { hex: "#80ff00", rgb: "128, 255, 0" },
  { hex: "#40ff00", rgb: "64, 255, 0" },
];

const palette = document.querySelector(".palette");
const markUp = markupCreate(colors);

palette.insertAdjacentHTML("afterbegin", markUp);

function markupCreate(colors) {
  return colors
    .map((color) => {
      return `
  <div class="color-card">
    <div
      class="color-swatch"
      data-hex= "${color.hex}"
      data-rgb= "${color.rgb}"
      style="background-color: ${color.hex}"
    ></div>
    <div class="color-meta">
      <p><b>HEX</b> : ${color.hex}</p>
      <p><b>RGB</b> : ${color.rgb}</p>
    </div>
  </div>

`;
    })
    .join("");
}

palette.addEventListener('click', colorPicker)

function colorPicker(e) {
  if (e.target.classList.contains("color-swatch")) {
   console.log("colorPicker");
 }
}