let attempts = 0;

function checkPassword() {
  attempts++;

  // Показываем подсказку после первой попытки
  if (attempts >= 1) {
    const hint = document.getElementById("hint");
    hint.classList.remove("hidden");

    const qr7Link = document.getElementById("qr7-link");
    qr7Link.innerHTML = `<a href="qr7.html">Перейти к финальному QR-коду</a>`;
  }
}
