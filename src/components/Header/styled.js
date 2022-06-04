import styled from 'styled-components';

export const AreaHeader = styled.div`

@media screen and (min-width: 1039px) {

    width: 513px;
    height: 100vh;
    color: #FFFFFF;
    text-align: center;
    
    .Fundo {
        margin: 0 0 0 -260px;
        position: absolute;
        width: 513px;
        height: 100vh;
        color: #FFFFFF;
        text-align: center;
    }

    .container {
        padding: 50px 20%;
        display: flex;
    }

        nav {

            .Calendario {
                position: absolute;
                top: 90px;
                left: 220px;
            }

            .texto-1 {
                position: absolute;
                top: 180px;
                left: 145px;
                font-weight: bold;
                font-size: 1.5rem;  
            }

            .texto-2 {
                position: absolute;
                top: 230px;
                left: 215px;
                font-size: 0.8rem;
                line-height: 30px;  
            }

            .texto-3 {
                position: absolute;
                top: 290px;
                left: 184px;
                font-size: 0.8rem;
                line-height: 30px; 
                line-height: 20px;
            }

            .button-transparencia {
                position: absolute;
                top: 410px;
                left: 90px;
                width: 330px;
                height: 3rem;
                background: #0F5AEF;
                border: 2px solid black;
                border-radius: 4px;
                opacity: 1;
                font-weight: bold;
                font-size: 16px;  
                color: #FFFFFF;
                cursor: pointer;
            }

            .button-transparencia:hover{
                background: #0e47b5;
            }

            .Logo-Lais{
                bottom: 40px;
                left: 20px;
                position: absolute;
            }
            
            .Logo-UFRN{
                bottom: 30px;
                left: 350px;
                position: absolute;
            }
  
        }   
}

@media screen and (max-width: 1038px) {
    .Fundo {
        position: absolute;
        width: 100%;
        height: 100vh;
        color: #FFFFFF;
        text-align: center;
    }

    .container {
        padding: 50px 20%;
        display: flex;
    }

        nav {

            .texto-1, .texto-2, .texto-3, .button-transparencia {
                display: none;
            }

            .Calendario {
                position: absolute;
                top: 3%;
                left: 10%;
            }

            .Logo-Lais{
                bottom: 40px;
                left: 20px;
                position: absolute;
            }
            
            .Logo-UFRN{
                bottom: 25px;
                left: 55%;
                position: absolute;
            }
        }   
}

`;