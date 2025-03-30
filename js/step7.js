// Автоматически запускаем видео при загрузке страницы
window.onload = function () {
  const iframe = document.querySelector("iframe");
  iframe.src = iframe.src; // Перезагружаем iframe для автовоспроизведения

  // Добавляем эффект конфетти
  createConfetti();
};

function createConfetti() {
  const colors = ["#FF6B2B", "#FF8F59", "#FFB38A", "#FFD7C3"];
  const confettiCount = 100;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confetti.style.opacity = Math.random();
    document.body.appendChild(confetti);

    // Удаляем конфетти после анимации
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Добавляем стили для конфетти
const style = document.createElement("style");
style.textContent = `
    .confetti {
        position: fixed;
        top: -10px;
        width: 10px;
        height: 10px;
        animation: fall linear forwards;
    }
    
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);
