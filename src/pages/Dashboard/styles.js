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
    height: 75%;
    margin-top: 150px;
    border-radius: 5px;
    box-shadow: 0px 3px 8px 1px rgba(0, 0, 0, 0.15);
    position: fixed;
    left: 50px;
    display: flex;
    justify-content: center;

    .userSettings {
      width: 100%;
      height: 110px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      border-bottom: 2px solid var(--grey-0);


      img {
        border-radius: 50%;
        width: 110px;
        height: 80px;
      }

      h2 {
        font-size: 22px;
        color: var(--grey-100);
        font-weight: 400;
        padding-right: 15px;
      }
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

        .text-button {
          width: 110%;
          height: 45px;
          margin: 15px 10px;
          font-size: 18px;
          border: none;
          outline: none;
          padding: 0 20px;
          color: var(--grey-0);
          &:hover {
            filter: brightness(.85);
          }
        }

        .textOptions {
          gap: 80px;
          margin-left: 20px;
          width: 80%;
          height: 100px;

          button {
            margin: 10px;
            border: none;
            background-color: transparent;
            cursor: pointer;
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
      ::-webkit-scrollbar {
        display: none;
      }
      color: var(--grey-100);

      .friendsCards {
        width: 110px;
        height: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 5px;

        img {
          border-radius: 50%;
          width: 70px;
          height: 70px;
          border: 2px solid black;
        }
      }
    }

    .groupsBar {
      background-color: var(--white);
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      height: 270px;
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
    }
  }
`;
