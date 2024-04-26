// console.log("A");
// console.log("d");
// console.log("i");
// console.log("t");
// console.log("i");

function sayMyName() {
console.log("a");
console.log("d");
console.log("i");
console.log("t");
console.log("i");

}
sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {
// let result = number1 + number2
// console.log("Aditi");
// return result
// console.log("Aditi");
return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);



function loginUserMessage(username = "Ankur") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
    
}

// console.log(loginUserMessage("hitesh"));

// console.log(loginUserMessage());



function calculatecartprice(val1, val2, ...num1) {
    return num1
}

// console.log(calculatecartprice(2,3,5))

const user = {
    username: "Aditi",
    price:100
}

function handleobject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleobject(user)

handleobject({
    username: "Aditi",
    price:500
})

const mynewarray = [500, 501, 2001, 40012]

function returnsecondvalue(getarray) {
    return getarray[2]
    
}
//console.log(returnsecondvalue(mynewarray));

console.log(returnsecondvalue([100, 500, 400, 800, 7555]));
