
// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 27)
// let myCreatedDate = new Date(2024, 0, 27, 6, 9)
// let myCreatedDate = new Date("2024-04-27")
let myCreatedDate = new Date("04-27-2024")
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getUTCDate());

let dateString = `${newDate.getDate()} and the time is ${newDate.getTime()}`
console.log(dateString);

let monthString = newDate.toLocaleString('default', {
    era: "long"
})

console.log(monthString);