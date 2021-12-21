import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: 45px;
  color: white;
  border-radius: ${(props) => props.borderRadius};
  border: none;
  font-size: 24px;
  padding: 5px;
  margin: ${(props) => props.margin};
  :hover {
    background-color: ${(props) => props.colorHover};
  }
`;