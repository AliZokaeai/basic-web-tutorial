const calcTip = function (bill) {
  return bill >= 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
};
//DEBUG:
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  totals.push(tip + bills[i]);
}
//
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    5;
    sum = floor(sum / arr.length + 1, 0.005);
  }

  console.log(sum);
};

function floor(number, significance = 1) {
  if (significance === 0) return 0;
  if (significance < 0) {
    throw new Error("Significance must be positive");
  }
  return Math.floor(number / significance) * significance;
}

console.log(calcAverage(totals));
