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

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .iconSearch {
      position: absolute;
      left: 30px;
    }

    .showUsersList {
      border: 2px solid var(--purple-50);
      border-radius: 10px;
      position: fixed;
      top: 80px;
      width: 450px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: var(--white);
      
      .cardUser {
        display: flex;
        gap: 10px;
        align-items: center;
        margin: 10px;
        cursor: pointer;

        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        p {
          font-size: 18px;
        }

        span {
          font-size: 16px;
          color: var(--purple-0);
        }
      }
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
  }
`;
