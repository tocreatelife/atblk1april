function confirmEating() {
  const result = document.getElementById("step3-result");
  result.classList.remove("hidden");
  result.classList.add("fade-in");
}

function nextStep() {
    window.location.href = 'step4.html';
}
