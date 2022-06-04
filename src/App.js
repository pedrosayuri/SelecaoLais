import React, { Component } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Transparencia from "./pages/transparencia";
import Cadastrar from "./pages/cadastrar";
import CadastrarEmail from "./pages/cadastraremail";
import CadastrarConta from "./pages/cadastraconta";
import Filtrar from "./pages/filtrar";
import MeusAgendamentos from "./pages/agendamentosmenu";

import Api from './api/api';

class App extends Component {

  render(){

    return (
      <div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="transparencia" element={<Transparencia />} />
              <Route path="cadastrar" element={<Cadastrar />} />
              <Route path="cadastrar/email" element={<CadastrarEmail />} />
              <Route path="cadastrar/email/conta" element={<CadastrarConta />} />
              <Route path="filtrar" element={<Filtrar />} />
              <Route path="meusagendamentos" element={<MeusAgendamentos />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </div>
      
    )
  }
}

export default App;