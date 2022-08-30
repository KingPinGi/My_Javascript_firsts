'use strict';
/*
const bookings = [];

const createbookings = function (
    flightNum, 
    numPassengers = 1, 
    price = 198 * numPassengers
    ){
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
};

createbookings('LH123');
createbookings('LH123', 2);
createbookings('LH123', 3);


const flight = 'LH123';
const jonas = {
    name: 'Aina Oluwatobiloba',
    passport: 2478998912029,
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 2478998912029){
        alert('Checked in');
    }else{
        alert('Wrong Passport')
    }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

//is the same thing as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000000);  
}
newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas.passport);



const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
    const[first, ...others] = str.split(' ');
    console.log(first);
    console.log(others);
    return [first.toUpperCase(), ...others].join(' ');
};


//HIGHER-ORDER FUNCTION
const transformer = function(str, fn){
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};


transformer('JavaScript is one of the best', upperFirstWord);
transformer('JavaScript is one of the best', oneWord);

//JS uses callbacks all the time
const high5 = function(){
    console.log('Hello!!!!');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);


const greet = function(name){
    return function(greeting){
        console.log(`${name} ${greeting}`);
    }
};

const greeterHey = greet("Oluwatobiloba Aina");
greeterHey('Hey');
greeterHey('Hello, its');

//Rewrite using Arrow Function
//const clacAge = birthYear => 2037 - birthYear;
const greetArr = greeting => name => console.log(`${name} ${greeting}`);

greetArr('Hello')('Jonas');

*/

const lufthansa = {
    airline: 'Lufthense',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight
        ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name});
    },
};
lufthansa.book(239, "Aina OLuwtobiloba")
lufthansa.book(254, "John smith")
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

//DOes not work
//book(23, 'sarah Williams')
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};
book.call(swiss, 990, 'Aina OLuwatobiloba');
console.log(swiss);

//Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

//ORRRRRRR
book.call(swiss, ...flightData)

//0rrrrrr
//using bind
book.bind(eurowings);
const bookEw = book.bind(eurowings);
bookEw(23, 'Equardoo lines');

const bookLX = book.bind(lufthansa);
const bookEw23 = book.bind(eurowings, 23);

bookEw23('AINA OLUWATOBILOBA')

//WITH EVENT LISTENERS
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind
(lufthansa));

//partial Applications
const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));
// //Alternate way of running the code

const addVAT_1 = function(rate){
    return function (value) {
        let value2 = value + (value * rate);
        console.log(value2);
    };
};

const hello = addVAT_1(0.23); 
const newStuffs = hello.bind(0.23);
console.log(newStuffs(233));
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. 
The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. 
  The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, 
  if the option is 3, increase the value AT POSITION 3 of the array by
   1. Make sure to check if the input is a number and if the number makes sense 
   (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. 
The method takes a string as an input (called 'type'), which can be either 
'string' or 'array'. If type is 'array', simply display the results array as it is,
 using console.log(). This should be the default option. If type is 'string',
  display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' 
method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data.
 Use both the 'array' and the 'string' option. Do NOT put the arrays in the 
 poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
