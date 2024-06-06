// How to Use Functions in JavaScript>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//  1. Function Declaration >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// This is the most common way to define a function.


function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!




// 2. Function Expression >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Functions can also be defined as expressions and assigned to variables.


const greetings = function(name) {
    return `Hello, ${name}!`;
};

console.log(greetings("Bob")); // Output: Hello, Bob!



// 3. Arrow Function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// A shorter syntax for writing functions, introduced in ES6.


const greetUser = (name) => `Hello, ${name}!`;

console.log(greetUser("Charlie")); // Output: Hello, Charlie!


 




// Relatable Examples++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Example 1: Simple Calculator ???????????????????

// Imagine you are building a simple calculator. Instead of writing the logic for addition, subtraction, multiplication, and division repeatedly, you can define functions for each operation.


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

console.log(add(5, 3));        // Output: 8
console.log(subtract(5, 3));   // Output: 2
console.log(multiply(5, 3));   // Output: 15
console.log(divide(5, 3));     // Output: 1.666...


//  Example 2: Event Handler ????????????????????????????????

// Consider a web page with a button. You want to show an alert when the button is clicked.


document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById("myButton")
  btn.addEventListener('click', function () {
    alert("Button was clicked!");
  })
  
})



 

// Additional Tips >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// 1. Default Parameters: >>>>>>>>>>>
// Provide default values for function parameters.

function greetMe(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greetMe()); // Output: Hello, Guest!


// 2. Rest Parameters: >>>>>>>>>>>>>>>
// Handle an indefinite number of arguments as an array.


function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10


// 3. Anonymous Functions: >>>>>>>>>>>>>>>
// Functions without a name, often used as arguments to other functions.


setTimeout(function() {
    console.log("This message is displayed after 2 seconds");
}, 2000);


// 4. IIFE (Immediately Invoked Function Expression): >>>>>>>>>>>>>>
// Functions that run as soon as they are defined.


(function() {
    console.log("This is an IIFE");
})();


//  Conclusion

// JavaScript functions are indispensable tools that enhance code quality by promoting reusability, modularity, and maintainability. Understanding and utilizing functions effectively can significantly improve your programming skills and enable you to build more robust and efficient applications.




document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('submitBtn')
  btn.addEventListener('click', function () {
    // alert(userInput)
    show()
  })


  // var enteredName = prompt('Enter username')

  // function to prompt the user to enter their username
  function displayUser() {
    // alert(enteredName)
    document.getElementById('dpUser').innerHTML += enteredName
   
  }
  // displayUser();
 
  function show() {
    var userInput = document.getElementById('sms').value
    // document.getElementById('displaySms').innerHTML += "<br>" + userInput

    // lets try another method of concatenation using template literal syntax
    document.getElementById('displaySms').innerHTML += `<div style="background-color: brown; padding: 5px; max-width: 40%; border-top-right-radius: 50px; border-bottom-right-radius: 50px; ">Message from:${enteredName} ${userInput}</div> <br>`
    // alert(userInput)

    // reset the input field
    var userInput = document.getElementById('sms').value = ''

    // this makes the input field remain focused so you dont have to click the input box each and every time you want to  send another message
    var userInput = document.getElementById('sms').focus()
  }
  
})

var counterNumber = 0

function addTodo() {
  let userInp = document.getElementById('inp').value
  // alert(userInp)
  document.getElementById('messageBox').innerHTML += `<p style="background-color: brown;  margin-top: 2px; padding: 5px;  color: white;">${userInp}</p> `
  count()

  document.getElementById('inp').value = ''
  document.getElementById('inp').focus()
}


function count() {
  counterNumber ++ ;
  // alert(counterNumber)

  document.getElementById('numberOfTodo').innerHTML = `You have ${counterNumber} Todo in your todo list`
}


function reset() {
  counterNumber = 0
  document.getElementById('numberOfTodo').innerHTML = `You have ${counterNumber} Todo in your todo list`
  document.getElementById('messageBox').innerHTML = ''

}