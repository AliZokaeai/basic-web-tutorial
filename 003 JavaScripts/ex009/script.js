class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }

  static getUserCount() {
    console.log(`There are ${User.userCount} user(s) online`);
  }
  sayHello() {
    console.log(`Hello, my username is ${this.username}`);
  }
}

const user1 = new User("SopngeBob");
console.log(user1.username);
user1.sayHello();
User.getUserCount();
console.log(User.userCount);

const user2 = new User("Patric");
console.log(user2.username);
user2.sayHello();
User.getUserCount();
console.log(User.userCount);

const user3 = new User("Sandy");
console.log(user3.username);
user3.sayHello();
User.getUserCount();
console.log(User.userCount);
