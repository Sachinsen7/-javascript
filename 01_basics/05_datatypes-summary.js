/* Primitive

7 types : String, Number, Boolean, null, undefined, Symbol, BigInt */

const score = 50
const scoreValue = 50.3

const isLoggedIn = false
const outsideTemp = null 

let userEmail;
// let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 454654158975 /* number */
// const bigNumber = 454654158975n  result : bigint

/* Reference (Non primitive)

Array, Objects, Functions */


const heros = ["Captain America", "Tony Stark", "Hulk"];  /* Array */

let myObj = {
    name: "Sachin",
    age: 20,
}

const myFunction = function(){}
console.log("Hello world");

console.log(typeof bigNumber);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof myFunction);  
console.log(typeof heros);


// ************************************

// Stack(Primitive), Heap(Non Primitive)
let myName = "Sachinsen"

let anothername = myName
anothername = "Qaransen"

console.log(myName);
console.log(anothername);

let userOne = {
    email: "stannisbaratheon@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "albusseverus@google.com"

console.log(userOne.email);
console.log(userTwo.email);

