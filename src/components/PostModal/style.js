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
    }

    input::placeholder {
      font-size: 22px;
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

      input {
        width: 600px;
        font-size: 16px;
        padding: 25px;
        height: 40px;
        font-weight: 400;

        ::placeholder {
          font-size: 16px;
        }
      }
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
