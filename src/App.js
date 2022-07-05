import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://objective-einstein-d849c5.netlify.app/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Laura Purser.
          </a>{" "}
          It is {""}
          <a
            href="https://github.com/laurapurser/react-weather-app-new"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://chic-mousse-665ce6.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
