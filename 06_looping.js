//for loop
//while loop
//do-while loop
//for-in loop
//for-of loop
//for-each loop

//for loop: 
let sum = 0;

for(let i = 1; i <= 10; i++){
    sum = sum + i;
}

console.log("Sum of first 10 numbers is: ", sum);

//Some amazing example of for loop:
let k = 10;

for(let b = 10; b >= 0; b--){
    if(b != 0){
    console.log(`${b} bottles on the wall...`);
    console.log(`Keep one down...`);
    console.log("Pass it around...");
    }else{
        console.log("No more bottles on the wall...")
        console.log("Go to attend the call...😍");
    }
}


//while loop: 
let j = 0;

while(j < 10){
    console.log(`Hello room number: ${j}`);
    j++;
}

//do-while:
let l = 0;

do{
    console.log(`This will execute in all cases...${l}`);
    l++;
}while(l < 5);
