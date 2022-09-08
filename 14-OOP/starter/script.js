'use strict';

/*
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    this.calcAge = function(){
        return 2037 - this.birthYear
    }
};

//1. New{} is created
//2. Function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}

const jonas = new Person('jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('jack', 1967);
console.log(matilda, jack);

console.log(jack instanceof Person);

//Prototype
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
};
console.log(jonas);

matilda.calcAge();
jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

//.prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species '));

console.log(jonas.__proto__);
//Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3,6,4,5,6,9,3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__)

Array.prototype.unique = function(){
    return [...new Set(this)]
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
 
const car = function(make, speed){
    this.currentSpeed = speed;
    this.make = make;

    this.accelerate = function(){
        this.currentSpeed+= 10;
        console.log(`${this.make} going at ${this.currentSpeed} Km/h`);
    };

    this.brake = function(){
        this.currentSpeed-= 5;
        console.log(`${this.make} going at ${this.currentSpeed} Km/h`);
    };

};


const one = new car('BMW', 110);
const two = new car('Mercedez', 95);

one.accelerate();
two.accelerate();
*/

//Class declaration
// const PersonCl = class{};

//Class declaration
class PersonCl {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    //Methods will be added to the .prototype property
    calcAge(){
        console.log(2037 - this.birthYear);
    }
};

const jessica = new PersonCl('jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

//addding methods manually
PersonCl.prototype.greet = function(){
    console.log(`Hey ${this.firstName}`);
};
jessica.greet();

//1.Classes are NOT hoisted
//2. Classes are also First-class citizen, they can be used anywhere
//3. Classes are executed in strict mode

const account = {
    owner :  'jonas',
    movements: [200, 530, 120, 300],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);