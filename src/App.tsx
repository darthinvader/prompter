import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "@mui/material";
import ScrapingAntClient from "@scrapingant/scrapingant-client";

function App() {
  const [count, setCount] = useState(0);

  const client = new ScrapingAntClient({
    apiKey: "47ea69e05dec4bbc8e5288a3cec3fa02",
  });
  const scrape = () => {
    client
      .scrape(
        "https://describingwords.io/api/descriptors?term=sword&sortType=frequency"
      )
      .then((res) =>
        console.log(
          JSON.parse(
            res.content
              .replace("<html><head></head><body>", "")
              .replace("</body></html>", "")
          )
        )
      )
      .catch((err) => console.error(err.message));
  };
  // Scrape the example.com site.

  return (
    <div className="App">
      <div>
        <Button onClick={scrape}>Scrape</Button>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
