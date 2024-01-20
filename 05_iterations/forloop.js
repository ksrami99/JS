// for

for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element == 5){
        console.log("5 is the best number");
        continue
    }
    console.log(element);
}
 

for(let i =0;i<=10;i++){
    console.log(`outer loop value ${i}`);
    for(let j =0;j<=10;j++){
        console.log(`inner loop value ${j}`);
    }
}

let myArray = ["IronMan" , "Captain America" , "Moon Knight"]

for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
}

for(let i =0;i<=20;i++){
    console.log("value of i = " + i);
    if(i == 5){
        console.log("5 is the best number");
        break;
    }
}