import React from "react";

import { useState } from "react";

import { Conta } from './styled';

function CadastraConta() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (

    <Conta>

        <div className="Caixa">

            <p className="texto-7">Preencha os campos abaixo</p>
            <p className="texto-8">É rápido, simples e seguro</p>

            <form onSubmit={handleSubmit}>
                <p className="email-form">Email
                <input 
                required
                className="email-form-box"
                type="email" 
                name="username" 
                value={inputs.username || ""} 
                onChange={handleChange}
                />
                </p>
                
                <p className="nome-form">Nome
                <input 
                    required
                    className="nome-form-box"
                    type="text" 
                    name="nome" 
                    value={inputs.nome || ""} 
                    onChange={handleChange}
                />
                </p>

                <p className="senha-form">Senha
                <input 
                    required
                    className="senha-form-box"
                    type="password" 
                    name="senha" 
                    value={inputs.senha || ""} 
                    onChange={handleChange}
                />
                </p>

                <p className="conf-senha-form">Confirmação de senha
                <input 
                    required
                    className="conf-senha-form-box"
                    type="passowrd" 
                    name="senha" 
                    value={inputs.confsenha || ""} 
                    onChange={handleChange}
                />
                </p>

                <a href="#"><input type="submit" value="Entrar" className="Entrar" /></a>
            </form> 

            <p className="Termo">Ao assinar você concorda com os <a className="Modal">termos de serviço e política de privacidade</a></p>
        </div>
      
    </Conta>


    
  )
}

export default CadastraConta;