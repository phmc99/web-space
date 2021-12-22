import styled from "styled-components";

export const FormBoxLogin = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 10px;
  text-align: center;
  background: var(--white);
  border-radius: 5px;
  box-shadow: 0px 5px 5px rgb(37, 37, 37, 0.25);

  hr {
    height: 1px;
    width: 100%;
    background: var(--grey-0);
    margin: 10px 0;
    border: 0;
  }

  form {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    color: var(--purple-0);
  }

  @media (min-width: 768px) {
    max-width: 420px;
  }
`;

export const FormPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;

  .form {
    .error-message {
      color: red;
      font-size: 0.7rem;
      margin-bottom: 5px;
      height: 14px;
    }
  }

  .app-info {
    display: none;
  }

  @media (min-width: 768px) {
    .form {
      width: 50%;
      position: static;
      top: 0;
      left: 0;
      transform: none;

      margin: 0 auto;
    }
    .register-illustration {
      width: 50%;
      display: flex;
      justify-content: center;
      img {
        width: 70%;
      }
    }
    .app-info {
      height: 100vh;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .aside-content {
        width: 80%;
        p {
          padding-left: 15px;
          font-size: 24px;
          color: var(--purple-60);
        }
      }
      .title {
        display: flex;
        align-items: center;
        img {
          width: 100px;
        }
        h1 {
          font-size: 64px;
          font-weight: 800;
          color: var(--purple-100);
        }
      }
    }
  }
`;
