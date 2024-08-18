function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("N");

}

// sayMYname => Reference, () => excecution

//  sayMyName()    

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
 
    // let result = number1 + number2
    // return result

    return number1 + number2
}

addTwoNumbers(3, 4)
const result = addTwoNumbers(3, 4)
// console.log("result: ", result);

function loginUserMessage(username = "albus"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("sachin"))
console.log(loginUserMessage("sachin")) // undefined

