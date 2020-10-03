import React, { ReactElement } from "react";
import "./App.sass";
import TomatoTimer from "./components/TomatoTimer/TomatoTimer";

function App(): ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bullet Journal</h1>
      </header>
      <TomatoTimer />
    </div>
  );
}

export default App;
