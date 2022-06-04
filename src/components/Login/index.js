import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Login } from './styled';
import Api from '../../api/api';

export default function Cadastro () {
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

<Login>

  <div className="Caixa">

    <p className="texto-5">Preencha os campos abaixo</p>

    <form>
      <p className="email-form">Email
        <input 
        required="required"
        className="email-form-box"
        type="email"
        value = {user?.email}
        />
      </p>

      <p className="senha-form">Senha
        <input 
        required
        className="senha-form-box"
        type="password" 
        name="senha" 
        value={user?.password} 
        />
      </p>
    </form>

    <a href="#"><p className="texto-6">Esqueceu sua senha?</p></a>

    <Link to="/meusagendamentos"><button type="submit" value="Entrar" className="Entrar">Entrar</button></Link>
          
  </div>

</Login>

    )
  }
