// function calculateCartPrice(...num1){  // ...rest operater
//     return num1

// }

// console.log(calculateCartPrice(200, 400, 500, 800));


function calculateCartPrice(val1, val2, ...num1){  // ...rest operater
    return num1

}

console.log(calculateCartPrice(200, 400, 500, 800));

const user = {
    username: "Sachin",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and Price is ${anyobject.price}`);

}

handleObject(user)
handleObject({
            username: "Albus",
            price: 799
})


const myNewArray = [200, 300, 500, 800]

function returnSecondvalue(getArray){
    return getArray[0]
}

console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([500, 300, 500, 800]));


