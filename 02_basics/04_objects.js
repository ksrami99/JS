const tinderUser = {}

tinderUser.Id = "abs123"
tinderUser.name = "Karan"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const ragulerUser = {
    email:"karanrami@google.com",
    Fullname: {
        userFullName: {
            firstName:"Karan",
            lastName:"Rami"
        }
    }
}

console.log(ragulerUser.Fullname.userFullName.firstName);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = {obj1,obj2}
console.log(obj3);

const obj4 = Object.assign({},obj1,obj2)
const obj5 = {...obj1,...obj2}
console.log(obj4);
console.log(obj5);


const users = [
    {
        id:1,
        email:"abc@gamil.com"
    },
    {
        id:2,
        email:"abc@gamil.com"
    },
]

console.log(users[1].email);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))