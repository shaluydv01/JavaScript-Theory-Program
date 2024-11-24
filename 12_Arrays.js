//Arrays: collection of homogeneous data elements, stored at contiguous memory location.
//a data structure...
//allow to store multiple data values in a single variables...


//heterogeneous and non-contiguous in javaScript
//homogeneous and contiguous in C, java, python 

let fruits = ['apple', 'banana', 'orange'];
let phones = ['iphone', 'android', 'oneplus'];
let score = [100, 89, 98, 55, 75, 99, 25];
let random = [91, 'Java', '@', 234.7];

console.log(fruits[0]);
console.log(phones[3]);
console.log(score[3]);

//push(), pop(), shift(), unshift(), 
//length(), find(), includes(), concat(), 
//join(), splice(), slice(), sort(), findIndex(),
//from(), isArray(),
//map(), filter(), reduce()

let arr = [1, 2, 3, 4, 5];

//push():-
arr.push(6);
console.log(arr);

//pop():-
arr.pop();
console.log(arr);

//shift():-
arr.shift();
console.log(arr);

//unshift():-
arr.unshift(0);
console.log(arr);

//length():-
console.log(arr.length);

//find():-
let found = arr.find((e) => e > 2);
console.log(found);

//includes():-
console.log(arr.includes(1));

//concat():-
let arr2 = ['a', 'b', 'c'];
let arr3 = [9, 8];

let arr4 = arr2.concat(arr3);
console.log(arr4);

//join():-
console.log("The joined array of fruits is: ", fruits.join(", "));

//splice():- adds or removes elements from the array.
let arrS = ['w', 1, 2, 'java'];
arrS.splice(2, 1, 'mine');

console.log(arrS);

//slice():-
let arrSl = [1, 2, 3, 'hello', 'slice']
console.log("Slice array is: ", arrSl.slice(1, 3));

//sort():-
let arrSS = [1, 3, 7, 8, 4, 'b', 'a', 'hello', 'apple']
console.log("Sort the array: ", arrSS.sort());

//findIndex():-
console.log("The index of hello is: ", arrSS.findIndex((e) => e=="hello"));

//from():-
let str = "JavaScript";
console.log("It's array version is: ", Array.from(str));

//isArray():-
let a = [1, 2, 3, 'a'];
let b = 'hi';
console.log(Array.isArray(a));
console.log(Array.isArray(b));

