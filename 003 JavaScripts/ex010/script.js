class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`The ${this.name} move at a speed of ${speed}mph`);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`The ${this.name} can run at a speed of ${ this.runSpeed}mph`);
    super.move(this.runSpeed);
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }

  swim() {
    console.log(`The ${this.name} can swim at a speed of ${this.swimSpeed}mph`);
    super.move(this.swimSpeed);
  }
}

class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
    
  }

  fly() {
    console.log(`The ${this.name} can fly at a speed of ${this.flySpeed}mph`);
    super.move(this.flySpeed);
  }
}

const rabbit = new Rabbit("BugsBuny", 10, 20);
const fish = new Fish("Fish", 2, 12);
const hawk = new Hawk("Hawk", 2, 12);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run();
console.log("-------------");

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
fish.swim();
console.log("-------------");

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
hawk.fly();
