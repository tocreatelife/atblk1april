// Функция для перехода между страницами
function nextPage(currentPage) {
  document.getElementById(`page${currentPage}`).classList.remove("active");
  document.getElementById(`page${currentPage + 1}`).classList.add("active");

  // Специальные действия для определенных страниц
  if (currentPage === 1) {
    startTimer();
  } else if (currentPage === 5) {
    createAds();
  }
}

// Проверка ввода числа π
function checkPi() {
  const input = document.getElementById("piInput").value;
  const result = document.getElementById("piResult");
  result.classList.remove("hidden");
}

// Таймер для страницы 2
function startTimer() {
  let timeLeft = 120; // 2 минуты в секундах
  const timerElement = document.getElementById("timer");
  const result = document.getElementById("page2Result");

  const timer = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `У вас ${minutes}:${seconds
      .toString()
      .padStart(2, "0")}!`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      result.classList.remove("hidden");
    }

    timeLeft--;
  }, 1000);
}

// Создание рекламных баннеров для страницы 6
function createAds() {
  const container = document.getElementById("ads-container");
  const adTexts = [
    "СКИДКА 99% на все товары!",
    "Вы выиграли iPhone!",
    "Срочно! Осталось 5 минут!",
    "Вам повезло! Нажмите здесь!",
    "Поздравляем! Вы миллионер!",
    "Специальное предложение!",
  ];

  let closedAds = 0;

  adTexts.forEach((text, index) => {
    const ad = document.createElement("div");
    ad.className = "ad";
    ad.style.left = `${Math.random() * 70}%`;
    ad.style.top = `${Math.random() * 70}%`;
    ad.style.zIndex = index + 1;

    const closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "×";
    closeBtn.onclick = () => {
      ad.remove();
      closedAds++;
      if (closedAds === adTexts.length) {
        document.getElementById("page6Result").classList.remove("hidden");
      }
    };

    ad.innerHTML = `
            ${closeBtn.outerHTML}
            <p>${text}</p>
        `;

    container.appendChild(ad);
  });
}

// Автоматическое отображение результатов для страниц 3-5
document.addEventListener("DOMContentLoaded", () => {
  // Для страницы 3
  setTimeout(() => {
    document.getElementById("page3Result").classList.remove("hidden");
  }, 3000);

  // Для страницы 4
  setTimeout(() => {
    document.getElementById("page4Result").classList.remove("hidden");
  }, 3000);

  // Для страницы 5
  setTimeout(() => {
    document.getElementById("page5Result").classList.remove("hidden");
  }, 3000);
});
