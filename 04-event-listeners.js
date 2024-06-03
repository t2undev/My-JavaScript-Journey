// JavaScript Event Listeners >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Lets run this alert function to confirm that our script is connected to the html file
// alert('Welcome to Event listener class.');



// Relatable Example >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Let's consider a simple example to illustrate how event listeners work. Imagine you have a button on a webpage, and you want something to happen when you click it, like showing an alert message.

document.addEventListener("DOMContentLoaded", function () {
  // Select the button element
  var button = document.getElementById("myButton");

  // Attach the event listener to the button
  button.addEventListener("click", function() {
    handleClick()
    // alert('i dey work now');
  });

  // Define the function to run when the button is clicked
  function handleClick() {
    alert("Button was clicked!");
  }
});

// In this example: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Select the Button: We select the button element using document.getElementById.
// Define the Function: We define a function handleClick that shows an alert when called.
// Attach the Event Listener: We use addEventListener to attach the handleClick function to the button, specifying that it should run when the button is clicked.



// difference between innerHTML and innerText write
// innerText will render the text including the <b></b> tag as text
document. getElementById ('pp').innerText = "ANYTHING <b>CAN GO HERE</b>";

// innerHTML will render the text and then the <b></b> tag as a html bold tag
document. getElementById ('p').innerHTML = "ANYTHING <b>CAN GO HERE</b>";

// write will display or write directly on the document
var dom = document.write('this text is from document.write()')
dom.style.color = 'red';



// More Complex Example >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Now, let's say you want to change the color of a div when the mouse hovers over it and revert it back when the mouse leaves.

// Select the div element
const colorBox = document.getElementById("colorBox");

// Define the function to run when the mouse enters the div
function changeColor() {
  colorBox.style.backgroundColor = "red";
}

// Define the function to run when the mouse leaves the div
function revertColor() {
  colorBox.style.backgroundColor = "lightblue";
}

// Attach the event listeners to the div
colorBox.addEventListener("mouseover", changeColor);
colorBox.addEventListener("mouseout", revertColor);

// In this example:

// Select the Div: We select the div element.
// Define Functions: We define changeColor and revertColor functions to change the background color.
// Attach Event Listeners: We attach mouseover and mouseout events to change and revert the color when the mouse enters and leaves the div.









// Explanation and example for each of the 30 JavaScript event listeners:

// 1. click: Fired when an element is clicked.

document.getElementById("myButton").addEventListener("click", function () {
  alert("Button clicked!");
});

// 2. dblclick: Fired when an element is double-clicked.

document.getElementById("myButton").addEventListener("dblclick", function () {
  alert("Button double-clicked!");
});

// 3. mousedown: Fired when a mouse button is pressed down on an element.

document.getElementById("myButton").addEventListener("mousedown", function () {
  alert("Mouse button pressed!");
});

// 4. mouseup: Fired when a mouse button is released over an element.

document.getElementById("myButton").addEventListener("mouseup", function () {
  alert("Mouse button released!");
});

// 5. mousemove: Fired when the mouse pointer is moving while it is over an element.

document.getElementById("myDiv").addEventListener("mousemove", function () {
  console.log("Mouse is moving over the div!");
});

// 6. mouseover: Fired when the mouse pointer enters the element.

document.getElementById("myDiv").addEventListener("mouseover", function () {
  console.log("Mouse entered the div!");
});

// 7. mouseout: Fired when the mouse pointer leaves the element.

document.getElementById("myDiv").addEventListener("mouseout", function () {
  console.log("Mouse left the div!");
});

// 8. mouseenter: Fired when the mouse pointer enters the element (does not bubble).

document.getElementById("myDiv").addEventListener("mouseenter", function () {
  console.log("Mouse entered the div!");
});

// 9. mouseleave: Fired when the mouse pointer leaves the element (does not bubble).

document.getElementById("myDiv").addEventListener("mouseleave", function () {
  console.log("Mouse left the div!");
});

// 10. contextmenu: Fired when the right mouse button is clicked (context menu is triggered).

document
  .getElementById("myDiv")
  .addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("Context menu triggered!");
  });

// 11. keydown: Fired when a key is pressed down.

document.addEventListener("keydown", function (event) {
  console.log(`Key pressed: ${event.key}`);
});

// 12. keyup: Fired when a key is released.

document.addEventListener("keyup", function (event) {
  console.log(`Key released: ${event.key}`);
});

// 13. keypress: Fired when a key is pressed down (deprecated).

document.addEventListener("keypress", function (event) {
  console.log(`Key pressed: ${event.key}`);
});

// 14. focus: Fired when an element gains focus.

document.getElementById("myInput").addEventListener("focus", function () {
  console.log("Input gained focus!");
});

// 15. blur: Fired when an element loses focus.

document.getElementById("myInput").addEventListener("blur", function () {
  console.log("Input lost focus!");
});

// 16. input: Fired when the value of an `<input>`, `<textarea>`, or `<select>` element is changed.

document.getElementById("myInput").addEventListener("input", function () {
  console.log("Input value changed!");
});

// 17. change: Fired when the value of an `<input>`, `<textarea>`, or `<select>` element is changed and the element loses focus.

document.getElementById("mySelect").addEventListener("change", function () {
  console.log("Select value changed!");
});

// 18. submit: Fired when a form is submitted.

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  alert("Form submitted!");
});

// 19. reset: Fired when a form is reset.

document.getElementById("myForm").addEventListener("reset", function () {
  alert("Form reset!");
});

// 20. select: Fired when some text in an `<input>` or `<textarea>` is selected.

document.getElementById("myInput").addEventListener("select", function () {
  console.log("Text selected!");
});

// 21. scroll: Fired when the document view or an element with a scrollbar is scrolled.

window.addEventListener("scroll", function () {
  console.log("Page scrolled!");
});

// 22. resize: Fired when the document view (window) is resized.

window.addEventListener("resize", function () {
  console.log("Window resized!");
});

// 23. load: Fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

window.addEventListener("load", function () {
  console.log("Page fully loaded!");
});

// 24. unload: Fired when the document or a child resource is being unloaded.

window.addEventListener("unload", function () {
  console.log("Page is unloading!");
});

// 25. error: Fired when a resource failed to load.

window.addEventListener("error", function (event) {
  console.error("Error occurred:", event.message);
});

// 26. drag: Fired when an element or text selection is being dragged.

document.getElementById("myDiv").addEventListener("drag", function () {
  console.log("Element is being dragged!");
});

// 27. dragstart: Fired when the user starts dragging an element or text selection.

document.getElementById("myDiv").addEventListener("dragstart", function () {
  console.log("Drag started!");
});

// 28. dragend: Fired when a drag operation ends (such as releasing a mouse button or hitting the escape key).

document.getElementById("myDiv").addEventListener("dragend", function () {
  console.log("Drag ended!");
});

// 29. dragover: Fired when an element or text selection is being dragged over a valid drop target.

document.getElementById("dropArea").addEventListener("dragover", function (event) {
    event.preventDefault(); // Necessary to allow a drop
    console.log("Dragging over the drop area!");
  });

// 30. drop: Fired when an element or text selection is dropped on a valid drop target.

document.getElementById("dropArea").addEventListener("drop", function (event) {
  event.preventDefault(); // Necessary to complete the drop
  console.log("Element dropped!");
});

// These examples demonstrate how to add event listeners to HTML elements and handle various events.
// The `addEventListener` method is used to attach an event handler to a specific event on a specific element.
