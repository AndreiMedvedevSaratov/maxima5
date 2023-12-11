// Сумма всех чисел от 1 до 100
// 1 + 100 = 101
// 2 + 99 = 101
// ...
// 50 + 51 = 101
// сумма = 11 * 5 = 55
// сумма = 101 * 50 = 5050
// сумма = 1001 *500 = 500500

// цикл for
// let result = 0;

// for (i = 1; i < 101; i++) {
//   console.log("i = ", i);
//   console.log("result = ", result);
//   result = result + i;
//   console.log("результат после вычислений = ", result);
// }

// console.log("итоговая сумма =", result);

// цикл while
// let result = 0;
// let i = 1;

// while (i < 11) {
//   console.log("i = ", i);
//   console.log("result = ", result);
//   result = result + i;
//   console.log("результат после вычислений = ", result);
//   i++;
// }

// console.log("итоговая сумма =", result);

// цикл do
// let result = 0;
// let i = 1;

// do {
//   console.log("i = ", i);
//   console.log("result = ", result);
//   result = result + i;
//   console.log("результат после вычислений = ", result);
//   i++;
// } while (i < 11);

// console.log("итоговая сумма =", result);

// Перебор строки по символам
// let string1 = "Я изучаю JavaScript";

// console.log(string1.length);

// for (let ji = 0; ji < string1.length; ji = ji + 2) {
//   console.log(string1[ji]);
// }

// Простые числа
for (i = 3; i < 101; i++) {
  let flag = false;

  for (j = 2; j < i; j++) {
    if (i % j === 0) {
      flag = true;
      break;
    }
  }

  if (flag === false) {
    console.log(i);
  }
}
