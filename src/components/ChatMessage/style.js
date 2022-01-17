import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100;
  `;
export const MessageContent = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 380px;
  padding: 10px;
  align-self: ${(props) => (props.owner ? "flex-end" : "flex-start")};
  flex-direction: ${(props) => (props.owner ? "row-reverse" : "row")};

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .message {
    padding: 10px;
    background-color: ${(props) => (props.owner ? "var(--purple-60)" : "var(--grey-0)")};
    color: ${(props) => (props.owner ? "var(--white)" : "var(--grey-100)")};
    border-radius: 10px; 

    p {
      font-size: 16px;
    }
  }
`;
