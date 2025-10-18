console.log(this);

const calcAge = function (brithYear) {
  console.log(2037 - brithYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = (brithYear) => {
  console.log(2037 - brithYear);
  console.log(this);
};

calcAgeArrow(1980);
