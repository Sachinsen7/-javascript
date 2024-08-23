const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);


// console.log(Math.PI);
// Math.PI = "4"
// console.log(Math.PI);


// const myObject = Object.create(null)

const chai = {
    name: 'ginger chai',
    price: 10,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bani");
        
    }
}

// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true,
    configurable: false

})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
    
}

// enumerable => when you put false value you'll not get name:



