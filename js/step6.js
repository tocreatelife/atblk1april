let closedAds = 0;
const totalAds = 6;

function closeAd(adNumber) {
  const ad = document.getElementById(`ad${adNumber}`);
  ad.style.display = "none";
  closedAds++;

  if (closedAds === totalAds) {
    showSuccess();
  }
}

function showSuccess() {
  const result = document.getElementById("step6-result");
  result.classList.remove("hidden");
  result.classList.add("fade-in");

  // Добавляем эффект дрожания для всего контейнера
  const container = document.querySelector(".container");
  container.style.animation = "shake 0.5s";

  // Удаляем анимацию после её завершения
  setTimeout(() => {
    container.style.animation = "";
  }, 500);
}

// Добавляем стиль анимации дрожания
const style = document.createElement("style");
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

function startHacking() {
    const progressBar = document.getElementById('progress-bar');
    const result = document.getElementById('hack-result');
    
    // Показываем прогресс
    progressBar.style.width = '100%';
    
    setTimeout(() => {
        result.classList.remove('hidden');
        setTimeout(() => {
            window.location.href = 'step7.html';
        }, 2000);
    }, 3000);
}
