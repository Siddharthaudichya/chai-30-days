// reduce(callback function, initial_value)
let arr = [1, 2, 3, 4, 5];

let initial_value = 0;

let result = arr.reduce( (accumulator, curr_value) => (
    accumulator + curr_value
), initial_value);

console.log(result);

// 
console.log("--------");

// Shopping Cart Example
let shoppingCart = [
    {
        name: "JS Course",
        price: 2999,
        inCart: true
    },
    {
        name: "DSA Course",
        price: 4999,
        inCart: false
    },
    {
        name: "Python Course",
        price: 6999,
        inCart: true
    },
    {
        name: "Java Course",
        price: 9999,
        inCart: false
    },
    {
        name: "Node JS Course",
        price: 1999,
        inCart: true
    },
];

let cart_sorted = shoppingCart.filter( (item, index) => (item.inCart === true) );
let price_sorted = cart_sorted.map( (item, index) => (item.price));

let cart_total = price_sorted.reduce( (acc, curr_value) => ( acc + curr_value ), 0);

console.log(`Total: ${cart_total}`);