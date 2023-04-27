// 1. Set up a new React project using Create React App or your preferred method.
// 2. Inside the src folder, create a new file named Counter.js.
// 3. In Counter.js, import the necessary dependencies:
import React, { useState } from 'react';

// 4. Create a functional component called Counter.
// Inside the component, use the useState hook to create a state variable called count with an initial value of 0 and a function called setCount to update the state.
function Counter() {
const [count, setCount] = useState(0);


// 5. Implement two functions called increment and decrement inside the Counter component.
// The increment function should increase the count value by 1, and the decrement function should decrease the count value by 1.
// Use the setCount function to update the count value.
function increment() {
    setCount(count + 1);
}

function decrement() {
    setCount(count - 1);
}

// 6. In the Counter component's JSX, display the count value and create two buttons for incrementing and decrementing the counter.
// Attach the increment and decrement functions as event handlers for the onClick event of the respective buttons.
return (
    <>
    <h1>Count: {count}</h1>
    <>
        <button id="button" onClick={increment}>Increment Button</button>
        <button id="button" onClick={decrement}>Decrement Button</button>
    </>
    </>
);
};

// 7. Export the Counter component.
export default Counter;

// 8. In src/App.js, import the Counter component and include it in the App component's JSX.