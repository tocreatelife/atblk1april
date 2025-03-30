// Автоматически запускаем видео при загрузке страницы
window.onload = function () {
  const iframe = document.querySelector("iframe");
  iframe.src = iframe.src; // Перезагружаем iframe для автовоспроизведения
};
