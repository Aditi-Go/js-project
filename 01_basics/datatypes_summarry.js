// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreVAlue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 3455555555555555555555522222222222n


// Reference(Non Primitive)

//Array, Objects, Functions

const heros = ["haktiman", "nagraj", "doga"];
let myObj = {
    name: "Aditi",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof myFunction);





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive),  Heap (Non-Primitive)

let myProjectname = "Aditi.com"
let anothername = myProjectname
anothername = "Aditi-Ankur"

console.log(myProjectname);
console.log(anothername);

let userOne = {
    email: "aditi@gmail.com",
    upi: "aditi@sbi"
}

let userTwo = userOne

userTwo.email = "aditi@go.com"

console.log(userOne.email);
console.log(userTwo.email);
