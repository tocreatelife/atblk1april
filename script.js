function checkPi() {
  const input = document.getElementById("pi-input").value;
  const result = document.getElementById("qr1-result");

  // Показываем результат независимо от введенного значения
  result.classList.remove("hidden");

  // Создаем QR-код для следующего этапа
  const qr2Link = document.getElementById("qr2-link");
  qr2Link.innerHTML = `<a href="qr2.html">Перейти к QR-коду 2</a>`;
}
