// Dates

/* let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset()); */

let myCtreatedDate = new Date(2024, 0 , 23, 5, 3)
// console.log(myCtreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myTimeStamp.getTime());
// console.log(myCtreatedDate.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})