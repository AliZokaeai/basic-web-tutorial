const examScore = [98, 77, 84, 91, 57, 29];

const myStudent = [
  {
    firstName: "Zeus",
    grand: 86,
  },
  {
    firstName: "Artemis",
    grand: 97,
  },
  {
    firstName: "Hera",
    grand: 72,
  },
  {
    firstName: "Apollo",
    grand: 90,
  },
];

for (let i = 0; i < myStudent.length; i++) {
  console.log(`${myStudent[i].firstName} : ${myStudent[i].grand}`);
}

const word = "stressed";
let reversedWord = "";
for (let j = word.length - 1; j >= 0; j--) {
  reversedWord += word[j];
  console.log(reversedWord);
}

console.log(reversedWord);
