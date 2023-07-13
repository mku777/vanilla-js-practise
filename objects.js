// const playlist = {
//   artist,
//   album: "The Fat of the Land",
//   tracks: ["track1", "track2", "track3", "track4", "track5", "track6"],
//   trackCount: 6,
//   rating: 10,
//   year: "1997",
//   genre: "rave",
//   changeAlbum(newAlbum) {
//     this.album = newAlbum;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updateCount(count) {
//   this.trackCount = count;
//   }
// };

// const playArr = Object.values(playlist);

// let all = '';
// for (let i = 0; i < playArr.length; i++) {
//   all += playArr[i];
// }

// console.log (all);


// for (const member of family) {
//   family[0].age = 20;
//   family[1].age = 30;
//   family[2].age = 1.5;
//   family[3].age = 6;
// }

// console.log (family);

// const family = [
//   { name: "Ann", online: true },
//   { name: "Max", online: false },
//   { name: "Jara", online: false },
//   { name: "Thorin", online: true },
// ];

// function getByName(allfriends, name) {
//   for (const fam of family) {
//    return fam.name === name ? 'имя есть' : 'нет имени';
//   }
// };

// console.log(getByName(family, 'Ann'));
// console.log(getByName(family, "Anna"));
// getByName(family, "Ann");

// const newArr = [];
// function getAllFamily(allFam) {
//   for (const fam of family) {
//     newArr.push(fam.name);
//   }
//   return newArr;
// };

// console.log(getAllFamily(family));

// function geOnlineFriends(allFriends) {
//   const isOnline = [];
//   for (const fam of family) {
//     if (!fam.online) {
//       isOnline.push(fam);
//     }
//   }
//    return isOnline;
// }

// console.log(geOnlineFriends(family));

// function getFreindsByStatus(allFriends) {
//   const status = {
//     online: [],
//     offline: [],
//   };
//   for (const fam of allFriends) {
//     if (fam.online) status.online.push(fam);
//     else {
//       status.offline.push(fam);
//     }
//   }

//   return status;
// }

// console.log(getFreindsByStatus(family));

// const x = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
// }

// const x1 = Object.keys(x).length;
// console.log(x1);



// Shopping Cart




// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//     const newObject = {
//       ...product,
//       quantity: 1,
//     };

//     return this.items.push(newObject);
//   },
//   removeProduct(productName) {
//     const { items } = this;

//     console.log(items);
//     let newArray = [];
//     for (const item of items) {
//       newArray.push(item.name);
//     }
//     const toDelete = newArray.indexOf(productName);
//     return items.splice(toDelete, 1);
//   },
//   clear() {
//     return (this.items = []);
//   },
//   countTotalPrice() {
//     let totalPrice = 0;
//     for (const { price, quantity } of this.items) {
//       totalPrice += price * quantity;
//     }
//     return totalPrice;
//   },
//   increaseQuantity(productName) {
   
//   },
//   descreaseQuantity(productName) { },
  
// };



// cart.add({ name: "Warcraft", price: 10 });
// cart.add({ name: "Warcraft", price: 10 });
// cart.add({ name: "Starcraft", price: 20 });
// cart.add({ name: "Starcraft", price: 20 });
// cart.add({ name: "Starcraft", price: 20 });
// cart.add({ name: 'Skyrim', price: 30 });
// cart.add({ name: 'StarWars', price: 40 });
// cart.add({ name: "StarWars", price: 40 });


// console.table(cart.getItems());



// spread, destr


// const temperature = [20, 21, 15, 14, 10, 15, 30]

// const lastWeek = [1, 2, 3]
// const current = [4, 5, 6];
// const next = [7, 8, 9];

// let allTemps = [];


// console.log(Math.min(...temperature, ...lastWeek));

// const goToWalk = {
//     where: 'Ternopil',
//     time: '20.20',
//     adress: 'NovSvit',
// }

// const juleWalk = {
//   where: "Kharkiv",
//   adress: "Biblik",
// };


// const newWalk = {
//     ...goToWalk,
//     ...juleWalk
// }
// console.log(newWalk);



//    const playlist = {
//      artist: "Progigy",
//      album: "The Fat of the Land",
//      tracks: ["track1", "track2", "track3", "track4", "track5", "track6"],
//      trackCount: 6,
//      rating: 10,
//      year: "1997",
//      genre: "rave",
//      stats: {
//        num1: "1",
//        num2: "2",
//        num3: "3",
//      },
//      changeAlbum(newAlbum) {
//        this.album = newAlbum;
//      },
//      addTrack(track) {
//        this.tracks.push(track);
//      },
//      updateCount(count) {
//        this.trackCount = count;
//      },
//    };

// const { tracks, album: al, genre, year, stats: { num1, num2, num3 } } = playlist;
// playlist.stats.num4 = 'exp';

// console.log(playlist);



// console.log(playlist["genre"]);


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
// //   // Change code below this line
//   return (!products.length || !(propName in products[0]))?
//     [] : products.map(i => i[propName]);

// //   // Change code above this line
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки


  
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));


// const authors = {
//   first: 9,
//   second: 3,
//   third: 4,
//   fourth: 5,
// }

// const entries = Object.entries(authors);


// for (const entry of entries) {
//   const name = entry[0];
//   const value = entry[1];
//   console.log(name, value);

// }



//    const playlist = {
//      artist: "Progigy",
//      album: "The Fat of the Land",
//      tracks: ["track1", "track2", "track3", "track4", "track5", "track6"],
//      trackCount: 6,
//      rating: 10,
//      year: "1997",
//      genre: "rave",
//      stats: {
//        followers: 84,
//        views: 400,
//        likes: 777,
//      },
// };
   
// console.log(playlist);

// const { artist: art, rating, year, ...restKeys } = playlist;

// console.log(art, rating, year);
// console.log(restKeys);


// const playlistInfo = function ({ artist: art, rating, year, ...restKeys }) {
//   return `<div>
//   <ul>
//   <li>${art}</li>
//   <li>${rating}</li>
//   <li>${year}</li>
//   </ul>
//   </div>`;

// };




// document.body.insertAdjacentHTML("afterbegin", playlistInfo(playlist));


