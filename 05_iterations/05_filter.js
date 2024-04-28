// filter() function returns an array for those values whose callback function returned true for
// filter() function expects a callback function as paramenter
// This callback function can have upto three parameter in order of (value, index, working_array)
// Callback function in filter function must return a boolean value
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let store = arr.filter( (num) => {
    return num>4; // True
}); // If callback function returns true then that value is returned by the filter function and is stored in the form of array

console.log(store); // [5, 6, 7, 8, 9, 10]

// 
console.log("------------------");

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let filtered_books = books.filter( (item, index) => (item.genre === 'Non-Fiction' && item.edition > 2000));

console.log(filtered_books);

filtered_books = filtered_books.forEach( (item, index) => {
    console.log(item.title);
});