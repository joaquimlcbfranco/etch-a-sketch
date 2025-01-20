// Start variable with fixed number for height/width
const MAX_HEIGHT = 16;
const MAX_WIDTH = 16;

// Get container that will have the grid in it
const grid = document.querySelector('#grid');
let row = document.createElement('div');

// Add childs to container with x height/width, taken from user's prompt input
for (let i = 1; i <= MAX_HEIGHT; i++) {
    row = document.createElement('div');
    grid.appendChild(row);
    row.classList.add('row');
    for (let j = 1; j <= MAX_WIDTH; j++) {
        const square = document.createElement('div');
        row.appendChild(square);
        square.classList.add('square');
    }
}
