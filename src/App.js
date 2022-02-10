import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fizz Buzz</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <FizzBuzz counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
