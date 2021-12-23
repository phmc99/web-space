import { ButtonStyled } from "./styles";

const Button = ({ type, children, ...rest }) => {
  return <ButtonStyled type={type} {...rest}>{children}</ButtonStyled>;
};

export default Button;
