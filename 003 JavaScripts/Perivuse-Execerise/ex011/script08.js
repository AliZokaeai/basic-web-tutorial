/*function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}

message = "Goodbay";
outer();
function createCounter() {
  let count = 0;
  function increment() {
    //   let count = 0;

    count++;
    console.log(`Count  increased to ${count}`);
  }

  function getCount() {
    return count;
  }

  return { increment };
}

const counter = createCounter();

counter.increment();
counter.increment();
console.log("------");
counter.count = 0;
console.log("------");
counter.increment();
counter.increment();
console.log("------");
console.log(`The current count is ${counter.getCount()}`);
console.log(`The current count is ${counter.getCount()}`);
*/
function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  function getScore() {
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();
game.increaseScore(5);
game.decreaseScore(5);
game.increaseScore(5);
game.decreaseScore(4);

//6:59:08
