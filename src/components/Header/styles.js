import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--offWhite);
  box-shadow: -2px 8px 11px -3px rgba(192, 192, 192, 0.5);
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  position: fixed;
  top: 0;
  z-index: 1;

  .logoContainer {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    cursor: pointer;

    h1 {
      font-size: 35px;
      color: var(--purple-100);
      margin-left: 10px;
    }

    img {
      width: 93px;
      height: 83px;
    }
  }

  .mainContainer {
    display: flex;
    gap: 25px;
  }

  input {
    border: none;
    width: 450px;
    height: 50px;
    margin: 0 20px;
    border-radius: 10px;
    box-shadow: -6px 6px 10px -7px var(--grey-0);
    outline: none;
    padding-left: 55px;
    font-size: 20px;
    color: var(--grey-50);
    font-family: "Poppins", sans-serif;
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
