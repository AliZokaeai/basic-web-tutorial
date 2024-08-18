let myName = "  Ali Zokaeai  ";

// Length property
console.log(myName.length);

// convert to upper case

console.log(myName.toUpperCase());
console.log(myName.toLocaleUpperCase());

// convert to lower case

console.log(myName.toLowerCase());

//incloudes methods

let password = "abs1234567890password";
console.log(password.includes("password"));

// Trim
console.log(myName.trim());
// isValidPassword

let isValidPassword = function (password) {
  if (password.length > 8 && password.includes("password")) {
    return true;
  } else {
    return false;
  }
};

console.log(isValidPassword(password));
