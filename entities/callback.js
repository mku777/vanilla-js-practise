
// function doMath(a, b, callback) {
//  const result = callback(a, b);
//     return result;
// };

// function fnSumm(a, b) {
//  return a + b;
// };

// console.log(doMath(5, 15, fnSumm));

// const button = document.querySelector("button");

// const fn =() => console.log("clicked");


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


// const makeShef = function (name) {
//   const makeDish = function (dish) {
//    console.log(`${name} готовит ${dish}`);
//   }
//   return makeDish;
// }

// const Max = makeShef('Max');
// Max('potato')
// console.dir(Max);

// const Ann = makeShef("Ann");
// Ann('meat')



// const objA = {
//   x: 5,
//   showX() {
//     console.log(this.x);

//     const objB = {
//       y: 10,
//       showThis() {
//         console.log('this objB', this);
//       }
//     }
//  objB.showThis();
//   }
// };

// objA.showX();




