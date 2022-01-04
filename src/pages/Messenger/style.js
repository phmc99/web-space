import styled from "styled-components";

export const ChatBox = styled.div`
  width: 900px;
  height: 80vh;
  background-color: var(--white);
  position: absolute;
  top: 55%;
  left: 50%;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  box-shadow: 0px 5px 10px rgb(37, 37, 37, 0.25);
  display: flex;
`;

export const FriendColumn = styled.div`
  width: 30%;
  border-right: 1px solid var(--grey-0);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;

  div{
    width: 100%;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--grey-50);
    border-radius: 9px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const ChatColumn = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

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

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--grey-50);
      border-radius: 9px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }
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
        font-family: 'Poppins', sans-serif;
      }

      textarea {
        resize: none;
        outline: none;
        width: 80%;
        padding: 20px 10px;

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: var(--purple-0);
          border-radius: 9px;
        }

        ::-webkit-scrollbar-track {
          background: var(--offwhite);
          border-radius: 9px;
        }
      }

      button {
        width: 20%;
        cursor: pointer;
        font-size: 16px;
        color: var(--grey-50);

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
  color: var(--grey-50);
`;
