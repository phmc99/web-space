import styled from "styled-components";

export const PostReadBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgb(77, 77, 77, 0.5);
  position: fixed;
  z-index: 2;
  top: 0;
`;

export const PostReadContainer = styled.div`
  width: 800px;
  height: 80vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--offWhite);
  overflow-y: scroll;
  border-radius: 5px;

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--grey-50);
    border-radius: 9px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--grey-50);
  }
  ::-webkit-scrollbar-track {
    background: var(--grey-0);
    border-radius: 9px;
    box-shadow: inset 0px 0px 0px 0px transparent;
  }
`;

export const UserDetails = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  gap: 10px;

  img {
    width: 30px;
    border-radius: 50%;
  }
  span {
    font-size: 18px;
    color: var(--grey-50);
  }
`;

export const PostReadContent = styled.div`
  height: 220px;

  .close-button {
    padding: 20px;
    position: absolute;
    right: 0;
    z-index: 2;
    cursor: pointer;
    
    svg {
      font-size: 20px;
      color: var(--grey-0);
    }
  }

  .image {
    width: 100%;
    height: 100%;
    background-image: ${(props) => `url(${props.photoUrl})`};
    background-repeat: no-repeat;
    background-size: cover;
    .image-blackout {
      background-color: black;
      opacity: 0.65;
      width: 100%;
      height: 100%;
      border-radius: 8px 8px 0 0;
    }
  }

  .read {
    padding: 10px;
    margin-top: 10px;
    margin-left: 20px;

    h1 {
      color: var(--grey-100);
    }

    .text-limit {
      width: 80%;
      margin: 10px auto;
      p {
        margin: 10px 0;
        overflow-wrap: break-word;
        color: var(--grey-50);
      }

      .post-date {
        width: 100%;
        text-align: right;
        margin-bottom: 10px;

        span {
          color: var(--grey-0);
        }
      }
    }

    .buttons {
      margin: 10px 0;
      display: flex;
      gap: 20px;

      .icons {
        display: flex;
        align-items: center;
        svg {
          color: var(--grey-50);
        }
        &:hover {
          cursor: pointer;
          svg {
            color: var(--purple-50);
          }
          span {
            color: var(--purple-50);
          }
        }
        .count {
          color: var(--purple-50);
        }
      }
    }

    .comments-title {
      display: flex;
      align-items: center;
      h2 {
        font-weight: 600;
        margin-right: 10px;
      }
      span {
        color: var(--purple-50);
      }
    }

    form {
      display: flex;
      flex-direction: column;
      margin: 10px 0;
      textarea {
        height: 80px;
        outline: none;
        resize: none;
        border: 1px solid var(--grey-0);
        border-radius: 5px;
        padding: 5px;
        color: var(--grey-50);
        font-family: "Poppins";

        ::placeholder {
          font-family: "Poppins";
        }
      }

      button {
        margin-top: 10px;
        align-self: flex-end;
        padding: 5px;
        border: 0;
        border-radius: 5px;
        background: var(--purple-50);
        color: white;

        &:hover {
          cursor: pointer;
          filter: brightness(0.85);
        }
      }
    }
  }
`;
