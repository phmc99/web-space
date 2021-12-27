import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 60%;
  height: 100vh;
  margin: 135px auto;
  background-color: var(--offwhite);
  border: 2px solid black;
  border-radius: 10px;

  .profileCard {
    width: 60%;
    height: 280px;
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    border-radius: 10px 10px 0 0;
    border-bottom: 2px solid var(--grey-0);
    position: fixed;

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

        h3 {
          font-weight: 500;
          font-size: 34px;
          position: relative;
          left: 170px;
        }
      }

      .profileInfo {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 50%;

        .bio {
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
`;