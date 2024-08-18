//singleton /\  literlas  no
//singleton //  constructor  yes

//object.create
//object literals

const mySym = Symbol("key1")


const JsUser = { 
    name: "Sachin",
    "full name": "Sachin Sen",
    [mySym]: "key1",
    age: 20,
    email: "sachin@amazon.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Thursday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "sachin@google.com"
// Object.freeze(JsUser)
JsUser.email = "Sachin@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello World");
}

JsUser.greetingTwo = function(){
    console.log(`Hello World, ${this.name}`);
}

JsUser.greeting();
JsUser.greetingTwo();
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());