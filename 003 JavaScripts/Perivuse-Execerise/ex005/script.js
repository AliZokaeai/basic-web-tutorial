// let numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach(double);

// function double(element, index, array) {
//   array[index] = element * 2;
// }

// function triple(element, index, array) {
//   array[index] = element * 3;
// }

// function square(element, index, array) {
//   array[index] = Math.pow(element, 2);
// }

// function cube(element, index, array) {
//   array[index] = Math.pow(element, 3);
// }
// function display(element) {
//   console.log(element);
// }

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(upperCase);
fruits.forEach(dispaly);
fruits.forEach(lowercase);
fruits.forEach(dispaly);
fruits.forEach(cpetalize);
fruits.forEach(dispaly);

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

function lowercase(element, index, array) {
  array[index] = element.toLowerCase();
}

function cpetalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

function dispaly(element) {
  console.log(element);
}
