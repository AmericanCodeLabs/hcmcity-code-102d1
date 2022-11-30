// Link to my replit for review: 
// https://replit.com/@KhoanGip/Review102d1#index.js

// function 2 ways

// declaring  a variable called helloWorldA, assigning the value of a function that takes a name as a parameter
// print a message using the name parameter to the console.
let helloWorld = function (name) {
  console.log('A new world awaits' + name);
}

// declaring a function that takes a name parameter
// print a message using the name parameter to the console.
function helloWorldB(name) {
  console.log('A new world awaits' + name);
}

// expressions
let x = 4 + 5;
let name = "Khoan" + "Gip"

// Assignment operators & comparison oparator
let y = 5; // assigning the value of the number 5 to the variable y
y += x;  // assigning the value of (y + x) to the variable y

// WHILE LOOP
// while(this condition evaluations to true){
// this code will excute (run)
//}
// let usersName = prompt("What is your name?");

// while (usersName !== "kassie"){
//   usersName = prompt("What is your name?");
//   console.log('hi');
//   console.log('hello');
// }

// FOR LOOP
// for (initial value; conditional expression; increment)
// write your code here

// for loop start at 5, initial value less than 50, increment by 5 each time

for (let i = 10; i >= 0; i = i - 2) {
  console.log(i);
}