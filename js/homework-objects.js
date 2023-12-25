let products = {
  potato: "овощи",
  carrot: "овощи",
  banana: "фрукты",
  orange: "фрукты",
  apple: "фрукты",
  strawberry: "ягоды",
  tomato: "овощи",
  melon: "фрукты",
  lemon: "фрукты",
  lemonad: "напиток",
};

// {
//   "фрукты": 5,
//   "овощи": 3,
//   "ягоды": 1
// }

// console.log(products);
// console.log(Object.keys(products));
// console.log(Object.values(products));
// console.log(Object.entries(products));

let result = {};

for (let key in products) {
  if (result[products[key]]) {
    result[products[key]] = result[products[key]] + 1;
    console.log("if = ", result);
  } else {
    let temp = products[key];
    result = { ...result, [temp]: 1 };
    console.log("else = ", result);
  }
  console.log("key = ", key, "value = ", products[key]);
}

console.log(result);
