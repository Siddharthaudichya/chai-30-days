// IIFE: Immediately Invoked Function Expressions

// Executing qqfunctions immediately
/* Why:
    Sometimes we need to connect our database excatly when the application starts
    Avoiding global scope pollution
*/

// (function)(<function call>); // Semi colon is required to end the line if we want to use multiple IIFE

// Defining IIFE
// Named IIFE
( function chai() {
    console.log(`DB CONNECTED`);
} )(); // Ending the line with `semi colon` because multiple IIFE's are defined

// Simple IIFE (Unnamed)
( (name) => {
    console.log(`DB DESTROYED ${name}`);
} )("GOODBYE CRUEL WORLD");