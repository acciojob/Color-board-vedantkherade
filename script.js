// How many squares to render
const TOTAL = 800;

// Mount point
const board = document.getElementById('board');

// Utility: random color (nice saturated palette)
function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Create and attach 800 squares
for (let i = 0; i < TOTAL; i++) {
  const sq = document.createElement('div');
  sq.className = 'square';

  // We’ll store any pending timeout id on the node itself
  sq.addEventListener('mouseenter', () => {
    // Cancel pending fade-back if any
    if (sq._tid) {
      clearTimeout(sq._tid);
      sq._tid = null;
    }

    const color = randomColor();
    sq.style.backgroundColor = color;
    sq.style.boxShadow = `0 0 10px 2px ${color}`;

    // After 1 second, revert smoothly
    sq._tid = setTimeout(() => {
      sq.style.backgroundColor = '#1b1f26';
      sq.style.boxShadow = 'none';
      sq._tid = null;
    }, 1000);
  });

  board.appendChild(sq);
}
