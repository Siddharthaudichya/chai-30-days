const marvel_heroes = ["spiderman", "Iron man", "Thor", "Hawkeye"];
const dc_heroes = ["Wonder Woman", "Batman", "Superman", "Flash"];

//Pushing 'dc_heroes' in 'marvel_heroes'
marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);
console.log(marvel_heroes[4][1]); // Batman
marvel_heroes.pop();  // Remove the above operation

console.log("..............................");

// Concat(item [can include arrays as well ]): Returns a new array by combining specified data elements.
let name = ["shinu", "KIKU", "Ajjay bhaiya"];
let all_heroes = marvel_heroes.concat(dc_heroes, name, "nagesh");
console.log(all_heroes);
all_heroes.splice(0);
console.log(all_heroes);

// spread operator[...]
console.log("...........spread operator............");
all_heroes = [...marvel_heroes,...dc_heroes];
console.log(all_heroes);

// Intersting functions and their results
const arr_inside_arr_inside_arr = [1,2,3,4,[5,6,7],[8,9,[10,]]];

// flat(frequency): Returns a single combined array if frequency = Infinity
const clear_arr = arr_inside_arr_inside_arr.flat(Infinity); // Instead of 'Infinity' we can write any number.
// If 1 is passed then it will combine 1 sub array and leave the rest as it is .
console.log(clear_arr);     // 1, 2, 3, 4 ,5 ,6 , 7, 8, 9, 10

// Data Scrapping
// sometimes data can be in node list form or in object form or in string form and we need those data to array
console.log(Array.isArray("shinu"));  // false

// from(): converts and returns an array
console.log(Array.from("shinu"));  // [ 's', 'h', 'i', 'n', 'u' ]

console.log(Array.from({name: "shinu"})); // It doesnt return anything as value is passed in key: value pair .
// We need to specify it to convert either key or value to get the desired array.
/* Like this:
     like this Array.from(object.keys({id:1234, name:"shinu"})); for keys //['id','name']
     like this Array.from(object.keys({id:1234, name:"shinu"})); for values // [1234, "shinu"]
*/

// of(items): Works similar to from()
console.log(Array.of(1,2,3,4,"shinu"));  // [ 1, 2, 3, 4, 'shinu' ]