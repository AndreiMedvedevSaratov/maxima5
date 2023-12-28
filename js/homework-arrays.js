// Task 1
let nums = [5, 2, 4];
let squares = [];

nums[99] = 3;

// console.log(nums);
// console.log(nums.length);
// console.log(nums[10]);

for (let i = 0; i < nums.length; i++) {
  if (nums[i]) {
    squares.push(nums[i] * nums[i]);
  }
}

// console.log(squares);

// Task 3
let basket = [
  { product: "tomato", price: 123, cnt: 2 },
  { product: "apple", price: 80, cnt: 5 },
  { product: "salad", price: 25, cnt: 4 },
];

let numbers = [1, 3, 8, 9, 10];

let result1 = numbers.reduce((acc, item) => item + acc, 0);
console.log(result1);

let result = basket.reduce((acc, item) => {
  console.log(item);
  return item.price * item.cnt + acc;
}, 0);

console.log(result);
