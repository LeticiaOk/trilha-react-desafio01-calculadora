import styled from "styled-components"; // + importa a função styled da biblioteca styled-components, que permite criar componentes estilizados em React.

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #292827;

    display: flex;
    align-item: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family 'Roboto';
    padding:10px 0 20px 0;
    

    input { 
        // como teremos um input dentro do componente InputContainer podemos estiliza-lo diretamente no seu componente.

        width: 100%;
        height: 75px;
        background-color: #292827;
        display: flex;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 24px;
        font-family 'Roboto';
        color: #FAF9F8;
        border-radius: 16px;
        border: 1px solid #545250;
    }
`;
