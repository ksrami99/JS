// const promiseOne = new Promise(function(resolve,reject){

//     setTimeout(() => {
//         console.log("Async Task is Complete! ");
//         resolve()
//     }, 1000);
// });

// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('2');
//         resolve();
//     }, 1000)
// })
//     .then(() => {
//         console.log('2 Complete! ');
//     })


// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             username: "Karan",
//             email: "ksrami@gmail.com"
//         })
//     }, 1000);
// })

// promiseThree.then((user) => {
//     console.log(user);
// })



// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({ username: "Karan", email: "ksrami@gmail.com" });
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000);
// })

// promiseFour.then(function (user) {
//     return user.username;
// }).then(function (user) {
//     console.log(user);
// }).catch(function (e) {
//     console.log(e);
// }).finally(function () {
//     console.log('The promsie is ether resolved or rejected');
// })


// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ username: "Karanjavascript", password: "123" });
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000);
// })

// async await 

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('error: ', error);
//     }
// }

// getAllUsers()
 
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json();
}).then(function(jsonData){
    console.log(jsonData);
}).catch(function(e){
    return e;
})