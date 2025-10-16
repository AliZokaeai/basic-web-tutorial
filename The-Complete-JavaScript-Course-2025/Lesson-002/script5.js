/*const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michel", "Steven", "Peter"];

console.log(friends);

const y = new Array(1991, 1982, 2008, 2020);

console.log(y);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age_1 = calcAge(years[1]);
console.log(age_1);

friends.push("jay");
console.log(friends);
friends.pop("Michel");
console.log(friends);

friends.shift();
console.log(friends);
console.log(friends.indexOf("Steven"));

console.log(friends.includes("Steven"));
*/
const friends = ["Michel", "Steven", "Peter"];

function pushingFun(arrayName, stringName) {
  console.log("Original array:", arrayName);

  if (arrayName.includes(stringName)) {
    console.log(`You already have ${stringName} in the array`);
    console.log("Array remains:", arrayName);
    return arrayName; // Return the unchanged array
  } else {
    arrayName.push(stringName); // Fixed typo: puch -> push
    console.log(`I added ${stringName} to your array:`);
    console.log("New array:", arrayName);
    return arrayName; // Return the modified array
  }
}

const result = pushingFun(friends, "Ali");
console.log("Function returned:", result);
