// var c = 300                           // global scopej 

let a = 300

if (true) {
    let a = 10
    const b = 20                       // block scope
    console.log("INNER: ",  a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

console.log(a);
// console.log(b);
// console.log(c);