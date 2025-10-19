const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log('-----CalcAge Function-----');
    console.log(this);
    console.log(2037 - this.year);
    const self = this; // define the "This pointer"
    const isMillenial = function () {
      console.log('-----isMillenial Function -----');
      console.log(self);
      console.log(self.year);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
  great: () => {
    console.log('-----Greate Function -----');
    console.log(this);
    console.log(`Hey ${self.firstName}`);
  },
};
jonas.calcAge();
jonas.great();

const addExpr = function (a, b) {
  console.log('-----addExpr Function -----');
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 4, 6);

const addArrow = (a, b) => {
  console.log('-----addArrow Function -----');
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
