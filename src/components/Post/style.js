import styled from "styled-components";

export const PostContainer = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  border-radius: 8px;
  box-shadow: 0px 3px 8px 1px rgb(0 0 0 / 15%);
  background-color: var(--white);
  box-sizing: border-box;

  .postImg {
    width: 100%;
    height: 80%;
    border-radius: 8px 8px 0 0;
    background-image: url("https://picsum.photos/id/237/600/300");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    .postImgBackground {
      background-color: black;
      opacity: 0.65;
      width: 100%;
      height: 100%;
      border-radius: 8px 8px 0 0;
    }

    .postImgContent {
      padding: 10px;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      top: 40px;
      left: 0;
    }

    p {
      margin-left: 40px;
      width: 90%;
      height: auto;
      color: white;
      font-size: 180%;
      font-weight: 800;
    }

    button {
      box-sizing: border-box;
      margin-top: 50px;
      border: none;
      border-radius: 20px;
      width: 110px;
      padding: 3px;
      background-color: var(--purple-50);
      color: white;
      font-size: 18px;
      margin-left: 10px;
      cursor: pointer;
    }

    button:hover {
      background-color: var(--purple-60);
    }
  }

  .postFooter {
    width: 99%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .postInfo {
      padding-left: 30px;
      display: flex;
      justify-content: center;
      gap: 25px;
      height: 30px;

      .icons {
        display: flex;
        justify-content: center;
        align-items: center;

        .spanComment {
          margin-left: 8px;
        }

        span {
          font-size: 20px;
        }
      }
    }

    .postSettings {
      padding-right: 10px;

      button {
        cursor: pointer;
        border: none;
        background-color: transparent;
      }
    }
  }
`;
