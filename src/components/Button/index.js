import {ButtonContainer} from './styles'
const Button = ({label, onClick}) => { // + O Componente recebe duas props
    return (
      <ButtonContainer onClick={onClick}>
       {label}
      </ButtonContainer>
    );
  }
  
  export default Button;