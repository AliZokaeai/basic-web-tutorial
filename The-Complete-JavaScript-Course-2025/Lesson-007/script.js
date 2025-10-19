'use strict';
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'William',
//   age: 27,
// };

// function marryPersson(originalPerson, newLastName) {
//   originalPerson.lastName = newLastName;
//   return originalPerson;
// }

// const marriedJessica = marryPersson(jessica, 'Davis');
// console.log('Before:', jessica);
// console.log('After:', marriedJessica);

// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'William',
//   age: 27,
//   familiy: ['Alice', 'Bob'],
// };

// const jessicaCopy = { ...jessica2 };
// jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');
// console.log(jessica, jessicaCopy);

// const jessicaClone = structuredClone(jessicaCopy);
// jessicaClone.familiy.push('Mary');
// jessicaClone.familiy.push('John');

// console.log('Original:', jessica);
// console.log('Original:', jessicaClone);

const resturant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  category: ['Italian', 'Pizzera', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruchetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Hereis your declicios pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },
  orderPizza: function (mainIngeridient, ...otherIngridients) {
    console.log('Main Ingredient: ', mainIngeridient);
    console.log('Other Ingredient: ', otherIngridients);
  },
};


/*
const arr = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log('The array indexes: a:', a, ', b:', b, ', others:', others);

const [pizza, , risotto, bread, ...otherfoods] = [
  ...resturant.mainMenu,
  ...resturant.starterMenu,
];
console.log(
  'First:',
  pizza,
  ', Second:',
  risotto,
  ', Third:',
  bread,
  ', Other foods:',
  otherfoods
);




const { sat, ...weekdays } = resturant.openingHours;
console.log('Week days:', weekdays);

const add = function (...numbers) {
  console.log('Numbers Arrys is:', numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log('The total sum is:', sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 3, 4, 5, 5, 5);
const x = [23, 4, 7];
add(...x);

resturant.orderPizza('mashrooms', 'onion', 'olives', 'soinach');
resturant.orderPizza('Potatos');

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log('bad array:', badNewArr);

// const newArr = [1, 2, ...arr];
// console.log('Good Array:', newArr);

// console.log('New Array:', ...newArr);

// const newMenu = [...resturant.mainMenu, 'Gnocci'];
// console.log('New Menu', newMenu);

// //copy array
// const mainMenyCopy = [...resturant.mainMenu];
// //Join 2 arrays

// const menu = [...resturant.starterMenu, ...resturant.mainMenu];
// console.log('Menu:', menu);
// // Iterables:array, strings, maps, sets, Not Objects

// const str = 'Ali';
// const letters = [...str, ' ', 'S.'];
// console.log('Letters:', letters);
// console.log('String:', ...str);
// console.log(` Console: ${str} Zokaeai`);

// const ingridients = [
//   prompt("Let's make pasta! Ingredient 1? "),
//   prompt("Let's make pasta! Ingredient 2? "),
//   prompt("Let's make pasta! Ingredient 3? "),
// ];
// console.log('Ingeridients:', ingridients);
//resturant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);
// resturant.orderPasta(...ingridients);
//Objects
// const newResturant = { foundedIn: 1998, ...resturant, founder: 'Guiseppe' };
// console.log('New Resturant', newResturant);

// const resturantCopy = { ...resturant };
// resturantCopy.name = 'Ristorante Roma';
// console.log('The Old resturant: ', resturant.name);
// console.log('The New resturant: ', resturantCopy.name);

// resturant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole,21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// resturant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });
// const { name, openingHours, category } = resturant;
// console.log(name, openingHours, category);
//const { name: resturantName, openingHours: hours, category: tags } = resturant;

// console.log(resturantName, hours, tags);

// const { menu = [], starterMenu: starter = [] } = resturant;
// console.log(menu, starter);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// console.log(({ a, b } = obj));

// const {
//   fri: { open: o, close: c },
// } = resturant.openingHours;
// console.log(o, c);
