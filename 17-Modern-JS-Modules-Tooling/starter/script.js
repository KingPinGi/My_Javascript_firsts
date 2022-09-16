//importing module
// import { addToCart, totalPrice as price, totalQuantity } from './shoppingCart.js'; 

// console.log('importing module');
// //console.log(shippingCost);

// addToCart('BREAD', 5);
// console.log(price, tq);

// console.log('Importing module');
// console.log(shippingCost);

// import *as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice); 

// import add,{ addToCart, totalPrice as price, totalQuantity } from './shoppingCart.js';
// console.log(price);

// import olodo, {cart} from './shoppingCart.js';
// olodo('pizza', 2);
// olodo('bread', 2);
// olodo('apples', 2);

// console.log(cart);

/*
const ShoppingCart2 = (function(){
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(product, quantity){
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
    };

    const orderStock = function(product, quantity){
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return{
        addToCart,
        cart,
        totalQuantity,
        totalPrice,
        shippingCost
    };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);


//Export
export.addToCart = function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
};

//Import
const { addToCart } = require('./shoppingCart.js');
*/

//////////////////////////////////
////INTRODUCTION TO NPM
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';
import cloneDeep from 'lodash-es';

const state = {
    cart: [
        {product : 'bread', quantity: 5},
        {product : 'pizza', quantity: 5},
    ],
    user: {loggedIn : true},
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if(module.hot){
    module.hot.accept()
};


