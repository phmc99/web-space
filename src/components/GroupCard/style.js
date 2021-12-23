import styled from "styled-components";

export const GroupCardContainer = styled.div`
  background-color: var(--offWhite);
  width: 95%;
  height: 80px;
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;

  .perfilGroup {
    display: flex;
    align-items: center;
    color: var(--grey-50);
  }

  .infoGroup {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: 0 10px;
  }

  button {
    background-color: transparent;
    border: none;
    margin: 15px;
    cursor: pointer;
  }
`;
