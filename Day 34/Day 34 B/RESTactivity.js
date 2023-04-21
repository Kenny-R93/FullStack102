// Create buttons that do each of the tasks below. **In HTML File**
// Connect javascript to all the buttons
document.getElementById("buttonGetPost").addEventListener("click", getAllPosts);
document.getElementById("buttonId10").addEventListener("click", getPostId10);
document.getElementById("buttonNewPost").addEventListener("click", createNewPost);
document.getElementById("buttonReplace12").addEventListener("click", replacePostId12);
document.getElementById("buttonUpdate12").addEventListener("click", updateTitlePostId12);
document.getElementById("buttonDelete12").addEventListener("click", deletePostId12);

// Get all posts
function getAllPosts() {
    fetch("http://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => displayOutput(JSON.stringify(posts)))
        .catch(error => console.log("Error: " + error));
}

// Get post with id of 10
function getPostId10() {
    fetch("http://jsonplaceholder.typicode.com/posts/10")
        .then(response => response.json())
        .then(post => displayOutput(JSON.stringify(post)))
        .catch(error => displayOutput("Error: " + error))
        .catch(error => console.log("Error: " + error));
}

// Create a new post and log the id generated for it by the server
function createNewPost() {
    fetch("http://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "New Post",
            body: "New post content",
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(post => displayOutput("New post created with ID: " + post.id))
        .catch(error => console.log("Error: " + error))
        .catch(error => displayOutput("Error: " + error));
}


// Replace the post with id of 12 and render the responseJSON
function replacePostId12() {
    fetch("http://jsonplaceholder.typicode.com/posts/12", {
        method: "PUT",
        body: JSON.stringify({
            id: 12,
            title: "Replaced Post",
            body: "Replaced post content",
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(post => displayOutput(JSON.stringify(post)))
        .catch(error => console.log("Error: " + error))
        .catch(error => displayOutput("Error: " + error));
}


// Update the title of post with id of 12 and render responseJSON
function updateTitlePostId12() {
    fetch("http://jsonplaceholder.typicode.com/posts/12", {
        method: "PATCH",
        body: JSON.stringify({
            title: "Updated Title"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(post => displayOutput(JSON.stringify(post)))
        .catch(error => console.log("Error: " + error))
        .catch(error => displayOutput("Error: " + error));
}


// Delete the post with id of 12 and render a success message
function deletePostId12() {
    fetch("http://jsonplaceholder.typicode.com/posts/12", {
        method: "DELETE"
    })
        .then(() => {displayOutput("Post with ID 12 has been deleted");})
        .catch(error => console.log("Error: " + error))
        .catch(error => displayOutput("Error: " + error));
}

// Output into the P tag
function displayOutput(content) {
    document.getElementById("output").innerHTML = content;
}


