'use strict';

///////////////////////////////////////
// Scoping in Practice

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();

*/

// console.log(me);
// console.log(job);
// // console.log(year);

// var me = "Jonas";
// let job = "teacher";
// const year = 1991;


// //Functions

// // console.log(addDecl(2,3));
// // console.log(addExpr(2,3));
// // console.log(addAddArrow(2,3));
   

// function addDecl(a,b){
//     return a + b;
// };

// const addExpr = function(a,b){
//     return a + b;
// };

// const addArrow = (a, b) => a + b;

// //EXAMple

// if(!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart(){
//     console.log("All products deleted");
// }

// console.log(this);

// const calcAge = function(birthYear){
//     console.log(2037 -birthYear);
//     console.log(this);
// };
// calcAge(1991);


// const calcAge1 = birthYear => {
//     console.log(2037 -birthYear);
//     console.log(this);
// };
// calcAge1(1990);


// jonas.calcAge();

// const matila = {
//     year : 2016,
// };


// matila.calcAge = jonas.calcAge;
// matila.calcAge();

// const f = jonas.calcAge;

 
// const jonas ={
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function(){
//         console.log(this);
//         console.log(2037 - this.year);

//         // //solution 1
//         // const self = this;
//         // const isMillenial = function(){
//         //     console.log(self);
//         //     console.log(this.year >= 1981 && this.year <=
//         //         1996);
//         // };


//         //Solution2 
//         const isMillenial = () =>  {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <=
//                 1996);
//         };
//         isMillenial();


//     },

//     greet : () => console.log(`Hey ${this.firstName}`),
// };
// jonas.greet();
// jonas.calcAge();

// //arguments keyword
// const addExpr = function(){
//     console.log(arguments);
//     return a + b;
// }
// addExpr(2,5);
// addExpr(2,5,8,12);

// var addArrow = (a,b) => {
//     a + b;
// }
// //Arrow functions do not have their own this keyword
    
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'jonas',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log('friend:', friend);
console.log('Me', me);