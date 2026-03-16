let timeLeft = 0;
let totalTime = 0;
let timer = null;

const display = document.getElementById("display");
const progress = document.getElementById("progress");

const circumference = 2 * Math.PI * 80;

progress.style.strokeDasharray = circumference;

function updateProgress() {

let percent = timeLeft / totalTime;

progress.style.strokeDashoffset =
circumference - percent * circumference;

}

function startTimer() {

if(timer !== null) return;

if(timeLeft === 0){

totalTime = document.getElementById("inputTime").value;

if(totalTime <= 0) return;

timeLeft = totalTime;

}

timer = setInterval(()=>{

display.innerText = timeLeft;

updateProgress();

timeLeft--;

if(timeLeft < 0){

clearInterval(timer);

timer = null;

display.innerText = "Done";

}

},1000);

}

function pauseTimer(){

clearInterval(timer);
timer = null;

}

function resetTimer(){

clearInterval(timer);
timer = null;

timeLeft = 0;
display.innerText = "00";

progress.style.strokeDashoffset = circumference;

}