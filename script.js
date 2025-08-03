// Frases raras ✨
const frases = [
  "nothing to see here",
  "move along",
  "you saw nothing",
  "coming soon"
];

// Mostrar frase justo donde se hace clic
document.addEventListener("click", function (e) {
  if (e.target.closest(".face-link")) return;

  const frase = document.createElement("div");
  frase.textContent = frases[Math.floor(Math.random() * frases.length)];
  frase.className = "glitch-frase";

  // Posición basada en clic
  frase.style.top = `${e.clientY}px`;
  frase.style.left = `${e.clientX}px`;

  document.body.appendChild(frase);

  setTimeout(() => {
    frase.remove();
  }, 2500);
});
