function confirmPerformance() {
  const result = document.getElementById("qr5-result");
  result.classList.remove("hidden");

  const qr6Link = document.getElementById("qr6-link");
  qr6Link.innerHTML = `<a href="qr6.html">Перейти к QR-коду 6</a>`;
}
