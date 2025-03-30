function checkPi() {
  const piInput = document.getElementById("pi-input");
  const result = document.getElementById("step1-result");

  // Показываем результат в любом случае (так как по условию мы пропускаем дальше в любом случае)
  result.classList.remove("hidden");

  // Плавное появление результата
  setTimeout(() => {
    result.style.opacity = "1";
  }, 100);
}
