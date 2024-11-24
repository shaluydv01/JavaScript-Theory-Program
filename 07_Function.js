//Function: a block of code designed to perform a particular task.
//It is executed when it is invoked or called.

//with return:
function add(a, b){
    return a+b;
}

let addition = add(30, 20);

console.log("The addition result is: ", addition);
console.log("The sum is: ", add(10, 45));
console.log(add(5, 4));

//One Liner addition function
let addit = (d, f) => d+f;
console.log("The one liner function addition value is: ", addit(23, 4));

//without return:
function multiply(x, y){
    console.log(`The multiplication of ${x} and ${y} is: `, x*y);
}

let z = multiply(2, 4);
console.log(z);

multiply(5, 4);

//greet() function:
function greet(name){
    console.log(`Hello, ${name} !`);
}

greet("JavaScript");

//without parameters:
function nopara(){
    return k+j;
}

let k = 3;
let j = 3;
console.log(nopara());

function greet2(){
    console.log("Hello, React !");
}

greet2();

//if you are returning a value using "return", you have to console either inside or outside...
function consolere(){
    return "Hello, Maya !";
}

console.log(consolere());



//Arrow Function: 
//Convert it in arrow function:-

function sub(){
    return s-m;
}

let s = 20;
let m = 15;
console.log(sub());


let sub1 = () =>{
    return S-M;
}

let S = 25;
let M = 15
console.log("The value of subtraction is: ",sub1());

//one line array function:-
let sub2 = (a, b) => a+b;
console.log(sub2(89, 70));

//one line greet function:-
let greet1 = name => console.log(`Hello, ${name}!`);
greet1("One-liner function");