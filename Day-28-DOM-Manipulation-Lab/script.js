function transformText(mode) {
    var inputTextElement = document.getElementById('input-text');
    var outputElement = document.getElementById('output');

    var inputText = inputTextElement.value;
    var transformedText;

    if (mode === 'uppercase') {
        transformedText = inputText.toUpperCase();
    } else if (mode === 'lowercase') {
        transformedText = inputText.toLowerCase();
    }

    inputTextElement.value = transformedText;
    outputElement.innerText = transformedText;
}

function resetText() {
    document.getElementById('input-text').value = '';
    document.getElementById('output').innerText = '';
}
