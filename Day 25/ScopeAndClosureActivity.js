function outer (a, b){
    a = "a is in the outer scope";          // 1. Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively.
    b = {scope: "b is in the outer scope"};
    console.log("Logging Immediately:", a, b);          // 1. Log their values immediately.

    function inner (){
    console.log("Logging in Inner Function:", a, b)         // 2. Log the values of a and b in the inner function.
    };
    a =  "A in the inner scope, with a NEW VALUE";            // 3. Update the inner function to take two parameters named a and b.
    b = {scope: " B is in the inner scope, with a NEW VALUE"};
    b.scope = " B is in the inner scope, with a NEW UPDATED VALUE"; // 6. Inside the inner function, update a property of the b object.
    inner(a, b);            // 4. Pass a and b in as arguments when you execute inner().
    console.log(a, b);          // 5. Inside the inner function, assign new values to a and b and log them at the end of the function AND after the execution of inner(a,b).
};

outer();

