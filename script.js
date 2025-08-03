const face = document.querySelector('.face-link');

window.addEventListener('load', () => {
  // Borrar posiciones anteriores
  face.style.top = '';
  face.style.bottom = '';
  face.style.left = '';
  face.style.right = '';

  const position = ['top', 'bottom', 'left', 'right'];
  const side = position[Math.floor(Math.random() * position.length)];

  // Rotación para simular que se asoma 👀
  let rotation = 'rotate(0deg)';

  if (side === 'top') {
    face.style.top = '0';

    // Evita el centro: usa extremos (5%-35% o 65%-95%)
    const leftPos = Math.random() < 0.5
      ? Math.random() * 30 + 5
      : Math.random() * 30 + 65;
    face.style.left = `${leftPos}%`;

    rotation = 'rotate(-90deg)';
  } else if (side === 'bottom') {
    face.style.bottom = '0';
    face.style.left = `${Math.random() * 80 + 10}%`;
    rotation = 'rotate(90deg)';
  } else if (side === 'left') {
    face.style.left = '0';
    face.style.top = `${Math.random() * 80 + 10}%`;
    rotation = 'rotate(180deg)';
  } else if (side === 'right') {
    face.style.right = '0';
    face.style.top = `${Math.random() * 80 + 10}%`;
    rotation = 'rotate(0deg)';
  }

  face.style.transform = rotation;
});

// Frases glitchy 👻
const frases = [
  "nothing to see here",
  "move along",
  "you saw nothing",
  "nope",
  "not ready yet",
  "getting ready",
  "brb",
  "coming soon"
];

// Escuchar clics en toda la pantalla (excepto en la carita para que siga el link)
document.body.addEventListener('click', (e) => {
  const target = e.target.closest('.face-link');
  if (target) return; // No mostrar frase si se hizo clic en la carita

  const frase = frases[Math.floor(Math.random() * frases.length)];
  const x = e.clientX;
  const y = e.clientY;

  const glitch = document.createElement('div');
  glitch.className = 'glitch-frase';
  glitch.innerText = frase;
  glitch.style.left = `${x}px`;
  glitch.style.top = `${y}px`;

  document.body.appendChild(glitch);

  setTimeout(() => {
    glitch.remove();
  }, 2500);
});
