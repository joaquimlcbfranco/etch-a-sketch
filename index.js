// Start variable with fixed number for height/width
const MAX_HEIGHT = 16;
const MAX_WIDTH = 16;

// Get container that will have the grid in it
const grid = document.querySelector('#grid');

// Add childs to container with x height/width, taken from user's prompt input
for (let i = 1; i < (MAX_HEIGHT * MAX_WIDTH); i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
    square.classList.add('grid-square');
}
