import { IoImageOutline } from "react-icons/io5";
import { MainContainer } from "./styles";
import { BiWinkSmile } from "react-icons/bi";
import { useEffect, useState } from "react";
import { MdAddBox } from "react-icons/md";
import { useUser } from "../../providers/User";
import { usePost } from "../../providers/Post";

import PostModal from "../../components/PostModal";
import FriendCard from "../../components/FriendCard";
import GroupCard from "../../components/GroupCard";
import PostRead from "../../components/PostRead";
import Header from "../../components/Header";
import Post from "../../components/Post";
import user from "../../assets/img/amigo.png";
import api from "../../services";

const Dashboard = () => {
  const { userInfo, getUser } = useUser();
  const { postInfo } = usePost();

  const [toggle, setToggle] = useState(false);
  const [openPost, setOpenPost] = useState(false);

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const token = JSON.parse(localStorage.getItem("@webspace:token") || "null");
    const response = await api.get("/post", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setPosts(response.data.data);
  };

  useEffect(() => {
    getUser();
    getPosts();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, [openPost]);


  return (
    <>
      {toggle && <PostModal setToggle={setToggle} />}
      {openPost && <PostRead post={postInfo} setOpenPost={setOpenPost} />}
      <Header />
      <MainContainer>
        <aside>
          <div className="userSettings">
            <img src={user} alt="imagem" />
            <h2>{userInfo.username}</h2>
          </div>
        </aside>
        <main>
          <div className="createPost">
            <div className="inputContainer">
              <div className="text-button" onClick={() => setToggle(true)}>
                <span>
                  "Em algum lugar, algo incrível está esperando para ser
                  descoberto." Compartilhe!
                </span>
              </div>
              <div className="textOptions">
                <button onClick={() => setToggle(true)}>
                  <IoImageOutline color={"var(--purple-60)"} />
                </button>
                <button onClick={() => setToggle(true)}>
                  <BiWinkSmile color={"var(--purple-60)"} />
                </button>
              </div>
            </div>
            <button className="buttonAdd" onClick={() => setToggle(true)}>
              <MdAddBox size={50} color={"var(--purple-60)"} />
            </button>
          </div>
          <div className="posts">
            <div>
              {posts.map((item, index) => (
                <Post post={item} key={index} setOpenPost={setOpenPost} openPost={openPost}/>
              ))}
            </div>
          </div>
        </main>
        <section>
          <div className="friendsBar">
            <FriendCard />
            <FriendCard />
            <FriendCard />
            <FriendCard />
            <FriendCard />
            <FriendCard />
            <FriendCard />
          </div>
          <div className="groupsBar">
            <h3>Meus Grupos</h3>
            <div className="groupsContainer">
              <GroupCard />
              <GroupCard />
              <GroupCard />
            </div>
          </div>
          <div className="groupsBar">
            <h3>Outros Grupos</h3>
            <div className="groupsContainer">
              <GroupCard />
              <GroupCard />
              <GroupCard />
            </div>
          </div>
        </section>
      </MainContainer>
    </>
  );
};

export default Dashboard;
