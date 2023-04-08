function ExponentialMath (baseNum, exponentNum) {         // 1. Write a recursive function that takes in two parameters, one for the base number, and one for the exponent number, i.e. how many times it will multiply the first number.
    if (exponentNum === 0) {
        return 1;
    } else {
        return baseNum * ExponentialMath(baseNum, exponentNum - 1); // 2. Since it is recursive, you must call the function within the function and you must also have a base condition to avoid an infinite loop.
}
};
// 3. Console log the result and run the function on the following numbers:
console.log(ExponentialMath(2, 5));         // - 2 to the power of 5
console.log(ExponentialMath(7, 3));         // - 7 to the power of 3
console.log(ExponentialMath(12, 2));            // - 12 to the power of 2,
console.log(ExponentialMath(9, 4));         // - 9 to the power of 4,

// **Bonus** / Might help you think it through

// Write the function above and the iterative way of doing the same function. Console logs both functions with the same results as above. The results of the functions must match.







