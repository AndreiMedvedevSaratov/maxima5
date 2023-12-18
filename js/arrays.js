// Arrays - массивы
let myArray = ["skirt", "trousers", "socks", "polo"];

// console.log(myArray);
// console.log(myArray[2]);

// for (let i = 0; i < myArray.length; i++) {
//   console.log("index = ", i, "element = ", myArray[i]);
// }

// myArray.push(6);
// console.log(myArray);

// myArray.pop();
// console.log(myArray);

// myArray.unshift(77);
// console.log(myArray);

// myArray.shift();
// console.log(myArray);

// myArray.forEach((item, index) =>
//   console.log("index = ", index, "element = ", item)
// );

// Массив объектов - objects array
let myObjectsArray = [
  { product: "skirt", quantity: 25 },
  { product: "trousers", quantity: 16 },
  { product: "socks", quantity: 100 },
  { product: "polo", quantity: 50 },
];

// filter - отобразить все элементы, с количеством больше 30
let result = myObjectsArray.filter(
  (item) => item.quantity < 55 && item.product === "trousers"
);
// console.log(result);

// delete
// console.log(myObjectsArray);

// delete myObjectsArray[1];
myObjectsArray.splice(1, 1);

// console.log(myObjectsArray);

// concat
// let concatArray = myArray + myObjectsArray;
// let concatArray = [...myArray, ...myObjectsArray];
let concatArray = myArray.concat(myObjectsArray);
// console.log(concatArray);

// map
let tolkienArray = ["Бильбо", "Гэндальф", "Назгул"];
let lengths = tolkienArray.map((item) => "Имя персонажа: " + item);
// console.log(lengths); // 6,8,6

// sort
// [1, -2, 15, 2, 0, 8].sort(function (a, b) {
//   console.log(a + " <> " + b);
//   return a - b;
// });

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [1, -2, 15, 2, 0, 8];

arr.sort(compareNumeric);

// console.log(arr);

// [1, -2, 15, 2, 0, 8];
// [-2, 1, 15, 2, 0, 8];
// [-2, 1, 2, 15, 0, 8];
// ...
// [-2, 0, 1, 2, 8, 15];

// методы объектов
let myObject = {
  product: "skirt",
  quantity: 25,
};
console.log(Object.keys(myObject));
console.log(Object.values(myObject));
console.log(Object.entries(myObject));

// Деструктуризация
console.log(...arr);
// console.log(...myObject);

// Задача про матрицу
let matricaArray = [
  ["1", "10", "100", "1000", "10000"],
  ["2", "20", "200", "2000", "20000"],
  ["3", "30", "300", "3000", "30000"],
  ["4", "40", "400", "4000", "40000"],
  ["5", "50", "500", "5000", "50000"],
];

for (let i = 0; i < 5; i++) {
  let result = "";

  for (let j = 0; j < 5; j++) {
    result = result + matricaArray[j][i];

    if (i === j) {
      break;
    }
  }

  console.log(result);
}
