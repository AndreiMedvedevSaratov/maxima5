// function sayHi() {
//   console.log("Привет");
// }

// setTimeout(sayHi, 3000);

// setTimeout(() => console.log("Второй setTimeout"), 1500);

// setTimeout(() => {
//   console.log(2 + 2);

//   return console.log("Второй setTimeout");
// }, 1500);

// setTimeout(function () {
//   return console.log("Второй setTimeout - анонимная запись");
// }, 1500);

// setTimeout(function () {
//   console.log("Второй setTimeout - анонимная запись без return");
// }, 1500);

// setTimeout(console.log("Третий"), 5000); // ошибка

// ------------

// let timerId = setTimeout(() => console.log("ничего не происходит"), 1000);
// console.log(timerId); // идентификатор таймера

// clearTimeout(timerId);
// console.log(timerId); // тот же идентификатор (не принимает значение null после отмены)

// -----------
let timerId = setInterval(() => console.log("tick"), 2000);

setTimeout(() => {
  clearInterval(timerId);
  console.log("stop");
}, 4009);
