let button = document.getElementById("btn");
let timer; // timer variable will be used to store the setInterval function ID.
let running = false; //this variable will be used to check if the timer is running or not.


button.addEventListener("click", () => {
  let ss = document.getElementById("ss");
  let mm = document.getElementById("mm");
  let hrs = document.getElementById("hrs");
  let day = document.getElementById("day");
  // alert(seconds);
  // alert(minutes);
  // alert(hours);
  // alert(days);
  // console.log(typeof seconds);

  seconds = parseInt(ss.value) || 0;
  minutes = parseInt(mm.value) || 0;
  hours = parseInt(hrs.value) || 0;
  days = parseInt(day.value) || 0;
  // console.log(typeof seconds); 

  //if running is true, return immediately and do nothing.
  if (running) return; 
  
  //if running is false, set it to true and continue with the code below.
  running = true; 

  timer = setInterval(() => {
    if (seconds > 0) {
      seconds -= 1;
      ss.value = seconds;
    } else if (minutes > 0) {
      minutes -= 1;
      mm.value = minutes;
      seconds = 60;
    } else if (hours > 0) {
      hours -= 1;
      hrs.value = hours;
      minutes = 60;
      seconds = 60;
    } else if (days > 0) {
      days -= 1;
      day.value = days;
      hours = 24;
      minutes = 60;
      seconds = 60;
    }else {
      clearInterval(timer);
      running = false; //set running to false to allow the timer to start again.
      alert("Time is up!");
      button.innerText = "Start"
    }
  
  }, 1000);

  button.textContent = 'Running'; //change the button text to running when the timer starts.
  paused.textContent = 'Pause'; //change the button text back from paused to pause when the timer starts.
});



let paused = document.getElementById('pausebtn');
let stop = document.getElementById('stopbtn');



paused.addEventListener('click', () => {
  // alert('The pause button has been clicked');
  clearInterval(timer);
  running = false; //set running to false to allow the timer to start again.
  button.textContent = 'Resume';
  paused.textContent = 'Paused';

});


stop.addEventListener('click', () => {
  clearInterval(timer); //clear the timer after the stop button has been clicked.
  running = false; //set running to false to allow the timer to start again.

  let ss = document.getElementById("ss");
  let mm = document.getElementById("mm");
  let hrs = document.getElementById("hrs");
  let day = document.getElementById("day");

  // reset all the input fields back to 0
  ss.value = 0;
  mm.value = 0;
  hrs.value = 0;
  day.value = 0;

  button.textContent = 'Start'; //change the button text back to start when the timer stops.
})
























// let button = document.getElementById("btn");

// button.addEventListener("click", () => {
//   let ss = document.getElementById("ss");
//   let mm = document.getElementById("mm");
//   let hrs = document.getElementById("hrs");
//   let day = document.getElementById("day");

//   let seconds = parseInt(ss.value) || 0;
//   let minutes = parseInt(mm.value) || 0;
//   let hours = parseInt(hrs.value) || 0;
//   let days = parseInt(day.value) || 0;

//   let timer = setInterval(() => {
//     if (seconds > 0) {
//       seconds -= 1;
//     } else if (minutes > 0) {
//       minutes -= 1;
//       seconds = 59;
//     } else if (hours > 0) {
//       hours -= 1;
//       minutes = 59;
//       seconds = 59;
//     } else if (days > 0) {
//       days -= 1;
//       hours = 23;
//       minutes = 59;
//       seconds = 59;
//     } else {
//       clearInterval(timer);
//       alert("Time is up!");
//     }

//     ss.value = seconds;
//     mm.value = minutes;
//     hrs.value = hours;
//     day.value = days;
//   }, 1000);
// });
