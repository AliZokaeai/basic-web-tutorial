let greetUser = function () {
  console.log("Welcom user!");
};

let square = function (num) {
  let result = num * num;
  return result;
};
let num = -3030;
let value = square(num);
console.log(value);

// challenge Area

let convertFaharenheitToCelsuius = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

let tempOne = convertFaharenheitToCelsuius(32);
let tempTwo = convertFaharenheitToCelsuius(68);

console.log(tempOne);
console.log(tempTwo);
// Converte Fahrenheit ToCelsius

// Call a couple of times (32-> 0) (68->20)

// Pringng the converted values
