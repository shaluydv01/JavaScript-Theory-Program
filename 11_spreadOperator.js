//Spread Operator(...):- used to create clone/copy of the objects.

const person = {
    name: "JavaScript",
    age: 21,
}

const clone = {...person};

console.log(clone);

//Object Destructuring:-
const person1 = {
    name: 'Java',
    age: 21,
    salary: '$50000',
}

// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.salary);

//In short form:-
const {name, age, salary} = person1;

console.log(name);
console.log(age);
console.log(salary);
