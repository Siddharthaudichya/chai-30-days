let newDate = new Date();

// Outputs the whole date which is in an unreadable format
console.log(newDate);
// Returns the data type of newDate.
console.log(typeof newDate); // `object`

// Formats the date into a readable format
console.log(newDate.toString());
console.log(newDate.toDateString());
console.log(newDate.toLocaleString('en-US'));

console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1); // We added 1 because month starts from 0
console.log(newDate.getDay());

                                  //Internationalization
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit",
}));



// Custom date
// Ways to define date
// let myDate = new Date(2023, 0, 23);
// let myDate = new Date(2023, 0, 23, 20, 3, 20); //{year, month, day, hours, minutes, seconds} Month starts from 0 here. Input time should be in 24-hrs format
// let myDate = new Date("2023-01-14");
// let myDate = new Date("01-14-2023");
let myDate = new Date("May 06, 2024, 13:25:58");

console.log(myDate.toLocaleString());