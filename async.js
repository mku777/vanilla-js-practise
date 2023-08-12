// const logMessage = (message) => {
//     console.log('Лог при вызове через 3 секунды');
// }

// console.log('до вызова setTimeout');

// setTimeout(() => {
//     console.log('внутри колбека для setTimeout');
// }, 3000)

// console.log("после вызова setTimeout");


// function logger(time) {
//   console.log(`лог через ${time} ms, потому что не отменили таймер`);
// }

// const timerId = setTimeout(logger, 2000, 2000);

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//   clearTimeout(timerId);
// }


const logger = (time) => {
    console.log(`Лог каждые ${time} ms - ${Date.now()}`);
}

console.log('до вызова setInterval');
const timerId = setInterval(logger, 3000, 3000);
console.log("после вызова setInterval");

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  clearInterval(timerId);
}


