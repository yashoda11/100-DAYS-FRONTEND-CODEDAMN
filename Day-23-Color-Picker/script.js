// Import the DOM elements
// Get references to the elements
const colorPicker = document.getElementById('colorPicker');
const colorDisplay = document.getElementById('colorDisplay');
const colorCode = document.getElementById('colorCode');



// Add the event listener for #colorPicker element
// Add event listener to the colorPicker input
colorPicker.addEventListener('input', function() {
  // Get the selected color from the colorPicker
  const selectedColor = colorPicker.value;

  // Set the background color of colorDisplay
  colorDisplay.style.backgroundColor = selectedColor;

  // Show the color code in the colorCode paragraph
  colorCode.textContent = selectedColor;

});

