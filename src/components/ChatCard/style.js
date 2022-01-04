import styled from "styled-components";

export const ChatCardContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: var(--white);
  border-bottom: 1px solid var(--grey-0);
  padding: 10px;
  cursor: pointer;
  color: var(--grey-50);
  justify-content: flex-start;
  padding: 0 30px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  h2 {
    font-weight: 500;
    font-size: 22px;
  }
`;
