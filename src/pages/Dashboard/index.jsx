import { useEffect, useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { MainContainer } from "./styles";
import { BiWinkSmile } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { MdAddBox } from "react-icons/md";
import { useUser } from "../../providers/User";
import { usePost } from "../../providers/Post";

import FriendCard from "../../components/FriendCard";
import GroupCard from "../../components/GroupCard";
import PostModal from "../../components/PostModal";
import PostRead from "../../components/PostRead";
import Header from "../../components/Header";
import Post from "../../components/Post";
import user from "../../assets/img/amigo.png";
import api from "../../services";

const Dashboard = () => {
  const { userInfo, getUser } = useUser();
  const { postInfo } = usePost();

  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const [posts, setPosts] = useState([]);
  const [friendList, setFriendList] = useState([]);

  const token = JSON.parse(localStorage.getItem("@webspace:token") || "null");

  const getPosts = async () => {
    if (!token) {
      navigate("/");
    }
    const response = await api.get("/post", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setPosts(response.data.data);
  };

  const getFollowList = async () => {
    const response = await api.get(`/user/follows/${userInfo.followList}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const followers = response.data.followers;
    const followingUsernames = response.data.following.map((item) =>
      item.username.toLowerCase()
    );
    const newFriendList = followers.filter((item) =>
      followingUsernames.includes(item.username.toLowerCase())
    );

    setFriendList(newFriendList);
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    getFollowList();
    getPosts();
    // eslint-disable-next-line
  }, [userInfo]);

  return (
    <>
      {toggle && <PostModal setToggle={setToggle} />}
      {openPost && <PostRead post={postInfo} setOpenPost={setOpenPost} />}
      <Header />
      <MainContainer>
        <aside>
          <div
            className="userSettings"
            onClick={() => navigate(`/profile/${userInfo.username}`)}
          >
            <div>
              <img
                src={userInfo.photo ? userInfo.photo.url : user}
                alt="imagem"
              />
              <h2>{userInfo.username}</h2>
            </div>
          </div>
          <div className="infoSettings">
            <RiLightbulbFlashLine size={30} color={"var(--purple-50)"} />
            <p>Salvos</p>
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
                <Post
                  post={item}
                  key={index}
                  setOpenPost={setOpenPost}
                  openPost={openPost}
                />
              ))}
            </div>
          </div>
        </main>
        <section>
          <div className="friendsBar">
            {friendList.length > 0 ? (
              friendList.map((item, key) => (
                <FriendCard key={key} user={item} onClick={() => navigate(`/profile/${item.username}`)} />
              ))
            ) : (
              <h1>Conecte-se com novos amigos!</h1>
            )}
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
