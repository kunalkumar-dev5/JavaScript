const accountId = 12345;
let accountEmail = " kunalkr4674@gmail.com";
var accountPaasword = "12345"
accountCity = "jaipur";
let accountState;


// accountId = 234;    // not allowed
accountEmail = "abc@gmail.com"
accountPaasword = "12"
accountCity = "Bangaluru"

/*
 Prefer not to use var
 because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail, accountPaasword, accountCity, accountState])

