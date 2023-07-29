

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



const playlist = {
  album: "The Fat of the Land",
  tracks: ["track1", "track2", "track3", "track4", "track5", "track6"],
  trackCount: 6,
  rating: 10,
  year: "1997",
  genre: "rave",
};

const artistEl = document.createElement("div");
