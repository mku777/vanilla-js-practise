
// function doMath(a, b, callback) {
//  const result = callback(a, b);
//     return result;
// };

// function fnSumm(a, b) {
//  return a + b;
// };

// console.log(doMath(5, 15, fnSumm));

// const button = document.querySelector("button");

// function fn() {
//   console.log("clicked");
// }
// console.log(setTimeout(fn, 3000));
// button.addEventListener("click", fn);


// fetch("https://pokeapi.co/api/v2/pokemon").then(res => res.json()).then(onSuccess, onError);

// function onSuccess(good) {
//   console.log("yahoo");
//   console.log(good);
// }

// function onError(err) {
//     console.log('sad');
//     console.log(err)
// }



// const isAlbum = [
//   { name: "Pluto", year: 2023, status: "got" },
//   { name: "Mars", year: 1998, status: "on the way" },
//   { name: "Moon", year: 2003, status: "have" },
//   { name: "Uran", year: 2015, status: "have" },
// ];

// function filter(arr, test) {
//   const filteredArr = [];
//   for (const num of arr) {
//       if (test(num)) {
//         filteredArr.push(num);
//       }
//   }
//   return filteredArr;
// };

// function biggerNum(arr) {
//   if (arr.status === "got") {
//     return arr.name;
//   }
// }

// console.log(filter(isAlbum, biggerNum));


const makeDish = function (name, dish) {
  console.log(`${name} готовит ${dish}`);
}



makeDish('Max', 'borsch')
makeDish("Ann", "meat");
makeDish("Jara", "cherry");
makeDish("Thorin", "chiken");









