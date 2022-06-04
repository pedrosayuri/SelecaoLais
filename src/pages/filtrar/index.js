import React from "react";

import Header from '../../components/Header';
import Filtros from "../../components/Filtros";
import Filtrar from '../../components/Filtrar';

const filtrar = () => {
    return (
        <>
            <Filtrar />
            <Filtros />
            <Header />
        </>
    );

  };
  
export default filtrar;