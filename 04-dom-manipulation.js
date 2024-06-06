
// JavaScript DOM Operation and Manipulation

//  Introduction to the DOM

// The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as a tree of nodes. Understanding and manipulating the DOM is a key skill for any JavaScript developer.

//  DOM Operations

// DOM operations can be grouped into several categories:

// 1. Accessing Elements
// 2. Creating Elements
// 3. Modifying Elements
// 4. Removing Elements
// 5. Event Handling

// Let's dive into each category with examples.

//  1. Accessing Elements >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Accessing elements is the first step to manipulating the DOM. There are several methods to select elements in the DOM:

// getElementById()
// getElementsByClassName()
// getElementsByTagName()
// querySelector()
// querySelectorAll()

// Examples:


// Select an element by ID
const elementByItId = document.getElementById('myId');

// Select elements by class name
const elementsByClassName = document.getElementsByClassName('myClass');

// Select elements by tag name
const elementsByTagName = document.getElementsByTagName('div');

// Select the first element that matches a CSS selector
const elementBySelector = document.querySelector('.myClass');

// Select all elements that match a CSS selector
const elementsBySelectorAll = document.querySelectorAll('.myClass');


// Importance: These methods allow you to locate specific elements or groups of elements within the DOM, which is the foundation of any DOM manipulation.

 

// 2. Creating Elements >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Creating new elements dynamically is essential for adding new content to a webpage.

// document.createElement() 

// Example:

// Create a new paragraph element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';
document.body.appendChild(newParagraph);

// Importance: This method allows you to create new elements that can be added to the DOM, enabling dynamic content generation.

 



// 3. Modifying Elements >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Once you have accessed an element, you can modify it in various ways.

// element.innerHTML
// element.textContent
// element.setAttribute()
// element.style
// classList.add()
// classList.remove()
// classList.toggle()

// Examples:


// Modify innerHTML or textContent >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let myElementById = document.getElementById('sample1')
myElementById.innerHTML = 'Updated content using innerHTML';


let yourElementById = document.getElementById('sample2')
yourElementById.textContent = 'Updated content using textContent';















// Set an attribute >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let customAttribute = document.getElementById('attr')
customAttribute.setAttribute('box', 'specifications');

let togleBtn = document.getElementById('togleBtn')
togleBtn.addEventListener('click', function(){
   customAttribute.setAttribute('cont', 'newValue');
})
















// Modify styles >>>>>>>>>>>>>>>>>>>>>>>>>>>>
customAttribute.style.color = 'white';
customAttribute.style.fontSize = '25px';





// Modify classes >>>>>>>>>>>>>>>>>>>>>>>>>>>>
// document.getElementBy.classList.add('newClass');
// document.getElementBy.classList.remove('oldClass');
// document.getElementBy.classList.toggle('toggleClass');



// Example +++++++++++++++++++++++++++++++++++++++++++++++++

// Firstly lets get the element we want to work with with by specified id
let mySec = document.getElementById('mySec')

// now lets get the buttons too by their id
let addClassBtn = document.getElementById('addClassBtn')
let removeClassBtn = document.getElementById('removeClassBtn')
let toggleClassBtn = document.getElementById('toggleClassBtn')

// now lets add event handlers to the buttons
addClassBtn.addEventListener('click', function () {
   // lets bind the div to the classList
   mySec.classList.add('firstClass');
})

removeClassBtn.addEventListener('click', function () {
   // lets bind the div to the classList
   mySec.classList.remove('firstClass');
})

toggleClassBtn.addEventListener('click', function () {
   // lets bind the div to the classList
   mySec.classList.toggle('secondClass')
})


// Importance: Modifying elements is crucial for updating the content, attributes, and styles of elements dynamically, enhancing the user experience.

 







// 4. Removing Elements >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Sometimes, you need to remove elements from the DOM.

// to remove an element from the dom we can use     '.remove()'

Example:


// Remove an element
// lets get the element with the given id
var pElement = document.getElementById('pTag')

// lets get the button too
let rButton = document.getElementById('rButton')
rButton.addEventListener('click', function () {
   // alert('i dey work')
   pElement.remove();
})

// Importance: 
// Removing elements is important for managing the content displayed on the webpage, ensuring that outdated or irrelevant elements are no longer shown.










 
// Adding an element to the DOM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// To add an element to the DOM using JavaScript, you can use methods like createElement(), appendChild(), and insertBefore(). Here's a step-by-step guide on how to create and add an element to the DOM.

// lets get the div element we want to add element to
var container = document.getElementById('container')

// lets get the button element too
var addElementBtn = document.getElementById('addElementBtn')

// lets add event listener to the button 
addElementBtn.addEventListener('click', function () {
   newElement = document.createElement('p')
   newElement.innerHTML = 'This is the new element added to the dom from JavaScript'
   container.appendChild(newElement)
})















// 5. Event Handling >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Event handling allows you to make your web pages interactive by responding to user actions.

addEventListener()
removeEventListener()

// Example:
// Add an event listener
elementById.addEventListener('click', function() {
  alert('Element clicked!');
});

// Remove an event listener
elementById.removeEventListener('click', function() {
  alert('Element clicked!');
});

// Importance: 
// Event handling is essential for creating interactive web pages. It allows you to execute code in response to user actions like clicks, mouse movements, key presses, and more.

 



// Conclusion

// Understanding and manipulating the DOM is a fundamental skill in JavaScript development. By learning how to access, create, modify, and remove elements, as well as handle events, you can build dynamic and interactive web applications.

//  Summary of DOM Operations

// 1. Accessing Elements
getElementById()
getElementsByClassName()
getElementsByTagName()
querySelector()
querySelectorAll()
   
// 2. Creating Elements
document.createElement()
   
// 3. Modifying Elements
element.innerHTML / element.textContent
element.setAttribute()
element.style
classList.add(), classList.remove(), classList.toggle()
   
// 4. Removing Elements
element.remove()
   
// 5. Event Handling
addEventListener()
removeEventListener()

// Mastering these operations will enable you to effectively manipulate the DOM and create rich, interactive web experiences.





// In JavaScript, both document.querySelector() and document.getElementById() are used to select elements from the DOM (Document Object Model), but they have some differences in their functionality and usage.

//  document.querySelector() >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Syntax: 
document.querySelector(selector)

// Parameters: 
// A CSS selector string (e.g., '#id', '.class', 'tag', or a more complex CSS selector).

// Return Value: 
// The first element that matches the specified CSS selector, or null if no matches are found.

// Flexibility: 
// Can select any type of element based on its CSS selector. This makes it very versatile, as it can select elements by ID, class, tag name, attribute, and more.



// Example Usage:
  
  let element1 = document.querySelector('#myId'); // Selects an element with the ID 'myId'
  let element2 = document.querySelector('.myClass'); // Selects the first element with the class 'myClass'
  let element3 = document.querySelector('div'); // Selects the first <div> element
  

 document.getElementById()

// Syntax: 
document.getElementById(id)


// Parameters: 
// A string representing the ID of the element to be selected.


// Return Value: 
// The element with the specified ID, or null if no such element exists.


// Usage: 
// Specifically used to select an element by its ID attribute. IDs are expected to be unique within a document, so this method returns a single element.


// Example Usage:






let element = document.getElementById('myId'); // Selects the element with the ID 'myId'
  

//  Key Differences

// 1. Selector Type:
   document.querySelector() //uses a CSS selector, making it more versatile.
   document.getElementById() //specifically targets elements by their ID.

// 2. Return Value:
   document.querySelector() //returns the first matching element for the given CSS selector.
   document.getElementById() //returns the element with the exact ID provided.

// 3. Flexibility:
   document.querySelector() //can select elements based on various criteria (ID, class, tag name, attributes, etc.).
   document.getElementById() //is limited to selecting elements by their ID.

// 4. Performance:
   document.getElementById() //is generally faster for selecting elements by ID, as it directly accesses the element.
   document.querySelector() //may be slightly slower due to the need to parse the CSS selector, but the performance difference is usually negligible for most use cases.








   //  Example Comparison

  // Using document.getElementById()
  let elementByTheId = document.getElementById('myId');
  console.log(elementByTheId); // Outputs: <div id="myId">This is a div with an ID.</div>

  // Using document.querySelector() to select by ID
  let elementByQuerySelectorId = document.querySelector('#myId');
  console.log(elementByQuerySelectorId); // Outputs: <div id="myId">This is a div with an ID.</div>

  // Using document.querySelector() to select by class
  let elementByClass = document.querySelector('.myClass');
  console.log(elementByClass); // Outputs: <div class="myClass">This is a div with a class.</div>



// In summary, 
// use document.getElementById() when you need to quickly select an element by its unique ID, and use document.querySelector() when you need more flexibility in selecting elements based on various CSS selectors.