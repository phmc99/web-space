import logo from "../../assets/img/webSpace-logo.png";
import api from "../../services";
import userPhoto from "../../assets/img/amigo.png";

import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { HeaderContainer } from "./styles";
import { IoMdPaperPlane } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("@webspace:token") || "null");

  const [users, setUsers] = useState([]);
  const [toggleList, setToggleList] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);

  const handleNavigate = (page) => {
    navigate(`/${page}`);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const getUsers = async () => {
    await api
      .get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUsers(res.data.data);
      });
  };

  const searchUsers = () => {
    if (filteredUser === "") {
      setToggleList(false);
    } else {
      setUsersList(
        users.filter((item) => {
          let search = item.name.toLowerCase();
          setToggleList(true);
          return search.includes(filteredUser.toLowerCase());
        })
      );
    }
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    searchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredUser]);

  return (
    <HeaderContainer>
      <div className="logoContainer" onClick={() => navigate("/dashboard")}>
        <h1>WebSpace</h1>
        <img src={logo} alt="logo" />
      </div>
      <div className="mainContainer">
        <div className="inputContainer">
          <div className="iconSearch">
            <AiOutlineSearch size={40} color={"var(--purple-0)"} />
          </div>
          <input
            type="text"
            value={filteredUser}
            onChange={(e) => setFilteredUser(e.target.value)}
          />
          {/* <button onClick={() => searchUsers(filteredUser)}>Pesquisar</button> */}
          {toggleList && (
            <div className="showUsersList">
              {usersList.map((item) => (
                <div
                  className="cardUser"
                  onClick={() => navigate(`/profile/${item.username}`)}
                >
                  <img
                    src={item.photo ? item.photo.url : userPhoto}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                  <span>{item.username}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <button>
          <IoNotificationsOutline size={40} color={"var(--purple-50)"} />
        </button>
        <button onClick={() => handleNavigate("messenger")}>
          <IoMdPaperPlane size={43} color={"var(--purple-50)"} />
        </button>
        <button>
          <FiLogOut size={35} color={"var(--purple-50)"} onClick={logout} />
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
