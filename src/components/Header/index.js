import React from "react";
import { Link } from "react-router-dom";

import { AreaHeader } from './styled';

import Fundo from "../../images/Grupo 13258.png";
import Calendario from "../../images/Icon feather-calendar.png"
import LogoLais from "../../images/Grupo 10.png";
import LogoUFRN from "../../images/g10-8.png";

function Header() {
    return (

        <AreaHeader>
            <img className="Fundo" src={ Fundo } alt="Fundo" />
            <div className="container"> 
                <nav>
                    <img className="Calendario" src={ Calendario } alt="Logo Calendário" />
                    <ul>
                        <p className='texto-1'>Agendamento online</p>
                        <p className='texto-2'>Rápido e seguro</p>
                        <p className='texto-3'>Evite filas e aglomeração.<br></br> O seu bem é o bem de todos</p>
                    </ul>
                    
                   <Link to="/transparencia"><button className='button-transparencia'>Transparência</button></Link>

                    <img className='Logo-Lais' src={ LogoLais }  alt='Logo Lais'/>

                    <img className='Logo-UFRN' src={ LogoUFRN }  alt='Logo UFRN'/>
                </nav>
            </div>

        </AreaHeader>
    );
}

export default Header;