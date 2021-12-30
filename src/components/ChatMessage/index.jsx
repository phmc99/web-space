import { MessageContainer, MessageContent } from "./style";
import { useEffect, useState } from "react";
import api from "../../services";

const ChatMessage = ({owner, data}) => {
  const token = JSON.parse(localStorage.getItem("@webspace:token") || "null");
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    api
      .get(`user/${data.senderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserInfo(res.data);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MessageContainer>
      <MessageContent owner={owner}>
        <img src={userInfo.photo ? userInfo.photo.url : "https://picsum.photos/200"} alt="userphoto" />
        <div className="message">
          <p>
            {data.text}
          </p>
        </div>
      </MessageContent>
    </MessageContainer>
  );
};

export default ChatMessage;
