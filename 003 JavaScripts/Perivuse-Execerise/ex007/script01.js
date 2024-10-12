const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);
const Maximum = prices.reduce(getMax);
const Minmun = prices.reduce(getMin);

console.log(`${total.toFixed(2)}`);
console.log(`${Maximum}`);
console.log(`${Minmun}`);

function sum(accumulator, next) {
  return accumulator + next;
}

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}
