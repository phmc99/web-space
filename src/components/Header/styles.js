import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--offWhite);
  box-shadow: 1px 8px 15px -8px var(--purple-0);
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-size: 40px;
    color: var(--purple-100);
  }

  .logoContainer img {
    width: 105px;
    height: 90px;
  }

  .logoContainer {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  }

  .mainContainer {
    display: flex;
    gap: 25px;
  }

  input {
    border: none;
    width: 500px;
    height: 50px;
    margin: 0 20px;
    border-radius: 10px;
    box-shadow: 5px 6px 5px -7px var(--purple-0);
  }

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  .inputContainer {
    display: flex;
    align-items: center;
    position: relative;
  }

  .iconSearch {
    position: absolute;
    left: 30px;
  }
`;
