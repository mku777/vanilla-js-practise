// const lenght = family.length - 1;
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


const numbers = [2, 4, 6, 8, 10, 13, 14, 15];

const filteredNumbers = numbers.filter((number) => number > 10);

console.log(filteredNumbers);
