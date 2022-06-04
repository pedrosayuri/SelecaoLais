import React from "react";

import Header from '../../components/Header';
import CiarConta from '../../components/CriarConta';
import Logar from '../../components/Login';

const Home = () => {
    return (
        <>
        <CiarConta />
        <Header />
        <Logar />
        </>
    );

  };
  
  export default Home;