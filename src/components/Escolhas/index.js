import React from "react";
import { Link } from "react-router-dom";

import { Escolhas } from './styled';

function Escolha () {
    return (
        <Escolhas>

            <div className="Bloco-Incial">

                <Link to="/filtrar">
                    <button className='filtrar'>
                        Filtrar
                    </button>
                </Link>

                <Link to="/">
                    <button className='voltar'>
                        Voltar
                    </button>
                </Link>

            </div>

        </Escolhas>
    );
}

export default Escolha;