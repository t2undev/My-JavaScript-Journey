// ********************************************************* variable declaration ********************************************************


// Here’s a simple example to illustrate variable declaration:

// Using var
var greeting = "Hello, World!";
console.log(greeting); // Outputs: Hello, World!

// Using let
let ages = 20;
ages = 21; // This is allowed
console.log(age); // Outputs: 21

// Using const
const birthYear = 1990;
// birthYear = 1991; // This will cause an error
console.log(birthYear); // Outputs: 1990





// ******************************************************** JavaScript Data Types ****************************************************************


// 1 Number: 
// Represents both integer and floating-point numbers. 

// For example:
let age = 25;
let temperature = 98.6;



// 2 String: 
// Represents a sequence of characters, used for text. Strings can be enclosed in single quotes (' '), double quotes (" "), or backticks ( ):

// For example:
let name = "Alice";
let greeting = 'Hello, world!';
let template = `Hello, ${name}!`;


// 3 Boolean: 
// Represents a logical entity and can have only two values: true or false:

// For example:
let isJavaScriptFun = true;
let isRaining = false;


// 4 Null: 
// Represents the intentional absence of any object value. It's a primitive type that has only one value: null:

// For example:
let emptyValue = null;


// 5 Undefined: 
// Represents an uninitialized variable or a missing value. A variable that has been declared but not assigned a value is undefined:

// For example:
let notAssigned;
console.log(notAssigned); // undefined


// 6 Symbol: 
// Introduced in ES6, a Symbol is a unique and immutable primitive value, often used to identify object properties uniquely:

// For example:
let uniqueId = Symbol('id');


// 7 BigInt: 
// Introduced in ES11, BigInt is used for representing integers that are too large to be represented by the Number type:

// For example:
let bigNumber = BigInt(123456789012345678901234567890);



// 2. Complex Data Type ****************************

// 1 Object: 
// Unlike primitive data types, objects can store collections of data and more complex entities. Objects are fundamental in JavaScript for building structured data:

// For example:
let person = {
  name: "Alice",
  age: 25,
  isStudent: true
};



// NOTE: Objects can also include functions (methods), which are actions that the object can perform:

// For example:
let calculator = {
  add: function(a, b) {
      return a + b;
  }
};
console.log(calculator.add(5, 3)); // 8



// Understanding Type Coercion ***********************

// JavaScript is a dynamically typed language, meaning variables can hold values of any type without declaring their type explicitly. 
// This flexibility can lead to type coercion, where JavaScript automatically converts values from one type to another. 

// For example:
let result = '5' + 3; // '53' (string concatenation)
let sum = '5' - 3; // 2 (number subtraction)




// Checking Data Types ***********************************

// To check the type of a variable, you can use the typeof operator:

// For example:
console.log(typeof 42); // "number"
console.log(typeof 'Hello'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object" (this is a well-known JavaScript quirk)
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol('symbol')); // "symbol"
console.log(typeof BigInt(1234567890)); // "bigint"
console.log(typeof { name: 'Alice' }); // "object"
