import { PostModalContainer, PostContainer } from "./style";
import { HiX } from "react-icons/hi";
import { useState } from "react";
import { useUser } from "../../providers/User";

import Button from "../Button";
import api from "../../services";

const PostModal = ({ setToggle }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const { userInfo } = useUser();

  const initialFormData = {
    title: title,
    description: description,
    photoUrl: photoUrl,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({ ...initialFormData, user: userInfo._id });
    const token = JSON.parse(localStorage.getItem("@webspace:token") || "null");
    await api.post("/post/", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setToggle(false);
  };

  return (
    <PostModalContainer>
      <PostContainer>
        <div className="headerPostModal">
          <h1>Nova Publicação</h1>
          <div className="closeButton" onClick={() => setToggle(false)}>
            <HiX size={30} color={"var(--purple-50)"} />
          </div>
        </div>
        <form className="inputContainer" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Digite o título da sua publicação"
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
            name={"title"}
          />
          <textarea
            placeholder="Escreva aqui..."
            rows={"12"}
            required
            minLength={"75"}
            value={description}
            onChange={(evt) => setDescription(evt.target.value)}
            name={"description"}
          />
          <div className="postFooter">
            <input
              placeholder="Adicione a url de uma imagem..."
              type="text"
              value={photoUrl}
              onChange={(evt) => setPhotoUrl(evt.target.value)}
              name={"photoUrl"}
            />
            <Button type={"action"}>Postar</Button>
          </div>
        </form>
      </PostContainer>
    </PostModalContainer>
  );
};

export default PostModal;
