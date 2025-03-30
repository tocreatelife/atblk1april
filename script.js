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

// Функция подтверждения выполнения задания
function confirmTask(pageNumber) {
  const confirmButton = document.querySelector(
    `#page${pageNumber}Result button:first-of-type`
  );
  const successDiv = document.getElementById(`page${pageNumber}Success`);

  // Скрываем кнопку подтверждения
  confirmButton.classList.add("hidden");

  // Для страницы 3 сразу показываем сообщение об успехе
  if (pageNumber === 3) {
    successDiv.classList.remove("hidden");
  } else {
    // Для остальных страниц показываем сообщение об успехе с задержкой
    setTimeout(() => {
      successDiv.classList.remove("hidden");
    }, 1000);
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
  let timeLeft = 10; // 2 минуты в секундах
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
  let activeAds = 0;
  const maxActiveAds = 3; // Максимальное количество одновременно активных баннеров

  function createNewAd() {
    if (activeAds >= maxActiveAds || closedAds >= adTexts.length) return;

    const text = adTexts[Math.floor(Math.random() * adTexts.length)];
    const ad = document.createElement("div");
    ad.className = "ad";

    // Случайное позиционирование
    const left = Math.random() * (container.offsetWidth - 200);
    const top = Math.random() * (container.offsetHeight - 100);
    ad.style.left = `${left}px`;
    ad.style.top = `${top}px`;
    ad.style.zIndex = 1000 + activeAds;

    ad.innerHTML = `
      <p>${text}</p>
    `;

    // Добавляем обработчик клика на весь баннер
    ad.onclick = () => {
      ad.remove();
      activeAds--;
      closedAds++;
      if (closedAds === adTexts.length) {
        document.getElementById("page6Result").classList.remove("hidden");
      } else {
        // Создаем новый баннер взамен закрытого
        setTimeout(createNewAd, 500);
      }
    };

    container.appendChild(ad);
    activeAds++;

    // Добавляем случайное движение с увеличенной скоростью
    let x = left;
    let y = top;
    let dx = (Math.random() - 0.5) * 4; // Увеличиваем скорость движения
    let dy = (Math.random() - 0.5) * 4; // Увеличиваем скорость движения

    function moveAd() {
      x += dx;
      y += dy;

      // Отскок от границ
      if (x <= 0 || x >= container.offsetWidth - 200) dx *= -1;
      if (y <= 0 || y >= container.offsetHeight - 100) dy *= -1;

      ad.style.left = `${x}px`;
      ad.style.top = `${y}px`;
      requestAnimationFrame(moveAd);
    }

    moveAd();
  }

  // Создаем начальные баннеры
  for (let i = 0; i < maxActiveAds; i++) {
    setTimeout(createNewAd, i * 500);
  }
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
