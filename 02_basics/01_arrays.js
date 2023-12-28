// const myArr = [0,1,2,3,4,5,6,true,"Karan"] // resizable and diffrent datatype accepted 

const myArr = [0,1,2,3,4,5,6]
const myHeros = ["Shaktiman", "Naagraj"]
const myyArr2 = new Array(1,2,3,4) 


console.log(myArr[1]);

//Methods

myArr.push(6)
myArr.push(7)

console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(9)
myArr.shift()
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(5));

const newArr = myArr.join()
console.log(newArr)
console.log(typeof newArr)


// slice, splice

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log(myArr);
