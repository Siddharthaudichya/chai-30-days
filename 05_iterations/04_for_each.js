// forEach() in Array
// forEach() function doesnt return anything (undefined)
// forEach() function expects a callback function as paramenter
// This callback function can have upto three parameter in order of (value, index, working_array)
let language = ['English', 'Hindi', 'Tamil', 'Kannad', 'Korean'];

language.forEach( (item, index, arr) => {
    console.log(`${index}: ${item}, [${arr}]`);
});

console.log("--------");

language.forEach(slice); // Passing the reference of the function declared in the global scope
function slice(item, index, arr) {
    let sliced = item.slice(0, 1);
    console.log(`${index}: ${sliced}`);
}

// forEach() in Object
let userInfo = [
    {
        userName: 'kiku__69',
        age: 22
    },
    {
        userName: 'shinu',
        age: 21
    },
    {
        userName: 'ajjayBhaiya',
        age: 23
    },
]
userInfo.forEach( (item, index, userInfo) => {
    console.log(`${index} : ${item.userName}\n    ${item.age}`);
})