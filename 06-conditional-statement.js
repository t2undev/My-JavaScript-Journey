JavaScript conditional statements 


// How to Use Them

// In JavaScript, the most common conditional statement is the `if` statement. Let's look at how it works with some relatable examples.

// The `if` Statement >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


let weather = "sunny";

if (weather === "sunny") {
  console.log("Let's play outside!");
}

// Here, the code checks if the `weather` variable is equal to "sunny". If it is, it prints "Let's play outside!" to the console.




// The `if...else` Statement >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Sometimes, you want to do one thing if a condition is true, and something else if it's not.


let weathers = "rainy";

if (weathers === "sunny") {
  console.log("Let's play outside!");
} else {
  console.log("Let's play indoors.");
}

// Now, if the weather is "sunny", it says to play outside. Otherwise, it says to play indoors.




// The `else if` Statement >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// You can also check multiple conditions using `else if`.


let weatherr = "cloudy";

if (weatherr === "sunny") {
  console.log("Let's play outside!");
} else if (weatherr === "cloudy") {
  console.log("Let's play board games inside.");
} else {
  console.log("Let's watch a movie indoors.");
}

// Here, if the weatherr is "sunny", you play outside. If it's "cloudy", you play board games inside. Otherwise, you watch a movie indoors.




// The `switch` Statement >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//The switch statement is used for executing one block of code among many based on the value of an expression.
// When you have many conditions to check, a `switch` statement can be cleaner.


let weatherss = "cloudy";

switch (weatherss) {
  case "sunny":
    console.log("Let's play outside!");
    break;
  case "cloudy":
    console.log("Let's play board games inside.");
    break;
  case "rainy":
    console.log("Let's watch a movie indoors.");
    break;
  default:
    console.log("Let's stay in and read a book.");
}

// Here, the `switch` statement checks the `weatherss` variable and runs the code for the matching case.


//another switch statement example

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}






// Other Things to Know >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 1. Comparison Operators: >>>>>>>>>>>>>>>>>>>>>>>>>

// These are used in conditions to compare values.
// `===` checks if two values are equal.
// `!==` checks if two values are not equal.
// `>` and `<` check if one value is greater than or less than another.
// `>=` and `<=` check if one value is greater than or equal to, or less than or equal to another.




// 2. Logical Operators: >>>>>>>>>>>>>>>>>>>>>>>>>>>>

// These are used to combine multiple conditions.
// `&&` means "and". Both conditions must be true.
// `||` means "or". At least one condition must be true.
// `!` means "not". It inverts the condition.

// Example with Logical Operators


let isWeekend = true;
let weatha = "sunny";

if (isWeekend && weatha === "sunny") {
  console.log("Let's go to the beach!");
} else {
  console.log("Let's stay home and relax.");
}

// Here, you go to the beach only if it's the weekend and the weather is sunny.

// Conclusion

// JavaScript conditional statements are like the rules you use in games to decide what to do next. They make your code smarter and more flexible, allowing it to react to different situations and data. By understanding and using `if`, `else if`, `else`, and `switch` statements, along with comparison and logical operators, you can create programs that make decisions just like you do in real life!



// Exercise