import styled from 'styled-components';

export const AreaAgendamentos= styled.div`

    h1 {
        margin: 1% 0 0 3%;
        font-weight: bold;
        font-size: 1.5rem;
    }

    .linha {
        width: 95%;
        height: 1px;
        background: #000000;
        margin: 1% 0 0 2%;
    }

    h2 {
        margin: 2% 0 0 3%;
        font-weight: bold;
        font-size: 1rem;
    }

    .filtrar {
        margin: 2% 0 0 3%;
    }

    .Localizacao-filtrar {
        margin: -28px 0 0 90px;
    }

    .Caixa {
        margin: 2% 0 0 3%;
        width: 364px;
        height: 237px;
        /* UI Properties */
        background: #F1F5F9;
        box-shadow: 0px 8px 9px #00000029;
        border-radius: 4px;
        opacity: 1;
    }
    
    .InputExame, .InputStatus, .InputData, .InputHora {
        border: none;
        background: transparent;
        
    }

    .injecao {
        margin: 3% 0 0 0;
    }

    .tipodeexame {
        margin: -12% 0 0 10%;
        color: #0F5AEF;
        font-weight: bold;
    }

    .InputExame {
        position: absolute;
        margin: -10px 0 0 35px;
        color: #0F5AEF;
        font-weight: bold;
    }

    .InputStatus {
        position: absolute;
        margin: -22px 0 0 250px;
        color: #0F5AEF;
        font-weight: bold;
    }

    .linha2 {
        width: 95%;
        height: 1px;
        background: #000000;
        margin: 8% 0 0 2%;
    }

    .local {
        margin: 20px 0 0 20px;
    }

    .Local {
        margin: -25px 0 0 50px;
    }

    .data {
        margin: 35px 0 0 20px;
    }

    .InputData {
        position: absolute;
        margin: -40px 0 0 50px;
        color: #0F5AEF;
        font-weight: bold;
    }

    .horario {
        position: absolute;
        margin: -45px 0 0 240px;
    }

    .InputHora {
        position: absolute;
        margin: -40px 0 0 275px;
        color: #0F5AEF;
        font-weight: bold;
    }

    .Detalhes {
        width: 50%;
        height: 20%;
        margin: 10px 0 0 0;
        cursor: pointer;
        background: #0F5AEF;
        color: #FFFFFF;
        font-weight: bold;
    }

    .Cancelar {
        width: 50%;
        height: 20%;
        margin: 0 0 0 0;
        cursor: pointer;
        background: #DC2626;
        color: #FFFFFF;
        font-weight: bold;
    }
`;