'use strict';
// enterig with html, bruhhh crazy struffssss
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const displayMovements = function(movements, sort = false  ){
  containerMovements.innerHTML = '';


  const movs = sort ? movements.slice().sort((a, b) => a - b): movements;
  
   movs.forEach(function(mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const sign = '$';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}${sign}</div>
  
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
   });
};
displayMovements(account1.movements);


const createUsername = function(acc){

accounts.forEach(function(acc){
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  })
};
createUsername(accounts);

const updateUI = function(acc){
  //Display movements
  displayMovements(acc.movements);

  //Display blance
  calcDisplayBlance(acc);

  //display summary
  calcDisplaySummary(acc);
};
let currentAccount ;



// console.log(accounts);

const deposits = movements.filter(function(mov){
  return mov > 0;
})
// console.log(movements);
// console.log(deposits)

const withdrawal = movements.filter(function(mov){
  return mov < 0;
});
const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawal);
// console.log(withdrawals);



const user = 'Steven Thomas Williams';
 
const calcDisplayBlance = function(acc){
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} EUR`;
};


const calcDisplaySummary = function(acc){
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}$`;

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => Math.trunc(acc + mov), 0);
  labelSumOut.textContent = `${Math.abs(out)}$`;

  const interest = acc.movements.filter(mov => mov > 0).map(deposit => deposit * acc.interestRate/100).filter((int, i, arr) =>{ return int >= 1;}).reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}$`;

}


//EVENT LISTENER
btnLogin.addEventListener('click', function(e){
  //Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  if(currentAccount?.pin === Number(inputLoginPin.value)){
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    //Clear input fiels
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); 

    updateUI(currentAccount)

    
    
  }
});

btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username){
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }

});

btnLoan.addEventListener('click', function(e){
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    //add movement
    currentAccount.movements.push(amount);

    //update ui
    updateUI(currentAccount);
  };
  inputLoanAmount = '';

})

btnClose.addEventListener('click', function(e){
  e.preventDefault();
  
  
  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin){
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //Delete account
    accounts.splice(index, 1);

    //Hide ui
    containerApp.style.opacity = 0;
    
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});


 
 


// console.log(containerMovements.innerHTML);
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
//MY SOLUTION
//THE DATA
// const dogsJulia = [3,5,2,12,7];
// const dogsKate = [4, 1, 15, 8, 3];

// const newDogsKatie = dogsJulia.slice(1, -2);
// const allDogs = [...newDogsKatie, ...dogsKate];

// allDogs.forEach(function(dogs, i, arr){
//   if (dogs >= 3){
//     console.log(`Dog number ${i + 1} is an adult and is ${dogs} years old`);
//   }else{
//     console.log(`Dog number ${i + 1} is a puppy`);
//   }
// }
// )



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);



/*
/////////////////////////////////////////////////
//SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log(arr.slice(1,-2));
console.log(arr.slice());
console.log([...arr] );

//SPLICE
// consol e.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);
 
//reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); 

//concat
const letters = arr.concat(arr2);
console.log(letters); 

//JOIN
 console.log(letters.join(' - '));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements.entries()){
  if(movement > 0){
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----FOREACH----');
//when using forech method the order of the parameters are .foreach(currentElement, index, theEntireArray)
movements.forEach(function(mov, i, arr){
  if(mov > 0){
    console.log(`mov ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Mov ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

//WE cant break out of a foreach loop, the continue and break statements do not work 
//in a foreach method


//foreach loop with maps and sets

//MAPS
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
});

//SET
const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'USD']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, key, map){
  console.log(`${ value}: ${value}`);
})

const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd);
// const movementsUSD = movements.map(function(mov){
//   return Math.trunc(mov * eurToUsd);
// });


console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescription = movements.map((mov, i ) => {

  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}` 

  
}); 
console.log(movementsDescription);
*/

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀


// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

//   return average;
// };
const calcAverageHumanAge2 = ages => 
   ages
   .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
   .filter(age => age >= 18)
   .reduce((acc, age,i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2); 

const eurToUsd = 1.1;

//PIPELINE
const totalDepositUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0) 
console.log(totalDepositUSD);



const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
 


console.log(movements);

//EQUALITY
console.log(movements.includes(-130));

//CONDITION
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

//every:condition
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));


//Strings 
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

//Numbers
//sort works like arranging with strinmgs
console.log(movements);

//return < 0, A, B(keep order)
//return > 0, b, a(switch order)
//Ascending
// movements.sort((a, b) => {
//   if (a > b)
//   return 1;
//   if(b > a)
//   return -1;
// }
// ); 
movements.sort((a,b) => a - b);
console.log(movements);
//descending
// movements.sort((a, b) => {
//   if (a < b)
//   return 1;
//   if(b < a)
//   return -1;
// }
// );
movements.sort((a,b) => b - a);
console.log(movements);
*/

//creating array
// const arr = ([1,2,3,4,5,6,7]);
// console.log(new Array(1,2,3,4,5,6,7)); 

// //Empty arrays with fill method
// const x = new Array(7);
// console.log(x);
// // console.log(x.fill(1));
// // console.log(x.fill(3, 5));
// console.log(x.fill(1, 3, 5));

// arr.fill(23, 2, 6);
// console.log(arr);

// //Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({length: 7}, (cur, i) => i + 1);
// console.log(z); 

// labelBalance.addEventListener('click', function(){
//   const movementsUI = Array.from(document.querySelectorAll('.movements-value')).el => Number(el.textContent.replace('$', '');

//   console.log(movementsUI);
// })


/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// let i = 0;
// dogs.forEach(function(weight){
//   let recommendedFood = 0;
//   recommendedFood = weight ** 0.75 * 28;
//   dogs.indexOf()
//   dogs.splice( {i}, 0,`recommendedFood : ${recommendedFood}`);
//   i++;
// });
// console.log(dogs);

dogs.forEach((dog) => {
  let recommendedFood = 0;
  recommendedFood = dog.weight ** 0.75 * 28;
  dog.recommendedFood = Math.trunc(`${recommendedFood}`);
});
console.log(dogs);

dogs.forEach((dog) => {
  if (dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10) ){
    console.log('Your Dog is eating well');
    console.log(`${dog.owners}`)
  }else if (dog.curFood < (dog.recommendedFood * 0.90)){
    console.log('Your dog isnt eating well');
    console.log(`${dog.owners}`)
  }else if (dog.curFood > (dog.recommendedFood * 1.10)){
    console.log('Your dog is overeating');
    console.log(`${dog.owners}`)
  }
});