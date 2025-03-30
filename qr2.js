let timeLeft = 120; // 2 минуты в секундах
const timerElement = document.getElementById("timer");
const timeLeftElement = document.getElementById("time-left");
const result = document.getElementById("qr2-result");

// Показываем таймер через 3 секунды
setTimeout(() => {
  timerElement.classList.remove("hidden");
  startTimer();
}, 3000);

function startTimer() {
  const timer = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeLeftElement.textContent = `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      showResult();
    }
  }, 1000);
}

function showResult() {
  result.classList.remove("hidden");
  const qr3Link = document.getElementById("qr3-link");
  qr3Link.innerHTML = `<a href="qr3.html">Перейти к QR-коду 3</a>`;
}
