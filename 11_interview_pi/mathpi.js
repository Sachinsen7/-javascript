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

console.log(chai);
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


/* <------------------------------------!---------------------------------------------> */

const myNewObject = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(myNewObject)

const User = {
    name: "qaran",
    class: "MCA",
    email: "qaran@gmail.com"
}

// console.log(User);

for (let [key, value] of Object.entries(User)) {
    // console.log(`${key} : ${value}`);
    
}

// console.log(User.class);

let user = {};

Object.defineProperties(user, {
    name : {
        value: "qaran",
        writable: false,
        enumerable: true,  // Again if you out false value you did not get the name value
        configurable: false
    },

    email : {
        value: "qaran@gmail.com",
        writable: false,
        enumerable: true,   // Again if you out false value you did not get the name value
        configurable: false
    },

    class: {
        value: "MCA",
        writable: false,
        enumerable: true,    // Again if you out false value you did not get the name value
        configurable: false
    },

    isPassed:{
        value: function(){
        console.log("Unfortunately you have passed the exam 😂");
        },
        writable: false,
        enumerable: false,    // Again if you out false value you did not get the name value
        configurable: false
        
    }
});


for (let [key, value] of Object.entries(user)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
        
    }
}

console.log(user);

user.isPassed()










