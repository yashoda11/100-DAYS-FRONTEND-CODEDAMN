// Add the click event listener here

function increment(){
    var counterDisplay = document.getElementById("count-display");
    var currentCount = parseInt(counterDisplay.innerText, 10) || 0;
    counterDisplay.innerText = currentCount + 1;
}

function resetFunction(){
    document.getElementById("count-display").innerText = "";
}