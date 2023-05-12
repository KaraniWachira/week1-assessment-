//------question 1
//Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

function check(m, n) {
    if (m === 8 || n === 8 || m + n === 8 || Math.abs(m - n) === 8) {
        return true;
    }   else {
        return false;
    }
    let firstValue = prompt("Enter first value");
    let secondValue = prompt("Enter second value");
    console.log(check(firstValue, secondValue));


//-----------------------------------------------------------------------------//

//------Question 2
//Write a JavaScript program to convert a given number into hours and minutes
function convert(time) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    
    return (`${hours} hours ${minutes} minutes`);
}
let newTime = prompt("Enter value in minutes to convert into hours and minutes");
console.log(convert(newTime));

//-------------------------------------------------------------------//

//------Question 3
//Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.

function beginEnd(array) {
    if (array.length >= 1) {
        return [0];
    }
    let mwanzo = array[0];
    let mwisho = array[array.length - 1];

    return [mwanzo, mwisho];
}

let numbers = [1, 2, 3];
let majibu = beginEnd(numbers);
console.log(majibu);

//-------------------------------------------------------------------//

//------Question 4
const acuteAngle = 90;
const obtuseAngle = 180;
const rightAngle = 90;
const straightAngle = 180;

let angleSelected = prompt("Enter a value of your angle");
if (angleSelected <= 90) {
    alert("The angle is an acute angle");
}else if (angleSelected > 90 && angleSelected < 180) {
    alert("The angle is an obtuse angle");
} else if (angleSelected === 90) {
    alert("The angle is a right angle");
}else if (angleSelected === 180) {
    alert("The angle is a straight angle");
} else {
    alert("The angle is not a valid angle");
}

//-------------------------------------------------------------------//

//------Question 5
// What will be logged to the console from the below expression. explain why.

let sum = 5+ 5+ "5";
console.log(sum);
//Following the BODMAS rule order or precidence of arithmetic operators,
// JavaScript will perform addition first and then concatenation with the sting "5" to output 105