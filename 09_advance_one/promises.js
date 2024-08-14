const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task 
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)    
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 Resolved");
    
})


const promiseThree = new Promise(function(reslove, reject){
    setTimeout(function(){
        reslove({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({user: "Sachin", email: "sachinsen1920@gmail.com"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 2000)
}) 

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log("The Promise is either resolved or rejected"));


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", passwaord: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

// promiseFive.then
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }

}

consumePromiseFive()



const promiseSix = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Mera selsction ho gya");
        let error = false;
        if (!error){
            resolve({
                user: "Sachin",
                Email: "sachinsen1920@gmail.com"
            })
        } else {
            reject("error:  something went wrong")
        }
            
    } ,1000)
})

promiseSix.then(function(){
    console.log("Mera Nhi huaa")
})

// Method 1


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(response);
        
//         const data = await response.json()
//         console.log(data);
    
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data);
// }).catch((error) => console.log("error"))


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => console.log("error"))



    

