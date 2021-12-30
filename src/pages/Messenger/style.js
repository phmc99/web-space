import styled from "styled-components";

export const ChatBox = styled.div`
  width: 800px;
  height: 80vh;
  background-color: var(--white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 5px 10px rgb(37, 37, 37, 0.25);

  display: flex;
`;

export const FriendColumn = styled.div`
  width: 30%;
  border-right: 1px solid var(--grey-0);
  overflow-y: scroll;
`;

export const ChatColumn = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

  header {
    background: var(--white);
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;

    .user {
      display: flex;
      align-items: center;
      gap: 10px;
      img {
        width: 40px;
        border-radius: 50%;
      }
      h2 {
        font-weight: 500;
        font-size: 18px;
      }
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
    }
  }

  .chat-content {
    overflow-y: scroll;
    height: 80%;
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
    background: var(--offWhite);
  }


  footer {
    width: 100%;
    height: 10%;
    border-top: 1px solid var(--grey-0);

    form {
      display: flex;
      align-items: center;
      height: 100%;

      textarea,
      button {
        height: 100%;
        border: 0;
      }

      textarea {
        resize: none;
        outline: none;
        width: 80%;
        padding: 5px;
      }

      button {
        width: 20%;
        cursor: pointer;

        &:hover {
          filter: brightness(0.85);
          transition: 0.2s all;
        }
      }
    }
  }
`;

export const NoChat = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`