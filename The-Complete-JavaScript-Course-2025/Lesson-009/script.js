'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5

  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', 1000);
createBooking('LH123', undefined, 1000);


const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtman',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Cheked In');
  } else {
    alert('Worng Passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passenger = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);

  console.log(`Transformed string: ${fn(str)};`);
  console.log(`Transformed by:${fn.name}`);
};

transformer('JavaScirpt is the best!', upperFirstWord);
transformer('JavaScirpt is the best!', oneWord);

const hight5 = function () {
  console.log('👌');
};

document.body.addEventListener('click', hight5);

['Ali', 'nila', 'niloo'].forEach(hight5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');
*/

const lufhansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    // this.bookings.push({
    //   flight: `${this.iataCode}${flightNum}`,
    //   name,
    // });
  },
};

lufhansa.book(239, 'Jonas Schmedtmann');
lufhansa.book(635, 'Ali Zokaeai');
console.log(lufhansa);

const eruowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufhansa.book;

book.call(eruowings, 23, 'Sara asd');
console.log(eruowings);

//APPLY

//Bind method
const bookEW = book.bind(eruowings);
const bookKLH = book.bind(lufhansa);
// const bookKLX = book.bind(swiss);
bookEW(23, 'Steven William');

const bookEW23 = book.bind(eruowings, 34);

bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

lufhansa.planes = 300;
lufhansa.buyPlan = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufhansa.buyPlan.bind(lufhansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * rate;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
