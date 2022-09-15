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

(function(){
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(product, quantity){
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart`);
    };

    const addToCart = function(product, quantity){
        console.log(`${quantity} $`)
    }
})