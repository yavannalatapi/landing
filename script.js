const face = document.querySelector('.face-link');

window.addEventListener('load', () => {
  // Borrar posiciones anteriores
  face.style.top = '';
  face.style.bottom = '';
  face.style.left = '';
  face.style.right = '';

  // Detectar si es móvil
  const isMobile = window.innerWidth < 768;
  const position = isMobile
    ? ['left', 'right']
    : ['top', 'bottom', 'left', 'right'];

  // Elegir lado aleatoriamente
  const side = position[Math.floor(Math.random() * position.length)];
  console.log("👉 La carita apareció en:", side);

  // Rotación para simular que se asoma 👀
  let rotation = 'rotate(0deg)';

  if (side === 'top') {
    face.style.top = '0';
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

// Frases glitchy
