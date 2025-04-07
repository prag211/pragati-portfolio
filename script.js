<!-- File: script.js -->
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkModeToggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
    document.body.classList.toggle("bg-light");
    document.body.classList.toggle("text-dark");
  });
});
