 // Create an array of user objects called users. Each user object should have an id, name, and email property.
const users = [
    { id: 1, name: 'Din Djarin', email: 'din.djarin@mandalorian.com' },
    { id: 2, name: 'Din Grogu', email: 'din.grogu@mandalorian.com' },
    { id: 3, name: 'IG-11', email: 'IG-11@newrepublic.com' },
    { id: 4, name: 'Greef Karga', email: 'greef.karga@bountyhuntersguild.com' },
    { id: 5, name: 'Bo-Katan Kryze', email: 'bo-katan.kryze@mandalorian.com' },
    { id: 6, name: 'Moff Gideon', email: 'moff.gideon@empire.com' },
];

// Implement a function called fetchUserById that accepts a user ID as an argument and returns a promise.
function fetchUserById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.id === id);
            if (user) {
                resolve(user); // The promise should resolve with the user object if the user with the given ID exists in the users array.
             }else{
                reject(new Error ("User not found in this Galaxy Database")); // Otherwise, it should reject with an error message.
            }
        }, 1000); // Simulate an asynchronous request by using setTimeout() to delay the resolution or rejection of the promise by 1 second.Simulate a delay of 1 second.
    });
}

fetchUserById(1) // Use the fetchUserById function to fetch the user with ID 1.
    .then((user) => {
        console.log("Retrieved user: ", user); // Log the user object if the promise is fulfilled.
    })
    .catch((error) => {
        console.log("Error retrieving user: ", error); // Log and the error message if the promise is rejected. 
    });

fetchUserById(2) //  Next, chain another fetchUserById call to fetch the user with ID 2.
    .then((user) => {
        console.log("Retrieved user: ", user); // Log the user object if the promise is fulfilled.
    })
    .catch((error) => {
        console.log("Error retrieving user: ", error); // Log and the error message if the promise is
    });
