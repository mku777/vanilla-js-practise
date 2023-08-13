// import throttle from "lodash.throttle";
// import Vimeo from "@vimeo/player";




// const formEl = document.querySelector(".feedback-form");
// const textEl = document.querySelector(".feedback-form textarea");

// const formData = {
//   email: "",
//   message: "",
// };

// populateMsg();

// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const email = e.target.email.value;
//   const message = e.target.message.value;

//   const userObj = {
//     email,
//     message,
//   };
//   console.log(userObj);
//   const strUser = JSON.stringify(userObj);
//   localStorage.setItem("user-data", strUser);
//   e.currentTarget.reset();
//   localStorage.removeItem("user-data");
// });

// formEl.addEventListener("input", throttle(onIputChange, 500));

// function onIputChange(e) {
//      formData[e.target.name] = e.target.value;

//      const strUser = JSON.stringify(formData);
//      localStorage.setItem("user-data", strUser);
// }

// function populateMsg() {
//   const savedMsg = localStorage.getItem("user-data");
//   if (savedMsg) {
//     const parsedObj = JSON.parse(savedMsg);
//     console.log(parsedObj);
//     formEl.email.value = parsedObj.email;
//     formEl.message.value = parsedObj.message;
//   }
// }



//  const iframe = document.querySelector("iframe");
//  const player = new Vimeo(iframe);

//  player.on("timeupdate", throttle(onTimeUpdate, 1000));

//  function onTimeUpdate(data) {
//    localStorage.setItem("videoplayer-current-time", data.seconds);
//  }

//  player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
