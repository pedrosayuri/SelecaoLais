import styled from 'styled-components';

export const Conta = styled.div`

    .Caixa{
        top: 8%;
        left: 50%;
        text-align: center;
        width: 500px;
        height: 490px;
        position: absolute;
        background: linear-gradient(#FEFEFE);
        box-shadow: 0px 8px 15px #000000;
        border: 1px solid #E3E3E3;
        border-radius: 6px;
        opacity: 1;
    }

    .texto-7 {
        color: #0f5aef;
        font-size: 1.3rem;
        font-weight: bold;
        margin: 3% 0 0 0;
        opacity: 1;
        text-align: center;
    }

    .texto-8 {
        color: #4A4A4A;
        font-size: 0.8rem;
        margin: 1% 0 0 0;
        opacity: 1;
        text-align: center;
    }

    .Termo {
        color: #4A4A4A;
        font-size: 1rem;
        margin: 11% 0 0 0;
        opacity: 1;
        text-align: center;
    }

    a {
        text-decoration: underline;
        cursor: pointer;
    }

    a:hover {
        color: #000000;
    }

    @media (min-width: 800px) {
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

        .email-form, .nome-form, .senha-form, .conf-senha-form {
            text-align: left;
            margin: 3% 0 0 10%;
            color: #4a4a4a;
        }

        .email-form-box, .nome-form-box, .senha-form-box, .conf-senha-form-box {
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
            margin: 6% 0 0 0;
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
`;