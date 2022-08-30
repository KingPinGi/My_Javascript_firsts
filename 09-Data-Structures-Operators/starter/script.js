'use strict';

// Data needed for a later exercise

// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(arr);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main,secondary);
 
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5,6]];
// const [i, , [j, k]] = nested;
// console.log(i,j,k);

// const [p,q,r] = [8, 9];
// console.log(p,q,r);

// const {name1, openingHours, categories} = restaurant;
// console.log(name1, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours, 
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags)
 
// //Default values, we use = to create default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a:23, b:7, c:14};

// ({a,b} = obj); 
// console.log(a, b);

// //Nested Objects
// const {fri: {open: o, close: c}} = openingHours;
// console.log(o, c);
// //probably the same thing as console.log(restaurant.openingHours.fri);

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Olubuse Quarters',
//   mainIndex: 2,
//   starterIndex: 2,
// })
// const arr = [7,8,9];
// const newArray = [1,2, ...arr];
// console.log(newArray);

// console.log(...newArray);
// console.log(newArray);

// const newMenu = [...restaurant.mainMenu, 'Vegtable Soup'];
// console.log(newMenu);


// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join two arrays
// const menu = [...restaurant.starterMenu] + [","] + [...restaurant.mainMenu];
// console.log(menu);
// //Above is cap, sobbing....

// const realMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(realMenu);

// //Iterables are arrays, strings,maps,sets NOT OBJECTS
// const str = 'Jonas';
// const letters = [...str, '', 'S..'];
// console.log(letters);

//Real World Example
// const ingredients = [prompt('Let\'s make pastas! Ingredient 1?'), prompt(
//   'Ingredient 2?'), prompt('Ingredient 3')];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1],ingredients[2]);
// restaurant.orderPasta(...ingredients);

//Objects
// const newRestuarant = { foundedIn: 1998, ...restaurant, founder:"Usman Danfolio"};
// console.log(newRestuarant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name1 = "Get the Breadname";
// console.log(restaurantCopy.name1);
// console.log(restaurant.name1);

const openingHours ={
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name1: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //inputing the opninGHours
  openingHours,
  //or 
  // openingHours: openingHours

  order(starterIndex, mainIndex){
    return (this.starterMenu[starterIndex], this.mainMenu[mainIndex]);
  },
 
  orderDelivery({starterIndex, mainIndex, time, address}){
    console.log(`Order recivedd! ${this.starterMenu[starterIndex]} and
    ${this.mainMenu[mainIndex]} will
    be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1},
    ${ing2} and ${ing3}`)
  },

  orderPizza(mainIndegredient, ...otherIngredient){
    console.log(mainIndegredient);
    console.log(otherIngredient);
  },
};

//Property name
const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties){
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //Property Values
// const values = Object.values(openingHours);
// console.log(values);

// //Entire object
// const entires = Object.entries(openingHours);
// console.log(entires);

// for (const [key, {open, close}] of entires) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }


// if (restaurant.openingHours && restaurant.openingHours.mon)
//  console.log(restaurant.openingHours.mon.open)
// //OPTIONAL CHAINING IN JAVASCRIPT
// console.log(restaurant.openingHours.fri?.open);
// console.log(restaurant.openingHours?.fri?.open);
// console.log(restaurant.openingHours.fri?.open);
// //Example
// const days  = ['mon', 'tue', 'wed', 'thu', 'fri','sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ??  'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }
// //Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRIzzla?.(0, 1) ?? 'Method does not exist');
// //Arrays
// const users = [{name: 'Jonas', email:'jonas@jonas.io'}];
// console.log(users[0]?.name ?? 'user array empyt');


// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for(const item of menu.entries()) console.log(item);
// //OLD SCHOOL WAY DOWN HERE
// for (const item of menu.entries()){
//   console.log(`${item[0] + 1}: ${item[1]}`)
// }
// //New way
// for (const[i, el] of menu.entries()){
//   console.log(`${i +1} : ${el}`)
// }





// //
// console.log(3 || 'Tonbi');
// console.log('' || 'Tobi');
// console.log(true || 0);
// console.log(undefined || null); 

// //OR OPERATOR
// restaurant.numGuests = 0;
// let guests31 = restaurant.numGuests || 10;
// console.log(guests31);

// //NULLISH OPERATOR
// //Solves the problem above about the falsy valu of 0
// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ?? 10;
// console.log(guests1);

// //AND
// if (restaurant.orderPizza){
//   restaurant.orderPizza('mushroom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom','spinach');

// //SPEAD, becasue it is on the right hand of =
// const arr = [1,2, ...[3,4]];

// //REST, because on LEFT side of =
// const [a, b, ...others] = [1,22,3,4,5];
// console.log(a,b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //objects
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(restaurant.openingHours);
// console.log(sat,weekdays);
// console.log(sat);
// console.log(weekdays);

//  //FUNCTIONS, PREPARE TO BE BAMBOOZEDDD
//  const add = function(...numbers){
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// }
// add(2,4);
// add(8,3,42,3,2321,12332,2323,12,3213,2123,2131);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("Spiritually", "i actually need help", "for real");

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const {odds} = game;
// const oya = Object.entries(odds);
// for (const [key , odddd] of oya){
//   if (odddd === 3.25){
//     console.log(`Odd of draw: ${odddd}`);
//   }else{
//   console.log(`odd of victory ${game[key]}: ${odddd}`)
// }
// };

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// };
// console.log()


// //1
// const {scored} = game;
// for (const [i, players] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${players}`);
// }
// //2
// const entires1 = Object.entries(odds);
// console.log(entires1);
// const {players} = game;
// // console.log(players);



// const [gk, ...fieldPlayers] = players[0];
// // console.log(fieldPlayers);
// // console.log(gk);

// const allPlayers = [...players[0], ...players[1]];
// // console.log(allPlayers);

// const players1final = [...players[0], 'Thiago', 'coutinho', 'perisic'];


// // console.log(odds);
// const {team1, draw, team2} = odds;
// // console.log(team1, draw, team2);

// const printGoals = function(...players){
//   console.log(players);
//   console.log(`${players.length} were scored`);
// }

// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more  likely to win');
// team1 > team2 && console.log('Team 2 is more  likely to win');



// for (const [key, oddd] of entires1) {
//   let sum = 0;
//   let avgODD = 0;
//   sum = sum + oddd;
//   avgODD = sum / entires1.length
//   console.log(`${avgODD}`);

// const ordersSet = new Set([
//   'pasta',
//   'pizza',
//   'risotto',
// ]);

// console.log(ordersSet);

// console.log(new Set('Jonass'));
// console.log(ordersSet.has('pizza'));
// console.log(ordersSet.has('Bread'));
// console.log(ordersSet.size);
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

//SETS
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);
// const staff1 = [...staffUnique]; 
// console.log(staff1);

// console.log(new Set('Jonasschedtmann').size);

//MAPS
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 23 ;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// // rest.clear();
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), "Heading" );
// console.log(rest);
// console.log(rest.size); 

// //MAPS ITERATION
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your Answer'));
// console.log(answer);

// if (answer !== 3){
//   console.log(question.get(false));
// }else{
//   console.log(question.get(true));
// };
// //OR BETTER
// console.log(question.get(question.get('correct') === answer));

// //Convert map to array
// console.log(...question);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// //1, i fucked up bruh, but i would have done a rough coding
// const events = [...new Set(gameEvents.values())];
// console.log(events); 
// //2
// gameEvents.delete(64);
// console.log(gameEvents);
// //3
// 5
// for (const[key, value] of gameEvents){
//   console.log(`An event happend ${value} at ${key}`);
// }
// //4
// for(const[key,value] of gameEvents){
//   if (Number(key) < 45){
//     console.log(`[FIRST HALF] ${key}: ${value}`)
//   }else{
//     console.log(`[SECOND HALF] ${key}: ${value}`)
//   }
// }
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4.
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

// Working With Strings - Part 1
// const airline = 'TAP Air Portugal';
const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));
 
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1)); 

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
//   else console.log('You got lucky 😎');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

/*
//  Working with Strings
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());  

const passenger = 'jonAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() +
passengerLower.slice(1,5);
console.log(passengerCorrect);

const email = 'hellojonas.io';
const loginEmail = ' hellojonas.io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

//replacing
const priceGB = '288,97?';
const priceUS = priceGB.replace('?', '$').replace(",", '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Airb'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

const checkBaggage = function(items){
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are not allowed to board bitsch');
  }else{
    console.log("You are free to board");
  }
};
checkBaggage('i have a Laptop, some Food and a Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Aina Oluwatobiloba'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split('c');

const newName = ['Mr.', firstName, lastName.toLowerCase()].join(' '); 

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

//padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

//Application
const maskCreditCard = function(number){
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(787989));
console.log(maskCreditCard(4242424244131));
console.log(maskCreditCard("739823293839223213"));

// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);


// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click',
// function(){

// })


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


const button = document.querySelector('button');
button.classList.add('button');

document.querySelector('button').addEventListener('click', function(){
  const text = document.querySelector('textarea').value;
  const [firstName, secondName] = text.split('_');
  const nameArray = [];
  const second = secondName;
  nameArray.push(firstName + second[0].toUpperCase() + second.slice(1));
  const finalName = nameArray.toString();
  console.log(finalName);

});
const name1 = 'underscore_case';
const [firstname, secondname] = name1.split('_');
console.log(firstname, secondname)
const n = secondname;
console.log(n);
// n.replace(n[0], n[0].toUpperCase);
console.log(n);
const no = [];
no.push(firstname + n[0].toUpperCase() + n.slice(1));
console.log(no);
console.log(no.toString());

const runOnce = function(){
  console.log('This will never run again');
};
runOnce();

//LIFE
(function(){
  console.log('This will never run again');
})();

(()=> console.log('This will also never run again'))();
*/
//CLOSURES
const secureBooking = function(){
  let passengerCount = 0;

  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
