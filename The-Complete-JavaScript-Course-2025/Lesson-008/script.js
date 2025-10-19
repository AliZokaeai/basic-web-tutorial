'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'san'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};
const resturant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  category: ['Italian', 'Pizzera', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruchetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Hereis your declicios pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },
  orderPizza(mainIngeridient, ...otherIngridients) {
    console.log('Main Ingredient: ', mainIngeridient);
    console.log('Other Ingredient: ', otherIngridients);
  },
};
const peroperties = Object.keys(openingHours);
console.log(peroperties);

let openStr = `We are open on ${peroperties.length} days:`;
for (const day of peroperties) {
  openStr += `${day}, `;
}
console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and ${close};`);
}
/*
if (resturant.openingHours && resturant.openingHours.fri)
  console.log(resturant.openingHours.fri.open);

console.log(resturant.openingHours.mon?.open);
console.log(resturant.openingHours?.fri?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'san'];

for (const day of days) {
  console.log('Day:', day);
  const open = resturant.openingHours[day]?.open || 'closed';
  console.log(open);

  console.log(
    `On ${day}, we are` + (open === 'closed') ? ' closed' : `open in ${open}`
  );
}

console.log(resturant.order?.(0, 1) ?? 'Method doesnot exist');
console.log(resturant.orderRisotto?.(0, 1) ?? 'Method doesnot exist');

const users = [
  {
    name: 'Jonas',
    email: 'Helo@zokaei.com',
  },
];

console.log(users[0]?.name ?? 'User array is empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user aray is empty');


const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  Owner: 'Giovanni Rossi',
};

const menu = [...resturant.starterMenu, ...resturant.mainMenu];
let x = 0;
for (const item of menu) {
  console.log('Item :', `${item} - ${x}`);
  x++;
}

for (const item of menu.entries()) {
  console.log('Code:', item[0] + 1, ', item:', item[1]);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
console.log('Menu Entries: ', ...menu.entries());


// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log('Restuarant 1:', rest1);
console.log('Restuarant 2:', rest2);


resturant.numGuests = 0;
const guests = resturant.numGuests || 10;
console.log('Guests with OR: ', guests);

const guestsCorrect = resturant.numGuests ?? 10;
console.log('Guests with AND: ', guestsCorrect);


console.log('Zero: ', 0 && 'Ali');
console.log('Number: ', 7 && 'Ali');
console.log('Word:', 'Hello' && 23 & null & 'Ali');

if (resturant.orderPizza) {
  resturant.orderPizza('mushroom', 'spinach');
}
resturant.orderPizza && resturant.orderPizza('Mushrooms', 'Spinach');

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guest1 = resturant.numGuests ? resturant.numGuest : 10;
console.log('Number of guest 1: ', guest1);

const guest2 = resturant.numGuest || 10;
console.log('Number of guest 2:', guest2);


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
// 

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
*/
