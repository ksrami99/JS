// for of

const arr = [1,2,3,4,5]

for(const i of arr){
    console.log(i);
}

const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}


// for in loop
for( const key in myObject){
    console.log(key);
    console.log(myObject[key]);

}

for( const key in arr){
    console.log(key);
    console.log(arr[key]);

}


// for each

arr.forEach( (item) => {
    console.log(item);
})


const myCoding = [
    {
        languageName : "JS",
        languageFileName : "JS"
    },
    {
        languageName : "c++",
        languageFileName : "cpp"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})

