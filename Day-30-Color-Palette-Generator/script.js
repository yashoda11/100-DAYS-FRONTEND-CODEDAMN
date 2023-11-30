// Function to generate a random hex color code
function generateRandomHexCode() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Function to generate the color palette with 5 color blocks
function generateColorPalette() {
    var colorsContainer = document.getElementById('colors');
    
    // Clear existing color blocks
    colorsContainer.innerHTML = '';

    // Create 5 color blocks
    for (var i = 0; i < 5; i++) {
        var colorBlock = document.createElement('div');
        colorBlock.classList.add('color-block');

        // Generate a random hex color code
        var hexCode = generateRandomHexCode();

        // Set background-color and data-color attributes
        colorBlock.style.backgroundColor = hexCode;
        colorBlock.setAttribute('data-color', hexCode);

        // Append the color block to the color container
        colorsContainer.appendChild(colorBlock);
    }
}
