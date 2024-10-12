class Person {
  constructor(firstNam, lastName, age) {
    this.firstNam = firstNam;
    this.lastName = lastName;
    this.age = age;
  }

  set firstNam(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("First name must be a non-empty string");
    }
  }

  set lastNam(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("Last name must be a non-empty string");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("Age must be a non-negative number");
    }
  }

  get firstNam() {
    return this._firstName;
  }

  get lastNam() {
    return this._lastName;
  }

  get age() {
    return this._age;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}

const person = new Person("spangebob", "squarpants", 30);

console.log(person.firstNam);
console.log(person.lastName);
console.log(person.fullName);


//06:01:26