// Создать метод объекта say, который в качетсве аргумента
// принимает текст. При вызове метода pet.say() должна
// возвращаться строка "<type> <name> говорит <передаваемый
// текст > ".Если передаваемый текст отсутствует, возвращаем издаваемый звук.

// this.type = "Giraph";

// Task 1
// let pet1 = {
//   type: "cat",
//   name: "Martik",
//   sound: "Myay",
//   say: function (message) {
//     return `${this.type} ${this.name} говорит ${
//       message ? message : this.sound
//     }`;
//   },
// };

// let pet2 = {
//   type: "dog",
//   name: "Korgik",
//   sound: "Gav-gav",
//   say: (message) =>
//     `${this.type} ${this.name} говорит ${message ? message : this.sound}`,
// };

// console.log(pet1.say());
// console.log(pet1.say("Myau - myau"));

// console.log(pet2.say());
// console.log(pet2.say("Gav - gav"));

// Task 2
// let products = {
//   potato: "овощи",
//   carrot: "овощи",
//   banana: "фрукты",
//   orange: "фрукты",
//   apple: "фрукты",
//   strawberry: "ягоды",
//   tomato: "овощи",
//   melon: "фрукты",
//   lemon: "фрукты",
//   lemonad: "напиток",
// };

// {
//   "фрукты": 5,
//   "овощи": 3,
//   "ягоды": 1
// }

// console.log(products);
// console.log(Object.keys(products));
// console.log(Object.values(products));
// console.log(Object.entries(products));

// let result = {};

// for (let key in products) {
//   if (result[products[key]]) {
//     result[products[key]] = result[products[key]] + 1;
//     console.log("if = ", result);
//   } else {
//     let temp = products[key];
//     result = { ...result, [temp]: 1 };
//     console.log("else = ", result);
//   }
//   console.log("key = ", key, "value = ", products[key]);
// }

// console.log(result);

// Task 3

let cars = {
  volga: {
    color: "red",
    countryOfOrigin: "Russia",
    year: 1980,
  },
  zaporozhec: {
    color: "red",
    countryOfOrigin: "Russia",
    year: 1990,
  },
  logan: {
    color: "red",
    countryOfOrigin: "Russia",
    year: 2000,
  },
  matiz: {
    color: "red",
    countryOfOrigin: "Russia",
    year: 1999,
  },
  micubisi: {
    color: "red",
    countryOfOrigin: "Russia",
    year: 2020,
  },
  tesla: {
    color: "red",
    countryOfOrigin: "Russia",
    year: 2023,
  },
  buhanka: {
    color: "red",
    countryOfOrigin: "Russia",
    year: 2010,
  },
  gaz: {
    color: "red",
    countryOfOrigin: "Russia",
    year: 2007,
  },
  uaz: {
    color: "red",
    countryOfOrigin: "Russia",
    year: 2001,
  },
  nissan: {
    color: "red",
    countryOfOrigin: "Russia",
    year: 2015,
  },
};

let sortedCars = [];

for (let car in cars) {
  sortedCars.push([car, cars[car]]);
}

// console.log(sortedCars);

sortedCars.sort(function (a, b) {
  return a[1].year - b[1].year;
});

// console.log(sortedCars);

console.log("Древние машинки: ");
for (let i = 0; i < 3; i++) {
  console.log(sortedCars[i][0]);
}

console.log("Молодые машинки: ");
for (let i = sortedCars.length - 3; i < sortedCars.length; i++) {
  console.log(sortedCars[i][0]);
}

// Рекурсивно обойти весь объект и вывести в консоль его по-строчно:
let obj = {
  name: "Vasya",
  age: 25,
  hairColor: "blonde",
  address: {
    city: "Saratov",
    street: "Moskovskaya",
    house: 25,
    geo: {
      long: 345325,
      lat: 3353,
    },
  },
};

// {
//   name: 'Vasya',
//   age: 25,
//   hairColor: 'blonde',
//   address: {
//     city: 'Saratov',
//     street: 'Moskovskaya',
//     house: 25,
//     geo: {
//       long: 345325,
//       lat: 3353
//     }
//   }
// }
