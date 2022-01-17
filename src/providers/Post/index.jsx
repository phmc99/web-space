import {
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react";
  import api from "../../services";
  
  const PostContext = createContext();
  
  export const PostProvider = ({ children }) => {
    const [postInfo, setPostInfo] = useState({});
  
    const token = JSON.parse(localStorage.getItem("@webspace:token") || "null");
  
    const getPost = async (id) => {
      const resp = await api.get(`/post/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      setPostInfo(resp.data);
      /* console.log(resp) */
    };
  
    useEffect(() => {
      getPost();
      // eslint-disable-next-line
    }, []);
  
    return (
      <PostContext.Provider value={{ postInfo, setPostInfo, getPost }}>
        {children}
      </PostContext.Provider>
    );
  };
  
  export const usePost = () => useContext(PostContext);