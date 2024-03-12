const accountId = 144553
let accountEmail = "aditi@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountstate;

// account = 2 // Not allowed 

accountEmail = "aditi.com"
accountPassword = "452136987"
accountCity = "Bikaner"

console.log(accountId);

/*
PREFER NOT TO USE VAR 
BECAUSE OF ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE
*/
console.table([accountEmail, accountPassword, accountId, accountCity, accountstate])