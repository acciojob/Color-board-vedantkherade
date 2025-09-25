//your JS code here. If required.
let container = document.querySelector('.container');

// color palette
const colors = [
  "#e74c3c", // red
  "#8e44ad", // purple
  "#3498db", // blue
  "#e67e22", // orange
  "#2ecc71"  // green
];

// helper function: pick a random color
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

for (let i = 0; i < 800; i++) {
  let square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = getRandomColor();
    square.style.transition = "none"; // instant change
  });

  square.addEventListener('mouseout', () => {
    square.style.backgroundColor = "rgb(29, 29, 29)";
    square.style.transition = "background-color 1s ease"; // smooth fade back
  });

  container.appendChild(square);
}
