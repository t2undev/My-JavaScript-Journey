let button = document.getElementById("btn");
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

  let timer = setInterval(() => {
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
      alert("Time is up!");
    }
  
  }, 1);

  stop
});
























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
