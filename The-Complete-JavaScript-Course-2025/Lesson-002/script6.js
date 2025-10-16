const jonas = {
  firstName: "Ali",
  lastName: "Zokaeai",
  birthYear: 1991,
  job: "teacher",
  firends: ["Michael", "Peter", "Steven"],
  hasDriverLicence: true,
  //   calcAge: function (birthYear) {
  //     return 2025 - birthYear;
  //   },

  calcAge: function () {
    return 2025 - this.birthYear;
  },
};

console.log(jonas.calcAge());
