function checkPi() {
  // Получаем элементы
  const piInput = document.getElementById("pi-input");
  const result = document.getElementById("step1-result");

  // Показываем результат
  if (result) {
    result.classList.remove("hidden");
    result.style.opacity = "1";

    // Прямой переход через 2 секунды
    setTimeout(() => {
      try {
        window.location.href = "pages/step2.html";
      } catch (e) {
        console.error("Ошибка перехода:", e);
        // Альтернативный способ перехода
        window.open("pages/step2.html", "_self");
      }
    }, 2000);
  } else {
    console.error("Элемент result не найден");
    // Принудительный переход если что-то пошло не так
    window.location.href = "pages/step2.html";
  }
}

// Добавим обработчик события при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  // Проверяем, что кнопка существует
  const checkButton = document.querySelector("button.next-button");
  if (checkButton) {
    checkButton.addEventListener("click", checkPi);
  }
});
