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

const question = new Map([
  ['question', 'What is the best programming langauge in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct ✅'],
  [false, 'Try again! ❌'],
]);

console.log('Question Map:', question);

console.log('Convert Object to Map:', Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));

console.log('A Map of an Object:', hoursMap);

console.log('Question:', question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}:${value}`);
}

// const answer = prompt('You answer between (1 to 3)(just on select allowed)');
// console.log('The user answer is:', answer);

//console.log(question.get(question.get('correct') == answer));
//Covert map to array

console.log('Covert Map to Array:', [...question]);
console.log('Map Entries:', question.entries());
console.log('Map Keys:', [...question.keys()]);
console.log('Map Values:', [...question.values()]);

/*

const rest = new Map();
console.log('Empty Map:', rest);

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log('Set the new items in Map:', rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'])
  .set('Open', 11)
  .set('close', 23)
  .set(true, 'We are Open :D')
  .set(false, 'We are closed :(');

console.log('get the Name of Map:', rest.get('name'));
console.log('get the True of Map:', rest.get(true));
console.log('get the 1 of Map:', rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log("Map has 'categoires' item", rest.has('categories'));
rest.delete(2);
console.log("Map after delete '2' itme:", rest);
console.log('Size of Map:', rest.size);
const arry = [1, 2];
rest.set(arry, 'Test');
console.log('Map after add the Array:', rest);
console.log('Size of map after add the Array:', rest.size);
console.log('Get Array itme of map:', rest.get(arry));

rest.set(document.querySelector('h1'), 'Heading');
console.log('The Element of Page in Map:', rest);

const italianFoods = new Set([
  'pasta',
  'goncchi',
  'tomatoes',
  'olive oil',
  'gralic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'tomatoes',
  'avocado',
  'gralic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);

console.log('Intersection of CommonFoods:', commonFoods);
console.log('Intersection of CommonFoods:', commonFoods);

const italianMexiacanFusion = italianFoods.union(mexicanFoods);

console.log(
  'Union of Italian and Mexican Foods (Withour Dublicated items):',
  italianMexiacanFusion
);
console.log('Union of Italian and Mexican Foods (With Duplicated items):', [
  ...italianFoods,
  ...mexicanFoods,
]);
console.log(
  'Union Array of Italian and Mexican Foods (Without Duplicated items):',
  new Set([...italianFoods, ...mexicanFoods])
);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference Italian foods items:', uniqueItalianFoods);

const unique_Mexican_Foods = mexicanFoods.difference(italianFoods);
console.log('Difference Mexican foods items:', unique_Mexican_Foods);

const unique_Italian_and_Mexican_foods =
  italianFoods.symmetricDifference(mexicanFoods);

console.log('Symmertic Difference Set: ', unique_Italian_and_Mexican_foods);
console.log('DisjointForm:', italianFoods.isDisjointFrom(mexicanFoods));


const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pasta',
]);


console.log('The Set:', ordersSet);

console.log('The string:', new Set('Jonas'));
console.log('The size of ordersSet:', ordersSet.size);
console.log('Check a item (Pizza):', ordersSet.has('Pizza'));
console.log('Check a item (Bread):', ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log('Check the new Set:', ordersSet);
// ordersSet.clear();

for (const order of ordersSet) console.log('Order Item:', order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = new Set(staff);
const staffUnique = [...new Set(staff)];
console.log('The Staff Unique Items:', staffUnique);

console.log('The Size of String Set:', new Set('AliZokaeaiDehaghani').size);


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
