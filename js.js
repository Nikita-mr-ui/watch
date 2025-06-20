function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  const time = now.toLocaleTimeString();
  clock.textContent = time;
}

setInterval(updateClock, 1000);
updateClock(); // первый запуск

const toggleButton = document.getElementById("toggle-theme");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
