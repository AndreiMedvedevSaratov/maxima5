// Task 1
// let result = 0;

// for (let i = 1; i <= 1000; i++) {
//   result += i;
// }

// console.log(result);

// Task 2
// function factorial(n) {
//   let result = 1;

//   for (let i = 1; i <= n; i++) {
//     result = result * i;
//   }

//   return result;
// }

// console.log(factorial(10));

// Task 3
// let summa = 0;
// let years = 1;

// while (summa < 60000) {
//   summa = summa + (1000 + years * 1200);
//   years++;
// }

// console.log(years);

// 1) 1000 + 1 * 1200 = 2200
// 2) 1000 + 2 * 1200 = 3400
// 3) 1000 + 3 * 1200 = 4600
// ...
// 10) 1000  + 10 * 1200 = 13000
// Итого - больше 60000 должно получиться

// Task 4
// let tests = ["шалаш", "палиндром", "огород", "довод"];

// const isPalindrom = (str) => {
//   for (let i = 0; i <= (str.length - 1) / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }

//   return true;
// };

// tests.forEach((item) => console.log(isPalindrom(item)));

let randomNumber = Math.floor(Math.random() * 10);
let vvod;

do {
  vvod = +prompt("Введите число от 0 до 10");
  // console.log(vvod);
  // console.log(typeof vvod);
  if (randomNumber - vvod === 0) {
    alert(`Вы угадали число - ${randomNumber}`);
  } else if (randomNumber - vvod <= 1 && randomNumber - vvod >= -1) {
    alert("Горячо!");
  } else {
    alert("Холодно!");
  }
} while (vvod !== randomNumber);
