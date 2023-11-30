function fetchData(){

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(responce => responce.json())
        .then(posts => displayTitles(posts.slice(1, 20)))
        .catch(error => console.error("Error Fetching Details", error));

}

function displayTitles(posts){

    var postTitles = document.getElementById("postTitiles");

    postTitles.innerHTML = "";

    posts.forEach(post => {
        var listItems = document.createElement("li");
        listItems.textContent = post.title;
        listItems.style.border = "1px solid green";
        listItems.style.margin = "20px";
        listItems.style.padding = "10px";
        listItems.style.fontSize = "25px";
        postTitles.appendChild(listItems);
    })
}