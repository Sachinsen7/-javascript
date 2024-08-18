// Object literal

const user = {
    username: "Sachin",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user detalis from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);  // Global


// Constructor function => {new}

// new context banane ke kaam aata hai

// const promiseOne = new Promise()
// const date = new Date()


function User(username, loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn

    this.greeting = function(){
        // console.log(`Welcome: ${this.username}`)
    }

    return this
}

const userOne = new User("Sachin", 9, true)
const userTwo = new User("Shruti", 11, false)
// console.log(userOne.constructor);
// console.log(userTwo);

// new keywords gives you new intense
// constructor function called new function
// this keywords injects all the data 
// and lastly prints the data 


console.log(userOne instanceof User);
console.log(userOne instanceof Object);


// const myData = {
//     userme: "Karan",
//     email: "sachinsen1920@gmail.com",
//     isLoggedIn: true,
//     loginCount: 99,

//     getData: function() {
//         console.log(this);

//     }

    
// }


// console.log(myData.getData());
// console.log(myData.userme);

// console.log();

function My(userme, email, isLoggedIn, loginCount){
        this.userme = userme
        this.email = email
        this.isLoggedIn = isLoggedIn
        this.loginCount = loginCount

        return this
}
   
const sachin = new My("Qaran", "sachinsen8000@gmail.com", true, 99)
console.log(sachin);

console.log(sachin instanceof My);
console.log(sachin instanceof Object);









// const printAll = new myData()
// console.log(printAll);











