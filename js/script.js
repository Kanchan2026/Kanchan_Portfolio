// Simple fade-in effect
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1.5s";
  document.body.style.opacity = 1;
});
