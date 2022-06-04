import styled from 'styled-components';

export const Quadro= styled.div`

.Box_Filtrar {
    float: right;
    width: 350px;
    height: 100vh;
    background-color: #000000;
    text-align: center;
    color: #FFFFFF;
}

.texto_filtrar1 {
    position: absolute;
    top: 20px;
    font-weight: bold;
    font-size: 1.5rem;  

}

.pesquisa-form-box {
    margin: 25% 0 0 -15%;
    width: 260px;
    height: 35px;
    border-radius: 5px;
}

.Municipio {
    margin: 10% 0 0 12%;
    width: 260px;
    height: 35px;
    background-color: #0F5AEF;
    border-radius: 5px;
    text-align: justify;
    border: 2px solid black;
    border-radius: 4px;
    opacity: 1;
    font-weight: bold;
    font-size: 13px;  
}

.texto_filtrar2 {
    margin: 0 0 0 5%;
    padding: 8px 0;
}

.Natal {
    margin: 10% 0 0 -70%;
    width: 15px;
    height: 15px;
    background-color: #FFFFFF;
}

.texto_filtrar3 {
    margin: -5.5% 0 0 -50%;
}

.Parnamirim, .SaoGoncalo, .Acari, .Caico{
    margin: 5% 0 0 -70%;
    width: 15px;
    height: 15px;
    background-color: #FFFFFF;
}

.texto_filtrar4 {
    margin: -6% 0 0 -37%;
}

.texto_filtrar5 {
    margin: -6% 0 0 -34%;
}

.texto_filtrar6 {
    margin: -6% 0 0 -48%;
}

.texto_filtrar7 {
    margin: -6% 0 0 -48%;
}

.button-cancelar {
    margin: 50% 0 0 0;
    left: 90px;
    width: 120px;
    height: 2rem;
    background: #FFFFFF;
    border: 2px solid black;
    border-radius: 4px;
    opacity: 1;
    font-weight: bold;
    font-size: 13px;  
    color: #000000;
    cursor: pointer;
}

.button-cancelar:hover{
    background-color: grey;
}

.button-filtrar {
    margin: 50% 0 0 10%;
    left: 90px;
    width: 120px;
    height: 2rem;
    background: #0F5AEF;
    border: 2px solid black;
    border-radius: 4px;
    opacity: 1;
    font-weight: bold;
    font-size: 13px;  
    color: #000000;
    cursor: pointer;
}

.button-filtrar:hover{
    background: #0e47b5;
}

`;