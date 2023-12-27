const name = "Karan"

const repoCount = 50

console.log(name + repoCount + " value"); // old(bad) practice

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}!`);

const gameName = new String('Karan-rami')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-10,4)
console.log(anotherString);

const newStringOne = "   karan    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.google.com/search%20karan"


console.log(url.replace("%20","-"));

console.log(url.includes('k'));

console.log(gameName.split('-'))