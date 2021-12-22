import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${(props) =>
    props.type === "action" ? "var(--purple-50)" : "var(--purple-0)"};
  width: 80%;
  max-width: 280px;
  height: 50px;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 24px;
  padding: 5px;
  cursor: pointer;
  outline: none;
  margin: 10px 0;

  :hover {
    filter: brightness(0.9);
    transition: all 0.4s;
  }
`;
