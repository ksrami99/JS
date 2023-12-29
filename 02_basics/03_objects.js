// object literals

const mySym = Symbol("key1")

const jsUser = {
    name:"Karan",
    // mySym:"ms",
    [mySym]:"ms",
    age:18,
    location:"Ahmedabad",
    email:"karan@google.com",
    isLoggedIn: false,
    lastLoginDay:["Monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser.mySym);
console.log(jsUser[mySym]);

jsUser.email = "Ksrami@google.com"
// Object.freeze(jsUser)
jsUser.name = "KSRAMI"

console.log(jsUser.email);
console.log(jsUser.name);


jsUser.greeting = function(){
    console.log("Hello JS users");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS users ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());