function checkPi() {
  const result = document.getElementById("step1-result");
  result.classList.remove("hidden");
  setTimeout(() => {
    window.location.href = "pages/step2.html";
  }, 2000);
}
