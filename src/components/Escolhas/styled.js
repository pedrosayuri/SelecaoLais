import styled from 'styled-components';

export const Escolhas = styled.div`

    .Bloco-Incial {
        float: right;
        margin-right: 20px;
    }

    .voltar, .filtrar {
        margin: 10px 20px 0 0;
        width: 130px;
        height: 35px;
        background: #0a0a0a;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 4px;
        opacity: 1;
        color: #FFFFFF;
        font-size: 0.8rem;
        line-height: 30px;
        letter-spacing: 0.5px;
        border: 2px solid #000000;
        cursor: pointer;
    }

    .voltar:hover, .filtrar:hover {
        background: #2e2e2e;
    }
`;