import React, { useState } from "react";

function EventExamples() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function sayHello() {
        alert("Hello! Have a nice day.");
    }

    function handleIncrement() {
        increment();
        sayHello();
    }

    function sayWelcome(message) {
        alert(message);
    }

    function onPress() {
        alert("I was clicked");
    }

    return (

        <div>

            <h2>Counter Example</h2>

            <h3>Counter : {count}</h3>

            <button onClick={handleIncrement}>
                Increment
            </button>

            &nbsp;

            <button onClick={decrement}>
                Decrement
            </button>

            <br /><br />

            <button onClick={() => sayWelcome("Welcome")}>
                Say Welcome
            </button>

            <br /><br />

            <button onClick={onPress}>
                Synthetic Event
            </button>

        </div>

    );

}

export default EventExamples;