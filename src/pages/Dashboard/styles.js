import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
  width: 100%;
  background-color: var(--roseWhite);

  aside {
    background-color: var(--white);
    width: 13%;
    height: 200px;
    margin-top: 150px;
    border-radius: 5px;
    box-shadow: 0px 3px 8px 1px rgba(0, 0, 0, 0.15);
    position: fixed;
    left: 50px;

    .userSettings {
      width: 100%;
      height: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: 2px solid var(--grey-0);
      cursor: pointer;

      div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 10px;
      }

      img {
        border-radius: 50%;
        width: 85px;
        height: 85px;
      }

      h2 {
        font-size: 22px;
        color: var(--grey-100);
        font-weight: 400;
      }
    }

    .infoSettings {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      margin: 20px;
      font-size: 20px;
    }
  }

  main {
    width: 50%;
    margin-top: 150px;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-right: 10%;

    .createPost {
      width: 100%;
      height: 115px;
      border-radius: 5px;
      background-color: var(--white);
      box-shadow: 0px 3px 8px 1px rgba(0, 0, 0, 0.15);
      display: flex;
      justify-content: space-between;
      align-items: center;

      .buttonAdd {
        margin: 20px;
        border: none;
        background-color: transparent;
        cursor: pointer;
      }

      .inputContainer {
        width: 80%;
        height: 90%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 20px;

        .text-button {
          width: 110%;
          height: 45px;
          font-size: 1rem;
          border: none;
          outline: none;
          color: var(--grey-0);
          &:hover {
            filter: brightness(0.85);
          }
        }

        .textOptions {
          margin-top: 20px;
          width: 80%;
          height: 100px;
          display: flex;
          gap: 10px;

          button {
            border: none;
            background-color: transparent;
            cursor: pointer;

            svg {
              font-size: 1.5rem;
            }
          }
        }
      }
    }

    .posts {
      height: 1000px;
      width: 100%;
    }

    p {
      height: 300px;
    }
  }

  section {
    margin-top: 150px;
    position: fixed;
    right: 0;
    width: 25%;
    z-index: 1;

    .friendsBar {
      height: 120px;
      border-radius: 5px 0 0 5px;
      background-color: var(--white);
      display: flex;
      align-items: flex-end;
      box-shadow: -16px 16px 12px -14px rgba(171, 146, 225, 0.25);
      overflow-x: scroll;
      color: var(--grey-100);
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      ::-webkit-scrollbar-thumb {
        background: var(--grey-0);
        border-radius: 9px;
      }
      ::-webkit-scrollbar-track {
        background: var(--white);
        border-radius: 9px;
        box-shadow: inset 0px 0px 0px 0px transparent;
      }

      h1 {
        align-self: center;
        margin: 0 auto;
      }
    }

    .groupsBar {
      background-color: var(--white);
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      height: 250px;
      border-radius: 5px 0 0 5px;
      display: flex;
      align-items: center;
      box-shadow: -16px 16px 12px -14px rgba(171, 146, 225, 0.25);

      h3 {
        background-color: var(--offWhite);
        width: 100%;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--purple-100);
        box-shadow: 0px 5px 3px 2px rgba(171, 146, 225, 0.2);
        font-size: 23px;
        font-weight: 600;
      }

      .groupsContainer {
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        overflow-y: scroll;
        overflow-x: hidden;
        width: 95%;

        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ::-webkit-scrollbar-thumb {
          background: var(--grey-0);
          border-radius: 9px;
        }
        ::-webkit-scrollbar-track {
          background: var(--white);
          border-radius: 9px;
          box-shadow: inset 0px 0px 0px 0px transparent;
        }
      }
    }
  }
`;
