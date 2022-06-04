import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { EMAIL } from './styled';

function Email() {
  const [email, setEmail] = useState("");

  return (

    <EMAIL>

      <div className="Caixa">

      <p className="texto-7">Preencha os campos abaixo</p>
      <p className="texto-8">É rápido e simples</p>

      <form>
        <p className="email-form">Email<br></br>
          <input
            required
            type="email" 
            placeholder="seuemail@domínio.com"
            className="email-form-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>

        <Link to="conta"><input type="submit" value="Continuar" className="Continuar" /></Link>
      </form>

      </div>

    </EMAIL>
  
  )
}

export default Email;