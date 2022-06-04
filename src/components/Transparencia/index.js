import React from "react";

import { Quadro } from './styled';

function Quadros() {
    return (

        <Quadro>

            <div className="Caixa1">

                <p>Exames agendados gerais</p>

                <h1 className="inicio1">20</h1>

                <div className="Retangulo1"></div>

                <h2 className="inicio2">18 a 29</h2>

                <h1 className="meio1">12</h1>

                <div className="Retangulo2"></div>

                <h2 className="meio2">30 a 59</h2>

                <h1 className="fim1">5</h1>

                <div className="Retangulo3"></div>

                <h2 className="fim2">60+</h2>

            </div>

            <div className="Caixa2">
            
                <p>Tipo de exames - Gerais</p>

                <h3 className="coronavac">Coronavac</h3>

                <h4 className="esquerdo">50%</h4>

                <div className="Grafico"></div>

                <h5 className="pfizer">Pfizer</h5>

                <h4 className="direito">50%</h4>

            </div>

        </Quadro>

        

    );
}

export default Quadros;