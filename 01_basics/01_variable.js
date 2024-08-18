const accountId = 23652  //Unchangeble//
let accountEmail = "adventure@gmail.com" 
var accountPassword = "1234"
accountCity = "jaipur"
let accountState;

// accountId = 2  // not allowed

accountEmail = "sachin@cv.com"
accountPassword = "58236"

accountCity = "Benguluru"


console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope 

*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

