import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          data-testid="link-button"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button data-testid="submit-button">Login</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
