var time = 0;
var hours = 0;
var minutes = 0;
var seconds = 0; 
var interval;
var display = document.getElementById("display");
var startBtns = document.getElementById("start");
var stopBtns = document.getElementById("stop");
var resetBtn = document.getElementById("reset");



startBtns.onclick = function(){

  interval = setInterval(()=>{
    seconds++
    if(seconds === 60){
      minutes++
      seconds = 0
    }
    if(minutes === 60){
      hours++
      minutes = 0
    }

    let hrString = hours;
    let minString = minutes;
    let secString = seconds;
    if (hours < 10) {
      hrString = "0" + hrString;
    }
    if (minutes < 10) {
      minString = "0" + minString;
    }
    if (seconds < 10) {
      secString = "0" + secString;
    }

    display.innerHTML = `${hrString}:${minString}:${secString} `;

  },100)
}

stopBtns.onclick = ()=> {
  clearInterval(interval);
  interval = null;
}

resetBtn.onclick = function(){
  if(interval){
      clearInterval(interval);
    }
  hours = 0;
  minutes = 0;
  seconds= 0;
  interval = null;
  display.innerHTML = "00:00:00";
}
