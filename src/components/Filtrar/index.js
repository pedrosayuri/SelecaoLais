import React from "react";

import { Quadros } from './styled';

function Quadro() {
    return (

        <Quadros>

            <div className="Caixa1">

                <p>Agendamentos em Natal - tipo de exame</p>

                <h1 className="rtpc">RT-PC</h1>

                <h2 className="esquerdo1">50%</h2>

                <div className="Grafico"></div>

                <h3 className="antigeno">Antígeno</h3>

                <h2 className="direito1">50%</h2>

            </div>

            <div className="Caixa2">
            
                <p>Agendamentos em Natal Grupos de atendimento</p>

                <h1 className="idoso">Acima de <br></br> 75 anos</h1>

                <h2 className="esquerdo2">50%</h2>

                <div className="Grafico"></div>

                <h3 className="adulto">+18</h3>

                <h2 className="direito2">50%</h2>

            </div>

        </Quadros>

        

    );
}

export default Quadro;