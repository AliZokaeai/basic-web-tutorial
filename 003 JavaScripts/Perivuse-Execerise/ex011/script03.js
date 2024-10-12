//nested object

const person = {
  fullName: "Spongebob Squarepants",
  age: 30,
  isStudent: true,
  hobbies: ["karate", "jellyfishing", "cooking"],
  address: {
    street: "124 Conch st",
    city: "Bikini Bottom",
    country: "Int. Water",
  },
};

/*console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address.street);*/

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Spangebob", 30, "124 Conch st.", "Bikini Bottm", "Int. Water");

const person2 = new Person("Patrick", 37, "128 Conch st.");

const person3 = new Person("Squidward", 45, "126 ");

console.log(person2.address.street);
