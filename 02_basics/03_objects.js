// Object Literals 
// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name : "Aditi",
    "full Name" : "Aditi Goswami",
    [mySym]: "myKey1",
    age : "32",
    location : "Jaipur",
    email: "adigos@gmail.com"

}
console.log(JsUser[mySym])

//console.log(JsUser["full Name"])



JsUser.email = "aditi@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "aditiankur.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

