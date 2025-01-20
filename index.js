// Start variable with fixed number for height/width
const HEIGHT, const WIDTH = 16;

// Get container that will have the grid in it
const grid = document.querySelector('#grid');

// Add childs to container with x height/width, taken from user's prompt input
for (let i = 0; i < HEIGHT * WIDTH; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
}