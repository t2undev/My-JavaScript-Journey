// JavaScript Operators: 

// JavaScript operators are special symbols used to perform operations on operands (values or variables). They are fundamental to writing any JavaScript code. var's dive into the different types of operators, their importance, and some relatable examples.

// 1. Arithmetic Operators >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Arithmetic operators are used to perform mathematical calculations.

// Addition (+): Adds two numbers.>>>>>>>
  
  var a = 5;
  var b = 3;
  var result = a + b; // result is 8
 
  // Importance: Used for basic mathematical operations essential in calculations.

// Subtraction (-): Subtracts the second number from the first.
  
  var result = a - b; // result is 2
 

// Multiplication (*): Multiplies two numbers.>>>>>>>>>
  
  var result = a * b; // result is 15
 

// Division (/): Divides the first number by the second.>>>>>>>>
  
  var result = a / b; // result is 1.6667
 

// Modulus (%): Returns the remainder of a division.>>>>>>>>>>>
  
  var result = a % b; // result is 2
 

// Increment (++): Increases a number by one.>>>>>>>>>>>>
  
  var a = 5;
  a++; // a is now 6
 

// Decrement (--): Decreases a number by one.>>>>>>>>>>>>>
  
  var a = 5;
  a--; // a is now 4
 

// 2. Assignment Operators>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Assignment operators are used to assign values to variables.

// Assignment (=): Assigns a value to a variable.>>>>>>>>>>>
  
  var a = 5;
 
  // Importance: Essential for storing values in variables.

// Addition Assignment (+=): Adds and assigns the result.>>>>>>>>>>>>
  
  a += 3; // a is now 8
 

// Subtraction Assignment (-=): Subtracts and assigns the result.>>>>>>>>>>>
  
  a -= 2; // a is now 6
 

// Multiplication Assignment (*=): Multiplies and assigns the result.>>>>>>>>>>>>
  
  a *= 2; // a is now 12
 

// Division Assignment (/=): Divides and assigns the result.>>>>>>>>>>>>>>
  
  a /= 3; // a is now 4
 

// Modulus Assignment (%=): Applies modulus and assigns the result.>>>>>>>>>>>
  
  a %= 3; // a is now 1
 

// 3. Comparison Operators>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Comparison operators are used to compare two values and return a boolean (true or false).

// Equal to (==): >>>>>>>>>>
// Checks if two values are equal (type conversion).
  
  var a = 5;
  var b = '5';
  console.log(a == b); // true
 
  // Importance: Used in decision-making processes (if-else statements).

// Strict Equal to (===): >>>>>>>>>>>>>
// Checks if two values are equal and of the same type.
  
  console.log(a === b); // false
 

// Not Equal to (!=): >>>>>>>>>>>>>>>
// Checks if two values are not equal (type conversion).
  
  console.log(a != b); // false
 

// Strict Not Equal to (!==): >>>>>>>>>>>>>>
// Checks if two values are not equal and not of the same type.
  
  console.log(a !== b); // true
 

// Greater than (>): >>>>>>>>>>>
// Checks if the left value is greater than the right value.
  
  console.log(a > 3); // true
 

// Less than (<): >>>>>>>>>>>>>>
// Checks if the left value is less than the right value.
  
  console.log(a < 3); // false
 

// Greater than or equal to (>=): >>>>>>>>>>>>>>>>
// Checks if the left value is greater than or equal to the right value.
  
  console.log(a >= 5); // true
 

// Less than or equal to (<=): >>>>>>>>>>>>
// Checks if the left value is less than or equal to the right value.
  
  console.log(a <= 5); // true
 

// 4. Logical Operators >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Logical operators are used to combine conditional statements.

// Logical AND (&&): >>>>>>>>>>>>>>>>>
// Returns true if both conditions are true.
  
  var a = true;
  var b = false;
  console.log(a && b); // false
 
  // Importance: Useful in complex conditions that require multiple criteria.

// Logical OR (||): >>>>>>>>>>>>>>>>>>>>
// Returns true if at least one condition is true.
  
  console.log(a || b); // true
 

// Logical NOT (!): >>>>>>>>>>>>>>>>>
// Inverts the boolean value.
  
  console.log(!a); // false
 

// 5. Bitwise Operators >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Bitwise operators are used to perform bit-level operations.

// AND (&): >>>>>>>>>>>>>>>
// Performs bitwise AND.
  
  var a = 5; // 0101
  var b = 3; // 0011
  var result = a & b; // 0001 (1)
 
  // Importance: Useful for low-level programming tasks.

// OR (|): >>>>>>>>>>>>>>>
// Performs bitwise OR.
  
  result = a | b; // 0111 (7)
 

// NOT (~): >>>>>>>>>>>>>>>>
// Performs bitwise NOT.
  
  result = ~a; // 1010 (-6 in two's complement form)
 

// XOR (^): >>>>>>>>>>>>
// Performs bitwise XOR.
  
  result = a ^ b; // 0110 (6)
 

// Left Shift (<<): >>>>>>>>>>>>>>
// Shifts bits to the left.
  
  result = a << 1; // 1010 (10)
 

// Right Shift (>>): >>>>>>>>>>>>>>>>>
// Shifts bits to the right.
  
  result = a >> 1; // 0010 (2)
 

// Unsigned Right Shift (>>>): >>>>>>>>>>>>>>
// Shifts bits to the right with zero fill.
  
  result = a >>> 1; // 0010 (2)
 

  // 6. String Operators >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// String operators are used to concatenate strings.

// Concatenation (+): >>>>>>>>>>>>>>>
// Joins two or more strings.
  
  var firstName = 'John';
  var lastName = 'Doe';
  var fullName = firstName + ' ' + lastName; // John Doe
 
  // Importance: Essential for building and manipulating strings.

// Concatenation Assignment (+=): >>>>>>>>>>>>
// Concatenates and assigns the result.
  
  firstName += ' Smith'; // John Smith
 

// 7. Conditional (Ternary) Operator >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// The conditional operator assigns a value based on a condition.

// Ternary (condition ? expr1 : expr2): >>>>>>>>>>>>>>>>
// Returns expr1 if the condition is true, otherwise returns expr2.
  
  var age = 18;
  var canVote = (age >= 18) ? 'Yes' : 'No'; // Yes
 
  // Importance: Simplifies conditional statements into a single line.

// 8. Type Operators >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Type operators are used to check or change the type of a variable.

// typeof: >>>>>>>>>>>>>
// Returns the type of a variable.
  
  var a = 5;
  console.log(typeof a); // number
 
  // Importance: Helps in debugging and type-checking.

// instanceof: >>>>>>>>>>>>>>
// Checks if an object is an instance of a particular class.
  
  var arr = [];
  console.log(arr instanceof Array); // true
 

// 9. Other Operators >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Comma (,): >>>>>>>>>>>
// Evaluates multiple expressions and returns the last one.
  
  var a = 1, b = 2, c = 3;
 
  // Importance: Useful in declarations and for loop headers.

// Devare: >>>>>>>>>>>>>
// Devares a property from an object.
  
  var obj = {name: 'John', age: 30};
  devare obj.age; // obj is now {name: 'John'}
 

// Void: >>>>>>>>>>>>>>
// Evaluates an expression without returning a value.
  
  void 0; // undefined
 

// In: >>>>>>>>>>>
// Checks if a property exists in an object.
  
  var obj = {name: 'John', age: 30};
  console.log('name' in obj); // true
 

// Conclusion

// Understanding and using these operators effectively is crucial for writing efficient and readable JavaScript code. They allow you to perform a wide range of operations, from simple arithmetic to complex logical and bitwise operations. As you practice and get more comfortable with these operators, you'll find that they are powerful tools in your JavaScript programming toolkit.