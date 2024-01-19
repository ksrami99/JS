function sayMyName() {
  console.log("K");
  console.log("A");
  console.log("R");
  console.log("A");
  console.log("N");
}


// sayMyName()
// sayMyName()
// sayMyName()


function addTwoNumbers(num1, num2){
    return num1 + num2
}

const result = addTwoNumbers(1,2)

// console.log(result);


// function loginUserMessage(username){
//     if(!username){
//         console.log("pls enter a username");
//     }
//     return `${username} just loggedIn`
// }
function loginUserMessage(username = "sam"){
    
    return `${username} just loggedIn`
}

// console.log(loginUserMessage())


function calculateCartPrice(...num1){  // rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username : "KSRAMI",
    price:199,
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}` );
}

// handleObject(user);


handleObject({
    username : "KSRAMI",
    price:199,
});

const myNewArray = [200,400,500]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));

