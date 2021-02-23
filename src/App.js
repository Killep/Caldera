import React from "react";
import Instrumentos from "./components/Instrumentos.jsx";
import Redes from "./components/Redes.jsx";
import Acustica from "./imagenes/Acustica.jpg";
import Bateria from "./imagenes/Bateria.jpg";
import Saxo from "./imagenes/Saxo.jpg";

function App() {
  return (
    <div className="max48-w-sm rounded overflow-hidden shadow-lg">
      <div className="">
        <div className="text-center text-5xl bg black text-white bg-black py-20 uppercase tracking-widest">
          Track Music
        </div>
        <p className="text-center py-12 tracking-widest text-2xl my-9">
          Te llevamos tu instrumento donde estes!! <span></span>😜
        </p>
      </div>
      <Instrumentos />
      <Redes />
    </div>
  );
}

export default App;
