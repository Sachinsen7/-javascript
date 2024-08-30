// for of

//["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4]

for (const num of arr) {
    console.log(num);
    
}


const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    // console.log(greet);
}

// Maps

const map = new Map()
map.set('IN', "INDIA")
map.set('US', "UNITED STATEs OF AMERICA")
map.set('FR', "FRANCE")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


const myObj = {
    game1: 'NFC',
    game2: 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }