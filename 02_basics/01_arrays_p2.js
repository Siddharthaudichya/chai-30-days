const marvel_heroes = ["Spider Man", "Iron Man", "Thor", "Hawkeye"];
const dc_heroes = ["Wonder Woman", "Batman", "Superman", "Flash"];

// Pushing `dc_heores` in `marvel heroes`
marvel_heroes.push(dc_heroes);
console.log(marvel_heroes); // ['Spider Man', 'Iron Man', 'Thor', 'Hawkeye', [ 'Wonder Woman', 'Batman', 'Superman', 'Flash' ]]
console.log(marvel_heroes[4][1]); // Batman


marvel_heroes.pop(); // Remove the above operation

// 
console.log("------Concat------");


// concate(items[can include arrays as well]): Returns a new array by combining specified data elements
let name = ["Ajay", "Shinu"];
let all_heroes = marvel_heroes.concat(dc_heroes,  name, 1, "Nagesh");
console.log(all_heroes); // ['Spider Man', 'Iron Man', 'Thor', 'Hawkeye', 'Wonder Woman', 'Batman', 'Superman', 'Flash', 'Ajay', 'Shinu', 1, 'Nagesh']


all_heroes.splice(0); // Remove all the elemnts from `all_heroes` for further operations

// 
console.log("------Spread Operator------");


// Spread operator [...]: Joins two array
all_heroes = [...marvel_heroes, ...dc_heroes, 1, "Kiku"];
console.log(all_heroes); // ['Spider Man', 'Iron Man', 'Thor', 'Hawkeye', 'Wonder Woman', 'Batman', 'Superman', 'Flash', 1, 'Kiku']


// Interesting functions and their results
const arr_inside_arr_inside_arr = [1, 2, 3, 4, [5, 6, 7], [8, 9, [10, 11]]];

// flat(depth): Returns a single combined array if depth = infinity
const clear_arr = arr_inside_arr_inside_arr.flat(Infinity); // Instead of infinity we can write any number. If 1 is passed then it will combine 1 sub array and leave the rest as it is.
console.log(clear_arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// 
console.log("------------");


// Data scrapping
// Sometimes data can be in Node List form or in Objects form or in String form and we need those data in array
console.log(Array.isArray("Kiku")); // false

// from(data): Converts and returns an array
console.log(Array.from("Kiku")); // ['K', 'i', 'k', 'u']

console.log(Array.from({name: "Kiku"})); // [] // It returns empty array as value is passed in key: value pair. We need to specify it to convert either key or value to get the desired array.
/* Like this: 
    Array.from(Object.keys({id: 1234, name: "Kiku"})); for keys // ['id', 'name']
    Array.from(Object.values({id: 1234, name: "Kiku"})); for values // [1234, 'Kiku']
*/

// of(items): Works similar to from()
console.log(Array.of(1, 2, 3, 4, "Kiku")); // [1, 2, 3, 4, 'Kiku']

// 
console.log("------------");


// map(function): Picks up individual element from the array and performs the function specified in the map parmeter. Returns full array after the operation.
let myArr = [4, 9, 16, 25];
console.log(myArr.map(Math.sqrt)); // [2, 3, 4, 5]

// Custom function in map
console.log(myArr.map((add) => add + 1)); // [5, 10, 17, 26]