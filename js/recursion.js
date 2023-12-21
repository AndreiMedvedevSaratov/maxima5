"use strict";

// ---------------------
// n! факториал
// n! = 1 * 2 * 3 ... * n
// 5! = 1 * 2 * 3 * 4 * 5 = 120

// с помощью циклов:
// const factorial = (n) => {
//   let result = 1;

//   for (let i = 1; i <= n; i++) {
//     result = result * i;
//   }

//   console.log(result);
// };

// с помощью рекурсии

// const factorial = (n) => {
//   if (n === 1) {
//     return n;
//   }

//   console.log(n);

//   return n * factorial(n - 1);
// };

// console.log(factorial(5));

// ----------------
// Возведение в степень:
// function pow(x, n) {
//   let result = 1;

//   // умножаем result на x n раз в цикле
//   for (let i = 0; i < n; i++) {
//     result *= x; // result = result * x
//   }

//   return result;
// }

// с помощью рекурсии
function pow(x, n) {
  // console.log("x = ", x, "n = ", n);
  if (n !== 1) {
    // console.log(x * pow(x, n - 1));
    return x * pow(x, n - 1);
  }

  if (n < 1) return x;
}

console.log(pow(2, 4)); // 16 = 2 * 2 * 2 * 2
// console.log(pow(2, 10)); // 1024 = 2 * 2 * 2 ... * 2 (десять раз)
