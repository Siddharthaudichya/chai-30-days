                    // Parameters
function addTwoNumbers(num1, num2) {
    console.log(`Number 1: ${num1}`);
    console.log(`Number 2: ${num2}`);

    return num1 + num2;
}
                    // Arguments
console.log(`Sum: ${addTwoNumbers(5, 10)}`);

// 
console.log("--------");


function isLoggedIn(userName) {
    if(!userName) {
        console.log(`Fatal Error: 501`);
        return `User not logged in.`;
    }
    return `${userName} is logged in.`
}

console.log(isLoggedIn("kiku__69"));
console.log();
console.log(isLoggedIn());

// Rest operator: Passing any number of data
function calculateCartPrice(fixedPrice1, fixedPrice2, ...price) {
    return `${fixedPrice1} ${fixedPrice2} ${price}`;
}

console.log(calculateCartPrice(100, 200, 300, 400));


// 
console.log("--------");


// Passing object to a function
function getObj(obj) {
    return `${obj.email} is is logged in as ${obj.userName}`;
}

let myObj = {
    userName: "kiku__69",
    email: "kiku@gmail.com"
}

console.log(getObj(myObj));


// Passing array to a function
function getArr(arr) {
    arr[0] = 10;
    return arr;
}

let myArr = [1, 2, 3, "Kiku", true];

console.log(getArr(myArr));