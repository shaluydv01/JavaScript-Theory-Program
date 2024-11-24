//First method to write comment.
/*Second method to write comment.*/

//These all are different variable names and valid in JavaScript...
let my = 10;
let My = 20;
let $my = 30;
let _my = 40;

my = 100; //let can be updated but can't redeclared...

const constant = 34;

// constant = 43;  can't do this...
//const can't be updated can't be redeclared...

console.log(my, My, $my, _my, constant);

//Data Types in JavaScript ---> 8 types 
//string
//number
//bigint
//boolean
//undefined
//null
//symbol
//object

let str = "JavaScript";
console.log(typeof(str));

let num = 10;
console.log(typeof(num));

let bool = true;
console.log(typeof(bool));

let und;
console.log(typeof(und));

let person = {
    name: "JavaScript",
    age: 21,
    phone: 9336178093,
    phone_modal: "Android"
}
console.log(typeof(obj));