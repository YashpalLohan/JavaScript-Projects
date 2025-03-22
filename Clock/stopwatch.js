const timeDisplay = document.querySelector(".time-display")
const startButton = document.getElementById("start")
const pauseButton = document.getElementById("pause")
const resumeButton = document.getElementById("resume")
const resetButton = document.getElementById("reset")

let seconds = 0
let interval = null
let isPaused = false

function formatTime(seconds) {
    return new Date(seconds * 1000).toISOString().substr(11, 8)
}

startButton.addEventListener("click", () => {
    if (interval === null) {
        interval = setInterval(() => {
            seconds++
            timeDisplay.textContent = formatTime(seconds)
        }, 1000)
    }
})

pauseButton.addEventListener("click" , () => {
    if (interval !== null) {
        clearInterval(interval)
        interval = null
        isPaused = true
    }
})

resumeButton.addEventListener("click", () => {
    if (isPaused) {
        interval = setInterval(() => {
            seconds++
            timeDisplay.textContent = formatTime(seconds)
        }, 1000)
        isPaused = false
    }
})

resetButton.addEventListener("click", () => {
    clearInterval(interval)
    interval = null
    seconds = 0
    isPaused = false
    timeDisplay.textContent = formatTime(seconds)
})