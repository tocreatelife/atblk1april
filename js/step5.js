function confirmPerformance() {
  const result = document.getElementById("step5-result");
  result.classList.remove("hidden");
  result.classList.add("fade-in");
}

function nextStep() {
    window.location.href = 'step6.html';
}
