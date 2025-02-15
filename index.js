// JavaScript Function Basics

// 1. Function Declaration
// TODO: Define a function named greet that logs "Hello, world!" to the console
function greet() {
    console.log("Hello, World!");
}

// Call the function
greet();

// 2. Function Expression
// TODO: Create a function expression named greetExpression that logs "Hello from a function expression!"

const greetExpression = function () {
    console.log("Hello from a fxn expression!")
}

// Call the function expression
greetExpression();

// 3. Parameters and Return Values
// TODO: Write a function named add that takes two parameters and returns their sum
function add(num1, numb2) {
    console.log(num1,num2)
    return num1 + numb2;
}

// Log the result of calling add with two numbers
console.log(add(5,6));
console.log(add());

// TODO: Modify add function to include a default parameter
functionfreetWithName (name = "Student"){
    console.log(`Hello ${name}`)
}
freetWithName();
greetWithName("Alice");
// 4. Arrow Functions
// TODO: Convert the add function into an arrow function
const multiply =(num1, num2) => num1 * num2;

// Log the result of calling the arrow function
console.log(multiply(9,12));

// Using If Statements for Decision Making
function checkAge(age) {
    if (age >= 18) {
        console.log("You are an adult");
    }
    if (age == 13){
        console.log("You are a teenager");
    }   
        else{
            return console.log("You are a child");
    }
}

// Log the result of calling the function with an if statement
checkAge(13);


// 5. Build a Simple Calculator
// TODO: Define functions for subtract, multiply, and divide


// TODO: Write a calculate function that takes two numbers and an operator, then calls the appropriate function
