// Example of a simple JavaScript function
function greetings(name) {
  return "Hello, " + name + "!";
}
// console.log(greetings("World")); // Outputs: Hello, World!



// Example of a simple JavaScript Dom manipulation

function calculateBirthYear() {
  var birthYear = document.getElementById('userInput').value
  // alert(birthYear)
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var currentBirthYear = currentYear - birthYear;
  // alert('You are currently ' + currentBirthYear + ' years old');

  var showAge = document.getElementById("displayAge").innerHTML = 'You are currently ' + currentBirthYear + ' years old';


  // reset the input field
  document.getElementById('userInput').value = '';
  
}


document.addEventListener('DOMContentLoaded', function() {
  var buttonClicked = document.getElementById('btn')
  buttonClicked.addEventListener('click', function () {
    showName();
  })
  

  function showName() {
    var userName = document.getElementById('userInp').value;
    var display = document.getElementById('concatenate').innerHTML = userName;


    // reset the input field
    document.getElementById('userInp').value = '';


    // Another method
    // var resetInput = document.getElementById('userInp');
    // resetInput.value = '';
    
  }
 
})



// Example of a simple JavaScript template literals using backticks `` and Arrow function
const greetMe = (name) => `Hello, ${name}!`;
// console.log(greetMe("World")); // Outputs: Hello, World!




// Example of a simple JavaScript Event listener
// document.getElementById("myButton").addEventListener("click", function () {
//   alert("Button clicked!");
// });


function greet() {
  alert("Welcome to JavaScript introductory class!");
}

// Note: When you create a function in javascript, you have to call it or invoke it before the function will be able to perform its action
// so to call or invoke a function all you have to do is call the function name and the trigger it by placing braces "()" in front of the function

// greet();

// But we don't want to call the function here, we want the button to call this function once a user has clicked on the button
