// Get default grid size value from the default input value
let GRID_SIZE = document.querySelector('#grid-size').value;

// Get grid container and row div
const grid = document.querySelector('.container');
let row = document.createElement('div');

// Function that add childs to container with x height/width, taken from user's inputs. Removes all the previous childs before adding
function createGrid(height, width) {
    for (let i = 1; i <= height; i++) {
        row = document.createElement('div');
        grid.appendChild(row);
        row.classList.add('row');
        for (let j = 1; j <= width; j++) {
            const square = document.createElement('div');
            row.appendChild(square);
            square.classList.add('square');
        }
    }
}

// Call function to display grid when website is opened
createGrid(GRID_SIZE, GRID_SIZE);

// Get measurement's apply button
const measurementsButton = document.querySelector('.measurements-btn');

// Listen for button click, when clicked call function with height and width values
measurementsButton.addEventListener('click', () => {
    GRID_SIZE = document.querySelector('#grid-size').value;
    grid.innerHTML = '';
    createGrid(GRID_SIZE, GRID_SIZE); 
});

// Detects mouse movement over squares, changes square's background color
squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = '#fd75fd'
    });  
});