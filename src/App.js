import Input from './components/Input';// + Importa componente 'Input'
import Button from './components/Button'; // + Importa componente 'Button'
import { Container, Content, Row, Column } from "./styles";  // + importa componentes estilizados do styles.js
import { useState } from 'react';


const App = () => { 
  const [currentNumber, setCurrentNumber] = useState('');

  const [firstNumber, setFirstNumber] = useState('');

  const [operation, setOperation] = useState('');

  const handleOnClear = () => { // acionada pelo evento onClick em  <Button label="C" onClick={handleOnClear}/> 
    setCurrentNumber('')
    setFirstNumber('') // manda para currentNumber o valor '0'
    setOperation('')
  };

  const handleAddNumber = (number) => { // recebe o parâmetro 'number' que veio do evento 'Onlick' em <Button />.
    setCurrentNumber(prev => `${prev == '' ? '' : prev}${number}`) // passa o valor anterior de currentNumber, ou seja antes da atualização e o número (number) recebido no parâmetro para currentNumber.
  };

  const handleSumNumbers = () => { // acionada pelo evento onClick em <Button label="+" onClick={handleSumNumbers}/> 
    if(firstNumber == '' ){ // Se firstNumber for igual a zero
      setFirstNumber(String(currentNumber)); // Passa o valor do currentNumber para o FirstNumber
      setCurrentNumber(''); // Zera o valor de currentNumber
      setOperation('+') // Manda o sinal '+' para Operation
    }else{ //Se o firstNumber ja estiver definido
      const result = Number(firstNumber) + Number(currentNumber) // Soma o currentNumber ao valor de firstNumber
      setCurrentNumber(String(result))
      setOperation('')
      setFirstNumber('')
    }

  }

  const handleMinusNumbers = () => {
    if(firstNumber == ''){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('-')
    }else{
      const result = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(result))
      setOperation('')
      setFirstNumber('')
    }
  }
  const handleMultiplysNumbers = () => {
    if(firstNumber == ''){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('x')
    }else{
      const result = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(result))
      setOperation('')
      setFirstNumber('')
    }
  }
  const handleDivideNumbers = () => {
    if(firstNumber == ''){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('/')
    }else{
      const result = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(result))
      setOperation('')
      setFirstNumber('')
    }
  }

  const handleEquals = () => {
    if(firstNumber != '' && operation != '' && currentNumber != 0){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case 'x':
          handleMultiplysNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        default:
          break;
      }
    }
  }
  
  return (
    <Container> {/* + componente com estilos definidos em styles.js*/}
      <Content> {/* + componente com estilos definidos em styles.js*/}

        <Input value={currentNumber != '' ? currentNumber : operation}/> {/* + componente 'Input'*/}
        {/* value={currentNumber}: recebe o valor de currentNumber e manda para o do <input /> (numeros na tela da calculadora) */}

        <Row> {/* + componente com estilos definidos em styles.js*/}
          <Button label="c" onClick={handleOnClear} />  {/* + componente 'Button'*/}
          <Button label="/" onClick={handleDivideNumbers}/>  
          <Button label="x" onClick={handleMultiplysNumbers}/>  
          {/* onClick={handleOnClear}: Aqui a função anônima não é necessária já que não temos parâmetros*/}
          <Button label="-" onClick={handleMinusNumbers}/> 
        </Row>
        <Row> 
          <Button label="7" onClick={() => handleAddNumber('7')}/>  {/* + componente 'Button'*/}
            {/* 
              label="": representa visualmente o número de cada botão 
              onClick={() => handleAddNumber('')}: cria uma função anônima que será executada quando o evento onClick for disparado. Isso significa que a função handleAddNumber só será chamada quando o botão for clicado e não ao redenreziar o componente. Passa um número como parâmetro.
              
              */}
          <Button label="8" onClick={() => handleAddNumber('8')}/>  
          <Button label="9" onClick={() => handleAddNumber('9')}/>  
          <Button label="+" onClick={handleSumNumbers} /> 
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/> 
          <Button label="5" onClick={() => handleAddNumber('5')}/>  
          <Button label="6" onClick={() => handleAddNumber('6')}/>  
          <Button label="=" onClick={handleEquals}/> 
        </Row>
        <Row> 
          <Button label="1" onClick={() => handleAddNumber('1')}/> 
          <Button label="2" onClick={() => handleAddNumber('2')}/>  
          <Button label="3" onClick={() => handleAddNumber('3')}/>  
          <Button label="0" onClick={() => handleAddNumber('0')}/> 
        </Row>
      </Content>
    </Container>
  );
}

export default App;
