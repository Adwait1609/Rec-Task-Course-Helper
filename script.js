// Countdown Timer
const timerElement = document.getElementById('timer');
const previewButton = document.getElementById('preview-btn');

// Function to calculate and display countdown
function startCountdown() {
    const targetDate = new Date('January 1, 2025 00:00:00').getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            timerElement.textContent = "Happy New Year!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.textContent = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
    }, 1000);
}

// Event Listener for "Preview" Button
previewButton.addEventListener('click', () => {
    alert("Happy New Year in Advance!");
});

// Start Countdown
startCountdown();
