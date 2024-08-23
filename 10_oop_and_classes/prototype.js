// let myName = "Sachin"

// console.log(myName.trim().length);
// console.log(myName.truelength);


const myHeros = ["captainAmerica", "shangchi", "wonderWomen"]

let heroPower = {
    captainAmerica: "shield",
    shangchi: "Rings",
    wonderWomen: "Magic",

    getCaptainPower: function(){
        console.log(`Captain Power is ${this.captainAmerica}`);
        
    }
}

console.log(heroPower.getCaptainPower());


Object.prototype.sachin = function(){
    console.log(`Sachin is present in all objects`);
    
}

Array.prototype.heySachin = function(){
    console.log(`Sachin says Hello`);
    
}

heroPower.sachin()
myHeros.sachin()
myHeros.heySachin()

// Inheritance

const User = {
    username: "Sachin",
    email: "Sachin@google.com"

}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    MakeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode  "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True legnth is ${this.trim().length}`);
    
    
}

anotherUsername.truelength()
"Sachin".truelength()
"qaran".truelength()


/* -----------------------------!----------------------------------------*/

const myNames = ["sachin", "qaran", "ishwar"]

let myName = {
    firstName: "qaran",
    secondName: "ishwar",
    thirdName: "sachin",

    myUniqueness: function(){
        console.log(`every name has same qualities ${this.firstName}, ${this.secondName}, ${this.thirdName}`);
        
    }
}

console.log(myName.myUniqueness());

Object.prototype.sachin = function(){
    console.log("sachin is present on all names");
    
}

Array.prototype.qaran = function(){
    console.log("all are sachin");
    
}

myName.sachin()
myNames.qaran()


const myLearnings = {
    first: "python",
    second: "cpp",
    third: "javascript"
}

const teacher = {
    one: "freecodecamp",
    two: "hitesh choudhary",
    three: "code with harry"
}

const source = {
    first: "Youtube",
    second: "mdn",
    isavailable: true,
    __proto__: teacher,
    // __proto__: myLearnings
}

// source.__proto__ = myLearnings

Object.setPrototypeOf(source, myLearnings)

Object.keys(myLearnings).forEach(key => {
    console.log(`${key}: ${typeof myLearnings[key]}`);
  });
  



