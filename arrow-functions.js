/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNums(a, b) {
    return a + b
};
let sum = addTwoNums(3, 5);
console.log(sum);

// Arrow Function With Parameters
const addTwoNums2 = (a, b) => {
    return a + b
}
let sum2 = addTwoNums2(3, 5);
console.log(sum2);

// Single Line Arrow Function With Parameters
const addTwoNums3 = (a, b) => a + b;
let sum3 = addTwoNums2(6, 5);
console.log(sum3);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("yoyoyo!");

const sayHello = () => console.log("Hello!");
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
      This is a multiline string in JavaScript!
    </p>`
);
console.log(returnMultipleLines());
