let person = {
  name: "Vasya",
  surname: "Petrov",
  age: 25,
  address: {
    zipCode: 410000,
    city: "Saratov",
    street: "Moskovskaya",
    house: 1,
    flat: 25,
  },
};

// console.log(person);
// console.log(person.address.house);
// console.log(person.isAdmin);

// console.log(person["address"]);

let person1 = person;

person1.age = 30;

console.log(person.age);
