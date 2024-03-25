const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "coconut", color: "white", calories: 159 },
  { name: "pineapple", color: "yellow", calories: 37 },
];
/*
fruits.push({ name: "grapes", color: "purple", calories: 62 });
const a = fruits.splice(1, 2);
console.log(a);

const fruitName = fruits.map((fruit) => fruit.name);
const fruitColor = fruits.map((fruit) => fruit.color);
const fruitCalories = fruits.map((fruit) => fruit.calories);

console.log(fruitName);
console.log(fruitColor);
console.log(fruitCalories);

//----------------filter()-------------\\

const yellowFruit = fruits.filter((fruit) => fruit.color === "yellow");

const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
const highCalFruits = fruits.filter((fruit) => fruit.calories > 100);

console.log(yellowFruit);
console.log(lowCalFruits);
console.log(highCalFruits);
*/
//----------------reduce()-------------\\

const maxFruit = fruits.reduce((max, fruit) => (fruit.calories > max.calories ? fruit : max));

const minFruit = fruits.reduce((min, fruit) => (fruit.calories < min.calories ? fruit : min));

console.log(maxFruit);
console.log(minFruit);

//6:29:21
