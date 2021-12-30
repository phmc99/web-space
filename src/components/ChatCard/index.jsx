import { useEffect, useState } from "react";
import api from "../../services";
import { ChatCardContainer } from "./style"

const ChatCard = ({user}) => {
  const token = JSON.parse(localStorage.getItem("@webspace:token") || "null");
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    api
      .get(`user/${user}`, {
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
    <ChatCardContainer>
      <img src={userInfo.photo ? userInfo.photo.url : "https://picsum.photos/200"} alt="userphoto" />
      <h2>{userInfo.username}</h2>
    </ChatCardContainer>
  )
}

export default ChatCard
