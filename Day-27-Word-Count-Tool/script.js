function updateWordCount() {
    var inputText = document.getElementById('inputText').value;
    var wordCount = countWords(inputText);
    document.getElementById("wordCount").innerText = wordCount;
    var errorMessage = document.getElementById("errorMessage");

    if((inputText).trim() === "" ){
        errorMessage.innerText = "Please Enter the words for counting";
    }
    else{
        errorMessage.innerText = "";
    }
}
function countWords(inputText) {
    inputText = inputText.trim();
    var words = inputText.split(/\s+/);
    words = words.filter(function(word){
        return word.length > 0;
    });

    return words.length;
}
