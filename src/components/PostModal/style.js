import styled from "styled-components";

export const PostModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgb(77, 77, 77, 0.5);
  position: fixed;
  z-index: 2;
`;

export const PostContainer = styled.div`
  background: var(--white);
  width: 80%;
  height: 90%;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  overflow: scroll;
  text-align: center;

  .closeButton {
    height: 40px;
    border: none;
    cursor: pointer;
  }

  .headerPostModal {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    h1 {
      color: var(--purple-100);
    }
  }

  .inputContainer {
    display: flex;
    gap: 20px;
    flex-direction: column;

    input {
      padding: 20px;
      border-radius: 5px;
      border: 2px solid var(--grey-0);
      outline: none;
      font-weight: 600;
      font-size: 22px;
      font-family: "Poppins", sans-serif;
      color: var(--grey-100);

      ::placeholder {
        font-size: 22px;
      }
    }

    textarea {
      resize: none;
      border-radius: 5px;
      border: 2px solid var(--grey-0);
      outline: none;
      font-weight: 400;
      font-size: 22px;
      font-family: "Poppins", sans-serif;
      color: var(--grey-100);
      padding: 20px;
    }

    button {
      align-self: flex-end;
    }

    .postFooter {
      display: flex;
      justify-content: space-between;
      align-items: center;

      input[type="file"] {
        display: none;
      }

      label {
        background-color: var(--purple-50);
        opacity: 0.5;
        border-radius: 5px;
        color: var(--white);
        cursor: pointer;
        width: 200px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        :hover {
          background-color: var(--purple-50);
          opacity: 1;
        }
      }
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
