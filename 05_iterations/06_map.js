// map() function is just like filter() function but here it returns an array of values that the callback function returns
// map() function returns an array of values of whatever the callback function returns
// map() function expects a callback function as paramenter
// This callback function can have upto three parameter in order of (value, index, working_array)
let num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let processed_array = num_arr.map( (num, index, arr) => (num + 10));
console.log(processed_array);

// 
console.log("--------");

// Chaining of map and filter functions
console.log(num_arr.map( (num) => (num * 10) ).map( (num) => (num + 5) ).filter( (num) => (num > 50) )); // [ 55, 65, 75, 85, 95, 105 ]