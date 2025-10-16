const calcAge = function (brithYear) {
  return 2025 - brithYear;
};

const yearsUntilRetirement = function (bridthYear, firstName) {
  const age = calcAge(bridthYear);
  const retirment = 65 - age;
  if (retirment > 0) {
    return `${firstName} retires in ${retirment} years.`;
  } else {
    return `Your age isn't true, please enter a true number for your age it must be a decimal four digit number (1999);`;
  }
};

console.log(yearsUntilRetirement(1900, "Ali"));
