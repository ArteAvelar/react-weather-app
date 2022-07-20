import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="munich" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://magnificent-buttercream-4c8fea.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Artemisa Avelar
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ArteAvelar/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open source
          </a>{" "}
          on Github
        </footer>
      </div>
    </div>
  );
}
