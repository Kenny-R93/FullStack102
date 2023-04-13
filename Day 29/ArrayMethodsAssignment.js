const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

// Find a user named 'Jose'.(Find() array method)
const findUser = users.find(user => user.firstName === 'Jose');
console.log(findUser);

// Get an array of all the premium members.(filter() array method)
const currentPremiumMembers = users.filter(user => user.isPremiumMember === true);
console.log(currentPremiumMembers);

// Get an array of all the user last names.(map() array method)
const returnLastNames = users.map(user => user.lastName);
console.log("These are the users last names:");
console.log(returnLastNames);

// Get an array of the full names who have logged in more than 10 times.(filter() and Map() methods)
const recentUser = users.filter(user => user.logins > 10);
const frequentUser = recentUser.map(frequentUser => frequentUser.firstName + " " + frequentUser.lastName);
console.log("Users who have logged in more than 10 times:");
console.log(frequentUser);

// Get the total number of logins for the list of users.(reduce() method)
const totalLogins = users.reduce(function(total, users) {
    return total + users.logins;
},0)

console.log("Total number of logins for the list of users:");
console.log(totalLogins);