import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { CPF } from './styled';

function Cpf() {
  const [cpf, setCpf] = useState("");

  return (

    <CPF>

      <div className="Caixa">

      <p className="texto-7">Preencha os campos abaixo</p>
      <p className="texto-8">É rápido, simples e seguro</p>

      <form>
        <p className="cpf-form">CPF<br></br>
          <input
            required
            type="text" 
            placeholder="123.456.789-00"
            className="cpf-form-box"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </p>

        <Link to="email"><input type="submit" value="Continuar" className="Continuar" /></Link>
      </form>

      </div>

    </CPF>
  
  )
}

export default Cpf;