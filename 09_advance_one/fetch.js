const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({user: "Sachin", email: "Sachinsen1920@gmail.com"})
    }, 4000)
})