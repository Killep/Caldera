import React from 'react'
import Acustica from "./imagenes/Acustica.jpg";
import Bateria from "./imagenes/Bateria.jpg";
import Saxo from "./imagenes/Saxo.jpg";




const Instrumentos = () => {
    return (
    <div className="grid grid-cols-3 gap-5">
        <div className="max-10 max-w-sm rounded overflow-hidden shadow-lg ml-20 my-9">
        <div className="font-bold text-xl mb-2 text-center">
              Guitarras Acusticas
            </div>
            <img className="w-full" src={Acustica} alt=""/>
            <p className="text-gray-500 text-base text-center py-5 my-9">
              Todas nuestras guitarras son diseñadas y construidas por Luthiers.
            </p>          
        </div>
        <div className="max-10 max-w-sm rounded overflow-hidden shadow-lg ml-20 my-9">
        <div className="font-bold text-xl mb-2 text-center">
              Baterias
            </div>
            <img className="w-full" src={Bateria} alt=""/>
            <p className="text-gray-500 text-base text-center py-5">
              Todas nuestras baterias son diseñadas y construidas por Luthiers.
            </p>                  
        </div>

        <div className="max-10 max-w-sm rounded overflow-hidden shadow-lg ml-3">
        <div className="font-bold text-xl mb-2 text-center">
              Saxo
            </div>
            <img className="w-full" src={Saxo} alt=""/>
            <p className="text-gray-500 text-base text-center py-5">
              Todas nuestros saxos son diseñados y construidas por Luthiers.
            </p> 

            
            </div>




    </div>
    )
}

export default Instrumentos
