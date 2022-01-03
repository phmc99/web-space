import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 60%;
  height: 100vh;
  margin: 135px auto;
  background-color: var(--offwhite);
  border-radius: 10px;

  .editPhoto {
  }

  .profileCard {
    width: 100%;
    height: 300px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    border-radius: 10px 10px 0 0;
    border-bottom: 2px solid var(--grey-0);

    .background {
      height: 195px;

      img {
        border-radius: 10px 10px 0 0;
        width: 100%;
        height: 70%;
      }
    }

    .infoCard {
      height: 65%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: var(--grey-100);

      .profilePhoto {
        height: 30px;
        margin: 0 3vw;

        figure {
          width: 130px;
          height: 130px;
          position: relative;
          top: -120px;
          border-radius: 50%;
          border: 18px solid var(--white);
          display: flex;
          justify-content: center;
        }

        img {
          width: 120%;
          height: 120%;
          border-radius: 50%;
          position: absolute;
          align-self: center;
        }

        .name {
          font-weight: 500;
          font-size: 34px;
          position: relative;
          left: 170px;

          span {
            font-size: 20px;
            color: var(--purple-0);
          }
        }

        .buttons {
          position: relative;
          left: 170px;
          display: flex;
          gap: 10px;

          button {
            cursor: pointer;
            width: 100px;
            border: 0;
            border-radius: 5px;
            padding: 3px;
            color: var(--offWhite);

            &:hover {
              filter: brightness(0.85);
            }
          }

          .message {
            background: var(--grey-0);
            color: var(--grey-50);
          }
          .follow {
            background: var(--purple-50);
          }
          .following {
            background: var(--purple-100);
          }
        }

        .editPhoto {
          display: none;

<<<<<<< HEAD
          .showBtn {
            background-color: var(--purple-60);
            position: absolute;
            left: 20px;
            height: 40px;
            width: 70px;
            border-radius: 5px;
            color: var(--white);
            border: none;
            cursor: pointer;
=======
          button {
            background-color: purple;
>>>>>>> 24ae899fe6a26db98dad998e7181e1a38a3d2d47
          }
        }

        figure:hover,
        img:hover {
          .editPhoto {
            position: relative;
            background-color: var(--white);
            opacity: 0.8;
            padding: 36%;
            border-radius: 50%;
            align-self: center;
            text-align: center;
            width: 120%;
            margin: 0;
            font-weight: 600;
            cursor: pointer;

            display: flex;
            justify-content: space-between;
            align-items: center;

            input[type="file"] {
              display: none;
            }

            label {
              color: var(--grey-50);
              width: 90px;
              height: 50px;
              display: flex;
              align-items: center;
              justify-content: center;

              :hover {
                color: var(--purple-60);
                cursor: pointer;
              }
            }
          }
        }
      }

      .profileInfo {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 50%;
        
        .bio {
          margin-top: 20px;
          width: 80%;
          color: var(--grey-50);
        }

        .follows {
          position: relative;
          top: -30px;
          text-align: center;

          p {
            font-size: 18px;
            font-weight: 500;
          }

          span {
            font-weight: 600;
            color: var(--purple-60);
          }
        }
      }
    }
  }

  .profileMainContainer {
    display: flex;
    gap: 20px;

    aside {
      border: 2px solid black;
      width: 20%;
      height: 500px;
      background-color: var(--white);
    }

    .posts {
      width: 100%;
    }
  }
`;
