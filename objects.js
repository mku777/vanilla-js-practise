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

const family = [
  { name: "Ann", online: true },
  { name: "Max", online: false },
  { name: "Jara", online: false },
  { name: "Thorin", online: true },
];

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

function getFreindsByStatus(allFriends) {
  const status = {
    online: [],
    offline: [],
  };
  for (const fam of allFriends) {
    if (fam.online) status.online.push(fam.name);
    else {
      status.offline.push(fam.name);
    }
  }

  return status;
}

console.log(getFreindsByStatus(family));