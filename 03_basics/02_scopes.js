// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// {} scope

// if (true){
//     let a = 10;
//     const b = 20;
//     var c = 30; // globle var.. we hardly use it!
// }

// console.log(a);
// console.log(b);
// console.log(c);

// let a = 300

// if(true){
//     let a = 10
//     console.log(a);
// }

// console.log(a);

function one(){
    const username = "Karan"

    function two(){
        const website = "YT"
        // console.log(username);
    }
    // console.log(website); // error
    two()
}

one()



// --------------------------------------------------------------------------

// addOne(5) will run
function addOne(num){
    return num + 1
}

addOne(5)

// addTwo(5) error
const addTwo = function(num){
    return num + 2
}

addTwo(5)

console.log(addOne(5));
console.log(addTwo(5));