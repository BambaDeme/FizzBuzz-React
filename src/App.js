import React, { useState } from "react";
import "./App.css";
import { fizzbuzz } from "./components/fizzBuzz";
import Prev from "./components/Prev";
import Reset from "./components/Reset";
import Next from "./components/Next";

function App() {
  const [counter, setCounter] = useState(1);
  return (
    <div className="App">
      <header className="">
        <h1>Fizz Buzz</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <section className="counter" data-testid="counter">
        {fizzbuzz(counter)}
      </section>

      <div className="actions">
        <Prev counter={counter} setCounter={setCounter} />
        <Reset counter={counter} setCounter={setCounter} />
        <Next counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
}

export default App;
