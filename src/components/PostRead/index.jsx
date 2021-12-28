import {
  PostReadBackground,
  PostReadContent,
  PostReadContainer,
  UserDetails,
} from "./style";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { useEffect, useState } from "react";
import api from "../../services";
import imgPhoto from "../../assets/img/amigo.png";
import { usePost } from "../../providers/Post";

const PostRead = ({ setOpenPost, post }) => {
  const token = JSON.parse(localStorage.getItem("@webspace:token") || "null");

  const [userInfo, setUserInfo] = useState({});
  const [updatePost, setUpdatePost] = useState(false);
  const { postInfo, setPostInfo} = usePost()

  useEffect(() => {
    api
      .get(`user/${postInfo.user}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserInfo(res.data);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postInfo]);

  useEffect(() => {
    api
      .get(`post/${postInfo._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPostInfo(res.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatePost]);

  const updateLike = async () => {
    await api.patch(
      `/post/${postInfo._id}/likes`,
      { userId: userInfo._id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (postInfo.likes.includes(userInfo._id)) {
      const filterLikes = post.likes.filter((item) => item !== userInfo._id);
      postInfo.likes = filterLikes;
    } else {
      postInfo.likes = [...postInfo.likes, userInfo._id];
    }
    setUpdatePost(postInfo);
  };

  const updateDislike = async () => {
    await api.patch(
      `/post/${postInfo._id}/dislikes`,
      { userId: userInfo._id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (postInfo.dislikes.includes(userInfo._id)) {
      const filterDislikes = post.dislikes.filter((item) => item !== userInfo._id);
      postInfo.dislikes = filterDislikes;
    } else {
      postInfo.dislikes = [...postInfo.dislikes, userInfo._id];
    }
    setUpdatePost(postInfo);
  };

  return (
    <PostReadBackground>
      <PostReadContainer>
        <PostReadContent photoUrl={postInfo.photo ? postInfo.photo.url : ""}>
          <div className="close-button" onClick={() => setOpenPost(false)}>
            <AiOutlineClose />
          </div>
          <div className="image">
            <div className="image-blackout"></div>
          </div>
          <div className="read">
            <UserDetails>
              <img
                src={userInfo.photo ? userInfo.photo.url : imgPhoto}
                alt="userphoto"
              />
              <span>
                {userInfo.name} <span>({userInfo.username})</span>
              </span>
            </UserDetails>
            <h1>{postInfo.title}</h1>
            <div className="text-limit">
              <p>{postInfo.description}</p>
              <div className="post-date">
                <span>Data: {postInfo.createdAt}</span>
              </div>
              <hr />
              <div className="buttons">
                <div className="icons" onClick={updateLike}>
                  <HiArrowSmUp size={30} />
                  <span>
                    Upvote
                    <span className="count">
                      ({postInfo.likes ? postInfo.likes.length : 0})
                    </span>
                  </span>
                </div>
                <div className="icons" onClick={updateDislike}>
                  <HiArrowSmDown size={30} />
                  <span>
                    Downvote
                    <span className="count">
                      ({postInfo.dislikes ? postInfo.dislikes.length : 0})
                    </span>
                  </span>
                </div>
              </div>
              <div className="comments-title">
                <h2>Comentários:</h2>{" "}
                <span>
                  ({postInfo.comments ? postInfo.comments.length : 0})
                </span>
              </div>
              <form action="">
                <textarea
                  placeholder="Comente aqui..."
                  maxLength={"140"}
                  cols="30"
                  rows="10"
                />
                <button>Comentar</button>
              </form>
              <hr />
            </div>
          </div>
        </PostReadContent>
      </PostReadContainer>
    </PostReadBackground>
  );
};

export default PostRead;
