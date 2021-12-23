import styled from "styled-components";

export const PostContainer = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  border-radius: 8px;
  box-shadow: 0px 3px 8px 1px rgb(0 0 0 / 15%);
  background-color: var(--white);

  .postImg {
    width: 100%;
    height: 80%;
    border-radius: 8px 8px 0 0;
    background-image: ${(props) => `url(${props.photoUrl})`};
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
      position: absolute;
      height: 100%;
      width: 100%;
      padding: 10px 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      left: 0;
      top: 0;
    }

    p {
      width: 90%;
      height: auto;
      color: white;
      font-size: 180%;
      font-weight: 800;
    }

    button {
      border: none;
      border-radius: 20px;
      background-color: var(--purple-50);
      color: white;
      font-size: 16px;
      padding: 5px;
      width: 90px;
    }

    button:hover {
      cursor: pointer;
      filter: brightness(.85)
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
