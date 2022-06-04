import React from "react";

import { Link } from "react-router-dom";

import { useState } from "react";

import { Quadro } from './styled';

function Quadros() {
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

        <Quadro>

            <div className="Box_Filtrar">
                <ul>
                    <p className='texto_filtrar1'>Filtros</p>
                    <form onSubmit={handleSubmit}>

                    <p className="Pesquisa">
                        <input 
                        placeholder="Pesquise aqui"
                        className="pesquisa-form-box"
                        type="text" 
                        name="pesquisa" 
                        value={inputs.username || ""} 
                        onChange={handleChange}
                        />
                    </p>

                    </form> 
                </ul>   

                <section className="Municipio">
                    <p className="texto_filtrar2">Município</p>
                </section>

                <label for="radio-natal"><input className="Natal" type="radio" checked/><p className="texto_filtrar3">Natal</p></label>
                
                <label for="radio-parnamirim"><input className="Parnamirim" type="radio"/><p className="texto_filtrar4">Parnamirim</p> </label>

                <label for="radio-saogoncalo"><input className="SaoGoncalo" type="radio"/><p className="texto_filtrar5">São Gonçalo</p></label>

                <label for="radio-acari"><input className="Acari" type="radio"/><p className="texto_filtrar6">Acari</p></label>

                <label for="radio-caico"><input className="Caico" type="radio"/><p className="texto_filtrar7">Caicó</p></label>

                <Link to="/transparencia"><button className='button-cancelar'>Cancelar</button></Link>

                <Link to="/transparencia"><button className='button-filtrar'>Filtrar</button></Link>

            </div>

        </Quadro>

        

    );
}

export default Quadros;