import styled from 'styled-components';

export const Login = styled.div`

@media screen and (min-width: 1039px) {

    body {
        background: linear-gradient(#FEFEFE, #cccccc);
    }

    .Caixa{
        top: 15%;
        left: 50%;
        text-align: center;
        width: 500px;
        height: 390px;
        position: absolute;
        background: linear-gradient(#FEFEFE);
        box-shadow: 0px 8px 15px #000000;
        border: 1px solid #E3E3E3;
        border-radius: 6px;
        opacity: 1;
    }

    .texto-5 {
        color: #0F5AEF;
        font-size: 0.9rem;
        margin-top: 7%;
    }

    .texto-6 {
        color: #4a4a4a;
        font-size: 0.8rem;
        margin: 5% 10% 0 0;
        opacity: 1;
        text-align: right;
    }

    .Formulario {
        position: absolute;
        width: 25rem;
        height: 22rem;
        vertical-align: top;
        margin: 10% 0 0 15%;
        box-shadow: 0px 3px 6px #0000001A;
        border: 1px solid #E3E3E3;
        border-radius: 6px;
        opacity: 1;
    }

    .email-form, .senha-form {
        text-align: left;
        margin: 5% 0 0 10%;
        color: #4a4a4a;
    }

    .email-form-box, .senha-form-box {
        margin: 2px 0 0 0;
        display: block;
        width: 85%;
        height: 2.5rem;
        font-size: 1rem;
        padding: 0 10px;
    }

    .Entrar {
        color: #FFFFFF;
        width: 70%;
        height: 3rem;
        margin: 5% 0 0 0;
        background: #0F5AEF;
        border-radius: 4px;
        opacity: 1;
        cursor: pointer;
        border: 2px solid #000000;
        font-weight: bold;
    }

    .Entrar:hover {
        background: #1749ad;
    }
} 

@media screen and (max-width: 1038px) {
    body {
        background: linear-gradient(#FEFEFE, #cccccc);
    }

    .Caixa{
        top: 20%;
        text-align: center;
        width: 500px;
        height: 390px;
        position: absolute;
    }

    .texto-5 {
        display: none;
    }

    .texto-6 {
        color: #FFFFFF;
        font-size: 1rem;
        margin: 5% 30% 0 0;
        opacity: 1;
        text-align: right;
    }
        
    .Formulario {
        position: absolute;
        width: 10rem;
        height: 22rem;
        vertical-align: top;
        margin: 10% 0 0 15%;
        box-shadow: 0px 3px 6px #0000001A;
        border: 1px solid #E3E3E3;
        border-radius: 6px;
        opacity: 1;
    }

    .email-form, .senha-form {
        text-align: left;
        margin: 5% 0 0 10%;
        color: #FFFFFF;
    }

    .email-form-box, .senha-form-box {
        margin: 2px 0 0 0;
        display: block;
        width: 60%;
        height: 2.5rem;
        font-size: 1rem;
        padding: 0 10px;
    }

    .Entrar {
        color: #FFFFFF;
        width: 60%;
        height: 3rem;
        margin: 5% 20% 0 0;
        background: #0F5AEF;
        border-radius: 4px;
        opacity: 1;
        cursor: pointer;
        border: 2px solid #000000;
        font-weight: bold;
    }
}
`;