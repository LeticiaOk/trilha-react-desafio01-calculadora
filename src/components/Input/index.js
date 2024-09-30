import { InputContainer } from "./styles";

const Input = ({value}) => { // + passa um prop para o 'Input'
    return (
      <InputContainer>
       <input disabled value={value} /> 
       {/*
          disabled: bloqueia o input para escrita ao clicar nele
          value={value}: recebe o valor da prop value 
       */}
      </InputContainer>
    );
  }
  
export default Input;