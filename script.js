const container = document.querySelector('.container');
var opacityEnabled = false;
document.getElementById('opacityButton').onclick = function() {
    opacityEnabled = true;
    promptUser();
}

function createGrid(gridSize) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    var gridArea = gridSize * gridSize;
    for(let i = 1; i <= gridArea; i++) {
        var gridDiv = document.createElement('div');
        gridDiv.setAttribute("class", "gridBoxes");
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridDiv);
    }

    var gridBox = container.querySelectorAll('div');
    if(opacityEnabled == true) {
        gridBox.forEach(gridBox => gridBox.style.backgroundColor = "black");
        gridBox.forEach(gridBox => gridBox.style.opacity = 0.1);
        gridBox.forEach(gridBox => gridBox.addEventListener('mouseover', addOpacity));
        opacityEnabled = false;
    } else {
        gridBox.forEach(gridBox => gridBox.addEventListener('mouseover', addColour));
    }
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
    createGrid(size);
}

function addOpacity() {
    var currentOpacity = +this.style.opacity;
    if (currentOpacity < 1) {
        currentOpacity += 0.1;
    }
    this.style.opacity = currentOpacity;
}

createGrid(16);