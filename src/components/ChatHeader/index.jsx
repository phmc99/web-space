import { HeaderContainer } from "./style";
import { MdMoreHoriz } from "react-icons/md";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services";

const ChatHeader = ({user}) => {
  const token = JSON.parse(localStorage.getItem("@webspace:token") || "null");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`user/id/${user}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserData(res.data);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <HeaderContainer onClick={() => navigate(`/profile/${userData.username}`)}>
      <div className="user">
        <img src={userData.photo ? userData.photo.url : "https://picsum.photos/200"} alt="user" />
        <h2>{userData.name} ({userData.username})</h2>
      </div>
      <button>
        <MdMoreHoriz size={40} color={"var(--purple-60)"} />
      </button>
    </HeaderContainer>
  );
};

export default ChatHeader;
