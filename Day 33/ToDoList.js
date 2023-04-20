// Create a to-do list and it must accomplish the following things:

const ulist  = document.getElementById("ToDo-List"); // Show an unordered list of to-do items
const toDoInput = document.getElementById("ToDO-Input"); // Show an input to enter a new to-do
const toDoButton = document.getElementById("ToDoButton"); //Show a button to add a to-do. When the button is clicked:

function addToDo() {

    const toDo = document.createElement("li");
    toDo.textContent = toDoText;
    toDo.addEventListener("click", removetoDo); // When the user clicks on a list item, it is removed

    ulist.appendChild(toDo);

    toDoInput.value = "";
}

function removetoDo() { // The text from the input box is cleared out.
    this.remove();
}

toDoButton.addEventListener("click", addToDo); // The text from the input box is used to add a list item to the bottom of the list
