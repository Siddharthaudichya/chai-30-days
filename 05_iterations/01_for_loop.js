// Basic Structure
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// 
console.log("--------");

let myArr = ['Orange', 'Apple', 'Mango', 'Kiwi'];
for (let index = 0; index < myArr.length; index++) {

    const element = myArr[index];

    if(index == 2)
        // continue; // Skip
        break; // Terminates

    console.log(element);
}