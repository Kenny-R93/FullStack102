// Create a variable that holds the total amount of the bill (before the tip).
let BillAmount:number = 150.95;
// Create a function named 'calculateTip' ( It should multiply the bill variable by 20% of the total and return that value)
// -Takes in an amount as an argument, when calling the function, use the variable from above.
function calculateTip (TotalAmount: number): number {
    return TotalAmount * .2;
};
console.log("The calculated tip amount is $" + calculateTip(BillAmount)); // returns the calculated tip, 30.

// Create another function called 'getBillTotal' and it should do the following things:
// - Take any amount as an argument
// - call the 'calculateTip' function
// - return the amount + the tip amount
function getBillTotal (x: number): number {
    return x + calculateTip(BillAmount);
};
console.log("The calculated bill amount + tip is $" + getBillTotal(BillAmount)); // returns the calculated Bill Total, 180
// Console log each function and state what it is returning.

// Bonus! Find a way to round your amount returned to 2 decimal places.
let FinalAmount: number = getBillTotal(BillAmount);
console.log("The Final Amount rounded to 2 decimal places is $" + FinalAmount.toFixed(2));

