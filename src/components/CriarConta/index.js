import React from "react";
import { Link } from "react-router-dom";

import { CriarConta } from './styled';

import LogoConta from "../../images/Icon feather-user.png";


function criarConta () {
    return (
        <CriarConta>

            <div className="Bloco-Incial">

                <p className="texto-4">Não tem uma conta?</p>

                <Link to="/cadastrar">
                    <button className='criar-conta'>
                        <img src={ LogoConta }  alt='Logo Conta' className="LogoConta"/>
                        Crie uma
                    </button>
                </Link>

            </div>

        </CriarConta>
    );
}

export default criarConta;