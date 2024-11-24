//Operators are used to perform some operation on data...
//Arithmetic Operators(+, -, *, /, %, **)
//Assignment Operators(=, +=, -=, *=, **=, %=, /=)
//Comparison Operators(==, ===, !=, !==, >, <, >=, <=)
//Logical Operators(&&, ||, !)
//Ternary Operator(()?():())

//Arithmetic Operators: 
const x = 10;
const y = 4;

console.log(x+y, x-y, x/y, x*y, x**y, x%y);

//Comparison Operator: 
console.log(x==y, x===y, x!=y, x!==y, x>y, x<y, x>=y, x<=y);

//Assignment Operator:
let x1 = 2;
let y1 = 4;

console.log(x1 += y1, x1 -= y1, x1 *= y1, x1 /= y1, x1 %= y1, x1 **= y1);


//Logical Operator:
console.log(x&&y, x||y, !x, !y);

//Ternary Operator:
console.log(x<y?console.log("x is: ", x):console.log("y is: ", y));