"use stric";

/*function fruiteProcessor(apple, oranges) {
  console.log(apple, oranges);

  const juice = `Juice with ${apple} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruiteProcessor(1, 2));

const calcAge2 = function (brithYear) {
  return 2025 - brithYear;
};

const calcAge3 = (bridthYear) => 2025 - bridthYear;
const Age3 = calcAge3(1993);

console.log(Age3);*/

const yearsUntilRetirement = (bridthYear, firstName) => {
  const age = 2025 - bridthYear;
  const retirment = 65 - age;
  return `${firstName} retires in ${retirment} yeast later`;
};

console.log(yearsUntilRetirement(1984, "Ali"));
console.log(yearsUntilRetirement(1988, "Reza"));
