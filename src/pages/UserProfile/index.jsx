import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProfileContainer } from "./styles";
import { usePost } from "../../providers/Post";
import { useUser } from "../../providers/User";

import PostRead from "../../components/PostRead";
import Header from "../../components/Header";
import Post from "../../components/Post";
import api from "../../services";
import userPhoto from "../../assets/img/amigo.png";
import toast from "react-hot-toast";

const UserProfile = () => {
  const [openPost, setOpenPost] = useState(false);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([]);
  const [file, setFile] = useState("");
  const [showBtn, setShowBtn] = useState(false);
  const [followList, setFollowList] = useState({});
  const [message, setMessage] = useState(false);

  const token = JSON.parse(localStorage.getItem("@webspace:token") || "null");
  const navigate = useNavigate();

  const { postInfo } = usePost();
  const { userInfo } = useUser();
  const { username } = useParams();

  const handleFile = (evt) => {
    setFile(evt.target.files[0]);
    setShowBtn(true);
  };

  const getPosts = async () => {
    if (!token) {
      navigate("/");
    }

    const response = await api.get(`/post?username=${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setPosts(response.data.data);
  };

  const getUser = async () => {
    if (!token) {
      navigate("/");
    }

    const response = await api.get(`/user/${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(response.data[0]);
    console.log(response.data[0]);
  };

  const userhost = JSON.parse(
    localStorage.getItem("@webspace:username") || "null"
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("file", file);

    await api
      .patch(`/user/${user._id}/photo`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res));
  };

  const getFollowList = async () => {
    await api
      .get(`/user/follows/${user.followList}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setFollowList(res.data);
        const followers = res.data.followers;
        const following = res.data.following;

        const isFollower = followers.find((item) => userInfo._id === item._id);
        const isFollowing = following.find((item) => userInfo._id === item._id);

        if (isFollower && isFollowing) {
          setMessage(true);
        } else {
          setMessage(false)
        }
      });
  };

  const followButton =
    followList.followers &&
    followList.followers
      .map((item) => item.username)
      .includes(userInfo.username);

  const follow = async () => {
    await api
      .patch(
        `/user/${userInfo._id}/follow/${user._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success(res.data.msg);
        getFollowList();
      });
  };

  const newConversation = async () => {
    const response = await api.post(
      "/conversation",
      {
        senderId: userInfo._id,
        receiverId: user._id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    navigate("/messenger");
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUser();
    getPosts();
    // eslint-disable-next-line
  }, [openPost]);

  useEffect(() => {
    getFollowList();
    // eslint-disable-next-line
  }, [user]);

  return (
    <>
      {openPost && <PostRead post={postInfo} setOpenPost={setOpenPost} />}
      <Header />
      <ProfileContainer>
        <div className="profileCard">
          <div className="background">
            <img
              src={"https://picsum.photos/seed/picsum/800/120"}
              alt="imgBackground"
            />
            <div className="infoCard">
              <div className="profilePhoto">
                <div className="name">
                  {user.name} <span>({user.username})</span>
                </div>
                {userhost !== user.username && (
                  <div className="buttons">
                    <button
                      className={followButton ? "following" : "follow"}
                      onClick={follow}
                    >
                      {followButton ? "Seguindo" : "Seguir"}
                    </button>
                    {message && (
                      <button className="message" onClick={newConversation}>
                        Mensagem
                      </button>
                    )}
                  </div>
                )}

                <figure>
                  <img
                    src={user.photo ? user.photo.url : userPhoto}
                    alt="imgProfile"
                  />
                  <form className="editPhoto" onSubmit={handleSubmit}>
                    <label for="selectFile">Editar foto</label>
                    <input
                      id="selectFile"
                      type="file"
                      accept="image/png, image/jpeg"
                      onChange={handleFile}
                      name="file"
                    />
                    {showBtn && (
                      <button className="showBtn" type="submit">
                        Enviar
                      </button>
                    )}
                  </form>
                </figure>
              </div>
              <div className="profileInfo">
                {/* <div className="bio">{user.bio}</div> */}
                <div className="bio">
                  <p>Olá, essa pagina pertence à {username}</p>
                </div>
                <div className="follows">
                  <p>Seguidores</p>
                  <span>
                    {followList.followers ? followList.followers.length : "-"}
                  </span>
                  <p>Seguindo</p>
                  <span>
                    {followList.following ? followList.following.length : "-"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profileMainContainer">
          <div className="posts">
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
      </ProfileContainer>
    </>
  );
};

export default UserProfile;
