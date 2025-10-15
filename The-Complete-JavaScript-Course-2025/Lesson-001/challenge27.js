let scoreDolphics = (96 + 108 + 89) / 3;

let scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphics, scoreKoalas);

if (scoreDolphics > scoreKoalas) {
  console.log("Dolphins with trophy 🐬");
} else if (scoreKoalas > scoreDolphics) {
  console.log("Koalas with a trophy 🐨");
} else if (scoreDolphics === scoreKoalas) {
  console.log("Both win the trophy 🏆");
}
/// BUns 1
scoreDolphics = (96 + 108 + 89) / 3;

scoreKoalas = (108 + 96 + 1000) / 3;

console.log(scoreDolphics, scoreKoalas);

if (scoreDolphics > scoreKoalas && scoreDolphics >= 100) {
  console.log("Dolphins with trophy 🐬");
} else if (scoreKoalas > scoreDolphics && scoreKoalas >= 100) {
  console.log("Koalas with a trophy 🐨");
} else if (scoreDolphics === scoreKoalas) {
  console.log("Both win the trophy 🏆");
}
