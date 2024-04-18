let mySym = Symbol("sym1")
const empInfo = {
    id: 56,
    name: "siddharth",
    email: "shinu@gmail.com",   
    [mySym]: "sym2", // To use symbol in object this is how the syntax looks like
    "full name": "shinu 56",
    salutation: () => {
    console.log(`hello:${empInfo.name}`);
    }
} // non singleton

const empAddress = {
    city:"Bhopal" ,
    state:"MP" ,
    country:"USA" ,
} // non singleton

// const obj = {empInfo,empAddress};

// some functions of objects
// assign(target,source): Joins all the objects in the parameter 
const empObj1 = Object.assign({},empInfo,empAddress); // Here target is an empty object and source is empInfo and empAddress.
// Putting {} in target assures that the return value is absolutely an object so it is a good practise to put target as empty object{}.
console.log(empObj1);

// JOining using spread operator
const empObj2 = {...empInfo,...empAddress};
console.log(empObj2);

// Array of objects
const Bumble = [
    {
        name:"shinu",
        age:21,
    },
    {
        weds:"nikah kabool",
        "marriage date":22,
    },
    {
        name:"Sundar si kanya",
        age:20,
    },

];
console.log(Bumble[1].name);
console.log(Object.keys(empInfo));   // [ 'id', 'name', 'email', 'full name', 'salutation' ]
console.log(Object.values(Bumble));
// console.log(Object.entries(Bumble));
console.log(Object.entries(empInfo));

// hasOwnProperty(tosearch): Returns a boolean result by checking if the specified key is present in the object or not.
console.log(empInfo.hasOwnProperty('email'));  // True
console.log(empInfo.hasOwnProperty('city'));   // False
