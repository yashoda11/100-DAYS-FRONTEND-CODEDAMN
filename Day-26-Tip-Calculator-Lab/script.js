function calculateTip() {
    // Get the values of the bill amount and tip percentage
    var billAmount = parseFloat(document.getElementById('billAmount').value);
    var tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    // Check if the values are valid numbers
    if (!isNaN(billAmount) && !isNaN(tipPercentage)) {
        // Calculate the tip
        var tipAmount = (billAmount + tipPercentage) / 100;

        // Display the calculated tip (you can customize how you want to display it)
        alert('Tip Amount: $' + tipAmount.toFixed(2));
    } else {
        // Display an error message if the values are not valid numbers
        alert('Please enter valid numbers for Bill Amount and Tip Percentage.');
    }
}