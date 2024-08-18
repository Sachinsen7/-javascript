// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Albus"
tinderUser.isLoggedIn = false


// console.log(tinderUser);


const regularUser = {
    email: "Stannis@145.com",
    fullname: {
        userfullname: {
            firstname: "Sachin",
            lastname: "Sen"
            
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);
//?   Api related


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

// // const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) 
// console.log(obj3);

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
]

users[1].email
console.log(users[1].email);

console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // array in array

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("LoggedIn"));



