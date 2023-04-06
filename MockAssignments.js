// MapsAndSets Assignment

// Original:
// Create a map called fruitInventory with the following key-value pairs: ('apple', 10), ('banana', 20), ('orange', 30).
let fruitInventory = new Map()
fruitInventory.set('apple', '10');
fruitInventory.set('banana', 20);
fruitInventory.set('orange', 30);

// Use the set method to update the inventory of 'apple' to 15.
fruitInventory.set('apple', 15);

// Use the get method to retrieve the inventory of 'banana' and store it in a variable called bananaInventory.
console.log(bananaInventory.push(fruitInventory.splice(fruitInventory.get('banana'))));

let bananaInventory = fruitInventory.get("banana");
// Create a set called uniqueColors with the following values: 'red', 'blue', 'green'.
let uniqueColors = new Set('red','blue','green');


// Use the add method to add the color 'yellow' to the uniqueColors set.
uniqueColors.add('yellow');
// Use the has method to check if the color 'blue' is in the uniqueColors set and store the result in a variable called hasBlue.
console.log(hasBlue.push(uniqueColors.has('blue')));




// Corrections:
let fruitInventory = new Map([
    ["apples", 10],
    ["banana", 20],
    ["orange", 30],
]);

fruitInventory.set('apple', 15);

let bananaInventory = fruitInventory.get("banana");

let uniqueColors = new Set(["red","blue","green"]);

uniqueColors.add('yellow');

let hasBlue = uniqueColors.has('blue');
console.log(hasBlue);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// A Users Email assignment
// For each bullet in your outline, decide if it is a primitive, array, or object. 
// Create a JavaScript file and use this information to create an object literal that models the application's data. 
let AppData = {
    Name: "Gmail",
    Mailboxes: ["Inbox", "Starred","Sent", "Drafts", "Categories","Trash"],
    Inbox: [
        {From: "Full Stack 102", Subject: "Assignment Graded..."},
        {From:"Vatsal Singhal", Subject:"Heels Engage"},
        {From: "Stiegler EdTech Can.", Subject: "Course Invitation"},
        {From: "Jeremy Garcia", Subject: "JIRA"},
    ],
    Starred: [
        {From: "canvas-admin@stiegleredtech.org", Subject: "Assignment Graded: Checking Store Hours, Full Stack 102"},
        {From: "roderick.lewis@unc.edu ", Subject: "Kenny, Join the HEELSENGAGE Network!"},
        {From: "eticket@amadeus.com", Subject: "Your Electronic Receipt" },
    ],
    Sent: [
        {Recepient: "Richard", Subject: "Taxes", Recepient: "Nunu", Subject: "Lecture Notes" }
    ],
    Drafts: [
        {Subject: "Enrique Rangel's Resume", Subject: "(no subject)"}
    ],
    Catergories: [
        {Social: ["Linked In","Youtube", "Twitter"]},
        {Updates: ["CNN", "Reddit","Bank of America", "The New York Times", "Amazon Web Services", "American Airlines"]},
        {Promotions: ["Best Buy", "Banana Republic", "Overstock","Uniqlo USA", "Calvin Klein", "The Home Depot"]},
    ]
}

// Get a list of mailbox names
console.log(AppData.Mailboxes)
// Get a list of emails
console.log(AppData.Inbox)
// Get the text of the second email in the visible list
console.log(AppData.Inbox[1])
// Mark an email as sent
console.log("This email is marked sent:", AppData.Drafts[1]);
// Add a draft email to the drafts mailbox
AppData.Drafts.push(DraftEmail.AppData.Drafts);
console.log("A email was drafted to the drafts mailbox", AppData.Draft.DraftEmail);