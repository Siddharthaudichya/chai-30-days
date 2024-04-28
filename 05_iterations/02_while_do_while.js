// Basic Structure
let i = 1;
while(i <= 10) {
    console.log(i);
    i++;
}

// 
console.log("--------");

let myArr = ['Orange', 'Apple', 'Mango', 'Kiwi'];
i = 0;

do {

    const element = myArr[i];

    if(i == 2)
        // continue; // Skip
        break; // Terminates

    console.log(element);
    
    i++;
} while (i < myArr.length);