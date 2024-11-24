//Callback Function:- a function that is passed as an argument to the another function.
// function greet(){
//     console.log("Hello, JavaScript!");
// }

//Define a callback function...
const greet = (sentence) =>{
    console.log(`Hello, ${sentence}!`);
}

//Define a function that takes a callback...
const askHealth = ( ask, callback ) => {
    callback(ask);
}

//Call the function and pass the callback...
askHealth("How are you?", greet);


/*-------------------------------Callback 2nd Example---------------------------------*/
const take = (beverage) => {
    console.log(`Hello, give me ${beverage} plzz !`);
}

const give = (bev, callback) => {
    callback(bev);
}

take("Coffee", give);
take("Tea", give);