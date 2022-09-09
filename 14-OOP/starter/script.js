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




const Person = function (firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course){
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    Person.call(this, firstName, birthYear); 
    this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
}

const mike = new Student('Mike', 2022, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike);
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


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
class StudentCl extends PersonCl{
    constructor(fullName, birthYear, course){
        super(fullName, birthYear);
        this.course = course
    }
    introduce(){
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
    calcAge(){
        console.log(`I'm ${2037 - this.birthYear} years oldl, but as a student I feel more like ${2037 - this.birthYear + 10}`)
    }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();


const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course){
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}


const jay = Object.create(StudentProto); 
jay.init('Jay', 2010, 'Computer Science')
jay.introduce();
jay.calcAge();
*/

//1 . Public fields
//2. Private fields
//3. Public methods
//4. Private methods

class Account {
    // 1) Public fields (instances)
    locale = navigator.language;
  
    // 2) Private fields (instances)
    #movements = [];
    #pin;
  
    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency = currency;
      this.#pin = pin;
  
      // Protected property
      // this._movements = [];
      // this.locale = navigator.language;
  
      console.log(`Thanks for opening an account, ${owner}`);
    }
  
    // 3) Public methods
  
    // Public interface
    getMovements() {
      return this.#movements;
    }
  
    deposit(val) {
      this.#movements.push(val);
      return this;
    }
  
    withdraw(val) {
      this.deposit(-val);
      return this;
    }
  
    requestLoan(val) {
      // if (this.#approveLoan(val)) {
      if (this._approveLoan(val)) {
        this.deposit(val);
        console.log(`Loan approved`);
        return this;
      }
    }
  
    static helper() {
      console.log('Helper');
    }
  
    // 4) Private methods
    // #approveLoan(val) {
    _approveLoan(val) {
      return true;
    }
  }
  
  const acc1 = new Account('Jonas', 'EUR', 1111);
  
  // acc1._movements.push(250);
  // acc1._movements.push(-140);
  // acc1.approveLoan(1000);
  
  acc1.deposit(250);
  acc1.withdraw(140);
  acc1.requestLoan(1000);
  console.log(acc1.getMovements());
  console.log(acc1);
  Account.helper();
  
//   console.log(acc1.#movements);
//   console.log(acc1.#pin);
  // console.log(acc1.#approveLoan(100));

  //chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(5000)

console.log(acc1.getMovements());