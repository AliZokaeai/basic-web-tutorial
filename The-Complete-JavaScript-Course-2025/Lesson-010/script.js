/* const poll = {
  question: "What is your favourit programming langauge?",
  options: ["0:JavaScript", "1:Python", "2:Rust", "3:C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.question}\n${this.options.join("\n")}\n(Write option number)`)
    );
    console.log(answer);

    typeof answer === "number" && answer < this.answers.length && this.answers[answer]++;

    this.displayResult();
    this.displayResult("string");
  },
  displayResult(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll reuslt are ${this.answers.join(", ")}`);
    }
  },
};

// poll.registerNewAnswer();
document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answers: [5, 3, 4] }, string);


const runOnce = function () {
  console.log("This will never run again");
};

runOnce();

(function () {
  console.log("This is never run again");
  const isPrivate = 23;
})();

(() => console.log("This will AlSO never run again"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

console.log(notPrivate);


const secureBooking = function () {
  let passengersCount = 0;

  return function () {
    passengersCount++;
    console.log(`${passengersCount} passengers;`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);


let f;
const g = function () {
  const a = 23;
  console.log("---------G-function---------");

  f = function () {
    console.log("---------F-function---------");
    console.log(a * 2);
  };
};

const h = function () {
  console.log("---------B-function---------");
  const b = 777;

  f = function () {
    console.log("---------F''-function---------");
    console.log(b * 2);
  };
};
g();
f();
h();
f();

console.dir(f);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 group, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);


(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();


let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
console.log(arr.splice(2));
console.log(arr);
console.log(arr.splice(-1));
console.log(arr.splice(1, 2));

arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr.reverse());

console.log(arr.concat(arr2));
const letter = [...arr, ...arr2];
console.log([...arr, ...arr2]);
console.log(letter.join("-"));


const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}:you deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log("--------forEach---------");

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}:you deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

const currenceies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currenceies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenceiesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

console.log(currenceiesUnique);
currenceiesUnique.forEach(function (value, value, map) {
  console.log(`${value}`);
  console.log(`${value}`);
  console.log(`${value}: ${value}`);
});
