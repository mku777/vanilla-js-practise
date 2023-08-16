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

// const logger = (time) => {
//     console.log(`Лог каждые ${time} ms - ${Date.now()}`);
// }

// console.log('до вызова setInterval');
// const timerId = setInterval(logger, 3000, 3000);
// console.log("после вызова setInterval");

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//   clearInterval(timerId);
// }

// const alertEl = document.querySelector(".js-alert");

// alertEl.addEventListener("click", onAlert);
// letTimeOutId = null;

// showNotify();

// function onAlert() {
//   clearTimeout(timerId);
//   hideNotify();
// }

// timerId = setTimeout(function onAlert() {
//   hideNotify();
//   console.log("закрываем оповещение");
// }, 3000);

// function hideNotify() {
//   alertEl.classList.remove("is-visible");
// }

// function showNotify() {
//   alertEl.classList.add("is-visible");
// }

// ---------- Subscriptions----


// let promtCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//   if (promtCounter === MAX_PROMPT_ATTEMTS) {
//     console.log("останавливаем интервал");
//     clearInterval(intervalId);
//     return;
//   }
//   console.log("подпишись на рассылку ->" + Date.now());
//   promtCounter += 1;
// }, PROMT_DELAY);

// import { Modal } from 'bootstrap.native';


// const modal = new Modal("#exampleModal");
// const refs = {
//   modal: document.querySelector("#exampleModal"),
// };



// const PROMT_DELAY = 1000;
// const MAX_PROMPT_ATTEMTS = 4;

// refs.modal.addEventListener("hidden.bs.modal", () => {
//   console.log("поймали закрытие");
//   setTimeout(() => {
//     modal.show();
//   }, PROMT_DELAY);
// });


// const date = new Date();


// console.log('date ->>', date);


// setTimeout(() => {
//     const date1 = new Date();
//     console.log("date ->>", date);
//     console.log('date1 ->>', date1);
//     console.log(date1 - date);
// }, 2000)

// function pad(value) {
//     return String(value).padStart(2, '0');
// }


// function getTimeComponents(time) {
//   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),) ;
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),) ;
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000),); ;

//   return { hours, mins, secs };
// }

// const timer = {
//     start() {
//         const nowTime = Date.now();
      
//         setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - nowTime;
//             const {hours, mins, secs} = getTimeComponents(deltaTime);
//             console.log(`${hours}:${mins}:${secs}`)
        
//         }, 1000);
//     },
// }

// // timer.start();

const startButtonEl = document.querySelector("[data-start]");
const stopButtonEl = document.querySelector("[data-stop]");
const bodyEl = document.querySelector("body");
let intervalId = null;

startButtonEl.addEventListener("click", () => {
  intervalId = setInterval(
    () => (bodyEl.style.backgroundColor = getRandomHexColor()),
    250
  );
  if (intervalId) {
    startButtonEl.setAttribute("disabled", true);
  }
});

stopButtonEl.addEventListener("click", () => {
  clearInterval(intervalId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}