//let frutis = ["apple", "orange", "banana", "coconut", "pineapple"];
//let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
//numbers.sort((a, b) => b - a);
//console.log(numbers);

//------------

const people = [
  { name: "Spongebob", age: 30, gpa: 3.0 },
  { name: "patrick", age: 37, gpa: 1.5 },
  { name: "Squidward", age: 51, gpa: 2.5 },
  { name: "Sandy", age: 27, gpa: 4.0 },
];

people.sort((a, b) => a.age - b.age);
console.log(people);

people.sort((a, b) => a.gpa - b.gpa);
console.log(people);

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);

people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people);
