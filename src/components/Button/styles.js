import styled from 'styled-components' // + importa a função styled da biblioteca styled-components, que permite criar componentes estilizados em React.

export const ButtonContainer = styled.button` 
    padding: 20px;
    border: 1px solid #545250;
    background-color: #3B3A39;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex:1; // faz com que o item ocupe todo o espaço disponível dentro do contêiner, crescendo ou encolhendo conforme necessário.
    

    &:hover{
        opacity: 0.9;
    }

` // + cria componente 'Container' já com seus estilos definidos
