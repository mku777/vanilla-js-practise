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