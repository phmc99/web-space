import { PostContainer } from "./style";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";
import { BsChatLeftText } from "react-icons/bs";
import { MdMoreHoriz } from "react-icons/md";

import { usePost } from "../../providers/Post";

const Post = ({ post, setOpenPost }) => {
  const { getPost } = usePost();

  const handleClick = async () => {
    await getPost(post._id);
    setOpenPost(true);
  };

  return (
    <PostContainer photoUrl={post.photo ? post.photo.url : "https://picsum.photos/seed/picsum/1920/1080"}>
      <div className="postImg">
        <div className="postImgBackground"></div>
        <div className="postImgContent">
          <p>{post.title}</p>
          <button onClick={handleClick}>Veja mais</button>
        </div>
      </div>
      <div className="postFooter">
        <div className="postInfo">
          <div className="icons">
            <HiArrowSmUp size={35} color={"var(--purple-60)"} />
            <span>{post.likes.length}</span>
          </div>
          <div className="icons">
            <HiArrowSmDown size={35} color={"var(--purple-60)"} />
            <span>{post.dislikes.length}</span>
          </div>
          <div className="icons">
            <BsChatLeftText size={25} color={"var(--purple-60)"} />
            <span className="spanComment">{post.comments.length}</span>
          </div>
        </div>
        <div className="postSettings">
          <button>
            <MdMoreHoriz size={40} color={"var(--purple-60)"} />
          </button>
        </div>
      </div>
    </PostContainer>
  );
};

export default Post;
