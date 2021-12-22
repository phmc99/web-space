import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: left;
`;

export const ContentInput = styled.div`
  border: 1px solid;
  border-color: ${(props) => (props.error ? "red" : "var(--grey-0)")};
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin: 0.5rem 0rem;
  background: var(--white);
  height: 56px;
  input {
    background: transparent;
    font-size: 1rem;
    flex: 1;
    padding: 16px;
    border: 2px solid transparent;
    color: var(--grey-50);
    border-bottom-right-radius: 10px;
    outline: none;
  }
  svg {
    color: ${(props) => (props.error ? "var(--red)" : "var(--black)")};
    margin-left: 10px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border-radius: 7px;
    -webkit-text-fill-color: var(--purple-100);
    -webkit-box-shadow: 0 0 0px 1000px var(--roseWhite) inset;
  }
`;
