import styled from "styled-components";

export const FriendCardContainer = styled.div`
  width: 110px;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 5px;
  color: var(--grey-50);

  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }

  &:hover {
    cursor: pointer;
  }
`;
