// Get default grid size value from the default input value
let GRID_SIZE = document.querySelector('#grid-size').value;

// Get grid container and row div
const grid = document.querySelector('.container');
let row = document.createElement('div');

// Call function to display grid when website is opened
createGrid(GRID_SIZE, GRID_SIZE);
paintSquares();

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

// Get measurement's apply button
const measurementsButton = document.querySelector('.measurements-btn');

// Listen for button click, when clicked call function with height and width values
// Also restore the value for the squares variable after creating the grid
measurementsButton.addEventListener('click', () => {
    GRID_SIZE = document.querySelector('#grid-size').value;
    if (GRID_SIZE > 100 || GRID_SIZE < 0 || !(GRID_SIZE)) {
        displayWarning();
    }
    else {
        grid.innerHTML = '';
        warning.classList.add('hide')
        createGrid(GRID_SIZE, GRID_SIZE);
        paintSquares();
    }
    
});

// Initialize body variable. Stores the body div, so we can append child elements to it
// Create a paragraph
const body = document.querySelector('.body');
let warning = document.createElement('p');
warning.classList.add('warning');

// Function that displays a warning when called. 
function displayWarning() {
    warning.textContent = 'Value must be an integer between 1 and 100!'
    warning.classList.remove('hide')
    body.appendChild(warning);
}

// Detects mouse movement over squares, changes square's background color
function paintSquares() {
    squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = '#fd75fd'
        });  
    });
}

    