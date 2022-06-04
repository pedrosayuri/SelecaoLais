import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AreaHeaderMenu } from './styled';
import Api from '../../api/api';

import Calendario from "../../images/Feather-core-calendar.png";
import FotoPerfil from "../../images/Elipse 1.png";
import Seta from "../../images/Icon feather-chevron-left.svg"

export default function HeaderMenu () {
  const [user, setUser] = useState();

  Api.interceptors.request.use(async config => {
    const token = "$2a$10$HNDi9d4SXgBOrpq9VBUvbeKOm/Ko5rOWRbZIvCKttMQaA/6k5Ry5G";
  
    if (token) {
      Api.defaults.headers.authorization = `Bearer ${token}`;
    }
  
    return config;
  });

  useEffect(() => {
    Api.get("http://localhost:3004/users/1")
    .then((response) => setUser(response.data))
    .catch((err) => {
      console.error("Ocorreu um erro" +err);
    });
  }, []); 

    return (

    <AreaHeaderMenu>

        <div className="container"> 
            <nav>
                <img className="Calendario" src={ Calendario } alt="Logo Calendário" />
                <ul>
                    <p className='Agend'>Agendamento online</p>
                    <button className='MeusAgendamentos'><i class="fa-solid fa-user"></i>Meus agendamentos</button>
                    <button className='Agendar'>Agendar</button>
                    <img className="FotodePerfil" src={ FotoPerfil } />
                    <p><input className="Nome" value = {user?.nome} /></p>

                    <button className="SetaAbaixar"><img src={ Seta } /></button>
                            
                    <div className="Texto">
                        <h1>Meu perfil</h1>
                        <h1>Sair</h1>
                    </div>
                </ul>
            
            </nav>
        </div>

    </AreaHeaderMenu>

    )
  }
