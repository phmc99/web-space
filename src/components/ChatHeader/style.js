import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: var(--white);
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    color: var(--grey-50);

    .user {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      img {
        width: 40px;
        border-radius: 50%;
      }
      h2 {
        font-weight: 500;
        font-size: 18px;
      }
`;