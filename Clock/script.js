const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.querySelector(".date").innerHTML = new Date().toLocaleDateString('en-GB', options);

let time = document.querySelector(".time");
let isMuted = false
const tickSound  = new Audio("tick.wav")
tickSound.preload = "auto"; // ✅ Preload sound to avoid lag

function updateTime() {
    time.innerHTML = new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    })
    if (!isMuted) {
        tickSound.currentTime = 0
        tickSound.play()
    }
}

// ✅ Play sound & show initial time instantly on page load
window.addEventListener("DOMContentLoaded", () => {
    updateTime(); // ✅ Show time instantly
    tickSound.play()
});

// Update time every second
setInterval(updateTime, 1000)

// Mute/Unmute Button
document.getElementById("toggleSound").addEventListener("click", () => {
    isMuted = !isMuted
    document.getElementById("toggleSound").textContent = isMuted ? "🔇 Unmute" : "🔊 Mute"
})

