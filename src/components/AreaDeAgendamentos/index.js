import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Api from '../../api/api';

import { AreaAgendamentos } from './styled';

import IconeFiltro from "../../images/Icon awesome-filter.svg";
import IconeInjecao from "../../images/Grupo 561.svg";
import Iconelocal from "../../images/Icon awesome-map-marker-alt.svg";
import Iconedata from "../../images/Icon awesome-calendar-alt.svg";
import Iconehorario from "../../images/Icon ionic-ios-time.svg";


export default function Quadros () {
    const [agendamento, setAgendamento] = useState();
    const [exames, setExames] = useState();

    useEffect(() => {
      Api.get("http://localhost:3004/agendamentos/1")
      .then((response) => setAgendamento(response.data))
      .catch((err) => {
        console.error("Ocorreu um erro" +err);
      });
    }, []); 

    useEffect(() => {
        Api.get("http://localhost:3004/tipos_exame/1")
        .then((responsea) => setExames(responsea.data))
        .catch((err) => {
          console.error("Ocorreu um erro" +err);
        });
      }, []); 
  
    return (

        <AreaAgendamentos>

            <h1>Meus agendamentos</h1>
            <p className="linha"></p>

            <h2>Filtrar agendamento</h2>

            <img className="filtrar" src = { IconeFiltro }/>

            <form>
                <p className="Localizacao-filtrar">Local de exame</p>
            </form>

            <div className="Caixa">
                <img className="injecao" src = { IconeInjecao }/> 
                <p className="tipodeexame">Tipo de exame</p>
                <p className="Exame"><input value= {exames?.nome} className="InputExame" disabled/></p>
                <p className="Situacao"><input value= {agendamento?.status} className="InputStatus"/></p>
                <p className="linha2"></p>
                <img className="local" src = { Iconelocal }/>
                <p className="Local">CENTRO DE SAUDE PIRANGI</p>
                <img className="data" src = { Iconedata }/>
                <p className="Data"><input value= {agendamento?.data} className="InputData"/></p>
                <img className="horario" src = { Iconehorario } />
                <p className="hora"><input value= {agendamento?.hora} className="InputHora" /></p>
                <button className="Detalhes">Detalhes</button>
                <button className="Cancelar">Cancelar</button>
            </div>

        </AreaAgendamentos>

        

    );
}