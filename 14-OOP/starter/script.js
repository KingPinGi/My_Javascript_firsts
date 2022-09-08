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

*/

/*
const arr = [3,6,4,5,6,9,3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__)

Array.prototype.unique = function(){
    return [...new Set(this)]
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
 

*/

//Class declaration
// const PersonCl = class{};

//Class declaration

/*
class PersonCl {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    //Methods will be added to the .prototype property
    calcAge(){
        console.log(2037 - this.birthYear);
    }

    greet(){
        console.log(`Hey ${this.firstName}`);
    }

    get age (){
        return 2037 - this.birthYear;
    }

    //SET A PROPERTY THAT ALREADY EXISTS
    set fullName(name){
        console.log(name); 
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name.`)
    }

    get fullName(){
        return this._fullName;
    }

    static hey(){
        console.log('Hey there');
        console.log(this.firstName);
    };
};

const jessica = new PersonCl('jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.fullName);



console.log(jessica.__proto__ === PersonCl.prototype);

//addding methods manually
PersonCl.prototype.greet = function(){
    console.log(`Hey ${this.firstName}`);
};
jessica.greet();

PersonCl.hey();

const walter = new PersonCl('Walter White', 1965);

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

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();


class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    get speedUS() {
      return this.speed / 1.6;
    }
  
    set speedUS(speed) {
      this.speed = speed * 1.6;
    }
}
  
const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);


*/

const Person = function (firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}