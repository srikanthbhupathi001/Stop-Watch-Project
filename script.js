var seconds = document.getElementById("seconds");
var milliseconds = document.getElementById("milliseconds");
var Start = document.getElementById("Start");
var Stop = document.getElementById("Stop");
var Reset = document.getElementById("Reset");
var sec = 0;
var millisec = 0;
var timeInterval;

const timer = () => {
  millisec++;

  if (millisec < 9) {
    milliseconds.innerHTML = "0" + millisec;
  }
  if (millisec > 9) {
    milliseconds.innerHTML = millisec;
  }
  if (millisec > 99) {
    sec++;
    seconds.innerHTML = "0" + sec;
    millisec = 0;
    milliseconds.innerHTML = "0" + 0;
  }
  if (sec > 9) {
    seconds.innerHTML = sec;
  }
};
// start
Start.addEventListener("click", () => {
  timeInterval = setInterval(timer, 10);
});
// stop
Stop.addEventListener("click", () => {
  clearInterval(timeInterval);
});
//clear
Reset.addEventListener("click", () => {
  clearInterval(timeInterval);
  sec = "00";
  millisec = "00";
  seconds.innerHTML = sec;
  milliseconds.innerHTML = millisec;
});
