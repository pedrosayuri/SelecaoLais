import React from "react";
import { Link } from "react-router-dom";

import { Entrar } from './styled';

import LogoConta from "../../images/Icon feather-user.png";


function criarConta () {
    return (
        <Entrar>

            <div className="Bloco-Incial">

                <p className="texto-6">Já tem conta?</p>

                <Link to="/">
                    <button className='entrar'>
                        <img src={ LogoConta }  alt='Logo Conta' className="LogoConta"/>
                        Entrar
                    </button>
                </Link>

            </div>

        </Entrar>
    );
}

export default criarConta;