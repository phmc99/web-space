import { PostContainer } from "./style";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";
import { BsChatLeftText } from "react-icons/bs";
import { MdMoreHoriz } from "react-icons/md";

const Post = ({post}) => {
  return (
    <PostContainer photoUrl={post.photoUrl}>
      <div className="postImg" >
        <div className="postImgBackground"></div>
        <div className="postImgContent">
          <p>
            {post.title}
          </p>
          <button>Veja mais</button>
        </div>
      </div>
      <div className="postFooter">
        <div className="postInfo">
          <div className="icons">
            <HiArrowSmUp size={40} color={"var(--purple-60)"} />
            <span>{post.likes}</span>
          </div>
          <div className="icons">
            <HiArrowSmDown size={40} color={"var(--purple-60)"} />
            <span>X</span>
          </div>
          <div className="icons">
            <BsChatLeftText size={30} color={"var(--purple-60)"} />
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
