let isAccountLocked = false;
let userRole = "admin";

// if (isAccountLocked) {
//   console.log("is account locked");
// } else {
//   console.log("Welcome!");
// }

if (isAccountLocked) {
  console.log("is account locked");
} else if (userRole === "admin") {
  console.log("Welcome Admin");
} else {
  console.log("welcome user");
}

//

let temp = 110;

if (temp <= 32) {
  console.log("it is freezing outside");
} else if (temp >= 110) {
  console.log("It is so hot today");
} else {
  console.log("Go for it, it is pretty nice out");
}
