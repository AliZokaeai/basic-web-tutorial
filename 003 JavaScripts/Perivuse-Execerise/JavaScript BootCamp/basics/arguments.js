let add = function (a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

let getScoreText = function (name = "Anonymous", score = 0) {
  return "Name: " + name + " " + " - Score:" + score;
};

let getScore = getScoreText(undefined, 90);
console.log(getScore);

//Challenge area
// Total, tipPercent

let getTip = function (total, tipPercent = 0.2) {
  let percent = tipPercent * 100;
  let tip = total * tipPercent;
  return `A ${percent}% tip on $${total} would be $${tip}`;
};
let tip = getTip(40, 0.25);
console.log(tip);
