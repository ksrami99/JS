const user = {
    username:"Karan",
    price:999,

    walecomeMessage : function(){
        console.log(`${this.username}, Walecome to website`);
        console.log(this);
    }
}

user.walecomeMessage()
user.username = "sam"
user.walecomeMessage()

console.log(this);

function one(){
    console.log(this);
}
one()

const chai = () => {
    let username = "Karan"
    console.log(this.username);
}

chai()

const addTwo = (num1, num2) => {
    return num1 + num2;
}

const addTwo = (num1, num2) => return num1 + num2;
const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "Karan"})


console.log(addTwo(2,3));

