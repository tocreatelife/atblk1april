let timeLeft = 120; // 2 минуты в секундах
const timerElement = document.getElementById("timer");
const timeLeftElement = document.getElementById("time-left");
const result = document.getElementById("step2-result");

// Показываем таймер сразу
timerElement.classList.remove("hidden");
startTimer();

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

function confirmTask() {
  showResult();
}

function showResult() {
  result.classList.remove("hidden");
  result.classList.add("fade-in");
}

function checkDuck() {
  const result = document.getElementById("step2-result");
  result.classList.remove("hidden");
  setTimeout(() => {
    window.location.href = "step3.html";
  }, 2000);
}
