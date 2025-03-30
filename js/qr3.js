function confirmEating() {
  const result = document.getElementById("qr3-result");
  result.classList.remove("hidden");

  const qr4Link = document.getElementById("qr4-link");
  qr4Link.innerHTML = `<a href="qr4.html">Перейти к QR-коду 4</a>`;
}
