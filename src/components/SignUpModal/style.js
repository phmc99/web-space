import styled from "styled-components";

export const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgb(77, 77, 77, 0.5);
  position: fixed;
  z-index: 2;
`;

export const SignUpBox = styled.div`
  background: var(--white);
  width: 90%;
  height: 90%;
  max-width: 820px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  overflow: scroll;
  text-align: center;
  @media (min-width: 768px) {
    height: auto;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const HeaderSignUp = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    color: var(--purple-100);
  }
  .close-button {
    height: 100%;
    display: flex;
    svg {
      font-size: 24px;
      color: var(--purple-100);
      cursor: pointer;
    }
  }
`;

export const DoubleInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 5px;
  }
`;
