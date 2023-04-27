import React, {useState } from 'react';

export default function SimCounter() {
const [count, setCount] = useState(0);

function increment() {
    setCount(count + 1);
}

function decrement() {
    setCount(count - 1);
}

return (
    <>
    <h1>Count: {count}</h1>
    <>
        <button onClick={increment}>Increment Button</button>
        <button onClick={decrement}>Decrement Button</button>
    </>
    </>
);
};
