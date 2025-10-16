const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins);
console.error(scoreKoalas);

const checkWinner = function (aveDolphin, aveKoalas) {
  if (aveDolphin >= 2 * aveKoalas) {
    console.log(`Dolphins win the games`);
  } else if (aveKoalas >= 2 * aveDolphin) {
    console.log(`Koalas win the games`);
  } else {
    console.log("No teame win! :(");
  }
};

checkWinner(scoreDolphins, scoreKoalas);
