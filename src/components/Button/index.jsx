import { ButtonStyled } from "./styles";

const Button = ({ children, backgroundColor, colorHover, width, margin, onClick, type, borderRadius}) => {
  return (
    <ButtonStyled
        onClick={onClick}
        backgroundColor={backgroundColor}
        backgroundHover={colorHover}
        width={width}
        margin={margin}
        type={type}
        borderRadius={borderRadius}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;