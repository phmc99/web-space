import { useState, useEffect } from "react";
import { ProfileContainer } from "./styles";
import { usePost } from "../../providers/Post";
import { useUser } from "../../providers/User";

import Header from "../../components/Header";
import Post from "../../components/Post";
import PostRead from "../../components/PostRead";
import api from "../../services";

const UserProfile = () => {
  const [openPost, setOpenPost] = useState(false);
  const [posts, setPosts] = useState([]);

  const { postInfo } = usePost();
  const { userInfo } = useUser();

  const userId = JSON.parse(localStorage.getItem("@webspace:id") || "null");

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
    getPosts();
    // eslint-disable-next-line
  }, [openPost]);

  const postUser = posts.filter((item) => item.user === userId);
  //funciona apenas para o perfil do usuario logado

  return (
    <>
      {openPost && <PostRead post={postInfo} setOpenPost={setOpenPost} />}
      <Header />
      <ProfileContainer>
        <div className="profileCard">
          <div className="background">
            <img
              src="https://picsum.photos/seed/picsum/800/120"
              alt="imgBackground"
            />
            <div className="infoCard">
              <div className="profilePhoto">
                <h3>
                  {userInfo.name} <span>({userInfo.username})</span>
                </h3>

                <figure>
                  {/* <img
                    src={userInfo.photo}
                    alt="imgProfile"
                  /> */}
                  <img
                    src="https://picsum.photos/id/237/200/300"
                    alt="imgProfile"
                  />
                </figure>
              </div>
              <div className="profileInfo">
                {/* <div className="bio">{userInfo.bio}</div> */}
                <div className="bio">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                  et ducimus placeat omnis fugit.
                </div>
                <div className="follows">
                  <p>Seguidores</p>
                  {/* <span>{userInfo.followers}</span> */}
                  <span>1452</span>
                  <p>Seguindo</p>
                  {/* <span>{userInfo.following}</span> */}
                  <span>1452</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profileMainContainer">
          <aside></aside>
          <div className="posts">
            {postUser.map((item, index) => (
              <Post
                post={item}
                key={index}
                setOpenPost={setOpenPost}
                openPost={openPost}
              />
            ))}
          </div>
        </div>
      </ProfileContainer>
    </>
  );
};

export default UserProfile;
