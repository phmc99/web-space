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

  const id = JSON.parse(localStorage.getItem("@webspace:id") || "null");
  const token = JSON.parse(localStorage.getItem("@webspace:token") || "null");

  const getUser = async () => {
    const resp = await api.get(`/user/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    setUserInfo(resp.data);
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