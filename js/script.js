// Page fade-in
document.body.style.opacity = 0;
window.addEventListener("load", () => {
  document.body.style.transition = "opacity 1.5s";
  document.body.style.opacity = 1;
});

// Floating particles
const bg = document.querySelector(".bg-effects");

for (let i = 0; i < 85; i++) {
  const particle = document.createElement("span");
  particle.classList.add("particle");

  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDuration = 12 + Math.random() * 20 + "s";
  particle.style.animationDelay = Math.random() * 10 + "s";

  bg.appendChild(particle);
}
