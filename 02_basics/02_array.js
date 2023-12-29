const marvel_heros =["Ironman" , "Thor" , "Spiderman"]
const dc_heros = ["superman","flash" , "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
const allHeros = marvel_heros.concat(dc_heros)
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(allHeros);


const anotherArray = [1,2,3,[4,5,6,[7,8],9]]

const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Karan"));
console.log(Array.from("Karan"));
console.log(Array.from({name: "Karan"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));