function allowDrop(event) {
    event.preventDefault();
    var dropZone = document.getElementById('dropZone');
    dropZone.style.backgroundColor = 'yellow';
}

function drag(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text');
    var draggedElement = document.getElementById(data);
    var dropZone = document.getElementById('dropZone');
    
    // Change the background color of the container on drop
    dropZone.style.backgroundColor = 'green';

    // Append the dragged element to the container
    dropZone.appendChild(draggedElement);
}