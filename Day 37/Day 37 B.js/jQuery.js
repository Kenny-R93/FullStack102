// Create a function that will fire when the submit <button> is clicked
// Make sure the function loaded after the DOM
$(document).ready(function() {
    ${"#submit"}.on("click", function(event) {             // Create variables for each of the form inputs
        let name = $("#name")
        let email = $("#email")
        let phone = $("#phone")
        let required = [name, email, phone];           // Create an array named required store the variables you've name, email, and phone number

// Utilize a for loop to iterate of the entire required array
// Inside the for loop:
// Use an if statement to check the value of each array item
        for (let i = 0; i < required.length; i++) {          // Utilize a for loop to iterate of the entire required array
            if (required[i] === "") {           // If the array item is equal to an empty string ("")
                $("#message").text("Please Fill Out Required Fields");     // populate the message <p> with the following text: "Please Fill Out Required Fields"
                $("label:eq("+i+")").addClass("warning");   // add the warning class to this message // Attach the warning class to the array item's <label> note: You want the label to turn red, if the field is empty
            } else {
                $("label:eq("+i+")").removeClass("warning");  // once the field has something other than a blank string. make sure the warning class is removed
            }
    }            // close out the for loop

        if (!$("label").hasClass("warning")) {          // utilize another if statement  // verify that no <label>'s have the warning class
            $("#pre-form").html("<h2>Thanks for your feeedback!</h2>");             // if true remove the form from the DOM manipulate the <h2> to say: "Thanks for your feedback!"
        }
    });
    });       // close your function







// Make sure the function loaded after the DOM

// Inside the function:

// create variables for each of the form inputs
// use jQuery to accomplish this task
// (think about querySelector)
// create an array named required
// store the variables you've name, email, and phone number
// Utilize a for loop to iterate of the entire required array
// Inside the for loop:
// use an if statement to check the value of each array item
// if the array item is equal to an empty string ("")
// populate the message <p> with the following text:
// "Please Fill Out Required Fields"
// add the warning class to this message
// Attach the warning class to the array item's <label>
// note: You want the label to turn red, if the field is empty
// once the field has something other than a blank string. make sure the warning class is removed
// close out the for loop
// utilize another if statement
// verify that no <label>'s have the warning class
// if true
// remove the form from the DOM
// manipulate the <h2> to say: "Thanks for your feedback!"
// close your function