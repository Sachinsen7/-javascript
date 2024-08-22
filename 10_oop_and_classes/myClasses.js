// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encrypPassword(){
//         return `${this.password}abc`
//     }

//     changeMedium(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("qaran", "qaran@google.com", "qara@123")

// console.log(chai.encrypPassword());
// console.log(chai.changeMedium());



// behind the scene




function User(username, email, password){
    this.username  = username
    this.email = email
    this.password = password
}

Object.prototype.encryptPass = function(){
    return `${this.password}abc`
}

Object.prototype.changeMedium = function(){
    return `${this.username.toUpperCase()}`
}

const myName = new User("qaran", "qaran@google.com", "qwerty123456")

console.log(myName.encryptPass());
console.log(myName.changeMedium());





