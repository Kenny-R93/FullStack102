// Defines storeOwners array
//CHANGES: fixed "Danny Shavez" object to be more readable
const storeOwners = [
    { charles: 1 },
   { sally: 1 },
  { cassandra: 1 },
    {"Danny Shavez": 1, location: "in NM"},
];

// Defines the function 'listNumberOfStores' that returns the total number of stores
// returning 'i' which is iterator variable not the number of stores
// CHANGES: Changed 'i' to be the number of stores & 'return i' to 'return totalLocations'
const listNumberOfStores = function () {
for (let i = 0; i < storeOwners.length; i++) {
         let totalLocations = totalLocations + i;
  }
 return totalLocations;
};
// Defines number of locations through 'listNumberOfStores' function
// ListnumberOfStores not defined
// CHANGES: Moved variable to be after the listNumberOfStores function so it won't be undefined
let locations = listNumberOfStores;

// Function that returns the total number of stores with a Print/console.log message
function tellMeMyStores() {
console.log("Hey, can you tell me how many stores you have?");
    if (locations > 0) {
           console.log("Of course, we have " + totalLocations + " stores");
  }
}
// Function that shows if a person has a store and logs a message for each person; iterates through 'storeOwners' array
// CHANGES: Changed 'Object.keys(storeOwners)' to 'Object.values(storeOwners)'
// CHANGES: Changed 'people.values(storeOwners)' to 'Object.keys(storeOwners)'
// CHANGES: Changed 'i < 2' iteration to 'i < 3' so Cassandra can be included.
function hasStore() {
for (let i = 0; i < 3; i++) {
        people = Object.values(storeOwners);
        let person = Object.keys(people[i]);
           console.log("Yes, " + person + " has one");
}
}

tellMeMyStores();
hasStore();
// Decleares new variables for 'man' and'mister'.
// 'man' variable sets value of keys ('name and 'stores') of the [2] object in the  'storeOwners' array
// 'mister' variable sets value to [2] element in the 'man'array
// CHANGES: Changed index of storeOwners[2] to 3 so that it can be set to the 4th object in the array
// CHANGES: Changed index of man[2] to 1 because it only had two elements
let man = Object.keys(storeOwners[3]);
let mister = man[0];
// Function that returns the location of the mister variabe & logs a message
// CHANGES: mister object to storeOwners[3] to obtain the 4th in the array.
let whereHeLives = storeOwners[3].location;
console.log("Yes, " + mister + " that lives " + whereHeLives + " owns one too.");