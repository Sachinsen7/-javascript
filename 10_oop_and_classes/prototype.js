let myName = "Sachin"

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