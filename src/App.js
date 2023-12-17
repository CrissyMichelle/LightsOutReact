import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  // Define the board props
  const nrows = 8;
  const ncols = 8;
  const chanceLightStartsOn = 0.25; // 25% chance of a cell being lit

  return (
      <div className="App">
        <Board
          nrows={nrows}
          ncols={ncols}
          chanceLightStartsOn={chanceLightStartsOn}
        />
      </div>
  );
}

export default App;
