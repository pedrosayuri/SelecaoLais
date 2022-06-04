import styled from 'styled-components';

export const AreaHeaderMenu = styled.div`

    width: 100%;
    height: 90px;
    background: linear-gradient(#FEFEFE, #f0f0f0);

    .Calendario {
        display: inline-block;
        width: 60px;
        height: 60px;
        margin: 1.5% 0 0 -8%;
    }

    .Agend {
        position: absolute;
        margin: -4% 0 0 -2%;
        color: #0a0a0a;
        font-weight: bold;
    }

    .MeusAgendamentos {
        position: absolute;
        width: 12%;
        height: 6%;
        margin: -4.8% 0 0 20%;
        color: #FFFFFF;
        background: #0f5aef;
        border: 2px solid black;
        border-radius: 4px;
        opacity: 1;
        cursor: pointer;
    }

    .MeusAgendamentos:hover {
        background: #0e47b5;
        color: #F1F1F1;
    }

    .Agendar {
        position: absolute;
        width: 7%;
        height: 6%;
        margin: -4.8% 0 0 35%;
        color: #FFFFFF;
        background: #0f5aef;
        border: 2px solid black;
        border-radius: 4px;
        opacity: 1;
        cursor: pointer;
    }

    .Agendar:hover {
        background: #0e47b5;
        color: #F1F1F1;
    }

    .FotodePerfil {
        float: right;
        margin: -6% 15% 0 0;
    }

    .Nome {
        border: none;
        cursor: default;
        float: right;
        margin: -4.5% 6% 0 0;
        background: transparent;
        font-weight: bold;
        color: #0f5aef;
        width: 100px;
    }

    .SetaAbaixar {
        transform: rotate(270deg);
        cursor: pointer;
        float: right;
        margin: -4.7% 1% 0 0;
        background: transparent;
        font-weight: bold;
        color: #0f5aef;
        width: 100px;
        border: none;
    }

    .Texto {
        display: none;
    }

    .SetaAbaixar:hover + .Texto{
        display: block;
        float: right;
        margin: -1.5% 4% 0 0;
        width: 200px;
        height: 70px;
        border: 2px solid #0f5aef;
        background-color: #FEFEFE;
        border-radius: 4px;
        transition-delay: 5s;
    }

    h1 {
        font-size: 0.9rem;
        margin-left: 10%;
        font-weight: normal;
    }

`;