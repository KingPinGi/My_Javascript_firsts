'use strict';

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    this.calcAge = function(){
        return 2037 - this.birthYear
    }
};

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
