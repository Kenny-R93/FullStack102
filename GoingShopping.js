// Create an array to represent your shopping list with the following items: 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
let ShoppingList = ["pop tarts", "ramen noodles", "chips", "salsa","coffee"];
// Add "fruit loops" to list
ShoppingList.push ("fruit loops");
// Update "coffee" to "fair trade coffee".
ShoppingList [4] = "fair trade coffee";
// Replace 'chips' and 'salsa' with 'rice' and 'beans'.
ShoppingList.splice(2, 2, "rice", "beans");
// Create an empty array to represent your shopping cart.
let ShoppingCart = [];
// Remove last item from shopping list and add it to the cart.
ShoppingCart.push(ShoppingList.pop());
// Remove the first item from your shopping list and add it to the cart.
ShoppingCart.push(ShoppingList.shift());

// Write a 'while' loop that takes items from your shopping list and moves them to your cart
while (ShoppingList.length > 0) {
    ShoppingCart.push(ShoppingList.shift());
}
// Sort the items in your cart alphabetically... and then backwards
ShoppingCart.sort().reverse();
// Print the list of items in your shopping cart to the console as comma separated string.
console.log(ShoppingCart.toString());
