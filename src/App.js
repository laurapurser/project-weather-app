import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://objective-einstein-d849c5.netlify.app/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Laura Purser
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/laurapurser/react-weather-app-new"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
