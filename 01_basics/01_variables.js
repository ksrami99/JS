const accountId = 14452
let accountEmail = "ksrami@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"

let accountState ; // undefined

// accountId = 2 // not allowed

accountEmail = "ks@gmail.com"
accountPassword = "212121"
accountCity = "Jaipur"

console.log(accountId);

/* 
    Prefer not to use var
    becouse of issie in block scope and variable scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])