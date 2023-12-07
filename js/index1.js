// Типы данных:
// 1) Числа или number:
let number = 15;
const number1 = 25;
var number2 = 38;

// console.log(typeof number1);

// 2) Строковый
let string1 = "Я строка";
const string2 = "Я тоже строка";
let string3 = `Я строка с числом ${number2}`;

// console.log(string3);
// console.log(typeof string1);

// 3) undefined
let myVariable;
// console.log(myVariable);
// console.log(typeof myVariable);

// 4) null
let myNull = null;

// console.log(myNull);
// console.log(typeof myNull);

// 5) object
let myAddress = {
  city: "Saratov",
  street: "Moskovskaya",
  house: 1,
};
// console.log(myAddress);
// console.log(myAddress.street);
// console.log(myAddress["house"]);
// console.log(typeof myAddress);

// 6) bigInt
let bigNumber = 31325135345345345345444n;
// console.log(bigNumber);
// console.log(typeof bigNumber);

// 7) Symbol
let mySymbol = Symbol("555");
// console.log(mySymbol);
// console.log(typeof mySymbol);
let mySybol1 = Symbol("555");
// console.log(mySybol1);

// console.log(mySymbol == mySybol1);
// console.log(mySymbol === mySybol1);

// 8) Boolean - true или false
let myTruth = true;
let myFalse = false;
// console.log(myTruth);
// console.log(typeof myFalse);
let myComparison = 55 < 33; // вопрос
// console.log(myComparison);

// того что нет ////////////
let integerNumber = 10; // integer
let floatNumber = 10.555; // float
// это всё называется и тип - number
// console.log(typeof integerNumber);
// console.log(typeof floatNumber);
// char - один символ
let charString = "a";
// console.log(typeof charString);
// array - массив
let strings = ["abc", "def", "jie"];
// console.log(typeof strings);

// Функция или function
let myFunction = function summa(a, b) {
  return a + b;
};

// console.log(myFunction(10, 5));
// console.log(typeof myFunction);

// Ссылочный тип данных
let myAddress1 = {
  city: "Saratov",
  street: "Moskovskaya",
  house: 1,
};

let myNewAddress1 = myAddress1;
myNewAddress1.house = 25;

// console.log(myNewAddress1);
// console.log(myAddress1);

// Преобразование или приведение типов:
let str1 = "56";
let num1 = Number(str1);
// console.log(typeof num1);

let num2 = 56;
let str3 = String(num2);
let str4 = num2.toString();

// console.log(str3);
// console.log(typeof str3);
// console.log(str4);
// console.log(typeof str4);

// операции сравнения:
console.log(10 == "10"); // приведение типов - 10 = 10 - true
console.log(10 === "10"); // без приведения типов - 10 != '10' - false

// оповещения
alert("Привет, я алерт!");

let isBoss = confirm("Ты здесь главный?");
console.log(isBoss);

let age = prompt("Сколько тебе лет?", 100);

console.log(`Тебе ${age} лет!`); // Тебе 100 лет!

if (age <= 35) {
  console.log("Ты молодёжь!");
} else if (age > 35 && age < 65) {
  console.log("Ты рабочий класс!");
} else if (age > 65) {
  console.log("Уже на пенсии!");
} else {
  console.log("Исключительная ситуация");
}
