"use strict";

console.log("Hello world!"); // Hello world!

let summa; // undefined

summa = 25 + 36; // 61 - присваивание ("=")

console.log(summa); // 61
console.log(typeof summa);

summa = "Я молодец, я изучаю js";

console.log(summa); //
console.log(typeof summa);

console.log(summa == 61); // не строгое сравнение
console.log(summa === "Я молодец, я изучаю js"); // строгое сравнение

let moyaPeremennaya;
console.log(moyaPeremennaya);

console.log("Privet");

console.log(2 + 2); // сложение
console.log(2 - 2); // вычитание
console.log(2 * 2); // умножение
console.log(2 / 2); // деление
console.log(Math.random() * 10); // случайное число
console.log(10 % 3); // остаток от деления 10 % 3 (3 + 3 + 3 + 1)
console.log(Math.ceil(5.5));
console.log(Math.round(5.49));
console.log(Math.floor(5.5));
console.log(Math.floor(Math.random() * 10)); // случайное число в диапазоне от 0 до 9
console.log(Math.floor(Math.random() * 10) + 1); // случайное число в диапазоне от 1 до 10

let random = Math.random() * 10;
console.log(random);
console.log(random.toFixed(2));

const name1 = "My name is Vasya";
console.log(name1);

// name1 = 567;
console.log(0.1 + 0.2);
