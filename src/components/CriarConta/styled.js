import styled from 'styled-components';

export const CriarConta = styled.div`

@media screen and (min-width: 1039px) {

    .Bloco-Incial {
        float: right;
        margin-right: 20px;
    }

    .texto-4 {
        display: inline-block;
        vertical-align: top;
        width: 170px;
        margin: 20px 0 0 0;
        text-align: center;
        color: #4A4A4A;
        opacity: 1;
        font-size: 0.9rem;
    }

    .LogoConta {
        margin: 5px 10px 0 0;
    }

    .criar-conta {
        margin: 10px 0 0 0;
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

    .criar-conta:hover {
        background: #2e2e2e;
    }
}

@media screen and (max-width: 1038px) {

    .texto-4 {
        display: none;
    }

    .LogoConta {
        margin: 5px 10px 0 0;
    }


    .criar-conta {
        z-index: 1;
        position: absolute;
        margin: 10% 0 0 60%;
        width: 130px;
        height: 35px;
        background: #0a0a0a;
        box-shadow: 1px 2px 2px blue;
        
        border-radius: 4px;
        opacity: 1;
        color: #FFFFFF;
        font-size: 0.8rem;
        line-height: 30px;
        letter-spacing: 0.5px;
        border: 2px solid #000000;
        cursor: pointer;
    }

}
`;