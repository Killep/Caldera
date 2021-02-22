import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Parrafo from "./components/Parrafo";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="container">
      <div className="App">
        <h1>
          PLAYLIST
          <hr />
          <h3>Music Store</h3>
        </h1>
      </div>
      <div className="row">
        <Parrafo />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default App;
