import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../services";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const token = JSON.parse(localStorage.getItem("@webspace:token") || "null");
  const username = JSON.parse(localStorage.getItem("@webspace:username") || "null");

  const getUser = async () => {
    const resp = await api.get(`/user/${username}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    setUserInfo(resp.data[0]);
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);