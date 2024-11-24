//Global Scope:- accessible everywhere in the code...
//Local Scope:- accessible only in the particular block of code in which it is defined...

let globalVar = "Hello";

function greet(name) {
  let localVar = "Nice to meet you...😊";
  console.log(`${globalVar}, ${name}! ${localVar}`);
  console.log("The value of the global variable is: ", globalVar);
  console.log("The value of the local variable is: ", localVar);
//   greet("Java");  //run until stack is overflowed.
}

greet("Python");
console.log("The value of the global variable is: ", globalVar);
// console.log("The value of the local variable is: ", localVar);


//Note:- A function will go under infinite looping if it is called inside itself, only in the case if it is called externally...
//Otherwise it will not run even for a single time.