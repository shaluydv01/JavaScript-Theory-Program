//Object:- An object in js is a collection of key-value pairs.
//The keys(properties) are strings(or symbols), and the values can be any data type(strings, numbers, arrays, functions, etc).

const person = {
    name: "JavaScript",
    age: 21,
    address: "Gorakhpur",
    salary: "$50000",
    greet: function(){
        console.log(`Hello, my name is ${this.name}!`);
        console.log(`My salary is ${this.salary}`);
    },
}

console.log(person.name);
console.log(person.greet());
