const alarmSound = new Audio("timer.mp3");

const timeDisplay = document.querySelector(".time-display");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resumeButton = document.getElementById("resume");
const resetButton = document.getElementById("reset");
const inputMinutes = document.getElementById("minutes");

let seconds = 0;
let interval = null;
let isPaused = false;

function formatTime(seconds) {
    return new Date(seconds * 1000).toISOString().substr(11, 8);
}

startButton.addEventListener("click", () => {
    if (interval === null) {
        seconds = parseInt(inputMinutes.value) * 60;
        if (isNaN(seconds) || seconds <= 0) {
            return;
        }
        timeDisplay.textContent = formatTime(seconds);
        interval = setInterval(() => {
            if (seconds > 0) {
                seconds--;
                timeDisplay.textContent = formatTime(seconds);
            } else {
                clearInterval(interval);
                interval = null;
                alarmSound.play(); // Play sound when timer ends
            }
        }, 1000);
    }
});

pauseButton.addEventListener("click", () => {
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
        isPaused = true;
    }
});

resumeButton.addEventListener("click", () => {
    if (isPaused && interval === null) {
        interval = setInterval(() => {
            if (seconds > 0) {
                seconds--;
                timeDisplay.textContent = formatTime(seconds);
            } else {
                clearInterval(interval);
                interval = null;
                alarmSound.play(); // Play sound when timer ends (added for resume case)
            }
        }, 1000);
        isPaused = false;
    }
});

resetButton.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    isPaused = false;
    seconds = 0;
    timeDisplay.textContent = "00:00:00";
    alarmSound.pause(); // Stop sound if playing
    alarmSound.currentTime = 0; // Reset sound to start
});