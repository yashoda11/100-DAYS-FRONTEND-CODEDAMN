function submitComment() {
    // Get the value of the comment textarea
    var comment = document.getElementById('comment').value;

    // Get the error paragraph
    var errorParagraph = document.getElementById('error');

    // Check if the comment is empty
    if (comment.trim() === '') {
        // Display an error message
        errorParagraph.innerText = 'Error: Comment cannot be empty.';
    } else {
        // Clear the error message
        errorParagraph.innerText = '';

        // Create a new list item for the comment
        var listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(comment));

        // Append the new list item to the comment list
        document.getElementById('commentList').appendChild(listItem);

        // Clear the comment textarea
        document.getElementById('comment').value = '';
    }
}