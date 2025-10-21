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

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
/*
console.log('a+very+nice+string'.split('+'));
console.log('Ali Zokaeai'.split(' '));

const passenger = 'Jessica and smith davis';

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of name) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};





capitalizeName('jessica and smith davise');
capitalizeName('علی ذکائی');

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Ali Zokaeai'.padStart(25, '0'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(121313320192012190000));

const message2 = 'Bad waether .... All Departues Delayed....';
console.log(message2.repeat(5));



const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnaS';
const passengerLower = passenger.toLocaleLowerCase();

const passengerCorrect =
  passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

const email = 'hello@jonas.io';

const loginEmail = '   Hello@jonas.Io \n';

//const lowerEmail = loginEmail.toLowerCase();
//const tri = (medEmail = lowerEmail.trim());

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

const priceGB = '288,97u';
const priceUS = priceGB.replace('u', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to barding door 23. Boarding door 23!';

console.log(announcement.replace(/door/g, 'gate'));

const plane = 'A320neo';

console.log(plane.includes('A320'));
console.log(plane.includes('A321'));
console.log(plane.startsWith('A32'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Aribus family');
}

const checkBaggage = function (items) {
  const baggag = items.toLowerCase();

  if (baggag.includes('kife') || baggag.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a loptop, soem of food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('got some snaks and a gun for protection');

const plane = 'A320';

console.log('Plan 0:', plane[0]);
console.log('Plan 1:', plane[1]);
console.log('Plan 2:', plane[2]);
console.log('Plan B737:', 'B737'[0]);

console.log('Length of Air Line:', airline.length);
console.log('Length of B737:', 'B737'.length);

console.log("Postion of 'r' in 'ariline':", airline.indexOf('r'));
console.log("Last position of 'r' in 'ariline':", airline.lastIndexOf('r'));

console.log('A Slice of airline string from index 4:', airline.slice(4));
console.log(
  'A Slice of airline string from index 4 to 7:',
  airline.slice(4, 7)
);

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(0, airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
const chechkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You god middle seat');
  else console.log('You got lucky');
};

chechkMiddleSeat('11B');
chechkMiddleSeat('23C');
chechkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas').slice(1));


const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow Card'],
  [69, 'Red Card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow Card'],
]);

const events = [...new Set(gameEvents.values())];
console.log('Game Event values:', events);
gameEvents.delete(64);
console.log('Geme Events MAP:', gameEvents);
console.log(
  `An Event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log('Time events:', time);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`${half} ${min}:${event}`);
}

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
