const accountId = 63764;   //const variable value never changes.
let accountEmail = "siddharth";
var accountPass = "12345";
var accountCity = "Bhopal";
let accountState;

//accountId = 356636;    value cannot be changed of constant
// console.log(accountId);  

accountEmail = "asdjfj";    // you cannot define same variable again but change the value
//  console.log(accountEmail);  

var accountPass = "aushfh";   //I var we can redefine the variable and reasign the value
// console.log(accountPass);  

console.table([accountId, accountEmail, accountPass, accountCity, accountState]);

// prefer not to use var
// because of issue in block scope and functional scope
