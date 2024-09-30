import styled from 'styled-components'; //  importa a função styled da biblioteca styled-components, que permite criar componentes estilizados em React.

export const Container = styled.div` 
    width: 100%;
    height: 100vh;
    background-color: #1B1A19;

    display: flex;
    align-items: center;
    justify-content: center;
` // + cria componente 'Container' já com seus estilos definidos
// Esses estilos fazem o conteúdo ficar CENTRALIZADO no meio da tela

export const Content = styled.div`
    background-color: #292827;
    width: 50%;
    padding:15px;
    border-radius: 6px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`