const name = "Sachinss"
const repoCount = 6
console.log(name + repoCount + "Value");/* outdated*/

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Sachin-ss')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "   Sachin   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Sachin.com/Sachin%20sen"

console.log(url.replace('%20', '-'));

console.log(url.includes('Qaran'));
console.log(url.includes('Sachin'));

console.log(gameName.split('-'));
console.log(gameName);