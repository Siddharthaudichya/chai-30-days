/* Types of scope:
    // Global Scope: Variables declared outside any function or loop or conditional statement belongs to global scope category
                    These types of variables are accessible anywhere in a program
    //
    // Local Scope: Variables declared inside loop or functions or conditional statement belongs to local scope category
                    These types of variables are restricted to be used within that function or loop it was declared in
                // There are two types of Local Scope:
                    Functional Scope: Variables declared inside functions. `var` is a functional scope
                    Block Scope: Variables declared inside loops or conditional statements(if, for, while, etc...). `let` and `const` are block scope
                // 
    //
*/

// BLOCK SCOPE
// Global Varioables
let a = 10;
const b = 20;
var c = 30;

if(true) {
    // Since `a`, `b`, `c`, are global variables therefore they are accessible everywhere
    console.log("Globally defined a(let), b(const), c(var");
    // console.log("Inner a: ", a); // 10 // Error: as it was used before declaration of `a`. It wont be the case if `a` wasnt declared again inside this scope.
    console.log("Inner b: ", b); // 20
    console.log("Inner c: ", c); // 30

    // 
    console.log();


    // Local variables
    let d = 40;
    const e = 50;
    var f = 60;

    console.log("Locally defined d(let), e(const), f(var)");
    console.log("Inner d: ", d);
    console.log("Inner e: ", e);
    console.log("Inner f: ", f);

    // 
    console.log();

    console.log("a(let) = 300, c(var) = 400");
    let a = 300;
    var c = 400;
    console.log("Inner a after update: ", a);
    console.log("Inner c after update: ", c);
}

console.log("Outer a after update: ", a); // 10 // This didnt update because it was defined using `let` and `let` is a block scope.
console.log("Outer c after update: ", c); // 400 // This updated because it was defined using `var` and `var` is a functional scope.
                                                // Anything defined under `var` is globally accessible.
                                                // But if it is defined inside a function, it is accessible only inside that function.

// console.log("Outer: ", d); // We will get an error `d is undefined` as it was declared inside `if` conditional statement so it is only accessible inside `if`
// console.log("Outer: ", e); // Same error here
console.log("Outer f: ", f); // No error as var is a functional scope. If a variable is defined using `var` anywhere excpet inside functions, it is accessible everywhere

// 
console.log("---------------");

// FUNCTIONAL SCOPE
function one()
{
    let username = "Kiku";

    function two()
    {
        let website = "Github";

        console.log(username); // Kiku // This generates an output as it was declared outside this scope (username is global to this scope)
    }
    two();

    // console.log(website); // This will return an error as it `website` is not declared in this scope
};

one();


// Interesting Concept (Hoisting)

addOne(5); // In this case it wont return any error
function addOne(num) {
    return num + 1;
};


// addTwo(5); // If a function is defined as expression or variable, and this function is called before its definition, then it will return an error saying, `Cannot access before initialization`

// Expression form of function definition
const addTwo = function (num) {
    return num + 2;
};
addTwo(5);
// This is an important example of Javascript `HOISTING`

/* Extra Gyan:
    Closure: Bundling multiple function inside a function (Nested functions) with references to its surrounding state (Lexical Environment).
    Hoisting: The default behavior in JavaScript where declarations of variables and functions are moved to the top of their respective scopes
            during the compilation phase.
            Source (hoisting): https://www.freecodecamp.org/news/what-is-hoisting-in-javascript-3/
*/