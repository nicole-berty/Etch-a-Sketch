const container = document.querySelector('.container');

function createGrid(gridSize) {
    var gridArea = gridSize * gridSize;
    for(let i = 1; i <= gridArea; i++) {
        var gridDiv = document.createElement('div');
        gridDiv.setAttribute("class", "gridBoxes");
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridDiv);
    }

    var gridBox = container.querySelectorAll('div');
    gridBox.forEach(gridBox => gridBox.style.backgroundColor = "white");
    gridBox.forEach(gridBox => gridBox.addEventListener('mouseover', addColour));
}

function addColour() {
    var rgbavalue = getRandomRGBAValue();
    this.style.backgroundColor = rgbavalue;
}

function getRandomRGBAValue() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function promptUser() {
    do{
        var size = parseInt(window.prompt("Enter the number of squares the new grid should have on each side - must be between 1 and 100.", ""), 10);
    } while (isNaN(size) || size > 100 || size < 1);
    clearGrid();
    createGrid(size);
}

function clearGrid() {
    var boxes = document.getElementsByClassName("gridBoxes");
    for(var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = 'black';
       boxes[i].remove();
    }
}

createGrid(16);