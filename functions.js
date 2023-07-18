// function find(allLogins, loginToFind) {
// return allLogins.includes(loginToFind)? `${loginToFind} был найден`:`${loginToFind} не найден`
    
  
//     // }

//     // if (allLogins.includes(loginToFind)) {
//     //   return  `${loginToFind} был найден`;
//     // }
//     // return `${loginToFind} не найден`
// }


// console.log(find(logins, 'Ann'));
// console.log(find(logins, "Jara"));
// console.log(find(logins, "Thin"));



// const numbers = [51, 18, 13, 24, 7, 85, 19];

// function min(array) {
//   let minNumber = array[0];

//   for (let i = 0; i < array.length; i++) {
//     if (minNumber > array[i]) {
//       minNumber = array[i];
//       }
//     }
//         return minNumber;
// }

// console.log(min([ 18, 13, 24, 7, 85, 19]));


// const string = 'JavaScript';
// let upperString = string.toUpperCase().split('');


// for (let i = 0; i < upperString.length; i += 1) {
//   if (upperString[i] === string[i]) {
//     upperString[i] = upperString[i].toLowerCase();
//     const newString = upperString.join("");
//     console.log(newString);
//   }
// }

// function reverseString(string) {
//     let newString = '';
//     let upperString = string.toUpperCase().split("");

//     for (let i = 0; i < upperString.length; i += 1) {
//       if (upperString[i] === string[i]) {
//         upperString[i] = upperString[i].toLowerCase();
//           newString = upperString.join("");
//         }
//     }

//     return newString;
// }

// console.log(reverseString('JavaScript'));
// console.log(reverseString("MaRdUk"));


// const title = 'Top 10 benefits of React framework';
// let newurl = title.toLowerCase().split(' ').join('-'); +


// function getPlug(string) {
//     return string.toLowerCase().split(" ").join("-");
// }
// console.log(getPlug("Top 10 benefits of React framework"));
// console.log(getPlug("TeLL me why you are using React"));


// const fn = function (x, y, ...newArray) {
//     console.log(newArray);
//     // console.log(arguments)
//     // const args = Array.from(arguments);
//     // console.log(args);
//     // for (const arg of arguments) {
//     //     console.log(arg);
    
// }

// fn('123', 'ddd' , 3, 4, 5, 6, 7);
// fn(1, 2, 3, 4, 5)
// fn(1, 2, 3, 4, 5, 6, 7, 8, 9);


// function add(...args) {
//     let total = 0;
//     for (const num of args) {
//         total += num;
//     }
//     return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 5 ,6));


// function filter(array, ...args) {
//     let newArray = [];

//     // for (const arra of array) {
//     //     for (const ar of args) {
//     //       if (ar === arra) {
//     //           newArray.push(ar);
//     //       }
//     //     }
//     // }

//     for (const ar of array) {
//       if (args.includes(ar)) {
//         newArray.push(ar);
//       }
//     }
//     return newArray;
// }

// console.log(filter([1, 2, 3, 4, 5, 14], 5, 3, 10, 12, 14, 16));


// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);


// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//      total += i;
//   }
//     return total;
//   // Change code above this line
// }

// console.log(calculateTotal(3))

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0 ; i < fruits.length; i += 1) { // Change this line
// ; // Change this line
//   console.log(fruits[i]);
// }

// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Объявлена функция findLongestWord(string)
// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение


// function findLongestWord(string) {
  
//     let words = string.split(" ");
//     let longestWord = words[0];

//     for (let i = 0; i < words.length; i++) {
//       if (longestWord.length < words[i].length) {
//         longestWord = words[i];
//       }
//     }
//     return longestWord;
// }




// console.log(findLongestWord("Google do a roll"));


// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   return numbers;
// }


// function getCommonElements(array1, array2) {
//   // Change code below this line
// let newArray = [];
//    for (i=0; i < array1.length; i += 1) {
    
//      if (array2.includes(array1[i]) {
//        newArray.push(array1[i])
//    }
//    }
// return newArray

//  // Change code above this line
// }


// function getEvenNumbers(start, end) {
  
//     let newArray = [];

//     for (let i = start; i <= end; i += 1) {
//       if(i = 10 % 2 === 0)
//     newArray.push(i);
//     }
    
  

// }

// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));

// function includes(array, value) {
  // Change code below this line

//   for (const arr of array) {
//     if (arr === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code abov
//   // Change code above this line
// }
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// );

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   `Eating pizza ${pizzaName} пиццы>`;
// });

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);